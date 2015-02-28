introspect(JAM.policy.pFull) {
function v4() {
  var v1224 = document.forms;
  var v973 = v1224[0];
  var v556 = v973.elements;
  var v5 = v556[0];
  v5.value = " ";
  var v1225 = document.forms;
  var v974 = v1225[0];
  var v557 = v974.elements;
  var v6 = v557[4];
  v6.value = " ";
  return;
}
function v3() {
  try {
    pairwiseAlignCodons();
  } catch (e$$5) {
    var v7 = "The following error was encountered: " + e$$5;
    alert(v7);
  }
  return;
}
function v2() {
  var v558 = document.main_form;
  var v8 = v558.main_submit;
  v8.focus();
  return;
}
function addReturns(sequence) {
  function v0(str$$6, p1, offset$$8, s$$2) {
    return p1 + "\n";
  }
  sequence = sequence.replace(/(.{60})/g, v0);
  return sequence;
}
function checkAlign(arrayOfTitles, arrayOfSequences) {
  var v9 = arrayOfSequences[0];
  var lengthOfAlign = v9.length;
  var v559 = arrayOfSequences.length;
  var v10 = v559 < 2;
  if (v10) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v560 = arrayOfTitles.length;
  var v12 = i$$1 < v560;
  for (;v12;) {
    var v1371 = arrayOfTitles[i$$1];
    var v1226 = v1371.search(/\S/);
    var v975 = v1226 == -1;
    var v1228 = !v975;
    if (v1228) {
      var v1372 = arrayOfSequences[i$$1];
      var v1227 = v1372.search(/\S/);
      v975 = v1227 == -1;
    }
    var v561 = v975;
    var v977 = !v561;
    if (v977) {
      var v1229 = arrayOfSequences[i$$1];
      var v976 = v1229.length;
      v561 = v976 != lengthOfAlign;
    }
    var v11 = v561;
    if (v11) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v562 = arrayOfTitles.length;
    v12 = i$$1 < v562;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v1459 = codonTable.search(/AmAcid/);
  var v1373 = v1459 == -1;
  var v1461 = !v1373;
  if (v1461) {
    var v1460 = codonTable.search(/Codon/);
    v1373 = v1460 == -1;
  }
  var v1230 = v1373;
  var v1375 = !v1230;
  if (v1375) {
    var v1374 = codonTable.search(/Number/);
    v1230 = v1374 == -1;
  }
  var v978 = v1230;
  var v1232 = !v978;
  if (v1232) {
    var v1231 = codonTable.search(/\/1000/);
    v978 = v1231 == -1;
  }
  var v563 = v978;
  var v980 = !v563;
  if (v980) {
    var v979 = codonTable.search(/Fraction\s*\.\./);
    v563 = v979 == -1;
  }
  var v13 = v563;
  if (v13) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v981 = formElement.value;
  var v564 = v981.search(/\S/);
  var v14 = v564 == -1;
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
  var v565 = arrayOfPatterns.length;
  var v17 = z$$2 < v565;
  for (;v17;) {
    var v982 = arrayOfPatterns[z$$2];
    var v566 = v982.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v15 = v566 == -1;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v983 = arrayOfPatterns[z$$2];
    var v567 = moreExpressionCheck(v983);
    var v16 = v567 == false;
    if (v16) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v568 = arrayOfPatterns.length;
    v17 = z$$2 < v568;
  }
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v18);
  var v19 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v19);
  var j = 0;
  var v569 = arrayOfPatterns.length;
  var v23 = j < v569;
  for (;v23;) {
    var v984 = arrayOfPatterns[j];
    var v570 = v984.match(/\/.+\//);
    var v20 = v570 + "gi";
    var v1578 = eval(v20);
    geneticCodeMatchExp[j] = v1578;
    var v571 = arrayOfPatterns[j];
    var v21 = v571.match(/=[a-zA-Z\*]/);
    var v1579 = v21.toString();
    geneticCodeMatchResult[j] = v1579;
    var v22 = geneticCodeMatchResult[j];
    var v1580 = v22.replace(/=/g, "");
    geneticCodeMatchResult[j] = v1580;
    j++;
    var v572 = arrayOfPatterns.length;
    v23 = j < v572;
  }
  var i$$2 = 0;
  var v985 = testSequence.length;
  var v573 = v985 - 3;
  var v30 = i$$2 <= v573;
  for (;v30;) {
    var v24 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v24);
    j = 0;
    var v574 = geneticCodeMatchExp.length;
    var v28 = j < v574;
    for (;v28;) {
      var v986 = geneticCodeMatchExp[j];
      var v575 = codon.search(v986);
      var v27 = v575 != -1;
      if (v27) {
        var v26 = oneMatch == true;
        if (v26) {
          var v576 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v25 = v576 + ".";
          alert(v25);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v577 = geneticCodeMatchExp.length;
      v28 = j < v577;
    }
    var v29 = oneMatch == false;
    if (v29) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v987 = testSequence.length;
    var v578 = v987 - 3;
    v30 = i$$2 <= v578;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v579 = arrayOfPatterns$$1.length;
  var v32 = z$$3 < v579;
  for (;v32;) {
    var v988 = arrayOfPatterns$$1[z$$3];
    var v580 = v988.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v31 = v580 != -1;
    if (v31) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v581 = arrayOfPatterns$$1.length;
    v32 = z$$3 < v581;
  }
  var i$$3 = 0;
  var v582 = arrayOfPatterns$$1.length;
  var v36 = i$$3 < v582;
  for (;v36;) {
    var v989 = arrayOfPatterns$$1[i$$3];
    var v583 = "[" + v989;
    var v33 = v583 + "]";
    var re = new RegExp(v33, "gi");
    var j$$1 = i$$3 + 1;
    var v584 = arrayOfPatterns$$1.length;
    var v35 = j$$1 < v584;
    for (;v35;) {
      var v990 = arrayOfPatterns$$1[j$$1];
      var v585 = v990.search(re);
      var v34 = v585 != -1;
      if (v34) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v586 = arrayOfPatterns$$1.length;
      v35 = j$$1 < v586;
    }
    i$$3++;
    var v587 = arrayOfPatterns$$1.length;
    v36 = i$$3 < v587;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v588 = arrayOfPatterns$$2.length;
  var v39 = z$$4 < v588;
  for (;v39;) {
    var v991 = arrayOfPatterns$$2[z$$4];
    var v589 = v991.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v37 = v589 == -1;
    if (v37) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v992 = arrayOfPatterns$$2[z$$4];
    var v590 = moreExpressionCheck(v992);
    var v38 = v590 == false;
    if (v38) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v591 = arrayOfPatterns$$2.length;
    v39 = z$$4 < v591;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v1233 = getSequenceFromFasta(text$$7);
  var v993 = v1233.replace(/[^A-Za-z]/g, "");
  var v592 = v993.length;
  var v41 = v592 > maxInput;
  if (v41) {
    var v593 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v40 = v593 + " characters.";
    alert(v40);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v594 = text$$8.length;
  var v43 = v594 > maxInput$$1;
  if (v43) {
    var v595 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v42 = v595 + " characters.";
    alert(v42);
    return false;
  } else {
    return true;
  }
  return;
}
function complement(dnaSequence) {
  dnaSequence = dnaSequence.replace(/g/g, "1");
  dnaSequence = dnaSequence.replace(/c/g, "2");
  dnaSequence = dnaSequence.replace(/1/g, "c");
  dnaSequence = dnaSequence.replace(/2/g, "g");
  dnaSequence = dnaSequence.replace(/G/g, "1");
  dnaSequence = dnaSequence.replace(/C/g, "2");
  dnaSequence = dnaSequence.replace(/1/g, "C");
  dnaSequence = dnaSequence.replace(/2/g, "G");
  dnaSequence = dnaSequence.replace(/a/g, "1");
  dnaSequence = dnaSequence.replace(/t/g, "2");
  dnaSequence = dnaSequence.replace(/1/g, "t");
  dnaSequence = dnaSequence.replace(/2/g, "a");
  dnaSequence = dnaSequence.replace(/A/g, "1");
  dnaSequence = dnaSequence.replace(/T/g, "2");
  dnaSequence = dnaSequence.replace(/1/g, "T");
  dnaSequence = dnaSequence.replace(/2/g, "A");
  dnaSequence = dnaSequence.replace(/u/g, "a");
  dnaSequence = dnaSequence.replace(/U/g, "A");
  dnaSequence = dnaSequence.replace(/r/g, "1");
  dnaSequence = dnaSequence.replace(/y/g, "2");
  dnaSequence = dnaSequence.replace(/1/g, "y");
  dnaSequence = dnaSequence.replace(/2/g, "r");
  dnaSequence = dnaSequence.replace(/R/g, "1");
  dnaSequence = dnaSequence.replace(/Y/g, "2");
  dnaSequence = dnaSequence.replace(/1/g, "Y");
  dnaSequence = dnaSequence.replace(/2/g, "R");
  dnaSequence = dnaSequence.replace(/k/g, "1");
  dnaSequence = dnaSequence.replace(/m/g, "2");
  dnaSequence = dnaSequence.replace(/1/g, "m");
  dnaSequence = dnaSequence.replace(/2/g, "k");
  dnaSequence = dnaSequence.replace(/K/g, "1");
  dnaSequence = dnaSequence.replace(/M/g, "2");
  dnaSequence = dnaSequence.replace(/1/g, "M");
  dnaSequence = dnaSequence.replace(/2/g, "K");
  dnaSequence = dnaSequence.replace(/b/g, "1");
  dnaSequence = dnaSequence.replace(/v/g, "2");
  dnaSequence = dnaSequence.replace(/1/g, "v");
  dnaSequence = dnaSequence.replace(/2/g, "b");
  dnaSequence = dnaSequence.replace(/B/g, "1");
  dnaSequence = dnaSequence.replace(/V/g, "2");
  dnaSequence = dnaSequence.replace(/1/g, "V");
  dnaSequence = dnaSequence.replace(/2/g, "B");
  dnaSequence = dnaSequence.replace(/d/g, "1");
  dnaSequence = dnaSequence.replace(/h/g, "2");
  dnaSequence = dnaSequence.replace(/1/g, "h");
  dnaSequence = dnaSequence.replace(/2/g, "d");
  dnaSequence = dnaSequence.replace(/D/g, "1");
  dnaSequence = dnaSequence.replace(/H/g, "2");
  dnaSequence = dnaSequence.replace(/1/g, "H");
  dnaSequence = dnaSequence.replace(/2/g, "D");
  return dnaSequence;
}
function closeForm() {
  var v44 = outputWindow.document;
  v44.write("</form>");
  return true;
}
function closePre() {
  var v45 = outputWindow.document;
  v45.write("</div>");
  var v46 = outputWindow.document;
  v46.write("</pre>\n");
  return;
}
function closeTextArea() {
  var v47 = outputWindow.document;
  v47.write("</textarea>");
  return true;
}
function closeWindow() {
  var v48 = outputWindow.document;
  v48.write("</body>\n</html>\n");
  outputWindow.status = "Done.";
  var v49 = outputWindow.document;
  v49.close();
  return;
}
function convertDegenerates(sequence$$1) {
  sequence$$1 = sequence$$1.toLowerCase();
  sequence$$1 = sequence$$1.replace(/t/g, "[TU]");
  sequence$$1 = sequence$$1.replace(/r/g, "[AGR]");
  sequence$$1 = sequence$$1.replace(/y/g, "[CTUY]");
  sequence$$1 = sequence$$1.replace(/s/g, "[GCS]");
  sequence$$1 = sequence$$1.replace(/w/g, "[ATUW]");
  sequence$$1 = sequence$$1.replace(/k/g, "[GTUK]");
  sequence$$1 = sequence$$1.replace(/m/g, "[ACM]");
  sequence$$1 = sequence$$1.replace(/b/g, "[CGTUBSKY]");
  sequence$$1 = sequence$$1.replace(/d/g, "[AGTUDRKW]");
  sequence$$1 = sequence$$1.replace(/h/g, "[ACTUHMYW]");
  sequence$$1 = sequence$$1.replace(/v/g, "[ACGVSMR]");
  sequence$$1 = sequence$$1.replace(/n/g, "[ACGTURYSWKMBDHVN]");
  return sequence$$1;
}
function earlyCheckAlign(alignArray) {
  var v596 = alignArray.length;
  var v50 = v596 < 3;
  if (v50) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v597 = alignArray.length;
  var v52 = i$$4 < v597;
  for (;v52;) {
    var v994 = alignArray[i$$4];
    var v598 = v994.search(/[^\s]+\s/);
    var v51 = v598 == -1;
    if (v51) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v599 = alignArray.length;
    v52 = i$$4 < v599;
  }
  return true;
}
function filterAlignSeq(alignSeq) {
  alignSeq = alignSeq.replace(/[^abcdefghiklmnpqrstvwxyz\.\-]/gi, "");
  return alignSeq;
}
function filterFastaTitle(sequenceTitle) {
  sequenceTitle = sequenceTitle.replace(/\s{2,}/g, " ");
  sequenceTitle = sequenceTitle.replace(/^\s*/g, "");
  sequenceTitle = sequenceTitle.replace(/[\f\n\r\t]+$/g, "\n");
  return sequenceTitle.replace(/[\<\>]\n/gi, "");
}
function getArrayOfFasta(sequenceData) {
  var arrayOfFasta = new Array;
  var matchArray;
  var re$$1 = /\>[^\>]+/g;
  var v600 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v55 = v600 != -1;
  if (v55) {
    var v54 = matchArray = re$$1.exec(sequenceData);
    for (;v54;) {
      var v53 = matchArray[0];
      arrayOfFasta.push(v53);
      v54 = matchArray = re$$1.exec(sequenceData);
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v601 = sequence$$2.length;
  var v56 = "&gt;results for " + v601;
  var stringToReturn = v56 + " residue sequence ";
  var v602 = fastaSequenceTitle.search(/[^\s]/);
  var v58 = v602 != -1;
  if (v58) {
    var v603 = stringToReturn + '"';
    var v57 = v603 + fastaSequenceTitle;
    stringToReturn = v57 + '"';
  }
  var v604 = stringToReturn + ' starting "';
  var v605 = sequence$$2.substring(0, 10);
  var v59 = v604 + v605;
  stringToReturn = v59 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v606 = sequenceOne.length;
  var v60 = "Search results for " + v606;
  var stringToReturn$$1 = v60 + " residue sequence ";
  var v607 = fastaSequenceTitleOne.search(/[^\s]/);
  var v62 = v607 != -1;
  if (v62) {
    var v608 = stringToReturn$$1 + '"';
    var v61 = v608 + fastaSequenceTitleOne;
    stringToReturn$$1 = v61 + '"';
  }
  var v609 = stringToReturn$$1 + ' starting "';
  var v610 = sequenceOne.substring(0, 10);
  var v63 = v609 + v610;
  stringToReturn$$1 = v63 + '"\n';
  var v611 = stringToReturn$$1 + "and ";
  var v612 = sequenceTwo.length;
  var v64 = v611 + v612;
  stringToReturn$$1 = v64 + " residue sequence ";
  var v613 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v66 = v613 != -1;
  if (v66) {
    var v614 = stringToReturn$$1 + '"';
    var v65 = v614 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v65 + '"';
  }
  var v615 = stringToReturn$$1 + ' starting "';
  var v616 = sequenceTwo.substring(0, 10);
  var v67 = v615 + v616;
  stringToReturn$$1 = v67 + '"';
  var v68 = '<div class="info">' + stringToReturn$$1;
  return v68 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v69 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v69);
  var j$$2 = 0;
  var v617 = arrayOfPatterns$$3.length;
  var v71 = j$$2 < v617;
  for (;v71;) {
    var v995 = arrayOfPatterns$$3[j$$2];
    var v618 = v995.match(/\/.+\//);
    var v70 = v618 + "gi";
    var v1581 = eval(v70);
    geneticCodeMatchExp$$1[j$$2] = v1581;
    j$$2++;
    var v619 = arrayOfPatterns$$3.length;
    v71 = j$$2 < v619;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v72 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v72);
  var j$$3 = 0;
  var v620 = arrayOfPatterns$$4.length;
  var v75 = j$$3 < v620;
  for (;v75;) {
    var v621 = arrayOfPatterns$$4[j$$3];
    var v73 = v621.match(/=[a-zA-Z\*]/);
    var v1582 = v73.toString();
    geneticCodeMatchResult$$1[j$$3] = v1582;
    var v74 = geneticCodeMatchResult$$1[j$$3];
    var v1583 = v74.replace(/=/g, "");
    geneticCodeMatchResult$$1[j$$3] = v1583;
    j$$3++;
    var v622 = arrayOfPatterns$$4.length;
    v75 = j$$3 < v622;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v623 = sequence$$3.length;
  var v76 = "Results for " + v623;
  var stringToReturn$$2 = v76 + " residue sequence ";
  var v624 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v78 = v624 != -1;
  if (v78) {
    var v625 = stringToReturn$$2 + '"';
    var v77 = v625 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v77 + '"';
  }
  var v626 = stringToReturn$$2 + ' starting "';
  var v627 = sequence$$3.substring(0, 10);
  var v79 = v626 + v627;
  stringToReturn$$2 = v79 + '"';
  var v80 = '<div class="info">' + stringToReturn$$2;
  return v80 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v996 = "Results for " + topology;
  var v628 = v996 + " ";
  var v629 = sequence$$4.length;
  var v81 = v628 + v629;
  var stringToReturn$$3 = v81 + " residue sequence ";
  var v630 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v83 = v630 != -1;
  if (v83) {
    var v631 = stringToReturn$$3 + '"';
    var v82 = v631 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v82 + '"';
  }
  var v632 = stringToReturn$$3 + ' starting "';
  var v633 = sequence$$4.substring(0, 10);
  var v84 = v632 + v633;
  stringToReturn$$3 = v84 + '"';
  var v85 = '<div class="info">' + stringToReturn$$3;
  return v85 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v634 = sequenceOne$$1.length;
  var v86 = "Alignment results for " + v634;
  var stringToReturn$$4 = v86 + " residue sequence ";
  var v635 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v88 = v635 != -1;
  if (v88) {
    var v636 = stringToReturn$$4 + '"';
    var v87 = v636 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v87 + '"';
  }
  var v637 = stringToReturn$$4 + ' starting "';
  var v638 = sequenceOne$$1.substring(0, 10);
  var v89 = v637 + v638;
  stringToReturn$$4 = v89 + '"\n';
  var v639 = stringToReturn$$4 + "and ";
  var v640 = sequenceTwo$$1.length;
  var v90 = v639 + v640;
  stringToReturn$$4 = v90 + " residue sequence ";
  var v641 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v92 = v641 != -1;
  if (v92) {
    var v642 = stringToReturn$$4 + '"';
    var v91 = v642 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v91 + '"';
  }
  var v643 = stringToReturn$$4 + ' starting "';
  var v644 = sequenceTwo$$1.substring(0, 10);
  var v93 = v643 + v644;
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
    var v645 = Math.random();
    var v646 = components.length;
    var v95 = v645 * v646;
    tempNum = Math.floor(v95);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4++;
    v96 = j$$4 < lengthOut;
  }
  return sequenceArray.join("");
}
function getSequenceFromFasta(sequenceRecord) {
  var v647 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v97 = v647 != -1;
  if (v97) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "");
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v648 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v99 = v648 != -1;
  if (v99) {
    var v98 = sequenceRecord$$1.match(/\>[^\f\n\r]+[\f\n\r]/, "");
    fastaTitle = v98.toString();
    fastaTitle = fastaTitle.replace(/\>|[\f\n\r]/g, "");
    fastaTitle = fastaTitle.replace(/\s{2,}/g, " ");
    fastaTitle = fastaTitle.replace(/[\<\>]/gi, "");
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  var v1556 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v1549 = v1556 != -1;
  var v1558 = !v1549;
  if (v1558) {
    var v1557 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    v1549 = v1557 != -1;
  }
  var v1539 = v1549;
  var v1551 = !v1539;
  if (v1551) {
    var v1550 = expressionToCheck.search(/\[\]/);
    v1539 = v1550 != -1;
  }
  var v1528 = v1539;
  var v1541 = !v1528;
  if (v1541) {
    var v1540 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
    v1528 = v1540 != -1;
  }
  var v1513 = v1528;
  var v1530 = !v1513;
  if (v1530) {
    var v1529 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
    v1513 = v1529 != -1;
  }
  var v1492 = v1513;
  var v1515 = !v1492;
  if (v1515) {
    var v1514 = expressionToCheck.search(/\|\|/);
    v1492 = v1514 != -1;
  }
  var v1462 = v1492;
  var v1494 = !v1462;
  if (v1494) {
    var v1493 = expressionToCheck.search(/\/\|/);
    v1462 = v1493 != -1;
  }
  var v1376 = v1462;
  var v1464 = !v1376;
  if (v1464) {
    var v1463 = expressionToCheck.search(/\|\//);
    v1376 = v1463 != -1;
  }
  var v1234 = v1376;
  var v1378 = !v1234;
  if (v1378) {
    var v1377 = expressionToCheck.search(/\[.\]/);
    v1234 = v1377 != -1;
  }
  var v997 = v1234;
  var v1236 = !v997;
  if (v1236) {
    var v1235 = expressionToCheck.search(/\</);
    v997 = v1235 != -1;
  }
  var v649 = v997;
  var v999 = !v649;
  if (v999) {
    var v998 = expressionToCheck.search(/\>/);
    v649 = v998 != -1;
  }
  var v100 = v649;
  if (v100) {
    return false;
  }
  return true;
}
function openForm() {
  var v101 = outputWindow.document;
  v101.write('<form action="">\n');
  return true;
}
function openPre() {
  var v102 = outputWindow.document;
  v102.write("<pre>");
  var v103 = outputWindow.document;
  v103.write('<div class="pre">');
  return;
}
function openTextArea() {
  var v104 = outputWindow.document;
  v104.write('<br /><textarea rows="6" cols="61">\n');
  return true;
}
function openWindow() {
  var title$$5 = "Pairwise Align Codons";
  _openWindow(title$$5);
  return;
}
function _openWindow(title$$6) {
  var isColor = true;
  outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  outputWindow.focus();
  var v105 = outputWindow.document;
  var v1237 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v1000 = v1237 + "<head>\n";
  var v650 = v1000 + "<title>Sequence Manipulation Suite</title>\n";
  var v106 = v650 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v105.write(v106);
  if (isColor) {
    var v107 = outputWindow.document;
    var v1571 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1567 = v1571 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1563 = v1567 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1559 = v1563 + "div.info {font-weight: bold}\n";
    var v1552 = v1559 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1542 = v1552 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v1531 = v1542 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v1516 = v1531 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1495 = v1516 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v1465 = v1495 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v1379 = v1465 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v1238 = v1379 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v1001 = v1238 + "td.many {color: #000000}\n";
    var v651 = v1001 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v108 = v651 + "</style>\n";
    v107.write(v108);
  } else {
    var v109 = outputWindow.document;
    var v1575 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1572 = v1575 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1568 = v1572 + "div.title {display: none}\n";
    var v1564 = v1568 + "div.info {font-weight: bold}\n";
    var v1560 = v1564 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1553 = v1560 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1543 = v1553 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v1532 = v1543 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1517 = v1532 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1496 = v1517 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1466 = v1496 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v1380 = v1466 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1239 = v1380 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v1002 = v1239 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v652 = v1002 + "img {display: none}\n";
    var v110 = v652 + "</style>\n";
    v109.write(v110);
  }
  var v111 = outputWindow.document;
  var v1240 = "</head>\n" + '<body class="main">\n';
  var v1003 = v1240 + '<div class="title">';
  var v653 = v1003 + title$$6;
  var v112 = v653 + " results</div>\n";
  v111.write(v112);
  outputWindow.status = "Please Wait.";
  return;
}
function openWindowAlign(title$$7) {
  _openWindowAlign(title$$7);
  return;
}
function _openWindowAlign(title$$8) {
  var isBackground = true;
  outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  outputWindow.focus();
  var v113 = outputWindow.document;
  var v1241 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v1004 = v1241 + "<head>\n";
  var v654 = v1004 + "<title>Sequence Manipulation Suite</title>\n";
  var v114 = v654 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v113.write(v114);
  if (isBackground) {
    var v115 = outputWindow.document;
    var v1573 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1569 = v1573 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1565 = v1569 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1561 = v1565 + "div.info {font-weight: bold}\n";
    var v1554 = v1561 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v1544 = v1554 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v1533 = v1544 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v1518 = v1533 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v1497 = v1518 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v1467 = v1497 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v1381 = v1467 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v1242 = v1381 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v1005 = v1242 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v655 = v1005 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v116 = v655 + "</style>\n";
    v115.write(v116);
  } else {
    var v117 = outputWindow.document;
    var v1577 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1576 = v1577 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1574 = v1576 + "div.title {display: none}\n";
    var v1570 = v1574 + "div.info {font-weight: bold}\n";
    var v1566 = v1570 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1562 = v1566 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v1555 = v1562 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v1545 = v1555 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v1534 = v1545 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v1519 = v1534 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v1498 = v1519 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v1468 = v1498 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v1382 = v1468 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v1243 = v1382 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v1006 = v1243 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v656 = v1006 + "img {display: none}\n";
    var v118 = v656 + "</style>\n";
    v117.write(v118);
  }
  var v119 = outputWindow.document;
  var v1244 = "</head>\n" + '<body class="main">\n';
  var v1007 = v1244 + '<div class="title">';
  var v657 = v1007 + title$$8;
  var v120 = v657 + " results</div>\n";
  v119.write(v120);
  outputWindow.status = "Please Wait.";
  return;
}
function removeFormatting(sequence$$5) {
  return sequence$$5.replace(/[\d\s]/g, "");
}
function removeNonDna(sequence$$6) {
  return sequence$$6.replace(/[^gatucryswkmbdhvnxGATUCRYSWKMBDHVNX]/g, "");
}
function removeNonDnaStrict(sequence$$7) {
  return sequence$$7.replace(/[^gatucGATUC]/g, "");
}
function removeNonProtein(sequence$$8) {
  return sequence$$8.replace(/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, "");
}
function removeNonProteinStrict(sequence$$9) {
  return sequence$$9.replace(/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, "");
}
function removeNonProteinAllowDegen(sequence$$10) {
  return sequence$$10.replace(/[^ABCDEFGHIKLMNPQRSTVWYXZabcdefghiklmnpqrstvwyxz\*]/g, "");
}
function removeNonProteinAllowX(sequence$$11) {
  return sequence$$11.replace(/[^ACDEFGHIKLMNPQRSTVWYZXacdefghiklmnpqrstvwyzx\*]/g, "");
}
function removeWhiteSpace(text$$9) {
  return text$$9.replace(/\s/g, "");
}
function removeNonLetters(sequence$$12) {
  return sequence$$12.replace(/[^A-Z]/gi, "");
}
function reverse(dnaSequence$$1) {
  var tempDnaArray = new Array;
  var v658 = dnaSequence$$1.search(/./);
  var v121 = v658 != -1;
  if (v121) {
    tempDnaArray = dnaSequence$$1.match(/./g);
    tempDnaArray = tempDnaArray.reverse();
    dnaSequence$$1 = tempDnaArray.join("");
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
  testArray.push(testString);
  var v659 = testArray[0];
  var v125 = v659 != testString;
  if (v125) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v660 = testString.search(re$$2);
  var v126 = v660 == -1;
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
  testString = testString.replace(/(\d)/g, v1);
  var v128 = testString != "1X2X3X";
  if (v128) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false;
  }
  var testNum = 2489.8237;
  var v661 = testNum.toFixed(3);
  var v129 = v661 != 2489.824;
  if (v129) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v662 = testNum.toPrecision(5);
  var v130 = v662 != 2489.8;
  if (v130) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v663 = theNumber$$1.search(/\d/);
  var v131 = v663 == -1;
  if (v131) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v1383 = emblFile.search(/ID/);
  var v1245 = v1383 == -1;
  var v1385 = !v1245;
  if (v1385) {
    var v1384 = emblFile.search(/AC/);
    v1245 = v1384 == -1;
  }
  var v1008 = v1245;
  var v1247 = !v1008;
  if (v1247) {
    var v1246 = emblFile.search(/DE/);
    v1008 = v1246 == -1;
  }
  var v664 = v1008;
  var v1010 = !v664;
  if (v1010) {
    var v1009 = emblFile.search(/SQ/);
    v664 = v1009 == -1;
  }
  var v132 = v664;
  if (v132) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v665 = theNumber$$2.search(/\d/);
  var v133 = v665 == -1;
  if (v133) {
    alert("Please enter a number.");
    return false;
  }
  var v135 = theNumber$$2 > maxInput$$2;
  if (v135) {
    var v666 = "Please enter a number less than or equal to " + maxInput$$2;
    var v134 = v666 + ".";
    alert(v134);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v667 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v136 = v667 != -1;
  if (v136) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v668 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v137 = v668 != -1;
  if (v137) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v1386 = genBankFile.search(/LOCUS/);
  var v1248 = v1386 == -1;
  var v1388 = !v1248;
  if (v1388) {
    var v1387 = genBankFile.search(/DEFINITION/);
    v1248 = v1387 == -1;
  }
  var v1011 = v1248;
  var v1250 = !v1011;
  if (v1250) {
    var v1249 = genBankFile.search(/ACCESSION/);
    v1011 = v1249 == -1;
  }
  var v669 = v1011;
  var v1013 = !v669;
  if (v1013) {
    var v1012 = genBankFile.search(/ORIGIN/);
    v669 = v1012 == -1;
  }
  var v138 = v669;
  if (v138) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v1389 = genBankFile$$1.search(/LOCUS/);
  var v1251 = v1389 == -1;
  var v1391 = !v1251;
  if (v1391) {
    var v1390 = genBankFile$$1.search(/DEFINITION/);
    v1251 = v1390 == -1;
  }
  var v1014 = v1251;
  var v1253 = !v1014;
  if (v1253) {
    var v1252 = genBankFile$$1.search(/ACCESSION/);
    v1014 = v1252 == -1;
  }
  var v670 = v1014;
  var v1016 = !v670;
  if (v1016) {
    var v1015 = genBankFile$$1.search(/ORIGIN/);
    v670 = v1015 == -1;
  }
  var v139 = v670;
  if (v139) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v671 = genBankFile$$1.search(/FEATURES {13}/);
  var v140 = v671 == -1;
  if (v140) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v1392 = emblFile$$1.search(/ID/);
  var v1254 = v1392 == -1;
  var v1394 = !v1254;
  if (v1394) {
    var v1393 = emblFile$$1.search(/AC/);
    v1254 = v1393 == -1;
  }
  var v1017 = v1254;
  var v1256 = !v1017;
  if (v1256) {
    var v1255 = emblFile$$1.search(/DE/);
    v1017 = v1255 == -1;
  }
  var v672 = v1017;
  var v1019 = !v672;
  if (v1019) {
    var v1018 = emblFile$$1.search(/SQ/);
    v672 = v1018 == -1;
  }
  var v141 = v672;
  if (v141) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v673 = emblFile$$1.search(/^FT/m);
  var v142 = v673 == -1;
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
    var v674 = basePerLine / groupSize;
    var v146 = j$$6 <= v674;
    for (;v146;) {
      var v145 = k < groupSize;
      for (;v145;) {
        var v675 = k + i$$5;
        var v144 = text$$10.charAt(v675);
        lineOfText = lineOfText + v144;
        k = k + 1;
        v145 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v676 = basePerLine / groupSize;
      v146 = j$$6 <= v676;
    }
    var v147 = outputWindow.document;
    var v148 = lineOfText + "\n";
    v147.write(v148);
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
  var numberingAdjustment = 0;
  function adjustNumbering(original, adjustment) {
    var adjusted = original + adjustment;
    var v677 = adjustment < 0;
    if (v677) {
      v677 = adjusted >= 0;
    }
    var v150 = v677;
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
  var v181 = i$$6 < stopBase$$2;
  for (;v181;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v678 = basePerLine$$2 / groupSize$$2;
    var v157 = j$$7 <= v678;
    for (;v157;) {
      var v153 = k$$1 < groupSize$$2;
      for (;v153;) {
        var v679 = i$$6 + k$$1;
        var v151 = v679 >= stopBase$$2;
        if (v151) {
          break;
        }
        var v680 = k$$1 + i$$6;
        var v152 = text$$12.charAt(v680);
        lineOfText$$1 = lineOfText$$1 + v152;
        k$$1 = k$$1 + 1;
        v153 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v155 = numberPosition$$1 == "above";
      if (v155) {
        var v681 = adjustNumbering(i$$6, numberingAdjustment);
        var v154 = rightNum(v681, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v154;
      }
      var v156 = i$$6 >= stopBase$$2;
      if (v156) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v682 = basePerLine$$2 / groupSize$$2;
      v157 = j$$7 <= v682;
    }
    var v180 = numberPosition$$1 == "left";
    if (v180) {
      var v158 = outputWindow.document;
      var v1257 = adjustNumbering(lineNum, numberingAdjustment);
      var v1020 = rightNum(v1257, "", 8, tabIn$$3);
      var v683 = v1020 + lineOfText$$1;
      var v159 = v683 + "\n";
      v158.write(v159);
      var v163 = strands$$1 == "two";
      if (v163) {
        var v160 = outputWindow.document;
        var v1258 = adjustNumbering(lineNum, numberingAdjustment);
        var v1021 = rightNum(v1258, "", 8, tabIn$$3);
        var v1022 = complement(lineOfText$$1);
        var v684 = v1021 + v1022;
        var v161 = v684 + "\n";
        v160.write(v161);
        var v162 = outputWindow.document;
        v162.write("\n");
      }
    } else {
      var v179 = numberPosition$$1 == "right";
      if (v179) {
        var v164 = outputWindow.document;
        var v1023 = adjustNumbering(i$$6, numberingAdjustment);
        var v685 = lineOfText$$1 + v1023;
        var v165 = v685 + "\n";
        v164.write(v165);
        var v169 = strands$$1 == "two";
        if (v169) {
          var v166 = outputWindow.document;
          var v1024 = complement(lineOfText$$1);
          var v1025 = adjustNumbering(i$$6, numberingAdjustment);
          var v686 = v1024 + v1025;
          var v167 = v686 + "\n";
          v166.write(v167);
          var v168 = outputWindow.document;
          v168.write("\n");
        }
      } else {
        var v178 = numberPosition$$1 == "above";
        if (v178) {
          var v170 = outputWindow.document;
          var v171 = aboveNum + "\n";
          v170.write(v171);
          var v172 = outputWindow.document;
          var v173 = lineOfText$$1 + "\n";
          v172.write(v173);
          var v177 = strands$$1 == "two";
          if (v177) {
            var v174 = outputWindow.document;
            var v687 = complement(lineOfText$$1);
            var v175 = v687 + "\n";
            v174.write(v175);
            var v176 = outputWindow.document;
            v176.write("\n");
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
    var v688 = basePerLine$$3 / groupSize$$3;
    var v188 = j$$8 <= v688;
    for (;v188;) {
      var v184 = k$$2 < groupSize$$3;
      for (;v184;) {
        var v689 = i$$7 + k$$2;
        var v182 = v689 >= stopBase$$3;
        if (v182) {
          break;
        }
        var v690 = k$$2 + i$$7;
        var v183 = text$$13.charAt(v690);
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
      var v691 = basePerLine$$3 / groupSize$$3;
      v188 = j$$8 <= v691;
    }
    var v199 = numberPosition$$2 == "left";
    if (v199) {
      var v189 = outputWindow.document;
      var v1026 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v692 = v1026 + lineOfText$$2;
      var v190 = v692 + "\n";
      v189.write(v190);
    } else {
      var v198 = numberPosition$$2 == "right";
      if (v198) {
        var v191 = outputWindow.document;
        var v693 = lineOfText$$2 + i$$7;
        var v192 = v693 + "\n";
        v191.write(v192);
      } else {
        var v197 = numberPosition$$2 == "above";
        if (v197) {
          var v193 = outputWindow.document;
          var v194 = aboveNum$$1 + "\n";
          v193.write(v194);
          var v195 = outputWindow.document;
          var v196 = lineOfText$$2 + "\n";
          v195.write(v196);
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
  var v1259 = sequence$$13.length;
  var v1027 = v1259 <= firstIndexToMutate;
  var v1260 = !v1027;
  if (v1260) {
    v1027 = lastIndexToMutate < 0;
  }
  var v694 = v1027;
  var v1028 = !v694;
  if (v1028) {
    v694 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v201 = v694;
  if (v201) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v209 = i$$8 < numMut;
  for (;v209;) {
    maxNum = sequence$$13.length;
    var v695 = Math.random();
    var v202 = v695 * maxNum;
    randNum = Math.floor(v202);
    var v696 = randNum < firstIndexToMutate;
    var v1029 = !v696;
    if (v1029) {
      v696 = randNum > lastIndexToMutate;
    }
    var v203 = v696;
    if (v203) {
      numMut++;
      i$$8++;
      v209 = i$$8 < numMut;
      continue;
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for (;needNewChar;) {
      var v697 = Math.random();
      var v698 = components$$1.length;
      var v204 = v697 * v698;
      componentsIndex = Math.round(v204);
      var v699 = components$$1.length;
      var v205 = componentsIndex == v699;
      if (v205) {
        componentsIndex = 0;
      }
      var v700 = components$$1[componentsIndex];
      var v206 = v700 != currentChar;
      if (v206) {
        needNewChar = false;
      }
    }
    var v701 = sequence$$13.substring(0, randNum);
    var v702 = components$$1[componentsIndex];
    var v207 = v701 + v702;
    var v703 = randNum + 1;
    var v704 = sequence$$13.length;
    var v208 = sequence$$13.substring(v703, v704);
    sequence$$13 = v207 + v208;
    i$$8++;
    v209 = i$$8 < numMut;
  }
  var v210 = outputWindow.document;
  var v211 = addReturns(sequence$$13);
  v210.write(v211);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v216 = j$$9 < lengthOut$$1;
  for (;v216;) {
    var v705 = Math.random();
    var v706 = components$$2.length;
    var v212 = v705 * v706;
    tempNum$$1 = Math.floor(v212);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v707 = sequence$$14.length;
    var v215 = v707 == 60;
    if (v215) {
      var v213 = outputWindow.document;
      var v214 = sequence$$14 + "\n";
      v213.write(v214);
      sequence$$14 = "";
    }
    j$$9++;
    v216 = j$$9 < lengthOut$$1;
  }
  var v217 = outputWindow.document;
  var v218 = sequence$$14 + "\n";
  v217.write(v218);
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
    var v219 = sequence$$15.substring(0, lookAhead);
    shiftValue = v219.length;
    var v1261 = sequence$$15.length;
    var v1030 = v1261 - lookAhead;
    var v1031 = sequence$$15.length;
    var v708 = sequence$$15.substring(v1030, v1031);
    var v220 = v708 + sequence$$15;
    var v221 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v220 + v221;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v223 = outputWindow.document;
  v223.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  var v224 = outputWindow.document;
  var v1262 = '<tr><td class="title" width="200px">' + "Site:";
  var v1032 = v1262 + '</td><td class="title">';
  var v709 = v1032 + "Positions:";
  var v225 = v709 + "</td></tr>\n";
  v224.write(v225);
  var i$$9 = 0;
  var v710 = arrayOfItems.length;
  var v241 = i$$9 < v710;
  for (;v241;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v711 = arrayOfItems[i$$9];
    var v226 = v711.match(/\/.+\//);
    matchExp = v226 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    var v1263 = arrayOfItems[i$$9];
    var v1033 = v1263.match(/\)\D*\d+/);
    var v712 = v1033.toString();
    var v227 = v712.replace(/\)\D*/, "");
    cutDistance = parseFloat(v227);
    var v233 = matchArray$$1 = matchExp.exec(sequence$$15);
    for (;v233;) {
      var v228 = matchExp.lastIndex;
      matchPosition = v228 - cutDistance;
      var v713 = matchPosition >= lowerLimit;
      if (v713) {
        v713 = matchPosition < upperLimit;
      }
      var v231 = v713;
      if (v231) {
        timesFound++;
        var v229 = tempString$$1 + ", ";
        var v714 = matchPosition - shiftValue;
        var v230 = v714 + 1;
        tempString$$1 = v229 + v230;
      }
      var v715 = matchExp.lastIndex;
      var v1034 = RegExp.lastMatch;
      var v716 = v1034.length;
      var v232 = v715 - v716;
      matchExp.lastIndex = v232 + 1;
      v233 = matchArray$$1 = matchExp.exec(sequence$$15);
    }
    var v717 = tempString$$1.search(/\d/);
    var v234 = v717 != -1;
    if (v234) {
      tempString$$1 = tempString$$1.replace(/none,\s*/, "");
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
    var v1520 = '<tr><td class="' + backGroundClass;
    var v1499 = v1520 + '">';
    var v1546 = arrayOfItems[i$$9];
    var v1535 = v1546.match(/\([^\(]+\)/);
    var v1521 = v1535.toString();
    var v1500 = v1521.replace(/\(|\)/g, "");
    var v1469 = v1499 + v1500;
    var v1395 = v1469 + '</td><td class="';
    var v1264 = v1395 + backGroundClass;
    var v1035 = v1264 + '">';
    var v718 = v1035 + tempString$$1;
    var v240 = v718 + "</td></tr>\n";
    v239.write(v240);
    timesFound = 0;
    i$$9++;
    var v719 = arrayOfItems.length;
    v241 = i$$9 < v719;
  }
  var v242 = outputWindow.document;
  v242.write("</tbody></table>\n");
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v243 = outputWindow.document;
  v243.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  var v244 = outputWindow.document;
  var v1470 = '<tr><td class="title">' + "Pattern:";
  var v1396 = v1470 + '</td><td class="title">';
  var v1265 = v1396 + "Times found:";
  var v1036 = v1265 + '</td><td class="title">';
  var v720 = v1036 + "Percentage:";
  var v245 = v720 + "</td></tr>\n";
  v244.write(v245);
  var i$$10 = 0;
  var v721 = arrayOfItems$$1.length;
  var v254 = i$$10 < v721;
  for (;v254;) {
    var tempNumber = 0;
    var v722 = arrayOfItems$$1[i$$10];
    var v246 = v722.match(/\/[^\/]+\//);
    var matchExp$$1 = v246 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    var v723 = sequence$$16.search(matchExp$$1);
    var v248 = v723 != -1;
    if (v248) {
      var v247 = sequence$$16.match(matchExp$$1);
      tempNumber = v247.length;
    }
    var percentage = 0;
    var v1037 = originalLength + 1;
    var v1397 = arrayOfItems$$1[i$$10];
    var v1266 = v1397.match(/\d+/);
    var v1038 = parseFloat(v1266);
    var v724 = v1037 - v1038;
    var v251 = v724 > 0;
    if (v251) {
      var v249 = 100 * tempNumber;
      var v725 = originalLength + 1;
      var v1267 = arrayOfItems$$1[i$$10];
      var v1039 = v1267.match(/\d+/);
      var v726 = parseFloat(v1039);
      var v250 = v725 - v726;
      percentage = v249 / v250;
    }
    var v252 = outputWindow.document;
    var v1547 = arrayOfItems$$1[i$$10];
    var v1536 = v1547.match(/\([^\(]+\)\b/);
    var v1522 = v1536.toString();
    var v1501 = v1522.replace(/\(|\)/g, "");
    var v1471 = "<tr><td>" + v1501;
    var v1398 = v1471 + "</td><td>";
    var v1268 = v1398 + tempNumber;
    var v1040 = v1268 + "</td><td>";
    var v1041 = percentage.toFixed(2);
    var v727 = v1040 + v1041;
    var v253 = v727 + "</td></tr>\n";
    v252.write(v253);
    i$$10++;
    var v728 = arrayOfItems$$1.length;
    v254 = i$$10 < v728;
  }
  var v255 = outputWindow.document;
  v255.write("</tbody></table>\n");
  return true;
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v729 = sequence$$17.length;
  var v262 = v729 > 0;
  for (;v262;) {
    maxNum$$1 = sequence$$17.length;
    var v730 = Math.random();
    var v256 = v730 * maxNum$$1;
    randNum$$1 = Math.floor(v256);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v257 = randNum$$1 + 1;
    var v258 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v257, v258);
    sequence$$17 = tempString1 + tempString2;
    var v731 = tempSeq.length;
    var v261 = v731 == 60;
    if (v261) {
      var v259 = outputWindow.document;
      var v260 = tempSeq + "\n";
      v259.write(v260);
      tempSeq = "";
    }
    var v732 = sequence$$17.length;
    v262 = v732 > 0;
  }
  var v263 = outputWindow.document;
  var v264 = tempSeq + "\n";
  v263.write(v264);
  return true;
}
function pairwiseAlignCodons() {
  var theDocument = document;
  var newCodonsOne = "";
  var titleOne = "";
  var newCodonsTwo = "";
  var titleTwo = "";
  var maxInput$$3 = 6E3;
  var v733 = testScript();
  var v265 = v733 == false;
  if (v265) {
    return;
  }
  var v1537 = theDocument.forms;
  var v1523 = v1537[0];
  var v1502 = v1523.elements;
  var v1472 = v1502[0];
  var v1399 = checkFormElement(v1472);
  var v1269 = v1399 == false;
  var v1401 = !v1269;
  if (v1401) {
    var v1548 = theDocument.forms;
    var v1538 = v1548[0];
    var v1524 = v1538.elements;
    var v1503 = v1524[0];
    var v1473 = v1503.value;
    var v1400 = checkSequenceLength(v1473, maxInput$$3);
    v1269 = v1400 == false;
  }
  var v1042 = v1269;
  var v1271 = !v1042;
  if (v1271) {
    var v1525 = theDocument.forms;
    var v1504 = v1525[0];
    var v1474 = v1504.elements;
    var v1402 = v1474[1];
    var v1270 = checkFormElement(v1402);
    v1042 = v1270 == false;
  }
  var v734 = v1042;
  var v1044 = !v734;
  if (v1044) {
    var v1526 = theDocument.forms;
    var v1505 = v1526[0];
    var v1475 = v1505.elements;
    var v1403 = v1475[1];
    var v1272 = v1403.value;
    var v1043 = checkSequenceLength(v1272, maxInput$$3);
    v734 = v1043 == false;
  }
  var v266 = v734;
  if (v266) {
    return;
  }
  var MATRIX = "codon";
  var v1506 = theDocument.forms;
  var v1476 = v1506[0];
  var v1404 = v1476.elements;
  var v1273 = v1404[5];
  var v1045 = v1273.options;
  var v1507 = theDocument.forms;
  var v1477 = v1507[0];
  var v1405 = v1477.elements;
  var v1274 = v1405[5];
  var v1046 = v1274.selectedIndex;
  var v735 = v1045[v1046];
  var v267 = v735.value;
  var BEGIN_GAP_PENALTY = parseInt(v267);
  var v1508 = theDocument.forms;
  var v1478 = v1508[0];
  var v1406 = v1478.elements;
  var v1275 = v1406[6];
  var v1047 = v1275.options;
  var v1509 = theDocument.forms;
  var v1479 = v1509[0];
  var v1407 = v1479.elements;
  var v1276 = v1407[6];
  var v1048 = v1276.selectedIndex;
  var v736 = v1047[v1048];
  var v268 = v736.value;
  var GAP_PENALTY = parseInt(v268);
  var v1510 = theDocument.forms;
  var v1480 = v1510[0];
  var v1408 = v1480.elements;
  var v1277 = v1408[7];
  var v1049 = v1277.options;
  var v1511 = theDocument.forms;
  var v1481 = v1511[0];
  var v1409 = v1481.elements;
  var v1278 = v1409[7];
  var v1050 = v1278.selectedIndex;
  var v737 = v1049[v1050];
  var v269 = v737.value;
  var END_GAP_PENALTY = parseInt(v269);
  var v1410 = theDocument.forms;
  var v1279 = v1410[0];
  var v1051 = v1279.elements;
  var v738 = v1051[0];
  var v270 = v738.value;
  newCodonsOne = getSequenceFromFasta(v270);
  newCodonsOne = removeNonDna(newCodonsOne);
  newCodonsOne = newCodonsOne.replace(/u/g, "t");
  newCodonsOne = newCodonsOne.replace(/U/g, "T");
  newCodonsTwo = removeNonDnaStrict(newCodonsOne);
  var v1411 = theDocument.forms;
  var v1280 = v1411[0];
  var v1052 = v1280.elements;
  var v739 = v1052[0];
  var v271 = v739.value;
  titleOne = getTitleFromFasta(v271);
  var v1412 = theDocument.forms;
  var v1281 = v1412[0];
  var v1053 = v1281.elements;
  var v740 = v1053[1];
  var v272 = v740.value;
  newCodonsTwo = getSequenceFromFasta(v272);
  newCodonsTwo = removeNonDna(newCodonsTwo);
  newCodonsTwo = newCodonsTwo.replace(/u/gi, "t");
  newCodonsTwo = newCodonsTwo.replace(/U/gi, "T");
  newCodonsTwo = removeNonDnaStrict(newCodonsTwo);
  var v1413 = theDocument.forms;
  var v1282 = v1413[0];
  var v1054 = v1282.elements;
  var v741 = v1054[1];
  var v273 = v741.value;
  titleTwo = getTitleFromFasta(v273);
  var v1283 = newCodonsOne.length;
  var v1055 = v1283 % 3;
  var v742 = v1055 != 0;
  var v1057 = !v742;
  if (v1057) {
    var v1284 = newCodonsTwo.length;
    var v1056 = v1284 % 3;
    v742 = v1056 != 0;
  }
  var v275 = v742;
  if (v275) {
    var v274 = newCodonsOne.length;
    alert(v274);
    alert(newCodonsTwo);
    alert("The sequences must be evenly divisible by 3. ");
    return;
  }
  openWindow();
  openPre();
  var v276 = outputWindow.document;
  var v277 = getPairwiseAlignTitle(titleOne, newCodonsOne, titleTwo, newCodonsTwo);
  v276.write(v277);
  var v743 = newCodonsOne.search(/.../);
  var v278 = v743 != -1;
  if (v278) {
    newCodonsOne = newCodonsOne.match(/.../g);
  }
  var v744 = newCodonsTwo.search(/.../);
  var v279 = v744 != -1;
  if (v279) {
    newCodonsTwo = newCodonsTwo.match(/.../g);
  }
  pairwiseCodon(titleOne, newCodonsOne, titleTwo, newCodonsTwo, MATRIX, GAP_PENALTY, BEGIN_GAP_PENALTY, END_GAP_PENALTY);
  closePre();
  closeWindow();
  return;
}
function pairwiseCodon(titleOne$$1, newCodonsOne$$1, titleTwo$$1, newCodonsTwo$$1, matrix, gapPenalty, beginGapPenalty, endGapPenalty) {
  var useLinearSpace = true;
  var useQuadraticSpace = false;
  var scoringMatrix;
  scoringMatrix = new Codon;
  var scoreSet = new ScoreSet;
  scoreSet.setScoreSetParam(scoringMatrix, gapPenalty, beginGapPenalty, endGapPenalty);
  var alignment;
  if (useLinearSpace) {
    alignment = new AlignPairLinear;
    alignment.setAlignParam(newCodonsOne$$1, newCodonsTwo$$1, scoreSet);
    alignment.align();
    var v280 = outputWindow.document;
    var v745 = ">" + titleOne$$1;
    var v281 = v745 + "\n";
    v280.write(v281);
    var v282 = outputWindow.document;
    var v746 = alignment.getAlignedM();
    var v283 = addReturns(v746);
    v282.write(v283);
    var v284 = outputWindow.document;
    v284.write("\n");
    var v285 = outputWindow.document;
    v285.write("\n");
    var v286 = outputWindow.document;
    var v747 = ">" + titleTwo$$1;
    var v287 = v747 + "\n";
    v286.write(v287);
    var v288 = outputWindow.document;
    var v748 = alignment.getAlignedN();
    var v289 = addReturns(v748);
    v288.write(v289);
    var v290 = outputWindow.document;
    v290.write("\n\n");
    var v291 = outputWindow.document;
    var v1058 = alignment.score;
    var v749 = "Alignment score: " + v1058;
    var v292 = v749 + "\n\n";
    v291.write(v292);
  }
  if (useQuadraticSpace) {
    alignment = new AlignPairQuad;
    alignment.initializeMatrix(newCodonsOne$$1, newCodonsTwo$$1, scoreSet);
    alignment.fillMatrix();
    alignment.align();
    var v293 = outputWindow.document;
    var v750 = ">" + titleOne$$1;
    var v294 = v750 + "\n";
    v293.write(v294);
    var v295 = outputWindow.document;
    var v751 = alignment.getAlignedM();
    var v296 = addReturns(v751);
    v295.write(v296);
    var v297 = outputWindow.document;
    v297.write("\n");
    var v298 = outputWindow.document;
    v298.write("\n");
    var v299 = outputWindow.document;
    var v752 = ">" + titleTwo$$1;
    var v300 = v752 + "\n";
    v299.write(v300);
    var v301 = outputWindow.document;
    var v753 = alignment.getAlignedN();
    var v302 = addReturns(v753);
    v301.write(v302);
    var v303 = outputWindow.document;
    v303.write("\n\n");
    var v304 = outputWindow.document;
    var v1059 = alignment.score;
    var v754 = "Alignment score: " + v1059;
    var v305 = v754 + "\n\n";
    v304.write(v305);
  }
  return;
}
function getScore(r1$$1, r2) {
  var v306 = this.scoringMatrix;
  return v306.scoringMatrix_getScore(r1$$1, r2);
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
  var v1060 = this.scoreHash;
  var v1061 = r1$$2 + r2$$1;
  var v755 = v1060[v1061];
  var v310 = v755 == null;
  if (v310) {
    var v1062 = "Unrecognized residue pair: " + r1$$2;
    var v756 = v1062 + ", ";
    var v307 = v756 + r2$$1;
    throw v307 + ".";
  } else {
    var v308 = this.scoreHash;
    var v309 = r1$$2 + r2$$1;
    return v308[v309];
  }
  return;
}
function scoringMatrix_fillHash(matrix$$1) {
  var v311 = matrix$$1[0];
  var cols = v311.split(/\s+/);
  var cells;
  var i$$11 = 1;
  var v757 = matrix$$1.length;
  var v316 = i$$11 < v757;
  for (;v316;) {
    var v312 = matrix$$1[i$$11];
    cells = v312.split(/\s+/);
    var j$$10 = 1;
    var v1063 = cols.length;
    var v758 = v1063 + 1;
    var v315 = j$$10 < v758;
    for (;v315;) {
      var v313 = this.scoreHash;
      var v1064 = cells[0];
      var v759 = v1064.toLowerCase();
      var v1285 = j$$10 - 1;
      var v1065 = cols[v1285];
      var v760 = v1065.toLowerCase();
      var v314 = v759 + v760;
      var v761 = cells[j$$10];
      var v1584 = parseInt(v761);
      v313[v314] = v1584;
      j$$10++;
      var v1066 = cols.length;
      var v762 = v1066 + 1;
      v315 = j$$10 < v762;
    }
    i$$11++;
    var v763 = matrix$$1.length;
    v316 = i$$11 < v763;
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
  this.scoringMatrix_fillHash(matrix$$2);
  return;
}
function align() {
  var v1067 = this.M;
  var v764 = v1067.length;
  var v333 = v764 == 0;
  if (v333) {
    var j$$11 = 1;
    var v1068 = this.N;
    var v765 = v1068.length;
    var v322 = j$$11 <= v765;
    for (;v322;) {
      var v317 = this.alignedM;
      v317.push(".--");
      var v318 = this.alignedN;
      var v766 = this.N;
      var v767 = j$$11 - 1;
      var v319 = v766[v767];
      v318.push(v319);
      var v320 = this.score;
      var v768 = this.scoreSet;
      var v321 = v768.gap;
      this.score = v320 + v321;
      j$$11++;
      var v1069 = this.N;
      var v769 = v1069.length;
      v322 = j$$11 <= v769;
    }
  } else {
    var v1070 = this.N;
    var v770 = v1070.length;
    var v332 = v770 == 0;
    if (v332) {
      j$$11 = 1;
      var v1071 = this.M;
      var v771 = v1071.length;
      var v328 = j$$11 <= v771;
      for (;v328;) {
        var v323 = this.alignedN;
        v323.push(".--");
        var v324 = this.alignedM;
        var v772 = this.M;
        var v773 = j$$11 - 1;
        var v325 = v772[v773];
        v324.push(v325);
        var v326 = this.score;
        var v774 = this.scoreSet;
        var v327 = v774.gap;
        this.score = v326 + v327;
        j$$11++;
        var v1072 = this.M;
        var v775 = v1072.length;
        v328 = j$$11 <= v775;
      }
    } else {
      var v1286 = this.M;
      var v1073 = v1286.length;
      var v776 = v1073 == 0;
      if (v776) {
        var v1287 = this.N;
        var v1074 = v1287.length;
        v776 = v1074 == 0;
      }
      var v331 = v776;
      if (v331) {
      } else {
        var v777 = this.M;
        var v329 = v777.length;
        var v778 = this.N;
        var v330 = v778.length;
        this.path(0, 0, v329, v330);
      }
    }
  }
  return;
}
function path(i1, j1, i2, j2) {
  var v1075 = i1 + 1;
  var v779 = v1075 == i2;
  var v1076 = !v779;
  if (v1076) {
    v779 = j1 == j2;
  }
  var v430 = v779;
  if (v430) {
    var subM = new Array;
    var subN = new Array;
    var i$$12 = i1 + 1;
    var v335 = i$$12 <= i2;
    for (;v335;) {
      var v780 = this.M;
      var v781 = i$$12 - 1;
      var v334 = v780[v781];
      subM.push(v334);
      i$$12++;
      v335 = i$$12 <= i2;
    }
    var j$$12 = j1 + 1;
    var v337 = j$$12 <= j2;
    for (;v337;) {
      var v782 = this.N;
      var v783 = j$$12 - 1;
      var v336 = v782[v783];
      subN.push(v336);
      j$$12++;
      v337 = j$$12 <= j2;
    }
    var alignment$$1 = new AlignPairQuad;
    subScoreSet = new ScoreSet;
    var v360 = j1 == j2;
    if (v360) {
      var v351 = j1 == 0;
      if (v351) {
        var v784 = this.scoreSet;
        var v338 = v784.scoringMatrix;
        var v785 = this.scoreSet;
        var v339 = v785.beginGap;
        var v786 = this.scoreSet;
        var v340 = v786.beginGap;
        var v787 = this.scoreSet;
        var v341 = v787.beginGap;
        subScoreSet.setScoreSetParam(v338, v339, v340, v341);
      } else {
        var v1077 = this.N;
        var v788 = v1077.length;
        var v350 = j1 == v788;
        if (v350) {
          var v789 = this.scoreSet;
          var v342 = v789.scoringMatrix;
          var v790 = this.scoreSet;
          var v343 = v790.endGap;
          var v791 = this.scoreSet;
          var v344 = v791.endGap;
          var v792 = this.scoreSet;
          var v345 = v792.endGap;
          subScoreSet.setScoreSetParam(v342, v343, v344, v345);
        } else {
          var v793 = this.scoreSet;
          var v346 = v793.scoringMatrix;
          var v794 = this.scoreSet;
          var v347 = v794.gap;
          var v795 = this.scoreSet;
          var v348 = v795.gap;
          var v796 = this.scoreSet;
          var v349 = v796.gap;
          subScoreSet.setScoreSetParam(v346, v347, v348, v349);
        }
      }
    } else {
      var v797 = this.scoreSet;
      var v352 = v797.scoringMatrix;
      var v798 = this.scoreSet;
      var v353 = v798.gap;
      var v799 = this.scoreSet;
      var v354 = v799.beginGap;
      var v800 = this.scoreSet;
      var v355 = v800.endGap;
      subScoreSet.setScoreSetParam(v352, v353, v354, v355);
      subScoreSet.useBeginGapTop = false;
      subScoreSet.useBeginGapLeft = false;
      subScoreSet.useEndGapBottom = false;
      subScoreSet.useEndGapRight = false;
      var v356 = i1 == 0;
      if (v356) {
        subScoreSet.useBeginGapTop = true;
      }
      var v357 = j1 == 0;
      if (v357) {
        subScoreSet.useBeginGapLeft = true;
      }
      var v1078 = this.N;
      var v801 = v1078.length;
      var v358 = j2 == v801;
      if (v358) {
        subScoreSet.useEndGapRight = true;
      }
      var v1079 = this.M;
      var v802 = v1079.length;
      var v359 = i2 == v802;
      if (v359) {
        subScoreSet.useEndGapBottom = true;
      }
    }
    alignment$$1.initializeMatrix(subM, subN, subScoreSet);
    alignment$$1.fillMatrix();
    alignment$$1.align();
    var v361 = this.alignedM;
    var v362 = alignment$$1.getAlignedM();
    v361.push(v362);
    var v363 = this.alignedN;
    var v364 = alignment$$1.getAlignedN();
    v363.push(v364);
    var v365 = this.score;
    var v366 = alignment$$1.score;
    this.score = v365 + v366;
  } else {
    var v803 = i1 + i2;
    var v367 = v803 / 2;
    var middle = Math.floor(v367);
    var v368 = this.Sn;
    v368[j1] = 0;
    var v373 = i1 == 0;
    if (v373) {
      j$$12 = j1 + 1;
      var v370 = j$$12 <= j2;
      for (;v370;) {
        var v369 = this.Sn;
        var v1080 = this.Sn;
        var v1081 = j$$12 - 1;
        var v804 = v1080[v1081];
        var v1082 = this.scoreSet;
        var v805 = v1082.beginGap;
        v369[j$$12] = v804 - v805;
        j$$12++;
        v370 = j$$12 <= j2;
      }
    } else {
      j$$12 = j1 + 1;
      var v372 = j$$12 <= j2;
      for (;v372;) {
        var v371 = this.Sn;
        var v1083 = this.Sn;
        var v1084 = j$$12 - 1;
        var v806 = v1083[v1084];
        var v1085 = this.scoreSet;
        var v807 = v1085.gap;
        v371[j$$12] = v806 - v807;
        j$$12++;
        v372 = j$$12 <= j2;
      }
    }
    var diag;
    var left$$1;
    i$$12 = i1 + 1;
    var v395 = i$$12 <= middle;
    for (;v395;) {
      var v374 = this.Sn;
      diag = v374[j1];
      var v379 = j1 == 0;
      if (v379) {
        var v808 = this.Sn;
        var v375 = v808[j1];
        var v809 = this.scoreSet;
        var v376 = v809.beginGap;
        left$$1 = v375 - v376;
      } else {
        var v810 = this.Sn;
        var v377 = v810[j1];
        var v811 = this.scoreSet;
        var v378 = v811.gap;
        left$$1 = v377 - v378;
      }
      var v380 = this.Sn;
      v380[j1] = left$$1;
      j$$12 = j1 + 1;
      var v394 = j$$12 <= j2;
      for (;v394;) {
        var v1288 = this.N;
        var v1086 = v1288.length;
        var v812 = j$$12 == v1086;
        if (v812) {
          var v1289 = this.M;
          var v1087 = v1289.length;
          v812 = i$$12 == v1087;
        }
        var v391 = v812;
        if (v391) {
          var v1088 = this.Sn;
          var v813 = v1088[j$$12];
          var v1089 = this.scoreSet;
          var v814 = v1089.endGap;
          var v381 = v813 - v814;
          var v1290 = this.scoreSet;
          var v1090 = v1290.endGap;
          var v815 = left$$1 - v1090;
          var v1291 = this.scoreSet;
          var v1414 = this.M;
          var v1415 = i$$12 - 1;
          var v1292 = v1414[v1415];
          var v1416 = this.N;
          var v1417 = j$$12 - 1;
          var v1293 = v1416[v1417];
          var v1091 = v1291.getScore(v1292, v1293);
          var v816 = diag + v1091;
          var v382 = Math.max(v815, v816);
          left$$1 = Math.max(v381, v382);
        } else {
          var v1092 = this.M;
          var v817 = v1092.length;
          var v390 = i$$12 == v817;
          if (v390) {
            var v1093 = this.Sn;
            var v818 = v1093[j$$12];
            var v1094 = this.scoreSet;
            var v819 = v1094.gap;
            var v383 = v818 - v819;
            var v1294 = this.scoreSet;
            var v1095 = v1294.endGap;
            var v820 = left$$1 - v1095;
            var v1295 = this.scoreSet;
            var v1418 = this.M;
            var v1419 = i$$12 - 1;
            var v1296 = v1418[v1419];
            var v1420 = this.N;
            var v1421 = j$$12 - 1;
            var v1297 = v1420[v1421];
            var v1096 = v1295.getScore(v1296, v1297);
            var v821 = diag + v1096;
            var v384 = Math.max(v820, v821);
            left$$1 = Math.max(v383, v384);
          } else {
            var v1097 = this.N;
            var v822 = v1097.length;
            var v389 = j$$12 == v822;
            if (v389) {
              var v1098 = this.Sn;
              var v823 = v1098[j$$12];
              var v1099 = this.scoreSet;
              var v824 = v1099.endGap;
              var v385 = v823 - v824;
              var v1298 = this.scoreSet;
              var v1100 = v1298.gap;
              var v825 = left$$1 - v1100;
              var v1299 = this.scoreSet;
              var v1422 = this.M;
              var v1423 = i$$12 - 1;
              var v1300 = v1422[v1423];
              var v1424 = this.N;
              var v1425 = j$$12 - 1;
              var v1301 = v1424[v1425];
              var v1101 = v1299.getScore(v1300, v1301);
              var v826 = diag + v1101;
              var v386 = Math.max(v825, v826);
              left$$1 = Math.max(v385, v386);
            } else {
              var v1102 = this.Sn;
              var v827 = v1102[j$$12];
              var v1103 = this.scoreSet;
              var v828 = v1103.gap;
              var v387 = v827 - v828;
              var v1302 = this.scoreSet;
              var v1104 = v1302.gap;
              var v829 = left$$1 - v1104;
              var v1303 = this.scoreSet;
              var v1426 = this.M;
              var v1427 = i$$12 - 1;
              var v1304 = v1426[v1427];
              var v1428 = this.N;
              var v1429 = j$$12 - 1;
              var v1305 = v1428[v1429];
              var v1105 = v1303.getScore(v1304, v1305);
              var v830 = diag + v1105;
              var v388 = Math.max(v829, v830);
              left$$1 = Math.max(v387, v388);
            }
          }
        }
        var v392 = this.Sn;
        diag = v392[j$$12];
        var v393 = this.Sn;
        v393[j$$12] = left$$1;
        j$$12++;
        v394 = j$$12 <= j2;
      }
      i$$12++;
      v395 = i$$12 <= middle;
    }
    var v396 = this.Sp;
    v396[j2] = 0;
    var v1106 = this.M;
    var v831 = v1106.length;
    var v401 = i2 == v831;
    if (v401) {
      j$$12 = j2 - 1;
      var v398 = j$$12 >= j1;
      for (;v398;) {
        var v397 = this.Sp;
        var v1107 = this.Sp;
        var v1108 = j$$12 + 1;
        var v832 = v1107[v1108];
        var v1109 = this.scoreSet;
        var v833 = v1109.endGap;
        v397[j$$12] = v832 - v833;
        j$$12--;
        v398 = j$$12 >= j1;
      }
    } else {
      j$$12 = j2 - 1;
      var v400 = j$$12 >= j1;
      for (;v400;) {
        var v399 = this.Sp;
        var v1110 = this.Sp;
        var v1111 = j$$12 + 1;
        var v834 = v1110[v1111];
        var v1112 = this.scoreSet;
        var v835 = v1112.gap;
        v399[j$$12] = v834 - v835;
        j$$12--;
        v400 = j$$12 >= j1;
      }
    }
    var right$$1;
    i$$12 = i2 - 1;
    var v423 = i$$12 >= middle;
    for (;v423;) {
      var v402 = this.Sp;
      diag = v402[j2];
      var v1113 = this.N;
      var v836 = v1113.length;
      var v407 = j2 == v836;
      if (v407) {
        var v837 = this.Sp;
        var v403 = v837[j2];
        var v838 = this.scoreSet;
        var v404 = v838.endGap;
        right$$1 = v403 - v404;
      } else {
        var v839 = this.Sp;
        var v405 = v839[j2];
        var v840 = this.scoreSet;
        var v406 = v840.gap;
        right$$1 = v405 - v406;
      }
      var v408 = this.Sp;
      v408[j2] = right$$1;
      j$$12 = j2 - 1;
      var v422 = j$$12 >= j1;
      for (;v422;) {
        var v841 = j$$12 == 0;
        if (v841) {
          v841 = i$$12 == 0;
        }
        var v419 = v841;
        if (v419) {
          var v1114 = this.Sp;
          var v842 = v1114[j$$12];
          var v1115 = this.scoreSet;
          var v843 = v1115.beginGap;
          var v409 = v842 - v843;
          var v1306 = this.scoreSet;
          var v1116 = v1306.beginGap;
          var v844 = right$$1 - v1116;
          var v1307 = this.scoreSet;
          var v1430 = this.M;
          var v1482 = i$$12 + 1;
          var v1431 = v1482 - 1;
          var v1308 = v1430[v1431];
          var v1432 = this.N;
          var v1483 = j$$12 + 1;
          var v1433 = v1483 - 1;
          var v1309 = v1432[v1433];
          var v1117 = v1307.getScore(v1308, v1309);
          var v845 = diag + v1117;
          var v410 = Math.max(v844, v845);
          right$$1 = Math.max(v409, v410);
        } else {
          var v418 = j$$12 == 0;
          if (v418) {
            var v1118 = this.Sp;
            var v846 = v1118[j$$12];
            var v1119 = this.scoreSet;
            var v847 = v1119.beginGap;
            var v411 = v846 - v847;
            var v1310 = this.scoreSet;
            var v1120 = v1310.gap;
            var v848 = right$$1 - v1120;
            var v1311 = this.scoreSet;
            var v1434 = this.M;
            var v1484 = i$$12 + 1;
            var v1435 = v1484 - 1;
            var v1312 = v1434[v1435];
            var v1436 = this.N;
            var v1485 = j$$12 + 1;
            var v1437 = v1485 - 1;
            var v1313 = v1436[v1437];
            var v1121 = v1311.getScore(v1312, v1313);
            var v849 = diag + v1121;
            var v412 = Math.max(v848, v849);
            right$$1 = Math.max(v411, v412);
          } else {
            var v417 = i$$12 == 0;
            if (v417) {
              var v1122 = this.Sp;
              var v850 = v1122[j$$12];
              var v1123 = this.scoreSet;
              var v851 = v1123.gap;
              var v413 = v850 - v851;
              var v1314 = this.scoreSet;
              var v1124 = v1314.beginGap;
              var v852 = right$$1 - v1124;
              var v1315 = this.scoreSet;
              var v1438 = this.M;
              var v1486 = i$$12 + 1;
              var v1439 = v1486 - 1;
              var v1316 = v1438[v1439];
              var v1440 = this.N;
              var v1487 = j$$12 + 1;
              var v1441 = v1487 - 1;
              var v1317 = v1440[v1441];
              var v1125 = v1315.getScore(v1316, v1317);
              var v853 = diag + v1125;
              var v414 = Math.max(v852, v853);
              right$$1 = Math.max(v413, v414);
            } else {
              var v1126 = this.Sp;
              var v854 = v1126[j$$12];
              var v1127 = this.scoreSet;
              var v855 = v1127.gap;
              var v415 = v854 - v855;
              var v1318 = this.scoreSet;
              var v1128 = v1318.gap;
              var v856 = right$$1 - v1128;
              var v1319 = this.scoreSet;
              var v1442 = this.M;
              var v1488 = i$$12 + 1;
              var v1443 = v1488 - 1;
              var v1320 = v1442[v1443];
              var v1444 = this.N;
              var v1489 = j$$12 + 1;
              var v1445 = v1489 - 1;
              var v1321 = v1444[v1445];
              var v1129 = v1319.getScore(v1320, v1321);
              var v857 = diag + v1129;
              var v416 = Math.max(v856, v857);
              right$$1 = Math.max(v415, v416);
            }
          }
        }
        var v420 = this.Sp;
        diag = v420[j$$12];
        var v421 = this.Sp;
        v421[j$$12] = right$$1;
        j$$12--;
        v422 = j$$12 >= j1;
      }
      i$$12--;
      v423 = i$$12 >= middle;
    }
    var v858 = this.Sn;
    var v424 = v858[j1];
    var v859 = this.Sp;
    var v425 = v859[j1];
    var maxValue = v424 + v425;
    var maxJ = j1;
    j$$12 = j1 + 1;
    var v429 = j$$12 <= j2;
    for (;v429;) {
      var v1322 = this.Sn;
      var v1130 = v1322[j$$12];
      var v1323 = this.Sp;
      var v1131 = v1323[j$$12];
      var v860 = v1130 + v1131;
      var v428 = v860 >= maxValue;
      if (v428) {
        var v861 = this.Sn;
        var v426 = v861[j$$12];
        var v862 = this.Sp;
        var v427 = v862[j$$12];
        maxValue = v426 + v427;
        maxJ = j$$12;
      }
      j$$12++;
      v429 = j$$12 <= j2;
    }
    this.path(i1, j1, middle, maxJ);
    this.path(middle, maxJ, i2, j2);
  }
  return;
}
function getAlignedM() {
  var v431 = this.alignedM;
  return v431.join("");
}
function getAlignedN() {
  var v432 = this.alignedN;
  return v432.join("");
}
function setAlignParam(M, N, scoreSet$$1) {
  this.M = M;
  this.N = N;
  var v1585 = new Array;
  this.alignedM = v1585;
  var v1586 = new Array;
  this.alignedN = v1586;
  this.scoreSet = scoreSet$$1;
  var v863 = this.N;
  var v433 = v863.length;
  var v1587 = new Array(v433);
  this.Sn = v1587;
  var v864 = this.N;
  var v434 = v864.length;
  var v1588 = new Array(v434);
  this.Sp = v1588;
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
  var v1132 = this.M;
  var v865 = v1132.length;
  var v435 = v865 + 1;
  var v1589 = new Array(v435);
  this.nodes = v1589;
  var i$$13 = 0;
  var v1133 = this.nodes;
  var v866 = v1133.length;
  var v439 = i$$13 < v866;
  for (;v439;) {
    var v436 = this.nodes;
    var v1324 = this.N;
    var v1134 = v1324.length;
    var v867 = v1134 + 1;
    var v1590 = new Array(v867);
    v436[i$$13] = v1590;
    var j$$13 = 0;
    var v1325 = this.nodes;
    var v1135 = v1325[i$$13];
    var v868 = v1135.length;
    var v438 = j$$13 < v868;
    for (;v438;) {
      var v869 = this.nodes;
      var v437 = v869[i$$13];
      var v1591 = new Node;
      v437[j$$13] = v1591;
      j$$13++;
      var v1326 = this.nodes;
      var v1136 = v1326[i$$13];
      var v870 = v1136.length;
      v438 = j$$13 < v870;
    }
    i$$13++;
    var v1137 = this.nodes;
    var v871 = v1137.length;
    v439 = i$$13 < v871;
  }
  var v1138 = this.nodes;
  var v872 = v1138[0];
  var v440 = v872[0];
  v440.value = 0;
  i$$13 = 1;
  var v1139 = this.nodes;
  var v873 = v1139.length;
  var v446 = i$$13 < v873;
  for (;v446;) {
    var v874 = this.scoreSet;
    var v443 = v874.useBeginGapLeft;
    if (v443) {
      var v1140 = this.nodes;
      var v875 = v1140[i$$13];
      var v441 = v875[0];
      var v1446 = this.nodes;
      var v1447 = i$$13 - 1;
      var v1327 = v1446[v1447];
      var v1141 = v1327[0];
      var v876 = v1141.value;
      var v1142 = this.scoreSet;
      var v877 = v1142.beginGap;
      v441.value = v876 - v877;
    } else {
      var v1143 = this.nodes;
      var v878 = v1143[i$$13];
      var v442 = v878[0];
      var v1448 = this.nodes;
      var v1449 = i$$13 - 1;
      var v1328 = v1448[v1449];
      var v1144 = v1328[0];
      var v879 = v1144.value;
      var v1145 = this.scoreSet;
      var v880 = v1145.gap;
      v442.value = v879 - v880;
    }
    var v1146 = this.nodes;
    var v881 = v1146[i$$13];
    var v444 = v881[0];
    v444.tracebackI = i$$13 - 1;
    var v1147 = this.nodes;
    var v882 = v1147[i$$13];
    var v445 = v882[0];
    v445.tracebackJ = 0;
    i$$13++;
    var v1148 = this.nodes;
    var v883 = v1148.length;
    v446 = i$$13 < v883;
  }
  j$$13 = 1;
  var v1329 = this.nodes;
  var v1149 = v1329[0];
  var v884 = v1149.length;
  var v452 = j$$13 < v884;
  for (;v452;) {
    var v885 = this.scoreSet;
    var v449 = v885.useBeginGapTop;
    if (v449) {
      var v1150 = this.nodes;
      var v886 = v1150[0];
      var v447 = v886[j$$13];
      var v1450 = this.nodes;
      var v1330 = v1450[0];
      var v1331 = j$$13 - 1;
      var v1151 = v1330[v1331];
      var v887 = v1151.value;
      var v1152 = this.scoreSet;
      var v888 = v1152.beginGap;
      v447.value = v887 - v888;
    } else {
      var v1153 = this.nodes;
      var v889 = v1153[0];
      var v448 = v889[j$$13];
      var v1451 = this.nodes;
      var v1332 = v1451[0];
      var v1333 = j$$13 - 1;
      var v1154 = v1332[v1333];
      var v890 = v1154.value;
      var v1155 = this.scoreSet;
      var v891 = v1155.gap;
      v448.value = v890 - v891;
    }
    var v1156 = this.nodes;
    var v892 = v1156[0];
    var v450 = v892[j$$13];
    v450.tracebackI = 0;
    var v1157 = this.nodes;
    var v893 = v1157[0];
    var v451 = v893[j$$13];
    v451.tracebackJ = j$$13 - 1;
    j$$13++;
    var v1334 = this.nodes;
    var v1158 = v1334[0];
    var v894 = v1158.length;
    v452 = j$$13 < v894;
  }
  return;
}
function dumpMatrix() {
  var v453 = outputWindow.document;
  var v1452 = this.nodes;
  var v1335 = v1452.length;
  var v1159 = "Dynamic programming matrix i=" + v1335;
  var v895 = v1159 + " and j=";
  var v1336 = this.nodes;
  var v1160 = v1336[0];
  var v896 = v1160.length;
  var v454 = v895 + v896;
  v453.write(v454);
  var v455 = outputWindow.document;
  v455.write("\n");
  var i$$14 = 0;
  var v1161 = this.nodes;
  var v897 = v1161.length;
  var v466 = i$$14 < v897;
  for (;v466;) {
    var j$$14 = 0;
    var v1337 = this.nodes;
    var v1162 = v1337[i$$14];
    var v898 = v1162.length;
    var v464 = j$$14 < v898;
    for (;v464;) {
      var v1163 = this.nodes;
      var v899 = v1163[i$$14];
      var v456 = v899[j$$14];
      var traceI = v456.tracebackI;
      var v1164 = this.nodes;
      var v900 = v1164[i$$14];
      var v457 = v900[j$$14];
      var traceJ = v457.tracebackJ;
      var v458 = traceI == undefined;
      if (v458) {
        traceI = "u";
      }
      var v459 = traceJ == undefined;
      if (v459) {
        traceJ = "u";
      }
      var v1527 = "(" + i$$14;
      var v1512 = v1527 + ",";
      var v1490 = v1512 + j$$14;
      var v1453 = v1490 + ")[";
      var v1338 = v1453 + traceI;
      var v1165 = v1338 + ",";
      var v901 = v1165 + traceJ;
      var v460 = v901 + "]=";
      var v1339 = this.nodes;
      var v1166 = v1339[i$$14];
      var v902 = v1166[j$$14];
      var v461 = v902.value;
      var output = v460 + v461;
      var v462 = outputWindow.document;
      var v463 = rightNum(output, "", 20, " ");
      v462.write(v463);
      j$$14++;
      var v1340 = this.nodes;
      var v1167 = v1340[i$$14];
      var v903 = v1167.length;
      v464 = j$$14 < v903;
    }
    var v465 = outputWindow.document;
    v465.write("\n");
    i$$14++;
    var v1168 = this.nodes;
    var v904 = v1168.length;
    v466 = i$$14 < v904;
  }
  var v467 = outputWindow.document;
  v467.write("\n");
  return;
}
function fillMatrix() {
  var i$$15 = 1;
  var v1169 = this.nodes;
  var v905 = v1169.length;
  var v513 = i$$15 < v905;
  for (;v513;) {
    var j$$15 = 1;
    var v1341 = this.nodes;
    var v1170 = v1341[0];
    var v906 = v1170.length;
    var v512 = j$$15 < v906;
    for (;v512;) {
      var a;
      var b;
      var c;
      var v1454 = this.nodes;
      var v1342 = v1454.length;
      var v1171 = v1342 - 1;
      var v907 = i$$15 == v1171;
      if (v907) {
        var v1491 = this.nodes;
        var v1455 = v1491[0];
        var v1343 = v1455.length;
        var v1172 = v1343 - 1;
        v907 = j$$15 == v1172;
      }
      var v498 = v907;
      if (v498) {
        var v908 = this.scoreSet;
        var v472 = v908.useEndGapRight;
        if (v472) {
          var v1344 = this.nodes;
          var v1345 = i$$15 - 1;
          var v1173 = v1344[v1345];
          var v909 = v1173[j$$15];
          var v468 = v909.value;
          var v910 = this.scoreSet;
          var v469 = v910.endGap;
          a = v468 - v469;
        } else {
          var v1346 = this.nodes;
          var v1347 = i$$15 - 1;
          var v1174 = v1346[v1347];
          var v911 = v1174[j$$15];
          var v470 = v911.value;
          var v912 = this.scoreSet;
          var v471 = v912.gap;
          a = v470 - v471;
        }
        var v913 = this.scoreSet;
        var v477 = v913.useEndGapBottom;
        if (v477) {
          var v1348 = this.nodes;
          var v1175 = v1348[i$$15];
          var v1176 = j$$15 - 1;
          var v914 = v1175[v1176];
          var v473 = v914.value;
          var v915 = this.scoreSet;
          var v474 = v915.endGap;
          b = v473 - v474;
        } else {
          var v1349 = this.nodes;
          var v1177 = v1349[i$$15];
          var v1178 = j$$15 - 1;
          var v916 = v1177[v1178];
          var v475 = v916.value;
          var v917 = this.scoreSet;
          var v476 = v917.gap;
          b = v475 - v476;
        }
      } else {
        var v1350 = this.nodes;
        var v1179 = v1350.length;
        var v918 = v1179 - 1;
        var v497 = i$$15 == v918;
        if (v497) {
          var v1351 = this.nodes;
          var v1352 = i$$15 - 1;
          var v1180 = v1351[v1352];
          var v919 = v1180[j$$15];
          var v478 = v919.value;
          var v920 = this.scoreSet;
          var v479 = v920.gap;
          a = v478 - v479;
          var v921 = this.scoreSet;
          var v484 = v921.useEndGapBottom;
          if (v484) {
            var v1353 = this.nodes;
            var v1181 = v1353[i$$15];
            var v1182 = j$$15 - 1;
            var v922 = v1181[v1182];
            var v480 = v922.value;
            var v923 = this.scoreSet;
            var v481 = v923.endGap;
            b = v480 - v481;
          } else {
            var v1354 = this.nodes;
            var v1183 = v1354[i$$15];
            var v1184 = j$$15 - 1;
            var v924 = v1183[v1184];
            var v482 = v924.value;
            var v925 = this.scoreSet;
            var v483 = v925.gap;
            b = v482 - v483;
          }
        } else {
          var v1456 = this.nodes;
          var v1355 = v1456[0];
          var v1185 = v1355.length;
          var v926 = v1185 - 1;
          var v496 = j$$15 == v926;
          if (v496) {
            var v927 = this.scoreSet;
            var v489 = v927.useEndGapRight;
            if (v489) {
              var v1356 = this.nodes;
              var v1357 = i$$15 - 1;
              var v1186 = v1356[v1357];
              var v928 = v1186[j$$15];
              var v485 = v928.value;
              var v929 = this.scoreSet;
              var v486 = v929.endGap;
              a = v485 - v486;
            } else {
              var v1358 = this.nodes;
              var v1359 = i$$15 - 1;
              var v1187 = v1358[v1359];
              var v930 = v1187[j$$15];
              var v487 = v930.value;
              var v931 = this.scoreSet;
              var v488 = v931.gap;
              a = v487 - v488;
            }
            var v1360 = this.nodes;
            var v1188 = v1360[i$$15];
            var v1189 = j$$15 - 1;
            var v932 = v1188[v1189];
            var v490 = v932.value;
            var v933 = this.scoreSet;
            var v491 = v933.gap;
            b = v490 - v491;
          } else {
            var v1361 = this.nodes;
            var v1362 = i$$15 - 1;
            var v1190 = v1361[v1362];
            var v934 = v1190[j$$15];
            var v492 = v934.value;
            var v935 = this.scoreSet;
            var v493 = v935.gap;
            a = v492 - v493;
            var v1363 = this.nodes;
            var v1191 = v1363[i$$15];
            var v1192 = j$$15 - 1;
            var v936 = v1191[v1192];
            var v494 = v936.value;
            var v937 = this.scoreSet;
            var v495 = v937.gap;
            b = v494 - v495;
          }
        }
      }
      var v1364 = this.nodes;
      var v1365 = i$$15 - 1;
      var v1193 = v1364[v1365];
      var v1194 = j$$15 - 1;
      var v938 = v1193[v1194];
      var v499 = v938.value;
      var v939 = this.scoreSet;
      var v1195 = this.M;
      var v1196 = i$$15 - 1;
      var v940 = v1195[v1196];
      var v1197 = this.N;
      var v1198 = j$$15 - 1;
      var v941 = v1197[v1198];
      var v500 = v939.getScore(v940, v941);
      c = v499 + v500;
      var v942 = a >= b;
      if (v942) {
        v942 = a >= c;
      }
      var v511 = v942;
      if (v511) {
        var v1199 = this.nodes;
        var v943 = v1199[i$$15];
        var v501 = v943[j$$15];
        v501.value = a;
        var v1200 = this.nodes;
        var v944 = v1200[i$$15];
        var v502 = v944[j$$15];
        v502.tracebackI = i$$15 - 1;
        var v1201 = this.nodes;
        var v945 = v1201[i$$15];
        var v503 = v945[j$$15];
        v503.tracebackJ = j$$15;
      } else {
        var v946 = b >= c;
        if (v946) {
          v946 = b >= a;
        }
        var v510 = v946;
        if (v510) {
          var v1202 = this.nodes;
          var v947 = v1202[i$$15];
          var v504 = v947[j$$15];
          v504.value = b;
          var v1203 = this.nodes;
          var v948 = v1203[i$$15];
          var v505 = v948[j$$15];
          v505.tracebackI = i$$15;
          var v1204 = this.nodes;
          var v949 = v1204[i$$15];
          var v506 = v949[j$$15];
          v506.tracebackJ = j$$15 - 1;
        } else {
          var v1205 = this.nodes;
          var v950 = v1205[i$$15];
          var v507 = v950[j$$15];
          v507.value = c;
          var v1206 = this.nodes;
          var v951 = v1206[i$$15];
          var v508 = v951[j$$15];
          v508.tracebackI = i$$15 - 1;
          var v1207 = this.nodes;
          var v952 = v1207[i$$15];
          var v509 = v952[j$$15];
          v509.tracebackJ = j$$15 - 1;
        }
      }
      j$$15++;
      var v1366 = this.nodes;
      var v1208 = v1366[0];
      var v953 = v1208.length;
      v512 = j$$15 < v953;
    }
    i$$15++;
    var v1209 = this.nodes;
    var v954 = v1209.length;
    v513 = i$$15 < v954;
  }
  var v1210 = this.nodes;
  var v1457 = this.nodes;
  var v1367 = v1457.length;
  var v1211 = v1367 - 1;
  var v955 = v1210[v1211];
  var v1458 = this.nodes;
  var v1368 = v1458[0];
  var v1212 = v1368.length;
  var v956 = v1212 - 1;
  var v514 = v955[v956];
  this.score = v514.value;
  return;
}
function alignQuad() {
  var v1592 = new Array;
  this.alignedM = v1592;
  var v1593 = new Array;
  this.alignedN = v1593;
  var v957 = this.nodes;
  var v515 = v957.length;
  var currentI = v515 - 1;
  var v1213 = this.nodes;
  var v958 = v1213[0];
  var v516 = v958.length;
  var currentJ = v516 - 1;
  var v959 = this.nodes;
  var v1369 = this.nodes;
  var v1214 = v1369.length;
  var v960 = v1214 - 1;
  var v517 = v959[v960];
  var v1370 = this.nodes;
  var v1215 = v1370[0];
  var v961 = v1215.length;
  var v518 = v961 - 1;
  var currentNode = v517[v518];
  var v1216 = currentNode.tracebackI;
  var v962 = v1216 != undefined;
  if (v962) {
    var v1217 = currentNode.tracebackJ;
    v962 = v1217 != undefined;
  }
  var v533 = v962;
  for (;v533;) {
    var v1218 = currentNode.tracebackI;
    var v1219 = currentI - 1;
    var v963 = v1218 == v1219;
    if (v963) {
      var v1220 = currentNode.tracebackJ;
      var v1221 = currentJ - 1;
      v963 = v1220 == v1221;
    }
    var v530 = v963;
    if (v530) {
      var v519 = this.alignedM;
      var v964 = this.M;
      var v520 = v964.pop();
      v519.push(v520);
      var v521 = this.alignedN;
      var v965 = this.N;
      var v522 = v965.pop();
      v521.push(v522);
    } else {
      var v966 = currentNode.tracebackJ;
      var v967 = currentJ - 1;
      var v529 = v966 == v967;
      if (v529) {
        var v523 = this.alignedM;
        v523.push(".--");
        var v524 = this.alignedN;
        var v968 = this.N;
        var v525 = v968.pop();
        v524.push(v525);
      } else {
        var v526 = this.alignedM;
        var v969 = this.M;
        var v527 = v969.pop();
        v526.push(v527);
        var v528 = this.alignedN;
        v528.push(".--");
      }
    }
    currentI = currentNode.tracebackI;
    currentJ = currentNode.tracebackJ;
    var v970 = this.nodes;
    var v971 = currentNode.tracebackI;
    var v531 = v970[v971];
    var v532 = currentNode.tracebackJ;
    currentNode = v531[v532];
    var v1222 = currentNode.tracebackI;
    var v972 = v1222 != undefined;
    if (v972) {
      var v1223 = currentNode.tracebackJ;
      v972 = v1223 != undefined;
    }
    v533 = v972;
  }
  var v534 = this.alignedM;
  var v1594 = v534.reverse();
  this.alignedM = v1594;
  var v535 = this.alignedN;
  var v1595 = v535.reverse();
  this.alignedN = v1595;
  return;
}
function getAlignedM() {
  var v536 = this.alignedM;
  return v536.join("");
}
function getAlignedN() {
  var v537 = this.alignedN;
  return v537.join("");
}
function AlignPairQuad() {
  return;
}
new ScoreSet;
var v538 = ScoreSet.prototype;
v538.getScore = getScore;
var v539 = ScoreSet.prototype;
v539.setScoreSetParam = setScoreSetParam;
new ScoringMatrix;
var v540 = ScoringMatrix.prototype;
v540.scoringMatrix_getScore = scoringMatrix_getScore;
var v541 = ScoringMatrix.prototype;
v541.scoringMatrix_fillHash = scoringMatrix_fillHash;
var v542 = Codon;
var v1596 = new ScoringMatrix;
v542.prototype = v1596;
new AlignPairLinear;
var v543 = AlignPairLinear.prototype;
v543.align = align;
var v544 = AlignPairLinear.prototype;
v544.path = path;
var v545 = AlignPairLinear.prototype;
v545.setAlignParam = setAlignParam;
var v546 = AlignPairLinear.prototype;
v546.getAlignedM = getAlignedM;
var v547 = AlignPairLinear.prototype;
v547.getAlignedN = getAlignedN;
new AlignPairQuad;
var v548 = AlignPairQuad.prototype;
v548.initializeMatrix = initializeMatrix;
var v549 = AlignPairQuad.prototype;
v549.fillMatrix = fillMatrix;
var v550 = AlignPairQuad.prototype;
v550.align = alignQuad;
var v551 = AlignPairQuad.prototype;
v551.getAlignedM = getAlignedM;
var v552 = AlignPairQuad.prototype;
v552.getAlignedN = getAlignedN;
var v553 = AlignPairQuad.prototype;
v553.dumpMatrix = dumpMatrix;
document.onload = v2;
var v554 = document.getElementById("submitbtn");
v554.onclick = v3;
var v555 = document.getElementById("clearbtn");
v555.onclick = v4

}
