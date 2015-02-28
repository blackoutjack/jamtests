// sms2-rev-trans.js
function v7() {
  document.forms[0].elements[0].value = " ";
  document.forms[0].elements[4].value = " ";
  return;
}
function v6() {
  try {
    revTrans();
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
    var v937 = arrayOfTitles[i$$1];
    var v697 = JAM.call(v937.search, v937, [/\S/], JAM.policy.p17) == -1;
    if (!v697) {
      var v938 = arrayOfSequences[i$$1];
      v697 = JAM.call(v938.search, v938, [/\S/], JAM.policy.p17) == -1;
    }
    var v426 = v697;
    if (!v426) {
      v426 = arrayOfSequences[i$$1].length != lengthOfAlign;
    }
    if (v426) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    v15 = i$$1 < arrayOfTitles.length;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v939 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p17) == -1;
  if (!v939) {
    v939 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p17) == -1;
  }
  var v849 = v939;
  if (!v849) {
    v849 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p17) == -1;
  }
  var v700 = v849;
  if (!v700) {
    v700 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p17) == -1;
  }
  var v428 = v700;
  if (!v428) {
    v428 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p17) == -1;
  }
  if (v428) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v703 = formElement.value;
  if (JAM.call(v703.search, v703, [/\S/], JAM.policy.p17) == -1) {
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
    var v704 = arrayOfPatterns[z$$2];
    if (JAM.call(v704.search, v704, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p17) == -1) {
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
    var v706 = arrayOfPatterns[j];
    var v23 = JAM.call(v706.match, v706, [/\/.+\//], JAM.policy.p17) + "gi";
    if (JAM.isEval(eval)) {
      var v1111 = eval("introspect(JAM.policy.pFull) { " + v23 + " }")
    } else {
      var v1111 = JAM.call(eval, null, [v23])
    }
    geneticCodeMatchExp[j] = v1111;
    var v436 = arrayOfPatterns[j];
    var v1112 = JAM.call(v436.match, v436, [/=[a-zA-Z\*]/], JAM.policy.p17).toString();
    geneticCodeMatchResult[j] = v1112;
    var v25 = geneticCodeMatchResult[j];
    var v1113 = JAM.call(v25.replace, v25, [/=/g, ""], JAM.policy.p16);
    geneticCodeMatchResult[j] = v1113;
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
    var v710 = arrayOfPatterns$$1[z$$3];
    if (JAM.call(v710.search, v710, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p17) != -1) {
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
      var v712 = arrayOfPatterns$$1[j$$1];
      if (JAM.call(v712.search, v712, [re], JAM.policy.p15) != -1) {
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
    var v713 = arrayOfPatterns$$2[z$$4];
    if (JAM.call(v713.search, v713, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p17) == -1) {
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
  var v852 = getSequenceFromFasta(text$$7);
  if (JAM.call(v852.replace, v852, [/[^A-Za-z]/g, ""], JAM.policy.p16).length > maxInput) {
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
  JAM.call(v47.write, v47, ["</form>"], JAM.policy.p12);
  return true;
}
function closePre() {
  var v48 = outputWindow.document;
  JAM.call(v48.write, v48, ["</div>"], JAM.policy.p12);
  var v49 = outputWindow.document;
  JAM.call(v49.write, v49, ["</pre>\n"], JAM.policy.p12);
  return;
}
function closeTextArea() {
  var v50 = outputWindow.document;
  JAM.call(v50.write, v50, ["</textarea>"], JAM.policy.p12);
  return true;
}
function closeWindow() {
  var v51 = outputWindow.document;
  JAM.call(v51.write, v51, ["</body>\n</html>\n"], JAM.policy.p12);
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
    var v716 = alignArray[i$$4];
    if (JAM.call(v716.search, v716, [/[^\s]+\s/], JAM.policy.p17) == -1) {
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
  if (JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p17) != -1) {
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
  var v74 = j$$2 < arrayOfPatterns$$3.length;
  for (;v74;) {
    var v717 = arrayOfPatterns$$3[j$$2];
    var v73 = JAM.call(v717.match, v717, [/\/.+\//], JAM.policy.p17) + "gi";
    if (JAM.isEval(eval)) {
      var v1114 = eval("introspect(JAM.policy.pFull) { " + v73 + " }")
    } else {
      var v1114 = JAM.call(eval, null, [v73])
    }
    geneticCodeMatchExp$$1[j$$2] = v1114;
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
    var v486 = arrayOfPatterns$$4[j$$3];
    var v1115 = JAM.call(v486.match, v486, [/=[a-zA-Z\*]/], JAM.policy.p17).toString();
    geneticCodeMatchResult$$1[j$$3] = v1115;
    var v77 = geneticCodeMatchResult$$1[j$$3];
    var v1116 = JAM.call(v77.replace, v77, [/=/g, ""], JAM.policy.p16);
    geneticCodeMatchResult$$1[j$$3] = v1116;
    j$$3++;
    v78 = j$$3 < arrayOfPatterns$$4.length;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(sequence$$3) {
  var fastaSequenceTitle$$1 = title;
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
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v99 = j$$4 < lengthOut;
  for (;v99;) {
    tempNum = JAM.call(Math.floor, Math, [Math.random() * components.length], JAM.policy.p17);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p15);
    j$$4++;
    v99 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p12);
}
function getSequenceFromFasta(sequenceRecord) {
  if (JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p17) != -1) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p16);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  if (JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p17) != -1) {
    fastaTitle = JAM.call(sequenceRecord$$1.match, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p16).toString();
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\>|[\f\n\r]/g, ""], JAM.policy.p16);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\s{2,}/g, " "], JAM.policy.p16);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/[\<\>]/gi, ""], JAM.policy.p16);
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  var v1069 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p17) != -1;
  if (!v1069) {
    v1069 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p17) != -1;
  }
  var v1058 = v1069;
  if (!v1058) {
    v1058 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p17) != -1;
  }
  var v1045 = v1058;
  if (!v1045) {
    v1045 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p17) != -1;
  }
  var v1029 = v1045;
  if (!v1029) {
    v1029 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p17) != -1;
  }
  var v1013 = v1029;
  if (!v1013) {
    v1013 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p17) != -1;
  }
  var v996 = v1013;
  if (!v996) {
    v996 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p17) != -1;
  }
  var v942 = v996;
  if (!v942) {
    v942 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p17) != -1;
  }
  var v853 = v942;
  if (!v853) {
    v853 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p17) != -1;
  }
  var v719 = v853;
  if (!v719) {
    v719 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p17) != -1;
  }
  var v514 = v719;
  if (!v514) {
    v514 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p17) != -1;
  }
  if (v514) {
    return false;
  }
  return true;
}
function openForm() {
  var v104 = outputWindow.document;
  JAM.call(v104.write, v104, ['<form action="">\n'], JAM.policy.p12);
  return true;
}
function openPre() {
  var v105 = outputWindow.document;
  JAM.call(v105.write, v105, ["<pre>"], JAM.policy.p12);
  var v106 = outputWindow.document;
  JAM.call(v106.write, v106, ['<div class="pre">'], JAM.policy.p12);
  return;
}
function openTextArea() {
  var v107 = outputWindow.document;
  JAM.call(v107.write, v107, ['<br /><textarea rows="6" cols="61">\n'], JAM.policy.p12);
  return true;
}
function openWindow() {
  var title$$6 = "Reverse Translate";
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
  if (JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p17) != -1) {
    tempDnaArray = JAM.call(dnaSequence$$1.match, dnaSequence$$1, [/./g], JAM.policy.p17);
    tempDnaArray = tempDnaArray.reverse();
    dnaSequence$$1 = JAM.call(tempDnaArray.join, tempDnaArray, [""], JAM.policy.p12);
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
  if (JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p17) == -1) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v864 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p17) == -1;
  if (!v864) {
    v864 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p17) == -1;
  }
  var v730 = v864;
  if (!v730) {
    v730 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p17) == -1;
  }
  var v529 = v730;
  if (!v529) {
    v529 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p17) == -1;
  }
  if (v529) {
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
  var v867 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p17) == -1;
  if (!v867) {
    v867 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p17) == -1;
  }
  var v733 = v867;
  if (!v733) {
    v733 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p17) == -1;
  }
  var v534 = v733;
  if (!v534) {
    v534 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p17) == -1;
  }
  if (v534) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v870 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p17) == -1;
  if (!v870) {
    v870 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p17) == -1;
  }
  var v736 = v870;
  if (!v736) {
    v736 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p17) == -1;
  }
  var v535 = v736;
  if (!v535) {
    v535 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p17) == -1;
  }
  if (v535) {
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
  var v873 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p17) == -1;
  if (!v873) {
    v873 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p17) == -1;
  }
  var v739 = v873;
  if (!v739) {
    v739 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p17) == -1;
  }
  var v537 = v739;
  if (!v537) {
    v537 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p17) == -1;
  }
  if (v537) {
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
    var v542 = adjustment < 0;
    if (v542) {
      v542 = adjusted >= 0;
    }
    if (v542) {
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
        JAM.call(v165.write, v165, ["\n"], JAM.policy.p12);
      }
    } else {
      if (numberPosition$$1 == "right") {
        var v167 = outputWindow.document;
        JAM.call(v167.write, v167, [lineOfText$$1 + adjustNumbering(i$$6, numberingAdjustment) + "\n"], JAM.policy.p15);
        if (strands$$1 == "two") {
          var v169 = outputWindow.document;
          JAM.call(v169.write, v169, [complement(lineOfText$$1) + adjustNumbering(i$$6, numberingAdjustment) + "\n"], JAM.policy.p15);
          var v171 = outputWindow.document;
          JAM.call(v171.write, v171, ["\n"], JAM.policy.p12);
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
            JAM.call(v179.write, v179, ["\n"], JAM.policy.p12);
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
  var v749 = sequence$$13.length <= firstIndexToMutate;
  if (!v749) {
    v749 = lastIndexToMutate < 0;
  }
  var v559 = v749;
  if (!v559) {
    v559 = lastIndexToMutate <= firstIndexToMutate;
  }
  if (v559) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v212 = i$$8 < numMut;
  for (;v212;) {
    maxNum = sequence$$13.length;
    randNum = JAM.call(Math.floor, Math, [Math.random() * maxNum], JAM.policy.p17);
    var v561 = randNum < firstIndexToMutate;
    if (!v561) {
      v561 = randNum > lastIndexToMutate;
    }
    if (v561) {
      numMut++;
      i$$8++;
      v212 = i$$8 < numMut;
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
    tempNum$$1 = JAM.call(Math.floor, Math, [Math.random() * components$$2.length], JAM.policy.p17);
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
  JAM.call(v226.write, v226, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p12);
  var v227 = outputWindow.document;
  JAM.call(v227.write, v227, ['<tr><td class="title" width="200px">' + "Site:" + '</td><td class="title">' + "Positions:" + "</td></tr>\n"], JAM.policy.p15);
  var i$$9 = 0;
  var v244 = i$$9 < arrayOfItems.length;
  for (;v244;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v576 = arrayOfItems[i$$9];
    matchExp = JAM.call(v576.match, v576, [/\/.+\//], JAM.policy.p17) + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    var v882 = arrayOfItems[i$$9];
    var v577 = JAM.call(v882.match, v882, [/\)\D*\d+/], JAM.policy.p17).toString();
    cutDistance = parseFloat(JAM.call(v577.replace, v577, [/\)\D*/, ""], JAM.policy.p16));
    var v236 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p15);
    for (;v236;) {
      matchPosition = matchExp.lastIndex - cutDistance;
      var v578 = matchPosition >= lowerLimit;
      if (v578) {
        v578 = matchPosition < upperLimit;
      }
      if (v578) {
        timesFound++;
        tempString$$1 = tempString$$1 + ", " + (matchPosition - shiftValue + 1);
      }
      matchExp.lastIndex = matchExp.lastIndex - RegExp.lastMatch.length + 1;
      v236 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p15);
    }
    if (JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p17) != -1) {
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
    var v1020 = '<tr><td class="' + backGroundClass + '">';
    var v1065 = arrayOfItems[i$$9];
    var v1037 = JAM.call(v1065.match, v1065, [/\([^\(]+\)/], JAM.policy.p17).toString();
    JAM.call(v242.write, v242, [v1020 + JAM.call(v1037.replace, v1037, [/\(|\)/g, ""], JAM.policy.p16) + '</td><td class="' + backGroundClass + '">' + tempString$$1 + "</td></tr>\n"], JAM.policy.p15);
    timesFound = 0;
    i$$9++;
    v244 = i$$9 < arrayOfItems.length;
  }
  var v245 = outputWindow.document;
  JAM.call(v245.write, v245, ["</tbody></table>\n"], JAM.policy.p12);
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v246 = outputWindow.document;
  JAM.call(v246.write, v246, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p12);
  var v247 = outputWindow.document;
  JAM.call(v247.write, v247, ['<tr><td class="title">' + "Pattern:" + '</td><td class="title">' + "Times found:" + '</td><td class="title">' + "Percentage:" + "</td></tr>\n"], JAM.policy.p15);
  var i$$10 = 0;
  var v257 = i$$10 < arrayOfItems$$1.length;
  for (;v257;) {
    var tempNumber = 0;
    var v587 = arrayOfItems$$1[i$$10];
    var matchExp$$1 = JAM.call(v587.match, v587, [/\/[^\/]+\//], JAM.policy.p17) + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    if (JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p15) != -1) {
      tempNumber = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p15).length;
    }
    var percentage = 0;
    var v759 = originalLength + 1;
    var v963 = arrayOfItems$$1[i$$10];
    if (v759 - parseFloat(JAM.call(v963.match, v963, [/\d+/], JAM.policy.p17)) > 0) {
      var v252 = 100 * tempNumber;
      var v590 = originalLength + 1;
      var v886 = arrayOfItems$$1[i$$10];
      percentage = v252 / (v590 - parseFloat(JAM.call(v886.match, v886, [/\d+/], JAM.policy.p17)));
    }
    var v255 = outputWindow.document;
    var v1066 = arrayOfItems$$1[i$$10];
    var v1038 = JAM.call(v1066.match, v1066, [/\([^\(]+\)\b/], JAM.policy.p17).toString();
    JAM.call(v255.write, v255, ["<tr><td>" + JAM.call(v1038.replace, v1038, [/\(|\)/g, ""], JAM.policy.p16) + "</td><td>" + tempNumber + "</td><td>" + JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p10) + "</td></tr>\n"], JAM.policy.p15);
    i$$10++;
    v257 = i$$10 < arrayOfItems$$1.length;
  }
  var v258 = outputWindow.document;
  JAM.call(v258.write, v258, ["</tbody></table>\n"], JAM.policy.p12);
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
    randNum$$1 = JAM.call(Math.floor, Math, [Math.random() * maxNum$$1], JAM.policy.p17);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p17);
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
function revTrans() {
  var theDocument = document;
  var newProtein = "";
  var maxInput$$3 = 2E4;
  if (testScript() == false) {
    return;
  }
  var codonTable$$1;
  var v764 = checkFormElement(theDocument.forms[0].elements[0]) == false;
  if (!v764) {
    v764 = checkSequenceLength(theDocument.forms[0].elements[0].value, maxInput$$3) == false;
  }
  var v599 = v764;
  if (!v599) {
    v599 = checkCodonTable(theDocument.forms[0].elements[4].value) == false;
  }
  if (v599) {
    return;
  }
  codonTable$$1 = makeCodonTable(theDocument.forms[0].elements[4].value);
  if (codonTable$$1 == false) {
    return;
  }
  openWindow();
  openPre();
  var arrayOfFasta$$1 = getArrayOfFasta(theDocument.forms[0].elements[0].value);
  var i$$11 = 0;
  var v281 = i$$11 < arrayOfFasta$$1.length;
  for (;v281;) {
    newProtein = getSequenceFromFasta(arrayOfFasta$$1[i$$11]);
    title = getTitleFromFasta(arrayOfFasta$$1[i$$11]);
    newProtein = removeNonProteinAllowX(newProtein);
    var v275 = outputWindow.document;
    JAM.call(v275.write, v275, [getInfoFromTitleAndSequence(newProtein)], JAM.policy.p15);
    writeRevTransSeqNoDegen(newProtein, codonTable$$1);
    var v277 = outputWindow.document;
    JAM.call(v277.write, v277, ["\n"], JAM.policy.p12);
    writeRevTransSeqDegen(newProtein, codonTable$$1);
    var v278 = outputWindow.document;
    JAM.call(v278.write, v278, ["\n"], JAM.policy.p12);
    var v279 = outputWindow.document;
    JAM.call(v279.write, v279, ["Graph of base probabilities:\n"], JAM.policy.p12);
    writeRevTransGraph(newProtein, codonTable$$1);
    var v280 = outputWindow.document;
    JAM.call(v280.write, v280, ["\n\n"], JAM.policy.p12);
    i$$11++;
    v281 = i$$11 < arrayOfFasta$$1.length;
  }
  closePre();
  closeWindow();
  return;
}
function writeRevTransSeqNoDegen(protein, codonTable$$2) {
  function v2(str$$8, p1$$2, offset$$10, s$$4) {
    aminoAcid = codonTable$$2[p1$$2.toString().toLowerCase()];
    return aminoAcid.mostCommonCodon;
  }
  var title$$10 = title;
  var aminoAcid;
  protein = JAM.call(protein.replace, protein, [/\*/g, "z"], JAM.policy.p16);
  protein = JAM.call(protein.replace, protein, [/(.)/g, v2], JAM.policy.p16);
  var v284 = outputWindow.document;
  JAM.call(v284.write, v284, ["&gt;" + "reverse translation of " + title$$10 + " to a " + protein.length + " base sequence of most likely codons.\n"], JAM.policy.p15);
  var v286 = outputWindow.document;
  JAM.call(v286.write, v286, [addReturns(protein)], JAM.policy.p15);
  var v288 = outputWindow.document;
  JAM.call(v288.write, v288, ["\n"], JAM.policy.p12);
  return;
}
function writeRevTransSeqDegen(protein$$1, codonTable$$3) {
  function v3(str$$9, p1$$3, offset$$11, s$$5) {
    aminoAcid$$1 = codonTable$$3[p1$$3.toString().toLowerCase()];
    return aminoAcid$$1.degenCodon;
  }
  var title$$11 = title;
  var aminoAcid$$1;
  protein$$1 = JAM.call(protein$$1.replace, protein$$1, [/\*/g, "z"], JAM.policy.p16);
  protein$$1 = JAM.call(protein$$1.replace, protein$$1, [/(.)/g, v3], JAM.policy.p16);
  var v291 = outputWindow.document;
  JAM.call(v291.write, v291, ["&gt;" + "reverse translation of " + title$$11 + " to a " + protein$$1.length + " base sequence of consensus codons.\n"], JAM.policy.p15);
  var v293 = outputWindow.document;
  JAM.call(v293.write, v293, [addReturns(protein$$1)], JAM.policy.p15);
  var v295 = outputWindow.document;
  JAM.call(v295.write, v295, ["\n"], JAM.policy.p12);
  return;
}
function writeRevTransGraph(protein$$2, codonTable$$4) {
  function v4(str$$10, p1$$4, offset$$12, s$$6) {
    aminoAcid$$2 = codonTable$$4[p1$$4.toString().toLowerCase()];
    return "<b>" + (offset$$12 + 1) + "_" + str$$10 + "_" + "first</b>\n" + aminoAcid$$2.rulerPosOne + "<b>" + (offset$$12 + 1) + "_" + str$$10 + "_" + "second</b>\n" + aminoAcid$$2.rulerPosTwo + "<b>" + (offset$$12 + 1) + "_" + str$$10 + "_" + "third</b>\n" + aminoAcid$$2.rulerPosThree + "\n";
  }
  var aminoAcid$$2;
  protein$$2 = JAM.call(protein$$2.replace, protein$$2, [/\*/g, "z"], JAM.policy.p16);
  protein$$2 = JAM.call(protein$$2.replace, protein$$2, [/(.)/g, v4], JAM.policy.p16);
  var v299 = outputWindow.document;
  JAM.call(v299.write, v299, [protein$$2], JAM.policy.p15);
  return;
}
function makeCodonTable(gcgTable) {
  gcgTable = JAM.call(gcgTable.replace, gcgTable, [/[^\.]*\.\./, ""], JAM.policy.p16);
  var tableArray = JAM.call(gcgTable.split, gcgTable, [/[\f\n\r]/], JAM.policy.p17);
  var re$$3 = /(\w+)\s+(\w+)\s+(\S+)\s+(\S+)\s+(\S+)/g;
  var matchArray$$2;
  var codonTable$$5 = new CodonTable;
  var i$$12 = 0;
  var v304 = i$$12 < tableArray.length;
  for (;v304;) {
    var v303 = matchArray$$2 = JAM.call(re$$3.exec, re$$3, [tableArray[i$$12]], JAM.policy.p15);
    for (;v303;) {
      try {
        var v300 = codonTable$$5[matchArray$$2[1].toLowerCase()];
        JAM.call(v300.addCodon, v300, [new Codon(matchArray$$2[2], parseFloat(matchArray$$2[3]), parseFloat(matchArray$$2[4]), parseFloat(matchArray$$2[5]))], JAM.policy.p15);
      } catch (e$$5) {
        alert("There is a problem with a line of the codon table: " + matchArray$$2[1] + " " + matchArray$$2[2] + " " + matchArray$$2[3] + " " + matchArray$$2[4] + " " + matchArray$$2[4]);
        return false;
      }
      v303 = matchArray$$2 = JAM.call(re$$3.exec, re$$3, [tableArray[i$$12]], JAM.policy.p15);
    }
    i$$12++;
    v304 = i$$12 < tableArray.length;
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
  var v327 = codonTable$$5.x;
  var v1117 = new Array(.25, .25, .25, .25);
  v327.baseFreqPosOne = v1117;
  var v328 = codonTable$$5.x;
  var v1118 = new Array(.25, .25, .25, .25);
  v328.baseFreqPosTwo = v1118;
  var v329 = codonTable$$5.x;
  var v1119 = new Array(.25, .25, .25, .25);
  v329.baseFreqPosThree = v1119;
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
  var v1120 = new AminoAcid;
  this.a = v1120;
  var v1121 = new AminoAcid;
  this.c = v1121;
  var v1122 = new AminoAcid;
  this.d = v1122;
  var v1123 = new AminoAcid;
  this.e = v1123;
  var v1124 = new AminoAcid;
  this.f = v1124;
  var v1125 = new AminoAcid;
  this.g = v1125;
  var v1126 = new AminoAcid;
  this.h = v1126;
  var v1127 = new AminoAcid;
  this.i = v1127;
  var v1128 = new AminoAcid;
  this.k = v1128;
  var v1129 = new AminoAcid;
  this.l = v1129;
  var v1130 = new AminoAcid;
  this.m = v1130;
  var v1131 = new AminoAcid;
  this.n = v1131;
  var v1132 = new AminoAcid;
  this.p = v1132;
  var v1133 = new AminoAcid;
  this.q = v1133;
  var v1134 = new AminoAcid;
  this.r = v1134;
  var v1135 = new AminoAcid;
  this.s = v1135;
  var v1136 = new AminoAcid;
  this.t = v1136;
  var v1137 = new AminoAcid;
  this.v = v1137;
  var v1138 = new AminoAcid;
  this.w = v1138;
  var v1139 = new AminoAcid;
  this.y = v1139;
  var v1140 = new AminoAcid;
  this.z = v1140;
  var v1141 = new AminoAcid;
  this.x = v1141;
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
  this.rulerPosOne = JAM.call(this.getRuler, this, [this.baseFreqPosOne[0], markG], JAM.policy.p27) + JAM.call(this.getRuler, this, [this.baseFreqPosOne[1], markA], JAM.policy.p27) + JAM.call(this.getRuler, this, [this.baseFreqPosOne[2], markT], JAM.policy.p27) + JAM.call(this.getRuler, this, [this.baseFreqPosOne[3], markC], JAM.policy.p27);
  this.rulerPosTwo = JAM.call(this.getRuler, this, [this.baseFreqPosTwo[0], markG], JAM.policy.p27) + JAM.call(this.getRuler, this, [this.baseFreqPosTwo[1], markA], JAM.policy.p27) + JAM.call(this.getRuler, this, [this.baseFreqPosTwo[2], markT], JAM.policy.p27) + JAM.call(this.getRuler, this, [this.baseFreqPosTwo[3], markC], JAM.policy.p27);
  this.rulerPosThree = JAM.call(this.getRuler, this, [this.baseFreqPosThree[0], markG], JAM.policy.p27) + JAM.call(this.getRuler, this, [this.baseFreqPosThree[1], markA], JAM.policy.p27) + JAM.call(this.getRuler, this, [this.baseFreqPosThree[2], markT], JAM.policy.p27) + JAM.call(this.getRuler, this, [this.baseFreqPosThree[3], markC], JAM.policy.p27);
  this.setMostCommonCodon();
  this.setDegenCodon();
  return;
}
function getRuler(freq, mark) {
  return JAM.call(mark.substring, mark, [0, 1], JAM.policy.p13) + JAM.call(mark.substring, mark, [0, freq * mark.length], JAM.policy.p13) + " " + JAM.call(freq.toFixed, freq, [2], JAM.policy.p10) + "\n";
}
function addCodon(codon$$1) {
  var v359 = this.codons;
  JAM.call(v359.push, v359, [codon$$1], JAM.policy.p15);
  return;
}
function determineBaseFreq() {
  this.fixFraction();
  var i$$13 = 0;
  var v384 = i$$13 < this.codons.length;
  for (;v384;) {
    var v793 = this.codons[i$$13].sequence;
    if (JAM.call(v793.charAt, v793, [0], JAM.policy.p10) == "g") {
      this.baseFreqPosOne[0] = this.baseFreqPosOne[0] + this.codons[i$$13].fraction;
    } else {
      var v796 = this.codons[i$$13].sequence;
      if (JAM.call(v796.charAt, v796, [0], JAM.policy.p10) == "a") {
        this.baseFreqPosOne[1] = this.baseFreqPosOne[1] + this.codons[i$$13].fraction;
      } else {
        var v799 = this.codons[i$$13].sequence;
        if (JAM.call(v799.charAt, v799, [0], JAM.policy.p10) == "t") {
          this.baseFreqPosOne[2] = this.baseFreqPosOne[2] + this.codons[i$$13].fraction;
        } else {
          var v802 = this.codons[i$$13].sequence;
          if (JAM.call(v802.charAt, v802, [0], JAM.policy.p10) == "c") {
            this.baseFreqPosOne[3] = this.baseFreqPosOne[3] + this.codons[i$$13].fraction;
          }
        }
      }
    }
    var v805 = this.codons[i$$13].sequence;
    if (JAM.call(v805.charAt, v805, [1], JAM.policy.p10) == "g") {
      this.baseFreqPosTwo[0] = this.baseFreqPosTwo[0] + this.codons[i$$13].fraction;
    } else {
      var v808 = this.codons[i$$13].sequence;
      if (JAM.call(v808.charAt, v808, [1], JAM.policy.p10) == "a") {
        this.baseFreqPosTwo[1] = this.baseFreqPosTwo[1] + this.codons[i$$13].fraction;
      } else {
        var v811 = this.codons[i$$13].sequence;
        if (JAM.call(v811.charAt, v811, [1], JAM.policy.p10) == "t") {
          this.baseFreqPosTwo[2] = this.baseFreqPosTwo[2] + this.codons[i$$13].fraction;
        } else {
          var v814 = this.codons[i$$13].sequence;
          if (JAM.call(v814.charAt, v814, [1], JAM.policy.p10) == "c") {
            this.baseFreqPosTwo[3] = this.baseFreqPosTwo[3] + this.codons[i$$13].fraction;
          }
        }
      }
    }
    var v817 = this.codons[i$$13].sequence;
    if (JAM.call(v817.charAt, v817, [2], JAM.policy.p10) == "g") {
      this.baseFreqPosThree[0] = this.baseFreqPosThree[0] + this.codons[i$$13].fraction;
    } else {
      var v820 = this.codons[i$$13].sequence;
      if (JAM.call(v820.charAt, v820, [2], JAM.policy.p10) == "a") {
        this.baseFreqPosThree[1] = this.baseFreqPosThree[1] + this.codons[i$$13].fraction;
      } else {
        var v823 = this.codons[i$$13].sequence;
        if (JAM.call(v823.charAt, v823, [2], JAM.policy.p10) == "t") {
          this.baseFreqPosThree[2] = this.baseFreqPosThree[2] + this.codons[i$$13].fraction;
        } else {
          var v826 = this.codons[i$$13].sequence;
          if (JAM.call(v826.charAt, v826, [2], JAM.policy.p10) == "c") {
            this.baseFreqPosThree[3] = this.baseFreqPosThree[3] + this.codons[i$$13].fraction;
          }
        }
      }
    }
    i$$13++;
    v384 = i$$13 < this.codons.length;
  }
  return true;
}
function fixFraction() {
  var perThouTotal = 0;
  var i$$14 = 0;
  var v386 = i$$14 < this.codons.length;
  for (;v386;) {
    perThouTotal = perThouTotal + this.codons[i$$14].perThou;
    i$$14++;
    v386 = i$$14 < this.codons.length;
  }
  if (perThouTotal == 0) {
    return false;
  }
  i$$14 = 0;
  var v389 = i$$14 < this.codons.length;
  for (;v389;) {
    this.codons[i$$14].fraction = this.codons[i$$14].perThou / perThouTotal;
    i$$14++;
    v389 = i$$14 < this.codons.length;
  }
  return true;
}
function setMostCommonCodon() {
  var highestFraction = 0;
  var highestCodon = "nnn";
  var i$$15 = 0;
  var v393 = i$$15 < this.codons.length;
  for (;v393;) {
    if (this.codons[i$$15].fraction > highestFraction) {
      highestFraction = this.codons[i$$15].fraction;
      highestCodon = this.codons[i$$15].sequence;
    }
    i$$15++;
    v393 = i$$15 < this.codons.length;
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
  var v936 = !g;
  if (v936) {
    v936 = !a;
  }
  var v841 = v936;
  if (v841) {
    v841 = !c;
  }
  var v690 = v841;
  if (v690) {
    v690 = !t;
  }
  if (v690) {
    return "n";
  }
  var v842 = g && a;
  if (v842) {
    v842 = c;
  }
  var v691 = v842;
  if (v691) {
    v691 = t;
  }
  if (v691) {
    return "n";
  } else {
    var v692 = a && c;
    if (v692) {
      v692 = t;
    }
    if (v692) {
      return "h";
    } else {
      var v693 = a && g;
      if (v693) {
        v693 = t;
      }
      if (v693) {
        return "d";
      } else {
        var v694 = c && g;
        if (v694) {
          v694 = t;
        }
        if (v694) {
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
  var v1142 = new Array;
  this.codons = v1142;
  var v1143 = new Array(0, 0, 0, 0);
  this.baseFreqPosOne = v1143;
  var v1144 = new Array(0, 0, 0, 0);
  this.baseFreqPosTwo = v1144;
  var v1145 = new Array(0, 0, 0, 0);
  this.baseFreqPosThree = v1145;
  return;
}
function Codon(sequence$$18, number, perThou, fraction) {
  var v1146 = sequence$$18.toLowerCase();
  this.sequence = v1146;
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
JAM.set(JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p12), "onclick", v6);
JAM.set(JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p12), "onclick", v7)
