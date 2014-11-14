
JAM.startProfile('load');
function v4() {
  var v1257 = document.forms;
  var v1001 = v1257[0];
  var v588 = v1001.elements;
  var v5 = v588[0];
  v5.value = " ";
  var v1258 = document.forms;
  var v1002 = v1258[0];
  var v589 = v1002.elements;
  var v6 = v589[4];
  v6.value = " ";
  return;
}
function v3() {
  try {
    pcrPrimerStats(document);
  } catch (e$$5) {
    var v7 = "The following error was encountered: " + e$$5;
    alert(v7);
  }
  return;
}
function v2() {
  var v590 = document.main_form;
  var v8 = v590.main_submit;
  v8.focus();
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
  var v9 = arrayOfSequences[0];
  var lengthOfAlign = v9.length;
  var v591 = arrayOfSequences.length;
  var v10 = v591 < 2;
  if (v10) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v592 = arrayOfTitles.length;
  var v12 = i$$1 < v592;
  for (;v12;) {
    var v1367 = arrayOfTitles[i$$1];
    var v1259 = JAM.call(v1367.search, v1367, [/\S/], JAM.policy.p17);
    var v1003 = v1259 == -1;
    var v1261 = !v1003;
    if (v1261) {
      var v1368 = arrayOfSequences[i$$1];
      var v1260 = JAM.call(v1368.search, v1368, [/\S/], JAM.policy.p17);
      v1003 = v1260 == -1;
    }
    var v593 = v1003;
    var v1005 = !v593;
    if (v1005) {
      var v1262 = arrayOfSequences[i$$1];
      var v1004 = v1262.length;
      v593 = v1004 != lengthOfAlign;
    }
    var v11 = v593;
    if (v11) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v594 = arrayOfTitles.length;
    v12 = i$$1 < v594;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v1417 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p17);
  var v1369 = v1417 == -1;
  var v1419 = !v1369;
  if (v1419) {
    var v1418 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p17);
    v1369 = v1418 == -1;
  }
  var v1263 = v1369;
  var v1371 = !v1263;
  if (v1371) {
    var v1370 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p17);
    v1263 = v1370 == -1;
  }
  var v1006 = v1263;
  var v1265 = !v1006;
  if (v1265) {
    var v1264 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p17);
    v1006 = v1264 == -1;
  }
  var v595 = v1006;
  var v1008 = !v595;
  if (v1008) {
    var v1007 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p17);
    v595 = v1007 == -1;
  }
  var v13 = v595;
  if (v13) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v1009 = formElement.value;
  var v596 = JAM.call(v1009.search, v1009, [/\S/], JAM.policy.p17);
  var v14 = v596 == -1;
  if (v14) {
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
  var v597 = arrayOfPatterns.length;
  var v17 = z$$2 < v597;
  for (;v17;) {
    var v1010 = arrayOfPatterns[z$$2];
    var v598 = JAM.call(v1010.search, v1010, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p17);
    var v15 = v598 == -1;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v1011 = arrayOfPatterns[z$$2];
    var v599 = moreExpressionCheck(v1011);
    var v16 = v599 == false;
    if (v16) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v600 = arrayOfPatterns.length;
    v17 = z$$2 < v600;
  }
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v18);
  var v19 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v19);
  var j = 0;
  var v601 = arrayOfPatterns.length;
  var v23 = j < v601;
  for (;v23;) {
    var v1012 = arrayOfPatterns[j];
    var v602 = JAM.call(v1012.match, v1012, [/\/.+\//], JAM.policy.p17);
    var v20 = v602 + "gi";
    if (JAM.isEval(eval)) {
      var v1511 = eval("introspect(JAM.policy.pFull) { " + v20 + " }")
    } else {
      var v1511 = JAM.call(eval, null, [v20])
    }
    geneticCodeMatchExp[j] = v1511;
    var v603 = arrayOfPatterns[j];
    var v21 = JAM.call(v603.match, v603, [/=[a-zA-Z\*]/], JAM.policy.p17);
    var v1512 = v21.toString();
    geneticCodeMatchResult[j] = v1512;
    var v22 = geneticCodeMatchResult[j];
    var v1513 = JAM.call(v22.replace, v22, [/=/g, ""], JAM.policy.p16);
    geneticCodeMatchResult[j] = v1513;
    j++;
    var v604 = arrayOfPatterns.length;
    v23 = j < v604;
  }
  var i$$2 = 0;
  var v1013 = testSequence.length;
  var v605 = v1013 - 3;
  var v30 = i$$2 <= v605;
  for (;v30;) {
    var v24 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v24], JAM.policy.p16);
    j = 0;
    var v606 = geneticCodeMatchExp.length;
    var v28 = j < v606;
    for (;v28;) {
      var v1014 = geneticCodeMatchExp[j];
      var v607 = JAM.call(codon.search, codon, [v1014], JAM.policy.p15);
      var v27 = v607 != -1;
      if (v27) {
        var v26 = oneMatch == true;
        if (v26) {
          var v608 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v25 = v608 + ".";
          alert(v25);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v609 = geneticCodeMatchExp.length;
      v28 = j < v609;
    }
    var v29 = oneMatch == false;
    if (v29) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v1015 = testSequence.length;
    var v610 = v1015 - 3;
    v30 = i$$2 <= v610;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v611 = arrayOfPatterns$$1.length;
  var v32 = z$$3 < v611;
  for (;v32;) {
    var v1016 = arrayOfPatterns$$1[z$$3];
    var v612 = JAM.call(v1016.search, v1016, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p17);
    var v31 = v612 != -1;
    if (v31) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v613 = arrayOfPatterns$$1.length;
    v32 = z$$3 < v613;
  }
  var i$$3 = 0;
  var v614 = arrayOfPatterns$$1.length;
  var v36 = i$$3 < v614;
  for (;v36;) {
    var v1017 = arrayOfPatterns$$1[i$$3];
    var v615 = "[" + v1017;
    var v33 = v615 + "]";
    var re = new RegExp(v33, "gi");
    var j$$1 = i$$3 + 1;
    var v616 = arrayOfPatterns$$1.length;
    var v35 = j$$1 < v616;
    for (;v35;) {
      var v1018 = arrayOfPatterns$$1[j$$1];
      var v617 = JAM.call(v1018.search, v1018, [re], JAM.policy.p15);
      var v34 = v617 != -1;
      if (v34) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v618 = arrayOfPatterns$$1.length;
      v35 = j$$1 < v618;
    }
    i$$3++;
    var v619 = arrayOfPatterns$$1.length;
    v36 = i$$3 < v619;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v620 = arrayOfPatterns$$2.length;
  var v39 = z$$4 < v620;
  for (;v39;) {
    var v1019 = arrayOfPatterns$$2[z$$4];
    var v621 = JAM.call(v1019.search, v1019, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p17);
    var v37 = v621 == -1;
    if (v37) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v1020 = arrayOfPatterns$$2[z$$4];
    var v622 = moreExpressionCheck(v1020);
    var v38 = v622 == false;
    if (v38) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v623 = arrayOfPatterns$$2.length;
    v39 = z$$4 < v623;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v1266 = getSequenceFromFasta(text$$7);
  var v1021 = JAM.call(v1266.replace, v1266, [/[^A-Za-z]/g, ""], JAM.policy.p16);
  var v624 = v1021.length;
  var v41 = v624 > maxInput;
  if (v41) {
    var v625 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v40 = v625 + " characters.";
    alert(v40);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v626 = text$$8.length;
  var v43 = v626 > maxInput$$1;
  if (v43) {
    var v627 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v42 = v627 + " characters.";
    alert(v42);
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
  var v44 = outputWindow.document;
  JAM.call(v44.write, v44, ["</form>"], JAM.policy.p9);
  return true;
}
function closePre() {
  var v45 = outputWindow.document;
  JAM.call(v45.write, v45, ["</div>"], JAM.policy.p9);
  var v46 = outputWindow.document;
  JAM.call(v46.write, v46, ["</pre>\n"], JAM.policy.p9);
  return;
}
function closeTextArea() {
  var v47 = outputWindow.document;
  JAM.call(v47.write, v47, ["</textarea>"], JAM.policy.p9);
  return true;
}
function closeWindow() {
  var v48 = outputWindow.document;
  JAM.call(v48.write, v48, ["</body>\n</html>\n"], JAM.policy.p9);
  outputWindow.status = "Done.";
  var v49 = outputWindow.document;
  v49.close();
  return true;
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
  var v628 = alignArray.length;
  var v50 = v628 < 3;
  if (v50) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v629 = alignArray.length;
  var v52 = i$$4 < v629;
  for (;v52;) {
    var v1022 = alignArray[i$$4];
    var v630 = JAM.call(v1022.search, v1022, [/[^\s]+\s/], JAM.policy.p17);
    var v51 = v630 == -1;
    if (v51) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v631 = alignArray.length;
    v52 = i$$4 < v631;
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
  var v632 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p17);
  var v55 = v632 != -1;
  if (v55) {
    var v54 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p15);
    for (;v54;) {
      var v53 = matchArray[0];
      JAM.call(arrayOfFasta.push, arrayOfFasta, [v53], JAM.policy.p15);
      v54 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p15);
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v633 = sequence$$2.length;
  var v56 = "&gt;results for " + v633;
  var stringToReturn = v56 + " residue sequence ";
  var v634 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p17);
  var v58 = v634 != -1;
  if (v58) {
    var v635 = stringToReturn + '"';
    var v57 = v635 + fastaSequenceTitle;
    stringToReturn = v57 + '"';
  }
  var v636 = stringToReturn + ' starting "';
  var v637 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p13);
  var v59 = v636 + v637;
  stringToReturn = v59 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v638 = sequenceOne.length;
  var v60 = "Search results for " + v638;
  var stringToReturn$$1 = v60 + " residue sequence ";
  var v639 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p17);
  var v62 = v639 != -1;
  if (v62) {
    var v640 = stringToReturn$$1 + '"';
    var v61 = v640 + fastaSequenceTitleOne;
    stringToReturn$$1 = v61 + '"';
  }
  var v641 = stringToReturn$$1 + ' starting "';
  var v642 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p13);
  var v63 = v641 + v642;
  stringToReturn$$1 = v63 + '"\n';
  var v643 = stringToReturn$$1 + "and ";
  var v644 = sequenceTwo.length;
  var v64 = v643 + v644;
  stringToReturn$$1 = v64 + " residue sequence ";
  var v645 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p17);
  var v66 = v645 != -1;
  if (v66) {
    var v646 = stringToReturn$$1 + '"';
    var v65 = v646 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v65 + '"';
  }
  var v647 = stringToReturn$$1 + ' starting "';
  var v648 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p13);
  var v67 = v647 + v648;
  stringToReturn$$1 = v67 + '"';
  var v68 = '<div class="info">' + stringToReturn$$1;
  return v68 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v69 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v69);
  var j$$2 = 0;
  var v649 = arrayOfPatterns$$3.length;
  var v71 = j$$2 < v649;
  for (;v71;) {
    var v1023 = arrayOfPatterns$$3[j$$2];
    var v650 = JAM.call(v1023.match, v1023, [/\/.+\//], JAM.policy.p17);
    var v70 = v650 + "gi";
    if (JAM.isEval(eval)) {
      var v1514 = eval("introspect(JAM.policy.pFull) { " + v70 + " }")
    } else {
      var v1514 = JAM.call(eval, null, [v70])
    }
    geneticCodeMatchExp$$1[j$$2] = v1514;
    j$$2++;
    var v651 = arrayOfPatterns$$3.length;
    v71 = j$$2 < v651;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v72 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v72);
  var j$$3 = 0;
  var v652 = arrayOfPatterns$$4.length;
  var v75 = j$$3 < v652;
  for (;v75;) {
    var v653 = arrayOfPatterns$$4[j$$3];
    var v73 = JAM.call(v653.match, v653, [/=[a-zA-Z\*]/], JAM.policy.p17);
    var v1515 = v73.toString();
    geneticCodeMatchResult$$1[j$$3] = v1515;
    var v74 = geneticCodeMatchResult$$1[j$$3];
    var v1516 = JAM.call(v74.replace, v74, [/=/g, ""], JAM.policy.p16);
    geneticCodeMatchResult$$1[j$$3] = v1516;
    j$$3++;
    var v654 = arrayOfPatterns$$4.length;
    v75 = j$$3 < v654;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v655 = sequence$$3.length;
  var v76 = "Results for " + v655;
  var stringToReturn$$2 = v76 + " residue sequence ";
  var v656 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p17);
  var v78 = v656 != -1;
  if (v78) {
    var v657 = stringToReturn$$2 + '"';
    var v77 = v657 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v77 + '"';
  }
  var v658 = stringToReturn$$2 + ' starting "';
  var v659 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p13);
  var v79 = v658 + v659;
  stringToReturn$$2 = v79 + '"';
  var v80 = '<div class="info">' + stringToReturn$$2;
  return v80 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v1024 = "Results for " + topology;
  var v660 = v1024 + " ";
  var v661 = sequence$$4.length;
  var v81 = v660 + v661;
  var stringToReturn$$3 = v81 + " residue sequence ";
  var v662 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p17);
  var v83 = v662 != -1;
  if (v83) {
    var v663 = stringToReturn$$3 + '"';
    var v82 = v663 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v82 + '"';
  }
  var v664 = stringToReturn$$3 + ' starting "';
  var v665 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p13);
  var v84 = v664 + v665;
  stringToReturn$$3 = v84 + '"';
  var v85 = '<div class="info">' + stringToReturn$$3;
  return v85 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v666 = sequenceOne$$1.length;
  var v86 = "Alignment results for " + v666;
  var stringToReturn$$4 = v86 + " residue sequence ";
  var v667 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p17);
  var v88 = v667 != -1;
  if (v88) {
    var v668 = stringToReturn$$4 + '"';
    var v87 = v668 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v87 + '"';
  }
  var v669 = stringToReturn$$4 + ' starting "';
  var v670 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p13);
  var v89 = v669 + v670;
  stringToReturn$$4 = v89 + '"\n';
  var v671 = stringToReturn$$4 + "and ";
  var v672 = sequenceTwo$$1.length;
  var v90 = v671 + v672;
  stringToReturn$$4 = v90 + " residue sequence ";
  var v673 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p17);
  var v92 = v673 != -1;
  if (v92) {
    var v674 = stringToReturn$$4 + '"';
    var v91 = v674 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v91 + '"';
  }
  var v675 = stringToReturn$$4 + ' starting "';
  var v676 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p13);
  var v93 = v675 + v676;
  stringToReturn$$4 = v93 + '"';
  var v94 = '<div class="info">' + stringToReturn$$4;
  return v94 + "</div>\n";
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v96 = j$$4 < lengthOut;
  for (;v96;) {
    var v677 = Math.random();
    var v678 = components.length;
    var v95 = v677 * v678;
    tempNum = JAM.call(Math.floor, Math, [v95], JAM.policy.p17);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p15);
    j$$4++;
    v96 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p9);
}
function getSequenceFromFasta(sequenceRecord) {
  var v679 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p17);
  var v97 = v679 != -1;
  if (v97) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p16);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v680 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p17);
  var v99 = v680 != -1;
  if (v99) {
    var v98 = JAM.call(sequenceRecord$$1.match, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p16);
    fastaTitle = v98.toString();
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\>|[\f\n\r]/g, ""], JAM.policy.p16);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\s{2,}/g, " "], JAM.policy.p16);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/[\<\>]/gi, ""], JAM.policy.p16);
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  var v1489 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p17);
  var v1482 = v1489 != -1;
  var v1491 = !v1482;
  if (v1491) {
    var v1490 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p17);
    v1482 = v1490 != -1;
  }
  var v1473 = v1482;
  var v1484 = !v1473;
  if (v1484) {
    var v1483 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p17);
    v1473 = v1483 != -1;
  }
  var v1463 = v1473;
  var v1475 = !v1463;
  if (v1475) {
    var v1474 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p17);
    v1463 = v1474 != -1;
  }
  var v1450 = v1463;
  var v1465 = !v1450;
  if (v1465) {
    var v1464 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p17);
    v1450 = v1464 != -1;
  }
  var v1436 = v1450;
  var v1452 = !v1436;
  if (v1452) {
    var v1451 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p17);
    v1436 = v1451 != -1;
  }
  var v1420 = v1436;
  var v1438 = !v1420;
  if (v1438) {
    var v1437 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p17);
    v1420 = v1437 != -1;
  }
  var v1372 = v1420;
  var v1422 = !v1372;
  if (v1422) {
    var v1421 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p17);
    v1372 = v1421 != -1;
  }
  var v1267 = v1372;
  var v1374 = !v1267;
  if (v1374) {
    var v1373 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p17);
    v1267 = v1373 != -1;
  }
  var v1025 = v1267;
  var v1269 = !v1025;
  if (v1269) {
    var v1268 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p17);
    v1025 = v1268 != -1;
  }
  var v681 = v1025;
  var v1027 = !v681;
  if (v1027) {
    var v1026 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p17);
    v681 = v1026 != -1;
  }
  var v100 = v681;
  if (v100) {
    return false;
  }
  return true;
}
function openForm() {
  var v101 = outputWindow.document;
  JAM.call(v101.write, v101, ['<form action="">\n'], JAM.policy.p9);
  return true;
}
function openPre() {
  var v102 = outputWindow.document;
  JAM.call(v102.write, v102, ["<pre>"], JAM.policy.p9);
  var v103 = outputWindow.document;
  JAM.call(v103.write, v103, ['<div class="pre">'], JAM.policy.p9);
  return;
}
function openTextArea() {
  var v104 = outputWindow.document;
  JAM.call(v104.write, v104, ['<br /><textarea rows="6" cols="61">\n'], JAM.policy.p9);
  return true;
}
function openWindow(title$$5) {
  _openWindow(title$$5, true);
  return;
}
function _openWindow(title$$6, isColor) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  outputWindow.focus();
  var v105 = outputWindow.document;
  var v1270 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v1028 = v1270 + "<head>\n";
  var v682 = v1028 + "<title>Sequence Manipulation Suite</title>\n";
  var v106 = v682 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v105.write, v105, [v106], JAM.policy.p15);
  if (isColor) {
    var v107 = outputWindow.document;
    var v1504 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1500 = v1504 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1496 = v1500 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1492 = v1496 + "div.info {font-weight: bold}\n";
    var v1485 = v1492 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1476 = v1485 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v1466 = v1476 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v1453 = v1466 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1439 = v1453 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v1423 = v1439 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v1375 = v1423 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v1271 = v1375 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v1029 = v1271 + "td.many {color: #000000}\n";
    var v683 = v1029 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v108 = v683 + "</style>\n";
    JAM.call(v107.write, v107, [v108], JAM.policy.p15);
  } else {
    var v109 = outputWindow.document;
    var v1508 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1505 = v1508 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1501 = v1505 + "div.title {display: none}\n";
    var v1497 = v1501 + "div.info {font-weight: bold}\n";
    var v1493 = v1497 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1486 = v1493 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1477 = v1486 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v1467 = v1477 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1454 = v1467 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1440 = v1454 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1424 = v1440 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v1376 = v1424 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1272 = v1376 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v1030 = v1272 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v684 = v1030 + "img {display: none}\n";
    var v110 = v684 + "</style>\n";
    JAM.call(v109.write, v109, [v110], JAM.policy.p15);
  }
  var v111 = outputWindow.document;
  var v1273 = "</head>\n" + '<body class="main">\n';
  var v1031 = v1273 + '<div class="title">';
  var v685 = v1031 + title$$6;
  var v112 = v685 + " results</div>\n";
  JAM.call(v111.write, v111, [v112], JAM.policy.p15);
  outputWindow.status = "Please Wait.";
  return true;
}
function openWindowAlign(title$$7) {
  _openWindowAlign(title$$7, true);
  return;
}
function _openWindowAlign(title$$8, isBackground) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  outputWindow.focus();
  var v113 = outputWindow.document;
  var v1274 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v1032 = v1274 + "<head>\n";
  var v686 = v1032 + "<title>Sequence Manipulation Suite</title>\n";
  var v114 = v686 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v113.write, v113, [v114], JAM.policy.p15);
  if (isBackground) {
    var v115 = outputWindow.document;
    var v1506 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1502 = v1506 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1498 = v1502 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1494 = v1498 + "div.info {font-weight: bold}\n";
    var v1487 = v1494 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v1478 = v1487 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v1468 = v1478 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v1455 = v1468 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v1441 = v1455 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v1425 = v1441 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v1377 = v1425 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v1275 = v1377 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v1033 = v1275 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v687 = v1033 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v116 = v687 + "</style>\n";
    JAM.call(v115.write, v115, [v116], JAM.policy.p15);
  } else {
    var v117 = outputWindow.document;
    var v1510 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1509 = v1510 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1507 = v1509 + "div.title {display: none}\n";
    var v1503 = v1507 + "div.info {font-weight: bold}\n";
    var v1499 = v1503 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1495 = v1499 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v1488 = v1495 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v1479 = v1488 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v1469 = v1479 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v1456 = v1469 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v1442 = v1456 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v1426 = v1442 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v1378 = v1426 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v1276 = v1378 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v1034 = v1276 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v688 = v1034 + "img {display: none}\n";
    var v118 = v688 + "</style>\n";
    JAM.call(v117.write, v117, [v118], JAM.policy.p15);
  }
  var v119 = outputWindow.document;
  var v1277 = "</head>\n" + '<body class="main">\n';
  var v1035 = v1277 + '<div class="title">';
  var v689 = v1035 + title$$8;
  var v120 = v689 + " results</div>\n";
  JAM.call(v119.write, v119, [v120], JAM.policy.p15);
  outputWindow.status = "Please Wait.";
  return true;
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
  var v690 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p17);
  var v121 = v690 != -1;
  if (v121) {
    tempDnaArray = JAM.call(dnaSequence$$1.match, dnaSequence$$1, [/./g], JAM.policy.p17);
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
  var v122 = j$$5 < lengthOfColumn;
  for (;v122;) {
    tempString = tempString + " ";
    j$$5++;
    v122 = j$$5 < lengthOfColumn;
  }
  var v123 = tempString + theNumber;
  theNumber = v123 + " ";
  var v124 = sequenceToAppend + theNumber;
  sequenceToAppend = v124 + tabIn;
  return sequenceToAppend;
}
function testScript() {
  function v1(str$$7, p1$$1, offset$$9, s$$3) {
    return p1$$1 + "X";
  }
  var testArray = new Array;
  var testString = "1234567890";
  JAM.call(testArray.push, testArray, [testString], JAM.policy.p15);
  var v691 = testArray[0];
  var v125 = v691 != testString;
  if (v125) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v692 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p15);
  var v126 = v692 == -1;
  if (v126) {
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
  var v127 = !caughtException;
  if (v127) {
    alert("Exception handling not supported. See browser compatibility page.");
  }
  testString = "123";
  testString = JAM.call(testString.replace, testString, [/(\d)/g, v1], JAM.policy.p16);
  var v128 = testString != "1X2X3X";
  if (v128) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false;
  }
  var testNum = 2489.8237;
  var v693 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p11);
  var v129 = v693 != 2489.824;
  if (v129) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v694 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p11);
  var v130 = v694 != 2489.8;
  if (v130) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v695 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p17);
  var v131 = v695 == -1;
  if (v131) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v1379 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p17);
  var v1278 = v1379 == -1;
  var v1381 = !v1278;
  if (v1381) {
    var v1380 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p17);
    v1278 = v1380 == -1;
  }
  var v1036 = v1278;
  var v1280 = !v1036;
  if (v1280) {
    var v1279 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p17);
    v1036 = v1279 == -1;
  }
  var v696 = v1036;
  var v1038 = !v696;
  if (v1038) {
    var v1037 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p17);
    v696 = v1037 == -1;
  }
  var v132 = v696;
  if (v132) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v697 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p17);
  var v133 = v697 == -1;
  if (v133) {
    alert("Please enter a number.");
    return false;
  }
  var v135 = theNumber$$2 > maxInput$$2;
  if (v135) {
    var v698 = "Please enter a number less than or equal to " + maxInput$$2;
    var v134 = v698 + ".";
    alert(v134);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v699 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p17);
  var v136 = v699 != -1;
  if (v136) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v700 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p17);
  var v137 = v700 != -1;
  if (v137) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v1382 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p17);
  var v1281 = v1382 == -1;
  var v1384 = !v1281;
  if (v1384) {
    var v1383 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p17);
    v1281 = v1383 == -1;
  }
  var v1039 = v1281;
  var v1283 = !v1039;
  if (v1283) {
    var v1282 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p17);
    v1039 = v1282 == -1;
  }
  var v701 = v1039;
  var v1041 = !v701;
  if (v1041) {
    var v1040 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p17);
    v701 = v1040 == -1;
  }
  var v138 = v701;
  if (v138) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v1385 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p17);
  var v1284 = v1385 == -1;
  var v1387 = !v1284;
  if (v1387) {
    var v1386 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p17);
    v1284 = v1386 == -1;
  }
  var v1042 = v1284;
  var v1286 = !v1042;
  if (v1286) {
    var v1285 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p17);
    v1042 = v1285 == -1;
  }
  var v702 = v1042;
  var v1044 = !v702;
  if (v1044) {
    var v1043 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p17);
    v702 = v1043 == -1;
  }
  var v139 = v702;
  if (v139) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v703 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p17);
  var v140 = v703 == -1;
  if (v140) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v1388 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p17);
  var v1287 = v1388 == -1;
  var v1390 = !v1287;
  if (v1390) {
    var v1389 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p17);
    v1287 = v1389 == -1;
  }
  var v1045 = v1287;
  var v1289 = !v1045;
  if (v1289) {
    var v1288 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p17);
    v1045 = v1288 == -1;
  }
  var v704 = v1045;
  var v1047 = !v704;
  if (v1047) {
    var v1046 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p17);
    v704 = v1046 == -1;
  }
  var v141 = v704;
  if (v141) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v705 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p17);
  var v142 = v705 == -1;
  if (v142) {
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
  var v149 = i$$5 < stopBase;
  for (;v149;) {
    var v143 = i$$5 + 1;
    lineOfText = rightNum(v143, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v706 = basePerLine / groupSize;
    var v146 = j$$6 <= v706;
    for (;v146;) {
      var v145 = k < groupSize;
      for (;v145;) {
        var v707 = k + i$$5;
        var v144 = JAM.call(text$$10.charAt, text$$10, [v707], JAM.policy.p15);
        lineOfText = lineOfText + v144;
        k = k + 1;
        v145 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v708 = basePerLine / groupSize;
      v146 = j$$6 <= v708;
    }
    var v147 = outputWindow.document;
    var v148 = lineOfText + "\n";
    JAM.call(v147.write, v147, [v148], JAM.policy.p15);
    lineOfText = "";
    v149 = i$$5 < stopBase;
  }
  return true;
}
function writeGroupNumDna(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition) {
  JAM.call(writeGroupNumDnaSetStart, null, [text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition, 0], JAM.policy.p19);
  return true;
}
function writeGroupNumDnaSetStart(text$$12, tabIn$$3, groupSize$$2, basePerLine$$2, startBase$$2, stopBase$$2, strands$$1, numberPosition$$1, numberingAdjustment) {
  function adjustNumbering(original, adjustment) {
    var adjusted = original + adjustment;
    var v709 = adjustment < 0;
    if (v709) {
      v709 = adjusted >= 0;
    }
    var v150 = v709;
    if (v150) {
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
  var v183 = i$$6 < stopBase$$2;
  for (;v183;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v710 = basePerLine$$2 / groupSize$$2;
    var v159 = j$$7 <= v710;
    for (;v159;) {
      var v154 = k$$1 < groupSize$$2;
      for (;v154;) {
        var v711 = i$$6 + k$$1;
        var v151 = v711 >= stopBase$$2;
        if (v151) {
          break;
        }
        var v152 = lineOfText$$1;
        var v712 = k$$1 + i$$6;
        var v153 = JAM.call(text$$12.charAt, text$$12, [v712], JAM.policy.p15);
        lineOfText$$1 = v152 + v153;
        k$$1 = k$$1 + 1;
        v154 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v157 = numberPosition$$1 == "above";
      if (v157) {
        var v155 = aboveNum;
        var v713 = JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p19);
        var v156 = rightNum(v713, "", groupSize$$2, tabIn$$3);
        aboveNum = v155 + v156;
      }
      var v158 = i$$6 >= stopBase$$2;
      if (v158) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v714 = basePerLine$$2 / groupSize$$2;
      v159 = j$$7 <= v714;
    }
    var v182 = numberPosition$$1 == "left";
    if (v182) {
      var v160 = outputWindow.document;
      var v1290 = JAM.call(adjustNumbering, null, [lineNum, numberingAdjustment], JAM.policy.p19);
      var v1048 = rightNum(v1290, "", 8, tabIn$$3);
      var v715 = v1048 + lineOfText$$1;
      var v161 = v715 + "\n";
      JAM.call(v160.write, v160, [v161], JAM.policy.p15);
      var v165 = strands$$1 == "two";
      if (v165) {
        var v162 = outputWindow.document;
        var v1291 = JAM.call(adjustNumbering, null, [lineNum, numberingAdjustment], JAM.policy.p19);
        var v1049 = rightNum(v1291, "", 8, tabIn$$3);
        var v1050 = complement(lineOfText$$1);
        var v716 = v1049 + v1050;
        var v163 = v716 + "\n";
        JAM.call(v162.write, v162, [v163], JAM.policy.p15);
        var v164 = outputWindow.document;
        JAM.call(v164.write, v164, ["\n"], JAM.policy.p9);
      }
    } else {
      var v181 = numberPosition$$1 == "right";
      if (v181) {
        var v166 = outputWindow.document;
        var v1051 = lineOfText$$1;
        var v1052 = JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p19);
        var v717 = v1051 + v1052;
        var v167 = v717 + "\n";
        JAM.call(v166.write, v166, [v167], JAM.policy.p15);
        var v171 = strands$$1 == "two";
        if (v171) {
          var v168 = outputWindow.document;
          var v1053 = complement(lineOfText$$1);
          var v1054 = JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p19);
          var v718 = v1053 + v1054;
          var v169 = v718 + "\n";
          JAM.call(v168.write, v168, [v169], JAM.policy.p15);
          var v170 = outputWindow.document;
          JAM.call(v170.write, v170, ["\n"], JAM.policy.p9);
        }
      } else {
        var v180 = numberPosition$$1 == "above";
        if (v180) {
          var v172 = outputWindow.document;
          var v173 = aboveNum + "\n";
          JAM.call(v172.write, v172, [v173], JAM.policy.p15);
          var v174 = outputWindow.document;
          var v175 = lineOfText$$1 + "\n";
          JAM.call(v174.write, v174, [v175], JAM.policy.p15);
          var v179 = strands$$1 == "two";
          if (v179) {
            var v176 = outputWindow.document;
            var v719 = complement(lineOfText$$1);
            var v177 = v719 + "\n";
            JAM.call(v176.write, v176, [v177], JAM.policy.p15);
            var v178 = outputWindow.document;
            JAM.call(v178.write, v178, ["\n"], JAM.policy.p9);
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v183 = i$$6 < stopBase$$2;
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
  var v202 = i$$7 < stopBase$$3;
  for (;v202;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v720 = basePerLine$$3 / groupSize$$3;
    var v190 = j$$8 <= v720;
    for (;v190;) {
      var v186 = k$$2 < groupSize$$3;
      for (;v186;) {
        var v721 = i$$7 + k$$2;
        var v184 = v721 >= stopBase$$3;
        if (v184) {
          break;
        }
        var v722 = k$$2 + i$$7;
        var v185 = JAM.call(text$$13.charAt, text$$13, [v722], JAM.policy.p15);
        lineOfText$$2 = lineOfText$$2 + v185;
        k$$2 = k$$2 + 1;
        v186 = k$$2 < groupSize$$3;
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v188 = numberPosition$$2 == "above";
      if (v188) {
        var v187 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = aboveNum$$1 + v187;
      }
      var v189 = i$$7 >= stopBase$$3;
      if (v189) {
        break;
      }
      k$$2 = 0;
      j$$8++;
      var v723 = basePerLine$$3 / groupSize$$3;
      v190 = j$$8 <= v723;
    }
    var v201 = numberPosition$$2 == "left";
    if (v201) {
      var v191 = outputWindow.document;
      var v1055 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v724 = v1055 + lineOfText$$2;
      var v192 = v724 + "\n";
      JAM.call(v191.write, v191, [v192], JAM.policy.p15);
    } else {
      var v200 = numberPosition$$2 == "right";
      if (v200) {
        var v193 = outputWindow.document;
        var v725 = lineOfText$$2 + i$$7;
        var v194 = v725 + "\n";
        JAM.call(v193.write, v193, [v194], JAM.policy.p15);
      } else {
        var v199 = numberPosition$$2 == "above";
        if (v199) {
          var v195 = outputWindow.document;
          var v196 = aboveNum$$1 + "\n";
          JAM.call(v195.write, v195, [v196], JAM.policy.p15);
          var v197 = outputWindow.document;
          var v198 = lineOfText$$2 + "\n";
          JAM.call(v197.write, v197, [v198], JAM.policy.p15);
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v202 = i$$7 < stopBase$$3;
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
  var v1292 = sequence$$13.length;
  var v1056 = v1292 <= firstIndexToMutate;
  var v1293 = !v1056;
  if (v1293) {
    v1056 = lastIndexToMutate < 0;
  }
  var v726 = v1056;
  var v1057 = !v726;
  if (v1057) {
    v726 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v203 = v726;
  if (v203) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v211 = i$$8 < numMut;
  for (;v211;) {
    maxNum = sequence$$13.length;
    var v727 = Math.random();
    var v204 = v727 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v204], JAM.policy.p17);
    var v728 = randNum < firstIndexToMutate;
    var v1058 = !v728;
    if (v1058) {
      v728 = randNum > lastIndexToMutate;
    }
    var v205 = v728;
    if (v205) {
      numMut++;
      i$$8++;
      v211 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p17);
    needNewChar = true;
    for (;needNewChar;) {
      var v729 = Math.random();
      var v730 = components$$1.length;
      var v206 = v729 * v730;
      componentsIndex = JAM.call(Math.round, Math, [v206], JAM.policy.p17);
      var v731 = components$$1.length;
      var v207 = componentsIndex == v731;
      if (v207) {
        componentsIndex = 0;
      }
      var v732 = components$$1[componentsIndex];
      var v208 = v732 != currentChar;
      if (v208) {
        needNewChar = false;
      }
    }
    var v733 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p13);
    var v734 = components$$1[componentsIndex];
    var v209 = v733 + v734;
    var v735 = randNum + 1;
    var v736 = sequence$$13.length;
    var v210 = JAM.call(sequence$$13.substring, sequence$$13, [v735, v736], JAM.policy.p21);
    sequence$$13 = v209 + v210;
    i$$8++;
    v211 = i$$8 < numMut;
  }
  var v212 = outputWindow.document;
  var v213 = addReturns(sequence$$13);
  JAM.call(v212.write, v212, [v213], JAM.policy.p15);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v218 = j$$9 < lengthOut$$1;
  for (;v218;) {
    var v737 = Math.random();
    var v738 = components$$2.length;
    var v214 = v737 * v738;
    tempNum$$1 = JAM.call(Math.floor, Math, [v214], JAM.policy.p17);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v739 = sequence$$14.length;
    var v217 = v739 == 60;
    if (v217) {
      var v215 = outputWindow.document;
      var v216 = sequence$$14 + "\n";
      JAM.call(v215.write, v215, [v216], JAM.policy.p15);
      sequence$$14 = "";
    }
    j$$9++;
    v218 = j$$9 < lengthOut$$1;
  }
  var v219 = outputWindow.document;
  var v220 = sequence$$14 + "\n";
  JAM.call(v219.write, v219, [v220], JAM.policy.p15);
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
  var v224 = dnaConformation == "circular";
  if (v224) {
    var v221 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    shiftValue = v221.length;
    var v1294 = sequence$$15.length;
    var v1059 = v1294 - lookAhead;
    var v1060 = sequence$$15.length;
    var v740 = JAM.call(sequence$$15.substring, sequence$$15, [v1059, v1060], JAM.policy.p21);
    var v222 = v740 + sequence$$15;
    var v223 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    sequence$$15 = v222 + v223;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v225 = outputWindow.document;
  JAM.call(v225.write, v225, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p9);
  var v226 = outputWindow.document;
  var v1295 = '<tr><td class="title" width="200px">' + "Site:";
  var v1061 = v1295 + '</td><td class="title">';
  var v741 = v1061 + "Positions:";
  var v227 = v741 + "</td></tr>\n";
  JAM.call(v226.write, v226, [v227], JAM.policy.p15);
  var i$$9 = 0;
  var v742 = arrayOfItems.length;
  var v243 = i$$9 < v742;
  for (;v243;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v743 = arrayOfItems[i$$9];
    var v228 = JAM.call(v743.match, v743, [/\/.+\//], JAM.policy.p17);
    matchExp = v228 + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    var v1296 = arrayOfItems[i$$9];
    var v1062 = JAM.call(v1296.match, v1296, [/\)\D*\d+/], JAM.policy.p17);
    var v744 = v1062.toString();
    var v229 = JAM.call(v744.replace, v744, [/\)\D*/, ""], JAM.policy.p16);
    cutDistance = parseFloat(v229);
    var v235 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p15);
    for (;v235;) {
      var v230 = matchExp.lastIndex;
      matchPosition = v230 - cutDistance;
      var v745 = matchPosition >= lowerLimit;
      if (v745) {
        v745 = matchPosition < upperLimit;
      }
      var v233 = v745;
      if (v233) {
        timesFound++;
        var v231 = tempString$$1 + ", ";
        var v746 = matchPosition - shiftValue;
        var v232 = v746 + 1;
        tempString$$1 = v231 + v232;
      }
      var v747 = matchExp.lastIndex;
      var v1063 = RegExp.lastMatch;
      var v748 = v1063.length;
      var v234 = v747 - v748;
      matchExp.lastIndex = v234 + 1;
      v235 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p15);
    }
    var v749 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p17);
    var v236 = v749 != -1;
    if (v236) {
      tempString$$1 = JAM.call(tempString$$1.replace, tempString$$1, [/none,\s*/, ""], JAM.policy.p16);
    }
    var v240 = timesFound == 0;
    if (v240) {
      backGroundClass = "none";
    } else {
      var v239 = timesFound == 1;
      if (v239) {
        backGroundClass = "one";
      } else {
        var v238 = timesFound == 2;
        if (v238) {
          backGroundClass = "two";
        } else {
          var v237 = timesFound == 3;
          if (v237) {
            backGroundClass = "three";
          } else {
            backGroundClass = "many";
          }
        }
      }
    }
    var v241 = outputWindow.document;
    var v1457 = '<tr><td class="' + backGroundClass;
    var v1443 = v1457 + '">';
    var v1480 = arrayOfItems[i$$9];
    var v1470 = JAM.call(v1480.match, v1480, [/\([^\(]+\)/], JAM.policy.p17);
    var v1458 = v1470.toString();
    var v1444 = JAM.call(v1458.replace, v1458, [/\(|\)/g, ""], JAM.policy.p16);
    var v1427 = v1443 + v1444;
    var v1391 = v1427 + '</td><td class="';
    var v1297 = v1391 + backGroundClass;
    var v1064 = v1297 + '">';
    var v750 = v1064 + tempString$$1;
    var v242 = v750 + "</td></tr>\n";
    JAM.call(v241.write, v241, [v242], JAM.policy.p15);
    timesFound = 0;
    i$$9++;
    var v751 = arrayOfItems.length;
    v243 = i$$9 < v751;
  }
  var v244 = outputWindow.document;
  JAM.call(v244.write, v244, ["</tbody></table>\n"], JAM.policy.p9);
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v245 = outputWindow.document;
  JAM.call(v245.write, v245, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p9);
  var v246 = outputWindow.document;
  var v1428 = '<tr><td class="title">' + "Pattern:";
  var v1392 = v1428 + '</td><td class="title">';
  var v1298 = v1392 + "Times found:";
  var v1065 = v1298 + '</td><td class="title">';
  var v752 = v1065 + "Percentage:";
  var v247 = v752 + "</td></tr>\n";
  JAM.call(v246.write, v246, [v247], JAM.policy.p15);
  var i$$10 = 0;
  var v753 = arrayOfItems$$1.length;
  var v256 = i$$10 < v753;
  for (;v256;) {
    var tempNumber = 0;
    var v754 = arrayOfItems$$1[i$$10];
    var v248 = JAM.call(v754.match, v754, [/\/[^\/]+\//], JAM.policy.p17);
    var matchExp$$1 = v248 + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    var v755 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p15);
    var v250 = v755 != -1;
    if (v250) {
      var v249 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p15);
      tempNumber = v249.length;
    }
    var percentage = 0;
    var v1066 = originalLength + 1;
    var v1393 = arrayOfItems$$1[i$$10];
    var v1299 = JAM.call(v1393.match, v1393, [/\d+/], JAM.policy.p17);
    var v1067 = parseFloat(v1299);
    var v756 = v1066 - v1067;
    var v253 = v756 > 0;
    if (v253) {
      var v251 = 100 * tempNumber;
      var v757 = originalLength + 1;
      var v1300 = arrayOfItems$$1[i$$10];
      var v1068 = JAM.call(v1300.match, v1300, [/\d+/], JAM.policy.p17);
      var v758 = parseFloat(v1068);
      var v252 = v757 - v758;
      percentage = v251 / v252;
    }
    var v254 = outputWindow.document;
    var v1481 = arrayOfItems$$1[i$$10];
    var v1471 = JAM.call(v1481.match, v1481, [/\([^\(]+\)\b/], JAM.policy.p17);
    var v1459 = v1471.toString();
    var v1445 = JAM.call(v1459.replace, v1459, [/\(|\)/g, ""], JAM.policy.p16);
    var v1429 = "<tr><td>" + v1445;
    var v1394 = v1429 + "</td><td>";
    var v1301 = v1394 + tempNumber;
    var v1069 = v1301 + "</td><td>";
    var v1070 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p11);
    var v759 = v1069 + v1070;
    var v255 = v759 + "</td></tr>\n";
    JAM.call(v254.write, v254, [v255], JAM.policy.p15);
    i$$10++;
    var v760 = arrayOfItems$$1.length;
    v256 = i$$10 < v760;
  }
  var v257 = outputWindow.document;
  JAM.call(v257.write, v257, ["</tbody></table>\n"], JAM.policy.p9);
  return true;
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v761 = sequence$$17.length;
  var v264 = v761 > 0;
  for (;v264;) {
    maxNum$$1 = sequence$$17.length;
    var v762 = Math.random();
    var v258 = v762 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v258], JAM.policy.p17);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p17);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p13);
    var v259 = randNum$$1 + 1;
    var v260 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v259, v260], JAM.policy.p16);
    sequence$$17 = tempString1 + tempString2;
    var v763 = tempSeq.length;
    var v263 = v763 == 60;
    if (v263) {
      var v261 = outputWindow.document;
      var v262 = tempSeq + "\n";
      JAM.call(v261.write, v261, [v262], JAM.policy.p15);
      tempSeq = "";
    }
    var v764 = sequence$$17.length;
    v264 = v764 > 0;
  }
  var v265 = outputWindow.document;
  var v266 = tempSeq + "\n";
  JAM.call(v265.write, v265, [v266], JAM.policy.p15);
  return true;
}
function pcrPrimerStats(theDocument) {
  JAM.startProfile('compute');

  var newDna = "";
  var title$$9 = "";
  var maxInput$$3 = 5E3;
  var maxPrimerLength = 50;
  var milliMolarSalt = 50;
  var milliMolarMagnesium = 1.5;
  var nanoMolarPrimerTotal = 200;
  var isPhosphorylated = false;
  var v765 = testScript();
  var v267 = v765 == false;
  if (v267) {
    return false;
  }
  var v1446 = theDocument.forms;
  var v1430 = v1446[0];
  var v1395 = v1430.elements;
  var v1302 = v1395[0];
  var v1071 = checkFormElement(v1302);
  var v766 = v1071 == false;
  var v1073 = !v766;
  if (v1073) {
    var v1460 = theDocument.forms;
    var v1447 = v1460[0];
    var v1431 = v1447.elements;
    var v1396 = v1431[0];
    var v1303 = v1396.value;
    var v1072 = JAM.call(checkSequenceLength, null, [v1303, maxInput$$3], JAM.policy.p19);
    v766 = v1072 == false;
  }
  var v268 = v766;
  if (v268) {
    return false;
  }
  molarSalt = milliMolarSalt / 1E3;
  molarMagnesium = milliMolarMagnesium / 1E3;
  molarPrimerTotal = nanoMolarPrimerTotal / 1E9;
  isPhosphorylated = false;
  openWindow("PCR Primer Stats");
  openPre();
  var v1397 = theDocument.forms;
  var v1304 = v1397[0];
  var v1074 = v1304.elements;
  var v767 = v1074[0];
  var v269 = v767.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v269);
  var v270 = outputWindow.document;
  JAM.call(v270.write, v270, ["Global settings:\n"], JAM.policy.p9);
  if (isPhosphorylated) {
    var v271 = outputWindow.document;
    JAM.call(v271.write, v271, ["-The primers have a 5'-phosphate group.\n"], JAM.policy.p9);
  } else {
    var v272 = outputWindow.document;
    JAM.call(v272.write, v272, ["-The primers do not have a 5'-phosphate group.\n"], JAM.policy.p9);
  }
  var v273 = outputWindow.document;
  var v768 = "-Combined concentration of K+ and Na+ in the reaction = " + milliMolarSalt;
  var v274 = v768 + " millimolar.\n";
  JAM.call(v273.write, v273, [v274], JAM.policy.p15);
  var v275 = outputWindow.document;
  var v769 = "-Mg+2 concentration in the reaction = " + milliMolarMagnesium;
  var v276 = v769 + " millimolar.\n";
  JAM.call(v275.write, v275, [v276], JAM.policy.p15);
  var v277 = outputWindow.document;
  var v770 = "-Primer concentration in the reaction = " + nanoMolarPrimerTotal;
  var v278 = v770 + " nanomolar.\n";
  JAM.call(v277.write, v277, [v278], JAM.policy.p15);
  var v279 = outputWindow.document;
  JAM.call(v279.write, v279, ["\n"], JAM.policy.p9);
  var v280 = outputWindow.document;
  JAM.call(v280.write, v280, ["------------------------------------------------------------\n"], JAM.policy.p9);
  var i$$11 = 0;
  var v771 = arrayOfFasta$$1.length;
  var v345 = i$$11 < v771;
  for (;v345;) {
    var v281 = arrayOfFasta$$1[i$$11];
    newDna = getSequenceFromFasta(v281);
    var v282 = arrayOfFasta$$1[i$$11];
    title$$9 = getTitleFromFasta(v282);
    newDna = _removeNonPrimer(newDna);
    var v772 = newDna.length;
    var v283 = v772 == 0;
    if (v283) {
      i$$11++;
      var v773 = arrayOfFasta$$1.length;
      v345 = i$$11 < v773;
      continue;
    }
    var v774 = newDna.length;
    var v284 = v774 > maxPrimerLength;
    if (v284) {
      i$$11++;
      var v775 = arrayOfFasta$$1.length;
      v345 = i$$11 < v775;
      continue;
    }
    var percentGC = _percentGC(newDna);
    var nearestNeighborTm = JAM.call(_nearestNeighborTm, null, [newDna, molarSalt, molarPrimerTotal, molarMagnesium], JAM.policy.p19);
    var selfCompHash = _getSelfComplementarityReport(newDna, 3, 50);
    var hairpinHash = _getHairpinReport(newDna, 3, 50);
    var v285 = outputWindow.document;
    JAM.call(v285.write, v285, ["------------------------------------------------------------\n"], JAM.policy.p9);
    var v286 = outputWindow.document;
    JAM.call(v286.write, v286, ["General properties:\n"], JAM.policy.p9);
    var v287 = outputWindow.document;
    JAM.call(v287.write, v287, ["-------------------\n"], JAM.policy.p9);
    var v288 = outputWindow.document;
    var v1075 = rightNum("Primer name:", "", 32, "");
    var v776 = v1075 + title$$9;
    var v289 = v776 + "\n";
    JAM.call(v288.write, v288, [v289], JAM.policy.p15);
    var v290 = outputWindow.document;
    var v1076 = rightNum("Primer sequence:", "", 32, "");
    var v777 = v1076 + newDna;
    var v291 = v777 + "\n";
    JAM.call(v290.write, v290, [v291], JAM.policy.p15);
    var v292 = outputWindow.document;
    var v1077 = rightNum("Sequence length:", "", 32, "");
    var v1078 = newDna.length;
    var v778 = v1077 + v1078;
    var v293 = v778 + "\n";
    JAM.call(v292.write, v292, [v293], JAM.policy.p15);
    var v294 = outputWindow.document;
    var v1079 = rightNum("Base counts:", "", 32, "");
    var v1080 = _baseCounts(newDna);
    var v779 = v1079 + v1080;
    var v295 = v779 + "\n";
    JAM.call(v294.write, v294, [v295], JAM.policy.p15);
    var v296 = outputWindow.document;
    var v1081 = rightNum("GC content (%):", "", 32, "");
    var v780 = v1081 + percentGC;
    var v297 = v780 + "\n";
    JAM.call(v296.write, v296, [v297], JAM.policy.p15);
    var v298 = outputWindow.document;
    var v1082 = rightNum("Molecular weight (Daltons):", "", 32, "");
    var v1083 = JAM.call(_molecularWeight, null, [newDna, isPhosphorylated], JAM.policy.p19);
    var v781 = v1082 + v1083;
    var v299 = v781 + "\n";
    JAM.call(v298.write, v298, [v299], JAM.policy.p15);
    var v300 = outputWindow.document;
    var v1084 = rightNum("nmol/A260:", "", 32, "");
    var v1085 = _nmolPerA260(newDna);
    var v782 = v1084 + v1085;
    var v301 = v782 + "\n";
    JAM.call(v300.write, v300, [v301], JAM.policy.p15);
    var v302 = outputWindow.document;
    var v1086 = rightNum("micrograms/A260:", "", 32, "");
    var v1087 = JAM.call(_microgramsPerA260, null, [newDna, isPhosphorylated], JAM.policy.p19);
    var v783 = v1086 + v1087;
    var v303 = v783 + "\n";
    JAM.call(v302.write, v302, [v303], JAM.policy.p15);
    var v304 = outputWindow.document;
    var v1088 = rightNum("Basic Tm (degrees C):", "", 32, "");
    var v1089 = _basicTm(newDna);
    var v784 = v1088 + v1089;
    var v305 = v784 + "\n";
    JAM.call(v304.write, v304, [v305], JAM.policy.p15);
    var v306 = outputWindow.document;
    var v1090 = rightNum("Salt adjusted Tm (degrees C):", "", 32, "");
    var v1091 = JAM.call(_molarSaltAdjustedTm, null, [newDna, molarSalt], JAM.policy.p19);
    var v785 = v1090 + v1091;
    var v307 = v785 + "\n";
    JAM.call(v306.write, v306, [v307], JAM.policy.p15);
    var v308 = outputWindow.document;
    var v1092 = rightNum("Nearest neighbor Tm (degrees C):", "", 32, "");
    var v786 = v1092 + nearestNeighborTm;
    var v309 = v786 + "\n";
    JAM.call(v308.write, v308, [v309], JAM.policy.p15);
    var v310 = outputWindow.document;
    JAM.call(v310.write, v310, ["\n"], JAM.policy.p9);
    var v311 = outputWindow.document;
    JAM.call(v311.write, v311, ["PCR suitability tests (Pass / Warning):\n"], JAM.policy.p9);
    var v312 = outputWindow.document;
    JAM.call(v312.write, v312, ["------------------------------------\n"], JAM.policy.p9);
    var v313 = outputWindow.document;
    var v1093 = rightNum("Single base runs:", "", 32, "");
    var v1094 = _getBaseRunsReport(newDna, 5);
    var v787 = v1093 + v1094;
    var v314 = v787 + "\n";
    JAM.call(v313.write, v313, [v314], JAM.policy.p15);
    var v315 = outputWindow.document;
    var v1095 = rightNum("Dinucleotide base runs:", "", 32, "");
    var v1096 = _getDiNucleotideRunsReport(newDna, 5);
    var v788 = v1095 + v1096;
    var v316 = v788 + "\n";
    JAM.call(v315.write, v315, [v316], JAM.policy.p15);
    var v317 = outputWindow.document;
    var v1097 = rightNum("Length:", "", 32, "");
    var v1098 = _getSuitableLengthReport(newDna, 14, 30);
    var v789 = v1097 + v1098;
    var v318 = v789 + "\n";
    JAM.call(v317.write, v317, [v318], JAM.policy.p15);
    var v319 = outputWindow.document;
    var v1099 = rightNum("Percent GC:", "", 32, "");
    var v1100 = JAM.call(_getSuitableGCReport, null, [newDna, percentGC, 40, 60], JAM.policy.p19);
    var v790 = v1099 + v1100;
    var v320 = v790 + "\n";
    JAM.call(v319.write, v319, [v320], JAM.policy.p15);
    var v321 = outputWindow.document;
    var v1101 = rightNum("Tm (Nearest neighbor):", "", 32, "");
    var v1102 = JAM.call(_getSuitableTmReport, null, [newDna, nearestNeighborTm, 50, 58], JAM.policy.p19);
    var v791 = v1101 + v1102;
    var v322 = v791 + "\n";
    JAM.call(v321.write, v321, [v322], JAM.policy.p15);
    var v323 = outputWindow.document;
    var v1103 = rightNum("GC clamp:", "", 32, "");
    var v1104 = _getSuitableThreePrimeGC(newDna, 1, 3);
    var v792 = v1103 + v1104;
    var v324 = v792 + "\n";
    JAM.call(v323.write, v323, [v324], JAM.policy.p15);
    var v325 = outputWindow.document;
    var v1105 = rightNum("Self-annealing:", "", 32, "");
    var v1106 = selfCompHash["report"];
    var v793 = v1105 + v1106;
    var v326 = v793 + "\n";
    JAM.call(v325.write, v325, [v326], JAM.policy.p15);
    var v794 = selfCompHash["report"];
    var v333 = v794 != "Pass";
    if (v333) {
      var v327 = outputWindow.document;
      var v1107 = rightNum(":", "", 32, "");
      var v1108 = selfCompHash["upper"];
      var v795 = v1107 + v1108;
      var v328 = v795 + "\n";
      JAM.call(v327.write, v327, [v328], JAM.policy.p15);
      var v329 = outputWindow.document;
      var v1109 = rightNum(":", "", 32, "");
      var v1110 = selfCompHash["divider"];
      var v796 = v1109 + v1110;
      var v330 = v796 + "\n";
      JAM.call(v329.write, v329, [v330], JAM.policy.p15);
      var v331 = outputWindow.document;
      var v1111 = rightNum(":", "", 32, "");
      var v1112 = selfCompHash["lower"];
      var v797 = v1111 + v1112;
      var v332 = v797 + "\n";
      JAM.call(v331.write, v331, [v332], JAM.policy.p15);
    }
    var v334 = outputWindow.document;
    var v1113 = rightNum("Hairpin formation:", "", 32, "");
    var v1114 = hairpinHash["report"];
    var v798 = v1113 + v1114;
    var v335 = v798 + "\n";
    JAM.call(v334.write, v334, [v335], JAM.policy.p15);
    var v799 = hairpinHash["report"];
    var v342 = v799 != "Pass";
    if (v342) {
      var v336 = outputWindow.document;
      var v1115 = rightNum(":", "", 32, "");
      var v1116 = hairpinHash["upper"];
      var v800 = v1115 + v1116;
      var v337 = v800 + "\n";
      JAM.call(v336.write, v336, [v337], JAM.policy.p15);
      var v338 = outputWindow.document;
      var v1117 = rightNum(":", "", 32, "");
      var v1118 = hairpinHash["divider"];
      var v801 = v1117 + v1118;
      var v339 = v801 + "\n";
      JAM.call(v338.write, v338, [v339], JAM.policy.p15);
      var v340 = outputWindow.document;
      var v1119 = rightNum(":", "", 32, "");
      var v1120 = hairpinHash["lower"];
      var v802 = v1119 + v1120;
      var v341 = v802 + "\n";
      JAM.call(v340.write, v340, [v341], JAM.policy.p15);
    }
    var v343 = outputWindow.document;
    JAM.call(v343.write, v343, ["------------------------------------------------------------\n"], JAM.policy.p9);
    var v344 = outputWindow.document;
    JAM.call(v344.write, v344, ["\n"], JAM.policy.p9);
    i$$11++;
    var v803 = arrayOfFasta$$1.length;
    v345 = i$$11 < v803;
  }
  closePre();
  closeWindow();

  JAM.stopProfile('compute');
  return true;
}
function _removeNonPrimer(sequence$$18) {
  JAM.call(sequence$$18.replace, sequence$$18, [/u/g, "t"], JAM.policy.p16);
  JAM.call(sequence$$18.replace, sequence$$18, [/U/g, "T"], JAM.policy.p16);
  return JAM.call(sequence$$18.replace, sequence$$18, [/[^gatcryswkmbdhvnGATCRYSWKMBDHVN]/g, ""], JAM.policy.p16);
}
function _containsOnlyNonDegenerates(sequence$$19) {
  var v804 = JAM.call(sequence$$19.search, sequence$$19, [/[^gatc]/i], JAM.policy.p17);
  var v346 = v804 == -1;
  if (v346) {
    return true;
  }
  return false;
}
function _baseCounts(sequence$$20) {
  var numG = _getBaseCount(sequence$$20, "g");
  var numA = _getBaseCount(sequence$$20, "a");
  var numT = _getBaseCount(sequence$$20, "t");
  var numC = _getBaseCount(sequence$$20, "c");
  var v347 = sequence$$20.length;
  var v1121 = numG + numA;
  var v805 = v1121 + numT;
  var v348 = v805 + numC;
  var numOther = v347 - v348;
  var v1472 = "G=" + numG;
  var v1461 = v1472 + "; A=";
  var v1448 = v1461 + numA;
  var v1432 = v1448 + "; T=";
  var v1398 = v1432 + numT;
  var v1305 = v1398 + "; C=";
  var v1122 = v1305 + numC;
  var v806 = v1122 + "; Other=";
  var v349 = v806 + numOther;
  return v349 + ";";
}
function _microgramsPerA260(sequence$$21, isPhosphorylated$$1) {
  var v350 = _containsOnlyNonDegenerates(sequence$$21);
  if (v350) {
    return JAM.call(_microgramsPerA260NonDegen, null, [sequence$$21, isPhosphorylated$$1], JAM.policy.p19);
  } else {
    return JAM.call(_microgramsPerA260Degen, null, [sequence$$21, isPhosphorylated$$1], JAM.policy.p19);
  }
  return;
}
function _microgramsPerA260NonDegen(sequence$$22, isPhosphorylated$$2) {
  var mw = JAM.call(_mw, null, [sequence$$22, isPhosphorylated$$2], JAM.policy.p19);
  var v351 = _getExtinctionCoefficient(sequence$$22);
  var result = mw / v351;
  return JAM.call(result.toFixed, result, [2], JAM.policy.p11);
}
function _microgramsPerA260Degen(sequence$$23, isPhosphorylated$$3) {
  var lowerBoundsSequence = sequence$$23;
  var upperBoundsSequence = sequence$$23;
  lowerBoundsSequence = JAM.call(lowerBoundsSequence.replace, lowerBoundsSequence, [/r/gi, "g"], JAM.policy.p16);
  lowerBoundsSequence = JAM.call(lowerBoundsSequence.replace, lowerBoundsSequence, [/y/gi, "c"], JAM.policy.p16);
  lowerBoundsSequence = JAM.call(lowerBoundsSequence.replace, lowerBoundsSequence, [/s/gi, "c"], JAM.policy.p16);
  lowerBoundsSequence = JAM.call(lowerBoundsSequence.replace, lowerBoundsSequence, [/w/gi, "t"], JAM.policy.p16);
  lowerBoundsSequence = JAM.call(lowerBoundsSequence.replace, lowerBoundsSequence, [/k/gi, "t"], JAM.policy.p16);
  lowerBoundsSequence = JAM.call(lowerBoundsSequence.replace, lowerBoundsSequence, [/m/gi, "c"], JAM.policy.p16);
  lowerBoundsSequence = JAM.call(lowerBoundsSequence.replace, lowerBoundsSequence, [/b/gi, "c"], JAM.policy.p16);
  lowerBoundsSequence = JAM.call(lowerBoundsSequence.replace, lowerBoundsSequence, [/d/gi, "t"], JAM.policy.p16);
  lowerBoundsSequence = JAM.call(lowerBoundsSequence.replace, lowerBoundsSequence, [/h/gi, "c"], JAM.policy.p16);
  lowerBoundsSequence = JAM.call(lowerBoundsSequence.replace, lowerBoundsSequence, [/v/gi, "c"], JAM.policy.p16);
  lowerBoundsSequence = JAM.call(lowerBoundsSequence.replace, lowerBoundsSequence, [/n/gi, "c"], JAM.policy.p16);
  upperBoundsSequence = JAM.call(upperBoundsSequence.replace, upperBoundsSequence, [/r/gi, "a"], JAM.policy.p16);
  upperBoundsSequence = JAM.call(upperBoundsSequence.replace, upperBoundsSequence, [/y/gi, "t"], JAM.policy.p16);
  upperBoundsSequence = JAM.call(upperBoundsSequence.replace, upperBoundsSequence, [/s/gi, "g"], JAM.policy.p16);
  upperBoundsSequence = JAM.call(upperBoundsSequence.replace, upperBoundsSequence, [/w/gi, "a"], JAM.policy.p16);
  upperBoundsSequence = JAM.call(upperBoundsSequence.replace, upperBoundsSequence, [/k/gi, "g"], JAM.policy.p16);
  upperBoundsSequence = JAM.call(upperBoundsSequence.replace, upperBoundsSequence, [/m/gi, "a"], JAM.policy.p16);
  upperBoundsSequence = JAM.call(upperBoundsSequence.replace, upperBoundsSequence, [/b/gi, "g"], JAM.policy.p16);
  upperBoundsSequence = JAM.call(upperBoundsSequence.replace, upperBoundsSequence, [/d/gi, "a"], JAM.policy.p16);
  upperBoundsSequence = JAM.call(upperBoundsSequence.replace, upperBoundsSequence, [/h/gi, "a"], JAM.policy.p16);
  upperBoundsSequence = JAM.call(upperBoundsSequence.replace, upperBoundsSequence, [/v/gi, "a"], JAM.policy.p16);
  upperBoundsSequence = JAM.call(upperBoundsSequence.replace, upperBoundsSequence, [/n/gi, "a"], JAM.policy.p16);
  var v807 = JAM.call(_microgramsPerA260NonDegen, null, [upperBoundsSequence, isPhosphorylated$$3], JAM.policy.p19);
  var v352 = v807 + " to ";
  var v353 = JAM.call(_microgramsPerA260NonDegen, null, [lowerBoundsSequence, isPhosphorylated$$3], JAM.policy.p19);
  return v352 + v353;
}
function _nmolPerA260(sequence$$24) {
  var v354 = _containsOnlyNonDegenerates(sequence$$24);
  if (v354) {
    return _nmolPerA260NonDegen(sequence$$24);
  } else {
    return _nmolPerA260Degen(sequence$$24);
  }
  return;
}
function _nmolPerA260NonDegen(sequence$$25) {
  var result$$1 = _getExtinctionCoefficient(sequence$$25);
  var v355 = 1 / result$$1;
  result$$1 = v355 * 1E3;
  return JAM.call(result$$1.toFixed, result$$1, [2], JAM.policy.p11);
}
function _getExtinctionCoefficient(sequence$$26) {
  var dimerValues = _getDimerExtinctionCoefficients();
  var singleValues = _getSingleExtinctionCoefficients();
  var dimerSum = 0;
  var singleSum = 0;
  sequence$$26 = sequence$$26.toLowerCase();
  var i$$12 = 0;
  var v1123 = sequence$$26.length;
  var v808 = v1123 - 1;
  var v357 = i$$12 < v808;
  for (;v357;) {
    var v1124 = JAM.call(sequence$$26.charAt, sequence$$26, [i$$12], JAM.policy.p15);
    var v1306 = i$$12 + 1;
    var v1125 = JAM.call(sequence$$26.charAt, sequence$$26, [v1306], JAM.policy.p15);
    var v809 = v1124 + v1125;
    var v356 = dimerValues[v809];
    dimerSum = dimerSum + v356;
    i$$12++;
    var v1126 = sequence$$26.length;
    var v810 = v1126 - 1;
    v357 = i$$12 < v810;
  }
  i$$12 = 1;
  var v1127 = sequence$$26.length;
  var v811 = v1127 - 1;
  var v359 = i$$12 < v811;
  for (;v359;) {
    var v812 = JAM.call(sequence$$26.charAt, sequence$$26, [i$$12], JAM.policy.p15);
    var v358 = singleValues[v812];
    singleSum = singleSum + v358;
    i$$12++;
    var v1128 = sequence$$26.length;
    var v813 = v1128 - 1;
    v359 = i$$12 < v813;
  }
  var v360 = 2 * dimerSum;
  return v360 - singleSum;
}
function _nmolPerA260Degen(sequence$$27) {
  var lowerBoundsSequence$$1 = sequence$$27;
  var upperBoundsSequence$$1 = sequence$$27;
  lowerBoundsSequence$$1 = JAM.call(lowerBoundsSequence$$1.replace, lowerBoundsSequence$$1, [/r/gi, "g"], JAM.policy.p16);
  lowerBoundsSequence$$1 = JAM.call(lowerBoundsSequence$$1.replace, lowerBoundsSequence$$1, [/y/gi, "c"], JAM.policy.p16);
  lowerBoundsSequence$$1 = JAM.call(lowerBoundsSequence$$1.replace, lowerBoundsSequence$$1, [/s/gi, "c"], JAM.policy.p16);
  lowerBoundsSequence$$1 = JAM.call(lowerBoundsSequence$$1.replace, lowerBoundsSequence$$1, [/w/gi, "t"], JAM.policy.p16);
  lowerBoundsSequence$$1 = JAM.call(lowerBoundsSequence$$1.replace, lowerBoundsSequence$$1, [/k/gi, "t"], JAM.policy.p16);
  lowerBoundsSequence$$1 = JAM.call(lowerBoundsSequence$$1.replace, lowerBoundsSequence$$1, [/m/gi, "c"], JAM.policy.p16);
  lowerBoundsSequence$$1 = JAM.call(lowerBoundsSequence$$1.replace, lowerBoundsSequence$$1, [/b/gi, "c"], JAM.policy.p16);
  lowerBoundsSequence$$1 = JAM.call(lowerBoundsSequence$$1.replace, lowerBoundsSequence$$1, [/d/gi, "t"], JAM.policy.p16);
  lowerBoundsSequence$$1 = JAM.call(lowerBoundsSequence$$1.replace, lowerBoundsSequence$$1, [/h/gi, "c"], JAM.policy.p16);
  lowerBoundsSequence$$1 = JAM.call(lowerBoundsSequence$$1.replace, lowerBoundsSequence$$1, [/v/gi, "c"], JAM.policy.p16);
  lowerBoundsSequence$$1 = JAM.call(lowerBoundsSequence$$1.replace, lowerBoundsSequence$$1, [/n/gi, "c"], JAM.policy.p16);
  upperBoundsSequence$$1 = JAM.call(upperBoundsSequence$$1.replace, upperBoundsSequence$$1, [/r/gi, "a"], JAM.policy.p16);
  upperBoundsSequence$$1 = JAM.call(upperBoundsSequence$$1.replace, upperBoundsSequence$$1, [/y/gi, "t"], JAM.policy.p16);
  upperBoundsSequence$$1 = JAM.call(upperBoundsSequence$$1.replace, upperBoundsSequence$$1, [/s/gi, "g"], JAM.policy.p16);
  upperBoundsSequence$$1 = JAM.call(upperBoundsSequence$$1.replace, upperBoundsSequence$$1, [/w/gi, "a"], JAM.policy.p16);
  upperBoundsSequence$$1 = JAM.call(upperBoundsSequence$$1.replace, upperBoundsSequence$$1, [/k/gi, "g"], JAM.policy.p16);
  upperBoundsSequence$$1 = JAM.call(upperBoundsSequence$$1.replace, upperBoundsSequence$$1, [/m/gi, "a"], JAM.policy.p16);
  upperBoundsSequence$$1 = JAM.call(upperBoundsSequence$$1.replace, upperBoundsSequence$$1, [/b/gi, "g"], JAM.policy.p16);
  upperBoundsSequence$$1 = JAM.call(upperBoundsSequence$$1.replace, upperBoundsSequence$$1, [/d/gi, "a"], JAM.policy.p16);
  upperBoundsSequence$$1 = JAM.call(upperBoundsSequence$$1.replace, upperBoundsSequence$$1, [/h/gi, "a"], JAM.policy.p16);
  upperBoundsSequence$$1 = JAM.call(upperBoundsSequence$$1.replace, upperBoundsSequence$$1, [/v/gi, "a"], JAM.policy.p16);
  upperBoundsSequence$$1 = JAM.call(upperBoundsSequence$$1.replace, upperBoundsSequence$$1, [/n/gi, "a"], JAM.policy.p16);
  var v814 = _nmolPerA260NonDegen(upperBoundsSequence$$1);
  var v361 = v814 + " to ";
  var v362 = _nmolPerA260NonDegen(lowerBoundsSequence$$1);
  return v361 + v362;
}
function _percentGC(sequence$$28) {
  var v363 = _containsOnlyNonDegenerates(sequence$$28);
  if (v363) {
    return _percentGCNonDegen(sequence$$28);
  } else {
    return _percentGCDegen(sequence$$28);
  }
  return;
}
function _percentGCNonDegen(sequence$$29) {
  var v364 = _getBaseCount(sequence$$29, "g");
  var v365 = _getBaseCount(sequence$$29, "c");
  var numHits = v364 + v365;
  var v1129 = sequence$$29.length;
  var v815 = numHits / v1129;
  var v366 = v815 * 100;
  return JAM.call(v366.toFixed, v366, [2], JAM.policy.p11);
}
function _percentGCDegen(sequence$$30) {
  var lowerBoundsSequence$$2 = sequence$$30;
  var upperBoundsSequence$$2 = sequence$$30;
  lowerBoundsSequence$$2 = JAM.call(lowerBoundsSequence$$2.replace, lowerBoundsSequence$$2, [/s/gi, "g"], JAM.policy.p16);
  upperBoundsSequence$$2 = JAM.call(upperBoundsSequence$$2.replace, upperBoundsSequence$$2, [/s/gi, "g"], JAM.policy.p16);
  lowerBoundsSequence$$2 = JAM.call(lowerBoundsSequence$$2.replace, lowerBoundsSequence$$2, [/w/gi, "a"], JAM.policy.p16);
  upperBoundsSequence$$2 = JAM.call(upperBoundsSequence$$2.replace, upperBoundsSequence$$2, [/w/gi, "a"], JAM.policy.p16);
  lowerBoundsSequence$$2 = JAM.call(lowerBoundsSequence$$2.replace, lowerBoundsSequence$$2, [/r/gi, "a"], JAM.policy.p16);
  lowerBoundsSequence$$2 = JAM.call(lowerBoundsSequence$$2.replace, lowerBoundsSequence$$2, [/y/gi, "t"], JAM.policy.p16);
  lowerBoundsSequence$$2 = JAM.call(lowerBoundsSequence$$2.replace, lowerBoundsSequence$$2, [/k/gi, "t"], JAM.policy.p16);
  lowerBoundsSequence$$2 = JAM.call(lowerBoundsSequence$$2.replace, lowerBoundsSequence$$2, [/m/gi, "a"], JAM.policy.p16);
  lowerBoundsSequence$$2 = JAM.call(lowerBoundsSequence$$2.replace, lowerBoundsSequence$$2, [/b/gi, "t"], JAM.policy.p16);
  lowerBoundsSequence$$2 = JAM.call(lowerBoundsSequence$$2.replace, lowerBoundsSequence$$2, [/d/gi, "a"], JAM.policy.p16);
  lowerBoundsSequence$$2 = JAM.call(lowerBoundsSequence$$2.replace, lowerBoundsSequence$$2, [/h/gi, "a"], JAM.policy.p16);
  lowerBoundsSequence$$2 = JAM.call(lowerBoundsSequence$$2.replace, lowerBoundsSequence$$2, [/v/gi, "a"], JAM.policy.p16);
  lowerBoundsSequence$$2 = JAM.call(lowerBoundsSequence$$2.replace, lowerBoundsSequence$$2, [/n/gi, "a"], JAM.policy.p16);
  upperBoundsSequence$$2 = JAM.call(upperBoundsSequence$$2.replace, upperBoundsSequence$$2, [/r/gi, "g"], JAM.policy.p16);
  upperBoundsSequence$$2 = JAM.call(upperBoundsSequence$$2.replace, upperBoundsSequence$$2, [/y/gi, "c"], JAM.policy.p16);
  upperBoundsSequence$$2 = JAM.call(upperBoundsSequence$$2.replace, upperBoundsSequence$$2, [/k/gi, "g"], JAM.policy.p16);
  upperBoundsSequence$$2 = JAM.call(upperBoundsSequence$$2.replace, upperBoundsSequence$$2, [/m/gi, "c"], JAM.policy.p16);
  upperBoundsSequence$$2 = JAM.call(upperBoundsSequence$$2.replace, upperBoundsSequence$$2, [/b/gi, "g"], JAM.policy.p16);
  upperBoundsSequence$$2 = JAM.call(upperBoundsSequence$$2.replace, upperBoundsSequence$$2, [/d/gi, "g"], JAM.policy.p16);
  upperBoundsSequence$$2 = JAM.call(upperBoundsSequence$$2.replace, upperBoundsSequence$$2, [/h/gi, "c"], JAM.policy.p16);
  upperBoundsSequence$$2 = JAM.call(upperBoundsSequence$$2.replace, upperBoundsSequence$$2, [/v/gi, "g"], JAM.policy.p16);
  upperBoundsSequence$$2 = JAM.call(upperBoundsSequence$$2.replace, upperBoundsSequence$$2, [/n/gi, "g"], JAM.policy.p16);
  var v816 = _percentGCNonDegen(lowerBoundsSequence$$2);
  var v367 = v816 + " to ";
  var v368 = _percentGCNonDegen(upperBoundsSequence$$2);
  return v367 + v368;
}
function _molecularWeight(sequence$$31, isPhosphorylated$$4) {
  var v369 = _containsOnlyNonDegenerates(sequence$$31);
  if (v369) {
    return JAM.call(_molecularWeightNonDegen, null, [sequence$$31, isPhosphorylated$$4], JAM.policy.p19);
  } else {
    return JAM.call(_molecularWeightDegen, null, [sequence$$31, isPhosphorylated$$4], JAM.policy.p19);
  }
  return;
}
function _molecularWeightNonDegen(sequence$$32, isPhosphorylated$$5) {
  var v370 = JAM.call(_mw, null, [sequence$$32, isPhosphorylated$$5], JAM.policy.p19);
  return JAM.call(v370.toFixed, v370, [2], JAM.policy.p11);
}
function _mw(sequence$$33, isPhosphorylated$$6) {
  var g = _getBaseCount(sequence$$33, "g");
  var a = _getBaseCount(sequence$$33, "a");
  var t = _getBaseCount(sequence$$33, "t");
  var c = _getBaseCount(sequence$$33, "c");
  var phosAdjust = 0;
  if (isPhosphorylated$$6) {
    phosAdjust = 79;
  }
  var v1399 = g * 329.21;
  var v1400 = a * 313.21;
  var v1307 = v1399 + v1400;
  var v1308 = t * 304.2;
  var v1130 = v1307 + v1308;
  var v1131 = c * 289.18;
  var v817 = v1130 + v1131;
  var v371 = v817 - 61.96;
  return v371 + phosAdjust;
}
function _molecularWeightDegen(sequence$$34, isPhosphorylated$$7) {
  var lowerBoundsSequence$$3 = sequence$$34;
  var upperBoundsSequence$$3 = sequence$$34;
  lowerBoundsSequence$$3 = JAM.call(lowerBoundsSequence$$3.replace, lowerBoundsSequence$$3, [/r/gi, "a"], JAM.policy.p16);
  lowerBoundsSequence$$3 = JAM.call(lowerBoundsSequence$$3.replace, lowerBoundsSequence$$3, [/y/gi, "c"], JAM.policy.p16);
  lowerBoundsSequence$$3 = JAM.call(lowerBoundsSequence$$3.replace, lowerBoundsSequence$$3, [/s/gi, "c"], JAM.policy.p16);
  lowerBoundsSequence$$3 = JAM.call(lowerBoundsSequence$$3.replace, lowerBoundsSequence$$3, [/w/gi, "t"], JAM.policy.p16);
  lowerBoundsSequence$$3 = JAM.call(lowerBoundsSequence$$3.replace, lowerBoundsSequence$$3, [/k/gi, "t"], JAM.policy.p16);
  lowerBoundsSequence$$3 = JAM.call(lowerBoundsSequence$$3.replace, lowerBoundsSequence$$3, [/m/gi, "c"], JAM.policy.p16);
  lowerBoundsSequence$$3 = JAM.call(lowerBoundsSequence$$3.replace, lowerBoundsSequence$$3, [/b/gi, "c"], JAM.policy.p16);
  lowerBoundsSequence$$3 = JAM.call(lowerBoundsSequence$$3.replace, lowerBoundsSequence$$3, [/d/gi, "t"], JAM.policy.p16);
  lowerBoundsSequence$$3 = JAM.call(lowerBoundsSequence$$3.replace, lowerBoundsSequence$$3, [/h/gi, "c"], JAM.policy.p16);
  lowerBoundsSequence$$3 = JAM.call(lowerBoundsSequence$$3.replace, lowerBoundsSequence$$3, [/v/gi, "c"], JAM.policy.p16);
  lowerBoundsSequence$$3 = JAM.call(lowerBoundsSequence$$3.replace, lowerBoundsSequence$$3, [/n/gi, "c"], JAM.policy.p16);
  upperBoundsSequence$$3 = JAM.call(upperBoundsSequence$$3.replace, upperBoundsSequence$$3, [/r/gi, "g"], JAM.policy.p16);
  upperBoundsSequence$$3 = JAM.call(upperBoundsSequence$$3.replace, upperBoundsSequence$$3, [/y/gi, "t"], JAM.policy.p16);
  upperBoundsSequence$$3 = JAM.call(upperBoundsSequence$$3.replace, upperBoundsSequence$$3, [/s/gi, "g"], JAM.policy.p16);
  upperBoundsSequence$$3 = JAM.call(upperBoundsSequence$$3.replace, upperBoundsSequence$$3, [/w/gi, "a"], JAM.policy.p16);
  upperBoundsSequence$$3 = JAM.call(upperBoundsSequence$$3.replace, upperBoundsSequence$$3, [/k/gi, "g"], JAM.policy.p16);
  upperBoundsSequence$$3 = JAM.call(upperBoundsSequence$$3.replace, upperBoundsSequence$$3, [/m/gi, "a"], JAM.policy.p16);
  upperBoundsSequence$$3 = JAM.call(upperBoundsSequence$$3.replace, upperBoundsSequence$$3, [/b/gi, "g"], JAM.policy.p16);
  upperBoundsSequence$$3 = JAM.call(upperBoundsSequence$$3.replace, upperBoundsSequence$$3, [/d/gi, "g"], JAM.policy.p16);
  upperBoundsSequence$$3 = JAM.call(upperBoundsSequence$$3.replace, upperBoundsSequence$$3, [/h/gi, "a"], JAM.policy.p16);
  upperBoundsSequence$$3 = JAM.call(upperBoundsSequence$$3.replace, upperBoundsSequence$$3, [/v/gi, "g"], JAM.policy.p16);
  upperBoundsSequence$$3 = JAM.call(upperBoundsSequence$$3.replace, upperBoundsSequence$$3, [/n/gi, "g"], JAM.policy.p16);
  var v818 = JAM.call(_molecularWeightNonDegen, null, [lowerBoundsSequence$$3, isPhosphorylated$$7], JAM.policy.p19);
  var v372 = v818 + " to ";
  var v373 = JAM.call(_molecularWeightNonDegen, null, [upperBoundsSequence$$3, isPhosphorylated$$7], JAM.policy.p19);
  return v372 + v373;
}
function _basicTm(sequence$$35) {
  var v374 = _containsOnlyNonDegenerates(sequence$$35);
  if (v374) {
    return _basicTmNonDegen(sequence$$35);
  } else {
    return _basicTmDegen(sequence$$35);
  }
  return;
}
function _basicTmNonDegen(sequence$$36) {
  var v819 = sequence$$36.length;
  var v377 = v819 < 14;
  if (v377) {
    var numG$$1 = _getBaseCount(sequence$$36, "g");
    var numC$$1 = _getBaseCount(sequence$$36, "c");
    var numA$$1 = _getBaseCount(sequence$$36, "a");
    var numT$$1 = _getBaseCount(sequence$$36, "t");
    var v1132 = numG$$1 + numC$$1;
    var v820 = 4 * v1132;
    var v1133 = numA$$1 + numT$$1;
    var v821 = 2 * v1133;
    var v375 = v820 + v821;
    return JAM.call(v375.toFixed, v375, [0], JAM.policy.p11);
  } else {
    numG$$1 = _getBaseCount(sequence$$36, "g");
    numC$$1 = _getBaseCount(sequence$$36, "c");
    var v1401 = numG$$1 + numC$$1;
    var v1309 = v1401 - 16.4;
    var v1134 = 41 * v1309;
    var v1135 = sequence$$36.length;
    var v822 = v1134 / v1135;
    var v376 = 64.9 + v822;
    return JAM.call(v376.toFixed, v376, [0], JAM.policy.p11);
  }
  return;
}
function _basicTmDegen(sequence$$37) {
  var lowerBoundsSequence$$4 = sequence$$37;
  var upperBoundsSequence$$4 = sequence$$37;
  lowerBoundsSequence$$4 = JAM.call(lowerBoundsSequence$$4.replace, lowerBoundsSequence$$4, [/s/gi, "g"], JAM.policy.p16);
  upperBoundsSequence$$4 = JAM.call(upperBoundsSequence$$4.replace, upperBoundsSequence$$4, [/s/gi, "g"], JAM.policy.p16);
  lowerBoundsSequence$$4 = JAM.call(lowerBoundsSequence$$4.replace, lowerBoundsSequence$$4, [/w/gi, "a"], JAM.policy.p16);
  upperBoundsSequence$$4 = JAM.call(upperBoundsSequence$$4.replace, upperBoundsSequence$$4, [/w/gi, "a"], JAM.policy.p16);
  lowerBoundsSequence$$4 = JAM.call(lowerBoundsSequence$$4.replace, lowerBoundsSequence$$4, [/r/gi, "a"], JAM.policy.p16);
  lowerBoundsSequence$$4 = JAM.call(lowerBoundsSequence$$4.replace, lowerBoundsSequence$$4, [/y/gi, "t"], JAM.policy.p16);
  lowerBoundsSequence$$4 = JAM.call(lowerBoundsSequence$$4.replace, lowerBoundsSequence$$4, [/k/gi, "t"], JAM.policy.p16);
  lowerBoundsSequence$$4 = JAM.call(lowerBoundsSequence$$4.replace, lowerBoundsSequence$$4, [/m/gi, "a"], JAM.policy.p16);
  lowerBoundsSequence$$4 = JAM.call(lowerBoundsSequence$$4.replace, lowerBoundsSequence$$4, [/b/gi, "t"], JAM.policy.p16);
  lowerBoundsSequence$$4 = JAM.call(lowerBoundsSequence$$4.replace, lowerBoundsSequence$$4, [/d/gi, "a"], JAM.policy.p16);
  lowerBoundsSequence$$4 = JAM.call(lowerBoundsSequence$$4.replace, lowerBoundsSequence$$4, [/h/gi, "a"], JAM.policy.p16);
  lowerBoundsSequence$$4 = JAM.call(lowerBoundsSequence$$4.replace, lowerBoundsSequence$$4, [/v/gi, "a"], JAM.policy.p16);
  lowerBoundsSequence$$4 = JAM.call(lowerBoundsSequence$$4.replace, lowerBoundsSequence$$4, [/n/gi, "a"], JAM.policy.p16);
  upperBoundsSequence$$4 = JAM.call(upperBoundsSequence$$4.replace, upperBoundsSequence$$4, [/r/gi, "g"], JAM.policy.p16);
  upperBoundsSequence$$4 = JAM.call(upperBoundsSequence$$4.replace, upperBoundsSequence$$4, [/y/gi, "c"], JAM.policy.p16);
  upperBoundsSequence$$4 = JAM.call(upperBoundsSequence$$4.replace, upperBoundsSequence$$4, [/k/gi, "g"], JAM.policy.p16);
  upperBoundsSequence$$4 = JAM.call(upperBoundsSequence$$4.replace, upperBoundsSequence$$4, [/m/gi, "c"], JAM.policy.p16);
  upperBoundsSequence$$4 = JAM.call(upperBoundsSequence$$4.replace, upperBoundsSequence$$4, [/b/gi, "g"], JAM.policy.p16);
  upperBoundsSequence$$4 = JAM.call(upperBoundsSequence$$4.replace, upperBoundsSequence$$4, [/d/gi, "g"], JAM.policy.p16);
  upperBoundsSequence$$4 = JAM.call(upperBoundsSequence$$4.replace, upperBoundsSequence$$4, [/h/gi, "c"], JAM.policy.p16);
  upperBoundsSequence$$4 = JAM.call(upperBoundsSequence$$4.replace, upperBoundsSequence$$4, [/v/gi, "g"], JAM.policy.p16);
  upperBoundsSequence$$4 = JAM.call(upperBoundsSequence$$4.replace, upperBoundsSequence$$4, [/n/gi, "g"], JAM.policy.p16);
  var v823 = _basicTmNonDegen(lowerBoundsSequence$$4);
  var v378 = v823 + " to ";
  var v379 = _basicTmNonDegen(upperBoundsSequence$$4);
  return v378 + v379;
}
function _molarSaltAdjustedTm(sequence$$38, molarSalt$$1) {
  var v380 = _containsOnlyNonDegenerates(sequence$$38);
  if (v380) {
    return JAM.call(_molarSaltAdjustedTmNonDegen, null, [sequence$$38, molarSalt$$1], JAM.policy.p19);
  } else {
    return JAM.call(_molarSaltAdjustedTmDegen, null, [sequence$$38, molarSalt$$1], JAM.policy.p19);
  }
  return;
}
function _molarSaltAdjustedTmNonDegen(sequence$$39, molarSalt$$2) {
  var v381 = _getBaseCount(sequence$$39, "g");
  var v382 = _getBaseCount(sequence$$39, "c");
  var gcHits = v381 + v382;
  var v824 = sequence$$39.length;
  var v383 = gcHits / v824;
  var pGC = v383 * 100;
  var v1402 = JAM.call(Math.log, Math, [molarSalt$$2], JAM.policy.p15);
  var v1310 = 7.21 * v1402;
  var v1136 = 81.5 + v1310;
  var v1137 = .41 * pGC;
  var v825 = v1136 + v1137;
  var v1138 = sequence$$39.length;
  var v826 = 675 / v1138;
  var v384 = v825 - v826;
  return JAM.call(v384.toFixed, v384, [0], JAM.policy.p11);
}
function _molarSaltAdjustedTmDegen(sequence$$40, molarSalt$$3) {
  var lowerBoundsSequence$$5 = sequence$$40;
  var upperBoundsSequence$$5 = sequence$$40;
  lowerBoundsSequence$$5 = JAM.call(lowerBoundsSequence$$5.replace, lowerBoundsSequence$$5, [/s/gi, "g"], JAM.policy.p16);
  upperBoundsSequence$$5 = JAM.call(upperBoundsSequence$$5.replace, upperBoundsSequence$$5, [/s/gi, "g"], JAM.policy.p16);
  lowerBoundsSequence$$5 = JAM.call(lowerBoundsSequence$$5.replace, lowerBoundsSequence$$5, [/w/gi, "a"], JAM.policy.p16);
  upperBoundsSequence$$5 = JAM.call(upperBoundsSequence$$5.replace, upperBoundsSequence$$5, [/w/gi, "a"], JAM.policy.p16);
  lowerBoundsSequence$$5 = JAM.call(lowerBoundsSequence$$5.replace, lowerBoundsSequence$$5, [/r/gi, "a"], JAM.policy.p16);
  lowerBoundsSequence$$5 = JAM.call(lowerBoundsSequence$$5.replace, lowerBoundsSequence$$5, [/y/gi, "t"], JAM.policy.p16);
  lowerBoundsSequence$$5 = JAM.call(lowerBoundsSequence$$5.replace, lowerBoundsSequence$$5, [/k/gi, "t"], JAM.policy.p16);
  lowerBoundsSequence$$5 = JAM.call(lowerBoundsSequence$$5.replace, lowerBoundsSequence$$5, [/m/gi, "a"], JAM.policy.p16);
  lowerBoundsSequence$$5 = JAM.call(lowerBoundsSequence$$5.replace, lowerBoundsSequence$$5, [/b/gi, "t"], JAM.policy.p16);
  lowerBoundsSequence$$5 = JAM.call(lowerBoundsSequence$$5.replace, lowerBoundsSequence$$5, [/d/gi, "a"], JAM.policy.p16);
  lowerBoundsSequence$$5 = JAM.call(lowerBoundsSequence$$5.replace, lowerBoundsSequence$$5, [/h/gi, "a"], JAM.policy.p16);
  lowerBoundsSequence$$5 = JAM.call(lowerBoundsSequence$$5.replace, lowerBoundsSequence$$5, [/v/gi, "a"], JAM.policy.p16);
  lowerBoundsSequence$$5 = JAM.call(lowerBoundsSequence$$5.replace, lowerBoundsSequence$$5, [/n/gi, "a"], JAM.policy.p16);
  upperBoundsSequence$$5 = JAM.call(upperBoundsSequence$$5.replace, upperBoundsSequence$$5, [/r/gi, "g"], JAM.policy.p16);
  upperBoundsSequence$$5 = JAM.call(upperBoundsSequence$$5.replace, upperBoundsSequence$$5, [/y/gi, "c"], JAM.policy.p16);
  upperBoundsSequence$$5 = JAM.call(upperBoundsSequence$$5.replace, upperBoundsSequence$$5, [/k/gi, "g"], JAM.policy.p16);
  upperBoundsSequence$$5 = JAM.call(upperBoundsSequence$$5.replace, upperBoundsSequence$$5, [/m/gi, "c"], JAM.policy.p16);
  upperBoundsSequence$$5 = JAM.call(upperBoundsSequence$$5.replace, upperBoundsSequence$$5, [/b/gi, "g"], JAM.policy.p16);
  upperBoundsSequence$$5 = JAM.call(upperBoundsSequence$$5.replace, upperBoundsSequence$$5, [/d/gi, "g"], JAM.policy.p16);
  upperBoundsSequence$$5 = JAM.call(upperBoundsSequence$$5.replace, upperBoundsSequence$$5, [/h/gi, "c"], JAM.policy.p16);
  upperBoundsSequence$$5 = JAM.call(upperBoundsSequence$$5.replace, upperBoundsSequence$$5, [/v/gi, "g"], JAM.policy.p16);
  upperBoundsSequence$$5 = JAM.call(upperBoundsSequence$$5.replace, upperBoundsSequence$$5, [/n/gi, "g"], JAM.policy.p16);
  var v827 = JAM.call(_molarSaltAdjustedTmNonDegen, null, [lowerBoundsSequence$$5, molarSalt$$3], JAM.policy.p19);
  var v385 = v827 + " to ";
  var v386 = JAM.call(_molarSaltAdjustedTmNonDegen, null, [upperBoundsSequence$$5, molarSalt$$3], JAM.policy.p19);
  return v385 + v386;
}
function _nearestNeighborTm(sequence$$41, molarSalt$$4, molarPrimerTotal$$1, molarMagnesium$$1) {
  var v387 = _containsOnlyNonDegenerates(sequence$$41);
  if (v387) {
    return JAM.call(_nearestNeighborTmNonDegen, null, [sequence$$41, molarSalt$$4, molarPrimerTotal$$1, molarMagnesium$$1], JAM.policy.p19);
  } else {
    return JAM.call(_nearestNeighborTmDegen, null, [sequence$$41, molarSalt$$4, molarPrimerTotal$$1, molarMagnesium$$1], JAM.policy.p19);
  }
  return;
}
function _nearestNeighborTmNonDegen(sequence$$42, molarSalt$$5, molarPrimerTotal$$2, molarMagnesium$$2) {
  sequence$$42 = sequence$$42.toLowerCase();
  var R = 1.987;
  var ds = 0;
  var dh = 0;
  var v388 = molarMagnesium$$2 * 140;
  var correctedSalt = molarSalt$$5 + v388;
  var v1311 = sequence$$42.length;
  var v1139 = v1311 - 1;
  var v828 = .368 * v1139;
  var v829 = JAM.call(Math.log, Math, [correctedSalt], JAM.policy.p15);
  var v389 = v828 * v829;
  ds = ds + v389;
  var termDsCorr = _getTerminalCorrectionsDsHash();
  var v830 = JAM.call(sequence$$42.charAt, sequence$$42, [0], JAM.policy.p11);
  var v390 = termDsCorr[v830];
  ds = ds + v390;
  var v1312 = sequence$$42.length;
  var v1140 = v1312 - 1;
  var v831 = JAM.call(sequence$$42.charAt, sequence$$42, [v1140], JAM.policy.p15);
  var v391 = termDsCorr[v831];
  ds = ds + v391;
  var termDhCorr = _getTerminalCorrectionsDhHash();
  var v832 = JAM.call(sequence$$42.charAt, sequence$$42, [0], JAM.policy.p11);
  var v392 = termDhCorr[v832];
  dh = dh + v392;
  var v1313 = sequence$$42.length;
  var v1141 = v1313 - 1;
  var v833 = JAM.call(sequence$$42.charAt, sequence$$42, [v1141], JAM.policy.p15);
  var v393 = termDhCorr[v833];
  dh = dh + v393;
  var dsValues = _getDsHash();
  var dhValues = _getDhHash();
  var i$$13 = 0;
  var v1142 = sequence$$42.length;
  var v834 = v1142 - 1;
  var v396 = i$$13 < v834;
  for (;v396;) {
    var v1143 = JAM.call(sequence$$42.charAt, sequence$$42, [i$$13], JAM.policy.p15);
    var v1314 = i$$13 + 1;
    var v1144 = JAM.call(sequence$$42.charAt, sequence$$42, [v1314], JAM.policy.p15);
    var v835 = v1143 + v1144;
    var v394 = dsValues[v835];
    ds = ds + v394;
    var v1145 = JAM.call(sequence$$42.charAt, sequence$$42, [i$$13], JAM.policy.p15);
    var v1315 = i$$13 + 1;
    var v1146 = JAM.call(sequence$$42.charAt, sequence$$42, [v1315], JAM.policy.p15);
    var v836 = v1145 + v1146;
    var v395 = dhValues[v836];
    dh = dh + v395;
    i$$13++;
    var v1147 = sequence$$42.length;
    var v837 = v1147 - 1;
    v396 = i$$13 < v837;
  }
  var v1148 = 1E3 * dh;
  var v1433 = molarPrimerTotal$$2 / 2;
  var v1403 = JAM.call(Math.log, Math, [v1433], JAM.policy.p15);
  var v1316 = R * v1403;
  var v1149 = ds + v1316;
  var v838 = v1148 / v1149;
  var v397 = v838 - 273.15;
  return JAM.call(v397.toFixed, v397, [2], JAM.policy.p11);
}
function _nearestNeighborTmDegen(sequence$$43, molarSalt$$6, molarPrimerTotal$$3, molarMagnesium$$3) {
  var lowerBoundsSequence$$6 = sequence$$43;
  var upperBoundsSequence$$6 = sequence$$43;
  lowerBoundsSequence$$6 = JAM.call(lowerBoundsSequence$$6.replace, lowerBoundsSequence$$6, [/s/gi, "g"], JAM.policy.p16);
  upperBoundsSequence$$6 = JAM.call(upperBoundsSequence$$6.replace, upperBoundsSequence$$6, [/s/gi, "g"], JAM.policy.p16);
  lowerBoundsSequence$$6 = JAM.call(lowerBoundsSequence$$6.replace, lowerBoundsSequence$$6, [/w/gi, "a"], JAM.policy.p16);
  upperBoundsSequence$$6 = JAM.call(upperBoundsSequence$$6.replace, upperBoundsSequence$$6, [/w/gi, "a"], JAM.policy.p16);
  lowerBoundsSequence$$6 = JAM.call(lowerBoundsSequence$$6.replace, lowerBoundsSequence$$6, [/r/gi, "a"], JAM.policy.p16);
  lowerBoundsSequence$$6 = JAM.call(lowerBoundsSequence$$6.replace, lowerBoundsSequence$$6, [/y/gi, "t"], JAM.policy.p16);
  lowerBoundsSequence$$6 = JAM.call(lowerBoundsSequence$$6.replace, lowerBoundsSequence$$6, [/k/gi, "t"], JAM.policy.p16);
  lowerBoundsSequence$$6 = JAM.call(lowerBoundsSequence$$6.replace, lowerBoundsSequence$$6, [/m/gi, "a"], JAM.policy.p16);
  lowerBoundsSequence$$6 = JAM.call(lowerBoundsSequence$$6.replace, lowerBoundsSequence$$6, [/b/gi, "t"], JAM.policy.p16);
  lowerBoundsSequence$$6 = JAM.call(lowerBoundsSequence$$6.replace, lowerBoundsSequence$$6, [/d/gi, "a"], JAM.policy.p16);
  lowerBoundsSequence$$6 = JAM.call(lowerBoundsSequence$$6.replace, lowerBoundsSequence$$6, [/h/gi, "a"], JAM.policy.p16);
  lowerBoundsSequence$$6 = JAM.call(lowerBoundsSequence$$6.replace, lowerBoundsSequence$$6, [/v/gi, "a"], JAM.policy.p16);
  lowerBoundsSequence$$6 = JAM.call(lowerBoundsSequence$$6.replace, lowerBoundsSequence$$6, [/n/gi, "a"], JAM.policy.p16);
  upperBoundsSequence$$6 = JAM.call(upperBoundsSequence$$6.replace, upperBoundsSequence$$6, [/r/gi, "g"], JAM.policy.p16);
  upperBoundsSequence$$6 = JAM.call(upperBoundsSequence$$6.replace, upperBoundsSequence$$6, [/y/gi, "c"], JAM.policy.p16);
  upperBoundsSequence$$6 = JAM.call(upperBoundsSequence$$6.replace, upperBoundsSequence$$6, [/k/gi, "g"], JAM.policy.p16);
  upperBoundsSequence$$6 = JAM.call(upperBoundsSequence$$6.replace, upperBoundsSequence$$6, [/m/gi, "c"], JAM.policy.p16);
  upperBoundsSequence$$6 = JAM.call(upperBoundsSequence$$6.replace, upperBoundsSequence$$6, [/b/gi, "g"], JAM.policy.p16);
  upperBoundsSequence$$6 = JAM.call(upperBoundsSequence$$6.replace, upperBoundsSequence$$6, [/d/gi, "g"], JAM.policy.p16);
  upperBoundsSequence$$6 = JAM.call(upperBoundsSequence$$6.replace, upperBoundsSequence$$6, [/h/gi, "c"], JAM.policy.p16);
  upperBoundsSequence$$6 = JAM.call(upperBoundsSequence$$6.replace, upperBoundsSequence$$6, [/v/gi, "g"], JAM.policy.p16);
  upperBoundsSequence$$6 = JAM.call(upperBoundsSequence$$6.replace, upperBoundsSequence$$6, [/n/gi, "g"], JAM.policy.p16);
  var v839 = JAM.call(_nearestNeighborTmNonDegen, null, [lowerBoundsSequence$$6, molarSalt$$6, molarPrimerTotal$$3, molarMagnesium$$3], JAM.policy.p19);
  var v398 = v839 + " to ";
  var v399 = JAM.call(_nearestNeighborTmNonDegen, null, [upperBoundsSequence$$6, molarSalt$$6, molarPrimerTotal$$3, molarMagnesium$$3], JAM.policy.p19);
  return v398 + v399;
}
function _getBaseCount(sequence$$44, base$$1) {
  var basePattern = new RegExp(base$$1, "gi");
  var v840 = JAM.call(sequence$$44.search, sequence$$44, [basePattern], JAM.policy.p15);
  var v401 = v840 != -1;
  if (v401) {
    var v400 = JAM.call(sequence$$44.match, sequence$$44, [basePattern], JAM.policy.p15);
    return v400.length;
  } else {
    return 0;
  }
  return;
}
function _getTerminalCorrectionsDsHash() {
  var hash = {};
  hash["g"] = -2.8;
  hash["a"] = 4.1;
  hash["t"] = 4.1;
  hash["c"] = -2.8;
  return hash;
}
function _getTerminalCorrectionsDhHash() {
  var hash$$1 = {};
  hash$$1["g"] = .1;
  hash$$1["a"] = 2.3;
  hash$$1["t"] = 2.3;
  hash$$1["c"] = .1;
  return hash$$1;
}
function _getDsHash() {
  var hash$$2 = {};
  hash$$2["gg"] = -19.9;
  hash$$2["ga"] = -22.2;
  hash$$2["gt"] = -22.4;
  hash$$2["gc"] = -27.2;
  hash$$2["ag"] = -21;
  hash$$2["aa"] = -22.2;
  hash$$2["at"] = -20.4;
  hash$$2["ac"] = -22.4;
  hash$$2["tg"] = -22.7;
  hash$$2["ta"] = -21.3;
  hash$$2["tt"] = -22.2;
  hash$$2["tc"] = -22.2;
  hash$$2["cg"] = -27.2;
  hash$$2["ca"] = -22.7;
  hash$$2["ct"] = -21;
  hash$$2["cc"] = -19.9;
  return hash$$2;
}
function _getDhHash() {
  var hash$$3 = {};
  hash$$3["gg"] = -8;
  hash$$3["ga"] = -8.2;
  hash$$3["gt"] = -8.4;
  hash$$3["gc"] = -10.6;
  hash$$3["ag"] = -7.8;
  hash$$3["aa"] = -7.9;
  hash$$3["at"] = -7.2;
  hash$$3["ac"] = -8.4;
  hash$$3["tg"] = -8.5;
  hash$$3["ta"] = -7.2;
  hash$$3["tt"] = -7.9;
  hash$$3["tc"] = -8.2;
  hash$$3["cg"] = -10.6;
  hash$$3["ca"] = -8.5;
  hash$$3["ct"] = -7.8;
  hash$$3["cc"] = -8;
  return hash$$3;
}
function _getDimerExtinctionCoefficients() {
  var hash$$4 = {};
  hash$$4["gg"] = 10.8;
  hash$$4["ga"] = 12.6;
  hash$$4["gt"] = 10;
  hash$$4["gc"] = 8.8;
  hash$$4["ag"] = 12.5;
  hash$$4["aa"] = 13.7;
  hash$$4["at"] = 11.4;
  hash$$4["ac"] = 10.6;
  hash$$4["tg"] = 9.5;
  hash$$4["ta"] = 11.7;
  hash$$4["tt"] = 8.4;
  hash$$4["tc"] = 8.1;
  hash$$4["cg"] = 9;
  hash$$4["ca"] = 10.6;
  hash$$4["ct"] = 7.6;
  hash$$4["cc"] = 7.3;
  return hash$$4;
}
function _getSingleExtinctionCoefficients() {
  var hash$$5 = {};
  hash$$5["g"] = 11.5;
  hash$$5["a"] = 15.4;
  hash$$5["t"] = 8.7;
  hash$$5["c"] = 7.4;
  return hash$$5;
}
function _getBaseRunsReport(sequence$$45, minRunLength) {
  var report = "";
  var hasRun = false;
  var nucleotides = ["G", "A", "T", "C"];
  var i$$14 = 0;
  var v841 = nucleotides.length;
  var v404 = i$$14 < v841;
  for (;v404;) {
    var v842 = nucleotides[i$$14];
    var v403 = JAM.call(_hasRunOfBases, null, [sequence$$45, v842, minRunLength], JAM.policy.p19);
    if (v403) {
      hasRun = true;
      var v843 = report + "Contains run of ";
      var v844 = nucleotides[i$$14];
      var v402 = v843 + v844;
      report = v402 + "'s; ";
    }
    i$$14++;
    var v845 = nucleotides.length;
    v404 = i$$14 < v845;
  }
  if (hasRun) {
    return "Warning: " + report;
  } else {
    return "Pass";
  }
  return;
}
function _getDiNucleotideRunsReport(sequence$$46, minRunLength$$1) {
  var report$$1 = "";
  var hasRun$$1 = false;
  var diNucleotides = ["GA", "GT", "GC", "AG", "AT", "AC", "TG", "TA", "TC", "CG", "CA", "CT"];
  var i$$15 = 0;
  var v846 = diNucleotides.length;
  var v407 = i$$15 < v846;
  for (;v407;) {
    var v847 = diNucleotides[i$$15];
    var v406 = JAM.call(_hasRunOfBases, null, [sequence$$46, v847, minRunLength$$1], JAM.policy.p19);
    if (v406) {
      hasRun$$1 = true;
      var v848 = report$$1 + "Contains run of ";
      var v849 = diNucleotides[i$$15];
      var v405 = v848 + v849;
      report$$1 = v405 + "'s; ";
    }
    i$$15++;
    var v850 = diNucleotides.length;
    v407 = i$$15 < v850;
  }
  if (hasRun$$1) {
    return "Warning: " + report$$1;
  } else {
    return "Pass";
  }
  return;
}
function _hasRunOfBases(sequence$$47, base$$2, minRunLength$$2) {
  var v1317 = "(?:" + base$$2;
  var v1150 = v1317 + "){";
  var v851 = v1150 + minRunLength$$2;
  var v408 = v851 + ",}";
  var basePattern$$1 = new RegExp(v408, "gi");
  var v852 = JAM.call(sequence$$47.search, sequence$$47, [basePattern$$1], JAM.policy.p15);
  var v410 = v852 != -1;
  if (v410) {
    var v409 = JAM.call(sequence$$47.match, sequence$$47, [basePattern$$1], JAM.policy.p15);
    return v409.length;
  } else {
    return 0;
  }
  return;
}
function _getSuitableLengthReport(sequence$$48, minSuitableLength, maxSuitableLength) {
  var report$$2 = "";
  var hasProblem = false;
  var v853 = sequence$$48.length;
  var v412 = v853 < minSuitableLength;
  if (v412) {
    hasProblem = true;
    var v854 = report$$2 + "Contains fewer than ";
    var v411 = v854 + minSuitableLength;
    report$$2 = v411 + " bases; ";
  }
  var v855 = sequence$$48.length;
  var v414 = v855 > maxSuitableLength;
  if (v414) {
    hasProblem = true;
    var v856 = report$$2 + "Contains more than ";
    var v413 = v856 + maxSuitableLength;
    report$$2 = v413 + " bases; ";
  }
  if (hasProblem) {
    return "Warning: " + report$$2;
  } else {
    return "Pass";
  }
  return;
}
function _getSuitableGCReport(sequence$$49, percentGCRange, minSuitableGC, maxSuitableGC) {
  var report$$3 = "";
  var hasProblem$$1 = false;
  var lowerCalculated;
  var upperCalculated;
  var rangePattern = new RegExp("([d.]+)D+([d.]+)", "gi");
  var v857 = JAM.call(percentGCRange.search, percentGCRange, [rangePattern], JAM.policy.p15);
  var v415 = v857 != -1;
  if (v415) {
    lowerCalculated = parseFloat($1);
    upperCalculated = parseFloat($2);
  } else {
    lowerCalculated = parseFloat(percentGCRange);
    upperCalculated = parseFloat(percentGCRange);
  }
  var v417 = lowerCalculated < minSuitableGC;
  if (v417) {
    hasProblem$$1 = true;
    var v858 = report$$3 + "%GC is less than ";
    var v416 = v858 + minSuitableGC;
    report$$3 = v416 + "; ";
  }
  var v419 = upperCalculated > maxSuitableGC;
  if (v419) {
    hasProblem$$1 = true;
    var v859 = report$$3 + "%GC is greater than ";
    var v418 = v859 + maxSuitableGC;
    report$$3 = v418 + "; ";
  }
  if (hasProblem$$1) {
    return "Warning: " + report$$3;
  } else {
    return "Pass";
  }
  return;
}
function _getSuitableLengthReport(sequence$$50, minSuitableLength$$1, maxSuitableLength$$1) {
  var report$$4 = "";
  var hasProblem$$2 = false;
  var v860 = sequence$$50.length;
  var v421 = v860 < minSuitableLength$$1;
  if (v421) {
    hasProblem$$2 = true;
    var v861 = report$$4 + "Contains fewer than ";
    var v420 = v861 + minSuitableLength$$1;
    report$$4 = v420 + " bases; ";
  }
  var v862 = sequence$$50.length;
  var v423 = v862 > maxSuitableLength$$1;
  if (v423) {
    hasProblem$$2 = true;
    var v863 = report$$4 + "Contains more than ";
    var v422 = v863 + maxSuitableLength$$1;
    report$$4 = v422 + " bases; ";
  }
  if (hasProblem$$2) {
    return "Warning: " + report$$4;
  } else {
    return "Pass";
  }
  return;
}
function _getSuitableTmReport(sequence$$51, range$$5, minSuitable, maxSuitable) {
  var report$$5 = "";
  var hasProblem$$3 = false;
  var lowerCalculated$$1;
  var upperCalculated$$1;
  var rangePattern$$1 = new RegExp("([d.]+)D+([d.]+)", "gi");
  var v864 = JAM.call(range$$5.search, range$$5, [rangePattern$$1], JAM.policy.p15);
  var v424 = v864 != -1;
  if (v424) {
    lowerCalculated$$1 = parseFloat($1);
    upperCalculated$$1 = parseFloat($2);
  } else {
    lowerCalculated$$1 = parseFloat(range$$5);
    upperCalculated$$1 = parseFloat(range$$5);
  }
  var v426 = lowerCalculated$$1 < minSuitable;
  if (v426) {
    hasProblem$$3 = true;
    var v865 = report$$5 + "Tm is less than ";
    var v425 = v865 + minSuitable;
    report$$5 = v425 + "; ";
  }
  var v428 = upperCalculated$$1 > maxSuitable;
  if (v428) {
    hasProblem$$3 = true;
    var v866 = report$$5 + "Tm is greater than ";
    var v427 = v866 + maxSuitable;
    report$$5 = v427 + "; ";
  }
  if (hasProblem$$3) {
    return "Warning: " + report$$5;
  } else {
    return "Pass";
  }
  return;
}
function _getSuitableThreePrimeGC(sequence$$52, minSuitable$$1, maxSuitable$$1) {
  var threePrimeEnd;
  var desiredThreePrimeEndSize = 5;
  var report$$6 = "";
  var gcCounts;
  var hasProblem$$4 = false;
  var v867 = sequence$$52.length;
  var v430 = v867 >= desiredThreePrimeEndSize;
  if (v430) {
    var v868 = sequence$$52.length;
    var v429 = v868 - desiredThreePrimeEndSize;
    threePrimeEnd = JAM.call(sequence$$52.substr, sequence$$52, [v429, 5], JAM.policy.p16);
  } else {
    threePrimeEnd = sequence$$52;
  }
  var v431 = _getBaseCount(threePrimeEnd, "g");
  var v432 = _getBaseCount(threePrimeEnd, "c");
  gcCounts = v431 + v432;
  var v434 = gcCounts < minSuitable$$1;
  if (v434) {
    hasProblem$$4 = true;
    var v1318 = report$$6 + "There are less than ";
    var v1151 = v1318 + minSuitable$$1;
    var v869 = v1151 + " G's or C's in the last ";
    var v870 = threePrimeEnd.length;
    var v433 = v869 + v870;
    report$$6 = v433 + " bases; ";
  }
  var v436 = gcCounts > maxSuitable$$1;
  if (v436) {
    hasProblem$$4 = true;
    var v1319 = report$$6 + "There are more than ";
    var v1152 = v1319 + maxSuitable$$1;
    var v871 = v1152 + " G's or C's in the last ";
    var v872 = threePrimeEnd.length;
    var v435 = v871 + v872;
    report$$6 = v435 + " bases; ";
  }
  if (hasProblem$$4) {
    return "Warning: " + report$$6;
  } else {
    return "Pass";
  }
  return;
}
function _getSelfComplementarityReport(sequence$$53, maxContig, maxPercentIdent) {
  var matchScore = 1;
  var mismatchScore = -1;
  var gapPenalty = 99;
  var beginGapPenalty = 0;
  var endGapPenalty = 0;
  var returnHash = {};
  returnHash["report"] = "";
  returnHash["upper"] = "";
  returnHash["lower"] = "";
  returnHash["divider"] = "";
  var report$$7 = "";
  var hasProblem$$5 = false;
  var sequenceLength = sequence$$53.length;
  var matrix = new Complementarity;
  JAM.call(matrix.setMatch, matrix, [matchScore], JAM.policy.p17);
  JAM.call(matrix.setMismatch, matrix, [mismatchScore], JAM.policy.p17);
  var scoreSet = new ScoreSet;
  JAM.call(scoreSet.setScoreSetParam, scoreSet, [matrix, gapPenalty, beginGapPenalty, endGapPenalty], JAM.policy.p21);
  var rev = reverse(sequence$$53);
  sequence$$53 = JAM.call(sequence$$53.match, sequence$$53, [/./g], JAM.policy.p17);
  rev = JAM.call(rev.match, rev, [/./g], JAM.policy.p17);
  alignment = new AlignPairQuad;
  JAM.call(alignment.initializeMatrix, alignment, [sequence$$53, rev, scoreSet], JAM.policy.p21);
  alignment.fillMatrix();
  alignment.align();
  var v437 = alignment.getAlignedM();
  var seqAligned = JAM.call(v437.replace, v437, [/\-/g, " "], JAM.policy.p16);
  var v438 = alignment.getAlignedN();
  var revAligned = JAM.call(v438.replace, v438, [/\-/g, " "], JAM.policy.p16);
  var score = alignment.score;
  var divider = new Array;
  var maxContiguous = 0;
  var totalMatches = 0;
  var contiguous = 0;
  var i$$16 = 0;
  var v873 = seqAligned.length;
  var v441 = i$$16 < v873;
  for (;v441;) {
    var v1153 = JAM.call(seqAligned.charAt, seqAligned, [i$$16], JAM.policy.p15);
    var v1154 = JAM.call(revAligned.charAt, revAligned, [i$$16], JAM.policy.p15);
    var v874 = JAM.call(scoreSet.getScore, scoreSet, [v1153, v1154], JAM.policy.p21);
    var v439 = v874 == matchScore;
    if (v439) {
      JAM.call(divider.push, divider, ["|"], JAM.policy.p9);
      contiguous++;
      totalMatches++;
    } else {
      JAM.call(divider.push, divider, [" "], JAM.policy.p9);
      contiguous = 0;
    }
    var v440 = contiguous > maxContiguous;
    if (v440) {
      maxContiguous = contiguous;
    }
    i$$16++;
    var v875 = seqAligned.length;
    v441 = i$$16 < v875;
  }
  var v443 = maxContiguous > maxContig;
  if (v443) {
    hasProblem$$5 = true;
    var v876 = report$$7 + "There are more than ";
    var v442 = v876 + maxContig;
    report$$7 = v442 + " self-annealing bases in a row; ";
  }
  var v1155 = totalMatches / sequenceLength;
  var v877 = v1155 * 100;
  var v445 = v877 > maxPercentIdent;
  if (v445) {
    hasProblem$$5 = true;
    var v878 = report$$7 + "More than ";
    var v444 = v878 + maxPercentIdent;
    report$$7 = v444 + " percent of the bases are self-annealing; ";
  }
  if (hasProblem$$5) {
    report$$7 = "Warning: " + report$$7;
  } else {
    report$$7 = "Pass";
  }
  returnHash["report"] = report$$7;
  returnHash["upper"] = seqAligned;
  returnHash["lower"] = revAligned;
  var v1517 = JAM.call(divider.join, divider, [""], JAM.policy.p9);
  returnHash["divider"] = v1517;
  return returnHash;
}
function _getHairpinReport(sequence$$54, maxContig$$1, maxPercentIdent$$1) {
  var upper = sequence$$54;
  upper = JAM.call(upper.match, upper, [/./g], JAM.policy.p17);
  var loop = "";
  var lower = new Array;
  var returnHash$$1 = {};
  returnHash$$1["report"] = "";
  returnHash$$1["upper"] = "";
  returnHash$$1["lower"] = "";
  returnHash$$1["divider"] = "";
  var topScore = 0;
  var score$$1;
  var u;
  var l;
  var topScoreUpper = sequence$$54;
  var topScoreLower = "";
  var topScoreLoop = "";
  var matchScore$$1 = 1;
  var mismatchScore$$1 = -1;
  var gapPenalty$$1 = 99;
  var beginGapPenalty$$1 = 0;
  var endGapPenalty$$1 = 0;
  var report$$8 = "";
  var hasProblem$$6 = false;
  var sequenceLength$$1 = sequence$$54.length;
  var matrix$$1 = new Complementarity;
  JAM.call(matrix$$1.setMatch, matrix$$1, [matchScore$$1], JAM.policy.p17);
  JAM.call(matrix$$1.setMismatch, matrix$$1, [mismatchScore$$1], JAM.policy.p17);
  var scoreSet$$1 = new ScoreSet;
  JAM.call(scoreSet$$1.setScoreSetParam, scoreSet$$1, [matrix$$1, gapPenalty$$1, beginGapPenalty$$1, endGapPenalty$$1], JAM.policy.p21);
  var v879 = upper.length;
  var v452 = v879 > 0;
  for (;v452;) {
    score$$1 = 0;
    var v446 = loop == "";
    if (v446) {
      loop = upper.pop();
    } else {
      JAM.call(lower.push, lower, [loop], JAM.policy.p15);
      loop = "";
    }
    var v447 = upper.length;
    u = v447 - 1;
    var v448 = lower.length;
    l = v448 - 1;
    var v880 = u >= 0;
    if (v880) {
      v880 = l >= 0;
    }
    var v450 = v880;
    for (;v450;) {
      var v881 = upper[u];
      var v882 = lower[l];
      var v449 = JAM.call(scoreSet$$1.getScore, scoreSet$$1, [v881, v882], JAM.policy.p21);
      score$$1 = score$$1 + v449;
      u--;
      l--;
      var v883 = u >= 0;
      if (v883) {
        v883 = l >= 0;
      }
      v450 = v883;
    }
    var v451 = score$$1 > topScore;
    if (v451) {
      topScore = score$$1;
      topScoreUpper = JAM.call(upper.join, upper, [""], JAM.policy.p9);
      topScoreLower = JAM.call(lower.join, lower, [""], JAM.policy.p9);
      topScoreLoop = loop;
    }
    var v884 = upper.length;
    v452 = v884 > 0;
  }
  var v453 = topScoreUpper.length;
  var v454 = topScoreLower.length;
  var upperLowerDiff = v453 - v454;
  var v458 = upperLowerDiff > 0;
  if (v458) {
    var i$$17 = 0;
    var v455 = i$$17 < upperLowerDiff;
    for (;v455;) {
      topScoreLower = " " + topScoreLower;
      i$$17++;
      v455 = i$$17 < upperLowerDiff;
    }
  } else {
    var v457 = upperLowerDiff < 0;
    if (v457) {
      i$$17 = upperLowerDiff;
      var v456 = i$$17 < 0;
      for (;v456;) {
        topScoreUpper = " " + topScoreUpper;
        i$$17++;
        v456 = i$$17 < 0;
      }
    }
  }
  var maxContiguous$$1 = 0;
  var totalMatches$$1 = 0;
  var contiguous$$1 = 0;
  var divider$$1 = new Array;
  i$$17 = 0;
  var v885 = topScoreUpper.length;
  var v461 = i$$17 < v885;
  for (;v461;) {
    var v1156 = JAM.call(topScoreUpper.charAt, topScoreUpper, [i$$17], JAM.policy.p15);
    var v1157 = JAM.call(topScoreLower.charAt, topScoreLower, [i$$17], JAM.policy.p15);
    var v886 = JAM.call(scoreSet$$1.getScore, scoreSet$$1, [v1156, v1157], JAM.policy.p21);
    var v459 = v886 == matchScore$$1;
    if (v459) {
      JAM.call(divider$$1.push, divider$$1, ["|"], JAM.policy.p9);
      contiguous$$1++;
      totalMatches$$1++;
    } else {
      JAM.call(divider$$1.push, divider$$1, [" "], JAM.policy.p9);
      contiguous$$1 = 0;
    }
    var v460 = contiguous$$1 > maxContiguous$$1;
    if (v460) {
      maxContiguous$$1 = contiguous$$1;
    }
    i$$17++;
    var v887 = topScoreUpper.length;
    v461 = i$$17 < v887;
  }
  var v463 = maxContiguous$$1 > maxContig$$1;
  if (v463) {
    hasProblem$$6 = true;
    var v888 = report$$8 + "There are more than ";
    var v462 = v888 + maxContig$$1;
    report$$8 = v462 + " hairpin bases in a row; ";
  }
  var v1158 = totalMatches$$1 / sequenceLength$$1;
  var v889 = v1158 * 100;
  var v465 = v889 > maxPercentIdent$$1;
  if (v465) {
    hasProblem$$6 = true;
    var v890 = report$$8 + "More than ";
    var v464 = v890 + maxPercentIdent$$1;
    report$$8 = v464 + " percent of the bases are in a hairpin; ";
  }
  if (hasProblem$$6) {
    report$$8 = "Warning: " + report$$8;
  } else {
    report$$8 = "Pass";
  }
  var v466 = topScoreLoop == "";
  if (v466) {
    topScoreLoop = ")";
  }
  returnHash$$1["report"] = report$$8;
  returnHash$$1["upper"] = topScoreUpper;
  var v467 = JAM.call(divider$$1.join, divider$$1, [""], JAM.policy.p9);
  returnHash$$1["divider"] = v467 + topScoreLoop;
  returnHash$$1["lower"] = topScoreLower;
  return returnHash$$1;
}
function getScore(r1$$1, r2) {
  var v468 = this.scoringMatrix;
  return JAM.call(v468.scoringMatrix_getScore, v468, [r1$$1, r2], JAM.policy.p21);
}
function setScoreSetParam(scoringMatrix, gapPenalty$$2, beginGapPenalty$$2, endGapPenalty$$2) {
  this.scoringMatrix = scoringMatrix;
  this.gap = gapPenalty$$2;
  this.beginGap = beginGapPenalty$$2;
  this.endGap = endGapPenalty$$2;
  return;
}
function ScoreSet() {
  this.useBeginGapTop = true;
  this.useBeginGapLeft = true;
  this.useEndGapBottom = true;
  this.useEndGapRight = true;
  return;
}
function scoringMatrix_getScore(r1$$2, r2$$1) {
  r1$$2 = r1$$2.toLowerCase();
  r2$$1 = r2$$1.toLowerCase();
  var v1159 = r1$$2 == "g";
  if (v1159) {
    v1159 = r2$$1 == "c";
  }
  var v891 = v1159;
  var v1161 = !v891;
  if (v1161) {
    var v1160 = r2$$1 == "g";
    if (v1160) {
      v1160 = r1$$2 == "c";
    }
    v891 = v1160;
  }
  var v470 = v891;
  if (v470) {
    return this.match;
  } else {
    var v1162 = r1$$2 == "a";
    if (v1162) {
      v1162 = r2$$1 == "t";
    }
    var v892 = v1162;
    var v1164 = !v892;
    if (v1164) {
      var v1163 = r2$$1 == "a";
      if (v1163) {
        v1163 = r1$$2 == "t";
      }
      v892 = v1163;
    }
    var v469 = v892;
    if (v469) {
      return this.match;
    } else {
      return this.mismatch;
    }
  }
  return;
}
function ScoringMatrix() {
  return;
}
function setMismatch(mismatchScore$$2) {
  this.mismatch = mismatchScore$$2;
  return;
}
function setMatch(matchScore$$2) {
  this.match = matchScore$$2;
  return;
}
function Complementarity() {
  return;
}
function Node() {
  return;
}
function initializeMatrix(sequenceOne$$2, sequenceTwo$$2, scoreSet$$2) {
  this.scoreSet = scoreSet$$2;
  this.M = sequenceOne$$2;
  this.N = sequenceTwo$$2;
  this.score = 0;
  var v1165 = this.M;
  var v893 = v1165.length;
  var v471 = v893 + 1;
  var v1518 = new Array(v471);
  this.nodes = v1518;
  var i$$18 = 0;
  var v1166 = this.nodes;
  var v894 = v1166.length;
  var v475 = i$$18 < v894;
  for (;v475;) {
    var v472 = this.nodes;
    var v1320 = this.N;
    var v1167 = v1320.length;
    var v895 = v1167 + 1;
    var v1519 = new Array(v895);
    v472[i$$18] = v1519;
    var j$$10 = 0;
    var v1321 = this.nodes;
    var v1168 = v1321[i$$18];
    var v896 = v1168.length;
    var v474 = j$$10 < v896;
    for (;v474;) {
      var v897 = this.nodes;
      var v473 = v897[i$$18];
      var v1520 = new Node;
      v473[j$$10] = v1520;
      j$$10++;
      var v1322 = this.nodes;
      var v1169 = v1322[i$$18];
      var v898 = v1169.length;
      v474 = j$$10 < v898;
    }
    i$$18++;
    var v1170 = this.nodes;
    var v899 = v1170.length;
    v475 = i$$18 < v899;
  }
  var v1171 = this.nodes;
  var v900 = v1171[0];
  var v476 = v900[0];
  v476.value = 0;
  i$$18 = 1;
  var v1172 = this.nodes;
  var v901 = v1172.length;
  var v482 = i$$18 < v901;
  for (;v482;) {
    var v902 = this.scoreSet;
    var v479 = v902.useBeginGapLeft;
    if (v479) {
      var v1173 = this.nodes;
      var v903 = v1173[i$$18];
      var v477 = v903[0];
      var v1404 = this.nodes;
      var v1405 = i$$18 - 1;
      var v1323 = v1404[v1405];
      var v1174 = v1323[0];
      var v904 = v1174.value;
      var v1175 = this.scoreSet;
      var v905 = v1175.beginGap;
      v477.value = v904 - v905;
    } else {
      var v1176 = this.nodes;
      var v906 = v1176[i$$18];
      var v478 = v906[0];
      var v1406 = this.nodes;
      var v1407 = i$$18 - 1;
      var v1324 = v1406[v1407];
      var v1177 = v1324[0];
      var v907 = v1177.value;
      var v1178 = this.scoreSet;
      var v908 = v1178.gap;
      v478.value = v907 - v908;
    }
    var v1179 = this.nodes;
    var v909 = v1179[i$$18];
    var v480 = v909[0];
    v480.tracebackI = i$$18 - 1;
    var v1180 = this.nodes;
    var v910 = v1180[i$$18];
    var v481 = v910[0];
    v481.tracebackJ = 0;
    i$$18++;
    var v1181 = this.nodes;
    var v911 = v1181.length;
    v482 = i$$18 < v911;
  }
  j$$10 = 1;
  var v1325 = this.nodes;
  var v1182 = v1325[0];
  var v912 = v1182.length;
  var v488 = j$$10 < v912;
  for (;v488;) {
    var v913 = this.scoreSet;
    var v485 = v913.useBeginGapTop;
    if (v485) {
      var v1183 = this.nodes;
      var v914 = v1183[0];
      var v483 = v914[j$$10];
      var v1408 = this.nodes;
      var v1326 = v1408[0];
      var v1327 = j$$10 - 1;
      var v1184 = v1326[v1327];
      var v915 = v1184.value;
      var v1185 = this.scoreSet;
      var v916 = v1185.beginGap;
      v483.value = v915 - v916;
    } else {
      var v1186 = this.nodes;
      var v917 = v1186[0];
      var v484 = v917[j$$10];
      var v1409 = this.nodes;
      var v1328 = v1409[0];
      var v1329 = j$$10 - 1;
      var v1187 = v1328[v1329];
      var v918 = v1187.value;
      var v1188 = this.scoreSet;
      var v919 = v1188.gap;
      v484.value = v918 - v919;
    }
    var v1189 = this.nodes;
    var v920 = v1189[0];
    var v486 = v920[j$$10];
    v486.tracebackI = 0;
    var v1190 = this.nodes;
    var v921 = v1190[0];
    var v487 = v921[j$$10];
    v487.tracebackJ = j$$10 - 1;
    j$$10++;
    var v1330 = this.nodes;
    var v1191 = v1330[0];
    var v922 = v1191.length;
    v488 = j$$10 < v922;
  }
  return;
}
function dumpMatrix() {
  var v489 = outputWindow.document;
  var v1410 = this.nodes;
  var v1331 = v1410.length;
  var v1192 = "Dynamic programming matrix i=" + v1331;
  var v923 = v1192 + " and j=";
  var v1332 = this.nodes;
  var v1193 = v1332[0];
  var v924 = v1193.length;
  var v490 = v923 + v924;
  JAM.call(v489.write, v489, [v490], JAM.policy.p15);
  var v491 = outputWindow.document;
  JAM.call(v491.write, v491, ["\n"], JAM.policy.p9);
  var i$$19 = 0;
  var v1194 = this.nodes;
  var v925 = v1194.length;
  var v502 = i$$19 < v925;
  for (;v502;) {
    var j$$11 = 0;
    var v1333 = this.nodes;
    var v1195 = v1333[i$$19];
    var v926 = v1195.length;
    var v500 = j$$11 < v926;
    for (;v500;) {
      var v1196 = this.nodes;
      var v927 = v1196[i$$19];
      var v492 = v927[j$$11];
      var traceI = v492.tracebackI;
      var v1197 = this.nodes;
      var v928 = v1197[i$$19];
      var v493 = v928[j$$11];
      var traceJ = v493.tracebackJ;
      var v494 = traceI == undefined;
      if (v494) {
        traceI = "u";
      }
      var v495 = traceJ == undefined;
      if (v495) {
        traceJ = "u";
      }
      var v1462 = "(" + i$$19;
      var v1449 = v1462 + ",";
      var v1434 = v1449 + j$$11;
      var v1411 = v1434 + ")[";
      var v1334 = v1411 + traceI;
      var v1198 = v1334 + ",";
      var v929 = v1198 + traceJ;
      var v496 = v929 + "]=";
      var v1335 = this.nodes;
      var v1199 = v1335[i$$19];
      var v930 = v1199[j$$11];
      var v497 = v930.value;
      var output = v496 + v497;
      var v498 = outputWindow.document;
      var v499 = rightNum(output, "", 20, " ");
      JAM.call(v498.write, v498, [v499], JAM.policy.p15);
      j$$11++;
      var v1336 = this.nodes;
      var v1200 = v1336[i$$19];
      var v931 = v1200.length;
      v500 = j$$11 < v931;
    }
    var v501 = outputWindow.document;
    JAM.call(v501.write, v501, ["\n"], JAM.policy.p9);
    i$$19++;
    var v1201 = this.nodes;
    var v932 = v1201.length;
    v502 = i$$19 < v932;
  }
  var v503 = outputWindow.document;
  JAM.call(v503.write, v503, ["\n"], JAM.policy.p9);
  return;
}
function fillMatrix() {
  var i$$20 = 1;
  var v1202 = this.nodes;
  var v933 = v1202.length;
  var v549 = i$$20 < v933;
  for (;v549;) {
    var j$$12 = 1;
    var v1337 = this.nodes;
    var v1203 = v1337[0];
    var v934 = v1203.length;
    var v548 = j$$12 < v934;
    for (;v548;) {
      var a$$1;
      var b;
      var c$$1;
      var v1412 = this.nodes;
      var v1338 = v1412.length;
      var v1204 = v1338 - 1;
      var v935 = i$$20 == v1204;
      if (v935) {
        var v1435 = this.nodes;
        var v1413 = v1435[0];
        var v1339 = v1413.length;
        var v1205 = v1339 - 1;
        v935 = j$$12 == v1205;
      }
      var v534 = v935;
      if (v534) {
        var v936 = this.scoreSet;
        var v508 = v936.useEndGapRight;
        if (v508) {
          var v1340 = this.nodes;
          var v1341 = i$$20 - 1;
          var v1206 = v1340[v1341];
          var v937 = v1206[j$$12];
          var v504 = v937.value;
          var v938 = this.scoreSet;
          var v505 = v938.endGap;
          a$$1 = v504 - v505;
        } else {
          var v1342 = this.nodes;
          var v1343 = i$$20 - 1;
          var v1207 = v1342[v1343];
          var v939 = v1207[j$$12];
          var v506 = v939.value;
          var v940 = this.scoreSet;
          var v507 = v940.gap;
          a$$1 = v506 - v507;
        }
        var v941 = this.scoreSet;
        var v513 = v941.useEndGapBottom;
        if (v513) {
          var v1344 = this.nodes;
          var v1208 = v1344[i$$20];
          var v1209 = j$$12 - 1;
          var v942 = v1208[v1209];
          var v509 = v942.value;
          var v943 = this.scoreSet;
          var v510 = v943.endGap;
          b = v509 - v510;
        } else {
          var v1345 = this.nodes;
          var v1210 = v1345[i$$20];
          var v1211 = j$$12 - 1;
          var v944 = v1210[v1211];
          var v511 = v944.value;
          var v945 = this.scoreSet;
          var v512 = v945.gap;
          b = v511 - v512;
        }
      } else {
        var v1346 = this.nodes;
        var v1212 = v1346.length;
        var v946 = v1212 - 1;
        var v533 = i$$20 == v946;
        if (v533) {
          var v1347 = this.nodes;
          var v1348 = i$$20 - 1;
          var v1213 = v1347[v1348];
          var v947 = v1213[j$$12];
          var v514 = v947.value;
          var v948 = this.scoreSet;
          var v515 = v948.gap;
          a$$1 = v514 - v515;
          var v949 = this.scoreSet;
          var v520 = v949.useEndGapBottom;
          if (v520) {
            var v1349 = this.nodes;
            var v1214 = v1349[i$$20];
            var v1215 = j$$12 - 1;
            var v950 = v1214[v1215];
            var v516 = v950.value;
            var v951 = this.scoreSet;
            var v517 = v951.endGap;
            b = v516 - v517;
          } else {
            var v1350 = this.nodes;
            var v1216 = v1350[i$$20];
            var v1217 = j$$12 - 1;
            var v952 = v1216[v1217];
            var v518 = v952.value;
            var v953 = this.scoreSet;
            var v519 = v953.gap;
            b = v518 - v519;
          }
        } else {
          var v1414 = this.nodes;
          var v1351 = v1414[0];
          var v1218 = v1351.length;
          var v954 = v1218 - 1;
          var v532 = j$$12 == v954;
          if (v532) {
            var v955 = this.scoreSet;
            var v525 = v955.useEndGapRight;
            if (v525) {
              var v1352 = this.nodes;
              var v1353 = i$$20 - 1;
              var v1219 = v1352[v1353];
              var v956 = v1219[j$$12];
              var v521 = v956.value;
              var v957 = this.scoreSet;
              var v522 = v957.endGap;
              a$$1 = v521 - v522;
            } else {
              var v1354 = this.nodes;
              var v1355 = i$$20 - 1;
              var v1220 = v1354[v1355];
              var v958 = v1220[j$$12];
              var v523 = v958.value;
              var v959 = this.scoreSet;
              var v524 = v959.gap;
              a$$1 = v523 - v524;
            }
            var v1356 = this.nodes;
            var v1221 = v1356[i$$20];
            var v1222 = j$$12 - 1;
            var v960 = v1221[v1222];
            var v526 = v960.value;
            var v961 = this.scoreSet;
            var v527 = v961.gap;
            b = v526 - v527;
          } else {
            var v1357 = this.nodes;
            var v1358 = i$$20 - 1;
            var v1223 = v1357[v1358];
            var v962 = v1223[j$$12];
            var v528 = v962.value;
            var v963 = this.scoreSet;
            var v529 = v963.gap;
            a$$1 = v528 - v529;
            var v1359 = this.nodes;
            var v1224 = v1359[i$$20];
            var v1225 = j$$12 - 1;
            var v964 = v1224[v1225];
            var v530 = v964.value;
            var v965 = this.scoreSet;
            var v531 = v965.gap;
            b = v530 - v531;
          }
        }
      }
      var v1360 = this.nodes;
      var v1361 = i$$20 - 1;
      var v1226 = v1360[v1361];
      var v1227 = j$$12 - 1;
      var v966 = v1226[v1227];
      var v535 = v966.value;
      var v967 = this.scoreSet;
      var v1228 = this.M;
      var v1229 = i$$20 - 1;
      var v968 = v1228[v1229];
      var v1230 = this.N;
      var v1231 = j$$12 - 1;
      var v969 = v1230[v1231];
      var v536 = JAM.call(v967.getScore, v967, [v968, v969], JAM.policy.p21);
      c$$1 = v535 + v536;
      var v970 = a$$1 >= b;
      if (v970) {
        v970 = a$$1 >= c$$1;
      }
      var v547 = v970;
      if (v547) {
        var v1232 = this.nodes;
        var v971 = v1232[i$$20];
        var v537 = v971[j$$12];
        v537.value = a$$1;
        var v1233 = this.nodes;
        var v972 = v1233[i$$20];
        var v538 = v972[j$$12];
        v538.tracebackI = i$$20 - 1;
        var v1234 = this.nodes;
        var v973 = v1234[i$$20];
        var v539 = v973[j$$12];
        v539.tracebackJ = j$$12;
      } else {
        var v974 = b >= c$$1;
        if (v974) {
          v974 = b >= a$$1;
        }
        var v546 = v974;
        if (v546) {
          var v1235 = this.nodes;
          var v975 = v1235[i$$20];
          var v540 = v975[j$$12];
          v540.value = b;
          var v1236 = this.nodes;
          var v976 = v1236[i$$20];
          var v541 = v976[j$$12];
          v541.tracebackI = i$$20;
          var v1237 = this.nodes;
          var v977 = v1237[i$$20];
          var v542 = v977[j$$12];
          v542.tracebackJ = j$$12 - 1;
        } else {
          var v1238 = this.nodes;
          var v978 = v1238[i$$20];
          var v543 = v978[j$$12];
          v543.value = c$$1;
          var v1239 = this.nodes;
          var v979 = v1239[i$$20];
          var v544 = v979[j$$12];
          v544.tracebackI = i$$20 - 1;
          var v1240 = this.nodes;
          var v980 = v1240[i$$20];
          var v545 = v980[j$$12];
          v545.tracebackJ = j$$12 - 1;
        }
      }
      j$$12++;
      var v1362 = this.nodes;
      var v1241 = v1362[0];
      var v981 = v1241.length;
      v548 = j$$12 < v981;
    }
    i$$20++;
    var v1242 = this.nodes;
    var v982 = v1242.length;
    v549 = i$$20 < v982;
  }
  var v1243 = this.nodes;
  var v1415 = this.nodes;
  var v1363 = v1415.length;
  var v1244 = v1363 - 1;
  var v983 = v1243[v1244];
  var v1416 = this.nodes;
  var v1364 = v1416[0];
  var v1245 = v1364.length;
  var v984 = v1245 - 1;
  var v550 = v983[v984];
  this.score = v550.value;
  return;
}
function alignQuad() {
  var v1521 = new Array;
  this.alignedM = v1521;
  var v1522 = new Array;
  this.alignedN = v1522;
  var v985 = this.nodes;
  var v551 = v985.length;
  var currentI = v551 - 1;
  var v1246 = this.nodes;
  var v986 = v1246[0];
  var v552 = v986.length;
  var currentJ = v552 - 1;
  var v987 = this.nodes;
  var v1365 = this.nodes;
  var v1247 = v1365.length;
  var v988 = v1247 - 1;
  var v553 = v987[v988];
  var v1366 = this.nodes;
  var v1248 = v1366[0];
  var v989 = v1248.length;
  var v554 = v989 - 1;
  var currentNode = v553[v554];
  var v1249 = currentNode.tracebackI;
  var v990 = v1249 != undefined;
  if (v990) {
    var v1250 = currentNode.tracebackJ;
    v990 = v1250 != undefined;
  }
  var v569 = v990;
  for (;v569;) {
    var v1251 = currentNode.tracebackI;
    var v1252 = currentI - 1;
    var v991 = v1251 == v1252;
    if (v991) {
      var v1253 = currentNode.tracebackJ;
      var v1254 = currentJ - 1;
      v991 = v1253 == v1254;
    }
    var v566 = v991;
    if (v566) {
      var v555 = this.alignedM;
      var v992 = this.M;
      var v556 = v992.pop();
      JAM.call(v555.push, v555, [v556], JAM.policy.p15);
      var v557 = this.alignedN;
      var v993 = this.N;
      var v558 = v993.pop();
      JAM.call(v557.push, v557, [v558], JAM.policy.p15);
    } else {
      var v994 = currentNode.tracebackJ;
      var v995 = currentJ - 1;
      var v565 = v994 == v995;
      if (v565) {
        var v559 = this.alignedM;
        JAM.call(v559.push, v559, ["-"], JAM.policy.p9);
        var v560 = this.alignedN;
        var v996 = this.N;
        var v561 = v996.pop();
        JAM.call(v560.push, v560, [v561], JAM.policy.p15);
      } else {
        var v562 = this.alignedM;
        var v997 = this.M;
        var v563 = v997.pop();
        JAM.call(v562.push, v562, [v563], JAM.policy.p15);
        var v564 = this.alignedN;
        JAM.call(v564.push, v564, ["-"], JAM.policy.p9);
      }
    }
    currentI = currentNode.tracebackI;
    currentJ = currentNode.tracebackJ;
    var v998 = this.nodes;
    var v999 = currentNode.tracebackI;
    var v567 = v998[v999];
    var v568 = currentNode.tracebackJ;
    currentNode = v567[v568];
    var v1255 = currentNode.tracebackI;
    var v1000 = v1255 != undefined;
    if (v1000) {
      var v1256 = currentNode.tracebackJ;
      v1000 = v1256 != undefined;
    }
    v569 = v1000;
  }
  var v570 = this.alignedM;
  var v1523 = v570.reverse();
  this.alignedM = v1523;
  var v571 = this.alignedN;
  var v1524 = v571.reverse();
  this.alignedN = v1524;
  return;
}
function getAlignedM() {
  var v572 = this.alignedM;
  return JAM.call(v572.join, v572, [""], JAM.policy.p9);
}
function getAlignedN() {
  var v573 = this.alignedN;
  return JAM.call(v573.join, v573, [""], JAM.policy.p9);
}
function AlignPairQuad() {
  return;
}
new ScoreSet;
var v574 = ScoreSet.prototype;
v574.getScore = getScore;
var v575 = ScoreSet.prototype;
v575.setScoreSetParam = setScoreSetParam;
new ScoringMatrix;
var v576 = ScoringMatrix.prototype;
v576.scoringMatrix_getScore = scoringMatrix_getScore;
var v577 = Complementarity;
var v1525 = new ScoringMatrix;
v577.prototype = v1525;
var v578 = Complementarity.prototype;
v578.setMismatch = setMismatch;
var v579 = Complementarity.prototype;
v579.setMatch = setMatch;
new AlignPairQuad;
var v580 = AlignPairQuad.prototype;
v580.initializeMatrix = initializeMatrix;
var v581 = AlignPairQuad.prototype;
v581.fillMatrix = fillMatrix;
var v582 = AlignPairQuad.prototype;
v582.align = alignQuad;
var v583 = AlignPairQuad.prototype;
v583.getAlignedM = getAlignedM;
var v584 = AlignPairQuad.prototype;
v584.getAlignedN = getAlignedN;
var v585 = AlignPairQuad.prototype;
v585.dumpMatrix = dumpMatrix;
JAM.set(document, "onload", v2);
var v586 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p9);
JAM.set(v586, "onclick", v3);
var v587 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p9);
JAM.set(v587, "onclick", v4)

JAM.stopProfile('load');
