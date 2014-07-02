introspect(JAMScript.introspectors.processAll) {
function v12() {
  var v830 = document.forms;
  var v690 = v830[0];
  var v396 = v690.elements;
  var v13 = v396[0];
  v13.value = " ";
  var v831 = document.forms;
  var v691 = v831[0];
  var v397 = v691.elements;
  var v14 = v397[1];
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
  var v398 = document.main_form;
  var v16 = v398.main_submit;
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
  var v399 = arrayOfSequences.length;
  var v18 = v399 < 2;
  if(v18) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v400 = arrayOfTitles.length;
  var v20 = i$$1 < v400;
  for(;v20;) {
    var v832 = arrayOfTitles[i$$1];
    var v692 = v832.search(/\S/);
    var v401 = v692 == -1;
    var v694 = !v401;
    if(v694) {
      var v928 = arrayOfSequences[i$$1];
      var v833 = v928.search(/\S/);
      var v693 = v833 == -1;
      var v835 = !v693;
      if(v835) {
        var v929 = arrayOfSequences[i$$1];
        var v834 = v929.length;
        v693 = v834 != lengthOfAlign
      }
      v401 = v693
    }
    var v19 = v401;
    if(v19) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v402 = arrayOfTitles.length;
    v20 = i$$1 < v402
  }
  return true
}
function checkCodonTable(codonTable) {
  var v695 = codonTable.search(/AmAcid/);
  var v403 = v695 == -1;
  var v697 = !v403;
  if(v697) {
    var v836 = codonTable.search(/Codon/);
    var v696 = v836 == -1;
    var v838 = !v696;
    if(v838) {
      var v930 = codonTable.search(/Number/);
      var v837 = v930 == -1;
      var v932 = !v837;
      if(v932) {
        var v986 = codonTable.search(/\/1000/);
        var v931 = v986 == -1;
        var v988 = !v931;
        if(v988) {
          var v987 = codonTable.search(/Fraction\s*\.\./);
          v931 = v987 == -1
        }
        v837 = v931
      }
      v696 = v837
    }
    v403 = v696
  }
  var v21 = v403;
  if(v21) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v698 = formElement.value;
  var v404 = v698.search(/\S/);
  var v22 = v404 == -1;
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
  var v405 = arrayOfPatterns.length;
  var v25 = z$$2 < v405;
  for(;v25;) {
    var v699 = arrayOfPatterns[z$$2];
    var v406 = v699.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v23 = v406 == -1;
    if(v23) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    var v700 = arrayOfPatterns[z$$2];
    var v407 = moreExpressionCheck(v700);
    var v24 = v407 == false;
    if(v24) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v408 = arrayOfPatterns.length;
    v25 = z$$2 < v408
  }
  var v26 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v26);
  var v27 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v27);
  var j = 0;
  var v409 = arrayOfPatterns.length;
  var v34 = j < v409;
  for(;v34;) {
    var v28 = geneticCodeMatchExp;
    var v29 = j;
    var v839 = arrayOfPatterns[j];
    var v701 = v839.match(/\/.+\//);
    var v410 = v701 + "gi";
    var v1103 = eval(v410);
    v28[v29] = v1103;
    var v30 = geneticCodeMatchResult;
    var v31 = j;
    var v702 = arrayOfPatterns[j];
    var v411 = v702.match(/=[a-zA-Z\*]/);
    var v1104 = v411.toString();
    v30[v31] = v1104;
    var v32 = geneticCodeMatchResult;
    var v33 = j;
    var v412 = geneticCodeMatchResult[j];
    var v1105 = v412.replace(/=/g, "");
    v32[v33] = v1105;
    j = j + 1;
    var v413 = arrayOfPatterns.length;
    v34 = j < v413
  }
  var i$$2 = 0;
  var v703 = testSequence.length;
  var v414 = v703 - 3;
  var v41 = i$$2 <= v414;
  for(;v41;) {
    var v35 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v35);
    j = 0;
    var v415 = geneticCodeMatchExp.length;
    var v39 = j < v415;
    for(;v39;) {
      var v704 = geneticCodeMatchExp[j];
      var v416 = codon.search(v704);
      var v38 = v416 != -1;
      if(v38) {
        var v37 = oneMatch == true;
        if(v37) {
          var v417 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v36 = v417 + ".";
          alert(v36);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v418 = geneticCodeMatchExp.length;
      v39 = j < v418
    }
    var v40 = oneMatch == false;
    if(v40) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v705 = testSequence.length;
    var v419 = v705 - 3;
    v41 = i$$2 <= v419
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v420 = arrayOfPatterns$$1.length;
  var v43 = z$$3 < v420;
  for(;v43;) {
    var v706 = arrayOfPatterns$$1[z$$3];
    var v421 = v706.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v42 = v421 != -1;
    if(v42) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v422 = arrayOfPatterns$$1.length;
    v43 = z$$3 < v422
  }
  var i$$3 = 0;
  var v423 = arrayOfPatterns$$1.length;
  var v47 = i$$3 < v423;
  for(;v47;) {
    var v707 = arrayOfPatterns$$1[i$$3];
    var v424 = "[" + v707;
    var v44 = v424 + "]";
    var re = new RegExp(v44, "gi");
    var j$$1 = i$$3 + 1;
    var v425 = arrayOfPatterns$$1.length;
    var v46 = j$$1 < v425;
    for(;v46;) {
      var v708 = arrayOfPatterns$$1[j$$1];
      var v426 = v708.search(re);
      var v45 = v426 != -1;
      if(v45) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v427 = arrayOfPatterns$$1.length;
      v46 = j$$1 < v427
    }
    i$$3 = i$$3 + 1;
    var v428 = arrayOfPatterns$$1.length;
    v47 = i$$3 < v428
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v429 = arrayOfPatterns$$2.length;
  var v50 = z$$4 < v429;
  for(;v50;) {
    var v709 = arrayOfPatterns$$2[z$$4];
    var v430 = v709.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v48 = v430 == -1;
    if(v48) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    var v710 = arrayOfPatterns$$2[z$$4];
    var v431 = moreExpressionCheck(v710);
    var v49 = v431 == false;
    if(v49) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v432 = arrayOfPatterns$$2.length;
    v50 = z$$4 < v432
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v840 = getSequenceFromFasta(text$$7);
  var v711 = v840.replace(/[^A-Za-z]/g, "");
  var v433 = v711.length;
  var v52 = v433 > maxInput;
  if(v52) {
    var v434 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v51 = v434 + " characters.";
    alert(v51);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v435 = text$$8.length;
  var v54 = v435 > maxInput$$1;
  if(v54) {
    var v436 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v53 = v436 + " characters.";
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
  var v437 = alignArray.length;
  var v61 = v437 < 3;
  if(v61) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v438 = alignArray.length;
  var v63 = i$$4 < v438;
  for(;v63;) {
    var v712 = alignArray[i$$4];
    var v439 = v712.search(/[^\s]+\s/);
    var v62 = v439 == -1;
    if(v62) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v440 = alignArray.length;
    v63 = i$$4 < v440
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
  var v441 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v66 = v441 != -1;
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
  var v442 = sequence$$2.length;
  var v67 = "&gt;results for " + v442;
  var stringToReturn = v67 + " residue sequence ";
  var v443 = fastaSequenceTitle.search(/[^\s]/);
  var v69 = v443 != -1;
  if(v69) {
    var v444 = stringToReturn + '"';
    var v68 = v444 + fastaSequenceTitle;
    stringToReturn = v68 + '"'
  }
  var v445 = stringToReturn + ' starting "';
  var v446 = sequence$$2.substring(0, 10);
  var v70 = v445 + v446;
  stringToReturn = v70 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v447 = sequenceOne.length;
  var v71 = "Search results for " + v447;
  var stringToReturn$$1 = v71 + " residue sequence ";
  var v448 = fastaSequenceTitleOne.search(/[^\s]/);
  var v73 = v448 != -1;
  if(v73) {
    var v449 = stringToReturn$$1 + '"';
    var v72 = v449 + fastaSequenceTitleOne;
    stringToReturn$$1 = v72 + '"'
  }
  var v450 = stringToReturn$$1 + ' starting "';
  var v451 = sequenceOne.substring(0, 10);
  var v74 = v450 + v451;
  stringToReturn$$1 = v74 + '"\n';
  var v452 = stringToReturn$$1 + "and ";
  var v453 = sequenceTwo.length;
  var v75 = v452 + v453;
  stringToReturn$$1 = v75 + " residue sequence ";
  var v454 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v77 = v454 != -1;
  if(v77) {
    var v455 = stringToReturn$$1 + '"';
    var v76 = v455 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v76 + '"'
  }
  var v456 = stringToReturn$$1 + ' starting "';
  var v457 = sequenceTwo.substring(0, 10);
  var v78 = v456 + v457;
  stringToReturn$$1 = v78 + '"';
  var v79 = '<div class="info">' + stringToReturn$$1;
  return v79 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v80 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v80);
  var j$$2 = 0;
  var v458 = arrayOfPatterns$$3.length;
  var v83 = j$$2 < v458;
  for(;v83;) {
    var v81 = geneticCodeMatchExp$$1;
    var v82 = j$$2;
    var v841 = arrayOfPatterns$$3[j$$2];
    var v713 = v841.match(/\/.+\//);
    var v459 = v713 + "gi";
    var v1106 = eval(v459);
    v81[v82] = v1106;
    j$$2 = j$$2 + 1;
    var v460 = arrayOfPatterns$$3.length;
    v83 = j$$2 < v460
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v84 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v84);
  var j$$3 = 0;
  var v461 = arrayOfPatterns$$4.length;
  var v89 = j$$3 < v461;
  for(;v89;) {
    var v85 = geneticCodeMatchResult$$1;
    var v86 = j$$3;
    var v714 = arrayOfPatterns$$4[j$$3];
    var v462 = v714.match(/=[a-zA-Z\*]/);
    var v1107 = v462.toString();
    v85[v86] = v1107;
    var v87 = geneticCodeMatchResult$$1;
    var v88 = j$$3;
    var v463 = geneticCodeMatchResult$$1[j$$3];
    var v1108 = v463.replace(/=/g, "");
    v87[v88] = v1108;
    j$$3 = j$$3 + 1;
    var v464 = arrayOfPatterns$$4.length;
    v89 = j$$3 < v464
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v465 = sequence$$3.length;
  var v90 = "Results for " + v465;
  var stringToReturn$$2 = v90 + " residue sequence ";
  var v466 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v92 = v466 != -1;
  if(v92) {
    var v467 = stringToReturn$$2 + '"';
    var v91 = v467 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v91 + '"'
  }
  var v468 = stringToReturn$$2 + ' starting "';
  var v469 = sequence$$3.substring(0, 10);
  var v93 = v468 + v469;
  stringToReturn$$2 = v93 + '"';
  var v94 = '<div class="info">' + stringToReturn$$2;
  return v94 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v715 = "Results for " + topology;
  var v470 = v715 + " ";
  var v471 = sequence$$4.length;
  var v95 = v470 + v471;
  var stringToReturn$$3 = v95 + " residue sequence ";
  var v472 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v97 = v472 != -1;
  if(v97) {
    var v473 = stringToReturn$$3 + '"';
    var v96 = v473 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v96 + '"'
  }
  var v474 = stringToReturn$$3 + ' starting "';
  var v475 = sequence$$4.substring(0, 10);
  var v98 = v474 + v475;
  stringToReturn$$3 = v98 + '"';
  var v99 = '<div class="info">' + stringToReturn$$3;
  return v99 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v476 = sequenceOne$$1.length;
  var v100 = "Alignment results for " + v476;
  var stringToReturn$$4 = v100 + " residue sequence ";
  var v477 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v102 = v477 != -1;
  if(v102) {
    var v478 = stringToReturn$$4 + '"';
    var v101 = v478 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v101 + '"'
  }
  var v479 = stringToReturn$$4 + ' starting "';
  var v480 = sequenceOne$$1.substring(0, 10);
  var v103 = v479 + v480;
  stringToReturn$$4 = v103 + '"\n';
  var v481 = stringToReturn$$4 + "and ";
  var v482 = sequenceTwo$$1.length;
  var v104 = v481 + v482;
  stringToReturn$$4 = v104 + " residue sequence ";
  var v483 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v106 = v483 != -1;
  if(v106) {
    var v484 = stringToReturn$$4 + '"';
    var v105 = v484 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v105 + '"'
  }
  var v485 = stringToReturn$$4 + ' starting "';
  var v486 = sequenceTwo$$1.substring(0, 10);
  var v107 = v485 + v486;
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
    var v487 = Math.random();
    var v488 = components.length;
    var v109 = v487 * v488;
    tempNum = Math.floor(v109);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4 = j$$4 + 1;
    v110 = j$$4 < lengthOut
  }
  return sequenceArray.join("")
}
function getSequenceFromFasta(sequenceRecord) {
  var v489 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v111 = v489 != -1;
  if(v111) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "")
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v490 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v113 = v490 != -1;
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
  var v716 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v491 = v716 != -1;
  var v718 = !v491;
  if(v718) {
    var v842 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    var v717 = v842 != -1;
    var v844 = !v717;
    if(v844) {
      var v933 = expressionToCheck.search(/\[\]/);
      var v843 = v933 != -1;
      var v935 = !v843;
      if(v935) {
        var v989 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
        var v934 = v989 != -1;
        var v991 = !v934;
        if(v991) {
          var v1024 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
          var v990 = v1024 != -1;
          var v1026 = !v990;
          if(v1026) {
            var v1043 = expressionToCheck.search(/\|\|/);
            var v1025 = v1043 != -1;
            var v1045 = !v1025;
            if(v1045) {
              var v1055 = expressionToCheck.search(/\/\|/);
              var v1044 = v1055 != -1;
              var v1057 = !v1044;
              if(v1057) {
                var v1065 = expressionToCheck.search(/\|\//);
                var v1056 = v1065 != -1;
                var v1067 = !v1056;
                if(v1067) {
                  var v1074 = expressionToCheck.search(/\[.\]/);
                  var v1066 = v1074 != -1;
                  var v1076 = !v1066;
                  if(v1076) {
                    var v1081 = expressionToCheck.search(/\</);
                    var v1075 = v1081 != -1;
                    var v1083 = !v1075;
                    if(v1083) {
                      var v1082 = expressionToCheck.search(/\>/);
                      v1075 = v1082 != -1
                    }
                    v1066 = v1075
                  }
                  v1056 = v1066
                }
                v1044 = v1056
              }
              v1025 = v1044
            }
            v990 = v1025
          }
          v934 = v990
        }
        v843 = v934
      }
      v717 = v843
    }
    v491 = v717
  }
  var v114 = v491;
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
  var v845 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v719 = v845 + "<head>\n";
  var v492 = v719 + "<title>Sequence Manipulation Suite</title>\n";
  var v120 = v492 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v119.write(v120);
  if(isColor) {
    var v121 = outputWindow.document;
    var v1096 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1092 = v1096 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1088 = v1092 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1084 = v1088 + "div.info {font-weight: bold}\n";
    var v1077 = v1084 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1068 = v1077 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v1058 = v1068 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v1046 = v1058 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1027 = v1046 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v992 = v1027 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v936 = v992 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v846 = v936 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v720 = v846 + "td.many {color: #000000}\n";
    var v493 = v720 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v122 = v493 + "</style>\n";
    v121.write(v122)
  }else {
    var v123 = outputWindow.document;
    var v1100 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1097 = v1100 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1093 = v1097 + "div.title {display: none}\n";
    var v1089 = v1093 + "div.info {font-weight: bold}\n";
    var v1085 = v1089 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1078 = v1085 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1069 = v1078 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v1059 = v1069 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1047 = v1059 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1028 = v1047 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v993 = v1028 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v937 = v993 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v847 = v937 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v721 = v847 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v494 = v721 + "img {display: none}\n";
    var v124 = v494 + "</style>\n";
    v123.write(v124)
  }
  var v125 = outputWindow.document;
  var v848 = "</head>\n" + '<body class="main">\n';
  var v722 = v848 + '<div class="title">';
  var v495 = v722 + title$$7;
  var v126 = v495 + " results</div>\n";
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
  var v849 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v723 = v849 + "<head>\n";
  var v496 = v723 + "<title>Sequence Manipulation Suite</title>\n";
  var v128 = v496 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v127.write(v128);
  if(isBackground) {
    var v129 = outputWindow.document;
    var v1098 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1094 = v1098 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1090 = v1094 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1086 = v1090 + "div.info {font-weight: bold}\n";
    var v1079 = v1086 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v1070 = v1079 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v1060 = v1070 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v1048 = v1060 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v1029 = v1048 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v994 = v1029 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v938 = v994 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v850 = v938 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v724 = v850 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v497 = v724 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v130 = v497 + "</style>\n";
    v129.write(v130)
  }else {
    var v131 = outputWindow.document;
    var v1102 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1101 = v1102 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1099 = v1101 + "div.title {display: none}\n";
    var v1095 = v1099 + "div.info {font-weight: bold}\n";
    var v1091 = v1095 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1087 = v1091 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v1080 = v1087 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v1071 = v1080 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v1061 = v1071 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v1049 = v1061 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v1030 = v1049 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v995 = v1030 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v939 = v995 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v851 = v939 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v725 = v851 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v498 = v725 + "img {display: none}\n";
    var v132 = v498 + "</style>\n";
    v131.write(v132)
  }
  var v133 = outputWindow.document;
  var v852 = "</head>\n" + '<body class="main">\n';
  var v726 = v852 + '<div class="title">';
  var v499 = v726 + title$$9;
  var v134 = v499 + " results</div>\n";
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
  var v500 = dnaSequence$$1.search(/./);
  var v135 = v500 != -1;
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
  var v501 = testArray[0];
  var v139 = v501 != testString;
  if(v139) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v502 = testString.search(re$$2);
  var v140 = v502 == -1;
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
  var v503 = testNum.toFixed(3);
  var v143 = v503 != 2489.824;
  if(v143) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v504 = testNum.toPrecision(5);
  var v144 = v504 != 2489.8;
  if(v144) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v505 = theNumber$$1.search(/\d/);
  var v145 = v505 == -1;
  if(v145) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v727 = emblFile.search(/ID/);
  var v506 = v727 == -1;
  var v729 = !v506;
  if(v729) {
    var v853 = emblFile.search(/AC/);
    var v728 = v853 == -1;
    var v855 = !v728;
    if(v855) {
      var v940 = emblFile.search(/DE/);
      var v854 = v940 == -1;
      var v942 = !v854;
      if(v942) {
        var v941 = emblFile.search(/SQ/);
        v854 = v941 == -1
      }
      v728 = v854
    }
    v506 = v728
  }
  var v146 = v506;
  if(v146) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v507 = theNumber$$2.search(/\d/);
  var v147 = v507 == -1;
  if(v147) {
    alert("Please enter a number.");
    return false
  }
  var v149 = theNumber$$2 > maxInput$$2;
  if(v149) {
    var v508 = "Please enter a number less than or equal to " + maxInput$$2;
    var v148 = v508 + ".";
    alert(v148);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v509 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v150 = v509 != -1;
  if(v150) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v510 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v151 = v510 != -1;
  if(v151) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v730 = genBankFile.search(/LOCUS/);
  var v511 = v730 == -1;
  var v732 = !v511;
  if(v732) {
    var v856 = genBankFile.search(/DEFINITION/);
    var v731 = v856 == -1;
    var v858 = !v731;
    if(v858) {
      var v943 = genBankFile.search(/ACCESSION/);
      var v857 = v943 == -1;
      var v945 = !v857;
      if(v945) {
        var v944 = genBankFile.search(/ORIGIN/);
        v857 = v944 == -1
      }
      v731 = v857
    }
    v511 = v731
  }
  var v152 = v511;
  if(v152) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v733 = genBankFile$$1.search(/LOCUS/);
  var v512 = v733 == -1;
  var v735 = !v512;
  if(v735) {
    var v859 = genBankFile$$1.search(/DEFINITION/);
    var v734 = v859 == -1;
    var v861 = !v734;
    if(v861) {
      var v946 = genBankFile$$1.search(/ACCESSION/);
      var v860 = v946 == -1;
      var v948 = !v860;
      if(v948) {
        var v947 = genBankFile$$1.search(/ORIGIN/);
        v860 = v947 == -1
      }
      v734 = v860
    }
    v512 = v734
  }
  var v153 = v512;
  if(v153) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v513 = genBankFile$$1.search(/FEATURES {13}/);
  var v154 = v513 == -1;
  if(v154) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v736 = emblFile$$1.search(/ID/);
  var v514 = v736 == -1;
  var v738 = !v514;
  if(v738) {
    var v862 = emblFile$$1.search(/AC/);
    var v737 = v862 == -1;
    var v864 = !v737;
    if(v864) {
      var v949 = emblFile$$1.search(/DE/);
      var v863 = v949 == -1;
      var v951 = !v863;
      if(v951) {
        var v950 = emblFile$$1.search(/SQ/);
        v863 = v950 == -1
      }
      v737 = v863
    }
    v514 = v737
  }
  var v155 = v514;
  if(v155) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v515 = emblFile$$1.search(/^FT/m);
  var v156 = v515 == -1;
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
    var v516 = basePerLine / groupSize;
    var v160 = j$$6 <= v516;
    for(;v160;) {
      var v159 = k < groupSize;
      for(;v159;) {
        var v517 = k + i$$5;
        var v158 = text$$10.charAt(v517);
        lineOfText = lineOfText + v158;
        k = k + 1;
        v159 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v518 = basePerLine / groupSize;
      v160 = j$$6 <= v518
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
    var v519 = adjustment < 0;
    if(v519) {
      v519 = adjusted >= 0
    }
    var v164 = v519;
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
    var v520 = basePerLine$$2 / groupSize$$2;
    var v171 = j$$7 <= v520;
    for(;v171;) {
      var v167 = k$$1 < groupSize$$2;
      for(;v167;) {
        var v521 = i$$6 + k$$1;
        var v165 = v521 >= stopBase$$2;
        if(v165) {
          break
        }
        var v522 = k$$1 + i$$6;
        var v166 = text$$12.charAt(v522);
        lineOfText$$1 = lineOfText$$1 + v166;
        k$$1 = k$$1 + 1;
        v167 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v169 = numberPosition$$1 == "above";
      if(v169) {
        var v523 = adjustNumbering(i$$6, numberingAdjustment);
        var v168 = rightNum(v523, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v168
      }
      var v170 = i$$6 >= stopBase$$2;
      if(v170) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v524 = basePerLine$$2 / groupSize$$2;
      v171 = j$$7 <= v524
    }
    var v194 = numberPosition$$1 == "left";
    if(v194) {
      var v172 = outputWindow.document;
      var v865 = adjustNumbering(lineNum, numberingAdjustment);
      var v739 = rightNum(v865, "", 8, tabIn$$3);
      var v525 = v739 + lineOfText$$1;
      var v173 = v525 + "\n";
      v172.write(v173);
      var v177 = strands$$1 == "two";
      if(v177) {
        var v174 = outputWindow.document;
        var v866 = adjustNumbering(lineNum, numberingAdjustment);
        var v740 = rightNum(v866, "", 8, tabIn$$3);
        var v741 = complement(lineOfText$$1);
        var v526 = v740 + v741;
        var v175 = v526 + "\n";
        v174.write(v175);
        var v176 = outputWindow.document;
        v176.write("\n")
      }
    }else {
      var v193 = numberPosition$$1 == "right";
      if(v193) {
        var v178 = outputWindow.document;
        var v742 = adjustNumbering(i$$6, numberingAdjustment);
        var v527 = lineOfText$$1 + v742;
        var v179 = v527 + "\n";
        v178.write(v179);
        var v183 = strands$$1 == "two";
        if(v183) {
          var v180 = outputWindow.document;
          var v743 = complement(lineOfText$$1);
          var v744 = adjustNumbering(i$$6, numberingAdjustment);
          var v528 = v743 + v744;
          var v181 = v528 + "\n";
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
            var v529 = complement(lineOfText$$1);
            var v189 = v529 + "\n";
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
    var v530 = basePerLine$$3 / groupSize$$3;
    var v202 = j$$8 <= v530;
    for(;v202;) {
      var v198 = k$$2 < groupSize$$3;
      for(;v198;) {
        var v531 = i$$7 + k$$2;
        var v196 = v531 >= stopBase$$3;
        if(v196) {
          break
        }
        var v532 = k$$2 + i$$7;
        var v197 = text$$13.charAt(v532);
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
      var v533 = basePerLine$$3 / groupSize$$3;
      v202 = j$$8 <= v533
    }
    var v213 = numberPosition$$2 == "left";
    if(v213) {
      var v203 = outputWindow.document;
      var v745 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v534 = v745 + lineOfText$$2;
      var v204 = v534 + "\n";
      v203.write(v204)
    }else {
      var v212 = numberPosition$$2 == "right";
      if(v212) {
        var v205 = outputWindow.document;
        var v535 = lineOfText$$2 + i$$7;
        var v206 = v535 + "\n";
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
  var v746 = sequence$$13.length;
  var v536 = v746 <= firstIndexToMutate;
  var v748 = !v536;
  if(v748) {
    var v747 = lastIndexToMutate < 0;
    var v867 = !v747;
    if(v867) {
      v747 = lastIndexToMutate <= firstIndexToMutate
    }
    v536 = v747
  }
  var v215 = v536;
  if(v215) {
    numMut = 0
  }
  var i$$8 = 0;
  var v223 = i$$8 < numMut;
  for(;v223;) {
    maxNum = sequence$$13.length;
    var v537 = Math.random();
    var v216 = v537 * maxNum;
    randNum = Math.floor(v216);
    var v538 = randNum < firstIndexToMutate;
    var v749 = !v538;
    if(v749) {
      v538 = randNum > lastIndexToMutate
    }
    var v217 = v538;
    if(v217) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v223 = i$$8 < numMut;
      continue
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for(;needNewChar;) {
      var v539 = Math.random();
      var v540 = components$$1.length;
      var v218 = v539 * v540;
      componentsIndex = Math.round(v218);
      var v541 = components$$1.length;
      var v219 = componentsIndex == v541;
      if(v219) {
        componentsIndex = 0
      }
      var v542 = components$$1[componentsIndex];
      var v220 = v542 != currentChar;
      if(v220) {
        needNewChar = false
      }
    }
    var v543 = sequence$$13.substring(0, randNum);
    var v544 = components$$1[componentsIndex];
    var v221 = v543 + v544;
    var v545 = randNum + 1;
    var v546 = sequence$$13.length;
    var v222 = sequence$$13.substring(v545, v546);
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
    var v547 = Math.random();
    var v548 = components$$2.length;
    var v226 = v547 * v548;
    tempNum$$1 = Math.floor(v226);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v549 = sequence$$14.length;
    var v229 = v549 == 60;
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
    var v868 = sequence$$15.length;
    var v750 = v868 - lookAhead;
    var v751 = sequence$$15.length;
    var v550 = sequence$$15.substring(v750, v751);
    var v234 = v550 + sequence$$15;
    var v235 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v234 + v235;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v237 = outputWindow.document;
  v237.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  var v238 = outputWindow.document;
  var v869 = '<tr><td class="title" width="200px">' + "Site:";
  var v752 = v869 + '</td><td class="title">';
  var v551 = v752 + "Positions:";
  var v239 = v551 + "</td></tr>\n";
  v238.write(v239);
  var i$$9 = 0;
  var v552 = arrayOfItems.length;
  var v255 = i$$9 < v552;
  for(;v255;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v553 = arrayOfItems[i$$9];
    var v240 = v553.match(/\/.+\//);
    matchExp = v240 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    var v870 = arrayOfItems[i$$9];
    var v753 = v870.match(/\)\D*\d+/);
    var v554 = v753.toString();
    var v241 = v554.replace(/\)\D*/, "");
    cutDistance = parseFloat(v241);
    var v247 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v247;) {
      var v242 = matchExp.lastIndex;
      matchPosition = v242 - cutDistance;
      var v555 = matchPosition >= lowerLimit;
      if(v555) {
        v555 = matchPosition < upperLimit
      }
      var v245 = v555;
      if(v245) {
        timesFound = timesFound + 1;
        var v243 = tempString$$1 + ", ";
        var v556 = matchPosition - shiftValue;
        var v244 = v556 + 1;
        tempString$$1 = v243 + v244
      }
      var v246 = matchExp;
      var v754 = matchExp.lastIndex;
      var v871 = RegExp.lastMatch;
      var v755 = v871.length;
      var v557 = v754 - v755;
      v246.lastIndex = v557 + 1;
      v247 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    var v558 = tempString$$1.search(/\d/);
    var v248 = v558 != -1;
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
    var v1050 = '<tr><td class="' + backGroundClass;
    var v1031 = v1050 + '">';
    var v1072 = arrayOfItems[i$$9];
    var v1062 = v1072.match(/\([^\(]+\)/);
    var v1051 = v1062.toString();
    var v1032 = v1051.replace(/\(|\)/g, "");
    var v996 = v1031 + v1032;
    var v952 = v996 + '</td><td class="';
    var v872 = v952 + backGroundClass;
    var v756 = v872 + '">';
    var v559 = v756 + tempString$$1;
    var v254 = v559 + "</td></tr>\n";
    v253.write(v254);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v560 = arrayOfItems.length;
    v255 = i$$9 < v560
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
  var v997 = '<tr><td class="title">' + "Pattern:";
  var v953 = v997 + '</td><td class="title">';
  var v873 = v953 + "Times found:";
  var v757 = v873 + '</td><td class="title">';
  var v561 = v757 + "Percentage:";
  var v259 = v561 + "</td></tr>\n";
  v258.write(v259);
  var i$$10 = 0;
  var v562 = arrayOfItems$$1.length;
  var v268 = i$$10 < v562;
  for(;v268;) {
    var tempNumber = 0;
    var v563 = arrayOfItems$$1[i$$10];
    var v260 = v563.match(/\/[^\/]+\//);
    var matchExp$$1 = v260 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    var v564 = sequence$$16.search(matchExp$$1);
    var v262 = v564 != -1;
    if(v262) {
      var v261 = sequence$$16.match(matchExp$$1);
      tempNumber = v261.length
    }
    var percentage = 0;
    var v758 = originalLength + 1;
    var v954 = arrayOfItems$$1[i$$10];
    var v874 = v954.match(/\d+/);
    var v759 = parseFloat(v874);
    var v565 = v758 - v759;
    var v265 = v565 > 0;
    if(v265) {
      var v263 = 100 * tempNumber;
      var v566 = originalLength + 1;
      var v875 = arrayOfItems$$1[i$$10];
      var v760 = v875.match(/\d+/);
      var v567 = parseFloat(v760);
      var v264 = v566 - v567;
      percentage = v263 / v264
    }
    var v266 = outputWindow.document;
    var v1073 = arrayOfItems$$1[i$$10];
    var v1063 = v1073.match(/\([^\(]+\)\b/);
    var v1052 = v1063.toString();
    var v1033 = v1052.replace(/\(|\)/g, "");
    var v998 = "<tr><td>" + v1033;
    var v955 = v998 + "</td><td>";
    var v876 = v955 + tempNumber;
    var v761 = v876 + "</td><td>";
    var v762 = percentage.toFixed(2);
    var v568 = v761 + v762;
    var v267 = v568 + "</td></tr>\n";
    v266.write(v267);
    i$$10 = i$$10 + 1;
    var v569 = arrayOfItems$$1.length;
    v268 = i$$10 < v569
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
  var v570 = sequence$$17.length;
  var v276 = v570 > 0;
  for(;v276;) {
    maxNum$$1 = sequence$$17.length;
    var v571 = Math.random();
    var v270 = v571 * maxNum$$1;
    randNum$$1 = Math.floor(v270);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v271 = randNum$$1 + 1;
    var v272 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v271, v272);
    sequence$$17 = tempString1 + tempString2;
    var v572 = tempSeq.length;
    var v275 = v572 == 60;
    if(v275) {
      var v273 = outputWindow.document;
      var v274 = tempSeq + "\n";
      v273.write(v274);
      tempSeq = ""
    }
    var v573 = sequence$$17.length;
    v276 = v573 > 0
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
  var v574 = testScript();
  var v279 = v574 == false;
  if(v279) {
    return false
  }
  var v1034 = theDocument.forms;
  var v999 = v1034[0];
  var v956 = v999.elements;
  var v877 = v956[0];
  var v763 = checkFormElement(v877);
  var v575 = v763 == false;
  var v765 = !v575;
  if(v765) {
    var v1064 = theDocument.forms;
    var v1053 = v1064[0];
    var v1035 = v1053.elements;
    var v1000 = v1035[0];
    var v957 = v1000.value;
    var v878 = checkSequenceLength(v957, maxInput$$3);
    var v764 = v878 == false;
    var v880 = !v764;
    if(v880) {
      var v1054 = theDocument.forms;
      var v1036 = v1054[0];
      var v1001 = v1036.elements;
      var v958 = v1001[1];
      var v879 = checkFormElement(v958);
      v764 = v879 == false
    }
    v575 = v764
  }
  var v280 = v575;
  if(v280) {
    return false
  }
  var v959 = theDocument.forms;
  var v881 = v959[0];
  var v766 = v881.elements;
  var v576 = v766[1];
  var v281 = v576.value;
  var arrayOfRanges = v281.split(/,/);
  var arrayOfStartAndEnd;
  var i$$11 = 0;
  var v577 = arrayOfRanges.length;
  var v287 = i$$11 < v577;
  for(;v287;) {
    var v282 = arrayOfRanges[i$$11];
    arrayOfStartAndEnd = v282.split(/\.\./);
    var v578 = arrayOfStartAndEnd.length;
    var v286 = v578 == 1;
    if(v286) {
      matchFound = true;
      var v579 = arrayOfStartAndEnd[0];
      var v580 = arrayOfStartAndEnd[0];
      var v283 = new Range(v579, v580);
      ranges.push(v283)
    }else {
      var v581 = arrayOfStartAndEnd.length;
      var v285 = v581 == 2;
      if(v285) {
        matchFound = true;
        var v582 = arrayOfStartAndEnd[0];
        var v583 = arrayOfStartAndEnd[1];
        var v284 = new Range(v582, v583);
        ranges.push(v284)
      }
    }
    i$$11 = i$$11 + 1;
    var v584 = arrayOfRanges.length;
    v287 = i$$11 < v584
  }
  var v288 = matchFound == false;
  if(v288) {
    alert("No ranges were entered.");
    return false
  }
  openWindow("Range Extractor Protein");
  openPre();
  var v960 = theDocument.forms;
  var v882 = v960[0];
  var v767 = v882.elements;
  var v585 = v767[0];
  var v289 = v585.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v289);
  i$$11 = 0;
  var v586 = arrayOfFasta$$1.length;
  var v295 = i$$11 < v586;
  for(;v295;) {
    var v290 = arrayOfFasta$$1[i$$11];
    newProtein = getSequenceFromFasta(v290);
    var v291 = arrayOfFasta$$1[i$$11];
    title = getTitleFromFasta(v291);
    newProtein = removeNonProteinAllowDegen(newProtein);
    var v292 = outputWindow.document;
    var v293 = getFastaTitleFromTitleAndSequence(title, newProtein);
    v292.write(v293);
    var v1037 = theDocument.forms;
    var v1002 = v1037[0];
    var v961 = v1002.elements;
    var v883 = v961[5];
    var v768 = v883.options;
    var v1038 = theDocument.forms;
    var v1003 = v1038[0];
    var v962 = v1003.elements;
    var v884 = v962[5];
    var v769 = v884.selectedIndex;
    var v587 = v768[v769];
    var v294 = v587.value;
    writeSequenceRanges(newProtein, ranges, v294);
    i$$11 = i$$11 + 1;
    var v588 = arrayOfFasta$$1.length;
    v295 = i$$11 < v588
  }
  closePre();
  closeWindow();
  return true
}
function writeSequenceRanges(sequence$$18, ranges$$1, segmentType) {
  var rangeGroup = new RangeGroup(segmentType);
  var v589 = sequence$$18.length;
  var v296 = v589 / 2;
  var center_base = Math.round(v296);
  var i$$12 = 0;
  var v590 = ranges$$1.length;
  var v310 = i$$12 < v590;
  for(;v310;) {
    var v297 = ranges$$1[i$$12];
    var v885 = ranges$$1[i$$12];
    var v770 = v885.start;
    var v591 = v770.toString();
    var v1109 = v591.replace(/start|begin/gi, 1);
    v297.start = v1109;
    var v298 = ranges$$1[i$$12];
    var v886 = ranges$$1[i$$12];
    var v771 = v886.start;
    var v592 = v771.toString();
    var v593 = sequence$$18.length;
    var v1110 = v592.replace(/stop|end/gi, v593);
    v298.start = v1110;
    var v299 = ranges$$1[i$$12];
    var v887 = ranges$$1[i$$12];
    var v772 = v887.start;
    var v594 = v772.toString();
    var v595 = sequence$$18.length;
    var v1111 = v594.replace(/length/gi, v595);
    v299.start = v1111;
    var v300 = ranges$$1[i$$12];
    var v888 = ranges$$1[i$$12];
    var v773 = v888.start;
    var v596 = v773.toString();
    var v1112 = v596.replace(/middle|center|centre/gi, center_base);
    v300.start = v1112;
    var v301 = ranges$$1[i$$12];
    var v889 = ranges$$1[i$$12];
    var v774 = v889.stop;
    var v597 = v774.toString();
    var v1113 = v597.replace(/start|begin/gi, 1);
    v301.stop = v1113;
    var v302 = ranges$$1[i$$12];
    var v890 = ranges$$1[i$$12];
    var v775 = v890.stop;
    var v598 = v775.toString();
    var v599 = sequence$$18.length;
    var v1114 = v598.replace(/stop|end/gi, v599);
    v302.stop = v1114;
    var v303 = ranges$$1[i$$12];
    var v891 = ranges$$1[i$$12];
    var v776 = v891.stop;
    var v600 = v776.toString();
    var v601 = sequence$$18.length;
    var v1115 = v600.replace(/length/gi, v601);
    v303.stop = v1115;
    var v304 = ranges$$1[i$$12];
    var v892 = ranges$$1[i$$12];
    var v777 = v892.stop;
    var v602 = v777.toString();
    var v1116 = v602.replace(/middle|center|centre/gi, center_base);
    v304.stop = v1116;
    try {
      var v305 = ranges$$1[i$$12];
      var v963 = ranges$$1[i$$12];
      var v893 = v963.start;
      var v778 = v893.toString();
      var v603 = eval(v778);
      var v1117 = parseInt(v603);
      v305.start = v1117
    }catch(e$$5) {
      var v779 = ranges$$1[i$$12];
      var v604 = v779.start;
      var v306 = "Could not evaluate the following expression: " + v604;
      alert(v306);
      return false
    }
    try {
      var v307 = ranges$$1[i$$12];
      var v964 = ranges$$1[i$$12];
      var v894 = v964.stop;
      var v780 = v894.toString();
      var v605 = eval(v780);
      var v1118 = parseInt(v605);
      v307.stop = v1118
    }catch(e$$6) {
      var v781 = ranges$$1[i$$12];
      var v606 = v781.stop;
      var v308 = "Could not evaluate the following expression: " + v606;
      alert(v308);
      return false
    }
    var v309 = ranges$$1[i$$12];
    rangeGroup.addRange(v309);
    i$$12 = i$$12 + 1;
    var v607 = ranges$$1.length;
    v310 = i$$12 < v607
  }
  rangeGroup.writeRanges(sequence$$18);
  return
}
function getSequence(sequence$$19) {
  var problem = false;
  var warnings = new Array;
  var v608 = this.start;
  var v609 = this.stop;
  var v325 = v608 == v609;
  if(v325) {
    var v610 = this.start;
    var v312 = v610 < 1;
    if(v312) {
      problem = true;
      var v782 = this.start;
      var v611 = "position value of " + v782;
      var v311 = v611 + " is less than 1";
      warnings.push(v311)
    }
    var v612 = this.start;
    var v613 = sequence$$19.length;
    var v314 = v612 > v613;
    if(v314) {
      problem = true;
      var v783 = this.start;
      var v614 = "position value of " + v783;
      var v313 = v614 + " is greater than the sequence length";
      warnings.push(v313)
    }
  }else {
    var v615 = this.start;
    var v316 = v615 < 1;
    if(v316) {
      problem = true;
      var v784 = this.start;
      var v616 = "position value of " + v784;
      var v315 = v616 + " is less than 1";
      warnings.push(v315)
    }
    var v617 = this.stop;
    var v318 = v617 < 1;
    if(v318) {
      problem = true;
      var v785 = this.stop;
      var v618 = "position value of " + v785;
      var v317 = v618 + " is less than 1";
      warnings.push(v317)
    }
    var v619 = this.start;
    var v620 = sequence$$19.length;
    var v320 = v619 > v620;
    if(v320) {
      problem = true;
      var v786 = this.start;
      var v621 = "position value of " + v786;
      var v319 = v621 + " is greater than the sequence length";
      warnings.push(v319)
    }
    var v622 = this.stop;
    var v623 = sequence$$19.length;
    var v322 = v622 > v623;
    if(v322) {
      problem = true;
      var v787 = this.stop;
      var v624 = "position value of " + v787;
      var v321 = v624 + " is greater than the sequence length";
      warnings.push(v321)
    }
    var v625 = this.start;
    var v626 = this.stop;
    var v324 = v625 > v626;
    if(v324) {
      problem = true;
      var v895 = this.start;
      var v788 = "stop position is less than start position in range " + v895;
      var v627 = v788 + " to ";
      var v628 = this.stop;
      var v323 = v627 + v628;
      warnings.push(v323)
    }
  }
  if(problem) {
    var v629 = warnings.join(",\n");
    var v326 = "An entry was skipped because of the following:\n" + v629;
    alert(v326);
    return false
  }else {
    var v630 = this.start;
    var v631 = this.stop;
    var v330 = v630 == v631;
    if(v330) {
      var v632 = this.start;
      var v327 = v632 - 1;
      return sequence$$19.charAt(v327)
    }else {
      var v633 = this.start;
      var v328 = v633 - 1;
      var v329 = this.stop;
      return sequence$$19.substring(v328, v329)
    }
  }
  return
}
function getTitle() {
  var v634 = this.start;
  var v635 = this.stop;
  var v334 = v634 == v635;
  if(v334) {
    var v331 = this.start;
    return"&gt;residue " + v331
  }else {
    var v789 = this.start;
    var v636 = "&gt;residue " + v789;
    var v332 = v636 + " to ";
    var v333 = this.stop;
    return v332 + v333
  }
  return
}
function Range(start$$4, stop) {
  this.start = start$$4;
  this.stop = stop;
  return
}
function addRange(range$$5) {
  var v335 = this.ranges;
  v335.push(range$$5);
  return
}
function writeRanges(sequence$$20) {
  function v9(str$$16, p1$$9, offset$$21, s$$11) {
    var v637 = p1$$9.length;
    var v336 = offset$$21 + v637;
    return sequence$$20.substring(offset$$21, v336)
  }
  function v8(str$$15, p1$$8, p2$$3, offset$$20, s$$10) {
    var v638 = p1$$8.length;
    var v790 = p1$$8.length;
    var v791 = p2$$3.length;
    var v639 = v790 + v791;
    var v337 = sequence$$20.substring(v638, v639);
    return p1$$8 + v337
  }
  function v7(str$$14, p1$$7, offset$$19, s$$9) {
    var v338 = ["A", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "Y"];
    var v339 = p1$$7.length;
    return getRandomSequence(v338, v339)
  }
  function v6(str$$13, p1$$6, p2$$2, offset$$18, s$$8) {
    var v640 = ["A", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "Y"];
    var v641 = p2$$2.length;
    var v340 = getRandomSequence(v640, v641);
    return p1$$6 + v340
  }
  function v5(str$$12, p1$$5, offset$$17, s$$7) {
    return p1$$5.toLowerCase()
  }
  function v4(str$$11, p1$$4, p2$$1, offset$$16, s$$6) {
    var v341 = p2$$1.toLowerCase();
    return p1$$4 + v341
  }
  function v3(str$$10, p1$$3, offset$$15, s$$5) {
    return p1$$3.toUpperCase()
  }
  function v2(str$$9, p1$$2, p2, offset$$14, s$$4) {
    var v342 = p2.toUpperCase();
    return p1$$2 + v342
  }
  var sequenceArray$$1 = new Array;
  var v642 = this.type;
  var v348 = v642 == "new_sequence";
  if(v348) {
    var i$$13 = 0;
    var v792 = this.ranges;
    var v643 = v792.length;
    var v345 = i$$13 < v643;
    for(;v345;) {
      var v896 = this.ranges;
      var v793 = v896[i$$13];
      var v644 = v793.getSequence(sequence$$20);
      var v344 = v644 != "";
      if(v344) {
        var v794 = this.ranges;
        var v645 = v794[i$$13];
        var v343 = v645.getSequence(sequence$$20);
        sequenceArray$$1.push(v343)
      }
      i$$13 = i$$13 + 1;
      var v795 = this.ranges;
      var v646 = v795.length;
      v345 = i$$13 < v646
    }
    var v346 = outputWindow.document;
    var v796 = sequenceArray$$1.join("");
    var v647 = addReturns(v796);
    var v347 = v647 + "\n\n";
    v346.write(v347);
    return true
  }
  var v648 = this.type;
  var v355 = v648 == "separate";
  if(v355) {
    i$$13 = 0;
    var v797 = this.ranges;
    var v649 = v797.length;
    var v354 = i$$13 < v649;
    for(;v354;) {
      var v897 = this.ranges;
      var v798 = v897[i$$13];
      var v650 = v798.getSequence(sequence$$20);
      var v353 = v650 != "";
      if(v353) {
        var v349 = outputWindow.document;
        var v898 = this.ranges;
        var v799 = v898[i$$13];
        var v651 = v799.getTitle();
        var v350 = v651 + "\n";
        v349.write(v350);
        var v351 = outputWindow.document;
        var v965 = this.ranges;
        var v899 = v965[i$$13];
        var v800 = v899.getSequence(sequence$$20);
        var v652 = addReturns(v800);
        var v352 = v652 + "\n\n";
        v351.write(v352)
      }
      i$$13 = i$$13 + 1;
      var v801 = this.ranges;
      var v653 = v801.length;
      v354 = i$$13 < v653
    }
    return true
  }
  var v654 = this.type;
  var v363 = v654 == "uppercased";
  if(v363) {
    var re$$3;
    sequence$$20 = sequence$$20.toLowerCase();
    i$$13 = 0;
    var v802 = this.ranges;
    var v655 = v802.length;
    var v360 = i$$13 < v655;
    for(;v360;) {
      var v900 = this.ranges;
      var v803 = v900[i$$13];
      var v656 = v803.getSequence(sequence$$20);
      var v359 = v656 != "";
      if(v359) {
        var v901 = this.ranges;
        var v804 = v901[i$$13];
        var v657 = v804.start;
        var v358 = v657 > 1;
        if(v358) {
          var v1039 = this.ranges;
          var v1004 = v1039[i$$13];
          var v966 = v1004.start;
          var v902 = v966 - 1;
          var v805 = "(.{" + v902;
          var v658 = v805 + "})\\B(.{";
          var v1005 = this.ranges;
          var v967 = v1005[i$$13];
          var v903 = v967.stop;
          var v1006 = this.ranges;
          var v968 = v1006[i$$13];
          var v904 = v968.start;
          var v806 = v903 - v904;
          var v659 = v806 + 1;
          var v356 = v658 + v659;
          re$$3 = v356 + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = sequence$$20.replace(re$$3, v2)
        }else {
          var v1007 = this.ranges;
          var v969 = v1007[i$$13];
          var v905 = v969.stop;
          var v1008 = this.ranges;
          var v970 = v1008[i$$13];
          var v906 = v970.start;
          var v807 = v905 - v906;
          var v660 = v807 + 1;
          var v357 = "(.{" + v660;
          re$$3 = v357 + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = sequence$$20.replace(re$$3, v3)
        }
      }
      i$$13 = i$$13 + 1;
      var v808 = this.ranges;
      var v661 = v808.length;
      v360 = i$$13 < v661
    }
    var v361 = outputWindow.document;
    var v662 = addReturns(sequence$$20);
    var v362 = v662 + "\n\n";
    v361.write(v362);
    return true
  }
  var v663 = this.type;
  var v371 = v663 == "lowercased";
  if(v371) {
    sequence$$20 = sequence$$20.toUpperCase();
    i$$13 = 0;
    var v809 = this.ranges;
    var v664 = v809.length;
    var v368 = i$$13 < v664;
    for(;v368;) {
      var v907 = this.ranges;
      var v810 = v907[i$$13];
      var v665 = v810.getSequence(sequence$$20);
      var v367 = v665 != "";
      if(v367) {
        var v908 = this.ranges;
        var v811 = v908[i$$13];
        var v666 = v811.start;
        var v366 = v666 > 1;
        if(v366) {
          var v1040 = this.ranges;
          var v1009 = v1040[i$$13];
          var v971 = v1009.start;
          var v909 = v971 - 1;
          var v812 = "(.{" + v909;
          var v667 = v812 + "})\\B(.{";
          var v1010 = this.ranges;
          var v972 = v1010[i$$13];
          var v910 = v972.stop;
          var v1011 = this.ranges;
          var v973 = v1011[i$$13];
          var v911 = v973.start;
          var v813 = v910 - v911;
          var v668 = v813 + 1;
          var v364 = v667 + v668;
          re$$3 = v364 + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = sequence$$20.replace(re$$3, v4)
        }else {
          var v1012 = this.ranges;
          var v974 = v1012[i$$13];
          var v912 = v974.stop;
          var v1013 = this.ranges;
          var v975 = v1013[i$$13];
          var v913 = v975.start;
          var v814 = v912 - v913;
          var v669 = v814 + 1;
          var v365 = "(.{" + v669;
          re$$3 = v365 + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = sequence$$20.replace(re$$3, v5)
        }
      }
      i$$13 = i$$13 + 1;
      var v815 = this.ranges;
      var v670 = v815.length;
      v368 = i$$13 < v670
    }
    var v369 = outputWindow.document;
    var v671 = addReturns(sequence$$20);
    var v370 = v671 + "\n\n";
    v369.write(v370);
    return true
  }
  var v672 = this.type;
  var v379 = v672 == "randomized";
  if(v379) {
    i$$13 = 0;
    var v816 = this.ranges;
    var v673 = v816.length;
    var v376 = i$$13 < v673;
    for(;v376;) {
      var v914 = this.ranges;
      var v817 = v914[i$$13];
      var v674 = v817.getSequence(sequence$$20);
      var v375 = v674 != "";
      if(v375) {
        var v915 = this.ranges;
        var v818 = v915[i$$13];
        var v675 = v818.start;
        var v374 = v675 > 1;
        if(v374) {
          var v1041 = this.ranges;
          var v1014 = v1041[i$$13];
          var v976 = v1014.start;
          var v916 = v976 - 1;
          var v819 = "(.{" + v916;
          var v676 = v819 + "})\\B(.{";
          var v1015 = this.ranges;
          var v977 = v1015[i$$13];
          var v917 = v977.stop;
          var v1016 = this.ranges;
          var v978 = v1016[i$$13];
          var v918 = v978.start;
          var v820 = v917 - v918;
          var v677 = v820 + 1;
          var v372 = v676 + v677;
          re$$3 = v372 + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = sequence$$20.replace(re$$3, v6)
        }else {
          var v1017 = this.ranges;
          var v979 = v1017[i$$13];
          var v919 = v979.stop;
          var v1018 = this.ranges;
          var v980 = v1018[i$$13];
          var v920 = v980.start;
          var v821 = v919 - v920;
          var v678 = v821 + 1;
          var v373 = "(.{" + v678;
          re$$3 = v373 + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = sequence$$20.replace(re$$3, v7)
        }
      }
      i$$13 = i$$13 + 1;
      var v822 = this.ranges;
      var v679 = v822.length;
      v376 = i$$13 < v679
    }
    var v377 = outputWindow.document;
    var v680 = addReturns(sequence$$20);
    var v378 = v680 + "\n\n";
    v377.write(v378);
    return true
  }
  var v681 = this.type;
  var v389 = v681 == "preserved";
  if(v389) {
    var v380 = ["A", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "Y"];
    var v381 = sequence$$20.length;
    var randomSequence = getRandomSequence(v380, v381);
    i$$13 = 0;
    var v823 = this.ranges;
    var v682 = v823.length;
    var v386 = i$$13 < v682;
    for(;v386;) {
      var v921 = this.ranges;
      var v824 = v921[i$$13];
      var v683 = v824.getSequence(sequence$$20);
      var v385 = v683 != "";
      if(v385) {
        var v922 = this.ranges;
        var v825 = v922[i$$13];
        var v684 = v825.start;
        var v384 = v684 > 1;
        if(v384) {
          var v1042 = this.ranges;
          var v1019 = v1042[i$$13];
          var v981 = v1019.start;
          var v923 = v981 - 1;
          var v826 = "(.{" + v923;
          var v685 = v826 + "})\\B(.{";
          var v1020 = this.ranges;
          var v982 = v1020[i$$13];
          var v924 = v982.stop;
          var v1021 = this.ranges;
          var v983 = v1021[i$$13];
          var v925 = v983.start;
          var v827 = v924 - v925;
          var v686 = v827 + 1;
          var v382 = v685 + v686;
          re$$3 = v382 + "})";
          re$$3 = new RegExp(re$$3);
          randomSequence = randomSequence.replace(re$$3, v8)
        }else {
          var v1022 = this.ranges;
          var v984 = v1022[i$$13];
          var v926 = v984.stop;
          var v1023 = this.ranges;
          var v985 = v1023[i$$13];
          var v927 = v985.start;
          var v828 = v926 - v927;
          var v687 = v828 + 1;
          var v383 = "(.{" + v687;
          re$$3 = v383 + "})";
          re$$3 = new RegExp(re$$3);
          randomSequence = randomSequence.replace(re$$3, v9)
        }
      }
      i$$13 = i$$13 + 1;
      var v829 = this.ranges;
      var v688 = v829.length;
      v386 = i$$13 < v688
    }
    var v387 = outputWindow.document;
    var v689 = addReturns(randomSequence);
    var v388 = v689 + "\n\n";
    v387.write(v388);
    return true
  }
  return
}
function RangeGroup(type$$25) {
  this.type = type$$25;
  var v1119 = new Array;
  this.ranges = v1119;
  return
}
new Range(0, 0);
var v390 = Range.prototype;
v390.getSequence = getSequence;
var v391 = Range.prototype;
v391.getTitle = getTitle;
new RangeGroup("", "");
var v392 = RangeGroup.prototype;
v392.addRange = addRange;
var v393 = RangeGroup.prototype;
v393.writeRanges = writeRanges;
document.onload = v10;
var v394 = document.getElementById("submitbtn");
v394.onclick = v11;
var v395 = document.getElementById("clearbtn");
v395.onclick = v12;

}

