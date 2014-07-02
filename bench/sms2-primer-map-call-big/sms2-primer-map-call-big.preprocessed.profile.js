
JAM.startProfile('load');
function v13() {
  var v1092 = document.forms;
  var v901 = v1092[0];
  var v531 = v901.elements;
  var v14 = v531[0];
  v14.value = " ";
  var v1093 = document.forms;
  var v902 = v1093[1];
  var v532 = v902.elements;
  var v15 = v532[0];
  v15.value = " ";
  return
}
function v12() {
  try {
    primerMap(document)
  }catch(e$$5) {
    var v16 = "The following error was encountered: " + e$$5;
    alert(v16)
  }
  return
}
function v11() {
  var v533 = document.main_form;
  var v17 = v533.main_submit;
  v17.focus();
  return
}
function v10(start$$10, stop$$6) {
  function v9(str$$12, p1$$5, offset$$17, s$$7) {
    return p1$$5.replace(/./g, " ")
  }
  function v8(str$$11, p1$$4, offset$$16, s$$6) {
    return p1$$4.replace(/./g, " ")
  }
  var v18 = outputWindow.document;
  var v534 = this.positionLabel;
  var v19 = rightNum(v534, "", 8, "");
  v18.write(v19);
  var v535 = this.characters;
  var v20 = v535.slice(start$$10, stop$$6);
  var text$$15 = v20.join("");
  text$$15 = text$$15.replace(/^(\d+)/g, v8);
  text$$15 = text$$15.replace(/(\d+)$/g, v9);
  var v21 = outputWindow.document;
  var v22 = text$$15 + "\n";
  v21.write(v22);
  var v23 = this.positionLabel;
  var v24 = stop$$6 - start$$10;
  this.positionLabel = v23 + v24;
  return
}
function v7(start$$9, stop$$5) {
  var v25 = outputWindow.document;
  var v536 = this.positionLabel;
  var v26 = rightNum(v536, "", 8, "");
  v25.write(v26);
  var v27 = outputWindow.document;
  var v1094 = this.characters;
  var v903 = v1094.slice(start$$9, stop$$5);
  var v537 = v903.join("");
  var v28 = v537 + "\n";
  v27.write(v28);
  var v29 = this.positionLabel;
  var v30 = stop$$5 - start$$9;
  this.positionLabel = v29 + v30;
  return
}
function v6(start$$8, stop$$4) {
  var v904 = this.characters;
  var v538 = v904.slice(start$$8, stop$$4);
  var v31 = v538.join("");
  var textToWrite = v31 + "\n";
  var v539 = textToWrite.search(/\w/);
  var v37 = v539 != -1;
  if(v37) {
    var v32 = outputWindow.document;
    var v540 = this.positionLabel;
    var v33 = rightNum(v540, "", 8, "");
    v32.write(v33);
    var v34 = this.positionLabel;
    var v541 = textToWrite.match(/[A-Z]/g);
    var v35 = v541.length;
    this.positionLabel = v34 + v35;
    var v36 = outputWindow.document;
    v36.write(textToWrite)
  }
  return
}
function v5(start$$7, stop$$3) {
  var v38 = outputWindow.document;
  var v542 = this.positionLabel;
  var v39 = rightNum(v542, "", 8, "");
  v38.write(v39);
  var v40 = outputWindow.document;
  var v1095 = this.characters;
  var v905 = v1095.slice(start$$7, stop$$3);
  var v543 = v905.join("");
  var v41 = v543 + "\n";
  v40.write(v41);
  var v42 = this.positionLabel;
  var v544 = stop$$3 - start$$7;
  var v43 = v544 / 3;
  this.positionLabel = v42 + v43;
  return
}
function addReturns(sequence) {
  function v0(str$$7, p1, offset$$12, s$$2) {
    return p1 + "\n"
  }
  sequence = sequence.replace(/(.{60})/g, v0);
  return sequence
}
function checkAlign(arrayOfTitles, arrayOfSequences) {
  var v44 = arrayOfSequences[0];
  var lengthOfAlign = v44.length;
  var v545 = arrayOfSequences.length;
  var v45 = v545 < 2;
  if(v45) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v546 = arrayOfTitles.length;
  var v47 = i$$1 < v546;
  for(;v47;) {
    var v1096 = arrayOfTitles[i$$1];
    var v906 = v1096.search(/\S/);
    var v547 = v906 == -1;
    var v908 = !v547;
    if(v908) {
      var v1231 = arrayOfSequences[i$$1];
      var v1097 = v1231.search(/\S/);
      var v907 = v1097 == -1;
      var v1099 = !v907;
      if(v1099) {
        var v1232 = arrayOfSequences[i$$1];
        var v1098 = v1232.length;
        v907 = v1098 != lengthOfAlign
      }
      v547 = v907
    }
    var v46 = v547;
    if(v46) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v548 = arrayOfTitles.length;
    v47 = i$$1 < v548
  }
  return true
}
function checkCodonTable(codonTable) {
  var v909 = codonTable.search(/AmAcid/);
  var v549 = v909 == -1;
  var v911 = !v549;
  if(v911) {
    var v1100 = codonTable.search(/Codon/);
    var v910 = v1100 == -1;
    var v1102 = !v910;
    if(v1102) {
      var v1233 = codonTable.search(/Number/);
      var v1101 = v1233 == -1;
      var v1235 = !v1101;
      if(v1235) {
        var v1323 = codonTable.search(/\/1000/);
        var v1234 = v1323 == -1;
        var v1325 = !v1234;
        if(v1325) {
          var v1324 = codonTable.search(/Fraction\s*\.\./);
          v1234 = v1324 == -1
        }
        v1101 = v1234
      }
      v910 = v1101
    }
    v549 = v910
  }
  var v48 = v549;
  if(v48) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v912 = formElement.value;
  var v550 = v912.search(/\S/);
  var v49 = v550 == -1;
  if(v49) {
    alert("Please enter some text.");
    return false
  }
  return true
}
function checkGeneticCode(arrayOfPatterns) {
  var z$$2 = 0;
  var codon = "";
  var oneMatch = false;
  var testSequence = "gggggaggtggcgaggaagatgacgtggtagttgtcgcggcagctgccaggagaagtagcaagaaaaataacatgataattatcacgacaactacctggtgatgttgctagtaatattacttgttatttttctcgtcatcttcccggcgacgtcgccagcaacatcacctgctacttctcccgccacctccc";
  var v551 = arrayOfPatterns.length;
  var v52 = z$$2 < v551;
  for(;v52;) {
    var v913 = arrayOfPatterns[z$$2];
    var v552 = v913.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v50 = v552 == -1;
    if(v50) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    var v914 = arrayOfPatterns[z$$2];
    var v553 = moreExpressionCheck(v914);
    var v51 = v553 == false;
    if(v51) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v554 = arrayOfPatterns.length;
    v52 = z$$2 < v554
  }
  var v53 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v53);
  var v54 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v54);
  var j = 0;
  var v555 = arrayOfPatterns.length;
  var v61 = j < v555;
  for(;v61;) {
    var v55 = geneticCodeMatchExp;
    var v56 = j;
    var v1103 = arrayOfPatterns[j];
    var v915 = v1103.match(/\/.+\//);
    var v556 = v915 + "gi";
    var v1855 = eval(v556);
    v55[v56] = v1855;
    var v57 = geneticCodeMatchResult;
    var v58 = j;
    var v916 = arrayOfPatterns[j];
    var v557 = v916.match(/=[a-zA-Z\*]/);
    var v1856 = v557.toString();
    v57[v58] = v1856;
    var v59 = geneticCodeMatchResult;
    var v60 = j;
    var v558 = geneticCodeMatchResult[j];
    var v1857 = v558.replace(/=/g, "");
    v59[v60] = v1857;
    j = j + 1;
    var v559 = arrayOfPatterns.length;
    v61 = j < v559
  }
  var i$$2 = 0;
  var v917 = testSequence.length;
  var v560 = v917 - 3;
  var v68 = i$$2 <= v560;
  for(;v68;) {
    var v62 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v62);
    j = 0;
    var v561 = geneticCodeMatchExp.length;
    var v66 = j < v561;
    for(;v66;) {
      var v918 = geneticCodeMatchExp[j];
      var v562 = codon.search(v918);
      var v65 = v562 != -1;
      if(v65) {
        var v64 = oneMatch == true;
        if(v64) {
          var v563 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v63 = v563 + ".";
          alert(v63);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v564 = geneticCodeMatchExp.length;
      v66 = j < v564
    }
    var v67 = oneMatch == false;
    if(v67) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v919 = testSequence.length;
    var v565 = v919 - 3;
    v68 = i$$2 <= v565
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v566 = arrayOfPatterns$$1.length;
  var v70 = z$$3 < v566;
  for(;v70;) {
    var v920 = arrayOfPatterns$$1[z$$3];
    var v567 = v920.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v69 = v567 != -1;
    if(v69) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v568 = arrayOfPatterns$$1.length;
    v70 = z$$3 < v568
  }
  var i$$3 = 0;
  var v569 = arrayOfPatterns$$1.length;
  var v74 = i$$3 < v569;
  for(;v74;) {
    var v921 = arrayOfPatterns$$1[i$$3];
    var v570 = "[" + v921;
    var v71 = v570 + "]";
    var re = new RegExp(v71, "gi");
    var j$$1 = i$$3 + 1;
    var v571 = arrayOfPatterns$$1.length;
    var v73 = j$$1 < v571;
    for(;v73;) {
      var v922 = arrayOfPatterns$$1[j$$1];
      var v572 = v922.search(re);
      var v72 = v572 != -1;
      if(v72) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v573 = arrayOfPatterns$$1.length;
      v73 = j$$1 < v573
    }
    i$$3 = i$$3 + 1;
    var v574 = arrayOfPatterns$$1.length;
    v74 = i$$3 < v574
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v575 = arrayOfPatterns$$2.length;
  var v77 = z$$4 < v575;
  for(;v77;) {
    var v923 = arrayOfPatterns$$2[z$$4];
    var v576 = v923.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v75 = v576 == -1;
    if(v75) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    var v924 = arrayOfPatterns$$2[z$$4];
    var v577 = moreExpressionCheck(v924);
    var v76 = v577 == false;
    if(v76) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v578 = arrayOfPatterns$$2.length;
    v77 = z$$4 < v578
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v1104 = getSequenceFromFasta(text$$7);
  var v925 = v1104.replace(/[^A-Za-z]/g, "");
  var v579 = v925.length;
  var v79 = v579 > maxInput;
  if(v79) {
    var v580 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v78 = v580 + " characters.";
    alert(v78);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v581 = text$$8.length;
  var v81 = v581 > maxInput$$1;
  if(v81) {
    var v582 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v80 = v582 + " characters.";
    alert(v80);
    return false
  }else {
    return true
  }
  return
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
  return dnaSequence
}
function closeForm() {
  var v82 = outputWindow.document;
  v82.write("</form>");
  return true
}
function closePre() {
  var v83 = outputWindow.document;
  v83.write("</div>");
  var v84 = outputWindow.document;
  v84.write("</pre>\n");
  return
}
function closeTextArea() {
  var v85 = outputWindow.document;
  v85.write("</textarea>");
  return true
}
function closeWindow() {
  var v86 = outputWindow.document;
  v86.write("</body>\n</html>\n");
  outputWindow.status = "Done.";
  var v87 = outputWindow.document;
  v87.close();
  return true
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
  return sequence$$1
}
function earlyCheckAlign(alignArray) {
  var v583 = alignArray.length;
  var v88 = v583 < 3;
  if(v88) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v584 = alignArray.length;
  var v90 = i$$4 < v584;
  for(;v90;) {
    var v926 = alignArray[i$$4];
    var v585 = v926.search(/[^\s]+\s/);
    var v89 = v585 == -1;
    if(v89) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v586 = alignArray.length;
    v90 = i$$4 < v586
  }
  return true
}
function filterAlignSeq(alignSeq) {
  alignSeq = alignSeq.replace(/[^abcdefghiklmnpqrstvwxyz\.\-]/gi, "");
  return alignSeq
}
function filterFastaTitle(sequenceTitle) {
  sequenceTitle = sequenceTitle.replace(/\s{2,}/g, " ");
  sequenceTitle = sequenceTitle.replace(/^\s*/g, "");
  sequenceTitle = sequenceTitle.replace(/[\f\n\r\t]+$/g, "\n");
  return sequenceTitle.replace(/[\<\>]\n/gi, "")
}
function getArrayOfFasta(sequenceData) {
  var arrayOfFasta = new Array;
  var matchArray;
  var re$$1 = /\>[^\>]+/g;
  var v587 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v93 = v587 != -1;
  if(v93) {
    var v92 = matchArray = re$$1.exec(sequenceData);
    for(;v92;) {
      var v91 = matchArray[0];
      arrayOfFasta.push(v91);
      v92 = matchArray = re$$1.exec(sequenceData)
    }
  }else {
    arrayOfFasta[0] = sequenceData
  }
  return arrayOfFasta
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v588 = sequence$$2.length;
  var v94 = "&gt;results for " + v588;
  var stringToReturn = v94 + " residue sequence ";
  var v589 = fastaSequenceTitle.search(/[^\s]/);
  var v96 = v589 != -1;
  if(v96) {
    var v590 = stringToReturn + '"';
    var v95 = v590 + fastaSequenceTitle;
    stringToReturn = v95 + '"'
  }
  var v591 = stringToReturn + ' starting "';
  var v592 = sequence$$2.substring(0, 10);
  var v97 = v591 + v592;
  stringToReturn = v97 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v593 = sequenceOne.length;
  var v98 = "Search results for " + v593;
  var stringToReturn$$1 = v98 + " residue sequence ";
  var v594 = fastaSequenceTitleOne.search(/[^\s]/);
  var v100 = v594 != -1;
  if(v100) {
    var v595 = stringToReturn$$1 + '"';
    var v99 = v595 + fastaSequenceTitleOne;
    stringToReturn$$1 = v99 + '"'
  }
  var v596 = stringToReturn$$1 + ' starting "';
  var v597 = sequenceOne.substring(0, 10);
  var v101 = v596 + v597;
  stringToReturn$$1 = v101 + '"\n';
  var v598 = stringToReturn$$1 + "and ";
  var v599 = sequenceTwo.length;
  var v102 = v598 + v599;
  stringToReturn$$1 = v102 + " residue sequence ";
  var v600 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v104 = v600 != -1;
  if(v104) {
    var v601 = stringToReturn$$1 + '"';
    var v103 = v601 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v103 + '"'
  }
  var v602 = stringToReturn$$1 + ' starting "';
  var v603 = sequenceTwo.substring(0, 10);
  var v105 = v602 + v603;
  stringToReturn$$1 = v105 + '"';
  var v106 = '<div class="info">' + stringToReturn$$1;
  return v106 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v107 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v107);
  var j$$2 = 0;
  var v604 = arrayOfPatterns$$3.length;
  var v110 = j$$2 < v604;
  for(;v110;) {
    var v108 = geneticCodeMatchExp$$1;
    var v109 = j$$2;
    var v1105 = arrayOfPatterns$$3[j$$2];
    var v927 = v1105.match(/\/.+\//);
    var v605 = v927 + "gi";
    var v1858 = eval(v605);
    v108[v109] = v1858;
    j$$2 = j$$2 + 1;
    var v606 = arrayOfPatterns$$3.length;
    v110 = j$$2 < v606
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v111 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v111);
  var j$$3 = 0;
  var v607 = arrayOfPatterns$$4.length;
  var v116 = j$$3 < v607;
  for(;v116;) {
    var v112 = geneticCodeMatchResult$$1;
    var v113 = j$$3;
    var v928 = arrayOfPatterns$$4[j$$3];
    var v608 = v928.match(/=[a-zA-Z\*]/);
    var v1859 = v608.toString();
    v112[v113] = v1859;
    var v114 = geneticCodeMatchResult$$1;
    var v115 = j$$3;
    var v609 = geneticCodeMatchResult$$1[j$$3];
    var v1860 = v609.replace(/=/g, "");
    v114[v115] = v1860;
    j$$3 = j$$3 + 1;
    var v610 = arrayOfPatterns$$4.length;
    v116 = j$$3 < v610
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v611 = sequence$$3.length;
  var v117 = "Results for " + v611;
  var stringToReturn$$2 = v117 + " residue sequence ";
  var v612 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v119 = v612 != -1;
  if(v119) {
    var v613 = stringToReturn$$2 + '"';
    var v118 = v613 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v118 + '"'
  }
  var v614 = stringToReturn$$2 + ' starting "';
  var v615 = sequence$$3.substring(0, 10);
  var v120 = v614 + v615;
  stringToReturn$$2 = v120 + '"';
  var v121 = '<div class="info">' + stringToReturn$$2;
  return v121 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v929 = "Results for " + topology;
  var v616 = v929 + " ";
  var v617 = sequence$$4.length;
  var v122 = v616 + v617;
  var stringToReturn$$3 = v122 + " residue sequence ";
  var v618 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v124 = v618 != -1;
  if(v124) {
    var v619 = stringToReturn$$3 + '"';
    var v123 = v619 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v123 + '"'
  }
  var v620 = stringToReturn$$3 + ' starting "';
  var v621 = sequence$$4.substring(0, 10);
  var v125 = v620 + v621;
  stringToReturn$$3 = v125 + '"';
  var v126 = '<div class="info">' + stringToReturn$$3;
  return v126 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v622 = sequenceOne$$1.length;
  var v127 = "Alignment results for " + v622;
  var stringToReturn$$4 = v127 + " residue sequence ";
  var v623 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v129 = v623 != -1;
  if(v129) {
    var v624 = stringToReturn$$4 + '"';
    var v128 = v624 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v128 + '"'
  }
  var v625 = stringToReturn$$4 + ' starting "';
  var v626 = sequenceOne$$1.substring(0, 10);
  var v130 = v625 + v626;
  stringToReturn$$4 = v130 + '"\n';
  var v627 = stringToReturn$$4 + "and ";
  var v628 = sequenceTwo$$1.length;
  var v131 = v627 + v628;
  stringToReturn$$4 = v131 + " residue sequence ";
  var v629 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v133 = v629 != -1;
  if(v133) {
    var v630 = stringToReturn$$4 + '"';
    var v132 = v630 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v132 + '"'
  }
  var v631 = stringToReturn$$4 + ' starting "';
  var v632 = sequenceTwo$$1.substring(0, 10);
  var v134 = v631 + v632;
  stringToReturn$$4 = v134 + '"';
  var v135 = '<div class="info">' + stringToReturn$$4;
  return v135 + "</div>\n"
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v137 = j$$4 < lengthOut;
  for(;v137;) {
    var v633 = Math.random();
    var v634 = components.length;
    var v136 = v633 * v634;
    tempNum = Math.floor(v136);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4 = j$$4 + 1;
    v137 = j$$4 < lengthOut
  }
  return sequenceArray.join("")
}
function getSequenceFromFasta(sequenceRecord) {
  var v635 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v138 = v635 != -1;
  if(v138) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "")
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v636 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v140 = v636 != -1;
  if(v140) {
    var v139 = sequenceRecord$$1.match(/\>[^\f\n\r]+[\f\n\r]/, "");
    fastaTitle = v139.toString();
    fastaTitle = fastaTitle.replace(/\>|[\f\n\r]/g, "");
    fastaTitle = fastaTitle.replace(/\s{2,}/g, " ");
    fastaTitle = fastaTitle.replace(/[\<\>]/gi, "")
  }
  return fastaTitle
}
function moreExpressionCheck(expressionToCheck) {
  var v930 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v637 = v930 != -1;
  var v932 = !v637;
  if(v932) {
    var v1106 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    var v931 = v1106 != -1;
    var v1108 = !v931;
    if(v1108) {
      var v1236 = expressionToCheck.search(/\[\]/);
      var v1107 = v1236 != -1;
      var v1238 = !v1107;
      if(v1238) {
        var v1326 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
        var v1237 = v1326 != -1;
        var v1328 = !v1237;
        if(v1328) {
          var v1390 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
          var v1327 = v1390 != -1;
          var v1392 = !v1327;
          if(v1392) {
            var v1453 = expressionToCheck.search(/\|\|/);
            var v1391 = v1453 != -1;
            var v1455 = !v1391;
            if(v1455) {
              var v1500 = expressionToCheck.search(/\/\|/);
              var v1454 = v1500 != -1;
              var v1502 = !v1454;
              if(v1502) {
                var v1533 = expressionToCheck.search(/\|\//);
                var v1501 = v1533 != -1;
                var v1535 = !v1501;
                if(v1535) {
                  var v1564 = expressionToCheck.search(/\[.\]/);
                  var v1534 = v1564 != -1;
                  var v1566 = !v1534;
                  if(v1566) {
                    var v1591 = expressionToCheck.search(/\</);
                    var v1565 = v1591 != -1;
                    var v1593 = !v1565;
                    if(v1593) {
                      var v1592 = expressionToCheck.search(/\>/);
                      v1565 = v1592 != -1
                    }
                    v1534 = v1565
                  }
                  v1501 = v1534
                }
                v1454 = v1501
              }
              v1391 = v1454
            }
            v1327 = v1391
          }
          v1237 = v1327
        }
        v1107 = v1237
      }
      v931 = v1107
    }
    v637 = v931
  }
  var v141 = v637;
  if(v141) {
    return false
  }
  return true
}
function openForm() {
  var v142 = outputWindow.document;
  v142.write('<form action="">\n');
  return true
}
function openPre() {
  var v143 = outputWindow.document;
  v143.write("<pre>");
  var v144 = outputWindow.document;
  v144.write('<div class="pre">');
  return
}
function openTextArea() {
  var v145 = outputWindow.document;
  v145.write('<br /><textarea rows="6" cols="61">\n');
  return true
}
function openWindow(title$$5) {
  _openWindow(title$$5, true);
  return
}
function _openWindow(title$$6, isColor) {
  outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  outputWindow.focus();
  var v146 = outputWindow.document;
  var v1109 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v933 = v1109 + "<head>\n";
  var v638 = v933 + "<title>Sequence Manipulation Suite</title>\n";
  var v147 = v638 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v146.write(v147);
  if(isColor) {
    var v148 = outputWindow.document;
    var v1666 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1642 = v1666 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1618 = v1642 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1594 = v1618 + "div.info {font-weight: bold}\n";
    var v1567 = v1594 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1536 = v1567 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v1503 = v1536 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v1456 = v1503 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1393 = v1456 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v1329 = v1393 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v1239 = v1329 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v1110 = v1239 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v934 = v1110 + "td.many {color: #000000}\n";
    var v639 = v934 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v149 = v639 + "</style>\n";
    v148.write(v149)
  }else {
    var v150 = outputWindow.document;
    var v1688 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1667 = v1688 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1643 = v1667 + "div.title {display: none}\n";
    var v1619 = v1643 + "div.info {font-weight: bold}\n";
    var v1595 = v1619 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1568 = v1595 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1537 = v1568 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v1504 = v1537 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1457 = v1504 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1394 = v1457 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1330 = v1394 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v1240 = v1330 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1111 = v1240 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v935 = v1111 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v640 = v935 + "img {display: none}\n";
    var v151 = v640 + "</style>\n";
    v150.write(v151)
  }
  var v152 = outputWindow.document;
  var v1112 = "</head>\n" + '<body class="main">\n';
  var v936 = v1112 + '<div class="title">';
  var v641 = v936 + title$$6;
  var v153 = v641 + " results</div>\n";
  v152.write(v153);
  outputWindow.status = "Please Wait.";
  return true
}
function openWindowAlign(title$$7) {
  _openWindowAlign(title$$7, true);
  return
}
function _openWindowAlign(title$$8, isBackground) {
  outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  outputWindow.focus();
  var v154 = outputWindow.document;
  var v1113 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v937 = v1113 + "<head>\n";
  var v642 = v937 + "<title>Sequence Manipulation Suite</title>\n";
  var v155 = v642 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v154.write(v155);
  if(isBackground) {
    var v156 = outputWindow.document;
    var v1668 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1644 = v1668 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1620 = v1644 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1596 = v1620 + "div.info {font-weight: bold}\n";
    var v1569 = v1596 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v1538 = v1569 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v1505 = v1538 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v1458 = v1505 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v1395 = v1458 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v1331 = v1395 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v1241 = v1331 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v1114 = v1241 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v938 = v1114 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v643 = v938 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v157 = v643 + "</style>\n";
    v156.write(v157)
  }else {
    var v158 = outputWindow.document;
    var v1708 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1689 = v1708 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1669 = v1689 + "div.title {display: none}\n";
    var v1645 = v1669 + "div.info {font-weight: bold}\n";
    var v1621 = v1645 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1597 = v1621 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v1570 = v1597 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v1539 = v1570 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v1506 = v1539 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v1459 = v1506 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v1396 = v1459 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v1332 = v1396 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v1242 = v1332 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v1115 = v1242 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v939 = v1115 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v644 = v939 + "img {display: none}\n";
    var v159 = v644 + "</style>\n";
    v158.write(v159)
  }
  var v160 = outputWindow.document;
  var v1116 = "</head>\n" + '<body class="main">\n';
  var v940 = v1116 + '<div class="title">';
  var v645 = v940 + title$$8;
  var v161 = v645 + " results</div>\n";
  v160.write(v161);
  outputWindow.status = "Please Wait.";
  return true
}
function removeFormatting(sequence$$5) {
  return sequence$$5.replace(/[\d\s]/g, "")
}
function removeNonDna(sequence$$6) {
  return sequence$$6.replace(/[^gatucryswkmbdhvnxGATUCRYSWKMBDHVNX]/g, "")
}
function removeNonDnaStrict(sequence$$7) {
  return sequence$$7.replace(/[^gatucGATUC]/g, "")
}
function removeNonProtein(sequence$$8) {
  return sequence$$8.replace(/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, "")
}
function removeNonProteinStrict(sequence$$9) {
  return sequence$$9.replace(/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, "")
}
function removeNonProteinAllowDegen(sequence$$10) {
  return sequence$$10.replace(/[^ABCDEFGHIKLMNPQRSTVWYXZabcdefghiklmnpqrstvwyxz\*]/g, "")
}
function removeNonProteinAllowX(sequence$$11) {
  return sequence$$11.replace(/[^ACDEFGHIKLMNPQRSTVWYZXacdefghiklmnpqrstvwyzx\*]/g, "")
}
function removeWhiteSpace(text$$9) {
  return text$$9.replace(/\s/g, "")
}
function removeNonLetters(sequence$$12) {
  return sequence$$12.replace(/[^A-Z]/gi, "")
}
function reverse(dnaSequence$$1) {
  var tempDnaArray = new Array;
  var v646 = dnaSequence$$1.search(/./);
  var v162 = v646 != -1;
  if(v162) {
    tempDnaArray = dnaSequence$$1.match(/./g);
    tempDnaArray = tempDnaArray.reverse();
    dnaSequence$$1 = tempDnaArray.join("")
  }
  return dnaSequence$$1
}
function rightNum(theNumber, sequenceToAppend, lengthOfColumn, tabIn) {
  var j$$5 = 0;
  var tempString = "";
  theNumber = theNumber.toString();
  j$$5 = theNumber.length;
  var v163 = j$$5 < lengthOfColumn;
  for(;v163;) {
    tempString = tempString + " ";
    j$$5 = j$$5 + 1;
    v163 = j$$5 < lengthOfColumn
  }
  var v164 = tempString + theNumber;
  theNumber = v164 + " ";
  var v165 = sequenceToAppend + theNumber;
  sequenceToAppend = v165 + tabIn;
  return sequenceToAppend
}
function testScript() {
  function v1(str$$8, p1$$1, offset$$13, s$$3) {
    return p1$$1 + "X"
  }
  var testArray = new Array;
  var testString = "1234567890";
  testArray.push(testString);
  var v647 = testArray[0];
  var v166 = v647 != testString;
  if(v166) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v648 = testString.search(re$$2);
  var v167 = v648 == -1;
  if(v167) {
    alert("Regular expression 'm' flag not supported. See browser compatibility page.");
    return false
  }
  var caughtException = false;
  try {
    re$$2 = eval("Exception handling not supported. Check browser compatibility page.")
  }catch(e$$4) {
    caughtException = true
  }
  var v168 = !caughtException;
  if(v168) {
    alert("Exception handling not supported. See browser compatibility page.")
  }
  testString = "123";
  testString = testString.replace(/(\d)/g, v1);
  var v169 = testString != "1X2X3X";
  if(v169) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false
  }
  var testNum = 2489.8237;
  var v649 = testNum.toFixed(3);
  var v170 = v649 != 2489.824;
  if(v170) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v650 = testNum.toPrecision(5);
  var v171 = v650 != 2489.8;
  if(v171) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v651 = theNumber$$1.search(/\d/);
  var v172 = v651 == -1;
  if(v172) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v941 = emblFile.search(/ID/);
  var v652 = v941 == -1;
  var v943 = !v652;
  if(v943) {
    var v1117 = emblFile.search(/AC/);
    var v942 = v1117 == -1;
    var v1119 = !v942;
    if(v1119) {
      var v1243 = emblFile.search(/DE/);
      var v1118 = v1243 == -1;
      var v1245 = !v1118;
      if(v1245) {
        var v1244 = emblFile.search(/SQ/);
        v1118 = v1244 == -1
      }
      v942 = v1118
    }
    v652 = v942
  }
  var v173 = v652;
  if(v173) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v653 = theNumber$$2.search(/\d/);
  var v174 = v653 == -1;
  if(v174) {
    alert("Please enter a number.");
    return false
  }
  var v176 = theNumber$$2 > maxInput$$2;
  if(v176) {
    var v654 = "Please enter a number less than or equal to " + maxInput$$2;
    var v175 = v654 + ".";
    alert(v175);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v655 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v177 = v655 != -1;
  if(v177) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v656 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v178 = v656 != -1;
  if(v178) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v944 = genBankFile.search(/LOCUS/);
  var v657 = v944 == -1;
  var v946 = !v657;
  if(v946) {
    var v1120 = genBankFile.search(/DEFINITION/);
    var v945 = v1120 == -1;
    var v1122 = !v945;
    if(v1122) {
      var v1246 = genBankFile.search(/ACCESSION/);
      var v1121 = v1246 == -1;
      var v1248 = !v1121;
      if(v1248) {
        var v1247 = genBankFile.search(/ORIGIN/);
        v1121 = v1247 == -1
      }
      v945 = v1121
    }
    v657 = v945
  }
  var v179 = v657;
  if(v179) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v947 = genBankFile$$1.search(/LOCUS/);
  var v658 = v947 == -1;
  var v949 = !v658;
  if(v949) {
    var v1123 = genBankFile$$1.search(/DEFINITION/);
    var v948 = v1123 == -1;
    var v1125 = !v948;
    if(v1125) {
      var v1249 = genBankFile$$1.search(/ACCESSION/);
      var v1124 = v1249 == -1;
      var v1251 = !v1124;
      if(v1251) {
        var v1250 = genBankFile$$1.search(/ORIGIN/);
        v1124 = v1250 == -1
      }
      v948 = v1124
    }
    v658 = v948
  }
  var v180 = v658;
  if(v180) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v659 = genBankFile$$1.search(/FEATURES {13}/);
  var v181 = v659 == -1;
  if(v181) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v950 = emblFile$$1.search(/ID/);
  var v660 = v950 == -1;
  var v952 = !v660;
  if(v952) {
    var v1126 = emblFile$$1.search(/AC/);
    var v951 = v1126 == -1;
    var v1128 = !v951;
    if(v1128) {
      var v1252 = emblFile$$1.search(/DE/);
      var v1127 = v1252 == -1;
      var v1254 = !v1127;
      if(v1254) {
        var v1253 = emblFile$$1.search(/SQ/);
        v1127 = v1253 == -1
      }
      v951 = v1127
    }
    v660 = v951
  }
  var v182 = v660;
  if(v182) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v661 = emblFile$$1.search(/^FT/m);
  var v183 = v661 == -1;
  if(v183) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function writeGroupNum(text$$10, tabIn$$1, groupSize, basePerLine, startBase, stopBase) {
  var i$$5 = parseInt(startBase);
  var k = 0;
  var lineOfText = "";
  var sepChar = " ";
  groupSize = parseInt(groupSize);
  basePerLine = parseInt(basePerLine);
  var v190 = i$$5 < stopBase;
  for(;v190;) {
    var v184 = i$$5 + 1;
    lineOfText = rightNum(v184, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v662 = basePerLine / groupSize;
    var v187 = j$$6 <= v662;
    for(;v187;) {
      var v186 = k < groupSize;
      for(;v186;) {
        var v663 = k + i$$5;
        var v185 = text$$10.charAt(v663);
        lineOfText = lineOfText + v185;
        k = k + 1;
        v186 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v664 = basePerLine / groupSize;
      v187 = j$$6 <= v664
    }
    var v188 = outputWindow.document;
    var v189 = lineOfText + "\n";
    v188.write(v189);
    lineOfText = "";
    v190 = i$$5 < stopBase
  }
  return true
}
function writeGroupNumDna(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition) {
  writeGroupNumDnaSetStart(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition, 0);
  return true
}
function writeGroupNumDnaSetStart(text$$12, tabIn$$3, groupSize$$2, basePerLine$$2, startBase$$2, stopBase$$2, strands$$1, numberPosition$$1, numberingAdjustment) {
  function adjustNumbering(original, adjustment) {
    var adjusted = original + adjustment;
    var v665 = adjustment < 0;
    if(v665) {
      v665 = adjusted >= 0
    }
    var v191 = v665;
    if(v191) {
      adjusted = adjusted + 1
    }
    return adjusted
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
  var v222 = i$$6 < stopBase$$2;
  for(;v222;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v666 = basePerLine$$2 / groupSize$$2;
    var v198 = j$$7 <= v666;
    for(;v198;) {
      var v194 = k$$1 < groupSize$$2;
      for(;v194;) {
        var v667 = i$$6 + k$$1;
        var v192 = v667 >= stopBase$$2;
        if(v192) {
          break
        }
        var v668 = k$$1 + i$$6;
        var v193 = text$$12.charAt(v668);
        lineOfText$$1 = lineOfText$$1 + v193;
        k$$1 = k$$1 + 1;
        v194 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v196 = numberPosition$$1 == "above";
      if(v196) {
        var v669 = adjustNumbering(i$$6, numberingAdjustment);
        var v195 = rightNum(v669, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v195
      }
      var v197 = i$$6 >= stopBase$$2;
      if(v197) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v670 = basePerLine$$2 / groupSize$$2;
      v198 = j$$7 <= v670
    }
    var v221 = numberPosition$$1 == "left";
    if(v221) {
      var v199 = outputWindow.document;
      var v1129 = adjustNumbering(lineNum, numberingAdjustment);
      var v953 = rightNum(v1129, "", 8, tabIn$$3);
      var v671 = v953 + lineOfText$$1;
      var v200 = v671 + "\n";
      v199.write(v200);
      var v204 = strands$$1 == "two";
      if(v204) {
        var v201 = outputWindow.document;
        var v1130 = adjustNumbering(lineNum, numberingAdjustment);
        var v954 = rightNum(v1130, "", 8, tabIn$$3);
        var v955 = complement(lineOfText$$1);
        var v672 = v954 + v955;
        var v202 = v672 + "\n";
        v201.write(v202);
        var v203 = outputWindow.document;
        v203.write("\n")
      }
    }else {
      var v220 = numberPosition$$1 == "right";
      if(v220) {
        var v205 = outputWindow.document;
        var v956 = adjustNumbering(i$$6, numberingAdjustment);
        var v673 = lineOfText$$1 + v956;
        var v206 = v673 + "\n";
        v205.write(v206);
        var v210 = strands$$1 == "two";
        if(v210) {
          var v207 = outputWindow.document;
          var v957 = complement(lineOfText$$1);
          var v958 = adjustNumbering(i$$6, numberingAdjustment);
          var v674 = v957 + v958;
          var v208 = v674 + "\n";
          v207.write(v208);
          var v209 = outputWindow.document;
          v209.write("\n")
        }
      }else {
        var v219 = numberPosition$$1 == "above";
        if(v219) {
          var v211 = outputWindow.document;
          var v212 = aboveNum + "\n";
          v211.write(v212);
          var v213 = outputWindow.document;
          var v214 = lineOfText$$1 + "\n";
          v213.write(v214);
          var v218 = strands$$1 == "two";
          if(v218) {
            var v215 = outputWindow.document;
            var v675 = complement(lineOfText$$1);
            var v216 = v675 + "\n";
            v215.write(v216);
            var v217 = outputWindow.document;
            v217.write("\n")
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v222 = i$$6 < stopBase$$2
  }
  return true
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
  var v241 = i$$7 < stopBase$$3;
  for(;v241;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v676 = basePerLine$$3 / groupSize$$3;
    var v229 = j$$8 <= v676;
    for(;v229;) {
      var v225 = k$$2 < groupSize$$3;
      for(;v225;) {
        var v677 = i$$7 + k$$2;
        var v223 = v677 >= stopBase$$3;
        if(v223) {
          break
        }
        var v678 = k$$2 + i$$7;
        var v224 = text$$13.charAt(v678);
        lineOfText$$2 = lineOfText$$2 + v224;
        k$$2 = k$$2 + 1;
        v225 = k$$2 < groupSize$$3
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v227 = numberPosition$$2 == "above";
      if(v227) {
        var v226 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = aboveNum$$1 + v226
      }
      var v228 = i$$7 >= stopBase$$3;
      if(v228) {
        break
      }
      k$$2 = 0;
      j$$8 = j$$8 + 1;
      var v679 = basePerLine$$3 / groupSize$$3;
      v229 = j$$8 <= v679
    }
    var v240 = numberPosition$$2 == "left";
    if(v240) {
      var v230 = outputWindow.document;
      var v959 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v680 = v959 + lineOfText$$2;
      var v231 = v680 + "\n";
      v230.write(v231)
    }else {
      var v239 = numberPosition$$2 == "right";
      if(v239) {
        var v232 = outputWindow.document;
        var v681 = lineOfText$$2 + i$$7;
        var v233 = v681 + "\n";
        v232.write(v233)
      }else {
        var v238 = numberPosition$$2 == "above";
        if(v238) {
          var v234 = outputWindow.document;
          var v235 = aboveNum$$1 + "\n";
          v234.write(v235);
          var v236 = outputWindow.document;
          var v237 = lineOfText$$2 + "\n";
          v236.write(v237)
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v241 = i$$7 < stopBase$$3
  }
  return true
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
  var v960 = sequence$$13.length;
  var v682 = v960 <= firstIndexToMutate;
  var v962 = !v682;
  if(v962) {
    var v961 = lastIndexToMutate < 0;
    var v1131 = !v961;
    if(v1131) {
      v961 = lastIndexToMutate <= firstIndexToMutate
    }
    v682 = v961
  }
  var v242 = v682;
  if(v242) {
    numMut = 0
  }
  var i$$8 = 0;
  var v250 = i$$8 < numMut;
  for(;v250;) {
    maxNum = sequence$$13.length;
    var v683 = Math.random();
    var v243 = v683 * maxNum;
    randNum = Math.floor(v243);
    var v684 = randNum < firstIndexToMutate;
    var v963 = !v684;
    if(v963) {
      v684 = randNum > lastIndexToMutate
    }
    var v244 = v684;
    if(v244) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v250 = i$$8 < numMut;
      continue
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for(;needNewChar;) {
      var v685 = Math.random();
      var v686 = components$$1.length;
      var v245 = v685 * v686;
      componentsIndex = Math.round(v245);
      var v687 = components$$1.length;
      var v246 = componentsIndex == v687;
      if(v246) {
        componentsIndex = 0
      }
      var v688 = components$$1[componentsIndex];
      var v247 = v688 != currentChar;
      if(v247) {
        needNewChar = false
      }
    }
    var v689 = sequence$$13.substring(0, randNum);
    var v690 = components$$1[componentsIndex];
    var v248 = v689 + v690;
    var v691 = randNum + 1;
    var v692 = sequence$$13.length;
    var v249 = sequence$$13.substring(v691, v692);
    sequence$$13 = v248 + v249;
    i$$8 = i$$8 + 1;
    v250 = i$$8 < numMut
  }
  var v251 = outputWindow.document;
  var v252 = addReturns(sequence$$13);
  v251.write(v252);
  return true
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v257 = j$$9 < lengthOut$$1;
  for(;v257;) {
    var v693 = Math.random();
    var v694 = components$$2.length;
    var v253 = v693 * v694;
    tempNum$$1 = Math.floor(v253);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v695 = sequence$$14.length;
    var v256 = v695 == 60;
    if(v256) {
      var v254 = outputWindow.document;
      var v255 = sequence$$14 + "\n";
      v254.write(v255);
      sequence$$14 = ""
    }
    j$$9 = j$$9 + 1;
    v257 = j$$9 < lengthOut$$1
  }
  var v258 = outputWindow.document;
  var v259 = sequence$$14 + "\n";
  v258.write(v259);
  return true
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
  var v263 = dnaConformation == "circular";
  if(v263) {
    var v260 = sequence$$15.substring(0, lookAhead);
    shiftValue = v260.length;
    var v1132 = sequence$$15.length;
    var v964 = v1132 - lookAhead;
    var v965 = sequence$$15.length;
    var v696 = sequence$$15.substring(v964, v965);
    var v261 = v696 + sequence$$15;
    var v262 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v261 + v262;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v264 = outputWindow.document;
  v264.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  var v265 = outputWindow.document;
  var v1133 = '<tr><td class="title" width="200px">' + "Site:";
  var v966 = v1133 + '</td><td class="title">';
  var v697 = v966 + "Positions:";
  var v266 = v697 + "</td></tr>\n";
  v265.write(v266);
  var i$$9 = 0;
  var v698 = arrayOfItems.length;
  var v282 = i$$9 < v698;
  for(;v282;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v699 = arrayOfItems[i$$9];
    var v267 = v699.match(/\/.+\//);
    matchExp = v267 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    var v1134 = arrayOfItems[i$$9];
    var v967 = v1134.match(/\)\D*\d+/);
    var v700 = v967.toString();
    var v268 = v700.replace(/\)\D*/, "");
    cutDistance = parseFloat(v268);
    var v274 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v274;) {
      var v269 = matchExp.lastIndex;
      matchPosition = v269 - cutDistance;
      var v701 = matchPosition >= lowerLimit;
      if(v701) {
        v701 = matchPosition < upperLimit
      }
      var v272 = v701;
      if(v272) {
        timesFound = timesFound + 1;
        var v270 = tempString$$1 + ", ";
        var v702 = matchPosition - shiftValue;
        var v271 = v702 + 1;
        tempString$$1 = v270 + v271
      }
      var v273 = matchExp;
      var v968 = matchExp.lastIndex;
      var v1135 = RegExp.lastMatch;
      var v969 = v1135.length;
      var v703 = v968 - v969;
      v273.lastIndex = v703 + 1;
      v274 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    var v704 = tempString$$1.search(/\d/);
    var v275 = v704 != -1;
    if(v275) {
      tempString$$1 = tempString$$1.replace(/none,\s*/, "")
    }
    var v279 = timesFound == 0;
    if(v279) {
      backGroundClass = "none"
    }else {
      var v278 = timesFound == 1;
      if(v278) {
        backGroundClass = "one"
      }else {
        var v277 = timesFound == 2;
        if(v277) {
          backGroundClass = "two"
        }else {
          var v276 = timesFound == 3;
          if(v276) {
            backGroundClass = "three"
          }else {
            backGroundClass = "many"
          }
        }
      }
    }
    var v280 = outputWindow.document;
    var v1460 = '<tr><td class="' + backGroundClass;
    var v1397 = v1460 + '">';
    var v1540 = arrayOfItems[i$$9];
    var v1507 = v1540.match(/\([^\(]+\)/);
    var v1461 = v1507.toString();
    var v1398 = v1461.replace(/\(|\)/g, "");
    var v1333 = v1397 + v1398;
    var v1255 = v1333 + '</td><td class="';
    var v1136 = v1255 + backGroundClass;
    var v970 = v1136 + '">';
    var v705 = v970 + tempString$$1;
    var v281 = v705 + "</td></tr>\n";
    v280.write(v281);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v706 = arrayOfItems.length;
    v282 = i$$9 < v706
  }
  var v283 = outputWindow.document;
  v283.write("</tbody></table>\n");
  return true
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v284 = outputWindow.document;
  v284.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  var v285 = outputWindow.document;
  var v1334 = '<tr><td class="title">' + "Pattern:";
  var v1256 = v1334 + '</td><td class="title">';
  var v1137 = v1256 + "Times found:";
  var v971 = v1137 + '</td><td class="title">';
  var v707 = v971 + "Percentage:";
  var v286 = v707 + "</td></tr>\n";
  v285.write(v286);
  var i$$10 = 0;
  var v708 = arrayOfItems$$1.length;
  var v295 = i$$10 < v708;
  for(;v295;) {
    var tempNumber = 0;
    var v709 = arrayOfItems$$1[i$$10];
    var v287 = v709.match(/\/[^\/]+\//);
    var matchExp$$1 = v287 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    var v710 = sequence$$16.search(matchExp$$1);
    var v289 = v710 != -1;
    if(v289) {
      var v288 = sequence$$16.match(matchExp$$1);
      tempNumber = v288.length
    }
    var percentage = 0;
    var v972 = originalLength + 1;
    var v1257 = arrayOfItems$$1[i$$10];
    var v1138 = v1257.match(/\d+/);
    var v973 = parseFloat(v1138);
    var v711 = v972 - v973;
    var v292 = v711 > 0;
    if(v292) {
      var v290 = 100 * tempNumber;
      var v712 = originalLength + 1;
      var v1139 = arrayOfItems$$1[i$$10];
      var v974 = v1139.match(/\d+/);
      var v713 = parseFloat(v974);
      var v291 = v712 - v713;
      percentage = v290 / v291
    }
    var v293 = outputWindow.document;
    var v1541 = arrayOfItems$$1[i$$10];
    var v1508 = v1541.match(/\([^\(]+\)\b/);
    var v1462 = v1508.toString();
    var v1399 = v1462.replace(/\(|\)/g, "");
    var v1335 = "<tr><td>" + v1399;
    var v1258 = v1335 + "</td><td>";
    var v1140 = v1258 + tempNumber;
    var v975 = v1140 + "</td><td>";
    var v976 = percentage.toFixed(2);
    var v714 = v975 + v976;
    var v294 = v714 + "</td></tr>\n";
    v293.write(v294);
    i$$10 = i$$10 + 1;
    var v715 = arrayOfItems$$1.length;
    v295 = i$$10 < v715
  }
  var v296 = outputWindow.document;
  v296.write("</tbody></table>\n");
  return true
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v716 = sequence$$17.length;
  var v303 = v716 > 0;
  for(;v303;) {
    maxNum$$1 = sequence$$17.length;
    var v717 = Math.random();
    var v297 = v717 * maxNum$$1;
    randNum$$1 = Math.floor(v297);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v298 = randNum$$1 + 1;
    var v299 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v298, v299);
    sequence$$17 = tempString1 + tempString2;
    var v718 = tempSeq.length;
    var v302 = v718 == 60;
    if(v302) {
      var v300 = outputWindow.document;
      var v301 = tempSeq + "\n";
      v300.write(v301);
      tempSeq = ""
    }
    var v719 = sequence$$17.length;
    v303 = v719 > 0
  }
  var v304 = outputWindow.document;
  var v305 = tempSeq + "\n";
  v304.write(v305);
  return true
}
function getRestrictionSiteString(type$$25) {
  var v720 = type$$25.toLowerCase();
  var v307 = v720 == "standard";
  if(v307) {
    var v1854 = "/aggcct/ (AatI agg|cct)3," + "/gacgtc/ (AatII gacgt|c)1,";
    var v1853 = v1854 + "/tgcgca/ (Acc16I tgc|gca)3,";
    var v1852 = v1853 + "/cgcg/ (AccII cg|cg)2,";
    var v1851 = v1852 + "/tccgga/ (AccIII t|ccgga)5,";
    var v1850 = v1851 + "/aacgtt/ (AclI aa|cgtt)4,";
    var v1849 = v1850 + "/cacgtg/ (AcvI cac|gtg)3,";
    var v1848 = v1849 + "/gtac/ (AfaI gt|ac)2,";
    var v1847 = v1848 + "/agcgct/ (AfeI agc|gct)3,";
    var v1846 = v1847 + "/cttaag/ (AflII c|ttaag)5,";
    var v1845 = v1846 + "/accggt/ (AgeI a|ccggt)5,";
    var v1844 = v1845 + "/actagt/ (AhlI a|ctagt)5,";
    var v1843 = v1844 + "/gtgcac/ (Alw441 g|tgcac)5,";
    var v1842 = v1843 + "/agct/ (AluI ag|ct)2,";
    var v1841 = v1842 + "/agcgct/ (Aor51HI agc|gct)3,";
    var v1840 = v1841 + "/gggccc/ (ApaI gggcc|c)1,";
    var v1839 = v1840 + "/gtgcac/ (ApaLI g|tgcac)5,";
    var v1838 = v1839 + "/ggcgcgcc/ (AscI gg|cgcgcc)6,";
    var v1837 = v1838 + "/attaat/ (AseI at|taat)4,";
    var v1836 = v1837 + "/ggtacc/ (Asp718I g|gtacc)5,";
    var v1835 = v1836 + "/ttcgaa/ (AsuII tt|cgaa)4,";
    var v1834 = v1835 + "/c[cty]cg[agr]g/ (AvaI c|ycgrg)5,";
    var v1833 = v1834 + "/tgcgca/ (AviII tgc|gca)3,";
    var v1832 = v1833 + "/cctagg/ (AvrII c|ctagg)5,";
    var v1831 = v1832 + "/tggcca/ (BalI tgg|cca)3,";
    var v1830 = v1831 + "/ggatcc/ (BamHI g|gatcc)5,";
    var v1829 = v1830 + "/atcgat/ (BanIII at|cgat)4,";
    var v1828 = v1829 + "/ggcgcc/ (BbeI ggcgc|c)1,";
    var v1827 = v1828 + "/cacgtg/ (BbrPI cac|gtg)3,";
    var v1826 = v1827 + "/gcatgc/ (BbuI gcatg|c)1,";
    var v1825 = v1826 + "/actagt/ (BcuI a|ctagt)5,";
    var v1824 = v1825 + "/tgatca/ (BclI t|gatca)5,";
    var v1823 = v1824 + "/ctag/ (BfaI c|tag)3,";
    var v1822 = v1823 + "/cttaag/ (BfrI c|ttaag)5,";
    var v1821 = v1822 + "/atgcat/ (BfrBI atg|cat)3,";
    var v1820 = v1821 + "/agatct/ (BglII a|gatct)5,";
    var v1819 = v1820 + "/cctagg/ (BlnI c|ctagg)5,";
    var v1818 = v1819 + "/atcgat/ (BseCI at|cgat)4,";
    var v1817 = v1818 + "/gcgcgc/ (BsePI g|cgcgc)5,";
    var v1816 = v1817 + "/cggccg/ (BseX3I c|ggccg)5,";
    var v1815 = v1816 + "/accggt/ (BshTI a|ccggt)5,";
    var v1814 = v1815 + "/tgtaca/ (Bsp1407I t|gtaca)5,";
    var v1813 = v1814 + "/ccatgg/ (Bsp19I c|catgg)5,";
    var v1812 = v1813 + "/atcgat/ (BspDI at|cgat)4,";
    var v1811 = v1812 + "/tccgga/ (BspEI t|ccgga)5,";
    var v1810 = v1811 + "/tgtaca/ (BsrGI t|gtaca)5,";
    var v1809 = v1810 + "/gcgcgc/ (BssHII g|cgcgc)5,";
    var v1808 = v1809 + "/cgcg/ (BstUI cg|cg)2,";
    var v1807 = v1808 + "/atcgat/ (ClaI at|cgat)4,";
    var v1806 = v1807 + "/gatc/ (DpnII |gatc)4,";
    var v1805 = v1806 + "/tttaaa/ (DraI ttt|aaa)3,";
    var v1804 = v1805 + "/cggccg/ (EagI c|ggccg)5,";
    var v1803 = v1804 + "/gaattc/ (EcoRI g|aattc)5,";
    var v1802 = v1803 + "/gatatc/ (EcoRV gat|atc)3,";
    var v1801 = v1802 + "/ggcgcc/ (EgeI ggc|gcc)3,";
    var v1800 = v1801 + "/ggccggcc/ (FseI ggccgg|cc)2,";
    var v1799 = v1800 + "/tgcgca/ (FspI tgc|gca)3,";
    var v1798 = v1799 + "/ggcc/ (HaeIII gg|cc)2,";
    var v1797 = v1798 + "/gt[cty][agr]ac/ (HincII gty|rac)3,";
    var v1796 = v1797 + "/aagctt/ (HindIII a|agctt)5,";
    var v1795 = v1796 + "/ga[acgturyswkmbdhvn]tc/ (HinfI g|antc)4,";
    var v1794 = v1795 + "/gttaac/ (HpaI gtt|aac)3,";
    var v1793 = v1794 + "/ccgg/ (HpaII c|cgg)3,";
    var v1792 = v1793 + "/ggcgcc/ (KasI g|gcgcc)5,";
    var v1791 = v1792 + "/ggtacc/ (KpnI ggtac|c)1,";
    var v1790 = v1791 + "/[acgturyswkmbdhvn]gatc[acgturyswkmbdhvn]/ (MboI |gatc)5,";
    var v1789 = v1790 + "/caattg/ (MfeI c|aattg)5,";
    var v1788 = v1789 + "/acgcgt/ (MluI a|cgcgt)5,";
    var v1787 = v1788 + "/tggcca/ (MscI tgg|cca)3,";
    var v1786 = v1787 + "/ttaa/ (MseI t|taa)3,";
    var v1785 = v1786 + "/ccgg/ (MspI c|cgg)3,";
    var v1784 = v1785 + "/gccggc/ (NaeI gcc|ggc)3,";
    var v1783 = v1784 + "/ggcgcc/ (NarI gg|cgcc)4,";
    var v1782 = v1783 + "/ccatgg/ (NcoI c|catgg)5,";
    var v1781 = v1782 + "/catatg/ (NdeI ca|tatg)4,";
    var v1780 = v1781 + "/gatc/ (NdeII |gatc)4,";
    var v1779 = v1780 + "/gccggc/ (NgoMIV g|ccggc)5,";
    var v1778 = v1779 + "/gctagc/ (NheI g|ctagc)5,";
    var v1777 = v1778 + "/catg/ (NlaIII catg|)0,";
    var v1776 = v1777 + "/gcggccgc/ (NotI gc|ggccgc)6,";
    var v1775 = v1776 + "/tcgcga/ (NruI tcg|cga)3,";
    var v1774 = v1775 + "/atgcat/ (NsiI atgca|t)1,";
    var v1773 = v1774 + "/ttaattaa/ (PacI ttaat|taa)3,";
    var v1772 = v1773 + "/acatgt/ (PciI a|catgt)5,";
    var v1771 = v1772 + "/ggcc/ (PhoI gg|cc)2,";
    var v1770 = v1771 + "/gtttaaac/ (PmeI gttt|aaac)4,";
    var v1769 = v1770 + "/cacgtg/ (PmlI cac|gtg)3,";
    var v1768 = v1769 + "/ttataa/ (PsiI tta|taa)3,";
    var v1767 = v1768 + "/ctgcag/ (PstI ctgca|g)1,";
    var v1766 = v1767 + "/cgatcg/ (PvuI cgat|cg)2,";
    var v1765 = v1766 + "/cagctg/ (PvuII cag|ctg)3,";
    var v1764 = v1765 + "/gtac/ (RsaI gt|ac)2,";
    var v1763 = v1764 + "/gagctc/ (SacI gagct|c)1,";
    var v1745 = v1763 + "/ccgcgg/ (SacII ccgc|gg)2,";
    var v1727 = v1745 + "/gtcgac/ (SalI g|tcgac)5,";
    var v1709 = v1727 + "/cctgcagg/ (SbfI cctgca|gg)2,";
    var v1690 = v1709 + "/agtact/ (ScaI agt|act)3,";
    var v1670 = v1690 + "/ggcgcc/ (SfoI ggc|gcc)3,";
    var v1646 = v1670 + "/cccggg/ (SmaI ccc|ggg)3,";
    var v1622 = v1646 + "/tacgta/ (SnaBI tac|gta)3,";
    var v1598 = v1622 + "/actagt/ (SpeI a|ctagt)5,";
    var v1571 = v1598 + "/gcatgc/ (SphI gcatg|c)1,";
    var v1542 = v1571 + "/aatatt/ (SspI aat|att)3,";
    var v1509 = v1542 + "/gagctc/ (SstI gagct|c)1,";
    var v1463 = v1509 + "/ccgcgg/ (SstII ccgc|gg)2,";
    var v1400 = v1463 + "/aggcct/ (StuI agg|cct)3,";
    var v1336 = v1400 + "/atttaaat/ (SwaI attt|aaat)4,";
    var v1259 = v1336 + "/tcga/ (TaqI t|cga)3,";
    var v1141 = v1259 + "/ctcgag/ (TliI c|tcgag)5,";
    var v977 = v1141 + "/attaat/ (VspI at|taat)4,";
    var v721 = v977 + "/tctaga/ (XbaI t|ctaga)5,";
    var v306 = v721 + "/ctcgag/ (XhoI c|tcgag)5,";
    return v306 + "/cccggg/ (XmaI c|ccggg)5"
  }
  return true
}
function getGeneticCodeString(type$$26) {
  var v978 = type$$26.toLowerCase();
  var v722 = v978 == "standard";
  var v980 = !v722;
  if(v980) {
    var v979 = type$$26.toLowerCase();
    v722 = v979 == "transl_table=1"
  }
  var v309 = v722;
  if(v309) {
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
    var v1401 = v1464 + "/ca[agr]/=Q,";
    var v1337 = v1401 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1260 = v1337 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1142 = v1260 + "/ac[acgturyswkmbdhvn]/=T,";
    var v981 = v1142 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v723 = v981 + "/[tu]gg/=W,";
    var v308 = v723 + "/[tu]a[ctuy]/=Y,";
    return v308 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*"
  }
  var v724 = type$$26.toLowerCase();
  var v311 = v724 == "transl_table=2";
  if(v311) {
    var v1747 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1729 = v1747 + "/ga[tcuy]/=D,";
    var v1711 = v1729 + "/ga[agr]/=E,";
    var v1692 = v1711 + "/[tu][tu][tcuy]/=F,";
    var v1672 = v1692 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1648 = v1672 + "/ca[tcuy]/=H,";
    var v1624 = v1648 + "/a[tu][tcuy]/=I,";
    var v1600 = v1624 + "/aa[agr]/=K,";
    var v1573 = v1600 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1544 = v1573 + "/a[tu][agr]/=M,";
    var v1511 = v1544 + "/aa[tucy]/=N,";
    var v1465 = v1511 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1402 = v1465 + "/ca[agr]/=Q,";
    var v1338 = v1402 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1261 = v1338 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1143 = v1261 + "/ac[acgturyswkmbdhvn]/=T,";
    var v982 = v1143 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v725 = v982 + "/[tu]g[agr]/=W,";
    var v310 = v725 + "/[tu]a[ctuy]/=Y,";
    return v310 + "/[tu]a[agr]|ag[agr]/=*"
  }
  var v726 = type$$26.toLowerCase();
  var v313 = v726 == "transl_table=3";
  if(v313) {
    var v1748 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1730 = v1748 + "/ga[tcuy]/=D,";
    var v1712 = v1730 + "/ga[agr]/=E,";
    var v1693 = v1712 + "/[tu][tu][tcuy]/=F,";
    var v1673 = v1693 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1649 = v1673 + "/ca[tcuy]/=H,";
    var v1625 = v1649 + "/a[tu][tcuy]/=I,";
    var v1601 = v1625 + "/aa[agr]/=K,";
    var v1574 = v1601 + "/[tu][tu][agr]/=L,";
    var v1545 = v1574 + "/a[tu][agr]/=M,";
    var v1512 = v1545 + "/aa[tucy]/=N,";
    var v1466 = v1512 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1403 = v1466 + "/ca[agr]/=Q,";
    var v1339 = v1403 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1262 = v1339 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1144 = v1262 + "/ac[acgturyswkmbdhvn]|c[tu][acgturyswkmbdhvn]/=T,";
    var v983 = v1144 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v727 = v983 + "/[tu]g[agr]/=W,";
    var v312 = v727 + "/[tu]a[ctuy]/=Y,";
    return v312 + "/[tu]a[agr]/=*"
  }
  var v728 = type$$26.toLowerCase();
  var v315 = v728 == "transl_table=4";
  if(v315) {
    var v1749 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1731 = v1749 + "/ga[tcuy]/=D,";
    var v1713 = v1731 + "/ga[agr]/=E,";
    var v1694 = v1713 + "/[tu][tu][tcuy]/=F,";
    var v1674 = v1694 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1650 = v1674 + "/ca[tcuy]/=H,";
    var v1626 = v1650 + "/a[tu][atcuwmhy]/=I,";
    var v1602 = v1626 + "/aa[agr]/=K,";
    var v1575 = v1602 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1546 = v1575 + "/a[tu]g/=M,";
    var v1513 = v1546 + "/aa[tucy]/=N,";
    var v1467 = v1513 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1404 = v1467 + "/ca[agr]/=Q,";
    var v1340 = v1404 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1263 = v1340 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1145 = v1263 + "/ac[acgturyswkmbdhvn]/=T,";
    var v984 = v1145 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v729 = v984 + "/[tu]g[agr]/=W,";
    var v314 = v729 + "/[tu]a[ctuy]/=Y,";
    return v314 + "/[tu]a[agr]/=*"
  }
  var v730 = type$$26.toLowerCase();
  var v317 = v730 == "transl_table=5";
  if(v317) {
    var v1750 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1732 = v1750 + "/ga[tcuy]/=D,";
    var v1714 = v1732 + "/ga[agr]/=E,";
    var v1695 = v1714 + "/[tu][tu][tcuy]/=F,";
    var v1675 = v1695 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1651 = v1675 + "/ca[tcuy]/=H,";
    var v1627 = v1651 + "/a[tu][tcuy]/=I,";
    var v1603 = v1627 + "/aa[agr]/=K,";
    var v1576 = v1603 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1547 = v1576 + "/a[tu][agr]/=M,";
    var v1514 = v1547 + "/aa[tucy]/=N,";
    var v1468 = v1514 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1405 = v1468 + "/ca[agr]/=Q,";
    var v1341 = v1405 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1264 = v1341 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v1146 = v1264 + "/ac[acgturyswkmbdhvn]/=T,";
    var v985 = v1146 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v731 = v985 + "/[tu]g[agr]/=W,";
    var v316 = v731 + "/[tu]a[ctuy]/=Y,";
    return v316 + "/[tu]a[agr]/=*"
  }
  var v732 = type$$26.toLowerCase();
  var v319 = v732 == "transl_table=6";
  if(v319) {
    var v1751 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1733 = v1751 + "/ga[tcuy]/=D,";
    var v1715 = v1733 + "/ga[agr]/=E,";
    var v1696 = v1715 + "/[tu][tu][tcuy]/=F,";
    var v1676 = v1696 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1652 = v1676 + "/ca[tcuy]/=H,";
    var v1628 = v1652 + "/a[tu][atcuwmhy]/=I,";
    var v1604 = v1628 + "/aa[agr]/=K,";
    var v1577 = v1604 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1548 = v1577 + "/a[tu]g/=M,";
    var v1515 = v1548 + "/aa[tucy]/=N,";
    var v1469 = v1515 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1406 = v1469 + "/ca[agr]|[tu]a[agr]|[tcuy]a[agr]/=Q,";
    var v1342 = v1406 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1265 = v1342 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1147 = v1265 + "/ac[acgturyswkmbdhvn]/=T,";
    var v986 = v1147 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v733 = v986 + "/[tu]gg/=W,";
    var v318 = v733 + "/[tu]a[ctuy]/=Y,";
    return v318 + "/[tu]ga/=*"
  }
  var v734 = type$$26.toLowerCase();
  var v321 = v734 == "transl_table=9";
  if(v321) {
    var v1752 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1734 = v1752 + "/ga[tcuy]/=D,";
    var v1716 = v1734 + "/ga[agr]/=E,";
    var v1697 = v1716 + "/[tu][tu][tcuy]/=F,";
    var v1677 = v1697 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1653 = v1677 + "/ca[tcuy]/=H,";
    var v1629 = v1653 + "/a[tu][atcuwmhy]/=I,";
    var v1605 = v1629 + "/aag/=K,";
    var v1578 = v1605 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1549 = v1578 + "/a[tu]g/=M,";
    var v1516 = v1549 + "/aa[atcuwmhy]/=N,";
    var v1470 = v1516 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1407 = v1470 + "/ca[agr]/=Q,";
    var v1343 = v1407 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1266 = v1343 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v1148 = v1266 + "/ac[acgturyswkmbdhvn]/=T,";
    var v987 = v1148 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v735 = v987 + "/[tu]g[agr]/=W,";
    var v320 = v735 + "/[tu]a[ctuy]/=Y,";
    return v320 + "/[tu]a[agr]/=*"
  }
  var v736 = type$$26.toLowerCase();
  var v323 = v736 == "transl_table=10";
  if(v323) {
    var v1753 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[atcuwmhy]/=C,";
    var v1735 = v1753 + "/ga[tcuy]/=D,";
    var v1717 = v1735 + "/ga[agr]/=E,";
    var v1698 = v1717 + "/[tu][tu][tcuy]/=F,";
    var v1678 = v1698 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1654 = v1678 + "/ca[tcuy]/=H,";
    var v1630 = v1654 + "/a[tu][atcuwmhy]/=I,";
    var v1606 = v1630 + "/aa[agr]/=K,";
    var v1579 = v1606 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1550 = v1579 + "/a[tu]g/=M,";
    var v1517 = v1550 + "/aa[tucy]/=N,";
    var v1471 = v1517 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1408 = v1471 + "/ca[agr]/=Q,";
    var v1344 = v1408 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1267 = v1344 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1149 = v1267 + "/ac[acgturyswkmbdhvn]/=T,";
    var v988 = v1149 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v737 = v988 + "/[tu]gg/=W,";
    var v322 = v737 + "/[tu]a[ctuy]/=Y,";
    return v322 + "/[tu]a[agr]/=*"
  }
  var v738 = type$$26.toLowerCase();
  var v325 = v738 == "transl_table=11";
  if(v325) {
    var v1754 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1736 = v1754 + "/ga[tcuy]/=D,";
    var v1718 = v1736 + "/ga[agr]/=E,";
    var v1699 = v1718 + "/[tu][tu][tcuy]/=F,";
    var v1679 = v1699 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1655 = v1679 + "/ca[tcuy]/=H,";
    var v1631 = v1655 + "/a[tu][atcuwmhy]/=I,";
    var v1607 = v1631 + "/aa[agr]/=K,";
    var v1580 = v1607 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1551 = v1580 + "/a[tu]g/=M,";
    var v1518 = v1551 + "/aa[tucy]/=N,";
    var v1472 = v1518 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1409 = v1472 + "/ca[agr]/=Q,";
    var v1345 = v1409 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1268 = v1345 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1150 = v1268 + "/ac[acgturyswkmbdhvn]/=T,";
    var v989 = v1150 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v739 = v989 + "/[tu]gg/=W,";
    var v324 = v739 + "/[tu]a[ctuy]/=Y,";
    return v324 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*"
  }
  var v740 = type$$26.toLowerCase();
  var v327 = v740 == "transl_table=12";
  if(v327) {
    var v1755 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1737 = v1755 + "/ga[tcuy]/=D,";
    var v1719 = v1737 + "/ga[agr]/=E,";
    var v1700 = v1719 + "/[tu][tu][tcuy]/=F,";
    var v1680 = v1700 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1656 = v1680 + "/ca[tcuy]/=H,";
    var v1632 = v1656 + "/a[tu][atcuwmhy]/=I,";
    var v1608 = v1632 + "/aa[agr]/=K,";
    var v1581 = v1608 + "/c[tu][atcuwmhy]|[tu][tu][agr]|[ctuy][tu]a/=L,";
    var v1552 = v1581 + "/a[tu]g/=M,";
    var v1519 = v1552 + "/aa[tucy]/=N,";
    var v1473 = v1519 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1410 = v1473 + "/ca[agr]/=Q,";
    var v1346 = v1410 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1269 = v1346 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]|c[tu]g/=S,";
    var v1151 = v1269 + "/ac[acgturyswkmbdhvn]/=T,";
    var v990 = v1151 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v741 = v990 + "/[tu]gg/=W,";
    var v326 = v741 + "/[tu]a[ctuy]/=Y,";
    return v326 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*"
  }
  var v742 = type$$26.toLowerCase();
  var v329 = v742 == "transl_table=13";
  if(v329) {
    var v1756 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1738 = v1756 + "/ga[tcuy]/=D,";
    var v1720 = v1738 + "/ga[agr]/=E,";
    var v1701 = v1720 + "/[tu][tu][tcuy]/=F,";
    var v1681 = v1701 + "/gg[acgturyswkmbdhvn]|ag[agr]|[agr]g[agr]/=G,";
    var v1657 = v1681 + "/ca[tcuy]/=H,";
    var v1633 = v1657 + "/a[tu][tcuy]/=I,";
    var v1609 = v1633 + "/aa[agr]/=K,";
    var v1582 = v1609 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1553 = v1582 + "/a[tu][agr]/=M,";
    var v1520 = v1553 + "/aa[tucy]/=N,";
    var v1474 = v1520 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1411 = v1474 + "/ca[agr]/=Q,";
    var v1347 = v1411 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1270 = v1347 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1152 = v1270 + "/ac[acgturyswkmbdhvn]/=T,";
    var v991 = v1152 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v743 = v991 + "/[tu]g[agr]/=W,";
    var v328 = v743 + "/[tu]a[ctuy]/=Y,";
    return v328 + "/[tu]a[agr]/=*"
  }
  var v744 = type$$26.toLowerCase();
  var v331 = v744 == "transl_table=14";
  if(v331) {
    var v1757 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1739 = v1757 + "/ga[tcuy]/=D,";
    var v1721 = v1739 + "/ga[agr]/=E,";
    var v1702 = v1721 + "/[tu][tu][tcuy]/=F,";
    var v1682 = v1702 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1658 = v1682 + "/ca[tcuy]/=H,";
    var v1634 = v1658 + "/a[tu][atcuwmhy]/=I,";
    var v1610 = v1634 + "/aag/=K,";
    var v1583 = v1610 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1554 = v1583 + "/a[tu]g/=M,";
    var v1521 = v1554 + "/aa[atcuwmhy]/=N,";
    var v1475 = v1521 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1412 = v1475 + "/ca[agr]/=Q,";
    var v1348 = v1412 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1271 = v1348 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v1153 = v1271 + "/ac[acgturyswkmbdhvn]/=T,";
    var v992 = v1153 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v745 = v992 + "/[tu]g[agr]/=W,";
    var v330 = v745 + "/[tu]a[atcuwmhy]/=Y,";
    return v330 + "/[tu]ag/=*"
  }
  var v746 = type$$26.toLowerCase();
  var v333 = v746 == "transl_table=15";
  if(v333) {
    var v1758 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1740 = v1758 + "/ga[tcuy]/=D,";
    var v1722 = v1740 + "/ga[agr]/=E,";
    var v1703 = v1722 + "/[tu][tu][tcuy]/=F,";
    var v1683 = v1703 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1659 = v1683 + "/ca[tcuy]/=H,";
    var v1635 = v1659 + "/a[tu][atcuwmhy]/=I,";
    var v1611 = v1635 + "/aa[agr]/=K,";
    var v1584 = v1611 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1555 = v1584 + "/a[tu]g/=M,";
    var v1522 = v1555 + "/aa[tucy]/=N,";
    var v1476 = v1522 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1413 = v1476 + "/ca[agr]|[tu]ag|[tcuy]ag/=Q,";
    var v1349 = v1413 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1272 = v1349 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1154 = v1272 + "/ac[acgturyswkmbdhvn]/=T,";
    var v993 = v1154 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v747 = v993 + "/[tu]gg/=W,";
    var v332 = v747 + "/[tu]a[ctuy]/=Y,";
    return v332 + "/[tu][agr]a/=*"
  }
  var v748 = type$$26.toLowerCase();
  var v335 = v748 == "transl_table=16";
  if(v335) {
    var v1759 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1741 = v1759 + "/ga[tcuy]/=D,";
    var v1723 = v1741 + "/ga[agr]/=E,";
    var v1704 = v1723 + "/[tu][tu][tcuy]/=F,";
    var v1684 = v1704 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1660 = v1684 + "/ca[tcuy]/=H,";
    var v1636 = v1660 + "/a[tu][atcuwmhy]/=I,";
    var v1612 = v1636 + "/aa[agr]/=K,";
    var v1585 = v1612 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]|[tu]ag|[tu][atuw]g/=L,";
    var v1556 = v1585 + "/a[tu]g/=M,";
    var v1523 = v1556 + "/aa[tucy]/=N,";
    var v1477 = v1523 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1414 = v1477 + "/ca[agr]/=Q,";
    var v1350 = v1414 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1273 = v1350 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1155 = v1273 + "/ac[acgturyswkmbdhvn]/=T,";
    var v994 = v1155 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v749 = v994 + "/[tu]gg/=W,";
    var v334 = v749 + "/[tu]a[ctuy]/=Y,";
    return v334 + "/[tu][agr]a/=*"
  }
  var v750 = type$$26.toLowerCase();
  var v337 = v750 == "transl_table=21";
  if(v337) {
    var v1760 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1742 = v1760 + "/ga[tcuy]/=D,";
    var v1724 = v1742 + "/ga[agr]/=E,";
    var v1705 = v1724 + "/[tu][tu][tcuy]/=F,";
    var v1685 = v1705 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1661 = v1685 + "/ca[tcuy]/=H,";
    var v1637 = v1661 + "/a[tu][tcuy]/=I,";
    var v1613 = v1637 + "/aag/=K,";
    var v1586 = v1613 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1557 = v1586 + "/a[tu][agr]/=M,";
    var v1524 = v1557 + "/aa[atcuwmhy]/=N,";
    var v1478 = v1524 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1415 = v1478 + "/ca[agr]/=Q,";
    var v1351 = v1415 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1274 = v1351 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v1156 = v1274 + "/ac[acgturyswkmbdhvn]/=T,";
    var v995 = v1156 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v751 = v995 + "/[tu]g[agr]/=W,";
    var v336 = v751 + "/[tu]a[ctuy]/=Y,";
    return v336 + "/[tu]a[agr]/=*"
  }
  var v752 = type$$26.toLowerCase();
  var v339 = v752 == "transl_table=22";
  if(v339) {
    var v1761 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1743 = v1761 + "/ga[tcuy]/=D,";
    var v1725 = v1743 + "/ga[agr]/=E,";
    var v1706 = v1725 + "/[tu][tu][tcuy]/=F,";
    var v1686 = v1706 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1662 = v1686 + "/ca[tcuy]/=H,";
    var v1638 = v1662 + "/a[tu][atcuwmhy]/=I,";
    var v1614 = v1638 + "/aa[agr]/=K,";
    var v1587 = v1614 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]|[tu]ag|[tu][atuw]g/=L,";
    var v1558 = v1587 + "/a[tu]g/=M,";
    var v1525 = v1558 + "/aa[tucy]/=N,";
    var v1479 = v1525 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1416 = v1479 + "/ca[agr]/=Q,";
    var v1352 = v1416 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1275 = v1352 + "/[tu]c[cgtyskb]|ag[ct]/=S,";
    var v1157 = v1275 + "/ac[acgturyswkmbdhvn]/=T,";
    var v996 = v1157 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v753 = v996 + "/[tu]gg/=W,";
    var v338 = v753 + "/[tu]a[ctuy]/=Y,";
    return v338 + "/[tu][agcrsmv]a/=*"
  }
  var v754 = type$$26.toLowerCase();
  var v341 = v754 == "transl_table=23";
  if(v341) {
    var v1762 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1744 = v1762 + "/ga[tcuy]/=D,";
    var v1726 = v1744 + "/ga[agr]/=E,";
    var v1707 = v1726 + "/[tu][tu][tcuy]/=F,";
    var v1687 = v1707 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1663 = v1687 + "/ca[tcuy]/=H,";
    var v1639 = v1663 + "/a[tu][atcuwmhy]/=I,";
    var v1615 = v1639 + "/aa[agr]/=K,";
    var v1588 = v1615 + "/c[tu][acgturyswkmbdhvn]|[ctuy][tu]g/=L,";
    var v1559 = v1588 + "/a[tu]g/=M,";
    var v1526 = v1559 + "/aa[tucy]/=N,";
    var v1480 = v1526 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1417 = v1480 + "/ca[agr]/=Q,";
    var v1353 = v1417 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1276 = v1353 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1158 = v1276 + "/ac[acgturyswkmbdhvn]/=T,";
    var v997 = v1158 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v755 = v997 + "/[tu]gg/=W,";
    var v340 = v755 + "/[tu]a[ctuy]/=Y,";
    return v340 + "/[tu]a[agr]|[tu]ga|[tu][agtrwkd]a/=*"
  }
  return true
}
function primerMap(theDocument) {
  JAM.startProfile('compute');

  var newDna = "";
  var title$$9 = "";
  var maxInput$$3 = 2E5;
  var v756 = testScript();
  var v342 = v756 == false;
  if(v342) {
    return false
  }
  var restrictionSiteCollection;
  var forwardMatches;
  var reverseMatches;
  var v1418 = theDocument.forms;
  var v1354 = v1418[0];
  var v1277 = v1354.elements;
  var v1159 = v1277[7];
  var v998 = v1159.options;
  var v1419 = theDocument.forms;
  var v1355 = v1419[0];
  var v1278 = v1355.elements;
  var v1160 = v1278[7];
  var v999 = v1160.selectedIndex;
  var v757 = v998[v999];
  var v343 = v757.value;
  var geneticCode = getGeneticCodeString(v343);
  var restrictionSites = getRestrictionSiteString("standard");
  var v1420 = theDocument.forms;
  var v1356 = v1420[0];
  var v1279 = v1356.elements;
  var v1161 = v1279[0];
  var v1000 = checkFormElement(v1161);
  var v758 = v1000 == false;
  var v1002 = !v758;
  if(v1002) {
    var v1481 = theDocument.forms;
    var v1421 = v1481[0];
    var v1357 = v1421.elements;
    var v1280 = v1357[0];
    var v1162 = v1280.value;
    var v1001 = checkSequenceLength(v1162, maxInput$$3);
    v758 = v1001 == false
  }
  var v344 = v758;
  if(v344) {
    return false
  }
  geneticCode = geneticCode.split(/,/);
  var v759 = checkGeneticCode(geneticCode);
  var v345 = v759 == false;
  if(v345) {
    return false
  }
  restrictionSites = restrictionSites.split(/,/);
  var v760 = checkRestPatterns(restrictionSites);
  var v346 = v760 == false;
  if(v346) {
    return false
  }
  var isColor$$1;
  var v1482 = theDocument.forms;
  var v1422 = v1482[0];
  var v1358 = v1422.elements;
  var v1281 = v1358[10];
  var v1163 = v1281.options;
  var v1483 = theDocument.forms;
  var v1423 = v1483[0];
  var v1359 = v1423.elements;
  var v1282 = v1359[10];
  var v1164 = v1282.selectedIndex;
  var v1003 = v1163[v1164];
  var v761 = v1003.value;
  var v347 = v761 == "color";
  if(v347) {
    isColor$$1 = true
  }else {
    isColor$$1 = false
  }
  var v1283 = theDocument.forms;
  var v1165 = v1283[0];
  var v1004 = v1165.elements;
  var v762 = v1004[1];
  var v348 = v762.value;
  var primers = v348.split(/,/);
  var newPrimers = new Array;
  var primerSeq;
  var primerRe;
  var primerName;
  var matchArray$$2;
  var re$$3 = /\(([^\(]+)\)\s*([A-Za-z]+)/;
  var i$$11 = 0;
  var v763 = primers.length;
  var v353 = i$$11 < v763;
  for(;v353;) {
    var v764 = primers[i$$11];
    var v352 = matchArray$$2 = re$$3.exec(v764);
    if(v352) {
      primerName = matchArray$$2[1];
      var v1005 = matchArray$$2[2];
      var v765 = v1005.length;
      var v349 = v765 < 10;
      if(v349) {
        alert("Please enter primer sequences that are at least 10 bases long.");
        return false
      }
      primerSeq = matchArray$$2[2];
      var v1006 = convertDegenerates(primerSeq);
      var v766 = "/" + v1006;
      var v350 = v766 + "/gi";
      primerRe = eval(v350);
      var v351 = new Primer(primerSeq, primerRe, primerName);
      newPrimers.push(v351)
    }
    i$$11 = i$$11 + 1;
    var v767 = primers.length;
    v353 = i$$11 < v767
  }
  _openWindow("Primer Map", isColor$$1);
  var v1484 = theDocument.forms;
  var v1424 = v1484[0];
  var v1360 = v1424.elements;
  var v1284 = v1360[8];
  var v1166 = v1284.options;
  var v1485 = theDocument.forms;
  var v1425 = v1485[0];
  var v1361 = v1425.elements;
  var v1285 = v1361[8];
  var v1167 = v1285.selectedIndex;
  var v1007 = v1166[v1167];
  var v768 = v1007.value;
  var v364 = v768 == "shown";
  if(v364) {
    var v354 = outputWindow.document;
    var v769 = '<span class="one">' + "cuts once";
    var v355 = v769 + "</span><br />\n";
    v354.write(v355);
    var v356 = outputWindow.document;
    var v770 = '<span class="two">' + "cuts twice";
    var v357 = v770 + "</span><br />\n";
    v356.write(v357);
    var v358 = outputWindow.document;
    v358.write("\n");
    var v359 = outputWindow.document;
    var v771 = '<span class="forward_primer">' + "&gt;&gt;&gt;forward primer";
    var v360 = v771 + "</span><br />\n";
    v359.write(v360);
    var v361 = outputWindow.document;
    var v772 = '<span class="reverse_primer">' + "&lt;&lt;&lt;reverse primer";
    var v362 = v772 + "</span><br />\n";
    v361.write(v362);
    var v363 = outputWindow.document;
    v363.write("\n")
  }
  var v1286 = theDocument.forms;
  var v1168 = v1286[0];
  var v1008 = v1168.elements;
  var v773 = v1008[0];
  var v365 = v773.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v365);
  i$$11 = 0;
  var v774 = arrayOfFasta$$1.length;
  var v399 = i$$11 < v774;
  for(;v399;) {
    var v366 = arrayOfFasta$$1[i$$11];
    newDna = getSequenceFromFasta(v366);
    var v367 = arrayOfFasta$$1[i$$11];
    title$$9 = getTitleFromFasta(v367);
    newDna = removeNonDna(newDna);
    openPre();
    var v368 = outputWindow.document;
    var v1486 = theDocument.forms;
    var v1426 = v1486[0];
    var v1362 = v1426.elements;
    var v1287 = v1362[9];
    var v1169 = v1287.options;
    var v1487 = theDocument.forms;
    var v1427 = v1487[0];
    var v1363 = v1427.elements;
    var v1288 = v1363[9];
    var v1170 = v1288.selectedIndex;
    var v1009 = v1169[v1170];
    var v775 = v1009.value;
    var v369 = getInfoFromTitleAndSequenceAndTopology(title$$9, newDna, v775);
    v368.write(v369);
    var v1488 = theDocument.forms;
    var v1428 = v1488[0];
    var v1364 = v1428.elements;
    var v1289 = v1364[8];
    var v1171 = v1289.options;
    var v1489 = theDocument.forms;
    var v1429 = v1489[0];
    var v1365 = v1429.elements;
    var v1290 = v1365[8];
    var v1172 = v1290.selectedIndex;
    var v1010 = v1171[v1172];
    var v776 = v1010.value;
    var v371 = v776 == "shown";
    if(v371) {
      var v1430 = theDocument.forms;
      var v1366 = v1430[0];
      var v1291 = v1366.elements;
      var v1173 = v1291[9];
      var v1011 = v1173.options;
      var v1431 = theDocument.forms;
      var v1367 = v1431[0];
      var v1292 = v1367.elements;
      var v1174 = v1292[9];
      var v1012 = v1174.selectedIndex;
      var v777 = v1011[v1012];
      var v370 = v777.value;
      restrictionSiteCollection = findRestrictionSites(newDna, restrictionSites, v370);
      restrictionSiteCollection.sortRestrictionSites()
    }
    var v1432 = theDocument.forms;
    var v1368 = v1432[0];
    var v1293 = v1368.elements;
    var v1175 = v1293[9];
    var v1013 = v1175.options;
    var v1433 = theDocument.forms;
    var v1369 = v1433[0];
    var v1294 = v1369.elements;
    var v1176 = v1294[9];
    var v1014 = v1176.selectedIndex;
    var v778 = v1013[v1014];
    var v372 = v778.value;
    forwardMatches = findMatches(newPrimers, newDna, v372, false);
    var v779 = complement(newDna);
    var v373 = reverse(v779);
    var v1434 = theDocument.forms;
    var v1370 = v1434[0];
    var v1295 = v1370.elements;
    var v1177 = v1295[9];
    var v1015 = v1177.options;
    var v1435 = theDocument.forms;
    var v1371 = v1435[0];
    var v1296 = v1371.elements;
    var v1178 = v1296[9];
    var v1016 = v1178.selectedIndex;
    var v780 = v1015[v1016];
    var v374 = v780.value;
    reverseMatches = findMatches(newPrimers, v373, v374, true);
    var j$$10 = 0;
    var v1017 = forwardMatches.matches;
    var v781 = v1017.length;
    var v381 = j$$10 < v781;
    for(;v381;) {
      var v782 = forwardMatches.matches;
      var v375 = v782[j$$10];
      var v1179 = forwardMatches.matches;
      var v1018 = v1179[j$$10];
      var v783 = v1018.position;
      var v1297 = forwardMatches.matches;
      var v1180 = v1297[j$$10];
      var v1019 = v1180.matchingText;
      var v784 = v1019.length;
      v375.position = v783 - v784;
      var v785 = forwardMatches.matches;
      var v376 = v785[j$$10];
      var v1181 = forwardMatches.matches;
      var v1020 = v1181[j$$10];
      var v786 = v1020.position;
      var v1298 = forwardMatches.matches;
      var v1182 = v1298[j$$10];
      var v1021 = v1182.matchingText;
      var v787 = v1021.length;
      v376.end = v786 + v787;
      var v1183 = forwardMatches.matches;
      var v1022 = v1183[j$$10];
      var v788 = v1022.position;
      var v378 = v788 < 0;
      if(v378) {
        var v789 = forwardMatches.matches;
        var v377 = v789[j$$10];
        var v1184 = forwardMatches.matches;
        var v1023 = v1184[j$$10];
        var v790 = v1023.position;
        var v791 = newDna.length;
        v377.position = v790 + v791
      }
      var v1185 = forwardMatches.matches;
      var v1024 = v1185[j$$10];
      var v792 = v1024.end;
      var v793 = newDna.length;
      var v380 = v792 > v793;
      if(v380) {
        var v794 = forwardMatches.matches;
        var v379 = v794[j$$10];
        var v1186 = forwardMatches.matches;
        var v1025 = v1186[j$$10];
        var v795 = v1025.end;
        var v796 = newDna.length;
        v379.end = v795 - v796
      }
      j$$10 = j$$10 + 1;
      var v1026 = forwardMatches.matches;
      var v797 = v1026.length;
      v381 = j$$10 < v797
    }
    j$$10 = 0;
    var v1027 = reverseMatches.matches;
    var v798 = v1027.length;
    var v388 = j$$10 < v798;
    for(;v388;) {
      var v799 = reverseMatches.matches;
      var v382 = v799[j$$10];
      var v800 = newDna.length;
      var v1187 = reverseMatches.matches;
      var v1028 = v1187[j$$10];
      var v801 = v1028.position;
      v382.position = v800 - v801;
      var v802 = reverseMatches.matches;
      var v383 = v802[j$$10];
      var v1188 = reverseMatches.matches;
      var v1029 = v1188[j$$10];
      var v803 = v1029.position;
      var v1299 = reverseMatches.matches;
      var v1189 = v1299[j$$10];
      var v1030 = v1189.matchingText;
      var v804 = v1030.length;
      v383.end = v803 + v804;
      var v1190 = reverseMatches.matches;
      var v1031 = v1190[j$$10];
      var v805 = v1031.position;
      var v385 = v805 < 0;
      if(v385) {
        var v806 = reverseMatches.matches;
        var v384 = v806[j$$10];
        var v1191 = reverseMatches.matches;
        var v1032 = v1191[j$$10];
        var v807 = v1032.position;
        var v808 = newDna.length;
        v384.position = v807 + v808
      }
      var v1192 = reverseMatches.matches;
      var v1033 = v1192[j$$10];
      var v809 = v1033.end;
      var v810 = newDna.length;
      var v387 = v809 > v810;
      if(v387) {
        var v811 = reverseMatches.matches;
        var v386 = v811[j$$10];
        var v1193 = reverseMatches.matches;
        var v1034 = v1193[j$$10];
        var v812 = v1034.end;
        var v813 = newDna.length;
        v386.end = v812 - v813
      }
      j$$10 = j$$10 + 1;
      var v1035 = reverseMatches.matches;
      var v814 = v1035.length;
      v388 = j$$10 < v814
    }
    forwardMatches.sortMatches();
    reverseMatches.sortMatches();
    var v1436 = theDocument.forms;
    var v1372 = v1436[0];
    var v1300 = v1372.elements;
    var v1194 = v1300[5];
    var v1036 = v1194.options;
    var v1437 = theDocument.forms;
    var v1373 = v1437[0];
    var v1301 = v1373.elements;
    var v1195 = v1301[5];
    var v1037 = v1195.selectedIndex;
    var v815 = v1036[v1037];
    var v389 = v815.value;
    var v1438 = theDocument.forms;
    var v1374 = v1438[0];
    var v1302 = v1374.elements;
    var v1196 = v1302[6];
    var v1038 = v1196.options;
    var v1439 = theDocument.forms;
    var v1375 = v1439[0];
    var v1303 = v1375.elements;
    var v1197 = v1303[6];
    var v1039 = v1197.selectedIndex;
    var v816 = v1038[v1039];
    var v390 = v816.value;
    layoutPrimerMap(newDna, geneticCode, restrictionSiteCollection, forwardMatches, reverseMatches, v389, v390);
    var v391 = outputWindow.document;
    v391.write("\n");
    closePre();
    var v1490 = theDocument.forms;
    var v1440 = v1490[0];
    var v1376 = v1440.elements;
    var v1304 = v1376[8];
    var v1198 = v1304.options;
    var v1491 = theDocument.forms;
    var v1441 = v1491[0];
    var v1377 = v1441.elements;
    var v1305 = v1377[8];
    var v1199 = v1305.selectedIndex;
    var v1040 = v1198[v1199];
    var v817 = v1040.value;
    var v394 = v817 == "shown";
    if(v394) {
      var v1442 = theDocument.forms;
      var v1378 = v1442[0];
      var v1306 = v1378.elements;
      var v1200 = v1306[9];
      var v1041 = v1200.options;
      var v1443 = theDocument.forms;
      var v1379 = v1443[0];
      var v1307 = v1379.elements;
      var v1201 = v1307[9];
      var v1042 = v1201.selectedIndex;
      var v818 = v1041[v1042];
      var v392 = v818.value;
      writeRestrictionSites(newDna, restrictionSites, v392);
      var v393 = outputWindow.document;
      v393.write("<br />\n")
    }
    writePrimerSites(newPrimers);
    var v395 = outputWindow.document;
    v395.write("<br />\n<br />\n");
    j$$10 = 0;
    var v819 = newPrimers.length;
    var v398 = j$$10 < v819;
    for(;v398;) {
      var v396 = newPrimers[j$$10];
      v396.hasForwardMatch = false;
      var v397 = newPrimers[j$$10];
      v397.hasReverseMatch = false;
      j$$10 = j$$10 + 1;
      var v820 = newPrimers.length;
      v398 = j$$10 < v820
    }
    i$$11 = i$$11 + 1;
    var v821 = arrayOfFasta$$1.length;
    v399 = i$$11 < v821
  }
  closeWindow();

  JAM.stopProfile('compute');
  return true
}
function writePrimerSites(primers$$1) {
  var backGroundClass$$1;
  var v400 = outputWindow.document;
  v400.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  var v401 = outputWindow.document;
  var v1202 = '<tr><td class="title" width="200px">' + "Primer:";
  var v1043 = v1202 + '</td><td class="title">';
  var v822 = v1043 + "Sequence:";
  var v402 = v822 + "</td></tr>\n";
  v401.write(v402);
  var i$$12 = 0;
  var v823 = primers$$1.length;
  var v408 = i$$12 < v823;
  for(;v408;) {
    var v1044 = primers$$1[i$$12];
    var v824 = v1044.hasForwardMatch;
    if(v824) {
      var v1045 = primers$$1[i$$12];
      v824 = v1045.hasReverseMatch
    }
    var v405 = v824;
    if(v405) {
      backGroundClass$$1 = "many"
    }else {
      var v825 = primers$$1[i$$12];
      var v404 = v825.hasForwardMatch;
      if(v404) {
        backGroundClass$$1 = "forward_primer"
      }else {
        var v826 = primers$$1[i$$12];
        var v403 = v826.hasReverseMatch;
        if(v403) {
          backGroundClass$$1 = "reverse_primer"
        }else {
          backGroundClass$$1 = "none"
        }
      }
    }
    var v406 = outputWindow.document;
    var v1560 = '<tr><td class="' + backGroundClass$$1;
    var v1527 = v1560 + '">';
    var v1561 = primers$$1[i$$12];
    var v1528 = v1561.name;
    var v1492 = v1527 + v1528;
    var v1444 = v1492 + '</td><td class="';
    var v1380 = v1444 + backGroundClass$$1;
    var v1308 = v1380 + '">';
    var v1203 = v1308 + "5'-";
    var v1309 = primers$$1[i$$12];
    var v1204 = v1309.sequence;
    var v1046 = v1203 + v1204;
    var v827 = v1046 + "-3'";
    var v407 = v827 + "</td></tr>\n";
    v406.write(v407);
    i$$12 = i$$12 + 1;
    var v828 = primers$$1.length;
    v408 = i$$12 < v828
  }
  var v409 = outputWindow.document;
  v409.write("</tbody></table>\n");
  return true
}
function layoutPrimerMap(dnaSequence$$3, geneticCode$$1, restrictionSiteCollection$$1, forwardMatches$$1, reverseMatches$$1, basesPerLine, readingFrame) {
  basesPerLine = parseInt(basesPerLine);
  var geneticCodeMatchExp$$2 = getGeneticCodeMatchExp(geneticCode$$1);
  var geneticCodeMatchResult$$2 = getGeneticCodeMatchResult(geneticCode$$1);
  var spaceString = "                                                                                                                                  ";
  var textLayout = new TextLayout;
  var v829 = readingFrame == "3";
  var v1047 = !v829;
  if(v1047) {
    v829 = readingFrame == "all_three"
  }
  var v411 = v829;
  if(v411) {
    var translation = new TranslationComponent;
    var v1205 = dnaSequence$$3.length;
    var v1048 = dnaSequence$$3.substring(2, v1205);
    var v830 = translate(v1048, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    var v410 = "  " + v830;
    translation.setCharacters(v410);
    textLayout.addComponent(translation)
  }
  var v831 = readingFrame == "2";
  var v1049 = !v831;
  if(v1049) {
    v831 = readingFrame == "all_three"
  }
  var v413 = v831;
  if(v413) {
    translation = new TranslationComponent;
    var v1206 = dnaSequence$$3.length;
    var v1050 = dnaSequence$$3.substring(1, v1206);
    var v832 = translate(v1050, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    var v412 = " " + v832;
    translation.setCharacters(v412);
    textLayout.addComponent(translation)
  }
  var v833 = readingFrame == "1";
  var v1051 = !v833;
  if(v1051) {
    v833 = readingFrame == "all_three"
  }
  var v415 = v833;
  if(v415) {
    translation = new TranslationComponent;
    var v414 = translate(dnaSequence$$3, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    translation.setCharacters(v414);
    textLayout.addComponent(translation)
  }
  var v417 = readingFrame == "uppercase";
  if(v417) {
    translation = new UppercaseTranslationComponent;
    var v416 = uppercaseTranslate(dnaSequence$$3, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    translation.setCharacters(v416);
    textLayout.addComponent(translation)
  }
  var dna = new DnaComponent;
  dna.setCharacters(dnaSequence$$3);
  textLayout.addComponent(dna);
  var ruler = new RulerComponent;
  ruler.setCharacters(dnaSequence$$3);
  ruler.buildRuler();
  textLayout.addComponent(ruler);
  dna = new DnaComponent;
  var v418 = complement(dnaSequence$$3);
  dna.setCharacters(v418);
  textLayout.addComponent(dna);
  var sitesInRange = new Array;
  var i$$13 = 0;
  var v834 = dnaSequence$$3.length;
  var v442 = i$$13 < v834;
  for(;v442;) {
    var v432 = restrictionSiteCollection$$1 != null;
    if(v432) {
      var v419 = i$$13 + basesPerLine;
      sitesInRange = restrictionSiteCollection$$1.getSitesInRange(i$$13, v419);
      sitesInRange.reverse();
      var j$$11 = 0;
      var v835 = sitesInRange.length;
      var v431 = j$$11 < v835;
      for(;v431;) {
        var v1052 = sitesInRange[j$$11];
        var v836 = v1052.numberOfCuts;
        var v430 = v836 == 1;
        if(v430) {
          var v420 = outputWindow.document;
          var v1493 = sitesInRange[j$$11];
          var v1445 = v1493.position;
          var v1381 = v1445 - i$$13;
          var v1310 = v1381 + 9;
          var v1207 = spaceString.substring(0, v1310);
          var v1053 = v1207 + '<span class="one">';
          var v1208 = sitesInRange[j$$11];
          var v1054 = v1208.label;
          var v837 = v1053 + v1054;
          var v421 = v837 + "</span>\n";
          v420.write(v421)
        }else {
          var v1055 = sitesInRange[j$$11];
          var v838 = v1055.numberOfCuts;
          var v429 = v838 == 2;
          if(v429) {
            var v422 = outputWindow.document;
            var v1494 = sitesInRange[j$$11];
            var v1446 = v1494.position;
            var v1382 = v1446 - i$$13;
            var v1311 = v1382 + 9;
            var v1209 = spaceString.substring(0, v1311);
            var v1056 = v1209 + '<span class="two">';
            var v1210 = sitesInRange[j$$11];
            var v1057 = v1210.label;
            var v839 = v1056 + v1057;
            var v423 = v839 + "</span>\n";
            v422.write(v423)
          }else {
            var v1058 = sitesInRange[j$$11];
            var v840 = v1058.numberOfCuts;
            var v428 = v840 == 3;
            if(v428) {
              var v424 = outputWindow.document;
              var v1495 = sitesInRange[j$$11];
              var v1447 = v1495.position;
              var v1383 = v1447 - i$$13;
              var v1312 = v1383 + 9;
              var v1211 = spaceString.substring(0, v1312);
              var v1059 = v1211 + '<span class="three">';
              var v1212 = sitesInRange[j$$11];
              var v1060 = v1212.label;
              var v841 = v1059 + v1060;
              var v425 = v841 + "</span>\n";
              v424.write(v425)
            }else {
              var v426 = outputWindow.document;
              var v1448 = sitesInRange[j$$11];
              var v1384 = v1448.position;
              var v1313 = v1384 - i$$13;
              var v1213 = v1313 + 9;
              var v1061 = spaceString.substring(0, v1213);
              var v1214 = sitesInRange[j$$11];
              var v1062 = v1214.label;
              var v842 = v1061 + v1062;
              var v427 = v842 + "\n";
              v426.write(v427)
            }
          }
        }
        j$$11 = j$$11 + 1;
        var v843 = sitesInRange.length;
        v431 = j$$11 < v843
      }
    }
    var v433 = i$$13 + basesPerLine;
    sitesInRange = forwardMatches$$1.getMatchesInRange(i$$13, v433);
    sitesInRange.reverse();
    j$$11 = 0;
    var v844 = sitesInRange.length;
    var v436 = j$$11 < v844;
    for(;v436;) {
      var v434 = outputWindow.document;
      var v1664 = sitesInRange[j$$11];
      var v1640 = v1664.position;
      var v1616 = v1640 - i$$13;
      var v1589 = v1616 + 9;
      var v1562 = spaceString.substring(0, v1589);
      var v1529 = v1562 + '<span class="forward_primer">';
      var v1496 = v1529 + "&gt;&gt;&gt;";
      var v1530 = sitesInRange[j$$11];
      var v1497 = v1530.primerName;
      var v1449 = v1496 + v1497;
      var v1385 = v1449 + "&gt;&gt;&gt;";
      var v1314 = v1385 + " ";
      var v1450 = sitesInRange[j$$11];
      var v1386 = v1450.position;
      var v1315 = v1386 + 1;
      var v1215 = v1314 + v1315;
      var v1063 = v1215 + " to ";
      var v1216 = sitesInRange[j$$11];
      var v1064 = v1216.end;
      var v845 = v1063 + v1064;
      var v435 = v845 + "</span>\n";
      v434.write(v435);
      j$$11 = j$$11 + 1;
      var v846 = sitesInRange.length;
      v436 = j$$11 < v846
    }
    var v437 = i$$13 + basesPerLine;
    sitesInRange = reverseMatches$$1.getMatchesInRange(i$$13, v437);
    sitesInRange.reverse();
    j$$11 = 0;
    var v847 = sitesInRange.length;
    var v440 = j$$11 < v847;
    for(;v440;) {
      var v438 = outputWindow.document;
      var v1665 = sitesInRange[j$$11];
      var v1641 = v1665.position;
      var v1617 = v1641 - i$$13;
      var v1590 = v1617 + 9;
      var v1563 = spaceString.substring(0, v1590);
      var v1531 = v1563 + '<span class="reverse_primer">';
      var v1498 = v1531 + "&lt;&lt;&lt;";
      var v1532 = sitesInRange[j$$11];
      var v1499 = v1532.primerName;
      var v1451 = v1498 + v1499;
      var v1387 = v1451 + "&lt;&lt;&lt;";
      var v1316 = v1387 + " ";
      var v1452 = sitesInRange[j$$11];
      var v1388 = v1452.position;
      var v1317 = v1388 + 1;
      var v1217 = v1316 + v1317;
      var v1065 = v1217 + " to ";
      var v1218 = sitesInRange[j$$11];
      var v1066 = v1218.end;
      var v848 = v1065 + v1066;
      var v439 = v848 + "</span>\n";
      v438.write(v439);
      j$$11 = j$$11 + 1;
      var v849 = sitesInRange.length;
      v440 = j$$11 < v849
    }
    var v441 = i$$13 + basesPerLine;
    textLayout.writeLayout(i$$13, v441);
    i$$13 = i$$13 + basesPerLine;
    var v850 = dnaSequence$$3.length;
    v442 = i$$13 < v850
  }
  return true
}
function translate(dnaSequence$$4, geneticCodeMatchExp$$3, geneticCodeMatchResult$$3) {
  function v2(str$$9, p1$$2, offset$$14, s$$4) {
    var v443 = " " + p1$$2;
    return v443 + " "
  }
  var v1067 = dnaSequence$$4.replace(/[^A-Za-z]/g, "");
  var v851 = v1067.length;
  var v444 = v851 < 3;
  if(v444) {
    return""
  }
  dnaSequence$$4 = dnaSequence$$4.replace(/(...)/g, v2);
  var i$$14 = 0;
  var v852 = geneticCodeMatchExp$$3.length;
  var v447 = i$$14 < v852;
  for(;v447;) {
    var v445 = geneticCodeMatchExp$$3[i$$14];
    var v446 = geneticCodeMatchResult$$3[i$$14];
    dnaSequence$$4 = dnaSequence$$4.replace(v445, v446);
    i$$14 = i$$14 + 1;
    var v853 = geneticCodeMatchExp$$3.length;
    v447 = i$$14 < v853
  }
  dnaSequence$$4 = dnaSequence$$4.replace(/\S{3}/g, "X");
  dnaSequence$$4 = dnaSequence$$4.replace(/\s\S{1,2}$/, "");
  dnaSequence$$4 = dnaSequence$$4.replace(/^\s/, "");
  return dnaSequence$$4
}
function uppercaseTranslate(dnaSequence$$5, geneticCodeMatchExp$$4, geneticCodeMatchResult$$4) {
  function v3(str$$10, p1$$3, p2, p3, p4, p5, p6, offset$$15, s$$5) {
    var v1389 = " " + p1$$3;
    var v1318 = v1389 + p3;
    var v1219 = v1318 + p5;
    var v1068 = v1219 + " ";
    var v854 = v1068 + p2;
    var v448 = v854 + p4;
    return v448 + p6
  }
  dnaSequence$$5 = dnaSequence$$5.replace(/[a-z]/g, " ");
  var v1069 = dnaSequence$$5.replace(/[^A-Za-z]/g, "");
  var v855 = v1069.length;
  var v449 = v855 < 3;
  if(v449) {
    return""
  }
  dnaSequence$$5 = dnaSequence$$5.replace(/([A-Z])(\s*)([A-Z])(\s*)([A-Z])(\s*)/g, v3);
  dnaSequence$$5 = dnaSequence$$5.replace(/\s\S{1,2}\s/g, "");
  var i$$15 = 0;
  var v856 = geneticCodeMatchExp$$4.length;
  var v452 = i$$15 < v856;
  for(;v452;) {
    var v450 = geneticCodeMatchExp$$4[i$$15];
    var v451 = geneticCodeMatchResult$$4[i$$15];
    dnaSequence$$5 = dnaSequence$$5.replace(v450, v451);
    i$$15 = i$$15 + 1;
    var v857 = geneticCodeMatchExp$$4.length;
    v452 = i$$15 < v857
  }
  dnaSequence$$5 = dnaSequence$$5.replace(/\S{3}/g, "X");
  dnaSequence$$5 = dnaSequence$$5.replace(/^\s/, "");
  return dnaSequence$$5
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
  var label$$2;
  var timesFound$$1 = 0;
  var tempArray = new Array;
  var restrictionSiteCollection$$2 = new RestrictionSiteCollection;
  var v456 = dnaConformation$$1 == "circular";
  if(v456) {
    var v453 = sequence$$18.substring(0, lookAhead$$1);
    shiftValue$$1 = v453.length;
    var v1220 = sequence$$18.length;
    var v1070 = v1220 - lookAhead$$1;
    var v1071 = sequence$$18.length;
    var v858 = sequence$$18.substring(v1070, v1071);
    var v454 = v858 + sequence$$18;
    var v455 = sequence$$18.substring(0, lookAhead$$1);
    sequence$$18 = v454 + v455;
    lowerLimit$$1 = 0 + shiftValue$$1;
    upperLimit$$1 = upperLimit$$1 + shiftValue$$1
  }
  var i$$16 = 0;
  var v859 = arrayOfItems$$2.length;
  var v467 = i$$16 < v859;
  for(;v467;) {
    var v860 = arrayOfItems$$2[i$$16];
    var v457 = v860.match(/\/.+\//);
    matchExp$$2 = v457 + "gi";
    matchPosition$$1 = 0;
    matchExp$$2 = eval(matchExp$$2);
    var v1221 = arrayOfItems$$2[i$$16];
    var v1072 = v1221.match(/\)\D*\d+/);
    var v861 = v1072.toString();
    var v458 = v861.replace(/\)\D*/, "");
    cutDistance$$1 = parseFloat(v458);
    var v1073 = arrayOfItems$$2[i$$16];
    var v862 = v1073.match(/\([^\(]+\)/);
    var v459 = v862.toString();
    label$$2 = v459.replace(/\(|\)/g, "");
    var v463 = matchArray$$3 = matchExp$$2.exec(sequence$$18);
    for(;v463;) {
      matchPosition$$1 = matchExp$$2.lastIndex;
      matchPosition$$1 = matchPosition$$1 - cutDistance$$1;
      var v863 = matchPosition$$1 >= lowerLimit$$1;
      if(v863) {
        v863 = matchPosition$$1 < upperLimit$$1
      }
      var v461 = v863;
      if(v461) {
        timesFound$$1 = timesFound$$1 + 1;
        var v1074 = label$$2 + " ";
        var v1222 = matchPosition$$1 - shiftValue$$1;
        var v1075 = v1222 + 1;
        var v864 = v1074 + v1075;
        var v865 = matchPosition$$1 - shiftValue$$1;
        var v460 = new RestrictionSite(v864, v865);
        tempArray.push(v460)
      }
      var v462 = matchExp$$2;
      var v1076 = matchExp$$2.lastIndex;
      var v1223 = RegExp.lastMatch;
      var v1077 = v1223.length;
      var v866 = v1076 - v1077;
      v462.lastIndex = v866 + 1;
      v463 = matchArray$$3 = matchExp$$2.exec(sequence$$18)
    }
    var j$$12 = 0;
    var v867 = tempArray.length;
    var v466 = j$$12 < v867;
    for(;v466;) {
      var v464 = tempArray[j$$12];
      v464.numberOfCuts = timesFound$$1;
      var v465 = tempArray[j$$12];
      restrictionSiteCollection$$2.addRestrictionSite(v465);
      j$$12 = j$$12 + 1;
      var v868 = tempArray.length;
      v466 = j$$12 < v868
    }
    timesFound$$1 = 0;
    tempArray = new Array;
    i$$16 = i$$16 + 1;
    var v869 = arrayOfItems$$2.length;
    v467 = i$$16 < v869
  }
  return restrictionSiteCollection$$2
}
function findMatches(primers$$2, sequence$$19, topology$$1, isReverseStrand) {
  var matchArray$$4;
  var matchPosition$$2;
  var matchCollection = new MatchCollection;
  var re$$4;
  var originalLength$$1 = sequence$$19.length;
  var v488 = topology$$1 == "circular";
  if(v488) {
    var lookAhead$$2 = 50;
    var v468 = sequence$$19.substring(0, lookAhead$$2);
    var shiftValue$$2 = v468.length;
    var v469 = sequence$$19.length;
    var upperLimit$$2 = v469 + shiftValue$$2;
    var v1224 = sequence$$19.length;
    var v1078 = v1224 - lookAhead$$2;
    var v1079 = sequence$$19.length;
    var v870 = sequence$$19.substring(v1078, v1079);
    var v470 = v870 + sequence$$19;
    var v471 = sequence$$19.substring(0, lookAhead$$2);
    sequence$$19 = v470 + v471;
    var lowerLimit$$2 = 0 + shiftValue$$2;
    var i$$17 = 0;
    var v871 = primers$$2.length;
    var v480 = i$$17 < v871;
    for(;v480;) {
      var v472 = primers$$2[i$$17];
      re$$4 = v472.re;
      var v479 = matchArray$$4 = re$$4.exec(sequence$$19);
      for(;v479;) {
        matchPosition$$2 = re$$4.lastIndex;
        var v872 = matchPosition$$2 >= lowerLimit$$2;
        if(v872) {
          v872 = matchPosition$$2 < upperLimit$$2
        }
        var v477 = v872;
        if(v477) {
          matchPosition$$2 = matchPosition$$2 - shiftValue$$2;
          var v473 = matchPosition$$2 == 0;
          if(v473) {
            matchPosition$$2 = originalLength$$1
          }
          var v1080 = primers$$2[i$$17];
          var v873 = v1080.name;
          var v874 = matchArray$$4[0];
          var v474 = new Match(v873, v874, matchPosition$$2);
          matchCollection.addMatch(v474);
          if(isReverseStrand) {
            var v475 = primers$$2[i$$17];
            v475.hasReverseMatch = true
          }else {
            var v476 = primers$$2[i$$17];
            v476.hasForwardMatch = true
          }
        }
        var v478 = re$$4;
        var v1081 = re$$4.lastIndex;
        var v1225 = RegExp.lastMatch;
        var v1082 = v1225.length;
        var v875 = v1081 - v1082;
        v478.lastIndex = v875 + 1;
        v479 = matchArray$$4 = re$$4.exec(sequence$$19)
      }
      i$$17 = i$$17 + 1;
      var v876 = primers$$2.length;
      v480 = i$$17 < v876
    }
  }else {
    i$$17 = 0;
    var v877 = primers$$2.length;
    var v487 = i$$17 < v877;
    for(;v487;) {
      var v481 = primers$$2[i$$17];
      re$$4 = v481.re;
      var v486 = matchArray$$4 = re$$4.exec(sequence$$19);
      for(;v486;) {
        matchPosition$$2 = re$$4.lastIndex;
        var v1083 = primers$$2[i$$17];
        var v878 = v1083.name;
        var v879 = matchArray$$4[0];
        var v482 = new Match(v878, v879, matchPosition$$2);
        matchCollection.addMatch(v482);
        if(isReverseStrand) {
          var v483 = primers$$2[i$$17];
          v483.hasReverseMatch = true
        }else {
          var v484 = primers$$2[i$$17];
          v484.hasForwardMatch = true
        }
        var v485 = re$$4;
        var v1084 = re$$4.lastIndex;
        var v1226 = RegExp.lastMatch;
        var v1085 = v1226.length;
        var v880 = v1084 - v1085;
        v485.lastIndex = v880 + 1;
        v486 = matchArray$$4 = re$$4.exec(sequence$$19)
      }
      i$$17 = i$$17 + 1;
      var v881 = primers$$2.length;
      v487 = i$$17 < v881
    }
  }
  return matchCollection
}
function writeLayout(start$$4, stop) {
  var i$$18 = 0;
  var v1086 = this.components;
  var v882 = v1086.length;
  var v490 = i$$18 < v882;
  for(;v490;) {
    var v883 = this.components;
    var v489 = v883[i$$18];
    v489.writeLayoutComponent(start$$4, stop);
    i$$18 = i$$18 + 1;
    var v1087 = this.components;
    var v884 = v1087.length;
    v490 = i$$18 < v884
  }
  return
}
function addComponent(component) {
  var v491 = this.components;
  v491.push(component);
  return
}
function TextLayout() {
  var v1861 = new Array;
  this.components = v1861;
  return
}
function writeLayoutComponent(start$$5, stop$$1) {
  return
}
function setCharacters(text$$14) {
  var v885 = text$$14.search(/./);
  var v492 = v885 != -1;
  if(v492) {
    var v1862 = text$$14.match(/./g);
    this.characters = v1862
  }
  return
}
function isRoom(start$$6, stop$$2) {
  var v493 = this.characters;
  var rangeToCheck = v493.slice(start$$6, stop$$2);
  rangeToCheck = rangeToCheck.join("");
  var v886 = rangeToCheck.search(/\w/);
  var v494 = v886 == -1;
  if(v494) {
    return true
  }else {
    return false
  }
  return
}
function LayoutComponent() {
  var v1863 = new Array;
  this.characters = v1863;
  this.positionLabel = 1;
  return
}
function TranslationComponent() {
  var v1864 = new Array;
  this.characters = v1864;
  this.positionLabel = 1;
  return
}
function UppercaseTranslationComponent() {
  var v1865 = new Array;
  this.characters = v1865;
  this.positionLabel = 1;
  return
}
function DnaComponent() {
  var v1866 = new Array;
  this.characters = v1866;
  this.positionLabel = 1;
  return
}
function RulerComponent() {
  var v1867 = new Array;
  this.characters = v1867;
  this.positionLabel = 1;
  return
}
function buildRuler() {
  function v4(str$$13, p1$$6, offset$$18, s$$8) {
    var ruler$$1 = count$$6 + spacing;
    var v495 = count$$6 == 0;
    if(v495) {
      ruler$$1 = spacing
    }
    count$$6 = count$$6 + 10;
    return ruler$$1.substring(0, 10)
  }
  var v496 = this.characters;
  var sequence$$20 = v496.join("");
  var count$$6 = 0;
  var spacing = "         ";
  sequence$$20 = sequence$$20.replace(/(.{1,10})/g, v4);
  var v1868 = sequence$$20.match(/./g);
  this.characters = v1868;
  return
}
function RestrictionSite(label$$3, position) {
  this.label = label$$3;
  this.position = position;
  return
}
function addRestrictionSite(restrictionSite) {
  var v497 = this.restrictionSites;
  v497.push(restrictionSite);
  return
}
function sortRestrictionSites() {
  var v498 = this.restrictionSites;
  v498.sort(restrictionSiteSorter);
  return
}
function getSitesInRange(start$$11, stop$$7) {
  var arrayToReturn = new Array;
  var v887 = this.restrictionSites;
  var v499 = v887.length;
  var i$$19 = v499 - 1;
  var v502 = i$$19 >= 0;
  for(;v502;) {
    var v1319 = this.restrictionSites;
    var v1227 = v1319[i$$19];
    var v1088 = v1227.position;
    var v888 = v1088 >= start$$11;
    if(v888) {
      var v1320 = this.restrictionSites;
      var v1228 = v1320[i$$19];
      var v1089 = v1228.position;
      v888 = v1089 < stop$$7
    }
    var v501 = v888;
    if(v501) {
      var v889 = this.restrictionSites;
      var v500 = v889.pop();
      arrayToReturn.push(v500)
    }else {
      break
    }
    i$$19 = i$$19 - 1;
    v502 = i$$19 >= 0
  }
  return arrayToReturn
}
function RestrictionSiteCollection() {
  var v1869 = new Array;
  this.restrictionSites = v1869;
  return
}
function restrictionSiteSorter(a, b) {
  var v890 = a.position;
  var v891 = b.position;
  var v503 = v890 < v891;
  if(v503) {
    return 1
  }
  var v892 = a.position;
  var v893 = b.position;
  var v504 = v892 > v893;
  if(v504) {
    return-1
  }else {
    return 0
  }
  return
}
function Primer(sequence$$21, re$$5, name$$32) {
  this.sequence = sequence$$21;
  this.re = re$$5;
  this.name = name$$32;
  this.hasForwardMatch = false;
  this.hasReverseMatch = false;
  return
}
function Match(primerName$$1, matchingText, position$$1) {
  this.primerName = primerName$$1;
  this.matchingText = matchingText;
  this.position = position$$1;
  return
}
function addMatch(match) {
  var v505 = this.matches;
  v505.push(match);
  return
}
function sortMatches() {
  var v506 = this.matches;
  v506.sort(matchSorter);
  return
}
function getMatchesInRange(start$$12, stop$$8) {
  var arrayToReturn$$1 = new Array;
  var v894 = this.matches;
  var v507 = v894.length;
  var i$$20 = v507 - 1;
  var v510 = i$$20 >= 0;
  for(;v510;) {
    var v1321 = this.matches;
    var v1229 = v1321[i$$20];
    var v1090 = v1229.position;
    var v895 = v1090 >= start$$12;
    if(v895) {
      var v1322 = this.matches;
      var v1230 = v1322[i$$20];
      var v1091 = v1230.position;
      v895 = v1091 < stop$$8
    }
    var v509 = v895;
    if(v509) {
      var v896 = this.matches;
      var v508 = v896.pop();
      arrayToReturn$$1.push(v508)
    }else {
      break
    }
    i$$20 = i$$20 - 1;
    v510 = i$$20 >= 0
  }
  return arrayToReturn$$1
}
function MatchCollection() {
  var v1870 = new Array;
  this.matches = v1870;
  return
}
function matchSorter(a$$1, b$$1) {
  var v897 = a$$1.position;
  var v898 = b$$1.position;
  var v511 = v897 < v898;
  if(v511) {
    return 1
  }
  var v899 = a$$1.position;
  var v900 = b$$1.position;
  var v512 = v899 > v900;
  if(v512) {
    return-1
  }else {
    return 0
  }
  return
}
new TextLayout;
var v513 = TextLayout.prototype;
v513.writeLayout = writeLayout;
var v514 = TextLayout.prototype;
v514.addComponent = addComponent;
new LayoutComponent;
var v515 = LayoutComponent.prototype;
v515.writeLayoutComponent = writeLayoutComponent;
var v516 = LayoutComponent.prototype;
v516.setCharacters = setCharacters;
var v517 = LayoutComponent.prototype;
v517.isRoom = isRoom;
var v1871 = new LayoutComponent;
TranslationComponent.prototype = v1871;
var v518 = TranslationComponent.prototype;
v518.writeLayoutComponent = v5;
var v1872 = new LayoutComponent;
UppercaseTranslationComponent.prototype = v1872;
var v519 = UppercaseTranslationComponent.prototype;
v519.writeLayoutComponent = v6;
var v1873 = new LayoutComponent;
DnaComponent.prototype = v1873;
var v520 = DnaComponent.prototype;
v520.writeLayoutComponent = v7;
var v1874 = new LayoutComponent;
RulerComponent.prototype = v1874;
var v521 = RulerComponent.prototype;
v521.writeLayoutComponent = v10;
new RulerComponent;
var v522 = RulerComponent.prototype;
v522.buildRuler = buildRuler;
new RestrictionSiteCollection;
var v523 = RestrictionSiteCollection.prototype;
v523.addRestrictionSite = addRestrictionSite;
var v524 = RestrictionSiteCollection.prototype;
v524.sortRestrictionSites = sortRestrictionSites;
var v525 = RestrictionSiteCollection.prototype;
v525.getSitesInRange = getSitesInRange;
new MatchCollection;
var v526 = MatchCollection.prototype;
v526.addMatch = addMatch;
var v527 = MatchCollection.prototype;
v527.sortMatches = sortMatches;
var v528 = MatchCollection.prototype;
v528.getMatchesInRange = getMatchesInRange;
document.onload = v11;
var v529 = document.getElementById("submitbtn");
v529.onclick = v12;
var v530 = document.getElementById("clearbtn");
v530.onclick = v13;

JAM.stopProfile('load');

