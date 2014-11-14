
JAM.startProfile('load');
function v7() {
  document.forms[0].elements[0].value = " ";
  document.forms[0].elements[4].value = " ";
  return;
}
function v6() {
  try {
    revTrans(document);
  } catch (e$$6) {
    alert("The following error was encountered: " + e$$6);
  }
  return;
}
function v5() {
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
  var v15 = i$$1 < arrayOfTitles.length;
  for (;v15;) {
    var v940 = arrayOfTitles[i$$1];
    var v699 = JAM.call(v940.search, v940, [/\S/], JAM.policy.p16) == -1;
    if (!v699) {
      var v941 = arrayOfSequences[i$$1];
      v699 = JAM.call(v941.search, v941, [/\S/], JAM.policy.p16) == -1;
    }
    var v428 = v699;
    if (!v428) {
      v428 = arrayOfSequences[i$$1].length != lengthOfAlign;
    }
    if (v428) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    v15 = i$$1 < arrayOfTitles.length;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v942 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p16) == -1;
  if (!v942) {
    v942 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p16) == -1;
  }
  var v852 = v942;
  if (!v852) {
    v852 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p16) == -1;
  }
  var v702 = v852;
  if (!v702) {
    v702 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p16) == -1;
  }
  var v430 = v702;
  if (!v430) {
    v430 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p16) == -1;
  }
  if (v430) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v705 = formElement.value;
  if (JAM.call(v705.search, v705, [/\S/], JAM.policy.p16) == -1) {
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
    var v706 = arrayOfPatterns[z$$2];
    if (JAM.call(v706.search, v706, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p16) == -1) {
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
    var v708 = arrayOfPatterns[j];
    var v23 = JAM.call(v708.match, v708, [/\/.+\//], JAM.policy.p16) + "gi";
    if (JAM.isEval(eval)) {
      var v1114 = eval("introspect(JAM.policy.pFull) { " + v23 + " }")
    } else {
      var v1114 = JAM.call(eval, null, [v23])
    }
    geneticCodeMatchExp[j] = v1114;
    var v438 = arrayOfPatterns[j];
    var v1115 = JAM.call(v438.match, v438, [/=[a-zA-Z\*]/], JAM.policy.p16).toString();
    geneticCodeMatchResult[j] = v1115;
    var v25 = geneticCodeMatchResult[j];
    var v1116 = JAM.call(v25.replace, v25, [/=/g, ""], JAM.policy.p15);
    geneticCodeMatchResult[j] = v1116;
    j++;
    v26 = j < arrayOfPatterns.length;
  }
  var i$$2 = 0;
  var v33 = i$$2 <= testSequence.length - 3;
  for (;v33;) {
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, i$$2 + 3], JAM.policy.p15);
    j = 0;
    var v31 = j < geneticCodeMatchExp.length;
    for (;v31;) {
      if (JAM.call(codon.search, codon, [geneticCodeMatchExp[j]], JAM.policy.p17) != -1) {
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
    var v712 = arrayOfPatterns$$1[z$$3];
    if (JAM.call(v712.search, v712, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p16) != -1) {
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
      var v714 = arrayOfPatterns$$1[j$$1];
      if (JAM.call(v714.search, v714, [re], JAM.policy.p17) != -1) {
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
    var v715 = arrayOfPatterns$$2[z$$4];
    if (JAM.call(v715.search, v715, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p16) == -1) {
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
  var v855 = getSequenceFromFasta(text$$7);
  if (JAM.call(v855.replace, v855, [/[^A-Za-z]/g, ""], JAM.policy.p15).length > maxInput) {
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
  var v47 = outputWindow.document;
  JAM.call(v47.write, v47, ["</form>"], JAM.policy.p11);
  return true;
}
function closePre() {
  var v48 = outputWindow.document;
  JAM.call(v48.write, v48, ["</div>"], JAM.policy.p11);
  var v49 = outputWindow.document;
  JAM.call(v49.write, v49, ["</pre>\n"], JAM.policy.p11);
  return;
}
function closeTextArea() {
  var v50 = outputWindow.document;
  JAM.call(v50.write, v50, ["</textarea>"], JAM.policy.p11);
  return true;
}
function closeWindow() {
  var v51 = outputWindow.document;
  JAM.call(v51.write, v51, ["</body>\n</html>\n"], JAM.policy.p11);
  outputWindow.status = "Done.";
  outputWindow.document.close();
  return true;
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
  var v55 = i$$4 < alignArray.length;
  for (;v55;) {
    var v718 = alignArray[i$$4];
    if (JAM.call(v718.search, v718, [/[^\s]+\s/], JAM.policy.p16) == -1) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    v55 = i$$4 < alignArray.length;
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
    var v57 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p17);
    for (;v57;) {
      JAM.call(arrayOfFasta.push, arrayOfFasta, [matchArray[0]], JAM.policy.p17);
      v57 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p17);
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
  return'<div class="info">' + stringToReturn$$1 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var geneticCodeMatchExp$$1 = new Array(arrayOfPatterns$$3.length);
  var j$$2 = 0;
  var v74 = j$$2 < arrayOfPatterns$$3.length;
  for (;v74;) {
    var v719 = arrayOfPatterns$$3[j$$2];
    var v73 = JAM.call(v719.match, v719, [/\/.+\//], JAM.policy.p16) + "gi";
    if (JAM.isEval(eval)) {
      var v1117 = eval("introspect(JAM.policy.pFull) { " + v73 + " }")
    } else {
      var v1117 = JAM.call(eval, null, [v73])
    }
    geneticCodeMatchExp$$1[j$$2] = v1117;
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
    var v488 = arrayOfPatterns$$4[j$$3];
    var v1118 = JAM.call(v488.match, v488, [/=[a-zA-Z\*]/], JAM.policy.p16).toString();
    geneticCodeMatchResult$$1[j$$3] = v1118;
    var v77 = geneticCodeMatchResult$$1[j$$3];
    var v1119 = JAM.call(v77.replace, v77, [/=/g, ""], JAM.policy.p15);
    geneticCodeMatchResult$$1[j$$3] = v1119;
    j$$3++;
    v78 = j$$3 < arrayOfPatterns$$4.length;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var stringToReturn$$2 = "Results for " + sequence$$3.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p16) != -1) {
    stringToReturn$$2 = stringToReturn$$2 + '"' + fastaSequenceTitle$$1 + '"';
  }
  stringToReturn$$2 = stringToReturn$$2 + ' starting "' + JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p13) + '"';
  return'<div class="info">' + stringToReturn$$2 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var stringToReturn$$3 = "Results for " + topology + " " + sequence$$4.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p16) != -1) {
    stringToReturn$$3 = stringToReturn$$3 + '"' + fastaSequenceTitle$$2 + '"';
  }
  stringToReturn$$3 = stringToReturn$$3 + ' starting "' + JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p13) + '"';
  return'<div class="info">' + stringToReturn$$3 + "</div>\n";
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
  return'<div class="info">' + stringToReturn$$4 + "</div>\n";
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v99 = j$$4 < lengthOut;
  for (;v99;) {
    tempNum = JAM.call(Math.floor, Math, [Math.random() * components.length], JAM.policy.p16);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p17);
    j$$4++;
    v99 = j$$4 < lengthOut;
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
  var v1072 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p16) != -1;
  if (!v1072) {
    v1072 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p16) != -1;
  }
  var v1061 = v1072;
  if (!v1061) {
    v1061 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p16) != -1;
  }
  var v1048 = v1061;
  if (!v1048) {
    v1048 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p16) != -1;
  }
  var v1032 = v1048;
  if (!v1032) {
    v1032 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p16) != -1;
  }
  var v1016 = v1032;
  if (!v1016) {
    v1016 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p16) != -1;
  }
  var v999 = v1016;
  if (!v999) {
    v999 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p16) != -1;
  }
  var v945 = v999;
  if (!v945) {
    v945 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p16) != -1;
  }
  var v856 = v945;
  if (!v856) {
    v856 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p16) != -1;
  }
  var v721 = v856;
  if (!v721) {
    v721 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p16) != -1;
  }
  var v516 = v721;
  if (!v516) {
    v516 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p16) != -1;
  }
  if (v516) {
    return false;
  }
  return true;
}
function openForm() {
  var v104 = outputWindow.document;
  JAM.call(v104.write, v104, ['<form action="">\n'], JAM.policy.p11);
  return true;
}
function openPre() {
  var v105 = outputWindow.document;
  JAM.call(v105.write, v105, ["<pre>"], JAM.policy.p11);
  var v106 = outputWindow.document;
  JAM.call(v106.write, v106, ['<div class="pre">'], JAM.policy.p11);
  return;
}
function openTextArea() {
  var v107 = outputWindow.document;
  JAM.call(v107.write, v107, ['<br /><textarea rows="6" cols="61">\n'], JAM.policy.p11);
  return true;
}
function openWindow(title$$6) {
  _openWindow(title$$6, true);
  return;
}
function _openWindow(title$$7, isColor) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  outputWindow.focus();
  var v108 = outputWindow.document;
  JAM.call(v108.write, v108, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n'], JAM.policy.p17);
  if (isColor) {
    var v110 = outputWindow.document;
    JAM.call(v110.write, v110, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; background-color: #66FF00}\n" + 
    "span.two, td.two {color: #000000; background-color: #FFFF66}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n" + "td.many {color: #000000}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + 
    "</style>\n"], JAM.policy.p17);
  } else {
    var v112 = outputWindow.document;
    JAM.call(v112.write, v112, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n" + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "td.many {color: #000000; background-color: #FFFFFF}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"], JAM.policy.p17);
  }
  var v114 = outputWindow.document;
  JAM.call(v114.write, v114, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$7 + " results</div>\n"], JAM.policy.p17);
  outputWindow.status = "Please Wait.";
  return true;
}
function openWindowAlign(title$$8) {
  _openWindowAlign(title$$8, true);
  return;
}
function _openWindowAlign(title$$9, isBackground) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  outputWindow.focus();
  var v116 = outputWindow.document;
  JAM.call(v116.write, v116, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n'], JAM.policy.p17);
  if (isBackground) {
    var v118 = outputWindow.document;
    JAM.call(v118.write, v118, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #FFFFFF; background-color: #000000}\n" + "span.sim {color: #FFFFFF; background-color: #666666}\n" + 
    "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n" + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n" + "span.c, span.m {color: #000000; background-color: #FFFF00}\n" + "span.s, span.t {color: #000000; background-color: #66FF00}\n" + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n" + "span.d, span.e {color: #000000; background-color: #0066FF}\n" + "span.n, span.q {color: #000000; background-color: #996633}\n" + "span.p {color: #000000; background-color: #FF99FF}\n" + 
    "</style>\n"], JAM.policy.p17);
  } else {
    var v120 = outputWindow.document;
    JAM.call(v120.write, v120, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n" + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n" + 
    "span.diff {color: #999999; background-color: #FFFFFF}\n" + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n" + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n" + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n" + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n" + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n" + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n" + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n" + 
    "span.p {color: #00FFCC; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"], JAM.policy.p17);
  }
  var v122 = outputWindow.document;
  JAM.call(v122.write, v122, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$9 + " results</div>\n"], JAM.policy.p17);
  outputWindow.status = "Please Wait.";
  return true;
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
  if (JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p16) == -1) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v867 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p16) == -1;
  if (!v867) {
    v867 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p16) == -1;
  }
  var v732 = v867;
  if (!v732) {
    v732 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p16) == -1;
  }
  var v531 = v732;
  if (!v531) {
    v531 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p16) == -1;
  }
  if (v531) {
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
  var v870 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p16) == -1;
  if (!v870) {
    v870 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p16) == -1;
  }
  var v735 = v870;
  if (!v735) {
    v735 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p16) == -1;
  }
  var v536 = v735;
  if (!v536) {
    v536 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p16) == -1;
  }
  if (v536) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v873 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p16) == -1;
  if (!v873) {
    v873 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p16) == -1;
  }
  var v738 = v873;
  if (!v738) {
    v738 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p16) == -1;
  }
  var v537 = v738;
  if (!v537) {
    v537 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p16) == -1;
  }
  if (v537) {
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
  var v876 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p16) == -1;
  if (!v876) {
    v876 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p16) == -1;
  }
  var v741 = v876;
  if (!v741) {
    v741 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p16) == -1;
  }
  var v539 = v741;
  if (!v539) {
    v539 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p16) == -1;
  }
  if (v539) {
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
  var v152 = i$$5 < stopBase;
  for (;v152;) {
    lineOfText = rightNum(i$$5 + 1, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v149 = j$$6 <= basePerLine / groupSize;
    for (;v149;) {
      var v148 = k < groupSize;
      for (;v148;) {
        lineOfText = lineOfText + JAM.call(text$$10.charAt, text$$10, [k + i$$5], JAM.policy.p17);
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
    JAM.call(v150.write, v150, [lineOfText + "\n"], JAM.policy.p17);
    lineOfText = "";
    v152 = i$$5 < stopBase;
  }
  return true;
}
function writeGroupNumDna(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition) {
  JAM.call(writeGroupNumDnaSetStart, null, [text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition, 0], JAM.policy.p20);
  return true;
}
function writeGroupNumDnaSetStart(text$$12, tabIn$$3, groupSize$$2, basePerLine$$2, startBase$$2, stopBase$$2, strands$$1, numberPosition$$1, numberingAdjustment) {
  function adjustNumbering(original, adjustment) {
    var adjusted = original + adjustment;
    var v544 = adjustment < 0;
    if (v544) {
      v544 = adjusted >= 0;
    }
    if (v544) {
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
  var v186 = i$$6 < stopBase$$2;
  for (;v186;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v162 = j$$7 <= basePerLine$$2 / groupSize$$2;
    for (;v162;) {
      var v157 = k$$1 < groupSize$$2;
      for (;v157;) {
        if (i$$6 + k$$1 >= stopBase$$2) {
          break;
        }
        lineOfText$$1 = lineOfText$$1 + JAM.call(text$$12.charAt, text$$12, [k$$1 + i$$6], JAM.policy.p17);
        k$$1 = k$$1 + 1;
        v157 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      if (numberPosition$$1 == "above") {
        aboveNum = aboveNum + rightNum(JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p20), "", groupSize$$2, tabIn$$3);
      }
      if (i$$6 >= stopBase$$2) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      v162 = j$$7 <= basePerLine$$2 / groupSize$$2;
    }
    if (numberPosition$$1 == "left") {
      var v163 = outputWindow.document;
      JAM.call(v163.write, v163, [rightNum(JAM.call(adjustNumbering, null, [lineNum, numberingAdjustment], JAM.policy.p20), "", 8, tabIn$$3) + lineOfText$$1 + "\n"], JAM.policy.p17);
      if (strands$$1 == "two") {
        var v165 = outputWindow.document;
        JAM.call(v165.write, v165, [rightNum(JAM.call(adjustNumbering, null, [lineNum, numberingAdjustment], JAM.policy.p20), "", 8, tabIn$$3) + complement(lineOfText$$1) + "\n"], JAM.policy.p17);
        var v167 = outputWindow.document;
        JAM.call(v167.write, v167, ["\n"], JAM.policy.p11);
      }
    } else {
      if (numberPosition$$1 == "right") {
        var v169 = outputWindow.document;
        JAM.call(v169.write, v169, [lineOfText$$1 + JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p20) + "\n"], JAM.policy.p17);
        if (strands$$1 == "two") {
          var v171 = outputWindow.document;
          JAM.call(v171.write, v171, [complement(lineOfText$$1) + JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p20) + "\n"], JAM.policy.p17);
          var v173 = outputWindow.document;
          JAM.call(v173.write, v173, ["\n"], JAM.policy.p11);
        }
      } else {
        if (numberPosition$$1 == "above") {
          var v175 = outputWindow.document;
          JAM.call(v175.write, v175, [aboveNum + "\n"], JAM.policy.p17);
          var v177 = outputWindow.document;
          JAM.call(v177.write, v177, [lineOfText$$1 + "\n"], JAM.policy.p17);
          if (strands$$1 == "two") {
            var v179 = outputWindow.document;
            JAM.call(v179.write, v179, [complement(lineOfText$$1) + "\n"], JAM.policy.p17);
            var v181 = outputWindow.document;
            JAM.call(v181.write, v181, ["\n"], JAM.policy.p11);
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v186 = i$$6 < stopBase$$2;
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
  var v205 = i$$7 < stopBase$$3;
  for (;v205;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v193 = j$$8 <= basePerLine$$3 / groupSize$$3;
    for (;v193;) {
      var v189 = k$$2 < groupSize$$3;
      for (;v189;) {
        if (i$$7 + k$$2 >= stopBase$$3) {
          break;
        }
        lineOfText$$2 = lineOfText$$2 + JAM.call(text$$13.charAt, text$$13, [k$$2 + i$$7], JAM.policy.p17);
        k$$2 = k$$2 + 1;
        v189 = k$$2 < groupSize$$3;
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
      v193 = j$$8 <= basePerLine$$3 / groupSize$$3;
    }
    if (numberPosition$$2 == "left") {
      var v194 = outputWindow.document;
      JAM.call(v194.write, v194, [rightNum(lineNum$$1, "", 8, tabIn$$4) + lineOfText$$2 + "\n"], JAM.policy.p17);
    } else {
      if (numberPosition$$2 == "right") {
        var v196 = outputWindow.document;
        JAM.call(v196.write, v196, [lineOfText$$2 + i$$7 + "\n"], JAM.policy.p17);
      } else {
        if (numberPosition$$2 == "above") {
          var v198 = outputWindow.document;
          JAM.call(v198.write, v198, [aboveNum$$1 + "\n"], JAM.policy.p17);
          var v200 = outputWindow.document;
          JAM.call(v200.write, v200, [lineOfText$$2 + "\n"], JAM.policy.p17);
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v205 = i$$7 < stopBase$$3;
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
  var v752 = sequence$$13.length <= firstIndexToMutate;
  if (!v752) {
    v752 = lastIndexToMutate < 0;
  }
  var v561 = v752;
  if (!v561) {
    v561 = lastIndexToMutate <= firstIndexToMutate;
  }
  if (v561) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v214 = i$$8 < numMut;
  for (;v214;) {
    maxNum = sequence$$13.length;
    randNum = JAM.call(Math.floor, Math, [Math.random() * maxNum], JAM.policy.p16);
    var v563 = randNum < firstIndexToMutate;
    if (!v563) {
      v563 = randNum > lastIndexToMutate;
    }
    if (v563) {
      numMut++;
      i$$8++;
      v214 = i$$8 < numMut;
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
    sequence$$13 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p13) + components$$1[componentsIndex] + JAM.call(sequence$$13.substring, sequence$$13, [randNum + 1, sequence$$13.length], JAM.policy.p21);
    i$$8++;
    v214 = i$$8 < numMut;
  }
  var v215 = outputWindow.document;
  JAM.call(v215.write, v215, [addReturns(sequence$$13)], JAM.policy.p17);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v221 = j$$9 < lengthOut$$1;
  for (;v221;) {
    tempNum$$1 = JAM.call(Math.floor, Math, [Math.random() * components$$2.length], JAM.policy.p16);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    if (sequence$$14.length == 60) {
      var v218 = outputWindow.document;
      JAM.call(v218.write, v218, [sequence$$14 + "\n"], JAM.policy.p17);
      sequence$$14 = "";
    }
    j$$9++;
    v221 = j$$9 < lengthOut$$1;
  }
  var v222 = outputWindow.document;
  JAM.call(v222.write, v222, [sequence$$14 + "\n"], JAM.policy.p17);
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
  var v228 = outputWindow.document;
  JAM.call(v228.write, v228, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p11);
  var v229 = outputWindow.document;
  JAM.call(v229.write, v229, ['<tr><td class="title" width="200px">' + "Site:" + '</td><td class="title">' + "Positions:" + "</td></tr>\n"], JAM.policy.p17);
  var i$$9 = 0;
  var v246 = i$$9 < arrayOfItems.length;
  for (;v246;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v578 = arrayOfItems[i$$9];
    matchExp = JAM.call(v578.match, v578, [/\/.+\//], JAM.policy.p16) + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    var v885 = arrayOfItems[i$$9];
    var v579 = JAM.call(v885.match, v885, [/\)\D*\d+/], JAM.policy.p16).toString();
    cutDistance = parseFloat(JAM.call(v579.replace, v579, [/\)\D*/, ""], JAM.policy.p15));
    var v238 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p17);
    for (;v238;) {
      matchPosition = matchExp.lastIndex - cutDistance;
      var v580 = matchPosition >= lowerLimit;
      if (v580) {
        v580 = matchPosition < upperLimit;
      }
      if (v580) {
        timesFound++;
        tempString$$1 = tempString$$1 + ", " + (matchPosition - shiftValue + 1);
      }
      matchExp.lastIndex = matchExp.lastIndex - RegExp.lastMatch.length + 1;
      v238 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p17);
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
    var v244 = outputWindow.document;
    var v1023 = '<tr><td class="' + backGroundClass + '">';
    var v1068 = arrayOfItems[i$$9];
    var v1040 = JAM.call(v1068.match, v1068, [/\([^\(]+\)/], JAM.policy.p16).toString();
    JAM.call(v244.write, v244, [v1023 + JAM.call(v1040.replace, v1040, [/\(|\)/g, ""], JAM.policy.p15) + '</td><td class="' + backGroundClass + '">' + tempString$$1 + "</td></tr>\n"], JAM.policy.p17);
    timesFound = 0;
    i$$9++;
    v246 = i$$9 < arrayOfItems.length;
  }
  var v247 = outputWindow.document;
  JAM.call(v247.write, v247, ["</tbody></table>\n"], JAM.policy.p11);
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v248 = outputWindow.document;
  JAM.call(v248.write, v248, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p11);
  var v249 = outputWindow.document;
  JAM.call(v249.write, v249, ['<tr><td class="title">' + "Pattern:" + '</td><td class="title">' + "Times found:" + '</td><td class="title">' + "Percentage:" + "</td></tr>\n"], JAM.policy.p17);
  var i$$10 = 0;
  var v259 = i$$10 < arrayOfItems$$1.length;
  for (;v259;) {
    var tempNumber = 0;
    var v589 = arrayOfItems$$1[i$$10];
    var matchExp$$1 = JAM.call(v589.match, v589, [/\/[^\/]+\//], JAM.policy.p16) + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    if (JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p17) != -1) {
      tempNumber = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p17).length;
    }
    var percentage = 0;
    var v762 = originalLength + 1;
    var v966 = arrayOfItems$$1[i$$10];
    if (v762 - parseFloat(JAM.call(v966.match, v966, [/\d+/], JAM.policy.p16)) > 0) {
      var v254 = 100 * tempNumber;
      var v592 = originalLength + 1;
      var v889 = arrayOfItems$$1[i$$10];
      percentage = v254 / (v592 - parseFloat(JAM.call(v889.match, v889, [/\d+/], JAM.policy.p16)));
    }
    var v257 = outputWindow.document;
    var v1069 = arrayOfItems$$1[i$$10];
    var v1041 = JAM.call(v1069.match, v1069, [/\([^\(]+\)\b/], JAM.policy.p16).toString();
    JAM.call(v257.write, v257, ["<tr><td>" + JAM.call(v1041.replace, v1041, [/\(|\)/g, ""], JAM.policy.p15) + "</td><td>" + tempNumber + "</td><td>" + JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p9) + "</td></tr>\n"], JAM.policy.p17);
    i$$10++;
    v259 = i$$10 < arrayOfItems$$1.length;
  }
  var v260 = outputWindow.document;
  JAM.call(v260.write, v260, ["</tbody></table>\n"], JAM.policy.p11);
  return true;
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v267 = sequence$$17.length > 0;
  for (;v267;) {
    maxNum$$1 = sequence$$17.length;
    randNum$$1 = JAM.call(Math.floor, Math, [Math.random() * maxNum$$1], JAM.policy.p16);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p16);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p13);
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [randNum$$1 + 1, sequence$$17.length], JAM.policy.p15);
    sequence$$17 = tempString1 + tempString2;
    if (tempSeq.length == 60) {
      var v264 = outputWindow.document;
      JAM.call(v264.write, v264, [tempSeq + "\n"], JAM.policy.p17);
      tempSeq = "";
    }
    v267 = sequence$$17.length > 0;
  }
  var v268 = outputWindow.document;
  JAM.call(v268.write, v268, [tempSeq + "\n"], JAM.policy.p17);
  return true;
}
function revTrans(theDocument) {
  JAM.startProfile('compute');

  var newProtein = "";
  var maxInput$$3 = 2E4;
  if (testScript() == false) {
    return false;
  }
  var codonTable$$1;
  var v767 = checkFormElement(theDocument.forms[0].elements[0]) == false;
  if (!v767) {
    v767 = JAM.call(checkSequenceLength, null, [theDocument.forms[0].elements[0].value, maxInput$$3], JAM.policy.p20) == false;
  }
  var v601 = v767;
  if (!v601) {
    v601 = checkCodonTable(theDocument.forms[0].elements[4].value) == false;
  }
  if (v601) {
    return false;
  }
  codonTable$$1 = makeCodonTable(theDocument.forms[0].elements[4].value);
  if (codonTable$$1 == false) {
    return false;
  }
  openWindow("Reverse Translate");
  openPre();
  var arrayOfFasta$$1 = getArrayOfFasta(theDocument.forms[0].elements[0].value);
  var i$$11 = 0;
  var v283 = i$$11 < arrayOfFasta$$1.length;
  for (;v283;) {
    newProtein = getSequenceFromFasta(arrayOfFasta$$1[i$$11]);
    title = getTitleFromFasta(arrayOfFasta$$1[i$$11]);
    newProtein = removeNonProteinAllowX(newProtein);
    var v277 = outputWindow.document;
    JAM.call(v277.write, v277, [JAM.call(getInfoFromTitleAndSequence, null, [title, newProtein], JAM.policy.p20)], JAM.policy.p17);
    JAM.call(writeRevTransSeqNoDegen, null, [newProtein, title, codonTable$$1], JAM.policy.p20);
    var v279 = outputWindow.document;
    JAM.call(v279.write, v279, ["\n"], JAM.policy.p11);
    JAM.call(writeRevTransSeqDegen, null, [newProtein, title, codonTable$$1], JAM.policy.p20);
    var v280 = outputWindow.document;
    JAM.call(v280.write, v280, ["\n"], JAM.policy.p11);
    var v281 = outputWindow.document;
    JAM.call(v281.write, v281, ["Graph of base probabilities:\n"], JAM.policy.p11);
    JAM.call(writeRevTransGraph, null, [newProtein, codonTable$$1], JAM.policy.p20);
    var v282 = outputWindow.document;
    JAM.call(v282.write, v282, ["\n\n"], JAM.policy.p11);
    i$$11++;
    v283 = i$$11 < arrayOfFasta$$1.length;
  }
  closePre();
  closeWindow();

  JAM.stopProfile('compute');
  return true;
}
function writeRevTransSeqNoDegen(protein, title$$10, codonTable$$2) {
  function v2(str$$8, p1$$2, offset$$10, s$$4) {
    aminoAcid = codonTable$$2[p1$$2.toString().toLowerCase()];
    return aminoAcid.mostCommonCodon;
  }
  var aminoAcid;
  protein = JAM.call(protein.replace, protein, [/\*/g, "z"], JAM.policy.p15);
  protein = JAM.call(protein.replace, protein, [/(.)/g, v2], JAM.policy.p15);
  var v286 = outputWindow.document;
  JAM.call(v286.write, v286, ["&gt;" + "reverse translation of " + title$$10 + " to a " + protein.length + " base sequence of most likely codons.\n"], JAM.policy.p17);
  var v288 = outputWindow.document;
  JAM.call(v288.write, v288, [addReturns(protein)], JAM.policy.p17);
  var v290 = outputWindow.document;
  JAM.call(v290.write, v290, ["\n"], JAM.policy.p11);
  return true;
}
function writeRevTransSeqDegen(protein$$1, title$$11, codonTable$$3) {
  function v3(str$$9, p1$$3, offset$$11, s$$5) {
    aminoAcid$$1 = codonTable$$3[p1$$3.toString().toLowerCase()];
    return aminoAcid$$1.degenCodon;
  }
  var aminoAcid$$1;
  protein$$1 = JAM.call(protein$$1.replace, protein$$1, [/\*/g, "z"], JAM.policy.p15);
  protein$$1 = JAM.call(protein$$1.replace, protein$$1, [/(.)/g, v3], JAM.policy.p15);
  var v293 = outputWindow.document;
  JAM.call(v293.write, v293, ["&gt;" + "reverse translation of " + title$$11 + " to a " + protein$$1.length + " base sequence of consensus codons.\n"], JAM.policy.p17);
  var v295 = outputWindow.document;
  JAM.call(v295.write, v295, [addReturns(protein$$1)], JAM.policy.p17);
  var v297 = outputWindow.document;
  JAM.call(v297.write, v297, ["\n"], JAM.policy.p11);
  return true;
}
function writeRevTransGraph(protein$$2, codonTable$$4) {
  function v4(str$$10, p1$$4, offset$$12, s$$6) {
    aminoAcid$$2 = codonTable$$4[p1$$4.toString().toLowerCase()];
    return "<b>" + (offset$$12 + 1) + "_" + str$$10 + "_" + "first</b>\n" + aminoAcid$$2.rulerPosOne + "<b>" + (offset$$12 + 1) + "_" + str$$10 + "_" + "second</b>\n" + aminoAcid$$2.rulerPosTwo + "<b>" + (offset$$12 + 1) + "_" + str$$10 + "_" + "third</b>\n" + aminoAcid$$2.rulerPosThree + "\n";
  }
  var aminoAcid$$2;
  protein$$2 = JAM.call(protein$$2.replace, protein$$2, [/\*/g, "z"], JAM.policy.p15);
  protein$$2 = JAM.call(protein$$2.replace, protein$$2, [/(.)/g, v4], JAM.policy.p15);
  var v301 = outputWindow.document;
  JAM.call(v301.write, v301, [protein$$2], JAM.policy.p17);
  return true;
}
function makeCodonTable(gcgTable) {
  gcgTable = JAM.call(gcgTable.replace, gcgTable, [/[^\.]*\.\./, ""], JAM.policy.p15);
  var tableArray = JAM.call(gcgTable.split, gcgTable, [/[\f\n\r]/], JAM.policy.p16);
  var re$$3 = /(\w+)\s+(\w+)\s+(\S+)\s+(\S+)\s+(\S+)/g;
  var matchArray$$2;
  var codonTable$$5 = new CodonTable;
  var i$$12 = 0;
  var v306 = i$$12 < tableArray.length;
  for (;v306;) {
    var v305 = matchArray$$2 = JAM.call(re$$3.exec, re$$3, [tableArray[i$$12]], JAM.policy.p17);
    for (;v305;) {
      try {
        var v302 = codonTable$$5[matchArray$$2[1].toLowerCase()];
        JAM.call(v302.addCodon, v302, [JAM.new(Codon, [matchArray$$2[2], parseFloat(matchArray$$2[3]), parseFloat(matchArray$$2[4]), parseFloat(matchArray$$2[5])], JAM.policy.p20)], JAM.policy.p17);
      } catch (e$$5) {
        alert("There is a problem with a line of the codon table: " + matchArray$$2[1] + " " + matchArray$$2[2] + " " + matchArray$$2[3] + " " + matchArray$$2[4] + " " + matchArray$$2[4]);
        return false;
      }
      v305 = matchArray$$2 = JAM.call(re$$3.exec, re$$3, [tableArray[i$$12]], JAM.policy.p17);
    }
    i$$12++;
    v306 = i$$12 < tableArray.length;
  }
  codonTable$$5.a.determineBaseFreq();
  codonTable$$5.c.determineBaseFreq();
  codonTable$$5.d.determineBaseFreq();
  codonTable$$5.e.determineBaseFreq();
  codonTable$$5.f.determineBaseFreq();
  codonTable$$5.g.determineBaseFreq();
  codonTable$$5.h.determineBaseFreq();
  codonTable$$5.i.determineBaseFreq();
  codonTable$$5.k.determineBaseFreq();
  codonTable$$5.l.determineBaseFreq();
  codonTable$$5.m.determineBaseFreq();
  codonTable$$5.n.determineBaseFreq();
  codonTable$$5.p.determineBaseFreq();
  codonTable$$5.q.determineBaseFreq();
  codonTable$$5.r.determineBaseFreq();
  codonTable$$5.s.determineBaseFreq();
  codonTable$$5.t.determineBaseFreq();
  codonTable$$5.v.determineBaseFreq();
  codonTable$$5.w.determineBaseFreq();
  codonTable$$5.y.determineBaseFreq();
  codonTable$$5.z.determineBaseFreq();
  codonTable$$5.x.determineBaseFreq();
  var v329 = codonTable$$5.x;
  var v1120 = new Array(.25, .25, .25, .25);
  v329.baseFreqPosOne = v1120;
  var v330 = codonTable$$5.x;
  var v1121 = new Array(.25, .25, .25, .25);
  v330.baseFreqPosTwo = v1121;
  var v331 = codonTable$$5.x;
  var v1122 = new Array(.25, .25, .25, .25);
  v331.baseFreqPosThree = v1122;
  codonTable$$5.a.fillRuler();
  codonTable$$5.c.fillRuler();
  codonTable$$5.d.fillRuler();
  codonTable$$5.e.fillRuler();
  codonTable$$5.f.fillRuler();
  codonTable$$5.g.fillRuler();
  codonTable$$5.h.fillRuler();
  codonTable$$5.i.fillRuler();
  codonTable$$5.k.fillRuler();
  codonTable$$5.l.fillRuler();
  codonTable$$5.m.fillRuler();
  codonTable$$5.n.fillRuler();
  codonTable$$5.p.fillRuler();
  codonTable$$5.q.fillRuler();
  codonTable$$5.r.fillRuler();
  codonTable$$5.s.fillRuler();
  codonTable$$5.t.fillRuler();
  codonTable$$5.v.fillRuler();
  codonTable$$5.w.fillRuler();
  codonTable$$5.y.fillRuler();
  codonTable$$5.z.fillRuler();
  codonTable$$5.x.fillRuler();
  return codonTable$$5;
}
function CodonTable() {
  var v1123 = new AminoAcid;
  this.a = v1123;
  var v1124 = new AminoAcid;
  this.c = v1124;
  var v1125 = new AminoAcid;
  this.d = v1125;
  var v1126 = new AminoAcid;
  this.e = v1126;
  var v1127 = new AminoAcid;
  this.f = v1127;
  var v1128 = new AminoAcid;
  this.g = v1128;
  var v1129 = new AminoAcid;
  this.h = v1129;
  var v1130 = new AminoAcid;
  this.i = v1130;
  var v1131 = new AminoAcid;
  this.k = v1131;
  var v1132 = new AminoAcid;
  this.l = v1132;
  var v1133 = new AminoAcid;
  this.m = v1133;
  var v1134 = new AminoAcid;
  this.n = v1134;
  var v1135 = new AminoAcid;
  this.p = v1135;
  var v1136 = new AminoAcid;
  this.q = v1136;
  var v1137 = new AminoAcid;
  this.r = v1137;
  var v1138 = new AminoAcid;
  this.s = v1138;
  var v1139 = new AminoAcid;
  this.t = v1139;
  var v1140 = new AminoAcid;
  this.v = v1140;
  var v1141 = new AminoAcid;
  this.w = v1141;
  var v1142 = new AminoAcid;
  this.y = v1142;
  var v1143 = new AminoAcid;
  this.z = v1143;
  var v1144 = new AminoAcid;
  this.x = v1144;
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
  this.xaa = this.x;
  return;
}
function fillRuler() {
  var markG = "gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg";
  var markA = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
  var markT = "TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT";
  var markC = "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC";
  var markLength = markG.length;
  this.rulerPosOne = JAM.call(this.getRuler, this, [this.baseFreqPosOne[0], markG], JAM.policy.p21) + JAM.call(this.getRuler, this, [this.baseFreqPosOne[1], markA], JAM.policy.p21) + JAM.call(this.getRuler, this, [this.baseFreqPosOne[2], markT], JAM.policy.p21) + JAM.call(this.getRuler, this, [this.baseFreqPosOne[3], markC], JAM.policy.p21);
  this.rulerPosTwo = JAM.call(this.getRuler, this, [this.baseFreqPosTwo[0], markG], JAM.policy.p21) + JAM.call(this.getRuler, this, [this.baseFreqPosTwo[1], markA], JAM.policy.p21) + JAM.call(this.getRuler, this, [this.baseFreqPosTwo[2], markT], JAM.policy.p21) + JAM.call(this.getRuler, this, [this.baseFreqPosTwo[3], markC], JAM.policy.p21);
  this.rulerPosThree = JAM.call(this.getRuler, this, [this.baseFreqPosThree[0], markG], JAM.policy.p21) + JAM.call(this.getRuler, this, [this.baseFreqPosThree[1], markA], JAM.policy.p21) + JAM.call(this.getRuler, this, [this.baseFreqPosThree[2], markT], JAM.policy.p21) + JAM.call(this.getRuler, this, [this.baseFreqPosThree[3], markC], JAM.policy.p21);
  this.setMostCommonCodon();
  this.setDegenCodon();
  return;
}
function getRuler(freq, mark) {
  return JAM.call(mark.substring, mark, [0, 1], JAM.policy.p13) + JAM.call(mark.substring, mark, [0, freq * mark.length], JAM.policy.p13) + " " + JAM.call(freq.toFixed, freq, [2], JAM.policy.p9) + "\n";
}
function addCodon(codon$$1) {
  var v361 = this.codons;
  JAM.call(v361.push, v361, [codon$$1], JAM.policy.p17);
  return;
}
function determineBaseFreq() {
  this.fixFraction();
  var i$$13 = 0;
  var v386 = i$$13 < this.codons.length;
  for (;v386;) {
    var v796 = this.codons[i$$13].sequence;
    if (JAM.call(v796.charAt, v796, [0], JAM.policy.p9) == "g") {
      this.baseFreqPosOne[0] = this.baseFreqPosOne[0] + this.codons[i$$13].fraction;
    } else {
      var v799 = this.codons[i$$13].sequence;
      if (JAM.call(v799.charAt, v799, [0], JAM.policy.p9) == "a") {
        this.baseFreqPosOne[1] = this.baseFreqPosOne[1] + this.codons[i$$13].fraction;
      } else {
        var v802 = this.codons[i$$13].sequence;
        if (JAM.call(v802.charAt, v802, [0], JAM.policy.p9) == "t") {
          this.baseFreqPosOne[2] = this.baseFreqPosOne[2] + this.codons[i$$13].fraction;
        } else {
          var v805 = this.codons[i$$13].sequence;
          if (JAM.call(v805.charAt, v805, [0], JAM.policy.p9) == "c") {
            this.baseFreqPosOne[3] = this.baseFreqPosOne[3] + this.codons[i$$13].fraction;
          }
        }
      }
    }
    var v808 = this.codons[i$$13].sequence;
    if (JAM.call(v808.charAt, v808, [1], JAM.policy.p9) == "g") {
      this.baseFreqPosTwo[0] = this.baseFreqPosTwo[0] + this.codons[i$$13].fraction;
    } else {
      var v811 = this.codons[i$$13].sequence;
      if (JAM.call(v811.charAt, v811, [1], JAM.policy.p9) == "a") {
        this.baseFreqPosTwo[1] = this.baseFreqPosTwo[1] + this.codons[i$$13].fraction;
      } else {
        var v814 = this.codons[i$$13].sequence;
        if (JAM.call(v814.charAt, v814, [1], JAM.policy.p9) == "t") {
          this.baseFreqPosTwo[2] = this.baseFreqPosTwo[2] + this.codons[i$$13].fraction;
        } else {
          var v817 = this.codons[i$$13].sequence;
          if (JAM.call(v817.charAt, v817, [1], JAM.policy.p9) == "c") {
            this.baseFreqPosTwo[3] = this.baseFreqPosTwo[3] + this.codons[i$$13].fraction;
          }
        }
      }
    }
    var v820 = this.codons[i$$13].sequence;
    if (JAM.call(v820.charAt, v820, [2], JAM.policy.p9) == "g") {
      this.baseFreqPosThree[0] = this.baseFreqPosThree[0] + this.codons[i$$13].fraction;
    } else {
      var v823 = this.codons[i$$13].sequence;
      if (JAM.call(v823.charAt, v823, [2], JAM.policy.p9) == "a") {
        this.baseFreqPosThree[1] = this.baseFreqPosThree[1] + this.codons[i$$13].fraction;
      } else {
        var v826 = this.codons[i$$13].sequence;
        if (JAM.call(v826.charAt, v826, [2], JAM.policy.p9) == "t") {
          this.baseFreqPosThree[2] = this.baseFreqPosThree[2] + this.codons[i$$13].fraction;
        } else {
          var v829 = this.codons[i$$13].sequence;
          if (JAM.call(v829.charAt, v829, [2], JAM.policy.p9) == "c") {
            this.baseFreqPosThree[3] = this.baseFreqPosThree[3] + this.codons[i$$13].fraction;
          }
        }
      }
    }
    i$$13++;
    v386 = i$$13 < this.codons.length;
  }
  return true;
}
function fixFraction() {
  var perThouTotal = 0;
  var i$$14 = 0;
  var v388 = i$$14 < this.codons.length;
  for (;v388;) {
    perThouTotal = perThouTotal + this.codons[i$$14].perThou;
    i$$14++;
    v388 = i$$14 < this.codons.length;
  }
  if (perThouTotal == 0) {
    return false;
  }
  i$$14 = 0;
  var v391 = i$$14 < this.codons.length;
  for (;v391;) {
    this.codons[i$$14].fraction = this.codons[i$$14].perThou / perThouTotal;
    i$$14++;
    v391 = i$$14 < this.codons.length;
  }
  return true;
}
function setMostCommonCodon() {
  var highestFraction = 0;
  var highestCodon = "nnn";
  var i$$15 = 0;
  var v395 = i$$15 < this.codons.length;
  for (;v395;) {
    if (this.codons[i$$15].fraction > highestFraction) {
      highestFraction = this.codons[i$$15].fraction;
      highestCodon = this.codons[i$$15].sequence;
    }
    i$$15++;
    v395 = i$$15 < this.codons.length;
  }
  this.mostCommonCodon = highestCodon;
  return;
}
function setDegenCodon() {
  this.degenCodon = getConsensusBase(this.baseFreqPosOne) + getConsensusBase(this.baseFreqPosTwo) + getConsensusBase(this.baseFreqPosThree);
  return;
}
function getConsensusBase(baseFreq) {
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
  var v939 = !g;
  if (v939) {
    v939 = !a;
  }
  var v844 = v939;
  if (v844) {
    v844 = !c;
  }
  var v692 = v844;
  if (v692) {
    v692 = !t;
  }
  if (v692) {
    return "n";
  }
  var v845 = g && a;
  if (v845) {
    v845 = c;
  }
  var v693 = v845;
  if (v693) {
    v693 = t;
  }
  if (v693) {
    return "n";
  } else {
    var v694 = a && c;
    if (v694) {
      v694 = t;
    }
    if (v694) {
      return "h";
    } else {
      var v695 = a && g;
      if (v695) {
        v695 = t;
      }
      if (v695) {
        return "d";
      } else {
        var v696 = c && g;
        if (v696) {
          v696 = t;
        }
        if (v696) {
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
  return true;
}
function AminoAcid() {
  var v1145 = new Array;
  this.codons = v1145;
  var v1146 = new Array(0, 0, 0, 0);
  this.baseFreqPosOne = v1146;
  var v1147 = new Array(0, 0, 0, 0);
  this.baseFreqPosTwo = v1147;
  var v1148 = new Array(0, 0, 0, 0);
  this.baseFreqPosThree = v1148;
  return;
}
function Codon(sequence$$18, number, perThou, fraction) {
  var v1149 = sequence$$18.toLowerCase();
  this.sequence = v1149;
  this.number = number;
  this.perThou = perThou;
  this.fraction = fraction;
  return;
}
new AminoAcid;
AminoAcid.prototype.fillRuler = fillRuler;
AminoAcid.prototype.getRuler = getRuler;
AminoAcid.prototype.addCodon = addCodon;
AminoAcid.prototype.determineBaseFreq = determineBaseFreq;
AminoAcid.prototype.fixFraction = fixFraction;
AminoAcid.prototype.setMostCommonCodon = setMostCommonCodon;
AminoAcid.prototype.setDegenCodon = setDegenCodon;
AminoAcid.prototype.getConsensusBase = getConsensusBase;
JAM.set(document, "onload", v5);
JAM.set(JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p11), "onclick", v6);
JAM.set(JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p11), "onclick", v7)

JAM.stopProfile('load');
