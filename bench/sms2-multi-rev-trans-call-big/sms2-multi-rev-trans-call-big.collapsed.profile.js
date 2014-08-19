
JAM.startProfile('load');
function v4() {
  document.forms[0].elements[0].value = " ";
  document.forms[0].elements[4].value = " ";
  return
}
function v3() {
  try {
    multiRevTrans(document)
  }catch(e$$8) {
    alert("The following error was encountered: " + e$$8)
  }
  return
}
function v2() {
  var v8 = document.main_form.main_submit;
  JAM.call(v8.focus, v8, [], JAM.policy.p9);
  return
}
function addReturns(sequence) {
  function v0(str$$6, p1, offset$$12, s$$2) {
    return p1 + "\n"
  }
  sequence = JAM.call(sequence.replace, sequence, [/(.{60})/g, v0], JAM.policy.p9);
  return sequence
}
function checkAlign(arrayOfTitles, arrayOfSequences) {
  var lengthOfAlign = arrayOfSequences[0].length;
  if(arrayOfSequences.length < 2) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v12 = i$$1 < arrayOfTitles.length;
  for(;v12;) {
    var v951 = arrayOfTitles[i$$1];
    var v456 = JAM.call(v951.search, v951, [/\S/], JAM.policy.p9) == -1;
    if(!v456) {
      var v1046 = arrayOfSequences[i$$1];
      var v793 = JAM.call(v1046.search, v1046, [/\S/], JAM.policy.p9) == -1;
      if(!v793) {
        v793 = arrayOfSequences[i$$1].length != lengthOfAlign
      }
      v456 = v793
    }
    if(v456) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    v12 = i$$1 < arrayOfTitles.length
  }
  return true
}
function checkCodonTable(codonTable) {
  var v458 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p9) == -1;
  if(!v458) {
    var v796 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p9) == -1;
    if(!v796) {
      var v956 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p9) == -1;
      if(!v956) {
        var v1049 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p9) == -1;
        if(!v1049) {
          v1049 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p9) == -1
        }
        v956 = v1049
      }
      v796 = v956
    }
    v458 = v796
  }
  if(v458) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v798 = formElement.value;
  if(JAM.call(v798.search, v798, [/\S/], JAM.policy.p9) == -1) {
    alert("Please enter some text.");
    return false
  }
  return true
}
function checkGeneticCode(arrayOfPatterns) {
  var z$$2 = 0;
  var codon = "";
  var oneMatch = false;
  var testSequence = "gggggaggtggcgaggaagatgacgtggtagttgtcgcggcagctgccaggagaagtagcaagaaaaataacatgataattatcacgacaactacctggtgatgttgctagtaatattacttgttatttttctcgtcatcttcccggcgacgtcgccagcaacatcacctgctacttctcccgccacctccc";
  var v17 = z$$2 < arrayOfPatterns.length;
  for(;v17;) {
    var v799 = arrayOfPatterns[z$$2];
    if(JAM.call(v799.search, v799, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p9) == -1) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    if(moreExpressionCheck(arrayOfPatterns[z$$2]) == false) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    v17 = z$$2 < arrayOfPatterns.length
  }
  var geneticCodeMatchResult = new Array(arrayOfPatterns.length);
  var geneticCodeMatchExp = new Array(arrayOfPatterns.length);
  var j = 0;
  var v26 = j < arrayOfPatterns.length;
  for(;v26;) {
    var v20 = geneticCodeMatchExp;
    var v21 = j;
    var v958 = arrayOfPatterns[j];
    var v465 = JAM.call(v958.match, v958, [/\/.+\//], JAM.policy.p9) + "gi";
    if(JAM.isEval(eval)) {
      var v1271 = eval("introspect(JAM.policy.pFull) { " + v465 + " }")
    }else {
      var v1271 = JAM.call(eval, null, [v465])
    }
    v20[v21] = v1271;
    var v22 = geneticCodeMatchResult;
    var v23 = j;
    var v802 = arrayOfPatterns[j];
    var v466 = JAM.call(v802.match, v802, [/=[a-zA-Z\*]/], JAM.policy.p9);
    var v1272 = JAM.call(v466.toString, v466, [], JAM.policy.p9);
    v22[v23] = v1272;
    var v24 = geneticCodeMatchResult;
    var v25 = j;
    var v467 = geneticCodeMatchResult[j];
    var v1273 = JAM.call(v467.replace, v467, [/=/g, ""], JAM.policy.p9);
    v24[v25] = v1273;
    j = j + 1;
    v26 = j < arrayOfPatterns.length
  }
  var i$$2 = 0;
  var v33 = i$$2 <= testSequence.length - 3;
  for(;v33;) {
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, i$$2 + 3], JAM.policy.p9);
    j = 0;
    var v31 = j < geneticCodeMatchExp.length;
    for(;v31;) {
      if(JAM.call(codon.search, codon, [geneticCodeMatchExp[j]], JAM.policy.p9) != -1) {
        if(oneMatch == true) {
          alert("Genetic code error: more than one amino acid is coded by the codon: " + codon + ".");
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      v31 = j < geneticCodeMatchExp.length
    }
    if(oneMatch == false) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    v33 = i$$2 <= testSequence.length - 3
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v35 = z$$3 < arrayOfPatterns$$1.length;
  for(;v35;) {
    var v806 = arrayOfPatterns$$1[z$$3];
    if(JAM.call(v806.search, v806, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p9) != -1) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    v35 = z$$3 < arrayOfPatterns$$1.length
  }
  var i$$3 = 0;
  var v39 = i$$3 < arrayOfPatterns$$1.length;
  for(;v39;) {
    var re = new RegExp("[" + arrayOfPatterns$$1[i$$3] + "]", "gi");
    var j$$1 = i$$3 + 1;
    var v38 = j$$1 < arrayOfPatterns$$1.length;
    for(;v38;) {
      var v808 = arrayOfPatterns$$1[j$$1];
      if(JAM.call(v808.search, v808, [re], JAM.policy.p9) != -1) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      v38 = j$$1 < arrayOfPatterns$$1.length
    }
    i$$3 = i$$3 + 1;
    v39 = i$$3 < arrayOfPatterns$$1.length
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v42 = z$$4 < arrayOfPatterns$$2.length;
  for(;v42;) {
    var v809 = arrayOfPatterns$$2[z$$4];
    if(JAM.call(v809.search, v809, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p9) == -1) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    if(moreExpressionCheck(arrayOfPatterns$$2[z$$4]) == false) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    v42 = z$$4 < arrayOfPatterns$$2.length
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v959 = getSequenceFromFasta(text$$7);
  if(JAM.call(v959.replace, v959, [/[^A-Za-z]/g, ""], JAM.policy.p9).length > maxInput) {
    alert("Please enter a sequence consisting of less than or equal to " + maxInput + " characters.");
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  if(text$$8.length > maxInput$$1) {
    alert("Please enter text consisting of less than or equal to " + maxInput$$1 + " characters.");
    return false
  }else {
    return true
  }
  return
}
function complement(dnaSequence) {
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/g/g, "1"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/c/g, "2"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "c"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "g"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/G/g, "1"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/C/g, "2"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "C"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "G"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/a/g, "1"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/t/g, "2"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "t"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "a"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/A/g, "1"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/T/g, "2"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "T"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "A"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/u/g, "a"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/U/g, "A"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/r/g, "1"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/y/g, "2"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "y"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "r"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/R/g, "1"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/Y/g, "2"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "Y"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "R"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/k/g, "1"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/m/g, "2"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "m"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "k"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/K/g, "1"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/M/g, "2"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "M"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "K"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/b/g, "1"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/v/g, "2"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "v"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "b"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/B/g, "1"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/V/g, "2"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "V"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "B"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/d/g, "1"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/h/g, "2"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "h"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "d"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/D/g, "1"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/H/g, "2"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "H"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "D"], JAM.policy.p9);
  return dnaSequence
}
function closeForm() {
  var v47 = outputWindow.document;
  JAM.call(v47.write, v47, ["</form>"], JAM.policy.p9);
  return true
}
function closePre() {
  var v48 = outputWindow.document;
  JAM.call(v48.write, v48, ["</div>"], JAM.policy.p9);
  var v49 = outputWindow.document;
  JAM.call(v49.write, v49, ["</pre>\n"], JAM.policy.p9);
  return
}
function closeTextArea() {
  var v50 = outputWindow.document;
  JAM.call(v50.write, v50, ["</textarea>"], JAM.policy.p9);
  return true
}
function closeWindow() {
  var v51 = outputWindow.document;
  JAM.call(v51.write, v51, ["</body>\n</html>\n"], JAM.policy.p9);
  outputWindow.status = "Done.";
  var v52 = outputWindow.document;
  JAM.call(v52.close, v52, [], JAM.policy.p9);
  return true
}
function convertDegenerates(sequence$$1) {
  sequence$$1 = JAM.call(sequence$$1.toLowerCase, sequence$$1, [], JAM.policy.p9);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/t/g, "[TU]"], JAM.policy.p9);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/r/g, "[AGR]"], JAM.policy.p9);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/y/g, "[CTUY]"], JAM.policy.p9);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/s/g, "[GCS]"], JAM.policy.p9);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/w/g, "[ATUW]"], JAM.policy.p9);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/k/g, "[GTUK]"], JAM.policy.p9);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/m/g, "[ACM]"], JAM.policy.p9);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/b/g, "[CGTUBSKY]"], JAM.policy.p9);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/d/g, "[AGTUDRKW]"], JAM.policy.p9);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/h/g, "[ACTUHMYW]"], JAM.policy.p9);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/v/g, "[ACGVSMR]"], JAM.policy.p9);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/n/g, "[ACGTURYSWKMBDHVN]"], JAM.policy.p9);
  return sequence$$1
}
function earlyCheckAlign(alignArray) {
  if(alignArray.length < 3) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v55 = i$$4 < alignArray.length;
  for(;v55;) {
    var v812 = alignArray[i$$4];
    if(JAM.call(v812.search, v812, [/[^\s]+\s/], JAM.policy.p9) == -1) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    v55 = i$$4 < alignArray.length
  }
  return true
}
function filterAlignSeq(alignSeq) {
  alignSeq = JAM.call(alignSeq.replace, alignSeq, [/[^abcdefghiklmnpqrstvwxyz\.\-]/gi, ""], JAM.policy.p9);
  return alignSeq
}
function filterFastaTitle(sequenceTitle) {
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/\s{2,}/g, " "], JAM.policy.p9);
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/^\s*/g, ""], JAM.policy.p9);
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/[\f\n\r\t]+$/g, "\n"], JAM.policy.p9);
  return JAM.call(sequenceTitle.replace, sequenceTitle, [/[\<\>]\n/gi, ""], JAM.policy.p9)
}
function getArrayOfFasta(sequenceData) {
  var arrayOfFasta = new Array;
  var matchArray;
  var re$$1 = /\>[^\>]+/g;
  if(JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p9) != -1) {
    var v57 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p9);
    for(;v57;) {
      JAM.call(arrayOfFasta.push, arrayOfFasta, [matchArray[0]], JAM.policy.p9);
      v57 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p9)
    }
  }else {
    arrayOfFasta[0] = sequenceData
  }
  return arrayOfFasta
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var stringToReturn = "&gt;results for " + sequence$$2.length + " residue sequence ";
  if(JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p9) != -1) {
    stringToReturn = stringToReturn + '"' + fastaSequenceTitle + '"'
  }
  stringToReturn = stringToReturn + ' starting "' + JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p9) + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var stringToReturn$$1 = "Search results for " + sequenceOne.length + " residue sequence ";
  if(JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p9) != -1) {
    stringToReturn$$1 = stringToReturn$$1 + '"' + fastaSequenceTitleOne + '"'
  }
  stringToReturn$$1 = stringToReturn$$1 + ' starting "' + JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p9) + '"\n';
  stringToReturn$$1 = stringToReturn$$1 + "and " + sequenceTwo.length + " residue sequence ";
  if(JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p9) != -1) {
    stringToReturn$$1 = stringToReturn$$1 + '"' + fastaSequenceTitleTwo + '"'
  }
  stringToReturn$$1 = stringToReturn$$1 + ' starting "' + JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p9) + '"';
  return'<div class="info">' + stringToReturn$$1 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var geneticCodeMatchExp$$1 = new Array(arrayOfPatterns$$3.length);
  var j$$2 = 0;
  var v75 = j$$2 < arrayOfPatterns$$3.length;
  for(;v75;) {
    var v73 = geneticCodeMatchExp$$1;
    var v74 = j$$2;
    var v960 = arrayOfPatterns$$3[j$$2];
    var v514 = JAM.call(v960.match, v960, [/\/.+\//], JAM.policy.p9) + "gi";
    if(JAM.isEval(eval)) {
      var v1274 = eval("introspect(JAM.policy.pFull) { " + v514 + " }")
    }else {
      var v1274 = JAM.call(eval, null, [v514])
    }
    v73[v74] = v1274;
    j$$2 = j$$2 + 1;
    v75 = j$$2 < arrayOfPatterns$$3.length
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var geneticCodeMatchResult$$1 = new Array(arrayOfPatterns$$4.length);
  var j$$3 = 0;
  var v81 = j$$3 < arrayOfPatterns$$4.length;
  for(;v81;) {
    var v77 = geneticCodeMatchResult$$1;
    var v78 = j$$3;
    var v814 = arrayOfPatterns$$4[j$$3];
    var v517 = JAM.call(v814.match, v814, [/=[a-zA-Z\*]/], JAM.policy.p9);
    var v1275 = JAM.call(v517.toString, v517, [], JAM.policy.p9);
    v77[v78] = v1275;
    var v79 = geneticCodeMatchResult$$1;
    var v80 = j$$3;
    var v518 = geneticCodeMatchResult$$1[j$$3];
    var v1276 = JAM.call(v518.replace, v518, [/=/g, ""], JAM.policy.p9);
    v79[v80] = v1276;
    j$$3 = j$$3 + 1;
    v81 = j$$3 < arrayOfPatterns$$4.length
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var stringToReturn$$2 = "Results for " + sequence$$3.length + " residue sequence ";
  if(JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p9) != -1) {
    stringToReturn$$2 = stringToReturn$$2 + '"' + fastaSequenceTitle$$1 + '"'
  }
  stringToReturn$$2 = stringToReturn$$2 + ' starting "' + JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p9) + '"';
  return'<div class="info">' + stringToReturn$$2 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var stringToReturn$$3 = "Results for " + topology + " " + sequence$$4.length + " residue sequence ";
  if(JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p9) != -1) {
    stringToReturn$$3 = stringToReturn$$3 + '"' + fastaSequenceTitle$$2 + '"'
  }
  stringToReturn$$3 = stringToReturn$$3 + ' starting "' + JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p9) + '"';
  return'<div class="info">' + stringToReturn$$3 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var stringToReturn$$4 = "Alignment results for " + sequenceOne$$1.length + " residue sequence ";
  if(JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p9) != -1) {
    stringToReturn$$4 = stringToReturn$$4 + '"' + fastaSequenceTitleOne$$1 + '"'
  }
  stringToReturn$$4 = stringToReturn$$4 + ' starting "' + JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p9) + '"\n';
  stringToReturn$$4 = stringToReturn$$4 + "and " + sequenceTwo$$1.length + " residue sequence ";
  if(JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p9) != -1) {
    stringToReturn$$4 = stringToReturn$$4 + '"' + fastaSequenceTitleTwo$$1 + '"'
  }
  stringToReturn$$4 = stringToReturn$$4 + ' starting "' + JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p9) + '"';
  return'<div class="info">' + stringToReturn$$4 + "</div>\n"
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v102 = j$$4 < lengthOut;
  for(;v102;) {
    tempNum = JAM.call(Math.floor, Math, [JAM.call(Math.random, Math, [], JAM.policy.p9) * components.length], JAM.policy.p9);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p9);
    j$$4 = j$$4 + 1;
    v102 = j$$4 < lengthOut
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p10)
}
function getSequenceFromFasta(sequenceRecord) {
  if(JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p9) != -1) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p9)
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  if(JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p9) != -1) {
    var v104 = JAM.call(sequenceRecord$$1.match, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p9);
    fastaTitle = JAM.call(v104.toString, v104, [], JAM.policy.p9);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\>|[\f\n\r]/g, ""], JAM.policy.p9);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\s{2,}/g, " "], JAM.policy.p9);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/[\<\>]/gi, ""], JAM.policy.p9)
  }
  return fastaTitle
}
function moreExpressionCheck(expressionToCheck) {
  var v546 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p9) != -1;
  if(!v546) {
    var v817 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p9) != -1;
    if(!v817) {
      var v962 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p9) != -1;
      if(!v962) {
        var v1052 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p9) != -1;
        if(!v1052) {
          var v1106 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p9) != -1;
          if(!v1106) {
            var v1127 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p9) != -1;
            if(!v1127) {
              var v1144 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p9) != -1;
              if(!v1144) {
                var v1164 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p9) != -1;
                if(!v1164) {
                  var v1182 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p9) != -1;
                  if(!v1182) {
                    var v1198 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p9) != -1;
                    if(!v1198) {
                      v1198 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p9) != -1
                    }
                    v1182 = v1198
                  }
                  v1164 = v1182
                }
                v1144 = v1164
              }
              v1127 = v1144
            }
            v1106 = v1127
          }
          v1052 = v1106
        }
        v962 = v1052
      }
      v817 = v962
    }
    v546 = v817
  }
  if(v546) {
    return false
  }
  return true
}
function openForm() {
  var v107 = outputWindow.document;
  JAM.call(v107.write, v107, ['<form action="">\n'], JAM.policy.p9);
  return true
}
function openPre() {
  var v108 = outputWindow.document;
  JAM.call(v108.write, v108, ["<pre>"], JAM.policy.p9);
  var v109 = outputWindow.document;
  JAM.call(v109.write, v109, ['<div class="pre">'], JAM.policy.p9);
  return
}
function openTextArea() {
  var v110 = outputWindow.document;
  JAM.call(v110.write, v110, ['<br /><textarea rows="6" cols="61">\n'], JAM.policy.p9);
  return true
}
function openWindow(title$$5) {
  _openWindow(title$$5, true);
  return
}
function _openWindow(title$$6, isColor) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p10);
  JAM.call(outputWindow.focus, outputWindow, [], JAM.policy.p9);
  var v111 = outputWindow.document;
  JAM.call(v111.write, v111, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n'], JAM.policy.p9);
  if(isColor) {
    var v113 = outputWindow.document;
    JAM.call(v113.write, v113, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; background-color: #66FF00}\n" + 
    "span.two, td.two {color: #000000; background-color: #FFFF66}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n" + "td.many {color: #000000}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + 
    "</style>\n"], JAM.policy.p9)
  }else {
    var v115 = outputWindow.document;
    JAM.call(v115.write, v115, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n" + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "td.many {color: #000000; background-color: #FFFFFF}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"], JAM.policy.p9)
  }
  var v117 = outputWindow.document;
  JAM.call(v117.write, v117, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$6 + " results</div>\n"], JAM.policy.p9);
  outputWindow.status = "Please Wait.";
  return true
}
function openWindowAlign(title$$7) {
  _openWindowAlign(title$$7, true);
  return
}
function _openWindowAlign(title$$8, isBackground) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p10);
  JAM.call(outputWindow.focus, outputWindow, [], JAM.policy.p9);
  var v119 = outputWindow.document;
  JAM.call(v119.write, v119, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n'], JAM.policy.p9);
  if(isBackground) {
    var v121 = outputWindow.document;
    JAM.call(v121.write, v121, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #FFFFFF; background-color: #000000}\n" + "span.sim {color: #FFFFFF; background-color: #666666}\n" + 
    "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n" + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n" + "span.c, span.m {color: #000000; background-color: #FFFF00}\n" + "span.s, span.t {color: #000000; background-color: #66FF00}\n" + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n" + "span.d, span.e {color: #000000; background-color: #0066FF}\n" + "span.n, span.q {color: #000000; background-color: #996633}\n" + "span.p {color: #000000; background-color: #FF99FF}\n" + 
    "</style>\n"], JAM.policy.p9)
  }else {
    var v123 = outputWindow.document;
    JAM.call(v123.write, v123, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n" + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n" + 
    "span.diff {color: #999999; background-color: #FFFFFF}\n" + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n" + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n" + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n" + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n" + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n" + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n" + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n" + 
    "span.p {color: #00FFCC; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"], JAM.policy.p9)
  }
  var v125 = outputWindow.document;
  JAM.call(v125.write, v125, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$8 + " results</div>\n"], JAM.policy.p9);
  outputWindow.status = "Please Wait.";
  return true
}
function removeFormatting(sequence$$5) {
  return JAM.call(sequence$$5.replace, sequence$$5, [/[\d\s]/g, ""], JAM.policy.p9)
}
function removeNonDna(sequence$$6) {
  return JAM.call(sequence$$6.replace, sequence$$6, [/[^gatucryswkmbdhvnxGATUCRYSWKMBDHVNX]/g, ""], JAM.policy.p9)
}
function removeNonDnaStrict(sequence$$7) {
  return JAM.call(sequence$$7.replace, sequence$$7, [/[^gatucGATUC]/g, ""], JAM.policy.p9)
}
function removeNonProtein(sequence$$8) {
  return JAM.call(sequence$$8.replace, sequence$$8, [/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, ""], JAM.policy.p9)
}
function removeNonProteinStrict(sequence$$9) {
  return JAM.call(sequence$$9.replace, sequence$$9, [/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, ""], JAM.policy.p9)
}
function removeNonProteinAllowDegen(sequence$$10) {
  return JAM.call(sequence$$10.replace, sequence$$10, [/[^ABCDEFGHIKLMNPQRSTVWYXZabcdefghiklmnpqrstvwyxz\*]/g, ""], JAM.policy.p9)
}
function removeNonProteinAllowX(sequence$$11) {
  return JAM.call(sequence$$11.replace, sequence$$11, [/[^ACDEFGHIKLMNPQRSTVWYZXacdefghiklmnpqrstvwyzx\*]/g, ""], JAM.policy.p9)
}
function removeWhiteSpace(text$$9) {
  return JAM.call(text$$9.replace, text$$9, [/\s/g, ""], JAM.policy.p9)
}
function removeNonLetters(sequence$$12) {
  return JAM.call(sequence$$12.replace, sequence$$12, [/[^A-Z]/gi, ""], JAM.policy.p9)
}
function reverse(dnaSequence$$1) {
  var tempDnaArray = new Array;
  if(JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p9) != -1) {
    tempDnaArray = JAM.call(dnaSequence$$1.match, dnaSequence$$1, [/./g], JAM.policy.p9);
    tempDnaArray = JAM.call(tempDnaArray.reverse, tempDnaArray, [], JAM.policy.p9);
    dnaSequence$$1 = JAM.call(tempDnaArray.join, tempDnaArray, [""], JAM.policy.p10)
  }
  return dnaSequence$$1
}
function rightNum(theNumber, sequenceToAppend, lengthOfColumn, tabIn) {
  var j$$5 = 0;
  var tempString = "";
  theNumber = JAM.call(theNumber.toString, theNumber, [], JAM.policy.p9);
  j$$5 = theNumber.length;
  var v128 = j$$5 < lengthOfColumn;
  for(;v128;) {
    tempString = tempString + " ";
    j$$5 = j$$5 + 1;
    v128 = j$$5 < lengthOfColumn
  }
  theNumber = tempString + theNumber + " ";
  sequenceToAppend = sequenceToAppend + theNumber + tabIn;
  return sequenceToAppend
}
function testScript() {
  function v1(str$$7, p1$$1, offset$$13, s$$3) {
    return p1$$1 + "X"
  }
  var testArray = new Array;
  var testString = "1234567890";
  JAM.call(testArray.push, testArray, [testString], JAM.policy.p9);
  if(testArray[0] != testString) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  if(JAM.call(testString.search, testString, [re$$2], JAM.policy.p9) == -1) {
    alert("Regular expression 'm' flag not supported. See browser compatibility page.");
    return false
  }
  var caughtException = false;
  try {
    if(JAM.isEval(eval)) {
      re$$2 = eval("introspect(JAM.policy.pFull) { " + "Exception handling not supported. Check browser compatibility page." + " }")
    }else {
      re$$2 = JAM.call(eval, null, ["Exception handling not supported. Check browser compatibility page."])
    }
  }catch(e$$4) {
    caughtException = true
  }
  if(!caughtException) {
    alert("Exception handling not supported. See browser compatibility page.")
  }
  testString = "123";
  testString = JAM.call(testString.replace, testString, [/(\d)/g, v1], JAM.policy.p9);
  if(testString != "1X2X3X") {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false
  }
  var testNum = 2489.8237;
  if(JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p9) != 2489.824) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  if(JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p9) != 2489.8) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  if(JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p9) == -1) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v561 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p9) == -1;
  if(!v561) {
    var v828 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p9) == -1;
    if(!v828) {
      var v973 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p9) == -1;
      if(!v973) {
        v973 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p9) == -1
      }
      v828 = v973
    }
    v561 = v828
  }
  if(v561) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  if(JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p9) == -1) {
    alert("Please enter a number.");
    return false
  }
  if(theNumber$$2 > maxInput$$2) {
    alert("Please enter a number less than or equal to " + maxInput$$2 + ".");
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  if(JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p9) != -1) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  if(JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p9) != -1) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v566 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p9) == -1;
  if(!v566) {
    var v831 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p9) == -1;
    if(!v831) {
      var v976 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p9) == -1;
      if(!v976) {
        v976 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p9) == -1
      }
      v831 = v976
    }
    v566 = v831
  }
  if(v566) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v567 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p9) == -1;
  if(!v567) {
    var v834 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p9) == -1;
    if(!v834) {
      var v979 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p9) == -1;
      if(!v979) {
        v979 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p9) == -1
      }
      v834 = v979
    }
    v567 = v834
  }
  if(v567) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  if(JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p9) == -1) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v569 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p9) == -1;
  if(!v569) {
    var v837 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p9) == -1;
    if(!v837) {
      var v982 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p9) == -1;
      if(!v982) {
        v982 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p9) == -1
      }
      v837 = v982
    }
    v569 = v837
  }
  if(v569) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  if(JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p9) == -1) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function writeGroupNum(text$$10, tabIn$$1, groupSize, basePerLine, startBase, stopBase) {
  var i$$5 = parseInt(startBase);
  var k = 0;
  var lineOfText = "";
  var sepChar = " ";
  groupSize = parseInt(groupSize);
  basePerLine = parseInt(basePerLine);
  var v156 = i$$5 < stopBase;
  for(;v156;) {
    lineOfText = rightNum(i$$5 + 1, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v153 = j$$6 <= basePerLine / groupSize;
    for(;v153;) {
      var v152 = k < groupSize;
      for(;v152;) {
        lineOfText = lineOfText + JAM.call(text$$10.charAt, text$$10, [k + i$$5], JAM.policy.p9);
        k = k + 1;
        v152 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      v153 = j$$6 <= basePerLine / groupSize
    }
    var v154 = outputWindow.document;
    JAM.call(v154.write, v154, [lineOfText + "\n"], JAM.policy.p9);
    lineOfText = "";
    v156 = i$$5 < stopBase
  }
  return true
}
function writeGroupNumDna(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition) {
  writeGroupNumDnaSetStart(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition, 0);
  return true
}
function writeGroupNumDnaSetStart(text$$12, tabIn$$3, groupSize$$2, basePerLine$$2, startBase$$2, stopBase$$2, strands$$1, numberPosition$$1, numberingAdjustment) {
  function adjustNumbering(original, adjustment) {
    var adjusted = original + adjustment;
    var v574 = adjustment < 0;
    if(v574) {
      v574 = adjusted >= 0
    }
    if(v574) {
      adjusted = adjusted + 1
    }
    return adjusted
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
  var v190 = i$$6 < stopBase$$2;
  for(;v190;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v166 = j$$7 <= basePerLine$$2 / groupSize$$2;
    for(;v166;) {
      var v161 = k$$1 < groupSize$$2;
      for(;v161;) {
        if(i$$6 + k$$1 >= stopBase$$2) {
          break
        }
        lineOfText$$1 = lineOfText$$1 + JAM.call(text$$12.charAt, text$$12, [k$$1 + i$$6], JAM.policy.p9);
        k$$1 = k$$1 + 1;
        v161 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      if(numberPosition$$1 == "above") {
        aboveNum = aboveNum + rightNum(adjustNumbering(i$$6, numberingAdjustment), "", groupSize$$2, tabIn$$3)
      }
      if(i$$6 >= stopBase$$2) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      v166 = j$$7 <= basePerLine$$2 / groupSize$$2
    }
    if(numberPosition$$1 == "left") {
      var v167 = outputWindow.document;
      JAM.call(v167.write, v167, [rightNum(adjustNumbering(lineNum, numberingAdjustment), "", 8, tabIn$$3) + lineOfText$$1 + "\n"], JAM.policy.p9);
      if(strands$$1 == "two") {
        var v169 = outputWindow.document;
        JAM.call(v169.write, v169, [rightNum(adjustNumbering(lineNum, numberingAdjustment), "", 8, tabIn$$3) + complement(lineOfText$$1) + "\n"], JAM.policy.p9);
        var v171 = outputWindow.document;
        JAM.call(v171.write, v171, ["\n"], JAM.policy.p9)
      }
    }else {
      if(numberPosition$$1 == "right") {
        var v173 = outputWindow.document;
        JAM.call(v173.write, v173, [lineOfText$$1 + adjustNumbering(i$$6, numberingAdjustment) + "\n"], JAM.policy.p9);
        if(strands$$1 == "two") {
          var v175 = outputWindow.document;
          JAM.call(v175.write, v175, [complement(lineOfText$$1) + adjustNumbering(i$$6, numberingAdjustment) + "\n"], JAM.policy.p9);
          var v177 = outputWindow.document;
          JAM.call(v177.write, v177, ["\n"], JAM.policy.p9)
        }
      }else {
        if(numberPosition$$1 == "above") {
          var v179 = outputWindow.document;
          JAM.call(v179.write, v179, [aboveNum + "\n"], JAM.policy.p9);
          var v181 = outputWindow.document;
          JAM.call(v181.write, v181, [lineOfText$$1 + "\n"], JAM.policy.p9);
          if(strands$$1 == "two") {
            var v183 = outputWindow.document;
            JAM.call(v183.write, v183, [complement(lineOfText$$1) + "\n"], JAM.policy.p9);
            var v185 = outputWindow.document;
            JAM.call(v185.write, v185, ["\n"], JAM.policy.p9)
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v190 = i$$6 < stopBase$$2
  }
  return true
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
  var v211 = i$$7 < stopBase$$3;
  for(;v211;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v199 = j$$8 <= basePerLine$$3 / groupSize$$3;
    for(;v199;) {
      var v194 = k$$2 < groupSize$$3;
      for(;v194;) {
        if(i$$7 + k$$2 >= stopBase$$3) {
          break
        }
        lineOfText$$2 = lineOfText$$2 + JAM.call(text$$13.charAt, text$$13, [k$$2 + i$$7], JAM.policy.p9);
        k$$2 = k$$2 + 1;
        v194 = k$$2 < groupSize$$3
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      if(numberPosition$$2 == "above") {
        aboveNum$$1 = aboveNum$$1 + rightNum(i$$7, "", groupSize$$3, tabIn$$4)
      }
      if(i$$7 >= stopBase$$3) {
        break
      }
      k$$2 = 0;
      j$$8 = j$$8 + 1;
      v199 = j$$8 <= basePerLine$$3 / groupSize$$3
    }
    if(numberPosition$$2 == "left") {
      var v200 = outputWindow.document;
      JAM.call(v200.write, v200, [rightNum(lineNum$$1, "", 8, tabIn$$4) + lineOfText$$2 + "\n"], JAM.policy.p9)
    }else {
      if(numberPosition$$2 == "right") {
        var v202 = outputWindow.document;
        JAM.call(v202.write, v202, [lineOfText$$2 + i$$7 + "\n"], JAM.policy.p9)
      }else {
        if(numberPosition$$2 == "above") {
          var v204 = outputWindow.document;
          JAM.call(v204.write, v204, [aboveNum$$1 + "\n"], JAM.policy.p9);
          var v206 = outputWindow.document;
          JAM.call(v206.write, v206, [lineOfText$$2 + "\n"], JAM.policy.p9)
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v211 = i$$7 < stopBase$$3
  }
  return true
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
  var v591 = sequence$$13.length <= firstIndexToMutate;
  if(!v591) {
    var v848 = lastIndexToMutate < 0;
    if(!v848) {
      v848 = lastIndexToMutate <= firstIndexToMutate
    }
    v591 = v848
  }
  if(v591) {
    numMut = 0
  }
  var i$$8 = 0;
  var v220 = i$$8 < numMut;
  for(;v220;) {
    maxNum = sequence$$13.length;
    randNum = JAM.call(Math.floor, Math, [JAM.call(Math.random, Math, [], JAM.policy.p9) * maxNum], JAM.policy.p9);
    var v593 = randNum < firstIndexToMutate;
    if(!v593) {
      v593 = randNum > lastIndexToMutate
    }
    if(v593) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v220 = i$$8 < numMut;
      continue
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p9);
    needNewChar = true;
    for(;needNewChar;) {
      componentsIndex = JAM.call(Math.round, Math, [JAM.call(Math.random, Math, [], JAM.policy.p9) * components$$1.length], JAM.policy.p9);
      if(componentsIndex == components$$1.length) {
        componentsIndex = 0
      }
      if(components$$1[componentsIndex] != currentChar) {
        needNewChar = false
      }
    }
    sequence$$13 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p9) + components$$1[componentsIndex] + JAM.call(sequence$$13.substring, sequence$$13, [randNum + 1, sequence$$13.length], JAM.policy.p9);
    i$$8 = i$$8 + 1;
    v220 = i$$8 < numMut
  }
  var v221 = outputWindow.document;
  JAM.call(v221.write, v221, [addReturns(sequence$$13)], JAM.policy.p9);
  return true
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v227 = j$$9 < lengthOut$$1;
  for(;v227;) {
    tempNum$$1 = JAM.call(Math.floor, Math, [JAM.call(Math.random, Math, [], JAM.policy.p9) * components$$2.length], JAM.policy.p9);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    if(sequence$$14.length == 60) {
      var v224 = outputWindow.document;
      JAM.call(v224.write, v224, [sequence$$14 + "\n"], JAM.policy.p9);
      sequence$$14 = ""
    }
    j$$9 = j$$9 + 1;
    v227 = j$$9 < lengthOut$$1
  }
  var v228 = outputWindow.document;
  JAM.call(v228.write, v228, [sequence$$14 + "\n"], JAM.policy.p9);
  return true
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
  if(dnaConformation == "circular") {
    shiftValue = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p9).length;
    sequence$$15 = JAM.call(sequence$$15.substring, sequence$$15, [sequence$$15.length - lookAhead, sequence$$15.length], JAM.policy.p9) + sequence$$15 + JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p9);
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v234 = outputWindow.document;
  JAM.call(v234.write, v234, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p9);
  var v235 = outputWindow.document;
  JAM.call(v235.write, v235, ['<tr><td class="title" width="200px">' + "Site:" + '</td><td class="title">' + "Positions:" + "</td></tr>\n"], JAM.policy.p9);
  var i$$9 = 0;
  var v252 = i$$9 < arrayOfItems.length;
  for(;v252;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v608 = arrayOfItems[i$$9];
    matchExp = JAM.call(v608.match, v608, [/\/.+\//], JAM.policy.p9) + "gi";
    matchPosition = 0;
    if(JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }")
    }else {
      matchExp = JAM.call(eval, null, [matchExp])
    }
    var v989 = arrayOfItems[i$$9];
    var v854 = JAM.call(v989.match, v989, [/\)\D*\d+/], JAM.policy.p9);
    var v609 = JAM.call(v854.toString, v854, [], JAM.policy.p9);
    cutDistance = parseFloat(JAM.call(v609.replace, v609, [/\)\D*/, ""], JAM.policy.p9));
    var v244 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p9);
    for(;v244;) {
      matchPosition = matchExp.lastIndex - cutDistance;
      var v610 = matchPosition >= lowerLimit;
      if(v610) {
        v610 = matchPosition < upperLimit
      }
      if(v610) {
        timesFound = timesFound + 1;
        tempString$$1 = tempString$$1 + ", " + (matchPosition - shiftValue + 1)
      }
      matchExp.lastIndex = matchExp.lastIndex - RegExp.lastMatch.length + 1;
      v244 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p9)
    }
    if(JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p9) != -1) {
      tempString$$1 = JAM.call(tempString$$1.replace, tempString$$1, [/none,\s*/, ""], JAM.policy.p9)
    }
    if(timesFound == 0) {
      backGroundClass = "none"
    }else {
      if(timesFound == 1) {
        backGroundClass = "one"
      }else {
        if(timesFound == 2) {
          backGroundClass = "two"
        }else {
          if(timesFound == 3) {
            backGroundClass = "three"
          }else {
            backGroundClass = "many"
          }
        }
      }
    }
    var v250 = outputWindow.document;
    var v1133 = '<tr><td class="' + backGroundClass + '">';
    var v1188 = arrayOfItems[i$$9];
    var v1170 = JAM.call(v1188.match, v1188, [/\([^\(]+\)/], JAM.policy.p9);
    var v1151 = JAM.call(v1170.toString, v1170, [], JAM.policy.p9);
    JAM.call(v250.write, v250, [v1133 + JAM.call(v1151.replace, v1151, [/\(|\)/g, ""], JAM.policy.p9) + '</td><td class="' + backGroundClass + '">' + tempString$$1 + "</td></tr>\n"], JAM.policy.p9);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    v252 = i$$9 < arrayOfItems.length
  }
  var v253 = outputWindow.document;
  JAM.call(v253.write, v253, ["</tbody></table>\n"], JAM.policy.p9);
  return true
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v254 = outputWindow.document;
  JAM.call(v254.write, v254, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p9);
  var v255 = outputWindow.document;
  JAM.call(v255.write, v255, ['<tr><td class="title">' + "Pattern:" + '</td><td class="title">' + "Times found:" + '</td><td class="title">' + "Percentage:" + "</td></tr>\n"], JAM.policy.p9);
  var i$$10 = 0;
  var v265 = i$$10 < arrayOfItems$$1.length;
  for(;v265;) {
    var tempNumber = 0;
    var v619 = arrayOfItems$$1[i$$10];
    var matchExp$$1 = JAM.call(v619.match, v619, [/\/[^\/]+\//], JAM.policy.p9) + "gi";
    if(JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1])
    }
    if(JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p9) != -1) {
      tempNumber = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p9).length
    }
    var percentage = 0;
    var v858 = originalLength + 1;
    var v1072 = arrayOfItems$$1[i$$10];
    if(v858 - parseFloat(JAM.call(v1072.match, v1072, [/\d+/], JAM.policy.p9)) > 0) {
      var v260 = 100 * tempNumber;
      var v622 = originalLength + 1;
      var v993 = arrayOfItems$$1[i$$10];
      percentage = v260 / (v622 - parseFloat(JAM.call(v993.match, v993, [/\d+/], JAM.policy.p9)))
    }
    var v263 = outputWindow.document;
    var v1189 = arrayOfItems$$1[i$$10];
    var v1171 = JAM.call(v1189.match, v1189, [/\([^\(]+\)\b/], JAM.policy.p9);
    var v1152 = JAM.call(v1171.toString, v1171, [], JAM.policy.p9);
    JAM.call(v263.write, v263, ["<tr><td>" + JAM.call(v1152.replace, v1152, [/\(|\)/g, ""], JAM.policy.p9) + "</td><td>" + tempNumber + "</td><td>" + JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p9) + "</td></tr>\n"], JAM.policy.p9);
    i$$10 = i$$10 + 1;
    v265 = i$$10 < arrayOfItems$$1.length
  }
  var v266 = outputWindow.document;
  JAM.call(v266.write, v266, ["</tbody></table>\n"], JAM.policy.p9);
  return true
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v273 = sequence$$17.length > 0;
  for(;v273;) {
    maxNum$$1 = sequence$$17.length;
    randNum$$1 = JAM.call(Math.floor, Math, [JAM.call(Math.random, Math, [], JAM.policy.p9) * maxNum$$1], JAM.policy.p9);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p9);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p9);
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [randNum$$1 + 1, sequence$$17.length], JAM.policy.p9);
    sequence$$17 = tempString1 + tempString2;
    if(tempSeq.length == 60) {
      var v270 = outputWindow.document;
      JAM.call(v270.write, v270, [tempSeq + "\n"], JAM.policy.p9);
      tempSeq = ""
    }
    v273 = sequence$$17.length > 0
  }
  var v274 = outputWindow.document;
  JAM.call(v274.write, v274, [tempSeq + "\n"], JAM.policy.p9);
  return true
}
function multiRevTrans(theDocument) {
  JAM.startProfile('compute');

  var newProtein = "";
  var maxInput$$3 = 2E4;
  var codonTable$$1;
  var alignArray$$1 = new Array;
  var titleArray = new Array;
  var sequenceArray$$1 = new Array;
  if(testScript() == false) {
    return false
  }
  var v631 = checkFormElement(theDocument.forms[0].elements[0]) == false;
  if(!v631) {
    var v864 = checkTextLength(theDocument.forms[0].elements[0].value, maxInput$$3) == false;
    if(!v864) {
      v864 = checkCodonTable(theDocument.forms[0].elements[4].value) == false
    }
    v631 = v864
  }
  if(v631) {
    return false
  }
  theAlignment = "X" + theDocument.forms[0].elements[0].value;
  alignArray$$1 = JAM.call(theAlignment.split, theAlignment, [/[>%#]/], JAM.policy.p9);
  if(earlyCheckAlign(alignArray$$1) == false) {
    return false
  }
  var i$$11 = 1;
  var v294 = i$$11 < alignArray$$1.length;
  for(;v294;) {
    var v280 = titleArray;
    var v281 = i$$11 - 1;
    var v635 = alignArray$$1[i$$11];
    var v1277 = JAM.call(v635.match, v635, [/[^\f\n\r]+[\f\n\r]/], JAM.policy.p9);
    v280[v281] = v1277;
    var v282 = titleArray;
    var v283 = i$$11 - 1;
    var v1000 = titleArray[i$$11 - 1];
    var v636 = filterFastaTitle(JAM.call(v1000.toString, v1000, [], JAM.policy.p9));
    var v1278 = JAM.call(v636.replace, v636, [/[\f\n\r]/g, ""], JAM.policy.p9);
    v282[v283] = v1278;
    var v284 = titleArray;
    var v285 = i$$11 - 1;
    var v637 = titleArray[i$$11 - 1];
    var v1279 = JAM.call(v637.substring, v637, [0, 20], JAM.policy.p9);
    v284[v285] = v1279;
    if(i$$11 == 1) {
      longestTitle = titleArray[i$$11 - 1].length
    }else {
      if(titleArray[i$$11 - 1].length > longestTitle) {
        longestTitle = titleArray[i$$11 - 1].length
      }
    }
    var v290 = sequenceArray$$1;
    var v291 = i$$11 - 1;
    var v641 = alignArray$$1[i$$11];
    var v1280 = JAM.call(v641.replace, v641, [/[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p9);
    v290[v291] = v1280;
    var v292 = sequenceArray$$1;
    var v293 = i$$11 - 1;
    var v1281 = filterAlignSeq(sequenceArray$$1[i$$11 - 1]);
    v292[v293] = v1281;
    i$$11 = i$$11 + 1;
    v294 = i$$11 < alignArray$$1.length
  }
  codonTable$$1 = makeCodonTable(theDocument.forms[0].elements[4].value);
  if(codonTable$$1 == false) {
    return false
  }
  openWindow("Multi Rev Trans");
  i$$11 = 0;
  var v301 = i$$11 < titleArray.length;
  for(;v301;) {
    var v297 = outputWindow.document;
    JAM.call(v297.write, v297, [getInfoFromTitleAndSequence(titleArray[i$$11], sequenceArray$$1[i$$11])], JAM.policy.p9);
    if(i$$11 < titleArray.length - 1) {
      var v299 = outputWindow.document;
      JAM.call(v299.write, v299, ['<div class="info">Combined with:</div>\n'], JAM.policy.p9)
    }
    i$$11 = i$$11 + 1;
    v301 = i$$11 < titleArray.length
  }
  openPre();
  writeConsensusSeq(sequenceArray$$1, codonTable$$1);
  var v302 = outputWindow.document;
  JAM.call(v302.write, v302, ["\n"], JAM.policy.p9);
  writeMultiRevTrans(sequenceArray$$1, codonTable$$1);
  closePre();
  closeWindow();

  JAM.stopProfile('compute');
  return true
}
function writeConsensusSeq(sequenceArray$$2, codonTable$$2) {
  var consensusSeq = new Array;
  var aminoAcid;
  var firstG;
  var firstA;
  var firstT;
  var firstC;
  var secondG;
  var secondA;
  var secondT;
  var secondC;
  var thirdG;
  var thirdA;
  var thirdT;
  var thirdC;
  var i$$12 = 0;
  var v323 = i$$12 < sequenceArray$$2[0].length;
  for(;v323;) {
    firstG = 0;
    firstA = 0;
    firstT = 0;
    firstC = 0;
    secondG = 0;
    secondA = 0;
    secondT = 0;
    secondC = 0;
    thirdG = 0;
    thirdA = 0;
    thirdT = 0;
    thirdC = 0;
    var j$$10 = 0;
    var v319 = j$$10 < sequenceArray$$2.length;
    for(;v319;) {
      var v1003 = sequenceArray$$2[j$$10];
      var v652 = JAM.call(v1003.charAt, v1003, [i$$12], JAM.policy.p9) == "-";
      if(!v652) {
        var v1004 = sequenceArray$$2[j$$10];
        v652 = JAM.call(v1004.charAt, v1004, [i$$12], JAM.policy.p9) == "."
      }
      if(v652) {
        firstG = firstG + 0.25;
        firstA = firstA + 0.25;
        firstT = firstT + 0.25;
        firstC = firstC + 0.25;
        secondG = secondG + 0.25;
        secondA = secondA + 0.25;
        secondT = secondT + 0.25;
        secondC = secondC + 0.25;
        thirdG = thirdG + 0.25;
        thirdA = thirdA + 0.25;
        thirdT = thirdT + 0.25;
        thirdC = thirdC + 0.25
      }else {
        try {
          var v303 = codonTable$$2;
          var v1005 = sequenceArray$$2[j$$10];
          var v877 = JAM.call(v1005.charAt, v1005, [i$$12], JAM.policy.p9);
          var v653 = JAM.call(v877.toString, v877, [], JAM.policy.p9);
          aminoAcid = v303[JAM.call(v653.toLowerCase, v653, [], JAM.policy.p9)]
        }catch(e$$5) {
          var v878 = sequenceArray$$2[j$$10];
          alert("A codon table entry wasn't found for " + JAM.call(v878.charAt, v878, [i$$12], JAM.policy.p9));
          return false
        }
        firstG = firstG + aminoAcid.baseFreqPosOne[0];
        firstA = firstA + aminoAcid.baseFreqPosOne[1];
        firstT = firstT + aminoAcid.baseFreqPosOne[2];
        firstC = firstC + aminoAcid.baseFreqPosOne[3];
        secondG = secondG + aminoAcid.baseFreqPosTwo[0];
        secondA = secondA + aminoAcid.baseFreqPosTwo[1];
        secondT = secondT + aminoAcid.baseFreqPosTwo[2];
        secondC = secondC + aminoAcid.baseFreqPosTwo[3];
        thirdG = thirdG + aminoAcid.baseFreqPosThree[0];
        thirdA = thirdA + aminoAcid.baseFreqPosThree[1];
        thirdT = thirdT + aminoAcid.baseFreqPosThree[2];
        thirdC = thirdC + aminoAcid.baseFreqPosThree[3]
      }
      j$$10 = j$$10 + 1;
      v319 = j$$10 < sequenceArray$$2.length
    }
    JAM.call(consensusSeq.push, consensusSeq, [_getConsensusBase([firstG, firstA, firstT, firstC])], JAM.policy.p9);
    JAM.call(consensusSeq.push, consensusSeq, [_getConsensusBase([secondG, secondA, secondT, secondC])], JAM.policy.p9);
    JAM.call(consensusSeq.push, consensusSeq, [_getConsensusBase([thirdG, thirdA, thirdT, thirdC])], JAM.policy.p9);
    i$$12 = i$$12 + 1;
    v323 = i$$12 < sequenceArray$$2[0].length
  }
  var v324 = outputWindow.document;
  JAM.call(v324.write, v324, ["&gt;" + "reverse translation of alignment to a " + consensusSeq.length + " base sequence of consensus codons.\n"], JAM.policy.p9);
  var v326 = outputWindow.document;
  JAM.call(v326.write, v326, [addReturns(JAM.call(consensusSeq.join, consensusSeq, [""], JAM.policy.p10))], JAM.policy.p9);
  var v328 = outputWindow.document;
  JAM.call(v328.write, v328, ["\n"], JAM.policy.p9);
  return true
}
function writeMultiRevTrans(sequenceArray$$3, codonTable$$3) {
  var markG = "gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg";
  var markA = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
  var markT = "TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT";
  var markC = "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC";
  var markLength = markG.length;
  var aminoAcid$$1;
  var columnSeq;
  var firstG$$1;
  var firstA$$1;
  var firstT$$1;
  var firstC$$1;
  var secondG$$1;
  var secondA$$1;
  var secondT$$1;
  var secondC$$1;
  var thirdG$$1;
  var thirdA$$1;
  var thirdT$$1;
  var thirdC$$1;
  var i$$13 = 0;
  var v373 = i$$13 < sequenceArray$$3[0].length;
  for(;v373;) {
    columnSeq = "";
    firstG$$1 = 0;
    firstA$$1 = 0;
    firstT$$1 = 0;
    firstC$$1 = 0;
    secondG$$1 = 0;
    secondA$$1 = 0;
    secondT$$1 = 0;
    secondC$$1 = 0;
    thirdG$$1 = 0;
    thirdA$$1 = 0;
    thirdT$$1 = 0;
    thirdC$$1 = 0;
    var j$$11 = 0;
    var v347 = j$$11 < sequenceArray$$3.length;
    for(;v347;) {
      var v329 = columnSeq;
      var v676 = sequenceArray$$3[j$$11];
      columnSeq = v329 + JAM.call(v676.charAt, v676, [i$$13], JAM.policy.p9);
      var v1006 = sequenceArray$$3[j$$11];
      var v677 = JAM.call(v1006.charAt, v1006, [i$$13], JAM.policy.p9) == "-";
      if(!v677) {
        var v1007 = sequenceArray$$3[j$$11];
        v677 = JAM.call(v1007.charAt, v1007, [i$$13], JAM.policy.p9) == "."
      }
      if(v677) {
        firstG$$1 = firstG$$1 + 0.25;
        firstA$$1 = firstA$$1 + 0.25;
        firstT$$1 = firstT$$1 + 0.25;
        firstC$$1 = firstC$$1 + 0.25;
        secondG$$1 = secondG$$1 + 0.25;
        secondA$$1 = secondA$$1 + 0.25;
        secondT$$1 = secondT$$1 + 0.25;
        secondC$$1 = secondC$$1 + 0.25;
        thirdG$$1 = thirdG$$1 + 0.25;
        thirdA$$1 = thirdA$$1 + 0.25;
        thirdT$$1 = thirdT$$1 + 0.25;
        thirdC$$1 = thirdC$$1 + 0.25
      }else {
        try {
          var v331 = codonTable$$3;
          var v1008 = sequenceArray$$3[j$$11];
          var v886 = JAM.call(v1008.charAt, v1008, [i$$13], JAM.policy.p9);
          var v678 = JAM.call(v886.toString, v886, [], JAM.policy.p9);
          aminoAcid$$1 = v331[JAM.call(v678.toLowerCase, v678, [], JAM.policy.p9)]
        }catch(e$$6) {
          var v887 = sequenceArray$$3[j$$11];
          alert("A codon table entry wasn't found for " + JAM.call(v887.charAt, v887, [i$$13], JAM.policy.p9));
          return false
        }
        firstG$$1 = firstG$$1 + aminoAcid$$1.baseFreqPosOne[0];
        firstA$$1 = firstA$$1 + aminoAcid$$1.baseFreqPosOne[1];
        firstT$$1 = firstT$$1 + aminoAcid$$1.baseFreqPosOne[2];
        firstC$$1 = firstC$$1 + aminoAcid$$1.baseFreqPosOne[3];
        secondG$$1 = secondG$$1 + aminoAcid$$1.baseFreqPosTwo[0];
        secondA$$1 = secondA$$1 + aminoAcid$$1.baseFreqPosTwo[1];
        secondT$$1 = secondT$$1 + aminoAcid$$1.baseFreqPosTwo[2];
        secondC$$1 = secondC$$1 + aminoAcid$$1.baseFreqPosTwo[3];
        thirdG$$1 = thirdG$$1 + aminoAcid$$1.baseFreqPosThree[0];
        thirdA$$1 = thirdA$$1 + aminoAcid$$1.baseFreqPosThree[1];
        thirdT$$1 = thirdT$$1 + aminoAcid$$1.baseFreqPosThree[2];
        thirdC$$1 = thirdC$$1 + aminoAcid$$1.baseFreqPosThree[3]
      }
      j$$11 = j$$11 + 1;
      v347 = j$$11 < sequenceArray$$3.length
    }
    firstG$$1 = JAM.call(Math.round, Math, [markLength * firstG$$1 / sequenceArray$$3.length], JAM.policy.p9);
    firstA$$1 = JAM.call(Math.round, Math, [markLength * firstA$$1 / sequenceArray$$3.length], JAM.policy.p9);
    firstT$$1 = JAM.call(Math.round, Math, [markLength * firstT$$1 / sequenceArray$$3.length], JAM.policy.p9);
    firstC$$1 = JAM.call(Math.round, Math, [markLength * firstC$$1 / sequenceArray$$3.length], JAM.policy.p9);
    secondG$$1 = JAM.call(Math.round, Math, [markLength * secondG$$1 / sequenceArray$$3.length], JAM.policy.p9);
    secondA$$1 = JAM.call(Math.round, Math, [markLength * secondA$$1 / sequenceArray$$3.length], JAM.policy.p9);
    secondT$$1 = JAM.call(Math.round, Math, [markLength * secondT$$1 / sequenceArray$$3.length], JAM.policy.p9);
    secondC$$1 = JAM.call(Math.round, Math, [markLength * secondC$$1 / sequenceArray$$3.length], JAM.policy.p9);
    thirdG$$1 = JAM.call(Math.round, Math, [markLength * thirdG$$1 / sequenceArray$$3.length], JAM.policy.p9);
    thirdA$$1 = JAM.call(Math.round, Math, [markLength * thirdA$$1 / sequenceArray$$3.length], JAM.policy.p9);
    thirdT$$1 = JAM.call(Math.round, Math, [markLength * thirdT$$1 / sequenceArray$$3.length], JAM.policy.p9);
    thirdC$$1 = JAM.call(Math.round, Math, [markLength * thirdC$$1 / sequenceArray$$3.length], JAM.policy.p9);
    var v360 = outputWindow.document;
    JAM.call(v360.write, v360, ["<b>" + (i$$13 + 1) + "_" + columnSeq + "_" + "first</b>\n"], JAM.policy.p9);
    var v362 = outputWindow.document;
    var v1256 = "g" + JAM.call(markG.substring, markG, [0, firstG$$1], JAM.policy.p9) + " ";
    var v1263 = firstG$$1 / markLength;
    var v1221 = v1256 + JAM.call(v1263.toFixed, v1263, [2], JAM.policy.p9) + "\n" + "a" + JAM.call(markA.substring, markA, [0, firstA$$1], JAM.policy.p9) + " ";
    var v1232 = firstA$$1 / markLength;
    var v1155 = v1221 + JAM.call(v1232.toFixed, v1232, [2], JAM.policy.p9) + "\n" + "T" + JAM.call(markT.substring, markT, [0, firstT$$1], JAM.policy.p9) + " ";
    var v1175 = firstT$$1 / markLength;
    var v889 = v1155 + JAM.call(v1175.toFixed, v1175, [2], JAM.policy.p9) + "\n" + "C" + JAM.call(markC.substring, markC, [0, firstC$$1], JAM.policy.p9) + " ";
    var v1011 = firstC$$1 / markLength;
    JAM.call(v362.write, v362, [v889 + JAM.call(v1011.toFixed, v1011, [2], JAM.policy.p9) + "\n"], JAM.policy.p9);
    var v364 = outputWindow.document;
    JAM.call(v364.write, v364, ["<b>" + (i$$13 + 1) + "_" + columnSeq + "_" + "second</b>\n"], JAM.policy.p9);
    var v366 = outputWindow.document;
    var v1258 = "g" + JAM.call(markG.substring, markG, [0, secondG$$1], JAM.policy.p9) + " ";
    var v1265 = secondG$$1 / markLength;
    var v1223 = v1258 + JAM.call(v1265.toFixed, v1265, [2], JAM.policy.p9) + "\n" + "a" + JAM.call(markA.substring, markA, [0, secondA$$1], JAM.policy.p9) + " ";
    var v1234 = secondA$$1 / markLength;
    var v1157 = v1223 + JAM.call(v1234.toFixed, v1234, [2], JAM.policy.p9) + "\n" + "T" + JAM.call(markT.substring, markT, [0, secondT$$1], JAM.policy.p9) + " ";
    var v1177 = secondT$$1 / markLength;
    var v892 = v1157 + JAM.call(v1177.toFixed, v1177, [2], JAM.policy.p9) + "\n" + "C" + JAM.call(markC.substring, markC, [0, secondC$$1], JAM.policy.p9) + " ";
    var v1014 = secondC$$1 / markLength;
    JAM.call(v366.write, v366, [v892 + JAM.call(v1014.toFixed, v1014, [2], JAM.policy.p9) + "\n"], JAM.policy.p9);
    var v368 = outputWindow.document;
    JAM.call(v368.write, v368, ["<b>" + (i$$13 + 1) + "_" + columnSeq + "_" + "third</b>\n"], JAM.policy.p9);
    var v370 = outputWindow.document;
    var v1260 = "g" + JAM.call(markG.substring, markG, [0, thirdG$$1], JAM.policy.p9) + " ";
    var v1267 = thirdG$$1 / markLength;
    var v1225 = v1260 + JAM.call(v1267.toFixed, v1267, [2], JAM.policy.p9) + "\n" + "a" + JAM.call(markA.substring, markA, [0, thirdA$$1], JAM.policy.p9) + " ";
    var v1236 = thirdA$$1 / markLength;
    var v1159 = v1225 + JAM.call(v1236.toFixed, v1236, [2], JAM.policy.p9) + "\n" + "T" + JAM.call(markT.substring, markT, [0, thirdT$$1], JAM.policy.p9) + " ";
    var v1179 = thirdT$$1 / markLength;
    var v895 = v1159 + JAM.call(v1179.toFixed, v1179, [2], JAM.policy.p9) + "\n" + "C" + JAM.call(markC.substring, markC, [0, thirdC$$1], JAM.policy.p9) + " ";
    var v1017 = thirdC$$1 / markLength;
    JAM.call(v370.write, v370, [v895 + JAM.call(v1017.toFixed, v1017, [2], JAM.policy.p9) + "\n"], JAM.policy.p9);
    var v372 = outputWindow.document;
    JAM.call(v372.write, v372, ["\n"], JAM.policy.p9);
    i$$13 = i$$13 + 1;
    v373 = i$$13 < sequenceArray$$3[0].length
  }
  return true
}
function makeCodonTable(gcgTable) {
  gcgTable = JAM.call(gcgTable.replace, gcgTable, [/[^\.]*\.\./, ""], JAM.policy.p9);
  var tableArray = JAM.call(gcgTable.split, gcgTable, [/[\f\n\r]/], JAM.policy.p9);
  var re$$3 = /(\w+)\s+(\w+)\s+(\S+)\s+(\S+)\s+(\S+)/g;
  var matchArray$$2;
  var codonTable$$4 = new CodonTable;
  var i$$14 = 0;
  var v378 = i$$14 < tableArray.length;
  for(;v378;) {
    var v377 = matchArray$$2 = JAM.call(re$$3.exec, re$$3, [tableArray[i$$14]], JAM.policy.p9);
    for(;v377;) {
      try {
        var v726 = codonTable$$4;
        var v898 = matchArray$$2[1];
        var v374 = v726[JAM.call(v898.toLowerCase, v898, [], JAM.policy.p9)];
        JAM.call(v374.addCodon, v374, [new Codon(matchArray$$2[2], parseFloat(matchArray$$2[3]), parseFloat(matchArray$$2[4]), parseFloat(matchArray$$2[5]))], JAM.policy.p9)
      }catch(e$$7) {
        alert("There is a problem with a line of the codon table: " + matchArray$$2[1] + " " + matchArray$$2[2] + " " + matchArray$$2[3] + " " + matchArray$$2[4] + " " + matchArray$$2[4]);
        return false
      }
      v377 = matchArray$$2 = JAM.call(re$$3.exec, re$$3, [tableArray[i$$14]], JAM.policy.p9)
    }
    i$$14 = i$$14 + 1;
    v378 = i$$14 < tableArray.length
  }
  var v379 = codonTable$$4.a;
  JAM.call(v379.determineBaseFreq, v379, [], JAM.policy.p9);
  var v380 = codonTable$$4.c;
  JAM.call(v380.determineBaseFreq, v380, [], JAM.policy.p9);
  var v381 = codonTable$$4.d;
  JAM.call(v381.determineBaseFreq, v381, [], JAM.policy.p9);
  var v382 = codonTable$$4.e;
  JAM.call(v382.determineBaseFreq, v382, [], JAM.policy.p9);
  var v383 = codonTable$$4.f;
  JAM.call(v383.determineBaseFreq, v383, [], JAM.policy.p9);
  var v384 = codonTable$$4.g;
  JAM.call(v384.determineBaseFreq, v384, [], JAM.policy.p9);
  var v385 = codonTable$$4.h;
  JAM.call(v385.determineBaseFreq, v385, [], JAM.policy.p9);
  var v386 = codonTable$$4.i;
  JAM.call(v386.determineBaseFreq, v386, [], JAM.policy.p9);
  var v387 = codonTable$$4.k;
  JAM.call(v387.determineBaseFreq, v387, [], JAM.policy.p9);
  var v388 = codonTable$$4.l;
  JAM.call(v388.determineBaseFreq, v388, [], JAM.policy.p9);
  var v389 = codonTable$$4.m;
  JAM.call(v389.determineBaseFreq, v389, [], JAM.policy.p9);
  var v390 = codonTable$$4.n;
  JAM.call(v390.determineBaseFreq, v390, [], JAM.policy.p9);
  var v391 = codonTable$$4.p;
  JAM.call(v391.determineBaseFreq, v391, [], JAM.policy.p9);
  var v392 = codonTable$$4.q;
  JAM.call(v392.determineBaseFreq, v392, [], JAM.policy.p9);
  var v393 = codonTable$$4.r;
  JAM.call(v393.determineBaseFreq, v393, [], JAM.policy.p9);
  var v394 = codonTable$$4.s;
  JAM.call(v394.determineBaseFreq, v394, [], JAM.policy.p9);
  var v395 = codonTable$$4.t;
  JAM.call(v395.determineBaseFreq, v395, [], JAM.policy.p9);
  var v396 = codonTable$$4.v;
  JAM.call(v396.determineBaseFreq, v396, [], JAM.policy.p9);
  var v397 = codonTable$$4.w;
  JAM.call(v397.determineBaseFreq, v397, [], JAM.policy.p9);
  var v398 = codonTable$$4.y;
  JAM.call(v398.determineBaseFreq, v398, [], JAM.policy.p9);
  var v399 = codonTable$$4.z;
  JAM.call(v399.determineBaseFreq, v399, [], JAM.policy.p9);
  return codonTable$$4
}
function CodonTable() {
  var v1282 = new AminoAcid;
  this.a = v1282;
  var v1283 = new AminoAcid;
  this.c = v1283;
  var v1284 = new AminoAcid;
  this.d = v1284;
  var v1285 = new AminoAcid;
  this.e = v1285;
  var v1286 = new AminoAcid;
  this.f = v1286;
  var v1287 = new AminoAcid;
  this.g = v1287;
  var v1288 = new AminoAcid;
  this.h = v1288;
  var v1289 = new AminoAcid;
  this.i = v1289;
  var v1290 = new AminoAcid;
  this.k = v1290;
  var v1291 = new AminoAcid;
  this.l = v1291;
  var v1292 = new AminoAcid;
  this.m = v1292;
  var v1293 = new AminoAcid;
  this.n = v1293;
  var v1294 = new AminoAcid;
  this.p = v1294;
  var v1295 = new AminoAcid;
  this.q = v1295;
  var v1296 = new AminoAcid;
  this.r = v1296;
  var v1297 = new AminoAcid;
  this.s = v1297;
  var v1298 = new AminoAcid;
  this.t = v1298;
  var v1299 = new AminoAcid;
  this.v = v1299;
  var v1300 = new AminoAcid;
  this.w = v1300;
  var v1301 = new AminoAcid;
  this.y = v1301;
  var v1302 = new AminoAcid;
  this.z = v1302;
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
  return
}
function addCodon(codon$$1) {
  var v400 = this.codons;
  JAM.call(v400.push, v400, [codon$$1], JAM.policy.p9);
  return
}
function determineBaseFreq() {
  JAM.call(this.fixFraction, this, [], JAM.policy.p9);
  var i$$15 = 0;
  var v425 = i$$15 < this.codons.length;
  for(;v425;) {
    var v904 = this.codons[i$$15].sequence;
    if(JAM.call(v904.charAt, v904, [0], JAM.policy.p9) == "g") {
      this.baseFreqPosOne[0] = this.baseFreqPosOne[0] + this.codons[i$$15].fraction
    }else {
      var v907 = this.codons[i$$15].sequence;
      if(JAM.call(v907.charAt, v907, [0], JAM.policy.p9) == "a") {
        this.baseFreqPosOne[1] = this.baseFreqPosOne[1] + this.codons[i$$15].fraction
      }else {
        var v910 = this.codons[i$$15].sequence;
        if(JAM.call(v910.charAt, v910, [0], JAM.policy.p9) == "t") {
          this.baseFreqPosOne[2] = this.baseFreqPosOne[2] + this.codons[i$$15].fraction
        }else {
          var v913 = this.codons[i$$15].sequence;
          if(JAM.call(v913.charAt, v913, [0], JAM.policy.p9) == "c") {
            this.baseFreqPosOne[3] = this.baseFreqPosOne[3] + this.codons[i$$15].fraction
          }
        }
      }
    }
    var v916 = this.codons[i$$15].sequence;
    if(JAM.call(v916.charAt, v916, [1], JAM.policy.p9) == "g") {
      this.baseFreqPosTwo[0] = this.baseFreqPosTwo[0] + this.codons[i$$15].fraction
    }else {
      var v919 = this.codons[i$$15].sequence;
      if(JAM.call(v919.charAt, v919, [1], JAM.policy.p9) == "a") {
        this.baseFreqPosTwo[1] = this.baseFreqPosTwo[1] + this.codons[i$$15].fraction
      }else {
        var v922 = this.codons[i$$15].sequence;
        if(JAM.call(v922.charAt, v922, [1], JAM.policy.p9) == "t") {
          this.baseFreqPosTwo[2] = this.baseFreqPosTwo[2] + this.codons[i$$15].fraction
        }else {
          var v925 = this.codons[i$$15].sequence;
          if(JAM.call(v925.charAt, v925, [1], JAM.policy.p9) == "c") {
            this.baseFreqPosTwo[3] = this.baseFreqPosTwo[3] + this.codons[i$$15].fraction
          }
        }
      }
    }
    var v928 = this.codons[i$$15].sequence;
    if(JAM.call(v928.charAt, v928, [2], JAM.policy.p9) == "g") {
      this.baseFreqPosThree[0] = this.baseFreqPosThree[0] + this.codons[i$$15].fraction
    }else {
      var v931 = this.codons[i$$15].sequence;
      if(JAM.call(v931.charAt, v931, [2], JAM.policy.p9) == "a") {
        this.baseFreqPosThree[1] = this.baseFreqPosThree[1] + this.codons[i$$15].fraction
      }else {
        var v934 = this.codons[i$$15].sequence;
        if(JAM.call(v934.charAt, v934, [2], JAM.policy.p9) == "t") {
          this.baseFreqPosThree[2] = this.baseFreqPosThree[2] + this.codons[i$$15].fraction
        }else {
          var v937 = this.codons[i$$15].sequence;
          if(JAM.call(v937.charAt, v937, [2], JAM.policy.p9) == "c") {
            this.baseFreqPosThree[3] = this.baseFreqPosThree[3] + this.codons[i$$15].fraction
          }
        }
      }
    }
    i$$15 = i$$15 + 1;
    v425 = i$$15 < this.codons.length
  }
  return true
}
function fixFraction() {
  var perThouTotal = 0;
  var i$$16 = 0;
  var v427 = i$$16 < this.codons.length;
  for(;v427;) {
    perThouTotal = perThouTotal + this.codons[i$$16].perThou;
    i$$16 = i$$16 + 1;
    v427 = i$$16 < this.codons.length
  }
  if(perThouTotal == 0) {
    return false
  }
  i$$16 = 0;
  var v430 = i$$16 < this.codons.length;
  for(;v430;) {
    this.codons[i$$16].fraction = this.codons[i$$16].perThou / perThouTotal;
    i$$16 = i$$16 + 1;
    v430 = i$$16 < this.codons.length
  }
  return true
}
function AminoAcid() {
  var v1303 = new Array;
  this.codons = v1303;
  var v1304 = new Array(0, 0, 0, 0);
  this.baseFreqPosOne = v1304;
  var v1305 = new Array(0, 0, 0, 0);
  this.baseFreqPosTwo = v1305;
  var v1306 = new Array(0, 0, 0, 0);
  this.baseFreqPosThree = v1306;
  return
}
function Codon(sequence$$18, number, perThou, fraction) {
  var v1307 = JAM.call(sequence$$18.toLowerCase, sequence$$18, [], JAM.policy.p9);
  this.sequence = v1307;
  this.number = number;
  this.perThou = perThou;
  this.fraction = fraction;
  return
}
function _getConsensusBase(baseFreq) {
  var g;
  var a;
  var t;
  var c;
  if(baseFreq[0] > 0) {
    g = true
  }
  if(baseFreq[1] > 0) {
    a = true
  }
  if(baseFreq[2] > 0) {
    t = true
  }
  if(baseFreq[3] > 0) {
    c = true
  }
  var v785 = !g;
  if(v785) {
    var v947 = !a;
    if(v947) {
      var v1045 = !c;
      if(v1045) {
        v1045 = !t
      }
      v947 = v1045
    }
    v785 = v947
  }
  if(v785) {
    return"n"
  }
  var v786 = g;
  if(v786) {
    var v948 = a;
    if(v948) {
      v948 = c && t
    }
    v786 = v948
  }
  if(v786) {
    return"n"
  }else {
    var v787 = a;
    if(v787) {
      v787 = c && t
    }
    if(v787) {
      return"h"
    }else {
      var v788 = a;
      if(v788) {
        v788 = g && t
      }
      if(v788) {
        return"d"
      }else {
        var v789 = c;
        if(v789) {
          v789 = g && t
        }
        if(v789) {
          return"b"
        }else {
          if(a && c) {
            return"m"
          }else {
            if(g && t) {
              return"k"
            }else {
              if(a && t) {
                return"w"
              }else {
                if(g && c) {
                  return"s"
                }else {
                  if(c && t) {
                    return"y"
                  }else {
                    if(a && g) {
                      return"r"
                    }else {
                      if(t) {
                        return"t"
                      }else {
                        if(g) {
                          return"g"
                        }else {
                          if(c) {
                            return"c"
                          }else {
                            if(a) {
                              return"a"
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
  return"?"
}
new AminoAcid;
AminoAcid.prototype.addCodon = addCodon;
AminoAcid.prototype.determineBaseFreq = determineBaseFreq;
AminoAcid.prototype.fixFraction = fixFraction;
JAM.set(document, "onload", v2);
JAM.set(JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p9), "onclick", v3);
JAM.set(JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p9), "onclick", v4);

JAM.stopProfile('load');
