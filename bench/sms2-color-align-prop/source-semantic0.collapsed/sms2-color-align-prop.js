function v4() {
  document.forms[0].elements[0].value = " ";
  return;
}
function v3() {
  try {
    colorAlignProp();
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
  var v11 = i$$1 < arrayOfTitles.length;
  for (;v11;) {
    var v768 = arrayOfTitles[i$$1];
    var v589 = JAM.call(v768.search, v768, [/\S/], JAM.policy.p16) == -1;
    if (!v589) {
      var v769 = arrayOfSequences[i$$1];
      v589 = JAM.call(v769.search, v769, [/\S/], JAM.policy.p16) == -1;
    }
    var v346 = v589;
    if (!v346) {
      v346 = arrayOfSequences[i$$1].length != lengthOfAlign;
    }
    if (v346) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    v11 = i$$1 < arrayOfTitles.length;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v770 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p16) == -1;
  if (!v770) {
    v770 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p16) == -1;
  }
  var v703 = v770;
  if (!v703) {
    v703 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p16) == -1;
  }
  var v592 = v703;
  if (!v592) {
    v592 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p16) == -1;
  }
  var v348 = v592;
  if (!v348) {
    v348 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p16) == -1;
  }
  if (v348) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v595 = formElement.value;
  if (JAM.call(v595.search, v595, [/\S/], JAM.policy.p16) == -1) {
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
  var v16 = z$$2 < arrayOfPatterns.length;
  for (;v16;) {
    var v596 = arrayOfPatterns[z$$2];
    if (JAM.call(v596.search, v596, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p16) == -1) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    if (moreExpressionCheck(arrayOfPatterns[z$$2]) == false) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    v16 = z$$2 < arrayOfPatterns.length;
  }
  var geneticCodeMatchResult = new Array(arrayOfPatterns.length);
  var geneticCodeMatchExp = new Array(arrayOfPatterns.length);
  var j = 0;
  var v22 = j < arrayOfPatterns.length;
  for (;v22;) {
    var v598 = arrayOfPatterns[j];
    var v19 = JAM.call(v598.match, v598, [/\/.+\//], JAM.policy.p16) + "gi";
    if (JAM.isEval(eval)) {
      var v912 = eval("introspect(JAM.policy.pFull) { " + v19 + " }")
    } else {
      var v912 = JAM.call(eval, null, [v19])
    }
    geneticCodeMatchExp[j] = v912;
    var v356 = arrayOfPatterns[j];
    var v913 = JAM.call(v356.match, v356, [/=[a-zA-Z\*]/], JAM.policy.p16).toString();
    geneticCodeMatchResult[j] = v913;
    var v21 = geneticCodeMatchResult[j];
    var v914 = JAM.call(v21.replace, v21, [/=/g, ""], JAM.policy.p15);
    geneticCodeMatchResult[j] = v914;
    j++;
    v22 = j < arrayOfPatterns.length;
  }
  var i$$2 = 0;
  var v29 = i$$2 <= testSequence.length - 3;
  for (;v29;) {
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, i$$2 + 3], JAM.policy.p15);
    j = 0;
    var v27 = j < geneticCodeMatchExp.length;
    for (;v27;) {
      if (JAM.call(codon.search, codon, [geneticCodeMatchExp[j]], JAM.policy.p17) != -1) {
        if (oneMatch == true) {
          alert("Genetic code error: more than one amino acid is coded by the codon: " + codon + ".");
          return false;
        }
        oneMatch = true;
      }
      j++;
      v27 = j < geneticCodeMatchExp.length;
    }
    if (oneMatch == false) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    v29 = i$$2 <= testSequence.length - 3;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v31 = z$$3 < arrayOfPatterns$$1.length;
  for (;v31;) {
    var v602 = arrayOfPatterns$$1[z$$3];
    if (JAM.call(v602.search, v602, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p16) != -1) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    v31 = z$$3 < arrayOfPatterns$$1.length;
  }
  var i$$3 = 0;
  var v35 = i$$3 < arrayOfPatterns$$1.length;
  for (;v35;) {
    var re = new RegExp("[" + arrayOfPatterns$$1[i$$3] + "]", "gi");
    var j$$1 = i$$3 + 1;
    var v34 = j$$1 < arrayOfPatterns$$1.length;
    for (;v34;) {
      var v604 = arrayOfPatterns$$1[j$$1];
      if (JAM.call(v604.search, v604, [re], JAM.policy.p17) != -1) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      v34 = j$$1 < arrayOfPatterns$$1.length;
    }
    i$$3++;
    v35 = i$$3 < arrayOfPatterns$$1.length;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v38 = z$$4 < arrayOfPatterns$$2.length;
  for (;v38;) {
    var v605 = arrayOfPatterns$$2[z$$4];
    if (JAM.call(v605.search, v605, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p16) == -1) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    if (moreExpressionCheck(arrayOfPatterns$$2[z$$4]) == false) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    v38 = z$$4 < arrayOfPatterns$$2.length;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v706 = getSequenceFromFasta(text$$7);
  if (JAM.call(v706.replace, v706, [/[^A-Za-z]/g, ""], JAM.policy.p15).length > maxInput) {
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
  var v43 = outputWindow.document;
  JAM.call(v43.write, v43, ["</form>"], JAM.policy.p11);
  return true;
}
function closePre() {
  var v44 = outputWindow.document;
  JAM.call(v44.write, v44, ["</div>"], JAM.policy.p11);
  var v45 = outputWindow.document;
  JAM.call(v45.write, v45, ["</pre>\n"], JAM.policy.p11);
  return;
}
function closeTextArea() {
  var v46 = outputWindow.document;
  JAM.call(v46.write, v46, ["</textarea>"], JAM.policy.p11);
  return true;
}
function closeWindow() {
  var v47 = outputWindow.document;
  JAM.call(v47.write, v47, ["</body>\n</html>\n"], JAM.policy.p11);
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
  var v51 = i$$4 < alignArray.length;
  for (;v51;) {
    var v608 = alignArray[i$$4];
    if (JAM.call(v608.search, v608, [/[^\s]+\s/], JAM.policy.p16) == -1) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    v51 = i$$4 < alignArray.length;
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
    var v53 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p17);
    for (;v53;) {
      JAM.call(arrayOfFasta.push, arrayOfFasta, [matchArray[0]], JAM.policy.p17);
      v53 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p17);
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
  var v70 = j$$2 < arrayOfPatterns$$3.length;
  for (;v70;) {
    var v609 = arrayOfPatterns$$3[j$$2];
    var v69 = JAM.call(v609.match, v609, [/\/.+\//], JAM.policy.p16) + "gi";
    if (JAM.isEval(eval)) {
      var v915 = eval("introspect(JAM.policy.pFull) { " + v69 + " }")
    } else {
      var v915 = JAM.call(eval, null, [v69])
    }
    geneticCodeMatchExp$$1[j$$2] = v915;
    j$$2++;
    v70 = j$$2 < arrayOfPatterns$$3.length;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var geneticCodeMatchResult$$1 = new Array(arrayOfPatterns$$4.length);
  var j$$3 = 0;
  var v74 = j$$3 < arrayOfPatterns$$4.length;
  for (;v74;) {
    var v406 = arrayOfPatterns$$4[j$$3];
    var v916 = JAM.call(v406.match, v406, [/=[a-zA-Z\*]/], JAM.policy.p16).toString();
    geneticCodeMatchResult$$1[j$$3] = v916;
    var v73 = geneticCodeMatchResult$$1[j$$3];
    var v917 = JAM.call(v73.replace, v73, [/=/g, ""], JAM.policy.p15);
    geneticCodeMatchResult$$1[j$$3] = v917;
    j$$3++;
    v74 = j$$3 < arrayOfPatterns$$4.length;
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
  var v95 = j$$4 < lengthOut;
  for (;v95;) {
    tempNum = JAM.call(Math.floor, Math, [Math.random() * components.length], JAM.policy.p16);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p17);
    j$$4++;
    v95 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p11);
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
  var v883 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p16) != -1;
  if (!v883) {
    v883 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p16) != -1;
  }
  var v874 = v883;
  if (!v874) {
    v874 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p16) != -1;
  }
  var v865 = v874;
  if (!v865) {
    v865 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p16) != -1;
  }
  var v852 = v865;
  if (!v852) {
    v852 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p16) != -1;
  }
  var v832 = v852;
  if (!v832) {
    v832 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p16) != -1;
  }
  var v812 = v832;
  if (!v812) {
    v812 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p16) != -1;
  }
  var v773 = v812;
  if (!v773) {
    v773 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p16) != -1;
  }
  var v707 = v773;
  if (!v707) {
    v707 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p16) != -1;
  }
  var v611 = v707;
  if (!v611) {
    v611 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p16) != -1;
  }
  var v434 = v611;
  if (!v434) {
    v434 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p16) != -1;
  }
  if (v434) {
    return false;
  }
  return true;
}
function openForm() {
  var v100 = outputWindow.document;
  JAM.call(v100.write, v100, ['<form action="">\n'], JAM.policy.p11);
  return true;
}
function openPre() {
  var v101 = outputWindow.document;
  JAM.call(v101.write, v101, ["<pre>"], JAM.policy.p11);
  var v102 = outputWindow.document;
  JAM.call(v102.write, v102, ['<div class="pre">'], JAM.policy.p11);
  return;
}
function openTextArea() {
  var v103 = outputWindow.document;
  JAM.call(v103.write, v103, ['<br /><textarea rows="6" cols="61">\n'], JAM.policy.p11);
  return true;
}
function openWindow(title$$5) {
  _openWindow(title$$5);
  return;
}
function _openWindow(title$$6) {
  var isColor = true;
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  outputWindow.focus();
  var v104 = outputWindow.document;
  JAM.call(v104.write, v104, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n'], JAM.policy.p17);
  if (isColor) {
    var v106 = outputWindow.document;
    JAM.call(v106.write, v106, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; background-color: #66FF00}\n" + 
    "span.two, td.two {color: #000000; background-color: #FFFF66}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n" + "td.many {color: #000000}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + 
    "</style>\n"], JAM.policy.p17);
  } else {
    var v108 = outputWindow.document;
    JAM.call(v108.write, v108, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n" + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "td.many {color: #000000; background-color: #FFFFFF}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"], JAM.policy.p17);
  }
  var v110 = outputWindow.document;
  JAM.call(v110.write, v110, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$6 + " results</div>\n"], JAM.policy.p17);
  outputWindow.status = "Please Wait.";
  return;
}
function openWindowAlign(title$$7) {
  _openWindowAlign(title$$7, true);
  return;
}
function _openWindowAlign(title$$8, isBackground) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  outputWindow.focus();
  var v112 = outputWindow.document;
  JAM.call(v112.write, v112, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n'], JAM.policy.p17);
  if (isBackground) {
    var v114 = outputWindow.document;
    JAM.call(v114.write, v114, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #FFFFFF; background-color: #000000}\n" + "span.sim {color: #FFFFFF; background-color: #666666}\n" + 
    "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n" + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n" + "span.c, span.m {color: #000000; background-color: #FFFF00}\n" + "span.s, span.t {color: #000000; background-color: #66FF00}\n" + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n" + "span.d, span.e {color: #000000; background-color: #0066FF}\n" + "span.n, span.q {color: #000000; background-color: #996633}\n" + "span.p {color: #000000; background-color: #FF99FF}\n" + 
    "</style>\n"], JAM.policy.p17);
  } else {
    var v116 = outputWindow.document;
    JAM.call(v116.write, v116, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n" + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n" + 
    "span.diff {color: #999999; background-color: #FFFFFF}\n" + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n" + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n" + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n" + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n" + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n" + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n" + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n" + 
    "span.p {color: #00FFCC; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"], JAM.policy.p17);
  }
  var v118 = outputWindow.document;
  JAM.call(v118.write, v118, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$8 + " results</div>\n"], JAM.policy.p17);
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
    dnaSequence$$1 = JAM.call(tempDnaArray.join, tempDnaArray, [""], JAM.policy.p11);
  }
  return dnaSequence$$1;
}
function rightNum(theNumber, sequenceToAppend, lengthOfColumn, tabIn) {
  var j$$5 = 0;
  var tempString = "";
  theNumber = theNumber.toString();
  j$$5 = theNumber.length;
  var v121 = j$$5 < lengthOfColumn;
  for (;v121;) {
    tempString = tempString + " ";
    j$$5++;
    v121 = j$$5 < lengthOfColumn;
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
  if (JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p12) != 2489.824) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  if (JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p12) != 2489.8) {
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
  var v718 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p16) == -1;
  if (!v718) {
    v718 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p16) == -1;
  }
  var v622 = v718;
  if (!v622) {
    v622 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p16) == -1;
  }
  var v449 = v622;
  if (!v449) {
    v449 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p16) == -1;
  }
  if (v449) {
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
  return true;
}
function verifyProtein(proteinSequence) {
  if (JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p16) != -1) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v721 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p16) == -1;
  if (!v721) {
    v721 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p16) == -1;
  }
  var v625 = v721;
  if (!v625) {
    v625 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p16) == -1;
  }
  var v454 = v625;
  if (!v454) {
    v454 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p16) == -1;
  }
  if (v454) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v724 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p16) == -1;
  if (!v724) {
    v724 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p16) == -1;
  }
  var v628 = v724;
  if (!v628) {
    v628 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p16) == -1;
  }
  var v455 = v628;
  if (!v455) {
    v455 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p16) == -1;
  }
  if (v455) {
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
  var v727 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p16) == -1;
  if (!v727) {
    v727 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p16) == -1;
  }
  var v631 = v727;
  if (!v631) {
    v631 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p16) == -1;
  }
  var v457 = v631;
  if (!v457) {
    v457 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p16) == -1;
  }
  if (v457) {
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
  var v148 = i$$5 < stopBase;
  for (;v148;) {
    lineOfText = rightNum(i$$5 + 1, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v145 = j$$6 <= basePerLine / groupSize;
    for (;v145;) {
      var v144 = k < groupSize;
      for (;v144;) {
        lineOfText = lineOfText + JAM.call(text$$10.charAt, text$$10, [k + i$$5], JAM.policy.p17);
        k = k + 1;
        v144 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      v145 = j$$6 <= basePerLine / groupSize;
    }
    var v146 = outputWindow.document;
    JAM.call(v146.write, v146, [lineOfText + "\n"], JAM.policy.p17);
    lineOfText = "";
    v148 = i$$5 < stopBase;
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
    var v462 = adjustment < 0;
    if (v462) {
      v462 = adjusted >= 0;
    }
    if (v462) {
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
  var v180 = i$$6 < stopBase$$2;
  for (;v180;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v156 = j$$7 <= basePerLine$$2 / groupSize$$2;
    for (;v156;) {
      var v152 = k$$1 < groupSize$$2;
      for (;v152;) {
        if (i$$6 + k$$1 >= stopBase$$2) {
          break;
        }
        lineOfText$$1 = lineOfText$$1 + JAM.call(text$$12.charAt, text$$12, [k$$1 + i$$6], JAM.policy.p17);
        k$$1 = k$$1 + 1;
        v152 = k$$1 < groupSize$$2;
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
      v156 = j$$7 <= basePerLine$$2 / groupSize$$2;
    }
    if (numberPosition$$1 == "left") {
      var v157 = outputWindow.document;
      JAM.call(v157.write, v157, [rightNum(adjustNumbering(lineNum, numberingAdjustment), "", 8, tabIn$$3) + lineOfText$$1 + "\n"], JAM.policy.p17);
      if (strands$$1 == "two") {
        var v159 = outputWindow.document;
        JAM.call(v159.write, v159, [rightNum(adjustNumbering(lineNum, numberingAdjustment), "", 8, tabIn$$3) + complement(lineOfText$$1) + "\n"], JAM.policy.p17);
        var v161 = outputWindow.document;
        JAM.call(v161.write, v161, ["\n"], JAM.policy.p11);
      }
    } else {
      if (numberPosition$$1 == "right") {
        var v163 = outputWindow.document;
        JAM.call(v163.write, v163, [lineOfText$$1 + adjustNumbering(i$$6, numberingAdjustment) + "\n"], JAM.policy.p17);
        if (strands$$1 == "two") {
          var v165 = outputWindow.document;
          JAM.call(v165.write, v165, [complement(lineOfText$$1) + adjustNumbering(i$$6, numberingAdjustment) + "\n"], JAM.policy.p17);
          var v167 = outputWindow.document;
          JAM.call(v167.write, v167, ["\n"], JAM.policy.p11);
        }
      } else {
        if (numberPosition$$1 == "above") {
          var v169 = outputWindow.document;
          JAM.call(v169.write, v169, [aboveNum + "\n"], JAM.policy.p17);
          var v171 = outputWindow.document;
          JAM.call(v171.write, v171, [lineOfText$$1 + "\n"], JAM.policy.p17);
          if (strands$$1 == "two") {
            var v173 = outputWindow.document;
            JAM.call(v173.write, v173, [complement(lineOfText$$1) + "\n"], JAM.policy.p17);
            var v175 = outputWindow.document;
            JAM.call(v175.write, v175, ["\n"], JAM.policy.p11);
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v180 = i$$6 < stopBase$$2;
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
  var v199 = i$$7 < stopBase$$3;
  for (;v199;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v187 = j$$8 <= basePerLine$$3 / groupSize$$3;
    for (;v187;) {
      var v183 = k$$2 < groupSize$$3;
      for (;v183;) {
        if (i$$7 + k$$2 >= stopBase$$3) {
          break;
        }
        lineOfText$$2 = lineOfText$$2 + JAM.call(text$$13.charAt, text$$13, [k$$2 + i$$7], JAM.policy.p17);
        k$$2 = k$$2 + 1;
        v183 = k$$2 < groupSize$$3;
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
      v187 = j$$8 <= basePerLine$$3 / groupSize$$3;
    }
    if (numberPosition$$2 == "left") {
      var v188 = outputWindow.document;
      JAM.call(v188.write, v188, [rightNum(lineNum$$1, "", 8, tabIn$$4) + lineOfText$$2 + "\n"], JAM.policy.p17);
    } else {
      if (numberPosition$$2 == "right") {
        var v190 = outputWindow.document;
        JAM.call(v190.write, v190, [lineOfText$$2 + i$$7 + "\n"], JAM.policy.p17);
      } else {
        if (numberPosition$$2 == "above") {
          var v192 = outputWindow.document;
          JAM.call(v192.write, v192, [aboveNum$$1 + "\n"], JAM.policy.p17);
          var v194 = outputWindow.document;
          JAM.call(v194.write, v194, [lineOfText$$2 + "\n"], JAM.policy.p17);
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v199 = i$$7 < stopBase$$3;
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
  var v641 = sequence$$13.length <= firstIndexToMutate;
  if (!v641) {
    v641 = lastIndexToMutate < 0;
  }
  var v479 = v641;
  if (!v479) {
    v479 = lastIndexToMutate <= firstIndexToMutate;
  }
  if (v479) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v208 = i$$8 < numMut;
  for (;v208;) {
    maxNum = sequence$$13.length;
    randNum = JAM.call(Math.floor, Math, [Math.random() * maxNum], JAM.policy.p16);
    var v481 = randNum < firstIndexToMutate;
    if (!v481) {
      v481 = randNum > lastIndexToMutate;
    }
    if (v481) {
      numMut++;
      i$$8++;
      v208 = i$$8 < numMut;
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
    v208 = i$$8 < numMut;
  }
  var v209 = outputWindow.document;
  JAM.call(v209.write, v209, [addReturns(sequence$$13)], JAM.policy.p17);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v215 = j$$9 < lengthOut$$1;
  for (;v215;) {
    tempNum$$1 = JAM.call(Math.floor, Math, [Math.random() * components$$2.length], JAM.policy.p16);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    if (sequence$$14.length == 60) {
      var v212 = outputWindow.document;
      JAM.call(v212.write, v212, [sequence$$14 + "\n"], JAM.policy.p17);
      sequence$$14 = "";
    }
    j$$9++;
    v215 = j$$9 < lengthOut$$1;
  }
  var v216 = outputWindow.document;
  JAM.call(v216.write, v216, [sequence$$14 + "\n"], JAM.policy.p17);
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
  var v222 = outputWindow.document;
  JAM.call(v222.write, v222, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p11);
  var v223 = outputWindow.document;
  JAM.call(v223.write, v223, ['<tr><td class="title" width="200px">' + "Site:" + '</td><td class="title">' + "Positions:" + "</td></tr>\n"], JAM.policy.p17);
  var i$$9 = 0;
  var v240 = i$$9 < arrayOfItems.length;
  for (;v240;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v496 = arrayOfItems[i$$9];
    matchExp = JAM.call(v496.match, v496, [/\/.+\//], JAM.policy.p16) + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    var v736 = arrayOfItems[i$$9];
    var v497 = JAM.call(v736.match, v736, [/\)\D*\d+/], JAM.policy.p16).toString();
    cutDistance = parseFloat(JAM.call(v497.replace, v497, [/\)\D*/, ""], JAM.policy.p15));
    var v232 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p17);
    for (;v232;) {
      matchPosition = matchExp.lastIndex - cutDistance;
      var v498 = matchPosition >= lowerLimit;
      if (v498) {
        v498 = matchPosition < upperLimit;
      }
      if (v498) {
        timesFound++;
        tempString$$1 = tempString$$1 + ", " + (matchPosition - shiftValue + 1);
      }
      matchExp.lastIndex = matchExp.lastIndex - RegExp.lastMatch.length + 1;
      v232 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p17);
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
    var v238 = outputWindow.document;
    var v839 = '<tr><td class="' + backGroundClass + '">';
    var v881 = arrayOfItems[i$$9];
    var v860 = JAM.call(v881.match, v881, [/\([^\(]+\)/], JAM.policy.p16).toString();
    JAM.call(v238.write, v238, [v839 + JAM.call(v860.replace, v860, [/\(|\)/g, ""], JAM.policy.p15) + '</td><td class="' + backGroundClass + '">' + tempString$$1 + "</td></tr>\n"], JAM.policy.p17);
    timesFound = 0;
    i$$9++;
    v240 = i$$9 < arrayOfItems.length;
  }
  var v241 = outputWindow.document;
  JAM.call(v241.write, v241, ["</tbody></table>\n"], JAM.policy.p11);
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v242 = outputWindow.document;
  JAM.call(v242.write, v242, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p11);
  var v243 = outputWindow.document;
  JAM.call(v243.write, v243, ['<tr><td class="title">' + "Pattern:" + '</td><td class="title">' + "Times found:" + '</td><td class="title">' + "Percentage:" + "</td></tr>\n"], JAM.policy.p17);
  var i$$10 = 0;
  var v253 = i$$10 < arrayOfItems$$1.length;
  for (;v253;) {
    var tempNumber = 0;
    var v507 = arrayOfItems$$1[i$$10];
    var matchExp$$1 = JAM.call(v507.match, v507, [/\/[^\/]+\//], JAM.policy.p16) + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    if (JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p17) != -1) {
      tempNumber = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p17).length;
    }
    var percentage = 0;
    var v651 = originalLength + 1;
    var v794 = arrayOfItems$$1[i$$10];
    if (v651 - parseFloat(JAM.call(v794.match, v794, [/\d+/], JAM.policy.p16)) > 0) {
      var v248 = 100 * tempNumber;
      var v510 = originalLength + 1;
      var v740 = arrayOfItems$$1[i$$10];
      percentage = v248 / (v510 - parseFloat(JAM.call(v740.match, v740, [/\d+/], JAM.policy.p16)));
    }
    var v251 = outputWindow.document;
    var v882 = arrayOfItems$$1[i$$10];
    var v861 = JAM.call(v882.match, v882, [/\([^\(]+\)\b/], JAM.policy.p16).toString();
    JAM.call(v251.write, v251, ["<tr><td>" + JAM.call(v861.replace, v861, [/\(|\)/g, ""], JAM.policy.p15) + "</td><td>" + tempNumber + "</td><td>" + JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p12) + "</td></tr>\n"], JAM.policy.p17);
    i$$10++;
    v253 = i$$10 < arrayOfItems$$1.length;
  }
  var v254 = outputWindow.document;
  JAM.call(v254.write, v254, ["</tbody></table>\n"], JAM.policy.p11);
  return true;
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v261 = sequence$$17.length > 0;
  for (;v261;) {
    maxNum$$1 = sequence$$17.length;
    randNum$$1 = JAM.call(Math.floor, Math, [Math.random() * maxNum$$1], JAM.policy.p16);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p16);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p13);
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [randNum$$1 + 1, sequence$$17.length], JAM.policy.p15);
    sequence$$17 = tempString1 + tempString2;
    if (tempSeq.length == 60) {
      var v258 = outputWindow.document;
      JAM.call(v258.write, v258, [tempSeq + "\n"], JAM.policy.p17);
      tempSeq = "";
    }
    v261 = sequence$$17.length > 0;
  }
  var v262 = outputWindow.document;
  JAM.call(v262.write, v262, [tempSeq + "\n"], JAM.policy.p17);
  return true;
}
function colorAlignProp() {
  var theDocument = document;
  var maxInput$$3 = 2E4;
  if (testScript() == false) {
    return;
  }
  var theAlignment = "";
  var alignArray$$1 = new Array;
  var groupString = "";
  var arrayOfGroups = new Array;
  var titleArray = new Array;
  var sequenceArray$$1 = new Array;
  var longestTitle;
  var v519 = checkFormElement(theDocument.forms[0].elements[0]) == false;
  if (!v519) {
    v519 = checkTextLength(theDocument.forms[0].elements[0].value, maxInput$$3) == false;
  }
  if (v519) {
    return;
  }
  theAlignment = "X" + theDocument.forms[0].elements[0].value;
  alignArray$$1 = JAM.call(theAlignment.split, theAlignment, [/[>%#]/], JAM.policy.p16);
  if (earlyCheckAlign(alignArray$$1) == false) {
    return;
  }
  var i$$11 = 1;
  var v277 = i$$11 < alignArray$$1.length;
  for (;v277;) {
    var v268 = i$$11 - 1;
    var v523 = alignArray$$1[i$$11];
    var v918 = JAM.call(v523.match, v523, [/[^\f\n\r]+[\f\n\r]/], JAM.policy.p16);
    titleArray[v268] = v918;
    var v269 = i$$11 - 1;
    var v524 = filterFastaTitle(titleArray[i$$11 - 1].toString());
    var v919 = JAM.call(v524.replace, v524, [/[\f\n\r]/g, ""], JAM.policy.p15);
    titleArray[v269] = v919;
    var v270 = i$$11 - 1;
    var v525 = titleArray[i$$11 - 1];
    var v920 = JAM.call(v525.substring, v525, [0, 20], JAM.policy.p13);
    titleArray[v270] = v920;
    if (i$$11 == 1) {
      longestTitle = titleArray[i$$11 - 1].length;
    } else {
      if (titleArray[i$$11 - 1].length > longestTitle) {
        longestTitle = titleArray[i$$11 - 1].length;
      }
    }
    var v275 = i$$11 - 1;
    var v529 = alignArray$$1[i$$11];
    var v921 = JAM.call(v529.replace, v529, [/[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p15);
    sequenceArray$$1[v275] = v921;
    var v276 = i$$11 - 1;
    var v922 = filterAlignSeq(sequenceArray$$1[i$$11 - 1]);
    sequenceArray$$1[v276] = v922;
    i$$11++;
    v277 = i$$11 < alignArray$$1.length;
  }
  var spaceString = "                    ";
  i$$11 = 0;
  var v281 = i$$11 < titleArray.length;
  for (;v281;) {
    if (titleArray[i$$11].length < longestTitle) {
      titleArray[i$$11] = titleArray[i$$11] + JAM.call(spaceString.substring, spaceString, [0, longestTitle - titleArray[i$$11].length], JAM.policy.p13);
    }
    i$$11++;
    v281 = i$$11 < titleArray.length;
  }
  if (checkAlign(titleArray, sequenceArray$$1) == false) {
    return;
  }
  groupString = JAM.call("GAVLI, FYW, CM, ST, KRH, DE, NQ, P".replace, "GAVLI, FYW, CM, ST, KRH, DE, NQ, P", [/\s/g, ""], JAM.policy.p15).toUpperCase();
  arrayOfGroups = JAM.call(groupString.split, groupString, [/,/], JAM.policy.p16);
  if (checkGroupInput(arrayOfGroups) == false) {
    return;
  }
  var isBackground$$1;
  if (theDocument.forms[0].elements[6].options[theDocument.forms[0].elements[6].selectedIndex].value == "background") {
    isBackground$$1 = true;
  } else {
    isBackground$$1 = false;
  }
  _openWindowAlign("Color Align Properties", isBackground$$1);
  openPre();
  var v286 = outputWindow.document;
  JAM.call(v286.write, v286, ['<span class="g">' + "G, A, V, L, I" + "</span>\n"], JAM.policy.p17);
  var v288 = outputWindow.document;
  JAM.call(v288.write, v288, ['<span class="f">' + "F, Y, W" + "</span>\n"], JAM.policy.p17);
  var v290 = outputWindow.document;
  JAM.call(v290.write, v290, ['<span class="c">' + "C, M" + "</span>\n"], JAM.policy.p17);
  var v292 = outputWindow.document;
  JAM.call(v292.write, v292, ['<span class="s">' + "S, T" + "</span>\n"], JAM.policy.p17);
  var v294 = outputWindow.document;
  JAM.call(v294.write, v294, ['<span class="k">' + "K, R, H" + "</span>\n"], JAM.policy.p17);
  var v296 = outputWindow.document;
  JAM.call(v296.write, v296, ['<span class="d">' + "D, E" + "</span>\n"], JAM.policy.p17);
  var v298 = outputWindow.document;
  JAM.call(v298.write, v298, ['<span class="q">' + "N, Q" + "</span>\n"], JAM.policy.p17);
  var v300 = outputWindow.document;
  JAM.call(v300.write, v300, ['<span class="p">' + "P" + "</span>\n"], JAM.policy.p17);
  var v302 = outputWindow.document;
  JAM.call(v302.write, v302, ["\n"], JAM.policy.p11);
  colorAlign(titleArray, sequenceArray$$1, theDocument.forms[0].elements[4].options[theDocument.forms[0].elements[4].selectedIndex].value, theDocument.forms[0].elements[5].options[theDocument.forms[0].elements[5].selectedIndex].value, arrayOfGroups, theDocument.forms[0].elements[7].value, longestTitle);
  closePre();
  closeWindow();
  return;
}
function colorAlign(arrayOfTitles$$1, arrayOfSequences$$1, basePerLine$$4, consensus, arrayOfGroups$$1, definedStarts, longestTitle$$1) {
  var positions = new Array(arrayOfSequences$$1.length);
  if (JAM.call(definedStarts.search, definedStarts, [/\S/], JAM.policy.p16) == -1) {
    definedStarts = "0,0";
  }
  var definedStartsArray = JAM.call(definedStarts.split, definedStarts, [/,/], JAM.policy.p16);
  var i$$12 = 0;
  var v311 = i$$12 < positions.length;
  for (;v311;) {
    if (i$$12 >= definedStartsArray.length) {
      positions[i$$12] = 0;
    } else {
      var v672 = definedStartsArray[i$$12];
      if (JAM.call(v672.search, v672, [/\d/], JAM.policy.p16) != -1) {
        var v554 = definedStartsArray[i$$12];
        var v923 = parseInt(JAM.call(v554.replace, v554, [/[^\d\-]/g, ""], JAM.policy.p15));
        positions[i$$12] = v923;
      } else {
        alert("An incorrect starting position was encountered. It was set to 0.");
        outputWindow.focus();
        positions[i$$12] = 0;
      }
    }
    i$$12++;
    v311 = i$$12 < positions.length;
  }
  var totalBasesShown = 0;
  consensus = parseInt(consensus) / 100;
  basePerLine$$4 = parseInt(basePerLine$$4);
  var columnCount = 0;
  var arrayOfColumns = new Array(basePerLine$$4);
  i$$12 = 0;
  var v314 = i$$12 < arrayOfColumns.length;
  for (;v314;) {
    var v924 = new Array(arrayOfSequences$$1.length);
    arrayOfColumns[i$$12] = v924;
    i$$12++;
    v314 = i$$12 < arrayOfColumns.length;
  }
  i$$12 = 0;
  var columnSeq;
  var re$$3;
  var result;
  var output = "";
  var v339 = totalBasesShown < arrayOfSequences$$1[0].length;
  for (;v339;) {
    var jj = 0;
    var v337 = jj < arrayOfSequences$$1.length;
    for (;v337;) {
      output = output + arrayOfTitles$$1[jj] + " ";
      var v561 = i$$12 < totalBasesShown + basePerLine$$4;
      if (v561) {
        v561 = i$$12 < arrayOfSequences$$1[0].length;
      }
      var v332 = v561;
      for (;v332;) {
        if (jj == 0) {
          var k$$3 = 0;
          var v317 = k$$3 < arrayOfSequences$$1.length;
          for (;v317;) {
            var v316 = arrayOfColumns[columnCount];
            var v563 = arrayOfSequences$$1[k$$3];
            var v925 = JAM.call(v563.charAt, v563, [i$$12], JAM.policy.p17);
            v316[k$$3] = v925;
            k$$3++;
            v317 = k$$3 < arrayOfSequences$$1.length;
          }
        }
        var v756 = arrayOfSequences$$1[jj];
        var v565 = JAM.call(v756.charAt, v756, [i$$12], JAM.policy.p17) == ".";
        if (!v565) {
          var v757 = arrayOfSequences$$1[jj];
          v565 = JAM.call(v757.charAt, v757, [i$$12], JAM.policy.p17) == "-";
        }
        if (v565) {
          var v566 = arrayOfSequences$$1[jj];
          output = output + JAM.call(v566.charAt, v566, [i$$12], JAM.policy.p17);
          i$$12 = i$$12 + 1;
          columnCount++;
          var v567 = i$$12 < totalBasesShown + basePerLine$$4;
          if (v567) {
            v567 = i$$12 < arrayOfSequences$$1[0].length;
          }
          v332 = v567;
          continue;
        }
        var v321 = arrayOfColumns[columnCount];
        columnSeq = JAM.call(v321.join, v321, [","], JAM.policy.p11);
        var v568 = arrayOfSequences$$1[jj];
        re$$3 = new RegExp(JAM.call(v568.charAt, v568, [i$$12], JAM.policy.p17), "gi");
        if (JAM.call(columnSeq.match, columnSeq, [re$$3], JAM.policy.p17).length / arrayOfSequences$$1.length >= consensus) {
          var v760 = output + '<span class="';
          var v850 = arrayOfSequences$$1[jj];
          var v570 = v760 + JAM.call(v850.charAt, v850, [i$$12], JAM.policy.p17).toString().toLowerCase() + '">';
          var v684 = arrayOfSequences$$1[jj];
          output = v570 + JAM.call(v684.charAt, v684, [i$$12], JAM.policy.p17) + "</span>";
          i$$12 = i$$12 + 1;
          columnCount++;
          var v572 = i$$12 < totalBasesShown + basePerLine$$4;
          if (v572) {
            v572 = i$$12 < arrayOfSequences$$1[0].length;
          }
          v332 = v572;
          continue;
        }
        result = 1;
        var m = 0;
        var v328 = m < arrayOfGroups$$1.length;
        for (;v328;) {
          var v687 = arrayOfGroups$$1[m];
          if (JAM.call(v687.search, v687, [re$$3], JAM.policy.p17) != -1) {
            re$$3 = new RegExp("[" + arrayOfGroups$$1[m] + "]", "gi");
            result = JAM.call(columnSeq.match, columnSeq, [re$$3], JAM.policy.p17).length;
            break;
          }
          m++;
          v328 = m < arrayOfGroups$$1.length;
        }
        if (result / arrayOfSequences$$1.length >= consensus) {
          var v763 = output + '<span class="';
          var v851 = arrayOfSequences$$1[jj];
          var v578 = v763 + JAM.call(v851.charAt, v851, [i$$12], JAM.policy.p17).toString().toLowerCase() + '">';
          var v691 = arrayOfSequences$$1[jj];
          output = v578 + JAM.call(v691.charAt, v691, [i$$12], JAM.policy.p17) + "</span>";
          i$$12 = i$$12 + 1;
          columnCount++;
          var v580 = i$$12 < totalBasesShown + basePerLine$$4;
          if (v580) {
            v580 = i$$12 < arrayOfSequences$$1[0].length;
          }
          v332 = v580;
          continue;
        }
        var v581 = arrayOfSequences$$1[jj];
        output = output + JAM.call(v581.charAt, v581, [i$$12], JAM.policy.p17);
        i$$12 = i$$12 + 1;
        columnCount++;
        var v582 = i$$12 < totalBasesShown + basePerLine$$4;
        if (v582) {
          v582 = i$$12 < arrayOfSequences$$1[0].length;
        }
        v332 = v582;
      }
      var v333 = positions[jj];
      var v767 = arrayOfSequences$$1[jj];
      var v696 = JAM.call(v767.substring, v767, [totalBasesShown, i$$12], JAM.policy.p27);
      positions[jj] = v333 + JAM.call(v696.replace, v696, [/\.|\-/g, ""], JAM.policy.p15).length;
      output = output + " " + positions[jj] + "\n";
      var v336 = outputWindow.document;
      JAM.call(v336.write, v336, [output], JAM.policy.p17);
      output = "";
      i$$12 = totalBasesShown;
      columnCount = 0;
      jj++;
      v337 = jj < arrayOfSequences$$1.length;
    }
    totalBasesShown = totalBasesShown + basePerLine$$4;
    i$$12 = totalBasesShown;
    var v338 = outputWindow.document;
    JAM.call(v338.write, v338, ["\n"], JAM.policy.p11);
    v339 = totalBasesShown < arrayOfSequences$$1[0].length;
  }
  return;
}
JAM.set(document, "onload", v2);
JAM.set(JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p11), "onclick", v3);
JAM.set(JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p11), "onclick", v4)
