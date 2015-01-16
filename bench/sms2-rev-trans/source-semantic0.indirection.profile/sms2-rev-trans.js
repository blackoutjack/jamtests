
JAM.startProfile('load');
function v7() {
  var v846 = document.forms;
  var v697 = v846[0];
  var v423 = v697.elements;
  var v8 = v423[0];
  v8.value = " ";
  var v847 = document.forms;
  var v698 = v847[0];
  var v424 = v698.elements;
  var v9 = v424[4];
  v9.value = " ";
  return;
}
function v6() {
  try {
    revTrans(document);
  } catch (e$$6) {
    var v10 = "The following error was encountered: " + e$$6;
    alert(v10);
  }
  return;
}
function v5() {
  var v425 = document.main_form;
  var v11 = v425.main_submit;
  v11.focus();
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
  var v12 = arrayOfSequences[0];
  var lengthOfAlign = v12.length;
  var v426 = arrayOfSequences.length;
  var v13 = v426 < 2;
  if (v13) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v427 = arrayOfTitles.length;
  var v15 = i$$1 < v427;
  for (;v15;) {
    var v940 = arrayOfTitles[i$$1];
    var v848 = JAM.call(v940.search, v940, [/\S/], JAM.policy.p16);
    var v699 = v848 == -1;
    var v850 = !v699;
    if (v850) {
      var v941 = arrayOfSequences[i$$1];
      var v849 = JAM.call(v941.search, v941, [/\S/], JAM.policy.p16);
      v699 = v849 == -1;
    }
    var v428 = v699;
    var v701 = !v428;
    if (v701) {
      var v851 = arrayOfSequences[i$$1];
      var v700 = v851.length;
      v428 = v700 != lengthOfAlign;
    }
    var v14 = v428;
    if (v14) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v429 = arrayOfTitles.length;
    v15 = i$$1 < v429;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v996 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p16);
  var v942 = v996 == -1;
  var v998 = !v942;
  if (v998) {
    var v997 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p16);
    v942 = v997 == -1;
  }
  var v852 = v942;
  var v944 = !v852;
  if (v944) {
    var v943 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p16);
    v852 = v943 == -1;
  }
  var v702 = v852;
  var v854 = !v702;
  if (v854) {
    var v853 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p16);
    v702 = v853 == -1;
  }
  var v430 = v702;
  var v704 = !v430;
  if (v704) {
    var v703 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p16);
    v430 = v703 == -1;
  }
  var v16 = v430;
  if (v16) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v705 = formElement.value;
  var v431 = JAM.call(v705.search, v705, [/\S/], JAM.policy.p16);
  var v17 = v431 == -1;
  if (v17) {
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
  var v432 = arrayOfPatterns.length;
  var v20 = z$$2 < v432;
  for (;v20;) {
    var v706 = arrayOfPatterns[z$$2];
    var v433 = JAM.call(v706.search, v706, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p16);
    var v18 = v433 == -1;
    if (v18) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v707 = arrayOfPatterns[z$$2];
    var v434 = moreExpressionCheck(v707);
    var v19 = v434 == false;
    if (v19) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v435 = arrayOfPatterns.length;
    v20 = z$$2 < v435;
  }
  var v21 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v21);
  var v22 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v22);
  var j = 0;
  var v436 = arrayOfPatterns.length;
  var v26 = j < v436;
  for (;v26;) {
    var v708 = arrayOfPatterns[j];
    var v437 = JAM.call(v708.match, v708, [/\/.+\//], JAM.policy.p16);
    var v23 = v437 + "gi";
    if (JAM.isEval(eval)) {
      var v1114 = eval("introspect(JAM.policy.pFull) { " + v23 + " }")
    } else {
      var v1114 = JAM.call(eval, null, [v23])
    }
    geneticCodeMatchExp[j] = v1114;
    var v438 = arrayOfPatterns[j];
    var v24 = JAM.call(v438.match, v438, [/=[a-zA-Z\*]/], JAM.policy.p16);
    var v1115 = v24.toString();
    geneticCodeMatchResult[j] = v1115;
    var v25 = geneticCodeMatchResult[j];
    var v1116 = JAM.call(v25.replace, v25, [/=/g, ""], JAM.policy.p15);
    geneticCodeMatchResult[j] = v1116;
    j++;
    var v439 = arrayOfPatterns.length;
    v26 = j < v439;
  }
  var i$$2 = 0;
  var v709 = testSequence.length;
  var v440 = v709 - 3;
  var v33 = i$$2 <= v440;
  for (;v33;) {
    var v27 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v27], JAM.policy.p15);
    j = 0;
    var v441 = geneticCodeMatchExp.length;
    var v31 = j < v441;
    for (;v31;) {
      var v710 = geneticCodeMatchExp[j];
      var v442 = JAM.call(codon.search, codon, [v710], JAM.policy.p17);
      var v30 = v442 != -1;
      if (v30) {
        var v29 = oneMatch == true;
        if (v29) {
          var v443 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v28 = v443 + ".";
          alert(v28);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v444 = geneticCodeMatchExp.length;
      v31 = j < v444;
    }
    var v32 = oneMatch == false;
    if (v32) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v711 = testSequence.length;
    var v445 = v711 - 3;
    v33 = i$$2 <= v445;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v446 = arrayOfPatterns$$1.length;
  var v35 = z$$3 < v446;
  for (;v35;) {
    var v712 = arrayOfPatterns$$1[z$$3];
    var v447 = JAM.call(v712.search, v712, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p16);
    var v34 = v447 != -1;
    if (v34) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v448 = arrayOfPatterns$$1.length;
    v35 = z$$3 < v448;
  }
  var i$$3 = 0;
  var v449 = arrayOfPatterns$$1.length;
  var v39 = i$$3 < v449;
  for (;v39;) {
    var v713 = arrayOfPatterns$$1[i$$3];
    var v450 = "[" + v713;
    var v36 = v450 + "]";
    var re = new RegExp(v36, "gi");
    var j$$1 = i$$3 + 1;
    var v451 = arrayOfPatterns$$1.length;
    var v38 = j$$1 < v451;
    for (;v38;) {
      var v714 = arrayOfPatterns$$1[j$$1];
      var v452 = JAM.call(v714.search, v714, [re], JAM.policy.p17);
      var v37 = v452 != -1;
      if (v37) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v453 = arrayOfPatterns$$1.length;
      v38 = j$$1 < v453;
    }
    i$$3++;
    var v454 = arrayOfPatterns$$1.length;
    v39 = i$$3 < v454;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v455 = arrayOfPatterns$$2.length;
  var v42 = z$$4 < v455;
  for (;v42;) {
    var v715 = arrayOfPatterns$$2[z$$4];
    var v456 = JAM.call(v715.search, v715, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p16);
    var v40 = v456 == -1;
    if (v40) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v716 = arrayOfPatterns$$2[z$$4];
    var v457 = moreExpressionCheck(v716);
    var v41 = v457 == false;
    if (v41) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v458 = arrayOfPatterns$$2.length;
    v42 = z$$4 < v458;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v855 = getSequenceFromFasta(text$$7);
  var v717 = JAM.call(v855.replace, v855, [/[^A-Za-z]/g, ""], JAM.policy.p15);
  var v459 = v717.length;
  var v44 = v459 > maxInput;
  if (v44) {
    var v460 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v43 = v460 + " characters.";
    alert(v43);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v461 = text$$8.length;
  var v46 = v461 > maxInput$$1;
  if (v46) {
    var v462 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v45 = v462 + " characters.";
    alert(v45);
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
  var v47 = outputWindow.document;
  JAM.call(v47.write, v47, ["</form>"], JAM.policy.p9);
  return true;
}
function closePre() {
  var v48 = outputWindow.document;
  JAM.call(v48.write, v48, ["</div>"], JAM.policy.p9);
  var v49 = outputWindow.document;
  JAM.call(v49.write, v49, ["</pre>\n"], JAM.policy.p9);
  return;
}
function closeTextArea() {
  var v50 = outputWindow.document;
  JAM.call(v50.write, v50, ["</textarea>"], JAM.policy.p9);
  return true;
}
function closeWindow() {
  var v51 = outputWindow.document;
  JAM.call(v51.write, v51, ["</body>\n</html>\n"], JAM.policy.p9);
  outputWindow.status = "Done.";
  var v52 = outputWindow.document;
  v52.close();
  return true;
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
  var v463 = alignArray.length;
  var v53 = v463 < 3;
  if (v53) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v464 = alignArray.length;
  var v55 = i$$4 < v464;
  for (;v55;) {
    var v718 = alignArray[i$$4];
    var v465 = JAM.call(v718.search, v718, [/[^\s]+\s/], JAM.policy.p16);
    var v54 = v465 == -1;
    if (v54) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v466 = alignArray.length;
    v55 = i$$4 < v466;
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
  var v467 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p16);
  var v58 = v467 != -1;
  if (v58) {
    var v57 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p17);
    for (;v57;) {
      var v56 = matchArray[0];
      JAM.call(arrayOfFasta.push, arrayOfFasta, [v56], JAM.policy.p17);
      v57 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p17);
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v468 = sequence$$2.length;
  var v59 = "&gt;results for " + v468;
  var stringToReturn = v59 + " residue sequence ";
  var v469 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p16);
  var v61 = v469 != -1;
  if (v61) {
    var v470 = stringToReturn + '"';
    var v60 = v470 + fastaSequenceTitle;
    stringToReturn = v60 + '"';
  }
  var v471 = stringToReturn + ' starting "';
  var v472 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p13);
  var v62 = v471 + v472;
  stringToReturn = v62 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v473 = sequenceOne.length;
  var v63 = "Search results for " + v473;
  var stringToReturn$$1 = v63 + " residue sequence ";
  var v474 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p16);
  var v65 = v474 != -1;
  if (v65) {
    var v475 = stringToReturn$$1 + '"';
    var v64 = v475 + fastaSequenceTitleOne;
    stringToReturn$$1 = v64 + '"';
  }
  var v476 = stringToReturn$$1 + ' starting "';
  var v477 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p13);
  var v66 = v476 + v477;
  stringToReturn$$1 = v66 + '"\n';
  var v478 = stringToReturn$$1 + "and ";
  var v479 = sequenceTwo.length;
  var v67 = v478 + v479;
  stringToReturn$$1 = v67 + " residue sequence ";
  var v480 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p16);
  var v69 = v480 != -1;
  if (v69) {
    var v481 = stringToReturn$$1 + '"';
    var v68 = v481 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v68 + '"';
  }
  var v482 = stringToReturn$$1 + ' starting "';
  var v483 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p13);
  var v70 = v482 + v483;
  stringToReturn$$1 = v70 + '"';
  var v71 = '<div class="info">' + stringToReturn$$1;
  return v71 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v72 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v72);
  var j$$2 = 0;
  var v484 = arrayOfPatterns$$3.length;
  var v74 = j$$2 < v484;
  for (;v74;) {
    var v719 = arrayOfPatterns$$3[j$$2];
    var v485 = JAM.call(v719.match, v719, [/\/.+\//], JAM.policy.p16);
    var v73 = v485 + "gi";
    if (JAM.isEval(eval)) {
      var v1117 = eval("introspect(JAM.policy.pFull) { " + v73 + " }")
    } else {
      var v1117 = JAM.call(eval, null, [v73])
    }
    geneticCodeMatchExp$$1[j$$2] = v1117;
    j$$2++;
    var v486 = arrayOfPatterns$$3.length;
    v74 = j$$2 < v486;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v75 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v75);
  var j$$3 = 0;
  var v487 = arrayOfPatterns$$4.length;
  var v78 = j$$3 < v487;
  for (;v78;) {
    var v488 = arrayOfPatterns$$4[j$$3];
    var v76 = JAM.call(v488.match, v488, [/=[a-zA-Z\*]/], JAM.policy.p16);
    var v1118 = v76.toString();
    geneticCodeMatchResult$$1[j$$3] = v1118;
    var v77 = geneticCodeMatchResult$$1[j$$3];
    var v1119 = JAM.call(v77.replace, v77, [/=/g, ""], JAM.policy.p15);
    geneticCodeMatchResult$$1[j$$3] = v1119;
    j$$3++;
    var v489 = arrayOfPatterns$$4.length;
    v78 = j$$3 < v489;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v490 = sequence$$3.length;
  var v79 = "Results for " + v490;
  var stringToReturn$$2 = v79 + " residue sequence ";
  var v491 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p16);
  var v81 = v491 != -1;
  if (v81) {
    var v492 = stringToReturn$$2 + '"';
    var v80 = v492 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v80 + '"';
  }
  var v493 = stringToReturn$$2 + ' starting "';
  var v494 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p13);
  var v82 = v493 + v494;
  stringToReturn$$2 = v82 + '"';
  var v83 = '<div class="info">' + stringToReturn$$2;
  return v83 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v720 = "Results for " + topology;
  var v495 = v720 + " ";
  var v496 = sequence$$4.length;
  var v84 = v495 + v496;
  var stringToReturn$$3 = v84 + " residue sequence ";
  var v497 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p16);
  var v86 = v497 != -1;
  if (v86) {
    var v498 = stringToReturn$$3 + '"';
    var v85 = v498 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v85 + '"';
  }
  var v499 = stringToReturn$$3 + ' starting "';
  var v500 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p13);
  var v87 = v499 + v500;
  stringToReturn$$3 = v87 + '"';
  var v88 = '<div class="info">' + stringToReturn$$3;
  return v88 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v501 = sequenceOne$$1.length;
  var v89 = "Alignment results for " + v501;
  var stringToReturn$$4 = v89 + " residue sequence ";
  var v502 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p16);
  var v91 = v502 != -1;
  if (v91) {
    var v503 = stringToReturn$$4 + '"';
    var v90 = v503 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v90 + '"';
  }
  var v504 = stringToReturn$$4 + ' starting "';
  var v505 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p13);
  var v92 = v504 + v505;
  stringToReturn$$4 = v92 + '"\n';
  var v506 = stringToReturn$$4 + "and ";
  var v507 = sequenceTwo$$1.length;
  var v93 = v506 + v507;
  stringToReturn$$4 = v93 + " residue sequence ";
  var v508 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p16);
  var v95 = v508 != -1;
  if (v95) {
    var v509 = stringToReturn$$4 + '"';
    var v94 = v509 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v94 + '"';
  }
  var v510 = stringToReturn$$4 + ' starting "';
  var v511 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p13);
  var v96 = v510 + v511;
  stringToReturn$$4 = v96 + '"';
  var v97 = '<div class="info">' + stringToReturn$$4;
  return v97 + "</div>\n";
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v99 = j$$4 < lengthOut;
  for (;v99;) {
    var v512 = Math.random();
    var v513 = components.length;
    var v98 = v512 * v513;
    tempNum = JAM.call(Math.floor, Math, [v98], JAM.policy.p16);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p17);
    j$$4++;
    v99 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p9);
}
function getSequenceFromFasta(sequenceRecord) {
  var v514 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p16);
  var v100 = v514 != -1;
  if (v100) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p15);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v515 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p16);
  var v102 = v515 != -1;
  if (v102) {
    var v101 = JAM.call(sequenceRecord$$1.match, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p15);
    fastaTitle = v101.toString();
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\>|[\f\n\r]/g, ""], JAM.policy.p15);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\s{2,}/g, " "], JAM.policy.p15);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/[\<\>]/gi, ""], JAM.policy.p15);
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  var v1080 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p16);
  var v1072 = v1080 != -1;
  var v1082 = !v1072;
  if (v1082) {
    var v1081 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p16);
    v1072 = v1081 != -1;
  }
  var v1061 = v1072;
  var v1074 = !v1061;
  if (v1074) {
    var v1073 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p16);
    v1061 = v1073 != -1;
  }
  var v1048 = v1061;
  var v1063 = !v1048;
  if (v1063) {
    var v1062 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p16);
    v1048 = v1062 != -1;
  }
  var v1032 = v1048;
  var v1050 = !v1032;
  if (v1050) {
    var v1049 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p16);
    v1032 = v1049 != -1;
  }
  var v1016 = v1032;
  var v1034 = !v1016;
  if (v1034) {
    var v1033 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p16);
    v1016 = v1033 != -1;
  }
  var v999 = v1016;
  var v1018 = !v999;
  if (v1018) {
    var v1017 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p16);
    v999 = v1017 != -1;
  }
  var v945 = v999;
  var v1001 = !v945;
  if (v1001) {
    var v1000 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p16);
    v945 = v1000 != -1;
  }
  var v856 = v945;
  var v947 = !v856;
  if (v947) {
    var v946 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p16);
    v856 = v946 != -1;
  }
  var v721 = v856;
  var v858 = !v721;
  if (v858) {
    var v857 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p16);
    v721 = v857 != -1;
  }
  var v516 = v721;
  var v723 = !v516;
  if (v723) {
    var v722 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p16);
    v516 = v722 != -1;
  }
  var v103 = v516;
  if (v103) {
    return false;
  }
  return true;
}
function openForm() {
  var v104 = outputWindow.document;
  JAM.call(v104.write, v104, ['<form action="">\n'], JAM.policy.p9);
  return true;
}
function openPre() {
  var v105 = outputWindow.document;
  JAM.call(v105.write, v105, ["<pre>"], JAM.policy.p9);
  var v106 = outputWindow.document;
  JAM.call(v106.write, v106, ['<div class="pre">'], JAM.policy.p9);
  return;
}
function openTextArea() {
  var v107 = outputWindow.document;
  JAM.call(v107.write, v107, ['<br /><textarea rows="6" cols="61">\n'], JAM.policy.p9);
  return true;
}
function openWindow(title$$6) {
  _openWindow(title$$6, true);
  return;
}
function _openWindow(title$$7, isColor) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  outputWindow.focus();
  var v108 = outputWindow.document;
  var v859 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v724 = v859 + "<head>\n";
  var v517 = v724 + "<title>Sequence Manipulation Suite</title>\n";
  var v109 = v517 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v108.write, v108, [v109], JAM.policy.p17);
  if (isColor) {
    var v110 = outputWindow.document;
    var v1099 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1093 = v1099 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1088 = v1093 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1083 = v1088 + "div.info {font-weight: bold}\n";
    var v1075 = v1083 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1064 = v1075 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v1051 = v1064 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v1035 = v1051 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1019 = v1035 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v1002 = v1019 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v948 = v1002 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v860 = v948 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v725 = v860 + "td.many {color: #000000}\n";
    var v518 = v725 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v111 = v518 + "</style>\n";
    JAM.call(v110.write, v110, [v111], JAM.policy.p17);
  } else {
    var v112 = outputWindow.document;
    var v1104 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1100 = v1104 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1094 = v1100 + "div.title {display: none}\n";
    var v1089 = v1094 + "div.info {font-weight: bold}\n";
    var v1084 = v1089 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1076 = v1084 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1065 = v1076 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v1052 = v1065 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1036 = v1052 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1020 = v1036 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1003 = v1020 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v949 = v1003 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v861 = v949 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v726 = v861 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v519 = v726 + "img {display: none}\n";
    var v113 = v519 + "</style>\n";
    JAM.call(v112.write, v112, [v113], JAM.policy.p17);
  }
  var v114 = outputWindow.document;
  var v862 = "</head>\n" + '<body class="main">\n';
  var v727 = v862 + '<div class="title">';
  var v520 = v727 + title$$7;
  var v115 = v520 + " results</div>\n";
  JAM.call(v114.write, v114, [v115], JAM.policy.p17);
  outputWindow.status = "Please Wait.";
  return true;
}
function openWindowAlign(title$$8) {
  _openWindowAlign(title$$8, true);
  return;
}
function _openWindowAlign(title$$9, isBackground) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  outputWindow.focus();
  var v116 = outputWindow.document;
  var v863 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v728 = v863 + "<head>\n";
  var v521 = v728 + "<title>Sequence Manipulation Suite</title>\n";
  var v117 = v521 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v116.write, v116, [v117], JAM.policy.p17);
  if (isBackground) {
    var v118 = outputWindow.document;
    var v1101 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1095 = v1101 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1090 = v1095 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1085 = v1090 + "div.info {font-weight: bold}\n";
    var v1077 = v1085 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v1066 = v1077 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v1053 = v1066 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v1037 = v1053 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v1021 = v1037 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v1004 = v1021 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v950 = v1004 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v864 = v950 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v729 = v864 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v522 = v729 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v119 = v522 + "</style>\n";
    JAM.call(v118.write, v118, [v119], JAM.policy.p17);
  } else {
    var v120 = outputWindow.document;
    var v1108 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1105 = v1108 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1102 = v1105 + "div.title {display: none}\n";
    var v1096 = v1102 + "div.info {font-weight: bold}\n";
    var v1091 = v1096 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1086 = v1091 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v1078 = v1086 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v1067 = v1078 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v1054 = v1067 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v1038 = v1054 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v1022 = v1038 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v1005 = v1022 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v951 = v1005 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v865 = v951 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v730 = v865 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v523 = v730 + "img {display: none}\n";
    var v121 = v523 + "</style>\n";
    JAM.call(v120.write, v120, [v121], JAM.policy.p17);
  }
  var v122 = outputWindow.document;
  var v866 = "</head>\n" + '<body class="main">\n';
  var v731 = v866 + '<div class="title">';
  var v524 = v731 + title$$9;
  var v123 = v524 + " results</div>\n";
  JAM.call(v122.write, v122, [v123], JAM.policy.p17);
  outputWindow.status = "Please Wait.";
  return true;
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
function removeNonProteinAllowDegen(sequence$$10) {
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
  var v525 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p16);
  var v124 = v525 != -1;
  if (v124) {
    tempDnaArray = JAM.call(dnaSequence$$1.match, dnaSequence$$1, [/./g], JAM.policy.p16);
    tempDnaArray = tempDnaArray.reverse();
    dnaSequence$$1 = JAM.call(tempDnaArray.join, tempDnaArray, [""], JAM.policy.p9);
  }
  return dnaSequence$$1;
}
function rightNum(theNumber, sequenceToAppend, lengthOfColumn, tabIn) {
  var j$$5 = 0;
  var tempString = "";
  theNumber = theNumber.toString();
  j$$5 = theNumber.length;
  var v125 = j$$5 < lengthOfColumn;
  for (;v125;) {
    tempString = tempString + " ";
    j$$5++;
    v125 = j$$5 < lengthOfColumn;
  }
  var v126 = tempString + theNumber;
  theNumber = v126 + " ";
  var v127 = sequenceToAppend + theNumber;
  sequenceToAppend = v127 + tabIn;
  return sequenceToAppend;
}
function testScript() {
  function v1(str$$7, p1$$1, offset$$9, s$$3) {
    return p1$$1 + "X";
  }
  var testArray = new Array;
  var testString = "1234567890";
  JAM.call(testArray.push, testArray, [testString], JAM.policy.p17);
  var v526 = testArray[0];
  var v128 = v526 != testString;
  if (v128) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v527 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p17);
  var v129 = v527 == -1;
  if (v129) {
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
  var v130 = !caughtException;
  if (v130) {
    alert("Exception handling not supported. See browser compatibility page.");
  }
  testString = "123";
  testString = JAM.call(testString.replace, testString, [/(\d)/g, v1], JAM.policy.p15);
  var v131 = testString != "1X2X3X";
  if (v131) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false;
  }
  var testNum = 2489.8237;
  var v528 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p12);
  var v132 = v528 != 2489.824;
  if (v132) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v529 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p12);
  var v133 = v529 != 2489.8;
  if (v133) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v530 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p16);
  var v134 = v530 == -1;
  if (v134) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v952 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p16);
  var v867 = v952 == -1;
  var v954 = !v867;
  if (v954) {
    var v953 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p16);
    v867 = v953 == -1;
  }
  var v732 = v867;
  var v869 = !v732;
  if (v869) {
    var v868 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p16);
    v732 = v868 == -1;
  }
  var v531 = v732;
  var v734 = !v531;
  if (v734) {
    var v733 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p16);
    v531 = v733 == -1;
  }
  var v135 = v531;
  if (v135) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v532 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p16);
  var v136 = v532 == -1;
  if (v136) {
    alert("Please enter a number.");
    return false;
  }
  var v138 = theNumber$$2 > maxInput$$2;
  if (v138) {
    var v533 = "Please enter a number less than or equal to " + maxInput$$2;
    var v137 = v533 + ".";
    alert(v137);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v534 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p16);
  var v139 = v534 != -1;
  if (v139) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v535 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p16);
  var v140 = v535 != -1;
  if (v140) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v955 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p16);
  var v870 = v955 == -1;
  var v957 = !v870;
  if (v957) {
    var v956 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p16);
    v870 = v956 == -1;
  }
  var v735 = v870;
  var v872 = !v735;
  if (v872) {
    var v871 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p16);
    v735 = v871 == -1;
  }
  var v536 = v735;
  var v737 = !v536;
  if (v737) {
    var v736 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p16);
    v536 = v736 == -1;
  }
  var v141 = v536;
  if (v141) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v958 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p16);
  var v873 = v958 == -1;
  var v960 = !v873;
  if (v960) {
    var v959 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p16);
    v873 = v959 == -1;
  }
  var v738 = v873;
  var v875 = !v738;
  if (v875) {
    var v874 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p16);
    v738 = v874 == -1;
  }
  var v537 = v738;
  var v740 = !v537;
  if (v740) {
    var v739 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p16);
    v537 = v739 == -1;
  }
  var v142 = v537;
  if (v142) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v538 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p16);
  var v143 = v538 == -1;
  if (v143) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v961 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p16);
  var v876 = v961 == -1;
  var v963 = !v876;
  if (v963) {
    var v962 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p16);
    v876 = v962 == -1;
  }
  var v741 = v876;
  var v878 = !v741;
  if (v878) {
    var v877 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p16);
    v741 = v877 == -1;
  }
  var v539 = v741;
  var v743 = !v539;
  if (v743) {
    var v742 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p16);
    v539 = v742 == -1;
  }
  var v144 = v539;
  if (v144) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v540 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p16);
  var v145 = v540 == -1;
  if (v145) {
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
  var v152 = i$$5 < stopBase;
  for (;v152;) {
    var v146 = i$$5 + 1;
    lineOfText = rightNum(v146, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v541 = basePerLine / groupSize;
    var v149 = j$$6 <= v541;
    for (;v149;) {
      var v148 = k < groupSize;
      for (;v148;) {
        var v542 = k + i$$5;
        var v147 = JAM.call(text$$10.charAt, text$$10, [v542], JAM.policy.p17);
        lineOfText = lineOfText + v147;
        k = k + 1;
        v148 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v543 = basePerLine / groupSize;
      v149 = j$$6 <= v543;
    }
    var v150 = outputWindow.document;
    var v151 = lineOfText + "\n";
    JAM.call(v150.write, v150, [v151], JAM.policy.p17);
    lineOfText = "";
    v152 = i$$5 < stopBase;
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
    var v544 = adjustment < 0;
    if (v544) {
      v544 = adjusted >= 0;
    }
    var v153 = v544;
    if (v153) {
      adjusted++;
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
  var v186 = i$$6 < stopBase$$2;
  for (;v186;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v545 = basePerLine$$2 / groupSize$$2;
    var v162 = j$$7 <= v545;
    for (;v162;) {
      var v157 = k$$1 < groupSize$$2;
      for (;v157;) {
        var v546 = i$$6 + k$$1;
        var v154 = v546 >= stopBase$$2;
        if (v154) {
          break;
        }
        var v155 = lineOfText$$1;
        var v547 = k$$1 + i$$6;
        var v156 = JAM.call(text$$12.charAt, text$$12, [v547], JAM.policy.p17);
        lineOfText$$1 = v155 + v156;
        k$$1 = k$$1 + 1;
        v157 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v160 = numberPosition$$1 == "above";
      if (v160) {
        var v158 = aboveNum;
        var v548 = adjustNumbering(i$$6, numberingAdjustment);
        var v159 = rightNum(v548, "", groupSize$$2, tabIn$$3);
        aboveNum = v158 + v159;
      }
      var v161 = i$$6 >= stopBase$$2;
      if (v161) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v549 = basePerLine$$2 / groupSize$$2;
      v162 = j$$7 <= v549;
    }
    var v185 = numberPosition$$1 == "left";
    if (v185) {
      var v163 = outputWindow.document;
      var v879 = adjustNumbering(lineNum, numberingAdjustment);
      var v744 = rightNum(v879, "", 8, tabIn$$3);
      var v550 = v744 + lineOfText$$1;
      var v164 = v550 + "\n";
      JAM.call(v163.write, v163, [v164], JAM.policy.p17);
      var v168 = strands$$1 == "two";
      if (v168) {
        var v165 = outputWindow.document;
        var v880 = adjustNumbering(lineNum, numberingAdjustment);
        var v745 = rightNum(v880, "", 8, tabIn$$3);
        var v746 = complement(lineOfText$$1);
        var v551 = v745 + v746;
        var v166 = v551 + "\n";
        JAM.call(v165.write, v165, [v166], JAM.policy.p17);
        var v167 = outputWindow.document;
        JAM.call(v167.write, v167, ["\n"], JAM.policy.p9);
      }
    } else {
      var v184 = numberPosition$$1 == "right";
      if (v184) {
        var v169 = outputWindow.document;
        var v747 = lineOfText$$1;
        var v748 = adjustNumbering(i$$6, numberingAdjustment);
        var v552 = v747 + v748;
        var v170 = v552 + "\n";
        JAM.call(v169.write, v169, [v170], JAM.policy.p17);
        var v174 = strands$$1 == "two";
        if (v174) {
          var v171 = outputWindow.document;
          var v749 = complement(lineOfText$$1);
          var v750 = adjustNumbering(i$$6, numberingAdjustment);
          var v553 = v749 + v750;
          var v172 = v553 + "\n";
          JAM.call(v171.write, v171, [v172], JAM.policy.p17);
          var v173 = outputWindow.document;
          JAM.call(v173.write, v173, ["\n"], JAM.policy.p9);
        }
      } else {
        var v183 = numberPosition$$1 == "above";
        if (v183) {
          var v175 = outputWindow.document;
          var v176 = aboveNum + "\n";
          JAM.call(v175.write, v175, [v176], JAM.policy.p17);
          var v177 = outputWindow.document;
          var v178 = lineOfText$$1 + "\n";
          JAM.call(v177.write, v177, [v178], JAM.policy.p17);
          var v182 = strands$$1 == "two";
          if (v182) {
            var v179 = outputWindow.document;
            var v554 = complement(lineOfText$$1);
            var v180 = v554 + "\n";
            JAM.call(v179.write, v179, [v180], JAM.policy.p17);
            var v181 = outputWindow.document;
            JAM.call(v181.write, v181, ["\n"], JAM.policy.p9);
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v186 = i$$6 < stopBase$$2;
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
  var v205 = i$$7 < stopBase$$3;
  for (;v205;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v555 = basePerLine$$3 / groupSize$$3;
    var v193 = j$$8 <= v555;
    for (;v193;) {
      var v189 = k$$2 < groupSize$$3;
      for (;v189;) {
        var v556 = i$$7 + k$$2;
        var v187 = v556 >= stopBase$$3;
        if (v187) {
          break;
        }
        var v557 = k$$2 + i$$7;
        var v188 = JAM.call(text$$13.charAt, text$$13, [v557], JAM.policy.p17);
        lineOfText$$2 = lineOfText$$2 + v188;
        k$$2 = k$$2 + 1;
        v189 = k$$2 < groupSize$$3;
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v191 = numberPosition$$2 == "above";
      if (v191) {
        var v190 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = aboveNum$$1 + v190;
      }
      var v192 = i$$7 >= stopBase$$3;
      if (v192) {
        break;
      }
      k$$2 = 0;
      j$$8++;
      var v558 = basePerLine$$3 / groupSize$$3;
      v193 = j$$8 <= v558;
    }
    var v204 = numberPosition$$2 == "left";
    if (v204) {
      var v194 = outputWindow.document;
      var v751 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v559 = v751 + lineOfText$$2;
      var v195 = v559 + "\n";
      JAM.call(v194.write, v194, [v195], JAM.policy.p17);
    } else {
      var v203 = numberPosition$$2 == "right";
      if (v203) {
        var v196 = outputWindow.document;
        var v560 = lineOfText$$2 + i$$7;
        var v197 = v560 + "\n";
        JAM.call(v196.write, v196, [v197], JAM.policy.p17);
      } else {
        var v202 = numberPosition$$2 == "above";
        if (v202) {
          var v198 = outputWindow.document;
          var v199 = aboveNum$$1 + "\n";
          JAM.call(v198.write, v198, [v199], JAM.policy.p17);
          var v200 = outputWindow.document;
          var v201 = lineOfText$$2 + "\n";
          JAM.call(v200.write, v200, [v201], JAM.policy.p17);
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v205 = i$$7 < stopBase$$3;
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
  var v881 = sequence$$13.length;
  var v752 = v881 <= firstIndexToMutate;
  var v882 = !v752;
  if (v882) {
    v752 = lastIndexToMutate < 0;
  }
  var v561 = v752;
  var v753 = !v561;
  if (v753) {
    v561 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v206 = v561;
  if (v206) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v214 = i$$8 < numMut;
  for (;v214;) {
    maxNum = sequence$$13.length;
    var v562 = Math.random();
    var v207 = v562 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v207], JAM.policy.p16);
    var v563 = randNum < firstIndexToMutate;
    var v754 = !v563;
    if (v754) {
      v563 = randNum > lastIndexToMutate;
    }
    var v208 = v563;
    if (v208) {
      numMut++;
      i$$8++;
      v214 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p16);
    needNewChar = true;
    for (;needNewChar;) {
      var v564 = Math.random();
      var v565 = components$$1.length;
      var v209 = v564 * v565;
      componentsIndex = JAM.call(Math.round, Math, [v209], JAM.policy.p16);
      var v566 = components$$1.length;
      var v210 = componentsIndex == v566;
      if (v210) {
        componentsIndex = 0;
      }
      var v567 = components$$1[componentsIndex];
      var v211 = v567 != currentChar;
      if (v211) {
        needNewChar = false;
      }
    }
    var v568 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p13);
    var v569 = components$$1[componentsIndex];
    var v212 = v568 + v569;
    var v570 = randNum + 1;
    var v571 = sequence$$13.length;
    var v213 = JAM.call(sequence$$13.substring, sequence$$13, [v570, v571], JAM.policy.p27);
    sequence$$13 = v212 + v213;
    i$$8++;
    v214 = i$$8 < numMut;
  }
  var v215 = outputWindow.document;
  var v216 = addReturns(sequence$$13);
  JAM.call(v215.write, v215, [v216], JAM.policy.p17);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v221 = j$$9 < lengthOut$$1;
  for (;v221;) {
    var v572 = Math.random();
    var v573 = components$$2.length;
    var v217 = v572 * v573;
    tempNum$$1 = JAM.call(Math.floor, Math, [v217], JAM.policy.p16);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v574 = sequence$$14.length;
    var v220 = v574 == 60;
    if (v220) {
      var v218 = outputWindow.document;
      var v219 = sequence$$14 + "\n";
      JAM.call(v218.write, v218, [v219], JAM.policy.p17);
      sequence$$14 = "";
    }
    j$$9++;
    v221 = j$$9 < lengthOut$$1;
  }
  var v222 = outputWindow.document;
  var v223 = sequence$$14 + "\n";
  JAM.call(v222.write, v222, [v223], JAM.policy.p17);
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
  var v227 = dnaConformation == "circular";
  if (v227) {
    var v224 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    shiftValue = v224.length;
    var v883 = sequence$$15.length;
    var v755 = v883 - lookAhead;
    var v756 = sequence$$15.length;
    var v575 = JAM.call(sequence$$15.substring, sequence$$15, [v755, v756], JAM.policy.p27);
    var v225 = v575 + sequence$$15;
    var v226 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    sequence$$15 = v225 + v226;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v228 = outputWindow.document;
  JAM.call(v228.write, v228, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p9);
  var v229 = outputWindow.document;
  var v884 = '<tr><td class="title" width="200px">' + "Site:";
  var v757 = v884 + '</td><td class="title">';
  var v576 = v757 + "Positions:";
  var v230 = v576 + "</td></tr>\n";
  JAM.call(v229.write, v229, [v230], JAM.policy.p17);
  var i$$9 = 0;
  var v577 = arrayOfItems.length;
  var v246 = i$$9 < v577;
  for (;v246;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v578 = arrayOfItems[i$$9];
    var v231 = JAM.call(v578.match, v578, [/\/.+\//], JAM.policy.p16);
    matchExp = v231 + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    var v885 = arrayOfItems[i$$9];
    var v758 = JAM.call(v885.match, v885, [/\)\D*\d+/], JAM.policy.p16);
    var v579 = v758.toString();
    var v232 = JAM.call(v579.replace, v579, [/\)\D*/, ""], JAM.policy.p15);
    cutDistance = parseFloat(v232);
    var v238 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p17);
    for (;v238;) {
      var v233 = matchExp.lastIndex;
      matchPosition = v233 - cutDistance;
      var v580 = matchPosition >= lowerLimit;
      if (v580) {
        v580 = matchPosition < upperLimit;
      }
      var v236 = v580;
      if (v236) {
        timesFound++;
        var v234 = tempString$$1 + ", ";
        var v581 = matchPosition - shiftValue;
        var v235 = v581 + 1;
        tempString$$1 = v234 + v235;
      }
      var v582 = matchExp.lastIndex;
      var v759 = RegExp.lastMatch;
      var v583 = v759.length;
      var v237 = v582 - v583;
      matchExp.lastIndex = v237 + 1;
      v238 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p17);
    }
    var v584 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p16);
    var v239 = v584 != -1;
    if (v239) {
      tempString$$1 = JAM.call(tempString$$1.replace, tempString$$1, [/none,\s*/, ""], JAM.policy.p15);
    }
    var v243 = timesFound == 0;
    if (v243) {
      backGroundClass = "none";
    } else {
      var v242 = timesFound == 1;
      if (v242) {
        backGroundClass = "one";
      } else {
        var v241 = timesFound == 2;
        if (v241) {
          backGroundClass = "two";
        } else {
          var v240 = timesFound == 3;
          if (v240) {
            backGroundClass = "three";
          } else {
            backGroundClass = "many";
          }
        }
      }
    }
    var v244 = outputWindow.document;
    var v1039 = '<tr><td class="' + backGroundClass;
    var v1023 = v1039 + '">';
    var v1068 = arrayOfItems[i$$9];
    var v1055 = JAM.call(v1068.match, v1068, [/\([^\(]+\)/], JAM.policy.p16);
    var v1040 = v1055.toString();
    var v1024 = JAM.call(v1040.replace, v1040, [/\(|\)/g, ""], JAM.policy.p15);
    var v1006 = v1023 + v1024;
    var v964 = v1006 + '</td><td class="';
    var v886 = v964 + backGroundClass;
    var v760 = v886 + '">';
    var v585 = v760 + tempString$$1;
    var v245 = v585 + "</td></tr>\n";
    JAM.call(v244.write, v244, [v245], JAM.policy.p17);
    timesFound = 0;
    i$$9++;
    var v586 = arrayOfItems.length;
    v246 = i$$9 < v586;
  }
  var v247 = outputWindow.document;
  JAM.call(v247.write, v247, ["</tbody></table>\n"], JAM.policy.p9);
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v248 = outputWindow.document;
  JAM.call(v248.write, v248, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p9);
  var v249 = outputWindow.document;
  var v1007 = '<tr><td class="title">' + "Pattern:";
  var v965 = v1007 + '</td><td class="title">';
  var v887 = v965 + "Times found:";
  var v761 = v887 + '</td><td class="title">';
  var v587 = v761 + "Percentage:";
  var v250 = v587 + "</td></tr>\n";
  JAM.call(v249.write, v249, [v250], JAM.policy.p17);
  var i$$10 = 0;
  var v588 = arrayOfItems$$1.length;
  var v259 = i$$10 < v588;
  for (;v259;) {
    var tempNumber = 0;
    var v589 = arrayOfItems$$1[i$$10];
    var v251 = JAM.call(v589.match, v589, [/\/[^\/]+\//], JAM.policy.p16);
    var matchExp$$1 = v251 + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    var v590 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p17);
    var v253 = v590 != -1;
    if (v253) {
      var v252 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p17);
      tempNumber = v252.length;
    }
    var percentage = 0;
    var v762 = originalLength + 1;
    var v966 = arrayOfItems$$1[i$$10];
    var v888 = JAM.call(v966.match, v966, [/\d+/], JAM.policy.p16);
    var v763 = parseFloat(v888);
    var v591 = v762 - v763;
    var v256 = v591 > 0;
    if (v256) {
      var v254 = 100 * tempNumber;
      var v592 = originalLength + 1;
      var v889 = arrayOfItems$$1[i$$10];
      var v764 = JAM.call(v889.match, v889, [/\d+/], JAM.policy.p16);
      var v593 = parseFloat(v764);
      var v255 = v592 - v593;
      percentage = v254 / v255;
    }
    var v257 = outputWindow.document;
    var v1069 = arrayOfItems$$1[i$$10];
    var v1056 = JAM.call(v1069.match, v1069, [/\([^\(]+\)\b/], JAM.policy.p16);
    var v1041 = v1056.toString();
    var v1025 = JAM.call(v1041.replace, v1041, [/\(|\)/g, ""], JAM.policy.p15);
    var v1008 = "<tr><td>" + v1025;
    var v967 = v1008 + "</td><td>";
    var v890 = v967 + tempNumber;
    var v765 = v890 + "</td><td>";
    var v766 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p12);
    var v594 = v765 + v766;
    var v258 = v594 + "</td></tr>\n";
    JAM.call(v257.write, v257, [v258], JAM.policy.p17);
    i$$10++;
    var v595 = arrayOfItems$$1.length;
    v259 = i$$10 < v595;
  }
  var v260 = outputWindow.document;
  JAM.call(v260.write, v260, ["</tbody></table>\n"], JAM.policy.p9);
  return true;
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v596 = sequence$$17.length;
  var v267 = v596 > 0;
  for (;v267;) {
    maxNum$$1 = sequence$$17.length;
    var v597 = Math.random();
    var v261 = v597 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v261], JAM.policy.p16);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p16);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p13);
    var v262 = randNum$$1 + 1;
    var v263 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v262, v263], JAM.policy.p15);
    sequence$$17 = tempString1 + tempString2;
    var v598 = tempSeq.length;
    var v266 = v598 == 60;
    if (v266) {
      var v264 = outputWindow.document;
      var v265 = tempSeq + "\n";
      JAM.call(v264.write, v264, [v265], JAM.policy.p17);
      tempSeq = "";
    }
    var v599 = sequence$$17.length;
    v267 = v599 > 0;
  }
  var v268 = outputWindow.document;
  var v269 = tempSeq + "\n";
  JAM.call(v268.write, v268, [v269], JAM.policy.p17);
  return true;
}
function revTrans(theDocument) {
  JAM.startProfile('compute');

  var newProtein = "";
  var maxInput$$3 = 2E4;
  var v600 = testScript();
  var v270 = v600 == false;
  if (v270) {
    return false;
  }
  var codonTable$$1;
  var v1042 = theDocument.forms;
  var v1026 = v1042[0];
  var v1009 = v1026.elements;
  var v968 = v1009[0];
  var v891 = checkFormElement(v968);
  var v767 = v891 == false;
  var v893 = !v767;
  if (v893) {
    var v1057 = theDocument.forms;
    var v1043 = v1057[0];
    var v1027 = v1043.elements;
    var v1010 = v1027[0];
    var v969 = v1010.value;
    var v892 = checkSequenceLength(v969, maxInput$$3);
    v767 = v892 == false;
  }
  var v601 = v767;
  var v769 = !v601;
  if (v769) {
    var v1044 = theDocument.forms;
    var v1028 = v1044[0];
    var v1011 = v1028.elements;
    var v970 = v1011[4];
    var v894 = v970.value;
    var v768 = checkCodonTable(v894);
    v601 = v768 == false;
  }
  var v271 = v601;
  if (v271) {
    return false;
  }
  var v971 = theDocument.forms;
  var v895 = v971[0];
  var v770 = v895.elements;
  var v602 = v770[4];
  var v272 = v602.value;
  codonTable$$1 = makeCodonTable(v272);
  var v273 = codonTable$$1 == false;
  if (v273) {
    return false;
  }
  openWindow("Reverse Translate");
  openPre();
  var v972 = theDocument.forms;
  var v896 = v972[0];
  var v771 = v896.elements;
  var v603 = v771[0];
  var v274 = v603.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v274);
  var i$$11 = 0;
  var v604 = arrayOfFasta$$1.length;
  var v283 = i$$11 < v604;
  for (;v283;) {
    var v275 = arrayOfFasta$$1[i$$11];
    newProtein = getSequenceFromFasta(v275);
    var v276 = arrayOfFasta$$1[i$$11];
    title = getTitleFromFasta(v276);
    newProtein = removeNonProteinAllowX(newProtein);
    var v277 = outputWindow.document;
    var v278 = getInfoFromTitleAndSequence(title, newProtein);
    JAM.call(v277.write, v277, [v278], JAM.policy.p17);
    writeRevTransSeqNoDegen(newProtein, title, codonTable$$1);
    var v279 = outputWindow.document;
    JAM.call(v279.write, v279, ["\n"], JAM.policy.p9);
    writeRevTransSeqDegen(newProtein, title, codonTable$$1);
    var v280 = outputWindow.document;
    JAM.call(v280.write, v280, ["\n"], JAM.policy.p9);
    var v281 = outputWindow.document;
    JAM.call(v281.write, v281, ["Graph of base probabilities:\n"], JAM.policy.p9);
    writeRevTransGraph(newProtein, codonTable$$1);
    var v282 = outputWindow.document;
    JAM.call(v282.write, v282, ["\n\n"], JAM.policy.p9);
    i$$11++;
    var v605 = arrayOfFasta$$1.length;
    v283 = i$$11 < v605;
  }
  closePre();
  closeWindow();

  JAM.stopProfile('compute');
  return true;
}
function writeRevTransSeqNoDegen(protein, title$$10, codonTable$$2) {
  function v2(str$$8, p1$$2, offset$$10, s$$4) {
    var v284 = codonTable$$2;
    var v606 = p1$$2.toString();
    var v285 = v606.toLowerCase();
    aminoAcid = v284[v285];
    return aminoAcid.mostCommonCodon;
  }
  var aminoAcid;
  protein = JAM.call(protein.replace, protein, [/\*/g, "z"], JAM.policy.p15);
  protein = JAM.call(protein.replace, protein, [/(.)/g, v2], JAM.policy.p15);
  var v286 = outputWindow.document;
  var v973 = "&gt;" + "reverse translation of ";
  var v897 = v973 + title$$10;
  var v772 = v897 + " to a ";
  var v773 = protein.length;
  var v607 = v772 + v773;
  var v287 = v607 + " base sequence of most likely codons.\n";
  JAM.call(v286.write, v286, [v287], JAM.policy.p17);
  var v288 = outputWindow.document;
  var v289 = addReturns(protein);
  JAM.call(v288.write, v288, [v289], JAM.policy.p17);
  var v290 = outputWindow.document;
  JAM.call(v290.write, v290, ["\n"], JAM.policy.p9);
  return true;
}
function writeRevTransSeqDegen(protein$$1, title$$11, codonTable$$3) {
  function v3(str$$9, p1$$3, offset$$11, s$$5) {
    var v291 = codonTable$$3;
    var v608 = p1$$3.toString();
    var v292 = v608.toLowerCase();
    aminoAcid$$1 = v291[v292];
    return aminoAcid$$1.degenCodon;
  }
  var aminoAcid$$1;
  protein$$1 = JAM.call(protein$$1.replace, protein$$1, [/\*/g, "z"], JAM.policy.p15);
  protein$$1 = JAM.call(protein$$1.replace, protein$$1, [/(.)/g, v3], JAM.policy.p15);
  var v293 = outputWindow.document;
  var v974 = "&gt;" + "reverse translation of ";
  var v898 = v974 + title$$11;
  var v774 = v898 + " to a ";
  var v775 = protein$$1.length;
  var v609 = v774 + v775;
  var v294 = v609 + " base sequence of consensus codons.\n";
  JAM.call(v293.write, v293, [v294], JAM.policy.p17);
  var v295 = outputWindow.document;
  var v296 = addReturns(protein$$1);
  JAM.call(v295.write, v295, [v296], JAM.policy.p17);
  var v297 = outputWindow.document;
  JAM.call(v297.write, v297, ["\n"], JAM.policy.p9);
  return true;
}
function writeRevTransGraph(protein$$2, codonTable$$4) {
  function v4(str$$10, p1$$4, offset$$12, s$$6) {
    var v298 = codonTable$$4;
    var v610 = p1$$4.toString();
    var v299 = v610.toLowerCase();
    aminoAcid$$2 = v298[v299];
    var v1113 = offset$$12 + 1;
    var v1112 = "<b>" + v1113;
    var v1111 = v1112 + "_";
    var v1110 = v1111 + str$$10;
    var v1109 = v1110 + "_";
    var v1106 = v1109 + "first</b>\n";
    var v1107 = aminoAcid$$2.rulerPosOne;
    var v1103 = v1106 + v1107;
    var v1097 = v1103 + "<b>";
    var v1098 = offset$$12 + 1;
    var v1092 = v1097 + v1098;
    var v1087 = v1092 + "_";
    var v1079 = v1087 + str$$10;
    var v1070 = v1079 + "_";
    var v1058 = v1070 + "second</b>\n";
    var v1059 = aminoAcid$$2.rulerPosTwo;
    var v1045 = v1058 + v1059;
    var v1029 = v1045 + "<b>";
    var v1030 = offset$$12 + 1;
    var v1012 = v1029 + v1030;
    var v975 = v1012 + "_";
    var v899 = v975 + str$$10;
    var v776 = v899 + "_";
    var v611 = v776 + "third</b>\n";
    var v612 = aminoAcid$$2.rulerPosThree;
    var v300 = v611 + v612;
    return v300 + "\n";
  }
  var aminoAcid$$2;
  protein$$2 = JAM.call(protein$$2.replace, protein$$2, [/\*/g, "z"], JAM.policy.p15);
  protein$$2 = JAM.call(protein$$2.replace, protein$$2, [/(.)/g, v4], JAM.policy.p15);
  var v301 = outputWindow.document;
  JAM.call(v301.write, v301, [protein$$2], JAM.policy.p17);
  return true;
}
function makeCodonTable(gcgTable) {
  gcgTable = JAM.call(gcgTable.replace, gcgTable, [/[^\.]*\.\./, ""], JAM.policy.p15);
  var tableArray = JAM.call(gcgTable.split, gcgTable, [/[\f\n\r]/], JAM.policy.p16);
  var re$$3 = /(\w+)\s+(\w+)\s+(\S+)\s+(\S+)\s+(\S+)/g;
  var matchArray$$2;
  var codonTable$$5 = new CodonTable;
  var i$$12 = 0;
  var v613 = tableArray.length;
  var v306 = i$$12 < v613;
  for (;v306;) {
    var v614 = tableArray[i$$12];
    var v305 = matchArray$$2 = JAM.call(re$$3.exec, re$$3, [v614], JAM.policy.p17);
    for (;v305;) {
      try {
        var v777 = matchArray$$2[1];
        var v615 = v777.toLowerCase();
        var v302 = codonTable$$5[v615];
        var v616 = matchArray$$2[2];
        var v778 = matchArray$$2[3];
        var v617 = parseFloat(v778);
        var v779 = matchArray$$2[4];
        var v618 = parseFloat(v779);
        var v780 = matchArray$$2[5];
        var v619 = parseFloat(v780);
        var v303 = new Codon(v616, v617, v618, v619);
        JAM.call(v302.addCodon, v302, [v303], JAM.policy.p17);
      } catch (e$$5) {
        var v1071 = matchArray$$2[1];
        var v1060 = "There is a problem with a line of the codon table: " + v1071;
        var v1046 = v1060 + " ";
        var v1047 = matchArray$$2[2];
        var v1031 = v1046 + v1047;
        var v1013 = v1031 + " ";
        var v1014 = matchArray$$2[3];
        var v976 = v1013 + v1014;
        var v900 = v976 + " ";
        var v901 = matchArray$$2[4];
        var v781 = v900 + v901;
        var v620 = v781 + " ";
        var v621 = matchArray$$2[4];
        var v304 = v620 + v621;
        alert(v304);
        return false;
      }
      var v622 = tableArray[i$$12];
      v305 = matchArray$$2 = JAM.call(re$$3.exec, re$$3, [v622], JAM.policy.p17);
    }
    i$$12++;
    var v623 = tableArray.length;
    v306 = i$$12 < v623;
  }
  var v307 = codonTable$$5.a;
  v307.determineBaseFreq();
  var v308 = codonTable$$5.c;
  v308.determineBaseFreq();
  var v309 = codonTable$$5.d;
  v309.determineBaseFreq();
  var v310 = codonTable$$5.e;
  v310.determineBaseFreq();
  var v311 = codonTable$$5.f;
  v311.determineBaseFreq();
  var v312 = codonTable$$5.g;
  v312.determineBaseFreq();
  var v313 = codonTable$$5.h;
  v313.determineBaseFreq();
  var v314 = codonTable$$5.i;
  v314.determineBaseFreq();
  var v315 = codonTable$$5.k;
  v315.determineBaseFreq();
  var v316 = codonTable$$5.l;
  v316.determineBaseFreq();
  var v317 = codonTable$$5.m;
  v317.determineBaseFreq();
  var v318 = codonTable$$5.n;
  v318.determineBaseFreq();
  var v319 = codonTable$$5.p;
  v319.determineBaseFreq();
  var v320 = codonTable$$5.q;
  v320.determineBaseFreq();
  var v321 = codonTable$$5.r;
  v321.determineBaseFreq();
  var v322 = codonTable$$5.s;
  v322.determineBaseFreq();
  var v323 = codonTable$$5.t;
  v323.determineBaseFreq();
  var v324 = codonTable$$5.v;
  v324.determineBaseFreq();
  var v325 = codonTable$$5.w;
  v325.determineBaseFreq();
  var v326 = codonTable$$5.y;
  v326.determineBaseFreq();
  var v327 = codonTable$$5.z;
  v327.determineBaseFreq();
  var v328 = codonTable$$5.x;
  v328.determineBaseFreq();
  var v329 = codonTable$$5.x;
  var v1120 = new Array(.25, .25, .25, .25);
  v329.baseFreqPosOne = v1120;
  var v330 = codonTable$$5.x;
  var v1121 = new Array(.25, .25, .25, .25);
  v330.baseFreqPosTwo = v1121;
  var v331 = codonTable$$5.x;
  var v1122 = new Array(.25, .25, .25, .25);
  v331.baseFreqPosThree = v1122;
  var v332 = codonTable$$5.a;
  v332.fillRuler();
  var v333 = codonTable$$5.c;
  v333.fillRuler();
  var v334 = codonTable$$5.d;
  v334.fillRuler();
  var v335 = codonTable$$5.e;
  v335.fillRuler();
  var v336 = codonTable$$5.f;
  v336.fillRuler();
  var v337 = codonTable$$5.g;
  v337.fillRuler();
  var v338 = codonTable$$5.h;
  v338.fillRuler();
  var v339 = codonTable$$5.i;
  v339.fillRuler();
  var v340 = codonTable$$5.k;
  v340.fillRuler();
  var v341 = codonTable$$5.l;
  v341.fillRuler();
  var v342 = codonTable$$5.m;
  v342.fillRuler();
  var v343 = codonTable$$5.n;
  v343.fillRuler();
  var v344 = codonTable$$5.p;
  v344.fillRuler();
  var v345 = codonTable$$5.q;
  v345.fillRuler();
  var v346 = codonTable$$5.r;
  v346.fillRuler();
  var v347 = codonTable$$5.s;
  v347.fillRuler();
  var v348 = codonTable$$5.t;
  v348.fillRuler();
  var v349 = codonTable$$5.v;
  v349.fillRuler();
  var v350 = codonTable$$5.w;
  v350.fillRuler();
  var v351 = codonTable$$5.y;
  v351.fillRuler();
  var v352 = codonTable$$5.z;
  v352.fillRuler();
  var v353 = codonTable$$5.x;
  v353.fillRuler();
  return codonTable$$5;
}
function CodonTable() {
  var v1123 = new AminoAcid;
  this.a = v1123;
  var v1124 = new AminoAcid;
  this.c = v1124;
  var v1125 = new AminoAcid;
  this.d = v1125;
  var v1126 = new AminoAcid;
  this.e = v1126;
  var v1127 = new AminoAcid;
  this.f = v1127;
  var v1128 = new AminoAcid;
  this.g = v1128;
  var v1129 = new AminoAcid;
  this.h = v1129;
  var v1130 = new AminoAcid;
  this.i = v1130;
  var v1131 = new AminoAcid;
  this.k = v1131;
  var v1132 = new AminoAcid;
  this.l = v1132;
  var v1133 = new AminoAcid;
  this.m = v1133;
  var v1134 = new AminoAcid;
  this.n = v1134;
  var v1135 = new AminoAcid;
  this.p = v1135;
  var v1136 = new AminoAcid;
  this.q = v1136;
  var v1137 = new AminoAcid;
  this.r = v1137;
  var v1138 = new AminoAcid;
  this.s = v1138;
  var v1139 = new AminoAcid;
  this.t = v1139;
  var v1140 = new AminoAcid;
  this.v = v1140;
  var v1141 = new AminoAcid;
  this.w = v1141;
  var v1142 = new AminoAcid;
  this.y = v1142;
  var v1143 = new AminoAcid;
  this.z = v1143;
  var v1144 = new AminoAcid;
  this.x = v1144;
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
  return;
}
function fillRuler() {
  var markG = "gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg";
  var markA = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
  var markT = "TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT";
  var markC = "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC";
  var markLength = markG.length;
  var v977 = this.baseFreqPosOne;
  var v902 = v977[0];
  var v782 = JAM.call(this.getRuler, this, [v902, markG], JAM.policy.p27);
  var v978 = this.baseFreqPosOne;
  var v903 = v978[1];
  var v783 = JAM.call(this.getRuler, this, [v903, markA], JAM.policy.p27);
  var v624 = v782 + v783;
  var v904 = this.baseFreqPosOne;
  var v784 = v904[2];
  var v625 = JAM.call(this.getRuler, this, [v784, markT], JAM.policy.p27);
  var v354 = v624 + v625;
  var v785 = this.baseFreqPosOne;
  var v626 = v785[3];
  var v355 = JAM.call(this.getRuler, this, [v626, markC], JAM.policy.p27);
  this.rulerPosOne = v354 + v355;
  var v979 = this.baseFreqPosTwo;
  var v905 = v979[0];
  var v786 = JAM.call(this.getRuler, this, [v905, markG], JAM.policy.p27);
  var v980 = this.baseFreqPosTwo;
  var v906 = v980[1];
  var v787 = JAM.call(this.getRuler, this, [v906, markA], JAM.policy.p27);
  var v627 = v786 + v787;
  var v907 = this.baseFreqPosTwo;
  var v788 = v907[2];
  var v628 = JAM.call(this.getRuler, this, [v788, markT], JAM.policy.p27);
  var v356 = v627 + v628;
  var v789 = this.baseFreqPosTwo;
  var v629 = v789[3];
  var v357 = JAM.call(this.getRuler, this, [v629, markC], JAM.policy.p27);
  this.rulerPosTwo = v356 + v357;
  var v981 = this.baseFreqPosThree;
  var v908 = v981[0];
  var v790 = JAM.call(this.getRuler, this, [v908, markG], JAM.policy.p27);
  var v982 = this.baseFreqPosThree;
  var v909 = v982[1];
  var v791 = JAM.call(this.getRuler, this, [v909, markA], JAM.policy.p27);
  var v630 = v790 + v791;
  var v910 = this.baseFreqPosThree;
  var v792 = v910[2];
  var v631 = JAM.call(this.getRuler, this, [v792, markT], JAM.policy.p27);
  var v358 = v630 + v631;
  var v793 = this.baseFreqPosThree;
  var v632 = v793[3];
  var v359 = JAM.call(this.getRuler, this, [v632, markC], JAM.policy.p27);
  this.rulerPosThree = v358 + v359;
  this.setMostCommonCodon();
  this.setDegenCodon();
  return;
}
function getRuler(freq, mark) {
  var v911 = JAM.call(mark.substring, mark, [0, 1], JAM.policy.p13);
  var v1015 = mark.length;
  var v983 = freq * v1015;
  var v912 = JAM.call(mark.substring, mark, [0, v983], JAM.policy.p13);
  var v794 = v911 + v912;
  var v633 = v794 + " ";
  var v634 = JAM.call(freq.toFixed, freq, [2], JAM.policy.p12);
  var v360 = v633 + v634;
  return v360 + "\n";
}
function addCodon(codon$$1) {
  var v361 = this.codons;
  JAM.call(v361.push, v361, [codon$$1], JAM.policy.p17);
  return;
}
function determineBaseFreq() {
  this.fixFraction();
  var i$$13 = 0;
  var v795 = this.codons;
  var v635 = v795.length;
  var v386 = i$$13 < v635;
  for (;v386;) {
    var v984 = this.codons;
    var v913 = v984[i$$13];
    var v796 = v913.sequence;
    var v636 = JAM.call(v796.charAt, v796, [0], JAM.policy.p12);
    var v369 = v636 == "g";
    if (v369) {
      var v362 = this.baseFreqPosOne;
      var v797 = this.baseFreqPosOne;
      var v637 = v797[0];
      var v914 = this.codons;
      var v798 = v914[i$$13];
      var v638 = v798.fraction;
      v362[0] = v637 + v638;
    } else {
      var v985 = this.codons;
      var v915 = v985[i$$13];
      var v799 = v915.sequence;
      var v639 = JAM.call(v799.charAt, v799, [0], JAM.policy.p12);
      var v368 = v639 == "a";
      if (v368) {
        var v363 = this.baseFreqPosOne;
        var v800 = this.baseFreqPosOne;
        var v640 = v800[1];
        var v916 = this.codons;
        var v801 = v916[i$$13];
        var v641 = v801.fraction;
        v363[1] = v640 + v641;
      } else {
        var v986 = this.codons;
        var v917 = v986[i$$13];
        var v802 = v917.sequence;
        var v642 = JAM.call(v802.charAt, v802, [0], JAM.policy.p12);
        var v367 = v642 == "t";
        if (v367) {
          var v364 = this.baseFreqPosOne;
          var v803 = this.baseFreqPosOne;
          var v643 = v803[2];
          var v918 = this.codons;
          var v804 = v918[i$$13];
          var v644 = v804.fraction;
          v364[2] = v643 + v644;
        } else {
          var v987 = this.codons;
          var v919 = v987[i$$13];
          var v805 = v919.sequence;
          var v645 = JAM.call(v805.charAt, v805, [0], JAM.policy.p12);
          var v366 = v645 == "c";
          if (v366) {
            var v365 = this.baseFreqPosOne;
            var v806 = this.baseFreqPosOne;
            var v646 = v806[3];
            var v920 = this.codons;
            var v807 = v920[i$$13];
            var v647 = v807.fraction;
            v365[3] = v646 + v647;
          }
        }
      }
    }
    var v988 = this.codons;
    var v921 = v988[i$$13];
    var v808 = v921.sequence;
    var v648 = JAM.call(v808.charAt, v808, [1], JAM.policy.p12);
    var v377 = v648 == "g";
    if (v377) {
      var v370 = this.baseFreqPosTwo;
      var v809 = this.baseFreqPosTwo;
      var v649 = v809[0];
      var v922 = this.codons;
      var v810 = v922[i$$13];
      var v650 = v810.fraction;
      v370[0] = v649 + v650;
    } else {
      var v989 = this.codons;
      var v923 = v989[i$$13];
      var v811 = v923.sequence;
      var v651 = JAM.call(v811.charAt, v811, [1], JAM.policy.p12);
      var v376 = v651 == "a";
      if (v376) {
        var v371 = this.baseFreqPosTwo;
        var v812 = this.baseFreqPosTwo;
        var v652 = v812[1];
        var v924 = this.codons;
        var v813 = v924[i$$13];
        var v653 = v813.fraction;
        v371[1] = v652 + v653;
      } else {
        var v990 = this.codons;
        var v925 = v990[i$$13];
        var v814 = v925.sequence;
        var v654 = JAM.call(v814.charAt, v814, [1], JAM.policy.p12);
        var v375 = v654 == "t";
        if (v375) {
          var v372 = this.baseFreqPosTwo;
          var v815 = this.baseFreqPosTwo;
          var v655 = v815[2];
          var v926 = this.codons;
          var v816 = v926[i$$13];
          var v656 = v816.fraction;
          v372[2] = v655 + v656;
        } else {
          var v991 = this.codons;
          var v927 = v991[i$$13];
          var v817 = v927.sequence;
          var v657 = JAM.call(v817.charAt, v817, [1], JAM.policy.p12);
          var v374 = v657 == "c";
          if (v374) {
            var v373 = this.baseFreqPosTwo;
            var v818 = this.baseFreqPosTwo;
            var v658 = v818[3];
            var v928 = this.codons;
            var v819 = v928[i$$13];
            var v659 = v819.fraction;
            v373[3] = v658 + v659;
          }
        }
      }
    }
    var v992 = this.codons;
    var v929 = v992[i$$13];
    var v820 = v929.sequence;
    var v660 = JAM.call(v820.charAt, v820, [2], JAM.policy.p12);
    var v385 = v660 == "g";
    if (v385) {
      var v378 = this.baseFreqPosThree;
      var v821 = this.baseFreqPosThree;
      var v661 = v821[0];
      var v930 = this.codons;
      var v822 = v930[i$$13];
      var v662 = v822.fraction;
      v378[0] = v661 + v662;
    } else {
      var v993 = this.codons;
      var v931 = v993[i$$13];
      var v823 = v931.sequence;
      var v663 = JAM.call(v823.charAt, v823, [2], JAM.policy.p12);
      var v384 = v663 == "a";
      if (v384) {
        var v379 = this.baseFreqPosThree;
        var v824 = this.baseFreqPosThree;
        var v664 = v824[1];
        var v932 = this.codons;
        var v825 = v932[i$$13];
        var v665 = v825.fraction;
        v379[1] = v664 + v665;
      } else {
        var v994 = this.codons;
        var v933 = v994[i$$13];
        var v826 = v933.sequence;
        var v666 = JAM.call(v826.charAt, v826, [2], JAM.policy.p12);
        var v383 = v666 == "t";
        if (v383) {
          var v380 = this.baseFreqPosThree;
          var v827 = this.baseFreqPosThree;
          var v667 = v827[2];
          var v934 = this.codons;
          var v828 = v934[i$$13];
          var v668 = v828.fraction;
          v380[2] = v667 + v668;
        } else {
          var v995 = this.codons;
          var v935 = v995[i$$13];
          var v829 = v935.sequence;
          var v669 = JAM.call(v829.charAt, v829, [2], JAM.policy.p12);
          var v382 = v669 == "c";
          if (v382) {
            var v381 = this.baseFreqPosThree;
            var v830 = this.baseFreqPosThree;
            var v670 = v830[3];
            var v936 = this.codons;
            var v831 = v936[i$$13];
            var v671 = v831.fraction;
            v381[3] = v670 + v671;
          }
        }
      }
    }
    i$$13++;
    var v832 = this.codons;
    var v672 = v832.length;
    v386 = i$$13 < v672;
  }
  return true;
}
function fixFraction() {
  var perThouTotal = 0;
  var i$$14 = 0;
  var v833 = this.codons;
  var v673 = v833.length;
  var v388 = i$$14 < v673;
  for (;v388;) {
    var v834 = this.codons;
    var v674 = v834[i$$14];
    var v387 = v674.perThou;
    perThouTotal = perThouTotal + v387;
    i$$14++;
    var v835 = this.codons;
    var v675 = v835.length;
    v388 = i$$14 < v675;
  }
  var v389 = perThouTotal == 0;
  if (v389) {
    return false;
  }
  i$$14 = 0;
  var v836 = this.codons;
  var v676 = v836.length;
  var v391 = i$$14 < v676;
  for (;v391;) {
    var v677 = this.codons;
    var v390 = v677[i$$14];
    var v937 = this.codons;
    var v837 = v937[i$$14];
    var v678 = v837.perThou;
    v390.fraction = v678 / perThouTotal;
    i$$14++;
    var v838 = this.codons;
    var v679 = v838.length;
    v391 = i$$14 < v679;
  }
  return true;
}
function setMostCommonCodon() {
  var highestFraction = 0;
  var highestCodon = "nnn";
  var i$$15 = 0;
  var v839 = this.codons;
  var v680 = v839.length;
  var v395 = i$$15 < v680;
  for (;v395;) {
    var v938 = this.codons;
    var v840 = v938[i$$15];
    var v681 = v840.fraction;
    var v394 = v681 > highestFraction;
    if (v394) {
      var v682 = this.codons;
      var v392 = v682[i$$15];
      highestFraction = v392.fraction;
      var v683 = this.codons;
      var v393 = v683[i$$15];
      highestCodon = v393.sequence;
    }
    i$$15++;
    var v841 = this.codons;
    var v684 = v841.length;
    v395 = i$$15 < v684;
  }
  this.mostCommonCodon = highestCodon;
  return;
}
function setDegenCodon() {
  var v842 = this.baseFreqPosOne;
  var v685 = getConsensusBase(v842);
  var v843 = this.baseFreqPosTwo;
  var v686 = getConsensusBase(v843);
  var v396 = v685 + v686;
  var v687 = this.baseFreqPosThree;
  var v397 = getConsensusBase(v687);
  this.degenCodon = v396 + v397;
  return;
}
function getConsensusBase(baseFreq) {
  var g;
  var a;
  var t;
  var c;
  var v688 = baseFreq[0];
  var v398 = v688 > 0;
  if (v398) {
    g = true;
  }
  var v689 = baseFreq[1];
  var v399 = v689 > 0;
  if (v399) {
    a = true;
  }
  var v690 = baseFreq[2];
  var v400 = v690 > 0;
  if (v400) {
    t = true;
  }
  var v691 = baseFreq[3];
  var v401 = v691 > 0;
  if (v401) {
    c = true;
  }
  var v939 = !g;
  if (v939) {
    v939 = !a;
  }
  var v844 = v939;
  if (v844) {
    v844 = !c;
  }
  var v692 = v844;
  if (v692) {
    v692 = !t;
  }
  var v402 = v692;
  if (v402) {
    return "n";
  }
  var v845 = g && a;
  if (v845) {
    v845 = c;
  }
  var v693 = v845;
  if (v693) {
    v693 = t;
  }
  var v412 = v693;
  if (v412) {
    return "n";
  } else {
    var v694 = a && c;
    if (v694) {
      v694 = t;
    }
    var v411 = v694;
    if (v411) {
      return "h";
    } else {
      var v695 = a && g;
      if (v695) {
        v695 = t;
      }
      var v410 = v695;
      if (v410) {
        return "d";
      } else {
        var v696 = c && g;
        if (v696) {
          v696 = t;
        }
        var v409 = v696;
        if (v409) {
          return "b";
        } else {
          var v408 = a && c;
          if (v408) {
            return "m";
          } else {
            var v407 = g && t;
            if (v407) {
              return "k";
            } else {
              var v406 = a && t;
              if (v406) {
                return "w";
              } else {
                var v405 = g && c;
                if (v405) {
                  return "s";
                } else {
                  var v404 = c && t;
                  if (v404) {
                    return "y";
                  } else {
                    var v403 = a && g;
                    if (v403) {
                      return "r";
                    } else {
                      if (t) {
                        return "t";
                      } else {
                        if (g) {
                          return "g";
                        } else {
                          if (c) {
                            return "c";
                          } else {
                            if (a) {
                              return "a";
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
  return true;
}
function AminoAcid() {
  var v1145 = new Array;
  this.codons = v1145;
  var v1146 = new Array(0, 0, 0, 0);
  this.baseFreqPosOne = v1146;
  var v1147 = new Array(0, 0, 0, 0);
  this.baseFreqPosTwo = v1147;
  var v1148 = new Array(0, 0, 0, 0);
  this.baseFreqPosThree = v1148;
  return;
}
function Codon(sequence$$18, number, perThou, fraction) {
  var v1149 = sequence$$18.toLowerCase();
  this.sequence = v1149;
  this.number = number;
  this.perThou = perThou;
  this.fraction = fraction;
  return;
}
new AminoAcid;
var v413 = AminoAcid.prototype;
v413.fillRuler = fillRuler;
var v414 = AminoAcid.prototype;
v414.getRuler = getRuler;
var v415 = AminoAcid.prototype;
v415.addCodon = addCodon;
var v416 = AminoAcid.prototype;
v416.determineBaseFreq = determineBaseFreq;
var v417 = AminoAcid.prototype;
v417.fixFraction = fixFraction;
var v418 = AminoAcid.prototype;
v418.setMostCommonCodon = setMostCommonCodon;
var v419 = AminoAcid.prototype;
v419.setDegenCodon = setDegenCodon;
var v420 = AminoAcid.prototype;
v420.getConsensusBase = getConsensusBase;
JAM.set(document, "onload", v5);
var v421 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p9);
JAM.set(v421, "onclick", v6);
var v422 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p9);
JAM.set(v422, "onclick", v7)

JAM.stopProfile('load');
