function v4() {
  var v1202 = document.forms;
  var v957 = v1202[0];
  var v548 = v957.elements;
  var v5 = v548[0];
  v5.value = " ";
  var v1203 = document.forms;
  var v958 = v1203[0];
  var v549 = v958.elements;
  var v6 = v549[4];
  v6.value = " ";
  return;
}
function v3() {
  try {
    pairwiseAlignDna();
  } catch (e$$5) {
    var v7 = "The following error was encountered: " + e$$5;
    alert(v7);
  }
  return;
}
function v2() {
  var v550 = document.main_form;
  var v8 = v550.main_submit;
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
  var v551 = arrayOfSequences.length;
  var v10 = v551 < 2;
  if (v10) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v552 = arrayOfTitles.length;
  var v12 = i$$1 < v552;
  for (;v12;) {
    var v1350 = arrayOfTitles[i$$1];
    var v1204 = v1350.search(/\S/);
    var v959 = v1204 == -1;
    var v1206 = !v959;
    if (v1206) {
      var v1351 = arrayOfSequences[i$$1];
      var v1205 = v1351.search(/\S/);
      v959 = v1205 == -1;
    }
    var v553 = v959;
    var v961 = !v553;
    if (v961) {
      var v1207 = arrayOfSequences[i$$1];
      var v960 = v1207.length;
      v553 = v960 != lengthOfAlign;
    }
    var v11 = v553;
    if (v11) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v554 = arrayOfTitles.length;
    v12 = i$$1 < v554;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v1442 = codonTable.search(/AmAcid/);
  var v1352 = v1442 == -1;
  var v1444 = !v1352;
  if (v1444) {
    var v1443 = codonTable.search(/Codon/);
    v1352 = v1443 == -1;
  }
  var v1208 = v1352;
  var v1354 = !v1208;
  if (v1354) {
    var v1353 = codonTable.search(/Number/);
    v1208 = v1353 == -1;
  }
  var v962 = v1208;
  var v1210 = !v962;
  if (v1210) {
    var v1209 = codonTable.search(/\/1000/);
    v962 = v1209 == -1;
  }
  var v555 = v962;
  var v964 = !v555;
  if (v964) {
    var v963 = codonTable.search(/Fraction\s*\.\./);
    v555 = v963 == -1;
  }
  var v13 = v555;
  if (v13) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v965 = formElement.value;
  var v556 = v965.search(/\S/);
  var v14 = v556 == -1;
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
  var v557 = arrayOfPatterns.length;
  var v17 = z$$2 < v557;
  for (;v17;) {
    var v966 = arrayOfPatterns[z$$2];
    var v558 = v966.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v15 = v558 == -1;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v967 = arrayOfPatterns[z$$2];
    var v559 = moreExpressionCheck(v967);
    var v16 = v559 == false;
    if (v16) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v560 = arrayOfPatterns.length;
    v17 = z$$2 < v560;
  }
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v18);
  var v19 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v19);
  var j = 0;
  var v561 = arrayOfPatterns.length;
  var v23 = j < v561;
  for (;v23;) {
    var v968 = arrayOfPatterns[j];
    var v562 = v968.match(/\/.+\//);
    var v20 = v562 + "gi";
    var v1569 = eval(v20);
    geneticCodeMatchExp[j] = v1569;
    var v563 = arrayOfPatterns[j];
    var v21 = v563.match(/=[a-zA-Z\*]/);
    var v1570 = v21.toString();
    geneticCodeMatchResult[j] = v1570;
    var v22 = geneticCodeMatchResult[j];
    var v1571 = v22.replace(/=/g, "");
    geneticCodeMatchResult[j] = v1571;
    j++;
    var v564 = arrayOfPatterns.length;
    v23 = j < v564;
  }
  var i$$2 = 0;
  var v969 = testSequence.length;
  var v565 = v969 - 3;
  var v30 = i$$2 <= v565;
  for (;v30;) {
    var v24 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v24);
    j = 0;
    var v566 = geneticCodeMatchExp.length;
    var v28 = j < v566;
    for (;v28;) {
      var v970 = geneticCodeMatchExp[j];
      var v567 = codon.search(v970);
      var v27 = v567 != -1;
      if (v27) {
        var v26 = oneMatch == true;
        if (v26) {
          var v568 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v25 = v568 + ".";
          alert(v25);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v569 = geneticCodeMatchExp.length;
      v28 = j < v569;
    }
    var v29 = oneMatch == false;
    if (v29) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v971 = testSequence.length;
    var v570 = v971 - 3;
    v30 = i$$2 <= v570;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v571 = arrayOfPatterns$$1.length;
  var v32 = z$$3 < v571;
  for (;v32;) {
    var v972 = arrayOfPatterns$$1[z$$3];
    var v572 = v972.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v31 = v572 != -1;
    if (v31) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v573 = arrayOfPatterns$$1.length;
    v32 = z$$3 < v573;
  }
  var i$$3 = 0;
  var v574 = arrayOfPatterns$$1.length;
  var v36 = i$$3 < v574;
  for (;v36;) {
    var v973 = arrayOfPatterns$$1[i$$3];
    var v575 = "[" + v973;
    var v33 = v575 + "]";
    var re = new RegExp(v33, "gi");
    var j$$1 = i$$3 + 1;
    var v576 = arrayOfPatterns$$1.length;
    var v35 = j$$1 < v576;
    for (;v35;) {
      var v974 = arrayOfPatterns$$1[j$$1];
      var v577 = v974.search(re);
      var v34 = v577 != -1;
      if (v34) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v578 = arrayOfPatterns$$1.length;
      v35 = j$$1 < v578;
    }
    i$$3++;
    var v579 = arrayOfPatterns$$1.length;
    v36 = i$$3 < v579;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v580 = arrayOfPatterns$$2.length;
  var v39 = z$$4 < v580;
  for (;v39;) {
    var v975 = arrayOfPatterns$$2[z$$4];
    var v581 = v975.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v37 = v581 == -1;
    if (v37) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v976 = arrayOfPatterns$$2[z$$4];
    var v582 = moreExpressionCheck(v976);
    var v38 = v582 == false;
    if (v38) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v583 = arrayOfPatterns$$2.length;
    v39 = z$$4 < v583;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v1211 = getSequenceFromFasta(text$$7);
  var v977 = v1211.replace(/[^A-Za-z]/g, "");
  var v584 = v977.length;
  var v41 = v584 > maxInput;
  if (v41) {
    var v585 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v40 = v585 + " characters.";
    alert(v40);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v586 = text$$8.length;
  var v43 = v586 > maxInput$$1;
  if (v43) {
    var v587 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v42 = v587 + " characters.";
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
  var v588 = alignArray.length;
  var v50 = v588 < 3;
  if (v50) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v589 = alignArray.length;
  var v52 = i$$4 < v589;
  for (;v52;) {
    var v978 = alignArray[i$$4];
    var v590 = v978.search(/[^\s]+\s/);
    var v51 = v590 == -1;
    if (v51) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v591 = alignArray.length;
    v52 = i$$4 < v591;
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
  var v592 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v55 = v592 != -1;
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
  var v593 = sequence$$2.length;
  var v56 = "&gt;results for " + v593;
  var stringToReturn = v56 + " residue sequence ";
  var v594 = fastaSequenceTitle.search(/[^\s]/);
  var v58 = v594 != -1;
  if (v58) {
    var v595 = stringToReturn + '"';
    var v57 = v595 + fastaSequenceTitle;
    stringToReturn = v57 + '"';
  }
  var v596 = stringToReturn + ' starting "';
  var v597 = sequence$$2.substring(0, 10);
  var v59 = v596 + v597;
  stringToReturn = v59 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v598 = sequenceOne.length;
  var v60 = "Search results for " + v598;
  var stringToReturn$$1 = v60 + " residue sequence ";
  var v599 = fastaSequenceTitleOne.search(/[^\s]/);
  var v62 = v599 != -1;
  if (v62) {
    var v600 = stringToReturn$$1 + '"';
    var v61 = v600 + fastaSequenceTitleOne;
    stringToReturn$$1 = v61 + '"';
  }
  var v601 = stringToReturn$$1 + ' starting "';
  var v602 = sequenceOne.substring(0, 10);
  var v63 = v601 + v602;
  stringToReturn$$1 = v63 + '"\n';
  var v603 = stringToReturn$$1 + "and ";
  var v604 = sequenceTwo.length;
  var v64 = v603 + v604;
  stringToReturn$$1 = v64 + " residue sequence ";
  var v605 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v66 = v605 != -1;
  if (v66) {
    var v606 = stringToReturn$$1 + '"';
    var v65 = v606 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v65 + '"';
  }
  var v607 = stringToReturn$$1 + ' starting "';
  var v608 = sequenceTwo.substring(0, 10);
  var v67 = v607 + v608;
  stringToReturn$$1 = v67 + '"';
  var v68 = '<div class="info">' + stringToReturn$$1;
  return v68 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v69 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v69);
  var j$$2 = 0;
  var v609 = arrayOfPatterns$$3.length;
  var v71 = j$$2 < v609;
  for (;v71;) {
    var v979 = arrayOfPatterns$$3[j$$2];
    var v610 = v979.match(/\/.+\//);
    var v70 = v610 + "gi";
    var v1572 = eval(v70);
    geneticCodeMatchExp$$1[j$$2] = v1572;
    j$$2++;
    var v611 = arrayOfPatterns$$3.length;
    v71 = j$$2 < v611;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v72 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v72);
  var j$$3 = 0;
  var v612 = arrayOfPatterns$$4.length;
  var v75 = j$$3 < v612;
  for (;v75;) {
    var v613 = arrayOfPatterns$$4[j$$3];
    var v73 = v613.match(/=[a-zA-Z\*]/);
    var v1573 = v73.toString();
    geneticCodeMatchResult$$1[j$$3] = v1573;
    var v74 = geneticCodeMatchResult$$1[j$$3];
    var v1574 = v74.replace(/=/g, "");
    geneticCodeMatchResult$$1[j$$3] = v1574;
    j$$3++;
    var v614 = arrayOfPatterns$$4.length;
    v75 = j$$3 < v614;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v615 = sequence$$3.length;
  var v76 = "Results for " + v615;
  var stringToReturn$$2 = v76 + " residue sequence ";
  var v616 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v78 = v616 != -1;
  if (v78) {
    var v617 = stringToReturn$$2 + '"';
    var v77 = v617 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v77 + '"';
  }
  var v618 = stringToReturn$$2 + ' starting "';
  var v619 = sequence$$3.substring(0, 10);
  var v79 = v618 + v619;
  stringToReturn$$2 = v79 + '"';
  var v80 = '<div class="info">' + stringToReturn$$2;
  return v80 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v980 = "Results for " + topology;
  var v620 = v980 + " ";
  var v621 = sequence$$4.length;
  var v81 = v620 + v621;
  var stringToReturn$$3 = v81 + " residue sequence ";
  var v622 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v83 = v622 != -1;
  if (v83) {
    var v623 = stringToReturn$$3 + '"';
    var v82 = v623 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v82 + '"';
  }
  var v624 = stringToReturn$$3 + ' starting "';
  var v625 = sequence$$4.substring(0, 10);
  var v84 = v624 + v625;
  stringToReturn$$3 = v84 + '"';
  var v85 = '<div class="info">' + stringToReturn$$3;
  return v85 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v626 = sequenceOne$$1.length;
  var v86 = "Alignment results for " + v626;
  var stringToReturn$$4 = v86 + " residue sequence ";
  var v627 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v88 = v627 != -1;
  if (v88) {
    var v628 = stringToReturn$$4 + '"';
    var v87 = v628 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v87 + '"';
  }
  var v629 = stringToReturn$$4 + ' starting "';
  var v630 = sequenceOne$$1.substring(0, 10);
  var v89 = v629 + v630;
  stringToReturn$$4 = v89 + '"\n';
  var v631 = stringToReturn$$4 + "and ";
  var v632 = sequenceTwo$$1.length;
  var v90 = v631 + v632;
  stringToReturn$$4 = v90 + " residue sequence ";
  var v633 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v92 = v633 != -1;
  if (v92) {
    var v634 = stringToReturn$$4 + '"';
    var v91 = v634 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v91 + '"';
  }
  var v635 = stringToReturn$$4 + ' starting "';
  var v636 = sequenceTwo$$1.substring(0, 10);
  var v93 = v635 + v636;
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
    var v637 = Math.random();
    var v638 = components.length;
    var v95 = v637 * v638;
    tempNum = Math.floor(v95);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4++;
    v96 = j$$4 < lengthOut;
  }
  return sequenceArray.join("");
}
function getSequenceFromFasta(sequenceRecord) {
  var v639 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v97 = v639 != -1;
  if (v97) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "");
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v640 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v99 = v640 != -1;
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
  var v1547 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v1540 = v1547 != -1;
  var v1549 = !v1540;
  if (v1549) {
    var v1548 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    v1540 = v1548 != -1;
  }
  var v1530 = v1540;
  var v1542 = !v1530;
  if (v1542) {
    var v1541 = expressionToCheck.search(/\[\]/);
    v1530 = v1541 != -1;
  }
  var v1519 = v1530;
  var v1532 = !v1519;
  if (v1532) {
    var v1531 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
    v1519 = v1531 != -1;
  }
  var v1504 = v1519;
  var v1521 = !v1504;
  if (v1521) {
    var v1520 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
    v1504 = v1520 != -1;
  }
  var v1479 = v1504;
  var v1506 = !v1479;
  if (v1506) {
    var v1505 = expressionToCheck.search(/\|\|/);
    v1479 = v1505 != -1;
  }
  var v1445 = v1479;
  var v1481 = !v1445;
  if (v1481) {
    var v1480 = expressionToCheck.search(/\/\|/);
    v1445 = v1480 != -1;
  }
  var v1355 = v1445;
  var v1447 = !v1355;
  if (v1447) {
    var v1446 = expressionToCheck.search(/\|\//);
    v1355 = v1446 != -1;
  }
  var v1212 = v1355;
  var v1357 = !v1212;
  if (v1357) {
    var v1356 = expressionToCheck.search(/\[.\]/);
    v1212 = v1356 != -1;
  }
  var v981 = v1212;
  var v1214 = !v981;
  if (v1214) {
    var v1213 = expressionToCheck.search(/\</);
    v981 = v1213 != -1;
  }
  var v641 = v981;
  var v983 = !v641;
  if (v983) {
    var v982 = expressionToCheck.search(/\>/);
    v641 = v982 != -1;
  }
  var v100 = v641;
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
  var title$$5 = "Pairwise Align DNA";
  _openWindow(title$$5);
  return;
}
function _openWindow(title$$6) {
  var isColor = true;
  outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  outputWindow.focus();
  var v105 = outputWindow.document;
  var v1215 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v984 = v1215 + "<head>\n";
  var v642 = v984 + "<title>Sequence Manipulation Suite</title>\n";
  var v106 = v642 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v105.write(v106);
  if (isColor) {
    var v107 = outputWindow.document;
    var v1562 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1558 = v1562 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1554 = v1558 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1550 = v1554 + "div.info {font-weight: bold}\n";
    var v1543 = v1550 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1533 = v1543 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v1522 = v1533 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v1507 = v1522 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1482 = v1507 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v1448 = v1482 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v1358 = v1448 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v1216 = v1358 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v985 = v1216 + "td.many {color: #000000}\n";
    var v643 = v985 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v108 = v643 + "</style>\n";
    v107.write(v108);
  } else {
    var v109 = outputWindow.document;
    var v1566 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1563 = v1566 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1559 = v1563 + "div.title {display: none}\n";
    var v1555 = v1559 + "div.info {font-weight: bold}\n";
    var v1551 = v1555 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1544 = v1551 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1534 = v1544 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v1523 = v1534 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1508 = v1523 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1483 = v1508 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1449 = v1483 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v1359 = v1449 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1217 = v1359 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v986 = v1217 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v644 = v986 + "img {display: none}\n";
    var v110 = v644 + "</style>\n";
    v109.write(v110);
  }
  var v111 = outputWindow.document;
  var v1218 = "</head>\n" + '<body class="main">\n';
  var v987 = v1218 + '<div class="title">';
  var v645 = v987 + title$$6;
  var v112 = v645 + " results</div>\n";
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
  var v1219 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v988 = v1219 + "<head>\n";
  var v646 = v988 + "<title>Sequence Manipulation Suite</title>\n";
  var v114 = v646 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v113.write(v114);
  if (isBackground) {
    var v115 = outputWindow.document;
    var v1564 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1560 = v1564 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1556 = v1560 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1552 = v1556 + "div.info {font-weight: bold}\n";
    var v1545 = v1552 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v1535 = v1545 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v1524 = v1535 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v1509 = v1524 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v1484 = v1509 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v1450 = v1484 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v1360 = v1450 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v1220 = v1360 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v989 = v1220 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v647 = v989 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v116 = v647 + "</style>\n";
    v115.write(v116);
  } else {
    var v117 = outputWindow.document;
    var v1568 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1567 = v1568 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1565 = v1567 + "div.title {display: none}\n";
    var v1561 = v1565 + "div.info {font-weight: bold}\n";
    var v1557 = v1561 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1553 = v1557 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v1546 = v1553 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v1536 = v1546 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v1525 = v1536 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v1510 = v1525 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v1485 = v1510 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v1451 = v1485 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v1361 = v1451 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v1221 = v1361 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v990 = v1221 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v648 = v990 + "img {display: none}\n";
    var v118 = v648 + "</style>\n";
    v117.write(v118);
  }
  var v119 = outputWindow.document;
  var v1222 = "</head>\n" + '<body class="main">\n';
  var v991 = v1222 + '<div class="title">';
  var v649 = v991 + title$$8;
  var v120 = v649 + " results</div>\n";
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
  var v650 = dnaSequence$$1.search(/./);
  var v121 = v650 != -1;
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
  var v651 = testArray[0];
  var v125 = v651 != testString;
  if (v125) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v652 = testString.search(re$$2);
  var v126 = v652 == -1;
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
  var v653 = testNum.toFixed(3);
  var v129 = v653 != 2489.824;
  if (v129) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v654 = testNum.toPrecision(5);
  var v130 = v654 != 2489.8;
  if (v130) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v655 = theNumber$$1.search(/\d/);
  var v131 = v655 == -1;
  if (v131) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v1362 = emblFile.search(/ID/);
  var v1223 = v1362 == -1;
  var v1364 = !v1223;
  if (v1364) {
    var v1363 = emblFile.search(/AC/);
    v1223 = v1363 == -1;
  }
  var v992 = v1223;
  var v1225 = !v992;
  if (v1225) {
    var v1224 = emblFile.search(/DE/);
    v992 = v1224 == -1;
  }
  var v656 = v992;
  var v994 = !v656;
  if (v994) {
    var v993 = emblFile.search(/SQ/);
    v656 = v993 == -1;
  }
  var v132 = v656;
  if (v132) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v657 = theNumber$$2.search(/\d/);
  var v133 = v657 == -1;
  if (v133) {
    alert("Please enter a number.");
    return false;
  }
  var v135 = theNumber$$2 > maxInput$$2;
  if (v135) {
    var v658 = "Please enter a number less than or equal to " + maxInput$$2;
    var v134 = v658 + ".";
    alert(v134);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v659 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v136 = v659 != -1;
  if (v136) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v660 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v137 = v660 != -1;
  if (v137) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v1365 = genBankFile.search(/LOCUS/);
  var v1226 = v1365 == -1;
  var v1367 = !v1226;
  if (v1367) {
    var v1366 = genBankFile.search(/DEFINITION/);
    v1226 = v1366 == -1;
  }
  var v995 = v1226;
  var v1228 = !v995;
  if (v1228) {
    var v1227 = genBankFile.search(/ACCESSION/);
    v995 = v1227 == -1;
  }
  var v661 = v995;
  var v997 = !v661;
  if (v997) {
    var v996 = genBankFile.search(/ORIGIN/);
    v661 = v996 == -1;
  }
  var v138 = v661;
  if (v138) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v1368 = genBankFile$$1.search(/LOCUS/);
  var v1229 = v1368 == -1;
  var v1370 = !v1229;
  if (v1370) {
    var v1369 = genBankFile$$1.search(/DEFINITION/);
    v1229 = v1369 == -1;
  }
  var v998 = v1229;
  var v1231 = !v998;
  if (v1231) {
    var v1230 = genBankFile$$1.search(/ACCESSION/);
    v998 = v1230 == -1;
  }
  var v662 = v998;
  var v1000 = !v662;
  if (v1000) {
    var v999 = genBankFile$$1.search(/ORIGIN/);
    v662 = v999 == -1;
  }
  var v139 = v662;
  if (v139) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v663 = genBankFile$$1.search(/FEATURES {13}/);
  var v140 = v663 == -1;
  if (v140) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v1371 = emblFile$$1.search(/ID/);
  var v1232 = v1371 == -1;
  var v1373 = !v1232;
  if (v1373) {
    var v1372 = emblFile$$1.search(/AC/);
    v1232 = v1372 == -1;
  }
  var v1001 = v1232;
  var v1234 = !v1001;
  if (v1234) {
    var v1233 = emblFile$$1.search(/DE/);
    v1001 = v1233 == -1;
  }
  var v664 = v1001;
  var v1003 = !v664;
  if (v1003) {
    var v1002 = emblFile$$1.search(/SQ/);
    v664 = v1002 == -1;
  }
  var v141 = v664;
  if (v141) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v665 = emblFile$$1.search(/^FT/m);
  var v142 = v665 == -1;
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
    var v666 = basePerLine / groupSize;
    var v146 = j$$6 <= v666;
    for (;v146;) {
      var v145 = k < groupSize;
      for (;v145;) {
        var v667 = k + i$$5;
        var v144 = text$$10.charAt(v667);
        lineOfText = lineOfText + v144;
        k = k + 1;
        v145 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v668 = basePerLine / groupSize;
      v146 = j$$6 <= v668;
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
    var v669 = adjustment < 0;
    if (v669) {
      v669 = adjusted >= 0;
    }
    var v150 = v669;
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
    var v670 = basePerLine$$2 / groupSize$$2;
    var v157 = j$$7 <= v670;
    for (;v157;) {
      var v153 = k$$1 < groupSize$$2;
      for (;v153;) {
        var v671 = i$$6 + k$$1;
        var v151 = v671 >= stopBase$$2;
        if (v151) {
          break;
        }
        var v672 = k$$1 + i$$6;
        var v152 = text$$12.charAt(v672);
        lineOfText$$1 = lineOfText$$1 + v152;
        k$$1 = k$$1 + 1;
        v153 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v155 = numberPosition$$1 == "above";
      if (v155) {
        var v673 = adjustNumbering(i$$6, numberingAdjustment);
        var v154 = rightNum(v673, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v154;
      }
      var v156 = i$$6 >= stopBase$$2;
      if (v156) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v674 = basePerLine$$2 / groupSize$$2;
      v157 = j$$7 <= v674;
    }
    var v180 = numberPosition$$1 == "left";
    if (v180) {
      var v158 = outputWindow.document;
      var v1235 = adjustNumbering(lineNum, numberingAdjustment);
      var v1004 = rightNum(v1235, "", 8, tabIn$$3);
      var v675 = v1004 + lineOfText$$1;
      var v159 = v675 + "\n";
      v158.write(v159);
      var v163 = strands$$1 == "two";
      if (v163) {
        var v160 = outputWindow.document;
        var v1236 = adjustNumbering(lineNum, numberingAdjustment);
        var v1005 = rightNum(v1236, "", 8, tabIn$$3);
        var v1006 = complement(lineOfText$$1);
        var v676 = v1005 + v1006;
        var v161 = v676 + "\n";
        v160.write(v161);
        var v162 = outputWindow.document;
        v162.write("\n");
      }
    } else {
      var v179 = numberPosition$$1 == "right";
      if (v179) {
        var v164 = outputWindow.document;
        var v1007 = adjustNumbering(i$$6, numberingAdjustment);
        var v677 = lineOfText$$1 + v1007;
        var v165 = v677 + "\n";
        v164.write(v165);
        var v169 = strands$$1 == "two";
        if (v169) {
          var v166 = outputWindow.document;
          var v1008 = complement(lineOfText$$1);
          var v1009 = adjustNumbering(i$$6, numberingAdjustment);
          var v678 = v1008 + v1009;
          var v167 = v678 + "\n";
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
            var v679 = complement(lineOfText$$1);
            var v175 = v679 + "\n";
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
    var v680 = basePerLine$$3 / groupSize$$3;
    var v188 = j$$8 <= v680;
    for (;v188;) {
      var v184 = k$$2 < groupSize$$3;
      for (;v184;) {
        var v681 = i$$7 + k$$2;
        var v182 = v681 >= stopBase$$3;
        if (v182) {
          break;
        }
        var v682 = k$$2 + i$$7;
        var v183 = text$$13.charAt(v682);
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
      var v683 = basePerLine$$3 / groupSize$$3;
      v188 = j$$8 <= v683;
    }
    var v199 = numberPosition$$2 == "left";
    if (v199) {
      var v189 = outputWindow.document;
      var v1010 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v684 = v1010 + lineOfText$$2;
      var v190 = v684 + "\n";
      v189.write(v190);
    } else {
      var v198 = numberPosition$$2 == "right";
      if (v198) {
        var v191 = outputWindow.document;
        var v685 = lineOfText$$2 + i$$7;
        var v192 = v685 + "\n";
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
  var v1237 = sequence$$13.length;
  var v1011 = v1237 <= firstIndexToMutate;
  var v1238 = !v1011;
  if (v1238) {
    v1011 = lastIndexToMutate < 0;
  }
  var v686 = v1011;
  var v1012 = !v686;
  if (v1012) {
    v686 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v201 = v686;
  if (v201) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v209 = i$$8 < numMut;
  for (;v209;) {
    maxNum = sequence$$13.length;
    var v687 = Math.random();
    var v202 = v687 * maxNum;
    randNum = Math.floor(v202);
    var v688 = randNum < firstIndexToMutate;
    var v1013 = !v688;
    if (v1013) {
      v688 = randNum > lastIndexToMutate;
    }
    var v203 = v688;
    if (v203) {
      numMut++;
      i$$8++;
      v209 = i$$8 < numMut;
      continue;
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for (;needNewChar;) {
      var v689 = Math.random();
      var v690 = components$$1.length;
      var v204 = v689 * v690;
      componentsIndex = Math.round(v204);
      var v691 = components$$1.length;
      var v205 = componentsIndex == v691;
      if (v205) {
        componentsIndex = 0;
      }
      var v692 = components$$1[componentsIndex];
      var v206 = v692 != currentChar;
      if (v206) {
        needNewChar = false;
      }
    }
    var v693 = sequence$$13.substring(0, randNum);
    var v694 = components$$1[componentsIndex];
    var v207 = v693 + v694;
    var v695 = randNum + 1;
    var v696 = sequence$$13.length;
    var v208 = sequence$$13.substring(v695, v696);
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
    var v697 = Math.random();
    var v698 = components$$2.length;
    var v212 = v697 * v698;
    tempNum$$1 = Math.floor(v212);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v699 = sequence$$14.length;
    var v215 = v699 == 60;
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
    var v1239 = sequence$$15.length;
    var v1014 = v1239 - lookAhead;
    var v1015 = sequence$$15.length;
    var v700 = sequence$$15.substring(v1014, v1015);
    var v220 = v700 + sequence$$15;
    var v221 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v220 + v221;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v223 = outputWindow.document;
  v223.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  var v224 = outputWindow.document;
  var v1240 = '<tr><td class="title" width="200px">' + "Site:";
  var v1016 = v1240 + '</td><td class="title">';
  var v701 = v1016 + "Positions:";
  var v225 = v701 + "</td></tr>\n";
  v224.write(v225);
  var i$$9 = 0;
  var v702 = arrayOfItems.length;
  var v241 = i$$9 < v702;
  for (;v241;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v703 = arrayOfItems[i$$9];
    var v226 = v703.match(/\/.+\//);
    matchExp = v226 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    var v1241 = arrayOfItems[i$$9];
    var v1017 = v1241.match(/\)\D*\d+/);
    var v704 = v1017.toString();
    var v227 = v704.replace(/\)\D*/, "");
    cutDistance = parseFloat(v227);
    var v233 = matchArray$$1 = matchExp.exec(sequence$$15);
    for (;v233;) {
      var v228 = matchExp.lastIndex;
      matchPosition = v228 - cutDistance;
      var v705 = matchPosition >= lowerLimit;
      if (v705) {
        v705 = matchPosition < upperLimit;
      }
      var v231 = v705;
      if (v231) {
        timesFound++;
        var v229 = tempString$$1 + ", ";
        var v706 = matchPosition - shiftValue;
        var v230 = v706 + 1;
        tempString$$1 = v229 + v230;
      }
      var v707 = matchExp.lastIndex;
      var v1018 = RegExp.lastMatch;
      var v708 = v1018.length;
      var v232 = v707 - v708;
      matchExp.lastIndex = v232 + 1;
      v233 = matchArray$$1 = matchExp.exec(sequence$$15);
    }
    var v709 = tempString$$1.search(/\d/);
    var v234 = v709 != -1;
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
    var v1511 = '<tr><td class="' + backGroundClass;
    var v1486 = v1511 + '">';
    var v1537 = arrayOfItems[i$$9];
    var v1526 = v1537.match(/\([^\(]+\)/);
    var v1512 = v1526.toString();
    var v1487 = v1512.replace(/\(|\)/g, "");
    var v1452 = v1486 + v1487;
    var v1374 = v1452 + '</td><td class="';
    var v1242 = v1374 + backGroundClass;
    var v1019 = v1242 + '">';
    var v710 = v1019 + tempString$$1;
    var v240 = v710 + "</td></tr>\n";
    v239.write(v240);
    timesFound = 0;
    i$$9++;
    var v711 = arrayOfItems.length;
    v241 = i$$9 < v711;
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
  var v1453 = '<tr><td class="title">' + "Pattern:";
  var v1375 = v1453 + '</td><td class="title">';
  var v1243 = v1375 + "Times found:";
  var v1020 = v1243 + '</td><td class="title">';
  var v712 = v1020 + "Percentage:";
  var v245 = v712 + "</td></tr>\n";
  v244.write(v245);
  var i$$10 = 0;
  var v713 = arrayOfItems$$1.length;
  var v254 = i$$10 < v713;
  for (;v254;) {
    var tempNumber = 0;
    var v714 = arrayOfItems$$1[i$$10];
    var v246 = v714.match(/\/[^\/]+\//);
    var matchExp$$1 = v246 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    var v715 = sequence$$16.search(matchExp$$1);
    var v248 = v715 != -1;
    if (v248) {
      var v247 = sequence$$16.match(matchExp$$1);
      tempNumber = v247.length;
    }
    var percentage = 0;
    var v1021 = originalLength + 1;
    var v1376 = arrayOfItems$$1[i$$10];
    var v1244 = v1376.match(/\d+/);
    var v1022 = parseFloat(v1244);
    var v716 = v1021 - v1022;
    var v251 = v716 > 0;
    if (v251) {
      var v249 = 100 * tempNumber;
      var v717 = originalLength + 1;
      var v1245 = arrayOfItems$$1[i$$10];
      var v1023 = v1245.match(/\d+/);
      var v718 = parseFloat(v1023);
      var v250 = v717 - v718;
      percentage = v249 / v250;
    }
    var v252 = outputWindow.document;
    var v1538 = arrayOfItems$$1[i$$10];
    var v1527 = v1538.match(/\([^\(]+\)\b/);
    var v1513 = v1527.toString();
    var v1488 = v1513.replace(/\(|\)/g, "");
    var v1454 = "<tr><td>" + v1488;
    var v1377 = v1454 + "</td><td>";
    var v1246 = v1377 + tempNumber;
    var v1024 = v1246 + "</td><td>";
    var v1025 = percentage.toFixed(2);
    var v719 = v1024 + v1025;
    var v253 = v719 + "</td></tr>\n";
    v252.write(v253);
    i$$10++;
    var v720 = arrayOfItems$$1.length;
    v254 = i$$10 < v720;
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
  var v721 = sequence$$17.length;
  var v262 = v721 > 0;
  for (;v262;) {
    maxNum$$1 = sequence$$17.length;
    var v722 = Math.random();
    var v256 = v722 * maxNum$$1;
    randNum$$1 = Math.floor(v256);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v257 = randNum$$1 + 1;
    var v258 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v257, v258);
    sequence$$17 = tempString1 + tempString2;
    var v723 = tempSeq.length;
    var v261 = v723 == 60;
    if (v261) {
      var v259 = outputWindow.document;
      var v260 = tempSeq + "\n";
      v259.write(v260);
      tempSeq = "";
    }
    var v724 = sequence$$17.length;
    v262 = v724 > 0;
  }
  var v263 = outputWindow.document;
  var v264 = tempSeq + "\n";
  v263.write(v264);
  return true;
}
function pairwiseAlignDna() {
  var theDocument = document;
  var newDnaOne = "";
  var titleOne = "";
  var newDnaTwo = "";
  var titleTwo = "";
  var maxInput$$3 = 2E3;
  var v725 = testScript();
  var v265 = v725 == false;
  if (v265) {
    return;
  }
  var v1528 = theDocument.forms;
  var v1514 = v1528[0];
  var v1489 = v1514.elements;
  var v1455 = v1489[0];
  var v1378 = checkFormElement(v1455);
  var v1247 = v1378 == false;
  var v1380 = !v1247;
  if (v1380) {
    var v1539 = theDocument.forms;
    var v1529 = v1539[0];
    var v1515 = v1529.elements;
    var v1490 = v1515[0];
    var v1456 = v1490.value;
    var v1379 = checkSequenceLength(v1456, maxInput$$3);
    v1247 = v1379 == false;
  }
  var v1026 = v1247;
  var v1249 = !v1026;
  if (v1249) {
    var v1516 = theDocument.forms;
    var v1491 = v1516[0];
    var v1457 = v1491.elements;
    var v1381 = v1457[1];
    var v1248 = checkFormElement(v1381);
    v1026 = v1248 == false;
  }
  var v726 = v1026;
  var v1028 = !v726;
  if (v1028) {
    var v1517 = theDocument.forms;
    var v1492 = v1517[0];
    var v1458 = v1492.elements;
    var v1382 = v1458[1];
    var v1250 = v1382.value;
    var v1027 = checkSequenceLength(v1250, maxInput$$3);
    v726 = v1027 == false;
  }
  var v266 = v726;
  if (v266) {
    return;
  }
  var v1493 = theDocument.forms;
  var v1459 = v1493[0];
  var v1383 = v1459.elements;
  var v1251 = v1383[5];
  var v1029 = v1251.options;
  var v1494 = theDocument.forms;
  var v1460 = v1494[0];
  var v1384 = v1460.elements;
  var v1252 = v1384[5];
  var v1030 = v1252.selectedIndex;
  var v727 = v1029[v1030];
  var v267 = v727.value;
  var MATCH_SCORE = parseInt(v267);
  var v1495 = theDocument.forms;
  var v1461 = v1495[0];
  var v1385 = v1461.elements;
  var v1253 = v1385[6];
  var v1031 = v1253.options;
  var v1496 = theDocument.forms;
  var v1462 = v1496[0];
  var v1386 = v1462.elements;
  var v1254 = v1386[6];
  var v1032 = v1254.selectedIndex;
  var v728 = v1031[v1032];
  var v268 = v728.value;
  var MISMATCH_SCORE = parseInt(v268);
  var v1497 = theDocument.forms;
  var v1463 = v1497[0];
  var v1387 = v1463.elements;
  var v1255 = v1387[7];
  var v1033 = v1255.options;
  var v1498 = theDocument.forms;
  var v1464 = v1498[0];
  var v1388 = v1464.elements;
  var v1256 = v1388[7];
  var v1034 = v1256.selectedIndex;
  var v729 = v1033[v1034];
  var v269 = v729.value;
  var BEGIN_GAP_PENALTY = parseInt(v269);
  var v1499 = theDocument.forms;
  var v1465 = v1499[0];
  var v1389 = v1465.elements;
  var v1257 = v1389[8];
  var v1035 = v1257.options;
  var v1500 = theDocument.forms;
  var v1466 = v1500[0];
  var v1390 = v1466.elements;
  var v1258 = v1390[8];
  var v1036 = v1258.selectedIndex;
  var v730 = v1035[v1036];
  var v270 = v730.value;
  var GAP_PENALTY = parseInt(v270);
  var v1501 = theDocument.forms;
  var v1467 = v1501[0];
  var v1391 = v1467.elements;
  var v1259 = v1391[9];
  var v1037 = v1259.options;
  var v1502 = theDocument.forms;
  var v1468 = v1502[0];
  var v1392 = v1468.elements;
  var v1260 = v1392[9];
  var v1038 = v1260.selectedIndex;
  var v731 = v1037[v1038];
  var v271 = v731.value;
  var END_GAP_PENALTY = parseInt(v271);
  openWindow();
  openPre();
  var v1393 = theDocument.forms;
  var v1261 = v1393[0];
  var v1039 = v1261.elements;
  var v732 = v1039[0];
  var v272 = v732.value;
  newDnaOne = getSequenceFromFasta(v272);
  newDnaOne = removeNonDna(newDnaOne);
  var v1394 = theDocument.forms;
  var v1262 = v1394[0];
  var v1040 = v1262.elements;
  var v733 = v1040[0];
  var v273 = v733.value;
  titleOne = getTitleFromFasta(v273);
  var v1395 = theDocument.forms;
  var v1263 = v1395[0];
  var v1041 = v1263.elements;
  var v734 = v1041[1];
  var v274 = v734.value;
  newDnaTwo = getSequenceFromFasta(v274);
  newDnaTwo = removeNonDna(newDnaTwo);
  var v1396 = theDocument.forms;
  var v1264 = v1396[0];
  var v1042 = v1264.elements;
  var v735 = v1042[1];
  var v275 = v735.value;
  titleTwo = getTitleFromFasta(v275);
  var v276 = outputWindow.document;
  var v277 = getPairwiseAlignTitle(titleOne, newDnaOne, titleTwo, newDnaTwo);
  v276.write(v277);
  var v736 = newDnaOne.search(/./);
  var v278 = v736 != -1;
  if (v278) {
    newDnaOne = newDnaOne.match(/./g);
  }
  var v737 = newDnaTwo.search(/./);
  var v279 = v737 != -1;
  if (v279) {
    newDnaTwo = newDnaTwo.match(/./g);
  }
  pairwiseDna(titleOne, newDnaOne, titleTwo, newDnaTwo, MATCH_SCORE, MISMATCH_SCORE, GAP_PENALTY, BEGIN_GAP_PENALTY, END_GAP_PENALTY);
  closePre();
  closeWindow();
  return;
}
function pairwiseDna(titleOne$$1, newDnaOne$$1, titleTwo$$1, newDnaTwo$$1, matchScore, mismatchScore, gapPenalty, beginGapPenalty, endGapPenalty) {
  var useLinearSpace = true;
  var useQuadraticSpace = false;
  var matrix = new Identity;
  matrix.setMatch(matchScore);
  matrix.setMismatch(mismatchScore);
  var scoreSet = new ScoreSet;
  scoreSet.setScoreSetParam(matrix, gapPenalty, beginGapPenalty, endGapPenalty);
  var alignment;
  if (useLinearSpace) {
    alignment = new AlignPairLinear;
    alignment.setAlignParam(newDnaOne$$1, newDnaTwo$$1, scoreSet);
    alignment.align();
    var v280 = outputWindow.document;
    var v738 = ">" + titleOne$$1;
    var v281 = v738 + "\n";
    v280.write(v281);
    var v282 = outputWindow.document;
    var v739 = alignment.getAlignedM();
    var v283 = addReturns(v739);
    v282.write(v283);
    var v284 = outputWindow.document;
    v284.write("\n");
    var v285 = outputWindow.document;
    v285.write("\n");
    var v286 = outputWindow.document;
    var v740 = ">" + titleTwo$$1;
    var v287 = v740 + "\n";
    v286.write(v287);
    var v288 = outputWindow.document;
    var v741 = alignment.getAlignedN();
    var v289 = addReturns(v741);
    v288.write(v289);
    var v290 = outputWindow.document;
    v290.write("\n\n");
    var v291 = outputWindow.document;
    var v1043 = alignment.score;
    var v742 = "Alignment score: " + v1043;
    var v292 = v742 + "\n\n";
    v291.write(v292);
  }
  if (useQuadraticSpace) {
    alignment = new AlignPairQuad;
    alignment.initializeMatrix(newDnaOne$$1, newDnaTwo$$1, scoreSet);
    alignment.fillMatrix();
    alignment.align();
    var v293 = outputWindow.document;
    var v743 = ">" + titleOne$$1;
    var v294 = v743 + "\n";
    v293.write(v294);
    var v295 = outputWindow.document;
    var v744 = alignment.getAlignedM();
    var v296 = addReturns(v744);
    v295.write(v296);
    var v297 = outputWindow.document;
    v297.write("\n");
    var v298 = outputWindow.document;
    v298.write("\n");
    var v299 = outputWindow.document;
    var v745 = ">" + titleTwo$$1;
    var v300 = v745 + "\n";
    v299.write(v300);
    var v301 = outputWindow.document;
    var v746 = alignment.getAlignedN();
    var v302 = addReturns(v746);
    v301.write(v302);
    var v303 = outputWindow.document;
    v303.write("\n\n");
    var v304 = outputWindow.document;
    var v1044 = alignment.score;
    var v747 = "Alignment score: " + v1044;
    var v305 = v747 + "\n\n";
    v304.write(v305);
  }
  return;
}
function getScore(r1$$1, r2) {
  var v306 = this.scoringMatrix;
  return v306.scoringMatrix_getScore(r1$$1, r2);
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
  var v307 = r1$$2 == r2$$1;
  if (v307) {
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
  var v1045 = this.M;
  var v748 = v1045.length;
  var v324 = v748 == 0;
  if (v324) {
    var j$$10 = 1;
    var v1046 = this.N;
    var v749 = v1046.length;
    var v313 = j$$10 <= v749;
    for (;v313;) {
      var v308 = this.alignedM;
      v308.push("-");
      var v309 = this.alignedN;
      var v750 = this.N;
      var v751 = j$$10 - 1;
      var v310 = v750[v751];
      v309.push(v310);
      var v311 = this.score;
      var v752 = this.scoreSet;
      var v312 = v752.gap;
      this.score = v311 + v312;
      j$$10++;
      var v1047 = this.N;
      var v753 = v1047.length;
      v313 = j$$10 <= v753;
    }
  } else {
    var v1048 = this.N;
    var v754 = v1048.length;
    var v323 = v754 == 0;
    if (v323) {
      j$$10 = 1;
      var v1049 = this.M;
      var v755 = v1049.length;
      var v319 = j$$10 <= v755;
      for (;v319;) {
        var v314 = this.alignedN;
        v314.push("-");
        var v315 = this.alignedM;
        var v756 = this.M;
        var v757 = j$$10 - 1;
        var v316 = v756[v757];
        v315.push(v316);
        var v317 = this.score;
        var v758 = this.scoreSet;
        var v318 = v758.gap;
        this.score = v317 + v318;
        j$$10++;
        var v1050 = this.M;
        var v759 = v1050.length;
        v319 = j$$10 <= v759;
      }
    } else {
      var v1265 = this.M;
      var v1051 = v1265.length;
      var v760 = v1051 == 0;
      if (v760) {
        var v1266 = this.N;
        var v1052 = v1266.length;
        v760 = v1052 == 0;
      }
      var v322 = v760;
      if (v322) {
      } else {
        var v761 = this.M;
        var v320 = v761.length;
        var v762 = this.N;
        var v321 = v762.length;
        this.path(0, 0, v320, v321);
      }
    }
  }
  return;
}
function path(i1, j1, i2, j2) {
  var v1053 = i1 + 1;
  var v763 = v1053 == i2;
  var v1054 = !v763;
  if (v1054) {
    v763 = j1 == j2;
  }
  var v421 = v763;
  if (v421) {
    var subM = new Array;
    var subN = new Array;
    var i$$11 = i1 + 1;
    var v326 = i$$11 <= i2;
    for (;v326;) {
      var v764 = this.M;
      var v765 = i$$11 - 1;
      var v325 = v764[v765];
      subM.push(v325);
      i$$11++;
      v326 = i$$11 <= i2;
    }
    var j$$11 = j1 + 1;
    var v328 = j$$11 <= j2;
    for (;v328;) {
      var v766 = this.N;
      var v767 = j$$11 - 1;
      var v327 = v766[v767];
      subN.push(v327);
      j$$11++;
      v328 = j$$11 <= j2;
    }
    var alignment$$1 = new AlignPairQuad;
    subScoreSet = new ScoreSet;
    var v351 = j1 == j2;
    if (v351) {
      var v342 = j1 == 0;
      if (v342) {
        var v768 = this.scoreSet;
        var v329 = v768.scoringMatrix;
        var v769 = this.scoreSet;
        var v330 = v769.beginGap;
        var v770 = this.scoreSet;
        var v331 = v770.beginGap;
        var v771 = this.scoreSet;
        var v332 = v771.beginGap;
        subScoreSet.setScoreSetParam(v329, v330, v331, v332);
      } else {
        var v1055 = this.N;
        var v772 = v1055.length;
        var v341 = j1 == v772;
        if (v341) {
          var v773 = this.scoreSet;
          var v333 = v773.scoringMatrix;
          var v774 = this.scoreSet;
          var v334 = v774.endGap;
          var v775 = this.scoreSet;
          var v335 = v775.endGap;
          var v776 = this.scoreSet;
          var v336 = v776.endGap;
          subScoreSet.setScoreSetParam(v333, v334, v335, v336);
        } else {
          var v777 = this.scoreSet;
          var v337 = v777.scoringMatrix;
          var v778 = this.scoreSet;
          var v338 = v778.gap;
          var v779 = this.scoreSet;
          var v339 = v779.gap;
          var v780 = this.scoreSet;
          var v340 = v780.gap;
          subScoreSet.setScoreSetParam(v337, v338, v339, v340);
        }
      }
    } else {
      var v781 = this.scoreSet;
      var v343 = v781.scoringMatrix;
      var v782 = this.scoreSet;
      var v344 = v782.gap;
      var v783 = this.scoreSet;
      var v345 = v783.beginGap;
      var v784 = this.scoreSet;
      var v346 = v784.endGap;
      subScoreSet.setScoreSetParam(v343, v344, v345, v346);
      subScoreSet.useBeginGapTop = false;
      subScoreSet.useBeginGapLeft = false;
      subScoreSet.useEndGapBottom = false;
      subScoreSet.useEndGapRight = false;
      var v347 = i1 == 0;
      if (v347) {
        subScoreSet.useBeginGapTop = true;
      }
      var v348 = j1 == 0;
      if (v348) {
        subScoreSet.useBeginGapLeft = true;
      }
      var v1056 = this.N;
      var v785 = v1056.length;
      var v349 = j2 == v785;
      if (v349) {
        subScoreSet.useEndGapRight = true;
      }
      var v1057 = this.M;
      var v786 = v1057.length;
      var v350 = i2 == v786;
      if (v350) {
        subScoreSet.useEndGapBottom = true;
      }
    }
    alignment$$1.initializeMatrix(subM, subN, subScoreSet);
    alignment$$1.fillMatrix();
    alignment$$1.align();
    var v352 = this.alignedM;
    var v353 = alignment$$1.getAlignedM();
    v352.push(v353);
    var v354 = this.alignedN;
    var v355 = alignment$$1.getAlignedN();
    v354.push(v355);
    var v356 = this.score;
    var v357 = alignment$$1.score;
    this.score = v356 + v357;
  } else {
    var v787 = i1 + i2;
    var v358 = v787 / 2;
    var middle = Math.floor(v358);
    var v359 = this.Sn;
    v359[j1] = 0;
    var v364 = i1 == 0;
    if (v364) {
      j$$11 = j1 + 1;
      var v361 = j$$11 <= j2;
      for (;v361;) {
        var v360 = this.Sn;
        var v1058 = this.Sn;
        var v1059 = j$$11 - 1;
        var v788 = v1058[v1059];
        var v1060 = this.scoreSet;
        var v789 = v1060.beginGap;
        v360[j$$11] = v788 - v789;
        j$$11++;
        v361 = j$$11 <= j2;
      }
    } else {
      j$$11 = j1 + 1;
      var v363 = j$$11 <= j2;
      for (;v363;) {
        var v362 = this.Sn;
        var v1061 = this.Sn;
        var v1062 = j$$11 - 1;
        var v790 = v1061[v1062];
        var v1063 = this.scoreSet;
        var v791 = v1063.gap;
        v362[j$$11] = v790 - v791;
        j$$11++;
        v363 = j$$11 <= j2;
      }
    }
    var diag;
    var left$$1;
    i$$11 = i1 + 1;
    var v386 = i$$11 <= middle;
    for (;v386;) {
      var v365 = this.Sn;
      diag = v365[j1];
      var v370 = j1 == 0;
      if (v370) {
        var v792 = this.Sn;
        var v366 = v792[j1];
        var v793 = this.scoreSet;
        var v367 = v793.beginGap;
        left$$1 = v366 - v367;
      } else {
        var v794 = this.Sn;
        var v368 = v794[j1];
        var v795 = this.scoreSet;
        var v369 = v795.gap;
        left$$1 = v368 - v369;
      }
      var v371 = this.Sn;
      v371[j1] = left$$1;
      j$$11 = j1 + 1;
      var v385 = j$$11 <= j2;
      for (;v385;) {
        var v1267 = this.N;
        var v1064 = v1267.length;
        var v796 = j$$11 == v1064;
        if (v796) {
          var v1268 = this.M;
          var v1065 = v1268.length;
          v796 = i$$11 == v1065;
        }
        var v382 = v796;
        if (v382) {
          var v1066 = this.Sn;
          var v797 = v1066[j$$11];
          var v1067 = this.scoreSet;
          var v798 = v1067.endGap;
          var v372 = v797 - v798;
          var v1269 = this.scoreSet;
          var v1068 = v1269.endGap;
          var v799 = left$$1 - v1068;
          var v1270 = this.scoreSet;
          var v1397 = this.M;
          var v1398 = i$$11 - 1;
          var v1271 = v1397[v1398];
          var v1399 = this.N;
          var v1400 = j$$11 - 1;
          var v1272 = v1399[v1400];
          var v1069 = v1270.getScore(v1271, v1272);
          var v800 = diag + v1069;
          var v373 = Math.max(v799, v800);
          left$$1 = Math.max(v372, v373);
        } else {
          var v1070 = this.M;
          var v801 = v1070.length;
          var v381 = i$$11 == v801;
          if (v381) {
            var v1071 = this.Sn;
            var v802 = v1071[j$$11];
            var v1072 = this.scoreSet;
            var v803 = v1072.gap;
            var v374 = v802 - v803;
            var v1273 = this.scoreSet;
            var v1073 = v1273.endGap;
            var v804 = left$$1 - v1073;
            var v1274 = this.scoreSet;
            var v1401 = this.M;
            var v1402 = i$$11 - 1;
            var v1275 = v1401[v1402];
            var v1403 = this.N;
            var v1404 = j$$11 - 1;
            var v1276 = v1403[v1404];
            var v1074 = v1274.getScore(v1275, v1276);
            var v805 = diag + v1074;
            var v375 = Math.max(v804, v805);
            left$$1 = Math.max(v374, v375);
          } else {
            var v1075 = this.N;
            var v806 = v1075.length;
            var v380 = j$$11 == v806;
            if (v380) {
              var v1076 = this.Sn;
              var v807 = v1076[j$$11];
              var v1077 = this.scoreSet;
              var v808 = v1077.endGap;
              var v376 = v807 - v808;
              var v1277 = this.scoreSet;
              var v1078 = v1277.gap;
              var v809 = left$$1 - v1078;
              var v1278 = this.scoreSet;
              var v1405 = this.M;
              var v1406 = i$$11 - 1;
              var v1279 = v1405[v1406];
              var v1407 = this.N;
              var v1408 = j$$11 - 1;
              var v1280 = v1407[v1408];
              var v1079 = v1278.getScore(v1279, v1280);
              var v810 = diag + v1079;
              var v377 = Math.max(v809, v810);
              left$$1 = Math.max(v376, v377);
            } else {
              var v1080 = this.Sn;
              var v811 = v1080[j$$11];
              var v1081 = this.scoreSet;
              var v812 = v1081.gap;
              var v378 = v811 - v812;
              var v1281 = this.scoreSet;
              var v1082 = v1281.gap;
              var v813 = left$$1 - v1082;
              var v1282 = this.scoreSet;
              var v1409 = this.M;
              var v1410 = i$$11 - 1;
              var v1283 = v1409[v1410];
              var v1411 = this.N;
              var v1412 = j$$11 - 1;
              var v1284 = v1411[v1412];
              var v1083 = v1282.getScore(v1283, v1284);
              var v814 = diag + v1083;
              var v379 = Math.max(v813, v814);
              left$$1 = Math.max(v378, v379);
            }
          }
        }
        var v383 = this.Sn;
        diag = v383[j$$11];
        var v384 = this.Sn;
        v384[j$$11] = left$$1;
        j$$11++;
        v385 = j$$11 <= j2;
      }
      i$$11++;
      v386 = i$$11 <= middle;
    }
    var v387 = this.Sp;
    v387[j2] = 0;
    var v1084 = this.M;
    var v815 = v1084.length;
    var v392 = i2 == v815;
    if (v392) {
      j$$11 = j2 - 1;
      var v389 = j$$11 >= j1;
      for (;v389;) {
        var v388 = this.Sp;
        var v1085 = this.Sp;
        var v1086 = j$$11 + 1;
        var v816 = v1085[v1086];
        var v1087 = this.scoreSet;
        var v817 = v1087.endGap;
        v388[j$$11] = v816 - v817;
        j$$11--;
        v389 = j$$11 >= j1;
      }
    } else {
      j$$11 = j2 - 1;
      var v391 = j$$11 >= j1;
      for (;v391;) {
        var v390 = this.Sp;
        var v1088 = this.Sp;
        var v1089 = j$$11 + 1;
        var v818 = v1088[v1089];
        var v1090 = this.scoreSet;
        var v819 = v1090.gap;
        v390[j$$11] = v818 - v819;
        j$$11--;
        v391 = j$$11 >= j1;
      }
    }
    var right$$1;
    i$$11 = i2 - 1;
    var v414 = i$$11 >= middle;
    for (;v414;) {
      var v393 = this.Sp;
      diag = v393[j2];
      var v1091 = this.N;
      var v820 = v1091.length;
      var v398 = j2 == v820;
      if (v398) {
        var v821 = this.Sp;
        var v394 = v821[j2];
        var v822 = this.scoreSet;
        var v395 = v822.endGap;
        right$$1 = v394 - v395;
      } else {
        var v823 = this.Sp;
        var v396 = v823[j2];
        var v824 = this.scoreSet;
        var v397 = v824.gap;
        right$$1 = v396 - v397;
      }
      var v399 = this.Sp;
      v399[j2] = right$$1;
      j$$11 = j2 - 1;
      var v413 = j$$11 >= j1;
      for (;v413;) {
        var v825 = j$$11 == 0;
        if (v825) {
          v825 = i$$11 == 0;
        }
        var v410 = v825;
        if (v410) {
          var v1092 = this.Sp;
          var v826 = v1092[j$$11];
          var v1093 = this.scoreSet;
          var v827 = v1093.beginGap;
          var v400 = v826 - v827;
          var v1285 = this.scoreSet;
          var v1094 = v1285.beginGap;
          var v828 = right$$1 - v1094;
          var v1286 = this.scoreSet;
          var v1413 = this.M;
          var v1469 = i$$11 + 1;
          var v1414 = v1469 - 1;
          var v1287 = v1413[v1414];
          var v1415 = this.N;
          var v1470 = j$$11 + 1;
          var v1416 = v1470 - 1;
          var v1288 = v1415[v1416];
          var v1095 = v1286.getScore(v1287, v1288);
          var v829 = diag + v1095;
          var v401 = Math.max(v828, v829);
          right$$1 = Math.max(v400, v401);
        } else {
          var v409 = j$$11 == 0;
          if (v409) {
            var v1096 = this.Sp;
            var v830 = v1096[j$$11];
            var v1097 = this.scoreSet;
            var v831 = v1097.beginGap;
            var v402 = v830 - v831;
            var v1289 = this.scoreSet;
            var v1098 = v1289.gap;
            var v832 = right$$1 - v1098;
            var v1290 = this.scoreSet;
            var v1417 = this.M;
            var v1471 = i$$11 + 1;
            var v1418 = v1471 - 1;
            var v1291 = v1417[v1418];
            var v1419 = this.N;
            var v1472 = j$$11 + 1;
            var v1420 = v1472 - 1;
            var v1292 = v1419[v1420];
            var v1099 = v1290.getScore(v1291, v1292);
            var v833 = diag + v1099;
            var v403 = Math.max(v832, v833);
            right$$1 = Math.max(v402, v403);
          } else {
            var v408 = i$$11 == 0;
            if (v408) {
              var v1100 = this.Sp;
              var v834 = v1100[j$$11];
              var v1101 = this.scoreSet;
              var v835 = v1101.gap;
              var v404 = v834 - v835;
              var v1293 = this.scoreSet;
              var v1102 = v1293.beginGap;
              var v836 = right$$1 - v1102;
              var v1294 = this.scoreSet;
              var v1421 = this.M;
              var v1473 = i$$11 + 1;
              var v1422 = v1473 - 1;
              var v1295 = v1421[v1422];
              var v1423 = this.N;
              var v1474 = j$$11 + 1;
              var v1424 = v1474 - 1;
              var v1296 = v1423[v1424];
              var v1103 = v1294.getScore(v1295, v1296);
              var v837 = diag + v1103;
              var v405 = Math.max(v836, v837);
              right$$1 = Math.max(v404, v405);
            } else {
              var v1104 = this.Sp;
              var v838 = v1104[j$$11];
              var v1105 = this.scoreSet;
              var v839 = v1105.gap;
              var v406 = v838 - v839;
              var v1297 = this.scoreSet;
              var v1106 = v1297.gap;
              var v840 = right$$1 - v1106;
              var v1298 = this.scoreSet;
              var v1425 = this.M;
              var v1475 = i$$11 + 1;
              var v1426 = v1475 - 1;
              var v1299 = v1425[v1426];
              var v1427 = this.N;
              var v1476 = j$$11 + 1;
              var v1428 = v1476 - 1;
              var v1300 = v1427[v1428];
              var v1107 = v1298.getScore(v1299, v1300);
              var v841 = diag + v1107;
              var v407 = Math.max(v840, v841);
              right$$1 = Math.max(v406, v407);
            }
          }
        }
        var v411 = this.Sp;
        diag = v411[j$$11];
        var v412 = this.Sp;
        v412[j$$11] = right$$1;
        j$$11--;
        v413 = j$$11 >= j1;
      }
      i$$11--;
      v414 = i$$11 >= middle;
    }
    var v842 = this.Sn;
    var v415 = v842[j1];
    var v843 = this.Sp;
    var v416 = v843[j1];
    var maxValue = v415 + v416;
    var maxJ = j1;
    j$$11 = j1 + 1;
    var v420 = j$$11 <= j2;
    for (;v420;) {
      var v1301 = this.Sn;
      var v1108 = v1301[j$$11];
      var v1302 = this.Sp;
      var v1109 = v1302[j$$11];
      var v844 = v1108 + v1109;
      var v419 = v844 >= maxValue;
      if (v419) {
        var v845 = this.Sn;
        var v417 = v845[j$$11];
        var v846 = this.Sp;
        var v418 = v846[j$$11];
        maxValue = v417 + v418;
        maxJ = j$$11;
      }
      j$$11++;
      v420 = j$$11 <= j2;
    }
    this.path(i1, j1, middle, maxJ);
    this.path(middle, maxJ, i2, j2);
  }
  return;
}
function getAlignedM() {
  var v422 = this.alignedM;
  return v422.join("");
}
function getAlignedN() {
  var v423 = this.alignedN;
  return v423.join("");
}
function setAlignParam(M, N, scoreSet$$1) {
  this.M = M;
  this.N = N;
  var v1575 = new Array;
  this.alignedM = v1575;
  var v1576 = new Array;
  this.alignedN = v1576;
  this.scoreSet = scoreSet$$1;
  var v847 = this.N;
  var v424 = v847.length;
  var v1577 = new Array(v424);
  this.Sn = v1577;
  var v848 = this.N;
  var v425 = v848.length;
  var v1578 = new Array(v425);
  this.Sp = v1578;
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
  var v1110 = this.M;
  var v849 = v1110.length;
  var v426 = v849 + 1;
  var v1579 = new Array(v426);
  this.nodes = v1579;
  var i$$12 = 0;
  var v1111 = this.nodes;
  var v850 = v1111.length;
  var v430 = i$$12 < v850;
  for (;v430;) {
    var v427 = this.nodes;
    var v1303 = this.N;
    var v1112 = v1303.length;
    var v851 = v1112 + 1;
    var v1580 = new Array(v851);
    v427[i$$12] = v1580;
    var j$$12 = 0;
    var v1304 = this.nodes;
    var v1113 = v1304[i$$12];
    var v852 = v1113.length;
    var v429 = j$$12 < v852;
    for (;v429;) {
      var v853 = this.nodes;
      var v428 = v853[i$$12];
      var v1581 = new Node;
      v428[j$$12] = v1581;
      j$$12++;
      var v1305 = this.nodes;
      var v1114 = v1305[i$$12];
      var v854 = v1114.length;
      v429 = j$$12 < v854;
    }
    i$$12++;
    var v1115 = this.nodes;
    var v855 = v1115.length;
    v430 = i$$12 < v855;
  }
  var v1116 = this.nodes;
  var v856 = v1116[0];
  var v431 = v856[0];
  v431.value = 0;
  i$$12 = 1;
  var v1117 = this.nodes;
  var v857 = v1117.length;
  var v437 = i$$12 < v857;
  for (;v437;) {
    var v858 = this.scoreSet;
    var v434 = v858.useBeginGapLeft;
    if (v434) {
      var v1118 = this.nodes;
      var v859 = v1118[i$$12];
      var v432 = v859[0];
      var v1429 = this.nodes;
      var v1430 = i$$12 - 1;
      var v1306 = v1429[v1430];
      var v1119 = v1306[0];
      var v860 = v1119.value;
      var v1120 = this.scoreSet;
      var v861 = v1120.beginGap;
      v432.value = v860 - v861;
    } else {
      var v1121 = this.nodes;
      var v862 = v1121[i$$12];
      var v433 = v862[0];
      var v1431 = this.nodes;
      var v1432 = i$$12 - 1;
      var v1307 = v1431[v1432];
      var v1122 = v1307[0];
      var v863 = v1122.value;
      var v1123 = this.scoreSet;
      var v864 = v1123.gap;
      v433.value = v863 - v864;
    }
    var v1124 = this.nodes;
    var v865 = v1124[i$$12];
    var v435 = v865[0];
    v435.tracebackI = i$$12 - 1;
    var v1125 = this.nodes;
    var v866 = v1125[i$$12];
    var v436 = v866[0];
    v436.tracebackJ = 0;
    i$$12++;
    var v1126 = this.nodes;
    var v867 = v1126.length;
    v437 = i$$12 < v867;
  }
  j$$12 = 1;
  var v1308 = this.nodes;
  var v1127 = v1308[0];
  var v868 = v1127.length;
  var v443 = j$$12 < v868;
  for (;v443;) {
    var v869 = this.scoreSet;
    var v440 = v869.useBeginGapTop;
    if (v440) {
      var v1128 = this.nodes;
      var v870 = v1128[0];
      var v438 = v870[j$$12];
      var v1433 = this.nodes;
      var v1309 = v1433[0];
      var v1310 = j$$12 - 1;
      var v1129 = v1309[v1310];
      var v871 = v1129.value;
      var v1130 = this.scoreSet;
      var v872 = v1130.beginGap;
      v438.value = v871 - v872;
    } else {
      var v1131 = this.nodes;
      var v873 = v1131[0];
      var v439 = v873[j$$12];
      var v1434 = this.nodes;
      var v1311 = v1434[0];
      var v1312 = j$$12 - 1;
      var v1132 = v1311[v1312];
      var v874 = v1132.value;
      var v1133 = this.scoreSet;
      var v875 = v1133.gap;
      v439.value = v874 - v875;
    }
    var v1134 = this.nodes;
    var v876 = v1134[0];
    var v441 = v876[j$$12];
    v441.tracebackI = 0;
    var v1135 = this.nodes;
    var v877 = v1135[0];
    var v442 = v877[j$$12];
    v442.tracebackJ = j$$12 - 1;
    j$$12++;
    var v1313 = this.nodes;
    var v1136 = v1313[0];
    var v878 = v1136.length;
    v443 = j$$12 < v878;
  }
  return;
}
function dumpMatrix() {
  var v444 = outputWindow.document;
  var v1435 = this.nodes;
  var v1314 = v1435.length;
  var v1137 = "Dynamic programming matrix i=" + v1314;
  var v879 = v1137 + " and j=";
  var v1315 = this.nodes;
  var v1138 = v1315[0];
  var v880 = v1138.length;
  var v445 = v879 + v880;
  v444.write(v445);
  var v446 = outputWindow.document;
  v446.write("\n");
  var i$$13 = 0;
  var v1139 = this.nodes;
  var v881 = v1139.length;
  var v457 = i$$13 < v881;
  for (;v457;) {
    var j$$13 = 0;
    var v1316 = this.nodes;
    var v1140 = v1316[i$$13];
    var v882 = v1140.length;
    var v455 = j$$13 < v882;
    for (;v455;) {
      var v1141 = this.nodes;
      var v883 = v1141[i$$13];
      var v447 = v883[j$$13];
      var traceI = v447.tracebackI;
      var v1142 = this.nodes;
      var v884 = v1142[i$$13];
      var v448 = v884[j$$13];
      var traceJ = v448.tracebackJ;
      var v449 = traceI == undefined;
      if (v449) {
        traceI = "u";
      }
      var v450 = traceJ == undefined;
      if (v450) {
        traceJ = "u";
      }
      var v1518 = "(" + i$$13;
      var v1503 = v1518 + ",";
      var v1477 = v1503 + j$$13;
      var v1436 = v1477 + ")[";
      var v1317 = v1436 + traceI;
      var v1143 = v1317 + ",";
      var v885 = v1143 + traceJ;
      var v451 = v885 + "]=";
      var v1318 = this.nodes;
      var v1144 = v1318[i$$13];
      var v886 = v1144[j$$13];
      var v452 = v886.value;
      var output = v451 + v452;
      var v453 = outputWindow.document;
      var v454 = rightNum(output, "", 20, " ");
      v453.write(v454);
      j$$13++;
      var v1319 = this.nodes;
      var v1145 = v1319[i$$13];
      var v887 = v1145.length;
      v455 = j$$13 < v887;
    }
    var v456 = outputWindow.document;
    v456.write("\n");
    i$$13++;
    var v1146 = this.nodes;
    var v888 = v1146.length;
    v457 = i$$13 < v888;
  }
  var v458 = outputWindow.document;
  v458.write("\n");
  return;
}
function fillMatrix() {
  var i$$14 = 1;
  var v1147 = this.nodes;
  var v889 = v1147.length;
  var v504 = i$$14 < v889;
  for (;v504;) {
    var j$$14 = 1;
    var v1320 = this.nodes;
    var v1148 = v1320[0];
    var v890 = v1148.length;
    var v503 = j$$14 < v890;
    for (;v503;) {
      var a;
      var b;
      var c;
      var v1437 = this.nodes;
      var v1321 = v1437.length;
      var v1149 = v1321 - 1;
      var v891 = i$$14 == v1149;
      if (v891) {
        var v1478 = this.nodes;
        var v1438 = v1478[0];
        var v1322 = v1438.length;
        var v1150 = v1322 - 1;
        v891 = j$$14 == v1150;
      }
      var v489 = v891;
      if (v489) {
        var v892 = this.scoreSet;
        var v463 = v892.useEndGapRight;
        if (v463) {
          var v1323 = this.nodes;
          var v1324 = i$$14 - 1;
          var v1151 = v1323[v1324];
          var v893 = v1151[j$$14];
          var v459 = v893.value;
          var v894 = this.scoreSet;
          var v460 = v894.endGap;
          a = v459 - v460;
        } else {
          var v1325 = this.nodes;
          var v1326 = i$$14 - 1;
          var v1152 = v1325[v1326];
          var v895 = v1152[j$$14];
          var v461 = v895.value;
          var v896 = this.scoreSet;
          var v462 = v896.gap;
          a = v461 - v462;
        }
        var v897 = this.scoreSet;
        var v468 = v897.useEndGapBottom;
        if (v468) {
          var v1327 = this.nodes;
          var v1153 = v1327[i$$14];
          var v1154 = j$$14 - 1;
          var v898 = v1153[v1154];
          var v464 = v898.value;
          var v899 = this.scoreSet;
          var v465 = v899.endGap;
          b = v464 - v465;
        } else {
          var v1328 = this.nodes;
          var v1155 = v1328[i$$14];
          var v1156 = j$$14 - 1;
          var v900 = v1155[v1156];
          var v466 = v900.value;
          var v901 = this.scoreSet;
          var v467 = v901.gap;
          b = v466 - v467;
        }
      } else {
        var v1329 = this.nodes;
        var v1157 = v1329.length;
        var v902 = v1157 - 1;
        var v488 = i$$14 == v902;
        if (v488) {
          var v1330 = this.nodes;
          var v1331 = i$$14 - 1;
          var v1158 = v1330[v1331];
          var v903 = v1158[j$$14];
          var v469 = v903.value;
          var v904 = this.scoreSet;
          var v470 = v904.gap;
          a = v469 - v470;
          var v905 = this.scoreSet;
          var v475 = v905.useEndGapBottom;
          if (v475) {
            var v1332 = this.nodes;
            var v1159 = v1332[i$$14];
            var v1160 = j$$14 - 1;
            var v906 = v1159[v1160];
            var v471 = v906.value;
            var v907 = this.scoreSet;
            var v472 = v907.endGap;
            b = v471 - v472;
          } else {
            var v1333 = this.nodes;
            var v1161 = v1333[i$$14];
            var v1162 = j$$14 - 1;
            var v908 = v1161[v1162];
            var v473 = v908.value;
            var v909 = this.scoreSet;
            var v474 = v909.gap;
            b = v473 - v474;
          }
        } else {
          var v1439 = this.nodes;
          var v1334 = v1439[0];
          var v1163 = v1334.length;
          var v910 = v1163 - 1;
          var v487 = j$$14 == v910;
          if (v487) {
            var v911 = this.scoreSet;
            var v480 = v911.useEndGapRight;
            if (v480) {
              var v1335 = this.nodes;
              var v1336 = i$$14 - 1;
              var v1164 = v1335[v1336];
              var v912 = v1164[j$$14];
              var v476 = v912.value;
              var v913 = this.scoreSet;
              var v477 = v913.endGap;
              a = v476 - v477;
            } else {
              var v1337 = this.nodes;
              var v1338 = i$$14 - 1;
              var v1165 = v1337[v1338];
              var v914 = v1165[j$$14];
              var v478 = v914.value;
              var v915 = this.scoreSet;
              var v479 = v915.gap;
              a = v478 - v479;
            }
            var v1339 = this.nodes;
            var v1166 = v1339[i$$14];
            var v1167 = j$$14 - 1;
            var v916 = v1166[v1167];
            var v481 = v916.value;
            var v917 = this.scoreSet;
            var v482 = v917.gap;
            b = v481 - v482;
          } else {
            var v1340 = this.nodes;
            var v1341 = i$$14 - 1;
            var v1168 = v1340[v1341];
            var v918 = v1168[j$$14];
            var v483 = v918.value;
            var v919 = this.scoreSet;
            var v484 = v919.gap;
            a = v483 - v484;
            var v1342 = this.nodes;
            var v1169 = v1342[i$$14];
            var v1170 = j$$14 - 1;
            var v920 = v1169[v1170];
            var v485 = v920.value;
            var v921 = this.scoreSet;
            var v486 = v921.gap;
            b = v485 - v486;
          }
        }
      }
      var v1343 = this.nodes;
      var v1344 = i$$14 - 1;
      var v1171 = v1343[v1344];
      var v1172 = j$$14 - 1;
      var v922 = v1171[v1172];
      var v490 = v922.value;
      var v923 = this.scoreSet;
      var v1173 = this.M;
      var v1174 = i$$14 - 1;
      var v924 = v1173[v1174];
      var v1175 = this.N;
      var v1176 = j$$14 - 1;
      var v925 = v1175[v1176];
      var v491 = v923.getScore(v924, v925);
      c = v490 + v491;
      var v926 = a >= b;
      if (v926) {
        v926 = a >= c;
      }
      var v502 = v926;
      if (v502) {
        var v1177 = this.nodes;
        var v927 = v1177[i$$14];
        var v492 = v927[j$$14];
        v492.value = a;
        var v1178 = this.nodes;
        var v928 = v1178[i$$14];
        var v493 = v928[j$$14];
        v493.tracebackI = i$$14 - 1;
        var v1179 = this.nodes;
        var v929 = v1179[i$$14];
        var v494 = v929[j$$14];
        v494.tracebackJ = j$$14;
      } else {
        var v930 = b >= c;
        if (v930) {
          v930 = b >= a;
        }
        var v501 = v930;
        if (v501) {
          var v1180 = this.nodes;
          var v931 = v1180[i$$14];
          var v495 = v931[j$$14];
          v495.value = b;
          var v1181 = this.nodes;
          var v932 = v1181[i$$14];
          var v496 = v932[j$$14];
          v496.tracebackI = i$$14;
          var v1182 = this.nodes;
          var v933 = v1182[i$$14];
          var v497 = v933[j$$14];
          v497.tracebackJ = j$$14 - 1;
        } else {
          var v1183 = this.nodes;
          var v934 = v1183[i$$14];
          var v498 = v934[j$$14];
          v498.value = c;
          var v1184 = this.nodes;
          var v935 = v1184[i$$14];
          var v499 = v935[j$$14];
          v499.tracebackI = i$$14 - 1;
          var v1185 = this.nodes;
          var v936 = v1185[i$$14];
          var v500 = v936[j$$14];
          v500.tracebackJ = j$$14 - 1;
        }
      }
      j$$14++;
      var v1345 = this.nodes;
      var v1186 = v1345[0];
      var v937 = v1186.length;
      v503 = j$$14 < v937;
    }
    i$$14++;
    var v1187 = this.nodes;
    var v938 = v1187.length;
    v504 = i$$14 < v938;
  }
  var v1188 = this.nodes;
  var v1440 = this.nodes;
  var v1346 = v1440.length;
  var v1189 = v1346 - 1;
  var v939 = v1188[v1189];
  var v1441 = this.nodes;
  var v1347 = v1441[0];
  var v1190 = v1347.length;
  var v940 = v1190 - 1;
  var v505 = v939[v940];
  this.score = v505.value;
  return;
}
function alignQuad() {
  var v1582 = new Array;
  this.alignedM = v1582;
  var v1583 = new Array;
  this.alignedN = v1583;
  var v941 = this.nodes;
  var v506 = v941.length;
  var currentI = v506 - 1;
  var v1191 = this.nodes;
  var v942 = v1191[0];
  var v507 = v942.length;
  var currentJ = v507 - 1;
  var v943 = this.nodes;
  var v1348 = this.nodes;
  var v1192 = v1348.length;
  var v944 = v1192 - 1;
  var v508 = v943[v944];
  var v1349 = this.nodes;
  var v1193 = v1349[0];
  var v945 = v1193.length;
  var v509 = v945 - 1;
  var currentNode = v508[v509];
  var v1194 = currentNode.tracebackI;
  var v946 = v1194 != undefined;
  if (v946) {
    var v1195 = currentNode.tracebackJ;
    v946 = v1195 != undefined;
  }
  var v524 = v946;
  for (;v524;) {
    var v1196 = currentNode.tracebackI;
    var v1197 = currentI - 1;
    var v947 = v1196 == v1197;
    if (v947) {
      var v1198 = currentNode.tracebackJ;
      var v1199 = currentJ - 1;
      v947 = v1198 == v1199;
    }
    var v521 = v947;
    if (v521) {
      var v510 = this.alignedM;
      var v948 = this.M;
      var v511 = v948.pop();
      v510.push(v511);
      var v512 = this.alignedN;
      var v949 = this.N;
      var v513 = v949.pop();
      v512.push(v513);
    } else {
      var v950 = currentNode.tracebackJ;
      var v951 = currentJ - 1;
      var v520 = v950 == v951;
      if (v520) {
        var v514 = this.alignedM;
        v514.push("-");
        var v515 = this.alignedN;
        var v952 = this.N;
        var v516 = v952.pop();
        v515.push(v516);
      } else {
        var v517 = this.alignedM;
        var v953 = this.M;
        var v518 = v953.pop();
        v517.push(v518);
        var v519 = this.alignedN;
        v519.push("-");
      }
    }
    currentI = currentNode.tracebackI;
    currentJ = currentNode.tracebackJ;
    var v954 = this.nodes;
    var v955 = currentNode.tracebackI;
    var v522 = v954[v955];
    var v523 = currentNode.tracebackJ;
    currentNode = v522[v523];
    var v1200 = currentNode.tracebackI;
    var v956 = v1200 != undefined;
    if (v956) {
      var v1201 = currentNode.tracebackJ;
      v956 = v1201 != undefined;
    }
    v524 = v956;
  }
  var v525 = this.alignedM;
  var v1584 = v525.reverse();
  this.alignedM = v1584;
  var v526 = this.alignedN;
  var v1585 = v526.reverse();
  this.alignedN = v1585;
  return;
}
function getAlignedM() {
  var v527 = this.alignedM;
  return v527.join("");
}
function getAlignedN() {
  var v528 = this.alignedN;
  return v528.join("");
}
function AlignPairQuad() {
  return;
}
new ScoreSet;
var v529 = ScoreSet.prototype;
v529.getScore = getScore;
var v530 = ScoreSet.prototype;
v530.setScoreSetParam = setScoreSetParam;
new ScoringMatrix;
var v531 = ScoringMatrix.prototype;
v531.scoringMatrix_getScore = scoringMatrix_getScore;
var v532 = Identity;
var v1586 = new ScoringMatrix;
v532.prototype = v1586;
var v533 = Identity.prototype;
v533.setMismatch = setMismatch;
var v534 = Identity.prototype;
v534.setMatch = setMatch;
new AlignPairLinear;
var v535 = AlignPairLinear.prototype;
v535.align = align;
var v536 = AlignPairLinear.prototype;
v536.path = path;
var v537 = AlignPairLinear.prototype;
v537.setAlignParam = setAlignParam;
var v538 = AlignPairLinear.prototype;
v538.getAlignedM = getAlignedM;
var v539 = AlignPairLinear.prototype;
v539.getAlignedN = getAlignedN;
new AlignPairQuad;
var v540 = AlignPairQuad.prototype;
v540.initializeMatrix = initializeMatrix;
var v541 = AlignPairQuad.prototype;
v541.fillMatrix = fillMatrix;
var v542 = AlignPairQuad.prototype;
v542.align = alignQuad;
var v543 = AlignPairQuad.prototype;
v543.getAlignedM = getAlignedM;
var v544 = AlignPairQuad.prototype;
v544.getAlignedN = getAlignedN;
var v545 = AlignPairQuad.prototype;
v545.dumpMatrix = dumpMatrix;
document.onload = v2;
var v546 = document.getElementById("submitbtn");
v546.onclick = v3;
var v547 = document.getElementById("clearbtn");
v547.onclick = v4
