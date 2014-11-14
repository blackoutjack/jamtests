introspect(JAM.policy.pFull) {
function v12() {
  var v859 = document.forms;
  var v713 = v859[0];
  var v411 = v713.elements;
  var v13 = v411[0];
  v13.value = " ";
  return;
}
function v11() {
  try {
    windowExtract(document);
  } catch (e$$7) {
    var v14 = "The following error was encountered: " + e$$7;
    alert(v14);
  }
  return;
}
function v10() {
  var v412 = document.main_form;
  var v15 = v412.main_submit;
  v15.focus();
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
  var v16 = arrayOfSequences[0];
  var lengthOfAlign = v16.length;
  var v413 = arrayOfSequences.length;
  var v17 = v413 < 2;
  if (v17) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v414 = arrayOfTitles.length;
  var v19 = i$$1 < v414;
  for (;v19;) {
    var v964 = arrayOfTitles[i$$1];
    var v860 = v964.search(/\S/);
    var v714 = v860 == -1;
    var v862 = !v714;
    if (v862) {
      var v965 = arrayOfSequences[i$$1];
      var v861 = v965.search(/\S/);
      v714 = v861 == -1;
    }
    var v415 = v714;
    var v716 = !v415;
    if (v716) {
      var v863 = arrayOfSequences[i$$1];
      var v715 = v863.length;
      v415 = v715 != lengthOfAlign;
    }
    var v18 = v415;
    if (v18) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v416 = arrayOfTitles.length;
    v19 = i$$1 < v416;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v1032 = codonTable.search(/AmAcid/);
  var v966 = v1032 == -1;
  var v1034 = !v966;
  if (v1034) {
    var v1033 = codonTable.search(/Codon/);
    v966 = v1033 == -1;
  }
  var v864 = v966;
  var v968 = !v864;
  if (v968) {
    var v967 = codonTable.search(/Number/);
    v864 = v967 == -1;
  }
  var v717 = v864;
  var v866 = !v717;
  if (v866) {
    var v865 = codonTable.search(/\/1000/);
    v717 = v865 == -1;
  }
  var v417 = v717;
  var v719 = !v417;
  if (v719) {
    var v718 = codonTable.search(/Fraction\s*\.\./);
    v417 = v718 == -1;
  }
  var v20 = v417;
  if (v20) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v720 = formElement.value;
  var v418 = v720.search(/\S/);
  var v21 = v418 == -1;
  if (v21) {
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
  var v419 = arrayOfPatterns.length;
  var v24 = z$$2 < v419;
  for (;v24;) {
    var v721 = arrayOfPatterns[z$$2];
    var v420 = v721.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v22 = v420 == -1;
    if (v22) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v722 = arrayOfPatterns[z$$2];
    var v421 = moreExpressionCheck(v722);
    var v23 = v421 == false;
    if (v23) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v422 = arrayOfPatterns.length;
    v24 = z$$2 < v422;
  }
  var v25 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v25);
  var v26 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v26);
  var j = 0;
  var v423 = arrayOfPatterns.length;
  var v30 = j < v423;
  for (;v30;) {
    var v723 = arrayOfPatterns[j];
    var v424 = v723.match(/\/.+\//);
    var v27 = v424 + "gi";
    var v1187 = eval(v27);
    geneticCodeMatchExp[j] = v1187;
    var v425 = arrayOfPatterns[j];
    var v28 = v425.match(/=[a-zA-Z\*]/);
    var v1188 = v28.toString();
    geneticCodeMatchResult[j] = v1188;
    var v29 = geneticCodeMatchResult[j];
    var v1189 = v29.replace(/=/g, "");
    geneticCodeMatchResult[j] = v1189;
    j++;
    var v426 = arrayOfPatterns.length;
    v30 = j < v426;
  }
  var i$$2 = 0;
  var v724 = testSequence.length;
  var v427 = v724 - 3;
  var v37 = i$$2 <= v427;
  for (;v37;) {
    var v31 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v31);
    j = 0;
    var v428 = geneticCodeMatchExp.length;
    var v35 = j < v428;
    for (;v35;) {
      var v725 = geneticCodeMatchExp[j];
      var v429 = codon.search(v725);
      var v34 = v429 != -1;
      if (v34) {
        var v33 = oneMatch == true;
        if (v33) {
          var v430 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v32 = v430 + ".";
          alert(v32);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v431 = geneticCodeMatchExp.length;
      v35 = j < v431;
    }
    var v36 = oneMatch == false;
    if (v36) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v726 = testSequence.length;
    var v432 = v726 - 3;
    v37 = i$$2 <= v432;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v433 = arrayOfPatterns$$1.length;
  var v39 = z$$3 < v433;
  for (;v39;) {
    var v727 = arrayOfPatterns$$1[z$$3];
    var v434 = v727.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v38 = v434 != -1;
    if (v38) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v435 = arrayOfPatterns$$1.length;
    v39 = z$$3 < v435;
  }
  var i$$3 = 0;
  var v436 = arrayOfPatterns$$1.length;
  var v43 = i$$3 < v436;
  for (;v43;) {
    var v728 = arrayOfPatterns$$1[i$$3];
    var v437 = "[" + v728;
    var v40 = v437 + "]";
    var re = new RegExp(v40, "gi");
    var j$$1 = i$$3 + 1;
    var v438 = arrayOfPatterns$$1.length;
    var v42 = j$$1 < v438;
    for (;v42;) {
      var v729 = arrayOfPatterns$$1[j$$1];
      var v439 = v729.search(re);
      var v41 = v439 != -1;
      if (v41) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v440 = arrayOfPatterns$$1.length;
      v42 = j$$1 < v440;
    }
    i$$3++;
    var v441 = arrayOfPatterns$$1.length;
    v43 = i$$3 < v441;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v442 = arrayOfPatterns$$2.length;
  var v46 = z$$4 < v442;
  for (;v46;) {
    var v730 = arrayOfPatterns$$2[z$$4];
    var v443 = v730.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v44 = v443 == -1;
    if (v44) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v731 = arrayOfPatterns$$2[z$$4];
    var v444 = moreExpressionCheck(v731);
    var v45 = v444 == false;
    if (v45) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v445 = arrayOfPatterns$$2.length;
    v46 = z$$4 < v445;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v867 = getSequenceFromFasta(text$$7);
  var v732 = v867.replace(/[^A-Za-z]/g, "");
  var v446 = v732.length;
  var v48 = v446 > maxInput;
  if (v48) {
    var v447 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v47 = v447 + " characters.";
    alert(v47);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v448 = text$$8.length;
  var v50 = v448 > maxInput$$1;
  if (v50) {
    var v449 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v49 = v449 + " characters.";
    alert(v49);
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
  var v51 = outputWindow.document;
  v51.write("</form>");
  return true;
}
function closePre() {
  var v52 = outputWindow.document;
  v52.write("</div>");
  var v53 = outputWindow.document;
  v53.write("</pre>\n");
  return;
}
function closeTextArea() {
  var v54 = outputWindow.document;
  v54.write("</textarea>");
  return true;
}
function closeWindow() {
  var v55 = outputWindow.document;
  v55.write("</body>\n</html>\n");
  outputWindow.status = "Done.";
  var v56 = outputWindow.document;
  v56.close();
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
  var v450 = alignArray.length;
  var v57 = v450 < 3;
  if (v57) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v451 = alignArray.length;
  var v59 = i$$4 < v451;
  for (;v59;) {
    var v733 = alignArray[i$$4];
    var v452 = v733.search(/[^\s]+\s/);
    var v58 = v452 == -1;
    if (v58) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v453 = alignArray.length;
    v59 = i$$4 < v453;
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
  var v454 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v62 = v454 != -1;
  if (v62) {
    var v61 = matchArray = re$$1.exec(sequenceData);
    for (;v61;) {
      var v60 = matchArray[0];
      arrayOfFasta.push(v60);
      v61 = matchArray = re$$1.exec(sequenceData);
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v455 = sequence$$2.length;
  var v63 = "&gt;results for " + v455;
  var stringToReturn = v63 + " residue sequence ";
  var v456 = fastaSequenceTitle.search(/[^\s]/);
  var v65 = v456 != -1;
  if (v65) {
    var v457 = stringToReturn + '"';
    var v64 = v457 + fastaSequenceTitle;
    stringToReturn = v64 + '"';
  }
  var v458 = stringToReturn + ' starting "';
  var v459 = sequence$$2.substring(0, 10);
  var v66 = v458 + v459;
  stringToReturn = v66 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v460 = sequenceOne.length;
  var v67 = "Search results for " + v460;
  var stringToReturn$$1 = v67 + " residue sequence ";
  var v461 = fastaSequenceTitleOne.search(/[^\s]/);
  var v69 = v461 != -1;
  if (v69) {
    var v462 = stringToReturn$$1 + '"';
    var v68 = v462 + fastaSequenceTitleOne;
    stringToReturn$$1 = v68 + '"';
  }
  var v463 = stringToReturn$$1 + ' starting "';
  var v464 = sequenceOne.substring(0, 10);
  var v70 = v463 + v464;
  stringToReturn$$1 = v70 + '"\n';
  var v465 = stringToReturn$$1 + "and ";
  var v466 = sequenceTwo.length;
  var v71 = v465 + v466;
  stringToReturn$$1 = v71 + " residue sequence ";
  var v467 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v73 = v467 != -1;
  if (v73) {
    var v468 = stringToReturn$$1 + '"';
    var v72 = v468 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v72 + '"';
  }
  var v469 = stringToReturn$$1 + ' starting "';
  var v470 = sequenceTwo.substring(0, 10);
  var v74 = v469 + v470;
  stringToReturn$$1 = v74 + '"';
  var v75 = '<div class="info">' + stringToReturn$$1;
  return v75 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v76 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v76);
  var j$$2 = 0;
  var v471 = arrayOfPatterns$$3.length;
  var v78 = j$$2 < v471;
  for (;v78;) {
    var v734 = arrayOfPatterns$$3[j$$2];
    var v472 = v734.match(/\/.+\//);
    var v77 = v472 + "gi";
    var v1190 = eval(v77);
    geneticCodeMatchExp$$1[j$$2] = v1190;
    j$$2++;
    var v473 = arrayOfPatterns$$3.length;
    v78 = j$$2 < v473;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v79 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v79);
  var j$$3 = 0;
  var v474 = arrayOfPatterns$$4.length;
  var v82 = j$$3 < v474;
  for (;v82;) {
    var v475 = arrayOfPatterns$$4[j$$3];
    var v80 = v475.match(/=[a-zA-Z\*]/);
    var v1191 = v80.toString();
    geneticCodeMatchResult$$1[j$$3] = v1191;
    var v81 = geneticCodeMatchResult$$1[j$$3];
    var v1192 = v81.replace(/=/g, "");
    geneticCodeMatchResult$$1[j$$3] = v1192;
    j$$3++;
    var v476 = arrayOfPatterns$$4.length;
    v82 = j$$3 < v476;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v477 = sequence$$3.length;
  var v83 = "Results for " + v477;
  var stringToReturn$$2 = v83 + " residue sequence ";
  var v478 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v85 = v478 != -1;
  if (v85) {
    var v479 = stringToReturn$$2 + '"';
    var v84 = v479 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v84 + '"';
  }
  var v480 = stringToReturn$$2 + ' starting "';
  var v481 = sequence$$3.substring(0, 10);
  var v86 = v480 + v481;
  stringToReturn$$2 = v86 + '"';
  var v87 = '<div class="info">' + stringToReturn$$2;
  return v87 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v735 = "Results for " + topology;
  var v482 = v735 + " ";
  var v483 = sequence$$4.length;
  var v88 = v482 + v483;
  var stringToReturn$$3 = v88 + " residue sequence ";
  var v484 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v90 = v484 != -1;
  if (v90) {
    var v485 = stringToReturn$$3 + '"';
    var v89 = v485 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v89 + '"';
  }
  var v486 = stringToReturn$$3 + ' starting "';
  var v487 = sequence$$4.substring(0, 10);
  var v91 = v486 + v487;
  stringToReturn$$3 = v91 + '"';
  var v92 = '<div class="info">' + stringToReturn$$3;
  return v92 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v488 = sequenceOne$$1.length;
  var v93 = "Alignment results for " + v488;
  var stringToReturn$$4 = v93 + " residue sequence ";
  var v489 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v95 = v489 != -1;
  if (v95) {
    var v490 = stringToReturn$$4 + '"';
    var v94 = v490 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v94 + '"';
  }
  var v491 = stringToReturn$$4 + ' starting "';
  var v492 = sequenceOne$$1.substring(0, 10);
  var v96 = v491 + v492;
  stringToReturn$$4 = v96 + '"\n';
  var v493 = stringToReturn$$4 + "and ";
  var v494 = sequenceTwo$$1.length;
  var v97 = v493 + v494;
  stringToReturn$$4 = v97 + " residue sequence ";
  var v495 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v99 = v495 != -1;
  if (v99) {
    var v496 = stringToReturn$$4 + '"';
    var v98 = v496 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v98 + '"';
  }
  var v497 = stringToReturn$$4 + ' starting "';
  var v498 = sequenceTwo$$1.substring(0, 10);
  var v100 = v497 + v498;
  stringToReturn$$4 = v100 + '"';
  var v101 = '<div class="info">' + stringToReturn$$4;
  return v101 + "</div>\n";
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v103 = j$$4 < lengthOut;
  for (;v103;) {
    var v499 = Math.random();
    var v500 = components.length;
    var v102 = v499 * v500;
    tempNum = Math.floor(v102);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4++;
    v103 = j$$4 < lengthOut;
  }
  return sequenceArray.join("");
}
function getSequenceFromFasta(sequenceRecord) {
  var v501 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v104 = v501 != -1;
  if (v104) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "");
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v502 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v106 = v502 != -1;
  if (v106) {
    var v105 = sequenceRecord$$1.match(/\>[^\f\n\r]+[\f\n\r]/, "");
    fastaTitle = v105.toString();
    fastaTitle = fastaTitle.replace(/\>|[\f\n\r]/g, "");
    fastaTitle = fastaTitle.replace(/\s{2,}/g, " ");
    fastaTitle = fastaTitle.replace(/[\<\>]/gi, "");
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  var v1164 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v1155 = v1164 != -1;
  var v1166 = !v1155;
  if (v1166) {
    var v1165 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    v1155 = v1165 != -1;
  }
  var v1142 = v1155;
  var v1157 = !v1142;
  if (v1157) {
    var v1156 = expressionToCheck.search(/\[\]/);
    v1142 = v1156 != -1;
  }
  var v1126 = v1142;
  var v1144 = !v1126;
  if (v1144) {
    var v1143 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
    v1126 = v1143 != -1;
  }
  var v1108 = v1126;
  var v1128 = !v1108;
  if (v1128) {
    var v1127 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
    v1108 = v1127 != -1;
  }
  var v1080 = v1108;
  var v1110 = !v1080;
  if (v1110) {
    var v1109 = expressionToCheck.search(/\|\|/);
    v1080 = v1109 != -1;
  }
  var v1035 = v1080;
  var v1082 = !v1035;
  if (v1082) {
    var v1081 = expressionToCheck.search(/\/\|/);
    v1035 = v1081 != -1;
  }
  var v969 = v1035;
  var v1037 = !v969;
  if (v1037) {
    var v1036 = expressionToCheck.search(/\|\//);
    v969 = v1036 != -1;
  }
  var v868 = v969;
  var v971 = !v868;
  if (v971) {
    var v970 = expressionToCheck.search(/\[.\]/);
    v868 = v970 != -1;
  }
  var v736 = v868;
  var v870 = !v736;
  if (v870) {
    var v869 = expressionToCheck.search(/\</);
    v736 = v869 != -1;
  }
  var v503 = v736;
  var v738 = !v503;
  if (v738) {
    var v737 = expressionToCheck.search(/\>/);
    v503 = v737 != -1;
  }
  var v107 = v503;
  if (v107) {
    return false;
  }
  return true;
}
function openForm() {
  var v108 = outputWindow.document;
  v108.write('<form action="">\n');
  return true;
}
function openPre() {
  var v109 = outputWindow.document;
  v109.write("<pre>");
  var v110 = outputWindow.document;
  v110.write('<div class="pre">');
  return;
}
function openTextArea() {
  var v111 = outputWindow.document;
  v111.write('<br /><textarea rows="6" cols="61">\n');
  return true;
}
function openWindow(title$$6) {
  _openWindow(title$$6, true);
  return;
}
function _openWindow(title$$7, isColor) {
  outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  outputWindow.focus();
  var v112 = outputWindow.document;
  var v871 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v739 = v871 + "<head>\n";
  var v504 = v739 + "<title>Sequence Manipulation Suite</title>\n";
  var v113 = v504 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v112.write(v113);
  if (isColor) {
    var v114 = outputWindow.document;
    var v1180 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1176 = v1180 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1172 = v1176 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1167 = v1172 + "div.info {font-weight: bold}\n";
    var v1158 = v1167 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1145 = v1158 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v1129 = v1145 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v1111 = v1129 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1083 = v1111 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v1038 = v1083 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v972 = v1038 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v872 = v972 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v740 = v872 + "td.many {color: #000000}\n";
    var v505 = v740 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v115 = v505 + "</style>\n";
    v114.write(v115);
  } else {
    var v116 = outputWindow.document;
    var v1184 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1181 = v1184 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1177 = v1181 + "div.title {display: none}\n";
    var v1173 = v1177 + "div.info {font-weight: bold}\n";
    var v1168 = v1173 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1159 = v1168 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1146 = v1159 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v1130 = v1146 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1112 = v1130 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1084 = v1112 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1039 = v1084 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v973 = v1039 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v873 = v973 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v741 = v873 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v506 = v741 + "img {display: none}\n";
    var v117 = v506 + "</style>\n";
    v116.write(v117);
  }
  var v118 = outputWindow.document;
  var v874 = "</head>\n" + '<body class="main">\n';
  var v742 = v874 + '<div class="title">';
  var v507 = v742 + title$$7;
  var v119 = v507 + " results</div>\n";
  v118.write(v119);
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
  var v120 = outputWindow.document;
  var v875 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v743 = v875 + "<head>\n";
  var v508 = v743 + "<title>Sequence Manipulation Suite</title>\n";
  var v121 = v508 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v120.write(v121);
  if (isBackground) {
    var v122 = outputWindow.document;
    var v1182 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1178 = v1182 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1174 = v1178 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1169 = v1174 + "div.info {font-weight: bold}\n";
    var v1160 = v1169 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v1147 = v1160 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v1131 = v1147 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v1113 = v1131 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v1085 = v1113 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v1040 = v1085 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v974 = v1040 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v876 = v974 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v744 = v876 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v509 = v744 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v123 = v509 + "</style>\n";
    v122.write(v123);
  } else {
    var v124 = outputWindow.document;
    var v1186 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1185 = v1186 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1183 = v1185 + "div.title {display: none}\n";
    var v1179 = v1183 + "div.info {font-weight: bold}\n";
    var v1175 = v1179 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1170 = v1175 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v1161 = v1170 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v1148 = v1161 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v1132 = v1148 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v1114 = v1132 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v1086 = v1114 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v1041 = v1086 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v975 = v1041 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v877 = v975 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v745 = v877 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v510 = v745 + "img {display: none}\n";
    var v125 = v510 + "</style>\n";
    v124.write(v125);
  }
  var v126 = outputWindow.document;
  var v878 = "</head>\n" + '<body class="main">\n';
  var v746 = v878 + '<div class="title">';
  var v511 = v746 + title$$9;
  var v127 = v511 + " results</div>\n";
  v126.write(v127);
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
  var v512 = dnaSequence$$1.search(/./);
  var v128 = v512 != -1;
  if (v128) {
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
  var v129 = j$$5 < lengthOfColumn;
  for (;v129;) {
    tempString = tempString + " ";
    j$$5++;
    v129 = j$$5 < lengthOfColumn;
  }
  var v130 = tempString + theNumber;
  theNumber = v130 + " ";
  var v131 = sequenceToAppend + theNumber;
  sequenceToAppend = v131 + tabIn;
  return sequenceToAppend;
}
function testScript() {
  function v1(str$$7, p1$$1, offset$$9, s$$3) {
    return p1$$1 + "X";
  }
  var testArray = new Array;
  var testString = "1234567890";
  testArray.push(testString);
  var v513 = testArray[0];
  var v132 = v513 != testString;
  if (v132) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v514 = testString.search(re$$2);
  var v133 = v514 == -1;
  if (v133) {
    alert("Regular expression 'm' flag not supported. See browser compatibility page.");
    return false;
  }
  var caughtException = false;
  try {
    re$$2 = eval("Exception handling not supported. Check browser compatibility page.");
  } catch (e$$4) {
    caughtException = true;
  }
  var v134 = !caughtException;
  if (v134) {
    alert("Exception handling not supported. See browser compatibility page.");
  }
  testString = "123";
  testString = testString.replace(/(\d)/g, v1);
  var v135 = testString != "1X2X3X";
  if (v135) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false;
  }
  var testNum = 2489.8237;
  var v515 = testNum.toFixed(3);
  var v136 = v515 != 2489.824;
  if (v136) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v516 = testNum.toPrecision(5);
  var v137 = v516 != 2489.8;
  if (v137) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v517 = theNumber$$1.search(/\d/);
  var v138 = v517 == -1;
  if (v138) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v976 = emblFile.search(/ID/);
  var v879 = v976 == -1;
  var v978 = !v879;
  if (v978) {
    var v977 = emblFile.search(/AC/);
    v879 = v977 == -1;
  }
  var v747 = v879;
  var v881 = !v747;
  if (v881) {
    var v880 = emblFile.search(/DE/);
    v747 = v880 == -1;
  }
  var v518 = v747;
  var v749 = !v518;
  if (v749) {
    var v748 = emblFile.search(/SQ/);
    v518 = v748 == -1;
  }
  var v139 = v518;
  if (v139) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v519 = theNumber$$2.search(/\d/);
  var v140 = v519 == -1;
  if (v140) {
    alert("Please enter a number.");
    return false;
  }
  var v142 = theNumber$$2 > maxInput$$2;
  if (v142) {
    var v520 = "Please enter a number less than or equal to " + maxInput$$2;
    var v141 = v520 + ".";
    alert(v141);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v521 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v143 = v521 != -1;
  if (v143) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v522 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v144 = v522 != -1;
  if (v144) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v979 = genBankFile.search(/LOCUS/);
  var v882 = v979 == -1;
  var v981 = !v882;
  if (v981) {
    var v980 = genBankFile.search(/DEFINITION/);
    v882 = v980 == -1;
  }
  var v750 = v882;
  var v884 = !v750;
  if (v884) {
    var v883 = genBankFile.search(/ACCESSION/);
    v750 = v883 == -1;
  }
  var v523 = v750;
  var v752 = !v523;
  if (v752) {
    var v751 = genBankFile.search(/ORIGIN/);
    v523 = v751 == -1;
  }
  var v145 = v523;
  if (v145) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v982 = genBankFile$$1.search(/LOCUS/);
  var v885 = v982 == -1;
  var v984 = !v885;
  if (v984) {
    var v983 = genBankFile$$1.search(/DEFINITION/);
    v885 = v983 == -1;
  }
  var v753 = v885;
  var v887 = !v753;
  if (v887) {
    var v886 = genBankFile$$1.search(/ACCESSION/);
    v753 = v886 == -1;
  }
  var v524 = v753;
  var v755 = !v524;
  if (v755) {
    var v754 = genBankFile$$1.search(/ORIGIN/);
    v524 = v754 == -1;
  }
  var v146 = v524;
  if (v146) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v525 = genBankFile$$1.search(/FEATURES {13}/);
  var v147 = v525 == -1;
  if (v147) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v985 = emblFile$$1.search(/ID/);
  var v888 = v985 == -1;
  var v987 = !v888;
  if (v987) {
    var v986 = emblFile$$1.search(/AC/);
    v888 = v986 == -1;
  }
  var v756 = v888;
  var v890 = !v756;
  if (v890) {
    var v889 = emblFile$$1.search(/DE/);
    v756 = v889 == -1;
  }
  var v526 = v756;
  var v758 = !v526;
  if (v758) {
    var v757 = emblFile$$1.search(/SQ/);
    v526 = v757 == -1;
  }
  var v148 = v526;
  if (v148) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v527 = emblFile$$1.search(/^FT/m);
  var v149 = v527 == -1;
  if (v149) {
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
  var v156 = i$$5 < stopBase;
  for (;v156;) {
    var v150 = i$$5 + 1;
    lineOfText = rightNum(v150, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v528 = basePerLine / groupSize;
    var v153 = j$$6 <= v528;
    for (;v153;) {
      var v152 = k < groupSize;
      for (;v152;) {
        var v529 = k + i$$5;
        var v151 = text$$10.charAt(v529);
        lineOfText = lineOfText + v151;
        k = k + 1;
        v152 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v530 = basePerLine / groupSize;
      v153 = j$$6 <= v530;
    }
    var v154 = outputWindow.document;
    var v155 = lineOfText + "\n";
    v154.write(v155);
    lineOfText = "";
    v156 = i$$5 < stopBase;
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
    var v531 = adjustment < 0;
    if (v531) {
      v531 = adjusted >= 0;
    }
    var v157 = v531;
    if (v157) {
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
  var v190 = i$$6 < stopBase$$2;
  for (;v190;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v532 = basePerLine$$2 / groupSize$$2;
    var v166 = j$$7 <= v532;
    for (;v166;) {
      var v161 = k$$1 < groupSize$$2;
      for (;v161;) {
        var v533 = i$$6 + k$$1;
        var v158 = v533 >= stopBase$$2;
        if (v158) {
          break;
        }
        var v159 = lineOfText$$1;
        var v534 = k$$1 + i$$6;
        var v160 = text$$12.charAt(v534);
        lineOfText$$1 = v159 + v160;
        k$$1 = k$$1 + 1;
        v161 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v164 = numberPosition$$1 == "above";
      if (v164) {
        var v162 = aboveNum;
        var v535 = adjustNumbering(i$$6, numberingAdjustment);
        var v163 = rightNum(v535, "", groupSize$$2, tabIn$$3);
        aboveNum = v162 + v163;
      }
      var v165 = i$$6 >= stopBase$$2;
      if (v165) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v536 = basePerLine$$2 / groupSize$$2;
      v166 = j$$7 <= v536;
    }
    var v189 = numberPosition$$1 == "left";
    if (v189) {
      var v167 = outputWindow.document;
      var v891 = adjustNumbering(lineNum, numberingAdjustment);
      var v759 = rightNum(v891, "", 8, tabIn$$3);
      var v537 = v759 + lineOfText$$1;
      var v168 = v537 + "\n";
      v167.write(v168);
      var v172 = strands$$1 == "two";
      if (v172) {
        var v169 = outputWindow.document;
        var v892 = adjustNumbering(lineNum, numberingAdjustment);
        var v760 = rightNum(v892, "", 8, tabIn$$3);
        var v761 = complement(lineOfText$$1);
        var v538 = v760 + v761;
        var v170 = v538 + "\n";
        v169.write(v170);
        var v171 = outputWindow.document;
        v171.write("\n");
      }
    } else {
      var v188 = numberPosition$$1 == "right";
      if (v188) {
        var v173 = outputWindow.document;
        var v762 = lineOfText$$1;
        var v763 = adjustNumbering(i$$6, numberingAdjustment);
        var v539 = v762 + v763;
        var v174 = v539 + "\n";
        v173.write(v174);
        var v178 = strands$$1 == "two";
        if (v178) {
          var v175 = outputWindow.document;
          var v764 = complement(lineOfText$$1);
          var v765 = adjustNumbering(i$$6, numberingAdjustment);
          var v540 = v764 + v765;
          var v176 = v540 + "\n";
          v175.write(v176);
          var v177 = outputWindow.document;
          v177.write("\n");
        }
      } else {
        var v187 = numberPosition$$1 == "above";
        if (v187) {
          var v179 = outputWindow.document;
          var v180 = aboveNum + "\n";
          v179.write(v180);
          var v181 = outputWindow.document;
          var v182 = lineOfText$$1 + "\n";
          v181.write(v182);
          var v186 = strands$$1 == "two";
          if (v186) {
            var v183 = outputWindow.document;
            var v541 = complement(lineOfText$$1);
            var v184 = v541 + "\n";
            v183.write(v184);
            var v185 = outputWindow.document;
            v185.write("\n");
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v190 = i$$6 < stopBase$$2;
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
  var v209 = i$$7 < stopBase$$3;
  for (;v209;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v542 = basePerLine$$3 / groupSize$$3;
    var v197 = j$$8 <= v542;
    for (;v197;) {
      var v193 = k$$2 < groupSize$$3;
      for (;v193;) {
        var v543 = i$$7 + k$$2;
        var v191 = v543 >= stopBase$$3;
        if (v191) {
          break;
        }
        var v544 = k$$2 + i$$7;
        var v192 = text$$13.charAt(v544);
        lineOfText$$2 = lineOfText$$2 + v192;
        k$$2 = k$$2 + 1;
        v193 = k$$2 < groupSize$$3;
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v195 = numberPosition$$2 == "above";
      if (v195) {
        var v194 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = aboveNum$$1 + v194;
      }
      var v196 = i$$7 >= stopBase$$3;
      if (v196) {
        break;
      }
      k$$2 = 0;
      j$$8++;
      var v545 = basePerLine$$3 / groupSize$$3;
      v197 = j$$8 <= v545;
    }
    var v208 = numberPosition$$2 == "left";
    if (v208) {
      var v198 = outputWindow.document;
      var v766 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v546 = v766 + lineOfText$$2;
      var v199 = v546 + "\n";
      v198.write(v199);
    } else {
      var v207 = numberPosition$$2 == "right";
      if (v207) {
        var v200 = outputWindow.document;
        var v547 = lineOfText$$2 + i$$7;
        var v201 = v547 + "\n";
        v200.write(v201);
      } else {
        var v206 = numberPosition$$2 == "above";
        if (v206) {
          var v202 = outputWindow.document;
          var v203 = aboveNum$$1 + "\n";
          v202.write(v203);
          var v204 = outputWindow.document;
          var v205 = lineOfText$$2 + "\n";
          v204.write(v205);
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v209 = i$$7 < stopBase$$3;
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
  var v893 = sequence$$13.length;
  var v767 = v893 <= firstIndexToMutate;
  var v894 = !v767;
  if (v894) {
    v767 = lastIndexToMutate < 0;
  }
  var v548 = v767;
  var v768 = !v548;
  if (v768) {
    v548 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v210 = v548;
  if (v210) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v218 = i$$8 < numMut;
  for (;v218;) {
    maxNum = sequence$$13.length;
    var v549 = Math.random();
    var v211 = v549 * maxNum;
    randNum = Math.floor(v211);
    var v550 = randNum < firstIndexToMutate;
    var v769 = !v550;
    if (v769) {
      v550 = randNum > lastIndexToMutate;
    }
    var v212 = v550;
    if (v212) {
      numMut++;
      i$$8++;
      v218 = i$$8 < numMut;
      continue;
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for (;needNewChar;) {
      var v551 = Math.random();
      var v552 = components$$1.length;
      var v213 = v551 * v552;
      componentsIndex = Math.round(v213);
      var v553 = components$$1.length;
      var v214 = componentsIndex == v553;
      if (v214) {
        componentsIndex = 0;
      }
      var v554 = components$$1[componentsIndex];
      var v215 = v554 != currentChar;
      if (v215) {
        needNewChar = false;
      }
    }
    var v555 = sequence$$13.substring(0, randNum);
    var v556 = components$$1[componentsIndex];
    var v216 = v555 + v556;
    var v557 = randNum + 1;
    var v558 = sequence$$13.length;
    var v217 = sequence$$13.substring(v557, v558);
    sequence$$13 = v216 + v217;
    i$$8++;
    v218 = i$$8 < numMut;
  }
  var v219 = outputWindow.document;
  var v220 = addReturns(sequence$$13);
  v219.write(v220);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v225 = j$$9 < lengthOut$$1;
  for (;v225;) {
    var v559 = Math.random();
    var v560 = components$$2.length;
    var v221 = v559 * v560;
    tempNum$$1 = Math.floor(v221);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v561 = sequence$$14.length;
    var v224 = v561 == 60;
    if (v224) {
      var v222 = outputWindow.document;
      var v223 = sequence$$14 + "\n";
      v222.write(v223);
      sequence$$14 = "";
    }
    j$$9++;
    v225 = j$$9 < lengthOut$$1;
  }
  var v226 = outputWindow.document;
  var v227 = sequence$$14 + "\n";
  v226.write(v227);
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
  var v231 = dnaConformation == "circular";
  if (v231) {
    var v228 = sequence$$15.substring(0, lookAhead);
    shiftValue = v228.length;
    var v895 = sequence$$15.length;
    var v770 = v895 - lookAhead;
    var v771 = sequence$$15.length;
    var v562 = sequence$$15.substring(v770, v771);
    var v229 = v562 + sequence$$15;
    var v230 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v229 + v230;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v232 = outputWindow.document;
  v232.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  var v233 = outputWindow.document;
  var v896 = '<tr><td class="title" width="200px">' + "Site:";
  var v772 = v896 + '</td><td class="title">';
  var v563 = v772 + "Positions:";
  var v234 = v563 + "</td></tr>\n";
  v233.write(v234);
  var i$$9 = 0;
  var v564 = arrayOfItems.length;
  var v250 = i$$9 < v564;
  for (;v250;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v565 = arrayOfItems[i$$9];
    var v235 = v565.match(/\/.+\//);
    matchExp = v235 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    var v897 = arrayOfItems[i$$9];
    var v773 = v897.match(/\)\D*\d+/);
    var v566 = v773.toString();
    var v236 = v566.replace(/\)\D*/, "");
    cutDistance = parseFloat(v236);
    var v242 = matchArray$$1 = matchExp.exec(sequence$$15);
    for (;v242;) {
      var v237 = matchExp.lastIndex;
      matchPosition = v237 - cutDistance;
      var v567 = matchPosition >= lowerLimit;
      if (v567) {
        v567 = matchPosition < upperLimit;
      }
      var v240 = v567;
      if (v240) {
        timesFound++;
        var v238 = tempString$$1 + ", ";
        var v568 = matchPosition - shiftValue;
        var v239 = v568 + 1;
        tempString$$1 = v238 + v239;
      }
      var v569 = matchExp.lastIndex;
      var v774 = RegExp.lastMatch;
      var v570 = v774.length;
      var v241 = v569 - v570;
      matchExp.lastIndex = v241 + 1;
      v242 = matchArray$$1 = matchExp.exec(sequence$$15);
    }
    var v571 = tempString$$1.search(/\d/);
    var v243 = v571 != -1;
    if (v243) {
      tempString$$1 = tempString$$1.replace(/none,\s*/, "");
    }
    var v247 = timesFound == 0;
    if (v247) {
      backGroundClass = "none";
    } else {
      var v246 = timesFound == 1;
      if (v246) {
        backGroundClass = "one";
      } else {
        var v245 = timesFound == 2;
        if (v245) {
          backGroundClass = "two";
        } else {
          var v244 = timesFound == 3;
          if (v244) {
            backGroundClass = "three";
          } else {
            backGroundClass = "many";
          }
        }
      }
    }
    var v248 = outputWindow.document;
    var v1115 = '<tr><td class="' + backGroundClass;
    var v1087 = v1115 + '">';
    var v1149 = arrayOfItems[i$$9];
    var v1133 = v1149.match(/\([^\(]+\)/);
    var v1116 = v1133.toString();
    var v1088 = v1116.replace(/\(|\)/g, "");
    var v1042 = v1087 + v1088;
    var v988 = v1042 + '</td><td class="';
    var v898 = v988 + backGroundClass;
    var v775 = v898 + '">';
    var v572 = v775 + tempString$$1;
    var v249 = v572 + "</td></tr>\n";
    v248.write(v249);
    timesFound = 0;
    i$$9++;
    var v573 = arrayOfItems.length;
    v250 = i$$9 < v573;
  }
  var v251 = outputWindow.document;
  v251.write("</tbody></table>\n");
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v252 = outputWindow.document;
  v252.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  var v253 = outputWindow.document;
  var v1043 = '<tr><td class="title">' + "Pattern:";
  var v989 = v1043 + '</td><td class="title">';
  var v899 = v989 + "Times found:";
  var v776 = v899 + '</td><td class="title">';
  var v574 = v776 + "Percentage:";
  var v254 = v574 + "</td></tr>\n";
  v253.write(v254);
  var i$$10 = 0;
  var v575 = arrayOfItems$$1.length;
  var v263 = i$$10 < v575;
  for (;v263;) {
    var tempNumber = 0;
    var v576 = arrayOfItems$$1[i$$10];
    var v255 = v576.match(/\/[^\/]+\//);
    var matchExp$$1 = v255 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    var v577 = sequence$$16.search(matchExp$$1);
    var v257 = v577 != -1;
    if (v257) {
      var v256 = sequence$$16.match(matchExp$$1);
      tempNumber = v256.length;
    }
    var percentage = 0;
    var v777 = originalLength + 1;
    var v990 = arrayOfItems$$1[i$$10];
    var v900 = v990.match(/\d+/);
    var v778 = parseFloat(v900);
    var v578 = v777 - v778;
    var v260 = v578 > 0;
    if (v260) {
      var v258 = 100 * tempNumber;
      var v579 = originalLength + 1;
      var v901 = arrayOfItems$$1[i$$10];
      var v779 = v901.match(/\d+/);
      var v580 = parseFloat(v779);
      var v259 = v579 - v580;
      percentage = v258 / v259;
    }
    var v261 = outputWindow.document;
    var v1150 = arrayOfItems$$1[i$$10];
    var v1134 = v1150.match(/\([^\(]+\)\b/);
    var v1117 = v1134.toString();
    var v1089 = v1117.replace(/\(|\)/g, "");
    var v1044 = "<tr><td>" + v1089;
    var v991 = v1044 + "</td><td>";
    var v902 = v991 + tempNumber;
    var v780 = v902 + "</td><td>";
    var v781 = percentage.toFixed(2);
    var v581 = v780 + v781;
    var v262 = v581 + "</td></tr>\n";
    v261.write(v262);
    i$$10++;
    var v582 = arrayOfItems$$1.length;
    v263 = i$$10 < v582;
  }
  var v264 = outputWindow.document;
  v264.write("</tbody></table>\n");
  return true;
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v583 = sequence$$17.length;
  var v271 = v583 > 0;
  for (;v271;) {
    maxNum$$1 = sequence$$17.length;
    var v584 = Math.random();
    var v265 = v584 * maxNum$$1;
    randNum$$1 = Math.floor(v265);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v266 = randNum$$1 + 1;
    var v267 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v266, v267);
    sequence$$17 = tempString1 + tempString2;
    var v585 = tempSeq.length;
    var v270 = v585 == 60;
    if (v270) {
      var v268 = outputWindow.document;
      var v269 = tempSeq + "\n";
      v268.write(v269);
      tempSeq = "";
    }
    var v586 = sequence$$17.length;
    v271 = v586 > 0;
  }
  var v272 = outputWindow.document;
  var v273 = tempSeq + "\n";
  v272.write(v273);
  return true;
}
function windowExtract(theDocument) {
  var newDna = "";
  var maxInput$$3 = 5E5;
  var matchFound = false;
  var ranges = new Array;
  var v587 = testScript();
  var v274 = v587 == false;
  if (v274) {
    return false;
  }
  var v1162 = theDocument.forms;
  var v1151 = v1162[0];
  var v1135 = v1151.elements;
  var v1118 = v1135[0];
  var v1090 = checkFormElement(v1118);
  var v1045 = v1090 == false;
  var v1092 = !v1045;
  if (v1092) {
    var v1171 = theDocument.forms;
    var v1163 = v1171[0];
    var v1152 = v1163.elements;
    var v1136 = v1152[0];
    var v1119 = v1136.value;
    var v1091 = checkSequenceLength(v1119, maxInput$$3);
    v1045 = v1091 == false;
  }
  var v992 = v1045;
  var v1047 = !v992;
  if (v1047) {
    var v1153 = theDocument.forms;
    var v1137 = v1153[0];
    var v1120 = v1137.elements;
    var v1093 = v1120[1];
    var v1046 = checkFormElement(v1093);
    v992 = v1046 == false;
  }
  var v903 = v992;
  var v994 = !v903;
  if (v994) {
    var v1138 = theDocument.forms;
    var v1121 = v1138[0];
    var v1094 = v1121.elements;
    var v1048 = v1094[3];
    var v993 = checkFormElement(v1048);
    v903 = v993 == false;
  }
  var v782 = v903;
  var v905 = !v782;
  if (v905) {
    var v1154 = theDocument.forms;
    var v1139 = v1154[0];
    var v1122 = v1139.elements;
    var v1095 = v1122[1];
    var v1049 = v1095.value;
    var v995 = v1049.replace(/[^\d]/g, "");
    var v904 = verifyMaxDigits(v995, maxInput$$3);
    v782 = v904 == false;
  }
  var v588 = v782;
  var v784 = !v588;
  if (v784) {
    var v1140 = theDocument.forms;
    var v1123 = v1140[0];
    var v1096 = v1123.elements;
    var v1050 = v1096[3];
    var v996 = v1050.value;
    var v906 = v996.replace(/[^\d]/g, "");
    var v783 = verifyMaxDigits(v906, maxInput$$3);
    v588 = v783 == false;
  }
  var v275 = v588;
  if (v275) {
    return false;
  }
  var v1051 = theDocument.forms;
  var v997 = v1051[0];
  var v907 = v997.elements;
  var v785 = v907[1];
  var v589 = v785.value;
  var v276 = v589.replace(/[^\d]/g, "");
  var windowSize = parseInt(v276);
  var v1052 = theDocument.forms;
  var v998 = v1052[0];
  var v908 = v998.elements;
  var v786 = v908[3];
  var v590 = v786.value;
  var v277 = v590.replace(/[^\d]/g, "");
  var position = parseInt(v277);
  var v909 = theDocument.forms;
  var v787 = v909[0];
  var v591 = v787.elements;
  var v278 = v591[2];
  var orientation = v278.value;
  var start$$4;
  var end$$1;
  var v285 = orientation == "ending";
  if (v285) {
    end$$1 = position;
    var v279 = end$$1 - windowSize;
    start$$4 = v279 + 1;
  } else {
    var v284 = orientation == "starting";
    if (v284) {
      start$$4 = position;
      var v280 = start$$4 + windowSize;
      end$$1 = v280 - 1;
    } else {
      var v283 = orientation == "centered";
      if (v283) {
        var v788 = windowSize / 2;
        var v592 = Math.round(v788);
        var v281 = position - v592;
        start$$4 = v281 + 1;
        var v282 = start$$4 + windowSize;
        end$$1 = v282 - 1;
      }
    }
  }
  var v286 = new Range(start$$4, end$$1);
  ranges.push(v286);
  openWindow("Window Extractor Protein");
  openPre();
  var v999 = theDocument.forms;
  var v910 = v999[0];
  var v789 = v910.elements;
  var v593 = v789[0];
  var v287 = v593.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v287);
  var i$$11 = 0;
  var v594 = arrayOfFasta$$1.length;
  var v293 = i$$11 < v594;
  for (;v293;) {
    var v288 = arrayOfFasta$$1[i$$11];
    newProtein = getSequenceFromFasta(v288);
    var v289 = arrayOfFasta$$1[i$$11];
    title = getTitleFromFasta(v289);
    newProtein = removeNonProteinAllowDegen(newProtein);
    var v290 = outputWindow.document;
    var v291 = getFastaTitleFromTitleAndSequence(title, newProtein);
    v290.write(v291);
    var v1097 = theDocument.forms;
    var v1053 = v1097[0];
    var v1000 = v1053.elements;
    var v911 = v1000[7];
    var v790 = v911.options;
    var v1098 = theDocument.forms;
    var v1054 = v1098[0];
    var v1001 = v1054.elements;
    var v912 = v1001[7];
    var v791 = v912.selectedIndex;
    var v595 = v790[v791];
    var v292 = v595.value;
    writeSequenceRanges(newProtein, ranges, v292);
    i$$11++;
    var v596 = arrayOfFasta$$1.length;
    v293 = i$$11 < v596;
  }
  closePre();
  closeWindow();
  return true;
}
function rangeExtract(theDocument$$1) {
  var newDna$$1 = "";
  var maxInput$$4 = 5E5;
  var matchFound$$1 = false;
  var ranges$$1 = new Array;
  var v597 = testScript();
  var v294 = v597 == false;
  if (v294) {
    return false;
  }
  var v1124 = theDocument$$1.forms;
  var v1099 = v1124[0];
  var v1055 = v1099.elements;
  var v1002 = v1055[0];
  var v913 = checkFormElement(v1002);
  var v792 = v913 == false;
  var v915 = !v792;
  if (v915) {
    var v1141 = theDocument$$1.forms;
    var v1125 = v1141[0];
    var v1100 = v1125.elements;
    var v1056 = v1100[0];
    var v1003 = v1056.value;
    var v914 = checkSequenceLength(v1003, maxInput$$4);
    v792 = v914 == false;
  }
  var v598 = v792;
  var v794 = !v598;
  if (v794) {
    var v1101 = theDocument$$1.forms;
    var v1057 = v1101[0];
    var v1004 = v1057.elements;
    var v916 = v1004[1];
    var v793 = checkFormElement(v916);
    v598 = v793 == false;
  }
  var v295 = v598;
  if (v295) {
    return false;
  }
  var v1005 = theDocument$$1.forms;
  var v917 = v1005[0];
  var v795 = v917.elements;
  var v599 = v795[1];
  var v296 = v599.value;
  var arrayOfRanges = v296.split(/,/);
  var arrayOfStartAndEnd;
  var i$$12 = 0;
  var v600 = arrayOfRanges.length;
  var v302 = i$$12 < v600;
  for (;v302;) {
    var v297 = arrayOfRanges[i$$12];
    arrayOfStartAndEnd = v297.split(/\.\./);
    var v601 = arrayOfStartAndEnd.length;
    var v301 = v601 == 1;
    if (v301) {
      matchFound$$1 = true;
      var v602 = arrayOfStartAndEnd[0];
      var v603 = arrayOfStartAndEnd[0];
      var v298 = new Range(v602, v603);
      ranges$$1.push(v298);
    } else {
      var v604 = arrayOfStartAndEnd.length;
      var v300 = v604 == 2;
      if (v300) {
        matchFound$$1 = true;
        var v605 = arrayOfStartAndEnd[0];
        var v606 = arrayOfStartAndEnd[1];
        var v299 = new Range(v605, v606);
        ranges$$1.push(v299);
      }
    }
    i$$12++;
    var v607 = arrayOfRanges.length;
    v302 = i$$12 < v607;
  }
  var v303 = matchFound$$1 == false;
  if (v303) {
    alert("No ranges were entered.");
    return false;
  }
  openWindow("Range Extractor Protein");
  openPre();
  var v1006 = theDocument$$1.forms;
  var v918 = v1006[0];
  var v796 = v918.elements;
  var v608 = v796[0];
  var v304 = v608.value;
  var arrayOfFasta$$2 = getArrayOfFasta(v304);
  i$$12 = 0;
  var v609 = arrayOfFasta$$2.length;
  var v310 = i$$12 < v609;
  for (;v310;) {
    var v305 = arrayOfFasta$$2[i$$12];
    newProtein = getSequenceFromFasta(v305);
    var v306 = arrayOfFasta$$2[i$$12];
    title = getTitleFromFasta(v306);
    newProtein = removeNonProteinAllowDegen(newProtein);
    var v307 = outputWindow.document;
    var v308 = getFastaTitleFromTitleAndSequence(title, newProtein);
    v307.write(v308);
    var v1102 = theDocument$$1.forms;
    var v1058 = v1102[0];
    var v1007 = v1058.elements;
    var v919 = v1007[5];
    var v797 = v919.options;
    var v1103 = theDocument$$1.forms;
    var v1059 = v1103[0];
    var v1008 = v1059.elements;
    var v920 = v1008[5];
    var v798 = v920.selectedIndex;
    var v610 = v797[v798];
    var v309 = v610.value;
    writeSequenceRanges(newProtein, ranges$$1, v309);
    i$$12++;
    var v611 = arrayOfFasta$$2.length;
    v310 = i$$12 < v611;
  }
  closePre();
  closeWindow();
  return true;
}
function writeSequenceRanges(sequence$$18, ranges$$2, segmentType) {
  var rangeGroup = new RangeGroup(segmentType);
  var v612 = sequence$$18.length;
  var v311 = v612 / 2;
  var center_base = Math.round(v311);
  var i$$13 = 0;
  var v613 = ranges$$2.length;
  var v325 = i$$13 < v613;
  for (;v325;) {
    var v312 = ranges$$2[i$$13];
    var v921 = ranges$$2[i$$13];
    var v799 = v921.start;
    var v614 = v799.toString();
    var v1193 = v614.replace(/start|begin/gi, 1);
    v312.start = v1193;
    var v313 = ranges$$2[i$$13];
    var v922 = ranges$$2[i$$13];
    var v800 = v922.start;
    var v615 = v800.toString();
    var v616 = sequence$$18.length;
    var v1194 = v615.replace(/stop|end/gi, v616);
    v313.start = v1194;
    var v314 = ranges$$2[i$$13];
    var v923 = ranges$$2[i$$13];
    var v801 = v923.start;
    var v617 = v801.toString();
    var v618 = sequence$$18.length;
    var v1195 = v617.replace(/length/gi, v618);
    v314.start = v1195;
    var v315 = ranges$$2[i$$13];
    var v924 = ranges$$2[i$$13];
    var v802 = v924.start;
    var v619 = v802.toString();
    var v1196 = v619.replace(/middle|center|centre/gi, center_base);
    v315.start = v1196;
    var v316 = ranges$$2[i$$13];
    var v925 = ranges$$2[i$$13];
    var v803 = v925.stop;
    var v620 = v803.toString();
    var v1197 = v620.replace(/start|begin/gi, 1);
    v316.stop = v1197;
    var v317 = ranges$$2[i$$13];
    var v926 = ranges$$2[i$$13];
    var v804 = v926.stop;
    var v621 = v804.toString();
    var v622 = sequence$$18.length;
    var v1198 = v621.replace(/stop|end/gi, v622);
    v317.stop = v1198;
    var v318 = ranges$$2[i$$13];
    var v927 = ranges$$2[i$$13];
    var v805 = v927.stop;
    var v623 = v805.toString();
    var v624 = sequence$$18.length;
    var v1199 = v623.replace(/length/gi, v624);
    v318.stop = v1199;
    var v319 = ranges$$2[i$$13];
    var v928 = ranges$$2[i$$13];
    var v806 = v928.stop;
    var v625 = v806.toString();
    var v1200 = v625.replace(/middle|center|centre/gi, center_base);
    v319.stop = v1200;
    try {
      var v320 = ranges$$2[i$$13];
      var v1009 = ranges$$2[i$$13];
      var v929 = v1009.start;
      var v807 = v929.toString();
      var v626 = eval(v807);
      var v1201 = parseInt(v626);
      v320.start = v1201;
    } catch (e$$5) {
      var v808 = ranges$$2[i$$13];
      var v627 = v808.start;
      var v321 = "Could not evaluate the following expression: " + v627;
      alert(v321);
      return false;
    }
    try {
      var v322 = ranges$$2[i$$13];
      var v1010 = ranges$$2[i$$13];
      var v930 = v1010.stop;
      var v809 = v930.toString();
      var v628 = eval(v809);
      var v1202 = parseInt(v628);
      v322.stop = v1202;
    } catch (e$$6) {
      var v810 = ranges$$2[i$$13];
      var v629 = v810.stop;
      var v323 = "Could not evaluate the following expression: " + v629;
      alert(v323);
      return false;
    }
    var v324 = ranges$$2[i$$13];
    rangeGroup.addRange(v324);
    i$$13++;
    var v630 = ranges$$2.length;
    v325 = i$$13 < v630;
  }
  rangeGroup.writeRanges(sequence$$18);
  return;
}
function getSequence(sequence$$19) {
  var problem = false;
  var warnings = new Array;
  var v631 = this.start;
  var v632 = this.stop;
  var v340 = v631 == v632;
  if (v340) {
    var v633 = this.start;
    var v327 = v633 < 1;
    if (v327) {
      problem = true;
      var v811 = this.start;
      var v634 = "position value of " + v811;
      var v326 = v634 + " is less than 1";
      warnings.push(v326);
    }
    var v635 = this.start;
    var v636 = sequence$$19.length;
    var v329 = v635 > v636;
    if (v329) {
      problem = true;
      var v812 = this.start;
      var v637 = "position value of " + v812;
      var v328 = v637 + " is greater than the sequence length";
      warnings.push(v328);
    }
  } else {
    var v638 = this.start;
    var v331 = v638 < 1;
    if (v331) {
      problem = true;
      var v813 = this.start;
      var v639 = "position value of " + v813;
      var v330 = v639 + " is less than 1";
      warnings.push(v330);
    }
    var v640 = this.stop;
    var v333 = v640 < 1;
    if (v333) {
      problem = true;
      var v814 = this.stop;
      var v641 = "position value of " + v814;
      var v332 = v641 + " is less than 1";
      warnings.push(v332);
    }
    var v642 = this.start;
    var v643 = sequence$$19.length;
    var v335 = v642 > v643;
    if (v335) {
      problem = true;
      var v815 = this.start;
      var v644 = "position value of " + v815;
      var v334 = v644 + " is greater than the sequence length";
      warnings.push(v334);
    }
    var v645 = this.stop;
    var v646 = sequence$$19.length;
    var v337 = v645 > v646;
    if (v337) {
      problem = true;
      var v816 = this.stop;
      var v647 = "position value of " + v816;
      var v336 = v647 + " is greater than the sequence length";
      warnings.push(v336);
    }
    var v648 = this.start;
    var v649 = this.stop;
    var v339 = v648 > v649;
    if (v339) {
      problem = true;
      var v931 = this.start;
      var v817 = "stop position is less than start position in range " + v931;
      var v650 = v817 + " to ";
      var v651 = this.stop;
      var v338 = v650 + v651;
      warnings.push(v338);
    }
  }
  if (problem) {
    var v652 = warnings.join(",\n");
    var v341 = "An entry was skipped because of the following:\n" + v652;
    alert(v341);
    return false;
  } else {
    var v653 = this.start;
    var v654 = this.stop;
    var v345 = v653 == v654;
    if (v345) {
      var v655 = this.start;
      var v342 = v655 - 1;
      return sequence$$19.charAt(v342);
    } else {
      var v656 = this.start;
      var v343 = v656 - 1;
      var v344 = this.stop;
      return sequence$$19.substring(v343, v344);
    }
  }
  return;
}
function getTitle() {
  var v657 = this.start;
  var v658 = this.stop;
  var v349 = v657 == v658;
  if (v349) {
    var v346 = this.start;
    return "&gt;residue " + v346;
  } else {
    var v818 = this.start;
    var v659 = "&gt;residue " + v818;
    var v347 = v659 + " to ";
    var v348 = this.stop;
    return v347 + v348;
  }
  return;
}
function Range(start$$5, stop) {
  this.start = start$$5;
  this.stop = stop;
  return;
}
function addRange(range$$5) {
  var v350 = this.ranges;
  v350.push(range$$5);
  return;
}
function writeRanges(sequence$$20) {
  function v9(str$$15, p1$$9, offset$$17, s$$11) {
    var v660 = p1$$9.length;
    var v351 = offset$$17 + v660;
    return sequence$$20.substring(offset$$17, v351);
  }
  function v8(str$$14, p1$$8, p2$$3, offset$$16, s$$10) {
    var v661 = p1$$8.length;
    var v819 = p1$$8.length;
    var v820 = p2$$3.length;
    var v662 = v819 + v820;
    var v352 = sequence$$20.substring(v661, v662);
    return p1$$8 + v352;
  }
  function v7(str$$13, p1$$7, offset$$15, s$$9) {
    var v353 = ["A", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "Y"];
    var v354 = p1$$7.length;
    return getRandomSequence(v353, v354);
  }
  function v6(str$$12, p1$$6, p2$$2, offset$$14, s$$8) {
    var v663 = ["A", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "Y"];
    var v664 = p2$$2.length;
    var v355 = getRandomSequence(v663, v664);
    return p1$$6 + v355;
  }
  function v5(str$$11, p1$$5, offset$$13, s$$7) {
    return p1$$5.toLowerCase();
  }
  function v4(str$$10, p1$$4, p2$$1, offset$$12, s$$6) {
    var v356 = p2$$1.toLowerCase();
    return p1$$4 + v356;
  }
  function v3(str$$9, p1$$3, offset$$11, s$$5) {
    return p1$$3.toUpperCase();
  }
  function v2(str$$8, p1$$2, p2, offset$$10, s$$4) {
    var v357 = p2.toUpperCase();
    return p1$$2 + v357;
  }
  var sequenceArray$$1 = new Array;
  var v665 = this.type;
  var v363 = v665 == "new_sequence";
  if (v363) {
    var i$$14 = 0;
    var v821 = this.ranges;
    var v666 = v821.length;
    var v360 = i$$14 < v666;
    for (;v360;) {
      var v932 = this.ranges;
      var v822 = v932[i$$14];
      var v667 = v822.getSequence(sequence$$20);
      var v359 = v667 != "";
      if (v359) {
        var v823 = this.ranges;
        var v668 = v823[i$$14];
        var v358 = v668.getSequence(sequence$$20);
        sequenceArray$$1.push(v358);
      }
      i$$14++;
      var v824 = this.ranges;
      var v669 = v824.length;
      v360 = i$$14 < v669;
    }
    var v361 = outputWindow.document;
    var v825 = sequenceArray$$1.join("");
    var v670 = addReturns(v825);
    var v362 = v670 + "\n\n";
    v361.write(v362);
    return true;
  }
  var v671 = this.type;
  var v370 = v671 == "separate";
  if (v370) {
    i$$14 = 0;
    var v826 = this.ranges;
    var v672 = v826.length;
    var v369 = i$$14 < v672;
    for (;v369;) {
      var v933 = this.ranges;
      var v827 = v933[i$$14];
      var v673 = v827.getSequence(sequence$$20);
      var v368 = v673 != "";
      if (v368) {
        var v364 = outputWindow.document;
        var v934 = this.ranges;
        var v828 = v934[i$$14];
        var v674 = v828.getTitle();
        var v365 = v674 + "\n";
        v364.write(v365);
        var v366 = outputWindow.document;
        var v1011 = this.ranges;
        var v935 = v1011[i$$14];
        var v829 = v935.getSequence(sequence$$20);
        var v675 = addReturns(v829);
        var v367 = v675 + "\n\n";
        v366.write(v367);
      }
      i$$14++;
      var v830 = this.ranges;
      var v676 = v830.length;
      v369 = i$$14 < v676;
    }
    return true;
  }
  var v677 = this.type;
  var v378 = v677 == "uppercased";
  if (v378) {
    var re$$3;
    sequence$$20 = sequence$$20.toLowerCase();
    i$$14 = 0;
    var v831 = this.ranges;
    var v678 = v831.length;
    var v375 = i$$14 < v678;
    for (;v375;) {
      var v936 = this.ranges;
      var v832 = v936[i$$14];
      var v679 = v832.getSequence(sequence$$20);
      var v374 = v679 != "";
      if (v374) {
        var v937 = this.ranges;
        var v833 = v937[i$$14];
        var v680 = v833.start;
        var v373 = v680 > 1;
        if (v373) {
          var v1104 = this.ranges;
          var v1060 = v1104[i$$14];
          var v1012 = v1060.start;
          var v938 = v1012 - 1;
          var v834 = "(.{" + v938;
          var v681 = v834 + "})\\B(.{";
          var v1061 = this.ranges;
          var v1013 = v1061[i$$14];
          var v939 = v1013.stop;
          var v1062 = this.ranges;
          var v1014 = v1062[i$$14];
          var v940 = v1014.start;
          var v835 = v939 - v940;
          var v682 = v835 + 1;
          var v371 = v681 + v682;
          re$$3 = v371 + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = sequence$$20.replace(re$$3, v2);
        } else {
          var v1063 = this.ranges;
          var v1015 = v1063[i$$14];
          var v941 = v1015.stop;
          var v1064 = this.ranges;
          var v1016 = v1064[i$$14];
          var v942 = v1016.start;
          var v836 = v941 - v942;
          var v683 = v836 + 1;
          var v372 = "(.{" + v683;
          re$$3 = v372 + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = sequence$$20.replace(re$$3, v3);
        }
      }
      i$$14++;
      var v837 = this.ranges;
      var v684 = v837.length;
      v375 = i$$14 < v684;
    }
    var v376 = outputWindow.document;
    var v685 = addReturns(sequence$$20);
    var v377 = v685 + "\n\n";
    v376.write(v377);
    return true;
  }
  var v686 = this.type;
  var v386 = v686 == "lowercased";
  if (v386) {
    sequence$$20 = sequence$$20.toUpperCase();
    i$$14 = 0;
    var v838 = this.ranges;
    var v687 = v838.length;
    var v383 = i$$14 < v687;
    for (;v383;) {
      var v943 = this.ranges;
      var v839 = v943[i$$14];
      var v688 = v839.getSequence(sequence$$20);
      var v382 = v688 != "";
      if (v382) {
        var v944 = this.ranges;
        var v840 = v944[i$$14];
        var v689 = v840.start;
        var v381 = v689 > 1;
        if (v381) {
          var v1105 = this.ranges;
          var v1065 = v1105[i$$14];
          var v1017 = v1065.start;
          var v945 = v1017 - 1;
          var v841 = "(.{" + v945;
          var v690 = v841 + "})\\B(.{";
          var v1066 = this.ranges;
          var v1018 = v1066[i$$14];
          var v946 = v1018.stop;
          var v1067 = this.ranges;
          var v1019 = v1067[i$$14];
          var v947 = v1019.start;
          var v842 = v946 - v947;
          var v691 = v842 + 1;
          var v379 = v690 + v691;
          re$$3 = v379 + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = sequence$$20.replace(re$$3, v4);
        } else {
          var v1068 = this.ranges;
          var v1020 = v1068[i$$14];
          var v948 = v1020.stop;
          var v1069 = this.ranges;
          var v1021 = v1069[i$$14];
          var v949 = v1021.start;
          var v843 = v948 - v949;
          var v692 = v843 + 1;
          var v380 = "(.{" + v692;
          re$$3 = v380 + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = sequence$$20.replace(re$$3, v5);
        }
      }
      i$$14++;
      var v844 = this.ranges;
      var v693 = v844.length;
      v383 = i$$14 < v693;
    }
    var v384 = outputWindow.document;
    var v694 = addReturns(sequence$$20);
    var v385 = v694 + "\n\n";
    v384.write(v385);
    return true;
  }
  var v695 = this.type;
  var v394 = v695 == "randomized";
  if (v394) {
    i$$14 = 0;
    var v845 = this.ranges;
    var v696 = v845.length;
    var v391 = i$$14 < v696;
    for (;v391;) {
      var v950 = this.ranges;
      var v846 = v950[i$$14];
      var v697 = v846.getSequence(sequence$$20);
      var v390 = v697 != "";
      if (v390) {
        var v951 = this.ranges;
        var v847 = v951[i$$14];
        var v698 = v847.start;
        var v389 = v698 > 1;
        if (v389) {
          var v1106 = this.ranges;
          var v1070 = v1106[i$$14];
          var v1022 = v1070.start;
          var v952 = v1022 - 1;
          var v848 = "(.{" + v952;
          var v699 = v848 + "})\\B(.{";
          var v1071 = this.ranges;
          var v1023 = v1071[i$$14];
          var v953 = v1023.stop;
          var v1072 = this.ranges;
          var v1024 = v1072[i$$14];
          var v954 = v1024.start;
          var v849 = v953 - v954;
          var v700 = v849 + 1;
          var v387 = v699 + v700;
          re$$3 = v387 + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = sequence$$20.replace(re$$3, v6);
        } else {
          var v1073 = this.ranges;
          var v1025 = v1073[i$$14];
          var v955 = v1025.stop;
          var v1074 = this.ranges;
          var v1026 = v1074[i$$14];
          var v956 = v1026.start;
          var v850 = v955 - v956;
          var v701 = v850 + 1;
          var v388 = "(.{" + v701;
          re$$3 = v388 + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = sequence$$20.replace(re$$3, v7);
        }
      }
      i$$14++;
      var v851 = this.ranges;
      var v702 = v851.length;
      v391 = i$$14 < v702;
    }
    var v392 = outputWindow.document;
    var v703 = addReturns(sequence$$20);
    var v393 = v703 + "\n\n";
    v392.write(v393);
    return true;
  }
  var v704 = this.type;
  var v404 = v704 == "preserved";
  if (v404) {
    var v395 = ["A", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "Y"];
    var v396 = sequence$$20.length;
    var randomSequence = getRandomSequence(v395, v396);
    i$$14 = 0;
    var v852 = this.ranges;
    var v705 = v852.length;
    var v401 = i$$14 < v705;
    for (;v401;) {
      var v957 = this.ranges;
      var v853 = v957[i$$14];
      var v706 = v853.getSequence(sequence$$20);
      var v400 = v706 != "";
      if (v400) {
        var v958 = this.ranges;
        var v854 = v958[i$$14];
        var v707 = v854.start;
        var v399 = v707 > 1;
        if (v399) {
          var v1107 = this.ranges;
          var v1075 = v1107[i$$14];
          var v1027 = v1075.start;
          var v959 = v1027 - 1;
          var v855 = "(.{" + v959;
          var v708 = v855 + "})\\B(.{";
          var v1076 = this.ranges;
          var v1028 = v1076[i$$14];
          var v960 = v1028.stop;
          var v1077 = this.ranges;
          var v1029 = v1077[i$$14];
          var v961 = v1029.start;
          var v856 = v960 - v961;
          var v709 = v856 + 1;
          var v397 = v708 + v709;
          re$$3 = v397 + "})";
          re$$3 = new RegExp(re$$3);
          randomSequence = randomSequence.replace(re$$3, v8);
        } else {
          var v1078 = this.ranges;
          var v1030 = v1078[i$$14];
          var v962 = v1030.stop;
          var v1079 = this.ranges;
          var v1031 = v1079[i$$14];
          var v963 = v1031.start;
          var v857 = v962 - v963;
          var v710 = v857 + 1;
          var v398 = "(.{" + v710;
          re$$3 = v398 + "})";
          re$$3 = new RegExp(re$$3);
          randomSequence = randomSequence.replace(re$$3, v9);
        }
      }
      i$$14++;
      var v858 = this.ranges;
      var v711 = v858.length;
      v401 = i$$14 < v711;
    }
    var v402 = outputWindow.document;
    var v712 = addReturns(randomSequence);
    var v403 = v712 + "\n\n";
    v402.write(v403);
    return true;
  }
  return;
}
function RangeGroup(type$$25) {
  this.type = type$$25;
  var v1203 = new Array;
  this.ranges = v1203;
  return;
}
new Range(0, 0);
var v405 = Range.prototype;
v405.getSequence = getSequence;
var v406 = Range.prototype;
v406.getTitle = getTitle;
new RangeGroup("", "");
var v407 = RangeGroup.prototype;
v407.addRange = addRange;
var v408 = RangeGroup.prototype;
v408.writeRanges = writeRanges;
document.onload = v10;
var v409 = document.getElementById("submitbtn");
v409.onclick = v11;
var v410 = document.getElementById("clearbtn");
v410.onclick = v12

}
