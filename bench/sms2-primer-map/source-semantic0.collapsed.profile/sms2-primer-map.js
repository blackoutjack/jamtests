
JAM.startProfile('load');
function v13() {
  document.forms[0].elements[0].value = " ";
  document.forms[1].elements[0].value = " ";
  return;
}
function v12() {
  try {
    primerMap();
  } catch (e$$5) {
    alert("The following error was encountered: " + e$$5);
  }
  return;
}
function v11() {
  document.main_form.main_submit.focus();
  return;
}
function v10(start$$10, stop$$6) {
  function v9(str$$11, p1$$5, offset$$13, s$$7) {
    return JAM.call(p1$$5.replace, p1$$5, [/./g, " "], JAM.policy.p15);
  }
  function v8(str$$10, p1$$4, offset$$12, s$$6) {
    return JAM.call(p1$$4.replace, p1$$4, [/./g, " "], JAM.policy.p15);
  }
  var v18 = outputWindow.document;
  JAM.call(v18.write, v18, [rightNum(this.positionLabel, "", 8, "")], JAM.policy.p16);
  var v533 = this.characters;
  var v20 = JAM.call(v533.slice, v533, [start$$10, stop$$6], JAM.policy.p27);
  var text$$15 = JAM.call(v20.join, v20, [""], JAM.policy.p10);
  text$$15 = JAM.call(text$$15.replace, text$$15, [/^(\d+)/g, v8], JAM.policy.p15);
  text$$15 = JAM.call(text$$15.replace, text$$15, [/(\d+)$/g, v9], JAM.policy.p15);
  var v21 = outputWindow.document;
  JAM.call(v21.write, v21, [text$$15 + "\n"], JAM.policy.p16);
  this.positionLabel = this.positionLabel + (stop$$6 - start$$10);
  return;
}
function v7(start$$9, stop$$5) {
  var v25 = outputWindow.document;
  JAM.call(v25.write, v25, [rightNum(this.positionLabel, "", 8, "")], JAM.policy.p16);
  var v27 = outputWindow.document;
  var v1087 = this.characters;
  var v903 = JAM.call(v1087.slice, v1087, [start$$9, stop$$5], JAM.policy.p27);
  JAM.call(v27.write, v27, [JAM.call(v903.join, v903, [""], JAM.policy.p10) + "\n"], JAM.policy.p16);
  this.positionLabel = this.positionLabel + (stop$$5 - start$$9);
  return;
}
function v6(start$$8, stop$$4) {
  var v904 = this.characters;
  var v536 = JAM.call(v904.slice, v904, [start$$8, stop$$4], JAM.policy.p27);
  var textToWrite = JAM.call(v536.join, v536, [""], JAM.policy.p10) + "\n";
  if (JAM.call(textToWrite.search, textToWrite, [/\w/], JAM.policy.p17) != -1) {
    var v32 = outputWindow.document;
    JAM.call(v32.write, v32, [rightNum(this.positionLabel, "", 8, "")], JAM.policy.p16);
    this.positionLabel = this.positionLabel + JAM.call(textToWrite.match, textToWrite, [/[A-Z]/g], JAM.policy.p17).length;
    var v36 = outputWindow.document;
    JAM.call(v36.write, v36, [textToWrite], JAM.policy.p16);
  }
  return;
}
function v5(start$$7, stop$$3) {
  var v38 = outputWindow.document;
  JAM.call(v38.write, v38, [rightNum(this.positionLabel, "", 8, "")], JAM.policy.p16);
  var v40 = outputWindow.document;
  var v1088 = this.characters;
  var v905 = JAM.call(v1088.slice, v1088, [start$$7, stop$$3], JAM.policy.p27);
  JAM.call(v40.write, v40, [JAM.call(v905.join, v905, [""], JAM.policy.p10) + "\n"], JAM.policy.p16);
  this.positionLabel = this.positionLabel + (stop$$3 - start$$7) / 3;
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
  var v47 = i$$1 < arrayOfTitles.length;
  for (;v47;) {
    var v1219 = arrayOfTitles[i$$1];
    var v906 = JAM.call(v1219.search, v1219, [/\S/], JAM.policy.p17) == -1;
    if (!v906) {
      var v1220 = arrayOfSequences[i$$1];
      v906 = JAM.call(v1220.search, v1220, [/\S/], JAM.policy.p17) == -1;
    }
    var v545 = v906;
    if (!v545) {
      v545 = arrayOfSequences[i$$1].length != lengthOfAlign;
    }
    if (v545) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    v47 = i$$1 < arrayOfTitles.length;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v1221 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p17) == -1;
  if (!v1221) {
    v1221 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p17) == -1;
  }
  var v1093 = v1221;
  if (!v1093) {
    v1093 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p17) == -1;
  }
  var v909 = v1093;
  if (!v909) {
    v909 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p17) == -1;
  }
  var v547 = v909;
  if (!v547) {
    v547 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p17) == -1;
  }
  if (v547) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v912 = formElement.value;
  if (JAM.call(v912.search, v912, [/\S/], JAM.policy.p17) == -1) {
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
  var v52 = z$$2 < arrayOfPatterns.length;
  for (;v52;) {
    var v913 = arrayOfPatterns[z$$2];
    if (JAM.call(v913.search, v913, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p17) == -1) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    if (moreExpressionCheck(arrayOfPatterns[z$$2]) == false) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    v52 = z$$2 < arrayOfPatterns.length;
  }
  var geneticCodeMatchResult = new Array(arrayOfPatterns.length);
  var geneticCodeMatchExp = new Array(arrayOfPatterns.length);
  var j = 0;
  var v58 = j < arrayOfPatterns.length;
  for (;v58;) {
    var v915 = arrayOfPatterns[j];
    var v55 = JAM.call(v915.match, v915, [/\/.+\//], JAM.policy.p17) + "gi";
    if (JAM.isEval(eval)) {
      var v1843 = eval("introspect(JAM.policy.pFull) { " + v55 + " }")
    } else {
      var v1843 = JAM.call(eval, null, [v55])
    }
    geneticCodeMatchExp[j] = v1843;
    var v555 = arrayOfPatterns[j];
    var v1844 = JAM.call(v555.match, v555, [/=[a-zA-Z\*]/], JAM.policy.p17).toString();
    geneticCodeMatchResult[j] = v1844;
    var v57 = geneticCodeMatchResult[j];
    var v1845 = JAM.call(v57.replace, v57, [/=/g, ""], JAM.policy.p15);
    geneticCodeMatchResult[j] = v1845;
    j++;
    v58 = j < arrayOfPatterns.length;
  }
  var i$$2 = 0;
  var v65 = i$$2 <= testSequence.length - 3;
  for (;v65;) {
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, i$$2 + 3], JAM.policy.p15);
    j = 0;
    var v63 = j < geneticCodeMatchExp.length;
    for (;v63;) {
      if (JAM.call(codon.search, codon, [geneticCodeMatchExp[j]], JAM.policy.p16) != -1) {
        if (oneMatch == true) {
          alert("Genetic code error: more than one amino acid is coded by the codon: " + codon + ".");
          return false;
        }
        oneMatch = true;
      }
      j++;
      v63 = j < geneticCodeMatchExp.length;
    }
    if (oneMatch == false) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    v65 = i$$2 <= testSequence.length - 3;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v67 = z$$3 < arrayOfPatterns$$1.length;
  for (;v67;) {
    var v919 = arrayOfPatterns$$1[z$$3];
    if (JAM.call(v919.search, v919, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p17) != -1) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    v67 = z$$3 < arrayOfPatterns$$1.length;
  }
  var i$$3 = 0;
  var v71 = i$$3 < arrayOfPatterns$$1.length;
  for (;v71;) {
    var re = new RegExp("[" + arrayOfPatterns$$1[i$$3] + "]", "gi");
    var j$$1 = i$$3 + 1;
    var v70 = j$$1 < arrayOfPatterns$$1.length;
    for (;v70;) {
      var v921 = arrayOfPatterns$$1[j$$1];
      if (JAM.call(v921.search, v921, [re], JAM.policy.p16) != -1) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      v70 = j$$1 < arrayOfPatterns$$1.length;
    }
    i$$3++;
    v71 = i$$3 < arrayOfPatterns$$1.length;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v74 = z$$4 < arrayOfPatterns$$2.length;
  for (;v74;) {
    var v922 = arrayOfPatterns$$2[z$$4];
    if (JAM.call(v922.search, v922, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p17) == -1) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    if (moreExpressionCheck(arrayOfPatterns$$2[z$$4]) == false) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    v74 = z$$4 < arrayOfPatterns$$2.length;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v1096 = getSequenceFromFasta(text$$7);
  if (JAM.call(v1096.replace, v1096, [/[^A-Za-z]/g, ""], JAM.policy.p15).length > maxInput) {
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
  var v79 = outputWindow.document;
  JAM.call(v79.write, v79, ["</form>"], JAM.policy.p10);
  return true;
}
function closePre() {
  var v80 = outputWindow.document;
  JAM.call(v80.write, v80, ["</div>"], JAM.policy.p10);
  var v81 = outputWindow.document;
  JAM.call(v81.write, v81, ["</pre>\n"], JAM.policy.p10);
  return;
}
function closeTextArea() {
  var v82 = outputWindow.document;
  JAM.call(v82.write, v82, ["</textarea>"], JAM.policy.p10);
  return true;
}
function closeWindow() {
  var v83 = outputWindow.document;
  JAM.call(v83.write, v83, ["</body>\n</html>\n"], JAM.policy.p10);
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
  var v87 = i$$4 < alignArray.length;
  for (;v87;) {
    var v925 = alignArray[i$$4];
    if (JAM.call(v925.search, v925, [/[^\s]+\s/], JAM.policy.p17) == -1) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    v87 = i$$4 < alignArray.length;
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
    var v89 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p16);
    for (;v89;) {
      JAM.call(arrayOfFasta.push, arrayOfFasta, [matchArray[0]], JAM.policy.p16);
      v89 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p16);
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
  stringToReturn = stringToReturn + ' starting "' + JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p14) + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var stringToReturn$$1 = "Search results for " + sequenceOne.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p17) != -1) {
    stringToReturn$$1 = stringToReturn$$1 + '"' + fastaSequenceTitleOne + '"';
  }
  stringToReturn$$1 = stringToReturn$$1 + ' starting "' + JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p14) + '"\n';
  stringToReturn$$1 = stringToReturn$$1 + "and " + sequenceTwo.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p17) != -1) {
    stringToReturn$$1 = stringToReturn$$1 + '"' + fastaSequenceTitleTwo + '"';
  }
  stringToReturn$$1 = stringToReturn$$1 + ' starting "' + JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p14) + '"';
  return '<div class="info">' + stringToReturn$$1 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var geneticCodeMatchExp$$1 = new Array(arrayOfPatterns$$3.length);
  var j$$2 = 0;
  var v106 = j$$2 < arrayOfPatterns$$3.length;
  for (;v106;) {
    var v926 = arrayOfPatterns$$3[j$$2];
    var v105 = JAM.call(v926.match, v926, [/\/.+\//], JAM.policy.p17) + "gi";
    if (JAM.isEval(eval)) {
      var v1846 = eval("introspect(JAM.policy.pFull) { " + v105 + " }")
    } else {
      var v1846 = JAM.call(eval, null, [v105])
    }
    geneticCodeMatchExp$$1[j$$2] = v1846;
    j$$2++;
    v106 = j$$2 < arrayOfPatterns$$3.length;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var geneticCodeMatchResult$$1 = new Array(arrayOfPatterns$$4.length);
  var j$$3 = 0;
  var v110 = j$$3 < arrayOfPatterns$$4.length;
  for (;v110;) {
    var v605 = arrayOfPatterns$$4[j$$3];
    var v1847 = JAM.call(v605.match, v605, [/=[a-zA-Z\*]/], JAM.policy.p17).toString();
    geneticCodeMatchResult$$1[j$$3] = v1847;
    var v109 = geneticCodeMatchResult$$1[j$$3];
    var v1848 = JAM.call(v109.replace, v109, [/=/g, ""], JAM.policy.p15);
    geneticCodeMatchResult$$1[j$$3] = v1848;
    j$$3++;
    v110 = j$$3 < arrayOfPatterns$$4.length;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var stringToReturn$$2 = "Results for " + sequence$$3.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p17) != -1) {
    stringToReturn$$2 = stringToReturn$$2 + '"' + fastaSequenceTitle$$1 + '"';
  }
  stringToReturn$$2 = stringToReturn$$2 + ' starting "' + JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p14) + '"';
  return '<div class="info">' + stringToReturn$$2 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var stringToReturn$$3 = "Results for " + topology + " " + sequence$$4.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p17) != -1) {
    stringToReturn$$3 = stringToReturn$$3 + '"' + fastaSequenceTitle$$2 + '"';
  }
  stringToReturn$$3 = stringToReturn$$3 + ' starting "' + JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p14) + '"';
  return '<div class="info">' + stringToReturn$$3 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var stringToReturn$$4 = "Alignment results for " + sequenceOne$$1.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p17) != -1) {
    stringToReturn$$4 = stringToReturn$$4 + '"' + fastaSequenceTitleOne$$1 + '"';
  }
  stringToReturn$$4 = stringToReturn$$4 + ' starting "' + JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p14) + '"\n';
  stringToReturn$$4 = stringToReturn$$4 + "and " + sequenceTwo$$1.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p17) != -1) {
    stringToReturn$$4 = stringToReturn$$4 + '"' + fastaSequenceTitleTwo$$1 + '"';
  }
  stringToReturn$$4 = stringToReturn$$4 + ' starting "' + JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p14) + '"';
  return '<div class="info">' + stringToReturn$$4 + "</div>\n";
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v131 = j$$4 < lengthOut;
  for (;v131;) {
    tempNum = JAM.call(Math.floor, Math, [Math.random() * components.length], JAM.policy.p17);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p16);
    j$$4++;
    v131 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p10);
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
  var v1552 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p17) != -1;
  if (!v1552) {
    v1552 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p17) != -1;
  }
  var v1521 = v1552;
  if (!v1521) {
    v1521 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p17) != -1;
  }
  var v1488 = v1521;
  if (!v1488) {
    v1488 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p17) != -1;
  }
  var v1441 = v1488;
  if (!v1441) {
    v1441 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p17) != -1;
  }
  var v1378 = v1441;
  if (!v1378) {
    v1378 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p17) != -1;
  }
  var v1314 = v1378;
  if (!v1314) {
    v1314 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p17) != -1;
  }
  var v1224 = v1314;
  if (!v1224) {
    v1224 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p17) != -1;
  }
  var v1097 = v1224;
  if (!v1097) {
    v1097 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p17) != -1;
  }
  var v928 = v1097;
  if (!v928) {
    v928 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p17) != -1;
  }
  var v633 = v928;
  if (!v633) {
    v633 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p17) != -1;
  }
  if (v633) {
    return false;
  }
  return true;
}
function openForm() {
  var v136 = outputWindow.document;
  JAM.call(v136.write, v136, ['<form action="">\n'], JAM.policy.p10);
  return true;
}
function openPre() {
  var v137 = outputWindow.document;
  JAM.call(v137.write, v137, ["<pre>"], JAM.policy.p10);
  var v138 = outputWindow.document;
  JAM.call(v138.write, v138, ['<div class="pre">'], JAM.policy.p10);
  return;
}
function openTextArea() {
  var v139 = outputWindow.document;
  JAM.call(v139.write, v139, ['<br /><textarea rows="6" cols="61">\n'], JAM.policy.p10);
  return true;
}
function openWindow(title$$5) {
  _openWindow(title$$5, true);
  return;
}
function _openWindow(title$$6, isColor) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p13);
  outputWindow.focus();
  var v140 = outputWindow.document;
  JAM.call(v140.write, v140, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n'], JAM.policy.p16);
  if (isColor) {
    var v142 = outputWindow.document;
    JAM.call(v142.write, v142, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; background-color: #66FF00}\n" + 
    "span.two, td.two {color: #000000; background-color: #FFFF66}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n" + "td.many {color: #000000}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + 
    "</style>\n"], JAM.policy.p16);
  } else {
    var v144 = outputWindow.document;
    JAM.call(v144.write, v144, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n" + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "td.many {color: #000000; background-color: #FFFFFF}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"], JAM.policy.p16);
  }
  var v146 = outputWindow.document;
  JAM.call(v146.write, v146, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$6 + " results</div>\n"], JAM.policy.p16);
  outputWindow.status = "Please Wait.";
  return;
}
function openWindowAlign(title$$7) {
  _openWindowAlign(title$$7);
  return;
}
function _openWindowAlign(title$$8) {
  var isBackground = true;
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p13);
  outputWindow.focus();
  var v148 = outputWindow.document;
  JAM.call(v148.write, v148, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n'], JAM.policy.p16);
  if (isBackground) {
    var v150 = outputWindow.document;
    JAM.call(v150.write, v150, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #FFFFFF; background-color: #000000}\n" + "span.sim {color: #FFFFFF; background-color: #666666}\n" + 
    "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n" + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n" + "span.c, span.m {color: #000000; background-color: #FFFF00}\n" + "span.s, span.t {color: #000000; background-color: #66FF00}\n" + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n" + "span.d, span.e {color: #000000; background-color: #0066FF}\n" + "span.n, span.q {color: #000000; background-color: #996633}\n" + "span.p {color: #000000; background-color: #FF99FF}\n" + 
    "</style>\n"], JAM.policy.p16);
  } else {
    var v152 = outputWindow.document;
    JAM.call(v152.write, v152, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n" + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n" + 
    "span.diff {color: #999999; background-color: #FFFFFF}\n" + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n" + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n" + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n" + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n" + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n" + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n" + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n" + 
    "span.p {color: #00FFCC; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"], JAM.policy.p16);
  }
  var v154 = outputWindow.document;
  JAM.call(v154.write, v154, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$8 + " results</div>\n"], JAM.policy.p16);
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
  if (JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p17) != -1) {
    tempDnaArray = JAM.call(dnaSequence$$1.match, dnaSequence$$1, [/./g], JAM.policy.p17);
    tempDnaArray = tempDnaArray.reverse();
    dnaSequence$$1 = JAM.call(tempDnaArray.join, tempDnaArray, [""], JAM.policy.p10);
  }
  return dnaSequence$$1;
}
function rightNum(theNumber, sequenceToAppend, lengthOfColumn, tabIn) {
  var j$$5 = 0;
  var tempString = "";
  theNumber = theNumber.toString();
  j$$5 = theNumber.length;
  var v157 = j$$5 < lengthOfColumn;
  for (;v157;) {
    tempString = tempString + " ";
    j$$5++;
    v157 = j$$5 < lengthOfColumn;
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
  if (JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p11) != 2489.824) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  if (JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p11) != 2489.8) {
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
  var v1108 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p17) == -1;
  if (!v1108) {
    v1108 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p17) == -1;
  }
  var v939 = v1108;
  if (!v939) {
    v939 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p17) == -1;
  }
  var v648 = v939;
  if (!v648) {
    v648 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p17) == -1;
  }
  if (v648) {
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
  var v1111 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p17) == -1;
  if (!v1111) {
    v1111 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p17) == -1;
  }
  var v942 = v1111;
  if (!v942) {
    v942 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p17) == -1;
  }
  var v653 = v942;
  if (!v653) {
    v653 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p17) == -1;
  }
  if (v653) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v1114 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p17) == -1;
  if (!v1114) {
    v1114 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p17) == -1;
  }
  var v945 = v1114;
  if (!v945) {
    v945 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p17) == -1;
  }
  var v654 = v945;
  if (!v654) {
    v654 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p17) == -1;
  }
  if (v654) {
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
  var v1117 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p17) == -1;
  if (!v1117) {
    v1117 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p17) == -1;
  }
  var v948 = v1117;
  if (!v948) {
    v948 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p17) == -1;
  }
  var v656 = v948;
  if (!v656) {
    v656 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p17) == -1;
  }
  if (v656) {
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
  var v184 = i$$5 < stopBase;
  for (;v184;) {
    lineOfText = rightNum(i$$5 + 1, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v181 = j$$6 <= basePerLine / groupSize;
    for (;v181;) {
      var v180 = k < groupSize;
      for (;v180;) {
        lineOfText = lineOfText + JAM.call(text$$10.charAt, text$$10, [k + i$$5], JAM.policy.p16);
        k = k + 1;
        v180 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      v181 = j$$6 <= basePerLine / groupSize;
    }
    var v182 = outputWindow.document;
    JAM.call(v182.write, v182, [lineOfText + "\n"], JAM.policy.p16);
    lineOfText = "";
    v184 = i$$5 < stopBase;
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
    var v661 = adjustment < 0;
    if (v661) {
      v661 = adjusted >= 0;
    }
    if (v661) {
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
  var v216 = i$$6 < stopBase$$2;
  for (;v216;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v192 = j$$7 <= basePerLine$$2 / groupSize$$2;
    for (;v192;) {
      var v188 = k$$1 < groupSize$$2;
      for (;v188;) {
        if (i$$6 + k$$1 >= stopBase$$2) {
          break;
        }
        lineOfText$$1 = lineOfText$$1 + JAM.call(text$$12.charAt, text$$12, [k$$1 + i$$6], JAM.policy.p16);
        k$$1 = k$$1 + 1;
        v188 = k$$1 < groupSize$$2;
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
      v192 = j$$7 <= basePerLine$$2 / groupSize$$2;
    }
    if (numberPosition$$1 == "left") {
      var v193 = outputWindow.document;
      JAM.call(v193.write, v193, [rightNum(adjustNumbering(lineNum, numberingAdjustment), "", 8, tabIn$$3) + lineOfText$$1 + "\n"], JAM.policy.p16);
      if (strands$$1 == "two") {
        var v195 = outputWindow.document;
        JAM.call(v195.write, v195, [rightNum(adjustNumbering(lineNum, numberingAdjustment), "", 8, tabIn$$3) + complement(lineOfText$$1) + "\n"], JAM.policy.p16);
        var v197 = outputWindow.document;
        JAM.call(v197.write, v197, ["\n"], JAM.policy.p10);
      }
    } else {
      if (numberPosition$$1 == "right") {
        var v199 = outputWindow.document;
        JAM.call(v199.write, v199, [lineOfText$$1 + adjustNumbering(i$$6, numberingAdjustment) + "\n"], JAM.policy.p16);
        if (strands$$1 == "two") {
          var v201 = outputWindow.document;
          JAM.call(v201.write, v201, [complement(lineOfText$$1) + adjustNumbering(i$$6, numberingAdjustment) + "\n"], JAM.policy.p16);
          var v203 = outputWindow.document;
          JAM.call(v203.write, v203, ["\n"], JAM.policy.p10);
        }
      } else {
        if (numberPosition$$1 == "above") {
          var v205 = outputWindow.document;
          JAM.call(v205.write, v205, [aboveNum + "\n"], JAM.policy.p16);
          var v207 = outputWindow.document;
          JAM.call(v207.write, v207, [lineOfText$$1 + "\n"], JAM.policy.p16);
          if (strands$$1 == "two") {
            var v209 = outputWindow.document;
            JAM.call(v209.write, v209, [complement(lineOfText$$1) + "\n"], JAM.policy.p16);
            var v211 = outputWindow.document;
            JAM.call(v211.write, v211, ["\n"], JAM.policy.p10);
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v216 = i$$6 < stopBase$$2;
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
  var v235 = i$$7 < stopBase$$3;
  for (;v235;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v223 = j$$8 <= basePerLine$$3 / groupSize$$3;
    for (;v223;) {
      var v219 = k$$2 < groupSize$$3;
      for (;v219;) {
        if (i$$7 + k$$2 >= stopBase$$3) {
          break;
        }
        lineOfText$$2 = lineOfText$$2 + JAM.call(text$$13.charAt, text$$13, [k$$2 + i$$7], JAM.policy.p16);
        k$$2 = k$$2 + 1;
        v219 = k$$2 < groupSize$$3;
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
      v223 = j$$8 <= basePerLine$$3 / groupSize$$3;
    }
    if (numberPosition$$2 == "left") {
      var v224 = outputWindow.document;
      JAM.call(v224.write, v224, [rightNum(lineNum$$1, "", 8, tabIn$$4) + lineOfText$$2 + "\n"], JAM.policy.p16);
    } else {
      if (numberPosition$$2 == "right") {
        var v226 = outputWindow.document;
        JAM.call(v226.write, v226, [lineOfText$$2 + i$$7 + "\n"], JAM.policy.p16);
      } else {
        if (numberPosition$$2 == "above") {
          var v228 = outputWindow.document;
          JAM.call(v228.write, v228, [aboveNum$$1 + "\n"], JAM.policy.p16);
          var v230 = outputWindow.document;
          JAM.call(v230.write, v230, [lineOfText$$2 + "\n"], JAM.policy.p16);
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v235 = i$$7 < stopBase$$3;
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
  var v958 = sequence$$13.length <= firstIndexToMutate;
  if (!v958) {
    v958 = lastIndexToMutate < 0;
  }
  var v678 = v958;
  if (!v678) {
    v678 = lastIndexToMutate <= firstIndexToMutate;
  }
  if (v678) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v244 = i$$8 < numMut;
  for (;v244;) {
    maxNum = sequence$$13.length;
    randNum = JAM.call(Math.floor, Math, [Math.random() * maxNum], JAM.policy.p17);
    var v680 = randNum < firstIndexToMutate;
    if (!v680) {
      v680 = randNum > lastIndexToMutate;
    }
    if (v680) {
      numMut++;
      i$$8++;
      v244 = i$$8 < numMut;
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
    sequence$$13 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p14) + components$$1[componentsIndex] + JAM.call(sequence$$13.substring, sequence$$13, [randNum + 1, sequence$$13.length], JAM.policy.p27);
    i$$8++;
    v244 = i$$8 < numMut;
  }
  var v245 = outputWindow.document;
  JAM.call(v245.write, v245, [addReturns(sequence$$13)], JAM.policy.p16);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v251 = j$$9 < lengthOut$$1;
  for (;v251;) {
    tempNum$$1 = JAM.call(Math.floor, Math, [Math.random() * components$$2.length], JAM.policy.p17);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    if (sequence$$14.length == 60) {
      var v248 = outputWindow.document;
      JAM.call(v248.write, v248, [sequence$$14 + "\n"], JAM.policy.p16);
      sequence$$14 = "";
    }
    j$$9++;
    v251 = j$$9 < lengthOut$$1;
  }
  var v252 = outputWindow.document;
  JAM.call(v252.write, v252, [sequence$$14 + "\n"], JAM.policy.p16);
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
    shiftValue = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p14).length;
    sequence$$15 = JAM.call(sequence$$15.substring, sequence$$15, [sequence$$15.length - lookAhead, sequence$$15.length], JAM.policy.p27) + sequence$$15 + JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p14);
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v258 = outputWindow.document;
  JAM.call(v258.write, v258, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p10);
  var v259 = outputWindow.document;
  JAM.call(v259.write, v259, ['<tr><td class="title" width="200px">' + "Site:" + '</td><td class="title">' + "Positions:" + "</td></tr>\n"], JAM.policy.p16);
  var i$$9 = 0;
  var v276 = i$$9 < arrayOfItems.length;
  for (;v276;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v695 = arrayOfItems[i$$9];
    matchExp = JAM.call(v695.match, v695, [/\/.+\//], JAM.policy.p17) + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    var v1126 = arrayOfItems[i$$9];
    var v696 = JAM.call(v1126.match, v1126, [/\)\D*\d+/], JAM.policy.p17).toString();
    cutDistance = parseFloat(JAM.call(v696.replace, v696, [/\)\D*/, ""], JAM.policy.p15));
    var v268 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p16);
    for (;v268;) {
      matchPosition = matchExp.lastIndex - cutDistance;
      var v697 = matchPosition >= lowerLimit;
      if (v697) {
        v697 = matchPosition < upperLimit;
      }
      if (v697) {
        timesFound++;
        tempString$$1 = tempString$$1 + ", " + (matchPosition - shiftValue + 1);
      }
      matchExp.lastIndex = matchExp.lastIndex - RegExp.lastMatch.length + 1;
      v268 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p16);
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
    var v274 = outputWindow.document;
    var v1385 = '<tr><td class="' + backGroundClass + '">';
    var v1528 = arrayOfItems[i$$9];
    var v1449 = JAM.call(v1528.match, v1528, [/\([^\(]+\)/], JAM.policy.p17).toString();
    JAM.call(v274.write, v274, [v1385 + JAM.call(v1449.replace, v1449, [/\(|\)/g, ""], JAM.policy.p15) + '</td><td class="' + backGroundClass + '">' + tempString$$1 + "</td></tr>\n"], JAM.policy.p16);
    timesFound = 0;
    i$$9++;
    v276 = i$$9 < arrayOfItems.length;
  }
  var v277 = outputWindow.document;
  JAM.call(v277.write, v277, ["</tbody></table>\n"], JAM.policy.p10);
  return;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v278 = outputWindow.document;
  JAM.call(v278.write, v278, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p10);
  var v279 = outputWindow.document;
  JAM.call(v279.write, v279, ['<tr><td class="title">' + "Pattern:" + '</td><td class="title">' + "Times found:" + '</td><td class="title">' + "Percentage:" + "</td></tr>\n"], JAM.policy.p16);
  var i$$10 = 0;
  var v289 = i$$10 < arrayOfItems$$1.length;
  for (;v289;) {
    var tempNumber = 0;
    var v706 = arrayOfItems$$1[i$$10];
    var matchExp$$1 = JAM.call(v706.match, v706, [/\/[^\/]+\//], JAM.policy.p17) + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    if (JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p16) != -1) {
      tempNumber = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p16).length;
    }
    var percentage = 0;
    var v968 = originalLength + 1;
    var v1245 = arrayOfItems$$1[i$$10];
    if (v968 - parseFloat(JAM.call(v1245.match, v1245, [/\d+/], JAM.policy.p17)) > 0) {
      var v284 = 100 * tempNumber;
      var v709 = originalLength + 1;
      var v1130 = arrayOfItems$$1[i$$10];
      percentage = v284 / (v709 - parseFloat(JAM.call(v1130.match, v1130, [/\d+/], JAM.policy.p17)));
    }
    var v287 = outputWindow.document;
    var v1529 = arrayOfItems$$1[i$$10];
    var v1450 = JAM.call(v1529.match, v1529, [/\([^\(]+\)\b/], JAM.policy.p17).toString();
    JAM.call(v287.write, v287, ["<tr><td>" + JAM.call(v1450.replace, v1450, [/\(|\)/g, ""], JAM.policy.p15) + "</td><td>" + tempNumber + "</td><td>" + JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p11) + "</td></tr>\n"], JAM.policy.p16);
    i$$10++;
    v289 = i$$10 < arrayOfItems$$1.length;
  }
  var v290 = outputWindow.document;
  JAM.call(v290.write, v290, ["</tbody></table>\n"], JAM.policy.p10);
  return true;
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v297 = sequence$$17.length > 0;
  for (;v297;) {
    maxNum$$1 = sequence$$17.length;
    randNum$$1 = JAM.call(Math.floor, Math, [Math.random() * maxNum$$1], JAM.policy.p17);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p17);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p14);
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [randNum$$1 + 1, sequence$$17.length], JAM.policy.p15);
    sequence$$17 = tempString1 + tempString2;
    if (tempSeq.length == 60) {
      var v294 = outputWindow.document;
      JAM.call(v294.write, v294, [tempSeq + "\n"], JAM.policy.p16);
      tempSeq = "";
    }
    v297 = sequence$$17.length > 0;
  }
  var v298 = outputWindow.document;
  JAM.call(v298.write, v298, [tempSeq + "\n"], JAM.policy.p16);
  return true;
}
function getRestrictionSiteString() {
  var type$$25 = "standard";
  if (type$$25.toLowerCase() == "standard") {
    return "/aggcct/ (AatI agg|cct)3," + "/gacgtc/ (AatII gacgt|c)1," + "/tgcgca/ (Acc16I tgc|gca)3," + "/cgcg/ (AccII cg|cg)2," + "/tccgga/ (AccIII t|ccgga)5," + "/aacgtt/ (AclI aa|cgtt)4," + "/cacgtg/ (AcvI cac|gtg)3," + "/gtac/ (AfaI gt|ac)2," + "/agcgct/ (AfeI agc|gct)3," + "/cttaag/ (AflII c|ttaag)5," + "/accggt/ (AgeI a|ccggt)5," + "/actagt/ (AhlI a|ctagt)5," + "/gtgcac/ (Alw441 g|tgcac)5," + "/agct/ (AluI ag|ct)2," + "/agcgct/ (Aor51HI agc|gct)3," + "/gggccc/ (ApaI gggcc|c)1," + "/gtgcac/ (ApaLI g|tgcac)5," + 
    "/ggcgcgcc/ (AscI gg|cgcgcc)6," + "/attaat/ (AseI at|taat)4," + "/ggtacc/ (Asp718I g|gtacc)5," + "/ttcgaa/ (AsuII tt|cgaa)4," + "/c[cty]cg[agr]g/ (AvaI c|ycgrg)5," + "/tgcgca/ (AviII tgc|gca)3," + "/cctagg/ (AvrII c|ctagg)5," + "/tggcca/ (BalI tgg|cca)3," + "/ggatcc/ (BamHI g|gatcc)5," + "/atcgat/ (BanIII at|cgat)4," + "/ggcgcc/ (BbeI ggcgc|c)1," + "/cacgtg/ (BbrPI cac|gtg)3," + "/gcatgc/ (BbuI gcatg|c)1," + "/actagt/ (BcuI a|ctagt)5," + "/tgatca/ (BclI t|gatca)5," + "/ctag/ (BfaI c|tag)3," + 
    "/cttaag/ (BfrI c|ttaag)5," + "/atgcat/ (BfrBI atg|cat)3," + "/agatct/ (BglII a|gatct)5," + "/cctagg/ (BlnI c|ctagg)5," + "/atcgat/ (BseCI at|cgat)4," + "/gcgcgc/ (BsePI g|cgcgc)5," + "/cggccg/ (BseX3I c|ggccg)5," + "/accggt/ (BshTI a|ccggt)5," + "/tgtaca/ (Bsp1407I t|gtaca)5," + "/ccatgg/ (Bsp19I c|catgg)5," + "/atcgat/ (BspDI at|cgat)4," + "/tccgga/ (BspEI t|ccgga)5," + "/tgtaca/ (BsrGI t|gtaca)5," + "/gcgcgc/ (BssHII g|cgcgc)5," + "/cgcg/ (BstUI cg|cg)2," + "/atcgat/ (ClaI at|cgat)4," + "/gatc/ (DpnII |gatc)4," + 
    "/tttaaa/ (DraI ttt|aaa)3," + "/cggccg/ (EagI c|ggccg)5," + "/gaattc/ (EcoRI g|aattc)5," + "/gatatc/ (EcoRV gat|atc)3," + "/ggcgcc/ (EgeI ggc|gcc)3," + "/ggccggcc/ (FseI ggccgg|cc)2," + "/tgcgca/ (FspI tgc|gca)3," + "/ggcc/ (HaeIII gg|cc)2," + "/gt[cty][agr]ac/ (HincII gty|rac)3," + "/aagctt/ (HindIII a|agctt)5," + "/ga[acgturyswkmbdhvn]tc/ (HinfI g|antc)4," + "/gttaac/ (HpaI gtt|aac)3," + "/ccgg/ (HpaII c|cgg)3," + "/ggcgcc/ (KasI g|gcgcc)5," + "/ggtacc/ (KpnI ggtac|c)1," + "/[acgturyswkmbdhvn]gatc[acgturyswkmbdhvn]/ (MboI |gatc)5," + 
    "/caattg/ (MfeI c|aattg)5," + "/acgcgt/ (MluI a|cgcgt)5," + "/tggcca/ (MscI tgg|cca)3," + "/ttaa/ (MseI t|taa)3," + "/ccgg/ (MspI c|cgg)3," + "/gccggc/ (NaeI gcc|ggc)3," + "/ggcgcc/ (NarI gg|cgcc)4," + "/ccatgg/ (NcoI c|catgg)5," + "/catatg/ (NdeI ca|tatg)4," + "/gatc/ (NdeII |gatc)4," + "/gccggc/ (NgoMIV g|ccggc)5," + "/gctagc/ (NheI g|ctagc)5," + "/catg/ (NlaIII catg|)0," + "/gcggccgc/ (NotI gc|ggccgc)6," + "/tcgcga/ (NruI tcg|cga)3," + "/atgcat/ (NsiI atgca|t)1," + "/ttaattaa/ (PacI ttaat|taa)3," + 
    "/acatgt/ (PciI a|catgt)5," + "/ggcc/ (PhoI gg|cc)2," + "/gtttaaac/ (PmeI gttt|aaac)4," + "/cacgtg/ (PmlI cac|gtg)3," + "/ttataa/ (PsiI tta|taa)3," + "/ctgcag/ (PstI ctgca|g)1," + "/cgatcg/ (PvuI cgat|cg)2," + "/cagctg/ (PvuII cag|ctg)3," + "/gtac/ (RsaI gt|ac)2," + "/gagctc/ (SacI gagct|c)1," + "/ccgcgg/ (SacII ccgc|gg)2," + "/gtcgac/ (SalI g|tcgac)5," + "/cctgcagg/ (SbfI cctgca|gg)2," + "/agtact/ (ScaI agt|act)3," + "/ggcgcc/ (SfoI ggc|gcc)3," + "/cccggg/ (SmaI ccc|ggg)3," + "/tacgta/ (SnaBI tac|gta)3," + 
    "/actagt/ (SpeI a|ctagt)5," + "/gcatgc/ (SphI gcatg|c)1," + "/aatatt/ (SspI aat|att)3," + "/gagctc/ (SstI gagct|c)1," + "/ccgcgg/ (SstII ccgc|gg)2," + "/aggcct/ (StuI agg|cct)3," + "/atttaaat/ (SwaI attt|aaat)4," + "/tcga/ (TaqI t|cga)3," + "/ctcgag/ (TliI c|tcgag)5," + "/attaat/ (VspI at|taat)4," + "/tctaga/ (XbaI t|ctaga)5," + "/ctcgag/ (XhoI c|tcgag)5," + "/cccggg/ (XmaI c|ccggg)5";
  }
  return true;
}
function getGeneticCodeString(type$$26) {
  var v719 = type$$26.toLowerCase() == "standard";
  if (!v719) {
    v719 = type$$26.toLowerCase() == "transl_table=1";
  }
  if (v719) {
    return "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu]g/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]gg/=W," + "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*";
  }
  if (type$$26.toLowerCase() == "transl_table=2") {
    return "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][tcuy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu][agr]/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + "/[tu]g[agr]/=W," + 
    "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]|ag[agr]/=*";
  }
  if (type$$26.toLowerCase() == "transl_table=3") {
    return "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][tcuy]/=I," + "/aa[agr]/=K," + "/[tu][tu][agr]/=L," + "/a[tu][agr]/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]|c[tu][acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + "/[tu]g[agr]/=W," + 
    "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]/=*";
  }
  if (type$$26.toLowerCase() == "transl_table=4") {
    return "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu]g/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]g[agr]/=W," + "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]/=*";
  }
  if (type$$26.toLowerCase() == "transl_table=5") {
    return "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][tcuy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu][agr]/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]g[agr]/=W," + "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]/=*";
  }
  if (type$$26.toLowerCase() == "transl_table=6") {
    return "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu]g/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]|[tu]a[agr]|[tcuy]a[agr]/=Q," + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]gg/=W," + "/[tu]a[ctuy]/=Y," + "/[tu]ga/=*";
  }
  if (type$$26.toLowerCase() == "transl_table=9") {
    return "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aag/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu]g/=M," + "/aa[atcuwmhy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]g[agr]/=W," + "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]/=*";
  }
  if (type$$26.toLowerCase() == "transl_table=10") {
    return "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[atcuwmhy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu]g/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]gg/=W," + "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]/=*";
  }
  if (type$$26.toLowerCase() == "transl_table=11") {
    return "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu]g/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]gg/=W," + "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*";
  }
  if (type$$26.toLowerCase() == "transl_table=12") {
    return "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aa[agr]/=K," + "/c[tu][atcuwmhy]|[tu][tu][agr]|[ctuy][tu]a/=L," + "/a[tu]g/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]|c[tu]g/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]gg/=W," + "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*";
  }
  if (type$$26.toLowerCase() == "transl_table=13") {
    return "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]|ag[agr]|[agr]g[agr]/=G," + "/ca[tcuy]/=H," + "/a[tu][tcuy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu][agr]/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]g[agr]/=W," + "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]/=*";
  }
  if (type$$26.toLowerCase() == "transl_table=14") {
    return "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aag/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu]g/=M," + "/aa[atcuwmhy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]g[agr]/=W," + "/[tu]a[atcuwmhy]/=Y," + "/[tu]ag/=*";
  }
  if (type$$26.toLowerCase() == "transl_table=15") {
    return "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu]g/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]|[tu]ag|[tcuy]ag/=Q," + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]gg/=W," + "/[tu]a[ctuy]/=Y," + "/[tu][agr]a/=*";
  }
  if (type$$26.toLowerCase() == "transl_table=16") {
    return "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]|[tu]ag|[tu][atuw]g/=L," + "/a[tu]g/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]gg/=W," + "/[tu]a[ctuy]/=Y," + "/[tu][agr]a/=*";
  }
  if (type$$26.toLowerCase() == "transl_table=21") {
    return "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][tcuy]/=I," + "/aag/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu][agr]/=M," + "/aa[atcuwmhy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]g[agr]/=W," + "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]/=*";
  }
  if (type$$26.toLowerCase() == "transl_table=22") {
    return "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]|[tu]ag|[tu][atuw]g/=L," + "/a[tu]g/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," + "/[tu]c[cgtyskb]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]gg/=W," + "/[tu]a[ctuy]/=Y," + "/[tu][agcrsmv]a/=*";
  }
  if (type$$26.toLowerCase() == "transl_table=23") {
    return "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[ctuy][tu]g/=L," + "/a[tu]g/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + "/[tu]gg/=W," + 
    "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]|[tu]ga|[tu][agtrwkd]a/=*";
  }
  return true;
}
function primerMap() {
  var theDocument = document;
  var newDna = "";
  var title$$9 = "";
  var maxInput$$3 = 2E5;
  if (testScript() == false) {
    return;
  }
  var restrictionSiteCollection;
  var forwardMatches;
  var reverseMatches;
  var geneticCode = getGeneticCodeString(theDocument.forms[0].elements[7].options[theDocument.forms[0].elements[7].selectedIndex].value);
  var restrictionSites = getRestrictionSiteString();
  var v755 = checkFormElement(theDocument.forms[0].elements[0]) == false;
  if (!v755) {
    v755 = checkSequenceLength(theDocument.forms[0].elements[0].value, maxInput$$3) == false;
  }
  if (v755) {
    return;
  }
  geneticCode = JAM.call(geneticCode.split, geneticCode, [/,/], JAM.policy.p17);
  if (checkGeneticCode(geneticCode) == false) {
    return;
  }
  restrictionSites = JAM.call(restrictionSites.split, restrictionSites, [/,/], JAM.policy.p17);
  if (checkRestPatterns(restrictionSites) == false) {
    return;
  }
  var isColor$$1;
  if (theDocument.forms[0].elements[10].options[theDocument.forms[0].elements[10].selectedIndex].value == "color") {
    isColor$$1 = true;
  } else {
    isColor$$1 = false;
  }
  var v342 = theDocument.forms[0].elements[1].value;
  var primers = JAM.call(v342.split, v342, [/,/], JAM.policy.p17);
  var newPrimers = new Array;
  var primerSeq;
  var primerRe;
  var primerName;
  var matchArray$$2;
  var re$$3 = /\(([^\(]+)\)\s*([A-Za-z]+)/;
  var i$$11 = 0;
  var v347 = i$$11 < primers.length;
  for (;v347;) {
    if (matchArray$$2 = JAM.call(re$$3.exec, re$$3, [primers[i$$11]], JAM.policy.p16)) {
      primerName = matchArray$$2[1];
      if (matchArray$$2[2].length < 10) {
        alert("Please enter primer sequences that are at least 10 bases long.");
        return;
      }
      primerSeq = matchArray$$2[2];
      var v344 = "/" + convertDegenerates(primerSeq) + "/gi";
      if (JAM.isEval(eval)) {
        primerRe = eval("introspect(JAM.policy.pFull) { " + v344 + " }");
      } else {
        primerRe = JAM.call(eval, null, [v344]);
      }
      JAM.call(newPrimers.push, newPrimers, [new Primer(primerSeq, primerRe, primerName)], JAM.policy.p16);
    }
    i$$11++;
    v347 = i$$11 < primers.length;
  }
  _openWindow("Primer Map", isColor$$1);
  if (theDocument.forms[0].elements[8].options[theDocument.forms[0].elements[8].selectedIndex].value == "shown") {
    var v348 = outputWindow.document;
    JAM.call(v348.write, v348, ['<span class="one">' + "cuts once" + "</span><br />\n"], JAM.policy.p16);
    var v350 = outputWindow.document;
    JAM.call(v350.write, v350, ['<span class="two">' + "cuts twice" + "</span><br />\n"], JAM.policy.p16);
    var v352 = outputWindow.document;
    JAM.call(v352.write, v352, ["\n"], JAM.policy.p10);
    var v353 = outputWindow.document;
    JAM.call(v353.write, v353, ['<span class="forward_primer">' + "&gt;&gt;&gt;forward primer" + "</span><br />\n"], JAM.policy.p16);
    var v355 = outputWindow.document;
    JAM.call(v355.write, v355, ['<span class="reverse_primer">' + "&lt;&lt;&lt;reverse primer" + "</span><br />\n"], JAM.policy.p16);
    var v357 = outputWindow.document;
    JAM.call(v357.write, v357, ["\n"], JAM.policy.p10);
  }
  var arrayOfFasta$$1 = getArrayOfFasta(theDocument.forms[0].elements[0].value);
  i$$11 = 0;
  var v393 = i$$11 < arrayOfFasta$$1.length;
  for (;v393;) {
    newDna = getSequenceFromFasta(arrayOfFasta$$1[i$$11]);
    title$$9 = getTitleFromFasta(arrayOfFasta$$1[i$$11]);
    newDna = removeNonDna(newDna);
    openPre();
    var v362 = outputWindow.document;
    JAM.call(v362.write, v362, [getInfoFromTitleAndSequenceAndTopology(title$$9, newDna, theDocument.forms[0].elements[9].options[theDocument.forms[0].elements[9].selectedIndex].value)], JAM.policy.p16);
    if (theDocument.forms[0].elements[8].options[theDocument.forms[0].elements[8].selectedIndex].value == "shown") {
      restrictionSiteCollection = findRestrictionSites(newDna, restrictionSites, theDocument.forms[0].elements[9].options[theDocument.forms[0].elements[9].selectedIndex].value);
      restrictionSiteCollection.sortRestrictionSites();
    }
    forwardMatches = findMatches(newPrimers, newDna, theDocument.forms[0].elements[9].options[theDocument.forms[0].elements[9].selectedIndex].value, false);
    reverseMatches = findMatches(newPrimers, reverse(complement(newDna)), theDocument.forms[0].elements[9].options[theDocument.forms[0].elements[9].selectedIndex].value, true);
    var j$$10 = 0;
    var v375 = j$$10 < forwardMatches.matches.length;
    for (;v375;) {
      forwardMatches.matches[j$$10].position = forwardMatches.matches[j$$10].position - forwardMatches.matches[j$$10].matchingText.length;
      forwardMatches.matches[j$$10].end = forwardMatches.matches[j$$10].position + forwardMatches.matches[j$$10].matchingText.length;
      if (forwardMatches.matches[j$$10].position < 0) {
        forwardMatches.matches[j$$10].position = forwardMatches.matches[j$$10].position + newDna.length;
      }
      if (forwardMatches.matches[j$$10].end > newDna.length) {
        forwardMatches.matches[j$$10].end = forwardMatches.matches[j$$10].end - newDna.length;
      }
      j$$10++;
      v375 = j$$10 < forwardMatches.matches.length;
    }
    j$$10 = 0;
    var v382 = j$$10 < reverseMatches.matches.length;
    for (;v382;) {
      reverseMatches.matches[j$$10].position = newDna.length - reverseMatches.matches[j$$10].position;
      reverseMatches.matches[j$$10].end = reverseMatches.matches[j$$10].position + reverseMatches.matches[j$$10].matchingText.length;
      if (reverseMatches.matches[j$$10].position < 0) {
        reverseMatches.matches[j$$10].position = reverseMatches.matches[j$$10].position + newDna.length;
      }
      if (reverseMatches.matches[j$$10].end > newDna.length) {
        reverseMatches.matches[j$$10].end = reverseMatches.matches[j$$10].end - newDna.length;
      }
      j$$10++;
      v382 = j$$10 < reverseMatches.matches.length;
    }
    forwardMatches.sortMatches();
    reverseMatches.sortMatches();
    layoutPrimerMap(newDna, geneticCode, restrictionSiteCollection, forwardMatches, reverseMatches, theDocument.forms[0].elements[5].options[theDocument.forms[0].elements[5].selectedIndex].value, theDocument.forms[0].elements[6].options[theDocument.forms[0].elements[6].selectedIndex].value);
    var v385 = outputWindow.document;
    JAM.call(v385.write, v385, ["\n"], JAM.policy.p10);
    closePre();
    if (theDocument.forms[0].elements[8].options[theDocument.forms[0].elements[8].selectedIndex].value == "shown") {
      writeRestrictionSites(newDna, restrictionSites, theDocument.forms[0].elements[9].options[theDocument.forms[0].elements[9].selectedIndex].value);
      var v387 = outputWindow.document;
      JAM.call(v387.write, v387, ["<br />\n"], JAM.policy.p10);
    }
    writePrimerSites(newPrimers);
    var v389 = outputWindow.document;
    JAM.call(v389.write, v389, ["<br />\n<br />\n"], JAM.policy.p10);
    j$$10 = 0;
    var v392 = j$$10 < newPrimers.length;
    for (;v392;) {
      newPrimers[j$$10].hasForwardMatch = false;
      newPrimers[j$$10].hasReverseMatch = false;
      j$$10++;
      v392 = j$$10 < newPrimers.length;
    }
    i$$11++;
    v393 = i$$11 < arrayOfFasta$$1.length;
  }
  closeWindow();
  return;
}
function writePrimerSites(primers$$1) {
  var backGroundClass$$1;
  var v394 = outputWindow.document;
  JAM.call(v394.write, v394, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p10);
  var v395 = outputWindow.document;
  JAM.call(v395.write, v395, ['<tr><td class="title" width="200px">' + "Primer:" + '</td><td class="title">' + "Sequence:" + "</td></tr>\n"], JAM.policy.p16);
  var i$$12 = 0;
  var v402 = i$$12 < primers$$1.length;
  for (;v402;) {
    var v821 = primers$$1[i$$12].hasForwardMatch;
    if (v821) {
      v821 = primers$$1[i$$12].hasReverseMatch;
    }
    if (v821) {
      backGroundClass$$1 = "many";
    } else {
      if (primers$$1[i$$12].hasForwardMatch) {
        backGroundClass$$1 = "forward_primer";
      } else {
        if (primers$$1[i$$12].hasReverseMatch) {
          backGroundClass$$1 = "reverse_primer";
        } else {
          backGroundClass$$1 = "none";
        }
      }
    }
    var v400 = outputWindow.document;
    JAM.call(v400.write, v400, ['<tr><td class="' + backGroundClass$$1 + '">' + primers$$1[i$$12].name + '</td><td class="' + backGroundClass$$1 + '">' + "5'-" + primers$$1[i$$12].sequence + "-3'" + "</td></tr>\n"], JAM.policy.p16);
    i$$12++;
    v402 = i$$12 < primers$$1.length;
  }
  var v403 = outputWindow.document;
  JAM.call(v403.write, v403, ["</tbody></table>\n"], JAM.policy.p10);
  return;
}
function layoutPrimerMap(dnaSequence$$3, geneticCode$$1, restrictionSiteCollection$$1, forwardMatches$$1, reverseMatches$$1, basesPerLine, readingFrame) {
  basesPerLine = parseInt(basesPerLine);
  var geneticCodeMatchExp$$2 = getGeneticCodeMatchExp(geneticCode$$1);
  var geneticCodeMatchResult$$2 = getGeneticCodeMatchResult(geneticCode$$1);
  var spaceString = "                                                                                                                                  ";
  var textLayout = new TextLayout;
  var v826 = readingFrame == "3";
  if (!v826) {
    v826 = readingFrame == "all_three";
  }
  if (v826) {
    var translation = new TranslationComponent;
    JAM.call(translation.setCharacters, translation, ["  " + translate(JAM.call(dnaSequence$$3.substring, dnaSequence$$3, [2, dnaSequence$$3.length], JAM.policy.p14), geneticCodeMatchExp$$2, geneticCodeMatchResult$$2)], JAM.policy.p16);
    JAM.call(textLayout.addComponent, textLayout, [translation], JAM.policy.p16);
  }
  var v828 = readingFrame == "2";
  if (!v828) {
    v828 = readingFrame == "all_three";
  }
  if (v828) {
    translation = new TranslationComponent;
    JAM.call(translation.setCharacters, translation, [" " + translate(JAM.call(dnaSequence$$3.substring, dnaSequence$$3, [1, dnaSequence$$3.length], JAM.policy.p14), geneticCodeMatchExp$$2, geneticCodeMatchResult$$2)], JAM.policy.p16);
    JAM.call(textLayout.addComponent, textLayout, [translation], JAM.policy.p16);
  }
  var v830 = readingFrame == "1";
  if (!v830) {
    v830 = readingFrame == "all_three";
  }
  if (v830) {
    translation = new TranslationComponent;
    JAM.call(translation.setCharacters, translation, [translate(dnaSequence$$3, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2)], JAM.policy.p16);
    JAM.call(textLayout.addComponent, textLayout, [translation], JAM.policy.p16);
  }
  if (readingFrame == "uppercase") {
    translation = new UppercaseTranslationComponent;
    JAM.call(translation.setCharacters, translation, [uppercaseTranslate(dnaSequence$$3, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2)], JAM.policy.p16);
    JAM.call(textLayout.addComponent, textLayout, [translation], JAM.policy.p16);
  }
  var dna = new DnaComponent;
  JAM.call(dna.setCharacters, dna, [dnaSequence$$3], JAM.policy.p16);
  JAM.call(textLayout.addComponent, textLayout, [dna], JAM.policy.p16);
  var ruler = new RulerComponent;
  JAM.call(ruler.setCharacters, ruler, [dnaSequence$$3], JAM.policy.p16);
  ruler.buildRuler();
  JAM.call(textLayout.addComponent, textLayout, [ruler], JAM.policy.p16);
  dna = new DnaComponent;
  JAM.call(dna.setCharacters, dna, [complement(dnaSequence$$3)], JAM.policy.p16);
  JAM.call(textLayout.addComponent, textLayout, [dna], JAM.policy.p16);
  var sitesInRange = new Array;
  var i$$13 = 0;
  var v436 = i$$13 < dnaSequence$$3.length;
  for (;v436;) {
    if (restrictionSiteCollection$$1 != null) {
      sitesInRange = JAM.call(restrictionSiteCollection$$1.getSitesInRange, restrictionSiteCollection$$1, [i$$13, i$$13 + basesPerLine], JAM.policy.p15);
      sitesInRange.reverse();
      var j$$11 = 0;
      var v425 = j$$11 < sitesInRange.length;
      for (;v425;) {
        if (sitesInRange[j$$11].numberOfCuts == 1) {
          var v414 = outputWindow.document;
          JAM.call(v414.write, v414, [JAM.call(spaceString.substring, spaceString, [0, sitesInRange[j$$11].position - i$$13 + 9], JAM.policy.p14) + '<span class="one">' + sitesInRange[j$$11].label + "</span>\n"], JAM.policy.p16);
        } else {
          if (sitesInRange[j$$11].numberOfCuts == 2) {
            var v416 = outputWindow.document;
            JAM.call(v416.write, v416, [JAM.call(spaceString.substring, spaceString, [0, sitesInRange[j$$11].position - i$$13 + 9], JAM.policy.p14) + '<span class="two">' + sitesInRange[j$$11].label + "</span>\n"], JAM.policy.p16);
          } else {
            if (sitesInRange[j$$11].numberOfCuts == 3) {
              var v418 = outputWindow.document;
              JAM.call(v418.write, v418, [JAM.call(spaceString.substring, spaceString, [0, sitesInRange[j$$11].position - i$$13 + 9], JAM.policy.p14) + '<span class="three">' + sitesInRange[j$$11].label + "</span>\n"], JAM.policy.p16);
            } else {
              var v420 = outputWindow.document;
              JAM.call(v420.write, v420, [JAM.call(spaceString.substring, spaceString, [0, sitesInRange[j$$11].position - i$$13 + 9], JAM.policy.p14) + sitesInRange[j$$11].label + "\n"], JAM.policy.p16);
            }
          }
        }
        j$$11++;
        v425 = j$$11 < sitesInRange.length;
      }
    }
    sitesInRange = JAM.call(forwardMatches$$1.getMatchesInRange, forwardMatches$$1, [i$$13, i$$13 + basesPerLine], JAM.policy.p15);
    sitesInRange.reverse();
    j$$11 = 0;
    var v430 = j$$11 < sitesInRange.length;
    for (;v430;) {
      var v428 = outputWindow.document;
      JAM.call(v428.write, v428, [JAM.call(spaceString.substring, spaceString, [0, sitesInRange[j$$11].position - i$$13 + 9], JAM.policy.p14) + '<span class="forward_primer">' + "&gt;&gt;&gt;" + sitesInRange[j$$11].primerName + "&gt;&gt;&gt;" + " " + (sitesInRange[j$$11].position + 1) + " to " + sitesInRange[j$$11].end + "</span>\n"], JAM.policy.p16);
      j$$11++;
      v430 = j$$11 < sitesInRange.length;
    }
    sitesInRange = JAM.call(reverseMatches$$1.getMatchesInRange, reverseMatches$$1, [i$$13, i$$13 + basesPerLine], JAM.policy.p15);
    sitesInRange.reverse();
    j$$11 = 0;
    var v434 = j$$11 < sitesInRange.length;
    for (;v434;) {
      var v432 = outputWindow.document;
      JAM.call(v432.write, v432, [JAM.call(spaceString.substring, spaceString, [0, sitesInRange[j$$11].position - i$$13 + 9], JAM.policy.p14) + '<span class="reverse_primer">' + "&lt;&lt;&lt;" + sitesInRange[j$$11].primerName + "&lt;&lt;&lt;" + " " + (sitesInRange[j$$11].position + 1) + " to " + sitesInRange[j$$11].end + "</span>\n"], JAM.policy.p16);
      j$$11++;
      v434 = j$$11 < sitesInRange.length;
    }
    JAM.call(textLayout.writeLayout, textLayout, [i$$13, i$$13 + basesPerLine], JAM.policy.p15);
    i$$13 = i$$13 + basesPerLine;
    v436 = i$$13 < dnaSequence$$3.length;
  }
  return;
}
function translate(dnaSequence$$4, geneticCodeMatchExp$$3, geneticCodeMatchResult$$3) {
  function v2(str$$8, p1$$2, offset$$10, s$$4) {
    return " " + p1$$2 + " ";
  }
  if (JAM.call(dnaSequence$$4.replace, dnaSequence$$4, [/[^A-Za-z]/g, ""], JAM.policy.p15).length < 3) {
    return "";
  }
  dnaSequence$$4 = JAM.call(dnaSequence$$4.replace, dnaSequence$$4, [/(...)/g, v2], JAM.policy.p15);
  var i$$14 = 0;
  var v441 = i$$14 < geneticCodeMatchExp$$3.length;
  for (;v441;) {
    dnaSequence$$4 = JAM.call(dnaSequence$$4.replace, dnaSequence$$4, [geneticCodeMatchExp$$3[i$$14], geneticCodeMatchResult$$3[i$$14]], JAM.policy.p27);
    i$$14++;
    v441 = i$$14 < geneticCodeMatchExp$$3.length;
  }
  dnaSequence$$4 = JAM.call(dnaSequence$$4.replace, dnaSequence$$4, [/\S{3}/g, "X"], JAM.policy.p15);
  dnaSequence$$4 = JAM.call(dnaSequence$$4.replace, dnaSequence$$4, [/\s\S{1,2}$/, ""], JAM.policy.p15);
  dnaSequence$$4 = JAM.call(dnaSequence$$4.replace, dnaSequence$$4, [/^\s/, ""], JAM.policy.p15);
  return dnaSequence$$4;
}
function uppercaseTranslate(dnaSequence$$5, geneticCodeMatchExp$$4, geneticCodeMatchResult$$4) {
  function v3(str$$9, p1$$3, p2, p3, p4, p5, p6, offset$$11, s$$5) {
    return " " + p1$$3 + p3 + p5 + " " + p2 + p4 + p6;
  }
  dnaSequence$$5 = JAM.call(dnaSequence$$5.replace, dnaSequence$$5, [/[a-z]/g, " "], JAM.policy.p15);
  if (JAM.call(dnaSequence$$5.replace, dnaSequence$$5, [/[^A-Za-z]/g, ""], JAM.policy.p15).length < 3) {
    return "";
  }
  dnaSequence$$5 = JAM.call(dnaSequence$$5.replace, dnaSequence$$5, [/([A-Z])(\s*)([A-Z])(\s*)([A-Z])(\s*)/g, v3], JAM.policy.p15);
  dnaSequence$$5 = JAM.call(dnaSequence$$5.replace, dnaSequence$$5, [/\s\S{1,2}\s/g, ""], JAM.policy.p15);
  var i$$15 = 0;
  var v446 = i$$15 < geneticCodeMatchExp$$4.length;
  for (;v446;) {
    dnaSequence$$5 = JAM.call(dnaSequence$$5.replace, dnaSequence$$5, [geneticCodeMatchExp$$4[i$$15], geneticCodeMatchResult$$4[i$$15]], JAM.policy.p27);
    i$$15++;
    v446 = i$$15 < geneticCodeMatchExp$$4.length;
  }
  dnaSequence$$5 = JAM.call(dnaSequence$$5.replace, dnaSequence$$5, [/\S{3}/g, "X"], JAM.policy.p15);
  dnaSequence$$5 = JAM.call(dnaSequence$$5.replace, dnaSequence$$5, [/^\s/, ""], JAM.policy.p15);
  return dnaSequence$$5;
}
function findRestrictionSites(sequence$$18, arrayOfItems$$2, dnaConformation$$1) {
  var lookAhead$$1 = 50;
  var lowerLimit$$1 = 0;
  var upperLimit$$1 = sequence$$18.length;
  var shiftValue$$1 = 0;
  var cutDistance$$1;
  var matchExp$$2;
  var matchPosition$$1;
  var matchArray$$3;
  var label;
  var timesFound$$1 = 0;
  var tempArray = new Array;
  var restrictionSiteCollection$$2 = new RestrictionSiteCollection;
  if (dnaConformation$$1 == "circular") {
    shiftValue$$1 = JAM.call(sequence$$18.substring, sequence$$18, [0, lookAhead$$1], JAM.policy.p14).length;
    sequence$$18 = JAM.call(sequence$$18.substring, sequence$$18, [sequence$$18.length - lookAhead$$1, sequence$$18.length], JAM.policy.p27) + sequence$$18 + JAM.call(sequence$$18.substring, sequence$$18, [0, lookAhead$$1], JAM.policy.p14);
    lowerLimit$$1 = 0 + shiftValue$$1;
    upperLimit$$1 = upperLimit$$1 + shiftValue$$1;
  }
  var i$$16 = 0;
  var v461 = i$$16 < arrayOfItems$$2.length;
  for (;v461;) {
    var v857 = arrayOfItems$$2[i$$16];
    matchExp$$2 = JAM.call(v857.match, v857, [/\/.+\//], JAM.policy.p17) + "gi";
    matchPosition$$1 = 0;
    if (JAM.isEval(eval)) {
      matchExp$$2 = eval("introspect(JAM.policy.pFull) { " + matchExp$$2 + " }");
    } else {
      matchExp$$2 = JAM.call(eval, null, [matchExp$$2]);
    }
    var v1212 = arrayOfItems$$2[i$$16];
    var v858 = JAM.call(v1212.match, v1212, [/\)\D*\d+/], JAM.policy.p17).toString();
    cutDistance$$1 = parseFloat(JAM.call(v858.replace, v858, [/\)\D*/, ""], JAM.policy.p15));
    var v1069 = arrayOfItems$$2[i$$16];
    var v453 = JAM.call(v1069.match, v1069, [/\([^\(]+\)/], JAM.policy.p17).toString();
    label = JAM.call(v453.replace, v453, [/\(|\)/g, ""], JAM.policy.p15);
    var v457 = matchArray$$3 = JAM.call(matchExp$$2.exec, matchExp$$2, [sequence$$18], JAM.policy.p16);
    for (;v457;) {
      matchPosition$$1 = matchExp$$2.lastIndex;
      matchPosition$$1 = matchPosition$$1 - cutDistance$$1;
      var v860 = matchPosition$$1 >= lowerLimit$$1;
      if (v860) {
        v860 = matchPosition$$1 < upperLimit$$1;
      }
      if (v860) {
        timesFound$$1++;
        JAM.call(tempArray.push, tempArray, [new RestrictionSite(label + " " + (matchPosition$$1 - shiftValue$$1 + 1), matchPosition$$1 - shiftValue$$1)], JAM.policy.p16);
      }
      matchExp$$2.lastIndex = matchExp$$2.lastIndex - RegExp.lastMatch.length + 1;
      v457 = matchArray$$3 = JAM.call(matchExp$$2.exec, matchExp$$2, [sequence$$18], JAM.policy.p16);
    }
    var j$$12 = 0;
    var v460 = j$$12 < tempArray.length;
    for (;v460;) {
      tempArray[j$$12].numberOfCuts = timesFound$$1;
      JAM.call(restrictionSiteCollection$$2.addRestrictionSite, restrictionSiteCollection$$2, [tempArray[j$$12]], JAM.policy.p16);
      j$$12++;
      v460 = j$$12 < tempArray.length;
    }
    timesFound$$1 = 0;
    tempArray = new Array;
    i$$16++;
    v461 = i$$16 < arrayOfItems$$2.length;
  }
  return restrictionSiteCollection$$2;
}
function findMatches(primers$$2, sequence$$19, topology$$1, isReverseStrand) {
  var matchArray$$4;
  var matchPosition$$2;
  var matchCollection = new MatchCollection;
  var re$$4;
  var originalLength$$1 = sequence$$19.length;
  if (topology$$1 == "circular") {
    var lookAhead$$2 = 50;
    var shiftValue$$2 = JAM.call(sequence$$19.substring, sequence$$19, [0, lookAhead$$2], JAM.policy.p14).length;
    var upperLimit$$2 = sequence$$19.length + shiftValue$$2;
    sequence$$19 = JAM.call(sequence$$19.substring, sequence$$19, [sequence$$19.length - lookAhead$$2, sequence$$19.length], JAM.policy.p27) + sequence$$19 + JAM.call(sequence$$19.substring, sequence$$19, [0, lookAhead$$2], JAM.policy.p14);
    var lowerLimit$$2 = 0 + shiftValue$$2;
    var i$$17 = 0;
    var v474 = i$$17 < primers$$2.length;
    for (;v474;) {
      re$$4 = primers$$2[i$$17].re;
      var v473 = matchArray$$4 = JAM.call(re$$4.exec, re$$4, [sequence$$19], JAM.policy.p16);
      for (;v473;) {
        matchPosition$$2 = re$$4.lastIndex;
        var v870 = matchPosition$$2 >= lowerLimit$$2;
        if (v870) {
          v870 = matchPosition$$2 < upperLimit$$2;
        }
        if (v870) {
          matchPosition$$2 = matchPosition$$2 - shiftValue$$2;
          if (matchPosition$$2 == 0) {
            matchPosition$$2 = originalLength$$1;
          }
          JAM.call(matchCollection.addMatch, matchCollection, [new Match(primers$$2[i$$17].name, matchArray$$4[0], matchPosition$$2)], JAM.policy.p16);
          if (isReverseStrand) {
            primers$$2[i$$17].hasReverseMatch = true;
          } else {
            primers$$2[i$$17].hasForwardMatch = true;
          }
        }
        re$$4.lastIndex = re$$4.lastIndex - RegExp.lastMatch.length + 1;
        v473 = matchArray$$4 = JAM.call(re$$4.exec, re$$4, [sequence$$19], JAM.policy.p16);
      }
      i$$17++;
      v474 = i$$17 < primers$$2.length;
    }
  } else {
    i$$17 = 0;
    var v481 = i$$17 < primers$$2.length;
    for (;v481;) {
      re$$4 = primers$$2[i$$17].re;
      var v480 = matchArray$$4 = JAM.call(re$$4.exec, re$$4, [sequence$$19], JAM.policy.p16);
      for (;v480;) {
        matchPosition$$2 = re$$4.lastIndex;
        JAM.call(matchCollection.addMatch, matchCollection, [new Match(primers$$2[i$$17].name, matchArray$$4[0], matchPosition$$2)], JAM.policy.p16);
        if (isReverseStrand) {
          primers$$2[i$$17].hasReverseMatch = true;
        } else {
          primers$$2[i$$17].hasForwardMatch = true;
        }
        re$$4.lastIndex = re$$4.lastIndex - RegExp.lastMatch.length + 1;
        v480 = matchArray$$4 = JAM.call(re$$4.exec, re$$4, [sequence$$19], JAM.policy.p16);
      }
      i$$17++;
      v481 = i$$17 < primers$$2.length;
    }
  }
  return matchCollection;
}
function writeLayout(start$$4, stop) {
  var i$$18 = 0;
  var v484 = i$$18 < this.components.length;
  for (;v484;) {
    var v483 = this.components[i$$18];
    JAM.call(v483.writeLayoutComponent, v483, [start$$4, stop], JAM.policy.p27);
    i$$18++;
    v484 = i$$18 < this.components.length;
  }
  return;
}
function addComponent(component) {
  var v485 = this.components;
  JAM.call(v485.push, v485, [component], JAM.policy.p16);
  return;
}
function TextLayout() {
  var v1849 = new Array;
  this.components = v1849;
  return;
}
function writeLayoutComponent(start$$5, stop$$1) {
  return;
}
function setCharacters(text$$14) {
  if (JAM.call(text$$14.search, text$$14, [/./], JAM.policy.p17) != -1) {
    var v1850 = JAM.call(text$$14.match, text$$14, [/./g], JAM.policy.p17);
    this.characters = v1850;
  }
  return;
}
function isRoom(start$$6, stop$$2) {
  var v487 = this.characters;
  var rangeToCheck = JAM.call(v487.slice, v487, [start$$6, stop$$2], JAM.policy.p27);
  rangeToCheck = JAM.call(rangeToCheck.join, rangeToCheck, [""], JAM.policy.p10);
  if (JAM.call(rangeToCheck.search, rangeToCheck, [/\w/], JAM.policy.p17) == -1) {
    return true;
  } else {
    return false;
  }
  return;
}
function LayoutComponent() {
  var v1851 = new Array;
  this.characters = v1851;
  this.positionLabel = 1;
  return;
}
function TranslationComponent() {
  var v1852 = new Array;
  this.characters = v1852;
  this.positionLabel = 1;
  return;
}
function UppercaseTranslationComponent() {
  var v1853 = new Array;
  this.characters = v1853;
  this.positionLabel = 1;
  return;
}
function DnaComponent() {
  var v1854 = new Array;
  this.characters = v1854;
  this.positionLabel = 1;
  return;
}
function RulerComponent() {
  var v1855 = new Array;
  this.characters = v1855;
  this.positionLabel = 1;
  return;
}
function buildRuler() {
  function v4(str$$12, p1$$6, offset$$14, s$$8) {
    var ruler$$1 = count$$3 + spacing;
    if (count$$3 == 0) {
      ruler$$1 = spacing;
    }
    count$$3 = count$$3 + 10;
    return JAM.call(ruler$$1.substring, ruler$$1, [0, 10], JAM.policy.p14);
  }
  var v490 = this.characters;
  var sequence$$20 = JAM.call(v490.join, v490, [""], JAM.policy.p10);
  var count$$3 = 0;
  var spacing = "         ";
  sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [/(.{1,10})/g, v4], JAM.policy.p15);
  var v1856 = JAM.call(sequence$$20.match, sequence$$20, [/./g], JAM.policy.p17);
  this.characters = v1856;
  return;
}
function RestrictionSite(label$$1, position) {
  this.label = label$$1;
  this.position = position;
  return;
}
function addRestrictionSite(restrictionSite) {
  var v491 = this.restrictionSites;
  JAM.call(v491.push, v491, [restrictionSite], JAM.policy.p16);
  return;
}
function sortRestrictionSites() {
  var v492 = this.restrictionSites;
  JAM.call(v492.sort, v492, [restrictionSiteSorter], JAM.policy.p16);
  return;
}
function getSitesInRange(start$$11, stop$$7) {
  var arrayToReturn = new Array;
  var i$$19 = this.restrictionSites.length - 1;
  var v496 = i$$19 >= 0;
  for (;v496;) {
    var v888 = this.restrictionSites[i$$19].position >= start$$11;
    if (v888) {
      v888 = this.restrictionSites[i$$19].position < stop$$7;
    }
    if (v888) {
      JAM.call(arrayToReturn.push, arrayToReturn, [this.restrictionSites.pop()], JAM.policy.p16);
    } else {
      break;
    }
    i$$19--;
    v496 = i$$19 >= 0;
  }
  return arrayToReturn;
}
function RestrictionSiteCollection() {
  var v1857 = new Array;
  this.restrictionSites = v1857;
  return;
}
function restrictionSiteSorter(a, b) {
  if (a.position < b.position) {
    return 1;
  }
  if (a.position > b.position) {
    return -1;
  } else {
    return 0;
  }
  return;
}
function Primer(sequence$$21, re$$5, name$$30) {
  this.sequence = sequence$$21;
  this.re = re$$5;
  this.name = name$$30;
  this.hasForwardMatch = false;
  this.hasReverseMatch = false;
  return;
}
function Match(primerName$$1, matchingText, position$$1) {
  this.primerName = primerName$$1;
  this.matchingText = matchingText;
  this.position = position$$1;
  return;
}
function addMatch(match) {
  var v499 = this.matches;
  JAM.call(v499.push, v499, [match], JAM.policy.p16);
  return;
}
function sortMatches() {
  var v500 = this.matches;
  JAM.call(v500.sort, v500, [matchSorter], JAM.policy.p16);
  return;
}
function getMatchesInRange(start$$12, stop$$8) {
  var arrayToReturn$$1 = new Array;
  var i$$20 = this.matches.length - 1;
  var v504 = i$$20 >= 0;
  for (;v504;) {
    var v895 = this.matches[i$$20].position >= start$$12;
    if (v895) {
      v895 = this.matches[i$$20].position < stop$$8;
    }
    if (v895) {
      JAM.call(arrayToReturn$$1.push, arrayToReturn$$1, [this.matches.pop()], JAM.policy.p16);
    } else {
      break;
    }
    i$$20--;
    v504 = i$$20 >= 0;
  }
  return arrayToReturn$$1;
}
function MatchCollection() {
  var v1858 = new Array;
  this.matches = v1858;
  return;
}
function matchSorter(a$$1, b$$1) {
  if (a$$1.position < b$$1.position) {
    return 1;
  }
  if (a$$1.position > b$$1.position) {
    return -1;
  } else {
    return 0;
  }
  return;
}
new TextLayout;
TextLayout.prototype.writeLayout = writeLayout;
TextLayout.prototype.addComponent = addComponent;
new LayoutComponent;
LayoutComponent.prototype.writeLayoutComponent = writeLayoutComponent;
LayoutComponent.prototype.setCharacters = setCharacters;
LayoutComponent.prototype.isRoom = isRoom;
var v512 = TranslationComponent;
var v1859 = new LayoutComponent;
v512.prototype = v1859;
TranslationComponent.prototype.writeLayoutComponent = v5;
var v514 = UppercaseTranslationComponent;
var v1860 = new LayoutComponent;
v514.prototype = v1860;
UppercaseTranslationComponent.prototype.writeLayoutComponent = v6;
var v516 = DnaComponent;
var v1861 = new LayoutComponent;
v516.prototype = v1861;
DnaComponent.prototype.writeLayoutComponent = v7;
var v518 = RulerComponent;
var v1862 = new LayoutComponent;
v518.prototype = v1862;
RulerComponent.prototype.writeLayoutComponent = v10;
new RulerComponent;
RulerComponent.prototype.buildRuler = buildRuler;
new RestrictionSiteCollection;
RestrictionSiteCollection.prototype.addRestrictionSite = addRestrictionSite;
RestrictionSiteCollection.prototype.sortRestrictionSites = sortRestrictionSites;
RestrictionSiteCollection.prototype.getSitesInRange = getSitesInRange;
new MatchCollection;
MatchCollection.prototype.addMatch = addMatch;
MatchCollection.prototype.sortMatches = sortMatches;
MatchCollection.prototype.getMatchesInRange = getMatchesInRange;
JAM.set(document, "onload", v11);
JAM.set(JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p10), "onclick", v12);
JAM.set(JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p10), "onclick", v13)

JAM.stopProfile('load');
