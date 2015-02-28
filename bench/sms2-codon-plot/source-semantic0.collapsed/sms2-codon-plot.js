function v5() {
  document.forms[0].elements[0].value = " ";
  document.forms[0].elements[4].value = " ";
  return;
}
function v4() {
  try {
    codonPlot();
  } catch (e$$7) {
    alert("The following error was encountered: " + e$$7);
  }
  return;
}
function v3() {
  document.main_form.main_submit.focus();
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
  var lengthOfAlign = arrayOfSequences[0].length;
  if (arrayOfSequences.length < 2) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v13 = i$$1 < arrayOfTitles.length;
  for (;v13;) {
    var v650 = arrayOfTitles[i$$1];
    var v509 = JAM.call(v650.search, v650, [/\S/], JAM.policy.p16) == -1;
    if (!v509) {
      var v651 = arrayOfSequences[i$$1];
      v509 = JAM.call(v651.search, v651, [/\S/], JAM.policy.p16) == -1;
    }
    var v305 = v509;
    if (!v305) {
      v305 = arrayOfSequences[i$$1].length != lengthOfAlign;
    }
    if (v305) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    v13 = i$$1 < arrayOfTitles.length;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v652 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p16) == -1;
  if (!v652) {
    v652 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p16) == -1;
  }
  var v600 = v652;
  if (!v600) {
    v600 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p16) == -1;
  }
  var v512 = v600;
  if (!v512) {
    v512 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p16) == -1;
  }
  var v307 = v512;
  if (!v307) {
    v307 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p16) == -1;
  }
  if (v307) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v515 = formElement.value;
  if (JAM.call(v515.search, v515, [/\S/], JAM.policy.p16) == -1) {
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
  var v18 = z$$2 < arrayOfPatterns.length;
  for (;v18;) {
    var v516 = arrayOfPatterns[z$$2];
    if (JAM.call(v516.search, v516, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p16) == -1) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    if (moreExpressionCheck(arrayOfPatterns[z$$2]) == false) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    v18 = z$$2 < arrayOfPatterns.length;
  }
  var geneticCodeMatchResult = new Array(arrayOfPatterns.length);
  var geneticCodeMatchExp = new Array(arrayOfPatterns.length);
  var j = 0;
  var v24 = j < arrayOfPatterns.length;
  for (;v24;) {
    var v518 = arrayOfPatterns[j];
    var v21 = JAM.call(v518.match, v518, [/\/.+\//], JAM.policy.p16) + "gi";
    if (JAM.isEval(eval)) {
      var v796 = eval("introspect(JAM.policy.pFull) { " + v21 + " }")
    } else {
      var v796 = JAM.call(eval, null, [v21])
    }
    geneticCodeMatchExp[j] = v796;
    var v315 = arrayOfPatterns[j];
    var v797 = JAM.call(v315.match, v315, [/=[a-zA-Z\*]/], JAM.policy.p16).toString();
    geneticCodeMatchResult[j] = v797;
    var v23 = geneticCodeMatchResult[j];
    var v798 = JAM.call(v23.replace, v23, [/=/g, ""], JAM.policy.p15);
    geneticCodeMatchResult[j] = v798;
    j++;
    v24 = j < arrayOfPatterns.length;
  }
  var i$$2 = 0;
  var v31 = i$$2 <= testSequence.length - 3;
  for (;v31;) {
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, i$$2 + 3], JAM.policy.p15);
    j = 0;
    var v29 = j < geneticCodeMatchExp.length;
    for (;v29;) {
      if (JAM.call(codon.search, codon, [geneticCodeMatchExp[j]], JAM.policy.p17) != -1) {
        if (oneMatch == true) {
          alert("Genetic code error: more than one amino acid is coded by the codon: " + codon + ".");
          return false;
        }
        oneMatch = true;
      }
      j++;
      v29 = j < geneticCodeMatchExp.length;
    }
    if (oneMatch == false) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    v31 = i$$2 <= testSequence.length - 3;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v33 = z$$3 < arrayOfPatterns$$1.length;
  for (;v33;) {
    var v522 = arrayOfPatterns$$1[z$$3];
    if (JAM.call(v522.search, v522, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p16) != -1) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    v33 = z$$3 < arrayOfPatterns$$1.length;
  }
  var i$$3 = 0;
  var v37 = i$$3 < arrayOfPatterns$$1.length;
  for (;v37;) {
    var re = new RegExp("[" + arrayOfPatterns$$1[i$$3] + "]", "gi");
    var j$$1 = i$$3 + 1;
    var v36 = j$$1 < arrayOfPatterns$$1.length;
    for (;v36;) {
      var v524 = arrayOfPatterns$$1[j$$1];
      if (JAM.call(v524.search, v524, [re], JAM.policy.p17) != -1) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      v36 = j$$1 < arrayOfPatterns$$1.length;
    }
    i$$3++;
    v37 = i$$3 < arrayOfPatterns$$1.length;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v40 = z$$4 < arrayOfPatterns$$2.length;
  for (;v40;) {
    var v525 = arrayOfPatterns$$2[z$$4];
    if (JAM.call(v525.search, v525, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p16) == -1) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    if (moreExpressionCheck(arrayOfPatterns$$2[z$$4]) == false) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    v40 = z$$4 < arrayOfPatterns$$2.length;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v603 = getSequenceFromFasta(text$$7);
  if (JAM.call(v603.replace, v603, [/[^A-Za-z]/g, ""], JAM.policy.p15).length > maxInput) {
    alert("Please enter a sequence consisting of less than or equal to " + maxInput + " characters.");
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  if (text$$8.length > maxInput$$1) {
    alert("Please enter text consisting of less than or equal to " + maxInput$$1 + " characters.");
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
  var v45 = outputWindow.document;
  JAM.call(v45.write, v45, ["</form>"], JAM.policy.p9);
  return true;
}
function closePre() {
  var v46 = outputWindow.document;
  JAM.call(v46.write, v46, ["</div>"], JAM.policy.p9);
  var v47 = outputWindow.document;
  JAM.call(v47.write, v47, ["</pre>\n"], JAM.policy.p9);
  return;
}
function closeTextArea() {
  var v48 = outputWindow.document;
  JAM.call(v48.write, v48, ["</textarea>"], JAM.policy.p9);
  return true;
}
function closeWindow() {
  var v49 = outputWindow.document;
  JAM.call(v49.write, v49, ["</body>\n</html>\n"], JAM.policy.p9);
  outputWindow.status = "Done.";
  outputWindow.document.close();
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
  if (alignArray.length < 3) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v53 = i$$4 < alignArray.length;
  for (;v53;) {
    var v528 = alignArray[i$$4];
    if (JAM.call(v528.search, v528, [/[^\s]+\s/], JAM.policy.p16) == -1) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    v53 = i$$4 < alignArray.length;
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
  if (JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p16) != -1) {
    var v55 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p17);
    for (;v55;) {
      JAM.call(arrayOfFasta.push, arrayOfFasta, [matchArray[0]], JAM.policy.p17);
      v55 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p17);
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var stringToReturn = "&gt;results for " + sequence$$2.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p16) != -1) {
    stringToReturn = stringToReturn + '"' + fastaSequenceTitle + '"';
  }
  stringToReturn = stringToReturn + ' starting "' + JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p13) + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var stringToReturn$$1 = "Search results for " + sequenceOne.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p16) != -1) {
    stringToReturn$$1 = stringToReturn$$1 + '"' + fastaSequenceTitleOne + '"';
  }
  stringToReturn$$1 = stringToReturn$$1 + ' starting "' + JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p13) + '"\n';
  stringToReturn$$1 = stringToReturn$$1 + "and " + sequenceTwo.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p16) != -1) {
    stringToReturn$$1 = stringToReturn$$1 + '"' + fastaSequenceTitleTwo + '"';
  }
  stringToReturn$$1 = stringToReturn$$1 + ' starting "' + JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p13) + '"';
  return '<div class="info">' + stringToReturn$$1 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var geneticCodeMatchExp$$1 = new Array(arrayOfPatterns$$3.length);
  var j$$2 = 0;
  var v72 = j$$2 < arrayOfPatterns$$3.length;
  for (;v72;) {
    var v529 = arrayOfPatterns$$3[j$$2];
    var v71 = JAM.call(v529.match, v529, [/\/.+\//], JAM.policy.p16) + "gi";
    if (JAM.isEval(eval)) {
      var v799 = eval("introspect(JAM.policy.pFull) { " + v71 + " }")
    } else {
      var v799 = JAM.call(eval, null, [v71])
    }
    geneticCodeMatchExp$$1[j$$2] = v799;
    j$$2++;
    v72 = j$$2 < arrayOfPatterns$$3.length;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var geneticCodeMatchResult$$1 = new Array(arrayOfPatterns$$4.length);
  var j$$3 = 0;
  var v76 = j$$3 < arrayOfPatterns$$4.length;
  for (;v76;) {
    var v365 = arrayOfPatterns$$4[j$$3];
    var v800 = JAM.call(v365.match, v365, [/=[a-zA-Z\*]/], JAM.policy.p16).toString();
    geneticCodeMatchResult$$1[j$$3] = v800;
    var v75 = geneticCodeMatchResult$$1[j$$3];
    var v801 = JAM.call(v75.replace, v75, [/=/g, ""], JAM.policy.p15);
    geneticCodeMatchResult$$1[j$$3] = v801;
    j$$3++;
    v76 = j$$3 < arrayOfPatterns$$4.length;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var stringToReturn$$2 = "Results for " + sequence$$3.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p16) != -1) {
    stringToReturn$$2 = stringToReturn$$2 + '"' + fastaSequenceTitle$$1 + '"';
  }
  stringToReturn$$2 = stringToReturn$$2 + ' starting "' + JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p13) + '"';
  return '<div class="info">' + stringToReturn$$2 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var stringToReturn$$3 = "Results for " + topology + " " + sequence$$4.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p16) != -1) {
    stringToReturn$$3 = stringToReturn$$3 + '"' + fastaSequenceTitle$$2 + '"';
  }
  stringToReturn$$3 = stringToReturn$$3 + ' starting "' + JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p13) + '"';
  return '<div class="info">' + stringToReturn$$3 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var stringToReturn$$4 = "Alignment results for " + sequenceOne$$1.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p16) != -1) {
    stringToReturn$$4 = stringToReturn$$4 + '"' + fastaSequenceTitleOne$$1 + '"';
  }
  stringToReturn$$4 = stringToReturn$$4 + ' starting "' + JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p13) + '"\n';
  stringToReturn$$4 = stringToReturn$$4 + "and " + sequenceTwo$$1.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p16) != -1) {
    stringToReturn$$4 = stringToReturn$$4 + '"' + fastaSequenceTitleTwo$$1 + '"';
  }
  stringToReturn$$4 = stringToReturn$$4 + ' starting "' + JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p13) + '"';
  return '<div class="info">' + stringToReturn$$4 + "</div>\n";
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v97 = j$$4 < lengthOut;
  for (;v97;) {
    tempNum = JAM.call(Math.floor, Math, [Math.random() * components.length], JAM.policy.p16);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p17);
    j$$4++;
    v97 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p9);
}
function getSequenceFromFasta(sequenceRecord) {
  if (JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p16) != -1) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p15);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  if (JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p16) != -1) {
    fastaTitle = JAM.call(sequenceRecord$$1.match, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p15).toString();
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\>|[\f\n\r]/g, ""], JAM.policy.p15);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\s{2,}/g, " "], JAM.policy.p15);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/[\<\>]/gi, ""], JAM.policy.p15);
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  var v764 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p16) != -1;
  if (!v764) {
    v764 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p16) != -1;
  }
  var v752 = v764;
  if (!v752) {
    v752 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p16) != -1;
  }
  var v740 = v752;
  if (!v740) {
    v740 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p16) != -1;
  }
  var v723 = v740;
  if (!v723) {
    v723 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p16) != -1;
  }
  var v707 = v723;
  if (!v707) {
    v707 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p16) != -1;
  }
  var v690 = v707;
  if (!v690) {
    v690 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p16) != -1;
  }
  var v655 = v690;
  if (!v655) {
    v655 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p16) != -1;
  }
  var v604 = v655;
  if (!v604) {
    v604 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p16) != -1;
  }
  var v531 = v604;
  if (!v531) {
    v531 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p16) != -1;
  }
  var v393 = v531;
  if (!v393) {
    v393 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p16) != -1;
  }
  if (v393) {
    return false;
  }
  return true;
}
function openForm() {
  var v102 = outputWindow.document;
  JAM.call(v102.write, v102, ['<form action="">\n'], JAM.policy.p9);
  return true;
}
function openPre() {
  var v103 = outputWindow.document;
  JAM.call(v103.write, v103, ["<pre>"], JAM.policy.p9);
  var v104 = outputWindow.document;
  JAM.call(v104.write, v104, ['<div class="pre">'], JAM.policy.p9);
  return;
}
function openTextArea() {
  var v105 = outputWindow.document;
  JAM.call(v105.write, v105, ['<br /><textarea rows="6" cols="61">\n'], JAM.policy.p9);
  return true;
}
function openWindow() {
  var title$$5 = "Codon Plot";
  _openWindow(title$$5);
  return;
}
function _openWindow(title$$6) {
  var isColor = true;
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  outputWindow.focus();
  var v106 = outputWindow.document;
  JAM.call(v106.write, v106, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n'], JAM.policy.p17);
  if (isColor) {
    var v108 = outputWindow.document;
    JAM.call(v108.write, v108, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; background-color: #66FF00}\n" + 
    "span.two, td.two {color: #000000; background-color: #FFFF66}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n" + "td.many {color: #000000}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + 
    "</style>\n"], JAM.policy.p17);
  } else {
    var v110 = outputWindow.document;
    JAM.call(v110.write, v110, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n" + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "td.many {color: #000000; background-color: #FFFFFF}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"], JAM.policy.p17);
  }
  var v112 = outputWindow.document;
  JAM.call(v112.write, v112, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$6 + " results</div>\n"], JAM.policy.p17);
  outputWindow.status = "Please Wait.";
  return;
}
function openWindowAlign(title$$7) {
  _openWindowAlign(title$$7);
  return;
}
function _openWindowAlign(title$$8) {
  var isBackground = true;
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  outputWindow.focus();
  var v114 = outputWindow.document;
  JAM.call(v114.write, v114, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n'], JAM.policy.p17);
  if (isBackground) {
    var v116 = outputWindow.document;
    JAM.call(v116.write, v116, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #FFFFFF; background-color: #000000}\n" + "span.sim {color: #FFFFFF; background-color: #666666}\n" + 
    "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n" + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n" + "span.c, span.m {color: #000000; background-color: #FFFF00}\n" + "span.s, span.t {color: #000000; background-color: #66FF00}\n" + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n" + "span.d, span.e {color: #000000; background-color: #0066FF}\n" + "span.n, span.q {color: #000000; background-color: #996633}\n" + "span.p {color: #000000; background-color: #FF99FF}\n" + 
    "</style>\n"], JAM.policy.p17);
  } else {
    var v118 = outputWindow.document;
    JAM.call(v118.write, v118, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n" + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n" + 
    "span.diff {color: #999999; background-color: #FFFFFF}\n" + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n" + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n" + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n" + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n" + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n" + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n" + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n" + 
    "span.p {color: #00FFCC; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"], JAM.policy.p17);
  }
  var v120 = outputWindow.document;
  JAM.call(v120.write, v120, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$8 + " results</div>\n"], JAM.policy.p17);
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
  if (JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p16) != -1) {
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
  var v123 = j$$5 < lengthOfColumn;
  for (;v123;) {
    tempString = tempString + " ";
    j$$5++;
    v123 = j$$5 < lengthOfColumn;
  }
  theNumber = tempString + theNumber + " ";
  sequenceToAppend = sequenceToAppend + theNumber + tabIn;
  return sequenceToAppend;
}
function testScript() {
  function v1(str$$7, p1$$1, offset$$9, s$$3) {
    return p1$$1 + "X";
  }
  var testArray = new Array;
  var testString = "1234567890";
  JAM.call(testArray.push, testArray, [testString], JAM.policy.p17);
  if (testArray[0] != testString) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  if (JAM.call(testString.search, testString, [re$$2], JAM.policy.p17) == -1) {
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
  if (!caughtException) {
    alert("Exception handling not supported. See browser compatibility page.");
  }
  testString = "123";
  testString = JAM.call(testString.replace, testString, [/(\d)/g, v1], JAM.policy.p15);
  if (testString != "1X2X3X") {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false;
  }
  var testNum = 2489.8237;
  if (JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p11) != 2489.824) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  if (JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p11) != 2489.8) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  if (JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p16) == -1) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v615 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p16) == -1;
  if (!v615) {
    v615 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p16) == -1;
  }
  var v542 = v615;
  if (!v542) {
    v542 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p16) == -1;
  }
  var v408 = v542;
  if (!v408) {
    v408 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p16) == -1;
  }
  if (v408) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  if (JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p16) == -1) {
    alert("Please enter a number.");
    return false;
  }
  if (theNumber$$2 > maxInput$$2) {
    alert("Please enter a number less than or equal to " + maxInput$$2 + ".");
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  if (JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p16) != -1) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return;
}
function verifyProtein(proteinSequence) {
  if (JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p16) != -1) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v618 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p16) == -1;
  if (!v618) {
    v618 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p16) == -1;
  }
  var v545 = v618;
  if (!v545) {
    v545 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p16) == -1;
  }
  var v413 = v545;
  if (!v413) {
    v413 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p16) == -1;
  }
  if (v413) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v621 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p16) == -1;
  if (!v621) {
    v621 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p16) == -1;
  }
  var v548 = v621;
  if (!v548) {
    v548 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p16) == -1;
  }
  var v414 = v548;
  if (!v414) {
    v414 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p16) == -1;
  }
  if (v414) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  if (JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p16) == -1) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v624 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p16) == -1;
  if (!v624) {
    v624 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p16) == -1;
  }
  var v551 = v624;
  if (!v551) {
    v551 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p16) == -1;
  }
  var v416 = v551;
  if (!v416) {
    v416 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p16) == -1;
  }
  if (v416) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  if (JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p16) == -1) {
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
  var v150 = i$$5 < stopBase;
  for (;v150;) {
    lineOfText = rightNum(i$$5 + 1, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v147 = j$$6 <= basePerLine / groupSize;
    for (;v147;) {
      var v146 = k < groupSize;
      for (;v146;) {
        lineOfText = lineOfText + JAM.call(text$$10.charAt, text$$10, [k + i$$5], JAM.policy.p17);
        k = k + 1;
        v146 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      v147 = j$$6 <= basePerLine / groupSize;
    }
    var v148 = outputWindow.document;
    JAM.call(v148.write, v148, [lineOfText + "\n"], JAM.policy.p17);
    lineOfText = "";
    v150 = i$$5 < stopBase;
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
    var v421 = adjustment < 0;
    if (v421) {
      v421 = adjusted >= 0;
    }
    if (v421) {
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
  var v182 = i$$6 < stopBase$$2;
  for (;v182;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v158 = j$$7 <= basePerLine$$2 / groupSize$$2;
    for (;v158;) {
      var v154 = k$$1 < groupSize$$2;
      for (;v154;) {
        if (i$$6 + k$$1 >= stopBase$$2) {
          break;
        }
        lineOfText$$1 = lineOfText$$1 + JAM.call(text$$12.charAt, text$$12, [k$$1 + i$$6], JAM.policy.p17);
        k$$1 = k$$1 + 1;
        v154 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      if (numberPosition$$1 == "above") {
        aboveNum = aboveNum + rightNum(adjustNumbering(i$$6, numberingAdjustment), "", groupSize$$2, tabIn$$3);
      }
      if (i$$6 >= stopBase$$2) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      v158 = j$$7 <= basePerLine$$2 / groupSize$$2;
    }
    if (numberPosition$$1 == "left") {
      var v159 = outputWindow.document;
      JAM.call(v159.write, v159, [rightNum(adjustNumbering(lineNum, numberingAdjustment), "", 8, tabIn$$3) + lineOfText$$1 + "\n"], JAM.policy.p17);
      if (strands$$1 == "two") {
        var v161 = outputWindow.document;
        JAM.call(v161.write, v161, [rightNum(adjustNumbering(lineNum, numberingAdjustment), "", 8, tabIn$$3) + complement(lineOfText$$1) + "\n"], JAM.policy.p17);
        var v163 = outputWindow.document;
        JAM.call(v163.write, v163, ["\n"], JAM.policy.p9);
      }
    } else {
      if (numberPosition$$1 == "right") {
        var v165 = outputWindow.document;
        JAM.call(v165.write, v165, [lineOfText$$1 + adjustNumbering(i$$6, numberingAdjustment) + "\n"], JAM.policy.p17);
        if (strands$$1 == "two") {
          var v167 = outputWindow.document;
          JAM.call(v167.write, v167, [complement(lineOfText$$1) + adjustNumbering(i$$6, numberingAdjustment) + "\n"], JAM.policy.p17);
          var v169 = outputWindow.document;
          JAM.call(v169.write, v169, ["\n"], JAM.policy.p9);
        }
      } else {
        if (numberPosition$$1 == "above") {
          var v171 = outputWindow.document;
          JAM.call(v171.write, v171, [aboveNum + "\n"], JAM.policy.p17);
          var v173 = outputWindow.document;
          JAM.call(v173.write, v173, [lineOfText$$1 + "\n"], JAM.policy.p17);
          if (strands$$1 == "two") {
            var v175 = outputWindow.document;
            JAM.call(v175.write, v175, [complement(lineOfText$$1) + "\n"], JAM.policy.p17);
            var v177 = outputWindow.document;
            JAM.call(v177.write, v177, ["\n"], JAM.policy.p9);
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v182 = i$$6 < stopBase$$2;
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
  var v201 = i$$7 < stopBase$$3;
  for (;v201;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v189 = j$$8 <= basePerLine$$3 / groupSize$$3;
    for (;v189;) {
      var v185 = k$$2 < groupSize$$3;
      for (;v185;) {
        if (i$$7 + k$$2 >= stopBase$$3) {
          break;
        }
        lineOfText$$2 = lineOfText$$2 + JAM.call(text$$13.charAt, text$$13, [k$$2 + i$$7], JAM.policy.p17);
        k$$2 = k$$2 + 1;
        v185 = k$$2 < groupSize$$3;
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      if (numberPosition$$2 == "above") {
        aboveNum$$1 = aboveNum$$1 + rightNum(i$$7, "", groupSize$$3, tabIn$$4);
      }
      if (i$$7 >= stopBase$$3) {
        break;
      }
      k$$2 = 0;
      j$$8++;
      v189 = j$$8 <= basePerLine$$3 / groupSize$$3;
    }
    if (numberPosition$$2 == "left") {
      var v190 = outputWindow.document;
      JAM.call(v190.write, v190, [rightNum(lineNum$$1, "", 8, tabIn$$4) + lineOfText$$2 + "\n"], JAM.policy.p17);
    } else {
      if (numberPosition$$2 == "right") {
        var v192 = outputWindow.document;
        JAM.call(v192.write, v192, [lineOfText$$2 + i$$7 + "\n"], JAM.policy.p17);
      } else {
        if (numberPosition$$2 == "above") {
          var v194 = outputWindow.document;
          JAM.call(v194.write, v194, [aboveNum$$1 + "\n"], JAM.policy.p17);
          var v196 = outputWindow.document;
          JAM.call(v196.write, v196, [lineOfText$$2 + "\n"], JAM.policy.p17);
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v201 = i$$7 < stopBase$$3;
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
  var v561 = sequence$$13.length <= firstIndexToMutate;
  if (!v561) {
    v561 = lastIndexToMutate < 0;
  }
  var v438 = v561;
  if (!v438) {
    v438 = lastIndexToMutate <= firstIndexToMutate;
  }
  if (v438) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v210 = i$$8 < numMut;
  for (;v210;) {
    maxNum = sequence$$13.length;
    randNum = JAM.call(Math.floor, Math, [Math.random() * maxNum], JAM.policy.p16);
    var v440 = randNum < firstIndexToMutate;
    if (!v440) {
      v440 = randNum > lastIndexToMutate;
    }
    if (v440) {
      numMut++;
      i$$8++;
      v210 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p16);
    needNewChar = true;
    for (;needNewChar;) {
      componentsIndex = JAM.call(Math.round, Math, [Math.random() * components$$1.length], JAM.policy.p16);
      if (componentsIndex == components$$1.length) {
        componentsIndex = 0;
      }
      if (components$$1[componentsIndex] != currentChar) {
        needNewChar = false;
      }
    }
    sequence$$13 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p13) + components$$1[componentsIndex] + JAM.call(sequence$$13.substring, sequence$$13, [randNum + 1, sequence$$13.length], JAM.policy.p27);
    i$$8++;
    v210 = i$$8 < numMut;
  }
  var v211 = outputWindow.document;
  JAM.call(v211.write, v211, [addReturns(sequence$$13)], JAM.policy.p17);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v217 = j$$9 < lengthOut$$1;
  for (;v217;) {
    tempNum$$1 = JAM.call(Math.floor, Math, [Math.random() * components$$2.length], JAM.policy.p16);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    if (sequence$$14.length == 60) {
      var v214 = outputWindow.document;
      JAM.call(v214.write, v214, [sequence$$14 + "\n"], JAM.policy.p17);
      sequence$$14 = "";
    }
    j$$9++;
    v217 = j$$9 < lengthOut$$1;
  }
  var v218 = outputWindow.document;
  JAM.call(v218.write, v218, [sequence$$14 + "\n"], JAM.policy.p17);
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
  if (dnaConformation == "circular") {
    shiftValue = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13).length;
    sequence$$15 = JAM.call(sequence$$15.substring, sequence$$15, [sequence$$15.length - lookAhead, sequence$$15.length], JAM.policy.p27) + sequence$$15 + JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v224 = outputWindow.document;
  JAM.call(v224.write, v224, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p9);
  var v225 = outputWindow.document;
  JAM.call(v225.write, v225, ['<tr><td class="title" width="200px">' + "Site:" + '</td><td class="title">' + "Positions:" + "</td></tr>\n"], JAM.policy.p17);
  var i$$9 = 0;
  var v242 = i$$9 < arrayOfItems.length;
  for (;v242;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v455 = arrayOfItems[i$$9];
    matchExp = JAM.call(v455.match, v455, [/\/.+\//], JAM.policy.p16) + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    var v633 = arrayOfItems[i$$9];
    var v456 = JAM.call(v633.match, v633, [/\)\D*\d+/], JAM.policy.p16).toString();
    cutDistance = parseFloat(JAM.call(v456.replace, v456, [/\)\D*/, ""], JAM.policy.p15));
    var v234 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p17);
    for (;v234;) {
      matchPosition = matchExp.lastIndex - cutDistance;
      var v457 = matchPosition >= lowerLimit;
      if (v457) {
        v457 = matchPosition < upperLimit;
      }
      if (v457) {
        timesFound++;
        tempString$$1 = tempString$$1 + ", " + (matchPosition - shiftValue + 1);
      }
      matchExp.lastIndex = matchExp.lastIndex - RegExp.lastMatch.length + 1;
      v234 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p17);
    }
    if (JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p16) != -1) {
      tempString$$1 = JAM.call(tempString$$1.replace, tempString$$1, [/none,\s*/, ""], JAM.policy.p15);
    }
    if (timesFound == 0) {
      backGroundClass = "none";
    } else {
      if (timesFound == 1) {
        backGroundClass = "one";
      } else {
        if (timesFound == 2) {
          backGroundClass = "two";
        } else {
          if (timesFound == 3) {
            backGroundClass = "three";
          } else {
            backGroundClass = "many";
          }
        }
      }
    }
    var v240 = outputWindow.document;
    var v714 = '<tr><td class="' + backGroundClass + '">';
    var v759 = arrayOfItems[i$$9];
    var v731 = JAM.call(v759.match, v759, [/\([^\(]+\)/], JAM.policy.p16).toString();
    JAM.call(v240.write, v240, [v714 + JAM.call(v731.replace, v731, [/\(|\)/g, ""], JAM.policy.p15) + '</td><td class="' + backGroundClass + '">' + tempString$$1 + "</td></tr>\n"], JAM.policy.p17);
    timesFound = 0;
    i$$9++;
    v242 = i$$9 < arrayOfItems.length;
  }
  var v243 = outputWindow.document;
  JAM.call(v243.write, v243, ["</tbody></table>\n"], JAM.policy.p9);
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v244 = outputWindow.document;
  JAM.call(v244.write, v244, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p9);
  var v245 = outputWindow.document;
  JAM.call(v245.write, v245, ['<tr><td class="title">' + "Pattern:" + '</td><td class="title">' + "Times found:" + '</td><td class="title">' + "Percentage:" + "</td></tr>\n"], JAM.policy.p17);
  var i$$10 = 0;
  var v255 = i$$10 < arrayOfItems$$1.length;
  for (;v255;) {
    var tempNumber = 0;
    var v466 = arrayOfItems$$1[i$$10];
    var matchExp$$1 = JAM.call(v466.match, v466, [/\/[^\/]+\//], JAM.policy.p16) + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    if (JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p17) != -1) {
      tempNumber = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p17).length;
    }
    var percentage = 0;
    var v571 = originalLength + 1;
    var v676 = arrayOfItems$$1[i$$10];
    if (v571 - parseFloat(JAM.call(v676.match, v676, [/\d+/], JAM.policy.p16)) > 0) {
      var v250 = 100 * tempNumber;
      var v469 = originalLength + 1;
      var v637 = arrayOfItems$$1[i$$10];
      percentage = v250 / (v469 - parseFloat(JAM.call(v637.match, v637, [/\d+/], JAM.policy.p16)));
    }
    var v253 = outputWindow.document;
    var v760 = arrayOfItems$$1[i$$10];
    var v732 = JAM.call(v760.match, v760, [/\([^\(]+\)\b/], JAM.policy.p16).toString();
    JAM.call(v253.write, v253, ["<tr><td>" + JAM.call(v732.replace, v732, [/\(|\)/g, ""], JAM.policy.p15) + "</td><td>" + tempNumber + "</td><td>" + JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p11) + "</td></tr>\n"], JAM.policy.p17);
    i$$10++;
    v255 = i$$10 < arrayOfItems$$1.length;
  }
  var v256 = outputWindow.document;
  JAM.call(v256.write, v256, ["</tbody></table>\n"], JAM.policy.p9);
  return true;
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v263 = sequence$$17.length > 0;
  for (;v263;) {
    maxNum$$1 = sequence$$17.length;
    randNum$$1 = JAM.call(Math.floor, Math, [Math.random() * maxNum$$1], JAM.policy.p16);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p16);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p13);
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [randNum$$1 + 1, sequence$$17.length], JAM.policy.p15);
    sequence$$17 = tempString1 + tempString2;
    if (tempSeq.length == 60) {
      var v260 = outputWindow.document;
      JAM.call(v260.write, v260, [tempSeq + "\n"], JAM.policy.p17);
      tempSeq = "";
    }
    v263 = sequence$$17.length > 0;
  }
  var v264 = outputWindow.document;
  JAM.call(v264.write, v264, [tempSeq + "\n"], JAM.policy.p17);
  return true;
}
function fillCodon(aminoAcid, number, perThou, fraction) {
  this.aminoAcid = aminoAcid;
  this.number = number;
  this.perThou = perThou;
  this.fraction = fraction;
  return;
}
function Codon() {
  return;
}
function codonPlot() {
  var theDocument = document;
  var newDna = "";
  var maxInput$$3 = 5E4;
  var codonTable$$1;
  var title$$9;
  if (testScript() == false) {
    return;
  }
  var v576 = checkFormElement(theDocument.forms[0].elements[0]) == false;
  if (!v576) {
    v576 = checkSequenceLength(theDocument.forms[0].elements[0].value, maxInput$$3) == false;
  }
  var v478 = v576;
  if (!v478) {
    v478 = checkCodonTable(theDocument.forms[0].elements[4].value) == false;
  }
  if (v478) {
    return;
  }
  codonTable$$1 = makeCodonTable(theDocument.forms[0].elements[4].value);
  if (codonTable$$1 == false) {
    return;
  }
  newDna = getSequenceFromFasta(theDocument.forms[0].elements[0].value);
  title$$9 = getTitleFromFasta(theDocument.forms[0].elements[0].value);
  verifyDna(newDna);
  newDna = removeNonDna(newDna);
  openWindow();
  var v272 = outputWindow.document;
  JAM.call(v272.write, v272, [getInfoFromTitleAndSequence(title$$9, newDna)], JAM.policy.p17);
  openPre();
  writeCodonPlot(codonTable$$1, newDna);
  closePre();
  closeWindow();
  return;
}
function writeCodonPlot(codonTable$$2, sequence$$18) {
  function v2(str$$8, p1$$2, offset$$10, s$$4) {
    try {
      aminoAcid$$1 = codonTable$$2[p1$$2.toString().toLowerCase()].aminoAcid;
      yValue = codonTable$$2[p1$$2.toString().toLowerCase()].fraction;
    } catch (e$$5) {
      aminoAcid$$1 = "???";
      yValue = 0;
    }
    return "<b>" + p1$$2.toString().toLowerCase() + ", " + (offset$$10 + 1) + " to " + (offset$$10 + 3) + " (" + aminoAcid$$1 + ")</b>\n" + JAM.call(markString.substring, markString, [0, JAM.call(Math.round, Math, [yValue * markString.length], JAM.policy.p17)], JAM.policy.p13) + " " + JAM.call(yValue.toFixed, yValue, [2], JAM.policy.p11) + "\n\n";
  }
  var markString = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
  var codon$$1;
  var perThou$$1;
  var fraction$$1;
  var yValue;
  var aminoAcid$$1;
  sequence$$18 = JAM.call(sequence$$18.replace, sequence$$18, [/u/gi, "t"], JAM.policy.p15);
  sequence$$18 = JAM.call(sequence$$18.replace, sequence$$18, [/(...)/g, v2], JAM.policy.p15);
  var v277 = outputWindow.document;
  JAM.call(v277.write, v277, [sequence$$18 + "\n"], JAM.policy.p17);
  return;
}
function makeCodonTable(gcgTable) {
  gcgTable = JAM.call(gcgTable.replace, gcgTable, [/[^\.]*\.\./, ""], JAM.policy.p15);
  var tableArray = JAM.call(gcgTable.split, gcgTable, [/[\f\n\r]/], JAM.policy.p16);
  var re$$3 = /(\w+)\s+(\w+)\s+(\S+)\s+(\S+)\s+(\S+)/g;
  var matchArray$$2;
  var codonTable$$3 = new CodonTable;
  var i$$11 = 0;
  var v288 = i$$11 < tableArray.length;
  for (;v288;) {
    var v287 = matchArray$$2 = JAM.call(re$$3.exec, re$$3, [tableArray[i$$11]], JAM.policy.p17);
    for (;v287;) {
      try {
        var v279 = codonTable$$3[matchArray$$2[2].toLowerCase()];
        JAM.call(v279.fillCodon, v279, [matchArray$$2[1], parseFloat(matchArray$$2[3]), parseFloat(matchArray$$2[4]), parseFloat(matchArray$$2[5])], JAM.policy.p27);
        var v284 = codonTable$$3.codons;
        JAM.call(v284.push, v284, [matchArray$$2[2].toLowerCase()], JAM.policy.p17);
      } catch (e$$6) {
        alert("There is a problem with a line of the codon table: " + matchArray$$2[1] + " " + matchArray$$2[2] + " " + matchArray$$2[3] + " " + matchArray$$2[4] + " " + matchArray$$2[5]);
        return false;
      }
      v287 = matchArray$$2 = JAM.call(re$$3.exec, re$$3, [tableArray[i$$11]], JAM.policy.p17);
    }
    i$$11++;
    v288 = i$$11 < tableArray.length;
  }
  codonTable$$3.fixFraction();
  return codonTable$$3;
}
function CodonTable() {
  var v802 = new Array;
  this.codons = v802;
  var v803 = new Codon;
  this.ggg = v803;
  var v804 = new Codon;
  this.gga = v804;
  var v805 = new Codon;
  this.ggt = v805;
  var v806 = new Codon;
  this.ggc = v806;
  var v807 = new Codon;
  this.gag = v807;
  var v808 = new Codon;
  this.gaa = v808;
  var v809 = new Codon;
  this.gat = v809;
  var v810 = new Codon;
  this.gac = v810;
  var v811 = new Codon;
  this.gtg = v811;
  var v812 = new Codon;
  this.gta = v812;
  var v813 = new Codon;
  this.gtt = v813;
  var v814 = new Codon;
  this.gtc = v814;
  var v815 = new Codon;
  this.gcg = v815;
  var v816 = new Codon;
  this.gca = v816;
  var v817 = new Codon;
  this.gct = v817;
  var v818 = new Codon;
  this.gcc = v818;
  var v819 = new Codon;
  this.agg = v819;
  var v820 = new Codon;
  this.aga = v820;
  var v821 = new Codon;
  this.agt = v821;
  var v822 = new Codon;
  this.agc = v822;
  var v823 = new Codon;
  this.aag = v823;
  var v824 = new Codon;
  this.aaa = v824;
  var v825 = new Codon;
  this.aat = v825;
  var v826 = new Codon;
  this.aac = v826;
  var v827 = new Codon;
  this.atg = v827;
  var v828 = new Codon;
  this.ata = v828;
  var v829 = new Codon;
  this.att = v829;
  var v830 = new Codon;
  this.atc = v830;
  var v831 = new Codon;
  this.acg = v831;
  var v832 = new Codon;
  this.aca = v832;
  var v833 = new Codon;
  this.act = v833;
  var v834 = new Codon;
  this.acc = v834;
  var v835 = new Codon;
  this.tgg = v835;
  var v836 = new Codon;
  this.tga = v836;
  var v837 = new Codon;
  this.tgt = v837;
  var v838 = new Codon;
  this.tgc = v838;
  var v839 = new Codon;
  this.tag = v839;
  var v840 = new Codon;
  this.taa = v840;
  var v841 = new Codon;
  this.tat = v841;
  var v842 = new Codon;
  this.tac = v842;
  var v843 = new Codon;
  this.ttg = v843;
  var v844 = new Codon;
  this.tta = v844;
  var v845 = new Codon;
  this.ttt = v845;
  var v846 = new Codon;
  this.ttc = v846;
  var v847 = new Codon;
  this.tcg = v847;
  var v848 = new Codon;
  this.tca = v848;
  var v849 = new Codon;
  this.tct = v849;
  var v850 = new Codon;
  this.tcc = v850;
  var v851 = new Codon;
  this.cgg = v851;
  var v852 = new Codon;
  this.cga = v852;
  var v853 = new Codon;
  this.cgt = v853;
  var v854 = new Codon;
  this.cgc = v854;
  var v855 = new Codon;
  this.cag = v855;
  var v856 = new Codon;
  this.caa = v856;
  var v857 = new Codon;
  this.cat = v857;
  var v858 = new Codon;
  this.cac = v858;
  var v859 = new Codon;
  this.ctg = v859;
  var v860 = new Codon;
  this.cta = v860;
  var v861 = new Codon;
  this.ctt = v861;
  var v862 = new Codon;
  this.ctc = v862;
  var v863 = new Codon;
  this.ccg = v863;
  var v864 = new Codon;
  this.cca = v864;
  var v865 = new Codon;
  this.cct = v865;
  var v866 = new Codon;
  this.ccc = v866;
  return;
}
function fixFraction() {
  var i$$12 = 0;
  var v295 = i$$12 < this.codons.length;
  for (;v295;) {
    var outerCodon = this.codons[i$$12];
    var perThouTotal = 0;
    var j$$10 = 0;
    var v293 = j$$10 < this.codons.length;
    for (;v293;) {
      var innerCodon = this.codons[j$$10];
      if (this[outerCodon].aminoAcid == this[innerCodon].aminoAcid) {
        perThouTotal = perThouTotal + this[innerCodon].perThou;
      }
      j$$10++;
      v293 = j$$10 < this.codons.length;
    }
    this[outerCodon].fraction = this[outerCodon].perThou / perThouTotal;
    i$$12++;
    v295 = i$$12 < this.codons.length;
  }
  return true;
}
new CodonTable;
CodonTable.prototype.fixFraction = fixFraction;
new Codon;
Codon.prototype.fillCodon = fillCodon;
JAM.set(document, "onload", v3);
JAM.set(JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p9), "onclick", v4);
JAM.set(JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p9), "onclick", v5)
