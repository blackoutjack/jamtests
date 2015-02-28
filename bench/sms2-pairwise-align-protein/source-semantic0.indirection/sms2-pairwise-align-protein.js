function v4() {
  var v1232 = document.forms;
  var v982 = v1232[0];
  var v564 = v982.elements;
  var v5 = v564[0];
  v5.value = " ";
  var v1233 = document.forms;
  var v983 = v1233[0];
  var v565 = v983.elements;
  var v6 = v565[4];
  v6.value = " ";
  return;
}
function v3() {
  try {
    pairwiseAlignProtein();
  } catch (e$$5) {
    var v7 = "The following error was encountered: " + e$$5;
    alert(v7);
  }
  return;
}
function v2() {
  var v566 = document.main_form;
  var v8 = v566.main_submit;
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
  var v567 = arrayOfSequences.length;
  var v10 = v567 < 2;
  if (v10) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v568 = arrayOfTitles.length;
  var v12 = i$$1 < v568;
  for (;v12;) {
    var v1379 = arrayOfTitles[i$$1];
    var v1234 = JAM.call(v1379.search, v1379, [/\S/], JAM.policy.p21);
    var v984 = v1234 == -1;
    var v1236 = !v984;
    if (v1236) {
      var v1380 = arrayOfSequences[i$$1];
      var v1235 = JAM.call(v1380.search, v1380, [/\S/], JAM.policy.p21);
      v984 = v1235 == -1;
    }
    var v569 = v984;
    var v986 = !v569;
    if (v986) {
      var v1237 = arrayOfSequences[i$$1];
      var v985 = v1237.length;
      v569 = v985 != lengthOfAlign;
    }
    var v11 = v569;
    if (v11) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v570 = arrayOfTitles.length;
    v12 = i$$1 < v570;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v1469 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p21);
  var v1381 = v1469 == -1;
  var v1471 = !v1381;
  if (v1471) {
    var v1470 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p21);
    v1381 = v1470 == -1;
  }
  var v1238 = v1381;
  var v1383 = !v1238;
  if (v1383) {
    var v1382 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p21);
    v1238 = v1382 == -1;
  }
  var v987 = v1238;
  var v1240 = !v987;
  if (v1240) {
    var v1239 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p21);
    v987 = v1239 == -1;
  }
  var v571 = v987;
  var v989 = !v571;
  if (v989) {
    var v988 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p21);
    v571 = v988 == -1;
  }
  var v13 = v571;
  if (v13) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v990 = formElement.value;
  var v572 = JAM.call(v990.search, v990, [/\S/], JAM.policy.p21);
  var v14 = v572 == -1;
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
  var v573 = arrayOfPatterns.length;
  var v17 = z$$2 < v573;
  for (;v17;) {
    var v991 = arrayOfPatterns[z$$2];
    var v574 = JAM.call(v991.search, v991, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p21);
    var v15 = v574 == -1;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v992 = arrayOfPatterns[z$$2];
    var v575 = moreExpressionCheck(v992);
    var v16 = v575 == false;
    if (v16) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v576 = arrayOfPatterns.length;
    v17 = z$$2 < v576;
  }
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v18);
  var v19 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v19);
  var j = 0;
  var v577 = arrayOfPatterns.length;
  var v23 = j < v577;
  for (;v23;) {
    var v993 = arrayOfPatterns[j];
    var v578 = JAM.call(v993.match, v993, [/\/.+\//], JAM.policy.p21);
    var v20 = v578 + "gi";
    if (JAM.isEval(eval)) {
      var v1590 = eval("introspect(JAM.policy.pFull) { " + v20 + " }")
    } else {
      var v1590 = JAM.call(eval, null, [v20])
    }
    geneticCodeMatchExp[j] = v1590;
    var v579 = arrayOfPatterns[j];
    var v21 = JAM.call(v579.match, v579, [/=[a-zA-Z\*]/], JAM.policy.p21);
    var v1591 = v21.toString();
    geneticCodeMatchResult[j] = v1591;
    var v22 = geneticCodeMatchResult[j];
    var v1592 = JAM.call(v22.replace, v22, [/=/g, ""], JAM.policy.p22);
    geneticCodeMatchResult[j] = v1592;
    j++;
    var v580 = arrayOfPatterns.length;
    v23 = j < v580;
  }
  var i$$2 = 0;
  var v994 = testSequence.length;
  var v581 = v994 - 3;
  var v30 = i$$2 <= v581;
  for (;v30;) {
    var v24 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v24], JAM.policy.p22);
    j = 0;
    var v582 = geneticCodeMatchExp.length;
    var v28 = j < v582;
    for (;v28;) {
      var v995 = geneticCodeMatchExp[j];
      var v583 = JAM.call(codon.search, codon, [v995], JAM.policy.p24);
      var v27 = v583 != -1;
      if (v27) {
        var v26 = oneMatch == true;
        if (v26) {
          var v584 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v25 = v584 + ".";
          alert(v25);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v585 = geneticCodeMatchExp.length;
      v28 = j < v585;
    }
    var v29 = oneMatch == false;
    if (v29) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v996 = testSequence.length;
    var v586 = v996 - 3;
    v30 = i$$2 <= v586;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v587 = arrayOfPatterns$$1.length;
  var v32 = z$$3 < v587;
  for (;v32;) {
    var v997 = arrayOfPatterns$$1[z$$3];
    var v588 = JAM.call(v997.search, v997, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p21);
    var v31 = v588 != -1;
    if (v31) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v589 = arrayOfPatterns$$1.length;
    v32 = z$$3 < v589;
  }
  var i$$3 = 0;
  var v590 = arrayOfPatterns$$1.length;
  var v36 = i$$3 < v590;
  for (;v36;) {
    var v998 = arrayOfPatterns$$1[i$$3];
    var v591 = "[" + v998;
    var v33 = v591 + "]";
    var re = new RegExp(v33, "gi");
    var j$$1 = i$$3 + 1;
    var v592 = arrayOfPatterns$$1.length;
    var v35 = j$$1 < v592;
    for (;v35;) {
      var v999 = arrayOfPatterns$$1[j$$1];
      var v593 = JAM.call(v999.search, v999, [re], JAM.policy.p24);
      var v34 = v593 != -1;
      if (v34) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v594 = arrayOfPatterns$$1.length;
      v35 = j$$1 < v594;
    }
    i$$3++;
    var v595 = arrayOfPatterns$$1.length;
    v36 = i$$3 < v595;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v596 = arrayOfPatterns$$2.length;
  var v39 = z$$4 < v596;
  for (;v39;) {
    var v1000 = arrayOfPatterns$$2[z$$4];
    var v597 = JAM.call(v1000.search, v1000, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p21);
    var v37 = v597 == -1;
    if (v37) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v1001 = arrayOfPatterns$$2[z$$4];
    var v598 = moreExpressionCheck(v1001);
    var v38 = v598 == false;
    if (v38) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v599 = arrayOfPatterns$$2.length;
    v39 = z$$4 < v599;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v1241 = getSequenceFromFasta(text$$7);
  var v1002 = JAM.call(v1241.replace, v1241, [/[^A-Za-z]/g, ""], JAM.policy.p22);
  var v600 = v1002.length;
  var v41 = v600 > maxInput;
  if (v41) {
    var v601 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v40 = v601 + " characters.";
    alert(v40);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v602 = text$$8.length;
  var v43 = v602 > maxInput$$1;
  if (v43) {
    var v603 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v42 = v603 + " characters.";
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
  JAM.call(v44.write, v44, ["</form>"], JAM.policy.p18);
  return true;
}
function closePre() {
  var v45 = outputWindow.document;
  JAM.call(v45.write, v45, ["</div>"], JAM.policy.p18);
  var v46 = outputWindow.document;
  JAM.call(v46.write, v46, ["</pre>\n"], JAM.policy.p18);
  return;
}
function closeTextArea() {
  var v47 = outputWindow.document;
  JAM.call(v47.write, v47, ["</textarea>"], JAM.policy.p18);
  return true;
}
function closeWindow() {
  var v48 = outputWindow.document;
  JAM.call(v48.write, v48, ["</body>\n</html>\n"], JAM.policy.p18);
  outputWindow.status = "Done.";
  var v49 = outputWindow.document;
  v49.close();
  return;
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
  var v604 = alignArray.length;
  var v50 = v604 < 3;
  if (v50) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v605 = alignArray.length;
  var v52 = i$$4 < v605;
  for (;v52;) {
    var v1003 = alignArray[i$$4];
    var v606 = JAM.call(v1003.search, v1003, [/[^\s]+\s/], JAM.policy.p21);
    var v51 = v606 == -1;
    if (v51) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v607 = alignArray.length;
    v52 = i$$4 < v607;
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
  var v608 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p21);
  var v55 = v608 != -1;
  if (v55) {
    var v54 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p24);
    for (;v54;) {
      var v53 = matchArray[0];
      JAM.call(arrayOfFasta.push, arrayOfFasta, [v53], JAM.policy.p24);
      v54 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p24);
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v609 = sequence$$2.length;
  var v56 = "&gt;results for " + v609;
  var stringToReturn = v56 + " residue sequence ";
  var v610 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p21);
  var v58 = v610 != -1;
  if (v58) {
    var v611 = stringToReturn + '"';
    var v57 = v611 + fastaSequenceTitle;
    stringToReturn = v57 + '"';
  }
  var v612 = stringToReturn + ' starting "';
  var v613 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p19);
  var v59 = v612 + v613;
  stringToReturn = v59 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v614 = sequenceOne.length;
  var v60 = "Search results for " + v614;
  var stringToReturn$$1 = v60 + " residue sequence ";
  var v615 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p21);
  var v62 = v615 != -1;
  if (v62) {
    var v616 = stringToReturn$$1 + '"';
    var v61 = v616 + fastaSequenceTitleOne;
    stringToReturn$$1 = v61 + '"';
  }
  var v617 = stringToReturn$$1 + ' starting "';
  var v618 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p19);
  var v63 = v617 + v618;
  stringToReturn$$1 = v63 + '"\n';
  var v619 = stringToReturn$$1 + "and ";
  var v620 = sequenceTwo.length;
  var v64 = v619 + v620;
  stringToReturn$$1 = v64 + " residue sequence ";
  var v621 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p21);
  var v66 = v621 != -1;
  if (v66) {
    var v622 = stringToReturn$$1 + '"';
    var v65 = v622 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v65 + '"';
  }
  var v623 = stringToReturn$$1 + ' starting "';
  var v624 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p19);
  var v67 = v623 + v624;
  stringToReturn$$1 = v67 + '"';
  var v68 = '<div class="info">' + stringToReturn$$1;
  return v68 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v69 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v69);
  var j$$2 = 0;
  var v625 = arrayOfPatterns$$3.length;
  var v71 = j$$2 < v625;
  for (;v71;) {
    var v1004 = arrayOfPatterns$$3[j$$2];
    var v626 = JAM.call(v1004.match, v1004, [/\/.+\//], JAM.policy.p21);
    var v70 = v626 + "gi";
    if (JAM.isEval(eval)) {
      var v1593 = eval("introspect(JAM.policy.pFull) { " + v70 + " }")
    } else {
      var v1593 = JAM.call(eval, null, [v70])
    }
    geneticCodeMatchExp$$1[j$$2] = v1593;
    j$$2++;
    var v627 = arrayOfPatterns$$3.length;
    v71 = j$$2 < v627;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v72 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v72);
  var j$$3 = 0;
  var v628 = arrayOfPatterns$$4.length;
  var v75 = j$$3 < v628;
  for (;v75;) {
    var v629 = arrayOfPatterns$$4[j$$3];
    var v73 = JAM.call(v629.match, v629, [/=[a-zA-Z\*]/], JAM.policy.p21);
    var v1594 = v73.toString();
    geneticCodeMatchResult$$1[j$$3] = v1594;
    var v74 = geneticCodeMatchResult$$1[j$$3];
    var v1595 = JAM.call(v74.replace, v74, [/=/g, ""], JAM.policy.p22);
    geneticCodeMatchResult$$1[j$$3] = v1595;
    j$$3++;
    var v630 = arrayOfPatterns$$4.length;
    v75 = j$$3 < v630;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v631 = sequence$$3.length;
  var v76 = "Results for " + v631;
  var stringToReturn$$2 = v76 + " residue sequence ";
  var v632 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p21);
  var v78 = v632 != -1;
  if (v78) {
    var v633 = stringToReturn$$2 + '"';
    var v77 = v633 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v77 + '"';
  }
  var v634 = stringToReturn$$2 + ' starting "';
  var v635 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p19);
  var v79 = v634 + v635;
  stringToReturn$$2 = v79 + '"';
  var v80 = '<div class="info">' + stringToReturn$$2;
  return v80 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v1005 = "Results for " + topology;
  var v636 = v1005 + " ";
  var v637 = sequence$$4.length;
  var v81 = v636 + v637;
  var stringToReturn$$3 = v81 + " residue sequence ";
  var v638 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p21);
  var v83 = v638 != -1;
  if (v83) {
    var v639 = stringToReturn$$3 + '"';
    var v82 = v639 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v82 + '"';
  }
  var v640 = stringToReturn$$3 + ' starting "';
  var v641 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p19);
  var v84 = v640 + v641;
  stringToReturn$$3 = v84 + '"';
  var v85 = '<div class="info">' + stringToReturn$$3;
  return v85 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v642 = sequenceOne$$1.length;
  var v86 = "Alignment results for " + v642;
  var stringToReturn$$4 = v86 + " residue sequence ";
  var v643 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p21);
  var v88 = v643 != -1;
  if (v88) {
    var v644 = stringToReturn$$4 + '"';
    var v87 = v644 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v87 + '"';
  }
  var v645 = stringToReturn$$4 + ' starting "';
  var v646 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p19);
  var v89 = v645 + v646;
  stringToReturn$$4 = v89 + '"\n';
  var v647 = stringToReturn$$4 + "and ";
  var v648 = sequenceTwo$$1.length;
  var v90 = v647 + v648;
  stringToReturn$$4 = v90 + " residue sequence ";
  var v649 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p21);
  var v92 = v649 != -1;
  if (v92) {
    var v650 = stringToReturn$$4 + '"';
    var v91 = v650 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v91 + '"';
  }
  var v651 = stringToReturn$$4 + ' starting "';
  var v652 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p19);
  var v93 = v651 + v652;
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
    var v653 = Math.random();
    var v654 = components.length;
    var v95 = v653 * v654;
    tempNum = JAM.call(Math.floor, Math, [v95], JAM.policy.p21);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p24);
    j$$4++;
    v96 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p18);
}
function getSequenceFromFasta(sequenceRecord) {
  var v655 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p21);
  var v97 = v655 != -1;
  if (v97) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p22);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v656 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p21);
  var v99 = v656 != -1;
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
  var v1568 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p21);
  var v1561 = v1568 != -1;
  var v1570 = !v1561;
  if (v1570) {
    var v1569 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p21);
    v1561 = v1569 != -1;
  }
  var v1551 = v1561;
  var v1563 = !v1551;
  if (v1563) {
    var v1562 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p21);
    v1551 = v1562 != -1;
  }
  var v1540 = v1551;
  var v1553 = !v1540;
  if (v1553) {
    var v1552 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p21);
    v1540 = v1552 != -1;
  }
  var v1525 = v1540;
  var v1542 = !v1525;
  if (v1542) {
    var v1541 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p21);
    v1525 = v1541 != -1;
  }
  var v1504 = v1525;
  var v1527 = !v1504;
  if (v1527) {
    var v1526 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p21);
    v1504 = v1526 != -1;
  }
  var v1472 = v1504;
  var v1506 = !v1472;
  if (v1506) {
    var v1505 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p21);
    v1472 = v1505 != -1;
  }
  var v1384 = v1472;
  var v1474 = !v1384;
  if (v1474) {
    var v1473 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p21);
    v1384 = v1473 != -1;
  }
  var v1242 = v1384;
  var v1386 = !v1242;
  if (v1386) {
    var v1385 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p21);
    v1242 = v1385 != -1;
  }
  var v1006 = v1242;
  var v1244 = !v1006;
  if (v1244) {
    var v1243 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p21);
    v1006 = v1243 != -1;
  }
  var v657 = v1006;
  var v1008 = !v657;
  if (v1008) {
    var v1007 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p21);
    v657 = v1007 != -1;
  }
  var v100 = v657;
  if (v100) {
    return false;
  }
  return true;
}
function openForm() {
  var v101 = outputWindow.document;
  JAM.call(v101.write, v101, ['<form action="">\n'], JAM.policy.p18);
  return true;
}
function openPre() {
  var v102 = outputWindow.document;
  JAM.call(v102.write, v102, ["<pre>"], JAM.policy.p18);
  var v103 = outputWindow.document;
  JAM.call(v103.write, v103, ['<div class="pre">'], JAM.policy.p18);
  return;
}
function openTextArea() {
  var v104 = outputWindow.document;
  JAM.call(v104.write, v104, ['<br /><textarea rows="6" cols="61">\n'], JAM.policy.p18);
  return true;
}
function openWindow() {
  var title$$5 = "Pairwise Align Protein";
  _openWindow(title$$5);
  return;
}
function _openWindow(title$$6) {
  var isColor = true;
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p20);
  outputWindow.focus();
  var v105 = outputWindow.document;
  var v1245 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v1009 = v1245 + "<head>\n";
  var v658 = v1009 + "<title>Sequence Manipulation Suite</title>\n";
  var v106 = v658 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v105.write, v105, [v106], JAM.policy.p24);
  if (isColor) {
    var v107 = outputWindow.document;
    var v1583 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1579 = v1583 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1575 = v1579 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1571 = v1575 + "div.info {font-weight: bold}\n";
    var v1564 = v1571 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1554 = v1564 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v1543 = v1554 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v1528 = v1543 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1507 = v1528 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v1475 = v1507 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v1387 = v1475 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v1246 = v1387 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v1010 = v1246 + "td.many {color: #000000}\n";
    var v659 = v1010 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v108 = v659 + "</style>\n";
    JAM.call(v107.write, v107, [v108], JAM.policy.p24);
  } else {
    var v109 = outputWindow.document;
    var v1587 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1584 = v1587 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1580 = v1584 + "div.title {display: none}\n";
    var v1576 = v1580 + "div.info {font-weight: bold}\n";
    var v1572 = v1576 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1565 = v1572 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1555 = v1565 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v1544 = v1555 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1529 = v1544 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1508 = v1529 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1476 = v1508 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v1388 = v1476 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1247 = v1388 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v1011 = v1247 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v660 = v1011 + "img {display: none}\n";
    var v110 = v660 + "</style>\n";
    JAM.call(v109.write, v109, [v110], JAM.policy.p24);
  }
  var v111 = outputWindow.document;
  var v1248 = "</head>\n" + '<body class="main">\n';
  var v1012 = v1248 + '<div class="title">';
  var v661 = v1012 + title$$6;
  var v112 = v661 + " results</div>\n";
  JAM.call(v111.write, v111, [v112], JAM.policy.p24);
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
  var v1249 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v1013 = v1249 + "<head>\n";
  var v662 = v1013 + "<title>Sequence Manipulation Suite</title>\n";
  var v114 = v662 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v113.write, v113, [v114], JAM.policy.p24);
  if (isBackground) {
    var v115 = outputWindow.document;
    var v1585 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1581 = v1585 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1577 = v1581 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1573 = v1577 + "div.info {font-weight: bold}\n";
    var v1566 = v1573 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v1556 = v1566 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v1545 = v1556 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v1530 = v1545 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v1509 = v1530 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v1477 = v1509 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v1389 = v1477 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v1250 = v1389 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v1014 = v1250 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v663 = v1014 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v116 = v663 + "</style>\n";
    JAM.call(v115.write, v115, [v116], JAM.policy.p24);
  } else {
    var v117 = outputWindow.document;
    var v1589 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1588 = v1589 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1586 = v1588 + "div.title {display: none}\n";
    var v1582 = v1586 + "div.info {font-weight: bold}\n";
    var v1578 = v1582 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1574 = v1578 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v1567 = v1574 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v1557 = v1567 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v1546 = v1557 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v1531 = v1546 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v1510 = v1531 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v1478 = v1510 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v1390 = v1478 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v1251 = v1390 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v1015 = v1251 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v664 = v1015 + "img {display: none}\n";
    var v118 = v664 + "</style>\n";
    JAM.call(v117.write, v117, [v118], JAM.policy.p24);
  }
  var v119 = outputWindow.document;
  var v1252 = "</head>\n" + '<body class="main">\n';
  var v1016 = v1252 + '<div class="title">';
  var v665 = v1016 + title$$8;
  var v120 = v665 + " results</div>\n";
  JAM.call(v119.write, v119, [v120], JAM.policy.p24);
  outputWindow.status = "Please Wait.";
  return;
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
  var v666 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p21);
  var v121 = v666 != -1;
  if (v121) {
    tempDnaArray = JAM.call(dnaSequence$$1.match, dnaSequence$$1, [/./g], JAM.policy.p21);
    tempDnaArray = tempDnaArray.reverse();
    dnaSequence$$1 = JAM.call(tempDnaArray.join, tempDnaArray, [""], JAM.policy.p18);
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
  JAM.call(testArray.push, testArray, [testString], JAM.policy.p24);
  var v667 = testArray[0];
  var v125 = v667 != testString;
  if (v125) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v668 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p24);
  var v126 = v668 == -1;
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
  var v669 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p17);
  var v129 = v669 != 2489.824;
  if (v129) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v670 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p17);
  var v130 = v670 != 2489.8;
  if (v130) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v671 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p21);
  var v131 = v671 == -1;
  if (v131) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v1391 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p21);
  var v1253 = v1391 == -1;
  var v1393 = !v1253;
  if (v1393) {
    var v1392 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p21);
    v1253 = v1392 == -1;
  }
  var v1017 = v1253;
  var v1255 = !v1017;
  if (v1255) {
    var v1254 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p21);
    v1017 = v1254 == -1;
  }
  var v672 = v1017;
  var v1019 = !v672;
  if (v1019) {
    var v1018 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p21);
    v672 = v1018 == -1;
  }
  var v132 = v672;
  if (v132) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v673 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p21);
  var v133 = v673 == -1;
  if (v133) {
    alert("Please enter a number.");
    return false;
  }
  var v135 = theNumber$$2 > maxInput$$2;
  if (v135) {
    var v674 = "Please enter a number less than or equal to " + maxInput$$2;
    var v134 = v674 + ".";
    alert(v134);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v675 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p21);
  var v136 = v675 != -1;
  if (v136) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v676 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p21);
  var v137 = v676 != -1;
  if (v137) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v1394 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p21);
  var v1256 = v1394 == -1;
  var v1396 = !v1256;
  if (v1396) {
    var v1395 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p21);
    v1256 = v1395 == -1;
  }
  var v1020 = v1256;
  var v1258 = !v1020;
  if (v1258) {
    var v1257 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p21);
    v1020 = v1257 == -1;
  }
  var v677 = v1020;
  var v1022 = !v677;
  if (v1022) {
    var v1021 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p21);
    v677 = v1021 == -1;
  }
  var v138 = v677;
  if (v138) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v1397 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p21);
  var v1259 = v1397 == -1;
  var v1399 = !v1259;
  if (v1399) {
    var v1398 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p21);
    v1259 = v1398 == -1;
  }
  var v1023 = v1259;
  var v1261 = !v1023;
  if (v1261) {
    var v1260 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p21);
    v1023 = v1260 == -1;
  }
  var v678 = v1023;
  var v1025 = !v678;
  if (v1025) {
    var v1024 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p21);
    v678 = v1024 == -1;
  }
  var v139 = v678;
  if (v139) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v679 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p21);
  var v140 = v679 == -1;
  if (v140) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v1400 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p21);
  var v1262 = v1400 == -1;
  var v1402 = !v1262;
  if (v1402) {
    var v1401 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p21);
    v1262 = v1401 == -1;
  }
  var v1026 = v1262;
  var v1264 = !v1026;
  if (v1264) {
    var v1263 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p21);
    v1026 = v1263 == -1;
  }
  var v680 = v1026;
  var v1028 = !v680;
  if (v1028) {
    var v1027 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p21);
    v680 = v1027 == -1;
  }
  var v141 = v680;
  if (v141) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v681 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p21);
  var v142 = v681 == -1;
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
    var v682 = basePerLine / groupSize;
    var v146 = j$$6 <= v682;
    for (;v146;) {
      var v145 = k < groupSize;
      for (;v145;) {
        var v683 = k + i$$5;
        var v144 = JAM.call(text$$10.charAt, text$$10, [v683], JAM.policy.p24);
        lineOfText = lineOfText + v144;
        k = k + 1;
        v145 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v684 = basePerLine / groupSize;
      v146 = j$$6 <= v684;
    }
    var v147 = outputWindow.document;
    var v148 = lineOfText + "\n";
    JAM.call(v147.write, v147, [v148], JAM.policy.p24);
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
    var v685 = adjustment < 0;
    if (v685) {
      v685 = adjusted >= 0;
    }
    var v150 = v685;
    if (v150) {
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
    var v686 = basePerLine$$2 / groupSize$$2;
    var v157 = j$$7 <= v686;
    for (;v157;) {
      var v153 = k$$1 < groupSize$$2;
      for (;v153;) {
        var v687 = i$$6 + k$$1;
        var v151 = v687 >= stopBase$$2;
        if (v151) {
          break;
        }
        var v688 = k$$1 + i$$6;
        var v152 = JAM.call(text$$12.charAt, text$$12, [v688], JAM.policy.p24);
        lineOfText$$1 = lineOfText$$1 + v152;
        k$$1 = k$$1 + 1;
        v153 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v155 = numberPosition$$1 == "above";
      if (v155) {
        var v689 = adjustNumbering(i$$6, numberingAdjustment);
        var v154 = rightNum(v689, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v154;
      }
      var v156 = i$$6 >= stopBase$$2;
      if (v156) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v690 = basePerLine$$2 / groupSize$$2;
      v157 = j$$7 <= v690;
    }
    var v180 = numberPosition$$1 == "left";
    if (v180) {
      var v158 = outputWindow.document;
      var v1265 = adjustNumbering(lineNum, numberingAdjustment);
      var v1029 = rightNum(v1265, "", 8, tabIn$$3);
      var v691 = v1029 + lineOfText$$1;
      var v159 = v691 + "\n";
      JAM.call(v158.write, v158, [v159], JAM.policy.p24);
      var v163 = strands$$1 == "two";
      if (v163) {
        var v160 = outputWindow.document;
        var v1266 = adjustNumbering(lineNum, numberingAdjustment);
        var v1030 = rightNum(v1266, "", 8, tabIn$$3);
        var v1031 = complement(lineOfText$$1);
        var v692 = v1030 + v1031;
        var v161 = v692 + "\n";
        JAM.call(v160.write, v160, [v161], JAM.policy.p24);
        var v162 = outputWindow.document;
        JAM.call(v162.write, v162, ["\n"], JAM.policy.p18);
      }
    } else {
      var v179 = numberPosition$$1 == "right";
      if (v179) {
        var v164 = outputWindow.document;
        var v1032 = adjustNumbering(i$$6, numberingAdjustment);
        var v693 = lineOfText$$1 + v1032;
        var v165 = v693 + "\n";
        JAM.call(v164.write, v164, [v165], JAM.policy.p24);
        var v169 = strands$$1 == "two";
        if (v169) {
          var v166 = outputWindow.document;
          var v1033 = complement(lineOfText$$1);
          var v1034 = adjustNumbering(i$$6, numberingAdjustment);
          var v694 = v1033 + v1034;
          var v167 = v694 + "\n";
          JAM.call(v166.write, v166, [v167], JAM.policy.p24);
          var v168 = outputWindow.document;
          JAM.call(v168.write, v168, ["\n"], JAM.policy.p18);
        }
      } else {
        var v178 = numberPosition$$1 == "above";
        if (v178) {
          var v170 = outputWindow.document;
          var v171 = aboveNum + "\n";
          JAM.call(v170.write, v170, [v171], JAM.policy.p24);
          var v172 = outputWindow.document;
          var v173 = lineOfText$$1 + "\n";
          JAM.call(v172.write, v172, [v173], JAM.policy.p24);
          var v177 = strands$$1 == "two";
          if (v177) {
            var v174 = outputWindow.document;
            var v695 = complement(lineOfText$$1);
            var v175 = v695 + "\n";
            JAM.call(v174.write, v174, [v175], JAM.policy.p24);
            var v176 = outputWindow.document;
            JAM.call(v176.write, v176, ["\n"], JAM.policy.p18);
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
    var v696 = basePerLine$$3 / groupSize$$3;
    var v188 = j$$8 <= v696;
    for (;v188;) {
      var v184 = k$$2 < groupSize$$3;
      for (;v184;) {
        var v697 = i$$7 + k$$2;
        var v182 = v697 >= stopBase$$3;
        if (v182) {
          break;
        }
        var v698 = k$$2 + i$$7;
        var v183 = JAM.call(text$$13.charAt, text$$13, [v698], JAM.policy.p24);
        lineOfText$$2 = lineOfText$$2 + v183;
        k$$2 = k$$2 + 1;
        v184 = k$$2 < groupSize$$3;
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v186 = numberPosition$$2 == "above";
      if (v186) {
        var v185 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = aboveNum$$1 + v185;
      }
      var v187 = i$$7 >= stopBase$$3;
      if (v187) {
        break;
      }
      k$$2 = 0;
      j$$8++;
      var v699 = basePerLine$$3 / groupSize$$3;
      v188 = j$$8 <= v699;
    }
    var v199 = numberPosition$$2 == "left";
    if (v199) {
      var v189 = outputWindow.document;
      var v1035 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v700 = v1035 + lineOfText$$2;
      var v190 = v700 + "\n";
      JAM.call(v189.write, v189, [v190], JAM.policy.p24);
    } else {
      var v198 = numberPosition$$2 == "right";
      if (v198) {
        var v191 = outputWindow.document;
        var v701 = lineOfText$$2 + i$$7;
        var v192 = v701 + "\n";
        JAM.call(v191.write, v191, [v192], JAM.policy.p24);
      } else {
        var v197 = numberPosition$$2 == "above";
        if (v197) {
          var v193 = outputWindow.document;
          var v194 = aboveNum$$1 + "\n";
          JAM.call(v193.write, v193, [v194], JAM.policy.p24);
          var v195 = outputWindow.document;
          var v196 = lineOfText$$2 + "\n";
          JAM.call(v195.write, v195, [v196], JAM.policy.p24);
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
  var v1267 = sequence$$13.length;
  var v1036 = v1267 <= firstIndexToMutate;
  var v1268 = !v1036;
  if (v1268) {
    v1036 = lastIndexToMutate < 0;
  }
  var v702 = v1036;
  var v1037 = !v702;
  if (v1037) {
    v702 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v201 = v702;
  if (v201) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v209 = i$$8 < numMut;
  for (;v209;) {
    maxNum = sequence$$13.length;
    var v703 = Math.random();
    var v202 = v703 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v202], JAM.policy.p21);
    var v704 = randNum < firstIndexToMutate;
    var v1038 = !v704;
    if (v1038) {
      v704 = randNum > lastIndexToMutate;
    }
    var v203 = v704;
    if (v203) {
      numMut++;
      i$$8++;
      v209 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p21);
    needNewChar = true;
    for (;needNewChar;) {
      var v705 = Math.random();
      var v706 = components$$1.length;
      var v204 = v705 * v706;
      componentsIndex = JAM.call(Math.round, Math, [v204], JAM.policy.p21);
      var v707 = components$$1.length;
      var v205 = componentsIndex == v707;
      if (v205) {
        componentsIndex = 0;
      }
      var v708 = components$$1[componentsIndex];
      var v206 = v708 != currentChar;
      if (v206) {
        needNewChar = false;
      }
    }
    var v709 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p19);
    var v710 = components$$1[componentsIndex];
    var v207 = v709 + v710;
    var v711 = randNum + 1;
    var v712 = sequence$$13.length;
    var v208 = JAM.call(sequence$$13.substring, sequence$$13, [v711, v712], JAM.policy.p33);
    sequence$$13 = v207 + v208;
    i$$8++;
    v209 = i$$8 < numMut;
  }
  var v210 = outputWindow.document;
  var v211 = addReturns(sequence$$13);
  JAM.call(v210.write, v210, [v211], JAM.policy.p24);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v216 = j$$9 < lengthOut$$1;
  for (;v216;) {
    var v713 = Math.random();
    var v714 = components$$2.length;
    var v212 = v713 * v714;
    tempNum$$1 = JAM.call(Math.floor, Math, [v212], JAM.policy.p21);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v715 = sequence$$14.length;
    var v215 = v715 == 60;
    if (v215) {
      var v213 = outputWindow.document;
      var v214 = sequence$$14 + "\n";
      JAM.call(v213.write, v213, [v214], JAM.policy.p24);
      sequence$$14 = "";
    }
    j$$9++;
    v216 = j$$9 < lengthOut$$1;
  }
  var v217 = outputWindow.document;
  var v218 = sequence$$14 + "\n";
  JAM.call(v217.write, v217, [v218], JAM.policy.p24);
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
  var v222 = dnaConformation == "circular";
  if (v222) {
    var v219 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p19);
    shiftValue = v219.length;
    var v1269 = sequence$$15.length;
    var v1039 = v1269 - lookAhead;
    var v1040 = sequence$$15.length;
    var v716 = JAM.call(sequence$$15.substring, sequence$$15, [v1039, v1040], JAM.policy.p33);
    var v220 = v716 + sequence$$15;
    var v221 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p19);
    sequence$$15 = v220 + v221;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v223 = outputWindow.document;
  JAM.call(v223.write, v223, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p18);
  var v224 = outputWindow.document;
  var v1270 = '<tr><td class="title" width="200px">' + "Site:";
  var v1041 = v1270 + '</td><td class="title">';
  var v717 = v1041 + "Positions:";
  var v225 = v717 + "</td></tr>\n";
  JAM.call(v224.write, v224, [v225], JAM.policy.p24);
  var i$$9 = 0;
  var v718 = arrayOfItems.length;
  var v241 = i$$9 < v718;
  for (;v241;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v719 = arrayOfItems[i$$9];
    var v226 = JAM.call(v719.match, v719, [/\/.+\//], JAM.policy.p21);
    matchExp = v226 + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    var v1271 = arrayOfItems[i$$9];
    var v1042 = JAM.call(v1271.match, v1271, [/\)\D*\d+/], JAM.policy.p21);
    var v720 = v1042.toString();
    var v227 = JAM.call(v720.replace, v720, [/\)\D*/, ""], JAM.policy.p22);
    cutDistance = parseFloat(v227);
    var v233 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p24);
    for (;v233;) {
      var v228 = matchExp.lastIndex;
      matchPosition = v228 - cutDistance;
      var v721 = matchPosition >= lowerLimit;
      if (v721) {
        v721 = matchPosition < upperLimit;
      }
      var v231 = v721;
      if (v231) {
        timesFound++;
        var v229 = tempString$$1 + ", ";
        var v722 = matchPosition - shiftValue;
        var v230 = v722 + 1;
        tempString$$1 = v229 + v230;
      }
      var v723 = matchExp.lastIndex;
      var v1043 = RegExp.lastMatch;
      var v724 = v1043.length;
      var v232 = v723 - v724;
      matchExp.lastIndex = v232 + 1;
      v233 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p24);
    }
    var v725 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p21);
    var v234 = v725 != -1;
    if (v234) {
      tempString$$1 = JAM.call(tempString$$1.replace, tempString$$1, [/none,\s*/, ""], JAM.policy.p22);
    }
    var v238 = timesFound == 0;
    if (v238) {
      backGroundClass = "none";
    } else {
      var v237 = timesFound == 1;
      if (v237) {
        backGroundClass = "one";
      } else {
        var v236 = timesFound == 2;
        if (v236) {
          backGroundClass = "two";
        } else {
          var v235 = timesFound == 3;
          if (v235) {
            backGroundClass = "three";
          } else {
            backGroundClass = "many";
          }
        }
      }
    }
    var v239 = outputWindow.document;
    var v1532 = '<tr><td class="' + backGroundClass;
    var v1511 = v1532 + '">';
    var v1558 = arrayOfItems[i$$9];
    var v1547 = JAM.call(v1558.match, v1558, [/\([^\(]+\)/], JAM.policy.p21);
    var v1533 = v1547.toString();
    var v1512 = JAM.call(v1533.replace, v1533, [/\(|\)/g, ""], JAM.policy.p22);
    var v1479 = v1511 + v1512;
    var v1403 = v1479 + '</td><td class="';
    var v1272 = v1403 + backGroundClass;
    var v1044 = v1272 + '">';
    var v726 = v1044 + tempString$$1;
    var v240 = v726 + "</td></tr>\n";
    JAM.call(v239.write, v239, [v240], JAM.policy.p24);
    timesFound = 0;
    i$$9++;
    var v727 = arrayOfItems.length;
    v241 = i$$9 < v727;
  }
  var v242 = outputWindow.document;
  JAM.call(v242.write, v242, ["</tbody></table>\n"], JAM.policy.p18);
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v243 = outputWindow.document;
  JAM.call(v243.write, v243, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p18);
  var v244 = outputWindow.document;
  var v1480 = '<tr><td class="title">' + "Pattern:";
  var v1404 = v1480 + '</td><td class="title">';
  var v1273 = v1404 + "Times found:";
  var v1045 = v1273 + '</td><td class="title">';
  var v728 = v1045 + "Percentage:";
  var v245 = v728 + "</td></tr>\n";
  JAM.call(v244.write, v244, [v245], JAM.policy.p24);
  var i$$10 = 0;
  var v729 = arrayOfItems$$1.length;
  var v254 = i$$10 < v729;
  for (;v254;) {
    var tempNumber = 0;
    var v730 = arrayOfItems$$1[i$$10];
    var v246 = JAM.call(v730.match, v730, [/\/[^\/]+\//], JAM.policy.p21);
    var matchExp$$1 = v246 + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    var v731 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p24);
    var v248 = v731 != -1;
    if (v248) {
      var v247 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p24);
      tempNumber = v247.length;
    }
    var percentage = 0;
    var v1046 = originalLength + 1;
    var v1405 = arrayOfItems$$1[i$$10];
    var v1274 = JAM.call(v1405.match, v1405, [/\d+/], JAM.policy.p21);
    var v1047 = parseFloat(v1274);
    var v732 = v1046 - v1047;
    var v251 = v732 > 0;
    if (v251) {
      var v249 = 100 * tempNumber;
      var v733 = originalLength + 1;
      var v1275 = arrayOfItems$$1[i$$10];
      var v1048 = JAM.call(v1275.match, v1275, [/\d+/], JAM.policy.p21);
      var v734 = parseFloat(v1048);
      var v250 = v733 - v734;
      percentage = v249 / v250;
    }
    var v252 = outputWindow.document;
    var v1559 = arrayOfItems$$1[i$$10];
    var v1548 = JAM.call(v1559.match, v1559, [/\([^\(]+\)\b/], JAM.policy.p21);
    var v1534 = v1548.toString();
    var v1513 = JAM.call(v1534.replace, v1534, [/\(|\)/g, ""], JAM.policy.p22);
    var v1481 = "<tr><td>" + v1513;
    var v1406 = v1481 + "</td><td>";
    var v1276 = v1406 + tempNumber;
    var v1049 = v1276 + "</td><td>";
    var v1050 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p17);
    var v735 = v1049 + v1050;
    var v253 = v735 + "</td></tr>\n";
    JAM.call(v252.write, v252, [v253], JAM.policy.p24);
    i$$10++;
    var v736 = arrayOfItems$$1.length;
    v254 = i$$10 < v736;
  }
  var v255 = outputWindow.document;
  JAM.call(v255.write, v255, ["</tbody></table>\n"], JAM.policy.p18);
  return true;
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v737 = sequence$$17.length;
  var v262 = v737 > 0;
  for (;v262;) {
    maxNum$$1 = sequence$$17.length;
    var v738 = Math.random();
    var v256 = v738 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v256], JAM.policy.p21);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p21);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p19);
    var v257 = randNum$$1 + 1;
    var v258 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v257, v258], JAM.policy.p22);
    sequence$$17 = tempString1 + tempString2;
    var v739 = tempSeq.length;
    var v261 = v739 == 60;
    if (v261) {
      var v259 = outputWindow.document;
      var v260 = tempSeq + "\n";
      JAM.call(v259.write, v259, [v260], JAM.policy.p24);
      tempSeq = "";
    }
    var v740 = sequence$$17.length;
    v262 = v740 > 0;
  }
  var v263 = outputWindow.document;
  var v264 = tempSeq + "\n";
  JAM.call(v263.write, v263, [v264], JAM.policy.p24);
  return true;
}
function pairwiseAlignProtein() {
  var theDocument = document;
  var newProteinOne = "";
  var titleOne = "";
  var newProteinTwo = "";
  var titleTwo = "";
  var maxInput$$3 = 2E3;
  var v741 = testScript();
  var v265 = v741 == false;
  if (v265) {
    return;
  }
  var v1549 = theDocument.forms;
  var v1535 = v1549[0];
  var v1514 = v1535.elements;
  var v1482 = v1514[0];
  var v1407 = checkFormElement(v1482);
  var v1277 = v1407 == false;
  var v1409 = !v1277;
  if (v1409) {
    var v1560 = theDocument.forms;
    var v1550 = v1560[0];
    var v1536 = v1550.elements;
    var v1515 = v1536[0];
    var v1483 = v1515.value;
    var v1408 = checkSequenceLength(v1483, maxInput$$3);
    v1277 = v1408 == false;
  }
  var v1051 = v1277;
  var v1279 = !v1051;
  if (v1279) {
    var v1537 = theDocument.forms;
    var v1516 = v1537[0];
    var v1484 = v1516.elements;
    var v1410 = v1484[1];
    var v1278 = checkFormElement(v1410);
    v1051 = v1278 == false;
  }
  var v742 = v1051;
  var v1053 = !v742;
  if (v1053) {
    var v1538 = theDocument.forms;
    var v1517 = v1538[0];
    var v1485 = v1517.elements;
    var v1411 = v1485[1];
    var v1280 = v1411.value;
    var v1052 = checkSequenceLength(v1280, maxInput$$3);
    v742 = v1052 == false;
  }
  var v266 = v742;
  if (v266) {
    return;
  }
  var v1486 = theDocument.forms;
  var v1412 = v1486[0];
  var v1281 = v1412.elements;
  var v1054 = v1281[5];
  var v743 = v1054.options;
  var v1487 = theDocument.forms;
  var v1413 = v1487[0];
  var v1282 = v1413.elements;
  var v1055 = v1282[5];
  var v744 = v1055.selectedIndex;
  var v267 = v743[v744];
  var MATRIX = v267.value;
  var v1518 = theDocument.forms;
  var v1488 = v1518[0];
  var v1414 = v1488.elements;
  var v1283 = v1414[6];
  var v1056 = v1283.options;
  var v1519 = theDocument.forms;
  var v1489 = v1519[0];
  var v1415 = v1489.elements;
  var v1284 = v1415[6];
  var v1057 = v1284.selectedIndex;
  var v745 = v1056[v1057];
  var v268 = v745.value;
  var BEGIN_GAP_PENALTY = parseInt(v268);
  var v1520 = theDocument.forms;
  var v1490 = v1520[0];
  var v1416 = v1490.elements;
  var v1285 = v1416[7];
  var v1058 = v1285.options;
  var v1521 = theDocument.forms;
  var v1491 = v1521[0];
  var v1417 = v1491.elements;
  var v1286 = v1417[7];
  var v1059 = v1286.selectedIndex;
  var v746 = v1058[v1059];
  var v269 = v746.value;
  var GAP_PENALTY = parseInt(v269);
  var v1522 = theDocument.forms;
  var v1492 = v1522[0];
  var v1418 = v1492.elements;
  var v1287 = v1418[8];
  var v1060 = v1287.options;
  var v1523 = theDocument.forms;
  var v1493 = v1523[0];
  var v1419 = v1493.elements;
  var v1288 = v1419[8];
  var v1061 = v1288.selectedIndex;
  var v747 = v1060[v1061];
  var v270 = v747.value;
  var END_GAP_PENALTY = parseInt(v270);
  openWindow();
  openPre();
  var v1420 = theDocument.forms;
  var v1289 = v1420[0];
  var v1062 = v1289.elements;
  var v748 = v1062[0];
  var v271 = v748.value;
  newProteinOne = getSequenceFromFasta(v271);
  newProteinOne = removeNonProtein(newProteinOne);
  var v1421 = theDocument.forms;
  var v1290 = v1421[0];
  var v1063 = v1290.elements;
  var v749 = v1063[0];
  var v272 = v749.value;
  titleOne = getTitleFromFasta(v272);
  var v1422 = theDocument.forms;
  var v1291 = v1422[0];
  var v1064 = v1291.elements;
  var v750 = v1064[1];
  var v273 = v750.value;
  newProteinTwo = getSequenceFromFasta(v273);
  newProteinTwo = removeNonProtein(newProteinTwo);
  var v1423 = theDocument.forms;
  var v1292 = v1423[0];
  var v1065 = v1292.elements;
  var v751 = v1065[1];
  var v274 = v751.value;
  titleTwo = getTitleFromFasta(v274);
  var v275 = outputWindow.document;
  var v276 = getPairwiseAlignTitle(titleOne, newProteinOne, titleTwo, newProteinTwo);
  JAM.call(v275.write, v275, [v276], JAM.policy.p24);
  var v752 = JAM.call(newProteinOne.search, newProteinOne, [/./], JAM.policy.p21);
  var v277 = v752 != -1;
  if (v277) {
    newProteinOne = JAM.call(newProteinOne.match, newProteinOne, [/./g], JAM.policy.p21);
  }
  var v753 = JAM.call(newProteinTwo.search, newProteinTwo, [/./], JAM.policy.p21);
  var v278 = v753 != -1;
  if (v278) {
    newProteinTwo = JAM.call(newProteinTwo.match, newProteinTwo, [/./g], JAM.policy.p21);
  }
  pairwiseProtein(titleOne, newProteinOne, titleTwo, newProteinTwo, MATRIX, GAP_PENALTY, BEGIN_GAP_PENALTY, END_GAP_PENALTY);
  closePre();
  closeWindow();
  return;
}
function pairwiseProtein(titleOne$$1, newProteinOne$$1, titleTwo$$1, newProteinTwo$$1, matrix, gapPenalty, beginGapPenalty, endGapPenalty) {
  var useLinearSpace = true;
  var useQuadraticSpace = false;
  var scoringMatrix;
  var v283 = matrix == "pam30";
  if (v283) {
    scoringMatrix = new Pam30;
  } else {
    var v282 = matrix == "pam70";
    if (v282) {
      scoringMatrix = new Pam70;
    } else {
      var v281 = matrix == "blosum80";
      if (v281) {
        scoringMatrix = new Blosum80;
      } else {
        var v280 = matrix == "blosum62";
        if (v280) {
          scoringMatrix = new Blosum62;
        } else {
          var v279 = matrix == "blosum45";
          if (v279) {
            scoringMatrix = new Blosum45;
          }
        }
      }
    }
  }
  var scoreSet = new ScoreSet;
  JAM.call(scoreSet.setScoreSetParam, scoreSet, [scoringMatrix, gapPenalty, beginGapPenalty, endGapPenalty], JAM.policy.p33);
  var alignment;
  if (useLinearSpace) {
    alignment = new AlignPairLinear;
    JAM.call(alignment.setAlignParam, alignment, [newProteinOne$$1, newProteinTwo$$1, scoreSet], JAM.policy.p33);
    alignment.align();
    var v284 = outputWindow.document;
    var v754 = ">" + titleOne$$1;
    var v285 = v754 + "\n";
    JAM.call(v284.write, v284, [v285], JAM.policy.p24);
    var v286 = outputWindow.document;
    var v755 = alignment.getAlignedM();
    var v287 = addReturns(v755);
    JAM.call(v286.write, v286, [v287], JAM.policy.p24);
    var v288 = outputWindow.document;
    JAM.call(v288.write, v288, ["\n"], JAM.policy.p18);
    var v289 = outputWindow.document;
    JAM.call(v289.write, v289, ["\n"], JAM.policy.p18);
    var v290 = outputWindow.document;
    var v756 = ">" + titleTwo$$1;
    var v291 = v756 + "\n";
    JAM.call(v290.write, v290, [v291], JAM.policy.p24);
    var v292 = outputWindow.document;
    var v757 = alignment.getAlignedN();
    var v293 = addReturns(v757);
    JAM.call(v292.write, v292, [v293], JAM.policy.p24);
    var v294 = outputWindow.document;
    JAM.call(v294.write, v294, ["\n\n"], JAM.policy.p18);
    var v295 = outputWindow.document;
    var v1066 = alignment.score;
    var v758 = "Alignment score: " + v1066;
    var v296 = v758 + "\n\n";
    JAM.call(v295.write, v295, [v296], JAM.policy.p24);
  }
  if (useQuadraticSpace) {
    alignment = new AlignPairQuad;
    JAM.call(alignment.initializeMatrix, alignment, [newProteinOne$$1, newProteinTwo$$1, scoreSet], JAM.policy.p33);
    alignment.fillMatrix();
    alignment.align();
    var v297 = outputWindow.document;
    var v759 = ">" + titleOne$$1;
    var v298 = v759 + "\n";
    JAM.call(v297.write, v297, [v298], JAM.policy.p24);
    var v299 = outputWindow.document;
    var v760 = alignment.getAlignedM();
    var v300 = addReturns(v760);
    JAM.call(v299.write, v299, [v300], JAM.policy.p24);
    var v301 = outputWindow.document;
    JAM.call(v301.write, v301, ["\n"], JAM.policy.p18);
    var v302 = outputWindow.document;
    JAM.call(v302.write, v302, ["\n"], JAM.policy.p18);
    var v303 = outputWindow.document;
    var v761 = ">" + titleTwo$$1;
    var v304 = v761 + "\n";
    JAM.call(v303.write, v303, [v304], JAM.policy.p24);
    var v305 = outputWindow.document;
    var v762 = alignment.getAlignedN();
    var v306 = addReturns(v762);
    JAM.call(v305.write, v305, [v306], JAM.policy.p24);
    var v307 = outputWindow.document;
    JAM.call(v307.write, v307, ["\n\n"], JAM.policy.p18);
    var v308 = outputWindow.document;
    var v1067 = alignment.score;
    var v763 = "Alignment score: " + v1067;
    var v309 = v763 + "\n\n";
    JAM.call(v308.write, v308, [v309], JAM.policy.p24);
  }
  return;
}
function getScore(r1$$1, r2) {
  var v310 = this.scoringMatrix;
  return JAM.call(v310.scoringMatrix_getScore, v310, [r1$$1, r2], JAM.policy.p33);
}
function setScoreSetParam(scoringMatrix$$1, gapPenalty$$1, beginGapPenalty$$1, endGapPenalty$$1) {
  this.scoringMatrix = scoringMatrix$$1;
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
  var v1068 = this.scoreHash;
  var v1069 = r1$$2 + r2$$1;
  var v764 = v1068[v1069];
  var v314 = v764 == null;
  if (v314) {
    var v1070 = "Unrecognized residue pair: " + r1$$2;
    var v765 = v1070 + ", ";
    var v311 = v765 + r2$$1;
    throw v311 + ".";
  } else {
    var v312 = this.scoreHash;
    var v313 = r1$$2 + r2$$1;
    return v312[v313];
  }
  return;
}
function scoringMatrix_fillHash(matrix$$1) {
  var v315 = matrix$$1[0];
  var cols = JAM.call(v315.split, v315, [/\s+/], JAM.policy.p21);
  var cells;
  var i$$11 = 1;
  var v766 = matrix$$1.length;
  var v320 = i$$11 < v766;
  for (;v320;) {
    var v316 = matrix$$1[i$$11];
    cells = JAM.call(v316.split, v316, [/\s+/], JAM.policy.p21);
    var j$$10 = 1;
    var v1071 = cols.length;
    var v767 = v1071 + 1;
    var v319 = j$$10 < v767;
    for (;v319;) {
      var v317 = this.scoreHash;
      var v1072 = cells[0];
      var v768 = v1072.toLowerCase();
      var v1293 = j$$10 - 1;
      var v1073 = cols[v1293];
      var v769 = v1073.toLowerCase();
      var v318 = v768 + v769;
      var v770 = cells[j$$10];
      var v1596 = parseInt(v770);
      introspect(JAM.policy.p6) {
        v317[v318] = v1596;
      }
      j$$10++;
      var v1074 = cols.length;
      var v771 = v1074 + 1;
      v319 = j$$10 < v771;
    }
    i$$11++;
    var v772 = matrix$$1.length;
    v320 = i$$11 < v772;
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
  JAM.call(this.scoringMatrix_fillHash, this, [matrix$$2], JAM.policy.p24);
  return;
}
function Blosum45() {
  var matrix$$3 = new Array("A  R  N  D  C  Q  E  G  H  I  L  K  M  F  P  S  T  W  Y  V", "A  5 -2 -1 -2 -1 -1 -1  0 -2 -1 -1 -1 -1 -2 -1  1  0 -2 -2  0", "R -2  7  0 -1 -3  1  0 -2  0 -3 -2  3 -1 -2 -2 -1 -1 -2 -1 -2", "N -1  0  6  2 -2  0  0  0  1 -2 -3  0 -2 -2 -2  1  0 -4 -2 -3", "D -2 -1  2  7 -3  0  2 -1  0 -4 -3  0 -3 -4 -1  0 -1 -4 -2 -3", "C -1 -3 -2 -3 12 -3 -3 -3 -3 -3 -2 -3 -2 -2 -4 -1 -1 -5 -3 -1", "Q -1  1  0  0 -3  6  2 -2  1 -2 -2  1  0 -4 -1  0 -1 -2 -1 -3", "E -1  0  0  2 -3  2  6 -2  0 -3 -2  1 -2 -3  0  0 -1 -3 -2 -3", 
  "G  0 -2  0 -1 -3 -2 -2  7 -2 -4 -3 -2 -2 -3 -2  0 -2 -2 -3 -3", "H -2  0  1  0 -3  1  0 -2 10 -3 -2 -1  0 -2 -2 -1 -2 -3  2 -3", "I -1 -3 -2 -4 -3 -2 -3 -4 -3  5  2 -3  2  0 -2 -2 -1 -2  0  3", "L -1 -2 -3 -3 -2 -2 -2 -3 -2  2  5 -3  2  1 -3 -3 -1 -2  0  1", "K -1  3  0  0 -3  1  1 -2 -1 -3 -3  5 -1 -3 -1 -1 -1 -2 -1 -2", "M -1 -1 -2 -3 -2  0 -2 -2  0  2  2 -1  6  0 -2 -2 -1 -2  0  1", "F -2 -2 -2 -4 -2 -4 -3 -3 -2  0  1 -3  0  8 -3 -2 -1  1  3  0", "P -1 -2 -2 -1 -4 -1  0 -2 -2 -2 -3 -1 -2 -3  9 -1 -1 -3 -3 -3", 
  "S  1 -1  1  0 -1  0  0  0 -1 -2 -3 -1 -2 -2 -1  4  2 -4 -2 -1", "T  0 -1  0 -1 -1 -1 -1 -2 -2 -1 -1 -1 -1 -1 -1  2  5 -3 -1  0", "W -2 -2 -4 -4 -5 -2 -3 -2 -3 -2 -2 -2 -2  1 -3 -4 -3 15  3 -3", "Y -2 -1 -2 -2 -3 -1 -2 -3  2  0  0 -1  0  3 -3 -2 -1  3  8 -1", "V  0 -2 -3 -3 -1 -3 -3 -3 -3  3  1 -2  1  0 -3 -1  0 -3 -1  5");
  JAM.call(this.scoringMatrix_fillHash, this, [matrix$$3], JAM.policy.p24);
  return;
}
function Blosum80() {
  var matrix$$4 = new Array("A  R  N  D  C  Q  E  G  H  I  L  K  M  F  P  S  T  W  Y  V", "A  5 -2 -2 -2 -1 -1 -1  0 -2 -2 -2 -1 -1 -3 -1  1  0 -3 -2  0", "R -2  6 -1 -2 -4  1 -1 -3  0 -3 -3  2 -2 -4 -2 -1 -1 -4 -3 -3", "N -2 -1  6  1 -3  0 -1 -1  0 -4 -4  0 -3 -4 -3  0  0 -4 -3 -4", "D -2 -2  1  6 -4 -1  1 -2 -2 -4 -5 -1 -4 -4 -2 -1 -1 -6 -4 -4", "C -1 -4 -3 -4  9 -4 -5 -4 -4 -2 -2 -4 -2 -3 -4 -2 -1 -3 -3 -1", "Q -1  1  0 -1 -4  6  2 -2  1 -3 -3  1  0 -4 -2  0 -1 -3 -2 -3", "E -1 -1 -1  1 -5  2  6 -3  0 -4 -4  1 -2 -4 -2  0 -1 -4 -3 -3", 
  "G  0 -3 -1 -2 -4 -2 -3  6 -3 -5 -4 -2 -4 -4 -3 -1 -2 -4 -4 -4", "H -2  0  0 -2 -4  1  0 -3  8 -4 -3 -1 -2 -2 -3 -1 -2 -3  2 -4", "I -2 -3 -4 -4 -2 -3 -4 -5 -4  5  1 -3  1 -1 -4 -3 -1 -3 -2  3", "L -2 -3 -4 -5 -2 -3 -4 -4 -3  1  4 -3  2  0 -3 -3 -2 -2 -2  1", "K -1  2  0 -1 -4  1  1 -2 -1 -3 -3  5 -2 -4 -1 -1 -1 -4 -3 -3", "M -1 -2 -3 -4 -2  0 -2 -4 -2  1  2 -2  6  0 -3 -2 -1 -2 -2  1", "F -3 -4 -4 -4 -3 -4 -4 -4 -2 -1  0 -4  0  6 -4 -3 -2  0  3 -1", "P -1 -2 -3 -2 -4 -2 -2 -3 -3 -4 -3 -1 -3 -4  8 -1 -2 -5 -4 -3", 
  "S  1 -1  0 -1 -2  0  0 -1 -1 -3 -3 -1 -2 -3 -1  5  1 -4 -2 -2", "T  0 -1  0 -1 -1 -1 -1 -2 -2 -1 -2 -1 -1 -2 -2  1  5 -4 -2  0", "W -3 -4 -4 -6 -3 -3 -4 -4 -3 -3 -2 -4 -2  0 -5 -4 -4 11  2 -3", "Y -2 -3 -3 -4 -3 -2 -3 -4  2 -2 -2 -3 -2  3 -4 -2 -2  2  7 -2", "V  0 -3 -4 -4 -1 -3 -3 -4 -4  3  1 -3  1 -1 -3 -2  0 -3 -2  4");
  JAM.call(this.scoringMatrix_fillHash, this, [matrix$$4], JAM.policy.p24);
  return;
}
function Pam70() {
  var matrix$$5 = new Array("A   R   N   D   C   Q   E   G   H   I   L   K   M   F   P   S   T   W   Y   V", "A   5  -4  -2  -1  -4  -2  -1   0  -4  -2  -4  -4  -3  -6   0   1   1  -9  -5  -1", "R  -4   8  -3  -6  -5   0  -5  -6   0  -3  -6   2  -2  -7  -2  -1  -4   0  -7  -5", "N  -2  -3   6   3  -7  -1   0  -1   1  -3  -5   0  -5  -6  -3   1   0  -6  -3  -5", "D  -1  -6   3   6  -9   0   3  -1  -1  -5  -8  -2  -7 -10  -4  -1  -2 -10  -7  -5", "C  -4  -5  -7  -9   9  -9  -9  -6  -5  -4 -10  -9  -9  -8  -5  -1  -5 -11  -2  -4", 
  "Q  -2   0  -1   0  -9   7   2  -4   2  -5  -3  -1  -2  -9  -1  -3  -3  -8  -8  -4", "E  -1  -5   0   3  -9   2   6  -2  -2  -4  -6  -2  -4  -9  -3  -2  -3 -11  -6  -4", "G   0  -6  -1  -1  -6  -4  -2   6  -6  -6  -7  -5  -6  -7  -3   0  -3 -10  -9  -3", "H  -4   0   1  -1  -5   2  -2  -6   8  -6  -4  -3  -6  -4  -2  -3  -4  -5  -1  -4", "I  -2  -3  -3  -5  -4  -5  -4  -6  -6   7   1  -4   1   0  -5  -4  -1  -9  -4   3", "L  -4  -6  -5  -8 -10  -3  -6  -7  -4   1   6  -5   2  -1  -5  -6  -4  -4  -4   0", 
  "K  -4   2   0  -2  -9  -1  -2  -5  -3  -4  -5   6   0  -9  -4  -2  -1  -7  -7  -6", "M  -3  -2  -5  -7  -9  -2  -4  -6  -6   1   2   0  10  -2  -5  -3  -2  -8  -7   0", "F  -6  -7  -6 -10  -8  -9  -9  -7  -4   0  -1  -9  -2   8  -7  -4  -6  -2   4  -5", "P   0  -2  -3  -4  -5  -1  -3  -3  -2  -5  -5  -4  -5  -7   7   0  -2  -9  -9  -3", "S   1  -1   1  -1  -1  -3  -2   0  -3  -4  -6  -2  -3  -4   0   5   2  -3  -5  -3", "T   1  -4   0  -2  -5  -3  -3  -3  -4  -1  -4  -1  -2  -6  -2   2   6  -8  -4  -1", 
  "W  -9   0  -6 -10 -11  -8 -11 -10  -5  -9  -4  -7  -8  -2  -9  -3  -8  13  -3 -10", "Y  -5  -7  -3  -7  -2  -8  -6  -9  -1  -4  -4  -7  -7   4  -9  -5  -4  -3   9  -5", "V  -1  -5  -5  -5  -4  -4  -4  -3  -4   3   0  -6   0  -5  -3  -3  -1 -10  -5   6");
  JAM.call(this.scoringMatrix_fillHash, this, [matrix$$5], JAM.policy.p24);
  return;
}
function Pam30() {
  var matrix$$6 = new Array("A   R   N   D   C   Q   E   G   H   I   L   K   M   F   P   S   T   W   Y   V", "A   6  -7  -4  -3  -6  -4  -2  -2  -7  -5  -6  -7  -5  -8  -2   0  -1 -13  -8  -2", "R  -7   8  -6 -10  -8  -2  -9  -9  -2  -5  -8   0  -4  -9  -4  -3  -6  -2 -10  -8", "N  -4  -6   8   2 -11  -3  -2  -3   0  -5  -7  -1  -9  -9  -6   0  -2  -8  -4  -8", "D  -3 -10   2   8 -14  -2   2  -3  -4  -7 -12  -4 -11 -15  -8  -4  -5 -15 -11  -8", "C  -6  -8 -11 -14  10 -14 -14  -9  -7  -6 -15 -14 -13 -13  -8  -3  -8 -15  -4  -6", 
  "Q  -4  -2  -3  -2 -14   8   1  -7   1  -8  -5  -3  -4 -13  -3  -5  -5 -13 -12  -7", "E  -2  -9  -2   2 -14   1   8  -4  -5  -5  -9  -4  -7 -14  -5  -4  -6 -17  -8  -6", "G  -2  -9  -3  -3  -9  -7  -4   6  -9 -11 -10  -7  -8  -9  -6  -2  -6 -15 -14  -5", "H  -7  -2   0  -4  -7   1  -5  -9   9  -9  -6  -6 -10  -6  -4  -6  -7  -7  -3  -6", "I  -5  -5  -5  -7  -6  -8  -5 -11  -9   8  -1  -6  -1  -2  -8  -7  -2 -14  -6   2", "L  -6  -8  -7 -12 -15  -5  -9 -10  -6  -1   7  -8   1  -3  -7  -8  -7  -6  -7  -2", 
  "K  -7   0  -1  -4 -14  -3  -4  -7  -6  -6  -8   7  -2 -14  -6  -4  -3 -12  -9  -9", "M  -5  -4  -9 -11 -13  -4  -7  -8 -10  -1   1  -2  11  -4  -8  -5  -4 -13 -11  -1", "F  -8  -9  -9 -15 -13 -13 -14  -9  -6  -2  -3 -14  -4   9 -10  -6  -9  -4   2  -8", "P  -2  -4  -6  -8  -8  -3  -5  -6  -4  -8  -7  -6  -8 -10   8  -2  -4 -14 -13  -6", "S   0  -3   0  -4  -3  -5  -4  -2  -6  -7  -8  -4  -5  -6  -2   6   0  -5  -7  -6", "T  -1  -6  -2  -5  -8  -5  -6  -6  -7  -2  -7  -3  -4  -9  -4   0   7 -13  -6  -3", 
  "W -13  -2  -8 -15 -15 -13 -17 -15  -7 -14  -6 -12 -13  -4 -14  -5 -13  13  -5 -15", "Y  -8 -10  -4 -11  -4 -12  -8 -14  -3  -6  -7  -9 -11   2 -13  -7  -6  -5  10  -7", "V  -2  -8  -8  -8  -6  -7  -6  -5  -6   2  -2  -9  -1  -8  -6  -6  -3 -15  -7   7");
  JAM.call(this.scoringMatrix_fillHash, this, [matrix$$6], JAM.policy.p24);
  return;
}
function align() {
  var v1075 = this.M;
  var v773 = v1075.length;
  var v337 = v773 == 0;
  if (v337) {
    var j$$11 = 1;
    var v1076 = this.N;
    var v774 = v1076.length;
    var v326 = j$$11 <= v774;
    for (;v326;) {
      var v321 = this.alignedM;
      JAM.call(v321.push, v321, ["-"], JAM.policy.p18);
      var v322 = this.alignedN;
      var v775 = this.N;
      var v776 = j$$11 - 1;
      var v323 = v775[v776];
      JAM.call(v322.push, v322, [v323], JAM.policy.p24);
      var v324 = this.score;
      var v777 = this.scoreSet;
      var v325 = v777.gap;
      this.score = v324 + v325;
      j$$11++;
      var v1077 = this.N;
      var v778 = v1077.length;
      v326 = j$$11 <= v778;
    }
  } else {
    var v1078 = this.N;
    var v779 = v1078.length;
    var v336 = v779 == 0;
    if (v336) {
      j$$11 = 1;
      var v1079 = this.M;
      var v780 = v1079.length;
      var v332 = j$$11 <= v780;
      for (;v332;) {
        var v327 = this.alignedN;
        JAM.call(v327.push, v327, ["-"], JAM.policy.p18);
        var v328 = this.alignedM;
        var v781 = this.M;
        var v782 = j$$11 - 1;
        var v329 = v781[v782];
        JAM.call(v328.push, v328, [v329], JAM.policy.p24);
        var v330 = this.score;
        var v783 = this.scoreSet;
        var v331 = v783.gap;
        this.score = v330 + v331;
        j$$11++;
        var v1080 = this.M;
        var v784 = v1080.length;
        v332 = j$$11 <= v784;
      }
    } else {
      var v1294 = this.M;
      var v1081 = v1294.length;
      var v785 = v1081 == 0;
      if (v785) {
        var v1295 = this.N;
        var v1082 = v1295.length;
        v785 = v1082 == 0;
      }
      var v335 = v785;
      if (v335) {
      } else {
        var v786 = this.M;
        var v333 = v786.length;
        var v787 = this.N;
        var v334 = v787.length;
        JAM.call(this.path, this, [0, 0, v333, v334], JAM.policy.p19);
      }
    }
  }
  return;
}
function path(i1, j1, i2, j2) {
  var v1083 = i1 + 1;
  var v788 = v1083 == i2;
  var v1084 = !v788;
  if (v1084) {
    v788 = j1 == j2;
  }
  var v434 = v788;
  if (v434) {
    var subM = new Array;
    var subN = new Array;
    var i$$12 = i1 + 1;
    var v339 = i$$12 <= i2;
    for (;v339;) {
      var v789 = this.M;
      var v790 = i$$12 - 1;
      var v338 = v789[v790];
      JAM.call(subM.push, subM, [v338], JAM.policy.p24);
      i$$12++;
      v339 = i$$12 <= i2;
    }
    var j$$12 = j1 + 1;
    var v341 = j$$12 <= j2;
    for (;v341;) {
      var v791 = this.N;
      var v792 = j$$12 - 1;
      var v340 = v791[v792];
      JAM.call(subN.push, subN, [v340], JAM.policy.p24);
      j$$12++;
      v341 = j$$12 <= j2;
    }
    var alignment$$1 = new AlignPairQuad;
    subScoreSet = new ScoreSet;
    var v364 = j1 == j2;
    if (v364) {
      var v355 = j1 == 0;
      if (v355) {
        var v793 = this.scoreSet;
        var v342 = v793.scoringMatrix;
        var v794 = this.scoreSet;
        var v343 = v794.beginGap;
        var v795 = this.scoreSet;
        var v344 = v795.beginGap;
        var v796 = this.scoreSet;
        var v345 = v796.beginGap;
        JAM.call(subScoreSet.setScoreSetParam, subScoreSet, [v342, v343, v344, v345], JAM.policy.p33);
      } else {
        var v1085 = this.N;
        var v797 = v1085.length;
        var v354 = j1 == v797;
        if (v354) {
          var v798 = this.scoreSet;
          var v346 = v798.scoringMatrix;
          var v799 = this.scoreSet;
          var v347 = v799.endGap;
          var v800 = this.scoreSet;
          var v348 = v800.endGap;
          var v801 = this.scoreSet;
          var v349 = v801.endGap;
          JAM.call(subScoreSet.setScoreSetParam, subScoreSet, [v346, v347, v348, v349], JAM.policy.p33);
        } else {
          var v802 = this.scoreSet;
          var v350 = v802.scoringMatrix;
          var v803 = this.scoreSet;
          var v351 = v803.gap;
          var v804 = this.scoreSet;
          var v352 = v804.gap;
          var v805 = this.scoreSet;
          var v353 = v805.gap;
          JAM.call(subScoreSet.setScoreSetParam, subScoreSet, [v350, v351, v352, v353], JAM.policy.p33);
        }
      }
    } else {
      var v806 = this.scoreSet;
      var v356 = v806.scoringMatrix;
      var v807 = this.scoreSet;
      var v357 = v807.gap;
      var v808 = this.scoreSet;
      var v358 = v808.beginGap;
      var v809 = this.scoreSet;
      var v359 = v809.endGap;
      JAM.call(subScoreSet.setScoreSetParam, subScoreSet, [v356, v357, v358, v359], JAM.policy.p33);
      subScoreSet.useBeginGapTop = false;
      subScoreSet.useBeginGapLeft = false;
      subScoreSet.useEndGapBottom = false;
      subScoreSet.useEndGapRight = false;
      var v360 = i1 == 0;
      if (v360) {
        subScoreSet.useBeginGapTop = true;
      }
      var v361 = j1 == 0;
      if (v361) {
        subScoreSet.useBeginGapLeft = true;
      }
      var v1086 = this.N;
      var v810 = v1086.length;
      var v362 = j2 == v810;
      if (v362) {
        subScoreSet.useEndGapRight = true;
      }
      var v1087 = this.M;
      var v811 = v1087.length;
      var v363 = i2 == v811;
      if (v363) {
        subScoreSet.useEndGapBottom = true;
      }
    }
    JAM.call(alignment$$1.initializeMatrix, alignment$$1, [subM, subN, subScoreSet], JAM.policy.p33);
    alignment$$1.fillMatrix();
    alignment$$1.align();
    var v365 = this.alignedM;
    var v366 = alignment$$1.getAlignedM();
    JAM.call(v365.push, v365, [v366], JAM.policy.p24);
    var v367 = this.alignedN;
    var v368 = alignment$$1.getAlignedN();
    JAM.call(v367.push, v367, [v368], JAM.policy.p24);
    var v369 = this.score;
    var v370 = alignment$$1.score;
    this.score = v369 + v370;
  } else {
    var v812 = i1 + i2;
    var v371 = v812 / 2;
    var middle = JAM.call(Math.floor, Math, [v371], JAM.policy.p24);
    var v372 = this.Sn;
    introspect(JAM.policy.p6) {
      v372[j1] = 0;
    }
    var v377 = i1 == 0;
    if (v377) {
      j$$12 = j1 + 1;
      var v374 = j$$12 <= j2;
      for (;v374;) {
        var v373 = this.Sn;
        var v1088 = this.Sn;
        var v1089 = j$$12 - 1;
        var v813 = v1088[v1089];
        var v1090 = this.scoreSet;
        var v814 = v1090.beginGap;
        introspect(JAM.policy.p6) {
          v373[j$$12] = v813 - v814;
        }
        j$$12++;
        v374 = j$$12 <= j2;
      }
    } else {
      j$$12 = j1 + 1;
      var v376 = j$$12 <= j2;
      for (;v376;) {
        var v375 = this.Sn;
        var v1091 = this.Sn;
        var v1092 = j$$12 - 1;
        var v815 = v1091[v1092];
        var v1093 = this.scoreSet;
        var v816 = v1093.gap;
        introspect(JAM.policy.p6) {
          v375[j$$12] = v815 - v816;
        }
        j$$12++;
        v376 = j$$12 <= j2;
      }
    }
    var diag;
    var left$$1;
    i$$12 = i1 + 1;
    var v399 = i$$12 <= middle;
    for (;v399;) {
      var v378 = this.Sn;
      diag = v378[j1];
      var v383 = j1 == 0;
      if (v383) {
        var v817 = this.Sn;
        var v379 = v817[j1];
        var v818 = this.scoreSet;
        var v380 = v818.beginGap;
        left$$1 = v379 - v380;
      } else {
        var v819 = this.Sn;
        var v381 = v819[j1];
        var v820 = this.scoreSet;
        var v382 = v820.gap;
        left$$1 = v381 - v382;
      }
      var v384 = this.Sn;
      introspect(JAM.policy.p6) {
        v384[j1] = left$$1;
      }
      j$$12 = j1 + 1;
      var v398 = j$$12 <= j2;
      for (;v398;) {
        var v1296 = this.N;
        var v1094 = v1296.length;
        var v821 = j$$12 == v1094;
        if (v821) {
          var v1297 = this.M;
          var v1095 = v1297.length;
          v821 = i$$12 == v1095;
        }
        var v395 = v821;
        if (v395) {
          var v1096 = this.Sn;
          var v822 = v1096[j$$12];
          var v1097 = this.scoreSet;
          var v823 = v1097.endGap;
          var v385 = v822 - v823;
          var v1298 = this.scoreSet;
          var v1098 = v1298.endGap;
          var v824 = left$$1 - v1098;
          var v1299 = this.scoreSet;
          var v1424 = this.M;
          var v1425 = i$$12 - 1;
          var v1300 = v1424[v1425];
          var v1426 = this.N;
          var v1427 = j$$12 - 1;
          var v1301 = v1426[v1427];
          var v1099 = JAM.call(v1299.getScore, v1299, [v1300, v1301], JAM.policy.p33);
          var v825 = diag + v1099;
          var v386 = JAM.call(Math.max, Math, [v824, v825], JAM.policy.p33);
          left$$1 = JAM.call(Math.max, Math, [v385, v386], JAM.policy.p22);
        } else {
          var v1100 = this.M;
          var v826 = v1100.length;
          var v394 = i$$12 == v826;
          if (v394) {
            var v1101 = this.Sn;
            var v827 = v1101[j$$12];
            var v1102 = this.scoreSet;
            var v828 = v1102.gap;
            var v387 = v827 - v828;
            var v1302 = this.scoreSet;
            var v1103 = v1302.endGap;
            var v829 = left$$1 - v1103;
            var v1303 = this.scoreSet;
            var v1428 = this.M;
            var v1429 = i$$12 - 1;
            var v1304 = v1428[v1429];
            var v1430 = this.N;
            var v1431 = j$$12 - 1;
            var v1305 = v1430[v1431];
            var v1104 = JAM.call(v1303.getScore, v1303, [v1304, v1305], JAM.policy.p33);
            var v830 = diag + v1104;
            var v388 = JAM.call(Math.max, Math, [v829, v830], JAM.policy.p33);
            left$$1 = JAM.call(Math.max, Math, [v387, v388], JAM.policy.p22);
          } else {
            var v1105 = this.N;
            var v831 = v1105.length;
            var v393 = j$$12 == v831;
            if (v393) {
              var v1106 = this.Sn;
              var v832 = v1106[j$$12];
              var v1107 = this.scoreSet;
              var v833 = v1107.endGap;
              var v389 = v832 - v833;
              var v1306 = this.scoreSet;
              var v1108 = v1306.gap;
              var v834 = left$$1 - v1108;
              var v1307 = this.scoreSet;
              var v1432 = this.M;
              var v1433 = i$$12 - 1;
              var v1308 = v1432[v1433];
              var v1434 = this.N;
              var v1435 = j$$12 - 1;
              var v1309 = v1434[v1435];
              var v1109 = JAM.call(v1307.getScore, v1307, [v1308, v1309], JAM.policy.p33);
              var v835 = diag + v1109;
              var v390 = JAM.call(Math.max, Math, [v834, v835], JAM.policy.p33);
              left$$1 = JAM.call(Math.max, Math, [v389, v390], JAM.policy.p22);
            } else {
              var v1110 = this.Sn;
              var v836 = v1110[j$$12];
              var v1111 = this.scoreSet;
              var v837 = v1111.gap;
              var v391 = v836 - v837;
              var v1310 = this.scoreSet;
              var v1112 = v1310.gap;
              var v838 = left$$1 - v1112;
              var v1311 = this.scoreSet;
              var v1436 = this.M;
              var v1437 = i$$12 - 1;
              var v1312 = v1436[v1437];
              var v1438 = this.N;
              var v1439 = j$$12 - 1;
              var v1313 = v1438[v1439];
              var v1113 = JAM.call(v1311.getScore, v1311, [v1312, v1313], JAM.policy.p33);
              var v839 = diag + v1113;
              var v392 = JAM.call(Math.max, Math, [v838, v839], JAM.policy.p33);
              left$$1 = JAM.call(Math.max, Math, [v391, v392], JAM.policy.p22);
            }
          }
        }
        var v396 = this.Sn;
        diag = v396[j$$12];
        var v397 = this.Sn;
        introspect(JAM.policy.p6) {
          v397[j$$12] = left$$1;
        }
        j$$12++;
        v398 = j$$12 <= j2;
      }
      i$$12++;
      v399 = i$$12 <= middle;
    }
    var v400 = this.Sp;
    introspect(JAM.policy.p6) {
      v400[j2] = 0;
    }
    var v1114 = this.M;
    var v840 = v1114.length;
    var v405 = i2 == v840;
    if (v405) {
      j$$12 = j2 - 1;
      var v402 = j$$12 >= j1;
      for (;v402;) {
        var v401 = this.Sp;
        var v1115 = this.Sp;
        var v1116 = j$$12 + 1;
        var v841 = v1115[v1116];
        var v1117 = this.scoreSet;
        var v842 = v1117.endGap;
        introspect(JAM.policy.p6) {
          v401[j$$12] = v841 - v842;
        }
        j$$12--;
        v402 = j$$12 >= j1;
      }
    } else {
      j$$12 = j2 - 1;
      var v404 = j$$12 >= j1;
      for (;v404;) {
        var v403 = this.Sp;
        var v1118 = this.Sp;
        var v1119 = j$$12 + 1;
        var v843 = v1118[v1119];
        var v1120 = this.scoreSet;
        var v844 = v1120.gap;
        introspect(JAM.policy.p6) {
          v403[j$$12] = v843 - v844;
        }
        j$$12--;
        v404 = j$$12 >= j1;
      }
    }
    var right$$1;
    i$$12 = i2 - 1;
    var v427 = i$$12 >= middle;
    for (;v427;) {
      var v406 = this.Sp;
      diag = v406[j2];
      var v1121 = this.N;
      var v845 = v1121.length;
      var v411 = j2 == v845;
      if (v411) {
        var v846 = this.Sp;
        var v407 = v846[j2];
        var v847 = this.scoreSet;
        var v408 = v847.endGap;
        right$$1 = v407 - v408;
      } else {
        var v848 = this.Sp;
        var v409 = v848[j2];
        var v849 = this.scoreSet;
        var v410 = v849.gap;
        right$$1 = v409 - v410;
      }
      var v412 = this.Sp;
      introspect(JAM.policy.p6) {
        v412[j2] = right$$1;
      }
      j$$12 = j2 - 1;
      var v426 = j$$12 >= j1;
      for (;v426;) {
        var v850 = j$$12 == 0;
        if (v850) {
          v850 = i$$12 == 0;
        }
        var v423 = v850;
        if (v423) {
          var v1122 = this.Sp;
          var v851 = v1122[j$$12];
          var v1123 = this.scoreSet;
          var v852 = v1123.beginGap;
          var v413 = v851 - v852;
          var v1314 = this.scoreSet;
          var v1124 = v1314.beginGap;
          var v853 = right$$1 - v1124;
          var v1315 = this.scoreSet;
          var v1440 = this.M;
          var v1494 = i$$12 + 1;
          var v1441 = v1494 - 1;
          var v1316 = v1440[v1441];
          var v1442 = this.N;
          var v1495 = j$$12 + 1;
          var v1443 = v1495 - 1;
          var v1317 = v1442[v1443];
          var v1125 = JAM.call(v1315.getScore, v1315, [v1316, v1317], JAM.policy.p33);
          var v854 = diag + v1125;
          var v414 = JAM.call(Math.max, Math, [v853, v854], JAM.policy.p33);
          right$$1 = JAM.call(Math.max, Math, [v413, v414], JAM.policy.p22);
        } else {
          var v422 = j$$12 == 0;
          if (v422) {
            var v1126 = this.Sp;
            var v855 = v1126[j$$12];
            var v1127 = this.scoreSet;
            var v856 = v1127.beginGap;
            var v415 = v855 - v856;
            var v1318 = this.scoreSet;
            var v1128 = v1318.gap;
            var v857 = right$$1 - v1128;
            var v1319 = this.scoreSet;
            var v1444 = this.M;
            var v1496 = i$$12 + 1;
            var v1445 = v1496 - 1;
            var v1320 = v1444[v1445];
            var v1446 = this.N;
            var v1497 = j$$12 + 1;
            var v1447 = v1497 - 1;
            var v1321 = v1446[v1447];
            var v1129 = JAM.call(v1319.getScore, v1319, [v1320, v1321], JAM.policy.p33);
            var v858 = diag + v1129;
            var v416 = JAM.call(Math.max, Math, [v857, v858], JAM.policy.p33);
            right$$1 = JAM.call(Math.max, Math, [v415, v416], JAM.policy.p22);
          } else {
            var v421 = i$$12 == 0;
            if (v421) {
              var v1130 = this.Sp;
              var v859 = v1130[j$$12];
              var v1131 = this.scoreSet;
              var v860 = v1131.gap;
              var v417 = v859 - v860;
              var v1322 = this.scoreSet;
              var v1132 = v1322.beginGap;
              var v861 = right$$1 - v1132;
              var v1323 = this.scoreSet;
              var v1448 = this.M;
              var v1498 = i$$12 + 1;
              var v1449 = v1498 - 1;
              var v1324 = v1448[v1449];
              var v1450 = this.N;
              var v1499 = j$$12 + 1;
              var v1451 = v1499 - 1;
              var v1325 = v1450[v1451];
              var v1133 = JAM.call(v1323.getScore, v1323, [v1324, v1325], JAM.policy.p33);
              var v862 = diag + v1133;
              var v418 = JAM.call(Math.max, Math, [v861, v862], JAM.policy.p33);
              right$$1 = JAM.call(Math.max, Math, [v417, v418], JAM.policy.p22);
            } else {
              var v1134 = this.Sp;
              var v863 = v1134[j$$12];
              var v1135 = this.scoreSet;
              var v864 = v1135.gap;
              var v419 = v863 - v864;
              var v1326 = this.scoreSet;
              var v1136 = v1326.gap;
              var v865 = right$$1 - v1136;
              var v1327 = this.scoreSet;
              var v1452 = this.M;
              var v1500 = i$$12 + 1;
              var v1453 = v1500 - 1;
              var v1328 = v1452[v1453];
              var v1454 = this.N;
              var v1501 = j$$12 + 1;
              var v1455 = v1501 - 1;
              var v1329 = v1454[v1455];
              var v1137 = JAM.call(v1327.getScore, v1327, [v1328, v1329], JAM.policy.p33);
              var v866 = diag + v1137;
              var v420 = JAM.call(Math.max, Math, [v865, v866], JAM.policy.p33);
              right$$1 = JAM.call(Math.max, Math, [v419, v420], JAM.policy.p22);
            }
          }
        }
        var v424 = this.Sp;
        diag = v424[j$$12];
        var v425 = this.Sp;
        introspect(JAM.policy.p6) {
          v425[j$$12] = right$$1;
        }
        j$$12--;
        v426 = j$$12 >= j1;
      }
      i$$12--;
      v427 = i$$12 >= middle;
    }
    var v867 = this.Sn;
    var v428 = v867[j1];
    var v868 = this.Sp;
    var v429 = v868[j1];
    var maxValue = v428 + v429;
    var maxJ = j1;
    j$$12 = j1 + 1;
    var v433 = j$$12 <= j2;
    for (;v433;) {
      var v1330 = this.Sn;
      var v1138 = v1330[j$$12];
      var v1331 = this.Sp;
      var v1139 = v1331[j$$12];
      var v869 = v1138 + v1139;
      var v432 = v869 >= maxValue;
      if (v432) {
        var v870 = this.Sn;
        var v430 = v870[j$$12];
        var v871 = this.Sp;
        var v431 = v871[j$$12];
        maxValue = v430 + v431;
        maxJ = j$$12;
      }
      j$$12++;
      v433 = j$$12 <= j2;
    }
    JAM.call(this.path, this, [i1, j1, middle, maxJ], JAM.policy.p33);
    JAM.call(this.path, this, [middle, maxJ, i2, j2], JAM.policy.p22);
  }
  return;
}
function getAlignedM() {
  var v435 = this.alignedM;
  return JAM.call(v435.join, v435, [""], JAM.policy.p18);
}
function getAlignedN() {
  var v436 = this.alignedN;
  return JAM.call(v436.join, v436, [""], JAM.policy.p18);
}
function setAlignParam(M, N, scoreSet$$1) {
  this.M = M;
  this.N = N;
  var v1597 = new Array;
  this.alignedM = v1597;
  var v1598 = new Array;
  this.alignedN = v1598;
  this.scoreSet = scoreSet$$1;
  var v872 = this.N;
  var v437 = v872.length;
  var v1599 = new Array(v437);
  this.Sn = v1599;
  var v873 = this.N;
  var v438 = v873.length;
  var v1600 = new Array(v438);
  this.Sp = v1600;
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
  var v1140 = this.M;
  var v874 = v1140.length;
  var v439 = v874 + 1;
  var v1601 = new Array(v439);
  this.nodes = v1601;
  var i$$13 = 0;
  var v1141 = this.nodes;
  var v875 = v1141.length;
  var v443 = i$$13 < v875;
  for (;v443;) {
    var v440 = this.nodes;
    var v1332 = this.N;
    var v1142 = v1332.length;
    var v876 = v1142 + 1;
    var v1602 = new Array(v876);
    v440[i$$13] = v1602;
    var j$$13 = 0;
    var v1333 = this.nodes;
    var v1143 = v1333[i$$13];
    var v877 = v1143.length;
    var v442 = j$$13 < v877;
    for (;v442;) {
      var v878 = this.nodes;
      var v441 = v878[i$$13];
      var v1603 = new Node;
      v441[j$$13] = v1603;
      j$$13++;
      var v1334 = this.nodes;
      var v1144 = v1334[i$$13];
      var v879 = v1144.length;
      v442 = j$$13 < v879;
    }
    i$$13++;
    var v1145 = this.nodes;
    var v880 = v1145.length;
    v443 = i$$13 < v880;
  }
  var v1146 = this.nodes;
  var v881 = v1146[0];
  var v444 = v881[0];
  v444.value = 0;
  i$$13 = 1;
  var v1147 = this.nodes;
  var v882 = v1147.length;
  var v450 = i$$13 < v882;
  for (;v450;) {
    var v883 = this.scoreSet;
    var v447 = v883.useBeginGapLeft;
    if (v447) {
      var v1148 = this.nodes;
      var v884 = v1148[i$$13];
      var v445 = v884[0];
      var v1456 = this.nodes;
      var v1457 = i$$13 - 1;
      var v1335 = v1456[v1457];
      var v1149 = v1335[0];
      var v885 = v1149.value;
      var v1150 = this.scoreSet;
      var v886 = v1150.beginGap;
      v445.value = v885 - v886;
    } else {
      var v1151 = this.nodes;
      var v887 = v1151[i$$13];
      var v446 = v887[0];
      var v1458 = this.nodes;
      var v1459 = i$$13 - 1;
      var v1336 = v1458[v1459];
      var v1152 = v1336[0];
      var v888 = v1152.value;
      var v1153 = this.scoreSet;
      var v889 = v1153.gap;
      v446.value = v888 - v889;
    }
    var v1154 = this.nodes;
    var v890 = v1154[i$$13];
    var v448 = v890[0];
    v448.tracebackI = i$$13 - 1;
    var v1155 = this.nodes;
    var v891 = v1155[i$$13];
    var v449 = v891[0];
    v449.tracebackJ = 0;
    i$$13++;
    var v1156 = this.nodes;
    var v892 = v1156.length;
    v450 = i$$13 < v892;
  }
  j$$13 = 1;
  var v1337 = this.nodes;
  var v1157 = v1337[0];
  var v893 = v1157.length;
  var v456 = j$$13 < v893;
  for (;v456;) {
    var v894 = this.scoreSet;
    var v453 = v894.useBeginGapTop;
    if (v453) {
      var v1158 = this.nodes;
      var v895 = v1158[0];
      var v451 = v895[j$$13];
      var v1460 = this.nodes;
      var v1338 = v1460[0];
      var v1339 = j$$13 - 1;
      var v1159 = v1338[v1339];
      var v896 = v1159.value;
      var v1160 = this.scoreSet;
      var v897 = v1160.beginGap;
      v451.value = v896 - v897;
    } else {
      var v1161 = this.nodes;
      var v898 = v1161[0];
      var v452 = v898[j$$13];
      var v1461 = this.nodes;
      var v1340 = v1461[0];
      var v1341 = j$$13 - 1;
      var v1162 = v1340[v1341];
      var v899 = v1162.value;
      var v1163 = this.scoreSet;
      var v900 = v1163.gap;
      v452.value = v899 - v900;
    }
    var v1164 = this.nodes;
    var v901 = v1164[0];
    var v454 = v901[j$$13];
    v454.tracebackI = 0;
    var v1165 = this.nodes;
    var v902 = v1165[0];
    var v455 = v902[j$$13];
    v455.tracebackJ = j$$13 - 1;
    j$$13++;
    var v1342 = this.nodes;
    var v1166 = v1342[0];
    var v903 = v1166.length;
    v456 = j$$13 < v903;
  }
  return;
}
function dumpMatrix() {
  var v457 = outputWindow.document;
  var v1462 = this.nodes;
  var v1343 = v1462.length;
  var v1167 = "Dynamic programming matrix i=" + v1343;
  var v904 = v1167 + " and j=";
  var v1344 = this.nodes;
  var v1168 = v1344[0];
  var v905 = v1168.length;
  var v458 = v904 + v905;
  JAM.call(v457.write, v457, [v458], JAM.policy.p24);
  var v459 = outputWindow.document;
  JAM.call(v459.write, v459, ["\n"], JAM.policy.p18);
  var i$$14 = 0;
  var v1169 = this.nodes;
  var v906 = v1169.length;
  var v470 = i$$14 < v906;
  for (;v470;) {
    var j$$14 = 0;
    var v1345 = this.nodes;
    var v1170 = v1345[i$$14];
    var v907 = v1170.length;
    var v468 = j$$14 < v907;
    for (;v468;) {
      var v1171 = this.nodes;
      var v908 = v1171[i$$14];
      var v460 = v908[j$$14];
      var traceI = v460.tracebackI;
      var v1172 = this.nodes;
      var v909 = v1172[i$$14];
      var v461 = v909[j$$14];
      var traceJ = v461.tracebackJ;
      var v462 = traceI == undefined;
      if (v462) {
        traceI = "u";
      }
      var v463 = traceJ == undefined;
      if (v463) {
        traceJ = "u";
      }
      var v1539 = "(" + i$$14;
      var v1524 = v1539 + ",";
      var v1502 = v1524 + j$$14;
      var v1463 = v1502 + ")[";
      var v1346 = v1463 + traceI;
      var v1173 = v1346 + ",";
      var v910 = v1173 + traceJ;
      var v464 = v910 + "]=";
      var v1347 = this.nodes;
      var v1174 = v1347[i$$14];
      var v911 = v1174[j$$14];
      var v465 = v911.value;
      var output = v464 + v465;
      var v466 = outputWindow.document;
      var v467 = rightNum(output, "", 20, " ");
      JAM.call(v466.write, v466, [v467], JAM.policy.p24);
      j$$14++;
      var v1348 = this.nodes;
      var v1175 = v1348[i$$14];
      var v912 = v1175.length;
      v468 = j$$14 < v912;
    }
    var v469 = outputWindow.document;
    JAM.call(v469.write, v469, ["\n"], JAM.policy.p18);
    i$$14++;
    var v1176 = this.nodes;
    var v913 = v1176.length;
    v470 = i$$14 < v913;
  }
  var v471 = outputWindow.document;
  JAM.call(v471.write, v471, ["\n"], JAM.policy.p18);
  return;
}
function fillMatrix() {
  var i$$15 = 1;
  var v1177 = this.nodes;
  var v914 = v1177.length;
  var v517 = i$$15 < v914;
  for (;v517;) {
    var j$$15 = 1;
    var v1349 = this.nodes;
    var v1178 = v1349[0];
    var v915 = v1178.length;
    var v516 = j$$15 < v915;
    for (;v516;) {
      var a;
      var b;
      var c;
      var v1464 = this.nodes;
      var v1350 = v1464.length;
      var v1179 = v1350 - 1;
      var v916 = i$$15 == v1179;
      if (v916) {
        var v1503 = this.nodes;
        var v1465 = v1503[0];
        var v1351 = v1465.length;
        var v1180 = v1351 - 1;
        v916 = j$$15 == v1180;
      }
      var v502 = v916;
      if (v502) {
        var v917 = this.scoreSet;
        var v476 = v917.useEndGapRight;
        if (v476) {
          var v1352 = this.nodes;
          var v1353 = i$$15 - 1;
          var v1181 = v1352[v1353];
          var v918 = v1181[j$$15];
          var v472 = v918.value;
          var v919 = this.scoreSet;
          var v473 = v919.endGap;
          a = v472 - v473;
        } else {
          var v1354 = this.nodes;
          var v1355 = i$$15 - 1;
          var v1182 = v1354[v1355];
          var v920 = v1182[j$$15];
          var v474 = v920.value;
          var v921 = this.scoreSet;
          var v475 = v921.gap;
          a = v474 - v475;
        }
        var v922 = this.scoreSet;
        var v481 = v922.useEndGapBottom;
        if (v481) {
          var v1356 = this.nodes;
          var v1183 = v1356[i$$15];
          var v1184 = j$$15 - 1;
          var v923 = v1183[v1184];
          var v477 = v923.value;
          var v924 = this.scoreSet;
          var v478 = v924.endGap;
          b = v477 - v478;
        } else {
          var v1357 = this.nodes;
          var v1185 = v1357[i$$15];
          var v1186 = j$$15 - 1;
          var v925 = v1185[v1186];
          var v479 = v925.value;
          var v926 = this.scoreSet;
          var v480 = v926.gap;
          b = v479 - v480;
        }
      } else {
        var v1358 = this.nodes;
        var v1187 = v1358.length;
        var v927 = v1187 - 1;
        var v501 = i$$15 == v927;
        if (v501) {
          var v1359 = this.nodes;
          var v1360 = i$$15 - 1;
          var v1188 = v1359[v1360];
          var v928 = v1188[j$$15];
          var v482 = v928.value;
          var v929 = this.scoreSet;
          var v483 = v929.gap;
          a = v482 - v483;
          var v930 = this.scoreSet;
          var v488 = v930.useEndGapBottom;
          if (v488) {
            var v1361 = this.nodes;
            var v1189 = v1361[i$$15];
            var v1190 = j$$15 - 1;
            var v931 = v1189[v1190];
            var v484 = v931.value;
            var v932 = this.scoreSet;
            var v485 = v932.endGap;
            b = v484 - v485;
          } else {
            var v1362 = this.nodes;
            var v1191 = v1362[i$$15];
            var v1192 = j$$15 - 1;
            var v933 = v1191[v1192];
            var v486 = v933.value;
            var v934 = this.scoreSet;
            var v487 = v934.gap;
            b = v486 - v487;
          }
        } else {
          var v1466 = this.nodes;
          var v1363 = v1466[0];
          var v1193 = v1363.length;
          var v935 = v1193 - 1;
          var v500 = j$$15 == v935;
          if (v500) {
            var v936 = this.scoreSet;
            var v493 = v936.useEndGapRight;
            if (v493) {
              var v1364 = this.nodes;
              var v1365 = i$$15 - 1;
              var v1194 = v1364[v1365];
              var v937 = v1194[j$$15];
              var v489 = v937.value;
              var v938 = this.scoreSet;
              var v490 = v938.endGap;
              a = v489 - v490;
            } else {
              var v1366 = this.nodes;
              var v1367 = i$$15 - 1;
              var v1195 = v1366[v1367];
              var v939 = v1195[j$$15];
              var v491 = v939.value;
              var v940 = this.scoreSet;
              var v492 = v940.gap;
              a = v491 - v492;
            }
            var v1368 = this.nodes;
            var v1196 = v1368[i$$15];
            var v1197 = j$$15 - 1;
            var v941 = v1196[v1197];
            var v494 = v941.value;
            var v942 = this.scoreSet;
            var v495 = v942.gap;
            b = v494 - v495;
          } else {
            var v1369 = this.nodes;
            var v1370 = i$$15 - 1;
            var v1198 = v1369[v1370];
            var v943 = v1198[j$$15];
            var v496 = v943.value;
            var v944 = this.scoreSet;
            var v497 = v944.gap;
            a = v496 - v497;
            var v1371 = this.nodes;
            var v1199 = v1371[i$$15];
            var v1200 = j$$15 - 1;
            var v945 = v1199[v1200];
            var v498 = v945.value;
            var v946 = this.scoreSet;
            var v499 = v946.gap;
            b = v498 - v499;
          }
        }
      }
      var v1372 = this.nodes;
      var v1373 = i$$15 - 1;
      var v1201 = v1372[v1373];
      var v1202 = j$$15 - 1;
      var v947 = v1201[v1202];
      var v503 = v947.value;
      var v948 = this.scoreSet;
      var v1203 = this.M;
      var v1204 = i$$15 - 1;
      var v949 = v1203[v1204];
      var v1205 = this.N;
      var v1206 = j$$15 - 1;
      var v950 = v1205[v1206];
      var v504 = JAM.call(v948.getScore, v948, [v949, v950], JAM.policy.p33);
      c = v503 + v504;
      var v951 = a >= b;
      if (v951) {
        v951 = a >= c;
      }
      var v515 = v951;
      if (v515) {
        var v1207 = this.nodes;
        var v952 = v1207[i$$15];
        var v505 = v952[j$$15];
        v505.value = a;
        var v1208 = this.nodes;
        var v953 = v1208[i$$15];
        var v506 = v953[j$$15];
        v506.tracebackI = i$$15 - 1;
        var v1209 = this.nodes;
        var v954 = v1209[i$$15];
        var v507 = v954[j$$15];
        v507.tracebackJ = j$$15;
      } else {
        var v955 = b >= c;
        if (v955) {
          v955 = b >= a;
        }
        var v514 = v955;
        if (v514) {
          var v1210 = this.nodes;
          var v956 = v1210[i$$15];
          var v508 = v956[j$$15];
          v508.value = b;
          var v1211 = this.nodes;
          var v957 = v1211[i$$15];
          var v509 = v957[j$$15];
          v509.tracebackI = i$$15;
          var v1212 = this.nodes;
          var v958 = v1212[i$$15];
          var v510 = v958[j$$15];
          v510.tracebackJ = j$$15 - 1;
        } else {
          var v1213 = this.nodes;
          var v959 = v1213[i$$15];
          var v511 = v959[j$$15];
          v511.value = c;
          var v1214 = this.nodes;
          var v960 = v1214[i$$15];
          var v512 = v960[j$$15];
          v512.tracebackI = i$$15 - 1;
          var v1215 = this.nodes;
          var v961 = v1215[i$$15];
          var v513 = v961[j$$15];
          v513.tracebackJ = j$$15 - 1;
        }
      }
      j$$15++;
      var v1374 = this.nodes;
      var v1216 = v1374[0];
      var v962 = v1216.length;
      v516 = j$$15 < v962;
    }
    i$$15++;
    var v1217 = this.nodes;
    var v963 = v1217.length;
    v517 = i$$15 < v963;
  }
  var v1218 = this.nodes;
  var v1467 = this.nodes;
  var v1375 = v1467.length;
  var v1219 = v1375 - 1;
  var v964 = v1218[v1219];
  var v1468 = this.nodes;
  var v1376 = v1468[0];
  var v1220 = v1376.length;
  var v965 = v1220 - 1;
  var v518 = v964[v965];
  this.score = v518.value;
  return;
}
function alignQuad() {
  var v1604 = new Array;
  this.alignedM = v1604;
  var v1605 = new Array;
  this.alignedN = v1605;
  var v966 = this.nodes;
  var v519 = v966.length;
  var currentI = v519 - 1;
  var v1221 = this.nodes;
  var v967 = v1221[0];
  var v520 = v967.length;
  var currentJ = v520 - 1;
  var v968 = this.nodes;
  var v1377 = this.nodes;
  var v1222 = v1377.length;
  var v969 = v1222 - 1;
  var v521 = v968[v969];
  var v1378 = this.nodes;
  var v1223 = v1378[0];
  var v970 = v1223.length;
  var v522 = v970 - 1;
  var currentNode = v521[v522];
  var v1224 = currentNode.tracebackI;
  var v971 = v1224 != undefined;
  if (v971) {
    var v1225 = currentNode.tracebackJ;
    v971 = v1225 != undefined;
  }
  var v537 = v971;
  for (;v537;) {
    var v1226 = currentNode.tracebackI;
    var v1227 = currentI - 1;
    var v972 = v1226 == v1227;
    if (v972) {
      var v1228 = currentNode.tracebackJ;
      var v1229 = currentJ - 1;
      v972 = v1228 == v1229;
    }
    var v534 = v972;
    if (v534) {
      var v523 = this.alignedM;
      var v973 = this.M;
      var v524 = v973.pop();
      JAM.call(v523.push, v523, [v524], JAM.policy.p24);
      var v525 = this.alignedN;
      var v974 = this.N;
      var v526 = v974.pop();
      JAM.call(v525.push, v525, [v526], JAM.policy.p24);
    } else {
      var v975 = currentNode.tracebackJ;
      var v976 = currentJ - 1;
      var v533 = v975 == v976;
      if (v533) {
        var v527 = this.alignedM;
        JAM.call(v527.push, v527, ["-"], JAM.policy.p18);
        var v528 = this.alignedN;
        var v977 = this.N;
        var v529 = v977.pop();
        JAM.call(v528.push, v528, [v529], JAM.policy.p24);
      } else {
        var v530 = this.alignedM;
        var v978 = this.M;
        var v531 = v978.pop();
        JAM.call(v530.push, v530, [v531], JAM.policy.p24);
        var v532 = this.alignedN;
        JAM.call(v532.push, v532, ["-"], JAM.policy.p18);
      }
    }
    currentI = currentNode.tracebackI;
    currentJ = currentNode.tracebackJ;
    var v979 = this.nodes;
    var v980 = currentNode.tracebackI;
    var v535 = v979[v980];
    var v536 = currentNode.tracebackJ;
    currentNode = v535[v536];
    var v1230 = currentNode.tracebackI;
    var v981 = v1230 != undefined;
    if (v981) {
      var v1231 = currentNode.tracebackJ;
      v981 = v1231 != undefined;
    }
    v537 = v981;
  }
  var v538 = this.alignedM;
  var v1606 = v538.reverse();
  this.alignedM = v1606;
  var v539 = this.alignedN;
  var v1607 = v539.reverse();
  this.alignedN = v1607;
  return;
}
function getAlignedM() {
  var v540 = this.alignedM;
  return JAM.call(v540.join, v540, [""], JAM.policy.p18);
}
function getAlignedN() {
  var v541 = this.alignedN;
  return JAM.call(v541.join, v541, [""], JAM.policy.p18);
}
function AlignPairQuad() {
  return;
}
new ScoreSet;
var v542 = ScoreSet.prototype;
v542.getScore = getScore;
var v543 = ScoreSet.prototype;
v543.setScoreSetParam = setScoreSetParam;
new ScoringMatrix;
var v544 = ScoringMatrix.prototype;
v544.scoringMatrix_getScore = scoringMatrix_getScore;
var v545 = ScoringMatrix.prototype;
v545.scoringMatrix_fillHash = scoringMatrix_fillHash;
var v546 = Blosum62;
var v1608 = new ScoringMatrix;
v546.prototype = v1608;
var v547 = Blosum45;
var v1609 = new ScoringMatrix;
v547.prototype = v1609;
var v548 = Blosum80;
var v1610 = new ScoringMatrix;
v548.prototype = v1610;
var v549 = Pam70;
var v1611 = new ScoringMatrix;
v549.prototype = v1611;
var v550 = Pam30;
var v1612 = new ScoringMatrix;
v550.prototype = v1612;
new AlignPairLinear;
var v551 = AlignPairLinear.prototype;
v551.align = align;
var v552 = AlignPairLinear.prototype;
v552.path = path;
var v553 = AlignPairLinear.prototype;
v553.setAlignParam = setAlignParam;
var v554 = AlignPairLinear.prototype;
v554.getAlignedM = getAlignedM;
var v555 = AlignPairLinear.prototype;
v555.getAlignedN = getAlignedN;
new AlignPairQuad;
var v556 = AlignPairQuad.prototype;
v556.initializeMatrix = initializeMatrix;
var v557 = AlignPairQuad.prototype;
v557.fillMatrix = fillMatrix;
var v558 = AlignPairQuad.prototype;
v558.align = alignQuad;
var v559 = AlignPairQuad.prototype;
v559.getAlignedM = getAlignedM;
var v560 = AlignPairQuad.prototype;
v560.getAlignedN = getAlignedN;
var v561 = AlignPairQuad.prototype;
v561.dumpMatrix = dumpMatrix;
JAM.set(document, "onload", v2);
var v562 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p18);
JAM.set(v562, "onclick", v3);
var v563 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p18);
JAM.set(v563, "onclick", v4)
