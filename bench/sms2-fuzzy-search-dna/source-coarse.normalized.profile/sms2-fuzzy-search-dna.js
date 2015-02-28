
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
function v4() {
  var v917 = document.forms;
  var v717 = v917[0];
  var v403 = v717.elements;
  var v5 = v403[0];
  v5.value = " ";
  var v918 = document.forms;
  var v718 = v918[0];
  var v404 = v718.elements;
  var v6 = v404[4];
  v6.value = " ";
  return;
}
function v3() {
  try {
    fuzzySearchDna();
  } catch (e$$5) {
    var v7 = "The following error was encountered: " + e$$5;
    alert(v7);
  }
  return;
}
function v2() {
  var v405 = document.main_form;
  var v8 = v405.main_submit;
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
  var v406 = arrayOfSequences.length;
  var v10 = v406 < 2;
  if (v10) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v407 = arrayOfTitles.length;
  var v12 = i$$1 < v407;
  for (;v12;) {
    var v1023 = arrayOfTitles[i$$1];
    var v919 = v1023.search(/\S/);
    var v719 = v919 == -1;
    var v921 = !v719;
    if (v921) {
      var v1024 = arrayOfSequences[i$$1];
      var v920 = v1024.search(/\S/);
      v719 = v920 == -1;
    }
    var v408 = v719;
    var v721 = !v408;
    if (v721) {
      var v922 = arrayOfSequences[i$$1];
      var v720 = v922.length;
      v408 = v720 != lengthOfAlign;
    }
    var v11 = v408;
    if (v11) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v409 = arrayOfTitles.length;
    v12 = i$$1 < v409;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v1080 = codonTable.search(/AmAcid/);
  var v1025 = v1080 == -1;
  var v1082 = !v1025;
  if (v1082) {
    var v1081 = codonTable.search(/Codon/);
    v1025 = v1081 == -1;
  }
  var v923 = v1025;
  var v1027 = !v923;
  if (v1027) {
    var v1026 = codonTable.search(/Number/);
    v923 = v1026 == -1;
  }
  var v722 = v923;
  var v925 = !v722;
  if (v925) {
    var v924 = codonTable.search(/\/1000/);
    v722 = v924 == -1;
  }
  var v410 = v722;
  var v724 = !v410;
  if (v724) {
    var v723 = codonTable.search(/Fraction\s*\.\./);
    v410 = v723 == -1;
  }
  var v13 = v410;
  if (v13) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v725 = formElement.value;
  var v411 = v725.search(/\S/);
  var v14 = v411 == -1;
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
  var v412 = arrayOfPatterns.length;
  var v17 = z$$2 < v412;
  for (;v17;) {
    var v726 = arrayOfPatterns[z$$2];
    var v413 = v726.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v15 = v413 == -1;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v727 = arrayOfPatterns[z$$2];
    var v414 = moreExpressionCheck(v727);
    var v16 = v414 == false;
    if (v16) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v415 = arrayOfPatterns.length;
    v17 = z$$2 < v415;
  }
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v18);
  var v19 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v19);
  var j = 0;
  var v416 = arrayOfPatterns.length;
  var v23 = j < v416;
  for (;v23;) {
    var v728 = arrayOfPatterns[j];
    var v417 = v728.match(/\/.+\//);
    var v20 = v417 + "gi";
    var v1199 = eval(v20);
    geneticCodeMatchExp[j] = v1199;
    var v418 = arrayOfPatterns[j];
    var v21 = v418.match(/=[a-zA-Z\*]/);
    var v1200 = v21.toString();
    geneticCodeMatchResult[j] = v1200;
    var v22 = geneticCodeMatchResult[j];
    var v1201 = v22.replace(/=/g, "");
    geneticCodeMatchResult[j] = v1201;
    j++;
    var v419 = arrayOfPatterns.length;
    v23 = j < v419;
  }
  var i$$2 = 0;
  var v729 = testSequence.length;
  var v420 = v729 - 3;
  var v30 = i$$2 <= v420;
  for (;v30;) {
    var v24 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v24);
    j = 0;
    var v421 = geneticCodeMatchExp.length;
    var v28 = j < v421;
    for (;v28;) {
      var v730 = geneticCodeMatchExp[j];
      var v422 = codon.search(v730);
      var v27 = v422 != -1;
      if (v27) {
        var v26 = oneMatch == true;
        if (v26) {
          var v423 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v25 = v423 + ".";
          alert(v25);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v424 = geneticCodeMatchExp.length;
      v28 = j < v424;
    }
    var v29 = oneMatch == false;
    if (v29) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v731 = testSequence.length;
    var v425 = v731 - 3;
    v30 = i$$2 <= v425;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v426 = arrayOfPatterns$$1.length;
  var v32 = z$$3 < v426;
  for (;v32;) {
    var v732 = arrayOfPatterns$$1[z$$3];
    var v427 = v732.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v31 = v427 != -1;
    if (v31) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v428 = arrayOfPatterns$$1.length;
    v32 = z$$3 < v428;
  }
  var i$$3 = 0;
  var v429 = arrayOfPatterns$$1.length;
  var v36 = i$$3 < v429;
  for (;v36;) {
    var v733 = arrayOfPatterns$$1[i$$3];
    var v430 = "[" + v733;
    var v33 = v430 + "]";
    var re = new RegExp(v33, "gi");
    var j$$1 = i$$3 + 1;
    var v431 = arrayOfPatterns$$1.length;
    var v35 = j$$1 < v431;
    for (;v35;) {
      var v734 = arrayOfPatterns$$1[j$$1];
      var v432 = v734.search(re);
      var v34 = v432 != -1;
      if (v34) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v433 = arrayOfPatterns$$1.length;
      v35 = j$$1 < v433;
    }
    i$$3++;
    var v434 = arrayOfPatterns$$1.length;
    v36 = i$$3 < v434;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v435 = arrayOfPatterns$$2.length;
  var v39 = z$$4 < v435;
  for (;v39;) {
    var v735 = arrayOfPatterns$$2[z$$4];
    var v436 = v735.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v37 = v436 == -1;
    if (v37) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v736 = arrayOfPatterns$$2[z$$4];
    var v437 = moreExpressionCheck(v736);
    var v38 = v437 == false;
    if (v38) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v438 = arrayOfPatterns$$2.length;
    v39 = z$$4 < v438;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v926 = getSequenceFromFasta(text$$7);
  var v737 = v926.replace(/[^A-Za-z]/g, "");
  var v439 = v737.length;
  var v41 = v439 > maxInput;
  if (v41) {
    var v440 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v40 = v440 + " characters.";
    alert(v40);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v441 = text$$8.length;
  var v43 = v441 > maxInput$$1;
  if (v43) {
    var v442 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v42 = v442 + " characters.";
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
  var v443 = alignArray.length;
  var v50 = v443 < 3;
  if (v50) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v444 = alignArray.length;
  var v52 = i$$4 < v444;
  for (;v52;) {
    var v738 = alignArray[i$$4];
    var v445 = v738.search(/[^\s]+\s/);
    var v51 = v445 == -1;
    if (v51) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v446 = alignArray.length;
    v52 = i$$4 < v446;
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
  var v447 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v55 = v447 != -1;
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
  var v448 = sequence$$2.length;
  var v56 = "&gt;results for " + v448;
  var stringToReturn = v56 + " residue sequence ";
  var v449 = fastaSequenceTitle.search(/[^\s]/);
  var v58 = v449 != -1;
  if (v58) {
    var v450 = stringToReturn + '"';
    var v57 = v450 + fastaSequenceTitle;
    stringToReturn = v57 + '"';
  }
  var v451 = stringToReturn + ' starting "';
  var v452 = sequence$$2.substring(0, 10);
  var v59 = v451 + v452;
  stringToReturn = v59 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v453 = sequenceOne.length;
  var v60 = "Search results for " + v453;
  var stringToReturn$$1 = v60 + " residue sequence ";
  var v454 = fastaSequenceTitleOne.search(/[^\s]/);
  var v62 = v454 != -1;
  if (v62) {
    var v455 = stringToReturn$$1 + '"';
    var v61 = v455 + fastaSequenceTitleOne;
    stringToReturn$$1 = v61 + '"';
  }
  var v456 = stringToReturn$$1 + ' starting "';
  var v457 = sequenceOne.substring(0, 10);
  var v63 = v456 + v457;
  stringToReturn$$1 = v63 + '"\n';
  var v458 = stringToReturn$$1 + "and ";
  var v459 = sequenceTwo.length;
  var v64 = v458 + v459;
  stringToReturn$$1 = v64 + " residue sequence ";
  var v460 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v66 = v460 != -1;
  if (v66) {
    var v461 = stringToReturn$$1 + '"';
    var v65 = v461 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v65 + '"';
  }
  var v462 = stringToReturn$$1 + ' starting "';
  var v463 = sequenceTwo.substring(0, 10);
  var v67 = v462 + v463;
  stringToReturn$$1 = v67 + '"';
  var v68 = '<div class="info">' + stringToReturn$$1;
  return v68 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v69 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v69);
  var j$$2 = 0;
  var v464 = arrayOfPatterns$$3.length;
  var v71 = j$$2 < v464;
  for (;v71;) {
    var v739 = arrayOfPatterns$$3[j$$2];
    var v465 = v739.match(/\/.+\//);
    var v70 = v465 + "gi";
    var v1202 = eval(v70);
    geneticCodeMatchExp$$1[j$$2] = v1202;
    j$$2++;
    var v466 = arrayOfPatterns$$3.length;
    v71 = j$$2 < v466;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v72 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v72);
  var j$$3 = 0;
  var v467 = arrayOfPatterns$$4.length;
  var v75 = j$$3 < v467;
  for (;v75;) {
    var v468 = arrayOfPatterns$$4[j$$3];
    var v73 = v468.match(/=[a-zA-Z\*]/);
    var v1203 = v73.toString();
    geneticCodeMatchResult$$1[j$$3] = v1203;
    var v74 = geneticCodeMatchResult$$1[j$$3];
    var v1204 = v74.replace(/=/g, "");
    geneticCodeMatchResult$$1[j$$3] = v1204;
    j$$3++;
    var v469 = arrayOfPatterns$$4.length;
    v75 = j$$3 < v469;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v470 = sequence$$3.length;
  var v76 = "Results for " + v470;
  var stringToReturn$$2 = v76 + " residue sequence ";
  var v471 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v78 = v471 != -1;
  if (v78) {
    var v472 = stringToReturn$$2 + '"';
    var v77 = v472 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v77 + '"';
  }
  var v473 = stringToReturn$$2 + ' starting "';
  var v474 = sequence$$3.substring(0, 10);
  var v79 = v473 + v474;
  stringToReturn$$2 = v79 + '"';
  var v80 = '<div class="info">' + stringToReturn$$2;
  return v80 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v740 = "Results for " + topology;
  var v475 = v740 + " ";
  var v476 = sequence$$4.length;
  var v81 = v475 + v476;
  var stringToReturn$$3 = v81 + " residue sequence ";
  var v477 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v83 = v477 != -1;
  if (v83) {
    var v478 = stringToReturn$$3 + '"';
    var v82 = v478 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v82 + '"';
  }
  var v479 = stringToReturn$$3 + ' starting "';
  var v480 = sequence$$4.substring(0, 10);
  var v84 = v479 + v480;
  stringToReturn$$3 = v84 + '"';
  var v85 = '<div class="info">' + stringToReturn$$3;
  return v85 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v481 = sequenceOne$$1.length;
  var v86 = "Alignment results for " + v481;
  var stringToReturn$$4 = v86 + " residue sequence ";
  var v482 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v88 = v482 != -1;
  if (v88) {
    var v483 = stringToReturn$$4 + '"';
    var v87 = v483 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v87 + '"';
  }
  var v484 = stringToReturn$$4 + ' starting "';
  var v485 = sequenceOne$$1.substring(0, 10);
  var v89 = v484 + v485;
  stringToReturn$$4 = v89 + '"\n';
  var v486 = stringToReturn$$4 + "and ";
  var v487 = sequenceTwo$$1.length;
  var v90 = v486 + v487;
  stringToReturn$$4 = v90 + " residue sequence ";
  var v488 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v92 = v488 != -1;
  if (v92) {
    var v489 = stringToReturn$$4 + '"';
    var v91 = v489 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v91 + '"';
  }
  var v490 = stringToReturn$$4 + ' starting "';
  var v491 = sequenceTwo$$1.substring(0, 10);
  var v93 = v490 + v491;
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
    var v492 = Math.random();
    var v493 = components.length;
    var v95 = v492 * v493;
    tempNum = Math.floor(v95);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4++;
    v96 = j$$4 < lengthOut;
  }
  return sequenceArray.join("");
}
function getSequenceFromFasta(sequenceRecord) {
  var v494 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v97 = v494 != -1;
  if (v97) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "");
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v495 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v99 = v495 != -1;
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
  var v1177 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v1170 = v1177 != -1;
  var v1179 = !v1170;
  if (v1179) {
    var v1178 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    v1170 = v1178 != -1;
  }
  var v1160 = v1170;
  var v1172 = !v1160;
  if (v1172) {
    var v1171 = expressionToCheck.search(/\[\]/);
    v1160 = v1171 != -1;
  }
  var v1149 = v1160;
  var v1162 = !v1149;
  if (v1162) {
    var v1161 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
    v1149 = v1161 != -1;
  }
  var v1134 = v1149;
  var v1151 = !v1134;
  if (v1151) {
    var v1150 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
    v1134 = v1150 != -1;
  }
  var v1111 = v1134;
  var v1136 = !v1111;
  if (v1136) {
    var v1135 = expressionToCheck.search(/\|\|/);
    v1111 = v1135 != -1;
  }
  var v1083 = v1111;
  var v1113 = !v1083;
  if (v1113) {
    var v1112 = expressionToCheck.search(/\/\|/);
    v1083 = v1112 != -1;
  }
  var v1028 = v1083;
  var v1085 = !v1028;
  if (v1085) {
    var v1084 = expressionToCheck.search(/\|\//);
    v1028 = v1084 != -1;
  }
  var v927 = v1028;
  var v1030 = !v927;
  if (v1030) {
    var v1029 = expressionToCheck.search(/\[.\]/);
    v927 = v1029 != -1;
  }
  var v741 = v927;
  var v929 = !v741;
  if (v929) {
    var v928 = expressionToCheck.search(/\</);
    v741 = v928 != -1;
  }
  var v496 = v741;
  var v743 = !v496;
  if (v743) {
    var v742 = expressionToCheck.search(/\>/);
    v496 = v742 != -1;
  }
  var v100 = v496;
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
  var title$$5 = "Fuzzy Search DNA";
  _openWindow(title$$5);
  return;
}
function _openWindow(title$$6) {
  var isColor = true;
  outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  outputWindow.focus();
  var v105 = outputWindow.document;
  var v930 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v744 = v930 + "<head>\n";
  var v497 = v744 + "<title>Sequence Manipulation Suite</title>\n";
  var v106 = v497 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v105.write(v106);
  if (isColor) {
    var v107 = outputWindow.document;
    var v1192 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1188 = v1192 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1184 = v1188 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1180 = v1184 + "div.info {font-weight: bold}\n";
    var v1173 = v1180 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1163 = v1173 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v1152 = v1163 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v1137 = v1152 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1114 = v1137 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v1086 = v1114 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v1031 = v1086 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v931 = v1031 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v745 = v931 + "td.many {color: #000000}\n";
    var v498 = v745 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v108 = v498 + "</style>\n";
    v107.write(v108);
  } else {
    var v109 = outputWindow.document;
    var v1196 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1193 = v1196 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1189 = v1193 + "div.title {display: none}\n";
    var v1185 = v1189 + "div.info {font-weight: bold}\n";
    var v1181 = v1185 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1174 = v1181 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1164 = v1174 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v1153 = v1164 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1138 = v1153 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1115 = v1138 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1087 = v1115 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v1032 = v1087 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v932 = v1032 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v746 = v932 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v499 = v746 + "img {display: none}\n";
    var v110 = v499 + "</style>\n";
    v109.write(v110);
  }
  var v111 = outputWindow.document;
  var v933 = "</head>\n" + '<body class="main">\n';
  var v747 = v933 + '<div class="title">';
  var v500 = v747 + title$$6;
  var v112 = v500 + " results</div>\n";
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
  var v934 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v748 = v934 + "<head>\n";
  var v501 = v748 + "<title>Sequence Manipulation Suite</title>\n";
  var v114 = v501 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v113.write(v114);
  if (isBackground) {
    var v115 = outputWindow.document;
    var v1194 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1190 = v1194 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1186 = v1190 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1182 = v1186 + "div.info {font-weight: bold}\n";
    var v1175 = v1182 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v1165 = v1175 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v1154 = v1165 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v1139 = v1154 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v1116 = v1139 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v1088 = v1116 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v1033 = v1088 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v935 = v1033 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v749 = v935 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v502 = v749 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v116 = v502 + "</style>\n";
    v115.write(v116);
  } else {
    var v117 = outputWindow.document;
    var v1198 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1197 = v1198 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1195 = v1197 + "div.title {display: none}\n";
    var v1191 = v1195 + "div.info {font-weight: bold}\n";
    var v1187 = v1191 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1183 = v1187 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v1176 = v1183 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v1166 = v1176 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v1155 = v1166 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v1140 = v1155 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v1117 = v1140 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v1089 = v1117 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v1034 = v1089 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v936 = v1034 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v750 = v936 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v503 = v750 + "img {display: none}\n";
    var v118 = v503 + "</style>\n";
    v117.write(v118);
  }
  var v119 = outputWindow.document;
  var v937 = "</head>\n" + '<body class="main">\n';
  var v751 = v937 + '<div class="title">';
  var v504 = v751 + title$$8;
  var v120 = v504 + " results</div>\n";
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
  var v505 = dnaSequence$$1.search(/./);
  var v121 = v505 != -1;
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
  var v506 = testArray[0];
  var v125 = v506 != testString;
  if (v125) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v507 = testString.search(re$$2);
  var v126 = v507 == -1;
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
  var v508 = testNum.toFixed(3);
  var v129 = v508 != 2489.824;
  if (v129) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v509 = testNum.toPrecision(5);
  var v130 = v509 != 2489.8;
  if (v130) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v510 = theNumber$$1.search(/\d/);
  var v131 = v510 == -1;
  if (v131) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v1035 = emblFile.search(/ID/);
  var v938 = v1035 == -1;
  var v1037 = !v938;
  if (v1037) {
    var v1036 = emblFile.search(/AC/);
    v938 = v1036 == -1;
  }
  var v752 = v938;
  var v940 = !v752;
  if (v940) {
    var v939 = emblFile.search(/DE/);
    v752 = v939 == -1;
  }
  var v511 = v752;
  var v754 = !v511;
  if (v754) {
    var v753 = emblFile.search(/SQ/);
    v511 = v753 == -1;
  }
  var v132 = v511;
  if (v132) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v512 = theNumber$$2.search(/\d/);
  var v133 = v512 == -1;
  if (v133) {
    alert("Please enter a number.");
    return false;
  }
  var v135 = theNumber$$2 > maxInput$$2;
  if (v135) {
    var v513 = "Please enter a number less than or equal to " + maxInput$$2;
    var v134 = v513 + ".";
    alert(v134);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v514 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v136 = v514 != -1;
  if (v136) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v515 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v137 = v515 != -1;
  if (v137) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v1038 = genBankFile.search(/LOCUS/);
  var v941 = v1038 == -1;
  var v1040 = !v941;
  if (v1040) {
    var v1039 = genBankFile.search(/DEFINITION/);
    v941 = v1039 == -1;
  }
  var v755 = v941;
  var v943 = !v755;
  if (v943) {
    var v942 = genBankFile.search(/ACCESSION/);
    v755 = v942 == -1;
  }
  var v516 = v755;
  var v757 = !v516;
  if (v757) {
    var v756 = genBankFile.search(/ORIGIN/);
    v516 = v756 == -1;
  }
  var v138 = v516;
  if (v138) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v1041 = genBankFile$$1.search(/LOCUS/);
  var v944 = v1041 == -1;
  var v1043 = !v944;
  if (v1043) {
    var v1042 = genBankFile$$1.search(/DEFINITION/);
    v944 = v1042 == -1;
  }
  var v758 = v944;
  var v946 = !v758;
  if (v946) {
    var v945 = genBankFile$$1.search(/ACCESSION/);
    v758 = v945 == -1;
  }
  var v517 = v758;
  var v760 = !v517;
  if (v760) {
    var v759 = genBankFile$$1.search(/ORIGIN/);
    v517 = v759 == -1;
  }
  var v139 = v517;
  if (v139) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v518 = genBankFile$$1.search(/FEATURES {13}/);
  var v140 = v518 == -1;
  if (v140) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v1044 = emblFile$$1.search(/ID/);
  var v947 = v1044 == -1;
  var v1046 = !v947;
  if (v1046) {
    var v1045 = emblFile$$1.search(/AC/);
    v947 = v1045 == -1;
  }
  var v761 = v947;
  var v949 = !v761;
  if (v949) {
    var v948 = emblFile$$1.search(/DE/);
    v761 = v948 == -1;
  }
  var v519 = v761;
  var v763 = !v519;
  if (v763) {
    var v762 = emblFile$$1.search(/SQ/);
    v519 = v762 == -1;
  }
  var v141 = v519;
  if (v141) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v520 = emblFile$$1.search(/^FT/m);
  var v142 = v520 == -1;
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
    var v521 = basePerLine / groupSize;
    var v146 = j$$6 <= v521;
    for (;v146;) {
      var v145 = k < groupSize;
      for (;v145;) {
        var v522 = k + i$$5;
        var v144 = text$$10.charAt(v522);
        lineOfText = lineOfText + v144;
        k = k + 1;
        v145 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v523 = basePerLine / groupSize;
      v146 = j$$6 <= v523;
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
    var v524 = adjustment < 0;
    if (v524) {
      v524 = adjusted >= 0;
    }
    var v150 = v524;
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
    var v525 = basePerLine$$2 / groupSize$$2;
    var v157 = j$$7 <= v525;
    for (;v157;) {
      var v153 = k$$1 < groupSize$$2;
      for (;v153;) {
        var v526 = i$$6 + k$$1;
        var v151 = v526 >= stopBase$$2;
        if (v151) {
          break;
        }
        var v527 = k$$1 + i$$6;
        var v152 = text$$12.charAt(v527);
        lineOfText$$1 = lineOfText$$1 + v152;
        k$$1 = k$$1 + 1;
        v153 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v155 = numberPosition$$1 == "above";
      if (v155) {
        var v528 = adjustNumbering(i$$6, numberingAdjustment);
        var v154 = rightNum(v528, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v154;
      }
      var v156 = i$$6 >= stopBase$$2;
      if (v156) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v529 = basePerLine$$2 / groupSize$$2;
      v157 = j$$7 <= v529;
    }
    var v180 = numberPosition$$1 == "left";
    if (v180) {
      var v158 = outputWindow.document;
      var v950 = adjustNumbering(lineNum, numberingAdjustment);
      var v764 = rightNum(v950, "", 8, tabIn$$3);
      var v530 = v764 + lineOfText$$1;
      var v159 = v530 + "\n";
      v158.write(v159);
      var v163 = strands$$1 == "two";
      if (v163) {
        var v160 = outputWindow.document;
        var v951 = adjustNumbering(lineNum, numberingAdjustment);
        var v765 = rightNum(v951, "", 8, tabIn$$3);
        var v766 = complement(lineOfText$$1);
        var v531 = v765 + v766;
        var v161 = v531 + "\n";
        v160.write(v161);
        var v162 = outputWindow.document;
        v162.write("\n");
      }
    } else {
      var v179 = numberPosition$$1 == "right";
      if (v179) {
        var v164 = outputWindow.document;
        var v767 = adjustNumbering(i$$6, numberingAdjustment);
        var v532 = lineOfText$$1 + v767;
        var v165 = v532 + "\n";
        v164.write(v165);
        var v169 = strands$$1 == "two";
        if (v169) {
          var v166 = outputWindow.document;
          var v768 = complement(lineOfText$$1);
          var v769 = adjustNumbering(i$$6, numberingAdjustment);
          var v533 = v768 + v769;
          var v167 = v533 + "\n";
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
            var v534 = complement(lineOfText$$1);
            var v175 = v534 + "\n";
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
    var v535 = basePerLine$$3 / groupSize$$3;
    var v188 = j$$8 <= v535;
    for (;v188;) {
      var v184 = k$$2 < groupSize$$3;
      for (;v184;) {
        var v536 = i$$7 + k$$2;
        var v182 = v536 >= stopBase$$3;
        if (v182) {
          break;
        }
        var v537 = k$$2 + i$$7;
        var v183 = text$$13.charAt(v537);
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
      var v538 = basePerLine$$3 / groupSize$$3;
      v188 = j$$8 <= v538;
    }
    var v199 = numberPosition$$2 == "left";
    if (v199) {
      var v189 = outputWindow.document;
      var v770 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v539 = v770 + lineOfText$$2;
      var v190 = v539 + "\n";
      v189.write(v190);
    } else {
      var v198 = numberPosition$$2 == "right";
      if (v198) {
        var v191 = outputWindow.document;
        var v540 = lineOfText$$2 + i$$7;
        var v192 = v540 + "\n";
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
  var v952 = sequence$$13.length;
  var v771 = v952 <= firstIndexToMutate;
  var v953 = !v771;
  if (v953) {
    v771 = lastIndexToMutate < 0;
  }
  var v541 = v771;
  var v772 = !v541;
  if (v772) {
    v541 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v201 = v541;
  if (v201) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v209 = i$$8 < numMut;
  for (;v209;) {
    maxNum = sequence$$13.length;
    var v542 = Math.random();
    var v202 = v542 * maxNum;
    randNum = Math.floor(v202);
    var v543 = randNum < firstIndexToMutate;
    var v773 = !v543;
    if (v773) {
      v543 = randNum > lastIndexToMutate;
    }
    var v203 = v543;
    if (v203) {
      numMut++;
      i$$8++;
      v209 = i$$8 < numMut;
      continue;
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for (;needNewChar;) {
      var v544 = Math.random();
      var v545 = components$$1.length;
      var v204 = v544 * v545;
      componentsIndex = Math.round(v204);
      var v546 = components$$1.length;
      var v205 = componentsIndex == v546;
      if (v205) {
        componentsIndex = 0;
      }
      var v547 = components$$1[componentsIndex];
      var v206 = v547 != currentChar;
      if (v206) {
        needNewChar = false;
      }
    }
    var v548 = sequence$$13.substring(0, randNum);
    var v549 = components$$1[componentsIndex];
    var v207 = v548 + v549;
    var v550 = randNum + 1;
    var v551 = sequence$$13.length;
    var v208 = sequence$$13.substring(v550, v551);
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
    var v552 = Math.random();
    var v553 = components$$2.length;
    var v212 = v552 * v553;
    tempNum$$1 = Math.floor(v212);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v554 = sequence$$14.length;
    var v215 = v554 == 60;
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
    var v954 = sequence$$15.length;
    var v774 = v954 - lookAhead;
    var v775 = sequence$$15.length;
    var v555 = sequence$$15.substring(v774, v775);
    var v220 = v555 + sequence$$15;
    var v221 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v220 + v221;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v223 = outputWindow.document;
  v223.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  var v224 = outputWindow.document;
  var v955 = '<tr><td class="title" width="200px">' + "Site:";
  var v776 = v955 + '</td><td class="title">';
  var v556 = v776 + "Positions:";
  var v225 = v556 + "</td></tr>\n";
  v224.write(v225);
  var i$$9 = 0;
  var v557 = arrayOfItems.length;
  var v241 = i$$9 < v557;
  for (;v241;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v558 = arrayOfItems[i$$9];
    var v226 = v558.match(/\/.+\//);
    matchExp = v226 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    var v956 = arrayOfItems[i$$9];
    var v777 = v956.match(/\)\D*\d+/);
    var v559 = v777.toString();
    var v227 = v559.replace(/\)\D*/, "");
    cutDistance = parseFloat(v227);
    var v233 = matchArray$$1 = matchExp.exec(sequence$$15);
    for (;v233;) {
      var v228 = matchExp.lastIndex;
      matchPosition = v228 - cutDistance;
      var v560 = matchPosition >= lowerLimit;
      if (v560) {
        v560 = matchPosition < upperLimit;
      }
      var v231 = v560;
      if (v231) {
        timesFound++;
        var v229 = tempString$$1 + ", ";
        var v561 = matchPosition - shiftValue;
        var v230 = v561 + 1;
        tempString$$1 = v229 + v230;
      }
      var v562 = matchExp.lastIndex;
      var v778 = RegExp.lastMatch;
      var v563 = v778.length;
      var v232 = v562 - v563;
      matchExp.lastIndex = v232 + 1;
      v233 = matchArray$$1 = matchExp.exec(sequence$$15);
    }
    var v564 = tempString$$1.search(/\d/);
    var v234 = v564 != -1;
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
    var v1141 = '<tr><td class="' + backGroundClass;
    var v1118 = v1141 + '">';
    var v1167 = arrayOfItems[i$$9];
    var v1156 = v1167.match(/\([^\(]+\)/);
    var v1142 = v1156.toString();
    var v1119 = v1142.replace(/\(|\)/g, "");
    var v1090 = v1118 + v1119;
    var v1047 = v1090 + '</td><td class="';
    var v957 = v1047 + backGroundClass;
    var v779 = v957 + '">';
    var v565 = v779 + tempString$$1;
    var v240 = v565 + "</td></tr>\n";
    v239.write(v240);
    timesFound = 0;
    i$$9++;
    var v566 = arrayOfItems.length;
    v241 = i$$9 < v566;
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
  var v1091 = '<tr><td class="title">' + "Pattern:";
  var v1048 = v1091 + '</td><td class="title">';
  var v958 = v1048 + "Times found:";
  var v780 = v958 + '</td><td class="title">';
  var v567 = v780 + "Percentage:";
  var v245 = v567 + "</td></tr>\n";
  v244.write(v245);
  var i$$10 = 0;
  var v568 = arrayOfItems$$1.length;
  var v254 = i$$10 < v568;
  for (;v254;) {
    var tempNumber = 0;
    var v569 = arrayOfItems$$1[i$$10];
    var v246 = v569.match(/\/[^\/]+\//);
    var matchExp$$1 = v246 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    var v570 = sequence$$16.search(matchExp$$1);
    var v248 = v570 != -1;
    if (v248) {
      var v247 = sequence$$16.match(matchExp$$1);
      tempNumber = v247.length;
    }
    var percentage = 0;
    var v781 = originalLength + 1;
    var v1049 = arrayOfItems$$1[i$$10];
    var v959 = v1049.match(/\d+/);
    var v782 = parseFloat(v959);
    var v571 = v781 - v782;
    var v251 = v571 > 0;
    if (v251) {
      var v249 = 100 * tempNumber;
      var v572 = originalLength + 1;
      var v960 = arrayOfItems$$1[i$$10];
      var v783 = v960.match(/\d+/);
      var v573 = parseFloat(v783);
      var v250 = v572 - v573;
      percentage = v249 / v250;
    }
    var v252 = outputWindow.document;
    var v1168 = arrayOfItems$$1[i$$10];
    var v1157 = v1168.match(/\([^\(]+\)\b/);
    var v1143 = v1157.toString();
    var v1120 = v1143.replace(/\(|\)/g, "");
    var v1092 = "<tr><td>" + v1120;
    var v1050 = v1092 + "</td><td>";
    var v961 = v1050 + tempNumber;
    var v784 = v961 + "</td><td>";
    var v785 = percentage.toFixed(2);
    var v574 = v784 + v785;
    var v253 = v574 + "</td></tr>\n";
    v252.write(v253);
    i$$10++;
    var v575 = arrayOfItems$$1.length;
    v254 = i$$10 < v575;
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
  var v576 = sequence$$17.length;
  var v262 = v576 > 0;
  for (;v262;) {
    maxNum$$1 = sequence$$17.length;
    var v577 = Math.random();
    var v256 = v577 * maxNum$$1;
    randNum$$1 = Math.floor(v256);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v257 = randNum$$1 + 1;
    var v258 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v257, v258);
    sequence$$17 = tempString1 + tempString2;
    var v578 = tempSeq.length;
    var v261 = v578 == 60;
    if (v261) {
      var v259 = outputWindow.document;
      var v260 = tempSeq + "\n";
      v259.write(v260);
      tempSeq = "";
    }
    var v579 = sequence$$17.length;
    v262 = v579 > 0;
  }
  var v263 = outputWindow.document;
  var v264 = tempSeq + "\n";
  v263.write(v264);
  return true;
}
function fuzzySearchDna() {
  var theDocument = document;
  var targetSequence = "";
  var targetTitle = "";
  var querySequence = "";
  var queryTitle = "";
  var maxTarget = 2E3;
  var maxQuery = 30;
  var v580 = testScript();
  var v265 = v580 == false;
  if (v265) {
    return;
  }
  var v1158 = theDocument.forms;
  var v1144 = v1158[0];
  var v1121 = v1144.elements;
  var v1093 = v1121[0];
  var v1051 = checkFormElement(v1093);
  var v962 = v1051 == false;
  var v1053 = !v962;
  if (v1053) {
    var v1169 = theDocument.forms;
    var v1159 = v1169[0];
    var v1145 = v1159.elements;
    var v1122 = v1145[0];
    var v1094 = v1122.value;
    var v1052 = checkSequenceLength(v1094, maxTarget);
    v962 = v1052 == false;
  }
  var v786 = v962;
  var v964 = !v786;
  if (v964) {
    var v1146 = theDocument.forms;
    var v1123 = v1146[0];
    var v1095 = v1123.elements;
    var v1054 = v1095[1];
    var v963 = checkFormElement(v1054);
    v786 = v963 == false;
  }
  var v581 = v786;
  var v788 = !v581;
  if (v788) {
    var v1147 = theDocument.forms;
    var v1124 = v1147[0];
    var v1096 = v1124.elements;
    var v1055 = v1096[1];
    var v965 = v1055.value;
    var v787 = checkSequenceLength(v965, maxQuery);
    v581 = v787 == false;
  }
  var v266 = v581;
  if (v266) {
    return;
  }
  var v1125 = theDocument.forms;
  var v1097 = v1125[0];
  var v1056 = v1097.elements;
  var v966 = v1056[5];
  var v789 = v966.options;
  var v1126 = theDocument.forms;
  var v1098 = v1126[0];
  var v1057 = v1098.elements;
  var v967 = v1057[5];
  var v790 = v967.selectedIndex;
  var v582 = v789[v790];
  var v267 = v582.value;
  var MATCH_SCORE = parseInt(v267);
  var v1127 = theDocument.forms;
  var v1099 = v1127[0];
  var v1058 = v1099.elements;
  var v968 = v1058[6];
  var v791 = v968.options;
  var v1128 = theDocument.forms;
  var v1100 = v1128[0];
  var v1059 = v1100.elements;
  var v969 = v1059[6];
  var v792 = v969.selectedIndex;
  var v583 = v791[v792];
  var v268 = v583.value;
  var MISMATCH_SCORE = parseInt(v268);
  var v1129 = theDocument.forms;
  var v1101 = v1129[0];
  var v1060 = v1101.elements;
  var v970 = v1060[7];
  var v793 = v970.options;
  var v1130 = theDocument.forms;
  var v1102 = v1130[0];
  var v1061 = v1102.elements;
  var v971 = v1061[7];
  var v794 = v971.selectedIndex;
  var v584 = v793[v794];
  var v269 = v584.value;
  var GAP_PENALTY = parseInt(v269);
  var v1131 = theDocument.forms;
  var v1103 = v1131[0];
  var v1062 = v1103.elements;
  var v972 = v1062[8];
  var v795 = v972.options;
  var v1132 = theDocument.forms;
  var v1104 = v1132[0];
  var v1063 = v1104.elements;
  var v973 = v1063[8];
  var v796 = v973.selectedIndex;
  var v585 = v795[v796];
  var v270 = v585.value;
  var HITS = parseInt(v270);
  openWindow();
  openPre();
  var v1064 = theDocument.forms;
  var v974 = v1064[0];
  var v797 = v974.elements;
  var v586 = v797[0];
  var v271 = v586.value;
  targetSequence = getSequenceFromFasta(v271);
  targetSequence = removeNonDna(targetSequence);
  var v1065 = theDocument.forms;
  var v975 = v1065[0];
  var v798 = v975.elements;
  var v587 = v798[0];
  var v272 = v587.value;
  targetTitle = getTitleFromFasta(v272);
  var v1066 = theDocument.forms;
  var v976 = v1066[0];
  var v799 = v976.elements;
  var v588 = v799[1];
  var v273 = v588.value;
  querySequence = getSequenceFromFasta(v273);
  querySequence = removeNonDna(querySequence);
  queryTitle = "query";
  var v274 = outputWindow.document;
  var v275 = getFuzzySearchTitle(targetTitle, targetSequence, queryTitle, querySequence);
  v274.write(v275);
  var v589 = targetSequence.search(/./);
  var v276 = v589 != -1;
  if (v276) {
    targetSequence = targetSequence.match(/./g);
  }
  var v590 = querySequence.search(/./);
  var v277 = v590 != -1;
  if (v277) {
    querySequence = querySequence.match(/./g);
  }
  var v591 = targetSequence.length;
  var v278 = v591 == 0;
  if (v278) {
    alert("The sequence contains no DNA bases.");
    return;
  }
  var v592 = querySequence.length;
  var v279 = v592 == 0;
  if (v279) {
    alert("The query sequence contains no DNA bases.");
    return;
  }
  _fuzzySearchDna(queryTitle, querySequence, targetTitle, targetSequence, MATCH_SCORE, MISMATCH_SCORE, GAP_PENALTY, HITS);
  closePre();
  closeWindow();
  return;
}
function _fuzzySearchDna(queryTitle$$1, querySequence$$1, targetTitle$$1, targetSequence$$1, matchScore, mismatchScore, gapPenalty, hits) {
  var matrix = new Identity;
  matrix.setMatch(matchScore);
  matrix.setMismatch(mismatchScore);
  var scoreSet = new ScoreSet;
  scoreSet.setScoreSetParam(matrix, gapPenalty, hits);
  var fuzzySearch = new FuzzySearch;
  fuzzySearch.initializeMatrix(querySequence$$1, targetSequence$$1, scoreSet);
  fuzzySearch.search();
  hits = fuzzySearch.getHits();
  var v593 = hits.length;
  var v292 = v593 > 0;
  if (v292) {
    var i$$11 = 0;
    var v594 = hits.length;
    var v290 = i$$11 < v594;
    for (;v290;) {
      var v280 = outputWindow.document;
      var v1105 = ">" + queryTitle$$1;
      var v1067 = v1105 + " from ";
      var v1106 = hits[i$$11];
      var v1068 = v1106.startM;
      var v977 = v1067 + v1068;
      var v800 = v977 + " to ";
      var v978 = hits[i$$11];
      var v801 = v978.endM;
      var v595 = v800 + v801;
      var v281 = v595 + "\n";
      v280.write(v281);
      var v282 = outputWindow.document;
      var v802 = hits[i$$11];
      var v596 = v802.sequenceM;
      var v283 = v596 + "\n";
      v282.write(v283);
      var v284 = outputWindow.document;
      var v1107 = ">" + targetTitle$$1;
      var v1069 = v1107 + " from ";
      var v1108 = hits[i$$11];
      var v1070 = v1108.startN;
      var v979 = v1069 + v1070;
      var v803 = v979 + " to ";
      var v980 = hits[i$$11];
      var v804 = v980.endN;
      var v597 = v803 + v804;
      var v285 = v597 + "\n";
      v284.write(v285);
      var v286 = outputWindow.document;
      var v805 = hits[i$$11];
      var v598 = v805.sequenceN;
      var v287 = v598 + "\n";
      v286.write(v287);
      var v288 = outputWindow.document;
      var v981 = hits[i$$11];
      var v806 = v981.score;
      var v599 = "Score: " + v806;
      var v289 = v599 + "\n\n";
      v288.write(v289);
      i$$11++;
      var v600 = hits.length;
      v290 = i$$11 < v600;
    }
  } else {
    var v291 = outputWindow.document;
    v291.write("No hits were obtained.\n\n");
  }
  return;
}
function getScore(r1$$1, r2) {
  var v293 = this.scoringMatrix;
  return v293.scoringMatrix_getScore(r1$$1, r2);
}
function setScoreSetParam(scoringMatrix, gapPenalty$$1, hits$$1) {
  this.scoringMatrix = scoringMatrix;
  this.gap = gapPenalty$$1;
  this.hits = hits$$1;
  return;
}
function ScoreSet() {
  return;
}
function scoringMatrix_getScore(r1$$2, r2$$1) {
  r1$$2 = r1$$2.toLowerCase();
  r2$$1 = r2$$1.toLowerCase();
  var v294 = r1$$2 == r2$$1;
  if (v294) {
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
function Node() {
  this.alreadyMatched = false;
  return;
}
function initializeMatrix(sequenceOne$$2, sequenceTwo$$2, scoreSet$$1) {
  this.scoreSet = scoreSet$$1;
  this.M = sequenceOne$$2;
  this.N = sequenceTwo$$2;
  this.score = 0;
  var v807 = this.M;
  var v601 = v807.length;
  var v295 = v601 + 1;
  var v1205 = new Array(v295);
  this.nodes = v1205;
  var i$$12 = 0;
  var v808 = this.nodes;
  var v602 = v808.length;
  var v299 = i$$12 < v602;
  for (;v299;) {
    var v296 = this.nodes;
    var v982 = this.N;
    var v809 = v982.length;
    var v603 = v809 + 1;
    var v1206 = new Array(v603);
    v296[i$$12] = v1206;
    var j$$10 = 0;
    var v983 = this.nodes;
    var v810 = v983[i$$12];
    var v604 = v810.length;
    var v298 = j$$10 < v604;
    for (;v298;) {
      var v605 = this.nodes;
      var v297 = v605[i$$12];
      var v1207 = new Node;
      v297[j$$10] = v1207;
      j$$10++;
      var v984 = this.nodes;
      var v811 = v984[i$$12];
      var v606 = v811.length;
      v298 = j$$10 < v606;
    }
    i$$12++;
    var v812 = this.nodes;
    var v607 = v812.length;
    v299 = i$$12 < v607;
  }
  var v813 = this.nodes;
  var v608 = v813[0];
  var v300 = v608[0];
  v300.value = 0;
  i$$12 = 1;
  var v814 = this.nodes;
  var v609 = v814.length;
  var v304 = i$$12 < v609;
  for (;v304;) {
    var v815 = this.nodes;
    var v610 = v815[i$$12];
    var v301 = v610[0];
    var v985 = this.nodes;
    var v986 = i$$12 - 1;
    var v816 = v985[v986];
    var v611 = v816[0];
    v301.value = v611.value;
    var v817 = this.nodes;
    var v612 = v817[i$$12];
    var v302 = v612[0];
    v302.tracebackI = i$$12 - 1;
    var v818 = this.nodes;
    var v613 = v818[i$$12];
    var v303 = v613[0];
    v303.tracebackJ = 0;
    i$$12++;
    var v819 = this.nodes;
    var v614 = v819.length;
    v304 = i$$12 < v614;
  }
  j$$10 = 1;
  var v987 = this.nodes;
  var v820 = v987[0];
  var v615 = v820.length;
  var v308 = j$$10 < v615;
  for (;v308;) {
    var v821 = this.nodes;
    var v616 = v821[0];
    var v305 = v616[j$$10];
    var v988 = this.nodes;
    var v822 = v988[0];
    var v823 = j$$10 - 1;
    var v617 = v822[v823];
    v305.value = v617.value;
    var v824 = this.nodes;
    var v618 = v824[0];
    var v306 = v618[j$$10];
    v306.tracebackI = 0;
    var v825 = this.nodes;
    var v619 = v825[0];
    var v307 = v619[j$$10];
    v307.tracebackJ = j$$10 - 1;
    j$$10++;
    var v989 = this.nodes;
    var v826 = v989[0];
    var v620 = v826.length;
    v308 = j$$10 < v620;
  }
  return;
}
function dumpMatrix() {
  var v309 = outputWindow.document;
  var v1071 = this.nodes;
  var v990 = v1071.length;
  var v827 = "Dynamic programming matrix i=" + v990;
  var v621 = v827 + " and j=";
  var v991 = this.nodes;
  var v828 = v991[0];
  var v622 = v828.length;
  var v310 = v621 + v622;
  v309.write(v310);
  var v311 = outputWindow.document;
  v311.write("\n");
  var i$$13 = 0;
  var v829 = this.nodes;
  var v623 = v829.length;
  var v322 = i$$13 < v623;
  for (;v322;) {
    var j$$11 = 0;
    var v992 = this.nodes;
    var v830 = v992[i$$13];
    var v624 = v830.length;
    var v320 = j$$11 < v624;
    for (;v320;) {
      var v831 = this.nodes;
      var v625 = v831[i$$13];
      var v312 = v625[j$$11];
      var traceI = v312.tracebackI;
      var v832 = this.nodes;
      var v626 = v832[i$$13];
      var v313 = v626[j$$11];
      var traceJ = v313.tracebackJ;
      var v314 = traceI == undefined;
      if (v314) {
        traceI = "u";
      }
      var v315 = traceJ == undefined;
      if (v315) {
        traceJ = "u";
      }
      var v1148 = "(" + i$$13;
      var v1133 = v1148 + ",";
      var v1109 = v1133 + j$$11;
      var v1072 = v1109 + ")[";
      var v993 = v1072 + traceI;
      var v833 = v993 + ",";
      var v627 = v833 + traceJ;
      var v316 = v627 + "]=";
      var v994 = this.nodes;
      var v834 = v994[i$$13];
      var v628 = v834[j$$11];
      var v317 = v628.value;
      var output = v316 + v317;
      var v318 = outputWindow.document;
      var v319 = rightNum(output, "", 20, " ");
      v318.write(v319);
      j$$11++;
      var v995 = this.nodes;
      var v835 = v995[i$$13];
      var v629 = v835.length;
      v320 = j$$11 < v629;
    }
    var v321 = outputWindow.document;
    v321.write("\n");
    i$$13++;
    var v836 = this.nodes;
    var v630 = v836.length;
    v322 = i$$13 < v630;
  }
  var v323 = outputWindow.document;
  v323.write("\n");
  return;
}
function updateMatrix() {
  var i$$14 = 1;
  var v837 = this.nodes;
  var v631 = v837.length;
  var v364 = i$$14 < v631;
  for (;v364;) {
    var j$$12 = 1;
    var v996 = this.nodes;
    var v838 = v996[0];
    var v632 = v838.length;
    var v363 = j$$12 < v632;
    for (;v363;) {
      var a;
      var b;
      var c;
      var v997 = this.nodes;
      var v839 = v997[i$$14];
      var v633 = v839[j$$12];
      var v347 = v633.alreadyMatched;
      if (v347) {
        a = 0;
        b = 0;
        c = 0;
      } else {
        var v1073 = this.nodes;
        var v998 = v1073.length;
        var v840 = v998 - 1;
        var v634 = i$$14 == v840;
        if (v634) {
          var v1110 = this.nodes;
          var v1074 = v1110[0];
          var v999 = v1074.length;
          var v841 = v999 - 1;
          v634 = j$$12 == v841;
        }
        var v346 = v634;
        if (v346) {
          var v842 = this.nodes;
          var v843 = i$$14 - 1;
          var v635 = v842[v843];
          var v324 = v635[j$$12];
          a = v324.value;
          var v844 = this.nodes;
          var v636 = v844[i$$14];
          var v637 = j$$12 - 1;
          var v325 = v636[v637];
          b = v325.value;
          var v1000 = this.nodes;
          var v1001 = i$$14 - 1;
          var v845 = v1000[v1001];
          var v846 = j$$12 - 1;
          var v638 = v845[v846];
          var v326 = v638.value;
          var v639 = this.scoreSet;
          var v847 = this.M;
          var v848 = i$$14 - 1;
          var v640 = v847[v848];
          var v849 = this.N;
          var v850 = j$$12 - 1;
          var v641 = v849[v850];
          var v327 = v639.getScore(v640, v641);
          c = v326 + v327;
        } else {
          var v1002 = this.nodes;
          var v851 = v1002.length;
          var v642 = v851 - 1;
          var v345 = i$$14 == v642;
          if (v345) {
            var v1003 = this.nodes;
            var v1004 = i$$14 - 1;
            var v852 = v1003[v1004];
            var v643 = v852[j$$12];
            var v328 = v643.value;
            var v644 = this.scoreSet;
            var v329 = v644.gap;
            a = v328 - v329;
            var v853 = this.nodes;
            var v645 = v853[i$$14];
            var v646 = j$$12 - 1;
            var v330 = v645[v646];
            b = v330.value;
            var v1005 = this.nodes;
            var v1006 = i$$14 - 1;
            var v854 = v1005[v1006];
            var v855 = j$$12 - 1;
            var v647 = v854[v855];
            var v331 = v647.value;
            var v648 = this.scoreSet;
            var v856 = this.M;
            var v857 = i$$14 - 1;
            var v649 = v856[v857];
            var v858 = this.N;
            var v859 = j$$12 - 1;
            var v650 = v858[v859];
            var v332 = v648.getScore(v649, v650);
            c = v331 + v332;
          } else {
            var v1075 = this.nodes;
            var v1007 = v1075[0];
            var v860 = v1007.length;
            var v651 = v860 - 1;
            var v344 = j$$12 == v651;
            if (v344) {
              var v861 = this.nodes;
              var v862 = i$$14 - 1;
              var v652 = v861[v862];
              var v333 = v652[j$$12];
              a = v333.value;
              var v1008 = this.nodes;
              var v863 = v1008[i$$14];
              var v864 = j$$12 - 1;
              var v653 = v863[v864];
              var v334 = v653.value;
              var v654 = this.scoreSet;
              var v335 = v654.gap;
              b = v334 - v335;
              var v1009 = this.nodes;
              var v1010 = i$$14 - 1;
              var v865 = v1009[v1010];
              var v866 = j$$12 - 1;
              var v655 = v865[v866];
              var v336 = v655.value;
              var v656 = this.scoreSet;
              var v867 = this.M;
              var v868 = i$$14 - 1;
              var v657 = v867[v868];
              var v869 = this.N;
              var v870 = j$$12 - 1;
              var v658 = v869[v870];
              var v337 = v656.getScore(v657, v658);
              c = v336 + v337;
            } else {
              var v1011 = this.nodes;
              var v1012 = i$$14 - 1;
              var v871 = v1011[v1012];
              var v659 = v871[j$$12];
              var v338 = v659.value;
              var v660 = this.scoreSet;
              var v339 = v660.gap;
              a = v338 - v339;
              var v1013 = this.nodes;
              var v872 = v1013[i$$14];
              var v873 = j$$12 - 1;
              var v661 = v872[v873];
              var v340 = v661.value;
              var v662 = this.scoreSet;
              var v341 = v662.gap;
              b = v340 - v341;
              var v1014 = this.nodes;
              var v1015 = i$$14 - 1;
              var v874 = v1014[v1015];
              var v875 = j$$12 - 1;
              var v663 = v874[v875];
              var v342 = v663.value;
              var v664 = this.scoreSet;
              var v876 = this.M;
              var v877 = i$$14 - 1;
              var v665 = v876[v877];
              var v878 = this.N;
              var v879 = j$$12 - 1;
              var v666 = v878[v879];
              var v343 = v664.getScore(v665, v666);
              c = v342 + v343;
            }
          }
        }
      }
      var v667 = a > b;
      if (v667) {
        v667 = a > c;
      }
      var v358 = v667;
      if (v358) {
        var v880 = this.nodes;
        var v668 = v880[i$$14];
        var v348 = v668[j$$12];
        v348.value = a;
        var v881 = this.nodes;
        var v669 = v881[i$$14];
        var v349 = v669[j$$12];
        v349.tracebackI = i$$14 - 1;
        var v882 = this.nodes;
        var v670 = v882[i$$14];
        var v350 = v670[j$$12];
        v350.tracebackJ = j$$12;
      } else {
        var v671 = b > c;
        if (v671) {
          v671 = b > a;
        }
        var v357 = v671;
        if (v357) {
          var v883 = this.nodes;
          var v672 = v883[i$$14];
          var v351 = v672[j$$12];
          v351.value = b;
          var v884 = this.nodes;
          var v673 = v884[i$$14];
          var v352 = v673[j$$12];
          v352.tracebackI = i$$14;
          var v885 = this.nodes;
          var v674 = v885[i$$14];
          var v353 = v674[j$$12];
          v353.tracebackJ = j$$12 - 1;
        } else {
          var v886 = this.nodes;
          var v675 = v886[i$$14];
          var v354 = v675[j$$12];
          v354.value = c;
          var v887 = this.nodes;
          var v676 = v887[i$$14];
          var v355 = v676[j$$12];
          v355.tracebackI = i$$14 - 1;
          var v888 = this.nodes;
          var v677 = v888[i$$14];
          var v356 = v677[j$$12];
          v356.tracebackJ = j$$12 - 1;
        }
      }
      var v1076 = this.nodes;
      var v1016 = v1076[i$$14];
      var v889 = v1016[j$$12];
      var v678 = v889.value;
      var v362 = v678 < 0;
      if (v362) {
        var v890 = this.nodes;
        var v679 = v890[i$$14];
        var v359 = v679[j$$12];
        v359.value = 0;
        var v891 = this.nodes;
        var v680 = v891[i$$14];
        var v360 = v680[j$$12];
        v360.tracebackI = undefined;
        var v892 = this.nodes;
        var v681 = v892[i$$14];
        var v361 = v681[j$$12];
        v361.tracebackJ = undefined;
      }
      j$$12++;
      var v1017 = this.nodes;
      var v893 = v1017[0];
      var v682 = v893.length;
      v363 = j$$12 < v682;
    }
    i$$14++;
    var v894 = this.nodes;
    var v683 = v894.length;
    v364 = i$$14 < v683;
  }
  var v895 = this.nodes;
  var v1077 = this.nodes;
  var v1018 = v1077.length;
  var v896 = v1018 - 1;
  var v684 = v895[v896];
  var v1078 = this.nodes;
  var v1019 = v1078[0];
  var v897 = v1019.length;
  var v685 = v897 - 1;
  var v365 = v684[v685];
  this.score = v365.value;
  return;
}
function search() {
  var v1208 = new Array;
  this.hits = v1208;
  var hitCount = 0;
  var v898 = this.scoreSet;
  var v686 = v898.hits;
  var v389 = hitCount < v686;
  for (;v389;) {
    this.updateMatrix();
    var maxNodeValue = 0;
    var maxNodeI = undefined;
    var maxNodeJ = undefined;
    var i$$15 = 1;
    var v899 = this.nodes;
    var v687 = v899.length;
    var v369 = i$$15 < v687;
    for (;v369;) {
      var j$$13 = 1;
      var v1020 = this.nodes;
      var v900 = v1020[0];
      var v688 = v900.length;
      var v368 = j$$13 < v688;
      for (;v368;) {
        var v1079 = this.nodes;
        var v1021 = v1079[i$$15];
        var v901 = v1021[j$$13];
        var v689 = v901.value;
        var v367 = v689 > maxNodeValue;
        if (v367) {
          var v902 = this.nodes;
          var v690 = v902[i$$15];
          var v366 = v690[j$$13];
          maxNodeValue = v366.value;
          maxNodeI = i$$15;
          maxNodeJ = j$$13;
        }
        j$$13++;
        var v1022 = this.nodes;
        var v903 = v1022[0];
        var v691 = v903.length;
        v368 = j$$13 < v691;
      }
      i$$15++;
      var v904 = this.nodes;
      var v692 = v904.length;
      v369 = i$$15 < v692;
    }
    var v370 = maxNodeValue == 0;
    if (v370) {
      break;
    }
    var currentI = maxNodeI;
    var currentJ = maxNodeJ;
    var v693 = this.nodes;
    var v371 = v693[maxNodeI];
    var currentNode = v371[maxNodeJ];
    var alignedM = new Array;
    var alignedN = new Array;
    var score = currentNode.value;
    var endM = undefined;
    var endN = undefined;
    var v905 = currentNode.tracebackI;
    var v694 = v905 != undefined;
    if (v694) {
      var v906 = currentNode.tracebackJ;
      v694 = v906 != undefined;
    }
    var v386 = v694;
    for (;v386;) {
      var v695 = currentI == 0;
      var v907 = !v695;
      if (v907) {
        v695 = currentJ == 0;
      }
      var v372 = v695;
      if (v372) {
        break;
      }
      var v908 = currentNode.tracebackI;
      var v909 = currentI - 1;
      var v696 = v908 == v909;
      if (v696) {
        var v910 = currentNode.tracebackJ;
        var v911 = currentJ - 1;
        v696 = v910 == v911;
      }
      var v381 = v696;
      if (v381) {
        var v373 = endM == undefined;
        if (v373) {
          endM = currentI;
          endN = currentJ;
        }
        var v697 = this.M;
        var v698 = currentI - 1;
        var v374 = v697[v698];
        alignedM.push(v374);
        var v699 = this.N;
        var v700 = currentJ - 1;
        var v375 = v699[v700];
        alignedN.push(v375);
      } else {
        var v701 = currentNode.tracebackJ;
        var v702 = currentJ - 1;
        var v380 = v701 == v702;
        if (v380) {
          var v377 = endM != undefined;
          if (v377) {
            alignedM.push("-");
            var v703 = this.N;
            var v704 = currentJ - 1;
            var v376 = v703[v704];
            alignedN.push(v376);
          }
        } else {
          var v379 = endM != undefined;
          if (v379) {
            var v705 = this.M;
            var v706 = currentI - 1;
            var v378 = v705[v706];
            alignedM.push(v378);
            alignedN.push("-");
          }
        }
      }
      var v912 = this.nodes;
      var v707 = v912[currentI];
      var v382 = v707[currentJ];
      v382.value = 0;
      var v913 = this.nodes;
      var v708 = v913[currentI];
      var v383 = v708[currentJ];
      v383.alreadyMatched = true;
      currentI = currentNode.tracebackI;
      currentJ = currentNode.tracebackJ;
      var v709 = this.nodes;
      var v710 = currentNode.tracebackI;
      var v384 = v709[v710];
      var v385 = currentNode.tracebackJ;
      currentNode = v384[v385];
      var v914 = currentNode.tracebackI;
      var v711 = v914 != undefined;
      if (v711) {
        var v915 = currentNode.tracebackJ;
        v711 = v915 != undefined;
      }
      v386 = v711;
    }
    alignedM = alignedM.reverse();
    alignedN = alignedN.reverse();
    var v387 = this.hits;
    var v712 = alignedM.join("");
    var v713 = alignedN.join("");
    var v714 = currentI + 1;
    var v715 = currentJ + 1;
    var v388 = new Hit(v712, v713, score, v714, endM, v715, endN);
    v387.push(v388);
    hitCount++;
    var v916 = this.scoreSet;
    var v716 = v916.hits;
    v389 = hitCount < v716;
  }
  return;
}
function getHits() {
  return this.hits;
}
function FuzzySearch() {
  return;
}
function Hit(sequenceM, sequenceN, score$$1, startM, endM$$1, startN, endN$$1) {
  this.sequenceM = sequenceM;
  this.sequenceN = sequenceN;
  this.score = score$$1;
  this.startM = startM;
  this.endM = endM$$1;
  this.startN = startN;
  this.endN = endN$$1;
  return;
}
new ScoreSet;
var v390 = ScoreSet.prototype;
v390.getScore = getScore;
var v391 = ScoreSet.prototype;
v391.setScoreSetParam = setScoreSetParam;
new ScoringMatrix;
var v392 = ScoringMatrix.prototype;
v392.scoringMatrix_getScore = scoringMatrix_getScore;
var v393 = Identity;
var v1209 = new ScoringMatrix;
v393.prototype = v1209;
var v394 = Identity.prototype;
v394.setMismatch = setMismatch;
var v395 = Identity.prototype;
v395.setMatch = setMatch;
new FuzzySearch;
var v396 = FuzzySearch.prototype;
v396.initializeMatrix = initializeMatrix;
var v397 = FuzzySearch.prototype;
v397.updateMatrix = updateMatrix;
var v398 = FuzzySearch.prototype;
v398.search = search;
var v399 = FuzzySearch.prototype;
v399.getHits = getHits;
var v400 = FuzzySearch.prototype;
v400.dumpMatrix = dumpMatrix;
document.onload = v2;
var v401 = document.getElementById("submitbtn");
v401.onclick = v3;
var v402 = document.getElementById("clearbtn");
v402.onclick = v4

}

JAM.stopProfile('load');
