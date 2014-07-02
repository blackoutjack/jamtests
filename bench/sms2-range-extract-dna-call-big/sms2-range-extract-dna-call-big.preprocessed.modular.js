introspect(JAMScript.introspectors.processAll) {
function v12() {
  var v872 = document.forms;
  var v724 = v872[0];
  var v416 = v724.elements;
  var v13 = v416[0];
  v13.value = " ";
  var v873 = document.forms;
  var v725 = v873[0];
  var v417 = v725.elements;
  var v14 = v417[1];
  v14.value = " ";
  return
}
function v11() {
  try {
    rangeExtract(document)
  }catch(e$$7) {
    var v15 = "The following error was encountered: " + e$$7;
    alert(v15)
  }
  return
}
function v10() {
  var v418 = document.main_form;
  var v16 = v418.main_submit;
  v16.focus();
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
  var v17 = arrayOfSequences[0];
  var lengthOfAlign = v17.length;
  var v419 = arrayOfSequences.length;
  var v18 = v419 < 2;
  if(v18) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v420 = arrayOfTitles.length;
  var v20 = i$$1 < v420;
  for(;v20;) {
    var v874 = arrayOfTitles[i$$1];
    var v726 = v874.search(/\S/);
    var v421 = v726 == -1;
    var v728 = !v421;
    if(v728) {
      var v978 = arrayOfSequences[i$$1];
      var v875 = v978.search(/\S/);
      var v727 = v875 == -1;
      var v877 = !v727;
      if(v877) {
        var v979 = arrayOfSequences[i$$1];
        var v876 = v979.length;
        v727 = v876 != lengthOfAlign
      }
      v421 = v727
    }
    var v19 = v421;
    if(v19) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v422 = arrayOfTitles.length;
    v20 = i$$1 < v422
  }
  return true
}
function checkCodonTable(codonTable) {
  var v729 = codonTable.search(/AmAcid/);
  var v423 = v729 == -1;
  var v731 = !v423;
  if(v731) {
    var v878 = codonTable.search(/Codon/);
    var v730 = v878 == -1;
    var v880 = !v730;
    if(v880) {
      var v980 = codonTable.search(/Number/);
      var v879 = v980 == -1;
      var v982 = !v879;
      if(v982) {
        var v1040 = codonTable.search(/\/1000/);
        var v981 = v1040 == -1;
        var v1042 = !v981;
        if(v1042) {
          var v1041 = codonTable.search(/Fraction\s*\.\./);
          v981 = v1041 == -1
        }
        v879 = v981
      }
      v730 = v879
    }
    v423 = v730
  }
  var v21 = v423;
  if(v21) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v732 = formElement.value;
  var v424 = v732.search(/\S/);
  var v22 = v424 == -1;
  if(v22) {
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
  var v425 = arrayOfPatterns.length;
  var v25 = z$$2 < v425;
  for(;v25;) {
    var v733 = arrayOfPatterns[z$$2];
    var v426 = v733.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v23 = v426 == -1;
    if(v23) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    var v734 = arrayOfPatterns[z$$2];
    var v427 = moreExpressionCheck(v734);
    var v24 = v427 == false;
    if(v24) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v428 = arrayOfPatterns.length;
    v25 = z$$2 < v428
  }
  var v26 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v26);
  var v27 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v27);
  var j = 0;
  var v429 = arrayOfPatterns.length;
  var v34 = j < v429;
  for(;v34;) {
    var v28 = geneticCodeMatchExp;
    var v29 = j;
    var v881 = arrayOfPatterns[j];
    var v735 = v881.match(/\/.+\//);
    var v430 = v735 + "gi";
    var v1163 = eval(v430);
    v28[v29] = v1163;
    var v30 = geneticCodeMatchResult;
    var v31 = j;
    var v736 = arrayOfPatterns[j];
    var v431 = v736.match(/=[a-zA-Z\*]/);
    var v1164 = v431.toString();
    v30[v31] = v1164;
    var v32 = geneticCodeMatchResult;
    var v33 = j;
    var v432 = geneticCodeMatchResult[j];
    var v1165 = v432.replace(/=/g, "");
    v32[v33] = v1165;
    j = j + 1;
    var v433 = arrayOfPatterns.length;
    v34 = j < v433
  }
  var i$$2 = 0;
  var v737 = testSequence.length;
  var v434 = v737 - 3;
  var v41 = i$$2 <= v434;
  for(;v41;) {
    var v35 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v35);
    j = 0;
    var v435 = geneticCodeMatchExp.length;
    var v39 = j < v435;
    for(;v39;) {
      var v738 = geneticCodeMatchExp[j];
      var v436 = codon.search(v738);
      var v38 = v436 != -1;
      if(v38) {
        var v37 = oneMatch == true;
        if(v37) {
          var v437 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v36 = v437 + ".";
          alert(v36);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v438 = geneticCodeMatchExp.length;
      v39 = j < v438
    }
    var v40 = oneMatch == false;
    if(v40) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v739 = testSequence.length;
    var v439 = v739 - 3;
    v41 = i$$2 <= v439
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v440 = arrayOfPatterns$$1.length;
  var v43 = z$$3 < v440;
  for(;v43;) {
    var v740 = arrayOfPatterns$$1[z$$3];
    var v441 = v740.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v42 = v441 != -1;
    if(v42) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v442 = arrayOfPatterns$$1.length;
    v43 = z$$3 < v442
  }
  var i$$3 = 0;
  var v443 = arrayOfPatterns$$1.length;
  var v47 = i$$3 < v443;
  for(;v47;) {
    var v741 = arrayOfPatterns$$1[i$$3];
    var v444 = "[" + v741;
    var v44 = v444 + "]";
    var re = new RegExp(v44, "gi");
    var j$$1 = i$$3 + 1;
    var v445 = arrayOfPatterns$$1.length;
    var v46 = j$$1 < v445;
    for(;v46;) {
      var v742 = arrayOfPatterns$$1[j$$1];
      var v446 = v742.search(re);
      var v45 = v446 != -1;
      if(v45) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v447 = arrayOfPatterns$$1.length;
      v46 = j$$1 < v447
    }
    i$$3 = i$$3 + 1;
    var v448 = arrayOfPatterns$$1.length;
    v47 = i$$3 < v448
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v449 = arrayOfPatterns$$2.length;
  var v50 = z$$4 < v449;
  for(;v50;) {
    var v743 = arrayOfPatterns$$2[z$$4];
    var v450 = v743.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v48 = v450 == -1;
    if(v48) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    var v744 = arrayOfPatterns$$2[z$$4];
    var v451 = moreExpressionCheck(v744);
    var v49 = v451 == false;
    if(v49) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v452 = arrayOfPatterns$$2.length;
    v50 = z$$4 < v452
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v882 = getSequenceFromFasta(text$$7);
  var v745 = v882.replace(/[^A-Za-z]/g, "");
  var v453 = v745.length;
  var v52 = v453 > maxInput;
  if(v52) {
    var v454 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v51 = v454 + " characters.";
    alert(v51);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v455 = text$$8.length;
  var v54 = v455 > maxInput$$1;
  if(v54) {
    var v456 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v53 = v456 + " characters.";
    alert(v53);
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
  var v55 = outputWindow.document;
  v55.write("</form>");
  return true
}
function closePre() {
  var v56 = outputWindow.document;
  v56.write("</div>");
  var v57 = outputWindow.document;
  v57.write("</pre>\n");
  return
}
function closeTextArea() {
  var v58 = outputWindow.document;
  v58.write("</textarea>");
  return true
}
function closeWindow() {
  var v59 = outputWindow.document;
  v59.write("</body>\n</html>\n");
  outputWindow.status = "Done.";
  var v60 = outputWindow.document;
  v60.close();
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
  var v457 = alignArray.length;
  var v61 = v457 < 3;
  if(v61) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v458 = alignArray.length;
  var v63 = i$$4 < v458;
  for(;v63;) {
    var v746 = alignArray[i$$4];
    var v459 = v746.search(/[^\s]+\s/);
    var v62 = v459 == -1;
    if(v62) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v460 = alignArray.length;
    v63 = i$$4 < v460
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
  var v461 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v66 = v461 != -1;
  if(v66) {
    var v65 = matchArray = re$$1.exec(sequenceData);
    for(;v65;) {
      var v64 = matchArray[0];
      arrayOfFasta.push(v64);
      v65 = matchArray = re$$1.exec(sequenceData)
    }
  }else {
    arrayOfFasta[0] = sequenceData
  }
  return arrayOfFasta
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v462 = sequence$$2.length;
  var v67 = "&gt;results for " + v462;
  var stringToReturn = v67 + " residue sequence ";
  var v463 = fastaSequenceTitle.search(/[^\s]/);
  var v69 = v463 != -1;
  if(v69) {
    var v464 = stringToReturn + '"';
    var v68 = v464 + fastaSequenceTitle;
    stringToReturn = v68 + '"'
  }
  var v465 = stringToReturn + ' starting "';
  var v466 = sequence$$2.substring(0, 10);
  var v70 = v465 + v466;
  stringToReturn = v70 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v467 = sequenceOne.length;
  var v71 = "Search results for " + v467;
  var stringToReturn$$1 = v71 + " residue sequence ";
  var v468 = fastaSequenceTitleOne.search(/[^\s]/);
  var v73 = v468 != -1;
  if(v73) {
    var v469 = stringToReturn$$1 + '"';
    var v72 = v469 + fastaSequenceTitleOne;
    stringToReturn$$1 = v72 + '"'
  }
  var v470 = stringToReturn$$1 + ' starting "';
  var v471 = sequenceOne.substring(0, 10);
  var v74 = v470 + v471;
  stringToReturn$$1 = v74 + '"\n';
  var v472 = stringToReturn$$1 + "and ";
  var v473 = sequenceTwo.length;
  var v75 = v472 + v473;
  stringToReturn$$1 = v75 + " residue sequence ";
  var v474 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v77 = v474 != -1;
  if(v77) {
    var v475 = stringToReturn$$1 + '"';
    var v76 = v475 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v76 + '"'
  }
  var v476 = stringToReturn$$1 + ' starting "';
  var v477 = sequenceTwo.substring(0, 10);
  var v78 = v476 + v477;
  stringToReturn$$1 = v78 + '"';
  var v79 = '<div class="info">' + stringToReturn$$1;
  return v79 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v80 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v80);
  var j$$2 = 0;
  var v478 = arrayOfPatterns$$3.length;
  var v83 = j$$2 < v478;
  for(;v83;) {
    var v81 = geneticCodeMatchExp$$1;
    var v82 = j$$2;
    var v883 = arrayOfPatterns$$3[j$$2];
    var v747 = v883.match(/\/.+\//);
    var v479 = v747 + "gi";
    var v1166 = eval(v479);
    v81[v82] = v1166;
    j$$2 = j$$2 + 1;
    var v480 = arrayOfPatterns$$3.length;
    v83 = j$$2 < v480
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v84 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v84);
  var j$$3 = 0;
  var v481 = arrayOfPatterns$$4.length;
  var v89 = j$$3 < v481;
  for(;v89;) {
    var v85 = geneticCodeMatchResult$$1;
    var v86 = j$$3;
    var v748 = arrayOfPatterns$$4[j$$3];
    var v482 = v748.match(/=[a-zA-Z\*]/);
    var v1167 = v482.toString();
    v85[v86] = v1167;
    var v87 = geneticCodeMatchResult$$1;
    var v88 = j$$3;
    var v483 = geneticCodeMatchResult$$1[j$$3];
    var v1168 = v483.replace(/=/g, "");
    v87[v88] = v1168;
    j$$3 = j$$3 + 1;
    var v484 = arrayOfPatterns$$4.length;
    v89 = j$$3 < v484
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v485 = sequence$$3.length;
  var v90 = "Results for " + v485;
  var stringToReturn$$2 = v90 + " residue sequence ";
  var v486 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v92 = v486 != -1;
  if(v92) {
    var v487 = stringToReturn$$2 + '"';
    var v91 = v487 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v91 + '"'
  }
  var v488 = stringToReturn$$2 + ' starting "';
  var v489 = sequence$$3.substring(0, 10);
  var v93 = v488 + v489;
  stringToReturn$$2 = v93 + '"';
  var v94 = '<div class="info">' + stringToReturn$$2;
  return v94 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v749 = "Results for " + topology;
  var v490 = v749 + " ";
  var v491 = sequence$$4.length;
  var v95 = v490 + v491;
  var stringToReturn$$3 = v95 + " residue sequence ";
  var v492 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v97 = v492 != -1;
  if(v97) {
    var v493 = stringToReturn$$3 + '"';
    var v96 = v493 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v96 + '"'
  }
  var v494 = stringToReturn$$3 + ' starting "';
  var v495 = sequence$$4.substring(0, 10);
  var v98 = v494 + v495;
  stringToReturn$$3 = v98 + '"';
  var v99 = '<div class="info">' + stringToReturn$$3;
  return v99 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v496 = sequenceOne$$1.length;
  var v100 = "Alignment results for " + v496;
  var stringToReturn$$4 = v100 + " residue sequence ";
  var v497 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v102 = v497 != -1;
  if(v102) {
    var v498 = stringToReturn$$4 + '"';
    var v101 = v498 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v101 + '"'
  }
  var v499 = stringToReturn$$4 + ' starting "';
  var v500 = sequenceOne$$1.substring(0, 10);
  var v103 = v499 + v500;
  stringToReturn$$4 = v103 + '"\n';
  var v501 = stringToReturn$$4 + "and ";
  var v502 = sequenceTwo$$1.length;
  var v104 = v501 + v502;
  stringToReturn$$4 = v104 + " residue sequence ";
  var v503 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v106 = v503 != -1;
  if(v106) {
    var v504 = stringToReturn$$4 + '"';
    var v105 = v504 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v105 + '"'
  }
  var v505 = stringToReturn$$4 + ' starting "';
  var v506 = sequenceTwo$$1.substring(0, 10);
  var v107 = v505 + v506;
  stringToReturn$$4 = v107 + '"';
  var v108 = '<div class="info">' + stringToReturn$$4;
  return v108 + "</div>\n"
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v110 = j$$4 < lengthOut;
  for(;v110;) {
    var v507 = Math.random();
    var v508 = components.length;
    var v109 = v507 * v508;
    tempNum = Math.floor(v109);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4 = j$$4 + 1;
    v110 = j$$4 < lengthOut
  }
  return sequenceArray.join("")
}
function getSequenceFromFasta(sequenceRecord) {
  var v509 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v111 = v509 != -1;
  if(v111) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "")
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v510 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v113 = v510 != -1;
  if(v113) {
    var v112 = sequenceRecord$$1.match(/\>[^\f\n\r]+[\f\n\r]/, "");
    fastaTitle = v112.toString();
    fastaTitle = fastaTitle.replace(/\>|[\f\n\r]/g, "");
    fastaTitle = fastaTitle.replace(/\s{2,}/g, " ");
    fastaTitle = fastaTitle.replace(/[\<\>]/gi, "")
  }
  return fastaTitle
}
function moreExpressionCheck(expressionToCheck) {
  var v750 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v511 = v750 != -1;
  var v752 = !v511;
  if(v752) {
    var v884 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    var v751 = v884 != -1;
    var v886 = !v751;
    if(v886) {
      var v983 = expressionToCheck.search(/\[\]/);
      var v885 = v983 != -1;
      var v985 = !v885;
      if(v985) {
        var v1043 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
        var v984 = v1043 != -1;
        var v1045 = !v984;
        if(v1045) {
          var v1081 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
          var v1044 = v1081 != -1;
          var v1083 = !v1044;
          if(v1083) {
            var v1103 = expressionToCheck.search(/\|\|/);
            var v1082 = v1103 != -1;
            var v1105 = !v1082;
            if(v1105) {
              var v1115 = expressionToCheck.search(/\/\|/);
              var v1104 = v1115 != -1;
              var v1117 = !v1104;
              if(v1117) {
                var v1125 = expressionToCheck.search(/\|\//);
                var v1116 = v1125 != -1;
                var v1127 = !v1116;
                if(v1127) {
                  var v1134 = expressionToCheck.search(/\[.\]/);
                  var v1126 = v1134 != -1;
                  var v1136 = !v1126;
                  if(v1136) {
                    var v1141 = expressionToCheck.search(/\</);
                    var v1135 = v1141 != -1;
                    var v1143 = !v1135;
                    if(v1143) {
                      var v1142 = expressionToCheck.search(/\>/);
                      v1135 = v1142 != -1
                    }
                    v1126 = v1135
                  }
                  v1116 = v1126
                }
                v1104 = v1116
              }
              v1082 = v1104
            }
            v1044 = v1082
          }
          v984 = v1044
        }
        v885 = v984
      }
      v751 = v885
    }
    v511 = v751
  }
  var v114 = v511;
  if(v114) {
    return false
  }
  return true
}
function openForm() {
  var v115 = outputWindow.document;
  v115.write('<form action="">\n');
  return true
}
function openPre() {
  var v116 = outputWindow.document;
  v116.write("<pre>");
  var v117 = outputWindow.document;
  v117.write('<div class="pre">');
  return
}
function openTextArea() {
  var v118 = outputWindow.document;
  v118.write('<br /><textarea rows="6" cols="61">\n');
  return true
}
function openWindow(title$$6) {
  _openWindow(title$$6, true);
  return
}
function _openWindow(title$$7, isColor) {
  outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  outputWindow.focus();
  var v119 = outputWindow.document;
  var v887 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v753 = v887 + "<head>\n";
  var v512 = v753 + "<title>Sequence Manipulation Suite</title>\n";
  var v120 = v512 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v119.write(v120);
  if(isColor) {
    var v121 = outputWindow.document;
    var v1156 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1152 = v1156 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1148 = v1152 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1144 = v1148 + "div.info {font-weight: bold}\n";
    var v1137 = v1144 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1128 = v1137 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v1118 = v1128 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v1106 = v1118 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1084 = v1106 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v1046 = v1084 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v986 = v1046 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v888 = v986 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v754 = v888 + "td.many {color: #000000}\n";
    var v513 = v754 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v122 = v513 + "</style>\n";
    v121.write(v122)
  }else {
    var v123 = outputWindow.document;
    var v1160 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1157 = v1160 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1153 = v1157 + "div.title {display: none}\n";
    var v1149 = v1153 + "div.info {font-weight: bold}\n";
    var v1145 = v1149 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1138 = v1145 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1129 = v1138 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v1119 = v1129 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1107 = v1119 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1085 = v1107 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1047 = v1085 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v987 = v1047 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v889 = v987 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v755 = v889 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v514 = v755 + "img {display: none}\n";
    var v124 = v514 + "</style>\n";
    v123.write(v124)
  }
  var v125 = outputWindow.document;
  var v890 = "</head>\n" + '<body class="main">\n';
  var v756 = v890 + '<div class="title">';
  var v515 = v756 + title$$7;
  var v126 = v515 + " results</div>\n";
  v125.write(v126);
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
  var v127 = outputWindow.document;
  var v891 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v757 = v891 + "<head>\n";
  var v516 = v757 + "<title>Sequence Manipulation Suite</title>\n";
  var v128 = v516 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v127.write(v128);
  if(isBackground) {
    var v129 = outputWindow.document;
    var v1158 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1154 = v1158 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1150 = v1154 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1146 = v1150 + "div.info {font-weight: bold}\n";
    var v1139 = v1146 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v1130 = v1139 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v1120 = v1130 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v1108 = v1120 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v1086 = v1108 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v1048 = v1086 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v988 = v1048 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v892 = v988 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v758 = v892 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v517 = v758 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v130 = v517 + "</style>\n";
    v129.write(v130)
  }else {
    var v131 = outputWindow.document;
    var v1162 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1161 = v1162 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1159 = v1161 + "div.title {display: none}\n";
    var v1155 = v1159 + "div.info {font-weight: bold}\n";
    var v1151 = v1155 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1147 = v1151 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v1140 = v1147 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v1131 = v1140 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v1121 = v1131 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v1109 = v1121 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v1087 = v1109 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v1049 = v1087 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v989 = v1049 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v893 = v989 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v759 = v893 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v518 = v759 + "img {display: none}\n";
    var v132 = v518 + "</style>\n";
    v131.write(v132)
  }
  var v133 = outputWindow.document;
  var v894 = "</head>\n" + '<body class="main">\n';
  var v760 = v894 + '<div class="title">';
  var v519 = v760 + title$$9;
  var v134 = v519 + " results</div>\n";
  v133.write(v134);
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
  var v520 = dnaSequence$$1.search(/./);
  var v135 = v520 != -1;
  if(v135) {
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
  var v136 = j$$5 < lengthOfColumn;
  for(;v136;) {
    tempString = tempString + " ";
    j$$5 = j$$5 + 1;
    v136 = j$$5 < lengthOfColumn
  }
  var v137 = tempString + theNumber;
  theNumber = v137 + " ";
  var v138 = sequenceToAppend + theNumber;
  sequenceToAppend = v138 + tabIn;
  return sequenceToAppend
}
function testScript() {
  function v1(str$$8, p1$$1, offset$$13, s$$3) {
    return p1$$1 + "X"
  }
  var testArray = new Array;
  var testString = "1234567890";
  testArray.push(testString);
  var v521 = testArray[0];
  var v139 = v521 != testString;
  if(v139) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v522 = testString.search(re$$2);
  var v140 = v522 == -1;
  if(v140) {
    alert("Regular expression 'm' flag not supported. See browser compatibility page.");
    return false
  }
  var caughtException = false;
  try {
    re$$2 = eval("Exception handling not supported. Check browser compatibility page.")
  }catch(e$$4) {
    caughtException = true
  }
  var v141 = !caughtException;
  if(v141) {
    alert("Exception handling not supported. See browser compatibility page.")
  }
  testString = "123";
  testString = testString.replace(/(\d)/g, v1);
  var v142 = testString != "1X2X3X";
  if(v142) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false
  }
  var testNum = 2489.8237;
  var v523 = testNum.toFixed(3);
  var v143 = v523 != 2489.824;
  if(v143) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v524 = testNum.toPrecision(5);
  var v144 = v524 != 2489.8;
  if(v144) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v525 = theNumber$$1.search(/\d/);
  var v145 = v525 == -1;
  if(v145) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v761 = emblFile.search(/ID/);
  var v526 = v761 == -1;
  var v763 = !v526;
  if(v763) {
    var v895 = emblFile.search(/AC/);
    var v762 = v895 == -1;
    var v897 = !v762;
    if(v897) {
      var v990 = emblFile.search(/DE/);
      var v896 = v990 == -1;
      var v992 = !v896;
      if(v992) {
        var v991 = emblFile.search(/SQ/);
        v896 = v991 == -1
      }
      v762 = v896
    }
    v526 = v762
  }
  var v146 = v526;
  if(v146) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v527 = theNumber$$2.search(/\d/);
  var v147 = v527 == -1;
  if(v147) {
    alert("Please enter a number.");
    return false
  }
  var v149 = theNumber$$2 > maxInput$$2;
  if(v149) {
    var v528 = "Please enter a number less than or equal to " + maxInput$$2;
    var v148 = v528 + ".";
    alert(v148);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v529 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v150 = v529 != -1;
  if(v150) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v530 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v151 = v530 != -1;
  if(v151) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v764 = genBankFile.search(/LOCUS/);
  var v531 = v764 == -1;
  var v766 = !v531;
  if(v766) {
    var v898 = genBankFile.search(/DEFINITION/);
    var v765 = v898 == -1;
    var v900 = !v765;
    if(v900) {
      var v993 = genBankFile.search(/ACCESSION/);
      var v899 = v993 == -1;
      var v995 = !v899;
      if(v995) {
        var v994 = genBankFile.search(/ORIGIN/);
        v899 = v994 == -1
      }
      v765 = v899
    }
    v531 = v765
  }
  var v152 = v531;
  if(v152) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v767 = genBankFile$$1.search(/LOCUS/);
  var v532 = v767 == -1;
  var v769 = !v532;
  if(v769) {
    var v901 = genBankFile$$1.search(/DEFINITION/);
    var v768 = v901 == -1;
    var v903 = !v768;
    if(v903) {
      var v996 = genBankFile$$1.search(/ACCESSION/);
      var v902 = v996 == -1;
      var v998 = !v902;
      if(v998) {
        var v997 = genBankFile$$1.search(/ORIGIN/);
        v902 = v997 == -1
      }
      v768 = v902
    }
    v532 = v768
  }
  var v153 = v532;
  if(v153) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v533 = genBankFile$$1.search(/FEATURES {13}/);
  var v154 = v533 == -1;
  if(v154) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v770 = emblFile$$1.search(/ID/);
  var v534 = v770 == -1;
  var v772 = !v534;
  if(v772) {
    var v904 = emblFile$$1.search(/AC/);
    var v771 = v904 == -1;
    var v906 = !v771;
    if(v906) {
      var v999 = emblFile$$1.search(/DE/);
      var v905 = v999 == -1;
      var v1001 = !v905;
      if(v1001) {
        var v1000 = emblFile$$1.search(/SQ/);
        v905 = v1000 == -1
      }
      v771 = v905
    }
    v534 = v771
  }
  var v155 = v534;
  if(v155) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v535 = emblFile$$1.search(/^FT/m);
  var v156 = v535 == -1;
  if(v156) {
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
  var v163 = i$$5 < stopBase;
  for(;v163;) {
    var v157 = i$$5 + 1;
    lineOfText = rightNum(v157, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v536 = basePerLine / groupSize;
    var v160 = j$$6 <= v536;
    for(;v160;) {
      var v159 = k < groupSize;
      for(;v159;) {
        var v537 = k + i$$5;
        var v158 = text$$10.charAt(v537);
        lineOfText = lineOfText + v158;
        k = k + 1;
        v159 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v538 = basePerLine / groupSize;
      v160 = j$$6 <= v538
    }
    var v161 = outputWindow.document;
    var v162 = lineOfText + "\n";
    v161.write(v162);
    lineOfText = "";
    v163 = i$$5 < stopBase
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
    var v539 = adjustment < 0;
    if(v539) {
      v539 = adjusted >= 0
    }
    var v164 = v539;
    if(v164) {
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
  var v195 = i$$6 < stopBase$$2;
  for(;v195;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v540 = basePerLine$$2 / groupSize$$2;
    var v171 = j$$7 <= v540;
    for(;v171;) {
      var v167 = k$$1 < groupSize$$2;
      for(;v167;) {
        var v541 = i$$6 + k$$1;
        var v165 = v541 >= stopBase$$2;
        if(v165) {
          break
        }
        var v542 = k$$1 + i$$6;
        var v166 = text$$12.charAt(v542);
        lineOfText$$1 = lineOfText$$1 + v166;
        k$$1 = k$$1 + 1;
        v167 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v169 = numberPosition$$1 == "above";
      if(v169) {
        var v543 = adjustNumbering(i$$6, numberingAdjustment);
        var v168 = rightNum(v543, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v168
      }
      var v170 = i$$6 >= stopBase$$2;
      if(v170) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v544 = basePerLine$$2 / groupSize$$2;
      v171 = j$$7 <= v544
    }
    var v194 = numberPosition$$1 == "left";
    if(v194) {
      var v172 = outputWindow.document;
      var v907 = adjustNumbering(lineNum, numberingAdjustment);
      var v773 = rightNum(v907, "", 8, tabIn$$3);
      var v545 = v773 + lineOfText$$1;
      var v173 = v545 + "\n";
      v172.write(v173);
      var v177 = strands$$1 == "two";
      if(v177) {
        var v174 = outputWindow.document;
        var v908 = adjustNumbering(lineNum, numberingAdjustment);
        var v774 = rightNum(v908, "", 8, tabIn$$3);
        var v775 = complement(lineOfText$$1);
        var v546 = v774 + v775;
        var v175 = v546 + "\n";
        v174.write(v175);
        var v176 = outputWindow.document;
        v176.write("\n")
      }
    }else {
      var v193 = numberPosition$$1 == "right";
      if(v193) {
        var v178 = outputWindow.document;
        var v776 = adjustNumbering(i$$6, numberingAdjustment);
        var v547 = lineOfText$$1 + v776;
        var v179 = v547 + "\n";
        v178.write(v179);
        var v183 = strands$$1 == "two";
        if(v183) {
          var v180 = outputWindow.document;
          var v777 = complement(lineOfText$$1);
          var v778 = adjustNumbering(i$$6, numberingAdjustment);
          var v548 = v777 + v778;
          var v181 = v548 + "\n";
          v180.write(v181);
          var v182 = outputWindow.document;
          v182.write("\n")
        }
      }else {
        var v192 = numberPosition$$1 == "above";
        if(v192) {
          var v184 = outputWindow.document;
          var v185 = aboveNum + "\n";
          v184.write(v185);
          var v186 = outputWindow.document;
          var v187 = lineOfText$$1 + "\n";
          v186.write(v187);
          var v191 = strands$$1 == "two";
          if(v191) {
            var v188 = outputWindow.document;
            var v549 = complement(lineOfText$$1);
            var v189 = v549 + "\n";
            v188.write(v189);
            var v190 = outputWindow.document;
            v190.write("\n")
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v195 = i$$6 < stopBase$$2
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
  var v214 = i$$7 < stopBase$$3;
  for(;v214;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v550 = basePerLine$$3 / groupSize$$3;
    var v202 = j$$8 <= v550;
    for(;v202;) {
      var v198 = k$$2 < groupSize$$3;
      for(;v198;) {
        var v551 = i$$7 + k$$2;
        var v196 = v551 >= stopBase$$3;
        if(v196) {
          break
        }
        var v552 = k$$2 + i$$7;
        var v197 = text$$13.charAt(v552);
        lineOfText$$2 = lineOfText$$2 + v197;
        k$$2 = k$$2 + 1;
        v198 = k$$2 < groupSize$$3
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v200 = numberPosition$$2 == "above";
      if(v200) {
        var v199 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = aboveNum$$1 + v199
      }
      var v201 = i$$7 >= stopBase$$3;
      if(v201) {
        break
      }
      k$$2 = 0;
      j$$8 = j$$8 + 1;
      var v553 = basePerLine$$3 / groupSize$$3;
      v202 = j$$8 <= v553
    }
    var v213 = numberPosition$$2 == "left";
    if(v213) {
      var v203 = outputWindow.document;
      var v779 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v554 = v779 + lineOfText$$2;
      var v204 = v554 + "\n";
      v203.write(v204)
    }else {
      var v212 = numberPosition$$2 == "right";
      if(v212) {
        var v205 = outputWindow.document;
        var v555 = lineOfText$$2 + i$$7;
        var v206 = v555 + "\n";
        v205.write(v206)
      }else {
        var v211 = numberPosition$$2 == "above";
        if(v211) {
          var v207 = outputWindow.document;
          var v208 = aboveNum$$1 + "\n";
          v207.write(v208);
          var v209 = outputWindow.document;
          var v210 = lineOfText$$2 + "\n";
          v209.write(v210)
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v214 = i$$7 < stopBase$$3
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
  var v780 = sequence$$13.length;
  var v556 = v780 <= firstIndexToMutate;
  var v782 = !v556;
  if(v782) {
    var v781 = lastIndexToMutate < 0;
    var v909 = !v781;
    if(v909) {
      v781 = lastIndexToMutate <= firstIndexToMutate
    }
    v556 = v781
  }
  var v215 = v556;
  if(v215) {
    numMut = 0
  }
  var i$$8 = 0;
  var v223 = i$$8 < numMut;
  for(;v223;) {
    maxNum = sequence$$13.length;
    var v557 = Math.random();
    var v216 = v557 * maxNum;
    randNum = Math.floor(v216);
    var v558 = randNum < firstIndexToMutate;
    var v783 = !v558;
    if(v783) {
      v558 = randNum > lastIndexToMutate
    }
    var v217 = v558;
    if(v217) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v223 = i$$8 < numMut;
      continue
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for(;needNewChar;) {
      var v559 = Math.random();
      var v560 = components$$1.length;
      var v218 = v559 * v560;
      componentsIndex = Math.round(v218);
      var v561 = components$$1.length;
      var v219 = componentsIndex == v561;
      if(v219) {
        componentsIndex = 0
      }
      var v562 = components$$1[componentsIndex];
      var v220 = v562 != currentChar;
      if(v220) {
        needNewChar = false
      }
    }
    var v563 = sequence$$13.substring(0, randNum);
    var v564 = components$$1[componentsIndex];
    var v221 = v563 + v564;
    var v565 = randNum + 1;
    var v566 = sequence$$13.length;
    var v222 = sequence$$13.substring(v565, v566);
    sequence$$13 = v221 + v222;
    i$$8 = i$$8 + 1;
    v223 = i$$8 < numMut
  }
  var v224 = outputWindow.document;
  var v225 = addReturns(sequence$$13);
  v224.write(v225);
  return true
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v230 = j$$9 < lengthOut$$1;
  for(;v230;) {
    var v567 = Math.random();
    var v568 = components$$2.length;
    var v226 = v567 * v568;
    tempNum$$1 = Math.floor(v226);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v569 = sequence$$14.length;
    var v229 = v569 == 60;
    if(v229) {
      var v227 = outputWindow.document;
      var v228 = sequence$$14 + "\n";
      v227.write(v228);
      sequence$$14 = ""
    }
    j$$9 = j$$9 + 1;
    v230 = j$$9 < lengthOut$$1
  }
  var v231 = outputWindow.document;
  var v232 = sequence$$14 + "\n";
  v231.write(v232);
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
  var v236 = dnaConformation == "circular";
  if(v236) {
    var v233 = sequence$$15.substring(0, lookAhead);
    shiftValue = v233.length;
    var v910 = sequence$$15.length;
    var v784 = v910 - lookAhead;
    var v785 = sequence$$15.length;
    var v570 = sequence$$15.substring(v784, v785);
    var v234 = v570 + sequence$$15;
    var v235 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v234 + v235;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v237 = outputWindow.document;
  v237.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  var v238 = outputWindow.document;
  var v911 = '<tr><td class="title" width="200px">' + "Site:";
  var v786 = v911 + '</td><td class="title">';
  var v571 = v786 + "Positions:";
  var v239 = v571 + "</td></tr>\n";
  v238.write(v239);
  var i$$9 = 0;
  var v572 = arrayOfItems.length;
  var v255 = i$$9 < v572;
  for(;v255;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v573 = arrayOfItems[i$$9];
    var v240 = v573.match(/\/.+\//);
    matchExp = v240 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    var v912 = arrayOfItems[i$$9];
    var v787 = v912.match(/\)\D*\d+/);
    var v574 = v787.toString();
    var v241 = v574.replace(/\)\D*/, "");
    cutDistance = parseFloat(v241);
    var v247 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v247;) {
      var v242 = matchExp.lastIndex;
      matchPosition = v242 - cutDistance;
      var v575 = matchPosition >= lowerLimit;
      if(v575) {
        v575 = matchPosition < upperLimit
      }
      var v245 = v575;
      if(v245) {
        timesFound = timesFound + 1;
        var v243 = tempString$$1 + ", ";
        var v576 = matchPosition - shiftValue;
        var v244 = v576 + 1;
        tempString$$1 = v243 + v244
      }
      var v246 = matchExp;
      var v788 = matchExp.lastIndex;
      var v913 = RegExp.lastMatch;
      var v789 = v913.length;
      var v577 = v788 - v789;
      v246.lastIndex = v577 + 1;
      v247 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    var v578 = tempString$$1.search(/\d/);
    var v248 = v578 != -1;
    if(v248) {
      tempString$$1 = tempString$$1.replace(/none,\s*/, "")
    }
    var v252 = timesFound == 0;
    if(v252) {
      backGroundClass = "none"
    }else {
      var v251 = timesFound == 1;
      if(v251) {
        backGroundClass = "one"
      }else {
        var v250 = timesFound == 2;
        if(v250) {
          backGroundClass = "two"
        }else {
          var v249 = timesFound == 3;
          if(v249) {
            backGroundClass = "three"
          }else {
            backGroundClass = "many"
          }
        }
      }
    }
    var v253 = outputWindow.document;
    var v1110 = '<tr><td class="' + backGroundClass;
    var v1088 = v1110 + '">';
    var v1132 = arrayOfItems[i$$9];
    var v1122 = v1132.match(/\([^\(]+\)/);
    var v1111 = v1122.toString();
    var v1089 = v1111.replace(/\(|\)/g, "");
    var v1050 = v1088 + v1089;
    var v1002 = v1050 + '</td><td class="';
    var v914 = v1002 + backGroundClass;
    var v790 = v914 + '">';
    var v579 = v790 + tempString$$1;
    var v254 = v579 + "</td></tr>\n";
    v253.write(v254);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v580 = arrayOfItems.length;
    v255 = i$$9 < v580
  }
  var v256 = outputWindow.document;
  v256.write("</tbody></table>\n");
  return true
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v257 = outputWindow.document;
  v257.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  var v258 = outputWindow.document;
  var v1051 = '<tr><td class="title">' + "Pattern:";
  var v1003 = v1051 + '</td><td class="title">';
  var v915 = v1003 + "Times found:";
  var v791 = v915 + '</td><td class="title">';
  var v581 = v791 + "Percentage:";
  var v259 = v581 + "</td></tr>\n";
  v258.write(v259);
  var i$$10 = 0;
  var v582 = arrayOfItems$$1.length;
  var v268 = i$$10 < v582;
  for(;v268;) {
    var tempNumber = 0;
    var v583 = arrayOfItems$$1[i$$10];
    var v260 = v583.match(/\/[^\/]+\//);
    var matchExp$$1 = v260 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    var v584 = sequence$$16.search(matchExp$$1);
    var v262 = v584 != -1;
    if(v262) {
      var v261 = sequence$$16.match(matchExp$$1);
      tempNumber = v261.length
    }
    var percentage = 0;
    var v792 = originalLength + 1;
    var v1004 = arrayOfItems$$1[i$$10];
    var v916 = v1004.match(/\d+/);
    var v793 = parseFloat(v916);
    var v585 = v792 - v793;
    var v265 = v585 > 0;
    if(v265) {
      var v263 = 100 * tempNumber;
      var v586 = originalLength + 1;
      var v917 = arrayOfItems$$1[i$$10];
      var v794 = v917.match(/\d+/);
      var v587 = parseFloat(v794);
      var v264 = v586 - v587;
      percentage = v263 / v264
    }
    var v266 = outputWindow.document;
    var v1133 = arrayOfItems$$1[i$$10];
    var v1123 = v1133.match(/\([^\(]+\)\b/);
    var v1112 = v1123.toString();
    var v1090 = v1112.replace(/\(|\)/g, "");
    var v1052 = "<tr><td>" + v1090;
    var v1005 = v1052 + "</td><td>";
    var v918 = v1005 + tempNumber;
    var v795 = v918 + "</td><td>";
    var v796 = percentage.toFixed(2);
    var v588 = v795 + v796;
    var v267 = v588 + "</td></tr>\n";
    v266.write(v267);
    i$$10 = i$$10 + 1;
    var v589 = arrayOfItems$$1.length;
    v268 = i$$10 < v589
  }
  var v269 = outputWindow.document;
  v269.write("</tbody></table>\n");
  return true
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v590 = sequence$$17.length;
  var v276 = v590 > 0;
  for(;v276;) {
    maxNum$$1 = sequence$$17.length;
    var v591 = Math.random();
    var v270 = v591 * maxNum$$1;
    randNum$$1 = Math.floor(v270);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v271 = randNum$$1 + 1;
    var v272 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v271, v272);
    sequence$$17 = tempString1 + tempString2;
    var v592 = tempSeq.length;
    var v275 = v592 == 60;
    if(v275) {
      var v273 = outputWindow.document;
      var v274 = tempSeq + "\n";
      v273.write(v274);
      tempSeq = ""
    }
    var v593 = sequence$$17.length;
    v276 = v593 > 0
  }
  var v277 = outputWindow.document;
  var v278 = tempSeq + "\n";
  v277.write(v278);
  return true
}
function rangeExtract(theDocument) {
  var newDna = "";
  var maxInput$$3 = 5E5;
  var matchFound = false;
  var ranges = new Array;
  var v594 = testScript();
  var v279 = v594 == false;
  if(v279) {
    return false
  }
  var v1091 = theDocument.forms;
  var v1053 = v1091[0];
  var v1006 = v1053.elements;
  var v919 = v1006[0];
  var v797 = checkFormElement(v919);
  var v595 = v797 == false;
  var v799 = !v595;
  if(v799) {
    var v1124 = theDocument.forms;
    var v1113 = v1124[0];
    var v1092 = v1113.elements;
    var v1054 = v1092[0];
    var v1007 = v1054.value;
    var v920 = checkSequenceLength(v1007, maxInput$$3);
    var v798 = v920 == false;
    var v922 = !v798;
    if(v922) {
      var v1114 = theDocument.forms;
      var v1093 = v1114[0];
      var v1055 = v1093.elements;
      var v1008 = v1055[1];
      var v921 = checkFormElement(v1008);
      v798 = v921 == false
    }
    v595 = v798
  }
  var v280 = v595;
  if(v280) {
    return false
  }
  var v1009 = theDocument.forms;
  var v923 = v1009[0];
  var v800 = v923.elements;
  var v596 = v800[1];
  var v281 = v596.value;
  var arrayOfRanges = v281.split(/,/);
  var arrayOfStartAndEnd;
  var i$$11 = 0;
  var v597 = arrayOfRanges.length;
  var v288 = i$$11 < v597;
  for(;v288;) {
    var v282 = arrayOfRanges[i$$11];
    arrayOfStartAndEnd = v282.split(/\.\./);
    var v598 = arrayOfStartAndEnd.length;
    var v287 = v598 == 1;
    if(v287) {
      matchFound = true;
      var v599 = arrayOfStartAndEnd[0];
      var v600 = arrayOfStartAndEnd[0];
      var v283 = new Range(v599, v600);
      ranges.push(v283)
    }else {
      var v601 = arrayOfStartAndEnd.length;
      var v286 = v601 == 2;
      if(v286) {
        matchFound = true;
        var v602 = arrayOfStartAndEnd[0];
        var v603 = arrayOfStartAndEnd[1];
        var v284 = new Range(v602, v603);
        ranges.push(v284)
      }else {
        var v604 = arrayOfRanges[i$$11];
        var v285 = "The following range entry was ignored: " + v604;
        alert(v285)
      }
    }
    i$$11 = i$$11 + 1;
    var v605 = arrayOfRanges.length;
    v288 = i$$11 < v605
  }
  var v289 = matchFound == false;
  if(v289) {
    alert("No ranges were entered.");
    return false
  }
  openWindow("Range Extractor DNA");
  openPre();
  var v1010 = theDocument.forms;
  var v924 = v1010[0];
  var v801 = v924.elements;
  var v606 = v801[0];
  var v290 = v606.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v290);
  i$$11 = 0;
  var v607 = arrayOfFasta$$1.length;
  var v297 = i$$11 < v607;
  for(;v297;) {
    var v291 = arrayOfFasta$$1[i$$11];
    newDna = getSequenceFromFasta(v291);
    var v292 = arrayOfFasta$$1[i$$11];
    title = getTitleFromFasta(v292);
    verifyDna(newDna);
    newDna = removeNonDna(newDna);
    var v293 = outputWindow.document;
    var v294 = getFastaTitleFromTitleAndSequence(title, newDna);
    v293.write(v294);
    var v1094 = theDocument.forms;
    var v1056 = v1094[0];
    var v1011 = v1056.elements;
    var v925 = v1011[5];
    var v802 = v925.options;
    var v1095 = theDocument.forms;
    var v1057 = v1095[0];
    var v1012 = v1057.elements;
    var v926 = v1012[5];
    var v803 = v926.selectedIndex;
    var v608 = v802[v803];
    var v295 = v608.value;
    var v1096 = theDocument.forms;
    var v1058 = v1096[0];
    var v1013 = v1058.elements;
    var v927 = v1013[6];
    var v804 = v927.options;
    var v1097 = theDocument.forms;
    var v1059 = v1097[0];
    var v1014 = v1059.elements;
    var v928 = v1014[6];
    var v805 = v928.selectedIndex;
    var v609 = v804[v805];
    var v296 = v609.value;
    writeSequenceRanges(newDna, ranges, v295, v296);
    i$$11 = i$$11 + 1;
    var v610 = arrayOfFasta$$1.length;
    v297 = i$$11 < v610
  }
  closePre();
  closeWindow();
  return true
}
function writeSequenceRanges(sequence$$18, ranges$$1, strand, segmentType) {
  var rangeGroup = new RangeGroup(strand, segmentType);
  var v611 = sequence$$18.length;
  var v298 = v611 / 2;
  var center_base = Math.round(v298);
  var i$$12 = 0;
  var v612 = ranges$$1.length;
  var v312 = i$$12 < v612;
  for(;v312;) {
    var v299 = ranges$$1[i$$12];
    var v929 = ranges$$1[i$$12];
    var v806 = v929.start;
    var v613 = v806.toString();
    var v1169 = v613.replace(/start|begin/gi, 1);
    v299.start = v1169;
    var v300 = ranges$$1[i$$12];
    var v930 = ranges$$1[i$$12];
    var v807 = v930.start;
    var v614 = v807.toString();
    var v615 = sequence$$18.length;
    var v1170 = v614.replace(/stop|end/gi, v615);
    v300.start = v1170;
    var v301 = ranges$$1[i$$12];
    var v931 = ranges$$1[i$$12];
    var v808 = v931.start;
    var v616 = v808.toString();
    var v617 = sequence$$18.length;
    var v1171 = v616.replace(/length/gi, v617);
    v301.start = v1171;
    var v302 = ranges$$1[i$$12];
    var v932 = ranges$$1[i$$12];
    var v809 = v932.start;
    var v618 = v809.toString();
    var v1172 = v618.replace(/middle|center|centre/gi, center_base);
    v302.start = v1172;
    var v303 = ranges$$1[i$$12];
    var v933 = ranges$$1[i$$12];
    var v810 = v933.stop;
    var v619 = v810.toString();
    var v1173 = v619.replace(/start|begin/gi, 1);
    v303.stop = v1173;
    var v304 = ranges$$1[i$$12];
    var v934 = ranges$$1[i$$12];
    var v811 = v934.stop;
    var v620 = v811.toString();
    var v621 = sequence$$18.length;
    var v1174 = v620.replace(/stop|end/gi, v621);
    v304.stop = v1174;
    var v305 = ranges$$1[i$$12];
    var v935 = ranges$$1[i$$12];
    var v812 = v935.stop;
    var v622 = v812.toString();
    var v623 = sequence$$18.length;
    var v1175 = v622.replace(/length/gi, v623);
    v305.stop = v1175;
    var v306 = ranges$$1[i$$12];
    var v936 = ranges$$1[i$$12];
    var v813 = v936.stop;
    var v624 = v813.toString();
    var v1176 = v624.replace(/middle|center|centre/gi, center_base);
    v306.stop = v1176;
    try {
      var v307 = ranges$$1[i$$12];
      var v1015 = ranges$$1[i$$12];
      var v937 = v1015.start;
      var v814 = v937.toString();
      var v625 = eval(v814);
      var v1177 = parseInt(v625);
      v307.start = v1177
    }catch(e$$5) {
      var v815 = ranges$$1[i$$12];
      var v626 = v815.start;
      var v308 = "Could not evaluate the following expression: " + v626;
      alert(v308);
      return false
    }
    try {
      var v309 = ranges$$1[i$$12];
      var v1016 = ranges$$1[i$$12];
      var v938 = v1016.stop;
      var v816 = v938.toString();
      var v627 = eval(v816);
      var v1178 = parseInt(v627);
      v309.stop = v1178
    }catch(e$$6) {
      var v817 = ranges$$1[i$$12];
      var v628 = v817.stop;
      var v310 = "Could not evaluate the following expression: " + v628;
      alert(v310);
      return false
    }
    var v311 = ranges$$1[i$$12];
    rangeGroup.addRange(v311);
    i$$12 = i$$12 + 1;
    var v629 = ranges$$1.length;
    v312 = i$$12 < v629
  }
  rangeGroup.writeRanges(sequence$$18);
  return
}
function getSequence(sequence$$19) {
  var problem = false;
  var warnings = new Array;
  var v630 = this.start;
  var v631 = this.stop;
  var v327 = v630 == v631;
  if(v327) {
    var v632 = this.start;
    var v314 = v632 < 1;
    if(v314) {
      problem = true;
      var v818 = this.start;
      var v633 = "position value of " + v818;
      var v313 = v633 + " is less than 1";
      warnings.push(v313)
    }
    var v634 = this.start;
    var v635 = sequence$$19.length;
    var v316 = v634 > v635;
    if(v316) {
      problem = true;
      var v819 = this.start;
      var v636 = "position value of " + v819;
      var v315 = v636 + " is greater than the sequence length";
      warnings.push(v315)
    }
  }else {
    var v637 = this.start;
    var v318 = v637 < 1;
    if(v318) {
      problem = true;
      var v820 = this.start;
      var v638 = "position value of " + v820;
      var v317 = v638 + " is less than 1";
      warnings.push(v317)
    }
    var v639 = this.stop;
    var v320 = v639 < 1;
    if(v320) {
      problem = true;
      var v821 = this.stop;
      var v640 = "position value of " + v821;
      var v319 = v640 + " is less than 1";
      warnings.push(v319)
    }
    var v641 = this.start;
    var v642 = sequence$$19.length;
    var v322 = v641 > v642;
    if(v322) {
      problem = true;
      var v822 = this.start;
      var v643 = "position value of " + v822;
      var v321 = v643 + " is greater than the sequence length";
      warnings.push(v321)
    }
    var v644 = this.stop;
    var v645 = sequence$$19.length;
    var v324 = v644 > v645;
    if(v324) {
      problem = true;
      var v823 = this.stop;
      var v646 = "position value of " + v823;
      var v323 = v646 + " is greater than the sequence length";
      warnings.push(v323)
    }
    var v647 = this.start;
    var v648 = this.stop;
    var v326 = v647 > v648;
    if(v326) {
      problem = true;
      var v939 = this.start;
      var v824 = "stop position is less than start position in range " + v939;
      var v649 = v824 + " to ";
      var v650 = this.stop;
      var v325 = v649 + v650;
      warnings.push(v325)
    }
  }
  if(problem) {
    var v651 = warnings.join(",\n");
    var v328 = "An entry was skipped because of the following:\n" + v651;
    alert(v328);
    return false
  }else {
    var v652 = this.start;
    var v653 = this.stop;
    var v332 = v652 == v653;
    if(v332) {
      var v654 = this.start;
      var v329 = v654 - 1;
      return sequence$$19.charAt(v329)
    }else {
      var v655 = this.start;
      var v330 = v655 - 1;
      var v331 = this.stop;
      return sequence$$19.substring(v330, v331)
    }
  }
  return
}
function getTitle() {
  var v656 = this.start;
  var v657 = this.stop;
  var v336 = v656 == v657;
  if(v336) {
    var v333 = this.start;
    return"&gt;base " + v333
  }else {
    var v825 = this.start;
    var v658 = "&gt;base " + v825;
    var v334 = v658 + " to ";
    var v335 = this.stop;
    return v334 + v335
  }
  return
}
function Range(start$$4, stop) {
  this.start = start$$4;
  this.stop = stop;
  return
}
function addRange(range$$5) {
  var v337 = this.ranges;
  v337.push(range$$5);
  return
}
function writeRanges(sequence$$20) {
  function v9(str$$16, p1$$9, offset$$21, s$$11) {
    var v659 = p1$$9.length;
    var v338 = offset$$21 + v659;
    return sequence$$20.substring(offset$$21, v338)
  }
  function v8(str$$15, p1$$8, p2$$3, offset$$20, s$$10) {
    var v660 = p1$$8.length;
    var v826 = p1$$8.length;
    var v827 = p2$$3.length;
    var v661 = v826 + v827;
    var v339 = sequence$$20.substring(v660, v661);
    return p1$$8 + v339
  }
  function v7(str$$14, p1$$7, offset$$19, s$$9) {
    var v340 = ["g", "a", "c", "t"];
    var v341 = p1$$7.length;
    return getRandomSequence(v340, v341)
  }
  function v6(str$$13, p1$$6, p2$$2, offset$$18, s$$8) {
    var v662 = ["g", "a", "c", "t"];
    var v663 = p2$$2.length;
    var v342 = getRandomSequence(v662, v663);
    return p1$$6 + v342
  }
  function v5(str$$12, p1$$5, offset$$17, s$$7) {
    return p1$$5.toLowerCase()
  }
  function v4(str$$11, p1$$4, p2$$1, offset$$16, s$$6) {
    var v343 = p2$$1.toLowerCase();
    return p1$$4 + v343
  }
  function v3(str$$10, p1$$3, offset$$15, s$$5) {
    return p1$$3.toUpperCase()
  }
  function v2(str$$9, p1$$2, p2, offset$$14, s$$4) {
    var v344 = p2.toUpperCase();
    return p1$$2 + v344
  }
  var sequenceArray$$1 = new Array;
  var v664 = this.type;
  var v353 = v664 == "new_sequence";
  if(v353) {
    var i$$13 = 0;
    var v828 = this.ranges;
    var v665 = v828.length;
    var v347 = i$$13 < v665;
    for(;v347;) {
      var v940 = this.ranges;
      var v829 = v940[i$$13];
      var v666 = v829.getSequence(sequence$$20);
      var v346 = v666 != "";
      if(v346) {
        var v830 = this.ranges;
        var v667 = v830[i$$13];
        var v345 = v667.getSequence(sequence$$20);
        sequenceArray$$1.push(v345)
      }
      i$$13 = i$$13 + 1;
      var v831 = this.ranges;
      var v668 = v831.length;
      v347 = i$$13 < v668
    }
    var v669 = this.strand;
    var v352 = v669 == "reverse";
    if(v352) {
      var v348 = outputWindow.document;
      var v1017 = sequenceArray$$1.join("");
      var v941 = complement(v1017);
      var v832 = reverse(v941);
      var v670 = addReturns(v832);
      var v349 = v670 + "\n\n";
      v348.write(v349)
    }else {
      var v350 = outputWindow.document;
      var v833 = sequenceArray$$1.join("");
      var v671 = addReturns(v833);
      var v351 = v671 + "\n\n";
      v350.write(v351)
    }
    return true
  }
  var v672 = this.type;
  var v363 = v672 == "separate";
  if(v363) {
    i$$13 = 0;
    var v834 = this.ranges;
    var v673 = v834.length;
    var v362 = i$$13 < v673;
    for(;v362;) {
      var v942 = this.ranges;
      var v835 = v942[i$$13];
      var v674 = v835.getSequence(sequence$$20);
      var v361 = v674 != "";
      if(v361) {
        var v354 = outputWindow.document;
        var v943 = this.ranges;
        var v836 = v943[i$$13];
        var v675 = v836.getTitle();
        var v355 = v675 + "\n";
        v354.write(v355);
        var v676 = this.strand;
        var v360 = v676 == "reverse";
        if(v360) {
          var v356 = outputWindow.document;
          var v1098 = this.ranges;
          var v1060 = v1098[i$$13];
          var v1018 = v1060.getSequence(sequence$$20);
          var v944 = addReturns(v1018);
          var v837 = complement(v944);
          var v677 = reverse(v837);
          var v357 = v677 + "\n\n";
          v356.write(v357)
        }else {
          var v358 = outputWindow.document;
          var v1019 = this.ranges;
          var v945 = v1019[i$$13];
          var v838 = v945.getSequence(sequence$$20);
          var v678 = addReturns(v838);
          var v359 = v678 + "\n\n";
          v358.write(v359)
        }
      }
      i$$13 = i$$13 + 1;
      var v839 = this.ranges;
      var v679 = v839.length;
      v362 = i$$13 < v679
    }
    return true
  }
  var v680 = this.type;
  var v374 = v680 == "uppercased";
  if(v374) {
    var re$$3;
    sequence$$20 = sequence$$20.toLowerCase();
    i$$13 = 0;
    var v840 = this.ranges;
    var v681 = v840.length;
    var v368 = i$$13 < v681;
    for(;v368;) {
      var v946 = this.ranges;
      var v841 = v946[i$$13];
      var v682 = v841.getSequence(sequence$$20);
      var v367 = v682 != "";
      if(v367) {
        var v947 = this.ranges;
        var v842 = v947[i$$13];
        var v683 = v842.start;
        var v366 = v683 > 1;
        if(v366) {
          var v1099 = this.ranges;
          var v1061 = v1099[i$$13];
          var v1020 = v1061.start;
          var v948 = v1020 - 1;
          var v843 = "(.{" + v948;
          var v684 = v843 + "})\\B(.{";
          var v1062 = this.ranges;
          var v1021 = v1062[i$$13];
          var v949 = v1021.stop;
          var v1063 = this.ranges;
          var v1022 = v1063[i$$13];
          var v950 = v1022.start;
          var v844 = v949 - v950;
          var v685 = v844 + 1;
          var v364 = v684 + v685;
          re$$3 = v364 + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = sequence$$20.replace(re$$3, v2)
        }else {
          var v1064 = this.ranges;
          var v1023 = v1064[i$$13];
          var v951 = v1023.stop;
          var v1065 = this.ranges;
          var v1024 = v1065[i$$13];
          var v952 = v1024.start;
          var v845 = v951 - v952;
          var v686 = v845 + 1;
          var v365 = "(.{" + v686;
          re$$3 = v365 + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = sequence$$20.replace(re$$3, v3)
        }
      }
      i$$13 = i$$13 + 1;
      var v846 = this.ranges;
      var v687 = v846.length;
      v368 = i$$13 < v687
    }
    var v688 = this.strand;
    var v373 = v688 == "reverse";
    if(v373) {
      var v369 = outputWindow.document;
      var v953 = addReturns(sequence$$20);
      var v847 = complement(v953);
      var v689 = reverse(v847);
      var v370 = v689 + "\n\n";
      v369.write(v370)
    }else {
      var v371 = outputWindow.document;
      var v690 = addReturns(sequence$$20);
      var v372 = v690 + "\n\n";
      v371.write(v372)
    }
    return true
  }
  var v691 = this.type;
  var v385 = v691 == "lowercased";
  if(v385) {
    sequence$$20 = sequence$$20.toUpperCase();
    i$$13 = 0;
    var v848 = this.ranges;
    var v692 = v848.length;
    var v379 = i$$13 < v692;
    for(;v379;) {
      var v954 = this.ranges;
      var v849 = v954[i$$13];
      var v693 = v849.getSequence(sequence$$20);
      var v378 = v693 != "";
      if(v378) {
        var v955 = this.ranges;
        var v850 = v955[i$$13];
        var v694 = v850.start;
        var v377 = v694 > 1;
        if(v377) {
          var v1100 = this.ranges;
          var v1066 = v1100[i$$13];
          var v1025 = v1066.start;
          var v956 = v1025 - 1;
          var v851 = "(.{" + v956;
          var v695 = v851 + "})\\B(.{";
          var v1067 = this.ranges;
          var v1026 = v1067[i$$13];
          var v957 = v1026.stop;
          var v1068 = this.ranges;
          var v1027 = v1068[i$$13];
          var v958 = v1027.start;
          var v852 = v957 - v958;
          var v696 = v852 + 1;
          var v375 = v695 + v696;
          re$$3 = v375 + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = sequence$$20.replace(re$$3, v4)
        }else {
          var v1069 = this.ranges;
          var v1028 = v1069[i$$13];
          var v959 = v1028.stop;
          var v1070 = this.ranges;
          var v1029 = v1070[i$$13];
          var v960 = v1029.start;
          var v853 = v959 - v960;
          var v697 = v853 + 1;
          var v376 = "(.{" + v697;
          re$$3 = v376 + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = sequence$$20.replace(re$$3, v5)
        }
      }
      i$$13 = i$$13 + 1;
      var v854 = this.ranges;
      var v698 = v854.length;
      v379 = i$$13 < v698
    }
    var v699 = this.strand;
    var v384 = v699 == "reverse";
    if(v384) {
      var v380 = outputWindow.document;
      var v961 = addReturns(sequence$$20);
      var v855 = complement(v961);
      var v700 = reverse(v855);
      var v381 = v700 + "\n\n";
      v380.write(v381)
    }else {
      var v382 = outputWindow.document;
      var v701 = addReturns(sequence$$20);
      var v383 = v701 + "\n\n";
      v382.write(v383)
    }
    return true
  }
  var v702 = this.type;
  var v396 = v702 == "randomized";
  if(v396) {
    i$$13 = 0;
    var v856 = this.ranges;
    var v703 = v856.length;
    var v390 = i$$13 < v703;
    for(;v390;) {
      var v962 = this.ranges;
      var v857 = v962[i$$13];
      var v704 = v857.getSequence(sequence$$20);
      var v389 = v704 != "";
      if(v389) {
        var v963 = this.ranges;
        var v858 = v963[i$$13];
        var v705 = v858.start;
        var v388 = v705 > 1;
        if(v388) {
          var v1101 = this.ranges;
          var v1071 = v1101[i$$13];
          var v1030 = v1071.start;
          var v964 = v1030 - 1;
          var v859 = "(.{" + v964;
          var v706 = v859 + "})\\B(.{";
          var v1072 = this.ranges;
          var v1031 = v1072[i$$13];
          var v965 = v1031.stop;
          var v1073 = this.ranges;
          var v1032 = v1073[i$$13];
          var v966 = v1032.start;
          var v860 = v965 - v966;
          var v707 = v860 + 1;
          var v386 = v706 + v707;
          re$$3 = v386 + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = sequence$$20.replace(re$$3, v6)
        }else {
          var v1074 = this.ranges;
          var v1033 = v1074[i$$13];
          var v967 = v1033.stop;
          var v1075 = this.ranges;
          var v1034 = v1075[i$$13];
          var v968 = v1034.start;
          var v861 = v967 - v968;
          var v708 = v861 + 1;
          var v387 = "(.{" + v708;
          re$$3 = v387 + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = sequence$$20.replace(re$$3, v7)
        }
      }
      i$$13 = i$$13 + 1;
      var v862 = this.ranges;
      var v709 = v862.length;
      v390 = i$$13 < v709
    }
    var v710 = this.strand;
    var v395 = v710 == "reverse";
    if(v395) {
      var v391 = outputWindow.document;
      var v969 = addReturns(sequence$$20);
      var v863 = complement(v969);
      var v711 = reverse(v863);
      var v392 = v711 + "\n\n";
      v391.write(v392)
    }else {
      var v393 = outputWindow.document;
      var v712 = addReturns(sequence$$20);
      var v394 = v712 + "\n\n";
      v393.write(v394)
    }
    return true
  }
  var v713 = this.type;
  var v409 = v713 == "preserved";
  if(v409) {
    var v397 = ["g", "a", "c", "t"];
    var v398 = sequence$$20.length;
    var randomSequence = getRandomSequence(v397, v398);
    i$$13 = 0;
    var v864 = this.ranges;
    var v714 = v864.length;
    var v403 = i$$13 < v714;
    for(;v403;) {
      var v970 = this.ranges;
      var v865 = v970[i$$13];
      var v715 = v865.getSequence(sequence$$20);
      var v402 = v715 != "";
      if(v402) {
        var v971 = this.ranges;
        var v866 = v971[i$$13];
        var v716 = v866.start;
        var v401 = v716 > 1;
        if(v401) {
          var v1102 = this.ranges;
          var v1076 = v1102[i$$13];
          var v1035 = v1076.start;
          var v972 = v1035 - 1;
          var v867 = "(.{" + v972;
          var v717 = v867 + "})\\B(.{";
          var v1077 = this.ranges;
          var v1036 = v1077[i$$13];
          var v973 = v1036.stop;
          var v1078 = this.ranges;
          var v1037 = v1078[i$$13];
          var v974 = v1037.start;
          var v868 = v973 - v974;
          var v718 = v868 + 1;
          var v399 = v717 + v718;
          re$$3 = v399 + "})";
          re$$3 = new RegExp(re$$3);
          randomSequence = randomSequence.replace(re$$3, v8)
        }else {
          var v1079 = this.ranges;
          var v1038 = v1079[i$$13];
          var v975 = v1038.stop;
          var v1080 = this.ranges;
          var v1039 = v1080[i$$13];
          var v976 = v1039.start;
          var v869 = v975 - v976;
          var v719 = v869 + 1;
          var v400 = "(.{" + v719;
          re$$3 = v400 + "})";
          re$$3 = new RegExp(re$$3);
          randomSequence = randomSequence.replace(re$$3, v9)
        }
      }
      i$$13 = i$$13 + 1;
      var v870 = this.ranges;
      var v720 = v870.length;
      v403 = i$$13 < v720
    }
    var v721 = this.strand;
    var v408 = v721 == "reverse";
    if(v408) {
      var v404 = outputWindow.document;
      var v977 = addReturns(randomSequence);
      var v871 = complement(v977);
      var v722 = reverse(v871);
      var v405 = v722 + "\n\n";
      v404.write(v405)
    }else {
      var v406 = outputWindow.document;
      var v723 = addReturns(randomSequence);
      var v407 = v723 + "\n\n";
      v406.write(v407)
    }
    return true
  }
  return
}
function RangeGroup(strand$$1, type$$25) {
  this.strand = strand$$1;
  this.type = type$$25;
  var v1179 = new Array;
  this.ranges = v1179;
  return
}
new Range(0, 0);
var v410 = Range.prototype;
v410.getSequence = getSequence;
var v411 = Range.prototype;
v411.getTitle = getTitle;
new RangeGroup("", "");
var v412 = RangeGroup.prototype;
v412.addRange = addRange;
var v413 = RangeGroup.prototype;
v413.writeRanges = writeRanges;
document.onload = v10;
var v414 = document.getElementById("submitbtn");
v414.onclick = v11;
var v415 = document.getElementById("clearbtn");
v415.onclick = v12;

}

