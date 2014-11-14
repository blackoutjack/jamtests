
JAM.startProfile('load');
function v4() {
  document.forms[0].elements[0].value = " ";
  document.forms[0].elements[4].value = " ";
  return;
}
function v3() {
  try {
    pairwiseAlignCodons(document);
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
  sequence = JAM.call(sequence.replace, sequence, [/(.{60})/g, v0], JAM.policy.p22);
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
    var v1374 = arrayOfTitles[i$$1];
    var v977 = JAM.call(v1374.search, v1374, [/\S/], JAM.policy.p23) == -1;
    if (!v977) {
      var v1375 = arrayOfSequences[i$$1];
      v977 = JAM.call(v1375.search, v1375, [/\S/], JAM.policy.p23) == -1;
    }
    var v563 = v977;
    if (!v563) {
      v563 = arrayOfSequences[i$$1].length != lengthOfAlign;
    }
    if (v563) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    v12 = i$$1 < arrayOfTitles.length;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v1376 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p23) == -1;
  if (!v1376) {
    v1376 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p23) == -1;
  }
  var v1233 = v1376;
  if (!v1233) {
    v1233 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p23) == -1;
  }
  var v980 = v1233;
  if (!v980) {
    v980 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p23) == -1;
  }
  var v565 = v980;
  if (!v565) {
    v565 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p23) == -1;
  }
  if (v565) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v983 = formElement.value;
  if (JAM.call(v983.search, v983, [/\S/], JAM.policy.p23) == -1) {
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
    var v984 = arrayOfPatterns[z$$2];
    if (JAM.call(v984.search, v984, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p23) == -1) {
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
    var v986 = arrayOfPatterns[j];
    var v20 = JAM.call(v986.match, v986, [/\/.+\//], JAM.policy.p23) + "gi";
    if (JAM.isEval(eval)) {
      var v1581 = eval("introspect(JAM.policy.pFull) { " + v20 + " }")
    } else {
      var v1581 = JAM.call(eval, null, [v20])
    }
    geneticCodeMatchExp[j] = v1581;
    var v573 = arrayOfPatterns[j];
    var v1582 = JAM.call(v573.match, v573, [/=[a-zA-Z\*]/], JAM.policy.p23).toString();
    geneticCodeMatchResult[j] = v1582;
    var v22 = geneticCodeMatchResult[j];
    var v1583 = JAM.call(v22.replace, v22, [/=/g, ""], JAM.policy.p22);
    geneticCodeMatchResult[j] = v1583;
    j++;
    v23 = j < arrayOfPatterns.length;
  }
  var i$$2 = 0;
  var v30 = i$$2 <= testSequence.length - 3;
  for (;v30;) {
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, i$$2 + 3], JAM.policy.p22);
    j = 0;
    var v28 = j < geneticCodeMatchExp.length;
    for (;v28;) {
      if (JAM.call(codon.search, codon, [geneticCodeMatchExp[j]], JAM.policy.p21) != -1) {
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
    var v990 = arrayOfPatterns$$1[z$$3];
    if (JAM.call(v990.search, v990, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p23) != -1) {
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
      var v992 = arrayOfPatterns$$1[j$$1];
      if (JAM.call(v992.search, v992, [re], JAM.policy.p21) != -1) {
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
    var v993 = arrayOfPatterns$$2[z$$4];
    if (JAM.call(v993.search, v993, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p23) == -1) {
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
  var v1236 = getSequenceFromFasta(text$$7);
  if (JAM.call(v1236.replace, v1236, [/[^A-Za-z]/g, ""], JAM.policy.p22).length > maxInput) {
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
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/g/g, "1"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/c/g, "2"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "c"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "g"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/G/g, "1"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/C/g, "2"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "C"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "G"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/a/g, "1"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/t/g, "2"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "t"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "a"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/A/g, "1"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/T/g, "2"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "T"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "A"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/u/g, "a"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/U/g, "A"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/r/g, "1"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/y/g, "2"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "y"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "r"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/R/g, "1"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/Y/g, "2"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "Y"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "R"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/k/g, "1"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/m/g, "2"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "m"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "k"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/K/g, "1"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/M/g, "2"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "M"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "K"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/b/g, "1"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/v/g, "2"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "v"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "b"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/B/g, "1"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/V/g, "2"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "V"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "B"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/d/g, "1"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/h/g, "2"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "h"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "d"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/D/g, "1"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/H/g, "2"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "H"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "D"], JAM.policy.p22);
  return dnaSequence;
}
function closeForm() {
  var v44 = outputWindow.document;
  JAM.call(v44.write, v44, ["</form>"], JAM.policy.p15);
  return true;
}
function closePre() {
  var v45 = outputWindow.document;
  JAM.call(v45.write, v45, ["</div>"], JAM.policy.p15);
  var v46 = outputWindow.document;
  JAM.call(v46.write, v46, ["</pre>\n"], JAM.policy.p15);
  return;
}
function closeTextArea() {
  var v47 = outputWindow.document;
  JAM.call(v47.write, v47, ["</textarea>"], JAM.policy.p15);
  return true;
}
function closeWindow() {
  var v48 = outputWindow.document;
  JAM.call(v48.write, v48, ["</body>\n</html>\n"], JAM.policy.p15);
  outputWindow.status = "Done.";
  outputWindow.document.close();
  return true;
}
function convertDegenerates(sequence$$1) {
  sequence$$1 = sequence$$1.toLowerCase();
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/t/g, "[TU]"], JAM.policy.p22);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/r/g, "[AGR]"], JAM.policy.p22);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/y/g, "[CTUY]"], JAM.policy.p22);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/s/g, "[GCS]"], JAM.policy.p22);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/w/g, "[ATUW]"], JAM.policy.p22);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/k/g, "[GTUK]"], JAM.policy.p22);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/m/g, "[ACM]"], JAM.policy.p22);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/b/g, "[CGTUBSKY]"], JAM.policy.p22);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/d/g, "[AGTUDRKW]"], JAM.policy.p22);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/h/g, "[ACTUHMYW]"], JAM.policy.p22);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/v/g, "[ACGVSMR]"], JAM.policy.p22);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/n/g, "[ACGTURYSWKMBDHVN]"], JAM.policy.p22);
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
    var v996 = alignArray[i$$4];
    if (JAM.call(v996.search, v996, [/[^\s]+\s/], JAM.policy.p23) == -1) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    v52 = i$$4 < alignArray.length;
  }
  return true;
}
function filterAlignSeq(alignSeq) {
  alignSeq = JAM.call(alignSeq.replace, alignSeq, [/[^abcdefghiklmnpqrstvwxyz\.\-]/gi, ""], JAM.policy.p22);
  return alignSeq;
}
function filterFastaTitle(sequenceTitle) {
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/\s{2,}/g, " "], JAM.policy.p22);
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/^\s*/g, ""], JAM.policy.p22);
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/[\f\n\r\t]+$/g, "\n"], JAM.policy.p22);
  return JAM.call(sequenceTitle.replace, sequenceTitle, [/[\<\>]\n/gi, ""], JAM.policy.p22);
}
function getArrayOfFasta(sequenceData) {
  var arrayOfFasta = new Array;
  var matchArray;
  var re$$1 = /\>[^\>]+/g;
  if (JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p23) != -1) {
    var v54 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p21);
    for (;v54;) {
      JAM.call(arrayOfFasta.push, arrayOfFasta, [matchArray[0]], JAM.policy.p21);
      v54 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p21);
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var stringToReturn = "&gt;results for " + sequence$$2.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p23) != -1) {
    stringToReturn = stringToReturn + '"' + fastaSequenceTitle + '"';
  }
  stringToReturn = stringToReturn + ' starting "' + JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p19) + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var stringToReturn$$1 = "Search results for " + sequenceOne.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p23) != -1) {
    stringToReturn$$1 = stringToReturn$$1 + '"' + fastaSequenceTitleOne + '"';
  }
  stringToReturn$$1 = stringToReturn$$1 + ' starting "' + JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p19) + '"\n';
  stringToReturn$$1 = stringToReturn$$1 + "and " + sequenceTwo.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p23) != -1) {
    stringToReturn$$1 = stringToReturn$$1 + '"' + fastaSequenceTitleTwo + '"';
  }
  stringToReturn$$1 = stringToReturn$$1 + ' starting "' + JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p19) + '"';
  return'<div class="info">' + stringToReturn$$1 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var geneticCodeMatchExp$$1 = new Array(arrayOfPatterns$$3.length);
  var j$$2 = 0;
  var v71 = j$$2 < arrayOfPatterns$$3.length;
  for (;v71;) {
    var v997 = arrayOfPatterns$$3[j$$2];
    var v70 = JAM.call(v997.match, v997, [/\/.+\//], JAM.policy.p23) + "gi";
    if (JAM.isEval(eval)) {
      var v1584 = eval("introspect(JAM.policy.pFull) { " + v70 + " }")
    } else {
      var v1584 = JAM.call(eval, null, [v70])
    }
    geneticCodeMatchExp$$1[j$$2] = v1584;
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
    var v623 = arrayOfPatterns$$4[j$$3];
    var v1585 = JAM.call(v623.match, v623, [/=[a-zA-Z\*]/], JAM.policy.p23).toString();
    geneticCodeMatchResult$$1[j$$3] = v1585;
    var v74 = geneticCodeMatchResult$$1[j$$3];
    var v1586 = JAM.call(v74.replace, v74, [/=/g, ""], JAM.policy.p22);
    geneticCodeMatchResult$$1[j$$3] = v1586;
    j$$3++;
    v75 = j$$3 < arrayOfPatterns$$4.length;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var stringToReturn$$2 = "Results for " + sequence$$3.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p23) != -1) {
    stringToReturn$$2 = stringToReturn$$2 + '"' + fastaSequenceTitle$$1 + '"';
  }
  stringToReturn$$2 = stringToReturn$$2 + ' starting "' + JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p19) + '"';
  return'<div class="info">' + stringToReturn$$2 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var stringToReturn$$3 = "Results for " + topology + " " + sequence$$4.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p23) != -1) {
    stringToReturn$$3 = stringToReturn$$3 + '"' + fastaSequenceTitle$$2 + '"';
  }
  stringToReturn$$3 = stringToReturn$$3 + ' starting "' + JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p19) + '"';
  return'<div class="info">' + stringToReturn$$3 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var stringToReturn$$4 = "Alignment results for " + sequenceOne$$1.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p23) != -1) {
    stringToReturn$$4 = stringToReturn$$4 + '"' + fastaSequenceTitleOne$$1 + '"';
  }
  stringToReturn$$4 = stringToReturn$$4 + ' starting "' + JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p19) + '"\n';
  stringToReturn$$4 = stringToReturn$$4 + "and " + sequenceTwo$$1.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p23) != -1) {
    stringToReturn$$4 = stringToReturn$$4 + '"' + fastaSequenceTitleTwo$$1 + '"';
  }
  stringToReturn$$4 = stringToReturn$$4 + ' starting "' + JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p19) + '"';
  return'<div class="info">' + stringToReturn$$4 + "</div>\n";
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v96 = j$$4 < lengthOut;
  for (;v96;) {
    tempNum = JAM.call(Math.floor, Math, [Math.random() * components.length], JAM.policy.p23);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p21);
    j$$4++;
    v96 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p15);
}
function getSequenceFromFasta(sequenceRecord) {
  if (JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p23) != -1) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p22);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  if (JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p23) != -1) {
    fastaTitle = JAM.call(sequenceRecord$$1.match, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p22).toString();
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\>|[\f\n\r]/g, ""], JAM.policy.p22);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\s{2,}/g, " "], JAM.policy.p22);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/[\<\>]/gi, ""], JAM.policy.p22);
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  var v1552 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p23) != -1;
  if (!v1552) {
    v1552 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p23) != -1;
  }
  var v1542 = v1552;
  if (!v1542) {
    v1542 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p23) != -1;
  }
  var v1531 = v1542;
  if (!v1531) {
    v1531 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p23) != -1;
  }
  var v1516 = v1531;
  if (!v1516) {
    v1516 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p23) != -1;
  }
  var v1495 = v1516;
  if (!v1495) {
    v1495 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p23) != -1;
  }
  var v1465 = v1495;
  if (!v1465) {
    v1465 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p23) != -1;
  }
  var v1379 = v1465;
  if (!v1379) {
    v1379 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p23) != -1;
  }
  var v1237 = v1379;
  if (!v1237) {
    v1237 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p23) != -1;
  }
  var v999 = v1237;
  if (!v999) {
    v999 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p23) != -1;
  }
  var v651 = v999;
  if (!v651) {
    v651 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p23) != -1;
  }
  if (v651) {
    return false;
  }
  return true;
}
function openForm() {
  var v101 = outputWindow.document;
  JAM.call(v101.write, v101, ['<form action="">\n'], JAM.policy.p15);
  return true;
}
function openPre() {
  var v102 = outputWindow.document;
  JAM.call(v102.write, v102, ["<pre>"], JAM.policy.p15);
  var v103 = outputWindow.document;
  JAM.call(v103.write, v103, ['<div class="pre">'], JAM.policy.p15);
  return;
}
function openTextArea() {
  var v104 = outputWindow.document;
  JAM.call(v104.write, v104, ['<br /><textarea rows="6" cols="61">\n'], JAM.policy.p15);
  return true;
}
function openWindow(title$$5) {
  _openWindow(title$$5, true);
  return;
}
function _openWindow(title$$6, isColor) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p20);
  outputWindow.focus();
  var v105 = outputWindow.document;
  JAM.call(v105.write, v105, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n'], JAM.policy.p21);
  if (isColor) {
    var v107 = outputWindow.document;
    JAM.call(v107.write, v107, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; background-color: #66FF00}\n" + 
    "span.two, td.two {color: #000000; background-color: #FFFF66}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n" + "td.many {color: #000000}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + 
    "</style>\n"], JAM.policy.p21);
  } else {
    var v109 = outputWindow.document;
    JAM.call(v109.write, v109, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n" + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "td.many {color: #000000; background-color: #FFFFFF}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"], JAM.policy.p21);
  }
  var v111 = outputWindow.document;
  JAM.call(v111.write, v111, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$6 + " results</div>\n"], JAM.policy.p21);
  outputWindow.status = "Please Wait.";
  return true;
}
function openWindowAlign(title$$7) {
  _openWindowAlign(title$$7, true);
  return;
}
function _openWindowAlign(title$$8, isBackground) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p20);
  outputWindow.focus();
  var v113 = outputWindow.document;
  JAM.call(v113.write, v113, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n'], JAM.policy.p21);
  if (isBackground) {
    var v115 = outputWindow.document;
    JAM.call(v115.write, v115, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #FFFFFF; background-color: #000000}\n" + "span.sim {color: #FFFFFF; background-color: #666666}\n" + 
    "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n" + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n" + "span.c, span.m {color: #000000; background-color: #FFFF00}\n" + "span.s, span.t {color: #000000; background-color: #66FF00}\n" + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n" + "span.d, span.e {color: #000000; background-color: #0066FF}\n" + "span.n, span.q {color: #000000; background-color: #996633}\n" + "span.p {color: #000000; background-color: #FF99FF}\n" + 
    "</style>\n"], JAM.policy.p21);
  } else {
    var v117 = outputWindow.document;
    JAM.call(v117.write, v117, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n" + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n" + 
    "span.diff {color: #999999; background-color: #FFFFFF}\n" + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n" + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n" + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n" + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n" + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n" + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n" + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n" + 
    "span.p {color: #00FFCC; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"], JAM.policy.p21);
  }
  var v119 = outputWindow.document;
  JAM.call(v119.write, v119, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$8 + " results</div>\n"], JAM.policy.p21);
  outputWindow.status = "Please Wait.";
  return true;
}
function removeFormatting(sequence$$5) {
  return JAM.call(sequence$$5.replace, sequence$$5, [/[\d\s]/g, ""], JAM.policy.p22);
}
function removeNonDna(sequence$$6) {
  return JAM.call(sequence$$6.replace, sequence$$6, [/[^gatucryswkmbdhvnxGATUCRYSWKMBDHVNX]/g, ""], JAM.policy.p22);
}
function removeNonDnaStrict(sequence$$7) {
  return JAM.call(sequence$$7.replace, sequence$$7, [/[^gatucGATUC]/g, ""], JAM.policy.p22);
}
function removeNonProtein(sequence$$8) {
  return JAM.call(sequence$$8.replace, sequence$$8, [/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, ""], JAM.policy.p22);
}
function removeNonProteinStrict(sequence$$9) {
  return JAM.call(sequence$$9.replace, sequence$$9, [/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, ""], JAM.policy.p22);
}
function removeNonProteinAllowDegen(sequence$$10) {
  return JAM.call(sequence$$10.replace, sequence$$10, [/[^ABCDEFGHIKLMNPQRSTVWYXZabcdefghiklmnpqrstvwyxz\*]/g, ""], JAM.policy.p22);
}
function removeNonProteinAllowX(sequence$$11) {
  return JAM.call(sequence$$11.replace, sequence$$11, [/[^ACDEFGHIKLMNPQRSTVWYZXacdefghiklmnpqrstvwyzx\*]/g, ""], JAM.policy.p22);
}
function removeWhiteSpace(text$$9) {
  return JAM.call(text$$9.replace, text$$9, [/\s/g, ""], JAM.policy.p22);
}
function removeNonLetters(sequence$$12) {
  return JAM.call(sequence$$12.replace, sequence$$12, [/[^A-Z]/gi, ""], JAM.policy.p22);
}
function reverse(dnaSequence$$1) {
  var tempDnaArray = new Array;
  if (JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p23) != -1) {
    tempDnaArray = JAM.call(dnaSequence$$1.match, dnaSequence$$1, [/./g], JAM.policy.p23);
    tempDnaArray = tempDnaArray.reverse();
    dnaSequence$$1 = JAM.call(tempDnaArray.join, tempDnaArray, [""], JAM.policy.p15);
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
  JAM.call(testArray.push, testArray, [testString], JAM.policy.p21);
  if (testArray[0] != testString) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  if (JAM.call(testString.search, testString, [re$$2], JAM.policy.p21) == -1) {
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
  testString = JAM.call(testString.replace, testString, [/(\d)/g, v1], JAM.policy.p22);
  if (testString != "1X2X3X") {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false;
  }
  var testNum = 2489.8237;
  if (JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p17) != 2489.824) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  if (JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p17) != 2489.8) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  if (JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p23) == -1) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v1248 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p23) == -1;
  if (!v1248) {
    v1248 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p23) == -1;
  }
  var v1010 = v1248;
  if (!v1010) {
    v1010 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p23) == -1;
  }
  var v666 = v1010;
  if (!v666) {
    v666 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p23) == -1;
  }
  if (v666) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  if (JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p23) == -1) {
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
  if (JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p23) != -1) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  if (JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p23) != -1) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v1251 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p23) == -1;
  if (!v1251) {
    v1251 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p23) == -1;
  }
  var v1013 = v1251;
  if (!v1013) {
    v1013 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p23) == -1;
  }
  var v671 = v1013;
  if (!v671) {
    v671 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p23) == -1;
  }
  if (v671) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v1254 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p23) == -1;
  if (!v1254) {
    v1254 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p23) == -1;
  }
  var v1016 = v1254;
  if (!v1016) {
    v1016 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p23) == -1;
  }
  var v672 = v1016;
  if (!v672) {
    v672 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p23) == -1;
  }
  if (v672) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  if (JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p23) == -1) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v1257 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p23) == -1;
  if (!v1257) {
    v1257 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p23) == -1;
  }
  var v1019 = v1257;
  if (!v1019) {
    v1019 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p23) == -1;
  }
  var v674 = v1019;
  if (!v674) {
    v674 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p23) == -1;
  }
  if (v674) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  if (JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p23) == -1) {
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
        lineOfText = lineOfText + JAM.call(text$$10.charAt, text$$10, [k + i$$5], JAM.policy.p21);
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
    JAM.call(v147.write, v147, [lineOfText + "\n"], JAM.policy.p21);
    lineOfText = "";
    v149 = i$$5 < stopBase;
  }
  return true;
}
function writeGroupNumDna(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition) {
  JAM.call(writeGroupNumDnaSetStart, null, [text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition, 0], JAM.policy.p25);
  return true;
}
function writeGroupNumDnaSetStart(text$$12, tabIn$$3, groupSize$$2, basePerLine$$2, startBase$$2, stopBase$$2, strands$$1, numberPosition$$1, numberingAdjustment) {
  function adjustNumbering(original, adjustment) {
    var adjusted = original + adjustment;
    var v679 = adjustment < 0;
    if (v679) {
      v679 = adjusted >= 0;
    }
    if (v679) {
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
        lineOfText$$1 = lineOfText$$1 + JAM.call(text$$12.charAt, text$$12, [k$$1 + i$$6], JAM.policy.p21);
        k$$1 = k$$1 + 1;
        v154 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      if (numberPosition$$1 == "above") {
        aboveNum = aboveNum + rightNum(JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p25), "", groupSize$$2, tabIn$$3);
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
      JAM.call(v160.write, v160, [rightNum(JAM.call(adjustNumbering, null, [lineNum, numberingAdjustment], JAM.policy.p25), "", 8, tabIn$$3) + lineOfText$$1 + "\n"], JAM.policy.p21);
      if (strands$$1 == "two") {
        var v162 = outputWindow.document;
        JAM.call(v162.write, v162, [rightNum(JAM.call(adjustNumbering, null, [lineNum, numberingAdjustment], JAM.policy.p25), "", 8, tabIn$$3) + complement(lineOfText$$1) + "\n"], JAM.policy.p21);
        var v164 = outputWindow.document;
        JAM.call(v164.write, v164, ["\n"], JAM.policy.p15);
      }
    } else {
      if (numberPosition$$1 == "right") {
        var v166 = outputWindow.document;
        JAM.call(v166.write, v166, [lineOfText$$1 + JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p25) + "\n"], JAM.policy.p21);
        if (strands$$1 == "two") {
          var v168 = outputWindow.document;
          JAM.call(v168.write, v168, [complement(lineOfText$$1) + JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p25) + "\n"], JAM.policy.p21);
          var v170 = outputWindow.document;
          JAM.call(v170.write, v170, ["\n"], JAM.policy.p15);
        }
      } else {
        if (numberPosition$$1 == "above") {
          var v172 = outputWindow.document;
          JAM.call(v172.write, v172, [aboveNum + "\n"], JAM.policy.p21);
          var v174 = outputWindow.document;
          JAM.call(v174.write, v174, [lineOfText$$1 + "\n"], JAM.policy.p21);
          if (strands$$1 == "two") {
            var v176 = outputWindow.document;
            JAM.call(v176.write, v176, [complement(lineOfText$$1) + "\n"], JAM.policy.p21);
            var v178 = outputWindow.document;
            JAM.call(v178.write, v178, ["\n"], JAM.policy.p15);
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
        lineOfText$$2 = lineOfText$$2 + JAM.call(text$$13.charAt, text$$13, [k$$2 + i$$7], JAM.policy.p21);
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
      JAM.call(v191.write, v191, [rightNum(lineNum$$1, "", 8, tabIn$$4) + lineOfText$$2 + "\n"], JAM.policy.p21);
    } else {
      if (numberPosition$$2 == "right") {
        var v193 = outputWindow.document;
        JAM.call(v193.write, v193, [lineOfText$$2 + i$$7 + "\n"], JAM.policy.p21);
      } else {
        if (numberPosition$$2 == "above") {
          var v195 = outputWindow.document;
          JAM.call(v195.write, v195, [aboveNum$$1 + "\n"], JAM.policy.p21);
          var v197 = outputWindow.document;
          JAM.call(v197.write, v197, [lineOfText$$2 + "\n"], JAM.policy.p21);
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
  var v1030 = sequence$$13.length <= firstIndexToMutate;
  if (!v1030) {
    v1030 = lastIndexToMutate < 0;
  }
  var v696 = v1030;
  if (!v696) {
    v696 = lastIndexToMutate <= firstIndexToMutate;
  }
  if (v696) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v211 = i$$8 < numMut;
  for (;v211;) {
    maxNum = sequence$$13.length;
    randNum = JAM.call(Math.floor, Math, [Math.random() * maxNum], JAM.policy.p23);
    var v698 = randNum < firstIndexToMutate;
    if (!v698) {
      v698 = randNum > lastIndexToMutate;
    }
    if (v698) {
      numMut++;
      i$$8++;
      v211 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p23);
    needNewChar = true;
    for (;needNewChar;) {
      componentsIndex = JAM.call(Math.round, Math, [Math.random() * components$$1.length], JAM.policy.p23);
      if (componentsIndex == components$$1.length) {
        componentsIndex = 0;
      }
      if (components$$1[componentsIndex] != currentChar) {
        needNewChar = false;
      }
    }
    sequence$$13 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p19) + components$$1[componentsIndex] + JAM.call(sequence$$13.substring, sequence$$13, [randNum + 1, sequence$$13.length], JAM.policy.p27);
    i$$8++;
    v211 = i$$8 < numMut;
  }
  var v212 = outputWindow.document;
  JAM.call(v212.write, v212, [addReturns(sequence$$13)], JAM.policy.p21);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v218 = j$$9 < lengthOut$$1;
  for (;v218;) {
    tempNum$$1 = JAM.call(Math.floor, Math, [Math.random() * components$$2.length], JAM.policy.p23);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    if (sequence$$14.length == 60) {
      var v215 = outputWindow.document;
      JAM.call(v215.write, v215, [sequence$$14 + "\n"], JAM.policy.p21);
      sequence$$14 = "";
    }
    j$$9++;
    v218 = j$$9 < lengthOut$$1;
  }
  var v219 = outputWindow.document;
  JAM.call(v219.write, v219, [sequence$$14 + "\n"], JAM.policy.p21);
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
    shiftValue = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p19).length;
    sequence$$15 = JAM.call(sequence$$15.substring, sequence$$15, [sequence$$15.length - lookAhead, sequence$$15.length], JAM.policy.p27) + sequence$$15 + JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p19);
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v225 = outputWindow.document;
  JAM.call(v225.write, v225, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p15);
  var v226 = outputWindow.document;
  JAM.call(v226.write, v226, ['<tr><td class="title" width="200px">' + "Site:" + '</td><td class="title">' + "Positions:" + "</td></tr>\n"], JAM.policy.p21);
  var i$$9 = 0;
  var v243 = i$$9 < arrayOfItems.length;
  for (;v243;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v713 = arrayOfItems[i$$9];
    matchExp = JAM.call(v713.match, v713, [/\/.+\//], JAM.policy.p23) + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    var v1266 = arrayOfItems[i$$9];
    var v714 = JAM.call(v1266.match, v1266, [/\)\D*\d+/], JAM.policy.p23).toString();
    cutDistance = parseFloat(JAM.call(v714.replace, v714, [/\)\D*/, ""], JAM.policy.p22));
    var v235 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p21);
    for (;v235;) {
      matchPosition = matchExp.lastIndex - cutDistance;
      var v715 = matchPosition >= lowerLimit;
      if (v715) {
        v715 = matchPosition < upperLimit;
      }
      if (v715) {
        timesFound++;
        tempString$$1 = tempString$$1 + ", " + (matchPosition - shiftValue + 1);
      }
      matchExp.lastIndex = matchExp.lastIndex - RegExp.lastMatch.length + 1;
      v235 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p21);
    }
    if (JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p23) != -1) {
      tempString$$1 = JAM.call(tempString$$1.replace, tempString$$1, [/none,\s*/, ""], JAM.policy.p22);
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
    var v1502 = '<tr><td class="' + backGroundClass + '">';
    var v1549 = arrayOfItems[i$$9];
    var v1524 = JAM.call(v1549.match, v1549, [/\([^\(]+\)/], JAM.policy.p23).toString();
    JAM.call(v241.write, v241, [v1502 + JAM.call(v1524.replace, v1524, [/\(|\)/g, ""], JAM.policy.p22) + '</td><td class="' + backGroundClass + '">' + tempString$$1 + "</td></tr>\n"], JAM.policy.p21);
    timesFound = 0;
    i$$9++;
    v243 = i$$9 < arrayOfItems.length;
  }
  var v244 = outputWindow.document;
  JAM.call(v244.write, v244, ["</tbody></table>\n"], JAM.policy.p15);
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v245 = outputWindow.document;
  JAM.call(v245.write, v245, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p15);
  var v246 = outputWindow.document;
  JAM.call(v246.write, v246, ['<tr><td class="title">' + "Pattern:" + '</td><td class="title">' + "Times found:" + '</td><td class="title">' + "Percentage:" + "</td></tr>\n"], JAM.policy.p21);
  var i$$10 = 0;
  var v256 = i$$10 < arrayOfItems$$1.length;
  for (;v256;) {
    var tempNumber = 0;
    var v724 = arrayOfItems$$1[i$$10];
    var matchExp$$1 = JAM.call(v724.match, v724, [/\/[^\/]+\//], JAM.policy.p23) + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    if (JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p21) != -1) {
      tempNumber = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p21).length;
    }
    var percentage = 0;
    var v1040 = originalLength + 1;
    var v1400 = arrayOfItems$$1[i$$10];
    if (v1040 - parseFloat(JAM.call(v1400.match, v1400, [/\d+/], JAM.policy.p23)) > 0) {
      var v251 = 100 * tempNumber;
      var v727 = originalLength + 1;
      var v1270 = arrayOfItems$$1[i$$10];
      percentage = v251 / (v727 - parseFloat(JAM.call(v1270.match, v1270, [/\d+/], JAM.policy.p23)));
    }
    var v254 = outputWindow.document;
    var v1550 = arrayOfItems$$1[i$$10];
    var v1525 = JAM.call(v1550.match, v1550, [/\([^\(]+\)\b/], JAM.policy.p23).toString();
    JAM.call(v254.write, v254, ["<tr><td>" + JAM.call(v1525.replace, v1525, [/\(|\)/g, ""], JAM.policy.p22) + "</td><td>" + tempNumber + "</td><td>" + JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p17) + "</td></tr>\n"], JAM.policy.p21);
    i$$10++;
    v256 = i$$10 < arrayOfItems$$1.length;
  }
  var v257 = outputWindow.document;
  JAM.call(v257.write, v257, ["</tbody></table>\n"], JAM.policy.p15);
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
    randNum$$1 = JAM.call(Math.floor, Math, [Math.random() * maxNum$$1], JAM.policy.p23);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p23);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p19);
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [randNum$$1 + 1, sequence$$17.length], JAM.policy.p22);
    sequence$$17 = tempString1 + tempString2;
    if (tempSeq.length == 60) {
      var v261 = outputWindow.document;
      JAM.call(v261.write, v261, [tempSeq + "\n"], JAM.policy.p21);
      tempSeq = "";
    }
    v264 = sequence$$17.length > 0;
  }
  var v265 = outputWindow.document;
  JAM.call(v265.write, v265, [tempSeq + "\n"], JAM.policy.p21);
  return true;
}
function pairwiseAlignCodons(theDocument) {
  JAM.startProfile('compute');

  var newCodonsOne = "";
  var titleOne = "";
  var newCodonsTwo = "";
  var titleTwo = "";
  var maxInput$$3 = 6E3;
  if (testScript() == false) {
    return false;
  }
  var v1272 = checkFormElement(theDocument.forms[0].elements[0]) == false;
  if (!v1272) {
    v1272 = JAM.call(checkSequenceLength, null, [theDocument.forms[0].elements[0].value, maxInput$$3], JAM.policy.p25) == false;
  }
  var v1045 = v1272;
  if (!v1045) {
    v1045 = checkFormElement(theDocument.forms[0].elements[1]) == false;
  }
  var v736 = v1045;
  if (!v736) {
    v736 = JAM.call(checkSequenceLength, null, [theDocument.forms[0].elements[1].value, maxInput$$3], JAM.policy.p25) == false;
  }
  if (v736) {
    return false;
  }
  var MATRIX = "codon";
  var BEGIN_GAP_PENALTY = parseInt(theDocument.forms[0].elements[5].options[theDocument.forms[0].elements[5].selectedIndex].value);
  var GAP_PENALTY = parseInt(theDocument.forms[0].elements[6].options[theDocument.forms[0].elements[6].selectedIndex].value);
  var END_GAP_PENALTY = parseInt(theDocument.forms[0].elements[7].options[theDocument.forms[0].elements[7].selectedIndex].value);
  newCodonsOne = getSequenceFromFasta(theDocument.forms[0].elements[0].value);
  newCodonsOne = removeNonDna(newCodonsOne);
  newCodonsOne = JAM.call(newCodonsOne.replace, newCodonsOne, [/u/g, "t"], JAM.policy.p22);
  newCodonsOne = JAM.call(newCodonsOne.replace, newCodonsOne, [/U/g, "T"], JAM.policy.p22);
  newCodonsTwo = removeNonDnaStrict(newCodonsOne);
  titleOne = getTitleFromFasta(theDocument.forms[0].elements[0].value);
  newCodonsTwo = getSequenceFromFasta(theDocument.forms[0].elements[1].value);
  newCodonsTwo = removeNonDna(newCodonsTwo);
  newCodonsTwo = JAM.call(newCodonsTwo.replace, newCodonsTwo, [/u/gi, "t"], JAM.policy.p22);
  newCodonsTwo = JAM.call(newCodonsTwo.replace, newCodonsTwo, [/U/gi, "T"], JAM.policy.p22);
  newCodonsTwo = removeNonDnaStrict(newCodonsTwo);
  titleTwo = getTitleFromFasta(theDocument.forms[0].elements[1].value);
  var v744 = newCodonsOne.length % 3 != 0;
  if (!v744) {
    v744 = newCodonsTwo.length % 3 != 0;
  }
  if (v744) {
    alert(newCodonsOne.length);
    alert(newCodonsTwo);
    alert("The sequences must be evenly divisible by 3. ");
    return false;
  }
  openWindow("Pairwise Align Codons");
  openPre();
  var v278 = outputWindow.document;
  JAM.call(v278.write, v278, [JAM.call(getPairwiseAlignTitle, null, [titleOne, newCodonsOne, titleTwo, newCodonsTwo], JAM.policy.p25)], JAM.policy.p21);
  if (JAM.call(newCodonsOne.search, newCodonsOne, [/.../], JAM.policy.p23) != -1) {
    newCodonsOne = JAM.call(newCodonsOne.match, newCodonsOne, [/.../g], JAM.policy.p23);
  }
  if (JAM.call(newCodonsTwo.search, newCodonsTwo, [/.../], JAM.policy.p23) != -1) {
    newCodonsTwo = JAM.call(newCodonsTwo.match, newCodonsTwo, [/.../g], JAM.policy.p23);
  }
  JAM.call(pairwiseCodon, null, [titleOne, newCodonsOne, titleTwo, newCodonsTwo, MATRIX, GAP_PENALTY, BEGIN_GAP_PENALTY, END_GAP_PENALTY], JAM.policy.p25);
  closePre();
  closeWindow();

  JAM.stopProfile('compute');
  return true;
}
function pairwiseCodon(titleOne$$1, newCodonsOne$$1, titleTwo$$1, newCodonsTwo$$1, matrix, gapPenalty, beginGapPenalty, endGapPenalty) {
  var useLinearSpace = true;
  var useQuadraticSpace = false;
  var scoringMatrix;
  scoringMatrix = new Codon;
  var scoreSet = new ScoreSet;
  JAM.call(scoreSet.setScoreSetParam, scoreSet, [scoringMatrix, gapPenalty, beginGapPenalty, endGapPenalty], JAM.policy.p27);
  var alignment;
  if (useLinearSpace) {
    alignment = new AlignPairLinear;
    JAM.call(alignment.setAlignParam, alignment, [newCodonsOne$$1, newCodonsTwo$$1, scoreSet], JAM.policy.p27);
    alignment.align();
    var v282 = outputWindow.document;
    JAM.call(v282.write, v282, [">" + titleOne$$1 + "\n"], JAM.policy.p21);
    var v284 = outputWindow.document;
    JAM.call(v284.write, v284, [addReturns(alignment.getAlignedM())], JAM.policy.p21);
    var v286 = outputWindow.document;
    JAM.call(v286.write, v286, ["\n"], JAM.policy.p15);
    var v287 = outputWindow.document;
    JAM.call(v287.write, v287, ["\n"], JAM.policy.p15);
    var v288 = outputWindow.document;
    JAM.call(v288.write, v288, [">" + titleTwo$$1 + "\n"], JAM.policy.p21);
    var v290 = outputWindow.document;
    JAM.call(v290.write, v290, [addReturns(alignment.getAlignedN())], JAM.policy.p21);
    var v292 = outputWindow.document;
    JAM.call(v292.write, v292, ["\n\n"], JAM.policy.p15);
    var v293 = outputWindow.document;
    JAM.call(v293.write, v293, ["Alignment score: " + alignment.score + "\n\n"], JAM.policy.p21);
  }
  if (useQuadraticSpace) {
    alignment = new AlignPairQuad;
    JAM.call(alignment.initializeMatrix, alignment, [newCodonsOne$$1, newCodonsTwo$$1, scoreSet], JAM.policy.p27);
    alignment.fillMatrix();
    alignment.align();
    var v295 = outputWindow.document;
    JAM.call(v295.write, v295, [">" + titleOne$$1 + "\n"], JAM.policy.p21);
    var v297 = outputWindow.document;
    JAM.call(v297.write, v297, [addReturns(alignment.getAlignedM())], JAM.policy.p21);
    var v299 = outputWindow.document;
    JAM.call(v299.write, v299, ["\n"], JAM.policy.p15);
    var v300 = outputWindow.document;
    JAM.call(v300.write, v300, ["\n"], JAM.policy.p15);
    var v301 = outputWindow.document;
    JAM.call(v301.write, v301, [">" + titleTwo$$1 + "\n"], JAM.policy.p21);
    var v303 = outputWindow.document;
    JAM.call(v303.write, v303, [addReturns(alignment.getAlignedN())], JAM.policy.p21);
    var v305 = outputWindow.document;
    JAM.call(v305.write, v305, ["\n\n"], JAM.policy.p15);
    var v306 = outputWindow.document;
    JAM.call(v306.write, v306, ["Alignment score: " + alignment.score + "\n\n"], JAM.policy.p21);
  }
  return;
}
function getScore(r1$$1, r2) {
  var v308 = this.scoringMatrix;
  return JAM.call(v308.scoringMatrix_getScore, v308, [r1$$1, r2], JAM.policy.p27);
}
function setScoreSetParam(scoringMatrix$$1, gapPenalty$$1, beginGapPenalty$$1, endGapPenalty$$1) {
  this.scoringMatrix = scoringMatrix$$1;
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
  if (this.scoreHash[r1$$2 + r2$$1] == null) {
    throw "Unrecognized residue pair: " + r1$$2 + ", " + r2$$1 + ".";
  } else {
    return this.scoreHash[r1$$2 + r2$$1];
  }
  return;
}
function scoringMatrix_fillHash(matrix$$1) {
  var v313 = matrix$$1[0];
  var cols = JAM.call(v313.split, v313, [/\s+/], JAM.policy.p23);
  var cells;
  var i$$11 = 1;
  var v318 = i$$11 < matrix$$1.length;
  for (;v318;) {
    var v314 = matrix$$1[i$$11];
    cells = JAM.call(v314.split, v314, [/\s+/], JAM.policy.p23);
    var j$$10 = 1;
    var v317 = j$$10 < cols.length + 1;
    for (;v317;) {
      var v315 = this.scoreHash;
      var v316 = cells[0].toLowerCase() + cols[j$$10 - 1].toLowerCase();
      var v1587 = parseInt(cells[j$$10]);
      introspect(JAM.policy.p6) {
        v315[v316] = v1587;
      }
      j$$10++;
      v317 = j$$10 < cols.length + 1;
    }
    i$$11++;
    v318 = i$$11 < matrix$$1.length;
  }
  return;
}
function ScoringMatrix() {
  this.scoreHash = {};
  return;
}
function Codon() {
  var matrix$$2 = new Array("AAA  AAC  AAG  AAT  ACA  ACC  ACG  ACT  AGA  AGC  AGG  AGT  ATA  ATC  ATG  ATT  CAA  CAC  CAG  CAT  CCA  CCC  CCG  CCT  CGA  CGC  CGG  CGT  CTA  CTC  CTG  CTT  GAA  GAC  GAG  GAT  GCA  GCC  GCG  GCT  GGA  GGC  GGG  GGT  GTA  GTC  GTG  GTT  TAA  TAC  TAG  TAT  TCA  TCC  TCG  TCT  TGA  TGC  TGG  TGT  TTA  TTC  TTG  TTT", "AAA 11.6 -2.7 9.7 -1.7 -2.7 -6.4 -3.9 -5.6 5.1 -5.0 3.6 -4.2 -6.3 -13.0 -7.1 -11.5 0.4 -6.0 -1.9 -5.3 -8.5 -11.2 -8.9 -10.8 2.1 0.0 1.4 0.2 -10.2 -13.5 -13.0 -12.5 -2.6 -8.5 -5.0 -8.1 -6.3 -9.9 -7.5 -9.0 -7.1 -10.2 -8.2 -9.2 -8.2 -12.5 -11.1 -11.4 -50.0 -14.8 -50.0 -13.8 -7.3 -10.1 -8.4 -9.1 -50.0 -13.0 -13.5 -12.4 -10.7 -18.1 -11.8 -17.2", 
  "AAC -2.7 13.0 -3.3 10.9 -3.5 -0.4 -3.3 -1.8 -5.4 4.6 -5.5 3.0 -10.2 -7.9 -9.9 -9.6 -5.0 0.5 -5.5 -1.0 -10.3 -8.1 -9.4 -9.6 -8.1 -5.0 -7.3 -6.3 -13.4 -11.3 -14.4 -12.9 -6.3 0.8 -6.4 -1.1 -7.4 -5.0 -6.2 -6.5 -5.6 -1.6 -4.7 -3.0 -10.8 -8.7 -11.9 -10.0 -50.0 -6.2 -50.0 -7.5 -6.3 -4.3 -6.2 -5.4 -50.0 -7.0 -16.3 -8.2 -13.2 -12.3 -13.1 -13.3", "AAG 9.7 -3.3 11.6 -2.8 -4.5 -6.7 -3.1 -6.9 3.3 -5.5 4.8 -5.1 -8.9 -13.2 -5.7 -12.6 -1.5 -6.1 -0.6 -6.1 -10.0 -11.8 -8.6 -11.9 1.2 0.5 2.2 0.1 -11.8 -14.0 -11.9 -13.4 -4.9 -9.1 -3.4 -8.9 -8.0 -10.0 -7.2 -10.0 -9.1 -10.2 -7.1 -9.9 -10.1 -13.0 -10.6 -12.7 -50.0 -14.9 -50.0 -14.4 -8.9 -10.8 -8.9 -10.4 -50.0 -13.1 -11.8 -13.0 -12.4 -19.4 -11.5 -17.8", 
  "AAT -1.7 10.9 -2.8 12.9 -2.7 -2.2 -2.8 0.2 -4.8 2.9 -5.2 5.2 -9.1 -9.5 -9.0 -7.0 -4.0 -1.0 -5.0 1.0 -9.0 -8.8 -8.9 -7.7 -7.0 -6.8 -7.1 -4.3 -12.4 -12.9 -13.9 -10.0 -4.9 -0.7 -5.6 1.4 -6.0 -6.5 -6.2 -4.8 -5.1 -3.2 -5.0 -1.2 -9.8 -9.9 -11.3 -8.2 -50.0 -7.6 -50.0 -5.1 -5.5 -5.8 -5.9 -4.2 -50.0 -8.3 -15.5 -5.9 -11.6 -14.2 -12.0 -11.6", "ACA -2.7 -3.5 -4.5 -2.7 11.7 9.0 10.6 9.6 -3.2 -0.7 -5.1 -0.4 0.7 -4.6 -0.4 -3.6 -4.8 -8.9 -6.5 -7.8 -1.4 -4.1 -2.9 -3.3 -8.0 -9.1 -8.0 -8.2 -6.0 -9.3 -7.7 -8.5 -6.4 -10.1 -7.5 -8.6 2.8 -0.7 0.9 0.1 -5.9 -7.3 -6.5 -6.5 -0.4 -3.9 -2.6 -3.1 -50.0 -14.6 -50.0 -12.6 2.9 0.1 1.8 1.0 -50.0 -9.2 -13.6 -7.7 -4.8 -12.2 -6.2 -11.0", 
  "ACC -6.4 -0.4 -6.7 -2.2 9.0 12.3 9.8 9.6 -7.1 2.4 -7.2 0.3 -2.9 -1.2 -3.0 -3.3 -7.6 -6.7 -8.1 -7.9 -4.9 -1.9 -4.5 -3.8 -9.5 -7.8 -9.3 -8.9 -9.4 -7.1 -9.0 -9.0 -9.4 -7.5 -9.3 -9.2 -0.7 2.6 0.2 -0.1 -8.0 -4.6 -7.7 -6.1 -3.6 -1.0 -4.1 -3.1 -50.0 -11.6 -50.0 -11.6 0.2 2.3 0.4 0.5 -50.0 -6.5 -15.3 -7.8 -8.4 -9.5 -8.3 -11.1", "ACG -3.9 -3.3 -3.1 -2.8 10.6 9.8 12.2 9.8 -4.9 0.1 -3.6 -0.2 -1.7 -4.1 0.9 -3.5 -5.9 -8.9 -5.6 -8.5 -3.9 -3.9 -2.2 -4.5 -7.3 -7.5 -6.4 -8.5 -7.1 -8.2 -6.7 -7.8 -7.9 -9.1 -7.1 -9.4 0.9 -0.2 2.5 -0.3 -6.9 -6.5 -5.5 -6.8 -1.7 -3.4 -1.7 -2.8 -50.0 -13.0 -50.0 -11.5 1.5 0.7 2.7 0.6 -50.0 -8.9 -12.1 -7.4 -6.1 -11.5 -5.4 -10.4", 
  "ACT -5.6 -1.8 -6.9 0.2 9.6 9.6 9.8 11.6 -6.6 0.9 -7.2 2.5 -2.3 -3.4 -2.3 -0.6 -6.5 -8.2 -8.0 -6.3 -3.7 -3.5 -3.9 -1.6 -9.9 -8.9 -9.6 -7.0 -8.6 -8.9 -8.8 -6.8 -8.6 -8.2 -8.8 -6.8 0.3 0.1 0.2 2.4 -7.4 -6.2 -6.9 -4.4 -2.9 -2.9 -3.5 -0.9 -50.0 -12.2 -50.0 -10.1 1.2 0.6 1.2 2.4 -50.0 -7.6 -16.1 -5.8 -7.2 -10.8 -7.4 -9.0", "AGA 5.1 -5.4 3.3 -4.8 -3.2 -7.1 -4.9 -6.6 13.3 -2.8 11.2 -1.9 -5.7 -12.5 -7.2 -11.6 -0.7 -4.8 -3.1 -4.3 -10.0 -11.6 -8.8 -11.7 10.5 7.7 9.1 8.5 -9.8 -12.7 -11.7 -11.8 -6.3 -11.4 -8.8 -11.0 -7.5 -10.3 -8.3 -9.9 -1.9 -6.7 -4.1 -6.4 -7.9 -12.5 -11.4 -11.7 -50.0 -14.0 -50.0 -13.2 -8.5 -10.4 -9.1 -9.6 -50.0 -9.8 -7.7 -8.8 -10.3 -17.9 -11.8 -16.0", 
  "AGC -5.0 4.6 -5.5 2.9 -0.7 2.4 0.1 0.9 -2.8 12.8 -2.6 11.0 -8.4 -6.3 -8.3 -7.7 -6.1 -2.9 -6.5 -4.2 -8.5 -5.9 -7.5 -7.7 -5.5 -2.4 -5.5 -4.1 -12.9 -10.3 -12.7 -11.3 -7.4 -3.1 -7.4 -4.9 -4.4 -1.8 -3.5 -3.5 -1.6 3.0 -0.8 0.9 -8.4 -6.3 -9.6 -7.3 -50.0 -9.0 -50.0 -9.7 -2.3 -0.2 -1.2 -1.5 -50.0 -0.7 -13.3 -2.0 -11.8 -11.9 -12.3 -12.7", "AGG 3.6 -5.5 4.8 -5.2 -5.1 -7.2 -3.6 -7.2 11.2 -2.6 13.4 -2.1 -7.7 -12.5 -5.3 -11.9 -2.2 -4.4 -1.9 -4.8 -10.2 -11.5 -8.1 -12.0 9.3 8.2 10.0 8.0 -10.8 -11.9 -10.7 -12.4 -8.2 -11.8 -6.9 -11.5 -8.4 -9.9 -7.1 -10.6 -4.7 -6.8 -1.2 -7.0 -9.8 -11.6 -9.6 -12.1 -50.0 -14.1 -50.0 -12.7 -10.0 -10.8 -8.8 -10.5 -50.0 -9.2 -4.2 -9.3 -11.0 -18.2 -11.1 -16.1", 
  "AGT -4.2 3.0 -5.1 5.2 -0.4 0.3 -0.2 2.5 -1.9 11.0 -2.1 13.2 -7.6 -8.5 -8.0 -5.3 -5.6 -4.5 -6.8 -2.4 -7.8 -7.9 -7.9 -6.2 -5.7 -5.1 -5.4 -2.1 -12.4 -12.3 -13.1 -10.1 -6.6 -4.4 -6.9 -2.6 -3.6 -3.8 -3.7 -2.0 -1.4 0.8 -0.9 3.0 -8.2 -8.1 -9.2 -5.8 -50.0 -10.1 -50.0 -7.4 -1.7 -2.0 -1.5 -0.5 -50.0 -2.1 -12.6 -0.4 -11.6 -13.9 -11.4 -11.1", "ATA -6.3 -10.2 -8.9 -9.1 0.7 -2.9 -1.7 -2.3 -5.7 -8.4 -7.7 -7.6 13.2 9.6 3.5 9.7 -8.7 -12.4 -10.7 -10.7 -7.8 -10.2 -8.8 -9.6 -9.5 -11.9 -10.9 -10.5 2.3 -0.4 -0.2 -0.3 -9.7 -15.5 -11.4 -13.7 -3.0 -6.4 -4.1 -5.4 -9.6 -11.9 -10.5 -11.8 6.2 3.3 3.7 3.6 -50.0 -13.6 -50.0 -11.9 -5.6 -8.8 -7.2 -8.9 -50.0 -12.4 -14.1 -11.6 2.8 -6.4 0.5 -5.2", 
  "ATC -13.0 -7.9 -13.2 -9.5 -4.6 -1.2 -4.1 -3.4 -12.5 -6.3 -12.5 -8.5 9.6 12.7 0.2 10.5 -12.4 -11.6 -13.2 -12.0 -12.4 -10.1 -11.6 -12.0 -15.1 -13.1 -14.3 -13.4 -1.4 1.4 -1.6 -0.5 -14.9 -14.3 -15.2 -16.8 -7.7 -4.7 -6.3 -6.6 -14.6 -10.8 -12.8 -13.0 2.3 6.0 2.5 3.6 -50.0 -11.2 -50.0 -11.9 -10.5 -9.2 -10.5 -10.5 -50.0 -10.3 -16.2 -11.3 -1.7 -3.7 -2.5 -5.4", "ATG -7.1 -9.9 -5.7 -9.0 -0.4 -3.0 0.9 -2.3 -7.2 -8.3 -5.3 -8.0 3.5 0.2 14.3 1.0 -7.3 -11.2 -6.9 -9.7 -8.5 -10.2 -7.7 -9.8 -10.0 -10.4 -8.4 -10.2 1.0 -0.6 1.7 -0.5 -11.1 -14.8 -9.7 -14.5 -3.7 -5.8 -3.1 -5.6 -10.4 -11.5 -8.2 -11.1 0.6 -1.6 1.6 -1.1 -50.0 -12.4 -50.0 -11.5 -5.5 -8.0 -4.9 -7.2 -50.0 -12.4 -10.3 -11.6 0.7 -6.8 2.4 -6.0", 
  "ATT -11.5 -9.6 -12.6 -7.0 -3.6 -3.3 -3.5 -0.6 -11.6 -7.7 -11.9 -5.3 9.7 10.5 1.0 12.6 -12.0 -12.2 -12.5 -9.7 -11.1 -11.2 -11.9 -9.4 -12.9 -14.3 -14.0 -11.9 -1.0 -0.4 -1.6 1.2 -13.9 -15.4 -13.7 -12.6 -6.2 -6.7 -6.3 -4.4 -13.0 -12.2 -13.0 -10.4 2.9 3.8 2.5 5.8 -50.0 -12.5 -50.0 -10.2 -9.6 -9.7 -9.6 -8.3 -50.0 -11.6 -15.4 -9.4 -1.1 -5.4 -1.6 -3.3", "CAA 0.4 -5.0 -1.5 -4.0 -4.8 -7.6 -5.9 -6.5 -0.7 -6.1 -2.2 -5.6 -8.7 -12.4 -7.3 -12.0 12.8 2.3 10.2 3.0 0.0 -3.4 -0.7 -3.2 2.5 -0.8 0.9 0.2 -3.0 -7.2 -5.7 -6.1 -0.2 -6.6 -1.8 -6.0 -5.3 -8.2 -5.7 -7.6 -6.7 -9.6 -7.5 -9.3 -7.1 -10.5 -9.6 -9.4 -50.0 -8.1 -50.0 -7.2 -4.3 -6.8 -5.7 -6.3 -50.0 -9.5 -9.6 -8.9 -6.2 -12.8 -6.8 -11.8", 
  "CAC -6.0 0.5 -6.1 -1.0 -8.9 -6.7 -8.9 -8.2 -4.8 -2.9 -4.4 -4.5 -12.4 -11.6 -11.2 -12.2 2.3 14.6 1.9 12.9 -5.5 -2.6 -4.1 -4.7 -1.2 3.0 -1.1 1.6 -8.0 -4.7 -8.7 -6.0 -8.2 -4.7 -7.8 -6.7 -10.0 -8.3 -8.9 -9.9 -10.8 -7.1 -10.0 -9.2 -11.6 -10.1 -12.3 -11.9 -50.0 2.2 -50.0 0.9 -7.9 -5.9 -7.4 -6.9 -50.0 -4.6 -11.6 -5.6 -9.7 -5.9 -9.9 -7.3", "CAG -1.9 -5.5 -0.6 -5.0 -6.5 -8.1 -5.6 -8.0 -3.1 -6.5 -1.9 -6.8 -10.7 -13.2 -6.9 -12.5 10.2 1.9 11.9 2.1 -2.3 -4.1 -0.5 -4.6 -0.1 -0.9 2.4 -0.8 -5.1 -6.9 -4.8 -6.7 -2.3 -7.1 -0.8 -7.2 -7.2 -8.0 -5.6 -8.5 -9.4 -9.7 -7.2 -9.8 -9.2 -11.1 -9.5 -10.7 -50.0 -8.7 -50.0 -8.6 -6.1 -7.5 -5.5 -7.7 -50.0 -10.4 -7.7 -10.0 -7.3 -13.6 -6.4 -13.3", 
  "CAT -5.3 -1.0 -6.1 1.0 -7.8 -7.9 -8.5 -6.3 -4.3 -4.2 -4.8 -2.4 -10.7 -12.0 -9.7 -9.7 3.0 12.9 2.1 14.7 -4.9 -3.8 -4.0 -2.4 -1.0 0.8 -1.3 3.4 -7.6 -5.7 -8.1 -3.5 -6.8 -5.8 -7.2 -4.2 -8.9 -10.2 -8.4 -8.2 -9.9 -8.4 -9.7 -6.4 -11.1 -11.1 -11.8 -10.0 -50.0 0.4 -50.0 2.6 -7.2 -7.0 -7.4 -5.1 -50.0 -5.7 -9.8 -3.2 -8.4 -7.4 -8.9 -5.9", "CCA -8.5 -10.3 -10.0 -9.0 -1.4 -4.9 -3.9 -3.7 -10.0 -8.5 -10.2 -7.8 -7.8 -12.4 -8.5 -11.1 0.0 -5.5 -2.3 -4.9 12.6 10.0 11.1 10.5 -6.0 -8.3 -6.9 -7.5 -2.2 -7.4 -5.3 -5.9 -8.9 -12.5 -9.4 -11.6 -0.7 -3.9 -2.3 -3.0 -9.1 -9.8 -9.2 -9.5 -5.6 -9.0 -8.0 -8.5 -50.0 -15.3 -50.0 -14.1 2.3 -1.4 0.3 -0.5 -50.0 -13.6 -14.3 -11.5 -5.3 -13.7 -6.1 -12.7", 
  "CCC -11.2 -8.1 -11.8 -8.8 -4.1 -1.9 -3.9 -3.5 -11.6 -5.9 -11.5 -7.9 -10.2 -10.1 -10.2 -11.2 -3.4 -2.6 -4.1 -3.8 10.0 13.1 10.7 10.6 -8.1 -5.2 -8.0 -6.7 -6.1 -3.7 -7.5 -5.6 -11.1 -10.3 -10.6 -11.9 -3.2 -1.0 -2.2 -2.8 -10.5 -8.1 -9.4 -9.5 -8.3 -6.9 -9.4 -8.8 -50.0 -11.3 -50.0 -12.8 -0.6 2.2 -0.3 0.1 -50.0 -10.1 -17.5 -11.1 -8.6 -9.9 -8.6 -11.9", "CCG -8.9 -9.4 -8.6 -8.9 -2.9 -4.5 -2.2 -3.9 -8.8 -7.5 -8.1 -7.9 -8.8 -11.6 -7.7 -11.9 -0.7 -4.1 -0.5 -4.0 11.1 10.7 13.2 10.4 -5.7 -5.8 -3.5 -6.1 -3.6 -6.5 -3.3 -5.5 -9.4 -11.0 -8.7 -11.2 -1.8 -2.7 0.7 -3.0 -9.1 -8.2 -7.3 -9.4 -7.2 -8.2 -7.2 -8.2 -50.0 -13.2 -50.0 -13.3 0.5 -0.9 1.8 -0.6 -50.0 -11.4 -11.1 -10.5 -6.1 -12.9 -5.0 -11.9", 
  "CCT -10.8 -9.6 -11.9 -7.7 -3.3 -3.8 -4.5 -1.6 -11.7 -7.7 -12.0 -6.2 -9.6 -12.0 -9.8 -9.4 -3.2 -4.7 -4.6 -2.4 10.5 10.6 10.4 12.6 -8.2 -7.9 -9.0 -4.7 -6.1 -6.0 -7.5 -2.9 -10.9 -12.2 -11.2 -10.9 -2.4 -2.9 -2.7 -0.9 -10.4 -9.7 -10.2 -8.0 -8.4 -9.1 -9.3 -6.5 -50.0 -13.3 -50.0 -11.0 -0.0 -0.4 -0.4 2.3 -50.0 -10.9 -17.2 -8.3 -8.3 -12.7 -7.8 -9.3", "CGA 2.1 -8.1 1.2 -7.0 -8.0 -9.5 -7.3 -9.9 10.5 -5.5 9.3 -5.7 -9.5 -15.1 -10.0 -12.9 2.5 -1.2 -0.1 -1.0 -6.0 -8.1 -5.7 -8.2 13.8 11.3 11.8 12.1 -6.0 -9.1 -9.0 -9.5 -8.9 -13.4 -10.0 -13.1 -9.9 -11.7 -9.8 -12.8 -5.9 -9.4 -6.5 -8.1 -10.7 -14.0 -13.3 -13.9 -50.0 -11.9 -50.0 -9.7 -8.9 -10.8 -9.0 -11.1 -50.0 -6.5 -5.3 -6.3 -10.5 -16.2 -10.4 -15.2", 
  "CGC 0.0 -5.0 0.5 -6.8 -9.1 -7.8 -7.5 -8.9 7.7 -2.4 8.2 -5.1 -11.9 -13.1 -10.4 -14.3 -0.8 3.0 -0.9 0.8 -8.3 -5.2 -5.8 -7.9 11.3 15.0 11.2 12.8 -9.7 -5.3 -9.2 -7.8 -11.7 -10.6 -10.1 -12.2 -11.7 -8.8 -8.9 -11.8 -9.3 -5.0 -8.0 -8.2 -13.6 -11.4 -12.8 -13.0 -50.0 -7.2 -50.0 -8.4 -11.0 -7.7 -8.7 -10.2 -50.0 -1.5 -7.1 -4.9 -11.2 -11.6 -11.6 -15.0", "CGG 1.4 -7.3 2.2 -7.1 -8.0 -9.3 -6.4 -9.6 9.1 -5.5 10.0 -5.4 -10.9 -14.3 -8.4 -14.0 0.9 -1.1 2.4 -1.3 -6.9 -8.0 -3.5 -9.0 11.8 11.2 13.4 11.4 -7.3 -8.8 -6.5 -8.5 -10.0 -12.5 -7.8 -12.5 -9.6 -11.0 -7.1 -10.7 -7.9 -8.0 -4.3 -9.4 -11.4 -12.3 -10.9 -12.9 -50.0 -11.8 -50.0 -11.2 -9.4 -9.8 -7.3 -10.5 -50.0 -6.2 -2.2 -6.7 -9.8 -15.2 -8.5 -14.9", 
  "CGT 0.2 -6.3 0.1 -4.3 -8.2 -8.9 -8.5 -7.0 8.5 -4.1 8.0 -2.1 -10.5 -13.4 -10.2 -11.9 0.2 1.6 -0.8 3.4 -7.5 -6.7 -6.1 -4.7 12.1 12.8 11.4 14.7 -8.7 -7.4 -9.4 -5.3 -9.9 -11.8 -10.5 -10.3 -9.9 -10.1 -9.3 -9.3 -8.1 -7.2 -8.0 -5.2 -12.0 -12.1 -12.6 -10.9 -50.0 -7.9 -50.0 -5.3 -9.3 -8.8 -8.9 -7.0 -50.0 -3.6 -7.1 -1.2 -10.2 -12.7 -9.9 -11.0", "CTA -10.2 -13.4 -11.8 -12.4 -6.0 -9.4 -7.1 -8.6 -9.8 -12.9 -10.8 -12.4 2.3 -1.4 1.0 -1.0 -3.0 -8.0 -5.1 -7.6 -2.2 -6.1 -3.6 -6.1 -6.0 -9.7 -7.3 -8.7 11.2 7.9 8.9 8.1 -12.1 -17.4 -13.2 -16.8 -6.3 -9.5 -7.5 -8.8 -12.7 -15.2 -13.1 -14.2 0.0 -3.1 -1.8 -3.1 -50.0 -10.7 -50.0 -9.3 -4.6 -8.9 -5.9 -8.3 -50.0 -12.8 -9.6 -10.6 9.5 -3.2 8.2 -2.8", 
  "CTC -13.5 -11.3 -14.0 -12.9 -9.3 -7.1 -8.2 -8.9 -12.7 -10.3 -11.9 -12.3 -0.4 1.4 -0.6 -0.4 -7.2 -4.7 -6.9 -5.7 -7.4 -3.7 -6.5 -6.0 -9.1 -5.3 -8.8 -7.4 7.9 11.9 7.8 9.3 -15.2 -15.1 -14.6 -17.2 -9.7 -7.3 -8.2 -9.2 -15.0 -12.8 -14.1 -14.9 -2.8 0.2 -2.9 -2.3 -50.0 -7.4 -50.0 -8.7 -9.4 -7.3 -9.4 -9.4 -50.0 -8.0 -11.9 -9.7 6.5 0.5 6.4 -1.8", "CTG -13.0 -14.4 -11.9 -13.9 -7.7 -9.0 -6.7 -8.8 -11.7 -12.7 -10.7 -13.1 -0.2 -1.6 1.7 -1.6 -5.7 -8.7 -4.8 -8.1 -5.3 -7.5 -3.3 -7.5 -9.0 -9.2 -6.5 -9.4 8.9 7.8 10.1 7.8 -14.3 -17.7 -13.0 -17.8 -8.0 -9.4 -6.2 -9.2 -15.1 -14.9 -12.2 -14.9 -1.8 -3.2 -0.8 -3.2 -50.0 -10.8 -50.0 -9.9 -7.3 -9.6 -6.4 -9.4 -50.0 -12.3 -8.7 -11.3 7.6 -3.3 8.7 -2.9", 
  "CTT -12.5 -12.9 -13.4 -10.0 -8.5 -9.0 -7.8 -6.8 -11.8 -11.3 -12.4 -10.1 -0.3 -0.5 -0.5 1.2 -6.1 -6.0 -6.7 -3.5 -5.9 -5.6 -5.5 -2.9 -9.5 -7.8 -8.5 -5.3 8.1 9.3 7.8 11.8 -14.4 -15.7 -14.5 -14.6 -8.4 -8.7 -7.9 -7.1 -14.3 -13.8 -13.8 -12.3 -2.4 -2.2 -2.9 -0.2 -50.0 -8.9 -50.0 -7.1 -8.1 -9.1 -8.7 -6.6 -50.0 -9.7 -11.4 -8.0 6.8 -1.8 6.9 0.4", "GAA -2.6 -6.3 -4.9 -4.9 -6.4 -9.4 -7.9 -8.6 -6.3 -7.4 -8.2 -6.6 -9.7 -14.9 -11.1 -13.9 -0.2 -8.2 -2.3 -6.8 -8.9 -11.1 -9.4 -10.9 -8.9 -11.7 -10.0 -9.9 -12.1 -15.2 -14.3 -14.4 11.1 2.9 9.2 3.5 -3.0 -7.0 -4.3 -6.2 -2.2 -6.6 -3.7 -5.7 -6.0 -10.4 -8.6 -9.5 -50.0 -15.5 -50.0 -13.9 -7.8 -10.5 -8.7 -9.6 -50.0 -16.5 -17.1 -14.8 -12.1 -18.9 -12.4 -17.4", 
  "GAC -8.5 0.8 -9.1 -0.7 -10.1 -7.5 -9.1 -8.2 -11.4 -3.1 -11.8 -4.4 -15.5 -14.3 -14.8 -15.4 -6.6 -4.7 -7.1 -5.8 -12.5 -10.3 -11.0 -12.2 -13.4 -10.6 -12.5 -11.8 -17.4 -15.1 -17.7 -15.7 2.9 12.5 3.1 10.3 -7.7 -5.2 -6.2 -7.3 -5.4 -1.7 -5.4 -3.7 -11.6 -9.1 -13.0 -10.8 -50.0 -10.3 -50.0 -11.2 -9.8 -8.3 -9.1 -9.7 -50.0 -12.7 -20.6 -13.1 -16.0 -16.6 -17.0 -18.4", "GAG -5.0 -6.4 -3.4 -5.6 -7.5 -9.3 -7.1 -8.8 -8.8 -7.4 -6.9 -6.9 -11.4 -15.2 -9.7 -13.7 -1.8 -7.8 -0.8 -7.2 -9.4 -10.6 -8.7 -11.2 -10.0 -10.1 -7.8 -10.5 -13.2 -14.6 -13.0 -14.5 9.2 3.1 10.8 3.0 -4.5 -6.7 -2.7 -6.7 -5.0 -6.8 -2.5 -6.7 -7.5 -10.4 -7.4 -10.2 -50.0 -15.5 -50.0 -14.2 -8.9 -10.2 -8.5 -10.0 -50.0 -15.6 -15.3 -15.5 -13.0 -18.8 -12.6 -18.3", 
  "GAT -8.1 -1.1 -8.9 1.4 -8.6 -9.2 -9.4 -6.8 -11.0 -4.9 -11.5 -2.6 -13.7 -16.8 -14.5 -12.6 -6.0 -6.7 -7.2 -4.2 -11.6 -11.9 -11.2 -10.9 -13.1 -12.2 -12.5 -10.3 -16.8 -17.2 -17.8 -14.6 3.5 10.3 3.0 12.4 -6.9 -7.5 -6.8 -4.9 -5.4 -4.2 -5.4 -1.3 -10.8 -11.5 -12.4 -8.2 -50.0 -12.5 -50.0 -8.9 -9.2 -10.0 -9.4 -7.9 -50.0 -14.3 -19.9 -11.4 -16.2 -19.2 -15.8 -15.9", "GCA -6.3 -7.4 -8.0 -6.0 2.8 -0.7 0.9 0.3 -7.5 -4.4 -8.4 -3.6 -3.0 -7.7 -3.7 -6.2 -5.3 -10.0 -7.2 -8.9 -0.7 -3.2 -1.8 -2.4 -9.9 -11.7 -9.6 -9.9 -6.3 -9.7 -8.0 -8.4 -3.0 -7.7 -4.5 -6.9 11.3 8.2 9.4 9.1 -1.0 -3.3 -1.8 -2.4 1.5 -2.1 -0.4 -1.1 -50.0 -14.5 -50.0 -12.9 2.8 -0.0 1.4 0.7 -50.0 -8.7 -14.1 -7.5 -5.2 -12.5 -6.5 -10.7", 
  "GCC -9.9 -5.0 -10.0 -6.5 -0.7 2.6 -0.2 0.1 -10.3 -1.8 -9.9 -3.8 -6.4 -4.7 -5.8 -6.7 -8.2 -8.3 -8.0 -10.2 -3.9 -1.0 -2.7 -2.9 -11.7 -8.8 -11.0 -10.1 -9.5 -7.3 -9.4 -8.7 -7.0 -5.2 -6.7 -7.5 8.2 11.6 8.8 9.1 -3.7 -0.9 -3.1 -3.0 -2.0 1.2 -2.3 -1.3 -50.0 -12.1 -50.0 -12.6 0.1 2.5 0.7 0.6 -50.0 -6.0 -14.8 -7.5 -8.6 -9.4 -8.5 -11.2", "GCG -7.5 -6.2 -7.2 -6.2 0.9 0.2 2.5 0.2 -8.3 -3.5 -7.1 -3.7 -4.1 -6.3 -3.1 -6.3 -5.7 -8.9 -5.6 -8.4 -2.3 -2.2 0.7 -2.7 -9.8 -8.9 -7.1 -9.3 -7.5 -8.2 -6.2 -7.9 -4.3 -6.2 -2.7 -6.8 9.4 8.8 12.1 8.8 -2.1 -2.0 0.1 -2.4 0.0 -1.1 1.3 -0.8 -50.0 -11.9 -50.0 -12.6 1.2 0.7 3.5 0.8 -50.0 -7.1 -12.4 -7.1 -7.1 -10.6 -5.0 -10.6", 
  "GCT -9.0 -6.5 -10.0 -4.8 0.1 -0.1 -0.3 2.4 -9.9 -3.5 -10.6 -2.0 -5.4 -6.6 -5.6 -4.4 -7.6 -9.9 -8.5 -8.2 -3.0 -2.8 -3.0 -0.9 -12.8 -11.8 -10.7 -9.3 -8.8 -9.2 -9.2 -7.1 -6.2 -7.3 -6.7 -4.9 9.1 9.1 8.8 11.2 -3.1 -3.0 -3.3 -1.0 -1.1 -1.4 -2.0 1.2 -50.0 -12.8 -50.0 -10.9 0.8 0.5 0.7 2.3 -50.0 -7.5 -16.5 -5.9 -7.8 -11.1 -7.8 -9.0", "GGA -7.1 -5.6 -9.1 -5.1 -5.9 -8.0 -6.9 -7.4 -1.9 -1.6 -4.7 -1.4 -9.6 -14.6 -10.4 -13.0 -6.7 -10.8 -9.4 -9.9 -9.1 -10.5 -9.1 -10.4 -5.9 -9.3 -7.9 -8.1 -12.7 -15.0 -15.1 -14.3 -2.2 -5.4 -5.0 -5.4 -1.0 -3.7 -2.1 -3.1 12.8 9.6 11.1 10.1 -4.8 -9.4 -8.1 -8.6 -50.0 -18.3 -50.0 -15.4 -5.9 -7.5 -6.6 -7.1 -50.0 -9.5 -11.7 -8.4 -12.5 -17.3 -13.2 -15.4", 
  "GGC -10.2 -1.6 -10.2 -3.2 -7.3 -4.6 -6.5 -6.2 -6.7 3.0 -6.8 0.8 -11.9 -10.8 -11.5 -12.2 -9.6 -7.1 -9.7 -8.4 -9.8 -8.1 -8.2 -9.7 -9.4 -5.0 -8.0 -7.2 -15.2 -12.8 -14.9 -13.8 -6.6 -1.7 -6.8 -4.2 -3.3 -0.9 -2.0 -3.0 9.6 12.8 9.7 10.5 -8.5 -5.6 -9.3 -7.8 -50.0 -12.7 -50.0 -13.8 -6.8 -5.1 -5.3 -6.5 -50.0 -4.1 -12.8 -5.8 -14.4 -14.1 -13.6 -14.8", "GGG -8.2 -4.7 -7.1 -5.0 -6.5 -7.7 -5.5 -6.9 -4.1 -0.8 -1.2 -0.9 -10.5 -12.8 -8.2 -13.0 -7.5 -10.0 -7.2 -9.7 -9.2 -9.4 -7.3 -10.2 -6.5 -8.0 -4.3 -8.0 -13.1 -14.1 -12.2 -13.8 -3.7 -5.4 -2.5 -5.4 -1.8 -3.1 0.1 -3.3 11.1 9.7 12.9 9.8 -5.5 -8.1 -5.4 -7.8 -50.0 -16.4 -50.0 -14.8 -5.9 -7.1 -4.7 -7.2 -50.0 -8.4 -6.4 -8.1 -12.1 -16.2 -10.3 -15.8", 
  "GGT -9.2 -3.0 -9.9 -1.2 -6.5 -6.1 -6.8 -4.4 -6.4 0.9 -7.0 3.0 -11.8 -13.0 -11.1 -10.4 -9.3 -9.2 -9.8 -6.4 -9.5 -9.5 -9.4 -8.0 -8.1 -8.2 -9.4 -5.2 -14.2 -14.9 -14.9 -12.3 -5.7 -3.7 -6.7 -1.3 -2.4 -3.0 -2.4 -1.0 10.1 10.5 9.8 13.1 -7.2 -8.0 -8.4 -5.0 -50.0 -14.7 -50.0 -11.4 -6.3 -6.7 -5.8 -5.0 -50.0 -6.1 -13.4 -3.6 -13.0 -16.0 -13.7 -13.3", "GTA -8.2 -10.8 -10.1 -9.8 -0.4 -3.6 -1.7 -2.9 -7.9 -8.4 -9.8 -8.2 6.2 2.3 0.6 2.9 -7.1 -11.6 -9.2 -11.1 -5.6 -8.3 -7.2 -8.4 -10.7 -13.6 -11.4 -12.0 0.0 -2.8 -1.8 -2.4 -6.0 -11.6 -7.5 -10.8 1.5 -2.0 0.0 -1.1 -4.8 -8.5 -5.5 -7.2 11.9 8.6 10.0 9.0 -50.0 -14.2 -50.0 -12.8 -4.1 -7.4 -5.7 -6.5 -50.0 -11.0 -14.3 -9.9 1.4 -7.9 -0.7 -6.8", 
  "GTC -12.5 -8.7 -13.0 -9.9 -3.9 -1.0 -3.4 -2.9 -12.5 -6.3 -11.6 -8.1 3.3 6.0 -1.6 3.8 -10.5 -10.1 -11.1 -11.1 -9.0 -6.9 -8.2 -9.1 -14.0 -11.4 -12.3 -12.1 -3.1 0.2 -3.2 -2.2 -10.4 -9.1 -10.4 -11.5 -2.1 1.2 -1.1 -1.4 -9.4 -5.6 -8.1 -8.0 8.6 12.4 8.6 9.5 -50.0 -10.4 -50.0 -11.6 -7.2 -5.7 -7.5 -7.4 -50.0 -8.6 -15.7 -9.7 -3.0 -3.7 -3.2 -5.9", "GTG -11.1 -11.9 -10.6 -11.3 -2.6 -4.1 -1.7 -3.5 -11.4 -9.6 -9.6 -9.2 3.7 2.5 1.6 2.5 -9.6 -12.3 -9.5 -11.8 -8.0 -9.4 -7.2 -9.3 -13.3 -12.8 -10.9 -12.6 -1.8 -2.9 -0.8 -2.9 -8.6 -13.0 -7.4 -12.4 -0.4 -2.3 1.3 -2.0 -8.1 -9.3 -5.4 -8.4 10.0 8.6 11.4 8.9 -50.0 -13.7 -50.0 -13.2 -6.1 -8.1 -5.5 -7.5 -50.0 -11.3 -12.7 -10.1 -1.6 -7.8 -0.3 -7.2", 
  "GTT -11.4 -10.0 -12.7 -8.2 -3.1 -3.1 -2.8 -0.9 -11.7 -7.3 -12.1 -5.8 3.6 3.6 -1.1 5.8 -9.4 -11.9 -10.7 -10.0 -8.5 -8.8 -8.2 -6.5 -13.9 -13.0 -12.9 -10.9 -3.1 -2.3 -3.2 -0.2 -9.5 -10.8 -10.2 -8.2 -1.1 -1.3 -0.8 1.2 -8.6 -7.8 -7.8 -5.0 9.0 9.5 8.9 12.0 -50.0 -13.0 -50.0 -10.3 -6.2 -7.0 -7.1 -5.4 -50.0 -9.3 -14.0 -8.2 -2.4 -6.3 -2.4 -3.9", "TAA -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 33.3 -50.0 30.6 -50.0 -50.0 -50.0 -50.0 -50.0 29.2 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0", 
  "TAC -14.8 -6.2 -14.9 -7.6 -14.6 -11.6 -13.0 -12.2 -14.0 -9.0 -14.1 -10.1 -13.6 -11.2 -12.4 -12.5 -8.1 2.2 -8.7 0.4 -15.3 -11.3 -13.2 -13.3 -11.9 -7.2 -11.8 -7.9 -10.7 -7.4 -10.8 -8.9 -15.5 -10.3 -15.5 -12.5 -14.5 -12.1 -11.9 -12.8 -18.3 -12.7 -16.4 -14.7 -14.2 -10.4 -13.7 -13.0 -50.0 15.1 -50.0 13.3 -9.9 -5.8 -8.9 -7.6 -50.0 -1.5 -7.8 -3.0 -8.1 3.6 -9.4 2.0", "TAG -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 30.6 -50.0 35.2 -50.0 -50.0 -50.0 -50.0 -50.0 28.5 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0", 
  "TAT -13.8 -7.5 -14.4 -5.1 -12.6 -11.6 -11.5 -10.1 -13.2 -9.7 -12.7 -7.4 -11.9 -11.9 -11.5 -10.2 -7.2 0.9 -8.6 2.6 -14.1 -12.8 -13.3 -11.0 -9.7 -8.4 -11.2 -5.3 -9.3 -8.7 -9.9 -7.1 -13.9 -11.2 -14.2 -8.9 -12.9 -12.6 -12.6 -10.9 -15.4 -13.8 -14.8 -11.4 -12.8 -11.6 -13.2 -10.3 -50.0 13.3 -50.0 15.2 -8.6 -7.0 -8.4 -4.8 -50.0 -3.0 -7.1 -0.1 -7.3 2.3 -8.7 3.9", "TCA -7.3 -6.3 -8.9 -5.5 2.9 0.2 1.5 1.2 -8.5 -2.3 -10.0 -1.7 -5.6 -10.5 -5.5 -9.6 -4.3 -7.9 -6.1 -7.2 2.3 -0.6 0.5 -0.0 -8.9 -11.0 -9.4 -9.3 -4.6 -9.4 -7.3 -8.1 -7.8 -9.8 -8.9 -9.2 2.8 0.1 1.2 0.8 -5.9 -6.8 -5.9 -6.3 -4.1 -7.2 -6.1 -6.2 -50.0 -9.9 -50.0 -8.6 12.5 9.4 11.0 9.8 -50.0 -4.8 -8.7 -3.5 -0.0 -8.6 -2.1 -7.0", 
  "TCC -10.1 -4.3 -10.8 -5.8 0.1 2.3 0.7 0.6 -10.4 -0.2 -10.8 -2.0 -8.8 -9.2 -8.0 -9.7 -6.8 -5.9 -7.5 -7.0 -1.4 2.2 -0.9 -0.4 -10.8 -7.7 -9.8 -8.8 -8.9 -7.3 -9.6 -9.1 -10.5 -8.3 -10.2 -10.0 -0.0 2.5 0.7 0.5 -7.5 -5.1 -7.1 -6.7 -7.4 -5.7 -8.1 -7.0 -50.0 -5.8 -50.0 -7.0 9.4 12.7 10.1 10.0 -50.0 -1.5 -11.3 -3.3 -5.4 -4.2 -5.6 -6.8", "TCG -8.4 -6.2 -8.9 -5.9 1.8 0.4 2.7 1.2 -9.1 -1.2 -8.8 -1.5 -7.2 -10.5 -4.9 -9.6 -5.7 -7.4 -5.5 -7.4 0.3 -0.3 1.8 -0.4 -9.0 -8.7 -7.3 -8.9 -5.9 -9.4 -6.4 -8.7 -8.7 -9.1 -8.5 -9.4 1.4 0.7 3.5 0.7 -6.6 -5.3 -4.7 -5.8 -5.7 -7.5 -5.5 -7.1 -50.0 -8.9 -50.0 -8.4 11.0 10.1 13.2 10.2 -50.0 -4.2 -6.1 -3.6 -3.5 -8.4 -1.2 -6.8", 
  "TCT -9.1 -5.4 -10.4 -4.2 1.0 0.5 0.6 2.4 -9.6 -1.5 -10.5 -0.5 -8.9 -10.5 -7.2 -8.3 -6.3 -6.9 -7.7 -5.1 -0.5 0.1 -0.6 2.3 -11.1 -10.2 -10.5 -7.0 -8.3 -9.4 -9.4 -6.6 -9.6 -9.7 -10.0 -7.9 0.7 0.6 0.8 2.3 -7.1 -6.5 -7.2 -5.0 -6.5 -7.4 -7.5 -5.4 -50.0 -7.6 -50.0 -4.8 9.8 10.0 10.2 12.1 -50.0 -3.1 -11.4 -0.7 -4.6 -6.6 -4.9 -3.9", "TGA -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 29.2 -50.0 28.5 -50.0 -50.0 -50.0 -50.0 -50.0 33.3 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0", 
  "TGC -13.0 -7.0 -13.1 -8.3 -9.2 -6.5 -8.9 -7.6 -9.8 -0.7 -9.2 -2.1 -12.4 -10.3 -12.4 -11.6 -9.5 -4.6 -10.4 -5.7 -13.6 -10.1 -11.4 -10.9 -6.5 -1.5 -6.2 -3.6 -12.8 -8.0 -12.3 -9.7 -16.5 -12.7 -15.6 -14.3 -8.7 -6.0 -7.1 -7.5 -9.5 -4.1 -8.4 -6.1 -11.0 -8.6 -11.3 -9.3 -50.0 -1.5 -50.0 -3.0 -4.8 -1.5 -4.2 -3.1 -50.0 16.4 -5.1 14.2 -10.1 -4.3 -10.0 -5.4", "TGG -13.5 -16.3 -11.8 -15.5 -13.6 -15.3 -12.1 -16.1 -7.7 -13.3 -4.2 -12.6 -14.1 -16.2 -10.3 -15.4 -9.6 -11.6 -7.7 -9.8 -14.3 -17.5 -11.1 -17.2 -5.3 -7.1 -2.2 -7.1 -9.6 -11.9 -8.7 -11.4 -17.1 -20.6 -15.3 -19.9 -14.1 -14.8 -12.4 -16.5 -11.7 -12.8 -6.4 -13.4 -14.3 -15.7 -12.7 -14.0 -50.0 -7.8 -50.0 -7.1 -8.7 -11.3 -6.1 -11.4 -50.0 -5.1 18.6 -4.8 -8.6 -8.1 -4.5 -7.3", 
  "TGT -12.4 -8.2 -13.0 -5.9 -7.7 -7.8 -7.4 -5.8 -8.8 -2.0 -9.3 -0.4 -11.6 -11.3 -11.6 -9.4 -8.9 -5.6 -10.0 -3.2 -11.5 -11.1 -10.5 -8.3 -6.3 -4.9 -6.7 -1.2 -10.6 -9.7 -11.3 -8.0 -14.8 -13.1 -15.5 -11.4 -7.5 -7.5 -7.1 -5.9 -8.4 -5.8 -8.1 -3.6 -9.9 -9.7 -10.1 -8.2 -50.0 -3.0 -50.0 -0.1 -3.5 -3.3 -3.6 -0.7 -50.0 14.2 -4.8 16.4 -8.9 -5.8 -8.9 -3.4", "TTA -10.7 -13.2 -12.4 -11.6 -4.8 -8.4 -6.1 -7.2 -10.3 -11.8 -11.0 -11.6 2.8 -1.7 0.7 -1.1 -6.2 -9.7 -7.3 -8.4 -5.3 -8.6 -6.1 -8.3 -10.5 -11.2 -9.8 -10.2 9.5 6.5 7.6 6.8 -12.1 -16.0 -13.0 -16.2 -5.2 -8.6 -7.1 -7.8 -12.5 -14.4 -12.1 -13.0 1.4 -3.0 -1.6 -2.4 -50.0 -8.1 -50.0 -7.3 -0.0 -5.4 -3.5 -4.6 -50.0 -10.1 -8.6 -8.9 13.2 -0.9 9.7 -0.3", 
  "TTC -18.1 -12.3 -19.4 -14.2 -12.2 -9.5 -11.5 -10.8 -17.9 -11.9 -18.2 -13.9 -6.4 -3.7 -6.8 -5.4 -12.8 -5.9 -13.6 -7.4 -13.7 -9.9 -12.9 -12.7 -16.2 -11.6 -15.2 -12.7 -3.2 0.5 -3.3 -1.8 -18.9 -16.6 -18.8 -19.2 -12.5 -9.4 -10.6 -11.1 -17.3 -14.1 -16.2 -16.0 -7.9 -3.7 -7.8 -6.3 -50.0 3.6 -50.0 2.3 -8.6 -4.2 -8.4 -6.6 -50.0 -4.3 -8.1 -5.8 -0.9 14.2 -1.8 11.6", "TTG -11.8 -13.1 -11.5 -12.0 -6.2 -8.3 -5.4 -7.4 -11.8 -12.3 -11.1 -11.4 0.5 -2.5 2.4 -1.6 -6.8 -9.9 -6.4 -8.9 -6.1 -8.6 -5.0 -7.8 -10.4 -11.6 -8.5 -9.9 8.2 6.4 8.7 6.9 -12.4 -17.0 -12.6 -15.8 -6.5 -8.5 -5.0 -7.8 -13.2 -13.6 -10.3 -13.7 -0.7 -3.2 -0.3 -2.4 -50.0 -9.4 -50.0 -8.7 -2.1 -5.6 -1.2 -4.9 -50.0 -10.0 -4.5 -8.9 9.7 -1.8 11.3 -0.9", 
  "TTT -17.2 -13.3 -17.8 -11.6 -11.0 -11.1 -10.4 -9.0 -16.0 -12.7 -16.1 -11.1 -5.2 -5.4 -6.0 -3.3 -11.8 -7.3 -13.3 -5.9 -12.7 -11.9 -11.9 -9.3 -15.2 -15.0 -14.9 -11.0 -2.8 -1.8 -2.9 0.4 -17.4 -18.4 -18.3 -15.9 -10.7 -11.2 -10.6 -9.0 -15.4 -14.8 -15.8 -13.3 -6.8 -5.9 -7.2 -3.9 -50.0 2.0 -50.0 3.9 -7.0 -6.8 -6.8 -3.9 -50.0 -5.4 -7.3 -3.4 -0.3 11.6 -0.9 14.1");
  JAM.call(this.scoringMatrix_fillHash, this, [matrix$$2], JAM.policy.p21);
  return;
}
function align() {
  if (this.M.length == 0) {
    var j$$11 = 1;
    var v324 = j$$11 <= this.N.length;
    for (;v324;) {
      var v319 = this.alignedM;
      JAM.call(v319.push, v319, [".--"], JAM.policy.p15);
      var v320 = this.alignedN;
      JAM.call(v320.push, v320, [this.N[j$$11 - 1]], JAM.policy.p21);
      this.score = this.score + this.scoreSet.gap;
      j$$11++;
      v324 = j$$11 <= this.N.length;
    }
  } else {
    if (this.N.length == 0) {
      j$$11 = 1;
      var v330 = j$$11 <= this.M.length;
      for (;v330;) {
        var v325 = this.alignedN;
        JAM.call(v325.push, v325, [".--"], JAM.policy.p15);
        var v326 = this.alignedM;
        JAM.call(v326.push, v326, [this.M[j$$11 - 1]], JAM.policy.p21);
        this.score = this.score + this.scoreSet.gap;
        j$$11++;
        v330 = j$$11 <= this.M.length;
      }
    } else {
      var v778 = this.M.length == 0;
      if (v778) {
        v778 = this.N.length == 0;
      }
      if (v778) {
      } else {
        JAM.call(this.path, this, [0, 0, this.M.length, this.N.length], JAM.policy.p19);
      }
    }
  }
  return;
}
function path(i1, j1, i2, j2) {
  var v781 = i1 + 1 == i2;
  if (!v781) {
    v781 = j1 == j2;
  }
  if (v781) {
    var subM = new Array;
    var subN = new Array;
    var i$$12 = i1 + 1;
    var v337 = i$$12 <= i2;
    for (;v337;) {
      JAM.call(subM.push, subM, [this.M[i$$12 - 1]], JAM.policy.p21);
      i$$12++;
      v337 = i$$12 <= i2;
    }
    var j$$12 = j1 + 1;
    var v339 = j$$12 <= j2;
    for (;v339;) {
      JAM.call(subN.push, subN, [this.N[j$$12 - 1]], JAM.policy.p21);
      j$$12++;
      v339 = j$$12 <= j2;
    }
    var alignment$$1 = new AlignPairQuad;
    subScoreSet = new ScoreSet;
    if (j1 == j2) {
      if (j1 == 0) {
        JAM.call(subScoreSet.setScoreSetParam, subScoreSet, [this.scoreSet.scoringMatrix, this.scoreSet.beginGap, this.scoreSet.beginGap, this.scoreSet.beginGap], JAM.policy.p27);
      } else {
        if (j1 == this.N.length) {
          JAM.call(subScoreSet.setScoreSetParam, subScoreSet, [this.scoreSet.scoringMatrix, this.scoreSet.endGap, this.scoreSet.endGap, this.scoreSet.endGap], JAM.policy.p27);
        } else {
          JAM.call(subScoreSet.setScoreSetParam, subScoreSet, [this.scoreSet.scoringMatrix, this.scoreSet.gap, this.scoreSet.gap, this.scoreSet.gap], JAM.policy.p27);
        }
      }
    } else {
      JAM.call(subScoreSet.setScoreSetParam, subScoreSet, [this.scoreSet.scoringMatrix, this.scoreSet.gap, this.scoreSet.beginGap, this.scoreSet.endGap], JAM.policy.p27);
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
    JAM.call(alignment$$1.initializeMatrix, alignment$$1, [subM, subN, subScoreSet], JAM.policy.p27);
    alignment$$1.fillMatrix();
    alignment$$1.align();
    var v363 = this.alignedM;
    JAM.call(v363.push, v363, [alignment$$1.getAlignedM()], JAM.policy.p21);
    var v365 = this.alignedN;
    JAM.call(v365.push, v365, [alignment$$1.getAlignedN()], JAM.policy.p21);
    this.score = this.score + alignment$$1.score;
  } else {
    var middle = JAM.call(Math.floor, Math, [(i1 + i2) / 2], JAM.policy.p21);
    var v370 = this.Sn;
    introspect(JAM.policy.p6) {
      v370[j1] = 0;
    }
    if (i1 == 0) {
      j$$12 = j1 + 1;
      var v372 = j$$12 <= j2;
      for (;v372;) {
        var v371 = this.Sn;
        var v806 = this.Sn[j$$12 - 1];
        var v807 = this.scoreSet.beginGap;
        introspect(JAM.policy.p6) {
          v371[j$$12] = v806 - v807;
        }
        j$$12++;
        v372 = j$$12 <= j2;
      }
    } else {
      j$$12 = j1 + 1;
      var v374 = j$$12 <= j2;
      for (;v374;) {
        var v373 = this.Sn;
        var v808 = this.Sn[j$$12 - 1];
        var v809 = this.scoreSet.gap;
        introspect(JAM.policy.p6) {
          v373[j$$12] = v808 - v809;
        }
        j$$12++;
        v374 = j$$12 <= j2;
      }
    }
    var diag;
    var left$$1;
    i$$12 = i1 + 1;
    var v397 = i$$12 <= middle;
    for (;v397;) {
      diag = this.Sn[j1];
      if (j1 == 0) {
        left$$1 = this.Sn[j1] - this.scoreSet.beginGap;
      } else {
        left$$1 = this.Sn[j1] - this.scoreSet.gap;
      }
      JAM.set(this.Sn, j1, left$$1, JAM.policy.p6);
      j$$12 = j1 + 1;
      var v396 = j$$12 <= j2;
      for (;v396;) {
        var v814 = j$$12 == this.N.length;
        if (v814) {
          v814 = i$$12 == this.M.length;
        }
        if (v814) {
          var v383 = this.Sn[j$$12] - this.scoreSet.endGap;
          var v817 = left$$1 - this.scoreSet.endGap;
          var v1294 = this.scoreSet;
          left$$1 = JAM.call(Math.max, Math, [v383, JAM.call(Math.max, Math, [v817, diag + JAM.call(v1294.getScore, v1294, [this.M[i$$12 - 1], this.N[j$$12 - 1]], JAM.policy.p27)], JAM.policy.p27)], JAM.policy.p22);
        } else {
          if (i$$12 == this.M.length) {
            var v385 = this.Sn[j$$12] - this.scoreSet.gap;
            var v822 = left$$1 - this.scoreSet.endGap;
            var v1298 = this.scoreSet;
            left$$1 = JAM.call(Math.max, Math, [v385, JAM.call(Math.max, Math, [v822, diag + JAM.call(v1298.getScore, v1298, [this.M[i$$12 - 1], this.N[j$$12 - 1]], JAM.policy.p27)], JAM.policy.p27)], JAM.policy.p22);
          } else {
            if (j$$12 == this.N.length) {
              var v387 = this.Sn[j$$12] - this.scoreSet.endGap;
              var v827 = left$$1 - this.scoreSet.gap;
              var v1302 = this.scoreSet;
              left$$1 = JAM.call(Math.max, Math, [v387, JAM.call(Math.max, Math, [v827, diag + JAM.call(v1302.getScore, v1302, [this.M[i$$12 - 1], this.N[j$$12 - 1]], JAM.policy.p27)], JAM.policy.p27)], JAM.policy.p22);
            } else {
              var v389 = this.Sn[j$$12] - this.scoreSet.gap;
              var v831 = left$$1 - this.scoreSet.gap;
              var v1306 = this.scoreSet;
              left$$1 = JAM.call(Math.max, Math, [v389, JAM.call(Math.max, Math, [v831, diag + JAM.call(v1306.getScore, v1306, [this.M[i$$12 - 1], this.N[j$$12 - 1]], JAM.policy.p27)], JAM.policy.p27)], JAM.policy.p22);
            }
          }
        }
        diag = this.Sn[j$$12];
        JAM.set(this.Sn, j$$12, left$$1, JAM.policy.p6);
        j$$12++;
        v396 = j$$12 <= j2;
      }
      i$$12++;
      v397 = i$$12 <= middle;
    }
    var v398 = this.Sp;
    introspect(JAM.policy.p6) {
      v398[j2] = 0;
    }
    if (i2 == this.M.length) {
      j$$12 = j2 - 1;
      var v400 = j$$12 >= j1;
      for (;v400;) {
        var v399 = this.Sp;
        var v834 = this.Sp[j$$12 + 1];
        var v835 = this.scoreSet.endGap;
        introspect(JAM.policy.p6) {
          v399[j$$12] = v834 - v835;
        }
        j$$12--;
        v400 = j$$12 >= j1;
      }
    } else {
      j$$12 = j2 - 1;
      var v402 = j$$12 >= j1;
      for (;v402;) {
        var v401 = this.Sp;
        var v836 = this.Sp[j$$12 + 1];
        var v837 = this.scoreSet.gap;
        introspect(JAM.policy.p6) {
          v401[j$$12] = v836 - v837;
        }
        j$$12--;
        v402 = j$$12 >= j1;
      }
    }
    var right$$1;
    i$$12 = i2 - 1;
    var v425 = i$$12 >= middle;
    for (;v425;) {
      diag = this.Sp[j2];
      if (j2 == this.N.length) {
        right$$1 = this.Sp[j2] - this.scoreSet.endGap;
      } else {
        right$$1 = this.Sp[j2] - this.scoreSet.gap;
      }
      JAM.set(this.Sp, j2, right$$1, JAM.policy.p6);
      j$$12 = j2 - 1;
      var v424 = j$$12 >= j1;
      for (;v424;) {
        var v843 = j$$12 == 0;
        if (v843) {
          v843 = i$$12 == 0;
        }
        if (v843) {
          var v411 = this.Sp[j$$12] - this.scoreSet.beginGap;
          var v846 = right$$1 - this.scoreSet.beginGap;
          var v1310 = this.scoreSet;
          right$$1 = JAM.call(Math.max, Math, [v411, JAM.call(Math.max, Math, [v846, diag + JAM.call(v1310.getScore, v1310, [this.M[i$$12 + 1 - 1], this.N[j$$12 + 1 - 1]], JAM.policy.p27)], JAM.policy.p27)], JAM.policy.p22);
        } else {
          if (j$$12 == 0) {
            var v413 = this.Sp[j$$12] - this.scoreSet.beginGap;
            var v850 = right$$1 - this.scoreSet.gap;
            var v1314 = this.scoreSet;
            right$$1 = JAM.call(Math.max, Math, [v413, JAM.call(Math.max, Math, [v850, diag + JAM.call(v1314.getScore, v1314, [this.M[i$$12 + 1 - 1], this.N[j$$12 + 1 - 1]], JAM.policy.p27)], JAM.policy.p27)], JAM.policy.p22);
          } else {
            if (i$$12 == 0) {
              var v415 = this.Sp[j$$12] - this.scoreSet.gap;
              var v854 = right$$1 - this.scoreSet.beginGap;
              var v1318 = this.scoreSet;
              right$$1 = JAM.call(Math.max, Math, [v415, JAM.call(Math.max, Math, [v854, diag + JAM.call(v1318.getScore, v1318, [this.M[i$$12 + 1 - 1], this.N[j$$12 + 1 - 1]], JAM.policy.p27)], JAM.policy.p27)], JAM.policy.p22);
            } else {
              var v417 = this.Sp[j$$12] - this.scoreSet.gap;
              var v858 = right$$1 - this.scoreSet.gap;
              var v1322 = this.scoreSet;
              right$$1 = JAM.call(Math.max, Math, [v417, JAM.call(Math.max, Math, [v858, diag + JAM.call(v1322.getScore, v1322, [this.M[i$$12 + 1 - 1], this.N[j$$12 + 1 - 1]], JAM.policy.p27)], JAM.policy.p27)], JAM.policy.p22);
            }
          }
        }
        diag = this.Sp[j$$12];
        JAM.set(this.Sp, j$$12, right$$1, JAM.policy.p6);
        j$$12--;
        v424 = j$$12 >= j1;
      }
      i$$12--;
      v425 = i$$12 >= middle;
    }
    var maxValue = this.Sn[j1] + this.Sp[j1];
    var maxJ = j1;
    j$$12 = j1 + 1;
    var v431 = j$$12 <= j2;
    for (;v431;) {
      if (this.Sn[j$$12] + this.Sp[j$$12] >= maxValue) {
        maxValue = this.Sn[j$$12] + this.Sp[j$$12];
        maxJ = j$$12;
      }
      j$$12++;
      v431 = j$$12 <= j2;
    }
    JAM.call(this.path, this, [i1, j1, middle, maxJ], JAM.policy.p27);
    JAM.call(this.path, this, [middle, maxJ, i2, j2], JAM.policy.p22);
  }
  return;
}
function getAlignedM() {
  var v433 = this.alignedM;
  return JAM.call(v433.join, v433, [""], JAM.policy.p15);
}
function getAlignedN() {
  var v434 = this.alignedN;
  return JAM.call(v434.join, v434, [""], JAM.policy.p15);
}
function setAlignParam(M, N, scoreSet$$1) {
  this.M = M;
  this.N = N;
  var v1588 = new Array;
  this.alignedM = v1588;
  var v1589 = new Array;
  this.alignedN = v1589;
  this.scoreSet = scoreSet$$1;
  var v1590 = new Array(this.N.length);
  this.Sn = v1590;
  var v1591 = new Array(this.N.length);
  this.Sp = v1591;
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
  var v1592 = new Array(this.M.length + 1);
  this.nodes = v1592;
  var i$$13 = 0;
  var v441 = i$$13 < this.nodes.length;
  for (;v441;) {
    var v438 = this.nodes;
    var v1593 = new Array(this.N.length + 1);
    v438[i$$13] = v1593;
    var j$$13 = 0;
    var v440 = j$$13 < this.nodes[i$$13].length;
    for (;v440;) {
      var v439 = this.nodes[i$$13];
      var v1594 = new Node;
      v439[j$$13] = v1594;
      j$$13++;
      v440 = j$$13 < this.nodes[i$$13].length;
    }
    i$$13++;
    v441 = i$$13 < this.nodes.length;
  }
  this.nodes[0][0].value = 0;
  i$$13 = 1;
  var v448 = i$$13 < this.nodes.length;
  for (;v448;) {
    if (this.scoreSet.useBeginGapLeft) {
      this.nodes[i$$13][0].value = this.nodes[i$$13 - 1][0].value - this.scoreSet.beginGap;
    } else {
      this.nodes[i$$13][0].value = this.nodes[i$$13 - 1][0].value - this.scoreSet.gap;
    }
    this.nodes[i$$13][0].tracebackI = i$$13 - 1;
    this.nodes[i$$13][0].tracebackJ = 0;
    i$$13++;
    v448 = i$$13 < this.nodes.length;
  }
  j$$13 = 1;
  var v454 = j$$13 < this.nodes[0].length;
  for (;v454;) {
    if (this.scoreSet.useBeginGapTop) {
      this.nodes[0][j$$13].value = this.nodes[0][j$$13 - 1].value - this.scoreSet.beginGap;
    } else {
      this.nodes[0][j$$13].value = this.nodes[0][j$$13 - 1].value - this.scoreSet.gap;
    }
    this.nodes[0][j$$13].tracebackI = 0;
    this.nodes[0][j$$13].tracebackJ = j$$13 - 1;
    j$$13++;
    v454 = j$$13 < this.nodes[0].length;
  }
  return;
}
function dumpMatrix() {
  var v455 = outputWindow.document;
  JAM.call(v455.write, v455, ["Dynamic programming matrix i=" + this.nodes.length + " and j=" + this.nodes[0].length], JAM.policy.p21);
  var v457 = outputWindow.document;
  JAM.call(v457.write, v457, ["\n"], JAM.policy.p15);
  var i$$14 = 0;
  var v468 = i$$14 < this.nodes.length;
  for (;v468;) {
    var j$$14 = 0;
    var v466 = j$$14 < this.nodes[i$$14].length;
    for (;v466;) {
      var traceI = this.nodes[i$$14][j$$14].tracebackI;
      var traceJ = this.nodes[i$$14][j$$14].tracebackJ;
      if (traceI == undefined) {
        traceI = "u";
      }
      if (traceJ == undefined) {
        traceJ = "u";
      }
      var output = "(" + i$$14 + "," + j$$14 + ")[" + traceI + "," + traceJ + "]=" + this.nodes[i$$14][j$$14].value;
      var v464 = outputWindow.document;
      JAM.call(v464.write, v464, [rightNum(output, "", 20, " ")], JAM.policy.p21);
      j$$14++;
      v466 = j$$14 < this.nodes[i$$14].length;
    }
    var v467 = outputWindow.document;
    JAM.call(v467.write, v467, ["\n"], JAM.policy.p15);
    i$$14++;
    v468 = i$$14 < this.nodes.length;
  }
  var v469 = outputWindow.document;
  JAM.call(v469.write, v469, ["\n"], JAM.policy.p15);
  return;
}
function fillMatrix() {
  var i$$15 = 1;
  var v515 = i$$15 < this.nodes.length;
  for (;v515;) {
    var j$$15 = 1;
    var v514 = j$$15 < this.nodes[0].length;
    for (;v514;) {
      var a;
      var b;
      var c;
      var v909 = i$$15 == this.nodes.length - 1;
      if (v909) {
        v909 = j$$15 == this.nodes[0].length - 1;
      }
      if (v909) {
        if (this.scoreSet.useEndGapRight) {
          a = this.nodes[i$$15 - 1][j$$15].value - this.scoreSet.endGap;
        } else {
          a = this.nodes[i$$15 - 1][j$$15].value - this.scoreSet.gap;
        }
        if (this.scoreSet.useEndGapBottom) {
          b = this.nodes[i$$15][j$$15 - 1].value - this.scoreSet.endGap;
        } else {
          b = this.nodes[i$$15][j$$15 - 1].value - this.scoreSet.gap;
        }
      } else {
        if (i$$15 == this.nodes.length - 1) {
          a = this.nodes[i$$15 - 1][j$$15].value - this.scoreSet.gap;
          if (this.scoreSet.useEndGapBottom) {
            b = this.nodes[i$$15][j$$15 - 1].value - this.scoreSet.endGap;
          } else {
            b = this.nodes[i$$15][j$$15 - 1].value - this.scoreSet.gap;
          }
        } else {
          if (j$$15 == this.nodes[0].length - 1) {
            if (this.scoreSet.useEndGapRight) {
              a = this.nodes[i$$15 - 1][j$$15].value - this.scoreSet.endGap;
            } else {
              a = this.nodes[i$$15 - 1][j$$15].value - this.scoreSet.gap;
            }
            b = this.nodes[i$$15][j$$15 - 1].value - this.scoreSet.gap;
          } else {
            a = this.nodes[i$$15 - 1][j$$15].value - this.scoreSet.gap;
            b = this.nodes[i$$15][j$$15 - 1].value - this.scoreSet.gap;
          }
        }
      }
      var v501 = this.nodes[i$$15 - 1][j$$15 - 1].value;
      var v941 = this.scoreSet;
      c = v501 + JAM.call(v941.getScore, v941, [this.M[i$$15 - 1], this.N[j$$15 - 1]], JAM.policy.p27);
      var v944 = a >= b;
      if (v944) {
        v944 = a >= c;
      }
      if (v944) {
        this.nodes[i$$15][j$$15].value = a;
        this.nodes[i$$15][j$$15].tracebackI = i$$15 - 1;
        this.nodes[i$$15][j$$15].tracebackJ = j$$15;
      } else {
        var v948 = b >= c;
        if (v948) {
          v948 = b >= a;
        }
        if (v948) {
          this.nodes[i$$15][j$$15].value = b;
          this.nodes[i$$15][j$$15].tracebackI = i$$15;
          this.nodes[i$$15][j$$15].tracebackJ = j$$15 - 1;
        } else {
          this.nodes[i$$15][j$$15].value = c;
          this.nodes[i$$15][j$$15].tracebackI = i$$15 - 1;
          this.nodes[i$$15][j$$15].tracebackJ = j$$15 - 1;
        }
      }
      j$$15++;
      v514 = j$$15 < this.nodes[0].length;
    }
    i$$15++;
    v515 = i$$15 < this.nodes.length;
  }
  this.score = this.nodes[this.nodes.length - 1][this.nodes[0].length - 1].value;
  return;
}
function alignQuad() {
  var v1595 = new Array;
  this.alignedM = v1595;
  var v1596 = new Array;
  this.alignedN = v1596;
  var currentI = this.nodes.length - 1;
  var currentJ = this.nodes[0].length - 1;
  var currentNode = this.nodes[this.nodes.length - 1][this.nodes[0].length - 1];
  var v964 = currentNode.tracebackI != undefined;
  if (v964) {
    v964 = currentNode.tracebackJ != undefined;
  }
  var v535 = v964;
  for (;v535;) {
    var v965 = currentNode.tracebackI == currentI - 1;
    if (v965) {
      v965 = currentNode.tracebackJ == currentJ - 1;
    }
    if (v965) {
      var v521 = this.alignedM;
      JAM.call(v521.push, v521, [this.M.pop()], JAM.policy.p21);
      var v523 = this.alignedN;
      JAM.call(v523.push, v523, [this.N.pop()], JAM.policy.p21);
    } else {
      if (currentNode.tracebackJ == currentJ - 1) {
        var v525 = this.alignedM;
        JAM.call(v525.push, v525, [".--"], JAM.policy.p15);
        var v526 = this.alignedN;
        JAM.call(v526.push, v526, [this.N.pop()], JAM.policy.p21);
      } else {
        var v528 = this.alignedM;
        JAM.call(v528.push, v528, [this.M.pop()], JAM.policy.p21);
        var v530 = this.alignedN;
        JAM.call(v530.push, v530, [".--"], JAM.policy.p15);
      }
    }
    currentI = currentNode.tracebackI;
    currentJ = currentNode.tracebackJ;
    currentNode = this.nodes[currentNode.tracebackI][currentNode.tracebackJ];
    var v974 = currentNode.tracebackI != undefined;
    if (v974) {
      v974 = currentNode.tracebackJ != undefined;
    }
    v535 = v974;
  }
  var v1597 = this.alignedM.reverse();
  this.alignedM = v1597;
  var v1598 = this.alignedN.reverse();
  this.alignedN = v1598;
  return;
}
function getAlignedM() {
  var v538 = this.alignedM;
  return JAM.call(v538.join, v538, [""], JAM.policy.p15);
}
function getAlignedN() {
  var v539 = this.alignedN;
  return JAM.call(v539.join, v539, [""], JAM.policy.p15);
}
function AlignPairQuad() {
  return;
}
new ScoreSet;
ScoreSet.prototype.getScore = getScore;
ScoreSet.prototype.setScoreSetParam = setScoreSetParam;
new ScoringMatrix;
ScoringMatrix.prototype.scoringMatrix_getScore = scoringMatrix_getScore;
ScoringMatrix.prototype.scoringMatrix_fillHash = scoringMatrix_fillHash;
var v544 = Codon;
var v1599 = new ScoringMatrix;
v544.prototype = v1599;
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
JAM.set(JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p15), "onclick", v3);
JAM.set(JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p15), "onclick", v4)

JAM.stopProfile('load');
