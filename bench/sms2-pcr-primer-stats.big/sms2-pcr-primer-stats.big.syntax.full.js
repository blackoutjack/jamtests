// sms2-pcr-primer-stats.js
function v4() {
  var v1293 = document.forms;
  introspect(JAM.policy.p26) {
    var v1035 = v1293[0]
  }
  var v611 = v1035.elements;
  introspect(JAM.policy.p26) {
    var v5 = v611[0]
  }
  v5.value = " ";
  var v1294 = document.forms;
  introspect(JAM.policy.p26) {
    var v1036 = v1294[0]
  }
  var v612 = v1036.elements;
  introspect(JAM.policy.p26) {
    var v6 = v612[4]
  }
  v6.value = " ";
  return;
}
function v3() {
  try {
    JAM.call(pcrPrimerStats, null, [document], JAM.policy.p38);
  } catch (e$$5) {
    JAM.call(alert, null, ["The following error was encountered: " + e$$5], JAM.policy.p38);
  }
  return;
}
function v2() {
  var v8 = document.main_form.main_submit;
  JAM.call(v8.focus, v8, [], JAM.policy.p39);
  return;
}
function addReturns(sequence) {
  function v0(str$$6, p1, offset$$8, s$$2) {
    return p1 + "\n";
  }
  sequence = JAM.call(sequence.replace, sequence, [/(.{60})/g, v0], JAM.policy.p40);
  return sequence;
}
function checkAlign(arrayOfTitles, arrayOfSequences) {
  introspect(JAM.policy.p26) {
    var v9 = arrayOfSequences[0]
  }
  var lengthOfAlign = v9.length;
  if (arrayOfSequences.length < 2) {
    JAM.call(alert, null, ["Please enter an alignment consisting of at least two sequences."], JAM.policy.p22);
    return false;
  }
  var i$$1 = 0;
  var v12 = i$$1 < arrayOfTitles.length;
  for (;v12;) {
    introspect(JAM.policy.p26) {
      var v1406 = arrayOfTitles[i$$1]
    }
    var v1037 = JAM.call(v1406.search, v1406, [/\S/], JAM.policy.p38) == -1;
    if (!v1037) {
      introspect(JAM.policy.p26) {
        var v1407 = arrayOfSequences[i$$1]
      }
      v1037 = JAM.call(v1407.search, v1407, [/\S/], JAM.policy.p38) == -1;
    }
    var v616 = v1037;
    if (!v616) {
      introspect(JAM.policy.p26) {
        var v1298 = arrayOfSequences[i$$1]
      }
      v616 = v1298.length != lengthOfAlign;
    }
    if (v616) {
      JAM.call(alert, null, ["There is a problem with the alignment format."], JAM.policy.p22);
      return false;
    }
    i$$1 = i$$1 + 1;
    v12 = i$$1 < arrayOfTitles.length;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v1408 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p38) == -1;
  if (!v1408) {
    v1408 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p38) == -1;
  }
  var v1299 = v1408;
  if (!v1299) {
    v1299 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p38) == -1;
  }
  var v1040 = v1299;
  if (!v1040) {
    v1040 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p38) == -1;
  }
  var v618 = v1040;
  if (!v618) {
    v618 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p38) == -1;
  }
  if (v618) {
    JAM.call(alert, null, ["The codon table has been entered incorrectly."], JAM.policy.p22);
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v1043 = formElement.value;
  if (JAM.call(v1043.search, v1043, [/\S/], JAM.policy.p38) == -1) {
    JAM.call(alert, null, ["Please enter some text."], JAM.policy.p22);
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
    introspect(JAM.policy.p26) {
      var v1044 = arrayOfPatterns[z$$2]
    }
    if (JAM.call(v1044.search, v1044, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p38) == -1) {
      JAM.call(alert, null, ["Genetic code error: one or more patterns have been entered incorrectly."], JAM.policy.p22);
      return false;
    }
    introspect(JAM.policy.p26) {
      var v1045 = arrayOfPatterns[z$$2]
    }
    if (JAM.call(moreExpressionCheck, null, [v1045], JAM.policy.p38) == false) {
      JAM.call(alert, null, ["Genetic code error: one or more patterns have been entered incorrectly."], JAM.policy.p22);
      return false;
    }
    z$$2 = z$$2 + 1;
    v17 = z$$2 < arrayOfPatterns.length;
  }
  var geneticCodeMatchResult = JAM.new(Array, [arrayOfPatterns.length], JAM.policy.p38);
  var geneticCodeMatchExp = JAM.new(Array, [arrayOfPatterns.length], JAM.policy.p38);
  var j = 0;
  var v26 = j < arrayOfPatterns.length;
  for (;v26;) {
    var v20 = geneticCodeMatchExp;
    var v21 = j;
    introspect(JAM.policy.p26) {
      var v1302 = arrayOfPatterns[j]
    }
    var v625 = JAM.call(v1302.match, v1302, [/\/.+\//], JAM.policy.p38) + "gi";
    if (JAM.isEval(eval)) {
      var v1551 = eval("introspect(JAM.policy.pFull) { " + v625 + " }")
    } else {
      var v1551 = JAM.call(eval, null, [v625])
    }
    introspect(JAM.policy.p27) {
      v20[v21] = v1551;
    }
    var v22 = geneticCodeMatchResult;
    var v23 = j;
    introspect(JAM.policy.p26) {
      var v1047 = arrayOfPatterns[j]
    }
    var v626 = JAM.call(v1047.match, v1047, [/=[a-zA-Z\*]/], JAM.policy.p38);
    var v1552 = JAM.call(v626.toString, v626, [], JAM.policy.p39);
    introspect(JAM.policy.p27) {
      v22[v23] = v1552;
    }
    var v24 = geneticCodeMatchResult;
    var v25 = j;
    introspect(JAM.policy.p26) {
      var v627 = geneticCodeMatchResult[j]
    }
    var v1553 = JAM.call(v627.replace, v627, [/=/g, ""], JAM.policy.p41);
    introspect(JAM.policy.p27) {
      v24[v25] = v1553;
    }
    j = j + 1;
    v26 = j < arrayOfPatterns.length;
  }
  var i$$2 = 0;
  var v33 = i$$2 <= testSequence.length - 3;
  for (;v33;) {
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, i$$2 + 3], JAM.policy.p40);
    j = 0;
    var v31 = j < geneticCodeMatchExp.length;
    for (;v31;) {
      introspect(JAM.policy.p26) {
        var v1049 = geneticCodeMatchExp[j]
      }
      if (JAM.call(codon.search, codon, [v1049], JAM.policy.p38) != -1) {
        if (oneMatch == true) {
          JAM.call(alert, null, ["Genetic code error: more than one amino acid is coded by the codon: " + codon + "."], JAM.policy.p38);
          return false;
        }
        oneMatch = true;
      }
      j = j + 1;
      v31 = j < geneticCodeMatchExp.length;
    }
    if (oneMatch == false) {
      JAM.call(alert, null, ["The genetic code expressions are missing a codon."], JAM.policy.p22);
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
    introspect(JAM.policy.p26) {
      var v1051 = arrayOfPatterns$$1[z$$3]
    }
    if (JAM.call(v1051.search, v1051, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p38) != -1) {
      JAM.call(alert, null, ["One or more groups have been entered incorrectly."], JAM.policy.p22);
      return false;
    }
    z$$3 = z$$3 + 1;
    v35 = z$$3 < arrayOfPatterns$$1.length;
  }
  var i$$3 = 0;
  var v39 = i$$3 < arrayOfPatterns$$1.length;
  for (;v39;) {
    introspect(JAM.policy.p26) {
      var v1052 = arrayOfPatterns$$1[i$$3]
    }
    var re = JAM.new(RegExp, ["[" + v1052 + "]", "gi"], JAM.policy.p41);
    var j$$1 = i$$3 + 1;
    var v38 = j$$1 < arrayOfPatterns$$1.length;
    for (;v38;) {
      introspect(JAM.policy.p26) {
        var v1053 = arrayOfPatterns$$1[j$$1]
      }
      if (JAM.call(v1053.search, v1053, [re], JAM.policy.p38) != -1) {
        JAM.call(alert, null, ["The same amino acid is in more than one similarity group."], JAM.policy.p22);
        return false;
      }
      j$$1 = j$$1 + 1;
      v38 = j$$1 < arrayOfPatterns$$1.length;
    }
    i$$3 = i$$3 + 1;
    v39 = i$$3 < arrayOfPatterns$$1.length;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v42 = z$$4 < arrayOfPatterns$$2.length;
  for (;v42;) {
    introspect(JAM.policy.p26) {
      var v1054 = arrayOfPatterns$$2[z$$4]
    }
    if (JAM.call(v1054.search, v1054, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p38) == -1) {
      JAM.call(alert, null, ["One or more patterns have been entered incorrectly."], JAM.policy.p22);
      return false;
    }
    introspect(JAM.policy.p26) {
      var v1055 = arrayOfPatterns$$2[z$$4]
    }
    if (JAM.call(moreExpressionCheck, null, [v1055], JAM.policy.p38) == false) {
      JAM.call(alert, null, ["One or more patterns have been entered incorrectly."], JAM.policy.p22);
      return false;
    }
    z$$4 = z$$4 + 1;
    v42 = z$$4 < arrayOfPatterns$$2.length;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v1303 = JAM.call(getSequenceFromFasta, null, [text$$7], JAM.policy.p38);
  if (JAM.call(v1303.replace, v1303, [/[^A-Za-z]/g, ""], JAM.policy.p41).length > maxInput) {
    JAM.call(alert, null, ["Please enter a sequence consisting of less than or equal to " + maxInput + " characters."], JAM.policy.p38);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  if (text$$8.length > maxInput$$1) {
    JAM.call(alert, null, ["Please enter text consisting of less than or equal to " + maxInput$$1 + " characters."], JAM.policy.p38);
    return false;
  } else {
    return true;
  }
  return;
}
function complement(dnaSequence) {
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/g/g, "1"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/c/g, "2"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "c"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "g"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/G/g, "1"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/C/g, "2"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "C"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "G"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/a/g, "1"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/t/g, "2"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "t"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "a"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/A/g, "1"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/T/g, "2"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "T"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "A"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/u/g, "a"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/U/g, "A"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/r/g, "1"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/y/g, "2"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "y"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "r"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/R/g, "1"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/Y/g, "2"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "Y"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "R"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/k/g, "1"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/m/g, "2"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "m"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "k"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/K/g, "1"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/M/g, "2"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "M"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "K"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/b/g, "1"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/v/g, "2"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "v"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "b"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/B/g, "1"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/V/g, "2"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "V"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "B"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/d/g, "1"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/h/g, "2"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "h"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "d"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/D/g, "1"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/H/g, "2"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "H"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "D"], JAM.policy.p41);
  return dnaSequence;
}
function closeForm() {
  var v47 = outputWindow.document;
  JAM.call(v47.write, v47, ["</form>"], JAM.policy.p22);
  return true;
}
function closePre() {
  var v48 = outputWindow.document;
  JAM.call(v48.write, v48, ["</div>"], JAM.policy.p22);
  var v49 = outputWindow.document;
  JAM.call(v49.write, v49, ["</pre>\n"], JAM.policy.p22);
  return;
}
function closeTextArea() {
  var v50 = outputWindow.document;
  JAM.call(v50.write, v50, ["</textarea>"], JAM.policy.p22);
  return true;
}
function closeWindow() {
  var v51 = outputWindow.document;
  JAM.call(v51.write, v51, ["</body>\n</html>\n"], JAM.policy.p22);
  outputWindow.status = "Done.";
  var v52 = outputWindow.document;
  JAM.call(v52.close, v52, [], JAM.policy.p39);
  return true;
}
function convertDegenerates(sequence$$1) {
  sequence$$1 = JAM.call(sequence$$1.toLowerCase, sequence$$1, [], JAM.policy.p39);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/t/g, "[TU]"], JAM.policy.p41);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/r/g, "[AGR]"], JAM.policy.p41);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/y/g, "[CTUY]"], JAM.policy.p41);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/s/g, "[GCS]"], JAM.policy.p41);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/w/g, "[ATUW]"], JAM.policy.p41);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/k/g, "[GTUK]"], JAM.policy.p41);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/m/g, "[ACM]"], JAM.policy.p41);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/b/g, "[CGTUBSKY]"], JAM.policy.p41);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/d/g, "[AGTUDRKW]"], JAM.policy.p41);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/h/g, "[ACTUHMYW]"], JAM.policy.p41);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/v/g, "[ACGVSMR]"], JAM.policy.p41);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/n/g, "[ACGTURYSWKMBDHVN]"], JAM.policy.p41);
  return sequence$$1;
}
function earlyCheckAlign(alignArray) {
  if (alignArray.length < 3) {
    JAM.call(alert, null, ["There is a problem with the alignment format."], JAM.policy.p22);
    return false;
  }
  var i$$4 = 1;
  var v55 = i$$4 < alignArray.length;
  for (;v55;) {
    introspect(JAM.policy.p26) {
      var v1057 = alignArray[i$$4]
    }
    if (JAM.call(v1057.search, v1057, [/[^\s]+\s/], JAM.policy.p38) == -1) {
      JAM.call(alert, null, ["There is a problem with the alignment format."], JAM.policy.p22);
      return false;
    }
    i$$4 = i$$4 + 1;
    v55 = i$$4 < alignArray.length;
  }
  return true;
}
function filterAlignSeq(alignSeq) {
  alignSeq = JAM.call(alignSeq.replace, alignSeq, [/[^abcdefghiklmnpqrstvwxyz\.\-]/gi, ""], JAM.policy.p41);
  return alignSeq;
}
function filterFastaTitle(sequenceTitle) {
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/\s{2,}/g, " "], JAM.policy.p41);
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/^\s*/g, ""], JAM.policy.p41);
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/[\f\n\r\t]+$/g, "\n"], JAM.policy.p41);
  return JAM.call(sequenceTitle.replace, sequenceTitle, [/[\<\>]\n/gi, ""], JAM.policy.p41);
}
function getArrayOfFasta(sequenceData) {
  var arrayOfFasta = JAM.new(Array, [], JAM.policy.p39);
  var matchArray;
  var re$$1 = /\>[^\>]+/g;
  if (JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p38) != -1) {
    var v57 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p38);
    for (;v57;) {
      introspect(JAM.policy.p26) {
        var v56 = matchArray[0]
      }
      JAM.call(arrayOfFasta.push, arrayOfFasta, [v56], JAM.policy.p38);
      v57 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p38);
    }
  } else {
    introspect(JAM.policy.p27) {
      arrayOfFasta[0] = sequenceData;
    }
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var stringToReturn = "&gt;results for " + sequence$$2.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p38) != -1) {
    stringToReturn = stringToReturn + '"' + fastaSequenceTitle + '"';
  }
  stringToReturn = stringToReturn + ' starting "' + JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p24) + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var stringToReturn$$1 = "Search results for " + sequenceOne.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p38) != -1) {
    stringToReturn$$1 = stringToReturn$$1 + '"' + fastaSequenceTitleOne + '"';
  }
  stringToReturn$$1 = stringToReturn$$1 + ' starting "' + JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p24) + '"\n';
  stringToReturn$$1 = stringToReturn$$1 + "and " + sequenceTwo.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p38) != -1) {
    stringToReturn$$1 = stringToReturn$$1 + '"' + fastaSequenceTitleTwo + '"';
  }
  stringToReturn$$1 = stringToReturn$$1 + ' starting "' + JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p24) + '"';
  return'<div class="info">' + stringToReturn$$1 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var geneticCodeMatchExp$$1 = JAM.new(Array, [arrayOfPatterns$$3.length], JAM.policy.p38);
  var j$$2 = 0;
  var v75 = j$$2 < arrayOfPatterns$$3.length;
  for (;v75;) {
    var v73 = geneticCodeMatchExp$$1;
    var v74 = j$$2;
    introspect(JAM.policy.p26) {
      var v1304 = arrayOfPatterns$$3[j$$2]
    }
    var v674 = JAM.call(v1304.match, v1304, [/\/.+\//], JAM.policy.p38) + "gi";
    if (JAM.isEval(eval)) {
      var v1554 = eval("introspect(JAM.policy.pFull) { " + v674 + " }")
    } else {
      var v1554 = JAM.call(eval, null, [v674])
    }
    introspect(JAM.policy.p27) {
      v73[v74] = v1554;
    }
    j$$2 = j$$2 + 1;
    v75 = j$$2 < arrayOfPatterns$$3.length;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var geneticCodeMatchResult$$1 = JAM.new(Array, [arrayOfPatterns$$4.length], JAM.policy.p38);
  var j$$3 = 0;
  var v81 = j$$3 < arrayOfPatterns$$4.length;
  for (;v81;) {
    var v77 = geneticCodeMatchResult$$1;
    var v78 = j$$3;
    introspect(JAM.policy.p26) {
      var v1059 = arrayOfPatterns$$4[j$$3]
    }
    var v677 = JAM.call(v1059.match, v1059, [/=[a-zA-Z\*]/], JAM.policy.p38);
    var v1555 = JAM.call(v677.toString, v677, [], JAM.policy.p39);
    introspect(JAM.policy.p27) {
      v77[v78] = v1555;
    }
    var v79 = geneticCodeMatchResult$$1;
    var v80 = j$$3;
    introspect(JAM.policy.p26) {
      var v678 = geneticCodeMatchResult$$1[j$$3]
    }
    var v1556 = JAM.call(v678.replace, v678, [/=/g, ""], JAM.policy.p41);
    introspect(JAM.policy.p27) {
      v79[v80] = v1556;
    }
    j$$3 = j$$3 + 1;
    v81 = j$$3 < arrayOfPatterns$$4.length;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var stringToReturn$$2 = "Results for " + sequence$$3.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p38) != -1) {
    stringToReturn$$2 = stringToReturn$$2 + '"' + fastaSequenceTitle$$1 + '"';
  }
  stringToReturn$$2 = stringToReturn$$2 + ' starting "' + JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p24) + '"';
  return'<div class="info">' + stringToReturn$$2 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var stringToReturn$$3 = "Results for " + topology + " " + sequence$$4.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p38) != -1) {
    stringToReturn$$3 = stringToReturn$$3 + '"' + fastaSequenceTitle$$2 + '"';
  }
  stringToReturn$$3 = stringToReturn$$3 + ' starting "' + JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p24) + '"';
  return'<div class="info">' + stringToReturn$$3 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var stringToReturn$$4 = "Alignment results for " + sequenceOne$$1.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p38) != -1) {
    stringToReturn$$4 = stringToReturn$$4 + '"' + fastaSequenceTitleOne$$1 + '"';
  }
  stringToReturn$$4 = stringToReturn$$4 + ' starting "' + JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p24) + '"\n';
  stringToReturn$$4 = stringToReturn$$4 + "and " + sequenceTwo$$1.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p38) != -1) {
    stringToReturn$$4 = stringToReturn$$4 + '"' + fastaSequenceTitleTwo$$1 + '"';
  }
  stringToReturn$$4 = stringToReturn$$4 + ' starting "' + JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p24) + '"';
  return'<div class="info">' + stringToReturn$$4 + "</div>\n";
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = JAM.new(Array, [], JAM.policy.p39);
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v102 = j$$4 < lengthOut;
  for (;v102;) {
    tempNum = JAM.call(Math.floor, Math, [JAM.call(Math.random, Math, [], JAM.policy.p39) * components.length], JAM.policy.p38);
    introspect(JAM.policy.p26) {
      tempChar = components[tempNum];
    }
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p38);
    j$$4 = j$$4 + 1;
    v102 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p22);
}
function getSequenceFromFasta(sequenceRecord) {
  if (JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p38) != -1) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p41);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  if (JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p38) != -1) {
    var v104 = JAM.call(sequenceRecord$$1.match, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p41);
    fastaTitle = JAM.call(v104.toString, v104, [], JAM.policy.p39);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\>|[\f\n\r]/g, ""], JAM.policy.p41);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\s{2,}/g, " "], JAM.policy.p41);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/[\<\>]/gi, ""], JAM.policy.p41);
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  var v1522 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p38) != -1;
  if (!v1522) {
    v1522 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p38) != -1;
  }
  var v1513 = v1522;
  if (!v1513) {
    v1513 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p38) != -1;
  }
  var v1503 = v1513;
  if (!v1503) {
    v1503 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p38) != -1;
  }
  var v1490 = v1503;
  if (!v1490) {
    v1490 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p38) != -1;
  }
  var v1476 = v1490;
  if (!v1476) {
    v1476 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p38) != -1;
  }
  var v1460 = v1476;
  if (!v1460) {
    v1460 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p38) != -1;
  }
  var v1411 = v1460;
  if (!v1411) {
    v1411 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p38) != -1;
  }
  var v1305 = v1411;
  if (!v1305) {
    v1305 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p38) != -1;
  }
  var v1061 = v1305;
  if (!v1061) {
    v1061 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p38) != -1;
  }
  var v706 = v1061;
  if (!v706) {
    v706 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p38) != -1;
  }
  if (v706) {
    return false;
  }
  return true;
}
function openForm() {
  var v107 = outputWindow.document;
  JAM.call(v107.write, v107, ['<form action="">\n'], JAM.policy.p22);
  return true;
}
function openPre() {
  var v108 = outputWindow.document;
  JAM.call(v108.write, v108, ["<pre>"], JAM.policy.p22);
  var v109 = outputWindow.document;
  JAM.call(v109.write, v109, ['<div class="pre">'], JAM.policy.p22);
  return;
}
function openTextArea() {
  var v110 = outputWindow.document;
  JAM.call(v110.write, v110, ['<br /><textarea rows="6" cols="61">\n'], JAM.policy.p22);
  return true;
}
function openWindow(title$$5) {
  JAM.call(_openWindow, null, [title$$5, true], JAM.policy.p41);
  return;
}
function _openWindow(title$$6, isColor) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p23);
  JAM.call(outputWindow.focus, outputWindow, [], JAM.policy.p39);
  var v111 = outputWindow.document;
  JAM.call(v111.write, v111, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n'], JAM.policy.p38);
  if (isColor) {
    var v113 = outputWindow.document;
    JAM.call(v113.write, v113, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; background-color: #66FF00}\n" + 
    "span.two, td.two {color: #000000; background-color: #FFFF66}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n" + "td.many {color: #000000}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + 
    "</style>\n"], JAM.policy.p38);
  } else {
    var v115 = outputWindow.document;
    JAM.call(v115.write, v115, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n" + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "td.many {color: #000000; background-color: #FFFFFF}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"], JAM.policy.p38);
  }
  var v117 = outputWindow.document;
  JAM.call(v117.write, v117, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$6 + " results</div>\n"], JAM.policy.p38);
  outputWindow.status = "Please Wait.";
  return true;
}
function openWindowAlign(title$$7) {
  JAM.call(_openWindowAlign, null, [title$$7, true], JAM.policy.p41);
  return;
}
function _openWindowAlign(title$$8, isBackground) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p23);
  JAM.call(outputWindow.focus, outputWindow, [], JAM.policy.p39);
  var v119 = outputWindow.document;
  JAM.call(v119.write, v119, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n'], JAM.policy.p38);
  if (isBackground) {
    var v121 = outputWindow.document;
    JAM.call(v121.write, v121, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #FFFFFF; background-color: #000000}\n" + "span.sim {color: #FFFFFF; background-color: #666666}\n" + 
    "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n" + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n" + "span.c, span.m {color: #000000; background-color: #FFFF00}\n" + "span.s, span.t {color: #000000; background-color: #66FF00}\n" + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n" + "span.d, span.e {color: #000000; background-color: #0066FF}\n" + "span.n, span.q {color: #000000; background-color: #996633}\n" + "span.p {color: #000000; background-color: #FF99FF}\n" + 
    "</style>\n"], JAM.policy.p38);
  } else {
    var v123 = outputWindow.document;
    JAM.call(v123.write, v123, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n" + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n" + 
    "span.diff {color: #999999; background-color: #FFFFFF}\n" + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n" + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n" + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n" + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n" + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n" + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n" + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n" + 
    "span.p {color: #00FFCC; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"], JAM.policy.p38);
  }
  var v125 = outputWindow.document;
  JAM.call(v125.write, v125, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$8 + " results</div>\n"], JAM.policy.p38);
  outputWindow.status = "Please Wait.";
  return true;
}
function removeFormatting(sequence$$5) {
  return JAM.call(sequence$$5.replace, sequence$$5, [/[\d\s]/g, ""], JAM.policy.p41);
}
function removeNonDna(sequence$$6) {
  return JAM.call(sequence$$6.replace, sequence$$6, [/[^gatucryswkmbdhvnxGATUCRYSWKMBDHVNX]/g, ""], JAM.policy.p41);
}
function removeNonDnaStrict(sequence$$7) {
  return JAM.call(sequence$$7.replace, sequence$$7, [/[^gatucGATUC]/g, ""], JAM.policy.p41);
}
function removeNonProtein(sequence$$8) {
  return JAM.call(sequence$$8.replace, sequence$$8, [/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, ""], JAM.policy.p41);
}
function removeNonProteinStrict(sequence$$9) {
  return JAM.call(sequence$$9.replace, sequence$$9, [/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, ""], JAM.policy.p41);
}
function removeNonProteinAllowDegen(sequence$$10) {
  return JAM.call(sequence$$10.replace, sequence$$10, [/[^ABCDEFGHIKLMNPQRSTVWYXZabcdefghiklmnpqrstvwyxz\*]/g, ""], JAM.policy.p41);
}
function removeNonProteinAllowX(sequence$$11) {
  return JAM.call(sequence$$11.replace, sequence$$11, [/[^ACDEFGHIKLMNPQRSTVWYZXacdefghiklmnpqrstvwyzx\*]/g, ""], JAM.policy.p41);
}
function removeWhiteSpace(text$$9) {
  return JAM.call(text$$9.replace, text$$9, [/\s/g, ""], JAM.policy.p41);
}
function removeNonLetters(sequence$$12) {
  return JAM.call(sequence$$12.replace, sequence$$12, [/[^A-Z]/gi, ""], JAM.policy.p41);
}
function reverse(dnaSequence$$1) {
  var tempDnaArray = JAM.new(Array, [], JAM.policy.p39);
  if (JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p38) != -1) {
    tempDnaArray = JAM.call(dnaSequence$$1.match, dnaSequence$$1, [/./g], JAM.policy.p38);
    tempDnaArray = JAM.call(tempDnaArray.reverse, tempDnaArray, [], JAM.policy.p39);
    dnaSequence$$1 = JAM.call(tempDnaArray.join, tempDnaArray, [""], JAM.policy.p22);
  }
  return dnaSequence$$1;
}
function rightNum(theNumber, sequenceToAppend, lengthOfColumn, tabIn) {
  var j$$5 = 0;
  var tempString = "";
  theNumber = JAM.call(theNumber.toString, theNumber, [], JAM.policy.p39);
  j$$5 = theNumber.length;
  var v128 = j$$5 < lengthOfColumn;
  for (;v128;) {
    tempString = tempString + " ";
    j$$5 = j$$5 + 1;
    v128 = j$$5 < lengthOfColumn;
  }
  theNumber = tempString + theNumber + " ";
  sequenceToAppend = sequenceToAppend + theNumber + tabIn;
  return sequenceToAppend;
}
function testScript() {
  function v1(str$$7, p1$$1, offset$$9, s$$3) {
    return p1$$1 + "X";
  }
  var testArray = JAM.new(Array, [], JAM.policy.p39);
  var testString = "1234567890";
  JAM.call(testArray.push, testArray, [testString], JAM.policy.p38);
  introspect(JAM.policy.p26) {
    var v716 = testArray[0]
  }
  if (v716 != testString) {
    JAM.call(alert, null, ["Array object push method not supported. See browser compatibility page."], JAM.policy.p22);
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  if (JAM.call(testString.search, testString, [re$$2], JAM.policy.p38) == -1) {
    JAM.call(alert, null, ["Regular expression 'm' flag not supported. See browser compatibility page."], JAM.policy.p22);
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
    JAM.call(alert, null, ["Exception handling not supported. See browser compatibility page."], JAM.policy.p22);
  }
  testString = "123";
  testString = JAM.call(testString.replace, testString, [/(\d)/g, v1], JAM.policy.p40);
  if (testString != "1X2X3X") {
    JAM.call(alert, null, ["Nested function in String replace method not supported. See browser compatibility page."], JAM.policy.p22);
    return false;
  }
  var testNum = 2489.8237;
  if (JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p25) != 2489.824) {
    JAM.call(alert, null, ["Number toFixed() method not supported. See browser compatibility page."], JAM.policy.p22);
    return false;
  }
  if (JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p25) != 2489.8) {
    JAM.call(alert, null, ["Number toPrecision() method not supported. See browser compatibility page."], JAM.policy.p22);
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  if (JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p38) == -1) {
    JAM.call(alert, null, ["Please enter a number"], JAM.policy.p22);
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v1316 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p38) == -1;
  if (!v1316) {
    v1316 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p38) == -1;
  }
  var v1072 = v1316;
  if (!v1072) {
    v1072 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p38) == -1;
  }
  var v721 = v1072;
  if (!v721) {
    v721 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p38) == -1;
  }
  if (v721) {
    JAM.call(alert, null, ["Please enter the contents of an EMBL file."], JAM.policy.p22);
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  if (JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p38) == -1) {
    JAM.call(alert, null, ["Please enter a number."], JAM.policy.p22);
    return false;
  }
  if (theNumber$$2 > maxInput$$2) {
    JAM.call(alert, null, ["Please enter a number less than or equal to " + maxInput$$2 + "."], JAM.policy.p38);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  if (JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p38) != -1) {
    JAM.call(alert, null, ["The sequence contains non-DNA characters, which will be omitted."], JAM.policy.p22);
  }
  return true;
}
function verifyProtein(proteinSequence) {
  if (JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p38) != -1) {
    JAM.call(alert, null, ["The sequence contains non-protein characters, which will be omitted."], JAM.policy.p22);
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v1319 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p38) == -1;
  if (!v1319) {
    v1319 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p38) == -1;
  }
  var v1075 = v1319;
  if (!v1075) {
    v1075 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p38) == -1;
  }
  var v726 = v1075;
  if (!v726) {
    v726 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p38) == -1;
  }
  if (v726) {
    JAM.call(alert, null, ["Please enter the contents of a GenBank file."], JAM.policy.p22);
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v1322 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p38) == -1;
  if (!v1322) {
    v1322 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p38) == -1;
  }
  var v1078 = v1322;
  if (!v1078) {
    v1078 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p38) == -1;
  }
  var v727 = v1078;
  if (!v727) {
    v727 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p38) == -1;
  }
  if (v727) {
    JAM.call(alert, null, ["Please enter the contents of a GenBank file."], JAM.policy.p22);
    return false;
  }
  if (JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p38) == -1) {
    JAM.call(alert, null, ["The file has no defined features."], JAM.policy.p22);
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v1325 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p38) == -1;
  if (!v1325) {
    v1325 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p38) == -1;
  }
  var v1081 = v1325;
  if (!v1081) {
    v1081 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p38) == -1;
  }
  var v729 = v1081;
  if (!v729) {
    v729 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p38) == -1;
  }
  if (v729) {
    JAM.call(alert, null, ["Please enter the contents of an EMBL file."], JAM.policy.p22);
    return false;
  }
  if (JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p38) == -1) {
    JAM.call(alert, null, ["The file has no defined features."], JAM.policy.p22);
    return false;
  }
  return true;
}
function writeGroupNum(text$$10, tabIn$$1, groupSize, basePerLine, startBase, stopBase) {
  var i$$5 = JAM.call(parseInt, null, [startBase], JAM.policy.p38);
  var k = 0;
  var lineOfText = "";
  var sepChar = " ";
  groupSize = JAM.call(parseInt, null, [groupSize], JAM.policy.p38);
  basePerLine = JAM.call(parseInt, null, [basePerLine], JAM.policy.p38);
  var v156 = i$$5 < stopBase;
  for (;v156;) {
    lineOfText = JAM.call(rightNum, null, [i$$5 + 1, lineOfText, 8, tabIn$$1], JAM.policy.p40);
    var j$$6 = 1;
    var v153 = j$$6 <= basePerLine / groupSize;
    for (;v153;) {
      var v152 = k < groupSize;
      for (;v152;) {
        lineOfText = lineOfText + JAM.call(text$$10.charAt, text$$10, [k + i$$5], JAM.policy.p38);
        k = k + 1;
        v152 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      v153 = j$$6 <= basePerLine / groupSize;
    }
    var v154 = outputWindow.document;
    JAM.call(v154.write, v154, [lineOfText + "\n"], JAM.policy.p38);
    lineOfText = "";
    v156 = i$$5 < stopBase;
  }
  return true;
}
function writeGroupNumDna(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition) {
  JAM.call(writeGroupNumDnaSetStart, null, [text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition, 0], JAM.policy.p40);
  return true;
}
function writeGroupNumDnaSetStart(text$$12, tabIn$$3, groupSize$$2, basePerLine$$2, startBase$$2, stopBase$$2, strands$$1, numberPosition$$1, numberingAdjustment) {
  function adjustNumbering(original, adjustment) {
    var adjusted = original + adjustment;
    var v734 = adjustment < 0;
    if (v734) {
      v734 = adjusted >= 0;
    }
    if (v734) {
      adjusted = adjusted + 1;
    }
    return adjusted;
  }
  var i$$6 = JAM.call(parseInt, null, [startBase$$2], JAM.policy.p38);
  var k$$1 = 0;
  var lineOfText$$1 = "";
  var lineNum = "";
  var sepChar$$1 = " ";
  var aboveNum = "";
  groupSize$$2 = JAM.call(parseInt, null, [groupSize$$2], JAM.policy.p38);
  basePerLine$$2 = JAM.call(parseInt, null, [basePerLine$$2], JAM.policy.p38);
  numberingAdjustment = JAM.call(parseInt, null, [numberingAdjustment], JAM.policy.p38);
  var v190 = i$$6 < stopBase$$2;
  for (;v190;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v166 = j$$7 <= basePerLine$$2 / groupSize$$2;
    for (;v166;) {
      var v161 = k$$1 < groupSize$$2;
      for (;v161;) {
        if (i$$6 + k$$1 >= stopBase$$2) {
          break;
        }
        lineOfText$$1 = lineOfText$$1 + JAM.call(text$$12.charAt, text$$12, [k$$1 + i$$6], JAM.policy.p38);
        k$$1 = k$$1 + 1;
        v161 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      if (numberPosition$$1 == "above") {
        aboveNum = aboveNum + JAM.call(rightNum, null, [JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p40), "", groupSize$$2, tabIn$$3], JAM.policy.p41);
      }
      if (i$$6 >= stopBase$$2) {
        break;
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      v166 = j$$7 <= basePerLine$$2 / groupSize$$2;
    }
    if (numberPosition$$1 == "left") {
      var v167 = outputWindow.document;
      JAM.call(v167.write, v167, [JAM.call(rightNum, null, [JAM.call(adjustNumbering, null, [lineNum, numberingAdjustment], JAM.policy.p40), "", 8, tabIn$$3], JAM.policy.p41) + lineOfText$$1 + "\n"], JAM.policy.p38);
      if (strands$$1 == "two") {
        var v169 = outputWindow.document;
        JAM.call(v169.write, v169, [JAM.call(rightNum, null, [JAM.call(adjustNumbering, null, [lineNum, numberingAdjustment], JAM.policy.p40), "", 8, tabIn$$3], JAM.policy.p41) + JAM.call(complement, null, [lineOfText$$1], JAM.policy.p38) + "\n"], JAM.policy.p38);
        var v171 = outputWindow.document;
        JAM.call(v171.write, v171, ["\n"], JAM.policy.p22);
      }
    } else {
      if (numberPosition$$1 == "right") {
        var v173 = outputWindow.document;
        JAM.call(v173.write, v173, [lineOfText$$1 + JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p40) + "\n"], JAM.policy.p38);
        if (strands$$1 == "two") {
          var v175 = outputWindow.document;
          JAM.call(v175.write, v175, [JAM.call(complement, null, [lineOfText$$1], JAM.policy.p38) + JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p40) + "\n"], JAM.policy.p38);
          var v177 = outputWindow.document;
          JAM.call(v177.write, v177, ["\n"], JAM.policy.p22);
        }
      } else {
        if (numberPosition$$1 == "above") {
          var v179 = outputWindow.document;
          JAM.call(v179.write, v179, [aboveNum + "\n"], JAM.policy.p38);
          var v181 = outputWindow.document;
          JAM.call(v181.write, v181, [lineOfText$$1 + "\n"], JAM.policy.p38);
          if (strands$$1 == "two") {
            var v183 = outputWindow.document;
            JAM.call(v183.write, v183, [JAM.call(complement, null, [lineOfText$$1], JAM.policy.p38) + "\n"], JAM.policy.p38);
            var v185 = outputWindow.document;
            JAM.call(v185.write, v185, ["\n"], JAM.policy.p22);
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v190 = i$$6 < stopBase$$2;
  }
  return true;
}
function writeGroupNumProtein(text$$13, tabIn$$4, groupSize$$3, basePerLine$$3, startBase$$3, stopBase$$3, numberPosition$$2) {
  var i$$7 = JAM.call(parseInt, null, [startBase$$3], JAM.policy.p38);
  var k$$2 = 0;
  var lineOfText$$2 = "";
  var lineNum$$1 = "";
  var sepChar$$2 = " ";
  var aboveNum$$1 = "";
  groupSize$$3 = JAM.call(parseInt, null, [groupSize$$3], JAM.policy.p38);
  basePerLine$$3 = JAM.call(parseInt, null, [basePerLine$$3], JAM.policy.p38);
  var v211 = i$$7 < stopBase$$3;
  for (;v211;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v199 = j$$8 <= basePerLine$$3 / groupSize$$3;
    for (;v199;) {
      var v194 = k$$2 < groupSize$$3;
      for (;v194;) {
        if (i$$7 + k$$2 >= stopBase$$3) {
          break;
        }
        lineOfText$$2 = lineOfText$$2 + JAM.call(text$$13.charAt, text$$13, [k$$2 + i$$7], JAM.policy.p38);
        k$$2 = k$$2 + 1;
        v194 = k$$2 < groupSize$$3;
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      if (numberPosition$$2 == "above") {
        aboveNum$$1 = aboveNum$$1 + JAM.call(rightNum, null, [i$$7, "", groupSize$$3, tabIn$$4], JAM.policy.p41);
      }
      if (i$$7 >= stopBase$$3) {
        break;
      }
      k$$2 = 0;
      j$$8 = j$$8 + 1;
      v199 = j$$8 <= basePerLine$$3 / groupSize$$3;
    }
    if (numberPosition$$2 == "left") {
      var v200 = outputWindow.document;
      JAM.call(v200.write, v200, [JAM.call(rightNum, null, [lineNum$$1, "", 8, tabIn$$4], JAM.policy.p41) + lineOfText$$2 + "\n"], JAM.policy.p38);
    } else {
      if (numberPosition$$2 == "right") {
        var v202 = outputWindow.document;
        JAM.call(v202.write, v202, [lineOfText$$2 + i$$7 + "\n"], JAM.policy.p38);
      } else {
        if (numberPosition$$2 == "above") {
          var v204 = outputWindow.document;
          JAM.call(v204.write, v204, [aboveNum$$1 + "\n"], JAM.policy.p38);
          var v206 = outputWindow.document;
          JAM.call(v206.write, v206, [lineOfText$$2 + "\n"], JAM.policy.p38);
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v211 = i$$7 < stopBase$$3;
  }
  return true;
}
function writeMutatedSequence(sequence$$13, components$$1, numMut, firstIndexToMutate, lastIndexToMutate) {
  var currentChar = "";
  var randNum = 0;
  var maxNum = 0;
  var needNewChar = "";
  var componentsIndex = 0;
  numMut = JAM.call(parseInt, null, [numMut], JAM.policy.p38);
  firstIndexToMutate = JAM.call(parseInt, null, [firstIndexToMutate], JAM.policy.p38);
  lastIndexToMutate = JAM.call(parseInt, null, [lastIndexToMutate], JAM.policy.p38);
  var v1092 = sequence$$13.length <= firstIndexToMutate;
  if (!v1092) {
    v1092 = lastIndexToMutate < 0;
  }
  var v751 = v1092;
  if (!v751) {
    v751 = lastIndexToMutate <= firstIndexToMutate;
  }
  if (v751) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v220 = i$$8 < numMut;
  for (;v220;) {
    maxNum = sequence$$13.length;
    randNum = JAM.call(Math.floor, Math, [JAM.call(Math.random, Math, [], JAM.policy.p39) * maxNum], JAM.policy.p38);
    var v753 = randNum < firstIndexToMutate;
    if (!v753) {
      v753 = randNum > lastIndexToMutate;
    }
    if (v753) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v220 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p38);
    needNewChar = true;
    for (;needNewChar;) {
      componentsIndex = JAM.call(Math.round, Math, [JAM.call(Math.random, Math, [], JAM.policy.p39) * components$$1.length], JAM.policy.p38);
      if (componentsIndex == components$$1.length) {
        componentsIndex = 0;
      }
      introspect(JAM.policy.p26) {
        var v757 = components$$1[componentsIndex]
      }
      if (v757 != currentChar) {
        needNewChar = false;
      }
    }
    var v758 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p24);
    introspect(JAM.policy.p26) {
      var v759 = components$$1[componentsIndex]
    }
    sequence$$13 = v758 + v759 + JAM.call(sequence$$13.substring, sequence$$13, [randNum + 1, sequence$$13.length], JAM.policy.p40);
    i$$8 = i$$8 + 1;
    v220 = i$$8 < numMut;
  }
  var v221 = outputWindow.document;
  JAM.call(v221.write, v221, [JAM.call(addReturns, null, [sequence$$13], JAM.policy.p38)], JAM.policy.p38);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v227 = j$$9 < lengthOut$$1;
  for (;v227;) {
    tempNum$$1 = JAM.call(Math.floor, Math, [JAM.call(Math.random, Math, [], JAM.policy.p39) * components$$2.length], JAM.policy.p38);
    introspect(JAM.policy.p26) {
      tempChar$$1 = components$$2[tempNum$$1];
    }
    sequence$$14 = sequence$$14 + tempChar$$1;
    if (sequence$$14.length == 60) {
      var v224 = outputWindow.document;
      JAM.call(v224.write, v224, [sequence$$14 + "\n"], JAM.policy.p38);
      sequence$$14 = "";
    }
    j$$9 = j$$9 + 1;
    v227 = j$$9 < lengthOut$$1;
  }
  var v228 = outputWindow.document;
  JAM.call(v228.write, v228, [sequence$$14 + "\n"], JAM.policy.p38);
  return true;
}
function writeRestrictionSites(sequence$$15, arrayOfItems, dnaConformation) {
  var resultArray = JAM.new(Array, [], JAM.policy.p39);
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
    shiftValue = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p24).length;
    sequence$$15 = JAM.call(sequence$$15.substring, sequence$$15, [sequence$$15.length - lookAhead, sequence$$15.length], JAM.policy.p40) + sequence$$15 + JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p24);
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v234 = outputWindow.document;
  JAM.call(v234.write, v234, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p22);
  var v235 = outputWindow.document;
  JAM.call(v235.write, v235, ['<tr><td class="title" width="200px">' + "Site:" + '</td><td class="title">' + "Positions:" + "</td></tr>\n"], JAM.policy.p38);
  var i$$9 = 0;
  var v252 = i$$9 < arrayOfItems.length;
  for (;v252;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAM.policy.p26) {
      var v768 = arrayOfItems[i$$9]
    }
    matchExp = JAM.call(v768.match, v768, [/\/.+\//], JAM.policy.p38) + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    introspect(JAM.policy.p26) {
      var v1334 = arrayOfItems[i$$9]
    }
    var v1098 = JAM.call(v1334.match, v1334, [/\)\D*\d+/], JAM.policy.p38);
    var v769 = JAM.call(v1098.toString, v1098, [], JAM.policy.p39);
    cutDistance = JAM.call(parseFloat, null, [JAM.call(v769.replace, v769, [/\)\D*/, ""], JAM.policy.p41)], JAM.policy.p38);
    var v244 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p38);
    for (;v244;) {
      matchPosition = matchExp.lastIndex - cutDistance;
      var v770 = matchPosition >= lowerLimit;
      if (v770) {
        v770 = matchPosition < upperLimit;
      }
      if (v770) {
        timesFound = timesFound + 1;
        tempString$$1 = tempString$$1 + ", " + (matchPosition - shiftValue + 1);
      }
      matchExp.lastIndex = matchExp.lastIndex - RegExp.lastMatch.length + 1;
      v244 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p38);
    }
    if (JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p38) != -1) {
      tempString$$1 = JAM.call(tempString$$1.replace, tempString$$1, [/none,\s*/, ""], JAM.policy.p41);
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
    var v250 = outputWindow.document;
    var v1483 = '<tr><td class="' + backGroundClass + '">';
    introspect(JAM.policy.p26) {
      var v1520 = arrayOfItems[i$$9]
    }
    var v1510 = JAM.call(v1520.match, v1520, [/\([^\(]+\)/], JAM.policy.p38);
    var v1498 = JAM.call(v1510.toString, v1510, [], JAM.policy.p39);
    JAM.call(v250.write, v250, [v1483 + JAM.call(v1498.replace, v1498, [/\(|\)/g, ""], JAM.policy.p41) + '</td><td class="' + backGroundClass + '">' + tempString$$1 + "</td></tr>\n"], JAM.policy.p38);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    v252 = i$$9 < arrayOfItems.length;
  }
  var v253 = outputWindow.document;
  JAM.call(v253.write, v253, ["</tbody></table>\n"], JAM.policy.p22);
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v254 = outputWindow.document;
  JAM.call(v254.write, v254, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p22);
  var v255 = outputWindow.document;
  JAM.call(v255.write, v255, ['<tr><td class="title">' + "Pattern:" + '</td><td class="title">' + "Times found:" + '</td><td class="title">' + "Percentage:" + "</td></tr>\n"], JAM.policy.p38);
  var i$$10 = 0;
  var v265 = i$$10 < arrayOfItems$$1.length;
  for (;v265;) {
    var tempNumber = 0;
    introspect(JAM.policy.p26) {
      var v779 = arrayOfItems$$1[i$$10]
    }
    var matchExp$$1 = JAM.call(v779.match, v779, [/\/[^\/]+\//], JAM.policy.p38) + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    if (JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p38) != -1) {
      tempNumber = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p38).length;
    }
    var percentage = 0;
    var v1102 = originalLength + 1;
    introspect(JAM.policy.p26) {
      var v1432 = arrayOfItems$$1[i$$10]
    }
    if (v1102 - JAM.call(parseFloat, null, [JAM.call(v1432.match, v1432, [/\d+/], JAM.policy.p38)], JAM.policy.p38) > 0) {
      var v260 = 100 * tempNumber;
      var v782 = originalLength + 1;
      introspect(JAM.policy.p26) {
        var v1338 = arrayOfItems$$1[i$$10]
      }
      percentage = v260 / (v782 - JAM.call(parseFloat, null, [JAM.call(v1338.match, v1338, [/\d+/], JAM.policy.p38)], JAM.policy.p38));
    }
    var v263 = outputWindow.document;
    introspect(JAM.policy.p26) {
      var v1521 = arrayOfItems$$1[i$$10]
    }
    var v1511 = JAM.call(v1521.match, v1521, [/\([^\(]+\)\b/], JAM.policy.p38);
    var v1499 = JAM.call(v1511.toString, v1511, [], JAM.policy.p39);
    JAM.call(v263.write, v263, ["<tr><td>" + JAM.call(v1499.replace, v1499, [/\(|\)/g, ""], JAM.policy.p41) + "</td><td>" + tempNumber + "</td><td>" + JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p25) + "</td></tr>\n"], JAM.policy.p38);
    i$$10 = i$$10 + 1;
    v265 = i$$10 < arrayOfItems$$1.length;
  }
  var v266 = outputWindow.document;
  JAM.call(v266.write, v266, ["</tbody></table>\n"], JAM.policy.p22);
  return true;
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v273 = sequence$$17.length > 0;
  for (;v273;) {
    maxNum$$1 = sequence$$17.length;
    randNum$$1 = JAM.call(Math.floor, Math, [JAM.call(Math.random, Math, [], JAM.policy.p39) * maxNum$$1], JAM.policy.p38);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p38);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p24);
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [randNum$$1 + 1, sequence$$17.length], JAM.policy.p40);
    sequence$$17 = tempString1 + tempString2;
    if (tempSeq.length == 60) {
      var v270 = outputWindow.document;
      JAM.call(v270.write, v270, [tempSeq + "\n"], JAM.policy.p38);
      tempSeq = "";
    }
    v273 = sequence$$17.length > 0;
  }
  var v274 = outputWindow.document;
  JAM.call(v274.write, v274, [tempSeq + "\n"], JAM.policy.p38);
  return true;
}
function pcrPrimerStats(theDocument) {
  var newDna = "";
  var title$$9 = "";
  var maxInput$$3 = 5E3;
  var maxPrimerLength = 50;
  var milliMolarSalt = 50;
  var milliMolarMagnesium = 1.5;
  var nanoMolarPrimerTotal = 200;
  var isPhosphorylated = false;
  if (JAM.call(testScript, null, [], JAM.policy.p39) == false) {
    return false;
  }
  var v1486 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v1470 = v1486[0]
  }
  var v1434 = v1470.elements;
  introspect(JAM.policy.p26) {
    var v1340 = v1434[0]
  }
  var v791 = JAM.call(checkFormElement, null, [v1340], JAM.policy.p38) == false;
  if (!v791) {
    var v1500 = theDocument.forms;
    introspect(JAM.policy.p26) {
      var v1487 = v1500[0]
    }
    var v1471 = v1487.elements;
    introspect(JAM.policy.p26) {
      var v1435 = v1471[0]
    }
    v791 = JAM.call(checkSequenceLength, null, [v1435.value, maxInput$$3], JAM.policy.p40) == false;
  }
  if (v791) {
    return false;
  }
  molarSalt = milliMolarSalt / 1E3;
  molarMagnesium = milliMolarMagnesium / 1E3;
  molarPrimerTotal = nanoMolarPrimerTotal / 1E9;
  isPhosphorylated = false;
  JAM.call(openWindow, null, ["PCR Primer Stats"], JAM.policy.p22);
  JAM.call(openPre, null, [], JAM.policy.p39);
  var v1436 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v1342 = v1436[0]
  }
  var v1110 = v1342.elements;
  introspect(JAM.policy.p26) {
    var v792 = v1110[0]
  }
  var arrayOfFasta$$1 = JAM.call(getArrayOfFasta, null, [v792.value], JAM.policy.p38);
  var v279 = outputWindow.document;
  JAM.call(v279.write, v279, ["Global settings:\n"], JAM.policy.p22);
  if (isPhosphorylated) {
    var v280 = outputWindow.document;
    JAM.call(v280.write, v280, ["-The primers have a 5'-phosphate group.\n"], JAM.policy.p22);
  } else {
    var v281 = outputWindow.document;
    JAM.call(v281.write, v281, ["-The primers do not have a 5'-phosphate group.\n"], JAM.policy.p22);
  }
  var v282 = outputWindow.document;
  JAM.call(v282.write, v282, ["-Combined concentration of K+ and Na+ in the reaction = " + milliMolarSalt + " millimolar.\n"], JAM.policy.p38);
  var v284 = outputWindow.document;
  JAM.call(v284.write, v284, ["-Mg+2 concentration in the reaction = " + milliMolarMagnesium + " millimolar.\n"], JAM.policy.p38);
  var v286 = outputWindow.document;
  JAM.call(v286.write, v286, ["-Primer concentration in the reaction = " + nanoMolarPrimerTotal + " nanomolar.\n"], JAM.policy.p38);
  var v288 = outputWindow.document;
  JAM.call(v288.write, v288, ["\n"], JAM.policy.p22);
  var v289 = outputWindow.document;
  JAM.call(v289.write, v289, ["------------------------------------------------------------\n"], JAM.policy.p22);
  var i$$11 = 0;
  var v354 = i$$11 < arrayOfFasta$$1.length;
  for (;v354;) {
    introspect(JAM.policy.p26) {
      var v290 = arrayOfFasta$$1[i$$11]
    }
    newDna = JAM.call(getSequenceFromFasta, null, [v290], JAM.policy.p38);
    introspect(JAM.policy.p26) {
      var v291 = arrayOfFasta$$1[i$$11]
    }
    title$$9 = JAM.call(getTitleFromFasta, null, [v291], JAM.policy.p38);
    newDna = JAM.call(_removeNonPrimer, null, [newDna], JAM.policy.p38);
    if (newDna.length == 0) {
      i$$11 = i$$11 + 1;
      v354 = i$$11 < arrayOfFasta$$1.length;
      continue;
    }
    if (newDna.length > maxPrimerLength) {
      i$$11 = i$$11 + 1;
      v354 = i$$11 < arrayOfFasta$$1.length;
      continue;
    }
    var percentGC = JAM.call(_percentGC, null, [newDna], JAM.policy.p38);
    var nearestNeighborTm = JAM.call(_nearestNeighborTm, null, [newDna, molarSalt, molarPrimerTotal, molarMagnesium], JAM.policy.p40);
    var selfCompHash = JAM.call(_getSelfComplementarityReport, null, [newDna, 3, 50], JAM.policy.p41);
    var hairpinHash = JAM.call(_getHairpinReport, null, [newDna, 3, 50], JAM.policy.p41);
    var v294 = outputWindow.document;
    JAM.call(v294.write, v294, ["------------------------------------------------------------\n"], JAM.policy.p22);
    var v295 = outputWindow.document;
    JAM.call(v295.write, v295, ["General properties:\n"], JAM.policy.p22);
    var v296 = outputWindow.document;
    JAM.call(v296.write, v296, ["-------------------\n"], JAM.policy.p22);
    var v297 = outputWindow.document;
    JAM.call(v297.write, v297, [JAM.call(rightNum, null, ["Primer name:", "", 32, ""], JAM.policy.p23) + title$$9 + "\n"], JAM.policy.p38);
    var v299 = outputWindow.document;
    JAM.call(v299.write, v299, [JAM.call(rightNum, null, ["Primer sequence:", "", 32, ""], JAM.policy.p23) + newDna + "\n"], JAM.policy.p38);
    var v301 = outputWindow.document;
    JAM.call(v301.write, v301, [JAM.call(rightNum, null, ["Sequence length:", "", 32, ""], JAM.policy.p23) + newDna.length + "\n"], JAM.policy.p38);
    var v303 = outputWindow.document;
    JAM.call(v303.write, v303, [JAM.call(rightNum, null, ["Base counts:", "", 32, ""], JAM.policy.p23) + JAM.call(_baseCounts, null, [newDna], JAM.policy.p38) + "\n"], JAM.policy.p38);
    var v305 = outputWindow.document;
    JAM.call(v305.write, v305, [JAM.call(rightNum, null, ["GC content (%):", "", 32, ""], JAM.policy.p23) + percentGC + "\n"], JAM.policy.p38);
    var v307 = outputWindow.document;
    JAM.call(v307.write, v307, [JAM.call(rightNum, null, ["Molecular weight (Daltons):", "", 32, ""], JAM.policy.p23) + JAM.call(_molecularWeight, null, [newDna, isPhosphorylated], JAM.policy.p40) + "\n"], JAM.policy.p38);
    var v309 = outputWindow.document;
    JAM.call(v309.write, v309, [JAM.call(rightNum, null, ["nmol/A260:", "", 32, ""], JAM.policy.p23) + JAM.call(_nmolPerA260, null, [newDna], JAM.policy.p38) + "\n"], JAM.policy.p38);
    var v311 = outputWindow.document;
    JAM.call(v311.write, v311, [JAM.call(rightNum, null, ["micrograms/A260:", "", 32, ""], JAM.policy.p23) + JAM.call(_microgramsPerA260, null, [newDna, isPhosphorylated], JAM.policy.p40) + "\n"], JAM.policy.p38);
    var v313 = outputWindow.document;
    JAM.call(v313.write, v313, [JAM.call(rightNum, null, ["Basic Tm (degrees C):", "", 32, ""], JAM.policy.p23) + JAM.call(_basicTm, null, [newDna], JAM.policy.p38) + "\n"], JAM.policy.p38);
    var v315 = outputWindow.document;
    JAM.call(v315.write, v315, [JAM.call(rightNum, null, ["Salt adjusted Tm (degrees C):", "", 32, ""], JAM.policy.p23) + JAM.call(_molarSaltAdjustedTm, null, [newDna, molarSalt], JAM.policy.p40) + "\n"], JAM.policy.p38);
    var v317 = outputWindow.document;
    JAM.call(v317.write, v317, [JAM.call(rightNum, null, ["Nearest neighbor Tm (degrees C):", "", 32, ""], JAM.policy.p23) + nearestNeighborTm + "\n"], JAM.policy.p38);
    var v319 = outputWindow.document;
    JAM.call(v319.write, v319, ["\n"], JAM.policy.p22);
    var v320 = outputWindow.document;
    JAM.call(v320.write, v320, ["PCR suitability tests (Pass / Warning):\n"], JAM.policy.p22);
    var v321 = outputWindow.document;
    JAM.call(v321.write, v321, ["------------------------------------\n"], JAM.policy.p22);
    var v322 = outputWindow.document;
    JAM.call(v322.write, v322, [JAM.call(rightNum, null, ["Single base runs:", "", 32, ""], JAM.policy.p23) + JAM.call(_getBaseRunsReport, null, [newDna, 5], JAM.policy.p41) + "\n"], JAM.policy.p38);
    var v324 = outputWindow.document;
    JAM.call(v324.write, v324, [JAM.call(rightNum, null, ["Dinucleotide base runs:", "", 32, ""], JAM.policy.p23) + JAM.call(_getDiNucleotideRunsReport, null, [newDna, 5], JAM.policy.p41) + "\n"], JAM.policy.p38);
    var v326 = outputWindow.document;
    JAM.call(v326.write, v326, [JAM.call(rightNum, null, ["Length:", "", 32, ""], JAM.policy.p23) + JAM.call(_getSuitableLengthReport, null, [newDna, 14, 30], JAM.policy.p41) + "\n"], JAM.policy.p38);
    var v328 = outputWindow.document;
    JAM.call(v328.write, v328, [JAM.call(rightNum, null, ["Percent GC:", "", 32, ""], JAM.policy.p23) + JAM.call(_getSuitableGCReport, null, [newDna, percentGC, 40, 60], JAM.policy.p40) + "\n"], JAM.policy.p38);
    var v330 = outputWindow.document;
    JAM.call(v330.write, v330, [JAM.call(rightNum, null, ["Tm (Nearest neighbor):", "", 32, ""], JAM.policy.p23) + JAM.call(_getSuitableTmReport, null, [newDna, nearestNeighborTm, 50, 58], JAM.policy.p40) + "\n"], JAM.policy.p38);
    var v332 = outputWindow.document;
    JAM.call(v332.write, v332, [JAM.call(rightNum, null, ["GC clamp:", "", 32, ""], JAM.policy.p23) + JAM.call(_getSuitableThreePrimeGC, null, [newDna, 1, 3], JAM.policy.p41) + "\n"], JAM.policy.p38);
    var v334 = outputWindow.document;
    JAM.call(v334.write, v334, [JAM.call(rightNum, null, ["Self-annealing:", "", 32, ""], JAM.policy.p23) + selfCompHash["report"] + "\n"], JAM.policy.p38);
    if (selfCompHash["report"] != "Pass") {
      var v336 = outputWindow.document;
      JAM.call(v336.write, v336, [JAM.call(rightNum, null, [":", "", 32, ""], JAM.policy.p23) + selfCompHash["upper"] + "\n"], JAM.policy.p38);
      var v338 = outputWindow.document;
      JAM.call(v338.write, v338, [JAM.call(rightNum, null, [":", "", 32, ""], JAM.policy.p23) + selfCompHash["divider"] + "\n"], JAM.policy.p38);
      var v340 = outputWindow.document;
      JAM.call(v340.write, v340, [JAM.call(rightNum, null, [":", "", 32, ""], JAM.policy.p23) + selfCompHash["lower"] + "\n"], JAM.policy.p38);
    }
    var v343 = outputWindow.document;
    JAM.call(v343.write, v343, [JAM.call(rightNum, null, ["Hairpin formation:", "", 32, ""], JAM.policy.p23) + hairpinHash["report"] + "\n"], JAM.policy.p38);
    if (hairpinHash["report"] != "Pass") {
      var v345 = outputWindow.document;
      JAM.call(v345.write, v345, [JAM.call(rightNum, null, [":", "", 32, ""], JAM.policy.p23) + hairpinHash["upper"] + "\n"], JAM.policy.p38);
      var v347 = outputWindow.document;
      JAM.call(v347.write, v347, [JAM.call(rightNum, null, [":", "", 32, ""], JAM.policy.p23) + hairpinHash["divider"] + "\n"], JAM.policy.p38);
      var v349 = outputWindow.document;
      JAM.call(v349.write, v349, [JAM.call(rightNum, null, [":", "", 32, ""], JAM.policy.p23) + hairpinHash["lower"] + "\n"], JAM.policy.p38);
    }
    var v352 = outputWindow.document;
    JAM.call(v352.write, v352, ["------------------------------------------------------------\n"], JAM.policy.p22);
    var v353 = outputWindow.document;
    JAM.call(v353.write, v353, ["\n"], JAM.policy.p22);
    i$$11 = i$$11 + 1;
    v354 = i$$11 < arrayOfFasta$$1.length;
  }
  JAM.call(closePre, null, [], JAM.policy.p39);
  JAM.call(closeWindow, null, [], JAM.policy.p39);
  return true;
}
function _removeNonPrimer(sequence$$18) {
  JAM.call(sequence$$18.replace, sequence$$18, [/u/g, "t"], JAM.policy.p41);
  JAM.call(sequence$$18.replace, sequence$$18, [/U/g, "T"], JAM.policy.p41);
  return JAM.call(sequence$$18.replace, sequence$$18, [/[^gatcryswkmbdhvnGATCRYSWKMBDHVN]/g, ""], JAM.policy.p41);
}
function _containsOnlyNonDegenerates(sequence$$19) {
  if (JAM.call(sequence$$19.search, sequence$$19, [/[^gatc]/i], JAM.policy.p38) == -1) {
    return true;
  }
  return false;
}
function _baseCounts(sequence$$20) {
  var numG = JAM.call(_getBaseCount, null, [sequence$$20, "g"], JAM.policy.p41);
  var numA = JAM.call(_getBaseCount, null, [sequence$$20, "a"], JAM.policy.p41);
  var numT = JAM.call(_getBaseCount, null, [sequence$$20, "t"], JAM.policy.p41);
  var numC = JAM.call(_getBaseCount, null, [sequence$$20, "c"], JAM.policy.p41);
  var numOther = sequence$$20.length - (numG + numA + numT + numC);
  return "G=" + numG + "; A=" + numA + "; T=" + numT + "; C=" + numC + "; Other=" + numOther + ";";
}
function _microgramsPerA260(sequence$$21, isPhosphorylated$$1) {
  if (JAM.call(_containsOnlyNonDegenerates, null, [sequence$$21], JAM.policy.p38)) {
    return JAM.call(_microgramsPerA260NonDegen, null, [sequence$$21, isPhosphorylated$$1], JAM.policy.p40);
  } else {
    return JAM.call(_microgramsPerA260Degen, null, [sequence$$21, isPhosphorylated$$1], JAM.policy.p40);
  }
  return;
}
function _microgramsPerA260NonDegen(sequence$$22, isPhosphorylated$$2) {
  var mw = JAM.call(_mw, null, [sequence$$22, isPhosphorylated$$2], JAM.policy.p40);
  var result = mw / JAM.call(_getExtinctionCoefficient, null, [sequence$$22], JAM.policy.p38);
  return JAM.call(result.toFixed, result, [2], JAM.policy.p25);
}
function _microgramsPerA260Degen(sequence$$23, isPhosphorylated$$3) {
  var lowerBoundsSequence = sequence$$23;
  var upperBoundsSequence = sequence$$23;
  lowerBoundsSequence = JAM.call(lowerBoundsSequence.replace, lowerBoundsSequence, [/r/gi, "g"], JAM.policy.p41);
  lowerBoundsSequence = JAM.call(lowerBoundsSequence.replace, lowerBoundsSequence, [/y/gi, "c"], JAM.policy.p41);
  lowerBoundsSequence = JAM.call(lowerBoundsSequence.replace, lowerBoundsSequence, [/s/gi, "c"], JAM.policy.p41);
  lowerBoundsSequence = JAM.call(lowerBoundsSequence.replace, lowerBoundsSequence, [/w/gi, "t"], JAM.policy.p41);
  lowerBoundsSequence = JAM.call(lowerBoundsSequence.replace, lowerBoundsSequence, [/k/gi, "t"], JAM.policy.p41);
  lowerBoundsSequence = JAM.call(lowerBoundsSequence.replace, lowerBoundsSequence, [/m/gi, "c"], JAM.policy.p41);
  lowerBoundsSequence = JAM.call(lowerBoundsSequence.replace, lowerBoundsSequence, [/b/gi, "c"], JAM.policy.p41);
  lowerBoundsSequence = JAM.call(lowerBoundsSequence.replace, lowerBoundsSequence, [/d/gi, "t"], JAM.policy.p41);
  lowerBoundsSequence = JAM.call(lowerBoundsSequence.replace, lowerBoundsSequence, [/h/gi, "c"], JAM.policy.p41);
  lowerBoundsSequence = JAM.call(lowerBoundsSequence.replace, lowerBoundsSequence, [/v/gi, "c"], JAM.policy.p41);
  lowerBoundsSequence = JAM.call(lowerBoundsSequence.replace, lowerBoundsSequence, [/n/gi, "c"], JAM.policy.p41);
  upperBoundsSequence = JAM.call(upperBoundsSequence.replace, upperBoundsSequence, [/r/gi, "a"], JAM.policy.p41);
  upperBoundsSequence = JAM.call(upperBoundsSequence.replace, upperBoundsSequence, [/y/gi, "t"], JAM.policy.p41);
  upperBoundsSequence = JAM.call(upperBoundsSequence.replace, upperBoundsSequence, [/s/gi, "g"], JAM.policy.p41);
  upperBoundsSequence = JAM.call(upperBoundsSequence.replace, upperBoundsSequence, [/w/gi, "a"], JAM.policy.p41);
  upperBoundsSequence = JAM.call(upperBoundsSequence.replace, upperBoundsSequence, [/k/gi, "g"], JAM.policy.p41);
  upperBoundsSequence = JAM.call(upperBoundsSequence.replace, upperBoundsSequence, [/m/gi, "a"], JAM.policy.p41);
  upperBoundsSequence = JAM.call(upperBoundsSequence.replace, upperBoundsSequence, [/b/gi, "g"], JAM.policy.p41);
  upperBoundsSequence = JAM.call(upperBoundsSequence.replace, upperBoundsSequence, [/d/gi, "a"], JAM.policy.p41);
  upperBoundsSequence = JAM.call(upperBoundsSequence.replace, upperBoundsSequence, [/h/gi, "a"], JAM.policy.p41);
  upperBoundsSequence = JAM.call(upperBoundsSequence.replace, upperBoundsSequence, [/v/gi, "a"], JAM.policy.p41);
  upperBoundsSequence = JAM.call(upperBoundsSequence.replace, upperBoundsSequence, [/n/gi, "a"], JAM.policy.p41);
  return JAM.call(_microgramsPerA260NonDegen, null, [upperBoundsSequence, isPhosphorylated$$3], JAM.policy.p40) + " to " + JAM.call(_microgramsPerA260NonDegen, null, [lowerBoundsSequence, isPhosphorylated$$3], JAM.policy.p40);
}
function _nmolPerA260(sequence$$24) {
  if (JAM.call(_containsOnlyNonDegenerates, null, [sequence$$24], JAM.policy.p38)) {
    return JAM.call(_nmolPerA260NonDegen, null, [sequence$$24], JAM.policy.p38);
  } else {
    return JAM.call(_nmolPerA260Degen, null, [sequence$$24], JAM.policy.p38);
  }
  return;
}
function _nmolPerA260NonDegen(sequence$$25) {
  var result$$1 = JAM.call(_getExtinctionCoefficient, null, [sequence$$25], JAM.policy.p38);
  result$$1 = 1 / result$$1 * 1E3;
  return JAM.call(result$$1.toFixed, result$$1, [2], JAM.policy.p25);
}
function _getExtinctionCoefficient(sequence$$26) {
  var dimerValues = JAM.call(_getDimerExtinctionCoefficients, null, [], JAM.policy.p39);
  var singleValues = JAM.call(_getSingleExtinctionCoefficients, null, [], JAM.policy.p39);
  var dimerSum = 0;
  var singleSum = 0;
  sequence$$26 = JAM.call(sequence$$26.toLowerCase, sequence$$26, [], JAM.policy.p39);
  var i$$12 = 0;
  var v368 = i$$12 < sequence$$26.length - 1;
  for (;v368;) {
    var v366 = dimerSum;
    var v834 = dimerValues;
    var v835 = JAM.call(sequence$$26.charAt, sequence$$26, [i$$12], JAM.policy.p38) + JAM.call(sequence$$26.charAt, sequence$$26, [i$$12 + 1], JAM.policy.p38);
    introspect(JAM.policy.p26) {
      var v367 = v834[v835]
    }
    dimerSum = v366 + v367;
    i$$12 = i$$12 + 1;
    v368 = i$$12 < sequence$$26.length - 1;
  }
  i$$12 = 1;
  var v371 = i$$12 < sequence$$26.length - 1;
  for (;v371;) {
    var v369 = singleSum;
    var v838 = singleValues;
    var v839 = JAM.call(sequence$$26.charAt, sequence$$26, [i$$12], JAM.policy.p38);
    introspect(JAM.policy.p26) {
      var v370 = v838[v839]
    }
    singleSum = v369 + v370;
    i$$12 = i$$12 + 1;
    v371 = i$$12 < sequence$$26.length - 1;
  }
  return 2 * dimerSum - singleSum;
}
function _nmolPerA260Degen(sequence$$27) {
  var lowerBoundsSequence$$1 = sequence$$27;
  var upperBoundsSequence$$1 = sequence$$27;
  lowerBoundsSequence$$1 = JAM.call(lowerBoundsSequence$$1.replace, lowerBoundsSequence$$1, [/r/gi, "g"], JAM.policy.p41);
  lowerBoundsSequence$$1 = JAM.call(lowerBoundsSequence$$1.replace, lowerBoundsSequence$$1, [/y/gi, "c"], JAM.policy.p41);
  lowerBoundsSequence$$1 = JAM.call(lowerBoundsSequence$$1.replace, lowerBoundsSequence$$1, [/s/gi, "c"], JAM.policy.p41);
  lowerBoundsSequence$$1 = JAM.call(lowerBoundsSequence$$1.replace, lowerBoundsSequence$$1, [/w/gi, "t"], JAM.policy.p41);
  lowerBoundsSequence$$1 = JAM.call(lowerBoundsSequence$$1.replace, lowerBoundsSequence$$1, [/k/gi, "t"], JAM.policy.p41);
  lowerBoundsSequence$$1 = JAM.call(lowerBoundsSequence$$1.replace, lowerBoundsSequence$$1, [/m/gi, "c"], JAM.policy.p41);
  lowerBoundsSequence$$1 = JAM.call(lowerBoundsSequence$$1.replace, lowerBoundsSequence$$1, [/b/gi, "c"], JAM.policy.p41);
  lowerBoundsSequence$$1 = JAM.call(lowerBoundsSequence$$1.replace, lowerBoundsSequence$$1, [/d/gi, "t"], JAM.policy.p41);
  lowerBoundsSequence$$1 = JAM.call(lowerBoundsSequence$$1.replace, lowerBoundsSequence$$1, [/h/gi, "c"], JAM.policy.p41);
  lowerBoundsSequence$$1 = JAM.call(lowerBoundsSequence$$1.replace, lowerBoundsSequence$$1, [/v/gi, "c"], JAM.policy.p41);
  lowerBoundsSequence$$1 = JAM.call(lowerBoundsSequence$$1.replace, lowerBoundsSequence$$1, [/n/gi, "c"], JAM.policy.p41);
  upperBoundsSequence$$1 = JAM.call(upperBoundsSequence$$1.replace, upperBoundsSequence$$1, [/r/gi, "a"], JAM.policy.p41);
  upperBoundsSequence$$1 = JAM.call(upperBoundsSequence$$1.replace, upperBoundsSequence$$1, [/y/gi, "t"], JAM.policy.p41);
  upperBoundsSequence$$1 = JAM.call(upperBoundsSequence$$1.replace, upperBoundsSequence$$1, [/s/gi, "g"], JAM.policy.p41);
  upperBoundsSequence$$1 = JAM.call(upperBoundsSequence$$1.replace, upperBoundsSequence$$1, [/w/gi, "a"], JAM.policy.p41);
  upperBoundsSequence$$1 = JAM.call(upperBoundsSequence$$1.replace, upperBoundsSequence$$1, [/k/gi, "g"], JAM.policy.p41);
  upperBoundsSequence$$1 = JAM.call(upperBoundsSequence$$1.replace, upperBoundsSequence$$1, [/m/gi, "a"], JAM.policy.p41);
  upperBoundsSequence$$1 = JAM.call(upperBoundsSequence$$1.replace, upperBoundsSequence$$1, [/b/gi, "g"], JAM.policy.p41);
  upperBoundsSequence$$1 = JAM.call(upperBoundsSequence$$1.replace, upperBoundsSequence$$1, [/d/gi, "a"], JAM.policy.p41);
  upperBoundsSequence$$1 = JAM.call(upperBoundsSequence$$1.replace, upperBoundsSequence$$1, [/h/gi, "a"], JAM.policy.p41);
  upperBoundsSequence$$1 = JAM.call(upperBoundsSequence$$1.replace, upperBoundsSequence$$1, [/v/gi, "a"], JAM.policy.p41);
  upperBoundsSequence$$1 = JAM.call(upperBoundsSequence$$1.replace, upperBoundsSequence$$1, [/n/gi, "a"], JAM.policy.p41);
  return JAM.call(_nmolPerA260NonDegen, null, [upperBoundsSequence$$1], JAM.policy.p38) + " to " + JAM.call(_nmolPerA260NonDegen, null, [lowerBoundsSequence$$1], JAM.policy.p38);
}
function _percentGC(sequence$$28) {
  if (JAM.call(_containsOnlyNonDegenerates, null, [sequence$$28], JAM.policy.p38)) {
    return JAM.call(_percentGCNonDegen, null, [sequence$$28], JAM.policy.p38);
  } else {
    return JAM.call(_percentGCDegen, null, [sequence$$28], JAM.policy.p38);
  }
  return;
}
function _percentGCNonDegen(sequence$$29) {
  var numHits = JAM.call(_getBaseCount, null, [sequence$$29, "g"], JAM.policy.p41) + JAM.call(_getBaseCount, null, [sequence$$29, "c"], JAM.policy.p41);
  var v378 = numHits / sequence$$29.length * 100;
  return JAM.call(v378.toFixed, v378, [2], JAM.policy.p25);
}
function _percentGCDegen(sequence$$30) {
  var lowerBoundsSequence$$2 = sequence$$30;
  var upperBoundsSequence$$2 = sequence$$30;
  lowerBoundsSequence$$2 = JAM.call(lowerBoundsSequence$$2.replace, lowerBoundsSequence$$2, [/s/gi, "g"], JAM.policy.p41);
  upperBoundsSequence$$2 = JAM.call(upperBoundsSequence$$2.replace, upperBoundsSequence$$2, [/s/gi, "g"], JAM.policy.p41);
  lowerBoundsSequence$$2 = JAM.call(lowerBoundsSequence$$2.replace, lowerBoundsSequence$$2, [/w/gi, "a"], JAM.policy.p41);
  upperBoundsSequence$$2 = JAM.call(upperBoundsSequence$$2.replace, upperBoundsSequence$$2, [/w/gi, "a"], JAM.policy.p41);
  lowerBoundsSequence$$2 = JAM.call(lowerBoundsSequence$$2.replace, lowerBoundsSequence$$2, [/r/gi, "a"], JAM.policy.p41);
  lowerBoundsSequence$$2 = JAM.call(lowerBoundsSequence$$2.replace, lowerBoundsSequence$$2, [/y/gi, "t"], JAM.policy.p41);
  lowerBoundsSequence$$2 = JAM.call(lowerBoundsSequence$$2.replace, lowerBoundsSequence$$2, [/k/gi, "t"], JAM.policy.p41);
  lowerBoundsSequence$$2 = JAM.call(lowerBoundsSequence$$2.replace, lowerBoundsSequence$$2, [/m/gi, "a"], JAM.policy.p41);
  lowerBoundsSequence$$2 = JAM.call(lowerBoundsSequence$$2.replace, lowerBoundsSequence$$2, [/b/gi, "t"], JAM.policy.p41);
  lowerBoundsSequence$$2 = JAM.call(lowerBoundsSequence$$2.replace, lowerBoundsSequence$$2, [/d/gi, "a"], JAM.policy.p41);
  lowerBoundsSequence$$2 = JAM.call(lowerBoundsSequence$$2.replace, lowerBoundsSequence$$2, [/h/gi, "a"], JAM.policy.p41);
  lowerBoundsSequence$$2 = JAM.call(lowerBoundsSequence$$2.replace, lowerBoundsSequence$$2, [/v/gi, "a"], JAM.policy.p41);
  lowerBoundsSequence$$2 = JAM.call(lowerBoundsSequence$$2.replace, lowerBoundsSequence$$2, [/n/gi, "a"], JAM.policy.p41);
  upperBoundsSequence$$2 = JAM.call(upperBoundsSequence$$2.replace, upperBoundsSequence$$2, [/r/gi, "g"], JAM.policy.p41);
  upperBoundsSequence$$2 = JAM.call(upperBoundsSequence$$2.replace, upperBoundsSequence$$2, [/y/gi, "c"], JAM.policy.p41);
  upperBoundsSequence$$2 = JAM.call(upperBoundsSequence$$2.replace, upperBoundsSequence$$2, [/k/gi, "g"], JAM.policy.p41);
  upperBoundsSequence$$2 = JAM.call(upperBoundsSequence$$2.replace, upperBoundsSequence$$2, [/m/gi, "c"], JAM.policy.p41);
  upperBoundsSequence$$2 = JAM.call(upperBoundsSequence$$2.replace, upperBoundsSequence$$2, [/b/gi, "g"], JAM.policy.p41);
  upperBoundsSequence$$2 = JAM.call(upperBoundsSequence$$2.replace, upperBoundsSequence$$2, [/d/gi, "g"], JAM.policy.p41);
  upperBoundsSequence$$2 = JAM.call(upperBoundsSequence$$2.replace, upperBoundsSequence$$2, [/h/gi, "c"], JAM.policy.p41);
  upperBoundsSequence$$2 = JAM.call(upperBoundsSequence$$2.replace, upperBoundsSequence$$2, [/v/gi, "g"], JAM.policy.p41);
  upperBoundsSequence$$2 = JAM.call(upperBoundsSequence$$2.replace, upperBoundsSequence$$2, [/n/gi, "g"], JAM.policy.p41);
  return JAM.call(_percentGCNonDegen, null, [lowerBoundsSequence$$2], JAM.policy.p38) + " to " + JAM.call(_percentGCNonDegen, null, [upperBoundsSequence$$2], JAM.policy.p38);
}
function _molecularWeight(sequence$$31, isPhosphorylated$$4) {
  if (JAM.call(_containsOnlyNonDegenerates, null, [sequence$$31], JAM.policy.p38)) {
    return JAM.call(_molecularWeightNonDegen, null, [sequence$$31, isPhosphorylated$$4], JAM.policy.p40);
  } else {
    return JAM.call(_molecularWeightDegen, null, [sequence$$31, isPhosphorylated$$4], JAM.policy.p40);
  }
  return;
}
function _molecularWeightNonDegen(sequence$$32, isPhosphorylated$$5) {
  var v382 = JAM.call(_mw, null, [sequence$$32, isPhosphorylated$$5], JAM.policy.p40);
  return JAM.call(v382.toFixed, v382, [2], JAM.policy.p25);
}
function _mw(sequence$$33, isPhosphorylated$$6) {
  var g = JAM.call(_getBaseCount, null, [sequence$$33, "g"], JAM.policy.p41);
  var a = JAM.call(_getBaseCount, null, [sequence$$33, "a"], JAM.policy.p41);
  var t = JAM.call(_getBaseCount, null, [sequence$$33, "t"], JAM.policy.p41);
  var c = JAM.call(_getBaseCount, null, [sequence$$33, "c"], JAM.policy.p41);
  var phosAdjust = 0;
  if (isPhosphorylated$$6) {
    phosAdjust = 79;
  }
  return g * 329.21 + a * 313.21 + t * 304.2 + c * 289.18 - 61.96 + phosAdjust;
}
function _molecularWeightDegen(sequence$$34, isPhosphorylated$$7) {
  var lowerBoundsSequence$$3 = sequence$$34;
  var upperBoundsSequence$$3 = sequence$$34;
  lowerBoundsSequence$$3 = JAM.call(lowerBoundsSequence$$3.replace, lowerBoundsSequence$$3, [/r/gi, "a"], JAM.policy.p41);
  lowerBoundsSequence$$3 = JAM.call(lowerBoundsSequence$$3.replace, lowerBoundsSequence$$3, [/y/gi, "c"], JAM.policy.p41);
  lowerBoundsSequence$$3 = JAM.call(lowerBoundsSequence$$3.replace, lowerBoundsSequence$$3, [/s/gi, "c"], JAM.policy.p41);
  lowerBoundsSequence$$3 = JAM.call(lowerBoundsSequence$$3.replace, lowerBoundsSequence$$3, [/w/gi, "t"], JAM.policy.p41);
  lowerBoundsSequence$$3 = JAM.call(lowerBoundsSequence$$3.replace, lowerBoundsSequence$$3, [/k/gi, "t"], JAM.policy.p41);
  lowerBoundsSequence$$3 = JAM.call(lowerBoundsSequence$$3.replace, lowerBoundsSequence$$3, [/m/gi, "c"], JAM.policy.p41);
  lowerBoundsSequence$$3 = JAM.call(lowerBoundsSequence$$3.replace, lowerBoundsSequence$$3, [/b/gi, "c"], JAM.policy.p41);
  lowerBoundsSequence$$3 = JAM.call(lowerBoundsSequence$$3.replace, lowerBoundsSequence$$3, [/d/gi, "t"], JAM.policy.p41);
  lowerBoundsSequence$$3 = JAM.call(lowerBoundsSequence$$3.replace, lowerBoundsSequence$$3, [/h/gi, "c"], JAM.policy.p41);
  lowerBoundsSequence$$3 = JAM.call(lowerBoundsSequence$$3.replace, lowerBoundsSequence$$3, [/v/gi, "c"], JAM.policy.p41);
  lowerBoundsSequence$$3 = JAM.call(lowerBoundsSequence$$3.replace, lowerBoundsSequence$$3, [/n/gi, "c"], JAM.policy.p41);
  upperBoundsSequence$$3 = JAM.call(upperBoundsSequence$$3.replace, upperBoundsSequence$$3, [/r/gi, "g"], JAM.policy.p41);
  upperBoundsSequence$$3 = JAM.call(upperBoundsSequence$$3.replace, upperBoundsSequence$$3, [/y/gi, "t"], JAM.policy.p41);
  upperBoundsSequence$$3 = JAM.call(upperBoundsSequence$$3.replace, upperBoundsSequence$$3, [/s/gi, "g"], JAM.policy.p41);
  upperBoundsSequence$$3 = JAM.call(upperBoundsSequence$$3.replace, upperBoundsSequence$$3, [/w/gi, "a"], JAM.policy.p41);
  upperBoundsSequence$$3 = JAM.call(upperBoundsSequence$$3.replace, upperBoundsSequence$$3, [/k/gi, "g"], JAM.policy.p41);
  upperBoundsSequence$$3 = JAM.call(upperBoundsSequence$$3.replace, upperBoundsSequence$$3, [/m/gi, "a"], JAM.policy.p41);
  upperBoundsSequence$$3 = JAM.call(upperBoundsSequence$$3.replace, upperBoundsSequence$$3, [/b/gi, "g"], JAM.policy.p41);
  upperBoundsSequence$$3 = JAM.call(upperBoundsSequence$$3.replace, upperBoundsSequence$$3, [/d/gi, "g"], JAM.policy.p41);
  upperBoundsSequence$$3 = JAM.call(upperBoundsSequence$$3.replace, upperBoundsSequence$$3, [/h/gi, "a"], JAM.policy.p41);
  upperBoundsSequence$$3 = JAM.call(upperBoundsSequence$$3.replace, upperBoundsSequence$$3, [/v/gi, "g"], JAM.policy.p41);
  upperBoundsSequence$$3 = JAM.call(upperBoundsSequence$$3.replace, upperBoundsSequence$$3, [/n/gi, "g"], JAM.policy.p41);
  return JAM.call(_molecularWeightNonDegen, null, [lowerBoundsSequence$$3, isPhosphorylated$$7], JAM.policy.p40) + " to " + JAM.call(_molecularWeightNonDegen, null, [upperBoundsSequence$$3, isPhosphorylated$$7], JAM.policy.p40);
}
function _basicTm(sequence$$35) {
  if (JAM.call(_containsOnlyNonDegenerates, null, [sequence$$35], JAM.policy.p38)) {
    return JAM.call(_basicTmNonDegen, null, [sequence$$35], JAM.policy.p38);
  } else {
    return JAM.call(_basicTmDegen, null, [sequence$$35], JAM.policy.p38);
  }
  return;
}
function _basicTmNonDegen(sequence$$36) {
  if (sequence$$36.length < 14) {
    var numG$$1 = JAM.call(_getBaseCount, null, [sequence$$36, "g"], JAM.policy.p41);
    var numC$$1 = JAM.call(_getBaseCount, null, [sequence$$36, "c"], JAM.policy.p41);
    var numA$$1 = JAM.call(_getBaseCount, null, [sequence$$36, "a"], JAM.policy.p41);
    var numT$$1 = JAM.call(_getBaseCount, null, [sequence$$36, "t"], JAM.policy.p41);
    var v387 = 4 * (numG$$1 + numC$$1) + 2 * (numA$$1 + numT$$1);
    return JAM.call(v387.toFixed, v387, [0], JAM.policy.p25);
  } else {
    numG$$1 = JAM.call(_getBaseCount, null, [sequence$$36, "g"], JAM.policy.p41);
    numC$$1 = JAM.call(_getBaseCount, null, [sequence$$36, "c"], JAM.policy.p41);
    var v388 = 64.9 + 41 * (numG$$1 + numC$$1 - 16.4) / sequence$$36.length;
    return JAM.call(v388.toFixed, v388, [0], JAM.policy.p25);
  }
  return;
}
function _basicTmDegen(sequence$$37) {
  var lowerBoundsSequence$$4 = sequence$$37;
  var upperBoundsSequence$$4 = sequence$$37;
  lowerBoundsSequence$$4 = JAM.call(lowerBoundsSequence$$4.replace, lowerBoundsSequence$$4, [/s/gi, "g"], JAM.policy.p41);
  upperBoundsSequence$$4 = JAM.call(upperBoundsSequence$$4.replace, upperBoundsSequence$$4, [/s/gi, "g"], JAM.policy.p41);
  lowerBoundsSequence$$4 = JAM.call(lowerBoundsSequence$$4.replace, lowerBoundsSequence$$4, [/w/gi, "a"], JAM.policy.p41);
  upperBoundsSequence$$4 = JAM.call(upperBoundsSequence$$4.replace, upperBoundsSequence$$4, [/w/gi, "a"], JAM.policy.p41);
  lowerBoundsSequence$$4 = JAM.call(lowerBoundsSequence$$4.replace, lowerBoundsSequence$$4, [/r/gi, "a"], JAM.policy.p41);
  lowerBoundsSequence$$4 = JAM.call(lowerBoundsSequence$$4.replace, lowerBoundsSequence$$4, [/y/gi, "t"], JAM.policy.p41);
  lowerBoundsSequence$$4 = JAM.call(lowerBoundsSequence$$4.replace, lowerBoundsSequence$$4, [/k/gi, "t"], JAM.policy.p41);
  lowerBoundsSequence$$4 = JAM.call(lowerBoundsSequence$$4.replace, lowerBoundsSequence$$4, [/m/gi, "a"], JAM.policy.p41);
  lowerBoundsSequence$$4 = JAM.call(lowerBoundsSequence$$4.replace, lowerBoundsSequence$$4, [/b/gi, "t"], JAM.policy.p41);
  lowerBoundsSequence$$4 = JAM.call(lowerBoundsSequence$$4.replace, lowerBoundsSequence$$4, [/d/gi, "a"], JAM.policy.p41);
  lowerBoundsSequence$$4 = JAM.call(lowerBoundsSequence$$4.replace, lowerBoundsSequence$$4, [/h/gi, "a"], JAM.policy.p41);
  lowerBoundsSequence$$4 = JAM.call(lowerBoundsSequence$$4.replace, lowerBoundsSequence$$4, [/v/gi, "a"], JAM.policy.p41);
  lowerBoundsSequence$$4 = JAM.call(lowerBoundsSequence$$4.replace, lowerBoundsSequence$$4, [/n/gi, "a"], JAM.policy.p41);
  upperBoundsSequence$$4 = JAM.call(upperBoundsSequence$$4.replace, upperBoundsSequence$$4, [/r/gi, "g"], JAM.policy.p41);
  upperBoundsSequence$$4 = JAM.call(upperBoundsSequence$$4.replace, upperBoundsSequence$$4, [/y/gi, "c"], JAM.policy.p41);
  upperBoundsSequence$$4 = JAM.call(upperBoundsSequence$$4.replace, upperBoundsSequence$$4, [/k/gi, "g"], JAM.policy.p41);
  upperBoundsSequence$$4 = JAM.call(upperBoundsSequence$$4.replace, upperBoundsSequence$$4, [/m/gi, "c"], JAM.policy.p41);
  upperBoundsSequence$$4 = JAM.call(upperBoundsSequence$$4.replace, upperBoundsSequence$$4, [/b/gi, "g"], JAM.policy.p41);
  upperBoundsSequence$$4 = JAM.call(upperBoundsSequence$$4.replace, upperBoundsSequence$$4, [/d/gi, "g"], JAM.policy.p41);
  upperBoundsSequence$$4 = JAM.call(upperBoundsSequence$$4.replace, upperBoundsSequence$$4, [/h/gi, "c"], JAM.policy.p41);
  upperBoundsSequence$$4 = JAM.call(upperBoundsSequence$$4.replace, upperBoundsSequence$$4, [/v/gi, "g"], JAM.policy.p41);
  upperBoundsSequence$$4 = JAM.call(upperBoundsSequence$$4.replace, upperBoundsSequence$$4, [/n/gi, "g"], JAM.policy.p41);
  return JAM.call(_basicTmNonDegen, null, [lowerBoundsSequence$$4], JAM.policy.p38) + " to " + JAM.call(_basicTmNonDegen, null, [upperBoundsSequence$$4], JAM.policy.p38);
}
function _molarSaltAdjustedTm(sequence$$38, molarSalt$$1) {
  if (JAM.call(_containsOnlyNonDegenerates, null, [sequence$$38], JAM.policy.p38)) {
    return JAM.call(_molarSaltAdjustedTmNonDegen, null, [sequence$$38, molarSalt$$1], JAM.policy.p40);
  } else {
    return JAM.call(_molarSaltAdjustedTmDegen, null, [sequence$$38, molarSalt$$1], JAM.policy.p40);
  }
  return;
}
function _molarSaltAdjustedTmNonDegen(sequence$$39, molarSalt$$2) {
  var gcHits = JAM.call(_getBaseCount, null, [sequence$$39, "g"], JAM.policy.p41) + JAM.call(_getBaseCount, null, [sequence$$39, "c"], JAM.policy.p41);
  var pGC = gcHits / sequence$$39.length * 100;
  var v396 = 81.5 + 7.21 * JAM.call(Math.log, Math, [molarSalt$$2], JAM.policy.p38) + .41 * pGC - 675 / sequence$$39.length;
  return JAM.call(v396.toFixed, v396, [0], JAM.policy.p25);
}
function _molarSaltAdjustedTmDegen(sequence$$40, molarSalt$$3) {
  var lowerBoundsSequence$$5 = sequence$$40;
  var upperBoundsSequence$$5 = sequence$$40;
  lowerBoundsSequence$$5 = JAM.call(lowerBoundsSequence$$5.replace, lowerBoundsSequence$$5, [/s/gi, "g"], JAM.policy.p41);
  upperBoundsSequence$$5 = JAM.call(upperBoundsSequence$$5.replace, upperBoundsSequence$$5, [/s/gi, "g"], JAM.policy.p41);
  lowerBoundsSequence$$5 = JAM.call(lowerBoundsSequence$$5.replace, lowerBoundsSequence$$5, [/w/gi, "a"], JAM.policy.p41);
  upperBoundsSequence$$5 = JAM.call(upperBoundsSequence$$5.replace, upperBoundsSequence$$5, [/w/gi, "a"], JAM.policy.p41);
  lowerBoundsSequence$$5 = JAM.call(lowerBoundsSequence$$5.replace, lowerBoundsSequence$$5, [/r/gi, "a"], JAM.policy.p41);
  lowerBoundsSequence$$5 = JAM.call(lowerBoundsSequence$$5.replace, lowerBoundsSequence$$5, [/y/gi, "t"], JAM.policy.p41);
  lowerBoundsSequence$$5 = JAM.call(lowerBoundsSequence$$5.replace, lowerBoundsSequence$$5, [/k/gi, "t"], JAM.policy.p41);
  lowerBoundsSequence$$5 = JAM.call(lowerBoundsSequence$$5.replace, lowerBoundsSequence$$5, [/m/gi, "a"], JAM.policy.p41);
  lowerBoundsSequence$$5 = JAM.call(lowerBoundsSequence$$5.replace, lowerBoundsSequence$$5, [/b/gi, "t"], JAM.policy.p41);
  lowerBoundsSequence$$5 = JAM.call(lowerBoundsSequence$$5.replace, lowerBoundsSequence$$5, [/d/gi, "a"], JAM.policy.p41);
  lowerBoundsSequence$$5 = JAM.call(lowerBoundsSequence$$5.replace, lowerBoundsSequence$$5, [/h/gi, "a"], JAM.policy.p41);
  lowerBoundsSequence$$5 = JAM.call(lowerBoundsSequence$$5.replace, lowerBoundsSequence$$5, [/v/gi, "a"], JAM.policy.p41);
  lowerBoundsSequence$$5 = JAM.call(lowerBoundsSequence$$5.replace, lowerBoundsSequence$$5, [/n/gi, "a"], JAM.policy.p41);
  upperBoundsSequence$$5 = JAM.call(upperBoundsSequence$$5.replace, upperBoundsSequence$$5, [/r/gi, "g"], JAM.policy.p41);
  upperBoundsSequence$$5 = JAM.call(upperBoundsSequence$$5.replace, upperBoundsSequence$$5, [/y/gi, "c"], JAM.policy.p41);
  upperBoundsSequence$$5 = JAM.call(upperBoundsSequence$$5.replace, upperBoundsSequence$$5, [/k/gi, "g"], JAM.policy.p41);
  upperBoundsSequence$$5 = JAM.call(upperBoundsSequence$$5.replace, upperBoundsSequence$$5, [/m/gi, "c"], JAM.policy.p41);
  upperBoundsSequence$$5 = JAM.call(upperBoundsSequence$$5.replace, upperBoundsSequence$$5, [/b/gi, "g"], JAM.policy.p41);
  upperBoundsSequence$$5 = JAM.call(upperBoundsSequence$$5.replace, upperBoundsSequence$$5, [/d/gi, "g"], JAM.policy.p41);
  upperBoundsSequence$$5 = JAM.call(upperBoundsSequence$$5.replace, upperBoundsSequence$$5, [/h/gi, "c"], JAM.policy.p41);
  upperBoundsSequence$$5 = JAM.call(upperBoundsSequence$$5.replace, upperBoundsSequence$$5, [/v/gi, "g"], JAM.policy.p41);
  upperBoundsSequence$$5 = JAM.call(upperBoundsSequence$$5.replace, upperBoundsSequence$$5, [/n/gi, "g"], JAM.policy.p41);
  return JAM.call(_molarSaltAdjustedTmNonDegen, null, [lowerBoundsSequence$$5, molarSalt$$3], JAM.policy.p40) + " to " + JAM.call(_molarSaltAdjustedTmNonDegen, null, [upperBoundsSequence$$5, molarSalt$$3], JAM.policy.p40);
}
function _nearestNeighborTm(sequence$$41, molarSalt$$4, molarPrimerTotal$$1, molarMagnesium$$1) {
  if (JAM.call(_containsOnlyNonDegenerates, null, [sequence$$41], JAM.policy.p38)) {
    return JAM.call(_nearestNeighborTmNonDegen, null, [sequence$$41, molarSalt$$4, molarPrimerTotal$$1, molarMagnesium$$1], JAM.policy.p40);
  } else {
    return JAM.call(_nearestNeighborTmDegen, null, [sequence$$41, molarSalt$$4, molarPrimerTotal$$1, molarMagnesium$$1], JAM.policy.p40);
  }
  return;
}
function _nearestNeighborTmNonDegen(sequence$$42, molarSalt$$5, molarPrimerTotal$$2, molarMagnesium$$2) {
  sequence$$42 = JAM.call(sequence$$42.toLowerCase, sequence$$42, [], JAM.policy.p39);
  var R = 1.987;
  var ds = 0;
  var dh = 0;
  var correctedSalt = molarSalt$$5 + molarMagnesium$$2 * 140;
  ds = ds + .368 * (sequence$$42.length - 1) * JAM.call(Math.log, Math, [correctedSalt], JAM.policy.p38);
  var termDsCorr = JAM.call(_getTerminalCorrectionsDsHash, null, [], JAM.policy.p39);
  var v403 = ds;
  var v857 = termDsCorr;
  var v858 = JAM.call(sequence$$42.charAt, sequence$$42, [0], JAM.policy.p25);
  introspect(JAM.policy.p26) {
    var v404 = v857[v858]
  }
  ds = v403 + v404;
  var v405 = ds;
  var v859 = termDsCorr;
  var v860 = JAM.call(sequence$$42.charAt, sequence$$42, [sequence$$42.length - 1], JAM.policy.p38);
  introspect(JAM.policy.p26) {
    var v406 = v859[v860]
  }
  ds = v405 + v406;
  var termDhCorr = JAM.call(_getTerminalCorrectionsDhHash, null, [], JAM.policy.p39);
  var v407 = dh;
  var v861 = termDhCorr;
  var v862 = JAM.call(sequence$$42.charAt, sequence$$42, [0], JAM.policy.p25);
  introspect(JAM.policy.p26) {
    var v408 = v861[v862]
  }
  dh = v407 + v408;
  var v409 = dh;
  var v863 = termDhCorr;
  var v864 = JAM.call(sequence$$42.charAt, sequence$$42, [sequence$$42.length - 1], JAM.policy.p38);
  introspect(JAM.policy.p26) {
    var v410 = v863[v864]
  }
  dh = v409 + v410;
  var dsValues = JAM.call(_getDsHash, null, [], JAM.policy.p39);
  var dhValues = JAM.call(_getDhHash, null, [], JAM.policy.p39);
  var i$$13 = 0;
  var v415 = i$$13 < sequence$$42.length - 1;
  for (;v415;) {
    var v411 = ds;
    var v866 = dsValues;
    var v867 = JAM.call(sequence$$42.charAt, sequence$$42, [i$$13], JAM.policy.p38) + JAM.call(sequence$$42.charAt, sequence$$42, [i$$13 + 1], JAM.policy.p38);
    introspect(JAM.policy.p26) {
      var v412 = v866[v867]
    }
    ds = v411 + v412;
    var v413 = dh;
    var v868 = dhValues;
    var v869 = JAM.call(sequence$$42.charAt, sequence$$42, [i$$13], JAM.policy.p38) + JAM.call(sequence$$42.charAt, sequence$$42, [i$$13 + 1], JAM.policy.p38);
    introspect(JAM.policy.p26) {
      var v414 = v868[v869]
    }
    dh = v413 + v414;
    i$$13 = i$$13 + 1;
    v415 = i$$13 < sequence$$42.length - 1;
  }
  var v416 = 1E3 * dh / (ds + R * JAM.call(Math.log, Math, [molarPrimerTotal$$2 / 2], JAM.policy.p38)) - 273.15;
  return JAM.call(v416.toFixed, v416, [2], JAM.policy.p25);
}
function _nearestNeighborTmDegen(sequence$$43, molarSalt$$6, molarPrimerTotal$$3, molarMagnesium$$3) {
  var lowerBoundsSequence$$6 = sequence$$43;
  var upperBoundsSequence$$6 = sequence$$43;
  lowerBoundsSequence$$6 = JAM.call(lowerBoundsSequence$$6.replace, lowerBoundsSequence$$6, [/s/gi, "g"], JAM.policy.p41);
  upperBoundsSequence$$6 = JAM.call(upperBoundsSequence$$6.replace, upperBoundsSequence$$6, [/s/gi, "g"], JAM.policy.p41);
  lowerBoundsSequence$$6 = JAM.call(lowerBoundsSequence$$6.replace, lowerBoundsSequence$$6, [/w/gi, "a"], JAM.policy.p41);
  upperBoundsSequence$$6 = JAM.call(upperBoundsSequence$$6.replace, upperBoundsSequence$$6, [/w/gi, "a"], JAM.policy.p41);
  lowerBoundsSequence$$6 = JAM.call(lowerBoundsSequence$$6.replace, lowerBoundsSequence$$6, [/r/gi, "a"], JAM.policy.p41);
  lowerBoundsSequence$$6 = JAM.call(lowerBoundsSequence$$6.replace, lowerBoundsSequence$$6, [/y/gi, "t"], JAM.policy.p41);
  lowerBoundsSequence$$6 = JAM.call(lowerBoundsSequence$$6.replace, lowerBoundsSequence$$6, [/k/gi, "t"], JAM.policy.p41);
  lowerBoundsSequence$$6 = JAM.call(lowerBoundsSequence$$6.replace, lowerBoundsSequence$$6, [/m/gi, "a"], JAM.policy.p41);
  lowerBoundsSequence$$6 = JAM.call(lowerBoundsSequence$$6.replace, lowerBoundsSequence$$6, [/b/gi, "t"], JAM.policy.p41);
  lowerBoundsSequence$$6 = JAM.call(lowerBoundsSequence$$6.replace, lowerBoundsSequence$$6, [/d/gi, "a"], JAM.policy.p41);
  lowerBoundsSequence$$6 = JAM.call(lowerBoundsSequence$$6.replace, lowerBoundsSequence$$6, [/h/gi, "a"], JAM.policy.p41);
  lowerBoundsSequence$$6 = JAM.call(lowerBoundsSequence$$6.replace, lowerBoundsSequence$$6, [/v/gi, "a"], JAM.policy.p41);
  lowerBoundsSequence$$6 = JAM.call(lowerBoundsSequence$$6.replace, lowerBoundsSequence$$6, [/n/gi, "a"], JAM.policy.p41);
  upperBoundsSequence$$6 = JAM.call(upperBoundsSequence$$6.replace, upperBoundsSequence$$6, [/r/gi, "g"], JAM.policy.p41);
  upperBoundsSequence$$6 = JAM.call(upperBoundsSequence$$6.replace, upperBoundsSequence$$6, [/y/gi, "c"], JAM.policy.p41);
  upperBoundsSequence$$6 = JAM.call(upperBoundsSequence$$6.replace, upperBoundsSequence$$6, [/k/gi, "g"], JAM.policy.p41);
  upperBoundsSequence$$6 = JAM.call(upperBoundsSequence$$6.replace, upperBoundsSequence$$6, [/m/gi, "c"], JAM.policy.p41);
  upperBoundsSequence$$6 = JAM.call(upperBoundsSequence$$6.replace, upperBoundsSequence$$6, [/b/gi, "g"], JAM.policy.p41);
  upperBoundsSequence$$6 = JAM.call(upperBoundsSequence$$6.replace, upperBoundsSequence$$6, [/d/gi, "g"], JAM.policy.p41);
  upperBoundsSequence$$6 = JAM.call(upperBoundsSequence$$6.replace, upperBoundsSequence$$6, [/h/gi, "c"], JAM.policy.p41);
  upperBoundsSequence$$6 = JAM.call(upperBoundsSequence$$6.replace, upperBoundsSequence$$6, [/v/gi, "g"], JAM.policy.p41);
  upperBoundsSequence$$6 = JAM.call(upperBoundsSequence$$6.replace, upperBoundsSequence$$6, [/n/gi, "g"], JAM.policy.p41);
  return JAM.call(_nearestNeighborTmNonDegen, null, [lowerBoundsSequence$$6, molarSalt$$6, molarPrimerTotal$$3, molarMagnesium$$3], JAM.policy.p40) + " to " + JAM.call(_nearestNeighborTmNonDegen, null, [upperBoundsSequence$$6, molarSalt$$6, molarPrimerTotal$$3, molarMagnesium$$3], JAM.policy.p40);
}
function _getBaseCount(sequence$$44, base$$1) {
  var basePattern = JAM.new(RegExp, [base$$1, "gi"], JAM.policy.p41);
  if (JAM.call(sequence$$44.search, sequence$$44, [basePattern], JAM.policy.p38) != -1) {
    return JAM.call(sequence$$44.match, sequence$$44, [basePattern], JAM.policy.p38).length;
  } else {
    return 0;
  }
  return;
}
function _getTerminalCorrectionsDsHash() {
  var hash = {};
  hash["g"] = -2.8;
  hash["a"] = 4.1;
  hash["t"] = 4.1;
  hash["c"] = -2.8;
  return hash;
}
function _getTerminalCorrectionsDhHash() {
  var hash$$1 = {};
  hash$$1["g"] = .1;
  hash$$1["a"] = 2.3;
  hash$$1["t"] = 2.3;
  hash$$1["c"] = .1;
  return hash$$1;
}
function _getDsHash() {
  var hash$$2 = {};
  hash$$2["gg"] = -19.9;
  hash$$2["ga"] = -22.2;
  hash$$2["gt"] = -22.4;
  hash$$2["gc"] = -27.2;
  hash$$2["ag"] = -21;
  hash$$2["aa"] = -22.2;
  hash$$2["at"] = -20.4;
  hash$$2["ac"] = -22.4;
  hash$$2["tg"] = -22.7;
  hash$$2["ta"] = -21.3;
  hash$$2["tt"] = -22.2;
  hash$$2["tc"] = -22.2;
  hash$$2["cg"] = -27.2;
  hash$$2["ca"] = -22.7;
  hash$$2["ct"] = -21;
  hash$$2["cc"] = -19.9;
  return hash$$2;
}
function _getDhHash() {
  var hash$$3 = {};
  hash$$3["gg"] = -8;
  hash$$3["ga"] = -8.2;
  hash$$3["gt"] = -8.4;
  hash$$3["gc"] = -10.6;
  hash$$3["ag"] = -7.8;
  hash$$3["aa"] = -7.9;
  hash$$3["at"] = -7.2;
  hash$$3["ac"] = -8.4;
  hash$$3["tg"] = -8.5;
  hash$$3["ta"] = -7.2;
  hash$$3["tt"] = -7.9;
  hash$$3["tc"] = -8.2;
  hash$$3["cg"] = -10.6;
  hash$$3["ca"] = -8.5;
  hash$$3["ct"] = -7.8;
  hash$$3["cc"] = -8;
  return hash$$3;
}
function _getDimerExtinctionCoefficients() {
  var hash$$4 = {};
  hash$$4["gg"] = 10.8;
  hash$$4["ga"] = 12.6;
  hash$$4["gt"] = 10;
  hash$$4["gc"] = 8.8;
  hash$$4["ag"] = 12.5;
  hash$$4["aa"] = 13.7;
  hash$$4["at"] = 11.4;
  hash$$4["ac"] = 10.6;
  hash$$4["tg"] = 9.5;
  hash$$4["ta"] = 11.7;
  hash$$4["tt"] = 8.4;
  hash$$4["tc"] = 8.1;
  hash$$4["cg"] = 9;
  hash$$4["ca"] = 10.6;
  hash$$4["ct"] = 7.6;
  hash$$4["cc"] = 7.3;
  return hash$$4;
}
function _getSingleExtinctionCoefficients() {
  var hash$$5 = {};
  hash$$5["g"] = 11.5;
  hash$$5["a"] = 15.4;
  hash$$5["t"] = 8.7;
  hash$$5["c"] = 7.4;
  return hash$$5;
}
function _getBaseRunsReport(sequence$$45, minRunLength) {
  var report = "";
  var hasRun = false;
  var nucleotides = ["G", "A", "T", "C"];
  var i$$14 = 0;
  var v423 = i$$14 < nucleotides.length;
  for (;v423;) {
    introspect(JAM.policy.p26) {
      var v875 = nucleotides[i$$14]
    }
    if (JAM.call(_hasRunOfBases, null, [sequence$$45, v875, minRunLength], JAM.policy.p40)) {
      hasRun = true;
      var v876 = report + "Contains run of ";
      introspect(JAM.policy.p26) {
        var v877 = nucleotides[i$$14]
      }
      report = v876 + v877 + "'s; ";
    }
    i$$14 = i$$14 + 1;
    v423 = i$$14 < nucleotides.length;
  }
  if (hasRun) {
    return "Warning: " + report;
  } else {
    return "Pass";
  }
  return;
}
function _getDiNucleotideRunsReport(sequence$$46, minRunLength$$1) {
  var report$$1 = "";
  var hasRun$$1 = false;
  var diNucleotides = ["GA", "GT", "GC", "AG", "AT", "AC", "TG", "TA", "TC", "CG", "CA", "CT"];
  var i$$15 = 0;
  var v426 = i$$15 < diNucleotides.length;
  for (;v426;) {
    introspect(JAM.policy.p26) {
      var v880 = diNucleotides[i$$15]
    }
    if (JAM.call(_hasRunOfBases, null, [sequence$$46, v880, minRunLength$$1], JAM.policy.p40)) {
      hasRun$$1 = true;
      var v881 = report$$1 + "Contains run of ";
      introspect(JAM.policy.p26) {
        var v882 = diNucleotides[i$$15]
      }
      report$$1 = v881 + v882 + "'s; ";
    }
    i$$15 = i$$15 + 1;
    v426 = i$$15 < diNucleotides.length;
  }
  if (hasRun$$1) {
    return "Warning: " + report$$1;
  } else {
    return "Pass";
  }
  return;
}
function _hasRunOfBases(sequence$$47, base$$2, minRunLength$$2) {
  var basePattern$$1 = JAM.new(RegExp, ["(?:" + base$$2 + "){" + minRunLength$$2 + ",}", "gi"], JAM.policy.p41);
  if (JAM.call(sequence$$47.search, sequence$$47, [basePattern$$1], JAM.policy.p38) != -1) {
    return JAM.call(sequence$$47.match, sequence$$47, [basePattern$$1], JAM.policy.p38).length;
  } else {
    return 0;
  }
  return;
}
function _getSuitableLengthReport(sequence$$48, minSuitableLength, maxSuitableLength) {
  var report$$2 = "";
  var hasProblem = false;
  if (sequence$$48.length < minSuitableLength) {
    hasProblem = true;
    report$$2 = report$$2 + "Contains fewer than " + minSuitableLength + " bases; ";
  }
  if (sequence$$48.length > maxSuitableLength) {
    hasProblem = true;
    report$$2 = report$$2 + "Contains more than " + maxSuitableLength + " bases; ";
  }
  if (hasProblem) {
    return "Warning: " + report$$2;
  } else {
    return "Pass";
  }
  return;
}
function _getSuitableGCReport(sequence$$49, percentGCRange, minSuitableGC, maxSuitableGC) {
  var report$$3 = "";
  var hasProblem$$1 = false;
  var lowerCalculated;
  var upperCalculated;
  var rangePattern = JAM.new(RegExp, ["([d.]+)D+([d.]+)", "gi"], JAM.policy.p23);
  if (JAM.call(percentGCRange.search, percentGCRange, [rangePattern], JAM.policy.p38) != -1) {
    lowerCalculated = JAM.call(parseFloat, null, [$1], JAM.policy.p38);
    upperCalculated = JAM.call(parseFloat, null, [$2], JAM.policy.p38);
  } else {
    lowerCalculated = JAM.call(parseFloat, null, [percentGCRange], JAM.policy.p38);
    upperCalculated = JAM.call(parseFloat, null, [percentGCRange], JAM.policy.p38);
  }
  if (lowerCalculated < minSuitableGC) {
    hasProblem$$1 = true;
    report$$3 = report$$3 + "%GC is less than " + minSuitableGC + "; ";
  }
  if (upperCalculated > maxSuitableGC) {
    hasProblem$$1 = true;
    report$$3 = report$$3 + "%GC is greater than " + maxSuitableGC + "; ";
  }
  if (hasProblem$$1) {
    return "Warning: " + report$$3;
  } else {
    return "Pass";
  }
  return;
}
function _getSuitableLengthReport(sequence$$50, minSuitableLength$$1, maxSuitableLength$$1) {
  var report$$4 = "";
  var hasProblem$$2 = false;
  if (sequence$$50.length < minSuitableLength$$1) {
    hasProblem$$2 = true;
    report$$4 = report$$4 + "Contains fewer than " + minSuitableLength$$1 + " bases; ";
  }
  if (sequence$$50.length > maxSuitableLength$$1) {
    hasProblem$$2 = true;
    report$$4 = report$$4 + "Contains more than " + maxSuitableLength$$1 + " bases; ";
  }
  if (hasProblem$$2) {
    return "Warning: " + report$$4;
  } else {
    return "Pass";
  }
  return;
}
function _getSuitableTmReport(sequence$$51, range$$5, minSuitable, maxSuitable) {
  var report$$5 = "";
  var hasProblem$$3 = false;
  var lowerCalculated$$1;
  var upperCalculated$$1;
  var rangePattern$$1 = JAM.new(RegExp, ["([d.]+)D+([d.]+)", "gi"], JAM.policy.p23);
  if (JAM.call(range$$5.search, range$$5, [rangePattern$$1], JAM.policy.p38) != -1) {
    lowerCalculated$$1 = JAM.call(parseFloat, null, [$1], JAM.policy.p38);
    upperCalculated$$1 = JAM.call(parseFloat, null, [$2], JAM.policy.p38);
  } else {
    lowerCalculated$$1 = JAM.call(parseFloat, null, [range$$5], JAM.policy.p38);
    upperCalculated$$1 = JAM.call(parseFloat, null, [range$$5], JAM.policy.p38);
  }
  if (lowerCalculated$$1 < minSuitable) {
    hasProblem$$3 = true;
    report$$5 = report$$5 + "Tm is less than " + minSuitable + "; ";
  }
  if (upperCalculated$$1 > maxSuitable) {
    hasProblem$$3 = true;
    report$$5 = report$$5 + "Tm is greater than " + maxSuitable + "; ";
  }
  if (hasProblem$$3) {
    return "Warning: " + report$$5;
  } else {
    return "Pass";
  }
  return;
}
function _getSuitableThreePrimeGC(sequence$$52, minSuitable$$1, maxSuitable$$1) {
  var threePrimeEnd;
  var desiredThreePrimeEndSize = 5;
  var report$$6 = "";
  var gcCounts;
  var hasProblem$$4 = false;
  if (sequence$$52.length >= desiredThreePrimeEndSize) {
    threePrimeEnd = JAM.call(sequence$$52.substr, sequence$$52, [sequence$$52.length - desiredThreePrimeEndSize, 5], JAM.policy.p41);
  } else {
    threePrimeEnd = sequence$$52;
  }
  gcCounts = JAM.call(_getBaseCount, null, [threePrimeEnd, "g"], JAM.policy.p41) + JAM.call(_getBaseCount, null, [threePrimeEnd, "c"], JAM.policy.p41);
  if (gcCounts < minSuitable$$1) {
    hasProblem$$4 = true;
    report$$6 = report$$6 + "There are less than " + minSuitable$$1 + " G's or C's in the last " + threePrimeEnd.length + " bases; ";
  }
  if (gcCounts > maxSuitable$$1) {
    hasProblem$$4 = true;
    report$$6 = report$$6 + "There are more than " + maxSuitable$$1 + " G's or C's in the last " + threePrimeEnd.length + " bases; ";
  }
  if (hasProblem$$4) {
    return "Warning: " + report$$6;
  } else {
    return "Pass";
  }
  return;
}
function _getSelfComplementarityReport(sequence$$53, maxContig, maxPercentIdent) {
  var matchScore = 1;
  var mismatchScore = -1;
  var gapPenalty = 99;
  var beginGapPenalty = 0;
  var endGapPenalty = 0;
  var returnHash = {};
  returnHash["report"] = "";
  returnHash["upper"] = "";
  returnHash["lower"] = "";
  returnHash["divider"] = "";
  var report$$7 = "";
  var hasProblem$$5 = false;
  var sequenceLength = sequence$$53.length;
  var matrix = JAM.new(Complementarity, [], JAM.policy.p39);
  JAM.call(matrix.setMatch, matrix, [matchScore], JAM.policy.p38);
  JAM.call(matrix.setMismatch, matrix, [mismatchScore], JAM.policy.p38);
  var scoreSet = JAM.new(ScoreSet, [], JAM.policy.p39);
  JAM.call(scoreSet.setScoreSetParam, scoreSet, [matrix, gapPenalty, beginGapPenalty, endGapPenalty], JAM.policy.p40);
  var rev = JAM.call(reverse, null, [sequence$$53], JAM.policy.p38);
  sequence$$53 = JAM.call(sequence$$53.match, sequence$$53, [/./g], JAM.policy.p38);
  rev = JAM.call(rev.match, rev, [/./g], JAM.policy.p38);
  alignment = JAM.new(AlignPairQuad, [], JAM.policy.p39);
  JAM.call(alignment.initializeMatrix, alignment, [sequence$$53, rev, scoreSet], JAM.policy.p40);
  JAM.call(alignment.fillMatrix, alignment, [], JAM.policy.p39);
  JAM.call(alignment.align, alignment, [], JAM.policy.p39);
  var v456 = JAM.call(alignment.getAlignedM, alignment, [], JAM.policy.p39);
  var seqAligned = JAM.call(v456.replace, v456, [/\-/g, " "], JAM.policy.p41);
  var v457 = JAM.call(alignment.getAlignedN, alignment, [], JAM.policy.p39);
  var revAligned = JAM.call(v457.replace, v457, [/\-/g, " "], JAM.policy.p41);
  var score = alignment.score;
  var divider = JAM.new(Array, [], JAM.policy.p39);
  var maxContiguous = 0;
  var totalMatches = 0;
  var contiguous = 0;
  var i$$16 = 0;
  var v460 = i$$16 < seqAligned.length;
  for (;v460;) {
    if (JAM.call(scoreSet.getScore, scoreSet, [JAM.call(seqAligned.charAt, seqAligned, [i$$16], JAM.policy.p38), JAM.call(revAligned.charAt, revAligned, [i$$16], JAM.policy.p38)], JAM.policy.p40) == matchScore) {
      JAM.call(divider.push, divider, ["|"], JAM.policy.p22);
      contiguous = contiguous + 1;
      totalMatches = totalMatches + 1;
    } else {
      JAM.call(divider.push, divider, [" "], JAM.policy.p22);
      contiguous = 0;
    }
    if (contiguous > maxContiguous) {
      maxContiguous = contiguous;
    }
    i$$16 = i$$16 + 1;
    v460 = i$$16 < seqAligned.length;
  }
  if (maxContiguous > maxContig) {
    hasProblem$$5 = true;
    report$$7 = report$$7 + "There are more than " + maxContig + " self-annealing bases in a row; ";
  }
  if (totalMatches / sequenceLength * 100 > maxPercentIdent) {
    hasProblem$$5 = true;
    report$$7 = report$$7 + "More than " + maxPercentIdent + " percent of the bases are self-annealing; ";
  }
  if (hasProblem$$5) {
    report$$7 = "Warning: " + report$$7;
  } else {
    report$$7 = "Pass";
  }
  returnHash["report"] = report$$7;
  returnHash["upper"] = seqAligned;
  returnHash["lower"] = revAligned;
  var v465 = returnHash;
  var v1557 = JAM.call(divider.join, divider, [""], JAM.policy.p22);
  v465["divider"] = v1557;
  return returnHash;
}
function _getHairpinReport(sequence$$54, maxContig$$1, maxPercentIdent$$1) {
  var upper = sequence$$54;
  upper = JAM.call(upper.match, upper, [/./g], JAM.policy.p38);
  var loop = "";
  var lower = JAM.new(Array, [], JAM.policy.p39);
  var returnHash$$1 = {};
  returnHash$$1["report"] = "";
  returnHash$$1["upper"] = "";
  returnHash$$1["lower"] = "";
  returnHash$$1["divider"] = "";
  var topScore = 0;
  var score$$1;
  var u;
  var l;
  var topScoreUpper = sequence$$54;
  var topScoreLower = "";
  var topScoreLoop = "";
  var matchScore$$1 = 1;
  var mismatchScore$$1 = -1;
  var gapPenalty$$1 = 99;
  var beginGapPenalty$$1 = 0;
  var endGapPenalty$$1 = 0;
  var report$$8 = "";
  var hasProblem$$6 = false;
  var sequenceLength$$1 = sequence$$54.length;
  var matrix$$1 = JAM.new(Complementarity, [], JAM.policy.p39);
  JAM.call(matrix$$1.setMatch, matrix$$1, [matchScore$$1], JAM.policy.p38);
  JAM.call(matrix$$1.setMismatch, matrix$$1, [mismatchScore$$1], JAM.policy.p38);
  var scoreSet$$1 = JAM.new(ScoreSet, [], JAM.policy.p39);
  JAM.call(scoreSet$$1.setScoreSetParam, scoreSet$$1, [matrix$$1, gapPenalty$$1, beginGapPenalty$$1, endGapPenalty$$1], JAM.policy.p40);
  var v473 = upper.length > 0;
  for (;v473;) {
    score$$1 = 0;
    if (loop == "") {
      loop = JAM.call(upper.pop, upper, [], JAM.policy.p39);
    } else {
      JAM.call(lower.push, lower, [loop], JAM.policy.p38);
      loop = "";
    }
    u = upper.length - 1;
    l = lower.length - 1;
    var v913 = u >= 0;
    if (v913) {
      v913 = l >= 0;
    }
    var v471 = v913;
    for (;v471;) {
      var v469 = score$$1;
      introspect(JAM.policy.p26) {
        var v914 = upper[u]
      }
      introspect(JAM.policy.p26) {
        var v915 = lower[l]
      }
      score$$1 = v469 + JAM.call(scoreSet$$1.getScore, scoreSet$$1, [v914, v915], JAM.policy.p40);
      u = u - 1;
      l = l - 1;
      var v916 = u >= 0;
      if (v916) {
        v916 = l >= 0;
      }
      v471 = v916;
    }
    if (score$$1 > topScore) {
      topScore = score$$1;
      topScoreUpper = JAM.call(upper.join, upper, [""], JAM.policy.p22);
      topScoreLower = JAM.call(lower.join, lower, [""], JAM.policy.p22);
      topScoreLoop = loop;
    }
    v473 = upper.length > 0;
  }
  var upperLowerDiff = topScoreUpper.length - topScoreLower.length;
  if (upperLowerDiff > 0) {
    var i$$17 = 0;
    var v476 = i$$17 < upperLowerDiff;
    for (;v476;) {
      topScoreLower = " " + topScoreLower;
      i$$17 = i$$17 + 1;
      v476 = i$$17 < upperLowerDiff;
    }
  } else {
    if (upperLowerDiff < 0) {
      i$$17 = upperLowerDiff;
      var v477 = i$$17 < 0;
      for (;v477;) {
        topScoreUpper = " " + topScoreUpper;
        i$$17 = i$$17 + 1;
        v477 = i$$17 < 0;
      }
    }
  }
  var maxContiguous$$1 = 0;
  var totalMatches$$1 = 0;
  var contiguous$$1 = 0;
  var divider$$1 = JAM.new(Array, [], JAM.policy.p39);
  i$$17 = 0;
  var v482 = i$$17 < topScoreUpper.length;
  for (;v482;) {
    if (JAM.call(scoreSet$$1.getScore, scoreSet$$1, [JAM.call(topScoreUpper.charAt, topScoreUpper, [i$$17], JAM.policy.p38), JAM.call(topScoreLower.charAt, topScoreLower, [i$$17], JAM.policy.p38)], JAM.policy.p40) == matchScore$$1) {
      JAM.call(divider$$1.push, divider$$1, ["|"], JAM.policy.p22);
      contiguous$$1 = contiguous$$1 + 1;
      totalMatches$$1 = totalMatches$$1 + 1;
    } else {
      JAM.call(divider$$1.push, divider$$1, [" "], JAM.policy.p22);
      contiguous$$1 = 0;
    }
    if (contiguous$$1 > maxContiguous$$1) {
      maxContiguous$$1 = contiguous$$1;
    }
    i$$17 = i$$17 + 1;
    v482 = i$$17 < topScoreUpper.length;
  }
  if (maxContiguous$$1 > maxContig$$1) {
    hasProblem$$6 = true;
    report$$8 = report$$8 + "There are more than " + maxContig$$1 + " hairpin bases in a row; ";
  }
  if (totalMatches$$1 / sequenceLength$$1 * 100 > maxPercentIdent$$1) {
    hasProblem$$6 = true;
    report$$8 = report$$8 + "More than " + maxPercentIdent$$1 + " percent of the bases are in a hairpin; ";
  }
  if (hasProblem$$6) {
    report$$8 = "Warning: " + report$$8;
  } else {
    report$$8 = "Pass";
  }
  if (topScoreLoop == "") {
    topScoreLoop = ")";
  }
  returnHash$$1["report"] = report$$8;
  returnHash$$1["upper"] = topScoreUpper;
  returnHash$$1["divider"] = JAM.call(divider$$1.join, divider$$1, [""], JAM.policy.p22) + topScoreLoop;
  returnHash$$1["lower"] = topScoreLower;
  return returnHash$$1;
}
function getScore(r1$$1, r2) {
  var v489 = this.scoringMatrix;
  return JAM.call(v489.scoringMatrix_getScore, v489, [r1$$1, r2], JAM.policy.p40);
}
function setScoreSetParam(scoringMatrix, gapPenalty$$2, beginGapPenalty$$2, endGapPenalty$$2) {
  this.scoringMatrix = scoringMatrix;
  this.gap = gapPenalty$$2;
  this.beginGap = beginGapPenalty$$2;
  this.endGap = endGapPenalty$$2;
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
  r1$$2 = JAM.call(r1$$2.toLowerCase, r1$$2, [], JAM.policy.p39);
  r2$$1 = JAM.call(r2$$1.toLowerCase, r2$$1, [], JAM.policy.p39);
  var v1195 = r1$$2 == "g";
  if (v1195) {
    v1195 = r2$$1 == "c";
  }
  var v925 = v1195;
  if (!v925) {
    var v1196 = r2$$1 == "g";
    if (v1196) {
      v1196 = r1$$2 == "c";
    }
    v925 = v1196;
  }
  if (v925) {
    return this.match;
  } else {
    var v1198 = r1$$2 == "a";
    if (v1198) {
      v1198 = r2$$1 == "t";
    }
    var v926 = v1198;
    if (!v926) {
      var v1199 = r2$$1 == "a";
      if (v1199) {
        v1199 = r1$$2 == "t";
      }
      v926 = v1199;
    }
    if (v926) {
      return this.match;
    } else {
      return this.mismatch;
    }
  }
  return;
}
function ScoringMatrix() {
  return;
}
function setMismatch(mismatchScore$$2) {
  this.mismatch = mismatchScore$$2;
  return;
}
function setMatch(matchScore$$2) {
  this.match = matchScore$$2;
  return;
}
function Complementarity() {
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
  var v1558 = JAM.new(Array, [this.M.length + 1], JAM.policy.p38);
  this.nodes = v1558;
  var i$$18 = 0;
  var v498 = i$$18 < this.nodes.length;
  for (;v498;) {
    var v493 = this.nodes;
    var v494 = i$$18;
    var v1559 = JAM.new(Array, [this.N.length + 1], JAM.policy.p38);
    introspect(JAM.policy.p27) {
      v493[v494] = v1559;
    }
    var j$$10 = 0;
    var v1360 = this.nodes;
    introspect(JAM.policy.p26) {
      var v1204 = v1360[i$$18]
    }
    var v497 = j$$10 < v1204.length;
    for (;v497;) {
      var v931 = this.nodes;
      introspect(JAM.policy.p26) {
        var v495 = v931[i$$18]
      }
      var v496 = j$$10;
      var v1560 = JAM.new(Node, [], JAM.policy.p39);
      introspect(JAM.policy.p27) {
        v495[v496] = v1560;
      }
      j$$10 = j$$10 + 1;
      var v1361 = this.nodes;
      introspect(JAM.policy.p26) {
        var v1205 = v1361[i$$18]
      }
      v497 = j$$10 < v1205.length;
    }
    i$$18 = i$$18 + 1;
    v498 = i$$18 < this.nodes.length;
  }
  var v1207 = this.nodes;
  introspect(JAM.policy.p26) {
    var v934 = v1207[0]
  }
  introspect(JAM.policy.p26) {
    var v499 = v934[0]
  }
  v499.value = 0;
  i$$18 = 1;
  var v505 = i$$18 < this.nodes.length;
  for (;v505;) {
    if (this.scoreSet.useBeginGapLeft) {
      var v1209 = this.nodes;
      introspect(JAM.policy.p26) {
        var v937 = v1209[i$$18]
      }
      introspect(JAM.policy.p26) {
        var v500 = v937[0]
      }
      var v1444 = this.nodes;
      var v1445 = i$$18 - 1;
      introspect(JAM.policy.p26) {
        var v1362 = v1444[v1445]
      }
      introspect(JAM.policy.p26) {
        var v1210 = v1362[0]
      }
      v500.value = v1210.value - this.scoreSet.beginGap;
    } else {
      var v1212 = this.nodes;
      introspect(JAM.policy.p26) {
        var v940 = v1212[i$$18]
      }
      introspect(JAM.policy.p26) {
        var v501 = v940[0]
      }
      var v1446 = this.nodes;
      var v1447 = i$$18 - 1;
      introspect(JAM.policy.p26) {
        var v1363 = v1446[v1447]
      }
      introspect(JAM.policy.p26) {
        var v1213 = v1363[0]
      }
      v501.value = v1213.value - this.scoreSet.gap;
    }
    var v1215 = this.nodes;
    introspect(JAM.policy.p26) {
      var v943 = v1215[i$$18]
    }
    introspect(JAM.policy.p26) {
      var v503 = v943[0]
    }
    v503.tracebackI = i$$18 - 1;
    var v1216 = this.nodes;
    introspect(JAM.policy.p26) {
      var v944 = v1216[i$$18]
    }
    introspect(JAM.policy.p26) {
      var v504 = v944[0]
    }
    v504.tracebackJ = 0;
    i$$18 = i$$18 + 1;
    v505 = i$$18 < this.nodes.length;
  }
  j$$10 = 1;
  var v1364 = this.nodes;
  introspect(JAM.policy.p26) {
    var v1218 = v1364[0]
  }
  var v511 = j$$10 < v1218.length;
  for (;v511;) {
    if (this.scoreSet.useBeginGapTop) {
      var v1219 = this.nodes;
      introspect(JAM.policy.p26) {
        var v948 = v1219[0]
      }
      introspect(JAM.policy.p26) {
        var v506 = v948[j$$10]
      }
      var v1448 = this.nodes;
      introspect(JAM.policy.p26) {
        var v1365 = v1448[0]
      }
      var v1366 = j$$10 - 1;
      introspect(JAM.policy.p26) {
        var v1220 = v1365[v1366]
      }
      v506.value = v1220.value - this.scoreSet.beginGap;
    } else {
      var v1222 = this.nodes;
      introspect(JAM.policy.p26) {
        var v951 = v1222[0]
      }
      introspect(JAM.policy.p26) {
        var v507 = v951[j$$10]
      }
      var v1449 = this.nodes;
      introspect(JAM.policy.p26) {
        var v1367 = v1449[0]
      }
      var v1368 = j$$10 - 1;
      introspect(JAM.policy.p26) {
        var v1223 = v1367[v1368]
      }
      v507.value = v1223.value - this.scoreSet.gap;
    }
    var v1225 = this.nodes;
    introspect(JAM.policy.p26) {
      var v954 = v1225[0]
    }
    introspect(JAM.policy.p26) {
      var v509 = v954[j$$10]
    }
    v509.tracebackI = 0;
    var v1226 = this.nodes;
    introspect(JAM.policy.p26) {
      var v955 = v1226[0]
    }
    introspect(JAM.policy.p26) {
      var v510 = v955[j$$10]
    }
    v510.tracebackJ = j$$10 - 1;
    j$$10 = j$$10 + 1;
    var v1369 = this.nodes;
    introspect(JAM.policy.p26) {
      var v1227 = v1369[0]
    }
    v511 = j$$10 < v1227.length;
  }
  return;
}
function dumpMatrix() {
  var v512 = outputWindow.document;
  var v957 = "Dynamic programming matrix i=" + this.nodes.length + " and j=";
  var v1371 = this.nodes;
  introspect(JAM.policy.p26) {
    var v1229 = v1371[0]
  }
  JAM.call(v512.write, v512, [v957 + v1229.length], JAM.policy.p38);
  var v514 = outputWindow.document;
  JAM.call(v514.write, v514, ["\n"], JAM.policy.p22);
  var i$$19 = 0;
  var v525 = i$$19 < this.nodes.length;
  for (;v525;) {
    var j$$11 = 0;
    var v1372 = this.nodes;
    introspect(JAM.policy.p26) {
      var v1231 = v1372[i$$19]
    }
    var v523 = j$$11 < v1231.length;
    for (;v523;) {
      var v1232 = this.nodes;
      introspect(JAM.policy.p26) {
        var v961 = v1232[i$$19]
      }
      introspect(JAM.policy.p26) {
        var v515 = v961[j$$11]
      }
      var traceI = v515.tracebackI;
      var v1233 = this.nodes;
      introspect(JAM.policy.p26) {
        var v962 = v1233[i$$19]
      }
      introspect(JAM.policy.p26) {
        var v516 = v962[j$$11]
      }
      var traceJ = v516.tracebackJ;
      if (traceI == undefined) {
        traceI = "u";
      }
      if (traceJ == undefined) {
        traceJ = "u";
      }
      var v519 = "(" + i$$19 + "," + j$$11 + ")[" + traceI + "," + traceJ + "]=";
      var v1374 = this.nodes;
      introspect(JAM.policy.p26) {
        var v1235 = v1374[i$$19]
      }
      introspect(JAM.policy.p26) {
        var v964 = v1235[j$$11]
      }
      var output = v519 + v964.value;
      var v521 = outputWindow.document;
      JAM.call(v521.write, v521, [JAM.call(rightNum, null, [output, "", 20, " "], JAM.policy.p41)], JAM.policy.p38);
      j$$11 = j$$11 + 1;
      var v1375 = this.nodes;
      introspect(JAM.policy.p26) {
        var v1236 = v1375[i$$19]
      }
      v523 = j$$11 < v1236.length;
    }
    var v524 = outputWindow.document;
    JAM.call(v524.write, v524, ["\n"], JAM.policy.p22);
    i$$19 = i$$19 + 1;
    v525 = i$$19 < this.nodes.length;
  }
  var v526 = outputWindow.document;
  JAM.call(v526.write, v526, ["\n"], JAM.policy.p22);
  return;
}
function fillMatrix() {
  var i$$20 = 1;
  var v572 = i$$20 < this.nodes.length;
  for (;v572;) {
    var j$$12 = 1;
    var v1376 = this.nodes;
    introspect(JAM.policy.p26) {
      var v1239 = v1376[0]
    }
    var v571 = j$$12 < v1239.length;
    for (;v571;) {
      var a$$1;
      var b;
      var c$$1;
      var v969 = i$$20 == this.nodes.length - 1;
      if (v969) {
        var v1475 = this.nodes;
        introspect(JAM.policy.p26) {
          var v1453 = v1475[0]
        }
        v969 = j$$12 == v1453.length - 1;
      }
      if (v969) {
        if (this.scoreSet.useEndGapRight) {
          var v1379 = this.nodes;
          var v1380 = i$$20 - 1;
          introspect(JAM.policy.p26) {
            var v1242 = v1379[v1380]
          }
          introspect(JAM.policy.p26) {
            var v971 = v1242[j$$12]
          }
          a$$1 = v971.value - this.scoreSet.endGap;
        } else {
          var v1381 = this.nodes;
          var v1382 = i$$20 - 1;
          introspect(JAM.policy.p26) {
            var v1243 = v1381[v1382]
          }
          introspect(JAM.policy.p26) {
            var v973 = v1243[j$$12]
          }
          a$$1 = v973.value - this.scoreSet.gap;
        }
        if (this.scoreSet.useEndGapBottom) {
          var v1383 = this.nodes;
          introspect(JAM.policy.p26) {
            var v1244 = v1383[i$$20]
          }
          var v1245 = j$$12 - 1;
          introspect(JAM.policy.p26) {
            var v976 = v1244[v1245]
          }
          b = v976.value - this.scoreSet.endGap;
        } else {
          var v1384 = this.nodes;
          introspect(JAM.policy.p26) {
            var v1246 = v1384[i$$20]
          }
          var v1247 = j$$12 - 1;
          introspect(JAM.policy.p26) {
            var v978 = v1246[v1247]
          }
          b = v978.value - this.scoreSet.gap;
        }
      } else {
        if (i$$20 == this.nodes.length - 1) {
          var v1386 = this.nodes;
          var v1387 = i$$20 - 1;
          introspect(JAM.policy.p26) {
            var v1249 = v1386[v1387]
          }
          introspect(JAM.policy.p26) {
            var v981 = v1249[j$$12]
          }
          a$$1 = v981.value - this.scoreSet.gap;
          if (this.scoreSet.useEndGapBottom) {
            var v1388 = this.nodes;
            introspect(JAM.policy.p26) {
              var v1250 = v1388[i$$20]
            }
            var v1251 = j$$12 - 1;
            introspect(JAM.policy.p26) {
              var v984 = v1250[v1251]
            }
            b = v984.value - this.scoreSet.endGap;
          } else {
            var v1389 = this.nodes;
            introspect(JAM.policy.p26) {
              var v1252 = v1389[i$$20]
            }
            var v1253 = j$$12 - 1;
            introspect(JAM.policy.p26) {
              var v986 = v1252[v1253]
            }
            b = v986.value - this.scoreSet.gap;
          }
        } else {
          var v1454 = this.nodes;
          introspect(JAM.policy.p26) {
            var v1390 = v1454[0]
          }
          if (j$$12 == v1390.length - 1) {
            if (this.scoreSet.useEndGapRight) {
              var v1391 = this.nodes;
              var v1392 = i$$20 - 1;
              introspect(JAM.policy.p26) {
                var v1255 = v1391[v1392]
              }
              introspect(JAM.policy.p26) {
                var v990 = v1255[j$$12]
              }
              a$$1 = v990.value - this.scoreSet.endGap;
            } else {
              var v1393 = this.nodes;
              var v1394 = i$$20 - 1;
              introspect(JAM.policy.p26) {
                var v1256 = v1393[v1394]
              }
              introspect(JAM.policy.p26) {
                var v992 = v1256[j$$12]
              }
              a$$1 = v992.value - this.scoreSet.gap;
            }
            var v1395 = this.nodes;
            introspect(JAM.policy.p26) {
              var v1257 = v1395[i$$20]
            }
            var v1258 = j$$12 - 1;
            introspect(JAM.policy.p26) {
              var v994 = v1257[v1258]
            }
            b = v994.value - this.scoreSet.gap;
          } else {
            var v1396 = this.nodes;
            var v1397 = i$$20 - 1;
            introspect(JAM.policy.p26) {
              var v1259 = v1396[v1397]
            }
            introspect(JAM.policy.p26) {
              var v996 = v1259[j$$12]
            }
            a$$1 = v996.value - this.scoreSet.gap;
            var v1398 = this.nodes;
            introspect(JAM.policy.p26) {
              var v1260 = v1398[i$$20]
            }
            var v1261 = j$$12 - 1;
            introspect(JAM.policy.p26) {
              var v998 = v1260[v1261]
            }
            b = v998.value - this.scoreSet.gap;
          }
        }
      }
      var v1399 = this.nodes;
      var v1400 = i$$20 - 1;
      introspect(JAM.policy.p26) {
        var v1262 = v1399[v1400]
      }
      var v1263 = j$$12 - 1;
      introspect(JAM.policy.p26) {
        var v1000 = v1262[v1263]
      }
      var v558 = v1000.value;
      var v1001 = this.scoreSet;
      var v1264 = this.M;
      var v1265 = i$$20 - 1;
      introspect(JAM.policy.p26) {
        var v1002 = v1264[v1265]
      }
      var v1266 = this.N;
      var v1267 = j$$12 - 1;
      introspect(JAM.policy.p26) {
        var v1003 = v1266[v1267]
      }
      c$$1 = v558 + JAM.call(v1001.getScore, v1001, [v1002, v1003], JAM.policy.p40);
      var v1004 = a$$1 >= b;
      if (v1004) {
        v1004 = a$$1 >= c$$1;
      }
      if (v1004) {
        var v1268 = this.nodes;
        introspect(JAM.policy.p26) {
          var v1005 = v1268[i$$20]
        }
        introspect(JAM.policy.p26) {
          var v560 = v1005[j$$12]
        }
        v560.value = a$$1;
        var v1269 = this.nodes;
        introspect(JAM.policy.p26) {
          var v1006 = v1269[i$$20]
        }
        introspect(JAM.policy.p26) {
          var v561 = v1006[j$$12]
        }
        v561.tracebackI = i$$20 - 1;
        var v1270 = this.nodes;
        introspect(JAM.policy.p26) {
          var v1007 = v1270[i$$20]
        }
        introspect(JAM.policy.p26) {
          var v562 = v1007[j$$12]
        }
        v562.tracebackJ = j$$12;
      } else {
        var v1008 = b >= c$$1;
        if (v1008) {
          v1008 = b >= a$$1;
        }
        if (v1008) {
          var v1271 = this.nodes;
          introspect(JAM.policy.p26) {
            var v1009 = v1271[i$$20]
          }
          introspect(JAM.policy.p26) {
            var v563 = v1009[j$$12]
          }
          v563.value = b;
          var v1272 = this.nodes;
          introspect(JAM.policy.p26) {
            var v1010 = v1272[i$$20]
          }
          introspect(JAM.policy.p26) {
            var v564 = v1010[j$$12]
          }
          v564.tracebackI = i$$20;
          var v1273 = this.nodes;
          introspect(JAM.policy.p26) {
            var v1011 = v1273[i$$20]
          }
          introspect(JAM.policy.p26) {
            var v565 = v1011[j$$12]
          }
          v565.tracebackJ = j$$12 - 1;
        } else {
          var v1274 = this.nodes;
          introspect(JAM.policy.p26) {
            var v1012 = v1274[i$$20]
          }
          introspect(JAM.policy.p26) {
            var v566 = v1012[j$$12]
          }
          v566.value = c$$1;
          var v1275 = this.nodes;
          introspect(JAM.policy.p26) {
            var v1013 = v1275[i$$20]
          }
          introspect(JAM.policy.p26) {
            var v567 = v1013[j$$12]
          }
          v567.tracebackI = i$$20 - 1;
          var v1276 = this.nodes;
          introspect(JAM.policy.p26) {
            var v1014 = v1276[i$$20]
          }
          introspect(JAM.policy.p26) {
            var v568 = v1014[j$$12]
          }
          v568.tracebackJ = j$$12 - 1;
        }
      }
      j$$12 = j$$12 + 1;
      var v1401 = this.nodes;
      introspect(JAM.policy.p26) {
        var v1277 = v1401[0]
      }
      v571 = j$$12 < v1277.length;
    }
    i$$20 = i$$20 + 1;
    v572 = i$$20 < this.nodes.length;
  }
  var v1279 = this.nodes;
  var v1280 = this.nodes.length - 1;
  introspect(JAM.policy.p26) {
    var v1017 = v1279[v1280]
  }
  var v1456 = this.nodes;
  introspect(JAM.policy.p26) {
    var v1403 = v1456[0]
  }
  var v1018 = v1403.length - 1;
  introspect(JAM.policy.p26) {
    var v573 = v1017[v1018]
  }
  this.score = v573.value;
  return;
}
function alignQuad() {
  var v1561 = JAM.new(Array, [], JAM.policy.p39);
  this.alignedM = v1561;
  var v1562 = JAM.new(Array, [], JAM.policy.p39);
  this.alignedN = v1562;
  var currentI = this.nodes.length - 1;
  var v1282 = this.nodes;
  introspect(JAM.policy.p26) {
    var v1020 = v1282[0]
  }
  var currentJ = v1020.length - 1;
  var v1021 = this.nodes;
  var v1022 = this.nodes.length - 1;
  introspect(JAM.policy.p26) {
    var v576 = v1021[v1022]
  }
  var v1405 = this.nodes;
  introspect(JAM.policy.p26) {
    var v1284 = v1405[0]
  }
  var v577 = v1284.length - 1;
  introspect(JAM.policy.p26) {
    var currentNode = v576[v577]
  }
  var v1024 = currentNode.tracebackI != undefined;
  if (v1024) {
    v1024 = currentNode.tracebackJ != undefined;
  }
  var v592 = v1024;
  for (;v592;) {
    var v1025 = currentNode.tracebackI == currentI - 1;
    if (v1025) {
      v1025 = currentNode.tracebackJ == currentJ - 1;
    }
    if (v1025) {
      var v578 = this.alignedM;
      var v1026 = this.M;
      JAM.call(v578.push, v578, [JAM.call(v1026.pop, v1026, [], JAM.policy.p39)], JAM.policy.p38);
      var v580 = this.alignedN;
      var v1027 = this.N;
      JAM.call(v580.push, v580, [JAM.call(v1027.pop, v1027, [], JAM.policy.p39)], JAM.policy.p38);
    } else {
      if (currentNode.tracebackJ == currentJ - 1) {
        var v582 = this.alignedM;
        JAM.call(v582.push, v582, ["-"], JAM.policy.p22);
        var v583 = this.alignedN;
        var v1030 = this.N;
        JAM.call(v583.push, v583, [JAM.call(v1030.pop, v1030, [], JAM.policy.p39)], JAM.policy.p38);
      } else {
        var v585 = this.alignedM;
        var v1031 = this.M;
        JAM.call(v585.push, v585, [JAM.call(v1031.pop, v1031, [], JAM.policy.p39)], JAM.policy.p38);
        var v587 = this.alignedN;
        JAM.call(v587.push, v587, ["-"], JAM.policy.p22);
      }
    }
    currentI = currentNode.tracebackI;
    currentJ = currentNode.tracebackJ;
    var v1032 = this.nodes;
    var v1033 = currentNode.tracebackI;
    introspect(JAM.policy.p26) {
      var v590 = v1032[v1033]
    }
    var v591 = currentNode.tracebackJ;
    introspect(JAM.policy.p26) {
      currentNode = v590[v591];
    }
    var v1034 = currentNode.tracebackI != undefined;
    if (v1034) {
      v1034 = currentNode.tracebackJ != undefined;
    }
    v592 = v1034;
  }
  var v593 = this.alignedM;
  var v1563 = JAM.call(v593.reverse, v593, [], JAM.policy.p39);
  this.alignedM = v1563;
  var v594 = this.alignedN;
  var v1564 = JAM.call(v594.reverse, v594, [], JAM.policy.p39);
  this.alignedN = v1564;
  return;
}
function getAlignedM() {
  var v595 = this.alignedM;
  return JAM.call(v595.join, v595, [""], JAM.policy.p22);
}
function getAlignedN() {
  var v596 = this.alignedN;
  return JAM.call(v596.join, v596, [""], JAM.policy.p22);
}
function AlignPairQuad() {
  return;
}
JAM.new(ScoreSet, [], JAM.policy.p39);
ScoreSet.prototype.getScore = getScore;
ScoreSet.prototype.setScoreSetParam = setScoreSetParam;
JAM.new(ScoringMatrix, [], JAM.policy.p39);
ScoringMatrix.prototype.scoringMatrix_getScore = scoringMatrix_getScore;
var v600 = Complementarity;
var v1565 = JAM.new(ScoringMatrix, [], JAM.policy.p39);
v600.prototype = v1565;
Complementarity.prototype.setMismatch = setMismatch;
Complementarity.prototype.setMatch = setMatch;
JAM.new(AlignPairQuad, [], JAM.policy.p39);
AlignPairQuad.prototype.initializeMatrix = initializeMatrix;
AlignPairQuad.prototype.fillMatrix = fillMatrix;
AlignPairQuad.prototype.align = alignQuad;
AlignPairQuad.prototype.getAlignedM = getAlignedM;
AlignPairQuad.prototype.getAlignedN = getAlignedN;
AlignPairQuad.prototype.dumpMatrix = dumpMatrix;
JAM.set(document, "onload", v2);
JAM.set(JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p22), "onclick", v3);
JAM.set(JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p22), "onclick", v4)
