
JAM.startProfile('load');
function v12() {
  var v923 = document.forms;
  var v765 = v923[0];
  var v445 = v765.elements;
  var v13 = v445[0];
  v13.value = " ";
  return;
}
function v11() {
  try {
    windowExtract(document);
  } catch (e$$7) {
    var v14 = "The following error was encountered: " + e$$7;
    alert(v14);
  }
  return;
}
function v10() {
  var v446 = document.main_form;
  var v15 = v446.main_submit;
  v15.focus();
  return;
}
function addReturns(sequence) {
  function v0(str$$6, p1, offset$$8, s$$2) {
    return p1 + "\n";
  }
  sequence = JAM.call(sequence.replace, sequence, [/(.{60})/g, v0], JAM.policy.p28);
  return sequence;
}
function checkAlign(arrayOfTitles, arrayOfSequences) {
  var v16 = arrayOfSequences[0];
  var lengthOfAlign = v16.length;
  var v447 = arrayOfSequences.length;
  var v17 = v447 < 2;
  if (v17) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v448 = arrayOfTitles.length;
  var v19 = i$$1 < v448;
  for (;v19;) {
    var v1040 = arrayOfTitles[i$$1];
    var v924 = JAM.call(v1040.search, v1040, [/\S/], JAM.policy.p29);
    var v766 = v924 == -1;
    var v926 = !v766;
    if (v926) {
      var v1041 = arrayOfSequences[i$$1];
      var v925 = JAM.call(v1041.search, v1041, [/\S/], JAM.policy.p29);
      v766 = v925 == -1;
    }
    var v449 = v766;
    var v768 = !v449;
    if (v768) {
      var v927 = arrayOfSequences[i$$1];
      var v767 = v927.length;
      v449 = v767 != lengthOfAlign;
    }
    var v18 = v449;
    if (v18) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1 = i$$1 + 1;
    var v450 = arrayOfTitles.length;
    v19 = i$$1 < v450;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v1114 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p29);
  var v1042 = v1114 == -1;
  var v1116 = !v1042;
  if (v1116) {
    var v1115 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p29);
    v1042 = v1115 == -1;
  }
  var v928 = v1042;
  var v1044 = !v928;
  if (v1044) {
    var v1043 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p29);
    v928 = v1043 == -1;
  }
  var v769 = v928;
  var v930 = !v769;
  if (v930) {
    var v929 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p29);
    v769 = v929 == -1;
  }
  var v451 = v769;
  var v771 = !v451;
  if (v771) {
    var v770 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p29);
    v451 = v770 == -1;
  }
  var v20 = v451;
  if (v20) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v772 = formElement.value;
  var v452 = JAM.call(v772.search, v772, [/\S/], JAM.policy.p29);
  var v21 = v452 == -1;
  if (v21) {
    alert("Please enter some text.");
    return false;
  }
  return true;
}
function checkGeneticCode(arrayOfPatterns) {
  var z$$2 = 0;
  var codon = "";
  var oneMatch = false;
  var testSequence = "gggggaggtggcgaggaagatgacgtggtagttgtcgcggcagctgccaggagaagtagcaagaaaaataacatgataattatcacgacaactacctggtgatgttgctagtaatattacttgttatttttctcgtcatcttcccggcgacgtcgccagcaacatcacctgctacttctcccgccacctccc";
  var v453 = arrayOfPatterns.length;
  var v24 = z$$2 < v453;
  for (;v24;) {
    var v773 = arrayOfPatterns[z$$2];
    var v454 = JAM.call(v773.search, v773, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p29);
    var v22 = v454 == -1;
    if (v22) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v774 = arrayOfPatterns[z$$2];
    var v455 = moreExpressionCheck(v774);
    var v23 = v455 == false;
    if (v23) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v456 = arrayOfPatterns.length;
    v24 = z$$2 < v456;
  }
  var v25 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v25);
  var v26 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v26);
  var j = 0;
  var v457 = arrayOfPatterns.length;
  var v33 = j < v457;
  for (;v33;) {
    var v27 = geneticCodeMatchExp;
    var v28 = j;
    var v931 = arrayOfPatterns[j];
    var v775 = JAM.call(v931.match, v931, [/\/.+\//], JAM.policy.p29);
    var v458 = v775 + "gi";
    if (JAM.isEval(eval)) {
      var v1279 = eval("introspect(JAM.policy.pFull) { " + v458 + " }")
    } else {
      var v1279 = JAM.call(eval, null, [v458])
    }
    introspect(JAM.policy.p13) {
      v27[v28] = v1279;
    }
    var v29 = geneticCodeMatchResult;
    var v30 = j;
    var v776 = arrayOfPatterns[j];
    var v459 = JAM.call(v776.match, v776, [/=[a-zA-Z\*]/], JAM.policy.p29);
    var v1280 = v459.toString();
    introspect(JAM.policy.p13) {
      v29[v30] = v1280;
    }
    var v31 = geneticCodeMatchResult;
    var v32 = j;
    var v460 = geneticCodeMatchResult[j];
    var v1281 = JAM.call(v460.replace, v460, [/=/g, ""], JAM.policy.p28);
    introspect(JAM.policy.p13) {
      v31[v32] = v1281;
    }
    j = j + 1;
    var v461 = arrayOfPatterns.length;
    v33 = j < v461;
  }
  var i$$2 = 0;
  var v777 = testSequence.length;
  var v462 = v777 - 3;
  var v40 = i$$2 <= v462;
  for (;v40;) {
    var v34 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v34], JAM.policy.p28);
    j = 0;
    var v463 = geneticCodeMatchExp.length;
    var v38 = j < v463;
    for (;v38;) {
      var v778 = geneticCodeMatchExp[j];
      var v464 = JAM.call(codon.search, codon, [v778], JAM.policy.p40);
      var v37 = v464 != -1;
      if (v37) {
        var v36 = oneMatch == true;
        if (v36) {
          var v465 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v35 = v465 + ".";
          alert(v35);
          return false;
        }
        oneMatch = true;
      }
      j = j + 1;
      var v466 = geneticCodeMatchExp.length;
      v38 = j < v466;
    }
    var v39 = oneMatch == false;
    if (v39) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v779 = testSequence.length;
    var v467 = v779 - 3;
    v40 = i$$2 <= v467;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v468 = arrayOfPatterns$$1.length;
  var v42 = z$$3 < v468;
  for (;v42;) {
    var v780 = arrayOfPatterns$$1[z$$3];
    var v469 = JAM.call(v780.search, v780, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p29);
    var v41 = v469 != -1;
    if (v41) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v470 = arrayOfPatterns$$1.length;
    v42 = z$$3 < v470;
  }
  var i$$3 = 0;
  var v471 = arrayOfPatterns$$1.length;
  var v46 = i$$3 < v471;
  for (;v46;) {
    var v781 = arrayOfPatterns$$1[i$$3];
    var v472 = "[" + v781;
    var v43 = v472 + "]";
    var re = new RegExp(v43, "gi");
    var j$$1 = i$$3 + 1;
    var v473 = arrayOfPatterns$$1.length;
    var v45 = j$$1 < v473;
    for (;v45;) {
      var v782 = arrayOfPatterns$$1[j$$1];
      var v474 = JAM.call(v782.search, v782, [re], JAM.policy.p40);
      var v44 = v474 != -1;
      if (v44) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1 = j$$1 + 1;
      var v475 = arrayOfPatterns$$1.length;
      v45 = j$$1 < v475;
    }
    i$$3 = i$$3 + 1;
    var v476 = arrayOfPatterns$$1.length;
    v46 = i$$3 < v476;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v477 = arrayOfPatterns$$2.length;
  var v49 = z$$4 < v477;
  for (;v49;) {
    var v783 = arrayOfPatterns$$2[z$$4];
    var v478 = JAM.call(v783.search, v783, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p29);
    var v47 = v478 == -1;
    if (v47) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v784 = arrayOfPatterns$$2[z$$4];
    var v479 = moreExpressionCheck(v784);
    var v48 = v479 == false;
    if (v48) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v480 = arrayOfPatterns$$2.length;
    v49 = z$$4 < v480;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v932 = getSequenceFromFasta(text$$7);
  var v785 = JAM.call(v932.replace, v932, [/[^A-Za-z]/g, ""], JAM.policy.p28);
  var v481 = v785.length;
  var v51 = v481 > maxInput;
  if (v51) {
    var v482 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v50 = v482 + " characters.";
    alert(v50);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v483 = text$$8.length;
  var v53 = v483 > maxInput$$1;
  if (v53) {
    var v484 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v52 = v484 + " characters.";
    alert(v52);
    return false;
  } else {
    return true;
  }
  return;
}
function complement(dnaSequence) {
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/g/g, "1"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/c/g, "2"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "c"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "g"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/G/g, "1"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/C/g, "2"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "C"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "G"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/a/g, "1"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/t/g, "2"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "t"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "a"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/A/g, "1"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/T/g, "2"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "T"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "A"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/u/g, "a"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/U/g, "A"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/r/g, "1"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/y/g, "2"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "y"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "r"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/R/g, "1"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/Y/g, "2"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "Y"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "R"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/k/g, "1"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/m/g, "2"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "m"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "k"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/K/g, "1"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/M/g, "2"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "M"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "K"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/b/g, "1"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/v/g, "2"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "v"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "b"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/B/g, "1"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/V/g, "2"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "V"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "B"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/d/g, "1"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/h/g, "2"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "h"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "d"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/D/g, "1"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/H/g, "2"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "H"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "D"], JAM.policy.p28);
  return dnaSequence;
}
function closeForm() {
  var v54 = outputWindow.document;
  JAM.call(v54.write, v54, ["</form>"], JAM.policy.p22);
  return true;
}
function closePre() {
  var v55 = outputWindow.document;
  JAM.call(v55.write, v55, ["</div>"], JAM.policy.p22);
  var v56 = outputWindow.document;
  JAM.call(v56.write, v56, ["</pre>\n"], JAM.policy.p22);
  return;
}
function closeTextArea() {
  var v57 = outputWindow.document;
  JAM.call(v57.write, v57, ["</textarea>"], JAM.policy.p22);
  return true;
}
function closeWindow() {
  var v58 = outputWindow.document;
  JAM.call(v58.write, v58, ["</body>\n</html>\n"], JAM.policy.p22);
  outputWindow.status = "Done.";
  var v59 = outputWindow.document;
  v59.close();
  return true;
}
function convertDegenerates(sequence$$1) {
  sequence$$1 = sequence$$1.toLowerCase();
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/t/g, "[TU]"], JAM.policy.p28);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/r/g, "[AGR]"], JAM.policy.p28);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/y/g, "[CTUY]"], JAM.policy.p28);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/s/g, "[GCS]"], JAM.policy.p28);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/w/g, "[ATUW]"], JAM.policy.p28);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/k/g, "[GTUK]"], JAM.policy.p28);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/m/g, "[ACM]"], JAM.policy.p28);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/b/g, "[CGTUBSKY]"], JAM.policy.p28);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/d/g, "[AGTUDRKW]"], JAM.policy.p28);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/h/g, "[ACTUHMYW]"], JAM.policy.p28);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/v/g, "[ACGVSMR]"], JAM.policy.p28);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/n/g, "[ACGTURYSWKMBDHVN]"], JAM.policy.p28);
  return sequence$$1;
}
function earlyCheckAlign(alignArray) {
  var v485 = alignArray.length;
  var v60 = v485 < 3;
  if (v60) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v486 = alignArray.length;
  var v62 = i$$4 < v486;
  for (;v62;) {
    var v786 = alignArray[i$$4];
    var v487 = JAM.call(v786.search, v786, [/[^\s]+\s/], JAM.policy.p29);
    var v61 = v487 == -1;
    if (v61) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4 = i$$4 + 1;
    var v488 = alignArray.length;
    v62 = i$$4 < v488;
  }
  return true;
}
function filterAlignSeq(alignSeq) {
  alignSeq = JAM.call(alignSeq.replace, alignSeq, [/[^abcdefghiklmnpqrstvwxyz\.\-]/gi, ""], JAM.policy.p28);
  return alignSeq;
}
function filterFastaTitle(sequenceTitle) {
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/\s{2,}/g, " "], JAM.policy.p28);
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/^\s*/g, ""], JAM.policy.p28);
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/[\f\n\r\t]+$/g, "\n"], JAM.policy.p28);
  return JAM.call(sequenceTitle.replace, sequenceTitle, [/[\<\>]\n/gi, ""], JAM.policy.p28);
}
function getArrayOfFasta(sequenceData) {
  var arrayOfFasta = new Array;
  var matchArray;
  var re$$1 = /\>[^\>]+/g;
  var v489 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p29);
  var v65 = v489 != -1;
  if (v65) {
    var v64 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p40);
    for (;v64;) {
      var v63 = matchArray[0];
      JAM.call(arrayOfFasta.push, arrayOfFasta, [v63], JAM.policy.p40);
      v64 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p40);
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v490 = sequence$$2.length;
  var v66 = "&gt;results for " + v490;
  var stringToReturn = v66 + " residue sequence ";
  var v491 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p29);
  var v68 = v491 != -1;
  if (v68) {
    var v492 = stringToReturn + '"';
    var v67 = v492 + fastaSequenceTitle;
    stringToReturn = v67 + '"';
  }
  var v493 = stringToReturn + ' starting "';
  var v494 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p26);
  var v69 = v493 + v494;
  stringToReturn = v69 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v495 = sequenceOne.length;
  var v70 = "Search results for " + v495;
  var stringToReturn$$1 = v70 + " residue sequence ";
  var v496 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p29);
  var v72 = v496 != -1;
  if (v72) {
    var v497 = stringToReturn$$1 + '"';
    var v71 = v497 + fastaSequenceTitleOne;
    stringToReturn$$1 = v71 + '"';
  }
  var v498 = stringToReturn$$1 + ' starting "';
  var v499 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p26);
  var v73 = v498 + v499;
  stringToReturn$$1 = v73 + '"\n';
  var v500 = stringToReturn$$1 + "and ";
  var v501 = sequenceTwo.length;
  var v74 = v500 + v501;
  stringToReturn$$1 = v74 + " residue sequence ";
  var v502 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p29);
  var v76 = v502 != -1;
  if (v76) {
    var v503 = stringToReturn$$1 + '"';
    var v75 = v503 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v75 + '"';
  }
  var v504 = stringToReturn$$1 + ' starting "';
  var v505 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p26);
  var v77 = v504 + v505;
  stringToReturn$$1 = v77 + '"';
  var v78 = '<div class="info">' + stringToReturn$$1;
  return v78 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v79 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v79);
  var j$$2 = 0;
  var v506 = arrayOfPatterns$$3.length;
  var v82 = j$$2 < v506;
  for (;v82;) {
    var v80 = geneticCodeMatchExp$$1;
    var v81 = j$$2;
    var v933 = arrayOfPatterns$$3[j$$2];
    var v787 = JAM.call(v933.match, v933, [/\/.+\//], JAM.policy.p29);
    var v507 = v787 + "gi";
    if (JAM.isEval(eval)) {
      var v1282 = eval("introspect(JAM.policy.pFull) { " + v507 + " }")
    } else {
      var v1282 = JAM.call(eval, null, [v507])
    }
    introspect(JAM.policy.p13) {
      v80[v81] = v1282;
    }
    j$$2 = j$$2 + 1;
    var v508 = arrayOfPatterns$$3.length;
    v82 = j$$2 < v508;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v83 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v83);
  var j$$3 = 0;
  var v509 = arrayOfPatterns$$4.length;
  var v88 = j$$3 < v509;
  for (;v88;) {
    var v84 = geneticCodeMatchResult$$1;
    var v85 = j$$3;
    var v788 = arrayOfPatterns$$4[j$$3];
    var v510 = JAM.call(v788.match, v788, [/=[a-zA-Z\*]/], JAM.policy.p29);
    var v1283 = v510.toString();
    introspect(JAM.policy.p13) {
      v84[v85] = v1283;
    }
    var v86 = geneticCodeMatchResult$$1;
    var v87 = j$$3;
    var v511 = geneticCodeMatchResult$$1[j$$3];
    var v1284 = JAM.call(v511.replace, v511, [/=/g, ""], JAM.policy.p28);
    introspect(JAM.policy.p13) {
      v86[v87] = v1284;
    }
    j$$3 = j$$3 + 1;
    var v512 = arrayOfPatterns$$4.length;
    v88 = j$$3 < v512;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v513 = sequence$$3.length;
  var v89 = "Results for " + v513;
  var stringToReturn$$2 = v89 + " residue sequence ";
  var v514 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p29);
  var v91 = v514 != -1;
  if (v91) {
    var v515 = stringToReturn$$2 + '"';
    var v90 = v515 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v90 + '"';
  }
  var v516 = stringToReturn$$2 + ' starting "';
  var v517 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p26);
  var v92 = v516 + v517;
  stringToReturn$$2 = v92 + '"';
  var v93 = '<div class="info">' + stringToReturn$$2;
  return v93 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v789 = "Results for " + topology;
  var v518 = v789 + " ";
  var v519 = sequence$$4.length;
  var v94 = v518 + v519;
  var stringToReturn$$3 = v94 + " residue sequence ";
  var v520 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p29);
  var v96 = v520 != -1;
  if (v96) {
    var v521 = stringToReturn$$3 + '"';
    var v95 = v521 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v95 + '"';
  }
  var v522 = stringToReturn$$3 + ' starting "';
  var v523 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p26);
  var v97 = v522 + v523;
  stringToReturn$$3 = v97 + '"';
  var v98 = '<div class="info">' + stringToReturn$$3;
  return v98 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v524 = sequenceOne$$1.length;
  var v99 = "Alignment results for " + v524;
  var stringToReturn$$4 = v99 + " residue sequence ";
  var v525 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p29);
  var v101 = v525 != -1;
  if (v101) {
    var v526 = stringToReturn$$4 + '"';
    var v100 = v526 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v100 + '"';
  }
  var v527 = stringToReturn$$4 + ' starting "';
  var v528 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p26);
  var v102 = v527 + v528;
  stringToReturn$$4 = v102 + '"\n';
  var v529 = stringToReturn$$4 + "and ";
  var v530 = sequenceTwo$$1.length;
  var v103 = v529 + v530;
  stringToReturn$$4 = v103 + " residue sequence ";
  var v531 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p29);
  var v105 = v531 != -1;
  if (v105) {
    var v532 = stringToReturn$$4 + '"';
    var v104 = v532 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v104 + '"';
  }
  var v533 = stringToReturn$$4 + ' starting "';
  var v534 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p26);
  var v106 = v533 + v534;
  stringToReturn$$4 = v106 + '"';
  var v107 = '<div class="info">' + stringToReturn$$4;
  return v107 + "</div>\n";
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v109 = j$$4 < lengthOut;
  for (;v109;) {
    var v535 = Math.random();
    var v536 = components.length;
    var v108 = v535 * v536;
    tempNum = JAM.call(Math.floor, Math, [v108], JAM.policy.p29);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p40);
    j$$4 = j$$4 + 1;
    v109 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p22);
}
function getSequenceFromFasta(sequenceRecord) {
  var v537 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p29);
  var v110 = v537 != -1;
  if (v110) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p28);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v538 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p29);
  var v112 = v538 != -1;
  if (v112) {
    var v111 = JAM.call(sequenceRecord$$1.match, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p28);
    fastaTitle = v111.toString();
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\>|[\f\n\r]/g, ""], JAM.policy.p28);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\s{2,}/g, " "], JAM.policy.p28);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/[\<\>]/gi, ""], JAM.policy.p28);
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  var v1256 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p29);
  var v1247 = v1256 != -1;
  var v1258 = !v1247;
  if (v1258) {
    var v1257 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p29);
    v1247 = v1257 != -1;
  }
  var v1234 = v1247;
  var v1249 = !v1234;
  if (v1249) {
    var v1248 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p29);
    v1234 = v1248 != -1;
  }
  var v1218 = v1234;
  var v1236 = !v1218;
  if (v1236) {
    var v1235 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p29);
    v1218 = v1235 != -1;
  }
  var v1200 = v1218;
  var v1220 = !v1200;
  if (v1220) {
    var v1219 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p29);
    v1200 = v1219 != -1;
  }
  var v1167 = v1200;
  var v1202 = !v1167;
  if (v1202) {
    var v1201 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p29);
    v1167 = v1201 != -1;
  }
  var v1117 = v1167;
  var v1169 = !v1117;
  if (v1169) {
    var v1168 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p29);
    v1117 = v1168 != -1;
  }
  var v1045 = v1117;
  var v1119 = !v1045;
  if (v1119) {
    var v1118 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p29);
    v1045 = v1118 != -1;
  }
  var v934 = v1045;
  var v1047 = !v934;
  if (v1047) {
    var v1046 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p29);
    v934 = v1046 != -1;
  }
  var v790 = v934;
  var v936 = !v790;
  if (v936) {
    var v935 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p29);
    v790 = v935 != -1;
  }
  var v539 = v790;
  var v792 = !v539;
  if (v792) {
    var v791 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p29);
    v539 = v791 != -1;
  }
  var v113 = v539;
  if (v113) {
    return false;
  }
  return true;
}
function openForm() {
  var v114 = outputWindow.document;
  JAM.call(v114.write, v114, ['<form action="">\n'], JAM.policy.p22);
  return true;
}
function openPre() {
  var v115 = outputWindow.document;
  JAM.call(v115.write, v115, ["<pre>"], JAM.policy.p22);
  var v116 = outputWindow.document;
  JAM.call(v116.write, v116, ['<div class="pre">'], JAM.policy.p22);
  return;
}
function openTextArea() {
  var v117 = outputWindow.document;
  JAM.call(v117.write, v117, ['<br /><textarea rows="6" cols="61">\n'], JAM.policy.p22);
  return true;
}
function openWindow(title$$6) {
  _openWindow(title$$6, true);
  return;
}
function _openWindow(title$$7, isColor) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p27);
  outputWindow.focus();
  var v118 = outputWindow.document;
  var v937 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v793 = v937 + "<head>\n";
  var v540 = v793 + "<title>Sequence Manipulation Suite</title>\n";
  var v119 = v540 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v118.write, v118, [v119], JAM.policy.p40);
  if (isColor) {
    var v120 = outputWindow.document;
    var v1272 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1268 = v1272 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1264 = v1268 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1259 = v1264 + "div.info {font-weight: bold}\n";
    var v1250 = v1259 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1237 = v1250 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v1221 = v1237 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v1203 = v1221 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1170 = v1203 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v1120 = v1170 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v1048 = v1120 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v938 = v1048 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v794 = v938 + "td.many {color: #000000}\n";
    var v541 = v794 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v121 = v541 + "</style>\n";
    JAM.call(v120.write, v120, [v121], JAM.policy.p40);
  } else {
    var v122 = outputWindow.document;
    var v1276 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1273 = v1276 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1269 = v1273 + "div.title {display: none}\n";
    var v1265 = v1269 + "div.info {font-weight: bold}\n";
    var v1260 = v1265 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1251 = v1260 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1238 = v1251 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v1222 = v1238 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1204 = v1222 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1171 = v1204 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1121 = v1171 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v1049 = v1121 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v939 = v1049 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v795 = v939 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v542 = v795 + "img {display: none}\n";
    var v123 = v542 + "</style>\n";
    JAM.call(v122.write, v122, [v123], JAM.policy.p40);
  }
  var v124 = outputWindow.document;
  var v940 = "</head>\n" + '<body class="main">\n';
  var v796 = v940 + '<div class="title">';
  var v543 = v796 + title$$7;
  var v125 = v543 + " results</div>\n";
  JAM.call(v124.write, v124, [v125], JAM.policy.p40);
  outputWindow.status = "Please Wait.";
  return true;
}
function openWindowAlign(title$$8) {
  _openWindowAlign(title$$8, true);
  return;
}
function _openWindowAlign(title$$9, isBackground) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p27);
  outputWindow.focus();
  var v126 = outputWindow.document;
  var v941 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v797 = v941 + "<head>\n";
  var v544 = v797 + "<title>Sequence Manipulation Suite</title>\n";
  var v127 = v544 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v126.write, v126, [v127], JAM.policy.p40);
  if (isBackground) {
    var v128 = outputWindow.document;
    var v1274 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1270 = v1274 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1266 = v1270 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1261 = v1266 + "div.info {font-weight: bold}\n";
    var v1252 = v1261 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v1239 = v1252 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v1223 = v1239 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v1205 = v1223 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v1172 = v1205 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v1122 = v1172 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v1050 = v1122 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v942 = v1050 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v798 = v942 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v545 = v798 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v129 = v545 + "</style>\n";
    JAM.call(v128.write, v128, [v129], JAM.policy.p40);
  } else {
    var v130 = outputWindow.document;
    var v1278 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1277 = v1278 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1275 = v1277 + "div.title {display: none}\n";
    var v1271 = v1275 + "div.info {font-weight: bold}\n";
    var v1267 = v1271 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1262 = v1267 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v1253 = v1262 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v1240 = v1253 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v1224 = v1240 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v1206 = v1224 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v1173 = v1206 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v1123 = v1173 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v1051 = v1123 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v943 = v1051 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v799 = v943 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v546 = v799 + "img {display: none}\n";
    var v131 = v546 + "</style>\n";
    JAM.call(v130.write, v130, [v131], JAM.policy.p40);
  }
  var v132 = outputWindow.document;
  var v944 = "</head>\n" + '<body class="main">\n';
  var v800 = v944 + '<div class="title">';
  var v547 = v800 + title$$9;
  var v133 = v547 + " results</div>\n";
  JAM.call(v132.write, v132, [v133], JAM.policy.p40);
  outputWindow.status = "Please Wait.";
  return true;
}
function removeFormatting(sequence$$5) {
  return JAM.call(sequence$$5.replace, sequence$$5, [/[\d\s]/g, ""], JAM.policy.p28);
}
function removeNonDna(sequence$$6) {
  return JAM.call(sequence$$6.replace, sequence$$6, [/[^gatucryswkmbdhvnxGATUCRYSWKMBDHVNX]/g, ""], JAM.policy.p28);
}
function removeNonDnaStrict(sequence$$7) {
  return JAM.call(sequence$$7.replace, sequence$$7, [/[^gatucGATUC]/g, ""], JAM.policy.p28);
}
function removeNonProtein(sequence$$8) {
  return JAM.call(sequence$$8.replace, sequence$$8, [/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, ""], JAM.policy.p28);
}
function removeNonProteinStrict(sequence$$9) {
  return JAM.call(sequence$$9.replace, sequence$$9, [/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, ""], JAM.policy.p28);
}
function removeNonProteinAllowDegen(sequence$$10) {
  return JAM.call(sequence$$10.replace, sequence$$10, [/[^ABCDEFGHIKLMNPQRSTVWYXZabcdefghiklmnpqrstvwyxz\*]/g, ""], JAM.policy.p28);
}
function removeNonProteinAllowX(sequence$$11) {
  return JAM.call(sequence$$11.replace, sequence$$11, [/[^ACDEFGHIKLMNPQRSTVWYZXacdefghiklmnpqrstvwyzx\*]/g, ""], JAM.policy.p28);
}
function removeWhiteSpace(text$$9) {
  return JAM.call(text$$9.replace, text$$9, [/\s/g, ""], JAM.policy.p28);
}
function removeNonLetters(sequence$$12) {
  return JAM.call(sequence$$12.replace, sequence$$12, [/[^A-Z]/gi, ""], JAM.policy.p28);
}
function reverse(dnaSequence$$1) {
  var tempDnaArray = new Array;
  var v548 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p29);
  var v134 = v548 != -1;
  if (v134) {
    tempDnaArray = JAM.call(dnaSequence$$1.match, dnaSequence$$1, [/./g], JAM.policy.p29);
    tempDnaArray = tempDnaArray.reverse();
    dnaSequence$$1 = JAM.call(tempDnaArray.join, tempDnaArray, [""], JAM.policy.p22);
  }
  return dnaSequence$$1;
}
function rightNum(theNumber, sequenceToAppend, lengthOfColumn, tabIn) {
  var j$$5 = 0;
  var tempString = "";
  theNumber = theNumber.toString();
  j$$5 = theNumber.length;
  var v135 = j$$5 < lengthOfColumn;
  for (;v135;) {
    tempString = tempString + " ";
    j$$5 = j$$5 + 1;
    v135 = j$$5 < lengthOfColumn;
  }
  var v136 = tempString + theNumber;
  theNumber = v136 + " ";
  var v137 = sequenceToAppend + theNumber;
  sequenceToAppend = v137 + tabIn;
  return sequenceToAppend;
}
function testScript() {
  function v1(str$$7, p1$$1, offset$$9, s$$3) {
    return p1$$1 + "X";
  }
  var testArray = new Array;
  var testString = "1234567890";
  JAM.call(testArray.push, testArray, [testString], JAM.policy.p40);
  var v549 = testArray[0];
  var v138 = v549 != testString;
  if (v138) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v550 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p40);
  var v139 = v550 == -1;
  if (v139) {
    alert("Regular expression 'm' flag not supported. See browser compatibility page.");
    return false;
  }
  var caughtException = false;
  try {
    if (JAM.isEval(eval)) {
      re$$2 = eval("introspect(JAM.policy.pFull) { " + "Exception handling not supported. Check browser compatibility page." + " }");
    } else {
      re$$2 = JAM.call(eval, null, ["Exception handling not supported. Check browser compatibility page."]);
    }
  } catch (e$$4) {
    caughtException = true;
  }
  var v140 = !caughtException;
  if (v140) {
    alert("Exception handling not supported. See browser compatibility page.");
  }
  testString = "123";
  testString = JAM.call(testString.replace, testString, [/(\d)/g, v1], JAM.policy.p28);
  var v141 = testString != "1X2X3X";
  if (v141) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false;
  }
  var testNum = 2489.8237;
  var v551 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p24);
  var v142 = v551 != 2489.824;
  if (v142) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v552 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p24);
  var v143 = v552 != 2489.8;
  if (v143) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v553 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p29);
  var v144 = v553 == -1;
  if (v144) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v1052 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p29);
  var v945 = v1052 == -1;
  var v1054 = !v945;
  if (v1054) {
    var v1053 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p29);
    v945 = v1053 == -1;
  }
  var v801 = v945;
  var v947 = !v801;
  if (v947) {
    var v946 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p29);
    v801 = v946 == -1;
  }
  var v554 = v801;
  var v803 = !v554;
  if (v803) {
    var v802 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p29);
    v554 = v802 == -1;
  }
  var v145 = v554;
  if (v145) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v555 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p29);
  var v146 = v555 == -1;
  if (v146) {
    alert("Please enter a number.");
    return false;
  }
  var v148 = theNumber$$2 > maxInput$$2;
  if (v148) {
    var v556 = "Please enter a number less than or equal to " + maxInput$$2;
    var v147 = v556 + ".";
    alert(v147);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v557 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p29);
  var v149 = v557 != -1;
  if (v149) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v558 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p29);
  var v150 = v558 != -1;
  if (v150) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v1055 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p29);
  var v948 = v1055 == -1;
  var v1057 = !v948;
  if (v1057) {
    var v1056 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p29);
    v948 = v1056 == -1;
  }
  var v804 = v948;
  var v950 = !v804;
  if (v950) {
    var v949 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p29);
    v804 = v949 == -1;
  }
  var v559 = v804;
  var v806 = !v559;
  if (v806) {
    var v805 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p29);
    v559 = v805 == -1;
  }
  var v151 = v559;
  if (v151) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v1058 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p29);
  var v951 = v1058 == -1;
  var v1060 = !v951;
  if (v1060) {
    var v1059 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p29);
    v951 = v1059 == -1;
  }
  var v807 = v951;
  var v953 = !v807;
  if (v953) {
    var v952 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p29);
    v807 = v952 == -1;
  }
  var v560 = v807;
  var v809 = !v560;
  if (v809) {
    var v808 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p29);
    v560 = v808 == -1;
  }
  var v152 = v560;
  if (v152) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v561 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p29);
  var v153 = v561 == -1;
  if (v153) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v1061 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p29);
  var v954 = v1061 == -1;
  var v1063 = !v954;
  if (v1063) {
    var v1062 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p29);
    v954 = v1062 == -1;
  }
  var v810 = v954;
  var v956 = !v810;
  if (v956) {
    var v955 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p29);
    v810 = v955 == -1;
  }
  var v562 = v810;
  var v812 = !v562;
  if (v812) {
    var v811 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p29);
    v562 = v811 == -1;
  }
  var v154 = v562;
  if (v154) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v563 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p29);
  var v155 = v563 == -1;
  if (v155) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function writeGroupNum(text$$10, tabIn$$1, groupSize, basePerLine, startBase, stopBase) {
  var i$$5 = parseInt(startBase);
  var k = 0;
  var lineOfText = "";
  var sepChar = " ";
  groupSize = parseInt(groupSize);
  basePerLine = parseInt(basePerLine);
  var v163 = i$$5 < stopBase;
  for (;v163;) {
    var v156 = i$$5 + 1;
    lineOfText = rightNum(v156, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v564 = basePerLine / groupSize;
    var v160 = j$$6 <= v564;
    for (;v160;) {
      var v159 = k < groupSize;
      for (;v159;) {
        var v157 = lineOfText;
        var v565 = k + i$$5;
        var v158 = JAM.call(text$$10.charAt, text$$10, [v565], JAM.policy.p40);
        lineOfText = v157 + v158;
        k = k + 1;
        v159 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v566 = basePerLine / groupSize;
      v160 = j$$6 <= v566;
    }
    var v161 = outputWindow.document;
    var v162 = lineOfText + "\n";
    JAM.call(v161.write, v161, [v162], JAM.policy.p40);
    lineOfText = "";
    v163 = i$$5 < stopBase;
  }
  return true;
}
function writeGroupNumDna(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition) {
  writeGroupNumDnaSetStart(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition, 0);
  return true;
}
function writeGroupNumDnaSetStart(text$$12, tabIn$$3, groupSize$$2, basePerLine$$2, startBase$$2, stopBase$$2, strands$$1, numberPosition$$1, numberingAdjustment) {
  function adjustNumbering(original, adjustment) {
    var adjusted = original + adjustment;
    var v567 = adjustment < 0;
    if (v567) {
      v567 = adjusted >= 0;
    }
    var v164 = v567;
    if (v164) {
      adjusted = adjusted + 1;
    }
    return adjusted;
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
  var v197 = i$$6 < stopBase$$2;
  for (;v197;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v568 = basePerLine$$2 / groupSize$$2;
    var v173 = j$$7 <= v568;
    for (;v173;) {
      var v168 = k$$1 < groupSize$$2;
      for (;v168;) {
        var v569 = i$$6 + k$$1;
        var v165 = v569 >= stopBase$$2;
        if (v165) {
          break;
        }
        var v166 = lineOfText$$1;
        var v570 = k$$1 + i$$6;
        var v167 = JAM.call(text$$12.charAt, text$$12, [v570], JAM.policy.p40);
        lineOfText$$1 = v166 + v167;
        k$$1 = k$$1 + 1;
        v168 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v171 = numberPosition$$1 == "above";
      if (v171) {
        var v169 = aboveNum;
        var v571 = adjustNumbering(i$$6, numberingAdjustment);
        var v170 = rightNum(v571, "", groupSize$$2, tabIn$$3);
        aboveNum = v169 + v170;
      }
      var v172 = i$$6 >= stopBase$$2;
      if (v172) {
        break;
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v572 = basePerLine$$2 / groupSize$$2;
      v173 = j$$7 <= v572;
    }
    var v196 = numberPosition$$1 == "left";
    if (v196) {
      var v174 = outputWindow.document;
      var v957 = adjustNumbering(lineNum, numberingAdjustment);
      var v813 = rightNum(v957, "", 8, tabIn$$3);
      var v573 = v813 + lineOfText$$1;
      var v175 = v573 + "\n";
      JAM.call(v174.write, v174, [v175], JAM.policy.p40);
      var v179 = strands$$1 == "two";
      if (v179) {
        var v176 = outputWindow.document;
        var v958 = adjustNumbering(lineNum, numberingAdjustment);
        var v814 = rightNum(v958, "", 8, tabIn$$3);
        var v815 = complement(lineOfText$$1);
        var v574 = v814 + v815;
        var v177 = v574 + "\n";
        JAM.call(v176.write, v176, [v177], JAM.policy.p40);
        var v178 = outputWindow.document;
        JAM.call(v178.write, v178, ["\n"], JAM.policy.p22);
      }
    } else {
      var v195 = numberPosition$$1 == "right";
      if (v195) {
        var v180 = outputWindow.document;
        var v816 = lineOfText$$1;
        var v817 = adjustNumbering(i$$6, numberingAdjustment);
        var v575 = v816 + v817;
        var v181 = v575 + "\n";
        JAM.call(v180.write, v180, [v181], JAM.policy.p40);
        var v185 = strands$$1 == "two";
        if (v185) {
          var v182 = outputWindow.document;
          var v818 = complement(lineOfText$$1);
          var v819 = adjustNumbering(i$$6, numberingAdjustment);
          var v576 = v818 + v819;
          var v183 = v576 + "\n";
          JAM.call(v182.write, v182, [v183], JAM.policy.p40);
          var v184 = outputWindow.document;
          JAM.call(v184.write, v184, ["\n"], JAM.policy.p22);
        }
      } else {
        var v194 = numberPosition$$1 == "above";
        if (v194) {
          var v186 = outputWindow.document;
          var v187 = aboveNum + "\n";
          JAM.call(v186.write, v186, [v187], JAM.policy.p40);
          var v188 = outputWindow.document;
          var v189 = lineOfText$$1 + "\n";
          JAM.call(v188.write, v188, [v189], JAM.policy.p40);
          var v193 = strands$$1 == "two";
          if (v193) {
            var v190 = outputWindow.document;
            var v577 = complement(lineOfText$$1);
            var v191 = v577 + "\n";
            JAM.call(v190.write, v190, [v191], JAM.policy.p40);
            var v192 = outputWindow.document;
            JAM.call(v192.write, v192, ["\n"], JAM.policy.p22);
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v197 = i$$6 < stopBase$$2;
  }
  return true;
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
  var v218 = i$$7 < stopBase$$3;
  for (;v218;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v578 = basePerLine$$3 / groupSize$$3;
    var v206 = j$$8 <= v578;
    for (;v206;) {
      var v201 = k$$2 < groupSize$$3;
      for (;v201;) {
        var v579 = i$$7 + k$$2;
        var v198 = v579 >= stopBase$$3;
        if (v198) {
          break;
        }
        var v199 = lineOfText$$2;
        var v580 = k$$2 + i$$7;
        var v200 = JAM.call(text$$13.charAt, text$$13, [v580], JAM.policy.p40);
        lineOfText$$2 = v199 + v200;
        k$$2 = k$$2 + 1;
        v201 = k$$2 < groupSize$$3;
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v204 = numberPosition$$2 == "above";
      if (v204) {
        var v202 = aboveNum$$1;
        var v203 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = v202 + v203;
      }
      var v205 = i$$7 >= stopBase$$3;
      if (v205) {
        break;
      }
      k$$2 = 0;
      j$$8 = j$$8 + 1;
      var v581 = basePerLine$$3 / groupSize$$3;
      v206 = j$$8 <= v581;
    }
    var v217 = numberPosition$$2 == "left";
    if (v217) {
      var v207 = outputWindow.document;
      var v820 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v582 = v820 + lineOfText$$2;
      var v208 = v582 + "\n";
      JAM.call(v207.write, v207, [v208], JAM.policy.p40);
    } else {
      var v216 = numberPosition$$2 == "right";
      if (v216) {
        var v209 = outputWindow.document;
        var v583 = lineOfText$$2 + i$$7;
        var v210 = v583 + "\n";
        JAM.call(v209.write, v209, [v210], JAM.policy.p40);
      } else {
        var v215 = numberPosition$$2 == "above";
        if (v215) {
          var v211 = outputWindow.document;
          var v212 = aboveNum$$1 + "\n";
          JAM.call(v211.write, v211, [v212], JAM.policy.p40);
          var v213 = outputWindow.document;
          var v214 = lineOfText$$2 + "\n";
          JAM.call(v213.write, v213, [v214], JAM.policy.p40);
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v218 = i$$7 < stopBase$$3;
  }
  return true;
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
  var v959 = sequence$$13.length;
  var v821 = v959 <= firstIndexToMutate;
  var v960 = !v821;
  if (v960) {
    v821 = lastIndexToMutate < 0;
  }
  var v584 = v821;
  var v822 = !v584;
  if (v822) {
    v584 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v219 = v584;
  if (v219) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v227 = i$$8 < numMut;
  for (;v227;) {
    maxNum = sequence$$13.length;
    var v585 = Math.random();
    var v220 = v585 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v220], JAM.policy.p29);
    var v586 = randNum < firstIndexToMutate;
    var v823 = !v586;
    if (v823) {
      v586 = randNum > lastIndexToMutate;
    }
    var v221 = v586;
    if (v221) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v227 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p29);
    needNewChar = true;
    for (;needNewChar;) {
      var v587 = Math.random();
      var v588 = components$$1.length;
      var v222 = v587 * v588;
      componentsIndex = JAM.call(Math.round, Math, [v222], JAM.policy.p29);
      var v589 = components$$1.length;
      var v223 = componentsIndex == v589;
      if (v223) {
        componentsIndex = 0;
      }
      var v590 = components$$1[componentsIndex];
      var v224 = v590 != currentChar;
      if (v224) {
        needNewChar = false;
      }
    }
    var v591 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p26);
    var v592 = components$$1[componentsIndex];
    var v225 = v591 + v592;
    var v593 = randNum + 1;
    var v594 = sequence$$13.length;
    var v226 = JAM.call(sequence$$13.substring, sequence$$13, [v593, v594], JAM.policy.p41);
    sequence$$13 = v225 + v226;
    i$$8 = i$$8 + 1;
    v227 = i$$8 < numMut;
  }
  var v228 = outputWindow.document;
  var v229 = addReturns(sequence$$13);
  JAM.call(v228.write, v228, [v229], JAM.policy.p40);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v234 = j$$9 < lengthOut$$1;
  for (;v234;) {
    var v595 = Math.random();
    var v596 = components$$2.length;
    var v230 = v595 * v596;
    tempNum$$1 = JAM.call(Math.floor, Math, [v230], JAM.policy.p29);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v597 = sequence$$14.length;
    var v233 = v597 == 60;
    if (v233) {
      var v231 = outputWindow.document;
      var v232 = sequence$$14 + "\n";
      JAM.call(v231.write, v231, [v232], JAM.policy.p40);
      sequence$$14 = "";
    }
    j$$9 = j$$9 + 1;
    v234 = j$$9 < lengthOut$$1;
  }
  var v235 = outputWindow.document;
  var v236 = sequence$$14 + "\n";
  JAM.call(v235.write, v235, [v236], JAM.policy.p40);
  return true;
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
  var v240 = dnaConformation == "circular";
  if (v240) {
    var v237 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p26);
    shiftValue = v237.length;
    var v961 = sequence$$15.length;
    var v824 = v961 - lookAhead;
    var v825 = sequence$$15.length;
    var v598 = JAM.call(sequence$$15.substring, sequence$$15, [v824, v825], JAM.policy.p41);
    var v238 = v598 + sequence$$15;
    var v239 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p26);
    sequence$$15 = v238 + v239;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v241 = outputWindow.document;
  JAM.call(v241.write, v241, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p22);
  var v242 = outputWindow.document;
  var v962 = '<tr><td class="title" width="200px">' + "Site:";
  var v826 = v962 + '</td><td class="title">';
  var v599 = v826 + "Positions:";
  var v243 = v599 + "</td></tr>\n";
  JAM.call(v242.write, v242, [v243], JAM.policy.p40);
  var i$$9 = 0;
  var v600 = arrayOfItems.length;
  var v259 = i$$9 < v600;
  for (;v259;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v601 = arrayOfItems[i$$9];
    var v244 = JAM.call(v601.match, v601, [/\/.+\//], JAM.policy.p29);
    matchExp = v244 + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    var v963 = arrayOfItems[i$$9];
    var v827 = JAM.call(v963.match, v963, [/\)\D*\d+/], JAM.policy.p29);
    var v602 = v827.toString();
    var v245 = JAM.call(v602.replace, v602, [/\)\D*/, ""], JAM.policy.p28);
    cutDistance = parseFloat(v245);
    var v251 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p40);
    for (;v251;) {
      var v246 = matchExp.lastIndex;
      matchPosition = v246 - cutDistance;
      var v603 = matchPosition >= lowerLimit;
      if (v603) {
        v603 = matchPosition < upperLimit;
      }
      var v249 = v603;
      if (v249) {
        timesFound = timesFound + 1;
        var v247 = tempString$$1 + ", ";
        var v604 = matchPosition - shiftValue;
        var v248 = v604 + 1;
        tempString$$1 = v247 + v248;
      }
      var v605 = matchExp.lastIndex;
      var v828 = RegExp.lastMatch;
      var v606 = v828.length;
      var v250 = v605 - v606;
      matchExp.lastIndex = v250 + 1;
      v251 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p40);
    }
    var v607 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p29);
    var v252 = v607 != -1;
    if (v252) {
      tempString$$1 = JAM.call(tempString$$1.replace, tempString$$1, [/none,\s*/, ""], JAM.policy.p28);
    }
    var v256 = timesFound == 0;
    if (v256) {
      backGroundClass = "none";
    } else {
      var v255 = timesFound == 1;
      if (v255) {
        backGroundClass = "one";
      } else {
        var v254 = timesFound == 2;
        if (v254) {
          backGroundClass = "two";
        } else {
          var v253 = timesFound == 3;
          if (v253) {
            backGroundClass = "three";
          } else {
            backGroundClass = "many";
          }
        }
      }
    }
    var v257 = outputWindow.document;
    var v1207 = '<tr><td class="' + backGroundClass;
    var v1174 = v1207 + '">';
    var v1241 = arrayOfItems[i$$9];
    var v1225 = JAM.call(v1241.match, v1241, [/\([^\(]+\)/], JAM.policy.p29);
    var v1208 = v1225.toString();
    var v1175 = JAM.call(v1208.replace, v1208, [/\(|\)/g, ""], JAM.policy.p28);
    var v1124 = v1174 + v1175;
    var v1064 = v1124 + '</td><td class="';
    var v964 = v1064 + backGroundClass;
    var v829 = v964 + '">';
    var v608 = v829 + tempString$$1;
    var v258 = v608 + "</td></tr>\n";
    JAM.call(v257.write, v257, [v258], JAM.policy.p40);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v609 = arrayOfItems.length;
    v259 = i$$9 < v609;
  }
  var v260 = outputWindow.document;
  JAM.call(v260.write, v260, ["</tbody></table>\n"], JAM.policy.p22);
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v261 = outputWindow.document;
  JAM.call(v261.write, v261, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p22);
  var v262 = outputWindow.document;
  var v1125 = '<tr><td class="title">' + "Pattern:";
  var v1065 = v1125 + '</td><td class="title">';
  var v965 = v1065 + "Times found:";
  var v830 = v965 + '</td><td class="title">';
  var v610 = v830 + "Percentage:";
  var v263 = v610 + "</td></tr>\n";
  JAM.call(v262.write, v262, [v263], JAM.policy.p40);
  var i$$10 = 0;
  var v611 = arrayOfItems$$1.length;
  var v272 = i$$10 < v611;
  for (;v272;) {
    var tempNumber = 0;
    var v612 = arrayOfItems$$1[i$$10];
    var v264 = JAM.call(v612.match, v612, [/\/[^\/]+\//], JAM.policy.p29);
    var matchExp$$1 = v264 + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    var v613 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p40);
    var v266 = v613 != -1;
    if (v266) {
      var v265 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p40);
      tempNumber = v265.length;
    }
    var percentage = 0;
    var v831 = originalLength + 1;
    var v1066 = arrayOfItems$$1[i$$10];
    var v966 = JAM.call(v1066.match, v1066, [/\d+/], JAM.policy.p29);
    var v832 = parseFloat(v966);
    var v614 = v831 - v832;
    var v269 = v614 > 0;
    if (v269) {
      var v267 = 100 * tempNumber;
      var v615 = originalLength + 1;
      var v967 = arrayOfItems$$1[i$$10];
      var v833 = JAM.call(v967.match, v967, [/\d+/], JAM.policy.p29);
      var v616 = parseFloat(v833);
      var v268 = v615 - v616;
      percentage = v267 / v268;
    }
    var v270 = outputWindow.document;
    var v1242 = arrayOfItems$$1[i$$10];
    var v1226 = JAM.call(v1242.match, v1242, [/\([^\(]+\)\b/], JAM.policy.p29);
    var v1209 = v1226.toString();
    var v1176 = JAM.call(v1209.replace, v1209, [/\(|\)/g, ""], JAM.policy.p28);
    var v1126 = "<tr><td>" + v1176;
    var v1067 = v1126 + "</td><td>";
    var v968 = v1067 + tempNumber;
    var v834 = v968 + "</td><td>";
    var v835 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p24);
    var v617 = v834 + v835;
    var v271 = v617 + "</td></tr>\n";
    JAM.call(v270.write, v270, [v271], JAM.policy.p40);
    i$$10 = i$$10 + 1;
    var v618 = arrayOfItems$$1.length;
    v272 = i$$10 < v618;
  }
  var v273 = outputWindow.document;
  JAM.call(v273.write, v273, ["</tbody></table>\n"], JAM.policy.p22);
  return true;
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v619 = sequence$$17.length;
  var v280 = v619 > 0;
  for (;v280;) {
    maxNum$$1 = sequence$$17.length;
    var v620 = Math.random();
    var v274 = v620 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v274], JAM.policy.p29);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p29);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p26);
    var v275 = randNum$$1 + 1;
    var v276 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v275, v276], JAM.policy.p28);
    sequence$$17 = tempString1 + tempString2;
    var v621 = tempSeq.length;
    var v279 = v621 == 60;
    if (v279) {
      var v277 = outputWindow.document;
      var v278 = tempSeq + "\n";
      JAM.call(v277.write, v277, [v278], JAM.policy.p40);
      tempSeq = "";
    }
    var v622 = sequence$$17.length;
    v280 = v622 > 0;
  }
  var v281 = outputWindow.document;
  var v282 = tempSeq + "\n";
  JAM.call(v281.write, v281, [v282], JAM.policy.p40);
  return true;
}
function windowExtract(theDocument) {
  JAM.startProfile('compute');

  var newDna = "";
  var maxInput$$3 = 5E5;
  var matchFound = false;
  var ranges = new Array;
  var v623 = testScript();
  var v283 = v623 == false;
  if (v283) {
    return false;
  }
  var v1254 = theDocument.forms;
  var v1243 = v1254[0];
  var v1227 = v1243.elements;
  var v1210 = v1227[0];
  var v1177 = checkFormElement(v1210);
  var v1127 = v1177 == false;
  var v1179 = !v1127;
  if (v1179) {
    var v1263 = theDocument.forms;
    var v1255 = v1263[0];
    var v1244 = v1255.elements;
    var v1228 = v1244[0];
    var v1211 = v1228.value;
    var v1178 = checkSequenceLength(v1211, maxInput$$3);
    v1127 = v1178 == false;
  }
  var v1068 = v1127;
  var v1129 = !v1068;
  if (v1129) {
    var v1245 = theDocument.forms;
    var v1229 = v1245[0];
    var v1212 = v1229.elements;
    var v1180 = v1212[1];
    var v1128 = checkFormElement(v1180);
    v1068 = v1128 == false;
  }
  var v969 = v1068;
  var v1070 = !v969;
  if (v1070) {
    var v1230 = theDocument.forms;
    var v1213 = v1230[0];
    var v1181 = v1213.elements;
    var v1130 = v1181[3];
    var v1069 = checkFormElement(v1130);
    v969 = v1069 == false;
  }
  var v836 = v969;
  var v971 = !v836;
  if (v971) {
    var v1246 = theDocument.forms;
    var v1231 = v1246[0];
    var v1214 = v1231.elements;
    var v1182 = v1214[1];
    var v1131 = v1182.value;
    var v1071 = JAM.call(v1131.replace, v1131, [/[^\d]/g, ""], JAM.policy.p28);
    var v970 = verifyMaxDigits(v1071, maxInput$$3);
    v836 = v970 == false;
  }
  var v624 = v836;
  var v838 = !v624;
  if (v838) {
    var v1232 = theDocument.forms;
    var v1215 = v1232[0];
    var v1183 = v1215.elements;
    var v1132 = v1183[3];
    var v1072 = v1132.value;
    var v972 = JAM.call(v1072.replace, v1072, [/[^\d]/g, ""], JAM.policy.p28);
    var v837 = verifyMaxDigits(v972, maxInput$$3);
    v624 = v837 == false;
  }
  var v284 = v624;
  if (v284) {
    return false;
  }
  var v1133 = theDocument.forms;
  var v1073 = v1133[0];
  var v973 = v1073.elements;
  var v839 = v973[1];
  var v625 = v839.value;
  var v285 = JAM.call(v625.replace, v625, [/[^\d]/g, ""], JAM.policy.p28);
  var windowSize = parseInt(v285);
  var v1134 = theDocument.forms;
  var v1074 = v1134[0];
  var v974 = v1074.elements;
  var v840 = v974[3];
  var v626 = v840.value;
  var v286 = JAM.call(v626.replace, v626, [/[^\d]/g, ""], JAM.policy.p28);
  var position = parseInt(v286);
  var v975 = theDocument.forms;
  var v841 = v975[0];
  var v627 = v841.elements;
  var v287 = v627[2];
  var orientation = v287.value;
  var start$$4;
  var end$$1;
  var v294 = orientation == "ending";
  if (v294) {
    end$$1 = position;
    var v288 = end$$1 - windowSize;
    start$$4 = v288 + 1;
  } else {
    var v293 = orientation == "starting";
    if (v293) {
      start$$4 = position;
      var v289 = start$$4 + windowSize;
      end$$1 = v289 - 1;
    } else {
      var v292 = orientation == "centered";
      if (v292) {
        var v628 = position;
        var v842 = windowSize / 2;
        var v629 = JAM.call(Math.round, Math, [v842], JAM.policy.p40);
        var v290 = v628 - v629;
        start$$4 = v290 + 1;
        var v291 = start$$4 + windowSize;
        end$$1 = v291 - 1;
      }
    }
  }
  var v295 = new Range(start$$4, end$$1);
  JAM.call(ranges.push, ranges, [v295], JAM.policy.p40);
  openWindow("Window Extractor DNA");
  openPre();
  var v1075 = theDocument.forms;
  var v976 = v1075[0];
  var v843 = v976.elements;
  var v630 = v843[0];
  var v296 = v630.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v296);
  var i$$11 = 0;
  var v631 = arrayOfFasta$$1.length;
  var v303 = i$$11 < v631;
  for (;v303;) {
    var v297 = arrayOfFasta$$1[i$$11];
    newDna = getSequenceFromFasta(v297);
    var v298 = arrayOfFasta$$1[i$$11];
    title = getTitleFromFasta(v298);
    verifyDna(newDna);
    newDna = removeNonDna(newDna);
    var v299 = outputWindow.document;
    var v300 = getFastaTitleFromTitleAndSequence(title, newDna);
    JAM.call(v299.write, v299, [v300], JAM.policy.p40);
    var v1184 = theDocument.forms;
    var v1135 = v1184[0];
    var v1076 = v1135.elements;
    var v977 = v1076[7];
    var v844 = v977.options;
    var v1185 = theDocument.forms;
    var v1136 = v1185[0];
    var v1077 = v1136.elements;
    var v978 = v1077[7];
    var v845 = v978.selectedIndex;
    var v632 = v844[v845];
    var v301 = v632.value;
    var v1186 = theDocument.forms;
    var v1137 = v1186[0];
    var v1078 = v1137.elements;
    var v979 = v1078[8];
    var v846 = v979.options;
    var v1187 = theDocument.forms;
    var v1138 = v1187[0];
    var v1079 = v1138.elements;
    var v980 = v1079[8];
    var v847 = v980.selectedIndex;
    var v633 = v846[v847];
    var v302 = v633.value;
    writeSequenceRanges(newDna, ranges, v301, v302);
    i$$11 = i$$11 + 1;
    var v634 = arrayOfFasta$$1.length;
    v303 = i$$11 < v634;
  }
  closePre();
  closeWindow();

  JAM.stopProfile('compute');
  return true;
}
function rangeExtract(theDocument$$1) {
  var newDna$$1 = "";
  var maxInput$$4 = 5E5;
  var matchFound$$1 = false;
  var ranges$$1 = new Array;
  var v635 = testScript();
  var v304 = v635 == false;
  if (v304) {
    return false;
  }
  var v1216 = theDocument$$1.forms;
  var v1188 = v1216[0];
  var v1139 = v1188.elements;
  var v1080 = v1139[0];
  var v981 = checkFormElement(v1080);
  var v848 = v981 == false;
  var v983 = !v848;
  if (v983) {
    var v1233 = theDocument$$1.forms;
    var v1217 = v1233[0];
    var v1189 = v1217.elements;
    var v1140 = v1189[0];
    var v1081 = v1140.value;
    var v982 = checkSequenceLength(v1081, maxInput$$4);
    v848 = v982 == false;
  }
  var v636 = v848;
  var v850 = !v636;
  if (v850) {
    var v1190 = theDocument$$1.forms;
    var v1141 = v1190[0];
    var v1082 = v1141.elements;
    var v984 = v1082[1];
    var v849 = checkFormElement(v984);
    v636 = v849 == false;
  }
  var v305 = v636;
  if (v305) {
    return false;
  }
  var v1083 = theDocument$$1.forms;
  var v985 = v1083[0];
  var v851 = v985.elements;
  var v637 = v851[1];
  var v306 = v637.value;
  var arrayOfRanges = JAM.call(v306.split, v306, [/,/], JAM.policy.p29);
  var arrayOfStartAndEnd;
  var i$$12 = 0;
  var v638 = arrayOfRanges.length;
  var v313 = i$$12 < v638;
  for (;v313;) {
    var v307 = arrayOfRanges[i$$12];
    arrayOfStartAndEnd = JAM.call(v307.split, v307, [/\.\./], JAM.policy.p29);
    var v639 = arrayOfStartAndEnd.length;
    var v312 = v639 == 1;
    if (v312) {
      matchFound$$1 = true;
      var v640 = arrayOfStartAndEnd[0];
      var v641 = arrayOfStartAndEnd[0];
      var v308 = new Range(v640, v641);
      JAM.call(ranges$$1.push, ranges$$1, [v308], JAM.policy.p40);
    } else {
      var v642 = arrayOfStartAndEnd.length;
      var v311 = v642 == 2;
      if (v311) {
        matchFound$$1 = true;
        var v643 = arrayOfStartAndEnd[0];
        var v644 = arrayOfStartAndEnd[1];
        var v309 = new Range(v643, v644);
        JAM.call(ranges$$1.push, ranges$$1, [v309], JAM.policy.p40);
      } else {
        var v645 = arrayOfRanges[i$$12];
        var v310 = "The following range entry was ignored: " + v645;
        alert(v310);
      }
    }
    i$$12 = i$$12 + 1;
    var v646 = arrayOfRanges.length;
    v313 = i$$12 < v646;
  }
  var v314 = matchFound$$1 == false;
  if (v314) {
    alert("No ranges were entered.");
    return false;
  }
  openWindow("Range Extractor DNA");
  openPre();
  var v1084 = theDocument$$1.forms;
  var v986 = v1084[0];
  var v852 = v986.elements;
  var v647 = v852[0];
  var v315 = v647.value;
  var arrayOfFasta$$2 = getArrayOfFasta(v315);
  i$$12 = 0;
  var v648 = arrayOfFasta$$2.length;
  var v322 = i$$12 < v648;
  for (;v322;) {
    var v316 = arrayOfFasta$$2[i$$12];
    newDna$$1 = getSequenceFromFasta(v316);
    var v317 = arrayOfFasta$$2[i$$12];
    title = getTitleFromFasta(v317);
    verifyDna(newDna$$1);
    newDna$$1 = removeNonDna(newDna$$1);
    var v318 = outputWindow.document;
    var v319 = getFastaTitleFromTitleAndSequence(title, newDna$$1);
    JAM.call(v318.write, v318, [v319], JAM.policy.p40);
    var v1191 = theDocument$$1.forms;
    var v1142 = v1191[0];
    var v1085 = v1142.elements;
    var v987 = v1085[5];
    var v853 = v987.options;
    var v1192 = theDocument$$1.forms;
    var v1143 = v1192[0];
    var v1086 = v1143.elements;
    var v988 = v1086[5];
    var v854 = v988.selectedIndex;
    var v649 = v853[v854];
    var v320 = v649.value;
    var v1193 = theDocument$$1.forms;
    var v1144 = v1193[0];
    var v1087 = v1144.elements;
    var v989 = v1087[6];
    var v855 = v989.options;
    var v1194 = theDocument$$1.forms;
    var v1145 = v1194[0];
    var v1088 = v1145.elements;
    var v990 = v1088[6];
    var v856 = v990.selectedIndex;
    var v650 = v855[v856];
    var v321 = v650.value;
    writeSequenceRanges(newDna$$1, ranges$$1, v320, v321);
    i$$12 = i$$12 + 1;
    var v651 = arrayOfFasta$$2.length;
    v322 = i$$12 < v651;
  }
  closePre();
  closeWindow();
  return true;
}
function writeSequenceRanges(sequence$$18, ranges$$2, strand, segmentType) {
  var rangeGroup = new RangeGroup(strand, segmentType);
  var v652 = sequence$$18.length;
  var v323 = v652 / 2;
  var center_base = JAM.call(Math.round, Math, [v323], JAM.policy.p40);
  var i$$13 = 0;
  var v653 = ranges$$2.length;
  var v337 = i$$13 < v653;
  for (;v337;) {
    var v324 = ranges$$2[i$$13];
    var v991 = ranges$$2[i$$13];
    var v857 = v991.start;
    var v654 = v857.toString();
    var v1285 = JAM.call(v654.replace, v654, [/start|begin/gi, 1], JAM.policy.p28);
    v324.start = v1285;
    var v325 = ranges$$2[i$$13];
    var v992 = ranges$$2[i$$13];
    var v858 = v992.start;
    var v655 = v858.toString();
    var v656 = sequence$$18.length;
    var v1286 = JAM.call(v655.replace, v655, [/stop|end/gi, v656], JAM.policy.p28);
    v325.start = v1286;
    var v326 = ranges$$2[i$$13];
    var v993 = ranges$$2[i$$13];
    var v859 = v993.start;
    var v657 = v859.toString();
    var v658 = sequence$$18.length;
    var v1287 = JAM.call(v657.replace, v657, [/length/gi, v658], JAM.policy.p28);
    v326.start = v1287;
    var v327 = ranges$$2[i$$13];
    var v994 = ranges$$2[i$$13];
    var v860 = v994.start;
    var v659 = v860.toString();
    var v1288 = JAM.call(v659.replace, v659, [/middle|center|centre/gi, center_base], JAM.policy.p28);
    v327.start = v1288;
    var v328 = ranges$$2[i$$13];
    var v995 = ranges$$2[i$$13];
    var v861 = v995.stop;
    var v660 = v861.toString();
    var v1289 = JAM.call(v660.replace, v660, [/start|begin/gi, 1], JAM.policy.p28);
    v328.stop = v1289;
    var v329 = ranges$$2[i$$13];
    var v996 = ranges$$2[i$$13];
    var v862 = v996.stop;
    var v661 = v862.toString();
    var v662 = sequence$$18.length;
    var v1290 = JAM.call(v661.replace, v661, [/stop|end/gi, v662], JAM.policy.p28);
    v329.stop = v1290;
    var v330 = ranges$$2[i$$13];
    var v997 = ranges$$2[i$$13];
    var v863 = v997.stop;
    var v663 = v863.toString();
    var v664 = sequence$$18.length;
    var v1291 = JAM.call(v663.replace, v663, [/length/gi, v664], JAM.policy.p28);
    v330.stop = v1291;
    var v331 = ranges$$2[i$$13];
    var v998 = ranges$$2[i$$13];
    var v864 = v998.stop;
    var v665 = v864.toString();
    var v1292 = JAM.call(v665.replace, v665, [/middle|center|centre/gi, center_base], JAM.policy.p28);
    v331.stop = v1292;
    try {
      var v332 = ranges$$2[i$$13];
      var v1089 = ranges$$2[i$$13];
      var v999 = v1089.start;
      var v865 = v999.toString();
      if (JAM.isEval(eval)) {
        var v666 = eval("introspect(JAM.policy.pFull) { " + v865 + " }")
      } else {
        var v666 = JAM.call(eval, null, [v865])
      }
      var v1293 = parseInt(v666);
      v332.start = v1293;
    } catch (e$$5) {
      var v866 = ranges$$2[i$$13];
      var v667 = v866.start;
      var v333 = "Could not evaluate the following expression: " + v667;
      alert(v333);
      return false;
    }
    try {
      var v334 = ranges$$2[i$$13];
      var v1090 = ranges$$2[i$$13];
      var v1000 = v1090.stop;
      var v867 = v1000.toString();
      if (JAM.isEval(eval)) {
        var v668 = eval("introspect(JAM.policy.pFull) { " + v867 + " }")
      } else {
        var v668 = JAM.call(eval, null, [v867])
      }
      var v1294 = parseInt(v668);
      v334.stop = v1294;
    } catch (e$$6) {
      var v868 = ranges$$2[i$$13];
      var v669 = v868.stop;
      var v335 = "Could not evaluate the following expression: " + v669;
      alert(v335);
      return false;
    }
    var v336 = ranges$$2[i$$13];
    JAM.call(rangeGroup.addRange, rangeGroup, [v336], JAM.policy.p40);
    i$$13 = i$$13 + 1;
    var v670 = ranges$$2.length;
    v337 = i$$13 < v670;
  }
  JAM.call(rangeGroup.writeRanges, rangeGroup, [sequence$$18], JAM.policy.p40);
  return;
}
function getSequence(sequence$$19) {
  var problem = false;
  var warnings = new Array;
  var v671 = this.start;
  var v672 = this.stop;
  var v352 = v671 == v672;
  if (v352) {
    var v673 = this.start;
    var v339 = v673 < 1;
    if (v339) {
      problem = true;
      var v869 = this.start;
      var v674 = "position value of " + v869;
      var v338 = v674 + " is less than 1";
      JAM.call(warnings.push, warnings, [v338], JAM.policy.p40);
    }
    var v675 = this.start;
    var v676 = sequence$$19.length;
    var v341 = v675 > v676;
    if (v341) {
      problem = true;
      var v870 = this.start;
      var v677 = "position value of " + v870;
      var v340 = v677 + " is greater than the sequence length";
      JAM.call(warnings.push, warnings, [v340], JAM.policy.p40);
    }
  } else {
    var v678 = this.start;
    var v343 = v678 < 1;
    if (v343) {
      problem = true;
      var v871 = this.start;
      var v679 = "position value of " + v871;
      var v342 = v679 + " is less than 1";
      JAM.call(warnings.push, warnings, [v342], JAM.policy.p40);
    }
    var v680 = this.stop;
    var v345 = v680 < 1;
    if (v345) {
      problem = true;
      var v872 = this.stop;
      var v681 = "position value of " + v872;
      var v344 = v681 + " is less than 1";
      JAM.call(warnings.push, warnings, [v344], JAM.policy.p40);
    }
    var v682 = this.start;
    var v683 = sequence$$19.length;
    var v347 = v682 > v683;
    if (v347) {
      problem = true;
      var v873 = this.start;
      var v684 = "position value of " + v873;
      var v346 = v684 + " is greater than the sequence length";
      JAM.call(warnings.push, warnings, [v346], JAM.policy.p40);
    }
    var v685 = this.stop;
    var v686 = sequence$$19.length;
    var v349 = v685 > v686;
    if (v349) {
      problem = true;
      var v874 = this.stop;
      var v687 = "position value of " + v874;
      var v348 = v687 + " is greater than the sequence length";
      JAM.call(warnings.push, warnings, [v348], JAM.policy.p40);
    }
    var v688 = this.start;
    var v689 = this.stop;
    var v351 = v688 > v689;
    if (v351) {
      problem = true;
      var v1001 = this.start;
      var v875 = "stop position is less than start position in range " + v1001;
      var v690 = v875 + " to ";
      var v691 = this.stop;
      var v350 = v690 + v691;
      JAM.call(warnings.push, warnings, [v350], JAM.policy.p40);
    }
  }
  if (problem) {
    var v692 = JAM.call(warnings.join, warnings, [",\n"], JAM.policy.p22);
    var v353 = "An entry was skipped because of the following:\n" + v692;
    alert(v353);
    return false;
  } else {
    var v693 = this.start;
    var v694 = this.stop;
    var v357 = v693 == v694;
    if (v357) {
      var v695 = this.start;
      var v354 = v695 - 1;
      return JAM.call(sequence$$19.charAt, sequence$$19, [v354], JAM.policy.p40);
    } else {
      var v696 = this.start;
      var v355 = v696 - 1;
      var v356 = this.stop;
      return JAM.call(sequence$$19.substring, sequence$$19, [v355, v356], JAM.policy.p41);
    }
  }
  return;
}
function getTitle() {
  var v697 = this.start;
  var v698 = this.stop;
  var v361 = v697 == v698;
  if (v361) {
    var v358 = this.start;
    return "&gt;base " + v358;
  } else {
    var v876 = this.start;
    var v699 = "&gt;base " + v876;
    var v359 = v699 + " to ";
    var v360 = this.stop;
    return v359 + v360;
  }
  return;
}
function Range(start$$5, stop) {
  this.start = start$$5;
  this.stop = stop;
  return;
}
function addRange(range$$5) {
  var v362 = this.ranges;
  JAM.call(v362.push, v362, [range$$5], JAM.policy.p40);
  return;
}
function writeRanges(sequence$$20) {
  function v9(str$$15, p1$$9, offset$$17, s$$11) {
    var v700 = p1$$9.length;
    var v363 = offset$$17 + v700;
    return JAM.call(sequence$$20.substring, sequence$$20, [offset$$17, v363], JAM.policy.p41);
  }
  function v8(str$$14, p1$$8, p2$$3, offset$$16, s$$10) {
    var v364 = p1$$8;
    var v701 = p1$$8.length;
    var v877 = p1$$8.length;
    var v878 = p2$$3.length;
    var v702 = v877 + v878;
    var v365 = JAM.call(sequence$$20.substring, sequence$$20, [v701, v702], JAM.policy.p41);
    return v364 + v365;
  }
  function v7(str$$13, p1$$7, offset$$15, s$$9) {
    var v366 = ["g", "a", "c", "t"];
    var v367 = p1$$7.length;
    return getRandomSequence(v366, v367);
  }
  function v6(str$$12, p1$$6, p2$$2, offset$$14, s$$8) {
    var v368 = p1$$6;
    var v703 = ["g", "a", "c", "t"];
    var v704 = p2$$2.length;
    var v369 = getRandomSequence(v703, v704);
    return v368 + v369;
  }
  function v5(str$$11, p1$$5, offset$$13, s$$7) {
    return p1$$5.toLowerCase();
  }
  function v4(str$$10, p1$$4, p2$$1, offset$$12, s$$6) {
    var v370 = p1$$4;
    var v371 = p2$$1.toLowerCase();
    return v370 + v371;
  }
  function v3(str$$9, p1$$3, offset$$11, s$$5) {
    return p1$$3.toUpperCase();
  }
  function v2(str$$8, p1$$2, p2, offset$$10, s$$4) {
    var v372 = p1$$2;
    var v373 = p2.toUpperCase();
    return v372 + v373;
  }
  var sequenceArray$$1 = new Array;
  var v705 = this.type;
  var v382 = v705 == "new_sequence";
  if (v382) {
    var i$$14 = 0;
    var v879 = this.ranges;
    var v706 = v879.length;
    var v376 = i$$14 < v706;
    for (;v376;) {
      var v1002 = this.ranges;
      var v880 = v1002[i$$14];
      var v707 = JAM.call(v880.getSequence, v880, [sequence$$20], JAM.policy.p40);
      var v375 = v707 != "";
      if (v375) {
        var v881 = this.ranges;
        var v708 = v881[i$$14];
        var v374 = JAM.call(v708.getSequence, v708, [sequence$$20], JAM.policy.p40);
        JAM.call(sequenceArray$$1.push, sequenceArray$$1, [v374], JAM.policy.p40);
      }
      i$$14 = i$$14 + 1;
      var v882 = this.ranges;
      var v709 = v882.length;
      v376 = i$$14 < v709;
    }
    var v710 = this.strand;
    var v381 = v710 == "reverse";
    if (v381) {
      var v377 = outputWindow.document;
      var v1091 = JAM.call(sequenceArray$$1.join, sequenceArray$$1, [""], JAM.policy.p22);
      var v1003 = complement(v1091);
      var v883 = reverse(v1003);
      var v711 = addReturns(v883);
      var v378 = v711 + "\n\n";
      JAM.call(v377.write, v377, [v378], JAM.policy.p40);
    } else {
      var v379 = outputWindow.document;
      var v884 = JAM.call(sequenceArray$$1.join, sequenceArray$$1, [""], JAM.policy.p22);
      var v712 = addReturns(v884);
      var v380 = v712 + "\n\n";
      JAM.call(v379.write, v379, [v380], JAM.policy.p40);
    }
    return true;
  }
  var v713 = this.type;
  var v392 = v713 == "separate";
  if (v392) {
    i$$14 = 0;
    var v885 = this.ranges;
    var v714 = v885.length;
    var v391 = i$$14 < v714;
    for (;v391;) {
      var v1004 = this.ranges;
      var v886 = v1004[i$$14];
      var v715 = JAM.call(v886.getSequence, v886, [sequence$$20], JAM.policy.p40);
      var v390 = v715 != "";
      if (v390) {
        var v383 = outputWindow.document;
        var v1005 = this.ranges;
        var v887 = v1005[i$$14];
        var v716 = v887.getTitle();
        var v384 = v716 + "\n";
        JAM.call(v383.write, v383, [v384], JAM.policy.p40);
        var v717 = this.strand;
        var v389 = v717 == "reverse";
        if (v389) {
          var v385 = outputWindow.document;
          var v1195 = this.ranges;
          var v1146 = v1195[i$$14];
          var v1092 = JAM.call(v1146.getSequence, v1146, [sequence$$20], JAM.policy.p40);
          var v1006 = addReturns(v1092);
          var v888 = complement(v1006);
          var v718 = reverse(v888);
          var v386 = v718 + "\n\n";
          JAM.call(v385.write, v385, [v386], JAM.policy.p40);
        } else {
          var v387 = outputWindow.document;
          var v1093 = this.ranges;
          var v1007 = v1093[i$$14];
          var v889 = JAM.call(v1007.getSequence, v1007, [sequence$$20], JAM.policy.p40);
          var v719 = addReturns(v889);
          var v388 = v719 + "\n\n";
          JAM.call(v387.write, v387, [v388], JAM.policy.p40);
        }
      }
      i$$14 = i$$14 + 1;
      var v890 = this.ranges;
      var v720 = v890.length;
      v391 = i$$14 < v720;
    }
    return true;
  }
  var v721 = this.type;
  var v403 = v721 == "uppercased";
  if (v403) {
    var re$$3;
    sequence$$20 = sequence$$20.toLowerCase();
    i$$14 = 0;
    var v891 = this.ranges;
    var v722 = v891.length;
    var v397 = i$$14 < v722;
    for (;v397;) {
      var v1008 = this.ranges;
      var v892 = v1008[i$$14];
      var v723 = JAM.call(v892.getSequence, v892, [sequence$$20], JAM.policy.p40);
      var v396 = v723 != "";
      if (v396) {
        var v1009 = this.ranges;
        var v893 = v1009[i$$14];
        var v724 = v893.start;
        var v395 = v724 > 1;
        if (v395) {
          var v1196 = this.ranges;
          var v1147 = v1196[i$$14];
          var v1094 = v1147.start;
          var v1010 = v1094 - 1;
          var v894 = "(.{" + v1010;
          var v725 = v894 + "})\\B(.{";
          var v1148 = this.ranges;
          var v1095 = v1148[i$$14];
          var v1011 = v1095.stop;
          var v1149 = this.ranges;
          var v1096 = v1149[i$$14];
          var v1012 = v1096.start;
          var v895 = v1011 - v1012;
          var v726 = v895 + 1;
          var v393 = v725 + v726;
          re$$3 = v393 + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [re$$3, v2], JAM.policy.p41);
        } else {
          var v1150 = this.ranges;
          var v1097 = v1150[i$$14];
          var v1013 = v1097.stop;
          var v1151 = this.ranges;
          var v1098 = v1151[i$$14];
          var v1014 = v1098.start;
          var v896 = v1013 - v1014;
          var v727 = v896 + 1;
          var v394 = "(.{" + v727;
          re$$3 = v394 + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [re$$3, v3], JAM.policy.p41);
        }
      }
      i$$14 = i$$14 + 1;
      var v897 = this.ranges;
      var v728 = v897.length;
      v397 = i$$14 < v728;
    }
    var v729 = this.strand;
    var v402 = v729 == "reverse";
    if (v402) {
      var v398 = outputWindow.document;
      var v1015 = addReturns(sequence$$20);
      var v898 = complement(v1015);
      var v730 = reverse(v898);
      var v399 = v730 + "\n\n";
      JAM.call(v398.write, v398, [v399], JAM.policy.p40);
    } else {
      var v400 = outputWindow.document;
      var v731 = addReturns(sequence$$20);
      var v401 = v731 + "\n\n";
      JAM.call(v400.write, v400, [v401], JAM.policy.p40);
    }
    return true;
  }
  var v732 = this.type;
  var v414 = v732 == "lowercased";
  if (v414) {
    sequence$$20 = sequence$$20.toUpperCase();
    i$$14 = 0;
    var v899 = this.ranges;
    var v733 = v899.length;
    var v408 = i$$14 < v733;
    for (;v408;) {
      var v1016 = this.ranges;
      var v900 = v1016[i$$14];
      var v734 = JAM.call(v900.getSequence, v900, [sequence$$20], JAM.policy.p40);
      var v407 = v734 != "";
      if (v407) {
        var v1017 = this.ranges;
        var v901 = v1017[i$$14];
        var v735 = v901.start;
        var v406 = v735 > 1;
        if (v406) {
          var v1197 = this.ranges;
          var v1152 = v1197[i$$14];
          var v1099 = v1152.start;
          var v1018 = v1099 - 1;
          var v902 = "(.{" + v1018;
          var v736 = v902 + "})\\B(.{";
          var v1153 = this.ranges;
          var v1100 = v1153[i$$14];
          var v1019 = v1100.stop;
          var v1154 = this.ranges;
          var v1101 = v1154[i$$14];
          var v1020 = v1101.start;
          var v903 = v1019 - v1020;
          var v737 = v903 + 1;
          var v404 = v736 + v737;
          re$$3 = v404 + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [re$$3, v4], JAM.policy.p41);
        } else {
          var v1155 = this.ranges;
          var v1102 = v1155[i$$14];
          var v1021 = v1102.stop;
          var v1156 = this.ranges;
          var v1103 = v1156[i$$14];
          var v1022 = v1103.start;
          var v904 = v1021 - v1022;
          var v738 = v904 + 1;
          var v405 = "(.{" + v738;
          re$$3 = v405 + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [re$$3, v5], JAM.policy.p41);
        }
      }
      i$$14 = i$$14 + 1;
      var v905 = this.ranges;
      var v739 = v905.length;
      v408 = i$$14 < v739;
    }
    var v740 = this.strand;
    var v413 = v740 == "reverse";
    if (v413) {
      var v409 = outputWindow.document;
      var v1023 = addReturns(sequence$$20);
      var v906 = complement(v1023);
      var v741 = reverse(v906);
      var v410 = v741 + "\n\n";
      JAM.call(v409.write, v409, [v410], JAM.policy.p40);
    } else {
      var v411 = outputWindow.document;
      var v742 = addReturns(sequence$$20);
      var v412 = v742 + "\n\n";
      JAM.call(v411.write, v411, [v412], JAM.policy.p40);
    }
    return true;
  }
  var v743 = this.type;
  var v425 = v743 == "randomized";
  if (v425) {
    i$$14 = 0;
    var v907 = this.ranges;
    var v744 = v907.length;
    var v419 = i$$14 < v744;
    for (;v419;) {
      var v1024 = this.ranges;
      var v908 = v1024[i$$14];
      var v745 = JAM.call(v908.getSequence, v908, [sequence$$20], JAM.policy.p40);
      var v418 = v745 != "";
      if (v418) {
        var v1025 = this.ranges;
        var v909 = v1025[i$$14];
        var v746 = v909.start;
        var v417 = v746 > 1;
        if (v417) {
          var v1198 = this.ranges;
          var v1157 = v1198[i$$14];
          var v1104 = v1157.start;
          var v1026 = v1104 - 1;
          var v910 = "(.{" + v1026;
          var v747 = v910 + "})\\B(.{";
          var v1158 = this.ranges;
          var v1105 = v1158[i$$14];
          var v1027 = v1105.stop;
          var v1159 = this.ranges;
          var v1106 = v1159[i$$14];
          var v1028 = v1106.start;
          var v911 = v1027 - v1028;
          var v748 = v911 + 1;
          var v415 = v747 + v748;
          re$$3 = v415 + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [re$$3, v6], JAM.policy.p41);
        } else {
          var v1160 = this.ranges;
          var v1107 = v1160[i$$14];
          var v1029 = v1107.stop;
          var v1161 = this.ranges;
          var v1108 = v1161[i$$14];
          var v1030 = v1108.start;
          var v912 = v1029 - v1030;
          var v749 = v912 + 1;
          var v416 = "(.{" + v749;
          re$$3 = v416 + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [re$$3, v7], JAM.policy.p41);
        }
      }
      i$$14 = i$$14 + 1;
      var v913 = this.ranges;
      var v750 = v913.length;
      v419 = i$$14 < v750;
    }
    var v751 = this.strand;
    var v424 = v751 == "reverse";
    if (v424) {
      var v420 = outputWindow.document;
      var v1031 = addReturns(sequence$$20);
      var v914 = complement(v1031);
      var v752 = reverse(v914);
      var v421 = v752 + "\n\n";
      JAM.call(v420.write, v420, [v421], JAM.policy.p40);
    } else {
      var v422 = outputWindow.document;
      var v753 = addReturns(sequence$$20);
      var v423 = v753 + "\n\n";
      JAM.call(v422.write, v422, [v423], JAM.policy.p40);
    }
    return true;
  }
  var v754 = this.type;
  var v438 = v754 == "preserved";
  if (v438) {
    var v426 = ["g", "a", "c", "t"];
    var v427 = sequence$$20.length;
    var randomSequence = getRandomSequence(v426, v427);
    i$$14 = 0;
    var v915 = this.ranges;
    var v755 = v915.length;
    var v432 = i$$14 < v755;
    for (;v432;) {
      var v1032 = this.ranges;
      var v916 = v1032[i$$14];
      var v756 = JAM.call(v916.getSequence, v916, [sequence$$20], JAM.policy.p40);
      var v431 = v756 != "";
      if (v431) {
        var v1033 = this.ranges;
        var v917 = v1033[i$$14];
        var v757 = v917.start;
        var v430 = v757 > 1;
        if (v430) {
          var v1199 = this.ranges;
          var v1162 = v1199[i$$14];
          var v1109 = v1162.start;
          var v1034 = v1109 - 1;
          var v918 = "(.{" + v1034;
          var v758 = v918 + "})\\B(.{";
          var v1163 = this.ranges;
          var v1110 = v1163[i$$14];
          var v1035 = v1110.stop;
          var v1164 = this.ranges;
          var v1111 = v1164[i$$14];
          var v1036 = v1111.start;
          var v919 = v1035 - v1036;
          var v759 = v919 + 1;
          var v428 = v758 + v759;
          re$$3 = v428 + "})";
          re$$3 = new RegExp(re$$3);
          randomSequence = JAM.call(randomSequence.replace, randomSequence, [re$$3, v8], JAM.policy.p41);
        } else {
          var v1165 = this.ranges;
          var v1112 = v1165[i$$14];
          var v1037 = v1112.stop;
          var v1166 = this.ranges;
          var v1113 = v1166[i$$14];
          var v1038 = v1113.start;
          var v920 = v1037 - v1038;
          var v760 = v920 + 1;
          var v429 = "(.{" + v760;
          re$$3 = v429 + "})";
          re$$3 = new RegExp(re$$3);
          randomSequence = JAM.call(randomSequence.replace, randomSequence, [re$$3, v9], JAM.policy.p41);
        }
      }
      i$$14 = i$$14 + 1;
      var v921 = this.ranges;
      var v761 = v921.length;
      v432 = i$$14 < v761;
    }
    var v762 = this.strand;
    var v437 = v762 == "reverse";
    if (v437) {
      var v433 = outputWindow.document;
      var v1039 = addReturns(randomSequence);
      var v922 = complement(v1039);
      var v763 = reverse(v922);
      var v434 = v763 + "\n\n";
      JAM.call(v433.write, v433, [v434], JAM.policy.p40);
    } else {
      var v435 = outputWindow.document;
      var v764 = addReturns(randomSequence);
      var v436 = v764 + "\n\n";
      JAM.call(v435.write, v435, [v436], JAM.policy.p40);
    }
    return true;
  }
  return;
}
function RangeGroup(strand$$1, type$$25) {
  this.strand = strand$$1;
  this.type = type$$25;
  var v1295 = new Array;
  this.ranges = v1295;
  return;
}
new Range(0, 0);
var v439 = Range.prototype;
v439.getSequence = getSequence;
var v440 = Range.prototype;
v440.getTitle = getTitle;
new RangeGroup("", "");
var v441 = RangeGroup.prototype;
v441.addRange = addRange;
var v442 = RangeGroup.prototype;
v442.writeRanges = writeRanges;
JAM.set(document, "onload", v10);
var v443 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p22);
JAM.set(v443, "onclick", v11);
var v444 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p22);
JAM.set(v444, "onclick", v12)

JAM.stopProfile('load');
