
JAM.startProfile('load');
function v12() {
  var v913 = document.forms;
  var v754 = v913[0];
  var v436 = v754.elements;
  var v13 = v436[0];
  v13.value = " ";
  return
}
function v11() {
  try {
    windowExtract(document)
  }catch(e$$7) {
    var v14 = "The following error was encountered: " + e$$7;
    alert(v14)
  }
  return
}
function v10() {
  var v437 = document.main_form;
  var v15 = v437.main_submit;
  v15.focus();
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
  var v16 = arrayOfSequences[0];
  var lengthOfAlign = v16.length;
  var v438 = arrayOfSequences.length;
  var v17 = v438 < 2;
  if(v17) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v439 = arrayOfTitles.length;
  var v19 = i$$1 < v439;
  for(;v19;) {
    var v914 = arrayOfTitles[i$$1];
    var v755 = v914.search(/\S/);
    var v440 = v755 == -1;
    var v757 = !v440;
    if(v757) {
      var v1030 = arrayOfSequences[i$$1];
      var v915 = v1030.search(/\S/);
      var v756 = v915 == -1;
      var v917 = !v756;
      if(v917) {
        var v1031 = arrayOfSequences[i$$1];
        var v916 = v1031.length;
        v756 = v916 != lengthOfAlign
      }
      v440 = v756
    }
    var v18 = v440;
    if(v18) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v441 = arrayOfTitles.length;
    v19 = i$$1 < v441
  }
  return true
}
function checkCodonTable(codonTable) {
  var v758 = codonTable.search(/AmAcid/);
  var v442 = v758 == -1;
  var v760 = !v442;
  if(v760) {
    var v918 = codonTable.search(/Codon/);
    var v759 = v918 == -1;
    var v920 = !v759;
    if(v920) {
      var v1032 = codonTable.search(/Number/);
      var v919 = v1032 == -1;
      var v1034 = !v919;
      if(v1034) {
        var v1104 = codonTable.search(/\/1000/);
        var v1033 = v1104 == -1;
        var v1106 = !v1033;
        if(v1106) {
          var v1105 = codonTable.search(/Fraction\s*\.\./);
          v1033 = v1105 == -1
        }
        v919 = v1033
      }
      v759 = v919
    }
    v442 = v759
  }
  var v20 = v442;
  if(v20) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v761 = formElement.value;
  var v443 = v761.search(/\S/);
  var v21 = v443 == -1;
  if(v21) {
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
  var v444 = arrayOfPatterns.length;
  var v24 = z$$2 < v444;
  for(;v24;) {
    var v762 = arrayOfPatterns[z$$2];
    var v445 = v762.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v22 = v445 == -1;
    if(v22) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    var v763 = arrayOfPatterns[z$$2];
    var v446 = moreExpressionCheck(v763);
    var v23 = v446 == false;
    if(v23) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v447 = arrayOfPatterns.length;
    v24 = z$$2 < v447
  }
  var v25 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v25);
  var v26 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v26);
  var j = 0;
  var v448 = arrayOfPatterns.length;
  var v33 = j < v448;
  for(;v33;) {
    var v27 = geneticCodeMatchExp;
    var v28 = j;
    var v921 = arrayOfPatterns[j];
    var v764 = v921.match(/\/.+\//);
    var v449 = v764 + "gi";
    var v1269 = eval(v449);
    v27[v28] = v1269;
    var v29 = geneticCodeMatchResult;
    var v30 = j;
    var v765 = arrayOfPatterns[j];
    var v450 = v765.match(/=[a-zA-Z\*]/);
    var v1270 = v450.toString();
    v29[v30] = v1270;
    var v31 = geneticCodeMatchResult;
    var v32 = j;
    var v451 = geneticCodeMatchResult[j];
    var v1271 = v451.replace(/=/g, "");
    v31[v32] = v1271;
    j = j + 1;
    var v452 = arrayOfPatterns.length;
    v33 = j < v452
  }
  var i$$2 = 0;
  var v766 = testSequence.length;
  var v453 = v766 - 3;
  var v40 = i$$2 <= v453;
  for(;v40;) {
    var v34 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v34);
    j = 0;
    var v454 = geneticCodeMatchExp.length;
    var v38 = j < v454;
    for(;v38;) {
      var v767 = geneticCodeMatchExp[j];
      var v455 = codon.search(v767);
      var v37 = v455 != -1;
      if(v37) {
        var v36 = oneMatch == true;
        if(v36) {
          var v456 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v35 = v456 + ".";
          alert(v35);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v457 = geneticCodeMatchExp.length;
      v38 = j < v457
    }
    var v39 = oneMatch == false;
    if(v39) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v768 = testSequence.length;
    var v458 = v768 - 3;
    v40 = i$$2 <= v458
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v459 = arrayOfPatterns$$1.length;
  var v42 = z$$3 < v459;
  for(;v42;) {
    var v769 = arrayOfPatterns$$1[z$$3];
    var v460 = v769.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v41 = v460 != -1;
    if(v41) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v461 = arrayOfPatterns$$1.length;
    v42 = z$$3 < v461
  }
  var i$$3 = 0;
  var v462 = arrayOfPatterns$$1.length;
  var v46 = i$$3 < v462;
  for(;v46;) {
    var v770 = arrayOfPatterns$$1[i$$3];
    var v463 = "[" + v770;
    var v43 = v463 + "]";
    var re = new RegExp(v43, "gi");
    var j$$1 = i$$3 + 1;
    var v464 = arrayOfPatterns$$1.length;
    var v45 = j$$1 < v464;
    for(;v45;) {
      var v771 = arrayOfPatterns$$1[j$$1];
      var v465 = v771.search(re);
      var v44 = v465 != -1;
      if(v44) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v466 = arrayOfPatterns$$1.length;
      v45 = j$$1 < v466
    }
    i$$3 = i$$3 + 1;
    var v467 = arrayOfPatterns$$1.length;
    v46 = i$$3 < v467
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v468 = arrayOfPatterns$$2.length;
  var v49 = z$$4 < v468;
  for(;v49;) {
    var v772 = arrayOfPatterns$$2[z$$4];
    var v469 = v772.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v47 = v469 == -1;
    if(v47) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    var v773 = arrayOfPatterns$$2[z$$4];
    var v470 = moreExpressionCheck(v773);
    var v48 = v470 == false;
    if(v48) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v471 = arrayOfPatterns$$2.length;
    v49 = z$$4 < v471
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v922 = getSequenceFromFasta(text$$7);
  var v774 = v922.replace(/[^A-Za-z]/g, "");
  var v472 = v774.length;
  var v51 = v472 > maxInput;
  if(v51) {
    var v473 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v50 = v473 + " characters.";
    alert(v50);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v474 = text$$8.length;
  var v53 = v474 > maxInput$$1;
  if(v53) {
    var v475 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v52 = v475 + " characters.";
    alert(v52);
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
  var v54 = outputWindow.document;
  v54.write("</form>");
  return true
}
function closePre() {
  var v55 = outputWindow.document;
  v55.write("</div>");
  var v56 = outputWindow.document;
  v56.write("</pre>\n");
  return
}
function closeTextArea() {
  var v57 = outputWindow.document;
  v57.write("</textarea>");
  return true
}
function closeWindow() {
  var v58 = outputWindow.document;
  v58.write("</body>\n</html>\n");
  outputWindow.status = "Done.";
  var v59 = outputWindow.document;
  v59.close();
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
  var v476 = alignArray.length;
  var v60 = v476 < 3;
  if(v60) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v477 = alignArray.length;
  var v62 = i$$4 < v477;
  for(;v62;) {
    var v775 = alignArray[i$$4];
    var v478 = v775.search(/[^\s]+\s/);
    var v61 = v478 == -1;
    if(v61) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v479 = alignArray.length;
    v62 = i$$4 < v479
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
  var v480 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v65 = v480 != -1;
  if(v65) {
    var v64 = matchArray = re$$1.exec(sequenceData);
    for(;v64;) {
      var v63 = matchArray[0];
      arrayOfFasta.push(v63);
      v64 = matchArray = re$$1.exec(sequenceData)
    }
  }else {
    arrayOfFasta[0] = sequenceData
  }
  return arrayOfFasta
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v481 = sequence$$2.length;
  var v66 = "&gt;results for " + v481;
  var stringToReturn = v66 + " residue sequence ";
  var v482 = fastaSequenceTitle.search(/[^\s]/);
  var v68 = v482 != -1;
  if(v68) {
    var v483 = stringToReturn + '"';
    var v67 = v483 + fastaSequenceTitle;
    stringToReturn = v67 + '"'
  }
  var v484 = stringToReturn + ' starting "';
  var v485 = sequence$$2.substring(0, 10);
  var v69 = v484 + v485;
  stringToReturn = v69 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v486 = sequenceOne.length;
  var v70 = "Search results for " + v486;
  var stringToReturn$$1 = v70 + " residue sequence ";
  var v487 = fastaSequenceTitleOne.search(/[^\s]/);
  var v72 = v487 != -1;
  if(v72) {
    var v488 = stringToReturn$$1 + '"';
    var v71 = v488 + fastaSequenceTitleOne;
    stringToReturn$$1 = v71 + '"'
  }
  var v489 = stringToReturn$$1 + ' starting "';
  var v490 = sequenceOne.substring(0, 10);
  var v73 = v489 + v490;
  stringToReturn$$1 = v73 + '"\n';
  var v491 = stringToReturn$$1 + "and ";
  var v492 = sequenceTwo.length;
  var v74 = v491 + v492;
  stringToReturn$$1 = v74 + " residue sequence ";
  var v493 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v76 = v493 != -1;
  if(v76) {
    var v494 = stringToReturn$$1 + '"';
    var v75 = v494 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v75 + '"'
  }
  var v495 = stringToReturn$$1 + ' starting "';
  var v496 = sequenceTwo.substring(0, 10);
  var v77 = v495 + v496;
  stringToReturn$$1 = v77 + '"';
  var v78 = '<div class="info">' + stringToReturn$$1;
  return v78 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v79 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v79);
  var j$$2 = 0;
  var v497 = arrayOfPatterns$$3.length;
  var v82 = j$$2 < v497;
  for(;v82;) {
    var v80 = geneticCodeMatchExp$$1;
    var v81 = j$$2;
    var v923 = arrayOfPatterns$$3[j$$2];
    var v776 = v923.match(/\/.+\//);
    var v498 = v776 + "gi";
    var v1272 = eval(v498);
    v80[v81] = v1272;
    j$$2 = j$$2 + 1;
    var v499 = arrayOfPatterns$$3.length;
    v82 = j$$2 < v499
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v83 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v83);
  var j$$3 = 0;
  var v500 = arrayOfPatterns$$4.length;
  var v88 = j$$3 < v500;
  for(;v88;) {
    var v84 = geneticCodeMatchResult$$1;
    var v85 = j$$3;
    var v777 = arrayOfPatterns$$4[j$$3];
    var v501 = v777.match(/=[a-zA-Z\*]/);
    var v1273 = v501.toString();
    v84[v85] = v1273;
    var v86 = geneticCodeMatchResult$$1;
    var v87 = j$$3;
    var v502 = geneticCodeMatchResult$$1[j$$3];
    var v1274 = v502.replace(/=/g, "");
    v86[v87] = v1274;
    j$$3 = j$$3 + 1;
    var v503 = arrayOfPatterns$$4.length;
    v88 = j$$3 < v503
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v504 = sequence$$3.length;
  var v89 = "Results for " + v504;
  var stringToReturn$$2 = v89 + " residue sequence ";
  var v505 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v91 = v505 != -1;
  if(v91) {
    var v506 = stringToReturn$$2 + '"';
    var v90 = v506 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v90 + '"'
  }
  var v507 = stringToReturn$$2 + ' starting "';
  var v508 = sequence$$3.substring(0, 10);
  var v92 = v507 + v508;
  stringToReturn$$2 = v92 + '"';
  var v93 = '<div class="info">' + stringToReturn$$2;
  return v93 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v778 = "Results for " + topology;
  var v509 = v778 + " ";
  var v510 = sequence$$4.length;
  var v94 = v509 + v510;
  var stringToReturn$$3 = v94 + " residue sequence ";
  var v511 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v96 = v511 != -1;
  if(v96) {
    var v512 = stringToReturn$$3 + '"';
    var v95 = v512 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v95 + '"'
  }
  var v513 = stringToReturn$$3 + ' starting "';
  var v514 = sequence$$4.substring(0, 10);
  var v97 = v513 + v514;
  stringToReturn$$3 = v97 + '"';
  var v98 = '<div class="info">' + stringToReturn$$3;
  return v98 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v515 = sequenceOne$$1.length;
  var v99 = "Alignment results for " + v515;
  var stringToReturn$$4 = v99 + " residue sequence ";
  var v516 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v101 = v516 != -1;
  if(v101) {
    var v517 = stringToReturn$$4 + '"';
    var v100 = v517 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v100 + '"'
  }
  var v518 = stringToReturn$$4 + ' starting "';
  var v519 = sequenceOne$$1.substring(0, 10);
  var v102 = v518 + v519;
  stringToReturn$$4 = v102 + '"\n';
  var v520 = stringToReturn$$4 + "and ";
  var v521 = sequenceTwo$$1.length;
  var v103 = v520 + v521;
  stringToReturn$$4 = v103 + " residue sequence ";
  var v522 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v105 = v522 != -1;
  if(v105) {
    var v523 = stringToReturn$$4 + '"';
    var v104 = v523 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v104 + '"'
  }
  var v524 = stringToReturn$$4 + ' starting "';
  var v525 = sequenceTwo$$1.substring(0, 10);
  var v106 = v524 + v525;
  stringToReturn$$4 = v106 + '"';
  var v107 = '<div class="info">' + stringToReturn$$4;
  return v107 + "</div>\n"
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v109 = j$$4 < lengthOut;
  for(;v109;) {
    var v526 = Math.random();
    var v527 = components.length;
    var v108 = v526 * v527;
    tempNum = Math.floor(v108);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4 = j$$4 + 1;
    v109 = j$$4 < lengthOut
  }
  return sequenceArray.join("")
}
function getSequenceFromFasta(sequenceRecord) {
  var v528 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v110 = v528 != -1;
  if(v110) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "")
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v529 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v112 = v529 != -1;
  if(v112) {
    var v111 = sequenceRecord$$1.match(/\>[^\f\n\r]+[\f\n\r]/, "");
    fastaTitle = v111.toString();
    fastaTitle = fastaTitle.replace(/\>|[\f\n\r]/g, "");
    fastaTitle = fastaTitle.replace(/\s{2,}/g, " ");
    fastaTitle = fastaTitle.replace(/[\<\>]/gi, "")
  }
  return fastaTitle
}
function moreExpressionCheck(expressionToCheck) {
  var v779 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v530 = v779 != -1;
  var v781 = !v530;
  if(v781) {
    var v924 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    var v780 = v924 != -1;
    var v926 = !v780;
    if(v926) {
      var v1035 = expressionToCheck.search(/\[\]/);
      var v925 = v1035 != -1;
      var v1037 = !v925;
      if(v1037) {
        var v1107 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
        var v1036 = v1107 != -1;
        var v1109 = !v1036;
        if(v1109) {
          var v1157 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
          var v1108 = v1157 != -1;
          var v1159 = !v1108;
          if(v1159) {
            var v1190 = expressionToCheck.search(/\|\|/);
            var v1158 = v1190 != -1;
            var v1192 = !v1158;
            if(v1192) {
              var v1207 = expressionToCheck.search(/\/\|/);
              var v1191 = v1207 != -1;
              var v1209 = !v1191;
              if(v1209) {
                var v1222 = expressionToCheck.search(/\|\//);
                var v1208 = v1222 != -1;
                var v1224 = !v1208;
                if(v1224) {
                  var v1234 = expressionToCheck.search(/\[.\]/);
                  var v1223 = v1234 != -1;
                  var v1236 = !v1223;
                  if(v1236) {
                    var v1243 = expressionToCheck.search(/\</);
                    var v1235 = v1243 != -1;
                    var v1245 = !v1235;
                    if(v1245) {
                      var v1244 = expressionToCheck.search(/\>/);
                      v1235 = v1244 != -1
                    }
                    v1223 = v1235
                  }
                  v1208 = v1223
                }
                v1191 = v1208
              }
              v1158 = v1191
            }
            v1108 = v1158
          }
          v1036 = v1108
        }
        v925 = v1036
      }
      v780 = v925
    }
    v530 = v780
  }
  var v113 = v530;
  if(v113) {
    return false
  }
  return true
}
function openForm() {
  var v114 = outputWindow.document;
  v114.write('<form action="">\n');
  return true
}
function openPre() {
  var v115 = outputWindow.document;
  v115.write("<pre>");
  var v116 = outputWindow.document;
  v116.write('<div class="pre">');
  return
}
function openTextArea() {
  var v117 = outputWindow.document;
  v117.write('<br /><textarea rows="6" cols="61">\n');
  return true
}
function openWindow(title$$6) {
  _openWindow(title$$6, true);
  return
}
function _openWindow(title$$7, isColor) {
  outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  outputWindow.focus();
  var v118 = outputWindow.document;
  var v927 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v782 = v927 + "<head>\n";
  var v531 = v782 + "<title>Sequence Manipulation Suite</title>\n";
  var v119 = v531 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v118.write(v119);
  if(isColor) {
    var v120 = outputWindow.document;
    var v1262 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1258 = v1262 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1252 = v1258 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1246 = v1252 + "div.info {font-weight: bold}\n";
    var v1237 = v1246 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1225 = v1237 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v1210 = v1225 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v1193 = v1210 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1160 = v1193 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v1110 = v1160 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v1038 = v1110 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v928 = v1038 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v783 = v928 + "td.many {color: #000000}\n";
    var v532 = v783 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v121 = v532 + "</style>\n";
    v120.write(v121)
  }else {
    var v122 = outputWindow.document;
    var v1266 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1263 = v1266 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1259 = v1263 + "div.title {display: none}\n";
    var v1253 = v1259 + "div.info {font-weight: bold}\n";
    var v1247 = v1253 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1238 = v1247 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1226 = v1238 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v1211 = v1226 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1194 = v1211 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1161 = v1194 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1111 = v1161 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v1039 = v1111 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v929 = v1039 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v784 = v929 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v533 = v784 + "img {display: none}\n";
    var v123 = v533 + "</style>\n";
    v122.write(v123)
  }
  var v124 = outputWindow.document;
  var v930 = "</head>\n" + '<body class="main">\n';
  var v785 = v930 + '<div class="title">';
  var v534 = v785 + title$$7;
  var v125 = v534 + " results</div>\n";
  v124.write(v125);
  outputWindow.status = "Please Wait.";
  return true
}
function openWindowAlign(title$$8) {
  _openWindowAlign(title$$8, true);
  return
}
function _openWindowAlign(title$$9, isBackground) {
  outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  outputWindow.focus();
  var v126 = outputWindow.document;
  var v931 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v786 = v931 + "<head>\n";
  var v535 = v786 + "<title>Sequence Manipulation Suite</title>\n";
  var v127 = v535 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v126.write(v127);
  if(isBackground) {
    var v128 = outputWindow.document;
    var v1264 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1260 = v1264 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1254 = v1260 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1248 = v1254 + "div.info {font-weight: bold}\n";
    var v1239 = v1248 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v1227 = v1239 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v1212 = v1227 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v1195 = v1212 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v1162 = v1195 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v1112 = v1162 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v1040 = v1112 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v932 = v1040 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v787 = v932 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v536 = v787 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v129 = v536 + "</style>\n";
    v128.write(v129)
  }else {
    var v130 = outputWindow.document;
    var v1268 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1267 = v1268 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1265 = v1267 + "div.title {display: none}\n";
    var v1261 = v1265 + "div.info {font-weight: bold}\n";
    var v1255 = v1261 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1249 = v1255 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v1240 = v1249 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v1228 = v1240 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v1213 = v1228 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v1196 = v1213 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v1163 = v1196 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v1113 = v1163 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v1041 = v1113 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v933 = v1041 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v788 = v933 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v537 = v788 + "img {display: none}\n";
    var v131 = v537 + "</style>\n";
    v130.write(v131)
  }
  var v132 = outputWindow.document;
  var v934 = "</head>\n" + '<body class="main">\n';
  var v789 = v934 + '<div class="title">';
  var v538 = v789 + title$$9;
  var v133 = v538 + " results</div>\n";
  v132.write(v133);
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
  var v539 = dnaSequence$$1.search(/./);
  var v134 = v539 != -1;
  if(v134) {
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
  var v135 = j$$5 < lengthOfColumn;
  for(;v135;) {
    tempString = tempString + " ";
    j$$5 = j$$5 + 1;
    v135 = j$$5 < lengthOfColumn
  }
  var v136 = tempString + theNumber;
  theNumber = v136 + " ";
  var v137 = sequenceToAppend + theNumber;
  sequenceToAppend = v137 + tabIn;
  return sequenceToAppend
}
function testScript() {
  function v1(str$$8, p1$$1, offset$$13, s$$3) {
    return p1$$1 + "X"
  }
  var testArray = new Array;
  var testString = "1234567890";
  testArray.push(testString);
  var v540 = testArray[0];
  var v138 = v540 != testString;
  if(v138) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v541 = testString.search(re$$2);
  var v139 = v541 == -1;
  if(v139) {
    alert("Regular expression 'm' flag not supported. See browser compatibility page.");
    return false
  }
  var caughtException = false;
  try {
    re$$2 = eval("Exception handling not supported. Check browser compatibility page.")
  }catch(e$$4) {
    caughtException = true
  }
  var v140 = !caughtException;
  if(v140) {
    alert("Exception handling not supported. See browser compatibility page.")
  }
  testString = "123";
  testString = testString.replace(/(\d)/g, v1);
  var v141 = testString != "1X2X3X";
  if(v141) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false
  }
  var testNum = 2489.8237;
  var v542 = testNum.toFixed(3);
  var v142 = v542 != 2489.824;
  if(v142) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v543 = testNum.toPrecision(5);
  var v143 = v543 != 2489.8;
  if(v143) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v544 = theNumber$$1.search(/\d/);
  var v144 = v544 == -1;
  if(v144) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v790 = emblFile.search(/ID/);
  var v545 = v790 == -1;
  var v792 = !v545;
  if(v792) {
    var v935 = emblFile.search(/AC/);
    var v791 = v935 == -1;
    var v937 = !v791;
    if(v937) {
      var v1042 = emblFile.search(/DE/);
      var v936 = v1042 == -1;
      var v1044 = !v936;
      if(v1044) {
        var v1043 = emblFile.search(/SQ/);
        v936 = v1043 == -1
      }
      v791 = v936
    }
    v545 = v791
  }
  var v145 = v545;
  if(v145) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v546 = theNumber$$2.search(/\d/);
  var v146 = v546 == -1;
  if(v146) {
    alert("Please enter a number.");
    return false
  }
  var v148 = theNumber$$2 > maxInput$$2;
  if(v148) {
    var v547 = "Please enter a number less than or equal to " + maxInput$$2;
    var v147 = v547 + ".";
    alert(v147);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v548 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v149 = v548 != -1;
  if(v149) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v549 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v150 = v549 != -1;
  if(v150) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v793 = genBankFile.search(/LOCUS/);
  var v550 = v793 == -1;
  var v795 = !v550;
  if(v795) {
    var v938 = genBankFile.search(/DEFINITION/);
    var v794 = v938 == -1;
    var v940 = !v794;
    if(v940) {
      var v1045 = genBankFile.search(/ACCESSION/);
      var v939 = v1045 == -1;
      var v1047 = !v939;
      if(v1047) {
        var v1046 = genBankFile.search(/ORIGIN/);
        v939 = v1046 == -1
      }
      v794 = v939
    }
    v550 = v794
  }
  var v151 = v550;
  if(v151) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v796 = genBankFile$$1.search(/LOCUS/);
  var v551 = v796 == -1;
  var v798 = !v551;
  if(v798) {
    var v941 = genBankFile$$1.search(/DEFINITION/);
    var v797 = v941 == -1;
    var v943 = !v797;
    if(v943) {
      var v1048 = genBankFile$$1.search(/ACCESSION/);
      var v942 = v1048 == -1;
      var v1050 = !v942;
      if(v1050) {
        var v1049 = genBankFile$$1.search(/ORIGIN/);
        v942 = v1049 == -1
      }
      v797 = v942
    }
    v551 = v797
  }
  var v152 = v551;
  if(v152) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v552 = genBankFile$$1.search(/FEATURES {13}/);
  var v153 = v552 == -1;
  if(v153) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v799 = emblFile$$1.search(/ID/);
  var v553 = v799 == -1;
  var v801 = !v553;
  if(v801) {
    var v944 = emblFile$$1.search(/AC/);
    var v800 = v944 == -1;
    var v946 = !v800;
    if(v946) {
      var v1051 = emblFile$$1.search(/DE/);
      var v945 = v1051 == -1;
      var v1053 = !v945;
      if(v1053) {
        var v1052 = emblFile$$1.search(/SQ/);
        v945 = v1052 == -1
      }
      v800 = v945
    }
    v553 = v800
  }
  var v154 = v553;
  if(v154) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v554 = emblFile$$1.search(/^FT/m);
  var v155 = v554 == -1;
  if(v155) {
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
  var v162 = i$$5 < stopBase;
  for(;v162;) {
    var v156 = i$$5 + 1;
    lineOfText = rightNum(v156, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v555 = basePerLine / groupSize;
    var v159 = j$$6 <= v555;
    for(;v159;) {
      var v158 = k < groupSize;
      for(;v158;) {
        var v556 = k + i$$5;
        var v157 = text$$10.charAt(v556);
        lineOfText = lineOfText + v157;
        k = k + 1;
        v158 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v557 = basePerLine / groupSize;
      v159 = j$$6 <= v557
    }
    var v160 = outputWindow.document;
    var v161 = lineOfText + "\n";
    v160.write(v161);
    lineOfText = "";
    v162 = i$$5 < stopBase
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
    var v558 = adjustment < 0;
    if(v558) {
      v558 = adjusted >= 0
    }
    var v163 = v558;
    if(v163) {
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
  var v194 = i$$6 < stopBase$$2;
  for(;v194;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v559 = basePerLine$$2 / groupSize$$2;
    var v170 = j$$7 <= v559;
    for(;v170;) {
      var v166 = k$$1 < groupSize$$2;
      for(;v166;) {
        var v560 = i$$6 + k$$1;
        var v164 = v560 >= stopBase$$2;
        if(v164) {
          break
        }
        var v561 = k$$1 + i$$6;
        var v165 = text$$12.charAt(v561);
        lineOfText$$1 = lineOfText$$1 + v165;
        k$$1 = k$$1 + 1;
        v166 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v168 = numberPosition$$1 == "above";
      if(v168) {
        var v562 = adjustNumbering(i$$6, numberingAdjustment);
        var v167 = rightNum(v562, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v167
      }
      var v169 = i$$6 >= stopBase$$2;
      if(v169) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v563 = basePerLine$$2 / groupSize$$2;
      v170 = j$$7 <= v563
    }
    var v193 = numberPosition$$1 == "left";
    if(v193) {
      var v171 = outputWindow.document;
      var v947 = adjustNumbering(lineNum, numberingAdjustment);
      var v802 = rightNum(v947, "", 8, tabIn$$3);
      var v564 = v802 + lineOfText$$1;
      var v172 = v564 + "\n";
      v171.write(v172);
      var v176 = strands$$1 == "two";
      if(v176) {
        var v173 = outputWindow.document;
        var v948 = adjustNumbering(lineNum, numberingAdjustment);
        var v803 = rightNum(v948, "", 8, tabIn$$3);
        var v804 = complement(lineOfText$$1);
        var v565 = v803 + v804;
        var v174 = v565 + "\n";
        v173.write(v174);
        var v175 = outputWindow.document;
        v175.write("\n")
      }
    }else {
      var v192 = numberPosition$$1 == "right";
      if(v192) {
        var v177 = outputWindow.document;
        var v805 = adjustNumbering(i$$6, numberingAdjustment);
        var v566 = lineOfText$$1 + v805;
        var v178 = v566 + "\n";
        v177.write(v178);
        var v182 = strands$$1 == "two";
        if(v182) {
          var v179 = outputWindow.document;
          var v806 = complement(lineOfText$$1);
          var v807 = adjustNumbering(i$$6, numberingAdjustment);
          var v567 = v806 + v807;
          var v180 = v567 + "\n";
          v179.write(v180);
          var v181 = outputWindow.document;
          v181.write("\n")
        }
      }else {
        var v191 = numberPosition$$1 == "above";
        if(v191) {
          var v183 = outputWindow.document;
          var v184 = aboveNum + "\n";
          v183.write(v184);
          var v185 = outputWindow.document;
          var v186 = lineOfText$$1 + "\n";
          v185.write(v186);
          var v190 = strands$$1 == "two";
          if(v190) {
            var v187 = outputWindow.document;
            var v568 = complement(lineOfText$$1);
            var v188 = v568 + "\n";
            v187.write(v188);
            var v189 = outputWindow.document;
            v189.write("\n")
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v194 = i$$6 < stopBase$$2
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
  var v213 = i$$7 < stopBase$$3;
  for(;v213;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v569 = basePerLine$$3 / groupSize$$3;
    var v201 = j$$8 <= v569;
    for(;v201;) {
      var v197 = k$$2 < groupSize$$3;
      for(;v197;) {
        var v570 = i$$7 + k$$2;
        var v195 = v570 >= stopBase$$3;
        if(v195) {
          break
        }
        var v571 = k$$2 + i$$7;
        var v196 = text$$13.charAt(v571);
        lineOfText$$2 = lineOfText$$2 + v196;
        k$$2 = k$$2 + 1;
        v197 = k$$2 < groupSize$$3
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v199 = numberPosition$$2 == "above";
      if(v199) {
        var v198 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = aboveNum$$1 + v198
      }
      var v200 = i$$7 >= stopBase$$3;
      if(v200) {
        break
      }
      k$$2 = 0;
      j$$8 = j$$8 + 1;
      var v572 = basePerLine$$3 / groupSize$$3;
      v201 = j$$8 <= v572
    }
    var v212 = numberPosition$$2 == "left";
    if(v212) {
      var v202 = outputWindow.document;
      var v808 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v573 = v808 + lineOfText$$2;
      var v203 = v573 + "\n";
      v202.write(v203)
    }else {
      var v211 = numberPosition$$2 == "right";
      if(v211) {
        var v204 = outputWindow.document;
        var v574 = lineOfText$$2 + i$$7;
        var v205 = v574 + "\n";
        v204.write(v205)
      }else {
        var v210 = numberPosition$$2 == "above";
        if(v210) {
          var v206 = outputWindow.document;
          var v207 = aboveNum$$1 + "\n";
          v206.write(v207);
          var v208 = outputWindow.document;
          var v209 = lineOfText$$2 + "\n";
          v208.write(v209)
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v213 = i$$7 < stopBase$$3
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
  var v809 = sequence$$13.length;
  var v575 = v809 <= firstIndexToMutate;
  var v811 = !v575;
  if(v811) {
    var v810 = lastIndexToMutate < 0;
    var v949 = !v810;
    if(v949) {
      v810 = lastIndexToMutate <= firstIndexToMutate
    }
    v575 = v810
  }
  var v214 = v575;
  if(v214) {
    numMut = 0
  }
  var i$$8 = 0;
  var v222 = i$$8 < numMut;
  for(;v222;) {
    maxNum = sequence$$13.length;
    var v576 = Math.random();
    var v215 = v576 * maxNum;
    randNum = Math.floor(v215);
    var v577 = randNum < firstIndexToMutate;
    var v812 = !v577;
    if(v812) {
      v577 = randNum > lastIndexToMutate
    }
    var v216 = v577;
    if(v216) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v222 = i$$8 < numMut;
      continue
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for(;needNewChar;) {
      var v578 = Math.random();
      var v579 = components$$1.length;
      var v217 = v578 * v579;
      componentsIndex = Math.round(v217);
      var v580 = components$$1.length;
      var v218 = componentsIndex == v580;
      if(v218) {
        componentsIndex = 0
      }
      var v581 = components$$1[componentsIndex];
      var v219 = v581 != currentChar;
      if(v219) {
        needNewChar = false
      }
    }
    var v582 = sequence$$13.substring(0, randNum);
    var v583 = components$$1[componentsIndex];
    var v220 = v582 + v583;
    var v584 = randNum + 1;
    var v585 = sequence$$13.length;
    var v221 = sequence$$13.substring(v584, v585);
    sequence$$13 = v220 + v221;
    i$$8 = i$$8 + 1;
    v222 = i$$8 < numMut
  }
  var v223 = outputWindow.document;
  var v224 = addReturns(sequence$$13);
  v223.write(v224);
  return true
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v229 = j$$9 < lengthOut$$1;
  for(;v229;) {
    var v586 = Math.random();
    var v587 = components$$2.length;
    var v225 = v586 * v587;
    tempNum$$1 = Math.floor(v225);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v588 = sequence$$14.length;
    var v228 = v588 == 60;
    if(v228) {
      var v226 = outputWindow.document;
      var v227 = sequence$$14 + "\n";
      v226.write(v227);
      sequence$$14 = ""
    }
    j$$9 = j$$9 + 1;
    v229 = j$$9 < lengthOut$$1
  }
  var v230 = outputWindow.document;
  var v231 = sequence$$14 + "\n";
  v230.write(v231);
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
  var v235 = dnaConformation == "circular";
  if(v235) {
    var v232 = sequence$$15.substring(0, lookAhead);
    shiftValue = v232.length;
    var v950 = sequence$$15.length;
    var v813 = v950 - lookAhead;
    var v814 = sequence$$15.length;
    var v589 = sequence$$15.substring(v813, v814);
    var v233 = v589 + sequence$$15;
    var v234 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v233 + v234;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v236 = outputWindow.document;
  v236.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  var v237 = outputWindow.document;
  var v951 = '<tr><td class="title" width="200px">' + "Site:";
  var v815 = v951 + '</td><td class="title">';
  var v590 = v815 + "Positions:";
  var v238 = v590 + "</td></tr>\n";
  v237.write(v238);
  var i$$9 = 0;
  var v591 = arrayOfItems.length;
  var v254 = i$$9 < v591;
  for(;v254;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v592 = arrayOfItems[i$$9];
    var v239 = v592.match(/\/.+\//);
    matchExp = v239 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    var v952 = arrayOfItems[i$$9];
    var v816 = v952.match(/\)\D*\d+/);
    var v593 = v816.toString();
    var v240 = v593.replace(/\)\D*/, "");
    cutDistance = parseFloat(v240);
    var v246 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v246;) {
      var v241 = matchExp.lastIndex;
      matchPosition = v241 - cutDistance;
      var v594 = matchPosition >= lowerLimit;
      if(v594) {
        v594 = matchPosition < upperLimit
      }
      var v244 = v594;
      if(v244) {
        timesFound = timesFound + 1;
        var v242 = tempString$$1 + ", ";
        var v595 = matchPosition - shiftValue;
        var v243 = v595 + 1;
        tempString$$1 = v242 + v243
      }
      var v245 = matchExp;
      var v817 = matchExp.lastIndex;
      var v953 = RegExp.lastMatch;
      var v818 = v953.length;
      var v596 = v817 - v818;
      v245.lastIndex = v596 + 1;
      v246 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    var v597 = tempString$$1.search(/\d/);
    var v247 = v597 != -1;
    if(v247) {
      tempString$$1 = tempString$$1.replace(/none,\s*/, "")
    }
    var v251 = timesFound == 0;
    if(v251) {
      backGroundClass = "none"
    }else {
      var v250 = timesFound == 1;
      if(v250) {
        backGroundClass = "one"
      }else {
        var v249 = timesFound == 2;
        if(v249) {
          backGroundClass = "two"
        }else {
          var v248 = timesFound == 3;
          if(v248) {
            backGroundClass = "three"
          }else {
            backGroundClass = "many"
          }
        }
      }
    }
    var v252 = outputWindow.document;
    var v1197 = '<tr><td class="' + backGroundClass;
    var v1164 = v1197 + '">';
    var v1229 = arrayOfItems[i$$9];
    var v1214 = v1229.match(/\([^\(]+\)/);
    var v1198 = v1214.toString();
    var v1165 = v1198.replace(/\(|\)/g, "");
    var v1114 = v1164 + v1165;
    var v1054 = v1114 + '</td><td class="';
    var v954 = v1054 + backGroundClass;
    var v819 = v954 + '">';
    var v598 = v819 + tempString$$1;
    var v253 = v598 + "</td></tr>\n";
    v252.write(v253);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v599 = arrayOfItems.length;
    v254 = i$$9 < v599
  }
  var v255 = outputWindow.document;
  v255.write("</tbody></table>\n");
  return true
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v256 = outputWindow.document;
  v256.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  var v257 = outputWindow.document;
  var v1115 = '<tr><td class="title">' + "Pattern:";
  var v1055 = v1115 + '</td><td class="title">';
  var v955 = v1055 + "Times found:";
  var v820 = v955 + '</td><td class="title">';
  var v600 = v820 + "Percentage:";
  var v258 = v600 + "</td></tr>\n";
  v257.write(v258);
  var i$$10 = 0;
  var v601 = arrayOfItems$$1.length;
  var v267 = i$$10 < v601;
  for(;v267;) {
    var tempNumber = 0;
    var v602 = arrayOfItems$$1[i$$10];
    var v259 = v602.match(/\/[^\/]+\//);
    var matchExp$$1 = v259 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    var v603 = sequence$$16.search(matchExp$$1);
    var v261 = v603 != -1;
    if(v261) {
      var v260 = sequence$$16.match(matchExp$$1);
      tempNumber = v260.length
    }
    var percentage = 0;
    var v821 = originalLength + 1;
    var v1056 = arrayOfItems$$1[i$$10];
    var v956 = v1056.match(/\d+/);
    var v822 = parseFloat(v956);
    var v604 = v821 - v822;
    var v264 = v604 > 0;
    if(v264) {
      var v262 = 100 * tempNumber;
      var v605 = originalLength + 1;
      var v957 = arrayOfItems$$1[i$$10];
      var v823 = v957.match(/\d+/);
      var v606 = parseFloat(v823);
      var v263 = v605 - v606;
      percentage = v262 / v263
    }
    var v265 = outputWindow.document;
    var v1230 = arrayOfItems$$1[i$$10];
    var v1215 = v1230.match(/\([^\(]+\)\b/);
    var v1199 = v1215.toString();
    var v1166 = v1199.replace(/\(|\)/g, "");
    var v1116 = "<tr><td>" + v1166;
    var v1057 = v1116 + "</td><td>";
    var v958 = v1057 + tempNumber;
    var v824 = v958 + "</td><td>";
    var v825 = percentage.toFixed(2);
    var v607 = v824 + v825;
    var v266 = v607 + "</td></tr>\n";
    v265.write(v266);
    i$$10 = i$$10 + 1;
    var v608 = arrayOfItems$$1.length;
    v267 = i$$10 < v608
  }
  var v268 = outputWindow.document;
  v268.write("</tbody></table>\n");
  return true
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v609 = sequence$$17.length;
  var v275 = v609 > 0;
  for(;v275;) {
    maxNum$$1 = sequence$$17.length;
    var v610 = Math.random();
    var v269 = v610 * maxNum$$1;
    randNum$$1 = Math.floor(v269);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v270 = randNum$$1 + 1;
    var v271 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v270, v271);
    sequence$$17 = tempString1 + tempString2;
    var v611 = tempSeq.length;
    var v274 = v611 == 60;
    if(v274) {
      var v272 = outputWindow.document;
      var v273 = tempSeq + "\n";
      v272.write(v273);
      tempSeq = ""
    }
    var v612 = sequence$$17.length;
    v275 = v612 > 0
  }
  var v276 = outputWindow.document;
  var v277 = tempSeq + "\n";
  v276.write(v277);
  return true
}
function windowExtract(theDocument) {
  JAM.startProfile('compute');

  var newDna = "";
  var maxInput$$3 = 5E5;
  var matchFound = false;
  var ranges = new Array;
  var v613 = testScript();
  var v278 = v613 == false;
  if(v278) {
    return false
  }
  var v1167 = theDocument.forms;
  var v1117 = v1167[0];
  var v1058 = v1117.elements;
  var v959 = v1058[0];
  var v826 = checkFormElement(v959);
  var v614 = v826 == false;
  var v828 = !v614;
  if(v828) {
    var v1216 = theDocument.forms;
    var v1200 = v1216[0];
    var v1168 = v1200.elements;
    var v1118 = v1168[0];
    var v1059 = v1118.value;
    var v960 = checkSequenceLength(v1059, maxInput$$3);
    var v827 = v960 == false;
    var v962 = !v827;
    if(v962) {
      var v1217 = theDocument.forms;
      var v1201 = v1217[0];
      var v1169 = v1201.elements;
      var v1119 = v1169[1];
      var v1060 = checkFormElement(v1119);
      var v961 = v1060 == false;
      var v1062 = !v961;
      if(v1062) {
        var v1231 = theDocument.forms;
        var v1218 = v1231[0];
        var v1202 = v1218.elements;
        var v1170 = v1202[3];
        var v1120 = checkFormElement(v1170);
        var v1061 = v1120 == false;
        var v1122 = !v1061;
        if(v1122) {
          var v1256 = theDocument.forms;
          var v1250 = v1256[0];
          var v1241 = v1250.elements;
          var v1232 = v1241[1];
          var v1219 = v1232.value;
          var v1203 = v1219.replace(/[^\d]/g, "");
          var v1171 = verifyMaxDigits(v1203, maxInput$$3);
          var v1121 = v1171 == false;
          var v1173 = !v1121;
          if(v1173) {
            var v1257 = theDocument.forms;
            var v1251 = v1257[0];
            var v1242 = v1251.elements;
            var v1233 = v1242[3];
            var v1220 = v1233.value;
            var v1204 = v1220.replace(/[^\d]/g, "");
            var v1172 = verifyMaxDigits(v1204, maxInput$$3);
            v1121 = v1172 == false
          }
          v1061 = v1121
        }
        v961 = v1061
      }
      v827 = v961
    }
    v614 = v827
  }
  var v279 = v614;
  if(v279) {
    return false
  }
  var v1123 = theDocument.forms;
  var v1063 = v1123[0];
  var v963 = v1063.elements;
  var v829 = v963[1];
  var v615 = v829.value;
  var v280 = v615.replace(/[^\d]/g, "");
  var windowSize = parseInt(v280);
  var v1124 = theDocument.forms;
  var v1064 = v1124[0];
  var v964 = v1064.elements;
  var v830 = v964[3];
  var v616 = v830.value;
  var v281 = v616.replace(/[^\d]/g, "");
  var position = parseInt(v281);
  var v965 = theDocument.forms;
  var v831 = v965[0];
  var v617 = v831.elements;
  var v282 = v617[2];
  var orientation = v282.value;
  var start$$4;
  var end$$1;
  var v289 = orientation == "ending";
  if(v289) {
    end$$1 = position;
    var v283 = end$$1 - windowSize;
    start$$4 = v283 + 1
  }else {
    var v288 = orientation == "starting";
    if(v288) {
      start$$4 = position;
      var v284 = start$$4 + windowSize;
      end$$1 = v284 - 1
    }else {
      var v287 = orientation == "centered";
      if(v287) {
        var v832 = windowSize / 2;
        var v618 = Math.round(v832);
        var v285 = position - v618;
        start$$4 = v285 + 1;
        var v286 = start$$4 + windowSize;
        end$$1 = v286 - 1
      }
    }
  }
  var v290 = new Range(start$$4, end$$1);
  ranges.push(v290);
  openWindow("Window Extractor DNA");
  openPre();
  var v1065 = theDocument.forms;
  var v966 = v1065[0];
  var v833 = v966.elements;
  var v619 = v833[0];
  var v291 = v619.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v291);
  var i$$11 = 0;
  var v620 = arrayOfFasta$$1.length;
  var v298 = i$$11 < v620;
  for(;v298;) {
    var v292 = arrayOfFasta$$1[i$$11];
    newDna = getSequenceFromFasta(v292);
    var v293 = arrayOfFasta$$1[i$$11];
    title = getTitleFromFasta(v293);
    verifyDna(newDna);
    newDna = removeNonDna(newDna);
    var v294 = outputWindow.document;
    var v295 = getFastaTitleFromTitleAndSequence(title, newDna);
    v294.write(v295);
    var v1174 = theDocument.forms;
    var v1125 = v1174[0];
    var v1066 = v1125.elements;
    var v967 = v1066[7];
    var v834 = v967.options;
    var v1175 = theDocument.forms;
    var v1126 = v1175[0];
    var v1067 = v1126.elements;
    var v968 = v1067[7];
    var v835 = v968.selectedIndex;
    var v621 = v834[v835];
    var v296 = v621.value;
    var v1176 = theDocument.forms;
    var v1127 = v1176[0];
    var v1068 = v1127.elements;
    var v969 = v1068[8];
    var v836 = v969.options;
    var v1177 = theDocument.forms;
    var v1128 = v1177[0];
    var v1069 = v1128.elements;
    var v970 = v1069[8];
    var v837 = v970.selectedIndex;
    var v622 = v836[v837];
    var v297 = v622.value;
    writeSequenceRanges(newDna, ranges, v296, v297);
    i$$11 = i$$11 + 1;
    var v623 = arrayOfFasta$$1.length;
    v298 = i$$11 < v623
  }
  closePre();
  closeWindow();

  JAM.stopProfile('compute');
  return true
}
function rangeExtract(theDocument$$1) {
  var newDna$$1 = "";
  var maxInput$$4 = 5E5;
  var matchFound$$1 = false;
  var ranges$$1 = new Array;
  var v624 = testScript();
  var v299 = v624 == false;
  if(v299) {
    return false
  }
  var v1178 = theDocument$$1.forms;
  var v1129 = v1178[0];
  var v1070 = v1129.elements;
  var v971 = v1070[0];
  var v838 = checkFormElement(v971);
  var v625 = v838 == false;
  var v840 = !v625;
  if(v840) {
    var v1221 = theDocument$$1.forms;
    var v1205 = v1221[0];
    var v1179 = v1205.elements;
    var v1130 = v1179[0];
    var v1071 = v1130.value;
    var v972 = checkSequenceLength(v1071, maxInput$$4);
    var v839 = v972 == false;
    var v974 = !v839;
    if(v974) {
      var v1206 = theDocument$$1.forms;
      var v1180 = v1206[0];
      var v1131 = v1180.elements;
      var v1072 = v1131[1];
      var v973 = checkFormElement(v1072);
      v839 = v973 == false
    }
    v625 = v839
  }
  var v300 = v625;
  if(v300) {
    return false
  }
  var v1073 = theDocument$$1.forms;
  var v975 = v1073[0];
  var v841 = v975.elements;
  var v626 = v841[1];
  var v301 = v626.value;
  var arrayOfRanges = v301.split(/,/);
  var arrayOfStartAndEnd;
  var i$$12 = 0;
  var v627 = arrayOfRanges.length;
  var v308 = i$$12 < v627;
  for(;v308;) {
    var v302 = arrayOfRanges[i$$12];
    arrayOfStartAndEnd = v302.split(/\.\./);
    var v628 = arrayOfStartAndEnd.length;
    var v307 = v628 == 1;
    if(v307) {
      matchFound$$1 = true;
      var v629 = arrayOfStartAndEnd[0];
      var v630 = arrayOfStartAndEnd[0];
      var v303 = new Range(v629, v630);
      ranges$$1.push(v303)
    }else {
      var v631 = arrayOfStartAndEnd.length;
      var v306 = v631 == 2;
      if(v306) {
        matchFound$$1 = true;
        var v632 = arrayOfStartAndEnd[0];
        var v633 = arrayOfStartAndEnd[1];
        var v304 = new Range(v632, v633);
        ranges$$1.push(v304)
      }else {
        var v634 = arrayOfRanges[i$$12];
        var v305 = "The following range entry was ignored: " + v634;
        alert(v305)
      }
    }
    i$$12 = i$$12 + 1;
    var v635 = arrayOfRanges.length;
    v308 = i$$12 < v635
  }
  var v309 = matchFound$$1 == false;
  if(v309) {
    alert("No ranges were entered.");
    return false
  }
  openWindow("Range Extractor DNA");
  openPre();
  var v1074 = theDocument$$1.forms;
  var v976 = v1074[0];
  var v842 = v976.elements;
  var v636 = v842[0];
  var v310 = v636.value;
  var arrayOfFasta$$2 = getArrayOfFasta(v310);
  i$$12 = 0;
  var v637 = arrayOfFasta$$2.length;
  var v317 = i$$12 < v637;
  for(;v317;) {
    var v311 = arrayOfFasta$$2[i$$12];
    newDna$$1 = getSequenceFromFasta(v311);
    var v312 = arrayOfFasta$$2[i$$12];
    title = getTitleFromFasta(v312);
    verifyDna(newDna$$1);
    newDna$$1 = removeNonDna(newDna$$1);
    var v313 = outputWindow.document;
    var v314 = getFastaTitleFromTitleAndSequence(title, newDna$$1);
    v313.write(v314);
    var v1181 = theDocument$$1.forms;
    var v1132 = v1181[0];
    var v1075 = v1132.elements;
    var v977 = v1075[5];
    var v843 = v977.options;
    var v1182 = theDocument$$1.forms;
    var v1133 = v1182[0];
    var v1076 = v1133.elements;
    var v978 = v1076[5];
    var v844 = v978.selectedIndex;
    var v638 = v843[v844];
    var v315 = v638.value;
    var v1183 = theDocument$$1.forms;
    var v1134 = v1183[0];
    var v1077 = v1134.elements;
    var v979 = v1077[6];
    var v845 = v979.options;
    var v1184 = theDocument$$1.forms;
    var v1135 = v1184[0];
    var v1078 = v1135.elements;
    var v980 = v1078[6];
    var v846 = v980.selectedIndex;
    var v639 = v845[v846];
    var v316 = v639.value;
    writeSequenceRanges(newDna$$1, ranges$$1, v315, v316);
    i$$12 = i$$12 + 1;
    var v640 = arrayOfFasta$$2.length;
    v317 = i$$12 < v640
  }
  closePre();
  closeWindow();
  return true
}
function writeSequenceRanges(sequence$$18, ranges$$2, strand, segmentType) {
  var rangeGroup = new RangeGroup(strand, segmentType);
  var v641 = sequence$$18.length;
  var v318 = v641 / 2;
  var center_base = Math.round(v318);
  var i$$13 = 0;
  var v642 = ranges$$2.length;
  var v332 = i$$13 < v642;
  for(;v332;) {
    var v319 = ranges$$2[i$$13];
    var v981 = ranges$$2[i$$13];
    var v847 = v981.start;
    var v643 = v847.toString();
    var v1275 = v643.replace(/start|begin/gi, 1);
    v319.start = v1275;
    var v320 = ranges$$2[i$$13];
    var v982 = ranges$$2[i$$13];
    var v848 = v982.start;
    var v644 = v848.toString();
    var v645 = sequence$$18.length;
    var v1276 = v644.replace(/stop|end/gi, v645);
    v320.start = v1276;
    var v321 = ranges$$2[i$$13];
    var v983 = ranges$$2[i$$13];
    var v849 = v983.start;
    var v646 = v849.toString();
    var v647 = sequence$$18.length;
    var v1277 = v646.replace(/length/gi, v647);
    v321.start = v1277;
    var v322 = ranges$$2[i$$13];
    var v984 = ranges$$2[i$$13];
    var v850 = v984.start;
    var v648 = v850.toString();
    var v1278 = v648.replace(/middle|center|centre/gi, center_base);
    v322.start = v1278;
    var v323 = ranges$$2[i$$13];
    var v985 = ranges$$2[i$$13];
    var v851 = v985.stop;
    var v649 = v851.toString();
    var v1279 = v649.replace(/start|begin/gi, 1);
    v323.stop = v1279;
    var v324 = ranges$$2[i$$13];
    var v986 = ranges$$2[i$$13];
    var v852 = v986.stop;
    var v650 = v852.toString();
    var v651 = sequence$$18.length;
    var v1280 = v650.replace(/stop|end/gi, v651);
    v324.stop = v1280;
    var v325 = ranges$$2[i$$13];
    var v987 = ranges$$2[i$$13];
    var v853 = v987.stop;
    var v652 = v853.toString();
    var v653 = sequence$$18.length;
    var v1281 = v652.replace(/length/gi, v653);
    v325.stop = v1281;
    var v326 = ranges$$2[i$$13];
    var v988 = ranges$$2[i$$13];
    var v854 = v988.stop;
    var v654 = v854.toString();
    var v1282 = v654.replace(/middle|center|centre/gi, center_base);
    v326.stop = v1282;
    try {
      var v327 = ranges$$2[i$$13];
      var v1079 = ranges$$2[i$$13];
      var v989 = v1079.start;
      var v855 = v989.toString();
      var v655 = eval(v855);
      var v1283 = parseInt(v655);
      v327.start = v1283
    }catch(e$$5) {
      var v856 = ranges$$2[i$$13];
      var v656 = v856.start;
      var v328 = "Could not evaluate the following expression: " + v656;
      alert(v328);
      return false
    }
    try {
      var v329 = ranges$$2[i$$13];
      var v1080 = ranges$$2[i$$13];
      var v990 = v1080.stop;
      var v857 = v990.toString();
      var v657 = eval(v857);
      var v1284 = parseInt(v657);
      v329.stop = v1284
    }catch(e$$6) {
      var v858 = ranges$$2[i$$13];
      var v658 = v858.stop;
      var v330 = "Could not evaluate the following expression: " + v658;
      alert(v330);
      return false
    }
    var v331 = ranges$$2[i$$13];
    rangeGroup.addRange(v331);
    i$$13 = i$$13 + 1;
    var v659 = ranges$$2.length;
    v332 = i$$13 < v659
  }
  rangeGroup.writeRanges(sequence$$18);
  return
}
function getSequence(sequence$$19) {
  var problem = false;
  var warnings = new Array;
  var v660 = this.start;
  var v661 = this.stop;
  var v347 = v660 == v661;
  if(v347) {
    var v662 = this.start;
    var v334 = v662 < 1;
    if(v334) {
      problem = true;
      var v859 = this.start;
      var v663 = "position value of " + v859;
      var v333 = v663 + " is less than 1";
      warnings.push(v333)
    }
    var v664 = this.start;
    var v665 = sequence$$19.length;
    var v336 = v664 > v665;
    if(v336) {
      problem = true;
      var v860 = this.start;
      var v666 = "position value of " + v860;
      var v335 = v666 + " is greater than the sequence length";
      warnings.push(v335)
    }
  }else {
    var v667 = this.start;
    var v338 = v667 < 1;
    if(v338) {
      problem = true;
      var v861 = this.start;
      var v668 = "position value of " + v861;
      var v337 = v668 + " is less than 1";
      warnings.push(v337)
    }
    var v669 = this.stop;
    var v340 = v669 < 1;
    if(v340) {
      problem = true;
      var v862 = this.stop;
      var v670 = "position value of " + v862;
      var v339 = v670 + " is less than 1";
      warnings.push(v339)
    }
    var v671 = this.start;
    var v672 = sequence$$19.length;
    var v342 = v671 > v672;
    if(v342) {
      problem = true;
      var v863 = this.start;
      var v673 = "position value of " + v863;
      var v341 = v673 + " is greater than the sequence length";
      warnings.push(v341)
    }
    var v674 = this.stop;
    var v675 = sequence$$19.length;
    var v344 = v674 > v675;
    if(v344) {
      problem = true;
      var v864 = this.stop;
      var v676 = "position value of " + v864;
      var v343 = v676 + " is greater than the sequence length";
      warnings.push(v343)
    }
    var v677 = this.start;
    var v678 = this.stop;
    var v346 = v677 > v678;
    if(v346) {
      problem = true;
      var v991 = this.start;
      var v865 = "stop position is less than start position in range " + v991;
      var v679 = v865 + " to ";
      var v680 = this.stop;
      var v345 = v679 + v680;
      warnings.push(v345)
    }
  }
  if(problem) {
    var v681 = warnings.join(",\n");
    var v348 = "An entry was skipped because of the following:\n" + v681;
    alert(v348);
    return false
  }else {
    var v682 = this.start;
    var v683 = this.stop;
    var v352 = v682 == v683;
    if(v352) {
      var v684 = this.start;
      var v349 = v684 - 1;
      return sequence$$19.charAt(v349)
    }else {
      var v685 = this.start;
      var v350 = v685 - 1;
      var v351 = this.stop;
      return sequence$$19.substring(v350, v351)
    }
  }
  return
}
function getTitle() {
  var v686 = this.start;
  var v687 = this.stop;
  var v356 = v686 == v687;
  if(v356) {
    var v353 = this.start;
    return"&gt;base " + v353
  }else {
    var v866 = this.start;
    var v688 = "&gt;base " + v866;
    var v354 = v688 + " to ";
    var v355 = this.stop;
    return v354 + v355
  }
  return
}
function Range(start$$5, stop) {
  this.start = start$$5;
  this.stop = stop;
  return
}
function addRange(range$$5) {
  var v357 = this.ranges;
  v357.push(range$$5);
  return
}
function writeRanges(sequence$$20) {
  function v9(str$$16, p1$$9, offset$$21, s$$11) {
    var v689 = p1$$9.length;
    var v358 = offset$$21 + v689;
    return sequence$$20.substring(offset$$21, v358)
  }
  function v8(str$$15, p1$$8, p2$$3, offset$$20, s$$10) {
    var v690 = p1$$8.length;
    var v867 = p1$$8.length;
    var v868 = p2$$3.length;
    var v691 = v867 + v868;
    var v359 = sequence$$20.substring(v690, v691);
    return p1$$8 + v359
  }
  function v7(str$$14, p1$$7, offset$$19, s$$9) {
    var v360 = ["g", "a", "c", "t"];
    var v361 = p1$$7.length;
    return getRandomSequence(v360, v361)
  }
  function v6(str$$13, p1$$6, p2$$2, offset$$18, s$$8) {
    var v692 = ["g", "a", "c", "t"];
    var v693 = p2$$2.length;
    var v362 = getRandomSequence(v692, v693);
    return p1$$6 + v362
  }
  function v5(str$$12, p1$$5, offset$$17, s$$7) {
    return p1$$5.toLowerCase()
  }
  function v4(str$$11, p1$$4, p2$$1, offset$$16, s$$6) {
    var v363 = p2$$1.toLowerCase();
    return p1$$4 + v363
  }
  function v3(str$$10, p1$$3, offset$$15, s$$5) {
    return p1$$3.toUpperCase()
  }
  function v2(str$$9, p1$$2, p2, offset$$14, s$$4) {
    var v364 = p2.toUpperCase();
    return p1$$2 + v364
  }
  var sequenceArray$$1 = new Array;
  var v694 = this.type;
  var v373 = v694 == "new_sequence";
  if(v373) {
    var i$$14 = 0;
    var v869 = this.ranges;
    var v695 = v869.length;
    var v367 = i$$14 < v695;
    for(;v367;) {
      var v992 = this.ranges;
      var v870 = v992[i$$14];
      var v696 = v870.getSequence(sequence$$20);
      var v366 = v696 != "";
      if(v366) {
        var v871 = this.ranges;
        var v697 = v871[i$$14];
        var v365 = v697.getSequence(sequence$$20);
        sequenceArray$$1.push(v365)
      }
      i$$14 = i$$14 + 1;
      var v872 = this.ranges;
      var v698 = v872.length;
      v367 = i$$14 < v698
    }
    var v699 = this.strand;
    var v372 = v699 == "reverse";
    if(v372) {
      var v368 = outputWindow.document;
      var v1081 = sequenceArray$$1.join("");
      var v993 = complement(v1081);
      var v873 = reverse(v993);
      var v700 = addReturns(v873);
      var v369 = v700 + "\n\n";
      v368.write(v369)
    }else {
      var v370 = outputWindow.document;
      var v874 = sequenceArray$$1.join("");
      var v701 = addReturns(v874);
      var v371 = v701 + "\n\n";
      v370.write(v371)
    }
    return true
  }
  var v702 = this.type;
  var v383 = v702 == "separate";
  if(v383) {
    i$$14 = 0;
    var v875 = this.ranges;
    var v703 = v875.length;
    var v382 = i$$14 < v703;
    for(;v382;) {
      var v994 = this.ranges;
      var v876 = v994[i$$14];
      var v704 = v876.getSequence(sequence$$20);
      var v381 = v704 != "";
      if(v381) {
        var v374 = outputWindow.document;
        var v995 = this.ranges;
        var v877 = v995[i$$14];
        var v705 = v877.getTitle();
        var v375 = v705 + "\n";
        v374.write(v375);
        var v706 = this.strand;
        var v380 = v706 == "reverse";
        if(v380) {
          var v376 = outputWindow.document;
          var v1185 = this.ranges;
          var v1136 = v1185[i$$14];
          var v1082 = v1136.getSequence(sequence$$20);
          var v996 = addReturns(v1082);
          var v878 = complement(v996);
          var v707 = reverse(v878);
          var v377 = v707 + "\n\n";
          v376.write(v377)
        }else {
          var v378 = outputWindow.document;
          var v1083 = this.ranges;
          var v997 = v1083[i$$14];
          var v879 = v997.getSequence(sequence$$20);
          var v708 = addReturns(v879);
          var v379 = v708 + "\n\n";
          v378.write(v379)
        }
      }
      i$$14 = i$$14 + 1;
      var v880 = this.ranges;
      var v709 = v880.length;
      v382 = i$$14 < v709
    }
    return true
  }
  var v710 = this.type;
  var v394 = v710 == "uppercased";
  if(v394) {
    var re$$3;
    sequence$$20 = sequence$$20.toLowerCase();
    i$$14 = 0;
    var v881 = this.ranges;
    var v711 = v881.length;
    var v388 = i$$14 < v711;
    for(;v388;) {
      var v998 = this.ranges;
      var v882 = v998[i$$14];
      var v712 = v882.getSequence(sequence$$20);
      var v387 = v712 != "";
      if(v387) {
        var v999 = this.ranges;
        var v883 = v999[i$$14];
        var v713 = v883.start;
        var v386 = v713 > 1;
        if(v386) {
          var v1186 = this.ranges;
          var v1137 = v1186[i$$14];
          var v1084 = v1137.start;
          var v1000 = v1084 - 1;
          var v884 = "(.{" + v1000;
          var v714 = v884 + "})\\B(.{";
          var v1138 = this.ranges;
          var v1085 = v1138[i$$14];
          var v1001 = v1085.stop;
          var v1139 = this.ranges;
          var v1086 = v1139[i$$14];
          var v1002 = v1086.start;
          var v885 = v1001 - v1002;
          var v715 = v885 + 1;
          var v384 = v714 + v715;
          re$$3 = v384 + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = sequence$$20.replace(re$$3, v2)
        }else {
          var v1140 = this.ranges;
          var v1087 = v1140[i$$14];
          var v1003 = v1087.stop;
          var v1141 = this.ranges;
          var v1088 = v1141[i$$14];
          var v1004 = v1088.start;
          var v886 = v1003 - v1004;
          var v716 = v886 + 1;
          var v385 = "(.{" + v716;
          re$$3 = v385 + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = sequence$$20.replace(re$$3, v3)
        }
      }
      i$$14 = i$$14 + 1;
      var v887 = this.ranges;
      var v717 = v887.length;
      v388 = i$$14 < v717
    }
    var v718 = this.strand;
    var v393 = v718 == "reverse";
    if(v393) {
      var v389 = outputWindow.document;
      var v1005 = addReturns(sequence$$20);
      var v888 = complement(v1005);
      var v719 = reverse(v888);
      var v390 = v719 + "\n\n";
      v389.write(v390)
    }else {
      var v391 = outputWindow.document;
      var v720 = addReturns(sequence$$20);
      var v392 = v720 + "\n\n";
      v391.write(v392)
    }
    return true
  }
  var v721 = this.type;
  var v405 = v721 == "lowercased";
  if(v405) {
    sequence$$20 = sequence$$20.toUpperCase();
    i$$14 = 0;
    var v889 = this.ranges;
    var v722 = v889.length;
    var v399 = i$$14 < v722;
    for(;v399;) {
      var v1006 = this.ranges;
      var v890 = v1006[i$$14];
      var v723 = v890.getSequence(sequence$$20);
      var v398 = v723 != "";
      if(v398) {
        var v1007 = this.ranges;
        var v891 = v1007[i$$14];
        var v724 = v891.start;
        var v397 = v724 > 1;
        if(v397) {
          var v1187 = this.ranges;
          var v1142 = v1187[i$$14];
          var v1089 = v1142.start;
          var v1008 = v1089 - 1;
          var v892 = "(.{" + v1008;
          var v725 = v892 + "})\\B(.{";
          var v1143 = this.ranges;
          var v1090 = v1143[i$$14];
          var v1009 = v1090.stop;
          var v1144 = this.ranges;
          var v1091 = v1144[i$$14];
          var v1010 = v1091.start;
          var v893 = v1009 - v1010;
          var v726 = v893 + 1;
          var v395 = v725 + v726;
          re$$3 = v395 + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = sequence$$20.replace(re$$3, v4)
        }else {
          var v1145 = this.ranges;
          var v1092 = v1145[i$$14];
          var v1011 = v1092.stop;
          var v1146 = this.ranges;
          var v1093 = v1146[i$$14];
          var v1012 = v1093.start;
          var v894 = v1011 - v1012;
          var v727 = v894 + 1;
          var v396 = "(.{" + v727;
          re$$3 = v396 + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = sequence$$20.replace(re$$3, v5)
        }
      }
      i$$14 = i$$14 + 1;
      var v895 = this.ranges;
      var v728 = v895.length;
      v399 = i$$14 < v728
    }
    var v729 = this.strand;
    var v404 = v729 == "reverse";
    if(v404) {
      var v400 = outputWindow.document;
      var v1013 = addReturns(sequence$$20);
      var v896 = complement(v1013);
      var v730 = reverse(v896);
      var v401 = v730 + "\n\n";
      v400.write(v401)
    }else {
      var v402 = outputWindow.document;
      var v731 = addReturns(sequence$$20);
      var v403 = v731 + "\n\n";
      v402.write(v403)
    }
    return true
  }
  var v732 = this.type;
  var v416 = v732 == "randomized";
  if(v416) {
    i$$14 = 0;
    var v897 = this.ranges;
    var v733 = v897.length;
    var v410 = i$$14 < v733;
    for(;v410;) {
      var v1014 = this.ranges;
      var v898 = v1014[i$$14];
      var v734 = v898.getSequence(sequence$$20);
      var v409 = v734 != "";
      if(v409) {
        var v1015 = this.ranges;
        var v899 = v1015[i$$14];
        var v735 = v899.start;
        var v408 = v735 > 1;
        if(v408) {
          var v1188 = this.ranges;
          var v1147 = v1188[i$$14];
          var v1094 = v1147.start;
          var v1016 = v1094 - 1;
          var v900 = "(.{" + v1016;
          var v736 = v900 + "})\\B(.{";
          var v1148 = this.ranges;
          var v1095 = v1148[i$$14];
          var v1017 = v1095.stop;
          var v1149 = this.ranges;
          var v1096 = v1149[i$$14];
          var v1018 = v1096.start;
          var v901 = v1017 - v1018;
          var v737 = v901 + 1;
          var v406 = v736 + v737;
          re$$3 = v406 + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = sequence$$20.replace(re$$3, v6)
        }else {
          var v1150 = this.ranges;
          var v1097 = v1150[i$$14];
          var v1019 = v1097.stop;
          var v1151 = this.ranges;
          var v1098 = v1151[i$$14];
          var v1020 = v1098.start;
          var v902 = v1019 - v1020;
          var v738 = v902 + 1;
          var v407 = "(.{" + v738;
          re$$3 = v407 + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = sequence$$20.replace(re$$3, v7)
        }
      }
      i$$14 = i$$14 + 1;
      var v903 = this.ranges;
      var v739 = v903.length;
      v410 = i$$14 < v739
    }
    var v740 = this.strand;
    var v415 = v740 == "reverse";
    if(v415) {
      var v411 = outputWindow.document;
      var v1021 = addReturns(sequence$$20);
      var v904 = complement(v1021);
      var v741 = reverse(v904);
      var v412 = v741 + "\n\n";
      v411.write(v412)
    }else {
      var v413 = outputWindow.document;
      var v742 = addReturns(sequence$$20);
      var v414 = v742 + "\n\n";
      v413.write(v414)
    }
    return true
  }
  var v743 = this.type;
  var v429 = v743 == "preserved";
  if(v429) {
    var v417 = ["g", "a", "c", "t"];
    var v418 = sequence$$20.length;
    var randomSequence = getRandomSequence(v417, v418);
    i$$14 = 0;
    var v905 = this.ranges;
    var v744 = v905.length;
    var v423 = i$$14 < v744;
    for(;v423;) {
      var v1022 = this.ranges;
      var v906 = v1022[i$$14];
      var v745 = v906.getSequence(sequence$$20);
      var v422 = v745 != "";
      if(v422) {
        var v1023 = this.ranges;
        var v907 = v1023[i$$14];
        var v746 = v907.start;
        var v421 = v746 > 1;
        if(v421) {
          var v1189 = this.ranges;
          var v1152 = v1189[i$$14];
          var v1099 = v1152.start;
          var v1024 = v1099 - 1;
          var v908 = "(.{" + v1024;
          var v747 = v908 + "})\\B(.{";
          var v1153 = this.ranges;
          var v1100 = v1153[i$$14];
          var v1025 = v1100.stop;
          var v1154 = this.ranges;
          var v1101 = v1154[i$$14];
          var v1026 = v1101.start;
          var v909 = v1025 - v1026;
          var v748 = v909 + 1;
          var v419 = v747 + v748;
          re$$3 = v419 + "})";
          re$$3 = new RegExp(re$$3);
          randomSequence = randomSequence.replace(re$$3, v8)
        }else {
          var v1155 = this.ranges;
          var v1102 = v1155[i$$14];
          var v1027 = v1102.stop;
          var v1156 = this.ranges;
          var v1103 = v1156[i$$14];
          var v1028 = v1103.start;
          var v910 = v1027 - v1028;
          var v749 = v910 + 1;
          var v420 = "(.{" + v749;
          re$$3 = v420 + "})";
          re$$3 = new RegExp(re$$3);
          randomSequence = randomSequence.replace(re$$3, v9)
        }
      }
      i$$14 = i$$14 + 1;
      var v911 = this.ranges;
      var v750 = v911.length;
      v423 = i$$14 < v750
    }
    var v751 = this.strand;
    var v428 = v751 == "reverse";
    if(v428) {
      var v424 = outputWindow.document;
      var v1029 = addReturns(randomSequence);
      var v912 = complement(v1029);
      var v752 = reverse(v912);
      var v425 = v752 + "\n\n";
      v424.write(v425)
    }else {
      var v426 = outputWindow.document;
      var v753 = addReturns(randomSequence);
      var v427 = v753 + "\n\n";
      v426.write(v427)
    }
    return true
  }
  return
}
function RangeGroup(strand$$1, type$$25) {
  this.strand = strand$$1;
  this.type = type$$25;
  var v1285 = new Array;
  this.ranges = v1285;
  return
}
new Range(0, 0);
var v430 = Range.prototype;
v430.getSequence = getSequence;
var v431 = Range.prototype;
v431.getTitle = getTitle;
new RangeGroup("", "");
var v432 = RangeGroup.prototype;
v432.addRange = addRange;
var v433 = RangeGroup.prototype;
v433.writeRanges = writeRanges;
document.onload = v10;
var v434 = document.getElementById("submitbtn");
v434.onclick = v11;
var v435 = document.getElementById("clearbtn");
v435.onclick = v12;

JAM.stopProfile('load');

