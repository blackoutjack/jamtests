function v12() {
  var v853 = document.forms;
  var v708 = v853[0];
  var v407 = v708.elements;
  var v13 = v407[0];
  v13.value = " ";
  return;
}
function v11() {
  try {
    windowExtract();
  } catch (e$$7) {
    var v14 = "The following error was encountered: " + e$$7;
    alert(v14);
  }
  return;
}
function v10() {
  var v408 = document.main_form;
  var v15 = v408.main_submit;
  v15.focus();
  return;
}
function addReturns(sequence) {
  function v0(str$$6, p1, offset$$8, s$$2) {
    return p1 + "\n";
  }
  sequence = JAM.call(sequence.replace, sequence, [/(.{60})/g, v0], JAM.policy.p15);
  return sequence;
}
function checkAlign(arrayOfTitles, arrayOfSequences) {
  var v16 = arrayOfSequences[0];
  var lengthOfAlign = v16.length;
  var v409 = arrayOfSequences.length;
  var v17 = v409 < 2;
  if (v17) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v410 = arrayOfTitles.length;
  var v19 = i$$1 < v410;
  for (;v19;) {
    var v958 = arrayOfTitles[i$$1];
    var v854 = JAM.call(v958.search, v958, [/\S/], JAM.policy.p18);
    var v709 = v854 == -1;
    var v856 = !v709;
    if (v856) {
      var v959 = arrayOfSequences[i$$1];
      var v855 = JAM.call(v959.search, v959, [/\S/], JAM.policy.p18);
      v709 = v855 == -1;
    }
    var v411 = v709;
    var v711 = !v411;
    if (v711) {
      var v857 = arrayOfSequences[i$$1];
      var v710 = v857.length;
      v411 = v710 != lengthOfAlign;
    }
    var v18 = v411;
    if (v18) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v412 = arrayOfTitles.length;
    v19 = i$$1 < v412;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v1026 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p18);
  var v960 = v1026 == -1;
  var v1028 = !v960;
  if (v1028) {
    var v1027 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p18);
    v960 = v1027 == -1;
  }
  var v858 = v960;
  var v962 = !v858;
  if (v962) {
    var v961 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p18);
    v858 = v961 == -1;
  }
  var v712 = v858;
  var v860 = !v712;
  if (v860) {
    var v859 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p18);
    v712 = v859 == -1;
  }
  var v413 = v712;
  var v714 = !v413;
  if (v714) {
    var v713 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p18);
    v413 = v713 == -1;
  }
  var v20 = v413;
  if (v20) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v715 = formElement.value;
  var v414 = JAM.call(v715.search, v715, [/\S/], JAM.policy.p18);
  var v21 = v414 == -1;
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
  var v415 = arrayOfPatterns.length;
  var v24 = z$$2 < v415;
  for (;v24;) {
    var v716 = arrayOfPatterns[z$$2];
    var v416 = JAM.call(v716.search, v716, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p18);
    var v22 = v416 == -1;
    if (v22) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v717 = arrayOfPatterns[z$$2];
    var v417 = moreExpressionCheck(v717);
    var v23 = v417 == false;
    if (v23) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v418 = arrayOfPatterns.length;
    v24 = z$$2 < v418;
  }
  var v25 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v25);
  var v26 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v26);
  var j = 0;
  var v419 = arrayOfPatterns.length;
  var v30 = j < v419;
  for (;v30;) {
    var v718 = arrayOfPatterns[j];
    var v420 = JAM.call(v718.match, v718, [/\/.+\//], JAM.policy.p18);
    var v27 = v420 + "gi";
    if (JAM.isEval(eval)) {
      var v1181 = eval("introspect(JAM.policy.pFull) { " + v27 + " }")
    } else {
      var v1181 = JAM.call(eval, null, [v27])
    }
    geneticCodeMatchExp[j] = v1181;
    var v421 = arrayOfPatterns[j];
    var v28 = JAM.call(v421.match, v421, [/=[a-zA-Z\*]/], JAM.policy.p18);
    var v1182 = v28.toString();
    geneticCodeMatchResult[j] = v1182;
    var v29 = geneticCodeMatchResult[j];
    var v1183 = JAM.call(v29.replace, v29, [/=/g, ""], JAM.policy.p15);
    geneticCodeMatchResult[j] = v1183;
    j++;
    var v422 = arrayOfPatterns.length;
    v30 = j < v422;
  }
  var i$$2 = 0;
  var v719 = testSequence.length;
  var v423 = v719 - 3;
  var v37 = i$$2 <= v423;
  for (;v37;) {
    var v31 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v31], JAM.policy.p15);
    j = 0;
    var v424 = geneticCodeMatchExp.length;
    var v35 = j < v424;
    for (;v35;) {
      var v720 = geneticCodeMatchExp[j];
      var v425 = JAM.call(codon.search, codon, [v720], JAM.policy.p17);
      var v34 = v425 != -1;
      if (v34) {
        var v33 = oneMatch == true;
        if (v33) {
          var v426 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v32 = v426 + ".";
          alert(v32);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v427 = geneticCodeMatchExp.length;
      v35 = j < v427;
    }
    var v36 = oneMatch == false;
    if (v36) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v721 = testSequence.length;
    var v428 = v721 - 3;
    v37 = i$$2 <= v428;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v429 = arrayOfPatterns$$1.length;
  var v39 = z$$3 < v429;
  for (;v39;) {
    var v722 = arrayOfPatterns$$1[z$$3];
    var v430 = JAM.call(v722.search, v722, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p18);
    var v38 = v430 != -1;
    if (v38) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v431 = arrayOfPatterns$$1.length;
    v39 = z$$3 < v431;
  }
  var i$$3 = 0;
  var v432 = arrayOfPatterns$$1.length;
  var v43 = i$$3 < v432;
  for (;v43;) {
    var v723 = arrayOfPatterns$$1[i$$3];
    var v433 = "[" + v723;
    var v40 = v433 + "]";
    var re = new RegExp(v40, "gi");
    var j$$1 = i$$3 + 1;
    var v434 = arrayOfPatterns$$1.length;
    var v42 = j$$1 < v434;
    for (;v42;) {
      var v724 = arrayOfPatterns$$1[j$$1];
      var v435 = JAM.call(v724.search, v724, [re], JAM.policy.p17);
      var v41 = v435 != -1;
      if (v41) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v436 = arrayOfPatterns$$1.length;
      v42 = j$$1 < v436;
    }
    i$$3++;
    var v437 = arrayOfPatterns$$1.length;
    v43 = i$$3 < v437;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v438 = arrayOfPatterns$$2.length;
  var v46 = z$$4 < v438;
  for (;v46;) {
    var v725 = arrayOfPatterns$$2[z$$4];
    var v439 = JAM.call(v725.search, v725, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p18);
    var v44 = v439 == -1;
    if (v44) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v726 = arrayOfPatterns$$2[z$$4];
    var v440 = moreExpressionCheck(v726);
    var v45 = v440 == false;
    if (v45) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v441 = arrayOfPatterns$$2.length;
    v46 = z$$4 < v441;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v861 = getSequenceFromFasta(text$$7);
  var v727 = JAM.call(v861.replace, v861, [/[^A-Za-z]/g, ""], JAM.policy.p15);
  var v442 = v727.length;
  var v48 = v442 > maxInput;
  if (v48) {
    var v443 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v47 = v443 + " characters.";
    alert(v47);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v444 = text$$8.length;
  var v50 = v444 > maxInput$$1;
  if (v50) {
    var v445 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v49 = v445 + " characters.";
    alert(v49);
    return false;
  } else {
    return true;
  }
  return;
}
function complement(dnaSequence) {
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/g/g, "1"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/c/g, "2"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "c"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "g"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/G/g, "1"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/C/g, "2"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "C"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "G"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/a/g, "1"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/t/g, "2"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "t"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "a"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/A/g, "1"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/T/g, "2"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "T"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "A"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/u/g, "a"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/U/g, "A"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/r/g, "1"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/y/g, "2"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "y"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "r"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/R/g, "1"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/Y/g, "2"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "Y"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "R"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/k/g, "1"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/m/g, "2"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "m"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "k"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/K/g, "1"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/M/g, "2"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "M"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "K"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/b/g, "1"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/v/g, "2"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "v"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "b"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/B/g, "1"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/V/g, "2"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "V"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "B"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/d/g, "1"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/h/g, "2"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "h"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "d"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/D/g, "1"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/H/g, "2"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "H"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "D"], JAM.policy.p15);
  return dnaSequence;
}
function closeForm() {
  var v51 = outputWindow.document;
  JAM.call(v51.write, v51, ["</form>"], JAM.policy.p11);
  return true;
}
function closePre() {
  var v52 = outputWindow.document;
  JAM.call(v52.write, v52, ["</div>"], JAM.policy.p11);
  var v53 = outputWindow.document;
  JAM.call(v53.write, v53, ["</pre>\n"], JAM.policy.p11);
  return;
}
function closeTextArea() {
  var v54 = outputWindow.document;
  JAM.call(v54.write, v54, ["</textarea>"], JAM.policy.p11);
  return true;
}
function closeWindow() {
  var v55 = outputWindow.document;
  JAM.call(v55.write, v55, ["</body>\n</html>\n"], JAM.policy.p11);
  outputWindow.status = "Done.";
  var v56 = outputWindow.document;
  v56.close();
  return;
}
function convertDegenerates(sequence$$1) {
  sequence$$1 = sequence$$1.toLowerCase();
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/t/g, "[TU]"], JAM.policy.p15);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/r/g, "[AGR]"], JAM.policy.p15);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/y/g, "[CTUY]"], JAM.policy.p15);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/s/g, "[GCS]"], JAM.policy.p15);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/w/g, "[ATUW]"], JAM.policy.p15);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/k/g, "[GTUK]"], JAM.policy.p15);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/m/g, "[ACM]"], JAM.policy.p15);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/b/g, "[CGTUBSKY]"], JAM.policy.p15);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/d/g, "[AGTUDRKW]"], JAM.policy.p15);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/h/g, "[ACTUHMYW]"], JAM.policy.p15);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/v/g, "[ACGVSMR]"], JAM.policy.p15);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/n/g, "[ACGTURYSWKMBDHVN]"], JAM.policy.p15);
  return sequence$$1;
}
function earlyCheckAlign(alignArray) {
  var v446 = alignArray.length;
  var v57 = v446 < 3;
  if (v57) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v447 = alignArray.length;
  var v59 = i$$4 < v447;
  for (;v59;) {
    var v728 = alignArray[i$$4];
    var v448 = JAM.call(v728.search, v728, [/[^\s]+\s/], JAM.policy.p18);
    var v58 = v448 == -1;
    if (v58) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v449 = alignArray.length;
    v59 = i$$4 < v449;
  }
  return true;
}
function filterAlignSeq(alignSeq) {
  alignSeq = JAM.call(alignSeq.replace, alignSeq, [/[^abcdefghiklmnpqrstvwxyz\.\-]/gi, ""], JAM.policy.p15);
  return alignSeq;
}
function filterFastaTitle(sequenceTitle) {
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/\s{2,}/g, " "], JAM.policy.p15);
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/^\s*/g, ""], JAM.policy.p15);
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/[\f\n\r\t]+$/g, "\n"], JAM.policy.p15);
  return JAM.call(sequenceTitle.replace, sequenceTitle, [/[\<\>]\n/gi, ""], JAM.policy.p15);
}
function getArrayOfFasta(sequenceData) {
  var arrayOfFasta = new Array;
  var matchArray;
  var re$$1 = /\>[^\>]+/g;
  var v450 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p18);
  var v62 = v450 != -1;
  if (v62) {
    var v61 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p17);
    for (;v61;) {
      var v60 = matchArray[0];
      JAM.call(arrayOfFasta.push, arrayOfFasta, [v60], JAM.policy.p17);
      v61 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p17);
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence() {
  var fastaSequenceTitle = title;
  var sequence$$2 = newProtein;
  var v451 = sequence$$2.length;
  var v63 = "&gt;results for " + v451;
  var stringToReturn = v63 + " residue sequence ";
  var v452 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p18);
  var v65 = v452 != -1;
  if (v65) {
    var v453 = stringToReturn + '"';
    var v64 = v453 + fastaSequenceTitle;
    stringToReturn = v64 + '"';
  }
  var v454 = stringToReturn + ' starting "';
  var v455 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p13);
  var v66 = v454 + v455;
  stringToReturn = v66 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v456 = sequenceOne.length;
  var v67 = "Search results for " + v456;
  var stringToReturn$$1 = v67 + " residue sequence ";
  var v457 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p18);
  var v69 = v457 != -1;
  if (v69) {
    var v458 = stringToReturn$$1 + '"';
    var v68 = v458 + fastaSequenceTitleOne;
    stringToReturn$$1 = v68 + '"';
  }
  var v459 = stringToReturn$$1 + ' starting "';
  var v460 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p13);
  var v70 = v459 + v460;
  stringToReturn$$1 = v70 + '"\n';
  var v461 = stringToReturn$$1 + "and ";
  var v462 = sequenceTwo.length;
  var v71 = v461 + v462;
  stringToReturn$$1 = v71 + " residue sequence ";
  var v463 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p18);
  var v73 = v463 != -1;
  if (v73) {
    var v464 = stringToReturn$$1 + '"';
    var v72 = v464 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v72 + '"';
  }
  var v465 = stringToReturn$$1 + ' starting "';
  var v466 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p13);
  var v74 = v465 + v466;
  stringToReturn$$1 = v74 + '"';
  var v75 = '<div class="info">' + stringToReturn$$1;
  return v75 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v76 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v76);
  var j$$2 = 0;
  var v467 = arrayOfPatterns$$3.length;
  var v78 = j$$2 < v467;
  for (;v78;) {
    var v729 = arrayOfPatterns$$3[j$$2];
    var v468 = JAM.call(v729.match, v729, [/\/.+\//], JAM.policy.p18);
    var v77 = v468 + "gi";
    if (JAM.isEval(eval)) {
      var v1184 = eval("introspect(JAM.policy.pFull) { " + v77 + " }")
    } else {
      var v1184 = JAM.call(eval, null, [v77])
    }
    geneticCodeMatchExp$$1[j$$2] = v1184;
    j$$2++;
    var v469 = arrayOfPatterns$$3.length;
    v78 = j$$2 < v469;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v79 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v79);
  var j$$3 = 0;
  var v470 = arrayOfPatterns$$4.length;
  var v82 = j$$3 < v470;
  for (;v82;) {
    var v471 = arrayOfPatterns$$4[j$$3];
    var v80 = JAM.call(v471.match, v471, [/=[a-zA-Z\*]/], JAM.policy.p18);
    var v1185 = v80.toString();
    geneticCodeMatchResult$$1[j$$3] = v1185;
    var v81 = geneticCodeMatchResult$$1[j$$3];
    var v1186 = JAM.call(v81.replace, v81, [/=/g, ""], JAM.policy.p15);
    geneticCodeMatchResult$$1[j$$3] = v1186;
    j$$3++;
    var v472 = arrayOfPatterns$$4.length;
    v82 = j$$3 < v472;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v473 = sequence$$3.length;
  var v83 = "Results for " + v473;
  var stringToReturn$$2 = v83 + " residue sequence ";
  var v474 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p18);
  var v85 = v474 != -1;
  if (v85) {
    var v475 = stringToReturn$$2 + '"';
    var v84 = v475 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v84 + '"';
  }
  var v476 = stringToReturn$$2 + ' starting "';
  var v477 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p13);
  var v86 = v476 + v477;
  stringToReturn$$2 = v86 + '"';
  var v87 = '<div class="info">' + stringToReturn$$2;
  return v87 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v730 = "Results for " + topology;
  var v478 = v730 + " ";
  var v479 = sequence$$4.length;
  var v88 = v478 + v479;
  var stringToReturn$$3 = v88 + " residue sequence ";
  var v480 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p18);
  var v90 = v480 != -1;
  if (v90) {
    var v481 = stringToReturn$$3 + '"';
    var v89 = v481 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v89 + '"';
  }
  var v482 = stringToReturn$$3 + ' starting "';
  var v483 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p13);
  var v91 = v482 + v483;
  stringToReturn$$3 = v91 + '"';
  var v92 = '<div class="info">' + stringToReturn$$3;
  return v92 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v484 = sequenceOne$$1.length;
  var v93 = "Alignment results for " + v484;
  var stringToReturn$$4 = v93 + " residue sequence ";
  var v485 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p18);
  var v95 = v485 != -1;
  if (v95) {
    var v486 = stringToReturn$$4 + '"';
    var v94 = v486 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v94 + '"';
  }
  var v487 = stringToReturn$$4 + ' starting "';
  var v488 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p13);
  var v96 = v487 + v488;
  stringToReturn$$4 = v96 + '"\n';
  var v489 = stringToReturn$$4 + "and ";
  var v490 = sequenceTwo$$1.length;
  var v97 = v489 + v490;
  stringToReturn$$4 = v97 + " residue sequence ";
  var v491 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p18);
  var v99 = v491 != -1;
  if (v99) {
    var v492 = stringToReturn$$4 + '"';
    var v98 = v492 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v98 + '"';
  }
  var v493 = stringToReturn$$4 + ' starting "';
  var v494 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p13);
  var v100 = v493 + v494;
  stringToReturn$$4 = v100 + '"';
  var v101 = '<div class="info">' + stringToReturn$$4;
  return v101 + "</div>\n";
}
function getRandomSequence(lengthOut) {
  var components = ["A", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "Y"];
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v103 = j$$4 < lengthOut;
  for (;v103;) {
    var v495 = Math.random();
    var v496 = components.length;
    var v102 = v495 * v496;
    tempNum = JAM.call(Math.floor, Math, [v102], JAM.policy.p18);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p17);
    j$$4++;
    v103 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p11);
}
function getSequenceFromFasta(sequenceRecord) {
  var v497 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p18);
  var v104 = v497 != -1;
  if (v104) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p15);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v498 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p18);
  var v106 = v498 != -1;
  if (v106) {
    var v105 = JAM.call(sequenceRecord$$1.match, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p15);
    fastaTitle = v105.toString();
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\>|[\f\n\r]/g, ""], JAM.policy.p15);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\s{2,}/g, " "], JAM.policy.p15);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/[\<\>]/gi, ""], JAM.policy.p15);
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  var v1158 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p18);
  var v1149 = v1158 != -1;
  var v1160 = !v1149;
  if (v1160) {
    var v1159 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p18);
    v1149 = v1159 != -1;
  }
  var v1136 = v1149;
  var v1151 = !v1136;
  if (v1151) {
    var v1150 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p18);
    v1136 = v1150 != -1;
  }
  var v1120 = v1136;
  var v1138 = !v1120;
  if (v1138) {
    var v1137 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p18);
    v1120 = v1137 != -1;
  }
  var v1102 = v1120;
  var v1122 = !v1102;
  if (v1122) {
    var v1121 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p18);
    v1102 = v1121 != -1;
  }
  var v1074 = v1102;
  var v1104 = !v1074;
  if (v1104) {
    var v1103 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p18);
    v1074 = v1103 != -1;
  }
  var v1029 = v1074;
  var v1076 = !v1029;
  if (v1076) {
    var v1075 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p18);
    v1029 = v1075 != -1;
  }
  var v963 = v1029;
  var v1031 = !v963;
  if (v1031) {
    var v1030 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p18);
    v963 = v1030 != -1;
  }
  var v862 = v963;
  var v965 = !v862;
  if (v965) {
    var v964 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p18);
    v862 = v964 != -1;
  }
  var v731 = v862;
  var v864 = !v731;
  if (v864) {
    var v863 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p18);
    v731 = v863 != -1;
  }
  var v499 = v731;
  var v733 = !v499;
  if (v733) {
    var v732 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p18);
    v499 = v732 != -1;
  }
  var v107 = v499;
  if (v107) {
    return false;
  }
  return true;
}
function openForm() {
  var v108 = outputWindow.document;
  JAM.call(v108.write, v108, ['<form action="">\n'], JAM.policy.p11);
  return true;
}
function openPre() {
  var v109 = outputWindow.document;
  JAM.call(v109.write, v109, ["<pre>"], JAM.policy.p11);
  var v110 = outputWindow.document;
  JAM.call(v110.write, v110, ['<div class="pre">'], JAM.policy.p11);
  return;
}
function openTextArea() {
  var v111 = outputWindow.document;
  JAM.call(v111.write, v111, ['<br /><textarea rows="6" cols="61">\n'], JAM.policy.p11);
  return true;
}
function openWindow(title$$6) {
  _openWindow(title$$6);
  return;
}
function _openWindow(title$$7) {
  var isColor = true;
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  outputWindow.focus();
  var v112 = outputWindow.document;
  var v865 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v734 = v865 + "<head>\n";
  var v500 = v734 + "<title>Sequence Manipulation Suite</title>\n";
  var v113 = v500 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v112.write, v112, [v113], JAM.policy.p17);
  if (isColor) {
    var v114 = outputWindow.document;
    var v1174 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1170 = v1174 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1166 = v1170 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1161 = v1166 + "div.info {font-weight: bold}\n";
    var v1152 = v1161 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1139 = v1152 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v1123 = v1139 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v1105 = v1123 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1077 = v1105 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v1032 = v1077 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v966 = v1032 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v866 = v966 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v735 = v866 + "td.many {color: #000000}\n";
    var v501 = v735 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v115 = v501 + "</style>\n";
    JAM.call(v114.write, v114, [v115], JAM.policy.p17);
  } else {
    var v116 = outputWindow.document;
    var v1178 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1175 = v1178 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1171 = v1175 + "div.title {display: none}\n";
    var v1167 = v1171 + "div.info {font-weight: bold}\n";
    var v1162 = v1167 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1153 = v1162 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1140 = v1153 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v1124 = v1140 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1106 = v1124 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1078 = v1106 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1033 = v1078 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v967 = v1033 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v867 = v967 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v736 = v867 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v502 = v736 + "img {display: none}\n";
    var v117 = v502 + "</style>\n";
    JAM.call(v116.write, v116, [v117], JAM.policy.p17);
  }
  var v118 = outputWindow.document;
  var v868 = "</head>\n" + '<body class="main">\n';
  var v737 = v868 + '<div class="title">';
  var v503 = v737 + title$$7;
  var v119 = v503 + " results</div>\n";
  JAM.call(v118.write, v118, [v119], JAM.policy.p17);
  outputWindow.status = "Please Wait.";
  return;
}
function openWindowAlign(title$$8) {
  _openWindowAlign(title$$8);
  return;
}
function _openWindowAlign(title$$9) {
  var isBackground = true;
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  outputWindow.focus();
  var v120 = outputWindow.document;
  var v869 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v738 = v869 + "<head>\n";
  var v504 = v738 + "<title>Sequence Manipulation Suite</title>\n";
  var v121 = v504 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v120.write, v120, [v121], JAM.policy.p17);
  if (isBackground) {
    var v122 = outputWindow.document;
    var v1176 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1172 = v1176 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1168 = v1172 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1163 = v1168 + "div.info {font-weight: bold}\n";
    var v1154 = v1163 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v1141 = v1154 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v1125 = v1141 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v1107 = v1125 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v1079 = v1107 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v1034 = v1079 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v968 = v1034 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v870 = v968 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v739 = v870 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v505 = v739 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v123 = v505 + "</style>\n";
    JAM.call(v122.write, v122, [v123], JAM.policy.p17);
  } else {
    var v124 = outputWindow.document;
    var v1180 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1179 = v1180 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1177 = v1179 + "div.title {display: none}\n";
    var v1173 = v1177 + "div.info {font-weight: bold}\n";
    var v1169 = v1173 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1164 = v1169 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v1155 = v1164 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v1142 = v1155 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v1126 = v1142 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v1108 = v1126 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v1080 = v1108 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v1035 = v1080 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v969 = v1035 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v871 = v969 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v740 = v871 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v506 = v740 + "img {display: none}\n";
    var v125 = v506 + "</style>\n";
    JAM.call(v124.write, v124, [v125], JAM.policy.p17);
  }
  var v126 = outputWindow.document;
  var v872 = "</head>\n" + '<body class="main">\n';
  var v741 = v872 + '<div class="title">';
  var v507 = v741 + title$$9;
  var v127 = v507 + " results</div>\n";
  JAM.call(v126.write, v126, [v127], JAM.policy.p17);
  outputWindow.status = "Please Wait.";
  return;
}
function removeFormatting(sequence$$5) {
  return JAM.call(sequence$$5.replace, sequence$$5, [/[\d\s]/g, ""], JAM.policy.p15);
}
function removeNonDna(sequence$$6) {
  return JAM.call(sequence$$6.replace, sequence$$6, [/[^gatucryswkmbdhvnxGATUCRYSWKMBDHVNX]/g, ""], JAM.policy.p15);
}
function removeNonDnaStrict(sequence$$7) {
  return JAM.call(sequence$$7.replace, sequence$$7, [/[^gatucGATUC]/g, ""], JAM.policy.p15);
}
function removeNonProtein(sequence$$8) {
  return JAM.call(sequence$$8.replace, sequence$$8, [/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, ""], JAM.policy.p15);
}
function removeNonProteinStrict(sequence$$9) {
  return JAM.call(sequence$$9.replace, sequence$$9, [/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, ""], JAM.policy.p15);
}
function removeNonProteinAllowDegen() {
  var sequence$$10 = newProtein;
  return JAM.call(sequence$$10.replace, sequence$$10, [/[^ABCDEFGHIKLMNPQRSTVWYXZabcdefghiklmnpqrstvwyxz\*]/g, ""], JAM.policy.p15);
}
function removeNonProteinAllowX(sequence$$11) {
  return JAM.call(sequence$$11.replace, sequence$$11, [/[^ACDEFGHIKLMNPQRSTVWYZXacdefghiklmnpqrstvwyzx\*]/g, ""], JAM.policy.p15);
}
function removeWhiteSpace(text$$9) {
  return JAM.call(text$$9.replace, text$$9, [/\s/g, ""], JAM.policy.p15);
}
function removeNonLetters(sequence$$12) {
  return JAM.call(sequence$$12.replace, sequence$$12, [/[^A-Z]/gi, ""], JAM.policy.p15);
}
function reverse(dnaSequence$$1) {
  var tempDnaArray = new Array;
  var v508 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p18);
  var v128 = v508 != -1;
  if (v128) {
    tempDnaArray = JAM.call(dnaSequence$$1.match, dnaSequence$$1, [/./g], JAM.policy.p18);
    tempDnaArray = tempDnaArray.reverse();
    dnaSequence$$1 = JAM.call(tempDnaArray.join, tempDnaArray, [""], JAM.policy.p11);
  }
  return dnaSequence$$1;
}
function rightNum(theNumber, sequenceToAppend, lengthOfColumn, tabIn) {
  var j$$5 = 0;
  var tempString = "";
  theNumber = theNumber.toString();
  j$$5 = theNumber.length;
  var v129 = j$$5 < lengthOfColumn;
  for (;v129;) {
    tempString = tempString + " ";
    j$$5++;
    v129 = j$$5 < lengthOfColumn;
  }
  var v130 = tempString + theNumber;
  theNumber = v130 + " ";
  var v131 = sequenceToAppend + theNumber;
  sequenceToAppend = v131 + tabIn;
  return sequenceToAppend;
}
function testScript() {
  function v1(str$$7, p1$$1, offset$$9, s$$3) {
    return p1$$1 + "X";
  }
  var testArray = new Array;
  var testString = "1234567890";
  JAM.call(testArray.push, testArray, [testString], JAM.policy.p17);
  var v509 = testArray[0];
  var v132 = v509 != testString;
  if (v132) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v510 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p17);
  var v133 = v510 == -1;
  if (v133) {
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
  var v134 = !caughtException;
  if (v134) {
    alert("Exception handling not supported. See browser compatibility page.");
  }
  testString = "123";
  testString = JAM.call(testString.replace, testString, [/(\d)/g, v1], JAM.policy.p15);
  var v135 = testString != "1X2X3X";
  if (v135) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false;
  }
  var testNum = 2489.8237;
  var v511 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p9);
  var v136 = v511 != 2489.824;
  if (v136) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v512 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p9);
  var v137 = v512 != 2489.8;
  if (v137) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v513 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p18);
  var v138 = v513 == -1;
  if (v138) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v970 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p18);
  var v873 = v970 == -1;
  var v972 = !v873;
  if (v972) {
    var v971 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p18);
    v873 = v971 == -1;
  }
  var v742 = v873;
  var v875 = !v742;
  if (v875) {
    var v874 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p18);
    v742 = v874 == -1;
  }
  var v514 = v742;
  var v744 = !v514;
  if (v744) {
    var v743 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p18);
    v514 = v743 == -1;
  }
  var v139 = v514;
  if (v139) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v515 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p18);
  var v140 = v515 == -1;
  if (v140) {
    alert("Please enter a number.");
    return false;
  }
  var v142 = theNumber$$2 > maxInput$$2;
  if (v142) {
    var v516 = "Please enter a number less than or equal to " + maxInput$$2;
    var v141 = v516 + ".";
    alert(v141);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v517 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p18);
  var v143 = v517 != -1;
  if (v143) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v518 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p18);
  var v144 = v518 != -1;
  if (v144) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v973 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p18);
  var v876 = v973 == -1;
  var v975 = !v876;
  if (v975) {
    var v974 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p18);
    v876 = v974 == -1;
  }
  var v745 = v876;
  var v878 = !v745;
  if (v878) {
    var v877 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p18);
    v745 = v877 == -1;
  }
  var v519 = v745;
  var v747 = !v519;
  if (v747) {
    var v746 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p18);
    v519 = v746 == -1;
  }
  var v145 = v519;
  if (v145) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v976 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p18);
  var v879 = v976 == -1;
  var v978 = !v879;
  if (v978) {
    var v977 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p18);
    v879 = v977 == -1;
  }
  var v748 = v879;
  var v881 = !v748;
  if (v881) {
    var v880 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p18);
    v748 = v880 == -1;
  }
  var v520 = v748;
  var v750 = !v520;
  if (v750) {
    var v749 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p18);
    v520 = v749 == -1;
  }
  var v146 = v520;
  if (v146) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v521 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p18);
  var v147 = v521 == -1;
  if (v147) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v979 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p18);
  var v882 = v979 == -1;
  var v981 = !v882;
  if (v981) {
    var v980 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p18);
    v882 = v980 == -1;
  }
  var v751 = v882;
  var v884 = !v751;
  if (v884) {
    var v883 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p18);
    v751 = v883 == -1;
  }
  var v522 = v751;
  var v753 = !v522;
  if (v753) {
    var v752 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p18);
    v522 = v752 == -1;
  }
  var v148 = v522;
  if (v148) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v523 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p18);
  var v149 = v523 == -1;
  if (v149) {
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
  var v156 = i$$5 < stopBase;
  for (;v156;) {
    var v150 = i$$5 + 1;
    lineOfText = rightNum(v150, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v524 = basePerLine / groupSize;
    var v153 = j$$6 <= v524;
    for (;v153;) {
      var v152 = k < groupSize;
      for (;v152;) {
        var v525 = k + i$$5;
        var v151 = JAM.call(text$$10.charAt, text$$10, [v525], JAM.policy.p17);
        lineOfText = lineOfText + v151;
        k = k + 1;
        v152 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v526 = basePerLine / groupSize;
      v153 = j$$6 <= v526;
    }
    var v154 = outputWindow.document;
    var v155 = lineOfText + "\n";
    JAM.call(v154.write, v154, [v155], JAM.policy.p17);
    lineOfText = "";
    v156 = i$$5 < stopBase;
  }
  return true;
}
function writeGroupNumDna(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition) {
  writeGroupNumDnaSetStart(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition);
  return true;
}
function writeGroupNumDnaSetStart(text$$12, tabIn$$3, groupSize$$2, basePerLine$$2, startBase$$2, stopBase$$2, strands$$1, numberPosition$$1) {
  function adjustNumbering(original, adjustment) {
    var adjusted = original + adjustment;
    var v527 = adjustment < 0;
    if (v527) {
      v527 = adjusted >= 0;
    }
    var v157 = v527;
    if (v157) {
      adjusted++;
    }
    return adjusted;
  }
  var numberingAdjustment = 0;
  var i$$6 = parseInt(startBase$$2);
  var k$$1 = 0;
  var lineOfText$$1 = "";
  var lineNum = "";
  var sepChar$$1 = " ";
  var aboveNum = "";
  groupSize$$2 = parseInt(groupSize$$2);
  basePerLine$$2 = parseInt(basePerLine$$2);
  numberingAdjustment = parseInt(numberingAdjustment);
  var v188 = i$$6 < stopBase$$2;
  for (;v188;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v528 = basePerLine$$2 / groupSize$$2;
    var v164 = j$$7 <= v528;
    for (;v164;) {
      var v160 = k$$1 < groupSize$$2;
      for (;v160;) {
        var v529 = i$$6 + k$$1;
        var v158 = v529 >= stopBase$$2;
        if (v158) {
          break;
        }
        var v530 = k$$1 + i$$6;
        var v159 = JAM.call(text$$12.charAt, text$$12, [v530], JAM.policy.p17);
        lineOfText$$1 = lineOfText$$1 + v159;
        k$$1 = k$$1 + 1;
        v160 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v162 = numberPosition$$1 == "above";
      if (v162) {
        var v531 = adjustNumbering(i$$6, numberingAdjustment);
        var v161 = rightNum(v531, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v161;
      }
      var v163 = i$$6 >= stopBase$$2;
      if (v163) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v532 = basePerLine$$2 / groupSize$$2;
      v164 = j$$7 <= v532;
    }
    var v187 = numberPosition$$1 == "left";
    if (v187) {
      var v165 = outputWindow.document;
      var v885 = adjustNumbering(lineNum, numberingAdjustment);
      var v754 = rightNum(v885, "", 8, tabIn$$3);
      var v533 = v754 + lineOfText$$1;
      var v166 = v533 + "\n";
      JAM.call(v165.write, v165, [v166], JAM.policy.p17);
      var v170 = strands$$1 == "two";
      if (v170) {
        var v167 = outputWindow.document;
        var v886 = adjustNumbering(lineNum, numberingAdjustment);
        var v755 = rightNum(v886, "", 8, tabIn$$3);
        var v756 = complement(lineOfText$$1);
        var v534 = v755 + v756;
        var v168 = v534 + "\n";
        JAM.call(v167.write, v167, [v168], JAM.policy.p17);
        var v169 = outputWindow.document;
        JAM.call(v169.write, v169, ["\n"], JAM.policy.p11);
      }
    } else {
      var v186 = numberPosition$$1 == "right";
      if (v186) {
        var v171 = outputWindow.document;
        var v757 = adjustNumbering(i$$6, numberingAdjustment);
        var v535 = lineOfText$$1 + v757;
        var v172 = v535 + "\n";
        JAM.call(v171.write, v171, [v172], JAM.policy.p17);
        var v176 = strands$$1 == "two";
        if (v176) {
          var v173 = outputWindow.document;
          var v758 = complement(lineOfText$$1);
          var v759 = adjustNumbering(i$$6, numberingAdjustment);
          var v536 = v758 + v759;
          var v174 = v536 + "\n";
          JAM.call(v173.write, v173, [v174], JAM.policy.p17);
          var v175 = outputWindow.document;
          JAM.call(v175.write, v175, ["\n"], JAM.policy.p11);
        }
      } else {
        var v185 = numberPosition$$1 == "above";
        if (v185) {
          var v177 = outputWindow.document;
          var v178 = aboveNum + "\n";
          JAM.call(v177.write, v177, [v178], JAM.policy.p17);
          var v179 = outputWindow.document;
          var v180 = lineOfText$$1 + "\n";
          JAM.call(v179.write, v179, [v180], JAM.policy.p17);
          var v184 = strands$$1 == "two";
          if (v184) {
            var v181 = outputWindow.document;
            var v537 = complement(lineOfText$$1);
            var v182 = v537 + "\n";
            JAM.call(v181.write, v181, [v182], JAM.policy.p17);
            var v183 = outputWindow.document;
            JAM.call(v183.write, v183, ["\n"], JAM.policy.p11);
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v188 = i$$6 < stopBase$$2;
  }
  return;
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
  var v207 = i$$7 < stopBase$$3;
  for (;v207;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v538 = basePerLine$$3 / groupSize$$3;
    var v195 = j$$8 <= v538;
    for (;v195;) {
      var v191 = k$$2 < groupSize$$3;
      for (;v191;) {
        var v539 = i$$7 + k$$2;
        var v189 = v539 >= stopBase$$3;
        if (v189) {
          break;
        }
        var v540 = k$$2 + i$$7;
        var v190 = JAM.call(text$$13.charAt, text$$13, [v540], JAM.policy.p17);
        lineOfText$$2 = lineOfText$$2 + v190;
        k$$2 = k$$2 + 1;
        v191 = k$$2 < groupSize$$3;
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v193 = numberPosition$$2 == "above";
      if (v193) {
        var v192 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = aboveNum$$1 + v192;
      }
      var v194 = i$$7 >= stopBase$$3;
      if (v194) {
        break;
      }
      k$$2 = 0;
      j$$8++;
      var v541 = basePerLine$$3 / groupSize$$3;
      v195 = j$$8 <= v541;
    }
    var v206 = numberPosition$$2 == "left";
    if (v206) {
      var v196 = outputWindow.document;
      var v760 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v542 = v760 + lineOfText$$2;
      var v197 = v542 + "\n";
      JAM.call(v196.write, v196, [v197], JAM.policy.p17);
    } else {
      var v205 = numberPosition$$2 == "right";
      if (v205) {
        var v198 = outputWindow.document;
        var v543 = lineOfText$$2 + i$$7;
        var v199 = v543 + "\n";
        JAM.call(v198.write, v198, [v199], JAM.policy.p17);
      } else {
        var v204 = numberPosition$$2 == "above";
        if (v204) {
          var v200 = outputWindow.document;
          var v201 = aboveNum$$1 + "\n";
          JAM.call(v200.write, v200, [v201], JAM.policy.p17);
          var v202 = outputWindow.document;
          var v203 = lineOfText$$2 + "\n";
          JAM.call(v202.write, v202, [v203], JAM.policy.p17);
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v207 = i$$7 < stopBase$$3;
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
  var v887 = sequence$$13.length;
  var v761 = v887 <= firstIndexToMutate;
  var v888 = !v761;
  if (v888) {
    v761 = lastIndexToMutate < 0;
  }
  var v544 = v761;
  var v762 = !v544;
  if (v762) {
    v544 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v208 = v544;
  if (v208) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v216 = i$$8 < numMut;
  for (;v216;) {
    maxNum = sequence$$13.length;
    var v545 = Math.random();
    var v209 = v545 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v209], JAM.policy.p18);
    var v546 = randNum < firstIndexToMutate;
    var v763 = !v546;
    if (v763) {
      v546 = randNum > lastIndexToMutate;
    }
    var v210 = v546;
    if (v210) {
      numMut++;
      i$$8++;
      v216 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p18);
    needNewChar = true;
    for (;needNewChar;) {
      var v547 = Math.random();
      var v548 = components$$1.length;
      var v211 = v547 * v548;
      componentsIndex = JAM.call(Math.round, Math, [v211], JAM.policy.p18);
      var v549 = components$$1.length;
      var v212 = componentsIndex == v549;
      if (v212) {
        componentsIndex = 0;
      }
      var v550 = components$$1[componentsIndex];
      var v213 = v550 != currentChar;
      if (v213) {
        needNewChar = false;
      }
    }
    var v551 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p13);
    var v552 = components$$1[componentsIndex];
    var v214 = v551 + v552;
    var v553 = randNum + 1;
    var v554 = sequence$$13.length;
    var v215 = JAM.call(sequence$$13.substring, sequence$$13, [v553, v554], JAM.policy.p27);
    sequence$$13 = v214 + v215;
    i$$8++;
    v216 = i$$8 < numMut;
  }
  var v217 = outputWindow.document;
  var v218 = addReturns(sequence$$13);
  JAM.call(v217.write, v217, [v218], JAM.policy.p17);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v223 = j$$9 < lengthOut$$1;
  for (;v223;) {
    var v555 = Math.random();
    var v556 = components$$2.length;
    var v219 = v555 * v556;
    tempNum$$1 = JAM.call(Math.floor, Math, [v219], JAM.policy.p18);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v557 = sequence$$14.length;
    var v222 = v557 == 60;
    if (v222) {
      var v220 = outputWindow.document;
      var v221 = sequence$$14 + "\n";
      JAM.call(v220.write, v220, [v221], JAM.policy.p17);
      sequence$$14 = "";
    }
    j$$9++;
    v223 = j$$9 < lengthOut$$1;
  }
  var v224 = outputWindow.document;
  var v225 = sequence$$14 + "\n";
  JAM.call(v224.write, v224, [v225], JAM.policy.p17);
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
  var v229 = dnaConformation == "circular";
  if (v229) {
    var v226 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    shiftValue = v226.length;
    var v889 = sequence$$15.length;
    var v764 = v889 - lookAhead;
    var v765 = sequence$$15.length;
    var v558 = JAM.call(sequence$$15.substring, sequence$$15, [v764, v765], JAM.policy.p27);
    var v227 = v558 + sequence$$15;
    var v228 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    sequence$$15 = v227 + v228;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v230 = outputWindow.document;
  JAM.call(v230.write, v230, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p11);
  var v231 = outputWindow.document;
  var v890 = '<tr><td class="title" width="200px">' + "Site:";
  var v766 = v890 + '</td><td class="title">';
  var v559 = v766 + "Positions:";
  var v232 = v559 + "</td></tr>\n";
  JAM.call(v231.write, v231, [v232], JAM.policy.p17);
  var i$$9 = 0;
  var v560 = arrayOfItems.length;
  var v248 = i$$9 < v560;
  for (;v248;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v561 = arrayOfItems[i$$9];
    var v233 = JAM.call(v561.match, v561, [/\/.+\//], JAM.policy.p18);
    matchExp = v233 + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    var v891 = arrayOfItems[i$$9];
    var v767 = JAM.call(v891.match, v891, [/\)\D*\d+/], JAM.policy.p18);
    var v562 = v767.toString();
    var v234 = JAM.call(v562.replace, v562, [/\)\D*/, ""], JAM.policy.p15);
    cutDistance = parseFloat(v234);
    var v240 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p17);
    for (;v240;) {
      var v235 = matchExp.lastIndex;
      matchPosition = v235 - cutDistance;
      var v563 = matchPosition >= lowerLimit;
      if (v563) {
        v563 = matchPosition < upperLimit;
      }
      var v238 = v563;
      if (v238) {
        timesFound++;
        var v236 = tempString$$1 + ", ";
        var v564 = matchPosition - shiftValue;
        var v237 = v564 + 1;
        tempString$$1 = v236 + v237;
      }
      var v565 = matchExp.lastIndex;
      var v768 = RegExp.lastMatch;
      var v566 = v768.length;
      var v239 = v565 - v566;
      matchExp.lastIndex = v239 + 1;
      v240 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p17);
    }
    var v567 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p18);
    var v241 = v567 != -1;
    if (v241) {
      tempString$$1 = JAM.call(tempString$$1.replace, tempString$$1, [/none,\s*/, ""], JAM.policy.p15);
    }
    var v245 = timesFound == 0;
    if (v245) {
      backGroundClass = "none";
    } else {
      var v244 = timesFound == 1;
      if (v244) {
        backGroundClass = "one";
      } else {
        var v243 = timesFound == 2;
        if (v243) {
          backGroundClass = "two";
        } else {
          var v242 = timesFound == 3;
          if (v242) {
            backGroundClass = "three";
          } else {
            backGroundClass = "many";
          }
        }
      }
    }
    var v246 = outputWindow.document;
    var v1109 = '<tr><td class="' + backGroundClass;
    var v1081 = v1109 + '">';
    var v1143 = arrayOfItems[i$$9];
    var v1127 = JAM.call(v1143.match, v1143, [/\([^\(]+\)/], JAM.policy.p18);
    var v1110 = v1127.toString();
    var v1082 = JAM.call(v1110.replace, v1110, [/\(|\)/g, ""], JAM.policy.p15);
    var v1036 = v1081 + v1082;
    var v982 = v1036 + '</td><td class="';
    var v892 = v982 + backGroundClass;
    var v769 = v892 + '">';
    var v568 = v769 + tempString$$1;
    var v247 = v568 + "</td></tr>\n";
    JAM.call(v246.write, v246, [v247], JAM.policy.p17);
    timesFound = 0;
    i$$9++;
    var v569 = arrayOfItems.length;
    v248 = i$$9 < v569;
  }
  var v249 = outputWindow.document;
  JAM.call(v249.write, v249, ["</tbody></table>\n"], JAM.policy.p11);
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v250 = outputWindow.document;
  JAM.call(v250.write, v250, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p11);
  var v251 = outputWindow.document;
  var v1037 = '<tr><td class="title">' + "Pattern:";
  var v983 = v1037 + '</td><td class="title">';
  var v893 = v983 + "Times found:";
  var v770 = v893 + '</td><td class="title">';
  var v570 = v770 + "Percentage:";
  var v252 = v570 + "</td></tr>\n";
  JAM.call(v251.write, v251, [v252], JAM.policy.p17);
  var i$$10 = 0;
  var v571 = arrayOfItems$$1.length;
  var v261 = i$$10 < v571;
  for (;v261;) {
    var tempNumber = 0;
    var v572 = arrayOfItems$$1[i$$10];
    var v253 = JAM.call(v572.match, v572, [/\/[^\/]+\//], JAM.policy.p18);
    var matchExp$$1 = v253 + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    var v573 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p17);
    var v255 = v573 != -1;
    if (v255) {
      var v254 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p17);
      tempNumber = v254.length;
    }
    var percentage = 0;
    var v771 = originalLength + 1;
    var v984 = arrayOfItems$$1[i$$10];
    var v894 = JAM.call(v984.match, v984, [/\d+/], JAM.policy.p18);
    var v772 = parseFloat(v894);
    var v574 = v771 - v772;
    var v258 = v574 > 0;
    if (v258) {
      var v256 = 100 * tempNumber;
      var v575 = originalLength + 1;
      var v895 = arrayOfItems$$1[i$$10];
      var v773 = JAM.call(v895.match, v895, [/\d+/], JAM.policy.p18);
      var v576 = parseFloat(v773);
      var v257 = v575 - v576;
      percentage = v256 / v257;
    }
    var v259 = outputWindow.document;
    var v1144 = arrayOfItems$$1[i$$10];
    var v1128 = JAM.call(v1144.match, v1144, [/\([^\(]+\)\b/], JAM.policy.p18);
    var v1111 = v1128.toString();
    var v1083 = JAM.call(v1111.replace, v1111, [/\(|\)/g, ""], JAM.policy.p15);
    var v1038 = "<tr><td>" + v1083;
    var v985 = v1038 + "</td><td>";
    var v896 = v985 + tempNumber;
    var v774 = v896 + "</td><td>";
    var v775 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p9);
    var v577 = v774 + v775;
    var v260 = v577 + "</td></tr>\n";
    JAM.call(v259.write, v259, [v260], JAM.policy.p17);
    i$$10++;
    var v578 = arrayOfItems$$1.length;
    v261 = i$$10 < v578;
  }
  var v262 = outputWindow.document;
  JAM.call(v262.write, v262, ["</tbody></table>\n"], JAM.policy.p11);
  return true;
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v579 = sequence$$17.length;
  var v269 = v579 > 0;
  for (;v269;) {
    maxNum$$1 = sequence$$17.length;
    var v580 = Math.random();
    var v263 = v580 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v263], JAM.policy.p18);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p18);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p13);
    var v264 = randNum$$1 + 1;
    var v265 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v264, v265], JAM.policy.p15);
    sequence$$17 = tempString1 + tempString2;
    var v581 = tempSeq.length;
    var v268 = v581 == 60;
    if (v268) {
      var v266 = outputWindow.document;
      var v267 = tempSeq + "\n";
      JAM.call(v266.write, v266, [v267], JAM.policy.p17);
      tempSeq = "";
    }
    var v582 = sequence$$17.length;
    v269 = v582 > 0;
  }
  var v270 = outputWindow.document;
  var v271 = tempSeq + "\n";
  JAM.call(v270.write, v270, [v271], JAM.policy.p17);
  return true;
}
function windowExtract() {
  var theDocument = document;
  var newDna = "";
  var maxInput$$3 = 5E5;
  var matchFound = false;
  var ranges = new Array;
  var v583 = testScript();
  var v272 = v583 == false;
  if (v272) {
    return;
  }
  var v1156 = theDocument.forms;
  var v1145 = v1156[0];
  var v1129 = v1145.elements;
  var v1112 = v1129[0];
  var v1084 = checkFormElement(v1112);
  var v1039 = v1084 == false;
  var v1086 = !v1039;
  if (v1086) {
    var v1165 = theDocument.forms;
    var v1157 = v1165[0];
    var v1146 = v1157.elements;
    var v1130 = v1146[0];
    var v1113 = v1130.value;
    var v1085 = checkSequenceLength(v1113, maxInput$$3);
    v1039 = v1085 == false;
  }
  var v986 = v1039;
  var v1041 = !v986;
  if (v1041) {
    var v1147 = theDocument.forms;
    var v1131 = v1147[0];
    var v1114 = v1131.elements;
    var v1087 = v1114[1];
    var v1040 = checkFormElement(v1087);
    v986 = v1040 == false;
  }
  var v897 = v986;
  var v988 = !v897;
  if (v988) {
    var v1132 = theDocument.forms;
    var v1115 = v1132[0];
    var v1088 = v1115.elements;
    var v1042 = v1088[3];
    var v987 = checkFormElement(v1042);
    v897 = v987 == false;
  }
  var v776 = v897;
  var v899 = !v776;
  if (v899) {
    var v1148 = theDocument.forms;
    var v1133 = v1148[0];
    var v1116 = v1133.elements;
    var v1089 = v1116[1];
    var v1043 = v1089.value;
    var v989 = JAM.call(v1043.replace, v1043, [/[^\d]/g, ""], JAM.policy.p15);
    var v898 = verifyMaxDigits(v989, maxInput$$3);
    v776 = v898 == false;
  }
  var v584 = v776;
  var v778 = !v584;
  if (v778) {
    var v1134 = theDocument.forms;
    var v1117 = v1134[0];
    var v1090 = v1117.elements;
    var v1044 = v1090[3];
    var v990 = v1044.value;
    var v900 = JAM.call(v990.replace, v990, [/[^\d]/g, ""], JAM.policy.p15);
    var v777 = verifyMaxDigits(v900, maxInput$$3);
    v584 = v777 == false;
  }
  var v273 = v584;
  if (v273) {
    return;
  }
  var v1045 = theDocument.forms;
  var v991 = v1045[0];
  var v901 = v991.elements;
  var v779 = v901[1];
  var v585 = v779.value;
  var v274 = JAM.call(v585.replace, v585, [/[^\d]/g, ""], JAM.policy.p15);
  var windowSize = parseInt(v274);
  var v1046 = theDocument.forms;
  var v992 = v1046[0];
  var v902 = v992.elements;
  var v780 = v902[3];
  var v586 = v780.value;
  var v275 = JAM.call(v586.replace, v586, [/[^\d]/g, ""], JAM.policy.p15);
  var position = parseInt(v275);
  var v903 = theDocument.forms;
  var v781 = v903[0];
  var v587 = v781.elements;
  var v276 = v587[2];
  var orientation = v276.value;
  var start$$4;
  var end$$1;
  var v283 = orientation == "ending";
  if (v283) {
    end$$1 = position;
    var v277 = end$$1 - windowSize;
    start$$4 = v277 + 1;
  } else {
    var v282 = orientation == "starting";
    if (v282) {
      start$$4 = position;
      var v278 = start$$4 + windowSize;
      end$$1 = v278 - 1;
    } else {
      var v281 = orientation == "centered";
      if (v281) {
        var v782 = windowSize / 2;
        var v588 = JAM.call(Math.round, Math, [v782], JAM.policy.p17);
        var v279 = position - v588;
        start$$4 = v279 + 1;
        var v280 = start$$4 + windowSize;
        end$$1 = v280 - 1;
      }
    }
  }
  var v284 = new Range(start$$4, end$$1);
  JAM.call(ranges.push, ranges, [v284], JAM.policy.p17);
  openWindow("Window Extractor Protein");
  openPre();
  var v993 = theDocument.forms;
  var v904 = v993[0];
  var v783 = v904.elements;
  var v589 = v783[0];
  var v285 = v589.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v285);
  var i$$11 = 0;
  var v590 = arrayOfFasta$$1.length;
  var v291 = i$$11 < v590;
  for (;v291;) {
    var v286 = arrayOfFasta$$1[i$$11];
    newProtein = getSequenceFromFasta(v286);
    var v287 = arrayOfFasta$$1[i$$11];
    title = getTitleFromFasta(v287);
    newProtein = removeNonProteinAllowDegen();
    var v288 = outputWindow.document;
    var v289 = getFastaTitleFromTitleAndSequence();
    JAM.call(v288.write, v288, [v289], JAM.policy.p17);
    var v1091 = theDocument.forms;
    var v1047 = v1091[0];
    var v994 = v1047.elements;
    var v905 = v994[7];
    var v784 = v905.options;
    var v1092 = theDocument.forms;
    var v1048 = v1092[0];
    var v995 = v1048.elements;
    var v906 = v995[7];
    var v785 = v906.selectedIndex;
    var v591 = v784[v785];
    var v290 = v591.value;
    writeSequenceRanges(ranges, v290);
    i$$11++;
    var v592 = arrayOfFasta$$1.length;
    v291 = i$$11 < v592;
  }
  closePre();
  closeWindow();
  return;
}
function rangeExtract(theDocument$$1) {
  var newDna$$1 = "";
  var maxInput$$4 = 5E5;
  var matchFound$$1 = false;
  var ranges$$1 = new Array;
  var v593 = testScript();
  var v292 = v593 == false;
  if (v292) {
    return false;
  }
  var v1118 = theDocument$$1.forms;
  var v1093 = v1118[0];
  var v1049 = v1093.elements;
  var v996 = v1049[0];
  var v907 = checkFormElement(v996);
  var v786 = v907 == false;
  var v909 = !v786;
  if (v909) {
    var v1135 = theDocument$$1.forms;
    var v1119 = v1135[0];
    var v1094 = v1119.elements;
    var v1050 = v1094[0];
    var v997 = v1050.value;
    var v908 = checkSequenceLength(v997, maxInput$$4);
    v786 = v908 == false;
  }
  var v594 = v786;
  var v788 = !v594;
  if (v788) {
    var v1095 = theDocument$$1.forms;
    var v1051 = v1095[0];
    var v998 = v1051.elements;
    var v910 = v998[1];
    var v787 = checkFormElement(v910);
    v594 = v787 == false;
  }
  var v293 = v594;
  if (v293) {
    return false;
  }
  var v999 = theDocument$$1.forms;
  var v911 = v999[0];
  var v789 = v911.elements;
  var v595 = v789[1];
  var v294 = v595.value;
  var arrayOfRanges = JAM.call(v294.split, v294, [/,/], JAM.policy.p18);
  var arrayOfStartAndEnd;
  var i$$12 = 0;
  var v596 = arrayOfRanges.length;
  var v300 = i$$12 < v596;
  for (;v300;) {
    var v295 = arrayOfRanges[i$$12];
    arrayOfStartAndEnd = JAM.call(v295.split, v295, [/\.\./], JAM.policy.p18);
    var v597 = arrayOfStartAndEnd.length;
    var v299 = v597 == 1;
    if (v299) {
      matchFound$$1 = true;
      var v598 = arrayOfStartAndEnd[0];
      var v599 = arrayOfStartAndEnd[0];
      var v296 = new Range(v598, v599);
      JAM.call(ranges$$1.push, ranges$$1, [v296], JAM.policy.p17);
    } else {
      var v600 = arrayOfStartAndEnd.length;
      var v298 = v600 == 2;
      if (v298) {
        matchFound$$1 = true;
        var v601 = arrayOfStartAndEnd[0];
        var v602 = arrayOfStartAndEnd[1];
        var v297 = new Range(v601, v602);
        JAM.call(ranges$$1.push, ranges$$1, [v297], JAM.policy.p17);
      }
    }
    i$$12++;
    var v603 = arrayOfRanges.length;
    v300 = i$$12 < v603;
  }
  var v301 = matchFound$$1 == false;
  if (v301) {
    alert("No ranges were entered.");
    return false;
  }
  openWindow("Range Extractor Protein");
  openPre();
  var v1000 = theDocument$$1.forms;
  var v912 = v1000[0];
  var v790 = v912.elements;
  var v604 = v790[0];
  var v302 = v604.value;
  var arrayOfFasta$$2 = getArrayOfFasta(v302);
  i$$12 = 0;
  var v605 = arrayOfFasta$$2.length;
  var v308 = i$$12 < v605;
  for (;v308;) {
    var v303 = arrayOfFasta$$2[i$$12];
    newProtein = getSequenceFromFasta(v303);
    var v304 = arrayOfFasta$$2[i$$12];
    title = getTitleFromFasta(v304);
    newProtein = removeNonProteinAllowDegen();
    var v305 = outputWindow.document;
    var v306 = getFastaTitleFromTitleAndSequence();
    JAM.call(v305.write, v305, [v306], JAM.policy.p17);
    var v1096 = theDocument$$1.forms;
    var v1052 = v1096[0];
    var v1001 = v1052.elements;
    var v913 = v1001[5];
    var v791 = v913.options;
    var v1097 = theDocument$$1.forms;
    var v1053 = v1097[0];
    var v1002 = v1053.elements;
    var v914 = v1002[5];
    var v792 = v914.selectedIndex;
    var v606 = v791[v792];
    var v307 = v606.value;
    writeSequenceRanges(ranges$$1, v307);
    i$$12++;
    var v607 = arrayOfFasta$$2.length;
    v308 = i$$12 < v607;
  }
  closePre();
  closeWindow();
  return true;
}
function writeSequenceRanges(ranges$$2, segmentType) {
  var sequence$$18 = newProtein;
  var rangeGroup = new RangeGroup(segmentType);
  var v608 = sequence$$18.length;
  var v309 = v608 / 2;
  var center_base = JAM.call(Math.round, Math, [v309], JAM.policy.p17);
  var i$$13 = 0;
  var v609 = ranges$$2.length;
  var v323 = i$$13 < v609;
  for (;v323;) {
    var v310 = ranges$$2[i$$13];
    var v915 = ranges$$2[i$$13];
    var v793 = v915.start;
    var v610 = v793.toString();
    var v1187 = JAM.call(v610.replace, v610, [/start|begin/gi, 1], JAM.policy.p15);
    v310.start = v1187;
    var v311 = ranges$$2[i$$13];
    var v916 = ranges$$2[i$$13];
    var v794 = v916.start;
    var v611 = v794.toString();
    var v612 = sequence$$18.length;
    var v1188 = JAM.call(v611.replace, v611, [/stop|end/gi, v612], JAM.policy.p15);
    v311.start = v1188;
    var v312 = ranges$$2[i$$13];
    var v917 = ranges$$2[i$$13];
    var v795 = v917.start;
    var v613 = v795.toString();
    var v614 = sequence$$18.length;
    var v1189 = JAM.call(v613.replace, v613, [/length/gi, v614], JAM.policy.p15);
    v312.start = v1189;
    var v313 = ranges$$2[i$$13];
    var v918 = ranges$$2[i$$13];
    var v796 = v918.start;
    var v615 = v796.toString();
    var v1190 = JAM.call(v615.replace, v615, [/middle|center|centre/gi, center_base], JAM.policy.p15);
    v313.start = v1190;
    var v314 = ranges$$2[i$$13];
    var v919 = ranges$$2[i$$13];
    var v797 = v919.stop;
    var v616 = v797.toString();
    var v1191 = JAM.call(v616.replace, v616, [/start|begin/gi, 1], JAM.policy.p15);
    v314.stop = v1191;
    var v315 = ranges$$2[i$$13];
    var v920 = ranges$$2[i$$13];
    var v798 = v920.stop;
    var v617 = v798.toString();
    var v618 = sequence$$18.length;
    var v1192 = JAM.call(v617.replace, v617, [/stop|end/gi, v618], JAM.policy.p15);
    v315.stop = v1192;
    var v316 = ranges$$2[i$$13];
    var v921 = ranges$$2[i$$13];
    var v799 = v921.stop;
    var v619 = v799.toString();
    var v620 = sequence$$18.length;
    var v1193 = JAM.call(v619.replace, v619, [/length/gi, v620], JAM.policy.p15);
    v316.stop = v1193;
    var v317 = ranges$$2[i$$13];
    var v922 = ranges$$2[i$$13];
    var v800 = v922.stop;
    var v621 = v800.toString();
    var v1194 = JAM.call(v621.replace, v621, [/middle|center|centre/gi, center_base], JAM.policy.p15);
    v317.stop = v1194;
    try {
      var v318 = ranges$$2[i$$13];
      var v1003 = ranges$$2[i$$13];
      var v923 = v1003.start;
      var v801 = v923.toString();
      if (JAM.isEval(eval)) {
        var v622 = eval("introspect(JAM.policy.pFull) { " + v801 + " }")
      } else {
        var v622 = JAM.call(eval, null, [v801])
      }
      var v1195 = parseInt(v622);
      v318.start = v1195;
    } catch (e$$5) {
      var v802 = ranges$$2[i$$13];
      var v623 = v802.start;
      var v319 = "Could not evaluate the following expression: " + v623;
      alert(v319);
      return;
    }
    try {
      var v320 = ranges$$2[i$$13];
      var v1004 = ranges$$2[i$$13];
      var v924 = v1004.stop;
      var v803 = v924.toString();
      if (JAM.isEval(eval)) {
        var v624 = eval("introspect(JAM.policy.pFull) { " + v803 + " }")
      } else {
        var v624 = JAM.call(eval, null, [v803])
      }
      var v1196 = parseInt(v624);
      v320.stop = v1196;
    } catch (e$$6) {
      var v804 = ranges$$2[i$$13];
      var v625 = v804.stop;
      var v321 = "Could not evaluate the following expression: " + v625;
      alert(v321);
      return;
    }
    var v322 = ranges$$2[i$$13];
    JAM.call(rangeGroup.addRange, rangeGroup, [v322], JAM.policy.p17);
    i$$13++;
    var v626 = ranges$$2.length;
    v323 = i$$13 < v626;
  }
  JAM.call(rangeGroup.writeRanges, rangeGroup, [sequence$$18], JAM.policy.p17);
  return;
}
function getSequence(sequence$$19) {
  var problem = false;
  var warnings = new Array;
  var v627 = this.start;
  var v628 = this.stop;
  var v338 = v627 == v628;
  if (v338) {
    var v629 = this.start;
    var v325 = v629 < 1;
    if (v325) {
      problem = true;
      var v805 = this.start;
      var v630 = "position value of " + v805;
      var v324 = v630 + " is less than 1";
      JAM.call(warnings.push, warnings, [v324], JAM.policy.p17);
    }
    var v631 = this.start;
    var v632 = sequence$$19.length;
    var v327 = v631 > v632;
    if (v327) {
      problem = true;
      var v806 = this.start;
      var v633 = "position value of " + v806;
      var v326 = v633 + " is greater than the sequence length";
      JAM.call(warnings.push, warnings, [v326], JAM.policy.p17);
    }
  } else {
    var v634 = this.start;
    var v329 = v634 < 1;
    if (v329) {
      problem = true;
      var v807 = this.start;
      var v635 = "position value of " + v807;
      var v328 = v635 + " is less than 1";
      JAM.call(warnings.push, warnings, [v328], JAM.policy.p17);
    }
    var v636 = this.stop;
    var v331 = v636 < 1;
    if (v331) {
      problem = true;
      var v808 = this.stop;
      var v637 = "position value of " + v808;
      var v330 = v637 + " is less than 1";
      JAM.call(warnings.push, warnings, [v330], JAM.policy.p17);
    }
    var v638 = this.start;
    var v639 = sequence$$19.length;
    var v333 = v638 > v639;
    if (v333) {
      problem = true;
      var v809 = this.start;
      var v640 = "position value of " + v809;
      var v332 = v640 + " is greater than the sequence length";
      JAM.call(warnings.push, warnings, [v332], JAM.policy.p17);
    }
    var v641 = this.stop;
    var v642 = sequence$$19.length;
    var v335 = v641 > v642;
    if (v335) {
      problem = true;
      var v810 = this.stop;
      var v643 = "position value of " + v810;
      var v334 = v643 + " is greater than the sequence length";
      JAM.call(warnings.push, warnings, [v334], JAM.policy.p17);
    }
    var v644 = this.start;
    var v645 = this.stop;
    var v337 = v644 > v645;
    if (v337) {
      problem = true;
      var v925 = this.start;
      var v811 = "stop position is less than start position in range " + v925;
      var v646 = v811 + " to ";
      var v647 = this.stop;
      var v336 = v646 + v647;
      JAM.call(warnings.push, warnings, [v336], JAM.policy.p17);
    }
  }
  if (problem) {
    var v648 = JAM.call(warnings.join, warnings, [",\n"], JAM.policy.p11);
    var v339 = "An entry was skipped because of the following:\n" + v648;
    alert(v339);
    return false;
  } else {
    var v649 = this.start;
    var v650 = this.stop;
    var v343 = v649 == v650;
    if (v343) {
      var v651 = this.start;
      var v340 = v651 - 1;
      return JAM.call(sequence$$19.charAt, sequence$$19, [v340], JAM.policy.p17);
    } else {
      var v652 = this.start;
      var v341 = v652 - 1;
      var v342 = this.stop;
      return JAM.call(sequence$$19.substring, sequence$$19, [v341, v342], JAM.policy.p27);
    }
  }
  return;
}
function getTitle() {
  var v653 = this.start;
  var v654 = this.stop;
  var v347 = v653 == v654;
  if (v347) {
    var v344 = this.start;
    return "&gt;residue " + v344;
  } else {
    var v812 = this.start;
    var v655 = "&gt;residue " + v812;
    var v345 = v655 + " to ";
    var v346 = this.stop;
    return v345 + v346;
  }
  return;
}
function Range(start$$5, stop) {
  this.start = start$$5;
  this.stop = stop;
  return;
}
function addRange(range$$5) {
  var v348 = this.ranges;
  JAM.call(v348.push, v348, [range$$5], JAM.policy.p17);
  return;
}
function writeRanges(sequence$$20) {
  function v9(str$$15, p1$$9, offset$$17, s$$11) {
    var v656 = p1$$9.length;
    var v349 = offset$$17 + v656;
    return JAM.call(sequence$$20.substring, sequence$$20, [offset$$17, v349], JAM.policy.p27);
  }
  function v8(str$$14, p1$$8, p2$$3, offset$$16, s$$10) {
    var v657 = p1$$8.length;
    var v813 = p1$$8.length;
    var v814 = p2$$3.length;
    var v658 = v813 + v814;
    var v350 = JAM.call(sequence$$20.substring, sequence$$20, [v657, v658], JAM.policy.p27);
    return p1$$8 + v350;
  }
  function v7(str$$13, p1$$7, offset$$15, s$$9) {
    var v351 = p1$$7.length;
    return getRandomSequence(v351);
  }
  function v6(str$$12, p1$$6, p2$$2, offset$$14, s$$8) {
    var v659 = p2$$2.length;
    var v352 = getRandomSequence(v659);
    return p1$$6 + v352;
  }
  function v5(str$$11, p1$$5, offset$$13, s$$7) {
    return p1$$5.toLowerCase();
  }
  function v4(str$$10, p1$$4, p2$$1, offset$$12, s$$6) {
    var v353 = p2$$1.toLowerCase();
    return p1$$4 + v353;
  }
  function v3(str$$9, p1$$3, offset$$11, s$$5) {
    return p1$$3.toUpperCase();
  }
  function v2(str$$8, p1$$2, p2, offset$$10, s$$4) {
    var v354 = p2.toUpperCase();
    return p1$$2 + v354;
  }
  var sequenceArray$$1 = new Array;
  var v660 = this.type;
  var v360 = v660 == "new_sequence";
  if (v360) {
    var i$$14 = 0;
    var v815 = this.ranges;
    var v661 = v815.length;
    var v357 = i$$14 < v661;
    for (;v357;) {
      var v926 = this.ranges;
      var v816 = v926[i$$14];
      var v662 = JAM.call(v816.getSequence, v816, [sequence$$20], JAM.policy.p17);
      var v356 = v662 != "";
      if (v356) {
        var v817 = this.ranges;
        var v663 = v817[i$$14];
        var v355 = JAM.call(v663.getSequence, v663, [sequence$$20], JAM.policy.p17);
        JAM.call(sequenceArray$$1.push, sequenceArray$$1, [v355], JAM.policy.p17);
      }
      i$$14++;
      var v818 = this.ranges;
      var v664 = v818.length;
      v357 = i$$14 < v664;
    }
    var v358 = outputWindow.document;
    var v819 = JAM.call(sequenceArray$$1.join, sequenceArray$$1, [""], JAM.policy.p11);
    var v665 = addReturns(v819);
    var v359 = v665 + "\n\n";
    JAM.call(v358.write, v358, [v359], JAM.policy.p17);
    return true;
  }
  var v666 = this.type;
  var v367 = v666 == "separate";
  if (v367) {
    i$$14 = 0;
    var v820 = this.ranges;
    var v667 = v820.length;
    var v366 = i$$14 < v667;
    for (;v366;) {
      var v927 = this.ranges;
      var v821 = v927[i$$14];
      var v668 = JAM.call(v821.getSequence, v821, [sequence$$20], JAM.policy.p17);
      var v365 = v668 != "";
      if (v365) {
        var v361 = outputWindow.document;
        var v928 = this.ranges;
        var v822 = v928[i$$14];
        var v669 = v822.getTitle();
        var v362 = v669 + "\n";
        JAM.call(v361.write, v361, [v362], JAM.policy.p17);
        var v363 = outputWindow.document;
        var v1005 = this.ranges;
        var v929 = v1005[i$$14];
        var v823 = JAM.call(v929.getSequence, v929, [sequence$$20], JAM.policy.p17);
        var v670 = addReturns(v823);
        var v364 = v670 + "\n\n";
        JAM.call(v363.write, v363, [v364], JAM.policy.p17);
      }
      i$$14++;
      var v824 = this.ranges;
      var v671 = v824.length;
      v366 = i$$14 < v671;
    }
    return true;
  }
  var v672 = this.type;
  var v375 = v672 == "uppercased";
  if (v375) {
    var re$$3;
    sequence$$20 = sequence$$20.toLowerCase();
    i$$14 = 0;
    var v825 = this.ranges;
    var v673 = v825.length;
    var v372 = i$$14 < v673;
    for (;v372;) {
      var v930 = this.ranges;
      var v826 = v930[i$$14];
      var v674 = JAM.call(v826.getSequence, v826, [sequence$$20], JAM.policy.p17);
      var v371 = v674 != "";
      if (v371) {
        var v931 = this.ranges;
        var v827 = v931[i$$14];
        var v675 = v827.start;
        var v370 = v675 > 1;
        if (v370) {
          var v1098 = this.ranges;
          var v1054 = v1098[i$$14];
          var v1006 = v1054.start;
          var v932 = v1006 - 1;
          var v828 = "(.{" + v932;
          var v676 = v828 + "})\\B(.{";
          var v1055 = this.ranges;
          var v1007 = v1055[i$$14];
          var v933 = v1007.stop;
          var v1056 = this.ranges;
          var v1008 = v1056[i$$14];
          var v934 = v1008.start;
          var v829 = v933 - v934;
          var v677 = v829 + 1;
          var v368 = v676 + v677;
          re$$3 = v368 + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [re$$3, v2], JAM.policy.p27);
        } else {
          var v1057 = this.ranges;
          var v1009 = v1057[i$$14];
          var v935 = v1009.stop;
          var v1058 = this.ranges;
          var v1010 = v1058[i$$14];
          var v936 = v1010.start;
          var v830 = v935 - v936;
          var v678 = v830 + 1;
          var v369 = "(.{" + v678;
          re$$3 = v369 + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [re$$3, v3], JAM.policy.p27);
        }
      }
      i$$14++;
      var v831 = this.ranges;
      var v679 = v831.length;
      v372 = i$$14 < v679;
    }
    var v373 = outputWindow.document;
    var v680 = addReturns(sequence$$20);
    var v374 = v680 + "\n\n";
    JAM.call(v373.write, v373, [v374], JAM.policy.p17);
    return true;
  }
  var v681 = this.type;
  var v383 = v681 == "lowercased";
  if (v383) {
    sequence$$20 = sequence$$20.toUpperCase();
    i$$14 = 0;
    var v832 = this.ranges;
    var v682 = v832.length;
    var v380 = i$$14 < v682;
    for (;v380;) {
      var v937 = this.ranges;
      var v833 = v937[i$$14];
      var v683 = JAM.call(v833.getSequence, v833, [sequence$$20], JAM.policy.p17);
      var v379 = v683 != "";
      if (v379) {
        var v938 = this.ranges;
        var v834 = v938[i$$14];
        var v684 = v834.start;
        var v378 = v684 > 1;
        if (v378) {
          var v1099 = this.ranges;
          var v1059 = v1099[i$$14];
          var v1011 = v1059.start;
          var v939 = v1011 - 1;
          var v835 = "(.{" + v939;
          var v685 = v835 + "})\\B(.{";
          var v1060 = this.ranges;
          var v1012 = v1060[i$$14];
          var v940 = v1012.stop;
          var v1061 = this.ranges;
          var v1013 = v1061[i$$14];
          var v941 = v1013.start;
          var v836 = v940 - v941;
          var v686 = v836 + 1;
          var v376 = v685 + v686;
          re$$3 = v376 + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [re$$3, v4], JAM.policy.p27);
        } else {
          var v1062 = this.ranges;
          var v1014 = v1062[i$$14];
          var v942 = v1014.stop;
          var v1063 = this.ranges;
          var v1015 = v1063[i$$14];
          var v943 = v1015.start;
          var v837 = v942 - v943;
          var v687 = v837 + 1;
          var v377 = "(.{" + v687;
          re$$3 = v377 + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [re$$3, v5], JAM.policy.p27);
        }
      }
      i$$14++;
      var v838 = this.ranges;
      var v688 = v838.length;
      v380 = i$$14 < v688;
    }
    var v381 = outputWindow.document;
    var v689 = addReturns(sequence$$20);
    var v382 = v689 + "\n\n";
    JAM.call(v381.write, v381, [v382], JAM.policy.p17);
    return true;
  }
  var v690 = this.type;
  var v391 = v690 == "randomized";
  if (v391) {
    i$$14 = 0;
    var v839 = this.ranges;
    var v691 = v839.length;
    var v388 = i$$14 < v691;
    for (;v388;) {
      var v944 = this.ranges;
      var v840 = v944[i$$14];
      var v692 = JAM.call(v840.getSequence, v840, [sequence$$20], JAM.policy.p17);
      var v387 = v692 != "";
      if (v387) {
        var v945 = this.ranges;
        var v841 = v945[i$$14];
        var v693 = v841.start;
        var v386 = v693 > 1;
        if (v386) {
          var v1100 = this.ranges;
          var v1064 = v1100[i$$14];
          var v1016 = v1064.start;
          var v946 = v1016 - 1;
          var v842 = "(.{" + v946;
          var v694 = v842 + "})\\B(.{";
          var v1065 = this.ranges;
          var v1017 = v1065[i$$14];
          var v947 = v1017.stop;
          var v1066 = this.ranges;
          var v1018 = v1066[i$$14];
          var v948 = v1018.start;
          var v843 = v947 - v948;
          var v695 = v843 + 1;
          var v384 = v694 + v695;
          re$$3 = v384 + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [re$$3, v6], JAM.policy.p27);
        } else {
          var v1067 = this.ranges;
          var v1019 = v1067[i$$14];
          var v949 = v1019.stop;
          var v1068 = this.ranges;
          var v1020 = v1068[i$$14];
          var v950 = v1020.start;
          var v844 = v949 - v950;
          var v696 = v844 + 1;
          var v385 = "(.{" + v696;
          re$$3 = v385 + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [re$$3, v7], JAM.policy.p27);
        }
      }
      i$$14++;
      var v845 = this.ranges;
      var v697 = v845.length;
      v388 = i$$14 < v697;
    }
    var v389 = outputWindow.document;
    var v698 = addReturns(sequence$$20);
    var v390 = v698 + "\n\n";
    JAM.call(v389.write, v389, [v390], JAM.policy.p17);
    return true;
  }
  var v699 = this.type;
  var v400 = v699 == "preserved";
  if (v400) {
    var v392 = sequence$$20.length;
    var randomSequence = getRandomSequence(v392);
    i$$14 = 0;
    var v846 = this.ranges;
    var v700 = v846.length;
    var v397 = i$$14 < v700;
    for (;v397;) {
      var v951 = this.ranges;
      var v847 = v951[i$$14];
      var v701 = JAM.call(v847.getSequence, v847, [sequence$$20], JAM.policy.p17);
      var v396 = v701 != "";
      if (v396) {
        var v952 = this.ranges;
        var v848 = v952[i$$14];
        var v702 = v848.start;
        var v395 = v702 > 1;
        if (v395) {
          var v1101 = this.ranges;
          var v1069 = v1101[i$$14];
          var v1021 = v1069.start;
          var v953 = v1021 - 1;
          var v849 = "(.{" + v953;
          var v703 = v849 + "})\\B(.{";
          var v1070 = this.ranges;
          var v1022 = v1070[i$$14];
          var v954 = v1022.stop;
          var v1071 = this.ranges;
          var v1023 = v1071[i$$14];
          var v955 = v1023.start;
          var v850 = v954 - v955;
          var v704 = v850 + 1;
          var v393 = v703 + v704;
          re$$3 = v393 + "})";
          re$$3 = new RegExp(re$$3);
          randomSequence = JAM.call(randomSequence.replace, randomSequence, [re$$3, v8], JAM.policy.p27);
        } else {
          var v1072 = this.ranges;
          var v1024 = v1072[i$$14];
          var v956 = v1024.stop;
          var v1073 = this.ranges;
          var v1025 = v1073[i$$14];
          var v957 = v1025.start;
          var v851 = v956 - v957;
          var v705 = v851 + 1;
          var v394 = "(.{" + v705;
          re$$3 = v394 + "})";
          re$$3 = new RegExp(re$$3);
          randomSequence = JAM.call(randomSequence.replace, randomSequence, [re$$3, v9], JAM.policy.p27);
        }
      }
      i$$14++;
      var v852 = this.ranges;
      var v706 = v852.length;
      v397 = i$$14 < v706;
    }
    var v398 = outputWindow.document;
    var v707 = addReturns(randomSequence);
    var v399 = v707 + "\n\n";
    JAM.call(v398.write, v398, [v399], JAM.policy.p17);
    return true;
  }
  return;
}
function RangeGroup(type$$25) {
  this.type = type$$25;
  var v1197 = new Array;
  this.ranges = v1197;
  return;
}
new Range(0, 0);
var v401 = Range.prototype;
v401.getSequence = getSequence;
var v402 = Range.prototype;
v402.getTitle = getTitle;
new RangeGroup("", "");
var v403 = RangeGroup.prototype;
v403.addRange = addRange;
var v404 = RangeGroup.prototype;
v404.writeRanges = writeRanges;
JAM.set(document, "onload", v10);
var v405 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p11);
JAM.set(v405, "onclick", v11);
var v406 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p11);
JAM.set(v406, "onclick", v12)
