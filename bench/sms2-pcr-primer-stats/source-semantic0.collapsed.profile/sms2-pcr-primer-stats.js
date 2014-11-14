
JAM.startProfile('load');
function v4() {
  document.forms[0].elements[0].value = " ";
  document.forms[0].elements[4].value = " ";
  return;
}
function v3() {
  try {
    pcrPrimerStats(document);
  } catch (e$$5) {
    alert("The following error was encountered: " + e$$5);
  }
  return;
}
function v2() {
  document.main_form.main_submit.focus();
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
  var lengthOfAlign = arrayOfSequences[0].length;
  if (arrayOfSequences.length < 2) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v12 = i$$1 < arrayOfTitles.length;
  for (;v12;) {
    var v1367 = arrayOfTitles[i$$1];
    var v1003 = JAM.call(v1367.search, v1367, [/\S/], JAM.policy.p17) == -1;
    if (!v1003) {
      var v1368 = arrayOfSequences[i$$1];
      v1003 = JAM.call(v1368.search, v1368, [/\S/], JAM.policy.p17) == -1;
    }
    var v593 = v1003;
    if (!v593) {
      v593 = arrayOfSequences[i$$1].length != lengthOfAlign;
    }
    if (v593) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    v12 = i$$1 < arrayOfTitles.length;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v1369 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p17) == -1;
  if (!v1369) {
    v1369 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p17) == -1;
  }
  var v1263 = v1369;
  if (!v1263) {
    v1263 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p17) == -1;
  }
  var v1006 = v1263;
  if (!v1006) {
    v1006 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p17) == -1;
  }
  var v595 = v1006;
  if (!v595) {
    v595 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p17) == -1;
  }
  if (v595) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v1009 = formElement.value;
  if (JAM.call(v1009.search, v1009, [/\S/], JAM.policy.p17) == -1) {
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
  var v17 = z$$2 < arrayOfPatterns.length;
  for (;v17;) {
    var v1010 = arrayOfPatterns[z$$2];
    if (JAM.call(v1010.search, v1010, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p17) == -1) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    if (moreExpressionCheck(arrayOfPatterns[z$$2]) == false) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    v17 = z$$2 < arrayOfPatterns.length;
  }
  var geneticCodeMatchResult = new Array(arrayOfPatterns.length);
  var geneticCodeMatchExp = new Array(arrayOfPatterns.length);
  var j = 0;
  var v23 = j < arrayOfPatterns.length;
  for (;v23;) {
    var v1012 = arrayOfPatterns[j];
    var v20 = JAM.call(v1012.match, v1012, [/\/.+\//], JAM.policy.p17) + "gi";
    if (JAM.isEval(eval)) {
      var v1511 = eval("introspect(JAM.policy.pFull) { " + v20 + " }")
    } else {
      var v1511 = JAM.call(eval, null, [v20])
    }
    geneticCodeMatchExp[j] = v1511;
    var v603 = arrayOfPatterns[j];
    var v1512 = JAM.call(v603.match, v603, [/=[a-zA-Z\*]/], JAM.policy.p17).toString();
    geneticCodeMatchResult[j] = v1512;
    var v22 = geneticCodeMatchResult[j];
    var v1513 = JAM.call(v22.replace, v22, [/=/g, ""], JAM.policy.p16);
    geneticCodeMatchResult[j] = v1513;
    j++;
    v23 = j < arrayOfPatterns.length;
  }
  var i$$2 = 0;
  var v30 = i$$2 <= testSequence.length - 3;
  for (;v30;) {
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, i$$2 + 3], JAM.policy.p16);
    j = 0;
    var v28 = j < geneticCodeMatchExp.length;
    for (;v28;) {
      if (JAM.call(codon.search, codon, [geneticCodeMatchExp[j]], JAM.policy.p15) != -1) {
        if (oneMatch == true) {
          alert("Genetic code error: more than one amino acid is coded by the codon: " + codon + ".");
          return false;
        }
        oneMatch = true;
      }
      j++;
      v28 = j < geneticCodeMatchExp.length;
    }
    if (oneMatch == false) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    v30 = i$$2 <= testSequence.length - 3;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v32 = z$$3 < arrayOfPatterns$$1.length;
  for (;v32;) {
    var v1016 = arrayOfPatterns$$1[z$$3];
    if (JAM.call(v1016.search, v1016, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p17) != -1) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    v32 = z$$3 < arrayOfPatterns$$1.length;
  }
  var i$$3 = 0;
  var v36 = i$$3 < arrayOfPatterns$$1.length;
  for (;v36;) {
    var re = new RegExp("[" + arrayOfPatterns$$1[i$$3] + "]", "gi");
    var j$$1 = i$$3 + 1;
    var v35 = j$$1 < arrayOfPatterns$$1.length;
    for (;v35;) {
      var v1018 = arrayOfPatterns$$1[j$$1];
      if (JAM.call(v1018.search, v1018, [re], JAM.policy.p15) != -1) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      v35 = j$$1 < arrayOfPatterns$$1.length;
    }
    i$$3++;
    v36 = i$$3 < arrayOfPatterns$$1.length;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v39 = z$$4 < arrayOfPatterns$$2.length;
  for (;v39;) {
    var v1019 = arrayOfPatterns$$2[z$$4];
    if (JAM.call(v1019.search, v1019, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p17) == -1) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    if (moreExpressionCheck(arrayOfPatterns$$2[z$$4]) == false) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    v39 = z$$4 < arrayOfPatterns$$2.length;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v1266 = getSequenceFromFasta(text$$7);
  if (JAM.call(v1266.replace, v1266, [/[^A-Za-z]/g, ""], JAM.policy.p16).length > maxInput) {
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
  outputWindow.document.close();
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
  if (alignArray.length < 3) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v52 = i$$4 < alignArray.length;
  for (;v52;) {
    var v1022 = alignArray[i$$4];
    if (JAM.call(v1022.search, v1022, [/[^\s]+\s/], JAM.policy.p17) == -1) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    v52 = i$$4 < alignArray.length;
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
  if (JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p17) != -1) {
    var v54 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p15);
    for (;v54;) {
      JAM.call(arrayOfFasta.push, arrayOfFasta, [matchArray[0]], JAM.policy.p15);
      v54 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p15);
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var stringToReturn = "&gt;results for " + sequence$$2.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p17) != -1) {
    stringToReturn = stringToReturn + '"' + fastaSequenceTitle + '"';
  }
  stringToReturn = stringToReturn + ' starting "' + JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p13) + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var stringToReturn$$1 = "Search results for " + sequenceOne.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p17) != -1) {
    stringToReturn$$1 = stringToReturn$$1 + '"' + fastaSequenceTitleOne + '"';
  }
  stringToReturn$$1 = stringToReturn$$1 + ' starting "' + JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p13) + '"\n';
  stringToReturn$$1 = stringToReturn$$1 + "and " + sequenceTwo.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p17) != -1) {
    stringToReturn$$1 = stringToReturn$$1 + '"' + fastaSequenceTitleTwo + '"';
  }
  stringToReturn$$1 = stringToReturn$$1 + ' starting "' + JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p13) + '"';
  return'<div class="info">' + stringToReturn$$1 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var geneticCodeMatchExp$$1 = new Array(arrayOfPatterns$$3.length);
  var j$$2 = 0;
  var v71 = j$$2 < arrayOfPatterns$$3.length;
  for (;v71;) {
    var v1023 = arrayOfPatterns$$3[j$$2];
    var v70 = JAM.call(v1023.match, v1023, [/\/.+\//], JAM.policy.p17) + "gi";
    if (JAM.isEval(eval)) {
      var v1514 = eval("introspect(JAM.policy.pFull) { " + v70 + " }")
    } else {
      var v1514 = JAM.call(eval, null, [v70])
    }
    geneticCodeMatchExp$$1[j$$2] = v1514;
    j$$2++;
    v71 = j$$2 < arrayOfPatterns$$3.length;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var geneticCodeMatchResult$$1 = new Array(arrayOfPatterns$$4.length);
  var j$$3 = 0;
  var v75 = j$$3 < arrayOfPatterns$$4.length;
  for (;v75;) {
    var v653 = arrayOfPatterns$$4[j$$3];
    var v1515 = JAM.call(v653.match, v653, [/=[a-zA-Z\*]/], JAM.policy.p17).toString();
    geneticCodeMatchResult$$1[j$$3] = v1515;
    var v74 = geneticCodeMatchResult$$1[j$$3];
    var v1516 = JAM.call(v74.replace, v74, [/=/g, ""], JAM.policy.p16);
    geneticCodeMatchResult$$1[j$$3] = v1516;
    j$$3++;
    v75 = j$$3 < arrayOfPatterns$$4.length;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var stringToReturn$$2 = "Results for " + sequence$$3.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p17) != -1) {
    stringToReturn$$2 = stringToReturn$$2 + '"' + fastaSequenceTitle$$1 + '"';
  }
  stringToReturn$$2 = stringToReturn$$2 + ' starting "' + JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p13) + '"';
  return'<div class="info">' + stringToReturn$$2 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var stringToReturn$$3 = "Results for " + topology + " " + sequence$$4.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p17) != -1) {
    stringToReturn$$3 = stringToReturn$$3 + '"' + fastaSequenceTitle$$2 + '"';
  }
  stringToReturn$$3 = stringToReturn$$3 + ' starting "' + JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p13) + '"';
  return'<div class="info">' + stringToReturn$$3 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var stringToReturn$$4 = "Alignment results for " + sequenceOne$$1.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p17) != -1) {
    stringToReturn$$4 = stringToReturn$$4 + '"' + fastaSequenceTitleOne$$1 + '"';
  }
  stringToReturn$$4 = stringToReturn$$4 + ' starting "' + JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p13) + '"\n';
  stringToReturn$$4 = stringToReturn$$4 + "and " + sequenceTwo$$1.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p17) != -1) {
    stringToReturn$$4 = stringToReturn$$4 + '"' + fastaSequenceTitleTwo$$1 + '"';
  }
  stringToReturn$$4 = stringToReturn$$4 + ' starting "' + JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p13) + '"';
  return'<div class="info">' + stringToReturn$$4 + "</div>\n";
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v96 = j$$4 < lengthOut;
  for (;v96;) {
    tempNum = JAM.call(Math.floor, Math, [Math.random() * components.length], JAM.policy.p17);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p15);
    j$$4++;
    v96 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p9);
}
function getSequenceFromFasta(sequenceRecord) {
  if (JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p17) != -1) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p16);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  if (JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p17) != -1) {
    fastaTitle = JAM.call(sequenceRecord$$1.match, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p16).toString();
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\>|[\f\n\r]/g, ""], JAM.policy.p16);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\s{2,}/g, " "], JAM.policy.p16);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/[\<\>]/gi, ""], JAM.policy.p16);
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  var v1482 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p17) != -1;
  if (!v1482) {
    v1482 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p17) != -1;
  }
  var v1473 = v1482;
  if (!v1473) {
    v1473 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p17) != -1;
  }
  var v1463 = v1473;
  if (!v1463) {
    v1463 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p17) != -1;
  }
  var v1450 = v1463;
  if (!v1450) {
    v1450 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p17) != -1;
  }
  var v1436 = v1450;
  if (!v1436) {
    v1436 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p17) != -1;
  }
  var v1420 = v1436;
  if (!v1420) {
    v1420 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p17) != -1;
  }
  var v1372 = v1420;
  if (!v1372) {
    v1372 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p17) != -1;
  }
  var v1267 = v1372;
  if (!v1267) {
    v1267 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p17) != -1;
  }
  var v1025 = v1267;
  if (!v1025) {
    v1025 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p17) != -1;
  }
  var v681 = v1025;
  if (!v681) {
    v681 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p17) != -1;
  }
  if (v681) {
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
  JAM.call(v105.write, v105, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n'], JAM.policy.p15);
  if (isColor) {
    var v107 = outputWindow.document;
    JAM.call(v107.write, v107, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; background-color: #66FF00}\n" + 
    "span.two, td.two {color: #000000; background-color: #FFFF66}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n" + "td.many {color: #000000}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + 
    "</style>\n"], JAM.policy.p15);
  } else {
    var v109 = outputWindow.document;
    JAM.call(v109.write, v109, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n" + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "td.many {color: #000000; background-color: #FFFFFF}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"], JAM.policy.p15);
  }
  var v111 = outputWindow.document;
  JAM.call(v111.write, v111, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$6 + " results</div>\n"], JAM.policy.p15);
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
  JAM.call(v113.write, v113, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n'], JAM.policy.p15);
  if (isBackground) {
    var v115 = outputWindow.document;
    JAM.call(v115.write, v115, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #FFFFFF; background-color: #000000}\n" + "span.sim {color: #FFFFFF; background-color: #666666}\n" + 
    "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n" + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n" + "span.c, span.m {color: #000000; background-color: #FFFF00}\n" + "span.s, span.t {color: #000000; background-color: #66FF00}\n" + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n" + "span.d, span.e {color: #000000; background-color: #0066FF}\n" + "span.n, span.q {color: #000000; background-color: #996633}\n" + "span.p {color: #000000; background-color: #FF99FF}\n" + 
    "</style>\n"], JAM.policy.p15);
  } else {
    var v117 = outputWindow.document;
    JAM.call(v117.write, v117, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n" + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n" + 
    "span.diff {color: #999999; background-color: #FFFFFF}\n" + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n" + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n" + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n" + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n" + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n" + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n" + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n" + 
    "span.p {color: #00FFCC; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"], JAM.policy.p15);
  }
  var v119 = outputWindow.document;
  JAM.call(v119.write, v119, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$8 + " results</div>\n"], JAM.policy.p15);
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
  if (JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p17) != -1) {
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
  JAM.call(testArray.push, testArray, [testString], JAM.policy.p15);
  if (testArray[0] != testString) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  if (JAM.call(testString.search, testString, [re$$2], JAM.policy.p15) == -1) {
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
  testString = JAM.call(testString.replace, testString, [/(\d)/g, v1], JAM.policy.p16);
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
  if (JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p17) == -1) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v1278 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p17) == -1;
  if (!v1278) {
    v1278 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p17) == -1;
  }
  var v1036 = v1278;
  if (!v1036) {
    v1036 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p17) == -1;
  }
  var v696 = v1036;
  if (!v696) {
    v696 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p17) == -1;
  }
  if (v696) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  if (JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p17) == -1) {
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
  if (JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p17) != -1) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  if (JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p17) != -1) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v1281 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p17) == -1;
  if (!v1281) {
    v1281 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p17) == -1;
  }
  var v1039 = v1281;
  if (!v1039) {
    v1039 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p17) == -1;
  }
  var v701 = v1039;
  if (!v701) {
    v701 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p17) == -1;
  }
  if (v701) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v1284 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p17) == -1;
  if (!v1284) {
    v1284 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p17) == -1;
  }
  var v1042 = v1284;
  if (!v1042) {
    v1042 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p17) == -1;
  }
  var v702 = v1042;
  if (!v702) {
    v702 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p17) == -1;
  }
  if (v702) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  if (JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p17) == -1) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v1287 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p17) == -1;
  if (!v1287) {
    v1287 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p17) == -1;
  }
  var v1045 = v1287;
  if (!v1045) {
    v1045 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p17) == -1;
  }
  var v704 = v1045;
  if (!v704) {
    v704 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p17) == -1;
  }
  if (v704) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  if (JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p17) == -1) {
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
    lineOfText = rightNum(i$$5 + 1, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v146 = j$$6 <= basePerLine / groupSize;
    for (;v146;) {
      var v145 = k < groupSize;
      for (;v145;) {
        lineOfText = lineOfText + JAM.call(text$$10.charAt, text$$10, [k + i$$5], JAM.policy.p15);
        k = k + 1;
        v145 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      v146 = j$$6 <= basePerLine / groupSize;
    }
    var v147 = outputWindow.document;
    JAM.call(v147.write, v147, [lineOfText + "\n"], JAM.policy.p15);
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
    if (v709) {
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
    var v159 = j$$7 <= basePerLine$$2 / groupSize$$2;
    for (;v159;) {
      var v154 = k$$1 < groupSize$$2;
      for (;v154;) {
        if (i$$6 + k$$1 >= stopBase$$2) {
          break;
        }
        lineOfText$$1 = lineOfText$$1 + JAM.call(text$$12.charAt, text$$12, [k$$1 + i$$6], JAM.policy.p15);
        k$$1 = k$$1 + 1;
        v154 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      if (numberPosition$$1 == "above") {
        aboveNum = aboveNum + rightNum(JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p19), "", groupSize$$2, tabIn$$3);
      }
      if (i$$6 >= stopBase$$2) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      v159 = j$$7 <= basePerLine$$2 / groupSize$$2;
    }
    if (numberPosition$$1 == "left") {
      var v160 = outputWindow.document;
      JAM.call(v160.write, v160, [rightNum(JAM.call(adjustNumbering, null, [lineNum, numberingAdjustment], JAM.policy.p19), "", 8, tabIn$$3) + lineOfText$$1 + "\n"], JAM.policy.p15);
      if (strands$$1 == "two") {
        var v162 = outputWindow.document;
        JAM.call(v162.write, v162, [rightNum(JAM.call(adjustNumbering, null, [lineNum, numberingAdjustment], JAM.policy.p19), "", 8, tabIn$$3) + complement(lineOfText$$1) + "\n"], JAM.policy.p15);
        var v164 = outputWindow.document;
        JAM.call(v164.write, v164, ["\n"], JAM.policy.p9);
      }
    } else {
      if (numberPosition$$1 == "right") {
        var v166 = outputWindow.document;
        JAM.call(v166.write, v166, [lineOfText$$1 + JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p19) + "\n"], JAM.policy.p15);
        if (strands$$1 == "two") {
          var v168 = outputWindow.document;
          JAM.call(v168.write, v168, [complement(lineOfText$$1) + JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p19) + "\n"], JAM.policy.p15);
          var v170 = outputWindow.document;
          JAM.call(v170.write, v170, ["\n"], JAM.policy.p9);
        }
      } else {
        if (numberPosition$$1 == "above") {
          var v172 = outputWindow.document;
          JAM.call(v172.write, v172, [aboveNum + "\n"], JAM.policy.p15);
          var v174 = outputWindow.document;
          JAM.call(v174.write, v174, [lineOfText$$1 + "\n"], JAM.policy.p15);
          if (strands$$1 == "two") {
            var v176 = outputWindow.document;
            JAM.call(v176.write, v176, [complement(lineOfText$$1) + "\n"], JAM.policy.p15);
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
    var v190 = j$$8 <= basePerLine$$3 / groupSize$$3;
    for (;v190;) {
      var v186 = k$$2 < groupSize$$3;
      for (;v186;) {
        if (i$$7 + k$$2 >= stopBase$$3) {
          break;
        }
        lineOfText$$2 = lineOfText$$2 + JAM.call(text$$13.charAt, text$$13, [k$$2 + i$$7], JAM.policy.p15);
        k$$2 = k$$2 + 1;
        v186 = k$$2 < groupSize$$3;
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
      v190 = j$$8 <= basePerLine$$3 / groupSize$$3;
    }
    if (numberPosition$$2 == "left") {
      var v191 = outputWindow.document;
      JAM.call(v191.write, v191, [rightNum(lineNum$$1, "", 8, tabIn$$4) + lineOfText$$2 + "\n"], JAM.policy.p15);
    } else {
      if (numberPosition$$2 == "right") {
        var v193 = outputWindow.document;
        JAM.call(v193.write, v193, [lineOfText$$2 + i$$7 + "\n"], JAM.policy.p15);
      } else {
        if (numberPosition$$2 == "above") {
          var v195 = outputWindow.document;
          JAM.call(v195.write, v195, [aboveNum$$1 + "\n"], JAM.policy.p15);
          var v197 = outputWindow.document;
          JAM.call(v197.write, v197, [lineOfText$$2 + "\n"], JAM.policy.p15);
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
  var v1056 = sequence$$13.length <= firstIndexToMutate;
  if (!v1056) {
    v1056 = lastIndexToMutate < 0;
  }
  var v726 = v1056;
  if (!v726) {
    v726 = lastIndexToMutate <= firstIndexToMutate;
  }
  if (v726) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v211 = i$$8 < numMut;
  for (;v211;) {
    maxNum = sequence$$13.length;
    randNum = JAM.call(Math.floor, Math, [Math.random() * maxNum], JAM.policy.p17);
    var v728 = randNum < firstIndexToMutate;
    if (!v728) {
      v728 = randNum > lastIndexToMutate;
    }
    if (v728) {
      numMut++;
      i$$8++;
      v211 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p17);
    needNewChar = true;
    for (;needNewChar;) {
      componentsIndex = JAM.call(Math.round, Math, [Math.random() * components$$1.length], JAM.policy.p17);
      if (componentsIndex == components$$1.length) {
        componentsIndex = 0;
      }
      if (components$$1[componentsIndex] != currentChar) {
        needNewChar = false;
      }
    }
    sequence$$13 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p13) + components$$1[componentsIndex] + JAM.call(sequence$$13.substring, sequence$$13, [randNum + 1, sequence$$13.length], JAM.policy.p21);
    i$$8++;
    v211 = i$$8 < numMut;
  }
  var v212 = outputWindow.document;
  JAM.call(v212.write, v212, [addReturns(sequence$$13)], JAM.policy.p15);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v218 = j$$9 < lengthOut$$1;
  for (;v218;) {
    tempNum$$1 = JAM.call(Math.floor, Math, [Math.random() * components$$2.length], JAM.policy.p17);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    if (sequence$$14.length == 60) {
      var v215 = outputWindow.document;
      JAM.call(v215.write, v215, [sequence$$14 + "\n"], JAM.policy.p15);
      sequence$$14 = "";
    }
    j$$9++;
    v218 = j$$9 < lengthOut$$1;
  }
  var v219 = outputWindow.document;
  JAM.call(v219.write, v219, [sequence$$14 + "\n"], JAM.policy.p15);
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
    sequence$$15 = JAM.call(sequence$$15.substring, sequence$$15, [sequence$$15.length - lookAhead, sequence$$15.length], JAM.policy.p21) + sequence$$15 + JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v225 = outputWindow.document;
  JAM.call(v225.write, v225, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p9);
  var v226 = outputWindow.document;
  JAM.call(v226.write, v226, ['<tr><td class="title" width="200px">' + "Site:" + '</td><td class="title">' + "Positions:" + "</td></tr>\n"], JAM.policy.p15);
  var i$$9 = 0;
  var v243 = i$$9 < arrayOfItems.length;
  for (;v243;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v743 = arrayOfItems[i$$9];
    matchExp = JAM.call(v743.match, v743, [/\/.+\//], JAM.policy.p17) + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    var v1296 = arrayOfItems[i$$9];
    var v744 = JAM.call(v1296.match, v1296, [/\)\D*\d+/], JAM.policy.p17).toString();
    cutDistance = parseFloat(JAM.call(v744.replace, v744, [/\)\D*/, ""], JAM.policy.p16));
    var v235 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p15);
    for (;v235;) {
      matchPosition = matchExp.lastIndex - cutDistance;
      var v745 = matchPosition >= lowerLimit;
      if (v745) {
        v745 = matchPosition < upperLimit;
      }
      if (v745) {
        timesFound++;
        tempString$$1 = tempString$$1 + ", " + (matchPosition - shiftValue + 1);
      }
      matchExp.lastIndex = matchExp.lastIndex - RegExp.lastMatch.length + 1;
      v235 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p15);
    }
    if (JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p17) != -1) {
      tempString$$1 = JAM.call(tempString$$1.replace, tempString$$1, [/none,\s*/, ""], JAM.policy.p16);
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
    var v241 = outputWindow.document;
    var v1443 = '<tr><td class="' + backGroundClass + '">';
    var v1480 = arrayOfItems[i$$9];
    var v1458 = JAM.call(v1480.match, v1480, [/\([^\(]+\)/], JAM.policy.p17).toString();
    JAM.call(v241.write, v241, [v1443 + JAM.call(v1458.replace, v1458, [/\(|\)/g, ""], JAM.policy.p16) + '</td><td class="' + backGroundClass + '">' + tempString$$1 + "</td></tr>\n"], JAM.policy.p15);
    timesFound = 0;
    i$$9++;
    v243 = i$$9 < arrayOfItems.length;
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
  JAM.call(v246.write, v246, ['<tr><td class="title">' + "Pattern:" + '</td><td class="title">' + "Times found:" + '</td><td class="title">' + "Percentage:" + "</td></tr>\n"], JAM.policy.p15);
  var i$$10 = 0;
  var v256 = i$$10 < arrayOfItems$$1.length;
  for (;v256;) {
    var tempNumber = 0;
    var v754 = arrayOfItems$$1[i$$10];
    var matchExp$$1 = JAM.call(v754.match, v754, [/\/[^\/]+\//], JAM.policy.p17) + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    if (JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p15) != -1) {
      tempNumber = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p15).length;
    }
    var percentage = 0;
    var v1066 = originalLength + 1;
    var v1393 = arrayOfItems$$1[i$$10];
    if (v1066 - parseFloat(JAM.call(v1393.match, v1393, [/\d+/], JAM.policy.p17)) > 0) {
      var v251 = 100 * tempNumber;
      var v757 = originalLength + 1;
      var v1300 = arrayOfItems$$1[i$$10];
      percentage = v251 / (v757 - parseFloat(JAM.call(v1300.match, v1300, [/\d+/], JAM.policy.p17)));
    }
    var v254 = outputWindow.document;
    var v1481 = arrayOfItems$$1[i$$10];
    var v1459 = JAM.call(v1481.match, v1481, [/\([^\(]+\)\b/], JAM.policy.p17).toString();
    JAM.call(v254.write, v254, ["<tr><td>" + JAM.call(v1459.replace, v1459, [/\(|\)/g, ""], JAM.policy.p16) + "</td><td>" + tempNumber + "</td><td>" + JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p11) + "</td></tr>\n"], JAM.policy.p15);
    i$$10++;
    v256 = i$$10 < arrayOfItems$$1.length;
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
  var v264 = sequence$$17.length > 0;
  for (;v264;) {
    maxNum$$1 = sequence$$17.length;
    randNum$$1 = JAM.call(Math.floor, Math, [Math.random() * maxNum$$1], JAM.policy.p17);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p17);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p13);
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [randNum$$1 + 1, sequence$$17.length], JAM.policy.p16);
    sequence$$17 = tempString1 + tempString2;
    if (tempSeq.length == 60) {
      var v261 = outputWindow.document;
      JAM.call(v261.write, v261, [tempSeq + "\n"], JAM.policy.p15);
      tempSeq = "";
    }
    v264 = sequence$$17.length > 0;
  }
  var v265 = outputWindow.document;
  JAM.call(v265.write, v265, [tempSeq + "\n"], JAM.policy.p15);
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
  if (testScript() == false) {
    return false;
  }
  var v766 = checkFormElement(theDocument.forms[0].elements[0]) == false;
  if (!v766) {
    v766 = JAM.call(checkSequenceLength, null, [theDocument.forms[0].elements[0].value, maxInput$$3], JAM.policy.p19) == false;
  }
  if (v766) {
    return false;
  }
  molarSalt = milliMolarSalt / 1E3;
  molarMagnesium = milliMolarMagnesium / 1E3;
  molarPrimerTotal = nanoMolarPrimerTotal / 1E9;
  isPhosphorylated = false;
  openWindow("PCR Primer Stats");
  openPre();
  var arrayOfFasta$$1 = getArrayOfFasta(theDocument.forms[0].elements[0].value);
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
  JAM.call(v273.write, v273, ["-Combined concentration of K+ and Na+ in the reaction = " + milliMolarSalt + " millimolar.\n"], JAM.policy.p15);
  var v275 = outputWindow.document;
  JAM.call(v275.write, v275, ["-Mg+2 concentration in the reaction = " + milliMolarMagnesium + " millimolar.\n"], JAM.policy.p15);
  var v277 = outputWindow.document;
  JAM.call(v277.write, v277, ["-Primer concentration in the reaction = " + nanoMolarPrimerTotal + " nanomolar.\n"], JAM.policy.p15);
  var v279 = outputWindow.document;
  JAM.call(v279.write, v279, ["\n"], JAM.policy.p9);
  var v280 = outputWindow.document;
  JAM.call(v280.write, v280, ["------------------------------------------------------------\n"], JAM.policy.p9);
  var i$$11 = 0;
  var v345 = i$$11 < arrayOfFasta$$1.length;
  for (;v345;) {
    newDna = getSequenceFromFasta(arrayOfFasta$$1[i$$11]);
    title$$9 = getTitleFromFasta(arrayOfFasta$$1[i$$11]);
    newDna = _removeNonPrimer(newDna);
    if (newDna.length == 0) {
      i$$11++;
      v345 = i$$11 < arrayOfFasta$$1.length;
      continue;
    }
    if (newDna.length > maxPrimerLength) {
      i$$11++;
      v345 = i$$11 < arrayOfFasta$$1.length;
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
    JAM.call(v288.write, v288, [rightNum("Primer name:", "", 32, "") + title$$9 + "\n"], JAM.policy.p15);
    var v290 = outputWindow.document;
    JAM.call(v290.write, v290, [rightNum("Primer sequence:", "", 32, "") + newDna + "\n"], JAM.policy.p15);
    var v292 = outputWindow.document;
    JAM.call(v292.write, v292, [rightNum("Sequence length:", "", 32, "") + newDna.length + "\n"], JAM.policy.p15);
    var v294 = outputWindow.document;
    JAM.call(v294.write, v294, [rightNum("Base counts:", "", 32, "") + _baseCounts(newDna) + "\n"], JAM.policy.p15);
    var v296 = outputWindow.document;
    JAM.call(v296.write, v296, [rightNum("GC content (%):", "", 32, "") + percentGC + "\n"], JAM.policy.p15);
    var v298 = outputWindow.document;
    JAM.call(v298.write, v298, [rightNum("Molecular weight (Daltons):", "", 32, "") + JAM.call(_molecularWeight, null, [newDna, isPhosphorylated], JAM.policy.p19) + "\n"], JAM.policy.p15);
    var v300 = outputWindow.document;
    JAM.call(v300.write, v300, [rightNum("nmol/A260:", "", 32, "") + _nmolPerA260(newDna) + "\n"], JAM.policy.p15);
    var v302 = outputWindow.document;
    JAM.call(v302.write, v302, [rightNum("micrograms/A260:", "", 32, "") + JAM.call(_microgramsPerA260, null, [newDna, isPhosphorylated], JAM.policy.p19) + "\n"], JAM.policy.p15);
    var v304 = outputWindow.document;
    JAM.call(v304.write, v304, [rightNum("Basic Tm (degrees C):", "", 32, "") + _basicTm(newDna) + "\n"], JAM.policy.p15);
    var v306 = outputWindow.document;
    JAM.call(v306.write, v306, [rightNum("Salt adjusted Tm (degrees C):", "", 32, "") + JAM.call(_molarSaltAdjustedTm, null, [newDna, molarSalt], JAM.policy.p19) + "\n"], JAM.policy.p15);
    var v308 = outputWindow.document;
    JAM.call(v308.write, v308, [rightNum("Nearest neighbor Tm (degrees C):", "", 32, "") + nearestNeighborTm + "\n"], JAM.policy.p15);
    var v310 = outputWindow.document;
    JAM.call(v310.write, v310, ["\n"], JAM.policy.p9);
    var v311 = outputWindow.document;
    JAM.call(v311.write, v311, ["PCR suitability tests (Pass / Warning):\n"], JAM.policy.p9);
    var v312 = outputWindow.document;
    JAM.call(v312.write, v312, ["------------------------------------\n"], JAM.policy.p9);
    var v313 = outputWindow.document;
    JAM.call(v313.write, v313, [rightNum("Single base runs:", "", 32, "") + _getBaseRunsReport(newDna, 5) + "\n"], JAM.policy.p15);
    var v315 = outputWindow.document;
    JAM.call(v315.write, v315, [rightNum("Dinucleotide base runs:", "", 32, "") + _getDiNucleotideRunsReport(newDna, 5) + "\n"], JAM.policy.p15);
    var v317 = outputWindow.document;
    JAM.call(v317.write, v317, [rightNum("Length:", "", 32, "") + _getSuitableLengthReport(newDna, 14, 30) + "\n"], JAM.policy.p15);
    var v319 = outputWindow.document;
    JAM.call(v319.write, v319, [rightNum("Percent GC:", "", 32, "") + JAM.call(_getSuitableGCReport, null, [newDna, percentGC, 40, 60], JAM.policy.p19) + "\n"], JAM.policy.p15);
    var v321 = outputWindow.document;
    JAM.call(v321.write, v321, [rightNum("Tm (Nearest neighbor):", "", 32, "") + JAM.call(_getSuitableTmReport, null, [newDna, nearestNeighborTm, 50, 58], JAM.policy.p19) + "\n"], JAM.policy.p15);
    var v323 = outputWindow.document;
    JAM.call(v323.write, v323, [rightNum("GC clamp:", "", 32, "") + _getSuitableThreePrimeGC(newDna, 1, 3) + "\n"], JAM.policy.p15);
    var v325 = outputWindow.document;
    JAM.call(v325.write, v325, [rightNum("Self-annealing:", "", 32, "") + selfCompHash["report"] + "\n"], JAM.policy.p15);
    if (selfCompHash["report"] != "Pass") {
      var v327 = outputWindow.document;
      JAM.call(v327.write, v327, [rightNum(":", "", 32, "") + selfCompHash["upper"] + "\n"], JAM.policy.p15);
      var v329 = outputWindow.document;
      JAM.call(v329.write, v329, [rightNum(":", "", 32, "") + selfCompHash["divider"] + "\n"], JAM.policy.p15);
      var v331 = outputWindow.document;
      JAM.call(v331.write, v331, [rightNum(":", "", 32, "") + selfCompHash["lower"] + "\n"], JAM.policy.p15);
    }
    var v334 = outputWindow.document;
    JAM.call(v334.write, v334, [rightNum("Hairpin formation:", "", 32, "") + hairpinHash["report"] + "\n"], JAM.policy.p15);
    if (hairpinHash["report"] != "Pass") {
      var v336 = outputWindow.document;
      JAM.call(v336.write, v336, [rightNum(":", "", 32, "") + hairpinHash["upper"] + "\n"], JAM.policy.p15);
      var v338 = outputWindow.document;
      JAM.call(v338.write, v338, [rightNum(":", "", 32, "") + hairpinHash["divider"] + "\n"], JAM.policy.p15);
      var v340 = outputWindow.document;
      JAM.call(v340.write, v340, [rightNum(":", "", 32, "") + hairpinHash["lower"] + "\n"], JAM.policy.p15);
    }
    var v343 = outputWindow.document;
    JAM.call(v343.write, v343, ["------------------------------------------------------------\n"], JAM.policy.p9);
    var v344 = outputWindow.document;
    JAM.call(v344.write, v344, ["\n"], JAM.policy.p9);
    i$$11++;
    v345 = i$$11 < arrayOfFasta$$1.length;
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
  if (JAM.call(sequence$$19.search, sequence$$19, [/[^gatc]/i], JAM.policy.p17) == -1) {
    return true;
  }
  return false;
}
function _baseCounts(sequence$$20) {
  var numG = _getBaseCount(sequence$$20, "g");
  var numA = _getBaseCount(sequence$$20, "a");
  var numT = _getBaseCount(sequence$$20, "t");
  var numC = _getBaseCount(sequence$$20, "c");
  var numOther = sequence$$20.length - (numG + numA + numT + numC);
  return "G=" + numG + "; A=" + numA + "; T=" + numT + "; C=" + numC + "; Other=" + numOther + ";";
}
function _microgramsPerA260(sequence$$21, isPhosphorylated$$1) {
  if (_containsOnlyNonDegenerates(sequence$$21)) {
    return JAM.call(_microgramsPerA260NonDegen, null, [sequence$$21, isPhosphorylated$$1], JAM.policy.p19);
  } else {
    return JAM.call(_microgramsPerA260Degen, null, [sequence$$21, isPhosphorylated$$1], JAM.policy.p19);
  }
  return;
}
function _microgramsPerA260NonDegen(sequence$$22, isPhosphorylated$$2) {
  var mw = JAM.call(_mw, null, [sequence$$22, isPhosphorylated$$2], JAM.policy.p19);
  var result = mw / _getExtinctionCoefficient(sequence$$22);
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
  return JAM.call(_microgramsPerA260NonDegen, null, [upperBoundsSequence, isPhosphorylated$$3], JAM.policy.p19) + " to " + JAM.call(_microgramsPerA260NonDegen, null, [lowerBoundsSequence, isPhosphorylated$$3], JAM.policy.p19);
}
function _nmolPerA260(sequence$$24) {
  if (_containsOnlyNonDegenerates(sequence$$24)) {
    return _nmolPerA260NonDegen(sequence$$24);
  } else {
    return _nmolPerA260Degen(sequence$$24);
  }
  return;
}
function _nmolPerA260NonDegen(sequence$$25) {
  var result$$1 = _getExtinctionCoefficient(sequence$$25);
  result$$1 = 1 / result$$1 * 1E3;
  return JAM.call(result$$1.toFixed, result$$1, [2], JAM.policy.p11);
}
function _getExtinctionCoefficient(sequence$$26) {
  var dimerValues = _getDimerExtinctionCoefficients();
  var singleValues = _getSingleExtinctionCoefficients();
  var dimerSum = 0;
  var singleSum = 0;
  sequence$$26 = sequence$$26.toLowerCase();
  var i$$12 = 0;
  var v357 = i$$12 < sequence$$26.length - 1;
  for (;v357;) {
    dimerSum = dimerSum + dimerValues[JAM.call(sequence$$26.charAt, sequence$$26, [i$$12], JAM.policy.p15) + JAM.call(sequence$$26.charAt, sequence$$26, [i$$12 + 1], JAM.policy.p15)];
    i$$12++;
    v357 = i$$12 < sequence$$26.length - 1;
  }
  i$$12 = 1;
  var v359 = i$$12 < sequence$$26.length - 1;
  for (;v359;) {
    singleSum = singleSum + singleValues[JAM.call(sequence$$26.charAt, sequence$$26, [i$$12], JAM.policy.p15)];
    i$$12++;
    v359 = i$$12 < sequence$$26.length - 1;
  }
  return 2 * dimerSum - singleSum;
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
  return _nmolPerA260NonDegen(upperBoundsSequence$$1) + " to " + _nmolPerA260NonDegen(lowerBoundsSequence$$1);
}
function _percentGC(sequence$$28) {
  if (_containsOnlyNonDegenerates(sequence$$28)) {
    return _percentGCNonDegen(sequence$$28);
  } else {
    return _percentGCDegen(sequence$$28);
  }
  return;
}
function _percentGCNonDegen(sequence$$29) {
  var numHits = _getBaseCount(sequence$$29, "g") + _getBaseCount(sequence$$29, "c");
  var v366 = numHits / sequence$$29.length * 100;
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
  return _percentGCNonDegen(lowerBoundsSequence$$2) + " to " + _percentGCNonDegen(upperBoundsSequence$$2);
}
function _molecularWeight(sequence$$31, isPhosphorylated$$4) {
  if (_containsOnlyNonDegenerates(sequence$$31)) {
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
  return g * 329.21 + a * 313.21 + t * 304.2 + c * 289.18 - 61.96 + phosAdjust;
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
  return JAM.call(_molecularWeightNonDegen, null, [lowerBoundsSequence$$3, isPhosphorylated$$7], JAM.policy.p19) + " to " + JAM.call(_molecularWeightNonDegen, null, [upperBoundsSequence$$3, isPhosphorylated$$7], JAM.policy.p19);
}
function _basicTm(sequence$$35) {
  if (_containsOnlyNonDegenerates(sequence$$35)) {
    return _basicTmNonDegen(sequence$$35);
  } else {
    return _basicTmDegen(sequence$$35);
  }
  return;
}
function _basicTmNonDegen(sequence$$36) {
  if (sequence$$36.length < 14) {
    var numG$$1 = _getBaseCount(sequence$$36, "g");
    var numC$$1 = _getBaseCount(sequence$$36, "c");
    var numA$$1 = _getBaseCount(sequence$$36, "a");
    var numT$$1 = _getBaseCount(sequence$$36, "t");
    var v375 = 4 * (numG$$1 + numC$$1) + 2 * (numA$$1 + numT$$1);
    return JAM.call(v375.toFixed, v375, [0], JAM.policy.p11);
  } else {
    numG$$1 = _getBaseCount(sequence$$36, "g");
    numC$$1 = _getBaseCount(sequence$$36, "c");
    var v376 = 64.9 + 41 * (numG$$1 + numC$$1 - 16.4) / sequence$$36.length;
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
  return _basicTmNonDegen(lowerBoundsSequence$$4) + " to " + _basicTmNonDegen(upperBoundsSequence$$4);
}
function _molarSaltAdjustedTm(sequence$$38, molarSalt$$1) {
  if (_containsOnlyNonDegenerates(sequence$$38)) {
    return JAM.call(_molarSaltAdjustedTmNonDegen, null, [sequence$$38, molarSalt$$1], JAM.policy.p19);
  } else {
    return JAM.call(_molarSaltAdjustedTmDegen, null, [sequence$$38, molarSalt$$1], JAM.policy.p19);
  }
  return;
}
function _molarSaltAdjustedTmNonDegen(sequence$$39, molarSalt$$2) {
  var gcHits = _getBaseCount(sequence$$39, "g") + _getBaseCount(sequence$$39, "c");
  var pGC = gcHits / sequence$$39.length * 100;
  var v384 = 81.5 + 7.21 * JAM.call(Math.log, Math, [molarSalt$$2], JAM.policy.p15) + .41 * pGC - 675 / sequence$$39.length;
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
  return JAM.call(_molarSaltAdjustedTmNonDegen, null, [lowerBoundsSequence$$5, molarSalt$$3], JAM.policy.p19) + " to " + JAM.call(_molarSaltAdjustedTmNonDegen, null, [upperBoundsSequence$$5, molarSalt$$3], JAM.policy.p19);
}
function _nearestNeighborTm(sequence$$41, molarSalt$$4, molarPrimerTotal$$1, molarMagnesium$$1) {
  if (_containsOnlyNonDegenerates(sequence$$41)) {
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
  var correctedSalt = molarSalt$$5 + molarMagnesium$$2 * 140;
  ds = ds + .368 * (sequence$$42.length - 1) * JAM.call(Math.log, Math, [correctedSalt], JAM.policy.p15);
  var termDsCorr = _getTerminalCorrectionsDsHash();
  ds = ds + termDsCorr[JAM.call(sequence$$42.charAt, sequence$$42, [0], JAM.policy.p11)];
  ds = ds + termDsCorr[JAM.call(sequence$$42.charAt, sequence$$42, [sequence$$42.length - 1], JAM.policy.p15)];
  var termDhCorr = _getTerminalCorrectionsDhHash();
  dh = dh + termDhCorr[JAM.call(sequence$$42.charAt, sequence$$42, [0], JAM.policy.p11)];
  dh = dh + termDhCorr[JAM.call(sequence$$42.charAt, sequence$$42, [sequence$$42.length - 1], JAM.policy.p15)];
  var dsValues = _getDsHash();
  var dhValues = _getDhHash();
  var i$$13 = 0;
  var v396 = i$$13 < sequence$$42.length - 1;
  for (;v396;) {
    ds = ds + dsValues[JAM.call(sequence$$42.charAt, sequence$$42, [i$$13], JAM.policy.p15) + JAM.call(sequence$$42.charAt, sequence$$42, [i$$13 + 1], JAM.policy.p15)];
    dh = dh + dhValues[JAM.call(sequence$$42.charAt, sequence$$42, [i$$13], JAM.policy.p15) + JAM.call(sequence$$42.charAt, sequence$$42, [i$$13 + 1], JAM.policy.p15)];
    i$$13++;
    v396 = i$$13 < sequence$$42.length - 1;
  }
  var v397 = 1E3 * dh / (ds + R * JAM.call(Math.log, Math, [molarPrimerTotal$$2 / 2], JAM.policy.p15)) - 273.15;
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
  return JAM.call(_nearestNeighborTmNonDegen, null, [lowerBoundsSequence$$6, molarSalt$$6, molarPrimerTotal$$3, molarMagnesium$$3], JAM.policy.p19) + " to " + JAM.call(_nearestNeighborTmNonDegen, null, [upperBoundsSequence$$6, molarSalt$$6, molarPrimerTotal$$3, molarMagnesium$$3], JAM.policy.p19);
}
function _getBaseCount(sequence$$44, base$$1) {
  var basePattern = new RegExp(base$$1, "gi");
  if (JAM.call(sequence$$44.search, sequence$$44, [basePattern], JAM.policy.p15) != -1) {
    return JAM.call(sequence$$44.match, sequence$$44, [basePattern], JAM.policy.p15).length;
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
  var v404 = i$$14 < nucleotides.length;
  for (;v404;) {
    if (JAM.call(_hasRunOfBases, null, [sequence$$45, nucleotides[i$$14], minRunLength], JAM.policy.p19)) {
      hasRun = true;
      report = report + "Contains run of " + nucleotides[i$$14] + "'s; ";
    }
    i$$14++;
    v404 = i$$14 < nucleotides.length;
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
  var v407 = i$$15 < diNucleotides.length;
  for (;v407;) {
    if (JAM.call(_hasRunOfBases, null, [sequence$$46, diNucleotides[i$$15], minRunLength$$1], JAM.policy.p19)) {
      hasRun$$1 = true;
      report$$1 = report$$1 + "Contains run of " + diNucleotides[i$$15] + "'s; ";
    }
    i$$15++;
    v407 = i$$15 < diNucleotides.length;
  }
  if (hasRun$$1) {
    return "Warning: " + report$$1;
  } else {
    return "Pass";
  }
  return;
}
function _hasRunOfBases(sequence$$47, base$$2, minRunLength$$2) {
  var basePattern$$1 = new RegExp("(?:" + base$$2 + "){" + minRunLength$$2 + ",}", "gi");
  if (JAM.call(sequence$$47.search, sequence$$47, [basePattern$$1], JAM.policy.p15) != -1) {
    return JAM.call(sequence$$47.match, sequence$$47, [basePattern$$1], JAM.policy.p15).length;
  } else {
    return 0;
  }
  return;
}
function _getSuitableLengthReport(sequence$$48, minSuitableLength, maxSuitableLength) {
  var report$$2 = "";
  var hasProblem = false;
  if (sequence$$48.length < minSuitableLength) {
    hasProblem = true;
    report$$2 = report$$2 + "Contains fewer than " + minSuitableLength + " bases; ";
  }
  if (sequence$$48.length > maxSuitableLength) {
    hasProblem = true;
    report$$2 = report$$2 + "Contains more than " + maxSuitableLength + " bases; ";
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
  if (JAM.call(percentGCRange.search, percentGCRange, [rangePattern], JAM.policy.p15) != -1) {
    lowerCalculated = parseFloat($1);
    upperCalculated = parseFloat($2);
  } else {
    lowerCalculated = parseFloat(percentGCRange);
    upperCalculated = parseFloat(percentGCRange);
  }
  if (lowerCalculated < minSuitableGC) {
    hasProblem$$1 = true;
    report$$3 = report$$3 + "%GC is less than " + minSuitableGC + "; ";
  }
  if (upperCalculated > maxSuitableGC) {
    hasProblem$$1 = true;
    report$$3 = report$$3 + "%GC is greater than " + maxSuitableGC + "; ";
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
  if (sequence$$50.length < minSuitableLength$$1) {
    hasProblem$$2 = true;
    report$$4 = report$$4 + "Contains fewer than " + minSuitableLength$$1 + " bases; ";
  }
  if (sequence$$50.length > maxSuitableLength$$1) {
    hasProblem$$2 = true;
    report$$4 = report$$4 + "Contains more than " + maxSuitableLength$$1 + " bases; ";
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
  if (JAM.call(range$$5.search, range$$5, [rangePattern$$1], JAM.policy.p15) != -1) {
    lowerCalculated$$1 = parseFloat($1);
    upperCalculated$$1 = parseFloat($2);
  } else {
    lowerCalculated$$1 = parseFloat(range$$5);
    upperCalculated$$1 = parseFloat(range$$5);
  }
  if (lowerCalculated$$1 < minSuitable) {
    hasProblem$$3 = true;
    report$$5 = report$$5 + "Tm is less than " + minSuitable + "; ";
  }
  if (upperCalculated$$1 > maxSuitable) {
    hasProblem$$3 = true;
    report$$5 = report$$5 + "Tm is greater than " + maxSuitable + "; ";
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
  if (sequence$$52.length >= desiredThreePrimeEndSize) {
    threePrimeEnd = JAM.call(sequence$$52.substr, sequence$$52, [sequence$$52.length - desiredThreePrimeEndSize, 5], JAM.policy.p16);
  } else {
    threePrimeEnd = sequence$$52;
  }
  gcCounts = _getBaseCount(threePrimeEnd, "g") + _getBaseCount(threePrimeEnd, "c");
  if (gcCounts < minSuitable$$1) {
    hasProblem$$4 = true;
    report$$6 = report$$6 + "There are less than " + minSuitable$$1 + " G's or C's in the last " + threePrimeEnd.length + " bases; ";
  }
  if (gcCounts > maxSuitable$$1) {
    hasProblem$$4 = true;
    report$$6 = report$$6 + "There are more than " + maxSuitable$$1 + " G's or C's in the last " + threePrimeEnd.length + " bases; ";
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
  var v441 = i$$16 < seqAligned.length;
  for (;v441;) {
    if (JAM.call(scoreSet.getScore, scoreSet, [JAM.call(seqAligned.charAt, seqAligned, [i$$16], JAM.policy.p15), JAM.call(revAligned.charAt, revAligned, [i$$16], JAM.policy.p15)], JAM.policy.p21) == matchScore) {
      JAM.call(divider.push, divider, ["|"], JAM.policy.p9);
      contiguous++;
      totalMatches++;
    } else {
      JAM.call(divider.push, divider, [" "], JAM.policy.p9);
      contiguous = 0;
    }
    if (contiguous > maxContiguous) {
      maxContiguous = contiguous;
    }
    i$$16++;
    v441 = i$$16 < seqAligned.length;
  }
  if (maxContiguous > maxContig) {
    hasProblem$$5 = true;
    report$$7 = report$$7 + "There are more than " + maxContig + " self-annealing bases in a row; ";
  }
  if (totalMatches / sequenceLength * 100 > maxPercentIdent) {
    hasProblem$$5 = true;
    report$$7 = report$$7 + "More than " + maxPercentIdent + " percent of the bases are self-annealing; ";
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
  var v452 = upper.length > 0;
  for (;v452;) {
    score$$1 = 0;
    if (loop == "") {
      loop = upper.pop();
    } else {
      JAM.call(lower.push, lower, [loop], JAM.policy.p15);
      loop = "";
    }
    u = upper.length - 1;
    l = lower.length - 1;
    var v880 = u >= 0;
    if (v880) {
      v880 = l >= 0;
    }
    var v450 = v880;
    for (;v450;) {
      score$$1 = score$$1 + JAM.call(scoreSet$$1.getScore, scoreSet$$1, [upper[u], lower[l]], JAM.policy.p21);
      u--;
      l--;
      var v883 = u >= 0;
      if (v883) {
        v883 = l >= 0;
      }
      v450 = v883;
    }
    if (score$$1 > topScore) {
      topScore = score$$1;
      topScoreUpper = JAM.call(upper.join, upper, [""], JAM.policy.p9);
      topScoreLower = JAM.call(lower.join, lower, [""], JAM.policy.p9);
      topScoreLoop = loop;
    }
    v452 = upper.length > 0;
  }
  var upperLowerDiff = topScoreUpper.length - topScoreLower.length;
  if (upperLowerDiff > 0) {
    var i$$17 = 0;
    var v455 = i$$17 < upperLowerDiff;
    for (;v455;) {
      topScoreLower = " " + topScoreLower;
      i$$17++;
      v455 = i$$17 < upperLowerDiff;
    }
  } else {
    if (upperLowerDiff < 0) {
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
  var v461 = i$$17 < topScoreUpper.length;
  for (;v461;) {
    if (JAM.call(scoreSet$$1.getScore, scoreSet$$1, [JAM.call(topScoreUpper.charAt, topScoreUpper, [i$$17], JAM.policy.p15), JAM.call(topScoreLower.charAt, topScoreLower, [i$$17], JAM.policy.p15)], JAM.policy.p21) == matchScore$$1) {
      JAM.call(divider$$1.push, divider$$1, ["|"], JAM.policy.p9);
      contiguous$$1++;
      totalMatches$$1++;
    } else {
      JAM.call(divider$$1.push, divider$$1, [" "], JAM.policy.p9);
      contiguous$$1 = 0;
    }
    if (contiguous$$1 > maxContiguous$$1) {
      maxContiguous$$1 = contiguous$$1;
    }
    i$$17++;
    v461 = i$$17 < topScoreUpper.length;
  }
  if (maxContiguous$$1 > maxContig$$1) {
    hasProblem$$6 = true;
    report$$8 = report$$8 + "There are more than " + maxContig$$1 + " hairpin bases in a row; ";
  }
  if (totalMatches$$1 / sequenceLength$$1 * 100 > maxPercentIdent$$1) {
    hasProblem$$6 = true;
    report$$8 = report$$8 + "More than " + maxPercentIdent$$1 + " percent of the bases are in a hairpin; ";
  }
  if (hasProblem$$6) {
    report$$8 = "Warning: " + report$$8;
  } else {
    report$$8 = "Pass";
  }
  if (topScoreLoop == "") {
    topScoreLoop = ")";
  }
  returnHash$$1["report"] = report$$8;
  returnHash$$1["upper"] = topScoreUpper;
  returnHash$$1["divider"] = JAM.call(divider$$1.join, divider$$1, [""], JAM.policy.p9) + topScoreLoop;
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
  if (!v891) {
    var v1160 = r2$$1 == "g";
    if (v1160) {
      v1160 = r1$$2 == "c";
    }
    v891 = v1160;
  }
  if (v891) {
    return this.match;
  } else {
    var v1162 = r1$$2 == "a";
    if (v1162) {
      v1162 = r2$$1 == "t";
    }
    var v892 = v1162;
    if (!v892) {
      var v1163 = r2$$1 == "a";
      if (v1163) {
        v1163 = r1$$2 == "t";
      }
      v892 = v1163;
    }
    if (v892) {
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
  var v1518 = new Array(this.M.length + 1);
  this.nodes = v1518;
  var i$$18 = 0;
  var v475 = i$$18 < this.nodes.length;
  for (;v475;) {
    var v472 = this.nodes;
    var v1519 = new Array(this.N.length + 1);
    v472[i$$18] = v1519;
    var j$$10 = 0;
    var v474 = j$$10 < this.nodes[i$$18].length;
    for (;v474;) {
      var v473 = this.nodes[i$$18];
      var v1520 = new Node;
      v473[j$$10] = v1520;
      j$$10++;
      v474 = j$$10 < this.nodes[i$$18].length;
    }
    i$$18++;
    v475 = i$$18 < this.nodes.length;
  }
  this.nodes[0][0].value = 0;
  i$$18 = 1;
  var v482 = i$$18 < this.nodes.length;
  for (;v482;) {
    if (this.scoreSet.useBeginGapLeft) {
      this.nodes[i$$18][0].value = this.nodes[i$$18 - 1][0].value - this.scoreSet.beginGap;
    } else {
      this.nodes[i$$18][0].value = this.nodes[i$$18 - 1][0].value - this.scoreSet.gap;
    }
    this.nodes[i$$18][0].tracebackI = i$$18 - 1;
    this.nodes[i$$18][0].tracebackJ = 0;
    i$$18++;
    v482 = i$$18 < this.nodes.length;
  }
  j$$10 = 1;
  var v488 = j$$10 < this.nodes[0].length;
  for (;v488;) {
    if (this.scoreSet.useBeginGapTop) {
      this.nodes[0][j$$10].value = this.nodes[0][j$$10 - 1].value - this.scoreSet.beginGap;
    } else {
      this.nodes[0][j$$10].value = this.nodes[0][j$$10 - 1].value - this.scoreSet.gap;
    }
    this.nodes[0][j$$10].tracebackI = 0;
    this.nodes[0][j$$10].tracebackJ = j$$10 - 1;
    j$$10++;
    v488 = j$$10 < this.nodes[0].length;
  }
  return;
}
function dumpMatrix() {
  var v489 = outputWindow.document;
  JAM.call(v489.write, v489, ["Dynamic programming matrix i=" + this.nodes.length + " and j=" + this.nodes[0].length], JAM.policy.p15);
  var v491 = outputWindow.document;
  JAM.call(v491.write, v491, ["\n"], JAM.policy.p9);
  var i$$19 = 0;
  var v502 = i$$19 < this.nodes.length;
  for (;v502;) {
    var j$$11 = 0;
    var v500 = j$$11 < this.nodes[i$$19].length;
    for (;v500;) {
      var traceI = this.nodes[i$$19][j$$11].tracebackI;
      var traceJ = this.nodes[i$$19][j$$11].tracebackJ;
      if (traceI == undefined) {
        traceI = "u";
      }
      if (traceJ == undefined) {
        traceJ = "u";
      }
      var output = "(" + i$$19 + "," + j$$11 + ")[" + traceI + "," + traceJ + "]=" + this.nodes[i$$19][j$$11].value;
      var v498 = outputWindow.document;
      JAM.call(v498.write, v498, [rightNum(output, "", 20, " ")], JAM.policy.p15);
      j$$11++;
      v500 = j$$11 < this.nodes[i$$19].length;
    }
    var v501 = outputWindow.document;
    JAM.call(v501.write, v501, ["\n"], JAM.policy.p9);
    i$$19++;
    v502 = i$$19 < this.nodes.length;
  }
  var v503 = outputWindow.document;
  JAM.call(v503.write, v503, ["\n"], JAM.policy.p9);
  return;
}
function fillMatrix() {
  var i$$20 = 1;
  var v549 = i$$20 < this.nodes.length;
  for (;v549;) {
    var j$$12 = 1;
    var v548 = j$$12 < this.nodes[0].length;
    for (;v548;) {
      var a$$1;
      var b;
      var c$$1;
      var v935 = i$$20 == this.nodes.length - 1;
      if (v935) {
        v935 = j$$12 == this.nodes[0].length - 1;
      }
      if (v935) {
        if (this.scoreSet.useEndGapRight) {
          a$$1 = this.nodes[i$$20 - 1][j$$12].value - this.scoreSet.endGap;
        } else {
          a$$1 = this.nodes[i$$20 - 1][j$$12].value - this.scoreSet.gap;
        }
        if (this.scoreSet.useEndGapBottom) {
          b = this.nodes[i$$20][j$$12 - 1].value - this.scoreSet.endGap;
        } else {
          b = this.nodes[i$$20][j$$12 - 1].value - this.scoreSet.gap;
        }
      } else {
        if (i$$20 == this.nodes.length - 1) {
          a$$1 = this.nodes[i$$20 - 1][j$$12].value - this.scoreSet.gap;
          if (this.scoreSet.useEndGapBottom) {
            b = this.nodes[i$$20][j$$12 - 1].value - this.scoreSet.endGap;
          } else {
            b = this.nodes[i$$20][j$$12 - 1].value - this.scoreSet.gap;
          }
        } else {
          if (j$$12 == this.nodes[0].length - 1) {
            if (this.scoreSet.useEndGapRight) {
              a$$1 = this.nodes[i$$20 - 1][j$$12].value - this.scoreSet.endGap;
            } else {
              a$$1 = this.nodes[i$$20 - 1][j$$12].value - this.scoreSet.gap;
            }
            b = this.nodes[i$$20][j$$12 - 1].value - this.scoreSet.gap;
          } else {
            a$$1 = this.nodes[i$$20 - 1][j$$12].value - this.scoreSet.gap;
            b = this.nodes[i$$20][j$$12 - 1].value - this.scoreSet.gap;
          }
        }
      }
      var v535 = this.nodes[i$$20 - 1][j$$12 - 1].value;
      var v967 = this.scoreSet;
      c$$1 = v535 + JAM.call(v967.getScore, v967, [this.M[i$$20 - 1], this.N[j$$12 - 1]], JAM.policy.p21);
      var v970 = a$$1 >= b;
      if (v970) {
        v970 = a$$1 >= c$$1;
      }
      if (v970) {
        this.nodes[i$$20][j$$12].value = a$$1;
        this.nodes[i$$20][j$$12].tracebackI = i$$20 - 1;
        this.nodes[i$$20][j$$12].tracebackJ = j$$12;
      } else {
        var v974 = b >= c$$1;
        if (v974) {
          v974 = b >= a$$1;
        }
        if (v974) {
          this.nodes[i$$20][j$$12].value = b;
          this.nodes[i$$20][j$$12].tracebackI = i$$20;
          this.nodes[i$$20][j$$12].tracebackJ = j$$12 - 1;
        } else {
          this.nodes[i$$20][j$$12].value = c$$1;
          this.nodes[i$$20][j$$12].tracebackI = i$$20 - 1;
          this.nodes[i$$20][j$$12].tracebackJ = j$$12 - 1;
        }
      }
      j$$12++;
      v548 = j$$12 < this.nodes[0].length;
    }
    i$$20++;
    v549 = i$$20 < this.nodes.length;
  }
  this.score = this.nodes[this.nodes.length - 1][this.nodes[0].length - 1].value;
  return;
}
function alignQuad() {
  var v1521 = new Array;
  this.alignedM = v1521;
  var v1522 = new Array;
  this.alignedN = v1522;
  var currentI = this.nodes.length - 1;
  var currentJ = this.nodes[0].length - 1;
  var currentNode = this.nodes[this.nodes.length - 1][this.nodes[0].length - 1];
  var v990 = currentNode.tracebackI != undefined;
  if (v990) {
    v990 = currentNode.tracebackJ != undefined;
  }
  var v569 = v990;
  for (;v569;) {
    var v991 = currentNode.tracebackI == currentI - 1;
    if (v991) {
      v991 = currentNode.tracebackJ == currentJ - 1;
    }
    if (v991) {
      var v555 = this.alignedM;
      JAM.call(v555.push, v555, [this.M.pop()], JAM.policy.p15);
      var v557 = this.alignedN;
      JAM.call(v557.push, v557, [this.N.pop()], JAM.policy.p15);
    } else {
      if (currentNode.tracebackJ == currentJ - 1) {
        var v559 = this.alignedM;
        JAM.call(v559.push, v559, ["-"], JAM.policy.p9);
        var v560 = this.alignedN;
        JAM.call(v560.push, v560, [this.N.pop()], JAM.policy.p15);
      } else {
        var v562 = this.alignedM;
        JAM.call(v562.push, v562, [this.M.pop()], JAM.policy.p15);
        var v564 = this.alignedN;
        JAM.call(v564.push, v564, ["-"], JAM.policy.p9);
      }
    }
    currentI = currentNode.tracebackI;
    currentJ = currentNode.tracebackJ;
    currentNode = this.nodes[currentNode.tracebackI][currentNode.tracebackJ];
    var v1000 = currentNode.tracebackI != undefined;
    if (v1000) {
      v1000 = currentNode.tracebackJ != undefined;
    }
    v569 = v1000;
  }
  var v1523 = this.alignedM.reverse();
  this.alignedM = v1523;
  var v1524 = this.alignedN.reverse();
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
ScoreSet.prototype.getScore = getScore;
ScoreSet.prototype.setScoreSetParam = setScoreSetParam;
new ScoringMatrix;
ScoringMatrix.prototype.scoringMatrix_getScore = scoringMatrix_getScore;
var v577 = Complementarity;
var v1525 = new ScoringMatrix;
v577.prototype = v1525;
Complementarity.prototype.setMismatch = setMismatch;
Complementarity.prototype.setMatch = setMatch;
new AlignPairQuad;
AlignPairQuad.prototype.initializeMatrix = initializeMatrix;
AlignPairQuad.prototype.fillMatrix = fillMatrix;
AlignPairQuad.prototype.align = alignQuad;
AlignPairQuad.prototype.getAlignedM = getAlignedM;
AlignPairQuad.prototype.getAlignedN = getAlignedN;
AlignPairQuad.prototype.dumpMatrix = dumpMatrix;
JAM.set(document, "onload", v2);
JAM.set(JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p9), "onclick", v3);
JAM.set(JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p9), "onclick", v4)

JAM.stopProfile('load');
