
JAM.startProfile('load');
function v4() {
  document.forms[0].elements[0].value = " ";
  document.forms[0].elements[4].value = " ";
  return;
}
function v3() {
  try {
    multiRevTrans(document);
  } catch (e$$8) {
    alert("The following error was encountered: " + e$$8);
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
    var v1022 = arrayOfTitles[i$$1];
    var v772 = JAM.call(v1022.search, v1022, [/\S/], JAM.policy.p15) == -1;
    if (!v772) {
      var v1023 = arrayOfSequences[i$$1];
      v772 = JAM.call(v1023.search, v1023, [/\S/], JAM.policy.p15) == -1;
    }
    var v439 = v772;
    if (!v439) {
      v439 = arrayOfSequences[i$$1].length != lengthOfAlign;
    }
    if (v439) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    v12 = i$$1 < arrayOfTitles.length;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v1024 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p15) == -1;
  if (!v1024) {
    v1024 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p15) == -1;
  }
  var v932 = v1024;
  if (!v932) {
    v932 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p15) == -1;
  }
  var v775 = v932;
  if (!v775) {
    v775 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p15) == -1;
  }
  var v441 = v775;
  if (!v441) {
    v441 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p15) == -1;
  }
  if (v441) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v778 = formElement.value;
  if (JAM.call(v778.search, v778, [/\S/], JAM.policy.p15) == -1) {
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
    var v779 = arrayOfPatterns[z$$2];
    if (JAM.call(v779.search, v779, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p15) == -1) {
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
    var v781 = arrayOfPatterns[j];
    var v20 = JAM.call(v781.match, v781, [/\/.+\//], JAM.policy.p15) + "gi";
    if (JAM.isEval(eval)) {
      var v1247 = eval("introspect(JAM.policy.pFull) { " + v20 + " }")
    } else {
      var v1247 = JAM.call(eval, null, [v20])
    }
    geneticCodeMatchExp[j] = v1247;
    var v449 = arrayOfPatterns[j];
    var v1248 = JAM.call(v449.match, v449, [/=[a-zA-Z\*]/], JAM.policy.p15).toString();
    geneticCodeMatchResult[j] = v1248;
    var v22 = geneticCodeMatchResult[j];
    var v1249 = JAM.call(v22.replace, v22, [/=/g, ""], JAM.policy.p16);
    geneticCodeMatchResult[j] = v1249;
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
      if (JAM.call(codon.search, codon, [geneticCodeMatchExp[j]], JAM.policy.p17) != -1) {
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
    var v785 = arrayOfPatterns$$1[z$$3];
    if (JAM.call(v785.search, v785, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p15) != -1) {
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
      var v787 = arrayOfPatterns$$1[j$$1];
      if (JAM.call(v787.search, v787, [re], JAM.policy.p17) != -1) {
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
    var v788 = arrayOfPatterns$$2[z$$4];
    if (JAM.call(v788.search, v788, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p15) == -1) {
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
  var v935 = getSequenceFromFasta(text$$7);
  if (JAM.call(v935.replace, v935, [/[^A-Za-z]/g, ""], JAM.policy.p16).length > maxInput) {
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
    var v791 = alignArray[i$$4];
    if (JAM.call(v791.search, v791, [/[^\s]+\s/], JAM.policy.p15) == -1) {
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
  if (JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p15) != -1) {
    var v54 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p17);
    for (;v54;) {
      JAM.call(arrayOfFasta.push, arrayOfFasta, [matchArray[0]], JAM.policy.p17);
      v54 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p17);
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var stringToReturn = "&gt;results for " + sequence$$2.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p15) != -1) {
    stringToReturn = stringToReturn + '"' + fastaSequenceTitle + '"';
  }
  stringToReturn = stringToReturn + ' starting "' + JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p13) + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var stringToReturn$$1 = "Search results for " + sequenceOne.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p15) != -1) {
    stringToReturn$$1 = stringToReturn$$1 + '"' + fastaSequenceTitleOne + '"';
  }
  stringToReturn$$1 = stringToReturn$$1 + ' starting "' + JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p13) + '"\n';
  stringToReturn$$1 = stringToReturn$$1 + "and " + sequenceTwo.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p15) != -1) {
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
    var v792 = arrayOfPatterns$$3[j$$2];
    var v70 = JAM.call(v792.match, v792, [/\/.+\//], JAM.policy.p15) + "gi";
    if (JAM.isEval(eval)) {
      var v1250 = eval("introspect(JAM.policy.pFull) { " + v70 + " }")
    } else {
      var v1250 = JAM.call(eval, null, [v70])
    }
    geneticCodeMatchExp$$1[j$$2] = v1250;
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
    var v499 = arrayOfPatterns$$4[j$$3];
    var v1251 = JAM.call(v499.match, v499, [/=[a-zA-Z\*]/], JAM.policy.p15).toString();
    geneticCodeMatchResult$$1[j$$3] = v1251;
    var v74 = geneticCodeMatchResult$$1[j$$3];
    var v1252 = JAM.call(v74.replace, v74, [/=/g, ""], JAM.policy.p16);
    geneticCodeMatchResult$$1[j$$3] = v1252;
    j$$3++;
    v75 = j$$3 < arrayOfPatterns$$4.length;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var stringToReturn$$2 = "Results for " + sequence$$3.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p15) != -1) {
    stringToReturn$$2 = stringToReturn$$2 + '"' + fastaSequenceTitle$$1 + '"';
  }
  stringToReturn$$2 = stringToReturn$$2 + ' starting "' + JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p13) + '"';
  return'<div class="info">' + stringToReturn$$2 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var stringToReturn$$3 = "Results for " + topology + " " + sequence$$4.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p15) != -1) {
    stringToReturn$$3 = stringToReturn$$3 + '"' + fastaSequenceTitle$$2 + '"';
  }
  stringToReturn$$3 = stringToReturn$$3 + ' starting "' + JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p13) + '"';
  return'<div class="info">' + stringToReturn$$3 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var stringToReturn$$4 = "Alignment results for " + sequenceOne$$1.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p15) != -1) {
    stringToReturn$$4 = stringToReturn$$4 + '"' + fastaSequenceTitleOne$$1 + '"';
  }
  stringToReturn$$4 = stringToReturn$$4 + ' starting "' + JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p13) + '"\n';
  stringToReturn$$4 = stringToReturn$$4 + "and " + sequenceTwo$$1.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p15) != -1) {
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
    tempNum = JAM.call(Math.floor, Math, [Math.random() * components.length], JAM.policy.p15);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p17);
    j$$4++;
    v96 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p9);
}
function getSequenceFromFasta(sequenceRecord) {
  if (JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p15) != -1) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p16);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  if (JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p15) != -1) {
    fastaTitle = JAM.call(sequenceRecord$$1.match, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p16).toString();
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\>|[\f\n\r]/g, ""], JAM.policy.p16);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\s{2,}/g, " "], JAM.policy.p16);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/[\<\>]/gi, ""], JAM.policy.p16);
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  var v1173 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p15) != -1;
  if (!v1173) {
    v1173 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p15) != -1;
  }
  var v1157 = v1173;
  if (!v1157) {
    v1157 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p15) != -1;
  }
  var v1140 = v1157;
  if (!v1140) {
    v1140 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p15) != -1;
  }
  var v1119 = v1140;
  if (!v1119) {
    v1119 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p15) != -1;
  }
  var v1102 = v1119;
  if (!v1102) {
    v1102 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p15) != -1;
  }
  var v1081 = v1102;
  if (!v1081) {
    v1081 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p15) != -1;
  }
  var v1027 = v1081;
  if (!v1027) {
    v1027 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p15) != -1;
  }
  var v936 = v1027;
  if (!v936) {
    v936 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p15) != -1;
  }
  var v794 = v936;
  if (!v794) {
    v794 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p15) != -1;
  }
  var v527 = v794;
  if (!v527) {
    v527 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p15) != -1;
  }
  if (v527) {
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
  JAM.call(v105.write, v105, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n'], JAM.policy.p17);
  if (isColor) {
    var v107 = outputWindow.document;
    JAM.call(v107.write, v107, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; background-color: #66FF00}\n" + 
    "span.two, td.two {color: #000000; background-color: #FFFF66}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n" + "td.many {color: #000000}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + 
    "</style>\n"], JAM.policy.p17);
  } else {
    var v109 = outputWindow.document;
    JAM.call(v109.write, v109, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n" + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "td.many {color: #000000; background-color: #FFFFFF}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"], JAM.policy.p17);
  }
  var v111 = outputWindow.document;
  JAM.call(v111.write, v111, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$6 + " results</div>\n"], JAM.policy.p17);
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
  JAM.call(v113.write, v113, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n'], JAM.policy.p17);
  if (isBackground) {
    var v115 = outputWindow.document;
    JAM.call(v115.write, v115, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #FFFFFF; background-color: #000000}\n" + "span.sim {color: #FFFFFF; background-color: #666666}\n" + 
    "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n" + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n" + "span.c, span.m {color: #000000; background-color: #FFFF00}\n" + "span.s, span.t {color: #000000; background-color: #66FF00}\n" + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n" + "span.d, span.e {color: #000000; background-color: #0066FF}\n" + "span.n, span.q {color: #000000; background-color: #996633}\n" + "span.p {color: #000000; background-color: #FF99FF}\n" + 
    "</style>\n"], JAM.policy.p17);
  } else {
    var v117 = outputWindow.document;
    JAM.call(v117.write, v117, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n" + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n" + 
    "span.diff {color: #999999; background-color: #FFFFFF}\n" + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n" + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n" + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n" + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n" + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n" + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n" + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n" + 
    "span.p {color: #00FFCC; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"], JAM.policy.p17);
  }
  var v119 = outputWindow.document;
  JAM.call(v119.write, v119, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$8 + " results</div>\n"], JAM.policy.p17);
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
  if (JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p15) != -1) {
    tempDnaArray = JAM.call(dnaSequence$$1.match, dnaSequence$$1, [/./g], JAM.policy.p15);
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
  if (JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p15) == -1) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v947 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p15) == -1;
  if (!v947) {
    v947 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p15) == -1;
  }
  var v805 = v947;
  if (!v805) {
    v805 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p15) == -1;
  }
  var v542 = v805;
  if (!v542) {
    v542 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p15) == -1;
  }
  if (v542) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  if (JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p15) == -1) {
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
  if (JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p15) != -1) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  if (JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p15) != -1) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v950 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p15) == -1;
  if (!v950) {
    v950 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p15) == -1;
  }
  var v808 = v950;
  if (!v808) {
    v808 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p15) == -1;
  }
  var v547 = v808;
  if (!v547) {
    v547 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p15) == -1;
  }
  if (v547) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v953 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p15) == -1;
  if (!v953) {
    v953 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p15) == -1;
  }
  var v811 = v953;
  if (!v811) {
    v811 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p15) == -1;
  }
  var v548 = v811;
  if (!v548) {
    v548 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p15) == -1;
  }
  if (v548) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  if (JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p15) == -1) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v956 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p15) == -1;
  if (!v956) {
    v956 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p15) == -1;
  }
  var v814 = v956;
  if (!v814) {
    v814 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p15) == -1;
  }
  var v550 = v814;
  if (!v550) {
    v550 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p15) == -1;
  }
  if (v550) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  if (JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p15) == -1) {
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
        lineOfText = lineOfText + JAM.call(text$$10.charAt, text$$10, [k + i$$5], JAM.policy.p17);
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
    JAM.call(v147.write, v147, [lineOfText + "\n"], JAM.policy.p17);
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
    var v555 = adjustment < 0;
    if (v555) {
      v555 = adjusted >= 0;
    }
    if (v555) {
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
        lineOfText$$1 = lineOfText$$1 + JAM.call(text$$12.charAt, text$$12, [k$$1 + i$$6], JAM.policy.p17);
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
      JAM.call(v160.write, v160, [rightNum(JAM.call(adjustNumbering, null, [lineNum, numberingAdjustment], JAM.policy.p19), "", 8, tabIn$$3) + lineOfText$$1 + "\n"], JAM.policy.p17);
      if (strands$$1 == "two") {
        var v162 = outputWindow.document;
        JAM.call(v162.write, v162, [rightNum(JAM.call(adjustNumbering, null, [lineNum, numberingAdjustment], JAM.policy.p19), "", 8, tabIn$$3) + complement(lineOfText$$1) + "\n"], JAM.policy.p17);
        var v164 = outputWindow.document;
        JAM.call(v164.write, v164, ["\n"], JAM.policy.p9);
      }
    } else {
      if (numberPosition$$1 == "right") {
        var v166 = outputWindow.document;
        JAM.call(v166.write, v166, [lineOfText$$1 + JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p19) + "\n"], JAM.policy.p17);
        if (strands$$1 == "two") {
          var v168 = outputWindow.document;
          JAM.call(v168.write, v168, [complement(lineOfText$$1) + JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p19) + "\n"], JAM.policy.p17);
          var v170 = outputWindow.document;
          JAM.call(v170.write, v170, ["\n"], JAM.policy.p9);
        }
      } else {
        if (numberPosition$$1 == "above") {
          var v172 = outputWindow.document;
          JAM.call(v172.write, v172, [aboveNum + "\n"], JAM.policy.p17);
          var v174 = outputWindow.document;
          JAM.call(v174.write, v174, [lineOfText$$1 + "\n"], JAM.policy.p17);
          if (strands$$1 == "two") {
            var v176 = outputWindow.document;
            JAM.call(v176.write, v176, [complement(lineOfText$$1) + "\n"], JAM.policy.p17);
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
        lineOfText$$2 = lineOfText$$2 + JAM.call(text$$13.charAt, text$$13, [k$$2 + i$$7], JAM.policy.p17);
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
      JAM.call(v191.write, v191, [rightNum(lineNum$$1, "", 8, tabIn$$4) + lineOfText$$2 + "\n"], JAM.policy.p17);
    } else {
      if (numberPosition$$2 == "right") {
        var v193 = outputWindow.document;
        JAM.call(v193.write, v193, [lineOfText$$2 + i$$7 + "\n"], JAM.policy.p17);
      } else {
        if (numberPosition$$2 == "above") {
          var v195 = outputWindow.document;
          JAM.call(v195.write, v195, [aboveNum$$1 + "\n"], JAM.policy.p17);
          var v197 = outputWindow.document;
          JAM.call(v197.write, v197, [lineOfText$$2 + "\n"], JAM.policy.p17);
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
  var v825 = sequence$$13.length <= firstIndexToMutate;
  if (!v825) {
    v825 = lastIndexToMutate < 0;
  }
  var v572 = v825;
  if (!v572) {
    v572 = lastIndexToMutate <= firstIndexToMutate;
  }
  if (v572) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v211 = i$$8 < numMut;
  for (;v211;) {
    maxNum = sequence$$13.length;
    randNum = JAM.call(Math.floor, Math, [Math.random() * maxNum], JAM.policy.p15);
    var v574 = randNum < firstIndexToMutate;
    if (!v574) {
      v574 = randNum > lastIndexToMutate;
    }
    if (v574) {
      numMut++;
      i$$8++;
      v211 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p15);
    needNewChar = true;
    for (;needNewChar;) {
      componentsIndex = JAM.call(Math.round, Math, [Math.random() * components$$1.length], JAM.policy.p15);
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
  JAM.call(v212.write, v212, [addReturns(sequence$$13)], JAM.policy.p17);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v218 = j$$9 < lengthOut$$1;
  for (;v218;) {
    tempNum$$1 = JAM.call(Math.floor, Math, [Math.random() * components$$2.length], JAM.policy.p15);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    if (sequence$$14.length == 60) {
      var v215 = outputWindow.document;
      JAM.call(v215.write, v215, [sequence$$14 + "\n"], JAM.policy.p17);
      sequence$$14 = "";
    }
    j$$9++;
    v218 = j$$9 < lengthOut$$1;
  }
  var v219 = outputWindow.document;
  JAM.call(v219.write, v219, [sequence$$14 + "\n"], JAM.policy.p17);
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
  JAM.call(v226.write, v226, ['<tr><td class="title" width="200px">' + "Site:" + '</td><td class="title">' + "Positions:" + "</td></tr>\n"], JAM.policy.p17);
  var i$$9 = 0;
  var v243 = i$$9 < arrayOfItems.length;
  for (;v243;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v589 = arrayOfItems[i$$9];
    matchExp = JAM.call(v589.match, v589, [/\/.+\//], JAM.policy.p15) + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    var v965 = arrayOfItems[i$$9];
    var v590 = JAM.call(v965.match, v965, [/\)\D*\d+/], JAM.policy.p15).toString();
    cutDistance = parseFloat(JAM.call(v590.replace, v590, [/\)\D*/, ""], JAM.policy.p16));
    var v235 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p17);
    for (;v235;) {
      matchPosition = matchExp.lastIndex - cutDistance;
      var v591 = matchPosition >= lowerLimit;
      if (v591) {
        v591 = matchPosition < upperLimit;
      }
      if (v591) {
        timesFound++;
        tempString$$1 = tempString$$1 + ", " + (matchPosition - shiftValue + 1);
      }
      matchExp.lastIndex = matchExp.lastIndex - RegExp.lastMatch.length + 1;
      v235 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p17);
    }
    if (JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p15) != -1) {
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
    var v1109 = '<tr><td class="' + backGroundClass + '">';
    var v1164 = arrayOfItems[i$$9];
    var v1127 = JAM.call(v1164.match, v1164, [/\([^\(]+\)/], JAM.policy.p15).toString();
    JAM.call(v241.write, v241, [v1109 + JAM.call(v1127.replace, v1127, [/\(|\)/g, ""], JAM.policy.p16) + '</td><td class="' + backGroundClass + '">' + tempString$$1 + "</td></tr>\n"], JAM.policy.p17);
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
  JAM.call(v246.write, v246, ['<tr><td class="title">' + "Pattern:" + '</td><td class="title">' + "Times found:" + '</td><td class="title">' + "Percentage:" + "</td></tr>\n"], JAM.policy.p17);
  var i$$10 = 0;
  var v256 = i$$10 < arrayOfItems$$1.length;
  for (;v256;) {
    var tempNumber = 0;
    var v600 = arrayOfItems$$1[i$$10];
    var matchExp$$1 = JAM.call(v600.match, v600, [/\/[^\/]+\//], JAM.policy.p15) + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    if (JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p17) != -1) {
      tempNumber = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p17).length;
    }
    var percentage = 0;
    var v835 = originalLength + 1;
    var v1048 = arrayOfItems$$1[i$$10];
    if (v835 - parseFloat(JAM.call(v1048.match, v1048, [/\d+/], JAM.policy.p15)) > 0) {
      var v251 = 100 * tempNumber;
      var v603 = originalLength + 1;
      var v969 = arrayOfItems$$1[i$$10];
      percentage = v251 / (v603 - parseFloat(JAM.call(v969.match, v969, [/\d+/], JAM.policy.p15)));
    }
    var v254 = outputWindow.document;
    var v1165 = arrayOfItems$$1[i$$10];
    var v1128 = JAM.call(v1165.match, v1165, [/\([^\(]+\)\b/], JAM.policy.p15).toString();
    JAM.call(v254.write, v254, ["<tr><td>" + JAM.call(v1128.replace, v1128, [/\(|\)/g, ""], JAM.policy.p16) + "</td><td>" + tempNumber + "</td><td>" + JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p11) + "</td></tr>\n"], JAM.policy.p17);
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
    randNum$$1 = JAM.call(Math.floor, Math, [Math.random() * maxNum$$1], JAM.policy.p15);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p15);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p13);
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [randNum$$1 + 1, sequence$$17.length], JAM.policy.p16);
    sequence$$17 = tempString1 + tempString2;
    if (tempSeq.length == 60) {
      var v261 = outputWindow.document;
      JAM.call(v261.write, v261, [tempSeq + "\n"], JAM.policy.p17);
      tempSeq = "";
    }
    v264 = sequence$$17.length > 0;
  }
  var v265 = outputWindow.document;
  JAM.call(v265.write, v265, [tempSeq + "\n"], JAM.policy.p17);
  return true;
}
function multiRevTrans(theDocument) {
  JAM.startProfile('compute');

  var newProtein = "";
  var maxInput$$3 = 2E4;
  var codonTable$$1;
  var alignArray$$1 = new Array;
  var titleArray = new Array;
  var sequenceArray$$1 = new Array;
  if (testScript() == false) {
    return false;
  }
  var v840 = checkFormElement(theDocument.forms[0].elements[0]) == false;
  if (!v840) {
    v840 = JAM.call(checkTextLength, null, [theDocument.forms[0].elements[0].value, maxInput$$3], JAM.policy.p19) == false;
  }
  var v612 = v840;
  if (!v612) {
    v612 = checkCodonTable(theDocument.forms[0].elements[4].value) == false;
  }
  if (v612) {
    return false;
  }
  theAlignment = "X" + theDocument.forms[0].elements[0].value;
  alignArray$$1 = JAM.call(theAlignment.split, theAlignment, [/[>%#]/], JAM.policy.p15);
  if (earlyCheckAlign(alignArray$$1) == false) {
    return false;
  }
  var i$$11 = 1;
  var v280 = i$$11 < alignArray$$1.length;
  for (;v280;) {
    var v271 = i$$11 - 1;
    var v616 = alignArray$$1[i$$11];
    var v1253 = JAM.call(v616.match, v616, [/[^\f\n\r]+[\f\n\r]/], JAM.policy.p15);
    titleArray[v271] = v1253;
    var v272 = i$$11 - 1;
    var v617 = filterFastaTitle(titleArray[i$$11 - 1].toString());
    var v1254 = JAM.call(v617.replace, v617, [/[\f\n\r]/g, ""], JAM.policy.p16);
    titleArray[v272] = v1254;
    var v273 = i$$11 - 1;
    var v618 = titleArray[i$$11 - 1];
    var v1255 = JAM.call(v618.substring, v618, [0, 20], JAM.policy.p13);
    titleArray[v273] = v1255;
    if (i$$11 == 1) {
      longestTitle = titleArray[i$$11 - 1].length;
    } else {
      if (titleArray[i$$11 - 1].length > longestTitle) {
        longestTitle = titleArray[i$$11 - 1].length;
      }
    }
    var v278 = i$$11 - 1;
    var v622 = alignArray$$1[i$$11];
    var v1256 = JAM.call(v622.replace, v622, [/[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p16);
    sequenceArray$$1[v278] = v1256;
    var v279 = i$$11 - 1;
    var v1257 = filterAlignSeq(sequenceArray$$1[i$$11 - 1]);
    sequenceArray$$1[v279] = v1257;
    i$$11++;
    v280 = i$$11 < alignArray$$1.length;
  }
  codonTable$$1 = makeCodonTable(theDocument.forms[0].elements[4].value);
  if (codonTable$$1 == false) {
    return false;
  }
  openWindow("Multi Rev Trans");
  i$$11 = 0;
  var v287 = i$$11 < titleArray.length;
  for (;v287;) {
    var v283 = outputWindow.document;
    JAM.call(v283.write, v283, [JAM.call(getInfoFromTitleAndSequence, null, [titleArray[i$$11], sequenceArray$$1[i$$11]], JAM.policy.p19)], JAM.policy.p17);
    if (i$$11 < titleArray.length - 1) {
      var v285 = outputWindow.document;
      JAM.call(v285.write, v285, ['<div class="info">Combined with:</div>\n'], JAM.policy.p9);
    }
    i$$11++;
    v287 = i$$11 < titleArray.length;
  }
  openPre();
  JAM.call(writeConsensusSeq, null, [sequenceArray$$1, codonTable$$1], JAM.policy.p19);
  var v288 = outputWindow.document;
  JAM.call(v288.write, v288, ["\n"], JAM.policy.p9);
  JAM.call(writeMultiRevTrans, null, [sequenceArray$$1, codonTable$$1], JAM.policy.p19);
  closePre();
  closeWindow();

  JAM.stopProfile('compute');
  return true;
}
function writeConsensusSeq(sequenceArray$$2, codonTable$$2) {
  var consensusSeq = new Array;
  var aminoAcid;
  var firstG;
  var firstA;
  var firstT;
  var firstC;
  var secondG;
  var secondA;
  var secondT;
  var secondC;
  var thirdG;
  var thirdA;
  var thirdT;
  var thirdC;
  var i$$12 = 0;
  var v308 = i$$12 < sequenceArray$$2[0].length;
  for (;v308;) {
    firstG = 0;
    firstA = 0;
    firstT = 0;
    firstC = 0;
    secondG = 0;
    secondA = 0;
    secondT = 0;
    secondC = 0;
    thirdG = 0;
    thirdA = 0;
    thirdT = 0;
    thirdC = 0;
    var j$$10 = 0;
    var v304 = j$$10 < sequenceArray$$2.length;
    for (;v304;) {
      var v979 = sequenceArray$$2[j$$10];
      var v633 = JAM.call(v979.charAt, v979, [i$$12], JAM.policy.p17) == "-";
      if (!v633) {
        var v980 = sequenceArray$$2[j$$10];
        v633 = JAM.call(v980.charAt, v980, [i$$12], JAM.policy.p17) == ".";
      }
      if (v633) {
        firstG = firstG + .25;
        firstA = firstA + .25;
        firstT = firstT + .25;
        firstC = firstC + .25;
        secondG = secondG + .25;
        secondA = secondA + .25;
        secondT = secondT + .25;
        secondC = secondC + .25;
        thirdG = thirdG + .25;
        thirdA = thirdA + .25;
        thirdT = thirdT + .25;
        thirdC = thirdC + .25;
      } else {
        try {
          var v981 = sequenceArray$$2[j$$10];
          aminoAcid = codonTable$$2[JAM.call(v981.charAt, v981, [i$$12], JAM.policy.p17).toString().toLowerCase()];
        } catch (e$$5) {
          var v855 = sequenceArray$$2[j$$10];
          alert("A codon table entry wasn't found for " + JAM.call(v855.charAt, v855, [i$$12], JAM.policy.p17));
          return false;
        }
        firstG = firstG + aminoAcid.baseFreqPosOne[0];
        firstA = firstA + aminoAcid.baseFreqPosOne[1];
        firstT = firstT + aminoAcid.baseFreqPosOne[2];
        firstC = firstC + aminoAcid.baseFreqPosOne[3];
        secondG = secondG + aminoAcid.baseFreqPosTwo[0];
        secondA = secondA + aminoAcid.baseFreqPosTwo[1];
        secondT = secondT + aminoAcid.baseFreqPosTwo[2];
        secondC = secondC + aminoAcid.baseFreqPosTwo[3];
        thirdG = thirdG + aminoAcid.baseFreqPosThree[0];
        thirdA = thirdA + aminoAcid.baseFreqPosThree[1];
        thirdT = thirdT + aminoAcid.baseFreqPosThree[2];
        thirdC = thirdC + aminoAcid.baseFreqPosThree[3];
      }
      j$$10++;
      v304 = j$$10 < sequenceArray$$2.length;
    }
    JAM.call(consensusSeq.push, consensusSeq, [_getConsensusBase([firstG, firstA, firstT, firstC])], JAM.policy.p17);
    JAM.call(consensusSeq.push, consensusSeq, [_getConsensusBase([secondG, secondA, secondT, secondC])], JAM.policy.p17);
    JAM.call(consensusSeq.push, consensusSeq, [_getConsensusBase([thirdG, thirdA, thirdT, thirdC])], JAM.policy.p17);
    i$$12++;
    v308 = i$$12 < sequenceArray$$2[0].length;
  }
  var v309 = outputWindow.document;
  JAM.call(v309.write, v309, ["&gt;" + "reverse translation of alignment to a " + consensusSeq.length + " base sequence of consensus codons.\n"], JAM.policy.p17);
  var v311 = outputWindow.document;
  JAM.call(v311.write, v311, [addReturns(JAM.call(consensusSeq.join, consensusSeq, [""], JAM.policy.p9))], JAM.policy.p17);
  var v313 = outputWindow.document;
  JAM.call(v313.write, v313, ["\n"], JAM.policy.p9);
  return true;
}
function writeMultiRevTrans(sequenceArray$$3, codonTable$$3) {
  var markG = "gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg";
  var markA = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
  var markT = "TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT";
  var markC = "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC";
  var markLength = markG.length;
  var aminoAcid$$1;
  var columnSeq;
  var firstG$$1;
  var firstA$$1;
  var firstT$$1;
  var firstC$$1;
  var secondG$$1;
  var secondA$$1;
  var secondT$$1;
  var secondC$$1;
  var thirdG$$1;
  var thirdA$$1;
  var thirdT$$1;
  var thirdC$$1;
  var i$$13 = 0;
  var v356 = i$$13 < sequenceArray$$3[0].length;
  for (;v356;) {
    columnSeq = "";
    firstG$$1 = 0;
    firstA$$1 = 0;
    firstT$$1 = 0;
    firstC$$1 = 0;
    secondG$$1 = 0;
    secondA$$1 = 0;
    secondT$$1 = 0;
    secondC$$1 = 0;
    thirdG$$1 = 0;
    thirdA$$1 = 0;
    thirdT$$1 = 0;
    thirdC$$1 = 0;
    var j$$11 = 0;
    var v330 = j$$11 < sequenceArray$$3.length;
    for (;v330;) {
      var v657 = sequenceArray$$3[j$$11];
      columnSeq = columnSeq + JAM.call(v657.charAt, v657, [i$$13], JAM.policy.p17);
      var v982 = sequenceArray$$3[j$$11];
      var v658 = JAM.call(v982.charAt, v982, [i$$13], JAM.policy.p17) == "-";
      if (!v658) {
        var v983 = sequenceArray$$3[j$$11];
        v658 = JAM.call(v983.charAt, v983, [i$$13], JAM.policy.p17) == ".";
      }
      if (v658) {
        firstG$$1 = firstG$$1 + .25;
        firstA$$1 = firstA$$1 + .25;
        firstT$$1 = firstT$$1 + .25;
        firstC$$1 = firstC$$1 + .25;
        secondG$$1 = secondG$$1 + .25;
        secondA$$1 = secondA$$1 + .25;
        secondT$$1 = secondT$$1 + .25;
        secondC$$1 = secondC$$1 + .25;
        thirdG$$1 = thirdG$$1 + .25;
        thirdA$$1 = thirdA$$1 + .25;
        thirdT$$1 = thirdT$$1 + .25;
        thirdC$$1 = thirdC$$1 + .25;
      } else {
        try {
          var v984 = sequenceArray$$3[j$$11];
          aminoAcid$$1 = codonTable$$3[JAM.call(v984.charAt, v984, [i$$13], JAM.policy.p17).toString().toLowerCase()];
        } catch (e$$6) {
          var v864 = sequenceArray$$3[j$$11];
          alert("A codon table entry wasn't found for " + JAM.call(v864.charAt, v864, [i$$13], JAM.policy.p17));
          return false;
        }
        firstG$$1 = firstG$$1 + aminoAcid$$1.baseFreqPosOne[0];
        firstA$$1 = firstA$$1 + aminoAcid$$1.baseFreqPosOne[1];
        firstT$$1 = firstT$$1 + aminoAcid$$1.baseFreqPosOne[2];
        firstC$$1 = firstC$$1 + aminoAcid$$1.baseFreqPosOne[3];
        secondG$$1 = secondG$$1 + aminoAcid$$1.baseFreqPosTwo[0];
        secondA$$1 = secondA$$1 + aminoAcid$$1.baseFreqPosTwo[1];
        secondT$$1 = secondT$$1 + aminoAcid$$1.baseFreqPosTwo[2];
        secondC$$1 = secondC$$1 + aminoAcid$$1.baseFreqPosTwo[3];
        thirdG$$1 = thirdG$$1 + aminoAcid$$1.baseFreqPosThree[0];
        thirdA$$1 = thirdA$$1 + aminoAcid$$1.baseFreqPosThree[1];
        thirdT$$1 = thirdT$$1 + aminoAcid$$1.baseFreqPosThree[2];
        thirdC$$1 = thirdC$$1 + aminoAcid$$1.baseFreqPosThree[3];
      }
      j$$11++;
      v330 = j$$11 < sequenceArray$$3.length;
    }
    firstG$$1 = JAM.call(Math.round, Math, [markLength * firstG$$1 / sequenceArray$$3.length], JAM.policy.p15);
    firstA$$1 = JAM.call(Math.round, Math, [markLength * firstA$$1 / sequenceArray$$3.length], JAM.policy.p15);
    firstT$$1 = JAM.call(Math.round, Math, [markLength * firstT$$1 / sequenceArray$$3.length], JAM.policy.p15);
    firstC$$1 = JAM.call(Math.round, Math, [markLength * firstC$$1 / sequenceArray$$3.length], JAM.policy.p15);
    secondG$$1 = JAM.call(Math.round, Math, [markLength * secondG$$1 / sequenceArray$$3.length], JAM.policy.p15);
    secondA$$1 = JAM.call(Math.round, Math, [markLength * secondA$$1 / sequenceArray$$3.length], JAM.policy.p15);
    secondT$$1 = JAM.call(Math.round, Math, [markLength * secondT$$1 / sequenceArray$$3.length], JAM.policy.p15);
    secondC$$1 = JAM.call(Math.round, Math, [markLength * secondC$$1 / sequenceArray$$3.length], JAM.policy.p15);
    thirdG$$1 = JAM.call(Math.round, Math, [markLength * thirdG$$1 / sequenceArray$$3.length], JAM.policy.p15);
    thirdA$$1 = JAM.call(Math.round, Math, [markLength * thirdA$$1 / sequenceArray$$3.length], JAM.policy.p15);
    thirdT$$1 = JAM.call(Math.round, Math, [markLength * thirdT$$1 / sequenceArray$$3.length], JAM.policy.p15);
    thirdC$$1 = JAM.call(Math.round, Math, [markLength * thirdC$$1 / sequenceArray$$3.length], JAM.policy.p15);
    var v343 = outputWindow.document;
    JAM.call(v343.write, v343, ["<b>" + (i$$13 + 1) + "_" + columnSeq + "_" + "first</b>\n"], JAM.policy.p17);
    var v345 = outputWindow.document;
    var v1232 = "g" + JAM.call(markG.substring, markG, [0, firstG$$1], JAM.policy.p13) + " ";
    var v1239 = firstG$$1 / markLength;
    var v1197 = v1232 + JAM.call(v1239.toFixed, v1239, [2], JAM.policy.p11) + "\n" + "a" + JAM.call(markA.substring, markA, [0, firstA$$1], JAM.policy.p13) + " ";
    var v1208 = firstA$$1 / markLength;
    var v1132 = v1197 + JAM.call(v1208.toFixed, v1208, [2], JAM.policy.p11) + "\n" + "T" + JAM.call(markT.substring, markT, [0, firstT$$1], JAM.policy.p13) + " ";
    var v1151 = firstT$$1 / markLength;
    var v866 = v1132 + JAM.call(v1151.toFixed, v1151, [2], JAM.policy.p11) + "\n" + "C" + JAM.call(markC.substring, markC, [0, firstC$$1], JAM.policy.p13) + " ";
    var v987 = firstC$$1 / markLength;
    JAM.call(v345.write, v345, [v866 + JAM.call(v987.toFixed, v987, [2], JAM.policy.p11) + "\n"], JAM.policy.p17);
    var v347 = outputWindow.document;
    JAM.call(v347.write, v347, ["<b>" + (i$$13 + 1) + "_" + columnSeq + "_" + "second</b>\n"], JAM.policy.p17);
    var v349 = outputWindow.document;
    var v1234 = "g" + JAM.call(markG.substring, markG, [0, secondG$$1], JAM.policy.p13) + " ";
    var v1241 = secondG$$1 / markLength;
    var v1199 = v1234 + JAM.call(v1241.toFixed, v1241, [2], JAM.policy.p11) + "\n" + "a" + JAM.call(markA.substring, markA, [0, secondA$$1], JAM.policy.p13) + " ";
    var v1210 = secondA$$1 / markLength;
    var v1134 = v1199 + JAM.call(v1210.toFixed, v1210, [2], JAM.policy.p11) + "\n" + "T" + JAM.call(markT.substring, markT, [0, secondT$$1], JAM.policy.p13) + " ";
    var v1153 = secondT$$1 / markLength;
    var v869 = v1134 + JAM.call(v1153.toFixed, v1153, [2], JAM.policy.p11) + "\n" + "C" + JAM.call(markC.substring, markC, [0, secondC$$1], JAM.policy.p13) + " ";
    var v990 = secondC$$1 / markLength;
    JAM.call(v349.write, v349, [v869 + JAM.call(v990.toFixed, v990, [2], JAM.policy.p11) + "\n"], JAM.policy.p17);
    var v351 = outputWindow.document;
    JAM.call(v351.write, v351, ["<b>" + (i$$13 + 1) + "_" + columnSeq + "_" + "third</b>\n"], JAM.policy.p17);
    var v353 = outputWindow.document;
    var v1236 = "g" + JAM.call(markG.substring, markG, [0, thirdG$$1], JAM.policy.p13) + " ";
    var v1243 = thirdG$$1 / markLength;
    var v1201 = v1236 + JAM.call(v1243.toFixed, v1243, [2], JAM.policy.p11) + "\n" + "a" + JAM.call(markA.substring, markA, [0, thirdA$$1], JAM.policy.p13) + " ";
    var v1212 = thirdA$$1 / markLength;
    var v1136 = v1201 + JAM.call(v1212.toFixed, v1212, [2], JAM.policy.p11) + "\n" + "T" + JAM.call(markT.substring, markT, [0, thirdT$$1], JAM.policy.p13) + " ";
    var v1155 = thirdT$$1 / markLength;
    var v872 = v1136 + JAM.call(v1155.toFixed, v1155, [2], JAM.policy.p11) + "\n" + "C" + JAM.call(markC.substring, markC, [0, thirdC$$1], JAM.policy.p13) + " ";
    var v993 = thirdC$$1 / markLength;
    JAM.call(v353.write, v353, [v872 + JAM.call(v993.toFixed, v993, [2], JAM.policy.p11) + "\n"], JAM.policy.p17);
    var v355 = outputWindow.document;
    JAM.call(v355.write, v355, ["\n"], JAM.policy.p9);
    i$$13++;
    v356 = i$$13 < sequenceArray$$3[0].length;
  }
  return true;
}
function makeCodonTable(gcgTable) {
  gcgTable = JAM.call(gcgTable.replace, gcgTable, [/[^\.]*\.\./, ""], JAM.policy.p16);
  var tableArray = JAM.call(gcgTable.split, gcgTable, [/[\f\n\r]/], JAM.policy.p15);
  var re$$3 = /(\w+)\s+(\w+)\s+(\S+)\s+(\S+)\s+(\S+)/g;
  var matchArray$$2;
  var codonTable$$4 = new CodonTable;
  var i$$14 = 0;
  var v361 = i$$14 < tableArray.length;
  for (;v361;) {
    var v360 = matchArray$$2 = JAM.call(re$$3.exec, re$$3, [tableArray[i$$14]], JAM.policy.p17);
    for (;v360;) {
      try {
        var v357 = codonTable$$4[matchArray$$2[1].toLowerCase()];
        JAM.call(v357.addCodon, v357, [JAM.new(Codon, [matchArray$$2[2], parseFloat(matchArray$$2[3]), parseFloat(matchArray$$2[4]), parseFloat(matchArray$$2[5])], JAM.policy.p19)], JAM.policy.p17);
      } catch (e$$7) {
        alert("There is a problem with a line of the codon table: " + matchArray$$2[1] + " " + matchArray$$2[2] + " " + matchArray$$2[3] + " " + matchArray$$2[4] + " " + matchArray$$2[4]);
        return false;
      }
      v360 = matchArray$$2 = JAM.call(re$$3.exec, re$$3, [tableArray[i$$14]], JAM.policy.p17);
    }
    i$$14++;
    v361 = i$$14 < tableArray.length;
  }
  codonTable$$4.a.determineBaseFreq();
  codonTable$$4.c.determineBaseFreq();
  codonTable$$4.d.determineBaseFreq();
  codonTable$$4.e.determineBaseFreq();
  codonTable$$4.f.determineBaseFreq();
  codonTable$$4.g.determineBaseFreq();
  codonTable$$4.h.determineBaseFreq();
  codonTable$$4.i.determineBaseFreq();
  codonTable$$4.k.determineBaseFreq();
  codonTable$$4.l.determineBaseFreq();
  codonTable$$4.m.determineBaseFreq();
  codonTable$$4.n.determineBaseFreq();
  codonTable$$4.p.determineBaseFreq();
  codonTable$$4.q.determineBaseFreq();
  codonTable$$4.r.determineBaseFreq();
  codonTable$$4.s.determineBaseFreq();
  codonTable$$4.t.determineBaseFreq();
  codonTable$$4.v.determineBaseFreq();
  codonTable$$4.w.determineBaseFreq();
  codonTable$$4.y.determineBaseFreq();
  codonTable$$4.z.determineBaseFreq();
  return codonTable$$4;
}
function CodonTable() {
  var v1258 = new AminoAcid;
  this.a = v1258;
  var v1259 = new AminoAcid;
  this.c = v1259;
  var v1260 = new AminoAcid;
  this.d = v1260;
  var v1261 = new AminoAcid;
  this.e = v1261;
  var v1262 = new AminoAcid;
  this.f = v1262;
  var v1263 = new AminoAcid;
  this.g = v1263;
  var v1264 = new AminoAcid;
  this.h = v1264;
  var v1265 = new AminoAcid;
  this.i = v1265;
  var v1266 = new AminoAcid;
  this.k = v1266;
  var v1267 = new AminoAcid;
  this.l = v1267;
  var v1268 = new AminoAcid;
  this.m = v1268;
  var v1269 = new AminoAcid;
  this.n = v1269;
  var v1270 = new AminoAcid;
  this.p = v1270;
  var v1271 = new AminoAcid;
  this.q = v1271;
  var v1272 = new AminoAcid;
  this.r = v1272;
  var v1273 = new AminoAcid;
  this.s = v1273;
  var v1274 = new AminoAcid;
  this.t = v1274;
  var v1275 = new AminoAcid;
  this.v = v1275;
  var v1276 = new AminoAcid;
  this.w = v1276;
  var v1277 = new AminoAcid;
  this.y = v1277;
  var v1278 = new AminoAcid;
  this.z = v1278;
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
  return;
}
function addCodon(codon$$1) {
  var v383 = this.codons;
  JAM.call(v383.push, v383, [codon$$1], JAM.policy.p17);
  return;
}
function determineBaseFreq() {
  this.fixFraction();
  var i$$15 = 0;
  var v408 = i$$15 < this.codons.length;
  for (;v408;) {
    var v881 = this.codons[i$$15].sequence;
    if (JAM.call(v881.charAt, v881, [0], JAM.policy.p11) == "g") {
      this.baseFreqPosOne[0] = this.baseFreqPosOne[0] + this.codons[i$$15].fraction;
    } else {
      var v884 = this.codons[i$$15].sequence;
      if (JAM.call(v884.charAt, v884, [0], JAM.policy.p11) == "a") {
        this.baseFreqPosOne[1] = this.baseFreqPosOne[1] + this.codons[i$$15].fraction;
      } else {
        var v887 = this.codons[i$$15].sequence;
        if (JAM.call(v887.charAt, v887, [0], JAM.policy.p11) == "t") {
          this.baseFreqPosOne[2] = this.baseFreqPosOne[2] + this.codons[i$$15].fraction;
        } else {
          var v890 = this.codons[i$$15].sequence;
          if (JAM.call(v890.charAt, v890, [0], JAM.policy.p11) == "c") {
            this.baseFreqPosOne[3] = this.baseFreqPosOne[3] + this.codons[i$$15].fraction;
          }
        }
      }
    }
    var v893 = this.codons[i$$15].sequence;
    if (JAM.call(v893.charAt, v893, [1], JAM.policy.p11) == "g") {
      this.baseFreqPosTwo[0] = this.baseFreqPosTwo[0] + this.codons[i$$15].fraction;
    } else {
      var v896 = this.codons[i$$15].sequence;
      if (JAM.call(v896.charAt, v896, [1], JAM.policy.p11) == "a") {
        this.baseFreqPosTwo[1] = this.baseFreqPosTwo[1] + this.codons[i$$15].fraction;
      } else {
        var v899 = this.codons[i$$15].sequence;
        if (JAM.call(v899.charAt, v899, [1], JAM.policy.p11) == "t") {
          this.baseFreqPosTwo[2] = this.baseFreqPosTwo[2] + this.codons[i$$15].fraction;
        } else {
          var v902 = this.codons[i$$15].sequence;
          if (JAM.call(v902.charAt, v902, [1], JAM.policy.p11) == "c") {
            this.baseFreqPosTwo[3] = this.baseFreqPosTwo[3] + this.codons[i$$15].fraction;
          }
        }
      }
    }
    var v905 = this.codons[i$$15].sequence;
    if (JAM.call(v905.charAt, v905, [2], JAM.policy.p11) == "g") {
      this.baseFreqPosThree[0] = this.baseFreqPosThree[0] + this.codons[i$$15].fraction;
    } else {
      var v908 = this.codons[i$$15].sequence;
      if (JAM.call(v908.charAt, v908, [2], JAM.policy.p11) == "a") {
        this.baseFreqPosThree[1] = this.baseFreqPosThree[1] + this.codons[i$$15].fraction;
      } else {
        var v911 = this.codons[i$$15].sequence;
        if (JAM.call(v911.charAt, v911, [2], JAM.policy.p11) == "t") {
          this.baseFreqPosThree[2] = this.baseFreqPosThree[2] + this.codons[i$$15].fraction;
        } else {
          var v914 = this.codons[i$$15].sequence;
          if (JAM.call(v914.charAt, v914, [2], JAM.policy.p11) == "c") {
            this.baseFreqPosThree[3] = this.baseFreqPosThree[3] + this.codons[i$$15].fraction;
          }
        }
      }
    }
    i$$15++;
    v408 = i$$15 < this.codons.length;
  }
  return true;
}
function fixFraction() {
  var perThouTotal = 0;
  var i$$16 = 0;
  var v410 = i$$16 < this.codons.length;
  for (;v410;) {
    perThouTotal = perThouTotal + this.codons[i$$16].perThou;
    i$$16++;
    v410 = i$$16 < this.codons.length;
  }
  if (perThouTotal == 0) {
    return false;
  }
  i$$16 = 0;
  var v413 = i$$16 < this.codons.length;
  for (;v413;) {
    this.codons[i$$16].fraction = this.codons[i$$16].perThou / perThouTotal;
    i$$16++;
    v413 = i$$16 < this.codons.length;
  }
  return true;
}
function AminoAcid() {
  var v1279 = new Array;
  this.codons = v1279;
  var v1280 = new Array(0, 0, 0, 0);
  this.baseFreqPosOne = v1280;
  var v1281 = new Array(0, 0, 0, 0);
  this.baseFreqPosTwo = v1281;
  var v1282 = new Array(0, 0, 0, 0);
  this.baseFreqPosThree = v1282;
  return;
}
function Codon(sequence$$18, number, perThou, fraction) {
  var v1283 = sequence$$18.toLowerCase();
  this.sequence = v1283;
  this.number = number;
  this.perThou = perThou;
  this.fraction = fraction;
  return;
}
function _getConsensusBase(baseFreq) {
  var g;
  var a;
  var t;
  var c;
  if (baseFreq[0] > 0) {
    g = true;
  }
  if (baseFreq[1] > 0) {
    a = true;
  }
  if (baseFreq[2] > 0) {
    t = true;
  }
  if (baseFreq[3] > 0) {
    c = true;
  }
  var v1021 = !g;
  if (v1021) {
    v1021 = !a;
  }
  var v924 = v1021;
  if (v924) {
    v924 = !c;
  }
  var v765 = v924;
  if (v765) {
    v765 = !t;
  }
  if (v765) {
    return "n";
  }
  var v925 = g && a;
  if (v925) {
    v925 = c;
  }
  var v766 = v925;
  if (v766) {
    v766 = t;
  }
  if (v766) {
    return "n";
  } else {
    var v767 = a && c;
    if (v767) {
      v767 = t;
    }
    if (v767) {
      return "h";
    } else {
      var v768 = a && g;
      if (v768) {
        v768 = t;
      }
      if (v768) {
        return "d";
      } else {
        var v769 = c && g;
        if (v769) {
          v769 = t;
        }
        if (v769) {
          return "b";
        } else {
          if (a && c) {
            return "m";
          } else {
            if (g && t) {
              return "k";
            } else {
              if (a && t) {
                return "w";
              } else {
                if (g && c) {
                  return "s";
                } else {
                  if (c && t) {
                    return "y";
                  } else {
                    if (a && g) {
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
  return "?";
}
new AminoAcid;
AminoAcid.prototype.addCodon = addCodon;
AminoAcid.prototype.determineBaseFreq = determineBaseFreq;
AminoAcid.prototype.fixFraction = fixFraction;
JAM.set(document, "onload", v2);
JAM.set(JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p9), "onclick", v3);
JAM.set(JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p9), "onclick", v4)

JAM.stopProfile('load');
