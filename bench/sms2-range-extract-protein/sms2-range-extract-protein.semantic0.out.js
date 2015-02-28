// sms2-range-extract-protein.js
function v12() {
  document.forms[0].elements[0].value = " ";
  document.forms[0].elements[1].value = " ";
  return;
}
function v11() {
  try {
    rangeExtract();
  } catch (e$$7) {
    alert("The following error was encountered: " + e$$7);
  }
  return;
}
function v10() {
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
  var v20 = i$$1 < arrayOfTitles.length;
  for (;v20;) {
    var v912 = arrayOfTitles[i$$1];
    var v682 = JAM.call(v912.search, v912, [/\S/], JAM.policy.p17) == -1;
    if (!v682) {
      var v913 = arrayOfSequences[i$$1];
      v682 = JAM.call(v913.search, v913, [/\S/], JAM.policy.p17) == -1;
    }
    var v393 = v682;
    if (!v393) {
      v393 = arrayOfSequences[i$$1].length != lengthOfAlign;
    }
    if (v393) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    v20 = i$$1 < arrayOfTitles.length;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v914 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p17) == -1;
  if (!v914) {
    v914 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p17) == -1;
  }
  var v822 = v914;
  if (!v822) {
    v822 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p17) == -1;
  }
  var v685 = v822;
  if (!v685) {
    v685 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p17) == -1;
  }
  var v395 = v685;
  if (!v395) {
    v395 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p17) == -1;
  }
  if (v395) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v688 = formElement.value;
  if (JAM.call(v688.search, v688, [/\S/], JAM.policy.p17) == -1) {
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
  var v25 = z$$2 < arrayOfPatterns.length;
  for (;v25;) {
    var v689 = arrayOfPatterns[z$$2];
    if (JAM.call(v689.search, v689, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p17) == -1) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    if (moreExpressionCheck(arrayOfPatterns[z$$2]) == false) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    v25 = z$$2 < arrayOfPatterns.length;
  }
  var geneticCodeMatchResult = new Array(arrayOfPatterns.length);
  var geneticCodeMatchExp = new Array(arrayOfPatterns.length);
  var j = 0;
  var v31 = j < arrayOfPatterns.length;
  for (;v31;) {
    var v691 = arrayOfPatterns[j];
    var v28 = JAM.call(v691.match, v691, [/\/.+\//], JAM.policy.p17) + "gi";
    if (JAM.isEval(eval)) {
      var v1087 = eval("introspect(JAM.policy.pFull) { " + v28 + " }")
    } else {
      var v1087 = JAM.call(eval, null, [v28])
    }
    geneticCodeMatchExp[j] = v1087;
    var v403 = arrayOfPatterns[j];
    var v1088 = JAM.call(v403.match, v403, [/=[a-zA-Z\*]/], JAM.policy.p17).toString();
    geneticCodeMatchResult[j] = v1088;
    var v30 = geneticCodeMatchResult[j];
    var v1089 = JAM.call(v30.replace, v30, [/=/g, ""], JAM.policy.p15);
    geneticCodeMatchResult[j] = v1089;
    j++;
    v31 = j < arrayOfPatterns.length;
  }
  var i$$2 = 0;
  var v38 = i$$2 <= testSequence.length - 3;
  for (;v38;) {
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, i$$2 + 3], JAM.policy.p15);
    j = 0;
    var v36 = j < geneticCodeMatchExp.length;
    for (;v36;) {
      if (JAM.call(codon.search, codon, [geneticCodeMatchExp[j]], JAM.policy.p16) != -1) {
        if (oneMatch == true) {
          alert("Genetic code error: more than one amino acid is coded by the codon: " + codon + ".");
          return false;
        }
        oneMatch = true;
      }
      j++;
      v36 = j < geneticCodeMatchExp.length;
    }
    if (oneMatch == false) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    v38 = i$$2 <= testSequence.length - 3;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v40 = z$$3 < arrayOfPatterns$$1.length;
  for (;v40;) {
    var v695 = arrayOfPatterns$$1[z$$3];
    if (JAM.call(v695.search, v695, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p17) != -1) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    v40 = z$$3 < arrayOfPatterns$$1.length;
  }
  var i$$3 = 0;
  var v44 = i$$3 < arrayOfPatterns$$1.length;
  for (;v44;) {
    var re = new RegExp("[" + arrayOfPatterns$$1[i$$3] + "]", "gi");
    var j$$1 = i$$3 + 1;
    var v43 = j$$1 < arrayOfPatterns$$1.length;
    for (;v43;) {
      var v697 = arrayOfPatterns$$1[j$$1];
      if (JAM.call(v697.search, v697, [re], JAM.policy.p16) != -1) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      v43 = j$$1 < arrayOfPatterns$$1.length;
    }
    i$$3++;
    v44 = i$$3 < arrayOfPatterns$$1.length;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v47 = z$$4 < arrayOfPatterns$$2.length;
  for (;v47;) {
    var v698 = arrayOfPatterns$$2[z$$4];
    if (JAM.call(v698.search, v698, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p17) == -1) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    if (moreExpressionCheck(arrayOfPatterns$$2[z$$4]) == false) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    v47 = z$$4 < arrayOfPatterns$$2.length;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v825 = getSequenceFromFasta(text$$7);
  if (JAM.call(v825.replace, v825, [/[^A-Za-z]/g, ""], JAM.policy.p15).length > maxInput) {
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
  var v52 = outputWindow.document;
  JAM.call(v52.write, v52, ["</form>"], JAM.policy.p11);
  return true;
}
function closePre() {
  var v53 = outputWindow.document;
  JAM.call(v53.write, v53, ["</div>"], JAM.policy.p11);
  var v54 = outputWindow.document;
  JAM.call(v54.write, v54, ["</pre>\n"], JAM.policy.p11);
  return;
}
function closeTextArea() {
  var v55 = outputWindow.document;
  JAM.call(v55.write, v55, ["</textarea>"], JAM.policy.p11);
  return true;
}
function closeWindow() {
  var v56 = outputWindow.document;
  JAM.call(v56.write, v56, ["</body>\n</html>\n"], JAM.policy.p11);
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
  var v60 = i$$4 < alignArray.length;
  for (;v60;) {
    var v701 = alignArray[i$$4];
    if (JAM.call(v701.search, v701, [/[^\s]+\s/], JAM.policy.p17) == -1) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    v60 = i$$4 < alignArray.length;
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
  if (JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p17) != -1) {
    var v62 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p16);
    for (;v62;) {
      JAM.call(arrayOfFasta.push, arrayOfFasta, [matchArray[0]], JAM.policy.p16);
      v62 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p16);
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence() {
  var fastaSequenceTitle = title;
  var sequence$$2 = newProtein;
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
  return '<div class="info">' + stringToReturn$$1 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var geneticCodeMatchExp$$1 = new Array(arrayOfPatterns$$3.length);
  var j$$2 = 0;
  var v79 = j$$2 < arrayOfPatterns$$3.length;
  for (;v79;) {
    var v702 = arrayOfPatterns$$3[j$$2];
    var v78 = JAM.call(v702.match, v702, [/\/.+\//], JAM.policy.p17) + "gi";
    if (JAM.isEval(eval)) {
      var v1090 = eval("introspect(JAM.policy.pFull) { " + v78 + " }")
    } else {
      var v1090 = JAM.call(eval, null, [v78])
    }
    geneticCodeMatchExp$$1[j$$2] = v1090;
    j$$2++;
    v79 = j$$2 < arrayOfPatterns$$3.length;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var geneticCodeMatchResult$$1 = new Array(arrayOfPatterns$$4.length);
  var j$$3 = 0;
  var v83 = j$$3 < arrayOfPatterns$$4.length;
  for (;v83;) {
    var v453 = arrayOfPatterns$$4[j$$3];
    var v1091 = JAM.call(v453.match, v453, [/=[a-zA-Z\*]/], JAM.policy.p17).toString();
    geneticCodeMatchResult$$1[j$$3] = v1091;
    var v82 = geneticCodeMatchResult$$1[j$$3];
    var v1092 = JAM.call(v82.replace, v82, [/=/g, ""], JAM.policy.p15);
    geneticCodeMatchResult$$1[j$$3] = v1092;
    j$$3++;
    v83 = j$$3 < arrayOfPatterns$$4.length;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var stringToReturn$$2 = "Results for " + sequence$$3.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p17) != -1) {
    stringToReturn$$2 = stringToReturn$$2 + '"' + fastaSequenceTitle$$1 + '"';
  }
  stringToReturn$$2 = stringToReturn$$2 + ' starting "' + JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p13) + '"';
  return '<div class="info">' + stringToReturn$$2 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var stringToReturn$$3 = "Results for " + topology + " " + sequence$$4.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p17) != -1) {
    stringToReturn$$3 = stringToReturn$$3 + '"' + fastaSequenceTitle$$2 + '"';
  }
  stringToReturn$$3 = stringToReturn$$3 + ' starting "' + JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p13) + '"';
  return '<div class="info">' + stringToReturn$$3 + "</div>\n";
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
  return '<div class="info">' + stringToReturn$$4 + "</div>\n";
}
function getRandomSequence(lengthOut) {
  var components = ["A", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "Y"];
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v104 = j$$4 < lengthOut;
  for (;v104;) {
    tempNum = JAM.call(Math.floor, Math, [Math.random() * components.length], JAM.policy.p17);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p16);
    j$$4++;
    v104 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p11);
}
function getSequenceFromFasta(sequenceRecord) {
  if (JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p17) != -1) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p15);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  if (JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p17) != -1) {
    fastaTitle = JAM.call(sequenceRecord$$1.match, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p15).toString();
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\>|[\f\n\r]/g, ""], JAM.policy.p15);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\s{2,}/g, " "], JAM.policy.p15);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/[\<\>]/gi, ""], JAM.policy.p15);
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  var v1058 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p17) != -1;
  if (!v1058) {
    v1058 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p17) != -1;
  }
  var v1049 = v1058;
  if (!v1049) {
    v1049 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p17) != -1;
  }
  var v1039 = v1049;
  if (!v1039) {
    v1039 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p17) != -1;
  }
  var v1027 = v1039;
  if (!v1027) {
    v1027 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p17) != -1;
  }
  var v1008 = v1027;
  if (!v1008) {
    v1008 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p17) != -1;
  }
  var v973 = v1008;
  if (!v973) {
    v973 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p17) != -1;
  }
  var v917 = v973;
  if (!v917) {
    v917 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p17) != -1;
  }
  var v826 = v917;
  if (!v826) {
    v826 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p17) != -1;
  }
  var v704 = v826;
  if (!v704) {
    v704 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p17) != -1;
  }
  var v481 = v704;
  if (!v481) {
    v481 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p17) != -1;
  }
  if (v481) {
    return false;
  }
  return true;
}
function openForm() {
  var v109 = outputWindow.document;
  JAM.call(v109.write, v109, ['<form action="">\n'], JAM.policy.p11);
  return true;
}
function openPre() {
  var v110 = outputWindow.document;
  JAM.call(v110.write, v110, ["<pre>"], JAM.policy.p11);
  var v111 = outputWindow.document;
  JAM.call(v111.write, v111, ['<div class="pre">'], JAM.policy.p11);
  return;
}
function openTextArea() {
  var v112 = outputWindow.document;
  JAM.call(v112.write, v112, ['<br /><textarea rows="6" cols="61">\n'], JAM.policy.p11);
  return true;
}
function openWindow() {
  var title$$6 = "Range Extractor Protein";
  _openWindow(title$$6);
  return;
}
function _openWindow(title$$7) {
  var isColor = true;
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  outputWindow.focus();
  var v113 = outputWindow.document;
  JAM.call(v113.write, v113, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n'], JAM.policy.p16);
  if (isColor) {
    var v115 = outputWindow.document;
    JAM.call(v115.write, v115, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; background-color: #66FF00}\n" + 
    "span.two, td.two {color: #000000; background-color: #FFFF66}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n" + "td.many {color: #000000}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + 
    "</style>\n"], JAM.policy.p16);
  } else {
    var v117 = outputWindow.document;
    JAM.call(v117.write, v117, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n" + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "td.many {color: #000000; background-color: #FFFFFF}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"], JAM.policy.p16);
  }
  var v119 = outputWindow.document;
  JAM.call(v119.write, v119, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$7 + " results</div>\n"], JAM.policy.p16);
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
  JAM.call(v121.write, v121, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n'], JAM.policy.p16);
  if (isBackground) {
    var v123 = outputWindow.document;
    JAM.call(v123.write, v123, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #FFFFFF; background-color: #000000}\n" + "span.sim {color: #FFFFFF; background-color: #666666}\n" + 
    "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n" + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n" + "span.c, span.m {color: #000000; background-color: #FFFF00}\n" + "span.s, span.t {color: #000000; background-color: #66FF00}\n" + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n" + "span.d, span.e {color: #000000; background-color: #0066FF}\n" + "span.n, span.q {color: #000000; background-color: #996633}\n" + "span.p {color: #000000; background-color: #FF99FF}\n" + 
    "</style>\n"], JAM.policy.p16);
  } else {
    var v125 = outputWindow.document;
    JAM.call(v125.write, v125, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n" + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n" + 
    "span.diff {color: #999999; background-color: #FFFFFF}\n" + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n" + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n" + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n" + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n" + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n" + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n" + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n" + 
    "span.p {color: #00FFCC; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"], JAM.policy.p16);
  }
  var v127 = outputWindow.document;
  JAM.call(v127.write, v127, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$9 + " results</div>\n"], JAM.policy.p16);
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
  if (JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p17) != -1) {
    tempDnaArray = JAM.call(dnaSequence$$1.match, dnaSequence$$1, [/./g], JAM.policy.p17);
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
  var v130 = j$$5 < lengthOfColumn;
  for (;v130;) {
    tempString = tempString + " ";
    j$$5++;
    v130 = j$$5 < lengthOfColumn;
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
  JAM.call(testArray.push, testArray, [testString], JAM.policy.p16);
  if (testArray[0] != testString) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  if (JAM.call(testString.search, testString, [re$$2], JAM.policy.p16) == -1) {
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
  if (JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p9) != 2489.824) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  if (JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p9) != 2489.8) {
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
  var v837 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p17) == -1;
  if (!v837) {
    v837 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p17) == -1;
  }
  var v715 = v837;
  if (!v715) {
    v715 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p17) == -1;
  }
  var v496 = v715;
  if (!v496) {
    v496 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p17) == -1;
  }
  if (v496) {
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
  var v840 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p17) == -1;
  if (!v840) {
    v840 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p17) == -1;
  }
  var v718 = v840;
  if (!v718) {
    v718 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p17) == -1;
  }
  var v501 = v718;
  if (!v501) {
    v501 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p17) == -1;
  }
  if (v501) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v843 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p17) == -1;
  if (!v843) {
    v843 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p17) == -1;
  }
  var v721 = v843;
  if (!v721) {
    v721 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p17) == -1;
  }
  var v502 = v721;
  if (!v502) {
    v502 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p17) == -1;
  }
  if (v502) {
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
  var v846 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p17) == -1;
  if (!v846) {
    v846 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p17) == -1;
  }
  var v724 = v846;
  if (!v724) {
    v724 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p17) == -1;
  }
  var v504 = v724;
  if (!v504) {
    v504 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p17) == -1;
  }
  if (v504) {
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
  var v157 = i$$5 < stopBase;
  for (;v157;) {
    lineOfText = rightNum(i$$5 + 1, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v154 = j$$6 <= basePerLine / groupSize;
    for (;v154;) {
      var v153 = k < groupSize;
      for (;v153;) {
        lineOfText = lineOfText + JAM.call(text$$10.charAt, text$$10, [k + i$$5], JAM.policy.p16);
        k = k + 1;
        v153 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      v154 = j$$6 <= basePerLine / groupSize;
    }
    var v155 = outputWindow.document;
    JAM.call(v155.write, v155, [lineOfText + "\n"], JAM.policy.p16);
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
    var v509 = adjustment < 0;
    if (v509) {
      v509 = adjusted >= 0;
    }
    if (v509) {
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
    var v165 = j$$7 <= basePerLine$$2 / groupSize$$2;
    for (;v165;) {
      var v161 = k$$1 < groupSize$$2;
      for (;v161;) {
        if (i$$6 + k$$1 >= stopBase$$2) {
          break;
        }
        lineOfText$$1 = lineOfText$$1 + JAM.call(text$$12.charAt, text$$12, [k$$1 + i$$6], JAM.policy.p16);
        k$$1 = k$$1 + 1;
        v161 = k$$1 < groupSize$$2;
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
      v165 = j$$7 <= basePerLine$$2 / groupSize$$2;
    }
    if (numberPosition$$1 == "left") {
      var v166 = outputWindow.document;
      JAM.call(v166.write, v166, [rightNum(adjustNumbering(lineNum, numberingAdjustment), "", 8, tabIn$$3) + lineOfText$$1 + "\n"], JAM.policy.p16);
      if (strands$$1 == "two") {
        var v168 = outputWindow.document;
        JAM.call(v168.write, v168, [rightNum(adjustNumbering(lineNum, numberingAdjustment), "", 8, tabIn$$3) + complement(lineOfText$$1) + "\n"], JAM.policy.p16);
        var v170 = outputWindow.document;
        JAM.call(v170.write, v170, ["\n"], JAM.policy.p11);
      }
    } else {
      if (numberPosition$$1 == "right") {
        var v172 = outputWindow.document;
        JAM.call(v172.write, v172, [lineOfText$$1 + adjustNumbering(i$$6, numberingAdjustment) + "\n"], JAM.policy.p16);
        if (strands$$1 == "two") {
          var v174 = outputWindow.document;
          JAM.call(v174.write, v174, [complement(lineOfText$$1) + adjustNumbering(i$$6, numberingAdjustment) + "\n"], JAM.policy.p16);
          var v176 = outputWindow.document;
          JAM.call(v176.write, v176, ["\n"], JAM.policy.p11);
        }
      } else {
        if (numberPosition$$1 == "above") {
          var v178 = outputWindow.document;
          JAM.call(v178.write, v178, [aboveNum + "\n"], JAM.policy.p16);
          var v180 = outputWindow.document;
          JAM.call(v180.write, v180, [lineOfText$$1 + "\n"], JAM.policy.p16);
          if (strands$$1 == "two") {
            var v182 = outputWindow.document;
            JAM.call(v182.write, v182, [complement(lineOfText$$1) + "\n"], JAM.policy.p16);
            var v184 = outputWindow.document;
            JAM.call(v184.write, v184, ["\n"], JAM.policy.p11);
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
    var v196 = j$$8 <= basePerLine$$3 / groupSize$$3;
    for (;v196;) {
      var v192 = k$$2 < groupSize$$3;
      for (;v192;) {
        if (i$$7 + k$$2 >= stopBase$$3) {
          break;
        }
        lineOfText$$2 = lineOfText$$2 + JAM.call(text$$13.charAt, text$$13, [k$$2 + i$$7], JAM.policy.p16);
        k$$2 = k$$2 + 1;
        v192 = k$$2 < groupSize$$3;
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
      v196 = j$$8 <= basePerLine$$3 / groupSize$$3;
    }
    if (numberPosition$$2 == "left") {
      var v197 = outputWindow.document;
      JAM.call(v197.write, v197, [rightNum(lineNum$$1, "", 8, tabIn$$4) + lineOfText$$2 + "\n"], JAM.policy.p16);
    } else {
      if (numberPosition$$2 == "right") {
        var v199 = outputWindow.document;
        JAM.call(v199.write, v199, [lineOfText$$2 + i$$7 + "\n"], JAM.policy.p16);
      } else {
        if (numberPosition$$2 == "above") {
          var v201 = outputWindow.document;
          JAM.call(v201.write, v201, [aboveNum$$1 + "\n"], JAM.policy.p16);
          var v203 = outputWindow.document;
          JAM.call(v203.write, v203, [lineOfText$$2 + "\n"], JAM.policy.p16);
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
  var v734 = sequence$$13.length <= firstIndexToMutate;
  if (!v734) {
    v734 = lastIndexToMutate < 0;
  }
  var v526 = v734;
  if (!v526) {
    v526 = lastIndexToMutate <= firstIndexToMutate;
  }
  if (v526) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v217 = i$$8 < numMut;
  for (;v217;) {
    maxNum = sequence$$13.length;
    randNum = JAM.call(Math.floor, Math, [Math.random() * maxNum], JAM.policy.p17);
    var v528 = randNum < firstIndexToMutate;
    if (!v528) {
      v528 = randNum > lastIndexToMutate;
    }
    if (v528) {
      numMut++;
      i$$8++;
      v217 = i$$8 < numMut;
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
    sequence$$13 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p13) + components$$1[componentsIndex] + JAM.call(sequence$$13.substring, sequence$$13, [randNum + 1, sequence$$13.length], JAM.policy.p27);
    i$$8++;
    v217 = i$$8 < numMut;
  }
  var v218 = outputWindow.document;
  JAM.call(v218.write, v218, [addReturns(sequence$$13)], JAM.policy.p16);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v224 = j$$9 < lengthOut$$1;
  for (;v224;) {
    tempNum$$1 = JAM.call(Math.floor, Math, [Math.random() * components$$2.length], JAM.policy.p17);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    if (sequence$$14.length == 60) {
      var v221 = outputWindow.document;
      JAM.call(v221.write, v221, [sequence$$14 + "\n"], JAM.policy.p16);
      sequence$$14 = "";
    }
    j$$9++;
    v224 = j$$9 < lengthOut$$1;
  }
  var v225 = outputWindow.document;
  JAM.call(v225.write, v225, [sequence$$14 + "\n"], JAM.policy.p16);
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
  var v231 = outputWindow.document;
  JAM.call(v231.write, v231, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p11);
  var v232 = outputWindow.document;
  JAM.call(v232.write, v232, ['<tr><td class="title" width="200px">' + "Site:" + '</td><td class="title">' + "Positions:" + "</td></tr>\n"], JAM.policy.p16);
  var i$$9 = 0;
  var v249 = i$$9 < arrayOfItems.length;
  for (;v249;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v543 = arrayOfItems[i$$9];
    matchExp = JAM.call(v543.match, v543, [/\/.+\//], JAM.policy.p17) + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    var v855 = arrayOfItems[i$$9];
    var v544 = JAM.call(v855.match, v855, [/\)\D*\d+/], JAM.policy.p17).toString();
    cutDistance = parseFloat(JAM.call(v544.replace, v544, [/\)\D*/, ""], JAM.policy.p15));
    var v241 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p16);
    for (;v241;) {
      matchPosition = matchExp.lastIndex - cutDistance;
      var v545 = matchPosition >= lowerLimit;
      if (v545) {
        v545 = matchPosition < upperLimit;
      }
      if (v545) {
        timesFound++;
        tempString$$1 = tempString$$1 + ", " + (matchPosition - shiftValue + 1);
      }
      matchExp.lastIndex = matchExp.lastIndex - RegExp.lastMatch.length + 1;
      v241 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p16);
    }
    if (JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p17) != -1) {
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
    var v247 = outputWindow.document;
    var v1015 = '<tr><td class="' + backGroundClass + '">';
    var v1056 = arrayOfItems[i$$9];
    var v1035 = JAM.call(v1056.match, v1056, [/\([^\(]+\)/], JAM.policy.p17).toString();
    JAM.call(v247.write, v247, [v1015 + JAM.call(v1035.replace, v1035, [/\(|\)/g, ""], JAM.policy.p15) + '</td><td class="' + backGroundClass + '">' + tempString$$1 + "</td></tr>\n"], JAM.policy.p16);
    timesFound = 0;
    i$$9++;
    v249 = i$$9 < arrayOfItems.length;
  }
  var v250 = outputWindow.document;
  JAM.call(v250.write, v250, ["</tbody></table>\n"], JAM.policy.p11);
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v251 = outputWindow.document;
  JAM.call(v251.write, v251, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p11);
  var v252 = outputWindow.document;
  JAM.call(v252.write, v252, ['<tr><td class="title">' + "Pattern:" + '</td><td class="title">' + "Times found:" + '</td><td class="title">' + "Percentage:" + "</td></tr>\n"], JAM.policy.p16);
  var i$$10 = 0;
  var v262 = i$$10 < arrayOfItems$$1.length;
  for (;v262;) {
    var tempNumber = 0;
    var v554 = arrayOfItems$$1[i$$10];
    var matchExp$$1 = JAM.call(v554.match, v554, [/\/[^\/]+\//], JAM.policy.p17) + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    if (JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p16) != -1) {
      tempNumber = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p16).length;
    }
    var percentage = 0;
    var v744 = originalLength + 1;
    var v938 = arrayOfItems$$1[i$$10];
    if (v744 - parseFloat(JAM.call(v938.match, v938, [/\d+/], JAM.policy.p17)) > 0) {
      var v257 = 100 * tempNumber;
      var v557 = originalLength + 1;
      var v859 = arrayOfItems$$1[i$$10];
      percentage = v257 / (v557 - parseFloat(JAM.call(v859.match, v859, [/\d+/], JAM.policy.p17)));
    }
    var v260 = outputWindow.document;
    var v1057 = arrayOfItems$$1[i$$10];
    var v1036 = JAM.call(v1057.match, v1057, [/\([^\(]+\)\b/], JAM.policy.p17).toString();
    JAM.call(v260.write, v260, ["<tr><td>" + JAM.call(v1036.replace, v1036, [/\(|\)/g, ""], JAM.policy.p15) + "</td><td>" + tempNumber + "</td><td>" + JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p9) + "</td></tr>\n"], JAM.policy.p16);
    i$$10++;
    v262 = i$$10 < arrayOfItems$$1.length;
  }
  var v263 = outputWindow.document;
  JAM.call(v263.write, v263, ["</tbody></table>\n"], JAM.policy.p11);
  return true;
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v270 = sequence$$17.length > 0;
  for (;v270;) {
    maxNum$$1 = sequence$$17.length;
    randNum$$1 = JAM.call(Math.floor, Math, [Math.random() * maxNum$$1], JAM.policy.p17);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p17);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p13);
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [randNum$$1 + 1, sequence$$17.length], JAM.policy.p15);
    sequence$$17 = tempString1 + tempString2;
    if (tempSeq.length == 60) {
      var v267 = outputWindow.document;
      JAM.call(v267.write, v267, [tempSeq + "\n"], JAM.policy.p16);
      tempSeq = "";
    }
    v270 = sequence$$17.length > 0;
  }
  var v271 = outputWindow.document;
  JAM.call(v271.write, v271, [tempSeq + "\n"], JAM.policy.p16);
  return true;
}
function rangeExtract() {
  var theDocument = document;
  var newDna = "";
  var maxInput$$3 = 5E5;
  var matchFound = false;
  var ranges = new Array;
  if (testScript() == false) {
    return;
  }
  var v749 = checkFormElement(theDocument.forms[0].elements[0]) == false;
  if (!v749) {
    v749 = checkSequenceLength(theDocument.forms[0].elements[0].value, maxInput$$3) == false;
  }
  var v566 = v749;
  if (!v566) {
    v566 = checkFormElement(theDocument.forms[0].elements[1]) == false;
  }
  if (v566) {
    return;
  }
  var v275 = theDocument.forms[0].elements[1].value;
  var arrayOfRanges = JAM.call(v275.split, v275, [/,/], JAM.policy.p17);
  var arrayOfStartAndEnd;
  var i$$11 = 0;
  var v281 = i$$11 < arrayOfRanges.length;
  for (;v281;) {
    var v276 = arrayOfRanges[i$$11];
    arrayOfStartAndEnd = JAM.call(v276.split, v276, [/\.\./], JAM.policy.p17);
    if (arrayOfStartAndEnd.length == 1) {
      matchFound = true;
      JAM.call(ranges.push, ranges, [new Range(arrayOfStartAndEnd[0], arrayOfStartAndEnd[0])], JAM.policy.p16);
    } else {
      if (arrayOfStartAndEnd.length == 2) {
        matchFound = true;
        JAM.call(ranges.push, ranges, [new Range(arrayOfStartAndEnd[0], arrayOfStartAndEnd[1])], JAM.policy.p16);
      }
    }
    i$$11++;
    v281 = i$$11 < arrayOfRanges.length;
  }
  if (matchFound == false) {
    alert("No ranges were entered.");
    return;
  }
  openWindow();
  openPre();
  var arrayOfFasta$$1 = getArrayOfFasta(theDocument.forms[0].elements[0].value);
  i$$11 = 0;
  var v289 = i$$11 < arrayOfFasta$$1.length;
  for (;v289;) {
    newProtein = getSequenceFromFasta(arrayOfFasta$$1[i$$11]);
    title = getTitleFromFasta(arrayOfFasta$$1[i$$11]);
    newProtein = removeNonProteinAllowDegen();
    var v286 = outputWindow.document;
    JAM.call(v286.write, v286, [getFastaTitleFromTitleAndSequence()], JAM.policy.p16);
    writeSequenceRanges(ranges, theDocument.forms[0].elements[5].options[theDocument.forms[0].elements[5].selectedIndex].value);
    i$$11++;
    v289 = i$$11 < arrayOfFasta$$1.length;
  }
  closePre();
  closeWindow();
  return;
}
function writeSequenceRanges(ranges$$1, segmentType) {
  var sequence$$18 = newProtein;
  var rangeGroup = new RangeGroup(segmentType);
  var center_base = JAM.call(Math.round, Math, [sequence$$18.length / 2], JAM.policy.p16);
  var i$$12 = 0;
  var v304 = i$$12 < ranges$$1.length;
  for (;v304;) {
    var v291 = ranges$$1[i$$12];
    var v582 = ranges$$1[i$$12].start.toString();
    var v1093 = JAM.call(v582.replace, v582, [/start|begin/gi, 1], JAM.policy.p15);
    v291.start = v1093;
    var v292 = ranges$$1[i$$12];
    var v583 = ranges$$1[i$$12].start.toString();
    var v1094 = JAM.call(v583.replace, v583, [/stop|end/gi, sequence$$18.length], JAM.policy.p15);
    v292.start = v1094;
    var v293 = ranges$$1[i$$12];
    var v585 = ranges$$1[i$$12].start.toString();
    var v1095 = JAM.call(v585.replace, v585, [/length/gi, sequence$$18.length], JAM.policy.p15);
    v293.start = v1095;
    var v294 = ranges$$1[i$$12];
    var v587 = ranges$$1[i$$12].start.toString();
    var v1096 = JAM.call(v587.replace, v587, [/middle|center|centre/gi, center_base], JAM.policy.p15);
    v294.start = v1096;
    var v295 = ranges$$1[i$$12];
    var v588 = ranges$$1[i$$12].stop.toString();
    var v1097 = JAM.call(v588.replace, v588, [/start|begin/gi, 1], JAM.policy.p15);
    v295.stop = v1097;
    var v296 = ranges$$1[i$$12];
    var v589 = ranges$$1[i$$12].stop.toString();
    var v1098 = JAM.call(v589.replace, v589, [/stop|end/gi, sequence$$18.length], JAM.policy.p15);
    v296.stop = v1098;
    var v297 = ranges$$1[i$$12];
    var v591 = ranges$$1[i$$12].stop.toString();
    var v1099 = JAM.call(v591.replace, v591, [/length/gi, sequence$$18.length], JAM.policy.p15);
    v297.stop = v1099;
    var v298 = ranges$$1[i$$12];
    var v593 = ranges$$1[i$$12].stop.toString();
    var v1100 = JAM.call(v593.replace, v593, [/middle|center|centre/gi, center_base], JAM.policy.p15);
    v298.stop = v1100;
    try {
      var v299 = ranges$$1[i$$12];
      var v764 = ranges$$1[i$$12].start.toString();
      if (JAM.isEval(eval)) {
        var v594 = eval("introspect(JAM.policy.pFull) { " + v764 + " }")
      } else {
        var v594 = JAM.call(eval, null, [v764])
      }
      var v1101 = parseInt(v594);
      v299.start = v1101;
    } catch (e$$5) {
      alert("Could not evaluate the following expression: " + ranges$$1[i$$12].start);
      return;
    }
    try {
      var v301 = ranges$$1[i$$12];
      var v766 = ranges$$1[i$$12].stop.toString();
      if (JAM.isEval(eval)) {
        var v596 = eval("introspect(JAM.policy.pFull) { " + v766 + " }")
      } else {
        var v596 = JAM.call(eval, null, [v766])
      }
      var v1102 = parseInt(v596);
      v301.stop = v1102;
    } catch (e$$6) {
      alert("Could not evaluate the following expression: " + ranges$$1[i$$12].stop);
      return;
    }
    JAM.call(rangeGroup.addRange, rangeGroup, [ranges$$1[i$$12]], JAM.policy.p16);
    i$$12++;
    v304 = i$$12 < ranges$$1.length;
  }
  JAM.call(rangeGroup.writeRanges, rangeGroup, [sequence$$18], JAM.policy.p16);
  return;
}
function getSequence(sequence$$19) {
  var problem = false;
  var warnings = new Array;
  if (this.start == this.stop) {
    if (this.start < 1) {
      problem = true;
      JAM.call(warnings.push, warnings, ["position value of " + this.start + " is less than 1"], JAM.policy.p16);
    }
    if (this.start > sequence$$19.length) {
      problem = true;
      JAM.call(warnings.push, warnings, ["position value of " + this.start + " is greater than the sequence length"], JAM.policy.p16);
    }
  } else {
    if (this.start < 1) {
      problem = true;
      JAM.call(warnings.push, warnings, ["position value of " + this.start + " is less than 1"], JAM.policy.p16);
    }
    if (this.stop < 1) {
      problem = true;
      JAM.call(warnings.push, warnings, ["position value of " + this.stop + " is less than 1"], JAM.policy.p16);
    }
    if (this.start > sequence$$19.length) {
      problem = true;
      JAM.call(warnings.push, warnings, ["position value of " + this.start + " is greater than the sequence length"], JAM.policy.p16);
    }
    if (this.stop > sequence$$19.length) {
      problem = true;
      JAM.call(warnings.push, warnings, ["position value of " + this.stop + " is greater than the sequence length"], JAM.policy.p16);
    }
    if (this.start > this.stop) {
      problem = true;
      JAM.call(warnings.push, warnings, ["stop position is less than start position in range " + this.start + " to " + this.stop], JAM.policy.p16);
    }
  }
  if (problem) {
    alert("An entry was skipped because of the following:\n" + JAM.call(warnings.join, warnings, [",\n"], JAM.policy.p11));
    return false;
  } else {
    if (this.start == this.stop) {
      return JAM.call(sequence$$19.charAt, sequence$$19, [this.start - 1], JAM.policy.p16);
    } else {
      return JAM.call(sequence$$19.substring, sequence$$19, [this.start - 1, this.stop], JAM.policy.p27);
    }
  }
  return;
}
function getTitle() {
  if (this.start == this.stop) {
    return "&gt;residue " + this.start;
  } else {
    return "&gt;residue " + this.start + " to " + this.stop;
  }
  return;
}
function Range(start$$4, stop) {
  this.start = start$$4;
  this.stop = stop;
  return;
}
function addRange(range$$5) {
  var v329 = this.ranges;
  JAM.call(v329.push, v329, [range$$5], JAM.policy.p16);
  return;
}
function writeRanges(sequence$$20) {
  function v9(str$$15, p1$$9, offset$$17, s$$11) {
    return JAM.call(sequence$$20.substring, sequence$$20, [offset$$17, offset$$17 + p1$$9.length], JAM.policy.p27);
  }
  function v8(str$$14, p1$$8, p2$$3, offset$$16, s$$10) {
    return p1$$8 + JAM.call(sequence$$20.substring, sequence$$20, [p1$$8.length, p1$$8.length + p2$$3.length], JAM.policy.p27);
  }
  function v7(str$$13, p1$$7, offset$$15, s$$9) {
    return getRandomSequence(p1$$7.length);
  }
  function v6(str$$12, p1$$6, p2$$2, offset$$14, s$$8) {
    return p1$$6 + getRandomSequence(p2$$2.length);
  }
  function v5(str$$11, p1$$5, offset$$13, s$$7) {
    return p1$$5.toLowerCase();
  }
  function v4(str$$10, p1$$4, p2$$1, offset$$12, s$$6) {
    return p1$$4 + p2$$1.toLowerCase();
  }
  function v3(str$$9, p1$$3, offset$$11, s$$5) {
    return p1$$3.toUpperCase();
  }
  function v2(str$$8, p1$$2, p2, offset$$10, s$$4) {
    return p1$$2 + p2.toUpperCase();
  }
  var sequenceArray$$1 = new Array;
  if (this.type == "new_sequence") {
    var i$$13 = 0;
    var v338 = i$$13 < this.ranges.length;
    for (;v338;) {
      var v779 = this.ranges[i$$13];
      if (JAM.call(v779.getSequence, v779, [sequence$$20], JAM.policy.p16) != "") {
        var v635 = this.ranges[i$$13];
        JAM.call(sequenceArray$$1.push, sequenceArray$$1, [JAM.call(v635.getSequence, v635, [sequence$$20], JAM.policy.p16)], JAM.policy.p16);
      }
      i$$13++;
      v338 = i$$13 < this.ranges.length;
    }
    var v339 = outputWindow.document;
    JAM.call(v339.write, v339, [addReturns(JAM.call(sequenceArray$$1.join, sequenceArray$$1, [""], JAM.policy.p11)) + "\n\n"], JAM.policy.p16);
    return true;
  }
  if (this.type == "separate") {
    i$$13 = 0;
    var v347 = i$$13 < this.ranges.length;
    for (;v347;) {
      var v784 = this.ranges[i$$13];
      if (JAM.call(v784.getSequence, v784, [sequence$$20], JAM.policy.p16) != "") {
        var v342 = outputWindow.document;
        JAM.call(v342.write, v342, [this.ranges[i$$13].getTitle() + "\n"], JAM.policy.p16);
        var v344 = outputWindow.document;
        var v883 = this.ranges[i$$13];
        JAM.call(v344.write, v344, [addReturns(JAM.call(v883.getSequence, v883, [sequence$$20], JAM.policy.p16)) + "\n\n"], JAM.policy.p16);
      }
      i$$13++;
      v347 = i$$13 < this.ranges.length;
    }
    return true;
  }
  if (this.type == "uppercased") {
    var re$$3;
    sequence$$20 = sequence$$20.toLowerCase();
    i$$13 = 0;
    var v353 = i$$13 < this.ranges.length;
    for (;v353;) {
      var v789 = this.ranges[i$$13];
      if (JAM.call(v789.getSequence, v789, [sequence$$20], JAM.policy.p16) != "") {
        if (this.ranges[i$$13].start > 1) {
          re$$3 = "(.{" + (this.ranges[i$$13].start - 1) + "})\\B(.{" + (this.ranges[i$$13].stop - this.ranges[i$$13].start + 1) + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [re$$3, v2], JAM.policy.p27);
        } else {
          re$$3 = "(.{" + (this.ranges[i$$13].stop - this.ranges[i$$13].start + 1) + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [re$$3, v3], JAM.policy.p27);
        }
      }
      i$$13++;
      v353 = i$$13 < this.ranges.length;
    }
    var v354 = outputWindow.document;
    JAM.call(v354.write, v354, [addReturns(sequence$$20) + "\n\n"], JAM.policy.p16);
    return true;
  }
  if (this.type == "lowercased") {
    sequence$$20 = sequence$$20.toUpperCase();
    i$$13 = 0;
    var v361 = i$$13 < this.ranges.length;
    for (;v361;) {
      var v796 = this.ranges[i$$13];
      if (JAM.call(v796.getSequence, v796, [sequence$$20], JAM.policy.p16) != "") {
        if (this.ranges[i$$13].start > 1) {
          re$$3 = "(.{" + (this.ranges[i$$13].start - 1) + "})\\B(.{" + (this.ranges[i$$13].stop - this.ranges[i$$13].start + 1) + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [re$$3, v4], JAM.policy.p27);
        } else {
          re$$3 = "(.{" + (this.ranges[i$$13].stop - this.ranges[i$$13].start + 1) + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [re$$3, v5], JAM.policy.p27);
        }
      }
      i$$13++;
      v361 = i$$13 < this.ranges.length;
    }
    var v362 = outputWindow.document;
    JAM.call(v362.write, v362, [addReturns(sequence$$20) + "\n\n"], JAM.policy.p16);
    return true;
  }
  if (this.type == "randomized") {
    i$$13 = 0;
    var v369 = i$$13 < this.ranges.length;
    for (;v369;) {
      var v803 = this.ranges[i$$13];
      if (JAM.call(v803.getSequence, v803, [sequence$$20], JAM.policy.p16) != "") {
        if (this.ranges[i$$13].start > 1) {
          re$$3 = "(.{" + (this.ranges[i$$13].start - 1) + "})\\B(.{" + (this.ranges[i$$13].stop - this.ranges[i$$13].start + 1) + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [re$$3, v6], JAM.policy.p27);
        } else {
          re$$3 = "(.{" + (this.ranges[i$$13].stop - this.ranges[i$$13].start + 1) + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [re$$3, v7], JAM.policy.p27);
        }
      }
      i$$13++;
      v369 = i$$13 < this.ranges.length;
    }
    var v370 = outputWindow.document;
    JAM.call(v370.write, v370, [addReturns(sequence$$20) + "\n\n"], JAM.policy.p16);
    return true;
  }
  if (this.type == "preserved") {
    var randomSequence = getRandomSequence(sequence$$20.length);
    i$$13 = 0;
    var v378 = i$$13 < this.ranges.length;
    for (;v378;) {
      var v810 = this.ranges[i$$13];
      if (JAM.call(v810.getSequence, v810, [sequence$$20], JAM.policy.p16) != "") {
        if (this.ranges[i$$13].start > 1) {
          re$$3 = "(.{" + (this.ranges[i$$13].start - 1) + "})\\B(.{" + (this.ranges[i$$13].stop - this.ranges[i$$13].start + 1) + "})";
          re$$3 = new RegExp(re$$3);
          randomSequence = JAM.call(randomSequence.replace, randomSequence, [re$$3, v8], JAM.policy.p27);
        } else {
          re$$3 = "(.{" + (this.ranges[i$$13].stop - this.ranges[i$$13].start + 1) + "})";
          re$$3 = new RegExp(re$$3);
          randomSequence = JAM.call(randomSequence.replace, randomSequence, [re$$3, v9], JAM.policy.p27);
        }
      }
      i$$13++;
      v378 = i$$13 < this.ranges.length;
    }
    var v379 = outputWindow.document;
    JAM.call(v379.write, v379, [addReturns(randomSequence) + "\n\n"], JAM.policy.p16);
    return true;
  }
  return;
}
function RangeGroup(type$$25) {
  this.type = type$$25;
  var v1103 = new Array;
  this.ranges = v1103;
  return;
}
new Range(0, 0);
Range.prototype.getSequence = getSequence;
Range.prototype.getTitle = getTitle;
new RangeGroup("", "");
RangeGroup.prototype.addRange = addRange;
RangeGroup.prototype.writeRanges = writeRanges;
JAM.set(document, "onload", v10);
JAM.set(JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p11), "onclick", v11);
JAM.set(JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p11), "onclick", v12)
