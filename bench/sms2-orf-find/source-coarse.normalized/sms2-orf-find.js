introspect(JAM.policy.pFull) {
function v5() {
  var v725 = document.forms;
  var v596 = v725[0];
  var v350 = v596.elements;
  var v6 = v350[0];
  v6.value = " ";
  var v726 = document.forms;
  var v597 = v726[0];
  var v351 = v597.elements;
  var v7 = v351[4];
  v7.value = " ";
  return;
}
function v4() {
  try {
    orfFind(document);
  } catch (e$$5) {
    var v8 = "The following error was encountered: " + e$$5;
    alert(v8);
  }
  return;
}
function v3() {
  var v352 = document.main_form;
  var v9 = v352.main_submit;
  v9.focus();
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
  var v10 = arrayOfSequences[0];
  var lengthOfAlign = v10.length;
  var v353 = arrayOfSequences.length;
  var v11 = v353 < 2;
  if (v11) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v354 = arrayOfTitles.length;
  var v13 = i$$1 < v354;
  for (;v13;) {
    var v819 = arrayOfTitles[i$$1];
    var v727 = v819.search(/\S/);
    var v598 = v727 == -1;
    var v729 = !v598;
    if (v729) {
      var v820 = arrayOfSequences[i$$1];
      var v728 = v820.search(/\S/);
      v598 = v728 == -1;
    }
    var v355 = v598;
    var v600 = !v355;
    if (v600) {
      var v730 = arrayOfSequences[i$$1];
      var v599 = v730.length;
      v355 = v599 != lengthOfAlign;
    }
    var v12 = v355;
    if (v12) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v356 = arrayOfTitles.length;
    v13 = i$$1 < v356;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v897 = codonTable.search(/AmAcid/);
  var v821 = v897 == -1;
  var v899 = !v821;
  if (v899) {
    var v898 = codonTable.search(/Codon/);
    v821 = v898 == -1;
  }
  var v731 = v821;
  var v823 = !v731;
  if (v823) {
    var v822 = codonTable.search(/Number/);
    v731 = v822 == -1;
  }
  var v601 = v731;
  var v733 = !v601;
  if (v733) {
    var v732 = codonTable.search(/\/1000/);
    v601 = v732 == -1;
  }
  var v357 = v601;
  var v603 = !v357;
  if (v603) {
    var v602 = codonTable.search(/Fraction\s*\.\./);
    v357 = v602 == -1;
  }
  var v14 = v357;
  if (v14) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v604 = formElement.value;
  var v358 = v604.search(/\S/);
  var v15 = v358 == -1;
  if (v15) {
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
  var v359 = arrayOfPatterns.length;
  var v18 = z$$2 < v359;
  for (;v18;) {
    var v605 = arrayOfPatterns[z$$2];
    var v360 = v605.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v16 = v360 == -1;
    if (v16) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v606 = arrayOfPatterns[z$$2];
    var v361 = moreExpressionCheck(v606);
    var v17 = v361 == false;
    if (v17) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v362 = arrayOfPatterns.length;
    v18 = z$$2 < v362;
  }
  var v19 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v19);
  var v20 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v20);
  var j = 0;
  var v363 = arrayOfPatterns.length;
  var v24 = j < v363;
  for (;v24;) {
    var v607 = arrayOfPatterns[j];
    var v364 = v607.match(/\/.+\//);
    var v21 = v364 + "gi";
    var v1280 = eval(v21);
    geneticCodeMatchExp[j] = v1280;
    var v365 = arrayOfPatterns[j];
    var v22 = v365.match(/=[a-zA-Z\*]/);
    var v1281 = v22.toString();
    geneticCodeMatchResult[j] = v1281;
    var v23 = geneticCodeMatchResult[j];
    var v1282 = v23.replace(/=/g, "");
    geneticCodeMatchResult[j] = v1282;
    j++;
    var v366 = arrayOfPatterns.length;
    v24 = j < v366;
  }
  var i$$2 = 0;
  var v608 = testSequence.length;
  var v367 = v608 - 3;
  var v31 = i$$2 <= v367;
  for (;v31;) {
    var v25 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v25);
    j = 0;
    var v368 = geneticCodeMatchExp.length;
    var v29 = j < v368;
    for (;v29;) {
      var v609 = geneticCodeMatchExp[j];
      var v369 = codon.search(v609);
      var v28 = v369 != -1;
      if (v28) {
        var v27 = oneMatch == true;
        if (v27) {
          var v370 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v26 = v370 + ".";
          alert(v26);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v371 = geneticCodeMatchExp.length;
      v29 = j < v371;
    }
    var v30 = oneMatch == false;
    if (v30) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v610 = testSequence.length;
    var v372 = v610 - 3;
    v31 = i$$2 <= v372;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v373 = arrayOfPatterns$$1.length;
  var v33 = z$$3 < v373;
  for (;v33;) {
    var v611 = arrayOfPatterns$$1[z$$3];
    var v374 = v611.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v32 = v374 != -1;
    if (v32) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v375 = arrayOfPatterns$$1.length;
    v33 = z$$3 < v375;
  }
  var i$$3 = 0;
  var v376 = arrayOfPatterns$$1.length;
  var v37 = i$$3 < v376;
  for (;v37;) {
    var v612 = arrayOfPatterns$$1[i$$3];
    var v377 = "[" + v612;
    var v34 = v377 + "]";
    var re = new RegExp(v34, "gi");
    var j$$1 = i$$3 + 1;
    var v378 = arrayOfPatterns$$1.length;
    var v36 = j$$1 < v378;
    for (;v36;) {
      var v613 = arrayOfPatterns$$1[j$$1];
      var v379 = v613.search(re);
      var v35 = v379 != -1;
      if (v35) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v380 = arrayOfPatterns$$1.length;
      v36 = j$$1 < v380;
    }
    i$$3++;
    var v381 = arrayOfPatterns$$1.length;
    v37 = i$$3 < v381;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v382 = arrayOfPatterns$$2.length;
  var v40 = z$$4 < v382;
  for (;v40;) {
    var v614 = arrayOfPatterns$$2[z$$4];
    var v383 = v614.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v38 = v383 == -1;
    if (v38) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v615 = arrayOfPatterns$$2[z$$4];
    var v384 = moreExpressionCheck(v615);
    var v39 = v384 == false;
    if (v39) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v385 = arrayOfPatterns$$2.length;
    v40 = z$$4 < v385;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v734 = getSequenceFromFasta(text$$7);
  var v616 = v734.replace(/[^A-Za-z]/g, "");
  var v386 = v616.length;
  var v42 = v386 > maxInput;
  if (v42) {
    var v387 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v41 = v387 + " characters.";
    alert(v41);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v388 = text$$8.length;
  var v44 = v388 > maxInput$$1;
  if (v44) {
    var v389 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v43 = v389 + " characters.";
    alert(v43);
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
  var v45 = outputWindow.document;
  v45.write("</form>");
  return true;
}
function closePre() {
  var v46 = outputWindow.document;
  v46.write("</div>");
  var v47 = outputWindow.document;
  v47.write("</pre>\n");
  return;
}
function closeTextArea() {
  var v48 = outputWindow.document;
  v48.write("</textarea>");
  return true;
}
function closeWindow() {
  var v49 = outputWindow.document;
  v49.write("</body>\n</html>\n");
  outputWindow.status = "Done.";
  var v50 = outputWindow.document;
  v50.close();
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
  var v390 = alignArray.length;
  var v51 = v390 < 3;
  if (v51) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v391 = alignArray.length;
  var v53 = i$$4 < v391;
  for (;v53;) {
    var v617 = alignArray[i$$4];
    var v392 = v617.search(/[^\s]+\s/);
    var v52 = v392 == -1;
    if (v52) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v393 = alignArray.length;
    v53 = i$$4 < v393;
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
  var v394 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v56 = v394 != -1;
  if (v56) {
    var v55 = matchArray = re$$1.exec(sequenceData);
    for (;v55;) {
      var v54 = matchArray[0];
      arrayOfFasta.push(v54);
      v55 = matchArray = re$$1.exec(sequenceData);
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v395 = sequence$$2.length;
  var v57 = "&gt;results for " + v395;
  var stringToReturn = v57 + " residue sequence ";
  var v396 = fastaSequenceTitle.search(/[^\s]/);
  var v59 = v396 != -1;
  if (v59) {
    var v397 = stringToReturn + '"';
    var v58 = v397 + fastaSequenceTitle;
    stringToReturn = v58 + '"';
  }
  var v398 = stringToReturn + ' starting "';
  var v399 = sequence$$2.substring(0, 10);
  var v60 = v398 + v399;
  stringToReturn = v60 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v400 = sequenceOne.length;
  var v61 = "Search results for " + v400;
  var stringToReturn$$1 = v61 + " residue sequence ";
  var v401 = fastaSequenceTitleOne.search(/[^\s]/);
  var v63 = v401 != -1;
  if (v63) {
    var v402 = stringToReturn$$1 + '"';
    var v62 = v402 + fastaSequenceTitleOne;
    stringToReturn$$1 = v62 + '"';
  }
  var v403 = stringToReturn$$1 + ' starting "';
  var v404 = sequenceOne.substring(0, 10);
  var v64 = v403 + v404;
  stringToReturn$$1 = v64 + '"\n';
  var v405 = stringToReturn$$1 + "and ";
  var v406 = sequenceTwo.length;
  var v65 = v405 + v406;
  stringToReturn$$1 = v65 + " residue sequence ";
  var v407 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v67 = v407 != -1;
  if (v67) {
    var v408 = stringToReturn$$1 + '"';
    var v66 = v408 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v66 + '"';
  }
  var v409 = stringToReturn$$1 + ' starting "';
  var v410 = sequenceTwo.substring(0, 10);
  var v68 = v409 + v410;
  stringToReturn$$1 = v68 + '"';
  var v69 = '<div class="info">' + stringToReturn$$1;
  return v69 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v70 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v70);
  var j$$2 = 0;
  var v411 = arrayOfPatterns$$3.length;
  var v72 = j$$2 < v411;
  for (;v72;) {
    var v618 = arrayOfPatterns$$3[j$$2];
    var v412 = v618.match(/\/.+\//);
    var v71 = v412 + "gi";
    var v1283 = eval(v71);
    geneticCodeMatchExp$$1[j$$2] = v1283;
    j$$2++;
    var v413 = arrayOfPatterns$$3.length;
    v72 = j$$2 < v413;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v73 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v73);
  var j$$3 = 0;
  var v414 = arrayOfPatterns$$4.length;
  var v76 = j$$3 < v414;
  for (;v76;) {
    var v415 = arrayOfPatterns$$4[j$$3];
    var v74 = v415.match(/=[a-zA-Z\*]/);
    var v1284 = v74.toString();
    geneticCodeMatchResult$$1[j$$3] = v1284;
    var v75 = geneticCodeMatchResult$$1[j$$3];
    var v1285 = v75.replace(/=/g, "");
    geneticCodeMatchResult$$1[j$$3] = v1285;
    j$$3++;
    var v416 = arrayOfPatterns$$4.length;
    v76 = j$$3 < v416;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v417 = sequence$$3.length;
  var v77 = "Results for " + v417;
  var stringToReturn$$2 = v77 + " residue sequence ";
  var v418 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v79 = v418 != -1;
  if (v79) {
    var v419 = stringToReturn$$2 + '"';
    var v78 = v419 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v78 + '"';
  }
  var v420 = stringToReturn$$2 + ' starting "';
  var v421 = sequence$$3.substring(0, 10);
  var v80 = v420 + v421;
  stringToReturn$$2 = v80 + '"';
  var v81 = '<div class="info">' + stringToReturn$$2;
  return v81 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v619 = "Results for " + topology;
  var v422 = v619 + " ";
  var v423 = sequence$$4.length;
  var v82 = v422 + v423;
  var stringToReturn$$3 = v82 + " residue sequence ";
  var v424 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v84 = v424 != -1;
  if (v84) {
    var v425 = stringToReturn$$3 + '"';
    var v83 = v425 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v83 + '"';
  }
  var v426 = stringToReturn$$3 + ' starting "';
  var v427 = sequence$$4.substring(0, 10);
  var v85 = v426 + v427;
  stringToReturn$$3 = v85 + '"';
  var v86 = '<div class="info">' + stringToReturn$$3;
  return v86 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v428 = sequenceOne$$1.length;
  var v87 = "Alignment results for " + v428;
  var stringToReturn$$4 = v87 + " residue sequence ";
  var v429 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v89 = v429 != -1;
  if (v89) {
    var v430 = stringToReturn$$4 + '"';
    var v88 = v430 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v88 + '"';
  }
  var v431 = stringToReturn$$4 + ' starting "';
  var v432 = sequenceOne$$1.substring(0, 10);
  var v90 = v431 + v432;
  stringToReturn$$4 = v90 + '"\n';
  var v433 = stringToReturn$$4 + "and ";
  var v434 = sequenceTwo$$1.length;
  var v91 = v433 + v434;
  stringToReturn$$4 = v91 + " residue sequence ";
  var v435 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v93 = v435 != -1;
  if (v93) {
    var v436 = stringToReturn$$4 + '"';
    var v92 = v436 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v92 + '"';
  }
  var v437 = stringToReturn$$4 + ' starting "';
  var v438 = sequenceTwo$$1.substring(0, 10);
  var v94 = v437 + v438;
  stringToReturn$$4 = v94 + '"';
  var v95 = '<div class="info">' + stringToReturn$$4;
  return v95 + "</div>\n";
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v97 = j$$4 < lengthOut;
  for (;v97;) {
    var v439 = Math.random();
    var v440 = components.length;
    var v96 = v439 * v440;
    tempNum = Math.floor(v96);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4++;
    v97 = j$$4 < lengthOut;
  }
  return sequenceArray.join("");
}
function getSequenceFromFasta(sequenceRecord) {
  var v441 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v98 = v441 != -1;
  if (v98) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "");
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v442 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v100 = v442 != -1;
  if (v100) {
    var v99 = sequenceRecord$$1.match(/\>[^\f\n\r]+[\f\n\r]/, "");
    fastaTitle = v99.toString();
    fastaTitle = fastaTitle.replace(/\>|[\f\n\r]/g, "");
    fastaTitle = fastaTitle.replace(/\s{2,}/g, " ");
    fastaTitle = fastaTitle.replace(/[\<\>]/gi, "");
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  var v1122 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v1097 = v1122 != -1;
  var v1124 = !v1097;
  if (v1124) {
    var v1123 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    v1097 = v1123 != -1;
  }
  var v1070 = v1097;
  var v1099 = !v1070;
  if (v1099) {
    var v1098 = expressionToCheck.search(/\[\]/);
    v1070 = v1098 != -1;
  }
  var v1041 = v1070;
  var v1072 = !v1041;
  if (v1072) {
    var v1071 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
    v1041 = v1071 != -1;
  }
  var v1008 = v1041;
  var v1043 = !v1008;
  if (v1043) {
    var v1042 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
    v1008 = v1042 != -1;
  }
  var v954 = v1008;
  var v1010 = !v954;
  if (v1010) {
    var v1009 = expressionToCheck.search(/\|\|/);
    v954 = v1009 != -1;
  }
  var v900 = v954;
  var v956 = !v900;
  if (v956) {
    var v955 = expressionToCheck.search(/\/\|/);
    v900 = v955 != -1;
  }
  var v824 = v900;
  var v902 = !v824;
  if (v902) {
    var v901 = expressionToCheck.search(/\|\//);
    v824 = v901 != -1;
  }
  var v735 = v824;
  var v826 = !v735;
  if (v826) {
    var v825 = expressionToCheck.search(/\[.\]/);
    v735 = v825 != -1;
  }
  var v620 = v735;
  var v737 = !v620;
  if (v737) {
    var v736 = expressionToCheck.search(/\</);
    v620 = v736 != -1;
  }
  var v443 = v620;
  var v622 = !v443;
  if (v622) {
    var v621 = expressionToCheck.search(/\>/);
    v443 = v621 != -1;
  }
  var v101 = v443;
  if (v101) {
    return false;
  }
  return true;
}
function openForm() {
  var v102 = outputWindow.document;
  v102.write('<form action="">\n');
  return true;
}
function openPre() {
  var v103 = outputWindow.document;
  v103.write("<pre>");
  var v104 = outputWindow.document;
  v104.write('<div class="pre">');
  return;
}
function openTextArea() {
  var v105 = outputWindow.document;
  v105.write('<br /><textarea rows="6" cols="61">\n');
  return true;
}
function openWindow(title$$5) {
  _openWindow(title$$5, true);
  return;
}
function _openWindow(title$$6, isColor) {
  outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  outputWindow.focus();
  var v106 = outputWindow.document;
  var v738 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v623 = v738 + "<head>\n";
  var v444 = v623 + "<title>Sequence Manipulation Suite</title>\n";
  var v107 = v444 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v106.write(v107);
  if (isColor) {
    var v108 = outputWindow.document;
    var v1188 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1167 = v1188 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1146 = v1167 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1125 = v1146 + "div.info {font-weight: bold}\n";
    var v1100 = v1125 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1073 = v1100 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v1044 = v1073 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v1011 = v1044 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v957 = v1011 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v903 = v957 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v827 = v903 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v739 = v827 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v624 = v739 + "td.many {color: #000000}\n";
    var v445 = v624 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v109 = v445 + "</style>\n";
    v108.write(v109);
  } else {
    var v110 = outputWindow.document;
    var v1209 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1189 = v1209 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1168 = v1189 + "div.title {display: none}\n";
    var v1147 = v1168 + "div.info {font-weight: bold}\n";
    var v1126 = v1147 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1101 = v1126 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1074 = v1101 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v1045 = v1074 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1012 = v1045 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v958 = v1012 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v904 = v958 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v828 = v904 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v740 = v828 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v625 = v740 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v446 = v625 + "img {display: none}\n";
    var v111 = v446 + "</style>\n";
    v110.write(v111);
  }
  var v112 = outputWindow.document;
  var v741 = "</head>\n" + '<body class="main">\n';
  var v626 = v741 + '<div class="title">';
  var v447 = v626 + title$$6;
  var v113 = v447 + " results</div>\n";
  v112.write(v113);
  outputWindow.status = "Please Wait.";
  return true;
}
function openWindowAlign(title$$7) {
  _openWindowAlign(title$$7, true);
  return;
}
function _openWindowAlign(title$$8, isBackground) {
  outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  outputWindow.focus();
  var v114 = outputWindow.document;
  var v742 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v627 = v742 + "<head>\n";
  var v448 = v627 + "<title>Sequence Manipulation Suite</title>\n";
  var v115 = v448 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v114.write(v115);
  if (isBackground) {
    var v116 = outputWindow.document;
    var v1190 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1169 = v1190 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1148 = v1169 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1127 = v1148 + "div.info {font-weight: bold}\n";
    var v1102 = v1127 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v1075 = v1102 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v1046 = v1075 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v1013 = v1046 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v959 = v1013 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v905 = v959 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v829 = v905 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v743 = v829 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v628 = v743 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v449 = v628 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v117 = v449 + "</style>\n";
    v116.write(v117);
  } else {
    var v118 = outputWindow.document;
    var v1228 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1210 = v1228 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1191 = v1210 + "div.title {display: none}\n";
    var v1170 = v1191 + "div.info {font-weight: bold}\n";
    var v1149 = v1170 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1128 = v1149 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v1103 = v1128 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v1076 = v1103 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v1047 = v1076 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v1014 = v1047 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v960 = v1014 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v906 = v960 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v830 = v906 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v744 = v830 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v629 = v744 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v450 = v629 + "img {display: none}\n";
    var v119 = v450 + "</style>\n";
    v118.write(v119);
  }
  var v120 = outputWindow.document;
  var v745 = "</head>\n" + '<body class="main">\n';
  var v630 = v745 + '<div class="title">';
  var v451 = v630 + title$$8;
  var v121 = v451 + " results</div>\n";
  v120.write(v121);
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
  var v452 = dnaSequence$$1.search(/./);
  var v122 = v452 != -1;
  if (v122) {
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
  var v123 = j$$5 < lengthOfColumn;
  for (;v123;) {
    tempString = tempString + " ";
    j$$5++;
    v123 = j$$5 < lengthOfColumn;
  }
  var v124 = tempString + theNumber;
  theNumber = v124 + " ";
  var v125 = sequenceToAppend + theNumber;
  sequenceToAppend = v125 + tabIn;
  return sequenceToAppend;
}
function testScript() {
  function v1(str$$7, p1$$1, offset$$9, s$$3) {
    return p1$$1 + "X";
  }
  var testArray = new Array;
  var testString = "1234567890";
  testArray.push(testString);
  var v453 = testArray[0];
  var v126 = v453 != testString;
  if (v126) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v454 = testString.search(re$$2);
  var v127 = v454 == -1;
  if (v127) {
    alert("Regular expression 'm' flag not supported. See browser compatibility page.");
    return false;
  }
  var caughtException = false;
  try {
    re$$2 = eval("Exception handling not supported. Check browser compatibility page.");
  } catch (e$$4) {
    caughtException = true;
  }
  var v128 = !caughtException;
  if (v128) {
    alert("Exception handling not supported. See browser compatibility page.");
  }
  testString = "123";
  testString = testString.replace(/(\d)/g, v1);
  var v129 = testString != "1X2X3X";
  if (v129) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false;
  }
  var testNum = 2489.8237;
  var v455 = testNum.toFixed(3);
  var v130 = v455 != 2489.824;
  if (v130) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v456 = testNum.toPrecision(5);
  var v131 = v456 != 2489.8;
  if (v131) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v457 = theNumber$$1.search(/\d/);
  var v132 = v457 == -1;
  if (v132) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v831 = emblFile.search(/ID/);
  var v746 = v831 == -1;
  var v833 = !v746;
  if (v833) {
    var v832 = emblFile.search(/AC/);
    v746 = v832 == -1;
  }
  var v631 = v746;
  var v748 = !v631;
  if (v748) {
    var v747 = emblFile.search(/DE/);
    v631 = v747 == -1;
  }
  var v458 = v631;
  var v633 = !v458;
  if (v633) {
    var v632 = emblFile.search(/SQ/);
    v458 = v632 == -1;
  }
  var v133 = v458;
  if (v133) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v459 = theNumber$$2.search(/\d/);
  var v134 = v459 == -1;
  if (v134) {
    alert("Please enter a number.");
    return false;
  }
  var v136 = theNumber$$2 > maxInput$$2;
  if (v136) {
    var v460 = "Please enter a number less than or equal to " + maxInput$$2;
    var v135 = v460 + ".";
    alert(v135);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v461 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v137 = v461 != -1;
  if (v137) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v462 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v138 = v462 != -1;
  if (v138) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v834 = genBankFile.search(/LOCUS/);
  var v749 = v834 == -1;
  var v836 = !v749;
  if (v836) {
    var v835 = genBankFile.search(/DEFINITION/);
    v749 = v835 == -1;
  }
  var v634 = v749;
  var v751 = !v634;
  if (v751) {
    var v750 = genBankFile.search(/ACCESSION/);
    v634 = v750 == -1;
  }
  var v463 = v634;
  var v636 = !v463;
  if (v636) {
    var v635 = genBankFile.search(/ORIGIN/);
    v463 = v635 == -1;
  }
  var v139 = v463;
  if (v139) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v837 = genBankFile$$1.search(/LOCUS/);
  var v752 = v837 == -1;
  var v839 = !v752;
  if (v839) {
    var v838 = genBankFile$$1.search(/DEFINITION/);
    v752 = v838 == -1;
  }
  var v637 = v752;
  var v754 = !v637;
  if (v754) {
    var v753 = genBankFile$$1.search(/ACCESSION/);
    v637 = v753 == -1;
  }
  var v464 = v637;
  var v639 = !v464;
  if (v639) {
    var v638 = genBankFile$$1.search(/ORIGIN/);
    v464 = v638 == -1;
  }
  var v140 = v464;
  if (v140) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v465 = genBankFile$$1.search(/FEATURES {13}/);
  var v141 = v465 == -1;
  if (v141) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v840 = emblFile$$1.search(/ID/);
  var v755 = v840 == -1;
  var v842 = !v755;
  if (v842) {
    var v841 = emblFile$$1.search(/AC/);
    v755 = v841 == -1;
  }
  var v640 = v755;
  var v757 = !v640;
  if (v757) {
    var v756 = emblFile$$1.search(/DE/);
    v640 = v756 == -1;
  }
  var v466 = v640;
  var v642 = !v466;
  if (v642) {
    var v641 = emblFile$$1.search(/SQ/);
    v466 = v641 == -1;
  }
  var v142 = v466;
  if (v142) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v467 = emblFile$$1.search(/^FT/m);
  var v143 = v467 == -1;
  if (v143) {
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
  var v150 = i$$5 < stopBase;
  for (;v150;) {
    var v144 = i$$5 + 1;
    lineOfText = rightNum(v144, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v468 = basePerLine / groupSize;
    var v147 = j$$6 <= v468;
    for (;v147;) {
      var v146 = k < groupSize;
      for (;v146;) {
        var v469 = k + i$$5;
        var v145 = text$$10.charAt(v469);
        lineOfText = lineOfText + v145;
        k = k + 1;
        v146 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v470 = basePerLine / groupSize;
      v147 = j$$6 <= v470;
    }
    var v148 = outputWindow.document;
    var v149 = lineOfText + "\n";
    v148.write(v149);
    lineOfText = "";
    v150 = i$$5 < stopBase;
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
    var v471 = adjustment < 0;
    if (v471) {
      v471 = adjusted >= 0;
    }
    var v151 = v471;
    if (v151) {
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
  var v184 = i$$6 < stopBase$$2;
  for (;v184;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v472 = basePerLine$$2 / groupSize$$2;
    var v160 = j$$7 <= v472;
    for (;v160;) {
      var v155 = k$$1 < groupSize$$2;
      for (;v155;) {
        var v473 = i$$6 + k$$1;
        var v152 = v473 >= stopBase$$2;
        if (v152) {
          break;
        }
        var v153 = lineOfText$$1;
        var v474 = k$$1 + i$$6;
        var v154 = text$$12.charAt(v474);
        lineOfText$$1 = v153 + v154;
        k$$1 = k$$1 + 1;
        v155 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v158 = numberPosition$$1 == "above";
      if (v158) {
        var v156 = aboveNum;
        var v475 = adjustNumbering(i$$6, numberingAdjustment);
        var v157 = rightNum(v475, "", groupSize$$2, tabIn$$3);
        aboveNum = v156 + v157;
      }
      var v159 = i$$6 >= stopBase$$2;
      if (v159) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v476 = basePerLine$$2 / groupSize$$2;
      v160 = j$$7 <= v476;
    }
    var v183 = numberPosition$$1 == "left";
    if (v183) {
      var v161 = outputWindow.document;
      var v758 = adjustNumbering(lineNum, numberingAdjustment);
      var v643 = rightNum(v758, "", 8, tabIn$$3);
      var v477 = v643 + lineOfText$$1;
      var v162 = v477 + "\n";
      v161.write(v162);
      var v166 = strands$$1 == "two";
      if (v166) {
        var v163 = outputWindow.document;
        var v759 = adjustNumbering(lineNum, numberingAdjustment);
        var v644 = rightNum(v759, "", 8, tabIn$$3);
        var v645 = complement(lineOfText$$1);
        var v478 = v644 + v645;
        var v164 = v478 + "\n";
        v163.write(v164);
        var v165 = outputWindow.document;
        v165.write("\n");
      }
    } else {
      var v182 = numberPosition$$1 == "right";
      if (v182) {
        var v167 = outputWindow.document;
        var v646 = lineOfText$$1;
        var v647 = adjustNumbering(i$$6, numberingAdjustment);
        var v479 = v646 + v647;
        var v168 = v479 + "\n";
        v167.write(v168);
        var v172 = strands$$1 == "two";
        if (v172) {
          var v169 = outputWindow.document;
          var v648 = complement(lineOfText$$1);
          var v649 = adjustNumbering(i$$6, numberingAdjustment);
          var v480 = v648 + v649;
          var v170 = v480 + "\n";
          v169.write(v170);
          var v171 = outputWindow.document;
          v171.write("\n");
        }
      } else {
        var v181 = numberPosition$$1 == "above";
        if (v181) {
          var v173 = outputWindow.document;
          var v174 = aboveNum + "\n";
          v173.write(v174);
          var v175 = outputWindow.document;
          var v176 = lineOfText$$1 + "\n";
          v175.write(v176);
          var v180 = strands$$1 == "two";
          if (v180) {
            var v177 = outputWindow.document;
            var v481 = complement(lineOfText$$1);
            var v178 = v481 + "\n";
            v177.write(v178);
            var v179 = outputWindow.document;
            v179.write("\n");
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v184 = i$$6 < stopBase$$2;
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
  var v203 = i$$7 < stopBase$$3;
  for (;v203;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v482 = basePerLine$$3 / groupSize$$3;
    var v191 = j$$8 <= v482;
    for (;v191;) {
      var v187 = k$$2 < groupSize$$3;
      for (;v187;) {
        var v483 = i$$7 + k$$2;
        var v185 = v483 >= stopBase$$3;
        if (v185) {
          break;
        }
        var v484 = k$$2 + i$$7;
        var v186 = text$$13.charAt(v484);
        lineOfText$$2 = lineOfText$$2 + v186;
        k$$2 = k$$2 + 1;
        v187 = k$$2 < groupSize$$3;
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v189 = numberPosition$$2 == "above";
      if (v189) {
        var v188 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = aboveNum$$1 + v188;
      }
      var v190 = i$$7 >= stopBase$$3;
      if (v190) {
        break;
      }
      k$$2 = 0;
      j$$8++;
      var v485 = basePerLine$$3 / groupSize$$3;
      v191 = j$$8 <= v485;
    }
    var v202 = numberPosition$$2 == "left";
    if (v202) {
      var v192 = outputWindow.document;
      var v650 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v486 = v650 + lineOfText$$2;
      var v193 = v486 + "\n";
      v192.write(v193);
    } else {
      var v201 = numberPosition$$2 == "right";
      if (v201) {
        var v194 = outputWindow.document;
        var v487 = lineOfText$$2 + i$$7;
        var v195 = v487 + "\n";
        v194.write(v195);
      } else {
        var v200 = numberPosition$$2 == "above";
        if (v200) {
          var v196 = outputWindow.document;
          var v197 = aboveNum$$1 + "\n";
          v196.write(v197);
          var v198 = outputWindow.document;
          var v199 = lineOfText$$2 + "\n";
          v198.write(v199);
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v203 = i$$7 < stopBase$$3;
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
  var v760 = sequence$$13.length;
  var v651 = v760 <= firstIndexToMutate;
  var v761 = !v651;
  if (v761) {
    v651 = lastIndexToMutate < 0;
  }
  var v488 = v651;
  var v652 = !v488;
  if (v652) {
    v488 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v204 = v488;
  if (v204) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v212 = i$$8 < numMut;
  for (;v212;) {
    maxNum = sequence$$13.length;
    var v489 = Math.random();
    var v205 = v489 * maxNum;
    randNum = Math.floor(v205);
    var v490 = randNum < firstIndexToMutate;
    var v653 = !v490;
    if (v653) {
      v490 = randNum > lastIndexToMutate;
    }
    var v206 = v490;
    if (v206) {
      numMut++;
      i$$8++;
      v212 = i$$8 < numMut;
      continue;
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for (;needNewChar;) {
      var v491 = Math.random();
      var v492 = components$$1.length;
      var v207 = v491 * v492;
      componentsIndex = Math.round(v207);
      var v493 = components$$1.length;
      var v208 = componentsIndex == v493;
      if (v208) {
        componentsIndex = 0;
      }
      var v494 = components$$1[componentsIndex];
      var v209 = v494 != currentChar;
      if (v209) {
        needNewChar = false;
      }
    }
    var v495 = sequence$$13.substring(0, randNum);
    var v496 = components$$1[componentsIndex];
    var v210 = v495 + v496;
    var v497 = randNum + 1;
    var v498 = sequence$$13.length;
    var v211 = sequence$$13.substring(v497, v498);
    sequence$$13 = v210 + v211;
    i$$8++;
    v212 = i$$8 < numMut;
  }
  var v213 = outputWindow.document;
  var v214 = addReturns(sequence$$13);
  v213.write(v214);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v219 = j$$9 < lengthOut$$1;
  for (;v219;) {
    var v499 = Math.random();
    var v500 = components$$2.length;
    var v215 = v499 * v500;
    tempNum$$1 = Math.floor(v215);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v501 = sequence$$14.length;
    var v218 = v501 == 60;
    if (v218) {
      var v216 = outputWindow.document;
      var v217 = sequence$$14 + "\n";
      v216.write(v217);
      sequence$$14 = "";
    }
    j$$9++;
    v219 = j$$9 < lengthOut$$1;
  }
  var v220 = outputWindow.document;
  var v221 = sequence$$14 + "\n";
  v220.write(v221);
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
  var v225 = dnaConformation == "circular";
  if (v225) {
    var v222 = sequence$$15.substring(0, lookAhead);
    shiftValue = v222.length;
    var v762 = sequence$$15.length;
    var v654 = v762 - lookAhead;
    var v655 = sequence$$15.length;
    var v502 = sequence$$15.substring(v654, v655);
    var v223 = v502 + sequence$$15;
    var v224 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v223 + v224;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v226 = outputWindow.document;
  v226.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  var v227 = outputWindow.document;
  var v763 = '<tr><td class="title" width="200px">' + "Site:";
  var v656 = v763 + '</td><td class="title">';
  var v503 = v656 + "Positions:";
  var v228 = v503 + "</td></tr>\n";
  v227.write(v228);
  var i$$9 = 0;
  var v504 = arrayOfItems.length;
  var v244 = i$$9 < v504;
  for (;v244;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v505 = arrayOfItems[i$$9];
    var v229 = v505.match(/\/.+\//);
    matchExp = v229 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    var v764 = arrayOfItems[i$$9];
    var v657 = v764.match(/\)\D*\d+/);
    var v506 = v657.toString();
    var v230 = v506.replace(/\)\D*/, "");
    cutDistance = parseFloat(v230);
    var v236 = matchArray$$1 = matchExp.exec(sequence$$15);
    for (;v236;) {
      var v231 = matchExp.lastIndex;
      matchPosition = v231 - cutDistance;
      var v507 = matchPosition >= lowerLimit;
      if (v507) {
        v507 = matchPosition < upperLimit;
      }
      var v234 = v507;
      if (v234) {
        timesFound++;
        var v232 = tempString$$1 + ", ";
        var v508 = matchPosition - shiftValue;
        var v233 = v508 + 1;
        tempString$$1 = v232 + v233;
      }
      var v509 = matchExp.lastIndex;
      var v658 = RegExp.lastMatch;
      var v510 = v658.length;
      var v235 = v509 - v510;
      matchExp.lastIndex = v235 + 1;
      v236 = matchArray$$1 = matchExp.exec(sequence$$15);
    }
    var v511 = tempString$$1.search(/\d/);
    var v237 = v511 != -1;
    if (v237) {
      tempString$$1 = tempString$$1.replace(/none,\s*/, "");
    }
    var v241 = timesFound == 0;
    if (v241) {
      backGroundClass = "none";
    } else {
      var v240 = timesFound == 1;
      if (v240) {
        backGroundClass = "one";
      } else {
        var v239 = timesFound == 2;
        if (v239) {
          backGroundClass = "two";
        } else {
          var v238 = timesFound == 3;
          if (v238) {
            backGroundClass = "three";
          } else {
            backGroundClass = "many";
          }
        }
      }
    }
    var v242 = outputWindow.document;
    var v1015 = '<tr><td class="' + backGroundClass;
    var v961 = v1015 + '">';
    var v1077 = arrayOfItems[i$$9];
    var v1048 = v1077.match(/\([^\(]+\)/);
    var v1016 = v1048.toString();
    var v962 = v1016.replace(/\(|\)/g, "");
    var v907 = v961 + v962;
    var v843 = v907 + '</td><td class="';
    var v765 = v843 + backGroundClass;
    var v659 = v765 + '">';
    var v512 = v659 + tempString$$1;
    var v243 = v512 + "</td></tr>\n";
    v242.write(v243);
    timesFound = 0;
    i$$9++;
    var v513 = arrayOfItems.length;
    v244 = i$$9 < v513;
  }
  var v245 = outputWindow.document;
  v245.write("</tbody></table>\n");
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v246 = outputWindow.document;
  v246.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  var v247 = outputWindow.document;
  var v908 = '<tr><td class="title">' + "Pattern:";
  var v844 = v908 + '</td><td class="title">';
  var v766 = v844 + "Times found:";
  var v660 = v766 + '</td><td class="title">';
  var v514 = v660 + "Percentage:";
  var v248 = v514 + "</td></tr>\n";
  v247.write(v248);
  var i$$10 = 0;
  var v515 = arrayOfItems$$1.length;
  var v257 = i$$10 < v515;
  for (;v257;) {
    var tempNumber = 0;
    var v516 = arrayOfItems$$1[i$$10];
    var v249 = v516.match(/\/[^\/]+\//);
    var matchExp$$1 = v249 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    var v517 = sequence$$16.search(matchExp$$1);
    var v251 = v517 != -1;
    if (v251) {
      var v250 = sequence$$16.match(matchExp$$1);
      tempNumber = v250.length;
    }
    var percentage = 0;
    var v661 = originalLength + 1;
    var v845 = arrayOfItems$$1[i$$10];
    var v767 = v845.match(/\d+/);
    var v662 = parseFloat(v767);
    var v518 = v661 - v662;
    var v254 = v518 > 0;
    if (v254) {
      var v252 = 100 * tempNumber;
      var v519 = originalLength + 1;
      var v768 = arrayOfItems$$1[i$$10];
      var v663 = v768.match(/\d+/);
      var v520 = parseFloat(v663);
      var v253 = v519 - v520;
      percentage = v252 / v253;
    }
    var v255 = outputWindow.document;
    var v1078 = arrayOfItems$$1[i$$10];
    var v1049 = v1078.match(/\([^\(]+\)\b/);
    var v1017 = v1049.toString();
    var v963 = v1017.replace(/\(|\)/g, "");
    var v909 = "<tr><td>" + v963;
    var v846 = v909 + "</td><td>";
    var v769 = v846 + tempNumber;
    var v664 = v769 + "</td><td>";
    var v665 = percentage.toFixed(2);
    var v521 = v664 + v665;
    var v256 = v521 + "</td></tr>\n";
    v255.write(v256);
    i$$10++;
    var v522 = arrayOfItems$$1.length;
    v257 = i$$10 < v522;
  }
  var v258 = outputWindow.document;
  v258.write("</tbody></table>\n");
  return true;
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v523 = sequence$$17.length;
  var v265 = v523 > 0;
  for (;v265;) {
    maxNum$$1 = sequence$$17.length;
    var v524 = Math.random();
    var v259 = v524 * maxNum$$1;
    randNum$$1 = Math.floor(v259);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v260 = randNum$$1 + 1;
    var v261 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v260, v261);
    sequence$$17 = tempString1 + tempString2;
    var v525 = tempSeq.length;
    var v264 = v525 == 60;
    if (v264) {
      var v262 = outputWindow.document;
      var v263 = tempSeq + "\n";
      v262.write(v263);
      tempSeq = "";
    }
    var v526 = sequence$$17.length;
    v265 = v526 > 0;
  }
  var v266 = outputWindow.document;
  var v267 = tempSeq + "\n";
  v266.write(v267);
  return true;
}
function getGeneticCodeString(type$$25) {
  var v666 = type$$25.toLowerCase();
  var v527 = v666 == "standard";
  var v668 = !v527;
  if (v668) {
    var v667 = type$$25.toLowerCase();
    v527 = v667 == "transl_table=1";
  }
  var v269 = v527;
  if (v269) {
    var v1263 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1246 = v1263 + "/ga[tcuy]/=D,";
    var v1229 = v1246 + "/ga[agr]/=E,";
    var v1211 = v1229 + "/[tu][tu][tcuy]/=F,";
    var v1192 = v1211 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1171 = v1192 + "/ca[tcuy]/=H,";
    var v1150 = v1171 + "/a[tu][atcuwmhy]/=I,";
    var v1129 = v1150 + "/aa[agr]/=K,";
    var v1104 = v1129 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1079 = v1104 + "/a[tu]g/=M,";
    var v1050 = v1079 + "/aa[tucy]/=N,";
    var v1018 = v1050 + "/cc[acgturyswkmbdhvn]/=P,";
    var v964 = v1018 + "/ca[agr]/=Q,";
    var v910 = v964 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v847 = v910 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v770 = v847 + "/ac[acgturyswkmbdhvn]/=T,";
    var v669 = v770 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v528 = v669 + "/[tu]gg/=W,";
    var v268 = v528 + "/[tu]a[ctuy]/=Y,";
    return v268 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*";
  }
  var v529 = type$$25.toLowerCase();
  var v271 = v529 == "transl_table=2";
  if (v271) {
    var v1264 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1247 = v1264 + "/ga[tcuy]/=D,";
    var v1230 = v1247 + "/ga[agr]/=E,";
    var v1212 = v1230 + "/[tu][tu][tcuy]/=F,";
    var v1193 = v1212 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1172 = v1193 + "/ca[tcuy]/=H,";
    var v1151 = v1172 + "/a[tu][tcuy]/=I,";
    var v1130 = v1151 + "/aa[agr]/=K,";
    var v1105 = v1130 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1080 = v1105 + "/a[tu][agr]/=M,";
    var v1051 = v1080 + "/aa[tucy]/=N,";
    var v1019 = v1051 + "/cc[acgturyswkmbdhvn]/=P,";
    var v965 = v1019 + "/ca[agr]/=Q,";
    var v911 = v965 + "/cg[acgturyswkmbdhvn]/=R,";
    var v848 = v911 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v771 = v848 + "/ac[acgturyswkmbdhvn]/=T,";
    var v670 = v771 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v530 = v670 + "/[tu]g[agr]/=W,";
    var v270 = v530 + "/[tu]a[ctuy]/=Y,";
    return v270 + "/[tu]a[agr]|ag[agr]/=*";
  }
  var v531 = type$$25.toLowerCase();
  var v273 = v531 == "transl_table=3";
  if (v273) {
    var v1265 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1248 = v1265 + "/ga[tcuy]/=D,";
    var v1231 = v1248 + "/ga[agr]/=E,";
    var v1213 = v1231 + "/[tu][tu][tcuy]/=F,";
    var v1194 = v1213 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1173 = v1194 + "/ca[tcuy]/=H,";
    var v1152 = v1173 + "/a[tu][tcuy]/=I,";
    var v1131 = v1152 + "/aa[agr]/=K,";
    var v1106 = v1131 + "/[tu][tu][agr]/=L,";
    var v1081 = v1106 + "/a[tu][agr]/=M,";
    var v1052 = v1081 + "/aa[tucy]/=N,";
    var v1020 = v1052 + "/cc[acgturyswkmbdhvn]/=P,";
    var v966 = v1020 + "/ca[agr]/=Q,";
    var v912 = v966 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v849 = v912 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v772 = v849 + "/ac[acgturyswkmbdhvn]|c[tu][acgturyswkmbdhvn]/=T,";
    var v671 = v772 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v532 = v671 + "/[tu]g[agr]/=W,";
    var v272 = v532 + "/[tu]a[ctuy]/=Y,";
    return v272 + "/[tu]a[agr]/=*";
  }
  var v533 = type$$25.toLowerCase();
  var v275 = v533 == "transl_table=4";
  if (v275) {
    var v1266 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1249 = v1266 + "/ga[tcuy]/=D,";
    var v1232 = v1249 + "/ga[agr]/=E,";
    var v1214 = v1232 + "/[tu][tu][tcuy]/=F,";
    var v1195 = v1214 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1174 = v1195 + "/ca[tcuy]/=H,";
    var v1153 = v1174 + "/a[tu][atcuwmhy]/=I,";
    var v1132 = v1153 + "/aa[agr]/=K,";
    var v1107 = v1132 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1082 = v1107 + "/a[tu]g/=M,";
    var v1053 = v1082 + "/aa[tucy]/=N,";
    var v1021 = v1053 + "/cc[acgturyswkmbdhvn]/=P,";
    var v967 = v1021 + "/ca[agr]/=Q,";
    var v913 = v967 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v850 = v913 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v773 = v850 + "/ac[acgturyswkmbdhvn]/=T,";
    var v672 = v773 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v534 = v672 + "/[tu]g[agr]/=W,";
    var v274 = v534 + "/[tu]a[ctuy]/=Y,";
    return v274 + "/[tu]a[agr]/=*";
  }
  var v535 = type$$25.toLowerCase();
  var v277 = v535 == "transl_table=5";
  if (v277) {
    var v1267 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1250 = v1267 + "/ga[tcuy]/=D,";
    var v1233 = v1250 + "/ga[agr]/=E,";
    var v1215 = v1233 + "/[tu][tu][tcuy]/=F,";
    var v1196 = v1215 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1175 = v1196 + "/ca[tcuy]/=H,";
    var v1154 = v1175 + "/a[tu][tcuy]/=I,";
    var v1133 = v1154 + "/aa[agr]/=K,";
    var v1108 = v1133 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1083 = v1108 + "/a[tu][agr]/=M,";
    var v1054 = v1083 + "/aa[tucy]/=N,";
    var v1022 = v1054 + "/cc[acgturyswkmbdhvn]/=P,";
    var v968 = v1022 + "/ca[agr]/=Q,";
    var v914 = v968 + "/cg[acgturyswkmbdhvn]/=R,";
    var v851 = v914 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v774 = v851 + "/ac[acgturyswkmbdhvn]/=T,";
    var v673 = v774 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v536 = v673 + "/[tu]g[agr]/=W,";
    var v276 = v536 + "/[tu]a[ctuy]/=Y,";
    return v276 + "/[tu]a[agr]/=*";
  }
  var v537 = type$$25.toLowerCase();
  var v279 = v537 == "transl_table=6";
  if (v279) {
    var v1268 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1251 = v1268 + "/ga[tcuy]/=D,";
    var v1234 = v1251 + "/ga[agr]/=E,";
    var v1216 = v1234 + "/[tu][tu][tcuy]/=F,";
    var v1197 = v1216 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1176 = v1197 + "/ca[tcuy]/=H,";
    var v1155 = v1176 + "/a[tu][atcuwmhy]/=I,";
    var v1134 = v1155 + "/aa[agr]/=K,";
    var v1109 = v1134 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1084 = v1109 + "/a[tu]g/=M,";
    var v1055 = v1084 + "/aa[tucy]/=N,";
    var v1023 = v1055 + "/cc[acgturyswkmbdhvn]/=P,";
    var v969 = v1023 + "/ca[agr]|[tu]a[agr]|[tcuy]a[agr]/=Q,";
    var v915 = v969 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v852 = v915 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v775 = v852 + "/ac[acgturyswkmbdhvn]/=T,";
    var v674 = v775 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v538 = v674 + "/[tu]gg/=W,";
    var v278 = v538 + "/[tu]a[ctuy]/=Y,";
    return v278 + "/[tu]ga/=*";
  }
  var v539 = type$$25.toLowerCase();
  var v281 = v539 == "transl_table=9";
  if (v281) {
    var v1269 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1252 = v1269 + "/ga[tcuy]/=D,";
    var v1235 = v1252 + "/ga[agr]/=E,";
    var v1217 = v1235 + "/[tu][tu][tcuy]/=F,";
    var v1198 = v1217 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1177 = v1198 + "/ca[tcuy]/=H,";
    var v1156 = v1177 + "/a[tu][atcuwmhy]/=I,";
    var v1135 = v1156 + "/aag/=K,";
    var v1110 = v1135 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1085 = v1110 + "/a[tu]g/=M,";
    var v1056 = v1085 + "/aa[atcuwmhy]/=N,";
    var v1024 = v1056 + "/cc[acgturyswkmbdhvn]/=P,";
    var v970 = v1024 + "/ca[agr]/=Q,";
    var v916 = v970 + "/cg[acgturyswkmbdhvn]/=R,";
    var v853 = v916 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v776 = v853 + "/ac[acgturyswkmbdhvn]/=T,";
    var v675 = v776 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v540 = v675 + "/[tu]g[agr]/=W,";
    var v280 = v540 + "/[tu]a[ctuy]/=Y,";
    return v280 + "/[tu]a[agr]/=*";
  }
  var v541 = type$$25.toLowerCase();
  var v283 = v541 == "transl_table=10";
  if (v283) {
    var v1270 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[atcuwmhy]/=C,";
    var v1253 = v1270 + "/ga[tcuy]/=D,";
    var v1236 = v1253 + "/ga[agr]/=E,";
    var v1218 = v1236 + "/[tu][tu][tcuy]/=F,";
    var v1199 = v1218 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1178 = v1199 + "/ca[tcuy]/=H,";
    var v1157 = v1178 + "/a[tu][atcuwmhy]/=I,";
    var v1136 = v1157 + "/aa[agr]/=K,";
    var v1111 = v1136 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1086 = v1111 + "/a[tu]g/=M,";
    var v1057 = v1086 + "/aa[tucy]/=N,";
    var v1025 = v1057 + "/cc[acgturyswkmbdhvn]/=P,";
    var v971 = v1025 + "/ca[agr]/=Q,";
    var v917 = v971 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v854 = v917 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v777 = v854 + "/ac[acgturyswkmbdhvn]/=T,";
    var v676 = v777 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v542 = v676 + "/[tu]gg/=W,";
    var v282 = v542 + "/[tu]a[ctuy]/=Y,";
    return v282 + "/[tu]a[agr]/=*";
  }
  var v543 = type$$25.toLowerCase();
  var v285 = v543 == "transl_table=11";
  if (v285) {
    var v1271 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1254 = v1271 + "/ga[tcuy]/=D,";
    var v1237 = v1254 + "/ga[agr]/=E,";
    var v1219 = v1237 + "/[tu][tu][tcuy]/=F,";
    var v1200 = v1219 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1179 = v1200 + "/ca[tcuy]/=H,";
    var v1158 = v1179 + "/a[tu][atcuwmhy]/=I,";
    var v1137 = v1158 + "/aa[agr]/=K,";
    var v1112 = v1137 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1087 = v1112 + "/a[tu]g/=M,";
    var v1058 = v1087 + "/aa[tucy]/=N,";
    var v1026 = v1058 + "/cc[acgturyswkmbdhvn]/=P,";
    var v972 = v1026 + "/ca[agr]/=Q,";
    var v918 = v972 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v855 = v918 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v778 = v855 + "/ac[acgturyswkmbdhvn]/=T,";
    var v677 = v778 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v544 = v677 + "/[tu]gg/=W,";
    var v284 = v544 + "/[tu]a[ctuy]/=Y,";
    return v284 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*";
  }
  var v545 = type$$25.toLowerCase();
  var v287 = v545 == "transl_table=12";
  if (v287) {
    var v1272 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1255 = v1272 + "/ga[tcuy]/=D,";
    var v1238 = v1255 + "/ga[agr]/=E,";
    var v1220 = v1238 + "/[tu][tu][tcuy]/=F,";
    var v1201 = v1220 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1180 = v1201 + "/ca[tcuy]/=H,";
    var v1159 = v1180 + "/a[tu][atcuwmhy]/=I,";
    var v1138 = v1159 + "/aa[agr]/=K,";
    var v1113 = v1138 + "/c[tu][atcuwmhy]|[tu][tu][agr]|[ctuy][tu]a/=L,";
    var v1088 = v1113 + "/a[tu]g/=M,";
    var v1059 = v1088 + "/aa[tucy]/=N,";
    var v1027 = v1059 + "/cc[acgturyswkmbdhvn]/=P,";
    var v973 = v1027 + "/ca[agr]/=Q,";
    var v919 = v973 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v856 = v919 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]|c[tu]g/=S,";
    var v779 = v856 + "/ac[acgturyswkmbdhvn]/=T,";
    var v678 = v779 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v546 = v678 + "/[tu]gg/=W,";
    var v286 = v546 + "/[tu]a[ctuy]/=Y,";
    return v286 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*";
  }
  var v547 = type$$25.toLowerCase();
  var v289 = v547 == "transl_table=13";
  if (v289) {
    var v1273 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1256 = v1273 + "/ga[tcuy]/=D,";
    var v1239 = v1256 + "/ga[agr]/=E,";
    var v1221 = v1239 + "/[tu][tu][tcuy]/=F,";
    var v1202 = v1221 + "/gg[acgturyswkmbdhvn]|ag[agr]|[agr]g[agr]/=G,";
    var v1181 = v1202 + "/ca[tcuy]/=H,";
    var v1160 = v1181 + "/a[tu][tcuy]/=I,";
    var v1139 = v1160 + "/aa[agr]/=K,";
    var v1114 = v1139 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1089 = v1114 + "/a[tu][agr]/=M,";
    var v1060 = v1089 + "/aa[tucy]/=N,";
    var v1028 = v1060 + "/cc[acgturyswkmbdhvn]/=P,";
    var v974 = v1028 + "/ca[agr]/=Q,";
    var v920 = v974 + "/cg[acgturyswkmbdhvn]/=R,";
    var v857 = v920 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v780 = v857 + "/ac[acgturyswkmbdhvn]/=T,";
    var v679 = v780 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v548 = v679 + "/[tu]g[agr]/=W,";
    var v288 = v548 + "/[tu]a[ctuy]/=Y,";
    return v288 + "/[tu]a[agr]/=*";
  }
  var v549 = type$$25.toLowerCase();
  var v291 = v549 == "transl_table=14";
  if (v291) {
    var v1274 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1257 = v1274 + "/ga[tcuy]/=D,";
    var v1240 = v1257 + "/ga[agr]/=E,";
    var v1222 = v1240 + "/[tu][tu][tcuy]/=F,";
    var v1203 = v1222 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1182 = v1203 + "/ca[tcuy]/=H,";
    var v1161 = v1182 + "/a[tu][atcuwmhy]/=I,";
    var v1140 = v1161 + "/aag/=K,";
    var v1115 = v1140 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1090 = v1115 + "/a[tu]g/=M,";
    var v1061 = v1090 + "/aa[atcuwmhy]/=N,";
    var v1029 = v1061 + "/cc[acgturyswkmbdhvn]/=P,";
    var v975 = v1029 + "/ca[agr]/=Q,";
    var v921 = v975 + "/cg[acgturyswkmbdhvn]/=R,";
    var v858 = v921 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v781 = v858 + "/ac[acgturyswkmbdhvn]/=T,";
    var v680 = v781 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v550 = v680 + "/[tu]g[agr]/=W,";
    var v290 = v550 + "/[tu]a[atcuwmhy]/=Y,";
    return v290 + "/[tu]ag/=*";
  }
  var v551 = type$$25.toLowerCase();
  var v293 = v551 == "transl_table=15";
  if (v293) {
    var v1275 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1258 = v1275 + "/ga[tcuy]/=D,";
    var v1241 = v1258 + "/ga[agr]/=E,";
    var v1223 = v1241 + "/[tu][tu][tcuy]/=F,";
    var v1204 = v1223 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1183 = v1204 + "/ca[tcuy]/=H,";
    var v1162 = v1183 + "/a[tu][atcuwmhy]/=I,";
    var v1141 = v1162 + "/aa[agr]/=K,";
    var v1116 = v1141 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1091 = v1116 + "/a[tu]g/=M,";
    var v1062 = v1091 + "/aa[tucy]/=N,";
    var v1030 = v1062 + "/cc[acgturyswkmbdhvn]/=P,";
    var v976 = v1030 + "/ca[agr]|[tu]ag|[tcuy]ag/=Q,";
    var v922 = v976 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v859 = v922 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v782 = v859 + "/ac[acgturyswkmbdhvn]/=T,";
    var v681 = v782 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v552 = v681 + "/[tu]gg/=W,";
    var v292 = v552 + "/[tu]a[ctuy]/=Y,";
    return v292 + "/[tu][agr]a/=*";
  }
  var v553 = type$$25.toLowerCase();
  var v295 = v553 == "transl_table=16";
  if (v295) {
    var v1276 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1259 = v1276 + "/ga[tcuy]/=D,";
    var v1242 = v1259 + "/ga[agr]/=E,";
    var v1224 = v1242 + "/[tu][tu][tcuy]/=F,";
    var v1205 = v1224 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1184 = v1205 + "/ca[tcuy]/=H,";
    var v1163 = v1184 + "/a[tu][atcuwmhy]/=I,";
    var v1142 = v1163 + "/aa[agr]/=K,";
    var v1117 = v1142 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]|[tu]ag|[tu][atuw]g/=L,";
    var v1092 = v1117 + "/a[tu]g/=M,";
    var v1063 = v1092 + "/aa[tucy]/=N,";
    var v1031 = v1063 + "/cc[acgturyswkmbdhvn]/=P,";
    var v977 = v1031 + "/ca[agr]/=Q,";
    var v923 = v977 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v860 = v923 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v783 = v860 + "/ac[acgturyswkmbdhvn]/=T,";
    var v682 = v783 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v554 = v682 + "/[tu]gg/=W,";
    var v294 = v554 + "/[tu]a[ctuy]/=Y,";
    return v294 + "/[tu][agr]a/=*";
  }
  var v555 = type$$25.toLowerCase();
  var v297 = v555 == "transl_table=21";
  if (v297) {
    var v1277 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1260 = v1277 + "/ga[tcuy]/=D,";
    var v1243 = v1260 + "/ga[agr]/=E,";
    var v1225 = v1243 + "/[tu][tu][tcuy]/=F,";
    var v1206 = v1225 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1185 = v1206 + "/ca[tcuy]/=H,";
    var v1164 = v1185 + "/a[tu][tcuy]/=I,";
    var v1143 = v1164 + "/aag/=K,";
    var v1118 = v1143 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1093 = v1118 + "/a[tu][agr]/=M,";
    var v1064 = v1093 + "/aa[atcuwmhy]/=N,";
    var v1032 = v1064 + "/cc[acgturyswkmbdhvn]/=P,";
    var v978 = v1032 + "/ca[agr]/=Q,";
    var v924 = v978 + "/cg[acgturyswkmbdhvn]/=R,";
    var v861 = v924 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v784 = v861 + "/ac[acgturyswkmbdhvn]/=T,";
    var v683 = v784 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v556 = v683 + "/[tu]g[agr]/=W,";
    var v296 = v556 + "/[tu]a[ctuy]/=Y,";
    return v296 + "/[tu]a[agr]/=*";
  }
  var v557 = type$$25.toLowerCase();
  var v299 = v557 == "transl_table=22";
  if (v299) {
    var v1278 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1261 = v1278 + "/ga[tcuy]/=D,";
    var v1244 = v1261 + "/ga[agr]/=E,";
    var v1226 = v1244 + "/[tu][tu][tcuy]/=F,";
    var v1207 = v1226 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1186 = v1207 + "/ca[tcuy]/=H,";
    var v1165 = v1186 + "/a[tu][atcuwmhy]/=I,";
    var v1144 = v1165 + "/aa[agr]/=K,";
    var v1119 = v1144 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]|[tu]ag|[tu][atuw]g/=L,";
    var v1094 = v1119 + "/a[tu]g/=M,";
    var v1065 = v1094 + "/aa[tucy]/=N,";
    var v1033 = v1065 + "/cc[acgturyswkmbdhvn]/=P,";
    var v979 = v1033 + "/ca[agr]/=Q,";
    var v925 = v979 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v862 = v925 + "/[tu]c[cgtyskb]|ag[ct]/=S,";
    var v785 = v862 + "/ac[acgturyswkmbdhvn]/=T,";
    var v684 = v785 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v558 = v684 + "/[tu]gg/=W,";
    var v298 = v558 + "/[tu]a[ctuy]/=Y,";
    return v298 + "/[tu][agcrsmv]a/=*";
  }
  var v559 = type$$25.toLowerCase();
  var v301 = v559 == "transl_table=23";
  if (v301) {
    var v1279 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1262 = v1279 + "/ga[tcuy]/=D,";
    var v1245 = v1262 + "/ga[agr]/=E,";
    var v1227 = v1245 + "/[tu][tu][tcuy]/=F,";
    var v1208 = v1227 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1187 = v1208 + "/ca[tcuy]/=H,";
    var v1166 = v1187 + "/a[tu][atcuwmhy]/=I,";
    var v1145 = v1166 + "/aa[agr]/=K,";
    var v1120 = v1145 + "/c[tu][acgturyswkmbdhvn]|[ctuy][tu]g/=L,";
    var v1095 = v1120 + "/a[tu]g/=M,";
    var v1066 = v1095 + "/aa[tucy]/=N,";
    var v1034 = v1066 + "/cc[acgturyswkmbdhvn]/=P,";
    var v980 = v1034 + "/ca[agr]/=Q,";
    var v926 = v980 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v863 = v926 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v786 = v863 + "/ac[acgturyswkmbdhvn]/=T,";
    var v685 = v786 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v560 = v685 + "/[tu]gg/=W,";
    var v300 = v560 + "/[tu]a[ctuy]/=Y,";
    return v300 + "/[tu]a[agr]|[tu]ga|[tu][agtrwkd]a/=*";
  }
  return true;
}
function orfFind(theDocument) {
  var newDna = "";
  var title$$9 = "";
  var maxInput$$3 = 1E5;
  var v561 = testScript();
  var v302 = v561 == false;
  if (v302) {
    return false;
  }
  var v981 = theDocument.forms;
  var v927 = v981[0];
  var v864 = v927.elements;
  var v787 = v864[8];
  var v686 = v787.options;
  var v982 = theDocument.forms;
  var v928 = v982[0];
  var v865 = v928.elements;
  var v788 = v865[8];
  var v687 = v788.selectedIndex;
  var v562 = v686[v687];
  var v303 = v562.value;
  var geneticCode = getGeneticCodeString(v303);
  geneticCode = geneticCode.split(/,/);
  var v866 = theDocument.forms;
  var v789 = v866[0];
  var v688 = v789.elements;
  var v563 = v688[7];
  var v304 = v563.value;
  var enteredNumber = v304.replace(/[^\d]/g, "");
  var v1067 = theDocument.forms;
  var v1035 = v1067[0];
  var v983 = v1035.elements;
  var v929 = v983[0];
  var v867 = checkFormElement(v929);
  var v790 = v867 == false;
  var v869 = !v790;
  if (v869) {
    var v1068 = theDocument.forms;
    var v1036 = v1068[0];
    var v984 = v1036.elements;
    var v930 = v984[7];
    var v868 = checkFormElement(v930);
    v790 = v868 == false;
  }
  var v689 = v790;
  var v792 = !v689;
  if (v792) {
    var v791 = verifyDigits(enteredNumber);
    v689 = v791 == false;
  }
  var v564 = v689;
  var v691 = !v564;
  if (v691) {
    var v1037 = theDocument.forms;
    var v985 = v1037[0];
    var v931 = v985.elements;
    var v870 = v931[0];
    var v793 = v870.value;
    var v690 = checkSequenceLength(v793, maxInput$$3);
    v564 = v690 == false;
  }
  var v305 = v564;
  if (v305) {
    return false;
  }
  var v565 = checkGeneticCode(geneticCode);
  var v306 = v565 == false;
  if (v306) {
    return false;
  }
  var v871 = theDocument.forms;
  var v794 = v871[0];
  var v692 = v794.elements;
  var v566 = v692[0];
  var v307 = v566.value;
  newDna = getSequenceFromFasta(v307);
  var v872 = theDocument.forms;
  var v795 = v872[0];
  var v693 = v795.elements;
  var v567 = v693[0];
  var v308 = v567.value;
  title$$9 = getTitleFromFasta(v308);
  verifyDna(newDna);
  newDna = removeNonDna(newDna);
  openWindow("ORF Finder");
  var v309 = outputWindow.document;
  var v310 = getInfoFromTitleAndSequence(title$$9, newDna);
  v309.write(v310);
  openPre();
  var v1038 = theDocument.forms;
  var v986 = v1038[0];
  var v932 = v986.elements;
  var v873 = v932[5];
  var v796 = v873.options;
  var v1039 = theDocument.forms;
  var v987 = v1039[0];
  var v933 = v987.elements;
  var v874 = v933[5];
  var v797 = v874.selectedIndex;
  var v694 = v796[v797];
  var v568 = v694.value;
  var v320 = v568 == "all";
  if (v320) {
    var v988 = theDocument.forms;
    var v934 = v988[0];
    var v875 = v934.elements;
    var v798 = v875[4];
    var v695 = v798.options;
    var v989 = theDocument.forms;
    var v935 = v989[0];
    var v876 = v935.elements;
    var v799 = v876[4];
    var v696 = v799.selectedIndex;
    var v569 = v695[v696];
    var v311 = v569.value;
    var v990 = theDocument.forms;
    var v936 = v990[0];
    var v877 = v936.elements;
    var v800 = v877[6];
    var v697 = v800.options;
    var v991 = theDocument.forms;
    var v937 = v991[0];
    var v878 = v937.elements;
    var v801 = v878[6];
    var v698 = v801.selectedIndex;
    var v570 = v697[v698];
    var v312 = v570.value;
    writeOrfs(newDna, geneticCode, v311, 0, v312, enteredNumber);
    var v992 = theDocument.forms;
    var v938 = v992[0];
    var v879 = v938.elements;
    var v802 = v879[4];
    var v699 = v802.options;
    var v993 = theDocument.forms;
    var v939 = v993[0];
    var v880 = v939.elements;
    var v803 = v880[4];
    var v700 = v803.selectedIndex;
    var v571 = v699[v700];
    var v313 = v571.value;
    var v994 = theDocument.forms;
    var v940 = v994[0];
    var v881 = v940.elements;
    var v804 = v881[6];
    var v701 = v804.options;
    var v995 = theDocument.forms;
    var v941 = v995[0];
    var v882 = v941.elements;
    var v805 = v882[6];
    var v702 = v805.selectedIndex;
    var v572 = v701[v702];
    var v314 = v572.value;
    writeOrfs(newDna, geneticCode, v313, 1, v314, enteredNumber);
    var v996 = theDocument.forms;
    var v942 = v996[0];
    var v883 = v942.elements;
    var v806 = v883[4];
    var v703 = v806.options;
    var v997 = theDocument.forms;
    var v943 = v997[0];
    var v884 = v943.elements;
    var v807 = v884[4];
    var v704 = v807.selectedIndex;
    var v573 = v703[v704];
    var v315 = v573.value;
    var v998 = theDocument.forms;
    var v944 = v998[0];
    var v885 = v944.elements;
    var v808 = v885[6];
    var v705 = v808.options;
    var v999 = theDocument.forms;
    var v945 = v999[0];
    var v886 = v945.elements;
    var v809 = v886[6];
    var v706 = v809.selectedIndex;
    var v574 = v705[v706];
    var v316 = v574.value;
    writeOrfs(newDna, geneticCode, v315, 2, v316, enteredNumber);
  } else {
    var v1000 = theDocument.forms;
    var v946 = v1000[0];
    var v887 = v946.elements;
    var v810 = v887[4];
    var v707 = v810.options;
    var v1001 = theDocument.forms;
    var v947 = v1001[0];
    var v888 = v947.elements;
    var v811 = v888[4];
    var v708 = v811.selectedIndex;
    var v575 = v707[v708];
    var v317 = v575.value;
    var v1002 = theDocument.forms;
    var v948 = v1002[0];
    var v889 = v948.elements;
    var v812 = v889[5];
    var v709 = v812.options;
    var v1003 = theDocument.forms;
    var v949 = v1003[0];
    var v890 = v949.elements;
    var v813 = v890[5];
    var v710 = v813.selectedIndex;
    var v576 = v709[v710];
    var v318 = v576.value;
    var v1004 = theDocument.forms;
    var v950 = v1004[0];
    var v891 = v950.elements;
    var v814 = v891[6];
    var v711 = v814.options;
    var v1005 = theDocument.forms;
    var v951 = v1005[0];
    var v892 = v951.elements;
    var v815 = v892[6];
    var v712 = v815.selectedIndex;
    var v577 = v711[v712];
    var v319 = v577.value;
    writeOrfs(newDna, geneticCode, v317, v318, v319, enteredNumber);
  }
  closePre();
  closeWindow();
  return true;
}
function writeOrfs(dnaSequence$$3, geneticCode$$1, startCodons, startPos, strand, theLength) {
  function v2(str$$8, p1$$2, offset$$10, s$$4) {
    var v321 = " " + p1$$2;
    return v321 + " ";
  }
  var i$$11 = 0;
  var k$$3 = 0;
  var codon$$1 = "";
  var foundStart = false;
  var geneticCodeMatchExp$$2 = getGeneticCodeMatchExp(geneticCode$$1);
  var geneticCodeMatchResult$$2 = getGeneticCodeMatchResult(geneticCode$$1);
  var proteinLength = 0;
  var foundStop = false;
  var geneticCodeMatchExpStop;
  var j$$10 = 0;
  var v578 = geneticCodeMatchExp$$2.length;
  var v323 = j$$10 < v578;
  for (;v323;) {
    var v579 = geneticCodeMatchResult$$2[j$$10];
    var v322 = v579 == "*";
    if (v322) {
      geneticCodeMatchExpStop = geneticCodeMatchExp$$2[j$$10];
      break;
    }
    j$$10++;
    var v580 = geneticCodeMatchExp$$2.length;
    v323 = j$$10 < v580;
  }
  var startRe = new RegExp(startCodons, "i");
  var sequenceToTranslate;
  startPos = parseInt(startPos);
  var rf = startPos + 1;
  theLength = parseInt(theLength);
  var v325 = strand == "reverse";
  if (v325) {
    var v324 = complement(dnaSequence$$3);
    dnaSequence$$3 = reverse(v324);
  }
  var v713 = dnaSequence$$3.length;
  var v581 = v713 - 3;
  var v344 = i$$11 <= v581;
  for (;v344;) {
    i$$11 = startPos;
    var v714 = dnaSequence$$3.length;
    var v582 = v714 - 3;
    var v343 = i$$11 <= v582;
    for (;v343;) {
      var v326 = i$$11 + 3;
      codon$$1 = dnaSequence$$3.substring(i$$11, v326);
      var v715 = startCodons != "any";
      if (v715) {
        v715 = foundStart == false;
      }
      var v583 = v715;
      if (v583) {
        var v716 = codon$$1.search(startRe);
        v583 = v716 == -1;
      }
      var v327 = v583;
      if (v327) {
        break;
      }
      foundStart = true;
      var v584 = codon$$1.search(geneticCodeMatchExpStop);
      var v328 = v584 != -1;
      if (v328) {
        foundStop = true;
      }
      proteinLength++;
      var v585 = foundStop;
      if (v585) {
        v585 = proteinLength < theLength;
      }
      var v329 = v585;
      if (v329) {
        break;
      }
      var v717 = foundStop;
      if (v717) {
        v717 = proteinLength >= theLength;
      }
      var v586 = v717;
      var v719 = !v586;
      if (v719) {
        var v893 = dnaSequence$$3.length;
        var v816 = v893 - 5;
        var v718 = i$$11 >= v816;
        if (v718) {
          v718 = proteinLength >= theLength;
        }
        v586 = v718;
      }
      var v342 = v586;
      if (v342) {
        var v330 = i$$11 + 3;
        sequenceToTranslate = dnaSequence$$3.substring(startPos, v330);
        var v331 = outputWindow.document;
        var v1121 = k$$3 + 1;
        var v1096 = "&gt;ORF number " + v1121;
        var v1069 = v1096 + " in reading frame ";
        var v1040 = v1069 + rf;
        var v1006 = v1040 + " on the ";
        var v952 = v1006 + strand;
        var v894 = v952 + " strand extends from base ";
        var v895 = startPos + 1;
        var v817 = v894 + v895;
        var v720 = v817 + " to base ";
        var v721 = i$$11 + 3;
        var v587 = v720 + v721;
        var v332 = v587 + ".\n";
        v331.write(v332);
        var v333 = outputWindow.document;
        var v588 = addReturns(sequenceToTranslate);
        var v334 = v588 + "\n\n";
        v333.write(v334);
        var v335 = outputWindow.document;
        var v1007 = k$$3 + 1;
        var v953 = "&gt;Translation of ORF number " + v1007;
        var v896 = v953 + " in reading frame ";
        var v818 = v896 + rf;
        var v722 = v818 + " on the ";
        var v589 = v722 + strand;
        var v336 = v589 + " strand.\n";
        v335.write(v336);
        sequenceToTranslate = sequenceToTranslate.replace(/(...)/g, v2);
        var m = 0;
        var v590 = geneticCodeMatchExp$$2.length;
        var v339 = m < v590;
        for (;v339;) {
          var v337 = geneticCodeMatchExp$$2[m];
          var v338 = geneticCodeMatchResult$$2[m];
          sequenceToTranslate = sequenceToTranslate.replace(v337, v338);
          m++;
          var v591 = geneticCodeMatchExp$$2.length;
          v339 = m < v591;
        }
        sequenceToTranslate = sequenceToTranslate.replace(/\S{3}/g, "X");
        sequenceToTranslate = sequenceToTranslate.replace(/\s/g, "");
        sequenceToTranslate = sequenceToTranslate.replace(/[a-z]/g, "");
        var v340 = outputWindow.document;
        var v592 = addReturns(sequenceToTranslate);
        var v341 = v592 + "\n\n";
        v340.write(v341);
        k$$3 = k$$3 + 1;
        break;
      }
      i$$11 = i$$11 + 3;
      var v723 = dnaSequence$$3.length;
      var v593 = v723 - 3;
      v343 = i$$11 <= v593;
    }
    startPos = i$$11 + 3;
    i$$11 = startPos;
    foundStart = false;
    foundStop = false;
    proteinLength = 0;
    var v724 = dnaSequence$$3.length;
    var v594 = v724 - 3;
    v344 = i$$11 <= v594;
  }
  var v347 = k$$3 == 0;
  if (v347) {
    var v345 = outputWindow.document;
    var v595 = "No ORFs were found in reading frame " + rf;
    var v346 = v595 + ".\n\n";
    v345.write(v346);
  }
  return true;
}
document.onload = v3;
var v348 = document.getElementById("submitbtn");
v348.onclick = v4;
var v349 = document.getElementById("clearbtn");
v349.onclick = v5

}
