
JAM.startProfile('load');
function v4() {
  var v1254 = document.forms;
  var v999 = v1254[0];
  var v586 = v999.elements;
  var v5 = v586[0];
  v5.value = " ";
  var v1255 = document.forms;
  var v1000 = v1255[0];
  var v587 = v1000.elements;
  var v6 = v587[4];
  v6.value = " ";
  return;
}
function v3() {
  try {
    pcrPrimerStats();
  } catch (e$$5) {
    var v7 = "The following error was encountered: " + e$$5;
    alert(v7);
  }
  return;
}
function v2() {
  var v588 = document.main_form;
  var v8 = v588.main_submit;
  v8.focus();
  return;
}
function addReturns(sequence) {
  function v0(str$$6, p1, offset$$8, s$$2) {
    return p1 + "\n";
  }
  introspect(JAM.policy.p16) {
    sequence = sequence.replace(/(.{60})/g, v0);
  }
  return sequence;
}
function checkAlign(arrayOfTitles, arrayOfSequences) {
  var v9 = arrayOfSequences[0];
  var lengthOfAlign = v9.length;
  var v589 = arrayOfSequences.length;
  var v10 = v589 < 2;
  if (v10) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v590 = arrayOfTitles.length;
  var v12 = i$$1 < v590;
  for (;v12;) {
    var v1364 = arrayOfTitles[i$$1];
    introspect(JAM.policy.p18) {
      var v1256 = v1364.search(/\S/)
    }
    var v1001 = v1256 == -1;
    var v1258 = !v1001;
    if (v1258) {
      var v1365 = arrayOfSequences[i$$1];
      introspect(JAM.policy.p18) {
        var v1257 = v1365.search(/\S/)
      }
      v1001 = v1257 == -1;
    }
    var v591 = v1001;
    var v1003 = !v591;
    if (v1003) {
      var v1259 = arrayOfSequences[i$$1];
      var v1002 = v1259.length;
      v591 = v1002 != lengthOfAlign;
    }
    var v11 = v591;
    if (v11) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v592 = arrayOfTitles.length;
    v12 = i$$1 < v592;
  }
  return true;
}
function checkCodonTable(codonTable) {
  introspect(JAM.policy.p18) {
    var v1414 = codonTable.search(/AmAcid/)
  }
  var v1366 = v1414 == -1;
  var v1416 = !v1366;
  if (v1416) {
    introspect(JAM.policy.p18) {
      var v1415 = codonTable.search(/Codon/)
    }
    v1366 = v1415 == -1;
  }
  var v1260 = v1366;
  var v1368 = !v1260;
  if (v1368) {
    introspect(JAM.policy.p18) {
      var v1367 = codonTable.search(/Number/)
    }
    v1260 = v1367 == -1;
  }
  var v1004 = v1260;
  var v1262 = !v1004;
  if (v1262) {
    introspect(JAM.policy.p18) {
      var v1261 = codonTable.search(/\/1000/)
    }
    v1004 = v1261 == -1;
  }
  var v593 = v1004;
  var v1006 = !v593;
  if (v1006) {
    introspect(JAM.policy.p18) {
      var v1005 = codonTable.search(/Fraction\s*\.\./)
    }
    v593 = v1005 == -1;
  }
  var v13 = v593;
  if (v13) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v1007 = formElement.value;
  introspect(JAM.policy.p18) {
    var v594 = v1007.search(/\S/)
  }
  var v14 = v594 == -1;
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
  var v595 = arrayOfPatterns.length;
  var v17 = z$$2 < v595;
  for (;v17;) {
    var v1008 = arrayOfPatterns[z$$2];
    introspect(JAM.policy.p18) {
      var v596 = v1008.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/)
    }
    var v15 = v596 == -1;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v1009 = arrayOfPatterns[z$$2];
    var v597 = moreExpressionCheck(v1009);
    var v16 = v597 == false;
    if (v16) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v598 = arrayOfPatterns.length;
    v17 = z$$2 < v598;
  }
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v18);
  var v19 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v19);
  var j = 0;
  var v599 = arrayOfPatterns.length;
  var v23 = j < v599;
  for (;v23;) {
    var v1010 = arrayOfPatterns[j];
    introspect(JAM.policy.p18) {
      var v600 = v1010.match(/\/.+\//)
    }
    var v20 = v600 + "gi";
    var v1508 = eval(v20);
    geneticCodeMatchExp[j] = v1508;
    var v601 = arrayOfPatterns[j];
    introspect(JAM.policy.p18) {
      var v21 = v601.match(/=[a-zA-Z\*]/)
    }
    var v1509 = v21.toString();
    geneticCodeMatchResult[j] = v1509;
    var v22 = geneticCodeMatchResult[j];
    introspect(JAM.policy.p16) {
      var v1510 = v22.replace(/=/g, "")
    }
    geneticCodeMatchResult[j] = v1510;
    j++;
    var v602 = arrayOfPatterns.length;
    v23 = j < v602;
  }
  var i$$2 = 0;
  var v1011 = testSequence.length;
  var v603 = v1011 - 3;
  var v30 = i$$2 <= v603;
  for (;v30;) {
    var v24 = i$$2 + 3;
    introspect(JAM.policy.p16) {
      codon = testSequence.substring(i$$2, v24);
    }
    j = 0;
    var v604 = geneticCodeMatchExp.length;
    var v28 = j < v604;
    for (;v28;) {
      var v1012 = geneticCodeMatchExp[j];
      introspect(JAM.policy.p17) {
        var v605 = codon.search(v1012)
      }
      var v27 = v605 != -1;
      if (v27) {
        var v26 = oneMatch == true;
        if (v26) {
          var v606 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v25 = v606 + ".";
          alert(v25);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v607 = geneticCodeMatchExp.length;
      v28 = j < v607;
    }
    var v29 = oneMatch == false;
    if (v29) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v1013 = testSequence.length;
    var v608 = v1013 - 3;
    v30 = i$$2 <= v608;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v609 = arrayOfPatterns$$1.length;
  var v32 = z$$3 < v609;
  for (;v32;) {
    var v1014 = arrayOfPatterns$$1[z$$3];
    introspect(JAM.policy.p18) {
      var v610 = v1014.search(/[^acdefghiklmnpqrstvwyz]/i)
    }
    var v31 = v610 != -1;
    if (v31) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v611 = arrayOfPatterns$$1.length;
    v32 = z$$3 < v611;
  }
  var i$$3 = 0;
  var v612 = arrayOfPatterns$$1.length;
  var v36 = i$$3 < v612;
  for (;v36;) {
    var v1015 = arrayOfPatterns$$1[i$$3];
    var v613 = "[" + v1015;
    var v33 = v613 + "]";
    var re = new RegExp(v33, "gi");
    var j$$1 = i$$3 + 1;
    var v614 = arrayOfPatterns$$1.length;
    var v35 = j$$1 < v614;
    for (;v35;) {
      var v1016 = arrayOfPatterns$$1[j$$1];
      introspect(JAM.policy.p17) {
        var v615 = v1016.search(re)
      }
      var v34 = v615 != -1;
      if (v34) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v616 = arrayOfPatterns$$1.length;
      v35 = j$$1 < v616;
    }
    i$$3++;
    var v617 = arrayOfPatterns$$1.length;
    v36 = i$$3 < v617;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v618 = arrayOfPatterns$$2.length;
  var v39 = z$$4 < v618;
  for (;v39;) {
    var v1017 = arrayOfPatterns$$2[z$$4];
    introspect(JAM.policy.p18) {
      var v619 = v1017.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i)
    }
    var v37 = v619 == -1;
    if (v37) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v1018 = arrayOfPatterns$$2[z$$4];
    var v620 = moreExpressionCheck(v1018);
    var v38 = v620 == false;
    if (v38) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v621 = arrayOfPatterns$$2.length;
    v39 = z$$4 < v621;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v1263 = getSequenceFromFasta(text$$7);
  introspect(JAM.policy.p16) {
    var v1019 = v1263.replace(/[^A-Za-z]/g, "")
  }
  var v622 = v1019.length;
  var v41 = v622 > maxInput;
  if (v41) {
    var v623 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v40 = v623 + " characters.";
    alert(v40);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v624 = text$$8.length;
  var v43 = v624 > maxInput$$1;
  if (v43) {
    var v625 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v42 = v625 + " characters.";
    alert(v42);
    return false;
  } else {
    return true;
  }
  return;
}
function complement(dnaSequence) {
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/g/g, "1");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/c/g, "2");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/1/g, "c");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/2/g, "g");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/G/g, "1");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/C/g, "2");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/1/g, "C");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/2/g, "G");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/a/g, "1");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/t/g, "2");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/1/g, "t");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/2/g, "a");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/A/g, "1");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/T/g, "2");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/1/g, "T");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/2/g, "A");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/u/g, "a");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/U/g, "A");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/r/g, "1");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/y/g, "2");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/1/g, "y");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/2/g, "r");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/R/g, "1");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/Y/g, "2");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/1/g, "Y");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/2/g, "R");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/k/g, "1");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/m/g, "2");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/1/g, "m");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/2/g, "k");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/K/g, "1");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/M/g, "2");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/1/g, "M");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/2/g, "K");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/b/g, "1");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/v/g, "2");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/1/g, "v");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/2/g, "b");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/B/g, "1");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/V/g, "2");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/1/g, "V");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/2/g, "B");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/d/g, "1");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/h/g, "2");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/1/g, "h");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/2/g, "d");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/D/g, "1");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/H/g, "2");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/1/g, "H");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/2/g, "D");
  }
  return dnaSequence;
}
function closeForm() {
  var v44 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v44.write("</form>");
  }
  return true;
}
function closePre() {
  var v45 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v45.write("</div>");
  }
  var v46 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v46.write("</pre>\n");
  }
  return;
}
function closeTextArea() {
  var v47 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v47.write("</textarea>");
  }
  return true;
}
function closeWindow() {
  var v48 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v48.write("</body>\n</html>\n");
  }
  outputWindow.status = "Done.";
  var v49 = outputWindow.document;
  v49.close();
  return;
}
function convertDegenerates(sequence$$1) {
  sequence$$1 = sequence$$1.toLowerCase();
  introspect(JAM.policy.p16) {
    sequence$$1 = sequence$$1.replace(/t/g, "[TU]");
  }
  introspect(JAM.policy.p16) {
    sequence$$1 = sequence$$1.replace(/r/g, "[AGR]");
  }
  introspect(JAM.policy.p16) {
    sequence$$1 = sequence$$1.replace(/y/g, "[CTUY]");
  }
  introspect(JAM.policy.p16) {
    sequence$$1 = sequence$$1.replace(/s/g, "[GCS]");
  }
  introspect(JAM.policy.p16) {
    sequence$$1 = sequence$$1.replace(/w/g, "[ATUW]");
  }
  introspect(JAM.policy.p16) {
    sequence$$1 = sequence$$1.replace(/k/g, "[GTUK]");
  }
  introspect(JAM.policy.p16) {
    sequence$$1 = sequence$$1.replace(/m/g, "[ACM]");
  }
  introspect(JAM.policy.p16) {
    sequence$$1 = sequence$$1.replace(/b/g, "[CGTUBSKY]");
  }
  introspect(JAM.policy.p16) {
    sequence$$1 = sequence$$1.replace(/d/g, "[AGTUDRKW]");
  }
  introspect(JAM.policy.p16) {
    sequence$$1 = sequence$$1.replace(/h/g, "[ACTUHMYW]");
  }
  introspect(JAM.policy.p16) {
    sequence$$1 = sequence$$1.replace(/v/g, "[ACGVSMR]");
  }
  introspect(JAM.policy.p16) {
    sequence$$1 = sequence$$1.replace(/n/g, "[ACGTURYSWKMBDHVN]");
  }
  return sequence$$1;
}
function earlyCheckAlign(alignArray) {
  var v626 = alignArray.length;
  var v50 = v626 < 3;
  if (v50) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v627 = alignArray.length;
  var v52 = i$$4 < v627;
  for (;v52;) {
    var v1020 = alignArray[i$$4];
    introspect(JAM.policy.p18) {
      var v628 = v1020.search(/[^\s]+\s/)
    }
    var v51 = v628 == -1;
    if (v51) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v629 = alignArray.length;
    v52 = i$$4 < v629;
  }
  return true;
}
function filterAlignSeq(alignSeq) {
  introspect(JAM.policy.p16) {
    alignSeq = alignSeq.replace(/[^abcdefghiklmnpqrstvwxyz\.\-]/gi, "");
  }
  return alignSeq;
}
function filterFastaTitle(sequenceTitle) {
  introspect(JAM.policy.p16) {
    sequenceTitle = sequenceTitle.replace(/\s{2,}/g, " ");
  }
  introspect(JAM.policy.p16) {
    sequenceTitle = sequenceTitle.replace(/^\s*/g, "");
  }
  introspect(JAM.policy.p16) {
    sequenceTitle = sequenceTitle.replace(/[\f\n\r\t]+$/g, "\n");
  }
  introspect(JAM.policy.p16) {
    return sequenceTitle.replace(/[\<\>]\n/gi, "");
  }
}
function getArrayOfFasta(sequenceData) {
  var arrayOfFasta = new Array;
  var matchArray;
  var re$$1 = /\>[^\>]+/g;
  introspect(JAM.policy.p18) {
    var v630 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v55 = v630 != -1;
  if (v55) {
    introspect(JAM.policy.p17) {
      var v54 = matchArray = re$$1.exec(sequenceData)
    }
    for (;v54;) {
      var v53 = matchArray[0];
      introspect(JAM.policy.p17) {
        arrayOfFasta.push(v53);
      }
      introspect(JAM.policy.p17) {
        v54 = matchArray = re$$1.exec(sequenceData);
      }
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v631 = sequence$$2.length;
  var v56 = "&gt;results for " + v631;
  var stringToReturn = v56 + " residue sequence ";
  introspect(JAM.policy.p18) {
    var v632 = fastaSequenceTitle.search(/[^\s]/)
  }
  var v58 = v632 != -1;
  if (v58) {
    var v633 = stringToReturn + '"';
    var v57 = v633 + fastaSequenceTitle;
    stringToReturn = v57 + '"';
  }
  var v634 = stringToReturn + ' starting "';
  introspect(JAM.policy.p13) {
    var v635 = sequence$$2.substring(0, 10)
  }
  var v59 = v634 + v635;
  stringToReturn = v59 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v636 = sequenceOne.length;
  var v60 = "Search results for " + v636;
  var stringToReturn$$1 = v60 + " residue sequence ";
  introspect(JAM.policy.p18) {
    var v637 = fastaSequenceTitleOne.search(/[^\s]/)
  }
  var v62 = v637 != -1;
  if (v62) {
    var v638 = stringToReturn$$1 + '"';
    var v61 = v638 + fastaSequenceTitleOne;
    stringToReturn$$1 = v61 + '"';
  }
  var v639 = stringToReturn$$1 + ' starting "';
  introspect(JAM.policy.p13) {
    var v640 = sequenceOne.substring(0, 10)
  }
  var v63 = v639 + v640;
  stringToReturn$$1 = v63 + '"\n';
  var v641 = stringToReturn$$1 + "and ";
  var v642 = sequenceTwo.length;
  var v64 = v641 + v642;
  stringToReturn$$1 = v64 + " residue sequence ";
  introspect(JAM.policy.p18) {
    var v643 = fastaSequenceTitleTwo.search(/[^\s]/)
  }
  var v66 = v643 != -1;
  if (v66) {
    var v644 = stringToReturn$$1 + '"';
    var v65 = v644 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v65 + '"';
  }
  var v645 = stringToReturn$$1 + ' starting "';
  introspect(JAM.policy.p13) {
    var v646 = sequenceTwo.substring(0, 10)
  }
  var v67 = v645 + v646;
  stringToReturn$$1 = v67 + '"';
  var v68 = '<div class="info">' + stringToReturn$$1;
  return v68 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v69 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v69);
  var j$$2 = 0;
  var v647 = arrayOfPatterns$$3.length;
  var v71 = j$$2 < v647;
  for (;v71;) {
    var v1021 = arrayOfPatterns$$3[j$$2];
    introspect(JAM.policy.p18) {
      var v648 = v1021.match(/\/.+\//)
    }
    var v70 = v648 + "gi";
    var v1511 = eval(v70);
    geneticCodeMatchExp$$1[j$$2] = v1511;
    j$$2++;
    var v649 = arrayOfPatterns$$3.length;
    v71 = j$$2 < v649;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v72 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v72);
  var j$$3 = 0;
  var v650 = arrayOfPatterns$$4.length;
  var v75 = j$$3 < v650;
  for (;v75;) {
    var v651 = arrayOfPatterns$$4[j$$3];
    introspect(JAM.policy.p18) {
      var v73 = v651.match(/=[a-zA-Z\*]/)
    }
    var v1512 = v73.toString();
    geneticCodeMatchResult$$1[j$$3] = v1512;
    var v74 = geneticCodeMatchResult$$1[j$$3];
    introspect(JAM.policy.p16) {
      var v1513 = v74.replace(/=/g, "")
    }
    geneticCodeMatchResult$$1[j$$3] = v1513;
    j$$3++;
    var v652 = arrayOfPatterns$$4.length;
    v75 = j$$3 < v652;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v653 = sequence$$3.length;
  var v76 = "Results for " + v653;
  var stringToReturn$$2 = v76 + " residue sequence ";
  introspect(JAM.policy.p18) {
    var v654 = fastaSequenceTitle$$1.search(/[^\s]/)
  }
  var v78 = v654 != -1;
  if (v78) {
    var v655 = stringToReturn$$2 + '"';
    var v77 = v655 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v77 + '"';
  }
  var v656 = stringToReturn$$2 + ' starting "';
  introspect(JAM.policy.p13) {
    var v657 = sequence$$3.substring(0, 10)
  }
  var v79 = v656 + v657;
  stringToReturn$$2 = v79 + '"';
  var v80 = '<div class="info">' + stringToReturn$$2;
  return v80 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v1022 = "Results for " + topology;
  var v658 = v1022 + " ";
  var v659 = sequence$$4.length;
  var v81 = v658 + v659;
  var stringToReturn$$3 = v81 + " residue sequence ";
  introspect(JAM.policy.p18) {
    var v660 = fastaSequenceTitle$$2.search(/[^\s]/)
  }
  var v83 = v660 != -1;
  if (v83) {
    var v661 = stringToReturn$$3 + '"';
    var v82 = v661 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v82 + '"';
  }
  var v662 = stringToReturn$$3 + ' starting "';
  introspect(JAM.policy.p13) {
    var v663 = sequence$$4.substring(0, 10)
  }
  var v84 = v662 + v663;
  stringToReturn$$3 = v84 + '"';
  var v85 = '<div class="info">' + stringToReturn$$3;
  return v85 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v664 = sequenceOne$$1.length;
  var v86 = "Alignment results for " + v664;
  var stringToReturn$$4 = v86 + " residue sequence ";
  introspect(JAM.policy.p18) {
    var v665 = fastaSequenceTitleOne$$1.search(/[^\s]/)
  }
  var v88 = v665 != -1;
  if (v88) {
    var v666 = stringToReturn$$4 + '"';
    var v87 = v666 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v87 + '"';
  }
  var v667 = stringToReturn$$4 + ' starting "';
  introspect(JAM.policy.p13) {
    var v668 = sequenceOne$$1.substring(0, 10)
  }
  var v89 = v667 + v668;
  stringToReturn$$4 = v89 + '"\n';
  var v669 = stringToReturn$$4 + "and ";
  var v670 = sequenceTwo$$1.length;
  var v90 = v669 + v670;
  stringToReturn$$4 = v90 + " residue sequence ";
  introspect(JAM.policy.p18) {
    var v671 = fastaSequenceTitleTwo$$1.search(/[^\s]/)
  }
  var v92 = v671 != -1;
  if (v92) {
    var v672 = stringToReturn$$4 + '"';
    var v91 = v672 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v91 + '"';
  }
  var v673 = stringToReturn$$4 + ' starting "';
  introspect(JAM.policy.p13) {
    var v674 = sequenceTwo$$1.substring(0, 10)
  }
  var v93 = v673 + v674;
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
    var v675 = Math.random();
    var v676 = components.length;
    var v95 = v675 * v676;
    introspect(JAM.policy.p18) {
      tempNum = Math.floor(v95);
    }
    tempChar = components[tempNum];
    introspect(JAM.policy.p17) {
      sequenceArray.push(tempChar);
    }
    j$$4++;
    v96 = j$$4 < lengthOut;
  }
  introspect(JAM.policy.p11) {
    return sequenceArray.join("");
  }
}
function getSequenceFromFasta(sequenceRecord) {
  introspect(JAM.policy.p18) {
    var v677 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v97 = v677 != -1;
  if (v97) {
    introspect(JAM.policy.p16) {
      sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "");
    }
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  introspect(JAM.policy.p18) {
    var v678 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v99 = v678 != -1;
  if (v99) {
    introspect(JAM.policy.p16) {
      var v98 = sequenceRecord$$1.match(/\>[^\f\n\r]+[\f\n\r]/, "")
    }
    fastaTitle = v98.toString();
    introspect(JAM.policy.p16) {
      fastaTitle = fastaTitle.replace(/\>|[\f\n\r]/g, "");
    }
    introspect(JAM.policy.p16) {
      fastaTitle = fastaTitle.replace(/\s{2,}/g, " ");
    }
    introspect(JAM.policy.p16) {
      fastaTitle = fastaTitle.replace(/[\<\>]/gi, "");
    }
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  introspect(JAM.policy.p18) {
    var v1486 = expressionToCheck.search(/\[[A-Za-z\|]*\[/)
  }
  var v1479 = v1486 != -1;
  var v1488 = !v1479;
  if (v1488) {
    introspect(JAM.policy.p18) {
      var v1487 = expressionToCheck.search(/\][A-Za-z\|]*\]/)
    }
    v1479 = v1487 != -1;
  }
  var v1470 = v1479;
  var v1481 = !v1470;
  if (v1481) {
    introspect(JAM.policy.p18) {
      var v1480 = expressionToCheck.search(/\[\]/)
    }
    v1470 = v1480 != -1;
  }
  var v1460 = v1470;
  var v1472 = !v1460;
  if (v1472) {
    introspect(JAM.policy.p18) {
      var v1471 = expressionToCheck.search(/\/[A-Za-z\|]*\]/)
    }
    v1460 = v1471 != -1;
  }
  var v1447 = v1460;
  var v1462 = !v1447;
  if (v1462) {
    introspect(JAM.policy.p18) {
      var v1461 = expressionToCheck.search(/\[[A-Za-z\|]*\//)
    }
    v1447 = v1461 != -1;
  }
  var v1433 = v1447;
  var v1449 = !v1433;
  if (v1449) {
    introspect(JAM.policy.p18) {
      var v1448 = expressionToCheck.search(/\|\|/)
    }
    v1433 = v1448 != -1;
  }
  var v1417 = v1433;
  var v1435 = !v1417;
  if (v1435) {
    introspect(JAM.policy.p18) {
      var v1434 = expressionToCheck.search(/\/\|/)
    }
    v1417 = v1434 != -1;
  }
  var v1369 = v1417;
  var v1419 = !v1369;
  if (v1419) {
    introspect(JAM.policy.p18) {
      var v1418 = expressionToCheck.search(/\|\//)
    }
    v1369 = v1418 != -1;
  }
  var v1264 = v1369;
  var v1371 = !v1264;
  if (v1371) {
    introspect(JAM.policy.p18) {
      var v1370 = expressionToCheck.search(/\[.\]/)
    }
    v1264 = v1370 != -1;
  }
  var v1023 = v1264;
  var v1266 = !v1023;
  if (v1266) {
    introspect(JAM.policy.p18) {
      var v1265 = expressionToCheck.search(/\</)
    }
    v1023 = v1265 != -1;
  }
  var v679 = v1023;
  var v1025 = !v679;
  if (v1025) {
    introspect(JAM.policy.p18) {
      var v1024 = expressionToCheck.search(/\>/)
    }
    v679 = v1024 != -1;
  }
  var v100 = v679;
  if (v100) {
    return false;
  }
  return true;
}
function openForm() {
  var v101 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v101.write('<form action="">\n');
  }
  return true;
}
function openPre() {
  var v102 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v102.write("<pre>");
  }
  var v103 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v103.write('<div class="pre">');
  }
  return;
}
function openTextArea() {
  var v104 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v104.write('<br /><textarea rows="6" cols="61">\n');
  }
  return true;
}
function openWindow() {
  var title$$5 = "PCR Primer Stats";
  _openWindow(title$$5);
  return;
}
function _openWindow(title$$6) {
  var isColor = true;
  introspect(JAM.policy.p14) {
    outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  }
  outputWindow.focus();
  var v105 = outputWindow.document;
  var v1267 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v1026 = v1267 + "<head>\n";
  var v680 = v1026 + "<title>Sequence Manipulation Suite</title>\n";
  var v106 = v680 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  introspect(JAM.policy.p17) {
    v105.write(v106);
  }
  if (isColor) {
    var v107 = outputWindow.document;
    var v1501 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1497 = v1501 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1493 = v1497 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1489 = v1493 + "div.info {font-weight: bold}\n";
    var v1482 = v1489 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1473 = v1482 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v1463 = v1473 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v1450 = v1463 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1436 = v1450 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v1420 = v1436 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v1372 = v1420 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v1268 = v1372 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v1027 = v1268 + "td.many {color: #000000}\n";
    var v681 = v1027 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v108 = v681 + "</style>\n";
    introspect(JAM.policy.p17) {
      v107.write(v108);
    }
  } else {
    var v109 = outputWindow.document;
    var v1505 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1502 = v1505 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1498 = v1502 + "div.title {display: none}\n";
    var v1494 = v1498 + "div.info {font-weight: bold}\n";
    var v1490 = v1494 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1483 = v1490 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1474 = v1483 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v1464 = v1474 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1451 = v1464 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1437 = v1451 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1421 = v1437 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v1373 = v1421 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1269 = v1373 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v1028 = v1269 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v682 = v1028 + "img {display: none}\n";
    var v110 = v682 + "</style>\n";
    introspect(JAM.policy.p17) {
      v109.write(v110);
    }
  }
  var v111 = outputWindow.document;
  var v1270 = "</head>\n" + '<body class="main">\n';
  var v1029 = v1270 + '<div class="title">';
  var v683 = v1029 + title$$6;
  var v112 = v683 + " results</div>\n";
  introspect(JAM.policy.p17) {
    v111.write(v112);
  }
  outputWindow.status = "Please Wait.";
  return;
}
function openWindowAlign(title$$7) {
  _openWindowAlign(title$$7);
  return;
}
function _openWindowAlign(title$$8) {
  var isBackground = true;
  introspect(JAM.policy.p14) {
    outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  }
  outputWindow.focus();
  var v113 = outputWindow.document;
  var v1271 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v1030 = v1271 + "<head>\n";
  var v684 = v1030 + "<title>Sequence Manipulation Suite</title>\n";
  var v114 = v684 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  introspect(JAM.policy.p17) {
    v113.write(v114);
  }
  if (isBackground) {
    var v115 = outputWindow.document;
    var v1503 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1499 = v1503 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1495 = v1499 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1491 = v1495 + "div.info {font-weight: bold}\n";
    var v1484 = v1491 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v1475 = v1484 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v1465 = v1475 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v1452 = v1465 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v1438 = v1452 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v1422 = v1438 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v1374 = v1422 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v1272 = v1374 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v1031 = v1272 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v685 = v1031 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v116 = v685 + "</style>\n";
    introspect(JAM.policy.p17) {
      v115.write(v116);
    }
  } else {
    var v117 = outputWindow.document;
    var v1507 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1506 = v1507 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1504 = v1506 + "div.title {display: none}\n";
    var v1500 = v1504 + "div.info {font-weight: bold}\n";
    var v1496 = v1500 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1492 = v1496 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v1485 = v1492 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v1476 = v1485 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v1466 = v1476 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v1453 = v1466 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v1439 = v1453 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v1423 = v1439 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v1375 = v1423 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v1273 = v1375 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v1032 = v1273 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v686 = v1032 + "img {display: none}\n";
    var v118 = v686 + "</style>\n";
    introspect(JAM.policy.p17) {
      v117.write(v118);
    }
  }
  var v119 = outputWindow.document;
  var v1274 = "</head>\n" + '<body class="main">\n';
  var v1033 = v1274 + '<div class="title">';
  var v687 = v1033 + title$$8;
  var v120 = v687 + " results</div>\n";
  introspect(JAM.policy.p17) {
    v119.write(v120);
  }
  outputWindow.status = "Please Wait.";
  return;
}
function removeFormatting(sequence$$5) {
  introspect(JAM.policy.p16) {
    return sequence$$5.replace(/[\d\s]/g, "");
  }
}
function removeNonDna(sequence$$6) {
  introspect(JAM.policy.p16) {
    return sequence$$6.replace(/[^gatucryswkmbdhvnxGATUCRYSWKMBDHVNX]/g, "");
  }
}
function removeNonDnaStrict(sequence$$7) {
  introspect(JAM.policy.p16) {
    return sequence$$7.replace(/[^gatucGATUC]/g, "");
  }
}
function removeNonProtein(sequence$$8) {
  introspect(JAM.policy.p16) {
    return sequence$$8.replace(/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, "");
  }
}
function removeNonProteinStrict(sequence$$9) {
  introspect(JAM.policy.p16) {
    return sequence$$9.replace(/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, "");
  }
}
function removeNonProteinAllowDegen(sequence$$10) {
  introspect(JAM.policy.p16) {
    return sequence$$10.replace(/[^ABCDEFGHIKLMNPQRSTVWYXZabcdefghiklmnpqrstvwyxz\*]/g, "");
  }
}
function removeNonProteinAllowX(sequence$$11) {
  introspect(JAM.policy.p16) {
    return sequence$$11.replace(/[^ACDEFGHIKLMNPQRSTVWYZXacdefghiklmnpqrstvwyzx\*]/g, "");
  }
}
function removeWhiteSpace(text$$9) {
  introspect(JAM.policy.p16) {
    return text$$9.replace(/\s/g, "");
  }
}
function removeNonLetters(sequence$$12) {
  introspect(JAM.policy.p16) {
    return sequence$$12.replace(/[^A-Z]/gi, "");
  }
}
function reverse(dnaSequence$$1) {
  var tempDnaArray = new Array;
  introspect(JAM.policy.p18) {
    var v688 = dnaSequence$$1.search(/./)
  }
  var v121 = v688 != -1;
  if (v121) {
    introspect(JAM.policy.p18) {
      tempDnaArray = dnaSequence$$1.match(/./g);
    }
    tempDnaArray = tempDnaArray.reverse();
    introspect(JAM.policy.p11) {
      dnaSequence$$1 = tempDnaArray.join("");
    }
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
  introspect(JAM.policy.p17) {
    testArray.push(testString);
  }
  var v689 = testArray[0];
  var v125 = v689 != testString;
  if (v125) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  introspect(JAM.policy.p17) {
    var v690 = testString.search(re$$2)
  }
  var v126 = v690 == -1;
  if (v126) {
    alert("Regular expression 'm' flag not supported. See browser compatibility page.");
    return false;
  }
  var caughtException = false;
  try {
    re$$2 = eval("Exception handling not supported. Check browser compatibility page.");
  } catch (e$$4) {
    caughtException = true;
  }
  var v127 = !caughtException;
  if (v127) {
    alert("Exception handling not supported. See browser compatibility page.");
  }
  testString = "123";
  introspect(JAM.policy.p16) {
    testString = testString.replace(/(\d)/g, v1);
  }
  var v128 = testString != "1X2X3X";
  if (v128) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false;
  }
  var testNum = 2489.8237;
  introspect(JAM.policy.p9) {
    var v691 = testNum.toFixed(3)
  }
  var v129 = v691 != 2489.824;
  if (v129) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  introspect(JAM.policy.p9) {
    var v692 = testNum.toPrecision(5)
  }
  var v130 = v692 != 2489.8;
  if (v130) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  introspect(JAM.policy.p18) {
    var v693 = theNumber$$1.search(/\d/)
  }
  var v131 = v693 == -1;
  if (v131) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  introspect(JAM.policy.p18) {
    var v1376 = emblFile.search(/ID/)
  }
  var v1275 = v1376 == -1;
  var v1378 = !v1275;
  if (v1378) {
    introspect(JAM.policy.p18) {
      var v1377 = emblFile.search(/AC/)
    }
    v1275 = v1377 == -1;
  }
  var v1034 = v1275;
  var v1277 = !v1034;
  if (v1277) {
    introspect(JAM.policy.p18) {
      var v1276 = emblFile.search(/DE/)
    }
    v1034 = v1276 == -1;
  }
  var v694 = v1034;
  var v1036 = !v694;
  if (v1036) {
    introspect(JAM.policy.p18) {
      var v1035 = emblFile.search(/SQ/)
    }
    v694 = v1035 == -1;
  }
  var v132 = v694;
  if (v132) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  introspect(JAM.policy.p18) {
    var v695 = theNumber$$2.search(/\d/)
  }
  var v133 = v695 == -1;
  if (v133) {
    alert("Please enter a number.");
    return false;
  }
  var v135 = theNumber$$2 > maxInput$$2;
  if (v135) {
    var v696 = "Please enter a number less than or equal to " + maxInput$$2;
    var v134 = v696 + ".";
    alert(v134);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  introspect(JAM.policy.p18) {
    var v697 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i)
  }
  var v136 = v697 != -1;
  if (v136) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  introspect(JAM.policy.p18) {
    var v698 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i)
  }
  var v137 = v698 != -1;
  if (v137) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  introspect(JAM.policy.p18) {
    var v1379 = genBankFile.search(/LOCUS/)
  }
  var v1278 = v1379 == -1;
  var v1381 = !v1278;
  if (v1381) {
    introspect(JAM.policy.p18) {
      var v1380 = genBankFile.search(/DEFINITION/)
    }
    v1278 = v1380 == -1;
  }
  var v1037 = v1278;
  var v1280 = !v1037;
  if (v1280) {
    introspect(JAM.policy.p18) {
      var v1279 = genBankFile.search(/ACCESSION/)
    }
    v1037 = v1279 == -1;
  }
  var v699 = v1037;
  var v1039 = !v699;
  if (v1039) {
    introspect(JAM.policy.p18) {
      var v1038 = genBankFile.search(/ORIGIN/)
    }
    v699 = v1038 == -1;
  }
  var v138 = v699;
  if (v138) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  introspect(JAM.policy.p18) {
    var v1382 = genBankFile$$1.search(/LOCUS/)
  }
  var v1281 = v1382 == -1;
  var v1384 = !v1281;
  if (v1384) {
    introspect(JAM.policy.p18) {
      var v1383 = genBankFile$$1.search(/DEFINITION/)
    }
    v1281 = v1383 == -1;
  }
  var v1040 = v1281;
  var v1283 = !v1040;
  if (v1283) {
    introspect(JAM.policy.p18) {
      var v1282 = genBankFile$$1.search(/ACCESSION/)
    }
    v1040 = v1282 == -1;
  }
  var v700 = v1040;
  var v1042 = !v700;
  if (v1042) {
    introspect(JAM.policy.p18) {
      var v1041 = genBankFile$$1.search(/ORIGIN/)
    }
    v700 = v1041 == -1;
  }
  var v139 = v700;
  if (v139) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  introspect(JAM.policy.p18) {
    var v701 = genBankFile$$1.search(/FEATURES {13}/)
  }
  var v140 = v701 == -1;
  if (v140) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  introspect(JAM.policy.p18) {
    var v1385 = emblFile$$1.search(/ID/)
  }
  var v1284 = v1385 == -1;
  var v1387 = !v1284;
  if (v1387) {
    introspect(JAM.policy.p18) {
      var v1386 = emblFile$$1.search(/AC/)
    }
    v1284 = v1386 == -1;
  }
  var v1043 = v1284;
  var v1286 = !v1043;
  if (v1286) {
    introspect(JAM.policy.p18) {
      var v1285 = emblFile$$1.search(/DE/)
    }
    v1043 = v1285 == -1;
  }
  var v702 = v1043;
  var v1045 = !v702;
  if (v1045) {
    introspect(JAM.policy.p18) {
      var v1044 = emblFile$$1.search(/SQ/)
    }
    v702 = v1044 == -1;
  }
  var v141 = v702;
  if (v141) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  introspect(JAM.policy.p18) {
    var v703 = emblFile$$1.search(/^FT/m)
  }
  var v142 = v703 == -1;
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
    var v704 = basePerLine / groupSize;
    var v146 = j$$6 <= v704;
    for (;v146;) {
      var v145 = k < groupSize;
      for (;v145;) {
        var v705 = k + i$$5;
        introspect(JAM.policy.p17) {
          var v144 = text$$10.charAt(v705)
        }
        lineOfText = lineOfText + v144;
        k = k + 1;
        v145 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v706 = basePerLine / groupSize;
      v146 = j$$6 <= v706;
    }
    var v147 = outputWindow.document;
    var v148 = lineOfText + "\n";
    introspect(JAM.policy.p17) {
      v147.write(v148);
    }
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
    var v707 = adjustment < 0;
    if (v707) {
      v707 = adjusted >= 0;
    }
    var v150 = v707;
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
    var v708 = basePerLine$$2 / groupSize$$2;
    var v157 = j$$7 <= v708;
    for (;v157;) {
      var v153 = k$$1 < groupSize$$2;
      for (;v153;) {
        var v709 = i$$6 + k$$1;
        var v151 = v709 >= stopBase$$2;
        if (v151) {
          break;
        }
        var v710 = k$$1 + i$$6;
        introspect(JAM.policy.p17) {
          var v152 = text$$12.charAt(v710)
        }
        lineOfText$$1 = lineOfText$$1 + v152;
        k$$1 = k$$1 + 1;
        v153 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v155 = numberPosition$$1 == "above";
      if (v155) {
        var v711 = adjustNumbering(i$$6, numberingAdjustment);
        var v154 = rightNum(v711, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v154;
      }
      var v156 = i$$6 >= stopBase$$2;
      if (v156) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v712 = basePerLine$$2 / groupSize$$2;
      v157 = j$$7 <= v712;
    }
    var v180 = numberPosition$$1 == "left";
    if (v180) {
      var v158 = outputWindow.document;
      var v1287 = adjustNumbering(lineNum, numberingAdjustment);
      var v1046 = rightNum(v1287, "", 8, tabIn$$3);
      var v713 = v1046 + lineOfText$$1;
      var v159 = v713 + "\n";
      introspect(JAM.policy.p17) {
        v158.write(v159);
      }
      var v163 = strands$$1 == "two";
      if (v163) {
        var v160 = outputWindow.document;
        var v1288 = adjustNumbering(lineNum, numberingAdjustment);
        var v1047 = rightNum(v1288, "", 8, tabIn$$3);
        var v1048 = complement(lineOfText$$1);
        var v714 = v1047 + v1048;
        var v161 = v714 + "\n";
        introspect(JAM.policy.p17) {
          v160.write(v161);
        }
        var v162 = outputWindow.document;
        introspect(JAM.policy.p11) {
          v162.write("\n");
        }
      }
    } else {
      var v179 = numberPosition$$1 == "right";
      if (v179) {
        var v164 = outputWindow.document;
        var v1049 = adjustNumbering(i$$6, numberingAdjustment);
        var v715 = lineOfText$$1 + v1049;
        var v165 = v715 + "\n";
        introspect(JAM.policy.p17) {
          v164.write(v165);
        }
        var v169 = strands$$1 == "two";
        if (v169) {
          var v166 = outputWindow.document;
          var v1050 = complement(lineOfText$$1);
          var v1051 = adjustNumbering(i$$6, numberingAdjustment);
          var v716 = v1050 + v1051;
          var v167 = v716 + "\n";
          introspect(JAM.policy.p17) {
            v166.write(v167);
          }
          var v168 = outputWindow.document;
          introspect(JAM.policy.p11) {
            v168.write("\n");
          }
        }
      } else {
        var v178 = numberPosition$$1 == "above";
        if (v178) {
          var v170 = outputWindow.document;
          var v171 = aboveNum + "\n";
          introspect(JAM.policy.p17) {
            v170.write(v171);
          }
          var v172 = outputWindow.document;
          var v173 = lineOfText$$1 + "\n";
          introspect(JAM.policy.p17) {
            v172.write(v173);
          }
          var v177 = strands$$1 == "two";
          if (v177) {
            var v174 = outputWindow.document;
            var v717 = complement(lineOfText$$1);
            var v175 = v717 + "\n";
            introspect(JAM.policy.p17) {
              v174.write(v175);
            }
            var v176 = outputWindow.document;
            introspect(JAM.policy.p11) {
              v176.write("\n");
            }
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
    var v718 = basePerLine$$3 / groupSize$$3;
    var v188 = j$$8 <= v718;
    for (;v188;) {
      var v184 = k$$2 < groupSize$$3;
      for (;v184;) {
        var v719 = i$$7 + k$$2;
        var v182 = v719 >= stopBase$$3;
        if (v182) {
          break;
        }
        var v720 = k$$2 + i$$7;
        introspect(JAM.policy.p17) {
          var v183 = text$$13.charAt(v720)
        }
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
      var v721 = basePerLine$$3 / groupSize$$3;
      v188 = j$$8 <= v721;
    }
    var v199 = numberPosition$$2 == "left";
    if (v199) {
      var v189 = outputWindow.document;
      var v1052 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v722 = v1052 + lineOfText$$2;
      var v190 = v722 + "\n";
      introspect(JAM.policy.p17) {
        v189.write(v190);
      }
    } else {
      var v198 = numberPosition$$2 == "right";
      if (v198) {
        var v191 = outputWindow.document;
        var v723 = lineOfText$$2 + i$$7;
        var v192 = v723 + "\n";
        introspect(JAM.policy.p17) {
          v191.write(v192);
        }
      } else {
        var v197 = numberPosition$$2 == "above";
        if (v197) {
          var v193 = outputWindow.document;
          var v194 = aboveNum$$1 + "\n";
          introspect(JAM.policy.p17) {
            v193.write(v194);
          }
          var v195 = outputWindow.document;
          var v196 = lineOfText$$2 + "\n";
          introspect(JAM.policy.p17) {
            v195.write(v196);
          }
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
  var v1289 = sequence$$13.length;
  var v1053 = v1289 <= firstIndexToMutate;
  var v1290 = !v1053;
  if (v1290) {
    v1053 = lastIndexToMutate < 0;
  }
  var v724 = v1053;
  var v1054 = !v724;
  if (v1054) {
    v724 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v201 = v724;
  if (v201) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v209 = i$$8 < numMut;
  for (;v209;) {
    maxNum = sequence$$13.length;
    var v725 = Math.random();
    var v202 = v725 * maxNum;
    introspect(JAM.policy.p18) {
      randNum = Math.floor(v202);
    }
    var v726 = randNum < firstIndexToMutate;
    var v1055 = !v726;
    if (v1055) {
      v726 = randNum > lastIndexToMutate;
    }
    var v203 = v726;
    if (v203) {
      numMut++;
      i$$8++;
      v209 = i$$8 < numMut;
      continue;
    }
    introspect(JAM.policy.p18) {
      currentChar = sequence$$13.charAt(randNum);
    }
    needNewChar = true;
    for (;needNewChar;) {
      var v727 = Math.random();
      var v728 = components$$1.length;
      var v204 = v727 * v728;
      introspect(JAM.policy.p18) {
        componentsIndex = Math.round(v204);
      }
      var v729 = components$$1.length;
      var v205 = componentsIndex == v729;
      if (v205) {
        componentsIndex = 0;
      }
      var v730 = components$$1[componentsIndex];
      var v206 = v730 != currentChar;
      if (v206) {
        needNewChar = false;
      }
    }
    introspect(JAM.policy.p13) {
      var v731 = sequence$$13.substring(0, randNum)
    }
    var v732 = components$$1[componentsIndex];
    var v207 = v731 + v732;
    var v733 = randNum + 1;
    var v734 = sequence$$13.length;
    introspect(JAM.policy.p27) {
      var v208 = sequence$$13.substring(v733, v734)
    }
    sequence$$13 = v207 + v208;
    i$$8++;
    v209 = i$$8 < numMut;
  }
  var v210 = outputWindow.document;
  var v211 = addReturns(sequence$$13);
  introspect(JAM.policy.p17) {
    v210.write(v211);
  }
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v216 = j$$9 < lengthOut$$1;
  for (;v216;) {
    var v735 = Math.random();
    var v736 = components$$2.length;
    var v212 = v735 * v736;
    introspect(JAM.policy.p18) {
      tempNum$$1 = Math.floor(v212);
    }
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v737 = sequence$$14.length;
    var v215 = v737 == 60;
    if (v215) {
      var v213 = outputWindow.document;
      var v214 = sequence$$14 + "\n";
      introspect(JAM.policy.p17) {
        v213.write(v214);
      }
      sequence$$14 = "";
    }
    j$$9++;
    v216 = j$$9 < lengthOut$$1;
  }
  var v217 = outputWindow.document;
  var v218 = sequence$$14 + "\n";
  introspect(JAM.policy.p17) {
    v217.write(v218);
  }
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
    introspect(JAM.policy.p13) {
      var v219 = sequence$$15.substring(0, lookAhead)
    }
    shiftValue = v219.length;
    var v1291 = sequence$$15.length;
    var v1056 = v1291 - lookAhead;
    var v1057 = sequence$$15.length;
    introspect(JAM.policy.p27) {
      var v738 = sequence$$15.substring(v1056, v1057)
    }
    var v220 = v738 + sequence$$15;
    introspect(JAM.policy.p13) {
      var v221 = sequence$$15.substring(0, lookAhead)
    }
    sequence$$15 = v220 + v221;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v223 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v223.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  }
  var v224 = outputWindow.document;
  var v1292 = '<tr><td class="title" width="200px">' + "Site:";
  var v1058 = v1292 + '</td><td class="title">';
  var v739 = v1058 + "Positions:";
  var v225 = v739 + "</td></tr>\n";
  introspect(JAM.policy.p17) {
    v224.write(v225);
  }
  var i$$9 = 0;
  var v740 = arrayOfItems.length;
  var v241 = i$$9 < v740;
  for (;v241;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v741 = arrayOfItems[i$$9];
    introspect(JAM.policy.p18) {
      var v226 = v741.match(/\/.+\//)
    }
    matchExp = v226 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    var v1293 = arrayOfItems[i$$9];
    introspect(JAM.policy.p18) {
      var v1059 = v1293.match(/\)\D*\d+/)
    }
    var v742 = v1059.toString();
    introspect(JAM.policy.p16) {
      var v227 = v742.replace(/\)\D*/, "")
    }
    cutDistance = parseFloat(v227);
    introspect(JAM.policy.p17) {
      var v233 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    for (;v233;) {
      var v228 = matchExp.lastIndex;
      matchPosition = v228 - cutDistance;
      var v743 = matchPosition >= lowerLimit;
      if (v743) {
        v743 = matchPosition < upperLimit;
      }
      var v231 = v743;
      if (v231) {
        timesFound++;
        var v229 = tempString$$1 + ", ";
        var v744 = matchPosition - shiftValue;
        var v230 = v744 + 1;
        tempString$$1 = v229 + v230;
      }
      var v745 = matchExp.lastIndex;
      var v1060 = RegExp.lastMatch;
      var v746 = v1060.length;
      var v232 = v745 - v746;
      matchExp.lastIndex = v232 + 1;
      introspect(JAM.policy.p17) {
        v233 = matchArray$$1 = matchExp.exec(sequence$$15);
      }
    }
    introspect(JAM.policy.p18) {
      var v747 = tempString$$1.search(/\d/)
    }
    var v234 = v747 != -1;
    if (v234) {
      introspect(JAM.policy.p16) {
        tempString$$1 = tempString$$1.replace(/none,\s*/, "");
      }
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
    var v1454 = '<tr><td class="' + backGroundClass;
    var v1440 = v1454 + '">';
    var v1477 = arrayOfItems[i$$9];
    introspect(JAM.policy.p18) {
      var v1467 = v1477.match(/\([^\(]+\)/)
    }
    var v1455 = v1467.toString();
    introspect(JAM.policy.p16) {
      var v1441 = v1455.replace(/\(|\)/g, "")
    }
    var v1424 = v1440 + v1441;
    var v1388 = v1424 + '</td><td class="';
    var v1294 = v1388 + backGroundClass;
    var v1061 = v1294 + '">';
    var v748 = v1061 + tempString$$1;
    var v240 = v748 + "</td></tr>\n";
    introspect(JAM.policy.p17) {
      v239.write(v240);
    }
    timesFound = 0;
    i$$9++;
    var v749 = arrayOfItems.length;
    v241 = i$$9 < v749;
  }
  var v242 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v242.write("</tbody></table>\n");
  }
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v243 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v243.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  }
  var v244 = outputWindow.document;
  var v1425 = '<tr><td class="title">' + "Pattern:";
  var v1389 = v1425 + '</td><td class="title">';
  var v1295 = v1389 + "Times found:";
  var v1062 = v1295 + '</td><td class="title">';
  var v750 = v1062 + "Percentage:";
  var v245 = v750 + "</td></tr>\n";
  introspect(JAM.policy.p17) {
    v244.write(v245);
  }
  var i$$10 = 0;
  var v751 = arrayOfItems$$1.length;
  var v254 = i$$10 < v751;
  for (;v254;) {
    var tempNumber = 0;
    var v752 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p18) {
      var v246 = v752.match(/\/[^\/]+\//)
    }
    var matchExp$$1 = v246 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    introspect(JAM.policy.p17) {
      var v753 = sequence$$16.search(matchExp$$1)
    }
    var v248 = v753 != -1;
    if (v248) {
      introspect(JAM.policy.p17) {
        var v247 = sequence$$16.match(matchExp$$1)
      }
      tempNumber = v247.length;
    }
    var percentage = 0;
    var v1063 = originalLength + 1;
    var v1390 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p18) {
      var v1296 = v1390.match(/\d+/)
    }
    var v1064 = parseFloat(v1296);
    var v754 = v1063 - v1064;
    var v251 = v754 > 0;
    if (v251) {
      var v249 = 100 * tempNumber;
      var v755 = originalLength + 1;
      var v1297 = arrayOfItems$$1[i$$10];
      introspect(JAM.policy.p18) {
        var v1065 = v1297.match(/\d+/)
      }
      var v756 = parseFloat(v1065);
      var v250 = v755 - v756;
      percentage = v249 / v250;
    }
    var v252 = outputWindow.document;
    var v1478 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p18) {
      var v1468 = v1478.match(/\([^\(]+\)\b/)
    }
    var v1456 = v1468.toString();
    introspect(JAM.policy.p16) {
      var v1442 = v1456.replace(/\(|\)/g, "")
    }
    var v1426 = "<tr><td>" + v1442;
    var v1391 = v1426 + "</td><td>";
    var v1298 = v1391 + tempNumber;
    var v1066 = v1298 + "</td><td>";
    introspect(JAM.policy.p9) {
      var v1067 = percentage.toFixed(2)
    }
    var v757 = v1066 + v1067;
    var v253 = v757 + "</td></tr>\n";
    introspect(JAM.policy.p17) {
      v252.write(v253);
    }
    i$$10++;
    var v758 = arrayOfItems$$1.length;
    v254 = i$$10 < v758;
  }
  var v255 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v255.write("</tbody></table>\n");
  }
  return true;
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v759 = sequence$$17.length;
  var v262 = v759 > 0;
  for (;v262;) {
    maxNum$$1 = sequence$$17.length;
    var v760 = Math.random();
    var v256 = v760 * maxNum$$1;
    introspect(JAM.policy.p18) {
      randNum$$1 = Math.floor(v256);
    }
    introspect(JAM.policy.p18) {
      tempChar$$2 = sequence$$17.charAt(randNum$$1);
    }
    tempSeq = tempSeq + tempChar$$2;
    introspect(JAM.policy.p13) {
      tempString1 = sequence$$17.substring(0, randNum$$1);
    }
    var v257 = randNum$$1 + 1;
    var v258 = sequence$$17.length;
    introspect(JAM.policy.p16) {
      tempString2 = sequence$$17.substring(v257, v258);
    }
    sequence$$17 = tempString1 + tempString2;
    var v761 = tempSeq.length;
    var v261 = v761 == 60;
    if (v261) {
      var v259 = outputWindow.document;
      var v260 = tempSeq + "\n";
      introspect(JAM.policy.p17) {
        v259.write(v260);
      }
      tempSeq = "";
    }
    var v762 = sequence$$17.length;
    v262 = v762 > 0;
  }
  var v263 = outputWindow.document;
  var v264 = tempSeq + "\n";
  introspect(JAM.policy.p17) {
    v263.write(v264);
  }
  return true;
}
function pcrPrimerStats() {
  var theDocument = document;
  var newDna = "";
  var title$$9 = "";
  var maxInput$$3 = 5E3;
  var maxPrimerLength = 50;
  var milliMolarSalt = 50;
  var milliMolarMagnesium = 1.5;
  var nanoMolarPrimerTotal = 200;
  var isPhosphorylated = false;
  var v763 = testScript();
  var v265 = v763 == false;
  if (v265) {
    return;
  }
  var v1443 = theDocument.forms;
  var v1427 = v1443[0];
  var v1392 = v1427.elements;
  var v1299 = v1392[0];
  var v1068 = checkFormElement(v1299);
  var v764 = v1068 == false;
  var v1070 = !v764;
  if (v1070) {
    var v1457 = theDocument.forms;
    var v1444 = v1457[0];
    var v1428 = v1444.elements;
    var v1393 = v1428[0];
    var v1300 = v1393.value;
    var v1069 = checkSequenceLength(v1300, maxInput$$3);
    v764 = v1069 == false;
  }
  var v266 = v764;
  if (v266) {
    return;
  }
  molarSalt = milliMolarSalt / 1E3;
  molarMagnesium = milliMolarMagnesium / 1E3;
  molarPrimerTotal = nanoMolarPrimerTotal / 1E9;
  isPhosphorylated = false;
  openWindow();
  openPre();
  var v1394 = theDocument.forms;
  var v1301 = v1394[0];
  var v1071 = v1301.elements;
  var v765 = v1071[0];
  var v267 = v765.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v267);
  var v268 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v268.write("Global settings:\n");
  }
  if (isPhosphorylated) {
    var v269 = outputWindow.document;
    introspect(JAM.policy.p11) {
      v269.write("-The primers have a 5'-phosphate group.\n");
    }
  } else {
    var v270 = outputWindow.document;
    introspect(JAM.policy.p11) {
      v270.write("-The primers do not have a 5'-phosphate group.\n");
    }
  }
  var v271 = outputWindow.document;
  var v766 = "-Combined concentration of K+ and Na+ in the reaction = " + milliMolarSalt;
  var v272 = v766 + " millimolar.\n";
  introspect(JAM.policy.p17) {
    v271.write(v272);
  }
  var v273 = outputWindow.document;
  var v767 = "-Mg+2 concentration in the reaction = " + milliMolarMagnesium;
  var v274 = v767 + " millimolar.\n";
  introspect(JAM.policy.p17) {
    v273.write(v274);
  }
  var v275 = outputWindow.document;
  var v768 = "-Primer concentration in the reaction = " + nanoMolarPrimerTotal;
  var v276 = v768 + " nanomolar.\n";
  introspect(JAM.policy.p17) {
    v275.write(v276);
  }
  var v277 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v277.write("\n");
  }
  var v278 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v278.write("------------------------------------------------------------\n");
  }
  var i$$11 = 0;
  var v769 = arrayOfFasta$$1.length;
  var v343 = i$$11 < v769;
  for (;v343;) {
    var v279 = arrayOfFasta$$1[i$$11];
    newDna = getSequenceFromFasta(v279);
    var v280 = arrayOfFasta$$1[i$$11];
    title$$9 = getTitleFromFasta(v280);
    newDna = _removeNonPrimer(newDna);
    var v770 = newDna.length;
    var v281 = v770 == 0;
    if (v281) {
      i$$11++;
      var v771 = arrayOfFasta$$1.length;
      v343 = i$$11 < v771;
      continue;
    }
    var v772 = newDna.length;
    var v282 = v772 > maxPrimerLength;
    if (v282) {
      i$$11++;
      var v773 = arrayOfFasta$$1.length;
      v343 = i$$11 < v773;
      continue;
    }
    var percentGC = _percentGC(newDna);
    var nearestNeighborTm = _nearestNeighborTm(newDna);
    var selfCompHash = _getSelfComplementarityReport(newDna);
    var hairpinHash = _getHairpinReport(newDna);
    var v283 = outputWindow.document;
    introspect(JAM.policy.p11) {
      v283.write("------------------------------------------------------------\n");
    }
    var v284 = outputWindow.document;
    introspect(JAM.policy.p11) {
      v284.write("General properties:\n");
    }
    var v285 = outputWindow.document;
    introspect(JAM.policy.p11) {
      v285.write("-------------------\n");
    }
    var v286 = outputWindow.document;
    var v1072 = rightNum("Primer name:", "", 32, "");
    var v774 = v1072 + title$$9;
    var v287 = v774 + "\n";
    introspect(JAM.policy.p17) {
      v286.write(v287);
    }
    var v288 = outputWindow.document;
    var v1073 = rightNum("Primer sequence:", "", 32, "");
    var v775 = v1073 + newDna;
    var v289 = v775 + "\n";
    introspect(JAM.policy.p17) {
      v288.write(v289);
    }
    var v290 = outputWindow.document;
    var v1074 = rightNum("Sequence length:", "", 32, "");
    var v1075 = newDna.length;
    var v776 = v1074 + v1075;
    var v291 = v776 + "\n";
    introspect(JAM.policy.p17) {
      v290.write(v291);
    }
    var v292 = outputWindow.document;
    var v1076 = rightNum("Base counts:", "", 32, "");
    var v1077 = _baseCounts(newDna);
    var v777 = v1076 + v1077;
    var v293 = v777 + "\n";
    introspect(JAM.policy.p17) {
      v292.write(v293);
    }
    var v294 = outputWindow.document;
    var v1078 = rightNum("GC content (%):", "", 32, "");
    var v778 = v1078 + percentGC;
    var v295 = v778 + "\n";
    introspect(JAM.policy.p17) {
      v294.write(v295);
    }
    var v296 = outputWindow.document;
    var v1079 = rightNum("Molecular weight (Daltons):", "", 32, "");
    var v1080 = _molecularWeight(newDna, isPhosphorylated);
    var v779 = v1079 + v1080;
    var v297 = v779 + "\n";
    introspect(JAM.policy.p17) {
      v296.write(v297);
    }
    var v298 = outputWindow.document;
    var v1081 = rightNum("nmol/A260:", "", 32, "");
    var v1082 = _nmolPerA260(newDna);
    var v780 = v1081 + v1082;
    var v299 = v780 + "\n";
    introspect(JAM.policy.p17) {
      v298.write(v299);
    }
    var v300 = outputWindow.document;
    var v1083 = rightNum("micrograms/A260:", "", 32, "");
    var v1084 = _microgramsPerA260(newDna, isPhosphorylated);
    var v781 = v1083 + v1084;
    var v301 = v781 + "\n";
    introspect(JAM.policy.p17) {
      v300.write(v301);
    }
    var v302 = outputWindow.document;
    var v1085 = rightNum("Basic Tm (degrees C):", "", 32, "");
    var v1086 = _basicTm(newDna);
    var v782 = v1085 + v1086;
    var v303 = v782 + "\n";
    introspect(JAM.policy.p17) {
      v302.write(v303);
    }
    var v304 = outputWindow.document;
    var v1087 = rightNum("Salt adjusted Tm (degrees C):", "", 32, "");
    var v1088 = _molarSaltAdjustedTm(newDna);
    var v783 = v1087 + v1088;
    var v305 = v783 + "\n";
    introspect(JAM.policy.p17) {
      v304.write(v305);
    }
    var v306 = outputWindow.document;
    var v1089 = rightNum("Nearest neighbor Tm (degrees C):", "", 32, "");
    var v784 = v1089 + nearestNeighborTm;
    var v307 = v784 + "\n";
    introspect(JAM.policy.p17) {
      v306.write(v307);
    }
    var v308 = outputWindow.document;
    introspect(JAM.policy.p11) {
      v308.write("\n");
    }
    var v309 = outputWindow.document;
    introspect(JAM.policy.p11) {
      v309.write("PCR suitability tests (Pass / Warning):\n");
    }
    var v310 = outputWindow.document;
    introspect(JAM.policy.p11) {
      v310.write("------------------------------------\n");
    }
    var v311 = outputWindow.document;
    var v1090 = rightNum("Single base runs:", "", 32, "");
    var v1091 = _getBaseRunsReport(newDna);
    var v785 = v1090 + v1091;
    var v312 = v785 + "\n";
    introspect(JAM.policy.p17) {
      v311.write(v312);
    }
    var v313 = outputWindow.document;
    var v1092 = rightNum("Dinucleotide base runs:", "", 32, "");
    var v1093 = _getDiNucleotideRunsReport(newDna);
    var v786 = v1092 + v1093;
    var v314 = v786 + "\n";
    introspect(JAM.policy.p17) {
      v313.write(v314);
    }
    var v315 = outputWindow.document;
    var v1094 = rightNum("Length:", "", 32, "");
    var v1095 = _getSuitableLengthReport(newDna, 14, 30);
    var v787 = v1094 + v1095;
    var v316 = v787 + "\n";
    introspect(JAM.policy.p17) {
      v315.write(v316);
    }
    var v317 = outputWindow.document;
    var v1096 = rightNum("Percent GC:", "", 32, "");
    var v1097 = _getSuitableGCReport(newDna, percentGC);
    var v788 = v1096 + v1097;
    var v318 = v788 + "\n";
    introspect(JAM.policy.p17) {
      v317.write(v318);
    }
    var v319 = outputWindow.document;
    var v1098 = rightNum("Tm (Nearest neighbor):", "", 32, "");
    var v1099 = _getSuitableTmReport(newDna, nearestNeighborTm);
    var v789 = v1098 + v1099;
    var v320 = v789 + "\n";
    introspect(JAM.policy.p17) {
      v319.write(v320);
    }
    var v321 = outputWindow.document;
    var v1100 = rightNum("GC clamp:", "", 32, "");
    var v1101 = _getSuitableThreePrimeGC(newDna);
    var v790 = v1100 + v1101;
    var v322 = v790 + "\n";
    introspect(JAM.policy.p17) {
      v321.write(v322);
    }
    var v323 = outputWindow.document;
    var v1102 = rightNum("Self-annealing:", "", 32, "");
    var v1103 = selfCompHash["report"];
    var v791 = v1102 + v1103;
    var v324 = v791 + "\n";
    introspect(JAM.policy.p17) {
      v323.write(v324);
    }
    var v792 = selfCompHash["report"];
    var v331 = v792 != "Pass";
    if (v331) {
      var v325 = outputWindow.document;
      var v1104 = rightNum(":", "", 32, "");
      var v1105 = selfCompHash["upper"];
      var v793 = v1104 + v1105;
      var v326 = v793 + "\n";
      introspect(JAM.policy.p17) {
        v325.write(v326);
      }
      var v327 = outputWindow.document;
      var v1106 = rightNum(":", "", 32, "");
      var v1107 = selfCompHash["divider"];
      var v794 = v1106 + v1107;
      var v328 = v794 + "\n";
      introspect(JAM.policy.p17) {
        v327.write(v328);
      }
      var v329 = outputWindow.document;
      var v1108 = rightNum(":", "", 32, "");
      var v1109 = selfCompHash["lower"];
      var v795 = v1108 + v1109;
      var v330 = v795 + "\n";
      introspect(JAM.policy.p17) {
        v329.write(v330);
      }
    }
    var v332 = outputWindow.document;
    var v1110 = rightNum("Hairpin formation:", "", 32, "");
    var v1111 = hairpinHash["report"];
    var v796 = v1110 + v1111;
    var v333 = v796 + "\n";
    introspect(JAM.policy.p17) {
      v332.write(v333);
    }
    var v797 = hairpinHash["report"];
    var v340 = v797 != "Pass";
    if (v340) {
      var v334 = outputWindow.document;
      var v1112 = rightNum(":", "", 32, "");
      var v1113 = hairpinHash["upper"];
      var v798 = v1112 + v1113;
      var v335 = v798 + "\n";
      introspect(JAM.policy.p17) {
        v334.write(v335);
      }
      var v336 = outputWindow.document;
      var v1114 = rightNum(":", "", 32, "");
      var v1115 = hairpinHash["divider"];
      var v799 = v1114 + v1115;
      var v337 = v799 + "\n";
      introspect(JAM.policy.p17) {
        v336.write(v337);
      }
      var v338 = outputWindow.document;
      var v1116 = rightNum(":", "", 32, "");
      var v1117 = hairpinHash["lower"];
      var v800 = v1116 + v1117;
      var v339 = v800 + "\n";
      introspect(JAM.policy.p17) {
        v338.write(v339);
      }
    }
    var v341 = outputWindow.document;
    introspect(JAM.policy.p11) {
      v341.write("------------------------------------------------------------\n");
    }
    var v342 = outputWindow.document;
    introspect(JAM.policy.p11) {
      v342.write("\n");
    }
    i$$11++;
    var v801 = arrayOfFasta$$1.length;
    v343 = i$$11 < v801;
  }
  closePre();
  closeWindow();
  return;
}
function _removeNonPrimer(sequence$$18) {
  introspect(JAM.policy.p16) {
    sequence$$18.replace(/u/g, "t");
  }
  introspect(JAM.policy.p16) {
    sequence$$18.replace(/U/g, "T");
  }
  introspect(JAM.policy.p16) {
    return sequence$$18.replace(/[^gatcryswkmbdhvnGATCRYSWKMBDHVN]/g, "");
  }
}
function _containsOnlyNonDegenerates(sequence$$19) {
  introspect(JAM.policy.p18) {
    var v802 = sequence$$19.search(/[^gatc]/i)
  }
  var v344 = v802 == -1;
  if (v344) {
    return true;
  }
  return false;
}
function _baseCounts(sequence$$20) {
  var numG = _getBaseCount(sequence$$20, "g");
  var numA = _getBaseCount(sequence$$20, "a");
  var numT = _getBaseCount(sequence$$20, "t");
  var numC = _getBaseCount(sequence$$20, "c");
  var v345 = sequence$$20.length;
  var v1118 = numG + numA;
  var v803 = v1118 + numT;
  var v346 = v803 + numC;
  var numOther = v345 - v346;
  var v1469 = "G=" + numG;
  var v1458 = v1469 + "; A=";
  var v1445 = v1458 + numA;
  var v1429 = v1445 + "; T=";
  var v1395 = v1429 + numT;
  var v1302 = v1395 + "; C=";
  var v1119 = v1302 + numC;
  var v804 = v1119 + "; Other=";
  var v347 = v804 + numOther;
  return v347 + ";";
}
function _microgramsPerA260(sequence$$21, isPhosphorylated$$1) {
  var v348 = _containsOnlyNonDegenerates(sequence$$21);
  if (v348) {
    return _microgramsPerA260NonDegen(sequence$$21, isPhosphorylated$$1);
  } else {
    return _microgramsPerA260Degen(sequence$$21, isPhosphorylated$$1);
  }
  return;
}
function _microgramsPerA260NonDegen(sequence$$22, isPhosphorylated$$2) {
  var mw = _mw(sequence$$22, isPhosphorylated$$2);
  var v349 = _getExtinctionCoefficient(sequence$$22);
  var result = mw / v349;
  introspect(JAM.policy.p9) {
    return result.toFixed(2);
  }
}
function _microgramsPerA260Degen(sequence$$23, isPhosphorylated$$3) {
  var lowerBoundsSequence = sequence$$23;
  var upperBoundsSequence = sequence$$23;
  introspect(JAM.policy.p16) {
    lowerBoundsSequence = lowerBoundsSequence.replace(/r/gi, "g");
  }
  introspect(JAM.policy.p16) {
    lowerBoundsSequence = lowerBoundsSequence.replace(/y/gi, "c");
  }
  introspect(JAM.policy.p16) {
    lowerBoundsSequence = lowerBoundsSequence.replace(/s/gi, "c");
  }
  introspect(JAM.policy.p16) {
    lowerBoundsSequence = lowerBoundsSequence.replace(/w/gi, "t");
  }
  introspect(JAM.policy.p16) {
    lowerBoundsSequence = lowerBoundsSequence.replace(/k/gi, "t");
  }
  introspect(JAM.policy.p16) {
    lowerBoundsSequence = lowerBoundsSequence.replace(/m/gi, "c");
  }
  introspect(JAM.policy.p16) {
    lowerBoundsSequence = lowerBoundsSequence.replace(/b/gi, "c");
  }
  introspect(JAM.policy.p16) {
    lowerBoundsSequence = lowerBoundsSequence.replace(/d/gi, "t");
  }
  introspect(JAM.policy.p16) {
    lowerBoundsSequence = lowerBoundsSequence.replace(/h/gi, "c");
  }
  introspect(JAM.policy.p16) {
    lowerBoundsSequence = lowerBoundsSequence.replace(/v/gi, "c");
  }
  introspect(JAM.policy.p16) {
    lowerBoundsSequence = lowerBoundsSequence.replace(/n/gi, "c");
  }
  introspect(JAM.policy.p16) {
    upperBoundsSequence = upperBoundsSequence.replace(/r/gi, "a");
  }
  introspect(JAM.policy.p16) {
    upperBoundsSequence = upperBoundsSequence.replace(/y/gi, "t");
  }
  introspect(JAM.policy.p16) {
    upperBoundsSequence = upperBoundsSequence.replace(/s/gi, "g");
  }
  introspect(JAM.policy.p16) {
    upperBoundsSequence = upperBoundsSequence.replace(/w/gi, "a");
  }
  introspect(JAM.policy.p16) {
    upperBoundsSequence = upperBoundsSequence.replace(/k/gi, "g");
  }
  introspect(JAM.policy.p16) {
    upperBoundsSequence = upperBoundsSequence.replace(/m/gi, "a");
  }
  introspect(JAM.policy.p16) {
    upperBoundsSequence = upperBoundsSequence.replace(/b/gi, "g");
  }
  introspect(JAM.policy.p16) {
    upperBoundsSequence = upperBoundsSequence.replace(/d/gi, "a");
  }
  introspect(JAM.policy.p16) {
    upperBoundsSequence = upperBoundsSequence.replace(/h/gi, "a");
  }
  introspect(JAM.policy.p16) {
    upperBoundsSequence = upperBoundsSequence.replace(/v/gi, "a");
  }
  introspect(JAM.policy.p16) {
    upperBoundsSequence = upperBoundsSequence.replace(/n/gi, "a");
  }
  var v805 = _microgramsPerA260NonDegen(upperBoundsSequence, isPhosphorylated$$3);
  var v350 = v805 + " to ";
  var v351 = _microgramsPerA260NonDegen(lowerBoundsSequence, isPhosphorylated$$3);
  return v350 + v351;
}
function _nmolPerA260(sequence$$24) {
  var v352 = _containsOnlyNonDegenerates(sequence$$24);
  if (v352) {
    return _nmolPerA260NonDegen(sequence$$24);
  } else {
    return _nmolPerA260Degen(sequence$$24);
  }
  return;
}
function _nmolPerA260NonDegen(sequence$$25) {
  var result$$1 = _getExtinctionCoefficient(sequence$$25);
  var v353 = 1 / result$$1;
  result$$1 = v353 * 1E3;
  introspect(JAM.policy.p9) {
    return result$$1.toFixed(2);
  }
}
function _getExtinctionCoefficient(sequence$$26) {
  var dimerValues = _getDimerExtinctionCoefficients();
  var singleValues = _getSingleExtinctionCoefficients();
  var dimerSum = 0;
  var singleSum = 0;
  sequence$$26 = sequence$$26.toLowerCase();
  var i$$12 = 0;
  var v1120 = sequence$$26.length;
  var v806 = v1120 - 1;
  var v355 = i$$12 < v806;
  for (;v355;) {
    introspect(JAM.policy.p17) {
      var v1121 = sequence$$26.charAt(i$$12)
    }
    var v1303 = i$$12 + 1;
    introspect(JAM.policy.p17) {
      var v1122 = sequence$$26.charAt(v1303)
    }
    var v807 = v1121 + v1122;
    var v354 = dimerValues[v807];
    dimerSum = dimerSum + v354;
    i$$12++;
    var v1123 = sequence$$26.length;
    var v808 = v1123 - 1;
    v355 = i$$12 < v808;
  }
  i$$12 = 1;
  var v1124 = sequence$$26.length;
  var v809 = v1124 - 1;
  var v357 = i$$12 < v809;
  for (;v357;) {
    introspect(JAM.policy.p17) {
      var v810 = sequence$$26.charAt(i$$12)
    }
    var v356 = singleValues[v810];
    singleSum = singleSum + v356;
    i$$12++;
    var v1125 = sequence$$26.length;
    var v811 = v1125 - 1;
    v357 = i$$12 < v811;
  }
  var v358 = 2 * dimerSum;
  return v358 - singleSum;
}
function _nmolPerA260Degen(sequence$$27) {
  var lowerBoundsSequence$$1 = sequence$$27;
  var upperBoundsSequence$$1 = sequence$$27;
  introspect(JAM.policy.p16) {
    lowerBoundsSequence$$1 = lowerBoundsSequence$$1.replace(/r/gi, "g");
  }
  introspect(JAM.policy.p16) {
    lowerBoundsSequence$$1 = lowerBoundsSequence$$1.replace(/y/gi, "c");
  }
  introspect(JAM.policy.p16) {
    lowerBoundsSequence$$1 = lowerBoundsSequence$$1.replace(/s/gi, "c");
  }
  introspect(JAM.policy.p16) {
    lowerBoundsSequence$$1 = lowerBoundsSequence$$1.replace(/w/gi, "t");
  }
  introspect(JAM.policy.p16) {
    lowerBoundsSequence$$1 = lowerBoundsSequence$$1.replace(/k/gi, "t");
  }
  introspect(JAM.policy.p16) {
    lowerBoundsSequence$$1 = lowerBoundsSequence$$1.replace(/m/gi, "c");
  }
  introspect(JAM.policy.p16) {
    lowerBoundsSequence$$1 = lowerBoundsSequence$$1.replace(/b/gi, "c");
  }
  introspect(JAM.policy.p16) {
    lowerBoundsSequence$$1 = lowerBoundsSequence$$1.replace(/d/gi, "t");
  }
  introspect(JAM.policy.p16) {
    lowerBoundsSequence$$1 = lowerBoundsSequence$$1.replace(/h/gi, "c");
  }
  introspect(JAM.policy.p16) {
    lowerBoundsSequence$$1 = lowerBoundsSequence$$1.replace(/v/gi, "c");
  }
  introspect(JAM.policy.p16) {
    lowerBoundsSequence$$1 = lowerBoundsSequence$$1.replace(/n/gi, "c");
  }
  introspect(JAM.policy.p16) {
    upperBoundsSequence$$1 = upperBoundsSequence$$1.replace(/r/gi, "a");
  }
  introspect(JAM.policy.p16) {
    upperBoundsSequence$$1 = upperBoundsSequence$$1.replace(/y/gi, "t");
  }
  introspect(JAM.policy.p16) {
    upperBoundsSequence$$1 = upperBoundsSequence$$1.replace(/s/gi, "g");
  }
  introspect(JAM.policy.p16) {
    upperBoundsSequence$$1 = upperBoundsSequence$$1.replace(/w/gi, "a");
  }
  introspect(JAM.policy.p16) {
    upperBoundsSequence$$1 = upperBoundsSequence$$1.replace(/k/gi, "g");
  }
  introspect(JAM.policy.p16) {
    upperBoundsSequence$$1 = upperBoundsSequence$$1.replace(/m/gi, "a");
  }
  introspect(JAM.policy.p16) {
    upperBoundsSequence$$1 = upperBoundsSequence$$1.replace(/b/gi, "g");
  }
  introspect(JAM.policy.p16) {
    upperBoundsSequence$$1 = upperBoundsSequence$$1.replace(/d/gi, "a");
  }
  introspect(JAM.policy.p16) {
    upperBoundsSequence$$1 = upperBoundsSequence$$1.replace(/h/gi, "a");
  }
  introspect(JAM.policy.p16) {
    upperBoundsSequence$$1 = upperBoundsSequence$$1.replace(/v/gi, "a");
  }
  introspect(JAM.policy.p16) {
    upperBoundsSequence$$1 = upperBoundsSequence$$1.replace(/n/gi, "a");
  }
  var v812 = _nmolPerA260NonDegen(upperBoundsSequence$$1);
  var v359 = v812 + " to ";
  var v360 = _nmolPerA260NonDegen(lowerBoundsSequence$$1);
  return v359 + v360;
}
function _percentGC(sequence$$28) {
  var v361 = _containsOnlyNonDegenerates(sequence$$28);
  if (v361) {
    return _percentGCNonDegen(sequence$$28);
  } else {
    return _percentGCDegen(sequence$$28);
  }
  return;
}
function _percentGCNonDegen(sequence$$29) {
  var v362 = _getBaseCount(sequence$$29, "g");
  var v363 = _getBaseCount(sequence$$29, "c");
  var numHits = v362 + v363;
  var v1126 = sequence$$29.length;
  var v813 = numHits / v1126;
  var v364 = v813 * 100;
  introspect(JAM.policy.p9) {
    return v364.toFixed(2);
  }
}
function _percentGCDegen(sequence$$30) {
  var lowerBoundsSequence$$2 = sequence$$30;
  var upperBoundsSequence$$2 = sequence$$30;
  introspect(JAM.policy.p16) {
    lowerBoundsSequence$$2 = lowerBoundsSequence$$2.replace(/s/gi, "g");
  }
  introspect(JAM.policy.p16) {
    upperBoundsSequence$$2 = upperBoundsSequence$$2.replace(/s/gi, "g");
  }
  introspect(JAM.policy.p16) {
    lowerBoundsSequence$$2 = lowerBoundsSequence$$2.replace(/w/gi, "a");
  }
  introspect(JAM.policy.p16) {
    upperBoundsSequence$$2 = upperBoundsSequence$$2.replace(/w/gi, "a");
  }
  introspect(JAM.policy.p16) {
    lowerBoundsSequence$$2 = lowerBoundsSequence$$2.replace(/r/gi, "a");
  }
  introspect(JAM.policy.p16) {
    lowerBoundsSequence$$2 = lowerBoundsSequence$$2.replace(/y/gi, "t");
  }
  introspect(JAM.policy.p16) {
    lowerBoundsSequence$$2 = lowerBoundsSequence$$2.replace(/k/gi, "t");
  }
  introspect(JAM.policy.p16) {
    lowerBoundsSequence$$2 = lowerBoundsSequence$$2.replace(/m/gi, "a");
  }
  introspect(JAM.policy.p16) {
    lowerBoundsSequence$$2 = lowerBoundsSequence$$2.replace(/b/gi, "t");
  }
  introspect(JAM.policy.p16) {
    lowerBoundsSequence$$2 = lowerBoundsSequence$$2.replace(/d/gi, "a");
  }
  introspect(JAM.policy.p16) {
    lowerBoundsSequence$$2 = lowerBoundsSequence$$2.replace(/h/gi, "a");
  }
  introspect(JAM.policy.p16) {
    lowerBoundsSequence$$2 = lowerBoundsSequence$$2.replace(/v/gi, "a");
  }
  introspect(JAM.policy.p16) {
    lowerBoundsSequence$$2 = lowerBoundsSequence$$2.replace(/n/gi, "a");
  }
  introspect(JAM.policy.p16) {
    upperBoundsSequence$$2 = upperBoundsSequence$$2.replace(/r/gi, "g");
  }
  introspect(JAM.policy.p16) {
    upperBoundsSequence$$2 = upperBoundsSequence$$2.replace(/y/gi, "c");
  }
  introspect(JAM.policy.p16) {
    upperBoundsSequence$$2 = upperBoundsSequence$$2.replace(/k/gi, "g");
  }
  introspect(JAM.policy.p16) {
    upperBoundsSequence$$2 = upperBoundsSequence$$2.replace(/m/gi, "c");
  }
  introspect(JAM.policy.p16) {
    upperBoundsSequence$$2 = upperBoundsSequence$$2.replace(/b/gi, "g");
  }
  introspect(JAM.policy.p16) {
    upperBoundsSequence$$2 = upperBoundsSequence$$2.replace(/d/gi, "g");
  }
  introspect(JAM.policy.p16) {
    upperBoundsSequence$$2 = upperBoundsSequence$$2.replace(/h/gi, "c");
  }
  introspect(JAM.policy.p16) {
    upperBoundsSequence$$2 = upperBoundsSequence$$2.replace(/v/gi, "g");
  }
  introspect(JAM.policy.p16) {
    upperBoundsSequence$$2 = upperBoundsSequence$$2.replace(/n/gi, "g");
  }
  var v814 = _percentGCNonDegen(lowerBoundsSequence$$2);
  var v365 = v814 + " to ";
  var v366 = _percentGCNonDegen(upperBoundsSequence$$2);
  return v365 + v366;
}
function _molecularWeight(sequence$$31, isPhosphorylated$$4) {
  var v367 = _containsOnlyNonDegenerates(sequence$$31);
  if (v367) {
    return _molecularWeightNonDegen(sequence$$31, isPhosphorylated$$4);
  } else {
    return _molecularWeightDegen(sequence$$31, isPhosphorylated$$4);
  }
  return;
}
function _molecularWeightNonDegen(sequence$$32, isPhosphorylated$$5) {
  var v368 = _mw(sequence$$32, isPhosphorylated$$5);
  introspect(JAM.policy.p9) {
    return v368.toFixed(2);
  }
}
function _mw(sequence$$33, isPhosphorylated$$6) {
  var g = _getBaseCount(sequence$$33, "g");
  var a = _getBaseCount(sequence$$33, "a");
  var t = _getBaseCount(sequence$$33, "t");
  var c = _getBaseCount(sequence$$33, "c");
  var phosAdjust = 0;
  if (isPhosphorylated$$6) {
    phosAdjust = 79;
  }
  var v1396 = g * 329.21;
  var v1397 = a * 313.21;
  var v1304 = v1396 + v1397;
  var v1305 = t * 304.2;
  var v1127 = v1304 + v1305;
  var v1128 = c * 289.18;
  var v815 = v1127 + v1128;
  var v369 = v815 - 61.96;
  return v369 + phosAdjust;
}
function _molecularWeightDegen(sequence$$34, isPhosphorylated$$7) {
  var lowerBoundsSequence$$3 = sequence$$34;
  var upperBoundsSequence$$3 = sequence$$34;
  introspect(JAM.policy.p16) {
    lowerBoundsSequence$$3 = lowerBoundsSequence$$3.replace(/r/gi, "a");
  }
  introspect(JAM.policy.p16) {
    lowerBoundsSequence$$3 = lowerBoundsSequence$$3.replace(/y/gi, "c");
  }
  introspect(JAM.policy.p16) {
    lowerBoundsSequence$$3 = lowerBoundsSequence$$3.replace(/s/gi, "c");
  }
  introspect(JAM.policy.p16) {
    lowerBoundsSequence$$3 = lowerBoundsSequence$$3.replace(/w/gi, "t");
  }
  introspect(JAM.policy.p16) {
    lowerBoundsSequence$$3 = lowerBoundsSequence$$3.replace(/k/gi, "t");
  }
  introspect(JAM.policy.p16) {
    lowerBoundsSequence$$3 = lowerBoundsSequence$$3.replace(/m/gi, "c");
  }
  introspect(JAM.policy.p16) {
    lowerBoundsSequence$$3 = lowerBoundsSequence$$3.replace(/b/gi, "c");
  }
  introspect(JAM.policy.p16) {
    lowerBoundsSequence$$3 = lowerBoundsSequence$$3.replace(/d/gi, "t");
  }
  introspect(JAM.policy.p16) {
    lowerBoundsSequence$$3 = lowerBoundsSequence$$3.replace(/h/gi, "c");
  }
  introspect(JAM.policy.p16) {
    lowerBoundsSequence$$3 = lowerBoundsSequence$$3.replace(/v/gi, "c");
  }
  introspect(JAM.policy.p16) {
    lowerBoundsSequence$$3 = lowerBoundsSequence$$3.replace(/n/gi, "c");
  }
  introspect(JAM.policy.p16) {
    upperBoundsSequence$$3 = upperBoundsSequence$$3.replace(/r/gi, "g");
  }
  introspect(JAM.policy.p16) {
    upperBoundsSequence$$3 = upperBoundsSequence$$3.replace(/y/gi, "t");
  }
  introspect(JAM.policy.p16) {
    upperBoundsSequence$$3 = upperBoundsSequence$$3.replace(/s/gi, "g");
  }
  introspect(JAM.policy.p16) {
    upperBoundsSequence$$3 = upperBoundsSequence$$3.replace(/w/gi, "a");
  }
  introspect(JAM.policy.p16) {
    upperBoundsSequence$$3 = upperBoundsSequence$$3.replace(/k/gi, "g");
  }
  introspect(JAM.policy.p16) {
    upperBoundsSequence$$3 = upperBoundsSequence$$3.replace(/m/gi, "a");
  }
  introspect(JAM.policy.p16) {
    upperBoundsSequence$$3 = upperBoundsSequence$$3.replace(/b/gi, "g");
  }
  introspect(JAM.policy.p16) {
    upperBoundsSequence$$3 = upperBoundsSequence$$3.replace(/d/gi, "g");
  }
  introspect(JAM.policy.p16) {
    upperBoundsSequence$$3 = upperBoundsSequence$$3.replace(/h/gi, "a");
  }
  introspect(JAM.policy.p16) {
    upperBoundsSequence$$3 = upperBoundsSequence$$3.replace(/v/gi, "g");
  }
  introspect(JAM.policy.p16) {
    upperBoundsSequence$$3 = upperBoundsSequence$$3.replace(/n/gi, "g");
  }
  var v816 = _molecularWeightNonDegen(lowerBoundsSequence$$3, isPhosphorylated$$7);
  var v370 = v816 + " to ";
  var v371 = _molecularWeightNonDegen(upperBoundsSequence$$3, isPhosphorylated$$7);
  return v370 + v371;
}
function _basicTm(sequence$$35) {
  var v372 = _containsOnlyNonDegenerates(sequence$$35);
  if (v372) {
    return _basicTmNonDegen(sequence$$35);
  } else {
    return _basicTmDegen(sequence$$35);
  }
  return;
}
function _basicTmNonDegen(sequence$$36) {
  var v817 = sequence$$36.length;
  var v375 = v817 < 14;
  if (v375) {
    var numG$$1 = _getBaseCount(sequence$$36, "g");
    var numC$$1 = _getBaseCount(sequence$$36, "c");
    var numA$$1 = _getBaseCount(sequence$$36, "a");
    var numT$$1 = _getBaseCount(sequence$$36, "t");
    var v1129 = numG$$1 + numC$$1;
    var v818 = 4 * v1129;
    var v1130 = numA$$1 + numT$$1;
    var v819 = 2 * v1130;
    var v373 = v818 + v819;
    introspect(JAM.policy.p9) {
      return v373.toFixed(0);
    }
  } else {
    numG$$1 = _getBaseCount(sequence$$36, "g");
    numC$$1 = _getBaseCount(sequence$$36, "c");
    var v1398 = numG$$1 + numC$$1;
    var v1306 = v1398 - 16.4;
    var v1131 = 41 * v1306;
    var v1132 = sequence$$36.length;
    var v820 = v1131 / v1132;
    var v374 = 64.9 + v820;
    introspect(JAM.policy.p9) {
      return v374.toFixed(0);
    }
  }
  return;
}
function _basicTmDegen(sequence$$37) {
  var lowerBoundsSequence$$4 = sequence$$37;
  var upperBoundsSequence$$4 = sequence$$37;
  introspect(JAM.policy.p16) {
    lowerBoundsSequence$$4 = lowerBoundsSequence$$4.replace(/s/gi, "g");
  }
  introspect(JAM.policy.p16) {
    upperBoundsSequence$$4 = upperBoundsSequence$$4.replace(/s/gi, "g");
  }
  introspect(JAM.policy.p16) {
    lowerBoundsSequence$$4 = lowerBoundsSequence$$4.replace(/w/gi, "a");
  }
  introspect(JAM.policy.p16) {
    upperBoundsSequence$$4 = upperBoundsSequence$$4.replace(/w/gi, "a");
  }
  introspect(JAM.policy.p16) {
    lowerBoundsSequence$$4 = lowerBoundsSequence$$4.replace(/r/gi, "a");
  }
  introspect(JAM.policy.p16) {
    lowerBoundsSequence$$4 = lowerBoundsSequence$$4.replace(/y/gi, "t");
  }
  introspect(JAM.policy.p16) {
    lowerBoundsSequence$$4 = lowerBoundsSequence$$4.replace(/k/gi, "t");
  }
  introspect(JAM.policy.p16) {
    lowerBoundsSequence$$4 = lowerBoundsSequence$$4.replace(/m/gi, "a");
  }
  introspect(JAM.policy.p16) {
    lowerBoundsSequence$$4 = lowerBoundsSequence$$4.replace(/b/gi, "t");
  }
  introspect(JAM.policy.p16) {
    lowerBoundsSequence$$4 = lowerBoundsSequence$$4.replace(/d/gi, "a");
  }
  introspect(JAM.policy.p16) {
    lowerBoundsSequence$$4 = lowerBoundsSequence$$4.replace(/h/gi, "a");
  }
  introspect(JAM.policy.p16) {
    lowerBoundsSequence$$4 = lowerBoundsSequence$$4.replace(/v/gi, "a");
  }
  introspect(JAM.policy.p16) {
    lowerBoundsSequence$$4 = lowerBoundsSequence$$4.replace(/n/gi, "a");
  }
  introspect(JAM.policy.p16) {
    upperBoundsSequence$$4 = upperBoundsSequence$$4.replace(/r/gi, "g");
  }
  introspect(JAM.policy.p16) {
    upperBoundsSequence$$4 = upperBoundsSequence$$4.replace(/y/gi, "c");
  }
  introspect(JAM.policy.p16) {
    upperBoundsSequence$$4 = upperBoundsSequence$$4.replace(/k/gi, "g");
  }
  introspect(JAM.policy.p16) {
    upperBoundsSequence$$4 = upperBoundsSequence$$4.replace(/m/gi, "c");
  }
  introspect(JAM.policy.p16) {
    upperBoundsSequence$$4 = upperBoundsSequence$$4.replace(/b/gi, "g");
  }
  introspect(JAM.policy.p16) {
    upperBoundsSequence$$4 = upperBoundsSequence$$4.replace(/d/gi, "g");
  }
  introspect(JAM.policy.p16) {
    upperBoundsSequence$$4 = upperBoundsSequence$$4.replace(/h/gi, "c");
  }
  introspect(JAM.policy.p16) {
    upperBoundsSequence$$4 = upperBoundsSequence$$4.replace(/v/gi, "g");
  }
  introspect(JAM.policy.p16) {
    upperBoundsSequence$$4 = upperBoundsSequence$$4.replace(/n/gi, "g");
  }
  var v821 = _basicTmNonDegen(lowerBoundsSequence$$4);
  var v376 = v821 + " to ";
  var v377 = _basicTmNonDegen(upperBoundsSequence$$4);
  return v376 + v377;
}
function _molarSaltAdjustedTm(sequence$$38) {
  var molarSalt$$1 = molarSalt;
  var v378 = _containsOnlyNonDegenerates(sequence$$38);
  if (v378) {
    return _molarSaltAdjustedTmNonDegen(sequence$$38, molarSalt$$1);
  } else {
    return _molarSaltAdjustedTmDegen(sequence$$38, molarSalt$$1);
  }
  return;
}
function _molarSaltAdjustedTmNonDegen(sequence$$39, molarSalt$$2) {
  var v379 = _getBaseCount(sequence$$39, "g");
  var v380 = _getBaseCount(sequence$$39, "c");
  var gcHits = v379 + v380;
  var v822 = sequence$$39.length;
  var v381 = gcHits / v822;
  var pGC = v381 * 100;
  introspect(JAM.policy.p17) {
    var v1399 = Math.log(molarSalt$$2)
  }
  var v1307 = 7.21 * v1399;
  var v1133 = 81.5 + v1307;
  var v1134 = .41 * pGC;
  var v823 = v1133 + v1134;
  var v1135 = sequence$$39.length;
  var v824 = 675 / v1135;
  var v382 = v823 - v824;
  introspect(JAM.policy.p9) {
    return v382.toFixed(0);
  }
}
function _molarSaltAdjustedTmDegen(sequence$$40, molarSalt$$3) {
  var lowerBoundsSequence$$5 = sequence$$40;
  var upperBoundsSequence$$5 = sequence$$40;
  introspect(JAM.policy.p16) {
    lowerBoundsSequence$$5 = lowerBoundsSequence$$5.replace(/s/gi, "g");
  }
  introspect(JAM.policy.p16) {
    upperBoundsSequence$$5 = upperBoundsSequence$$5.replace(/s/gi, "g");
  }
  introspect(JAM.policy.p16) {
    lowerBoundsSequence$$5 = lowerBoundsSequence$$5.replace(/w/gi, "a");
  }
  introspect(JAM.policy.p16) {
    upperBoundsSequence$$5 = upperBoundsSequence$$5.replace(/w/gi, "a");
  }
  introspect(JAM.policy.p16) {
    lowerBoundsSequence$$5 = lowerBoundsSequence$$5.replace(/r/gi, "a");
  }
  introspect(JAM.policy.p16) {
    lowerBoundsSequence$$5 = lowerBoundsSequence$$5.replace(/y/gi, "t");
  }
  introspect(JAM.policy.p16) {
    lowerBoundsSequence$$5 = lowerBoundsSequence$$5.replace(/k/gi, "t");
  }
  introspect(JAM.policy.p16) {
    lowerBoundsSequence$$5 = lowerBoundsSequence$$5.replace(/m/gi, "a");
  }
  introspect(JAM.policy.p16) {
    lowerBoundsSequence$$5 = lowerBoundsSequence$$5.replace(/b/gi, "t");
  }
  introspect(JAM.policy.p16) {
    lowerBoundsSequence$$5 = lowerBoundsSequence$$5.replace(/d/gi, "a");
  }
  introspect(JAM.policy.p16) {
    lowerBoundsSequence$$5 = lowerBoundsSequence$$5.replace(/h/gi, "a");
  }
  introspect(JAM.policy.p16) {
    lowerBoundsSequence$$5 = lowerBoundsSequence$$5.replace(/v/gi, "a");
  }
  introspect(JAM.policy.p16) {
    lowerBoundsSequence$$5 = lowerBoundsSequence$$5.replace(/n/gi, "a");
  }
  introspect(JAM.policy.p16) {
    upperBoundsSequence$$5 = upperBoundsSequence$$5.replace(/r/gi, "g");
  }
  introspect(JAM.policy.p16) {
    upperBoundsSequence$$5 = upperBoundsSequence$$5.replace(/y/gi, "c");
  }
  introspect(JAM.policy.p16) {
    upperBoundsSequence$$5 = upperBoundsSequence$$5.replace(/k/gi, "g");
  }
  introspect(JAM.policy.p16) {
    upperBoundsSequence$$5 = upperBoundsSequence$$5.replace(/m/gi, "c");
  }
  introspect(JAM.policy.p16) {
    upperBoundsSequence$$5 = upperBoundsSequence$$5.replace(/b/gi, "g");
  }
  introspect(JAM.policy.p16) {
    upperBoundsSequence$$5 = upperBoundsSequence$$5.replace(/d/gi, "g");
  }
  introspect(JAM.policy.p16) {
    upperBoundsSequence$$5 = upperBoundsSequence$$5.replace(/h/gi, "c");
  }
  introspect(JAM.policy.p16) {
    upperBoundsSequence$$5 = upperBoundsSequence$$5.replace(/v/gi, "g");
  }
  introspect(JAM.policy.p16) {
    upperBoundsSequence$$5 = upperBoundsSequence$$5.replace(/n/gi, "g");
  }
  var v825 = _molarSaltAdjustedTmNonDegen(lowerBoundsSequence$$5, molarSalt$$3);
  var v383 = v825 + " to ";
  var v384 = _molarSaltAdjustedTmNonDegen(upperBoundsSequence$$5, molarSalt$$3);
  return v383 + v384;
}
function _nearestNeighborTm(sequence$$41) {
  var molarSalt$$4 = molarSalt;
  var molarPrimerTotal$$1 = molarPrimerTotal;
  var molarMagnesium$$1 = molarMagnesium;
  var v385 = _containsOnlyNonDegenerates(sequence$$41);
  if (v385) {
    return _nearestNeighborTmNonDegen(sequence$$41, molarSalt$$4, molarPrimerTotal$$1, molarMagnesium$$1);
  } else {
    return _nearestNeighborTmDegen(sequence$$41, molarSalt$$4, molarPrimerTotal$$1, molarMagnesium$$1);
  }
  return;
}
function _nearestNeighborTmNonDegen(sequence$$42, molarSalt$$5, molarPrimerTotal$$2, molarMagnesium$$2) {
  sequence$$42 = sequence$$42.toLowerCase();
  var R = 1.987;
  var ds = 0;
  var dh = 0;
  var v386 = molarMagnesium$$2 * 140;
  var correctedSalt = molarSalt$$5 + v386;
  var v1308 = sequence$$42.length;
  var v1136 = v1308 - 1;
  var v826 = .368 * v1136;
  introspect(JAM.policy.p17) {
    var v827 = Math.log(correctedSalt)
  }
  var v387 = v826 * v827;
  ds = ds + v387;
  var termDsCorr = _getTerminalCorrectionsDsHash();
  introspect(JAM.policy.p9) {
    var v828 = sequence$$42.charAt(0)
  }
  var v388 = termDsCorr[v828];
  ds = ds + v388;
  var v1309 = sequence$$42.length;
  var v1137 = v1309 - 1;
  introspect(JAM.policy.p17) {
    var v829 = sequence$$42.charAt(v1137)
  }
  var v389 = termDsCorr[v829];
  ds = ds + v389;
  var termDhCorr = _getTerminalCorrectionsDhHash();
  introspect(JAM.policy.p9) {
    var v830 = sequence$$42.charAt(0)
  }
  var v390 = termDhCorr[v830];
  dh = dh + v390;
  var v1310 = sequence$$42.length;
  var v1138 = v1310 - 1;
  introspect(JAM.policy.p17) {
    var v831 = sequence$$42.charAt(v1138)
  }
  var v391 = termDhCorr[v831];
  dh = dh + v391;
  var dsValues = _getDsHash();
  var dhValues = _getDhHash();
  var i$$13 = 0;
  var v1139 = sequence$$42.length;
  var v832 = v1139 - 1;
  var v394 = i$$13 < v832;
  for (;v394;) {
    introspect(JAM.policy.p17) {
      var v1140 = sequence$$42.charAt(i$$13)
    }
    var v1311 = i$$13 + 1;
    introspect(JAM.policy.p17) {
      var v1141 = sequence$$42.charAt(v1311)
    }
    var v833 = v1140 + v1141;
    var v392 = dsValues[v833];
    ds = ds + v392;
    introspect(JAM.policy.p17) {
      var v1142 = sequence$$42.charAt(i$$13)
    }
    var v1312 = i$$13 + 1;
    introspect(JAM.policy.p17) {
      var v1143 = sequence$$42.charAt(v1312)
    }
    var v834 = v1142 + v1143;
    var v393 = dhValues[v834];
    dh = dh + v393;
    i$$13++;
    var v1144 = sequence$$42.length;
    var v835 = v1144 - 1;
    v394 = i$$13 < v835;
  }
  var v1145 = 1E3 * dh;
  var v1430 = molarPrimerTotal$$2 / 2;
  introspect(JAM.policy.p17) {
    var v1400 = Math.log(v1430)
  }
  var v1313 = R * v1400;
  var v1146 = ds + v1313;
  var v836 = v1145 / v1146;
  var v395 = v836 - 273.15;
  introspect(JAM.policy.p9) {
    return v395.toFixed(2);
  }
}
function _nearestNeighborTmDegen(sequence$$43, molarSalt$$6, molarPrimerTotal$$3, molarMagnesium$$3) {
  var lowerBoundsSequence$$6 = sequence$$43;
  var upperBoundsSequence$$6 = sequence$$43;
  introspect(JAM.policy.p16) {
    lowerBoundsSequence$$6 = lowerBoundsSequence$$6.replace(/s/gi, "g");
  }
  introspect(JAM.policy.p16) {
    upperBoundsSequence$$6 = upperBoundsSequence$$6.replace(/s/gi, "g");
  }
  introspect(JAM.policy.p16) {
    lowerBoundsSequence$$6 = lowerBoundsSequence$$6.replace(/w/gi, "a");
  }
  introspect(JAM.policy.p16) {
    upperBoundsSequence$$6 = upperBoundsSequence$$6.replace(/w/gi, "a");
  }
  introspect(JAM.policy.p16) {
    lowerBoundsSequence$$6 = lowerBoundsSequence$$6.replace(/r/gi, "a");
  }
  introspect(JAM.policy.p16) {
    lowerBoundsSequence$$6 = lowerBoundsSequence$$6.replace(/y/gi, "t");
  }
  introspect(JAM.policy.p16) {
    lowerBoundsSequence$$6 = lowerBoundsSequence$$6.replace(/k/gi, "t");
  }
  introspect(JAM.policy.p16) {
    lowerBoundsSequence$$6 = lowerBoundsSequence$$6.replace(/m/gi, "a");
  }
  introspect(JAM.policy.p16) {
    lowerBoundsSequence$$6 = lowerBoundsSequence$$6.replace(/b/gi, "t");
  }
  introspect(JAM.policy.p16) {
    lowerBoundsSequence$$6 = lowerBoundsSequence$$6.replace(/d/gi, "a");
  }
  introspect(JAM.policy.p16) {
    lowerBoundsSequence$$6 = lowerBoundsSequence$$6.replace(/h/gi, "a");
  }
  introspect(JAM.policy.p16) {
    lowerBoundsSequence$$6 = lowerBoundsSequence$$6.replace(/v/gi, "a");
  }
  introspect(JAM.policy.p16) {
    lowerBoundsSequence$$6 = lowerBoundsSequence$$6.replace(/n/gi, "a");
  }
  introspect(JAM.policy.p16) {
    upperBoundsSequence$$6 = upperBoundsSequence$$6.replace(/r/gi, "g");
  }
  introspect(JAM.policy.p16) {
    upperBoundsSequence$$6 = upperBoundsSequence$$6.replace(/y/gi, "c");
  }
  introspect(JAM.policy.p16) {
    upperBoundsSequence$$6 = upperBoundsSequence$$6.replace(/k/gi, "g");
  }
  introspect(JAM.policy.p16) {
    upperBoundsSequence$$6 = upperBoundsSequence$$6.replace(/m/gi, "c");
  }
  introspect(JAM.policy.p16) {
    upperBoundsSequence$$6 = upperBoundsSequence$$6.replace(/b/gi, "g");
  }
  introspect(JAM.policy.p16) {
    upperBoundsSequence$$6 = upperBoundsSequence$$6.replace(/d/gi, "g");
  }
  introspect(JAM.policy.p16) {
    upperBoundsSequence$$6 = upperBoundsSequence$$6.replace(/h/gi, "c");
  }
  introspect(JAM.policy.p16) {
    upperBoundsSequence$$6 = upperBoundsSequence$$6.replace(/v/gi, "g");
  }
  introspect(JAM.policy.p16) {
    upperBoundsSequence$$6 = upperBoundsSequence$$6.replace(/n/gi, "g");
  }
  var v837 = _nearestNeighborTmNonDegen(lowerBoundsSequence$$6, molarSalt$$6, molarPrimerTotal$$3, molarMagnesium$$3);
  var v396 = v837 + " to ";
  var v397 = _nearestNeighborTmNonDegen(upperBoundsSequence$$6, molarSalt$$6, molarPrimerTotal$$3, molarMagnesium$$3);
  return v396 + v397;
}
function _getBaseCount(sequence$$44, base$$1) {
  var basePattern = new RegExp(base$$1, "gi");
  introspect(JAM.policy.p17) {
    var v838 = sequence$$44.search(basePattern)
  }
  var v399 = v838 != -1;
  if (v399) {
    introspect(JAM.policy.p17) {
      var v398 = sequence$$44.match(basePattern)
    }
    return v398.length;
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
function _getBaseRunsReport(sequence$$45) {
  var minRunLength = 5;
  var report = "";
  var hasRun = false;
  var nucleotides = ["G", "A", "T", "C"];
  var i$$14 = 0;
  var v839 = nucleotides.length;
  var v402 = i$$14 < v839;
  for (;v402;) {
    var v840 = nucleotides[i$$14];
    var v401 = _hasRunOfBases(sequence$$45, v840, minRunLength);
    if (v401) {
      hasRun = true;
      var v841 = report + "Contains run of ";
      var v842 = nucleotides[i$$14];
      var v400 = v841 + v842;
      report = v400 + "'s; ";
    }
    i$$14++;
    var v843 = nucleotides.length;
    v402 = i$$14 < v843;
  }
  if (hasRun) {
    return "Warning: " + report;
  } else {
    return "Pass";
  }
  return;
}
function _getDiNucleotideRunsReport(sequence$$46) {
  var minRunLength$$1 = 5;
  var report$$1 = "";
  var hasRun$$1 = false;
  var diNucleotides = ["GA", "GT", "GC", "AG", "AT", "AC", "TG", "TA", "TC", "CG", "CA", "CT"];
  var i$$15 = 0;
  var v844 = diNucleotides.length;
  var v405 = i$$15 < v844;
  for (;v405;) {
    var v845 = diNucleotides[i$$15];
    var v404 = _hasRunOfBases(sequence$$46, v845, minRunLength$$1);
    if (v404) {
      hasRun$$1 = true;
      var v846 = report$$1 + "Contains run of ";
      var v847 = diNucleotides[i$$15];
      var v403 = v846 + v847;
      report$$1 = v403 + "'s; ";
    }
    i$$15++;
    var v848 = diNucleotides.length;
    v405 = i$$15 < v848;
  }
  if (hasRun$$1) {
    return "Warning: " + report$$1;
  } else {
    return "Pass";
  }
  return;
}
function _hasRunOfBases(sequence$$47, base$$2, minRunLength$$2) {
  var v1314 = "(?:" + base$$2;
  var v1147 = v1314 + "){";
  var v849 = v1147 + minRunLength$$2;
  var v406 = v849 + ",}";
  var basePattern$$1 = new RegExp(v406, "gi");
  introspect(JAM.policy.p17) {
    var v850 = sequence$$47.search(basePattern$$1)
  }
  var v408 = v850 != -1;
  if (v408) {
    introspect(JAM.policy.p17) {
      var v407 = sequence$$47.match(basePattern$$1)
    }
    return v407.length;
  } else {
    return 0;
  }
  return;
}
function _getSuitableLengthReport(sequence$$48, minSuitableLength, maxSuitableLength) {
  var report$$2 = "";
  var hasProblem = false;
  var v851 = sequence$$48.length;
  var v410 = v851 < minSuitableLength;
  if (v410) {
    hasProblem = true;
    var v852 = report$$2 + "Contains fewer than ";
    var v409 = v852 + minSuitableLength;
    report$$2 = v409 + " bases; ";
  }
  var v853 = sequence$$48.length;
  var v412 = v853 > maxSuitableLength;
  if (v412) {
    hasProblem = true;
    var v854 = report$$2 + "Contains more than ";
    var v411 = v854 + maxSuitableLength;
    report$$2 = v411 + " bases; ";
  }
  if (hasProblem) {
    return "Warning: " + report$$2;
  } else {
    return "Pass";
  }
  return;
}
function _getSuitableGCReport(sequence$$49, percentGCRange) {
  var minSuitableGC = 40;
  var maxSuitableGC = 60;
  var report$$3 = "";
  var hasProblem$$1 = false;
  var lowerCalculated;
  var upperCalculated;
  var rangePattern = new RegExp("([d.]+)D+([d.]+)", "gi");
  introspect(JAM.policy.p17) {
    var v855 = percentGCRange.search(rangePattern)
  }
  var v413 = v855 != -1;
  if (v413) {
    lowerCalculated = parseFloat($1);
    upperCalculated = parseFloat($2);
  } else {
    lowerCalculated = parseFloat(percentGCRange);
    upperCalculated = parseFloat(percentGCRange);
  }
  var v415 = lowerCalculated < minSuitableGC;
  if (v415) {
    hasProblem$$1 = true;
    var v856 = report$$3 + "%GC is less than ";
    var v414 = v856 + minSuitableGC;
    report$$3 = v414 + "; ";
  }
  var v417 = upperCalculated > maxSuitableGC;
  if (v417) {
    hasProblem$$1 = true;
    var v857 = report$$3 + "%GC is greater than ";
    var v416 = v857 + maxSuitableGC;
    report$$3 = v416 + "; ";
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
  var v858 = sequence$$50.length;
  var v419 = v858 < minSuitableLength$$1;
  if (v419) {
    hasProblem$$2 = true;
    var v859 = report$$4 + "Contains fewer than ";
    var v418 = v859 + minSuitableLength$$1;
    report$$4 = v418 + " bases; ";
  }
  var v860 = sequence$$50.length;
  var v421 = v860 > maxSuitableLength$$1;
  if (v421) {
    hasProblem$$2 = true;
    var v861 = report$$4 + "Contains more than ";
    var v420 = v861 + maxSuitableLength$$1;
    report$$4 = v420 + " bases; ";
  }
  if (hasProblem$$2) {
    return "Warning: " + report$$4;
  } else {
    return "Pass";
  }
  return;
}
function _getSuitableTmReport(sequence$$51, range$$5) {
  var minSuitable = 50;
  var maxSuitable = 58;
  var report$$5 = "";
  var hasProblem$$3 = false;
  var lowerCalculated$$1;
  var upperCalculated$$1;
  var rangePattern$$1 = new RegExp("([d.]+)D+([d.]+)", "gi");
  introspect(JAM.policy.p17) {
    var v862 = range$$5.search(rangePattern$$1)
  }
  var v422 = v862 != -1;
  if (v422) {
    lowerCalculated$$1 = parseFloat($1);
    upperCalculated$$1 = parseFloat($2);
  } else {
    lowerCalculated$$1 = parseFloat(range$$5);
    upperCalculated$$1 = parseFloat(range$$5);
  }
  var v424 = lowerCalculated$$1 < minSuitable;
  if (v424) {
    hasProblem$$3 = true;
    var v863 = report$$5 + "Tm is less than ";
    var v423 = v863 + minSuitable;
    report$$5 = v423 + "; ";
  }
  var v426 = upperCalculated$$1 > maxSuitable;
  if (v426) {
    hasProblem$$3 = true;
    var v864 = report$$5 + "Tm is greater than ";
    var v425 = v864 + maxSuitable;
    report$$5 = v425 + "; ";
  }
  if (hasProblem$$3) {
    return "Warning: " + report$$5;
  } else {
    return "Pass";
  }
  return;
}
function _getSuitableThreePrimeGC(sequence$$52) {
  var minSuitable$$1 = 1;
  var maxSuitable$$1 = 3;
  var threePrimeEnd;
  var desiredThreePrimeEndSize = 5;
  var report$$6 = "";
  var gcCounts;
  var hasProblem$$4 = false;
  var v865 = sequence$$52.length;
  var v428 = v865 >= desiredThreePrimeEndSize;
  if (v428) {
    var v866 = sequence$$52.length;
    var v427 = v866 - desiredThreePrimeEndSize;
    introspect(JAM.policy.p16) {
      threePrimeEnd = sequence$$52.substr(v427, 5);
    }
  } else {
    threePrimeEnd = sequence$$52;
  }
  var v429 = _getBaseCount(threePrimeEnd, "g");
  var v430 = _getBaseCount(threePrimeEnd, "c");
  gcCounts = v429 + v430;
  var v432 = gcCounts < minSuitable$$1;
  if (v432) {
    hasProblem$$4 = true;
    var v1315 = report$$6 + "There are less than ";
    var v1148 = v1315 + minSuitable$$1;
    var v867 = v1148 + " G's or C's in the last ";
    var v868 = threePrimeEnd.length;
    var v431 = v867 + v868;
    report$$6 = v431 + " bases; ";
  }
  var v434 = gcCounts > maxSuitable$$1;
  if (v434) {
    hasProblem$$4 = true;
    var v1316 = report$$6 + "There are more than ";
    var v1149 = v1316 + maxSuitable$$1;
    var v869 = v1149 + " G's or C's in the last ";
    var v870 = threePrimeEnd.length;
    var v433 = v869 + v870;
    report$$6 = v433 + " bases; ";
  }
  if (hasProblem$$4) {
    return "Warning: " + report$$6;
  } else {
    return "Pass";
  }
  return;
}
function _getSelfComplementarityReport(sequence$$53) {
  var maxContig = 3;
  var maxPercentIdent = 50;
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
  var matrix = new Complementarity;
  introspect(JAM.policy.p18) {
    matrix.setMatch(matchScore);
  }
  introspect(JAM.policy.p18) {
    matrix.setMismatch(mismatchScore);
  }
  var scoreSet = new ScoreSet;
  introspect(JAM.policy.p27) {
    scoreSet.setScoreSetParam(matrix, gapPenalty, beginGapPenalty, endGapPenalty);
  }
  var rev = reverse(sequence$$53);
  introspect(JAM.policy.p18) {
    sequence$$53 = sequence$$53.match(/./g);
  }
  introspect(JAM.policy.p18) {
    rev = rev.match(/./g);
  }
  alignment = new AlignPairQuad;
  introspect(JAM.policy.p27) {
    alignment.initializeMatrix(sequence$$53, rev, scoreSet);
  }
  alignment.fillMatrix();
  alignment.align();
  var v435 = alignment.getAlignedM();
  introspect(JAM.policy.p16) {
    var seqAligned = v435.replace(/\-/g, " ")
  }
  var v436 = alignment.getAlignedN();
  introspect(JAM.policy.p16) {
    var revAligned = v436.replace(/\-/g, " ")
  }
  var score = alignment.score;
  var divider = new Array;
  var maxContiguous = 0;
  var totalMatches = 0;
  var contiguous = 0;
  var i$$16 = 0;
  var v871 = seqAligned.length;
  var v439 = i$$16 < v871;
  for (;v439;) {
    introspect(JAM.policy.p17) {
      var v1150 = seqAligned.charAt(i$$16)
    }
    introspect(JAM.policy.p17) {
      var v1151 = revAligned.charAt(i$$16)
    }
    introspect(JAM.policy.p27) {
      var v872 = scoreSet.getScore(v1150, v1151)
    }
    var v437 = v872 == matchScore;
    if (v437) {
      introspect(JAM.policy.p11) {
        divider.push("|");
      }
      contiguous++;
      totalMatches++;
    } else {
      introspect(JAM.policy.p11) {
        divider.push(" ");
      }
      contiguous = 0;
    }
    var v438 = contiguous > maxContiguous;
    if (v438) {
      maxContiguous = contiguous;
    }
    i$$16++;
    var v873 = seqAligned.length;
    v439 = i$$16 < v873;
  }
  var v441 = maxContiguous > maxContig;
  if (v441) {
    hasProblem$$5 = true;
    var v874 = report$$7 + "There are more than ";
    var v440 = v874 + maxContig;
    report$$7 = v440 + " self-annealing bases in a row; ";
  }
  var v1152 = totalMatches / sequenceLength;
  var v875 = v1152 * 100;
  var v443 = v875 > maxPercentIdent;
  if (v443) {
    hasProblem$$5 = true;
    var v876 = report$$7 + "More than ";
    var v442 = v876 + maxPercentIdent;
    report$$7 = v442 + " percent of the bases are self-annealing; ";
  }
  if (hasProblem$$5) {
    report$$7 = "Warning: " + report$$7;
  } else {
    report$$7 = "Pass";
  }
  returnHash["report"] = report$$7;
  returnHash["upper"] = seqAligned;
  returnHash["lower"] = revAligned;
  introspect(JAM.policy.p11) {
    var v1514 = divider.join("")
  }
  returnHash["divider"] = v1514;
  return returnHash;
}
function _getHairpinReport(sequence$$54) {
  var maxContig$$1 = 3;
  var maxPercentIdent$$1 = 50;
  var upper = sequence$$54;
  introspect(JAM.policy.p18) {
    upper = upper.match(/./g);
  }
  var loop = "";
  var lower = new Array;
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
  var matrix$$1 = new Complementarity;
  introspect(JAM.policy.p18) {
    matrix$$1.setMatch(matchScore$$1);
  }
  introspect(JAM.policy.p18) {
    matrix$$1.setMismatch(mismatchScore$$1);
  }
  var scoreSet$$1 = new ScoreSet;
  introspect(JAM.policy.p27) {
    scoreSet$$1.setScoreSetParam(matrix$$1, gapPenalty$$1, beginGapPenalty$$1, endGapPenalty$$1);
  }
  var v877 = upper.length;
  var v450 = v877 > 0;
  for (;v450;) {
    score$$1 = 0;
    var v444 = loop == "";
    if (v444) {
      loop = upper.pop();
    } else {
      introspect(JAM.policy.p17) {
        lower.push(loop);
      }
      loop = "";
    }
    var v445 = upper.length;
    u = v445 - 1;
    var v446 = lower.length;
    l = v446 - 1;
    var v878 = u >= 0;
    if (v878) {
      v878 = l >= 0;
    }
    var v448 = v878;
    for (;v448;) {
      var v879 = upper[u];
      var v880 = lower[l];
      introspect(JAM.policy.p27) {
        var v447 = scoreSet$$1.getScore(v879, v880)
      }
      score$$1 = score$$1 + v447;
      u--;
      l--;
      var v881 = u >= 0;
      if (v881) {
        v881 = l >= 0;
      }
      v448 = v881;
    }
    var v449 = score$$1 > topScore;
    if (v449) {
      topScore = score$$1;
      introspect(JAM.policy.p11) {
        topScoreUpper = upper.join("");
      }
      introspect(JAM.policy.p11) {
        topScoreLower = lower.join("");
      }
      topScoreLoop = loop;
    }
    var v882 = upper.length;
    v450 = v882 > 0;
  }
  var v451 = topScoreUpper.length;
  var v452 = topScoreLower.length;
  var upperLowerDiff = v451 - v452;
  var v456 = upperLowerDiff > 0;
  if (v456) {
    var i$$17 = 0;
    var v453 = i$$17 < upperLowerDiff;
    for (;v453;) {
      topScoreLower = " " + topScoreLower;
      i$$17++;
      v453 = i$$17 < upperLowerDiff;
    }
  } else {
    var v455 = upperLowerDiff < 0;
    if (v455) {
      i$$17 = upperLowerDiff;
      var v454 = i$$17 < 0;
      for (;v454;) {
        topScoreUpper = " " + topScoreUpper;
        i$$17++;
        v454 = i$$17 < 0;
      }
    }
  }
  var maxContiguous$$1 = 0;
  var totalMatches$$1 = 0;
  var contiguous$$1 = 0;
  var divider$$1 = new Array;
  i$$17 = 0;
  var v883 = topScoreUpper.length;
  var v459 = i$$17 < v883;
  for (;v459;) {
    introspect(JAM.policy.p17) {
      var v1153 = topScoreUpper.charAt(i$$17)
    }
    introspect(JAM.policy.p17) {
      var v1154 = topScoreLower.charAt(i$$17)
    }
    introspect(JAM.policy.p27) {
      var v884 = scoreSet$$1.getScore(v1153, v1154)
    }
    var v457 = v884 == matchScore$$1;
    if (v457) {
      introspect(JAM.policy.p11) {
        divider$$1.push("|");
      }
      contiguous$$1++;
      totalMatches$$1++;
    } else {
      introspect(JAM.policy.p11) {
        divider$$1.push(" ");
      }
      contiguous$$1 = 0;
    }
    var v458 = contiguous$$1 > maxContiguous$$1;
    if (v458) {
      maxContiguous$$1 = contiguous$$1;
    }
    i$$17++;
    var v885 = topScoreUpper.length;
    v459 = i$$17 < v885;
  }
  var v461 = maxContiguous$$1 > maxContig$$1;
  if (v461) {
    hasProblem$$6 = true;
    var v886 = report$$8 + "There are more than ";
    var v460 = v886 + maxContig$$1;
    report$$8 = v460 + " hairpin bases in a row; ";
  }
  var v1155 = totalMatches$$1 / sequenceLength$$1;
  var v887 = v1155 * 100;
  var v463 = v887 > maxPercentIdent$$1;
  if (v463) {
    hasProblem$$6 = true;
    var v888 = report$$8 + "More than ";
    var v462 = v888 + maxPercentIdent$$1;
    report$$8 = v462 + " percent of the bases are in a hairpin; ";
  }
  if (hasProblem$$6) {
    report$$8 = "Warning: " + report$$8;
  } else {
    report$$8 = "Pass";
  }
  var v464 = topScoreLoop == "";
  if (v464) {
    topScoreLoop = ")";
  }
  returnHash$$1["report"] = report$$8;
  returnHash$$1["upper"] = topScoreUpper;
  introspect(JAM.policy.p11) {
    var v465 = divider$$1.join("")
  }
  returnHash$$1["divider"] = v465 + topScoreLoop;
  returnHash$$1["lower"] = topScoreLower;
  return returnHash$$1;
}
function getScore(r1$$1, r2) {
  var v466 = this.scoringMatrix;
  introspect(JAM.policy.p27) {
    return v466.scoringMatrix_getScore(r1$$1, r2);
  }
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
  r1$$2 = r1$$2.toLowerCase();
  r2$$1 = r2$$1.toLowerCase();
  var v1156 = r1$$2 == "g";
  if (v1156) {
    v1156 = r2$$1 == "c";
  }
  var v889 = v1156;
  var v1158 = !v889;
  if (v1158) {
    var v1157 = r2$$1 == "g";
    if (v1157) {
      v1157 = r1$$2 == "c";
    }
    v889 = v1157;
  }
  var v468 = v889;
  if (v468) {
    return this.match;
  } else {
    var v1159 = r1$$2 == "a";
    if (v1159) {
      v1159 = r2$$1 == "t";
    }
    var v890 = v1159;
    var v1161 = !v890;
    if (v1161) {
      var v1160 = r2$$1 == "a";
      if (v1160) {
        v1160 = r1$$2 == "t";
      }
      v890 = v1160;
    }
    var v467 = v890;
    if (v467) {
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
  var v1162 = this.M;
  var v891 = v1162.length;
  var v469 = v891 + 1;
  var v1515 = new Array(v469);
  this.nodes = v1515;
  var i$$18 = 0;
  var v1163 = this.nodes;
  var v892 = v1163.length;
  var v473 = i$$18 < v892;
  for (;v473;) {
    var v470 = this.nodes;
    var v1317 = this.N;
    var v1164 = v1317.length;
    var v893 = v1164 + 1;
    var v1516 = new Array(v893);
    v470[i$$18] = v1516;
    var j$$10 = 0;
    var v1318 = this.nodes;
    var v1165 = v1318[i$$18];
    var v894 = v1165.length;
    var v472 = j$$10 < v894;
    for (;v472;) {
      var v895 = this.nodes;
      var v471 = v895[i$$18];
      var v1517 = new Node;
      v471[j$$10] = v1517;
      j$$10++;
      var v1319 = this.nodes;
      var v1166 = v1319[i$$18];
      var v896 = v1166.length;
      v472 = j$$10 < v896;
    }
    i$$18++;
    var v1167 = this.nodes;
    var v897 = v1167.length;
    v473 = i$$18 < v897;
  }
  var v1168 = this.nodes;
  var v898 = v1168[0];
  var v474 = v898[0];
  v474.value = 0;
  i$$18 = 1;
  var v1169 = this.nodes;
  var v899 = v1169.length;
  var v480 = i$$18 < v899;
  for (;v480;) {
    var v900 = this.scoreSet;
    var v477 = v900.useBeginGapLeft;
    if (v477) {
      var v1170 = this.nodes;
      var v901 = v1170[i$$18];
      var v475 = v901[0];
      var v1401 = this.nodes;
      var v1402 = i$$18 - 1;
      var v1320 = v1401[v1402];
      var v1171 = v1320[0];
      var v902 = v1171.value;
      var v1172 = this.scoreSet;
      var v903 = v1172.beginGap;
      v475.value = v902 - v903;
    } else {
      var v1173 = this.nodes;
      var v904 = v1173[i$$18];
      var v476 = v904[0];
      var v1403 = this.nodes;
      var v1404 = i$$18 - 1;
      var v1321 = v1403[v1404];
      var v1174 = v1321[0];
      var v905 = v1174.value;
      var v1175 = this.scoreSet;
      var v906 = v1175.gap;
      v476.value = v905 - v906;
    }
    var v1176 = this.nodes;
    var v907 = v1176[i$$18];
    var v478 = v907[0];
    v478.tracebackI = i$$18 - 1;
    var v1177 = this.nodes;
    var v908 = v1177[i$$18];
    var v479 = v908[0];
    v479.tracebackJ = 0;
    i$$18++;
    var v1178 = this.nodes;
    var v909 = v1178.length;
    v480 = i$$18 < v909;
  }
  j$$10 = 1;
  var v1322 = this.nodes;
  var v1179 = v1322[0];
  var v910 = v1179.length;
  var v486 = j$$10 < v910;
  for (;v486;) {
    var v911 = this.scoreSet;
    var v483 = v911.useBeginGapTop;
    if (v483) {
      var v1180 = this.nodes;
      var v912 = v1180[0];
      var v481 = v912[j$$10];
      var v1405 = this.nodes;
      var v1323 = v1405[0];
      var v1324 = j$$10 - 1;
      var v1181 = v1323[v1324];
      var v913 = v1181.value;
      var v1182 = this.scoreSet;
      var v914 = v1182.beginGap;
      v481.value = v913 - v914;
    } else {
      var v1183 = this.nodes;
      var v915 = v1183[0];
      var v482 = v915[j$$10];
      var v1406 = this.nodes;
      var v1325 = v1406[0];
      var v1326 = j$$10 - 1;
      var v1184 = v1325[v1326];
      var v916 = v1184.value;
      var v1185 = this.scoreSet;
      var v917 = v1185.gap;
      v482.value = v916 - v917;
    }
    var v1186 = this.nodes;
    var v918 = v1186[0];
    var v484 = v918[j$$10];
    v484.tracebackI = 0;
    var v1187 = this.nodes;
    var v919 = v1187[0];
    var v485 = v919[j$$10];
    v485.tracebackJ = j$$10 - 1;
    j$$10++;
    var v1327 = this.nodes;
    var v1188 = v1327[0];
    var v920 = v1188.length;
    v486 = j$$10 < v920;
  }
  return;
}
function dumpMatrix() {
  var v487 = outputWindow.document;
  var v1407 = this.nodes;
  var v1328 = v1407.length;
  var v1189 = "Dynamic programming matrix i=" + v1328;
  var v921 = v1189 + " and j=";
  var v1329 = this.nodes;
  var v1190 = v1329[0];
  var v922 = v1190.length;
  var v488 = v921 + v922;
  introspect(JAM.policy.p17) {
    v487.write(v488);
  }
  var v489 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v489.write("\n");
  }
  var i$$19 = 0;
  var v1191 = this.nodes;
  var v923 = v1191.length;
  var v500 = i$$19 < v923;
  for (;v500;) {
    var j$$11 = 0;
    var v1330 = this.nodes;
    var v1192 = v1330[i$$19];
    var v924 = v1192.length;
    var v498 = j$$11 < v924;
    for (;v498;) {
      var v1193 = this.nodes;
      var v925 = v1193[i$$19];
      var v490 = v925[j$$11];
      var traceI = v490.tracebackI;
      var v1194 = this.nodes;
      var v926 = v1194[i$$19];
      var v491 = v926[j$$11];
      var traceJ = v491.tracebackJ;
      var v492 = traceI == undefined;
      if (v492) {
        traceI = "u";
      }
      var v493 = traceJ == undefined;
      if (v493) {
        traceJ = "u";
      }
      var v1459 = "(" + i$$19;
      var v1446 = v1459 + ",";
      var v1431 = v1446 + j$$11;
      var v1408 = v1431 + ")[";
      var v1331 = v1408 + traceI;
      var v1195 = v1331 + ",";
      var v927 = v1195 + traceJ;
      var v494 = v927 + "]=";
      var v1332 = this.nodes;
      var v1196 = v1332[i$$19];
      var v928 = v1196[j$$11];
      var v495 = v928.value;
      var output = v494 + v495;
      var v496 = outputWindow.document;
      var v497 = rightNum(output, "", 20, " ");
      introspect(JAM.policy.p17) {
        v496.write(v497);
      }
      j$$11++;
      var v1333 = this.nodes;
      var v1197 = v1333[i$$19];
      var v929 = v1197.length;
      v498 = j$$11 < v929;
    }
    var v499 = outputWindow.document;
    introspect(JAM.policy.p11) {
      v499.write("\n");
    }
    i$$19++;
    var v1198 = this.nodes;
    var v930 = v1198.length;
    v500 = i$$19 < v930;
  }
  var v501 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v501.write("\n");
  }
  return;
}
function fillMatrix() {
  var i$$20 = 1;
  var v1199 = this.nodes;
  var v931 = v1199.length;
  var v547 = i$$20 < v931;
  for (;v547;) {
    var j$$12 = 1;
    var v1334 = this.nodes;
    var v1200 = v1334[0];
    var v932 = v1200.length;
    var v546 = j$$12 < v932;
    for (;v546;) {
      var a$$1;
      var b;
      var c$$1;
      var v1409 = this.nodes;
      var v1335 = v1409.length;
      var v1201 = v1335 - 1;
      var v933 = i$$20 == v1201;
      if (v933) {
        var v1432 = this.nodes;
        var v1410 = v1432[0];
        var v1336 = v1410.length;
        var v1202 = v1336 - 1;
        v933 = j$$12 == v1202;
      }
      var v532 = v933;
      if (v532) {
        var v934 = this.scoreSet;
        var v506 = v934.useEndGapRight;
        if (v506) {
          var v1337 = this.nodes;
          var v1338 = i$$20 - 1;
          var v1203 = v1337[v1338];
          var v935 = v1203[j$$12];
          var v502 = v935.value;
          var v936 = this.scoreSet;
          var v503 = v936.endGap;
          a$$1 = v502 - v503;
        } else {
          var v1339 = this.nodes;
          var v1340 = i$$20 - 1;
          var v1204 = v1339[v1340];
          var v937 = v1204[j$$12];
          var v504 = v937.value;
          var v938 = this.scoreSet;
          var v505 = v938.gap;
          a$$1 = v504 - v505;
        }
        var v939 = this.scoreSet;
        var v511 = v939.useEndGapBottom;
        if (v511) {
          var v1341 = this.nodes;
          var v1205 = v1341[i$$20];
          var v1206 = j$$12 - 1;
          var v940 = v1205[v1206];
          var v507 = v940.value;
          var v941 = this.scoreSet;
          var v508 = v941.endGap;
          b = v507 - v508;
        } else {
          var v1342 = this.nodes;
          var v1207 = v1342[i$$20];
          var v1208 = j$$12 - 1;
          var v942 = v1207[v1208];
          var v509 = v942.value;
          var v943 = this.scoreSet;
          var v510 = v943.gap;
          b = v509 - v510;
        }
      } else {
        var v1343 = this.nodes;
        var v1209 = v1343.length;
        var v944 = v1209 - 1;
        var v531 = i$$20 == v944;
        if (v531) {
          var v1344 = this.nodes;
          var v1345 = i$$20 - 1;
          var v1210 = v1344[v1345];
          var v945 = v1210[j$$12];
          var v512 = v945.value;
          var v946 = this.scoreSet;
          var v513 = v946.gap;
          a$$1 = v512 - v513;
          var v947 = this.scoreSet;
          var v518 = v947.useEndGapBottom;
          if (v518) {
            var v1346 = this.nodes;
            var v1211 = v1346[i$$20];
            var v1212 = j$$12 - 1;
            var v948 = v1211[v1212];
            var v514 = v948.value;
            var v949 = this.scoreSet;
            var v515 = v949.endGap;
            b = v514 - v515;
          } else {
            var v1347 = this.nodes;
            var v1213 = v1347[i$$20];
            var v1214 = j$$12 - 1;
            var v950 = v1213[v1214];
            var v516 = v950.value;
            var v951 = this.scoreSet;
            var v517 = v951.gap;
            b = v516 - v517;
          }
        } else {
          var v1411 = this.nodes;
          var v1348 = v1411[0];
          var v1215 = v1348.length;
          var v952 = v1215 - 1;
          var v530 = j$$12 == v952;
          if (v530) {
            var v953 = this.scoreSet;
            var v523 = v953.useEndGapRight;
            if (v523) {
              var v1349 = this.nodes;
              var v1350 = i$$20 - 1;
              var v1216 = v1349[v1350];
              var v954 = v1216[j$$12];
              var v519 = v954.value;
              var v955 = this.scoreSet;
              var v520 = v955.endGap;
              a$$1 = v519 - v520;
            } else {
              var v1351 = this.nodes;
              var v1352 = i$$20 - 1;
              var v1217 = v1351[v1352];
              var v956 = v1217[j$$12];
              var v521 = v956.value;
              var v957 = this.scoreSet;
              var v522 = v957.gap;
              a$$1 = v521 - v522;
            }
            var v1353 = this.nodes;
            var v1218 = v1353[i$$20];
            var v1219 = j$$12 - 1;
            var v958 = v1218[v1219];
            var v524 = v958.value;
            var v959 = this.scoreSet;
            var v525 = v959.gap;
            b = v524 - v525;
          } else {
            var v1354 = this.nodes;
            var v1355 = i$$20 - 1;
            var v1220 = v1354[v1355];
            var v960 = v1220[j$$12];
            var v526 = v960.value;
            var v961 = this.scoreSet;
            var v527 = v961.gap;
            a$$1 = v526 - v527;
            var v1356 = this.nodes;
            var v1221 = v1356[i$$20];
            var v1222 = j$$12 - 1;
            var v962 = v1221[v1222];
            var v528 = v962.value;
            var v963 = this.scoreSet;
            var v529 = v963.gap;
            b = v528 - v529;
          }
        }
      }
      var v1357 = this.nodes;
      var v1358 = i$$20 - 1;
      var v1223 = v1357[v1358];
      var v1224 = j$$12 - 1;
      var v964 = v1223[v1224];
      var v533 = v964.value;
      var v965 = this.scoreSet;
      var v1225 = this.M;
      var v1226 = i$$20 - 1;
      var v966 = v1225[v1226];
      var v1227 = this.N;
      var v1228 = j$$12 - 1;
      var v967 = v1227[v1228];
      introspect(JAM.policy.p27) {
        var v534 = v965.getScore(v966, v967)
      }
      c$$1 = v533 + v534;
      var v968 = a$$1 >= b;
      if (v968) {
        v968 = a$$1 >= c$$1;
      }
      var v545 = v968;
      if (v545) {
        var v1229 = this.nodes;
        var v969 = v1229[i$$20];
        var v535 = v969[j$$12];
        v535.value = a$$1;
        var v1230 = this.nodes;
        var v970 = v1230[i$$20];
        var v536 = v970[j$$12];
        v536.tracebackI = i$$20 - 1;
        var v1231 = this.nodes;
        var v971 = v1231[i$$20];
        var v537 = v971[j$$12];
        v537.tracebackJ = j$$12;
      } else {
        var v972 = b >= c$$1;
        if (v972) {
          v972 = b >= a$$1;
        }
        var v544 = v972;
        if (v544) {
          var v1232 = this.nodes;
          var v973 = v1232[i$$20];
          var v538 = v973[j$$12];
          v538.value = b;
          var v1233 = this.nodes;
          var v974 = v1233[i$$20];
          var v539 = v974[j$$12];
          v539.tracebackI = i$$20;
          var v1234 = this.nodes;
          var v975 = v1234[i$$20];
          var v540 = v975[j$$12];
          v540.tracebackJ = j$$12 - 1;
        } else {
          var v1235 = this.nodes;
          var v976 = v1235[i$$20];
          var v541 = v976[j$$12];
          v541.value = c$$1;
          var v1236 = this.nodes;
          var v977 = v1236[i$$20];
          var v542 = v977[j$$12];
          v542.tracebackI = i$$20 - 1;
          var v1237 = this.nodes;
          var v978 = v1237[i$$20];
          var v543 = v978[j$$12];
          v543.tracebackJ = j$$12 - 1;
        }
      }
      j$$12++;
      var v1359 = this.nodes;
      var v1238 = v1359[0];
      var v979 = v1238.length;
      v546 = j$$12 < v979;
    }
    i$$20++;
    var v1239 = this.nodes;
    var v980 = v1239.length;
    v547 = i$$20 < v980;
  }
  var v1240 = this.nodes;
  var v1412 = this.nodes;
  var v1360 = v1412.length;
  var v1241 = v1360 - 1;
  var v981 = v1240[v1241];
  var v1413 = this.nodes;
  var v1361 = v1413[0];
  var v1242 = v1361.length;
  var v982 = v1242 - 1;
  var v548 = v981[v982];
  this.score = v548.value;
  return;
}
function alignQuad() {
  var v1518 = new Array;
  this.alignedM = v1518;
  var v1519 = new Array;
  this.alignedN = v1519;
  var v983 = this.nodes;
  var v549 = v983.length;
  var currentI = v549 - 1;
  var v1243 = this.nodes;
  var v984 = v1243[0];
  var v550 = v984.length;
  var currentJ = v550 - 1;
  var v985 = this.nodes;
  var v1362 = this.nodes;
  var v1244 = v1362.length;
  var v986 = v1244 - 1;
  var v551 = v985[v986];
  var v1363 = this.nodes;
  var v1245 = v1363[0];
  var v987 = v1245.length;
  var v552 = v987 - 1;
  var currentNode = v551[v552];
  var v1246 = currentNode.tracebackI;
  var v988 = v1246 != undefined;
  if (v988) {
    var v1247 = currentNode.tracebackJ;
    v988 = v1247 != undefined;
  }
  var v567 = v988;
  for (;v567;) {
    var v1248 = currentNode.tracebackI;
    var v1249 = currentI - 1;
    var v989 = v1248 == v1249;
    if (v989) {
      var v1250 = currentNode.tracebackJ;
      var v1251 = currentJ - 1;
      v989 = v1250 == v1251;
    }
    var v564 = v989;
    if (v564) {
      var v553 = this.alignedM;
      var v990 = this.M;
      var v554 = v990.pop();
      introspect(JAM.policy.p17) {
        v553.push(v554);
      }
      var v555 = this.alignedN;
      var v991 = this.N;
      var v556 = v991.pop();
      introspect(JAM.policy.p17) {
        v555.push(v556);
      }
    } else {
      var v992 = currentNode.tracebackJ;
      var v993 = currentJ - 1;
      var v563 = v992 == v993;
      if (v563) {
        var v557 = this.alignedM;
        introspect(JAM.policy.p11) {
          v557.push("-");
        }
        var v558 = this.alignedN;
        var v994 = this.N;
        var v559 = v994.pop();
        introspect(JAM.policy.p17) {
          v558.push(v559);
        }
      } else {
        var v560 = this.alignedM;
        var v995 = this.M;
        var v561 = v995.pop();
        introspect(JAM.policy.p17) {
          v560.push(v561);
        }
        var v562 = this.alignedN;
        introspect(JAM.policy.p11) {
          v562.push("-");
        }
      }
    }
    currentI = currentNode.tracebackI;
    currentJ = currentNode.tracebackJ;
    var v996 = this.nodes;
    var v997 = currentNode.tracebackI;
    var v565 = v996[v997];
    var v566 = currentNode.tracebackJ;
    currentNode = v565[v566];
    var v1252 = currentNode.tracebackI;
    var v998 = v1252 != undefined;
    if (v998) {
      var v1253 = currentNode.tracebackJ;
      v998 = v1253 != undefined;
    }
    v567 = v998;
  }
  var v568 = this.alignedM;
  var v1520 = v568.reverse();
  this.alignedM = v1520;
  var v569 = this.alignedN;
  var v1521 = v569.reverse();
  this.alignedN = v1521;
  return;
}
function getAlignedM() {
  var v570 = this.alignedM;
  introspect(JAM.policy.p11) {
    return v570.join("");
  }
}
function getAlignedN() {
  var v571 = this.alignedN;
  introspect(JAM.policy.p11) {
    return v571.join("");
  }
}
function AlignPairQuad() {
  return;
}
new ScoreSet;
var v572 = ScoreSet.prototype;
v572.getScore = getScore;
var v573 = ScoreSet.prototype;
v573.setScoreSetParam = setScoreSetParam;
new ScoringMatrix;
var v574 = ScoringMatrix.prototype;
v574.scoringMatrix_getScore = scoringMatrix_getScore;
var v575 = Complementarity;
var v1522 = new ScoringMatrix;
v575.prototype = v1522;
var v576 = Complementarity.prototype;
v576.setMismatch = setMismatch;
var v577 = Complementarity.prototype;
v577.setMatch = setMatch;
new AlignPairQuad;
var v578 = AlignPairQuad.prototype;
v578.initializeMatrix = initializeMatrix;
var v579 = AlignPairQuad.prototype;
v579.fillMatrix = fillMatrix;
var v580 = AlignPairQuad.prototype;
v580.align = alignQuad;
var v581 = AlignPairQuad.prototype;
v581.getAlignedM = getAlignedM;
var v582 = AlignPairQuad.prototype;
v582.getAlignedN = getAlignedN;
var v583 = AlignPairQuad.prototype;
v583.dumpMatrix = dumpMatrix;
document.onload = v2;
introspect(JAM.policy.p11) {
  var v584 = document.getElementById("submitbtn")
}
v584.onclick = v3;
introspect(JAM.policy.p11) {
  var v585 = document.getElementById("clearbtn")
}
v585.onclick = v4

JAM.stopProfile('load');
