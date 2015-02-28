
JAM.startProfile('load');
function v12() {
  var v858 = document.forms;
  var v714 = v858[0];
  var v408 = v714.elements;
  var v13 = v408[0];
  v13.value = " ";
  var v859 = document.forms;
  var v715 = v859[0];
  var v409 = v715.elements;
  var v14 = v409[1];
  v14.value = " ";
  return;
}
function v11() {
  try {
    rangeExtract();
  } catch (e$$7) {
    var v15 = "The following error was encountered: " + e$$7;
    alert(v15);
  }
  return;
}
function v10() {
  var v410 = document.main_form;
  var v16 = v410.main_submit;
  v16.focus();
  return;
}
function addReturns(sequence) {
  function v0(str$$6, p1, offset$$8, s$$2) {
    return p1 + "\n";
  }
  sequence = JAM.call(sequence.replace, sequence, [/(.{60})/g, v0], JAM.policy.p16);
  return sequence;
}
function checkAlign(arrayOfTitles, arrayOfSequences) {
  var v17 = arrayOfSequences[0];
  var lengthOfAlign = v17.length;
  var v411 = arrayOfSequences.length;
  var v18 = v411 < 2;
  if (v18) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v412 = arrayOfTitles.length;
  var v20 = i$$1 < v412;
  for (;v20;) {
    var v962 = arrayOfTitles[i$$1];
    var v860 = JAM.call(v962.search, v962, [/\S/], JAM.policy.p15);
    var v716 = v860 == -1;
    var v862 = !v716;
    if (v862) {
      var v963 = arrayOfSequences[i$$1];
      var v861 = JAM.call(v963.search, v963, [/\S/], JAM.policy.p15);
      v716 = v861 == -1;
    }
    var v413 = v716;
    var v718 = !v413;
    if (v718) {
      var v863 = arrayOfSequences[i$$1];
      var v717 = v863.length;
      v413 = v717 != lengthOfAlign;
    }
    var v19 = v413;
    if (v19) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v414 = arrayOfTitles.length;
    v20 = i$$1 < v414;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v1024 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p15);
  var v964 = v1024 == -1;
  var v1026 = !v964;
  if (v1026) {
    var v1025 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p15);
    v964 = v1025 == -1;
  }
  var v864 = v964;
  var v966 = !v864;
  if (v966) {
    var v965 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p15);
    v864 = v965 == -1;
  }
  var v719 = v864;
  var v866 = !v719;
  if (v866) {
    var v865 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p15);
    v719 = v865 == -1;
  }
  var v415 = v719;
  var v721 = !v415;
  if (v721) {
    var v720 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p15);
    v415 = v720 == -1;
  }
  var v21 = v415;
  if (v21) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v722 = formElement.value;
  var v416 = JAM.call(v722.search, v722, [/\S/], JAM.policy.p15);
  var v22 = v416 == -1;
  if (v22) {
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
  var v417 = arrayOfPatterns.length;
  var v25 = z$$2 < v417;
  for (;v25;) {
    var v723 = arrayOfPatterns[z$$2];
    var v418 = JAM.call(v723.search, v723, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p15);
    var v23 = v418 == -1;
    if (v23) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v724 = arrayOfPatterns[z$$2];
    var v419 = moreExpressionCheck(v724);
    var v24 = v419 == false;
    if (v24) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v420 = arrayOfPatterns.length;
    v25 = z$$2 < v420;
  }
  var v26 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v26);
  var v27 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v27);
  var j = 0;
  var v421 = arrayOfPatterns.length;
  var v31 = j < v421;
  for (;v31;) {
    var v725 = arrayOfPatterns[j];
    var v422 = JAM.call(v725.match, v725, [/\/.+\//], JAM.policy.p15);
    var v28 = v422 + "gi";
    if (JAM.isEval(eval)) {
      var v1147 = eval("introspect(JAM.policy.pFull) { " + v28 + " }")
    } else {
      var v1147 = JAM.call(eval, null, [v28])
    }
    geneticCodeMatchExp[j] = v1147;
    var v423 = arrayOfPatterns[j];
    var v29 = JAM.call(v423.match, v423, [/=[a-zA-Z\*]/], JAM.policy.p15);
    var v1148 = v29.toString();
    geneticCodeMatchResult[j] = v1148;
    var v30 = geneticCodeMatchResult[j];
    var v1149 = JAM.call(v30.replace, v30, [/=/g, ""], JAM.policy.p16);
    geneticCodeMatchResult[j] = v1149;
    j++;
    var v424 = arrayOfPatterns.length;
    v31 = j < v424;
  }
  var i$$2 = 0;
  var v726 = testSequence.length;
  var v425 = v726 - 3;
  var v38 = i$$2 <= v425;
  for (;v38;) {
    var v32 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v32], JAM.policy.p16);
    j = 0;
    var v426 = geneticCodeMatchExp.length;
    var v36 = j < v426;
    for (;v36;) {
      var v727 = geneticCodeMatchExp[j];
      var v427 = JAM.call(codon.search, codon, [v727], JAM.policy.p17);
      var v35 = v427 != -1;
      if (v35) {
        var v34 = oneMatch == true;
        if (v34) {
          var v428 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v33 = v428 + ".";
          alert(v33);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v429 = geneticCodeMatchExp.length;
      v36 = j < v429;
    }
    var v37 = oneMatch == false;
    if (v37) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v728 = testSequence.length;
    var v430 = v728 - 3;
    v38 = i$$2 <= v430;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v431 = arrayOfPatterns$$1.length;
  var v40 = z$$3 < v431;
  for (;v40;) {
    var v729 = arrayOfPatterns$$1[z$$3];
    var v432 = JAM.call(v729.search, v729, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p15);
    var v39 = v432 != -1;
    if (v39) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v433 = arrayOfPatterns$$1.length;
    v40 = z$$3 < v433;
  }
  var i$$3 = 0;
  var v434 = arrayOfPatterns$$1.length;
  var v44 = i$$3 < v434;
  for (;v44;) {
    var v730 = arrayOfPatterns$$1[i$$3];
    var v435 = "[" + v730;
    var v41 = v435 + "]";
    var re = new RegExp(v41, "gi");
    var j$$1 = i$$3 + 1;
    var v436 = arrayOfPatterns$$1.length;
    var v43 = j$$1 < v436;
    for (;v43;) {
      var v731 = arrayOfPatterns$$1[j$$1];
      var v437 = JAM.call(v731.search, v731, [re], JAM.policy.p17);
      var v42 = v437 != -1;
      if (v42) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v438 = arrayOfPatterns$$1.length;
      v43 = j$$1 < v438;
    }
    i$$3++;
    var v439 = arrayOfPatterns$$1.length;
    v44 = i$$3 < v439;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v440 = arrayOfPatterns$$2.length;
  var v47 = z$$4 < v440;
  for (;v47;) {
    var v732 = arrayOfPatterns$$2[z$$4];
    var v441 = JAM.call(v732.search, v732, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p15);
    var v45 = v441 == -1;
    if (v45) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v733 = arrayOfPatterns$$2[z$$4];
    var v442 = moreExpressionCheck(v733);
    var v46 = v442 == false;
    if (v46) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v443 = arrayOfPatterns$$2.length;
    v47 = z$$4 < v443;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v867 = getSequenceFromFasta(text$$7);
  var v734 = JAM.call(v867.replace, v867, [/[^A-Za-z]/g, ""], JAM.policy.p16);
  var v444 = v734.length;
  var v49 = v444 > maxInput;
  if (v49) {
    var v445 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v48 = v445 + " characters.";
    alert(v48);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v446 = text$$8.length;
  var v51 = v446 > maxInput$$1;
  if (v51) {
    var v447 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v50 = v447 + " characters.";
    alert(v50);
    return false;
  } else {
    return true;
  }
  return;
}
function complement(dnaSequence) {
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/g/g, "1"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/c/g, "2"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "c"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "g"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/G/g, "1"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/C/g, "2"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "C"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "G"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/a/g, "1"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/t/g, "2"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "t"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "a"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/A/g, "1"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/T/g, "2"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "T"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "A"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/u/g, "a"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/U/g, "A"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/r/g, "1"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/y/g, "2"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "y"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "r"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/R/g, "1"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/Y/g, "2"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "Y"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "R"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/k/g, "1"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/m/g, "2"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "m"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "k"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/K/g, "1"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/M/g, "2"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "M"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "K"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/b/g, "1"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/v/g, "2"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "v"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "b"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/B/g, "1"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/V/g, "2"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "V"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "B"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/d/g, "1"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/h/g, "2"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "h"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "d"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/D/g, "1"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/H/g, "2"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "H"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "D"], JAM.policy.p16);
  return dnaSequence;
}
function closeForm() {
  var v52 = outputWindow.document;
  JAM.call(v52.write, v52, ["</form>"], JAM.policy.p10);
  return true;
}
function closePre() {
  var v53 = outputWindow.document;
  JAM.call(v53.write, v53, ["</div>"], JAM.policy.p10);
  var v54 = outputWindow.document;
  JAM.call(v54.write, v54, ["</pre>\n"], JAM.policy.p10);
  return;
}
function closeTextArea() {
  var v55 = outputWindow.document;
  JAM.call(v55.write, v55, ["</textarea>"], JAM.policy.p10);
  return true;
}
function closeWindow() {
  var v56 = outputWindow.document;
  JAM.call(v56.write, v56, ["</body>\n</html>\n"], JAM.policy.p10);
  outputWindow.status = "Done.";
  var v57 = outputWindow.document;
  v57.close();
  return;
}
function convertDegenerates(sequence$$1) {
  sequence$$1 = sequence$$1.toLowerCase();
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/t/g, "[TU]"], JAM.policy.p16);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/r/g, "[AGR]"], JAM.policy.p16);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/y/g, "[CTUY]"], JAM.policy.p16);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/s/g, "[GCS]"], JAM.policy.p16);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/w/g, "[ATUW]"], JAM.policy.p16);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/k/g, "[GTUK]"], JAM.policy.p16);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/m/g, "[ACM]"], JAM.policy.p16);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/b/g, "[CGTUBSKY]"], JAM.policy.p16);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/d/g, "[AGTUDRKW]"], JAM.policy.p16);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/h/g, "[ACTUHMYW]"], JAM.policy.p16);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/v/g, "[ACGVSMR]"], JAM.policy.p16);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/n/g, "[ACGTURYSWKMBDHVN]"], JAM.policy.p16);
  return sequence$$1;
}
function earlyCheckAlign(alignArray) {
  var v448 = alignArray.length;
  var v58 = v448 < 3;
  if (v58) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v449 = alignArray.length;
  var v60 = i$$4 < v449;
  for (;v60;) {
    var v735 = alignArray[i$$4];
    var v450 = JAM.call(v735.search, v735, [/[^\s]+\s/], JAM.policy.p15);
    var v59 = v450 == -1;
    if (v59) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v451 = alignArray.length;
    v60 = i$$4 < v451;
  }
  return true;
}
function filterAlignSeq(alignSeq) {
  alignSeq = JAM.call(alignSeq.replace, alignSeq, [/[^abcdefghiklmnpqrstvwxyz\.\-]/gi, ""], JAM.policy.p16);
  return alignSeq;
}
function filterFastaTitle(sequenceTitle) {
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/\s{2,}/g, " "], JAM.policy.p16);
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/^\s*/g, ""], JAM.policy.p16);
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/[\f\n\r\t]+$/g, "\n"], JAM.policy.p16);
  return JAM.call(sequenceTitle.replace, sequenceTitle, [/[\<\>]\n/gi, ""], JAM.policy.p16);
}
function getArrayOfFasta(sequenceData) {
  var arrayOfFasta = new Array;
  var matchArray;
  var re$$1 = /\>[^\>]+/g;
  var v452 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p15);
  var v63 = v452 != -1;
  if (v63) {
    var v62 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p17);
    for (;v62;) {
      var v61 = matchArray[0];
      JAM.call(arrayOfFasta.push, arrayOfFasta, [v61], JAM.policy.p17);
      v62 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p17);
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(sequence$$2) {
  var fastaSequenceTitle = title;
  var v453 = sequence$$2.length;
  var v64 = "&gt;results for " + v453;
  var stringToReturn = v64 + " residue sequence ";
  var v454 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p15);
  var v66 = v454 != -1;
  if (v66) {
    var v455 = stringToReturn + '"';
    var v65 = v455 + fastaSequenceTitle;
    stringToReturn = v65 + '"';
  }
  var v456 = stringToReturn + ' starting "';
  var v457 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p13);
  var v67 = v456 + v457;
  stringToReturn = v67 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v458 = sequenceOne.length;
  var v68 = "Search results for " + v458;
  var stringToReturn$$1 = v68 + " residue sequence ";
  var v459 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p15);
  var v70 = v459 != -1;
  if (v70) {
    var v460 = stringToReturn$$1 + '"';
    var v69 = v460 + fastaSequenceTitleOne;
    stringToReturn$$1 = v69 + '"';
  }
  var v461 = stringToReturn$$1 + ' starting "';
  var v462 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p13);
  var v71 = v461 + v462;
  stringToReturn$$1 = v71 + '"\n';
  var v463 = stringToReturn$$1 + "and ";
  var v464 = sequenceTwo.length;
  var v72 = v463 + v464;
  stringToReturn$$1 = v72 + " residue sequence ";
  var v465 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p15);
  var v74 = v465 != -1;
  if (v74) {
    var v466 = stringToReturn$$1 + '"';
    var v73 = v466 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v73 + '"';
  }
  var v467 = stringToReturn$$1 + ' starting "';
  var v468 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p13);
  var v75 = v467 + v468;
  stringToReturn$$1 = v75 + '"';
  var v76 = '<div class="info">' + stringToReturn$$1;
  return v76 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v77 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v77);
  var j$$2 = 0;
  var v469 = arrayOfPatterns$$3.length;
  var v79 = j$$2 < v469;
  for (;v79;) {
    var v736 = arrayOfPatterns$$3[j$$2];
    var v470 = JAM.call(v736.match, v736, [/\/.+\//], JAM.policy.p15);
    var v78 = v470 + "gi";
    if (JAM.isEval(eval)) {
      var v1150 = eval("introspect(JAM.policy.pFull) { " + v78 + " }")
    } else {
      var v1150 = JAM.call(eval, null, [v78])
    }
    geneticCodeMatchExp$$1[j$$2] = v1150;
    j$$2++;
    var v471 = arrayOfPatterns$$3.length;
    v79 = j$$2 < v471;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v80 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v80);
  var j$$3 = 0;
  var v472 = arrayOfPatterns$$4.length;
  var v83 = j$$3 < v472;
  for (;v83;) {
    var v473 = arrayOfPatterns$$4[j$$3];
    var v81 = JAM.call(v473.match, v473, [/=[a-zA-Z\*]/], JAM.policy.p15);
    var v1151 = v81.toString();
    geneticCodeMatchResult$$1[j$$3] = v1151;
    var v82 = geneticCodeMatchResult$$1[j$$3];
    var v1152 = JAM.call(v82.replace, v82, [/=/g, ""], JAM.policy.p16);
    geneticCodeMatchResult$$1[j$$3] = v1152;
    j$$3++;
    var v474 = arrayOfPatterns$$4.length;
    v83 = j$$3 < v474;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v475 = sequence$$3.length;
  var v84 = "Results for " + v475;
  var stringToReturn$$2 = v84 + " residue sequence ";
  var v476 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p15);
  var v86 = v476 != -1;
  if (v86) {
    var v477 = stringToReturn$$2 + '"';
    var v85 = v477 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v85 + '"';
  }
  var v478 = stringToReturn$$2 + ' starting "';
  var v479 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p13);
  var v87 = v478 + v479;
  stringToReturn$$2 = v87 + '"';
  var v88 = '<div class="info">' + stringToReturn$$2;
  return v88 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v737 = "Results for " + topology;
  var v480 = v737 + " ";
  var v481 = sequence$$4.length;
  var v89 = v480 + v481;
  var stringToReturn$$3 = v89 + " residue sequence ";
  var v482 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p15);
  var v91 = v482 != -1;
  if (v91) {
    var v483 = stringToReturn$$3 + '"';
    var v90 = v483 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v90 + '"';
  }
  var v484 = stringToReturn$$3 + ' starting "';
  var v485 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p13);
  var v92 = v484 + v485;
  stringToReturn$$3 = v92 + '"';
  var v93 = '<div class="info">' + stringToReturn$$3;
  return v93 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v486 = sequenceOne$$1.length;
  var v94 = "Alignment results for " + v486;
  var stringToReturn$$4 = v94 + " residue sequence ";
  var v487 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p15);
  var v96 = v487 != -1;
  if (v96) {
    var v488 = stringToReturn$$4 + '"';
    var v95 = v488 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v95 + '"';
  }
  var v489 = stringToReturn$$4 + ' starting "';
  var v490 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p13);
  var v97 = v489 + v490;
  stringToReturn$$4 = v97 + '"\n';
  var v491 = stringToReturn$$4 + "and ";
  var v492 = sequenceTwo$$1.length;
  var v98 = v491 + v492;
  stringToReturn$$4 = v98 + " residue sequence ";
  var v493 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p15);
  var v100 = v493 != -1;
  if (v100) {
    var v494 = stringToReturn$$4 + '"';
    var v99 = v494 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v99 + '"';
  }
  var v495 = stringToReturn$$4 + ' starting "';
  var v496 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p13);
  var v101 = v495 + v496;
  stringToReturn$$4 = v101 + '"';
  var v102 = '<div class="info">' + stringToReturn$$4;
  return v102 + "</div>\n";
}
function getRandomSequence(lengthOut) {
  var components = ["g", "a", "c", "t"];
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v104 = j$$4 < lengthOut;
  for (;v104;) {
    var v497 = Math.random();
    var v498 = components.length;
    var v103 = v497 * v498;
    tempNum = JAM.call(Math.floor, Math, [v103], JAM.policy.p15);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p17);
    j$$4++;
    v104 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p10);
}
function getSequenceFromFasta(sequenceRecord) {
  var v499 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p15);
  var v105 = v499 != -1;
  if (v105) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p16);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v500 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p15);
  var v107 = v500 != -1;
  if (v107) {
    var v106 = JAM.call(sequenceRecord$$1.match, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p16);
    fastaTitle = v106.toString();
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\>|[\f\n\r]/g, ""], JAM.policy.p16);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\s{2,}/g, " "], JAM.policy.p16);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/[\<\>]/gi, ""], JAM.policy.p16);
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  var v1125 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p15);
  var v1118 = v1125 != -1;
  var v1127 = !v1118;
  if (v1127) {
    var v1126 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p15);
    v1118 = v1126 != -1;
  }
  var v1109 = v1118;
  var v1120 = !v1109;
  if (v1120) {
    var v1119 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p15);
    v1109 = v1119 != -1;
  }
  var v1099 = v1109;
  var v1111 = !v1099;
  if (v1111) {
    var v1110 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p15);
    v1099 = v1110 != -1;
  }
  var v1087 = v1099;
  var v1101 = !v1087;
  if (v1101) {
    var v1100 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p15);
    v1087 = v1100 != -1;
  }
  var v1065 = v1087;
  var v1089 = !v1065;
  if (v1089) {
    var v1088 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p15);
    v1065 = v1088 != -1;
  }
  var v1027 = v1065;
  var v1067 = !v1027;
  if (v1067) {
    var v1066 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p15);
    v1027 = v1066 != -1;
  }
  var v967 = v1027;
  var v1029 = !v967;
  if (v1029) {
    var v1028 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p15);
    v967 = v1028 != -1;
  }
  var v868 = v967;
  var v969 = !v868;
  if (v969) {
    var v968 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p15);
    v868 = v968 != -1;
  }
  var v738 = v868;
  var v870 = !v738;
  if (v870) {
    var v869 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p15);
    v738 = v869 != -1;
  }
  var v501 = v738;
  var v740 = !v501;
  if (v740) {
    var v739 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p15);
    v501 = v739 != -1;
  }
  var v108 = v501;
  if (v108) {
    return false;
  }
  return true;
}
function openForm() {
  var v109 = outputWindow.document;
  JAM.call(v109.write, v109, ['<form action="">\n'], JAM.policy.p10);
  return true;
}
function openPre() {
  var v110 = outputWindow.document;
  JAM.call(v110.write, v110, ["<pre>"], JAM.policy.p10);
  var v111 = outputWindow.document;
  JAM.call(v111.write, v111, ['<div class="pre">'], JAM.policy.p10);
  return;
}
function openTextArea() {
  var v112 = outputWindow.document;
  JAM.call(v112.write, v112, ['<br /><textarea rows="6" cols="61">\n'], JAM.policy.p10);
  return true;
}
function openWindow() {
  var title$$6 = "Range Extractor DNA";
  _openWindow(title$$6);
  return;
}
function _openWindow(title$$7) {
  var isColor = true;
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  outputWindow.focus();
  var v113 = outputWindow.document;
  var v871 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v741 = v871 + "<head>\n";
  var v502 = v741 + "<title>Sequence Manipulation Suite</title>\n";
  var v114 = v502 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v113.write, v113, [v114], JAM.policy.p17);
  if (isColor) {
    var v115 = outputWindow.document;
    var v1140 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1136 = v1140 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1132 = v1136 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1128 = v1132 + "div.info {font-weight: bold}\n";
    var v1121 = v1128 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1112 = v1121 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v1102 = v1112 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v1090 = v1102 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1068 = v1090 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v1030 = v1068 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v970 = v1030 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v872 = v970 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v742 = v872 + "td.many {color: #000000}\n";
    var v503 = v742 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v116 = v503 + "</style>\n";
    JAM.call(v115.write, v115, [v116], JAM.policy.p17);
  } else {
    var v117 = outputWindow.document;
    var v1144 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1141 = v1144 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1137 = v1141 + "div.title {display: none}\n";
    var v1133 = v1137 + "div.info {font-weight: bold}\n";
    var v1129 = v1133 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1122 = v1129 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1113 = v1122 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v1103 = v1113 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1091 = v1103 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1069 = v1091 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1031 = v1069 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v971 = v1031 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v873 = v971 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v743 = v873 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v504 = v743 + "img {display: none}\n";
    var v118 = v504 + "</style>\n";
    JAM.call(v117.write, v117, [v118], JAM.policy.p17);
  }
  var v119 = outputWindow.document;
  var v874 = "</head>\n" + '<body class="main">\n';
  var v744 = v874 + '<div class="title">';
  var v505 = v744 + title$$7;
  var v120 = v505 + " results</div>\n";
  JAM.call(v119.write, v119, [v120], JAM.policy.p17);
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
  var v121 = outputWindow.document;
  var v875 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v745 = v875 + "<head>\n";
  var v506 = v745 + "<title>Sequence Manipulation Suite</title>\n";
  var v122 = v506 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v121.write, v121, [v122], JAM.policy.p17);
  if (isBackground) {
    var v123 = outputWindow.document;
    var v1142 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1138 = v1142 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1134 = v1138 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1130 = v1134 + "div.info {font-weight: bold}\n";
    var v1123 = v1130 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v1114 = v1123 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v1104 = v1114 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v1092 = v1104 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v1070 = v1092 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v1032 = v1070 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v972 = v1032 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v876 = v972 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v746 = v876 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v507 = v746 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v124 = v507 + "</style>\n";
    JAM.call(v123.write, v123, [v124], JAM.policy.p17);
  } else {
    var v125 = outputWindow.document;
    var v1146 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1145 = v1146 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1143 = v1145 + "div.title {display: none}\n";
    var v1139 = v1143 + "div.info {font-weight: bold}\n";
    var v1135 = v1139 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1131 = v1135 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v1124 = v1131 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v1115 = v1124 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v1105 = v1115 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v1093 = v1105 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v1071 = v1093 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v1033 = v1071 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v973 = v1033 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v877 = v973 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v747 = v877 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v508 = v747 + "img {display: none}\n";
    var v126 = v508 + "</style>\n";
    JAM.call(v125.write, v125, [v126], JAM.policy.p17);
  }
  var v127 = outputWindow.document;
  var v878 = "</head>\n" + '<body class="main">\n';
  var v748 = v878 + '<div class="title">';
  var v509 = v748 + title$$9;
  var v128 = v509 + " results</div>\n";
  JAM.call(v127.write, v127, [v128], JAM.policy.p17);
  outputWindow.status = "Please Wait.";
  return;
}
function removeFormatting(sequence$$5) {
  return JAM.call(sequence$$5.replace, sequence$$5, [/[\d\s]/g, ""], JAM.policy.p16);
}
function removeNonDna(sequence$$6) {
  return JAM.call(sequence$$6.replace, sequence$$6, [/[^gatucryswkmbdhvnxGATUCRYSWKMBDHVNX]/g, ""], JAM.policy.p16);
}
function removeNonDnaStrict(sequence$$7) {
  return JAM.call(sequence$$7.replace, sequence$$7, [/[^gatucGATUC]/g, ""], JAM.policy.p16);
}
function removeNonProtein(sequence$$8) {
  return JAM.call(sequence$$8.replace, sequence$$8, [/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, ""], JAM.policy.p16);
}
function removeNonProteinStrict(sequence$$9) {
  return JAM.call(sequence$$9.replace, sequence$$9, [/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, ""], JAM.policy.p16);
}
function removeNonProteinAllowDegen(sequence$$10) {
  return JAM.call(sequence$$10.replace, sequence$$10, [/[^ABCDEFGHIKLMNPQRSTVWYXZabcdefghiklmnpqrstvwyxz\*]/g, ""], JAM.policy.p16);
}
function removeNonProteinAllowX(sequence$$11) {
  return JAM.call(sequence$$11.replace, sequence$$11, [/[^ACDEFGHIKLMNPQRSTVWYZXacdefghiklmnpqrstvwyzx\*]/g, ""], JAM.policy.p16);
}
function removeWhiteSpace(text$$9) {
  return JAM.call(text$$9.replace, text$$9, [/\s/g, ""], JAM.policy.p16);
}
function removeNonLetters(sequence$$12) {
  return JAM.call(sequence$$12.replace, sequence$$12, [/[^A-Z]/gi, ""], JAM.policy.p16);
}
function reverse(dnaSequence$$1) {
  var tempDnaArray = new Array;
  var v510 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p15);
  var v129 = v510 != -1;
  if (v129) {
    tempDnaArray = JAM.call(dnaSequence$$1.match, dnaSequence$$1, [/./g], JAM.policy.p15);
    tempDnaArray = tempDnaArray.reverse();
    dnaSequence$$1 = JAM.call(tempDnaArray.join, tempDnaArray, [""], JAM.policy.p10);
  }
  return dnaSequence$$1;
}
function rightNum(theNumber, sequenceToAppend, lengthOfColumn, tabIn) {
  var j$$5 = 0;
  var tempString = "";
  theNumber = theNumber.toString();
  j$$5 = theNumber.length;
  var v130 = j$$5 < lengthOfColumn;
  for (;v130;) {
    tempString = tempString + " ";
    j$$5++;
    v130 = j$$5 < lengthOfColumn;
  }
  var v131 = tempString + theNumber;
  theNumber = v131 + " ";
  var v132 = sequenceToAppend + theNumber;
  sequenceToAppend = v132 + tabIn;
  return sequenceToAppend;
}
function testScript() {
  function v1(str$$7, p1$$1, offset$$9, s$$3) {
    return p1$$1 + "X";
  }
  var testArray = new Array;
  var testString = "1234567890";
  JAM.call(testArray.push, testArray, [testString], JAM.policy.p17);
  var v511 = testArray[0];
  var v133 = v511 != testString;
  if (v133) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v512 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p17);
  var v134 = v512 == -1;
  if (v134) {
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
  var v135 = !caughtException;
  if (v135) {
    alert("Exception handling not supported. See browser compatibility page.");
  }
  testString = "123";
  testString = JAM.call(testString.replace, testString, [/(\d)/g, v1], JAM.policy.p16);
  var v136 = testString != "1X2X3X";
  if (v136) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false;
  }
  var testNum = 2489.8237;
  var v513 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p9);
  var v137 = v513 != 2489.824;
  if (v137) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v514 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p9);
  var v138 = v514 != 2489.8;
  if (v138) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v515 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p15);
  var v139 = v515 == -1;
  if (v139) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v974 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p15);
  var v879 = v974 == -1;
  var v976 = !v879;
  if (v976) {
    var v975 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p15);
    v879 = v975 == -1;
  }
  var v749 = v879;
  var v881 = !v749;
  if (v881) {
    var v880 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p15);
    v749 = v880 == -1;
  }
  var v516 = v749;
  var v751 = !v516;
  if (v751) {
    var v750 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p15);
    v516 = v750 == -1;
  }
  var v140 = v516;
  if (v140) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v517 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p15);
  var v141 = v517 == -1;
  if (v141) {
    alert("Please enter a number.");
    return false;
  }
  var v143 = theNumber$$2 > maxInput$$2;
  if (v143) {
    var v518 = "Please enter a number less than or equal to " + maxInput$$2;
    var v142 = v518 + ".";
    alert(v142);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v519 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p15);
  var v144 = v519 != -1;
  if (v144) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return;
}
function verifyProtein(proteinSequence) {
  var v520 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p15);
  var v145 = v520 != -1;
  if (v145) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v977 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p15);
  var v882 = v977 == -1;
  var v979 = !v882;
  if (v979) {
    var v978 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p15);
    v882 = v978 == -1;
  }
  var v752 = v882;
  var v884 = !v752;
  if (v884) {
    var v883 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p15);
    v752 = v883 == -1;
  }
  var v521 = v752;
  var v754 = !v521;
  if (v754) {
    var v753 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p15);
    v521 = v753 == -1;
  }
  var v146 = v521;
  if (v146) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v980 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p15);
  var v885 = v980 == -1;
  var v982 = !v885;
  if (v982) {
    var v981 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p15);
    v885 = v981 == -1;
  }
  var v755 = v885;
  var v887 = !v755;
  if (v887) {
    var v886 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p15);
    v755 = v886 == -1;
  }
  var v522 = v755;
  var v757 = !v522;
  if (v757) {
    var v756 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p15);
    v522 = v756 == -1;
  }
  var v147 = v522;
  if (v147) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v523 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p15);
  var v148 = v523 == -1;
  if (v148) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v983 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p15);
  var v888 = v983 == -1;
  var v985 = !v888;
  if (v985) {
    var v984 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p15);
    v888 = v984 == -1;
  }
  var v758 = v888;
  var v890 = !v758;
  if (v890) {
    var v889 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p15);
    v758 = v889 == -1;
  }
  var v524 = v758;
  var v760 = !v524;
  if (v760) {
    var v759 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p15);
    v524 = v759 == -1;
  }
  var v149 = v524;
  if (v149) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v525 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p15);
  var v150 = v525 == -1;
  if (v150) {
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
  var v157 = i$$5 < stopBase;
  for (;v157;) {
    var v151 = i$$5 + 1;
    lineOfText = rightNum(v151, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v526 = basePerLine / groupSize;
    var v154 = j$$6 <= v526;
    for (;v154;) {
      var v153 = k < groupSize;
      for (;v153;) {
        var v527 = k + i$$5;
        var v152 = JAM.call(text$$10.charAt, text$$10, [v527], JAM.policy.p17);
        lineOfText = lineOfText + v152;
        k = k + 1;
        v153 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v528 = basePerLine / groupSize;
      v154 = j$$6 <= v528;
    }
    var v155 = outputWindow.document;
    var v156 = lineOfText + "\n";
    JAM.call(v155.write, v155, [v156], JAM.policy.p17);
    lineOfText = "";
    v157 = i$$5 < stopBase;
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
    var v529 = adjustment < 0;
    if (v529) {
      v529 = adjusted >= 0;
    }
    var v158 = v529;
    if (v158) {
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
  var v189 = i$$6 < stopBase$$2;
  for (;v189;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v530 = basePerLine$$2 / groupSize$$2;
    var v165 = j$$7 <= v530;
    for (;v165;) {
      var v161 = k$$1 < groupSize$$2;
      for (;v161;) {
        var v531 = i$$6 + k$$1;
        var v159 = v531 >= stopBase$$2;
        if (v159) {
          break;
        }
        var v532 = k$$1 + i$$6;
        var v160 = JAM.call(text$$12.charAt, text$$12, [v532], JAM.policy.p17);
        lineOfText$$1 = lineOfText$$1 + v160;
        k$$1 = k$$1 + 1;
        v161 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v163 = numberPosition$$1 == "above";
      if (v163) {
        var v533 = adjustNumbering(i$$6, numberingAdjustment);
        var v162 = rightNum(v533, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v162;
      }
      var v164 = i$$6 >= stopBase$$2;
      if (v164) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v534 = basePerLine$$2 / groupSize$$2;
      v165 = j$$7 <= v534;
    }
    var v188 = numberPosition$$1 == "left";
    if (v188) {
      var v166 = outputWindow.document;
      var v891 = adjustNumbering(lineNum, numberingAdjustment);
      var v761 = rightNum(v891, "", 8, tabIn$$3);
      var v535 = v761 + lineOfText$$1;
      var v167 = v535 + "\n";
      JAM.call(v166.write, v166, [v167], JAM.policy.p17);
      var v171 = strands$$1 == "two";
      if (v171) {
        var v168 = outputWindow.document;
        var v892 = adjustNumbering(lineNum, numberingAdjustment);
        var v762 = rightNum(v892, "", 8, tabIn$$3);
        var v763 = complement(lineOfText$$1);
        var v536 = v762 + v763;
        var v169 = v536 + "\n";
        JAM.call(v168.write, v168, [v169], JAM.policy.p17);
        var v170 = outputWindow.document;
        JAM.call(v170.write, v170, ["\n"], JAM.policy.p10);
      }
    } else {
      var v187 = numberPosition$$1 == "right";
      if (v187) {
        var v172 = outputWindow.document;
        var v764 = adjustNumbering(i$$6, numberingAdjustment);
        var v537 = lineOfText$$1 + v764;
        var v173 = v537 + "\n";
        JAM.call(v172.write, v172, [v173], JAM.policy.p17);
        var v177 = strands$$1 == "two";
        if (v177) {
          var v174 = outputWindow.document;
          var v765 = complement(lineOfText$$1);
          var v766 = adjustNumbering(i$$6, numberingAdjustment);
          var v538 = v765 + v766;
          var v175 = v538 + "\n";
          JAM.call(v174.write, v174, [v175], JAM.policy.p17);
          var v176 = outputWindow.document;
          JAM.call(v176.write, v176, ["\n"], JAM.policy.p10);
        }
      } else {
        var v186 = numberPosition$$1 == "above";
        if (v186) {
          var v178 = outputWindow.document;
          var v179 = aboveNum + "\n";
          JAM.call(v178.write, v178, [v179], JAM.policy.p17);
          var v180 = outputWindow.document;
          var v181 = lineOfText$$1 + "\n";
          JAM.call(v180.write, v180, [v181], JAM.policy.p17);
          var v185 = strands$$1 == "two";
          if (v185) {
            var v182 = outputWindow.document;
            var v539 = complement(lineOfText$$1);
            var v183 = v539 + "\n";
            JAM.call(v182.write, v182, [v183], JAM.policy.p17);
            var v184 = outputWindow.document;
            JAM.call(v184.write, v184, ["\n"], JAM.policy.p10);
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v189 = i$$6 < stopBase$$2;
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
  var v208 = i$$7 < stopBase$$3;
  for (;v208;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v540 = basePerLine$$3 / groupSize$$3;
    var v196 = j$$8 <= v540;
    for (;v196;) {
      var v192 = k$$2 < groupSize$$3;
      for (;v192;) {
        var v541 = i$$7 + k$$2;
        var v190 = v541 >= stopBase$$3;
        if (v190) {
          break;
        }
        var v542 = k$$2 + i$$7;
        var v191 = JAM.call(text$$13.charAt, text$$13, [v542], JAM.policy.p17);
        lineOfText$$2 = lineOfText$$2 + v191;
        k$$2 = k$$2 + 1;
        v192 = k$$2 < groupSize$$3;
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v194 = numberPosition$$2 == "above";
      if (v194) {
        var v193 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = aboveNum$$1 + v193;
      }
      var v195 = i$$7 >= stopBase$$3;
      if (v195) {
        break;
      }
      k$$2 = 0;
      j$$8++;
      var v543 = basePerLine$$3 / groupSize$$3;
      v196 = j$$8 <= v543;
    }
    var v207 = numberPosition$$2 == "left";
    if (v207) {
      var v197 = outputWindow.document;
      var v767 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v544 = v767 + lineOfText$$2;
      var v198 = v544 + "\n";
      JAM.call(v197.write, v197, [v198], JAM.policy.p17);
    } else {
      var v206 = numberPosition$$2 == "right";
      if (v206) {
        var v199 = outputWindow.document;
        var v545 = lineOfText$$2 + i$$7;
        var v200 = v545 + "\n";
        JAM.call(v199.write, v199, [v200], JAM.policy.p17);
      } else {
        var v205 = numberPosition$$2 == "above";
        if (v205) {
          var v201 = outputWindow.document;
          var v202 = aboveNum$$1 + "\n";
          JAM.call(v201.write, v201, [v202], JAM.policy.p17);
          var v203 = outputWindow.document;
          var v204 = lineOfText$$2 + "\n";
          JAM.call(v203.write, v203, [v204], JAM.policy.p17);
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v208 = i$$7 < stopBase$$3;
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
  var v893 = sequence$$13.length;
  var v768 = v893 <= firstIndexToMutate;
  var v894 = !v768;
  if (v894) {
    v768 = lastIndexToMutate < 0;
  }
  var v546 = v768;
  var v769 = !v546;
  if (v769) {
    v546 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v209 = v546;
  if (v209) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v217 = i$$8 < numMut;
  for (;v217;) {
    maxNum = sequence$$13.length;
    var v547 = Math.random();
    var v210 = v547 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v210], JAM.policy.p15);
    var v548 = randNum < firstIndexToMutate;
    var v770 = !v548;
    if (v770) {
      v548 = randNum > lastIndexToMutate;
    }
    var v211 = v548;
    if (v211) {
      numMut++;
      i$$8++;
      v217 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p15);
    needNewChar = true;
    for (;needNewChar;) {
      var v549 = Math.random();
      var v550 = components$$1.length;
      var v212 = v549 * v550;
      componentsIndex = JAM.call(Math.round, Math, [v212], JAM.policy.p15);
      var v551 = components$$1.length;
      var v213 = componentsIndex == v551;
      if (v213) {
        componentsIndex = 0;
      }
      var v552 = components$$1[componentsIndex];
      var v214 = v552 != currentChar;
      if (v214) {
        needNewChar = false;
      }
    }
    var v553 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p13);
    var v554 = components$$1[componentsIndex];
    var v215 = v553 + v554;
    var v555 = randNum + 1;
    var v556 = sequence$$13.length;
    var v216 = JAM.call(sequence$$13.substring, sequence$$13, [v555, v556], JAM.policy.p27);
    sequence$$13 = v215 + v216;
    i$$8++;
    v217 = i$$8 < numMut;
  }
  var v218 = outputWindow.document;
  var v219 = addReturns(sequence$$13);
  JAM.call(v218.write, v218, [v219], JAM.policy.p17);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v224 = j$$9 < lengthOut$$1;
  for (;v224;) {
    var v557 = Math.random();
    var v558 = components$$2.length;
    var v220 = v557 * v558;
    tempNum$$1 = JAM.call(Math.floor, Math, [v220], JAM.policy.p15);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v559 = sequence$$14.length;
    var v223 = v559 == 60;
    if (v223) {
      var v221 = outputWindow.document;
      var v222 = sequence$$14 + "\n";
      JAM.call(v221.write, v221, [v222], JAM.policy.p17);
      sequence$$14 = "";
    }
    j$$9++;
    v224 = j$$9 < lengthOut$$1;
  }
  var v225 = outputWindow.document;
  var v226 = sequence$$14 + "\n";
  JAM.call(v225.write, v225, [v226], JAM.policy.p17);
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
  var v230 = dnaConformation == "circular";
  if (v230) {
    var v227 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    shiftValue = v227.length;
    var v895 = sequence$$15.length;
    var v771 = v895 - lookAhead;
    var v772 = sequence$$15.length;
    var v560 = JAM.call(sequence$$15.substring, sequence$$15, [v771, v772], JAM.policy.p27);
    var v228 = v560 + sequence$$15;
    var v229 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    sequence$$15 = v228 + v229;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v231 = outputWindow.document;
  JAM.call(v231.write, v231, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p10);
  var v232 = outputWindow.document;
  var v896 = '<tr><td class="title" width="200px">' + "Site:";
  var v773 = v896 + '</td><td class="title">';
  var v561 = v773 + "Positions:";
  var v233 = v561 + "</td></tr>\n";
  JAM.call(v232.write, v232, [v233], JAM.policy.p17);
  var i$$9 = 0;
  var v562 = arrayOfItems.length;
  var v249 = i$$9 < v562;
  for (;v249;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v563 = arrayOfItems[i$$9];
    var v234 = JAM.call(v563.match, v563, [/\/.+\//], JAM.policy.p15);
    matchExp = v234 + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    var v897 = arrayOfItems[i$$9];
    var v774 = JAM.call(v897.match, v897, [/\)\D*\d+/], JAM.policy.p15);
    var v564 = v774.toString();
    var v235 = JAM.call(v564.replace, v564, [/\)\D*/, ""], JAM.policy.p16);
    cutDistance = parseFloat(v235);
    var v241 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p17);
    for (;v241;) {
      var v236 = matchExp.lastIndex;
      matchPosition = v236 - cutDistance;
      var v565 = matchPosition >= lowerLimit;
      if (v565) {
        v565 = matchPosition < upperLimit;
      }
      var v239 = v565;
      if (v239) {
        timesFound++;
        var v237 = tempString$$1 + ", ";
        var v566 = matchPosition - shiftValue;
        var v238 = v566 + 1;
        tempString$$1 = v237 + v238;
      }
      var v567 = matchExp.lastIndex;
      var v775 = RegExp.lastMatch;
      var v568 = v775.length;
      var v240 = v567 - v568;
      matchExp.lastIndex = v240 + 1;
      v241 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p17);
    }
    var v569 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p15);
    var v242 = v569 != -1;
    if (v242) {
      tempString$$1 = JAM.call(tempString$$1.replace, tempString$$1, [/none,\s*/, ""], JAM.policy.p16);
    }
    var v246 = timesFound == 0;
    if (v246) {
      backGroundClass = "none";
    } else {
      var v245 = timesFound == 1;
      if (v245) {
        backGroundClass = "one";
      } else {
        var v244 = timesFound == 2;
        if (v244) {
          backGroundClass = "two";
        } else {
          var v243 = timesFound == 3;
          if (v243) {
            backGroundClass = "three";
          } else {
            backGroundClass = "many";
          }
        }
      }
    }
    var v247 = outputWindow.document;
    var v1094 = '<tr><td class="' + backGroundClass;
    var v1072 = v1094 + '">';
    var v1116 = arrayOfItems[i$$9];
    var v1106 = JAM.call(v1116.match, v1116, [/\([^\(]+\)/], JAM.policy.p15);
    var v1095 = v1106.toString();
    var v1073 = JAM.call(v1095.replace, v1095, [/\(|\)/g, ""], JAM.policy.p16);
    var v1034 = v1072 + v1073;
    var v986 = v1034 + '</td><td class="';
    var v898 = v986 + backGroundClass;
    var v776 = v898 + '">';
    var v570 = v776 + tempString$$1;
    var v248 = v570 + "</td></tr>\n";
    JAM.call(v247.write, v247, [v248], JAM.policy.p17);
    timesFound = 0;
    i$$9++;
    var v571 = arrayOfItems.length;
    v249 = i$$9 < v571;
  }
  var v250 = outputWindow.document;
  JAM.call(v250.write, v250, ["</tbody></table>\n"], JAM.policy.p10);
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v251 = outputWindow.document;
  JAM.call(v251.write, v251, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p10);
  var v252 = outputWindow.document;
  var v1035 = '<tr><td class="title">' + "Pattern:";
  var v987 = v1035 + '</td><td class="title">';
  var v899 = v987 + "Times found:";
  var v777 = v899 + '</td><td class="title">';
  var v572 = v777 + "Percentage:";
  var v253 = v572 + "</td></tr>\n";
  JAM.call(v252.write, v252, [v253], JAM.policy.p17);
  var i$$10 = 0;
  var v573 = arrayOfItems$$1.length;
  var v262 = i$$10 < v573;
  for (;v262;) {
    var tempNumber = 0;
    var v574 = arrayOfItems$$1[i$$10];
    var v254 = JAM.call(v574.match, v574, [/\/[^\/]+\//], JAM.policy.p15);
    var matchExp$$1 = v254 + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    var v575 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p17);
    var v256 = v575 != -1;
    if (v256) {
      var v255 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p17);
      tempNumber = v255.length;
    }
    var percentage = 0;
    var v778 = originalLength + 1;
    var v988 = arrayOfItems$$1[i$$10];
    var v900 = JAM.call(v988.match, v988, [/\d+/], JAM.policy.p15);
    var v779 = parseFloat(v900);
    var v576 = v778 - v779;
    var v259 = v576 > 0;
    if (v259) {
      var v257 = 100 * tempNumber;
      var v577 = originalLength + 1;
      var v901 = arrayOfItems$$1[i$$10];
      var v780 = JAM.call(v901.match, v901, [/\d+/], JAM.policy.p15);
      var v578 = parseFloat(v780);
      var v258 = v577 - v578;
      percentage = v257 / v258;
    }
    var v260 = outputWindow.document;
    var v1117 = arrayOfItems$$1[i$$10];
    var v1107 = JAM.call(v1117.match, v1117, [/\([^\(]+\)\b/], JAM.policy.p15);
    var v1096 = v1107.toString();
    var v1074 = JAM.call(v1096.replace, v1096, [/\(|\)/g, ""], JAM.policy.p16);
    var v1036 = "<tr><td>" + v1074;
    var v989 = v1036 + "</td><td>";
    var v902 = v989 + tempNumber;
    var v781 = v902 + "</td><td>";
    var v782 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p9);
    var v579 = v781 + v782;
    var v261 = v579 + "</td></tr>\n";
    JAM.call(v260.write, v260, [v261], JAM.policy.p17);
    i$$10++;
    var v580 = arrayOfItems$$1.length;
    v262 = i$$10 < v580;
  }
  var v263 = outputWindow.document;
  JAM.call(v263.write, v263, ["</tbody></table>\n"], JAM.policy.p10);
  return true;
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v581 = sequence$$17.length;
  var v270 = v581 > 0;
  for (;v270;) {
    maxNum$$1 = sequence$$17.length;
    var v582 = Math.random();
    var v264 = v582 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v264], JAM.policy.p15);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p15);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p13);
    var v265 = randNum$$1 + 1;
    var v266 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v265, v266], JAM.policy.p16);
    sequence$$17 = tempString1 + tempString2;
    var v583 = tempSeq.length;
    var v269 = v583 == 60;
    if (v269) {
      var v267 = outputWindow.document;
      var v268 = tempSeq + "\n";
      JAM.call(v267.write, v267, [v268], JAM.policy.p17);
      tempSeq = "";
    }
    var v584 = sequence$$17.length;
    v270 = v584 > 0;
  }
  var v271 = outputWindow.document;
  var v272 = tempSeq + "\n";
  JAM.call(v271.write, v271, [v272], JAM.policy.p17);
  return true;
}
function rangeExtract() {
  var theDocument = document;
  var newDna = "";
  var maxInput$$3 = 5E5;
  var matchFound = false;
  var ranges = new Array;
  var v585 = testScript();
  var v273 = v585 == false;
  if (v273) {
    return;
  }
  var v1097 = theDocument.forms;
  var v1075 = v1097[0];
  var v1037 = v1075.elements;
  var v990 = v1037[0];
  var v903 = checkFormElement(v990);
  var v783 = v903 == false;
  var v905 = !v783;
  if (v905) {
    var v1108 = theDocument.forms;
    var v1098 = v1108[0];
    var v1076 = v1098.elements;
    var v1038 = v1076[0];
    var v991 = v1038.value;
    var v904 = checkSequenceLength(v991, maxInput$$3);
    v783 = v904 == false;
  }
  var v586 = v783;
  var v785 = !v586;
  if (v785) {
    var v1077 = theDocument.forms;
    var v1039 = v1077[0];
    var v992 = v1039.elements;
    var v906 = v992[1];
    var v784 = checkFormElement(v906);
    v586 = v784 == false;
  }
  var v274 = v586;
  if (v274) {
    return;
  }
  var v993 = theDocument.forms;
  var v907 = v993[0];
  var v786 = v907.elements;
  var v587 = v786[1];
  var v275 = v587.value;
  var arrayOfRanges = JAM.call(v275.split, v275, [/,/], JAM.policy.p15);
  var arrayOfStartAndEnd;
  var i$$11 = 0;
  var v588 = arrayOfRanges.length;
  var v282 = i$$11 < v588;
  for (;v282;) {
    var v276 = arrayOfRanges[i$$11];
    arrayOfStartAndEnd = JAM.call(v276.split, v276, [/\.\./], JAM.policy.p15);
    var v589 = arrayOfStartAndEnd.length;
    var v281 = v589 == 1;
    if (v281) {
      matchFound = true;
      var v590 = arrayOfStartAndEnd[0];
      var v591 = arrayOfStartAndEnd[0];
      var v277 = new Range(v590, v591);
      JAM.call(ranges.push, ranges, [v277], JAM.policy.p17);
    } else {
      var v592 = arrayOfStartAndEnd.length;
      var v280 = v592 == 2;
      if (v280) {
        matchFound = true;
        var v593 = arrayOfStartAndEnd[0];
        var v594 = arrayOfStartAndEnd[1];
        var v278 = new Range(v593, v594);
        JAM.call(ranges.push, ranges, [v278], JAM.policy.p17);
      } else {
        var v595 = arrayOfRanges[i$$11];
        var v279 = "The following range entry was ignored: " + v595;
        alert(v279);
      }
    }
    i$$11++;
    var v596 = arrayOfRanges.length;
    v282 = i$$11 < v596;
  }
  var v283 = matchFound == false;
  if (v283) {
    alert("No ranges were entered.");
    return;
  }
  openWindow();
  openPre();
  var v994 = theDocument.forms;
  var v908 = v994[0];
  var v787 = v908.elements;
  var v597 = v787[0];
  var v284 = v597.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v284);
  i$$11 = 0;
  var v598 = arrayOfFasta$$1.length;
  var v291 = i$$11 < v598;
  for (;v291;) {
    var v285 = arrayOfFasta$$1[i$$11];
    newDna = getSequenceFromFasta(v285);
    var v286 = arrayOfFasta$$1[i$$11];
    title = getTitleFromFasta(v286);
    verifyDna(newDna);
    newDna = removeNonDna(newDna);
    var v287 = outputWindow.document;
    var v288 = getFastaTitleFromTitleAndSequence(newDna);
    JAM.call(v287.write, v287, [v288], JAM.policy.p17);
    var v1078 = theDocument.forms;
    var v1040 = v1078[0];
    var v995 = v1040.elements;
    var v909 = v995[5];
    var v788 = v909.options;
    var v1079 = theDocument.forms;
    var v1041 = v1079[0];
    var v996 = v1041.elements;
    var v910 = v996[5];
    var v789 = v910.selectedIndex;
    var v599 = v788[v789];
    var v289 = v599.value;
    var v1080 = theDocument.forms;
    var v1042 = v1080[0];
    var v997 = v1042.elements;
    var v911 = v997[6];
    var v790 = v911.options;
    var v1081 = theDocument.forms;
    var v1043 = v1081[0];
    var v998 = v1043.elements;
    var v912 = v998[6];
    var v791 = v912.selectedIndex;
    var v600 = v790[v791];
    var v290 = v600.value;
    writeSequenceRanges(newDna, ranges, v289, v290);
    i$$11++;
    var v601 = arrayOfFasta$$1.length;
    v291 = i$$11 < v601;
  }
  closePre();
  closeWindow();
  return;
}
function writeSequenceRanges(sequence$$18, ranges$$1, strand, segmentType) {
  var rangeGroup = new RangeGroup(strand, segmentType);
  var v602 = sequence$$18.length;
  var v292 = v602 / 2;
  var center_base = JAM.call(Math.round, Math, [v292], JAM.policy.p17);
  var i$$12 = 0;
  var v603 = ranges$$1.length;
  var v306 = i$$12 < v603;
  for (;v306;) {
    var v293 = ranges$$1[i$$12];
    var v913 = ranges$$1[i$$12];
    var v792 = v913.start;
    var v604 = v792.toString();
    var v1153 = JAM.call(v604.replace, v604, [/start|begin/gi, 1], JAM.policy.p16);
    v293.start = v1153;
    var v294 = ranges$$1[i$$12];
    var v914 = ranges$$1[i$$12];
    var v793 = v914.start;
    var v605 = v793.toString();
    var v606 = sequence$$18.length;
    var v1154 = JAM.call(v605.replace, v605, [/stop|end/gi, v606], JAM.policy.p16);
    v294.start = v1154;
    var v295 = ranges$$1[i$$12];
    var v915 = ranges$$1[i$$12];
    var v794 = v915.start;
    var v607 = v794.toString();
    var v608 = sequence$$18.length;
    var v1155 = JAM.call(v607.replace, v607, [/length/gi, v608], JAM.policy.p16);
    v295.start = v1155;
    var v296 = ranges$$1[i$$12];
    var v916 = ranges$$1[i$$12];
    var v795 = v916.start;
    var v609 = v795.toString();
    var v1156 = JAM.call(v609.replace, v609, [/middle|center|centre/gi, center_base], JAM.policy.p16);
    v296.start = v1156;
    var v297 = ranges$$1[i$$12];
    var v917 = ranges$$1[i$$12];
    var v796 = v917.stop;
    var v610 = v796.toString();
    var v1157 = JAM.call(v610.replace, v610, [/start|begin/gi, 1], JAM.policy.p16);
    v297.stop = v1157;
    var v298 = ranges$$1[i$$12];
    var v918 = ranges$$1[i$$12];
    var v797 = v918.stop;
    var v611 = v797.toString();
    var v612 = sequence$$18.length;
    var v1158 = JAM.call(v611.replace, v611, [/stop|end/gi, v612], JAM.policy.p16);
    v298.stop = v1158;
    var v299 = ranges$$1[i$$12];
    var v919 = ranges$$1[i$$12];
    var v798 = v919.stop;
    var v613 = v798.toString();
    var v614 = sequence$$18.length;
    var v1159 = JAM.call(v613.replace, v613, [/length/gi, v614], JAM.policy.p16);
    v299.stop = v1159;
    var v300 = ranges$$1[i$$12];
    var v920 = ranges$$1[i$$12];
    var v799 = v920.stop;
    var v615 = v799.toString();
    var v1160 = JAM.call(v615.replace, v615, [/middle|center|centre/gi, center_base], JAM.policy.p16);
    v300.stop = v1160;
    try {
      var v301 = ranges$$1[i$$12];
      var v999 = ranges$$1[i$$12];
      var v921 = v999.start;
      var v800 = v921.toString();
      if (JAM.isEval(eval)) {
        var v616 = eval("introspect(JAM.policy.pFull) { " + v800 + " }")
      } else {
        var v616 = JAM.call(eval, null, [v800])
      }
      var v1161 = parseInt(v616);
      v301.start = v1161;
    } catch (e$$5) {
      var v801 = ranges$$1[i$$12];
      var v617 = v801.start;
      var v302 = "Could not evaluate the following expression: " + v617;
      alert(v302);
      return;
    }
    try {
      var v303 = ranges$$1[i$$12];
      var v1000 = ranges$$1[i$$12];
      var v922 = v1000.stop;
      var v802 = v922.toString();
      if (JAM.isEval(eval)) {
        var v618 = eval("introspect(JAM.policy.pFull) { " + v802 + " }")
      } else {
        var v618 = JAM.call(eval, null, [v802])
      }
      var v1162 = parseInt(v618);
      v303.stop = v1162;
    } catch (e$$6) {
      var v803 = ranges$$1[i$$12];
      var v619 = v803.stop;
      var v304 = "Could not evaluate the following expression: " + v619;
      alert(v304);
      return;
    }
    var v305 = ranges$$1[i$$12];
    JAM.call(rangeGroup.addRange, rangeGroup, [v305], JAM.policy.p17);
    i$$12++;
    var v620 = ranges$$1.length;
    v306 = i$$12 < v620;
  }
  JAM.call(rangeGroup.writeRanges, rangeGroup, [sequence$$18], JAM.policy.p17);
  return;
}
function getSequence(sequence$$19) {
  var problem = false;
  var warnings = new Array;
  var v621 = this.start;
  var v622 = this.stop;
  var v321 = v621 == v622;
  if (v321) {
    var v623 = this.start;
    var v308 = v623 < 1;
    if (v308) {
      problem = true;
      var v804 = this.start;
      var v624 = "position value of " + v804;
      var v307 = v624 + " is less than 1";
      JAM.call(warnings.push, warnings, [v307], JAM.policy.p17);
    }
    var v625 = this.start;
    var v626 = sequence$$19.length;
    var v310 = v625 > v626;
    if (v310) {
      problem = true;
      var v805 = this.start;
      var v627 = "position value of " + v805;
      var v309 = v627 + " is greater than the sequence length";
      JAM.call(warnings.push, warnings, [v309], JAM.policy.p17);
    }
  } else {
    var v628 = this.start;
    var v312 = v628 < 1;
    if (v312) {
      problem = true;
      var v806 = this.start;
      var v629 = "position value of " + v806;
      var v311 = v629 + " is less than 1";
      JAM.call(warnings.push, warnings, [v311], JAM.policy.p17);
    }
    var v630 = this.stop;
    var v314 = v630 < 1;
    if (v314) {
      problem = true;
      var v807 = this.stop;
      var v631 = "position value of " + v807;
      var v313 = v631 + " is less than 1";
      JAM.call(warnings.push, warnings, [v313], JAM.policy.p17);
    }
    var v632 = this.start;
    var v633 = sequence$$19.length;
    var v316 = v632 > v633;
    if (v316) {
      problem = true;
      var v808 = this.start;
      var v634 = "position value of " + v808;
      var v315 = v634 + " is greater than the sequence length";
      JAM.call(warnings.push, warnings, [v315], JAM.policy.p17);
    }
    var v635 = this.stop;
    var v636 = sequence$$19.length;
    var v318 = v635 > v636;
    if (v318) {
      problem = true;
      var v809 = this.stop;
      var v637 = "position value of " + v809;
      var v317 = v637 + " is greater than the sequence length";
      JAM.call(warnings.push, warnings, [v317], JAM.policy.p17);
    }
    var v638 = this.start;
    var v639 = this.stop;
    var v320 = v638 > v639;
    if (v320) {
      problem = true;
      var v923 = this.start;
      var v810 = "stop position is less than start position in range " + v923;
      var v640 = v810 + " to ";
      var v641 = this.stop;
      var v319 = v640 + v641;
      JAM.call(warnings.push, warnings, [v319], JAM.policy.p17);
    }
  }
  if (problem) {
    var v642 = JAM.call(warnings.join, warnings, [",\n"], JAM.policy.p10);
    var v322 = "An entry was skipped because of the following:\n" + v642;
    alert(v322);
    return false;
  } else {
    var v643 = this.start;
    var v644 = this.stop;
    var v326 = v643 == v644;
    if (v326) {
      var v645 = this.start;
      var v323 = v645 - 1;
      return JAM.call(sequence$$19.charAt, sequence$$19, [v323], JAM.policy.p17);
    } else {
      var v646 = this.start;
      var v324 = v646 - 1;
      var v325 = this.stop;
      return JAM.call(sequence$$19.substring, sequence$$19, [v324, v325], JAM.policy.p27);
    }
  }
  return;
}
function getTitle() {
  var v647 = this.start;
  var v648 = this.stop;
  var v330 = v647 == v648;
  if (v330) {
    var v327 = this.start;
    return "&gt;base " + v327;
  } else {
    var v811 = this.start;
    var v649 = "&gt;base " + v811;
    var v328 = v649 + " to ";
    var v329 = this.stop;
    return v328 + v329;
  }
  return;
}
function Range(start$$4, stop) {
  this.start = start$$4;
  this.stop = stop;
  return;
}
function addRange(range$$5) {
  var v331 = this.ranges;
  JAM.call(v331.push, v331, [range$$5], JAM.policy.p17);
  return;
}
function writeRanges(sequence$$20) {
  function v9(str$$15, p1$$9, offset$$17, s$$11) {
    var v650 = p1$$9.length;
    var v332 = offset$$17 + v650;
    return JAM.call(sequence$$20.substring, sequence$$20, [offset$$17, v332], JAM.policy.p27);
  }
  function v8(str$$14, p1$$8, p2$$3, offset$$16, s$$10) {
    var v651 = p1$$8.length;
    var v812 = p1$$8.length;
    var v813 = p2$$3.length;
    var v652 = v812 + v813;
    var v333 = JAM.call(sequence$$20.substring, sequence$$20, [v651, v652], JAM.policy.p27);
    return p1$$8 + v333;
  }
  function v7(str$$13, p1$$7, offset$$15, s$$9) {
    var v334 = p1$$7.length;
    return getRandomSequence(v334);
  }
  function v6(str$$12, p1$$6, p2$$2, offset$$14, s$$8) {
    var v653 = p2$$2.length;
    var v335 = getRandomSequence(v653);
    return p1$$6 + v335;
  }
  function v5(str$$11, p1$$5, offset$$13, s$$7) {
    return p1$$5.toLowerCase();
  }
  function v4(str$$10, p1$$4, p2$$1, offset$$12, s$$6) {
    var v336 = p2$$1.toLowerCase();
    return p1$$4 + v336;
  }
  function v3(str$$9, p1$$3, offset$$11, s$$5) {
    return p1$$3.toUpperCase();
  }
  function v2(str$$8, p1$$2, p2, offset$$10, s$$4) {
    var v337 = p2.toUpperCase();
    return p1$$2 + v337;
  }
  var sequenceArray$$1 = new Array;
  var v654 = this.type;
  var v346 = v654 == "new_sequence";
  if (v346) {
    var i$$13 = 0;
    var v814 = this.ranges;
    var v655 = v814.length;
    var v340 = i$$13 < v655;
    for (;v340;) {
      var v924 = this.ranges;
      var v815 = v924[i$$13];
      var v656 = JAM.call(v815.getSequence, v815, [sequence$$20], JAM.policy.p17);
      var v339 = v656 != "";
      if (v339) {
        var v816 = this.ranges;
        var v657 = v816[i$$13];
        var v338 = JAM.call(v657.getSequence, v657, [sequence$$20], JAM.policy.p17);
        JAM.call(sequenceArray$$1.push, sequenceArray$$1, [v338], JAM.policy.p17);
      }
      i$$13++;
      var v817 = this.ranges;
      var v658 = v817.length;
      v340 = i$$13 < v658;
    }
    var v659 = this.strand;
    var v345 = v659 == "reverse";
    if (v345) {
      var v341 = outputWindow.document;
      var v1001 = JAM.call(sequenceArray$$1.join, sequenceArray$$1, [""], JAM.policy.p10);
      var v925 = complement(v1001);
      var v818 = reverse(v925);
      var v660 = addReturns(v818);
      var v342 = v660 + "\n\n";
      JAM.call(v341.write, v341, [v342], JAM.policy.p17);
    } else {
      var v343 = outputWindow.document;
      var v819 = JAM.call(sequenceArray$$1.join, sequenceArray$$1, [""], JAM.policy.p10);
      var v661 = addReturns(v819);
      var v344 = v661 + "\n\n";
      JAM.call(v343.write, v343, [v344], JAM.policy.p17);
    }
    return true;
  }
  var v662 = this.type;
  var v356 = v662 == "separate";
  if (v356) {
    i$$13 = 0;
    var v820 = this.ranges;
    var v663 = v820.length;
    var v355 = i$$13 < v663;
    for (;v355;) {
      var v926 = this.ranges;
      var v821 = v926[i$$13];
      var v664 = JAM.call(v821.getSequence, v821, [sequence$$20], JAM.policy.p17);
      var v354 = v664 != "";
      if (v354) {
        var v347 = outputWindow.document;
        var v927 = this.ranges;
        var v822 = v927[i$$13];
        var v665 = v822.getTitle();
        var v348 = v665 + "\n";
        JAM.call(v347.write, v347, [v348], JAM.policy.p17);
        var v666 = this.strand;
        var v353 = v666 == "reverse";
        if (v353) {
          var v349 = outputWindow.document;
          var v1082 = this.ranges;
          var v1044 = v1082[i$$13];
          var v1002 = JAM.call(v1044.getSequence, v1044, [sequence$$20], JAM.policy.p17);
          var v928 = addReturns(v1002);
          var v823 = complement(v928);
          var v667 = reverse(v823);
          var v350 = v667 + "\n\n";
          JAM.call(v349.write, v349, [v350], JAM.policy.p17);
        } else {
          var v351 = outputWindow.document;
          var v1003 = this.ranges;
          var v929 = v1003[i$$13];
          var v824 = JAM.call(v929.getSequence, v929, [sequence$$20], JAM.policy.p17);
          var v668 = addReturns(v824);
          var v352 = v668 + "\n\n";
          JAM.call(v351.write, v351, [v352], JAM.policy.p17);
        }
      }
      i$$13++;
      var v825 = this.ranges;
      var v669 = v825.length;
      v355 = i$$13 < v669;
    }
    return true;
  }
  var v670 = this.type;
  var v367 = v670 == "uppercased";
  if (v367) {
    var re$$3;
    sequence$$20 = sequence$$20.toLowerCase();
    i$$13 = 0;
    var v826 = this.ranges;
    var v671 = v826.length;
    var v361 = i$$13 < v671;
    for (;v361;) {
      var v930 = this.ranges;
      var v827 = v930[i$$13];
      var v672 = JAM.call(v827.getSequence, v827, [sequence$$20], JAM.policy.p17);
      var v360 = v672 != "";
      if (v360) {
        var v931 = this.ranges;
        var v828 = v931[i$$13];
        var v673 = v828.start;
        var v359 = v673 > 1;
        if (v359) {
          var v1083 = this.ranges;
          var v1045 = v1083[i$$13];
          var v1004 = v1045.start;
          var v932 = v1004 - 1;
          var v829 = "(.{" + v932;
          var v674 = v829 + "})\\B(.{";
          var v1046 = this.ranges;
          var v1005 = v1046[i$$13];
          var v933 = v1005.stop;
          var v1047 = this.ranges;
          var v1006 = v1047[i$$13];
          var v934 = v1006.start;
          var v830 = v933 - v934;
          var v675 = v830 + 1;
          var v357 = v674 + v675;
          re$$3 = v357 + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [re$$3, v2], JAM.policy.p27);
        } else {
          var v1048 = this.ranges;
          var v1007 = v1048[i$$13];
          var v935 = v1007.stop;
          var v1049 = this.ranges;
          var v1008 = v1049[i$$13];
          var v936 = v1008.start;
          var v831 = v935 - v936;
          var v676 = v831 + 1;
          var v358 = "(.{" + v676;
          re$$3 = v358 + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [re$$3, v3], JAM.policy.p27);
        }
      }
      i$$13++;
      var v832 = this.ranges;
      var v677 = v832.length;
      v361 = i$$13 < v677;
    }
    var v678 = this.strand;
    var v366 = v678 == "reverse";
    if (v366) {
      var v362 = outputWindow.document;
      var v937 = addReturns(sequence$$20);
      var v833 = complement(v937);
      var v679 = reverse(v833);
      var v363 = v679 + "\n\n";
      JAM.call(v362.write, v362, [v363], JAM.policy.p17);
    } else {
      var v364 = outputWindow.document;
      var v680 = addReturns(sequence$$20);
      var v365 = v680 + "\n\n";
      JAM.call(v364.write, v364, [v365], JAM.policy.p17);
    }
    return true;
  }
  var v681 = this.type;
  var v378 = v681 == "lowercased";
  if (v378) {
    sequence$$20 = sequence$$20.toUpperCase();
    i$$13 = 0;
    var v834 = this.ranges;
    var v682 = v834.length;
    var v372 = i$$13 < v682;
    for (;v372;) {
      var v938 = this.ranges;
      var v835 = v938[i$$13];
      var v683 = JAM.call(v835.getSequence, v835, [sequence$$20], JAM.policy.p17);
      var v371 = v683 != "";
      if (v371) {
        var v939 = this.ranges;
        var v836 = v939[i$$13];
        var v684 = v836.start;
        var v370 = v684 > 1;
        if (v370) {
          var v1084 = this.ranges;
          var v1050 = v1084[i$$13];
          var v1009 = v1050.start;
          var v940 = v1009 - 1;
          var v837 = "(.{" + v940;
          var v685 = v837 + "})\\B(.{";
          var v1051 = this.ranges;
          var v1010 = v1051[i$$13];
          var v941 = v1010.stop;
          var v1052 = this.ranges;
          var v1011 = v1052[i$$13];
          var v942 = v1011.start;
          var v838 = v941 - v942;
          var v686 = v838 + 1;
          var v368 = v685 + v686;
          re$$3 = v368 + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [re$$3, v4], JAM.policy.p27);
        } else {
          var v1053 = this.ranges;
          var v1012 = v1053[i$$13];
          var v943 = v1012.stop;
          var v1054 = this.ranges;
          var v1013 = v1054[i$$13];
          var v944 = v1013.start;
          var v839 = v943 - v944;
          var v687 = v839 + 1;
          var v369 = "(.{" + v687;
          re$$3 = v369 + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [re$$3, v5], JAM.policy.p27);
        }
      }
      i$$13++;
      var v840 = this.ranges;
      var v688 = v840.length;
      v372 = i$$13 < v688;
    }
    var v689 = this.strand;
    var v377 = v689 == "reverse";
    if (v377) {
      var v373 = outputWindow.document;
      var v945 = addReturns(sequence$$20);
      var v841 = complement(v945);
      var v690 = reverse(v841);
      var v374 = v690 + "\n\n";
      JAM.call(v373.write, v373, [v374], JAM.policy.p17);
    } else {
      var v375 = outputWindow.document;
      var v691 = addReturns(sequence$$20);
      var v376 = v691 + "\n\n";
      JAM.call(v375.write, v375, [v376], JAM.policy.p17);
    }
    return true;
  }
  var v692 = this.type;
  var v389 = v692 == "randomized";
  if (v389) {
    i$$13 = 0;
    var v842 = this.ranges;
    var v693 = v842.length;
    var v383 = i$$13 < v693;
    for (;v383;) {
      var v946 = this.ranges;
      var v843 = v946[i$$13];
      var v694 = JAM.call(v843.getSequence, v843, [sequence$$20], JAM.policy.p17);
      var v382 = v694 != "";
      if (v382) {
        var v947 = this.ranges;
        var v844 = v947[i$$13];
        var v695 = v844.start;
        var v381 = v695 > 1;
        if (v381) {
          var v1085 = this.ranges;
          var v1055 = v1085[i$$13];
          var v1014 = v1055.start;
          var v948 = v1014 - 1;
          var v845 = "(.{" + v948;
          var v696 = v845 + "})\\B(.{";
          var v1056 = this.ranges;
          var v1015 = v1056[i$$13];
          var v949 = v1015.stop;
          var v1057 = this.ranges;
          var v1016 = v1057[i$$13];
          var v950 = v1016.start;
          var v846 = v949 - v950;
          var v697 = v846 + 1;
          var v379 = v696 + v697;
          re$$3 = v379 + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [re$$3, v6], JAM.policy.p27);
        } else {
          var v1058 = this.ranges;
          var v1017 = v1058[i$$13];
          var v951 = v1017.stop;
          var v1059 = this.ranges;
          var v1018 = v1059[i$$13];
          var v952 = v1018.start;
          var v847 = v951 - v952;
          var v698 = v847 + 1;
          var v380 = "(.{" + v698;
          re$$3 = v380 + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [re$$3, v7], JAM.policy.p27);
        }
      }
      i$$13++;
      var v848 = this.ranges;
      var v699 = v848.length;
      v383 = i$$13 < v699;
    }
    var v700 = this.strand;
    var v388 = v700 == "reverse";
    if (v388) {
      var v384 = outputWindow.document;
      var v953 = addReturns(sequence$$20);
      var v849 = complement(v953);
      var v701 = reverse(v849);
      var v385 = v701 + "\n\n";
      JAM.call(v384.write, v384, [v385], JAM.policy.p17);
    } else {
      var v386 = outputWindow.document;
      var v702 = addReturns(sequence$$20);
      var v387 = v702 + "\n\n";
      JAM.call(v386.write, v386, [v387], JAM.policy.p17);
    }
    return true;
  }
  var v703 = this.type;
  var v401 = v703 == "preserved";
  if (v401) {
    var v390 = sequence$$20.length;
    var randomSequence = getRandomSequence(v390);
    i$$13 = 0;
    var v850 = this.ranges;
    var v704 = v850.length;
    var v395 = i$$13 < v704;
    for (;v395;) {
      var v954 = this.ranges;
      var v851 = v954[i$$13];
      var v705 = JAM.call(v851.getSequence, v851, [sequence$$20], JAM.policy.p17);
      var v394 = v705 != "";
      if (v394) {
        var v955 = this.ranges;
        var v852 = v955[i$$13];
        var v706 = v852.start;
        var v393 = v706 > 1;
        if (v393) {
          var v1086 = this.ranges;
          var v1060 = v1086[i$$13];
          var v1019 = v1060.start;
          var v956 = v1019 - 1;
          var v853 = "(.{" + v956;
          var v707 = v853 + "})\\B(.{";
          var v1061 = this.ranges;
          var v1020 = v1061[i$$13];
          var v957 = v1020.stop;
          var v1062 = this.ranges;
          var v1021 = v1062[i$$13];
          var v958 = v1021.start;
          var v854 = v957 - v958;
          var v708 = v854 + 1;
          var v391 = v707 + v708;
          re$$3 = v391 + "})";
          re$$3 = new RegExp(re$$3);
          randomSequence = JAM.call(randomSequence.replace, randomSequence, [re$$3, v8], JAM.policy.p27);
        } else {
          var v1063 = this.ranges;
          var v1022 = v1063[i$$13];
          var v959 = v1022.stop;
          var v1064 = this.ranges;
          var v1023 = v1064[i$$13];
          var v960 = v1023.start;
          var v855 = v959 - v960;
          var v709 = v855 + 1;
          var v392 = "(.{" + v709;
          re$$3 = v392 + "})";
          re$$3 = new RegExp(re$$3);
          randomSequence = JAM.call(randomSequence.replace, randomSequence, [re$$3, v9], JAM.policy.p27);
        }
      }
      i$$13++;
      var v856 = this.ranges;
      var v710 = v856.length;
      v395 = i$$13 < v710;
    }
    var v711 = this.strand;
    var v400 = v711 == "reverse";
    if (v400) {
      var v396 = outputWindow.document;
      var v961 = addReturns(randomSequence);
      var v857 = complement(v961);
      var v712 = reverse(v857);
      var v397 = v712 + "\n\n";
      JAM.call(v396.write, v396, [v397], JAM.policy.p17);
    } else {
      var v398 = outputWindow.document;
      var v713 = addReturns(randomSequence);
      var v399 = v713 + "\n\n";
      JAM.call(v398.write, v398, [v399], JAM.policy.p17);
    }
    return true;
  }
  return;
}
function RangeGroup(strand$$1, type$$25) {
  this.strand = strand$$1;
  this.type = type$$25;
  var v1163 = new Array;
  this.ranges = v1163;
  return;
}
new Range(0, 0);
var v402 = Range.prototype;
v402.getSequence = getSequence;
var v403 = Range.prototype;
v403.getTitle = getTitle;
new RangeGroup("", "");
var v404 = RangeGroup.prototype;
v404.addRange = addRange;
var v405 = RangeGroup.prototype;
v405.writeRanges = writeRanges;
JAM.set(document, "onload", v10);
var v406 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p10);
JAM.set(v406, "onclick", v11);
var v407 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p10);
JAM.set(v407, "onclick", v12)

JAM.stopProfile('load');
