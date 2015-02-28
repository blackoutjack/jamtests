
JAM.startProfile('load');
function v4() {
  document.forms[0].elements[0].value = " ";
  document.forms[0].elements[1].value = " ";
  document.forms[0].elements[2].value = " ";
  document.forms[0].elements[3].value = " ";
  document.forms[0].elements[4].value = " ";
  return;
}
function v3() {
  try {
    pcrProducts();
  } catch (e$$7) {
    alert("The following error was encountered: " + e$$7);
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
  var v15 = i$$1 < arrayOfTitles.length;
  for (;v15;) {
    var v790 = arrayOfTitles[i$$1];
    var v572 = JAM.call(v790.search, v790, [/\S/], JAM.policy.p18) == -1;
    if (!v572) {
      var v791 = arrayOfSequences[i$$1];
      v572 = JAM.call(v791.search, v791, [/\S/], JAM.policy.p18) == -1;
    }
    var v331 = v572;
    if (!v331) {
      v331 = arrayOfSequences[i$$1].length != lengthOfAlign;
    }
    if (v331) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    v15 = i$$1 < arrayOfTitles.length;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v792 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p18) == -1;
  if (!v792) {
    v792 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p18) == -1;
  }
  var v705 = v792;
  if (!v705) {
    v705 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p18) == -1;
  }
  var v575 = v705;
  if (!v575) {
    v575 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p18) == -1;
  }
  var v333 = v575;
  if (!v333) {
    v333 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p18) == -1;
  }
  if (v333) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v578 = formElement.value;
  if (JAM.call(v578.search, v578, [/\S/], JAM.policy.p18) == -1) {
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
  var v20 = z$$2 < arrayOfPatterns.length;
  for (;v20;) {
    var v579 = arrayOfPatterns[z$$2];
    if (JAM.call(v579.search, v579, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p18) == -1) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    if (moreExpressionCheck(arrayOfPatterns[z$$2]) == false) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    v20 = z$$2 < arrayOfPatterns.length;
  }
  var geneticCodeMatchResult = new Array(arrayOfPatterns.length);
  var geneticCodeMatchExp = new Array(arrayOfPatterns.length);
  var j = 0;
  var v26 = j < arrayOfPatterns.length;
  for (;v26;) {
    var v581 = arrayOfPatterns[j];
    var v23 = JAM.call(v581.match, v581, [/\/.+\//], JAM.policy.p18) + "gi";
    if (JAM.isEval(eval)) {
      var v1029 = eval("introspect(JAM.policy.pFull) { " + v23 + " }")
    } else {
      var v1029 = JAM.call(eval, null, [v23])
    }
    geneticCodeMatchExp[j] = v1029;
    var v341 = arrayOfPatterns[j];
    var v1030 = JAM.call(v341.match, v341, [/=[a-zA-Z\*]/], JAM.policy.p18).toString();
    geneticCodeMatchResult[j] = v1030;
    var v25 = geneticCodeMatchResult[j];
    var v1031 = JAM.call(v25.replace, v25, [/=/g, ""], JAM.policy.p16);
    geneticCodeMatchResult[j] = v1031;
    j++;
    v26 = j < arrayOfPatterns.length;
  }
  var i$$2 = 0;
  var v33 = i$$2 <= testSequence.length - 3;
  for (;v33;) {
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, i$$2 + 3], JAM.policy.p16);
    j = 0;
    var v31 = j < geneticCodeMatchExp.length;
    for (;v31;) {
      if (JAM.call(codon.search, codon, [geneticCodeMatchExp[j]], JAM.policy.p15) != -1) {
        if (oneMatch == true) {
          alert("Genetic code error: more than one amino acid is coded by the codon: " + codon + ".");
          return false;
        }
        oneMatch = true;
      }
      j++;
      v31 = j < geneticCodeMatchExp.length;
    }
    if (oneMatch == false) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    v33 = i$$2 <= testSequence.length - 3;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v35 = z$$3 < arrayOfPatterns$$1.length;
  for (;v35;) {
    var v585 = arrayOfPatterns$$1[z$$3];
    if (JAM.call(v585.search, v585, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p18) != -1) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    v35 = z$$3 < arrayOfPatterns$$1.length;
  }
  var i$$3 = 0;
  var v39 = i$$3 < arrayOfPatterns$$1.length;
  for (;v39;) {
    var re = new RegExp("[" + arrayOfPatterns$$1[i$$3] + "]", "gi");
    var j$$1 = i$$3 + 1;
    var v38 = j$$1 < arrayOfPatterns$$1.length;
    for (;v38;) {
      var v587 = arrayOfPatterns$$1[j$$1];
      if (JAM.call(v587.search, v587, [re], JAM.policy.p15) != -1) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      v38 = j$$1 < arrayOfPatterns$$1.length;
    }
    i$$3++;
    v39 = i$$3 < arrayOfPatterns$$1.length;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v42 = z$$4 < arrayOfPatterns$$2.length;
  for (;v42;) {
    var v588 = arrayOfPatterns$$2[z$$4];
    if (JAM.call(v588.search, v588, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p18) == -1) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    if (moreExpressionCheck(arrayOfPatterns$$2[z$$4]) == false) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    v42 = z$$4 < arrayOfPatterns$$2.length;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v708 = getSequenceFromFasta(text$$7);
  if (JAM.call(v708.replace, v708, [/[^A-Za-z]/g, ""], JAM.policy.p16).length > maxInput) {
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
  outputWindow.document.close();
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
  if (alignArray.length < 3) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v55 = i$$4 < alignArray.length;
  for (;v55;) {
    var v591 = alignArray[i$$4];
    if (JAM.call(v591.search, v591, [/[^\s]+\s/], JAM.policy.p18) == -1) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    v55 = i$$4 < alignArray.length;
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
  if (JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p18) != -1) {
    var v57 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p15);
    for (;v57;) {
      JAM.call(arrayOfFasta.push, arrayOfFasta, [matchArray[0]], JAM.policy.p15);
      v57 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p15);
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
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
  var v74 = j$$2 < arrayOfPatterns$$3.length;
  for (;v74;) {
    var v592 = arrayOfPatterns$$3[j$$2];
    var v73 = JAM.call(v592.match, v592, [/\/.+\//], JAM.policy.p18) + "gi";
    if (JAM.isEval(eval)) {
      var v1032 = eval("introspect(JAM.policy.pFull) { " + v73 + " }")
    } else {
      var v1032 = JAM.call(eval, null, [v73])
    }
    geneticCodeMatchExp$$1[j$$2] = v1032;
    j$$2++;
    v74 = j$$2 < arrayOfPatterns$$3.length;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var geneticCodeMatchResult$$1 = new Array(arrayOfPatterns$$4.length);
  var j$$3 = 0;
  var v78 = j$$3 < arrayOfPatterns$$4.length;
  for (;v78;) {
    var v391 = arrayOfPatterns$$4[j$$3];
    var v1033 = JAM.call(v391.match, v391, [/=[a-zA-Z\*]/], JAM.policy.p18).toString();
    geneticCodeMatchResult$$1[j$$3] = v1033;
    var v77 = geneticCodeMatchResult$$1[j$$3];
    var v1034 = JAM.call(v77.replace, v77, [/=/g, ""], JAM.policy.p16);
    geneticCodeMatchResult$$1[j$$3] = v1034;
    j$$3++;
    v78 = j$$3 < arrayOfPatterns$$4.length;
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
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v99 = j$$4 < lengthOut;
  for (;v99;) {
    tempNum = JAM.call(Math.floor, Math, [Math.random() * components.length], JAM.policy.p18);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p15);
    j$$4++;
    v99 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p9);
}
function getSequenceFromFasta(sequenceRecord) {
  if (JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p18) != -1) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p16);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  if (JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p18) != -1) {
    fastaTitle = JAM.call(sequenceRecord$$1.match, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p16).toString();
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\>|[\f\n\r]/g, ""], JAM.policy.p16);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\s{2,}/g, " "], JAM.policy.p16);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/[\<\>]/gi, ""], JAM.policy.p16);
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  var v990 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p18) != -1;
  if (!v990) {
    v990 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p18) != -1;
  }
  var v977 = v990;
  if (!v977) {
    v977 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p18) != -1;
  }
  var v962 = v977;
  if (!v962) {
    v962 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p18) != -1;
  }
  var v944 = v962;
  if (!v944) {
    v944 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p18) != -1;
  }
  var v910 = v944;
  if (!v910) {
    v910 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p18) != -1;
  }
  var v865 = v910;
  if (!v865) {
    v865 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p18) != -1;
  }
  var v795 = v865;
  if (!v795) {
    v795 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p18) != -1;
  }
  var v709 = v795;
  if (!v709) {
    v709 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p18) != -1;
  }
  var v594 = v709;
  if (!v594) {
    v594 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p18) != -1;
  }
  var v419 = v594;
  if (!v419) {
    v419 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p18) != -1;
  }
  if (v419) {
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
function openWindow() {
  var title$$6 = "PCR Products";
  _openWindow(title$$6);
  return;
}
function _openWindow(title$$7) {
  var isColor = true;
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  outputWindow.focus();
  var v108 = outputWindow.document;
  JAM.call(v108.write, v108, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n'], JAM.policy.p15);
  if (isColor) {
    var v110 = outputWindow.document;
    JAM.call(v110.write, v110, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; background-color: #66FF00}\n" + 
    "span.two, td.two {color: #000000; background-color: #FFFF66}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n" + "td.many {color: #000000}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + 
    "</style>\n"], JAM.policy.p15);
  } else {
    var v112 = outputWindow.document;
    JAM.call(v112.write, v112, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n" + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "td.many {color: #000000; background-color: #FFFFFF}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"], JAM.policy.p15);
  }
  var v114 = outputWindow.document;
  JAM.call(v114.write, v114, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$7 + " results</div>\n"], JAM.policy.p15);
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
  var v116 = outputWindow.document;
  JAM.call(v116.write, v116, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n'], JAM.policy.p15);
  if (isBackground) {
    var v118 = outputWindow.document;
    JAM.call(v118.write, v118, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #FFFFFF; background-color: #000000}\n" + "span.sim {color: #FFFFFF; background-color: #666666}\n" + 
    "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n" + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n" + "span.c, span.m {color: #000000; background-color: #FFFF00}\n" + "span.s, span.t {color: #000000; background-color: #66FF00}\n" + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n" + "span.d, span.e {color: #000000; background-color: #0066FF}\n" + "span.n, span.q {color: #000000; background-color: #996633}\n" + "span.p {color: #000000; background-color: #FF99FF}\n" + 
    "</style>\n"], JAM.policy.p15);
  } else {
    var v120 = outputWindow.document;
    JAM.call(v120.write, v120, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n" + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n" + 
    "span.diff {color: #999999; background-color: #FFFFFF}\n" + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n" + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n" + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n" + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n" + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n" + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n" + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n" + 
    "span.p {color: #00FFCC; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"], JAM.policy.p15);
  }
  var v122 = outputWindow.document;
  JAM.call(v122.write, v122, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$9 + " results</div>\n"], JAM.policy.p15);
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
  if (JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p18) != -1) {
    tempDnaArray = JAM.call(dnaSequence$$1.match, dnaSequence$$1, [/./g], JAM.policy.p18);
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
  if (JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p18) == -1) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v720 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p18) == -1;
  if (!v720) {
    v720 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p18) == -1;
  }
  var v605 = v720;
  if (!v605) {
    v605 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p18) == -1;
  }
  var v434 = v605;
  if (!v434) {
    v434 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p18) == -1;
  }
  if (v434) {
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
  var v723 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p18) == -1;
  if (!v723) {
    v723 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p18) == -1;
  }
  var v608 = v723;
  if (!v608) {
    v608 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p18) == -1;
  }
  var v439 = v608;
  if (!v439) {
    v439 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p18) == -1;
  }
  if (v439) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v726 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p18) == -1;
  if (!v726) {
    v726 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p18) == -1;
  }
  var v611 = v726;
  if (!v611) {
    v611 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p18) == -1;
  }
  var v440 = v611;
  if (!v440) {
    v440 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p18) == -1;
  }
  if (v440) {
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
  var v729 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p18) == -1;
  if (!v729) {
    v729 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p18) == -1;
  }
  var v614 = v729;
  if (!v614) {
    v614 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p18) == -1;
  }
  var v442 = v614;
  if (!v442) {
    v442 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p18) == -1;
  }
  if (v442) {
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
  var v152 = i$$5 < stopBase;
  for (;v152;) {
    lineOfText = rightNum(i$$5 + 1, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v149 = j$$6 <= basePerLine / groupSize;
    for (;v149;) {
      var v148 = k < groupSize;
      for (;v148;) {
        lineOfText = lineOfText + JAM.call(text$$10.charAt, text$$10, [k + i$$5], JAM.policy.p15);
        k = k + 1;
        v148 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      v149 = j$$6 <= basePerLine / groupSize;
    }
    var v150 = outputWindow.document;
    JAM.call(v150.write, v150, [lineOfText + "\n"], JAM.policy.p15);
    lineOfText = "";
    v152 = i$$5 < stopBase;
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
    var v447 = adjustment < 0;
    if (v447) {
      v447 = adjusted >= 0;
    }
    if (v447) {
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
  var v184 = i$$6 < stopBase$$2;
  for (;v184;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v160 = j$$7 <= basePerLine$$2 / groupSize$$2;
    for (;v160;) {
      var v156 = k$$1 < groupSize$$2;
      for (;v156;) {
        if (i$$6 + k$$1 >= stopBase$$2) {
          break;
        }
        lineOfText$$1 = lineOfText$$1 + JAM.call(text$$12.charAt, text$$12, [k$$1 + i$$6], JAM.policy.p15);
        k$$1 = k$$1 + 1;
        v156 = k$$1 < groupSize$$2;
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
      v160 = j$$7 <= basePerLine$$2 / groupSize$$2;
    }
    if (numberPosition$$1 == "left") {
      var v161 = outputWindow.document;
      JAM.call(v161.write, v161, [rightNum(adjustNumbering(lineNum, numberingAdjustment), "", 8, tabIn$$3) + lineOfText$$1 + "\n"], JAM.policy.p15);
      if (strands$$1 == "two") {
        var v163 = outputWindow.document;
        JAM.call(v163.write, v163, [rightNum(adjustNumbering(lineNum, numberingAdjustment), "", 8, tabIn$$3) + complement(lineOfText$$1) + "\n"], JAM.policy.p15);
        var v165 = outputWindow.document;
        JAM.call(v165.write, v165, ["\n"], JAM.policy.p9);
      }
    } else {
      if (numberPosition$$1 == "right") {
        var v167 = outputWindow.document;
        JAM.call(v167.write, v167, [lineOfText$$1 + adjustNumbering(i$$6, numberingAdjustment) + "\n"], JAM.policy.p15);
        if (strands$$1 == "two") {
          var v169 = outputWindow.document;
          JAM.call(v169.write, v169, [complement(lineOfText$$1) + adjustNumbering(i$$6, numberingAdjustment) + "\n"], JAM.policy.p15);
          var v171 = outputWindow.document;
          JAM.call(v171.write, v171, ["\n"], JAM.policy.p9);
        }
      } else {
        if (numberPosition$$1 == "above") {
          var v173 = outputWindow.document;
          JAM.call(v173.write, v173, [aboveNum + "\n"], JAM.policy.p15);
          var v175 = outputWindow.document;
          JAM.call(v175.write, v175, [lineOfText$$1 + "\n"], JAM.policy.p15);
          if (strands$$1 == "two") {
            var v177 = outputWindow.document;
            JAM.call(v177.write, v177, [complement(lineOfText$$1) + "\n"], JAM.policy.p15);
            var v179 = outputWindow.document;
            JAM.call(v179.write, v179, ["\n"], JAM.policy.p9);
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v184 = i$$6 < stopBase$$2;
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
  var v203 = i$$7 < stopBase$$3;
  for (;v203;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v191 = j$$8 <= basePerLine$$3 / groupSize$$3;
    for (;v191;) {
      var v187 = k$$2 < groupSize$$3;
      for (;v187;) {
        if (i$$7 + k$$2 >= stopBase$$3) {
          break;
        }
        lineOfText$$2 = lineOfText$$2 + JAM.call(text$$13.charAt, text$$13, [k$$2 + i$$7], JAM.policy.p15);
        k$$2 = k$$2 + 1;
        v187 = k$$2 < groupSize$$3;
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
      v191 = j$$8 <= basePerLine$$3 / groupSize$$3;
    }
    if (numberPosition$$2 == "left") {
      var v192 = outputWindow.document;
      JAM.call(v192.write, v192, [rightNum(lineNum$$1, "", 8, tabIn$$4) + lineOfText$$2 + "\n"], JAM.policy.p15);
    } else {
      if (numberPosition$$2 == "right") {
        var v194 = outputWindow.document;
        JAM.call(v194.write, v194, [lineOfText$$2 + i$$7 + "\n"], JAM.policy.p15);
      } else {
        if (numberPosition$$2 == "above") {
          var v196 = outputWindow.document;
          JAM.call(v196.write, v196, [aboveNum$$1 + "\n"], JAM.policy.p15);
          var v198 = outputWindow.document;
          JAM.call(v198.write, v198, [lineOfText$$2 + "\n"], JAM.policy.p15);
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v203 = i$$7 < stopBase$$3;
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
  var v624 = sequence$$13.length <= firstIndexToMutate;
  if (!v624) {
    v624 = lastIndexToMutate < 0;
  }
  var v464 = v624;
  if (!v464) {
    v464 = lastIndexToMutate <= firstIndexToMutate;
  }
  if (v464) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v212 = i$$8 < numMut;
  for (;v212;) {
    maxNum = sequence$$13.length;
    randNum = JAM.call(Math.floor, Math, [Math.random() * maxNum], JAM.policy.p18);
    var v466 = randNum < firstIndexToMutate;
    if (!v466) {
      v466 = randNum > lastIndexToMutate;
    }
    if (v466) {
      numMut++;
      i$$8++;
      v212 = i$$8 < numMut;
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
    v212 = i$$8 < numMut;
  }
  var v213 = outputWindow.document;
  JAM.call(v213.write, v213, [addReturns(sequence$$13)], JAM.policy.p15);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v219 = j$$9 < lengthOut$$1;
  for (;v219;) {
    tempNum$$1 = JAM.call(Math.floor, Math, [Math.random() * components$$2.length], JAM.policy.p18);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    if (sequence$$14.length == 60) {
      var v216 = outputWindow.document;
      JAM.call(v216.write, v216, [sequence$$14 + "\n"], JAM.policy.p15);
      sequence$$14 = "";
    }
    j$$9++;
    v219 = j$$9 < lengthOut$$1;
  }
  var v220 = outputWindow.document;
  JAM.call(v220.write, v220, [sequence$$14 + "\n"], JAM.policy.p15);
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
  var v226 = outputWindow.document;
  JAM.call(v226.write, v226, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p9);
  var v227 = outputWindow.document;
  JAM.call(v227.write, v227, ['<tr><td class="title" width="200px">' + "Site:" + '</td><td class="title">' + "Positions:" + "</td></tr>\n"], JAM.policy.p15);
  var i$$9 = 0;
  var v244 = i$$9 < arrayOfItems.length;
  for (;v244;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v481 = arrayOfItems[i$$9];
    matchExp = JAM.call(v481.match, v481, [/\/.+\//], JAM.policy.p18) + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    var v738 = arrayOfItems[i$$9];
    var v482 = JAM.call(v738.match, v738, [/\)\D*\d+/], JAM.policy.p18).toString();
    cutDistance = parseFloat(JAM.call(v482.replace, v482, [/\)\D*/, ""], JAM.policy.p16));
    var v236 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p15);
    for (;v236;) {
      matchPosition = matchExp.lastIndex - cutDistance;
      var v483 = matchPosition >= lowerLimit;
      if (v483) {
        v483 = matchPosition < upperLimit;
      }
      if (v483) {
        timesFound++;
        tempString$$1 = tempString$$1 + ", " + (matchPosition - shiftValue + 1);
      }
      matchExp.lastIndex = matchExp.lastIndex - RegExp.lastMatch.length + 1;
      v236 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p15);
    }
    if (JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p18) != -1) {
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
    var v242 = outputWindow.document;
    var v917 = '<tr><td class="' + backGroundClass + '">';
    var v984 = arrayOfItems[i$$9];
    var v952 = JAM.call(v984.match, v984, [/\([^\(]+\)/], JAM.policy.p18).toString();
    JAM.call(v242.write, v242, [v917 + JAM.call(v952.replace, v952, [/\(|\)/g, ""], JAM.policy.p16) + '</td><td class="' + backGroundClass + '">' + tempString$$1 + "</td></tr>\n"], JAM.policy.p15);
    timesFound = 0;
    i$$9++;
    v244 = i$$9 < arrayOfItems.length;
  }
  var v245 = outputWindow.document;
  JAM.call(v245.write, v245, ["</tbody></table>\n"], JAM.policy.p9);
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v246 = outputWindow.document;
  JAM.call(v246.write, v246, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p9);
  var v247 = outputWindow.document;
  JAM.call(v247.write, v247, ['<tr><td class="title">' + "Pattern:" + '</td><td class="title">' + "Times found:" + '</td><td class="title">' + "Percentage:" + "</td></tr>\n"], JAM.policy.p15);
  var i$$10 = 0;
  var v257 = i$$10 < arrayOfItems$$1.length;
  for (;v257;) {
    var tempNumber = 0;
    var v492 = arrayOfItems$$1[i$$10];
    var matchExp$$1 = JAM.call(v492.match, v492, [/\/[^\/]+\//], JAM.policy.p18) + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    if (JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p15) != -1) {
      tempNumber = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p15).length;
    }
    var percentage = 0;
    var v634 = originalLength + 1;
    var v816 = arrayOfItems$$1[i$$10];
    if (v634 - parseFloat(JAM.call(v816.match, v816, [/\d+/], JAM.policy.p18)) > 0) {
      var v252 = 100 * tempNumber;
      var v495 = originalLength + 1;
      var v742 = arrayOfItems$$1[i$$10];
      percentage = v252 / (v495 - parseFloat(JAM.call(v742.match, v742, [/\d+/], JAM.policy.p18)));
    }
    var v255 = outputWindow.document;
    var v985 = arrayOfItems$$1[i$$10];
    var v953 = JAM.call(v985.match, v985, [/\([^\(]+\)\b/], JAM.policy.p18).toString();
    JAM.call(v255.write, v255, ["<tr><td>" + JAM.call(v953.replace, v953, [/\(|\)/g, ""], JAM.policy.p16) + "</td><td>" + tempNumber + "</td><td>" + JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p12) + "</td></tr>\n"], JAM.policy.p15);
    i$$10++;
    v257 = i$$10 < arrayOfItems$$1.length;
  }
  var v258 = outputWindow.document;
  JAM.call(v258.write, v258, ["</tbody></table>\n"], JAM.policy.p9);
  return true;
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v265 = sequence$$17.length > 0;
  for (;v265;) {
    maxNum$$1 = sequence$$17.length;
    randNum$$1 = JAM.call(Math.floor, Math, [Math.random() * maxNum$$1], JAM.policy.p18);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p18);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p13);
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [randNum$$1 + 1, sequence$$17.length], JAM.policy.p16);
    sequence$$17 = tempString1 + tempString2;
    if (tempSeq.length == 60) {
      var v262 = outputWindow.document;
      JAM.call(v262.write, v262, [tempSeq + "\n"], JAM.policy.p15);
      tempSeq = "";
    }
    v265 = sequence$$17.length > 0;
  }
  var v266 = outputWindow.document;
  JAM.call(v266.write, v266, [tempSeq + "\n"], JAM.policy.p15);
  return true;
}
function pcrProducts() {
  var theDocument = document;
  var newDna = "";
  var maxInput$$3 = 2E5;
  if (testScript() == false) {
    return;
  }
  var re$$3;
  var primers = new Array;
  var forwardMatches = new Array;
  var reverseMatches = new Array;
  var pcrProducts$$1 = new Array;
  var v875 = checkFormElement(theDocument.forms[0].elements[0]) == false;
  if (!v875) {
    v875 = checkSequenceLength(theDocument.forms[0].elements[0].value, maxInput$$3) == false;
  }
  var v818 = v875;
  if (!v818) {
    v818 = checkFormElement(theDocument.forms[0].elements[1]) == false;
  }
  var v744 = v818;
  if (!v744) {
    v744 = checkFormElement(theDocument.forms[0].elements[2]) == false;
  }
  var v639 = v744;
  if (!v639) {
    v639 = checkFormElement(theDocument.forms[0].elements[3]) == false;
  }
  var v504 = v639;
  if (!v504) {
    v504 = checkFormElement(theDocument.forms[0].elements[4]) == false;
  }
  if (v504) {
    return;
  }
  var v748 = theDocument.forms[0].elements[2].value;
  if (JAM.call(v748.replace, v748, [/[^A-Za-z]/g, ""], JAM.policy.p16).length < 10) {
    alert("Please enter primer sequences that are at least 10 bases long.");
    return;
  }
  var v749 = theDocument.forms[0].elements[4].value;
  if (JAM.call(v749.replace, v749, [/[^A-Za-z]/g, ""], JAM.policy.p16).length < 10) {
    alert("Please enter primer sequences that are at least 10 bases long.");
    return;
  }
  var v507 = theDocument.forms[0].elements[2].value;
  var primerOne = convertDegenerates(JAM.call(v507.replace, v507, [/[^A-Za-z]/g, ""], JAM.policy.p16));
  var v508 = theDocument.forms[0].elements[4].value;
  var primerTwo = convertDegenerates(JAM.call(v508.replace, v508, [/[^A-Za-z]/g, ""], JAM.policy.p16));
  try {
    var v274 = "/" + primerOne + "/gi";
    if (JAM.isEval(eval)) {
      re$$3 = eval("introspect(JAM.policy.pFull) { " + v274 + " }");
    } else {
      re$$3 = JAM.call(eval, null, [v274]);
    }
    var testString$$1 = "teststring";
    testString$$1 = JAM.call(testString$$1.replace, testString$$1, [re$$3, ""], JAM.policy.p19);
  } catch (e$$5) {
    alert("The first primer sequence is not formatted correctly.");
    return;
  }
  try {
    var v275 = "/" + primerTwo + "/gi";
    if (JAM.isEval(eval)) {
      re$$3 = eval("introspect(JAM.policy.pFull) { " + v275 + " }");
    } else {
      re$$3 = JAM.call(eval, null, [v275]);
    }
    testString$$1 = "teststring";
    testString$$1 = JAM.call(testString$$1.replace, testString$$1, [re$$3, ""], JAM.policy.p19);
  } catch (e$$6) {
    alert("The second primer sequence is not formatted correctly.");
    return;
  }
  var v646 = "/" + primerOne + "/gi";
  if (JAM.isEval(eval)) {
    var v511 = eval("introspect(JAM.policy.pFull) { " + v646 + " }")
  } else {
    var v511 = JAM.call(eval, null, [v646])
  }
  JAM.call(primers.push, primers, [new Primer(v511, theDocument.forms[0].elements[1].value)], JAM.policy.p15);
  var v648 = "/" + primerTwo + "/gi";
  if (JAM.isEval(eval)) {
    var v513 = eval("introspect(JAM.policy.pFull) { " + v648 + " }")
  } else {
    var v513 = JAM.call(eval, null, [v648])
  }
  JAM.call(primers.push, primers, [new Primer(v513, theDocument.forms[0].elements[3].value)], JAM.policy.p15);
  var arrayOfFasta$$1 = getArrayOfFasta(theDocument.forms[0].elements[0].value);
  var i$$11 = 0;
  var v285 = i$$11 < arrayOfFasta$$1.length;
  for (;v285;) {
    newDna = getSequenceFromFasta(arrayOfFasta$$1[i$$11]);
    title = getTitleFromFasta(arrayOfFasta$$1[i$$11]);
    newDna = removeNonDna(newDna);
    forwardMatches = findMatches(primers, newDna, theDocument.forms[0].elements[8].options[theDocument.forms[0].elements[8].selectedIndex].value);
    reverseMatches = findMatches(primers, reverse(complement(newDna)), theDocument.forms[0].elements[8].options[theDocument.forms[0].elements[8].selectedIndex].value);
    makePcrProducts(newDna, forwardMatches, reverseMatches, theDocument.forms[0].elements[8].options[theDocument.forms[0].elements[8].selectedIndex].value, pcrProducts$$1);
    i$$11++;
    v285 = i$$11 < arrayOfFasta$$1.length;
  }
  JAM.call(pcrProducts$$1.sort, pcrProducts$$1, [pcrProductSorter], JAM.policy.p15);
  openWindow();
  openPre();
  i$$11 = 0;
  var v288 = i$$11 < pcrProducts$$1.length;
  for (;v288;) {
    var v286 = pcrProducts$$1[i$$11];
    JAM.call(v286.writeProduct, v286, [theDocument.forms[0].elements[8].options[theDocument.forms[0].elements[8].selectedIndex].value], JAM.policy.p15);
    i$$11++;
    v288 = i$$11 < pcrProducts$$1.length;
  }
  if (pcrProducts$$1.length == 0) {
    var v289 = outputWindow.document;
    JAM.call(v289.write, v289, ["No PCR products were obtained.\n\n"], JAM.policy.p9);
  }
  closePre();
  closeWindow();
  return;
}
function findMatches(primers$$1, sequence$$18, topology$$1) {
  var matchArray$$2;
  var matchPosition$$1;
  var arrayOfMatches = new Array;
  var re$$4;
  var originalLength$$1 = sequence$$18.length;
  if (topology$$1 == "circular") {
    var lookAhead$$1 = 50;
    var shiftValue$$1 = JAM.call(sequence$$18.substring, sequence$$18, [0, lookAhead$$1], JAM.policy.p13).length;
    var upperLimit$$1 = sequence$$18.length + shiftValue$$1;
    sequence$$18 = JAM.call(sequence$$18.substring, sequence$$18, [sequence$$18.length - lookAhead$$1, sequence$$18.length], JAM.policy.p27) + sequence$$18 + JAM.call(sequence$$18.substring, sequence$$18, [0, lookAhead$$1], JAM.policy.p13);
    var lowerLimit$$1 = 0 + shiftValue$$1;
    var i$$12 = 0;
    var v301 = i$$12 < primers$$1.length;
    for (;v301;) {
      re$$4 = primers$$1[i$$12].re;
      var v300 = matchArray$$2 = JAM.call(re$$4.exec, re$$4, [sequence$$18], JAM.policy.p15);
      for (;v300;) {
        matchPosition$$1 = re$$4.lastIndex;
        var v528 = matchPosition$$1 >= lowerLimit$$1;
        if (v528) {
          v528 = matchPosition$$1 < upperLimit$$1;
        }
        if (v528) {
          matchPosition$$1 = matchPosition$$1 - shiftValue$$1;
          if (matchPosition$$1 == 0) {
            matchPosition$$1 = originalLength$$1;
          }
          JAM.call(arrayOfMatches.push, arrayOfMatches, [new Match(primers$$1[i$$12].name, matchArray$$2[0], matchPosition$$1)], JAM.policy.p15);
        }
        re$$4.lastIndex = re$$4.lastIndex - RegExp.lastMatch.length + 1;
        v300 = matchArray$$2 = JAM.call(re$$4.exec, re$$4, [sequence$$18], JAM.policy.p15);
      }
      i$$12++;
      v301 = i$$12 < primers$$1.length;
    }
  } else {
    i$$12 = 0;
    var v306 = i$$12 < primers$$1.length;
    for (;v306;) {
      re$$4 = primers$$1[i$$12].re;
      var v305 = matchArray$$2 = JAM.call(re$$4.exec, re$$4, [sequence$$18], JAM.policy.p15);
      for (;v305;) {
        matchPosition$$1 = re$$4.lastIndex;
        JAM.call(arrayOfMatches.push, arrayOfMatches, [new Match(primers$$1[i$$12].name, matchArray$$2[0], matchPosition$$1)], JAM.policy.p15);
        re$$4.lastIndex = re$$4.lastIndex - RegExp.lastMatch.length + 1;
        v305 = matchArray$$2 = JAM.call(re$$4.exec, re$$4, [sequence$$18], JAM.policy.p15);
      }
      i$$12++;
      v306 = i$$12 < primers$$1.length;
    }
  }
  return arrayOfMatches;
}
function makePcrProducts(newDna$$1, forwardMatches$$1, reverseMatches$$1, topology$$2, pcrProducts$$2) {
  var title$$10 = title;
  var i$$13 = 0;
  var v313 = i$$13 < forwardMatches$$1.length;
  for (;v313;) {
    var j$$10 = 0;
    var v312 = j$$10 < reverseMatches$$1.length;
    for (;v312;) {
      if (forwardMatches$$1[i$$13].positionAfter - forwardMatches$$1[i$$13].matchingText.length <= newDna$$1.length - reverseMatches$$1[j$$10].positionAfter) {
        JAM.call(pcrProducts$$2.push, pcrProducts$$2, [new PcrProduct(title$$10, forwardMatches$$1[i$$13].positionAfter - forwardMatches$$1[i$$13].matchingText.length + 1, newDna$$1.length - reverseMatches$$1[j$$10].positionAfter + reverseMatches$$1[j$$10].matchingText.length, forwardMatches$$1[i$$13].primerName, reverseMatches$$1[j$$10].primerName, forwardMatches$$1[i$$13].name, reverseMatches$$1[j$$10].name, JAM.call(newDna$$1.substring, newDna$$1, [forwardMatches$$1[i$$13].positionAfter - forwardMatches$$1[i$$13].matchingText.length, 
        newDna$$1.length - reverseMatches$$1[j$$10].positionAfter + reverseMatches$$1[j$$10].matchingText.length], JAM.policy.p27))], JAM.policy.p15);
      } else {
        var v551 = topology$$2 == "circular";
        if (v551) {
          v551 = forwardMatches$$1[i$$13].positionAfter - forwardMatches$$1[i$$13].matchingText.length > newDna$$1.length - reverseMatches$$1[j$$10].positionAfter + reverseMatches$$1[j$$10].matchingText.length - 1;
        }
        if (v551) {
          JAM.call(pcrProducts$$2.push, pcrProducts$$2, [new PcrProduct(title$$10, forwardMatches$$1[i$$13].positionAfter - forwardMatches$$1[i$$13].matchingText.length + 1, newDna$$1.length - reverseMatches$$1[j$$10].positionAfter + reverseMatches$$1[j$$10].matchingText.length, forwardMatches$$1[i$$13].primerName, reverseMatches$$1[j$$10].primerName, forwardMatches$$1[i$$13].name, reverseMatches$$1[j$$10].name, JAM.call(newDna$$1.substring, newDna$$1, [forwardMatches$$1[i$$13].positionAfter - forwardMatches$$1[i$$13].matchingText.length, 
          newDna$$1.length], JAM.policy.p27) + JAM.call(newDna$$1.substring, newDna$$1, [0, newDna$$1.length - reverseMatches$$1[j$$10].positionAfter + reverseMatches$$1[j$$10].matchingText.length], JAM.policy.p13))], JAM.policy.p15);
        }
      }
      j$$10++;
      v312 = j$$10 < reverseMatches$$1.length;
    }
    i$$13++;
    v313 = i$$13 < forwardMatches$$1.length;
  }
  return;
}
function writeProduct(topology$$3) {
  var v314 = outputWindow.document;
  JAM.call(v314.write, v314, ["&gt;" + this.sequence.length + " bp product from " + topology$$3 + " template " + this.template + ", base " + this.start + " to base " + this.stop + " (" + this.forwardName + " - " + this.reverseName + ").\n"], JAM.policy.p15);
  var v316 = outputWindow.document;
  JAM.call(v316.write, v316, [addReturns(this.sequence) + "\n\n"], JAM.policy.p15);
  return;
}
function PcrProduct(template, start$$4, stop, forwardName, reverseName, forwardPrimer, reversePrimer, sequence$$19) {
  this.template = template;
  this.start = start$$4;
  this.stop = stop;
  this.forwardName = forwardName;
  this.reverseName = reverseName;
  this.forwardPrimer = forwardPrimer;
  this.reversePrimer = reversePrimer;
  this.sequence = sequence$$19;
  return;
}
function Match(primerName, matchingText, positionAfter) {
  this.primerName = primerName;
  this.matchingText = matchingText;
  this.positionAfter = positionAfter;
  return;
}
function Primer(re$$5, name$$30) {
  this.re = re$$5;
  this.name = name$$30;
  return;
}
function pcrProductSorter(a, b) {
  if (a.sequence.length < b.sequence.length) {
    return 1;
  }
  if (a.sequence.length > b.sequence.length) {
    return -1;
  } else {
    return 0;
  }
  return;
}
new PcrProduct("", 0, 0, "", "", "", "", "");
PcrProduct.prototype.writeProduct = writeProduct;
JAM.set(document, "onload", v2);
JAM.set(JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p9), "onclick", v3);
JAM.set(JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p9), "onclick", v4)

JAM.stopProfile('load');
