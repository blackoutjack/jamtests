
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
function v5() {
  var v557 = document.forms;
  var v476 = v557[0];
  var v289 = v476.elements;
  var v6 = v289[0];
  v6.value = " ";
  return;
}
function v4() {
  try {
    splitCodons(document);
  } catch (e$$5) {
    var v7 = "The following error was encountered: " + e$$5;
    alert(v7);
  }
  return;
}
function v3() {
  var v290 = document.main_form;
  var v8 = v290.main_submit;
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
  var v291 = arrayOfSequences.length;
  var v10 = v291 < 2;
  if (v10) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v292 = arrayOfTitles.length;
  var v12 = i$$1 < v292;
  for (;v12;) {
    var v607 = arrayOfTitles[i$$1];
    var v558 = v607.search(/\S/);
    var v477 = v558 == -1;
    var v560 = !v477;
    if (v560) {
      var v608 = arrayOfSequences[i$$1];
      var v559 = v608.search(/\S/);
      v477 = v559 == -1;
    }
    var v293 = v477;
    var v479 = !v293;
    if (v479) {
      var v561 = arrayOfSequences[i$$1];
      var v478 = v561.length;
      v293 = v478 != lengthOfAlign;
    }
    var v11 = v293;
    if (v11) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v294 = arrayOfTitles.length;
    v12 = i$$1 < v294;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v641 = codonTable.search(/AmAcid/);
  var v609 = v641 == -1;
  var v643 = !v609;
  if (v643) {
    var v642 = codonTable.search(/Codon/);
    v609 = v642 == -1;
  }
  var v562 = v609;
  var v611 = !v562;
  if (v611) {
    var v610 = codonTable.search(/Number/);
    v562 = v610 == -1;
  }
  var v480 = v562;
  var v564 = !v480;
  if (v564) {
    var v563 = codonTable.search(/\/1000/);
    v480 = v563 == -1;
  }
  var v295 = v480;
  var v482 = !v295;
  if (v482) {
    var v481 = codonTable.search(/Fraction\s*\.\./);
    v295 = v481 == -1;
  }
  var v13 = v295;
  if (v13) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v483 = formElement.value;
  var v296 = v483.search(/\S/);
  var v14 = v296 == -1;
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
  var v297 = arrayOfPatterns.length;
  var v17 = z$$2 < v297;
  for (;v17;) {
    var v484 = arrayOfPatterns[z$$2];
    var v298 = v484.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v15 = v298 == -1;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v485 = arrayOfPatterns[z$$2];
    var v299 = moreExpressionCheck(v485);
    var v16 = v299 == false;
    if (v16) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v300 = arrayOfPatterns.length;
    v17 = z$$2 < v300;
  }
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v18);
  var v19 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v19);
  var j = 0;
  var v301 = arrayOfPatterns.length;
  var v23 = j < v301;
  for (;v23;) {
    var v486 = arrayOfPatterns[j];
    var v302 = v486.match(/\/.+\//);
    var v20 = v302 + "gi";
    var v738 = eval(v20);
    geneticCodeMatchExp[j] = v738;
    var v303 = arrayOfPatterns[j];
    var v21 = v303.match(/=[a-zA-Z\*]/);
    var v739 = v21.toString();
    geneticCodeMatchResult[j] = v739;
    var v22 = geneticCodeMatchResult[j];
    var v740 = v22.replace(/=/g, "");
    geneticCodeMatchResult[j] = v740;
    j++;
    var v304 = arrayOfPatterns.length;
    v23 = j < v304;
  }
  var i$$2 = 0;
  var v487 = testSequence.length;
  var v305 = v487 - 3;
  var v30 = i$$2 <= v305;
  for (;v30;) {
    var v24 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v24);
    j = 0;
    var v306 = geneticCodeMatchExp.length;
    var v28 = j < v306;
    for (;v28;) {
      var v488 = geneticCodeMatchExp[j];
      var v307 = codon.search(v488);
      var v27 = v307 != -1;
      if (v27) {
        var v26 = oneMatch == true;
        if (v26) {
          var v308 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v25 = v308 + ".";
          alert(v25);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v309 = geneticCodeMatchExp.length;
      v28 = j < v309;
    }
    var v29 = oneMatch == false;
    if (v29) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v489 = testSequence.length;
    var v310 = v489 - 3;
    v30 = i$$2 <= v310;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v311 = arrayOfPatterns$$1.length;
  var v32 = z$$3 < v311;
  for (;v32;) {
    var v490 = arrayOfPatterns$$1[z$$3];
    var v312 = v490.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v31 = v312 != -1;
    if (v31) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v313 = arrayOfPatterns$$1.length;
    v32 = z$$3 < v313;
  }
  var i$$3 = 0;
  var v314 = arrayOfPatterns$$1.length;
  var v36 = i$$3 < v314;
  for (;v36;) {
    var v491 = arrayOfPatterns$$1[i$$3];
    var v315 = "[" + v491;
    var v33 = v315 + "]";
    var re = new RegExp(v33, "gi");
    var j$$1 = i$$3 + 1;
    var v316 = arrayOfPatterns$$1.length;
    var v35 = j$$1 < v316;
    for (;v35;) {
      var v492 = arrayOfPatterns$$1[j$$1];
      var v317 = v492.search(re);
      var v34 = v317 != -1;
      if (v34) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v318 = arrayOfPatterns$$1.length;
      v35 = j$$1 < v318;
    }
    i$$3++;
    var v319 = arrayOfPatterns$$1.length;
    v36 = i$$3 < v319;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v320 = arrayOfPatterns$$2.length;
  var v39 = z$$4 < v320;
  for (;v39;) {
    var v493 = arrayOfPatterns$$2[z$$4];
    var v321 = v493.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v37 = v321 == -1;
    if (v37) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v494 = arrayOfPatterns$$2[z$$4];
    var v322 = moreExpressionCheck(v494);
    var v38 = v322 == false;
    if (v38) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v323 = arrayOfPatterns$$2.length;
    v39 = z$$4 < v323;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v565 = getSequenceFromFasta(text$$7);
  var v495 = v565.replace(/[^A-Za-z]/g, "");
  var v324 = v495.length;
  var v41 = v324 > maxInput;
  if (v41) {
    var v325 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v40 = v325 + " characters.";
    alert(v40);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v326 = text$$8.length;
  var v43 = v326 > maxInput$$1;
  if (v43) {
    var v327 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v42 = v327 + " characters.";
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
  var v328 = alignArray.length;
  var v50 = v328 < 3;
  if (v50) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v329 = alignArray.length;
  var v52 = i$$4 < v329;
  for (;v52;) {
    var v496 = alignArray[i$$4];
    var v330 = v496.search(/[^\s]+\s/);
    var v51 = v330 == -1;
    if (v51) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v331 = alignArray.length;
    v52 = i$$4 < v331;
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
  var v332 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v55 = v332 != -1;
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
  var v333 = sequence$$2.length;
  var v56 = "&gt;results for " + v333;
  var stringToReturn = v56 + " residue sequence ";
  var v334 = fastaSequenceTitle.search(/[^\s]/);
  var v58 = v334 != -1;
  if (v58) {
    var v335 = stringToReturn + '"';
    var v57 = v335 + fastaSequenceTitle;
    stringToReturn = v57 + '"';
  }
  var v336 = stringToReturn + ' starting "';
  var v337 = sequence$$2.substring(0, 10);
  var v59 = v336 + v337;
  stringToReturn = v59 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v338 = sequenceOne.length;
  var v60 = "Search results for " + v338;
  var stringToReturn$$1 = v60 + " residue sequence ";
  var v339 = fastaSequenceTitleOne.search(/[^\s]/);
  var v62 = v339 != -1;
  if (v62) {
    var v340 = stringToReturn$$1 + '"';
    var v61 = v340 + fastaSequenceTitleOne;
    stringToReturn$$1 = v61 + '"';
  }
  var v341 = stringToReturn$$1 + ' starting "';
  var v342 = sequenceOne.substring(0, 10);
  var v63 = v341 + v342;
  stringToReturn$$1 = v63 + '"\n';
  var v343 = stringToReturn$$1 + "and ";
  var v344 = sequenceTwo.length;
  var v64 = v343 + v344;
  stringToReturn$$1 = v64 + " residue sequence ";
  var v345 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v66 = v345 != -1;
  if (v66) {
    var v346 = stringToReturn$$1 + '"';
    var v65 = v346 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v65 + '"';
  }
  var v347 = stringToReturn$$1 + ' starting "';
  var v348 = sequenceTwo.substring(0, 10);
  var v67 = v347 + v348;
  stringToReturn$$1 = v67 + '"';
  var v68 = '<div class="info">' + stringToReturn$$1;
  return v68 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v69 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v69);
  var j$$2 = 0;
  var v349 = arrayOfPatterns$$3.length;
  var v71 = j$$2 < v349;
  for (;v71;) {
    var v497 = arrayOfPatterns$$3[j$$2];
    var v350 = v497.match(/\/.+\//);
    var v70 = v350 + "gi";
    var v741 = eval(v70);
    geneticCodeMatchExp$$1[j$$2] = v741;
    j$$2++;
    var v351 = arrayOfPatterns$$3.length;
    v71 = j$$2 < v351;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v72 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v72);
  var j$$3 = 0;
  var v352 = arrayOfPatterns$$4.length;
  var v75 = j$$3 < v352;
  for (;v75;) {
    var v353 = arrayOfPatterns$$4[j$$3];
    var v73 = v353.match(/=[a-zA-Z\*]/);
    var v742 = v73.toString();
    geneticCodeMatchResult$$1[j$$3] = v742;
    var v74 = geneticCodeMatchResult$$1[j$$3];
    var v743 = v74.replace(/=/g, "");
    geneticCodeMatchResult$$1[j$$3] = v743;
    j$$3++;
    var v354 = arrayOfPatterns$$4.length;
    v75 = j$$3 < v354;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v355 = sequence$$3.length;
  var v76 = "Results for " + v355;
  var stringToReturn$$2 = v76 + " residue sequence ";
  var v356 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v78 = v356 != -1;
  if (v78) {
    var v357 = stringToReturn$$2 + '"';
    var v77 = v357 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v77 + '"';
  }
  var v358 = stringToReturn$$2 + ' starting "';
  var v359 = sequence$$3.substring(0, 10);
  var v79 = v358 + v359;
  stringToReturn$$2 = v79 + '"';
  var v80 = '<div class="info">' + stringToReturn$$2;
  return v80 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v498 = "Results for " + topology;
  var v360 = v498 + " ";
  var v361 = sequence$$4.length;
  var v81 = v360 + v361;
  var stringToReturn$$3 = v81 + " residue sequence ";
  var v362 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v83 = v362 != -1;
  if (v83) {
    var v363 = stringToReturn$$3 + '"';
    var v82 = v363 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v82 + '"';
  }
  var v364 = stringToReturn$$3 + ' starting "';
  var v365 = sequence$$4.substring(0, 10);
  var v84 = v364 + v365;
  stringToReturn$$3 = v84 + '"';
  var v85 = '<div class="info">' + stringToReturn$$3;
  return v85 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v366 = sequenceOne$$1.length;
  var v86 = "Alignment results for " + v366;
  var stringToReturn$$4 = v86 + " residue sequence ";
  var v367 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v88 = v367 != -1;
  if (v88) {
    var v368 = stringToReturn$$4 + '"';
    var v87 = v368 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v87 + '"';
  }
  var v369 = stringToReturn$$4 + ' starting "';
  var v370 = sequenceOne$$1.substring(0, 10);
  var v89 = v369 + v370;
  stringToReturn$$4 = v89 + '"\n';
  var v371 = stringToReturn$$4 + "and ";
  var v372 = sequenceTwo$$1.length;
  var v90 = v371 + v372;
  stringToReturn$$4 = v90 + " residue sequence ";
  var v373 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v92 = v373 != -1;
  if (v92) {
    var v374 = stringToReturn$$4 + '"';
    var v91 = v374 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v91 + '"';
  }
  var v375 = stringToReturn$$4 + ' starting "';
  var v376 = sequenceTwo$$1.substring(0, 10);
  var v93 = v375 + v376;
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
    var v377 = Math.random();
    var v378 = components.length;
    var v95 = v377 * v378;
    tempNum = Math.floor(v95);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4++;
    v96 = j$$4 < lengthOut;
  }
  return sequenceArray.join("");
}
function getSequenceFromFasta(sequenceRecord) {
  var v379 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v97 = v379 != -1;
  if (v97) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "");
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v380 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v99 = v380 != -1;
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
  var v716 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v709 = v716 != -1;
  var v718 = !v709;
  if (v718) {
    var v717 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    v709 = v717 != -1;
  }
  var v700 = v709;
  var v711 = !v700;
  if (v711) {
    var v710 = expressionToCheck.search(/\[\]/);
    v700 = v710 != -1;
  }
  var v691 = v700;
  var v702 = !v691;
  if (v702) {
    var v701 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
    v691 = v701 != -1;
  }
  var v677 = v691;
  var v693 = !v677;
  if (v693) {
    var v692 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
    v677 = v692 != -1;
  }
  var v659 = v677;
  var v679 = !v659;
  if (v679) {
    var v678 = expressionToCheck.search(/\|\|/);
    v659 = v678 != -1;
  }
  var v644 = v659;
  var v661 = !v644;
  if (v661) {
    var v660 = expressionToCheck.search(/\/\|/);
    v644 = v660 != -1;
  }
  var v612 = v644;
  var v646 = !v612;
  if (v646) {
    var v645 = expressionToCheck.search(/\|\//);
    v612 = v645 != -1;
  }
  var v566 = v612;
  var v614 = !v566;
  if (v614) {
    var v613 = expressionToCheck.search(/\[.\]/);
    v566 = v613 != -1;
  }
  var v499 = v566;
  var v568 = !v499;
  if (v568) {
    var v567 = expressionToCheck.search(/\</);
    v499 = v567 != -1;
  }
  var v381 = v499;
  var v501 = !v381;
  if (v501) {
    var v500 = expressionToCheck.search(/\>/);
    v381 = v500 != -1;
  }
  var v100 = v381;
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
  _openWindow(title$$5, true);
  return;
}
function _openWindow(title$$6, isColor) {
  outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  outputWindow.focus();
  var v105 = outputWindow.document;
  var v569 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v502 = v569 + "<head>\n";
  var v382 = v502 + "<title>Sequence Manipulation Suite</title>\n";
  var v106 = v382 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v105.write(v106);
  if (isColor) {
    var v107 = outputWindow.document;
    var v731 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v727 = v731 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v723 = v727 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v719 = v723 + "div.info {font-weight: bold}\n";
    var v712 = v719 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v703 = v712 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v694 = v703 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v680 = v694 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v662 = v680 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v647 = v662 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v615 = v647 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v570 = v615 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v503 = v570 + "td.many {color: #000000}\n";
    var v383 = v503 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v108 = v383 + "</style>\n";
    v107.write(v108);
  } else {
    var v109 = outputWindow.document;
    var v735 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v732 = v735 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v728 = v732 + "div.title {display: none}\n";
    var v724 = v728 + "div.info {font-weight: bold}\n";
    var v720 = v724 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v713 = v720 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v704 = v713 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v695 = v704 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v681 = v695 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v663 = v681 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v648 = v663 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v616 = v648 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v571 = v616 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v504 = v571 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v384 = v504 + "img {display: none}\n";
    var v110 = v384 + "</style>\n";
    v109.write(v110);
  }
  var v111 = outputWindow.document;
  var v572 = "</head>\n" + '<body class="main">\n';
  var v505 = v572 + '<div class="title">';
  var v385 = v505 + title$$6;
  var v112 = v385 + " results</div>\n";
  v111.write(v112);
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
  var v113 = outputWindow.document;
  var v573 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v506 = v573 + "<head>\n";
  var v386 = v506 + "<title>Sequence Manipulation Suite</title>\n";
  var v114 = v386 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v113.write(v114);
  if (isBackground) {
    var v115 = outputWindow.document;
    var v733 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v729 = v733 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v725 = v729 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v721 = v725 + "div.info {font-weight: bold}\n";
    var v714 = v721 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v705 = v714 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v696 = v705 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v682 = v696 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v664 = v682 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v649 = v664 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v617 = v649 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v574 = v617 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v507 = v574 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v387 = v507 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v116 = v387 + "</style>\n";
    v115.write(v116);
  } else {
    var v117 = outputWindow.document;
    var v737 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v736 = v737 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v734 = v736 + "div.title {display: none}\n";
    var v730 = v734 + "div.info {font-weight: bold}\n";
    var v726 = v730 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v722 = v726 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v715 = v722 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v706 = v715 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v697 = v706 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v683 = v697 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v665 = v683 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v650 = v665 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v618 = v650 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v575 = v618 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v508 = v575 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v388 = v508 + "img {display: none}\n";
    var v118 = v388 + "</style>\n";
    v117.write(v118);
  }
  var v119 = outputWindow.document;
  var v576 = "</head>\n" + '<body class="main">\n';
  var v509 = v576 + '<div class="title">';
  var v389 = v509 + title$$8;
  var v120 = v389 + " results</div>\n";
  v119.write(v120);
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
  var v390 = dnaSequence$$1.search(/./);
  var v121 = v390 != -1;
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
  var v391 = testArray[0];
  var v125 = v391 != testString;
  if (v125) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v392 = testString.search(re$$2);
  var v126 = v392 == -1;
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
  var v393 = testNum.toFixed(3);
  var v129 = v393 != 2489.824;
  if (v129) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v394 = testNum.toPrecision(5);
  var v130 = v394 != 2489.8;
  if (v130) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v395 = theNumber$$1.search(/\d/);
  var v131 = v395 == -1;
  if (v131) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v619 = emblFile.search(/ID/);
  var v577 = v619 == -1;
  var v621 = !v577;
  if (v621) {
    var v620 = emblFile.search(/AC/);
    v577 = v620 == -1;
  }
  var v510 = v577;
  var v579 = !v510;
  if (v579) {
    var v578 = emblFile.search(/DE/);
    v510 = v578 == -1;
  }
  var v396 = v510;
  var v512 = !v396;
  if (v512) {
    var v511 = emblFile.search(/SQ/);
    v396 = v511 == -1;
  }
  var v132 = v396;
  if (v132) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v397 = theNumber$$2.search(/\d/);
  var v133 = v397 == -1;
  if (v133) {
    alert("Please enter a number.");
    return false;
  }
  var v135 = theNumber$$2 > maxInput$$2;
  if (v135) {
    var v398 = "Please enter a number less than or equal to " + maxInput$$2;
    var v134 = v398 + ".";
    alert(v134);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v399 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v136 = v399 != -1;
  if (v136) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v400 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v137 = v400 != -1;
  if (v137) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v622 = genBankFile.search(/LOCUS/);
  var v580 = v622 == -1;
  var v624 = !v580;
  if (v624) {
    var v623 = genBankFile.search(/DEFINITION/);
    v580 = v623 == -1;
  }
  var v513 = v580;
  var v582 = !v513;
  if (v582) {
    var v581 = genBankFile.search(/ACCESSION/);
    v513 = v581 == -1;
  }
  var v401 = v513;
  var v515 = !v401;
  if (v515) {
    var v514 = genBankFile.search(/ORIGIN/);
    v401 = v514 == -1;
  }
  var v138 = v401;
  if (v138) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v625 = genBankFile$$1.search(/LOCUS/);
  var v583 = v625 == -1;
  var v627 = !v583;
  if (v627) {
    var v626 = genBankFile$$1.search(/DEFINITION/);
    v583 = v626 == -1;
  }
  var v516 = v583;
  var v585 = !v516;
  if (v585) {
    var v584 = genBankFile$$1.search(/ACCESSION/);
    v516 = v584 == -1;
  }
  var v402 = v516;
  var v518 = !v402;
  if (v518) {
    var v517 = genBankFile$$1.search(/ORIGIN/);
    v402 = v517 == -1;
  }
  var v139 = v402;
  if (v139) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v403 = genBankFile$$1.search(/FEATURES {13}/);
  var v140 = v403 == -1;
  if (v140) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v628 = emblFile$$1.search(/ID/);
  var v586 = v628 == -1;
  var v630 = !v586;
  if (v630) {
    var v629 = emblFile$$1.search(/AC/);
    v586 = v629 == -1;
  }
  var v519 = v586;
  var v588 = !v519;
  if (v588) {
    var v587 = emblFile$$1.search(/DE/);
    v519 = v587 == -1;
  }
  var v404 = v519;
  var v521 = !v404;
  if (v521) {
    var v520 = emblFile$$1.search(/SQ/);
    v404 = v520 == -1;
  }
  var v141 = v404;
  if (v141) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v405 = emblFile$$1.search(/^FT/m);
  var v142 = v405 == -1;
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
    var v406 = basePerLine / groupSize;
    var v146 = j$$6 <= v406;
    for (;v146;) {
      var v145 = k < groupSize;
      for (;v145;) {
        var v407 = k + i$$5;
        var v144 = text$$10.charAt(v407);
        lineOfText = lineOfText + v144;
        k = k + 1;
        v145 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v408 = basePerLine / groupSize;
      v146 = j$$6 <= v408;
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
  writeGroupNumDnaSetStart(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition, 0);
  return true;
}
function writeGroupNumDnaSetStart(text$$12, tabIn$$3, groupSize$$2, basePerLine$$2, startBase$$2, stopBase$$2, strands$$1, numberPosition$$1, numberingAdjustment) {
  function adjustNumbering(original, adjustment) {
    var adjusted = original + adjustment;
    var v409 = adjustment < 0;
    if (v409) {
      v409 = adjusted >= 0;
    }
    var v150 = v409;
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
  var v183 = i$$6 < stopBase$$2;
  for (;v183;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v410 = basePerLine$$2 / groupSize$$2;
    var v159 = j$$7 <= v410;
    for (;v159;) {
      var v154 = k$$1 < groupSize$$2;
      for (;v154;) {
        var v411 = i$$6 + k$$1;
        var v151 = v411 >= stopBase$$2;
        if (v151) {
          break;
        }
        var v152 = lineOfText$$1;
        var v412 = k$$1 + i$$6;
        var v153 = text$$12.charAt(v412);
        lineOfText$$1 = v152 + v153;
        k$$1 = k$$1 + 1;
        v154 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v157 = numberPosition$$1 == "above";
      if (v157) {
        var v155 = aboveNum;
        var v413 = adjustNumbering(i$$6, numberingAdjustment);
        var v156 = rightNum(v413, "", groupSize$$2, tabIn$$3);
        aboveNum = v155 + v156;
      }
      var v158 = i$$6 >= stopBase$$2;
      if (v158) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v414 = basePerLine$$2 / groupSize$$2;
      v159 = j$$7 <= v414;
    }
    var v182 = numberPosition$$1 == "left";
    if (v182) {
      var v160 = outputWindow.document;
      var v589 = adjustNumbering(lineNum, numberingAdjustment);
      var v522 = rightNum(v589, "", 8, tabIn$$3);
      var v415 = v522 + lineOfText$$1;
      var v161 = v415 + "\n";
      v160.write(v161);
      var v165 = strands$$1 == "two";
      if (v165) {
        var v162 = outputWindow.document;
        var v590 = adjustNumbering(lineNum, numberingAdjustment);
        var v523 = rightNum(v590, "", 8, tabIn$$3);
        var v524 = complement(lineOfText$$1);
        var v416 = v523 + v524;
        var v163 = v416 + "\n";
        v162.write(v163);
        var v164 = outputWindow.document;
        v164.write("\n");
      }
    } else {
      var v181 = numberPosition$$1 == "right";
      if (v181) {
        var v166 = outputWindow.document;
        var v525 = lineOfText$$1;
        var v526 = adjustNumbering(i$$6, numberingAdjustment);
        var v417 = v525 + v526;
        var v167 = v417 + "\n";
        v166.write(v167);
        var v171 = strands$$1 == "two";
        if (v171) {
          var v168 = outputWindow.document;
          var v527 = complement(lineOfText$$1);
          var v528 = adjustNumbering(i$$6, numberingAdjustment);
          var v418 = v527 + v528;
          var v169 = v418 + "\n";
          v168.write(v169);
          var v170 = outputWindow.document;
          v170.write("\n");
        }
      } else {
        var v180 = numberPosition$$1 == "above";
        if (v180) {
          var v172 = outputWindow.document;
          var v173 = aboveNum + "\n";
          v172.write(v173);
          var v174 = outputWindow.document;
          var v175 = lineOfText$$1 + "\n";
          v174.write(v175);
          var v179 = strands$$1 == "two";
          if (v179) {
            var v176 = outputWindow.document;
            var v419 = complement(lineOfText$$1);
            var v177 = v419 + "\n";
            v176.write(v177);
            var v178 = outputWindow.document;
            v178.write("\n");
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v183 = i$$6 < stopBase$$2;
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
  var v202 = i$$7 < stopBase$$3;
  for (;v202;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v420 = basePerLine$$3 / groupSize$$3;
    var v190 = j$$8 <= v420;
    for (;v190;) {
      var v186 = k$$2 < groupSize$$3;
      for (;v186;) {
        var v421 = i$$7 + k$$2;
        var v184 = v421 >= stopBase$$3;
        if (v184) {
          break;
        }
        var v422 = k$$2 + i$$7;
        var v185 = text$$13.charAt(v422);
        lineOfText$$2 = lineOfText$$2 + v185;
        k$$2 = k$$2 + 1;
        v186 = k$$2 < groupSize$$3;
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v188 = numberPosition$$2 == "above";
      if (v188) {
        var v187 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = aboveNum$$1 + v187;
      }
      var v189 = i$$7 >= stopBase$$3;
      if (v189) {
        break;
      }
      k$$2 = 0;
      j$$8++;
      var v423 = basePerLine$$3 / groupSize$$3;
      v190 = j$$8 <= v423;
    }
    var v201 = numberPosition$$2 == "left";
    if (v201) {
      var v191 = outputWindow.document;
      var v529 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v424 = v529 + lineOfText$$2;
      var v192 = v424 + "\n";
      v191.write(v192);
    } else {
      var v200 = numberPosition$$2 == "right";
      if (v200) {
        var v193 = outputWindow.document;
        var v425 = lineOfText$$2 + i$$7;
        var v194 = v425 + "\n";
        v193.write(v194);
      } else {
        var v199 = numberPosition$$2 == "above";
        if (v199) {
          var v195 = outputWindow.document;
          var v196 = aboveNum$$1 + "\n";
          v195.write(v196);
          var v197 = outputWindow.document;
          var v198 = lineOfText$$2 + "\n";
          v197.write(v198);
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v202 = i$$7 < stopBase$$3;
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
  var v591 = sequence$$13.length;
  var v530 = v591 <= firstIndexToMutate;
  var v592 = !v530;
  if (v592) {
    v530 = lastIndexToMutate < 0;
  }
  var v426 = v530;
  var v531 = !v426;
  if (v531) {
    v426 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v203 = v426;
  if (v203) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v211 = i$$8 < numMut;
  for (;v211;) {
    maxNum = sequence$$13.length;
    var v427 = Math.random();
    var v204 = v427 * maxNum;
    randNum = Math.floor(v204);
    var v428 = randNum < firstIndexToMutate;
    var v532 = !v428;
    if (v532) {
      v428 = randNum > lastIndexToMutate;
    }
    var v205 = v428;
    if (v205) {
      numMut++;
      i$$8++;
      v211 = i$$8 < numMut;
      continue;
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for (;needNewChar;) {
      var v429 = Math.random();
      var v430 = components$$1.length;
      var v206 = v429 * v430;
      componentsIndex = Math.round(v206);
      var v431 = components$$1.length;
      var v207 = componentsIndex == v431;
      if (v207) {
        componentsIndex = 0;
      }
      var v432 = components$$1[componentsIndex];
      var v208 = v432 != currentChar;
      if (v208) {
        needNewChar = false;
      }
    }
    var v433 = sequence$$13.substring(0, randNum);
    var v434 = components$$1[componentsIndex];
    var v209 = v433 + v434;
    var v435 = randNum + 1;
    var v436 = sequence$$13.length;
    var v210 = sequence$$13.substring(v435, v436);
    sequence$$13 = v209 + v210;
    i$$8++;
    v211 = i$$8 < numMut;
  }
  var v212 = outputWindow.document;
  var v213 = addReturns(sequence$$13);
  v212.write(v213);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v218 = j$$9 < lengthOut$$1;
  for (;v218;) {
    var v437 = Math.random();
    var v438 = components$$2.length;
    var v214 = v437 * v438;
    tempNum$$1 = Math.floor(v214);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v439 = sequence$$14.length;
    var v217 = v439 == 60;
    if (v217) {
      var v215 = outputWindow.document;
      var v216 = sequence$$14 + "\n";
      v215.write(v216);
      sequence$$14 = "";
    }
    j$$9++;
    v218 = j$$9 < lengthOut$$1;
  }
  var v219 = outputWindow.document;
  var v220 = sequence$$14 + "\n";
  v219.write(v220);
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
  var v224 = dnaConformation == "circular";
  if (v224) {
    var v221 = sequence$$15.substring(0, lookAhead);
    shiftValue = v221.length;
    var v593 = sequence$$15.length;
    var v533 = v593 - lookAhead;
    var v534 = sequence$$15.length;
    var v440 = sequence$$15.substring(v533, v534);
    var v222 = v440 + sequence$$15;
    var v223 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v222 + v223;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v225 = outputWindow.document;
  v225.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  var v226 = outputWindow.document;
  var v594 = '<tr><td class="title" width="200px">' + "Site:";
  var v535 = v594 + '</td><td class="title">';
  var v441 = v535 + "Positions:";
  var v227 = v441 + "</td></tr>\n";
  v226.write(v227);
  var i$$9 = 0;
  var v442 = arrayOfItems.length;
  var v243 = i$$9 < v442;
  for (;v243;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v443 = arrayOfItems[i$$9];
    var v228 = v443.match(/\/.+\//);
    matchExp = v228 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    var v595 = arrayOfItems[i$$9];
    var v536 = v595.match(/\)\D*\d+/);
    var v444 = v536.toString();
    var v229 = v444.replace(/\)\D*/, "");
    cutDistance = parseFloat(v229);
    var v235 = matchArray$$1 = matchExp.exec(sequence$$15);
    for (;v235;) {
      var v230 = matchExp.lastIndex;
      matchPosition = v230 - cutDistance;
      var v445 = matchPosition >= lowerLimit;
      if (v445) {
        v445 = matchPosition < upperLimit;
      }
      var v233 = v445;
      if (v233) {
        timesFound++;
        var v231 = tempString$$1 + ", ";
        var v446 = matchPosition - shiftValue;
        var v232 = v446 + 1;
        tempString$$1 = v231 + v232;
      }
      var v447 = matchExp.lastIndex;
      var v537 = RegExp.lastMatch;
      var v448 = v537.length;
      var v234 = v447 - v448;
      matchExp.lastIndex = v234 + 1;
      v235 = matchArray$$1 = matchExp.exec(sequence$$15);
    }
    var v449 = tempString$$1.search(/\d/);
    var v236 = v449 != -1;
    if (v236) {
      tempString$$1 = tempString$$1.replace(/none,\s*/, "");
    }
    var v240 = timesFound == 0;
    if (v240) {
      backGroundClass = "none";
    } else {
      var v239 = timesFound == 1;
      if (v239) {
        backGroundClass = "one";
      } else {
        var v238 = timesFound == 2;
        if (v238) {
          backGroundClass = "two";
        } else {
          var v237 = timesFound == 3;
          if (v237) {
            backGroundClass = "three";
          } else {
            backGroundClass = "many";
          }
        }
      }
    }
    var v241 = outputWindow.document;
    var v684 = '<tr><td class="' + backGroundClass;
    var v666 = v684 + '">';
    var v707 = arrayOfItems[i$$9];
    var v698 = v707.match(/\([^\(]+\)/);
    var v685 = v698.toString();
    var v667 = v685.replace(/\(|\)/g, "");
    var v651 = v666 + v667;
    var v631 = v651 + '</td><td class="';
    var v596 = v631 + backGroundClass;
    var v538 = v596 + '">';
    var v450 = v538 + tempString$$1;
    var v242 = v450 + "</td></tr>\n";
    v241.write(v242);
    timesFound = 0;
    i$$9++;
    var v451 = arrayOfItems.length;
    v243 = i$$9 < v451;
  }
  var v244 = outputWindow.document;
  v244.write("</tbody></table>\n");
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v245 = outputWindow.document;
  v245.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  var v246 = outputWindow.document;
  var v652 = '<tr><td class="title">' + "Pattern:";
  var v632 = v652 + '</td><td class="title">';
  var v597 = v632 + "Times found:";
  var v539 = v597 + '</td><td class="title">';
  var v452 = v539 + "Percentage:";
  var v247 = v452 + "</td></tr>\n";
  v246.write(v247);
  var i$$10 = 0;
  var v453 = arrayOfItems$$1.length;
  var v256 = i$$10 < v453;
  for (;v256;) {
    var tempNumber = 0;
    var v454 = arrayOfItems$$1[i$$10];
    var v248 = v454.match(/\/[^\/]+\//);
    var matchExp$$1 = v248 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    var v455 = sequence$$16.search(matchExp$$1);
    var v250 = v455 != -1;
    if (v250) {
      var v249 = sequence$$16.match(matchExp$$1);
      tempNumber = v249.length;
    }
    var percentage = 0;
    var v540 = originalLength + 1;
    var v633 = arrayOfItems$$1[i$$10];
    var v598 = v633.match(/\d+/);
    var v541 = parseFloat(v598);
    var v456 = v540 - v541;
    var v253 = v456 > 0;
    if (v253) {
      var v251 = 100 * tempNumber;
      var v457 = originalLength + 1;
      var v599 = arrayOfItems$$1[i$$10];
      var v542 = v599.match(/\d+/);
      var v458 = parseFloat(v542);
      var v252 = v457 - v458;
      percentage = v251 / v252;
    }
    var v254 = outputWindow.document;
    var v708 = arrayOfItems$$1[i$$10];
    var v699 = v708.match(/\([^\(]+\)\b/);
    var v686 = v699.toString();
    var v668 = v686.replace(/\(|\)/g, "");
    var v653 = "<tr><td>" + v668;
    var v634 = v653 + "</td><td>";
    var v600 = v634 + tempNumber;
    var v543 = v600 + "</td><td>";
    var v544 = percentage.toFixed(2);
    var v459 = v543 + v544;
    var v255 = v459 + "</td></tr>\n";
    v254.write(v255);
    i$$10++;
    var v460 = arrayOfItems$$1.length;
    v256 = i$$10 < v460;
  }
  var v257 = outputWindow.document;
  v257.write("</tbody></table>\n");
  return true;
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v461 = sequence$$17.length;
  var v264 = v461 > 0;
  for (;v264;) {
    maxNum$$1 = sequence$$17.length;
    var v462 = Math.random();
    var v258 = v462 * maxNum$$1;
    randNum$$1 = Math.floor(v258);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v259 = randNum$$1 + 1;
    var v260 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v259, v260);
    sequence$$17 = tempString1 + tempString2;
    var v463 = tempSeq.length;
    var v263 = v463 == 60;
    if (v263) {
      var v261 = outputWindow.document;
      var v262 = tempSeq + "\n";
      v261.write(v262);
      tempSeq = "";
    }
    var v464 = sequence$$17.length;
    v264 = v464 > 0;
  }
  var v265 = outputWindow.document;
  var v266 = tempSeq + "\n";
  v265.write(v266);
  return true;
}
function splitCodons(theDocument) {
  JAM.startProfile('compute');

  var maxInput$$3 = 5E5;
  var sequences = new Array;
  var v465 = testScript();
  var v267 = v465 == false;
  if (v267) {
    return false;
  }
  var v669 = theDocument.forms;
  var v654 = v669[0];
  var v635 = v654.elements;
  var v601 = v635[0];
  var v545 = checkFormElement(v601);
  var v466 = v545 == false;
  var v547 = !v466;
  if (v547) {
    var v687 = theDocument.forms;
    var v670 = v687[0];
    var v655 = v670.elements;
    var v636 = v655[0];
    var v602 = v636.value;
    var v546 = checkTextLength(v602, maxInput$$3);
    v466 = v546 == false;
  }
  var v268 = v466;
  if (v268) {
    return false;
  }
  openWindow("Split Codons");
  openPre();
  var v637 = theDocument.forms;
  var v603 = v637[0];
  var v548 = v603.elements;
  var v467 = v548[0];
  var v269 = v467.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v269);
  var i$$11 = 0;
  var v468 = arrayOfFasta$$1.length;
  var v280 = i$$11 < v468;
  for (;v280;) {
    var v270 = arrayOfFasta$$1[i$$11];
    var sequence$$18 = getSequenceFromFasta(v270);
    sequence$$18 = removeFormatting(sequence$$18);
    var v271 = arrayOfFasta$$1[i$$11];
    var title$$9 = getTitleFromFasta(v271);
    var v549 = sequence$$18.length;
    var v469 = v549 % 3;
    var v273 = v469 != 0;
    if (v273) {
      var v470 = "Sequence '" + title$$9;
      var v272 = v470 + "' ends in a partial codon that will be removed.";
      alert(v272);
    }
    var length$$11 = sequence$$18.length;
    var seqCount = 1;
    var position1 = getBasesBasedOnCodonPosition(sequence$$18, 1);
    var v274 = outputWindow.document;
    var v688 = ">" + title$$9;
    var v671 = v688 + ";codon_positon_1_bases;length=";
    var v672 = position1.length;
    var v656 = v671 + v672;
    var v638 = v656 + ";source_length=";
    var v604 = v638 + length$$11;
    var v550 = v604 + "\n";
    var v551 = addReturns(position1);
    var v471 = v550 + v551;
    var v275 = v471 + "\n\n";
    v274.write(v275);
    var position2 = getBasesBasedOnCodonPosition(sequence$$18, 2);
    var v276 = outputWindow.document;
    var v689 = ">" + title$$9;
    var v673 = v689 + ";codon_positon_2_bases;length=";
    var v674 = position2.length;
    var v657 = v673 + v674;
    var v639 = v657 + ";source_length=";
    var v605 = v639 + length$$11;
    var v552 = v605 + "\n";
    var v553 = addReturns(position2);
    var v472 = v552 + v553;
    var v277 = v472 + "\n\n";
    v276.write(v277);
    var position3 = getBasesBasedOnCodonPosition(sequence$$18, 3);
    var v278 = outputWindow.document;
    var v690 = ">" + title$$9;
    var v675 = v690 + ";codon_positon_3_bases;length=";
    var v676 = position3.length;
    var v658 = v675 + v676;
    var v640 = v658 + ";source_length=";
    var v606 = v640 + length$$11;
    var v554 = v606 + "\n";
    var v555 = addReturns(position3);
    var v473 = v554 + v555;
    var v279 = v473 + "\n\n";
    v278.write(v279);
    seqCount++;
    i$$11++;
    var v474 = arrayOfFasta$$1.length;
    v280 = i$$11 < v474;
  }
  closePre();
  closeWindow();

  JAM.stopProfile('compute');
  return true;
}
function getBasesBasedOnCodonPosition(sequence$$19, position) {
  function v2(str$$8, p1$$2, p2, offset$$10, s$$4) {
    return p2;
  }
  var re$$3;
  var v283 = position == 1;
  if (v283) {
    re$$3 = "((.)..)";
  } else {
    var v282 = position == 2;
    if (v282) {
      re$$3 = "(.(.).)";
    } else {
      var v281 = position == 3;
      if (v281) {
        re$$3 = "(..(.))";
      }
    }
  }
  var v284 = sequence$$19.length;
  var partial_codon_length = v284 % 3;
  var v556 = ".{" + partial_codon_length;
  var v475 = v556 + "}$";
  var v285 = new RegExp(v475);
  sequence$$19 = sequence$$19.replace(v285, "");
  var v286 = new RegExp(re$$3, "g");
  return sequence$$19.replace(v286, v2);
}
document.onload = v3;
var v287 = document.getElementById("submitbtn");
v287.onclick = v4;
var v288 = document.getElementById("clearbtn");
v288.onclick = v5

}

JAM.stopProfile('load');
