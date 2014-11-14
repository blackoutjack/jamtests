
JAM.startProfile('load');
function v9() {
  document.forms[0].elements[0].value = " ";
  document.forms[0].elements[4].value = " ";
  return;
}
function v8() {
  try {
    mutateForDigest(document);
  } catch (e$$5) {
    alert("The following error was encountered: " + e$$5);
  }
  return;
}
function v7() {
  document.main_form.main_submit.focus();
  return;
}
function v6(start$$9, stop$$5) {
  var v14 = outputWindow.document;
  JAM.call(v14.write, v14, [rightNum(this.positionLabel, "", 8, "")], JAM.policy.p15);
  var v16 = outputWindow.document;
  JAM.call(v16.write, v16, [this.spanStart], JAM.policy.p15);
  var v18 = outputWindow.document;
  var v840 = this.characters;
  var v494 = JAM.call(v840.slice, v840, [start$$9, stop$$5], JAM.policy.p21);
  JAM.call(v18.write, v18, [JAM.call(v494.join, v494, [""], JAM.policy.p11)], JAM.policy.p15);
  var v20 = outputWindow.document;
  JAM.call(v20.write, v20, [this.spanEnd + "\n"], JAM.policy.p15);
  this.positionLabel = this.positionLabel + (stop$$5 - start$$9);
  return;
}
function v5(start$$8, stop$$4) {
  var v496 = this.characters;
  var v24 = JAM.call(v496.slice, v496, [start$$8, stop$$4], JAM.policy.p21);
  var textToWrite = JAM.call(v24.join, v24, [""], JAM.policy.p11);
  if (JAM.call(textToWrite.search, textToWrite, [/\w/], JAM.policy.p17) != -1) {
    var v25 = outputWindow.document;
    JAM.call(v25.write, v25, [rightNum(this.positionLabel, "", 8, "")], JAM.policy.p15);
    var v27 = outputWindow.document;
    JAM.call(v27.write, v27, [this.spanStart], JAM.policy.p15);
    this.positionLabel = this.positionLabel + JAM.call(textToWrite.match, textToWrite, [/[A-Z]/g], JAM.policy.p17).length;
    var v31 = outputWindow.document;
    JAM.call(v31.write, v31, [textToWrite], JAM.policy.p15);
    var v32 = outputWindow.document;
    JAM.call(v32.write, v32, [this.spanEnd + "\n"], JAM.policy.p15);
  }
  return;
}
function v4(start$$7, stop$$3) {
  var v35 = outputWindow.document;
  JAM.call(v35.write, v35, [rightNum(this.positionLabel, "", 8, "")], JAM.policy.p15);
  var v37 = outputWindow.document;
  JAM.call(v37.write, v37, [this.spanStart], JAM.policy.p15);
  var v39 = outputWindow.document;
  var v841 = this.characters;
  var v502 = JAM.call(v841.slice, v841, [start$$7, stop$$3], JAM.policy.p21);
  JAM.call(v39.write, v39, [JAM.call(v502.join, v502, [""], JAM.policy.p11)], JAM.policy.p15);
  var v41 = outputWindow.document;
  JAM.call(v41.write, v41, [this.spanEnd + "\n"], JAM.policy.p15);
  this.positionLabel = this.positionLabel + (stop$$3 - start$$7) / 3;
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
  var v48 = i$$1 < arrayOfTitles.length;
  for (;v48;) {
    var v1091 = arrayOfTitles[i$$1];
    var v842 = JAM.call(v1091.search, v1091, [/\S/], JAM.policy.p17) == -1;
    if (!v842) {
      var v1092 = arrayOfSequences[i$$1];
      v842 = JAM.call(v1092.search, v1092, [/\S/], JAM.policy.p17) == -1;
    }
    var v507 = v842;
    if (!v507) {
      v507 = arrayOfSequences[i$$1].length != lengthOfAlign;
    }
    if (v507) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    v48 = i$$1 < arrayOfTitles.length;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v1093 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p17) == -1;
  if (!v1093) {
    v1093 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p17) == -1;
  }
  var v1002 = v1093;
  if (!v1002) {
    v1002 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p17) == -1;
  }
  var v845 = v1002;
  if (!v845) {
    v845 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p17) == -1;
  }
  var v509 = v845;
  if (!v509) {
    v509 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p17) == -1;
  }
  if (v509) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v848 = formElement.value;
  if (JAM.call(v848.search, v848, [/\S/], JAM.policy.p17) == -1) {
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
  var v53 = z$$2 < arrayOfPatterns.length;
  for (;v53;) {
    var v849 = arrayOfPatterns[z$$2];
    if (JAM.call(v849.search, v849, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p17) == -1) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    if (moreExpressionCheck(arrayOfPatterns[z$$2]) == false) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    v53 = z$$2 < arrayOfPatterns.length;
  }
  var geneticCodeMatchResult = new Array(arrayOfPatterns.length);
  var geneticCodeMatchExp = new Array(arrayOfPatterns.length);
  var j = 0;
  var v59 = j < arrayOfPatterns.length;
  for (;v59;) {
    var v851 = arrayOfPatterns[j];
    var v56 = JAM.call(v851.match, v851, [/\/.+\//], JAM.policy.p17) + "gi";
    if (JAM.isEval(eval)) {
      var v1500 = eval("introspect(JAM.policy.pFull) { " + v56 + " }")
    } else {
      var v1500 = JAM.call(eval, null, [v56])
    }
    geneticCodeMatchExp[j] = v1500;
    var v517 = arrayOfPatterns[j];
    var v1501 = JAM.call(v517.match, v517, [/=[a-zA-Z\*]/], JAM.policy.p17).toString();
    geneticCodeMatchResult[j] = v1501;
    var v58 = geneticCodeMatchResult[j];
    var v1502 = JAM.call(v58.replace, v58, [/=/g, ""], JAM.policy.p16);
    geneticCodeMatchResult[j] = v1502;
    j++;
    v59 = j < arrayOfPatterns.length;
  }
  var i$$2 = 0;
  var v66 = i$$2 <= testSequence.length - 3;
  for (;v66;) {
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, i$$2 + 3], JAM.policy.p16);
    j = 0;
    var v64 = j < geneticCodeMatchExp.length;
    for (;v64;) {
      if (JAM.call(codon.search, codon, [geneticCodeMatchExp[j]], JAM.policy.p15) != -1) {
        if (oneMatch == true) {
          alert("Genetic code error: more than one amino acid is coded by the codon: " + codon + ".");
          return false;
        }
        oneMatch = true;
      }
      j++;
      v64 = j < geneticCodeMatchExp.length;
    }
    if (oneMatch == false) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    v66 = i$$2 <= testSequence.length - 3;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v68 = z$$3 < arrayOfPatterns$$1.length;
  for (;v68;) {
    var v855 = arrayOfPatterns$$1[z$$3];
    if (JAM.call(v855.search, v855, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p17) != -1) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    v68 = z$$3 < arrayOfPatterns$$1.length;
  }
  var i$$3 = 0;
  var v72 = i$$3 < arrayOfPatterns$$1.length;
  for (;v72;) {
    var re = new RegExp("[" + arrayOfPatterns$$1[i$$3] + "]", "gi");
    var j$$1 = i$$3 + 1;
    var v71 = j$$1 < arrayOfPatterns$$1.length;
    for (;v71;) {
      var v857 = arrayOfPatterns$$1[j$$1];
      if (JAM.call(v857.search, v857, [re], JAM.policy.p15) != -1) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      v71 = j$$1 < arrayOfPatterns$$1.length;
    }
    i$$3++;
    v72 = i$$3 < arrayOfPatterns$$1.length;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v75 = z$$4 < arrayOfPatterns$$2.length;
  for (;v75;) {
    var v858 = arrayOfPatterns$$2[z$$4];
    if (JAM.call(v858.search, v858, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p17) == -1) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    if (moreExpressionCheck(arrayOfPatterns$$2[z$$4]) == false) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    v75 = z$$4 < arrayOfPatterns$$2.length;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v1005 = getSequenceFromFasta(text$$7);
  if (JAM.call(v1005.replace, v1005, [/[^A-Za-z]/g, ""], JAM.policy.p16).length > maxInput) {
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
  var v80 = outputWindow.document;
  JAM.call(v80.write, v80, ["</form>"], JAM.policy.p11);
  return true;
}
function closePre() {
  var v81 = outputWindow.document;
  JAM.call(v81.write, v81, ["</div>"], JAM.policy.p11);
  var v82 = outputWindow.document;
  JAM.call(v82.write, v82, ["</pre>\n"], JAM.policy.p11);
  return;
}
function closeTextArea() {
  var v83 = outputWindow.document;
  JAM.call(v83.write, v83, ["</textarea>"], JAM.policy.p11);
  return true;
}
function closeWindow() {
  var v84 = outputWindow.document;
  JAM.call(v84.write, v84, ["</body>\n</html>\n"], JAM.policy.p11);
  outputWindow.status = "Done.";
  outputWindow.document.close();
  return true;
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
  var v88 = i$$4 < alignArray.length;
  for (;v88;) {
    var v861 = alignArray[i$$4];
    if (JAM.call(v861.search, v861, [/[^\s]+\s/], JAM.policy.p17) == -1) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    v88 = i$$4 < alignArray.length;
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
    var v90 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p15);
    for (;v90;) {
      JAM.call(arrayOfFasta.push, arrayOfFasta, [matchArray[0]], JAM.policy.p15);
      v90 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p15);
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
  return'<div class="info">' + stringToReturn$$1 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var geneticCodeMatchExp$$1 = new Array(arrayOfPatterns$$3.length);
  var j$$2 = 0;
  var v107 = j$$2 < arrayOfPatterns$$3.length;
  for (;v107;) {
    var v862 = arrayOfPatterns$$3[j$$2];
    var v106 = JAM.call(v862.match, v862, [/\/.+\//], JAM.policy.p17) + "gi";
    if (JAM.isEval(eval)) {
      var v1503 = eval("introspect(JAM.policy.pFull) { " + v106 + " }")
    } else {
      var v1503 = JAM.call(eval, null, [v106])
    }
    geneticCodeMatchExp$$1[j$$2] = v1503;
    j$$2++;
    v107 = j$$2 < arrayOfPatterns$$3.length;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var geneticCodeMatchResult$$1 = new Array(arrayOfPatterns$$4.length);
  var j$$3 = 0;
  var v111 = j$$3 < arrayOfPatterns$$4.length;
  for (;v111;) {
    var v567 = arrayOfPatterns$$4[j$$3];
    var v1504 = JAM.call(v567.match, v567, [/=[a-zA-Z\*]/], JAM.policy.p17).toString();
    geneticCodeMatchResult$$1[j$$3] = v1504;
    var v110 = geneticCodeMatchResult$$1[j$$3];
    var v1505 = JAM.call(v110.replace, v110, [/=/g, ""], JAM.policy.p16);
    geneticCodeMatchResult$$1[j$$3] = v1505;
    j$$3++;
    v111 = j$$3 < arrayOfPatterns$$4.length;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var stringToReturn$$2 = "Results for " + sequence$$3.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p17) != -1) {
    stringToReturn$$2 = stringToReturn$$2 + '"' + fastaSequenceTitle$$1 + '"';
  }
  stringToReturn$$2 = stringToReturn$$2 + ' starting "' + JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p13) + '"';
  return'<div class="info">' + stringToReturn$$2 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var stringToReturn$$3 = "Results for " + topology + " " + sequence$$4.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p17) != -1) {
    stringToReturn$$3 = stringToReturn$$3 + '"' + fastaSequenceTitle$$2 + '"';
  }
  stringToReturn$$3 = stringToReturn$$3 + ' starting "' + JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p13) + '"';
  return'<div class="info">' + stringToReturn$$3 + "</div>\n";
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
  return'<div class="info">' + stringToReturn$$4 + "</div>\n";
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v132 = j$$4 < lengthOut;
  for (;v132;) {
    tempNum = JAM.call(Math.floor, Math, [Math.random() * components.length], JAM.policy.p17);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p15);
    j$$4++;
    v132 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p11);
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
  var v1318 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p17) != -1;
  if (!v1318) {
    v1318 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p17) != -1;
  }
  var v1292 = v1318;
  if (!v1292) {
    v1292 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p17) != -1;
  }
  var v1266 = v1292;
  if (!v1266) {
    v1266 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p17) != -1;
  }
  var v1236 = v1266;
  if (!v1236) {
    v1236 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p17) != -1;
  }
  var v1199 = v1236;
  if (!v1199) {
    v1199 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p17) != -1;
  }
  var v1157 = v1199;
  if (!v1157) {
    v1157 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p17) != -1;
  }
  var v1096 = v1157;
  if (!v1096) {
    v1096 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p17) != -1;
  }
  var v1006 = v1096;
  if (!v1006) {
    v1006 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p17) != -1;
  }
  var v864 = v1006;
  if (!v864) {
    v864 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p17) != -1;
  }
  var v595 = v864;
  if (!v595) {
    v595 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p17) != -1;
  }
  if (v595) {
    return false;
  }
  return true;
}
function openForm() {
  var v137 = outputWindow.document;
  JAM.call(v137.write, v137, ['<form action="">\n'], JAM.policy.p11);
  return true;
}
function openPre() {
  var v138 = outputWindow.document;
  JAM.call(v138.write, v138, ["<pre>"], JAM.policy.p11);
  var v139 = outputWindow.document;
  JAM.call(v139.write, v139, ['<div class="pre">'], JAM.policy.p11);
  return;
}
function openTextArea() {
  var v140 = outputWindow.document;
  JAM.call(v140.write, v140, ['<br /><textarea rows="6" cols="61">\n'], JAM.policy.p11);
  return true;
}
function openWindow(title$$5) {
  _openWindow(title$$5, true);
  return;
}
function _openWindow(title$$6, isColor) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  outputWindow.focus();
  var v141 = outputWindow.document;
  JAM.call(v141.write, v141, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n'], JAM.policy.p15);
  if (isColor) {
    var v143 = outputWindow.document;
    JAM.call(v143.write, v143, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; background-color: #66FF00}\n" + 
    "span.two, td.two {color: #000000; background-color: #FFFF66}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n" + "td.many {color: #000000}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + 
    "</style>\n"], JAM.policy.p15);
  } else {
    var v145 = outputWindow.document;
    JAM.call(v145.write, v145, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n" + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "td.many {color: #000000; background-color: #FFFFFF}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"], JAM.policy.p15);
  }
  var v147 = outputWindow.document;
  JAM.call(v147.write, v147, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$6 + " results</div>\n"], JAM.policy.p15);
  outputWindow.status = "Please Wait.";
  return true;
}
function openWindowAlign(title$$7) {
  _openWindowAlign(title$$7, true);
  return;
}
function _openWindowAlign(title$$8, isBackground) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  outputWindow.focus();
  var v149 = outputWindow.document;
  JAM.call(v149.write, v149, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n'], JAM.policy.p15);
  if (isBackground) {
    var v151 = outputWindow.document;
    JAM.call(v151.write, v151, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #FFFFFF; background-color: #000000}\n" + "span.sim {color: #FFFFFF; background-color: #666666}\n" + 
    "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n" + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n" + "span.c, span.m {color: #000000; background-color: #FFFF00}\n" + "span.s, span.t {color: #000000; background-color: #66FF00}\n" + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n" + "span.d, span.e {color: #000000; background-color: #0066FF}\n" + "span.n, span.q {color: #000000; background-color: #996633}\n" + "span.p {color: #000000; background-color: #FF99FF}\n" + 
    "</style>\n"], JAM.policy.p15);
  } else {
    var v153 = outputWindow.document;
    JAM.call(v153.write, v153, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n" + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n" + 
    "span.diff {color: #999999; background-color: #FFFFFF}\n" + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n" + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n" + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n" + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n" + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n" + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n" + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n" + 
    "span.p {color: #00FFCC; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"], JAM.policy.p15);
  }
  var v155 = outputWindow.document;
  JAM.call(v155.write, v155, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$8 + " results</div>\n"], JAM.policy.p15);
  outputWindow.status = "Please Wait.";
  return true;
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
    dnaSequence$$1 = JAM.call(tempDnaArray.join, tempDnaArray, [""], JAM.policy.p11);
  }
  return dnaSequence$$1;
}
function rightNum(theNumber, sequenceToAppend, lengthOfColumn, tabIn) {
  var j$$5 = 0;
  var tempString = "";
  theNumber = theNumber.toString();
  j$$5 = theNumber.length;
  var v158 = j$$5 < lengthOfColumn;
  for (;v158;) {
    tempString = tempString + " ";
    j$$5++;
    v158 = j$$5 < lengthOfColumn;
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
  if (JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p17) == -1) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v1017 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p17) == -1;
  if (!v1017) {
    v1017 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p17) == -1;
  }
  var v875 = v1017;
  if (!v875) {
    v875 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p17) == -1;
  }
  var v610 = v875;
  if (!v610) {
    v610 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p17) == -1;
  }
  if (v610) {
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
  var v1020 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p17) == -1;
  if (!v1020) {
    v1020 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p17) == -1;
  }
  var v878 = v1020;
  if (!v878) {
    v878 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p17) == -1;
  }
  var v615 = v878;
  if (!v615) {
    v615 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p17) == -1;
  }
  if (v615) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v1023 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p17) == -1;
  if (!v1023) {
    v1023 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p17) == -1;
  }
  var v881 = v1023;
  if (!v881) {
    v881 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p17) == -1;
  }
  var v616 = v881;
  if (!v616) {
    v616 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p17) == -1;
  }
  if (v616) {
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
  var v1026 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p17) == -1;
  if (!v1026) {
    v1026 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p17) == -1;
  }
  var v884 = v1026;
  if (!v884) {
    v884 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p17) == -1;
  }
  var v618 = v884;
  if (!v618) {
    v618 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p17) == -1;
  }
  if (v618) {
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
  var v185 = i$$5 < stopBase;
  for (;v185;) {
    lineOfText = rightNum(i$$5 + 1, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v182 = j$$6 <= basePerLine / groupSize;
    for (;v182;) {
      var v181 = k < groupSize;
      for (;v181;) {
        lineOfText = lineOfText + JAM.call(text$$10.charAt, text$$10, [k + i$$5], JAM.policy.p15);
        k = k + 1;
        v181 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      v182 = j$$6 <= basePerLine / groupSize;
    }
    var v183 = outputWindow.document;
    JAM.call(v183.write, v183, [lineOfText + "\n"], JAM.policy.p15);
    lineOfText = "";
    v185 = i$$5 < stopBase;
  }
  return true;
}
function writeGroupNumDna(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition) {
  JAM.call(writeGroupNumDnaSetStart, null, [text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition, 0], JAM.policy.p19);
  return true;
}
function writeGroupNumDnaSetStart(text$$12, tabIn$$3, groupSize$$2, basePerLine$$2, startBase$$2, stopBase$$2, strands$$1, numberPosition$$1, numberingAdjustment) {
  function adjustNumbering(original, adjustment) {
    var adjusted = original + adjustment;
    var v623 = adjustment < 0;
    if (v623) {
      v623 = adjusted >= 0;
    }
    if (v623) {
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
  var v219 = i$$6 < stopBase$$2;
  for (;v219;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v195 = j$$7 <= basePerLine$$2 / groupSize$$2;
    for (;v195;) {
      var v190 = k$$1 < groupSize$$2;
      for (;v190;) {
        if (i$$6 + k$$1 >= stopBase$$2) {
          break;
        }
        lineOfText$$1 = lineOfText$$1 + JAM.call(text$$12.charAt, text$$12, [k$$1 + i$$6], JAM.policy.p15);
        k$$1 = k$$1 + 1;
        v190 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      if (numberPosition$$1 == "above") {
        aboveNum = aboveNum + rightNum(JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p19), "", groupSize$$2, tabIn$$3);
      }
      if (i$$6 >= stopBase$$2) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      v195 = j$$7 <= basePerLine$$2 / groupSize$$2;
    }
    if (numberPosition$$1 == "left") {
      var v196 = outputWindow.document;
      JAM.call(v196.write, v196, [rightNum(JAM.call(adjustNumbering, null, [lineNum, numberingAdjustment], JAM.policy.p19), "", 8, tabIn$$3) + lineOfText$$1 + "\n"], JAM.policy.p15);
      if (strands$$1 == "two") {
        var v198 = outputWindow.document;
        JAM.call(v198.write, v198, [rightNum(JAM.call(adjustNumbering, null, [lineNum, numberingAdjustment], JAM.policy.p19), "", 8, tabIn$$3) + complement(lineOfText$$1) + "\n"], JAM.policy.p15);
        var v200 = outputWindow.document;
        JAM.call(v200.write, v200, ["\n"], JAM.policy.p11);
      }
    } else {
      if (numberPosition$$1 == "right") {
        var v202 = outputWindow.document;
        JAM.call(v202.write, v202, [lineOfText$$1 + JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p19) + "\n"], JAM.policy.p15);
        if (strands$$1 == "two") {
          var v204 = outputWindow.document;
          JAM.call(v204.write, v204, [complement(lineOfText$$1) + JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p19) + "\n"], JAM.policy.p15);
          var v206 = outputWindow.document;
          JAM.call(v206.write, v206, ["\n"], JAM.policy.p11);
        }
      } else {
        if (numberPosition$$1 == "above") {
          var v208 = outputWindow.document;
          JAM.call(v208.write, v208, [aboveNum + "\n"], JAM.policy.p15);
          var v210 = outputWindow.document;
          JAM.call(v210.write, v210, [lineOfText$$1 + "\n"], JAM.policy.p15);
          if (strands$$1 == "two") {
            var v212 = outputWindow.document;
            JAM.call(v212.write, v212, [complement(lineOfText$$1) + "\n"], JAM.policy.p15);
            var v214 = outputWindow.document;
            JAM.call(v214.write, v214, ["\n"], JAM.policy.p11);
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v219 = i$$6 < stopBase$$2;
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
  var v238 = i$$7 < stopBase$$3;
  for (;v238;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v226 = j$$8 <= basePerLine$$3 / groupSize$$3;
    for (;v226;) {
      var v222 = k$$2 < groupSize$$3;
      for (;v222;) {
        if (i$$7 + k$$2 >= stopBase$$3) {
          break;
        }
        lineOfText$$2 = lineOfText$$2 + JAM.call(text$$13.charAt, text$$13, [k$$2 + i$$7], JAM.policy.p15);
        k$$2 = k$$2 + 1;
        v222 = k$$2 < groupSize$$3;
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
      v226 = j$$8 <= basePerLine$$3 / groupSize$$3;
    }
    if (numberPosition$$2 == "left") {
      var v227 = outputWindow.document;
      JAM.call(v227.write, v227, [rightNum(lineNum$$1, "", 8, tabIn$$4) + lineOfText$$2 + "\n"], JAM.policy.p15);
    } else {
      if (numberPosition$$2 == "right") {
        var v229 = outputWindow.document;
        JAM.call(v229.write, v229, [lineOfText$$2 + i$$7 + "\n"], JAM.policy.p15);
      } else {
        if (numberPosition$$2 == "above") {
          var v231 = outputWindow.document;
          JAM.call(v231.write, v231, [aboveNum$$1 + "\n"], JAM.policy.p15);
          var v233 = outputWindow.document;
          JAM.call(v233.write, v233, [lineOfText$$2 + "\n"], JAM.policy.p15);
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v238 = i$$7 < stopBase$$3;
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
  var v895 = sequence$$13.length <= firstIndexToMutate;
  if (!v895) {
    v895 = lastIndexToMutate < 0;
  }
  var v640 = v895;
  if (!v640) {
    v640 = lastIndexToMutate <= firstIndexToMutate;
  }
  if (v640) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v247 = i$$8 < numMut;
  for (;v247;) {
    maxNum = sequence$$13.length;
    randNum = JAM.call(Math.floor, Math, [Math.random() * maxNum], JAM.policy.p17);
    var v642 = randNum < firstIndexToMutate;
    if (!v642) {
      v642 = randNum > lastIndexToMutate;
    }
    if (v642) {
      numMut++;
      i$$8++;
      v247 = i$$8 < numMut;
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
    sequence$$13 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p13) + components$$1[componentsIndex] + JAM.call(sequence$$13.substring, sequence$$13, [randNum + 1, sequence$$13.length], JAM.policy.p21);
    i$$8++;
    v247 = i$$8 < numMut;
  }
  var v248 = outputWindow.document;
  JAM.call(v248.write, v248, [addReturns(sequence$$13)], JAM.policy.p15);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v254 = j$$9 < lengthOut$$1;
  for (;v254;) {
    tempNum$$1 = JAM.call(Math.floor, Math, [Math.random() * components$$2.length], JAM.policy.p17);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    if (sequence$$14.length == 60) {
      var v251 = outputWindow.document;
      JAM.call(v251.write, v251, [sequence$$14 + "\n"], JAM.policy.p15);
      sequence$$14 = "";
    }
    j$$9++;
    v254 = j$$9 < lengthOut$$1;
  }
  var v255 = outputWindow.document;
  JAM.call(v255.write, v255, [sequence$$14 + "\n"], JAM.policy.p15);
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
  var v261 = outputWindow.document;
  JAM.call(v261.write, v261, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p11);
  var v262 = outputWindow.document;
  JAM.call(v262.write, v262, ['<tr><td class="title" width="200px">' + "Site:" + '</td><td class="title">' + "Positions:" + "</td></tr>\n"], JAM.policy.p15);
  var i$$9 = 0;
  var v279 = i$$9 < arrayOfItems.length;
  for (;v279;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v657 = arrayOfItems[i$$9];
    matchExp = JAM.call(v657.match, v657, [/\/.+\//], JAM.policy.p17) + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    var v1035 = arrayOfItems[i$$9];
    var v658 = JAM.call(v1035.match, v1035, [/\)\D*\d+/], JAM.policy.p17).toString();
    cutDistance = parseFloat(JAM.call(v658.replace, v658, [/\)\D*/, ""], JAM.policy.p16));
    var v271 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p15);
    for (;v271;) {
      matchPosition = matchExp.lastIndex - cutDistance;
      var v659 = matchPosition >= lowerLimit;
      if (v659) {
        v659 = matchPosition < upperLimit;
      }
      if (v659) {
        timesFound++;
        tempString$$1 = tempString$$1 + ", " + (matchPosition - shiftValue + 1);
      }
      matchExp.lastIndex = matchExp.lastIndex - RegExp.lastMatch.length + 1;
      v271 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p15);
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
    var v277 = outputWindow.document;
    var v1206 = '<tr><td class="' + backGroundClass + '">';
    var v1299 = arrayOfItems[i$$9];
    var v1244 = JAM.call(v1299.match, v1299, [/\([^\(]+\)/], JAM.policy.p17).toString();
    JAM.call(v277.write, v277, [v1206 + JAM.call(v1244.replace, v1244, [/\(|\)/g, ""], JAM.policy.p16) + '</td><td class="' + backGroundClass + '">' + tempString$$1 + "</td></tr>\n"], JAM.policy.p15);
    timesFound = 0;
    i$$9++;
    v279 = i$$9 < arrayOfItems.length;
  }
  var v280 = outputWindow.document;
  JAM.call(v280.write, v280, ["</tbody></table>\n"], JAM.policy.p11);
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v281 = outputWindow.document;
  JAM.call(v281.write, v281, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p11);
  var v282 = outputWindow.document;
  JAM.call(v282.write, v282, ['<tr><td class="title">' + "Pattern:" + '</td><td class="title">' + "Times found:" + '</td><td class="title">' + "Percentage:" + "</td></tr>\n"], JAM.policy.p15);
  var i$$10 = 0;
  var v292 = i$$10 < arrayOfItems$$1.length;
  for (;v292;) {
    var tempNumber = 0;
    var v668 = arrayOfItems$$1[i$$10];
    var matchExp$$1 = JAM.call(v668.match, v668, [/\/[^\/]+\//], JAM.policy.p17) + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    if (JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p15) != -1) {
      tempNumber = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p15).length;
    }
    var percentage = 0;
    var v905 = originalLength + 1;
    var v1117 = arrayOfItems$$1[i$$10];
    if (v905 - parseFloat(JAM.call(v1117.match, v1117, [/\d+/], JAM.policy.p17)) > 0) {
      var v287 = 100 * tempNumber;
      var v671 = originalLength + 1;
      var v1039 = arrayOfItems$$1[i$$10];
      percentage = v287 / (v671 - parseFloat(JAM.call(v1039.match, v1039, [/\d+/], JAM.policy.p17)));
    }
    var v290 = outputWindow.document;
    var v1300 = arrayOfItems$$1[i$$10];
    var v1245 = JAM.call(v1300.match, v1300, [/\([^\(]+\)\b/], JAM.policy.p17).toString();
    JAM.call(v290.write, v290, ["<tr><td>" + JAM.call(v1245.replace, v1245, [/\(|\)/g, ""], JAM.policy.p16) + "</td><td>" + tempNumber + "</td><td>" + JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p12) + "</td></tr>\n"], JAM.policy.p15);
    i$$10++;
    v292 = i$$10 < arrayOfItems$$1.length;
  }
  var v293 = outputWindow.document;
  JAM.call(v293.write, v293, ["</tbody></table>\n"], JAM.policy.p11);
  return true;
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v300 = sequence$$17.length > 0;
  for (;v300;) {
    maxNum$$1 = sequence$$17.length;
    randNum$$1 = JAM.call(Math.floor, Math, [Math.random() * maxNum$$1], JAM.policy.p17);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p17);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p13);
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [randNum$$1 + 1, sequence$$17.length], JAM.policy.p16);
    sequence$$17 = tempString1 + tempString2;
    if (tempSeq.length == 60) {
      var v297 = outputWindow.document;
      JAM.call(v297.write, v297, [tempSeq + "\n"], JAM.policy.p15);
      tempSeq = "";
    }
    v300 = sequence$$17.length > 0;
  }
  var v301 = outputWindow.document;
  JAM.call(v301.write, v301, [tempSeq + "\n"], JAM.policy.p15);
  return true;
}
function getGeneticCodeString(type$$25) {
  var v679 = type$$25.toLowerCase() == "standard";
  if (!v679) {
    v679 = type$$25.toLowerCase() == "transl_table=1";
  }
  if (v679) {
    return "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu]g/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]gg/=W," + "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*";
  }
  if (type$$25.toLowerCase() == "transl_table=2") {
    return "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][tcuy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu][agr]/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + "/[tu]g[agr]/=W," + 
    "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]|ag[agr]/=*";
  }
  if (type$$25.toLowerCase() == "transl_table=3") {
    return "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][tcuy]/=I," + "/aa[agr]/=K," + "/[tu][tu][agr]/=L," + "/a[tu][agr]/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]|c[tu][acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + "/[tu]g[agr]/=W," + 
    "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]/=*";
  }
  if (type$$25.toLowerCase() == "transl_table=4") {
    return "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu]g/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]g[agr]/=W," + "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]/=*";
  }
  if (type$$25.toLowerCase() == "transl_table=5") {
    return "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][tcuy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu][agr]/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]g[agr]/=W," + "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]/=*";
  }
  if (type$$25.toLowerCase() == "transl_table=6") {
    return "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu]g/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]|[tu]a[agr]|[tcuy]a[agr]/=Q," + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]gg/=W," + "/[tu]a[ctuy]/=Y," + "/[tu]ga/=*";
  }
  if (type$$25.toLowerCase() == "transl_table=9") {
    return "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aag/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu]g/=M," + "/aa[atcuwmhy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]g[agr]/=W," + "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]/=*";
  }
  if (type$$25.toLowerCase() == "transl_table=10") {
    return "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[atcuwmhy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu]g/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]gg/=W," + "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]/=*";
  }
  if (type$$25.toLowerCase() == "transl_table=11") {
    return "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu]g/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]gg/=W," + "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*";
  }
  if (type$$25.toLowerCase() == "transl_table=12") {
    return "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aa[agr]/=K," + "/c[tu][atcuwmhy]|[tu][tu][agr]|[ctuy][tu]a/=L," + "/a[tu]g/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]|c[tu]g/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]gg/=W," + "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*";
  }
  if (type$$25.toLowerCase() == "transl_table=13") {
    return "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]|ag[agr]|[agr]g[agr]/=G," + "/ca[tcuy]/=H," + "/a[tu][tcuy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu][agr]/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]g[agr]/=W," + "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]/=*";
  }
  if (type$$25.toLowerCase() == "transl_table=14") {
    return "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aag/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu]g/=M," + "/aa[atcuwmhy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]g[agr]/=W," + "/[tu]a[atcuwmhy]/=Y," + "/[tu]ag/=*";
  }
  if (type$$25.toLowerCase() == "transl_table=15") {
    return "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu]g/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]|[tu]ag|[tcuy]ag/=Q," + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]gg/=W," + "/[tu]a[ctuy]/=Y," + "/[tu][agr]a/=*";
  }
  if (type$$25.toLowerCase() == "transl_table=16") {
    return "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]|[tu]ag|[tu][atuw]g/=L," + "/a[tu]g/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]gg/=W," + "/[tu]a[ctuy]/=Y," + "/[tu][agr]a/=*";
  }
  if (type$$25.toLowerCase() == "transl_table=21") {
    return "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][tcuy]/=I," + "/aag/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L," + "/a[tu][agr]/=M," + "/aa[atcuwmhy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]g[agr]/=W," + "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]/=*";
  }
  if (type$$25.toLowerCase() == "transl_table=22") {
    return "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]|[tu]ag|[tu][atuw]g/=L," + "/a[tu]g/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," + "/[tu]c[cgtyskb]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + 
    "/[tu]gg/=W," + "/[tu]a[ctuy]/=Y," + "/[tu][agcrsmv]a/=*";
  }
  if (type$$25.toLowerCase() == "transl_table=23") {
    return "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C," + "/ga[tcuy]/=D," + "/ga[agr]/=E," + "/[tu][tu][tcuy]/=F," + "/gg[acgturyswkmbdhvn]/=G," + "/ca[tcuy]/=H," + "/a[tu][atcuwmhy]/=I," + "/aa[agr]/=K," + "/c[tu][acgturyswkmbdhvn]|[ctuy][tu]g/=L," + "/a[tu]g/=M," + "/aa[tucy]/=N," + "/cc[acgturyswkmbdhvn]/=P," + "/ca[agr]/=Q," + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R," + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S," + "/ac[acgturyswkmbdhvn]/=T," + "/g[tu][acgturyswkmbdhvn]/=V," + "/[tu]gg/=W," + 
    "/[tu]a[ctuy]/=Y," + "/[tu]a[agr]|[tu]ga|[tu][agtrwkd]a/=*";
  }
  return true;
}
function mutateForDigest(theDocument) {
  JAM.startProfile('compute');

  var newDna = "";
  var mutatedDna = "";
  var title$$9 = "";
  var maxInput$$3 = 1E4;
  var TOPOLOGY = "linear";
  if (testScript() == false) {
    return false;
  }
  var restrictionSiteCollection;
  var mutatedRestrictionSitesCollection;
  var geneticCode = getGeneticCodeString(theDocument.forms[0].elements[7].options[theDocument.forms[0].elements[7].selectedIndex].value);
  var restrictionSites = theDocument.forms[0].elements[4].options[theDocument.forms[0].elements[4].selectedIndex].value;
  var v717 = checkFormElement(theDocument.forms[0].elements[0]) == false;
  if (!v717) {
    v717 = JAM.call(checkSequenceLength, null, [theDocument.forms[0].elements[0].value, maxInput$$3], JAM.policy.p19) == false;
  }
  if (v717) {
    return false;
  }
  geneticCode = JAM.call(geneticCode.split, geneticCode, [/,/], JAM.policy.p17);
  if (checkGeneticCode(geneticCode) == false) {
    return false;
  }
  restrictionSites = JAM.call(restrictionSites.split, restrictionSites, [/,/], JAM.policy.p17);
  if (checkRestPatterns(restrictionSites) == false) {
    return false;
  }
  var mutatedRestrictionSites = buildMutatedRestrictionSites(restrictionSites);
  openWindow("Mutate for Digest");
  openPre();
  var v343 = outputWindow.document;
  JAM.call(v343.write, v343, ['<span class="mutated_sequence">' + "sequence and translations for mutated version" + "</span>\n"], JAM.policy.p15);
  var v345 = outputWindow.document;
  JAM.call(v345.write, v345, ['<span class="current_sequence">' + "sequence and translations for non-mutated version" + "</span>\n"], JAM.policy.p15);
  var v347 = outputWindow.document;
  JAM.call(v347.write, v347, ["\n"], JAM.policy.p11);
  var arrayOfFasta$$1 = getArrayOfFasta(theDocument.forms[0].elements[0].value);
  var i$$11 = 0;
  var v356 = i$$11 < arrayOfFasta$$1.length;
  for (;v356;) {
    newDna = getSequenceFromFasta(arrayOfFasta$$1[i$$11]);
    title$$9 = getTitleFromFasta(arrayOfFasta$$1[i$$11]);
    newDna = removeNonDna(newDna);
    var v351 = outputWindow.document;
    JAM.call(v351.write, v351, [JAM.call(getInfoFromTitleAndSequenceAndTopology, null, [title$$9, newDna, TOPOLOGY], JAM.policy.p19)], JAM.policy.p15);
    restrictionSiteCollection = JAM.call(findRestrictionSites, null, [newDna, restrictionSites, TOPOLOGY], JAM.policy.p19);
    restrictionSiteCollection.sortRestrictionSites();
    mutatedRestrictionSiteCollection = JAM.call(findRestrictionSites, null, [newDna, mutatedRestrictionSites, TOPOLOGY], JAM.policy.p19);
    mutatedRestrictionSiteCollection = JAM.call(removeNormalMatchesFromMutantSites, null, [mutatedRestrictionSiteCollection, restrictionSiteCollection], JAM.policy.p19);
    mutatedRestrictionSiteCollection = removeOverlappingMatchesFromMutantSites(mutatedRestrictionSiteCollection);
    mutatedDna = JAM.call(buildMutatedDna, null, [newDna, mutatedRestrictionSiteCollection], JAM.policy.p19);
    JAM.call(layoutRestTrans, null, [newDna, mutatedDna, geneticCode, restrictionSiteCollection, mutatedRestrictionSiteCollection, theDocument.forms[0].elements[5].options[theDocument.forms[0].elements[5].selectedIndex].value, theDocument.forms[0].elements[6].options[theDocument.forms[0].elements[6].selectedIndex].value], JAM.policy.p19);
    var v355 = outputWindow.document;
    JAM.call(v355.write, v355, ["\n\n"], JAM.policy.p11);
    i$$11++;
    v356 = i$$11 < arrayOfFasta$$1.length;
  }
  closePre();
  closeWindow();

  JAM.stopProfile('compute');
  return true;
}
function layoutRestTrans(dnaSequence$$3, mutatedDnaSequence, geneticCode$$1, restrictionSiteCollection$$1, mutatedRestrictionSiteCollection$$1, basesPerLine, readingFrame) {
  basesPerLine = parseInt(basesPerLine);
  var geneticCodeMatchExp$$2 = getGeneticCodeMatchExp(geneticCode$$1);
  var geneticCodeMatchResult$$2 = getGeneticCodeMatchResult(geneticCode$$1);
  var spaceString = "                                                                                                                                  ";
  var textLayout = new TextLayout;
  var v727 = readingFrame == "3";
  if (!v727) {
    v727 = readingFrame == "all_three";
  }
  if (v727) {
    var translationMut = new TranslationComponent;
    translationMut.spanStart = '<span class="mutated_sequence">';
    translationMut.spanEnd = "</span>";
    JAM.call(translationMut.setCharacters, translationMut, ["  " + JAM.call(translate, null, [JAM.call(mutatedDnaSequence.substring, mutatedDnaSequence, [2, dnaSequence$$3.length], JAM.policy.p13), geneticCodeMatchExp$$2, geneticCodeMatchResult$$2], JAM.policy.p19)], JAM.policy.p15);
    JAM.call(textLayout.addComponent, textLayout, [translationMut], JAM.policy.p15);
    var translation = new TranslationComponent;
    translation.spanStart = '<span class="current_sequence">';
    translation.spanEnd = "</span>";
    JAM.call(translation.setCharacters, translation, ["  " + JAM.call(translate, null, [JAM.call(dnaSequence$$3.substring, dnaSequence$$3, [2, dnaSequence$$3.length], JAM.policy.p13), geneticCodeMatchExp$$2, geneticCodeMatchResult$$2], JAM.policy.p19)], JAM.policy.p15);
    JAM.call(textLayout.addComponent, textLayout, [translation], JAM.policy.p15);
  }
  var v730 = readingFrame == "2";
  if (!v730) {
    v730 = readingFrame == "all_three";
  }
  if (v730) {
    translationMut = new TranslationComponent;
    translationMut.spanStart = '<span class="mutated_sequence">';
    translationMut.spanEnd = "</span>";
    JAM.call(translationMut.setCharacters, translationMut, [" " + JAM.call(translate, null, [JAM.call(mutatedDnaSequence.substring, mutatedDnaSequence, [1, dnaSequence$$3.length], JAM.policy.p13), geneticCodeMatchExp$$2, geneticCodeMatchResult$$2], JAM.policy.p19)], JAM.policy.p15);
    JAM.call(textLayout.addComponent, textLayout, [translationMut], JAM.policy.p15);
    translation = new TranslationComponent;
    translation.spanStart = '<span class="current_sequence">';
    translation.spanEnd = "</span>";
    JAM.call(translation.setCharacters, translation, [" " + JAM.call(translate, null, [JAM.call(dnaSequence$$3.substring, dnaSequence$$3, [1, dnaSequence$$3.length], JAM.policy.p13), geneticCodeMatchExp$$2, geneticCodeMatchResult$$2], JAM.policy.p19)], JAM.policy.p15);
    JAM.call(textLayout.addComponent, textLayout, [translation], JAM.policy.p15);
  }
  var v733 = readingFrame == "1";
  if (!v733) {
    v733 = readingFrame == "all_three";
  }
  if (v733) {
    translationMut = new TranslationComponent;
    translationMut.spanStart = '<span class="mutated_sequence">';
    translationMut.spanEnd = "</span>";
    JAM.call(translationMut.setCharacters, translationMut, [JAM.call(translate, null, [mutatedDnaSequence, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2], JAM.policy.p19)], JAM.policy.p15);
    JAM.call(textLayout.addComponent, textLayout, [translationMut], JAM.policy.p15);
    translation = new TranslationComponent;
    translation.spanStart = '<span class="current_sequence">';
    translation.spanEnd = "</span>";
    JAM.call(translation.setCharacters, translation, [JAM.call(translate, null, [dnaSequence$$3, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2], JAM.policy.p19)], JAM.policy.p15);
    JAM.call(textLayout.addComponent, textLayout, [translation], JAM.policy.p15);
  }
  if (readingFrame == "uppercase") {
    translationMut = new UppercaseTranslationComponent;
    translationMut.spanStart = '<span class="mutated_sequence">';
    translationMut.spanEnd = "</span>";
    JAM.call(translationMut.setCharacters, translationMut, [JAM.call(uppercaseTranslate, null, [mutatedDnaSequence, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2], JAM.policy.p19)], JAM.policy.p15);
    JAM.call(textLayout.addComponent, textLayout, [translationMut], JAM.policy.p15);
    translation = new UppercaseTranslationComponent;
    translation.spanStart = '<span class="current_sequence">';
    translation.spanEnd = "</span>";
    JAM.call(translation.setCharacters, translation, [JAM.call(uppercaseTranslate, null, [dnaSequence$$3, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2], JAM.policy.p19)], JAM.policy.p15);
    JAM.call(textLayout.addComponent, textLayout, [translation], JAM.policy.p15);
  }
  var dnaMut = new DnaComponent;
  dnaMut.spanStart = '<span class="mutated_sequence">';
  dnaMut.spanEnd = "</span>";
  JAM.call(dnaMut.setCharacters, dnaMut, [mutatedDnaSequence], JAM.policy.p15);
  JAM.call(textLayout.addComponent, textLayout, [dnaMut], JAM.policy.p15);
  var dna = new DnaComponent;
  dna.spanStart = '<span class="current_sequence">';
  dna.spanEnd = "</span>";
  JAM.call(dna.setCharacters, dna, [dnaSequence$$3], JAM.policy.p15);
  JAM.call(textLayout.addComponent, textLayout, [dna], JAM.policy.p15);
  var sitesInRange = new Array;
  var sitesInRangeMut = new Array;
  var i$$12 = 0;
  var v378 = i$$12 < dnaSequence$$3.length;
  for (;v378;) {
    sitesInRange = JAM.call(restrictionSiteCollection$$1.getSitesInRange, restrictionSiteCollection$$1, [i$$12, i$$12 + basesPerLine], JAM.policy.p16);
    sitesInRangeMut = JAM.call(mutatedRestrictionSiteCollection$$1.getSitesInRange, mutatedRestrictionSiteCollection$$1, [i$$12, i$$12 + basesPerLine], JAM.policy.p16);
    sitesInRange.reverse();
    sitesInRangeMut.reverse();
    var j$$10 = 0;
    var v373 = j$$10 < sitesInRangeMut.length;
    for (;v373;) {
      var v371 = outputWindow.document;
      JAM.call(v371.write, v371, [JAM.call(spaceString.substring, spaceString, [0, sitesInRangeMut[j$$10].position - i$$12 + 9], JAM.policy.p13) + '<span class="mutated_sequence">' + sitesInRangeMut[j$$10].label + "</span>\n"], JAM.policy.p15);
      j$$10++;
      v373 = j$$10 < sitesInRangeMut.length;
    }
    j$$10 = 0;
    var v376 = j$$10 < sitesInRange.length;
    for (;v376;) {
      var v374 = outputWindow.document;
      JAM.call(v374.write, v374, [JAM.call(spaceString.substring, spaceString, [0, sitesInRange[j$$10].position - i$$12 + 9], JAM.policy.p13) + '<span class="current_sequence">' + sitesInRange[j$$10].label + "</span>\n"], JAM.policy.p15);
      j$$10++;
      v376 = j$$10 < sitesInRange.length;
    }
    JAM.call(textLayout.writeLayout, textLayout, [i$$12, i$$12 + basesPerLine], JAM.policy.p16);
    i$$12 = i$$12 + basesPerLine;
    v378 = i$$12 < dnaSequence$$3.length;
  }
  return true;
}
function translate(dnaSequence$$4, geneticCodeMatchExp$$3, geneticCodeMatchResult$$3) {
  function v2(str$$8, p1$$2, offset$$10, s$$4) {
    return " " + p1$$2 + " ";
  }
  if (JAM.call(dnaSequence$$4.replace, dnaSequence$$4, [/[^A-Za-z]/g, ""], JAM.policy.p16).length < 3) {
    return "";
  }
  dnaSequence$$4 = JAM.call(dnaSequence$$4.replace, dnaSequence$$4, [/(...)/g, v2], JAM.policy.p16);
  var i$$13 = 0;
  var v383 = i$$13 < geneticCodeMatchExp$$3.length;
  for (;v383;) {
    dnaSequence$$4 = JAM.call(dnaSequence$$4.replace, dnaSequence$$4, [geneticCodeMatchExp$$3[i$$13], geneticCodeMatchResult$$3[i$$13]], JAM.policy.p21);
    i$$13++;
    v383 = i$$13 < geneticCodeMatchExp$$3.length;
  }
  dnaSequence$$4 = JAM.call(dnaSequence$$4.replace, dnaSequence$$4, [/\S{3}/g, "X"], JAM.policy.p16);
  dnaSequence$$4 = JAM.call(dnaSequence$$4.replace, dnaSequence$$4, [/\s\S{1,2}$/, ""], JAM.policy.p16);
  dnaSequence$$4 = JAM.call(dnaSequence$$4.replace, dnaSequence$$4, [/^\s/, ""], JAM.policy.p16);
  return dnaSequence$$4;
}
function uppercaseTranslate(dnaSequence$$5, geneticCodeMatchExp$$4, geneticCodeMatchResult$$4) {
  function v3(str$$9, p1$$3, p2, p3, p4, p5, p6, offset$$11, s$$5) {
    return " " + p1$$3 + p3 + p5 + " " + p2 + p4 + p6;
  }
  dnaSequence$$5 = JAM.call(dnaSequence$$5.replace, dnaSequence$$5, [/[a-z]/g, " "], JAM.policy.p16);
  if (JAM.call(dnaSequence$$5.replace, dnaSequence$$5, [/[^A-Za-z]/g, ""], JAM.policy.p16).length < 3) {
    return "";
  }
  dnaSequence$$5 = JAM.call(dnaSequence$$5.replace, dnaSequence$$5, [/([A-Z])(\s*)([A-Z])(\s*)([A-Z])(\s*)/g, v3], JAM.policy.p16);
  dnaSequence$$5 = JAM.call(dnaSequence$$5.replace, dnaSequence$$5, [/\s\S{1,2}\s/g, ""], JAM.policy.p16);
  var i$$14 = 0;
  var v388 = i$$14 < geneticCodeMatchExp$$4.length;
  for (;v388;) {
    dnaSequence$$5 = JAM.call(dnaSequence$$5.replace, dnaSequence$$5, [geneticCodeMatchExp$$4[i$$14], geneticCodeMatchResult$$4[i$$14]], JAM.policy.p21);
    i$$14++;
    v388 = i$$14 < geneticCodeMatchExp$$4.length;
  }
  dnaSequence$$5 = JAM.call(dnaSequence$$5.replace, dnaSequence$$5, [/\S{3}/g, "X"], JAM.policy.p16);
  dnaSequence$$5 = JAM.call(dnaSequence$$5.replace, dnaSequence$$5, [/^\s/, ""], JAM.policy.p16);
  return dnaSequence$$5;
}
function buildMutatedRestrictionSites(restrictionSites$$1) {
  var mutatedRestrictionSites$$1 = new Array;
  var i$$15 = 0;
  var v410 = i$$15 < restrictionSites$$1.length;
  for (;v410;) {
    var v1078 = restrictionSites$$1[i$$15];
    var v750 = JAM.call(v1078.match, v1078, [/\/.+\//], JAM.policy.p17).toString();
    var site = JAM.call(v750.replace, v750, [/[\/\\]/g, ""], JAM.policy.p16).toLowerCase();
    var v751 = restrictionSites$$1[i$$15];
    var label = JAM.call(v751.match, v751, [/\([^\(]+\)/], JAM.policy.p17).toString();
    var v1079 = restrictionSites$$1[i$$15];
    var v752 = JAM.call(v1079.match, v1079, [/\)\D*\d+/], JAM.policy.p17).toString();
    var cutDistance$$1 = parseFloat(JAM.call(v752.replace, v752, [/\)\D*/, ""], JAM.policy.p16));
    var singleDegenSites = new Array;
    var doubleDegenSites = new Array;
    var j$$11 = 0;
    var v396 = j$$11 < site.length;
    for (;v396;) {
      var v754 = JAM.call(site.charAt, site, [j$$11], JAM.policy.p15) != "n";
      if (v754) {
        v754 = JAM.call(site.charAt, site, [j$$11], JAM.policy.p15) != "N";
      }
      if (v754) {
        var pre = JAM.call(site.substring, site, [0, j$$11], JAM.policy.p13);
        var post = JAM.call(site.substring, site, [j$$11 + 1, site.length], JAM.policy.p21);
        var newSite = pre + "N" + post;
        JAM.call(singleDegenSites.push, singleDegenSites, [newSite], JAM.policy.p15);
      }
      j$$11++;
      v396 = j$$11 < site.length;
    }
    if (site.length > 6) {
      j$$11 = 0;
      var v404 = j$$11 < singleDegenSites.length;
      for (;v404;) {
        var k$$3 = 0;
        var v403 = k$$3 < singleDegenSites[j$$11].length;
        for (;v403;) {
          var v1080 = singleDegenSites[j$$11];
          var v759 = JAM.call(v1080.charAt, v1080, [k$$3], JAM.policy.p15) != "n";
          if (v759) {
            var v1081 = singleDegenSites[j$$11];
            v759 = JAM.call(v1081.charAt, v1081, [k$$3], JAM.policy.p15) != "N";
          }
          if (v759) {
            var v397 = singleDegenSites[j$$11];
            pre = JAM.call(v397.substring, v397, [0, k$$3], JAM.policy.p13);
            var v398 = singleDegenSites[j$$11];
            post = JAM.call(v398.substring, v398, [k$$3 + 1, singleDegenSites[j$$11].length], JAM.policy.p16);
            newSite = pre + "N" + post;
            JAM.call(doubleDegenSites.push, doubleDegenSites, [newSite], JAM.policy.p15);
          }
          k$$3++;
          v403 = k$$3 < singleDegenSites[j$$11].length;
        }
        j$$11++;
        v404 = j$$11 < singleDegenSites.length;
      }
    }
    j$$11 = 0;
    var v407 = j$$11 < singleDegenSites.length;
    for (;v407;) {
      JAM.call(mutatedRestrictionSites$$1.push, mutatedRestrictionSites$$1, ["/" + singleDegenSites[j$$11] + "/" + " " + label + cutDistance$$1], JAM.policy.p15);
      j$$11++;
      v407 = j$$11 < singleDegenSites.length;
    }
    j$$11 = 0;
    var v409 = j$$11 < doubleDegenSites.length;
    for (;v409;) {
      JAM.call(mutatedRestrictionSites$$1.push, mutatedRestrictionSites$$1, ["/" + doubleDegenSites[j$$11] + "/" + " " + label + cutDistance$$1], JAM.policy.p15);
      j$$11++;
      v409 = j$$11 < doubleDegenSites.length;
    }
    i$$15++;
    v410 = i$$15 < restrictionSites$$1.length;
  }
  return mutatedRestrictionSites$$1;
}
function removeNormalMatchesFromMutantSites(mutatedRestrictionSiteCollection$$2, restrictionSiteCollection$$2) {
  var originalMutatedRestrictionSites = new Array;
  var i$$16 = 0;
  var v415 = i$$16 < mutatedRestrictionSiteCollection$$2.restrictionSites.length;
  for (;v415;) {
    var mutatedSite = mutatedRestrictionSiteCollection$$2.restrictionSites[i$$16];
    var isOriginal = true;
    var j$$12 = 0;
    var v414 = j$$12 < restrictionSiteCollection$$2.restrictionSites.length;
    for (;v414;) {
      var normalSite = restrictionSiteCollection$$2.restrictionSites[j$$12];
      if (normalSite.position == mutatedSite.position) {
        isOriginal = false;
        break;
      }
      j$$12++;
      v414 = j$$12 < restrictionSiteCollection$$2.restrictionSites.length;
    }
    if (isOriginal) {
      JAM.call(originalMutatedRestrictionSites.push, originalMutatedRestrictionSites, [mutatedSite], JAM.policy.p15);
    }
    i$$16++;
    v415 = i$$16 < mutatedRestrictionSiteCollection$$2.restrictionSites.length;
  }
  mutatedRestrictionSiteCollection$$2.restrictionSites = originalMutatedRestrictionSites;
  return mutatedRestrictionSiteCollection$$2;
}
function removeOverlappingMatchesFromMutantSites(mutatedRestrictionSiteCollection$$3) {
  var originalMutatedRestrictionSites$$1 = new Array;
  var i$$17 = 0;
  var v427 = i$$17 < mutatedRestrictionSiteCollection$$3.restrictionSites.length;
  for (;v427;) {
    var mutatedSite$$1 = mutatedRestrictionSiteCollection$$3.restrictionSites[i$$17];
    var isOriginal$$1 = true;
    var j$$13 = 0;
    var v426 = j$$13 < originalMutatedRestrictionSites$$1.length;
    for (;v426;) {
      var mutatedSiteJ = originalMutatedRestrictionSites$$1[j$$13];
      var startRangeJ = mutatedSiteJ.position + mutatedSiteJ.cutDistance - mutatedSiteJ.iupacPattern.length - 2;
      var endRangeJ = mutatedSiteJ.position + mutatedSiteJ.cutDistance - 1 + 2;
      var startRange = mutatedSite$$1.position + mutatedSite$$1.cutDistance - mutatedSite$$1.iupacPattern.length;
      var endRange = mutatedSite$$1.position + mutatedSite$$1.cutDistance - 1;
      var v786 = startRange <= startRangeJ;
      if (v786) {
        v786 = endRange >= startRangeJ;
      }
      if (v786) {
        isOriginal$$1 = false;
        break;
      }
      var v787 = startRange <= endRangeJ;
      if (v787) {
        v787 = endRange >= endRangeJ;
      }
      if (v787) {
        isOriginal$$1 = false;
        break;
      }
      var v788 = startRange <= startRangeJ;
      if (v788) {
        v788 = endRange >= endRangeJ;
      }
      if (v788) {
        isOriginal$$1 = false;
        break;
      }
      var v789 = startRange >= startRangeJ;
      if (v789) {
        v789 = endRange <= endRangeJ;
      }
      if (v789) {
        isOriginal$$1 = false;
        break;
      }
      j$$13++;
      v426 = j$$13 < originalMutatedRestrictionSites$$1.length;
    }
    if (isOriginal$$1) {
      JAM.call(originalMutatedRestrictionSites$$1.push, originalMutatedRestrictionSites$$1, [mutatedSite$$1], JAM.policy.p15);
    }
    i$$17++;
    v427 = i$$17 < mutatedRestrictionSiteCollection$$3.restrictionSites.length;
  }
  mutatedRestrictionSiteCollection$$3.restrictionSites = originalMutatedRestrictionSites$$1;
  return mutatedRestrictionSiteCollection$$3;
}
function buildMutatedDna(originalDna, mutatedRestrictionSiteCollection$$4) {
  var mutatedDna$$1 = originalDna;
  var mutatedDnaArray = new Array;
  mutatedRestrictionSiteCollection$$4.sortRestrictionSites();
  mutatedRestrictionSiteCollection$$4.restrictionSites.reverse();
  var i$$18 = 0;
  var v435 = i$$18 < mutatedRestrictionSiteCollection$$4.restrictionSites.length;
  for (;v435;) {
    var mutatedSite$$2 = mutatedRestrictionSiteCollection$$4.restrictionSites[i$$18];
    var siteStart = mutatedSite$$2.position + mutatedSite$$2.cutDistance - mutatedSite$$2.iupacPattern.length;
    var siteEnd = mutatedSite$$2.position + mutatedSite$$2.cutDistance - 1;
    var siteLength = siteEnd - siteStart;
    JAM.call(mutatedDnaArray.push, mutatedDnaArray, [JAM.call(mutatedDna$$1.substring, mutatedDna$$1, [0, siteStart], JAM.policy.p13) + JAM.call(replaceMutatedDnaSegment, null, [JAM.call(mutatedDna$$1.substring, mutatedDna$$1, [siteStart, siteEnd + 1], JAM.policy.p21), mutatedSite$$2.iupacPattern, mutatedSite$$2.label], JAM.policy.p19)], JAM.policy.p15);
    JAM.call(mutatedDnaArray.push, mutatedDnaArray, [JAM.call(mutatedDna$$1.substring, mutatedDna$$1, [siteEnd + 1, mutatedDna$$1.length], JAM.policy.p21)], JAM.policy.p15);
    mutatedDna$$1 = JAM.call(mutatedDnaArray.join, mutatedDnaArray, [""], JAM.policy.p11);
    mutatedDnaArray = new Array;
    i$$18++;
    v435 = i$$18 < mutatedRestrictionSiteCollection$$4.restrictionSites.length;
  }
  mutatedRestrictionSiteCollection$$4.restrictionSites.reverse();
  return mutatedDna$$1;
}
function replaceMutatedDnaSegment(originalSegment, iupacPattern, label$$1) {
  var newSegment = "";
  var genericSite;
  var v437 = JAM.call(label$$1.match, label$$1, [/[a-z\|]+\s\d+/], JAM.policy.p17).toString();
  genericSite = JAM.call(v437.replace, v437, [/\||\s\d+/g, ""], JAM.policy.p16);
  var isUpperCase;
  var charToAdd;
  var i$$19 = 0;
  var v443 = i$$19 < originalSegment.length;
  for (;v443;) {
    var v982 = JAM.call(originalSegment.charAt, originalSegment, [i$$19], JAM.policy.p15).toString();
    if (JAM.call(v982.search, v982, [/[A-Z]/], JAM.policy.p17) == -1) {
      isUpperCase = false;
    } else {
      isUpperCase = true;
    }
    if (JAM.call(originalSegment.charAt, originalSegment, [i$$19], JAM.policy.p15) == JAM.call(genericSite.charAt, genericSite, [i$$19], JAM.policy.p15)) {
      charToAdd = JAM.call(originalSegment.charAt, originalSegment, [i$$19], JAM.policy.p17);
    } else {
      if (JAM.call(iupacPattern.charAt, iupacPattern, [i$$19], JAM.policy.p15) == "N") {
        charToAdd = JAM.call(genericSite.charAt, genericSite, [i$$19], JAM.policy.p17);
      } else {
        charToAdd = JAM.call(originalSegment.charAt, originalSegment, [i$$19], JAM.policy.p17);
      }
    }
    if (isUpperCase) {
      newSegment = newSegment + charToAdd.toString().toUpperCase();
    } else {
      newSegment = newSegment + charToAdd.toString().toLowerCase();
    }
    i$$19++;
    v443 = i$$19 < originalSegment.length;
  }
  return newSegment;
}
function findRestrictionSites(sequence$$18, arrayOfItems$$2, dnaConformation$$1) {
  var lookAhead$$1 = 50;
  var lowerLimit$$1 = 0;
  var upperLimit$$1 = sequence$$18.length;
  var shiftValue$$1 = 0;
  var cutDistance$$2;
  var matchExp$$2;
  var matchPosition$$1;
  var matchArray$$2;
  var label$$2;
  var timesFound$$1 = 0;
  var tempArray = new Array;
  var restrictionSiteCollection$$3 = new RestrictionSiteCollection;
  if (dnaConformation$$1 == "circular") {
    shiftValue$$1 = JAM.call(sequence$$18.substring, sequence$$18, [0, lookAhead$$1], JAM.policy.p13).length;
    sequence$$18 = JAM.call(sequence$$18.substring, sequence$$18, [sequence$$18.length - lookAhead$$1, sequence$$18.length], JAM.policy.p21) + sequence$$18 + JAM.call(sequence$$18.substring, sequence$$18, [0, lookAhead$$1], JAM.policy.p13);
    lowerLimit$$1 = 0 + shiftValue$$1;
    upperLimit$$1 = upperLimit$$1 + shiftValue$$1;
  }
  var i$$20 = 0;
  var v459 = i$$20 < arrayOfItems$$2.length;
  for (;v459;) {
    var v985 = arrayOfItems$$2[i$$20];
    var v448 = JAM.call(v985.match, v985, [/\/.+\//], JAM.policy.p17).toString();
    var iupacPattern$$1 = JAM.call(v448.replace, v448, [/[\/\\]/g, ""], JAM.policy.p16);
    matchExp$$2 = "/" + convertDegenerates(iupacPattern$$1) + "/" + "gi";
    matchPosition$$1 = 0;
    if (JAM.isEval(eval)) {
      matchExp$$2 = eval("introspect(JAM.policy.pFull) { " + matchExp$$2 + " }");
    } else {
      matchExp$$2 = JAM.call(eval, null, [matchExp$$2]);
    }
    var v1087 = arrayOfItems$$2[i$$20];
    var v816 = JAM.call(v1087.match, v1087, [/\)\D*\d+/], JAM.policy.p17).toString();
    cutDistance$$2 = parseFloat(JAM.call(v816.replace, v816, [/\)\D*/, ""], JAM.policy.p16));
    var v988 = arrayOfItems$$2[i$$20];
    var v451 = JAM.call(v988.match, v988, [/\([^\(]+\)/], JAM.policy.p17).toString();
    label$$2 = JAM.call(v451.replace, v451, [/\(|\)/g, ""], JAM.policy.p16);
    var v455 = matchArray$$2 = JAM.call(matchExp$$2.exec, matchExp$$2, [sequence$$18], JAM.policy.p15);
    for (;v455;) {
      matchPosition$$1 = matchExp$$2.lastIndex;
      matchPosition$$1 = matchPosition$$1 - cutDistance$$2;
      var v818 = matchPosition$$1 >= lowerLimit$$1;
      if (v818) {
        v818 = matchPosition$$1 < upperLimit$$1;
      }
      if (v818) {
        timesFound$$1++;
        JAM.call(tempArray.push, tempArray, [JAM.new(RestrictionSite, [label$$2 + " " + (matchPosition$$1 - shiftValue$$1 + 1), matchPosition$$1 - shiftValue$$1, cutDistance$$2, iupacPattern$$1], JAM.policy.p19)], JAM.policy.p15);
      }
      matchExp$$2.lastIndex = matchExp$$2.lastIndex - RegExp.lastMatch.length + 1;
      v455 = matchArray$$2 = JAM.call(matchExp$$2.exec, matchExp$$2, [sequence$$18], JAM.policy.p15);
    }
    var j$$14 = 0;
    var v458 = j$$14 < tempArray.length;
    for (;v458;) {
      tempArray[j$$14].numberOfCuts = timesFound$$1;
      JAM.call(restrictionSiteCollection$$3.addRestrictionSite, restrictionSiteCollection$$3, [tempArray[j$$14]], JAM.policy.p15);
      j$$14++;
      v458 = j$$14 < tempArray.length;
    }
    timesFound$$1 = 0;
    tempArray = new Array;
    i$$20++;
    v459 = i$$20 < arrayOfItems$$2.length;
  }
  return restrictionSiteCollection$$3;
}
function writeLayout(start$$4, stop) {
  var i$$21 = 0;
  var v461 = i$$21 < this.components.length;
  for (;v461;) {
    var v460 = this.components[i$$21];
    JAM.call(v460.writeLayoutComponent, v460, [start$$4, stop], JAM.policy.p21);
    i$$21++;
    v461 = i$$21 < this.components.length;
  }
  return;
}
function addComponent(component) {
  var v462 = this.components;
  JAM.call(v462.push, v462, [component], JAM.policy.p15);
  return;
}
function TextLayout() {
  var v1506 = new Array;
  this.components = v1506;
  return;
}
function writeLayoutComponent(start$$5, stop$$1) {
  return;
}
function setCharacters(text$$14) {
  if (JAM.call(text$$14.search, text$$14, [/./], JAM.policy.p17) != -1) {
    var v1507 = JAM.call(text$$14.match, text$$14, [/./g], JAM.policy.p17);
    this.characters = v1507;
  }
  return;
}
function isRoom(start$$6, stop$$2) {
  var v464 = this.characters;
  var rangeToCheck = JAM.call(v464.slice, v464, [start$$6, stop$$2], JAM.policy.p21);
  rangeToCheck = JAM.call(rangeToCheck.join, rangeToCheck, [""], JAM.policy.p11);
  if (JAM.call(rangeToCheck.search, rangeToCheck, [/\w/], JAM.policy.p17) == -1) {
    return true;
  } else {
    return false;
  }
  return;
}
function LayoutComponent() {
  var v1508 = new Array;
  this.characters = v1508;
  this.positionLabel = 1;
  this.spanStart = "";
  this.spanEnd = "";
  return;
}
function TranslationComponent() {
  var v1509 = new Array;
  this.characters = v1509;
  this.positionLabel = 1;
  this.spanStart = "";
  this.spanEnd = "";
  return;
}
function UppercaseTranslationComponent() {
  var v1510 = new Array;
  this.characters = v1510;
  this.positionLabel = 1;
  this.spanStart = "";
  this.spanEnd = "";
  return;
}
function DnaComponent() {
  var v1511 = new Array;
  this.characters = v1511;
  this.positionLabel = 1;
  this.spanStart = "";
  this.spanEnd = "";
  return;
}
function RestrictionSite(label$$3, position, cutDistance$$3, iupacPattern$$2) {
  this.label = label$$3;
  this.position = position;
  this.cutDistance = cutDistance$$3;
  this.iupacPattern = iupacPattern$$2;
  return;
}
function addRestrictionSite(restrictionSite) {
  var v466 = this.restrictionSites;
  JAM.call(v466.push, v466, [restrictionSite], JAM.policy.p15);
  return;
}
function sortRestrictionSites() {
  var v467 = this.restrictionSites;
  JAM.call(v467.sort, v467, [restrictionSiteSorter], JAM.policy.p15);
  return;
}
function getSitesInRange(start$$10, stop$$6) {
  var arrayToReturn = new Array;
  var i$$22 = this.restrictionSites.length - 1;
  var v471 = i$$22 >= 0;
  for (;v471;) {
    var v832 = this.restrictionSites[i$$22].position >= start$$10;
    if (v832) {
      v832 = this.restrictionSites[i$$22].position < stop$$6;
    }
    if (v832) {
      JAM.call(arrayToReturn.push, arrayToReturn, [this.restrictionSites.pop()], JAM.policy.p15);
    } else {
      break;
    }
    i$$22--;
    v471 = i$$22 >= 0;
  }
  return arrayToReturn;
}
function RestrictionSiteCollection() {
  var v1512 = new Array;
  this.restrictionSites = v1512;
  return;
}
function restrictionSiteSorter(a, b) {
  if (a.position < b.position) {
    return 1;
  }
  if (a.position > b.position) {
    return-1;
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
var v479 = TranslationComponent;
var v1513 = new LayoutComponent;
v479.prototype = v1513;
TranslationComponent.prototype.writeLayoutComponent = v4;
var v481 = UppercaseTranslationComponent;
var v1514 = new LayoutComponent;
v481.prototype = v1514;
UppercaseTranslationComponent.prototype.writeLayoutComponent = v5;
var v483 = DnaComponent;
var v1515 = new LayoutComponent;
v483.prototype = v1515;
DnaComponent.prototype.writeLayoutComponent = v6;
new RestrictionSiteCollection;
RestrictionSiteCollection.prototype.addRestrictionSite = addRestrictionSite;
RestrictionSiteCollection.prototype.sortRestrictionSites = sortRestrictionSites;
RestrictionSiteCollection.prototype.getSitesInRange = getSitesInRange;
JAM.set(document, "onload", v7);
JAM.set(JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p11), "onclick", v8);
JAM.set(JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p11), "onclick", v9)

JAM.stopProfile('load');
