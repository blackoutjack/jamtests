function v4() {
  document.forms[0].elements[0].value = " ";
  return;
}
function v3() {
  try {
    emblFasta(document);
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
  var v11 = i$$1 < arrayOfTitles.length;
  for (;v11;) {
    var v594 = arrayOfTitles[i$$1];
    var v469 = JAM.call(v594.search, v594, [/\S/], JAM.policy.p17) == -1;
    if (!v469) {
      var v595 = arrayOfSequences[i$$1];
      v469 = JAM.call(v595.search, v595, [/\S/], JAM.policy.p17) == -1;
    }
    var v286 = v469;
    if (!v286) {
      v286 = arrayOfSequences[i$$1].length != lengthOfAlign;
    }
    if (v286) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    v11 = i$$1 < arrayOfTitles.length;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v596 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p17) == -1;
  if (!v596) {
    v596 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p17) == -1;
  }
  var v550 = v596;
  if (!v550) {
    v550 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p17) == -1;
  }
  var v472 = v550;
  if (!v472) {
    v472 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p17) == -1;
  }
  var v288 = v472;
  if (!v288) {
    v288 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p17) == -1;
  }
  if (v288) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v475 = formElement.value;
  if (JAM.call(v475.search, v475, [/\S/], JAM.policy.p17) == -1) {
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
  var v16 = z$$2 < arrayOfPatterns.length;
  for (;v16;) {
    var v476 = arrayOfPatterns[z$$2];
    if (JAM.call(v476.search, v476, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p17) == -1) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    if (moreExpressionCheck(arrayOfPatterns[z$$2]) == false) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    v16 = z$$2 < arrayOfPatterns.length;
  }
  var geneticCodeMatchResult = new Array(arrayOfPatterns.length);
  var geneticCodeMatchExp = new Array(arrayOfPatterns.length);
  var j = 0;
  var v22 = j < arrayOfPatterns.length;
  for (;v22;) {
    var v478 = arrayOfPatterns[j];
    var v19 = JAM.call(v478.match, v478, [/\/.+\//], JAM.policy.p17) + "gi";
    if (JAM.isEval(eval)) {
      var v716 = eval("introspect(JAM.policy.pFull) { " + v19 + " }")
    } else {
      var v716 = JAM.call(eval, null, [v19])
    }
    geneticCodeMatchExp[j] = v716;
    var v296 = arrayOfPatterns[j];
    var v717 = JAM.call(v296.match, v296, [/=[a-zA-Z\*]/], JAM.policy.p17).toString();
    geneticCodeMatchResult[j] = v717;
    var v21 = geneticCodeMatchResult[j];
    var v718 = JAM.call(v21.replace, v21, [/=/g, ""], JAM.policy.p15);
    geneticCodeMatchResult[j] = v718;
    j++;
    v22 = j < arrayOfPatterns.length;
  }
  var i$$2 = 0;
  var v29 = i$$2 <= testSequence.length - 3;
  for (;v29;) {
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, i$$2 + 3], JAM.policy.p15);
    j = 0;
    var v27 = j < geneticCodeMatchExp.length;
    for (;v27;) {
      if (JAM.call(codon.search, codon, [geneticCodeMatchExp[j]], JAM.policy.p16) != -1) {
        if (oneMatch == true) {
          alert("Genetic code error: more than one amino acid is coded by the codon: " + codon + ".");
          return false;
        }
        oneMatch = true;
      }
      j++;
      v27 = j < geneticCodeMatchExp.length;
    }
    if (oneMatch == false) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    v29 = i$$2 <= testSequence.length - 3;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v31 = z$$3 < arrayOfPatterns$$1.length;
  for (;v31;) {
    var v482 = arrayOfPatterns$$1[z$$3];
    if (JAM.call(v482.search, v482, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p17) != -1) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    v31 = z$$3 < arrayOfPatterns$$1.length;
  }
  var i$$3 = 0;
  var v35 = i$$3 < arrayOfPatterns$$1.length;
  for (;v35;) {
    var re = new RegExp("[" + arrayOfPatterns$$1[i$$3] + "]", "gi");
    var j$$1 = i$$3 + 1;
    var v34 = j$$1 < arrayOfPatterns$$1.length;
    for (;v34;) {
      var v484 = arrayOfPatterns$$1[j$$1];
      if (JAM.call(v484.search, v484, [re], JAM.policy.p16) != -1) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      v34 = j$$1 < arrayOfPatterns$$1.length;
    }
    i$$3++;
    v35 = i$$3 < arrayOfPatterns$$1.length;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v38 = z$$4 < arrayOfPatterns$$2.length;
  for (;v38;) {
    var v485 = arrayOfPatterns$$2[z$$4];
    if (JAM.call(v485.search, v485, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p17) == -1) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    if (moreExpressionCheck(arrayOfPatterns$$2[z$$4]) == false) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    v38 = z$$4 < arrayOfPatterns$$2.length;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v553 = getSequenceFromFasta(text$$7);
  if (JAM.call(v553.replace, v553, [/[^A-Za-z]/g, ""], JAM.policy.p15).length > maxInput) {
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
function complement(dnaSequence$$1) {
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/g/g, "1"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/c/g, "2"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/1/g, "c"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/2/g, "g"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/G/g, "1"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/C/g, "2"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/1/g, "C"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/2/g, "G"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/a/g, "1"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/t/g, "2"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/1/g, "t"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/2/g, "a"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/A/g, "1"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/T/g, "2"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/1/g, "T"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/2/g, "A"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/u/g, "a"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/U/g, "A"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/r/g, "1"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/y/g, "2"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/1/g, "y"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/2/g, "r"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/R/g, "1"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/Y/g, "2"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/1/g, "Y"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/2/g, "R"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/k/g, "1"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/m/g, "2"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/1/g, "m"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/2/g, "k"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/K/g, "1"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/M/g, "2"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/1/g, "M"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/2/g, "K"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/b/g, "1"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/v/g, "2"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/1/g, "v"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/2/g, "b"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/B/g, "1"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/V/g, "2"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/1/g, "V"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/2/g, "B"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/d/g, "1"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/h/g, "2"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/1/g, "h"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/2/g, "d"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/D/g, "1"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/H/g, "2"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/1/g, "H"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/2/g, "D"], JAM.policy.p15);
  return dnaSequence$$1;
}
function closeForm() {
  var v43 = outputWindow.document;
  JAM.call(v43.write, v43, ["</form>"], JAM.policy.p9);
  return true;
}
function closePre() {
  var v44 = outputWindow.document;
  JAM.call(v44.write, v44, ["</div>"], JAM.policy.p9);
  var v45 = outputWindow.document;
  JAM.call(v45.write, v45, ["</pre>\n"], JAM.policy.p9);
  return;
}
function closeTextArea() {
  var v46 = outputWindow.document;
  JAM.call(v46.write, v46, ["</textarea>"], JAM.policy.p9);
  return true;
}
function closeWindow() {
  var v47 = outputWindow.document;
  JAM.call(v47.write, v47, ["</body>\n</html>\n"], JAM.policy.p9);
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
  var v51 = i$$4 < alignArray.length;
  for (;v51;) {
    var v488 = alignArray[i$$4];
    if (JAM.call(v488.search, v488, [/[^\s]+\s/], JAM.policy.p17) == -1) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    v51 = i$$4 < alignArray.length;
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
    var v53 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p16);
    for (;v53;) {
      JAM.call(arrayOfFasta.push, arrayOfFasta, [matchArray[0]], JAM.policy.p16);
      v53 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p16);
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
  var v70 = j$$2 < arrayOfPatterns$$3.length;
  for (;v70;) {
    var v489 = arrayOfPatterns$$3[j$$2];
    var v69 = JAM.call(v489.match, v489, [/\/.+\//], JAM.policy.p17) + "gi";
    if (JAM.isEval(eval)) {
      var v719 = eval("introspect(JAM.policy.pFull) { " + v69 + " }")
    } else {
      var v719 = JAM.call(eval, null, [v69])
    }
    geneticCodeMatchExp$$1[j$$2] = v719;
    j$$2++;
    v70 = j$$2 < arrayOfPatterns$$3.length;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var geneticCodeMatchResult$$1 = new Array(arrayOfPatterns$$4.length);
  var j$$3 = 0;
  var v74 = j$$3 < arrayOfPatterns$$4.length;
  for (;v74;) {
    var v346 = arrayOfPatterns$$4[j$$3];
    var v720 = JAM.call(v346.match, v346, [/=[a-zA-Z\*]/], JAM.policy.p17).toString();
    geneticCodeMatchResult$$1[j$$3] = v720;
    var v73 = geneticCodeMatchResult$$1[j$$3];
    var v721 = JAM.call(v73.replace, v73, [/=/g, ""], JAM.policy.p15);
    geneticCodeMatchResult$$1[j$$3] = v721;
    j$$3++;
    v74 = j$$3 < arrayOfPatterns$$4.length;
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
  var v95 = j$$4 < lengthOut;
  for (;v95;) {
    tempNum = JAM.call(Math.floor, Math, [Math.random() * components.length], JAM.policy.p17);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p16);
    j$$4++;
    v95 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p9);
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
  var v687 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p17) != -1;
  if (!v687) {
    v687 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p17) != -1;
  }
  var v678 = v687;
  if (!v678) {
    v678 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p17) != -1;
  }
  var v668 = v678;
  if (!v668) {
    v668 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p17) != -1;
  }
  var v655 = v668;
  if (!v655) {
    v655 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p17) != -1;
  }
  var v642 = v655;
  if (!v642) {
    v642 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p17) != -1;
  }
  var v629 = v642;
  if (!v629) {
    v629 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p17) != -1;
  }
  var v599 = v629;
  if (!v599) {
    v599 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p17) != -1;
  }
  var v554 = v599;
  if (!v554) {
    v554 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p17) != -1;
  }
  var v491 = v554;
  if (!v491) {
    v491 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p17) != -1;
  }
  var v374 = v491;
  if (!v374) {
    v374 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p17) != -1;
  }
  if (v374) {
    return false;
  }
  return true;
}
function openForm() {
  var v100 = outputWindow.document;
  JAM.call(v100.write, v100, ['<form action="">\n'], JAM.policy.p9);
  return true;
}
function openPre() {
  var v101 = outputWindow.document;
  JAM.call(v101.write, v101, ["<pre>"], JAM.policy.p9);
  var v102 = outputWindow.document;
  JAM.call(v102.write, v102, ['<div class="pre">'], JAM.policy.p9);
  return;
}
function openTextArea() {
  var v103 = outputWindow.document;
  JAM.call(v103.write, v103, ['<br /><textarea rows="6" cols="61">\n'], JAM.policy.p9);
  return true;
}
function openWindow(title$$5) {
  _openWindow(title$$5, true);
  return;
}
function _openWindow(title$$6, isColor) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  outputWindow.focus();
  var v104 = outputWindow.document;
  JAM.call(v104.write, v104, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n'], JAM.policy.p16);
  if (isColor) {
    var v106 = outputWindow.document;
    JAM.call(v106.write, v106, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; background-color: #66FF00}\n" + 
    "span.two, td.two {color: #000000; background-color: #FFFF66}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n" + "td.many {color: #000000}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + 
    "</style>\n"], JAM.policy.p16);
  } else {
    var v108 = outputWindow.document;
    JAM.call(v108.write, v108, ['<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n" + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n" + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n" + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n" + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n" + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n" + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n" + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n" + 
    "td.many {color: #000000; background-color: #FFFFFF}\n" + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"], JAM.policy.p16);
  }
  var v110 = outputWindow.document;
  JAM.call(v110.write, v110, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$6 + " results</div>\n"], JAM.policy.p16);
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
  var v112 = outputWindow.document;
  JAM.call(v112.write, v112, ['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n' + "<head>\n" + "<title>Sequence Manipulation Suite</title>\n" + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n'], JAM.policy.p16);
  if (isBackground) {
    var v114 = outputWindow.document;
    JAM.call(v114.write, v114, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #FFFFFF; background-color: #000000}\n" + "span.sim {color: #FFFFFF; background-color: #666666}\n" + 
    "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n" + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n" + "span.c, span.m {color: #000000; background-color: #FFFF00}\n" + "span.s, span.t {color: #000000; background-color: #66FF00}\n" + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n" + "span.d, span.e {color: #000000; background-color: #0066FF}\n" + "span.n, span.q {color: #000000; background-color: #996633}\n" + "span.p {color: #000000; background-color: #FF99FF}\n" + 
    "</style>\n"], JAM.policy.p16);
  } else {
    var v116 = outputWindow.document;
    JAM.call(v116.write, v116, ['<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n" + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n" + "div.title {display: none}\n" + "div.info {font-weight: bold}\n" + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n" + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n" + 
    "span.diff {color: #999999; background-color: #FFFFFF}\n" + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n" + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n" + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n" + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n" + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n" + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n" + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n" + 
    "span.p {color: #00FFCC; background-color: #FFFFFF}\n" + "img {display: none}\n" + "</style>\n"], JAM.policy.p16);
  }
  var v118 = outputWindow.document;
  JAM.call(v118.write, v118, ["</head>\n" + '<body class="main">\n' + '<div class="title">' + title$$8 + " results</div>\n"], JAM.policy.p16);
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
function reverse(dnaSequence$$2) {
  var tempDnaArray = new Array;
  if (JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/./], JAM.policy.p17) != -1) {
    tempDnaArray = JAM.call(dnaSequence$$2.match, dnaSequence$$2, [/./g], JAM.policy.p17);
    tempDnaArray = tempDnaArray.reverse();
    dnaSequence$$2 = JAM.call(tempDnaArray.join, tempDnaArray, [""], JAM.policy.p9);
  }
  return dnaSequence$$2;
}
function rightNum(theNumber, sequenceToAppend, lengthOfColumn, tabIn) {
  var j$$5 = 0;
  var tempString = "";
  theNumber = theNumber.toString();
  j$$5 = theNumber.length;
  var v121 = j$$5 < lengthOfColumn;
  for (;v121;) {
    tempString = tempString + " ";
    j$$5++;
    v121 = j$$5 < lengthOfColumn;
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
  var v565 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p17) == -1;
  if (!v565) {
    v565 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p17) == -1;
  }
  var v502 = v565;
  if (!v502) {
    v502 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p17) == -1;
  }
  var v389 = v502;
  if (!v389) {
    v389 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p17) == -1;
  }
  if (v389) {
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
function verifyDna(dnaSequence$$3) {
  if (JAM.call(dnaSequence$$3.search, dnaSequence$$3, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p17) != -1) {
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
  var v568 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p17) == -1;
  if (!v568) {
    v568 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p17) == -1;
  }
  var v505 = v568;
  if (!v505) {
    v505 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p17) == -1;
  }
  var v394 = v505;
  if (!v394) {
    v394 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p17) == -1;
  }
  if (v394) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v571 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p17) == -1;
  if (!v571) {
    v571 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p17) == -1;
  }
  var v508 = v571;
  if (!v508) {
    v508 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p17) == -1;
  }
  var v395 = v508;
  if (!v395) {
    v395 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p17) == -1;
  }
  if (v395) {
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
  var v574 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p17) == -1;
  if (!v574) {
    v574 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p17) == -1;
  }
  var v511 = v574;
  if (!v511) {
    v511 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p17) == -1;
  }
  var v397 = v511;
  if (!v397) {
    v397 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p17) == -1;
  }
  if (v397) {
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
  var v148 = i$$5 < stopBase;
  for (;v148;) {
    lineOfText = rightNum(i$$5 + 1, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v145 = j$$6 <= basePerLine / groupSize;
    for (;v145;) {
      var v144 = k < groupSize;
      for (;v144;) {
        lineOfText = lineOfText + JAM.call(text$$10.charAt, text$$10, [k + i$$5], JAM.policy.p16);
        k = k + 1;
        v144 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      v145 = j$$6 <= basePerLine / groupSize;
    }
    var v146 = outputWindow.document;
    JAM.call(v146.write, v146, [lineOfText + "\n"], JAM.policy.p16);
    lineOfText = "";
    v148 = i$$5 < stopBase;
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
    var v402 = adjustment < 0;
    if (v402) {
      v402 = adjusted >= 0;
    }
    if (v402) {
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
  var v182 = i$$6 < stopBase$$2;
  for (;v182;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v158 = j$$7 <= basePerLine$$2 / groupSize$$2;
    for (;v158;) {
      var v153 = k$$1 < groupSize$$2;
      for (;v153;) {
        if (i$$6 + k$$1 >= stopBase$$2) {
          break;
        }
        lineOfText$$1 = lineOfText$$1 + JAM.call(text$$12.charAt, text$$12, [k$$1 + i$$6], JAM.policy.p16);
        k$$1 = k$$1 + 1;
        v153 = k$$1 < groupSize$$2;
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
      v158 = j$$7 <= basePerLine$$2 / groupSize$$2;
    }
    if (numberPosition$$1 == "left") {
      var v159 = outputWindow.document;
      JAM.call(v159.write, v159, [rightNum(JAM.call(adjustNumbering, null, [lineNum, numberingAdjustment], JAM.policy.p19), "", 8, tabIn$$3) + lineOfText$$1 + "\n"], JAM.policy.p16);
      if (strands$$1 == "two") {
        var v161 = outputWindow.document;
        JAM.call(v161.write, v161, [rightNum(JAM.call(adjustNumbering, null, [lineNum, numberingAdjustment], JAM.policy.p19), "", 8, tabIn$$3) + complement(lineOfText$$1) + "\n"], JAM.policy.p16);
        var v163 = outputWindow.document;
        JAM.call(v163.write, v163, ["\n"], JAM.policy.p9);
      }
    } else {
      if (numberPosition$$1 == "right") {
        var v165 = outputWindow.document;
        JAM.call(v165.write, v165, [lineOfText$$1 + JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p19) + "\n"], JAM.policy.p16);
        if (strands$$1 == "two") {
          var v167 = outputWindow.document;
          JAM.call(v167.write, v167, [complement(lineOfText$$1) + JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p19) + "\n"], JAM.policy.p16);
          var v169 = outputWindow.document;
          JAM.call(v169.write, v169, ["\n"], JAM.policy.p9);
        }
      } else {
        if (numberPosition$$1 == "above") {
          var v171 = outputWindow.document;
          JAM.call(v171.write, v171, [aboveNum + "\n"], JAM.policy.p16);
          var v173 = outputWindow.document;
          JAM.call(v173.write, v173, [lineOfText$$1 + "\n"], JAM.policy.p16);
          if (strands$$1 == "two") {
            var v175 = outputWindow.document;
            JAM.call(v175.write, v175, [complement(lineOfText$$1) + "\n"], JAM.policy.p16);
            var v177 = outputWindow.document;
            JAM.call(v177.write, v177, ["\n"], JAM.policy.p9);
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v182 = i$$6 < stopBase$$2;
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
  var v201 = i$$7 < stopBase$$3;
  for (;v201;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v189 = j$$8 <= basePerLine$$3 / groupSize$$3;
    for (;v189;) {
      var v185 = k$$2 < groupSize$$3;
      for (;v185;) {
        if (i$$7 + k$$2 >= stopBase$$3) {
          break;
        }
        lineOfText$$2 = lineOfText$$2 + JAM.call(text$$13.charAt, text$$13, [k$$2 + i$$7], JAM.policy.p16);
        k$$2 = k$$2 + 1;
        v185 = k$$2 < groupSize$$3;
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
      v189 = j$$8 <= basePerLine$$3 / groupSize$$3;
    }
    if (numberPosition$$2 == "left") {
      var v190 = outputWindow.document;
      JAM.call(v190.write, v190, [rightNum(lineNum$$1, "", 8, tabIn$$4) + lineOfText$$2 + "\n"], JAM.policy.p16);
    } else {
      if (numberPosition$$2 == "right") {
        var v192 = outputWindow.document;
        JAM.call(v192.write, v192, [lineOfText$$2 + i$$7 + "\n"], JAM.policy.p16);
      } else {
        if (numberPosition$$2 == "above") {
          var v194 = outputWindow.document;
          JAM.call(v194.write, v194, [aboveNum$$1 + "\n"], JAM.policy.p16);
          var v196 = outputWindow.document;
          JAM.call(v196.write, v196, [lineOfText$$2 + "\n"], JAM.policy.p16);
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v201 = i$$7 < stopBase$$3;
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
  var v522 = sequence$$13.length <= firstIndexToMutate;
  if (!v522) {
    v522 = lastIndexToMutate < 0;
  }
  var v419 = v522;
  if (!v419) {
    v419 = lastIndexToMutate <= firstIndexToMutate;
  }
  if (v419) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v210 = i$$8 < numMut;
  for (;v210;) {
    maxNum = sequence$$13.length;
    randNum = JAM.call(Math.floor, Math, [Math.random() * maxNum], JAM.policy.p17);
    var v421 = randNum < firstIndexToMutate;
    if (!v421) {
      v421 = randNum > lastIndexToMutate;
    }
    if (v421) {
      numMut++;
      i$$8++;
      v210 = i$$8 < numMut;
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
    v210 = i$$8 < numMut;
  }
  var v211 = outputWindow.document;
  JAM.call(v211.write, v211, [addReturns(sequence$$13)], JAM.policy.p16);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v217 = j$$9 < lengthOut$$1;
  for (;v217;) {
    tempNum$$1 = JAM.call(Math.floor, Math, [Math.random() * components$$2.length], JAM.policy.p17);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    if (sequence$$14.length == 60) {
      var v214 = outputWindow.document;
      JAM.call(v214.write, v214, [sequence$$14 + "\n"], JAM.policy.p16);
      sequence$$14 = "";
    }
    j$$9++;
    v217 = j$$9 < lengthOut$$1;
  }
  var v218 = outputWindow.document;
  JAM.call(v218.write, v218, [sequence$$14 + "\n"], JAM.policy.p16);
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
  var v224 = outputWindow.document;
  JAM.call(v224.write, v224, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p9);
  var v225 = outputWindow.document;
  JAM.call(v225.write, v225, ['<tr><td class="title" width="200px">' + "Site:" + '</td><td class="title">' + "Positions:" + "</td></tr>\n"], JAM.policy.p16);
  var i$$9 = 0;
  var v242 = i$$9 < arrayOfItems.length;
  for (;v242;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v436 = arrayOfItems[i$$9];
    matchExp = JAM.call(v436.match, v436, [/\/.+\//], JAM.policy.p17) + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    var v583 = arrayOfItems[i$$9];
    var v437 = JAM.call(v583.match, v583, [/\)\D*\d+/], JAM.policy.p17).toString();
    cutDistance = parseFloat(JAM.call(v437.replace, v437, [/\)\D*/, ""], JAM.policy.p15));
    var v234 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p16);
    for (;v234;) {
      matchPosition = matchExp.lastIndex - cutDistance;
      var v438 = matchPosition >= lowerLimit;
      if (v438) {
        v438 = matchPosition < upperLimit;
      }
      if (v438) {
        timesFound++;
        tempString$$1 = tempString$$1 + ", " + (matchPosition - shiftValue + 1);
      }
      matchExp.lastIndex = matchExp.lastIndex - RegExp.lastMatch.length + 1;
      v234 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p16);
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
    var v240 = outputWindow.document;
    var v649 = '<tr><td class="' + backGroundClass + '">';
    var v685 = arrayOfItems[i$$9];
    var v663 = JAM.call(v685.match, v685, [/\([^\(]+\)/], JAM.policy.p17).toString();
    JAM.call(v240.write, v240, [v649 + JAM.call(v663.replace, v663, [/\(|\)/g, ""], JAM.policy.p15) + '</td><td class="' + backGroundClass + '">' + tempString$$1 + "</td></tr>\n"], JAM.policy.p16);
    timesFound = 0;
    i$$9++;
    v242 = i$$9 < arrayOfItems.length;
  }
  var v243 = outputWindow.document;
  JAM.call(v243.write, v243, ["</tbody></table>\n"], JAM.policy.p9);
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v244 = outputWindow.document;
  JAM.call(v244.write, v244, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p9);
  var v245 = outputWindow.document;
  JAM.call(v245.write, v245, ['<tr><td class="title">' + "Pattern:" + '</td><td class="title">' + "Times found:" + '</td><td class="title">' + "Percentage:" + "</td></tr>\n"], JAM.policy.p16);
  var i$$10 = 0;
  var v255 = i$$10 < arrayOfItems$$1.length;
  for (;v255;) {
    var tempNumber = 0;
    var v447 = arrayOfItems$$1[i$$10];
    var matchExp$$1 = JAM.call(v447.match, v447, [/\/[^\/]+\//], JAM.policy.p17) + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    if (JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p16) != -1) {
      tempNumber = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p16).length;
    }
    var percentage = 0;
    var v532 = originalLength + 1;
    var v620 = arrayOfItems$$1[i$$10];
    if (v532 - parseFloat(JAM.call(v620.match, v620, [/\d+/], JAM.policy.p17)) > 0) {
      var v250 = 100 * tempNumber;
      var v450 = originalLength + 1;
      var v587 = arrayOfItems$$1[i$$10];
      percentage = v250 / (v450 - parseFloat(JAM.call(v587.match, v587, [/\d+/], JAM.policy.p17)));
    }
    var v253 = outputWindow.document;
    var v686 = arrayOfItems$$1[i$$10];
    var v664 = JAM.call(v686.match, v686, [/\([^\(]+\)\b/], JAM.policy.p17).toString();
    JAM.call(v253.write, v253, ["<tr><td>" + JAM.call(v664.replace, v664, [/\(|\)/g, ""], JAM.policy.p15) + "</td><td>" + tempNumber + "</td><td>" + JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p10) + "</td></tr>\n"], JAM.policy.p16);
    i$$10++;
    v255 = i$$10 < arrayOfItems$$1.length;
  }
  var v256 = outputWindow.document;
  JAM.call(v256.write, v256, ["</tbody></table>\n"], JAM.policy.p9);
  return true;
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v263 = sequence$$17.length > 0;
  for (;v263;) {
    maxNum$$1 = sequence$$17.length;
    randNum$$1 = JAM.call(Math.floor, Math, [Math.random() * maxNum$$1], JAM.policy.p17);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p17);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p13);
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [randNum$$1 + 1, sequence$$17.length], JAM.policy.p15);
    sequence$$17 = tempString1 + tempString2;
    if (tempSeq.length == 60) {
      var v260 = outputWindow.document;
      JAM.call(v260.write, v260, [tempSeq + "\n"], JAM.policy.p16);
      tempSeq = "";
    }
    v263 = sequence$$17.length > 0;
  }
  var v264 = outputWindow.document;
  JAM.call(v264.write, v264, [tempSeq + "\n"], JAM.policy.p16);
  return true;
}
function emblFasta(theDocument) {
  var newDna = "";
  var maxInput$$3 = 2E5;
  if (testScript() == false) {
    return false;
  }
  var v537 = checkFormElement(theDocument.forms[0].elements[0]) == false;
  if (!v537) {
    v537 = verifyEmbl(theDocument.forms[0].elements[0].value) == false;
  }
  var v459 = v537;
  if (!v459) {
    v459 = JAM.call(checkTextLength, null, [theDocument.forms[0].elements[0].value, maxInput$$3], JAM.policy.p19) == false;
  }
  if (v459) {
    return false;
  }
  openWindow("EMBL to FASTA");
  openPre();
  emblToFasta(theDocument.forms[0].elements[0].value);
  closePre();
  closeWindow();
  return true;
}
function emblToFasta(emblFile$$2) {
  var title$$9;
  emblFile$$2 = "_" + emblFile$$2 + "_";
  var recordArray = JAM.call(emblFile$$2.split, emblFile$$2, [/ID\s\s\s[^\f\n\r]*/], JAM.policy.p17);
  var i$$11 = 1;
  var v279 = i$$11 < recordArray.length;
  for (;v279;) {
    var v270 = recordArray[i$$11];
    var mainArray = JAM.call(v270.split, v270, [/[\f\n\r]\s*FH   Key             Location\/Qualifiers[\f\n\r]+\s*FH|[\f\n\r]\s*XX[\s]*[\f\n\r]\s*SQ[^\f\n\r]*/], JAM.policy.p17);
    var v541 = mainArray[0];
    if (JAM.call(v541.search, v541, [/[\f\n\r]\s*DE[^\f\n\r]+/], JAM.policy.p17) != -1) {
      var v542 = mainArray[0];
      var v271 = JAM.call(v542.match, v542, [/[\f\n\r]\s*DE[^\f\n\r]+/], JAM.policy.p17).toString();
      title$$9 = JAM.call(v271.replace, v271, [/[\f\n\r]\s*DE\s*/, ""], JAM.policy.p15);
    } else {
      title$$9 = "Untitled";
    }
    title$$9 = filterFastaTitle(JAM.call(title$$9.replace, title$$9, [/[\f\n\r\t]+$/g, ""], JAM.policy.p15)) + "\n";
    var v274 = mainArray[2];
    dnaArray = JAM.call(v274.split, v274, [/\/{2}/], JAM.policy.p17);
    if (dnaArray.length == 1) {
      alert("The entire EMBL file may not have been processed.");
      outputWindow.focus();
    }
    dnaSequence = removeNonDna(dnaArray[0]);
    var v277 = outputWindow.document;
    JAM.call(v277.write, v277, ["&gt;" + title$$9 + addReturns(dnaSequence) + "\n\n"], JAM.policy.p16);
    i$$11++;
    v279 = i$$11 < recordArray.length;
  }
  return true;
}
JAM.set(document, "onload", v2);
JAM.set(JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p9), "onclick", v3);
JAM.set(JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p9), "onclick", v4)
