
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
function v13() {
  var v1085 = document.forms;
  var v901 = v1085[0];
  var v529 = v901.elements;
  var v14 = v529[0];
  v14.value = " ";
  var v1086 = document.forms;
  var v902 = v1086[1];
  var v530 = v902.elements;
  var v15 = v530[0];
  v15.value = " ";
  return;
}
function v12() {
  try {
    primerMap();
  } catch (e$$5) {
    var v16 = "The following error was encountered: " + e$$5;
    alert(v16);
  }
  return;
}
function v11() {
  var v531 = document.main_form;
  var v17 = v531.main_submit;
  v17.focus();
  return;
}
function v10(start$$10, stop$$6) {
  function v9(str$$11, p1$$5, offset$$13, s$$7) {
    return p1$$5.replace(/./g, " ");
  }
  function v8(str$$10, p1$$4, offset$$12, s$$6) {
    return p1$$4.replace(/./g, " ");
  }
  var v18 = outputWindow.document;
  var v532 = this.positionLabel;
  var v19 = rightNum(v532, "", 8, "");
  v18.write(v19);
  var v533 = this.characters;
  var v20 = v533.slice(start$$10, stop$$6);
  var text$$15 = v20.join("");
  text$$15 = text$$15.replace(/^(\d+)/g, v8);
  text$$15 = text$$15.replace(/(\d+)$/g, v9);
  var v21 = outputWindow.document;
  var v22 = text$$15 + "\n";
  v21.write(v22);
  var v23 = this.positionLabel;
  var v24 = stop$$6 - start$$10;
  this.positionLabel = v23 + v24;
  return;
}
function v7(start$$9, stop$$5) {
  var v25 = outputWindow.document;
  var v534 = this.positionLabel;
  var v26 = rightNum(v534, "", 8, "");
  v25.write(v26);
  var v27 = outputWindow.document;
  var v1087 = this.characters;
  var v903 = v1087.slice(start$$9, stop$$5);
  var v535 = v903.join("");
  var v28 = v535 + "\n";
  v27.write(v28);
  var v29 = this.positionLabel;
  var v30 = stop$$5 - start$$9;
  this.positionLabel = v29 + v30;
  return;
}
function v6(start$$8, stop$$4) {
  var v904 = this.characters;
  var v536 = v904.slice(start$$8, stop$$4);
  var v31 = v536.join("");
  var textToWrite = v31 + "\n";
  var v537 = textToWrite.search(/\w/);
  var v37 = v537 != -1;
  if (v37) {
    var v32 = outputWindow.document;
    var v538 = this.positionLabel;
    var v33 = rightNum(v538, "", 8, "");
    v32.write(v33);
    var v34 = this.positionLabel;
    var v539 = textToWrite.match(/[A-Z]/g);
    var v35 = v539.length;
    this.positionLabel = v34 + v35;
    var v36 = outputWindow.document;
    v36.write(textToWrite);
  }
  return;
}
function v5(start$$7, stop$$3) {
  var v38 = outputWindow.document;
  var v540 = this.positionLabel;
  var v39 = rightNum(v540, "", 8, "");
  v38.write(v39);
  var v40 = outputWindow.document;
  var v1088 = this.characters;
  var v905 = v1088.slice(start$$7, stop$$3);
  var v541 = v905.join("");
  var v41 = v541 + "\n";
  v40.write(v41);
  var v42 = this.positionLabel;
  var v542 = stop$$3 - start$$7;
  var v43 = v542 / 3;
  this.positionLabel = v42 + v43;
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
  var v44 = arrayOfSequences[0];
  var lengthOfAlign = v44.length;
  var v543 = arrayOfSequences.length;
  var v45 = v543 < 2;
  if (v45) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v544 = arrayOfTitles.length;
  var v47 = i$$1 < v544;
  for (;v47;) {
    var v1219 = arrayOfTitles[i$$1];
    var v1089 = v1219.search(/\S/);
    var v906 = v1089 == -1;
    var v1091 = !v906;
    if (v1091) {
      var v1220 = arrayOfSequences[i$$1];
      var v1090 = v1220.search(/\S/);
      v906 = v1090 == -1;
    }
    var v545 = v906;
    var v908 = !v545;
    if (v908) {
      var v1092 = arrayOfSequences[i$$1];
      var v907 = v1092.length;
      v545 = v907 != lengthOfAlign;
    }
    var v46 = v545;
    if (v46) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v546 = arrayOfTitles.length;
    v47 = i$$1 < v546;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v1311 = codonTable.search(/AmAcid/);
  var v1221 = v1311 == -1;
  var v1313 = !v1221;
  if (v1313) {
    var v1312 = codonTable.search(/Codon/);
    v1221 = v1312 == -1;
  }
  var v1093 = v1221;
  var v1223 = !v1093;
  if (v1223) {
    var v1222 = codonTable.search(/Number/);
    v1093 = v1222 == -1;
  }
  var v909 = v1093;
  var v1095 = !v909;
  if (v1095) {
    var v1094 = codonTable.search(/\/1000/);
    v909 = v1094 == -1;
  }
  var v547 = v909;
  var v911 = !v547;
  if (v911) {
    var v910 = codonTable.search(/Fraction\s*\.\./);
    v547 = v910 == -1;
  }
  var v48 = v547;
  if (v48) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v912 = formElement.value;
  var v548 = v912.search(/\S/);
  var v49 = v548 == -1;
  if (v49) {
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
  var v549 = arrayOfPatterns.length;
  var v52 = z$$2 < v549;
  for (;v52;) {
    var v913 = arrayOfPatterns[z$$2];
    var v550 = v913.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v50 = v550 == -1;
    if (v50) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v914 = arrayOfPatterns[z$$2];
    var v551 = moreExpressionCheck(v914);
    var v51 = v551 == false;
    if (v51) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v552 = arrayOfPatterns.length;
    v52 = z$$2 < v552;
  }
  var v53 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v53);
  var v54 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v54);
  var j = 0;
  var v553 = arrayOfPatterns.length;
  var v58 = j < v553;
  for (;v58;) {
    var v915 = arrayOfPatterns[j];
    var v554 = v915.match(/\/.+\//);
    var v55 = v554 + "gi";
    var v1843 = eval(v55);
    geneticCodeMatchExp[j] = v1843;
    var v555 = arrayOfPatterns[j];
    var v56 = v555.match(/=[a-zA-Z\*]/);
    var v1844 = v56.toString();
    geneticCodeMatchResult[j] = v1844;
    var v57 = geneticCodeMatchResult[j];
    var v1845 = v57.replace(/=/g, "");
    geneticCodeMatchResult[j] = v1845;
    j++;
    var v556 = arrayOfPatterns.length;
    v58 = j < v556;
  }
  var i$$2 = 0;
  var v916 = testSequence.length;
  var v557 = v916 - 3;
  var v65 = i$$2 <= v557;
  for (;v65;) {
    var v59 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v59);
    j = 0;
    var v558 = geneticCodeMatchExp.length;
    var v63 = j < v558;
    for (;v63;) {
      var v917 = geneticCodeMatchExp[j];
      var v559 = codon.search(v917);
      var v62 = v559 != -1;
      if (v62) {
        var v61 = oneMatch == true;
        if (v61) {
          var v560 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v60 = v560 + ".";
          alert(v60);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v561 = geneticCodeMatchExp.length;
      v63 = j < v561;
    }
    var v64 = oneMatch == false;
    if (v64) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v918 = testSequence.length;
    var v562 = v918 - 3;
    v65 = i$$2 <= v562;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v563 = arrayOfPatterns$$1.length;
  var v67 = z$$3 < v563;
  for (;v67;) {
    var v919 = arrayOfPatterns$$1[z$$3];
    var v564 = v919.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v66 = v564 != -1;
    if (v66) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v565 = arrayOfPatterns$$1.length;
    v67 = z$$3 < v565;
  }
  var i$$3 = 0;
  var v566 = arrayOfPatterns$$1.length;
  var v71 = i$$3 < v566;
  for (;v71;) {
    var v920 = arrayOfPatterns$$1[i$$3];
    var v567 = "[" + v920;
    var v68 = v567 + "]";
    var re = new RegExp(v68, "gi");
    var j$$1 = i$$3 + 1;
    var v568 = arrayOfPatterns$$1.length;
    var v70 = j$$1 < v568;
    for (;v70;) {
      var v921 = arrayOfPatterns$$1[j$$1];
      var v569 = v921.search(re);
      var v69 = v569 != -1;
      if (v69) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v570 = arrayOfPatterns$$1.length;
      v70 = j$$1 < v570;
    }
    i$$3++;
    var v571 = arrayOfPatterns$$1.length;
    v71 = i$$3 < v571;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v572 = arrayOfPatterns$$2.length;
  var v74 = z$$4 < v572;
  for (;v74;) {
    var v922 = arrayOfPatterns$$2[z$$4];
    var v573 = v922.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v72 = v573 == -1;
    if (v72) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v923 = arrayOfPatterns$$2[z$$4];
    var v574 = moreExpressionCheck(v923);
    var v73 = v574 == false;
    if (v73) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v575 = arrayOfPatterns$$2.length;
    v74 = z$$4 < v575;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v1096 = getSequenceFromFasta(text$$7);
  var v924 = v1096.replace(/[^A-Za-z]/g, "");
  var v576 = v924.length;
  var v76 = v576 > maxInput;
  if (v76) {
    var v577 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v75 = v577 + " characters.";
    alert(v75);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v578 = text$$8.length;
  var v78 = v578 > maxInput$$1;
  if (v78) {
    var v579 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v77 = v579 + " characters.";
    alert(v77);
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
  var v79 = outputWindow.document;
  v79.write("</form>");
  return true;
}
function closePre() {
  var v80 = outputWindow.document;
  v80.write("</div>");
  var v81 = outputWindow.document;
  v81.write("</pre>\n");
  return;
}
function closeTextArea() {
  var v82 = outputWindow.document;
  v82.write("</textarea>");
  return true;
}
function closeWindow() {
  var v83 = outputWindow.document;
  v83.write("</body>\n</html>\n");
  outputWindow.status = "Done.";
  var v84 = outputWindow.document;
  v84.close();
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
  var v580 = alignArray.length;
  var v85 = v580 < 3;
  if (v85) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v581 = alignArray.length;
  var v87 = i$$4 < v581;
  for (;v87;) {
    var v925 = alignArray[i$$4];
    var v582 = v925.search(/[^\s]+\s/);
    var v86 = v582 == -1;
    if (v86) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v583 = alignArray.length;
    v87 = i$$4 < v583;
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
  var v584 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v90 = v584 != -1;
  if (v90) {
    var v89 = matchArray = re$$1.exec(sequenceData);
    for (;v89;) {
      var v88 = matchArray[0];
      arrayOfFasta.push(v88);
      v89 = matchArray = re$$1.exec(sequenceData);
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v585 = sequence$$2.length;
  var v91 = "&gt;results for " + v585;
  var stringToReturn = v91 + " residue sequence ";
  var v586 = fastaSequenceTitle.search(/[^\s]/);
  var v93 = v586 != -1;
  if (v93) {
    var v587 = stringToReturn + '"';
    var v92 = v587 + fastaSequenceTitle;
    stringToReturn = v92 + '"';
  }
  var v588 = stringToReturn + ' starting "';
  var v589 = sequence$$2.substring(0, 10);
  var v94 = v588 + v589;
  stringToReturn = v94 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v590 = sequenceOne.length;
  var v95 = "Search results for " + v590;
  var stringToReturn$$1 = v95 + " residue sequence ";
  var v591 = fastaSequenceTitleOne.search(/[^\s]/);
  var v97 = v591 != -1;
  if (v97) {
    var v592 = stringToReturn$$1 + '"';
    var v96 = v592 + fastaSequenceTitleOne;
    stringToReturn$$1 = v96 + '"';
  }
  var v593 = stringToReturn$$1 + ' starting "';
  var v594 = sequenceOne.substring(0, 10);
  var v98 = v593 + v594;
  stringToReturn$$1 = v98 + '"\n';
  var v595 = stringToReturn$$1 + "and ";
  var v596 = sequenceTwo.length;
  var v99 = v595 + v596;
  stringToReturn$$1 = v99 + " residue sequence ";
  var v597 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v101 = v597 != -1;
  if (v101) {
    var v598 = stringToReturn$$1 + '"';
    var v100 = v598 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v100 + '"';
  }
  var v599 = stringToReturn$$1 + ' starting "';
  var v600 = sequenceTwo.substring(0, 10);
  var v102 = v599 + v600;
  stringToReturn$$1 = v102 + '"';
  var v103 = '<div class="info">' + stringToReturn$$1;
  return v103 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v104 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v104);
  var j$$2 = 0;
  var v601 = arrayOfPatterns$$3.length;
  var v106 = j$$2 < v601;
  for (;v106;) {
    var v926 = arrayOfPatterns$$3[j$$2];
    var v602 = v926.match(/\/.+\//);
    var v105 = v602 + "gi";
    var v1846 = eval(v105);
    geneticCodeMatchExp$$1[j$$2] = v1846;
    j$$2++;
    var v603 = arrayOfPatterns$$3.length;
    v106 = j$$2 < v603;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v107 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v107);
  var j$$3 = 0;
  var v604 = arrayOfPatterns$$4.length;
  var v110 = j$$3 < v604;
  for (;v110;) {
    var v605 = arrayOfPatterns$$4[j$$3];
    var v108 = v605.match(/=[a-zA-Z\*]/);
    var v1847 = v108.toString();
    geneticCodeMatchResult$$1[j$$3] = v1847;
    var v109 = geneticCodeMatchResult$$1[j$$3];
    var v1848 = v109.replace(/=/g, "");
    geneticCodeMatchResult$$1[j$$3] = v1848;
    j$$3++;
    var v606 = arrayOfPatterns$$4.length;
    v110 = j$$3 < v606;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v607 = sequence$$3.length;
  var v111 = "Results for " + v607;
  var stringToReturn$$2 = v111 + " residue sequence ";
  var v608 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v113 = v608 != -1;
  if (v113) {
    var v609 = stringToReturn$$2 + '"';
    var v112 = v609 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v112 + '"';
  }
  var v610 = stringToReturn$$2 + ' starting "';
  var v611 = sequence$$3.substring(0, 10);
  var v114 = v610 + v611;
  stringToReturn$$2 = v114 + '"';
  var v115 = '<div class="info">' + stringToReturn$$2;
  return v115 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v927 = "Results for " + topology;
  var v612 = v927 + " ";
  var v613 = sequence$$4.length;
  var v116 = v612 + v613;
  var stringToReturn$$3 = v116 + " residue sequence ";
  var v614 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v118 = v614 != -1;
  if (v118) {
    var v615 = stringToReturn$$3 + '"';
    var v117 = v615 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v117 + '"';
  }
  var v616 = stringToReturn$$3 + ' starting "';
  var v617 = sequence$$4.substring(0, 10);
  var v119 = v616 + v617;
  stringToReturn$$3 = v119 + '"';
  var v120 = '<div class="info">' + stringToReturn$$3;
  return v120 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v618 = sequenceOne$$1.length;
  var v121 = "Alignment results for " + v618;
  var stringToReturn$$4 = v121 + " residue sequence ";
  var v619 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v123 = v619 != -1;
  if (v123) {
    var v620 = stringToReturn$$4 + '"';
    var v122 = v620 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v122 + '"';
  }
  var v621 = stringToReturn$$4 + ' starting "';
  var v622 = sequenceOne$$1.substring(0, 10);
  var v124 = v621 + v622;
  stringToReturn$$4 = v124 + '"\n';
  var v623 = stringToReturn$$4 + "and ";
  var v624 = sequenceTwo$$1.length;
  var v125 = v623 + v624;
  stringToReturn$$4 = v125 + " residue sequence ";
  var v625 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v127 = v625 != -1;
  if (v127) {
    var v626 = stringToReturn$$4 + '"';
    var v126 = v626 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v126 + '"';
  }
  var v627 = stringToReturn$$4 + ' starting "';
  var v628 = sequenceTwo$$1.substring(0, 10);
  var v128 = v627 + v628;
  stringToReturn$$4 = v128 + '"';
  var v129 = '<div class="info">' + stringToReturn$$4;
  return v129 + "</div>\n";
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v131 = j$$4 < lengthOut;
  for (;v131;) {
    var v629 = Math.random();
    var v630 = components.length;
    var v130 = v629 * v630;
    tempNum = Math.floor(v130);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4++;
    v131 = j$$4 < lengthOut;
  }
  return sequenceArray.join("");
}
function getSequenceFromFasta(sequenceRecord) {
  var v631 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v132 = v631 != -1;
  if (v132) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "");
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v632 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v134 = v632 != -1;
  if (v134) {
    var v133 = sequenceRecord$$1.match(/\>[^\f\n\r]+[\f\n\r]/, "");
    fastaTitle = v133.toString();
    fastaTitle = fastaTitle.replace(/\>|[\f\n\r]/g, "");
    fastaTitle = fastaTitle.replace(/\s{2,}/g, " ");
    fastaTitle = fastaTitle.replace(/[\<\>]/gi, "");
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  var v1579 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v1552 = v1579 != -1;
  var v1581 = !v1552;
  if (v1581) {
    var v1580 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    v1552 = v1580 != -1;
  }
  var v1521 = v1552;
  var v1554 = !v1521;
  if (v1554) {
    var v1553 = expressionToCheck.search(/\[\]/);
    v1521 = v1553 != -1;
  }
  var v1488 = v1521;
  var v1523 = !v1488;
  if (v1523) {
    var v1522 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
    v1488 = v1522 != -1;
  }
  var v1441 = v1488;
  var v1490 = !v1441;
  if (v1490) {
    var v1489 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
    v1441 = v1489 != -1;
  }
  var v1378 = v1441;
  var v1443 = !v1378;
  if (v1443) {
    var v1442 = expressionToCheck.search(/\|\|/);
    v1378 = v1442 != -1;
  }
  var v1314 = v1378;
  var v1380 = !v1314;
  if (v1380) {
    var v1379 = expressionToCheck.search(/\/\|/);
    v1314 = v1379 != -1;
  }
  var v1224 = v1314;
  var v1316 = !v1224;
  if (v1316) {
    var v1315 = expressionToCheck.search(/\|\//);
    v1224 = v1315 != -1;
  }
  var v1097 = v1224;
  var v1226 = !v1097;
  if (v1226) {
    var v1225 = expressionToCheck.search(/\[.\]/);
    v1097 = v1225 != -1;
  }
  var v928 = v1097;
  var v1099 = !v928;
  if (v1099) {
    var v1098 = expressionToCheck.search(/\</);
    v928 = v1098 != -1;
  }
  var v633 = v928;
  var v930 = !v633;
  if (v930) {
    var v929 = expressionToCheck.search(/\>/);
    v633 = v929 != -1;
  }
  var v135 = v633;
  if (v135) {
    return false;
  }
  return true;
}
function openForm() {
  var v136 = outputWindow.document;
  v136.write('<form action="">\n');
  return true;
}
function openPre() {
  var v137 = outputWindow.document;
  v137.write("<pre>");
  var v138 = outputWindow.document;
  v138.write('<div class="pre">');
  return;
}
function openTextArea() {
  var v139 = outputWindow.document;
  v139.write('<br /><textarea rows="6" cols="61">\n');
  return true;
}
function openWindow(title$$5) {
  _openWindow(title$$5, true);
  return;
}
function _openWindow(title$$6, isColor) {
  outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  outputWindow.focus();
  var v140 = outputWindow.document;
  var v1100 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v931 = v1100 + "<head>\n";
  var v634 = v931 + "<title>Sequence Manipulation Suite</title>\n";
  var v141 = v634 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v140.write(v141);
  if (isColor) {
    var v142 = outputWindow.document;
    var v1654 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1630 = v1654 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1606 = v1630 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1582 = v1606 + "div.info {font-weight: bold}\n";
    var v1555 = v1582 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1524 = v1555 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v1491 = v1524 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v1444 = v1491 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1381 = v1444 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v1317 = v1381 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v1227 = v1317 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v1101 = v1227 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v932 = v1101 + "td.many {color: #000000}\n";
    var v635 = v932 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v143 = v635 + "</style>\n";
    v142.write(v143);
  } else {
    var v144 = outputWindow.document;
    var v1676 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1655 = v1676 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1631 = v1655 + "div.title {display: none}\n";
    var v1607 = v1631 + "div.info {font-weight: bold}\n";
    var v1583 = v1607 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1556 = v1583 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1525 = v1556 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v1492 = v1525 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1445 = v1492 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1382 = v1445 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1318 = v1382 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v1228 = v1318 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1102 = v1228 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v933 = v1102 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v636 = v933 + "img {display: none}\n";
    var v145 = v636 + "</style>\n";
    v144.write(v145);
  }
  var v146 = outputWindow.document;
  var v1103 = "</head>\n" + '<body class="main">\n';
  var v934 = v1103 + '<div class="title">';
  var v637 = v934 + title$$6;
  var v147 = v637 + " results</div>\n";
  v146.write(v147);
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
  var v148 = outputWindow.document;
  var v1104 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v935 = v1104 + "<head>\n";
  var v638 = v935 + "<title>Sequence Manipulation Suite</title>\n";
  var v149 = v638 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v148.write(v149);
  if (isBackground) {
    var v150 = outputWindow.document;
    var v1656 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1632 = v1656 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1608 = v1632 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1584 = v1608 + "div.info {font-weight: bold}\n";
    var v1557 = v1584 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v1526 = v1557 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v1493 = v1526 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v1446 = v1493 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v1383 = v1446 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v1319 = v1383 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v1229 = v1319 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v1105 = v1229 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v936 = v1105 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v639 = v936 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v151 = v639 + "</style>\n";
    v150.write(v151);
  } else {
    var v152 = outputWindow.document;
    var v1696 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1677 = v1696 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1657 = v1677 + "div.title {display: none}\n";
    var v1633 = v1657 + "div.info {font-weight: bold}\n";
    var v1609 = v1633 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1585 = v1609 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v1558 = v1585 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v1527 = v1558 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v1494 = v1527 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v1447 = v1494 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v1384 = v1447 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v1320 = v1384 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v1230 = v1320 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v1106 = v1230 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v937 = v1106 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v640 = v937 + "img {display: none}\n";
    var v153 = v640 + "</style>\n";
    v152.write(v153);
  }
  var v154 = outputWindow.document;
  var v1107 = "</head>\n" + '<body class="main">\n';
  var v938 = v1107 + '<div class="title">';
  var v641 = v938 + title$$8;
  var v155 = v641 + " results</div>\n";
  v154.write(v155);
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
  var v642 = dnaSequence$$1.search(/./);
  var v156 = v642 != -1;
  if (v156) {
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
  var v157 = j$$5 < lengthOfColumn;
  for (;v157;) {
    tempString = tempString + " ";
    j$$5++;
    v157 = j$$5 < lengthOfColumn;
  }
  var v158 = tempString + theNumber;
  theNumber = v158 + " ";
  var v159 = sequenceToAppend + theNumber;
  sequenceToAppend = v159 + tabIn;
  return sequenceToAppend;
}
function testScript() {
  function v1(str$$7, p1$$1, offset$$9, s$$3) {
    return p1$$1 + "X";
  }
  var testArray = new Array;
  var testString = "1234567890";
  testArray.push(testString);
  var v643 = testArray[0];
  var v160 = v643 != testString;
  if (v160) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v644 = testString.search(re$$2);
  var v161 = v644 == -1;
  if (v161) {
    alert("Regular expression 'm' flag not supported. See browser compatibility page.");
    return false;
  }
  var caughtException = false;
  try {
    re$$2 = eval("Exception handling not supported. Check browser compatibility page.");
  } catch (e$$4) {
    caughtException = true;
  }
  var v162 = !caughtException;
  if (v162) {
    alert("Exception handling not supported. See browser compatibility page.");
  }
  testString = "123";
  testString = testString.replace(/(\d)/g, v1);
  var v163 = testString != "1X2X3X";
  if (v163) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false;
  }
  var testNum = 2489.8237;
  var v645 = testNum.toFixed(3);
  var v164 = v645 != 2489.824;
  if (v164) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v646 = testNum.toPrecision(5);
  var v165 = v646 != 2489.8;
  if (v165) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v647 = theNumber$$1.search(/\d/);
  var v166 = v647 == -1;
  if (v166) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v1231 = emblFile.search(/ID/);
  var v1108 = v1231 == -1;
  var v1233 = !v1108;
  if (v1233) {
    var v1232 = emblFile.search(/AC/);
    v1108 = v1232 == -1;
  }
  var v939 = v1108;
  var v1110 = !v939;
  if (v1110) {
    var v1109 = emblFile.search(/DE/);
    v939 = v1109 == -1;
  }
  var v648 = v939;
  var v941 = !v648;
  if (v941) {
    var v940 = emblFile.search(/SQ/);
    v648 = v940 == -1;
  }
  var v167 = v648;
  if (v167) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v649 = theNumber$$2.search(/\d/);
  var v168 = v649 == -1;
  if (v168) {
    alert("Please enter a number.");
    return false;
  }
  var v170 = theNumber$$2 > maxInput$$2;
  if (v170) {
    var v650 = "Please enter a number less than or equal to " + maxInput$$2;
    var v169 = v650 + ".";
    alert(v169);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v651 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v171 = v651 != -1;
  if (v171) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v652 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v172 = v652 != -1;
  if (v172) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v1234 = genBankFile.search(/LOCUS/);
  var v1111 = v1234 == -1;
  var v1236 = !v1111;
  if (v1236) {
    var v1235 = genBankFile.search(/DEFINITION/);
    v1111 = v1235 == -1;
  }
  var v942 = v1111;
  var v1113 = !v942;
  if (v1113) {
    var v1112 = genBankFile.search(/ACCESSION/);
    v942 = v1112 == -1;
  }
  var v653 = v942;
  var v944 = !v653;
  if (v944) {
    var v943 = genBankFile.search(/ORIGIN/);
    v653 = v943 == -1;
  }
  var v173 = v653;
  if (v173) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v1237 = genBankFile$$1.search(/LOCUS/);
  var v1114 = v1237 == -1;
  var v1239 = !v1114;
  if (v1239) {
    var v1238 = genBankFile$$1.search(/DEFINITION/);
    v1114 = v1238 == -1;
  }
  var v945 = v1114;
  var v1116 = !v945;
  if (v1116) {
    var v1115 = genBankFile$$1.search(/ACCESSION/);
    v945 = v1115 == -1;
  }
  var v654 = v945;
  var v947 = !v654;
  if (v947) {
    var v946 = genBankFile$$1.search(/ORIGIN/);
    v654 = v946 == -1;
  }
  var v174 = v654;
  if (v174) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v655 = genBankFile$$1.search(/FEATURES {13}/);
  var v175 = v655 == -1;
  if (v175) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v1240 = emblFile$$1.search(/ID/);
  var v1117 = v1240 == -1;
  var v1242 = !v1117;
  if (v1242) {
    var v1241 = emblFile$$1.search(/AC/);
    v1117 = v1241 == -1;
  }
  var v948 = v1117;
  var v1119 = !v948;
  if (v1119) {
    var v1118 = emblFile$$1.search(/DE/);
    v948 = v1118 == -1;
  }
  var v656 = v948;
  var v950 = !v656;
  if (v950) {
    var v949 = emblFile$$1.search(/SQ/);
    v656 = v949 == -1;
  }
  var v176 = v656;
  if (v176) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v657 = emblFile$$1.search(/^FT/m);
  var v177 = v657 == -1;
  if (v177) {
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
  var v184 = i$$5 < stopBase;
  for (;v184;) {
    var v178 = i$$5 + 1;
    lineOfText = rightNum(v178, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v658 = basePerLine / groupSize;
    var v181 = j$$6 <= v658;
    for (;v181;) {
      var v180 = k < groupSize;
      for (;v180;) {
        var v659 = k + i$$5;
        var v179 = text$$10.charAt(v659);
        lineOfText = lineOfText + v179;
        k = k + 1;
        v180 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v660 = basePerLine / groupSize;
      v181 = j$$6 <= v660;
    }
    var v182 = outputWindow.document;
    var v183 = lineOfText + "\n";
    v182.write(v183);
    lineOfText = "";
    v184 = i$$5 < stopBase;
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
    var v661 = adjustment < 0;
    if (v661) {
      v661 = adjusted >= 0;
    }
    var v185 = v661;
    if (v185) {
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
  var v216 = i$$6 < stopBase$$2;
  for (;v216;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v662 = basePerLine$$2 / groupSize$$2;
    var v192 = j$$7 <= v662;
    for (;v192;) {
      var v188 = k$$1 < groupSize$$2;
      for (;v188;) {
        var v663 = i$$6 + k$$1;
        var v186 = v663 >= stopBase$$2;
        if (v186) {
          break;
        }
        var v664 = k$$1 + i$$6;
        var v187 = text$$12.charAt(v664);
        lineOfText$$1 = lineOfText$$1 + v187;
        k$$1 = k$$1 + 1;
        v188 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v190 = numberPosition$$1 == "above";
      if (v190) {
        var v665 = adjustNumbering(i$$6, numberingAdjustment);
        var v189 = rightNum(v665, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v189;
      }
      var v191 = i$$6 >= stopBase$$2;
      if (v191) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v666 = basePerLine$$2 / groupSize$$2;
      v192 = j$$7 <= v666;
    }
    var v215 = numberPosition$$1 == "left";
    if (v215) {
      var v193 = outputWindow.document;
      var v1120 = adjustNumbering(lineNum, numberingAdjustment);
      var v951 = rightNum(v1120, "", 8, tabIn$$3);
      var v667 = v951 + lineOfText$$1;
      var v194 = v667 + "\n";
      v193.write(v194);
      var v198 = strands$$1 == "two";
      if (v198) {
        var v195 = outputWindow.document;
        var v1121 = adjustNumbering(lineNum, numberingAdjustment);
        var v952 = rightNum(v1121, "", 8, tabIn$$3);
        var v953 = complement(lineOfText$$1);
        var v668 = v952 + v953;
        var v196 = v668 + "\n";
        v195.write(v196);
        var v197 = outputWindow.document;
        v197.write("\n");
      }
    } else {
      var v214 = numberPosition$$1 == "right";
      if (v214) {
        var v199 = outputWindow.document;
        var v954 = adjustNumbering(i$$6, numberingAdjustment);
        var v669 = lineOfText$$1 + v954;
        var v200 = v669 + "\n";
        v199.write(v200);
        var v204 = strands$$1 == "two";
        if (v204) {
          var v201 = outputWindow.document;
          var v955 = complement(lineOfText$$1);
          var v956 = adjustNumbering(i$$6, numberingAdjustment);
          var v670 = v955 + v956;
          var v202 = v670 + "\n";
          v201.write(v202);
          var v203 = outputWindow.document;
          v203.write("\n");
        }
      } else {
        var v213 = numberPosition$$1 == "above";
        if (v213) {
          var v205 = outputWindow.document;
          var v206 = aboveNum + "\n";
          v205.write(v206);
          var v207 = outputWindow.document;
          var v208 = lineOfText$$1 + "\n";
          v207.write(v208);
          var v212 = strands$$1 == "two";
          if (v212) {
            var v209 = outputWindow.document;
            var v671 = complement(lineOfText$$1);
            var v210 = v671 + "\n";
            v209.write(v210);
            var v211 = outputWindow.document;
            v211.write("\n");
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v216 = i$$6 < stopBase$$2;
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
  var v235 = i$$7 < stopBase$$3;
  for (;v235;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v672 = basePerLine$$3 / groupSize$$3;
    var v223 = j$$8 <= v672;
    for (;v223;) {
      var v219 = k$$2 < groupSize$$3;
      for (;v219;) {
        var v673 = i$$7 + k$$2;
        var v217 = v673 >= stopBase$$3;
        if (v217) {
          break;
        }
        var v674 = k$$2 + i$$7;
        var v218 = text$$13.charAt(v674);
        lineOfText$$2 = lineOfText$$2 + v218;
        k$$2 = k$$2 + 1;
        v219 = k$$2 < groupSize$$3;
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v221 = numberPosition$$2 == "above";
      if (v221) {
        var v220 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = aboveNum$$1 + v220;
      }
      var v222 = i$$7 >= stopBase$$3;
      if (v222) {
        break;
      }
      k$$2 = 0;
      j$$8++;
      var v675 = basePerLine$$3 / groupSize$$3;
      v223 = j$$8 <= v675;
    }
    var v234 = numberPosition$$2 == "left";
    if (v234) {
      var v224 = outputWindow.document;
      var v957 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v676 = v957 + lineOfText$$2;
      var v225 = v676 + "\n";
      v224.write(v225);
    } else {
      var v233 = numberPosition$$2 == "right";
      if (v233) {
        var v226 = outputWindow.document;
        var v677 = lineOfText$$2 + i$$7;
        var v227 = v677 + "\n";
        v226.write(v227);
      } else {
        var v232 = numberPosition$$2 == "above";
        if (v232) {
          var v228 = outputWindow.document;
          var v229 = aboveNum$$1 + "\n";
          v228.write(v229);
          var v230 = outputWindow.document;
          var v231 = lineOfText$$2 + "\n";
          v230.write(v231);
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v235 = i$$7 < stopBase$$3;
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
  var v1122 = sequence$$13.length;
  var v958 = v1122 <= firstIndexToMutate;
  var v1123 = !v958;
  if (v1123) {
    v958 = lastIndexToMutate < 0;
  }
  var v678 = v958;
  var v959 = !v678;
  if (v959) {
    v678 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v236 = v678;
  if (v236) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v244 = i$$8 < numMut;
  for (;v244;) {
    maxNum = sequence$$13.length;
    var v679 = Math.random();
    var v237 = v679 * maxNum;
    randNum = Math.floor(v237);
    var v680 = randNum < firstIndexToMutate;
    var v960 = !v680;
    if (v960) {
      v680 = randNum > lastIndexToMutate;
    }
    var v238 = v680;
    if (v238) {
      numMut++;
      i$$8++;
      v244 = i$$8 < numMut;
      continue;
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for (;needNewChar;) {
      var v681 = Math.random();
      var v682 = components$$1.length;
      var v239 = v681 * v682;
      componentsIndex = Math.round(v239);
      var v683 = components$$1.length;
      var v240 = componentsIndex == v683;
      if (v240) {
        componentsIndex = 0;
      }
      var v684 = components$$1[componentsIndex];
      var v241 = v684 != currentChar;
      if (v241) {
        needNewChar = false;
      }
    }
    var v685 = sequence$$13.substring(0, randNum);
    var v686 = components$$1[componentsIndex];
    var v242 = v685 + v686;
    var v687 = randNum + 1;
    var v688 = sequence$$13.length;
    var v243 = sequence$$13.substring(v687, v688);
    sequence$$13 = v242 + v243;
    i$$8++;
    v244 = i$$8 < numMut;
  }
  var v245 = outputWindow.document;
  var v246 = addReturns(sequence$$13);
  v245.write(v246);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v251 = j$$9 < lengthOut$$1;
  for (;v251;) {
    var v689 = Math.random();
    var v690 = components$$2.length;
    var v247 = v689 * v690;
    tempNum$$1 = Math.floor(v247);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v691 = sequence$$14.length;
    var v250 = v691 == 60;
    if (v250) {
      var v248 = outputWindow.document;
      var v249 = sequence$$14 + "\n";
      v248.write(v249);
      sequence$$14 = "";
    }
    j$$9++;
    v251 = j$$9 < lengthOut$$1;
  }
  var v252 = outputWindow.document;
  var v253 = sequence$$14 + "\n";
  v252.write(v253);
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
  var v257 = dnaConformation == "circular";
  if (v257) {
    var v254 = sequence$$15.substring(0, lookAhead);
    shiftValue = v254.length;
    var v1124 = sequence$$15.length;
    var v961 = v1124 - lookAhead;
    var v962 = sequence$$15.length;
    var v692 = sequence$$15.substring(v961, v962);
    var v255 = v692 + sequence$$15;
    var v256 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v255 + v256;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v258 = outputWindow.document;
  v258.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  var v259 = outputWindow.document;
  var v1125 = '<tr><td class="title" width="200px">' + "Site:";
  var v963 = v1125 + '</td><td class="title">';
  var v693 = v963 + "Positions:";
  var v260 = v693 + "</td></tr>\n";
  v259.write(v260);
  var i$$9 = 0;
  var v694 = arrayOfItems.length;
  var v276 = i$$9 < v694;
  for (;v276;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v695 = arrayOfItems[i$$9];
    var v261 = v695.match(/\/.+\//);
    matchExp = v261 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    var v1126 = arrayOfItems[i$$9];
    var v964 = v1126.match(/\)\D*\d+/);
    var v696 = v964.toString();
    var v262 = v696.replace(/\)\D*/, "");
    cutDistance = parseFloat(v262);
    var v268 = matchArray$$1 = matchExp.exec(sequence$$15);
    for (;v268;) {
      var v263 = matchExp.lastIndex;
      matchPosition = v263 - cutDistance;
      var v697 = matchPosition >= lowerLimit;
      if (v697) {
        v697 = matchPosition < upperLimit;
      }
      var v266 = v697;
      if (v266) {
        timesFound++;
        var v264 = tempString$$1 + ", ";
        var v698 = matchPosition - shiftValue;
        var v265 = v698 + 1;
        tempString$$1 = v264 + v265;
      }
      var v699 = matchExp.lastIndex;
      var v965 = RegExp.lastMatch;
      var v700 = v965.length;
      var v267 = v699 - v700;
      matchExp.lastIndex = v267 + 1;
      v268 = matchArray$$1 = matchExp.exec(sequence$$15);
    }
    var v701 = tempString$$1.search(/\d/);
    var v269 = v701 != -1;
    if (v269) {
      tempString$$1 = tempString$$1.replace(/none,\s*/, "");
    }
    var v273 = timesFound == 0;
    if (v273) {
      backGroundClass = "none";
    } else {
      var v272 = timesFound == 1;
      if (v272) {
        backGroundClass = "one";
      } else {
        var v271 = timesFound == 2;
        if (v271) {
          backGroundClass = "two";
        } else {
          var v270 = timesFound == 3;
          if (v270) {
            backGroundClass = "three";
          } else {
            backGroundClass = "many";
          }
        }
      }
    }
    var v274 = outputWindow.document;
    var v1448 = '<tr><td class="' + backGroundClass;
    var v1385 = v1448 + '">';
    var v1528 = arrayOfItems[i$$9];
    var v1495 = v1528.match(/\([^\(]+\)/);
    var v1449 = v1495.toString();
    var v1386 = v1449.replace(/\(|\)/g, "");
    var v1321 = v1385 + v1386;
    var v1243 = v1321 + '</td><td class="';
    var v1127 = v1243 + backGroundClass;
    var v966 = v1127 + '">';
    var v702 = v966 + tempString$$1;
    var v275 = v702 + "</td></tr>\n";
    v274.write(v275);
    timesFound = 0;
    i$$9++;
    var v703 = arrayOfItems.length;
    v276 = i$$9 < v703;
  }
  var v277 = outputWindow.document;
  v277.write("</tbody></table>\n");
  return;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v278 = outputWindow.document;
  v278.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  var v279 = outputWindow.document;
  var v1322 = '<tr><td class="title">' + "Pattern:";
  var v1244 = v1322 + '</td><td class="title">';
  var v1128 = v1244 + "Times found:";
  var v967 = v1128 + '</td><td class="title">';
  var v704 = v967 + "Percentage:";
  var v280 = v704 + "</td></tr>\n";
  v279.write(v280);
  var i$$10 = 0;
  var v705 = arrayOfItems$$1.length;
  var v289 = i$$10 < v705;
  for (;v289;) {
    var tempNumber = 0;
    var v706 = arrayOfItems$$1[i$$10];
    var v281 = v706.match(/\/[^\/]+\//);
    var matchExp$$1 = v281 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    var v707 = sequence$$16.search(matchExp$$1);
    var v283 = v707 != -1;
    if (v283) {
      var v282 = sequence$$16.match(matchExp$$1);
      tempNumber = v282.length;
    }
    var percentage = 0;
    var v968 = originalLength + 1;
    var v1245 = arrayOfItems$$1[i$$10];
    var v1129 = v1245.match(/\d+/);
    var v969 = parseFloat(v1129);
    var v708 = v968 - v969;
    var v286 = v708 > 0;
    if (v286) {
      var v284 = 100 * tempNumber;
      var v709 = originalLength + 1;
      var v1130 = arrayOfItems$$1[i$$10];
      var v970 = v1130.match(/\d+/);
      var v710 = parseFloat(v970);
      var v285 = v709 - v710;
      percentage = v284 / v285;
    }
    var v287 = outputWindow.document;
    var v1529 = arrayOfItems$$1[i$$10];
    var v1496 = v1529.match(/\([^\(]+\)\b/);
    var v1450 = v1496.toString();
    var v1387 = v1450.replace(/\(|\)/g, "");
    var v1323 = "<tr><td>" + v1387;
    var v1246 = v1323 + "</td><td>";
    var v1131 = v1246 + tempNumber;
    var v971 = v1131 + "</td><td>";
    var v972 = percentage.toFixed(2);
    var v711 = v971 + v972;
    var v288 = v711 + "</td></tr>\n";
    v287.write(v288);
    i$$10++;
    var v712 = arrayOfItems$$1.length;
    v289 = i$$10 < v712;
  }
  var v290 = outputWindow.document;
  v290.write("</tbody></table>\n");
  return true;
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v713 = sequence$$17.length;
  var v297 = v713 > 0;
  for (;v297;) {
    maxNum$$1 = sequence$$17.length;
    var v714 = Math.random();
    var v291 = v714 * maxNum$$1;
    randNum$$1 = Math.floor(v291);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v292 = randNum$$1 + 1;
    var v293 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v292, v293);
    sequence$$17 = tempString1 + tempString2;
    var v715 = tempSeq.length;
    var v296 = v715 == 60;
    if (v296) {
      var v294 = outputWindow.document;
      var v295 = tempSeq + "\n";
      v294.write(v295);
      tempSeq = "";
    }
    var v716 = sequence$$17.length;
    v297 = v716 > 0;
  }
  var v298 = outputWindow.document;
  var v299 = tempSeq + "\n";
  v298.write(v299);
  return true;
}
function getRestrictionSiteString() {
  var type$$25 = "standard";
  var v717 = type$$25.toLowerCase();
  var v301 = v717 == "standard";
  if (v301) {
    var v1842 = "/aggcct/ (AatI agg|cct)3," + "/gacgtc/ (AatII gacgt|c)1,";
    var v1841 = v1842 + "/tgcgca/ (Acc16I tgc|gca)3,";
    var v1840 = v1841 + "/cgcg/ (AccII cg|cg)2,";
    var v1839 = v1840 + "/tccgga/ (AccIII t|ccgga)5,";
    var v1838 = v1839 + "/aacgtt/ (AclI aa|cgtt)4,";
    var v1837 = v1838 + "/cacgtg/ (AcvI cac|gtg)3,";
    var v1836 = v1837 + "/gtac/ (AfaI gt|ac)2,";
    var v1835 = v1836 + "/agcgct/ (AfeI agc|gct)3,";
    var v1834 = v1835 + "/cttaag/ (AflII c|ttaag)5,";
    var v1833 = v1834 + "/accggt/ (AgeI a|ccggt)5,";
    var v1832 = v1833 + "/actagt/ (AhlI a|ctagt)5,";
    var v1831 = v1832 + "/gtgcac/ (Alw441 g|tgcac)5,";
    var v1830 = v1831 + "/agct/ (AluI ag|ct)2,";
    var v1829 = v1830 + "/agcgct/ (Aor51HI agc|gct)3,";
    var v1828 = v1829 + "/gggccc/ (ApaI gggcc|c)1,";
    var v1827 = v1828 + "/gtgcac/ (ApaLI g|tgcac)5,";
    var v1826 = v1827 + "/ggcgcgcc/ (AscI gg|cgcgcc)6,";
    var v1825 = v1826 + "/attaat/ (AseI at|taat)4,";
    var v1824 = v1825 + "/ggtacc/ (Asp718I g|gtacc)5,";
    var v1823 = v1824 + "/ttcgaa/ (AsuII tt|cgaa)4,";
    var v1822 = v1823 + "/c[cty]cg[agr]g/ (AvaI c|ycgrg)5,";
    var v1821 = v1822 + "/tgcgca/ (AviII tgc|gca)3,";
    var v1820 = v1821 + "/cctagg/ (AvrII c|ctagg)5,";
    var v1819 = v1820 + "/tggcca/ (BalI tgg|cca)3,";
    var v1818 = v1819 + "/ggatcc/ (BamHI g|gatcc)5,";
    var v1817 = v1818 + "/atcgat/ (BanIII at|cgat)4,";
    var v1816 = v1817 + "/ggcgcc/ (BbeI ggcgc|c)1,";
    var v1815 = v1816 + "/cacgtg/ (BbrPI cac|gtg)3,";
    var v1814 = v1815 + "/gcatgc/ (BbuI gcatg|c)1,";
    var v1813 = v1814 + "/actagt/ (BcuI a|ctagt)5,";
    var v1812 = v1813 + "/tgatca/ (BclI t|gatca)5,";
    var v1811 = v1812 + "/ctag/ (BfaI c|tag)3,";
    var v1810 = v1811 + "/cttaag/ (BfrI c|ttaag)5,";
    var v1809 = v1810 + "/atgcat/ (BfrBI atg|cat)3,";
    var v1808 = v1809 + "/agatct/ (BglII a|gatct)5,";
    var v1807 = v1808 + "/cctagg/ (BlnI c|ctagg)5,";
    var v1806 = v1807 + "/atcgat/ (BseCI at|cgat)4,";
    var v1805 = v1806 + "/gcgcgc/ (BsePI g|cgcgc)5,";
    var v1804 = v1805 + "/cggccg/ (BseX3I c|ggccg)5,";
    var v1803 = v1804 + "/accggt/ (BshTI a|ccggt)5,";
    var v1802 = v1803 + "/tgtaca/ (Bsp1407I t|gtaca)5,";
    var v1801 = v1802 + "/ccatgg/ (Bsp19I c|catgg)5,";
    var v1800 = v1801 + "/atcgat/ (BspDI at|cgat)4,";
    var v1799 = v1800 + "/tccgga/ (BspEI t|ccgga)5,";
    var v1798 = v1799 + "/tgtaca/ (BsrGI t|gtaca)5,";
    var v1797 = v1798 + "/gcgcgc/ (BssHII g|cgcgc)5,";
    var v1796 = v1797 + "/cgcg/ (BstUI cg|cg)2,";
    var v1795 = v1796 + "/atcgat/ (ClaI at|cgat)4,";
    var v1794 = v1795 + "/gatc/ (DpnII |gatc)4,";
    var v1793 = v1794 + "/tttaaa/ (DraI ttt|aaa)3,";
    var v1792 = v1793 + "/cggccg/ (EagI c|ggccg)5,";
    var v1791 = v1792 + "/gaattc/ (EcoRI g|aattc)5,";
    var v1790 = v1791 + "/gatatc/ (EcoRV gat|atc)3,";
    var v1789 = v1790 + "/ggcgcc/ (EgeI ggc|gcc)3,";
    var v1788 = v1789 + "/ggccggcc/ (FseI ggccgg|cc)2,";
    var v1787 = v1788 + "/tgcgca/ (FspI tgc|gca)3,";
    var v1786 = v1787 + "/ggcc/ (HaeIII gg|cc)2,";
    var v1785 = v1786 + "/gt[cty][agr]ac/ (HincII gty|rac)3,";
    var v1784 = v1785 + "/aagctt/ (HindIII a|agctt)5,";
    var v1783 = v1784 + "/ga[acgturyswkmbdhvn]tc/ (HinfI g|antc)4,";
    var v1782 = v1783 + "/gttaac/ (HpaI gtt|aac)3,";
    var v1781 = v1782 + "/ccgg/ (HpaII c|cgg)3,";
    var v1780 = v1781 + "/ggcgcc/ (KasI g|gcgcc)5,";
    var v1779 = v1780 + "/ggtacc/ (KpnI ggtac|c)1,";
    var v1778 = v1779 + "/[acgturyswkmbdhvn]gatc[acgturyswkmbdhvn]/ (MboI |gatc)5,";
    var v1777 = v1778 + "/caattg/ (MfeI c|aattg)5,";
    var v1776 = v1777 + "/acgcgt/ (MluI a|cgcgt)5,";
    var v1775 = v1776 + "/tggcca/ (MscI tgg|cca)3,";
    var v1774 = v1775 + "/ttaa/ (MseI t|taa)3,";
    var v1773 = v1774 + "/ccgg/ (MspI c|cgg)3,";
    var v1772 = v1773 + "/gccggc/ (NaeI gcc|ggc)3,";
    var v1771 = v1772 + "/ggcgcc/ (NarI gg|cgcc)4,";
    var v1770 = v1771 + "/ccatgg/ (NcoI c|catgg)5,";
    var v1769 = v1770 + "/catatg/ (NdeI ca|tatg)4,";
    var v1768 = v1769 + "/gatc/ (NdeII |gatc)4,";
    var v1767 = v1768 + "/gccggc/ (NgoMIV g|ccggc)5,";
    var v1766 = v1767 + "/gctagc/ (NheI g|ctagc)5,";
    var v1765 = v1766 + "/catg/ (NlaIII catg|)0,";
    var v1764 = v1765 + "/gcggccgc/ (NotI gc|ggccgc)6,";
    var v1763 = v1764 + "/tcgcga/ (NruI tcg|cga)3,";
    var v1762 = v1763 + "/atgcat/ (NsiI atgca|t)1,";
    var v1761 = v1762 + "/ttaattaa/ (PacI ttaat|taa)3,";
    var v1760 = v1761 + "/acatgt/ (PciI a|catgt)5,";
    var v1759 = v1760 + "/ggcc/ (PhoI gg|cc)2,";
    var v1758 = v1759 + "/gtttaaac/ (PmeI gttt|aaac)4,";
    var v1757 = v1758 + "/cacgtg/ (PmlI cac|gtg)3,";
    var v1756 = v1757 + "/ttataa/ (PsiI tta|taa)3,";
    var v1755 = v1756 + "/ctgcag/ (PstI ctgca|g)1,";
    var v1754 = v1755 + "/cgatcg/ (PvuI cgat|cg)2,";
    var v1753 = v1754 + "/cagctg/ (PvuII cag|ctg)3,";
    var v1752 = v1753 + "/gtac/ (RsaI gt|ac)2,";
    var v1751 = v1752 + "/gagctc/ (SacI gagct|c)1,";
    var v1733 = v1751 + "/ccgcgg/ (SacII ccgc|gg)2,";
    var v1715 = v1733 + "/gtcgac/ (SalI g|tcgac)5,";
    var v1697 = v1715 + "/cctgcagg/ (SbfI cctgca|gg)2,";
    var v1678 = v1697 + "/agtact/ (ScaI agt|act)3,";
    var v1658 = v1678 + "/ggcgcc/ (SfoI ggc|gcc)3,";
    var v1634 = v1658 + "/cccggg/ (SmaI ccc|ggg)3,";
    var v1610 = v1634 + "/tacgta/ (SnaBI tac|gta)3,";
    var v1586 = v1610 + "/actagt/ (SpeI a|ctagt)5,";
    var v1559 = v1586 + "/gcatgc/ (SphI gcatg|c)1,";
    var v1530 = v1559 + "/aatatt/ (SspI aat|att)3,";
    var v1497 = v1530 + "/gagctc/ (SstI gagct|c)1,";
    var v1451 = v1497 + "/ccgcgg/ (SstII ccgc|gg)2,";
    var v1388 = v1451 + "/aggcct/ (StuI agg|cct)3,";
    var v1324 = v1388 + "/atttaaat/ (SwaI attt|aaat)4,";
    var v1247 = v1324 + "/tcga/ (TaqI t|cga)3,";
    var v1132 = v1247 + "/ctcgag/ (TliI c|tcgag)5,";
    var v973 = v1132 + "/attaat/ (VspI at|taat)4,";
    var v718 = v973 + "/tctaga/ (XbaI t|ctaga)5,";
    var v300 = v718 + "/ctcgag/ (XhoI c|tcgag)5,";
    return v300 + "/cccggg/ (XmaI c|ccggg)5";
  }
  return true;
}
function getGeneticCodeString(type$$26) {
  var v974 = type$$26.toLowerCase();
  var v719 = v974 == "standard";
  var v976 = !v719;
  if (v976) {
    var v975 = type$$26.toLowerCase();
    v719 = v975 == "transl_table=1";
  }
  var v303 = v719;
  if (v303) {
    var v1734 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1716 = v1734 + "/ga[tcuy]/=D,";
    var v1698 = v1716 + "/ga[agr]/=E,";
    var v1679 = v1698 + "/[tu][tu][tcuy]/=F,";
    var v1659 = v1679 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1635 = v1659 + "/ca[tcuy]/=H,";
    var v1611 = v1635 + "/a[tu][atcuwmhy]/=I,";
    var v1587 = v1611 + "/aa[agr]/=K,";
    var v1560 = v1587 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1531 = v1560 + "/a[tu]g/=M,";
    var v1498 = v1531 + "/aa[tucy]/=N,";
    var v1452 = v1498 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1389 = v1452 + "/ca[agr]/=Q,";
    var v1325 = v1389 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1248 = v1325 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1133 = v1248 + "/ac[acgturyswkmbdhvn]/=T,";
    var v977 = v1133 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v720 = v977 + "/[tu]gg/=W,";
    var v302 = v720 + "/[tu]a[ctuy]/=Y,";
    return v302 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*";
  }
  var v721 = type$$26.toLowerCase();
  var v305 = v721 == "transl_table=2";
  if (v305) {
    var v1735 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1717 = v1735 + "/ga[tcuy]/=D,";
    var v1699 = v1717 + "/ga[agr]/=E,";
    var v1680 = v1699 + "/[tu][tu][tcuy]/=F,";
    var v1660 = v1680 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1636 = v1660 + "/ca[tcuy]/=H,";
    var v1612 = v1636 + "/a[tu][tcuy]/=I,";
    var v1588 = v1612 + "/aa[agr]/=K,";
    var v1561 = v1588 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1532 = v1561 + "/a[tu][agr]/=M,";
    var v1499 = v1532 + "/aa[tucy]/=N,";
    var v1453 = v1499 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1390 = v1453 + "/ca[agr]/=Q,";
    var v1326 = v1390 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1249 = v1326 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1134 = v1249 + "/ac[acgturyswkmbdhvn]/=T,";
    var v978 = v1134 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v722 = v978 + "/[tu]g[agr]/=W,";
    var v304 = v722 + "/[tu]a[ctuy]/=Y,";
    return v304 + "/[tu]a[agr]|ag[agr]/=*";
  }
  var v723 = type$$26.toLowerCase();
  var v307 = v723 == "transl_table=3";
  if (v307) {
    var v1736 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1718 = v1736 + "/ga[tcuy]/=D,";
    var v1700 = v1718 + "/ga[agr]/=E,";
    var v1681 = v1700 + "/[tu][tu][tcuy]/=F,";
    var v1661 = v1681 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1637 = v1661 + "/ca[tcuy]/=H,";
    var v1613 = v1637 + "/a[tu][tcuy]/=I,";
    var v1589 = v1613 + "/aa[agr]/=K,";
    var v1562 = v1589 + "/[tu][tu][agr]/=L,";
    var v1533 = v1562 + "/a[tu][agr]/=M,";
    var v1500 = v1533 + "/aa[tucy]/=N,";
    var v1454 = v1500 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1391 = v1454 + "/ca[agr]/=Q,";
    var v1327 = v1391 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1250 = v1327 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1135 = v1250 + "/ac[acgturyswkmbdhvn]|c[tu][acgturyswkmbdhvn]/=T,";
    var v979 = v1135 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v724 = v979 + "/[tu]g[agr]/=W,";
    var v306 = v724 + "/[tu]a[ctuy]/=Y,";
    return v306 + "/[tu]a[agr]/=*";
  }
  var v725 = type$$26.toLowerCase();
  var v309 = v725 == "transl_table=4";
  if (v309) {
    var v1737 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1719 = v1737 + "/ga[tcuy]/=D,";
    var v1701 = v1719 + "/ga[agr]/=E,";
    var v1682 = v1701 + "/[tu][tu][tcuy]/=F,";
    var v1662 = v1682 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1638 = v1662 + "/ca[tcuy]/=H,";
    var v1614 = v1638 + "/a[tu][atcuwmhy]/=I,";
    var v1590 = v1614 + "/aa[agr]/=K,";
    var v1563 = v1590 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1534 = v1563 + "/a[tu]g/=M,";
    var v1501 = v1534 + "/aa[tucy]/=N,";
    var v1455 = v1501 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1392 = v1455 + "/ca[agr]/=Q,";
    var v1328 = v1392 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1251 = v1328 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1136 = v1251 + "/ac[acgturyswkmbdhvn]/=T,";
    var v980 = v1136 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v726 = v980 + "/[tu]g[agr]/=W,";
    var v308 = v726 + "/[tu]a[ctuy]/=Y,";
    return v308 + "/[tu]a[agr]/=*";
  }
  var v727 = type$$26.toLowerCase();
  var v311 = v727 == "transl_table=5";
  if (v311) {
    var v1738 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1720 = v1738 + "/ga[tcuy]/=D,";
    var v1702 = v1720 + "/ga[agr]/=E,";
    var v1683 = v1702 + "/[tu][tu][tcuy]/=F,";
    var v1663 = v1683 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1639 = v1663 + "/ca[tcuy]/=H,";
    var v1615 = v1639 + "/a[tu][tcuy]/=I,";
    var v1591 = v1615 + "/aa[agr]/=K,";
    var v1564 = v1591 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1535 = v1564 + "/a[tu][agr]/=M,";
    var v1502 = v1535 + "/aa[tucy]/=N,";
    var v1456 = v1502 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1393 = v1456 + "/ca[agr]/=Q,";
    var v1329 = v1393 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1252 = v1329 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v1137 = v1252 + "/ac[acgturyswkmbdhvn]/=T,";
    var v981 = v1137 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v728 = v981 + "/[tu]g[agr]/=W,";
    var v310 = v728 + "/[tu]a[ctuy]/=Y,";
    return v310 + "/[tu]a[agr]/=*";
  }
  var v729 = type$$26.toLowerCase();
  var v313 = v729 == "transl_table=6";
  if (v313) {
    var v1739 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1721 = v1739 + "/ga[tcuy]/=D,";
    var v1703 = v1721 + "/ga[agr]/=E,";
    var v1684 = v1703 + "/[tu][tu][tcuy]/=F,";
    var v1664 = v1684 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1640 = v1664 + "/ca[tcuy]/=H,";
    var v1616 = v1640 + "/a[tu][atcuwmhy]/=I,";
    var v1592 = v1616 + "/aa[agr]/=K,";
    var v1565 = v1592 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1536 = v1565 + "/a[tu]g/=M,";
    var v1503 = v1536 + "/aa[tucy]/=N,";
    var v1457 = v1503 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1394 = v1457 + "/ca[agr]|[tu]a[agr]|[tcuy]a[agr]/=Q,";
    var v1330 = v1394 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1253 = v1330 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1138 = v1253 + "/ac[acgturyswkmbdhvn]/=T,";
    var v982 = v1138 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v730 = v982 + "/[tu]gg/=W,";
    var v312 = v730 + "/[tu]a[ctuy]/=Y,";
    return v312 + "/[tu]ga/=*";
  }
  var v731 = type$$26.toLowerCase();
  var v315 = v731 == "transl_table=9";
  if (v315) {
    var v1740 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1722 = v1740 + "/ga[tcuy]/=D,";
    var v1704 = v1722 + "/ga[agr]/=E,";
    var v1685 = v1704 + "/[tu][tu][tcuy]/=F,";
    var v1665 = v1685 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1641 = v1665 + "/ca[tcuy]/=H,";
    var v1617 = v1641 + "/a[tu][atcuwmhy]/=I,";
    var v1593 = v1617 + "/aag/=K,";
    var v1566 = v1593 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1537 = v1566 + "/a[tu]g/=M,";
    var v1504 = v1537 + "/aa[atcuwmhy]/=N,";
    var v1458 = v1504 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1395 = v1458 + "/ca[agr]/=Q,";
    var v1331 = v1395 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1254 = v1331 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v1139 = v1254 + "/ac[acgturyswkmbdhvn]/=T,";
    var v983 = v1139 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v732 = v983 + "/[tu]g[agr]/=W,";
    var v314 = v732 + "/[tu]a[ctuy]/=Y,";
    return v314 + "/[tu]a[agr]/=*";
  }
  var v733 = type$$26.toLowerCase();
  var v317 = v733 == "transl_table=10";
  if (v317) {
    var v1741 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[atcuwmhy]/=C,";
    var v1723 = v1741 + "/ga[tcuy]/=D,";
    var v1705 = v1723 + "/ga[agr]/=E,";
    var v1686 = v1705 + "/[tu][tu][tcuy]/=F,";
    var v1666 = v1686 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1642 = v1666 + "/ca[tcuy]/=H,";
    var v1618 = v1642 + "/a[tu][atcuwmhy]/=I,";
    var v1594 = v1618 + "/aa[agr]/=K,";
    var v1567 = v1594 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1538 = v1567 + "/a[tu]g/=M,";
    var v1505 = v1538 + "/aa[tucy]/=N,";
    var v1459 = v1505 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1396 = v1459 + "/ca[agr]/=Q,";
    var v1332 = v1396 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1255 = v1332 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1140 = v1255 + "/ac[acgturyswkmbdhvn]/=T,";
    var v984 = v1140 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v734 = v984 + "/[tu]gg/=W,";
    var v316 = v734 + "/[tu]a[ctuy]/=Y,";
    return v316 + "/[tu]a[agr]/=*";
  }
  var v735 = type$$26.toLowerCase();
  var v319 = v735 == "transl_table=11";
  if (v319) {
    var v1742 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1724 = v1742 + "/ga[tcuy]/=D,";
    var v1706 = v1724 + "/ga[agr]/=E,";
    var v1687 = v1706 + "/[tu][tu][tcuy]/=F,";
    var v1667 = v1687 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1643 = v1667 + "/ca[tcuy]/=H,";
    var v1619 = v1643 + "/a[tu][atcuwmhy]/=I,";
    var v1595 = v1619 + "/aa[agr]/=K,";
    var v1568 = v1595 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1539 = v1568 + "/a[tu]g/=M,";
    var v1506 = v1539 + "/aa[tucy]/=N,";
    var v1460 = v1506 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1397 = v1460 + "/ca[agr]/=Q,";
    var v1333 = v1397 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1256 = v1333 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1141 = v1256 + "/ac[acgturyswkmbdhvn]/=T,";
    var v985 = v1141 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v736 = v985 + "/[tu]gg/=W,";
    var v318 = v736 + "/[tu]a[ctuy]/=Y,";
    return v318 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*";
  }
  var v737 = type$$26.toLowerCase();
  var v321 = v737 == "transl_table=12";
  if (v321) {
    var v1743 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1725 = v1743 + "/ga[tcuy]/=D,";
    var v1707 = v1725 + "/ga[agr]/=E,";
    var v1688 = v1707 + "/[tu][tu][tcuy]/=F,";
    var v1668 = v1688 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1644 = v1668 + "/ca[tcuy]/=H,";
    var v1620 = v1644 + "/a[tu][atcuwmhy]/=I,";
    var v1596 = v1620 + "/aa[agr]/=K,";
    var v1569 = v1596 + "/c[tu][atcuwmhy]|[tu][tu][agr]|[ctuy][tu]a/=L,";
    var v1540 = v1569 + "/a[tu]g/=M,";
    var v1507 = v1540 + "/aa[tucy]/=N,";
    var v1461 = v1507 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1398 = v1461 + "/ca[agr]/=Q,";
    var v1334 = v1398 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1257 = v1334 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]|c[tu]g/=S,";
    var v1142 = v1257 + "/ac[acgturyswkmbdhvn]/=T,";
    var v986 = v1142 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v738 = v986 + "/[tu]gg/=W,";
    var v320 = v738 + "/[tu]a[ctuy]/=Y,";
    return v320 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*";
  }
  var v739 = type$$26.toLowerCase();
  var v323 = v739 == "transl_table=13";
  if (v323) {
    var v1744 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1726 = v1744 + "/ga[tcuy]/=D,";
    var v1708 = v1726 + "/ga[agr]/=E,";
    var v1689 = v1708 + "/[tu][tu][tcuy]/=F,";
    var v1669 = v1689 + "/gg[acgturyswkmbdhvn]|ag[agr]|[agr]g[agr]/=G,";
    var v1645 = v1669 + "/ca[tcuy]/=H,";
    var v1621 = v1645 + "/a[tu][tcuy]/=I,";
    var v1597 = v1621 + "/aa[agr]/=K,";
    var v1570 = v1597 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1541 = v1570 + "/a[tu][agr]/=M,";
    var v1508 = v1541 + "/aa[tucy]/=N,";
    var v1462 = v1508 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1399 = v1462 + "/ca[agr]/=Q,";
    var v1335 = v1399 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1258 = v1335 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1143 = v1258 + "/ac[acgturyswkmbdhvn]/=T,";
    var v987 = v1143 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v740 = v987 + "/[tu]g[agr]/=W,";
    var v322 = v740 + "/[tu]a[ctuy]/=Y,";
    return v322 + "/[tu]a[agr]/=*";
  }
  var v741 = type$$26.toLowerCase();
  var v325 = v741 == "transl_table=14";
  if (v325) {
    var v1745 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1727 = v1745 + "/ga[tcuy]/=D,";
    var v1709 = v1727 + "/ga[agr]/=E,";
    var v1690 = v1709 + "/[tu][tu][tcuy]/=F,";
    var v1670 = v1690 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1646 = v1670 + "/ca[tcuy]/=H,";
    var v1622 = v1646 + "/a[tu][atcuwmhy]/=I,";
    var v1598 = v1622 + "/aag/=K,";
    var v1571 = v1598 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1542 = v1571 + "/a[tu]g/=M,";
    var v1509 = v1542 + "/aa[atcuwmhy]/=N,";
    var v1463 = v1509 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1400 = v1463 + "/ca[agr]/=Q,";
    var v1336 = v1400 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1259 = v1336 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v1144 = v1259 + "/ac[acgturyswkmbdhvn]/=T,";
    var v988 = v1144 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v742 = v988 + "/[tu]g[agr]/=W,";
    var v324 = v742 + "/[tu]a[atcuwmhy]/=Y,";
    return v324 + "/[tu]ag/=*";
  }
  var v743 = type$$26.toLowerCase();
  var v327 = v743 == "transl_table=15";
  if (v327) {
    var v1746 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1728 = v1746 + "/ga[tcuy]/=D,";
    var v1710 = v1728 + "/ga[agr]/=E,";
    var v1691 = v1710 + "/[tu][tu][tcuy]/=F,";
    var v1671 = v1691 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1647 = v1671 + "/ca[tcuy]/=H,";
    var v1623 = v1647 + "/a[tu][atcuwmhy]/=I,";
    var v1599 = v1623 + "/aa[agr]/=K,";
    var v1572 = v1599 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1543 = v1572 + "/a[tu]g/=M,";
    var v1510 = v1543 + "/aa[tucy]/=N,";
    var v1464 = v1510 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1401 = v1464 + "/ca[agr]|[tu]ag|[tcuy]ag/=Q,";
    var v1337 = v1401 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1260 = v1337 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1145 = v1260 + "/ac[acgturyswkmbdhvn]/=T,";
    var v989 = v1145 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v744 = v989 + "/[tu]gg/=W,";
    var v326 = v744 + "/[tu]a[ctuy]/=Y,";
    return v326 + "/[tu][agr]a/=*";
  }
  var v745 = type$$26.toLowerCase();
  var v329 = v745 == "transl_table=16";
  if (v329) {
    var v1747 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1729 = v1747 + "/ga[tcuy]/=D,";
    var v1711 = v1729 + "/ga[agr]/=E,";
    var v1692 = v1711 + "/[tu][tu][tcuy]/=F,";
    var v1672 = v1692 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1648 = v1672 + "/ca[tcuy]/=H,";
    var v1624 = v1648 + "/a[tu][atcuwmhy]/=I,";
    var v1600 = v1624 + "/aa[agr]/=K,";
    var v1573 = v1600 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]|[tu]ag|[tu][atuw]g/=L,";
    var v1544 = v1573 + "/a[tu]g/=M,";
    var v1511 = v1544 + "/aa[tucy]/=N,";
    var v1465 = v1511 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1402 = v1465 + "/ca[agr]/=Q,";
    var v1338 = v1402 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1261 = v1338 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1146 = v1261 + "/ac[acgturyswkmbdhvn]/=T,";
    var v990 = v1146 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v746 = v990 + "/[tu]gg/=W,";
    var v328 = v746 + "/[tu]a[ctuy]/=Y,";
    return v328 + "/[tu][agr]a/=*";
  }
  var v747 = type$$26.toLowerCase();
  var v331 = v747 == "transl_table=21";
  if (v331) {
    var v1748 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1730 = v1748 + "/ga[tcuy]/=D,";
    var v1712 = v1730 + "/ga[agr]/=E,";
    var v1693 = v1712 + "/[tu][tu][tcuy]/=F,";
    var v1673 = v1693 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1649 = v1673 + "/ca[tcuy]/=H,";
    var v1625 = v1649 + "/a[tu][tcuy]/=I,";
    var v1601 = v1625 + "/aag/=K,";
    var v1574 = v1601 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1545 = v1574 + "/a[tu][agr]/=M,";
    var v1512 = v1545 + "/aa[atcuwmhy]/=N,";
    var v1466 = v1512 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1403 = v1466 + "/ca[agr]/=Q,";
    var v1339 = v1403 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1262 = v1339 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v1147 = v1262 + "/ac[acgturyswkmbdhvn]/=T,";
    var v991 = v1147 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v748 = v991 + "/[tu]g[agr]/=W,";
    var v330 = v748 + "/[tu]a[ctuy]/=Y,";
    return v330 + "/[tu]a[agr]/=*";
  }
  var v749 = type$$26.toLowerCase();
  var v333 = v749 == "transl_table=22";
  if (v333) {
    var v1749 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1731 = v1749 + "/ga[tcuy]/=D,";
    var v1713 = v1731 + "/ga[agr]/=E,";
    var v1694 = v1713 + "/[tu][tu][tcuy]/=F,";
    var v1674 = v1694 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1650 = v1674 + "/ca[tcuy]/=H,";
    var v1626 = v1650 + "/a[tu][atcuwmhy]/=I,";
    var v1602 = v1626 + "/aa[agr]/=K,";
    var v1575 = v1602 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]|[tu]ag|[tu][atuw]g/=L,";
    var v1546 = v1575 + "/a[tu]g/=M,";
    var v1513 = v1546 + "/aa[tucy]/=N,";
    var v1467 = v1513 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1404 = v1467 + "/ca[agr]/=Q,";
    var v1340 = v1404 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1263 = v1340 + "/[tu]c[cgtyskb]|ag[ct]/=S,";
    var v1148 = v1263 + "/ac[acgturyswkmbdhvn]/=T,";
    var v992 = v1148 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v750 = v992 + "/[tu]gg/=W,";
    var v332 = v750 + "/[tu]a[ctuy]/=Y,";
    return v332 + "/[tu][agcrsmv]a/=*";
  }
  var v751 = type$$26.toLowerCase();
  var v335 = v751 == "transl_table=23";
  if (v335) {
    var v1750 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1732 = v1750 + "/ga[tcuy]/=D,";
    var v1714 = v1732 + "/ga[agr]/=E,";
    var v1695 = v1714 + "/[tu][tu][tcuy]/=F,";
    var v1675 = v1695 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1651 = v1675 + "/ca[tcuy]/=H,";
    var v1627 = v1651 + "/a[tu][atcuwmhy]/=I,";
    var v1603 = v1627 + "/aa[agr]/=K,";
    var v1576 = v1603 + "/c[tu][acgturyswkmbdhvn]|[ctuy][tu]g/=L,";
    var v1547 = v1576 + "/a[tu]g/=M,";
    var v1514 = v1547 + "/aa[tucy]/=N,";
    var v1468 = v1514 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1405 = v1468 + "/ca[agr]/=Q,";
    var v1341 = v1405 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1264 = v1341 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1149 = v1264 + "/ac[acgturyswkmbdhvn]/=T,";
    var v993 = v1149 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v752 = v993 + "/[tu]gg/=W,";
    var v334 = v752 + "/[tu]a[ctuy]/=Y,";
    return v334 + "/[tu]a[agr]|[tu]ga|[tu][agtrwkd]a/=*";
  }
  return true;
}
function primerMap() {
  var theDocument = document;
  var newDna = "";
  var title$$9 = "";
  var maxInput$$3 = 2E5;
  var v753 = testScript();
  var v336 = v753 == false;
  if (v336) {
    return;
  }
  var restrictionSiteCollection;
  var forwardMatches;
  var reverseMatches;
  var v1406 = theDocument.forms;
  var v1342 = v1406[0];
  var v1265 = v1342.elements;
  var v1150 = v1265[7];
  var v994 = v1150.options;
  var v1407 = theDocument.forms;
  var v1343 = v1407[0];
  var v1266 = v1343.elements;
  var v1151 = v1266[7];
  var v995 = v1151.selectedIndex;
  var v754 = v994[v995];
  var v337 = v754.value;
  var geneticCode = getGeneticCodeString(v337);
  var restrictionSites = getRestrictionSiteString();
  var v1408 = theDocument.forms;
  var v1344 = v1408[0];
  var v1267 = v1344.elements;
  var v1152 = v1267[0];
  var v996 = checkFormElement(v1152);
  var v755 = v996 == false;
  var v998 = !v755;
  if (v998) {
    var v1469 = theDocument.forms;
    var v1409 = v1469[0];
    var v1345 = v1409.elements;
    var v1268 = v1345[0];
    var v1153 = v1268.value;
    var v997 = checkSequenceLength(v1153, maxInput$$3);
    v755 = v997 == false;
  }
  var v338 = v755;
  if (v338) {
    return;
  }
  geneticCode = geneticCode.split(/,/);
  var v756 = checkGeneticCode(geneticCode);
  var v339 = v756 == false;
  if (v339) {
    return;
  }
  restrictionSites = restrictionSites.split(/,/);
  var v757 = checkRestPatterns(restrictionSites);
  var v340 = v757 == false;
  if (v340) {
    return;
  }
  var isColor$$1;
  var v1470 = theDocument.forms;
  var v1410 = v1470[0];
  var v1346 = v1410.elements;
  var v1269 = v1346[10];
  var v1154 = v1269.options;
  var v1471 = theDocument.forms;
  var v1411 = v1471[0];
  var v1347 = v1411.elements;
  var v1270 = v1347[10];
  var v1155 = v1270.selectedIndex;
  var v999 = v1154[v1155];
  var v758 = v999.value;
  var v341 = v758 == "color";
  if (v341) {
    isColor$$1 = true;
  } else {
    isColor$$1 = false;
  }
  var v1271 = theDocument.forms;
  var v1156 = v1271[0];
  var v1000 = v1156.elements;
  var v759 = v1000[1];
  var v342 = v759.value;
  var primers = v342.split(/,/);
  var newPrimers = new Array;
  var primerSeq;
  var primerRe;
  var primerName;
  var matchArray$$2;
  var re$$3 = /\(([^\(]+)\)\s*([A-Za-z]+)/;
  var i$$11 = 0;
  var v760 = primers.length;
  var v347 = i$$11 < v760;
  for (;v347;) {
    var v761 = primers[i$$11];
    var v346 = matchArray$$2 = re$$3.exec(v761);
    if (v346) {
      primerName = matchArray$$2[1];
      var v1001 = matchArray$$2[2];
      var v762 = v1001.length;
      var v343 = v762 < 10;
      if (v343) {
        alert("Please enter primer sequences that are at least 10 bases long.");
        return;
      }
      primerSeq = matchArray$$2[2];
      var v1002 = convertDegenerates(primerSeq);
      var v763 = "/" + v1002;
      var v344 = v763 + "/gi";
      primerRe = eval(v344);
      var v345 = new Primer(primerSeq, primerRe, primerName);
      newPrimers.push(v345);
    }
    i$$11++;
    var v764 = primers.length;
    v347 = i$$11 < v764;
  }
  _openWindow("Primer Map", isColor$$1);
  var v1472 = theDocument.forms;
  var v1412 = v1472[0];
  var v1348 = v1412.elements;
  var v1272 = v1348[8];
  var v1157 = v1272.options;
  var v1473 = theDocument.forms;
  var v1413 = v1473[0];
  var v1349 = v1413.elements;
  var v1273 = v1349[8];
  var v1158 = v1273.selectedIndex;
  var v1003 = v1157[v1158];
  var v765 = v1003.value;
  var v358 = v765 == "shown";
  if (v358) {
    var v348 = outputWindow.document;
    var v766 = '<span class="one">' + "cuts once";
    var v349 = v766 + "</span><br />\n";
    v348.write(v349);
    var v350 = outputWindow.document;
    var v767 = '<span class="two">' + "cuts twice";
    var v351 = v767 + "</span><br />\n";
    v350.write(v351);
    var v352 = outputWindow.document;
    v352.write("\n");
    var v353 = outputWindow.document;
    var v768 = '<span class="forward_primer">' + "&gt;&gt;&gt;forward primer";
    var v354 = v768 + "</span><br />\n";
    v353.write(v354);
    var v355 = outputWindow.document;
    var v769 = '<span class="reverse_primer">' + "&lt;&lt;&lt;reverse primer";
    var v356 = v769 + "</span><br />\n";
    v355.write(v356);
    var v357 = outputWindow.document;
    v357.write("\n");
  }
  var v1274 = theDocument.forms;
  var v1159 = v1274[0];
  var v1004 = v1159.elements;
  var v770 = v1004[0];
  var v359 = v770.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v359);
  i$$11 = 0;
  var v771 = arrayOfFasta$$1.length;
  var v393 = i$$11 < v771;
  for (;v393;) {
    var v360 = arrayOfFasta$$1[i$$11];
    newDna = getSequenceFromFasta(v360);
    var v361 = arrayOfFasta$$1[i$$11];
    title$$9 = getTitleFromFasta(v361);
    newDna = removeNonDna(newDna);
    openPre();
    var v362 = outputWindow.document;
    var v1474 = theDocument.forms;
    var v1414 = v1474[0];
    var v1350 = v1414.elements;
    var v1275 = v1350[9];
    var v1160 = v1275.options;
    var v1475 = theDocument.forms;
    var v1415 = v1475[0];
    var v1351 = v1415.elements;
    var v1276 = v1351[9];
    var v1161 = v1276.selectedIndex;
    var v1005 = v1160[v1161];
    var v772 = v1005.value;
    var v363 = getInfoFromTitleAndSequenceAndTopology(title$$9, newDna, v772);
    v362.write(v363);
    var v1476 = theDocument.forms;
    var v1416 = v1476[0];
    var v1352 = v1416.elements;
    var v1277 = v1352[8];
    var v1162 = v1277.options;
    var v1477 = theDocument.forms;
    var v1417 = v1477[0];
    var v1353 = v1417.elements;
    var v1278 = v1353[8];
    var v1163 = v1278.selectedIndex;
    var v1006 = v1162[v1163];
    var v773 = v1006.value;
    var v365 = v773 == "shown";
    if (v365) {
      var v1418 = theDocument.forms;
      var v1354 = v1418[0];
      var v1279 = v1354.elements;
      var v1164 = v1279[9];
      var v1007 = v1164.options;
      var v1419 = theDocument.forms;
      var v1355 = v1419[0];
      var v1280 = v1355.elements;
      var v1165 = v1280[9];
      var v1008 = v1165.selectedIndex;
      var v774 = v1007[v1008];
      var v364 = v774.value;
      restrictionSiteCollection = findRestrictionSites(newDna, restrictionSites, v364);
      restrictionSiteCollection.sortRestrictionSites();
    }
    var v1420 = theDocument.forms;
    var v1356 = v1420[0];
    var v1281 = v1356.elements;
    var v1166 = v1281[9];
    var v1009 = v1166.options;
    var v1421 = theDocument.forms;
    var v1357 = v1421[0];
    var v1282 = v1357.elements;
    var v1167 = v1282[9];
    var v1010 = v1167.selectedIndex;
    var v775 = v1009[v1010];
    var v366 = v775.value;
    forwardMatches = findMatches(newPrimers, newDna, v366, false);
    var v776 = complement(newDna);
    var v367 = reverse(v776);
    var v1422 = theDocument.forms;
    var v1358 = v1422[0];
    var v1283 = v1358.elements;
    var v1168 = v1283[9];
    var v1011 = v1168.options;
    var v1423 = theDocument.forms;
    var v1359 = v1423[0];
    var v1284 = v1359.elements;
    var v1169 = v1284[9];
    var v1012 = v1169.selectedIndex;
    var v777 = v1011[v1012];
    var v368 = v777.value;
    reverseMatches = findMatches(newPrimers, v367, v368, true);
    var j$$10 = 0;
    var v1013 = forwardMatches.matches;
    var v778 = v1013.length;
    var v375 = j$$10 < v778;
    for (;v375;) {
      var v779 = forwardMatches.matches;
      var v369 = v779[j$$10];
      var v1170 = forwardMatches.matches;
      var v1014 = v1170[j$$10];
      var v780 = v1014.position;
      var v1285 = forwardMatches.matches;
      var v1171 = v1285[j$$10];
      var v1015 = v1171.matchingText;
      var v781 = v1015.length;
      v369.position = v780 - v781;
      var v782 = forwardMatches.matches;
      var v370 = v782[j$$10];
      var v1172 = forwardMatches.matches;
      var v1016 = v1172[j$$10];
      var v783 = v1016.position;
      var v1286 = forwardMatches.matches;
      var v1173 = v1286[j$$10];
      var v1017 = v1173.matchingText;
      var v784 = v1017.length;
      v370.end = v783 + v784;
      var v1174 = forwardMatches.matches;
      var v1018 = v1174[j$$10];
      var v785 = v1018.position;
      var v372 = v785 < 0;
      if (v372) {
        var v786 = forwardMatches.matches;
        var v371 = v786[j$$10];
        var v1175 = forwardMatches.matches;
        var v1019 = v1175[j$$10];
        var v787 = v1019.position;
        var v788 = newDna.length;
        v371.position = v787 + v788;
      }
      var v1176 = forwardMatches.matches;
      var v1020 = v1176[j$$10];
      var v789 = v1020.end;
      var v790 = newDna.length;
      var v374 = v789 > v790;
      if (v374) {
        var v791 = forwardMatches.matches;
        var v373 = v791[j$$10];
        var v1177 = forwardMatches.matches;
        var v1021 = v1177[j$$10];
        var v792 = v1021.end;
        var v793 = newDna.length;
        v373.end = v792 - v793;
      }
      j$$10++;
      var v1022 = forwardMatches.matches;
      var v794 = v1022.length;
      v375 = j$$10 < v794;
    }
    j$$10 = 0;
    var v1023 = reverseMatches.matches;
    var v795 = v1023.length;
    var v382 = j$$10 < v795;
    for (;v382;) {
      var v796 = reverseMatches.matches;
      var v376 = v796[j$$10];
      var v797 = newDna.length;
      var v1178 = reverseMatches.matches;
      var v1024 = v1178[j$$10];
      var v798 = v1024.position;
      v376.position = v797 - v798;
      var v799 = reverseMatches.matches;
      var v377 = v799[j$$10];
      var v1179 = reverseMatches.matches;
      var v1025 = v1179[j$$10];
      var v800 = v1025.position;
      var v1287 = reverseMatches.matches;
      var v1180 = v1287[j$$10];
      var v1026 = v1180.matchingText;
      var v801 = v1026.length;
      v377.end = v800 + v801;
      var v1181 = reverseMatches.matches;
      var v1027 = v1181[j$$10];
      var v802 = v1027.position;
      var v379 = v802 < 0;
      if (v379) {
        var v803 = reverseMatches.matches;
        var v378 = v803[j$$10];
        var v1182 = reverseMatches.matches;
        var v1028 = v1182[j$$10];
        var v804 = v1028.position;
        var v805 = newDna.length;
        v378.position = v804 + v805;
      }
      var v1183 = reverseMatches.matches;
      var v1029 = v1183[j$$10];
      var v806 = v1029.end;
      var v807 = newDna.length;
      var v381 = v806 > v807;
      if (v381) {
        var v808 = reverseMatches.matches;
        var v380 = v808[j$$10];
        var v1184 = reverseMatches.matches;
        var v1030 = v1184[j$$10];
        var v809 = v1030.end;
        var v810 = newDna.length;
        v380.end = v809 - v810;
      }
      j$$10++;
      var v1031 = reverseMatches.matches;
      var v811 = v1031.length;
      v382 = j$$10 < v811;
    }
    forwardMatches.sortMatches();
    reverseMatches.sortMatches();
    var v1424 = theDocument.forms;
    var v1360 = v1424[0];
    var v1288 = v1360.elements;
    var v1185 = v1288[5];
    var v1032 = v1185.options;
    var v1425 = theDocument.forms;
    var v1361 = v1425[0];
    var v1289 = v1361.elements;
    var v1186 = v1289[5];
    var v1033 = v1186.selectedIndex;
    var v812 = v1032[v1033];
    var v383 = v812.value;
    var v1426 = theDocument.forms;
    var v1362 = v1426[0];
    var v1290 = v1362.elements;
    var v1187 = v1290[6];
    var v1034 = v1187.options;
    var v1427 = theDocument.forms;
    var v1363 = v1427[0];
    var v1291 = v1363.elements;
    var v1188 = v1291[6];
    var v1035 = v1188.selectedIndex;
    var v813 = v1034[v1035];
    var v384 = v813.value;
    layoutPrimerMap(newDna, geneticCode, restrictionSiteCollection, forwardMatches, reverseMatches, v383, v384);
    var v385 = outputWindow.document;
    v385.write("\n");
    closePre();
    var v1478 = theDocument.forms;
    var v1428 = v1478[0];
    var v1364 = v1428.elements;
    var v1292 = v1364[8];
    var v1189 = v1292.options;
    var v1479 = theDocument.forms;
    var v1429 = v1479[0];
    var v1365 = v1429.elements;
    var v1293 = v1365[8];
    var v1190 = v1293.selectedIndex;
    var v1036 = v1189[v1190];
    var v814 = v1036.value;
    var v388 = v814 == "shown";
    if (v388) {
      var v1430 = theDocument.forms;
      var v1366 = v1430[0];
      var v1294 = v1366.elements;
      var v1191 = v1294[9];
      var v1037 = v1191.options;
      var v1431 = theDocument.forms;
      var v1367 = v1431[0];
      var v1295 = v1367.elements;
      var v1192 = v1295[9];
      var v1038 = v1192.selectedIndex;
      var v815 = v1037[v1038];
      var v386 = v815.value;
      writeRestrictionSites(newDna, restrictionSites, v386);
      var v387 = outputWindow.document;
      v387.write("<br />\n");
    }
    writePrimerSites(newPrimers);
    var v389 = outputWindow.document;
    v389.write("<br />\n<br />\n");
    j$$10 = 0;
    var v816 = newPrimers.length;
    var v392 = j$$10 < v816;
    for (;v392;) {
      var v390 = newPrimers[j$$10];
      v390.hasForwardMatch = false;
      var v391 = newPrimers[j$$10];
      v391.hasReverseMatch = false;
      j$$10++;
      var v817 = newPrimers.length;
      v392 = j$$10 < v817;
    }
    i$$11++;
    var v818 = arrayOfFasta$$1.length;
    v393 = i$$11 < v818;
  }
  closeWindow();
  return;
}
function writePrimerSites(primers$$1) {
  var backGroundClass$$1;
  var v394 = outputWindow.document;
  v394.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  var v395 = outputWindow.document;
  var v1193 = '<tr><td class="title" width="200px">' + "Primer:";
  var v1039 = v1193 + '</td><td class="title">';
  var v819 = v1039 + "Sequence:";
  var v396 = v819 + "</td></tr>\n";
  v395.write(v396);
  var i$$12 = 0;
  var v820 = primers$$1.length;
  var v402 = i$$12 < v820;
  for (;v402;) {
    var v1040 = primers$$1[i$$12];
    var v821 = v1040.hasForwardMatch;
    if (v821) {
      var v1041 = primers$$1[i$$12];
      v821 = v1041.hasReverseMatch;
    }
    var v399 = v821;
    if (v399) {
      backGroundClass$$1 = "many";
    } else {
      var v822 = primers$$1[i$$12];
      var v398 = v822.hasForwardMatch;
      if (v398) {
        backGroundClass$$1 = "forward_primer";
      } else {
        var v823 = primers$$1[i$$12];
        var v397 = v823.hasReverseMatch;
        if (v397) {
          backGroundClass$$1 = "reverse_primer";
        } else {
          backGroundClass$$1 = "none";
        }
      }
    }
    var v400 = outputWindow.document;
    var v1548 = '<tr><td class="' + backGroundClass$$1;
    var v1515 = v1548 + '">';
    var v1549 = primers$$1[i$$12];
    var v1516 = v1549.name;
    var v1480 = v1515 + v1516;
    var v1432 = v1480 + '</td><td class="';
    var v1368 = v1432 + backGroundClass$$1;
    var v1296 = v1368 + '">';
    var v1194 = v1296 + "5'-";
    var v1297 = primers$$1[i$$12];
    var v1195 = v1297.sequence;
    var v1042 = v1194 + v1195;
    var v824 = v1042 + "-3'";
    var v401 = v824 + "</td></tr>\n";
    v400.write(v401);
    i$$12++;
    var v825 = primers$$1.length;
    v402 = i$$12 < v825;
  }
  var v403 = outputWindow.document;
  v403.write("</tbody></table>\n");
  return;
}
function layoutPrimerMap(dnaSequence$$3, geneticCode$$1, restrictionSiteCollection$$1, forwardMatches$$1, reverseMatches$$1, basesPerLine, readingFrame) {
  basesPerLine = parseInt(basesPerLine);
  var geneticCodeMatchExp$$2 = getGeneticCodeMatchExp(geneticCode$$1);
  var geneticCodeMatchResult$$2 = getGeneticCodeMatchResult(geneticCode$$1);
  var spaceString = "                                                                                                                                  ";
  var textLayout = new TextLayout;
  var v826 = readingFrame == "3";
  var v1043 = !v826;
  if (v1043) {
    v826 = readingFrame == "all_three";
  }
  var v405 = v826;
  if (v405) {
    var translation = new TranslationComponent;
    var v1196 = dnaSequence$$3.length;
    var v1044 = dnaSequence$$3.substring(2, v1196);
    var v827 = translate(v1044, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    var v404 = "  " + v827;
    translation.setCharacters(v404);
    textLayout.addComponent(translation);
  }
  var v828 = readingFrame == "2";
  var v1045 = !v828;
  if (v1045) {
    v828 = readingFrame == "all_three";
  }
  var v407 = v828;
  if (v407) {
    translation = new TranslationComponent;
    var v1197 = dnaSequence$$3.length;
    var v1046 = dnaSequence$$3.substring(1, v1197);
    var v829 = translate(v1046, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    var v406 = " " + v829;
    translation.setCharacters(v406);
    textLayout.addComponent(translation);
  }
  var v830 = readingFrame == "1";
  var v1047 = !v830;
  if (v1047) {
    v830 = readingFrame == "all_three";
  }
  var v409 = v830;
  if (v409) {
    translation = new TranslationComponent;
    var v408 = translate(dnaSequence$$3, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    translation.setCharacters(v408);
    textLayout.addComponent(translation);
  }
  var v411 = readingFrame == "uppercase";
  if (v411) {
    translation = new UppercaseTranslationComponent;
    var v410 = uppercaseTranslate(dnaSequence$$3, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    translation.setCharacters(v410);
    textLayout.addComponent(translation);
  }
  var dna = new DnaComponent;
  dna.setCharacters(dnaSequence$$3);
  textLayout.addComponent(dna);
  var ruler = new RulerComponent;
  ruler.setCharacters(dnaSequence$$3);
  ruler.buildRuler();
  textLayout.addComponent(ruler);
  dna = new DnaComponent;
  var v412 = complement(dnaSequence$$3);
  dna.setCharacters(v412);
  textLayout.addComponent(dna);
  var sitesInRange = new Array;
  var i$$13 = 0;
  var v831 = dnaSequence$$3.length;
  var v436 = i$$13 < v831;
  for (;v436;) {
    var v426 = restrictionSiteCollection$$1 != null;
    if (v426) {
      var v413 = i$$13 + basesPerLine;
      sitesInRange = restrictionSiteCollection$$1.getSitesInRange(i$$13, v413);
      sitesInRange.reverse();
      var j$$11 = 0;
      var v832 = sitesInRange.length;
      var v425 = j$$11 < v832;
      for (;v425;) {
        var v1048 = sitesInRange[j$$11];
        var v833 = v1048.numberOfCuts;
        var v424 = v833 == 1;
        if (v424) {
          var v414 = outputWindow.document;
          var v1481 = sitesInRange[j$$11];
          var v1433 = v1481.position;
          var v1369 = v1433 - i$$13;
          var v1298 = v1369 + 9;
          var v1198 = spaceString.substring(0, v1298);
          var v1049 = v1198 + '<span class="one">';
          var v1199 = sitesInRange[j$$11];
          var v1050 = v1199.label;
          var v834 = v1049 + v1050;
          var v415 = v834 + "</span>\n";
          v414.write(v415);
        } else {
          var v1051 = sitesInRange[j$$11];
          var v835 = v1051.numberOfCuts;
          var v423 = v835 == 2;
          if (v423) {
            var v416 = outputWindow.document;
            var v1482 = sitesInRange[j$$11];
            var v1434 = v1482.position;
            var v1370 = v1434 - i$$13;
            var v1299 = v1370 + 9;
            var v1200 = spaceString.substring(0, v1299);
            var v1052 = v1200 + '<span class="two">';
            var v1201 = sitesInRange[j$$11];
            var v1053 = v1201.label;
            var v836 = v1052 + v1053;
            var v417 = v836 + "</span>\n";
            v416.write(v417);
          } else {
            var v1054 = sitesInRange[j$$11];
            var v837 = v1054.numberOfCuts;
            var v422 = v837 == 3;
            if (v422) {
              var v418 = outputWindow.document;
              var v1483 = sitesInRange[j$$11];
              var v1435 = v1483.position;
              var v1371 = v1435 - i$$13;
              var v1300 = v1371 + 9;
              var v1202 = spaceString.substring(0, v1300);
              var v1055 = v1202 + '<span class="three">';
              var v1203 = sitesInRange[j$$11];
              var v1056 = v1203.label;
              var v838 = v1055 + v1056;
              var v419 = v838 + "</span>\n";
              v418.write(v419);
            } else {
              var v420 = outputWindow.document;
              var v1436 = sitesInRange[j$$11];
              var v1372 = v1436.position;
              var v1301 = v1372 - i$$13;
              var v1204 = v1301 + 9;
              var v1057 = spaceString.substring(0, v1204);
              var v1205 = sitesInRange[j$$11];
              var v1058 = v1205.label;
              var v839 = v1057 + v1058;
              var v421 = v839 + "\n";
              v420.write(v421);
            }
          }
        }
        j$$11++;
        var v840 = sitesInRange.length;
        v425 = j$$11 < v840;
      }
    }
    var v427 = i$$13 + basesPerLine;
    sitesInRange = forwardMatches$$1.getMatchesInRange(i$$13, v427);
    sitesInRange.reverse();
    j$$11 = 0;
    var v841 = sitesInRange.length;
    var v430 = j$$11 < v841;
    for (;v430;) {
      var v428 = outputWindow.document;
      var v1652 = sitesInRange[j$$11];
      var v1628 = v1652.position;
      var v1604 = v1628 - i$$13;
      var v1577 = v1604 + 9;
      var v1550 = spaceString.substring(0, v1577);
      var v1517 = v1550 + '<span class="forward_primer">';
      var v1484 = v1517 + "&gt;&gt;&gt;";
      var v1518 = sitesInRange[j$$11];
      var v1485 = v1518.primerName;
      var v1437 = v1484 + v1485;
      var v1373 = v1437 + "&gt;&gt;&gt;";
      var v1302 = v1373 + " ";
      var v1438 = sitesInRange[j$$11];
      var v1374 = v1438.position;
      var v1303 = v1374 + 1;
      var v1206 = v1302 + v1303;
      var v1059 = v1206 + " to ";
      var v1207 = sitesInRange[j$$11];
      var v1060 = v1207.end;
      var v842 = v1059 + v1060;
      var v429 = v842 + "</span>\n";
      v428.write(v429);
      j$$11++;
      var v843 = sitesInRange.length;
      v430 = j$$11 < v843;
    }
    var v431 = i$$13 + basesPerLine;
    sitesInRange = reverseMatches$$1.getMatchesInRange(i$$13, v431);
    sitesInRange.reverse();
    j$$11 = 0;
    var v844 = sitesInRange.length;
    var v434 = j$$11 < v844;
    for (;v434;) {
      var v432 = outputWindow.document;
      var v1653 = sitesInRange[j$$11];
      var v1629 = v1653.position;
      var v1605 = v1629 - i$$13;
      var v1578 = v1605 + 9;
      var v1551 = spaceString.substring(0, v1578);
      var v1519 = v1551 + '<span class="reverse_primer">';
      var v1486 = v1519 + "&lt;&lt;&lt;";
      var v1520 = sitesInRange[j$$11];
      var v1487 = v1520.primerName;
      var v1439 = v1486 + v1487;
      var v1375 = v1439 + "&lt;&lt;&lt;";
      var v1304 = v1375 + " ";
      var v1440 = sitesInRange[j$$11];
      var v1376 = v1440.position;
      var v1305 = v1376 + 1;
      var v1208 = v1304 + v1305;
      var v1061 = v1208 + " to ";
      var v1209 = sitesInRange[j$$11];
      var v1062 = v1209.end;
      var v845 = v1061 + v1062;
      var v433 = v845 + "</span>\n";
      v432.write(v433);
      j$$11++;
      var v846 = sitesInRange.length;
      v434 = j$$11 < v846;
    }
    var v435 = i$$13 + basesPerLine;
    textLayout.writeLayout(i$$13, v435);
    i$$13 = i$$13 + basesPerLine;
    var v847 = dnaSequence$$3.length;
    v436 = i$$13 < v847;
  }
  return;
}
function translate(dnaSequence$$4, geneticCodeMatchExp$$3, geneticCodeMatchResult$$3) {
  function v2(str$$8, p1$$2, offset$$10, s$$4) {
    var v437 = " " + p1$$2;
    return v437 + " ";
  }
  var v1063 = dnaSequence$$4.replace(/[^A-Za-z]/g, "");
  var v848 = v1063.length;
  var v438 = v848 < 3;
  if (v438) {
    return "";
  }
  dnaSequence$$4 = dnaSequence$$4.replace(/(...)/g, v2);
  var i$$14 = 0;
  var v849 = geneticCodeMatchExp$$3.length;
  var v441 = i$$14 < v849;
  for (;v441;) {
    var v439 = geneticCodeMatchExp$$3[i$$14];
    var v440 = geneticCodeMatchResult$$3[i$$14];
    dnaSequence$$4 = dnaSequence$$4.replace(v439, v440);
    i$$14++;
    var v850 = geneticCodeMatchExp$$3.length;
    v441 = i$$14 < v850;
  }
  dnaSequence$$4 = dnaSequence$$4.replace(/\S{3}/g, "X");
  dnaSequence$$4 = dnaSequence$$4.replace(/\s\S{1,2}$/, "");
  dnaSequence$$4 = dnaSequence$$4.replace(/^\s/, "");
  return dnaSequence$$4;
}
function uppercaseTranslate(dnaSequence$$5, geneticCodeMatchExp$$4, geneticCodeMatchResult$$4) {
  function v3(str$$9, p1$$3, p2, p3, p4, p5, p6, offset$$11, s$$5) {
    var v1377 = " " + p1$$3;
    var v1306 = v1377 + p3;
    var v1210 = v1306 + p5;
    var v1064 = v1210 + " ";
    var v851 = v1064 + p2;
    var v442 = v851 + p4;
    return v442 + p6;
  }
  dnaSequence$$5 = dnaSequence$$5.replace(/[a-z]/g, " ");
  var v1065 = dnaSequence$$5.replace(/[^A-Za-z]/g, "");
  var v852 = v1065.length;
  var v443 = v852 < 3;
  if (v443) {
    return "";
  }
  dnaSequence$$5 = dnaSequence$$5.replace(/([A-Z])(\s*)([A-Z])(\s*)([A-Z])(\s*)/g, v3);
  dnaSequence$$5 = dnaSequence$$5.replace(/\s\S{1,2}\s/g, "");
  var i$$15 = 0;
  var v853 = geneticCodeMatchExp$$4.length;
  var v446 = i$$15 < v853;
  for (;v446;) {
    var v444 = geneticCodeMatchExp$$4[i$$15];
    var v445 = geneticCodeMatchResult$$4[i$$15];
    dnaSequence$$5 = dnaSequence$$5.replace(v444, v445);
    i$$15++;
    var v854 = geneticCodeMatchExp$$4.length;
    v446 = i$$15 < v854;
  }
  dnaSequence$$5 = dnaSequence$$5.replace(/\S{3}/g, "X");
  dnaSequence$$5 = dnaSequence$$5.replace(/^\s/, "");
  return dnaSequence$$5;
}
function findRestrictionSites(sequence$$18, arrayOfItems$$2, dnaConformation$$1) {
  var lookAhead$$1 = 50;
  var lowerLimit$$1 = 0;
  var upperLimit$$1 = sequence$$18.length;
  var shiftValue$$1 = 0;
  var cutDistance$$1;
  var matchExp$$2;
  var matchPosition$$1;
  var matchArray$$3;
  var label;
  var timesFound$$1 = 0;
  var tempArray = new Array;
  var restrictionSiteCollection$$2 = new RestrictionSiteCollection;
  var v450 = dnaConformation$$1 == "circular";
  if (v450) {
    var v447 = sequence$$18.substring(0, lookAhead$$1);
    shiftValue$$1 = v447.length;
    var v1211 = sequence$$18.length;
    var v1066 = v1211 - lookAhead$$1;
    var v1067 = sequence$$18.length;
    var v855 = sequence$$18.substring(v1066, v1067);
    var v448 = v855 + sequence$$18;
    var v449 = sequence$$18.substring(0, lookAhead$$1);
    sequence$$18 = v448 + v449;
    lowerLimit$$1 = 0 + shiftValue$$1;
    upperLimit$$1 = upperLimit$$1 + shiftValue$$1;
  }
  var i$$16 = 0;
  var v856 = arrayOfItems$$2.length;
  var v461 = i$$16 < v856;
  for (;v461;) {
    var v857 = arrayOfItems$$2[i$$16];
    var v451 = v857.match(/\/.+\//);
    matchExp$$2 = v451 + "gi";
    matchPosition$$1 = 0;
    matchExp$$2 = eval(matchExp$$2);
    var v1212 = arrayOfItems$$2[i$$16];
    var v1068 = v1212.match(/\)\D*\d+/);
    var v858 = v1068.toString();
    var v452 = v858.replace(/\)\D*/, "");
    cutDistance$$1 = parseFloat(v452);
    var v1069 = arrayOfItems$$2[i$$16];
    var v859 = v1069.match(/\([^\(]+\)/);
    var v453 = v859.toString();
    label = v453.replace(/\(|\)/g, "");
    var v457 = matchArray$$3 = matchExp$$2.exec(sequence$$18);
    for (;v457;) {
      matchPosition$$1 = matchExp$$2.lastIndex;
      matchPosition$$1 = matchPosition$$1 - cutDistance$$1;
      var v860 = matchPosition$$1 >= lowerLimit$$1;
      if (v860) {
        v860 = matchPosition$$1 < upperLimit$$1;
      }
      var v455 = v860;
      if (v455) {
        timesFound$$1++;
        var v1070 = label + " ";
        var v1213 = matchPosition$$1 - shiftValue$$1;
        var v1071 = v1213 + 1;
        var v861 = v1070 + v1071;
        var v862 = matchPosition$$1 - shiftValue$$1;
        var v454 = new RestrictionSite(v861, v862);
        tempArray.push(v454);
      }
      var v863 = matchExp$$2.lastIndex;
      var v1072 = RegExp.lastMatch;
      var v864 = v1072.length;
      var v456 = v863 - v864;
      matchExp$$2.lastIndex = v456 + 1;
      v457 = matchArray$$3 = matchExp$$2.exec(sequence$$18);
    }
    var j$$12 = 0;
    var v865 = tempArray.length;
    var v460 = j$$12 < v865;
    for (;v460;) {
      var v458 = tempArray[j$$12];
      v458.numberOfCuts = timesFound$$1;
      var v459 = tempArray[j$$12];
      restrictionSiteCollection$$2.addRestrictionSite(v459);
      j$$12++;
      var v866 = tempArray.length;
      v460 = j$$12 < v866;
    }
    timesFound$$1 = 0;
    tempArray = new Array;
    i$$16++;
    var v867 = arrayOfItems$$2.length;
    v461 = i$$16 < v867;
  }
  return restrictionSiteCollection$$2;
}
function findMatches(primers$$2, sequence$$19, topology$$1, isReverseStrand) {
  var matchArray$$4;
  var matchPosition$$2;
  var matchCollection = new MatchCollection;
  var re$$4;
  var originalLength$$1 = sequence$$19.length;
  var v482 = topology$$1 == "circular";
  if (v482) {
    var lookAhead$$2 = 50;
    var v462 = sequence$$19.substring(0, lookAhead$$2);
    var shiftValue$$2 = v462.length;
    var v463 = sequence$$19.length;
    var upperLimit$$2 = v463 + shiftValue$$2;
    var v1214 = sequence$$19.length;
    var v1073 = v1214 - lookAhead$$2;
    var v1074 = sequence$$19.length;
    var v868 = sequence$$19.substring(v1073, v1074);
    var v464 = v868 + sequence$$19;
    var v465 = sequence$$19.substring(0, lookAhead$$2);
    sequence$$19 = v464 + v465;
    var lowerLimit$$2 = 0 + shiftValue$$2;
    var i$$17 = 0;
    var v869 = primers$$2.length;
    var v474 = i$$17 < v869;
    for (;v474;) {
      var v466 = primers$$2[i$$17];
      re$$4 = v466.re;
      var v473 = matchArray$$4 = re$$4.exec(sequence$$19);
      for (;v473;) {
        matchPosition$$2 = re$$4.lastIndex;
        var v870 = matchPosition$$2 >= lowerLimit$$2;
        if (v870) {
          v870 = matchPosition$$2 < upperLimit$$2;
        }
        var v471 = v870;
        if (v471) {
          matchPosition$$2 = matchPosition$$2 - shiftValue$$2;
          var v467 = matchPosition$$2 == 0;
          if (v467) {
            matchPosition$$2 = originalLength$$1;
          }
          var v1075 = primers$$2[i$$17];
          var v871 = v1075.name;
          var v872 = matchArray$$4[0];
          var v468 = new Match(v871, v872, matchPosition$$2);
          matchCollection.addMatch(v468);
          if (isReverseStrand) {
            var v469 = primers$$2[i$$17];
            v469.hasReverseMatch = true;
          } else {
            var v470 = primers$$2[i$$17];
            v470.hasForwardMatch = true;
          }
        }
        var v873 = re$$4.lastIndex;
        var v1076 = RegExp.lastMatch;
        var v874 = v1076.length;
        var v472 = v873 - v874;
        re$$4.lastIndex = v472 + 1;
        v473 = matchArray$$4 = re$$4.exec(sequence$$19);
      }
      i$$17++;
      var v875 = primers$$2.length;
      v474 = i$$17 < v875;
    }
  } else {
    i$$17 = 0;
    var v876 = primers$$2.length;
    var v481 = i$$17 < v876;
    for (;v481;) {
      var v475 = primers$$2[i$$17];
      re$$4 = v475.re;
      var v480 = matchArray$$4 = re$$4.exec(sequence$$19);
      for (;v480;) {
        matchPosition$$2 = re$$4.lastIndex;
        var v1077 = primers$$2[i$$17];
        var v877 = v1077.name;
        var v878 = matchArray$$4[0];
        var v476 = new Match(v877, v878, matchPosition$$2);
        matchCollection.addMatch(v476);
        if (isReverseStrand) {
          var v477 = primers$$2[i$$17];
          v477.hasReverseMatch = true;
        } else {
          var v478 = primers$$2[i$$17];
          v478.hasForwardMatch = true;
        }
        var v879 = re$$4.lastIndex;
        var v1078 = RegExp.lastMatch;
        var v880 = v1078.length;
        var v479 = v879 - v880;
        re$$4.lastIndex = v479 + 1;
        v480 = matchArray$$4 = re$$4.exec(sequence$$19);
      }
      i$$17++;
      var v881 = primers$$2.length;
      v481 = i$$17 < v881;
    }
  }
  return matchCollection;
}
function writeLayout(start$$4, stop) {
  var i$$18 = 0;
  var v1079 = this.components;
  var v882 = v1079.length;
  var v484 = i$$18 < v882;
  for (;v484;) {
    var v883 = this.components;
    var v483 = v883[i$$18];
    v483.writeLayoutComponent(start$$4, stop);
    i$$18++;
    var v1080 = this.components;
    var v884 = v1080.length;
    v484 = i$$18 < v884;
  }
  return;
}
function addComponent(component) {
  var v485 = this.components;
  v485.push(component);
  return;
}
function TextLayout() {
  var v1849 = new Array;
  this.components = v1849;
  return;
}
function writeLayoutComponent(start$$5, stop$$1) {
  return;
}
function setCharacters(text$$14) {
  var v885 = text$$14.search(/./);
  var v486 = v885 != -1;
  if (v486) {
    var v1850 = text$$14.match(/./g);
    this.characters = v1850;
  }
  return;
}
function isRoom(start$$6, stop$$2) {
  var v487 = this.characters;
  var rangeToCheck = v487.slice(start$$6, stop$$2);
  rangeToCheck = rangeToCheck.join("");
  var v886 = rangeToCheck.search(/\w/);
  var v488 = v886 == -1;
  if (v488) {
    return true;
  } else {
    return false;
  }
  return;
}
function LayoutComponent() {
  var v1851 = new Array;
  this.characters = v1851;
  this.positionLabel = 1;
  return;
}
function TranslationComponent() {
  var v1852 = new Array;
  this.characters = v1852;
  this.positionLabel = 1;
  return;
}
function UppercaseTranslationComponent() {
  var v1853 = new Array;
  this.characters = v1853;
  this.positionLabel = 1;
  return;
}
function DnaComponent() {
  var v1854 = new Array;
  this.characters = v1854;
  this.positionLabel = 1;
  return;
}
function RulerComponent() {
  var v1855 = new Array;
  this.characters = v1855;
  this.positionLabel = 1;
  return;
}
function buildRuler() {
  function v4(str$$12, p1$$6, offset$$14, s$$8) {
    var ruler$$1 = count$$3 + spacing;
    var v489 = count$$3 == 0;
    if (v489) {
      ruler$$1 = spacing;
    }
    count$$3 = count$$3 + 10;
    return ruler$$1.substring(0, 10);
  }
  var v490 = this.characters;
  var sequence$$20 = v490.join("");
  var count$$3 = 0;
  var spacing = "         ";
  sequence$$20 = sequence$$20.replace(/(.{1,10})/g, v4);
  var v1856 = sequence$$20.match(/./g);
  this.characters = v1856;
  return;
}
function RestrictionSite(label$$1, position) {
  this.label = label$$1;
  this.position = position;
  return;
}
function addRestrictionSite(restrictionSite) {
  var v491 = this.restrictionSites;
  v491.push(restrictionSite);
  return;
}
function sortRestrictionSites() {
  var v492 = this.restrictionSites;
  v492.sort(restrictionSiteSorter);
  return;
}
function getSitesInRange(start$$11, stop$$7) {
  var arrayToReturn = new Array;
  var v887 = this.restrictionSites;
  var v493 = v887.length;
  var i$$19 = v493 - 1;
  var v496 = i$$19 >= 0;
  for (;v496;) {
    var v1307 = this.restrictionSites;
    var v1215 = v1307[i$$19];
    var v1081 = v1215.position;
    var v888 = v1081 >= start$$11;
    if (v888) {
      var v1308 = this.restrictionSites;
      var v1216 = v1308[i$$19];
      var v1082 = v1216.position;
      v888 = v1082 < stop$$7;
    }
    var v495 = v888;
    if (v495) {
      var v889 = this.restrictionSites;
      var v494 = v889.pop();
      arrayToReturn.push(v494);
    } else {
      break;
    }
    i$$19--;
    v496 = i$$19 >= 0;
  }
  return arrayToReturn;
}
function RestrictionSiteCollection() {
  var v1857 = new Array;
  this.restrictionSites = v1857;
  return;
}
function restrictionSiteSorter(a, b) {
  var v890 = a.position;
  var v891 = b.position;
  var v497 = v890 < v891;
  if (v497) {
    return 1;
  }
  var v892 = a.position;
  var v893 = b.position;
  var v498 = v892 > v893;
  if (v498) {
    return -1;
  } else {
    return 0;
  }
  return;
}
function Primer(sequence$$21, re$$5, name$$30) {
  this.sequence = sequence$$21;
  this.re = re$$5;
  this.name = name$$30;
  this.hasForwardMatch = false;
  this.hasReverseMatch = false;
  return;
}
function Match(primerName$$1, matchingText, position$$1) {
  this.primerName = primerName$$1;
  this.matchingText = matchingText;
  this.position = position$$1;
  return;
}
function addMatch(match) {
  var v499 = this.matches;
  v499.push(match);
  return;
}
function sortMatches() {
  var v500 = this.matches;
  v500.sort(matchSorter);
  return;
}
function getMatchesInRange(start$$12, stop$$8) {
  var arrayToReturn$$1 = new Array;
  var v894 = this.matches;
  var v501 = v894.length;
  var i$$20 = v501 - 1;
  var v504 = i$$20 >= 0;
  for (;v504;) {
    var v1309 = this.matches;
    var v1217 = v1309[i$$20];
    var v1083 = v1217.position;
    var v895 = v1083 >= start$$12;
    if (v895) {
      var v1310 = this.matches;
      var v1218 = v1310[i$$20];
      var v1084 = v1218.position;
      v895 = v1084 < stop$$8;
    }
    var v503 = v895;
    if (v503) {
      var v896 = this.matches;
      var v502 = v896.pop();
      arrayToReturn$$1.push(v502);
    } else {
      break;
    }
    i$$20--;
    v504 = i$$20 >= 0;
  }
  return arrayToReturn$$1;
}
function MatchCollection() {
  var v1858 = new Array;
  this.matches = v1858;
  return;
}
function matchSorter(a$$1, b$$1) {
  var v897 = a$$1.position;
  var v898 = b$$1.position;
  var v505 = v897 < v898;
  if (v505) {
    return 1;
  }
  var v899 = a$$1.position;
  var v900 = b$$1.position;
  var v506 = v899 > v900;
  if (v506) {
    return -1;
  } else {
    return 0;
  }
  return;
}
new TextLayout;
var v507 = TextLayout.prototype;
v507.writeLayout = writeLayout;
var v508 = TextLayout.prototype;
v508.addComponent = addComponent;
new LayoutComponent;
var v509 = LayoutComponent.prototype;
v509.writeLayoutComponent = writeLayoutComponent;
var v510 = LayoutComponent.prototype;
v510.setCharacters = setCharacters;
var v511 = LayoutComponent.prototype;
v511.isRoom = isRoom;
var v512 = TranslationComponent;
var v1859 = new LayoutComponent;
v512.prototype = v1859;
var v513 = TranslationComponent.prototype;
v513.writeLayoutComponent = v5;
var v514 = UppercaseTranslationComponent;
var v1860 = new LayoutComponent;
v514.prototype = v1860;
var v515 = UppercaseTranslationComponent.prototype;
v515.writeLayoutComponent = v6;
var v516 = DnaComponent;
var v1861 = new LayoutComponent;
v516.prototype = v1861;
var v517 = DnaComponent.prototype;
v517.writeLayoutComponent = v7;
var v518 = RulerComponent;
var v1862 = new LayoutComponent;
v518.prototype = v1862;
var v519 = RulerComponent.prototype;
v519.writeLayoutComponent = v10;
new RulerComponent;
var v520 = RulerComponent.prototype;
v520.buildRuler = buildRuler;
new RestrictionSiteCollection;
var v521 = RestrictionSiteCollection.prototype;
v521.addRestrictionSite = addRestrictionSite;
var v522 = RestrictionSiteCollection.prototype;
v522.sortRestrictionSites = sortRestrictionSites;
var v523 = RestrictionSiteCollection.prototype;
v523.getSitesInRange = getSitesInRange;
new MatchCollection;
var v524 = MatchCollection.prototype;
v524.addMatch = addMatch;
var v525 = MatchCollection.prototype;
v525.sortMatches = sortMatches;
var v526 = MatchCollection.prototype;
v526.getMatchesInRange = getMatchesInRange;
document.onload = v11;
var v527 = document.getElementById("submitbtn");
v527.onclick = v12;
var v528 = document.getElementById("clearbtn");
v528.onclick = v13

}

JAM.stopProfile('load');
