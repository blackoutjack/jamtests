function v4() {
  var v1227 = document.forms;
  var v975 = v1227[0];
  var v558 = v975.elements;
  var v5 = v558[0];
  v5.value = " ";
  var v1228 = document.forms;
  var v976 = v1228[0];
  var v559 = v976.elements;
  var v6 = v559[4];
  v6.value = " ";
  return;
}
function v3() {
  try {
    pairwiseAlignCodons(document);
  } catch (e$$5) {
    var v7 = "The following error was encountered: " + e$$5;
    alert(v7);
  }
  return;
}
function v2() {
  var v560 = document.main_form;
  var v8 = v560.main_submit;
  v8.focus();
  return;
}
function addReturns(sequence) {
  function v0(str$$6, p1, offset$$8, s$$2) {
    return p1 + "\n";
  }
  introspect(JAM.policy.p22) {
    sequence = sequence.replace(/(.{60})/g, v0);
  }
  return sequence;
}
function checkAlign(arrayOfTitles, arrayOfSequences) {
  var v9 = arrayOfSequences[0];
  var lengthOfAlign = v9.length;
  var v561 = arrayOfSequences.length;
  var v10 = v561 < 2;
  if (v10) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v562 = arrayOfTitles.length;
  var v12 = i$$1 < v562;
  for (;v12;) {
    var v1374 = arrayOfTitles[i$$1];
    introspect(JAM.policy.p23) {
      var v1229 = v1374.search(/\S/)
    }
    var v977 = v1229 == -1;
    var v1231 = !v977;
    if (v1231) {
      var v1375 = arrayOfSequences[i$$1];
      introspect(JAM.policy.p23) {
        var v1230 = v1375.search(/\S/)
      }
      v977 = v1230 == -1;
    }
    var v563 = v977;
    var v979 = !v563;
    if (v979) {
      var v1232 = arrayOfSequences[i$$1];
      var v978 = v1232.length;
      v563 = v978 != lengthOfAlign;
    }
    var v11 = v563;
    if (v11) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v564 = arrayOfTitles.length;
    v12 = i$$1 < v564;
  }
  return true;
}
function checkCodonTable(codonTable) {
  introspect(JAM.policy.p23) {
    var v1462 = codonTable.search(/AmAcid/)
  }
  var v1376 = v1462 == -1;
  var v1464 = !v1376;
  if (v1464) {
    introspect(JAM.policy.p23) {
      var v1463 = codonTable.search(/Codon/)
    }
    v1376 = v1463 == -1;
  }
  var v1233 = v1376;
  var v1378 = !v1233;
  if (v1378) {
    introspect(JAM.policy.p23) {
      var v1377 = codonTable.search(/Number/)
    }
    v1233 = v1377 == -1;
  }
  var v980 = v1233;
  var v1235 = !v980;
  if (v1235) {
    introspect(JAM.policy.p23) {
      var v1234 = codonTable.search(/\/1000/)
    }
    v980 = v1234 == -1;
  }
  var v565 = v980;
  var v982 = !v565;
  if (v982) {
    introspect(JAM.policy.p23) {
      var v981 = codonTable.search(/Fraction\s*\.\./)
    }
    v565 = v981 == -1;
  }
  var v13 = v565;
  if (v13) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v983 = formElement.value;
  introspect(JAM.policy.p23) {
    var v566 = v983.search(/\S/)
  }
  var v14 = v566 == -1;
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
  var v567 = arrayOfPatterns.length;
  var v17 = z$$2 < v567;
  for (;v17;) {
    var v984 = arrayOfPatterns[z$$2];
    introspect(JAM.policy.p23) {
      var v568 = v984.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/)
    }
    var v15 = v568 == -1;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v985 = arrayOfPatterns[z$$2];
    var v569 = moreExpressionCheck(v985);
    var v16 = v569 == false;
    if (v16) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v570 = arrayOfPatterns.length;
    v17 = z$$2 < v570;
  }
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v18);
  var v19 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v19);
  var j = 0;
  var v571 = arrayOfPatterns.length;
  var v23 = j < v571;
  for (;v23;) {
    var v986 = arrayOfPatterns[j];
    introspect(JAM.policy.p23) {
      var v572 = v986.match(/\/.+\//)
    }
    var v20 = v572 + "gi";
    var v1581 = eval(v20);
    geneticCodeMatchExp[j] = v1581;
    var v573 = arrayOfPatterns[j];
    introspect(JAM.policy.p23) {
      var v21 = v573.match(/=[a-zA-Z\*]/)
    }
    var v1582 = v21.toString();
    geneticCodeMatchResult[j] = v1582;
    var v22 = geneticCodeMatchResult[j];
    introspect(JAM.policy.p22) {
      var v1583 = v22.replace(/=/g, "")
    }
    geneticCodeMatchResult[j] = v1583;
    j++;
    var v574 = arrayOfPatterns.length;
    v23 = j < v574;
  }
  var i$$2 = 0;
  var v987 = testSequence.length;
  var v575 = v987 - 3;
  var v30 = i$$2 <= v575;
  for (;v30;) {
    var v24 = i$$2 + 3;
    introspect(JAM.policy.p22) {
      codon = testSequence.substring(i$$2, v24);
    }
    j = 0;
    var v576 = geneticCodeMatchExp.length;
    var v28 = j < v576;
    for (;v28;) {
      var v988 = geneticCodeMatchExp[j];
      introspect(JAM.policy.p21) {
        var v577 = codon.search(v988)
      }
      var v27 = v577 != -1;
      if (v27) {
        var v26 = oneMatch == true;
        if (v26) {
          var v578 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v25 = v578 + ".";
          alert(v25);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v579 = geneticCodeMatchExp.length;
      v28 = j < v579;
    }
    var v29 = oneMatch == false;
    if (v29) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v989 = testSequence.length;
    var v580 = v989 - 3;
    v30 = i$$2 <= v580;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v581 = arrayOfPatterns$$1.length;
  var v32 = z$$3 < v581;
  for (;v32;) {
    var v990 = arrayOfPatterns$$1[z$$3];
    introspect(JAM.policy.p23) {
      var v582 = v990.search(/[^acdefghiklmnpqrstvwyz]/i)
    }
    var v31 = v582 != -1;
    if (v31) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v583 = arrayOfPatterns$$1.length;
    v32 = z$$3 < v583;
  }
  var i$$3 = 0;
  var v584 = arrayOfPatterns$$1.length;
  var v36 = i$$3 < v584;
  for (;v36;) {
    var v991 = arrayOfPatterns$$1[i$$3];
    var v585 = "[" + v991;
    var v33 = v585 + "]";
    var re = new RegExp(v33, "gi");
    var j$$1 = i$$3 + 1;
    var v586 = arrayOfPatterns$$1.length;
    var v35 = j$$1 < v586;
    for (;v35;) {
      var v992 = arrayOfPatterns$$1[j$$1];
      introspect(JAM.policy.p21) {
        var v587 = v992.search(re)
      }
      var v34 = v587 != -1;
      if (v34) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v588 = arrayOfPatterns$$1.length;
      v35 = j$$1 < v588;
    }
    i$$3++;
    var v589 = arrayOfPatterns$$1.length;
    v36 = i$$3 < v589;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v590 = arrayOfPatterns$$2.length;
  var v39 = z$$4 < v590;
  for (;v39;) {
    var v993 = arrayOfPatterns$$2[z$$4];
    introspect(JAM.policy.p23) {
      var v591 = v993.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i)
    }
    var v37 = v591 == -1;
    if (v37) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v994 = arrayOfPatterns$$2[z$$4];
    var v592 = moreExpressionCheck(v994);
    var v38 = v592 == false;
    if (v38) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v593 = arrayOfPatterns$$2.length;
    v39 = z$$4 < v593;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v1236 = getSequenceFromFasta(text$$7);
  introspect(JAM.policy.p22) {
    var v995 = v1236.replace(/[^A-Za-z]/g, "")
  }
  var v594 = v995.length;
  var v41 = v594 > maxInput;
  if (v41) {
    var v595 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v40 = v595 + " characters.";
    alert(v40);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v596 = text$$8.length;
  var v43 = v596 > maxInput$$1;
  if (v43) {
    var v597 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v42 = v597 + " characters.";
    alert(v42);
    return false;
  } else {
    return true;
  }
  return;
}
function complement(dnaSequence) {
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/g/g, "1");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/c/g, "2");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/1/g, "c");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/2/g, "g");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/G/g, "1");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/C/g, "2");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/1/g, "C");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/2/g, "G");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/a/g, "1");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/t/g, "2");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/1/g, "t");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/2/g, "a");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/A/g, "1");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/T/g, "2");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/1/g, "T");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/2/g, "A");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/u/g, "a");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/U/g, "A");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/r/g, "1");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/y/g, "2");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/1/g, "y");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/2/g, "r");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/R/g, "1");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/Y/g, "2");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/1/g, "Y");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/2/g, "R");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/k/g, "1");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/m/g, "2");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/1/g, "m");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/2/g, "k");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/K/g, "1");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/M/g, "2");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/1/g, "M");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/2/g, "K");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/b/g, "1");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/v/g, "2");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/1/g, "v");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/2/g, "b");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/B/g, "1");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/V/g, "2");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/1/g, "V");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/2/g, "B");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/d/g, "1");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/h/g, "2");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/1/g, "h");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/2/g, "d");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/D/g, "1");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/H/g, "2");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/1/g, "H");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/2/g, "D");
  }
  return dnaSequence;
}
function closeForm() {
  var v44 = outputWindow.document;
  introspect(JAM.policy.p18) {
    v44.write("</form>");
  }
  return true;
}
function closePre() {
  var v45 = outputWindow.document;
  introspect(JAM.policy.p18) {
    v45.write("</div>");
  }
  var v46 = outputWindow.document;
  introspect(JAM.policy.p18) {
    v46.write("</pre>\n");
  }
  return;
}
function closeTextArea() {
  var v47 = outputWindow.document;
  introspect(JAM.policy.p18) {
    v47.write("</textarea>");
  }
  return true;
}
function closeWindow() {
  var v48 = outputWindow.document;
  introspect(JAM.policy.p18) {
    v48.write("</body>\n</html>\n");
  }
  outputWindow.status = "Done.";
  var v49 = outputWindow.document;
  v49.close();
  return true;
}
function convertDegenerates(sequence$$1) {
  sequence$$1 = sequence$$1.toLowerCase();
  introspect(JAM.policy.p22) {
    sequence$$1 = sequence$$1.replace(/t/g, "[TU]");
  }
  introspect(JAM.policy.p22) {
    sequence$$1 = sequence$$1.replace(/r/g, "[AGR]");
  }
  introspect(JAM.policy.p22) {
    sequence$$1 = sequence$$1.replace(/y/g, "[CTUY]");
  }
  introspect(JAM.policy.p22) {
    sequence$$1 = sequence$$1.replace(/s/g, "[GCS]");
  }
  introspect(JAM.policy.p22) {
    sequence$$1 = sequence$$1.replace(/w/g, "[ATUW]");
  }
  introspect(JAM.policy.p22) {
    sequence$$1 = sequence$$1.replace(/k/g, "[GTUK]");
  }
  introspect(JAM.policy.p22) {
    sequence$$1 = sequence$$1.replace(/m/g, "[ACM]");
  }
  introspect(JAM.policy.p22) {
    sequence$$1 = sequence$$1.replace(/b/g, "[CGTUBSKY]");
  }
  introspect(JAM.policy.p22) {
    sequence$$1 = sequence$$1.replace(/d/g, "[AGTUDRKW]");
  }
  introspect(JAM.policy.p22) {
    sequence$$1 = sequence$$1.replace(/h/g, "[ACTUHMYW]");
  }
  introspect(JAM.policy.p22) {
    sequence$$1 = sequence$$1.replace(/v/g, "[ACGVSMR]");
  }
  introspect(JAM.policy.p22) {
    sequence$$1 = sequence$$1.replace(/n/g, "[ACGTURYSWKMBDHVN]");
  }
  return sequence$$1;
}
function earlyCheckAlign(alignArray) {
  var v598 = alignArray.length;
  var v50 = v598 < 3;
  if (v50) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v599 = alignArray.length;
  var v52 = i$$4 < v599;
  for (;v52;) {
    var v996 = alignArray[i$$4];
    introspect(JAM.policy.p23) {
      var v600 = v996.search(/[^\s]+\s/)
    }
    var v51 = v600 == -1;
    if (v51) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v601 = alignArray.length;
    v52 = i$$4 < v601;
  }
  return true;
}
function filterAlignSeq(alignSeq) {
  introspect(JAM.policy.p22) {
    alignSeq = alignSeq.replace(/[^abcdefghiklmnpqrstvwxyz\.\-]/gi, "");
  }
  return alignSeq;
}
function filterFastaTitle(sequenceTitle) {
  introspect(JAM.policy.p22) {
    sequenceTitle = sequenceTitle.replace(/\s{2,}/g, " ");
  }
  introspect(JAM.policy.p22) {
    sequenceTitle = sequenceTitle.replace(/^\s*/g, "");
  }
  introspect(JAM.policy.p22) {
    sequenceTitle = sequenceTitle.replace(/[\f\n\r\t]+$/g, "\n");
  }
  introspect(JAM.policy.p22) {
    return sequenceTitle.replace(/[\<\>]\n/gi, "");
  }
}
function getArrayOfFasta(sequenceData) {
  var arrayOfFasta = new Array;
  var matchArray;
  var re$$1 = /\>[^\>]+/g;
  introspect(JAM.policy.p23) {
    var v602 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v55 = v602 != -1;
  if (v55) {
    introspect(JAM.policy.p21) {
      var v54 = matchArray = re$$1.exec(sequenceData)
    }
    for (;v54;) {
      var v53 = matchArray[0];
      introspect(JAM.policy.p21) {
        arrayOfFasta.push(v53);
      }
      introspect(JAM.policy.p21) {
        v54 = matchArray = re$$1.exec(sequenceData);
      }
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v603 = sequence$$2.length;
  var v56 = "&gt;results for " + v603;
  var stringToReturn = v56 + " residue sequence ";
  introspect(JAM.policy.p23) {
    var v604 = fastaSequenceTitle.search(/[^\s]/)
  }
  var v58 = v604 != -1;
  if (v58) {
    var v605 = stringToReturn + '"';
    var v57 = v605 + fastaSequenceTitle;
    stringToReturn = v57 + '"';
  }
  var v606 = stringToReturn + ' starting "';
  introspect(JAM.policy.p19) {
    var v607 = sequence$$2.substring(0, 10)
  }
  var v59 = v606 + v607;
  stringToReturn = v59 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v608 = sequenceOne.length;
  var v60 = "Search results for " + v608;
  var stringToReturn$$1 = v60 + " residue sequence ";
  introspect(JAM.policy.p23) {
    var v609 = fastaSequenceTitleOne.search(/[^\s]/)
  }
  var v62 = v609 != -1;
  if (v62) {
    var v610 = stringToReturn$$1 + '"';
    var v61 = v610 + fastaSequenceTitleOne;
    stringToReturn$$1 = v61 + '"';
  }
  var v611 = stringToReturn$$1 + ' starting "';
  introspect(JAM.policy.p19) {
    var v612 = sequenceOne.substring(0, 10)
  }
  var v63 = v611 + v612;
  stringToReturn$$1 = v63 + '"\n';
  var v613 = stringToReturn$$1 + "and ";
  var v614 = sequenceTwo.length;
  var v64 = v613 + v614;
  stringToReturn$$1 = v64 + " residue sequence ";
  introspect(JAM.policy.p23) {
    var v615 = fastaSequenceTitleTwo.search(/[^\s]/)
  }
  var v66 = v615 != -1;
  if (v66) {
    var v616 = stringToReturn$$1 + '"';
    var v65 = v616 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v65 + '"';
  }
  var v617 = stringToReturn$$1 + ' starting "';
  introspect(JAM.policy.p19) {
    var v618 = sequenceTwo.substring(0, 10)
  }
  var v67 = v617 + v618;
  stringToReturn$$1 = v67 + '"';
  var v68 = '<div class="info">' + stringToReturn$$1;
  return v68 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v69 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v69);
  var j$$2 = 0;
  var v619 = arrayOfPatterns$$3.length;
  var v71 = j$$2 < v619;
  for (;v71;) {
    var v997 = arrayOfPatterns$$3[j$$2];
    introspect(JAM.policy.p23) {
      var v620 = v997.match(/\/.+\//)
    }
    var v70 = v620 + "gi";
    var v1584 = eval(v70);
    geneticCodeMatchExp$$1[j$$2] = v1584;
    j$$2++;
    var v621 = arrayOfPatterns$$3.length;
    v71 = j$$2 < v621;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v72 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v72);
  var j$$3 = 0;
  var v622 = arrayOfPatterns$$4.length;
  var v75 = j$$3 < v622;
  for (;v75;) {
    var v623 = arrayOfPatterns$$4[j$$3];
    introspect(JAM.policy.p23) {
      var v73 = v623.match(/=[a-zA-Z\*]/)
    }
    var v1585 = v73.toString();
    geneticCodeMatchResult$$1[j$$3] = v1585;
    var v74 = geneticCodeMatchResult$$1[j$$3];
    introspect(JAM.policy.p22) {
      var v1586 = v74.replace(/=/g, "")
    }
    geneticCodeMatchResult$$1[j$$3] = v1586;
    j$$3++;
    var v624 = arrayOfPatterns$$4.length;
    v75 = j$$3 < v624;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v625 = sequence$$3.length;
  var v76 = "Results for " + v625;
  var stringToReturn$$2 = v76 + " residue sequence ";
  introspect(JAM.policy.p23) {
    var v626 = fastaSequenceTitle$$1.search(/[^\s]/)
  }
  var v78 = v626 != -1;
  if (v78) {
    var v627 = stringToReturn$$2 + '"';
    var v77 = v627 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v77 + '"';
  }
  var v628 = stringToReturn$$2 + ' starting "';
  introspect(JAM.policy.p19) {
    var v629 = sequence$$3.substring(0, 10)
  }
  var v79 = v628 + v629;
  stringToReturn$$2 = v79 + '"';
  var v80 = '<div class="info">' + stringToReturn$$2;
  return v80 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v998 = "Results for " + topology;
  var v630 = v998 + " ";
  var v631 = sequence$$4.length;
  var v81 = v630 + v631;
  var stringToReturn$$3 = v81 + " residue sequence ";
  introspect(JAM.policy.p23) {
    var v632 = fastaSequenceTitle$$2.search(/[^\s]/)
  }
  var v83 = v632 != -1;
  if (v83) {
    var v633 = stringToReturn$$3 + '"';
    var v82 = v633 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v82 + '"';
  }
  var v634 = stringToReturn$$3 + ' starting "';
  introspect(JAM.policy.p19) {
    var v635 = sequence$$4.substring(0, 10)
  }
  var v84 = v634 + v635;
  stringToReturn$$3 = v84 + '"';
  var v85 = '<div class="info">' + stringToReturn$$3;
  return v85 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v636 = sequenceOne$$1.length;
  var v86 = "Alignment results for " + v636;
  var stringToReturn$$4 = v86 + " residue sequence ";
  introspect(JAM.policy.p23) {
    var v637 = fastaSequenceTitleOne$$1.search(/[^\s]/)
  }
  var v88 = v637 != -1;
  if (v88) {
    var v638 = stringToReturn$$4 + '"';
    var v87 = v638 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v87 + '"';
  }
  var v639 = stringToReturn$$4 + ' starting "';
  introspect(JAM.policy.p19) {
    var v640 = sequenceOne$$1.substring(0, 10)
  }
  var v89 = v639 + v640;
  stringToReturn$$4 = v89 + '"\n';
  var v641 = stringToReturn$$4 + "and ";
  var v642 = sequenceTwo$$1.length;
  var v90 = v641 + v642;
  stringToReturn$$4 = v90 + " residue sequence ";
  introspect(JAM.policy.p23) {
    var v643 = fastaSequenceTitleTwo$$1.search(/[^\s]/)
  }
  var v92 = v643 != -1;
  if (v92) {
    var v644 = stringToReturn$$4 + '"';
    var v91 = v644 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v91 + '"';
  }
  var v645 = stringToReturn$$4 + ' starting "';
  introspect(JAM.policy.p19) {
    var v646 = sequenceTwo$$1.substring(0, 10)
  }
  var v93 = v645 + v646;
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
    var v647 = Math.random();
    var v648 = components.length;
    var v95 = v647 * v648;
    introspect(JAM.policy.p23) {
      tempNum = Math.floor(v95);
    }
    tempChar = components[tempNum];
    introspect(JAM.policy.p21) {
      sequenceArray.push(tempChar);
    }
    j$$4++;
    v96 = j$$4 < lengthOut;
  }
  introspect(JAM.policy.p18) {
    return sequenceArray.join("");
  }
}
function getSequenceFromFasta(sequenceRecord) {
  introspect(JAM.policy.p23) {
    var v649 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v97 = v649 != -1;
  if (v97) {
    introspect(JAM.policy.p22) {
      sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "");
    }
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  introspect(JAM.policy.p23) {
    var v650 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v99 = v650 != -1;
  if (v99) {
    introspect(JAM.policy.p22) {
      var v98 = sequenceRecord$$1.match(/\>[^\f\n\r]+[\f\n\r]/, "")
    }
    fastaTitle = v98.toString();
    introspect(JAM.policy.p22) {
      fastaTitle = fastaTitle.replace(/\>|[\f\n\r]/g, "");
    }
    introspect(JAM.policy.p22) {
      fastaTitle = fastaTitle.replace(/\s{2,}/g, " ");
    }
    introspect(JAM.policy.p22) {
      fastaTitle = fastaTitle.replace(/[\<\>]/gi, "");
    }
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  introspect(JAM.policy.p23) {
    var v1559 = expressionToCheck.search(/\[[A-Za-z\|]*\[/)
  }
  var v1552 = v1559 != -1;
  var v1561 = !v1552;
  if (v1561) {
    introspect(JAM.policy.p23) {
      var v1560 = expressionToCheck.search(/\][A-Za-z\|]*\]/)
    }
    v1552 = v1560 != -1;
  }
  var v1542 = v1552;
  var v1554 = !v1542;
  if (v1554) {
    introspect(JAM.policy.p23) {
      var v1553 = expressionToCheck.search(/\[\]/)
    }
    v1542 = v1553 != -1;
  }
  var v1531 = v1542;
  var v1544 = !v1531;
  if (v1544) {
    introspect(JAM.policy.p23) {
      var v1543 = expressionToCheck.search(/\/[A-Za-z\|]*\]/)
    }
    v1531 = v1543 != -1;
  }
  var v1516 = v1531;
  var v1533 = !v1516;
  if (v1533) {
    introspect(JAM.policy.p23) {
      var v1532 = expressionToCheck.search(/\[[A-Za-z\|]*\//)
    }
    v1516 = v1532 != -1;
  }
  var v1495 = v1516;
  var v1518 = !v1495;
  if (v1518) {
    introspect(JAM.policy.p23) {
      var v1517 = expressionToCheck.search(/\|\|/)
    }
    v1495 = v1517 != -1;
  }
  var v1465 = v1495;
  var v1497 = !v1465;
  if (v1497) {
    introspect(JAM.policy.p23) {
      var v1496 = expressionToCheck.search(/\/\|/)
    }
    v1465 = v1496 != -1;
  }
  var v1379 = v1465;
  var v1467 = !v1379;
  if (v1467) {
    introspect(JAM.policy.p23) {
      var v1466 = expressionToCheck.search(/\|\//)
    }
    v1379 = v1466 != -1;
  }
  var v1237 = v1379;
  var v1381 = !v1237;
  if (v1381) {
    introspect(JAM.policy.p23) {
      var v1380 = expressionToCheck.search(/\[.\]/)
    }
    v1237 = v1380 != -1;
  }
  var v999 = v1237;
  var v1239 = !v999;
  if (v1239) {
    introspect(JAM.policy.p23) {
      var v1238 = expressionToCheck.search(/\</)
    }
    v999 = v1238 != -1;
  }
  var v651 = v999;
  var v1001 = !v651;
  if (v1001) {
    introspect(JAM.policy.p23) {
      var v1000 = expressionToCheck.search(/\>/)
    }
    v651 = v1000 != -1;
  }
  var v100 = v651;
  if (v100) {
    return false;
  }
  return true;
}
function openForm() {
  var v101 = outputWindow.document;
  introspect(JAM.policy.p18) {
    v101.write('<form action="">\n');
  }
  return true;
}
function openPre() {
  var v102 = outputWindow.document;
  introspect(JAM.policy.p18) {
    v102.write("<pre>");
  }
  var v103 = outputWindow.document;
  introspect(JAM.policy.p18) {
    v103.write('<div class="pre">');
  }
  return;
}
function openTextArea() {
  var v104 = outputWindow.document;
  introspect(JAM.policy.p18) {
    v104.write('<br /><textarea rows="6" cols="61">\n');
  }
  return true;
}
function openWindow(title$$5) {
  _openWindow(title$$5, true);
  return;
}
function _openWindow(title$$6, isColor) {
  introspect(JAM.policy.p20) {
    outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  }
  outputWindow.focus();
  var v105 = outputWindow.document;
  var v1240 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v1002 = v1240 + "<head>\n";
  var v652 = v1002 + "<title>Sequence Manipulation Suite</title>\n";
  var v106 = v652 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  introspect(JAM.policy.p21) {
    v105.write(v106);
  }
  if (isColor) {
    var v107 = outputWindow.document;
    var v1574 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1570 = v1574 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1566 = v1570 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1562 = v1566 + "div.info {font-weight: bold}\n";
    var v1555 = v1562 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1545 = v1555 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v1534 = v1545 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v1519 = v1534 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1498 = v1519 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v1468 = v1498 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v1382 = v1468 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v1241 = v1382 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v1003 = v1241 + "td.many {color: #000000}\n";
    var v653 = v1003 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v108 = v653 + "</style>\n";
    introspect(JAM.policy.p21) {
      v107.write(v108);
    }
  } else {
    var v109 = outputWindow.document;
    var v1578 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1575 = v1578 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1571 = v1575 + "div.title {display: none}\n";
    var v1567 = v1571 + "div.info {font-weight: bold}\n";
    var v1563 = v1567 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1556 = v1563 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1546 = v1556 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v1535 = v1546 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1520 = v1535 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1499 = v1520 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1469 = v1499 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v1383 = v1469 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1242 = v1383 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v1004 = v1242 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v654 = v1004 + "img {display: none}\n";
    var v110 = v654 + "</style>\n";
    introspect(JAM.policy.p21) {
      v109.write(v110);
    }
  }
  var v111 = outputWindow.document;
  var v1243 = "</head>\n" + '<body class="main">\n';
  var v1005 = v1243 + '<div class="title">';
  var v655 = v1005 + title$$6;
  var v112 = v655 + " results</div>\n";
  introspect(JAM.policy.p21) {
    v111.write(v112);
  }
  outputWindow.status = "Please Wait.";
  return true;
}
function openWindowAlign(title$$7) {
  _openWindowAlign(title$$7, true);
  return;
}
function _openWindowAlign(title$$8, isBackground) {
  introspect(JAM.policy.p20) {
    outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  }
  outputWindow.focus();
  var v113 = outputWindow.document;
  var v1244 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v1006 = v1244 + "<head>\n";
  var v656 = v1006 + "<title>Sequence Manipulation Suite</title>\n";
  var v114 = v656 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  introspect(JAM.policy.p21) {
    v113.write(v114);
  }
  if (isBackground) {
    var v115 = outputWindow.document;
    var v1576 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1572 = v1576 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1568 = v1572 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1564 = v1568 + "div.info {font-weight: bold}\n";
    var v1557 = v1564 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v1547 = v1557 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v1536 = v1547 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v1521 = v1536 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v1500 = v1521 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v1470 = v1500 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v1384 = v1470 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v1245 = v1384 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v1007 = v1245 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v657 = v1007 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v116 = v657 + "</style>\n";
    introspect(JAM.policy.p21) {
      v115.write(v116);
    }
  } else {
    var v117 = outputWindow.document;
    var v1580 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1579 = v1580 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1577 = v1579 + "div.title {display: none}\n";
    var v1573 = v1577 + "div.info {font-weight: bold}\n";
    var v1569 = v1573 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1565 = v1569 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v1558 = v1565 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v1548 = v1558 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v1537 = v1548 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v1522 = v1537 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v1501 = v1522 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v1471 = v1501 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v1385 = v1471 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v1246 = v1385 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v1008 = v1246 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v658 = v1008 + "img {display: none}\n";
    var v118 = v658 + "</style>\n";
    introspect(JAM.policy.p21) {
      v117.write(v118);
    }
  }
  var v119 = outputWindow.document;
  var v1247 = "</head>\n" + '<body class="main">\n';
  var v1009 = v1247 + '<div class="title">';
  var v659 = v1009 + title$$8;
  var v120 = v659 + " results</div>\n";
  introspect(JAM.policy.p21) {
    v119.write(v120);
  }
  outputWindow.status = "Please Wait.";
  return true;
}
function removeFormatting(sequence$$5) {
  introspect(JAM.policy.p22) {
    return sequence$$5.replace(/[\d\s]/g, "");
  }
}
function removeNonDna(sequence$$6) {
  introspect(JAM.policy.p22) {
    return sequence$$6.replace(/[^gatucryswkmbdhvnxGATUCRYSWKMBDHVNX]/g, "");
  }
}
function removeNonDnaStrict(sequence$$7) {
  introspect(JAM.policy.p22) {
    return sequence$$7.replace(/[^gatucGATUC]/g, "");
  }
}
function removeNonProtein(sequence$$8) {
  introspect(JAM.policy.p22) {
    return sequence$$8.replace(/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, "");
  }
}
function removeNonProteinStrict(sequence$$9) {
  introspect(JAM.policy.p22) {
    return sequence$$9.replace(/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, "");
  }
}
function removeNonProteinAllowDegen(sequence$$10) {
  introspect(JAM.policy.p22) {
    return sequence$$10.replace(/[^ABCDEFGHIKLMNPQRSTVWYXZabcdefghiklmnpqrstvwyxz\*]/g, "");
  }
}
function removeNonProteinAllowX(sequence$$11) {
  introspect(JAM.policy.p22) {
    return sequence$$11.replace(/[^ACDEFGHIKLMNPQRSTVWYZXacdefghiklmnpqrstvwyzx\*]/g, "");
  }
}
function removeWhiteSpace(text$$9) {
  introspect(JAM.policy.p22) {
    return text$$9.replace(/\s/g, "");
  }
}
function removeNonLetters(sequence$$12) {
  introspect(JAM.policy.p22) {
    return sequence$$12.replace(/[^A-Z]/gi, "");
  }
}
function reverse(dnaSequence$$1) {
  var tempDnaArray = new Array;
  introspect(JAM.policy.p23) {
    var v660 = dnaSequence$$1.search(/./)
  }
  var v121 = v660 != -1;
  if (v121) {
    introspect(JAM.policy.p23) {
      tempDnaArray = dnaSequence$$1.match(/./g);
    }
    tempDnaArray = tempDnaArray.reverse();
    introspect(JAM.policy.p18) {
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
  introspect(JAM.policy.p21) {
    testArray.push(testString);
  }
  var v661 = testArray[0];
  var v125 = v661 != testString;
  if (v125) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  introspect(JAM.policy.p21) {
    var v662 = testString.search(re$$2)
  }
  var v126 = v662 == -1;
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
  introspect(JAM.policy.p22) {
    testString = testString.replace(/(\d)/g, v1);
  }
  var v128 = testString != "1X2X3X";
  if (v128) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false;
  }
  var testNum = 2489.8237;
  introspect(JAM.policy.p15) {
    var v663 = testNum.toFixed(3)
  }
  var v129 = v663 != 2489.824;
  if (v129) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  introspect(JAM.policy.p15) {
    var v664 = testNum.toPrecision(5)
  }
  var v130 = v664 != 2489.8;
  if (v130) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  introspect(JAM.policy.p23) {
    var v665 = theNumber$$1.search(/\d/)
  }
  var v131 = v665 == -1;
  if (v131) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  introspect(JAM.policy.p23) {
    var v1386 = emblFile.search(/ID/)
  }
  var v1248 = v1386 == -1;
  var v1388 = !v1248;
  if (v1388) {
    introspect(JAM.policy.p23) {
      var v1387 = emblFile.search(/AC/)
    }
    v1248 = v1387 == -1;
  }
  var v1010 = v1248;
  var v1250 = !v1010;
  if (v1250) {
    introspect(JAM.policy.p23) {
      var v1249 = emblFile.search(/DE/)
    }
    v1010 = v1249 == -1;
  }
  var v666 = v1010;
  var v1012 = !v666;
  if (v1012) {
    introspect(JAM.policy.p23) {
      var v1011 = emblFile.search(/SQ/)
    }
    v666 = v1011 == -1;
  }
  var v132 = v666;
  if (v132) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  introspect(JAM.policy.p23) {
    var v667 = theNumber$$2.search(/\d/)
  }
  var v133 = v667 == -1;
  if (v133) {
    alert("Please enter a number.");
    return false;
  }
  var v135 = theNumber$$2 > maxInput$$2;
  if (v135) {
    var v668 = "Please enter a number less than or equal to " + maxInput$$2;
    var v134 = v668 + ".";
    alert(v134);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  introspect(JAM.policy.p23) {
    var v669 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i)
  }
  var v136 = v669 != -1;
  if (v136) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  introspect(JAM.policy.p23) {
    var v670 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i)
  }
  var v137 = v670 != -1;
  if (v137) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  introspect(JAM.policy.p23) {
    var v1389 = genBankFile.search(/LOCUS/)
  }
  var v1251 = v1389 == -1;
  var v1391 = !v1251;
  if (v1391) {
    introspect(JAM.policy.p23) {
      var v1390 = genBankFile.search(/DEFINITION/)
    }
    v1251 = v1390 == -1;
  }
  var v1013 = v1251;
  var v1253 = !v1013;
  if (v1253) {
    introspect(JAM.policy.p23) {
      var v1252 = genBankFile.search(/ACCESSION/)
    }
    v1013 = v1252 == -1;
  }
  var v671 = v1013;
  var v1015 = !v671;
  if (v1015) {
    introspect(JAM.policy.p23) {
      var v1014 = genBankFile.search(/ORIGIN/)
    }
    v671 = v1014 == -1;
  }
  var v138 = v671;
  if (v138) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  introspect(JAM.policy.p23) {
    var v1392 = genBankFile$$1.search(/LOCUS/)
  }
  var v1254 = v1392 == -1;
  var v1394 = !v1254;
  if (v1394) {
    introspect(JAM.policy.p23) {
      var v1393 = genBankFile$$1.search(/DEFINITION/)
    }
    v1254 = v1393 == -1;
  }
  var v1016 = v1254;
  var v1256 = !v1016;
  if (v1256) {
    introspect(JAM.policy.p23) {
      var v1255 = genBankFile$$1.search(/ACCESSION/)
    }
    v1016 = v1255 == -1;
  }
  var v672 = v1016;
  var v1018 = !v672;
  if (v1018) {
    introspect(JAM.policy.p23) {
      var v1017 = genBankFile$$1.search(/ORIGIN/)
    }
    v672 = v1017 == -1;
  }
  var v139 = v672;
  if (v139) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  introspect(JAM.policy.p23) {
    var v673 = genBankFile$$1.search(/FEATURES {13}/)
  }
  var v140 = v673 == -1;
  if (v140) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  introspect(JAM.policy.p23) {
    var v1395 = emblFile$$1.search(/ID/)
  }
  var v1257 = v1395 == -1;
  var v1397 = !v1257;
  if (v1397) {
    introspect(JAM.policy.p23) {
      var v1396 = emblFile$$1.search(/AC/)
    }
    v1257 = v1396 == -1;
  }
  var v1019 = v1257;
  var v1259 = !v1019;
  if (v1259) {
    introspect(JAM.policy.p23) {
      var v1258 = emblFile$$1.search(/DE/)
    }
    v1019 = v1258 == -1;
  }
  var v674 = v1019;
  var v1021 = !v674;
  if (v1021) {
    introspect(JAM.policy.p23) {
      var v1020 = emblFile$$1.search(/SQ/)
    }
    v674 = v1020 == -1;
  }
  var v141 = v674;
  if (v141) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  introspect(JAM.policy.p23) {
    var v675 = emblFile$$1.search(/^FT/m)
  }
  var v142 = v675 == -1;
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
    var v676 = basePerLine / groupSize;
    var v146 = j$$6 <= v676;
    for (;v146;) {
      var v145 = k < groupSize;
      for (;v145;) {
        var v677 = k + i$$5;
        introspect(JAM.policy.p21) {
          var v144 = text$$10.charAt(v677)
        }
        lineOfText = lineOfText + v144;
        k = k + 1;
        v145 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v678 = basePerLine / groupSize;
      v146 = j$$6 <= v678;
    }
    var v147 = outputWindow.document;
    var v148 = lineOfText + "\n";
    introspect(JAM.policy.p21) {
      v147.write(v148);
    }
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
    var v679 = adjustment < 0;
    if (v679) {
      v679 = adjusted >= 0;
    }
    var v150 = v679;
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
    var v680 = basePerLine$$2 / groupSize$$2;
    var v159 = j$$7 <= v680;
    for (;v159;) {
      var v154 = k$$1 < groupSize$$2;
      for (;v154;) {
        var v681 = i$$6 + k$$1;
        var v151 = v681 >= stopBase$$2;
        if (v151) {
          break;
        }
        var v152 = lineOfText$$1;
        var v682 = k$$1 + i$$6;
        introspect(JAM.policy.p21) {
          var v153 = text$$12.charAt(v682)
        }
        lineOfText$$1 = v152 + v153;
        k$$1 = k$$1 + 1;
        v154 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v157 = numberPosition$$1 == "above";
      if (v157) {
        var v155 = aboveNum;
        var v683 = adjustNumbering(i$$6, numberingAdjustment);
        var v156 = rightNum(v683, "", groupSize$$2, tabIn$$3);
        aboveNum = v155 + v156;
      }
      var v158 = i$$6 >= stopBase$$2;
      if (v158) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v684 = basePerLine$$2 / groupSize$$2;
      v159 = j$$7 <= v684;
    }
    var v182 = numberPosition$$1 == "left";
    if (v182) {
      var v160 = outputWindow.document;
      var v1260 = adjustNumbering(lineNum, numberingAdjustment);
      var v1022 = rightNum(v1260, "", 8, tabIn$$3);
      var v685 = v1022 + lineOfText$$1;
      var v161 = v685 + "\n";
      introspect(JAM.policy.p21) {
        v160.write(v161);
      }
      var v165 = strands$$1 == "two";
      if (v165) {
        var v162 = outputWindow.document;
        var v1261 = adjustNumbering(lineNum, numberingAdjustment);
        var v1023 = rightNum(v1261, "", 8, tabIn$$3);
        var v1024 = complement(lineOfText$$1);
        var v686 = v1023 + v1024;
        var v163 = v686 + "\n";
        introspect(JAM.policy.p21) {
          v162.write(v163);
        }
        var v164 = outputWindow.document;
        introspect(JAM.policy.p18) {
          v164.write("\n");
        }
      }
    } else {
      var v181 = numberPosition$$1 == "right";
      if (v181) {
        var v166 = outputWindow.document;
        var v1025 = lineOfText$$1;
        var v1026 = adjustNumbering(i$$6, numberingAdjustment);
        var v687 = v1025 + v1026;
        var v167 = v687 + "\n";
        introspect(JAM.policy.p21) {
          v166.write(v167);
        }
        var v171 = strands$$1 == "two";
        if (v171) {
          var v168 = outputWindow.document;
          var v1027 = complement(lineOfText$$1);
          var v1028 = adjustNumbering(i$$6, numberingAdjustment);
          var v688 = v1027 + v1028;
          var v169 = v688 + "\n";
          introspect(JAM.policy.p21) {
            v168.write(v169);
          }
          var v170 = outputWindow.document;
          introspect(JAM.policy.p18) {
            v170.write("\n");
          }
        }
      } else {
        var v180 = numberPosition$$1 == "above";
        if (v180) {
          var v172 = outputWindow.document;
          var v173 = aboveNum + "\n";
          introspect(JAM.policy.p21) {
            v172.write(v173);
          }
          var v174 = outputWindow.document;
          var v175 = lineOfText$$1 + "\n";
          introspect(JAM.policy.p21) {
            v174.write(v175);
          }
          var v179 = strands$$1 == "two";
          if (v179) {
            var v176 = outputWindow.document;
            var v689 = complement(lineOfText$$1);
            var v177 = v689 + "\n";
            introspect(JAM.policy.p21) {
              v176.write(v177);
            }
            var v178 = outputWindow.document;
            introspect(JAM.policy.p18) {
              v178.write("\n");
            }
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
    var v690 = basePerLine$$3 / groupSize$$3;
    var v190 = j$$8 <= v690;
    for (;v190;) {
      var v186 = k$$2 < groupSize$$3;
      for (;v186;) {
        var v691 = i$$7 + k$$2;
        var v184 = v691 >= stopBase$$3;
        if (v184) {
          break;
        }
        var v692 = k$$2 + i$$7;
        introspect(JAM.policy.p21) {
          var v185 = text$$13.charAt(v692)
        }
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
      var v693 = basePerLine$$3 / groupSize$$3;
      v190 = j$$8 <= v693;
    }
    var v201 = numberPosition$$2 == "left";
    if (v201) {
      var v191 = outputWindow.document;
      var v1029 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v694 = v1029 + lineOfText$$2;
      var v192 = v694 + "\n";
      introspect(JAM.policy.p21) {
        v191.write(v192);
      }
    } else {
      var v200 = numberPosition$$2 == "right";
      if (v200) {
        var v193 = outputWindow.document;
        var v695 = lineOfText$$2 + i$$7;
        var v194 = v695 + "\n";
        introspect(JAM.policy.p21) {
          v193.write(v194);
        }
      } else {
        var v199 = numberPosition$$2 == "above";
        if (v199) {
          var v195 = outputWindow.document;
          var v196 = aboveNum$$1 + "\n";
          introspect(JAM.policy.p21) {
            v195.write(v196);
          }
          var v197 = outputWindow.document;
          var v198 = lineOfText$$2 + "\n";
          introspect(JAM.policy.p21) {
            v197.write(v198);
          }
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
  var v1262 = sequence$$13.length;
  var v1030 = v1262 <= firstIndexToMutate;
  var v1263 = !v1030;
  if (v1263) {
    v1030 = lastIndexToMutate < 0;
  }
  var v696 = v1030;
  var v1031 = !v696;
  if (v1031) {
    v696 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v203 = v696;
  if (v203) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v211 = i$$8 < numMut;
  for (;v211;) {
    maxNum = sequence$$13.length;
    var v697 = Math.random();
    var v204 = v697 * maxNum;
    introspect(JAM.policy.p23) {
      randNum = Math.floor(v204);
    }
    var v698 = randNum < firstIndexToMutate;
    var v1032 = !v698;
    if (v1032) {
      v698 = randNum > lastIndexToMutate;
    }
    var v205 = v698;
    if (v205) {
      numMut++;
      i$$8++;
      v211 = i$$8 < numMut;
      continue;
    }
    introspect(JAM.policy.p23) {
      currentChar = sequence$$13.charAt(randNum);
    }
    needNewChar = true;
    for (;needNewChar;) {
      var v699 = Math.random();
      var v700 = components$$1.length;
      var v206 = v699 * v700;
      introspect(JAM.policy.p23) {
        componentsIndex = Math.round(v206);
      }
      var v701 = components$$1.length;
      var v207 = componentsIndex == v701;
      if (v207) {
        componentsIndex = 0;
      }
      var v702 = components$$1[componentsIndex];
      var v208 = v702 != currentChar;
      if (v208) {
        needNewChar = false;
      }
    }
    introspect(JAM.policy.p19) {
      var v703 = sequence$$13.substring(0, randNum)
    }
    var v704 = components$$1[componentsIndex];
    var v209 = v703 + v704;
    var v705 = randNum + 1;
    var v706 = sequence$$13.length;
    introspect(JAM.policy.p33) {
      var v210 = sequence$$13.substring(v705, v706)
    }
    sequence$$13 = v209 + v210;
    i$$8++;
    v211 = i$$8 < numMut;
  }
  var v212 = outputWindow.document;
  var v213 = addReturns(sequence$$13);
  introspect(JAM.policy.p21) {
    v212.write(v213);
  }
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v218 = j$$9 < lengthOut$$1;
  for (;v218;) {
    var v707 = Math.random();
    var v708 = components$$2.length;
    var v214 = v707 * v708;
    introspect(JAM.policy.p23) {
      tempNum$$1 = Math.floor(v214);
    }
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v709 = sequence$$14.length;
    var v217 = v709 == 60;
    if (v217) {
      var v215 = outputWindow.document;
      var v216 = sequence$$14 + "\n";
      introspect(JAM.policy.p21) {
        v215.write(v216);
      }
      sequence$$14 = "";
    }
    j$$9++;
    v218 = j$$9 < lengthOut$$1;
  }
  var v219 = outputWindow.document;
  var v220 = sequence$$14 + "\n";
  introspect(JAM.policy.p21) {
    v219.write(v220);
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
  var v224 = dnaConformation == "circular";
  if (v224) {
    introspect(JAM.policy.p19) {
      var v221 = sequence$$15.substring(0, lookAhead)
    }
    shiftValue = v221.length;
    var v1264 = sequence$$15.length;
    var v1033 = v1264 - lookAhead;
    var v1034 = sequence$$15.length;
    introspect(JAM.policy.p33) {
      var v710 = sequence$$15.substring(v1033, v1034)
    }
    var v222 = v710 + sequence$$15;
    introspect(JAM.policy.p19) {
      var v223 = sequence$$15.substring(0, lookAhead)
    }
    sequence$$15 = v222 + v223;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v225 = outputWindow.document;
  introspect(JAM.policy.p18) {
    v225.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  }
  var v226 = outputWindow.document;
  var v1265 = '<tr><td class="title" width="200px">' + "Site:";
  var v1035 = v1265 + '</td><td class="title">';
  var v711 = v1035 + "Positions:";
  var v227 = v711 + "</td></tr>\n";
  introspect(JAM.policy.p21) {
    v226.write(v227);
  }
  var i$$9 = 0;
  var v712 = arrayOfItems.length;
  var v243 = i$$9 < v712;
  for (;v243;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v713 = arrayOfItems[i$$9];
    introspect(JAM.policy.p23) {
      var v228 = v713.match(/\/.+\//)
    }
    matchExp = v228 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    var v1266 = arrayOfItems[i$$9];
    introspect(JAM.policy.p23) {
      var v1036 = v1266.match(/\)\D*\d+/)
    }
    var v714 = v1036.toString();
    introspect(JAM.policy.p22) {
      var v229 = v714.replace(/\)\D*/, "")
    }
    cutDistance = parseFloat(v229);
    introspect(JAM.policy.p21) {
      var v235 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    for (;v235;) {
      var v230 = matchExp.lastIndex;
      matchPosition = v230 - cutDistance;
      var v715 = matchPosition >= lowerLimit;
      if (v715) {
        v715 = matchPosition < upperLimit;
      }
      var v233 = v715;
      if (v233) {
        timesFound++;
        var v231 = tempString$$1 + ", ";
        var v716 = matchPosition - shiftValue;
        var v232 = v716 + 1;
        tempString$$1 = v231 + v232;
      }
      var v717 = matchExp.lastIndex;
      var v1037 = RegExp.lastMatch;
      var v718 = v1037.length;
      var v234 = v717 - v718;
      matchExp.lastIndex = v234 + 1;
      introspect(JAM.policy.p21) {
        v235 = matchArray$$1 = matchExp.exec(sequence$$15);
      }
    }
    introspect(JAM.policy.p23) {
      var v719 = tempString$$1.search(/\d/)
    }
    var v236 = v719 != -1;
    if (v236) {
      introspect(JAM.policy.p22) {
        tempString$$1 = tempString$$1.replace(/none,\s*/, "");
      }
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
    var v1523 = '<tr><td class="' + backGroundClass;
    var v1502 = v1523 + '">';
    var v1549 = arrayOfItems[i$$9];
    introspect(JAM.policy.p23) {
      var v1538 = v1549.match(/\([^\(]+\)/)
    }
    var v1524 = v1538.toString();
    introspect(JAM.policy.p22) {
      var v1503 = v1524.replace(/\(|\)/g, "")
    }
    var v1472 = v1502 + v1503;
    var v1398 = v1472 + '</td><td class="';
    var v1267 = v1398 + backGroundClass;
    var v1038 = v1267 + '">';
    var v720 = v1038 + tempString$$1;
    var v242 = v720 + "</td></tr>\n";
    introspect(JAM.policy.p21) {
      v241.write(v242);
    }
    timesFound = 0;
    i$$9++;
    var v721 = arrayOfItems.length;
    v243 = i$$9 < v721;
  }
  var v244 = outputWindow.document;
  introspect(JAM.policy.p18) {
    v244.write("</tbody></table>\n");
  }
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v245 = outputWindow.document;
  introspect(JAM.policy.p18) {
    v245.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  }
  var v246 = outputWindow.document;
  var v1473 = '<tr><td class="title">' + "Pattern:";
  var v1399 = v1473 + '</td><td class="title">';
  var v1268 = v1399 + "Times found:";
  var v1039 = v1268 + '</td><td class="title">';
  var v722 = v1039 + "Percentage:";
  var v247 = v722 + "</td></tr>\n";
  introspect(JAM.policy.p21) {
    v246.write(v247);
  }
  var i$$10 = 0;
  var v723 = arrayOfItems$$1.length;
  var v256 = i$$10 < v723;
  for (;v256;) {
    var tempNumber = 0;
    var v724 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p23) {
      var v248 = v724.match(/\/[^\/]+\//)
    }
    var matchExp$$1 = v248 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    introspect(JAM.policy.p21) {
      var v725 = sequence$$16.search(matchExp$$1)
    }
    var v250 = v725 != -1;
    if (v250) {
      introspect(JAM.policy.p21) {
        var v249 = sequence$$16.match(matchExp$$1)
      }
      tempNumber = v249.length;
    }
    var percentage = 0;
    var v1040 = originalLength + 1;
    var v1400 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p23) {
      var v1269 = v1400.match(/\d+/)
    }
    var v1041 = parseFloat(v1269);
    var v726 = v1040 - v1041;
    var v253 = v726 > 0;
    if (v253) {
      var v251 = 100 * tempNumber;
      var v727 = originalLength + 1;
      var v1270 = arrayOfItems$$1[i$$10];
      introspect(JAM.policy.p23) {
        var v1042 = v1270.match(/\d+/)
      }
      var v728 = parseFloat(v1042);
      var v252 = v727 - v728;
      percentage = v251 / v252;
    }
    var v254 = outputWindow.document;
    var v1550 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p23) {
      var v1539 = v1550.match(/\([^\(]+\)\b/)
    }
    var v1525 = v1539.toString();
    introspect(JAM.policy.p22) {
      var v1504 = v1525.replace(/\(|\)/g, "")
    }
    var v1474 = "<tr><td>" + v1504;
    var v1401 = v1474 + "</td><td>";
    var v1271 = v1401 + tempNumber;
    var v1043 = v1271 + "</td><td>";
    introspect(JAM.policy.p15) {
      var v1044 = percentage.toFixed(2)
    }
    var v729 = v1043 + v1044;
    var v255 = v729 + "</td></tr>\n";
    introspect(JAM.policy.p21) {
      v254.write(v255);
    }
    i$$10++;
    var v730 = arrayOfItems$$1.length;
    v256 = i$$10 < v730;
  }
  var v257 = outputWindow.document;
  introspect(JAM.policy.p18) {
    v257.write("</tbody></table>\n");
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
  var v731 = sequence$$17.length;
  var v264 = v731 > 0;
  for (;v264;) {
    maxNum$$1 = sequence$$17.length;
    var v732 = Math.random();
    var v258 = v732 * maxNum$$1;
    introspect(JAM.policy.p23) {
      randNum$$1 = Math.floor(v258);
    }
    introspect(JAM.policy.p23) {
      tempChar$$2 = sequence$$17.charAt(randNum$$1);
    }
    tempSeq = tempSeq + tempChar$$2;
    introspect(JAM.policy.p19) {
      tempString1 = sequence$$17.substring(0, randNum$$1);
    }
    var v259 = randNum$$1 + 1;
    var v260 = sequence$$17.length;
    introspect(JAM.policy.p22) {
      tempString2 = sequence$$17.substring(v259, v260);
    }
    sequence$$17 = tempString1 + tempString2;
    var v733 = tempSeq.length;
    var v263 = v733 == 60;
    if (v263) {
      var v261 = outputWindow.document;
      var v262 = tempSeq + "\n";
      introspect(JAM.policy.p21) {
        v261.write(v262);
      }
      tempSeq = "";
    }
    var v734 = sequence$$17.length;
    v264 = v734 > 0;
  }
  var v265 = outputWindow.document;
  var v266 = tempSeq + "\n";
  introspect(JAM.policy.p21) {
    v265.write(v266);
  }
  return true;
}
function pairwiseAlignCodons(theDocument) {
  var newCodonsOne = "";
  var titleOne = "";
  var newCodonsTwo = "";
  var titleTwo = "";
  var maxInput$$3 = 6E3;
  var v735 = testScript();
  var v267 = v735 == false;
  if (v267) {
    return false;
  }
  var v1540 = theDocument.forms;
  var v1526 = v1540[0];
  var v1505 = v1526.elements;
  var v1475 = v1505[0];
  var v1402 = checkFormElement(v1475);
  var v1272 = v1402 == false;
  var v1404 = !v1272;
  if (v1404) {
    var v1551 = theDocument.forms;
    var v1541 = v1551[0];
    var v1527 = v1541.elements;
    var v1506 = v1527[0];
    var v1476 = v1506.value;
    var v1403 = checkSequenceLength(v1476, maxInput$$3);
    v1272 = v1403 == false;
  }
  var v1045 = v1272;
  var v1274 = !v1045;
  if (v1274) {
    var v1528 = theDocument.forms;
    var v1507 = v1528[0];
    var v1477 = v1507.elements;
    var v1405 = v1477[1];
    var v1273 = checkFormElement(v1405);
    v1045 = v1273 == false;
  }
  var v736 = v1045;
  var v1047 = !v736;
  if (v1047) {
    var v1529 = theDocument.forms;
    var v1508 = v1529[0];
    var v1478 = v1508.elements;
    var v1406 = v1478[1];
    var v1275 = v1406.value;
    var v1046 = checkSequenceLength(v1275, maxInput$$3);
    v736 = v1046 == false;
  }
  var v268 = v736;
  if (v268) {
    return false;
  }
  var MATRIX = "codon";
  var v1509 = theDocument.forms;
  var v1479 = v1509[0];
  var v1407 = v1479.elements;
  var v1276 = v1407[5];
  var v1048 = v1276.options;
  var v1510 = theDocument.forms;
  var v1480 = v1510[0];
  var v1408 = v1480.elements;
  var v1277 = v1408[5];
  var v1049 = v1277.selectedIndex;
  var v737 = v1048[v1049];
  var v269 = v737.value;
  var BEGIN_GAP_PENALTY = parseInt(v269);
  var v1511 = theDocument.forms;
  var v1481 = v1511[0];
  var v1409 = v1481.elements;
  var v1278 = v1409[6];
  var v1050 = v1278.options;
  var v1512 = theDocument.forms;
  var v1482 = v1512[0];
  var v1410 = v1482.elements;
  var v1279 = v1410[6];
  var v1051 = v1279.selectedIndex;
  var v738 = v1050[v1051];
  var v270 = v738.value;
  var GAP_PENALTY = parseInt(v270);
  var v1513 = theDocument.forms;
  var v1483 = v1513[0];
  var v1411 = v1483.elements;
  var v1280 = v1411[7];
  var v1052 = v1280.options;
  var v1514 = theDocument.forms;
  var v1484 = v1514[0];
  var v1412 = v1484.elements;
  var v1281 = v1412[7];
  var v1053 = v1281.selectedIndex;
  var v739 = v1052[v1053];
  var v271 = v739.value;
  var END_GAP_PENALTY = parseInt(v271);
  var v1413 = theDocument.forms;
  var v1282 = v1413[0];
  var v1054 = v1282.elements;
  var v740 = v1054[0];
  var v272 = v740.value;
  newCodonsOne = getSequenceFromFasta(v272);
  newCodonsOne = removeNonDna(newCodonsOne);
  introspect(JAM.policy.p22) {
    newCodonsOne = newCodonsOne.replace(/u/g, "t");
  }
  introspect(JAM.policy.p22) {
    newCodonsOne = newCodonsOne.replace(/U/g, "T");
  }
  newCodonsTwo = removeNonDnaStrict(newCodonsOne);
  var v1414 = theDocument.forms;
  var v1283 = v1414[0];
  var v1055 = v1283.elements;
  var v741 = v1055[0];
  var v273 = v741.value;
  titleOne = getTitleFromFasta(v273);
  var v1415 = theDocument.forms;
  var v1284 = v1415[0];
  var v1056 = v1284.elements;
  var v742 = v1056[1];
  var v274 = v742.value;
  newCodonsTwo = getSequenceFromFasta(v274);
  newCodonsTwo = removeNonDna(newCodonsTwo);
  introspect(JAM.policy.p22) {
    newCodonsTwo = newCodonsTwo.replace(/u/gi, "t");
  }
  introspect(JAM.policy.p22) {
    newCodonsTwo = newCodonsTwo.replace(/U/gi, "T");
  }
  newCodonsTwo = removeNonDnaStrict(newCodonsTwo);
  var v1416 = theDocument.forms;
  var v1285 = v1416[0];
  var v1057 = v1285.elements;
  var v743 = v1057[1];
  var v275 = v743.value;
  titleTwo = getTitleFromFasta(v275);
  var v1286 = newCodonsOne.length;
  var v1058 = v1286 % 3;
  var v744 = v1058 != 0;
  var v1060 = !v744;
  if (v1060) {
    var v1287 = newCodonsTwo.length;
    var v1059 = v1287 % 3;
    v744 = v1059 != 0;
  }
  var v277 = v744;
  if (v277) {
    var v276 = newCodonsOne.length;
    alert(v276);
    alert(newCodonsTwo);
    alert("The sequences must be evenly divisible by 3. ");
    return false;
  }
  openWindow("Pairwise Align Codons");
  openPre();
  var v278 = outputWindow.document;
  var v279 = getPairwiseAlignTitle(titleOne, newCodonsOne, titleTwo, newCodonsTwo);
  introspect(JAM.policy.p21) {
    v278.write(v279);
  }
  introspect(JAM.policy.p23) {
    var v745 = newCodonsOne.search(/.../)
  }
  var v280 = v745 != -1;
  if (v280) {
    introspect(JAM.policy.p23) {
      newCodonsOne = newCodonsOne.match(/.../g);
    }
  }
  introspect(JAM.policy.p23) {
    var v746 = newCodonsTwo.search(/.../)
  }
  var v281 = v746 != -1;
  if (v281) {
    introspect(JAM.policy.p23) {
      newCodonsTwo = newCodonsTwo.match(/.../g);
    }
  }
  pairwiseCodon(titleOne, newCodonsOne, titleTwo, newCodonsTwo, MATRIX, GAP_PENALTY, BEGIN_GAP_PENALTY, END_GAP_PENALTY);
  closePre();
  closeWindow();
  return true;
}
function pairwiseCodon(titleOne$$1, newCodonsOne$$1, titleTwo$$1, newCodonsTwo$$1, matrix, gapPenalty, beginGapPenalty, endGapPenalty) {
  var useLinearSpace = true;
  var useQuadraticSpace = false;
  var scoringMatrix;
  scoringMatrix = new Codon;
  var scoreSet = new ScoreSet;
  introspect(JAM.policy.p33) {
    scoreSet.setScoreSetParam(scoringMatrix, gapPenalty, beginGapPenalty, endGapPenalty);
  }
  var alignment;
  if (useLinearSpace) {
    alignment = new AlignPairLinear;
    introspect(JAM.policy.p33) {
      alignment.setAlignParam(newCodonsOne$$1, newCodonsTwo$$1, scoreSet);
    }
    alignment.align();
    var v282 = outputWindow.document;
    var v747 = ">" + titleOne$$1;
    var v283 = v747 + "\n";
    introspect(JAM.policy.p21) {
      v282.write(v283);
    }
    var v284 = outputWindow.document;
    var v748 = alignment.getAlignedM();
    var v285 = addReturns(v748);
    introspect(JAM.policy.p21) {
      v284.write(v285);
    }
    var v286 = outputWindow.document;
    introspect(JAM.policy.p18) {
      v286.write("\n");
    }
    var v287 = outputWindow.document;
    introspect(JAM.policy.p18) {
      v287.write("\n");
    }
    var v288 = outputWindow.document;
    var v749 = ">" + titleTwo$$1;
    var v289 = v749 + "\n";
    introspect(JAM.policy.p21) {
      v288.write(v289);
    }
    var v290 = outputWindow.document;
    var v750 = alignment.getAlignedN();
    var v291 = addReturns(v750);
    introspect(JAM.policy.p21) {
      v290.write(v291);
    }
    var v292 = outputWindow.document;
    introspect(JAM.policy.p18) {
      v292.write("\n\n");
    }
    var v293 = outputWindow.document;
    var v1061 = alignment.score;
    var v751 = "Alignment score: " + v1061;
    var v294 = v751 + "\n\n";
    introspect(JAM.policy.p21) {
      v293.write(v294);
    }
  }
  if (useQuadraticSpace) {
    alignment = new AlignPairQuad;
    introspect(JAM.policy.p33) {
      alignment.initializeMatrix(newCodonsOne$$1, newCodonsTwo$$1, scoreSet);
    }
    alignment.fillMatrix();
    alignment.align();
    var v295 = outputWindow.document;
    var v752 = ">" + titleOne$$1;
    var v296 = v752 + "\n";
    introspect(JAM.policy.p21) {
      v295.write(v296);
    }
    var v297 = outputWindow.document;
    var v753 = alignment.getAlignedM();
    var v298 = addReturns(v753);
    introspect(JAM.policy.p21) {
      v297.write(v298);
    }
    var v299 = outputWindow.document;
    introspect(JAM.policy.p18) {
      v299.write("\n");
    }
    var v300 = outputWindow.document;
    introspect(JAM.policy.p18) {
      v300.write("\n");
    }
    var v301 = outputWindow.document;
    var v754 = ">" + titleTwo$$1;
    var v302 = v754 + "\n";
    introspect(JAM.policy.p21) {
      v301.write(v302);
    }
    var v303 = outputWindow.document;
    var v755 = alignment.getAlignedN();
    var v304 = addReturns(v755);
    introspect(JAM.policy.p21) {
      v303.write(v304);
    }
    var v305 = outputWindow.document;
    introspect(JAM.policy.p18) {
      v305.write("\n\n");
    }
    var v306 = outputWindow.document;
    var v1062 = alignment.score;
    var v756 = "Alignment score: " + v1062;
    var v307 = v756 + "\n\n";
    introspect(JAM.policy.p21) {
      v306.write(v307);
    }
  }
  return;
}
function getScore(r1$$1, r2) {
  var v308 = this.scoringMatrix;
  introspect(JAM.policy.p33) {
    return v308.scoringMatrix_getScore(r1$$1, r2);
  }
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
  var v1063 = this.scoreHash;
  var v1064 = r1$$2 + r2$$1;
  var v757 = v1063[v1064];
  var v312 = v757 == null;
  if (v312) {
    var v1065 = "Unrecognized residue pair: " + r1$$2;
    var v758 = v1065 + ", ";
    var v309 = v758 + r2$$1;
    throw v309 + ".";
  } else {
    var v310 = this.scoreHash;
    var v311 = r1$$2 + r2$$1;
    return v310[v311];
  }
  return;
}
function scoringMatrix_fillHash(matrix$$1) {
  var v313 = matrix$$1[0];
  introspect(JAM.policy.p23) {
    var cols = v313.split(/\s+/)
  }
  var cells;
  var i$$11 = 1;
  var v759 = matrix$$1.length;
  var v318 = i$$11 < v759;
  for (;v318;) {
    var v314 = matrix$$1[i$$11];
    introspect(JAM.policy.p23) {
      cells = v314.split(/\s+/);
    }
    var j$$10 = 1;
    var v1066 = cols.length;
    var v760 = v1066 + 1;
    var v317 = j$$10 < v760;
    for (;v317;) {
      var v315 = this.scoreHash;
      var v1067 = cells[0];
      var v761 = v1067.toLowerCase();
      var v1288 = j$$10 - 1;
      var v1068 = cols[v1288];
      var v762 = v1068.toLowerCase();
      var v316 = v761 + v762;
      var v763 = cells[j$$10];
      var v1587 = parseInt(v763);
      introspect(JAM.policy.p6) {
        v315[v316] = v1587;
      }
      j$$10++;
      var v1069 = cols.length;
      var v764 = v1069 + 1;
      v317 = j$$10 < v764;
    }
    i$$11++;
    var v765 = matrix$$1.length;
    v318 = i$$11 < v765;
  }
  return;
}
function ScoringMatrix() {
  this.scoreHash = {};
  return;
}
function Codon() {
  var matrix$$2 = new Array("AAA  AAC  AAG  AAT  ACA  ACC  ACG  ACT  AGA  AGC  AGG  AGT  ATA  ATC  ATG  ATT  CAA  CAC  CAG  CAT  CCA  CCC  CCG  CCT  CGA  CGC  CGG  CGT  CTA  CTC  CTG  CTT  GAA  GAC  GAG  GAT  GCA  GCC  GCG  GCT  GGA  GGC  GGG  GGT  GTA  GTC  GTG  GTT  TAA  TAC  TAG  TAT  TCA  TCC  TCG  TCT  TGA  TGC  TGG  TGT  TTA  TTC  TTG  TTT", "AAA 11.6 -2.7 9.7 -1.7 -2.7 -6.4 -3.9 -5.6 5.1 -5.0 3.6 -4.2 -6.3 -13.0 -7.1 -11.5 0.4 -6.0 -1.9 -5.3 -8.5 -11.2 -8.9 -10.8 2.1 0.0 1.4 0.2 -10.2 -13.5 -13.0 -12.5 -2.6 -8.5 -5.0 -8.1 -6.3 -9.9 -7.5 -9.0 -7.1 -10.2 -8.2 -9.2 -8.2 -12.5 -11.1 -11.4 -50.0 -14.8 -50.0 -13.8 -7.3 -10.1 -8.4 -9.1 -50.0 -13.0 -13.5 -12.4 -10.7 -18.1 -11.8 -17.2", 
  "AAC -2.7 13.0 -3.3 10.9 -3.5 -0.4 -3.3 -1.8 -5.4 4.6 -5.5 3.0 -10.2 -7.9 -9.9 -9.6 -5.0 0.5 -5.5 -1.0 -10.3 -8.1 -9.4 -9.6 -8.1 -5.0 -7.3 -6.3 -13.4 -11.3 -14.4 -12.9 -6.3 0.8 -6.4 -1.1 -7.4 -5.0 -6.2 -6.5 -5.6 -1.6 -4.7 -3.0 -10.8 -8.7 -11.9 -10.0 -50.0 -6.2 -50.0 -7.5 -6.3 -4.3 -6.2 -5.4 -50.0 -7.0 -16.3 -8.2 -13.2 -12.3 -13.1 -13.3", "AAG 9.7 -3.3 11.6 -2.8 -4.5 -6.7 -3.1 -6.9 3.3 -5.5 4.8 -5.1 -8.9 -13.2 -5.7 -12.6 -1.5 -6.1 -0.6 -6.1 -10.0 -11.8 -8.6 -11.9 1.2 0.5 2.2 0.1 -11.8 -14.0 -11.9 -13.4 -4.9 -9.1 -3.4 -8.9 -8.0 -10.0 -7.2 -10.0 -9.1 -10.2 -7.1 -9.9 -10.1 -13.0 -10.6 -12.7 -50.0 -14.9 -50.0 -14.4 -8.9 -10.8 -8.9 -10.4 -50.0 -13.1 -11.8 -13.0 -12.4 -19.4 -11.5 -17.8", 
  "AAT -1.7 10.9 -2.8 12.9 -2.7 -2.2 -2.8 0.2 -4.8 2.9 -5.2 5.2 -9.1 -9.5 -9.0 -7.0 -4.0 -1.0 -5.0 1.0 -9.0 -8.8 -8.9 -7.7 -7.0 -6.8 -7.1 -4.3 -12.4 -12.9 -13.9 -10.0 -4.9 -0.7 -5.6 1.4 -6.0 -6.5 -6.2 -4.8 -5.1 -3.2 -5.0 -1.2 -9.8 -9.9 -11.3 -8.2 -50.0 -7.6 -50.0 -5.1 -5.5 -5.8 -5.9 -4.2 -50.0 -8.3 -15.5 -5.9 -11.6 -14.2 -12.0 -11.6", "ACA -2.7 -3.5 -4.5 -2.7 11.7 9.0 10.6 9.6 -3.2 -0.7 -5.1 -0.4 0.7 -4.6 -0.4 -3.6 -4.8 -8.9 -6.5 -7.8 -1.4 -4.1 -2.9 -3.3 -8.0 -9.1 -8.0 -8.2 -6.0 -9.3 -7.7 -8.5 -6.4 -10.1 -7.5 -8.6 2.8 -0.7 0.9 0.1 -5.9 -7.3 -6.5 -6.5 -0.4 -3.9 -2.6 -3.1 -50.0 -14.6 -50.0 -12.6 2.9 0.1 1.8 1.0 -50.0 -9.2 -13.6 -7.7 -4.8 -12.2 -6.2 -11.0", 
  "ACC -6.4 -0.4 -6.7 -2.2 9.0 12.3 9.8 9.6 -7.1 2.4 -7.2 0.3 -2.9 -1.2 -3.0 -3.3 -7.6 -6.7 -8.1 -7.9 -4.9 -1.9 -4.5 -3.8 -9.5 -7.8 -9.3 -8.9 -9.4 -7.1 -9.0 -9.0 -9.4 -7.5 -9.3 -9.2 -0.7 2.6 0.2 -0.1 -8.0 -4.6 -7.7 -6.1 -3.6 -1.0 -4.1 -3.1 -50.0 -11.6 -50.0 -11.6 0.2 2.3 0.4 0.5 -50.0 -6.5 -15.3 -7.8 -8.4 -9.5 -8.3 -11.1", "ACG -3.9 -3.3 -3.1 -2.8 10.6 9.8 12.2 9.8 -4.9 0.1 -3.6 -0.2 -1.7 -4.1 0.9 -3.5 -5.9 -8.9 -5.6 -8.5 -3.9 -3.9 -2.2 -4.5 -7.3 -7.5 -6.4 -8.5 -7.1 -8.2 -6.7 -7.8 -7.9 -9.1 -7.1 -9.4 0.9 -0.2 2.5 -0.3 -6.9 -6.5 -5.5 -6.8 -1.7 -3.4 -1.7 -2.8 -50.0 -13.0 -50.0 -11.5 1.5 0.7 2.7 0.6 -50.0 -8.9 -12.1 -7.4 -6.1 -11.5 -5.4 -10.4", 
  "ACT -5.6 -1.8 -6.9 0.2 9.6 9.6 9.8 11.6 -6.6 0.9 -7.2 2.5 -2.3 -3.4 -2.3 -0.6 -6.5 -8.2 -8.0 -6.3 -3.7 -3.5 -3.9 -1.6 -9.9 -8.9 -9.6 -7.0 -8.6 -8.9 -8.8 -6.8 -8.6 -8.2 -8.8 -6.8 0.3 0.1 0.2 2.4 -7.4 -6.2 -6.9 -4.4 -2.9 -2.9 -3.5 -0.9 -50.0 -12.2 -50.0 -10.1 1.2 0.6 1.2 2.4 -50.0 -7.6 -16.1 -5.8 -7.2 -10.8 -7.4 -9.0", "AGA 5.1 -5.4 3.3 -4.8 -3.2 -7.1 -4.9 -6.6 13.3 -2.8 11.2 -1.9 -5.7 -12.5 -7.2 -11.6 -0.7 -4.8 -3.1 -4.3 -10.0 -11.6 -8.8 -11.7 10.5 7.7 9.1 8.5 -9.8 -12.7 -11.7 -11.8 -6.3 -11.4 -8.8 -11.0 -7.5 -10.3 -8.3 -9.9 -1.9 -6.7 -4.1 -6.4 -7.9 -12.5 -11.4 -11.7 -50.0 -14.0 -50.0 -13.2 -8.5 -10.4 -9.1 -9.6 -50.0 -9.8 -7.7 -8.8 -10.3 -17.9 -11.8 -16.0", 
  "AGC -5.0 4.6 -5.5 2.9 -0.7 2.4 0.1 0.9 -2.8 12.8 -2.6 11.0 -8.4 -6.3 -8.3 -7.7 -6.1 -2.9 -6.5 -4.2 -8.5 -5.9 -7.5 -7.7 -5.5 -2.4 -5.5 -4.1 -12.9 -10.3 -12.7 -11.3 -7.4 -3.1 -7.4 -4.9 -4.4 -1.8 -3.5 -3.5 -1.6 3.0 -0.8 0.9 -8.4 -6.3 -9.6 -7.3 -50.0 -9.0 -50.0 -9.7 -2.3 -0.2 -1.2 -1.5 -50.0 -0.7 -13.3 -2.0 -11.8 -11.9 -12.3 -12.7", "AGG 3.6 -5.5 4.8 -5.2 -5.1 -7.2 -3.6 -7.2 11.2 -2.6 13.4 -2.1 -7.7 -12.5 -5.3 -11.9 -2.2 -4.4 -1.9 -4.8 -10.2 -11.5 -8.1 -12.0 9.3 8.2 10.0 8.0 -10.8 -11.9 -10.7 -12.4 -8.2 -11.8 -6.9 -11.5 -8.4 -9.9 -7.1 -10.6 -4.7 -6.8 -1.2 -7.0 -9.8 -11.6 -9.6 -12.1 -50.0 -14.1 -50.0 -12.7 -10.0 -10.8 -8.8 -10.5 -50.0 -9.2 -4.2 -9.3 -11.0 -18.2 -11.1 -16.1", 
  "AGT -4.2 3.0 -5.1 5.2 -0.4 0.3 -0.2 2.5 -1.9 11.0 -2.1 13.2 -7.6 -8.5 -8.0 -5.3 -5.6 -4.5 -6.8 -2.4 -7.8 -7.9 -7.9 -6.2 -5.7 -5.1 -5.4 -2.1 -12.4 -12.3 -13.1 -10.1 -6.6 -4.4 -6.9 -2.6 -3.6 -3.8 -3.7 -2.0 -1.4 0.8 -0.9 3.0 -8.2 -8.1 -9.2 -5.8 -50.0 -10.1 -50.0 -7.4 -1.7 -2.0 -1.5 -0.5 -50.0 -2.1 -12.6 -0.4 -11.6 -13.9 -11.4 -11.1", "ATA -6.3 -10.2 -8.9 -9.1 0.7 -2.9 -1.7 -2.3 -5.7 -8.4 -7.7 -7.6 13.2 9.6 3.5 9.7 -8.7 -12.4 -10.7 -10.7 -7.8 -10.2 -8.8 -9.6 -9.5 -11.9 -10.9 -10.5 2.3 -0.4 -0.2 -0.3 -9.7 -15.5 -11.4 -13.7 -3.0 -6.4 -4.1 -5.4 -9.6 -11.9 -10.5 -11.8 6.2 3.3 3.7 3.6 -50.0 -13.6 -50.0 -11.9 -5.6 -8.8 -7.2 -8.9 -50.0 -12.4 -14.1 -11.6 2.8 -6.4 0.5 -5.2", 
  "ATC -13.0 -7.9 -13.2 -9.5 -4.6 -1.2 -4.1 -3.4 -12.5 -6.3 -12.5 -8.5 9.6 12.7 0.2 10.5 -12.4 -11.6 -13.2 -12.0 -12.4 -10.1 -11.6 -12.0 -15.1 -13.1 -14.3 -13.4 -1.4 1.4 -1.6 -0.5 -14.9 -14.3 -15.2 -16.8 -7.7 -4.7 -6.3 -6.6 -14.6 -10.8 -12.8 -13.0 2.3 6.0 2.5 3.6 -50.0 -11.2 -50.0 -11.9 -10.5 -9.2 -10.5 -10.5 -50.0 -10.3 -16.2 -11.3 -1.7 -3.7 -2.5 -5.4", "ATG -7.1 -9.9 -5.7 -9.0 -0.4 -3.0 0.9 -2.3 -7.2 -8.3 -5.3 -8.0 3.5 0.2 14.3 1.0 -7.3 -11.2 -6.9 -9.7 -8.5 -10.2 -7.7 -9.8 -10.0 -10.4 -8.4 -10.2 1.0 -0.6 1.7 -0.5 -11.1 -14.8 -9.7 -14.5 -3.7 -5.8 -3.1 -5.6 -10.4 -11.5 -8.2 -11.1 0.6 -1.6 1.6 -1.1 -50.0 -12.4 -50.0 -11.5 -5.5 -8.0 -4.9 -7.2 -50.0 -12.4 -10.3 -11.6 0.7 -6.8 2.4 -6.0", 
  "ATT -11.5 -9.6 -12.6 -7.0 -3.6 -3.3 -3.5 -0.6 -11.6 -7.7 -11.9 -5.3 9.7 10.5 1.0 12.6 -12.0 -12.2 -12.5 -9.7 -11.1 -11.2 -11.9 -9.4 -12.9 -14.3 -14.0 -11.9 -1.0 -0.4 -1.6 1.2 -13.9 -15.4 -13.7 -12.6 -6.2 -6.7 -6.3 -4.4 -13.0 -12.2 -13.0 -10.4 2.9 3.8 2.5 5.8 -50.0 -12.5 -50.0 -10.2 -9.6 -9.7 -9.6 -8.3 -50.0 -11.6 -15.4 -9.4 -1.1 -5.4 -1.6 -3.3", "CAA 0.4 -5.0 -1.5 -4.0 -4.8 -7.6 -5.9 -6.5 -0.7 -6.1 -2.2 -5.6 -8.7 -12.4 -7.3 -12.0 12.8 2.3 10.2 3.0 0.0 -3.4 -0.7 -3.2 2.5 -0.8 0.9 0.2 -3.0 -7.2 -5.7 -6.1 -0.2 -6.6 -1.8 -6.0 -5.3 -8.2 -5.7 -7.6 -6.7 -9.6 -7.5 -9.3 -7.1 -10.5 -9.6 -9.4 -50.0 -8.1 -50.0 -7.2 -4.3 -6.8 -5.7 -6.3 -50.0 -9.5 -9.6 -8.9 -6.2 -12.8 -6.8 -11.8", 
  "CAC -6.0 0.5 -6.1 -1.0 -8.9 -6.7 -8.9 -8.2 -4.8 -2.9 -4.4 -4.5 -12.4 -11.6 -11.2 -12.2 2.3 14.6 1.9 12.9 -5.5 -2.6 -4.1 -4.7 -1.2 3.0 -1.1 1.6 -8.0 -4.7 -8.7 -6.0 -8.2 -4.7 -7.8 -6.7 -10.0 -8.3 -8.9 -9.9 -10.8 -7.1 -10.0 -9.2 -11.6 -10.1 -12.3 -11.9 -50.0 2.2 -50.0 0.9 -7.9 -5.9 -7.4 -6.9 -50.0 -4.6 -11.6 -5.6 -9.7 -5.9 -9.9 -7.3", "CAG -1.9 -5.5 -0.6 -5.0 -6.5 -8.1 -5.6 -8.0 -3.1 -6.5 -1.9 -6.8 -10.7 -13.2 -6.9 -12.5 10.2 1.9 11.9 2.1 -2.3 -4.1 -0.5 -4.6 -0.1 -0.9 2.4 -0.8 -5.1 -6.9 -4.8 -6.7 -2.3 -7.1 -0.8 -7.2 -7.2 -8.0 -5.6 -8.5 -9.4 -9.7 -7.2 -9.8 -9.2 -11.1 -9.5 -10.7 -50.0 -8.7 -50.0 -8.6 -6.1 -7.5 -5.5 -7.7 -50.0 -10.4 -7.7 -10.0 -7.3 -13.6 -6.4 -13.3", 
  "CAT -5.3 -1.0 -6.1 1.0 -7.8 -7.9 -8.5 -6.3 -4.3 -4.2 -4.8 -2.4 -10.7 -12.0 -9.7 -9.7 3.0 12.9 2.1 14.7 -4.9 -3.8 -4.0 -2.4 -1.0 0.8 -1.3 3.4 -7.6 -5.7 -8.1 -3.5 -6.8 -5.8 -7.2 -4.2 -8.9 -10.2 -8.4 -8.2 -9.9 -8.4 -9.7 -6.4 -11.1 -11.1 -11.8 -10.0 -50.0 0.4 -50.0 2.6 -7.2 -7.0 -7.4 -5.1 -50.0 -5.7 -9.8 -3.2 -8.4 -7.4 -8.9 -5.9", "CCA -8.5 -10.3 -10.0 -9.0 -1.4 -4.9 -3.9 -3.7 -10.0 -8.5 -10.2 -7.8 -7.8 -12.4 -8.5 -11.1 0.0 -5.5 -2.3 -4.9 12.6 10.0 11.1 10.5 -6.0 -8.3 -6.9 -7.5 -2.2 -7.4 -5.3 -5.9 -8.9 -12.5 -9.4 -11.6 -0.7 -3.9 -2.3 -3.0 -9.1 -9.8 -9.2 -9.5 -5.6 -9.0 -8.0 -8.5 -50.0 -15.3 -50.0 -14.1 2.3 -1.4 0.3 -0.5 -50.0 -13.6 -14.3 -11.5 -5.3 -13.7 -6.1 -12.7", 
  "CCC -11.2 -8.1 -11.8 -8.8 -4.1 -1.9 -3.9 -3.5 -11.6 -5.9 -11.5 -7.9 -10.2 -10.1 -10.2 -11.2 -3.4 -2.6 -4.1 -3.8 10.0 13.1 10.7 10.6 -8.1 -5.2 -8.0 -6.7 -6.1 -3.7 -7.5 -5.6 -11.1 -10.3 -10.6 -11.9 -3.2 -1.0 -2.2 -2.8 -10.5 -8.1 -9.4 -9.5 -8.3 -6.9 -9.4 -8.8 -50.0 -11.3 -50.0 -12.8 -0.6 2.2 -0.3 0.1 -50.0 -10.1 -17.5 -11.1 -8.6 -9.9 -8.6 -11.9", "CCG -8.9 -9.4 -8.6 -8.9 -2.9 -4.5 -2.2 -3.9 -8.8 -7.5 -8.1 -7.9 -8.8 -11.6 -7.7 -11.9 -0.7 -4.1 -0.5 -4.0 11.1 10.7 13.2 10.4 -5.7 -5.8 -3.5 -6.1 -3.6 -6.5 -3.3 -5.5 -9.4 -11.0 -8.7 -11.2 -1.8 -2.7 0.7 -3.0 -9.1 -8.2 -7.3 -9.4 -7.2 -8.2 -7.2 -8.2 -50.0 -13.2 -50.0 -13.3 0.5 -0.9 1.8 -0.6 -50.0 -11.4 -11.1 -10.5 -6.1 -12.9 -5.0 -11.9", 
  "CCT -10.8 -9.6 -11.9 -7.7 -3.3 -3.8 -4.5 -1.6 -11.7 -7.7 -12.0 -6.2 -9.6 -12.0 -9.8 -9.4 -3.2 -4.7 -4.6 -2.4 10.5 10.6 10.4 12.6 -8.2 -7.9 -9.0 -4.7 -6.1 -6.0 -7.5 -2.9 -10.9 -12.2 -11.2 -10.9 -2.4 -2.9 -2.7 -0.9 -10.4 -9.7 -10.2 -8.0 -8.4 -9.1 -9.3 -6.5 -50.0 -13.3 -50.0 -11.0 -0.0 -0.4 -0.4 2.3 -50.0 -10.9 -17.2 -8.3 -8.3 -12.7 -7.8 -9.3", "CGA 2.1 -8.1 1.2 -7.0 -8.0 -9.5 -7.3 -9.9 10.5 -5.5 9.3 -5.7 -9.5 -15.1 -10.0 -12.9 2.5 -1.2 -0.1 -1.0 -6.0 -8.1 -5.7 -8.2 13.8 11.3 11.8 12.1 -6.0 -9.1 -9.0 -9.5 -8.9 -13.4 -10.0 -13.1 -9.9 -11.7 -9.8 -12.8 -5.9 -9.4 -6.5 -8.1 -10.7 -14.0 -13.3 -13.9 -50.0 -11.9 -50.0 -9.7 -8.9 -10.8 -9.0 -11.1 -50.0 -6.5 -5.3 -6.3 -10.5 -16.2 -10.4 -15.2", 
  "CGC 0.0 -5.0 0.5 -6.8 -9.1 -7.8 -7.5 -8.9 7.7 -2.4 8.2 -5.1 -11.9 -13.1 -10.4 -14.3 -0.8 3.0 -0.9 0.8 -8.3 -5.2 -5.8 -7.9 11.3 15.0 11.2 12.8 -9.7 -5.3 -9.2 -7.8 -11.7 -10.6 -10.1 -12.2 -11.7 -8.8 -8.9 -11.8 -9.3 -5.0 -8.0 -8.2 -13.6 -11.4 -12.8 -13.0 -50.0 -7.2 -50.0 -8.4 -11.0 -7.7 -8.7 -10.2 -50.0 -1.5 -7.1 -4.9 -11.2 -11.6 -11.6 -15.0", "CGG 1.4 -7.3 2.2 -7.1 -8.0 -9.3 -6.4 -9.6 9.1 -5.5 10.0 -5.4 -10.9 -14.3 -8.4 -14.0 0.9 -1.1 2.4 -1.3 -6.9 -8.0 -3.5 -9.0 11.8 11.2 13.4 11.4 -7.3 -8.8 -6.5 -8.5 -10.0 -12.5 -7.8 -12.5 -9.6 -11.0 -7.1 -10.7 -7.9 -8.0 -4.3 -9.4 -11.4 -12.3 -10.9 -12.9 -50.0 -11.8 -50.0 -11.2 -9.4 -9.8 -7.3 -10.5 -50.0 -6.2 -2.2 -6.7 -9.8 -15.2 -8.5 -14.9", 
  "CGT 0.2 -6.3 0.1 -4.3 -8.2 -8.9 -8.5 -7.0 8.5 -4.1 8.0 -2.1 -10.5 -13.4 -10.2 -11.9 0.2 1.6 -0.8 3.4 -7.5 -6.7 -6.1 -4.7 12.1 12.8 11.4 14.7 -8.7 -7.4 -9.4 -5.3 -9.9 -11.8 -10.5 -10.3 -9.9 -10.1 -9.3 -9.3 -8.1 -7.2 -8.0 -5.2 -12.0 -12.1 -12.6 -10.9 -50.0 -7.9 -50.0 -5.3 -9.3 -8.8 -8.9 -7.0 -50.0 -3.6 -7.1 -1.2 -10.2 -12.7 -9.9 -11.0", "CTA -10.2 -13.4 -11.8 -12.4 -6.0 -9.4 -7.1 -8.6 -9.8 -12.9 -10.8 -12.4 2.3 -1.4 1.0 -1.0 -3.0 -8.0 -5.1 -7.6 -2.2 -6.1 -3.6 -6.1 -6.0 -9.7 -7.3 -8.7 11.2 7.9 8.9 8.1 -12.1 -17.4 -13.2 -16.8 -6.3 -9.5 -7.5 -8.8 -12.7 -15.2 -13.1 -14.2 0.0 -3.1 -1.8 -3.1 -50.0 -10.7 -50.0 -9.3 -4.6 -8.9 -5.9 -8.3 -50.0 -12.8 -9.6 -10.6 9.5 -3.2 8.2 -2.8", 
  "CTC -13.5 -11.3 -14.0 -12.9 -9.3 -7.1 -8.2 -8.9 -12.7 -10.3 -11.9 -12.3 -0.4 1.4 -0.6 -0.4 -7.2 -4.7 -6.9 -5.7 -7.4 -3.7 -6.5 -6.0 -9.1 -5.3 -8.8 -7.4 7.9 11.9 7.8 9.3 -15.2 -15.1 -14.6 -17.2 -9.7 -7.3 -8.2 -9.2 -15.0 -12.8 -14.1 -14.9 -2.8 0.2 -2.9 -2.3 -50.0 -7.4 -50.0 -8.7 -9.4 -7.3 -9.4 -9.4 -50.0 -8.0 -11.9 -9.7 6.5 0.5 6.4 -1.8", "CTG -13.0 -14.4 -11.9 -13.9 -7.7 -9.0 -6.7 -8.8 -11.7 -12.7 -10.7 -13.1 -0.2 -1.6 1.7 -1.6 -5.7 -8.7 -4.8 -8.1 -5.3 -7.5 -3.3 -7.5 -9.0 -9.2 -6.5 -9.4 8.9 7.8 10.1 7.8 -14.3 -17.7 -13.0 -17.8 -8.0 -9.4 -6.2 -9.2 -15.1 -14.9 -12.2 -14.9 -1.8 -3.2 -0.8 -3.2 -50.0 -10.8 -50.0 -9.9 -7.3 -9.6 -6.4 -9.4 -50.0 -12.3 -8.7 -11.3 7.6 -3.3 8.7 -2.9", 
  "CTT -12.5 -12.9 -13.4 -10.0 -8.5 -9.0 -7.8 -6.8 -11.8 -11.3 -12.4 -10.1 -0.3 -0.5 -0.5 1.2 -6.1 -6.0 -6.7 -3.5 -5.9 -5.6 -5.5 -2.9 -9.5 -7.8 -8.5 -5.3 8.1 9.3 7.8 11.8 -14.4 -15.7 -14.5 -14.6 -8.4 -8.7 -7.9 -7.1 -14.3 -13.8 -13.8 -12.3 -2.4 -2.2 -2.9 -0.2 -50.0 -8.9 -50.0 -7.1 -8.1 -9.1 -8.7 -6.6 -50.0 -9.7 -11.4 -8.0 6.8 -1.8 6.9 0.4", "GAA -2.6 -6.3 -4.9 -4.9 -6.4 -9.4 -7.9 -8.6 -6.3 -7.4 -8.2 -6.6 -9.7 -14.9 -11.1 -13.9 -0.2 -8.2 -2.3 -6.8 -8.9 -11.1 -9.4 -10.9 -8.9 -11.7 -10.0 -9.9 -12.1 -15.2 -14.3 -14.4 11.1 2.9 9.2 3.5 -3.0 -7.0 -4.3 -6.2 -2.2 -6.6 -3.7 -5.7 -6.0 -10.4 -8.6 -9.5 -50.0 -15.5 -50.0 -13.9 -7.8 -10.5 -8.7 -9.6 -50.0 -16.5 -17.1 -14.8 -12.1 -18.9 -12.4 -17.4", 
  "GAC -8.5 0.8 -9.1 -0.7 -10.1 -7.5 -9.1 -8.2 -11.4 -3.1 -11.8 -4.4 -15.5 -14.3 -14.8 -15.4 -6.6 -4.7 -7.1 -5.8 -12.5 -10.3 -11.0 -12.2 -13.4 -10.6 -12.5 -11.8 -17.4 -15.1 -17.7 -15.7 2.9 12.5 3.1 10.3 -7.7 -5.2 -6.2 -7.3 -5.4 -1.7 -5.4 -3.7 -11.6 -9.1 -13.0 -10.8 -50.0 -10.3 -50.0 -11.2 -9.8 -8.3 -9.1 -9.7 -50.0 -12.7 -20.6 -13.1 -16.0 -16.6 -17.0 -18.4", "GAG -5.0 -6.4 -3.4 -5.6 -7.5 -9.3 -7.1 -8.8 -8.8 -7.4 -6.9 -6.9 -11.4 -15.2 -9.7 -13.7 -1.8 -7.8 -0.8 -7.2 -9.4 -10.6 -8.7 -11.2 -10.0 -10.1 -7.8 -10.5 -13.2 -14.6 -13.0 -14.5 9.2 3.1 10.8 3.0 -4.5 -6.7 -2.7 -6.7 -5.0 -6.8 -2.5 -6.7 -7.5 -10.4 -7.4 -10.2 -50.0 -15.5 -50.0 -14.2 -8.9 -10.2 -8.5 -10.0 -50.0 -15.6 -15.3 -15.5 -13.0 -18.8 -12.6 -18.3", 
  "GAT -8.1 -1.1 -8.9 1.4 -8.6 -9.2 -9.4 -6.8 -11.0 -4.9 -11.5 -2.6 -13.7 -16.8 -14.5 -12.6 -6.0 -6.7 -7.2 -4.2 -11.6 -11.9 -11.2 -10.9 -13.1 -12.2 -12.5 -10.3 -16.8 -17.2 -17.8 -14.6 3.5 10.3 3.0 12.4 -6.9 -7.5 -6.8 -4.9 -5.4 -4.2 -5.4 -1.3 -10.8 -11.5 -12.4 -8.2 -50.0 -12.5 -50.0 -8.9 -9.2 -10.0 -9.4 -7.9 -50.0 -14.3 -19.9 -11.4 -16.2 -19.2 -15.8 -15.9", "GCA -6.3 -7.4 -8.0 -6.0 2.8 -0.7 0.9 0.3 -7.5 -4.4 -8.4 -3.6 -3.0 -7.7 -3.7 -6.2 -5.3 -10.0 -7.2 -8.9 -0.7 -3.2 -1.8 -2.4 -9.9 -11.7 -9.6 -9.9 -6.3 -9.7 -8.0 -8.4 -3.0 -7.7 -4.5 -6.9 11.3 8.2 9.4 9.1 -1.0 -3.3 -1.8 -2.4 1.5 -2.1 -0.4 -1.1 -50.0 -14.5 -50.0 -12.9 2.8 -0.0 1.4 0.7 -50.0 -8.7 -14.1 -7.5 -5.2 -12.5 -6.5 -10.7", 
  "GCC -9.9 -5.0 -10.0 -6.5 -0.7 2.6 -0.2 0.1 -10.3 -1.8 -9.9 -3.8 -6.4 -4.7 -5.8 -6.7 -8.2 -8.3 -8.0 -10.2 -3.9 -1.0 -2.7 -2.9 -11.7 -8.8 -11.0 -10.1 -9.5 -7.3 -9.4 -8.7 -7.0 -5.2 -6.7 -7.5 8.2 11.6 8.8 9.1 -3.7 -0.9 -3.1 -3.0 -2.0 1.2 -2.3 -1.3 -50.0 -12.1 -50.0 -12.6 0.1 2.5 0.7 0.6 -50.0 -6.0 -14.8 -7.5 -8.6 -9.4 -8.5 -11.2", "GCG -7.5 -6.2 -7.2 -6.2 0.9 0.2 2.5 0.2 -8.3 -3.5 -7.1 -3.7 -4.1 -6.3 -3.1 -6.3 -5.7 -8.9 -5.6 -8.4 -2.3 -2.2 0.7 -2.7 -9.8 -8.9 -7.1 -9.3 -7.5 -8.2 -6.2 -7.9 -4.3 -6.2 -2.7 -6.8 9.4 8.8 12.1 8.8 -2.1 -2.0 0.1 -2.4 0.0 -1.1 1.3 -0.8 -50.0 -11.9 -50.0 -12.6 1.2 0.7 3.5 0.8 -50.0 -7.1 -12.4 -7.1 -7.1 -10.6 -5.0 -10.6", 
  "GCT -9.0 -6.5 -10.0 -4.8 0.1 -0.1 -0.3 2.4 -9.9 -3.5 -10.6 -2.0 -5.4 -6.6 -5.6 -4.4 -7.6 -9.9 -8.5 -8.2 -3.0 -2.8 -3.0 -0.9 -12.8 -11.8 -10.7 -9.3 -8.8 -9.2 -9.2 -7.1 -6.2 -7.3 -6.7 -4.9 9.1 9.1 8.8 11.2 -3.1 -3.0 -3.3 -1.0 -1.1 -1.4 -2.0 1.2 -50.0 -12.8 -50.0 -10.9 0.8 0.5 0.7 2.3 -50.0 -7.5 -16.5 -5.9 -7.8 -11.1 -7.8 -9.0", "GGA -7.1 -5.6 -9.1 -5.1 -5.9 -8.0 -6.9 -7.4 -1.9 -1.6 -4.7 -1.4 -9.6 -14.6 -10.4 -13.0 -6.7 -10.8 -9.4 -9.9 -9.1 -10.5 -9.1 -10.4 -5.9 -9.3 -7.9 -8.1 -12.7 -15.0 -15.1 -14.3 -2.2 -5.4 -5.0 -5.4 -1.0 -3.7 -2.1 -3.1 12.8 9.6 11.1 10.1 -4.8 -9.4 -8.1 -8.6 -50.0 -18.3 -50.0 -15.4 -5.9 -7.5 -6.6 -7.1 -50.0 -9.5 -11.7 -8.4 -12.5 -17.3 -13.2 -15.4", 
  "GGC -10.2 -1.6 -10.2 -3.2 -7.3 -4.6 -6.5 -6.2 -6.7 3.0 -6.8 0.8 -11.9 -10.8 -11.5 -12.2 -9.6 -7.1 -9.7 -8.4 -9.8 -8.1 -8.2 -9.7 -9.4 -5.0 -8.0 -7.2 -15.2 -12.8 -14.9 -13.8 -6.6 -1.7 -6.8 -4.2 -3.3 -0.9 -2.0 -3.0 9.6 12.8 9.7 10.5 -8.5 -5.6 -9.3 -7.8 -50.0 -12.7 -50.0 -13.8 -6.8 -5.1 -5.3 -6.5 -50.0 -4.1 -12.8 -5.8 -14.4 -14.1 -13.6 -14.8", "GGG -8.2 -4.7 -7.1 -5.0 -6.5 -7.7 -5.5 -6.9 -4.1 -0.8 -1.2 -0.9 -10.5 -12.8 -8.2 -13.0 -7.5 -10.0 -7.2 -9.7 -9.2 -9.4 -7.3 -10.2 -6.5 -8.0 -4.3 -8.0 -13.1 -14.1 -12.2 -13.8 -3.7 -5.4 -2.5 -5.4 -1.8 -3.1 0.1 -3.3 11.1 9.7 12.9 9.8 -5.5 -8.1 -5.4 -7.8 -50.0 -16.4 -50.0 -14.8 -5.9 -7.1 -4.7 -7.2 -50.0 -8.4 -6.4 -8.1 -12.1 -16.2 -10.3 -15.8", 
  "GGT -9.2 -3.0 -9.9 -1.2 -6.5 -6.1 -6.8 -4.4 -6.4 0.9 -7.0 3.0 -11.8 -13.0 -11.1 -10.4 -9.3 -9.2 -9.8 -6.4 -9.5 -9.5 -9.4 -8.0 -8.1 -8.2 -9.4 -5.2 -14.2 -14.9 -14.9 -12.3 -5.7 -3.7 -6.7 -1.3 -2.4 -3.0 -2.4 -1.0 10.1 10.5 9.8 13.1 -7.2 -8.0 -8.4 -5.0 -50.0 -14.7 -50.0 -11.4 -6.3 -6.7 -5.8 -5.0 -50.0 -6.1 -13.4 -3.6 -13.0 -16.0 -13.7 -13.3", "GTA -8.2 -10.8 -10.1 -9.8 -0.4 -3.6 -1.7 -2.9 -7.9 -8.4 -9.8 -8.2 6.2 2.3 0.6 2.9 -7.1 -11.6 -9.2 -11.1 -5.6 -8.3 -7.2 -8.4 -10.7 -13.6 -11.4 -12.0 0.0 -2.8 -1.8 -2.4 -6.0 -11.6 -7.5 -10.8 1.5 -2.0 0.0 -1.1 -4.8 -8.5 -5.5 -7.2 11.9 8.6 10.0 9.0 -50.0 -14.2 -50.0 -12.8 -4.1 -7.4 -5.7 -6.5 -50.0 -11.0 -14.3 -9.9 1.4 -7.9 -0.7 -6.8", 
  "GTC -12.5 -8.7 -13.0 -9.9 -3.9 -1.0 -3.4 -2.9 -12.5 -6.3 -11.6 -8.1 3.3 6.0 -1.6 3.8 -10.5 -10.1 -11.1 -11.1 -9.0 -6.9 -8.2 -9.1 -14.0 -11.4 -12.3 -12.1 -3.1 0.2 -3.2 -2.2 -10.4 -9.1 -10.4 -11.5 -2.1 1.2 -1.1 -1.4 -9.4 -5.6 -8.1 -8.0 8.6 12.4 8.6 9.5 -50.0 -10.4 -50.0 -11.6 -7.2 -5.7 -7.5 -7.4 -50.0 -8.6 -15.7 -9.7 -3.0 -3.7 -3.2 -5.9", "GTG -11.1 -11.9 -10.6 -11.3 -2.6 -4.1 -1.7 -3.5 -11.4 -9.6 -9.6 -9.2 3.7 2.5 1.6 2.5 -9.6 -12.3 -9.5 -11.8 -8.0 -9.4 -7.2 -9.3 -13.3 -12.8 -10.9 -12.6 -1.8 -2.9 -0.8 -2.9 -8.6 -13.0 -7.4 -12.4 -0.4 -2.3 1.3 -2.0 -8.1 -9.3 -5.4 -8.4 10.0 8.6 11.4 8.9 -50.0 -13.7 -50.0 -13.2 -6.1 -8.1 -5.5 -7.5 -50.0 -11.3 -12.7 -10.1 -1.6 -7.8 -0.3 -7.2", 
  "GTT -11.4 -10.0 -12.7 -8.2 -3.1 -3.1 -2.8 -0.9 -11.7 -7.3 -12.1 -5.8 3.6 3.6 -1.1 5.8 -9.4 -11.9 -10.7 -10.0 -8.5 -8.8 -8.2 -6.5 -13.9 -13.0 -12.9 -10.9 -3.1 -2.3 -3.2 -0.2 -9.5 -10.8 -10.2 -8.2 -1.1 -1.3 -0.8 1.2 -8.6 -7.8 -7.8 -5.0 9.0 9.5 8.9 12.0 -50.0 -13.0 -50.0 -10.3 -6.2 -7.0 -7.1 -5.4 -50.0 -9.3 -14.0 -8.2 -2.4 -6.3 -2.4 -3.9", "TAA -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 33.3 -50.0 30.6 -50.0 -50.0 -50.0 -50.0 -50.0 29.2 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0", 
  "TAC -14.8 -6.2 -14.9 -7.6 -14.6 -11.6 -13.0 -12.2 -14.0 -9.0 -14.1 -10.1 -13.6 -11.2 -12.4 -12.5 -8.1 2.2 -8.7 0.4 -15.3 -11.3 -13.2 -13.3 -11.9 -7.2 -11.8 -7.9 -10.7 -7.4 -10.8 -8.9 -15.5 -10.3 -15.5 -12.5 -14.5 -12.1 -11.9 -12.8 -18.3 -12.7 -16.4 -14.7 -14.2 -10.4 -13.7 -13.0 -50.0 15.1 -50.0 13.3 -9.9 -5.8 -8.9 -7.6 -50.0 -1.5 -7.8 -3.0 -8.1 3.6 -9.4 2.0", "TAG -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 30.6 -50.0 35.2 -50.0 -50.0 -50.0 -50.0 -50.0 28.5 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0", 
  "TAT -13.8 -7.5 -14.4 -5.1 -12.6 -11.6 -11.5 -10.1 -13.2 -9.7 -12.7 -7.4 -11.9 -11.9 -11.5 -10.2 -7.2 0.9 -8.6 2.6 -14.1 -12.8 -13.3 -11.0 -9.7 -8.4 -11.2 -5.3 -9.3 -8.7 -9.9 -7.1 -13.9 -11.2 -14.2 -8.9 -12.9 -12.6 -12.6 -10.9 -15.4 -13.8 -14.8 -11.4 -12.8 -11.6 -13.2 -10.3 -50.0 13.3 -50.0 15.2 -8.6 -7.0 -8.4 -4.8 -50.0 -3.0 -7.1 -0.1 -7.3 2.3 -8.7 3.9", "TCA -7.3 -6.3 -8.9 -5.5 2.9 0.2 1.5 1.2 -8.5 -2.3 -10.0 -1.7 -5.6 -10.5 -5.5 -9.6 -4.3 -7.9 -6.1 -7.2 2.3 -0.6 0.5 -0.0 -8.9 -11.0 -9.4 -9.3 -4.6 -9.4 -7.3 -8.1 -7.8 -9.8 -8.9 -9.2 2.8 0.1 1.2 0.8 -5.9 -6.8 -5.9 -6.3 -4.1 -7.2 -6.1 -6.2 -50.0 -9.9 -50.0 -8.6 12.5 9.4 11.0 9.8 -50.0 -4.8 -8.7 -3.5 -0.0 -8.6 -2.1 -7.0", 
  "TCC -10.1 -4.3 -10.8 -5.8 0.1 2.3 0.7 0.6 -10.4 -0.2 -10.8 -2.0 -8.8 -9.2 -8.0 -9.7 -6.8 -5.9 -7.5 -7.0 -1.4 2.2 -0.9 -0.4 -10.8 -7.7 -9.8 -8.8 -8.9 -7.3 -9.6 -9.1 -10.5 -8.3 -10.2 -10.0 -0.0 2.5 0.7 0.5 -7.5 -5.1 -7.1 -6.7 -7.4 -5.7 -8.1 -7.0 -50.0 -5.8 -50.0 -7.0 9.4 12.7 10.1 10.0 -50.0 -1.5 -11.3 -3.3 -5.4 -4.2 -5.6 -6.8", "TCG -8.4 -6.2 -8.9 -5.9 1.8 0.4 2.7 1.2 -9.1 -1.2 -8.8 -1.5 -7.2 -10.5 -4.9 -9.6 -5.7 -7.4 -5.5 -7.4 0.3 -0.3 1.8 -0.4 -9.0 -8.7 -7.3 -8.9 -5.9 -9.4 -6.4 -8.7 -8.7 -9.1 -8.5 -9.4 1.4 0.7 3.5 0.7 -6.6 -5.3 -4.7 -5.8 -5.7 -7.5 -5.5 -7.1 -50.0 -8.9 -50.0 -8.4 11.0 10.1 13.2 10.2 -50.0 -4.2 -6.1 -3.6 -3.5 -8.4 -1.2 -6.8", 
  "TCT -9.1 -5.4 -10.4 -4.2 1.0 0.5 0.6 2.4 -9.6 -1.5 -10.5 -0.5 -8.9 -10.5 -7.2 -8.3 -6.3 -6.9 -7.7 -5.1 -0.5 0.1 -0.6 2.3 -11.1 -10.2 -10.5 -7.0 -8.3 -9.4 -9.4 -6.6 -9.6 -9.7 -10.0 -7.9 0.7 0.6 0.8 2.3 -7.1 -6.5 -7.2 -5.0 -6.5 -7.4 -7.5 -5.4 -50.0 -7.6 -50.0 -4.8 9.8 10.0 10.2 12.1 -50.0 -3.1 -11.4 -0.7 -4.6 -6.6 -4.9 -3.9", "TGA -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 29.2 -50.0 28.5 -50.0 -50.0 -50.0 -50.0 -50.0 33.3 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0", 
  "TGC -13.0 -7.0 -13.1 -8.3 -9.2 -6.5 -8.9 -7.6 -9.8 -0.7 -9.2 -2.1 -12.4 -10.3 -12.4 -11.6 -9.5 -4.6 -10.4 -5.7 -13.6 -10.1 -11.4 -10.9 -6.5 -1.5 -6.2 -3.6 -12.8 -8.0 -12.3 -9.7 -16.5 -12.7 -15.6 -14.3 -8.7 -6.0 -7.1 -7.5 -9.5 -4.1 -8.4 -6.1 -11.0 -8.6 -11.3 -9.3 -50.0 -1.5 -50.0 -3.0 -4.8 -1.5 -4.2 -3.1 -50.0 16.4 -5.1 14.2 -10.1 -4.3 -10.0 -5.4", "TGG -13.5 -16.3 -11.8 -15.5 -13.6 -15.3 -12.1 -16.1 -7.7 -13.3 -4.2 -12.6 -14.1 -16.2 -10.3 -15.4 -9.6 -11.6 -7.7 -9.8 -14.3 -17.5 -11.1 -17.2 -5.3 -7.1 -2.2 -7.1 -9.6 -11.9 -8.7 -11.4 -17.1 -20.6 -15.3 -19.9 -14.1 -14.8 -12.4 -16.5 -11.7 -12.8 -6.4 -13.4 -14.3 -15.7 -12.7 -14.0 -50.0 -7.8 -50.0 -7.1 -8.7 -11.3 -6.1 -11.4 -50.0 -5.1 18.6 -4.8 -8.6 -8.1 -4.5 -7.3", 
  "TGT -12.4 -8.2 -13.0 -5.9 -7.7 -7.8 -7.4 -5.8 -8.8 -2.0 -9.3 -0.4 -11.6 -11.3 -11.6 -9.4 -8.9 -5.6 -10.0 -3.2 -11.5 -11.1 -10.5 -8.3 -6.3 -4.9 -6.7 -1.2 -10.6 -9.7 -11.3 -8.0 -14.8 -13.1 -15.5 -11.4 -7.5 -7.5 -7.1 -5.9 -8.4 -5.8 -8.1 -3.6 -9.9 -9.7 -10.1 -8.2 -50.0 -3.0 -50.0 -0.1 -3.5 -3.3 -3.6 -0.7 -50.0 14.2 -4.8 16.4 -8.9 -5.8 -8.9 -3.4", "TTA -10.7 -13.2 -12.4 -11.6 -4.8 -8.4 -6.1 -7.2 -10.3 -11.8 -11.0 -11.6 2.8 -1.7 0.7 -1.1 -6.2 -9.7 -7.3 -8.4 -5.3 -8.6 -6.1 -8.3 -10.5 -11.2 -9.8 -10.2 9.5 6.5 7.6 6.8 -12.1 -16.0 -13.0 -16.2 -5.2 -8.6 -7.1 -7.8 -12.5 -14.4 -12.1 -13.0 1.4 -3.0 -1.6 -2.4 -50.0 -8.1 -50.0 -7.3 -0.0 -5.4 -3.5 -4.6 -50.0 -10.1 -8.6 -8.9 13.2 -0.9 9.7 -0.3", 
  "TTC -18.1 -12.3 -19.4 -14.2 -12.2 -9.5 -11.5 -10.8 -17.9 -11.9 -18.2 -13.9 -6.4 -3.7 -6.8 -5.4 -12.8 -5.9 -13.6 -7.4 -13.7 -9.9 -12.9 -12.7 -16.2 -11.6 -15.2 -12.7 -3.2 0.5 -3.3 -1.8 -18.9 -16.6 -18.8 -19.2 -12.5 -9.4 -10.6 -11.1 -17.3 -14.1 -16.2 -16.0 -7.9 -3.7 -7.8 -6.3 -50.0 3.6 -50.0 2.3 -8.6 -4.2 -8.4 -6.6 -50.0 -4.3 -8.1 -5.8 -0.9 14.2 -1.8 11.6", "TTG -11.8 -13.1 -11.5 -12.0 -6.2 -8.3 -5.4 -7.4 -11.8 -12.3 -11.1 -11.4 0.5 -2.5 2.4 -1.6 -6.8 -9.9 -6.4 -8.9 -6.1 -8.6 -5.0 -7.8 -10.4 -11.6 -8.5 -9.9 8.2 6.4 8.7 6.9 -12.4 -17.0 -12.6 -15.8 -6.5 -8.5 -5.0 -7.8 -13.2 -13.6 -10.3 -13.7 -0.7 -3.2 -0.3 -2.4 -50.0 -9.4 -50.0 -8.7 -2.1 -5.6 -1.2 -4.9 -50.0 -10.0 -4.5 -8.9 9.7 -1.8 11.3 -0.9", 
  "TTT -17.2 -13.3 -17.8 -11.6 -11.0 -11.1 -10.4 -9.0 -16.0 -12.7 -16.1 -11.1 -5.2 -5.4 -6.0 -3.3 -11.8 -7.3 -13.3 -5.9 -12.7 -11.9 -11.9 -9.3 -15.2 -15.0 -14.9 -11.0 -2.8 -1.8 -2.9 0.4 -17.4 -18.4 -18.3 -15.9 -10.7 -11.2 -10.6 -9.0 -15.4 -14.8 -15.8 -13.3 -6.8 -5.9 -7.2 -3.9 -50.0 2.0 -50.0 3.9 -7.0 -6.8 -6.8 -3.9 -50.0 -5.4 -7.3 -3.4 -0.3 11.6 -0.9 14.1");
  introspect(JAM.policy.p21) {
    this.scoringMatrix_fillHash(matrix$$2);
  }
  return;
}
function align() {
  var v1070 = this.M;
  var v766 = v1070.length;
  var v335 = v766 == 0;
  if (v335) {
    var j$$11 = 1;
    var v1071 = this.N;
    var v767 = v1071.length;
    var v324 = j$$11 <= v767;
    for (;v324;) {
      var v319 = this.alignedM;
      introspect(JAM.policy.p18) {
        v319.push(".--");
      }
      var v320 = this.alignedN;
      var v768 = this.N;
      var v769 = j$$11 - 1;
      var v321 = v768[v769];
      introspect(JAM.policy.p21) {
        v320.push(v321);
      }
      var v322 = this.score;
      var v770 = this.scoreSet;
      var v323 = v770.gap;
      this.score = v322 + v323;
      j$$11++;
      var v1072 = this.N;
      var v771 = v1072.length;
      v324 = j$$11 <= v771;
    }
  } else {
    var v1073 = this.N;
    var v772 = v1073.length;
    var v334 = v772 == 0;
    if (v334) {
      j$$11 = 1;
      var v1074 = this.M;
      var v773 = v1074.length;
      var v330 = j$$11 <= v773;
      for (;v330;) {
        var v325 = this.alignedN;
        introspect(JAM.policy.p18) {
          v325.push(".--");
        }
        var v326 = this.alignedM;
        var v774 = this.M;
        var v775 = j$$11 - 1;
        var v327 = v774[v775];
        introspect(JAM.policy.p21) {
          v326.push(v327);
        }
        var v328 = this.score;
        var v776 = this.scoreSet;
        var v329 = v776.gap;
        this.score = v328 + v329;
        j$$11++;
        var v1075 = this.M;
        var v777 = v1075.length;
        v330 = j$$11 <= v777;
      }
    } else {
      var v1289 = this.M;
      var v1076 = v1289.length;
      var v778 = v1076 == 0;
      if (v778) {
        var v1290 = this.N;
        var v1077 = v1290.length;
        v778 = v1077 == 0;
      }
      var v333 = v778;
      if (v333) {
      } else {
        var v779 = this.M;
        var v331 = v779.length;
        var v780 = this.N;
        var v332 = v780.length;
        introspect(JAM.policy.p19) {
          this.path(0, 0, v331, v332);
        }
      }
    }
  }
  return;
}
function path(i1, j1, i2, j2) {
  var v1078 = i1 + 1;
  var v781 = v1078 == i2;
  var v1079 = !v781;
  if (v1079) {
    v781 = j1 == j2;
  }
  var v432 = v781;
  if (v432) {
    var subM = new Array;
    var subN = new Array;
    var i$$12 = i1 + 1;
    var v337 = i$$12 <= i2;
    for (;v337;) {
      var v782 = this.M;
      var v783 = i$$12 - 1;
      var v336 = v782[v783];
      introspect(JAM.policy.p21) {
        subM.push(v336);
      }
      i$$12++;
      v337 = i$$12 <= i2;
    }
    var j$$12 = j1 + 1;
    var v339 = j$$12 <= j2;
    for (;v339;) {
      var v784 = this.N;
      var v785 = j$$12 - 1;
      var v338 = v784[v785];
      introspect(JAM.policy.p21) {
        subN.push(v338);
      }
      j$$12++;
      v339 = j$$12 <= j2;
    }
    var alignment$$1 = new AlignPairQuad;
    subScoreSet = new ScoreSet;
    var v362 = j1 == j2;
    if (v362) {
      var v353 = j1 == 0;
      if (v353) {
        var v786 = this.scoreSet;
        var v340 = v786.scoringMatrix;
        var v787 = this.scoreSet;
        var v341 = v787.beginGap;
        var v788 = this.scoreSet;
        var v342 = v788.beginGap;
        var v789 = this.scoreSet;
        var v343 = v789.beginGap;
        introspect(JAM.policy.p33) {
          subScoreSet.setScoreSetParam(v340, v341, v342, v343);
        }
      } else {
        var v1080 = this.N;
        var v790 = v1080.length;
        var v352 = j1 == v790;
        if (v352) {
          var v791 = this.scoreSet;
          var v344 = v791.scoringMatrix;
          var v792 = this.scoreSet;
          var v345 = v792.endGap;
          var v793 = this.scoreSet;
          var v346 = v793.endGap;
          var v794 = this.scoreSet;
          var v347 = v794.endGap;
          introspect(JAM.policy.p33) {
            subScoreSet.setScoreSetParam(v344, v345, v346, v347);
          }
        } else {
          var v795 = this.scoreSet;
          var v348 = v795.scoringMatrix;
          var v796 = this.scoreSet;
          var v349 = v796.gap;
          var v797 = this.scoreSet;
          var v350 = v797.gap;
          var v798 = this.scoreSet;
          var v351 = v798.gap;
          introspect(JAM.policy.p33) {
            subScoreSet.setScoreSetParam(v348, v349, v350, v351);
          }
        }
      }
    } else {
      var v799 = this.scoreSet;
      var v354 = v799.scoringMatrix;
      var v800 = this.scoreSet;
      var v355 = v800.gap;
      var v801 = this.scoreSet;
      var v356 = v801.beginGap;
      var v802 = this.scoreSet;
      var v357 = v802.endGap;
      introspect(JAM.policy.p33) {
        subScoreSet.setScoreSetParam(v354, v355, v356, v357);
      }
      subScoreSet.useBeginGapTop = false;
      subScoreSet.useBeginGapLeft = false;
      subScoreSet.useEndGapBottom = false;
      subScoreSet.useEndGapRight = false;
      var v358 = i1 == 0;
      if (v358) {
        subScoreSet.useBeginGapTop = true;
      }
      var v359 = j1 == 0;
      if (v359) {
        subScoreSet.useBeginGapLeft = true;
      }
      var v1081 = this.N;
      var v803 = v1081.length;
      var v360 = j2 == v803;
      if (v360) {
        subScoreSet.useEndGapRight = true;
      }
      var v1082 = this.M;
      var v804 = v1082.length;
      var v361 = i2 == v804;
      if (v361) {
        subScoreSet.useEndGapBottom = true;
      }
    }
    introspect(JAM.policy.p33) {
      alignment$$1.initializeMatrix(subM, subN, subScoreSet);
    }
    alignment$$1.fillMatrix();
    alignment$$1.align();
    var v363 = this.alignedM;
    var v364 = alignment$$1.getAlignedM();
    introspect(JAM.policy.p21) {
      v363.push(v364);
    }
    var v365 = this.alignedN;
    var v366 = alignment$$1.getAlignedN();
    introspect(JAM.policy.p21) {
      v365.push(v366);
    }
    var v367 = this.score;
    var v368 = alignment$$1.score;
    this.score = v367 + v368;
  } else {
    var v805 = i1 + i2;
    var v369 = v805 / 2;
    introspect(JAM.policy.p21) {
      var middle = Math.floor(v369)
    }
    var v370 = this.Sn;
    introspect(JAM.policy.p6) {
      v370[j1] = 0;
    }
    var v375 = i1 == 0;
    if (v375) {
      j$$12 = j1 + 1;
      var v372 = j$$12 <= j2;
      for (;v372;) {
        var v371 = this.Sn;
        var v1083 = this.Sn;
        var v1084 = j$$12 - 1;
        var v806 = v1083[v1084];
        var v1085 = this.scoreSet;
        var v807 = v1085.beginGap;
        introspect(JAM.policy.p6) {
          v371[j$$12] = v806 - v807;
        }
        j$$12++;
        v372 = j$$12 <= j2;
      }
    } else {
      j$$12 = j1 + 1;
      var v374 = j$$12 <= j2;
      for (;v374;) {
        var v373 = this.Sn;
        var v1086 = this.Sn;
        var v1087 = j$$12 - 1;
        var v808 = v1086[v1087];
        var v1088 = this.scoreSet;
        var v809 = v1088.gap;
        introspect(JAM.policy.p6) {
          v373[j$$12] = v808 - v809;
        }
        j$$12++;
        v374 = j$$12 <= j2;
      }
    }
    var diag;
    var left$$1;
    i$$12 = i1 + 1;
    var v397 = i$$12 <= middle;
    for (;v397;) {
      var v376 = this.Sn;
      diag = v376[j1];
      var v381 = j1 == 0;
      if (v381) {
        var v810 = this.Sn;
        var v377 = v810[j1];
        var v811 = this.scoreSet;
        var v378 = v811.beginGap;
        left$$1 = v377 - v378;
      } else {
        var v812 = this.Sn;
        var v379 = v812[j1];
        var v813 = this.scoreSet;
        var v380 = v813.gap;
        left$$1 = v379 - v380;
      }
      var v382 = this.Sn;
      introspect(JAM.policy.p6) {
        v382[j1] = left$$1;
      }
      j$$12 = j1 + 1;
      var v396 = j$$12 <= j2;
      for (;v396;) {
        var v1291 = this.N;
        var v1089 = v1291.length;
        var v814 = j$$12 == v1089;
        if (v814) {
          var v1292 = this.M;
          var v1090 = v1292.length;
          v814 = i$$12 == v1090;
        }
        var v393 = v814;
        if (v393) {
          var v1091 = this.Sn;
          var v815 = v1091[j$$12];
          var v1092 = this.scoreSet;
          var v816 = v1092.endGap;
          var v383 = v815 - v816;
          var v1293 = this.scoreSet;
          var v1093 = v1293.endGap;
          var v817 = left$$1 - v1093;
          var v1294 = this.scoreSet;
          var v1417 = this.M;
          var v1418 = i$$12 - 1;
          var v1295 = v1417[v1418];
          var v1419 = this.N;
          var v1420 = j$$12 - 1;
          var v1296 = v1419[v1420];
          introspect(JAM.policy.p33) {
            var v1094 = v1294.getScore(v1295, v1296)
          }
          var v818 = diag + v1094;
          introspect(JAM.policy.p33) {
            var v384 = Math.max(v817, v818)
          }
          introspect(JAM.policy.p22) {
            left$$1 = Math.max(v383, v384);
          }
        } else {
          var v1095 = this.M;
          var v819 = v1095.length;
          var v392 = i$$12 == v819;
          if (v392) {
            var v1096 = this.Sn;
            var v820 = v1096[j$$12];
            var v1097 = this.scoreSet;
            var v821 = v1097.gap;
            var v385 = v820 - v821;
            var v1297 = this.scoreSet;
            var v1098 = v1297.endGap;
            var v822 = left$$1 - v1098;
            var v1298 = this.scoreSet;
            var v1421 = this.M;
            var v1422 = i$$12 - 1;
            var v1299 = v1421[v1422];
            var v1423 = this.N;
            var v1424 = j$$12 - 1;
            var v1300 = v1423[v1424];
            introspect(JAM.policy.p33) {
              var v1099 = v1298.getScore(v1299, v1300)
            }
            var v823 = diag + v1099;
            introspect(JAM.policy.p33) {
              var v386 = Math.max(v822, v823)
            }
            introspect(JAM.policy.p22) {
              left$$1 = Math.max(v385, v386);
            }
          } else {
            var v1100 = this.N;
            var v824 = v1100.length;
            var v391 = j$$12 == v824;
            if (v391) {
              var v1101 = this.Sn;
              var v825 = v1101[j$$12];
              var v1102 = this.scoreSet;
              var v826 = v1102.endGap;
              var v387 = v825 - v826;
              var v1301 = this.scoreSet;
              var v1103 = v1301.gap;
              var v827 = left$$1 - v1103;
              var v1302 = this.scoreSet;
              var v1425 = this.M;
              var v1426 = i$$12 - 1;
              var v1303 = v1425[v1426];
              var v1427 = this.N;
              var v1428 = j$$12 - 1;
              var v1304 = v1427[v1428];
              introspect(JAM.policy.p33) {
                var v1104 = v1302.getScore(v1303, v1304)
              }
              var v828 = diag + v1104;
              introspect(JAM.policy.p33) {
                var v388 = Math.max(v827, v828)
              }
              introspect(JAM.policy.p22) {
                left$$1 = Math.max(v387, v388);
              }
            } else {
              var v1105 = this.Sn;
              var v829 = v1105[j$$12];
              var v1106 = this.scoreSet;
              var v830 = v1106.gap;
              var v389 = v829 - v830;
              var v1305 = this.scoreSet;
              var v1107 = v1305.gap;
              var v831 = left$$1 - v1107;
              var v1306 = this.scoreSet;
              var v1429 = this.M;
              var v1430 = i$$12 - 1;
              var v1307 = v1429[v1430];
              var v1431 = this.N;
              var v1432 = j$$12 - 1;
              var v1308 = v1431[v1432];
              introspect(JAM.policy.p33) {
                var v1108 = v1306.getScore(v1307, v1308)
              }
              var v832 = diag + v1108;
              introspect(JAM.policy.p33) {
                var v390 = Math.max(v831, v832)
              }
              introspect(JAM.policy.p22) {
                left$$1 = Math.max(v389, v390);
              }
            }
          }
        }
        var v394 = this.Sn;
        diag = v394[j$$12];
        var v395 = this.Sn;
        introspect(JAM.policy.p6) {
          v395[j$$12] = left$$1;
        }
        j$$12++;
        v396 = j$$12 <= j2;
      }
      i$$12++;
      v397 = i$$12 <= middle;
    }
    var v398 = this.Sp;
    introspect(JAM.policy.p6) {
      v398[j2] = 0;
    }
    var v1109 = this.M;
    var v833 = v1109.length;
    var v403 = i2 == v833;
    if (v403) {
      j$$12 = j2 - 1;
      var v400 = j$$12 >= j1;
      for (;v400;) {
        var v399 = this.Sp;
        var v1110 = this.Sp;
        var v1111 = j$$12 + 1;
        var v834 = v1110[v1111];
        var v1112 = this.scoreSet;
        var v835 = v1112.endGap;
        introspect(JAM.policy.p6) {
          v399[j$$12] = v834 - v835;
        }
        j$$12--;
        v400 = j$$12 >= j1;
      }
    } else {
      j$$12 = j2 - 1;
      var v402 = j$$12 >= j1;
      for (;v402;) {
        var v401 = this.Sp;
        var v1113 = this.Sp;
        var v1114 = j$$12 + 1;
        var v836 = v1113[v1114];
        var v1115 = this.scoreSet;
        var v837 = v1115.gap;
        introspect(JAM.policy.p6) {
          v401[j$$12] = v836 - v837;
        }
        j$$12--;
        v402 = j$$12 >= j1;
      }
    }
    var right$$1;
    i$$12 = i2 - 1;
    var v425 = i$$12 >= middle;
    for (;v425;) {
      var v404 = this.Sp;
      diag = v404[j2];
      var v1116 = this.N;
      var v838 = v1116.length;
      var v409 = j2 == v838;
      if (v409) {
        var v839 = this.Sp;
        var v405 = v839[j2];
        var v840 = this.scoreSet;
        var v406 = v840.endGap;
        right$$1 = v405 - v406;
      } else {
        var v841 = this.Sp;
        var v407 = v841[j2];
        var v842 = this.scoreSet;
        var v408 = v842.gap;
        right$$1 = v407 - v408;
      }
      var v410 = this.Sp;
      introspect(JAM.policy.p6) {
        v410[j2] = right$$1;
      }
      j$$12 = j2 - 1;
      var v424 = j$$12 >= j1;
      for (;v424;) {
        var v843 = j$$12 == 0;
        if (v843) {
          v843 = i$$12 == 0;
        }
        var v421 = v843;
        if (v421) {
          var v1117 = this.Sp;
          var v844 = v1117[j$$12];
          var v1118 = this.scoreSet;
          var v845 = v1118.beginGap;
          var v411 = v844 - v845;
          var v1309 = this.scoreSet;
          var v1119 = v1309.beginGap;
          var v846 = right$$1 - v1119;
          var v1310 = this.scoreSet;
          var v1433 = this.M;
          var v1485 = i$$12 + 1;
          var v1434 = v1485 - 1;
          var v1311 = v1433[v1434];
          var v1435 = this.N;
          var v1486 = j$$12 + 1;
          var v1436 = v1486 - 1;
          var v1312 = v1435[v1436];
          introspect(JAM.policy.p33) {
            var v1120 = v1310.getScore(v1311, v1312)
          }
          var v847 = diag + v1120;
          introspect(JAM.policy.p33) {
            var v412 = Math.max(v846, v847)
          }
          introspect(JAM.policy.p22) {
            right$$1 = Math.max(v411, v412);
          }
        } else {
          var v420 = j$$12 == 0;
          if (v420) {
            var v1121 = this.Sp;
            var v848 = v1121[j$$12];
            var v1122 = this.scoreSet;
            var v849 = v1122.beginGap;
            var v413 = v848 - v849;
            var v1313 = this.scoreSet;
            var v1123 = v1313.gap;
            var v850 = right$$1 - v1123;
            var v1314 = this.scoreSet;
            var v1437 = this.M;
            var v1487 = i$$12 + 1;
            var v1438 = v1487 - 1;
            var v1315 = v1437[v1438];
            var v1439 = this.N;
            var v1488 = j$$12 + 1;
            var v1440 = v1488 - 1;
            var v1316 = v1439[v1440];
            introspect(JAM.policy.p33) {
              var v1124 = v1314.getScore(v1315, v1316)
            }
            var v851 = diag + v1124;
            introspect(JAM.policy.p33) {
              var v414 = Math.max(v850, v851)
            }
            introspect(JAM.policy.p22) {
              right$$1 = Math.max(v413, v414);
            }
          } else {
            var v419 = i$$12 == 0;
            if (v419) {
              var v1125 = this.Sp;
              var v852 = v1125[j$$12];
              var v1126 = this.scoreSet;
              var v853 = v1126.gap;
              var v415 = v852 - v853;
              var v1317 = this.scoreSet;
              var v1127 = v1317.beginGap;
              var v854 = right$$1 - v1127;
              var v1318 = this.scoreSet;
              var v1441 = this.M;
              var v1489 = i$$12 + 1;
              var v1442 = v1489 - 1;
              var v1319 = v1441[v1442];
              var v1443 = this.N;
              var v1490 = j$$12 + 1;
              var v1444 = v1490 - 1;
              var v1320 = v1443[v1444];
              introspect(JAM.policy.p33) {
                var v1128 = v1318.getScore(v1319, v1320)
              }
              var v855 = diag + v1128;
              introspect(JAM.policy.p33) {
                var v416 = Math.max(v854, v855)
              }
              introspect(JAM.policy.p22) {
                right$$1 = Math.max(v415, v416);
              }
            } else {
              var v1129 = this.Sp;
              var v856 = v1129[j$$12];
              var v1130 = this.scoreSet;
              var v857 = v1130.gap;
              var v417 = v856 - v857;
              var v1321 = this.scoreSet;
              var v1131 = v1321.gap;
              var v858 = right$$1 - v1131;
              var v1322 = this.scoreSet;
              var v1445 = this.M;
              var v1491 = i$$12 + 1;
              var v1446 = v1491 - 1;
              var v1323 = v1445[v1446];
              var v1447 = this.N;
              var v1492 = j$$12 + 1;
              var v1448 = v1492 - 1;
              var v1324 = v1447[v1448];
              introspect(JAM.policy.p33) {
                var v1132 = v1322.getScore(v1323, v1324)
              }
              var v859 = diag + v1132;
              introspect(JAM.policy.p33) {
                var v418 = Math.max(v858, v859)
              }
              introspect(JAM.policy.p22) {
                right$$1 = Math.max(v417, v418);
              }
            }
          }
        }
        var v422 = this.Sp;
        diag = v422[j$$12];
        var v423 = this.Sp;
        introspect(JAM.policy.p6) {
          v423[j$$12] = right$$1;
        }
        j$$12--;
        v424 = j$$12 >= j1;
      }
      i$$12--;
      v425 = i$$12 >= middle;
    }
    var v860 = this.Sn;
    var v426 = v860[j1];
    var v861 = this.Sp;
    var v427 = v861[j1];
    var maxValue = v426 + v427;
    var maxJ = j1;
    j$$12 = j1 + 1;
    var v431 = j$$12 <= j2;
    for (;v431;) {
      var v1325 = this.Sn;
      var v1133 = v1325[j$$12];
      var v1326 = this.Sp;
      var v1134 = v1326[j$$12];
      var v862 = v1133 + v1134;
      var v430 = v862 >= maxValue;
      if (v430) {
        var v863 = this.Sn;
        var v428 = v863[j$$12];
        var v864 = this.Sp;
        var v429 = v864[j$$12];
        maxValue = v428 + v429;
        maxJ = j$$12;
      }
      j$$12++;
      v431 = j$$12 <= j2;
    }
    introspect(JAM.policy.p33) {
      this.path(i1, j1, middle, maxJ);
    }
    introspect(JAM.policy.p22) {
      this.path(middle, maxJ, i2, j2);
    }
  }
  return;
}
function getAlignedM() {
  var v433 = this.alignedM;
  introspect(JAM.policy.p18) {
    return v433.join("");
  }
}
function getAlignedN() {
  var v434 = this.alignedN;
  introspect(JAM.policy.p18) {
    return v434.join("");
  }
}
function setAlignParam(M, N, scoreSet$$1) {
  this.M = M;
  this.N = N;
  var v1588 = new Array;
  this.alignedM = v1588;
  var v1589 = new Array;
  this.alignedN = v1589;
  this.scoreSet = scoreSet$$1;
  var v865 = this.N;
  var v435 = v865.length;
  var v1590 = new Array(v435);
  this.Sn = v1590;
  var v866 = this.N;
  var v436 = v866.length;
  var v1591 = new Array(v436);
  this.Sp = v1591;
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
  var v1135 = this.M;
  var v867 = v1135.length;
  var v437 = v867 + 1;
  var v1592 = new Array(v437);
  this.nodes = v1592;
  var i$$13 = 0;
  var v1136 = this.nodes;
  var v868 = v1136.length;
  var v441 = i$$13 < v868;
  for (;v441;) {
    var v438 = this.nodes;
    var v1327 = this.N;
    var v1137 = v1327.length;
    var v869 = v1137 + 1;
    var v1593 = new Array(v869);
    v438[i$$13] = v1593;
    var j$$13 = 0;
    var v1328 = this.nodes;
    var v1138 = v1328[i$$13];
    var v870 = v1138.length;
    var v440 = j$$13 < v870;
    for (;v440;) {
      var v871 = this.nodes;
      var v439 = v871[i$$13];
      var v1594 = new Node;
      v439[j$$13] = v1594;
      j$$13++;
      var v1329 = this.nodes;
      var v1139 = v1329[i$$13];
      var v872 = v1139.length;
      v440 = j$$13 < v872;
    }
    i$$13++;
    var v1140 = this.nodes;
    var v873 = v1140.length;
    v441 = i$$13 < v873;
  }
  var v1141 = this.nodes;
  var v874 = v1141[0];
  var v442 = v874[0];
  v442.value = 0;
  i$$13 = 1;
  var v1142 = this.nodes;
  var v875 = v1142.length;
  var v448 = i$$13 < v875;
  for (;v448;) {
    var v876 = this.scoreSet;
    var v445 = v876.useBeginGapLeft;
    if (v445) {
      var v1143 = this.nodes;
      var v877 = v1143[i$$13];
      var v443 = v877[0];
      var v1449 = this.nodes;
      var v1450 = i$$13 - 1;
      var v1330 = v1449[v1450];
      var v1144 = v1330[0];
      var v878 = v1144.value;
      var v1145 = this.scoreSet;
      var v879 = v1145.beginGap;
      v443.value = v878 - v879;
    } else {
      var v1146 = this.nodes;
      var v880 = v1146[i$$13];
      var v444 = v880[0];
      var v1451 = this.nodes;
      var v1452 = i$$13 - 1;
      var v1331 = v1451[v1452];
      var v1147 = v1331[0];
      var v881 = v1147.value;
      var v1148 = this.scoreSet;
      var v882 = v1148.gap;
      v444.value = v881 - v882;
    }
    var v1149 = this.nodes;
    var v883 = v1149[i$$13];
    var v446 = v883[0];
    v446.tracebackI = i$$13 - 1;
    var v1150 = this.nodes;
    var v884 = v1150[i$$13];
    var v447 = v884[0];
    v447.tracebackJ = 0;
    i$$13++;
    var v1151 = this.nodes;
    var v885 = v1151.length;
    v448 = i$$13 < v885;
  }
  j$$13 = 1;
  var v1332 = this.nodes;
  var v1152 = v1332[0];
  var v886 = v1152.length;
  var v454 = j$$13 < v886;
  for (;v454;) {
    var v887 = this.scoreSet;
    var v451 = v887.useBeginGapTop;
    if (v451) {
      var v1153 = this.nodes;
      var v888 = v1153[0];
      var v449 = v888[j$$13];
      var v1453 = this.nodes;
      var v1333 = v1453[0];
      var v1334 = j$$13 - 1;
      var v1154 = v1333[v1334];
      var v889 = v1154.value;
      var v1155 = this.scoreSet;
      var v890 = v1155.beginGap;
      v449.value = v889 - v890;
    } else {
      var v1156 = this.nodes;
      var v891 = v1156[0];
      var v450 = v891[j$$13];
      var v1454 = this.nodes;
      var v1335 = v1454[0];
      var v1336 = j$$13 - 1;
      var v1157 = v1335[v1336];
      var v892 = v1157.value;
      var v1158 = this.scoreSet;
      var v893 = v1158.gap;
      v450.value = v892 - v893;
    }
    var v1159 = this.nodes;
    var v894 = v1159[0];
    var v452 = v894[j$$13];
    v452.tracebackI = 0;
    var v1160 = this.nodes;
    var v895 = v1160[0];
    var v453 = v895[j$$13];
    v453.tracebackJ = j$$13 - 1;
    j$$13++;
    var v1337 = this.nodes;
    var v1161 = v1337[0];
    var v896 = v1161.length;
    v454 = j$$13 < v896;
  }
  return;
}
function dumpMatrix() {
  var v455 = outputWindow.document;
  var v1455 = this.nodes;
  var v1338 = v1455.length;
  var v1162 = "Dynamic programming matrix i=" + v1338;
  var v897 = v1162 + " and j=";
  var v1339 = this.nodes;
  var v1163 = v1339[0];
  var v898 = v1163.length;
  var v456 = v897 + v898;
  introspect(JAM.policy.p21) {
    v455.write(v456);
  }
  var v457 = outputWindow.document;
  introspect(JAM.policy.p18) {
    v457.write("\n");
  }
  var i$$14 = 0;
  var v1164 = this.nodes;
  var v899 = v1164.length;
  var v468 = i$$14 < v899;
  for (;v468;) {
    var j$$14 = 0;
    var v1340 = this.nodes;
    var v1165 = v1340[i$$14];
    var v900 = v1165.length;
    var v466 = j$$14 < v900;
    for (;v466;) {
      var v1166 = this.nodes;
      var v901 = v1166[i$$14];
      var v458 = v901[j$$14];
      var traceI = v458.tracebackI;
      var v1167 = this.nodes;
      var v902 = v1167[i$$14];
      var v459 = v902[j$$14];
      var traceJ = v459.tracebackJ;
      var v460 = traceI == undefined;
      if (v460) {
        traceI = "u";
      }
      var v461 = traceJ == undefined;
      if (v461) {
        traceJ = "u";
      }
      var v1530 = "(" + i$$14;
      var v1515 = v1530 + ",";
      var v1493 = v1515 + j$$14;
      var v1456 = v1493 + ")[";
      var v1341 = v1456 + traceI;
      var v1168 = v1341 + ",";
      var v903 = v1168 + traceJ;
      var v462 = v903 + "]=";
      var v1342 = this.nodes;
      var v1169 = v1342[i$$14];
      var v904 = v1169[j$$14];
      var v463 = v904.value;
      var output = v462 + v463;
      var v464 = outputWindow.document;
      var v465 = rightNum(output, "", 20, " ");
      introspect(JAM.policy.p21) {
        v464.write(v465);
      }
      j$$14++;
      var v1343 = this.nodes;
      var v1170 = v1343[i$$14];
      var v905 = v1170.length;
      v466 = j$$14 < v905;
    }
    var v467 = outputWindow.document;
    introspect(JAM.policy.p18) {
      v467.write("\n");
    }
    i$$14++;
    var v1171 = this.nodes;
    var v906 = v1171.length;
    v468 = i$$14 < v906;
  }
  var v469 = outputWindow.document;
  introspect(JAM.policy.p18) {
    v469.write("\n");
  }
  return;
}
function fillMatrix() {
  var i$$15 = 1;
  var v1172 = this.nodes;
  var v907 = v1172.length;
  var v515 = i$$15 < v907;
  for (;v515;) {
    var j$$15 = 1;
    var v1344 = this.nodes;
    var v1173 = v1344[0];
    var v908 = v1173.length;
    var v514 = j$$15 < v908;
    for (;v514;) {
      var a;
      var b;
      var c;
      var v1457 = this.nodes;
      var v1345 = v1457.length;
      var v1174 = v1345 - 1;
      var v909 = i$$15 == v1174;
      if (v909) {
        var v1494 = this.nodes;
        var v1458 = v1494[0];
        var v1346 = v1458.length;
        var v1175 = v1346 - 1;
        v909 = j$$15 == v1175;
      }
      var v500 = v909;
      if (v500) {
        var v910 = this.scoreSet;
        var v474 = v910.useEndGapRight;
        if (v474) {
          var v1347 = this.nodes;
          var v1348 = i$$15 - 1;
          var v1176 = v1347[v1348];
          var v911 = v1176[j$$15];
          var v470 = v911.value;
          var v912 = this.scoreSet;
          var v471 = v912.endGap;
          a = v470 - v471;
        } else {
          var v1349 = this.nodes;
          var v1350 = i$$15 - 1;
          var v1177 = v1349[v1350];
          var v913 = v1177[j$$15];
          var v472 = v913.value;
          var v914 = this.scoreSet;
          var v473 = v914.gap;
          a = v472 - v473;
        }
        var v915 = this.scoreSet;
        var v479 = v915.useEndGapBottom;
        if (v479) {
          var v1351 = this.nodes;
          var v1178 = v1351[i$$15];
          var v1179 = j$$15 - 1;
          var v916 = v1178[v1179];
          var v475 = v916.value;
          var v917 = this.scoreSet;
          var v476 = v917.endGap;
          b = v475 - v476;
        } else {
          var v1352 = this.nodes;
          var v1180 = v1352[i$$15];
          var v1181 = j$$15 - 1;
          var v918 = v1180[v1181];
          var v477 = v918.value;
          var v919 = this.scoreSet;
          var v478 = v919.gap;
          b = v477 - v478;
        }
      } else {
        var v1353 = this.nodes;
        var v1182 = v1353.length;
        var v920 = v1182 - 1;
        var v499 = i$$15 == v920;
        if (v499) {
          var v1354 = this.nodes;
          var v1355 = i$$15 - 1;
          var v1183 = v1354[v1355];
          var v921 = v1183[j$$15];
          var v480 = v921.value;
          var v922 = this.scoreSet;
          var v481 = v922.gap;
          a = v480 - v481;
          var v923 = this.scoreSet;
          var v486 = v923.useEndGapBottom;
          if (v486) {
            var v1356 = this.nodes;
            var v1184 = v1356[i$$15];
            var v1185 = j$$15 - 1;
            var v924 = v1184[v1185];
            var v482 = v924.value;
            var v925 = this.scoreSet;
            var v483 = v925.endGap;
            b = v482 - v483;
          } else {
            var v1357 = this.nodes;
            var v1186 = v1357[i$$15];
            var v1187 = j$$15 - 1;
            var v926 = v1186[v1187];
            var v484 = v926.value;
            var v927 = this.scoreSet;
            var v485 = v927.gap;
            b = v484 - v485;
          }
        } else {
          var v1459 = this.nodes;
          var v1358 = v1459[0];
          var v1188 = v1358.length;
          var v928 = v1188 - 1;
          var v498 = j$$15 == v928;
          if (v498) {
            var v929 = this.scoreSet;
            var v491 = v929.useEndGapRight;
            if (v491) {
              var v1359 = this.nodes;
              var v1360 = i$$15 - 1;
              var v1189 = v1359[v1360];
              var v930 = v1189[j$$15];
              var v487 = v930.value;
              var v931 = this.scoreSet;
              var v488 = v931.endGap;
              a = v487 - v488;
            } else {
              var v1361 = this.nodes;
              var v1362 = i$$15 - 1;
              var v1190 = v1361[v1362];
              var v932 = v1190[j$$15];
              var v489 = v932.value;
              var v933 = this.scoreSet;
              var v490 = v933.gap;
              a = v489 - v490;
            }
            var v1363 = this.nodes;
            var v1191 = v1363[i$$15];
            var v1192 = j$$15 - 1;
            var v934 = v1191[v1192];
            var v492 = v934.value;
            var v935 = this.scoreSet;
            var v493 = v935.gap;
            b = v492 - v493;
          } else {
            var v1364 = this.nodes;
            var v1365 = i$$15 - 1;
            var v1193 = v1364[v1365];
            var v936 = v1193[j$$15];
            var v494 = v936.value;
            var v937 = this.scoreSet;
            var v495 = v937.gap;
            a = v494 - v495;
            var v1366 = this.nodes;
            var v1194 = v1366[i$$15];
            var v1195 = j$$15 - 1;
            var v938 = v1194[v1195];
            var v496 = v938.value;
            var v939 = this.scoreSet;
            var v497 = v939.gap;
            b = v496 - v497;
          }
        }
      }
      var v1367 = this.nodes;
      var v1368 = i$$15 - 1;
      var v1196 = v1367[v1368];
      var v1197 = j$$15 - 1;
      var v940 = v1196[v1197];
      var v501 = v940.value;
      var v941 = this.scoreSet;
      var v1198 = this.M;
      var v1199 = i$$15 - 1;
      var v942 = v1198[v1199];
      var v1200 = this.N;
      var v1201 = j$$15 - 1;
      var v943 = v1200[v1201];
      introspect(JAM.policy.p33) {
        var v502 = v941.getScore(v942, v943)
      }
      c = v501 + v502;
      var v944 = a >= b;
      if (v944) {
        v944 = a >= c;
      }
      var v513 = v944;
      if (v513) {
        var v1202 = this.nodes;
        var v945 = v1202[i$$15];
        var v503 = v945[j$$15];
        v503.value = a;
        var v1203 = this.nodes;
        var v946 = v1203[i$$15];
        var v504 = v946[j$$15];
        v504.tracebackI = i$$15 - 1;
        var v1204 = this.nodes;
        var v947 = v1204[i$$15];
        var v505 = v947[j$$15];
        v505.tracebackJ = j$$15;
      } else {
        var v948 = b >= c;
        if (v948) {
          v948 = b >= a;
        }
        var v512 = v948;
        if (v512) {
          var v1205 = this.nodes;
          var v949 = v1205[i$$15];
          var v506 = v949[j$$15];
          v506.value = b;
          var v1206 = this.nodes;
          var v950 = v1206[i$$15];
          var v507 = v950[j$$15];
          v507.tracebackI = i$$15;
          var v1207 = this.nodes;
          var v951 = v1207[i$$15];
          var v508 = v951[j$$15];
          v508.tracebackJ = j$$15 - 1;
        } else {
          var v1208 = this.nodes;
          var v952 = v1208[i$$15];
          var v509 = v952[j$$15];
          v509.value = c;
          var v1209 = this.nodes;
          var v953 = v1209[i$$15];
          var v510 = v953[j$$15];
          v510.tracebackI = i$$15 - 1;
          var v1210 = this.nodes;
          var v954 = v1210[i$$15];
          var v511 = v954[j$$15];
          v511.tracebackJ = j$$15 - 1;
        }
      }
      j$$15++;
      var v1369 = this.nodes;
      var v1211 = v1369[0];
      var v955 = v1211.length;
      v514 = j$$15 < v955;
    }
    i$$15++;
    var v1212 = this.nodes;
    var v956 = v1212.length;
    v515 = i$$15 < v956;
  }
  var v1213 = this.nodes;
  var v1460 = this.nodes;
  var v1370 = v1460.length;
  var v1214 = v1370 - 1;
  var v957 = v1213[v1214];
  var v1461 = this.nodes;
  var v1371 = v1461[0];
  var v1215 = v1371.length;
  var v958 = v1215 - 1;
  var v516 = v957[v958];
  this.score = v516.value;
  return;
}
function alignQuad() {
  var v1595 = new Array;
  this.alignedM = v1595;
  var v1596 = new Array;
  this.alignedN = v1596;
  var v959 = this.nodes;
  var v517 = v959.length;
  var currentI = v517 - 1;
  var v1216 = this.nodes;
  var v960 = v1216[0];
  var v518 = v960.length;
  var currentJ = v518 - 1;
  var v961 = this.nodes;
  var v1372 = this.nodes;
  var v1217 = v1372.length;
  var v962 = v1217 - 1;
  var v519 = v961[v962];
  var v1373 = this.nodes;
  var v1218 = v1373[0];
  var v963 = v1218.length;
  var v520 = v963 - 1;
  var currentNode = v519[v520];
  var v1219 = currentNode.tracebackI;
  var v964 = v1219 != undefined;
  if (v964) {
    var v1220 = currentNode.tracebackJ;
    v964 = v1220 != undefined;
  }
  var v535 = v964;
  for (;v535;) {
    var v1221 = currentNode.tracebackI;
    var v1222 = currentI - 1;
    var v965 = v1221 == v1222;
    if (v965) {
      var v1223 = currentNode.tracebackJ;
      var v1224 = currentJ - 1;
      v965 = v1223 == v1224;
    }
    var v532 = v965;
    if (v532) {
      var v521 = this.alignedM;
      var v966 = this.M;
      var v522 = v966.pop();
      introspect(JAM.policy.p21) {
        v521.push(v522);
      }
      var v523 = this.alignedN;
      var v967 = this.N;
      var v524 = v967.pop();
      introspect(JAM.policy.p21) {
        v523.push(v524);
      }
    } else {
      var v968 = currentNode.tracebackJ;
      var v969 = currentJ - 1;
      var v531 = v968 == v969;
      if (v531) {
        var v525 = this.alignedM;
        introspect(JAM.policy.p18) {
          v525.push(".--");
        }
        var v526 = this.alignedN;
        var v970 = this.N;
        var v527 = v970.pop();
        introspect(JAM.policy.p21) {
          v526.push(v527);
        }
      } else {
        var v528 = this.alignedM;
        var v971 = this.M;
        var v529 = v971.pop();
        introspect(JAM.policy.p21) {
          v528.push(v529);
        }
        var v530 = this.alignedN;
        introspect(JAM.policy.p18) {
          v530.push(".--");
        }
      }
    }
    currentI = currentNode.tracebackI;
    currentJ = currentNode.tracebackJ;
    var v972 = this.nodes;
    var v973 = currentNode.tracebackI;
    var v533 = v972[v973];
    var v534 = currentNode.tracebackJ;
    currentNode = v533[v534];
    var v1225 = currentNode.tracebackI;
    var v974 = v1225 != undefined;
    if (v974) {
      var v1226 = currentNode.tracebackJ;
      v974 = v1226 != undefined;
    }
    v535 = v974;
  }
  var v536 = this.alignedM;
  var v1597 = v536.reverse();
  this.alignedM = v1597;
  var v537 = this.alignedN;
  var v1598 = v537.reverse();
  this.alignedN = v1598;
  return;
}
function getAlignedM() {
  var v538 = this.alignedM;
  introspect(JAM.policy.p18) {
    return v538.join("");
  }
}
function getAlignedN() {
  var v539 = this.alignedN;
  introspect(JAM.policy.p18) {
    return v539.join("");
  }
}
function AlignPairQuad() {
  return;
}
new ScoreSet;
var v540 = ScoreSet.prototype;
v540.getScore = getScore;
var v541 = ScoreSet.prototype;
v541.setScoreSetParam = setScoreSetParam;
new ScoringMatrix;
var v542 = ScoringMatrix.prototype;
v542.scoringMatrix_getScore = scoringMatrix_getScore;
var v543 = ScoringMatrix.prototype;
v543.scoringMatrix_fillHash = scoringMatrix_fillHash;
var v544 = Codon;
var v1599 = new ScoringMatrix;
v544.prototype = v1599;
new AlignPairLinear;
var v545 = AlignPairLinear.prototype;
v545.align = align;
var v546 = AlignPairLinear.prototype;
v546.path = path;
var v547 = AlignPairLinear.prototype;
v547.setAlignParam = setAlignParam;
var v548 = AlignPairLinear.prototype;
v548.getAlignedM = getAlignedM;
var v549 = AlignPairLinear.prototype;
v549.getAlignedN = getAlignedN;
new AlignPairQuad;
var v550 = AlignPairQuad.prototype;
v550.initializeMatrix = initializeMatrix;
var v551 = AlignPairQuad.prototype;
v551.fillMatrix = fillMatrix;
var v552 = AlignPairQuad.prototype;
v552.align = alignQuad;
var v553 = AlignPairQuad.prototype;
v553.getAlignedM = getAlignedM;
var v554 = AlignPairQuad.prototype;
v554.getAlignedN = getAlignedN;
var v555 = AlignPairQuad.prototype;
v555.dumpMatrix = dumpMatrix;
document.onload = v2;
introspect(JAM.policy.p18) {
  var v556 = document.getElementById("submitbtn")
}
v556.onclick = v3;
introspect(JAM.policy.p18) {
  var v557 = document.getElementById("clearbtn")
}
v557.onclick = v4
