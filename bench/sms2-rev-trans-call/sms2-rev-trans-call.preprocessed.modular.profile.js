
JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
function v7() {
  var v851 = document.forms;
  var v699 = v851[0];
  var v424 = v699.elements;
  var v8 = v424[0];
  v8.value = " ";
  var v852 = document.forms;
  var v700 = v852[0];
  var v425 = v700.elements;
  var v9 = v425[4];
  v9.value = " ";
  return
}
function v6() {
  try {
    revTrans(document)
  }catch(e$$6) {
    var v10 = "The following error was encountered: " + e$$6;
    alert(v10)
  }
  return
}
function v5() {
  var v426 = document.main_form;
  var v11 = v426.main_submit;
  v11.focus();
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
  var v12 = arrayOfSequences[0];
  var lengthOfAlign = v12.length;
  var v427 = arrayOfSequences.length;
  var v13 = v427 < 2;
  if(v13) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v428 = arrayOfTitles.length;
  var v15 = i$$1 < v428;
  for(;v15;) {
    var v853 = arrayOfTitles[i$$1];
    var v701 = v853.search(/\S/);
    var v429 = v701 == -1;
    var v703 = !v429;
    if(v703) {
      var v947 = arrayOfSequences[i$$1];
      var v854 = v947.search(/\S/);
      var v702 = v854 == -1;
      var v856 = !v702;
      if(v856) {
        var v948 = arrayOfSequences[i$$1];
        var v855 = v948.length;
        v702 = v855 != lengthOfAlign
      }
      v429 = v702
    }
    var v14 = v429;
    if(v14) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v430 = arrayOfTitles.length;
    v15 = i$$1 < v430
  }
  return true
}
function checkCodonTable(codonTable) {
  var v704 = codonTable.search(/AmAcid/);
  var v431 = v704 == -1;
  var v706 = !v431;
  if(v706) {
    var v857 = codonTable.search(/Codon/);
    var v705 = v857 == -1;
    var v859 = !v705;
    if(v859) {
      var v949 = codonTable.search(/Number/);
      var v858 = v949 == -1;
      var v951 = !v858;
      if(v951) {
        var v1003 = codonTable.search(/\/1000/);
        var v950 = v1003 == -1;
        var v1005 = !v950;
        if(v1005) {
          var v1004 = codonTable.search(/Fraction\s*\.\./);
          v950 = v1004 == -1
        }
        v858 = v950
      }
      v705 = v858
    }
    v431 = v705
  }
  var v16 = v431;
  if(v16) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v707 = formElement.value;
  var v432 = v707.search(/\S/);
  var v17 = v432 == -1;
  if(v17) {
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
  var v433 = arrayOfPatterns.length;
  var v20 = z$$2 < v433;
  for(;v20;) {
    var v708 = arrayOfPatterns[z$$2];
    var v434 = v708.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v18 = v434 == -1;
    if(v18) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    var v709 = arrayOfPatterns[z$$2];
    var v435 = moreExpressionCheck(v709);
    var v19 = v435 == false;
    if(v19) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v436 = arrayOfPatterns.length;
    v20 = z$$2 < v436
  }
  var v21 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v21);
  var v22 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v22);
  var j = 0;
  var v437 = arrayOfPatterns.length;
  var v29 = j < v437;
  for(;v29;) {
    var v23 = geneticCodeMatchExp;
    var v24 = j;
    var v860 = arrayOfPatterns[j];
    var v710 = v860.match(/\/.+\//);
    var v438 = v710 + "gi";
    var v1121 = eval(v438);
    v23[v24] = v1121;
    var v25 = geneticCodeMatchResult;
    var v26 = j;
    var v711 = arrayOfPatterns[j];
    var v439 = v711.match(/=[a-zA-Z\*]/);
    var v1122 = v439.toString();
    v25[v26] = v1122;
    var v27 = geneticCodeMatchResult;
    var v28 = j;
    var v440 = geneticCodeMatchResult[j];
    var v1123 = v440.replace(/=/g, "");
    v27[v28] = v1123;
    j = j + 1;
    var v441 = arrayOfPatterns.length;
    v29 = j < v441
  }
  var i$$2 = 0;
  var v712 = testSequence.length;
  var v442 = v712 - 3;
  var v36 = i$$2 <= v442;
  for(;v36;) {
    var v30 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v30);
    j = 0;
    var v443 = geneticCodeMatchExp.length;
    var v34 = j < v443;
    for(;v34;) {
      var v713 = geneticCodeMatchExp[j];
      var v444 = codon.search(v713);
      var v33 = v444 != -1;
      if(v33) {
        var v32 = oneMatch == true;
        if(v32) {
          var v445 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v31 = v445 + ".";
          alert(v31);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v446 = geneticCodeMatchExp.length;
      v34 = j < v446
    }
    var v35 = oneMatch == false;
    if(v35) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v714 = testSequence.length;
    var v447 = v714 - 3;
    v36 = i$$2 <= v447
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v448 = arrayOfPatterns$$1.length;
  var v38 = z$$3 < v448;
  for(;v38;) {
    var v715 = arrayOfPatterns$$1[z$$3];
    var v449 = v715.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v37 = v449 != -1;
    if(v37) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v450 = arrayOfPatterns$$1.length;
    v38 = z$$3 < v450
  }
  var i$$3 = 0;
  var v451 = arrayOfPatterns$$1.length;
  var v42 = i$$3 < v451;
  for(;v42;) {
    var v716 = arrayOfPatterns$$1[i$$3];
    var v452 = "[" + v716;
    var v39 = v452 + "]";
    var re = new RegExp(v39, "gi");
    var j$$1 = i$$3 + 1;
    var v453 = arrayOfPatterns$$1.length;
    var v41 = j$$1 < v453;
    for(;v41;) {
      var v717 = arrayOfPatterns$$1[j$$1];
      var v454 = v717.search(re);
      var v40 = v454 != -1;
      if(v40) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v455 = arrayOfPatterns$$1.length;
      v41 = j$$1 < v455
    }
    i$$3 = i$$3 + 1;
    var v456 = arrayOfPatterns$$1.length;
    v42 = i$$3 < v456
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v457 = arrayOfPatterns$$2.length;
  var v45 = z$$4 < v457;
  for(;v45;) {
    var v718 = arrayOfPatterns$$2[z$$4];
    var v458 = v718.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v43 = v458 == -1;
    if(v43) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    var v719 = arrayOfPatterns$$2[z$$4];
    var v459 = moreExpressionCheck(v719);
    var v44 = v459 == false;
    if(v44) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v460 = arrayOfPatterns$$2.length;
    v45 = z$$4 < v460
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v861 = getSequenceFromFasta(text$$7);
  var v720 = v861.replace(/[^A-Za-z]/g, "");
  var v461 = v720.length;
  var v47 = v461 > maxInput;
  if(v47) {
    var v462 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v46 = v462 + " characters.";
    alert(v46);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v463 = text$$8.length;
  var v49 = v463 > maxInput$$1;
  if(v49) {
    var v464 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v48 = v464 + " characters.";
    alert(v48);
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
  var v50 = outputWindow.document;
  v50.write("</form>");
  return true
}
function closePre() {
  var v51 = outputWindow.document;
  v51.write("</div>");
  var v52 = outputWindow.document;
  v52.write("</pre>\n");
  return
}
function closeTextArea() {
  var v53 = outputWindow.document;
  v53.write("</textarea>");
  return true
}
function closeWindow() {
  var v54 = outputWindow.document;
  v54.write("</body>\n</html>\n");
  outputWindow.status = "Done.";
  var v55 = outputWindow.document;
  v55.close();
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
  var v465 = alignArray.length;
  var v56 = v465 < 3;
  if(v56) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v466 = alignArray.length;
  var v58 = i$$4 < v466;
  for(;v58;) {
    var v721 = alignArray[i$$4];
    var v467 = v721.search(/[^\s]+\s/);
    var v57 = v467 == -1;
    if(v57) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v468 = alignArray.length;
    v58 = i$$4 < v468
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
  var v469 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v61 = v469 != -1;
  if(v61) {
    var v60 = matchArray = re$$1.exec(sequenceData);
    for(;v60;) {
      var v59 = matchArray[0];
      arrayOfFasta.push(v59);
      v60 = matchArray = re$$1.exec(sequenceData)
    }
  }else {
    arrayOfFasta[0] = sequenceData
  }
  return arrayOfFasta
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v470 = sequence$$2.length;
  var v62 = "&gt;results for " + v470;
  var stringToReturn = v62 + " residue sequence ";
  var v471 = fastaSequenceTitle.search(/[^\s]/);
  var v64 = v471 != -1;
  if(v64) {
    var v472 = stringToReturn + '"';
    var v63 = v472 + fastaSequenceTitle;
    stringToReturn = v63 + '"'
  }
  var v473 = stringToReturn + ' starting "';
  var v474 = sequence$$2.substring(0, 10);
  var v65 = v473 + v474;
  stringToReturn = v65 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v475 = sequenceOne.length;
  var v66 = "Search results for " + v475;
  var stringToReturn$$1 = v66 + " residue sequence ";
  var v476 = fastaSequenceTitleOne.search(/[^\s]/);
  var v68 = v476 != -1;
  if(v68) {
    var v477 = stringToReturn$$1 + '"';
    var v67 = v477 + fastaSequenceTitleOne;
    stringToReturn$$1 = v67 + '"'
  }
  var v478 = stringToReturn$$1 + ' starting "';
  var v479 = sequenceOne.substring(0, 10);
  var v69 = v478 + v479;
  stringToReturn$$1 = v69 + '"\n';
  var v480 = stringToReturn$$1 + "and ";
  var v481 = sequenceTwo.length;
  var v70 = v480 + v481;
  stringToReturn$$1 = v70 + " residue sequence ";
  var v482 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v72 = v482 != -1;
  if(v72) {
    var v483 = stringToReturn$$1 + '"';
    var v71 = v483 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v71 + '"'
  }
  var v484 = stringToReturn$$1 + ' starting "';
  var v485 = sequenceTwo.substring(0, 10);
  var v73 = v484 + v485;
  stringToReturn$$1 = v73 + '"';
  var v74 = '<div class="info">' + stringToReturn$$1;
  return v74 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v75 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v75);
  var j$$2 = 0;
  var v486 = arrayOfPatterns$$3.length;
  var v78 = j$$2 < v486;
  for(;v78;) {
    var v76 = geneticCodeMatchExp$$1;
    var v77 = j$$2;
    var v862 = arrayOfPatterns$$3[j$$2];
    var v722 = v862.match(/\/.+\//);
    var v487 = v722 + "gi";
    var v1124 = eval(v487);
    v76[v77] = v1124;
    j$$2 = j$$2 + 1;
    var v488 = arrayOfPatterns$$3.length;
    v78 = j$$2 < v488
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v79 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v79);
  var j$$3 = 0;
  var v489 = arrayOfPatterns$$4.length;
  var v84 = j$$3 < v489;
  for(;v84;) {
    var v80 = geneticCodeMatchResult$$1;
    var v81 = j$$3;
    var v723 = arrayOfPatterns$$4[j$$3];
    var v490 = v723.match(/=[a-zA-Z\*]/);
    var v1125 = v490.toString();
    v80[v81] = v1125;
    var v82 = geneticCodeMatchResult$$1;
    var v83 = j$$3;
    var v491 = geneticCodeMatchResult$$1[j$$3];
    var v1126 = v491.replace(/=/g, "");
    v82[v83] = v1126;
    j$$3 = j$$3 + 1;
    var v492 = arrayOfPatterns$$4.length;
    v84 = j$$3 < v492
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v493 = sequence$$3.length;
  var v85 = "Results for " + v493;
  var stringToReturn$$2 = v85 + " residue sequence ";
  var v494 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v87 = v494 != -1;
  if(v87) {
    var v495 = stringToReturn$$2 + '"';
    var v86 = v495 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v86 + '"'
  }
  var v496 = stringToReturn$$2 + ' starting "';
  var v497 = sequence$$3.substring(0, 10);
  var v88 = v496 + v497;
  stringToReturn$$2 = v88 + '"';
  var v89 = '<div class="info">' + stringToReturn$$2;
  return v89 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v724 = "Results for " + topology;
  var v498 = v724 + " ";
  var v499 = sequence$$4.length;
  var v90 = v498 + v499;
  var stringToReturn$$3 = v90 + " residue sequence ";
  var v500 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v92 = v500 != -1;
  if(v92) {
    var v501 = stringToReturn$$3 + '"';
    var v91 = v501 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v91 + '"'
  }
  var v502 = stringToReturn$$3 + ' starting "';
  var v503 = sequence$$4.substring(0, 10);
  var v93 = v502 + v503;
  stringToReturn$$3 = v93 + '"';
  var v94 = '<div class="info">' + stringToReturn$$3;
  return v94 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v504 = sequenceOne$$1.length;
  var v95 = "Alignment results for " + v504;
  var stringToReturn$$4 = v95 + " residue sequence ";
  var v505 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v97 = v505 != -1;
  if(v97) {
    var v506 = stringToReturn$$4 + '"';
    var v96 = v506 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v96 + '"'
  }
  var v507 = stringToReturn$$4 + ' starting "';
  var v508 = sequenceOne$$1.substring(0, 10);
  var v98 = v507 + v508;
  stringToReturn$$4 = v98 + '"\n';
  var v509 = stringToReturn$$4 + "and ";
  var v510 = sequenceTwo$$1.length;
  var v99 = v509 + v510;
  stringToReturn$$4 = v99 + " residue sequence ";
  var v511 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v101 = v511 != -1;
  if(v101) {
    var v512 = stringToReturn$$4 + '"';
    var v100 = v512 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v100 + '"'
  }
  var v513 = stringToReturn$$4 + ' starting "';
  var v514 = sequenceTwo$$1.substring(0, 10);
  var v102 = v513 + v514;
  stringToReturn$$4 = v102 + '"';
  var v103 = '<div class="info">' + stringToReturn$$4;
  return v103 + "</div>\n"
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v105 = j$$4 < lengthOut;
  for(;v105;) {
    var v515 = Math.random();
    var v516 = components.length;
    var v104 = v515 * v516;
    tempNum = Math.floor(v104);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4 = j$$4 + 1;
    v105 = j$$4 < lengthOut
  }
  return sequenceArray.join("")
}
function getSequenceFromFasta(sequenceRecord) {
  var v517 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v106 = v517 != -1;
  if(v106) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "")
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v518 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v108 = v518 != -1;
  if(v108) {
    var v107 = sequenceRecord$$1.match(/\>[^\f\n\r]+[\f\n\r]/, "");
    fastaTitle = v107.toString();
    fastaTitle = fastaTitle.replace(/\>|[\f\n\r]/g, "");
    fastaTitle = fastaTitle.replace(/\s{2,}/g, " ");
    fastaTitle = fastaTitle.replace(/[\<\>]/gi, "")
  }
  return fastaTitle
}
function moreExpressionCheck(expressionToCheck) {
  var v725 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v519 = v725 != -1;
  var v727 = !v519;
  if(v727) {
    var v863 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    var v726 = v863 != -1;
    var v865 = !v726;
    if(v865) {
      var v952 = expressionToCheck.search(/\[\]/);
      var v864 = v952 != -1;
      var v954 = !v864;
      if(v954) {
        var v1006 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
        var v953 = v1006 != -1;
        var v1008 = !v953;
        if(v1008) {
          var v1023 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
          var v1007 = v1023 != -1;
          var v1025 = !v1007;
          if(v1025) {
            var v1039 = expressionToCheck.search(/\|\|/);
            var v1024 = v1039 != -1;
            var v1041 = !v1024;
            if(v1041) {
              var v1054 = expressionToCheck.search(/\/\|/);
              var v1040 = v1054 != -1;
              var v1056 = !v1040;
              if(v1056) {
                var v1068 = expressionToCheck.search(/\|\//);
                var v1055 = v1068 != -1;
                var v1070 = !v1055;
                if(v1070) {
                  var v1079 = expressionToCheck.search(/\[.\]/);
                  var v1069 = v1079 != -1;
                  var v1081 = !v1069;
                  if(v1081) {
                    var v1087 = expressionToCheck.search(/\</);
                    var v1080 = v1087 != -1;
                    var v1089 = !v1080;
                    if(v1089) {
                      var v1088 = expressionToCheck.search(/\>/);
                      v1080 = v1088 != -1
                    }
                    v1069 = v1080
                  }
                  v1055 = v1069
                }
                v1040 = v1055
              }
              v1024 = v1040
            }
            v1007 = v1024
          }
          v953 = v1007
        }
        v864 = v953
      }
      v726 = v864
    }
    v519 = v726
  }
  var v109 = v519;
  if(v109) {
    return false
  }
  return true
}
function openForm() {
  var v110 = outputWindow.document;
  v110.write('<form action="">\n');
  return true
}
function openPre() {
  var v111 = outputWindow.document;
  v111.write("<pre>");
  var v112 = outputWindow.document;
  v112.write('<div class="pre">');
  return
}
function openTextArea() {
  var v113 = outputWindow.document;
  v113.write('<br /><textarea rows="6" cols="61">\n');
  return true
}
function openWindow(title$$6) {
  _openWindow(title$$6, true);
  return
}
function _openWindow(title$$7, isColor) {
  outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  outputWindow.focus();
  var v114 = outputWindow.document;
  var v866 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v728 = v866 + "<head>\n";
  var v520 = v728 + "<title>Sequence Manipulation Suite</title>\n";
  var v115 = v520 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v114.write(v115);
  if(isColor) {
    var v116 = outputWindow.document;
    var v1106 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1100 = v1106 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1095 = v1100 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1090 = v1095 + "div.info {font-weight: bold}\n";
    var v1082 = v1090 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1071 = v1082 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v1057 = v1071 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v1042 = v1057 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1026 = v1042 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v1009 = v1026 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v955 = v1009 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v867 = v955 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v729 = v867 + "td.many {color: #000000}\n";
    var v521 = v729 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v117 = v521 + "</style>\n";
    v116.write(v117)
  }else {
    var v118 = outputWindow.document;
    var v1111 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1107 = v1111 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1101 = v1107 + "div.title {display: none}\n";
    var v1096 = v1101 + "div.info {font-weight: bold}\n";
    var v1091 = v1096 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1083 = v1091 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1072 = v1083 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v1058 = v1072 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1043 = v1058 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1027 = v1043 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1010 = v1027 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v956 = v1010 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v868 = v956 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v730 = v868 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v522 = v730 + "img {display: none}\n";
    var v119 = v522 + "</style>\n";
    v118.write(v119)
  }
  var v120 = outputWindow.document;
  var v869 = "</head>\n" + '<body class="main">\n';
  var v731 = v869 + '<div class="title">';
  var v523 = v731 + title$$7;
  var v121 = v523 + " results</div>\n";
  v120.write(v121);
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
  var v122 = outputWindow.document;
  var v870 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v732 = v870 + "<head>\n";
  var v524 = v732 + "<title>Sequence Manipulation Suite</title>\n";
  var v123 = v524 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v122.write(v123);
  if(isBackground) {
    var v124 = outputWindow.document;
    var v1108 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1102 = v1108 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1097 = v1102 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1092 = v1097 + "div.info {font-weight: bold}\n";
    var v1084 = v1092 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v1073 = v1084 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v1059 = v1073 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v1044 = v1059 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v1028 = v1044 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v1011 = v1028 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v957 = v1011 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v871 = v957 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v733 = v871 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v525 = v733 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v125 = v525 + "</style>\n";
    v124.write(v125)
  }else {
    var v126 = outputWindow.document;
    var v1115 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1112 = v1115 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1109 = v1112 + "div.title {display: none}\n";
    var v1103 = v1109 + "div.info {font-weight: bold}\n";
    var v1098 = v1103 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1093 = v1098 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v1085 = v1093 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v1074 = v1085 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v1060 = v1074 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v1045 = v1060 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v1029 = v1045 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v1012 = v1029 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v958 = v1012 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v872 = v958 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v734 = v872 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v526 = v734 + "img {display: none}\n";
    var v127 = v526 + "</style>\n";
    v126.write(v127)
  }
  var v128 = outputWindow.document;
  var v873 = "</head>\n" + '<body class="main">\n';
  var v735 = v873 + '<div class="title">';
  var v527 = v735 + title$$9;
  var v129 = v527 + " results</div>\n";
  v128.write(v129);
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
  var v528 = dnaSequence$$1.search(/./);
  var v130 = v528 != -1;
  if(v130) {
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
  var v131 = j$$5 < lengthOfColumn;
  for(;v131;) {
    tempString = tempString + " ";
    j$$5 = j$$5 + 1;
    v131 = j$$5 < lengthOfColumn
  }
  var v132 = tempString + theNumber;
  theNumber = v132 + " ";
  var v133 = sequenceToAppend + theNumber;
  sequenceToAppend = v133 + tabIn;
  return sequenceToAppend
}
function testScript() {
  function v1(str$$8, p1$$1, offset$$13, s$$3) {
    return p1$$1 + "X"
  }
  var testArray = new Array;
  var testString = "1234567890";
  testArray.push(testString);
  var v529 = testArray[0];
  var v134 = v529 != testString;
  if(v134) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v530 = testString.search(re$$2);
  var v135 = v530 == -1;
  if(v135) {
    alert("Regular expression 'm' flag not supported. See browser compatibility page.");
    return false
  }
  var caughtException = false;
  try {
    re$$2 = eval("Exception handling not supported. Check browser compatibility page.")
  }catch(e$$4) {
    caughtException = true
  }
  var v136 = !caughtException;
  if(v136) {
    alert("Exception handling not supported. See browser compatibility page.")
  }
  testString = "123";
  testString = testString.replace(/(\d)/g, v1);
  var v137 = testString != "1X2X3X";
  if(v137) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false
  }
  var testNum = 2489.8237;
  var v531 = testNum.toFixed(3);
  var v138 = v531 != 2489.824;
  if(v138) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v532 = testNum.toPrecision(5);
  var v139 = v532 != 2489.8;
  if(v139) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v533 = theNumber$$1.search(/\d/);
  var v140 = v533 == -1;
  if(v140) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v736 = emblFile.search(/ID/);
  var v534 = v736 == -1;
  var v738 = !v534;
  if(v738) {
    var v874 = emblFile.search(/AC/);
    var v737 = v874 == -1;
    var v876 = !v737;
    if(v876) {
      var v959 = emblFile.search(/DE/);
      var v875 = v959 == -1;
      var v961 = !v875;
      if(v961) {
        var v960 = emblFile.search(/SQ/);
        v875 = v960 == -1
      }
      v737 = v875
    }
    v534 = v737
  }
  var v141 = v534;
  if(v141) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v535 = theNumber$$2.search(/\d/);
  var v142 = v535 == -1;
  if(v142) {
    alert("Please enter a number.");
    return false
  }
  var v144 = theNumber$$2 > maxInput$$2;
  if(v144) {
    var v536 = "Please enter a number less than or equal to " + maxInput$$2;
    var v143 = v536 + ".";
    alert(v143);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v537 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v145 = v537 != -1;
  if(v145) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v538 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v146 = v538 != -1;
  if(v146) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v739 = genBankFile.search(/LOCUS/);
  var v539 = v739 == -1;
  var v741 = !v539;
  if(v741) {
    var v877 = genBankFile.search(/DEFINITION/);
    var v740 = v877 == -1;
    var v879 = !v740;
    if(v879) {
      var v962 = genBankFile.search(/ACCESSION/);
      var v878 = v962 == -1;
      var v964 = !v878;
      if(v964) {
        var v963 = genBankFile.search(/ORIGIN/);
        v878 = v963 == -1
      }
      v740 = v878
    }
    v539 = v740
  }
  var v147 = v539;
  if(v147) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v742 = genBankFile$$1.search(/LOCUS/);
  var v540 = v742 == -1;
  var v744 = !v540;
  if(v744) {
    var v880 = genBankFile$$1.search(/DEFINITION/);
    var v743 = v880 == -1;
    var v882 = !v743;
    if(v882) {
      var v965 = genBankFile$$1.search(/ACCESSION/);
      var v881 = v965 == -1;
      var v967 = !v881;
      if(v967) {
        var v966 = genBankFile$$1.search(/ORIGIN/);
        v881 = v966 == -1
      }
      v743 = v881
    }
    v540 = v743
  }
  var v148 = v540;
  if(v148) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v541 = genBankFile$$1.search(/FEATURES {13}/);
  var v149 = v541 == -1;
  if(v149) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v745 = emblFile$$1.search(/ID/);
  var v542 = v745 == -1;
  var v747 = !v542;
  if(v747) {
    var v883 = emblFile$$1.search(/AC/);
    var v746 = v883 == -1;
    var v885 = !v746;
    if(v885) {
      var v968 = emblFile$$1.search(/DE/);
      var v884 = v968 == -1;
      var v970 = !v884;
      if(v970) {
        var v969 = emblFile$$1.search(/SQ/);
        v884 = v969 == -1
      }
      v746 = v884
    }
    v542 = v746
  }
  var v150 = v542;
  if(v150) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v543 = emblFile$$1.search(/^FT/m);
  var v151 = v543 == -1;
  if(v151) {
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
  var v158 = i$$5 < stopBase;
  for(;v158;) {
    var v152 = i$$5 + 1;
    lineOfText = rightNum(v152, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v544 = basePerLine / groupSize;
    var v155 = j$$6 <= v544;
    for(;v155;) {
      var v154 = k < groupSize;
      for(;v154;) {
        var v545 = k + i$$5;
        var v153 = text$$10.charAt(v545);
        lineOfText = lineOfText + v153;
        k = k + 1;
        v154 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v546 = basePerLine / groupSize;
      v155 = j$$6 <= v546
    }
    var v156 = outputWindow.document;
    var v157 = lineOfText + "\n";
    v156.write(v157);
    lineOfText = "";
    v158 = i$$5 < stopBase
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
    var v547 = adjustment < 0;
    if(v547) {
      v547 = adjusted >= 0
    }
    var v159 = v547;
    if(v159) {
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
  var v190 = i$$6 < stopBase$$2;
  for(;v190;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v548 = basePerLine$$2 / groupSize$$2;
    var v166 = j$$7 <= v548;
    for(;v166;) {
      var v162 = k$$1 < groupSize$$2;
      for(;v162;) {
        var v549 = i$$6 + k$$1;
        var v160 = v549 >= stopBase$$2;
        if(v160) {
          break
        }
        var v550 = k$$1 + i$$6;
        var v161 = text$$12.charAt(v550);
        lineOfText$$1 = lineOfText$$1 + v161;
        k$$1 = k$$1 + 1;
        v162 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v164 = numberPosition$$1 == "above";
      if(v164) {
        var v551 = adjustNumbering(i$$6, numberingAdjustment);
        var v163 = rightNum(v551, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v163
      }
      var v165 = i$$6 >= stopBase$$2;
      if(v165) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v552 = basePerLine$$2 / groupSize$$2;
      v166 = j$$7 <= v552
    }
    var v189 = numberPosition$$1 == "left";
    if(v189) {
      var v167 = outputWindow.document;
      var v886 = adjustNumbering(lineNum, numberingAdjustment);
      var v748 = rightNum(v886, "", 8, tabIn$$3);
      var v553 = v748 + lineOfText$$1;
      var v168 = v553 + "\n";
      v167.write(v168);
      var v172 = strands$$1 == "two";
      if(v172) {
        var v169 = outputWindow.document;
        var v887 = adjustNumbering(lineNum, numberingAdjustment);
        var v749 = rightNum(v887, "", 8, tabIn$$3);
        var v750 = complement(lineOfText$$1);
        var v554 = v749 + v750;
        var v170 = v554 + "\n";
        v169.write(v170);
        var v171 = outputWindow.document;
        v171.write("\n")
      }
    }else {
      var v188 = numberPosition$$1 == "right";
      if(v188) {
        var v173 = outputWindow.document;
        var v751 = adjustNumbering(i$$6, numberingAdjustment);
        var v555 = lineOfText$$1 + v751;
        var v174 = v555 + "\n";
        v173.write(v174);
        var v178 = strands$$1 == "two";
        if(v178) {
          var v175 = outputWindow.document;
          var v752 = complement(lineOfText$$1);
          var v753 = adjustNumbering(i$$6, numberingAdjustment);
          var v556 = v752 + v753;
          var v176 = v556 + "\n";
          v175.write(v176);
          var v177 = outputWindow.document;
          v177.write("\n")
        }
      }else {
        var v187 = numberPosition$$1 == "above";
        if(v187) {
          var v179 = outputWindow.document;
          var v180 = aboveNum + "\n";
          v179.write(v180);
          var v181 = outputWindow.document;
          var v182 = lineOfText$$1 + "\n";
          v181.write(v182);
          var v186 = strands$$1 == "two";
          if(v186) {
            var v183 = outputWindow.document;
            var v557 = complement(lineOfText$$1);
            var v184 = v557 + "\n";
            v183.write(v184);
            var v185 = outputWindow.document;
            v185.write("\n")
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v190 = i$$6 < stopBase$$2
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
  var v209 = i$$7 < stopBase$$3;
  for(;v209;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v558 = basePerLine$$3 / groupSize$$3;
    var v197 = j$$8 <= v558;
    for(;v197;) {
      var v193 = k$$2 < groupSize$$3;
      for(;v193;) {
        var v559 = i$$7 + k$$2;
        var v191 = v559 >= stopBase$$3;
        if(v191) {
          break
        }
        var v560 = k$$2 + i$$7;
        var v192 = text$$13.charAt(v560);
        lineOfText$$2 = lineOfText$$2 + v192;
        k$$2 = k$$2 + 1;
        v193 = k$$2 < groupSize$$3
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v195 = numberPosition$$2 == "above";
      if(v195) {
        var v194 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = aboveNum$$1 + v194
      }
      var v196 = i$$7 >= stopBase$$3;
      if(v196) {
        break
      }
      k$$2 = 0;
      j$$8 = j$$8 + 1;
      var v561 = basePerLine$$3 / groupSize$$3;
      v197 = j$$8 <= v561
    }
    var v208 = numberPosition$$2 == "left";
    if(v208) {
      var v198 = outputWindow.document;
      var v754 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v562 = v754 + lineOfText$$2;
      var v199 = v562 + "\n";
      v198.write(v199)
    }else {
      var v207 = numberPosition$$2 == "right";
      if(v207) {
        var v200 = outputWindow.document;
        var v563 = lineOfText$$2 + i$$7;
        var v201 = v563 + "\n";
        v200.write(v201)
      }else {
        var v206 = numberPosition$$2 == "above";
        if(v206) {
          var v202 = outputWindow.document;
          var v203 = aboveNum$$1 + "\n";
          v202.write(v203);
          var v204 = outputWindow.document;
          var v205 = lineOfText$$2 + "\n";
          v204.write(v205)
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v209 = i$$7 < stopBase$$3
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
  var v755 = sequence$$13.length;
  var v564 = v755 <= firstIndexToMutate;
  var v757 = !v564;
  if(v757) {
    var v756 = lastIndexToMutate < 0;
    var v888 = !v756;
    if(v888) {
      v756 = lastIndexToMutate <= firstIndexToMutate
    }
    v564 = v756
  }
  var v210 = v564;
  if(v210) {
    numMut = 0
  }
  var i$$8 = 0;
  var v218 = i$$8 < numMut;
  for(;v218;) {
    maxNum = sequence$$13.length;
    var v565 = Math.random();
    var v211 = v565 * maxNum;
    randNum = Math.floor(v211);
    var v566 = randNum < firstIndexToMutate;
    var v758 = !v566;
    if(v758) {
      v566 = randNum > lastIndexToMutate
    }
    var v212 = v566;
    if(v212) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v218 = i$$8 < numMut;
      continue
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for(;needNewChar;) {
      var v567 = Math.random();
      var v568 = components$$1.length;
      var v213 = v567 * v568;
      componentsIndex = Math.round(v213);
      var v569 = components$$1.length;
      var v214 = componentsIndex == v569;
      if(v214) {
        componentsIndex = 0
      }
      var v570 = components$$1[componentsIndex];
      var v215 = v570 != currentChar;
      if(v215) {
        needNewChar = false
      }
    }
    var v571 = sequence$$13.substring(0, randNum);
    var v572 = components$$1[componentsIndex];
    var v216 = v571 + v572;
    var v573 = randNum + 1;
    var v574 = sequence$$13.length;
    var v217 = sequence$$13.substring(v573, v574);
    sequence$$13 = v216 + v217;
    i$$8 = i$$8 + 1;
    v218 = i$$8 < numMut
  }
  var v219 = outputWindow.document;
  var v220 = addReturns(sequence$$13);
  v219.write(v220);
  return true
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v225 = j$$9 < lengthOut$$1;
  for(;v225;) {
    var v575 = Math.random();
    var v576 = components$$2.length;
    var v221 = v575 * v576;
    tempNum$$1 = Math.floor(v221);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v577 = sequence$$14.length;
    var v224 = v577 == 60;
    if(v224) {
      var v222 = outputWindow.document;
      var v223 = sequence$$14 + "\n";
      v222.write(v223);
      sequence$$14 = ""
    }
    j$$9 = j$$9 + 1;
    v225 = j$$9 < lengthOut$$1
  }
  var v226 = outputWindow.document;
  var v227 = sequence$$14 + "\n";
  v226.write(v227);
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
  var v231 = dnaConformation == "circular";
  if(v231) {
    var v228 = sequence$$15.substring(0, lookAhead);
    shiftValue = v228.length;
    var v889 = sequence$$15.length;
    var v759 = v889 - lookAhead;
    var v760 = sequence$$15.length;
    var v578 = sequence$$15.substring(v759, v760);
    var v229 = v578 + sequence$$15;
    var v230 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v229 + v230;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v232 = outputWindow.document;
  v232.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  var v233 = outputWindow.document;
  var v890 = '<tr><td class="title" width="200px">' + "Site:";
  var v761 = v890 + '</td><td class="title">';
  var v579 = v761 + "Positions:";
  var v234 = v579 + "</td></tr>\n";
  v233.write(v234);
  var i$$9 = 0;
  var v580 = arrayOfItems.length;
  var v250 = i$$9 < v580;
  for(;v250;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v581 = arrayOfItems[i$$9];
    var v235 = v581.match(/\/.+\//);
    matchExp = v235 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    var v891 = arrayOfItems[i$$9];
    var v762 = v891.match(/\)\D*\d+/);
    var v582 = v762.toString();
    var v236 = v582.replace(/\)\D*/, "");
    cutDistance = parseFloat(v236);
    var v242 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v242;) {
      var v237 = matchExp.lastIndex;
      matchPosition = v237 - cutDistance;
      var v583 = matchPosition >= lowerLimit;
      if(v583) {
        v583 = matchPosition < upperLimit
      }
      var v240 = v583;
      if(v240) {
        timesFound = timesFound + 1;
        var v238 = tempString$$1 + ", ";
        var v584 = matchPosition - shiftValue;
        var v239 = v584 + 1;
        tempString$$1 = v238 + v239
      }
      var v241 = matchExp;
      var v763 = matchExp.lastIndex;
      var v892 = RegExp.lastMatch;
      var v764 = v892.length;
      var v585 = v763 - v764;
      v241.lastIndex = v585 + 1;
      v242 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    var v586 = tempString$$1.search(/\d/);
    var v243 = v586 != -1;
    if(v243) {
      tempString$$1 = tempString$$1.replace(/none,\s*/, "")
    }
    var v247 = timesFound == 0;
    if(v247) {
      backGroundClass = "none"
    }else {
      var v246 = timesFound == 1;
      if(v246) {
        backGroundClass = "one"
      }else {
        var v245 = timesFound == 2;
        if(v245) {
          backGroundClass = "two"
        }else {
          var v244 = timesFound == 3;
          if(v244) {
            backGroundClass = "three"
          }else {
            backGroundClass = "many"
          }
        }
      }
    }
    var v248 = outputWindow.document;
    var v1046 = '<tr><td class="' + backGroundClass;
    var v1030 = v1046 + '">';
    var v1075 = arrayOfItems[i$$9];
    var v1061 = v1075.match(/\([^\(]+\)/);
    var v1047 = v1061.toString();
    var v1031 = v1047.replace(/\(|\)/g, "");
    var v1013 = v1030 + v1031;
    var v971 = v1013 + '</td><td class="';
    var v893 = v971 + backGroundClass;
    var v765 = v893 + '">';
    var v587 = v765 + tempString$$1;
    var v249 = v587 + "</td></tr>\n";
    v248.write(v249);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v588 = arrayOfItems.length;
    v250 = i$$9 < v588
  }
  var v251 = outputWindow.document;
  v251.write("</tbody></table>\n");
  return true
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v252 = outputWindow.document;
  v252.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  var v253 = outputWindow.document;
  var v1014 = '<tr><td class="title">' + "Pattern:";
  var v972 = v1014 + '</td><td class="title">';
  var v894 = v972 + "Times found:";
  var v766 = v894 + '</td><td class="title">';
  var v589 = v766 + "Percentage:";
  var v254 = v589 + "</td></tr>\n";
  v253.write(v254);
  var i$$10 = 0;
  var v590 = arrayOfItems$$1.length;
  var v263 = i$$10 < v590;
  for(;v263;) {
    var tempNumber = 0;
    var v591 = arrayOfItems$$1[i$$10];
    var v255 = v591.match(/\/[^\/]+\//);
    var matchExp$$1 = v255 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    var v592 = sequence$$16.search(matchExp$$1);
    var v257 = v592 != -1;
    if(v257) {
      var v256 = sequence$$16.match(matchExp$$1);
      tempNumber = v256.length
    }
    var percentage = 0;
    var v767 = originalLength + 1;
    var v973 = arrayOfItems$$1[i$$10];
    var v895 = v973.match(/\d+/);
    var v768 = parseFloat(v895);
    var v593 = v767 - v768;
    var v260 = v593 > 0;
    if(v260) {
      var v258 = 100 * tempNumber;
      var v594 = originalLength + 1;
      var v896 = arrayOfItems$$1[i$$10];
      var v769 = v896.match(/\d+/);
      var v595 = parseFloat(v769);
      var v259 = v594 - v595;
      percentage = v258 / v259
    }
    var v261 = outputWindow.document;
    var v1076 = arrayOfItems$$1[i$$10];
    var v1062 = v1076.match(/\([^\(]+\)\b/);
    var v1048 = v1062.toString();
    var v1032 = v1048.replace(/\(|\)/g, "");
    var v1015 = "<tr><td>" + v1032;
    var v974 = v1015 + "</td><td>";
    var v897 = v974 + tempNumber;
    var v770 = v897 + "</td><td>";
    var v771 = percentage.toFixed(2);
    var v596 = v770 + v771;
    var v262 = v596 + "</td></tr>\n";
    v261.write(v262);
    i$$10 = i$$10 + 1;
    var v597 = arrayOfItems$$1.length;
    v263 = i$$10 < v597
  }
  var v264 = outputWindow.document;
  v264.write("</tbody></table>\n");
  return true
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v598 = sequence$$17.length;
  var v271 = v598 > 0;
  for(;v271;) {
    maxNum$$1 = sequence$$17.length;
    var v599 = Math.random();
    var v265 = v599 * maxNum$$1;
    randNum$$1 = Math.floor(v265);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v266 = randNum$$1 + 1;
    var v267 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v266, v267);
    sequence$$17 = tempString1 + tempString2;
    var v600 = tempSeq.length;
    var v270 = v600 == 60;
    if(v270) {
      var v268 = outputWindow.document;
      var v269 = tempSeq + "\n";
      v268.write(v269);
      tempSeq = ""
    }
    var v601 = sequence$$17.length;
    v271 = v601 > 0
  }
  var v272 = outputWindow.document;
  var v273 = tempSeq + "\n";
  v272.write(v273);
  return true
}
function revTrans(theDocument) {
  JAM.startProfile('compute');

  var newProtein = "";
  var maxInput$$3 = 2E4;
  var v602 = testScript();
  var v274 = v602 == false;
  if(v274) {
    return false
  }
  var codonTable$$1;
  var v1033 = theDocument.forms;
  var v1016 = v1033[0];
  var v975 = v1016.elements;
  var v898 = v975[0];
  var v772 = checkFormElement(v898);
  var v603 = v772 == false;
  var v774 = !v603;
  if(v774) {
    var v1063 = theDocument.forms;
    var v1049 = v1063[0];
    var v1034 = v1049.elements;
    var v1017 = v1034[0];
    var v976 = v1017.value;
    var v899 = checkSequenceLength(v976, maxInput$$3);
    var v773 = v899 == false;
    var v901 = !v773;
    if(v901) {
      var v1064 = theDocument.forms;
      var v1050 = v1064[0];
      var v1035 = v1050.elements;
      var v1018 = v1035[4];
      var v977 = v1018.value;
      var v900 = checkCodonTable(v977);
      v773 = v900 == false
    }
    v603 = v773
  }
  var v275 = v603;
  if(v275) {
    return false
  }
  var v978 = theDocument.forms;
  var v902 = v978[0];
  var v775 = v902.elements;
  var v604 = v775[4];
  var v276 = v604.value;
  codonTable$$1 = makeCodonTable(v276);
  var v277 = codonTable$$1 == false;
  if(v277) {
    return false
  }
  openWindow("Reverse Translate");
  openPre();
  var v979 = theDocument.forms;
  var v903 = v979[0];
  var v776 = v903.elements;
  var v605 = v776[0];
  var v278 = v605.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v278);
  var i$$11 = 0;
  var v606 = arrayOfFasta$$1.length;
  var v287 = i$$11 < v606;
  for(;v287;) {
    var v279 = arrayOfFasta$$1[i$$11];
    newProtein = getSequenceFromFasta(v279);
    var v280 = arrayOfFasta$$1[i$$11];
    title = getTitleFromFasta(v280);
    newProtein = removeNonProteinAllowX(newProtein);
    var v281 = outputWindow.document;
    var v282 = getInfoFromTitleAndSequence(title, newProtein);
    v281.write(v282);
    writeRevTransSeqNoDegen(newProtein, title, codonTable$$1);
    var v283 = outputWindow.document;
    v283.write("\n");
    writeRevTransSeqDegen(newProtein, title, codonTable$$1);
    var v284 = outputWindow.document;
    v284.write("\n");
    var v285 = outputWindow.document;
    v285.write("Graph of base probabilities:\n");
    writeRevTransGraph(newProtein, codonTable$$1);
    var v286 = outputWindow.document;
    v286.write("\n\n");
    i$$11 = i$$11 + 1;
    var v607 = arrayOfFasta$$1.length;
    v287 = i$$11 < v607
  }
  closePre();
  closeWindow();

  JAM.stopProfile('compute');
  return true
}
function writeRevTransSeqNoDegen(protein, title$$10, codonTable$$2) {
  function v2(str$$9, p1$$2, offset$$14, s$$4) {
    var v608 = p1$$2.toString();
    var v288 = v608.toLowerCase();
    aminoAcid = codonTable$$2[v288];
    return aminoAcid.mostCommonCodon
  }
  var aminoAcid;
  protein = protein.replace(/\*/g, "z");
  protein = protein.replace(/(.)/g, v2);
  var v289 = outputWindow.document;
  var v980 = "&gt;" + "reverse translation of ";
  var v904 = v980 + title$$10;
  var v777 = v904 + " to a ";
  var v778 = protein.length;
  var v609 = v777 + v778;
  var v290 = v609 + " base sequence of most likely codons.\n";
  v289.write(v290);
  var v291 = outputWindow.document;
  var v292 = addReturns(protein);
  v291.write(v292);
  var v293 = outputWindow.document;
  v293.write("\n");
  return true
}
function writeRevTransSeqDegen(protein$$1, title$$11, codonTable$$3) {
  function v3(str$$10, p1$$3, offset$$15, s$$5) {
    var v610 = p1$$3.toString();
    var v294 = v610.toLowerCase();
    aminoAcid$$1 = codonTable$$3[v294];
    return aminoAcid$$1.degenCodon
  }
  var aminoAcid$$1;
  protein$$1 = protein$$1.replace(/\*/g, "z");
  protein$$1 = protein$$1.replace(/(.)/g, v3);
  var v295 = outputWindow.document;
  var v981 = "&gt;" + "reverse translation of ";
  var v905 = v981 + title$$11;
  var v779 = v905 + " to a ";
  var v780 = protein$$1.length;
  var v611 = v779 + v780;
  var v296 = v611 + " base sequence of consensus codons.\n";
  v295.write(v296);
  var v297 = outputWindow.document;
  var v298 = addReturns(protein$$1);
  v297.write(v298);
  var v299 = outputWindow.document;
  v299.write("\n");
  return true
}
function writeRevTransGraph(protein$$2, codonTable$$4) {
  function v4(str$$11, p1$$4, offset$$16, s$$6) {
    var v612 = p1$$4.toString();
    var v300 = v612.toLowerCase();
    aminoAcid$$2 = codonTable$$4[v300];
    var v1120 = offset$$16 + 1;
    var v1119 = "<b>" + v1120;
    var v1118 = v1119 + "_";
    var v1117 = v1118 + str$$11;
    var v1116 = v1117 + "_";
    var v1113 = v1116 + "first</b>\n";
    var v1114 = aminoAcid$$2.rulerPosOne;
    var v1110 = v1113 + v1114;
    var v1104 = v1110 + "<b>";
    var v1105 = offset$$16 + 1;
    var v1099 = v1104 + v1105;
    var v1094 = v1099 + "_";
    var v1086 = v1094 + str$$11;
    var v1077 = v1086 + "_";
    var v1065 = v1077 + "second</b>\n";
    var v1066 = aminoAcid$$2.rulerPosTwo;
    var v1051 = v1065 + v1066;
    var v1036 = v1051 + "<b>";
    var v1037 = offset$$16 + 1;
    var v1019 = v1036 + v1037;
    var v982 = v1019 + "_";
    var v906 = v982 + str$$11;
    var v781 = v906 + "_";
    var v613 = v781 + "third</b>\n";
    var v614 = aminoAcid$$2.rulerPosThree;
    var v301 = v613 + v614;
    return v301 + "\n"
  }
  var aminoAcid$$2;
  protein$$2 = protein$$2.replace(/\*/g, "z");
  protein$$2 = protein$$2.replace(/(.)/g, v4);
  var v302 = outputWindow.document;
  v302.write(protein$$2);
  return true
}
function makeCodonTable(gcgTable) {
  gcgTable = gcgTable.replace(/[^\.]*\.\./, "");
  var tableArray = gcgTable.split(/[\f\n\r]/);
  var re$$3 = /(\w+)\s+(\w+)\s+(\S+)\s+(\S+)\s+(\S+)/g;
  var matchArray$$2;
  var codonTable$$5 = new CodonTable;
  var i$$12 = 0;
  var v615 = tableArray.length;
  var v307 = i$$12 < v615;
  for(;v307;) {
    var v616 = tableArray[i$$12];
    var v306 = matchArray$$2 = re$$3.exec(v616);
    for(;v306;) {
      try {
        var v782 = matchArray$$2[1];
        var v617 = v782.toLowerCase();
        var v303 = codonTable$$5[v617];
        var v618 = matchArray$$2[2];
        var v783 = matchArray$$2[3];
        var v619 = parseFloat(v783);
        var v784 = matchArray$$2[4];
        var v620 = parseFloat(v784);
        var v785 = matchArray$$2[5];
        var v621 = parseFloat(v785);
        var v304 = new Codon(v618, v619, v620, v621);
        v303.addCodon(v304)
      }catch(e$$5) {
        var v1078 = matchArray$$2[1];
        var v1067 = "There is a problem with a line of the codon table: " + v1078;
        var v1052 = v1067 + " ";
        var v1053 = matchArray$$2[2];
        var v1038 = v1052 + v1053;
        var v1020 = v1038 + " ";
        var v1021 = matchArray$$2[3];
        var v983 = v1020 + v1021;
        var v907 = v983 + " ";
        var v908 = matchArray$$2[4];
        var v786 = v907 + v908;
        var v622 = v786 + " ";
        var v623 = matchArray$$2[4];
        var v305 = v622 + v623;
        alert(v305);
        return false
      }
      var v624 = tableArray[i$$12];
      v306 = matchArray$$2 = re$$3.exec(v624)
    }
    i$$12 = i$$12 + 1;
    var v625 = tableArray.length;
    v307 = i$$12 < v625
  }
  var v308 = codonTable$$5.a;
  v308.determineBaseFreq();
  var v309 = codonTable$$5.c;
  v309.determineBaseFreq();
  var v310 = codonTable$$5.d;
  v310.determineBaseFreq();
  var v311 = codonTable$$5.e;
  v311.determineBaseFreq();
  var v312 = codonTable$$5.f;
  v312.determineBaseFreq();
  var v313 = codonTable$$5.g;
  v313.determineBaseFreq();
  var v314 = codonTable$$5.h;
  v314.determineBaseFreq();
  var v315 = codonTable$$5.i;
  v315.determineBaseFreq();
  var v316 = codonTable$$5.k;
  v316.determineBaseFreq();
  var v317 = codonTable$$5.l;
  v317.determineBaseFreq();
  var v318 = codonTable$$5.m;
  v318.determineBaseFreq();
  var v319 = codonTable$$5.n;
  v319.determineBaseFreq();
  var v320 = codonTable$$5.p;
  v320.determineBaseFreq();
  var v321 = codonTable$$5.q;
  v321.determineBaseFreq();
  var v322 = codonTable$$5.r;
  v322.determineBaseFreq();
  var v323 = codonTable$$5.s;
  v323.determineBaseFreq();
  var v324 = codonTable$$5.t;
  v324.determineBaseFreq();
  var v325 = codonTable$$5.v;
  v325.determineBaseFreq();
  var v326 = codonTable$$5.w;
  v326.determineBaseFreq();
  var v327 = codonTable$$5.y;
  v327.determineBaseFreq();
  var v328 = codonTable$$5.z;
  v328.determineBaseFreq();
  var v329 = codonTable$$5.x;
  v329.determineBaseFreq();
  var v330 = codonTable$$5.x;
  var v1127 = new Array(0.25, 0.25, 0.25, 0.25);
  v330.baseFreqPosOne = v1127;
  var v331 = codonTable$$5.x;
  var v1128 = new Array(0.25, 0.25, 0.25, 0.25);
  v331.baseFreqPosTwo = v1128;
  var v332 = codonTable$$5.x;
  var v1129 = new Array(0.25, 0.25, 0.25, 0.25);
  v332.baseFreqPosThree = v1129;
  var v333 = codonTable$$5.a;
  v333.fillRuler();
  var v334 = codonTable$$5.c;
  v334.fillRuler();
  var v335 = codonTable$$5.d;
  v335.fillRuler();
  var v336 = codonTable$$5.e;
  v336.fillRuler();
  var v337 = codonTable$$5.f;
  v337.fillRuler();
  var v338 = codonTable$$5.g;
  v338.fillRuler();
  var v339 = codonTable$$5.h;
  v339.fillRuler();
  var v340 = codonTable$$5.i;
  v340.fillRuler();
  var v341 = codonTable$$5.k;
  v341.fillRuler();
  var v342 = codonTable$$5.l;
  v342.fillRuler();
  var v343 = codonTable$$5.m;
  v343.fillRuler();
  var v344 = codonTable$$5.n;
  v344.fillRuler();
  var v345 = codonTable$$5.p;
  v345.fillRuler();
  var v346 = codonTable$$5.q;
  v346.fillRuler();
  var v347 = codonTable$$5.r;
  v347.fillRuler();
  var v348 = codonTable$$5.s;
  v348.fillRuler();
  var v349 = codonTable$$5.t;
  v349.fillRuler();
  var v350 = codonTable$$5.v;
  v350.fillRuler();
  var v351 = codonTable$$5.w;
  v351.fillRuler();
  var v352 = codonTable$$5.y;
  v352.fillRuler();
  var v353 = codonTable$$5.z;
  v353.fillRuler();
  var v354 = codonTable$$5.x;
  v354.fillRuler();
  return codonTable$$5
}
function CodonTable() {
  var v1130 = new AminoAcid;
  this.a = v1130;
  var v1131 = new AminoAcid;
  this.c = v1131;
  var v1132 = new AminoAcid;
  this.d = v1132;
  var v1133 = new AminoAcid;
  this.e = v1133;
  var v1134 = new AminoAcid;
  this.f = v1134;
  var v1135 = new AminoAcid;
  this.g = v1135;
  var v1136 = new AminoAcid;
  this.h = v1136;
  var v1137 = new AminoAcid;
  this.i = v1137;
  var v1138 = new AminoAcid;
  this.k = v1138;
  var v1139 = new AminoAcid;
  this.l = v1139;
  var v1140 = new AminoAcid;
  this.m = v1140;
  var v1141 = new AminoAcid;
  this.n = v1141;
  var v1142 = new AminoAcid;
  this.p = v1142;
  var v1143 = new AminoAcid;
  this.q = v1143;
  var v1144 = new AminoAcid;
  this.r = v1144;
  var v1145 = new AminoAcid;
  this.s = v1145;
  var v1146 = new AminoAcid;
  this.t = v1146;
  var v1147 = new AminoAcid;
  this.v = v1147;
  var v1148 = new AminoAcid;
  this.w = v1148;
  var v1149 = new AminoAcid;
  this.y = v1149;
  var v1150 = new AminoAcid;
  this.z = v1150;
  var v1151 = new AminoAcid;
  this.x = v1151;
  this.ala = this.a;
  this.cys = this.c;
  this.asp = this.d;
  this.glu = this.e;
  this.phe = this.f;
  this.gly = this.g;
  this.his = this.h;
  this.ile = this.i;
  this.lys = this.k;
  this.leu = this.l;
  this.met = this.m;
  this.asn = this.n;
  this.pro = this.p;
  this.gln = this.q;
  this.arg = this.r;
  this.ser = this.s;
  this.thr = this.t;
  this.val = this.v;
  this.trp = this.w;
  this.tyr = this.y;
  this.end = this.z;
  this.xaa = this.x;
  return
}
function fillRuler() {
  var markG = "gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg";
  var markA = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
  var markT = "TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT";
  var markC = "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC";
  var markLength = markG.length;
  var v984 = this.baseFreqPosOne;
  var v909 = v984[0];
  var v787 = this.getRuler(v909, markG);
  var v985 = this.baseFreqPosOne;
  var v910 = v985[1];
  var v788 = this.getRuler(v910, markA);
  var v626 = v787 + v788;
  var v911 = this.baseFreqPosOne;
  var v789 = v911[2];
  var v627 = this.getRuler(v789, markT);
  var v355 = v626 + v627;
  var v790 = this.baseFreqPosOne;
  var v628 = v790[3];
  var v356 = this.getRuler(v628, markC);
  this.rulerPosOne = v355 + v356;
  var v986 = this.baseFreqPosTwo;
  var v912 = v986[0];
  var v791 = this.getRuler(v912, markG);
  var v987 = this.baseFreqPosTwo;
  var v913 = v987[1];
  var v792 = this.getRuler(v913, markA);
  var v629 = v791 + v792;
  var v914 = this.baseFreqPosTwo;
  var v793 = v914[2];
  var v630 = this.getRuler(v793, markT);
  var v357 = v629 + v630;
  var v794 = this.baseFreqPosTwo;
  var v631 = v794[3];
  var v358 = this.getRuler(v631, markC);
  this.rulerPosTwo = v357 + v358;
  var v988 = this.baseFreqPosThree;
  var v915 = v988[0];
  var v795 = this.getRuler(v915, markG);
  var v989 = this.baseFreqPosThree;
  var v916 = v989[1];
  var v796 = this.getRuler(v916, markA);
  var v632 = v795 + v796;
  var v917 = this.baseFreqPosThree;
  var v797 = v917[2];
  var v633 = this.getRuler(v797, markT);
  var v359 = v632 + v633;
  var v798 = this.baseFreqPosThree;
  var v634 = v798[3];
  var v360 = this.getRuler(v634, markC);
  this.rulerPosThree = v359 + v360;
  this.setMostCommonCodon();
  this.setDegenCodon();
  return
}
function getRuler(freq, mark) {
  var v918 = mark.substring(0, 1);
  var v1022 = mark.length;
  var v990 = freq * v1022;
  var v919 = mark.substring(0, v990);
  var v799 = v918 + v919;
  var v635 = v799 + " ";
  var v636 = freq.toFixed(2);
  var v361 = v635 + v636;
  return v361 + "\n"
}
function addCodon(codon$$1) {
  var v362 = this.codons;
  v362.push(codon$$1);
  return
}
function determineBaseFreq() {
  this.fixFraction();
  var i$$13 = 0;
  var v800 = this.codons;
  var v637 = v800.length;
  var v387 = i$$13 < v637;
  for(;v387;) {
    var v991 = this.codons;
    var v920 = v991[i$$13];
    var v801 = v920.sequence;
    var v638 = v801.charAt(0);
    var v370 = v638 == "g";
    if(v370) {
      var v363 = this.baseFreqPosOne;
      var v802 = this.baseFreqPosOne;
      var v639 = v802[0];
      var v921 = this.codons;
      var v803 = v921[i$$13];
      var v640 = v803.fraction;
      v363[0] = v639 + v640
    }else {
      var v992 = this.codons;
      var v922 = v992[i$$13];
      var v804 = v922.sequence;
      var v641 = v804.charAt(0);
      var v369 = v641 == "a";
      if(v369) {
        var v364 = this.baseFreqPosOne;
        var v805 = this.baseFreqPosOne;
        var v642 = v805[1];
        var v923 = this.codons;
        var v806 = v923[i$$13];
        var v643 = v806.fraction;
        v364[1] = v642 + v643
      }else {
        var v993 = this.codons;
        var v924 = v993[i$$13];
        var v807 = v924.sequence;
        var v644 = v807.charAt(0);
        var v368 = v644 == "t";
        if(v368) {
          var v365 = this.baseFreqPosOne;
          var v808 = this.baseFreqPosOne;
          var v645 = v808[2];
          var v925 = this.codons;
          var v809 = v925[i$$13];
          var v646 = v809.fraction;
          v365[2] = v645 + v646
        }else {
          var v994 = this.codons;
          var v926 = v994[i$$13];
          var v810 = v926.sequence;
          var v647 = v810.charAt(0);
          var v367 = v647 == "c";
          if(v367) {
            var v366 = this.baseFreqPosOne;
            var v811 = this.baseFreqPosOne;
            var v648 = v811[3];
            var v927 = this.codons;
            var v812 = v927[i$$13];
            var v649 = v812.fraction;
            v366[3] = v648 + v649
          }
        }
      }
    }
    var v995 = this.codons;
    var v928 = v995[i$$13];
    var v813 = v928.sequence;
    var v650 = v813.charAt(1);
    var v378 = v650 == "g";
    if(v378) {
      var v371 = this.baseFreqPosTwo;
      var v814 = this.baseFreqPosTwo;
      var v651 = v814[0];
      var v929 = this.codons;
      var v815 = v929[i$$13];
      var v652 = v815.fraction;
      v371[0] = v651 + v652
    }else {
      var v996 = this.codons;
      var v930 = v996[i$$13];
      var v816 = v930.sequence;
      var v653 = v816.charAt(1);
      var v377 = v653 == "a";
      if(v377) {
        var v372 = this.baseFreqPosTwo;
        var v817 = this.baseFreqPosTwo;
        var v654 = v817[1];
        var v931 = this.codons;
        var v818 = v931[i$$13];
        var v655 = v818.fraction;
        v372[1] = v654 + v655
      }else {
        var v997 = this.codons;
        var v932 = v997[i$$13];
        var v819 = v932.sequence;
        var v656 = v819.charAt(1);
        var v376 = v656 == "t";
        if(v376) {
          var v373 = this.baseFreqPosTwo;
          var v820 = this.baseFreqPosTwo;
          var v657 = v820[2];
          var v933 = this.codons;
          var v821 = v933[i$$13];
          var v658 = v821.fraction;
          v373[2] = v657 + v658
        }else {
          var v998 = this.codons;
          var v934 = v998[i$$13];
          var v822 = v934.sequence;
          var v659 = v822.charAt(1);
          var v375 = v659 == "c";
          if(v375) {
            var v374 = this.baseFreqPosTwo;
            var v823 = this.baseFreqPosTwo;
            var v660 = v823[3];
            var v935 = this.codons;
            var v824 = v935[i$$13];
            var v661 = v824.fraction;
            v374[3] = v660 + v661
          }
        }
      }
    }
    var v999 = this.codons;
    var v936 = v999[i$$13];
    var v825 = v936.sequence;
    var v662 = v825.charAt(2);
    var v386 = v662 == "g";
    if(v386) {
      var v379 = this.baseFreqPosThree;
      var v826 = this.baseFreqPosThree;
      var v663 = v826[0];
      var v937 = this.codons;
      var v827 = v937[i$$13];
      var v664 = v827.fraction;
      v379[0] = v663 + v664
    }else {
      var v1000 = this.codons;
      var v938 = v1000[i$$13];
      var v828 = v938.sequence;
      var v665 = v828.charAt(2);
      var v385 = v665 == "a";
      if(v385) {
        var v380 = this.baseFreqPosThree;
        var v829 = this.baseFreqPosThree;
        var v666 = v829[1];
        var v939 = this.codons;
        var v830 = v939[i$$13];
        var v667 = v830.fraction;
        v380[1] = v666 + v667
      }else {
        var v1001 = this.codons;
        var v940 = v1001[i$$13];
        var v831 = v940.sequence;
        var v668 = v831.charAt(2);
        var v384 = v668 == "t";
        if(v384) {
          var v381 = this.baseFreqPosThree;
          var v832 = this.baseFreqPosThree;
          var v669 = v832[2];
          var v941 = this.codons;
          var v833 = v941[i$$13];
          var v670 = v833.fraction;
          v381[2] = v669 + v670
        }else {
          var v1002 = this.codons;
          var v942 = v1002[i$$13];
          var v834 = v942.sequence;
          var v671 = v834.charAt(2);
          var v383 = v671 == "c";
          if(v383) {
            var v382 = this.baseFreqPosThree;
            var v835 = this.baseFreqPosThree;
            var v672 = v835[3];
            var v943 = this.codons;
            var v836 = v943[i$$13];
            var v673 = v836.fraction;
            v382[3] = v672 + v673
          }
        }
      }
    }
    i$$13 = i$$13 + 1;
    var v837 = this.codons;
    var v674 = v837.length;
    v387 = i$$13 < v674
  }
  return true
}
function fixFraction() {
  var perThouTotal = 0;
  var i$$14 = 0;
  var v838 = this.codons;
  var v675 = v838.length;
  var v389 = i$$14 < v675;
  for(;v389;) {
    var v839 = this.codons;
    var v676 = v839[i$$14];
    var v388 = v676.perThou;
    perThouTotal = perThouTotal + v388;
    i$$14 = i$$14 + 1;
    var v840 = this.codons;
    var v677 = v840.length;
    v389 = i$$14 < v677
  }
  var v390 = perThouTotal == 0;
  if(v390) {
    return false
  }
  i$$14 = 0;
  var v841 = this.codons;
  var v678 = v841.length;
  var v392 = i$$14 < v678;
  for(;v392;) {
    var v679 = this.codons;
    var v391 = v679[i$$14];
    var v944 = this.codons;
    var v842 = v944[i$$14];
    var v680 = v842.perThou;
    v391.fraction = v680 / perThouTotal;
    i$$14 = i$$14 + 1;
    var v843 = this.codons;
    var v681 = v843.length;
    v392 = i$$14 < v681
  }
  return true
}
function setMostCommonCodon() {
  var highestFraction = 0;
  var highestCodon = "nnn";
  var i$$15 = 0;
  var v844 = this.codons;
  var v682 = v844.length;
  var v396 = i$$15 < v682;
  for(;v396;) {
    var v945 = this.codons;
    var v845 = v945[i$$15];
    var v683 = v845.fraction;
    var v395 = v683 > highestFraction;
    if(v395) {
      var v684 = this.codons;
      var v393 = v684[i$$15];
      highestFraction = v393.fraction;
      var v685 = this.codons;
      var v394 = v685[i$$15];
      highestCodon = v394.sequence
    }
    i$$15 = i$$15 + 1;
    var v846 = this.codons;
    var v686 = v846.length;
    v396 = i$$15 < v686
  }
  this.mostCommonCodon = highestCodon;
  return
}
function setDegenCodon() {
  var v847 = this.baseFreqPosOne;
  var v687 = getConsensusBase(v847);
  var v848 = this.baseFreqPosTwo;
  var v688 = getConsensusBase(v848);
  var v397 = v687 + v688;
  var v689 = this.baseFreqPosThree;
  var v398 = getConsensusBase(v689);
  this.degenCodon = v397 + v398;
  return
}
function getConsensusBase(baseFreq) {
  var g;
  var a;
  var t;
  var c;
  var v690 = baseFreq[0];
  var v399 = v690 > 0;
  if(v399) {
    g = true
  }
  var v691 = baseFreq[1];
  var v400 = v691 > 0;
  if(v400) {
    a = true
  }
  var v692 = baseFreq[2];
  var v401 = v692 > 0;
  if(v401) {
    t = true
  }
  var v693 = baseFreq[3];
  var v402 = v693 > 0;
  if(v402) {
    c = true
  }
  var v694 = !g;
  if(v694) {
    var v849 = !a;
    if(v849) {
      var v946 = !c;
      if(v946) {
        v946 = !t
      }
      v849 = v946
    }
    v694 = v849
  }
  var v403 = v694;
  if(v403) {
    return"n"
  }
  var v695 = g;
  if(v695) {
    var v850 = a;
    if(v850) {
      v850 = c && t
    }
    v695 = v850
  }
  var v413 = v695;
  if(v413) {
    return"n"
  }else {
    var v696 = a;
    if(v696) {
      v696 = c && t
    }
    var v412 = v696;
    if(v412) {
      return"h"
    }else {
      var v697 = a;
      if(v697) {
        v697 = g && t
      }
      var v411 = v697;
      if(v411) {
        return"d"
      }else {
        var v698 = c;
        if(v698) {
          v698 = g && t
        }
        var v410 = v698;
        if(v410) {
          return"b"
        }else {
          var v409 = a && c;
          if(v409) {
            return"m"
          }else {
            var v408 = g && t;
            if(v408) {
              return"k"
            }else {
              var v407 = a && t;
              if(v407) {
                return"w"
              }else {
                var v406 = g && c;
                if(v406) {
                  return"s"
                }else {
                  var v405 = c && t;
                  if(v405) {
                    return"y"
                  }else {
                    var v404 = a && g;
                    if(v404) {
                      return"r"
                    }else {
                      if(t) {
                        return"t"
                      }else {
                        if(g) {
                          return"g"
                        }else {
                          if(c) {
                            return"c"
                          }else {
                            if(a) {
                              return"a"
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return true
}
function AminoAcid() {
  var v1152 = new Array;
  this.codons = v1152;
  var v1153 = new Array(0, 0, 0, 0);
  this.baseFreqPosOne = v1153;
  var v1154 = new Array(0, 0, 0, 0);
  this.baseFreqPosTwo = v1154;
  var v1155 = new Array(0, 0, 0, 0);
  this.baseFreqPosThree = v1155;
  return
}
function Codon(sequence$$18, number, perThou, fraction) {
  var v1156 = sequence$$18.toLowerCase();
  this.sequence = v1156;
  this.number = number;
  this.perThou = perThou;
  this.fraction = fraction;
  return
}
new AminoAcid;
var v414 = AminoAcid.prototype;
v414.fillRuler = fillRuler;
var v415 = AminoAcid.prototype;
v415.getRuler = getRuler;
var v416 = AminoAcid.prototype;
v416.addCodon = addCodon;
var v417 = AminoAcid.prototype;
v417.determineBaseFreq = determineBaseFreq;
var v418 = AminoAcid.prototype;
v418.fixFraction = fixFraction;
var v419 = AminoAcid.prototype;
v419.setMostCommonCodon = setMostCommonCodon;
var v420 = AminoAcid.prototype;
v420.setDegenCodon = setDegenCodon;
var v421 = AminoAcid.prototype;
v421.getConsensusBase = getConsensusBase;
document.onload = v5;
var v422 = document.getElementById("submitbtn");
v422.onclick = v6;
var v423 = document.getElementById("clearbtn");
v423.onclick = v7;

}

JAM.stopProfile('load');
