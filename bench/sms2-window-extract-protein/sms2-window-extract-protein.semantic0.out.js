// sms2-window-extract-protein.js
function v12() {
  document.forms[0].elements[0].value = " ";
  return;
}
function v11() {
  try {
    windowExtract();
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
  var v19 = i$$1 < arrayOfTitles.length;
  for (;v19;) {
    var v958 = arrayOfTitles[i$$1];
    var v709 = JAM.call(v958.search, v958, [/\S/], JAM.policy.p18) == -1;
    if (!v709) {
      var v959 = arrayOfSequences[i$$1];
      v709 = JAM.call(v959.search, v959, [/\S/], JAM.policy.p18) == -1;
    }
    var v411 = v709;
    if (!v411) {
      v411 = arrayOfSequences[i$$1].length != lengthOfAlign;
    }
    if (v411) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    v19 = i$$1 < arrayOfTitles.length;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v960 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p18) == -1;
  if (!v960) {
    v960 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p18) == -1;
  }
  var v858 = v960;
  if (!v858) {
    v858 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p18) == -1;
  }
  var v712 = v858;
  if (!v712) {
    v712 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p18) == -1;
  }
  var v413 = v712;
  if (!v413) {
    v413 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p18) == -1;
  }
  if (v413) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v715 = formElement.value;
  if (JAM.call(v715.search, v715, [/\S/], JAM.policy.p18) == -1) {
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
  var v24 = z$$2 < arrayOfPatterns.length;
  for (;v24;) {
    var v716 = arrayOfPatterns[z$$2];
    if (JAM.call(v716.search, v716, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p18) == -1) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    if (moreExpressionCheck(arrayOfPatterns[z$$2]) == false) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    v24 = z$$2 < arrayOfPatterns.length;
  }
  var geneticCodeMatchResult = new Array(arrayOfPatterns.length);
  var geneticCodeMatchExp = new Array(arrayOfPatterns.length);
  var j = 0;
  var v30 = j < arrayOfPatterns.length;
  for (;v30;) {
    var v718 = arrayOfPatterns[j];
    var v27 = JAM.call(v718.match, v718, [/\/.+\//], JAM.policy.p18) + "gi";
    if (JAM.isEval(eval)) {
      var v1181 = eval("introspect(JAM.policy.pFull) { " + v27 + " }")
    } else {
      var v1181 = JAM.call(eval, null, [v27])
    }
    geneticCodeMatchExp[j] = v1181;
    var v421 = arrayOfPatterns[j];
    var v1182 = JAM.call(v421.match, v421, [/=[a-zA-Z\*]/], JAM.policy.p18).toString();
    geneticCodeMatchResult[j] = v1182;
    var v29 = geneticCodeMatchResult[j];
    var v1183 = JAM.call(v29.replace, v29, [/=/g, ""], JAM.policy.p15);
    geneticCodeMatchResult[j] = v1183;
    j++;
    v30 = j < arrayOfPatterns.length;
  }
  var i$$2 = 0;
  var v37 = i$$2 <= testSequence.length - 3;
  for (;v37;) {
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, i$$2 + 3], JAM.policy.p15);
    j = 0;
    var v35 = j < geneticCodeMatchExp.length;
    for (;v35;) {
      if (JAM.call(codon.search, codon, [geneticCodeMatchExp[j]], JAM.policy.p17) != -1) {
        if (oneMatch == true) {
          alert("Genetic code error: more than one amino acid is coded by the codon: " + codon + ".");
          return false;
        }
        oneMatch = true;
      }
      j++;
      v35 = j < geneticCodeMatchExp.length;
    }
    if (oneMatch == false) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    v37 = i$$2 <= testSequence.length - 3;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v39 = z$$3 < arrayOfPatterns$$1.length;
  for (;v39;) {
    var v722 = arrayOfPatterns$$1[z$$3];
    if (JAM.call(v722.search, v722, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p18) != -1) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    v39 = z$$3 < arrayOfPatterns$$1.length;
  }
  var i$$3 = 0;
  var v43 = i$$3 < arrayOfPatterns$$1.length;
  for (;v43;) {
    var re = new RegExp("[" + arrayOfPatterns$$1[i$$3] + "]", "gi");
    var j$$1 = i$$3 + 1;
    var v42 = j$$1 < arrayOfPatterns$$1.length;
    for (;v42;) {
      var v724 = arrayOfPatterns$$1[j$$1];
      if (JAM.call(v724.search, v724, [re], JAM.policy.p17) != -1) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      v42 = j$$1 < arrayOfPatterns$$1.length;
    }
    i$$3++;
    v43 = i$$3 < arrayOfPatterns$$1.length;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v46 = z$$4 < arrayOfPatterns$$2.length;
  for (;v46;) {
    var v725 = arrayOfPatterns$$2[z$$4];
    if (JAM.call(v725.search, v725, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p18) == -1) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    if (moreExpressionCheck(arrayOfPatterns$$2[z$$4]) == false) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    v46 = z$$4 < arrayOfPatterns$$2.length;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v861 = getSequenceFromFasta(text$$7);
  if (JAM.call(v861.replace, v861, [/[^A-Za-z]/g, ""], JAM.policy.p15).length > maxInput) {
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
  var v59 = i$$4 < alignArray.length;
  for (;v59;) {
    var v728 = alignArray[i$$4];
    if (JAM.call(v728.search, v728, [/[^\s]+\s/], JAM.policy.p18) == -1) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    v59 = i$$4 < alignArray.length;
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
  if (JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p18) != -1) {
    var v61 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p17);
    for (;v61;) {
      JAM.call(arrayOfFasta.push, arrayOfFasta, [matchArray[0]], JAM.policy.p17);
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
  var stringToReturn = "&gt;results for " + sequence$$2.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p18) != -1) {
    stringToReturn = stringToReturn + '"' + fastaSequenceTitle + '"';
  }
  stringToReturn = stringToReturn + ' starting "' + JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p13) + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var stringToReturn$$1 = "Search results for " + sequenceOne.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p18) != -1) {
    stringToReturn$$1 = stringToReturn$$1 + '"' + fastaSequenceTitleOne + '"';
  }
  stringToReturn$$1 = stringToReturn$$1 + ' starting "' + JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p13) + '"\n';
  stringToReturn$$1 = stringToReturn$$1 + "and " + sequenceTwo.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p18) != -1) {
    stringToReturn$$1 = stringToReturn$$1 + '"' + fastaSequenceTitleTwo + '"';
  }
  stringToReturn$$1 = stringToReturn$$1 + ' starting "' + JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p13) + '"';
  return '<div class="info">' + stringToReturn$$1 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var geneticCodeMatchExp$$1 = new Array(arrayOfPatterns$$3.length);
  var j$$2 = 0;
  var v78 = j$$2 < arrayOfPatterns$$3.length;
  for (;v78;) {
    var v729 = arrayOfPatterns$$3[j$$2];
    var v77 = JAM.call(v729.match, v729, [/\/.+\//], JAM.policy.p18) + "gi";
    if (JAM.isEval(eval)) {
      var v1184 = eval("introspect(JAM.policy.pFull) { " + v77 + " }")
    } else {
      var v1184 = JAM.call(eval, null, [v77])
    }
    geneticCodeMatchExp$$1[j$$2] = v1184;
    j$$2++;
    v78 = j$$2 < arrayOfPatterns$$3.length;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var geneticCodeMatchResult$$1 = new Array(arrayOfPatterns$$4.length);
  var j$$3 = 0;
  var v82 = j$$3 < arrayOfPatterns$$4.length;
  for (;v82;) {
    var v471 = arrayOfPatterns$$4[j$$3];
    var v1185 = JAM.call(v471.match, v471, [/=[a-zA-Z\*]/], JAM.policy.p18).toString();
    geneticCodeMatchResult$$1[j$$3] = v1185;
    var v81 = geneticCodeMatchResult$$1[j$$3];
    var v1186 = JAM.call(v81.replace, v81, [/=/g, ""], JAM.policy.p15);
    geneticCodeMatchResult$$1[j$$3] = v1186;
    j$$3++;
    v82 = j$$3 < arrayOfPatterns$$4.length;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var stringToReturn$$2 = "Results for " + sequence$$3.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p18) != -1) {
    stringToReturn$$2 = stringToReturn$$2 + '"' + fastaSequenceTitle$$1 + '"';
  }
  stringToReturn$$2 = stringToReturn$$2 + ' starting "' + JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p13) + '"';
  return '<div class="info">' + stringToReturn$$2 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var stringToReturn$$3 = "Results for " + topology + " " + sequence$$4.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p18) != -1) {
    stringToReturn$$3 = stringToReturn$$3 + '"' + fastaSequenceTitle$$2 + '"';
  }
  stringToReturn$$3 = stringToReturn$$3 + ' starting "' + JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p13) + '"';
  return '<div class="info">' + stringToReturn$$3 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var stringToReturn$$4 = "Alignment results for " + sequenceOne$$1.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p18) != -1) {
    stringToReturn$$4 = stringToReturn$$4 + '"' + fastaSequenceTitleOne$$1 + '"';
  }
  stringToReturn$$4 = stringToReturn$$4 + ' starting "' + JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p13) + '"\n';
  stringToReturn$$4 = stringToReturn$$4 + "and " + sequenceTwo$$1.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p18) != -1) {
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
  var v103 = j$$4 < lengthOut;
  for (;v103;) {
    tempNum = JAM.call(Math.floor, Math, [Math.random() * components.length], JAM.policy.p18);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p17);
    j$$4++;
    v103 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p11);
}
function getSequenceFromFasta(sequenceRecord) {
  if (JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p18) != -1) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p15);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  if (JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p18) != -1) {
    fastaTitle = JAM.call(sequenceRecord$$1.match, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p15).toString();
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\>|[\f\n\r]/g, ""], JAM.policy.p15);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\s{2,}/g, " "], JAM.policy.p15);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/[\<\>]/gi, ""], JAM.policy.p15);
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  var v1149 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p18) != -1;
  if (!v1149) {
    v1149 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p18) != -1;
  }
  var v1136 = v1149;
  if (!v1136) {
    v1136 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p18) != -1;
  }
  var v1120 = v1136;
  if (!v1120) {
    v1120 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p18) != -1;
  }
  var v1102 = v1120;
  if (!v1102) {
    v1102 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p18) != -1;
  }
  var v1074 = v1102;
  if (!v1074) {
    v1074 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p18) != -1;
  }
  var v1029 = v1074;
  if (!v1029) {
    v1029 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p18) != -1;
  }
  var v963 = v1029;
  if (!v963) {
    v963 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p18) != -1;
  }
  var v862 = v963;
  if (!v862) {
    v862 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p18) != -1;
  }
  var v731 = v862;
  if (!v731) {
    v731 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p18) != -1;
  }
  var v499 = v731;
  if (!v499) {
    v499 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p18) != -1;
  }
  if (v499) {
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
  JAM.call(v112.write, v112, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n'], JAM.policy.p17);
  if (isColor) {
    var v114 = outputWindow.document;
    JAM.call(v114.write, v114, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; background-color: #66FF00}\n" + 
    "span.two, td.two {color: #000000; background-color: #FFFF66}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n" + "td.many {color: #000000}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + 
    "</style>\n"], JAM.policy.p17);
  } else {
    var v116 = outputWindow.document;
    JAM.call(v116.write, v116, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n" + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "td.many {color: #000000; background-color: #FFFFFF}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"], JAM.policy.p17);
  }
  var v118 = outputWindow.document;
  JAM.call(v118.write, v118, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$7 + " results</div>\n"], JAM.policy.p17);
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
  JAM.call(v120.write, v120, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n'], JAM.policy.p17);
  if (isBackground) {
    var v122 = outputWindow.document;
    JAM.call(v122.write, v122, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #FFFFFF; background-color: #000000}\n" + "span.sim {color: #FFFFFF; background-color: #666666}\n" + 
    "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n" + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n" + "span.c, span.m {color: #000000; background-color: #FFFF00}\n" + "span.s, span.t {color: #000000; background-color: #66FF00}\n" + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n" + "span.d, span.e {color: #000000; background-color: #0066FF}\n" + "span.n, span.q {color: #000000; background-color: #996633}\n" + "span.p {color: #000000; background-color: #FF99FF}\n" + 
    "</style>\n"], JAM.policy.p17);
  } else {
    var v124 = outputWindow.document;
    JAM.call(v124.write, v124, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n" + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n" + 
    "span.diff {color: #999999; background-color: #FFFFFF}\n" + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n" + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n" + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n" + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n" + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n" + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n" + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n" + 
    "span.p {color: #00FFCC; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"], JAM.policy.p17);
  }
  var v126 = outputWindow.document;
  JAM.call(v126.write, v126, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$9 + " results</div>\n"], JAM.policy.p17);
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
  if (JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p18) != -1) {
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
  if (JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p18) == -1) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v873 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p18) == -1;
  if (!v873) {
    v873 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p18) == -1;
  }
  var v742 = v873;
  if (!v742) {
    v742 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p18) == -1;
  }
  var v514 = v742;
  if (!v514) {
    v514 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p18) == -1;
  }
  if (v514) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  if (JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p18) == -1) {
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
  if (JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p18) != -1) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  if (JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p18) != -1) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v876 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p18) == -1;
  if (!v876) {
    v876 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p18) == -1;
  }
  var v745 = v876;
  if (!v745) {
    v745 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p18) == -1;
  }
  var v519 = v745;
  if (!v519) {
    v519 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p18) == -1;
  }
  if (v519) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v879 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p18) == -1;
  if (!v879) {
    v879 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p18) == -1;
  }
  var v748 = v879;
  if (!v748) {
    v748 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p18) == -1;
  }
  var v520 = v748;
  if (!v520) {
    v520 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p18) == -1;
  }
  if (v520) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  if (JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p18) == -1) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v882 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p18) == -1;
  if (!v882) {
    v882 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p18) == -1;
  }
  var v751 = v882;
  if (!v751) {
    v751 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p18) == -1;
  }
  var v522 = v751;
  if (!v522) {
    v522 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p18) == -1;
  }
  if (v522) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  if (JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p18) == -1) {
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
    lineOfText = rightNum(i$$5 + 1, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v153 = j$$6 <= basePerLine / groupSize;
    for (;v153;) {
      var v152 = k < groupSize;
      for (;v152;) {
        lineOfText = lineOfText + JAM.call(text$$10.charAt, text$$10, [k + i$$5], JAM.policy.p17);
        k = k + 1;
        v152 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      v153 = j$$6 <= basePerLine / groupSize;
    }
    var v154 = outputWindow.document;
    JAM.call(v154.write, v154, [lineOfText + "\n"], JAM.policy.p17);
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
    if (v527) {
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
    var v164 = j$$7 <= basePerLine$$2 / groupSize$$2;
    for (;v164;) {
      var v160 = k$$1 < groupSize$$2;
      for (;v160;) {
        if (i$$6 + k$$1 >= stopBase$$2) {
          break;
        }
        lineOfText$$1 = lineOfText$$1 + JAM.call(text$$12.charAt, text$$12, [k$$1 + i$$6], JAM.policy.p17);
        k$$1 = k$$1 + 1;
        v160 = k$$1 < groupSize$$2;
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
      v164 = j$$7 <= basePerLine$$2 / groupSize$$2;
    }
    if (numberPosition$$1 == "left") {
      var v165 = outputWindow.document;
      JAM.call(v165.write, v165, [rightNum(adjustNumbering(lineNum, numberingAdjustment), "", 8, tabIn$$3) + lineOfText$$1 + "\n"], JAM.policy.p17);
      if (strands$$1 == "two") {
        var v167 = outputWindow.document;
        JAM.call(v167.write, v167, [rightNum(adjustNumbering(lineNum, numberingAdjustment), "", 8, tabIn$$3) + complement(lineOfText$$1) + "\n"], JAM.policy.p17);
        var v169 = outputWindow.document;
        JAM.call(v169.write, v169, ["\n"], JAM.policy.p11);
      }
    } else {
      if (numberPosition$$1 == "right") {
        var v171 = outputWindow.document;
        JAM.call(v171.write, v171, [lineOfText$$1 + adjustNumbering(i$$6, numberingAdjustment) + "\n"], JAM.policy.p17);
        if (strands$$1 == "two") {
          var v173 = outputWindow.document;
          JAM.call(v173.write, v173, [complement(lineOfText$$1) + adjustNumbering(i$$6, numberingAdjustment) + "\n"], JAM.policy.p17);
          var v175 = outputWindow.document;
          JAM.call(v175.write, v175, ["\n"], JAM.policy.p11);
        }
      } else {
        if (numberPosition$$1 == "above") {
          var v177 = outputWindow.document;
          JAM.call(v177.write, v177, [aboveNum + "\n"], JAM.policy.p17);
          var v179 = outputWindow.document;
          JAM.call(v179.write, v179, [lineOfText$$1 + "\n"], JAM.policy.p17);
          if (strands$$1 == "two") {
            var v181 = outputWindow.document;
            JAM.call(v181.write, v181, [complement(lineOfText$$1) + "\n"], JAM.policy.p17);
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
    var v195 = j$$8 <= basePerLine$$3 / groupSize$$3;
    for (;v195;) {
      var v191 = k$$2 < groupSize$$3;
      for (;v191;) {
        if (i$$7 + k$$2 >= stopBase$$3) {
          break;
        }
        lineOfText$$2 = lineOfText$$2 + JAM.call(text$$13.charAt, text$$13, [k$$2 + i$$7], JAM.policy.p17);
        k$$2 = k$$2 + 1;
        v191 = k$$2 < groupSize$$3;
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
      v195 = j$$8 <= basePerLine$$3 / groupSize$$3;
    }
    if (numberPosition$$2 == "left") {
      var v196 = outputWindow.document;
      JAM.call(v196.write, v196, [rightNum(lineNum$$1, "", 8, tabIn$$4) + lineOfText$$2 + "\n"], JAM.policy.p17);
    } else {
      if (numberPosition$$2 == "right") {
        var v198 = outputWindow.document;
        JAM.call(v198.write, v198, [lineOfText$$2 + i$$7 + "\n"], JAM.policy.p17);
      } else {
        if (numberPosition$$2 == "above") {
          var v200 = outputWindow.document;
          JAM.call(v200.write, v200, [aboveNum$$1 + "\n"], JAM.policy.p17);
          var v202 = outputWindow.document;
          JAM.call(v202.write, v202, [lineOfText$$2 + "\n"], JAM.policy.p17);
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
  var v761 = sequence$$13.length <= firstIndexToMutate;
  if (!v761) {
    v761 = lastIndexToMutate < 0;
  }
  var v544 = v761;
  if (!v544) {
    v544 = lastIndexToMutate <= firstIndexToMutate;
  }
  if (v544) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v216 = i$$8 < numMut;
  for (;v216;) {
    maxNum = sequence$$13.length;
    randNum = JAM.call(Math.floor, Math, [Math.random() * maxNum], JAM.policy.p18);
    var v546 = randNum < firstIndexToMutate;
    if (!v546) {
      v546 = randNum > lastIndexToMutate;
    }
    if (v546) {
      numMut++;
      i$$8++;
      v216 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p18);
    needNewChar = true;
    for (;needNewChar;) {
      componentsIndex = JAM.call(Math.round, Math, [Math.random() * components$$1.length], JAM.policy.p18);
      if (componentsIndex == components$$1.length) {
        componentsIndex = 0;
      }
      if (components$$1[componentsIndex] != currentChar) {
        needNewChar = false;
      }
    }
    sequence$$13 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p13) + components$$1[componentsIndex] + JAM.call(sequence$$13.substring, sequence$$13, [randNum + 1, sequence$$13.length], JAM.policy.p27);
    i$$8++;
    v216 = i$$8 < numMut;
  }
  var v217 = outputWindow.document;
  JAM.call(v217.write, v217, [addReturns(sequence$$13)], JAM.policy.p17);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v223 = j$$9 < lengthOut$$1;
  for (;v223;) {
    tempNum$$1 = JAM.call(Math.floor, Math, [Math.random() * components$$2.length], JAM.policy.p18);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    if (sequence$$14.length == 60) {
      var v220 = outputWindow.document;
      JAM.call(v220.write, v220, [sequence$$14 + "\n"], JAM.policy.p17);
      sequence$$14 = "";
    }
    j$$9++;
    v223 = j$$9 < lengthOut$$1;
  }
  var v224 = outputWindow.document;
  JAM.call(v224.write, v224, [sequence$$14 + "\n"], JAM.policy.p17);
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
  var v230 = outputWindow.document;
  JAM.call(v230.write, v230, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p11);
  var v231 = outputWindow.document;
  JAM.call(v231.write, v231, ['<tr><td class="title" width="200px">' + "Site:" + '</td><td class="title">' + "Positions:" + "</td></tr>\n"], JAM.policy.p17);
  var i$$9 = 0;
  var v248 = i$$9 < arrayOfItems.length;
  for (;v248;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v561 = arrayOfItems[i$$9];
    matchExp = JAM.call(v561.match, v561, [/\/.+\//], JAM.policy.p18) + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    var v891 = arrayOfItems[i$$9];
    var v562 = JAM.call(v891.match, v891, [/\)\D*\d+/], JAM.policy.p18).toString();
    cutDistance = parseFloat(JAM.call(v562.replace, v562, [/\)\D*/, ""], JAM.policy.p15));
    var v240 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p17);
    for (;v240;) {
      matchPosition = matchExp.lastIndex - cutDistance;
      var v563 = matchPosition >= lowerLimit;
      if (v563) {
        v563 = matchPosition < upperLimit;
      }
      if (v563) {
        timesFound++;
        tempString$$1 = tempString$$1 + ", " + (matchPosition - shiftValue + 1);
      }
      matchExp.lastIndex = matchExp.lastIndex - RegExp.lastMatch.length + 1;
      v240 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p17);
    }
    if (JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p18) != -1) {
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
    var v246 = outputWindow.document;
    var v1081 = '<tr><td class="' + backGroundClass + '">';
    var v1143 = arrayOfItems[i$$9];
    var v1110 = JAM.call(v1143.match, v1143, [/\([^\(]+\)/], JAM.policy.p18).toString();
    JAM.call(v246.write, v246, [v1081 + JAM.call(v1110.replace, v1110, [/\(|\)/g, ""], JAM.policy.p15) + '</td><td class="' + backGroundClass + '">' + tempString$$1 + "</td></tr>\n"], JAM.policy.p17);
    timesFound = 0;
    i$$9++;
    v248 = i$$9 < arrayOfItems.length;
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
  JAM.call(v251.write, v251, ['<tr><td class="title">' + "Pattern:" + '</td><td class="title">' + "Times found:" + '</td><td class="title">' + "Percentage:" + "</td></tr>\n"], JAM.policy.p17);
  var i$$10 = 0;
  var v261 = i$$10 < arrayOfItems$$1.length;
  for (;v261;) {
    var tempNumber = 0;
    var v572 = arrayOfItems$$1[i$$10];
    var matchExp$$1 = JAM.call(v572.match, v572, [/\/[^\/]+\//], JAM.policy.p18) + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    if (JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p17) != -1) {
      tempNumber = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p17).length;
    }
    var percentage = 0;
    var v771 = originalLength + 1;
    var v984 = arrayOfItems$$1[i$$10];
    if (v771 - parseFloat(JAM.call(v984.match, v984, [/\d+/], JAM.policy.p18)) > 0) {
      var v256 = 100 * tempNumber;
      var v575 = originalLength + 1;
      var v895 = arrayOfItems$$1[i$$10];
      percentage = v256 / (v575 - parseFloat(JAM.call(v895.match, v895, [/\d+/], JAM.policy.p18)));
    }
    var v259 = outputWindow.document;
    var v1144 = arrayOfItems$$1[i$$10];
    var v1111 = JAM.call(v1144.match, v1144, [/\([^\(]+\)\b/], JAM.policy.p18).toString();
    JAM.call(v259.write, v259, ["<tr><td>" + JAM.call(v1111.replace, v1111, [/\(|\)/g, ""], JAM.policy.p15) + "</td><td>" + tempNumber + "</td><td>" + JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p9) + "</td></tr>\n"], JAM.policy.p17);
    i$$10++;
    v261 = i$$10 < arrayOfItems$$1.length;
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
  var v269 = sequence$$17.length > 0;
  for (;v269;) {
    maxNum$$1 = sequence$$17.length;
    randNum$$1 = JAM.call(Math.floor, Math, [Math.random() * maxNum$$1], JAM.policy.p18);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p18);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p13);
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [randNum$$1 + 1, sequence$$17.length], JAM.policy.p15);
    sequence$$17 = tempString1 + tempString2;
    if (tempSeq.length == 60) {
      var v266 = outputWindow.document;
      JAM.call(v266.write, v266, [tempSeq + "\n"], JAM.policy.p17);
      tempSeq = "";
    }
    v269 = sequence$$17.length > 0;
  }
  var v270 = outputWindow.document;
  JAM.call(v270.write, v270, [tempSeq + "\n"], JAM.policy.p17);
  return true;
}
function windowExtract() {
  var theDocument = document;
  var newDna = "";
  var maxInput$$3 = 5E5;
  var matchFound = false;
  var ranges = new Array;
  if (testScript() == false) {
    return;
  }
  var v1039 = checkFormElement(theDocument.forms[0].elements[0]) == false;
  if (!v1039) {
    v1039 = checkSequenceLength(theDocument.forms[0].elements[0].value, maxInput$$3) == false;
  }
  var v986 = v1039;
  if (!v986) {
    v986 = checkFormElement(theDocument.forms[0].elements[1]) == false;
  }
  var v897 = v986;
  if (!v897) {
    v897 = checkFormElement(theDocument.forms[0].elements[3]) == false;
  }
  var v776 = v897;
  if (!v776) {
    var v1043 = theDocument.forms[0].elements[1].value;
    v776 = verifyMaxDigits(JAM.call(v1043.replace, v1043, [/[^\d]/g, ""], JAM.policy.p15), maxInput$$3) == false;
  }
  var v584 = v776;
  if (!v584) {
    var v990 = theDocument.forms[0].elements[3].value;
    v584 = verifyMaxDigits(JAM.call(v990.replace, v990, [/[^\d]/g, ""], JAM.policy.p15), maxInput$$3) == false;
  }
  if (v584) {
    return;
  }
  var v585 = theDocument.forms[0].elements[1].value;
  var windowSize = parseInt(JAM.call(v585.replace, v585, [/[^\d]/g, ""], JAM.policy.p15));
  var v586 = theDocument.forms[0].elements[3].value;
  var position = parseInt(JAM.call(v586.replace, v586, [/[^\d]/g, ""], JAM.policy.p15));
  var orientation = theDocument.forms[0].elements[2].value;
  var start$$4;
  var end$$1;
  if (orientation == "ending") {
    end$$1 = position;
    start$$4 = end$$1 - windowSize + 1;
  } else {
    if (orientation == "starting") {
      start$$4 = position;
      end$$1 = start$$4 + windowSize - 1;
    } else {
      if (orientation == "centered") {
        start$$4 = position - JAM.call(Math.round, Math, [windowSize / 2], JAM.policy.p17) + 1;
        end$$1 = start$$4 + windowSize - 1;
      }
    }
  }
  JAM.call(ranges.push, ranges, [new Range(start$$4, end$$1)], JAM.policy.p17);
  openWindow("Window Extractor Protein");
  openPre();
  var arrayOfFasta$$1 = getArrayOfFasta(theDocument.forms[0].elements[0].value);
  var i$$11 = 0;
  var v291 = i$$11 < arrayOfFasta$$1.length;
  for (;v291;) {
    newProtein = getSequenceFromFasta(arrayOfFasta$$1[i$$11]);
    title = getTitleFromFasta(arrayOfFasta$$1[i$$11]);
    newProtein = removeNonProteinAllowDegen();
    var v288 = outputWindow.document;
    JAM.call(v288.write, v288, [getFastaTitleFromTitleAndSequence()], JAM.policy.p17);
    writeSequenceRanges(ranges, theDocument.forms[0].elements[7].options[theDocument.forms[0].elements[7].selectedIndex].value);
    i$$11++;
    v291 = i$$11 < arrayOfFasta$$1.length;
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
  if (testScript() == false) {
    return false;
  }
  var v786 = checkFormElement(theDocument$$1.forms[0].elements[0]) == false;
  if (!v786) {
    v786 = checkSequenceLength(theDocument$$1.forms[0].elements[0].value, maxInput$$4) == false;
  }
  var v594 = v786;
  if (!v594) {
    v594 = checkFormElement(theDocument$$1.forms[0].elements[1]) == false;
  }
  if (v594) {
    return false;
  }
  var v294 = theDocument$$1.forms[0].elements[1].value;
  var arrayOfRanges = JAM.call(v294.split, v294, [/,/], JAM.policy.p18);
  var arrayOfStartAndEnd;
  var i$$12 = 0;
  var v300 = i$$12 < arrayOfRanges.length;
  for (;v300;) {
    var v295 = arrayOfRanges[i$$12];
    arrayOfStartAndEnd = JAM.call(v295.split, v295, [/\.\./], JAM.policy.p18);
    if (arrayOfStartAndEnd.length == 1) {
      matchFound$$1 = true;
      JAM.call(ranges$$1.push, ranges$$1, [new Range(arrayOfStartAndEnd[0], arrayOfStartAndEnd[0])], JAM.policy.p17);
    } else {
      if (arrayOfStartAndEnd.length == 2) {
        matchFound$$1 = true;
        JAM.call(ranges$$1.push, ranges$$1, [new Range(arrayOfStartAndEnd[0], arrayOfStartAndEnd[1])], JAM.policy.p17);
      }
    }
    i$$12++;
    v300 = i$$12 < arrayOfRanges.length;
  }
  if (matchFound$$1 == false) {
    alert("No ranges were entered.");
    return false;
  }
  openWindow("Range Extractor Protein");
  openPre();
  var arrayOfFasta$$2 = getArrayOfFasta(theDocument$$1.forms[0].elements[0].value);
  i$$12 = 0;
  var v308 = i$$12 < arrayOfFasta$$2.length;
  for (;v308;) {
    newProtein = getSequenceFromFasta(arrayOfFasta$$2[i$$12]);
    title = getTitleFromFasta(arrayOfFasta$$2[i$$12]);
    newProtein = removeNonProteinAllowDegen();
    var v305 = outputWindow.document;
    JAM.call(v305.write, v305, [getFastaTitleFromTitleAndSequence()], JAM.policy.p17);
    writeSequenceRanges(ranges$$1, theDocument$$1.forms[0].elements[5].options[theDocument$$1.forms[0].elements[5].selectedIndex].value);
    i$$12++;
    v308 = i$$12 < arrayOfFasta$$2.length;
  }
  closePre();
  closeWindow();
  return true;
}
function writeSequenceRanges(ranges$$2, segmentType) {
  var sequence$$18 = newProtein;
  var rangeGroup = new RangeGroup(segmentType);
  var center_base = JAM.call(Math.round, Math, [sequence$$18.length / 2], JAM.policy.p17);
  var i$$13 = 0;
  var v323 = i$$13 < ranges$$2.length;
  for (;v323;) {
    var v310 = ranges$$2[i$$13];
    var v610 = ranges$$2[i$$13].start.toString();
    var v1187 = JAM.call(v610.replace, v610, [/start|begin/gi, 1], JAM.policy.p15);
    v310.start = v1187;
    var v311 = ranges$$2[i$$13];
    var v611 = ranges$$2[i$$13].start.toString();
    var v1188 = JAM.call(v611.replace, v611, [/stop|end/gi, sequence$$18.length], JAM.policy.p15);
    v311.start = v1188;
    var v312 = ranges$$2[i$$13];
    var v613 = ranges$$2[i$$13].start.toString();
    var v1189 = JAM.call(v613.replace, v613, [/length/gi, sequence$$18.length], JAM.policy.p15);
    v312.start = v1189;
    var v313 = ranges$$2[i$$13];
    var v615 = ranges$$2[i$$13].start.toString();
    var v1190 = JAM.call(v615.replace, v615, [/middle|center|centre/gi, center_base], JAM.policy.p15);
    v313.start = v1190;
    var v314 = ranges$$2[i$$13];
    var v616 = ranges$$2[i$$13].stop.toString();
    var v1191 = JAM.call(v616.replace, v616, [/start|begin/gi, 1], JAM.policy.p15);
    v314.stop = v1191;
    var v315 = ranges$$2[i$$13];
    var v617 = ranges$$2[i$$13].stop.toString();
    var v1192 = JAM.call(v617.replace, v617, [/stop|end/gi, sequence$$18.length], JAM.policy.p15);
    v315.stop = v1192;
    var v316 = ranges$$2[i$$13];
    var v619 = ranges$$2[i$$13].stop.toString();
    var v1193 = JAM.call(v619.replace, v619, [/length/gi, sequence$$18.length], JAM.policy.p15);
    v316.stop = v1193;
    var v317 = ranges$$2[i$$13];
    var v621 = ranges$$2[i$$13].stop.toString();
    var v1194 = JAM.call(v621.replace, v621, [/middle|center|centre/gi, center_base], JAM.policy.p15);
    v317.stop = v1194;
    try {
      var v318 = ranges$$2[i$$13];
      var v801 = ranges$$2[i$$13].start.toString();
      if (JAM.isEval(eval)) {
        var v622 = eval("introspect(JAM.policy.pFull) { " + v801 + " }")
      } else {
        var v622 = JAM.call(eval, null, [v801])
      }
      var v1195 = parseInt(v622);
      v318.start = v1195;
    } catch (e$$5) {
      alert("Could not evaluate the following expression: " + ranges$$2[i$$13].start);
      return;
    }
    try {
      var v320 = ranges$$2[i$$13];
      var v803 = ranges$$2[i$$13].stop.toString();
      if (JAM.isEval(eval)) {
        var v624 = eval("introspect(JAM.policy.pFull) { " + v803 + " }")
      } else {
        var v624 = JAM.call(eval, null, [v803])
      }
      var v1196 = parseInt(v624);
      v320.stop = v1196;
    } catch (e$$6) {
      alert("Could not evaluate the following expression: " + ranges$$2[i$$13].stop);
      return;
    }
    JAM.call(rangeGroup.addRange, rangeGroup, [ranges$$2[i$$13]], JAM.policy.p17);
    i$$13++;
    v323 = i$$13 < ranges$$2.length;
  }
  JAM.call(rangeGroup.writeRanges, rangeGroup, [sequence$$18], JAM.policy.p17);
  return;
}
function getSequence(sequence$$19) {
  var problem = false;
  var warnings = new Array;
  if (this.start == this.stop) {
    if (this.start < 1) {
      problem = true;
      JAM.call(warnings.push, warnings, ["position value of " + this.start + " is less than 1"], JAM.policy.p17);
    }
    if (this.start > sequence$$19.length) {
      problem = true;
      JAM.call(warnings.push, warnings, ["position value of " + this.start + " is greater than the sequence length"], JAM.policy.p17);
    }
  } else {
    if (this.start < 1) {
      problem = true;
      JAM.call(warnings.push, warnings, ["position value of " + this.start + " is less than 1"], JAM.policy.p17);
    }
    if (this.stop < 1) {
      problem = true;
      JAM.call(warnings.push, warnings, ["position value of " + this.stop + " is less than 1"], JAM.policy.p17);
    }
    if (this.start > sequence$$19.length) {
      problem = true;
      JAM.call(warnings.push, warnings, ["position value of " + this.start + " is greater than the sequence length"], JAM.policy.p17);
    }
    if (this.stop > sequence$$19.length) {
      problem = true;
      JAM.call(warnings.push, warnings, ["position value of " + this.stop + " is greater than the sequence length"], JAM.policy.p17);
    }
    if (this.start > this.stop) {
      problem = true;
      JAM.call(warnings.push, warnings, ["stop position is less than start position in range " + this.start + " to " + this.stop], JAM.policy.p17);
    }
  }
  if (problem) {
    alert("An entry was skipped because of the following:\n" + JAM.call(warnings.join, warnings, [",\n"], JAM.policy.p11));
    return false;
  } else {
    if (this.start == this.stop) {
      return JAM.call(sequence$$19.charAt, sequence$$19, [this.start - 1], JAM.policy.p17);
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
    var i$$14 = 0;
    var v357 = i$$14 < this.ranges.length;
    for (;v357;) {
      var v816 = this.ranges[i$$14];
      if (JAM.call(v816.getSequence, v816, [sequence$$20], JAM.policy.p17) != "") {
        var v663 = this.ranges[i$$14];
        JAM.call(sequenceArray$$1.push, sequenceArray$$1, [JAM.call(v663.getSequence, v663, [sequence$$20], JAM.policy.p17)], JAM.policy.p17);
      }
      i$$14++;
      v357 = i$$14 < this.ranges.length;
    }
    var v358 = outputWindow.document;
    JAM.call(v358.write, v358, [addReturns(JAM.call(sequenceArray$$1.join, sequenceArray$$1, [""], JAM.policy.p11)) + "\n\n"], JAM.policy.p17);
    return true;
  }
  if (this.type == "separate") {
    i$$14 = 0;
    var v366 = i$$14 < this.ranges.length;
    for (;v366;) {
      var v821 = this.ranges[i$$14];
      if (JAM.call(v821.getSequence, v821, [sequence$$20], JAM.policy.p17) != "") {
        var v361 = outputWindow.document;
        JAM.call(v361.write, v361, [this.ranges[i$$14].getTitle() + "\n"], JAM.policy.p17);
        var v363 = outputWindow.document;
        var v929 = this.ranges[i$$14];
        JAM.call(v363.write, v363, [addReturns(JAM.call(v929.getSequence, v929, [sequence$$20], JAM.policy.p17)) + "\n\n"], JAM.policy.p17);
      }
      i$$14++;
      v366 = i$$14 < this.ranges.length;
    }
    return true;
  }
  if (this.type == "uppercased") {
    var re$$3;
    sequence$$20 = sequence$$20.toLowerCase();
    i$$14 = 0;
    var v372 = i$$14 < this.ranges.length;
    for (;v372;) {
      var v826 = this.ranges[i$$14];
      if (JAM.call(v826.getSequence, v826, [sequence$$20], JAM.policy.p17) != "") {
        if (this.ranges[i$$14].start > 1) {
          re$$3 = "(.{" + (this.ranges[i$$14].start - 1) + "})\\B(.{" + (this.ranges[i$$14].stop - this.ranges[i$$14].start + 1) + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [re$$3, v2], JAM.policy.p27);
        } else {
          re$$3 = "(.{" + (this.ranges[i$$14].stop - this.ranges[i$$14].start + 1) + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [re$$3, v3], JAM.policy.p27);
        }
      }
      i$$14++;
      v372 = i$$14 < this.ranges.length;
    }
    var v373 = outputWindow.document;
    JAM.call(v373.write, v373, [addReturns(sequence$$20) + "\n\n"], JAM.policy.p17);
    return true;
  }
  if (this.type == "lowercased") {
    sequence$$20 = sequence$$20.toUpperCase();
    i$$14 = 0;
    var v380 = i$$14 < this.ranges.length;
    for (;v380;) {
      var v833 = this.ranges[i$$14];
      if (JAM.call(v833.getSequence, v833, [sequence$$20], JAM.policy.p17) != "") {
        if (this.ranges[i$$14].start > 1) {
          re$$3 = "(.{" + (this.ranges[i$$14].start - 1) + "})\\B(.{" + (this.ranges[i$$14].stop - this.ranges[i$$14].start + 1) + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [re$$3, v4], JAM.policy.p27);
        } else {
          re$$3 = "(.{" + (this.ranges[i$$14].stop - this.ranges[i$$14].start + 1) + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [re$$3, v5], JAM.policy.p27);
        }
      }
      i$$14++;
      v380 = i$$14 < this.ranges.length;
    }
    var v381 = outputWindow.document;
    JAM.call(v381.write, v381, [addReturns(sequence$$20) + "\n\n"], JAM.policy.p17);
    return true;
  }
  if (this.type == "randomized") {
    i$$14 = 0;
    var v388 = i$$14 < this.ranges.length;
    for (;v388;) {
      var v840 = this.ranges[i$$14];
      if (JAM.call(v840.getSequence, v840, [sequence$$20], JAM.policy.p17) != "") {
        if (this.ranges[i$$14].start > 1) {
          re$$3 = "(.{" + (this.ranges[i$$14].start - 1) + "})\\B(.{" + (this.ranges[i$$14].stop - this.ranges[i$$14].start + 1) + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [re$$3, v6], JAM.policy.p27);
        } else {
          re$$3 = "(.{" + (this.ranges[i$$14].stop - this.ranges[i$$14].start + 1) + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [re$$3, v7], JAM.policy.p27);
        }
      }
      i$$14++;
      v388 = i$$14 < this.ranges.length;
    }
    var v389 = outputWindow.document;
    JAM.call(v389.write, v389, [addReturns(sequence$$20) + "\n\n"], JAM.policy.p17);
    return true;
  }
  if (this.type == "preserved") {
    var randomSequence = getRandomSequence(sequence$$20.length);
    i$$14 = 0;
    var v397 = i$$14 < this.ranges.length;
    for (;v397;) {
      var v847 = this.ranges[i$$14];
      if (JAM.call(v847.getSequence, v847, [sequence$$20], JAM.policy.p17) != "") {
        if (this.ranges[i$$14].start > 1) {
          re$$3 = "(.{" + (this.ranges[i$$14].start - 1) + "})\\B(.{" + (this.ranges[i$$14].stop - this.ranges[i$$14].start + 1) + "})";
          re$$3 = new RegExp(re$$3);
          randomSequence = JAM.call(randomSequence.replace, randomSequence, [re$$3, v8], JAM.policy.p27);
        } else {
          re$$3 = "(.{" + (this.ranges[i$$14].stop - this.ranges[i$$14].start + 1) + "})";
          re$$3 = new RegExp(re$$3);
          randomSequence = JAM.call(randomSequence.replace, randomSequence, [re$$3, v9], JAM.policy.p27);
        }
      }
      i$$14++;
      v397 = i$$14 < this.ranges.length;
    }
    var v398 = outputWindow.document;
    JAM.call(v398.write, v398, [addReturns(randomSequence) + "\n\n"], JAM.policy.p17);
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
Range.prototype.getSequence = getSequence;
Range.prototype.getTitle = getTitle;
new RangeGroup("", "");
RangeGroup.prototype.addRange = addRange;
RangeGroup.prototype.writeRanges = writeRanges;
JAM.set(document, "onload", v10);
JAM.set(JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p11), "onclick", v11);
JAM.set(JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p11), "onclick", v12)
