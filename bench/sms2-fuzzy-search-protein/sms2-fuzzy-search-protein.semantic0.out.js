// sms2-fuzzy-search-protein.js
function v4() {
  document.forms[0].elements[0].value = " ";
  document.forms[0].elements[4].value = " ";
  return;
}
function v3() {
  try {
    fuzzySearchProtein();
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
    var v1051 = arrayOfTitles[i$$1];
    var v743 = JAM.call(v1051.search, v1051, [/\S/], JAM.policy.p21) == -1;
    if (!v743) {
      var v1052 = arrayOfSequences[i$$1];
      v743 = JAM.call(v1052.search, v1052, [/\S/], JAM.policy.p21) == -1;
    }
    var v423 = v743;
    if (!v423) {
      v423 = arrayOfSequences[i$$1].length != lengthOfAlign;
    }
    if (v423) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    v12 = i$$1 < arrayOfTitles.length;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v1053 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p21) == -1;
  if (!v1053) {
    v1053 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p21) == -1;
  }
  var v952 = v1053;
  if (!v952) {
    v952 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p21) == -1;
  }
  var v746 = v952;
  if (!v746) {
    v746 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p21) == -1;
  }
  var v425 = v746;
  if (!v425) {
    v425 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p21) == -1;
  }
  if (v425) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v749 = formElement.value;
  if (JAM.call(v749.search, v749, [/\S/], JAM.policy.p21) == -1) {
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
    var v750 = arrayOfPatterns[z$$2];
    if (JAM.call(v750.search, v750, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p21) == -1) {
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
    var v752 = arrayOfPatterns[j];
    var v20 = JAM.call(v752.match, v752, [/\/.+\//], JAM.policy.p21) + "gi";
    if (JAM.isEval(eval)) {
      var v1219 = eval("introspect(JAM.policy.pFull) { " + v20 + " }")
    } else {
      var v1219 = JAM.call(eval, null, [v20])
    }
    geneticCodeMatchExp[j] = v1219;
    var v433 = arrayOfPatterns[j];
    var v1220 = JAM.call(v433.match, v433, [/=[a-zA-Z\*]/], JAM.policy.p21).toString();
    geneticCodeMatchResult[j] = v1220;
    var v22 = geneticCodeMatchResult[j];
    var v1221 = JAM.call(v22.replace, v22, [/=/g, ""], JAM.policy.p23);
    geneticCodeMatchResult[j] = v1221;
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
      if (JAM.call(codon.search, codon, [geneticCodeMatchExp[j]], JAM.policy.p22) != -1) {
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
    var v756 = arrayOfPatterns$$1[z$$3];
    if (JAM.call(v756.search, v756, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p21) != -1) {
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
      var v758 = arrayOfPatterns$$1[j$$1];
      if (JAM.call(v758.search, v758, [re], JAM.policy.p22) != -1) {
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
    var v759 = arrayOfPatterns$$2[z$$4];
    if (JAM.call(v759.search, v759, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p21) == -1) {
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
  var v955 = getSequenceFromFasta(text$$7);
  if (JAM.call(v955.replace, v955, [/[^A-Za-z]/g, ""], JAM.policy.p23).length > maxInput) {
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
    var v762 = alignArray[i$$4];
    if (JAM.call(v762.search, v762, [/[^\s]+\s/], JAM.policy.p21) == -1) {
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
  if (JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p21) != -1) {
    var v54 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p22);
    for (;v54;) {
      JAM.call(arrayOfFasta.push, arrayOfFasta, [matchArray[0]], JAM.policy.p22);
      v54 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p22);
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var stringToReturn = "&gt;results for " + sequence$$2.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p21) != -1) {
    stringToReturn = stringToReturn + '"' + fastaSequenceTitle + '"';
  }
  stringToReturn = stringToReturn + ' starting "' + JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p19) + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var stringToReturn$$1 = "Search results for " + sequenceOne.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p21) != -1) {
    stringToReturn$$1 = stringToReturn$$1 + '"' + fastaSequenceTitleOne + '"';
  }
  stringToReturn$$1 = stringToReturn$$1 + ' starting "' + JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p19) + '"\n';
  stringToReturn$$1 = stringToReturn$$1 + "and " + sequenceTwo.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p21) != -1) {
    stringToReturn$$1 = stringToReturn$$1 + '"' + fastaSequenceTitleTwo + '"';
  }
  stringToReturn$$1 = stringToReturn$$1 + ' starting "' + JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p19) + '"';
  return '<div class="info">' + stringToReturn$$1 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var geneticCodeMatchExp$$1 = new Array(arrayOfPatterns$$3.length);
  var j$$2 = 0;
  var v71 = j$$2 < arrayOfPatterns$$3.length;
  for (;v71;) {
    var v763 = arrayOfPatterns$$3[j$$2];
    var v70 = JAM.call(v763.match, v763, [/\/.+\//], JAM.policy.p21) + "gi";
    if (JAM.isEval(eval)) {
      var v1222 = eval("introspect(JAM.policy.pFull) { " + v70 + " }")
    } else {
      var v1222 = JAM.call(eval, null, [v70])
    }
    geneticCodeMatchExp$$1[j$$2] = v1222;
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
    var v483 = arrayOfPatterns$$4[j$$3];
    var v1223 = JAM.call(v483.match, v483, [/=[a-zA-Z\*]/], JAM.policy.p21).toString();
    geneticCodeMatchResult$$1[j$$3] = v1223;
    var v74 = geneticCodeMatchResult$$1[j$$3];
    var v1224 = JAM.call(v74.replace, v74, [/=/g, ""], JAM.policy.p23);
    geneticCodeMatchResult$$1[j$$3] = v1224;
    j$$3++;
    v75 = j$$3 < arrayOfPatterns$$4.length;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var stringToReturn$$2 = "Results for " + sequence$$3.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p21) != -1) {
    stringToReturn$$2 = stringToReturn$$2 + '"' + fastaSequenceTitle$$1 + '"';
  }
  stringToReturn$$2 = stringToReturn$$2 + ' starting "' + JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p19) + '"';
  return '<div class="info">' + stringToReturn$$2 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var stringToReturn$$3 = "Results for " + topology + " " + sequence$$4.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p21) != -1) {
    stringToReturn$$3 = stringToReturn$$3 + '"' + fastaSequenceTitle$$2 + '"';
  }
  stringToReturn$$3 = stringToReturn$$3 + ' starting "' + JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p19) + '"';
  return '<div class="info">' + stringToReturn$$3 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var stringToReturn$$4 = "Alignment results for " + sequenceOne$$1.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p21) != -1) {
    stringToReturn$$4 = stringToReturn$$4 + '"' + fastaSequenceTitleOne$$1 + '"';
  }
  stringToReturn$$4 = stringToReturn$$4 + ' starting "' + JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p19) + '"\n';
  stringToReturn$$4 = stringToReturn$$4 + "and " + sequenceTwo$$1.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p21) != -1) {
    stringToReturn$$4 = stringToReturn$$4 + '"' + fastaSequenceTitleTwo$$1 + '"';
  }
  stringToReturn$$4 = stringToReturn$$4 + ' starting "' + JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p19) + '"';
  return '<div class="info">' + stringToReturn$$4 + "</div>\n";
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v96 = j$$4 < lengthOut;
  for (;v96;) {
    tempNum = JAM.call(Math.floor, Math, [Math.random() * components.length], JAM.policy.p21);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p22);
    j$$4++;
    v96 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p17);
}
function getSequenceFromFasta(sequenceRecord) {
  if (JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p21) != -1) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p23);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  if (JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p21) != -1) {
    fastaTitle = JAM.call(sequenceRecord$$1.match, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p23).toString();
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\>|[\f\n\r]/g, ""], JAM.policy.p23);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\s{2,}/g, " "], JAM.policy.p23);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/[\<\>]/gi, ""], JAM.policy.p23);
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  var v1190 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p21) != -1;
  if (!v1190) {
    v1190 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p21) != -1;
  }
  var v1180 = v1190;
  if (!v1180) {
    v1180 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p21) != -1;
  }
  var v1169 = v1180;
  if (!v1169) {
    v1169 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p21) != -1;
  }
  var v1154 = v1169;
  if (!v1154) {
    v1154 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p21) != -1;
  }
  var v1135 = v1154;
  if (!v1135) {
    v1135 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p21) != -1;
  }
  var v1109 = v1135;
  if (!v1109) {
    v1109 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p21) != -1;
  }
  var v1056 = v1109;
  if (!v1056) {
    v1056 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p21) != -1;
  }
  var v956 = v1056;
  if (!v956) {
    v956 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p21) != -1;
  }
  var v765 = v956;
  if (!v765) {
    v765 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p21) != -1;
  }
  var v511 = v765;
  if (!v511) {
    v511 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p21) != -1;
  }
  if (v511) {
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
  var title$$5 = "Fuzzy Protein DNA";
  _openWindow(title$$5);
  return;
}
function _openWindow(title$$6) {
  var isColor = true;
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p20);
  outputWindow.focus();
  var v105 = outputWindow.document;
  JAM.call(v105.write, v105, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n'], JAM.policy.p22);
  if (isColor) {
    var v107 = outputWindow.document;
    JAM.call(v107.write, v107, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; background-color: #66FF00}\n" + 
    "span.two, td.two {color: #000000; background-color: #FFFF66}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n" + "td.many {color: #000000}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + 
    "</style>\n"], JAM.policy.p22);
  } else {
    var v109 = outputWindow.document;
    JAM.call(v109.write, v109, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n" + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "td.many {color: #000000; background-color: #FFFFFF}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"], JAM.policy.p22);
  }
  var v111 = outputWindow.document;
  JAM.call(v111.write, v111, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$6 + " results</div>\n"], JAM.policy.p22);
  outputWindow.status = "Please Wait.";
  return;
}
function openWindowAlign(title$$7) {
  _openWindowAlign(title$$7);
  return;
}
function _openWindowAlign(title$$8) {
  var isBackground = true;
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p20);
  outputWindow.focus();
  var v113 = outputWindow.document;
  JAM.call(v113.write, v113, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n'], JAM.policy.p22);
  if (isBackground) {
    var v115 = outputWindow.document;
    JAM.call(v115.write, v115, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #FFFFFF; background-color: #000000}\n" + "span.sim {color: #FFFFFF; background-color: #666666}\n" + 
    "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n" + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n" + "span.c, span.m {color: #000000; background-color: #FFFF00}\n" + "span.s, span.t {color: #000000; background-color: #66FF00}\n" + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n" + "span.d, span.e {color: #000000; background-color: #0066FF}\n" + "span.n, span.q {color: #000000; background-color: #996633}\n" + "span.p {color: #000000; background-color: #FF99FF}\n" + 
    "</style>\n"], JAM.policy.p22);
  } else {
    var v117 = outputWindow.document;
    JAM.call(v117.write, v117, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n" + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n" + 
    "span.diff {color: #999999; background-color: #FFFFFF}\n" + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n" + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n" + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n" + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n" + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n" + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n" + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n" + 
    "span.p {color: #00FFCC; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"], JAM.policy.p22);
  }
  var v119 = outputWindow.document;
  JAM.call(v119.write, v119, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$8 + " results</div>\n"], JAM.policy.p22);
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
  if (JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p21) != -1) {
    tempDnaArray = JAM.call(dnaSequence$$1.match, dnaSequence$$1, [/./g], JAM.policy.p21);
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
  JAM.call(testArray.push, testArray, [testString], JAM.policy.p22);
  if (testArray[0] != testString) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  if (JAM.call(testString.search, testString, [re$$2], JAM.policy.p22) == -1) {
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
  if (JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p15) != 2489.824) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  if (JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p15) != 2489.8) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  if (JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p21) == -1) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v967 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p21) == -1;
  if (!v967) {
    v967 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p21) == -1;
  }
  var v776 = v967;
  if (!v776) {
    v776 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p21) == -1;
  }
  var v526 = v776;
  if (!v526) {
    v526 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p21) == -1;
  }
  if (v526) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  if (JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p21) == -1) {
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
  if (JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p21) != -1) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  if (JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p21) != -1) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v970 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p21) == -1;
  if (!v970) {
    v970 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p21) == -1;
  }
  var v779 = v970;
  if (!v779) {
    v779 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p21) == -1;
  }
  var v531 = v779;
  if (!v531) {
    v531 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p21) == -1;
  }
  if (v531) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v973 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p21) == -1;
  if (!v973) {
    v973 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p21) == -1;
  }
  var v782 = v973;
  if (!v782) {
    v782 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p21) == -1;
  }
  var v532 = v782;
  if (!v532) {
    v532 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p21) == -1;
  }
  if (v532) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  if (JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p21) == -1) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v976 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p21) == -1;
  if (!v976) {
    v976 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p21) == -1;
  }
  var v785 = v976;
  if (!v785) {
    v785 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p21) == -1;
  }
  var v534 = v785;
  if (!v534) {
    v534 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p21) == -1;
  }
  if (v534) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  if (JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p21) == -1) {
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
        lineOfText = lineOfText + JAM.call(text$$10.charAt, text$$10, [k + i$$5], JAM.policy.p22);
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
    JAM.call(v147.write, v147, [lineOfText + "\n"], JAM.policy.p22);
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
    var v539 = adjustment < 0;
    if (v539) {
      v539 = adjusted >= 0;
    }
    if (v539) {
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
        lineOfText$$1 = lineOfText$$1 + JAM.call(text$$12.charAt, text$$12, [k$$1 + i$$6], JAM.policy.p22);
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
      JAM.call(v158.write, v158, [rightNum(adjustNumbering(lineNum, numberingAdjustment), "", 8, tabIn$$3) + lineOfText$$1 + "\n"], JAM.policy.p22);
      if (strands$$1 == "two") {
        var v160 = outputWindow.document;
        JAM.call(v160.write, v160, [rightNum(adjustNumbering(lineNum, numberingAdjustment), "", 8, tabIn$$3) + complement(lineOfText$$1) + "\n"], JAM.policy.p22);
        var v162 = outputWindow.document;
        JAM.call(v162.write, v162, ["\n"], JAM.policy.p17);
      }
    } else {
      if (numberPosition$$1 == "right") {
        var v164 = outputWindow.document;
        JAM.call(v164.write, v164, [lineOfText$$1 + adjustNumbering(i$$6, numberingAdjustment) + "\n"], JAM.policy.p22);
        if (strands$$1 == "two") {
          var v166 = outputWindow.document;
          JAM.call(v166.write, v166, [complement(lineOfText$$1) + adjustNumbering(i$$6, numberingAdjustment) + "\n"], JAM.policy.p22);
          var v168 = outputWindow.document;
          JAM.call(v168.write, v168, ["\n"], JAM.policy.p17);
        }
      } else {
        if (numberPosition$$1 == "above") {
          var v170 = outputWindow.document;
          JAM.call(v170.write, v170, [aboveNum + "\n"], JAM.policy.p22);
          var v172 = outputWindow.document;
          JAM.call(v172.write, v172, [lineOfText$$1 + "\n"], JAM.policy.p22);
          if (strands$$1 == "two") {
            var v174 = outputWindow.document;
            JAM.call(v174.write, v174, [complement(lineOfText$$1) + "\n"], JAM.policy.p22);
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
        lineOfText$$2 = lineOfText$$2 + JAM.call(text$$13.charAt, text$$13, [k$$2 + i$$7], JAM.policy.p22);
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
      JAM.call(v189.write, v189, [rightNum(lineNum$$1, "", 8, tabIn$$4) + lineOfText$$2 + "\n"], JAM.policy.p22);
    } else {
      if (numberPosition$$2 == "right") {
        var v191 = outputWindow.document;
        JAM.call(v191.write, v191, [lineOfText$$2 + i$$7 + "\n"], JAM.policy.p22);
      } else {
        if (numberPosition$$2 == "above") {
          var v193 = outputWindow.document;
          JAM.call(v193.write, v193, [aboveNum$$1 + "\n"], JAM.policy.p22);
          var v195 = outputWindow.document;
          JAM.call(v195.write, v195, [lineOfText$$2 + "\n"], JAM.policy.p22);
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
  var v795 = sequence$$13.length <= firstIndexToMutate;
  if (!v795) {
    v795 = lastIndexToMutate < 0;
  }
  var v556 = v795;
  if (!v556) {
    v556 = lastIndexToMutate <= firstIndexToMutate;
  }
  if (v556) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v209 = i$$8 < numMut;
  for (;v209;) {
    maxNum = sequence$$13.length;
    randNum = JAM.call(Math.floor, Math, [Math.random() * maxNum], JAM.policy.p21);
    var v558 = randNum < firstIndexToMutate;
    if (!v558) {
      v558 = randNum > lastIndexToMutate;
    }
    if (v558) {
      numMut++;
      i$$8++;
      v209 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p21);
    needNewChar = true;
    for (;needNewChar;) {
      componentsIndex = JAM.call(Math.round, Math, [Math.random() * components$$1.length], JAM.policy.p21);
      if (componentsIndex == components$$1.length) {
        componentsIndex = 0;
      }
      if (components$$1[componentsIndex] != currentChar) {
        needNewChar = false;
      }
    }
    sequence$$13 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p19) + components$$1[componentsIndex] + JAM.call(sequence$$13.substring, sequence$$13, [randNum + 1, sequence$$13.length], JAM.policy.p33);
    i$$8++;
    v209 = i$$8 < numMut;
  }
  var v210 = outputWindow.document;
  JAM.call(v210.write, v210, [addReturns(sequence$$13)], JAM.policy.p22);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v216 = j$$9 < lengthOut$$1;
  for (;v216;) {
    tempNum$$1 = JAM.call(Math.floor, Math, [Math.random() * components$$2.length], JAM.policy.p21);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    if (sequence$$14.length == 60) {
      var v213 = outputWindow.document;
      JAM.call(v213.write, v213, [sequence$$14 + "\n"], JAM.policy.p22);
      sequence$$14 = "";
    }
    j$$9++;
    v216 = j$$9 < lengthOut$$1;
  }
  var v217 = outputWindow.document;
  JAM.call(v217.write, v217, [sequence$$14 + "\n"], JAM.policy.p22);
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
    sequence$$15 = JAM.call(sequence$$15.substring, sequence$$15, [sequence$$15.length - lookAhead, sequence$$15.length], JAM.policy.p33) + sequence$$15 + JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p19);
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v223 = outputWindow.document;
  JAM.call(v223.write, v223, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p17);
  var v224 = outputWindow.document;
  JAM.call(v224.write, v224, ['<tr><td class="title" width="200px">' + "Site:" + '</td><td class="title">' + "Positions:" + "</td></tr>\n"], JAM.policy.p22);
  var i$$9 = 0;
  var v241 = i$$9 < arrayOfItems.length;
  for (;v241;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v573 = arrayOfItems[i$$9];
    matchExp = JAM.call(v573.match, v573, [/\/.+\//], JAM.policy.p21) + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    var v985 = arrayOfItems[i$$9];
    var v574 = JAM.call(v985.match, v985, [/\)\D*\d+/], JAM.policy.p21).toString();
    cutDistance = parseFloat(JAM.call(v574.replace, v574, [/\)\D*/, ""], JAM.policy.p23));
    var v233 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p22);
    for (;v233;) {
      matchPosition = matchExp.lastIndex - cutDistance;
      var v575 = matchPosition >= lowerLimit;
      if (v575) {
        v575 = matchPosition < upperLimit;
      }
      if (v575) {
        timesFound++;
        tempString$$1 = tempString$$1 + ", " + (matchPosition - shiftValue + 1);
      }
      matchExp.lastIndex = matchExp.lastIndex - RegExp.lastMatch.length + 1;
      v233 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p22);
    }
    if (JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p21) != -1) {
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
    var v1142 = '<tr><td class="' + backGroundClass + '">';
    var v1187 = arrayOfItems[i$$9];
    var v1162 = JAM.call(v1187.match, v1187, [/\([^\(]+\)/], JAM.policy.p21).toString();
    JAM.call(v239.write, v239, [v1142 + JAM.call(v1162.replace, v1162, [/\(|\)/g, ""], JAM.policy.p23) + '</td><td class="' + backGroundClass + '">' + tempString$$1 + "</td></tr>\n"], JAM.policy.p22);
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
  JAM.call(v244.write, v244, ['<tr><td class="title">' + "Pattern:" + '</td><td class="title">' + "Times found:" + '</td><td class="title">' + "Percentage:" + "</td></tr>\n"], JAM.policy.p22);
  var i$$10 = 0;
  var v254 = i$$10 < arrayOfItems$$1.length;
  for (;v254;) {
    var tempNumber = 0;
    var v584 = arrayOfItems$$1[i$$10];
    var matchExp$$1 = JAM.call(v584.match, v584, [/\/[^\/]+\//], JAM.policy.p21) + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    if (JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p22) != -1) {
      tempNumber = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p22).length;
    }
    var percentage = 0;
    var v805 = originalLength + 1;
    var v1077 = arrayOfItems$$1[i$$10];
    if (v805 - parseFloat(JAM.call(v1077.match, v1077, [/\d+/], JAM.policy.p21)) > 0) {
      var v249 = 100 * tempNumber;
      var v587 = originalLength + 1;
      var v989 = arrayOfItems$$1[i$$10];
      percentage = v249 / (v587 - parseFloat(JAM.call(v989.match, v989, [/\d+/], JAM.policy.p21)));
    }
    var v252 = outputWindow.document;
    var v1188 = arrayOfItems$$1[i$$10];
    var v1163 = JAM.call(v1188.match, v1188, [/\([^\(]+\)\b/], JAM.policy.p21).toString();
    JAM.call(v252.write, v252, ["<tr><td>" + JAM.call(v1163.replace, v1163, [/\(|\)/g, ""], JAM.policy.p23) + "</td><td>" + tempNumber + "</td><td>" + JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p15) + "</td></tr>\n"], JAM.policy.p22);
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
    randNum$$1 = JAM.call(Math.floor, Math, [Math.random() * maxNum$$1], JAM.policy.p21);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p21);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p19);
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [randNum$$1 + 1, sequence$$17.length], JAM.policy.p23);
    sequence$$17 = tempString1 + tempString2;
    if (tempSeq.length == 60) {
      var v259 = outputWindow.document;
      JAM.call(v259.write, v259, [tempSeq + "\n"], JAM.policy.p22);
      tempSeq = "";
    }
    v262 = sequence$$17.length > 0;
  }
  var v263 = outputWindow.document;
  JAM.call(v263.write, v263, [tempSeq + "\n"], JAM.policy.p22);
  return true;
}
function fuzzySearchProtein() {
  var theDocument = document;
  var targetSequence = "";
  var targetTitle = "";
  var querySequence = "";
  var queryTitle = "";
  var maxTarget = 2E3;
  var maxQuery = 30;
  if (testScript() == false) {
    return;
  }
  var v991 = checkFormElement(theDocument.forms[0].elements[0]) == false;
  if (!v991) {
    v991 = checkSequenceLength(theDocument.forms[0].elements[0].value, maxTarget) == false;
  }
  var v810 = v991;
  if (!v810) {
    v810 = checkFormElement(theDocument.forms[0].elements[1]) == false;
  }
  var v596 = v810;
  if (!v596) {
    v596 = checkSequenceLength(theDocument.forms[0].elements[1].value, maxQuery) == false;
  }
  if (v596) {
    return;
  }
  var MATRIX = theDocument.forms[0].elements[5].options[theDocument.forms[0].elements[5].selectedIndex].value;
  var GAP_PENALTY = parseInt(theDocument.forms[0].elements[6].options[theDocument.forms[0].elements[6].selectedIndex].value);
  var HITS = parseInt(theDocument.forms[0].elements[7].options[theDocument.forms[0].elements[7].selectedIndex].value);
  openWindow();
  openPre();
  targetSequence = getSequenceFromFasta(theDocument.forms[0].elements[0].value);
  targetSequence = removeNonProtein(targetSequence);
  targetTitle = getTitleFromFasta(theDocument.forms[0].elements[0].value);
  querySequence = getSequenceFromFasta(theDocument.forms[0].elements[1].value);
  querySequence = removeNonProtein(querySequence);
  queryTitle = "query";
  var v273 = outputWindow.document;
  JAM.call(v273.write, v273, [getFuzzySearchTitle(targetTitle, targetSequence, queryTitle, querySequence)], JAM.policy.p22);
  if (JAM.call(targetSequence.search, targetSequence, [/./], JAM.policy.p21) != -1) {
    targetSequence = JAM.call(targetSequence.match, targetSequence, [/./g], JAM.policy.p21);
  }
  if (JAM.call(querySequence.search, querySequence, [/./], JAM.policy.p21) != -1) {
    querySequence = JAM.call(querySequence.match, querySequence, [/./g], JAM.policy.p21);
  }
  if (targetSequence.length == 0) {
    alert("The sequence contains no protein residues.");
    return;
  }
  if (querySequence.length == 0) {
    alert("The query sequence contains no protein residues.");
    return;
  }
  _fuzzySearchProtein(queryTitle, querySequence, targetTitle, targetSequence, MATRIX, GAP_PENALTY, HITS);
  closePre();
  closeWindow();
  return;
}
function _fuzzySearchProtein(queryTitle$$1, querySequence$$1, targetTitle$$1, targetSequence$$1, matrix, gapPenalty, hits) {
  var scoringMatrix;
  if (matrix == "pam30") {
    scoringMatrix = new Pam30;
  } else {
    if (matrix == "pam70") {
      scoringMatrix = new Pam70;
    } else {
      if (matrix == "blosum80") {
        scoringMatrix = new Blosum80;
      } else {
        if (matrix == "blosum62") {
          scoringMatrix = new Blosum62;
        } else {
          if (matrix == "blosum45") {
            scoringMatrix = new Blosum45;
          }
        }
      }
    }
  }
  var scoreSet = new ScoreSet;
  JAM.call(scoreSet.setScoreSetParam, scoreSet, [scoringMatrix, gapPenalty, hits], JAM.policy.p33);
  var fuzzySearch = new FuzzySearch;
  JAM.call(fuzzySearch.initializeMatrix, fuzzySearch, [querySequence$$1, targetSequence$$1, scoreSet], JAM.policy.p33);
  fuzzySearch.search();
  hits = fuzzySearch.getHits();
  if (hits.length > 0) {
    var i$$11 = 0;
    var v294 = i$$11 < hits.length;
    for (;v294;) {
      var v284 = outputWindow.document;
      JAM.call(v284.write, v284, [">" + queryTitle$$1 + " from " + hits[i$$11].startM + " to " + hits[i$$11].endM + "\n"], JAM.policy.p22);
      var v286 = outputWindow.document;
      JAM.call(v286.write, v286, [hits[i$$11].sequenceM + "\n"], JAM.policy.p22);
      var v288 = outputWindow.document;
      JAM.call(v288.write, v288, [">" + targetTitle$$1 + " from " + hits[i$$11].startN + " to " + hits[i$$11].endN + "\n"], JAM.policy.p22);
      var v290 = outputWindow.document;
      JAM.call(v290.write, v290, [hits[i$$11].sequenceN + "\n"], JAM.policy.p22);
      var v292 = outputWindow.document;
      JAM.call(v292.write, v292, ["Score: " + hits[i$$11].score + "\n\n"], JAM.policy.p22);
      i$$11++;
      v294 = i$$11 < hits.length;
    }
  } else {
    var v295 = outputWindow.document;
    JAM.call(v295.write, v295, ["No hits were obtained.\n\n"], JAM.policy.p17);
  }
  return;
}
function getScore(r1$$1, r2) {
  var v297 = this.scoringMatrix;
  return JAM.call(v297.scoringMatrix_getScore, v297, [r1$$1, r2], JAM.policy.p33);
}
function setScoreSetParam(scoringMatrix$$1, gapPenalty$$1, hits$$1) {
  this.scoringMatrix = scoringMatrix$$1;
  this.gap = gapPenalty$$1;
  this.hits = hits$$1;
  return;
}
function ScoreSet() {
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
  var v302 = matrix$$1[0];
  var cols = JAM.call(v302.split, v302, [/\s+/], JAM.policy.p21);
  var cells;
  var i$$12 = 1;
  var v307 = i$$12 < matrix$$1.length;
  for (;v307;) {
    var v303 = matrix$$1[i$$12];
    cells = JAM.call(v303.split, v303, [/\s+/], JAM.policy.p21);
    var j$$10 = 1;
    var v306 = j$$10 < cols.length + 1;
    for (;v306;) {
      var v304 = this.scoreHash;
      var v305 = cells[0].toLowerCase() + cols[j$$10 - 1].toLowerCase();
      var v1225 = parseInt(cells[j$$10]);
      introspect(JAM.policy.p6) {
        v304[v305] = v1225;
      }
      j$$10++;
      v306 = j$$10 < cols.length + 1;
    }
    i$$12++;
    v307 = i$$12 < matrix$$1.length;
  }
  return;
}
function ScoringMatrix() {
  this.scoreHash = {};
  return;
}
function Blosum62() {
  var matrix$$2 = new Array("A  R  N  D  C  Q  E  G  H  I  L  K  M  F  P  S  T  W  Y  V", "A  4 -1 -2 -2  0 -1 -1  0 -2 -1 -1 -1 -1 -2 -1  1  0 -3 -2  0", "R -1  5  0 -2 -3  1  0 -2  0 -3 -2  2 -1 -3 -2 -1 -1 -3 -2 -3", "N -2  0  6  1 -3  0  0  0  1 -3 -3  0 -2 -3 -2  1  0 -4 -2 -3", "D -2 -2  1  6 -3  0  2 -1 -1 -3 -4 -1 -3 -3 -1  0 -1 -4 -3 -3", "C  0 -3 -3 -3  9 -3 -4 -3 -3 -1 -1 -3 -1 -2 -3 -1 -1 -2 -2 -1", "Q -1  1  0  0 -3  5  2 -2  0 -3 -2  1  0 -3 -1  0 -1 -2 -1 -2", "E -1  0  0  2 -4  2  5 -2  0 -3 -3  1 -2 -3 -1  0 -1 -3 -2 -2", 
  "G  0 -2  0 -1 -3 -2 -2  6 -2 -4 -4 -2 -3 -3 -2  0 -2 -2 -3 -3", "H -2  0  1 -1 -3  0  0 -2  8 -3 -3 -1 -2 -1 -2 -1 -2 -2  2 -3", "I -1 -3 -3 -3 -1 -3 -3 -4 -3  4  2 -3  1  0 -3 -2 -1 -3 -1  3", "L -1 -2 -3 -4 -1 -2 -3 -4 -3  2  4 -2  2  0 -3 -2 -1 -2 -1  1", "K -1  2  0 -1 -3  1  1 -2 -1 -3 -2  5 -1 -3 -1  0 -1 -3 -2 -2", "M -1 -1 -2 -3 -1  0 -2 -3 -2  1  2 -1  5  0 -2 -1 -1 -1 -1  1", "F -2 -3 -3 -3 -2 -3 -3 -3 -1  0  0 -3  0  6 -4 -2 -2  1  3 -1", "P -1 -2 -2 -1 -3 -1 -1 -2 -2 -3 -3 -1 -2 -4  7 -1 -1 -4 -3 -2", 
  "S  1 -1  1  0 -1  0  0  0 -1 -2 -2  0 -1 -2 -1  4  1 -3 -2 -2", "T  0 -1  0 -1 -1 -1 -1 -2 -2 -1 -1 -1 -1 -2 -1  1  5 -2 -2  0", "W -3 -3 -4 -4 -2 -2 -3 -2 -2 -3 -2 -3 -1  1 -4 -3 -2 11  2 -3", "Y -2 -2 -2 -3 -2 -1 -2 -3  2 -1 -1 -2 -1  3 -3 -2 -2  2  7 -1", "V  0 -3 -3 -3 -1 -2 -2 -3 -3  3  1 -2  1 -1 -2 -2  0 -3 -1  4");
  JAM.call(this.scoringMatrix_fillHash, this, [matrix$$2], JAM.policy.p22);
  return;
}
function Blosum45() {
  var matrix$$3 = new Array("A  R  N  D  C  Q  E  G  H  I  L  K  M  F  P  S  T  W  Y  V", "A  5 -2 -1 -2 -1 -1 -1  0 -2 -1 -1 -1 -1 -2 -1  1  0 -2 -2  0", "R -2  7  0 -1 -3  1  0 -2  0 -3 -2  3 -1 -2 -2 -1 -1 -2 -1 -2", "N -1  0  6  2 -2  0  0  0  1 -2 -3  0 -2 -2 -2  1  0 -4 -2 -3", "D -2 -1  2  7 -3  0  2 -1  0 -4 -3  0 -3 -4 -1  0 -1 -4 -2 -3", "C -1 -3 -2 -3 12 -3 -3 -3 -3 -3 -2 -3 -2 -2 -4 -1 -1 -5 -3 -1", "Q -1  1  0  0 -3  6  2 -2  1 -2 -2  1  0 -4 -1  0 -1 -2 -1 -3", "E -1  0  0  2 -3  2  6 -2  0 -3 -2  1 -2 -3  0  0 -1 -3 -2 -3", 
  "G  0 -2  0 -1 -3 -2 -2  7 -2 -4 -3 -2 -2 -3 -2  0 -2 -2 -3 -3", "H -2  0  1  0 -3  1  0 -2 10 -3 -2 -1  0 -2 -2 -1 -2 -3  2 -3", "I -1 -3 -2 -4 -3 -2 -3 -4 -3  5  2 -3  2  0 -2 -2 -1 -2  0  3", "L -1 -2 -3 -3 -2 -2 -2 -3 -2  2  5 -3  2  1 -3 -3 -1 -2  0  1", "K -1  3  0  0 -3  1  1 -2 -1 -3 -3  5 -1 -3 -1 -1 -1 -2 -1 -2", "M -1 -1 -2 -3 -2  0 -2 -2  0  2  2 -1  6  0 -2 -2 -1 -2  0  1", "F -2 -2 -2 -4 -2 -4 -3 -3 -2  0  1 -3  0  8 -3 -2 -1  1  3  0", "P -1 -2 -2 -1 -4 -1  0 -2 -2 -2 -3 -1 -2 -3  9 -1 -1 -3 -3 -3", 
  "S  1 -1  1  0 -1  0  0  0 -1 -2 -3 -1 -2 -2 -1  4  2 -4 -2 -1", "T  0 -1  0 -1 -1 -1 -1 -2 -2 -1 -1 -1 -1 -1 -1  2  5 -3 -1  0", "W -2 -2 -4 -4 -5 -2 -3 -2 -3 -2 -2 -2 -2  1 -3 -4 -3 15  3 -3", "Y -2 -1 -2 -2 -3 -1 -2 -3  2  0  0 -1  0  3 -3 -2 -1  3  8 -1", "V  0 -2 -3 -3 -1 -3 -3 -3 -3  3  1 -2  1  0 -3 -1  0 -3 -1  5");
  JAM.call(this.scoringMatrix_fillHash, this, [matrix$$3], JAM.policy.p22);
  return;
}
function Blosum80() {
  var matrix$$4 = new Array("A  R  N  D  C  Q  E  G  H  I  L  K  M  F  P  S  T  W  Y  V", "A  5 -2 -2 -2 -1 -1 -1  0 -2 -2 -2 -1 -1 -3 -1  1  0 -3 -2  0", "R -2  6 -1 -2 -4  1 -1 -3  0 -3 -3  2 -2 -4 -2 -1 -1 -4 -3 -3", "N -2 -1  6  1 -3  0 -1 -1  0 -4 -4  0 -3 -4 -3  0  0 -4 -3 -4", "D -2 -2  1  6 -4 -1  1 -2 -2 -4 -5 -1 -4 -4 -2 -1 -1 -6 -4 -4", "C -1 -4 -3 -4  9 -4 -5 -4 -4 -2 -2 -4 -2 -3 -4 -2 -1 -3 -3 -1", "Q -1  1  0 -1 -4  6  2 -2  1 -3 -3  1  0 -4 -2  0 -1 -3 -2 -3", "E -1 -1 -1  1 -5  2  6 -3  0 -4 -4  1 -2 -4 -2  0 -1 -4 -3 -3", 
  "G  0 -3 -1 -2 -4 -2 -3  6 -3 -5 -4 -2 -4 -4 -3 -1 -2 -4 -4 -4", "H -2  0  0 -2 -4  1  0 -3  8 -4 -3 -1 -2 -2 -3 -1 -2 -3  2 -4", "I -2 -3 -4 -4 -2 -3 -4 -5 -4  5  1 -3  1 -1 -4 -3 -1 -3 -2  3", "L -2 -3 -4 -5 -2 -3 -4 -4 -3  1  4 -3  2  0 -3 -3 -2 -2 -2  1", "K -1  2  0 -1 -4  1  1 -2 -1 -3 -3  5 -2 -4 -1 -1 -1 -4 -3 -3", "M -1 -2 -3 -4 -2  0 -2 -4 -2  1  2 -2  6  0 -3 -2 -1 -2 -2  1", "F -3 -4 -4 -4 -3 -4 -4 -4 -2 -1  0 -4  0  6 -4 -3 -2  0  3 -1", "P -1 -2 -3 -2 -4 -2 -2 -3 -3 -4 -3 -1 -3 -4  8 -1 -2 -5 -4 -3", 
  "S  1 -1  0 -1 -2  0  0 -1 -1 -3 -3 -1 -2 -3 -1  5  1 -4 -2 -2", "T  0 -1  0 -1 -1 -1 -1 -2 -2 -1 -2 -1 -1 -2 -2  1  5 -4 -2  0", "W -3 -4 -4 -6 -3 -3 -4 -4 -3 -3 -2 -4 -2  0 -5 -4 -4 11  2 -3", "Y -2 -3 -3 -4 -3 -2 -3 -4  2 -2 -2 -3 -2  3 -4 -2 -2  2  7 -2", "V  0 -3 -4 -4 -1 -3 -3 -4 -4  3  1 -3  1 -1 -3 -2  0 -3 -2  4");
  JAM.call(this.scoringMatrix_fillHash, this, [matrix$$4], JAM.policy.p22);
  return;
}
function Pam70() {
  var matrix$$5 = new Array("A   R   N   D   C   Q   E   G   H   I   L   K   M   F   P   S   T   W   Y   V", "A   5  -4  -2  -1  -4  -2  -1   0  -4  -2  -4  -4  -3  -6   0   1   1  -9  -5  -1", "R  -4   8  -3  -6  -5   0  -5  -6   0  -3  -6   2  -2  -7  -2  -1  -4   0  -7  -5", "N  -2  -3   6   3  -7  -1   0  -1   1  -3  -5   0  -5  -6  -3   1   0  -6  -3  -5", "D  -1  -6   3   6  -9   0   3  -1  -1  -5  -8  -2  -7 -10  -4  -1  -2 -10  -7  -5", "C  -4  -5  -7  -9   9  -9  -9  -6  -5  -4 -10  -9  -9  -8  -5  -1  -5 -11  -2  -4", 
  "Q  -2   0  -1   0  -9   7   2  -4   2  -5  -3  -1  -2  -9  -1  -3  -3  -8  -8  -4", "E  -1  -5   0   3  -9   2   6  -2  -2  -4  -6  -2  -4  -9  -3  -2  -3 -11  -6  -4", "G   0  -6  -1  -1  -6  -4  -2   6  -6  -6  -7  -5  -6  -7  -3   0  -3 -10  -9  -3", "H  -4   0   1  -1  -5   2  -2  -6   8  -6  -4  -3  -6  -4  -2  -3  -4  -5  -1  -4", "I  -2  -3  -3  -5  -4  -5  -4  -6  -6   7   1  -4   1   0  -5  -4  -1  -9  -4   3", "L  -4  -6  -5  -8 -10  -3  -6  -7  -4   1   6  -5   2  -1  -5  -6  -4  -4  -4   0", 
  "K  -4   2   0  -2  -9  -1  -2  -5  -3  -4  -5   6   0  -9  -4  -2  -1  -7  -7  -6", "M  -3  -2  -5  -7  -9  -2  -4  -6  -6   1   2   0  10  -2  -5  -3  -2  -8  -7   0", "F  -6  -7  -6 -10  -8  -9  -9  -7  -4   0  -1  -9  -2   8  -7  -4  -6  -2   4  -5", "P   0  -2  -3  -4  -5  -1  -3  -3  -2  -5  -5  -4  -5  -7   7   0  -2  -9  -9  -3", "S   1  -1   1  -1  -1  -3  -2   0  -3  -4  -6  -2  -3  -4   0   5   2  -3  -5  -3", "T   1  -4   0  -2  -5  -3  -3  -3  -4  -1  -4  -1  -2  -6  -2   2   6  -8  -4  -1", 
  "W  -9   0  -6 -10 -11  -8 -11 -10  -5  -9  -4  -7  -8  -2  -9  -3  -8  13  -3 -10", "Y  -5  -7  -3  -7  -2  -8  -6  -9  -1  -4  -4  -7  -7   4  -9  -5  -4  -3   9  -5", "V  -1  -5  -5  -5  -4  -4  -4  -3  -4   3   0  -6   0  -5  -3  -3  -1 -10  -5   6");
  JAM.call(this.scoringMatrix_fillHash, this, [matrix$$5], JAM.policy.p22);
  return;
}
function Pam30() {
  var matrix$$6 = new Array("A   R   N   D   C   Q   E   G   H   I   L   K   M   F   P   S   T   W   Y   V", "A   6  -7  -4  -3  -6  -4  -2  -2  -7  -5  -6  -7  -5  -8  -2   0  -1 -13  -8  -2", "R  -7   8  -6 -10  -8  -2  -9  -9  -2  -5  -8   0  -4  -9  -4  -3  -6  -2 -10  -8", "N  -4  -6   8   2 -11  -3  -2  -3   0  -5  -7  -1  -9  -9  -6   0  -2  -8  -4  -8", "D  -3 -10   2   8 -14  -2   2  -3  -4  -7 -12  -4 -11 -15  -8  -4  -5 -15 -11  -8", "C  -6  -8 -11 -14  10 -14 -14  -9  -7  -6 -15 -14 -13 -13  -8  -3  -8 -15  -4  -6", 
  "Q  -4  -2  -3  -2 -14   8   1  -7   1  -8  -5  -3  -4 -13  -3  -5  -5 -13 -12  -7", "E  -2  -9  -2   2 -14   1   8  -4  -5  -5  -9  -4  -7 -14  -5  -4  -6 -17  -8  -6", "G  -2  -9  -3  -3  -9  -7  -4   6  -9 -11 -10  -7  -8  -9  -6  -2  -6 -15 -14  -5", "H  -7  -2   0  -4  -7   1  -5  -9   9  -9  -6  -6 -10  -6  -4  -6  -7  -7  -3  -6", "I  -5  -5  -5  -7  -6  -8  -5 -11  -9   8  -1  -6  -1  -2  -8  -7  -2 -14  -6   2", "L  -6  -8  -7 -12 -15  -5  -9 -10  -6  -1   7  -8   1  -3  -7  -8  -7  -6  -7  -2", 
  "K  -7   0  -1  -4 -14  -3  -4  -7  -6  -6  -8   7  -2 -14  -6  -4  -3 -12  -9  -9", "M  -5  -4  -9 -11 -13  -4  -7  -8 -10  -1   1  -2  11  -4  -8  -5  -4 -13 -11  -1", "F  -8  -9  -9 -15 -13 -13 -14  -9  -6  -2  -3 -14  -4   9 -10  -6  -9  -4   2  -8", "P  -2  -4  -6  -8  -8  -3  -5  -6  -4  -8  -7  -6  -8 -10   8  -2  -4 -14 -13  -6", "S   0  -3   0  -4  -3  -5  -4  -2  -6  -7  -8  -4  -5  -6  -2   6   0  -5  -7  -6", "T  -1  -6  -2  -5  -8  -5  -6  -6  -7  -2  -7  -3  -4  -9  -4   0   7 -13  -6  -3", 
  "W -13  -2  -8 -15 -15 -13 -17 -15  -7 -14  -6 -12 -13  -4 -14  -5 -13  13  -5 -15", "Y  -8 -10  -4 -11  -4 -12  -8 -14  -3  -6  -7  -9 -11   2 -13  -7  -6  -5  10  -7", "V  -2  -8  -8  -8  -6  -7  -6  -5  -6   2  -2  -9  -1  -8  -6  -6  -3 -15  -7   7");
  JAM.call(this.scoringMatrix_fillHash, this, [matrix$$6], JAM.policy.p22);
  return;
}
function Node() {
  this.alreadyMatched = false;
  return;
}
function initializeMatrix(sequenceOne$$2, sequenceTwo$$2, scoreSet$$1) {
  this.scoreSet = scoreSet$$1;
  this.M = sequenceOne$$2;
  this.N = sequenceTwo$$2;
  this.score = 0;
  var v1226 = new Array(this.M.length + 1);
  this.nodes = v1226;
  var i$$13 = 0;
  var v312 = i$$13 < this.nodes.length;
  for (;v312;) {
    var v309 = this.nodes;
    var v1227 = new Array(this.N.length + 1);
    v309[i$$13] = v1227;
    var j$$11 = 0;
    var v311 = j$$11 < this.nodes[i$$13].length;
    for (;v311;) {
      var v310 = this.nodes[i$$13];
      var v1228 = new Node;
      v310[j$$11] = v1228;
      j$$11++;
      v311 = j$$11 < this.nodes[i$$13].length;
    }
    i$$13++;
    v312 = i$$13 < this.nodes.length;
  }
  this.nodes[0][0].value = 0;
  i$$13 = 1;
  var v317 = i$$13 < this.nodes.length;
  for (;v317;) {
    this.nodes[i$$13][0].value = this.nodes[i$$13 - 1][0].value;
    this.nodes[i$$13][0].tracebackI = i$$13 - 1;
    this.nodes[i$$13][0].tracebackJ = 0;
    i$$13++;
    v317 = i$$13 < this.nodes.length;
  }
  j$$11 = 1;
  var v321 = j$$11 < this.nodes[0].length;
  for (;v321;) {
    this.nodes[0][j$$11].value = this.nodes[0][j$$11 - 1].value;
    this.nodes[0][j$$11].tracebackI = 0;
    this.nodes[0][j$$11].tracebackJ = j$$11 - 1;
    j$$11++;
    v321 = j$$11 < this.nodes[0].length;
  }
  return;
}
function dumpMatrix() {
  var v322 = outputWindow.document;
  JAM.call(v322.write, v322, ["Dynamic programming matrix i=" + this.nodes.length + " and j=" + this.nodes[0].length], JAM.policy.p22);
  var v324 = outputWindow.document;
  JAM.call(v324.write, v324, ["\n"], JAM.policy.p17);
  var i$$14 = 0;
  var v335 = i$$14 < this.nodes.length;
  for (;v335;) {
    var j$$12 = 0;
    var v333 = j$$12 < this.nodes[i$$14].length;
    for (;v333;) {
      var traceI = this.nodes[i$$14][j$$12].tracebackI;
      var traceJ = this.nodes[i$$14][j$$12].tracebackJ;
      if (traceI == undefined) {
        traceI = "u";
      }
      if (traceJ == undefined) {
        traceJ = "u";
      }
      var output = "(" + i$$14 + "," + j$$12 + ")[" + traceI + "," + traceJ + "]=" + this.nodes[i$$14][j$$12].value;
      var v331 = outputWindow.document;
      JAM.call(v331.write, v331, [rightNum(output, "", 20, " ")], JAM.policy.p22);
      j$$12++;
      v333 = j$$12 < this.nodes[i$$14].length;
    }
    var v334 = outputWindow.document;
    JAM.call(v334.write, v334, ["\n"], JAM.policy.p17);
    i$$14++;
    v335 = i$$14 < this.nodes.length;
  }
  var v336 = outputWindow.document;
  JAM.call(v336.write, v336, ["\n"], JAM.policy.p17);
  return;
}
function updateMatrix() {
  var i$$15 = 1;
  var v377 = i$$15 < this.nodes.length;
  for (;v377;) {
    var j$$13 = 1;
    var v376 = j$$13 < this.nodes[0].length;
    for (;v376;) {
      var a;
      var b;
      var c;
      if (this.nodes[i$$15][j$$13].alreadyMatched) {
        a = 0;
        b = 0;
        c = 0;
      } else {
        var v658 = i$$15 == this.nodes.length - 1;
        if (v658) {
          v658 = j$$13 == this.nodes[0].length - 1;
        }
        if (v658) {
          a = this.nodes[i$$15 - 1][j$$13].value;
          b = this.nodes[i$$15][j$$13 - 1].value;
          var v339 = this.nodes[i$$15 - 1][j$$13 - 1].value;
          var v663 = this.scoreSet;
          c = v339 + JAM.call(v663.getScore, v663, [this.M[i$$15 - 1], this.N[j$$13 - 1]], JAM.policy.p33);
        } else {
          if (i$$15 == this.nodes.length - 1) {
            a = this.nodes[i$$15 - 1][j$$13].value - this.scoreSet.gap;
            b = this.nodes[i$$15][j$$13 - 1].value;
            var v344 = this.nodes[i$$15 - 1][j$$13 - 1].value;
            var v672 = this.scoreSet;
            c = v344 + JAM.call(v672.getScore, v672, [this.M[i$$15 - 1], this.N[j$$13 - 1]], JAM.policy.p33);
          } else {
            if (j$$13 == this.nodes[0].length - 1) {
              a = this.nodes[i$$15 - 1][j$$13].value;
              b = this.nodes[i$$15][j$$13 - 1].value - this.scoreSet.gap;
              var v349 = this.nodes[i$$15 - 1][j$$13 - 1].value;
              var v680 = this.scoreSet;
              c = v349 + JAM.call(v680.getScore, v680, [this.M[i$$15 - 1], this.N[j$$13 - 1]], JAM.policy.p33);
            } else {
              a = this.nodes[i$$15 - 1][j$$13].value - this.scoreSet.gap;
              b = this.nodes[i$$15][j$$13 - 1].value - this.scoreSet.gap;
              var v355 = this.nodes[i$$15 - 1][j$$13 - 1].value;
              var v688 = this.scoreSet;
              c = v355 + JAM.call(v688.getScore, v688, [this.M[i$$15 - 1], this.N[j$$13 - 1]], JAM.policy.p33);
            }
          }
        }
      }
      var v691 = a > b;
      if (v691) {
        v691 = a > c;
      }
      if (v691) {
        this.nodes[i$$15][j$$13].value = a;
        this.nodes[i$$15][j$$13].tracebackI = i$$15 - 1;
        this.nodes[i$$15][j$$13].tracebackJ = j$$13;
      } else {
        var v695 = b > c;
        if (v695) {
          v695 = b > a;
        }
        if (v695) {
          this.nodes[i$$15][j$$13].value = b;
          this.nodes[i$$15][j$$13].tracebackI = i$$15;
          this.nodes[i$$15][j$$13].tracebackJ = j$$13 - 1;
        } else {
          this.nodes[i$$15][j$$13].value = c;
          this.nodes[i$$15][j$$13].tracebackI = i$$15 - 1;
          this.nodes[i$$15][j$$13].tracebackJ = j$$13 - 1;
        }
      }
      if (this.nodes[i$$15][j$$13].value < 0) {
        this.nodes[i$$15][j$$13].value = 0;
        this.nodes[i$$15][j$$13].tracebackI = undefined;
        this.nodes[i$$15][j$$13].tracebackJ = undefined;
      }
      j$$13++;
      v376 = j$$13 < this.nodes[0].length;
    }
    i$$15++;
    v377 = i$$15 < this.nodes.length;
  }
  this.score = this.nodes[this.nodes.length - 1][this.nodes[0].length - 1].value;
  return;
}
function search() {
  var v1229 = new Array;
  this.hits = v1229;
  var hitCount = 0;
  var v402 = hitCount < this.scoreSet.hits;
  for (;v402;) {
    this.updateMatrix();
    var maxNodeValue = 0;
    var maxNodeI = undefined;
    var maxNodeJ = undefined;
    var i$$16 = 1;
    var v382 = i$$16 < this.nodes.length;
    for (;v382;) {
      var j$$14 = 1;
      var v381 = j$$14 < this.nodes[0].length;
      for (;v381;) {
        if (this.nodes[i$$16][j$$14].value > maxNodeValue) {
          maxNodeValue = this.nodes[i$$16][j$$14].value;
          maxNodeI = i$$16;
          maxNodeJ = j$$14;
        }
        j$$14++;
        v381 = j$$14 < this.nodes[0].length;
      }
      i$$16++;
      v382 = i$$16 < this.nodes.length;
    }
    if (maxNodeValue == 0) {
      break;
    }
    var currentI = maxNodeI;
    var currentJ = maxNodeJ;
    var currentNode = this.nodes[maxNodeI][maxNodeJ];
    var alignedM = new Array;
    var alignedN = new Array;
    var score = currentNode.value;
    var endM = undefined;
    var endN = undefined;
    var v718 = currentNode.tracebackI != undefined;
    if (v718) {
      v718 = currentNode.tracebackJ != undefined;
    }
    var v399 = v718;
    for (;v399;) {
      var v719 = currentI == 0;
      if (!v719) {
        v719 = currentJ == 0;
      }
      if (v719) {
        break;
      }
      var v720 = currentNode.tracebackI == currentI - 1;
      if (v720) {
        v720 = currentNode.tracebackJ == currentJ - 1;
      }
      if (v720) {
        if (endM == undefined) {
          endM = currentI;
          endN = currentJ;
        }
        JAM.call(alignedM.push, alignedM, [this.M[currentI - 1]], JAM.policy.p22);
        JAM.call(alignedN.push, alignedN, [this.N[currentJ - 1]], JAM.policy.p22);
      } else {
        if (currentNode.tracebackJ == currentJ - 1) {
          if (endM != undefined) {
            JAM.call(alignedM.push, alignedM, ["-"], JAM.policy.p17);
            JAM.call(alignedN.push, alignedN, [this.N[currentJ - 1]], JAM.policy.p22);
          }
        } else {
          if (endM != undefined) {
            JAM.call(alignedM.push, alignedM, [this.M[currentI - 1]], JAM.policy.p22);
            JAM.call(alignedN.push, alignedN, ["-"], JAM.policy.p17);
          }
        }
      }
      this.nodes[currentI][currentJ].value = 0;
      this.nodes[currentI][currentJ].alreadyMatched = true;
      currentI = currentNode.tracebackI;
      currentJ = currentNode.tracebackJ;
      currentNode = this.nodes[currentNode.tracebackI][currentNode.tracebackJ];
      var v735 = currentNode.tracebackI != undefined;
      if (v735) {
        v735 = currentNode.tracebackJ != undefined;
      }
      v399 = v735;
    }
    alignedM = alignedM.reverse();
    alignedN = alignedN.reverse();
    var v400 = this.hits;
    JAM.call(v400.push, v400, [new Hit(JAM.call(alignedM.join, alignedM, [""], JAM.policy.p17), JAM.call(alignedN.join, alignedN, [""], JAM.policy.p17), score, currentI + 1, endM, currentJ + 1, endN)], JAM.policy.p22);
    hitCount++;
    v402 = hitCount < this.scoreSet.hits;
  }
  return;
}
function getHits() {
  return this.hits;
}
function FuzzySearch() {
  return;
}
function Hit(sequenceM, sequenceN, score$$1, startM, endM$$1, startN, endN$$1) {
  this.sequenceM = sequenceM;
  this.sequenceN = sequenceN;
  this.score = score$$1;
  this.startM = startM;
  this.endM = endM$$1;
  this.startN = startN;
  this.endN = endN$$1;
  return;
}
new ScoreSet;
ScoreSet.prototype.getScore = getScore;
ScoreSet.prototype.setScoreSetParam = setScoreSetParam;
new ScoringMatrix;
ScoringMatrix.prototype.scoringMatrix_getScore = scoringMatrix_getScore;
ScoringMatrix.prototype.scoringMatrix_fillHash = scoringMatrix_fillHash;
var v407 = Blosum62;
var v1230 = new ScoringMatrix;
v407.prototype = v1230;
var v408 = Blosum45;
var v1231 = new ScoringMatrix;
v408.prototype = v1231;
var v409 = Blosum80;
var v1232 = new ScoringMatrix;
v409.prototype = v1232;
var v410 = Pam30;
var v1233 = new ScoringMatrix;
v410.prototype = v1233;
new FuzzySearch;
FuzzySearch.prototype.initializeMatrix = initializeMatrix;
FuzzySearch.prototype.updateMatrix = updateMatrix;
FuzzySearch.prototype.search = search;
FuzzySearch.prototype.getHits = getHits;
FuzzySearch.prototype.dumpMatrix = dumpMatrix;
JAM.set(document, "onload", v2);
JAM.set(JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p17), "onclick", v3);
JAM.set(JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p17), "onclick", v4)
