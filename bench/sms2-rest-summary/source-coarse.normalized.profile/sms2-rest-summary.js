
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
function v4() {
  var v546 = document.forms;
  var v470 = v546[0];
  var v283 = v470.elements;
  var v5 = v283[0];
  v5.value = " ";
  return;
}
function v3() {
  try {
    restSummary();
  } catch (e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    alert(v6);
  }
  return;
}
function v2() {
  var v284 = document.main_form;
  var v7 = v284.main_submit;
  v7.focus();
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
  var v8 = arrayOfSequences[0];
  var lengthOfAlign = v8.length;
  var v285 = arrayOfSequences.length;
  var v9 = v285 < 2;
  if (v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v286 = arrayOfTitles.length;
  var v11 = i$$1 < v286;
  for (;v11;) {
    var v598 = arrayOfTitles[i$$1];
    var v547 = v598.search(/\S/);
    var v471 = v547 == -1;
    var v549 = !v471;
    if (v549) {
      var v599 = arrayOfSequences[i$$1];
      var v548 = v599.search(/\S/);
      v471 = v548 == -1;
    }
    var v287 = v471;
    var v473 = !v287;
    if (v473) {
      var v550 = arrayOfSequences[i$$1];
      var v472 = v550.length;
      v287 = v472 != lengthOfAlign;
    }
    var v10 = v287;
    if (v10) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v288 = arrayOfTitles.length;
    v11 = i$$1 < v288;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v634 = codonTable.search(/AmAcid/);
  var v600 = v634 == -1;
  var v636 = !v600;
  if (v636) {
    var v635 = codonTable.search(/Codon/);
    v600 = v635 == -1;
  }
  var v551 = v600;
  var v602 = !v551;
  if (v602) {
    var v601 = codonTable.search(/Number/);
    v551 = v601 == -1;
  }
  var v474 = v551;
  var v553 = !v474;
  if (v553) {
    var v552 = codonTable.search(/\/1000/);
    v474 = v552 == -1;
  }
  var v289 = v474;
  var v476 = !v289;
  if (v476) {
    var v475 = codonTable.search(/Fraction\s*\.\./);
    v289 = v475 == -1;
  }
  var v12 = v289;
  if (v12) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v477 = formElement.value;
  var v290 = v477.search(/\S/);
  var v13 = v290 == -1;
  if (v13) {
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
  var v291 = arrayOfPatterns.length;
  var v16 = z$$2 < v291;
  for (;v16;) {
    var v478 = arrayOfPatterns[z$$2];
    var v292 = v478.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v14 = v292 == -1;
    if (v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v479 = arrayOfPatterns[z$$2];
    var v293 = moreExpressionCheck(v479);
    var v15 = v293 == false;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v294 = arrayOfPatterns.length;
    v16 = z$$2 < v294;
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v295 = arrayOfPatterns.length;
  var v22 = j < v295;
  for (;v22;) {
    var v480 = arrayOfPatterns[j];
    var v296 = v480.match(/\/.+\//);
    var v19 = v296 + "gi";
    var v835 = eval(v19);
    geneticCodeMatchExp[j] = v835;
    var v297 = arrayOfPatterns[j];
    var v20 = v297.match(/=[a-zA-Z\*]/);
    var v836 = v20.toString();
    geneticCodeMatchResult[j] = v836;
    var v21 = geneticCodeMatchResult[j];
    var v837 = v21.replace(/=/g, "");
    geneticCodeMatchResult[j] = v837;
    j++;
    var v298 = arrayOfPatterns.length;
    v22 = j < v298;
  }
  var i$$2 = 0;
  var v481 = testSequence.length;
  var v299 = v481 - 3;
  var v29 = i$$2 <= v299;
  for (;v29;) {
    var v23 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v23);
    j = 0;
    var v300 = geneticCodeMatchExp.length;
    var v27 = j < v300;
    for (;v27;) {
      var v482 = geneticCodeMatchExp[j];
      var v301 = codon.search(v482);
      var v26 = v301 != -1;
      if (v26) {
        var v25 = oneMatch == true;
        if (v25) {
          var v302 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v24 = v302 + ".";
          alert(v24);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v303 = geneticCodeMatchExp.length;
      v27 = j < v303;
    }
    var v28 = oneMatch == false;
    if (v28) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v483 = testSequence.length;
    var v304 = v483 - 3;
    v29 = i$$2 <= v304;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v305 = arrayOfPatterns$$1.length;
  var v31 = z$$3 < v305;
  for (;v31;) {
    var v484 = arrayOfPatterns$$1[z$$3];
    var v306 = v484.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v30 = v306 != -1;
    if (v30) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v307 = arrayOfPatterns$$1.length;
    v31 = z$$3 < v307;
  }
  var i$$3 = 0;
  var v308 = arrayOfPatterns$$1.length;
  var v35 = i$$3 < v308;
  for (;v35;) {
    var v485 = arrayOfPatterns$$1[i$$3];
    var v309 = "[" + v485;
    var v32 = v309 + "]";
    var re = new RegExp(v32, "gi");
    var j$$1 = i$$3 + 1;
    var v310 = arrayOfPatterns$$1.length;
    var v34 = j$$1 < v310;
    for (;v34;) {
      var v486 = arrayOfPatterns$$1[j$$1];
      var v311 = v486.search(re);
      var v33 = v311 != -1;
      if (v33) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v312 = arrayOfPatterns$$1.length;
      v34 = j$$1 < v312;
    }
    i$$3++;
    var v313 = arrayOfPatterns$$1.length;
    v35 = i$$3 < v313;
  }
  return true;
}
function checkRestPatterns() {
  var arrayOfPatterns$$2 = itemsToCheck;
  var z$$4 = 0;
  var v314 = arrayOfPatterns$$2.length;
  var v38 = z$$4 < v314;
  for (;v38;) {
    var v487 = arrayOfPatterns$$2[z$$4];
    var v315 = v487.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v36 = v315 == -1;
    if (v36) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v488 = arrayOfPatterns$$2[z$$4];
    var v316 = moreExpressionCheck(v488);
    var v37 = v316 == false;
    if (v37) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v317 = arrayOfPatterns$$2.length;
    v38 = z$$4 < v317;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v554 = getSequenceFromFasta(text$$7);
  var v489 = v554.replace(/[^A-Za-z]/g, "");
  var v318 = v489.length;
  var v40 = v318 > maxInput;
  if (v40) {
    var v319 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v39 = v319 + " characters.";
    alert(v39);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v320 = text$$8.length;
  var v42 = v320 > maxInput$$1;
  if (v42) {
    var v321 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v41 = v321 + " characters.";
    alert(v41);
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
  var v43 = outputWindow.document;
  v43.write("</form>");
  return true;
}
function closePre() {
  var v44 = outputWindow.document;
  v44.write("</div>");
  var v45 = outputWindow.document;
  v45.write("</pre>\n");
  return;
}
function closeTextArea() {
  var v46 = outputWindow.document;
  v46.write("</textarea>");
  return true;
}
function closeWindow() {
  var v47 = outputWindow.document;
  v47.write("</body>\n</html>\n");
  outputWindow.status = "Done.";
  var v48 = outputWindow.document;
  v48.close();
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
  var v322 = alignArray.length;
  var v49 = v322 < 3;
  if (v49) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v323 = alignArray.length;
  var v51 = i$$4 < v323;
  for (;v51;) {
    var v490 = alignArray[i$$4];
    var v324 = v490.search(/[^\s]+\s/);
    var v50 = v324 == -1;
    if (v50) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v325 = alignArray.length;
    v51 = i$$4 < v325;
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
  var v326 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v54 = v326 != -1;
  if (v54) {
    var v53 = matchArray = re$$1.exec(sequenceData);
    for (;v53;) {
      var v52 = matchArray[0];
      arrayOfFasta.push(v52);
      v53 = matchArray = re$$1.exec(sequenceData);
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v327 = sequence$$2.length;
  var v55 = "&gt;results for " + v327;
  var stringToReturn = v55 + " residue sequence ";
  var v328 = fastaSequenceTitle.search(/[^\s]/);
  var v57 = v328 != -1;
  if (v57) {
    var v329 = stringToReturn + '"';
    var v56 = v329 + fastaSequenceTitle;
    stringToReturn = v56 + '"';
  }
  var v330 = stringToReturn + ' starting "';
  var v331 = sequence$$2.substring(0, 10);
  var v58 = v330 + v331;
  stringToReturn = v58 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v332 = sequenceOne.length;
  var v59 = "Search results for " + v332;
  var stringToReturn$$1 = v59 + " residue sequence ";
  var v333 = fastaSequenceTitleOne.search(/[^\s]/);
  var v61 = v333 != -1;
  if (v61) {
    var v334 = stringToReturn$$1 + '"';
    var v60 = v334 + fastaSequenceTitleOne;
    stringToReturn$$1 = v60 + '"';
  }
  var v335 = stringToReturn$$1 + ' starting "';
  var v336 = sequenceOne.substring(0, 10);
  var v62 = v335 + v336;
  stringToReturn$$1 = v62 + '"\n';
  var v337 = stringToReturn$$1 + "and ";
  var v338 = sequenceTwo.length;
  var v63 = v337 + v338;
  stringToReturn$$1 = v63 + " residue sequence ";
  var v339 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v65 = v339 != -1;
  if (v65) {
    var v340 = stringToReturn$$1 + '"';
    var v64 = v340 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v64 + '"';
  }
  var v341 = stringToReturn$$1 + ' starting "';
  var v342 = sequenceTwo.substring(0, 10);
  var v66 = v341 + v342;
  stringToReturn$$1 = v66 + '"';
  var v67 = '<div class="info">' + stringToReturn$$1;
  return v67 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v68 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v68);
  var j$$2 = 0;
  var v343 = arrayOfPatterns$$3.length;
  var v70 = j$$2 < v343;
  for (;v70;) {
    var v491 = arrayOfPatterns$$3[j$$2];
    var v344 = v491.match(/\/.+\//);
    var v69 = v344 + "gi";
    var v838 = eval(v69);
    geneticCodeMatchExp$$1[j$$2] = v838;
    j$$2++;
    var v345 = arrayOfPatterns$$3.length;
    v70 = j$$2 < v345;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v71 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v71);
  var j$$3 = 0;
  var v346 = arrayOfPatterns$$4.length;
  var v74 = j$$3 < v346;
  for (;v74;) {
    var v347 = arrayOfPatterns$$4[j$$3];
    var v72 = v347.match(/=[a-zA-Z\*]/);
    var v839 = v72.toString();
    geneticCodeMatchResult$$1[j$$3] = v839;
    var v73 = geneticCodeMatchResult$$1[j$$3];
    var v840 = v73.replace(/=/g, "");
    geneticCodeMatchResult$$1[j$$3] = v840;
    j$$3++;
    var v348 = arrayOfPatterns$$4.length;
    v74 = j$$3 < v348;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v349 = sequence$$3.length;
  var v75 = "Results for " + v349;
  var stringToReturn$$2 = v75 + " residue sequence ";
  var v350 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v77 = v350 != -1;
  if (v77) {
    var v351 = stringToReturn$$2 + '"';
    var v76 = v351 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v76 + '"';
  }
  var v352 = stringToReturn$$2 + ' starting "';
  var v353 = sequence$$3.substring(0, 10);
  var v78 = v352 + v353;
  stringToReturn$$2 = v78 + '"';
  var v79 = '<div class="info">' + stringToReturn$$2;
  return v79 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v492 = "Results for " + topology;
  var v354 = v492 + " ";
  var v355 = sequence$$4.length;
  var v80 = v354 + v355;
  var stringToReturn$$3 = v80 + " residue sequence ";
  var v356 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v82 = v356 != -1;
  if (v82) {
    var v357 = stringToReturn$$3 + '"';
    var v81 = v357 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v81 + '"';
  }
  var v358 = stringToReturn$$3 + ' starting "';
  var v359 = sequence$$4.substring(0, 10);
  var v83 = v358 + v359;
  stringToReturn$$3 = v83 + '"';
  var v84 = '<div class="info">' + stringToReturn$$3;
  return v84 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v360 = sequenceOne$$1.length;
  var v85 = "Alignment results for " + v360;
  var stringToReturn$$4 = v85 + " residue sequence ";
  var v361 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v87 = v361 != -1;
  if (v87) {
    var v362 = stringToReturn$$4 + '"';
    var v86 = v362 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v86 + '"';
  }
  var v363 = stringToReturn$$4 + ' starting "';
  var v364 = sequenceOne$$1.substring(0, 10);
  var v88 = v363 + v364;
  stringToReturn$$4 = v88 + '"\n';
  var v365 = stringToReturn$$4 + "and ";
  var v366 = sequenceTwo$$1.length;
  var v89 = v365 + v366;
  stringToReturn$$4 = v89 + " residue sequence ";
  var v367 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v91 = v367 != -1;
  if (v91) {
    var v368 = stringToReturn$$4 + '"';
    var v90 = v368 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v90 + '"';
  }
  var v369 = stringToReturn$$4 + ' starting "';
  var v370 = sequenceTwo$$1.substring(0, 10);
  var v92 = v369 + v370;
  stringToReturn$$4 = v92 + '"';
  var v93 = '<div class="info">' + stringToReturn$$4;
  return v93 + "</div>\n";
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v95 = j$$4 < lengthOut;
  for (;v95;) {
    var v371 = Math.random();
    var v372 = components.length;
    var v94 = v371 * v372;
    tempNum = Math.floor(v94);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4++;
    v95 = j$$4 < lengthOut;
  }
  return sequenceArray.join("");
}
function getSequenceFromFasta(sequenceRecord) {
  var v373 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v96 = v373 != -1;
  if (v96) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "");
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v374 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v98 = v374 != -1;
  if (v98) {
    var v97 = sequenceRecord$$1.match(/\>[^\f\n\r]+[\f\n\r]/, "");
    fastaTitle = v97.toString();
    fastaTitle = fastaTitle.replace(/\>|[\f\n\r]/g, "");
    fastaTitle = fastaTitle.replace(/\s{2,}/g, " ");
    fastaTitle = fastaTitle.replace(/[\<\>]/gi, "");
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  var v713 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v705 = v713 != -1;
  var v715 = !v705;
  if (v715) {
    var v714 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    v705 = v714 != -1;
  }
  var v695 = v705;
  var v707 = !v695;
  if (v707) {
    var v706 = expressionToCheck.search(/\[\]/);
    v695 = v706 != -1;
  }
  var v685 = v695;
  var v697 = !v685;
  if (v697) {
    var v696 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
    v685 = v696 != -1;
  }
  var v671 = v685;
  var v687 = !v671;
  if (v687) {
    var v686 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
    v671 = v686 != -1;
  }
  var v654 = v671;
  var v673 = !v654;
  if (v673) {
    var v672 = expressionToCheck.search(/\|\|/);
    v654 = v672 != -1;
  }
  var v637 = v654;
  var v656 = !v637;
  if (v656) {
    var v655 = expressionToCheck.search(/\/\|/);
    v637 = v655 != -1;
  }
  var v603 = v637;
  var v639 = !v603;
  if (v639) {
    var v638 = expressionToCheck.search(/\|\//);
    v603 = v638 != -1;
  }
  var v555 = v603;
  var v605 = !v555;
  if (v605) {
    var v604 = expressionToCheck.search(/\[.\]/);
    v555 = v604 != -1;
  }
  var v493 = v555;
  var v557 = !v493;
  if (v557) {
    var v556 = expressionToCheck.search(/\</);
    v493 = v556 != -1;
  }
  var v375 = v493;
  var v495 = !v375;
  if (v495) {
    var v494 = expressionToCheck.search(/\>/);
    v375 = v494 != -1;
  }
  var v99 = v375;
  if (v99) {
    return false;
  }
  return true;
}
function openForm() {
  var v100 = outputWindow.document;
  v100.write('<form action="">\n');
  return true;
}
function openPre() {
  var v101 = outputWindow.document;
  v101.write("<pre>");
  var v102 = outputWindow.document;
  v102.write('<div class="pre">');
  return;
}
function openTextArea() {
  var v103 = outputWindow.document;
  v103.write('<br /><textarea rows="6" cols="61">\n');
  return true;
}
function openWindow() {
  var title$$5 = "Restriction Summary";
  _openWindow(title$$5);
  return;
}
function _openWindow(title$$6) {
  var isColor = true;
  outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  outputWindow.focus();
  var v104 = outputWindow.document;
  var v558 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v496 = v558 + "<head>\n";
  var v376 = v496 + "<title>Sequence Manipulation Suite</title>\n";
  var v105 = v376 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v104.write(v105);
  if (isColor) {
    var v106 = outputWindow.document;
    var v731 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v726 = v731 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v721 = v726 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v716 = v721 + "div.info {font-weight: bold}\n";
    var v708 = v716 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v698 = v708 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v688 = v698 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v674 = v688 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v657 = v674 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v640 = v657 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v606 = v640 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v559 = v606 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v497 = v559 + "td.many {color: #000000}\n";
    var v377 = v497 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v107 = v377 + "</style>\n";
    v106.write(v107);
  } else {
    var v108 = outputWindow.document;
    var v736 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v732 = v736 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v727 = v732 + "div.title {display: none}\n";
    var v722 = v727 + "div.info {font-weight: bold}\n";
    var v717 = v722 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v709 = v717 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v699 = v709 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v689 = v699 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v675 = v689 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v658 = v675 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v641 = v658 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v607 = v641 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v560 = v607 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v498 = v560 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v378 = v498 + "img {display: none}\n";
    var v109 = v378 + "</style>\n";
    v108.write(v109);
  }
  var v110 = outputWindow.document;
  var v561 = "</head>\n" + '<body class="main">\n';
  var v499 = v561 + '<div class="title">';
  var v379 = v499 + title$$6;
  var v111 = v379 + " results</div>\n";
  v110.write(v111);
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
  var v112 = outputWindow.document;
  var v562 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v500 = v562 + "<head>\n";
  var v380 = v500 + "<title>Sequence Manipulation Suite</title>\n";
  var v113 = v380 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v112.write(v113);
  if (isBackground) {
    var v114 = outputWindow.document;
    var v733 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v728 = v733 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v723 = v728 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v718 = v723 + "div.info {font-weight: bold}\n";
    var v710 = v718 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v700 = v710 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v690 = v700 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v676 = v690 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v659 = v676 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v642 = v659 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v608 = v642 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v563 = v608 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v501 = v563 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v381 = v501 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v115 = v381 + "</style>\n";
    v114.write(v115);
  } else {
    var v116 = outputWindow.document;
    var v739 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v737 = v739 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v734 = v737 + "div.title {display: none}\n";
    var v729 = v734 + "div.info {font-weight: bold}\n";
    var v724 = v729 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v719 = v724 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v711 = v719 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v701 = v711 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v691 = v701 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v677 = v691 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v660 = v677 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v643 = v660 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v609 = v643 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v564 = v609 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v502 = v564 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v382 = v502 + "img {display: none}\n";
    var v117 = v382 + "</style>\n";
    v116.write(v117);
  }
  var v118 = outputWindow.document;
  var v565 = "</head>\n" + '<body class="main">\n';
  var v503 = v565 + '<div class="title">';
  var v383 = v503 + title$$8;
  var v119 = v383 + " results</div>\n";
  v118.write(v119);
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
  var v384 = dnaSequence$$1.search(/./);
  var v120 = v384 != -1;
  if (v120) {
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
  var v121 = j$$5 < lengthOfColumn;
  for (;v121;) {
    tempString = tempString + " ";
    j$$5++;
    v121 = j$$5 < lengthOfColumn;
  }
  var v122 = tempString + theNumber;
  theNumber = v122 + " ";
  var v123 = sequenceToAppend + theNumber;
  sequenceToAppend = v123 + tabIn;
  return sequenceToAppend;
}
function testScript() {
  function v1(str$$7, p1$$1, offset$$9, s$$3) {
    return p1$$1 + "X";
  }
  var testArray = new Array;
  var testString = "1234567890";
  testArray.push(testString);
  var v385 = testArray[0];
  var v124 = v385 != testString;
  if (v124) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v386 = testString.search(re$$2);
  var v125 = v386 == -1;
  if (v125) {
    alert("Regular expression 'm' flag not supported. See browser compatibility page.");
    return false;
  }
  var caughtException = false;
  try {
    re$$2 = eval("Exception handling not supported. Check browser compatibility page.");
  } catch (e$$4) {
    caughtException = true;
  }
  var v126 = !caughtException;
  if (v126) {
    alert("Exception handling not supported. See browser compatibility page.");
  }
  testString = "123";
  testString = testString.replace(/(\d)/g, v1);
  var v127 = testString != "1X2X3X";
  if (v127) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false;
  }
  var testNum = 2489.8237;
  var v387 = testNum.toFixed(3);
  var v128 = v387 != 2489.824;
  if (v128) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v388 = testNum.toPrecision(5);
  var v129 = v388 != 2489.8;
  if (v129) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v389 = theNumber$$1.search(/\d/);
  var v130 = v389 == -1;
  if (v130) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v610 = emblFile.search(/ID/);
  var v566 = v610 == -1;
  var v612 = !v566;
  if (v612) {
    var v611 = emblFile.search(/AC/);
    v566 = v611 == -1;
  }
  var v504 = v566;
  var v568 = !v504;
  if (v568) {
    var v567 = emblFile.search(/DE/);
    v504 = v567 == -1;
  }
  var v390 = v504;
  var v506 = !v390;
  if (v506) {
    var v505 = emblFile.search(/SQ/);
    v390 = v505 == -1;
  }
  var v131 = v390;
  if (v131) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v391 = theNumber$$2.search(/\d/);
  var v132 = v391 == -1;
  if (v132) {
    alert("Please enter a number.");
    return false;
  }
  var v134 = theNumber$$2 > maxInput$$2;
  if (v134) {
    var v392 = "Please enter a number less than or equal to " + maxInput$$2;
    var v133 = v392 + ".";
    alert(v133);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v393 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v135 = v393 != -1;
  if (v135) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v394 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v136 = v394 != -1;
  if (v136) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v613 = genBankFile.search(/LOCUS/);
  var v569 = v613 == -1;
  var v615 = !v569;
  if (v615) {
    var v614 = genBankFile.search(/DEFINITION/);
    v569 = v614 == -1;
  }
  var v507 = v569;
  var v571 = !v507;
  if (v571) {
    var v570 = genBankFile.search(/ACCESSION/);
    v507 = v570 == -1;
  }
  var v395 = v507;
  var v509 = !v395;
  if (v509) {
    var v508 = genBankFile.search(/ORIGIN/);
    v395 = v508 == -1;
  }
  var v137 = v395;
  if (v137) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v616 = genBankFile$$1.search(/LOCUS/);
  var v572 = v616 == -1;
  var v618 = !v572;
  if (v618) {
    var v617 = genBankFile$$1.search(/DEFINITION/);
    v572 = v617 == -1;
  }
  var v510 = v572;
  var v574 = !v510;
  if (v574) {
    var v573 = genBankFile$$1.search(/ACCESSION/);
    v510 = v573 == -1;
  }
  var v396 = v510;
  var v512 = !v396;
  if (v512) {
    var v511 = genBankFile$$1.search(/ORIGIN/);
    v396 = v511 == -1;
  }
  var v138 = v396;
  if (v138) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v397 = genBankFile$$1.search(/FEATURES {13}/);
  var v139 = v397 == -1;
  if (v139) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v619 = emblFile$$1.search(/ID/);
  var v575 = v619 == -1;
  var v621 = !v575;
  if (v621) {
    var v620 = emblFile$$1.search(/AC/);
    v575 = v620 == -1;
  }
  var v513 = v575;
  var v577 = !v513;
  if (v577) {
    var v576 = emblFile$$1.search(/DE/);
    v513 = v576 == -1;
  }
  var v398 = v513;
  var v515 = !v398;
  if (v515) {
    var v514 = emblFile$$1.search(/SQ/);
    v398 = v514 == -1;
  }
  var v140 = v398;
  if (v140) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v399 = emblFile$$1.search(/^FT/m);
  var v141 = v399 == -1;
  if (v141) {
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
  var v148 = i$$5 < stopBase;
  for (;v148;) {
    var v142 = i$$5 + 1;
    lineOfText = rightNum(v142, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v400 = basePerLine / groupSize;
    var v145 = j$$6 <= v400;
    for (;v145;) {
      var v144 = k < groupSize;
      for (;v144;) {
        var v401 = k + i$$5;
        var v143 = text$$10.charAt(v401);
        lineOfText = lineOfText + v143;
        k = k + 1;
        v144 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v402 = basePerLine / groupSize;
      v145 = j$$6 <= v402;
    }
    var v146 = outputWindow.document;
    var v147 = lineOfText + "\n";
    v146.write(v147);
    lineOfText = "";
    v148 = i$$5 < stopBase;
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
    var v403 = adjustment < 0;
    if (v403) {
      v403 = adjusted >= 0;
    }
    var v149 = v403;
    if (v149) {
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
  var v180 = i$$6 < stopBase$$2;
  for (;v180;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v404 = basePerLine$$2 / groupSize$$2;
    var v156 = j$$7 <= v404;
    for (;v156;) {
      var v152 = k$$1 < groupSize$$2;
      for (;v152;) {
        var v405 = i$$6 + k$$1;
        var v150 = v405 >= stopBase$$2;
        if (v150) {
          break;
        }
        var v406 = k$$1 + i$$6;
        var v151 = text$$12.charAt(v406);
        lineOfText$$1 = lineOfText$$1 + v151;
        k$$1 = k$$1 + 1;
        v152 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v154 = numberPosition$$1 == "above";
      if (v154) {
        var v407 = adjustNumbering(i$$6, numberingAdjustment);
        var v153 = rightNum(v407, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v153;
      }
      var v155 = i$$6 >= stopBase$$2;
      if (v155) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v408 = basePerLine$$2 / groupSize$$2;
      v156 = j$$7 <= v408;
    }
    var v179 = numberPosition$$1 == "left";
    if (v179) {
      var v157 = outputWindow.document;
      var v578 = adjustNumbering(lineNum, numberingAdjustment);
      var v516 = rightNum(v578, "", 8, tabIn$$3);
      var v409 = v516 + lineOfText$$1;
      var v158 = v409 + "\n";
      v157.write(v158);
      var v162 = strands$$1 == "two";
      if (v162) {
        var v159 = outputWindow.document;
        var v579 = adjustNumbering(lineNum, numberingAdjustment);
        var v517 = rightNum(v579, "", 8, tabIn$$3);
        var v518 = complement(lineOfText$$1);
        var v410 = v517 + v518;
        var v160 = v410 + "\n";
        v159.write(v160);
        var v161 = outputWindow.document;
        v161.write("\n");
      }
    } else {
      var v178 = numberPosition$$1 == "right";
      if (v178) {
        var v163 = outputWindow.document;
        var v519 = adjustNumbering(i$$6, numberingAdjustment);
        var v411 = lineOfText$$1 + v519;
        var v164 = v411 + "\n";
        v163.write(v164);
        var v168 = strands$$1 == "two";
        if (v168) {
          var v165 = outputWindow.document;
          var v520 = complement(lineOfText$$1);
          var v521 = adjustNumbering(i$$6, numberingAdjustment);
          var v412 = v520 + v521;
          var v166 = v412 + "\n";
          v165.write(v166);
          var v167 = outputWindow.document;
          v167.write("\n");
        }
      } else {
        var v177 = numberPosition$$1 == "above";
        if (v177) {
          var v169 = outputWindow.document;
          var v170 = aboveNum + "\n";
          v169.write(v170);
          var v171 = outputWindow.document;
          var v172 = lineOfText$$1 + "\n";
          v171.write(v172);
          var v176 = strands$$1 == "two";
          if (v176) {
            var v173 = outputWindow.document;
            var v413 = complement(lineOfText$$1);
            var v174 = v413 + "\n";
            v173.write(v174);
            var v175 = outputWindow.document;
            v175.write("\n");
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v180 = i$$6 < stopBase$$2;
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
  var v199 = i$$7 < stopBase$$3;
  for (;v199;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v414 = basePerLine$$3 / groupSize$$3;
    var v187 = j$$8 <= v414;
    for (;v187;) {
      var v183 = k$$2 < groupSize$$3;
      for (;v183;) {
        var v415 = i$$7 + k$$2;
        var v181 = v415 >= stopBase$$3;
        if (v181) {
          break;
        }
        var v416 = k$$2 + i$$7;
        var v182 = text$$13.charAt(v416);
        lineOfText$$2 = lineOfText$$2 + v182;
        k$$2 = k$$2 + 1;
        v183 = k$$2 < groupSize$$3;
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v185 = numberPosition$$2 == "above";
      if (v185) {
        var v184 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = aboveNum$$1 + v184;
      }
      var v186 = i$$7 >= stopBase$$3;
      if (v186) {
        break;
      }
      k$$2 = 0;
      j$$8++;
      var v417 = basePerLine$$3 / groupSize$$3;
      v187 = j$$8 <= v417;
    }
    var v198 = numberPosition$$2 == "left";
    if (v198) {
      var v188 = outputWindow.document;
      var v522 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v418 = v522 + lineOfText$$2;
      var v189 = v418 + "\n";
      v188.write(v189);
    } else {
      var v197 = numberPosition$$2 == "right";
      if (v197) {
        var v190 = outputWindow.document;
        var v419 = lineOfText$$2 + i$$7;
        var v191 = v419 + "\n";
        v190.write(v191);
      } else {
        var v196 = numberPosition$$2 == "above";
        if (v196) {
          var v192 = outputWindow.document;
          var v193 = aboveNum$$1 + "\n";
          v192.write(v193);
          var v194 = outputWindow.document;
          var v195 = lineOfText$$2 + "\n";
          v194.write(v195);
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v199 = i$$7 < stopBase$$3;
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
  var v580 = sequence$$13.length;
  var v523 = v580 <= firstIndexToMutate;
  var v581 = !v523;
  if (v581) {
    v523 = lastIndexToMutate < 0;
  }
  var v420 = v523;
  var v524 = !v420;
  if (v524) {
    v420 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v200 = v420;
  if (v200) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v208 = i$$8 < numMut;
  for (;v208;) {
    maxNum = sequence$$13.length;
    var v421 = Math.random();
    var v201 = v421 * maxNum;
    randNum = Math.floor(v201);
    var v422 = randNum < firstIndexToMutate;
    var v525 = !v422;
    if (v525) {
      v422 = randNum > lastIndexToMutate;
    }
    var v202 = v422;
    if (v202) {
      numMut++;
      i$$8++;
      v208 = i$$8 < numMut;
      continue;
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for (;needNewChar;) {
      var v423 = Math.random();
      var v424 = components$$1.length;
      var v203 = v423 * v424;
      componentsIndex = Math.round(v203);
      var v425 = components$$1.length;
      var v204 = componentsIndex == v425;
      if (v204) {
        componentsIndex = 0;
      }
      var v426 = components$$1[componentsIndex];
      var v205 = v426 != currentChar;
      if (v205) {
        needNewChar = false;
      }
    }
    var v427 = sequence$$13.substring(0, randNum);
    var v428 = components$$1[componentsIndex];
    var v206 = v427 + v428;
    var v429 = randNum + 1;
    var v430 = sequence$$13.length;
    var v207 = sequence$$13.substring(v429, v430);
    sequence$$13 = v206 + v207;
    i$$8++;
    v208 = i$$8 < numMut;
  }
  var v209 = outputWindow.document;
  var v210 = addReturns(sequence$$13);
  v209.write(v210);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v215 = j$$9 < lengthOut$$1;
  for (;v215;) {
    var v431 = Math.random();
    var v432 = components$$2.length;
    var v211 = v431 * v432;
    tempNum$$1 = Math.floor(v211);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v433 = sequence$$14.length;
    var v214 = v433 == 60;
    if (v214) {
      var v212 = outputWindow.document;
      var v213 = sequence$$14 + "\n";
      v212.write(v213);
      sequence$$14 = "";
    }
    j$$9++;
    v215 = j$$9 < lengthOut$$1;
  }
  var v216 = outputWindow.document;
  var v217 = sequence$$14 + "\n";
  v216.write(v217);
  return true;
}
function writeRestrictionSites(sequence$$15, dnaConformation) {
  var arrayOfItems = itemsToCheck;
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
  var v221 = dnaConformation == "circular";
  if (v221) {
    var v218 = sequence$$15.substring(0, lookAhead);
    shiftValue = v218.length;
    var v582 = sequence$$15.length;
    var v526 = v582 - lookAhead;
    var v527 = sequence$$15.length;
    var v434 = sequence$$15.substring(v526, v527);
    var v219 = v434 + sequence$$15;
    var v220 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v219 + v220;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v222 = outputWindow.document;
  v222.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  var v223 = outputWindow.document;
  var v583 = '<tr><td class="title" width="200px">' + "Site:";
  var v528 = v583 + '</td><td class="title">';
  var v435 = v528 + "Positions:";
  var v224 = v435 + "</td></tr>\n";
  v223.write(v224);
  var i$$9 = 0;
  var v436 = arrayOfItems.length;
  var v240 = i$$9 < v436;
  for (;v240;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v437 = arrayOfItems[i$$9];
    var v225 = v437.match(/\/.+\//);
    matchExp = v225 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    var v584 = arrayOfItems[i$$9];
    var v529 = v584.match(/\)\D*\d+/);
    var v438 = v529.toString();
    var v226 = v438.replace(/\)\D*/, "");
    cutDistance = parseFloat(v226);
    var v232 = matchArray$$1 = matchExp.exec(sequence$$15);
    for (;v232;) {
      var v227 = matchExp.lastIndex;
      matchPosition = v227 - cutDistance;
      var v439 = matchPosition >= lowerLimit;
      if (v439) {
        v439 = matchPosition < upperLimit;
      }
      var v230 = v439;
      if (v230) {
        timesFound++;
        var v228 = tempString$$1 + ", ";
        var v440 = matchPosition - shiftValue;
        var v229 = v440 + 1;
        tempString$$1 = v228 + v229;
      }
      var v441 = matchExp.lastIndex;
      var v530 = RegExp.lastMatch;
      var v442 = v530.length;
      var v231 = v441 - v442;
      matchExp.lastIndex = v231 + 1;
      v232 = matchArray$$1 = matchExp.exec(sequence$$15);
    }
    var v443 = tempString$$1.search(/\d/);
    var v233 = v443 != -1;
    if (v233) {
      tempString$$1 = tempString$$1.replace(/none,\s*/, "");
    }
    var v237 = timesFound == 0;
    if (v237) {
      backGroundClass = "none";
    } else {
      var v236 = timesFound == 1;
      if (v236) {
        backGroundClass = "one";
      } else {
        var v235 = timesFound == 2;
        if (v235) {
          backGroundClass = "two";
        } else {
          var v234 = timesFound == 3;
          if (v234) {
            backGroundClass = "three";
          } else {
            backGroundClass = "many";
          }
        }
      }
    }
    var v238 = outputWindow.document;
    var v678 = '<tr><td class="' + backGroundClass;
    var v661 = v678 + '">';
    var v702 = arrayOfItems[i$$9];
    var v692 = v702.match(/\([^\(]+\)/);
    var v679 = v692.toString();
    var v662 = v679.replace(/\(|\)/g, "");
    var v644 = v661 + v662;
    var v622 = v644 + '</td><td class="';
    var v585 = v622 + backGroundClass;
    var v531 = v585 + '">';
    var v444 = v531 + tempString$$1;
    var v239 = v444 + "</td></tr>\n";
    v238.write(v239);
    timesFound = 0;
    i$$9++;
    var v445 = arrayOfItems.length;
    v240 = i$$9 < v445;
  }
  var v241 = outputWindow.document;
  v241.write("</tbody></table>\n");
  return;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v242 = outputWindow.document;
  v242.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  var v243 = outputWindow.document;
  var v645 = '<tr><td class="title">' + "Pattern:";
  var v623 = v645 + '</td><td class="title">';
  var v586 = v623 + "Times found:";
  var v532 = v586 + '</td><td class="title">';
  var v446 = v532 + "Percentage:";
  var v244 = v446 + "</td></tr>\n";
  v243.write(v244);
  var i$$10 = 0;
  var v447 = arrayOfItems$$1.length;
  var v253 = i$$10 < v447;
  for (;v253;) {
    var tempNumber = 0;
    var v448 = arrayOfItems$$1[i$$10];
    var v245 = v448.match(/\/[^\/]+\//);
    var matchExp$$1 = v245 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    var v449 = sequence$$16.search(matchExp$$1);
    var v247 = v449 != -1;
    if (v247) {
      var v246 = sequence$$16.match(matchExp$$1);
      tempNumber = v246.length;
    }
    var percentage = 0;
    var v533 = originalLength + 1;
    var v624 = arrayOfItems$$1[i$$10];
    var v587 = v624.match(/\d+/);
    var v534 = parseFloat(v587);
    var v450 = v533 - v534;
    var v250 = v450 > 0;
    if (v250) {
      var v248 = 100 * tempNumber;
      var v451 = originalLength + 1;
      var v588 = arrayOfItems$$1[i$$10];
      var v535 = v588.match(/\d+/);
      var v452 = parseFloat(v535);
      var v249 = v451 - v452;
      percentage = v248 / v249;
    }
    var v251 = outputWindow.document;
    var v703 = arrayOfItems$$1[i$$10];
    var v693 = v703.match(/\([^\(]+\)\b/);
    var v680 = v693.toString();
    var v663 = v680.replace(/\(|\)/g, "");
    var v646 = "<tr><td>" + v663;
    var v625 = v646 + "</td><td>";
    var v589 = v625 + tempNumber;
    var v536 = v589 + "</td><td>";
    var v537 = percentage.toFixed(2);
    var v453 = v536 + v537;
    var v252 = v453 + "</td></tr>\n";
    v251.write(v252);
    i$$10++;
    var v454 = arrayOfItems$$1.length;
    v253 = i$$10 < v454;
  }
  var v254 = outputWindow.document;
  v254.write("</tbody></table>\n");
  return true;
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v455 = sequence$$17.length;
  var v261 = v455 > 0;
  for (;v261;) {
    maxNum$$1 = sequence$$17.length;
    var v456 = Math.random();
    var v255 = v456 * maxNum$$1;
    randNum$$1 = Math.floor(v255);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v256 = randNum$$1 + 1;
    var v257 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v256, v257);
    sequence$$17 = tempString1 + tempString2;
    var v457 = tempSeq.length;
    var v260 = v457 == 60;
    if (v260) {
      var v258 = outputWindow.document;
      var v259 = tempSeq + "\n";
      v258.write(v259);
      tempSeq = "";
    }
    var v458 = sequence$$17.length;
    v261 = v458 > 0;
  }
  var v262 = outputWindow.document;
  var v263 = tempSeq + "\n";
  v262.write(v263);
  return true;
}
function getRestrictionSiteString() {
  var type$$25 = "standard";
  var v459 = type$$25.toLowerCase();
  var v265 = v459 == "standard";
  if (v265) {
    var v834 = "/aggcct/ (AatI agg|cct)3," + "/gacgtc/ (AatII gacgt|c)1,";
    var v833 = v834 + "/tgcgca/ (Acc16I tgc|gca)3,";
    var v832 = v833 + "/cgcg/ (AccII cg|cg)2,";
    var v831 = v832 + "/tccgga/ (AccIII t|ccgga)5,";
    var v830 = v831 + "/aacgtt/ (AclI aa|cgtt)4,";
    var v829 = v830 + "/cacgtg/ (AcvI cac|gtg)3,";
    var v828 = v829 + "/gtac/ (AfaI gt|ac)2,";
    var v827 = v828 + "/agcgct/ (AfeI agc|gct)3,";
    var v826 = v827 + "/cttaag/ (AflII c|ttaag)5,";
    var v825 = v826 + "/accggt/ (AgeI a|ccggt)5,";
    var v824 = v825 + "/actagt/ (AhlI a|ctagt)5,";
    var v823 = v824 + "/gtgcac/ (Alw441 g|tgcac)5,";
    var v822 = v823 + "/agct/ (AluI ag|ct)2,";
    var v821 = v822 + "/agcgct/ (Aor51HI agc|gct)3,";
    var v820 = v821 + "/gggccc/ (ApaI gggcc|c)1,";
    var v819 = v820 + "/gtgcac/ (ApaLI g|tgcac)5,";
    var v818 = v819 + "/ggcgcgcc/ (AscI gg|cgcgcc)6,";
    var v817 = v818 + "/attaat/ (AseI at|taat)4,";
    var v816 = v817 + "/ggtacc/ (Asp718I g|gtacc)5,";
    var v815 = v816 + "/ttcgaa/ (AsuII tt|cgaa)4,";
    var v814 = v815 + "/c[cty]cg[agr]g/ (AvaI c|ycgrg)5,";
    var v813 = v814 + "/tgcgca/ (AviII tgc|gca)3,";
    var v812 = v813 + "/cctagg/ (AvrII c|ctagg)5,";
    var v811 = v812 + "/tggcca/ (BalI tgg|cca)3,";
    var v810 = v811 + "/ggatcc/ (BamHI g|gatcc)5,";
    var v809 = v810 + "/atcgat/ (BanIII at|cgat)4,";
    var v808 = v809 + "/ggcgcc/ (BbeI ggcgc|c)1,";
    var v807 = v808 + "/cacgtg/ (BbrPI cac|gtg)3,";
    var v806 = v807 + "/gcatgc/ (BbuI gcatg|c)1,";
    var v805 = v806 + "/actagt/ (BcuI a|ctagt)5,";
    var v804 = v805 + "/tgatca/ (BclI t|gatca)5,";
    var v803 = v804 + "/ctag/ (BfaI c|tag)3,";
    var v802 = v803 + "/cttaag/ (BfrI c|ttaag)5,";
    var v801 = v802 + "/atgcat/ (BfrBI atg|cat)3,";
    var v800 = v801 + "/agatct/ (BglII a|gatct)5,";
    var v799 = v800 + "/cctagg/ (BlnI c|ctagg)5,";
    var v798 = v799 + "/atcgat/ (BseCI at|cgat)4,";
    var v797 = v798 + "/gcgcgc/ (BsePI g|cgcgc)5,";
    var v796 = v797 + "/cggccg/ (BseX3I c|ggccg)5,";
    var v795 = v796 + "/accggt/ (BshTI a|ccggt)5,";
    var v794 = v795 + "/tgtaca/ (Bsp1407I t|gtaca)5,";
    var v793 = v794 + "/ccatgg/ (Bsp19I c|catgg)5,";
    var v792 = v793 + "/atcgat/ (BspDI at|cgat)4,";
    var v791 = v792 + "/tccgga/ (BspEI t|ccgga)5,";
    var v790 = v791 + "/tgtaca/ (BsrGI t|gtaca)5,";
    var v789 = v790 + "/gcgcgc/ (BssHII g|cgcgc)5,";
    var v788 = v789 + "/cgcg/ (BstUI cg|cg)2,";
    var v787 = v788 + "/atcgat/ (ClaI at|cgat)4,";
    var v786 = v787 + "/gatc/ (DpnII |gatc)4,";
    var v785 = v786 + "/tttaaa/ (DraI ttt|aaa)3,";
    var v784 = v785 + "/cggccg/ (EagI c|ggccg)5,";
    var v783 = v784 + "/gaattc/ (EcoRI g|aattc)5,";
    var v782 = v783 + "/gatatc/ (EcoRV gat|atc)3,";
    var v781 = v782 + "/ggcgcc/ (EgeI ggc|gcc)3,";
    var v780 = v781 + "/ggccggcc/ (FseI ggccgg|cc)2,";
    var v779 = v780 + "/tgcgca/ (FspI tgc|gca)3,";
    var v778 = v779 + "/ggcc/ (HaeIII gg|cc)2,";
    var v777 = v778 + "/gt[cty][agr]ac/ (HincII gty|rac)3,";
    var v776 = v777 + "/aagctt/ (HindIII a|agctt)5,";
    var v775 = v776 + "/ga[acgturyswkmbdhvn]tc/ (HinfI g|antc)4,";
    var v774 = v775 + "/gttaac/ (HpaI gtt|aac)3,";
    var v773 = v774 + "/ccgg/ (HpaII c|cgg)3,";
    var v772 = v773 + "/ggcgcc/ (KasI g|gcgcc)5,";
    var v771 = v772 + "/ggtacc/ (KpnI ggtac|c)1,";
    var v770 = v771 + "/[acgturyswkmbdhvn]gatc[acgturyswkmbdhvn]/ (MboI |gatc)5,";
    var v769 = v770 + "/caattg/ (MfeI c|aattg)5,";
    var v768 = v769 + "/acgcgt/ (MluI a|cgcgt)5,";
    var v767 = v768 + "/tggcca/ (MscI tgg|cca)3,";
    var v766 = v767 + "/ttaa/ (MseI t|taa)3,";
    var v765 = v766 + "/ccgg/ (MspI c|cgg)3,";
    var v764 = v765 + "/gccggc/ (NaeI gcc|ggc)3,";
    var v763 = v764 + "/ggcgcc/ (NarI gg|cgcc)4,";
    var v762 = v763 + "/ccatgg/ (NcoI c|catgg)5,";
    var v761 = v762 + "/catatg/ (NdeI ca|tatg)4,";
    var v760 = v761 + "/gatc/ (NdeII |gatc)4,";
    var v759 = v760 + "/gccggc/ (NgoMIV g|ccggc)5,";
    var v758 = v759 + "/gctagc/ (NheI g|ctagc)5,";
    var v757 = v758 + "/catg/ (NlaIII catg|)0,";
    var v756 = v757 + "/gcggccgc/ (NotI gc|ggccgc)6,";
    var v755 = v756 + "/tcgcga/ (NruI tcg|cga)3,";
    var v754 = v755 + "/atgcat/ (NsiI atgca|t)1,";
    var v753 = v754 + "/ttaattaa/ (PacI ttaat|taa)3,";
    var v752 = v753 + "/acatgt/ (PciI a|catgt)5,";
    var v751 = v752 + "/ggcc/ (PhoI gg|cc)2,";
    var v750 = v751 + "/gtttaaac/ (PmeI gttt|aaac)4,";
    var v749 = v750 + "/cacgtg/ (PmlI cac|gtg)3,";
    var v748 = v749 + "/ttataa/ (PsiI tta|taa)3,";
    var v747 = v748 + "/ctgcag/ (PstI ctgca|g)1,";
    var v746 = v747 + "/cgatcg/ (PvuI cgat|cg)2,";
    var v745 = v746 + "/cagctg/ (PvuII cag|ctg)3,";
    var v744 = v745 + "/gtac/ (RsaI gt|ac)2,";
    var v743 = v744 + "/gagctc/ (SacI gagct|c)1,";
    var v742 = v743 + "/ccgcgg/ (SacII ccgc|gg)2,";
    var v741 = v742 + "/gtcgac/ (SalI g|tcgac)5,";
    var v740 = v741 + "/cctgcagg/ (SbfI cctgca|gg)2,";
    var v738 = v740 + "/agtact/ (ScaI agt|act)3,";
    var v735 = v738 + "/ggcgcc/ (SfoI ggc|gcc)3,";
    var v730 = v735 + "/cccggg/ (SmaI ccc|ggg)3,";
    var v725 = v730 + "/tacgta/ (SnaBI tac|gta)3,";
    var v720 = v725 + "/actagt/ (SpeI a|ctagt)5,";
    var v712 = v720 + "/gcatgc/ (SphI gcatg|c)1,";
    var v704 = v712 + "/aatatt/ (SspI aat|att)3,";
    var v694 = v704 + "/gagctc/ (SstI gagct|c)1,";
    var v681 = v694 + "/ccgcgg/ (SstII ccgc|gg)2,";
    var v664 = v681 + "/aggcct/ (StuI agg|cct)3,";
    var v647 = v664 + "/atttaaat/ (SwaI attt|aaat)4,";
    var v626 = v647 + "/tcga/ (TaqI t|cga)3,";
    var v590 = v626 + "/ctcgag/ (TliI c|tcgag)5,";
    var v538 = v590 + "/attaat/ (VspI at|taat)4,";
    var v460 = v538 + "/tctaga/ (XbaI t|ctaga)5,";
    var v264 = v460 + "/ctcgag/ (XhoI c|tcgag)5,";
    return v264 + "/cccggg/ (XmaI c|ccggg)5";
  }
  return true;
}
function restSummary() {
  var theDocument = document;
  var newDna = "";
  var title$$9 = "";
  var maxInput$$3 = 1E5;
  var restrictionSites = getRestrictionSiteString();
  var v665 = theDocument.forms;
  var v648 = v665[0];
  var v627 = v648.elements;
  var v591 = v627[0];
  var v539 = checkFormElement(v591);
  var v461 = v539 == false;
  var v541 = !v461;
  if (v541) {
    var v682 = theDocument.forms;
    var v666 = v682[0];
    var v649 = v666.elements;
    var v628 = v649[0];
    var v592 = v628.value;
    var v540 = checkSequenceLength(v592, maxInput$$3);
    v461 = v540 == false;
  }
  var v266 = v461;
  if (v266) {
    return;
  }
  itemsToCheck = restrictionSites.split(/,/);
  var v462 = checkRestPatterns();
  var v267 = v462 == false;
  if (v267) {
    return;
  }
  openWindow();
  var v268 = outputWindow.document;
  var v463 = '<span class="one">' + "cuts once";
  var v269 = v463 + "</span><br />\n";
  v268.write(v269);
  var v270 = outputWindow.document;
  var v464 = '<span class="two">' + "cuts twice";
  var v271 = v464 + "</span><br />\n";
  v270.write(v271);
  var v272 = outputWindow.document;
  v272.write("\n");
  var v629 = theDocument.forms;
  var v593 = v629[0];
  var v542 = v593.elements;
  var v465 = v542[0];
  var v273 = v465.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v273);
  var i$$11 = 0;
  var v466 = arrayOfFasta$$1.length;
  var v280 = i$$11 < v466;
  for (;v280;) {
    var v274 = arrayOfFasta$$1[i$$11];
    newDna = getSequenceFromFasta(v274);
    var v275 = arrayOfFasta$$1[i$$11];
    title$$9 = getTitleFromFasta(v275);
    newDna = removeNonDna(newDna);
    var v276 = outputWindow.document;
    var v683 = theDocument.forms;
    var v667 = v683[0];
    var v650 = v667.elements;
    var v630 = v650[4];
    var v594 = v630.options;
    var v684 = theDocument.forms;
    var v668 = v684[0];
    var v651 = v668.elements;
    var v631 = v651[4];
    var v595 = v631.selectedIndex;
    var v543 = v594[v595];
    var v467 = v543.value;
    var v277 = getInfoFromTitleAndSequenceAndTopology(title$$9, newDna, v467);
    v276.write(v277);
    var v669 = theDocument.forms;
    var v652 = v669[0];
    var v632 = v652.elements;
    var v596 = v632[4];
    var v544 = v596.options;
    var v670 = theDocument.forms;
    var v653 = v670[0];
    var v633 = v653.elements;
    var v597 = v633[4];
    var v545 = v597.selectedIndex;
    var v468 = v544[v545];
    var v278 = v468.value;
    writeRestrictionSites(newDna, v278);
    var v279 = outputWindow.document;
    v279.write("<br />\n<br />\n");
    i$$11++;
    var v469 = arrayOfFasta$$1.length;
    v280 = i$$11 < v469;
  }
  closeWindow();
  return;
}
document.onload = v2;
var v281 = document.getElementById("submitbtn");
v281.onclick = v3;
var v282 = document.getElementById("clearbtn");
v282.onclick = v4

}

JAM.stopProfile('load');
