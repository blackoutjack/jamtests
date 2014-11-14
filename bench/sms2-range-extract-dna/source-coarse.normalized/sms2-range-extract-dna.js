introspect(JAM.policy.pFull) {
function v12() {
  var v864 = document.forms;
  var v719 = v864[0];
  var v412 = v719.elements;
  var v13 = v412[0];
  v13.value = " ";
  var v865 = document.forms;
  var v720 = v865[0];
  var v413 = v720.elements;
  var v14 = v413[1];
  v14.value = " ";
  return;
}
function v11() {
  try {
    rangeExtract(document);
  } catch (e$$7) {
    var v15 = "The following error was encountered: " + e$$7;
    alert(v15);
  }
  return;
}
function v10() {
  var v414 = document.main_form;
  var v16 = v414.main_submit;
  v16.focus();
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
  var v17 = arrayOfSequences[0];
  var lengthOfAlign = v17.length;
  var v415 = arrayOfSequences.length;
  var v18 = v415 < 2;
  if (v18) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v416 = arrayOfTitles.length;
  var v20 = i$$1 < v416;
  for (;v20;) {
    var v968 = arrayOfTitles[i$$1];
    var v866 = v968.search(/\S/);
    var v721 = v866 == -1;
    var v868 = !v721;
    if (v868) {
      var v969 = arrayOfSequences[i$$1];
      var v867 = v969.search(/\S/);
      v721 = v867 == -1;
    }
    var v417 = v721;
    var v723 = !v417;
    if (v723) {
      var v869 = arrayOfSequences[i$$1];
      var v722 = v869.length;
      v417 = v722 != lengthOfAlign;
    }
    var v19 = v417;
    if (v19) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v418 = arrayOfTitles.length;
    v20 = i$$1 < v418;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v1030 = codonTable.search(/AmAcid/);
  var v970 = v1030 == -1;
  var v1032 = !v970;
  if (v1032) {
    var v1031 = codonTable.search(/Codon/);
    v970 = v1031 == -1;
  }
  var v870 = v970;
  var v972 = !v870;
  if (v972) {
    var v971 = codonTable.search(/Number/);
    v870 = v971 == -1;
  }
  var v724 = v870;
  var v872 = !v724;
  if (v872) {
    var v871 = codonTable.search(/\/1000/);
    v724 = v871 == -1;
  }
  var v419 = v724;
  var v726 = !v419;
  if (v726) {
    var v725 = codonTable.search(/Fraction\s*\.\./);
    v419 = v725 == -1;
  }
  var v21 = v419;
  if (v21) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v727 = formElement.value;
  var v420 = v727.search(/\S/);
  var v22 = v420 == -1;
  if (v22) {
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
  var v421 = arrayOfPatterns.length;
  var v25 = z$$2 < v421;
  for (;v25;) {
    var v728 = arrayOfPatterns[z$$2];
    var v422 = v728.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v23 = v422 == -1;
    if (v23) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v729 = arrayOfPatterns[z$$2];
    var v423 = moreExpressionCheck(v729);
    var v24 = v423 == false;
    if (v24) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v424 = arrayOfPatterns.length;
    v25 = z$$2 < v424;
  }
  var v26 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v26);
  var v27 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v27);
  var j = 0;
  var v425 = arrayOfPatterns.length;
  var v31 = j < v425;
  for (;v31;) {
    var v730 = arrayOfPatterns[j];
    var v426 = v730.match(/\/.+\//);
    var v28 = v426 + "gi";
    var v1153 = eval(v28);
    geneticCodeMatchExp[j] = v1153;
    var v427 = arrayOfPatterns[j];
    var v29 = v427.match(/=[a-zA-Z\*]/);
    var v1154 = v29.toString();
    geneticCodeMatchResult[j] = v1154;
    var v30 = geneticCodeMatchResult[j];
    var v1155 = v30.replace(/=/g, "");
    geneticCodeMatchResult[j] = v1155;
    j++;
    var v428 = arrayOfPatterns.length;
    v31 = j < v428;
  }
  var i$$2 = 0;
  var v731 = testSequence.length;
  var v429 = v731 - 3;
  var v38 = i$$2 <= v429;
  for (;v38;) {
    var v32 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v32);
    j = 0;
    var v430 = geneticCodeMatchExp.length;
    var v36 = j < v430;
    for (;v36;) {
      var v732 = geneticCodeMatchExp[j];
      var v431 = codon.search(v732);
      var v35 = v431 != -1;
      if (v35) {
        var v34 = oneMatch == true;
        if (v34) {
          var v432 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v33 = v432 + ".";
          alert(v33);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v433 = geneticCodeMatchExp.length;
      v36 = j < v433;
    }
    var v37 = oneMatch == false;
    if (v37) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v733 = testSequence.length;
    var v434 = v733 - 3;
    v38 = i$$2 <= v434;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v435 = arrayOfPatterns$$1.length;
  var v40 = z$$3 < v435;
  for (;v40;) {
    var v734 = arrayOfPatterns$$1[z$$3];
    var v436 = v734.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v39 = v436 != -1;
    if (v39) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v437 = arrayOfPatterns$$1.length;
    v40 = z$$3 < v437;
  }
  var i$$3 = 0;
  var v438 = arrayOfPatterns$$1.length;
  var v44 = i$$3 < v438;
  for (;v44;) {
    var v735 = arrayOfPatterns$$1[i$$3];
    var v439 = "[" + v735;
    var v41 = v439 + "]";
    var re = new RegExp(v41, "gi");
    var j$$1 = i$$3 + 1;
    var v440 = arrayOfPatterns$$1.length;
    var v43 = j$$1 < v440;
    for (;v43;) {
      var v736 = arrayOfPatterns$$1[j$$1];
      var v441 = v736.search(re);
      var v42 = v441 != -1;
      if (v42) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v442 = arrayOfPatterns$$1.length;
      v43 = j$$1 < v442;
    }
    i$$3++;
    var v443 = arrayOfPatterns$$1.length;
    v44 = i$$3 < v443;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v444 = arrayOfPatterns$$2.length;
  var v47 = z$$4 < v444;
  for (;v47;) {
    var v737 = arrayOfPatterns$$2[z$$4];
    var v445 = v737.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v45 = v445 == -1;
    if (v45) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v738 = arrayOfPatterns$$2[z$$4];
    var v446 = moreExpressionCheck(v738);
    var v46 = v446 == false;
    if (v46) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v447 = arrayOfPatterns$$2.length;
    v47 = z$$4 < v447;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v873 = getSequenceFromFasta(text$$7);
  var v739 = v873.replace(/[^A-Za-z]/g, "");
  var v448 = v739.length;
  var v49 = v448 > maxInput;
  if (v49) {
    var v449 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v48 = v449 + " characters.";
    alert(v48);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v450 = text$$8.length;
  var v51 = v450 > maxInput$$1;
  if (v51) {
    var v451 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v50 = v451 + " characters.";
    alert(v50);
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
  var v52 = outputWindow.document;
  v52.write("</form>");
  return true;
}
function closePre() {
  var v53 = outputWindow.document;
  v53.write("</div>");
  var v54 = outputWindow.document;
  v54.write("</pre>\n");
  return;
}
function closeTextArea() {
  var v55 = outputWindow.document;
  v55.write("</textarea>");
  return true;
}
function closeWindow() {
  var v56 = outputWindow.document;
  v56.write("</body>\n</html>\n");
  outputWindow.status = "Done.";
  var v57 = outputWindow.document;
  v57.close();
  return true;
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
  var v452 = alignArray.length;
  var v58 = v452 < 3;
  if (v58) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v453 = alignArray.length;
  var v60 = i$$4 < v453;
  for (;v60;) {
    var v740 = alignArray[i$$4];
    var v454 = v740.search(/[^\s]+\s/);
    var v59 = v454 == -1;
    if (v59) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v455 = alignArray.length;
    v60 = i$$4 < v455;
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
  var v456 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v63 = v456 != -1;
  if (v63) {
    var v62 = matchArray = re$$1.exec(sequenceData);
    for (;v62;) {
      var v61 = matchArray[0];
      arrayOfFasta.push(v61);
      v62 = matchArray = re$$1.exec(sequenceData);
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v457 = sequence$$2.length;
  var v64 = "&gt;results for " + v457;
  var stringToReturn = v64 + " residue sequence ";
  var v458 = fastaSequenceTitle.search(/[^\s]/);
  var v66 = v458 != -1;
  if (v66) {
    var v459 = stringToReturn + '"';
    var v65 = v459 + fastaSequenceTitle;
    stringToReturn = v65 + '"';
  }
  var v460 = stringToReturn + ' starting "';
  var v461 = sequence$$2.substring(0, 10);
  var v67 = v460 + v461;
  stringToReturn = v67 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v462 = sequenceOne.length;
  var v68 = "Search results for " + v462;
  var stringToReturn$$1 = v68 + " residue sequence ";
  var v463 = fastaSequenceTitleOne.search(/[^\s]/);
  var v70 = v463 != -1;
  if (v70) {
    var v464 = stringToReturn$$1 + '"';
    var v69 = v464 + fastaSequenceTitleOne;
    stringToReturn$$1 = v69 + '"';
  }
  var v465 = stringToReturn$$1 + ' starting "';
  var v466 = sequenceOne.substring(0, 10);
  var v71 = v465 + v466;
  stringToReturn$$1 = v71 + '"\n';
  var v467 = stringToReturn$$1 + "and ";
  var v468 = sequenceTwo.length;
  var v72 = v467 + v468;
  stringToReturn$$1 = v72 + " residue sequence ";
  var v469 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v74 = v469 != -1;
  if (v74) {
    var v470 = stringToReturn$$1 + '"';
    var v73 = v470 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v73 + '"';
  }
  var v471 = stringToReturn$$1 + ' starting "';
  var v472 = sequenceTwo.substring(0, 10);
  var v75 = v471 + v472;
  stringToReturn$$1 = v75 + '"';
  var v76 = '<div class="info">' + stringToReturn$$1;
  return v76 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v77 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v77);
  var j$$2 = 0;
  var v473 = arrayOfPatterns$$3.length;
  var v79 = j$$2 < v473;
  for (;v79;) {
    var v741 = arrayOfPatterns$$3[j$$2];
    var v474 = v741.match(/\/.+\//);
    var v78 = v474 + "gi";
    var v1156 = eval(v78);
    geneticCodeMatchExp$$1[j$$2] = v1156;
    j$$2++;
    var v475 = arrayOfPatterns$$3.length;
    v79 = j$$2 < v475;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v80 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v80);
  var j$$3 = 0;
  var v476 = arrayOfPatterns$$4.length;
  var v83 = j$$3 < v476;
  for (;v83;) {
    var v477 = arrayOfPatterns$$4[j$$3];
    var v81 = v477.match(/=[a-zA-Z\*]/);
    var v1157 = v81.toString();
    geneticCodeMatchResult$$1[j$$3] = v1157;
    var v82 = geneticCodeMatchResult$$1[j$$3];
    var v1158 = v82.replace(/=/g, "");
    geneticCodeMatchResult$$1[j$$3] = v1158;
    j$$3++;
    var v478 = arrayOfPatterns$$4.length;
    v83 = j$$3 < v478;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v479 = sequence$$3.length;
  var v84 = "Results for " + v479;
  var stringToReturn$$2 = v84 + " residue sequence ";
  var v480 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v86 = v480 != -1;
  if (v86) {
    var v481 = stringToReturn$$2 + '"';
    var v85 = v481 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v85 + '"';
  }
  var v482 = stringToReturn$$2 + ' starting "';
  var v483 = sequence$$3.substring(0, 10);
  var v87 = v482 + v483;
  stringToReturn$$2 = v87 + '"';
  var v88 = '<div class="info">' + stringToReturn$$2;
  return v88 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v742 = "Results for " + topology;
  var v484 = v742 + " ";
  var v485 = sequence$$4.length;
  var v89 = v484 + v485;
  var stringToReturn$$3 = v89 + " residue sequence ";
  var v486 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v91 = v486 != -1;
  if (v91) {
    var v487 = stringToReturn$$3 + '"';
    var v90 = v487 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v90 + '"';
  }
  var v488 = stringToReturn$$3 + ' starting "';
  var v489 = sequence$$4.substring(0, 10);
  var v92 = v488 + v489;
  stringToReturn$$3 = v92 + '"';
  var v93 = '<div class="info">' + stringToReturn$$3;
  return v93 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v490 = sequenceOne$$1.length;
  var v94 = "Alignment results for " + v490;
  var stringToReturn$$4 = v94 + " residue sequence ";
  var v491 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v96 = v491 != -1;
  if (v96) {
    var v492 = stringToReturn$$4 + '"';
    var v95 = v492 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v95 + '"';
  }
  var v493 = stringToReturn$$4 + ' starting "';
  var v494 = sequenceOne$$1.substring(0, 10);
  var v97 = v493 + v494;
  stringToReturn$$4 = v97 + '"\n';
  var v495 = stringToReturn$$4 + "and ";
  var v496 = sequenceTwo$$1.length;
  var v98 = v495 + v496;
  stringToReturn$$4 = v98 + " residue sequence ";
  var v497 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v100 = v497 != -1;
  if (v100) {
    var v498 = stringToReturn$$4 + '"';
    var v99 = v498 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v99 + '"';
  }
  var v499 = stringToReturn$$4 + ' starting "';
  var v500 = sequenceTwo$$1.substring(0, 10);
  var v101 = v499 + v500;
  stringToReturn$$4 = v101 + '"';
  var v102 = '<div class="info">' + stringToReturn$$4;
  return v102 + "</div>\n";
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v104 = j$$4 < lengthOut;
  for (;v104;) {
    var v501 = Math.random();
    var v502 = components.length;
    var v103 = v501 * v502;
    tempNum = Math.floor(v103);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4++;
    v104 = j$$4 < lengthOut;
  }
  return sequenceArray.join("");
}
function getSequenceFromFasta(sequenceRecord) {
  var v503 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v105 = v503 != -1;
  if (v105) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "");
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v504 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v107 = v504 != -1;
  if (v107) {
    var v106 = sequenceRecord$$1.match(/\>[^\f\n\r]+[\f\n\r]/, "");
    fastaTitle = v106.toString();
    fastaTitle = fastaTitle.replace(/\>|[\f\n\r]/g, "");
    fastaTitle = fastaTitle.replace(/\s{2,}/g, " ");
    fastaTitle = fastaTitle.replace(/[\<\>]/gi, "");
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  var v1131 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v1124 = v1131 != -1;
  var v1133 = !v1124;
  if (v1133) {
    var v1132 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    v1124 = v1132 != -1;
  }
  var v1115 = v1124;
  var v1126 = !v1115;
  if (v1126) {
    var v1125 = expressionToCheck.search(/\[\]/);
    v1115 = v1125 != -1;
  }
  var v1105 = v1115;
  var v1117 = !v1105;
  if (v1117) {
    var v1116 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
    v1105 = v1116 != -1;
  }
  var v1093 = v1105;
  var v1107 = !v1093;
  if (v1107) {
    var v1106 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
    v1093 = v1106 != -1;
  }
  var v1071 = v1093;
  var v1095 = !v1071;
  if (v1095) {
    var v1094 = expressionToCheck.search(/\|\|/);
    v1071 = v1094 != -1;
  }
  var v1033 = v1071;
  var v1073 = !v1033;
  if (v1073) {
    var v1072 = expressionToCheck.search(/\/\|/);
    v1033 = v1072 != -1;
  }
  var v973 = v1033;
  var v1035 = !v973;
  if (v1035) {
    var v1034 = expressionToCheck.search(/\|\//);
    v973 = v1034 != -1;
  }
  var v874 = v973;
  var v975 = !v874;
  if (v975) {
    var v974 = expressionToCheck.search(/\[.\]/);
    v874 = v974 != -1;
  }
  var v743 = v874;
  var v876 = !v743;
  if (v876) {
    var v875 = expressionToCheck.search(/\</);
    v743 = v875 != -1;
  }
  var v505 = v743;
  var v745 = !v505;
  if (v745) {
    var v744 = expressionToCheck.search(/\>/);
    v505 = v744 != -1;
  }
  var v108 = v505;
  if (v108) {
    return false;
  }
  return true;
}
function openForm() {
  var v109 = outputWindow.document;
  v109.write('<form action="">\n');
  return true;
}
function openPre() {
  var v110 = outputWindow.document;
  v110.write("<pre>");
  var v111 = outputWindow.document;
  v111.write('<div class="pre">');
  return;
}
function openTextArea() {
  var v112 = outputWindow.document;
  v112.write('<br /><textarea rows="6" cols="61">\n');
  return true;
}
function openWindow(title$$6) {
  _openWindow(title$$6, true);
  return;
}
function _openWindow(title$$7, isColor) {
  outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  outputWindow.focus();
  var v113 = outputWindow.document;
  var v877 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v746 = v877 + "<head>\n";
  var v506 = v746 + "<title>Sequence Manipulation Suite</title>\n";
  var v114 = v506 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v113.write(v114);
  if (isColor) {
    var v115 = outputWindow.document;
    var v1146 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1142 = v1146 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1138 = v1142 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1134 = v1138 + "div.info {font-weight: bold}\n";
    var v1127 = v1134 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1118 = v1127 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v1108 = v1118 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v1096 = v1108 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1074 = v1096 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v1036 = v1074 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v976 = v1036 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v878 = v976 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v747 = v878 + "td.many {color: #000000}\n";
    var v507 = v747 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v116 = v507 + "</style>\n";
    v115.write(v116);
  } else {
    var v117 = outputWindow.document;
    var v1150 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1147 = v1150 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1143 = v1147 + "div.title {display: none}\n";
    var v1139 = v1143 + "div.info {font-weight: bold}\n";
    var v1135 = v1139 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1128 = v1135 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1119 = v1128 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v1109 = v1119 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1097 = v1109 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1075 = v1097 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1037 = v1075 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v977 = v1037 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v879 = v977 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v748 = v879 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v508 = v748 + "img {display: none}\n";
    var v118 = v508 + "</style>\n";
    v117.write(v118);
  }
  var v119 = outputWindow.document;
  var v880 = "</head>\n" + '<body class="main">\n';
  var v749 = v880 + '<div class="title">';
  var v509 = v749 + title$$7;
  var v120 = v509 + " results</div>\n";
  v119.write(v120);
  outputWindow.status = "Please Wait.";
  return true;
}
function openWindowAlign(title$$8) {
  _openWindowAlign(title$$8, true);
  return;
}
function _openWindowAlign(title$$9, isBackground) {
  outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  outputWindow.focus();
  var v121 = outputWindow.document;
  var v881 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v750 = v881 + "<head>\n";
  var v510 = v750 + "<title>Sequence Manipulation Suite</title>\n";
  var v122 = v510 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v121.write(v122);
  if (isBackground) {
    var v123 = outputWindow.document;
    var v1148 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1144 = v1148 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1140 = v1144 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1136 = v1140 + "div.info {font-weight: bold}\n";
    var v1129 = v1136 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v1120 = v1129 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v1110 = v1120 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v1098 = v1110 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v1076 = v1098 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v1038 = v1076 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v978 = v1038 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v882 = v978 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v751 = v882 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v511 = v751 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v124 = v511 + "</style>\n";
    v123.write(v124);
  } else {
    var v125 = outputWindow.document;
    var v1152 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1151 = v1152 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1149 = v1151 + "div.title {display: none}\n";
    var v1145 = v1149 + "div.info {font-weight: bold}\n";
    var v1141 = v1145 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1137 = v1141 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v1130 = v1137 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v1121 = v1130 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v1111 = v1121 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v1099 = v1111 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v1077 = v1099 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v1039 = v1077 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v979 = v1039 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v883 = v979 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v752 = v883 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v512 = v752 + "img {display: none}\n";
    var v126 = v512 + "</style>\n";
    v125.write(v126);
  }
  var v127 = outputWindow.document;
  var v884 = "</head>\n" + '<body class="main">\n';
  var v753 = v884 + '<div class="title">';
  var v513 = v753 + title$$9;
  var v128 = v513 + " results</div>\n";
  v127.write(v128);
  outputWindow.status = "Please Wait.";
  return true;
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
  var v514 = dnaSequence$$1.search(/./);
  var v129 = v514 != -1;
  if (v129) {
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
  var v130 = j$$5 < lengthOfColumn;
  for (;v130;) {
    tempString = tempString + " ";
    j$$5++;
    v130 = j$$5 < lengthOfColumn;
  }
  var v131 = tempString + theNumber;
  theNumber = v131 + " ";
  var v132 = sequenceToAppend + theNumber;
  sequenceToAppend = v132 + tabIn;
  return sequenceToAppend;
}
function testScript() {
  function v1(str$$7, p1$$1, offset$$9, s$$3) {
    return p1$$1 + "X";
  }
  var testArray = new Array;
  var testString = "1234567890";
  testArray.push(testString);
  var v515 = testArray[0];
  var v133 = v515 != testString;
  if (v133) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v516 = testString.search(re$$2);
  var v134 = v516 == -1;
  if (v134) {
    alert("Regular expression 'm' flag not supported. See browser compatibility page.");
    return false;
  }
  var caughtException = false;
  try {
    re$$2 = eval("Exception handling not supported. Check browser compatibility page.");
  } catch (e$$4) {
    caughtException = true;
  }
  var v135 = !caughtException;
  if (v135) {
    alert("Exception handling not supported. See browser compatibility page.");
  }
  testString = "123";
  testString = testString.replace(/(\d)/g, v1);
  var v136 = testString != "1X2X3X";
  if (v136) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false;
  }
  var testNum = 2489.8237;
  var v517 = testNum.toFixed(3);
  var v137 = v517 != 2489.824;
  if (v137) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v518 = testNum.toPrecision(5);
  var v138 = v518 != 2489.8;
  if (v138) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v519 = theNumber$$1.search(/\d/);
  var v139 = v519 == -1;
  if (v139) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v980 = emblFile.search(/ID/);
  var v885 = v980 == -1;
  var v982 = !v885;
  if (v982) {
    var v981 = emblFile.search(/AC/);
    v885 = v981 == -1;
  }
  var v754 = v885;
  var v887 = !v754;
  if (v887) {
    var v886 = emblFile.search(/DE/);
    v754 = v886 == -1;
  }
  var v520 = v754;
  var v756 = !v520;
  if (v756) {
    var v755 = emblFile.search(/SQ/);
    v520 = v755 == -1;
  }
  var v140 = v520;
  if (v140) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v521 = theNumber$$2.search(/\d/);
  var v141 = v521 == -1;
  if (v141) {
    alert("Please enter a number.");
    return false;
  }
  var v143 = theNumber$$2 > maxInput$$2;
  if (v143) {
    var v522 = "Please enter a number less than or equal to " + maxInput$$2;
    var v142 = v522 + ".";
    alert(v142);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v523 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v144 = v523 != -1;
  if (v144) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v524 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v145 = v524 != -1;
  if (v145) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v983 = genBankFile.search(/LOCUS/);
  var v888 = v983 == -1;
  var v985 = !v888;
  if (v985) {
    var v984 = genBankFile.search(/DEFINITION/);
    v888 = v984 == -1;
  }
  var v757 = v888;
  var v890 = !v757;
  if (v890) {
    var v889 = genBankFile.search(/ACCESSION/);
    v757 = v889 == -1;
  }
  var v525 = v757;
  var v759 = !v525;
  if (v759) {
    var v758 = genBankFile.search(/ORIGIN/);
    v525 = v758 == -1;
  }
  var v146 = v525;
  if (v146) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v986 = genBankFile$$1.search(/LOCUS/);
  var v891 = v986 == -1;
  var v988 = !v891;
  if (v988) {
    var v987 = genBankFile$$1.search(/DEFINITION/);
    v891 = v987 == -1;
  }
  var v760 = v891;
  var v893 = !v760;
  if (v893) {
    var v892 = genBankFile$$1.search(/ACCESSION/);
    v760 = v892 == -1;
  }
  var v526 = v760;
  var v762 = !v526;
  if (v762) {
    var v761 = genBankFile$$1.search(/ORIGIN/);
    v526 = v761 == -1;
  }
  var v147 = v526;
  if (v147) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v527 = genBankFile$$1.search(/FEATURES {13}/);
  var v148 = v527 == -1;
  if (v148) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v989 = emblFile$$1.search(/ID/);
  var v894 = v989 == -1;
  var v991 = !v894;
  if (v991) {
    var v990 = emblFile$$1.search(/AC/);
    v894 = v990 == -1;
  }
  var v763 = v894;
  var v896 = !v763;
  if (v896) {
    var v895 = emblFile$$1.search(/DE/);
    v763 = v895 == -1;
  }
  var v528 = v763;
  var v765 = !v528;
  if (v765) {
    var v764 = emblFile$$1.search(/SQ/);
    v528 = v764 == -1;
  }
  var v149 = v528;
  if (v149) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v529 = emblFile$$1.search(/^FT/m);
  var v150 = v529 == -1;
  if (v150) {
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
  var v157 = i$$5 < stopBase;
  for (;v157;) {
    var v151 = i$$5 + 1;
    lineOfText = rightNum(v151, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v530 = basePerLine / groupSize;
    var v154 = j$$6 <= v530;
    for (;v154;) {
      var v153 = k < groupSize;
      for (;v153;) {
        var v531 = k + i$$5;
        var v152 = text$$10.charAt(v531);
        lineOfText = lineOfText + v152;
        k = k + 1;
        v153 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v532 = basePerLine / groupSize;
      v154 = j$$6 <= v532;
    }
    var v155 = outputWindow.document;
    var v156 = lineOfText + "\n";
    v155.write(v156);
    lineOfText = "";
    v157 = i$$5 < stopBase;
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
    var v533 = adjustment < 0;
    if (v533) {
      v533 = adjusted >= 0;
    }
    var v158 = v533;
    if (v158) {
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
  var v191 = i$$6 < stopBase$$2;
  for (;v191;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v534 = basePerLine$$2 / groupSize$$2;
    var v167 = j$$7 <= v534;
    for (;v167;) {
      var v162 = k$$1 < groupSize$$2;
      for (;v162;) {
        var v535 = i$$6 + k$$1;
        var v159 = v535 >= stopBase$$2;
        if (v159) {
          break;
        }
        var v160 = lineOfText$$1;
        var v536 = k$$1 + i$$6;
        var v161 = text$$12.charAt(v536);
        lineOfText$$1 = v160 + v161;
        k$$1 = k$$1 + 1;
        v162 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v165 = numberPosition$$1 == "above";
      if (v165) {
        var v163 = aboveNum;
        var v537 = adjustNumbering(i$$6, numberingAdjustment);
        var v164 = rightNum(v537, "", groupSize$$2, tabIn$$3);
        aboveNum = v163 + v164;
      }
      var v166 = i$$6 >= stopBase$$2;
      if (v166) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v538 = basePerLine$$2 / groupSize$$2;
      v167 = j$$7 <= v538;
    }
    var v190 = numberPosition$$1 == "left";
    if (v190) {
      var v168 = outputWindow.document;
      var v897 = adjustNumbering(lineNum, numberingAdjustment);
      var v766 = rightNum(v897, "", 8, tabIn$$3);
      var v539 = v766 + lineOfText$$1;
      var v169 = v539 + "\n";
      v168.write(v169);
      var v173 = strands$$1 == "two";
      if (v173) {
        var v170 = outputWindow.document;
        var v898 = adjustNumbering(lineNum, numberingAdjustment);
        var v767 = rightNum(v898, "", 8, tabIn$$3);
        var v768 = complement(lineOfText$$1);
        var v540 = v767 + v768;
        var v171 = v540 + "\n";
        v170.write(v171);
        var v172 = outputWindow.document;
        v172.write("\n");
      }
    } else {
      var v189 = numberPosition$$1 == "right";
      if (v189) {
        var v174 = outputWindow.document;
        var v769 = lineOfText$$1;
        var v770 = adjustNumbering(i$$6, numberingAdjustment);
        var v541 = v769 + v770;
        var v175 = v541 + "\n";
        v174.write(v175);
        var v179 = strands$$1 == "two";
        if (v179) {
          var v176 = outputWindow.document;
          var v771 = complement(lineOfText$$1);
          var v772 = adjustNumbering(i$$6, numberingAdjustment);
          var v542 = v771 + v772;
          var v177 = v542 + "\n";
          v176.write(v177);
          var v178 = outputWindow.document;
          v178.write("\n");
        }
      } else {
        var v188 = numberPosition$$1 == "above";
        if (v188) {
          var v180 = outputWindow.document;
          var v181 = aboveNum + "\n";
          v180.write(v181);
          var v182 = outputWindow.document;
          var v183 = lineOfText$$1 + "\n";
          v182.write(v183);
          var v187 = strands$$1 == "two";
          if (v187) {
            var v184 = outputWindow.document;
            var v543 = complement(lineOfText$$1);
            var v185 = v543 + "\n";
            v184.write(v185);
            var v186 = outputWindow.document;
            v186.write("\n");
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v191 = i$$6 < stopBase$$2;
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
  var v210 = i$$7 < stopBase$$3;
  for (;v210;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v544 = basePerLine$$3 / groupSize$$3;
    var v198 = j$$8 <= v544;
    for (;v198;) {
      var v194 = k$$2 < groupSize$$3;
      for (;v194;) {
        var v545 = i$$7 + k$$2;
        var v192 = v545 >= stopBase$$3;
        if (v192) {
          break;
        }
        var v546 = k$$2 + i$$7;
        var v193 = text$$13.charAt(v546);
        lineOfText$$2 = lineOfText$$2 + v193;
        k$$2 = k$$2 + 1;
        v194 = k$$2 < groupSize$$3;
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v196 = numberPosition$$2 == "above";
      if (v196) {
        var v195 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = aboveNum$$1 + v195;
      }
      var v197 = i$$7 >= stopBase$$3;
      if (v197) {
        break;
      }
      k$$2 = 0;
      j$$8++;
      var v547 = basePerLine$$3 / groupSize$$3;
      v198 = j$$8 <= v547;
    }
    var v209 = numberPosition$$2 == "left";
    if (v209) {
      var v199 = outputWindow.document;
      var v773 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v548 = v773 + lineOfText$$2;
      var v200 = v548 + "\n";
      v199.write(v200);
    } else {
      var v208 = numberPosition$$2 == "right";
      if (v208) {
        var v201 = outputWindow.document;
        var v549 = lineOfText$$2 + i$$7;
        var v202 = v549 + "\n";
        v201.write(v202);
      } else {
        var v207 = numberPosition$$2 == "above";
        if (v207) {
          var v203 = outputWindow.document;
          var v204 = aboveNum$$1 + "\n";
          v203.write(v204);
          var v205 = outputWindow.document;
          var v206 = lineOfText$$2 + "\n";
          v205.write(v206);
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v210 = i$$7 < stopBase$$3;
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
  var v899 = sequence$$13.length;
  var v774 = v899 <= firstIndexToMutate;
  var v900 = !v774;
  if (v900) {
    v774 = lastIndexToMutate < 0;
  }
  var v550 = v774;
  var v775 = !v550;
  if (v775) {
    v550 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v211 = v550;
  if (v211) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v219 = i$$8 < numMut;
  for (;v219;) {
    maxNum = sequence$$13.length;
    var v551 = Math.random();
    var v212 = v551 * maxNum;
    randNum = Math.floor(v212);
    var v552 = randNum < firstIndexToMutate;
    var v776 = !v552;
    if (v776) {
      v552 = randNum > lastIndexToMutate;
    }
    var v213 = v552;
    if (v213) {
      numMut++;
      i$$8++;
      v219 = i$$8 < numMut;
      continue;
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for (;needNewChar;) {
      var v553 = Math.random();
      var v554 = components$$1.length;
      var v214 = v553 * v554;
      componentsIndex = Math.round(v214);
      var v555 = components$$1.length;
      var v215 = componentsIndex == v555;
      if (v215) {
        componentsIndex = 0;
      }
      var v556 = components$$1[componentsIndex];
      var v216 = v556 != currentChar;
      if (v216) {
        needNewChar = false;
      }
    }
    var v557 = sequence$$13.substring(0, randNum);
    var v558 = components$$1[componentsIndex];
    var v217 = v557 + v558;
    var v559 = randNum + 1;
    var v560 = sequence$$13.length;
    var v218 = sequence$$13.substring(v559, v560);
    sequence$$13 = v217 + v218;
    i$$8++;
    v219 = i$$8 < numMut;
  }
  var v220 = outputWindow.document;
  var v221 = addReturns(sequence$$13);
  v220.write(v221);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v226 = j$$9 < lengthOut$$1;
  for (;v226;) {
    var v561 = Math.random();
    var v562 = components$$2.length;
    var v222 = v561 * v562;
    tempNum$$1 = Math.floor(v222);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v563 = sequence$$14.length;
    var v225 = v563 == 60;
    if (v225) {
      var v223 = outputWindow.document;
      var v224 = sequence$$14 + "\n";
      v223.write(v224);
      sequence$$14 = "";
    }
    j$$9++;
    v226 = j$$9 < lengthOut$$1;
  }
  var v227 = outputWindow.document;
  var v228 = sequence$$14 + "\n";
  v227.write(v228);
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
  var v232 = dnaConformation == "circular";
  if (v232) {
    var v229 = sequence$$15.substring(0, lookAhead);
    shiftValue = v229.length;
    var v901 = sequence$$15.length;
    var v777 = v901 - lookAhead;
    var v778 = sequence$$15.length;
    var v564 = sequence$$15.substring(v777, v778);
    var v230 = v564 + sequence$$15;
    var v231 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v230 + v231;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v233 = outputWindow.document;
  v233.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  var v234 = outputWindow.document;
  var v902 = '<tr><td class="title" width="200px">' + "Site:";
  var v779 = v902 + '</td><td class="title">';
  var v565 = v779 + "Positions:";
  var v235 = v565 + "</td></tr>\n";
  v234.write(v235);
  var i$$9 = 0;
  var v566 = arrayOfItems.length;
  var v251 = i$$9 < v566;
  for (;v251;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v567 = arrayOfItems[i$$9];
    var v236 = v567.match(/\/.+\//);
    matchExp = v236 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    var v903 = arrayOfItems[i$$9];
    var v780 = v903.match(/\)\D*\d+/);
    var v568 = v780.toString();
    var v237 = v568.replace(/\)\D*/, "");
    cutDistance = parseFloat(v237);
    var v243 = matchArray$$1 = matchExp.exec(sequence$$15);
    for (;v243;) {
      var v238 = matchExp.lastIndex;
      matchPosition = v238 - cutDistance;
      var v569 = matchPosition >= lowerLimit;
      if (v569) {
        v569 = matchPosition < upperLimit;
      }
      var v241 = v569;
      if (v241) {
        timesFound++;
        var v239 = tempString$$1 + ", ";
        var v570 = matchPosition - shiftValue;
        var v240 = v570 + 1;
        tempString$$1 = v239 + v240;
      }
      var v571 = matchExp.lastIndex;
      var v781 = RegExp.lastMatch;
      var v572 = v781.length;
      var v242 = v571 - v572;
      matchExp.lastIndex = v242 + 1;
      v243 = matchArray$$1 = matchExp.exec(sequence$$15);
    }
    var v573 = tempString$$1.search(/\d/);
    var v244 = v573 != -1;
    if (v244) {
      tempString$$1 = tempString$$1.replace(/none,\s*/, "");
    }
    var v248 = timesFound == 0;
    if (v248) {
      backGroundClass = "none";
    } else {
      var v247 = timesFound == 1;
      if (v247) {
        backGroundClass = "one";
      } else {
        var v246 = timesFound == 2;
        if (v246) {
          backGroundClass = "two";
        } else {
          var v245 = timesFound == 3;
          if (v245) {
            backGroundClass = "three";
          } else {
            backGroundClass = "many";
          }
        }
      }
    }
    var v249 = outputWindow.document;
    var v1100 = '<tr><td class="' + backGroundClass;
    var v1078 = v1100 + '">';
    var v1122 = arrayOfItems[i$$9];
    var v1112 = v1122.match(/\([^\(]+\)/);
    var v1101 = v1112.toString();
    var v1079 = v1101.replace(/\(|\)/g, "");
    var v1040 = v1078 + v1079;
    var v992 = v1040 + '</td><td class="';
    var v904 = v992 + backGroundClass;
    var v782 = v904 + '">';
    var v574 = v782 + tempString$$1;
    var v250 = v574 + "</td></tr>\n";
    v249.write(v250);
    timesFound = 0;
    i$$9++;
    var v575 = arrayOfItems.length;
    v251 = i$$9 < v575;
  }
  var v252 = outputWindow.document;
  v252.write("</tbody></table>\n");
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v253 = outputWindow.document;
  v253.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  var v254 = outputWindow.document;
  var v1041 = '<tr><td class="title">' + "Pattern:";
  var v993 = v1041 + '</td><td class="title">';
  var v905 = v993 + "Times found:";
  var v783 = v905 + '</td><td class="title">';
  var v576 = v783 + "Percentage:";
  var v255 = v576 + "</td></tr>\n";
  v254.write(v255);
  var i$$10 = 0;
  var v577 = arrayOfItems$$1.length;
  var v264 = i$$10 < v577;
  for (;v264;) {
    var tempNumber = 0;
    var v578 = arrayOfItems$$1[i$$10];
    var v256 = v578.match(/\/[^\/]+\//);
    var matchExp$$1 = v256 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    var v579 = sequence$$16.search(matchExp$$1);
    var v258 = v579 != -1;
    if (v258) {
      var v257 = sequence$$16.match(matchExp$$1);
      tempNumber = v257.length;
    }
    var percentage = 0;
    var v784 = originalLength + 1;
    var v994 = arrayOfItems$$1[i$$10];
    var v906 = v994.match(/\d+/);
    var v785 = parseFloat(v906);
    var v580 = v784 - v785;
    var v261 = v580 > 0;
    if (v261) {
      var v259 = 100 * tempNumber;
      var v581 = originalLength + 1;
      var v907 = arrayOfItems$$1[i$$10];
      var v786 = v907.match(/\d+/);
      var v582 = parseFloat(v786);
      var v260 = v581 - v582;
      percentage = v259 / v260;
    }
    var v262 = outputWindow.document;
    var v1123 = arrayOfItems$$1[i$$10];
    var v1113 = v1123.match(/\([^\(]+\)\b/);
    var v1102 = v1113.toString();
    var v1080 = v1102.replace(/\(|\)/g, "");
    var v1042 = "<tr><td>" + v1080;
    var v995 = v1042 + "</td><td>";
    var v908 = v995 + tempNumber;
    var v787 = v908 + "</td><td>";
    var v788 = percentage.toFixed(2);
    var v583 = v787 + v788;
    var v263 = v583 + "</td></tr>\n";
    v262.write(v263);
    i$$10++;
    var v584 = arrayOfItems$$1.length;
    v264 = i$$10 < v584;
  }
  var v265 = outputWindow.document;
  v265.write("</tbody></table>\n");
  return true;
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v585 = sequence$$17.length;
  var v272 = v585 > 0;
  for (;v272;) {
    maxNum$$1 = sequence$$17.length;
    var v586 = Math.random();
    var v266 = v586 * maxNum$$1;
    randNum$$1 = Math.floor(v266);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v267 = randNum$$1 + 1;
    var v268 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v267, v268);
    sequence$$17 = tempString1 + tempString2;
    var v587 = tempSeq.length;
    var v271 = v587 == 60;
    if (v271) {
      var v269 = outputWindow.document;
      var v270 = tempSeq + "\n";
      v269.write(v270);
      tempSeq = "";
    }
    var v588 = sequence$$17.length;
    v272 = v588 > 0;
  }
  var v273 = outputWindow.document;
  var v274 = tempSeq + "\n";
  v273.write(v274);
  return true;
}
function rangeExtract(theDocument) {
  var newDna = "";
  var maxInput$$3 = 5E5;
  var matchFound = false;
  var ranges = new Array;
  var v589 = testScript();
  var v275 = v589 == false;
  if (v275) {
    return false;
  }
  var v1103 = theDocument.forms;
  var v1081 = v1103[0];
  var v1043 = v1081.elements;
  var v996 = v1043[0];
  var v909 = checkFormElement(v996);
  var v789 = v909 == false;
  var v911 = !v789;
  if (v911) {
    var v1114 = theDocument.forms;
    var v1104 = v1114[0];
    var v1082 = v1104.elements;
    var v1044 = v1082[0];
    var v997 = v1044.value;
    var v910 = checkSequenceLength(v997, maxInput$$3);
    v789 = v910 == false;
  }
  var v590 = v789;
  var v791 = !v590;
  if (v791) {
    var v1083 = theDocument.forms;
    var v1045 = v1083[0];
    var v998 = v1045.elements;
    var v912 = v998[1];
    var v790 = checkFormElement(v912);
    v590 = v790 == false;
  }
  var v276 = v590;
  if (v276) {
    return false;
  }
  var v999 = theDocument.forms;
  var v913 = v999[0];
  var v792 = v913.elements;
  var v591 = v792[1];
  var v277 = v591.value;
  var arrayOfRanges = v277.split(/,/);
  var arrayOfStartAndEnd;
  var i$$11 = 0;
  var v592 = arrayOfRanges.length;
  var v284 = i$$11 < v592;
  for (;v284;) {
    var v278 = arrayOfRanges[i$$11];
    arrayOfStartAndEnd = v278.split(/\.\./);
    var v593 = arrayOfStartAndEnd.length;
    var v283 = v593 == 1;
    if (v283) {
      matchFound = true;
      var v594 = arrayOfStartAndEnd[0];
      var v595 = arrayOfStartAndEnd[0];
      var v279 = new Range(v594, v595);
      ranges.push(v279);
    } else {
      var v596 = arrayOfStartAndEnd.length;
      var v282 = v596 == 2;
      if (v282) {
        matchFound = true;
        var v597 = arrayOfStartAndEnd[0];
        var v598 = arrayOfStartAndEnd[1];
        var v280 = new Range(v597, v598);
        ranges.push(v280);
      } else {
        var v599 = arrayOfRanges[i$$11];
        var v281 = "The following range entry was ignored: " + v599;
        alert(v281);
      }
    }
    i$$11++;
    var v600 = arrayOfRanges.length;
    v284 = i$$11 < v600;
  }
  var v285 = matchFound == false;
  if (v285) {
    alert("No ranges were entered.");
    return false;
  }
  openWindow("Range Extractor DNA");
  openPre();
  var v1000 = theDocument.forms;
  var v914 = v1000[0];
  var v793 = v914.elements;
  var v601 = v793[0];
  var v286 = v601.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v286);
  i$$11 = 0;
  var v602 = arrayOfFasta$$1.length;
  var v293 = i$$11 < v602;
  for (;v293;) {
    var v287 = arrayOfFasta$$1[i$$11];
    newDna = getSequenceFromFasta(v287);
    var v288 = arrayOfFasta$$1[i$$11];
    title = getTitleFromFasta(v288);
    verifyDna(newDna);
    newDna = removeNonDna(newDna);
    var v289 = outputWindow.document;
    var v290 = getFastaTitleFromTitleAndSequence(title, newDna);
    v289.write(v290);
    var v1084 = theDocument.forms;
    var v1046 = v1084[0];
    var v1001 = v1046.elements;
    var v915 = v1001[5];
    var v794 = v915.options;
    var v1085 = theDocument.forms;
    var v1047 = v1085[0];
    var v1002 = v1047.elements;
    var v916 = v1002[5];
    var v795 = v916.selectedIndex;
    var v603 = v794[v795];
    var v291 = v603.value;
    var v1086 = theDocument.forms;
    var v1048 = v1086[0];
    var v1003 = v1048.elements;
    var v917 = v1003[6];
    var v796 = v917.options;
    var v1087 = theDocument.forms;
    var v1049 = v1087[0];
    var v1004 = v1049.elements;
    var v918 = v1004[6];
    var v797 = v918.selectedIndex;
    var v604 = v796[v797];
    var v292 = v604.value;
    writeSequenceRanges(newDna, ranges, v291, v292);
    i$$11++;
    var v605 = arrayOfFasta$$1.length;
    v293 = i$$11 < v605;
  }
  closePre();
  closeWindow();
  return true;
}
function writeSequenceRanges(sequence$$18, ranges$$1, strand, segmentType) {
  var rangeGroup = new RangeGroup(strand, segmentType);
  var v606 = sequence$$18.length;
  var v294 = v606 / 2;
  var center_base = Math.round(v294);
  var i$$12 = 0;
  var v607 = ranges$$1.length;
  var v308 = i$$12 < v607;
  for (;v308;) {
    var v295 = ranges$$1[i$$12];
    var v919 = ranges$$1[i$$12];
    var v798 = v919.start;
    var v608 = v798.toString();
    var v1159 = v608.replace(/start|begin/gi, 1);
    v295.start = v1159;
    var v296 = ranges$$1[i$$12];
    var v920 = ranges$$1[i$$12];
    var v799 = v920.start;
    var v609 = v799.toString();
    var v610 = sequence$$18.length;
    var v1160 = v609.replace(/stop|end/gi, v610);
    v296.start = v1160;
    var v297 = ranges$$1[i$$12];
    var v921 = ranges$$1[i$$12];
    var v800 = v921.start;
    var v611 = v800.toString();
    var v612 = sequence$$18.length;
    var v1161 = v611.replace(/length/gi, v612);
    v297.start = v1161;
    var v298 = ranges$$1[i$$12];
    var v922 = ranges$$1[i$$12];
    var v801 = v922.start;
    var v613 = v801.toString();
    var v1162 = v613.replace(/middle|center|centre/gi, center_base);
    v298.start = v1162;
    var v299 = ranges$$1[i$$12];
    var v923 = ranges$$1[i$$12];
    var v802 = v923.stop;
    var v614 = v802.toString();
    var v1163 = v614.replace(/start|begin/gi, 1);
    v299.stop = v1163;
    var v300 = ranges$$1[i$$12];
    var v924 = ranges$$1[i$$12];
    var v803 = v924.stop;
    var v615 = v803.toString();
    var v616 = sequence$$18.length;
    var v1164 = v615.replace(/stop|end/gi, v616);
    v300.stop = v1164;
    var v301 = ranges$$1[i$$12];
    var v925 = ranges$$1[i$$12];
    var v804 = v925.stop;
    var v617 = v804.toString();
    var v618 = sequence$$18.length;
    var v1165 = v617.replace(/length/gi, v618);
    v301.stop = v1165;
    var v302 = ranges$$1[i$$12];
    var v926 = ranges$$1[i$$12];
    var v805 = v926.stop;
    var v619 = v805.toString();
    var v1166 = v619.replace(/middle|center|centre/gi, center_base);
    v302.stop = v1166;
    try {
      var v303 = ranges$$1[i$$12];
      var v1005 = ranges$$1[i$$12];
      var v927 = v1005.start;
      var v806 = v927.toString();
      var v620 = eval(v806);
      var v1167 = parseInt(v620);
      v303.start = v1167;
    } catch (e$$5) {
      var v807 = ranges$$1[i$$12];
      var v621 = v807.start;
      var v304 = "Could not evaluate the following expression: " + v621;
      alert(v304);
      return false;
    }
    try {
      var v305 = ranges$$1[i$$12];
      var v1006 = ranges$$1[i$$12];
      var v928 = v1006.stop;
      var v808 = v928.toString();
      var v622 = eval(v808);
      var v1168 = parseInt(v622);
      v305.stop = v1168;
    } catch (e$$6) {
      var v809 = ranges$$1[i$$12];
      var v623 = v809.stop;
      var v306 = "Could not evaluate the following expression: " + v623;
      alert(v306);
      return false;
    }
    var v307 = ranges$$1[i$$12];
    rangeGroup.addRange(v307);
    i$$12++;
    var v624 = ranges$$1.length;
    v308 = i$$12 < v624;
  }
  rangeGroup.writeRanges(sequence$$18);
  return;
}
function getSequence(sequence$$19) {
  var problem = false;
  var warnings = new Array;
  var v625 = this.start;
  var v626 = this.stop;
  var v323 = v625 == v626;
  if (v323) {
    var v627 = this.start;
    var v310 = v627 < 1;
    if (v310) {
      problem = true;
      var v810 = this.start;
      var v628 = "position value of " + v810;
      var v309 = v628 + " is less than 1";
      warnings.push(v309);
    }
    var v629 = this.start;
    var v630 = sequence$$19.length;
    var v312 = v629 > v630;
    if (v312) {
      problem = true;
      var v811 = this.start;
      var v631 = "position value of " + v811;
      var v311 = v631 + " is greater than the sequence length";
      warnings.push(v311);
    }
  } else {
    var v632 = this.start;
    var v314 = v632 < 1;
    if (v314) {
      problem = true;
      var v812 = this.start;
      var v633 = "position value of " + v812;
      var v313 = v633 + " is less than 1";
      warnings.push(v313);
    }
    var v634 = this.stop;
    var v316 = v634 < 1;
    if (v316) {
      problem = true;
      var v813 = this.stop;
      var v635 = "position value of " + v813;
      var v315 = v635 + " is less than 1";
      warnings.push(v315);
    }
    var v636 = this.start;
    var v637 = sequence$$19.length;
    var v318 = v636 > v637;
    if (v318) {
      problem = true;
      var v814 = this.start;
      var v638 = "position value of " + v814;
      var v317 = v638 + " is greater than the sequence length";
      warnings.push(v317);
    }
    var v639 = this.stop;
    var v640 = sequence$$19.length;
    var v320 = v639 > v640;
    if (v320) {
      problem = true;
      var v815 = this.stop;
      var v641 = "position value of " + v815;
      var v319 = v641 + " is greater than the sequence length";
      warnings.push(v319);
    }
    var v642 = this.start;
    var v643 = this.stop;
    var v322 = v642 > v643;
    if (v322) {
      problem = true;
      var v929 = this.start;
      var v816 = "stop position is less than start position in range " + v929;
      var v644 = v816 + " to ";
      var v645 = this.stop;
      var v321 = v644 + v645;
      warnings.push(v321);
    }
  }
  if (problem) {
    var v646 = warnings.join(",\n");
    var v324 = "An entry was skipped because of the following:\n" + v646;
    alert(v324);
    return false;
  } else {
    var v647 = this.start;
    var v648 = this.stop;
    var v328 = v647 == v648;
    if (v328) {
      var v649 = this.start;
      var v325 = v649 - 1;
      return sequence$$19.charAt(v325);
    } else {
      var v650 = this.start;
      var v326 = v650 - 1;
      var v327 = this.stop;
      return sequence$$19.substring(v326, v327);
    }
  }
  return;
}
function getTitle() {
  var v651 = this.start;
  var v652 = this.stop;
  var v332 = v651 == v652;
  if (v332) {
    var v329 = this.start;
    return "&gt;base " + v329;
  } else {
    var v817 = this.start;
    var v653 = "&gt;base " + v817;
    var v330 = v653 + " to ";
    var v331 = this.stop;
    return v330 + v331;
  }
  return;
}
function Range(start$$4, stop) {
  this.start = start$$4;
  this.stop = stop;
  return;
}
function addRange(range$$5) {
  var v333 = this.ranges;
  v333.push(range$$5);
  return;
}
function writeRanges(sequence$$20) {
  function v9(str$$15, p1$$9, offset$$17, s$$11) {
    var v654 = p1$$9.length;
    var v334 = offset$$17 + v654;
    return sequence$$20.substring(offset$$17, v334);
  }
  function v8(str$$14, p1$$8, p2$$3, offset$$16, s$$10) {
    var v655 = p1$$8.length;
    var v818 = p1$$8.length;
    var v819 = p2$$3.length;
    var v656 = v818 + v819;
    var v335 = sequence$$20.substring(v655, v656);
    return p1$$8 + v335;
  }
  function v7(str$$13, p1$$7, offset$$15, s$$9) {
    var v336 = ["g", "a", "c", "t"];
    var v337 = p1$$7.length;
    return getRandomSequence(v336, v337);
  }
  function v6(str$$12, p1$$6, p2$$2, offset$$14, s$$8) {
    var v657 = ["g", "a", "c", "t"];
    var v658 = p2$$2.length;
    var v338 = getRandomSequence(v657, v658);
    return p1$$6 + v338;
  }
  function v5(str$$11, p1$$5, offset$$13, s$$7) {
    return p1$$5.toLowerCase();
  }
  function v4(str$$10, p1$$4, p2$$1, offset$$12, s$$6) {
    var v339 = p2$$1.toLowerCase();
    return p1$$4 + v339;
  }
  function v3(str$$9, p1$$3, offset$$11, s$$5) {
    return p1$$3.toUpperCase();
  }
  function v2(str$$8, p1$$2, p2, offset$$10, s$$4) {
    var v340 = p2.toUpperCase();
    return p1$$2 + v340;
  }
  var sequenceArray$$1 = new Array;
  var v659 = this.type;
  var v349 = v659 == "new_sequence";
  if (v349) {
    var i$$13 = 0;
    var v820 = this.ranges;
    var v660 = v820.length;
    var v343 = i$$13 < v660;
    for (;v343;) {
      var v930 = this.ranges;
      var v821 = v930[i$$13];
      var v661 = v821.getSequence(sequence$$20);
      var v342 = v661 != "";
      if (v342) {
        var v822 = this.ranges;
        var v662 = v822[i$$13];
        var v341 = v662.getSequence(sequence$$20);
        sequenceArray$$1.push(v341);
      }
      i$$13++;
      var v823 = this.ranges;
      var v663 = v823.length;
      v343 = i$$13 < v663;
    }
    var v664 = this.strand;
    var v348 = v664 == "reverse";
    if (v348) {
      var v344 = outputWindow.document;
      var v1007 = sequenceArray$$1.join("");
      var v931 = complement(v1007);
      var v824 = reverse(v931);
      var v665 = addReturns(v824);
      var v345 = v665 + "\n\n";
      v344.write(v345);
    } else {
      var v346 = outputWindow.document;
      var v825 = sequenceArray$$1.join("");
      var v666 = addReturns(v825);
      var v347 = v666 + "\n\n";
      v346.write(v347);
    }
    return true;
  }
  var v667 = this.type;
  var v359 = v667 == "separate";
  if (v359) {
    i$$13 = 0;
    var v826 = this.ranges;
    var v668 = v826.length;
    var v358 = i$$13 < v668;
    for (;v358;) {
      var v932 = this.ranges;
      var v827 = v932[i$$13];
      var v669 = v827.getSequence(sequence$$20);
      var v357 = v669 != "";
      if (v357) {
        var v350 = outputWindow.document;
        var v933 = this.ranges;
        var v828 = v933[i$$13];
        var v670 = v828.getTitle();
        var v351 = v670 + "\n";
        v350.write(v351);
        var v671 = this.strand;
        var v356 = v671 == "reverse";
        if (v356) {
          var v352 = outputWindow.document;
          var v1088 = this.ranges;
          var v1050 = v1088[i$$13];
          var v1008 = v1050.getSequence(sequence$$20);
          var v934 = addReturns(v1008);
          var v829 = complement(v934);
          var v672 = reverse(v829);
          var v353 = v672 + "\n\n";
          v352.write(v353);
        } else {
          var v354 = outputWindow.document;
          var v1009 = this.ranges;
          var v935 = v1009[i$$13];
          var v830 = v935.getSequence(sequence$$20);
          var v673 = addReturns(v830);
          var v355 = v673 + "\n\n";
          v354.write(v355);
        }
      }
      i$$13++;
      var v831 = this.ranges;
      var v674 = v831.length;
      v358 = i$$13 < v674;
    }
    return true;
  }
  var v675 = this.type;
  var v370 = v675 == "uppercased";
  if (v370) {
    var re$$3;
    sequence$$20 = sequence$$20.toLowerCase();
    i$$13 = 0;
    var v832 = this.ranges;
    var v676 = v832.length;
    var v364 = i$$13 < v676;
    for (;v364;) {
      var v936 = this.ranges;
      var v833 = v936[i$$13];
      var v677 = v833.getSequence(sequence$$20);
      var v363 = v677 != "";
      if (v363) {
        var v937 = this.ranges;
        var v834 = v937[i$$13];
        var v678 = v834.start;
        var v362 = v678 > 1;
        if (v362) {
          var v1089 = this.ranges;
          var v1051 = v1089[i$$13];
          var v1010 = v1051.start;
          var v938 = v1010 - 1;
          var v835 = "(.{" + v938;
          var v679 = v835 + "})\\B(.{";
          var v1052 = this.ranges;
          var v1011 = v1052[i$$13];
          var v939 = v1011.stop;
          var v1053 = this.ranges;
          var v1012 = v1053[i$$13];
          var v940 = v1012.start;
          var v836 = v939 - v940;
          var v680 = v836 + 1;
          var v360 = v679 + v680;
          re$$3 = v360 + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = sequence$$20.replace(re$$3, v2);
        } else {
          var v1054 = this.ranges;
          var v1013 = v1054[i$$13];
          var v941 = v1013.stop;
          var v1055 = this.ranges;
          var v1014 = v1055[i$$13];
          var v942 = v1014.start;
          var v837 = v941 - v942;
          var v681 = v837 + 1;
          var v361 = "(.{" + v681;
          re$$3 = v361 + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = sequence$$20.replace(re$$3, v3);
        }
      }
      i$$13++;
      var v838 = this.ranges;
      var v682 = v838.length;
      v364 = i$$13 < v682;
    }
    var v683 = this.strand;
    var v369 = v683 == "reverse";
    if (v369) {
      var v365 = outputWindow.document;
      var v943 = addReturns(sequence$$20);
      var v839 = complement(v943);
      var v684 = reverse(v839);
      var v366 = v684 + "\n\n";
      v365.write(v366);
    } else {
      var v367 = outputWindow.document;
      var v685 = addReturns(sequence$$20);
      var v368 = v685 + "\n\n";
      v367.write(v368);
    }
    return true;
  }
  var v686 = this.type;
  var v381 = v686 == "lowercased";
  if (v381) {
    sequence$$20 = sequence$$20.toUpperCase();
    i$$13 = 0;
    var v840 = this.ranges;
    var v687 = v840.length;
    var v375 = i$$13 < v687;
    for (;v375;) {
      var v944 = this.ranges;
      var v841 = v944[i$$13];
      var v688 = v841.getSequence(sequence$$20);
      var v374 = v688 != "";
      if (v374) {
        var v945 = this.ranges;
        var v842 = v945[i$$13];
        var v689 = v842.start;
        var v373 = v689 > 1;
        if (v373) {
          var v1090 = this.ranges;
          var v1056 = v1090[i$$13];
          var v1015 = v1056.start;
          var v946 = v1015 - 1;
          var v843 = "(.{" + v946;
          var v690 = v843 + "})\\B(.{";
          var v1057 = this.ranges;
          var v1016 = v1057[i$$13];
          var v947 = v1016.stop;
          var v1058 = this.ranges;
          var v1017 = v1058[i$$13];
          var v948 = v1017.start;
          var v844 = v947 - v948;
          var v691 = v844 + 1;
          var v371 = v690 + v691;
          re$$3 = v371 + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = sequence$$20.replace(re$$3, v4);
        } else {
          var v1059 = this.ranges;
          var v1018 = v1059[i$$13];
          var v949 = v1018.stop;
          var v1060 = this.ranges;
          var v1019 = v1060[i$$13];
          var v950 = v1019.start;
          var v845 = v949 - v950;
          var v692 = v845 + 1;
          var v372 = "(.{" + v692;
          re$$3 = v372 + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = sequence$$20.replace(re$$3, v5);
        }
      }
      i$$13++;
      var v846 = this.ranges;
      var v693 = v846.length;
      v375 = i$$13 < v693;
    }
    var v694 = this.strand;
    var v380 = v694 == "reverse";
    if (v380) {
      var v376 = outputWindow.document;
      var v951 = addReturns(sequence$$20);
      var v847 = complement(v951);
      var v695 = reverse(v847);
      var v377 = v695 + "\n\n";
      v376.write(v377);
    } else {
      var v378 = outputWindow.document;
      var v696 = addReturns(sequence$$20);
      var v379 = v696 + "\n\n";
      v378.write(v379);
    }
    return true;
  }
  var v697 = this.type;
  var v392 = v697 == "randomized";
  if (v392) {
    i$$13 = 0;
    var v848 = this.ranges;
    var v698 = v848.length;
    var v386 = i$$13 < v698;
    for (;v386;) {
      var v952 = this.ranges;
      var v849 = v952[i$$13];
      var v699 = v849.getSequence(sequence$$20);
      var v385 = v699 != "";
      if (v385) {
        var v953 = this.ranges;
        var v850 = v953[i$$13];
        var v700 = v850.start;
        var v384 = v700 > 1;
        if (v384) {
          var v1091 = this.ranges;
          var v1061 = v1091[i$$13];
          var v1020 = v1061.start;
          var v954 = v1020 - 1;
          var v851 = "(.{" + v954;
          var v701 = v851 + "})\\B(.{";
          var v1062 = this.ranges;
          var v1021 = v1062[i$$13];
          var v955 = v1021.stop;
          var v1063 = this.ranges;
          var v1022 = v1063[i$$13];
          var v956 = v1022.start;
          var v852 = v955 - v956;
          var v702 = v852 + 1;
          var v382 = v701 + v702;
          re$$3 = v382 + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = sequence$$20.replace(re$$3, v6);
        } else {
          var v1064 = this.ranges;
          var v1023 = v1064[i$$13];
          var v957 = v1023.stop;
          var v1065 = this.ranges;
          var v1024 = v1065[i$$13];
          var v958 = v1024.start;
          var v853 = v957 - v958;
          var v703 = v853 + 1;
          var v383 = "(.{" + v703;
          re$$3 = v383 + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = sequence$$20.replace(re$$3, v7);
        }
      }
      i$$13++;
      var v854 = this.ranges;
      var v704 = v854.length;
      v386 = i$$13 < v704;
    }
    var v705 = this.strand;
    var v391 = v705 == "reverse";
    if (v391) {
      var v387 = outputWindow.document;
      var v959 = addReturns(sequence$$20);
      var v855 = complement(v959);
      var v706 = reverse(v855);
      var v388 = v706 + "\n\n";
      v387.write(v388);
    } else {
      var v389 = outputWindow.document;
      var v707 = addReturns(sequence$$20);
      var v390 = v707 + "\n\n";
      v389.write(v390);
    }
    return true;
  }
  var v708 = this.type;
  var v405 = v708 == "preserved";
  if (v405) {
    var v393 = ["g", "a", "c", "t"];
    var v394 = sequence$$20.length;
    var randomSequence = getRandomSequence(v393, v394);
    i$$13 = 0;
    var v856 = this.ranges;
    var v709 = v856.length;
    var v399 = i$$13 < v709;
    for (;v399;) {
      var v960 = this.ranges;
      var v857 = v960[i$$13];
      var v710 = v857.getSequence(sequence$$20);
      var v398 = v710 != "";
      if (v398) {
        var v961 = this.ranges;
        var v858 = v961[i$$13];
        var v711 = v858.start;
        var v397 = v711 > 1;
        if (v397) {
          var v1092 = this.ranges;
          var v1066 = v1092[i$$13];
          var v1025 = v1066.start;
          var v962 = v1025 - 1;
          var v859 = "(.{" + v962;
          var v712 = v859 + "})\\B(.{";
          var v1067 = this.ranges;
          var v1026 = v1067[i$$13];
          var v963 = v1026.stop;
          var v1068 = this.ranges;
          var v1027 = v1068[i$$13];
          var v964 = v1027.start;
          var v860 = v963 - v964;
          var v713 = v860 + 1;
          var v395 = v712 + v713;
          re$$3 = v395 + "})";
          re$$3 = new RegExp(re$$3);
          randomSequence = randomSequence.replace(re$$3, v8);
        } else {
          var v1069 = this.ranges;
          var v1028 = v1069[i$$13];
          var v965 = v1028.stop;
          var v1070 = this.ranges;
          var v1029 = v1070[i$$13];
          var v966 = v1029.start;
          var v861 = v965 - v966;
          var v714 = v861 + 1;
          var v396 = "(.{" + v714;
          re$$3 = v396 + "})";
          re$$3 = new RegExp(re$$3);
          randomSequence = randomSequence.replace(re$$3, v9);
        }
      }
      i$$13++;
      var v862 = this.ranges;
      var v715 = v862.length;
      v399 = i$$13 < v715;
    }
    var v716 = this.strand;
    var v404 = v716 == "reverse";
    if (v404) {
      var v400 = outputWindow.document;
      var v967 = addReturns(randomSequence);
      var v863 = complement(v967);
      var v717 = reverse(v863);
      var v401 = v717 + "\n\n";
      v400.write(v401);
    } else {
      var v402 = outputWindow.document;
      var v718 = addReturns(randomSequence);
      var v403 = v718 + "\n\n";
      v402.write(v403);
    }
    return true;
  }
  return;
}
function RangeGroup(strand$$1, type$$25) {
  this.strand = strand$$1;
  this.type = type$$25;
  var v1169 = new Array;
  this.ranges = v1169;
  return;
}
new Range(0, 0);
var v406 = Range.prototype;
v406.getSequence = getSequence;
var v407 = Range.prototype;
v407.getTitle = getTitle;
new RangeGroup("", "");
var v408 = RangeGroup.prototype;
v408.addRange = addRange;
var v409 = RangeGroup.prototype;
v409.writeRanges = writeRanges;
document.onload = v10;
var v410 = document.getElementById("submitbtn");
v410.onclick = v11;
var v411 = document.getElementById("clearbtn");
v411.onclick = v12

}
