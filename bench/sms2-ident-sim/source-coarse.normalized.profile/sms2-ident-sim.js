
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
function v4() {
  var v615 = document.forms;
  var v524 = v615[0];
  var v310 = v524.elements;
  var v5 = v310[0];
  v5.value = " ";
  var v616 = document.forms;
  var v525 = v616[0];
  var v311 = v525.elements;
  var v6 = v311[4];
  v6.value = " ";
  return;
}
function v3() {
  try {
    identSim();
  } catch (e$$5) {
    var v7 = "The following error was encountered: " + e$$5;
    alert(v7);
  }
  return;
}
function v2() {
  var v312 = document.main_form;
  var v8 = v312.main_submit;
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
  var v313 = arrayOfSequences.length;
  var v10 = v313 < 2;
  if (v10) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v314 = arrayOfTitles.length;
  var v12 = i$$1 < v314;
  for (;v12;) {
    var v678 = arrayOfTitles[i$$1];
    var v617 = v678.search(/\S/);
    var v526 = v617 == -1;
    var v619 = !v526;
    if (v619) {
      var v679 = arrayOfSequences[i$$1];
      var v618 = v679.search(/\S/);
      v526 = v618 == -1;
    }
    var v315 = v526;
    var v528 = !v315;
    if (v528) {
      var v620 = arrayOfSequences[i$$1];
      var v527 = v620.length;
      v315 = v527 != lengthOfAlign;
    }
    var v11 = v315;
    if (v11) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v316 = arrayOfTitles.length;
    v12 = i$$1 < v316;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v719 = codonTable.search(/AmAcid/);
  var v680 = v719 == -1;
  var v721 = !v680;
  if (v721) {
    var v720 = codonTable.search(/Codon/);
    v680 = v720 == -1;
  }
  var v621 = v680;
  var v682 = !v621;
  if (v682) {
    var v681 = codonTable.search(/Number/);
    v621 = v681 == -1;
  }
  var v529 = v621;
  var v623 = !v529;
  if (v623) {
    var v622 = codonTable.search(/\/1000/);
    v529 = v622 == -1;
  }
  var v317 = v529;
  var v531 = !v317;
  if (v531) {
    var v530 = codonTable.search(/Fraction\s*\.\./);
    v317 = v530 == -1;
  }
  var v13 = v317;
  if (v13) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v532 = formElement.value;
  var v318 = v532.search(/\S/);
  var v14 = v318 == -1;
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
  var v319 = arrayOfPatterns.length;
  var v17 = z$$2 < v319;
  for (;v17;) {
    var v533 = arrayOfPatterns[z$$2];
    var v320 = v533.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v15 = v320 == -1;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v534 = arrayOfPatterns[z$$2];
    var v321 = moreExpressionCheck(v534);
    var v16 = v321 == false;
    if (v16) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v322 = arrayOfPatterns.length;
    v17 = z$$2 < v322;
  }
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v18);
  var v19 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v19);
  var j = 0;
  var v323 = arrayOfPatterns.length;
  var v23 = j < v323;
  for (;v23;) {
    var v535 = arrayOfPatterns[j];
    var v324 = v535.match(/\/.+\//);
    var v20 = v324 + "gi";
    var v808 = eval(v20);
    geneticCodeMatchExp[j] = v808;
    var v325 = arrayOfPatterns[j];
    var v21 = v325.match(/=[a-zA-Z\*]/);
    var v809 = v21.toString();
    geneticCodeMatchResult[j] = v809;
    var v22 = geneticCodeMatchResult[j];
    var v810 = v22.replace(/=/g, "");
    geneticCodeMatchResult[j] = v810;
    j++;
    var v326 = arrayOfPatterns.length;
    v23 = j < v326;
  }
  var i$$2 = 0;
  var v536 = testSequence.length;
  var v327 = v536 - 3;
  var v30 = i$$2 <= v327;
  for (;v30;) {
    var v24 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v24);
    j = 0;
    var v328 = geneticCodeMatchExp.length;
    var v28 = j < v328;
    for (;v28;) {
      var v537 = geneticCodeMatchExp[j];
      var v329 = codon.search(v537);
      var v27 = v329 != -1;
      if (v27) {
        var v26 = oneMatch == true;
        if (v26) {
          var v330 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v25 = v330 + ".";
          alert(v25);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v331 = geneticCodeMatchExp.length;
      v28 = j < v331;
    }
    var v29 = oneMatch == false;
    if (v29) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v538 = testSequence.length;
    var v332 = v538 - 3;
    v30 = i$$2 <= v332;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v333 = arrayOfPatterns$$1.length;
  var v32 = z$$3 < v333;
  for (;v32;) {
    var v539 = arrayOfPatterns$$1[z$$3];
    var v334 = v539.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v31 = v334 != -1;
    if (v31) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v335 = arrayOfPatterns$$1.length;
    v32 = z$$3 < v335;
  }
  var i$$3 = 0;
  var v336 = arrayOfPatterns$$1.length;
  var v36 = i$$3 < v336;
  for (;v36;) {
    var v540 = arrayOfPatterns$$1[i$$3];
    var v337 = "[" + v540;
    var v33 = v337 + "]";
    var re = new RegExp(v33, "gi");
    var j$$1 = i$$3 + 1;
    var v338 = arrayOfPatterns$$1.length;
    var v35 = j$$1 < v338;
    for (;v35;) {
      var v541 = arrayOfPatterns$$1[j$$1];
      var v339 = v541.search(re);
      var v34 = v339 != -1;
      if (v34) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v340 = arrayOfPatterns$$1.length;
      v35 = j$$1 < v340;
    }
    i$$3++;
    var v341 = arrayOfPatterns$$1.length;
    v36 = i$$3 < v341;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v342 = arrayOfPatterns$$2.length;
  var v39 = z$$4 < v342;
  for (;v39;) {
    var v542 = arrayOfPatterns$$2[z$$4];
    var v343 = v542.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v37 = v343 == -1;
    if (v37) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v543 = arrayOfPatterns$$2[z$$4];
    var v344 = moreExpressionCheck(v543);
    var v38 = v344 == false;
    if (v38) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v345 = arrayOfPatterns$$2.length;
    v39 = z$$4 < v345;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v624 = getSequenceFromFasta(text$$7);
  var v544 = v624.replace(/[^A-Za-z]/g, "");
  var v346 = v544.length;
  var v41 = v346 > maxInput;
  if (v41) {
    var v347 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v40 = v347 + " characters.";
    alert(v40);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v348 = text$$8.length;
  var v43 = v348 > maxInput$$1;
  if (v43) {
    var v349 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v42 = v349 + " characters.";
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
  var v350 = alignArray.length;
  var v50 = v350 < 3;
  if (v50) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v351 = alignArray.length;
  var v52 = i$$4 < v351;
  for (;v52;) {
    var v545 = alignArray[i$$4];
    var v352 = v545.search(/[^\s]+\s/);
    var v51 = v352 == -1;
    if (v51) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v353 = alignArray.length;
    v52 = i$$4 < v353;
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
  var v354 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v55 = v354 != -1;
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
  var v355 = sequence$$2.length;
  var v56 = "&gt;results for " + v355;
  var stringToReturn = v56 + " residue sequence ";
  var v356 = fastaSequenceTitle.search(/[^\s]/);
  var v58 = v356 != -1;
  if (v58) {
    var v357 = stringToReturn + '"';
    var v57 = v357 + fastaSequenceTitle;
    stringToReturn = v57 + '"';
  }
  var v358 = stringToReturn + ' starting "';
  var v359 = sequence$$2.substring(0, 10);
  var v59 = v358 + v359;
  stringToReturn = v59 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v360 = sequenceOne.length;
  var v60 = "Search results for " + v360;
  var stringToReturn$$1 = v60 + " residue sequence ";
  var v361 = fastaSequenceTitleOne.search(/[^\s]/);
  var v62 = v361 != -1;
  if (v62) {
    var v362 = stringToReturn$$1 + '"';
    var v61 = v362 + fastaSequenceTitleOne;
    stringToReturn$$1 = v61 + '"';
  }
  var v363 = stringToReturn$$1 + ' starting "';
  var v364 = sequenceOne.substring(0, 10);
  var v63 = v363 + v364;
  stringToReturn$$1 = v63 + '"\n';
  var v365 = stringToReturn$$1 + "and ";
  var v366 = sequenceTwo.length;
  var v64 = v365 + v366;
  stringToReturn$$1 = v64 + " residue sequence ";
  var v367 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v66 = v367 != -1;
  if (v66) {
    var v368 = stringToReturn$$1 + '"';
    var v65 = v368 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v65 + '"';
  }
  var v369 = stringToReturn$$1 + ' starting "';
  var v370 = sequenceTwo.substring(0, 10);
  var v67 = v369 + v370;
  stringToReturn$$1 = v67 + '"';
  var v68 = '<div class="info">' + stringToReturn$$1;
  return v68 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v69 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v69);
  var j$$2 = 0;
  var v371 = arrayOfPatterns$$3.length;
  var v71 = j$$2 < v371;
  for (;v71;) {
    var v546 = arrayOfPatterns$$3[j$$2];
    var v372 = v546.match(/\/.+\//);
    var v70 = v372 + "gi";
    var v811 = eval(v70);
    geneticCodeMatchExp$$1[j$$2] = v811;
    j$$2++;
    var v373 = arrayOfPatterns$$3.length;
    v71 = j$$2 < v373;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v72 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v72);
  var j$$3 = 0;
  var v374 = arrayOfPatterns$$4.length;
  var v75 = j$$3 < v374;
  for (;v75;) {
    var v375 = arrayOfPatterns$$4[j$$3];
    var v73 = v375.match(/=[a-zA-Z\*]/);
    var v812 = v73.toString();
    geneticCodeMatchResult$$1[j$$3] = v812;
    var v74 = geneticCodeMatchResult$$1[j$$3];
    var v813 = v74.replace(/=/g, "");
    geneticCodeMatchResult$$1[j$$3] = v813;
    j$$3++;
    var v376 = arrayOfPatterns$$4.length;
    v75 = j$$3 < v376;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v377 = sequence$$3.length;
  var v76 = "Results for " + v377;
  var stringToReturn$$2 = v76 + " residue sequence ";
  var v378 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v78 = v378 != -1;
  if (v78) {
    var v379 = stringToReturn$$2 + '"';
    var v77 = v379 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v77 + '"';
  }
  var v380 = stringToReturn$$2 + ' starting "';
  var v381 = sequence$$3.substring(0, 10);
  var v79 = v380 + v381;
  stringToReturn$$2 = v79 + '"';
  var v80 = '<div class="info">' + stringToReturn$$2;
  return v80 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v547 = "Results for " + topology;
  var v382 = v547 + " ";
  var v383 = sequence$$4.length;
  var v81 = v382 + v383;
  var stringToReturn$$3 = v81 + " residue sequence ";
  var v384 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v83 = v384 != -1;
  if (v83) {
    var v385 = stringToReturn$$3 + '"';
    var v82 = v385 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v82 + '"';
  }
  var v386 = stringToReturn$$3 + ' starting "';
  var v387 = sequence$$4.substring(0, 10);
  var v84 = v386 + v387;
  stringToReturn$$3 = v84 + '"';
  var v85 = '<div class="info">' + stringToReturn$$3;
  return v85 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v388 = sequenceOne$$1.length;
  var v86 = "Alignment results for " + v388;
  var stringToReturn$$4 = v86 + " residue sequence ";
  var v389 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v88 = v389 != -1;
  if (v88) {
    var v390 = stringToReturn$$4 + '"';
    var v87 = v390 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v87 + '"';
  }
  var v391 = stringToReturn$$4 + ' starting "';
  var v392 = sequenceOne$$1.substring(0, 10);
  var v89 = v391 + v392;
  stringToReturn$$4 = v89 + '"\n';
  var v393 = stringToReturn$$4 + "and ";
  var v394 = sequenceTwo$$1.length;
  var v90 = v393 + v394;
  stringToReturn$$4 = v90 + " residue sequence ";
  var v395 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v92 = v395 != -1;
  if (v92) {
    var v396 = stringToReturn$$4 + '"';
    var v91 = v396 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v91 + '"';
  }
  var v397 = stringToReturn$$4 + ' starting "';
  var v398 = sequenceTwo$$1.substring(0, 10);
  var v93 = v397 + v398;
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
    var v399 = Math.random();
    var v400 = components.length;
    var v95 = v399 * v400;
    tempNum = Math.floor(v95);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4++;
    v96 = j$$4 < lengthOut;
  }
  return sequenceArray.join("");
}
function getSequenceFromFasta(sequenceRecord) {
  var v401 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v97 = v401 != -1;
  if (v97) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "");
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v402 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v99 = v402 != -1;
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
  var v786 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v779 = v786 != -1;
  var v788 = !v779;
  if (v788) {
    var v787 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    v779 = v787 != -1;
  }
  var v770 = v779;
  var v781 = !v770;
  if (v781) {
    var v780 = expressionToCheck.search(/\[\]/);
    v770 = v780 != -1;
  }
  var v761 = v770;
  var v772 = !v761;
  if (v772) {
    var v771 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
    v761 = v771 != -1;
  }
  var v750 = v761;
  var v763 = !v750;
  if (v763) {
    var v762 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
    v750 = v762 != -1;
  }
  var v738 = v750;
  var v752 = !v738;
  if (v752) {
    var v751 = expressionToCheck.search(/\|\|/);
    v738 = v751 != -1;
  }
  var v722 = v738;
  var v740 = !v722;
  if (v740) {
    var v739 = expressionToCheck.search(/\/\|/);
    v722 = v739 != -1;
  }
  var v683 = v722;
  var v724 = !v683;
  if (v724) {
    var v723 = expressionToCheck.search(/\|\//);
    v683 = v723 != -1;
  }
  var v625 = v683;
  var v685 = !v625;
  if (v685) {
    var v684 = expressionToCheck.search(/\[.\]/);
    v625 = v684 != -1;
  }
  var v548 = v625;
  var v627 = !v548;
  if (v627) {
    var v626 = expressionToCheck.search(/\</);
    v548 = v626 != -1;
  }
  var v403 = v548;
  var v550 = !v403;
  if (v550) {
    var v549 = expressionToCheck.search(/\>/);
    v403 = v549 != -1;
  }
  var v100 = v403;
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
function openWindow(title$$5) {
  _openWindow(title$$5);
  return;
}
function _openWindow(title$$6) {
  var isColor = true;
  outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  outputWindow.focus();
  var v105 = outputWindow.document;
  var v628 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v551 = v628 + "<head>\n";
  var v404 = v551 + "<title>Sequence Manipulation Suite</title>\n";
  var v106 = v404 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v105.write(v106);
  if (isColor) {
    var v107 = outputWindow.document;
    var v801 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v797 = v801 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v793 = v797 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v789 = v793 + "div.info {font-weight: bold}\n";
    var v782 = v789 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v773 = v782 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v764 = v773 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v753 = v764 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v741 = v753 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v725 = v741 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v686 = v725 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v629 = v686 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v552 = v629 + "td.many {color: #000000}\n";
    var v405 = v552 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v108 = v405 + "</style>\n";
    v107.write(v108);
  } else {
    var v109 = outputWindow.document;
    var v805 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v802 = v805 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v798 = v802 + "div.title {display: none}\n";
    var v794 = v798 + "div.info {font-weight: bold}\n";
    var v790 = v794 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v783 = v790 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v774 = v783 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v765 = v774 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v754 = v765 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v742 = v754 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v726 = v742 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v687 = v726 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v630 = v687 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v553 = v630 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v406 = v553 + "img {display: none}\n";
    var v110 = v406 + "</style>\n";
    v109.write(v110);
  }
  var v111 = outputWindow.document;
  var v631 = "</head>\n" + '<body class="main">\n';
  var v554 = v631 + '<div class="title">';
  var v407 = v554 + title$$6;
  var v112 = v407 + " results</div>\n";
  v111.write(v112);
  outputWindow.status = "Please Wait.";
  return;
}
function openWindowAlign() {
  var title$$7 = "Ident and Sim";
  _openWindowAlign(title$$7);
  return;
}
function _openWindowAlign(title$$8) {
  var isBackground = true;
  outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  outputWindow.focus();
  var v113 = outputWindow.document;
  var v632 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v555 = v632 + "<head>\n";
  var v408 = v555 + "<title>Sequence Manipulation Suite</title>\n";
  var v114 = v408 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v113.write(v114);
  if (isBackground) {
    var v115 = outputWindow.document;
    var v803 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v799 = v803 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v795 = v799 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v791 = v795 + "div.info {font-weight: bold}\n";
    var v784 = v791 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v775 = v784 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v766 = v775 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v755 = v766 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v743 = v755 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v727 = v743 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v688 = v727 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v633 = v688 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v556 = v633 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v409 = v556 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v116 = v409 + "</style>\n";
    v115.write(v116);
  } else {
    var v117 = outputWindow.document;
    var v807 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v806 = v807 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v804 = v806 + "div.title {display: none}\n";
    var v800 = v804 + "div.info {font-weight: bold}\n";
    var v796 = v800 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v792 = v796 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v785 = v792 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v776 = v785 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v767 = v776 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v756 = v767 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v744 = v756 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v728 = v744 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v689 = v728 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v634 = v689 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v557 = v634 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v410 = v557 + "img {display: none}\n";
    var v118 = v410 + "</style>\n";
    v117.write(v118);
  }
  var v119 = outputWindow.document;
  var v635 = "</head>\n" + '<body class="main">\n';
  var v558 = v635 + '<div class="title">';
  var v411 = v558 + title$$8;
  var v120 = v411 + " results</div>\n";
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
  var v412 = dnaSequence$$1.search(/./);
  var v121 = v412 != -1;
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
  var v413 = testArray[0];
  var v125 = v413 != testString;
  if (v125) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v414 = testString.search(re$$2);
  var v126 = v414 == -1;
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
  var v415 = testNum.toFixed(3);
  var v129 = v415 != 2489.824;
  if (v129) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v416 = testNum.toPrecision(5);
  var v130 = v416 != 2489.8;
  if (v130) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v417 = theNumber$$1.search(/\d/);
  var v131 = v417 == -1;
  if (v131) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v690 = emblFile.search(/ID/);
  var v636 = v690 == -1;
  var v692 = !v636;
  if (v692) {
    var v691 = emblFile.search(/AC/);
    v636 = v691 == -1;
  }
  var v559 = v636;
  var v638 = !v559;
  if (v638) {
    var v637 = emblFile.search(/DE/);
    v559 = v637 == -1;
  }
  var v418 = v559;
  var v561 = !v418;
  if (v561) {
    var v560 = emblFile.search(/SQ/);
    v418 = v560 == -1;
  }
  var v132 = v418;
  if (v132) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v419 = theNumber$$2.search(/\d/);
  var v133 = v419 == -1;
  if (v133) {
    alert("Please enter a number.");
    return false;
  }
  var v135 = theNumber$$2 > maxInput$$2;
  if (v135) {
    var v420 = "Please enter a number less than or equal to " + maxInput$$2;
    var v134 = v420 + ".";
    alert(v134);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v421 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v136 = v421 != -1;
  if (v136) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v422 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v137 = v422 != -1;
  if (v137) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v693 = genBankFile.search(/LOCUS/);
  var v639 = v693 == -1;
  var v695 = !v639;
  if (v695) {
    var v694 = genBankFile.search(/DEFINITION/);
    v639 = v694 == -1;
  }
  var v562 = v639;
  var v641 = !v562;
  if (v641) {
    var v640 = genBankFile.search(/ACCESSION/);
    v562 = v640 == -1;
  }
  var v423 = v562;
  var v564 = !v423;
  if (v564) {
    var v563 = genBankFile.search(/ORIGIN/);
    v423 = v563 == -1;
  }
  var v138 = v423;
  if (v138) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v696 = genBankFile$$1.search(/LOCUS/);
  var v642 = v696 == -1;
  var v698 = !v642;
  if (v698) {
    var v697 = genBankFile$$1.search(/DEFINITION/);
    v642 = v697 == -1;
  }
  var v565 = v642;
  var v644 = !v565;
  if (v644) {
    var v643 = genBankFile$$1.search(/ACCESSION/);
    v565 = v643 == -1;
  }
  var v424 = v565;
  var v567 = !v424;
  if (v567) {
    var v566 = genBankFile$$1.search(/ORIGIN/);
    v424 = v566 == -1;
  }
  var v139 = v424;
  if (v139) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v425 = genBankFile$$1.search(/FEATURES {13}/);
  var v140 = v425 == -1;
  if (v140) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v699 = emblFile$$1.search(/ID/);
  var v645 = v699 == -1;
  var v701 = !v645;
  if (v701) {
    var v700 = emblFile$$1.search(/AC/);
    v645 = v700 == -1;
  }
  var v568 = v645;
  var v647 = !v568;
  if (v647) {
    var v646 = emblFile$$1.search(/DE/);
    v568 = v646 == -1;
  }
  var v426 = v568;
  var v570 = !v426;
  if (v570) {
    var v569 = emblFile$$1.search(/SQ/);
    v426 = v569 == -1;
  }
  var v141 = v426;
  if (v141) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v427 = emblFile$$1.search(/^FT/m);
  var v142 = v427 == -1;
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
    var v428 = basePerLine / groupSize;
    var v146 = j$$6 <= v428;
    for (;v146;) {
      var v145 = k < groupSize;
      for (;v145;) {
        var v429 = k + i$$5;
        var v144 = text$$10.charAt(v429);
        lineOfText = lineOfText + v144;
        k = k + 1;
        v145 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v430 = basePerLine / groupSize;
      v146 = j$$6 <= v430;
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
    var v431 = adjustment < 0;
    if (v431) {
      v431 = adjusted >= 0;
    }
    var v150 = v431;
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
    var v432 = basePerLine$$2 / groupSize$$2;
    var v157 = j$$7 <= v432;
    for (;v157;) {
      var v153 = k$$1 < groupSize$$2;
      for (;v153;) {
        var v433 = i$$6 + k$$1;
        var v151 = v433 >= stopBase$$2;
        if (v151) {
          break;
        }
        var v434 = k$$1 + i$$6;
        var v152 = text$$12.charAt(v434);
        lineOfText$$1 = lineOfText$$1 + v152;
        k$$1 = k$$1 + 1;
        v153 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v155 = numberPosition$$1 == "above";
      if (v155) {
        var v435 = adjustNumbering(i$$6, numberingAdjustment);
        var v154 = rightNum(v435, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v154;
      }
      var v156 = i$$6 >= stopBase$$2;
      if (v156) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v436 = basePerLine$$2 / groupSize$$2;
      v157 = j$$7 <= v436;
    }
    var v180 = numberPosition$$1 == "left";
    if (v180) {
      var v158 = outputWindow.document;
      var v648 = adjustNumbering(lineNum, numberingAdjustment);
      var v571 = rightNum(v648, "", 8, tabIn$$3);
      var v437 = v571 + lineOfText$$1;
      var v159 = v437 + "\n";
      v158.write(v159);
      var v163 = strands$$1 == "two";
      if (v163) {
        var v160 = outputWindow.document;
        var v649 = adjustNumbering(lineNum, numberingAdjustment);
        var v572 = rightNum(v649, "", 8, tabIn$$3);
        var v573 = complement(lineOfText$$1);
        var v438 = v572 + v573;
        var v161 = v438 + "\n";
        v160.write(v161);
        var v162 = outputWindow.document;
        v162.write("\n");
      }
    } else {
      var v179 = numberPosition$$1 == "right";
      if (v179) {
        var v164 = outputWindow.document;
        var v574 = adjustNumbering(i$$6, numberingAdjustment);
        var v439 = lineOfText$$1 + v574;
        var v165 = v439 + "\n";
        v164.write(v165);
        var v169 = strands$$1 == "two";
        if (v169) {
          var v166 = outputWindow.document;
          var v575 = complement(lineOfText$$1);
          var v576 = adjustNumbering(i$$6, numberingAdjustment);
          var v440 = v575 + v576;
          var v167 = v440 + "\n";
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
            var v441 = complement(lineOfText$$1);
            var v175 = v441 + "\n";
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
    var v442 = basePerLine$$3 / groupSize$$3;
    var v188 = j$$8 <= v442;
    for (;v188;) {
      var v184 = k$$2 < groupSize$$3;
      for (;v184;) {
        var v443 = i$$7 + k$$2;
        var v182 = v443 >= stopBase$$3;
        if (v182) {
          break;
        }
        var v444 = k$$2 + i$$7;
        var v183 = text$$13.charAt(v444);
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
      var v445 = basePerLine$$3 / groupSize$$3;
      v188 = j$$8 <= v445;
    }
    var v199 = numberPosition$$2 == "left";
    if (v199) {
      var v189 = outputWindow.document;
      var v577 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v446 = v577 + lineOfText$$2;
      var v190 = v446 + "\n";
      v189.write(v190);
    } else {
      var v198 = numberPosition$$2 == "right";
      if (v198) {
        var v191 = outputWindow.document;
        var v447 = lineOfText$$2 + i$$7;
        var v192 = v447 + "\n";
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
  var v650 = sequence$$13.length;
  var v578 = v650 <= firstIndexToMutate;
  var v651 = !v578;
  if (v651) {
    v578 = lastIndexToMutate < 0;
  }
  var v448 = v578;
  var v579 = !v448;
  if (v579) {
    v448 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v201 = v448;
  if (v201) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v209 = i$$8 < numMut;
  for (;v209;) {
    maxNum = sequence$$13.length;
    var v449 = Math.random();
    var v202 = v449 * maxNum;
    randNum = Math.floor(v202);
    var v450 = randNum < firstIndexToMutate;
    var v580 = !v450;
    if (v580) {
      v450 = randNum > lastIndexToMutate;
    }
    var v203 = v450;
    if (v203) {
      numMut++;
      i$$8++;
      v209 = i$$8 < numMut;
      continue;
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for (;needNewChar;) {
      var v451 = Math.random();
      var v452 = components$$1.length;
      var v204 = v451 * v452;
      componentsIndex = Math.round(v204);
      var v453 = components$$1.length;
      var v205 = componentsIndex == v453;
      if (v205) {
        componentsIndex = 0;
      }
      var v454 = components$$1[componentsIndex];
      var v206 = v454 != currentChar;
      if (v206) {
        needNewChar = false;
      }
    }
    var v455 = sequence$$13.substring(0, randNum);
    var v456 = components$$1[componentsIndex];
    var v207 = v455 + v456;
    var v457 = randNum + 1;
    var v458 = sequence$$13.length;
    var v208 = sequence$$13.substring(v457, v458);
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
    var v459 = Math.random();
    var v460 = components$$2.length;
    var v212 = v459 * v460;
    tempNum$$1 = Math.floor(v212);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v461 = sequence$$14.length;
    var v215 = v461 == 60;
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
    var v652 = sequence$$15.length;
    var v581 = v652 - lookAhead;
    var v582 = sequence$$15.length;
    var v462 = sequence$$15.substring(v581, v582);
    var v220 = v462 + sequence$$15;
    var v221 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v220 + v221;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v223 = outputWindow.document;
  v223.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  var v224 = outputWindow.document;
  var v653 = '<tr><td class="title" width="200px">' + "Site:";
  var v583 = v653 + '</td><td class="title">';
  var v463 = v583 + "Positions:";
  var v225 = v463 + "</td></tr>\n";
  v224.write(v225);
  var i$$9 = 0;
  var v464 = arrayOfItems.length;
  var v241 = i$$9 < v464;
  for (;v241;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v465 = arrayOfItems[i$$9];
    var v226 = v465.match(/\/.+\//);
    matchExp = v226 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    var v654 = arrayOfItems[i$$9];
    var v584 = v654.match(/\)\D*\d+/);
    var v466 = v584.toString();
    var v227 = v466.replace(/\)\D*/, "");
    cutDistance = parseFloat(v227);
    var v233 = matchArray$$1 = matchExp.exec(sequence$$15);
    for (;v233;) {
      var v228 = matchExp.lastIndex;
      matchPosition = v228 - cutDistance;
      var v467 = matchPosition >= lowerLimit;
      if (v467) {
        v467 = matchPosition < upperLimit;
      }
      var v231 = v467;
      if (v231) {
        timesFound++;
        var v229 = tempString$$1 + ", ";
        var v468 = matchPosition - shiftValue;
        var v230 = v468 + 1;
        tempString$$1 = v229 + v230;
      }
      var v469 = matchExp.lastIndex;
      var v585 = RegExp.lastMatch;
      var v470 = v585.length;
      var v232 = v469 - v470;
      matchExp.lastIndex = v232 + 1;
      v233 = matchArray$$1 = matchExp.exec(sequence$$15);
    }
    var v471 = tempString$$1.search(/\d/);
    var v234 = v471 != -1;
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
    var v757 = '<tr><td class="' + backGroundClass;
    var v745 = v757 + '">';
    var v777 = arrayOfItems[i$$9];
    var v768 = v777.match(/\([^\(]+\)/);
    var v758 = v768.toString();
    var v746 = v758.replace(/\(|\)/g, "");
    var v729 = v745 + v746;
    var v702 = v729 + '</td><td class="';
    var v655 = v702 + backGroundClass;
    var v586 = v655 + '">';
    var v472 = v586 + tempString$$1;
    var v240 = v472 + "</td></tr>\n";
    v239.write(v240);
    timesFound = 0;
    i$$9++;
    var v473 = arrayOfItems.length;
    v241 = i$$9 < v473;
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
  var v730 = '<tr><td class="title">' + "Pattern:";
  var v703 = v730 + '</td><td class="title">';
  var v656 = v703 + "Times found:";
  var v587 = v656 + '</td><td class="title">';
  var v474 = v587 + "Percentage:";
  var v245 = v474 + "</td></tr>\n";
  v244.write(v245);
  var i$$10 = 0;
  var v475 = arrayOfItems$$1.length;
  var v254 = i$$10 < v475;
  for (;v254;) {
    var tempNumber = 0;
    var v476 = arrayOfItems$$1[i$$10];
    var v246 = v476.match(/\/[^\/]+\//);
    var matchExp$$1 = v246 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    var v477 = sequence$$16.search(matchExp$$1);
    var v248 = v477 != -1;
    if (v248) {
      var v247 = sequence$$16.match(matchExp$$1);
      tempNumber = v247.length;
    }
    var percentage = 0;
    var v588 = originalLength + 1;
    var v704 = arrayOfItems$$1[i$$10];
    var v657 = v704.match(/\d+/);
    var v589 = parseFloat(v657);
    var v478 = v588 - v589;
    var v251 = v478 > 0;
    if (v251) {
      var v249 = 100 * tempNumber;
      var v479 = originalLength + 1;
      var v658 = arrayOfItems$$1[i$$10];
      var v590 = v658.match(/\d+/);
      var v480 = parseFloat(v590);
      var v250 = v479 - v480;
      percentage = v249 / v250;
    }
    var v252 = outputWindow.document;
    var v778 = arrayOfItems$$1[i$$10];
    var v769 = v778.match(/\([^\(]+\)\b/);
    var v759 = v769.toString();
    var v747 = v759.replace(/\(|\)/g, "");
    var v731 = "<tr><td>" + v747;
    var v705 = v731 + "</td><td>";
    var v659 = v705 + tempNumber;
    var v591 = v659 + "</td><td>";
    var v592 = percentage.toFixed(2);
    var v481 = v591 + v592;
    var v253 = v481 + "</td></tr>\n";
    v252.write(v253);
    i$$10++;
    var v482 = arrayOfItems$$1.length;
    v254 = i$$10 < v482;
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
  var v483 = sequence$$17.length;
  var v262 = v483 > 0;
  for (;v262;) {
    maxNum$$1 = sequence$$17.length;
    var v484 = Math.random();
    var v256 = v484 * maxNum$$1;
    randNum$$1 = Math.floor(v256);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v257 = randNum$$1 + 1;
    var v258 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v257, v258);
    sequence$$17 = tempString1 + tempString2;
    var v485 = tempSeq.length;
    var v261 = v485 == 60;
    if (v261) {
      var v259 = outputWindow.document;
      var v260 = tempSeq + "\n";
      v259.write(v260);
      tempSeq = "";
    }
    var v486 = sequence$$17.length;
    v262 = v486 > 0;
  }
  var v263 = outputWindow.document;
  var v264 = tempSeq + "\n";
  v263.write(v264);
  return true;
}
function identSim() {
  var theDocument = document;
  var maxInput$$3 = 2E4;
  var theAlignment = "";
  var alignArray$$1 = new Array;
  var groupString = "";
  var arrayOfGroups = new Array;
  var titleArray = new Array;
  var sequenceArray$$1 = new Array;
  var longestTitle;
  var v487 = testScript();
  var v265 = v487 == false;
  if (v265) {
    return;
  }
  var v748 = theDocument.forms;
  var v732 = v748[0];
  var v706 = v732.elements;
  var v660 = v706[0];
  var v593 = checkFormElement(v660);
  var v488 = v593 == false;
  var v595 = !v488;
  if (v595) {
    var v760 = theDocument.forms;
    var v749 = v760[0];
    var v733 = v749.elements;
    var v707 = v733[0];
    var v661 = v707.value;
    var v594 = checkTextLength(v661, maxInput$$3);
    v488 = v594 == false;
  }
  var v266 = v488;
  if (v266) {
    return;
  }
  var v708 = theDocument.forms;
  var v662 = v708[0];
  var v596 = v662.elements;
  var v489 = v596[0];
  var v267 = v489.value;
  theAlignment = "X" + v267;
  alignArray$$1 = theAlignment.split(/[>%#]/);
  var v490 = earlyCheckAlign(alignArray$$1);
  var v268 = v490 == false;
  if (v268) {
    return;
  }
  var i$$11 = 1;
  var v491 = alignArray$$1.length;
  var v278 = i$$11 < v491;
  for (;v278;) {
    var v269 = i$$11 - 1;
    var v492 = alignArray$$1[i$$11];
    var v814 = v492.match(/[^\f\n\r]+[\f\n\r]/);
    titleArray[v269] = v814;
    var v270 = i$$11 - 1;
    var v709 = i$$11 - 1;
    var v663 = titleArray[v709];
    var v597 = v663.toString();
    var v493 = filterFastaTitle(v597);
    var v815 = v493.replace(/[\f\n\r]/g, "");
    titleArray[v270] = v815;
    var v271 = i$$11 - 1;
    var v598 = i$$11 - 1;
    var v494 = titleArray[v598];
    var v816 = v494.substring(0, 20);
    titleArray[v271] = v816;
    var v275 = i$$11 == 1;
    if (v275) {
      var v495 = i$$11 - 1;
      var v272 = titleArray[v495];
      longestTitle = v272.length;
    } else {
      var v664 = i$$11 - 1;
      var v599 = titleArray[v664];
      var v496 = v599.length;
      var v274 = v496 > longestTitle;
      if (v274) {
        var v497 = i$$11 - 1;
        var v273 = titleArray[v497];
        longestTitle = v273.length;
      }
    }
    var v276 = i$$11 - 1;
    var v498 = alignArray$$1[i$$11];
    var v817 = v498.replace(/[^\f\n\r]+[\f\n\r]/, "");
    sequenceArray$$1[v276] = v817;
    var v277 = i$$11 - 1;
    var v600 = i$$11 - 1;
    var v499 = sequenceArray$$1[v600];
    var v818 = filterAlignSeq(v499);
    sequenceArray$$1[v277] = v818;
    i$$11++;
    var v500 = alignArray$$1.length;
    v278 = i$$11 < v500;
  }
  var v501 = checkAlign(titleArray, sequenceArray$$1);
  var v279 = v501 == false;
  if (v279) {
    return;
  }
  var v734 = theDocument.forms;
  var v710 = v734[0];
  var v665 = v710.elements;
  var v601 = v665[1];
  var v502 = v601.value;
  var v280 = v502.replace(/\s/g, "");
  groupString = v280.toUpperCase();
  arrayOfGroups = groupString.split(/,/);
  var v503 = checkGroupInput(arrayOfGroups);
  var v281 = v503 == false;
  if (v281) {
    return;
  }
  openWindowAlign();
  openPre();
  writeIdentAndSim(titleArray, sequenceArray$$1, arrayOfGroups);
  closePre();
  closeWindow();
  return;
}
function writeIdentAndSim(titleArray$$1, sequenceArray$$2, arrayOfGroups$$1) {
  var identical = 0;
  var similar = 0;
  var alignLength = 0;
  var k$$3 = 0;
  var v504 = sequenceArray$$2.length;
  var v307 = k$$3 < v504;
  for (;v307;) {
    var m = k$$3 + 1;
    var v505 = sequenceArray$$2.length;
    var v306 = m < v505;
    for (;v306;) {
      var i$$12 = 0;
      var v602 = sequenceArray$$2[0];
      var v506 = v602.length;
      var v286 = i$$12 < v506;
      for (;v286;) {
        alignLength = alignLength + 1;
        var v711 = sequenceArray$$2[k$$3];
        var v666 = v711.charAt(i$$12);
        var v603 = v666.toUpperCase();
        var v712 = sequenceArray$$2[m];
        var v667 = v712.charAt(i$$12);
        var v604 = v667.toUpperCase();
        var v507 = v603 == v604;
        if (v507) {
          var v713 = sequenceArray$$2[k$$3];
          var v668 = v713.charAt(i$$12);
          var v605 = v668.toUpperCase();
          v507 = v605 != "X";
        }
        var v285 = v507;
        if (v285) {
          var v669 = sequenceArray$$2[k$$3];
          var v606 = v669.charAt(i$$12);
          var v508 = v606 != "-";
          if (v508) {
            var v670 = sequenceArray$$2[k$$3];
            var v607 = v670.charAt(i$$12);
            v508 = v607 != ".";
          }
          var v282 = v508;
          if (v282) {
            identical = identical + 1;
          } else {
            alignLength = alignLength - 1;
          }
        } else {
          var j$$10 = 0;
          var v509 = arrayOfGroups$$1.length;
          var v284 = j$$10 < v509;
          for (;v284;) {
            var v671 = arrayOfGroups$$1[j$$10];
            var v735 = sequenceArray$$2[k$$3];
            var v714 = v735.charAt(i$$12);
            var v672 = v714.toUpperCase();
            var v608 = v671.search(v672);
            var v510 = v608 != -1;
            if (v510) {
              var v673 = arrayOfGroups$$1[j$$10];
              var v736 = sequenceArray$$2[m];
              var v715 = v736.charAt(i$$12);
              var v674 = v715.toUpperCase();
              var v609 = v673.search(v674);
              v510 = v609 != -1;
            }
            var v283 = v510;
            if (v283) {
              similar = similar + 1;
              break;
            }
            j$$10++;
            var v511 = arrayOfGroups$$1.length;
            v284 = j$$10 < v511;
          }
        }
        i$$12++;
        var v610 = sequenceArray$$2[0];
        var v512 = v610.length;
        v286 = i$$12 < v512;
      }
      var v287 = outputWindow.document;
      var v716 = titleArray$$1[k$$3];
      var v675 = "<b>Results for " + v716;
      var v611 = v675 + " vs ";
      var v612 = titleArray$$1[m];
      var v513 = v611 + v612;
      var v288 = v513 + ":</b>\n";
      v287.write(v288);
      var v289 = outputWindow.document;
      var v514 = "  Alignment length: " + alignLength;
      var v290 = v514 + "\n";
      v289.write(v290);
      var v291 = outputWindow.document;
      var v515 = "Identical residues: " + identical;
      var v292 = v515 + "\n";
      v291.write(v292);
      var v293 = outputWindow.document;
      var v516 = "  Similar residues: " + similar;
      var v294 = v516 + "\n";
      v293.write(v294);
      var v299 = identical == 0;
      if (v299) {
        var v295 = outputWindow.document;
        var v517 = "  Percent identity: " + 0;
        var v296 = v517 + "\n";
        v295.write(v296);
      } else {
        var v297 = outputWindow.document;
        var v717 = identical / alignLength;
        var v676 = v717 * 100;
        var v613 = v676.toFixed(2);
        var v518 = "  Percent identity: " + v613;
        var v298 = v518 + "\n";
        v297.write(v298);
      }
      var v519 = similar == 0;
      if (v519) {
        v519 = identical == 0;
      }
      var v304 = v519;
      if (v304) {
        var v300 = outputWindow.document;
        var v520 = "Percent similarity: " + 0;
        var v301 = v520 + "\n";
        v300.write(v301);
      } else {
        var v302 = outputWindow.document;
        var v737 = identical + similar;
        var v718 = v737 / alignLength;
        var v677 = v718 * 100;
        var v614 = v677.toFixed(2);
        var v521 = "Percent similarity: " + v614;
        var v303 = v521 + "\n";
        v302.write(v303);
      }
      var v305 = outputWindow.document;
      v305.write("\n");
      identical = 0;
      similar = 0;
      alignLength = 0;
      m++;
      var v522 = sequenceArray$$2.length;
      v306 = m < v522;
    }
    k$$3++;
    var v523 = sequenceArray$$2.length;
    v307 = k$$3 < v523;
  }
  return;
}
document.onload = v2;
var v308 = document.getElementById("submitbtn");
v308.onclick = v3;
var v309 = document.getElementById("clearbtn");
v309.onclick = v4

}

JAM.stopProfile('load');
