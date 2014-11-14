
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
function v4() {
  var v553 = document.forms;
  var v474 = v553[0];
  var v286 = v474.elements;
  var v5 = v286[0];
  v5.value = " ";
  var v554 = document.forms;
  var v475 = v554[0];
  var v287 = v475.elements;
  var v6 = v287[1];
  v6.value = " ";
  return;
}
function v3() {
  try {
    proteinPattern(document);
  } catch (e$$6) {
    var v7 = "The following error was encountered: " + e$$6;
    alert(v7);
  }
  return;
}
function v2() {
  var v288 = document.main_form;
  var v8 = v288.main_submit;
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
  var v289 = arrayOfSequences.length;
  var v10 = v289 < 2;
  if (v10) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v290 = arrayOfTitles.length;
  var v12 = i$$1 < v290;
  for (;v12;) {
    var v606 = arrayOfTitles[i$$1];
    var v555 = v606.search(/\S/);
    var v476 = v555 == -1;
    var v557 = !v476;
    if (v557) {
      var v607 = arrayOfSequences[i$$1];
      var v556 = v607.search(/\S/);
      v476 = v556 == -1;
    }
    var v291 = v476;
    var v478 = !v291;
    if (v478) {
      var v558 = arrayOfSequences[i$$1];
      var v477 = v558.length;
      v291 = v477 != lengthOfAlign;
    }
    var v11 = v291;
    if (v11) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v292 = arrayOfTitles.length;
    v12 = i$$1 < v292;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v640 = codonTable.search(/AmAcid/);
  var v608 = v640 == -1;
  var v642 = !v608;
  if (v642) {
    var v641 = codonTable.search(/Codon/);
    v608 = v641 == -1;
  }
  var v559 = v608;
  var v610 = !v559;
  if (v610) {
    var v609 = codonTable.search(/Number/);
    v559 = v609 == -1;
  }
  var v479 = v559;
  var v561 = !v479;
  if (v561) {
    var v560 = codonTable.search(/\/1000/);
    v479 = v560 == -1;
  }
  var v293 = v479;
  var v481 = !v293;
  if (v481) {
    var v480 = codonTable.search(/Fraction\s*\.\./);
    v293 = v480 == -1;
  }
  var v13 = v293;
  if (v13) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v482 = formElement.value;
  var v294 = v482.search(/\S/);
  var v14 = v294 == -1;
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
  var v295 = arrayOfPatterns.length;
  var v17 = z$$2 < v295;
  for (;v17;) {
    var v483 = arrayOfPatterns[z$$2];
    var v296 = v483.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v15 = v296 == -1;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v484 = arrayOfPatterns[z$$2];
    var v297 = moreExpressionCheck(v484);
    var v16 = v297 == false;
    if (v16) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v298 = arrayOfPatterns.length;
    v17 = z$$2 < v298;
  }
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v18);
  var v19 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v19);
  var j = 0;
  var v299 = arrayOfPatterns.length;
  var v23 = j < v299;
  for (;v23;) {
    var v485 = arrayOfPatterns[j];
    var v300 = v485.match(/\/.+\//);
    var v20 = v300 + "gi";
    var v736 = eval(v20);
    geneticCodeMatchExp[j] = v736;
    var v301 = arrayOfPatterns[j];
    var v21 = v301.match(/=[a-zA-Z\*]/);
    var v737 = v21.toString();
    geneticCodeMatchResult[j] = v737;
    var v22 = geneticCodeMatchResult[j];
    var v738 = v22.replace(/=/g, "");
    geneticCodeMatchResult[j] = v738;
    j++;
    var v302 = arrayOfPatterns.length;
    v23 = j < v302;
  }
  var i$$2 = 0;
  var v486 = testSequence.length;
  var v303 = v486 - 3;
  var v30 = i$$2 <= v303;
  for (;v30;) {
    var v24 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v24);
    j = 0;
    var v304 = geneticCodeMatchExp.length;
    var v28 = j < v304;
    for (;v28;) {
      var v487 = geneticCodeMatchExp[j];
      var v305 = codon.search(v487);
      var v27 = v305 != -1;
      if (v27) {
        var v26 = oneMatch == true;
        if (v26) {
          var v306 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v25 = v306 + ".";
          alert(v25);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v307 = geneticCodeMatchExp.length;
      v28 = j < v307;
    }
    var v29 = oneMatch == false;
    if (v29) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v488 = testSequence.length;
    var v308 = v488 - 3;
    v30 = i$$2 <= v308;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v309 = arrayOfPatterns$$1.length;
  var v32 = z$$3 < v309;
  for (;v32;) {
    var v489 = arrayOfPatterns$$1[z$$3];
    var v310 = v489.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v31 = v310 != -1;
    if (v31) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v311 = arrayOfPatterns$$1.length;
    v32 = z$$3 < v311;
  }
  var i$$3 = 0;
  var v312 = arrayOfPatterns$$1.length;
  var v36 = i$$3 < v312;
  for (;v36;) {
    var v490 = arrayOfPatterns$$1[i$$3];
    var v313 = "[" + v490;
    var v33 = v313 + "]";
    var re = new RegExp(v33, "gi");
    var j$$1 = i$$3 + 1;
    var v314 = arrayOfPatterns$$1.length;
    var v35 = j$$1 < v314;
    for (;v35;) {
      var v491 = arrayOfPatterns$$1[j$$1];
      var v315 = v491.search(re);
      var v34 = v315 != -1;
      if (v34) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v316 = arrayOfPatterns$$1.length;
      v35 = j$$1 < v316;
    }
    i$$3++;
    var v317 = arrayOfPatterns$$1.length;
    v36 = i$$3 < v317;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v318 = arrayOfPatterns$$2.length;
  var v39 = z$$4 < v318;
  for (;v39;) {
    var v492 = arrayOfPatterns$$2[z$$4];
    var v319 = v492.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v37 = v319 == -1;
    if (v37) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v493 = arrayOfPatterns$$2[z$$4];
    var v320 = moreExpressionCheck(v493);
    var v38 = v320 == false;
    if (v38) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v321 = arrayOfPatterns$$2.length;
    v39 = z$$4 < v321;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v562 = getSequenceFromFasta(text$$7);
  var v494 = v562.replace(/[^A-Za-z]/g, "");
  var v322 = v494.length;
  var v41 = v322 > maxInput;
  if (v41) {
    var v323 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v40 = v323 + " characters.";
    alert(v40);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v324 = text$$8.length;
  var v43 = v324 > maxInput$$1;
  if (v43) {
    var v325 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v42 = v325 + " characters.";
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
  var v326 = alignArray.length;
  var v50 = v326 < 3;
  if (v50) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v327 = alignArray.length;
  var v52 = i$$4 < v327;
  for (;v52;) {
    var v495 = alignArray[i$$4];
    var v328 = v495.search(/[^\s]+\s/);
    var v51 = v328 == -1;
    if (v51) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v329 = alignArray.length;
    v52 = i$$4 < v329;
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
  var v330 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v55 = v330 != -1;
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
  var v331 = sequence$$2.length;
  var v56 = "&gt;results for " + v331;
  var stringToReturn = v56 + " residue sequence ";
  var v332 = fastaSequenceTitle.search(/[^\s]/);
  var v58 = v332 != -1;
  if (v58) {
    var v333 = stringToReturn + '"';
    var v57 = v333 + fastaSequenceTitle;
    stringToReturn = v57 + '"';
  }
  var v334 = stringToReturn + ' starting "';
  var v335 = sequence$$2.substring(0, 10);
  var v59 = v334 + v335;
  stringToReturn = v59 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v336 = sequenceOne.length;
  var v60 = "Search results for " + v336;
  var stringToReturn$$1 = v60 + " residue sequence ";
  var v337 = fastaSequenceTitleOne.search(/[^\s]/);
  var v62 = v337 != -1;
  if (v62) {
    var v338 = stringToReturn$$1 + '"';
    var v61 = v338 + fastaSequenceTitleOne;
    stringToReturn$$1 = v61 + '"';
  }
  var v339 = stringToReturn$$1 + ' starting "';
  var v340 = sequenceOne.substring(0, 10);
  var v63 = v339 + v340;
  stringToReturn$$1 = v63 + '"\n';
  var v341 = stringToReturn$$1 + "and ";
  var v342 = sequenceTwo.length;
  var v64 = v341 + v342;
  stringToReturn$$1 = v64 + " residue sequence ";
  var v343 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v66 = v343 != -1;
  if (v66) {
    var v344 = stringToReturn$$1 + '"';
    var v65 = v344 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v65 + '"';
  }
  var v345 = stringToReturn$$1 + ' starting "';
  var v346 = sequenceTwo.substring(0, 10);
  var v67 = v345 + v346;
  stringToReturn$$1 = v67 + '"';
  var v68 = '<div class="info">' + stringToReturn$$1;
  return v68 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v69 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v69);
  var j$$2 = 0;
  var v347 = arrayOfPatterns$$3.length;
  var v71 = j$$2 < v347;
  for (;v71;) {
    var v496 = arrayOfPatterns$$3[j$$2];
    var v348 = v496.match(/\/.+\//);
    var v70 = v348 + "gi";
    var v739 = eval(v70);
    geneticCodeMatchExp$$1[j$$2] = v739;
    j$$2++;
    var v349 = arrayOfPatterns$$3.length;
    v71 = j$$2 < v349;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v72 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v72);
  var j$$3 = 0;
  var v350 = arrayOfPatterns$$4.length;
  var v75 = j$$3 < v350;
  for (;v75;) {
    var v351 = arrayOfPatterns$$4[j$$3];
    var v73 = v351.match(/=[a-zA-Z\*]/);
    var v740 = v73.toString();
    geneticCodeMatchResult$$1[j$$3] = v740;
    var v74 = geneticCodeMatchResult$$1[j$$3];
    var v741 = v74.replace(/=/g, "");
    geneticCodeMatchResult$$1[j$$3] = v741;
    j$$3++;
    var v352 = arrayOfPatterns$$4.length;
    v75 = j$$3 < v352;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v353 = sequence$$3.length;
  var v76 = "Results for " + v353;
  var stringToReturn$$2 = v76 + " residue sequence ";
  var v354 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v78 = v354 != -1;
  if (v78) {
    var v355 = stringToReturn$$2 + '"';
    var v77 = v355 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v77 + '"';
  }
  var v356 = stringToReturn$$2 + ' starting "';
  var v357 = sequence$$3.substring(0, 10);
  var v79 = v356 + v357;
  stringToReturn$$2 = v79 + '"';
  var v80 = '<div class="info">' + stringToReturn$$2;
  return v80 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v497 = "Results for " + topology;
  var v358 = v497 + " ";
  var v359 = sequence$$4.length;
  var v81 = v358 + v359;
  var stringToReturn$$3 = v81 + " residue sequence ";
  var v360 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v83 = v360 != -1;
  if (v83) {
    var v361 = stringToReturn$$3 + '"';
    var v82 = v361 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v82 + '"';
  }
  var v362 = stringToReturn$$3 + ' starting "';
  var v363 = sequence$$4.substring(0, 10);
  var v84 = v362 + v363;
  stringToReturn$$3 = v84 + '"';
  var v85 = '<div class="info">' + stringToReturn$$3;
  return v85 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v364 = sequenceOne$$1.length;
  var v86 = "Alignment results for " + v364;
  var stringToReturn$$4 = v86 + " residue sequence ";
  var v365 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v88 = v365 != -1;
  if (v88) {
    var v366 = stringToReturn$$4 + '"';
    var v87 = v366 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v87 + '"';
  }
  var v367 = stringToReturn$$4 + ' starting "';
  var v368 = sequenceOne$$1.substring(0, 10);
  var v89 = v367 + v368;
  stringToReturn$$4 = v89 + '"\n';
  var v369 = stringToReturn$$4 + "and ";
  var v370 = sequenceTwo$$1.length;
  var v90 = v369 + v370;
  stringToReturn$$4 = v90 + " residue sequence ";
  var v371 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v92 = v371 != -1;
  if (v92) {
    var v372 = stringToReturn$$4 + '"';
    var v91 = v372 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v91 + '"';
  }
  var v373 = stringToReturn$$4 + ' starting "';
  var v374 = sequenceTwo$$1.substring(0, 10);
  var v93 = v373 + v374;
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
    var v375 = Math.random();
    var v376 = components.length;
    var v95 = v375 * v376;
    tempNum = Math.floor(v95);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4++;
    v96 = j$$4 < lengthOut;
  }
  return sequenceArray.join("");
}
function getSequenceFromFasta(sequenceRecord) {
  var v377 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v97 = v377 != -1;
  if (v97) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "");
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v378 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v99 = v378 != -1;
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
  var v714 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v707 = v714 != -1;
  var v716 = !v707;
  if (v716) {
    var v715 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    v707 = v715 != -1;
  }
  var v697 = v707;
  var v709 = !v697;
  if (v709) {
    var v708 = expressionToCheck.search(/\[\]/);
    v697 = v708 != -1;
  }
  var v686 = v697;
  var v699 = !v686;
  if (v699) {
    var v698 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
    v686 = v698 != -1;
  }
  var v673 = v686;
  var v688 = !v673;
  if (v688) {
    var v687 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
    v673 = v687 != -1;
  }
  var v658 = v673;
  var v675 = !v658;
  if (v675) {
    var v674 = expressionToCheck.search(/\|\|/);
    v658 = v674 != -1;
  }
  var v643 = v658;
  var v660 = !v643;
  if (v660) {
    var v659 = expressionToCheck.search(/\/\|/);
    v643 = v659 != -1;
  }
  var v611 = v643;
  var v645 = !v611;
  if (v645) {
    var v644 = expressionToCheck.search(/\|\//);
    v611 = v644 != -1;
  }
  var v563 = v611;
  var v613 = !v563;
  if (v613) {
    var v612 = expressionToCheck.search(/\[.\]/);
    v563 = v612 != -1;
  }
  var v498 = v563;
  var v565 = !v498;
  if (v565) {
    var v564 = expressionToCheck.search(/\</);
    v498 = v564 != -1;
  }
  var v379 = v498;
  var v500 = !v379;
  if (v500) {
    var v499 = expressionToCheck.search(/\>/);
    v379 = v499 != -1;
  }
  var v100 = v379;
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
function openWindow(title$$6) {
  _openWindow(title$$6, true);
  return;
}
function _openWindow(title$$7, isColor) {
  outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  outputWindow.focus();
  var v105 = outputWindow.document;
  var v566 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v501 = v566 + "<head>\n";
  var v380 = v501 + "<title>Sequence Manipulation Suite</title>\n";
  var v106 = v380 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v105.write(v106);
  if (isColor) {
    var v107 = outputWindow.document;
    var v729 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v725 = v729 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v721 = v725 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v717 = v721 + "div.info {font-weight: bold}\n";
    var v710 = v717 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v700 = v710 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v689 = v700 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v676 = v689 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v661 = v676 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v646 = v661 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v614 = v646 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v567 = v614 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v502 = v567 + "td.many {color: #000000}\n";
    var v381 = v502 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v108 = v381 + "</style>\n";
    v107.write(v108);
  } else {
    var v109 = outputWindow.document;
    var v733 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v730 = v733 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v726 = v730 + "div.title {display: none}\n";
    var v722 = v726 + "div.info {font-weight: bold}\n";
    var v718 = v722 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v711 = v718 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v701 = v711 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v690 = v701 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v677 = v690 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v662 = v677 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v647 = v662 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v615 = v647 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v568 = v615 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v503 = v568 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v382 = v503 + "img {display: none}\n";
    var v110 = v382 + "</style>\n";
    v109.write(v110);
  }
  var v111 = outputWindow.document;
  var v569 = "</head>\n" + '<body class="main">\n';
  var v504 = v569 + '<div class="title">';
  var v383 = v504 + title$$7;
  var v112 = v383 + " results</div>\n";
  v111.write(v112);
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
  var v113 = outputWindow.document;
  var v570 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v505 = v570 + "<head>\n";
  var v384 = v505 + "<title>Sequence Manipulation Suite</title>\n";
  var v114 = v384 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v113.write(v114);
  if (isBackground) {
    var v115 = outputWindow.document;
    var v731 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v727 = v731 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v723 = v727 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v719 = v723 + "div.info {font-weight: bold}\n";
    var v712 = v719 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v702 = v712 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v691 = v702 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v678 = v691 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v663 = v678 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v648 = v663 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v616 = v648 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v571 = v616 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v506 = v571 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v385 = v506 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v116 = v385 + "</style>\n";
    v115.write(v116);
  } else {
    var v117 = outputWindow.document;
    var v735 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v734 = v735 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v732 = v734 + "div.title {display: none}\n";
    var v728 = v732 + "div.info {font-weight: bold}\n";
    var v724 = v728 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v720 = v724 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v713 = v720 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v703 = v713 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v692 = v703 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v679 = v692 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v664 = v679 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v649 = v664 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v617 = v649 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v572 = v617 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v507 = v572 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v386 = v507 + "img {display: none}\n";
    var v118 = v386 + "</style>\n";
    v117.write(v118);
  }
  var v119 = outputWindow.document;
  var v573 = "</head>\n" + '<body class="main">\n';
  var v508 = v573 + '<div class="title">';
  var v387 = v508 + title$$9;
  var v120 = v387 + " results</div>\n";
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
  var v388 = dnaSequence$$1.search(/./);
  var v121 = v388 != -1;
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
  var v389 = testArray[0];
  var v125 = v389 != testString;
  if (v125) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v390 = testString.search(re$$2);
  var v126 = v390 == -1;
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
  var v391 = testNum.toFixed(3);
  var v129 = v391 != 2489.824;
  if (v129) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v392 = testNum.toPrecision(5);
  var v130 = v392 != 2489.8;
  if (v130) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v393 = theNumber$$1.search(/\d/);
  var v131 = v393 == -1;
  if (v131) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v618 = emblFile.search(/ID/);
  var v574 = v618 == -1;
  var v620 = !v574;
  if (v620) {
    var v619 = emblFile.search(/AC/);
    v574 = v619 == -1;
  }
  var v509 = v574;
  var v576 = !v509;
  if (v576) {
    var v575 = emblFile.search(/DE/);
    v509 = v575 == -1;
  }
  var v394 = v509;
  var v511 = !v394;
  if (v511) {
    var v510 = emblFile.search(/SQ/);
    v394 = v510 == -1;
  }
  var v132 = v394;
  if (v132) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v395 = theNumber$$2.search(/\d/);
  var v133 = v395 == -1;
  if (v133) {
    alert("Please enter a number.");
    return false;
  }
  var v135 = theNumber$$2 > maxInput$$2;
  if (v135) {
    var v396 = "Please enter a number less than or equal to " + maxInput$$2;
    var v134 = v396 + ".";
    alert(v134);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v397 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v136 = v397 != -1;
  if (v136) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v398 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v137 = v398 != -1;
  if (v137) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v621 = genBankFile.search(/LOCUS/);
  var v577 = v621 == -1;
  var v623 = !v577;
  if (v623) {
    var v622 = genBankFile.search(/DEFINITION/);
    v577 = v622 == -1;
  }
  var v512 = v577;
  var v579 = !v512;
  if (v579) {
    var v578 = genBankFile.search(/ACCESSION/);
    v512 = v578 == -1;
  }
  var v399 = v512;
  var v514 = !v399;
  if (v514) {
    var v513 = genBankFile.search(/ORIGIN/);
    v399 = v513 == -1;
  }
  var v138 = v399;
  if (v138) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v624 = genBankFile$$1.search(/LOCUS/);
  var v580 = v624 == -1;
  var v626 = !v580;
  if (v626) {
    var v625 = genBankFile$$1.search(/DEFINITION/);
    v580 = v625 == -1;
  }
  var v515 = v580;
  var v582 = !v515;
  if (v582) {
    var v581 = genBankFile$$1.search(/ACCESSION/);
    v515 = v581 == -1;
  }
  var v400 = v515;
  var v517 = !v400;
  if (v517) {
    var v516 = genBankFile$$1.search(/ORIGIN/);
    v400 = v516 == -1;
  }
  var v139 = v400;
  if (v139) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v401 = genBankFile$$1.search(/FEATURES {13}/);
  var v140 = v401 == -1;
  if (v140) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v627 = emblFile$$1.search(/ID/);
  var v583 = v627 == -1;
  var v629 = !v583;
  if (v629) {
    var v628 = emblFile$$1.search(/AC/);
    v583 = v628 == -1;
  }
  var v518 = v583;
  var v585 = !v518;
  if (v585) {
    var v584 = emblFile$$1.search(/DE/);
    v518 = v584 == -1;
  }
  var v402 = v518;
  var v520 = !v402;
  if (v520) {
    var v519 = emblFile$$1.search(/SQ/);
    v402 = v519 == -1;
  }
  var v141 = v402;
  if (v141) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v403 = emblFile$$1.search(/^FT/m);
  var v142 = v403 == -1;
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
    var v404 = basePerLine / groupSize;
    var v146 = j$$6 <= v404;
    for (;v146;) {
      var v145 = k < groupSize;
      for (;v145;) {
        var v405 = k + i$$5;
        var v144 = text$$10.charAt(v405);
        lineOfText = lineOfText + v144;
        k = k + 1;
        v145 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v406 = basePerLine / groupSize;
      v146 = j$$6 <= v406;
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
    var v407 = adjustment < 0;
    if (v407) {
      v407 = adjusted >= 0;
    }
    var v150 = v407;
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
    var v408 = basePerLine$$2 / groupSize$$2;
    var v159 = j$$7 <= v408;
    for (;v159;) {
      var v154 = k$$1 < groupSize$$2;
      for (;v154;) {
        var v409 = i$$6 + k$$1;
        var v151 = v409 >= stopBase$$2;
        if (v151) {
          break;
        }
        var v152 = lineOfText$$1;
        var v410 = k$$1 + i$$6;
        var v153 = text$$12.charAt(v410);
        lineOfText$$1 = v152 + v153;
        k$$1 = k$$1 + 1;
        v154 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v157 = numberPosition$$1 == "above";
      if (v157) {
        var v155 = aboveNum;
        var v411 = adjustNumbering(i$$6, numberingAdjustment);
        var v156 = rightNum(v411, "", groupSize$$2, tabIn$$3);
        aboveNum = v155 + v156;
      }
      var v158 = i$$6 >= stopBase$$2;
      if (v158) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v412 = basePerLine$$2 / groupSize$$2;
      v159 = j$$7 <= v412;
    }
    var v182 = numberPosition$$1 == "left";
    if (v182) {
      var v160 = outputWindow.document;
      var v586 = adjustNumbering(lineNum, numberingAdjustment);
      var v521 = rightNum(v586, "", 8, tabIn$$3);
      var v413 = v521 + lineOfText$$1;
      var v161 = v413 + "\n";
      v160.write(v161);
      var v165 = strands$$1 == "two";
      if (v165) {
        var v162 = outputWindow.document;
        var v587 = adjustNumbering(lineNum, numberingAdjustment);
        var v522 = rightNum(v587, "", 8, tabIn$$3);
        var v523 = complement(lineOfText$$1);
        var v414 = v522 + v523;
        var v163 = v414 + "\n";
        v162.write(v163);
        var v164 = outputWindow.document;
        v164.write("\n");
      }
    } else {
      var v181 = numberPosition$$1 == "right";
      if (v181) {
        var v166 = outputWindow.document;
        var v524 = lineOfText$$1;
        var v525 = adjustNumbering(i$$6, numberingAdjustment);
        var v415 = v524 + v525;
        var v167 = v415 + "\n";
        v166.write(v167);
        var v171 = strands$$1 == "two";
        if (v171) {
          var v168 = outputWindow.document;
          var v526 = complement(lineOfText$$1);
          var v527 = adjustNumbering(i$$6, numberingAdjustment);
          var v416 = v526 + v527;
          var v169 = v416 + "\n";
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
            var v417 = complement(lineOfText$$1);
            var v177 = v417 + "\n";
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
    var v418 = basePerLine$$3 / groupSize$$3;
    var v190 = j$$8 <= v418;
    for (;v190;) {
      var v186 = k$$2 < groupSize$$3;
      for (;v186;) {
        var v419 = i$$7 + k$$2;
        var v184 = v419 >= stopBase$$3;
        if (v184) {
          break;
        }
        var v420 = k$$2 + i$$7;
        var v185 = text$$13.charAt(v420);
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
      var v421 = basePerLine$$3 / groupSize$$3;
      v190 = j$$8 <= v421;
    }
    var v201 = numberPosition$$2 == "left";
    if (v201) {
      var v191 = outputWindow.document;
      var v528 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v422 = v528 + lineOfText$$2;
      var v192 = v422 + "\n";
      v191.write(v192);
    } else {
      var v200 = numberPosition$$2 == "right";
      if (v200) {
        var v193 = outputWindow.document;
        var v423 = lineOfText$$2 + i$$7;
        var v194 = v423 + "\n";
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
  var v588 = sequence$$13.length;
  var v529 = v588 <= firstIndexToMutate;
  var v589 = !v529;
  if (v589) {
    v529 = lastIndexToMutate < 0;
  }
  var v424 = v529;
  var v530 = !v424;
  if (v530) {
    v424 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v203 = v424;
  if (v203) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v211 = i$$8 < numMut;
  for (;v211;) {
    maxNum = sequence$$13.length;
    var v425 = Math.random();
    var v204 = v425 * maxNum;
    randNum = Math.floor(v204);
    var v426 = randNum < firstIndexToMutate;
    var v531 = !v426;
    if (v531) {
      v426 = randNum > lastIndexToMutate;
    }
    var v205 = v426;
    if (v205) {
      numMut++;
      i$$8++;
      v211 = i$$8 < numMut;
      continue;
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for (;needNewChar;) {
      var v427 = Math.random();
      var v428 = components$$1.length;
      var v206 = v427 * v428;
      componentsIndex = Math.round(v206);
      var v429 = components$$1.length;
      var v207 = componentsIndex == v429;
      if (v207) {
        componentsIndex = 0;
      }
      var v430 = components$$1[componentsIndex];
      var v208 = v430 != currentChar;
      if (v208) {
        needNewChar = false;
      }
    }
    var v431 = sequence$$13.substring(0, randNum);
    var v432 = components$$1[componentsIndex];
    var v209 = v431 + v432;
    var v433 = randNum + 1;
    var v434 = sequence$$13.length;
    var v210 = sequence$$13.substring(v433, v434);
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
    var v435 = Math.random();
    var v436 = components$$2.length;
    var v214 = v435 * v436;
    tempNum$$1 = Math.floor(v214);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v437 = sequence$$14.length;
    var v217 = v437 == 60;
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
    var v590 = sequence$$15.length;
    var v532 = v590 - lookAhead;
    var v533 = sequence$$15.length;
    var v438 = sequence$$15.substring(v532, v533);
    var v222 = v438 + sequence$$15;
    var v223 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v222 + v223;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v225 = outputWindow.document;
  v225.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  var v226 = outputWindow.document;
  var v591 = '<tr><td class="title" width="200px">' + "Site:";
  var v534 = v591 + '</td><td class="title">';
  var v439 = v534 + "Positions:";
  var v227 = v439 + "</td></tr>\n";
  v226.write(v227);
  var i$$9 = 0;
  var v440 = arrayOfItems.length;
  var v243 = i$$9 < v440;
  for (;v243;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v441 = arrayOfItems[i$$9];
    var v228 = v441.match(/\/.+\//);
    matchExp = v228 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    var v592 = arrayOfItems[i$$9];
    var v535 = v592.match(/\)\D*\d+/);
    var v442 = v535.toString();
    var v229 = v442.replace(/\)\D*/, "");
    cutDistance = parseFloat(v229);
    var v235 = matchArray$$1 = matchExp.exec(sequence$$15);
    for (;v235;) {
      var v230 = matchExp.lastIndex;
      matchPosition = v230 - cutDistance;
      var v443 = matchPosition >= lowerLimit;
      if (v443) {
        v443 = matchPosition < upperLimit;
      }
      var v233 = v443;
      if (v233) {
        timesFound++;
        var v231 = tempString$$1 + ", ";
        var v444 = matchPosition - shiftValue;
        var v232 = v444 + 1;
        tempString$$1 = v231 + v232;
      }
      var v445 = matchExp.lastIndex;
      var v536 = RegExp.lastMatch;
      var v446 = v536.length;
      var v234 = v445 - v446;
      matchExp.lastIndex = v234 + 1;
      v235 = matchArray$$1 = matchExp.exec(sequence$$15);
    }
    var v447 = tempString$$1.search(/\d/);
    var v236 = v447 != -1;
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
    var v680 = '<tr><td class="' + backGroundClass;
    var v665 = v680 + '">';
    var v704 = arrayOfItems[i$$9];
    var v693 = v704.match(/\([^\(]+\)/);
    var v681 = v693.toString();
    var v666 = v681.replace(/\(|\)/g, "");
    var v650 = v665 + v666;
    var v630 = v650 + '</td><td class="';
    var v593 = v630 + backGroundClass;
    var v537 = v593 + '">';
    var v448 = v537 + tempString$$1;
    var v242 = v448 + "</td></tr>\n";
    v241.write(v242);
    timesFound = 0;
    i$$9++;
    var v449 = arrayOfItems.length;
    v243 = i$$9 < v449;
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
  var v651 = '<tr><td class="title">' + "Pattern:";
  var v631 = v651 + '</td><td class="title">';
  var v594 = v631 + "Times found:";
  var v538 = v594 + '</td><td class="title">';
  var v450 = v538 + "Percentage:";
  var v247 = v450 + "</td></tr>\n";
  v246.write(v247);
  var i$$10 = 0;
  var v451 = arrayOfItems$$1.length;
  var v256 = i$$10 < v451;
  for (;v256;) {
    var tempNumber = 0;
    var v452 = arrayOfItems$$1[i$$10];
    var v248 = v452.match(/\/[^\/]+\//);
    var matchExp$$1 = v248 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    var v453 = sequence$$16.search(matchExp$$1);
    var v250 = v453 != -1;
    if (v250) {
      var v249 = sequence$$16.match(matchExp$$1);
      tempNumber = v249.length;
    }
    var percentage = 0;
    var v539 = originalLength + 1;
    var v632 = arrayOfItems$$1[i$$10];
    var v595 = v632.match(/\d+/);
    var v540 = parseFloat(v595);
    var v454 = v539 - v540;
    var v253 = v454 > 0;
    if (v253) {
      var v251 = 100 * tempNumber;
      var v455 = originalLength + 1;
      var v596 = arrayOfItems$$1[i$$10];
      var v541 = v596.match(/\d+/);
      var v456 = parseFloat(v541);
      var v252 = v455 - v456;
      percentage = v251 / v252;
    }
    var v254 = outputWindow.document;
    var v705 = arrayOfItems$$1[i$$10];
    var v694 = v705.match(/\([^\(]+\)\b/);
    var v682 = v694.toString();
    var v667 = v682.replace(/\(|\)/g, "");
    var v652 = "<tr><td>" + v667;
    var v633 = v652 + "</td><td>";
    var v597 = v633 + tempNumber;
    var v542 = v597 + "</td><td>";
    var v543 = percentage.toFixed(2);
    var v457 = v542 + v543;
    var v255 = v457 + "</td></tr>\n";
    v254.write(v255);
    i$$10++;
    var v458 = arrayOfItems$$1.length;
    v256 = i$$10 < v458;
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
  var v459 = sequence$$17.length;
  var v264 = v459 > 0;
  for (;v264;) {
    maxNum$$1 = sequence$$17.length;
    var v460 = Math.random();
    var v258 = v460 * maxNum$$1;
    randNum$$1 = Math.floor(v258);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v259 = randNum$$1 + 1;
    var v260 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v259, v260);
    sequence$$17 = tempString1 + tempString2;
    var v461 = tempSeq.length;
    var v263 = v461 == 60;
    if (v263) {
      var v261 = outputWindow.document;
      var v262 = tempSeq + "\n";
      v261.write(v262);
      tempSeq = "";
    }
    var v462 = sequence$$17.length;
    v264 = v462 > 0;
  }
  var v265 = outputWindow.document;
  var v266 = tempSeq + "\n";
  v265.write(v266);
  return true;
}
function proteinPattern(theDocument) {
  JAM.startProfile('compute');

  var newProtein = "";
  var maxInput$$3 = 5E5;
  var v463 = testScript();
  var v267 = v463 == false;
  if (v267) {
    return false;
  }
  var re$$3;
  var matches = new Array;
  var v683 = theDocument.forms;
  var v668 = v683[0];
  var v653 = v668.elements;
  var v634 = v653[0];
  var v598 = checkFormElement(v634);
  var v544 = v598 == false;
  var v600 = !v544;
  if (v600) {
    var v695 = theDocument.forms;
    var v684 = v695[0];
    var v669 = v684.elements;
    var v654 = v669[0];
    var v635 = v654.value;
    var v599 = checkSequenceLength(v635, maxInput$$3);
    v544 = v599 == false;
  }
  var v464 = v544;
  var v546 = !v464;
  if (v546) {
    var v670 = theDocument.forms;
    var v655 = v670[0];
    var v636 = v655.elements;
    var v601 = v636[1];
    var v545 = checkFormElement(v601);
    v464 = v545 == false;
  }
  var v268 = v464;
  if (v268) {
    return false;
  }
  var v671 = theDocument.forms;
  var v656 = v671[0];
  var v637 = v656.elements;
  var v602 = v637[1];
  var v547 = v602.value;
  var v465 = v547.replace(/\//g, "");
  var v269 = "/" + v465;
  re$$3 = v269 + "/gi";
  re$$3 = removeWhiteSpace(re$$3);
  try {
    re$$3 = eval(re$$3);
    var testString$$1 = "teststring";
    testString$$1 = testString$$1.replace(re$$3, "");
  } catch (e$$5) {
    alert("The regular expression is not formatted correctly.");
    return false;
  }
  openWindow("Protein Pattern Find");
  openPre();
  var v638 = theDocument.forms;
  var v603 = v638[0];
  var v548 = v603.elements;
  var v466 = v548[0];
  var v270 = v466.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v270);
  var i$$11 = 0;
  var v467 = arrayOfFasta$$1.length;
  var v276 = i$$11 < v467;
  for (;v276;) {
    var v271 = arrayOfFasta$$1[i$$11];
    newProtein = getSequenceFromFasta(v271);
    var v272 = arrayOfFasta$$1[i$$11];
    title = getTitleFromFasta(v272);
    newProtein = removeNonProteinStrict(newProtein);
    var v273 = outputWindow.document;
    var v274 = getInfoFromTitleAndSequence(title, newProtein);
    v273.write(v274);
    writeProteinPattern(newProtein, re$$3);
    var v275 = outputWindow.document;
    v275.write("\n\n");
    i$$11++;
    var v468 = arrayOfFasta$$1.length;
    v276 = i$$11 < v468;
  }
  closePre();
  closeWindow();

  JAM.stopProfile('compute');
  return true;
}
function writeProteinPattern(proteinSequence$$1, re$$4) {
  var matchArray$$2;
  var matchPosition$$1;
  var matchCount = 0;
  var simplePattern = re$$4.toString();
  simplePattern = simplePattern.replace(/\/gi$|\/ig$|^\//gi, "");
  var v281 = matchArray$$2 = re$$4.exec(proteinSequence$$1);
  for (;v281;) {
    matchCount++;
    var match_end = re$$4.lastIndex;
    var v549 = RegExp.lastMatch;
    var v469 = v549.length;
    var v277 = match_end - v469;
    var match_start = v277 + 1;
    var v278 = outputWindow.document;
    var v706 = "&gt;match number " + matchCount;
    var v696 = v706 + ' to "';
    var v685 = v696 + simplePattern;
    var v672 = v685 + '" start=';
    var v657 = v672 + match_start;
    var v639 = v657 + " end=";
    var v604 = v639 + match_end;
    var v550 = v604 + "\n";
    var v605 = matchArray$$2[0];
    var v551 = addReturns(v605);
    var v470 = v550 + v551;
    var v279 = v470 + "\n\n";
    v278.write(v279);
    var v471 = re$$4.lastIndex;
    var v552 = RegExp.lastMatch;
    var v472 = v552.length;
    var v280 = v471 - v472;
    re$$4.lastIndex = v280 + 1;
    v281 = matchArray$$2 = re$$4.exec(proteinSequence$$1);
  }
  var v473 = matchCount > 0;
  var v283 = !v473;
  if (v283) {
    var v282 = outputWindow.document;
    v282.write("no matches found for this sequence.\n\n");
  }
  return;
}
document.onload = v2;
var v284 = document.getElementById("submitbtn");
v284.onclick = v3;
var v285 = document.getElementById("clearbtn");
v285.onclick = v4

}

JAM.stopProfile('load');
