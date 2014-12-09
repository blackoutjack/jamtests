
JAM.startProfile('load');
function v4() {
  var v1205 = document.forms;
  var v959 = v1205[0];
  var v550 = v959.elements;
  var v5 = v550[0];
  v5.value = " ";
  var v1206 = document.forms;
  var v960 = v1206[0];
  var v551 = v960.elements;
  var v6 = v551[4];
  v6.value = " ";
  return;
}
function v3() {
  try {
    pairwiseAlignDna(document);
  } catch (e$$5) {
    var v7 = "The following error was encountered: " + e$$5;
    alert(v7);
  }
  return;
}
function v2() {
  var v552 = document.main_form;
  var v8 = v552.main_submit;
  v8.focus();
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
  var v9 = arrayOfSequences[0];
  var lengthOfAlign = v9.length;
  var v553 = arrayOfSequences.length;
  var v10 = v553 < 2;
  if (v10) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v554 = arrayOfTitles.length;
  var v12 = i$$1 < v554;
  for (;v12;) {
    var v1353 = arrayOfTitles[i$$1];
    var v1207 = JAM.call(v1353.search, v1353, [/\S/], JAM.policy.p24);
    var v961 = v1207 == -1;
    var v1209 = !v961;
    if (v1209) {
      var v1354 = arrayOfSequences[i$$1];
      var v1208 = JAM.call(v1354.search, v1354, [/\S/], JAM.policy.p24);
      v961 = v1208 == -1;
    }
    var v555 = v961;
    var v963 = !v555;
    if (v963) {
      var v1210 = arrayOfSequences[i$$1];
      var v962 = v1210.length;
      v555 = v962 != lengthOfAlign;
    }
    var v11 = v555;
    if (v11) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v556 = arrayOfTitles.length;
    v12 = i$$1 < v556;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v1445 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p24);
  var v1355 = v1445 == -1;
  var v1447 = !v1355;
  if (v1447) {
    var v1446 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p24);
    v1355 = v1446 == -1;
  }
  var v1211 = v1355;
  var v1357 = !v1211;
  if (v1357) {
    var v1356 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p24);
    v1211 = v1356 == -1;
  }
  var v964 = v1211;
  var v1213 = !v964;
  if (v1213) {
    var v1212 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p24);
    v964 = v1212 == -1;
  }
  var v557 = v964;
  var v966 = !v557;
  if (v966) {
    var v965 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p24);
    v557 = v965 == -1;
  }
  var v13 = v557;
  if (v13) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v967 = formElement.value;
  var v558 = JAM.call(v967.search, v967, [/\S/], JAM.policy.p24);
  var v14 = v558 == -1;
  if (v14) {
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
  var v559 = arrayOfPatterns.length;
  var v17 = z$$2 < v559;
  for (;v17;) {
    var v968 = arrayOfPatterns[z$$2];
    var v560 = JAM.call(v968.search, v968, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p24);
    var v15 = v560 == -1;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v969 = arrayOfPatterns[z$$2];
    var v561 = moreExpressionCheck(v969);
    var v16 = v561 == false;
    if (v16) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v562 = arrayOfPatterns.length;
    v17 = z$$2 < v562;
  }
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v18);
  var v19 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v19);
  var j = 0;
  var v563 = arrayOfPatterns.length;
  var v23 = j < v563;
  for (;v23;) {
    var v970 = arrayOfPatterns[j];
    var v564 = JAM.call(v970.match, v970, [/\/.+\//], JAM.policy.p24);
    var v20 = v564 + "gi";
    if (JAM.isEval(eval)) {
      var v1572 = eval("introspect(JAM.policy.pFull) { " + v20 + " }")
    } else {
      var v1572 = JAM.call(eval, null, [v20])
    }
    geneticCodeMatchExp[j] = v1572;
    var v565 = arrayOfPatterns[j];
    var v21 = JAM.call(v565.match, v565, [/=[a-zA-Z\*]/], JAM.policy.p24);
    var v1573 = v21.toString();
    geneticCodeMatchResult[j] = v1573;
    var v22 = geneticCodeMatchResult[j];
    var v1574 = JAM.call(v22.replace, v22, [/=/g, ""], JAM.policy.p22);
    geneticCodeMatchResult[j] = v1574;
    j++;
    var v566 = arrayOfPatterns.length;
    v23 = j < v566;
  }
  var i$$2 = 0;
  var v971 = testSequence.length;
  var v567 = v971 - 3;
  var v30 = i$$2 <= v567;
  for (;v30;) {
    var v24 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v24], JAM.policy.p22);
    j = 0;
    var v568 = geneticCodeMatchExp.length;
    var v28 = j < v568;
    for (;v28;) {
      var v972 = geneticCodeMatchExp[j];
      var v569 = JAM.call(codon.search, codon, [v972], JAM.policy.p21);
      var v27 = v569 != -1;
      if (v27) {
        var v26 = oneMatch == true;
        if (v26) {
          var v570 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v25 = v570 + ".";
          alert(v25);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v571 = geneticCodeMatchExp.length;
      v28 = j < v571;
    }
    var v29 = oneMatch == false;
    if (v29) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v973 = testSequence.length;
    var v572 = v973 - 3;
    v30 = i$$2 <= v572;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v573 = arrayOfPatterns$$1.length;
  var v32 = z$$3 < v573;
  for (;v32;) {
    var v974 = arrayOfPatterns$$1[z$$3];
    var v574 = JAM.call(v974.search, v974, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p24);
    var v31 = v574 != -1;
    if (v31) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v575 = arrayOfPatterns$$1.length;
    v32 = z$$3 < v575;
  }
  var i$$3 = 0;
  var v576 = arrayOfPatterns$$1.length;
  var v36 = i$$3 < v576;
  for (;v36;) {
    var v975 = arrayOfPatterns$$1[i$$3];
    var v577 = "[" + v975;
    var v33 = v577 + "]";
    var re = new RegExp(v33, "gi");
    var j$$1 = i$$3 + 1;
    var v578 = arrayOfPatterns$$1.length;
    var v35 = j$$1 < v578;
    for (;v35;) {
      var v976 = arrayOfPatterns$$1[j$$1];
      var v579 = JAM.call(v976.search, v976, [re], JAM.policy.p21);
      var v34 = v579 != -1;
      if (v34) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v580 = arrayOfPatterns$$1.length;
      v35 = j$$1 < v580;
    }
    i$$3++;
    var v581 = arrayOfPatterns$$1.length;
    v36 = i$$3 < v581;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v582 = arrayOfPatterns$$2.length;
  var v39 = z$$4 < v582;
  for (;v39;) {
    var v977 = arrayOfPatterns$$2[z$$4];
    var v583 = JAM.call(v977.search, v977, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p24);
    var v37 = v583 == -1;
    if (v37) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v978 = arrayOfPatterns$$2[z$$4];
    var v584 = moreExpressionCheck(v978);
    var v38 = v584 == false;
    if (v38) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v585 = arrayOfPatterns$$2.length;
    v39 = z$$4 < v585;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v1214 = getSequenceFromFasta(text$$7);
  var v979 = JAM.call(v1214.replace, v1214, [/[^A-Za-z]/g, ""], JAM.policy.p22);
  var v586 = v979.length;
  var v41 = v586 > maxInput;
  if (v41) {
    var v587 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v40 = v587 + " characters.";
    alert(v40);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v588 = text$$8.length;
  var v43 = v588 > maxInput$$1;
  if (v43) {
    var v589 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v42 = v589 + " characters.";
    alert(v42);
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
  var v49 = outputWindow.document;
  v49.close();
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
  var v590 = alignArray.length;
  var v50 = v590 < 3;
  if (v50) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v591 = alignArray.length;
  var v52 = i$$4 < v591;
  for (;v52;) {
    var v980 = alignArray[i$$4];
    var v592 = JAM.call(v980.search, v980, [/[^\s]+\s/], JAM.policy.p24);
    var v51 = v592 == -1;
    if (v51) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v593 = alignArray.length;
    v52 = i$$4 < v593;
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
  var v594 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p24);
  var v55 = v594 != -1;
  if (v55) {
    var v54 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p21);
    for (;v54;) {
      var v53 = matchArray[0];
      JAM.call(arrayOfFasta.push, arrayOfFasta, [v53], JAM.policy.p21);
      v54 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p21);
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v595 = sequence$$2.length;
  var v56 = "&gt;results for " + v595;
  var stringToReturn = v56 + " residue sequence ";
  var v596 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p24);
  var v58 = v596 != -1;
  if (v58) {
    var v597 = stringToReturn + '"';
    var v57 = v597 + fastaSequenceTitle;
    stringToReturn = v57 + '"';
  }
  var v598 = stringToReturn + ' starting "';
  var v599 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p19);
  var v59 = v598 + v599;
  stringToReturn = v59 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v600 = sequenceOne.length;
  var v60 = "Search results for " + v600;
  var stringToReturn$$1 = v60 + " residue sequence ";
  var v601 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p24);
  var v62 = v601 != -1;
  if (v62) {
    var v602 = stringToReturn$$1 + '"';
    var v61 = v602 + fastaSequenceTitleOne;
    stringToReturn$$1 = v61 + '"';
  }
  var v603 = stringToReturn$$1 + ' starting "';
  var v604 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p19);
  var v63 = v603 + v604;
  stringToReturn$$1 = v63 + '"\n';
  var v605 = stringToReturn$$1 + "and ";
  var v606 = sequenceTwo.length;
  var v64 = v605 + v606;
  stringToReturn$$1 = v64 + " residue sequence ";
  var v607 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p24);
  var v66 = v607 != -1;
  if (v66) {
    var v608 = stringToReturn$$1 + '"';
    var v65 = v608 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v65 + '"';
  }
  var v609 = stringToReturn$$1 + ' starting "';
  var v610 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p19);
  var v67 = v609 + v610;
  stringToReturn$$1 = v67 + '"';
  var v68 = '<div class="info">' + stringToReturn$$1;
  return v68 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v69 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v69);
  var j$$2 = 0;
  var v611 = arrayOfPatterns$$3.length;
  var v71 = j$$2 < v611;
  for (;v71;) {
    var v981 = arrayOfPatterns$$3[j$$2];
    var v612 = JAM.call(v981.match, v981, [/\/.+\//], JAM.policy.p24);
    var v70 = v612 + "gi";
    if (JAM.isEval(eval)) {
      var v1575 = eval("introspect(JAM.policy.pFull) { " + v70 + " }")
    } else {
      var v1575 = JAM.call(eval, null, [v70])
    }
    geneticCodeMatchExp$$1[j$$2] = v1575;
    j$$2++;
    var v613 = arrayOfPatterns$$3.length;
    v71 = j$$2 < v613;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v72 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v72);
  var j$$3 = 0;
  var v614 = arrayOfPatterns$$4.length;
  var v75 = j$$3 < v614;
  for (;v75;) {
    var v615 = arrayOfPatterns$$4[j$$3];
    var v73 = JAM.call(v615.match, v615, [/=[a-zA-Z\*]/], JAM.policy.p24);
    var v1576 = v73.toString();
    geneticCodeMatchResult$$1[j$$3] = v1576;
    var v74 = geneticCodeMatchResult$$1[j$$3];
    var v1577 = JAM.call(v74.replace, v74, [/=/g, ""], JAM.policy.p22);
    geneticCodeMatchResult$$1[j$$3] = v1577;
    j$$3++;
    var v616 = arrayOfPatterns$$4.length;
    v75 = j$$3 < v616;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v617 = sequence$$3.length;
  var v76 = "Results for " + v617;
  var stringToReturn$$2 = v76 + " residue sequence ";
  var v618 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p24);
  var v78 = v618 != -1;
  if (v78) {
    var v619 = stringToReturn$$2 + '"';
    var v77 = v619 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v77 + '"';
  }
  var v620 = stringToReturn$$2 + ' starting "';
  var v621 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p19);
  var v79 = v620 + v621;
  stringToReturn$$2 = v79 + '"';
  var v80 = '<div class="info">' + stringToReturn$$2;
  return v80 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v982 = "Results for " + topology;
  var v622 = v982 + " ";
  var v623 = sequence$$4.length;
  var v81 = v622 + v623;
  var stringToReturn$$3 = v81 + " residue sequence ";
  var v624 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p24);
  var v83 = v624 != -1;
  if (v83) {
    var v625 = stringToReturn$$3 + '"';
    var v82 = v625 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v82 + '"';
  }
  var v626 = stringToReturn$$3 + ' starting "';
  var v627 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p19);
  var v84 = v626 + v627;
  stringToReturn$$3 = v84 + '"';
  var v85 = '<div class="info">' + stringToReturn$$3;
  return v85 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v628 = sequenceOne$$1.length;
  var v86 = "Alignment results for " + v628;
  var stringToReturn$$4 = v86 + " residue sequence ";
  var v629 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p24);
  var v88 = v629 != -1;
  if (v88) {
    var v630 = stringToReturn$$4 + '"';
    var v87 = v630 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v87 + '"';
  }
  var v631 = stringToReturn$$4 + ' starting "';
  var v632 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p19);
  var v89 = v631 + v632;
  stringToReturn$$4 = v89 + '"\n';
  var v633 = stringToReturn$$4 + "and ";
  var v634 = sequenceTwo$$1.length;
  var v90 = v633 + v634;
  stringToReturn$$4 = v90 + " residue sequence ";
  var v635 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p24);
  var v92 = v635 != -1;
  if (v92) {
    var v636 = stringToReturn$$4 + '"';
    var v91 = v636 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v91 + '"';
  }
  var v637 = stringToReturn$$4 + ' starting "';
  var v638 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p19);
  var v93 = v637 + v638;
  stringToReturn$$4 = v93 + '"';
  var v94 = '<div class="info">' + stringToReturn$$4;
  return v94 + "</div>\n";
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v96 = j$$4 < lengthOut;
  for (;v96;) {
    var v639 = Math.random();
    var v640 = components.length;
    var v95 = v639 * v640;
    tempNum = JAM.call(Math.floor, Math, [v95], JAM.policy.p24);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p21);
    j$$4++;
    v96 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p15);
}
function getSequenceFromFasta(sequenceRecord) {
  var v641 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p24);
  var v97 = v641 != -1;
  if (v97) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p22);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v642 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p24);
  var v99 = v642 != -1;
  if (v99) {
    var v98 = JAM.call(sequenceRecord$$1.match, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p22);
    fastaTitle = v98.toString();
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\>|[\f\n\r]/g, ""], JAM.policy.p22);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\s{2,}/g, " "], JAM.policy.p22);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/[\<\>]/gi, ""], JAM.policy.p22);
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  var v1550 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p24);
  var v1543 = v1550 != -1;
  var v1552 = !v1543;
  if (v1552) {
    var v1551 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p24);
    v1543 = v1551 != -1;
  }
  var v1533 = v1543;
  var v1545 = !v1533;
  if (v1545) {
    var v1544 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p24);
    v1533 = v1544 != -1;
  }
  var v1522 = v1533;
  var v1535 = !v1522;
  if (v1535) {
    var v1534 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p24);
    v1522 = v1534 != -1;
  }
  var v1507 = v1522;
  var v1524 = !v1507;
  if (v1524) {
    var v1523 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p24);
    v1507 = v1523 != -1;
  }
  var v1482 = v1507;
  var v1509 = !v1482;
  if (v1509) {
    var v1508 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p24);
    v1482 = v1508 != -1;
  }
  var v1448 = v1482;
  var v1484 = !v1448;
  if (v1484) {
    var v1483 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p24);
    v1448 = v1483 != -1;
  }
  var v1358 = v1448;
  var v1450 = !v1358;
  if (v1450) {
    var v1449 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p24);
    v1358 = v1449 != -1;
  }
  var v1215 = v1358;
  var v1360 = !v1215;
  if (v1360) {
    var v1359 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p24);
    v1215 = v1359 != -1;
  }
  var v983 = v1215;
  var v1217 = !v983;
  if (v1217) {
    var v1216 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p24);
    v983 = v1216 != -1;
  }
  var v643 = v983;
  var v985 = !v643;
  if (v985) {
    var v984 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p24);
    v643 = v984 != -1;
  }
  var v100 = v643;
  if (v100) {
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
  var v1218 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v986 = v1218 + "<head>\n";
  var v644 = v986 + "<title>Sequence Manipulation Suite</title>\n";
  var v106 = v644 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v105.write, v105, [v106], JAM.policy.p21);
  if (isColor) {
    var v107 = outputWindow.document;
    var v1565 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1561 = v1565 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1557 = v1561 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1553 = v1557 + "div.info {font-weight: bold}\n";
    var v1546 = v1553 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1536 = v1546 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v1525 = v1536 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v1510 = v1525 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1485 = v1510 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v1451 = v1485 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v1361 = v1451 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v1219 = v1361 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v987 = v1219 + "td.many {color: #000000}\n";
    var v645 = v987 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v108 = v645 + "</style>\n";
    JAM.call(v107.write, v107, [v108], JAM.policy.p21);
  } else {
    var v109 = outputWindow.document;
    var v1569 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1566 = v1569 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1562 = v1566 + "div.title {display: none}\n";
    var v1558 = v1562 + "div.info {font-weight: bold}\n";
    var v1554 = v1558 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1547 = v1554 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1537 = v1547 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v1526 = v1537 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1511 = v1526 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1486 = v1511 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1452 = v1486 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v1362 = v1452 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1220 = v1362 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v988 = v1220 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v646 = v988 + "img {display: none}\n";
    var v110 = v646 + "</style>\n";
    JAM.call(v109.write, v109, [v110], JAM.policy.p21);
  }
  var v111 = outputWindow.document;
  var v1221 = "</head>\n" + '<body class="main">\n';
  var v989 = v1221 + '<div class="title">';
  var v647 = v989 + title$$6;
  var v112 = v647 + " results</div>\n";
  JAM.call(v111.write, v111, [v112], JAM.policy.p21);
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
  var v1222 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v990 = v1222 + "<head>\n";
  var v648 = v990 + "<title>Sequence Manipulation Suite</title>\n";
  var v114 = v648 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v113.write, v113, [v114], JAM.policy.p21);
  if (isBackground) {
    var v115 = outputWindow.document;
    var v1567 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1563 = v1567 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1559 = v1563 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1555 = v1559 + "div.info {font-weight: bold}\n";
    var v1548 = v1555 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v1538 = v1548 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v1527 = v1538 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v1512 = v1527 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v1487 = v1512 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v1453 = v1487 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v1363 = v1453 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v1223 = v1363 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v991 = v1223 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v649 = v991 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v116 = v649 + "</style>\n";
    JAM.call(v115.write, v115, [v116], JAM.policy.p21);
  } else {
    var v117 = outputWindow.document;
    var v1571 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1570 = v1571 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1568 = v1570 + "div.title {display: none}\n";
    var v1564 = v1568 + "div.info {font-weight: bold}\n";
    var v1560 = v1564 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1556 = v1560 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v1549 = v1556 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v1539 = v1549 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v1528 = v1539 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v1513 = v1528 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v1488 = v1513 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v1454 = v1488 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v1364 = v1454 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v1224 = v1364 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v992 = v1224 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v650 = v992 + "img {display: none}\n";
    var v118 = v650 + "</style>\n";
    JAM.call(v117.write, v117, [v118], JAM.policy.p21);
  }
  var v119 = outputWindow.document;
  var v1225 = "</head>\n" + '<body class="main">\n';
  var v993 = v1225 + '<div class="title">';
  var v651 = v993 + title$$8;
  var v120 = v651 + " results</div>\n";
  JAM.call(v119.write, v119, [v120], JAM.policy.p21);
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
  var v652 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p24);
  var v121 = v652 != -1;
  if (v121) {
    tempDnaArray = JAM.call(dnaSequence$$1.match, dnaSequence$$1, [/./g], JAM.policy.p24);
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
  var v123 = tempString + theNumber;
  theNumber = v123 + " ";
  var v124 = sequenceToAppend + theNumber;
  sequenceToAppend = v124 + tabIn;
  return sequenceToAppend;
}
function testScript() {
  function v1(str$$7, p1$$1, offset$$9, s$$3) {
    return p1$$1 + "X";
  }
  var testArray = new Array;
  var testString = "1234567890";
  JAM.call(testArray.push, testArray, [testString], JAM.policy.p21);
  var v653 = testArray[0];
  var v125 = v653 != testString;
  if (v125) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v654 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p21);
  var v126 = v654 == -1;
  if (v126) {
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
  var v127 = !caughtException;
  if (v127) {
    alert("Exception handling not supported. See browser compatibility page.");
  }
  testString = "123";
  testString = JAM.call(testString.replace, testString, [/(\d)/g, v1], JAM.policy.p22);
  var v128 = testString != "1X2X3X";
  if (v128) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false;
  }
  var testNum = 2489.8237;
  var v655 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p17);
  var v129 = v655 != 2489.824;
  if (v129) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v656 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p17);
  var v130 = v656 != 2489.8;
  if (v130) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v657 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p24);
  var v131 = v657 == -1;
  if (v131) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v1365 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p24);
  var v1226 = v1365 == -1;
  var v1367 = !v1226;
  if (v1367) {
    var v1366 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p24);
    v1226 = v1366 == -1;
  }
  var v994 = v1226;
  var v1228 = !v994;
  if (v1228) {
    var v1227 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p24);
    v994 = v1227 == -1;
  }
  var v658 = v994;
  var v996 = !v658;
  if (v996) {
    var v995 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p24);
    v658 = v995 == -1;
  }
  var v132 = v658;
  if (v132) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v659 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p24);
  var v133 = v659 == -1;
  if (v133) {
    alert("Please enter a number.");
    return false;
  }
  var v135 = theNumber$$2 > maxInput$$2;
  if (v135) {
    var v660 = "Please enter a number less than or equal to " + maxInput$$2;
    var v134 = v660 + ".";
    alert(v134);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v661 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p24);
  var v136 = v661 != -1;
  if (v136) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v662 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p24);
  var v137 = v662 != -1;
  if (v137) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v1368 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p24);
  var v1229 = v1368 == -1;
  var v1370 = !v1229;
  if (v1370) {
    var v1369 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p24);
    v1229 = v1369 == -1;
  }
  var v997 = v1229;
  var v1231 = !v997;
  if (v1231) {
    var v1230 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p24);
    v997 = v1230 == -1;
  }
  var v663 = v997;
  var v999 = !v663;
  if (v999) {
    var v998 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p24);
    v663 = v998 == -1;
  }
  var v138 = v663;
  if (v138) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v1371 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p24);
  var v1232 = v1371 == -1;
  var v1373 = !v1232;
  if (v1373) {
    var v1372 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p24);
    v1232 = v1372 == -1;
  }
  var v1000 = v1232;
  var v1234 = !v1000;
  if (v1234) {
    var v1233 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p24);
    v1000 = v1233 == -1;
  }
  var v664 = v1000;
  var v1002 = !v664;
  if (v1002) {
    var v1001 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p24);
    v664 = v1001 == -1;
  }
  var v139 = v664;
  if (v139) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v665 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p24);
  var v140 = v665 == -1;
  if (v140) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v1374 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p24);
  var v1235 = v1374 == -1;
  var v1376 = !v1235;
  if (v1376) {
    var v1375 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p24);
    v1235 = v1375 == -1;
  }
  var v1003 = v1235;
  var v1237 = !v1003;
  if (v1237) {
    var v1236 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p24);
    v1003 = v1236 == -1;
  }
  var v666 = v1003;
  var v1005 = !v666;
  if (v1005) {
    var v1004 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p24);
    v666 = v1004 == -1;
  }
  var v141 = v666;
  if (v141) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v667 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p24);
  var v142 = v667 == -1;
  if (v142) {
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
    var v143 = i$$5 + 1;
    lineOfText = rightNum(v143, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v668 = basePerLine / groupSize;
    var v146 = j$$6 <= v668;
    for (;v146;) {
      var v145 = k < groupSize;
      for (;v145;) {
        var v669 = k + i$$5;
        var v144 = JAM.call(text$$10.charAt, text$$10, [v669], JAM.policy.p21);
        lineOfText = lineOfText + v144;
        k = k + 1;
        v145 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v670 = basePerLine / groupSize;
      v146 = j$$6 <= v670;
    }
    var v147 = outputWindow.document;
    var v148 = lineOfText + "\n";
    JAM.call(v147.write, v147, [v148], JAM.policy.p21);
    lineOfText = "";
    v149 = i$$5 < stopBase;
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
    var v671 = adjustment < 0;
    if (v671) {
      v671 = adjusted >= 0;
    }
    var v150 = v671;
    if (v150) {
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
    var v672 = basePerLine$$2 / groupSize$$2;
    var v159 = j$$7 <= v672;
    for (;v159;) {
      var v154 = k$$1 < groupSize$$2;
      for (;v154;) {
        var v673 = i$$6 + k$$1;
        var v151 = v673 >= stopBase$$2;
        if (v151) {
          break;
        }
        var v152 = lineOfText$$1;
        var v674 = k$$1 + i$$6;
        var v153 = JAM.call(text$$12.charAt, text$$12, [v674], JAM.policy.p21);
        lineOfText$$1 = v152 + v153;
        k$$1 = k$$1 + 1;
        v154 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v157 = numberPosition$$1 == "above";
      if (v157) {
        var v155 = aboveNum;
        var v675 = adjustNumbering(i$$6, numberingAdjustment);
        var v156 = rightNum(v675, "", groupSize$$2, tabIn$$3);
        aboveNum = v155 + v156;
      }
      var v158 = i$$6 >= stopBase$$2;
      if (v158) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v676 = basePerLine$$2 / groupSize$$2;
      v159 = j$$7 <= v676;
    }
    var v182 = numberPosition$$1 == "left";
    if (v182) {
      var v160 = outputWindow.document;
      var v1238 = adjustNumbering(lineNum, numberingAdjustment);
      var v1006 = rightNum(v1238, "", 8, tabIn$$3);
      var v677 = v1006 + lineOfText$$1;
      var v161 = v677 + "\n";
      JAM.call(v160.write, v160, [v161], JAM.policy.p21);
      var v165 = strands$$1 == "two";
      if (v165) {
        var v162 = outputWindow.document;
        var v1239 = adjustNumbering(lineNum, numberingAdjustment);
        var v1007 = rightNum(v1239, "", 8, tabIn$$3);
        var v1008 = complement(lineOfText$$1);
        var v678 = v1007 + v1008;
        var v163 = v678 + "\n";
        JAM.call(v162.write, v162, [v163], JAM.policy.p21);
        var v164 = outputWindow.document;
        JAM.call(v164.write, v164, ["\n"], JAM.policy.p15);
      }
    } else {
      var v181 = numberPosition$$1 == "right";
      if (v181) {
        var v166 = outputWindow.document;
        var v1009 = lineOfText$$1;
        var v1010 = adjustNumbering(i$$6, numberingAdjustment);
        var v679 = v1009 + v1010;
        var v167 = v679 + "\n";
        JAM.call(v166.write, v166, [v167], JAM.policy.p21);
        var v171 = strands$$1 == "two";
        if (v171) {
          var v168 = outputWindow.document;
          var v1011 = complement(lineOfText$$1);
          var v1012 = adjustNumbering(i$$6, numberingAdjustment);
          var v680 = v1011 + v1012;
          var v169 = v680 + "\n";
          JAM.call(v168.write, v168, [v169], JAM.policy.p21);
          var v170 = outputWindow.document;
          JAM.call(v170.write, v170, ["\n"], JAM.policy.p15);
        }
      } else {
        var v180 = numberPosition$$1 == "above";
        if (v180) {
          var v172 = outputWindow.document;
          var v173 = aboveNum + "\n";
          JAM.call(v172.write, v172, [v173], JAM.policy.p21);
          var v174 = outputWindow.document;
          var v175 = lineOfText$$1 + "\n";
          JAM.call(v174.write, v174, [v175], JAM.policy.p21);
          var v179 = strands$$1 == "two";
          if (v179) {
            var v176 = outputWindow.document;
            var v681 = complement(lineOfText$$1);
            var v177 = v681 + "\n";
            JAM.call(v176.write, v176, [v177], JAM.policy.p21);
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
    var v682 = basePerLine$$3 / groupSize$$3;
    var v190 = j$$8 <= v682;
    for (;v190;) {
      var v186 = k$$2 < groupSize$$3;
      for (;v186;) {
        var v683 = i$$7 + k$$2;
        var v184 = v683 >= stopBase$$3;
        if (v184) {
          break;
        }
        var v684 = k$$2 + i$$7;
        var v185 = JAM.call(text$$13.charAt, text$$13, [v684], JAM.policy.p21);
        lineOfText$$2 = lineOfText$$2 + v185;
        k$$2 = k$$2 + 1;
        v186 = k$$2 < groupSize$$3;
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v188 = numberPosition$$2 == "above";
      if (v188) {
        var v187 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = aboveNum$$1 + v187;
      }
      var v189 = i$$7 >= stopBase$$3;
      if (v189) {
        break;
      }
      k$$2 = 0;
      j$$8++;
      var v685 = basePerLine$$3 / groupSize$$3;
      v190 = j$$8 <= v685;
    }
    var v201 = numberPosition$$2 == "left";
    if (v201) {
      var v191 = outputWindow.document;
      var v1013 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v686 = v1013 + lineOfText$$2;
      var v192 = v686 + "\n";
      JAM.call(v191.write, v191, [v192], JAM.policy.p21);
    } else {
      var v200 = numberPosition$$2 == "right";
      if (v200) {
        var v193 = outputWindow.document;
        var v687 = lineOfText$$2 + i$$7;
        var v194 = v687 + "\n";
        JAM.call(v193.write, v193, [v194], JAM.policy.p21);
      } else {
        var v199 = numberPosition$$2 == "above";
        if (v199) {
          var v195 = outputWindow.document;
          var v196 = aboveNum$$1 + "\n";
          JAM.call(v195.write, v195, [v196], JAM.policy.p21);
          var v197 = outputWindow.document;
          var v198 = lineOfText$$2 + "\n";
          JAM.call(v197.write, v197, [v198], JAM.policy.p21);
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
  var v1240 = sequence$$13.length;
  var v1014 = v1240 <= firstIndexToMutate;
  var v1241 = !v1014;
  if (v1241) {
    v1014 = lastIndexToMutate < 0;
  }
  var v688 = v1014;
  var v1015 = !v688;
  if (v1015) {
    v688 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v203 = v688;
  if (v203) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v211 = i$$8 < numMut;
  for (;v211;) {
    maxNum = sequence$$13.length;
    var v689 = Math.random();
    var v204 = v689 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v204], JAM.policy.p24);
    var v690 = randNum < firstIndexToMutate;
    var v1016 = !v690;
    if (v1016) {
      v690 = randNum > lastIndexToMutate;
    }
    var v205 = v690;
    if (v205) {
      numMut++;
      i$$8++;
      v211 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p24);
    needNewChar = true;
    for (;needNewChar;) {
      var v691 = Math.random();
      var v692 = components$$1.length;
      var v206 = v691 * v692;
      componentsIndex = JAM.call(Math.round, Math, [v206], JAM.policy.p24);
      var v693 = components$$1.length;
      var v207 = componentsIndex == v693;
      if (v207) {
        componentsIndex = 0;
      }
      var v694 = components$$1[componentsIndex];
      var v208 = v694 != currentChar;
      if (v208) {
        needNewChar = false;
      }
    }
    var v695 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p19);
    var v696 = components$$1[componentsIndex];
    var v209 = v695 + v696;
    var v697 = randNum + 1;
    var v698 = sequence$$13.length;
    var v210 = JAM.call(sequence$$13.substring, sequence$$13, [v697, v698], JAM.policy.p33);
    sequence$$13 = v209 + v210;
    i$$8++;
    v211 = i$$8 < numMut;
  }
  var v212 = outputWindow.document;
  var v213 = addReturns(sequence$$13);
  JAM.call(v212.write, v212, [v213], JAM.policy.p21);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v218 = j$$9 < lengthOut$$1;
  for (;v218;) {
    var v699 = Math.random();
    var v700 = components$$2.length;
    var v214 = v699 * v700;
    tempNum$$1 = JAM.call(Math.floor, Math, [v214], JAM.policy.p24);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v701 = sequence$$14.length;
    var v217 = v701 == 60;
    if (v217) {
      var v215 = outputWindow.document;
      var v216 = sequence$$14 + "\n";
      JAM.call(v215.write, v215, [v216], JAM.policy.p21);
      sequence$$14 = "";
    }
    j$$9++;
    v218 = j$$9 < lengthOut$$1;
  }
  var v219 = outputWindow.document;
  var v220 = sequence$$14 + "\n";
  JAM.call(v219.write, v219, [v220], JAM.policy.p21);
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
  var v224 = dnaConformation == "circular";
  if (v224) {
    var v221 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p19);
    shiftValue = v221.length;
    var v1242 = sequence$$15.length;
    var v1017 = v1242 - lookAhead;
    var v1018 = sequence$$15.length;
    var v702 = JAM.call(sequence$$15.substring, sequence$$15, [v1017, v1018], JAM.policy.p33);
    var v222 = v702 + sequence$$15;
    var v223 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p19);
    sequence$$15 = v222 + v223;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v225 = outputWindow.document;
  JAM.call(v225.write, v225, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p15);
  var v226 = outputWindow.document;
  var v1243 = '<tr><td class="title" width="200px">' + "Site:";
  var v1019 = v1243 + '</td><td class="title">';
  var v703 = v1019 + "Positions:";
  var v227 = v703 + "</td></tr>\n";
  JAM.call(v226.write, v226, [v227], JAM.policy.p21);
  var i$$9 = 0;
  var v704 = arrayOfItems.length;
  var v243 = i$$9 < v704;
  for (;v243;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v705 = arrayOfItems[i$$9];
    var v228 = JAM.call(v705.match, v705, [/\/.+\//], JAM.policy.p24);
    matchExp = v228 + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    var v1244 = arrayOfItems[i$$9];
    var v1020 = JAM.call(v1244.match, v1244, [/\)\D*\d+/], JAM.policy.p24);
    var v706 = v1020.toString();
    var v229 = JAM.call(v706.replace, v706, [/\)\D*/, ""], JAM.policy.p22);
    cutDistance = parseFloat(v229);
    var v235 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p21);
    for (;v235;) {
      var v230 = matchExp.lastIndex;
      matchPosition = v230 - cutDistance;
      var v707 = matchPosition >= lowerLimit;
      if (v707) {
        v707 = matchPosition < upperLimit;
      }
      var v233 = v707;
      if (v233) {
        timesFound++;
        var v231 = tempString$$1 + ", ";
        var v708 = matchPosition - shiftValue;
        var v232 = v708 + 1;
        tempString$$1 = v231 + v232;
      }
      var v709 = matchExp.lastIndex;
      var v1021 = RegExp.lastMatch;
      var v710 = v1021.length;
      var v234 = v709 - v710;
      matchExp.lastIndex = v234 + 1;
      v235 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p21);
    }
    var v711 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p24);
    var v236 = v711 != -1;
    if (v236) {
      tempString$$1 = JAM.call(tempString$$1.replace, tempString$$1, [/none,\s*/, ""], JAM.policy.p22);
    }
    var v240 = timesFound == 0;
    if (v240) {
      backGroundClass = "none";
    } else {
      var v239 = timesFound == 1;
      if (v239) {
        backGroundClass = "one";
      } else {
        var v238 = timesFound == 2;
        if (v238) {
          backGroundClass = "two";
        } else {
          var v237 = timesFound == 3;
          if (v237) {
            backGroundClass = "three";
          } else {
            backGroundClass = "many";
          }
        }
      }
    }
    var v241 = outputWindow.document;
    var v1514 = '<tr><td class="' + backGroundClass;
    var v1489 = v1514 + '">';
    var v1540 = arrayOfItems[i$$9];
    var v1529 = JAM.call(v1540.match, v1540, [/\([^\(]+\)/], JAM.policy.p24);
    var v1515 = v1529.toString();
    var v1490 = JAM.call(v1515.replace, v1515, [/\(|\)/g, ""], JAM.policy.p22);
    var v1455 = v1489 + v1490;
    var v1377 = v1455 + '</td><td class="';
    var v1245 = v1377 + backGroundClass;
    var v1022 = v1245 + '">';
    var v712 = v1022 + tempString$$1;
    var v242 = v712 + "</td></tr>\n";
    JAM.call(v241.write, v241, [v242], JAM.policy.p21);
    timesFound = 0;
    i$$9++;
    var v713 = arrayOfItems.length;
    v243 = i$$9 < v713;
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
  var v1456 = '<tr><td class="title">' + "Pattern:";
  var v1378 = v1456 + '</td><td class="title">';
  var v1246 = v1378 + "Times found:";
  var v1023 = v1246 + '</td><td class="title">';
  var v714 = v1023 + "Percentage:";
  var v247 = v714 + "</td></tr>\n";
  JAM.call(v246.write, v246, [v247], JAM.policy.p21);
  var i$$10 = 0;
  var v715 = arrayOfItems$$1.length;
  var v256 = i$$10 < v715;
  for (;v256;) {
    var tempNumber = 0;
    var v716 = arrayOfItems$$1[i$$10];
    var v248 = JAM.call(v716.match, v716, [/\/[^\/]+\//], JAM.policy.p24);
    var matchExp$$1 = v248 + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    var v717 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p21);
    var v250 = v717 != -1;
    if (v250) {
      var v249 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p21);
      tempNumber = v249.length;
    }
    var percentage = 0;
    var v1024 = originalLength + 1;
    var v1379 = arrayOfItems$$1[i$$10];
    var v1247 = JAM.call(v1379.match, v1379, [/\d+/], JAM.policy.p24);
    var v1025 = parseFloat(v1247);
    var v718 = v1024 - v1025;
    var v253 = v718 > 0;
    if (v253) {
      var v251 = 100 * tempNumber;
      var v719 = originalLength + 1;
      var v1248 = arrayOfItems$$1[i$$10];
      var v1026 = JAM.call(v1248.match, v1248, [/\d+/], JAM.policy.p24);
      var v720 = parseFloat(v1026);
      var v252 = v719 - v720;
      percentage = v251 / v252;
    }
    var v254 = outputWindow.document;
    var v1541 = arrayOfItems$$1[i$$10];
    var v1530 = JAM.call(v1541.match, v1541, [/\([^\(]+\)\b/], JAM.policy.p24);
    var v1516 = v1530.toString();
    var v1491 = JAM.call(v1516.replace, v1516, [/\(|\)/g, ""], JAM.policy.p22);
    var v1457 = "<tr><td>" + v1491;
    var v1380 = v1457 + "</td><td>";
    var v1249 = v1380 + tempNumber;
    var v1027 = v1249 + "</td><td>";
    var v1028 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p17);
    var v721 = v1027 + v1028;
    var v255 = v721 + "</td></tr>\n";
    JAM.call(v254.write, v254, [v255], JAM.policy.p21);
    i$$10++;
    var v722 = arrayOfItems$$1.length;
    v256 = i$$10 < v722;
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
  var v723 = sequence$$17.length;
  var v264 = v723 > 0;
  for (;v264;) {
    maxNum$$1 = sequence$$17.length;
    var v724 = Math.random();
    var v258 = v724 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v258], JAM.policy.p24);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p24);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p19);
    var v259 = randNum$$1 + 1;
    var v260 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v259, v260], JAM.policy.p22);
    sequence$$17 = tempString1 + tempString2;
    var v725 = tempSeq.length;
    var v263 = v725 == 60;
    if (v263) {
      var v261 = outputWindow.document;
      var v262 = tempSeq + "\n";
      JAM.call(v261.write, v261, [v262], JAM.policy.p21);
      tempSeq = "";
    }
    var v726 = sequence$$17.length;
    v264 = v726 > 0;
  }
  var v265 = outputWindow.document;
  var v266 = tempSeq + "\n";
  JAM.call(v265.write, v265, [v266], JAM.policy.p21);
  return true;
}
function pairwiseAlignDna(theDocument) {
  JAM.startProfile('compute');

  var newDnaOne = "";
  var titleOne = "";
  var newDnaTwo = "";
  var titleTwo = "";
  var maxInput$$3 = 2E3;
  var v727 = testScript();
  var v267 = v727 == false;
  if (v267) {
    return false;
  }
  var v1531 = theDocument.forms;
  var v1517 = v1531[0];
  var v1492 = v1517.elements;
  var v1458 = v1492[0];
  var v1381 = checkFormElement(v1458);
  var v1250 = v1381 == false;
  var v1383 = !v1250;
  if (v1383) {
    var v1542 = theDocument.forms;
    var v1532 = v1542[0];
    var v1518 = v1532.elements;
    var v1493 = v1518[0];
    var v1459 = v1493.value;
    var v1382 = checkSequenceLength(v1459, maxInput$$3);
    v1250 = v1382 == false;
  }
  var v1029 = v1250;
  var v1252 = !v1029;
  if (v1252) {
    var v1519 = theDocument.forms;
    var v1494 = v1519[0];
    var v1460 = v1494.elements;
    var v1384 = v1460[1];
    var v1251 = checkFormElement(v1384);
    v1029 = v1251 == false;
  }
  var v728 = v1029;
  var v1031 = !v728;
  if (v1031) {
    var v1520 = theDocument.forms;
    var v1495 = v1520[0];
    var v1461 = v1495.elements;
    var v1385 = v1461[1];
    var v1253 = v1385.value;
    var v1030 = checkSequenceLength(v1253, maxInput$$3);
    v728 = v1030 == false;
  }
  var v268 = v728;
  if (v268) {
    return false;
  }
  var v1496 = theDocument.forms;
  var v1462 = v1496[0];
  var v1386 = v1462.elements;
  var v1254 = v1386[5];
  var v1032 = v1254.options;
  var v1497 = theDocument.forms;
  var v1463 = v1497[0];
  var v1387 = v1463.elements;
  var v1255 = v1387[5];
  var v1033 = v1255.selectedIndex;
  var v729 = v1032[v1033];
  var v269 = v729.value;
  var MATCH_SCORE = parseInt(v269);
  var v1498 = theDocument.forms;
  var v1464 = v1498[0];
  var v1388 = v1464.elements;
  var v1256 = v1388[6];
  var v1034 = v1256.options;
  var v1499 = theDocument.forms;
  var v1465 = v1499[0];
  var v1389 = v1465.elements;
  var v1257 = v1389[6];
  var v1035 = v1257.selectedIndex;
  var v730 = v1034[v1035];
  var v270 = v730.value;
  var MISMATCH_SCORE = parseInt(v270);
  var v1500 = theDocument.forms;
  var v1466 = v1500[0];
  var v1390 = v1466.elements;
  var v1258 = v1390[7];
  var v1036 = v1258.options;
  var v1501 = theDocument.forms;
  var v1467 = v1501[0];
  var v1391 = v1467.elements;
  var v1259 = v1391[7];
  var v1037 = v1259.selectedIndex;
  var v731 = v1036[v1037];
  var v271 = v731.value;
  var BEGIN_GAP_PENALTY = parseInt(v271);
  var v1502 = theDocument.forms;
  var v1468 = v1502[0];
  var v1392 = v1468.elements;
  var v1260 = v1392[8];
  var v1038 = v1260.options;
  var v1503 = theDocument.forms;
  var v1469 = v1503[0];
  var v1393 = v1469.elements;
  var v1261 = v1393[8];
  var v1039 = v1261.selectedIndex;
  var v732 = v1038[v1039];
  var v272 = v732.value;
  var GAP_PENALTY = parseInt(v272);
  var v1504 = theDocument.forms;
  var v1470 = v1504[0];
  var v1394 = v1470.elements;
  var v1262 = v1394[9];
  var v1040 = v1262.options;
  var v1505 = theDocument.forms;
  var v1471 = v1505[0];
  var v1395 = v1471.elements;
  var v1263 = v1395[9];
  var v1041 = v1263.selectedIndex;
  var v733 = v1040[v1041];
  var v273 = v733.value;
  var END_GAP_PENALTY = parseInt(v273);
  openWindow("Pairwise Align DNA");
  openPre();
  var v1396 = theDocument.forms;
  var v1264 = v1396[0];
  var v1042 = v1264.elements;
  var v734 = v1042[0];
  var v274 = v734.value;
  newDnaOne = getSequenceFromFasta(v274);
  newDnaOne = removeNonDna(newDnaOne);
  var v1397 = theDocument.forms;
  var v1265 = v1397[0];
  var v1043 = v1265.elements;
  var v735 = v1043[0];
  var v275 = v735.value;
  titleOne = getTitleFromFasta(v275);
  var v1398 = theDocument.forms;
  var v1266 = v1398[0];
  var v1044 = v1266.elements;
  var v736 = v1044[1];
  var v276 = v736.value;
  newDnaTwo = getSequenceFromFasta(v276);
  newDnaTwo = removeNonDna(newDnaTwo);
  var v1399 = theDocument.forms;
  var v1267 = v1399[0];
  var v1045 = v1267.elements;
  var v737 = v1045[1];
  var v277 = v737.value;
  titleTwo = getTitleFromFasta(v277);
  var v278 = outputWindow.document;
  var v279 = getPairwiseAlignTitle(titleOne, newDnaOne, titleTwo, newDnaTwo);
  JAM.call(v278.write, v278, [v279], JAM.policy.p21);
  var v738 = JAM.call(newDnaOne.search, newDnaOne, [/./], JAM.policy.p24);
  var v280 = v738 != -1;
  if (v280) {
    newDnaOne = JAM.call(newDnaOne.match, newDnaOne, [/./g], JAM.policy.p24);
  }
  var v739 = JAM.call(newDnaTwo.search, newDnaTwo, [/./], JAM.policy.p24);
  var v281 = v739 != -1;
  if (v281) {
    newDnaTwo = JAM.call(newDnaTwo.match, newDnaTwo, [/./g], JAM.policy.p24);
  }
  pairwiseDna(titleOne, newDnaOne, titleTwo, newDnaTwo, MATCH_SCORE, MISMATCH_SCORE, GAP_PENALTY, BEGIN_GAP_PENALTY, END_GAP_PENALTY);
  closePre();
  closeWindow();

  JAM.stopProfile('compute');
  return true;
}
function pairwiseDna(titleOne$$1, newDnaOne$$1, titleTwo$$1, newDnaTwo$$1, matchScore, mismatchScore, gapPenalty, beginGapPenalty, endGapPenalty) {
  var useLinearSpace = true;
  var useQuadraticSpace = false;
  var matrix = new Identity;
  JAM.call(matrix.setMatch, matrix, [matchScore], JAM.policy.p21);
  JAM.call(matrix.setMismatch, matrix, [mismatchScore], JAM.policy.p21);
  var scoreSet = new ScoreSet;
  JAM.call(scoreSet.setScoreSetParam, scoreSet, [matrix, gapPenalty, beginGapPenalty, endGapPenalty], JAM.policy.p33);
  var alignment;
  if (useLinearSpace) {
    alignment = new AlignPairLinear;
    JAM.call(alignment.setAlignParam, alignment, [newDnaOne$$1, newDnaTwo$$1, scoreSet], JAM.policy.p33);
    alignment.align();
    var v282 = outputWindow.document;
    var v740 = ">" + titleOne$$1;
    var v283 = v740 + "\n";
    JAM.call(v282.write, v282, [v283], JAM.policy.p21);
    var v284 = outputWindow.document;
    var v741 = alignment.getAlignedM();
    var v285 = addReturns(v741);
    JAM.call(v284.write, v284, [v285], JAM.policy.p21);
    var v286 = outputWindow.document;
    JAM.call(v286.write, v286, ["\n"], JAM.policy.p15);
    var v287 = outputWindow.document;
    JAM.call(v287.write, v287, ["\n"], JAM.policy.p15);
    var v288 = outputWindow.document;
    var v742 = ">" + titleTwo$$1;
    var v289 = v742 + "\n";
    JAM.call(v288.write, v288, [v289], JAM.policy.p21);
    var v290 = outputWindow.document;
    var v743 = alignment.getAlignedN();
    var v291 = addReturns(v743);
    JAM.call(v290.write, v290, [v291], JAM.policy.p21);
    var v292 = outputWindow.document;
    JAM.call(v292.write, v292, ["\n\n"], JAM.policy.p15);
    var v293 = outputWindow.document;
    var v1046 = alignment.score;
    var v744 = "Alignment score: " + v1046;
    var v294 = v744 + "\n\n";
    JAM.call(v293.write, v293, [v294], JAM.policy.p21);
  }
  if (useQuadraticSpace) {
    alignment = new AlignPairQuad;
    JAM.call(alignment.initializeMatrix, alignment, [newDnaOne$$1, newDnaTwo$$1, scoreSet], JAM.policy.p33);
    alignment.fillMatrix();
    alignment.align();
    var v295 = outputWindow.document;
    var v745 = ">" + titleOne$$1;
    var v296 = v745 + "\n";
    JAM.call(v295.write, v295, [v296], JAM.policy.p21);
    var v297 = outputWindow.document;
    var v746 = alignment.getAlignedM();
    var v298 = addReturns(v746);
    JAM.call(v297.write, v297, [v298], JAM.policy.p21);
    var v299 = outputWindow.document;
    JAM.call(v299.write, v299, ["\n"], JAM.policy.p15);
    var v300 = outputWindow.document;
    JAM.call(v300.write, v300, ["\n"], JAM.policy.p15);
    var v301 = outputWindow.document;
    var v747 = ">" + titleTwo$$1;
    var v302 = v747 + "\n";
    JAM.call(v301.write, v301, [v302], JAM.policy.p21);
    var v303 = outputWindow.document;
    var v748 = alignment.getAlignedN();
    var v304 = addReturns(v748);
    JAM.call(v303.write, v303, [v304], JAM.policy.p21);
    var v305 = outputWindow.document;
    JAM.call(v305.write, v305, ["\n\n"], JAM.policy.p15);
    var v306 = outputWindow.document;
    var v1047 = alignment.score;
    var v749 = "Alignment score: " + v1047;
    var v307 = v749 + "\n\n";
    JAM.call(v306.write, v306, [v307], JAM.policy.p21);
  }
  return;
}
function getScore(r1$$1, r2) {
  var v308 = this.scoringMatrix;
  return JAM.call(v308.scoringMatrix_getScore, v308, [r1$$1, r2], JAM.policy.p33);
}
function setScoreSetParam(scoringMatrix, gapPenalty$$1, beginGapPenalty$$1, endGapPenalty$$1) {
  this.scoringMatrix = scoringMatrix;
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
  var v309 = r1$$2 == r2$$1;
  if (v309) {
    return this.match;
  } else {
    return this.mismatch;
  }
  return;
}
function ScoringMatrix() {
  return;
}
function setMismatch(mismatchScore$$1) {
  this.mismatch = mismatchScore$$1;
  return;
}
function setMatch(matchScore$$1) {
  this.match = matchScore$$1;
  return;
}
function Identity() {
  return;
}
function align() {
  var v1048 = this.M;
  var v750 = v1048.length;
  var v326 = v750 == 0;
  if (v326) {
    var j$$10 = 1;
    var v1049 = this.N;
    var v751 = v1049.length;
    var v315 = j$$10 <= v751;
    for (;v315;) {
      var v310 = this.alignedM;
      JAM.call(v310.push, v310, ["-"], JAM.policy.p15);
      var v311 = this.alignedN;
      var v752 = this.N;
      var v753 = j$$10 - 1;
      var v312 = v752[v753];
      JAM.call(v311.push, v311, [v312], JAM.policy.p21);
      var v313 = this.score;
      var v754 = this.scoreSet;
      var v314 = v754.gap;
      this.score = v313 + v314;
      j$$10++;
      var v1050 = this.N;
      var v755 = v1050.length;
      v315 = j$$10 <= v755;
    }
  } else {
    var v1051 = this.N;
    var v756 = v1051.length;
    var v325 = v756 == 0;
    if (v325) {
      j$$10 = 1;
      var v1052 = this.M;
      var v757 = v1052.length;
      var v321 = j$$10 <= v757;
      for (;v321;) {
        var v316 = this.alignedN;
        JAM.call(v316.push, v316, ["-"], JAM.policy.p15);
        var v317 = this.alignedM;
        var v758 = this.M;
        var v759 = j$$10 - 1;
        var v318 = v758[v759];
        JAM.call(v317.push, v317, [v318], JAM.policy.p21);
        var v319 = this.score;
        var v760 = this.scoreSet;
        var v320 = v760.gap;
        this.score = v319 + v320;
        j$$10++;
        var v1053 = this.M;
        var v761 = v1053.length;
        v321 = j$$10 <= v761;
      }
    } else {
      var v1268 = this.M;
      var v1054 = v1268.length;
      var v762 = v1054 == 0;
      if (v762) {
        var v1269 = this.N;
        var v1055 = v1269.length;
        v762 = v1055 == 0;
      }
      var v324 = v762;
      if (v324) {
      } else {
        var v763 = this.M;
        var v322 = v763.length;
        var v764 = this.N;
        var v323 = v764.length;
        JAM.call(this.path, this, [0, 0, v322, v323], JAM.policy.p19);
      }
    }
  }
  return;
}
function path(i1, j1, i2, j2) {
  var v1056 = i1 + 1;
  var v765 = v1056 == i2;
  var v1057 = !v765;
  if (v1057) {
    v765 = j1 == j2;
  }
  var v423 = v765;
  if (v423) {
    var subM = new Array;
    var subN = new Array;
    var i$$11 = i1 + 1;
    var v328 = i$$11 <= i2;
    for (;v328;) {
      var v766 = this.M;
      var v767 = i$$11 - 1;
      var v327 = v766[v767];
      JAM.call(subM.push, subM, [v327], JAM.policy.p21);
      i$$11++;
      v328 = i$$11 <= i2;
    }
    var j$$11 = j1 + 1;
    var v330 = j$$11 <= j2;
    for (;v330;) {
      var v768 = this.N;
      var v769 = j$$11 - 1;
      var v329 = v768[v769];
      JAM.call(subN.push, subN, [v329], JAM.policy.p21);
      j$$11++;
      v330 = j$$11 <= j2;
    }
    var alignment$$1 = new AlignPairQuad;
    subScoreSet = new ScoreSet;
    var v353 = j1 == j2;
    if (v353) {
      var v344 = j1 == 0;
      if (v344) {
        var v770 = this.scoreSet;
        var v331 = v770.scoringMatrix;
        var v771 = this.scoreSet;
        var v332 = v771.beginGap;
        var v772 = this.scoreSet;
        var v333 = v772.beginGap;
        var v773 = this.scoreSet;
        var v334 = v773.beginGap;
        JAM.call(subScoreSet.setScoreSetParam, subScoreSet, [v331, v332, v333, v334], JAM.policy.p33);
      } else {
        var v1058 = this.N;
        var v774 = v1058.length;
        var v343 = j1 == v774;
        if (v343) {
          var v775 = this.scoreSet;
          var v335 = v775.scoringMatrix;
          var v776 = this.scoreSet;
          var v336 = v776.endGap;
          var v777 = this.scoreSet;
          var v337 = v777.endGap;
          var v778 = this.scoreSet;
          var v338 = v778.endGap;
          JAM.call(subScoreSet.setScoreSetParam, subScoreSet, [v335, v336, v337, v338], JAM.policy.p33);
        } else {
          var v779 = this.scoreSet;
          var v339 = v779.scoringMatrix;
          var v780 = this.scoreSet;
          var v340 = v780.gap;
          var v781 = this.scoreSet;
          var v341 = v781.gap;
          var v782 = this.scoreSet;
          var v342 = v782.gap;
          JAM.call(subScoreSet.setScoreSetParam, subScoreSet, [v339, v340, v341, v342], JAM.policy.p33);
        }
      }
    } else {
      var v783 = this.scoreSet;
      var v345 = v783.scoringMatrix;
      var v784 = this.scoreSet;
      var v346 = v784.gap;
      var v785 = this.scoreSet;
      var v347 = v785.beginGap;
      var v786 = this.scoreSet;
      var v348 = v786.endGap;
      JAM.call(subScoreSet.setScoreSetParam, subScoreSet, [v345, v346, v347, v348], JAM.policy.p33);
      subScoreSet.useBeginGapTop = false;
      subScoreSet.useBeginGapLeft = false;
      subScoreSet.useEndGapBottom = false;
      subScoreSet.useEndGapRight = false;
      var v349 = i1 == 0;
      if (v349) {
        subScoreSet.useBeginGapTop = true;
      }
      var v350 = j1 == 0;
      if (v350) {
        subScoreSet.useBeginGapLeft = true;
      }
      var v1059 = this.N;
      var v787 = v1059.length;
      var v351 = j2 == v787;
      if (v351) {
        subScoreSet.useEndGapRight = true;
      }
      var v1060 = this.M;
      var v788 = v1060.length;
      var v352 = i2 == v788;
      if (v352) {
        subScoreSet.useEndGapBottom = true;
      }
    }
    JAM.call(alignment$$1.initializeMatrix, alignment$$1, [subM, subN, subScoreSet], JAM.policy.p33);
    alignment$$1.fillMatrix();
    alignment$$1.align();
    var v354 = this.alignedM;
    var v355 = alignment$$1.getAlignedM();
    JAM.call(v354.push, v354, [v355], JAM.policy.p21);
    var v356 = this.alignedN;
    var v357 = alignment$$1.getAlignedN();
    JAM.call(v356.push, v356, [v357], JAM.policy.p21);
    var v358 = this.score;
    var v359 = alignment$$1.score;
    this.score = v358 + v359;
  } else {
    var v789 = i1 + i2;
    var v360 = v789 / 2;
    var middle = JAM.call(Math.floor, Math, [v360], JAM.policy.p21);
    var v361 = this.Sn;
    introspect(JAM.policy.p6) {
      v361[j1] = 0;
    }
    var v366 = i1 == 0;
    if (v366) {
      j$$11 = j1 + 1;
      var v363 = j$$11 <= j2;
      for (;v363;) {
        var v362 = this.Sn;
        var v1061 = this.Sn;
        var v1062 = j$$11 - 1;
        var v790 = v1061[v1062];
        var v1063 = this.scoreSet;
        var v791 = v1063.beginGap;
        introspect(JAM.policy.p6) {
          v362[j$$11] = v790 - v791;
        }
        j$$11++;
        v363 = j$$11 <= j2;
      }
    } else {
      j$$11 = j1 + 1;
      var v365 = j$$11 <= j2;
      for (;v365;) {
        var v364 = this.Sn;
        var v1064 = this.Sn;
        var v1065 = j$$11 - 1;
        var v792 = v1064[v1065];
        var v1066 = this.scoreSet;
        var v793 = v1066.gap;
        introspect(JAM.policy.p6) {
          v364[j$$11] = v792 - v793;
        }
        j$$11++;
        v365 = j$$11 <= j2;
      }
    }
    var diag;
    var left$$1;
    i$$11 = i1 + 1;
    var v388 = i$$11 <= middle;
    for (;v388;) {
      var v367 = this.Sn;
      diag = v367[j1];
      var v372 = j1 == 0;
      if (v372) {
        var v794 = this.Sn;
        var v368 = v794[j1];
        var v795 = this.scoreSet;
        var v369 = v795.beginGap;
        left$$1 = v368 - v369;
      } else {
        var v796 = this.Sn;
        var v370 = v796[j1];
        var v797 = this.scoreSet;
        var v371 = v797.gap;
        left$$1 = v370 - v371;
      }
      var v373 = this.Sn;
      introspect(JAM.policy.p6) {
        v373[j1] = left$$1;
      }
      j$$11 = j1 + 1;
      var v387 = j$$11 <= j2;
      for (;v387;) {
        var v1270 = this.N;
        var v1067 = v1270.length;
        var v798 = j$$11 == v1067;
        if (v798) {
          var v1271 = this.M;
          var v1068 = v1271.length;
          v798 = i$$11 == v1068;
        }
        var v384 = v798;
        if (v384) {
          var v1069 = this.Sn;
          var v799 = v1069[j$$11];
          var v1070 = this.scoreSet;
          var v800 = v1070.endGap;
          var v374 = v799 - v800;
          var v1272 = this.scoreSet;
          var v1071 = v1272.endGap;
          var v801 = left$$1 - v1071;
          var v1273 = this.scoreSet;
          var v1400 = this.M;
          var v1401 = i$$11 - 1;
          var v1274 = v1400[v1401];
          var v1402 = this.N;
          var v1403 = j$$11 - 1;
          var v1275 = v1402[v1403];
          var v1072 = JAM.call(v1273.getScore, v1273, [v1274, v1275], JAM.policy.p33);
          var v802 = diag + v1072;
          var v375 = JAM.call(Math.max, Math, [v801, v802], JAM.policy.p33);
          left$$1 = JAM.call(Math.max, Math, [v374, v375], JAM.policy.p22);
        } else {
          var v1073 = this.M;
          var v803 = v1073.length;
          var v383 = i$$11 == v803;
          if (v383) {
            var v1074 = this.Sn;
            var v804 = v1074[j$$11];
            var v1075 = this.scoreSet;
            var v805 = v1075.gap;
            var v376 = v804 - v805;
            var v1276 = this.scoreSet;
            var v1076 = v1276.endGap;
            var v806 = left$$1 - v1076;
            var v1277 = this.scoreSet;
            var v1404 = this.M;
            var v1405 = i$$11 - 1;
            var v1278 = v1404[v1405];
            var v1406 = this.N;
            var v1407 = j$$11 - 1;
            var v1279 = v1406[v1407];
            var v1077 = JAM.call(v1277.getScore, v1277, [v1278, v1279], JAM.policy.p33);
            var v807 = diag + v1077;
            var v377 = JAM.call(Math.max, Math, [v806, v807], JAM.policy.p33);
            left$$1 = JAM.call(Math.max, Math, [v376, v377], JAM.policy.p22);
          } else {
            var v1078 = this.N;
            var v808 = v1078.length;
            var v382 = j$$11 == v808;
            if (v382) {
              var v1079 = this.Sn;
              var v809 = v1079[j$$11];
              var v1080 = this.scoreSet;
              var v810 = v1080.endGap;
              var v378 = v809 - v810;
              var v1280 = this.scoreSet;
              var v1081 = v1280.gap;
              var v811 = left$$1 - v1081;
              var v1281 = this.scoreSet;
              var v1408 = this.M;
              var v1409 = i$$11 - 1;
              var v1282 = v1408[v1409];
              var v1410 = this.N;
              var v1411 = j$$11 - 1;
              var v1283 = v1410[v1411];
              var v1082 = JAM.call(v1281.getScore, v1281, [v1282, v1283], JAM.policy.p33);
              var v812 = diag + v1082;
              var v379 = JAM.call(Math.max, Math, [v811, v812], JAM.policy.p33);
              left$$1 = JAM.call(Math.max, Math, [v378, v379], JAM.policy.p22);
            } else {
              var v1083 = this.Sn;
              var v813 = v1083[j$$11];
              var v1084 = this.scoreSet;
              var v814 = v1084.gap;
              var v380 = v813 - v814;
              var v1284 = this.scoreSet;
              var v1085 = v1284.gap;
              var v815 = left$$1 - v1085;
              var v1285 = this.scoreSet;
              var v1412 = this.M;
              var v1413 = i$$11 - 1;
              var v1286 = v1412[v1413];
              var v1414 = this.N;
              var v1415 = j$$11 - 1;
              var v1287 = v1414[v1415];
              var v1086 = JAM.call(v1285.getScore, v1285, [v1286, v1287], JAM.policy.p33);
              var v816 = diag + v1086;
              var v381 = JAM.call(Math.max, Math, [v815, v816], JAM.policy.p33);
              left$$1 = JAM.call(Math.max, Math, [v380, v381], JAM.policy.p22);
            }
          }
        }
        var v385 = this.Sn;
        diag = v385[j$$11];
        var v386 = this.Sn;
        introspect(JAM.policy.p6) {
          v386[j$$11] = left$$1;
        }
        j$$11++;
        v387 = j$$11 <= j2;
      }
      i$$11++;
      v388 = i$$11 <= middle;
    }
    var v389 = this.Sp;
    introspect(JAM.policy.p6) {
      v389[j2] = 0;
    }
    var v1087 = this.M;
    var v817 = v1087.length;
    var v394 = i2 == v817;
    if (v394) {
      j$$11 = j2 - 1;
      var v391 = j$$11 >= j1;
      for (;v391;) {
        var v390 = this.Sp;
        var v1088 = this.Sp;
        var v1089 = j$$11 + 1;
        var v818 = v1088[v1089];
        var v1090 = this.scoreSet;
        var v819 = v1090.endGap;
        introspect(JAM.policy.p6) {
          v390[j$$11] = v818 - v819;
        }
        j$$11--;
        v391 = j$$11 >= j1;
      }
    } else {
      j$$11 = j2 - 1;
      var v393 = j$$11 >= j1;
      for (;v393;) {
        var v392 = this.Sp;
        var v1091 = this.Sp;
        var v1092 = j$$11 + 1;
        var v820 = v1091[v1092];
        var v1093 = this.scoreSet;
        var v821 = v1093.gap;
        introspect(JAM.policy.p6) {
          v392[j$$11] = v820 - v821;
        }
        j$$11--;
        v393 = j$$11 >= j1;
      }
    }
    var right$$1;
    i$$11 = i2 - 1;
    var v416 = i$$11 >= middle;
    for (;v416;) {
      var v395 = this.Sp;
      diag = v395[j2];
      var v1094 = this.N;
      var v822 = v1094.length;
      var v400 = j2 == v822;
      if (v400) {
        var v823 = this.Sp;
        var v396 = v823[j2];
        var v824 = this.scoreSet;
        var v397 = v824.endGap;
        right$$1 = v396 - v397;
      } else {
        var v825 = this.Sp;
        var v398 = v825[j2];
        var v826 = this.scoreSet;
        var v399 = v826.gap;
        right$$1 = v398 - v399;
      }
      var v401 = this.Sp;
      introspect(JAM.policy.p6) {
        v401[j2] = right$$1;
      }
      j$$11 = j2 - 1;
      var v415 = j$$11 >= j1;
      for (;v415;) {
        var v827 = j$$11 == 0;
        if (v827) {
          v827 = i$$11 == 0;
        }
        var v412 = v827;
        if (v412) {
          var v1095 = this.Sp;
          var v828 = v1095[j$$11];
          var v1096 = this.scoreSet;
          var v829 = v1096.beginGap;
          var v402 = v828 - v829;
          var v1288 = this.scoreSet;
          var v1097 = v1288.beginGap;
          var v830 = right$$1 - v1097;
          var v1289 = this.scoreSet;
          var v1416 = this.M;
          var v1472 = i$$11 + 1;
          var v1417 = v1472 - 1;
          var v1290 = v1416[v1417];
          var v1418 = this.N;
          var v1473 = j$$11 + 1;
          var v1419 = v1473 - 1;
          var v1291 = v1418[v1419];
          var v1098 = JAM.call(v1289.getScore, v1289, [v1290, v1291], JAM.policy.p33);
          var v831 = diag + v1098;
          var v403 = JAM.call(Math.max, Math, [v830, v831], JAM.policy.p33);
          right$$1 = JAM.call(Math.max, Math, [v402, v403], JAM.policy.p22);
        } else {
          var v411 = j$$11 == 0;
          if (v411) {
            var v1099 = this.Sp;
            var v832 = v1099[j$$11];
            var v1100 = this.scoreSet;
            var v833 = v1100.beginGap;
            var v404 = v832 - v833;
            var v1292 = this.scoreSet;
            var v1101 = v1292.gap;
            var v834 = right$$1 - v1101;
            var v1293 = this.scoreSet;
            var v1420 = this.M;
            var v1474 = i$$11 + 1;
            var v1421 = v1474 - 1;
            var v1294 = v1420[v1421];
            var v1422 = this.N;
            var v1475 = j$$11 + 1;
            var v1423 = v1475 - 1;
            var v1295 = v1422[v1423];
            var v1102 = JAM.call(v1293.getScore, v1293, [v1294, v1295], JAM.policy.p33);
            var v835 = diag + v1102;
            var v405 = JAM.call(Math.max, Math, [v834, v835], JAM.policy.p33);
            right$$1 = JAM.call(Math.max, Math, [v404, v405], JAM.policy.p22);
          } else {
            var v410 = i$$11 == 0;
            if (v410) {
              var v1103 = this.Sp;
              var v836 = v1103[j$$11];
              var v1104 = this.scoreSet;
              var v837 = v1104.gap;
              var v406 = v836 - v837;
              var v1296 = this.scoreSet;
              var v1105 = v1296.beginGap;
              var v838 = right$$1 - v1105;
              var v1297 = this.scoreSet;
              var v1424 = this.M;
              var v1476 = i$$11 + 1;
              var v1425 = v1476 - 1;
              var v1298 = v1424[v1425];
              var v1426 = this.N;
              var v1477 = j$$11 + 1;
              var v1427 = v1477 - 1;
              var v1299 = v1426[v1427];
              var v1106 = JAM.call(v1297.getScore, v1297, [v1298, v1299], JAM.policy.p33);
              var v839 = diag + v1106;
              var v407 = JAM.call(Math.max, Math, [v838, v839], JAM.policy.p33);
              right$$1 = JAM.call(Math.max, Math, [v406, v407], JAM.policy.p22);
            } else {
              var v1107 = this.Sp;
              var v840 = v1107[j$$11];
              var v1108 = this.scoreSet;
              var v841 = v1108.gap;
              var v408 = v840 - v841;
              var v1300 = this.scoreSet;
              var v1109 = v1300.gap;
              var v842 = right$$1 - v1109;
              var v1301 = this.scoreSet;
              var v1428 = this.M;
              var v1478 = i$$11 + 1;
              var v1429 = v1478 - 1;
              var v1302 = v1428[v1429];
              var v1430 = this.N;
              var v1479 = j$$11 + 1;
              var v1431 = v1479 - 1;
              var v1303 = v1430[v1431];
              var v1110 = JAM.call(v1301.getScore, v1301, [v1302, v1303], JAM.policy.p33);
              var v843 = diag + v1110;
              var v409 = JAM.call(Math.max, Math, [v842, v843], JAM.policy.p33);
              right$$1 = JAM.call(Math.max, Math, [v408, v409], JAM.policy.p22);
            }
          }
        }
        var v413 = this.Sp;
        diag = v413[j$$11];
        var v414 = this.Sp;
        introspect(JAM.policy.p6) {
          v414[j$$11] = right$$1;
        }
        j$$11--;
        v415 = j$$11 >= j1;
      }
      i$$11--;
      v416 = i$$11 >= middle;
    }
    var v844 = this.Sn;
    var v417 = v844[j1];
    var v845 = this.Sp;
    var v418 = v845[j1];
    var maxValue = v417 + v418;
    var maxJ = j1;
    j$$11 = j1 + 1;
    var v422 = j$$11 <= j2;
    for (;v422;) {
      var v1304 = this.Sn;
      var v1111 = v1304[j$$11];
      var v1305 = this.Sp;
      var v1112 = v1305[j$$11];
      var v846 = v1111 + v1112;
      var v421 = v846 >= maxValue;
      if (v421) {
        var v847 = this.Sn;
        var v419 = v847[j$$11];
        var v848 = this.Sp;
        var v420 = v848[j$$11];
        maxValue = v419 + v420;
        maxJ = j$$11;
      }
      j$$11++;
      v422 = j$$11 <= j2;
    }
    JAM.call(this.path, this, [i1, j1, middle, maxJ], JAM.policy.p33);
    JAM.call(this.path, this, [middle, maxJ, i2, j2], JAM.policy.p22);
  }
  return;
}
function getAlignedM() {
  var v424 = this.alignedM;
  return JAM.call(v424.join, v424, [""], JAM.policy.p15);
}
function getAlignedN() {
  var v425 = this.alignedN;
  return JAM.call(v425.join, v425, [""], JAM.policy.p15);
}
function setAlignParam(M, N, scoreSet$$1) {
  this.M = M;
  this.N = N;
  var v1578 = new Array;
  this.alignedM = v1578;
  var v1579 = new Array;
  this.alignedN = v1579;
  this.scoreSet = scoreSet$$1;
  var v849 = this.N;
  var v426 = v849.length;
  var v1580 = new Array(v426);
  this.Sn = v1580;
  var v850 = this.N;
  var v427 = v850.length;
  var v1581 = new Array(v427);
  this.Sp = v1581;
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
  var v1113 = this.M;
  var v851 = v1113.length;
  var v428 = v851 + 1;
  var v1582 = new Array(v428);
  this.nodes = v1582;
  var i$$12 = 0;
  var v1114 = this.nodes;
  var v852 = v1114.length;
  var v432 = i$$12 < v852;
  for (;v432;) {
    var v429 = this.nodes;
    var v1306 = this.N;
    var v1115 = v1306.length;
    var v853 = v1115 + 1;
    var v1583 = new Array(v853);
    v429[i$$12] = v1583;
    var j$$12 = 0;
    var v1307 = this.nodes;
    var v1116 = v1307[i$$12];
    var v854 = v1116.length;
    var v431 = j$$12 < v854;
    for (;v431;) {
      var v855 = this.nodes;
      var v430 = v855[i$$12];
      var v1584 = new Node;
      v430[j$$12] = v1584;
      j$$12++;
      var v1308 = this.nodes;
      var v1117 = v1308[i$$12];
      var v856 = v1117.length;
      v431 = j$$12 < v856;
    }
    i$$12++;
    var v1118 = this.nodes;
    var v857 = v1118.length;
    v432 = i$$12 < v857;
  }
  var v1119 = this.nodes;
  var v858 = v1119[0];
  var v433 = v858[0];
  v433.value = 0;
  i$$12 = 1;
  var v1120 = this.nodes;
  var v859 = v1120.length;
  var v439 = i$$12 < v859;
  for (;v439;) {
    var v860 = this.scoreSet;
    var v436 = v860.useBeginGapLeft;
    if (v436) {
      var v1121 = this.nodes;
      var v861 = v1121[i$$12];
      var v434 = v861[0];
      var v1432 = this.nodes;
      var v1433 = i$$12 - 1;
      var v1309 = v1432[v1433];
      var v1122 = v1309[0];
      var v862 = v1122.value;
      var v1123 = this.scoreSet;
      var v863 = v1123.beginGap;
      v434.value = v862 - v863;
    } else {
      var v1124 = this.nodes;
      var v864 = v1124[i$$12];
      var v435 = v864[0];
      var v1434 = this.nodes;
      var v1435 = i$$12 - 1;
      var v1310 = v1434[v1435];
      var v1125 = v1310[0];
      var v865 = v1125.value;
      var v1126 = this.scoreSet;
      var v866 = v1126.gap;
      v435.value = v865 - v866;
    }
    var v1127 = this.nodes;
    var v867 = v1127[i$$12];
    var v437 = v867[0];
    v437.tracebackI = i$$12 - 1;
    var v1128 = this.nodes;
    var v868 = v1128[i$$12];
    var v438 = v868[0];
    v438.tracebackJ = 0;
    i$$12++;
    var v1129 = this.nodes;
    var v869 = v1129.length;
    v439 = i$$12 < v869;
  }
  j$$12 = 1;
  var v1311 = this.nodes;
  var v1130 = v1311[0];
  var v870 = v1130.length;
  var v445 = j$$12 < v870;
  for (;v445;) {
    var v871 = this.scoreSet;
    var v442 = v871.useBeginGapTop;
    if (v442) {
      var v1131 = this.nodes;
      var v872 = v1131[0];
      var v440 = v872[j$$12];
      var v1436 = this.nodes;
      var v1312 = v1436[0];
      var v1313 = j$$12 - 1;
      var v1132 = v1312[v1313];
      var v873 = v1132.value;
      var v1133 = this.scoreSet;
      var v874 = v1133.beginGap;
      v440.value = v873 - v874;
    } else {
      var v1134 = this.nodes;
      var v875 = v1134[0];
      var v441 = v875[j$$12];
      var v1437 = this.nodes;
      var v1314 = v1437[0];
      var v1315 = j$$12 - 1;
      var v1135 = v1314[v1315];
      var v876 = v1135.value;
      var v1136 = this.scoreSet;
      var v877 = v1136.gap;
      v441.value = v876 - v877;
    }
    var v1137 = this.nodes;
    var v878 = v1137[0];
    var v443 = v878[j$$12];
    v443.tracebackI = 0;
    var v1138 = this.nodes;
    var v879 = v1138[0];
    var v444 = v879[j$$12];
    v444.tracebackJ = j$$12 - 1;
    j$$12++;
    var v1316 = this.nodes;
    var v1139 = v1316[0];
    var v880 = v1139.length;
    v445 = j$$12 < v880;
  }
  return;
}
function dumpMatrix() {
  var v446 = outputWindow.document;
  var v1438 = this.nodes;
  var v1317 = v1438.length;
  var v1140 = "Dynamic programming matrix i=" + v1317;
  var v881 = v1140 + " and j=";
  var v1318 = this.nodes;
  var v1141 = v1318[0];
  var v882 = v1141.length;
  var v447 = v881 + v882;
  JAM.call(v446.write, v446, [v447], JAM.policy.p21);
  var v448 = outputWindow.document;
  JAM.call(v448.write, v448, ["\n"], JAM.policy.p15);
  var i$$13 = 0;
  var v1142 = this.nodes;
  var v883 = v1142.length;
  var v459 = i$$13 < v883;
  for (;v459;) {
    var j$$13 = 0;
    var v1319 = this.nodes;
    var v1143 = v1319[i$$13];
    var v884 = v1143.length;
    var v457 = j$$13 < v884;
    for (;v457;) {
      var v1144 = this.nodes;
      var v885 = v1144[i$$13];
      var v449 = v885[j$$13];
      var traceI = v449.tracebackI;
      var v1145 = this.nodes;
      var v886 = v1145[i$$13];
      var v450 = v886[j$$13];
      var traceJ = v450.tracebackJ;
      var v451 = traceI == undefined;
      if (v451) {
        traceI = "u";
      }
      var v452 = traceJ == undefined;
      if (v452) {
        traceJ = "u";
      }
      var v1521 = "(" + i$$13;
      var v1506 = v1521 + ",";
      var v1480 = v1506 + j$$13;
      var v1439 = v1480 + ")[";
      var v1320 = v1439 + traceI;
      var v1146 = v1320 + ",";
      var v887 = v1146 + traceJ;
      var v453 = v887 + "]=";
      var v1321 = this.nodes;
      var v1147 = v1321[i$$13];
      var v888 = v1147[j$$13];
      var v454 = v888.value;
      var output = v453 + v454;
      var v455 = outputWindow.document;
      var v456 = rightNum(output, "", 20, " ");
      JAM.call(v455.write, v455, [v456], JAM.policy.p21);
      j$$13++;
      var v1322 = this.nodes;
      var v1148 = v1322[i$$13];
      var v889 = v1148.length;
      v457 = j$$13 < v889;
    }
    var v458 = outputWindow.document;
    JAM.call(v458.write, v458, ["\n"], JAM.policy.p15);
    i$$13++;
    var v1149 = this.nodes;
    var v890 = v1149.length;
    v459 = i$$13 < v890;
  }
  var v460 = outputWindow.document;
  JAM.call(v460.write, v460, ["\n"], JAM.policy.p15);
  return;
}
function fillMatrix() {
  var i$$14 = 1;
  var v1150 = this.nodes;
  var v891 = v1150.length;
  var v506 = i$$14 < v891;
  for (;v506;) {
    var j$$14 = 1;
    var v1323 = this.nodes;
    var v1151 = v1323[0];
    var v892 = v1151.length;
    var v505 = j$$14 < v892;
    for (;v505;) {
      var a;
      var b;
      var c;
      var v1440 = this.nodes;
      var v1324 = v1440.length;
      var v1152 = v1324 - 1;
      var v893 = i$$14 == v1152;
      if (v893) {
        var v1481 = this.nodes;
        var v1441 = v1481[0];
        var v1325 = v1441.length;
        var v1153 = v1325 - 1;
        v893 = j$$14 == v1153;
      }
      var v491 = v893;
      if (v491) {
        var v894 = this.scoreSet;
        var v465 = v894.useEndGapRight;
        if (v465) {
          var v1326 = this.nodes;
          var v1327 = i$$14 - 1;
          var v1154 = v1326[v1327];
          var v895 = v1154[j$$14];
          var v461 = v895.value;
          var v896 = this.scoreSet;
          var v462 = v896.endGap;
          a = v461 - v462;
        } else {
          var v1328 = this.nodes;
          var v1329 = i$$14 - 1;
          var v1155 = v1328[v1329];
          var v897 = v1155[j$$14];
          var v463 = v897.value;
          var v898 = this.scoreSet;
          var v464 = v898.gap;
          a = v463 - v464;
        }
        var v899 = this.scoreSet;
        var v470 = v899.useEndGapBottom;
        if (v470) {
          var v1330 = this.nodes;
          var v1156 = v1330[i$$14];
          var v1157 = j$$14 - 1;
          var v900 = v1156[v1157];
          var v466 = v900.value;
          var v901 = this.scoreSet;
          var v467 = v901.endGap;
          b = v466 - v467;
        } else {
          var v1331 = this.nodes;
          var v1158 = v1331[i$$14];
          var v1159 = j$$14 - 1;
          var v902 = v1158[v1159];
          var v468 = v902.value;
          var v903 = this.scoreSet;
          var v469 = v903.gap;
          b = v468 - v469;
        }
      } else {
        var v1332 = this.nodes;
        var v1160 = v1332.length;
        var v904 = v1160 - 1;
        var v490 = i$$14 == v904;
        if (v490) {
          var v1333 = this.nodes;
          var v1334 = i$$14 - 1;
          var v1161 = v1333[v1334];
          var v905 = v1161[j$$14];
          var v471 = v905.value;
          var v906 = this.scoreSet;
          var v472 = v906.gap;
          a = v471 - v472;
          var v907 = this.scoreSet;
          var v477 = v907.useEndGapBottom;
          if (v477) {
            var v1335 = this.nodes;
            var v1162 = v1335[i$$14];
            var v1163 = j$$14 - 1;
            var v908 = v1162[v1163];
            var v473 = v908.value;
            var v909 = this.scoreSet;
            var v474 = v909.endGap;
            b = v473 - v474;
          } else {
            var v1336 = this.nodes;
            var v1164 = v1336[i$$14];
            var v1165 = j$$14 - 1;
            var v910 = v1164[v1165];
            var v475 = v910.value;
            var v911 = this.scoreSet;
            var v476 = v911.gap;
            b = v475 - v476;
          }
        } else {
          var v1442 = this.nodes;
          var v1337 = v1442[0];
          var v1166 = v1337.length;
          var v912 = v1166 - 1;
          var v489 = j$$14 == v912;
          if (v489) {
            var v913 = this.scoreSet;
            var v482 = v913.useEndGapRight;
            if (v482) {
              var v1338 = this.nodes;
              var v1339 = i$$14 - 1;
              var v1167 = v1338[v1339];
              var v914 = v1167[j$$14];
              var v478 = v914.value;
              var v915 = this.scoreSet;
              var v479 = v915.endGap;
              a = v478 - v479;
            } else {
              var v1340 = this.nodes;
              var v1341 = i$$14 - 1;
              var v1168 = v1340[v1341];
              var v916 = v1168[j$$14];
              var v480 = v916.value;
              var v917 = this.scoreSet;
              var v481 = v917.gap;
              a = v480 - v481;
            }
            var v1342 = this.nodes;
            var v1169 = v1342[i$$14];
            var v1170 = j$$14 - 1;
            var v918 = v1169[v1170];
            var v483 = v918.value;
            var v919 = this.scoreSet;
            var v484 = v919.gap;
            b = v483 - v484;
          } else {
            var v1343 = this.nodes;
            var v1344 = i$$14 - 1;
            var v1171 = v1343[v1344];
            var v920 = v1171[j$$14];
            var v485 = v920.value;
            var v921 = this.scoreSet;
            var v486 = v921.gap;
            a = v485 - v486;
            var v1345 = this.nodes;
            var v1172 = v1345[i$$14];
            var v1173 = j$$14 - 1;
            var v922 = v1172[v1173];
            var v487 = v922.value;
            var v923 = this.scoreSet;
            var v488 = v923.gap;
            b = v487 - v488;
          }
        }
      }
      var v1346 = this.nodes;
      var v1347 = i$$14 - 1;
      var v1174 = v1346[v1347];
      var v1175 = j$$14 - 1;
      var v924 = v1174[v1175];
      var v492 = v924.value;
      var v925 = this.scoreSet;
      var v1176 = this.M;
      var v1177 = i$$14 - 1;
      var v926 = v1176[v1177];
      var v1178 = this.N;
      var v1179 = j$$14 - 1;
      var v927 = v1178[v1179];
      var v493 = JAM.call(v925.getScore, v925, [v926, v927], JAM.policy.p33);
      c = v492 + v493;
      var v928 = a >= b;
      if (v928) {
        v928 = a >= c;
      }
      var v504 = v928;
      if (v504) {
        var v1180 = this.nodes;
        var v929 = v1180[i$$14];
        var v494 = v929[j$$14];
        v494.value = a;
        var v1181 = this.nodes;
        var v930 = v1181[i$$14];
        var v495 = v930[j$$14];
        v495.tracebackI = i$$14 - 1;
        var v1182 = this.nodes;
        var v931 = v1182[i$$14];
        var v496 = v931[j$$14];
        v496.tracebackJ = j$$14;
      } else {
        var v932 = b >= c;
        if (v932) {
          v932 = b >= a;
        }
        var v503 = v932;
        if (v503) {
          var v1183 = this.nodes;
          var v933 = v1183[i$$14];
          var v497 = v933[j$$14];
          v497.value = b;
          var v1184 = this.nodes;
          var v934 = v1184[i$$14];
          var v498 = v934[j$$14];
          v498.tracebackI = i$$14;
          var v1185 = this.nodes;
          var v935 = v1185[i$$14];
          var v499 = v935[j$$14];
          v499.tracebackJ = j$$14 - 1;
        } else {
          var v1186 = this.nodes;
          var v936 = v1186[i$$14];
          var v500 = v936[j$$14];
          v500.value = c;
          var v1187 = this.nodes;
          var v937 = v1187[i$$14];
          var v501 = v937[j$$14];
          v501.tracebackI = i$$14 - 1;
          var v1188 = this.nodes;
          var v938 = v1188[i$$14];
          var v502 = v938[j$$14];
          v502.tracebackJ = j$$14 - 1;
        }
      }
      j$$14++;
      var v1348 = this.nodes;
      var v1189 = v1348[0];
      var v939 = v1189.length;
      v505 = j$$14 < v939;
    }
    i$$14++;
    var v1190 = this.nodes;
    var v940 = v1190.length;
    v506 = i$$14 < v940;
  }
  var v1191 = this.nodes;
  var v1443 = this.nodes;
  var v1349 = v1443.length;
  var v1192 = v1349 - 1;
  var v941 = v1191[v1192];
  var v1444 = this.nodes;
  var v1350 = v1444[0];
  var v1193 = v1350.length;
  var v942 = v1193 - 1;
  var v507 = v941[v942];
  this.score = v507.value;
  return;
}
function alignQuad() {
  var v1585 = new Array;
  this.alignedM = v1585;
  var v1586 = new Array;
  this.alignedN = v1586;
  var v943 = this.nodes;
  var v508 = v943.length;
  var currentI = v508 - 1;
  var v1194 = this.nodes;
  var v944 = v1194[0];
  var v509 = v944.length;
  var currentJ = v509 - 1;
  var v945 = this.nodes;
  var v1351 = this.nodes;
  var v1195 = v1351.length;
  var v946 = v1195 - 1;
  var v510 = v945[v946];
  var v1352 = this.nodes;
  var v1196 = v1352[0];
  var v947 = v1196.length;
  var v511 = v947 - 1;
  var currentNode = v510[v511];
  var v1197 = currentNode.tracebackI;
  var v948 = v1197 != undefined;
  if (v948) {
    var v1198 = currentNode.tracebackJ;
    v948 = v1198 != undefined;
  }
  var v526 = v948;
  for (;v526;) {
    var v1199 = currentNode.tracebackI;
    var v1200 = currentI - 1;
    var v949 = v1199 == v1200;
    if (v949) {
      var v1201 = currentNode.tracebackJ;
      var v1202 = currentJ - 1;
      v949 = v1201 == v1202;
    }
    var v523 = v949;
    if (v523) {
      var v512 = this.alignedM;
      var v950 = this.M;
      var v513 = v950.pop();
      JAM.call(v512.push, v512, [v513], JAM.policy.p21);
      var v514 = this.alignedN;
      var v951 = this.N;
      var v515 = v951.pop();
      JAM.call(v514.push, v514, [v515], JAM.policy.p21);
    } else {
      var v952 = currentNode.tracebackJ;
      var v953 = currentJ - 1;
      var v522 = v952 == v953;
      if (v522) {
        var v516 = this.alignedM;
        JAM.call(v516.push, v516, ["-"], JAM.policy.p15);
        var v517 = this.alignedN;
        var v954 = this.N;
        var v518 = v954.pop();
        JAM.call(v517.push, v517, [v518], JAM.policy.p21);
      } else {
        var v519 = this.alignedM;
        var v955 = this.M;
        var v520 = v955.pop();
        JAM.call(v519.push, v519, [v520], JAM.policy.p21);
        var v521 = this.alignedN;
        JAM.call(v521.push, v521, ["-"], JAM.policy.p15);
      }
    }
    currentI = currentNode.tracebackI;
    currentJ = currentNode.tracebackJ;
    var v956 = this.nodes;
    var v957 = currentNode.tracebackI;
    var v524 = v956[v957];
    var v525 = currentNode.tracebackJ;
    currentNode = v524[v525];
    var v1203 = currentNode.tracebackI;
    var v958 = v1203 != undefined;
    if (v958) {
      var v1204 = currentNode.tracebackJ;
      v958 = v1204 != undefined;
    }
    v526 = v958;
  }
  var v527 = this.alignedM;
  var v1587 = v527.reverse();
  this.alignedM = v1587;
  var v528 = this.alignedN;
  var v1588 = v528.reverse();
  this.alignedN = v1588;
  return;
}
function getAlignedM() {
  var v529 = this.alignedM;
  return JAM.call(v529.join, v529, [""], JAM.policy.p15);
}
function getAlignedN() {
  var v530 = this.alignedN;
  return JAM.call(v530.join, v530, [""], JAM.policy.p15);
}
function AlignPairQuad() {
  return;
}
new ScoreSet;
var v531 = ScoreSet.prototype;
v531.getScore = getScore;
var v532 = ScoreSet.prototype;
v532.setScoreSetParam = setScoreSetParam;
new ScoringMatrix;
var v533 = ScoringMatrix.prototype;
v533.scoringMatrix_getScore = scoringMatrix_getScore;
var v534 = Identity;
var v1589 = new ScoringMatrix;
v534.prototype = v1589;
var v535 = Identity.prototype;
v535.setMismatch = setMismatch;
var v536 = Identity.prototype;
v536.setMatch = setMatch;
new AlignPairLinear;
var v537 = AlignPairLinear.prototype;
v537.align = align;
var v538 = AlignPairLinear.prototype;
v538.path = path;
var v539 = AlignPairLinear.prototype;
v539.setAlignParam = setAlignParam;
var v540 = AlignPairLinear.prototype;
v540.getAlignedM = getAlignedM;
var v541 = AlignPairLinear.prototype;
v541.getAlignedN = getAlignedN;
new AlignPairQuad;
var v542 = AlignPairQuad.prototype;
v542.initializeMatrix = initializeMatrix;
var v543 = AlignPairQuad.prototype;
v543.fillMatrix = fillMatrix;
var v544 = AlignPairQuad.prototype;
v544.align = alignQuad;
var v545 = AlignPairQuad.prototype;
v545.getAlignedM = getAlignedM;
var v546 = AlignPairQuad.prototype;
v546.getAlignedN = getAlignedN;
var v547 = AlignPairQuad.prototype;
v547.dumpMatrix = dumpMatrix;
JAM.set(document, "onload", v2);
var v548 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p15);
JAM.set(v548, "onclick", v3);
var v549 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p15);
JAM.set(v549, "onclick", v4)

JAM.stopProfile('load');
