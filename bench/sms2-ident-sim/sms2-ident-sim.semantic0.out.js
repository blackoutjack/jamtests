// sms2-ident-sim.js
function v4() {
  document.forms[0].elements[0].value = " ";
  document.forms[0].elements[4].value = " ";
  return;
}
function v3() {
  try {
    identSim();
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
  var v12 = i$$1 < arrayOfTitles.length;
  for (;v12;) {
    var v678 = arrayOfTitles[i$$1];
    var v526 = JAM.call(v678.search, v678, [/\S/], JAM.policy.p16) == -1;
    if (!v526) {
      var v679 = arrayOfSequences[i$$1];
      v526 = JAM.call(v679.search, v679, [/\S/], JAM.policy.p16) == -1;
    }
    var v315 = v526;
    if (!v315) {
      v315 = arrayOfSequences[i$$1].length != lengthOfAlign;
    }
    if (v315) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    v12 = i$$1 < arrayOfTitles.length;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v680 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p16) == -1;
  if (!v680) {
    v680 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p16) == -1;
  }
  var v621 = v680;
  if (!v621) {
    v621 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p16) == -1;
  }
  var v529 = v621;
  if (!v529) {
    v529 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p16) == -1;
  }
  var v317 = v529;
  if (!v317) {
    v317 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p16) == -1;
  }
  if (v317) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v532 = formElement.value;
  if (JAM.call(v532.search, v532, [/\S/], JAM.policy.p16) == -1) {
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
    var v533 = arrayOfPatterns[z$$2];
    if (JAM.call(v533.search, v533, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p16) == -1) {
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
    var v535 = arrayOfPatterns[j];
    var v20 = JAM.call(v535.match, v535, [/\/.+\//], JAM.policy.p16) + "gi";
    if (JAM.isEval(eval)) {
      var v808 = eval("introspect(JAM.policy.pFull) { " + v20 + " }")
    } else {
      var v808 = JAM.call(eval, null, [v20])
    }
    geneticCodeMatchExp[j] = v808;
    var v325 = arrayOfPatterns[j];
    var v809 = JAM.call(v325.match, v325, [/=[a-zA-Z\*]/], JAM.policy.p16).toString();
    geneticCodeMatchResult[j] = v809;
    var v22 = geneticCodeMatchResult[j];
    var v810 = JAM.call(v22.replace, v22, [/=/g, ""], JAM.policy.p15);
    geneticCodeMatchResult[j] = v810;
    j++;
    v23 = j < arrayOfPatterns.length;
  }
  var i$$2 = 0;
  var v30 = i$$2 <= testSequence.length - 3;
  for (;v30;) {
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, i$$2 + 3], JAM.policy.p15);
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
    var v539 = arrayOfPatterns$$1[z$$3];
    if (JAM.call(v539.search, v539, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p16) != -1) {
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
      var v541 = arrayOfPatterns$$1[j$$1];
      if (JAM.call(v541.search, v541, [re], JAM.policy.p17) != -1) {
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
    var v542 = arrayOfPatterns$$2[z$$4];
    if (JAM.call(v542.search, v542, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p16) == -1) {
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
  var v624 = getSequenceFromFasta(text$$7);
  if (JAM.call(v624.replace, v624, [/[^A-Za-z]/g, ""], JAM.policy.p15).length > maxInput) {
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
  var v44 = outputWindow.document;
  JAM.call(v44.write, v44, ["</form>"], JAM.policy.p11);
  return true;
}
function closePre() {
  var v45 = outputWindow.document;
  JAM.call(v45.write, v45, ["</div>"], JAM.policy.p11);
  var v46 = outputWindow.document;
  JAM.call(v46.write, v46, ["</pre>\n"], JAM.policy.p11);
  return;
}
function closeTextArea() {
  var v47 = outputWindow.document;
  JAM.call(v47.write, v47, ["</textarea>"], JAM.policy.p11);
  return true;
}
function closeWindow() {
  var v48 = outputWindow.document;
  JAM.call(v48.write, v48, ["</body>\n</html>\n"], JAM.policy.p11);
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
  var v52 = i$$4 < alignArray.length;
  for (;v52;) {
    var v545 = alignArray[i$$4];
    if (JAM.call(v545.search, v545, [/[^\s]+\s/], JAM.policy.p16) == -1) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    v52 = i$$4 < alignArray.length;
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
  var v71 = j$$2 < arrayOfPatterns$$3.length;
  for (;v71;) {
    var v546 = arrayOfPatterns$$3[j$$2];
    var v70 = JAM.call(v546.match, v546, [/\/.+\//], JAM.policy.p16) + "gi";
    if (JAM.isEval(eval)) {
      var v811 = eval("introspect(JAM.policy.pFull) { " + v70 + " }")
    } else {
      var v811 = JAM.call(eval, null, [v70])
    }
    geneticCodeMatchExp$$1[j$$2] = v811;
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
    var v375 = arrayOfPatterns$$4[j$$3];
    var v812 = JAM.call(v375.match, v375, [/=[a-zA-Z\*]/], JAM.policy.p16).toString();
    geneticCodeMatchResult$$1[j$$3] = v812;
    var v74 = geneticCodeMatchResult$$1[j$$3];
    var v813 = JAM.call(v74.replace, v74, [/=/g, ""], JAM.policy.p15);
    geneticCodeMatchResult$$1[j$$3] = v813;
    j$$3++;
    v75 = j$$3 < arrayOfPatterns$$4.length;
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
  var v96 = j$$4 < lengthOut;
  for (;v96;) {
    tempNum = JAM.call(Math.floor, Math, [Math.random() * components.length], JAM.policy.p16);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p17);
    j$$4++;
    v96 = j$$4 < lengthOut;
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
  var v779 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p16) != -1;
  if (!v779) {
    v779 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p16) != -1;
  }
  var v770 = v779;
  if (!v770) {
    v770 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p16) != -1;
  }
  var v761 = v770;
  if (!v761) {
    v761 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p16) != -1;
  }
  var v750 = v761;
  if (!v750) {
    v750 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p16) != -1;
  }
  var v738 = v750;
  if (!v738) {
    v738 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p16) != -1;
  }
  var v722 = v738;
  if (!v722) {
    v722 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p16) != -1;
  }
  var v683 = v722;
  if (!v683) {
    v683 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p16) != -1;
  }
  var v625 = v683;
  if (!v625) {
    v625 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p16) != -1;
  }
  var v548 = v625;
  if (!v548) {
    v548 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p16) != -1;
  }
  var v403 = v548;
  if (!v403) {
    v403 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p16) != -1;
  }
  if (v403) {
    return false;
  }
  return true;
}
function openForm() {
  var v101 = outputWindow.document;
  JAM.call(v101.write, v101, ['<form action="">\n'], JAM.policy.p11);
  return true;
}
function openPre() {
  var v102 = outputWindow.document;
  JAM.call(v102.write, v102, ["<pre>"], JAM.policy.p11);
  var v103 = outputWindow.document;
  JAM.call(v103.write, v103, ['<div class="pre">'], JAM.policy.p11);
  return;
}
function openTextArea() {
  var v104 = outputWindow.document;
  JAM.call(v104.write, v104, ['<br /><textarea rows="6" cols="61">\n'], JAM.policy.p11);
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
  return;
}
function openWindowAlign() {
  var title$$7 = "Ident and Sim";
  _openWindowAlign(title$$7);
  return;
}
function _openWindowAlign(title$$8) {
  var isBackground = true;
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
  testString = JAM.call(testString.replace, testString, [/(\d)/g, v1], JAM.policy.p15);
  if (testString != "1X2X3X") {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false;
  }
  var testNum = 2489.8237;
  if (JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p10) != 2489.824) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  if (JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p10) != 2489.8) {
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
  var v636 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p16) == -1;
  if (!v636) {
    v636 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p16) == -1;
  }
  var v559 = v636;
  if (!v559) {
    v559 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p16) == -1;
  }
  var v418 = v559;
  if (!v418) {
    v418 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p16) == -1;
  }
  if (v418) {
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
  var v639 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p16) == -1;
  if (!v639) {
    v639 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p16) == -1;
  }
  var v562 = v639;
  if (!v562) {
    v562 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p16) == -1;
  }
  var v423 = v562;
  if (!v423) {
    v423 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p16) == -1;
  }
  if (v423) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v642 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p16) == -1;
  if (!v642) {
    v642 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p16) == -1;
  }
  var v565 = v642;
  if (!v565) {
    v565 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p16) == -1;
  }
  var v424 = v565;
  if (!v424) {
    v424 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p16) == -1;
  }
  if (v424) {
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
  var v645 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p16) == -1;
  if (!v645) {
    v645 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p16) == -1;
  }
  var v568 = v645;
  if (!v568) {
    v568 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p16) == -1;
  }
  var v426 = v568;
  if (!v426) {
    v426 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p16) == -1;
  }
  if (v426) {
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
  writeGroupNumDnaSetStart(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition);
  return true;
}
function writeGroupNumDnaSetStart(text$$12, tabIn$$3, groupSize$$2, basePerLine$$2, startBase$$2, stopBase$$2, strands$$1, numberPosition$$1) {
  function adjustNumbering(original, adjustment) {
    var adjusted = original + adjustment;
    var v431 = adjustment < 0;
    if (v431) {
      v431 = adjusted >= 0;
    }
    if (v431) {
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
        lineOfText$$1 = lineOfText$$1 + JAM.call(text$$12.charAt, text$$12, [k$$1 + i$$6], JAM.policy.p17);
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
      JAM.call(v158.write, v158, [rightNum(adjustNumbering(lineNum, numberingAdjustment), "", 8, tabIn$$3) + lineOfText$$1 + "\n"], JAM.policy.p17);
      if (strands$$1 == "two") {
        var v160 = outputWindow.document;
        JAM.call(v160.write, v160, [rightNum(adjustNumbering(lineNum, numberingAdjustment), "", 8, tabIn$$3) + complement(lineOfText$$1) + "\n"], JAM.policy.p17);
        var v162 = outputWindow.document;
        JAM.call(v162.write, v162, ["\n"], JAM.policy.p11);
      }
    } else {
      if (numberPosition$$1 == "right") {
        var v164 = outputWindow.document;
        JAM.call(v164.write, v164, [lineOfText$$1 + adjustNumbering(i$$6, numberingAdjustment) + "\n"], JAM.policy.p17);
        if (strands$$1 == "two") {
          var v166 = outputWindow.document;
          JAM.call(v166.write, v166, [complement(lineOfText$$1) + adjustNumbering(i$$6, numberingAdjustment) + "\n"], JAM.policy.p17);
          var v168 = outputWindow.document;
          JAM.call(v168.write, v168, ["\n"], JAM.policy.p11);
        }
      } else {
        if (numberPosition$$1 == "above") {
          var v170 = outputWindow.document;
          JAM.call(v170.write, v170, [aboveNum + "\n"], JAM.policy.p17);
          var v172 = outputWindow.document;
          JAM.call(v172.write, v172, [lineOfText$$1 + "\n"], JAM.policy.p17);
          if (strands$$1 == "two") {
            var v174 = outputWindow.document;
            JAM.call(v174.write, v174, [complement(lineOfText$$1) + "\n"], JAM.policy.p17);
            var v176 = outputWindow.document;
            JAM.call(v176.write, v176, ["\n"], JAM.policy.p11);
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
        lineOfText$$2 = lineOfText$$2 + JAM.call(text$$13.charAt, text$$13, [k$$2 + i$$7], JAM.policy.p17);
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
      JAM.call(v189.write, v189, [rightNum(lineNum$$1, "", 8, tabIn$$4) + lineOfText$$2 + "\n"], JAM.policy.p17);
    } else {
      if (numberPosition$$2 == "right") {
        var v191 = outputWindow.document;
        JAM.call(v191.write, v191, [lineOfText$$2 + i$$7 + "\n"], JAM.policy.p17);
      } else {
        if (numberPosition$$2 == "above") {
          var v193 = outputWindow.document;
          JAM.call(v193.write, v193, [aboveNum$$1 + "\n"], JAM.policy.p17);
          var v195 = outputWindow.document;
          JAM.call(v195.write, v195, [lineOfText$$2 + "\n"], JAM.policy.p17);
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
  var v578 = sequence$$13.length <= firstIndexToMutate;
  if (!v578) {
    v578 = lastIndexToMutate < 0;
  }
  var v448 = v578;
  if (!v448) {
    v448 = lastIndexToMutate <= firstIndexToMutate;
  }
  if (v448) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v209 = i$$8 < numMut;
  for (;v209;) {
    maxNum = sequence$$13.length;
    randNum = JAM.call(Math.floor, Math, [Math.random() * maxNum], JAM.policy.p16);
    var v450 = randNum < firstIndexToMutate;
    if (!v450) {
      v450 = randNum > lastIndexToMutate;
    }
    if (v450) {
      numMut++;
      i$$8++;
      v209 = i$$8 < numMut;
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
    v209 = i$$8 < numMut;
  }
  var v210 = outputWindow.document;
  JAM.call(v210.write, v210, [addReturns(sequence$$13)], JAM.policy.p17);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v216 = j$$9 < lengthOut$$1;
  for (;v216;) {
    tempNum$$1 = JAM.call(Math.floor, Math, [Math.random() * components$$2.length], JAM.policy.p16);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    if (sequence$$14.length == 60) {
      var v213 = outputWindow.document;
      JAM.call(v213.write, v213, [sequence$$14 + "\n"], JAM.policy.p17);
      sequence$$14 = "";
    }
    j$$9++;
    v216 = j$$9 < lengthOut$$1;
  }
  var v217 = outputWindow.document;
  JAM.call(v217.write, v217, [sequence$$14 + "\n"], JAM.policy.p17);
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
  var v223 = outputWindow.document;
  JAM.call(v223.write, v223, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p11);
  var v224 = outputWindow.document;
  JAM.call(v224.write, v224, ['<tr><td class="title" width="200px">' + "Site:" + '</td><td class="title">' + "Positions:" + "</td></tr>\n"], JAM.policy.p17);
  var i$$9 = 0;
  var v241 = i$$9 < arrayOfItems.length;
  for (;v241;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v465 = arrayOfItems[i$$9];
    matchExp = JAM.call(v465.match, v465, [/\/.+\//], JAM.policy.p16) + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    var v654 = arrayOfItems[i$$9];
    var v466 = JAM.call(v654.match, v654, [/\)\D*\d+/], JAM.policy.p16).toString();
    cutDistance = parseFloat(JAM.call(v466.replace, v466, [/\)\D*/, ""], JAM.policy.p15));
    var v233 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p17);
    for (;v233;) {
      matchPosition = matchExp.lastIndex - cutDistance;
      var v467 = matchPosition >= lowerLimit;
      if (v467) {
        v467 = matchPosition < upperLimit;
      }
      if (v467) {
        timesFound++;
        tempString$$1 = tempString$$1 + ", " + (matchPosition - shiftValue + 1);
      }
      matchExp.lastIndex = matchExp.lastIndex - RegExp.lastMatch.length + 1;
      v233 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p17);
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
    var v239 = outputWindow.document;
    var v745 = '<tr><td class="' + backGroundClass + '">';
    var v777 = arrayOfItems[i$$9];
    var v758 = JAM.call(v777.match, v777, [/\([^\(]+\)/], JAM.policy.p16).toString();
    JAM.call(v239.write, v239, [v745 + JAM.call(v758.replace, v758, [/\(|\)/g, ""], JAM.policy.p15) + '</td><td class="' + backGroundClass + '">' + tempString$$1 + "</td></tr>\n"], JAM.policy.p17);
    timesFound = 0;
    i$$9++;
    v241 = i$$9 < arrayOfItems.length;
  }
  var v242 = outputWindow.document;
  JAM.call(v242.write, v242, ["</tbody></table>\n"], JAM.policy.p11);
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v243 = outputWindow.document;
  JAM.call(v243.write, v243, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p11);
  var v244 = outputWindow.document;
  JAM.call(v244.write, v244, ['<tr><td class="title">' + "Pattern:" + '</td><td class="title">' + "Times found:" + '</td><td class="title">' + "Percentage:" + "</td></tr>\n"], JAM.policy.p17);
  var i$$10 = 0;
  var v254 = i$$10 < arrayOfItems$$1.length;
  for (;v254;) {
    var tempNumber = 0;
    var v476 = arrayOfItems$$1[i$$10];
    var matchExp$$1 = JAM.call(v476.match, v476, [/\/[^\/]+\//], JAM.policy.p16) + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    if (JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p17) != -1) {
      tempNumber = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p17).length;
    }
    var percentage = 0;
    var v588 = originalLength + 1;
    var v704 = arrayOfItems$$1[i$$10];
    if (v588 - parseFloat(JAM.call(v704.match, v704, [/\d+/], JAM.policy.p16)) > 0) {
      var v249 = 100 * tempNumber;
      var v479 = originalLength + 1;
      var v658 = arrayOfItems$$1[i$$10];
      percentage = v249 / (v479 - parseFloat(JAM.call(v658.match, v658, [/\d+/], JAM.policy.p16)));
    }
    var v252 = outputWindow.document;
    var v778 = arrayOfItems$$1[i$$10];
    var v759 = JAM.call(v778.match, v778, [/\([^\(]+\)\b/], JAM.policy.p16).toString();
    JAM.call(v252.write, v252, ["<tr><td>" + JAM.call(v759.replace, v759, [/\(|\)/g, ""], JAM.policy.p15) + "</td><td>" + tempNumber + "</td><td>" + JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p10) + "</td></tr>\n"], JAM.policy.p17);
    i$$10++;
    v254 = i$$10 < arrayOfItems$$1.length;
  }
  var v255 = outputWindow.document;
  JAM.call(v255.write, v255, ["</tbody></table>\n"], JAM.policy.p11);
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
    randNum$$1 = JAM.call(Math.floor, Math, [Math.random() * maxNum$$1], JAM.policy.p16);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p16);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p13);
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [randNum$$1 + 1, sequence$$17.length], JAM.policy.p15);
    sequence$$17 = tempString1 + tempString2;
    if (tempSeq.length == 60) {
      var v259 = outputWindow.document;
      JAM.call(v259.write, v259, [tempSeq + "\n"], JAM.policy.p17);
      tempSeq = "";
    }
    v262 = sequence$$17.length > 0;
  }
  var v263 = outputWindow.document;
  JAM.call(v263.write, v263, [tempSeq + "\n"], JAM.policy.p17);
  return true;
}
function identSim() {
  var theDocument = document;
  var maxInput$$3 = 2E4;
  var theAlignment = "";
  var alignArray$$1 = new Array;
  var groupString = "";
  var arrayOfGroups = new Array;
  var titleArray = new Array;
  var sequenceArray$$1 = new Array;
  var longestTitle;
  if (testScript() == false) {
    return;
  }
  var v488 = checkFormElement(theDocument.forms[0].elements[0]) == false;
  if (!v488) {
    v488 = checkTextLength(theDocument.forms[0].elements[0].value, maxInput$$3) == false;
  }
  if (v488) {
    return;
  }
  theAlignment = "X" + theDocument.forms[0].elements[0].value;
  alignArray$$1 = JAM.call(theAlignment.split, theAlignment, [/[>%#]/], JAM.policy.p16);
  if (earlyCheckAlign(alignArray$$1) == false) {
    return;
  }
  var i$$11 = 1;
  var v278 = i$$11 < alignArray$$1.length;
  for (;v278;) {
    var v269 = i$$11 - 1;
    var v492 = alignArray$$1[i$$11];
    var v814 = JAM.call(v492.match, v492, [/[^\f\n\r]+[\f\n\r]/], JAM.policy.p16);
    titleArray[v269] = v814;
    var v270 = i$$11 - 1;
    var v493 = filterFastaTitle(titleArray[i$$11 - 1].toString());
    var v815 = JAM.call(v493.replace, v493, [/[\f\n\r]/g, ""], JAM.policy.p15);
    titleArray[v270] = v815;
    var v271 = i$$11 - 1;
    var v494 = titleArray[i$$11 - 1];
    var v816 = JAM.call(v494.substring, v494, [0, 20], JAM.policy.p13);
    titleArray[v271] = v816;
    if (i$$11 == 1) {
      longestTitle = titleArray[i$$11 - 1].length;
    } else {
      if (titleArray[i$$11 - 1].length > longestTitle) {
        longestTitle = titleArray[i$$11 - 1].length;
      }
    }
    var v276 = i$$11 - 1;
    var v498 = alignArray$$1[i$$11];
    var v817 = JAM.call(v498.replace, v498, [/[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p15);
    sequenceArray$$1[v276] = v817;
    var v277 = i$$11 - 1;
    var v818 = filterAlignSeq(sequenceArray$$1[i$$11 - 1]);
    sequenceArray$$1[v277] = v818;
    i$$11++;
    v278 = i$$11 < alignArray$$1.length;
  }
  if (checkAlign(titleArray, sequenceArray$$1) == false) {
    return;
  }
  var v502 = theDocument.forms[0].elements[1].value;
  groupString = JAM.call(v502.replace, v502, [/\s/g, ""], JAM.policy.p15).toUpperCase();
  arrayOfGroups = JAM.call(groupString.split, groupString, [/,/], JAM.policy.p16);
  if (checkGroupInput(arrayOfGroups) == false) {
    return;
  }
  openWindowAlign();
  openPre();
  writeIdentAndSim(titleArray, sequenceArray$$1, arrayOfGroups);
  closePre();
  closeWindow();
  return;
}
function writeIdentAndSim(titleArray$$1, sequenceArray$$2, arrayOfGroups$$1) {
  var identical = 0;
  var similar = 0;
  var alignLength = 0;
  var k$$3 = 0;
  var v307 = k$$3 < sequenceArray$$2.length;
  for (;v307;) {
    var m = k$$3 + 1;
    var v306 = m < sequenceArray$$2.length;
    for (;v306;) {
      var i$$12 = 0;
      var v286 = i$$12 < sequenceArray$$2[0].length;
      for (;v286;) {
        alignLength = alignLength + 1;
        var v711 = sequenceArray$$2[k$$3];
        var v603 = JAM.call(v711.charAt, v711, [i$$12], JAM.policy.p17).toUpperCase();
        var v712 = sequenceArray$$2[m];
        var v507 = v603 == JAM.call(v712.charAt, v712, [i$$12], JAM.policy.p17).toUpperCase();
        if (v507) {
          var v713 = sequenceArray$$2[k$$3];
          v507 = JAM.call(v713.charAt, v713, [i$$12], JAM.policy.p17).toUpperCase() != "X";
        }
        if (v507) {
          var v669 = sequenceArray$$2[k$$3];
          var v508 = JAM.call(v669.charAt, v669, [i$$12], JAM.policy.p17) != "-";
          if (v508) {
            var v670 = sequenceArray$$2[k$$3];
            v508 = JAM.call(v670.charAt, v670, [i$$12], JAM.policy.p17) != ".";
          }
          if (v508) {
            identical = identical + 1;
          } else {
            alignLength = alignLength - 1;
          }
        } else {
          var j$$10 = 0;
          var v284 = j$$10 < arrayOfGroups$$1.length;
          for (;v284;) {
            var v671 = arrayOfGroups$$1[j$$10];
            var v735 = sequenceArray$$2[k$$3];
            var v510 = JAM.call(v671.search, v671, [JAM.call(v735.charAt, v735, [i$$12], JAM.policy.p17).toUpperCase()], JAM.policy.p17) != -1;
            if (v510) {
              var v673 = arrayOfGroups$$1[j$$10];
              var v736 = sequenceArray$$2[m];
              v510 = JAM.call(v673.search, v673, [JAM.call(v736.charAt, v736, [i$$12], JAM.policy.p17).toUpperCase()], JAM.policy.p17) != -1;
            }
            if (v510) {
              similar = similar + 1;
              break;
            }
            j$$10++;
            v284 = j$$10 < arrayOfGroups$$1.length;
          }
        }
        i$$12++;
        v286 = i$$12 < sequenceArray$$2[0].length;
      }
      var v287 = outputWindow.document;
      JAM.call(v287.write, v287, ["<b>Results for " + titleArray$$1[k$$3] + " vs " + titleArray$$1[m] + ":</b>\n"], JAM.policy.p17);
      var v289 = outputWindow.document;
      JAM.call(v289.write, v289, ["  Alignment length: " + alignLength + "\n"], JAM.policy.p17);
      var v291 = outputWindow.document;
      JAM.call(v291.write, v291, ["Identical residues: " + identical + "\n"], JAM.policy.p17);
      var v293 = outputWindow.document;
      JAM.call(v293.write, v293, ["  Similar residues: " + similar + "\n"], JAM.policy.p17);
      if (identical == 0) {
        var v295 = outputWindow.document;
        JAM.call(v295.write, v295, ["  Percent identity: " + 0 + "\n"], JAM.policy.p17);
      } else {
        var v297 = outputWindow.document;
        var v676 = identical / alignLength * 100;
        JAM.call(v297.write, v297, ["  Percent identity: " + JAM.call(v676.toFixed, v676, [2], JAM.policy.p10) + "\n"], JAM.policy.p17);
      }
      var v519 = similar == 0;
      if (v519) {
        v519 = identical == 0;
      }
      if (v519) {
        var v300 = outputWindow.document;
        JAM.call(v300.write, v300, ["Percent similarity: " + 0 + "\n"], JAM.policy.p17);
      } else {
        var v302 = outputWindow.document;
        var v677 = (identical + similar) / alignLength * 100;
        JAM.call(v302.write, v302, ["Percent similarity: " + JAM.call(v677.toFixed, v677, [2], JAM.policy.p10) + "\n"], JAM.policy.p17);
      }
      var v305 = outputWindow.document;
      JAM.call(v305.write, v305, ["\n"], JAM.policy.p11);
      identical = 0;
      similar = 0;
      alignLength = 0;
      m++;
      v306 = m < sequenceArray$$2.length;
    }
    k$$3++;
    v307 = k$$3 < sequenceArray$$2.length;
  }
  return;
}
JAM.set(document, "onload", v2);
JAM.set(JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p11), "onclick", v3);
JAM.set(JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p11), "onclick", v4)
