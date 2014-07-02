introspect(JAMScript.introspectors.processAll) {
function v9() {
  var v1001 = document.forms;
  var v839 = v1001[0];
  var v491 = v839.elements;
  var v10 = v491[0];
  v10.value = " ";
  var v1002 = document.forms;
  var v840 = v1002[0];
  var v492 = v840.elements;
  var v11 = v492[4];
  v11.value = " ";
  return
}
function v8() {
  try {
    mutateForDigest(document)
  }catch(e$$5) {
    var v12 = "The following error was encountered: " + e$$5;
    alert(v12)
  }
  return
}
function v7() {
  var v493 = document.main_form;
  var v13 = v493.main_submit;
  v13.focus();
  return
}
function v6(start$$9, stop$$5) {
  var v14 = outputWindow.document;
  var v494 = this.positionLabel;
  var v15 = rightNum(v494, "", 8, "");
  v14.write(v15);
  var v16 = outputWindow.document;
  var v17 = this.spanStart;
  v16.write(v17);
  var v18 = outputWindow.document;
  var v841 = this.characters;
  var v495 = v841.slice(start$$9, stop$$5);
  var v19 = v495.join("");
  v18.write(v19);
  var v20 = outputWindow.document;
  var v496 = this.spanEnd;
  var v21 = v496 + "\n";
  v20.write(v21);
  var v22 = this.positionLabel;
  var v23 = stop$$5 - start$$9;
  this.positionLabel = v22 + v23;
  return
}
function v5(start$$8, stop$$4) {
  var v497 = this.characters;
  var v24 = v497.slice(start$$8, stop$$4);
  var textToWrite = v24.join("");
  var v498 = textToWrite.search(/\w/);
  var v34 = v498 != -1;
  if(v34) {
    var v25 = outputWindow.document;
    var v499 = this.positionLabel;
    var v26 = rightNum(v499, "", 8, "");
    v25.write(v26);
    var v27 = outputWindow.document;
    var v28 = this.spanStart;
    v27.write(v28);
    var v29 = this.positionLabel;
    var v500 = textToWrite.match(/[A-Z]/g);
    var v30 = v500.length;
    this.positionLabel = v29 + v30;
    var v31 = outputWindow.document;
    v31.write(textToWrite);
    var v32 = outputWindow.document;
    var v501 = this.spanEnd;
    var v33 = v501 + "\n";
    v32.write(v33)
  }
  return
}
function v4(start$$7, stop$$3) {
  var v35 = outputWindow.document;
  var v502 = this.positionLabel;
  var v36 = rightNum(v502, "", 8, "");
  v35.write(v36);
  var v37 = outputWindow.document;
  var v38 = this.spanStart;
  v37.write(v38);
  var v39 = outputWindow.document;
  var v842 = this.characters;
  var v503 = v842.slice(start$$7, stop$$3);
  var v40 = v503.join("");
  v39.write(v40);
  var v41 = outputWindow.document;
  var v504 = this.spanEnd;
  var v42 = v504 + "\n";
  v41.write(v42);
  var v43 = this.positionLabel;
  var v505 = stop$$3 - start$$7;
  var v44 = v505 / 3;
  this.positionLabel = v43 + v44;
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
  var v45 = arrayOfSequences[0];
  var lengthOfAlign = v45.length;
  var v506 = arrayOfSequences.length;
  var v46 = v506 < 2;
  if(v46) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v507 = arrayOfTitles.length;
  var v48 = i$$1 < v507;
  for(;v48;) {
    var v1003 = arrayOfTitles[i$$1];
    var v843 = v1003.search(/\S/);
    var v508 = v843 == -1;
    var v845 = !v508;
    if(v845) {
      var v1099 = arrayOfSequences[i$$1];
      var v1004 = v1099.search(/\S/);
      var v844 = v1004 == -1;
      var v1006 = !v844;
      if(v1006) {
        var v1100 = arrayOfSequences[i$$1];
        var v1005 = v1100.length;
        v844 = v1005 != lengthOfAlign
      }
      v508 = v844
    }
    var v47 = v508;
    if(v47) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v509 = arrayOfTitles.length;
    v48 = i$$1 < v509
  }
  return true
}
function checkCodonTable(codonTable) {
  var v846 = codonTable.search(/AmAcid/);
  var v510 = v846 == -1;
  var v848 = !v510;
  if(v848) {
    var v1007 = codonTable.search(/Codon/);
    var v847 = v1007 == -1;
    var v1009 = !v847;
    if(v1009) {
      var v1101 = codonTable.search(/Number/);
      var v1008 = v1101 == -1;
      var v1103 = !v1008;
      if(v1103) {
        var v1162 = codonTable.search(/\/1000/);
        var v1102 = v1162 == -1;
        var v1164 = !v1102;
        if(v1164) {
          var v1163 = codonTable.search(/Fraction\s*\.\./);
          v1102 = v1163 == -1
        }
        v1008 = v1102
      }
      v847 = v1008
    }
    v510 = v847
  }
  var v49 = v510;
  if(v49) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v849 = formElement.value;
  var v511 = v849.search(/\S/);
  var v50 = v511 == -1;
  if(v50) {
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
  var v512 = arrayOfPatterns.length;
  var v53 = z$$2 < v512;
  for(;v53;) {
    var v850 = arrayOfPatterns[z$$2];
    var v513 = v850.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v51 = v513 == -1;
    if(v51) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    var v851 = arrayOfPatterns[z$$2];
    var v514 = moreExpressionCheck(v851);
    var v52 = v514 == false;
    if(v52) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v515 = arrayOfPatterns.length;
    v53 = z$$2 < v515
  }
  var v54 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v54);
  var v55 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v55);
  var j = 0;
  var v516 = arrayOfPatterns.length;
  var v62 = j < v516;
  for(;v62;) {
    var v56 = geneticCodeMatchExp;
    var v57 = j;
    var v1010 = arrayOfPatterns[j];
    var v852 = v1010.match(/\/.+\//);
    var v517 = v852 + "gi";
    var v1508 = eval(v517);
    v56[v57] = v1508;
    var v58 = geneticCodeMatchResult;
    var v59 = j;
    var v853 = arrayOfPatterns[j];
    var v518 = v853.match(/=[a-zA-Z\*]/);
    var v1509 = v518.toString();
    v58[v59] = v1509;
    var v60 = geneticCodeMatchResult;
    var v61 = j;
    var v519 = geneticCodeMatchResult[j];
    var v1510 = v519.replace(/=/g, "");
    v60[v61] = v1510;
    j = j + 1;
    var v520 = arrayOfPatterns.length;
    v62 = j < v520
  }
  var i$$2 = 0;
  var v854 = testSequence.length;
  var v521 = v854 - 3;
  var v69 = i$$2 <= v521;
  for(;v69;) {
    var v63 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v63);
    j = 0;
    var v522 = geneticCodeMatchExp.length;
    var v67 = j < v522;
    for(;v67;) {
      var v855 = geneticCodeMatchExp[j];
      var v523 = codon.search(v855);
      var v66 = v523 != -1;
      if(v66) {
        var v65 = oneMatch == true;
        if(v65) {
          var v524 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v64 = v524 + ".";
          alert(v64);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v525 = geneticCodeMatchExp.length;
      v67 = j < v525
    }
    var v68 = oneMatch == false;
    if(v68) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v856 = testSequence.length;
    var v526 = v856 - 3;
    v69 = i$$2 <= v526
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v527 = arrayOfPatterns$$1.length;
  var v71 = z$$3 < v527;
  for(;v71;) {
    var v857 = arrayOfPatterns$$1[z$$3];
    var v528 = v857.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v70 = v528 != -1;
    if(v70) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v529 = arrayOfPatterns$$1.length;
    v71 = z$$3 < v529
  }
  var i$$3 = 0;
  var v530 = arrayOfPatterns$$1.length;
  var v75 = i$$3 < v530;
  for(;v75;) {
    var v858 = arrayOfPatterns$$1[i$$3];
    var v531 = "[" + v858;
    var v72 = v531 + "]";
    var re = new RegExp(v72, "gi");
    var j$$1 = i$$3 + 1;
    var v532 = arrayOfPatterns$$1.length;
    var v74 = j$$1 < v532;
    for(;v74;) {
      var v859 = arrayOfPatterns$$1[j$$1];
      var v533 = v859.search(re);
      var v73 = v533 != -1;
      if(v73) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v534 = arrayOfPatterns$$1.length;
      v74 = j$$1 < v534
    }
    i$$3 = i$$3 + 1;
    var v535 = arrayOfPatterns$$1.length;
    v75 = i$$3 < v535
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v536 = arrayOfPatterns$$2.length;
  var v78 = z$$4 < v536;
  for(;v78;) {
    var v860 = arrayOfPatterns$$2[z$$4];
    var v537 = v860.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v76 = v537 == -1;
    if(v76) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    var v861 = arrayOfPatterns$$2[z$$4];
    var v538 = moreExpressionCheck(v861);
    var v77 = v538 == false;
    if(v77) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v539 = arrayOfPatterns$$2.length;
    v78 = z$$4 < v539
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v1011 = getSequenceFromFasta(text$$7);
  var v862 = v1011.replace(/[^A-Za-z]/g, "");
  var v540 = v862.length;
  var v80 = v540 > maxInput;
  if(v80) {
    var v541 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v79 = v541 + " characters.";
    alert(v79);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v542 = text$$8.length;
  var v82 = v542 > maxInput$$1;
  if(v82) {
    var v543 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v81 = v543 + " characters.";
    alert(v81);
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
  var v83 = outputWindow.document;
  v83.write("</form>");
  return true
}
function closePre() {
  var v84 = outputWindow.document;
  v84.write("</div>");
  var v85 = outputWindow.document;
  v85.write("</pre>\n");
  return
}
function closeTextArea() {
  var v86 = outputWindow.document;
  v86.write("</textarea>");
  return true
}
function closeWindow() {
  var v87 = outputWindow.document;
  v87.write("</body>\n</html>\n");
  outputWindow.status = "Done.";
  var v88 = outputWindow.document;
  v88.close();
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
  var v544 = alignArray.length;
  var v89 = v544 < 3;
  if(v89) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v545 = alignArray.length;
  var v91 = i$$4 < v545;
  for(;v91;) {
    var v863 = alignArray[i$$4];
    var v546 = v863.search(/[^\s]+\s/);
    var v90 = v546 == -1;
    if(v90) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v547 = alignArray.length;
    v91 = i$$4 < v547
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
  var v548 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v94 = v548 != -1;
  if(v94) {
    var v93 = matchArray = re$$1.exec(sequenceData);
    for(;v93;) {
      var v92 = matchArray[0];
      arrayOfFasta.push(v92);
      v93 = matchArray = re$$1.exec(sequenceData)
    }
  }else {
    arrayOfFasta[0] = sequenceData
  }
  return arrayOfFasta
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v549 = sequence$$2.length;
  var v95 = "&gt;results for " + v549;
  var stringToReturn = v95 + " residue sequence ";
  var v550 = fastaSequenceTitle.search(/[^\s]/);
  var v97 = v550 != -1;
  if(v97) {
    var v551 = stringToReturn + '"';
    var v96 = v551 + fastaSequenceTitle;
    stringToReturn = v96 + '"'
  }
  var v552 = stringToReturn + ' starting "';
  var v553 = sequence$$2.substring(0, 10);
  var v98 = v552 + v553;
  stringToReturn = v98 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v554 = sequenceOne.length;
  var v99 = "Search results for " + v554;
  var stringToReturn$$1 = v99 + " residue sequence ";
  var v555 = fastaSequenceTitleOne.search(/[^\s]/);
  var v101 = v555 != -1;
  if(v101) {
    var v556 = stringToReturn$$1 + '"';
    var v100 = v556 + fastaSequenceTitleOne;
    stringToReturn$$1 = v100 + '"'
  }
  var v557 = stringToReturn$$1 + ' starting "';
  var v558 = sequenceOne.substring(0, 10);
  var v102 = v557 + v558;
  stringToReturn$$1 = v102 + '"\n';
  var v559 = stringToReturn$$1 + "and ";
  var v560 = sequenceTwo.length;
  var v103 = v559 + v560;
  stringToReturn$$1 = v103 + " residue sequence ";
  var v561 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v105 = v561 != -1;
  if(v105) {
    var v562 = stringToReturn$$1 + '"';
    var v104 = v562 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v104 + '"'
  }
  var v563 = stringToReturn$$1 + ' starting "';
  var v564 = sequenceTwo.substring(0, 10);
  var v106 = v563 + v564;
  stringToReturn$$1 = v106 + '"';
  var v107 = '<div class="info">' + stringToReturn$$1;
  return v107 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v108 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v108);
  var j$$2 = 0;
  var v565 = arrayOfPatterns$$3.length;
  var v111 = j$$2 < v565;
  for(;v111;) {
    var v109 = geneticCodeMatchExp$$1;
    var v110 = j$$2;
    var v1012 = arrayOfPatterns$$3[j$$2];
    var v864 = v1012.match(/\/.+\//);
    var v566 = v864 + "gi";
    var v1511 = eval(v566);
    v109[v110] = v1511;
    j$$2 = j$$2 + 1;
    var v567 = arrayOfPatterns$$3.length;
    v111 = j$$2 < v567
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v112 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v112);
  var j$$3 = 0;
  var v568 = arrayOfPatterns$$4.length;
  var v117 = j$$3 < v568;
  for(;v117;) {
    var v113 = geneticCodeMatchResult$$1;
    var v114 = j$$3;
    var v865 = arrayOfPatterns$$4[j$$3];
    var v569 = v865.match(/=[a-zA-Z\*]/);
    var v1512 = v569.toString();
    v113[v114] = v1512;
    var v115 = geneticCodeMatchResult$$1;
    var v116 = j$$3;
    var v570 = geneticCodeMatchResult$$1[j$$3];
    var v1513 = v570.replace(/=/g, "");
    v115[v116] = v1513;
    j$$3 = j$$3 + 1;
    var v571 = arrayOfPatterns$$4.length;
    v117 = j$$3 < v571
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v572 = sequence$$3.length;
  var v118 = "Results for " + v572;
  var stringToReturn$$2 = v118 + " residue sequence ";
  var v573 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v120 = v573 != -1;
  if(v120) {
    var v574 = stringToReturn$$2 + '"';
    var v119 = v574 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v119 + '"'
  }
  var v575 = stringToReturn$$2 + ' starting "';
  var v576 = sequence$$3.substring(0, 10);
  var v121 = v575 + v576;
  stringToReturn$$2 = v121 + '"';
  var v122 = '<div class="info">' + stringToReturn$$2;
  return v122 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v866 = "Results for " + topology;
  var v577 = v866 + " ";
  var v578 = sequence$$4.length;
  var v123 = v577 + v578;
  var stringToReturn$$3 = v123 + " residue sequence ";
  var v579 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v125 = v579 != -1;
  if(v125) {
    var v580 = stringToReturn$$3 + '"';
    var v124 = v580 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v124 + '"'
  }
  var v581 = stringToReturn$$3 + ' starting "';
  var v582 = sequence$$4.substring(0, 10);
  var v126 = v581 + v582;
  stringToReturn$$3 = v126 + '"';
  var v127 = '<div class="info">' + stringToReturn$$3;
  return v127 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v583 = sequenceOne$$1.length;
  var v128 = "Alignment results for " + v583;
  var stringToReturn$$4 = v128 + " residue sequence ";
  var v584 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v130 = v584 != -1;
  if(v130) {
    var v585 = stringToReturn$$4 + '"';
    var v129 = v585 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v129 + '"'
  }
  var v586 = stringToReturn$$4 + ' starting "';
  var v587 = sequenceOne$$1.substring(0, 10);
  var v131 = v586 + v587;
  stringToReturn$$4 = v131 + '"\n';
  var v588 = stringToReturn$$4 + "and ";
  var v589 = sequenceTwo$$1.length;
  var v132 = v588 + v589;
  stringToReturn$$4 = v132 + " residue sequence ";
  var v590 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v134 = v590 != -1;
  if(v134) {
    var v591 = stringToReturn$$4 + '"';
    var v133 = v591 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v133 + '"'
  }
  var v592 = stringToReturn$$4 + ' starting "';
  var v593 = sequenceTwo$$1.substring(0, 10);
  var v135 = v592 + v593;
  stringToReturn$$4 = v135 + '"';
  var v136 = '<div class="info">' + stringToReturn$$4;
  return v136 + "</div>\n"
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v138 = j$$4 < lengthOut;
  for(;v138;) {
    var v594 = Math.random();
    var v595 = components.length;
    var v137 = v594 * v595;
    tempNum = Math.floor(v137);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4 = j$$4 + 1;
    v138 = j$$4 < lengthOut
  }
  return sequenceArray.join("")
}
function getSequenceFromFasta(sequenceRecord) {
  var v596 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v139 = v596 != -1;
  if(v139) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "")
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v597 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v141 = v597 != -1;
  if(v141) {
    var v140 = sequenceRecord$$1.match(/\>[^\f\n\r]+[\f\n\r]/, "");
    fastaTitle = v140.toString();
    fastaTitle = fastaTitle.replace(/\>|[\f\n\r]/g, "");
    fastaTitle = fastaTitle.replace(/\s{2,}/g, " ");
    fastaTitle = fastaTitle.replace(/[\<\>]/gi, "")
  }
  return fastaTitle
}
function moreExpressionCheck(expressionToCheck) {
  var v867 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v598 = v867 != -1;
  var v869 = !v598;
  if(v869) {
    var v1013 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    var v868 = v1013 != -1;
    var v1015 = !v868;
    if(v1015) {
      var v1104 = expressionToCheck.search(/\[\]/);
      var v1014 = v1104 != -1;
      var v1106 = !v1014;
      if(v1106) {
        var v1165 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
        var v1105 = v1165 != -1;
        var v1167 = !v1105;
        if(v1167) {
          var v1207 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
          var v1166 = v1207 != -1;
          var v1209 = !v1166;
          if(v1209) {
            var v1244 = expressionToCheck.search(/\|\|/);
            var v1208 = v1244 != -1;
            var v1246 = !v1208;
            if(v1246) {
              var v1274 = expressionToCheck.search(/\/\|/);
              var v1245 = v1274 != -1;
              var v1276 = !v1245;
              if(v1276) {
                var v1300 = expressionToCheck.search(/\|\//);
                var v1275 = v1300 != -1;
                var v1302 = !v1275;
                if(v1302) {
                  var v1326 = expressionToCheck.search(/\[.\]/);
                  var v1301 = v1326 != -1;
                  var v1328 = !v1301;
                  if(v1328) {
                    var v1350 = expressionToCheck.search(/\</);
                    var v1327 = v1350 != -1;
                    var v1352 = !v1327;
                    if(v1352) {
                      var v1351 = expressionToCheck.search(/\>/);
                      v1327 = v1351 != -1
                    }
                    v1301 = v1327
                  }
                  v1275 = v1301
                }
                v1245 = v1275
              }
              v1208 = v1245
            }
            v1166 = v1208
          }
          v1105 = v1166
        }
        v1014 = v1105
      }
      v868 = v1014
    }
    v598 = v868
  }
  var v142 = v598;
  if(v142) {
    return false
  }
  return true
}
function openForm() {
  var v143 = outputWindow.document;
  v143.write('<form action="">\n');
  return true
}
function openPre() {
  var v144 = outputWindow.document;
  v144.write("<pre>");
  var v145 = outputWindow.document;
  v145.write('<div class="pre">');
  return
}
function openTextArea() {
  var v146 = outputWindow.document;
  v146.write('<br /><textarea rows="6" cols="61">\n');
  return true
}
function openWindow(title$$5) {
  _openWindow(title$$5, true);
  return
}
function _openWindow(title$$6, isColor) {
  outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  outputWindow.focus();
  var v147 = outputWindow.document;
  var v1016 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v870 = v1016 + "<head>\n";
  var v599 = v870 + "<title>Sequence Manipulation Suite</title>\n";
  var v148 = v599 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v147.write(v148);
  if(isColor) {
    var v149 = outputWindow.document;
    var v1416 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1395 = v1416 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1374 = v1395 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1353 = v1374 + "div.info {font-weight: bold}\n";
    var v1329 = v1353 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1303 = v1329 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v1277 = v1303 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v1247 = v1277 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1210 = v1247 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v1168 = v1210 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v1107 = v1168 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v1017 = v1107 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v871 = v1017 + "td.many {color: #000000}\n";
    var v600 = v871 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v150 = v600 + "</style>\n";
    v149.write(v150)
  }else {
    var v151 = outputWindow.document;
    var v1437 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1417 = v1437 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1396 = v1417 + "div.title {display: none}\n";
    var v1375 = v1396 + "div.info {font-weight: bold}\n";
    var v1354 = v1375 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1330 = v1354 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1304 = v1330 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v1278 = v1304 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1248 = v1278 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1211 = v1248 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1169 = v1211 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v1108 = v1169 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1018 = v1108 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v872 = v1018 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v601 = v872 + "img {display: none}\n";
    var v152 = v601 + "</style>\n";
    v151.write(v152)
  }
  var v153 = outputWindow.document;
  var v1019 = "</head>\n" + '<body class="main">\n';
  var v873 = v1019 + '<div class="title">';
  var v602 = v873 + title$$6;
  var v154 = v602 + " results</div>\n";
  v153.write(v154);
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
  var v155 = outputWindow.document;
  var v1020 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v874 = v1020 + "<head>\n";
  var v603 = v874 + "<title>Sequence Manipulation Suite</title>\n";
  var v156 = v603 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v155.write(v156);
  if(isBackground) {
    var v157 = outputWindow.document;
    var v1418 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1397 = v1418 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1376 = v1397 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1355 = v1376 + "div.info {font-weight: bold}\n";
    var v1331 = v1355 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v1305 = v1331 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v1279 = v1305 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v1249 = v1279 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v1212 = v1249 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v1170 = v1212 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v1109 = v1170 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v1021 = v1109 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v875 = v1021 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v604 = v875 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v158 = v604 + "</style>\n";
    v157.write(v158)
  }else {
    var v159 = outputWindow.document;
    var v1456 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1438 = v1456 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1419 = v1438 + "div.title {display: none}\n";
    var v1398 = v1419 + "div.info {font-weight: bold}\n";
    var v1377 = v1398 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1356 = v1377 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v1332 = v1356 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v1306 = v1332 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v1280 = v1306 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v1250 = v1280 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v1213 = v1250 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v1171 = v1213 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v1110 = v1171 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v1022 = v1110 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v876 = v1022 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v605 = v876 + "img {display: none}\n";
    var v160 = v605 + "</style>\n";
    v159.write(v160)
  }
  var v161 = outputWindow.document;
  var v1023 = "</head>\n" + '<body class="main">\n';
  var v877 = v1023 + '<div class="title">';
  var v606 = v877 + title$$8;
  var v162 = v606 + " results</div>\n";
  v161.write(v162);
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
  var v607 = dnaSequence$$1.search(/./);
  var v163 = v607 != -1;
  if(v163) {
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
  var v164 = j$$5 < lengthOfColumn;
  for(;v164;) {
    tempString = tempString + " ";
    j$$5 = j$$5 + 1;
    v164 = j$$5 < lengthOfColumn
  }
  var v165 = tempString + theNumber;
  theNumber = v165 + " ";
  var v166 = sequenceToAppend + theNumber;
  sequenceToAppend = v166 + tabIn;
  return sequenceToAppend
}
function testScript() {
  function v1(str$$8, p1$$1, offset$$13, s$$3) {
    return p1$$1 + "X"
  }
  var testArray = new Array;
  var testString = "1234567890";
  testArray.push(testString);
  var v608 = testArray[0];
  var v167 = v608 != testString;
  if(v167) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v609 = testString.search(re$$2);
  var v168 = v609 == -1;
  if(v168) {
    alert("Regular expression 'm' flag not supported. See browser compatibility page.");
    return false
  }
  var caughtException = false;
  try {
    re$$2 = eval("Exception handling not supported. Check browser compatibility page.")
  }catch(e$$4) {
    caughtException = true
  }
  var v169 = !caughtException;
  if(v169) {
    alert("Exception handling not supported. See browser compatibility page.")
  }
  testString = "123";
  testString = testString.replace(/(\d)/g, v1);
  var v170 = testString != "1X2X3X";
  if(v170) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false
  }
  var testNum = 2489.8237;
  var v610 = testNum.toFixed(3);
  var v171 = v610 != 2489.824;
  if(v171) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v611 = testNum.toPrecision(5);
  var v172 = v611 != 2489.8;
  if(v172) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v612 = theNumber$$1.search(/\d/);
  var v173 = v612 == -1;
  if(v173) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v878 = emblFile.search(/ID/);
  var v613 = v878 == -1;
  var v880 = !v613;
  if(v880) {
    var v1024 = emblFile.search(/AC/);
    var v879 = v1024 == -1;
    var v1026 = !v879;
    if(v1026) {
      var v1111 = emblFile.search(/DE/);
      var v1025 = v1111 == -1;
      var v1113 = !v1025;
      if(v1113) {
        var v1112 = emblFile.search(/SQ/);
        v1025 = v1112 == -1
      }
      v879 = v1025
    }
    v613 = v879
  }
  var v174 = v613;
  if(v174) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v614 = theNumber$$2.search(/\d/);
  var v175 = v614 == -1;
  if(v175) {
    alert("Please enter a number.");
    return false
  }
  var v177 = theNumber$$2 > maxInput$$2;
  if(v177) {
    var v615 = "Please enter a number less than or equal to " + maxInput$$2;
    var v176 = v615 + ".";
    alert(v176);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v616 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v178 = v616 != -1;
  if(v178) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v617 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v179 = v617 != -1;
  if(v179) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v881 = genBankFile.search(/LOCUS/);
  var v618 = v881 == -1;
  var v883 = !v618;
  if(v883) {
    var v1027 = genBankFile.search(/DEFINITION/);
    var v882 = v1027 == -1;
    var v1029 = !v882;
    if(v1029) {
      var v1114 = genBankFile.search(/ACCESSION/);
      var v1028 = v1114 == -1;
      var v1116 = !v1028;
      if(v1116) {
        var v1115 = genBankFile.search(/ORIGIN/);
        v1028 = v1115 == -1
      }
      v882 = v1028
    }
    v618 = v882
  }
  var v180 = v618;
  if(v180) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v884 = genBankFile$$1.search(/LOCUS/);
  var v619 = v884 == -1;
  var v886 = !v619;
  if(v886) {
    var v1030 = genBankFile$$1.search(/DEFINITION/);
    var v885 = v1030 == -1;
    var v1032 = !v885;
    if(v1032) {
      var v1117 = genBankFile$$1.search(/ACCESSION/);
      var v1031 = v1117 == -1;
      var v1119 = !v1031;
      if(v1119) {
        var v1118 = genBankFile$$1.search(/ORIGIN/);
        v1031 = v1118 == -1
      }
      v885 = v1031
    }
    v619 = v885
  }
  var v181 = v619;
  if(v181) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v620 = genBankFile$$1.search(/FEATURES {13}/);
  var v182 = v620 == -1;
  if(v182) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v887 = emblFile$$1.search(/ID/);
  var v621 = v887 == -1;
  var v889 = !v621;
  if(v889) {
    var v1033 = emblFile$$1.search(/AC/);
    var v888 = v1033 == -1;
    var v1035 = !v888;
    if(v1035) {
      var v1120 = emblFile$$1.search(/DE/);
      var v1034 = v1120 == -1;
      var v1122 = !v1034;
      if(v1122) {
        var v1121 = emblFile$$1.search(/SQ/);
        v1034 = v1121 == -1
      }
      v888 = v1034
    }
    v621 = v888
  }
  var v183 = v621;
  if(v183) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v622 = emblFile$$1.search(/^FT/m);
  var v184 = v622 == -1;
  if(v184) {
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
  var v191 = i$$5 < stopBase;
  for(;v191;) {
    var v185 = i$$5 + 1;
    lineOfText = rightNum(v185, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v623 = basePerLine / groupSize;
    var v188 = j$$6 <= v623;
    for(;v188;) {
      var v187 = k < groupSize;
      for(;v187;) {
        var v624 = k + i$$5;
        var v186 = text$$10.charAt(v624);
        lineOfText = lineOfText + v186;
        k = k + 1;
        v187 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v625 = basePerLine / groupSize;
      v188 = j$$6 <= v625
    }
    var v189 = outputWindow.document;
    var v190 = lineOfText + "\n";
    v189.write(v190);
    lineOfText = "";
    v191 = i$$5 < stopBase
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
    var v626 = adjustment < 0;
    if(v626) {
      v626 = adjusted >= 0
    }
    var v192 = v626;
    if(v192) {
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
  var v223 = i$$6 < stopBase$$2;
  for(;v223;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v627 = basePerLine$$2 / groupSize$$2;
    var v199 = j$$7 <= v627;
    for(;v199;) {
      var v195 = k$$1 < groupSize$$2;
      for(;v195;) {
        var v628 = i$$6 + k$$1;
        var v193 = v628 >= stopBase$$2;
        if(v193) {
          break
        }
        var v629 = k$$1 + i$$6;
        var v194 = text$$12.charAt(v629);
        lineOfText$$1 = lineOfText$$1 + v194;
        k$$1 = k$$1 + 1;
        v195 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v197 = numberPosition$$1 == "above";
      if(v197) {
        var v630 = adjustNumbering(i$$6, numberingAdjustment);
        var v196 = rightNum(v630, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v196
      }
      var v198 = i$$6 >= stopBase$$2;
      if(v198) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v631 = basePerLine$$2 / groupSize$$2;
      v199 = j$$7 <= v631
    }
    var v222 = numberPosition$$1 == "left";
    if(v222) {
      var v200 = outputWindow.document;
      var v1036 = adjustNumbering(lineNum, numberingAdjustment);
      var v890 = rightNum(v1036, "", 8, tabIn$$3);
      var v632 = v890 + lineOfText$$1;
      var v201 = v632 + "\n";
      v200.write(v201);
      var v205 = strands$$1 == "two";
      if(v205) {
        var v202 = outputWindow.document;
        var v1037 = adjustNumbering(lineNum, numberingAdjustment);
        var v891 = rightNum(v1037, "", 8, tabIn$$3);
        var v892 = complement(lineOfText$$1);
        var v633 = v891 + v892;
        var v203 = v633 + "\n";
        v202.write(v203);
        var v204 = outputWindow.document;
        v204.write("\n")
      }
    }else {
      var v221 = numberPosition$$1 == "right";
      if(v221) {
        var v206 = outputWindow.document;
        var v893 = adjustNumbering(i$$6, numberingAdjustment);
        var v634 = lineOfText$$1 + v893;
        var v207 = v634 + "\n";
        v206.write(v207);
        var v211 = strands$$1 == "two";
        if(v211) {
          var v208 = outputWindow.document;
          var v894 = complement(lineOfText$$1);
          var v895 = adjustNumbering(i$$6, numberingAdjustment);
          var v635 = v894 + v895;
          var v209 = v635 + "\n";
          v208.write(v209);
          var v210 = outputWindow.document;
          v210.write("\n")
        }
      }else {
        var v220 = numberPosition$$1 == "above";
        if(v220) {
          var v212 = outputWindow.document;
          var v213 = aboveNum + "\n";
          v212.write(v213);
          var v214 = outputWindow.document;
          var v215 = lineOfText$$1 + "\n";
          v214.write(v215);
          var v219 = strands$$1 == "two";
          if(v219) {
            var v216 = outputWindow.document;
            var v636 = complement(lineOfText$$1);
            var v217 = v636 + "\n";
            v216.write(v217);
            var v218 = outputWindow.document;
            v218.write("\n")
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v223 = i$$6 < stopBase$$2
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
  var v242 = i$$7 < stopBase$$3;
  for(;v242;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v637 = basePerLine$$3 / groupSize$$3;
    var v230 = j$$8 <= v637;
    for(;v230;) {
      var v226 = k$$2 < groupSize$$3;
      for(;v226;) {
        var v638 = i$$7 + k$$2;
        var v224 = v638 >= stopBase$$3;
        if(v224) {
          break
        }
        var v639 = k$$2 + i$$7;
        var v225 = text$$13.charAt(v639);
        lineOfText$$2 = lineOfText$$2 + v225;
        k$$2 = k$$2 + 1;
        v226 = k$$2 < groupSize$$3
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v228 = numberPosition$$2 == "above";
      if(v228) {
        var v227 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = aboveNum$$1 + v227
      }
      var v229 = i$$7 >= stopBase$$3;
      if(v229) {
        break
      }
      k$$2 = 0;
      j$$8 = j$$8 + 1;
      var v640 = basePerLine$$3 / groupSize$$3;
      v230 = j$$8 <= v640
    }
    var v241 = numberPosition$$2 == "left";
    if(v241) {
      var v231 = outputWindow.document;
      var v896 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v641 = v896 + lineOfText$$2;
      var v232 = v641 + "\n";
      v231.write(v232)
    }else {
      var v240 = numberPosition$$2 == "right";
      if(v240) {
        var v233 = outputWindow.document;
        var v642 = lineOfText$$2 + i$$7;
        var v234 = v642 + "\n";
        v233.write(v234)
      }else {
        var v239 = numberPosition$$2 == "above";
        if(v239) {
          var v235 = outputWindow.document;
          var v236 = aboveNum$$1 + "\n";
          v235.write(v236);
          var v237 = outputWindow.document;
          var v238 = lineOfText$$2 + "\n";
          v237.write(v238)
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v242 = i$$7 < stopBase$$3
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
  var v897 = sequence$$13.length;
  var v643 = v897 <= firstIndexToMutate;
  var v899 = !v643;
  if(v899) {
    var v898 = lastIndexToMutate < 0;
    var v1038 = !v898;
    if(v1038) {
      v898 = lastIndexToMutate <= firstIndexToMutate
    }
    v643 = v898
  }
  var v243 = v643;
  if(v243) {
    numMut = 0
  }
  var i$$8 = 0;
  var v251 = i$$8 < numMut;
  for(;v251;) {
    maxNum = sequence$$13.length;
    var v644 = Math.random();
    var v244 = v644 * maxNum;
    randNum = Math.floor(v244);
    var v645 = randNum < firstIndexToMutate;
    var v900 = !v645;
    if(v900) {
      v645 = randNum > lastIndexToMutate
    }
    var v245 = v645;
    if(v245) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v251 = i$$8 < numMut;
      continue
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for(;needNewChar;) {
      var v646 = Math.random();
      var v647 = components$$1.length;
      var v246 = v646 * v647;
      componentsIndex = Math.round(v246);
      var v648 = components$$1.length;
      var v247 = componentsIndex == v648;
      if(v247) {
        componentsIndex = 0
      }
      var v649 = components$$1[componentsIndex];
      var v248 = v649 != currentChar;
      if(v248) {
        needNewChar = false
      }
    }
    var v650 = sequence$$13.substring(0, randNum);
    var v651 = components$$1[componentsIndex];
    var v249 = v650 + v651;
    var v652 = randNum + 1;
    var v653 = sequence$$13.length;
    var v250 = sequence$$13.substring(v652, v653);
    sequence$$13 = v249 + v250;
    i$$8 = i$$8 + 1;
    v251 = i$$8 < numMut
  }
  var v252 = outputWindow.document;
  var v253 = addReturns(sequence$$13);
  v252.write(v253);
  return true
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v258 = j$$9 < lengthOut$$1;
  for(;v258;) {
    var v654 = Math.random();
    var v655 = components$$2.length;
    var v254 = v654 * v655;
    tempNum$$1 = Math.floor(v254);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v656 = sequence$$14.length;
    var v257 = v656 == 60;
    if(v257) {
      var v255 = outputWindow.document;
      var v256 = sequence$$14 + "\n";
      v255.write(v256);
      sequence$$14 = ""
    }
    j$$9 = j$$9 + 1;
    v258 = j$$9 < lengthOut$$1
  }
  var v259 = outputWindow.document;
  var v260 = sequence$$14 + "\n";
  v259.write(v260);
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
  var v264 = dnaConformation == "circular";
  if(v264) {
    var v261 = sequence$$15.substring(0, lookAhead);
    shiftValue = v261.length;
    var v1039 = sequence$$15.length;
    var v901 = v1039 - lookAhead;
    var v902 = sequence$$15.length;
    var v657 = sequence$$15.substring(v901, v902);
    var v262 = v657 + sequence$$15;
    var v263 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v262 + v263;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v265 = outputWindow.document;
  v265.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  var v266 = outputWindow.document;
  var v1040 = '<tr><td class="title" width="200px">' + "Site:";
  var v903 = v1040 + '</td><td class="title">';
  var v658 = v903 + "Positions:";
  var v267 = v658 + "</td></tr>\n";
  v266.write(v267);
  var i$$9 = 0;
  var v659 = arrayOfItems.length;
  var v283 = i$$9 < v659;
  for(;v283;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v660 = arrayOfItems[i$$9];
    var v268 = v660.match(/\/.+\//);
    matchExp = v268 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    var v1041 = arrayOfItems[i$$9];
    var v904 = v1041.match(/\)\D*\d+/);
    var v661 = v904.toString();
    var v269 = v661.replace(/\)\D*/, "");
    cutDistance = parseFloat(v269);
    var v275 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v275;) {
      var v270 = matchExp.lastIndex;
      matchPosition = v270 - cutDistance;
      var v662 = matchPosition >= lowerLimit;
      if(v662) {
        v662 = matchPosition < upperLimit
      }
      var v273 = v662;
      if(v273) {
        timesFound = timesFound + 1;
        var v271 = tempString$$1 + ", ";
        var v663 = matchPosition - shiftValue;
        var v272 = v663 + 1;
        tempString$$1 = v271 + v272
      }
      var v274 = matchExp;
      var v905 = matchExp.lastIndex;
      var v1042 = RegExp.lastMatch;
      var v906 = v1042.length;
      var v664 = v905 - v906;
      v274.lastIndex = v664 + 1;
      v275 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    var v665 = tempString$$1.search(/\d/);
    var v276 = v665 != -1;
    if(v276) {
      tempString$$1 = tempString$$1.replace(/none,\s*/, "")
    }
    var v280 = timesFound == 0;
    if(v280) {
      backGroundClass = "none"
    }else {
      var v279 = timesFound == 1;
      if(v279) {
        backGroundClass = "one"
      }else {
        var v278 = timesFound == 2;
        if(v278) {
          backGroundClass = "two"
        }else {
          var v277 = timesFound == 3;
          if(v277) {
            backGroundClass = "three"
          }else {
            backGroundClass = "many"
          }
        }
      }
    }
    var v281 = outputWindow.document;
    var v1251 = '<tr><td class="' + backGroundClass;
    var v1214 = v1251 + '">';
    var v1307 = arrayOfItems[i$$9];
    var v1281 = v1307.match(/\([^\(]+\)/);
    var v1252 = v1281.toString();
    var v1215 = v1252.replace(/\(|\)/g, "");
    var v1172 = v1214 + v1215;
    var v1123 = v1172 + '</td><td class="';
    var v1043 = v1123 + backGroundClass;
    var v907 = v1043 + '">';
    var v666 = v907 + tempString$$1;
    var v282 = v666 + "</td></tr>\n";
    v281.write(v282);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v667 = arrayOfItems.length;
    v283 = i$$9 < v667
  }
  var v284 = outputWindow.document;
  v284.write("</tbody></table>\n");
  return true
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v285 = outputWindow.document;
  v285.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  var v286 = outputWindow.document;
  var v1173 = '<tr><td class="title">' + "Pattern:";
  var v1124 = v1173 + '</td><td class="title">';
  var v1044 = v1124 + "Times found:";
  var v908 = v1044 + '</td><td class="title">';
  var v668 = v908 + "Percentage:";
  var v287 = v668 + "</td></tr>\n";
  v286.write(v287);
  var i$$10 = 0;
  var v669 = arrayOfItems$$1.length;
  var v296 = i$$10 < v669;
  for(;v296;) {
    var tempNumber = 0;
    var v670 = arrayOfItems$$1[i$$10];
    var v288 = v670.match(/\/[^\/]+\//);
    var matchExp$$1 = v288 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    var v671 = sequence$$16.search(matchExp$$1);
    var v290 = v671 != -1;
    if(v290) {
      var v289 = sequence$$16.match(matchExp$$1);
      tempNumber = v289.length
    }
    var percentage = 0;
    var v909 = originalLength + 1;
    var v1125 = arrayOfItems$$1[i$$10];
    var v1045 = v1125.match(/\d+/);
    var v910 = parseFloat(v1045);
    var v672 = v909 - v910;
    var v293 = v672 > 0;
    if(v293) {
      var v291 = 100 * tempNumber;
      var v673 = originalLength + 1;
      var v1046 = arrayOfItems$$1[i$$10];
      var v911 = v1046.match(/\d+/);
      var v674 = parseFloat(v911);
      var v292 = v673 - v674;
      percentage = v291 / v292
    }
    var v294 = outputWindow.document;
    var v1308 = arrayOfItems$$1[i$$10];
    var v1282 = v1308.match(/\([^\(]+\)\b/);
    var v1253 = v1282.toString();
    var v1216 = v1253.replace(/\(|\)/g, "");
    var v1174 = "<tr><td>" + v1216;
    var v1126 = v1174 + "</td><td>";
    var v1047 = v1126 + tempNumber;
    var v912 = v1047 + "</td><td>";
    var v913 = percentage.toFixed(2);
    var v675 = v912 + v913;
    var v295 = v675 + "</td></tr>\n";
    v294.write(v295);
    i$$10 = i$$10 + 1;
    var v676 = arrayOfItems$$1.length;
    v296 = i$$10 < v676
  }
  var v297 = outputWindow.document;
  v297.write("</tbody></table>\n");
  return true
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v677 = sequence$$17.length;
  var v304 = v677 > 0;
  for(;v304;) {
    maxNum$$1 = sequence$$17.length;
    var v678 = Math.random();
    var v298 = v678 * maxNum$$1;
    randNum$$1 = Math.floor(v298);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v299 = randNum$$1 + 1;
    var v300 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v299, v300);
    sequence$$17 = tempString1 + tempString2;
    var v679 = tempSeq.length;
    var v303 = v679 == 60;
    if(v303) {
      var v301 = outputWindow.document;
      var v302 = tempSeq + "\n";
      v301.write(v302);
      tempSeq = ""
    }
    var v680 = sequence$$17.length;
    v304 = v680 > 0
  }
  var v305 = outputWindow.document;
  var v306 = tempSeq + "\n";
  v305.write(v306);
  return true
}
function getGeneticCodeString(type$$25) {
  var v914 = type$$25.toLowerCase();
  var v681 = v914 == "standard";
  var v916 = !v681;
  if(v916) {
    var v915 = type$$25.toLowerCase();
    v681 = v915 == "transl_table=1"
  }
  var v308 = v681;
  if(v308) {
    var v1491 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1474 = v1491 + "/ga[tcuy]/=D,";
    var v1457 = v1474 + "/ga[agr]/=E,";
    var v1439 = v1457 + "/[tu][tu][tcuy]/=F,";
    var v1420 = v1439 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1399 = v1420 + "/ca[tcuy]/=H,";
    var v1378 = v1399 + "/a[tu][atcuwmhy]/=I,";
    var v1357 = v1378 + "/aa[agr]/=K,";
    var v1333 = v1357 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1309 = v1333 + "/a[tu]g/=M,";
    var v1283 = v1309 + "/aa[tucy]/=N,";
    var v1254 = v1283 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1217 = v1254 + "/ca[agr]/=Q,";
    var v1175 = v1217 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1127 = v1175 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1048 = v1127 + "/ac[acgturyswkmbdhvn]/=T,";
    var v917 = v1048 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v682 = v917 + "/[tu]gg/=W,";
    var v307 = v682 + "/[tu]a[ctuy]/=Y,";
    return v307 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*"
  }
  var v683 = type$$25.toLowerCase();
  var v310 = v683 == "transl_table=2";
  if(v310) {
    var v1492 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1475 = v1492 + "/ga[tcuy]/=D,";
    var v1458 = v1475 + "/ga[agr]/=E,";
    var v1440 = v1458 + "/[tu][tu][tcuy]/=F,";
    var v1421 = v1440 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1400 = v1421 + "/ca[tcuy]/=H,";
    var v1379 = v1400 + "/a[tu][tcuy]/=I,";
    var v1358 = v1379 + "/aa[agr]/=K,";
    var v1334 = v1358 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1310 = v1334 + "/a[tu][agr]/=M,";
    var v1284 = v1310 + "/aa[tucy]/=N,";
    var v1255 = v1284 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1218 = v1255 + "/ca[agr]/=Q,";
    var v1176 = v1218 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1128 = v1176 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1049 = v1128 + "/ac[acgturyswkmbdhvn]/=T,";
    var v918 = v1049 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v684 = v918 + "/[tu]g[agr]/=W,";
    var v309 = v684 + "/[tu]a[ctuy]/=Y,";
    return v309 + "/[tu]a[agr]|ag[agr]/=*"
  }
  var v685 = type$$25.toLowerCase();
  var v312 = v685 == "transl_table=3";
  if(v312) {
    var v1493 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1476 = v1493 + "/ga[tcuy]/=D,";
    var v1459 = v1476 + "/ga[agr]/=E,";
    var v1441 = v1459 + "/[tu][tu][tcuy]/=F,";
    var v1422 = v1441 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1401 = v1422 + "/ca[tcuy]/=H,";
    var v1380 = v1401 + "/a[tu][tcuy]/=I,";
    var v1359 = v1380 + "/aa[agr]/=K,";
    var v1335 = v1359 + "/[tu][tu][agr]/=L,";
    var v1311 = v1335 + "/a[tu][agr]/=M,";
    var v1285 = v1311 + "/aa[tucy]/=N,";
    var v1256 = v1285 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1219 = v1256 + "/ca[agr]/=Q,";
    var v1177 = v1219 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1129 = v1177 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1050 = v1129 + "/ac[acgturyswkmbdhvn]|c[tu][acgturyswkmbdhvn]/=T,";
    var v919 = v1050 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v686 = v919 + "/[tu]g[agr]/=W,";
    var v311 = v686 + "/[tu]a[ctuy]/=Y,";
    return v311 + "/[tu]a[agr]/=*"
  }
  var v687 = type$$25.toLowerCase();
  var v314 = v687 == "transl_table=4";
  if(v314) {
    var v1494 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1477 = v1494 + "/ga[tcuy]/=D,";
    var v1460 = v1477 + "/ga[agr]/=E,";
    var v1442 = v1460 + "/[tu][tu][tcuy]/=F,";
    var v1423 = v1442 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1402 = v1423 + "/ca[tcuy]/=H,";
    var v1381 = v1402 + "/a[tu][atcuwmhy]/=I,";
    var v1360 = v1381 + "/aa[agr]/=K,";
    var v1336 = v1360 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1312 = v1336 + "/a[tu]g/=M,";
    var v1286 = v1312 + "/aa[tucy]/=N,";
    var v1257 = v1286 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1220 = v1257 + "/ca[agr]/=Q,";
    var v1178 = v1220 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1130 = v1178 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1051 = v1130 + "/ac[acgturyswkmbdhvn]/=T,";
    var v920 = v1051 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v688 = v920 + "/[tu]g[agr]/=W,";
    var v313 = v688 + "/[tu]a[ctuy]/=Y,";
    return v313 + "/[tu]a[agr]/=*"
  }
  var v689 = type$$25.toLowerCase();
  var v316 = v689 == "transl_table=5";
  if(v316) {
    var v1495 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1478 = v1495 + "/ga[tcuy]/=D,";
    var v1461 = v1478 + "/ga[agr]/=E,";
    var v1443 = v1461 + "/[tu][tu][tcuy]/=F,";
    var v1424 = v1443 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1403 = v1424 + "/ca[tcuy]/=H,";
    var v1382 = v1403 + "/a[tu][tcuy]/=I,";
    var v1361 = v1382 + "/aa[agr]/=K,";
    var v1337 = v1361 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1313 = v1337 + "/a[tu][agr]/=M,";
    var v1287 = v1313 + "/aa[tucy]/=N,";
    var v1258 = v1287 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1221 = v1258 + "/ca[agr]/=Q,";
    var v1179 = v1221 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1131 = v1179 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v1052 = v1131 + "/ac[acgturyswkmbdhvn]/=T,";
    var v921 = v1052 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v690 = v921 + "/[tu]g[agr]/=W,";
    var v315 = v690 + "/[tu]a[ctuy]/=Y,";
    return v315 + "/[tu]a[agr]/=*"
  }
  var v691 = type$$25.toLowerCase();
  var v318 = v691 == "transl_table=6";
  if(v318) {
    var v1496 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1479 = v1496 + "/ga[tcuy]/=D,";
    var v1462 = v1479 + "/ga[agr]/=E,";
    var v1444 = v1462 + "/[tu][tu][tcuy]/=F,";
    var v1425 = v1444 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1404 = v1425 + "/ca[tcuy]/=H,";
    var v1383 = v1404 + "/a[tu][atcuwmhy]/=I,";
    var v1362 = v1383 + "/aa[agr]/=K,";
    var v1338 = v1362 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1314 = v1338 + "/a[tu]g/=M,";
    var v1288 = v1314 + "/aa[tucy]/=N,";
    var v1259 = v1288 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1222 = v1259 + "/ca[agr]|[tu]a[agr]|[tcuy]a[agr]/=Q,";
    var v1180 = v1222 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1132 = v1180 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1053 = v1132 + "/ac[acgturyswkmbdhvn]/=T,";
    var v922 = v1053 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v692 = v922 + "/[tu]gg/=W,";
    var v317 = v692 + "/[tu]a[ctuy]/=Y,";
    return v317 + "/[tu]ga/=*"
  }
  var v693 = type$$25.toLowerCase();
  var v320 = v693 == "transl_table=9";
  if(v320) {
    var v1497 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1480 = v1497 + "/ga[tcuy]/=D,";
    var v1463 = v1480 + "/ga[agr]/=E,";
    var v1445 = v1463 + "/[tu][tu][tcuy]/=F,";
    var v1426 = v1445 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1405 = v1426 + "/ca[tcuy]/=H,";
    var v1384 = v1405 + "/a[tu][atcuwmhy]/=I,";
    var v1363 = v1384 + "/aag/=K,";
    var v1339 = v1363 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1315 = v1339 + "/a[tu]g/=M,";
    var v1289 = v1315 + "/aa[atcuwmhy]/=N,";
    var v1260 = v1289 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1223 = v1260 + "/ca[agr]/=Q,";
    var v1181 = v1223 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1133 = v1181 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v1054 = v1133 + "/ac[acgturyswkmbdhvn]/=T,";
    var v923 = v1054 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v694 = v923 + "/[tu]g[agr]/=W,";
    var v319 = v694 + "/[tu]a[ctuy]/=Y,";
    return v319 + "/[tu]a[agr]/=*"
  }
  var v695 = type$$25.toLowerCase();
  var v322 = v695 == "transl_table=10";
  if(v322) {
    var v1498 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[atcuwmhy]/=C,";
    var v1481 = v1498 + "/ga[tcuy]/=D,";
    var v1464 = v1481 + "/ga[agr]/=E,";
    var v1446 = v1464 + "/[tu][tu][tcuy]/=F,";
    var v1427 = v1446 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1406 = v1427 + "/ca[tcuy]/=H,";
    var v1385 = v1406 + "/a[tu][atcuwmhy]/=I,";
    var v1364 = v1385 + "/aa[agr]/=K,";
    var v1340 = v1364 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1316 = v1340 + "/a[tu]g/=M,";
    var v1290 = v1316 + "/aa[tucy]/=N,";
    var v1261 = v1290 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1224 = v1261 + "/ca[agr]/=Q,";
    var v1182 = v1224 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1134 = v1182 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1055 = v1134 + "/ac[acgturyswkmbdhvn]/=T,";
    var v924 = v1055 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v696 = v924 + "/[tu]gg/=W,";
    var v321 = v696 + "/[tu]a[ctuy]/=Y,";
    return v321 + "/[tu]a[agr]/=*"
  }
  var v697 = type$$25.toLowerCase();
  var v324 = v697 == "transl_table=11";
  if(v324) {
    var v1499 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1482 = v1499 + "/ga[tcuy]/=D,";
    var v1465 = v1482 + "/ga[agr]/=E,";
    var v1447 = v1465 + "/[tu][tu][tcuy]/=F,";
    var v1428 = v1447 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1407 = v1428 + "/ca[tcuy]/=H,";
    var v1386 = v1407 + "/a[tu][atcuwmhy]/=I,";
    var v1365 = v1386 + "/aa[agr]/=K,";
    var v1341 = v1365 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1317 = v1341 + "/a[tu]g/=M,";
    var v1291 = v1317 + "/aa[tucy]/=N,";
    var v1262 = v1291 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1225 = v1262 + "/ca[agr]/=Q,";
    var v1183 = v1225 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1135 = v1183 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1056 = v1135 + "/ac[acgturyswkmbdhvn]/=T,";
    var v925 = v1056 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v698 = v925 + "/[tu]gg/=W,";
    var v323 = v698 + "/[tu]a[ctuy]/=Y,";
    return v323 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*"
  }
  var v699 = type$$25.toLowerCase();
  var v326 = v699 == "transl_table=12";
  if(v326) {
    var v1500 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1483 = v1500 + "/ga[tcuy]/=D,";
    var v1466 = v1483 + "/ga[agr]/=E,";
    var v1448 = v1466 + "/[tu][tu][tcuy]/=F,";
    var v1429 = v1448 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1408 = v1429 + "/ca[tcuy]/=H,";
    var v1387 = v1408 + "/a[tu][atcuwmhy]/=I,";
    var v1366 = v1387 + "/aa[agr]/=K,";
    var v1342 = v1366 + "/c[tu][atcuwmhy]|[tu][tu][agr]|[ctuy][tu]a/=L,";
    var v1318 = v1342 + "/a[tu]g/=M,";
    var v1292 = v1318 + "/aa[tucy]/=N,";
    var v1263 = v1292 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1226 = v1263 + "/ca[agr]/=Q,";
    var v1184 = v1226 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1136 = v1184 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]|c[tu]g/=S,";
    var v1057 = v1136 + "/ac[acgturyswkmbdhvn]/=T,";
    var v926 = v1057 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v700 = v926 + "/[tu]gg/=W,";
    var v325 = v700 + "/[tu]a[ctuy]/=Y,";
    return v325 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*"
  }
  var v701 = type$$25.toLowerCase();
  var v328 = v701 == "transl_table=13";
  if(v328) {
    var v1501 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1484 = v1501 + "/ga[tcuy]/=D,";
    var v1467 = v1484 + "/ga[agr]/=E,";
    var v1449 = v1467 + "/[tu][tu][tcuy]/=F,";
    var v1430 = v1449 + "/gg[acgturyswkmbdhvn]|ag[agr]|[agr]g[agr]/=G,";
    var v1409 = v1430 + "/ca[tcuy]/=H,";
    var v1388 = v1409 + "/a[tu][tcuy]/=I,";
    var v1367 = v1388 + "/aa[agr]/=K,";
    var v1343 = v1367 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1319 = v1343 + "/a[tu][agr]/=M,";
    var v1293 = v1319 + "/aa[tucy]/=N,";
    var v1264 = v1293 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1227 = v1264 + "/ca[agr]/=Q,";
    var v1185 = v1227 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1137 = v1185 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1058 = v1137 + "/ac[acgturyswkmbdhvn]/=T,";
    var v927 = v1058 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v702 = v927 + "/[tu]g[agr]/=W,";
    var v327 = v702 + "/[tu]a[ctuy]/=Y,";
    return v327 + "/[tu]a[agr]/=*"
  }
  var v703 = type$$25.toLowerCase();
  var v330 = v703 == "transl_table=14";
  if(v330) {
    var v1502 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1485 = v1502 + "/ga[tcuy]/=D,";
    var v1468 = v1485 + "/ga[agr]/=E,";
    var v1450 = v1468 + "/[tu][tu][tcuy]/=F,";
    var v1431 = v1450 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1410 = v1431 + "/ca[tcuy]/=H,";
    var v1389 = v1410 + "/a[tu][atcuwmhy]/=I,";
    var v1368 = v1389 + "/aag/=K,";
    var v1344 = v1368 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1320 = v1344 + "/a[tu]g/=M,";
    var v1294 = v1320 + "/aa[atcuwmhy]/=N,";
    var v1265 = v1294 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1228 = v1265 + "/ca[agr]/=Q,";
    var v1186 = v1228 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1138 = v1186 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v1059 = v1138 + "/ac[acgturyswkmbdhvn]/=T,";
    var v928 = v1059 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v704 = v928 + "/[tu]g[agr]/=W,";
    var v329 = v704 + "/[tu]a[atcuwmhy]/=Y,";
    return v329 + "/[tu]ag/=*"
  }
  var v705 = type$$25.toLowerCase();
  var v332 = v705 == "transl_table=15";
  if(v332) {
    var v1503 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1486 = v1503 + "/ga[tcuy]/=D,";
    var v1469 = v1486 + "/ga[agr]/=E,";
    var v1451 = v1469 + "/[tu][tu][tcuy]/=F,";
    var v1432 = v1451 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1411 = v1432 + "/ca[tcuy]/=H,";
    var v1390 = v1411 + "/a[tu][atcuwmhy]/=I,";
    var v1369 = v1390 + "/aa[agr]/=K,";
    var v1345 = v1369 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1321 = v1345 + "/a[tu]g/=M,";
    var v1295 = v1321 + "/aa[tucy]/=N,";
    var v1266 = v1295 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1229 = v1266 + "/ca[agr]|[tu]ag|[tcuy]ag/=Q,";
    var v1187 = v1229 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1139 = v1187 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1060 = v1139 + "/ac[acgturyswkmbdhvn]/=T,";
    var v929 = v1060 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v706 = v929 + "/[tu]gg/=W,";
    var v331 = v706 + "/[tu]a[ctuy]/=Y,";
    return v331 + "/[tu][agr]a/=*"
  }
  var v707 = type$$25.toLowerCase();
  var v334 = v707 == "transl_table=16";
  if(v334) {
    var v1504 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1487 = v1504 + "/ga[tcuy]/=D,";
    var v1470 = v1487 + "/ga[agr]/=E,";
    var v1452 = v1470 + "/[tu][tu][tcuy]/=F,";
    var v1433 = v1452 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1412 = v1433 + "/ca[tcuy]/=H,";
    var v1391 = v1412 + "/a[tu][atcuwmhy]/=I,";
    var v1370 = v1391 + "/aa[agr]/=K,";
    var v1346 = v1370 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]|[tu]ag|[tu][atuw]g/=L,";
    var v1322 = v1346 + "/a[tu]g/=M,";
    var v1296 = v1322 + "/aa[tucy]/=N,";
    var v1267 = v1296 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1230 = v1267 + "/ca[agr]/=Q,";
    var v1188 = v1230 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1140 = v1188 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1061 = v1140 + "/ac[acgturyswkmbdhvn]/=T,";
    var v930 = v1061 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v708 = v930 + "/[tu]gg/=W,";
    var v333 = v708 + "/[tu]a[ctuy]/=Y,";
    return v333 + "/[tu][agr]a/=*"
  }
  var v709 = type$$25.toLowerCase();
  var v336 = v709 == "transl_table=21";
  if(v336) {
    var v1505 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1488 = v1505 + "/ga[tcuy]/=D,";
    var v1471 = v1488 + "/ga[agr]/=E,";
    var v1453 = v1471 + "/[tu][tu][tcuy]/=F,";
    var v1434 = v1453 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1413 = v1434 + "/ca[tcuy]/=H,";
    var v1392 = v1413 + "/a[tu][tcuy]/=I,";
    var v1371 = v1392 + "/aag/=K,";
    var v1347 = v1371 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1323 = v1347 + "/a[tu][agr]/=M,";
    var v1297 = v1323 + "/aa[atcuwmhy]/=N,";
    var v1268 = v1297 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1231 = v1268 + "/ca[agr]/=Q,";
    var v1189 = v1231 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1141 = v1189 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v1062 = v1141 + "/ac[acgturyswkmbdhvn]/=T,";
    var v931 = v1062 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v710 = v931 + "/[tu]g[agr]/=W,";
    var v335 = v710 + "/[tu]a[ctuy]/=Y,";
    return v335 + "/[tu]a[agr]/=*"
  }
  var v711 = type$$25.toLowerCase();
  var v338 = v711 == "transl_table=22";
  if(v338) {
    var v1506 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1489 = v1506 + "/ga[tcuy]/=D,";
    var v1472 = v1489 + "/ga[agr]/=E,";
    var v1454 = v1472 + "/[tu][tu][tcuy]/=F,";
    var v1435 = v1454 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1414 = v1435 + "/ca[tcuy]/=H,";
    var v1393 = v1414 + "/a[tu][atcuwmhy]/=I,";
    var v1372 = v1393 + "/aa[agr]/=K,";
    var v1348 = v1372 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]|[tu]ag|[tu][atuw]g/=L,";
    var v1324 = v1348 + "/a[tu]g/=M,";
    var v1298 = v1324 + "/aa[tucy]/=N,";
    var v1269 = v1298 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1232 = v1269 + "/ca[agr]/=Q,";
    var v1190 = v1232 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1142 = v1190 + "/[tu]c[cgtyskb]|ag[ct]/=S,";
    var v1063 = v1142 + "/ac[acgturyswkmbdhvn]/=T,";
    var v932 = v1063 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v712 = v932 + "/[tu]gg/=W,";
    var v337 = v712 + "/[tu]a[ctuy]/=Y,";
    return v337 + "/[tu][agcrsmv]a/=*"
  }
  var v713 = type$$25.toLowerCase();
  var v340 = v713 == "transl_table=23";
  if(v340) {
    var v1507 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1490 = v1507 + "/ga[tcuy]/=D,";
    var v1473 = v1490 + "/ga[agr]/=E,";
    var v1455 = v1473 + "/[tu][tu][tcuy]/=F,";
    var v1436 = v1455 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1415 = v1436 + "/ca[tcuy]/=H,";
    var v1394 = v1415 + "/a[tu][atcuwmhy]/=I,";
    var v1373 = v1394 + "/aa[agr]/=K,";
    var v1349 = v1373 + "/c[tu][acgturyswkmbdhvn]|[ctuy][tu]g/=L,";
    var v1325 = v1349 + "/a[tu]g/=M,";
    var v1299 = v1325 + "/aa[tucy]/=N,";
    var v1270 = v1299 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1233 = v1270 + "/ca[agr]/=Q,";
    var v1191 = v1233 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1143 = v1191 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1064 = v1143 + "/ac[acgturyswkmbdhvn]/=T,";
    var v933 = v1064 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v714 = v933 + "/[tu]gg/=W,";
    var v339 = v714 + "/[tu]a[ctuy]/=Y,";
    return v339 + "/[tu]a[agr]|[tu]ga|[tu][agtrwkd]a/=*"
  }
  return true
}
function mutateForDigest(theDocument) {
  var newDna = "";
  var mutatedDna = "";
  var title$$9 = "";
  var maxInput$$3 = 1E4;
  var TOPOLOGY = "linear";
  var v715 = testScript();
  var v341 = v715 == false;
  if(v341) {
    return false
  }
  var restrictionSiteCollection;
  var mutatedRestrictionSitesCollection;
  var v1234 = theDocument.forms;
  var v1192 = v1234[0];
  var v1144 = v1192.elements;
  var v1065 = v1144[7];
  var v934 = v1065.options;
  var v1235 = theDocument.forms;
  var v1193 = v1235[0];
  var v1145 = v1193.elements;
  var v1066 = v1145[7];
  var v935 = v1066.selectedIndex;
  var v716 = v934[v935];
  var v342 = v716.value;
  var geneticCode = getGeneticCodeString(v342);
  var v1194 = theDocument.forms;
  var v1146 = v1194[0];
  var v1067 = v1146.elements;
  var v936 = v1067[4];
  var v717 = v936.options;
  var v1195 = theDocument.forms;
  var v1147 = v1195[0];
  var v1068 = v1147.elements;
  var v937 = v1068[4];
  var v718 = v937.selectedIndex;
  var v343 = v717[v718];
  var restrictionSites = v343.value;
  var v1236 = theDocument.forms;
  var v1196 = v1236[0];
  var v1148 = v1196.elements;
  var v1069 = v1148[0];
  var v938 = checkFormElement(v1069);
  var v719 = v938 == false;
  var v940 = !v719;
  if(v940) {
    var v1271 = theDocument.forms;
    var v1237 = v1271[0];
    var v1197 = v1237.elements;
    var v1149 = v1197[0];
    var v1070 = v1149.value;
    var v939 = checkSequenceLength(v1070, maxInput$$3);
    v719 = v939 == false
  }
  var v344 = v719;
  if(v344) {
    return false
  }
  geneticCode = geneticCode.split(/,/);
  var v720 = checkGeneticCode(geneticCode);
  var v345 = v720 == false;
  if(v345) {
    return false
  }
  restrictionSites = restrictionSites.split(/,/);
  var v721 = checkRestPatterns(restrictionSites);
  var v346 = v721 == false;
  if(v346) {
    return false
  }
  var mutatedRestrictionSites = buildMutatedRestrictionSites(restrictionSites);
  openWindow("Mutate for Digest");
  openPre();
  var v347 = outputWindow.document;
  var v722 = '<span class="mutated_sequence">' + "sequence and translations for mutated version";
  var v348 = v722 + "</span>\n";
  v347.write(v348);
  var v349 = outputWindow.document;
  var v723 = '<span class="current_sequence">' + "sequence and translations for non-mutated version";
  var v350 = v723 + "</span>\n";
  v349.write(v350);
  var v351 = outputWindow.document;
  v351.write("\n");
  var v1150 = theDocument.forms;
  var v1071 = v1150[0];
  var v941 = v1071.elements;
  var v724 = v941[0];
  var v352 = v724.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v352);
  var i$$11 = 0;
  var v725 = arrayOfFasta$$1.length;
  var v360 = i$$11 < v725;
  for(;v360;) {
    var v353 = arrayOfFasta$$1[i$$11];
    newDna = getSequenceFromFasta(v353);
    var v354 = arrayOfFasta$$1[i$$11];
    title$$9 = getTitleFromFasta(v354);
    newDna = removeNonDna(newDna);
    var v355 = outputWindow.document;
    var v356 = getInfoFromTitleAndSequenceAndTopology(title$$9, newDna, TOPOLOGY);
    v355.write(v356);
    restrictionSiteCollection = findRestrictionSites(newDna, restrictionSites, TOPOLOGY);
    restrictionSiteCollection.sortRestrictionSites();
    mutatedRestrictionSiteCollection = findRestrictionSites(newDna, mutatedRestrictionSites, TOPOLOGY);
    mutatedRestrictionSiteCollection = removeNormalMatchesFromMutantSites(mutatedRestrictionSiteCollection, restrictionSiteCollection);
    mutatedRestrictionSiteCollection = removeOverlappingMatchesFromMutantSites(mutatedRestrictionSiteCollection);
    mutatedDna = buildMutatedDna(newDna, mutatedRestrictionSiteCollection);
    var v1238 = theDocument.forms;
    var v1198 = v1238[0];
    var v1151 = v1198.elements;
    var v1072 = v1151[5];
    var v942 = v1072.options;
    var v1239 = theDocument.forms;
    var v1199 = v1239[0];
    var v1152 = v1199.elements;
    var v1073 = v1152[5];
    var v943 = v1073.selectedIndex;
    var v726 = v942[v943];
    var v357 = v726.value;
    var v1240 = theDocument.forms;
    var v1200 = v1240[0];
    var v1153 = v1200.elements;
    var v1074 = v1153[6];
    var v944 = v1074.options;
    var v1241 = theDocument.forms;
    var v1201 = v1241[0];
    var v1154 = v1201.elements;
    var v1075 = v1154[6];
    var v945 = v1075.selectedIndex;
    var v727 = v944[v945];
    var v358 = v727.value;
    layoutRestTrans(newDna, mutatedDna, geneticCode, restrictionSiteCollection, mutatedRestrictionSiteCollection, v357, v358);
    var v359 = outputWindow.document;
    v359.write("\n\n");
    i$$11 = i$$11 + 1;
    var v728 = arrayOfFasta$$1.length;
    v360 = i$$11 < v728
  }
  closePre();
  closeWindow();
  return true
}
function layoutRestTrans(dnaSequence$$3, mutatedDnaSequence, geneticCode$$1, restrictionSiteCollection$$1, mutatedRestrictionSiteCollection$$1, basesPerLine, readingFrame) {
  basesPerLine = parseInt(basesPerLine);
  var geneticCodeMatchExp$$2 = getGeneticCodeMatchExp(geneticCode$$1);
  var geneticCodeMatchResult$$2 = getGeneticCodeMatchResult(geneticCode$$1);
  var spaceString = "                                                                                                                                  ";
  var textLayout = new TextLayout;
  var v729 = readingFrame == "3";
  var v946 = !v729;
  if(v946) {
    v729 = readingFrame == "all_three"
  }
  var v363 = v729;
  if(v363) {
    var translationMut = new TranslationComponent;
    translationMut.spanStart = '<span class="mutated_sequence">';
    translationMut.spanEnd = "</span>";
    var v1076 = dnaSequence$$3.length;
    var v947 = mutatedDnaSequence.substring(2, v1076);
    var v730 = translate(v947, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    var v361 = "  " + v730;
    translationMut.setCharacters(v361);
    textLayout.addComponent(translationMut);
    var translation = new TranslationComponent;
    translation.spanStart = '<span class="current_sequence">';
    translation.spanEnd = "</span>";
    var v1077 = dnaSequence$$3.length;
    var v948 = dnaSequence$$3.substring(2, v1077);
    var v731 = translate(v948, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    var v362 = "  " + v731;
    translation.setCharacters(v362);
    textLayout.addComponent(translation)
  }
  var v732 = readingFrame == "2";
  var v949 = !v732;
  if(v949) {
    v732 = readingFrame == "all_three"
  }
  var v366 = v732;
  if(v366) {
    translationMut = new TranslationComponent;
    translationMut.spanStart = '<span class="mutated_sequence">';
    translationMut.spanEnd = "</span>";
    var v1078 = dnaSequence$$3.length;
    var v950 = mutatedDnaSequence.substring(1, v1078);
    var v733 = translate(v950, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    var v364 = " " + v733;
    translationMut.setCharacters(v364);
    textLayout.addComponent(translationMut);
    translation = new TranslationComponent;
    translation.spanStart = '<span class="current_sequence">';
    translation.spanEnd = "</span>";
    var v1079 = dnaSequence$$3.length;
    var v951 = dnaSequence$$3.substring(1, v1079);
    var v734 = translate(v951, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    var v365 = " " + v734;
    translation.setCharacters(v365);
    textLayout.addComponent(translation)
  }
  var v735 = readingFrame == "1";
  var v952 = !v735;
  if(v952) {
    v735 = readingFrame == "all_three"
  }
  var v369 = v735;
  if(v369) {
    translationMut = new TranslationComponent;
    translationMut.spanStart = '<span class="mutated_sequence">';
    translationMut.spanEnd = "</span>";
    var v367 = translate(mutatedDnaSequence, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    translationMut.setCharacters(v367);
    textLayout.addComponent(translationMut);
    translation = new TranslationComponent;
    translation.spanStart = '<span class="current_sequence">';
    translation.spanEnd = "</span>";
    var v368 = translate(dnaSequence$$3, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    translation.setCharacters(v368);
    textLayout.addComponent(translation)
  }
  var v372 = readingFrame == "uppercase";
  if(v372) {
    translationMut = new UppercaseTranslationComponent;
    translationMut.spanStart = '<span class="mutated_sequence">';
    translationMut.spanEnd = "</span>";
    var v370 = uppercaseTranslate(mutatedDnaSequence, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    translationMut.setCharacters(v370);
    textLayout.addComponent(translationMut);
    translation = new UppercaseTranslationComponent;
    translation.spanStart = '<span class="current_sequence">';
    translation.spanEnd = "</span>";
    var v371 = uppercaseTranslate(dnaSequence$$3, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    translation.setCharacters(v371);
    textLayout.addComponent(translation)
  }
  var dnaMut = new DnaComponent;
  dnaMut.spanStart = '<span class="mutated_sequence">';
  dnaMut.spanEnd = "</span>";
  dnaMut.setCharacters(mutatedDnaSequence);
  textLayout.addComponent(dnaMut);
  var dna = new DnaComponent;
  dna.spanStart = '<span class="current_sequence">';
  dna.spanEnd = "</span>";
  dna.setCharacters(dnaSequence$$3);
  textLayout.addComponent(dna);
  var sitesInRange = new Array;
  var sitesInRangeMut = new Array;
  var i$$12 = 0;
  var v736 = dnaSequence$$3.length;
  var v382 = i$$12 < v736;
  for(;v382;) {
    var v373 = i$$12 + basesPerLine;
    sitesInRange = restrictionSiteCollection$$1.getSitesInRange(i$$12, v373);
    var v374 = i$$12 + basesPerLine;
    sitesInRangeMut = mutatedRestrictionSiteCollection$$1.getSitesInRange(i$$12, v374);
    sitesInRange.reverse();
    sitesInRangeMut.reverse();
    var j$$10 = 0;
    var v737 = sitesInRangeMut.length;
    var v377 = j$$10 < v737;
    for(;v377;) {
      var v375 = outputWindow.document;
      var v1272 = sitesInRangeMut[j$$10];
      var v1242 = v1272.position;
      var v1202 = v1242 - i$$12;
      var v1155 = v1202 + 9;
      var v1080 = spaceString.substring(0, v1155);
      var v953 = v1080 + '<span class="mutated_sequence">';
      var v1081 = sitesInRangeMut[j$$10];
      var v954 = v1081.label;
      var v738 = v953 + v954;
      var v376 = v738 + "</span>\n";
      v375.write(v376);
      j$$10 = j$$10 + 1;
      var v739 = sitesInRangeMut.length;
      v377 = j$$10 < v739
    }
    j$$10 = 0;
    var v740 = sitesInRange.length;
    var v380 = j$$10 < v740;
    for(;v380;) {
      var v378 = outputWindow.document;
      var v1273 = sitesInRange[j$$10];
      var v1243 = v1273.position;
      var v1203 = v1243 - i$$12;
      var v1156 = v1203 + 9;
      var v1082 = spaceString.substring(0, v1156);
      var v955 = v1082 + '<span class="current_sequence">';
      var v1083 = sitesInRange[j$$10];
      var v956 = v1083.label;
      var v741 = v955 + v956;
      var v379 = v741 + "</span>\n";
      v378.write(v379);
      j$$10 = j$$10 + 1;
      var v742 = sitesInRange.length;
      v380 = j$$10 < v742
    }
    var v381 = i$$12 + basesPerLine;
    textLayout.writeLayout(i$$12, v381);
    i$$12 = i$$12 + basesPerLine;
    var v743 = dnaSequence$$3.length;
    v382 = i$$12 < v743
  }
  return true
}
function translate(dnaSequence$$4, geneticCodeMatchExp$$3, geneticCodeMatchResult$$3) {
  function v2(str$$9, p1$$2, offset$$14, s$$4) {
    var v383 = " " + p1$$2;
    return v383 + " "
  }
  var v957 = dnaSequence$$4.replace(/[^A-Za-z]/g, "");
  var v744 = v957.length;
  var v384 = v744 < 3;
  if(v384) {
    return""
  }
  dnaSequence$$4 = dnaSequence$$4.replace(/(...)/g, v2);
  var i$$13 = 0;
  var v745 = geneticCodeMatchExp$$3.length;
  var v387 = i$$13 < v745;
  for(;v387;) {
    var v385 = geneticCodeMatchExp$$3[i$$13];
    var v386 = geneticCodeMatchResult$$3[i$$13];
    dnaSequence$$4 = dnaSequence$$4.replace(v385, v386);
    i$$13 = i$$13 + 1;
    var v746 = geneticCodeMatchExp$$3.length;
    v387 = i$$13 < v746
  }
  dnaSequence$$4 = dnaSequence$$4.replace(/\S{3}/g, "X");
  dnaSequence$$4 = dnaSequence$$4.replace(/\s\S{1,2}$/, "");
  dnaSequence$$4 = dnaSequence$$4.replace(/^\s/, "");
  return dnaSequence$$4
}
function uppercaseTranslate(dnaSequence$$5, geneticCodeMatchExp$$4, geneticCodeMatchResult$$4) {
  function v3(str$$10, p1$$3, p2, p3, p4, p5, p6, offset$$15, s$$5) {
    var v1204 = " " + p1$$3;
    var v1157 = v1204 + p3;
    var v1084 = v1157 + p5;
    var v958 = v1084 + " ";
    var v747 = v958 + p2;
    var v388 = v747 + p4;
    return v388 + p6
  }
  dnaSequence$$5 = dnaSequence$$5.replace(/[a-z]/g, " ");
  var v959 = dnaSequence$$5.replace(/[^A-Za-z]/g, "");
  var v748 = v959.length;
  var v389 = v748 < 3;
  if(v389) {
    return""
  }
  dnaSequence$$5 = dnaSequence$$5.replace(/([A-Z])(\s*)([A-Z])(\s*)([A-Z])(\s*)/g, v3);
  dnaSequence$$5 = dnaSequence$$5.replace(/\s\S{1,2}\s/g, "");
  var i$$14 = 0;
  var v749 = geneticCodeMatchExp$$4.length;
  var v392 = i$$14 < v749;
  for(;v392;) {
    var v390 = geneticCodeMatchExp$$4[i$$14];
    var v391 = geneticCodeMatchResult$$4[i$$14];
    dnaSequence$$5 = dnaSequence$$5.replace(v390, v391);
    i$$14 = i$$14 + 1;
    var v750 = geneticCodeMatchExp$$4.length;
    v392 = i$$14 < v750
  }
  dnaSequence$$5 = dnaSequence$$5.replace(/\S{3}/g, "X");
  dnaSequence$$5 = dnaSequence$$5.replace(/^\s/, "");
  return dnaSequence$$5
}
function buildMutatedRestrictionSites(restrictionSites$$1) {
  var mutatedRestrictionSites$$1 = new Array;
  var i$$15 = 0;
  var v751 = restrictionSites$$1.length;
  var v414 = i$$15 < v751;
  for(;v414;) {
    var v1085 = restrictionSites$$1[i$$15];
    var v960 = v1085.match(/\/.+\//);
    var v752 = v960.toString();
    var v393 = v752.replace(/[\/\\]/g, "");
    var site = v393.toLowerCase();
    var v753 = restrictionSites$$1[i$$15];
    var v394 = v753.match(/\([^\(]+\)/);
    var label$$2 = v394.toString();
    var v1086 = restrictionSites$$1[i$$15];
    var v961 = v1086.match(/\)\D*\d+/);
    var v754 = v961.toString();
    var v395 = v754.replace(/\)\D*/, "");
    var cutDistance$$1 = parseFloat(v395);
    var singleDegenSites = new Array;
    var doubleDegenSites = new Array;
    var j$$11 = 0;
    var v755 = site.length;
    var v400 = j$$11 < v755;
    for(;v400;) {
      var v962 = site.charAt(j$$11);
      var v756 = v962 != "n";
      if(v756) {
        var v963 = site.charAt(j$$11);
        v756 = v963 != "N"
      }
      var v399 = v756;
      if(v399) {
        var pre = site.substring(0, j$$11);
        var v396 = j$$11 + 1;
        var v397 = site.length;
        var post = site.substring(v396, v397);
        var v398 = pre + "N";
        var newSite = v398 + post;
        singleDegenSites.push(newSite)
      }
      j$$11 = j$$11 + 1;
      var v757 = site.length;
      v400 = j$$11 < v757
    }
    var v758 = site.length;
    var v409 = v758 > 6;
    if(v409) {
      j$$11 = 0;
      var v759 = singleDegenSites.length;
      var v408 = j$$11 < v759;
      for(;v408;) {
        var k$$3 = 0;
        var v964 = singleDegenSites[j$$11];
        var v760 = v964.length;
        var v407 = k$$3 < v760;
        for(;v407;) {
          var v1087 = singleDegenSites[j$$11];
          var v965 = v1087.charAt(k$$3);
          var v761 = v965 != "n";
          if(v761) {
            var v1088 = singleDegenSites[j$$11];
            var v966 = v1088.charAt(k$$3);
            v761 = v966 != "N"
          }
          var v406 = v761;
          if(v406) {
            var v401 = singleDegenSites[j$$11];
            pre = v401.substring(0, k$$3);
            var v402 = singleDegenSites[j$$11];
            var v403 = k$$3 + 1;
            var v762 = singleDegenSites[j$$11];
            var v404 = v762.length;
            post = v402.substring(v403, v404);
            var v405 = pre + "N";
            newSite = v405 + post;
            doubleDegenSites.push(newSite)
          }
          k$$3 = k$$3 + 1;
          var v967 = singleDegenSites[j$$11];
          var v763 = v967.length;
          v407 = k$$3 < v763
        }
        j$$11 = j$$11 + 1;
        var v764 = singleDegenSites.length;
        v408 = j$$11 < v764
      }
    }
    j$$11 = 0;
    var v765 = singleDegenSites.length;
    var v411 = j$$11 < v765;
    for(;v411;) {
      var v1205 = singleDegenSites[j$$11];
      var v1158 = "/" + v1205;
      var v1089 = v1158 + "/";
      var v968 = v1089 + " ";
      var v766 = v968 + label$$2;
      var v410 = v766 + cutDistance$$1;
      mutatedRestrictionSites$$1.push(v410);
      j$$11 = j$$11 + 1;
      var v767 = singleDegenSites.length;
      v411 = j$$11 < v767
    }
    j$$11 = 0;
    var v768 = doubleDegenSites.length;
    var v413 = j$$11 < v768;
    for(;v413;) {
      var v1206 = doubleDegenSites[j$$11];
      var v1159 = "/" + v1206;
      var v1090 = v1159 + "/";
      var v969 = v1090 + " ";
      var v769 = v969 + label$$2;
      var v412 = v769 + cutDistance$$1;
      mutatedRestrictionSites$$1.push(v412);
      j$$11 = j$$11 + 1;
      var v770 = doubleDegenSites.length;
      v413 = j$$11 < v770
    }
    i$$15 = i$$15 + 1;
    var v771 = restrictionSites$$1.length;
    v414 = i$$15 < v771
  }
  return mutatedRestrictionSites$$1
}
function removeNormalMatchesFromMutantSites(mutatedRestrictionSiteCollection$$2, restrictionSiteCollection$$2) {
  var originalMutatedRestrictionSites = new Array;
  var i$$16 = 0;
  var v970 = mutatedRestrictionSiteCollection$$2.restrictionSites;
  var v772 = v970.length;
  var v419 = i$$16 < v772;
  for(;v419;) {
    var v415 = mutatedRestrictionSiteCollection$$2.restrictionSites;
    var mutatedSite = v415[i$$16];
    var isOriginal = true;
    var j$$12 = 0;
    var v971 = restrictionSiteCollection$$2.restrictionSites;
    var v773 = v971.length;
    var v418 = j$$12 < v773;
    for(;v418;) {
      var v416 = restrictionSiteCollection$$2.restrictionSites;
      var normalSite = v416[j$$12];
      var v774 = normalSite.position;
      var v775 = mutatedSite.position;
      var v417 = v774 == v775;
      if(v417) {
        isOriginal = false;
        break
      }
      j$$12 = j$$12 + 1;
      var v972 = restrictionSiteCollection$$2.restrictionSites;
      var v776 = v972.length;
      v418 = j$$12 < v776
    }
    if(isOriginal) {
      originalMutatedRestrictionSites.push(mutatedSite)
    }
    i$$16 = i$$16 + 1;
    var v973 = mutatedRestrictionSiteCollection$$2.restrictionSites;
    var v777 = v973.length;
    v419 = i$$16 < v777
  }
  mutatedRestrictionSiteCollection$$2.restrictionSites = originalMutatedRestrictionSites;
  return mutatedRestrictionSiteCollection$$2
}
function removeOverlappingMatchesFromMutantSites(mutatedRestrictionSiteCollection$$3) {
  var originalMutatedRestrictionSites$$1 = new Array;
  var i$$17 = 0;
  var v974 = mutatedRestrictionSiteCollection$$3.restrictionSites;
  var v778 = v974.length;
  var v431 = i$$17 < v778;
  for(;v431;) {
    var v420 = mutatedRestrictionSiteCollection$$3.restrictionSites;
    var mutatedSite$$1 = v420[i$$17];
    var isOriginal$$1 = true;
    var j$$13 = 0;
    var v779 = originalMutatedRestrictionSites$$1.length;
    var v430 = j$$13 < v779;
    for(;v430;) {
      var mutatedSiteJ = originalMutatedRestrictionSites$$1[j$$13];
      var v975 = mutatedSiteJ.position;
      var v976 = mutatedSiteJ.cutDistance;
      var v780 = v975 + v976;
      var v977 = mutatedSiteJ.iupacPattern;
      var v781 = v977.length;
      var v421 = v780 - v781;
      var startRangeJ = v421 - 2;
      var v978 = mutatedSiteJ.position;
      var v979 = mutatedSiteJ.cutDistance;
      var v782 = v978 + v979;
      var v422 = v782 - 1;
      var endRangeJ = v422 + 2;
      var v783 = mutatedSite$$1.position;
      var v784 = mutatedSite$$1.cutDistance;
      var v423 = v783 + v784;
      var v785 = mutatedSite$$1.iupacPattern;
      var v424 = v785.length;
      var startRange = v423 - v424;
      var v786 = mutatedSite$$1.position;
      var v787 = mutatedSite$$1.cutDistance;
      var v425 = v786 + v787;
      var endRange = v425 - 1;
      var v788 = startRange <= startRangeJ;
      if(v788) {
        v788 = endRange >= startRangeJ
      }
      var v426 = v788;
      if(v426) {
        isOriginal$$1 = false;
        break
      }
      var v789 = startRange <= endRangeJ;
      if(v789) {
        v789 = endRange >= endRangeJ
      }
      var v427 = v789;
      if(v427) {
        isOriginal$$1 = false;
        break
      }
      var v790 = startRange <= startRangeJ;
      if(v790) {
        v790 = endRange >= endRangeJ
      }
      var v428 = v790;
      if(v428) {
        isOriginal$$1 = false;
        break
      }
      var v791 = startRange >= startRangeJ;
      if(v791) {
        v791 = endRange <= endRangeJ
      }
      var v429 = v791;
      if(v429) {
        isOriginal$$1 = false;
        break
      }
      j$$13 = j$$13 + 1;
      var v792 = originalMutatedRestrictionSites$$1.length;
      v430 = j$$13 < v792
    }
    if(isOriginal$$1) {
      originalMutatedRestrictionSites$$1.push(mutatedSite$$1)
    }
    i$$17 = i$$17 + 1;
    var v980 = mutatedRestrictionSiteCollection$$3.restrictionSites;
    var v793 = v980.length;
    v431 = i$$17 < v793
  }
  mutatedRestrictionSiteCollection$$3.restrictionSites = originalMutatedRestrictionSites$$1;
  return mutatedRestrictionSiteCollection$$3
}
function buildMutatedDna(originalDna, mutatedRestrictionSiteCollection$$4) {
  var mutatedDna$$1 = originalDna;
  var mutatedDnaArray = new Array;
  mutatedRestrictionSiteCollection$$4.sortRestrictionSites();
  var v432 = mutatedRestrictionSiteCollection$$4.restrictionSites;
  v432.reverse();
  var i$$18 = 0;
  var v981 = mutatedRestrictionSiteCollection$$4.restrictionSites;
  var v794 = v981.length;
  var v439 = i$$18 < v794;
  for(;v439;) {
    var v433 = mutatedRestrictionSiteCollection$$4.restrictionSites;
    var mutatedSite$$2 = v433[i$$18];
    var v795 = mutatedSite$$2.position;
    var v796 = mutatedSite$$2.cutDistance;
    var v434 = v795 + v796;
    var v797 = mutatedSite$$2.iupacPattern;
    var v435 = v797.length;
    var siteStart = v434 - v435;
    var v798 = mutatedSite$$2.position;
    var v799 = mutatedSite$$2.cutDistance;
    var v436 = v798 + v799;
    var siteEnd = v436 - 1;
    var siteLength = siteEnd - siteStart;
    var v800 = mutatedDna$$1.substring(0, siteStart);
    var v1091 = siteEnd + 1;
    var v982 = mutatedDna$$1.substring(siteStart, v1091);
    var v983 = mutatedSite$$2.iupacPattern;
    var v984 = mutatedSite$$2.label;
    var v801 = replaceMutatedDnaSegment(v982, v983, v984);
    var v437 = v800 + v801;
    mutatedDnaArray.push(v437);
    var v802 = siteEnd + 1;
    var v803 = mutatedDna$$1.length;
    var v438 = mutatedDna$$1.substring(v802, v803);
    mutatedDnaArray.push(v438);
    mutatedDna$$1 = mutatedDnaArray.join("");
    mutatedDnaArray = new Array;
    i$$18 = i$$18 + 1;
    var v985 = mutatedRestrictionSiteCollection$$4.restrictionSites;
    var v804 = v985.length;
    v439 = i$$18 < v804
  }
  var v440 = mutatedRestrictionSiteCollection$$4.restrictionSites;
  v440.reverse();
  return mutatedDna$$1
}
function replaceMutatedDnaSegment(originalSegment, iupacPattern, label$$3) {
  var newSegment = "";
  var genericSite;
  var v805 = label$$3.match(/[a-z\|]+\s\d+/);
  var v441 = v805.toString();
  genericSite = v441.replace(/\||\s\d+/g, "");
  var isUpperCase;
  var charToAdd;
  var i$$19 = 0;
  var v806 = originalSegment.length;
  var v447 = i$$19 < v806;
  for(;v447;) {
    var v1092 = originalSegment.charAt(i$$19);
    var v986 = v1092.toString();
    var v807 = v986.search(/[A-Z]/);
    var v442 = v807 == -1;
    if(v442) {
      isUpperCase = false
    }else {
      isUpperCase = true
    }
    var v808 = originalSegment.charAt(i$$19);
    var v809 = genericSite.charAt(i$$19);
    var v444 = v808 == v809;
    if(v444) {
      charToAdd = originalSegment.charAt(i$$19)
    }else {
      var v810 = iupacPattern.charAt(i$$19);
      var v443 = v810 == "N";
      if(v443) {
        charToAdd = genericSite.charAt(i$$19)
      }else {
        charToAdd = originalSegment.charAt(i$$19)
      }
    }
    if(isUpperCase) {
      var v811 = charToAdd.toString();
      var v445 = v811.toUpperCase();
      newSegment = newSegment + v445
    }else {
      var v812 = charToAdd.toString();
      var v446 = v812.toLowerCase();
      newSegment = newSegment + v446
    }
    i$$19 = i$$19 + 1;
    var v813 = originalSegment.length;
    v447 = i$$19 < v813
  }
  return newSegment
}
function findRestrictionSites(sequence$$18, arrayOfItems$$2, dnaConformation$$1) {
  var lookAhead$$1 = 50;
  var lowerLimit$$1 = 0;
  var upperLimit$$1 = sequence$$18.length;
  var shiftValue$$1 = 0;
  var cutDistance$$2;
  var matchExp$$2;
  var matchPosition$$1;
  var matchArray$$2;
  var label$$4;
  var timesFound$$1 = 0;
  var tempArray = new Array;
  var restrictionSiteCollection$$3 = new RestrictionSiteCollection;
  var v451 = dnaConformation$$1 == "circular";
  if(v451) {
    var v448 = sequence$$18.substring(0, lookAhead$$1);
    shiftValue$$1 = v448.length;
    var v1093 = sequence$$18.length;
    var v987 = v1093 - lookAhead$$1;
    var v988 = sequence$$18.length;
    var v814 = sequence$$18.substring(v987, v988);
    var v449 = v814 + sequence$$18;
    var v450 = sequence$$18.substring(0, lookAhead$$1);
    sequence$$18 = v449 + v450;
    lowerLimit$$1 = 0 + shiftValue$$1;
    upperLimit$$1 = upperLimit$$1 + shiftValue$$1
  }
  var i$$20 = 0;
  var v815 = arrayOfItems$$2.length;
  var v463 = i$$20 < v815;
  for(;v463;) {
    var v989 = arrayOfItems$$2[i$$20];
    var v816 = v989.match(/\/.+\//);
    var v452 = v816.toString();
    var iupacPattern$$1 = v452.replace(/[\/\\]/g, "");
    var v990 = convertDegenerates(iupacPattern$$1);
    var v817 = "/" + v990;
    var v453 = v817 + "/";
    matchExp$$2 = v453 + "gi";
    matchPosition$$1 = 0;
    matchExp$$2 = eval(matchExp$$2);
    var v1094 = arrayOfItems$$2[i$$20];
    var v991 = v1094.match(/\)\D*\d+/);
    var v818 = v991.toString();
    var v454 = v818.replace(/\)\D*/, "");
    cutDistance$$2 = parseFloat(v454);
    var v992 = arrayOfItems$$2[i$$20];
    var v819 = v992.match(/\([^\(]+\)/);
    var v455 = v819.toString();
    label$$4 = v455.replace(/\(|\)/g, "");
    var v459 = matchArray$$2 = matchExp$$2.exec(sequence$$18);
    for(;v459;) {
      matchPosition$$1 = matchExp$$2.lastIndex;
      matchPosition$$1 = matchPosition$$1 - cutDistance$$2;
      var v820 = matchPosition$$1 >= lowerLimit$$1;
      if(v820) {
        v820 = matchPosition$$1 < upperLimit$$1
      }
      var v457 = v820;
      if(v457) {
        timesFound$$1 = timesFound$$1 + 1;
        var v993 = label$$4 + " ";
        var v1095 = matchPosition$$1 - shiftValue$$1;
        var v994 = v1095 + 1;
        var v821 = v993 + v994;
        var v822 = matchPosition$$1 - shiftValue$$1;
        var v456 = new RestrictionSite(v821, v822, cutDistance$$2, iupacPattern$$1);
        tempArray.push(v456)
      }
      var v458 = matchExp$$2;
      var v995 = matchExp$$2.lastIndex;
      var v1096 = RegExp.lastMatch;
      var v996 = v1096.length;
      var v823 = v995 - v996;
      v458.lastIndex = v823 + 1;
      v459 = matchArray$$2 = matchExp$$2.exec(sequence$$18)
    }
    var j$$14 = 0;
    var v824 = tempArray.length;
    var v462 = j$$14 < v824;
    for(;v462;) {
      var v460 = tempArray[j$$14];
      v460.numberOfCuts = timesFound$$1;
      var v461 = tempArray[j$$14];
      restrictionSiteCollection$$3.addRestrictionSite(v461);
      j$$14 = j$$14 + 1;
      var v825 = tempArray.length;
      v462 = j$$14 < v825
    }
    timesFound$$1 = 0;
    tempArray = new Array;
    i$$20 = i$$20 + 1;
    var v826 = arrayOfItems$$2.length;
    v463 = i$$20 < v826
  }
  return restrictionSiteCollection$$3
}
function writeLayout(start$$4, stop) {
  var i$$21 = 0;
  var v997 = this.components;
  var v827 = v997.length;
  var v465 = i$$21 < v827;
  for(;v465;) {
    var v828 = this.components;
    var v464 = v828[i$$21];
    v464.writeLayoutComponent(start$$4, stop);
    i$$21 = i$$21 + 1;
    var v998 = this.components;
    var v829 = v998.length;
    v465 = i$$21 < v829
  }
  return
}
function addComponent(component) {
  var v466 = this.components;
  v466.push(component);
  return
}
function TextLayout() {
  var v1514 = new Array;
  this.components = v1514;
  return
}
function writeLayoutComponent(start$$5, stop$$1) {
  return
}
function setCharacters(text$$14) {
  var v830 = text$$14.search(/./);
  var v467 = v830 != -1;
  if(v467) {
    var v1515 = text$$14.match(/./g);
    this.characters = v1515
  }
  return
}
function isRoom(start$$6, stop$$2) {
  var v468 = this.characters;
  var rangeToCheck = v468.slice(start$$6, stop$$2);
  rangeToCheck = rangeToCheck.join("");
  var v831 = rangeToCheck.search(/\w/);
  var v469 = v831 == -1;
  if(v469) {
    return true
  }else {
    return false
  }
  return
}
function LayoutComponent() {
  var v1516 = new Array;
  this.characters = v1516;
  this.positionLabel = 1;
  this.spanStart = "";
  this.spanEnd = "";
  return
}
function TranslationComponent() {
  var v1517 = new Array;
  this.characters = v1517;
  this.positionLabel = 1;
  this.spanStart = "";
  this.spanEnd = "";
  return
}
function UppercaseTranslationComponent() {
  var v1518 = new Array;
  this.characters = v1518;
  this.positionLabel = 1;
  this.spanStart = "";
  this.spanEnd = "";
  return
}
function DnaComponent() {
  var v1519 = new Array;
  this.characters = v1519;
  this.positionLabel = 1;
  this.spanStart = "";
  this.spanEnd = "";
  return
}
function RestrictionSite(label$$5, position, cutDistance$$3, iupacPattern$$2) {
  this.label = label$$5;
  this.position = position;
  this.cutDistance = cutDistance$$3;
  this.iupacPattern = iupacPattern$$2;
  return
}
function addRestrictionSite(restrictionSite) {
  var v470 = this.restrictionSites;
  v470.push(restrictionSite);
  return
}
function sortRestrictionSites() {
  var v471 = this.restrictionSites;
  v471.sort(restrictionSiteSorter);
  return
}
function getSitesInRange(start$$10, stop$$6) {
  var arrayToReturn = new Array;
  var v832 = this.restrictionSites;
  var v472 = v832.length;
  var i$$22 = v472 - 1;
  var v475 = i$$22 >= 0;
  for(;v475;) {
    var v1160 = this.restrictionSites;
    var v1097 = v1160[i$$22];
    var v999 = v1097.position;
    var v833 = v999 >= start$$10;
    if(v833) {
      var v1161 = this.restrictionSites;
      var v1098 = v1161[i$$22];
      var v1000 = v1098.position;
      v833 = v1000 < stop$$6
    }
    var v474 = v833;
    if(v474) {
      var v834 = this.restrictionSites;
      var v473 = v834.pop();
      arrayToReturn.push(v473)
    }else {
      break
    }
    i$$22 = i$$22 - 1;
    v475 = i$$22 >= 0
  }
  return arrayToReturn
}
function RestrictionSiteCollection() {
  var v1520 = new Array;
  this.restrictionSites = v1520;
  return
}
function restrictionSiteSorter(a, b) {
  var v835 = a.position;
  var v836 = b.position;
  var v476 = v835 < v836;
  if(v476) {
    return 1
  }
  var v837 = a.position;
  var v838 = b.position;
  var v477 = v837 > v838;
  if(v477) {
    return-1
  }else {
    return 0
  }
  return
}
new TextLayout;
var v478 = TextLayout.prototype;
v478.writeLayout = writeLayout;
var v479 = TextLayout.prototype;
v479.addComponent = addComponent;
new LayoutComponent;
var v480 = LayoutComponent.prototype;
v480.writeLayoutComponent = writeLayoutComponent;
var v481 = LayoutComponent.prototype;
v481.setCharacters = setCharacters;
var v482 = LayoutComponent.prototype;
v482.isRoom = isRoom;
var v1521 = new LayoutComponent;
TranslationComponent.prototype = v1521;
var v483 = TranslationComponent.prototype;
v483.writeLayoutComponent = v4;
var v1522 = new LayoutComponent;
UppercaseTranslationComponent.prototype = v1522;
var v484 = UppercaseTranslationComponent.prototype;
v484.writeLayoutComponent = v5;
var v1523 = new LayoutComponent;
DnaComponent.prototype = v1523;
var v485 = DnaComponent.prototype;
v485.writeLayoutComponent = v6;
new RestrictionSiteCollection;
var v486 = RestrictionSiteCollection.prototype;
v486.addRestrictionSite = addRestrictionSite;
var v487 = RestrictionSiteCollection.prototype;
v487.sortRestrictionSites = sortRestrictionSites;
var v488 = RestrictionSiteCollection.prototype;
v488.getSitesInRange = getSitesInRange;
document.onload = v7;
var v489 = document.getElementById("submitbtn");
v489.onclick = v8;
var v490 = document.getElementById("clearbtn");
v490.onclick = v9;

}

