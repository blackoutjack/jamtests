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
    pcrProducts(document);
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
  sequence = JAM.call(sequence.replace, sequence, [/(.{60})/g, v0], JAM.policy.p27);
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
    introspect(JAM.policy.p26) {
      var v808 = arrayOfTitles[i$$1]
    }
    var v585 = JAM.call(v808.search, v808, [/\S/], JAM.policy.p29) == -1;
    if (!v585) {
      introspect(JAM.policy.p26) {
        var v809 = arrayOfSequences[i$$1]
      }
      v585 = JAM.call(v809.search, v809, [/\S/], JAM.policy.p29) == -1;
    }
    var v342 = v585;
    if (!v342) {
      introspect(JAM.policy.p26) {
        var v720 = arrayOfSequences[i$$1]
      }
      v342 = v720.length != lengthOfAlign;
    }
    if (v342) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1 = i$$1 + 1;
    v15 = i$$1 < arrayOfTitles.length;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v810 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p29) == -1;
  if (!v810) {
    v810 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p29) == -1;
  }
  var v721 = v810;
  if (!v721) {
    v721 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p29) == -1;
  }
  var v588 = v721;
  if (!v588) {
    v588 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p29) == -1;
  }
  var v344 = v588;
  if (!v344) {
    v344 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p29) == -1;
  }
  if (v344) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v591 = formElement.value;
  if (JAM.call(v591.search, v591, [/\S/], JAM.policy.p29) == -1) {
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
    introspect(JAM.policy.p26) {
      var v592 = arrayOfPatterns[z$$2]
    }
    if (JAM.call(v592.search, v592, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p29) == -1) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    introspect(JAM.policy.p26) {
      var v593 = arrayOfPatterns[z$$2]
    }
    if (moreExpressionCheck(v593) == false) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    v20 = z$$2 < arrayOfPatterns.length;
  }
  var geneticCodeMatchResult = new Array(arrayOfPatterns.length);
  var geneticCodeMatchExp = new Array(arrayOfPatterns.length);
  var j = 0;
  var v29 = j < arrayOfPatterns.length;
  for (;v29;) {
    var v23 = geneticCodeMatchExp;
    var v24 = j;
    introspect(JAM.policy.p26) {
      var v724 = arrayOfPatterns[j]
    }
    var v351 = JAM.call(v724.match, v724, [/\/.+\//], JAM.policy.p29) + "gi";
    if (JAM.isEval(eval)) {
      var v1047 = eval("introspect(JAM.policy.pFull) { " + v351 + " }")
    } else {
      var v1047 = JAM.call(eval, null, [v351])
    }
    introspect(JAM.policy.p13) {
      v23[v24] = v1047;
    }
    var v25 = geneticCodeMatchResult;
    var v26 = j;
    introspect(JAM.policy.p26) {
      var v595 = arrayOfPatterns[j]
    }
    var v1048 = JAM.call(v595.match, v595, [/=[a-zA-Z\*]/], JAM.policy.p29).toString();
    introspect(JAM.policy.p13) {
      v25[v26] = v1048;
    }
    var v27 = geneticCodeMatchResult;
    var v28 = j;
    introspect(JAM.policy.p26) {
      var v353 = geneticCodeMatchResult[j]
    }
    var v1049 = JAM.call(v353.replace, v353, [/=/g, ""], JAM.policy.p27);
    introspect(JAM.policy.p13) {
      v27[v28] = v1049;
    }
    j = j + 1;
    v29 = j < arrayOfPatterns.length;
  }
  var i$$2 = 0;
  var v36 = i$$2 <= testSequence.length - 3;
  for (;v36;) {
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, i$$2 + 3], JAM.policy.p27);
    j = 0;
    var v34 = j < geneticCodeMatchExp.length;
    for (;v34;) {
      introspect(JAM.policy.p26) {
        var v597 = geneticCodeMatchExp[j]
      }
      if (JAM.call(codon.search, codon, [v597], JAM.policy.p40) != -1) {
        if (oneMatch == true) {
          alert("Genetic code error: more than one amino acid is coded by the codon: " + codon + ".");
          return false;
        }
        oneMatch = true;
      }
      j = j + 1;
      v34 = j < geneticCodeMatchExp.length;
    }
    if (oneMatch == false) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    v36 = i$$2 <= testSequence.length - 3;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v38 = z$$3 < arrayOfPatterns$$1.length;
  for (;v38;) {
    introspect(JAM.policy.p26) {
      var v599 = arrayOfPatterns$$1[z$$3]
    }
    if (JAM.call(v599.search, v599, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p29) != -1) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    v38 = z$$3 < arrayOfPatterns$$1.length;
  }
  var i$$3 = 0;
  var v42 = i$$3 < arrayOfPatterns$$1.length;
  for (;v42;) {
    introspect(JAM.policy.p26) {
      var v600 = arrayOfPatterns$$1[i$$3]
    }
    var re = new RegExp("[" + v600 + "]", "gi");
    var j$$1 = i$$3 + 1;
    var v41 = j$$1 < arrayOfPatterns$$1.length;
    for (;v41;) {
      introspect(JAM.policy.p26) {
        var v601 = arrayOfPatterns$$1[j$$1]
      }
      if (JAM.call(v601.search, v601, [re], JAM.policy.p40) != -1) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1 = j$$1 + 1;
      v41 = j$$1 < arrayOfPatterns$$1.length;
    }
    i$$3 = i$$3 + 1;
    v42 = i$$3 < arrayOfPatterns$$1.length;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v45 = z$$4 < arrayOfPatterns$$2.length;
  for (;v45;) {
    introspect(JAM.policy.p26) {
      var v602 = arrayOfPatterns$$2[z$$4]
    }
    if (JAM.call(v602.search, v602, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p29) == -1) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    introspect(JAM.policy.p26) {
      var v603 = arrayOfPatterns$$2[z$$4]
    }
    if (moreExpressionCheck(v603) == false) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    v45 = z$$4 < arrayOfPatterns$$2.length;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v725 = getSequenceFromFasta(text$$7);
  if (JAM.call(v725.replace, v725, [/[^A-Za-z]/g, ""], JAM.policy.p27).length > maxInput) {
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
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/g/g, "1"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/c/g, "2"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "c"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "g"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/G/g, "1"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/C/g, "2"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "C"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "G"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/a/g, "1"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/t/g, "2"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "t"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "a"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/A/g, "1"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/T/g, "2"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "T"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "A"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/u/g, "a"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/U/g, "A"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/r/g, "1"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/y/g, "2"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "y"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "r"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/R/g, "1"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/Y/g, "2"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "Y"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "R"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/k/g, "1"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/m/g, "2"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "m"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "k"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/K/g, "1"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/M/g, "2"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "M"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "K"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/b/g, "1"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/v/g, "2"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "v"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "b"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/B/g, "1"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/V/g, "2"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "V"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "B"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/d/g, "1"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/h/g, "2"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "h"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "d"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/D/g, "1"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/H/g, "2"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "H"], JAM.policy.p27);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "D"], JAM.policy.p27);
  return dnaSequence;
}
function closeForm() {
  var v50 = outputWindow.document;
  JAM.call(v50.write, v50, ["</form>"], JAM.policy.p22);
  return true;
}
function closePre() {
  var v51 = outputWindow.document;
  JAM.call(v51.write, v51, ["</div>"], JAM.policy.p22);
  var v52 = outputWindow.document;
  JAM.call(v52.write, v52, ["</pre>\n"], JAM.policy.p22);
  return;
}
function closeTextArea() {
  var v53 = outputWindow.document;
  JAM.call(v53.write, v53, ["</textarea>"], JAM.policy.p22);
  return true;
}
function closeWindow() {
  var v54 = outputWindow.document;
  JAM.call(v54.write, v54, ["</body>\n</html>\n"], JAM.policy.p22);
  outputWindow.status = "Done.";
  outputWindow.document.close();
  return true;
}
function convertDegenerates(sequence$$1) {
  sequence$$1 = sequence$$1.toLowerCase();
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/t/g, "[TU]"], JAM.policy.p27);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/r/g, "[AGR]"], JAM.policy.p27);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/y/g, "[CTUY]"], JAM.policy.p27);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/s/g, "[GCS]"], JAM.policy.p27);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/w/g, "[ATUW]"], JAM.policy.p27);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/k/g, "[GTUK]"], JAM.policy.p27);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/m/g, "[ACM]"], JAM.policy.p27);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/b/g, "[CGTUBSKY]"], JAM.policy.p27);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/d/g, "[AGTUDRKW]"], JAM.policy.p27);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/h/g, "[ACTUHMYW]"], JAM.policy.p27);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/v/g, "[ACGVSMR]"], JAM.policy.p27);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/n/g, "[ACGTURYSWKMBDHVN]"], JAM.policy.p27);
  return sequence$$1;
}
function earlyCheckAlign(alignArray) {
  if (alignArray.length < 3) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v58 = i$$4 < alignArray.length;
  for (;v58;) {
    introspect(JAM.policy.p26) {
      var v605 = alignArray[i$$4]
    }
    if (JAM.call(v605.search, v605, [/[^\s]+\s/], JAM.policy.p29) == -1) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4 = i$$4 + 1;
    v58 = i$$4 < alignArray.length;
  }
  return true;
}
function filterAlignSeq(alignSeq) {
  alignSeq = JAM.call(alignSeq.replace, alignSeq, [/[^abcdefghiklmnpqrstvwxyz\.\-]/gi, ""], JAM.policy.p27);
  return alignSeq;
}
function filterFastaTitle(sequenceTitle) {
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/\s{2,}/g, " "], JAM.policy.p27);
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/^\s*/g, ""], JAM.policy.p27);
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/[\f\n\r\t]+$/g, "\n"], JAM.policy.p27);
  return JAM.call(sequenceTitle.replace, sequenceTitle, [/[\<\>]\n/gi, ""], JAM.policy.p27);
}
function getArrayOfFasta(sequenceData) {
  var arrayOfFasta = new Array;
  var matchArray;
  var re$$1 = /\>[^\>]+/g;
  if (JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p29) != -1) {
    var v60 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p40);
    for (;v60;) {
      JAM.call(arrayOfFasta.push, arrayOfFasta, [matchArray[0]], JAM.policy.p40);
      v60 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p40);
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var stringToReturn = "&gt;results for " + sequence$$2.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p29) != -1) {
    stringToReturn = stringToReturn + '"' + fastaSequenceTitle + '"';
  }
  stringToReturn = stringToReturn + ' starting "' + JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p23) + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var stringToReturn$$1 = "Search results for " + sequenceOne.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p29) != -1) {
    stringToReturn$$1 = stringToReturn$$1 + '"' + fastaSequenceTitleOne + '"';
  }
  stringToReturn$$1 = stringToReturn$$1 + ' starting "' + JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p23) + '"\n';
  stringToReturn$$1 = stringToReturn$$1 + "and " + sequenceTwo.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p29) != -1) {
    stringToReturn$$1 = stringToReturn$$1 + '"' + fastaSequenceTitleTwo + '"';
  }
  stringToReturn$$1 = stringToReturn$$1 + ' starting "' + JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p23) + '"';
  return'<div class="info">' + stringToReturn$$1 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var geneticCodeMatchExp$$1 = new Array(arrayOfPatterns$$3.length);
  var j$$2 = 0;
  var v78 = j$$2 < arrayOfPatterns$$3.length;
  for (;v78;) {
    var v76 = geneticCodeMatchExp$$1;
    var v77 = j$$2;
    introspect(JAM.policy.p26) {
      var v726 = arrayOfPatterns$$3[j$$2]
    }
    var v400 = JAM.call(v726.match, v726, [/\/.+\//], JAM.policy.p29) + "gi";
    if (JAM.isEval(eval)) {
      var v1050 = eval("introspect(JAM.policy.pFull) { " + v400 + " }")
    } else {
      var v1050 = JAM.call(eval, null, [v400])
    }
    introspect(JAM.policy.p13) {
      v76[v77] = v1050;
    }
    j$$2 = j$$2 + 1;
    v78 = j$$2 < arrayOfPatterns$$3.length;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var geneticCodeMatchResult$$1 = new Array(arrayOfPatterns$$4.length);
  var j$$3 = 0;
  var v84 = j$$3 < arrayOfPatterns$$4.length;
  for (;v84;) {
    var v80 = geneticCodeMatchResult$$1;
    var v81 = j$$3;
    introspect(JAM.policy.p26) {
      var v607 = arrayOfPatterns$$4[j$$3]
    }
    var v1051 = JAM.call(v607.match, v607, [/=[a-zA-Z\*]/], JAM.policy.p29).toString();
    introspect(JAM.policy.p13) {
      v80[v81] = v1051;
    }
    var v82 = geneticCodeMatchResult$$1;
    var v83 = j$$3;
    introspect(JAM.policy.p26) {
      var v404 = geneticCodeMatchResult$$1[j$$3]
    }
    var v1052 = JAM.call(v404.replace, v404, [/=/g, ""], JAM.policy.p27);
    introspect(JAM.policy.p13) {
      v82[v83] = v1052;
    }
    j$$3 = j$$3 + 1;
    v84 = j$$3 < arrayOfPatterns$$4.length;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var stringToReturn$$2 = "Results for " + sequence$$3.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p29) != -1) {
    stringToReturn$$2 = stringToReturn$$2 + '"' + fastaSequenceTitle$$1 + '"';
  }
  stringToReturn$$2 = stringToReturn$$2 + ' starting "' + JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p23) + '"';
  return'<div class="info">' + stringToReturn$$2 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var stringToReturn$$3 = "Results for " + topology + " " + sequence$$4.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p29) != -1) {
    stringToReturn$$3 = stringToReturn$$3 + '"' + fastaSequenceTitle$$2 + '"';
  }
  stringToReturn$$3 = stringToReturn$$3 + ' starting "' + JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p23) + '"';
  return'<div class="info">' + stringToReturn$$3 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var stringToReturn$$4 = "Alignment results for " + sequenceOne$$1.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p29) != -1) {
    stringToReturn$$4 = stringToReturn$$4 + '"' + fastaSequenceTitleOne$$1 + '"';
  }
  stringToReturn$$4 = stringToReturn$$4 + ' starting "' + JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p23) + '"\n';
  stringToReturn$$4 = stringToReturn$$4 + "and " + sequenceTwo$$1.length + " residue sequence ";
  if (JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p29) != -1) {
    stringToReturn$$4 = stringToReturn$$4 + '"' + fastaSequenceTitleTwo$$1 + '"';
  }
  stringToReturn$$4 = stringToReturn$$4 + ' starting "' + JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p23) + '"';
  return'<div class="info">' + stringToReturn$$4 + "</div>\n";
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v105 = j$$4 < lengthOut;
  for (;v105;) {
    tempNum = JAM.call(Math.floor, Math, [Math.random() * components.length], JAM.policy.p29);
    introspect(JAM.policy.p26) {
      tempChar = components[tempNum];
    }
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p40);
    j$$4 = j$$4 + 1;
    v105 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p22);
}
function getSequenceFromFasta(sequenceRecord) {
  if (JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p29) != -1) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p27);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  if (JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p29) != -1) {
    fastaTitle = JAM.call(sequenceRecord$$1.match, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p27).toString();
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\>|[\f\n\r]/g, ""], JAM.policy.p27);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\s{2,}/g, " "], JAM.policy.p27);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/[\<\>]/gi, ""], JAM.policy.p27);
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  var v1008 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p29) != -1;
  if (!v1008) {
    v1008 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p29) != -1;
  }
  var v995 = v1008;
  if (!v995) {
    v995 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p29) != -1;
  }
  var v980 = v995;
  if (!v980) {
    v980 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p29) != -1;
  }
  var v962 = v980;
  if (!v962) {
    v962 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p29) != -1;
  }
  var v928 = v962;
  if (!v928) {
    v928 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p29) != -1;
  }
  var v883 = v928;
  if (!v883) {
    v883 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p29) != -1;
  }
  var v813 = v883;
  if (!v813) {
    v813 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p29) != -1;
  }
  var v727 = v813;
  if (!v727) {
    v727 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p29) != -1;
  }
  var v609 = v727;
  if (!v609) {
    v609 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p29) != -1;
  }
  var v432 = v609;
  if (!v432) {
    v432 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p29) != -1;
  }
  if (v432) {
    return false;
  }
  return true;
}
function openForm() {
  var v110 = outputWindow.document;
  JAM.call(v110.write, v110, ['<form action="">\n'], JAM.policy.p22);
  return true;
}
function openPre() {
  var v111 = outputWindow.document;
  JAM.call(v111.write, v111, ["<pre>"], JAM.policy.p22);
  var v112 = outputWindow.document;
  JAM.call(v112.write, v112, ['<div class="pre">'], JAM.policy.p22);
  return;
}
function openTextArea() {
  var v113 = outputWindow.document;
  JAM.call(v113.write, v113, ['<br /><textarea rows="6" cols="61">\n'], JAM.policy.p22);
  return true;
}
function openWindow(title$$6) {
  _openWindow(title$$6, true);
  return;
}
function _openWindow(title$$7, isColor) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p25);
  outputWindow.focus();
  var v114 = outputWindow.document;
  JAM.call(v114.write, v114, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n'], JAM.policy.p40);
  if (isColor) {
    var v116 = outputWindow.document;
    JAM.call(v116.write, v116, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; background-color: #66FF00}\n" + 
    "span.two, td.two {color: #000000; background-color: #FFFF66}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n" + "td.many {color: #000000}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + 
    "</style>\n"], JAM.policy.p40);
  } else {
    var v118 = outputWindow.document;
    JAM.call(v118.write, v118, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n" + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "td.many {color: #000000; background-color: #FFFFFF}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"], JAM.policy.p40);
  }
  var v120 = outputWindow.document;
  JAM.call(v120.write, v120, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$7 + " results</div>\n"], JAM.policy.p40);
  outputWindow.status = "Please Wait.";
  return true;
}
function openWindowAlign(title$$8) {
  _openWindowAlign(title$$8, true);
  return;
}
function _openWindowAlign(title$$9, isBackground) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p25);
  outputWindow.focus();
  var v122 = outputWindow.document;
  JAM.call(v122.write, v122, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n'], JAM.policy.p40);
  if (isBackground) {
    var v124 = outputWindow.document;
    JAM.call(v124.write, v124, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #FFFFFF; background-color: #000000}\n" + "span.sim {color: #FFFFFF; background-color: #666666}\n" + 
    "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n" + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n" + "span.c, span.m {color: #000000; background-color: #FFFF00}\n" + "span.s, span.t {color: #000000; background-color: #66FF00}\n" + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n" + "span.d, span.e {color: #000000; background-color: #0066FF}\n" + "span.n, span.q {color: #000000; background-color: #996633}\n" + "span.p {color: #000000; background-color: #FF99FF}\n" + 
    "</style>\n"], JAM.policy.p40);
  } else {
    var v126 = outputWindow.document;
    JAM.call(v126.write, v126, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n" + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n" + 
    "span.diff {color: #999999; background-color: #FFFFFF}\n" + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n" + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n" + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n" + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n" + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n" + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n" + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n" + 
    "span.p {color: #00FFCC; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"], JAM.policy.p40);
  }
  var v128 = outputWindow.document;
  JAM.call(v128.write, v128, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$9 + " results</div>\n"], JAM.policy.p40);
  outputWindow.status = "Please Wait.";
  return true;
}
function removeFormatting(sequence$$5) {
  return JAM.call(sequence$$5.replace, sequence$$5, [/[\d\s]/g, ""], JAM.policy.p27);
}
function removeNonDna(sequence$$6) {
  return JAM.call(sequence$$6.replace, sequence$$6, [/[^gatucryswkmbdhvnxGATUCRYSWKMBDHVNX]/g, ""], JAM.policy.p27);
}
function removeNonDnaStrict(sequence$$7) {
  return JAM.call(sequence$$7.replace, sequence$$7, [/[^gatucGATUC]/g, ""], JAM.policy.p27);
}
function removeNonProtein(sequence$$8) {
  return JAM.call(sequence$$8.replace, sequence$$8, [/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, ""], JAM.policy.p27);
}
function removeNonProteinStrict(sequence$$9) {
  return JAM.call(sequence$$9.replace, sequence$$9, [/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, ""], JAM.policy.p27);
}
function removeNonProteinAllowDegen(sequence$$10) {
  return JAM.call(sequence$$10.replace, sequence$$10, [/[^ABCDEFGHIKLMNPQRSTVWYXZabcdefghiklmnpqrstvwyxz\*]/g, ""], JAM.policy.p27);
}
function removeNonProteinAllowX(sequence$$11) {
  return JAM.call(sequence$$11.replace, sequence$$11, [/[^ACDEFGHIKLMNPQRSTVWYZXacdefghiklmnpqrstvwyzx\*]/g, ""], JAM.policy.p27);
}
function removeWhiteSpace(text$$9) {
  return JAM.call(text$$9.replace, text$$9, [/\s/g, ""], JAM.policy.p27);
}
function removeNonLetters(sequence$$12) {
  return JAM.call(sequence$$12.replace, sequence$$12, [/[^A-Z]/gi, ""], JAM.policy.p27);
}
function reverse(dnaSequence$$1) {
  var tempDnaArray = new Array;
  if (JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p29) != -1) {
    tempDnaArray = JAM.call(dnaSequence$$1.match, dnaSequence$$1, [/./g], JAM.policy.p29);
    tempDnaArray = tempDnaArray.reverse();
    dnaSequence$$1 = JAM.call(tempDnaArray.join, tempDnaArray, [""], JAM.policy.p22);
  }
  return dnaSequence$$1;
}
function rightNum(theNumber, sequenceToAppend, lengthOfColumn, tabIn) {
  var j$$5 = 0;
  var tempString = "";
  theNumber = theNumber.toString();
  j$$5 = theNumber.length;
  var v131 = j$$5 < lengthOfColumn;
  for (;v131;) {
    tempString = tempString + " ";
    j$$5 = j$$5 + 1;
    v131 = j$$5 < lengthOfColumn;
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
  JAM.call(testArray.push, testArray, [testString], JAM.policy.p40);
  if (testArray[0] != testString) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  if (JAM.call(testString.search, testString, [re$$2], JAM.policy.p40) == -1) {
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
  testString = JAM.call(testString.replace, testString, [/(\d)/g, v1], JAM.policy.p27);
  if (testString != "1X2X3X") {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false;
  }
  var testNum = 2489.8237;
  if (JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p24) != 2489.824) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  if (JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p24) != 2489.8) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  if (JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p29) == -1) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v738 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p29) == -1;
  if (!v738) {
    v738 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p29) == -1;
  }
  var v620 = v738;
  if (!v620) {
    v620 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p29) == -1;
  }
  var v447 = v620;
  if (!v447) {
    v447 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p29) == -1;
  }
  if (v447) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  if (JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p29) == -1) {
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
  if (JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p29) != -1) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  if (JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p29) != -1) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v741 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p29) == -1;
  if (!v741) {
    v741 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p29) == -1;
  }
  var v623 = v741;
  if (!v623) {
    v623 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p29) == -1;
  }
  var v452 = v623;
  if (!v452) {
    v452 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p29) == -1;
  }
  if (v452) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v744 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p29) == -1;
  if (!v744) {
    v744 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p29) == -1;
  }
  var v626 = v744;
  if (!v626) {
    v626 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p29) == -1;
  }
  var v453 = v626;
  if (!v453) {
    v453 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p29) == -1;
  }
  if (v453) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  if (JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p29) == -1) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v747 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p29) == -1;
  if (!v747) {
    v747 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p29) == -1;
  }
  var v629 = v747;
  if (!v629) {
    v629 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p29) == -1;
  }
  var v455 = v629;
  if (!v455) {
    v455 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p29) == -1;
  }
  if (v455) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  if (JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p29) == -1) {
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
  var v159 = i$$5 < stopBase;
  for (;v159;) {
    lineOfText = rightNum(i$$5 + 1, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v156 = j$$6 <= basePerLine / groupSize;
    for (;v156;) {
      var v155 = k < groupSize;
      for (;v155;) {
        lineOfText = lineOfText + JAM.call(text$$10.charAt, text$$10, [k + i$$5], JAM.policy.p40);
        k = k + 1;
        v155 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      v156 = j$$6 <= basePerLine / groupSize;
    }
    var v157 = outputWindow.document;
    JAM.call(v157.write, v157, [lineOfText + "\n"], JAM.policy.p40);
    lineOfText = "";
    v159 = i$$5 < stopBase;
  }
  return true;
}
function writeGroupNumDna(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition) {
  writeGroupNumDnaSetStart(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition, 0);
  return true;
}
function writeGroupNumDnaSetStart(text$$12, tabIn$$3, groupSize$$2, basePerLine$$2, startBase$$2, stopBase$$2, strands$$1, numberPosition$$1, numberingAdjustment) {
  function adjustNumbering(original, adjustment) {
    var adjusted = original + adjustment;
    var v460 = adjustment < 0;
    if (v460) {
      v460 = adjusted >= 0;
    }
    if (v460) {
      adjusted = adjusted + 1;
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
  var v193 = i$$6 < stopBase$$2;
  for (;v193;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v169 = j$$7 <= basePerLine$$2 / groupSize$$2;
    for (;v169;) {
      var v164 = k$$1 < groupSize$$2;
      for (;v164;) {
        if (i$$6 + k$$1 >= stopBase$$2) {
          break;
        }
        lineOfText$$1 = lineOfText$$1 + JAM.call(text$$12.charAt, text$$12, [k$$1 + i$$6], JAM.policy.p40);
        k$$1 = k$$1 + 1;
        v164 = k$$1 < groupSize$$2;
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
      j$$7 = j$$7 + 1;
      v169 = j$$7 <= basePerLine$$2 / groupSize$$2;
    }
    if (numberPosition$$1 == "left") {
      var v170 = outputWindow.document;
      JAM.call(v170.write, v170, [rightNum(adjustNumbering(lineNum, numberingAdjustment), "", 8, tabIn$$3) + lineOfText$$1 + "\n"], JAM.policy.p40);
      if (strands$$1 == "two") {
        var v172 = outputWindow.document;
        JAM.call(v172.write, v172, [rightNum(adjustNumbering(lineNum, numberingAdjustment), "", 8, tabIn$$3) + complement(lineOfText$$1) + "\n"], JAM.policy.p40);
        var v174 = outputWindow.document;
        JAM.call(v174.write, v174, ["\n"], JAM.policy.p22);
      }
    } else {
      if (numberPosition$$1 == "right") {
        var v176 = outputWindow.document;
        JAM.call(v176.write, v176, [lineOfText$$1 + adjustNumbering(i$$6, numberingAdjustment) + "\n"], JAM.policy.p40);
        if (strands$$1 == "two") {
          var v178 = outputWindow.document;
          JAM.call(v178.write, v178, [complement(lineOfText$$1) + adjustNumbering(i$$6, numberingAdjustment) + "\n"], JAM.policy.p40);
          var v180 = outputWindow.document;
          JAM.call(v180.write, v180, ["\n"], JAM.policy.p22);
        }
      } else {
        if (numberPosition$$1 == "above") {
          var v182 = outputWindow.document;
          JAM.call(v182.write, v182, [aboveNum + "\n"], JAM.policy.p40);
          var v184 = outputWindow.document;
          JAM.call(v184.write, v184, [lineOfText$$1 + "\n"], JAM.policy.p40);
          if (strands$$1 == "two") {
            var v186 = outputWindow.document;
            JAM.call(v186.write, v186, [complement(lineOfText$$1) + "\n"], JAM.policy.p40);
            var v188 = outputWindow.document;
            JAM.call(v188.write, v188, ["\n"], JAM.policy.p22);
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v193 = i$$6 < stopBase$$2;
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
  var v214 = i$$7 < stopBase$$3;
  for (;v214;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v202 = j$$8 <= basePerLine$$3 / groupSize$$3;
    for (;v202;) {
      var v197 = k$$2 < groupSize$$3;
      for (;v197;) {
        if (i$$7 + k$$2 >= stopBase$$3) {
          break;
        }
        lineOfText$$2 = lineOfText$$2 + JAM.call(text$$13.charAt, text$$13, [k$$2 + i$$7], JAM.policy.p40);
        k$$2 = k$$2 + 1;
        v197 = k$$2 < groupSize$$3;
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
      j$$8 = j$$8 + 1;
      v202 = j$$8 <= basePerLine$$3 / groupSize$$3;
    }
    if (numberPosition$$2 == "left") {
      var v203 = outputWindow.document;
      JAM.call(v203.write, v203, [rightNum(lineNum$$1, "", 8, tabIn$$4) + lineOfText$$2 + "\n"], JAM.policy.p40);
    } else {
      if (numberPosition$$2 == "right") {
        var v205 = outputWindow.document;
        JAM.call(v205.write, v205, [lineOfText$$2 + i$$7 + "\n"], JAM.policy.p40);
      } else {
        if (numberPosition$$2 == "above") {
          var v207 = outputWindow.document;
          JAM.call(v207.write, v207, [aboveNum$$1 + "\n"], JAM.policy.p40);
          var v209 = outputWindow.document;
          JAM.call(v209.write, v209, [lineOfText$$2 + "\n"], JAM.policy.p40);
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v214 = i$$7 < stopBase$$3;
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
  var v640 = sequence$$13.length <= firstIndexToMutate;
  if (!v640) {
    v640 = lastIndexToMutate < 0;
  }
  var v477 = v640;
  if (!v477) {
    v477 = lastIndexToMutate <= firstIndexToMutate;
  }
  if (v477) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v223 = i$$8 < numMut;
  for (;v223;) {
    maxNum = sequence$$13.length;
    randNum = JAM.call(Math.floor, Math, [Math.random() * maxNum], JAM.policy.p29);
    var v479 = randNum < firstIndexToMutate;
    if (!v479) {
      v479 = randNum > lastIndexToMutate;
    }
    if (v479) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v223 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p29);
    needNewChar = true;
    for (;needNewChar;) {
      componentsIndex = JAM.call(Math.round, Math, [Math.random() * components$$1.length], JAM.policy.p29);
      if (componentsIndex == components$$1.length) {
        componentsIndex = 0;
      }
      introspect(JAM.policy.p26) {
        var v483 = components$$1[componentsIndex]
      }
      if (v483 != currentChar) {
        needNewChar = false;
      }
    }
    var v484 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p23);
    introspect(JAM.policy.p26) {
      var v485 = components$$1[componentsIndex]
    }
    sequence$$13 = v484 + v485 + JAM.call(sequence$$13.substring, sequence$$13, [randNum + 1, sequence$$13.length], JAM.policy.p39);
    i$$8 = i$$8 + 1;
    v223 = i$$8 < numMut;
  }
  var v224 = outputWindow.document;
  JAM.call(v224.write, v224, [addReturns(sequence$$13)], JAM.policy.p40);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v230 = j$$9 < lengthOut$$1;
  for (;v230;) {
    tempNum$$1 = JAM.call(Math.floor, Math, [Math.random() * components$$2.length], JAM.policy.p29);
    introspect(JAM.policy.p26) {
      tempChar$$1 = components$$2[tempNum$$1];
    }
    sequence$$14 = sequence$$14 + tempChar$$1;
    if (sequence$$14.length == 60) {
      var v227 = outputWindow.document;
      JAM.call(v227.write, v227, [sequence$$14 + "\n"], JAM.policy.p40);
      sequence$$14 = "";
    }
    j$$9 = j$$9 + 1;
    v230 = j$$9 < lengthOut$$1;
  }
  var v231 = outputWindow.document;
  JAM.call(v231.write, v231, [sequence$$14 + "\n"], JAM.policy.p40);
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
    shiftValue = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p23).length;
    sequence$$15 = JAM.call(sequence$$15.substring, sequence$$15, [sequence$$15.length - lookAhead, sequence$$15.length], JAM.policy.p39) + sequence$$15 + JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p23);
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v237 = outputWindow.document;
  JAM.call(v237.write, v237, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p22);
  var v238 = outputWindow.document;
  JAM.call(v238.write, v238, ['<tr><td class="title" width="200px">' + "Site:" + '</td><td class="title">' + "Positions:" + "</td></tr>\n"], JAM.policy.p40);
  var i$$9 = 0;
  var v255 = i$$9 < arrayOfItems.length;
  for (;v255;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAM.policy.p26) {
      var v494 = arrayOfItems[i$$9]
    }
    matchExp = JAM.call(v494.match, v494, [/\/.+\//], JAM.policy.p29) + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    introspect(JAM.policy.p26) {
      var v756 = arrayOfItems[i$$9]
    }
    var v495 = JAM.call(v756.match, v756, [/\)\D*\d+/], JAM.policy.p29).toString();
    cutDistance = parseFloat(JAM.call(v495.replace, v495, [/\)\D*/, ""], JAM.policy.p27));
    var v247 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p40);
    for (;v247;) {
      matchPosition = matchExp.lastIndex - cutDistance;
      var v496 = matchPosition >= lowerLimit;
      if (v496) {
        v496 = matchPosition < upperLimit;
      }
      if (v496) {
        timesFound = timesFound + 1;
        tempString$$1 = tempString$$1 + ", " + (matchPosition - shiftValue + 1);
      }
      matchExp.lastIndex = matchExp.lastIndex - RegExp.lastMatch.length + 1;
      v247 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p40);
    }
    if (JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p29) != -1) {
      tempString$$1 = JAM.call(tempString$$1.replace, tempString$$1, [/none,\s*/, ""], JAM.policy.p27);
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
    var v253 = outputWindow.document;
    var v935 = '<tr><td class="' + backGroundClass + '">';
    introspect(JAM.policy.p26) {
      var v1002 = arrayOfItems[i$$9]
    }
    var v970 = JAM.call(v1002.match, v1002, [/\([^\(]+\)/], JAM.policy.p29).toString();
    JAM.call(v253.write, v253, [v935 + JAM.call(v970.replace, v970, [/\(|\)/g, ""], JAM.policy.p27) + '</td><td class="' + backGroundClass + '">' + tempString$$1 + "</td></tr>\n"], JAM.policy.p40);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    v255 = i$$9 < arrayOfItems.length;
  }
  var v256 = outputWindow.document;
  JAM.call(v256.write, v256, ["</tbody></table>\n"], JAM.policy.p22);
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v257 = outputWindow.document;
  JAM.call(v257.write, v257, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p22);
  var v258 = outputWindow.document;
  JAM.call(v258.write, v258, ['<tr><td class="title">' + "Pattern:" + '</td><td class="title">' + "Times found:" + '</td><td class="title">' + "Percentage:" + "</td></tr>\n"], JAM.policy.p40);
  var i$$10 = 0;
  var v268 = i$$10 < arrayOfItems$$1.length;
  for (;v268;) {
    var tempNumber = 0;
    introspect(JAM.policy.p26) {
      var v505 = arrayOfItems$$1[i$$10]
    }
    var matchExp$$1 = JAM.call(v505.match, v505, [/\/[^\/]+\//], JAM.policy.p29) + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    if (JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p40) != -1) {
      tempNumber = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p40).length;
    }
    var percentage = 0;
    var v650 = originalLength + 1;
    introspect(JAM.policy.p26) {
      var v834 = arrayOfItems$$1[i$$10]
    }
    if (v650 - parseFloat(JAM.call(v834.match, v834, [/\d+/], JAM.policy.p29)) > 0) {
      var v263 = 100 * tempNumber;
      var v508 = originalLength + 1;
      introspect(JAM.policy.p26) {
        var v760 = arrayOfItems$$1[i$$10]
      }
      percentage = v263 / (v508 - parseFloat(JAM.call(v760.match, v760, [/\d+/], JAM.policy.p29)));
    }
    var v266 = outputWindow.document;
    introspect(JAM.policy.p26) {
      var v1003 = arrayOfItems$$1[i$$10]
    }
    var v971 = JAM.call(v1003.match, v1003, [/\([^\(]+\)\b/], JAM.policy.p29).toString();
    JAM.call(v266.write, v266, ["<tr><td>" + JAM.call(v971.replace, v971, [/\(|\)/g, ""], JAM.policy.p27) + "</td><td>" + tempNumber + "</td><td>" + JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p24) + "</td></tr>\n"], JAM.policy.p40);
    i$$10 = i$$10 + 1;
    v268 = i$$10 < arrayOfItems$$1.length;
  }
  var v269 = outputWindow.document;
  JAM.call(v269.write, v269, ["</tbody></table>\n"], JAM.policy.p22);
  return true;
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v276 = sequence$$17.length > 0;
  for (;v276;) {
    maxNum$$1 = sequence$$17.length;
    randNum$$1 = JAM.call(Math.floor, Math, [Math.random() * maxNum$$1], JAM.policy.p29);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p29);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p23);
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [randNum$$1 + 1, sequence$$17.length], JAM.policy.p27);
    sequence$$17 = tempString1 + tempString2;
    if (tempSeq.length == 60) {
      var v273 = outputWindow.document;
      JAM.call(v273.write, v273, [tempSeq + "\n"], JAM.policy.p40);
      tempSeq = "";
    }
    v276 = sequence$$17.length > 0;
  }
  var v277 = outputWindow.document;
  JAM.call(v277.write, v277, [tempSeq + "\n"], JAM.policy.p40);
  return true;
}
function pcrProducts(theDocument) {
  var newDna = "";
  var maxInput$$3 = 2E5;
  if (testScript() == false) {
    return false;
  }
  var re$$3;
  var primers = new Array;
  var forwardMatches = new Array;
  var reverseMatches = new Array;
  var pcrProducts$$1 = new Array;
  var v893 = checkFormElement(theDocument.forms[0].elements[0]) == false;
  if (!v893) {
    v893 = checkSequenceLength(theDocument.forms[0].elements[0].value, maxInput$$3) == false;
  }
  var v836 = v893;
  if (!v836) {
    v836 = checkFormElement(theDocument.forms[0].elements[1]) == false;
  }
  var v762 = v836;
  if (!v762) {
    v762 = checkFormElement(theDocument.forms[0].elements[2]) == false;
  }
  var v655 = v762;
  if (!v655) {
    v655 = checkFormElement(theDocument.forms[0].elements[3]) == false;
  }
  var v517 = v655;
  if (!v517) {
    v517 = checkFormElement(theDocument.forms[0].elements[4]) == false;
  }
  if (v517) {
    return false;
  }
  var v766 = theDocument.forms[0].elements[2].value;
  if (JAM.call(v766.replace, v766, [/[^A-Za-z]/g, ""], JAM.policy.p27).length < 10) {
    alert("Please enter primer sequences that are at least 10 bases long.");
    return false;
  }
  var v767 = theDocument.forms[0].elements[4].value;
  if (JAM.call(v767.replace, v767, [/[^A-Za-z]/g, ""], JAM.policy.p27).length < 10) {
    alert("Please enter primer sequences that are at least 10 bases long.");
    return false;
  }
  var v520 = theDocument.forms[0].elements[2].value;
  var primerOne = convertDegenerates(JAM.call(v520.replace, v520, [/[^A-Za-z]/g, ""], JAM.policy.p27));
  var v521 = theDocument.forms[0].elements[4].value;
  var primerTwo = convertDegenerates(JAM.call(v521.replace, v521, [/[^A-Za-z]/g, ""], JAM.policy.p27));
  try {
    var v285 = "/" + primerOne + "/gi";
    if (JAM.isEval(eval)) {
      re$$3 = eval("introspect(JAM.policy.pFull) { " + v285 + " }");
    } else {
      re$$3 = JAM.call(eval, null, [v285]);
    }
    var testString$$1 = "teststring";
    testString$$1 = JAM.call(testString$$1.replace, testString$$1, [re$$3, ""], JAM.policy.p41);
  } catch (e$$5) {
    alert("The first primer sequence is not formatted correctly.");
    return false;
  }
  try {
    var v286 = "/" + primerTwo + "/gi";
    if (JAM.isEval(eval)) {
      re$$3 = eval("introspect(JAM.policy.pFull) { " + v286 + " }");
    } else {
      re$$3 = JAM.call(eval, null, [v286]);
    }
    testString$$1 = "teststring";
    testString$$1 = JAM.call(testString$$1.replace, testString$$1, [re$$3, ""], JAM.policy.p41);
  } catch (e$$6) {
    alert("The second primer sequence is not formatted correctly.");
    return false;
  }
  var v662 = "/" + primerOne + "/gi";
  if (JAM.isEval(eval)) {
    var v524 = eval("introspect(JAM.policy.pFull) { " + v662 + " }")
  } else {
    var v524 = JAM.call(eval, null, [v662])
  }
  JAM.call(primers.push, primers, [new Primer(v524, theDocument.forms[0].elements[1].value)], JAM.policy.p40);
  var v664 = "/" + primerTwo + "/gi";
  if (JAM.isEval(eval)) {
    var v526 = eval("introspect(JAM.policy.pFull) { " + v664 + " }")
  } else {
    var v526 = JAM.call(eval, null, [v664])
  }
  JAM.call(primers.push, primers, [new Primer(v526, theDocument.forms[0].elements[3].value)], JAM.policy.p40);
  var arrayOfFasta$$1 = getArrayOfFasta(theDocument.forms[0].elements[0].value);
  var i$$11 = 0;
  var v296 = i$$11 < arrayOfFasta$$1.length;
  for (;v296;) {
    introspect(JAM.policy.p26) {
      var v290 = arrayOfFasta$$1[i$$11]
    }
    newDna = getSequenceFromFasta(v290);
    introspect(JAM.policy.p26) {
      var v291 = arrayOfFasta$$1[i$$11]
    }
    title = getTitleFromFasta(v291);
    newDna = removeNonDna(newDna);
    var v667 = theDocument.forms[0].elements[8].options;
    var v668 = theDocument.forms[0].elements[8].selectedIndex;
    introspect(JAM.policy.p26) {
      var v530 = v667[v668]
    }
    forwardMatches = findMatches(primers, newDna, v530.value);
    var v293 = reverse(complement(newDna));
    var v669 = theDocument.forms[0].elements[8].options;
    var v670 = theDocument.forms[0].elements[8].selectedIndex;
    introspect(JAM.policy.p26) {
      var v532 = v669[v670]
    }
    reverseMatches = findMatches(primers, v293, v532.value);
    var v671 = theDocument.forms[0].elements[8].options;
    var v672 = theDocument.forms[0].elements[8].selectedIndex;
    introspect(JAM.policy.p26) {
      var v533 = v671[v672]
    }
    makePcrProducts(newDna, title, forwardMatches, reverseMatches, v533.value, pcrProducts$$1);
    i$$11 = i$$11 + 1;
    v296 = i$$11 < arrayOfFasta$$1.length;
  }
  JAM.call(pcrProducts$$1.sort, pcrProducts$$1, [pcrProductSorter], JAM.policy.p40);
  openWindow("PCR Products");
  openPre();
  i$$11 = 0;
  var v299 = i$$11 < pcrProducts$$1.length;
  for (;v299;) {
    introspect(JAM.policy.p26) {
      var v297 = pcrProducts$$1[i$$11]
    }
    var v673 = theDocument.forms[0].elements[8].options;
    var v674 = theDocument.forms[0].elements[8].selectedIndex;
    introspect(JAM.policy.p26) {
      var v536 = v673[v674]
    }
    JAM.call(v297.writeProduct, v297, [v536.value], JAM.policy.p40);
    i$$11 = i$$11 + 1;
    v299 = i$$11 < pcrProducts$$1.length;
  }
  if (pcrProducts$$1.length == 0) {
    var v300 = outputWindow.document;
    JAM.call(v300.write, v300, ["No PCR products were obtained.\n\n"], JAM.policy.p22);
  }
  closePre();
  closeWindow();
  return true;
}
function findMatches(primers$$1, sequence$$18, topology$$1) {
  var matchArray$$2;
  var matchPosition$$1;
  var arrayOfMatches = new Array;
  var re$$4;
  var originalLength$$1 = sequence$$18.length;
  if (topology$$1 == "circular") {
    var lookAhead$$1 = 50;
    var shiftValue$$1 = JAM.call(sequence$$18.substring, sequence$$18, [0, lookAhead$$1], JAM.policy.p23).length;
    var upperLimit$$1 = sequence$$18.length + shiftValue$$1;
    sequence$$18 = JAM.call(sequence$$18.substring, sequence$$18, [sequence$$18.length - lookAhead$$1, sequence$$18.length], JAM.policy.p39) + sequence$$18 + JAM.call(sequence$$18.substring, sequence$$18, [0, lookAhead$$1], JAM.policy.p23);
    var lowerLimit$$1 = 0 + shiftValue$$1;
    var i$$12 = 0;
    var v312 = i$$12 < primers$$1.length;
    for (;v312;) {
      introspect(JAM.policy.p26) {
        var v306 = primers$$1[i$$12]
      }
      re$$4 = v306.re;
      var v311 = matchArray$$2 = JAM.call(re$$4.exec, re$$4, [sequence$$18], JAM.policy.p40);
      for (;v311;) {
        matchPosition$$1 = re$$4.lastIndex;
        var v541 = matchPosition$$1 >= lowerLimit$$1;
        if (v541) {
          v541 = matchPosition$$1 < upperLimit$$1;
        }
        if (v541) {
          matchPosition$$1 = matchPosition$$1 - shiftValue$$1;
          if (matchPosition$$1 == 0) {
            matchPosition$$1 = originalLength$$1;
          }
          introspect(JAM.policy.p26) {
            var v677 = primers$$1[i$$12]
          }
          JAM.call(arrayOfMatches.push, arrayOfMatches, [new Match(v677.name, matchArray$$2[0], matchPosition$$1)], JAM.policy.p40);
        }
        re$$4.lastIndex = re$$4.lastIndex - RegExp.lastMatch.length + 1;
        v311 = matchArray$$2 = JAM.call(re$$4.exec, re$$4, [sequence$$18], JAM.policy.p40);
      }
      i$$12 = i$$12 + 1;
      v312 = i$$12 < primers$$1.length;
    }
  } else {
    i$$12 = 0;
    var v317 = i$$12 < primers$$1.length;
    for (;v317;) {
      introspect(JAM.policy.p26) {
        var v313 = primers$$1[i$$12]
      }
      re$$4 = v313.re;
      var v316 = matchArray$$2 = JAM.call(re$$4.exec, re$$4, [sequence$$18], JAM.policy.p40);
      for (;v316;) {
        matchPosition$$1 = re$$4.lastIndex;
        introspect(JAM.policy.p26) {
          var v679 = primers$$1[i$$12]
        }
        JAM.call(arrayOfMatches.push, arrayOfMatches, [new Match(v679.name, matchArray$$2[0], matchPosition$$1)], JAM.policy.p40);
        re$$4.lastIndex = re$$4.lastIndex - RegExp.lastMatch.length + 1;
        v316 = matchArray$$2 = JAM.call(re$$4.exec, re$$4, [sequence$$18], JAM.policy.p40);
      }
      i$$12 = i$$12 + 1;
      v317 = i$$12 < primers$$1.length;
    }
  }
  return arrayOfMatches;
}
function makePcrProducts(newDna$$1, title$$10, forwardMatches$$1, reverseMatches$$1, topology$$2, pcrProducts$$2) {
  var i$$13 = 0;
  var v324 = i$$13 < forwardMatches$$1.length;
  for (;v324;) {
    var j$$10 = 0;
    var v323 = j$$10 < reverseMatches$$1.length;
    for (;v323;) {
      introspect(JAM.policy.p26) {
        var v784 = forwardMatches$$1[i$$13]
      }
      var v681 = v784.positionAfter;
      introspect(JAM.policy.p26) {
        var v856 = forwardMatches$$1[i$$13]
      }
      var v555 = v681 - v856.matchingText.length;
      var v683 = newDna$$1.length;
      introspect(JAM.policy.p26) {
        var v786 = reverseMatches$$1[j$$10]
      }
      if (v555 <= v683 - v786.positionAfter) {
        introspect(JAM.policy.p26) {
          var v857 = forwardMatches$$1[i$$13]
        }
        var v787 = v857.positionAfter;
        introspect(JAM.policy.p26) {
          var v913 = forwardMatches$$1[i$$13]
        }
        var v557 = v787 - v913.matchingText.length + 1;
        var v789 = newDna$$1.length;
        introspect(JAM.policy.p26) {
          var v859 = reverseMatches$$1[j$$10]
        }
        var v686 = v789 - v859.positionAfter;
        introspect(JAM.policy.p26) {
          var v860 = reverseMatches$$1[j$$10]
        }
        var v558 = v686 + v860.matchingText.length;
        introspect(JAM.policy.p26) {
          var v688 = forwardMatches$$1[i$$13]
        }
        var v559 = v688.primerName;
        introspect(JAM.policy.p26) {
          var v689 = reverseMatches$$1[j$$10]
        }
        var v560 = v689.primerName;
        introspect(JAM.policy.p26) {
          var v690 = forwardMatches$$1[i$$13]
        }
        var v561 = v690.name;
        introspect(JAM.policy.p26) {
          var v691 = reverseMatches$$1[j$$10]
        }
        var v562 = v691.name;
        introspect(JAM.policy.p26) {
          var v861 = forwardMatches$$1[i$$13]
        }
        var v792 = v861.positionAfter;
        introspect(JAM.policy.p26) {
          var v914 = forwardMatches$$1[i$$13]
        }
        var v692 = v792 - v914.matchingText.length;
        var v863 = newDna$$1.length;
        introspect(JAM.policy.p26) {
          var v915 = reverseMatches$$1[j$$10]
        }
        var v794 = v863 - v915.positionAfter;
        introspect(JAM.policy.p26) {
          var v916 = reverseMatches$$1[j$$10]
        }
        JAM.call(pcrProducts$$2.push, pcrProducts$$2, [new PcrProduct(title$$10, v557, v558, v559, v560, v561, v562, JAM.call(newDna$$1.substring, newDna$$1, [v692, v794 + v916.matchingText.length], JAM.policy.p39))], JAM.policy.p40);
      } else {
        var v564 = topology$$2 == "circular";
        if (v564) {
          introspect(JAM.policy.p26) {
            var v866 = forwardMatches$$1[i$$13]
          }
          var v796 = v866.positionAfter;
          introspect(JAM.policy.p26) {
            var v917 = forwardMatches$$1[i$$13]
          }
          var v694 = v796 - v917.matchingText.length;
          var v918 = newDna$$1.length;
          introspect(JAM.policy.p26) {
            var v955 = reverseMatches$$1[j$$10]
          }
          var v868 = v918 - v955.positionAfter;
          introspect(JAM.policy.p26) {
            var v956 = reverseMatches$$1[j$$10]
          }
          v564 = v694 > v868 + v956.matchingText.length - 1;
        }
        if (v564) {
          introspect(JAM.policy.p26) {
            var v870 = forwardMatches$$1[i$$13]
          }
          var v799 = v870.positionAfter;
          introspect(JAM.policy.p26) {
            var v921 = forwardMatches$$1[i$$13]
          }
          var v565 = v799 - v921.matchingText.length + 1;
          var v801 = newDna$$1.length;
          introspect(JAM.policy.p26) {
            var v872 = reverseMatches$$1[j$$10]
          }
          var v697 = v801 - v872.positionAfter;
          introspect(JAM.policy.p26) {
            var v873 = reverseMatches$$1[j$$10]
          }
          var v566 = v697 + v873.matchingText.length;
          introspect(JAM.policy.p26) {
            var v699 = forwardMatches$$1[i$$13]
          }
          var v567 = v699.primerName;
          introspect(JAM.policy.p26) {
            var v700 = reverseMatches$$1[j$$10]
          }
          var v568 = v700.primerName;
          introspect(JAM.policy.p26) {
            var v701 = forwardMatches$$1[i$$13]
          }
          var v569 = v701.name;
          introspect(JAM.policy.p26) {
            var v702 = reverseMatches$$1[j$$10]
          }
          var v570 = v702.name;
          introspect(JAM.policy.p26) {
            var v922 = forwardMatches$$1[i$$13]
          }
          var v874 = v922.positionAfter;
          introspect(JAM.policy.p26) {
            var v957 = forwardMatches$$1[i$$13]
          }
          var v703 = JAM.call(newDna$$1.substring, newDna$$1, [v874 - v957.matchingText.length, newDna$$1.length], JAM.policy.p39);
          var v924 = newDna$$1.length;
          introspect(JAM.policy.p26) {
            var v958 = reverseMatches$$1[j$$10]
          }
          var v876 = v924 - v958.positionAfter;
          introspect(JAM.policy.p26) {
            var v959 = reverseMatches$$1[j$$10]
          }
          JAM.call(pcrProducts$$2.push, pcrProducts$$2, [new PcrProduct(title$$10, v565, v566, v567, v568, v569, v570, v703 + JAM.call(newDna$$1.substring, newDna$$1, [0, v876 + v959.matchingText.length], JAM.policy.p23))], JAM.policy.p40);
        }
      }
      j$$10 = j$$10 + 1;
      v323 = j$$10 < reverseMatches$$1.length;
    }
    i$$13 = i$$13 + 1;
    v324 = i$$13 < forwardMatches$$1.length;
  }
  return;
}
function writeProduct(topology$$3) {
  var v325 = outputWindow.document;
  JAM.call(v325.write, v325, ["&gt;" + this.sequence.length + " bp product from " + topology$$3 + " template " + this.template + ", base " + this.start + " to base " + this.stop + " (" + this.forwardName + " - " + this.reverseName + ").\n"], JAM.policy.p40);
  var v327 = outputWindow.document;
  JAM.call(v327.write, v327, [addReturns(this.sequence) + "\n\n"], JAM.policy.p40);
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
    return-1;
  } else {
    return 0;
  }
  return;
}
new PcrProduct("", 0, 0, "", "", "", "", "");
PcrProduct.prototype.writeProduct = writeProduct;
JAM.set(document, "onload", v2);
JAM.set(JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p22), "onclick", v3);
JAM.set(JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p22), "onclick", v4)
