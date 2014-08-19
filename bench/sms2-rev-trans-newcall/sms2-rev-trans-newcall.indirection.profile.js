
JAM.startProfile('load');
function v7() {
  var v861 = document.forms;
  var v709 = v861[0];
  var v432 = v709.elements;
  var v8 = v432[0];
  v8.value = " ";
  var v862 = document.forms;
  var v710 = v862[0];
  var v433 = v710.elements;
  var v9 = v433[4];
  v9.value = " ";
  return
}
function v6() {
  try {
    revTrans(document)
  }catch(e$$6) {
    var v10 = "The following error was encountered: " + e$$6;
    alert(v10)
  }
  return
}
function v5() {
  var v434 = document.main_form;
  var v11 = v434.main_submit;
  JAM.call(v11.focus, v11, [], JAM.policy.p13);
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
  var v12 = arrayOfSequences[0];
  var lengthOfAlign = v12.length;
  var v435 = arrayOfSequences.length;
  var v13 = v435 < 2;
  if(v13) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v436 = arrayOfTitles.length;
  var v15 = i$$1 < v436;
  for(;v15;) {
    var v863 = arrayOfTitles[i$$1];
    var v711 = JAM.call(v863.search, v863, [/\S/], JAM.policy.p13);
    var v437 = v711 == -1;
    var v713 = !v437;
    if(v713) {
      var v956 = arrayOfSequences[i$$1];
      var v864 = JAM.call(v956.search, v956, [/\S/], JAM.policy.p13);
      var v712 = v864 == -1;
      var v866 = !v712;
      if(v866) {
        var v957 = arrayOfSequences[i$$1];
        var v865 = v957.length;
        v712 = v865 != lengthOfAlign
      }
      v437 = v712
    }
    var v14 = v437;
    if(v14) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v438 = arrayOfTitles.length;
    v15 = i$$1 < v438
  }
  return true
}
function checkCodonTable(codonTable) {
  var v714 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p13);
  var v439 = v714 == -1;
  var v716 = !v439;
  if(v716) {
    var v867 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p13);
    var v715 = v867 == -1;
    var v869 = !v715;
    if(v869) {
      var v958 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p13);
      var v868 = v958 == -1;
      var v960 = !v868;
      if(v960) {
        var v1012 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p13);
        var v959 = v1012 == -1;
        var v1014 = !v959;
        if(v1014) {
          var v1013 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p13);
          v959 = v1013 == -1
        }
        v868 = v959
      }
      v715 = v868
    }
    v439 = v715
  }
  var v16 = v439;
  if(v16) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v717 = formElement.value;
  var v440 = JAM.call(v717.search, v717, [/\S/], JAM.policy.p13);
  var v17 = v440 == -1;
  if(v17) {
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
  var v441 = arrayOfPatterns.length;
  var v20 = z$$2 < v441;
  for(;v20;) {
    var v718 = arrayOfPatterns[z$$2];
    var v442 = JAM.call(v718.search, v718, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p13);
    var v18 = v442 == -1;
    if(v18) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    var v719 = arrayOfPatterns[z$$2];
    var v443 = moreExpressionCheck(v719);
    var v19 = v443 == false;
    if(v19) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v444 = arrayOfPatterns.length;
    v20 = z$$2 < v444
  }
  var v21 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v21);
  var v22 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v22);
  var j = 0;
  var v445 = arrayOfPatterns.length;
  var v29 = j < v445;
  for(;v29;) {
    var v23 = geneticCodeMatchExp;
    var v24 = j;
    var v870 = arrayOfPatterns[j];
    var v720 = JAM.call(v870.match, v870, [/\/.+\//], JAM.policy.p13);
    var v446 = v720 + "gi";
    if(JAM.isEval(eval)) {
      var v1130 = eval("introspect(JAM.policy.pFull) { " + v446 + " }")
    }else {
      var v1130 = JAM.call(eval, null, [v446])
    }
    v23[v24] = v1130;
    var v25 = geneticCodeMatchResult;
    var v26 = j;
    var v721 = arrayOfPatterns[j];
    var v447 = JAM.call(v721.match, v721, [/=[a-zA-Z\*]/], JAM.policy.p13);
    var v1131 = JAM.call(v447.toString, v447, [], JAM.policy.p13);
    v25[v26] = v1131;
    var v27 = geneticCodeMatchResult;
    var v28 = j;
    var v448 = geneticCodeMatchResult[j];
    var v1132 = JAM.call(v448.replace, v448, [/=/g, ""], JAM.policy.p13);
    v27[v28] = v1132;
    j = j + 1;
    var v449 = arrayOfPatterns.length;
    v29 = j < v449
  }
  var i$$2 = 0;
  var v722 = testSequence.length;
  var v450 = v722 - 3;
  var v36 = i$$2 <= v450;
  for(;v36;) {
    var v30 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v30], JAM.policy.p13);
    j = 0;
    var v451 = geneticCodeMatchExp.length;
    var v34 = j < v451;
    for(;v34;) {
      var v723 = geneticCodeMatchExp[j];
      var v452 = JAM.call(codon.search, codon, [v723], JAM.policy.p23);
      var v33 = v452 != -1;
      if(v33) {
        var v32 = oneMatch == true;
        if(v32) {
          var v453 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v31 = v453 + ".";
          alert(v31);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v454 = geneticCodeMatchExp.length;
      v34 = j < v454
    }
    var v35 = oneMatch == false;
    if(v35) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v724 = testSequence.length;
    var v455 = v724 - 3;
    v36 = i$$2 <= v455
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v456 = arrayOfPatterns$$1.length;
  var v38 = z$$3 < v456;
  for(;v38;) {
    var v725 = arrayOfPatterns$$1[z$$3];
    var v457 = JAM.call(v725.search, v725, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p13);
    var v37 = v457 != -1;
    if(v37) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v458 = arrayOfPatterns$$1.length;
    v38 = z$$3 < v458
  }
  var i$$3 = 0;
  var v459 = arrayOfPatterns$$1.length;
  var v42 = i$$3 < v459;
  for(;v42;) {
    var v726 = arrayOfPatterns$$1[i$$3];
    var v460 = "[" + v726;
    var v39 = v460 + "]";
    var re = new RegExp(v39, "gi");
    var j$$1 = i$$3 + 1;
    var v461 = arrayOfPatterns$$1.length;
    var v41 = j$$1 < v461;
    for(;v41;) {
      var v727 = arrayOfPatterns$$1[j$$1];
      var v462 = JAM.call(v727.search, v727, [re], JAM.policy.p23);
      var v40 = v462 != -1;
      if(v40) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v463 = arrayOfPatterns$$1.length;
      v41 = j$$1 < v463
    }
    i$$3 = i$$3 + 1;
    var v464 = arrayOfPatterns$$1.length;
    v42 = i$$3 < v464
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v465 = arrayOfPatterns$$2.length;
  var v45 = z$$4 < v465;
  for(;v45;) {
    var v728 = arrayOfPatterns$$2[z$$4];
    var v466 = JAM.call(v728.search, v728, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p13);
    var v43 = v466 == -1;
    if(v43) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    var v729 = arrayOfPatterns$$2[z$$4];
    var v467 = moreExpressionCheck(v729);
    var v44 = v467 == false;
    if(v44) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v468 = arrayOfPatterns$$2.length;
    v45 = z$$4 < v468
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v871 = getSequenceFromFasta(text$$7);
  var v730 = JAM.call(v871.replace, v871, [/[^A-Za-z]/g, ""], JAM.policy.p13);
  var v469 = v730.length;
  var v47 = v469 > maxInput;
  if(v47) {
    var v470 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v46 = v470 + " characters.";
    alert(v46);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v471 = text$$8.length;
  var v49 = v471 > maxInput$$1;
  if(v49) {
    var v472 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v48 = v472 + " characters.";
    alert(v48);
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
  var v50 = outputWindow.document;
  JAM.call(v50.write, v50, ["</form>"], JAM.policy.p14);
  return true
}
function closePre() {
  var v51 = outputWindow.document;
  JAM.call(v51.write, v51, ["</div>"], JAM.policy.p14);
  var v52 = outputWindow.document;
  JAM.call(v52.write, v52, ["</pre>\n"], JAM.policy.p14);
  return
}
function closeTextArea() {
  var v53 = outputWindow.document;
  JAM.call(v53.write, v53, ["</textarea>"], JAM.policy.p14);
  return true
}
function closeWindow() {
  var v54 = outputWindow.document;
  JAM.call(v54.write, v54, ["</body>\n</html>\n"], JAM.policy.p14);
  outputWindow.status = "Done.";
  var v55 = outputWindow.document;
  JAM.call(v55.close, v55, [], JAM.policy.p13);
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
  var v473 = alignArray.length;
  var v56 = v473 < 3;
  if(v56) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v474 = alignArray.length;
  var v58 = i$$4 < v474;
  for(;v58;) {
    var v731 = alignArray[i$$4];
    var v475 = JAM.call(v731.search, v731, [/[^\s]+\s/], JAM.policy.p13);
    var v57 = v475 == -1;
    if(v57) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v476 = alignArray.length;
    v58 = i$$4 < v476
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
  var v477 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p13);
  var v61 = v477 != -1;
  if(v61) {
    var v60 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p23);
    for(;v60;) {
      var v59 = matchArray[0];
      JAM.call(arrayOfFasta.push, arrayOfFasta, [v59], JAM.policy.p23);
      v60 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p23)
    }
  }else {
    arrayOfFasta[0] = sequenceData
  }
  return arrayOfFasta
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v478 = sequence$$2.length;
  var v62 = "&gt;results for " + v478;
  var stringToReturn = v62 + " residue sequence ";
  var v479 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p13);
  var v64 = v479 != -1;
  if(v64) {
    var v480 = stringToReturn + '"';
    var v63 = v480 + fastaSequenceTitle;
    stringToReturn = v63 + '"'
  }
  var v481 = stringToReturn + ' starting "';
  var v482 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p13);
  var v65 = v481 + v482;
  stringToReturn = v65 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v483 = sequenceOne.length;
  var v66 = "Search results for " + v483;
  var stringToReturn$$1 = v66 + " residue sequence ";
  var v484 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p13);
  var v68 = v484 != -1;
  if(v68) {
    var v485 = stringToReturn$$1 + '"';
    var v67 = v485 + fastaSequenceTitleOne;
    stringToReturn$$1 = v67 + '"'
  }
  var v486 = stringToReturn$$1 + ' starting "';
  var v487 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p13);
  var v69 = v486 + v487;
  stringToReturn$$1 = v69 + '"\n';
  var v488 = stringToReturn$$1 + "and ";
  var v489 = sequenceTwo.length;
  var v70 = v488 + v489;
  stringToReturn$$1 = v70 + " residue sequence ";
  var v490 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p13);
  var v72 = v490 != -1;
  if(v72) {
    var v491 = stringToReturn$$1 + '"';
    var v71 = v491 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v71 + '"'
  }
  var v492 = stringToReturn$$1 + ' starting "';
  var v493 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p13);
  var v73 = v492 + v493;
  stringToReturn$$1 = v73 + '"';
  var v74 = '<div class="info">' + stringToReturn$$1;
  return v74 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v75 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v75);
  var j$$2 = 0;
  var v494 = arrayOfPatterns$$3.length;
  var v78 = j$$2 < v494;
  for(;v78;) {
    var v76 = geneticCodeMatchExp$$1;
    var v77 = j$$2;
    var v872 = arrayOfPatterns$$3[j$$2];
    var v732 = JAM.call(v872.match, v872, [/\/.+\//], JAM.policy.p13);
    var v495 = v732 + "gi";
    if(JAM.isEval(eval)) {
      var v1133 = eval("introspect(JAM.policy.pFull) { " + v495 + " }")
    }else {
      var v1133 = JAM.call(eval, null, [v495])
    }
    v76[v77] = v1133;
    j$$2 = j$$2 + 1;
    var v496 = arrayOfPatterns$$3.length;
    v78 = j$$2 < v496
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v79 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v79);
  var j$$3 = 0;
  var v497 = arrayOfPatterns$$4.length;
  var v84 = j$$3 < v497;
  for(;v84;) {
    var v80 = geneticCodeMatchResult$$1;
    var v81 = j$$3;
    var v733 = arrayOfPatterns$$4[j$$3];
    var v498 = JAM.call(v733.match, v733, [/=[a-zA-Z\*]/], JAM.policy.p13);
    var v1134 = JAM.call(v498.toString, v498, [], JAM.policy.p13);
    v80[v81] = v1134;
    var v82 = geneticCodeMatchResult$$1;
    var v83 = j$$3;
    var v499 = geneticCodeMatchResult$$1[j$$3];
    var v1135 = JAM.call(v499.replace, v499, [/=/g, ""], JAM.policy.p13);
    v82[v83] = v1135;
    j$$3 = j$$3 + 1;
    var v500 = arrayOfPatterns$$4.length;
    v84 = j$$3 < v500
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v501 = sequence$$3.length;
  var v85 = "Results for " + v501;
  var stringToReturn$$2 = v85 + " residue sequence ";
  var v502 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p13);
  var v87 = v502 != -1;
  if(v87) {
    var v503 = stringToReturn$$2 + '"';
    var v86 = v503 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v86 + '"'
  }
  var v504 = stringToReturn$$2 + ' starting "';
  var v505 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p13);
  var v88 = v504 + v505;
  stringToReturn$$2 = v88 + '"';
  var v89 = '<div class="info">' + stringToReturn$$2;
  return v89 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v734 = "Results for " + topology;
  var v506 = v734 + " ";
  var v507 = sequence$$4.length;
  var v90 = v506 + v507;
  var stringToReturn$$3 = v90 + " residue sequence ";
  var v508 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p13);
  var v92 = v508 != -1;
  if(v92) {
    var v509 = stringToReturn$$3 + '"';
    var v91 = v509 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v91 + '"'
  }
  var v510 = stringToReturn$$3 + ' starting "';
  var v511 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p13);
  var v93 = v510 + v511;
  stringToReturn$$3 = v93 + '"';
  var v94 = '<div class="info">' + stringToReturn$$3;
  return v94 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v512 = sequenceOne$$1.length;
  var v95 = "Alignment results for " + v512;
  var stringToReturn$$4 = v95 + " residue sequence ";
  var v513 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p13);
  var v97 = v513 != -1;
  if(v97) {
    var v514 = stringToReturn$$4 + '"';
    var v96 = v514 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v96 + '"'
  }
  var v515 = stringToReturn$$4 + ' starting "';
  var v516 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p13);
  var v98 = v515 + v516;
  stringToReturn$$4 = v98 + '"\n';
  var v517 = stringToReturn$$4 + "and ";
  var v518 = sequenceTwo$$1.length;
  var v99 = v517 + v518;
  stringToReturn$$4 = v99 + " residue sequence ";
  var v519 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p13);
  var v101 = v519 != -1;
  if(v101) {
    var v520 = stringToReturn$$4 + '"';
    var v100 = v520 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v100 + '"'
  }
  var v521 = stringToReturn$$4 + ' starting "';
  var v522 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p13);
  var v102 = v521 + v522;
  stringToReturn$$4 = v102 + '"';
  var v103 = '<div class="info">' + stringToReturn$$4;
  return v103 + "</div>\n"
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v105 = j$$4 < lengthOut;
  for(;v105;) {
    var v523 = JAM.call(Math.random, Math, [], JAM.policy.p13);
    var v524 = components.length;
    var v104 = v523 * v524;
    tempNum = JAM.call(Math.floor, Math, [v104], JAM.policy.p13);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p23);
    j$$4 = j$$4 + 1;
    v105 = j$$4 < lengthOut
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p14)
}
function getSequenceFromFasta(sequenceRecord) {
  var v525 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p13);
  var v106 = v525 != -1;
  if(v106) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p13)
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v526 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p13);
  var v108 = v526 != -1;
  if(v108) {
    var v107 = JAM.call(sequenceRecord$$1.match, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p13);
    fastaTitle = JAM.call(v107.toString, v107, [], JAM.policy.p13);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\>|[\f\n\r]/g, ""], JAM.policy.p13);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\s{2,}/g, " "], JAM.policy.p13);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/[\<\>]/gi, ""], JAM.policy.p13)
  }
  return fastaTitle
}
function moreExpressionCheck(expressionToCheck) {
  var v735 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p13);
  var v527 = v735 != -1;
  var v737 = !v527;
  if(v737) {
    var v873 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p13);
    var v736 = v873 != -1;
    var v875 = !v736;
    if(v875) {
      var v961 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p13);
      var v874 = v961 != -1;
      var v963 = !v874;
      if(v963) {
        var v1015 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p13);
        var v962 = v1015 != -1;
        var v1017 = !v962;
        if(v1017) {
          var v1032 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p13);
          var v1016 = v1032 != -1;
          var v1034 = !v1016;
          if(v1034) {
            var v1048 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p13);
            var v1033 = v1048 != -1;
            var v1050 = !v1033;
            if(v1050) {
              var v1063 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p13);
              var v1049 = v1063 != -1;
              var v1065 = !v1049;
              if(v1065) {
                var v1077 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p13);
                var v1064 = v1077 != -1;
                var v1079 = !v1064;
                if(v1079) {
                  var v1088 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p13);
                  var v1078 = v1088 != -1;
                  var v1090 = !v1078;
                  if(v1090) {
                    var v1096 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p13);
                    var v1089 = v1096 != -1;
                    var v1098 = !v1089;
                    if(v1098) {
                      var v1097 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p13);
                      v1089 = v1097 != -1
                    }
                    v1078 = v1089
                  }
                  v1064 = v1078
                }
                v1049 = v1064
              }
              v1033 = v1049
            }
            v1016 = v1033
          }
          v962 = v1016
        }
        v874 = v962
      }
      v736 = v874
    }
    v527 = v736
  }
  var v109 = v527;
  if(v109) {
    return false
  }
  return true
}
function openForm() {
  var v110 = outputWindow.document;
  JAM.call(v110.write, v110, ['<form action="">\n'], JAM.policy.p14);
  return true
}
function openPre() {
  var v111 = outputWindow.document;
  JAM.call(v111.write, v111, ["<pre>"], JAM.policy.p14);
  var v112 = outputWindow.document;
  JAM.call(v112.write, v112, ['<div class="pre">'], JAM.policy.p14);
  return
}
function openTextArea() {
  var v113 = outputWindow.document;
  JAM.call(v113.write, v113, ['<br /><textarea rows="6" cols="61">\n'], JAM.policy.p14);
  return true
}
function openWindow(title$$6) {
  _openWindow(title$$6, true);
  return
}
function _openWindow(title$$7, isColor) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  JAM.call(outputWindow.focus, outputWindow, [], JAM.policy.p13);
  var v114 = outputWindow.document;
  var v876 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v738 = v876 + "<head>\n";
  var v528 = v738 + "<title>Sequence Manipulation Suite</title>\n";
  var v115 = v528 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v114.write, v114, [v115], JAM.policy.p23);
  if(isColor) {
    var v116 = outputWindow.document;
    var v1115 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1109 = v1115 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1104 = v1109 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1099 = v1104 + "div.info {font-weight: bold}\n";
    var v1091 = v1099 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1080 = v1091 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v1066 = v1080 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v1051 = v1066 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1035 = v1051 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v1018 = v1035 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v964 = v1018 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v877 = v964 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v739 = v877 + "td.many {color: #000000}\n";
    var v529 = v739 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v117 = v529 + "</style>\n";
    JAM.call(v116.write, v116, [v117], JAM.policy.p23)
  }else {
    var v118 = outputWindow.document;
    var v1120 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1116 = v1120 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1110 = v1116 + "div.title {display: none}\n";
    var v1105 = v1110 + "div.info {font-weight: bold}\n";
    var v1100 = v1105 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1092 = v1100 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1081 = v1092 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v1067 = v1081 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1052 = v1067 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1036 = v1052 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1019 = v1036 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v965 = v1019 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v878 = v965 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v740 = v878 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v530 = v740 + "img {display: none}\n";
    var v119 = v530 + "</style>\n";
    JAM.call(v118.write, v118, [v119], JAM.policy.p23)
  }
  var v120 = outputWindow.document;
  var v879 = "</head>\n" + '<body class="main">\n';
  var v741 = v879 + '<div class="title">';
  var v531 = v741 + title$$7;
  var v121 = v531 + " results</div>\n";
  JAM.call(v120.write, v120, [v121], JAM.policy.p23);
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
  var v122 = outputWindow.document;
  var v880 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v742 = v880 + "<head>\n";
  var v532 = v742 + "<title>Sequence Manipulation Suite</title>\n";
  var v123 = v532 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v122.write, v122, [v123], JAM.policy.p23);
  if(isBackground) {
    var v124 = outputWindow.document;
    var v1117 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1111 = v1117 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1106 = v1111 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1101 = v1106 + "div.info {font-weight: bold}\n";
    var v1093 = v1101 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v1082 = v1093 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v1068 = v1082 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v1053 = v1068 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v1037 = v1053 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v1020 = v1037 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v966 = v1020 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v881 = v966 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v743 = v881 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v533 = v743 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v125 = v533 + "</style>\n";
    JAM.call(v124.write, v124, [v125], JAM.policy.p23)
  }else {
    var v126 = outputWindow.document;
    var v1124 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1121 = v1124 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1118 = v1121 + "div.title {display: none}\n";
    var v1112 = v1118 + "div.info {font-weight: bold}\n";
    var v1107 = v1112 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1102 = v1107 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v1094 = v1102 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v1083 = v1094 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v1069 = v1083 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v1054 = v1069 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v1038 = v1054 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v1021 = v1038 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v967 = v1021 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v882 = v967 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v744 = v882 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v534 = v744 + "img {display: none}\n";
    var v127 = v534 + "</style>\n";
    JAM.call(v126.write, v126, [v127], JAM.policy.p23)
  }
  var v128 = outputWindow.document;
  var v883 = "</head>\n" + '<body class="main">\n';
  var v745 = v883 + '<div class="title">';
  var v535 = v745 + title$$9;
  var v129 = v535 + " results</div>\n";
  JAM.call(v128.write, v128, [v129], JAM.policy.p23);
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
  var v536 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p13);
  var v130 = v536 != -1;
  if(v130) {
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
  var v131 = j$$5 < lengthOfColumn;
  for(;v131;) {
    tempString = tempString + " ";
    j$$5 = j$$5 + 1;
    v131 = j$$5 < lengthOfColumn
  }
  var v132 = tempString + theNumber;
  theNumber = v132 + " ";
  var v133 = sequenceToAppend + theNumber;
  sequenceToAppend = v133 + tabIn;
  return sequenceToAppend
}
function testScript() {
  function v1(str$$7, p1$$1, offset$$13, s$$3) {
    return p1$$1 + "X"
  }
  var testArray = new Array;
  var testString = "1234567890";
  JAM.call(testArray.push, testArray, [testString], JAM.policy.p23);
  var v537 = testArray[0];
  var v134 = v537 != testString;
  if(v134) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v538 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p23);
  var v135 = v538 == -1;
  if(v135) {
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
  var v136 = !caughtException;
  if(v136) {
    alert("Exception handling not supported. See browser compatibility page.")
  }
  testString = "123";
  testString = JAM.call(testString.replace, testString, [/(\d)/g, v1], JAM.policy.p13);
  var v137 = testString != "1X2X3X";
  if(v137) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false
  }
  var testNum = 2489.8237;
  var v539 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p13);
  var v138 = v539 != 2489.824;
  if(v138) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v540 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p13);
  var v139 = v540 != 2489.8;
  if(v139) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v541 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p13);
  var v140 = v541 == -1;
  if(v140) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v746 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p13);
  var v542 = v746 == -1;
  var v748 = !v542;
  if(v748) {
    var v884 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p13);
    var v747 = v884 == -1;
    var v886 = !v747;
    if(v886) {
      var v968 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p13);
      var v885 = v968 == -1;
      var v970 = !v885;
      if(v970) {
        var v969 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p13);
        v885 = v969 == -1
      }
      v747 = v885
    }
    v542 = v747
  }
  var v141 = v542;
  if(v141) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v543 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p13);
  var v142 = v543 == -1;
  if(v142) {
    alert("Please enter a number.");
    return false
  }
  var v144 = theNumber$$2 > maxInput$$2;
  if(v144) {
    var v544 = "Please enter a number less than or equal to " + maxInput$$2;
    var v143 = v544 + ".";
    alert(v143);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v545 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p13);
  var v145 = v545 != -1;
  if(v145) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v546 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p13);
  var v146 = v546 != -1;
  if(v146) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v749 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p13);
  var v547 = v749 == -1;
  var v751 = !v547;
  if(v751) {
    var v887 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p13);
    var v750 = v887 == -1;
    var v889 = !v750;
    if(v889) {
      var v971 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p13);
      var v888 = v971 == -1;
      var v973 = !v888;
      if(v973) {
        var v972 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p13);
        v888 = v972 == -1
      }
      v750 = v888
    }
    v547 = v750
  }
  var v147 = v547;
  if(v147) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v752 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p13);
  var v548 = v752 == -1;
  var v754 = !v548;
  if(v754) {
    var v890 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p13);
    var v753 = v890 == -1;
    var v892 = !v753;
    if(v892) {
      var v974 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p13);
      var v891 = v974 == -1;
      var v976 = !v891;
      if(v976) {
        var v975 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p13);
        v891 = v975 == -1
      }
      v753 = v891
    }
    v548 = v753
  }
  var v148 = v548;
  if(v148) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v549 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p13);
  var v149 = v549 == -1;
  if(v149) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v755 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p13);
  var v550 = v755 == -1;
  var v757 = !v550;
  if(v757) {
    var v893 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p13);
    var v756 = v893 == -1;
    var v895 = !v756;
    if(v895) {
      var v977 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p13);
      var v894 = v977 == -1;
      var v979 = !v894;
      if(v979) {
        var v978 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p13);
        v894 = v978 == -1
      }
      v756 = v894
    }
    v550 = v756
  }
  var v150 = v550;
  if(v150) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v551 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p13);
  var v151 = v551 == -1;
  if(v151) {
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
  var v159 = i$$5 < stopBase;
  for(;v159;) {
    var v152 = i$$5 + 1;
    lineOfText = rightNum(v152, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v552 = basePerLine / groupSize;
    var v156 = j$$6 <= v552;
    for(;v156;) {
      var v155 = k < groupSize;
      for(;v155;) {
        var v153 = lineOfText;
        var v553 = k + i$$5;
        var v154 = JAM.call(text$$10.charAt, text$$10, [v553], JAM.policy.p23);
        lineOfText = v153 + v154;
        k = k + 1;
        v155 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v554 = basePerLine / groupSize;
      v156 = j$$6 <= v554
    }
    var v157 = outputWindow.document;
    var v158 = lineOfText + "\n";
    JAM.call(v157.write, v157, [v158], JAM.policy.p23);
    lineOfText = "";
    v159 = i$$5 < stopBase
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
    var v555 = adjustment < 0;
    if(v555) {
      v555 = adjusted >= 0
    }
    var v160 = v555;
    if(v160) {
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
  var v193 = i$$6 < stopBase$$2;
  for(;v193;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v556 = basePerLine$$2 / groupSize$$2;
    var v169 = j$$7 <= v556;
    for(;v169;) {
      var v164 = k$$1 < groupSize$$2;
      for(;v164;) {
        var v557 = i$$6 + k$$1;
        var v161 = v557 >= stopBase$$2;
        if(v161) {
          break
        }
        var v162 = lineOfText$$1;
        var v558 = k$$1 + i$$6;
        var v163 = JAM.call(text$$12.charAt, text$$12, [v558], JAM.policy.p23);
        lineOfText$$1 = v162 + v163;
        k$$1 = k$$1 + 1;
        v164 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v167 = numberPosition$$1 == "above";
      if(v167) {
        var v165 = aboveNum;
        var v559 = adjustNumbering(i$$6, numberingAdjustment);
        var v166 = rightNum(v559, "", groupSize$$2, tabIn$$3);
        aboveNum = v165 + v166
      }
      var v168 = i$$6 >= stopBase$$2;
      if(v168) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v560 = basePerLine$$2 / groupSize$$2;
      v169 = j$$7 <= v560
    }
    var v192 = numberPosition$$1 == "left";
    if(v192) {
      var v170 = outputWindow.document;
      var v896 = adjustNumbering(lineNum, numberingAdjustment);
      var v758 = rightNum(v896, "", 8, tabIn$$3);
      var v561 = v758 + lineOfText$$1;
      var v171 = v561 + "\n";
      JAM.call(v170.write, v170, [v171], JAM.policy.p23);
      var v175 = strands$$1 == "two";
      if(v175) {
        var v172 = outputWindow.document;
        var v897 = adjustNumbering(lineNum, numberingAdjustment);
        var v759 = rightNum(v897, "", 8, tabIn$$3);
        var v760 = complement(lineOfText$$1);
        var v562 = v759 + v760;
        var v173 = v562 + "\n";
        JAM.call(v172.write, v172, [v173], JAM.policy.p23);
        var v174 = outputWindow.document;
        JAM.call(v174.write, v174, ["\n"], JAM.policy.p14)
      }
    }else {
      var v191 = numberPosition$$1 == "right";
      if(v191) {
        var v176 = outputWindow.document;
        var v761 = lineOfText$$1;
        var v762 = adjustNumbering(i$$6, numberingAdjustment);
        var v563 = v761 + v762;
        var v177 = v563 + "\n";
        JAM.call(v176.write, v176, [v177], JAM.policy.p23);
        var v181 = strands$$1 == "two";
        if(v181) {
          var v178 = outputWindow.document;
          var v763 = complement(lineOfText$$1);
          var v764 = adjustNumbering(i$$6, numberingAdjustment);
          var v564 = v763 + v764;
          var v179 = v564 + "\n";
          JAM.call(v178.write, v178, [v179], JAM.policy.p23);
          var v180 = outputWindow.document;
          JAM.call(v180.write, v180, ["\n"], JAM.policy.p14)
        }
      }else {
        var v190 = numberPosition$$1 == "above";
        if(v190) {
          var v182 = outputWindow.document;
          var v183 = aboveNum + "\n";
          JAM.call(v182.write, v182, [v183], JAM.policy.p23);
          var v184 = outputWindow.document;
          var v185 = lineOfText$$1 + "\n";
          JAM.call(v184.write, v184, [v185], JAM.policy.p23);
          var v189 = strands$$1 == "two";
          if(v189) {
            var v186 = outputWindow.document;
            var v565 = complement(lineOfText$$1);
            var v187 = v565 + "\n";
            JAM.call(v186.write, v186, [v187], JAM.policy.p23);
            var v188 = outputWindow.document;
            JAM.call(v188.write, v188, ["\n"], JAM.policy.p14)
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v193 = i$$6 < stopBase$$2
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
  var v214 = i$$7 < stopBase$$3;
  for(;v214;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v566 = basePerLine$$3 / groupSize$$3;
    var v202 = j$$8 <= v566;
    for(;v202;) {
      var v197 = k$$2 < groupSize$$3;
      for(;v197;) {
        var v567 = i$$7 + k$$2;
        var v194 = v567 >= stopBase$$3;
        if(v194) {
          break
        }
        var v195 = lineOfText$$2;
        var v568 = k$$2 + i$$7;
        var v196 = JAM.call(text$$13.charAt, text$$13, [v568], JAM.policy.p23);
        lineOfText$$2 = v195 + v196;
        k$$2 = k$$2 + 1;
        v197 = k$$2 < groupSize$$3
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v200 = numberPosition$$2 == "above";
      if(v200) {
        var v198 = aboveNum$$1;
        var v199 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = v198 + v199
      }
      var v201 = i$$7 >= stopBase$$3;
      if(v201) {
        break
      }
      k$$2 = 0;
      j$$8 = j$$8 + 1;
      var v569 = basePerLine$$3 / groupSize$$3;
      v202 = j$$8 <= v569
    }
    var v213 = numberPosition$$2 == "left";
    if(v213) {
      var v203 = outputWindow.document;
      var v765 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v570 = v765 + lineOfText$$2;
      var v204 = v570 + "\n";
      JAM.call(v203.write, v203, [v204], JAM.policy.p23)
    }else {
      var v212 = numberPosition$$2 == "right";
      if(v212) {
        var v205 = outputWindow.document;
        var v571 = lineOfText$$2 + i$$7;
        var v206 = v571 + "\n";
        JAM.call(v205.write, v205, [v206], JAM.policy.p23)
      }else {
        var v211 = numberPosition$$2 == "above";
        if(v211) {
          var v207 = outputWindow.document;
          var v208 = aboveNum$$1 + "\n";
          JAM.call(v207.write, v207, [v208], JAM.policy.p23);
          var v209 = outputWindow.document;
          var v210 = lineOfText$$2 + "\n";
          JAM.call(v209.write, v209, [v210], JAM.policy.p23)
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v214 = i$$7 < stopBase$$3
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
  var v766 = sequence$$13.length;
  var v572 = v766 <= firstIndexToMutate;
  var v768 = !v572;
  if(v768) {
    var v767 = lastIndexToMutate < 0;
    var v898 = !v767;
    if(v898) {
      v767 = lastIndexToMutate <= firstIndexToMutate
    }
    v572 = v767
  }
  var v215 = v572;
  if(v215) {
    numMut = 0
  }
  var i$$8 = 0;
  var v223 = i$$8 < numMut;
  for(;v223;) {
    maxNum = sequence$$13.length;
    var v573 = JAM.call(Math.random, Math, [], JAM.policy.p13);
    var v216 = v573 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v216], JAM.policy.p13);
    var v574 = randNum < firstIndexToMutate;
    var v769 = !v574;
    if(v769) {
      v574 = randNum > lastIndexToMutate
    }
    var v217 = v574;
    if(v217) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v223 = i$$8 < numMut;
      continue
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p13);
    needNewChar = true;
    for(;needNewChar;) {
      var v575 = JAM.call(Math.random, Math, [], JAM.policy.p13);
      var v576 = components$$1.length;
      var v218 = v575 * v576;
      componentsIndex = JAM.call(Math.round, Math, [v218], JAM.policy.p13);
      var v577 = components$$1.length;
      var v219 = componentsIndex == v577;
      if(v219) {
        componentsIndex = 0
      }
      var v578 = components$$1[componentsIndex];
      var v220 = v578 != currentChar;
      if(v220) {
        needNewChar = false
      }
    }
    var v579 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p13);
    var v580 = components$$1[componentsIndex];
    var v221 = v579 + v580;
    var v581 = randNum + 1;
    var v582 = sequence$$13.length;
    var v222 = JAM.call(sequence$$13.substring, sequence$$13, [v581, v582], JAM.policy.p24);
    sequence$$13 = v221 + v222;
    i$$8 = i$$8 + 1;
    v223 = i$$8 < numMut
  }
  var v224 = outputWindow.document;
  var v225 = addReturns(sequence$$13);
  JAM.call(v224.write, v224, [v225], JAM.policy.p23);
  return true
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v230 = j$$9 < lengthOut$$1;
  for(;v230;) {
    var v583 = JAM.call(Math.random, Math, [], JAM.policy.p13);
    var v584 = components$$2.length;
    var v226 = v583 * v584;
    tempNum$$1 = JAM.call(Math.floor, Math, [v226], JAM.policy.p13);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v585 = sequence$$14.length;
    var v229 = v585 == 60;
    if(v229) {
      var v227 = outputWindow.document;
      var v228 = sequence$$14 + "\n";
      JAM.call(v227.write, v227, [v228], JAM.policy.p23);
      sequence$$14 = ""
    }
    j$$9 = j$$9 + 1;
    v230 = j$$9 < lengthOut$$1
  }
  var v231 = outputWindow.document;
  var v232 = sequence$$14 + "\n";
  JAM.call(v231.write, v231, [v232], JAM.policy.p23);
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
  var v236 = dnaConformation == "circular";
  if(v236) {
    var v233 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    shiftValue = v233.length;
    var v899 = sequence$$15.length;
    var v770 = v899 - lookAhead;
    var v771 = sequence$$15.length;
    var v586 = JAM.call(sequence$$15.substring, sequence$$15, [v770, v771], JAM.policy.p24);
    var v234 = v586 + sequence$$15;
    var v235 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    sequence$$15 = v234 + v235;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v237 = outputWindow.document;
  JAM.call(v237.write, v237, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p14);
  var v238 = outputWindow.document;
  var v900 = '<tr><td class="title" width="200px">' + "Site:";
  var v772 = v900 + '</td><td class="title">';
  var v587 = v772 + "Positions:";
  var v239 = v587 + "</td></tr>\n";
  JAM.call(v238.write, v238, [v239], JAM.policy.p23);
  var i$$9 = 0;
  var v588 = arrayOfItems.length;
  var v255 = i$$9 < v588;
  for(;v255;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v589 = arrayOfItems[i$$9];
    var v240 = JAM.call(v589.match, v589, [/\/.+\//], JAM.policy.p13);
    matchExp = v240 + "gi";
    matchPosition = 0;
    if(JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }")
    }else {
      matchExp = JAM.call(eval, null, [matchExp])
    }
    var v901 = arrayOfItems[i$$9];
    var v773 = JAM.call(v901.match, v901, [/\)\D*\d+/], JAM.policy.p13);
    var v590 = JAM.call(v773.toString, v773, [], JAM.policy.p13);
    var v241 = JAM.call(v590.replace, v590, [/\)\D*/, ""], JAM.policy.p13);
    cutDistance = parseFloat(v241);
    var v247 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p23);
    for(;v247;) {
      var v242 = matchExp.lastIndex;
      matchPosition = v242 - cutDistance;
      var v591 = matchPosition >= lowerLimit;
      if(v591) {
        v591 = matchPosition < upperLimit
      }
      var v245 = v591;
      if(v245) {
        timesFound = timesFound + 1;
        var v243 = tempString$$1 + ", ";
        var v592 = matchPosition - shiftValue;
        var v244 = v592 + 1;
        tempString$$1 = v243 + v244
      }
      var v593 = matchExp.lastIndex;
      var v774 = RegExp.lastMatch;
      var v594 = v774.length;
      var v246 = v593 - v594;
      matchExp.lastIndex = v246 + 1;
      v247 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p23)
    }
    var v595 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p13);
    var v248 = v595 != -1;
    if(v248) {
      tempString$$1 = JAM.call(tempString$$1.replace, tempString$$1, [/none,\s*/, ""], JAM.policy.p13)
    }
    var v252 = timesFound == 0;
    if(v252) {
      backGroundClass = "none"
    }else {
      var v251 = timesFound == 1;
      if(v251) {
        backGroundClass = "one"
      }else {
        var v250 = timesFound == 2;
        if(v250) {
          backGroundClass = "two"
        }else {
          var v249 = timesFound == 3;
          if(v249) {
            backGroundClass = "three"
          }else {
            backGroundClass = "many"
          }
        }
      }
    }
    var v253 = outputWindow.document;
    var v1055 = '<tr><td class="' + backGroundClass;
    var v1039 = v1055 + '">';
    var v1084 = arrayOfItems[i$$9];
    var v1070 = JAM.call(v1084.match, v1084, [/\([^\(]+\)/], JAM.policy.p13);
    var v1056 = JAM.call(v1070.toString, v1070, [], JAM.policy.p13);
    var v1040 = JAM.call(v1056.replace, v1056, [/\(|\)/g, ""], JAM.policy.p13);
    var v1022 = v1039 + v1040;
    var v980 = v1022 + '</td><td class="';
    var v902 = v980 + backGroundClass;
    var v775 = v902 + '">';
    var v596 = v775 + tempString$$1;
    var v254 = v596 + "</td></tr>\n";
    JAM.call(v253.write, v253, [v254], JAM.policy.p23);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v597 = arrayOfItems.length;
    v255 = i$$9 < v597
  }
  var v256 = outputWindow.document;
  JAM.call(v256.write, v256, ["</tbody></table>\n"], JAM.policy.p14);
  return true
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v257 = outputWindow.document;
  JAM.call(v257.write, v257, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p14);
  var v258 = outputWindow.document;
  var v1023 = '<tr><td class="title">' + "Pattern:";
  var v981 = v1023 + '</td><td class="title">';
  var v903 = v981 + "Times found:";
  var v776 = v903 + '</td><td class="title">';
  var v598 = v776 + "Percentage:";
  var v259 = v598 + "</td></tr>\n";
  JAM.call(v258.write, v258, [v259], JAM.policy.p23);
  var i$$10 = 0;
  var v599 = arrayOfItems$$1.length;
  var v268 = i$$10 < v599;
  for(;v268;) {
    var tempNumber = 0;
    var v600 = arrayOfItems$$1[i$$10];
    var v260 = JAM.call(v600.match, v600, [/\/[^\/]+\//], JAM.policy.p13);
    var matchExp$$1 = v260 + "gi";
    if(JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1])
    }
    var v601 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p23);
    var v262 = v601 != -1;
    if(v262) {
      var v261 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p23);
      tempNumber = v261.length
    }
    var percentage = 0;
    var v777 = originalLength + 1;
    var v982 = arrayOfItems$$1[i$$10];
    var v904 = JAM.call(v982.match, v982, [/\d+/], JAM.policy.p13);
    var v778 = parseFloat(v904);
    var v602 = v777 - v778;
    var v265 = v602 > 0;
    if(v265) {
      var v263 = 100 * tempNumber;
      var v603 = originalLength + 1;
      var v905 = arrayOfItems$$1[i$$10];
      var v779 = JAM.call(v905.match, v905, [/\d+/], JAM.policy.p13);
      var v604 = parseFloat(v779);
      var v264 = v603 - v604;
      percentage = v263 / v264
    }
    var v266 = outputWindow.document;
    var v1085 = arrayOfItems$$1[i$$10];
    var v1071 = JAM.call(v1085.match, v1085, [/\([^\(]+\)\b/], JAM.policy.p13);
    var v1057 = JAM.call(v1071.toString, v1071, [], JAM.policy.p13);
    var v1041 = JAM.call(v1057.replace, v1057, [/\(|\)/g, ""], JAM.policy.p13);
    var v1024 = "<tr><td>" + v1041;
    var v983 = v1024 + "</td><td>";
    var v906 = v983 + tempNumber;
    var v780 = v906 + "</td><td>";
    var v781 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p13);
    var v605 = v780 + v781;
    var v267 = v605 + "</td></tr>\n";
    JAM.call(v266.write, v266, [v267], JAM.policy.p23);
    i$$10 = i$$10 + 1;
    var v606 = arrayOfItems$$1.length;
    v268 = i$$10 < v606
  }
  var v269 = outputWindow.document;
  JAM.call(v269.write, v269, ["</tbody></table>\n"], JAM.policy.p14);
  return true
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v607 = sequence$$17.length;
  var v276 = v607 > 0;
  for(;v276;) {
    maxNum$$1 = sequence$$17.length;
    var v608 = JAM.call(Math.random, Math, [], JAM.policy.p13);
    var v270 = v608 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v270], JAM.policy.p13);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p13);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p13);
    var v271 = randNum$$1 + 1;
    var v272 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v271, v272], JAM.policy.p13);
    sequence$$17 = tempString1 + tempString2;
    var v609 = tempSeq.length;
    var v275 = v609 == 60;
    if(v275) {
      var v273 = outputWindow.document;
      var v274 = tempSeq + "\n";
      JAM.call(v273.write, v273, [v274], JAM.policy.p23);
      tempSeq = ""
    }
    var v610 = sequence$$17.length;
    v276 = v610 > 0
  }
  var v277 = outputWindow.document;
  var v278 = tempSeq + "\n";
  JAM.call(v277.write, v277, [v278], JAM.policy.p23);
  return true
}
function revTrans(theDocument) {
  JAM.startProfile('compute');

  var newProtein = "";
  var maxInput$$3 = 2E4;
  var v611 = testScript();
  var v279 = v611 == false;
  if(v279) {
    return false
  }
  var codonTable$$1;
  var v1042 = theDocument.forms;
  var v1025 = v1042[0];
  var v984 = v1025.elements;
  var v907 = v984[0];
  var v782 = checkFormElement(v907);
  var v612 = v782 == false;
  var v784 = !v612;
  if(v784) {
    var v1072 = theDocument.forms;
    var v1058 = v1072[0];
    var v1043 = v1058.elements;
    var v1026 = v1043[0];
    var v985 = v1026.value;
    var v908 = checkSequenceLength(v985, maxInput$$3);
    var v783 = v908 == false;
    var v910 = !v783;
    if(v910) {
      var v1073 = theDocument.forms;
      var v1059 = v1073[0];
      var v1044 = v1059.elements;
      var v1027 = v1044[4];
      var v986 = v1027.value;
      var v909 = checkCodonTable(v986);
      v783 = v909 == false
    }
    v612 = v783
  }
  var v280 = v612;
  if(v280) {
    return false
  }
  var v987 = theDocument.forms;
  var v911 = v987[0];
  var v785 = v911.elements;
  var v613 = v785[4];
  var v281 = v613.value;
  codonTable$$1 = makeCodonTable(v281);
  var v282 = codonTable$$1 == false;
  if(v282) {
    return false
  }
  openWindow("Reverse Translate");
  openPre();
  var v988 = theDocument.forms;
  var v912 = v988[0];
  var v786 = v912.elements;
  var v614 = v786[0];
  var v283 = v614.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v283);
  var i$$11 = 0;
  var v615 = arrayOfFasta$$1.length;
  var v292 = i$$11 < v615;
  for(;v292;) {
    var v284 = arrayOfFasta$$1[i$$11];
    newProtein = getSequenceFromFasta(v284);
    var v285 = arrayOfFasta$$1[i$$11];
    title = getTitleFromFasta(v285);
    newProtein = removeNonProteinAllowX(newProtein);
    var v286 = outputWindow.document;
    var v287 = getInfoFromTitleAndSequence(title, newProtein);
    JAM.call(v286.write, v286, [v287], JAM.policy.p23);
    writeRevTransSeqNoDegen(newProtein, title, codonTable$$1);
    var v288 = outputWindow.document;
    JAM.call(v288.write, v288, ["\n"], JAM.policy.p14);
    writeRevTransSeqDegen(newProtein, title, codonTable$$1);
    var v289 = outputWindow.document;
    JAM.call(v289.write, v289, ["\n"], JAM.policy.p14);
    var v290 = outputWindow.document;
    JAM.call(v290.write, v290, ["Graph of base probabilities:\n"], JAM.policy.p14);
    writeRevTransGraph(newProtein, codonTable$$1);
    var v291 = outputWindow.document;
    JAM.call(v291.write, v291, ["\n\n"], JAM.policy.p14);
    i$$11 = i$$11 + 1;
    var v616 = arrayOfFasta$$1.length;
    v292 = i$$11 < v616
  }
  closePre();
  closeWindow();

  JAM.stopProfile('compute');
  return true
}
function writeRevTransSeqNoDegen(protein, title$$10, codonTable$$2) {
  function v2(str$$8, p1$$2, offset$$14, s$$4) {
    var v293 = codonTable$$2;
    var v617 = JAM.call(p1$$2.toString, p1$$2, [], JAM.policy.p13);
    var v294 = JAM.call(v617.toLowerCase, v617, [], JAM.policy.p13);
    aminoAcid = v293[v294];
    return aminoAcid.mostCommonCodon
  }
  var aminoAcid;
  protein = JAM.call(protein.replace, protein, [/\*/g, "z"], JAM.policy.p13);
  protein = JAM.call(protein.replace, protein, [/(.)/g, v2], JAM.policy.p13);
  var v295 = outputWindow.document;
  var v989 = "&gt;" + "reverse translation of ";
  var v913 = v989 + title$$10;
  var v787 = v913 + " to a ";
  var v788 = protein.length;
  var v618 = v787 + v788;
  var v296 = v618 + " base sequence of most likely codons.\n";
  JAM.call(v295.write, v295, [v296], JAM.policy.p23);
  var v297 = outputWindow.document;
  var v298 = addReturns(protein);
  JAM.call(v297.write, v297, [v298], JAM.policy.p23);
  var v299 = outputWindow.document;
  JAM.call(v299.write, v299, ["\n"], JAM.policy.p14);
  return true
}
function writeRevTransSeqDegen(protein$$1, title$$11, codonTable$$3) {
  function v3(str$$9, p1$$3, offset$$15, s$$5) {
    var v300 = codonTable$$3;
    var v619 = JAM.call(p1$$3.toString, p1$$3, [], JAM.policy.p13);
    var v301 = JAM.call(v619.toLowerCase, v619, [], JAM.policy.p13);
    aminoAcid$$1 = v300[v301];
    return aminoAcid$$1.degenCodon
  }
  var aminoAcid$$1;
  protein$$1 = JAM.call(protein$$1.replace, protein$$1, [/\*/g, "z"], JAM.policy.p13);
  protein$$1 = JAM.call(protein$$1.replace, protein$$1, [/(.)/g, v3], JAM.policy.p13);
  var v302 = outputWindow.document;
  var v990 = "&gt;" + "reverse translation of ";
  var v914 = v990 + title$$11;
  var v789 = v914 + " to a ";
  var v790 = protein$$1.length;
  var v620 = v789 + v790;
  var v303 = v620 + " base sequence of consensus codons.\n";
  JAM.call(v302.write, v302, [v303], JAM.policy.p23);
  var v304 = outputWindow.document;
  var v305 = addReturns(protein$$1);
  JAM.call(v304.write, v304, [v305], JAM.policy.p23);
  var v306 = outputWindow.document;
  JAM.call(v306.write, v306, ["\n"], JAM.policy.p14);
  return true
}
function writeRevTransGraph(protein$$2, codonTable$$4) {
  function v4(str$$10, p1$$4, offset$$16, s$$6) {
    var v307 = codonTable$$4;
    var v621 = JAM.call(p1$$4.toString, p1$$4, [], JAM.policy.p13);
    var v308 = JAM.call(v621.toLowerCase, v621, [], JAM.policy.p13);
    aminoAcid$$2 = v307[v308];
    var v1129 = offset$$16 + 1;
    var v1128 = "<b>" + v1129;
    var v1127 = v1128 + "_";
    var v1126 = v1127 + str$$10;
    var v1125 = v1126 + "_";
    var v1122 = v1125 + "first</b>\n";
    var v1123 = aminoAcid$$2.rulerPosOne;
    var v1119 = v1122 + v1123;
    var v1113 = v1119 + "<b>";
    var v1114 = offset$$16 + 1;
    var v1108 = v1113 + v1114;
    var v1103 = v1108 + "_";
    var v1095 = v1103 + str$$10;
    var v1086 = v1095 + "_";
    var v1074 = v1086 + "second</b>\n";
    var v1075 = aminoAcid$$2.rulerPosTwo;
    var v1060 = v1074 + v1075;
    var v1045 = v1060 + "<b>";
    var v1046 = offset$$16 + 1;
    var v1028 = v1045 + v1046;
    var v991 = v1028 + "_";
    var v915 = v991 + str$$10;
    var v791 = v915 + "_";
    var v622 = v791 + "third</b>\n";
    var v623 = aminoAcid$$2.rulerPosThree;
    var v309 = v622 + v623;
    return v309 + "\n"
  }
  var aminoAcid$$2;
  protein$$2 = JAM.call(protein$$2.replace, protein$$2, [/\*/g, "z"], JAM.policy.p13);
  protein$$2 = JAM.call(protein$$2.replace, protein$$2, [/(.)/g, v4], JAM.policy.p13);
  var v310 = outputWindow.document;
  JAM.call(v310.write, v310, [protein$$2], JAM.policy.p23);
  return true
}
function makeCodonTable(gcgTable) {
  gcgTable = JAM.call(gcgTable.replace, gcgTable, [/[^\.]*\.\./, ""], JAM.policy.p13);
  var tableArray = JAM.call(gcgTable.split, gcgTable, [/[\f\n\r]/], JAM.policy.p13);
  var re$$3 = /(\w+)\s+(\w+)\s+(\S+)\s+(\S+)\s+(\S+)/g;
  var matchArray$$2;
  var codonTable$$5 = new CodonTable;
  var i$$12 = 0;
  var v624 = tableArray.length;
  var v315 = i$$12 < v624;
  for(;v315;) {
    var v625 = tableArray[i$$12];
    var v314 = matchArray$$2 = JAM.call(re$$3.exec, re$$3, [v625], JAM.policy.p23);
    for(;v314;) {
      try {
        var v626 = codonTable$$5;
        var v792 = matchArray$$2[1];
        var v627 = JAM.call(v792.toLowerCase, v792, [], JAM.policy.p13);
        var v311 = v626[v627];
        var v628 = matchArray$$2[2];
        var v793 = matchArray$$2[3];
        var v629 = parseFloat(v793);
        var v794 = matchArray$$2[4];
        var v630 = parseFloat(v794);
        var v795 = matchArray$$2[5];
        var v631 = parseFloat(v795);
        var v312 = new Codon(v628, v629, v630, v631);
        JAM.call(v311.addCodon, v311, [v312], JAM.policy.p23)
      }catch(e$$5) {
        var v1087 = matchArray$$2[1];
        var v1076 = "There is a problem with a line of the codon table: " + v1087;
        var v1061 = v1076 + " ";
        var v1062 = matchArray$$2[2];
        var v1047 = v1061 + v1062;
        var v1029 = v1047 + " ";
        var v1030 = matchArray$$2[3];
        var v992 = v1029 + v1030;
        var v916 = v992 + " ";
        var v917 = matchArray$$2[4];
        var v796 = v916 + v917;
        var v632 = v796 + " ";
        var v633 = matchArray$$2[4];
        var v313 = v632 + v633;
        alert(v313);
        return false
      }
      var v634 = tableArray[i$$12];
      v314 = matchArray$$2 = JAM.call(re$$3.exec, re$$3, [v634], JAM.policy.p23)
    }
    i$$12 = i$$12 + 1;
    var v635 = tableArray.length;
    v315 = i$$12 < v635
  }
  var v316 = codonTable$$5.a;
  JAM.call(v316.determineBaseFreq, v316, [], JAM.policy.p13);
  var v317 = codonTable$$5.c;
  JAM.call(v317.determineBaseFreq, v317, [], JAM.policy.p13);
  var v318 = codonTable$$5.d;
  JAM.call(v318.determineBaseFreq, v318, [], JAM.policy.p13);
  var v319 = codonTable$$5.e;
  JAM.call(v319.determineBaseFreq, v319, [], JAM.policy.p13);
  var v320 = codonTable$$5.f;
  JAM.call(v320.determineBaseFreq, v320, [], JAM.policy.p13);
  var v321 = codonTable$$5.g;
  JAM.call(v321.determineBaseFreq, v321, [], JAM.policy.p13);
  var v322 = codonTable$$5.h;
  JAM.call(v322.determineBaseFreq, v322, [], JAM.policy.p13);
  var v323 = codonTable$$5.i;
  JAM.call(v323.determineBaseFreq, v323, [], JAM.policy.p13);
  var v324 = codonTable$$5.k;
  JAM.call(v324.determineBaseFreq, v324, [], JAM.policy.p13);
  var v325 = codonTable$$5.l;
  JAM.call(v325.determineBaseFreq, v325, [], JAM.policy.p13);
  var v326 = codonTable$$5.m;
  JAM.call(v326.determineBaseFreq, v326, [], JAM.policy.p13);
  var v327 = codonTable$$5.n;
  JAM.call(v327.determineBaseFreq, v327, [], JAM.policy.p13);
  var v328 = codonTable$$5.p;
  JAM.call(v328.determineBaseFreq, v328, [], JAM.policy.p13);
  var v329 = codonTable$$5.q;
  JAM.call(v329.determineBaseFreq, v329, [], JAM.policy.p13);
  var v330 = codonTable$$5.r;
  JAM.call(v330.determineBaseFreq, v330, [], JAM.policy.p13);
  var v331 = codonTable$$5.s;
  JAM.call(v331.determineBaseFreq, v331, [], JAM.policy.p13);
  var v332 = codonTable$$5.t;
  JAM.call(v332.determineBaseFreq, v332, [], JAM.policy.p13);
  var v333 = codonTable$$5.v;
  JAM.call(v333.determineBaseFreq, v333, [], JAM.policy.p13);
  var v334 = codonTable$$5.w;
  JAM.call(v334.determineBaseFreq, v334, [], JAM.policy.p13);
  var v335 = codonTable$$5.y;
  JAM.call(v335.determineBaseFreq, v335, [], JAM.policy.p13);
  var v336 = codonTable$$5.z;
  JAM.call(v336.determineBaseFreq, v336, [], JAM.policy.p13);
  var v337 = codonTable$$5.x;
  JAM.call(v337.determineBaseFreq, v337, [], JAM.policy.p13);
  var v338 = codonTable$$5.x;
  var v1136 = new Array(0.25, 0.25, 0.25, 0.25);
  v338.baseFreqPosOne = v1136;
  var v339 = codonTable$$5.x;
  var v1137 = new Array(0.25, 0.25, 0.25, 0.25);
  v339.baseFreqPosTwo = v1137;
  var v340 = codonTable$$5.x;
  var v1138 = new Array(0.25, 0.25, 0.25, 0.25);
  v340.baseFreqPosThree = v1138;
  var v341 = codonTable$$5.a;
  JAM.call(v341.fillRuler, v341, [], JAM.policy.p13);
  var v342 = codonTable$$5.c;
  JAM.call(v342.fillRuler, v342, [], JAM.policy.p13);
  var v343 = codonTable$$5.d;
  JAM.call(v343.fillRuler, v343, [], JAM.policy.p13);
  var v344 = codonTable$$5.e;
  JAM.call(v344.fillRuler, v344, [], JAM.policy.p13);
  var v345 = codonTable$$5.f;
  JAM.call(v345.fillRuler, v345, [], JAM.policy.p13);
  var v346 = codonTable$$5.g;
  JAM.call(v346.fillRuler, v346, [], JAM.policy.p13);
  var v347 = codonTable$$5.h;
  JAM.call(v347.fillRuler, v347, [], JAM.policy.p13);
  var v348 = codonTable$$5.i;
  JAM.call(v348.fillRuler, v348, [], JAM.policy.p13);
  var v349 = codonTable$$5.k;
  JAM.call(v349.fillRuler, v349, [], JAM.policy.p13);
  var v350 = codonTable$$5.l;
  JAM.call(v350.fillRuler, v350, [], JAM.policy.p13);
  var v351 = codonTable$$5.m;
  JAM.call(v351.fillRuler, v351, [], JAM.policy.p13);
  var v352 = codonTable$$5.n;
  JAM.call(v352.fillRuler, v352, [], JAM.policy.p13);
  var v353 = codonTable$$5.p;
  JAM.call(v353.fillRuler, v353, [], JAM.policy.p13);
  var v354 = codonTable$$5.q;
  JAM.call(v354.fillRuler, v354, [], JAM.policy.p13);
  var v355 = codonTable$$5.r;
  JAM.call(v355.fillRuler, v355, [], JAM.policy.p13);
  var v356 = codonTable$$5.s;
  JAM.call(v356.fillRuler, v356, [], JAM.policy.p13);
  var v357 = codonTable$$5.t;
  JAM.call(v357.fillRuler, v357, [], JAM.policy.p13);
  var v358 = codonTable$$5.v;
  JAM.call(v358.fillRuler, v358, [], JAM.policy.p13);
  var v359 = codonTable$$5.w;
  JAM.call(v359.fillRuler, v359, [], JAM.policy.p13);
  var v360 = codonTable$$5.y;
  JAM.call(v360.fillRuler, v360, [], JAM.policy.p13);
  var v361 = codonTable$$5.z;
  JAM.call(v361.fillRuler, v361, [], JAM.policy.p13);
  var v362 = codonTable$$5.x;
  JAM.call(v362.fillRuler, v362, [], JAM.policy.p13);
  return codonTable$$5
}
function CodonTable() {
  var v1139 = new AminoAcid;
  this.a = v1139;
  var v1140 = new AminoAcid;
  this.c = v1140;
  var v1141 = new AminoAcid;
  this.d = v1141;
  var v1142 = new AminoAcid;
  this.e = v1142;
  var v1143 = new AminoAcid;
  this.f = v1143;
  var v1144 = new AminoAcid;
  this.g = v1144;
  var v1145 = new AminoAcid;
  this.h = v1145;
  var v1146 = new AminoAcid;
  this.i = v1146;
  var v1147 = new AminoAcid;
  this.k = v1147;
  var v1148 = new AminoAcid;
  this.l = v1148;
  var v1149 = new AminoAcid;
  this.m = v1149;
  var v1150 = new AminoAcid;
  this.n = v1150;
  var v1151 = new AminoAcid;
  this.p = v1151;
  var v1152 = new AminoAcid;
  this.q = v1152;
  var v1153 = new AminoAcid;
  this.r = v1153;
  var v1154 = new AminoAcid;
  this.s = v1154;
  var v1155 = new AminoAcid;
  this.t = v1155;
  var v1156 = new AminoAcid;
  this.v = v1156;
  var v1157 = new AminoAcid;
  this.w = v1157;
  var v1158 = new AminoAcid;
  this.y = v1158;
  var v1159 = new AminoAcid;
  this.z = v1159;
  var v1160 = new AminoAcid;
  this.x = v1160;
  this.ala = this.a;
  this.cys = this.c;
  this.asp = this.d;
  this.glu = this.e;
  this.phe = this.f;
  this.gly = this.g;
  this.his = this.h;
  this.ile = this.i;
  this.lys = this.k;
  this.leu = this.l;
  this.met = this.m;
  this.asn = this.n;
  this.pro = this.p;
  this.gln = this.q;
  this.arg = this.r;
  this.ser = this.s;
  this.thr = this.t;
  this.val = this.v;
  this.trp = this.w;
  this.tyr = this.y;
  this.end = this.z;
  this.xaa = this.x;
  return
}
function fillRuler() {
  var markG = "gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg";
  var markA = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
  var markT = "TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT";
  var markC = "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC";
  var markLength = markG.length;
  var v993 = this.baseFreqPosOne;
  var v918 = v993[0];
  var v797 = JAM.call(this.getRuler, this, [v918, markG], JAM.policy.p24);
  var v994 = this.baseFreqPosOne;
  var v919 = v994[1];
  var v798 = JAM.call(this.getRuler, this, [v919, markA], JAM.policy.p24);
  var v636 = v797 + v798;
  var v920 = this.baseFreqPosOne;
  var v799 = v920[2];
  var v637 = JAM.call(this.getRuler, this, [v799, markT], JAM.policy.p24);
  var v363 = v636 + v637;
  var v800 = this.baseFreqPosOne;
  var v638 = v800[3];
  var v364 = JAM.call(this.getRuler, this, [v638, markC], JAM.policy.p24);
  this.rulerPosOne = v363 + v364;
  var v995 = this.baseFreqPosTwo;
  var v921 = v995[0];
  var v801 = JAM.call(this.getRuler, this, [v921, markG], JAM.policy.p24);
  var v996 = this.baseFreqPosTwo;
  var v922 = v996[1];
  var v802 = JAM.call(this.getRuler, this, [v922, markA], JAM.policy.p24);
  var v639 = v801 + v802;
  var v923 = this.baseFreqPosTwo;
  var v803 = v923[2];
  var v640 = JAM.call(this.getRuler, this, [v803, markT], JAM.policy.p24);
  var v365 = v639 + v640;
  var v804 = this.baseFreqPosTwo;
  var v641 = v804[3];
  var v366 = JAM.call(this.getRuler, this, [v641, markC], JAM.policy.p24);
  this.rulerPosTwo = v365 + v366;
  var v997 = this.baseFreqPosThree;
  var v924 = v997[0];
  var v805 = JAM.call(this.getRuler, this, [v924, markG], JAM.policy.p24);
  var v998 = this.baseFreqPosThree;
  var v925 = v998[1];
  var v806 = JAM.call(this.getRuler, this, [v925, markA], JAM.policy.p24);
  var v642 = v805 + v806;
  var v926 = this.baseFreqPosThree;
  var v807 = v926[2];
  var v643 = JAM.call(this.getRuler, this, [v807, markT], JAM.policy.p24);
  var v367 = v642 + v643;
  var v808 = this.baseFreqPosThree;
  var v644 = v808[3];
  var v368 = JAM.call(this.getRuler, this, [v644, markC], JAM.policy.p24);
  this.rulerPosThree = v367 + v368;
  JAM.call(this.setMostCommonCodon, this, [], JAM.policy.p13);
  JAM.call(this.setDegenCodon, this, [], JAM.policy.p13);
  return
}
function getRuler(freq, mark) {
  var v927 = JAM.call(mark.substring, mark, [0, 1], JAM.policy.p13);
  var v1031 = mark.length;
  var v999 = freq * v1031;
  var v928 = JAM.call(mark.substring, mark, [0, v999], JAM.policy.p13);
  var v809 = v927 + v928;
  var v645 = v809 + " ";
  var v646 = JAM.call(freq.toFixed, freq, [2], JAM.policy.p13);
  var v369 = v645 + v646;
  return v369 + "\n"
}
function addCodon(codon$$1) {
  var v370 = this.codons;
  JAM.call(v370.push, v370, [codon$$1], JAM.policy.p23);
  return
}
function determineBaseFreq() {
  JAM.call(this.fixFraction, this, [], JAM.policy.p13);
  var i$$13 = 0;
  var v810 = this.codons;
  var v647 = v810.length;
  var v395 = i$$13 < v647;
  for(;v395;) {
    var v1000 = this.codons;
    var v929 = v1000[i$$13];
    var v811 = v929.sequence;
    var v648 = JAM.call(v811.charAt, v811, [0], JAM.policy.p13);
    var v378 = v648 == "g";
    if(v378) {
      var v371 = this.baseFreqPosOne;
      var v812 = this.baseFreqPosOne;
      var v649 = v812[0];
      var v930 = this.codons;
      var v813 = v930[i$$13];
      var v650 = v813.fraction;
      v371[0] = v649 + v650
    }else {
      var v1001 = this.codons;
      var v931 = v1001[i$$13];
      var v814 = v931.sequence;
      var v651 = JAM.call(v814.charAt, v814, [0], JAM.policy.p13);
      var v377 = v651 == "a";
      if(v377) {
        var v372 = this.baseFreqPosOne;
        var v815 = this.baseFreqPosOne;
        var v652 = v815[1];
        var v932 = this.codons;
        var v816 = v932[i$$13];
        var v653 = v816.fraction;
        v372[1] = v652 + v653
      }else {
        var v1002 = this.codons;
        var v933 = v1002[i$$13];
        var v817 = v933.sequence;
        var v654 = JAM.call(v817.charAt, v817, [0], JAM.policy.p13);
        var v376 = v654 == "t";
        if(v376) {
          var v373 = this.baseFreqPosOne;
          var v818 = this.baseFreqPosOne;
          var v655 = v818[2];
          var v934 = this.codons;
          var v819 = v934[i$$13];
          var v656 = v819.fraction;
          v373[2] = v655 + v656
        }else {
          var v1003 = this.codons;
          var v935 = v1003[i$$13];
          var v820 = v935.sequence;
          var v657 = JAM.call(v820.charAt, v820, [0], JAM.policy.p13);
          var v375 = v657 == "c";
          if(v375) {
            var v374 = this.baseFreqPosOne;
            var v821 = this.baseFreqPosOne;
            var v658 = v821[3];
            var v936 = this.codons;
            var v822 = v936[i$$13];
            var v659 = v822.fraction;
            v374[3] = v658 + v659
          }
        }
      }
    }
    var v1004 = this.codons;
    var v937 = v1004[i$$13];
    var v823 = v937.sequence;
    var v660 = JAM.call(v823.charAt, v823, [1], JAM.policy.p13);
    var v386 = v660 == "g";
    if(v386) {
      var v379 = this.baseFreqPosTwo;
      var v824 = this.baseFreqPosTwo;
      var v661 = v824[0];
      var v938 = this.codons;
      var v825 = v938[i$$13];
      var v662 = v825.fraction;
      v379[0] = v661 + v662
    }else {
      var v1005 = this.codons;
      var v939 = v1005[i$$13];
      var v826 = v939.sequence;
      var v663 = JAM.call(v826.charAt, v826, [1], JAM.policy.p13);
      var v385 = v663 == "a";
      if(v385) {
        var v380 = this.baseFreqPosTwo;
        var v827 = this.baseFreqPosTwo;
        var v664 = v827[1];
        var v940 = this.codons;
        var v828 = v940[i$$13];
        var v665 = v828.fraction;
        v380[1] = v664 + v665
      }else {
        var v1006 = this.codons;
        var v941 = v1006[i$$13];
        var v829 = v941.sequence;
        var v666 = JAM.call(v829.charAt, v829, [1], JAM.policy.p13);
        var v384 = v666 == "t";
        if(v384) {
          var v381 = this.baseFreqPosTwo;
          var v830 = this.baseFreqPosTwo;
          var v667 = v830[2];
          var v942 = this.codons;
          var v831 = v942[i$$13];
          var v668 = v831.fraction;
          v381[2] = v667 + v668
        }else {
          var v1007 = this.codons;
          var v943 = v1007[i$$13];
          var v832 = v943.sequence;
          var v669 = JAM.call(v832.charAt, v832, [1], JAM.policy.p13);
          var v383 = v669 == "c";
          if(v383) {
            var v382 = this.baseFreqPosTwo;
            var v833 = this.baseFreqPosTwo;
            var v670 = v833[3];
            var v944 = this.codons;
            var v834 = v944[i$$13];
            var v671 = v834.fraction;
            v382[3] = v670 + v671
          }
        }
      }
    }
    var v1008 = this.codons;
    var v945 = v1008[i$$13];
    var v835 = v945.sequence;
    var v672 = JAM.call(v835.charAt, v835, [2], JAM.policy.p13);
    var v394 = v672 == "g";
    if(v394) {
      var v387 = this.baseFreqPosThree;
      var v836 = this.baseFreqPosThree;
      var v673 = v836[0];
      var v946 = this.codons;
      var v837 = v946[i$$13];
      var v674 = v837.fraction;
      v387[0] = v673 + v674
    }else {
      var v1009 = this.codons;
      var v947 = v1009[i$$13];
      var v838 = v947.sequence;
      var v675 = JAM.call(v838.charAt, v838, [2], JAM.policy.p13);
      var v393 = v675 == "a";
      if(v393) {
        var v388 = this.baseFreqPosThree;
        var v839 = this.baseFreqPosThree;
        var v676 = v839[1];
        var v948 = this.codons;
        var v840 = v948[i$$13];
        var v677 = v840.fraction;
        v388[1] = v676 + v677
      }else {
        var v1010 = this.codons;
        var v949 = v1010[i$$13];
        var v841 = v949.sequence;
        var v678 = JAM.call(v841.charAt, v841, [2], JAM.policy.p13);
        var v392 = v678 == "t";
        if(v392) {
          var v389 = this.baseFreqPosThree;
          var v842 = this.baseFreqPosThree;
          var v679 = v842[2];
          var v950 = this.codons;
          var v843 = v950[i$$13];
          var v680 = v843.fraction;
          v389[2] = v679 + v680
        }else {
          var v1011 = this.codons;
          var v951 = v1011[i$$13];
          var v844 = v951.sequence;
          var v681 = JAM.call(v844.charAt, v844, [2], JAM.policy.p13);
          var v391 = v681 == "c";
          if(v391) {
            var v390 = this.baseFreqPosThree;
            var v845 = this.baseFreqPosThree;
            var v682 = v845[3];
            var v952 = this.codons;
            var v846 = v952[i$$13];
            var v683 = v846.fraction;
            v390[3] = v682 + v683
          }
        }
      }
    }
    i$$13 = i$$13 + 1;
    var v847 = this.codons;
    var v684 = v847.length;
    v395 = i$$13 < v684
  }
  return true
}
function fixFraction() {
  var perThouTotal = 0;
  var i$$14 = 0;
  var v848 = this.codons;
  var v685 = v848.length;
  var v397 = i$$14 < v685;
  for(;v397;) {
    var v849 = this.codons;
    var v686 = v849[i$$14];
    var v396 = v686.perThou;
    perThouTotal = perThouTotal + v396;
    i$$14 = i$$14 + 1;
    var v850 = this.codons;
    var v687 = v850.length;
    v397 = i$$14 < v687
  }
  var v398 = perThouTotal == 0;
  if(v398) {
    return false
  }
  i$$14 = 0;
  var v851 = this.codons;
  var v688 = v851.length;
  var v400 = i$$14 < v688;
  for(;v400;) {
    var v689 = this.codons;
    var v399 = v689[i$$14];
    var v953 = this.codons;
    var v852 = v953[i$$14];
    var v690 = v852.perThou;
    v399.fraction = v690 / perThouTotal;
    i$$14 = i$$14 + 1;
    var v853 = this.codons;
    var v691 = v853.length;
    v400 = i$$14 < v691
  }
  return true
}
function setMostCommonCodon() {
  var highestFraction = 0;
  var highestCodon = "nnn";
  var i$$15 = 0;
  var v854 = this.codons;
  var v692 = v854.length;
  var v404 = i$$15 < v692;
  for(;v404;) {
    var v954 = this.codons;
    var v855 = v954[i$$15];
    var v693 = v855.fraction;
    var v403 = v693 > highestFraction;
    if(v403) {
      var v694 = this.codons;
      var v401 = v694[i$$15];
      highestFraction = v401.fraction;
      var v695 = this.codons;
      var v402 = v695[i$$15];
      highestCodon = v402.sequence
    }
    i$$15 = i$$15 + 1;
    var v856 = this.codons;
    var v696 = v856.length;
    v404 = i$$15 < v696
  }
  this.mostCommonCodon = highestCodon;
  return
}
function setDegenCodon() {
  var v857 = this.baseFreqPosOne;
  var v697 = getConsensusBase(v857);
  var v858 = this.baseFreqPosTwo;
  var v698 = getConsensusBase(v858);
  var v405 = v697 + v698;
  var v699 = this.baseFreqPosThree;
  var v406 = getConsensusBase(v699);
  this.degenCodon = v405 + v406;
  return
}
function getConsensusBase(baseFreq) {
  var g;
  var a;
  var t;
  var c;
  var v700 = baseFreq[0];
  var v407 = v700 > 0;
  if(v407) {
    g = true
  }
  var v701 = baseFreq[1];
  var v408 = v701 > 0;
  if(v408) {
    a = true
  }
  var v702 = baseFreq[2];
  var v409 = v702 > 0;
  if(v409) {
    t = true
  }
  var v703 = baseFreq[3];
  var v410 = v703 > 0;
  if(v410) {
    c = true
  }
  var v704 = !g;
  if(v704) {
    var v859 = !a;
    if(v859) {
      var v955 = !c;
      if(v955) {
        v955 = !t
      }
      v859 = v955
    }
    v704 = v859
  }
  var v411 = v704;
  if(v411) {
    return"n"
  }
  var v705 = g;
  if(v705) {
    var v860 = a;
    if(v860) {
      v860 = c && t
    }
    v705 = v860
  }
  var v421 = v705;
  if(v421) {
    return"n"
  }else {
    var v706 = a;
    if(v706) {
      v706 = c && t
    }
    var v420 = v706;
    if(v420) {
      return"h"
    }else {
      var v707 = a;
      if(v707) {
        v707 = g && t
      }
      var v419 = v707;
      if(v419) {
        return"d"
      }else {
        var v708 = c;
        if(v708) {
          v708 = g && t
        }
        var v418 = v708;
        if(v418) {
          return"b"
        }else {
          var v417 = a && c;
          if(v417) {
            return"m"
          }else {
            var v416 = g && t;
            if(v416) {
              return"k"
            }else {
              var v415 = a && t;
              if(v415) {
                return"w"
              }else {
                var v414 = g && c;
                if(v414) {
                  return"s"
                }else {
                  var v413 = c && t;
                  if(v413) {
                    return"y"
                  }else {
                    var v412 = a && g;
                    if(v412) {
                      return"r"
                    }else {
                      if(t) {
                        return"t"
                      }else {
                        if(g) {
                          return"g"
                        }else {
                          if(c) {
                            return"c"
                          }else {
                            if(a) {
                              return"a"
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return true
}
function AminoAcid() {
  var v1161 = new Array;
  this.codons = v1161;
  var v1162 = new Array(0, 0, 0, 0);
  this.baseFreqPosOne = v1162;
  var v1163 = new Array(0, 0, 0, 0);
  this.baseFreqPosTwo = v1163;
  var v1164 = new Array(0, 0, 0, 0);
  this.baseFreqPosThree = v1164;
  return
}
function Codon(sequence$$18, number, perThou, fraction) {
  var v1165 = JAM.call(sequence$$18.toLowerCase, sequence$$18, [], JAM.policy.p13);
  this.sequence = v1165;
  this.number = number;
  this.perThou = perThou;
  this.fraction = fraction;
  return
}
new AminoAcid;
var v422 = AminoAcid.prototype;
v422.fillRuler = fillRuler;
var v423 = AminoAcid.prototype;
v423.getRuler = getRuler;
var v424 = AminoAcid.prototype;
v424.addCodon = addCodon;
var v425 = AminoAcid.prototype;
v425.determineBaseFreq = determineBaseFreq;
var v426 = AminoAcid.prototype;
v426.fixFraction = fixFraction;
var v427 = AminoAcid.prototype;
v427.setMostCommonCodon = setMostCommonCodon;
var v428 = AminoAcid.prototype;
v428.setDegenCodon = setDegenCodon;
var v429 = AminoAcid.prototype;
v429.getConsensusBase = getConsensusBase;
JAM.set(document, "onload", v5);
var v430 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p14);
JAM.set(v430, "onclick", v6);
var v431 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p14);
JAM.set(v431, "onclick", v7);

JAM.stopProfile('load');
