// sms2-pairwise-align-dna.js
function v4() {
  document.forms[0].elements[0].value = " ";
  document.forms[0].elements[4].value = " ";
  return;
}
function v3() {
  try {
    pairwiseAlignDna();
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
  sequence = JAM.call(sequence.replace, sequence, [/(.{60})/g, v0], JAM.policy.p23);
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
    var v1350 = arrayOfTitles[i$$1];
    var v959 = JAM.call(v1350.search, v1350, [/\S/], JAM.policy.p22) == -1;
    if (!v959) {
      var v1351 = arrayOfSequences[i$$1];
      v959 = JAM.call(v1351.search, v1351, [/\S/], JAM.policy.p22) == -1;
    }
    var v553 = v959;
    if (!v553) {
      v553 = arrayOfSequences[i$$1].length != lengthOfAlign;
    }
    if (v553) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    v12 = i$$1 < arrayOfTitles.length;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v1352 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p22) == -1;
  if (!v1352) {
    v1352 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p22) == -1;
  }
  var v1208 = v1352;
  if (!v1208) {
    v1208 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p22) == -1;
  }
  var v962 = v1208;
  if (!v962) {
    v962 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p22) == -1;
  }
  var v555 = v962;
  if (!v555) {
    v555 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p22) == -1;
  }
  if (v555) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v965 = formElement.value;
  if (JAM.call(v965.search, v965, [/\S/], JAM.policy.p22) == -1) {
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
    var v966 = arrayOfPatterns[z$$2];
    if (JAM.call(v966.search, v966, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p22) == -1) {
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
    var v968 = arrayOfPatterns[j];
    var v20 = JAM.call(v968.match, v968, [/\/.+\//], JAM.policy.p22) + "gi";
    if (JAM.isEval(eval)) {
      var v1569 = eval("introspect(JAM.policy.pFull) { " + v20 + " }")
    } else {
      var v1569 = JAM.call(eval, null, [v20])
    }
    geneticCodeMatchExp[j] = v1569;
    var v563 = arrayOfPatterns[j];
    var v1570 = JAM.call(v563.match, v563, [/=[a-zA-Z\*]/], JAM.policy.p22).toString();
    geneticCodeMatchResult[j] = v1570;
    var v22 = geneticCodeMatchResult[j];
    var v1571 = JAM.call(v22.replace, v22, [/=/g, ""], JAM.policy.p23);
    geneticCodeMatchResult[j] = v1571;
    j++;
    v23 = j < arrayOfPatterns.length;
  }
  var i$$2 = 0;
  var v30 = i$$2 <= testSequence.length - 3;
  for (;v30;) {
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, i$$2 + 3], JAM.policy.p23);
    j = 0;
    var v28 = j < geneticCodeMatchExp.length;
    for (;v28;) {
      if (JAM.call(codon.search, codon, [geneticCodeMatchExp[j]], JAM.policy.p24) != -1) {
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
    var v972 = arrayOfPatterns$$1[z$$3];
    if (JAM.call(v972.search, v972, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p22) != -1) {
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
      var v974 = arrayOfPatterns$$1[j$$1];
      if (JAM.call(v974.search, v974, [re], JAM.policy.p24) != -1) {
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
    var v975 = arrayOfPatterns$$2[z$$4];
    if (JAM.call(v975.search, v975, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p22) == -1) {
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
  var v1211 = getSequenceFromFasta(text$$7);
  if (JAM.call(v1211.replace, v1211, [/[^A-Za-z]/g, ""], JAM.policy.p23).length > maxInput) {
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
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/g/g, "1"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/c/g, "2"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "c"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "g"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/G/g, "1"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/C/g, "2"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "C"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "G"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/a/g, "1"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/t/g, "2"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "t"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "a"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/A/g, "1"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/T/g, "2"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "T"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "A"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/u/g, "a"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/U/g, "A"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/r/g, "1"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/y/g, "2"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "y"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "r"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/R/g, "1"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/Y/g, "2"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "Y"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "R"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/k/g, "1"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/m/g, "2"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "m"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "k"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/K/g, "1"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/M/g, "2"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "M"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "K"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/b/g, "1"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/v/g, "2"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "v"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "b"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/B/g, "1"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/V/g, "2"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "V"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "B"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/d/g, "1"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/h/g, "2"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "h"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "d"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/D/g, "1"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/H/g, "2"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "H"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "D"], JAM.policy.p23);
  return dnaSequence;
}
function closeForm() {
  var v44 = outputWindow.document;
  JAM.call(v44.write, v44, ["</form>"], JAM.policy.p17);
  return true;
}
function closePre() {
  var v45 = outputWindow.document;
  JAM.call(v45.write, v45, ["</div>"], JAM.policy.p17);
  var v46 = outputWindow.document;
  JAM.call(v46.write, v46, ["</pre>\n"], JAM.policy.p17);
  return;
}
function closeTextArea() {
  var v47 = outputWindow.document;
  JAM.call(v47.write, v47, ["</textarea>"], JAM.policy.p17);
  return true;
}
function closeWindow() {
  var v48 = outputWindow.document;
  JAM.call(v48.write, v48, ["</body>\n</html>\n"], JAM.policy.p17);
  outputWindow.status = "Done.";
  outputWindow.document.close();
  return;
}
function convertDegenerates(sequence$$1) {
  sequence$$1 = sequence$$1.toLowerCase();
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/t/g, "[TU]"], JAM.policy.p23);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/r/g, "[AGR]"], JAM.policy.p23);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/y/g, "[CTUY]"], JAM.policy.p23);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/s/g, "[GCS]"], JAM.policy.p23);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/w/g, "[ATUW]"], JAM.policy.p23);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/k/g, "[GTUK]"], JAM.policy.p23);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/m/g, "[ACM]"], JAM.policy.p23);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/b/g, "[CGTUBSKY]"], JAM.policy.p23);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/d/g, "[AGTUDRKW]"], JAM.policy.p23);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/h/g, "[ACTUHMYW]"], JAM.policy.p23);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/v/g, "[ACGVSMR]"], JAM.policy.p23);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/n/g, "[ACGTURYSWKMBDHVN]"], JAM.policy.p23);
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
    var v978 = alignArray[i$$4];
    if (JAM.call(v978.search, v978, [/[^\s]+\s/], JAM.policy.p22) == -1) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    v52 = i$$4 < alignArray.length;
  }
  return true;
}
function filterAlignSeq(alignSeq) {
  alignSeq = JAM.call(alignSeq.replace, alignSeq, [/[^abcdefghiklmnpqrstvwxyz\.\-]/gi, ""], JAM.policy.p23);
  return alignSeq;
}
function filterFastaTitle(sequenceTitle) {
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/\s{2,}/g, " "], JAM.policy.p23);
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/^\s*/g, ""], JAM.policy.p23);
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/[\f\n\r\t]+$/g, "\n"], JAM.policy.p23);
  return JAM.call(sequenceTitle.replace, sequenceTitle, [/[\<\>]\n/gi, ""], JAM.policy.p23);
}
function getArrayOfFasta(sequenceData) {
  var arrayOfFasta = new Array;
  var matchArray;
  var re$$1 = /\>[^\>]+/g;
  if (JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p22) != -1) {
    var v54 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p24);
    for (;v54;) {
      JAM.call(arrayOfFasta.push, arrayOfFasta, [matchArray[0]], JAM.policy.p24);
      v54 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p24);
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var stringToReturn = "&gt;results for " + sequence$$2.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p22) != -1) {
    stringToReturn = stringToReturn + '"' + fastaSequenceTitle + '"';
  }
  stringToReturn = stringToReturn + ' starting "' + JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p20) + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var stringToReturn$$1 = "Search results for " + sequenceOne.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p22) != -1) {
    stringToReturn$$1 = stringToReturn$$1 + '"' + fastaSequenceTitleOne + '"';
  }
  stringToReturn$$1 = stringToReturn$$1 + ' starting "' + JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p20) + '"\n';
  stringToReturn$$1 = stringToReturn$$1 + "and " + sequenceTwo.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p22) != -1) {
    stringToReturn$$1 = stringToReturn$$1 + '"' + fastaSequenceTitleTwo + '"';
  }
  stringToReturn$$1 = stringToReturn$$1 + ' starting "' + JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p20) + '"';
  return '<div class="info">' + stringToReturn$$1 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var geneticCodeMatchExp$$1 = new Array(arrayOfPatterns$$3.length);
  var j$$2 = 0;
  var v71 = j$$2 < arrayOfPatterns$$3.length;
  for (;v71;) {
    var v979 = arrayOfPatterns$$3[j$$2];
    var v70 = JAM.call(v979.match, v979, [/\/.+\//], JAM.policy.p22) + "gi";
    if (JAM.isEval(eval)) {
      var v1572 = eval("introspect(JAM.policy.pFull) { " + v70 + " }")
    } else {
      var v1572 = JAM.call(eval, null, [v70])
    }
    geneticCodeMatchExp$$1[j$$2] = v1572;
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
    var v613 = arrayOfPatterns$$4[j$$3];
    var v1573 = JAM.call(v613.match, v613, [/=[a-zA-Z\*]/], JAM.policy.p22).toString();
    geneticCodeMatchResult$$1[j$$3] = v1573;
    var v74 = geneticCodeMatchResult$$1[j$$3];
    var v1574 = JAM.call(v74.replace, v74, [/=/g, ""], JAM.policy.p23);
    geneticCodeMatchResult$$1[j$$3] = v1574;
    j$$3++;
    v75 = j$$3 < arrayOfPatterns$$4.length;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var stringToReturn$$2 = "Results for " + sequence$$3.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p22) != -1) {
    stringToReturn$$2 = stringToReturn$$2 + '"' + fastaSequenceTitle$$1 + '"';
  }
  stringToReturn$$2 = stringToReturn$$2 + ' starting "' + JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p20) + '"';
  return '<div class="info">' + stringToReturn$$2 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var stringToReturn$$3 = "Results for " + topology + " " + sequence$$4.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p22) != -1) {
    stringToReturn$$3 = stringToReturn$$3 + '"' + fastaSequenceTitle$$2 + '"';
  }
  stringToReturn$$3 = stringToReturn$$3 + ' starting "' + JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p20) + '"';
  return '<div class="info">' + stringToReturn$$3 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var stringToReturn$$4 = "Alignment results for " + sequenceOne$$1.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p22) != -1) {
    stringToReturn$$4 = stringToReturn$$4 + '"' + fastaSequenceTitleOne$$1 + '"';
  }
  stringToReturn$$4 = stringToReturn$$4 + ' starting "' + JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p20) + '"\n';
  stringToReturn$$4 = stringToReturn$$4 + "and " + sequenceTwo$$1.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p22) != -1) {
    stringToReturn$$4 = stringToReturn$$4 + '"' + fastaSequenceTitleTwo$$1 + '"';
  }
  stringToReturn$$4 = stringToReturn$$4 + ' starting "' + JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p20) + '"';
  return '<div class="info">' + stringToReturn$$4 + "</div>\n";
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v96 = j$$4 < lengthOut;
  for (;v96;) {
    tempNum = JAM.call(Math.floor, Math, [Math.random() * components.length], JAM.policy.p22);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p24);
    j$$4++;
    v96 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p17);
}
function getSequenceFromFasta(sequenceRecord) {
  if (JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p22) != -1) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p23);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  if (JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p22) != -1) {
    fastaTitle = JAM.call(sequenceRecord$$1.match, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p23).toString();
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\>|[\f\n\r]/g, ""], JAM.policy.p23);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\s{2,}/g, " "], JAM.policy.p23);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/[\<\>]/gi, ""], JAM.policy.p23);
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  var v1540 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p22) != -1;
  if (!v1540) {
    v1540 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p22) != -1;
  }
  var v1530 = v1540;
  if (!v1530) {
    v1530 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p22) != -1;
  }
  var v1519 = v1530;
  if (!v1519) {
    v1519 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p22) != -1;
  }
  var v1504 = v1519;
  if (!v1504) {
    v1504 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p22) != -1;
  }
  var v1479 = v1504;
  if (!v1479) {
    v1479 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p22) != -1;
  }
  var v1445 = v1479;
  if (!v1445) {
    v1445 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p22) != -1;
  }
  var v1355 = v1445;
  if (!v1355) {
    v1355 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p22) != -1;
  }
  var v1212 = v1355;
  if (!v1212) {
    v1212 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p22) != -1;
  }
  var v981 = v1212;
  if (!v981) {
    v981 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p22) != -1;
  }
  var v641 = v981;
  if (!v641) {
    v641 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p22) != -1;
  }
  if (v641) {
    return false;
  }
  return true;
}
function openForm() {
  var v101 = outputWindow.document;
  JAM.call(v101.write, v101, ['<form action="">\n'], JAM.policy.p17);
  return true;
}
function openPre() {
  var v102 = outputWindow.document;
  JAM.call(v102.write, v102, ["<pre>"], JAM.policy.p17);
  var v103 = outputWindow.document;
  JAM.call(v103.write, v103, ['<div class="pre">'], JAM.policy.p17);
  return;
}
function openTextArea() {
  var v104 = outputWindow.document;
  JAM.call(v104.write, v104, ['<br /><textarea rows="6" cols="61">\n'], JAM.policy.p17);
  return true;
}
function openWindow() {
  var title$$5 = "Pairwise Align DNA";
  _openWindow(title$$5);
  return;
}
function _openWindow(title$$6) {
  var isColor = true;
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p19);
  outputWindow.focus();
  var v105 = outputWindow.document;
  JAM.call(v105.write, v105, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n'], JAM.policy.p24);
  if (isColor) {
    var v107 = outputWindow.document;
    JAM.call(v107.write, v107, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; background-color: #66FF00}\n" + 
    "span.two, td.two {color: #000000; background-color: #FFFF66}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n" + "td.many {color: #000000}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + 
    "</style>\n"], JAM.policy.p24);
  } else {
    var v109 = outputWindow.document;
    JAM.call(v109.write, v109, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n" + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "td.many {color: #000000; background-color: #FFFFFF}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"], JAM.policy.p24);
  }
  var v111 = outputWindow.document;
  JAM.call(v111.write, v111, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$6 + " results</div>\n"], JAM.policy.p24);
  outputWindow.status = "Please Wait.";
  return;
}
function openWindowAlign(title$$7) {
  _openWindowAlign(title$$7);
  return;
}
function _openWindowAlign(title$$8) {
  var isBackground = true;
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p19);
  outputWindow.focus();
  var v113 = outputWindow.document;
  JAM.call(v113.write, v113, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n'], JAM.policy.p24);
  if (isBackground) {
    var v115 = outputWindow.document;
    JAM.call(v115.write, v115, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #FFFFFF; background-color: #000000}\n" + "span.sim {color: #FFFFFF; background-color: #666666}\n" + 
    "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n" + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n" + "span.c, span.m {color: #000000; background-color: #FFFF00}\n" + "span.s, span.t {color: #000000; background-color: #66FF00}\n" + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n" + "span.d, span.e {color: #000000; background-color: #0066FF}\n" + "span.n, span.q {color: #000000; background-color: #996633}\n" + "span.p {color: #000000; background-color: #FF99FF}\n" + 
    "</style>\n"], JAM.policy.p24);
  } else {
    var v117 = outputWindow.document;
    JAM.call(v117.write, v117, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n" + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n" + 
    "span.diff {color: #999999; background-color: #FFFFFF}\n" + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n" + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n" + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n" + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n" + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n" + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n" + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n" + 
    "span.p {color: #00FFCC; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"], JAM.policy.p24);
  }
  var v119 = outputWindow.document;
  JAM.call(v119.write, v119, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$8 + " results</div>\n"], JAM.policy.p24);
  outputWindow.status = "Please Wait.";
  return;
}
function removeFormatting(sequence$$5) {
  return JAM.call(sequence$$5.replace, sequence$$5, [/[\d\s]/g, ""], JAM.policy.p23);
}
function removeNonDna(sequence$$6) {
  return JAM.call(sequence$$6.replace, sequence$$6, [/[^gatucryswkmbdhvnxGATUCRYSWKMBDHVNX]/g, ""], JAM.policy.p23);
}
function removeNonDnaStrict(sequence$$7) {
  return JAM.call(sequence$$7.replace, sequence$$7, [/[^gatucGATUC]/g, ""], JAM.policy.p23);
}
function removeNonProtein(sequence$$8) {
  return JAM.call(sequence$$8.replace, sequence$$8, [/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, ""], JAM.policy.p23);
}
function removeNonProteinStrict(sequence$$9) {
  return JAM.call(sequence$$9.replace, sequence$$9, [/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, ""], JAM.policy.p23);
}
function removeNonProteinAllowDegen(sequence$$10) {
  return JAM.call(sequence$$10.replace, sequence$$10, [/[^ABCDEFGHIKLMNPQRSTVWYXZabcdefghiklmnpqrstvwyxz\*]/g, ""], JAM.policy.p23);
}
function removeNonProteinAllowX(sequence$$11) {
  return JAM.call(sequence$$11.replace, sequence$$11, [/[^ACDEFGHIKLMNPQRSTVWYZXacdefghiklmnpqrstvwyzx\*]/g, ""], JAM.policy.p23);
}
function removeWhiteSpace(text$$9) {
  return JAM.call(text$$9.replace, text$$9, [/\s/g, ""], JAM.policy.p23);
}
function removeNonLetters(sequence$$12) {
  return JAM.call(sequence$$12.replace, sequence$$12, [/[^A-Z]/gi, ""], JAM.policy.p23);
}
function reverse(dnaSequence$$1) {
  var tempDnaArray = new Array;
  if (JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p22) != -1) {
    tempDnaArray = JAM.call(dnaSequence$$1.match, dnaSequence$$1, [/./g], JAM.policy.p22);
    tempDnaArray = tempDnaArray.reverse();
    dnaSequence$$1 = JAM.call(tempDnaArray.join, tempDnaArray, [""], JAM.policy.p17);
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
  JAM.call(testArray.push, testArray, [testString], JAM.policy.p24);
  if (testArray[0] != testString) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  if (JAM.call(testString.search, testString, [re$$2], JAM.policy.p24) == -1) {
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
  testString = JAM.call(testString.replace, testString, [/(\d)/g, v1], JAM.policy.p23);
  if (testString != "1X2X3X") {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false;
  }
  var testNum = 2489.8237;
  if (JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p16) != 2489.824) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  if (JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p16) != 2489.8) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  if (JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p22) == -1) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v1223 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p22) == -1;
  if (!v1223) {
    v1223 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p22) == -1;
  }
  var v992 = v1223;
  if (!v992) {
    v992 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p22) == -1;
  }
  var v656 = v992;
  if (!v656) {
    v656 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p22) == -1;
  }
  if (v656) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  if (JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p22) == -1) {
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
  if (JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p22) != -1) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  if (JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p22) != -1) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v1226 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p22) == -1;
  if (!v1226) {
    v1226 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p22) == -1;
  }
  var v995 = v1226;
  if (!v995) {
    v995 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p22) == -1;
  }
  var v661 = v995;
  if (!v661) {
    v661 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p22) == -1;
  }
  if (v661) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v1229 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p22) == -1;
  if (!v1229) {
    v1229 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p22) == -1;
  }
  var v998 = v1229;
  if (!v998) {
    v998 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p22) == -1;
  }
  var v662 = v998;
  if (!v662) {
    v662 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p22) == -1;
  }
  if (v662) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  if (JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p22) == -1) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v1232 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p22) == -1;
  if (!v1232) {
    v1232 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p22) == -1;
  }
  var v1001 = v1232;
  if (!v1001) {
    v1001 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p22) == -1;
  }
  var v664 = v1001;
  if (!v664) {
    v664 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p22) == -1;
  }
  if (v664) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  if (JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p22) == -1) {
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
        lineOfText = lineOfText + JAM.call(text$$10.charAt, text$$10, [k + i$$5], JAM.policy.p24);
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
    JAM.call(v147.write, v147, [lineOfText + "\n"], JAM.policy.p24);
    lineOfText = "";
    v149 = i$$5 < stopBase;
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
    var v669 = adjustment < 0;
    if (v669) {
      v669 = adjusted >= 0;
    }
    if (v669) {
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
  var v181 = i$$6 < stopBase$$2;
  for (;v181;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v157 = j$$7 <= basePerLine$$2 / groupSize$$2;
    for (;v157;) {
      var v153 = k$$1 < groupSize$$2;
      for (;v153;) {
        if (i$$6 + k$$1 >= stopBase$$2) {
          break;
        }
        lineOfText$$1 = lineOfText$$1 + JAM.call(text$$12.charAt, text$$12, [k$$1 + i$$6], JAM.policy.p24);
        k$$1 = k$$1 + 1;
        v153 = k$$1 < groupSize$$2;
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
      v157 = j$$7 <= basePerLine$$2 / groupSize$$2;
    }
    if (numberPosition$$1 == "left") {
      var v158 = outputWindow.document;
      JAM.call(v158.write, v158, [rightNum(adjustNumbering(lineNum, numberingAdjustment), "", 8, tabIn$$3) + lineOfText$$1 + "\n"], JAM.policy.p24);
      if (strands$$1 == "two") {
        var v160 = outputWindow.document;
        JAM.call(v160.write, v160, [rightNum(adjustNumbering(lineNum, numberingAdjustment), "", 8, tabIn$$3) + complement(lineOfText$$1) + "\n"], JAM.policy.p24);
        var v162 = outputWindow.document;
        JAM.call(v162.write, v162, ["\n"], JAM.policy.p17);
      }
    } else {
      if (numberPosition$$1 == "right") {
        var v164 = outputWindow.document;
        JAM.call(v164.write, v164, [lineOfText$$1 + adjustNumbering(i$$6, numberingAdjustment) + "\n"], JAM.policy.p24);
        if (strands$$1 == "two") {
          var v166 = outputWindow.document;
          JAM.call(v166.write, v166, [complement(lineOfText$$1) + adjustNumbering(i$$6, numberingAdjustment) + "\n"], JAM.policy.p24);
          var v168 = outputWindow.document;
          JAM.call(v168.write, v168, ["\n"], JAM.policy.p17);
        }
      } else {
        if (numberPosition$$1 == "above") {
          var v170 = outputWindow.document;
          JAM.call(v170.write, v170, [aboveNum + "\n"], JAM.policy.p24);
          var v172 = outputWindow.document;
          JAM.call(v172.write, v172, [lineOfText$$1 + "\n"], JAM.policy.p24);
          if (strands$$1 == "two") {
            var v174 = outputWindow.document;
            JAM.call(v174.write, v174, [complement(lineOfText$$1) + "\n"], JAM.policy.p24);
            var v176 = outputWindow.document;
            JAM.call(v176.write, v176, ["\n"], JAM.policy.p17);
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v181 = i$$6 < stopBase$$2;
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
  var v200 = i$$7 < stopBase$$3;
  for (;v200;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v188 = j$$8 <= basePerLine$$3 / groupSize$$3;
    for (;v188;) {
      var v184 = k$$2 < groupSize$$3;
      for (;v184;) {
        if (i$$7 + k$$2 >= stopBase$$3) {
          break;
        }
        lineOfText$$2 = lineOfText$$2 + JAM.call(text$$13.charAt, text$$13, [k$$2 + i$$7], JAM.policy.p24);
        k$$2 = k$$2 + 1;
        v184 = k$$2 < groupSize$$3;
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
      v188 = j$$8 <= basePerLine$$3 / groupSize$$3;
    }
    if (numberPosition$$2 == "left") {
      var v189 = outputWindow.document;
      JAM.call(v189.write, v189, [rightNum(lineNum$$1, "", 8, tabIn$$4) + lineOfText$$2 + "\n"], JAM.policy.p24);
    } else {
      if (numberPosition$$2 == "right") {
        var v191 = outputWindow.document;
        JAM.call(v191.write, v191, [lineOfText$$2 + i$$7 + "\n"], JAM.policy.p24);
      } else {
        if (numberPosition$$2 == "above") {
          var v193 = outputWindow.document;
          JAM.call(v193.write, v193, [aboveNum$$1 + "\n"], JAM.policy.p24);
          var v195 = outputWindow.document;
          JAM.call(v195.write, v195, [lineOfText$$2 + "\n"], JAM.policy.p24);
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v200 = i$$7 < stopBase$$3;
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
  var v1011 = sequence$$13.length <= firstIndexToMutate;
  if (!v1011) {
    v1011 = lastIndexToMutate < 0;
  }
  var v686 = v1011;
  if (!v686) {
    v686 = lastIndexToMutate <= firstIndexToMutate;
  }
  if (v686) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v209 = i$$8 < numMut;
  for (;v209;) {
    maxNum = sequence$$13.length;
    randNum = JAM.call(Math.floor, Math, [Math.random() * maxNum], JAM.policy.p22);
    var v688 = randNum < firstIndexToMutate;
    if (!v688) {
      v688 = randNum > lastIndexToMutate;
    }
    if (v688) {
      numMut++;
      i$$8++;
      v209 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p22);
    needNewChar = true;
    for (;needNewChar;) {
      componentsIndex = JAM.call(Math.round, Math, [Math.random() * components$$1.length], JAM.policy.p22);
      if (componentsIndex == components$$1.length) {
        componentsIndex = 0;
      }
      if (components$$1[componentsIndex] != currentChar) {
        needNewChar = false;
      }
    }
    sequence$$13 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p20) + components$$1[componentsIndex] + JAM.call(sequence$$13.substring, sequence$$13, [randNum + 1, sequence$$13.length], JAM.policy.p33);
    i$$8++;
    v209 = i$$8 < numMut;
  }
  var v210 = outputWindow.document;
  JAM.call(v210.write, v210, [addReturns(sequence$$13)], JAM.policy.p24);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v216 = j$$9 < lengthOut$$1;
  for (;v216;) {
    tempNum$$1 = JAM.call(Math.floor, Math, [Math.random() * components$$2.length], JAM.policy.p22);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    if (sequence$$14.length == 60) {
      var v213 = outputWindow.document;
      JAM.call(v213.write, v213, [sequence$$14 + "\n"], JAM.policy.p24);
      sequence$$14 = "";
    }
    j$$9++;
    v216 = j$$9 < lengthOut$$1;
  }
  var v217 = outputWindow.document;
  JAM.call(v217.write, v217, [sequence$$14 + "\n"], JAM.policy.p24);
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
    shiftValue = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p20).length;
    sequence$$15 = JAM.call(sequence$$15.substring, sequence$$15, [sequence$$15.length - lookAhead, sequence$$15.length], JAM.policy.p33) + sequence$$15 + JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p20);
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v223 = outputWindow.document;
  JAM.call(v223.write, v223, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p17);
  var v224 = outputWindow.document;
  JAM.call(v224.write, v224, ['<tr><td class="title" width="200px">' + "Site:" + '</td><td class="title">' + "Positions:" + "</td></tr>\n"], JAM.policy.p24);
  var i$$9 = 0;
  var v241 = i$$9 < arrayOfItems.length;
  for (;v241;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v703 = arrayOfItems[i$$9];
    matchExp = JAM.call(v703.match, v703, [/\/.+\//], JAM.policy.p22) + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    var v1241 = arrayOfItems[i$$9];
    var v704 = JAM.call(v1241.match, v1241, [/\)\D*\d+/], JAM.policy.p22).toString();
    cutDistance = parseFloat(JAM.call(v704.replace, v704, [/\)\D*/, ""], JAM.policy.p23));
    var v233 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p24);
    for (;v233;) {
      matchPosition = matchExp.lastIndex - cutDistance;
      var v705 = matchPosition >= lowerLimit;
      if (v705) {
        v705 = matchPosition < upperLimit;
      }
      if (v705) {
        timesFound++;
        tempString$$1 = tempString$$1 + ", " + (matchPosition - shiftValue + 1);
      }
      matchExp.lastIndex = matchExp.lastIndex - RegExp.lastMatch.length + 1;
      v233 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p24);
    }
    if (JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p22) != -1) {
      tempString$$1 = JAM.call(tempString$$1.replace, tempString$$1, [/none,\s*/, ""], JAM.policy.p23);
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
    var v239 = outputWindow.document;
    var v1486 = '<tr><td class="' + backGroundClass + '">';
    var v1537 = arrayOfItems[i$$9];
    var v1512 = JAM.call(v1537.match, v1537, [/\([^\(]+\)/], JAM.policy.p22).toString();
    JAM.call(v239.write, v239, [v1486 + JAM.call(v1512.replace, v1512, [/\(|\)/g, ""], JAM.policy.p23) + '</td><td class="' + backGroundClass + '">' + tempString$$1 + "</td></tr>\n"], JAM.policy.p24);
    timesFound = 0;
    i$$9++;
    v241 = i$$9 < arrayOfItems.length;
  }
  var v242 = outputWindow.document;
  JAM.call(v242.write, v242, ["</tbody></table>\n"], JAM.policy.p17);
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v243 = outputWindow.document;
  JAM.call(v243.write, v243, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p17);
  var v244 = outputWindow.document;
  JAM.call(v244.write, v244, ['<tr><td class="title">' + "Pattern:" + '</td><td class="title">' + "Times found:" + '</td><td class="title">' + "Percentage:" + "</td></tr>\n"], JAM.policy.p24);
  var i$$10 = 0;
  var v254 = i$$10 < arrayOfItems$$1.length;
  for (;v254;) {
    var tempNumber = 0;
    var v714 = arrayOfItems$$1[i$$10];
    var matchExp$$1 = JAM.call(v714.match, v714, [/\/[^\/]+\//], JAM.policy.p22) + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    if (JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p24) != -1) {
      tempNumber = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p24).length;
    }
    var percentage = 0;
    var v1021 = originalLength + 1;
    var v1376 = arrayOfItems$$1[i$$10];
    if (v1021 - parseFloat(JAM.call(v1376.match, v1376, [/\d+/], JAM.policy.p22)) > 0) {
      var v249 = 100 * tempNumber;
      var v717 = originalLength + 1;
      var v1245 = arrayOfItems$$1[i$$10];
      percentage = v249 / (v717 - parseFloat(JAM.call(v1245.match, v1245, [/\d+/], JAM.policy.p22)));
    }
    var v252 = outputWindow.document;
    var v1538 = arrayOfItems$$1[i$$10];
    var v1513 = JAM.call(v1538.match, v1538, [/\([^\(]+\)\b/], JAM.policy.p22).toString();
    JAM.call(v252.write, v252, ["<tr><td>" + JAM.call(v1513.replace, v1513, [/\(|\)/g, ""], JAM.policy.p23) + "</td><td>" + tempNumber + "</td><td>" + JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p16) + "</td></tr>\n"], JAM.policy.p24);
    i$$10++;
    v254 = i$$10 < arrayOfItems$$1.length;
  }
  var v255 = outputWindow.document;
  JAM.call(v255.write, v255, ["</tbody></table>\n"], JAM.policy.p17);
  return true;
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v262 = sequence$$17.length > 0;
  for (;v262;) {
    maxNum$$1 = sequence$$17.length;
    randNum$$1 = JAM.call(Math.floor, Math, [Math.random() * maxNum$$1], JAM.policy.p22);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p22);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p20);
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [randNum$$1 + 1, sequence$$17.length], JAM.policy.p23);
    sequence$$17 = tempString1 + tempString2;
    if (tempSeq.length == 60) {
      var v259 = outputWindow.document;
      JAM.call(v259.write, v259, [tempSeq + "\n"], JAM.policy.p24);
      tempSeq = "";
    }
    v262 = sequence$$17.length > 0;
  }
  var v263 = outputWindow.document;
  JAM.call(v263.write, v263, [tempSeq + "\n"], JAM.policy.p24);
  return true;
}
function pairwiseAlignDna() {
  var theDocument = document;
  var newDnaOne = "";
  var titleOne = "";
  var newDnaTwo = "";
  var titleTwo = "";
  var maxInput$$3 = 2E3;
  if (testScript() == false) {
    return;
  }
  var v1247 = checkFormElement(theDocument.forms[0].elements[0]) == false;
  if (!v1247) {
    v1247 = checkSequenceLength(theDocument.forms[0].elements[0].value, maxInput$$3) == false;
  }
  var v1026 = v1247;
  if (!v1026) {
    v1026 = checkFormElement(theDocument.forms[0].elements[1]) == false;
  }
  var v726 = v1026;
  if (!v726) {
    v726 = checkSequenceLength(theDocument.forms[0].elements[1].value, maxInput$$3) == false;
  }
  if (v726) {
    return;
  }
  var MATCH_SCORE = parseInt(theDocument.forms[0].elements[5].options[theDocument.forms[0].elements[5].selectedIndex].value);
  var MISMATCH_SCORE = parseInt(theDocument.forms[0].elements[6].options[theDocument.forms[0].elements[6].selectedIndex].value);
  var BEGIN_GAP_PENALTY = parseInt(theDocument.forms[0].elements[7].options[theDocument.forms[0].elements[7].selectedIndex].value);
  var GAP_PENALTY = parseInt(theDocument.forms[0].elements[8].options[theDocument.forms[0].elements[8].selectedIndex].value);
  var END_GAP_PENALTY = parseInt(theDocument.forms[0].elements[9].options[theDocument.forms[0].elements[9].selectedIndex].value);
  openWindow();
  openPre();
  newDnaOne = getSequenceFromFasta(theDocument.forms[0].elements[0].value);
  newDnaOne = removeNonDna(newDnaOne);
  titleOne = getTitleFromFasta(theDocument.forms[0].elements[0].value);
  newDnaTwo = getSequenceFromFasta(theDocument.forms[0].elements[1].value);
  newDnaTwo = removeNonDna(newDnaTwo);
  titleTwo = getTitleFromFasta(theDocument.forms[0].elements[1].value);
  var v276 = outputWindow.document;
  JAM.call(v276.write, v276, [getPairwiseAlignTitle(titleOne, newDnaOne, titleTwo, newDnaTwo)], JAM.policy.p24);
  if (JAM.call(newDnaOne.search, newDnaOne, [/./], JAM.policy.p22) != -1) {
    newDnaOne = JAM.call(newDnaOne.match, newDnaOne, [/./g], JAM.policy.p22);
  }
  if (JAM.call(newDnaTwo.search, newDnaTwo, [/./], JAM.policy.p22) != -1) {
    newDnaTwo = JAM.call(newDnaTwo.match, newDnaTwo, [/./g], JAM.policy.p22);
  }
  pairwiseDna(titleOne, newDnaOne, titleTwo, newDnaTwo, MATCH_SCORE, MISMATCH_SCORE, GAP_PENALTY, BEGIN_GAP_PENALTY, END_GAP_PENALTY);
  closePre();
  closeWindow();
  return;
}
function pairwiseDna(titleOne$$1, newDnaOne$$1, titleTwo$$1, newDnaTwo$$1, matchScore, mismatchScore, gapPenalty, beginGapPenalty, endGapPenalty) {
  var useLinearSpace = true;
  var useQuadraticSpace = false;
  var matrix = new Identity;
  JAM.call(matrix.setMatch, matrix, [matchScore], JAM.policy.p24);
  JAM.call(matrix.setMismatch, matrix, [mismatchScore], JAM.policy.p24);
  var scoreSet = new ScoreSet;
  JAM.call(scoreSet.setScoreSetParam, scoreSet, [matrix, gapPenalty, beginGapPenalty, endGapPenalty], JAM.policy.p33);
  var alignment;
  if (useLinearSpace) {
    alignment = new AlignPairLinear;
    JAM.call(alignment.setAlignParam, alignment, [newDnaOne$$1, newDnaTwo$$1, scoreSet], JAM.policy.p33);
    alignment.align();
    var v280 = outputWindow.document;
    JAM.call(v280.write, v280, [">" + titleOne$$1 + "\n"], JAM.policy.p24);
    var v282 = outputWindow.document;
    JAM.call(v282.write, v282, [addReturns(alignment.getAlignedM())], JAM.policy.p24);
    var v284 = outputWindow.document;
    JAM.call(v284.write, v284, ["\n"], JAM.policy.p17);
    var v285 = outputWindow.document;
    JAM.call(v285.write, v285, ["\n"], JAM.policy.p17);
    var v286 = outputWindow.document;
    JAM.call(v286.write, v286, [">" + titleTwo$$1 + "\n"], JAM.policy.p24);
    var v288 = outputWindow.document;
    JAM.call(v288.write, v288, [addReturns(alignment.getAlignedN())], JAM.policy.p24);
    var v290 = outputWindow.document;
    JAM.call(v290.write, v290, ["\n\n"], JAM.policy.p17);
    var v291 = outputWindow.document;
    JAM.call(v291.write, v291, ["Alignment score: " + alignment.score + "\n\n"], JAM.policy.p24);
  }
  if (useQuadraticSpace) {
    alignment = new AlignPairQuad;
    JAM.call(alignment.initializeMatrix, alignment, [newDnaOne$$1, newDnaTwo$$1, scoreSet], JAM.policy.p33);
    alignment.fillMatrix();
    alignment.align();
    var v293 = outputWindow.document;
    JAM.call(v293.write, v293, [">" + titleOne$$1 + "\n"], JAM.policy.p24);
    var v295 = outputWindow.document;
    JAM.call(v295.write, v295, [addReturns(alignment.getAlignedM())], JAM.policy.p24);
    var v297 = outputWindow.document;
    JAM.call(v297.write, v297, ["\n"], JAM.policy.p17);
    var v298 = outputWindow.document;
    JAM.call(v298.write, v298, ["\n"], JAM.policy.p17);
    var v299 = outputWindow.document;
    JAM.call(v299.write, v299, [">" + titleTwo$$1 + "\n"], JAM.policy.p24);
    var v301 = outputWindow.document;
    JAM.call(v301.write, v301, [addReturns(alignment.getAlignedN())], JAM.policy.p24);
    var v303 = outputWindow.document;
    JAM.call(v303.write, v303, ["\n\n"], JAM.policy.p17);
    var v304 = outputWindow.document;
    JAM.call(v304.write, v304, ["Alignment score: " + alignment.score + "\n\n"], JAM.policy.p24);
  }
  return;
}
function getScore(r1$$1, r2) {
  var v306 = this.scoringMatrix;
  return JAM.call(v306.scoringMatrix_getScore, v306, [r1$$1, r2], JAM.policy.p33);
}
function setScoreSetParam(scoringMatrix, gapPenalty$$1, beginGapPenalty$$1, endGapPenalty$$1) {
  this.scoringMatrix = scoringMatrix;
  this.gap = gapPenalty$$1;
  this.beginGap = beginGapPenalty$$1;
  this.endGap = endGapPenalty$$1;
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
  if (r1$$2 == r2$$1) {
    return this.match;
  } else {
    return this.mismatch;
  }
  return;
}
function ScoringMatrix() {
  return;
}
function setMismatch(mismatchScore$$1) {
  this.mismatch = mismatchScore$$1;
  return;
}
function setMatch(matchScore$$1) {
  this.match = matchScore$$1;
  return;
}
function Identity() {
  return;
}
function align() {
  if (this.M.length == 0) {
    var j$$10 = 1;
    var v313 = j$$10 <= this.N.length;
    for (;v313;) {
      var v308 = this.alignedM;
      JAM.call(v308.push, v308, ["-"], JAM.policy.p17);
      var v309 = this.alignedN;
      JAM.call(v309.push, v309, [this.N[j$$10 - 1]], JAM.policy.p24);
      this.score = this.score + this.scoreSet.gap;
      j$$10++;
      v313 = j$$10 <= this.N.length;
    }
  } else {
    if (this.N.length == 0) {
      j$$10 = 1;
      var v319 = j$$10 <= this.M.length;
      for (;v319;) {
        var v314 = this.alignedN;
        JAM.call(v314.push, v314, ["-"], JAM.policy.p17);
        var v315 = this.alignedM;
        JAM.call(v315.push, v315, [this.M[j$$10 - 1]], JAM.policy.p24);
        this.score = this.score + this.scoreSet.gap;
        j$$10++;
        v319 = j$$10 <= this.M.length;
      }
    } else {
      var v760 = this.M.length == 0;
      if (v760) {
        v760 = this.N.length == 0;
      }
      if (v760) {
      } else {
        JAM.call(this.path, this, [0, 0, this.M.length, this.N.length], JAM.policy.p20);
      }
    }
  }
  return;
}
function path(i1, j1, i2, j2) {
  var v763 = i1 + 1 == i2;
  if (!v763) {
    v763 = j1 == j2;
  }
  if (v763) {
    var subM = new Array;
    var subN = new Array;
    var i$$11 = i1 + 1;
    var v326 = i$$11 <= i2;
    for (;v326;) {
      JAM.call(subM.push, subM, [this.M[i$$11 - 1]], JAM.policy.p24);
      i$$11++;
      v326 = i$$11 <= i2;
    }
    var j$$11 = j1 + 1;
    var v328 = j$$11 <= j2;
    for (;v328;) {
      JAM.call(subN.push, subN, [this.N[j$$11 - 1]], JAM.policy.p24);
      j$$11++;
      v328 = j$$11 <= j2;
    }
    var alignment$$1 = new AlignPairQuad;
    subScoreSet = new ScoreSet;
    if (j1 == j2) {
      if (j1 == 0) {
        JAM.call(subScoreSet.setScoreSetParam, subScoreSet, [this.scoreSet.scoringMatrix, this.scoreSet.beginGap, this.scoreSet.beginGap, this.scoreSet.beginGap], JAM.policy.p33);
      } else {
        if (j1 == this.N.length) {
          JAM.call(subScoreSet.setScoreSetParam, subScoreSet, [this.scoreSet.scoringMatrix, this.scoreSet.endGap, this.scoreSet.endGap, this.scoreSet.endGap], JAM.policy.p33);
        } else {
          JAM.call(subScoreSet.setScoreSetParam, subScoreSet, [this.scoreSet.scoringMatrix, this.scoreSet.gap, this.scoreSet.gap, this.scoreSet.gap], JAM.policy.p33);
        }
      }
    } else {
      JAM.call(subScoreSet.setScoreSetParam, subScoreSet, [this.scoreSet.scoringMatrix, this.scoreSet.gap, this.scoreSet.beginGap, this.scoreSet.endGap], JAM.policy.p33);
      subScoreSet.useBeginGapTop = false;
      subScoreSet.useBeginGapLeft = false;
      subScoreSet.useEndGapBottom = false;
      subScoreSet.useEndGapRight = false;
      if (i1 == 0) {
        subScoreSet.useBeginGapTop = true;
      }
      if (j1 == 0) {
        subScoreSet.useBeginGapLeft = true;
      }
      if (j2 == this.N.length) {
        subScoreSet.useEndGapRight = true;
      }
      if (i2 == this.M.length) {
        subScoreSet.useEndGapBottom = true;
      }
    }
    JAM.call(alignment$$1.initializeMatrix, alignment$$1, [subM, subN, subScoreSet], JAM.policy.p33);
    alignment$$1.fillMatrix();
    alignment$$1.align();
    var v352 = this.alignedM;
    JAM.call(v352.push, v352, [alignment$$1.getAlignedM()], JAM.policy.p24);
    var v354 = this.alignedN;
    JAM.call(v354.push, v354, [alignment$$1.getAlignedN()], JAM.policy.p24);
    this.score = this.score + alignment$$1.score;
  } else {
    var middle = JAM.call(Math.floor, Math, [(i1 + i2) / 2], JAM.policy.p24);
    var v359 = this.Sn;
    introspect(JAM.policy.p6) {
      v359[j1] = 0;
    }
    if (i1 == 0) {
      j$$11 = j1 + 1;
      var v361 = j$$11 <= j2;
      for (;v361;) {
        var v360 = this.Sn;
        var v788 = this.Sn[j$$11 - 1];
        var v789 = this.scoreSet.beginGap;
        introspect(JAM.policy.p6) {
          v360[j$$11] = v788 - v789;
        }
        j$$11++;
        v361 = j$$11 <= j2;
      }
    } else {
      j$$11 = j1 + 1;
      var v363 = j$$11 <= j2;
      for (;v363;) {
        var v362 = this.Sn;
        var v790 = this.Sn[j$$11 - 1];
        var v791 = this.scoreSet.gap;
        introspect(JAM.policy.p6) {
          v362[j$$11] = v790 - v791;
        }
        j$$11++;
        v363 = j$$11 <= j2;
      }
    }
    var diag;
    var left$$1;
    i$$11 = i1 + 1;
    var v386 = i$$11 <= middle;
    for (;v386;) {
      diag = this.Sn[j1];
      if (j1 == 0) {
        left$$1 = this.Sn[j1] - this.scoreSet.beginGap;
      } else {
        left$$1 = this.Sn[j1] - this.scoreSet.gap;
      }
      var v371 = this.Sn;
      introspect(JAM.policy.p6) {
        v371[j1] = left$$1;
      }
      j$$11 = j1 + 1;
      var v385 = j$$11 <= j2;
      for (;v385;) {
        var v796 = j$$11 == this.N.length;
        if (v796) {
          v796 = i$$11 == this.M.length;
        }
        if (v796) {
          var v372 = this.Sn[j$$11] - this.scoreSet.endGap;
          var v799 = left$$1 - this.scoreSet.endGap;
          var v1270 = this.scoreSet;
          left$$1 = JAM.call(Math.max, Math, [v372, JAM.call(Math.max, Math, [v799, diag + JAM.call(v1270.getScore, v1270, [this.M[i$$11 - 1], this.N[j$$11 - 1]], JAM.policy.p33)], JAM.policy.p33)], JAM.policy.p23);
        } else {
          if (i$$11 == this.M.length) {
            var v374 = this.Sn[j$$11] - this.scoreSet.gap;
            var v804 = left$$1 - this.scoreSet.endGap;
            var v1274 = this.scoreSet;
            left$$1 = JAM.call(Math.max, Math, [v374, JAM.call(Math.max, Math, [v804, diag + JAM.call(v1274.getScore, v1274, [this.M[i$$11 - 1], this.N[j$$11 - 1]], JAM.policy.p33)], JAM.policy.p33)], JAM.policy.p23);
          } else {
            if (j$$11 == this.N.length) {
              var v376 = this.Sn[j$$11] - this.scoreSet.endGap;
              var v809 = left$$1 - this.scoreSet.gap;
              var v1278 = this.scoreSet;
              left$$1 = JAM.call(Math.max, Math, [v376, JAM.call(Math.max, Math, [v809, diag + JAM.call(v1278.getScore, v1278, [this.M[i$$11 - 1], this.N[j$$11 - 1]], JAM.policy.p33)], JAM.policy.p33)], JAM.policy.p23);
            } else {
              var v378 = this.Sn[j$$11] - this.scoreSet.gap;
              var v813 = left$$1 - this.scoreSet.gap;
              var v1282 = this.scoreSet;
              left$$1 = JAM.call(Math.max, Math, [v378, JAM.call(Math.max, Math, [v813, diag + JAM.call(v1282.getScore, v1282, [this.M[i$$11 - 1], this.N[j$$11 - 1]], JAM.policy.p33)], JAM.policy.p33)], JAM.policy.p23);
            }
          }
        }
        diag = this.Sn[j$$11];
        var v384 = this.Sn;
        introspect(JAM.policy.p6) {
          v384[j$$11] = left$$1;
        }
        j$$11++;
        v385 = j$$11 <= j2;
      }
      i$$11++;
      v386 = i$$11 <= middle;
    }
    var v387 = this.Sp;
    introspect(JAM.policy.p6) {
      v387[j2] = 0;
    }
    if (i2 == this.M.length) {
      j$$11 = j2 - 1;
      var v389 = j$$11 >= j1;
      for (;v389;) {
        var v388 = this.Sp;
        var v816 = this.Sp[j$$11 + 1];
        var v817 = this.scoreSet.endGap;
        introspect(JAM.policy.p6) {
          v388[j$$11] = v816 - v817;
        }
        j$$11--;
        v389 = j$$11 >= j1;
      }
    } else {
      j$$11 = j2 - 1;
      var v391 = j$$11 >= j1;
      for (;v391;) {
        var v390 = this.Sp;
        var v818 = this.Sp[j$$11 + 1];
        var v819 = this.scoreSet.gap;
        introspect(JAM.policy.p6) {
          v390[j$$11] = v818 - v819;
        }
        j$$11--;
        v391 = j$$11 >= j1;
      }
    }
    var right$$1;
    i$$11 = i2 - 1;
    var v414 = i$$11 >= middle;
    for (;v414;) {
      diag = this.Sp[j2];
      if (j2 == this.N.length) {
        right$$1 = this.Sp[j2] - this.scoreSet.endGap;
      } else {
        right$$1 = this.Sp[j2] - this.scoreSet.gap;
      }
      var v399 = this.Sp;
      introspect(JAM.policy.p6) {
        v399[j2] = right$$1;
      }
      j$$11 = j2 - 1;
      var v413 = j$$11 >= j1;
      for (;v413;) {
        var v825 = j$$11 == 0;
        if (v825) {
          v825 = i$$11 == 0;
        }
        if (v825) {
          var v400 = this.Sp[j$$11] - this.scoreSet.beginGap;
          var v828 = right$$1 - this.scoreSet.beginGap;
          var v1286 = this.scoreSet;
          right$$1 = JAM.call(Math.max, Math, [v400, JAM.call(Math.max, Math, [v828, diag + JAM.call(v1286.getScore, v1286, [this.M[i$$11 + 1 - 1], this.N[j$$11 + 1 - 1]], JAM.policy.p33)], JAM.policy.p33)], JAM.policy.p23);
        } else {
          if (j$$11 == 0) {
            var v402 = this.Sp[j$$11] - this.scoreSet.beginGap;
            var v832 = right$$1 - this.scoreSet.gap;
            var v1290 = this.scoreSet;
            right$$1 = JAM.call(Math.max, Math, [v402, JAM.call(Math.max, Math, [v832, diag + JAM.call(v1290.getScore, v1290, [this.M[i$$11 + 1 - 1], this.N[j$$11 + 1 - 1]], JAM.policy.p33)], JAM.policy.p33)], JAM.policy.p23);
          } else {
            if (i$$11 == 0) {
              var v404 = this.Sp[j$$11] - this.scoreSet.gap;
              var v836 = right$$1 - this.scoreSet.beginGap;
              var v1294 = this.scoreSet;
              right$$1 = JAM.call(Math.max, Math, [v404, JAM.call(Math.max, Math, [v836, diag + JAM.call(v1294.getScore, v1294, [this.M[i$$11 + 1 - 1], this.N[j$$11 + 1 - 1]], JAM.policy.p33)], JAM.policy.p33)], JAM.policy.p23);
            } else {
              var v406 = this.Sp[j$$11] - this.scoreSet.gap;
              var v840 = right$$1 - this.scoreSet.gap;
              var v1298 = this.scoreSet;
              right$$1 = JAM.call(Math.max, Math, [v406, JAM.call(Math.max, Math, [v840, diag + JAM.call(v1298.getScore, v1298, [this.M[i$$11 + 1 - 1], this.N[j$$11 + 1 - 1]], JAM.policy.p33)], JAM.policy.p33)], JAM.policy.p23);
            }
          }
        }
        diag = this.Sp[j$$11];
        var v412 = this.Sp;
        introspect(JAM.policy.p6) {
          v412[j$$11] = right$$1;
        }
        j$$11--;
        v413 = j$$11 >= j1;
      }
      i$$11--;
      v414 = i$$11 >= middle;
    }
    var maxValue = this.Sn[j1] + this.Sp[j1];
    var maxJ = j1;
    j$$11 = j1 + 1;
    var v420 = j$$11 <= j2;
    for (;v420;) {
      if (this.Sn[j$$11] + this.Sp[j$$11] >= maxValue) {
        maxValue = this.Sn[j$$11] + this.Sp[j$$11];
        maxJ = j$$11;
      }
      j$$11++;
      v420 = j$$11 <= j2;
    }
    JAM.call(this.path, this, [i1, j1, middle, maxJ], JAM.policy.p33);
    JAM.call(this.path, this, [middle, maxJ, i2, j2], JAM.policy.p23);
  }
  return;
}
function getAlignedM() {
  var v422 = this.alignedM;
  return JAM.call(v422.join, v422, [""], JAM.policy.p17);
}
function getAlignedN() {
  var v423 = this.alignedN;
  return JAM.call(v423.join, v423, [""], JAM.policy.p17);
}
function setAlignParam(M, N, scoreSet$$1) {
  this.M = M;
  this.N = N;
  var v1575 = new Array;
  this.alignedM = v1575;
  var v1576 = new Array;
  this.alignedN = v1576;
  this.scoreSet = scoreSet$$1;
  var v1577 = new Array(this.N.length);
  this.Sn = v1577;
  var v1578 = new Array(this.N.length);
  this.Sp = v1578;
  this.score = 0;
  return;
}
function AlignPairLinear() {
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
  var v1579 = new Array(this.M.length + 1);
  this.nodes = v1579;
  var i$$12 = 0;
  var v430 = i$$12 < this.nodes.length;
  for (;v430;) {
    var v427 = this.nodes;
    var v1580 = new Array(this.N.length + 1);
    v427[i$$12] = v1580;
    var j$$12 = 0;
    var v429 = j$$12 < this.nodes[i$$12].length;
    for (;v429;) {
      var v428 = this.nodes[i$$12];
      var v1581 = new Node;
      v428[j$$12] = v1581;
      j$$12++;
      v429 = j$$12 < this.nodes[i$$12].length;
    }
    i$$12++;
    v430 = i$$12 < this.nodes.length;
  }
  this.nodes[0][0].value = 0;
  i$$12 = 1;
  var v437 = i$$12 < this.nodes.length;
  for (;v437;) {
    if (this.scoreSet.useBeginGapLeft) {
      this.nodes[i$$12][0].value = this.nodes[i$$12 - 1][0].value - this.scoreSet.beginGap;
    } else {
      this.nodes[i$$12][0].value = this.nodes[i$$12 - 1][0].value - this.scoreSet.gap;
    }
    this.nodes[i$$12][0].tracebackI = i$$12 - 1;
    this.nodes[i$$12][0].tracebackJ = 0;
    i$$12++;
    v437 = i$$12 < this.nodes.length;
  }
  j$$12 = 1;
  var v443 = j$$12 < this.nodes[0].length;
  for (;v443;) {
    if (this.scoreSet.useBeginGapTop) {
      this.nodes[0][j$$12].value = this.nodes[0][j$$12 - 1].value - this.scoreSet.beginGap;
    } else {
      this.nodes[0][j$$12].value = this.nodes[0][j$$12 - 1].value - this.scoreSet.gap;
    }
    this.nodes[0][j$$12].tracebackI = 0;
    this.nodes[0][j$$12].tracebackJ = j$$12 - 1;
    j$$12++;
    v443 = j$$12 < this.nodes[0].length;
  }
  return;
}
function dumpMatrix() {
  var v444 = outputWindow.document;
  JAM.call(v444.write, v444, ["Dynamic programming matrix i=" + this.nodes.length + " and j=" + this.nodes[0].length], JAM.policy.p24);
  var v446 = outputWindow.document;
  JAM.call(v446.write, v446, ["\n"], JAM.policy.p17);
  var i$$13 = 0;
  var v457 = i$$13 < this.nodes.length;
  for (;v457;) {
    var j$$13 = 0;
    var v455 = j$$13 < this.nodes[i$$13].length;
    for (;v455;) {
      var traceI = this.nodes[i$$13][j$$13].tracebackI;
      var traceJ = this.nodes[i$$13][j$$13].tracebackJ;
      if (traceI == undefined) {
        traceI = "u";
      }
      if (traceJ == undefined) {
        traceJ = "u";
      }
      var output = "(" + i$$13 + "," + j$$13 + ")[" + traceI + "," + traceJ + "]=" + this.nodes[i$$13][j$$13].value;
      var v453 = outputWindow.document;
      JAM.call(v453.write, v453, [rightNum(output, "", 20, " ")], JAM.policy.p24);
      j$$13++;
      v455 = j$$13 < this.nodes[i$$13].length;
    }
    var v456 = outputWindow.document;
    JAM.call(v456.write, v456, ["\n"], JAM.policy.p17);
    i$$13++;
    v457 = i$$13 < this.nodes.length;
  }
  var v458 = outputWindow.document;
  JAM.call(v458.write, v458, ["\n"], JAM.policy.p17);
  return;
}
function fillMatrix() {
  var i$$14 = 1;
  var v504 = i$$14 < this.nodes.length;
  for (;v504;) {
    var j$$14 = 1;
    var v503 = j$$14 < this.nodes[0].length;
    for (;v503;) {
      var a;
      var b;
      var c;
      var v891 = i$$14 == this.nodes.length - 1;
      if (v891) {
        v891 = j$$14 == this.nodes[0].length - 1;
      }
      if (v891) {
        if (this.scoreSet.useEndGapRight) {
          a = this.nodes[i$$14 - 1][j$$14].value - this.scoreSet.endGap;
        } else {
          a = this.nodes[i$$14 - 1][j$$14].value - this.scoreSet.gap;
        }
        if (this.scoreSet.useEndGapBottom) {
          b = this.nodes[i$$14][j$$14 - 1].value - this.scoreSet.endGap;
        } else {
          b = this.nodes[i$$14][j$$14 - 1].value - this.scoreSet.gap;
        }
      } else {
        if (i$$14 == this.nodes.length - 1) {
          a = this.nodes[i$$14 - 1][j$$14].value - this.scoreSet.gap;
          if (this.scoreSet.useEndGapBottom) {
            b = this.nodes[i$$14][j$$14 - 1].value - this.scoreSet.endGap;
          } else {
            b = this.nodes[i$$14][j$$14 - 1].value - this.scoreSet.gap;
          }
        } else {
          if (j$$14 == this.nodes[0].length - 1) {
            if (this.scoreSet.useEndGapRight) {
              a = this.nodes[i$$14 - 1][j$$14].value - this.scoreSet.endGap;
            } else {
              a = this.nodes[i$$14 - 1][j$$14].value - this.scoreSet.gap;
            }
            b = this.nodes[i$$14][j$$14 - 1].value - this.scoreSet.gap;
          } else {
            a = this.nodes[i$$14 - 1][j$$14].value - this.scoreSet.gap;
            b = this.nodes[i$$14][j$$14 - 1].value - this.scoreSet.gap;
          }
        }
      }
      var v490 = this.nodes[i$$14 - 1][j$$14 - 1].value;
      var v923 = this.scoreSet;
      c = v490 + JAM.call(v923.getScore, v923, [this.M[i$$14 - 1], this.N[j$$14 - 1]], JAM.policy.p33);
      var v926 = a >= b;
      if (v926) {
        v926 = a >= c;
      }
      if (v926) {
        this.nodes[i$$14][j$$14].value = a;
        this.nodes[i$$14][j$$14].tracebackI = i$$14 - 1;
        this.nodes[i$$14][j$$14].tracebackJ = j$$14;
      } else {
        var v930 = b >= c;
        if (v930) {
          v930 = b >= a;
        }
        if (v930) {
          this.nodes[i$$14][j$$14].value = b;
          this.nodes[i$$14][j$$14].tracebackI = i$$14;
          this.nodes[i$$14][j$$14].tracebackJ = j$$14 - 1;
        } else {
          this.nodes[i$$14][j$$14].value = c;
          this.nodes[i$$14][j$$14].tracebackI = i$$14 - 1;
          this.nodes[i$$14][j$$14].tracebackJ = j$$14 - 1;
        }
      }
      j$$14++;
      v503 = j$$14 < this.nodes[0].length;
    }
    i$$14++;
    v504 = i$$14 < this.nodes.length;
  }
  this.score = this.nodes[this.nodes.length - 1][this.nodes[0].length - 1].value;
  return;
}
function alignQuad() {
  var v1582 = new Array;
  this.alignedM = v1582;
  var v1583 = new Array;
  this.alignedN = v1583;
  var currentI = this.nodes.length - 1;
  var currentJ = this.nodes[0].length - 1;
  var currentNode = this.nodes[this.nodes.length - 1][this.nodes[0].length - 1];
  var v946 = currentNode.tracebackI != undefined;
  if (v946) {
    v946 = currentNode.tracebackJ != undefined;
  }
  var v524 = v946;
  for (;v524;) {
    var v947 = currentNode.tracebackI == currentI - 1;
    if (v947) {
      v947 = currentNode.tracebackJ == currentJ - 1;
    }
    if (v947) {
      var v510 = this.alignedM;
      JAM.call(v510.push, v510, [this.M.pop()], JAM.policy.p24);
      var v512 = this.alignedN;
      JAM.call(v512.push, v512, [this.N.pop()], JAM.policy.p24);
    } else {
      if (currentNode.tracebackJ == currentJ - 1) {
        var v514 = this.alignedM;
        JAM.call(v514.push, v514, ["-"], JAM.policy.p17);
        var v515 = this.alignedN;
        JAM.call(v515.push, v515, [this.N.pop()], JAM.policy.p24);
      } else {
        var v517 = this.alignedM;
        JAM.call(v517.push, v517, [this.M.pop()], JAM.policy.p24);
        var v519 = this.alignedN;
        JAM.call(v519.push, v519, ["-"], JAM.policy.p17);
      }
    }
    currentI = currentNode.tracebackI;
    currentJ = currentNode.tracebackJ;
    currentNode = this.nodes[currentNode.tracebackI][currentNode.tracebackJ];
    var v956 = currentNode.tracebackI != undefined;
    if (v956) {
      v956 = currentNode.tracebackJ != undefined;
    }
    v524 = v956;
  }
  var v1584 = this.alignedM.reverse();
  this.alignedM = v1584;
  var v1585 = this.alignedN.reverse();
  this.alignedN = v1585;
  return;
}
function getAlignedM() {
  var v527 = this.alignedM;
  return JAM.call(v527.join, v527, [""], JAM.policy.p17);
}
function getAlignedN() {
  var v528 = this.alignedN;
  return JAM.call(v528.join, v528, [""], JAM.policy.p17);
}
function AlignPairQuad() {
  return;
}
new ScoreSet;
ScoreSet.prototype.getScore = getScore;
ScoreSet.prototype.setScoreSetParam = setScoreSetParam;
new ScoringMatrix;
ScoringMatrix.prototype.scoringMatrix_getScore = scoringMatrix_getScore;
var v532 = Identity;
var v1586 = new ScoringMatrix;
v532.prototype = v1586;
Identity.prototype.setMismatch = setMismatch;
Identity.prototype.setMatch = setMatch;
new AlignPairLinear;
AlignPairLinear.prototype.align = align;
AlignPairLinear.prototype.path = path;
AlignPairLinear.prototype.setAlignParam = setAlignParam;
AlignPairLinear.prototype.getAlignedM = getAlignedM;
AlignPairLinear.prototype.getAlignedN = getAlignedN;
new AlignPairQuad;
AlignPairQuad.prototype.initializeMatrix = initializeMatrix;
AlignPairQuad.prototype.fillMatrix = fillMatrix;
AlignPairQuad.prototype.align = alignQuad;
AlignPairQuad.prototype.getAlignedM = getAlignedM;
AlignPairQuad.prototype.getAlignedN = getAlignedN;
AlignPairQuad.prototype.dumpMatrix = dumpMatrix;
JAM.set(document, "onload", v2);
JAM.set(JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p17), "onclick", v3);
JAM.set(JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p17), "onclick", v4)
