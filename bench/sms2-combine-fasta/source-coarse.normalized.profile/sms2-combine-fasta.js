
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
function v4() {
  var v547 = document.forms;
  var v469 = v547[0];
  var v282 = v469.elements;
  var v5 = v282[0];
  v5.value = " ";
  return;
}
function v3() {
  try {
    combineFasta(document);
  } catch (e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    alert(v6);
  }
  return;
}
function v2() {
  var v283 = document.main_form;
  var v7 = v283.main_submit;
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
  var v284 = arrayOfSequences.length;
  var v9 = v284 < 2;
  if (v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v285 = arrayOfTitles.length;
  var v11 = i$$1 < v285;
  for (;v11;) {
    var v596 = arrayOfTitles[i$$1];
    var v548 = v596.search(/\S/);
    var v470 = v548 == -1;
    var v550 = !v470;
    if (v550) {
      var v597 = arrayOfSequences[i$$1];
      var v549 = v597.search(/\S/);
      v470 = v549 == -1;
    }
    var v286 = v470;
    var v472 = !v286;
    if (v472) {
      var v551 = arrayOfSequences[i$$1];
      var v471 = v551.length;
      v286 = v471 != lengthOfAlign;
    }
    var v10 = v286;
    if (v10) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v287 = arrayOfTitles.length;
    v11 = i$$1 < v287;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v631 = codonTable.search(/AmAcid/);
  var v598 = v631 == -1;
  var v633 = !v598;
  if (v633) {
    var v632 = codonTable.search(/Codon/);
    v598 = v632 == -1;
  }
  var v552 = v598;
  var v600 = !v552;
  if (v600) {
    var v599 = codonTable.search(/Number/);
    v552 = v599 == -1;
  }
  var v473 = v552;
  var v554 = !v473;
  if (v554) {
    var v553 = codonTable.search(/\/1000/);
    v473 = v553 == -1;
  }
  var v288 = v473;
  var v475 = !v288;
  if (v475) {
    var v474 = codonTable.search(/Fraction\s*\.\./);
    v288 = v474 == -1;
  }
  var v12 = v288;
  if (v12) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v476 = formElement.value;
  var v289 = v476.search(/\S/);
  var v13 = v289 == -1;
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
  var v290 = arrayOfPatterns.length;
  var v16 = z$$2 < v290;
  for (;v16;) {
    var v477 = arrayOfPatterns[z$$2];
    var v291 = v477.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v14 = v291 == -1;
    if (v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v478 = arrayOfPatterns[z$$2];
    var v292 = moreExpressionCheck(v478);
    var v15 = v292 == false;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v293 = arrayOfPatterns.length;
    v16 = z$$2 < v293;
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v294 = arrayOfPatterns.length;
  var v22 = j < v294;
  for (;v22;) {
    var v479 = arrayOfPatterns[j];
    var v295 = v479.match(/\/.+\//);
    var v19 = v295 + "gi";
    var v720 = eval(v19);
    geneticCodeMatchExp[j] = v720;
    var v296 = arrayOfPatterns[j];
    var v20 = v296.match(/=[a-zA-Z\*]/);
    var v721 = v20.toString();
    geneticCodeMatchResult[j] = v721;
    var v21 = geneticCodeMatchResult[j];
    var v722 = v21.replace(/=/g, "");
    geneticCodeMatchResult[j] = v722;
    j++;
    var v297 = arrayOfPatterns.length;
    v22 = j < v297;
  }
  var i$$2 = 0;
  var v480 = testSequence.length;
  var v298 = v480 - 3;
  var v29 = i$$2 <= v298;
  for (;v29;) {
    var v23 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v23);
    j = 0;
    var v299 = geneticCodeMatchExp.length;
    var v27 = j < v299;
    for (;v27;) {
      var v481 = geneticCodeMatchExp[j];
      var v300 = codon.search(v481);
      var v26 = v300 != -1;
      if (v26) {
        var v25 = oneMatch == true;
        if (v25) {
          var v301 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v24 = v301 + ".";
          alert(v24);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v302 = geneticCodeMatchExp.length;
      v27 = j < v302;
    }
    var v28 = oneMatch == false;
    if (v28) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v482 = testSequence.length;
    var v303 = v482 - 3;
    v29 = i$$2 <= v303;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v304 = arrayOfPatterns$$1.length;
  var v31 = z$$3 < v304;
  for (;v31;) {
    var v483 = arrayOfPatterns$$1[z$$3];
    var v305 = v483.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v30 = v305 != -1;
    if (v30) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v306 = arrayOfPatterns$$1.length;
    v31 = z$$3 < v306;
  }
  var i$$3 = 0;
  var v307 = arrayOfPatterns$$1.length;
  var v35 = i$$3 < v307;
  for (;v35;) {
    var v484 = arrayOfPatterns$$1[i$$3];
    var v308 = "[" + v484;
    var v32 = v308 + "]";
    var re = new RegExp(v32, "gi");
    var j$$1 = i$$3 + 1;
    var v309 = arrayOfPatterns$$1.length;
    var v34 = j$$1 < v309;
    for (;v34;) {
      var v485 = arrayOfPatterns$$1[j$$1];
      var v310 = v485.search(re);
      var v33 = v310 != -1;
      if (v33) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v311 = arrayOfPatterns$$1.length;
      v34 = j$$1 < v311;
    }
    i$$3++;
    var v312 = arrayOfPatterns$$1.length;
    v35 = i$$3 < v312;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v313 = arrayOfPatterns$$2.length;
  var v38 = z$$4 < v313;
  for (;v38;) {
    var v486 = arrayOfPatterns$$2[z$$4];
    var v314 = v486.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v36 = v314 == -1;
    if (v36) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v487 = arrayOfPatterns$$2[z$$4];
    var v315 = moreExpressionCheck(v487);
    var v37 = v315 == false;
    if (v37) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v316 = arrayOfPatterns$$2.length;
    v38 = z$$4 < v316;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v555 = getSequenceFromFasta(text$$7);
  var v488 = v555.replace(/[^A-Za-z]/g, "");
  var v317 = v488.length;
  var v40 = v317 > maxInput;
  if (v40) {
    var v318 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v39 = v318 + " characters.";
    alert(v39);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v319 = text$$8.length;
  var v42 = v319 > maxInput$$1;
  if (v42) {
    var v320 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v41 = v320 + " characters.";
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
  var v321 = alignArray.length;
  var v49 = v321 < 3;
  if (v49) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v322 = alignArray.length;
  var v51 = i$$4 < v322;
  for (;v51;) {
    var v489 = alignArray[i$$4];
    var v323 = v489.search(/[^\s]+\s/);
    var v50 = v323 == -1;
    if (v50) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v324 = alignArray.length;
    v51 = i$$4 < v324;
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
  var v325 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v54 = v325 != -1;
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
  var v326 = sequence$$2.length;
  var v55 = "&gt;results for " + v326;
  var stringToReturn = v55 + " residue sequence ";
  var v327 = fastaSequenceTitle.search(/[^\s]/);
  var v57 = v327 != -1;
  if (v57) {
    var v328 = stringToReturn + '"';
    var v56 = v328 + fastaSequenceTitle;
    stringToReturn = v56 + '"';
  }
  var v329 = stringToReturn + ' starting "';
  var v330 = sequence$$2.substring(0, 10);
  var v58 = v329 + v330;
  stringToReturn = v58 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v331 = sequenceOne.length;
  var v59 = "Search results for " + v331;
  var stringToReturn$$1 = v59 + " residue sequence ";
  var v332 = fastaSequenceTitleOne.search(/[^\s]/);
  var v61 = v332 != -1;
  if (v61) {
    var v333 = stringToReturn$$1 + '"';
    var v60 = v333 + fastaSequenceTitleOne;
    stringToReturn$$1 = v60 + '"';
  }
  var v334 = stringToReturn$$1 + ' starting "';
  var v335 = sequenceOne.substring(0, 10);
  var v62 = v334 + v335;
  stringToReturn$$1 = v62 + '"\n';
  var v336 = stringToReturn$$1 + "and ";
  var v337 = sequenceTwo.length;
  var v63 = v336 + v337;
  stringToReturn$$1 = v63 + " residue sequence ";
  var v338 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v65 = v338 != -1;
  if (v65) {
    var v339 = stringToReturn$$1 + '"';
    var v64 = v339 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v64 + '"';
  }
  var v340 = stringToReturn$$1 + ' starting "';
  var v341 = sequenceTwo.substring(0, 10);
  var v66 = v340 + v341;
  stringToReturn$$1 = v66 + '"';
  var v67 = '<div class="info">' + stringToReturn$$1;
  return v67 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v68 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v68);
  var j$$2 = 0;
  var v342 = arrayOfPatterns$$3.length;
  var v70 = j$$2 < v342;
  for (;v70;) {
    var v490 = arrayOfPatterns$$3[j$$2];
    var v343 = v490.match(/\/.+\//);
    var v69 = v343 + "gi";
    var v723 = eval(v69);
    geneticCodeMatchExp$$1[j$$2] = v723;
    j$$2++;
    var v344 = arrayOfPatterns$$3.length;
    v70 = j$$2 < v344;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v71 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v71);
  var j$$3 = 0;
  var v345 = arrayOfPatterns$$4.length;
  var v74 = j$$3 < v345;
  for (;v74;) {
    var v346 = arrayOfPatterns$$4[j$$3];
    var v72 = v346.match(/=[a-zA-Z\*]/);
    var v724 = v72.toString();
    geneticCodeMatchResult$$1[j$$3] = v724;
    var v73 = geneticCodeMatchResult$$1[j$$3];
    var v725 = v73.replace(/=/g, "");
    geneticCodeMatchResult$$1[j$$3] = v725;
    j$$3++;
    var v347 = arrayOfPatterns$$4.length;
    v74 = j$$3 < v347;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v348 = sequence$$3.length;
  var v75 = "Results for " + v348;
  var stringToReturn$$2 = v75 + " residue sequence ";
  var v349 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v77 = v349 != -1;
  if (v77) {
    var v350 = stringToReturn$$2 + '"';
    var v76 = v350 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v76 + '"';
  }
  var v351 = stringToReturn$$2 + ' starting "';
  var v352 = sequence$$3.substring(0, 10);
  var v78 = v351 + v352;
  stringToReturn$$2 = v78 + '"';
  var v79 = '<div class="info">' + stringToReturn$$2;
  return v79 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v491 = "Results for " + topology;
  var v353 = v491 + " ";
  var v354 = sequence$$4.length;
  var v80 = v353 + v354;
  var stringToReturn$$3 = v80 + " residue sequence ";
  var v355 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v82 = v355 != -1;
  if (v82) {
    var v356 = stringToReturn$$3 + '"';
    var v81 = v356 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v81 + '"';
  }
  var v357 = stringToReturn$$3 + ' starting "';
  var v358 = sequence$$4.substring(0, 10);
  var v83 = v357 + v358;
  stringToReturn$$3 = v83 + '"';
  var v84 = '<div class="info">' + stringToReturn$$3;
  return v84 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v359 = sequenceOne$$1.length;
  var v85 = "Alignment results for " + v359;
  var stringToReturn$$4 = v85 + " residue sequence ";
  var v360 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v87 = v360 != -1;
  if (v87) {
    var v361 = stringToReturn$$4 + '"';
    var v86 = v361 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v86 + '"';
  }
  var v362 = stringToReturn$$4 + ' starting "';
  var v363 = sequenceOne$$1.substring(0, 10);
  var v88 = v362 + v363;
  stringToReturn$$4 = v88 + '"\n';
  var v364 = stringToReturn$$4 + "and ";
  var v365 = sequenceTwo$$1.length;
  var v89 = v364 + v365;
  stringToReturn$$4 = v89 + " residue sequence ";
  var v366 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v91 = v366 != -1;
  if (v91) {
    var v367 = stringToReturn$$4 + '"';
    var v90 = v367 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v90 + '"';
  }
  var v368 = stringToReturn$$4 + ' starting "';
  var v369 = sequenceTwo$$1.substring(0, 10);
  var v92 = v368 + v369;
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
    var v370 = Math.random();
    var v371 = components.length;
    var v94 = v370 * v371;
    tempNum = Math.floor(v94);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4++;
    v95 = j$$4 < lengthOut;
  }
  return sequenceArray.join("");
}
function getSequenceFromFasta(sequenceRecord) {
  var v372 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v96 = v372 != -1;
  if (v96) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "");
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v373 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v98 = v373 != -1;
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
  var v698 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v691 = v698 != -1;
  var v700 = !v691;
  if (v700) {
    var v699 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    v691 = v699 != -1;
  }
  var v682 = v691;
  var v693 = !v682;
  if (v693) {
    var v692 = expressionToCheck.search(/\[\]/);
    v682 = v692 != -1;
  }
  var v673 = v682;
  var v684 = !v673;
  if (v684) {
    var v683 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
    v673 = v683 != -1;
  }
  var v662 = v673;
  var v675 = !v662;
  if (v675) {
    var v674 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
    v662 = v674 != -1;
  }
  var v648 = v662;
  var v664 = !v648;
  if (v664) {
    var v663 = expressionToCheck.search(/\|\|/);
    v648 = v663 != -1;
  }
  var v634 = v648;
  var v650 = !v634;
  if (v650) {
    var v649 = expressionToCheck.search(/\/\|/);
    v634 = v649 != -1;
  }
  var v601 = v634;
  var v636 = !v601;
  if (v636) {
    var v635 = expressionToCheck.search(/\|\//);
    v601 = v635 != -1;
  }
  var v556 = v601;
  var v603 = !v556;
  if (v603) {
    var v602 = expressionToCheck.search(/\[.\]/);
    v556 = v602 != -1;
  }
  var v492 = v556;
  var v558 = !v492;
  if (v558) {
    var v557 = expressionToCheck.search(/\</);
    v492 = v557 != -1;
  }
  var v374 = v492;
  var v494 = !v374;
  if (v494) {
    var v493 = expressionToCheck.search(/\>/);
    v374 = v493 != -1;
  }
  var v99 = v374;
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
function openWindow(title$$5) {
  _openWindow(title$$5, true);
  return;
}
function _openWindow(title$$6, isColor) {
  outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  outputWindow.focus();
  var v104 = outputWindow.document;
  var v559 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v495 = v559 + "<head>\n";
  var v375 = v495 + "<title>Sequence Manipulation Suite</title>\n";
  var v105 = v375 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v104.write(v105);
  if (isColor) {
    var v106 = outputWindow.document;
    var v713 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v709 = v713 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v705 = v709 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v701 = v705 + "div.info {font-weight: bold}\n";
    var v694 = v701 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v685 = v694 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v676 = v685 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v665 = v676 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v651 = v665 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v637 = v651 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v604 = v637 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v560 = v604 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v496 = v560 + "td.many {color: #000000}\n";
    var v376 = v496 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v107 = v376 + "</style>\n";
    v106.write(v107);
  } else {
    var v108 = outputWindow.document;
    var v717 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v714 = v717 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v710 = v714 + "div.title {display: none}\n";
    var v706 = v710 + "div.info {font-weight: bold}\n";
    var v702 = v706 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v695 = v702 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v686 = v695 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v677 = v686 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v666 = v677 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v652 = v666 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v638 = v652 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v605 = v638 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v561 = v605 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v497 = v561 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v377 = v497 + "img {display: none}\n";
    var v109 = v377 + "</style>\n";
    v108.write(v109);
  }
  var v110 = outputWindow.document;
  var v562 = "</head>\n" + '<body class="main">\n';
  var v498 = v562 + '<div class="title">';
  var v378 = v498 + title$$6;
  var v111 = v378 + " results</div>\n";
  v110.write(v111);
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
  var v112 = outputWindow.document;
  var v563 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v499 = v563 + "<head>\n";
  var v379 = v499 + "<title>Sequence Manipulation Suite</title>\n";
  var v113 = v379 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v112.write(v113);
  if (isBackground) {
    var v114 = outputWindow.document;
    var v715 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v711 = v715 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v707 = v711 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v703 = v707 + "div.info {font-weight: bold}\n";
    var v696 = v703 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v687 = v696 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v678 = v687 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v667 = v678 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v653 = v667 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v639 = v653 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v606 = v639 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v564 = v606 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v500 = v564 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v380 = v500 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v115 = v380 + "</style>\n";
    v114.write(v115);
  } else {
    var v116 = outputWindow.document;
    var v719 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v718 = v719 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v716 = v718 + "div.title {display: none}\n";
    var v712 = v716 + "div.info {font-weight: bold}\n";
    var v708 = v712 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v704 = v708 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v697 = v704 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v688 = v697 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v679 = v688 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v668 = v679 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v654 = v668 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v640 = v654 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v607 = v640 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v565 = v607 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v501 = v565 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v381 = v501 + "img {display: none}\n";
    var v117 = v381 + "</style>\n";
    v116.write(v117);
  }
  var v118 = outputWindow.document;
  var v566 = "</head>\n" + '<body class="main">\n';
  var v502 = v566 + '<div class="title">';
  var v382 = v502 + title$$8;
  var v119 = v382 + " results</div>\n";
  v118.write(v119);
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
  var v383 = dnaSequence$$1.search(/./);
  var v120 = v383 != -1;
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
  var v384 = testArray[0];
  var v124 = v384 != testString;
  if (v124) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v385 = testString.search(re$$2);
  var v125 = v385 == -1;
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
  var v386 = testNum.toFixed(3);
  var v128 = v386 != 2489.824;
  if (v128) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v387 = testNum.toPrecision(5);
  var v129 = v387 != 2489.8;
  if (v129) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v388 = theNumber$$1.search(/\d/);
  var v130 = v388 == -1;
  if (v130) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v608 = emblFile.search(/ID/);
  var v567 = v608 == -1;
  var v610 = !v567;
  if (v610) {
    var v609 = emblFile.search(/AC/);
    v567 = v609 == -1;
  }
  var v503 = v567;
  var v569 = !v503;
  if (v569) {
    var v568 = emblFile.search(/DE/);
    v503 = v568 == -1;
  }
  var v389 = v503;
  var v505 = !v389;
  if (v505) {
    var v504 = emblFile.search(/SQ/);
    v389 = v504 == -1;
  }
  var v131 = v389;
  if (v131) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v390 = theNumber$$2.search(/\d/);
  var v132 = v390 == -1;
  if (v132) {
    alert("Please enter a number.");
    return false;
  }
  var v134 = theNumber$$2 > maxInput$$2;
  if (v134) {
    var v391 = "Please enter a number less than or equal to " + maxInput$$2;
    var v133 = v391 + ".";
    alert(v133);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v392 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v135 = v392 != -1;
  if (v135) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v393 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v136 = v393 != -1;
  if (v136) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v611 = genBankFile.search(/LOCUS/);
  var v570 = v611 == -1;
  var v613 = !v570;
  if (v613) {
    var v612 = genBankFile.search(/DEFINITION/);
    v570 = v612 == -1;
  }
  var v506 = v570;
  var v572 = !v506;
  if (v572) {
    var v571 = genBankFile.search(/ACCESSION/);
    v506 = v571 == -1;
  }
  var v394 = v506;
  var v508 = !v394;
  if (v508) {
    var v507 = genBankFile.search(/ORIGIN/);
    v394 = v507 == -1;
  }
  var v137 = v394;
  if (v137) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v614 = genBankFile$$1.search(/LOCUS/);
  var v573 = v614 == -1;
  var v616 = !v573;
  if (v616) {
    var v615 = genBankFile$$1.search(/DEFINITION/);
    v573 = v615 == -1;
  }
  var v509 = v573;
  var v575 = !v509;
  if (v575) {
    var v574 = genBankFile$$1.search(/ACCESSION/);
    v509 = v574 == -1;
  }
  var v395 = v509;
  var v511 = !v395;
  if (v511) {
    var v510 = genBankFile$$1.search(/ORIGIN/);
    v395 = v510 == -1;
  }
  var v138 = v395;
  if (v138) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v396 = genBankFile$$1.search(/FEATURES {13}/);
  var v139 = v396 == -1;
  if (v139) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v617 = emblFile$$1.search(/ID/);
  var v576 = v617 == -1;
  var v619 = !v576;
  if (v619) {
    var v618 = emblFile$$1.search(/AC/);
    v576 = v618 == -1;
  }
  var v512 = v576;
  var v578 = !v512;
  if (v578) {
    var v577 = emblFile$$1.search(/DE/);
    v512 = v577 == -1;
  }
  var v397 = v512;
  var v514 = !v397;
  if (v514) {
    var v513 = emblFile$$1.search(/SQ/);
    v397 = v513 == -1;
  }
  var v140 = v397;
  if (v140) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v398 = emblFile$$1.search(/^FT/m);
  var v141 = v398 == -1;
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
    var v399 = basePerLine / groupSize;
    var v145 = j$$6 <= v399;
    for (;v145;) {
      var v144 = k < groupSize;
      for (;v144;) {
        var v400 = k + i$$5;
        var v143 = text$$10.charAt(v400);
        lineOfText = lineOfText + v143;
        k = k + 1;
        v144 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v401 = basePerLine / groupSize;
      v145 = j$$6 <= v401;
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
  writeGroupNumDnaSetStart(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition, 0);
  return true;
}
function writeGroupNumDnaSetStart(text$$12, tabIn$$3, groupSize$$2, basePerLine$$2, startBase$$2, stopBase$$2, strands$$1, numberPosition$$1, numberingAdjustment) {
  function adjustNumbering(original, adjustment) {
    var adjusted = original + adjustment;
    var v402 = adjustment < 0;
    if (v402) {
      v402 = adjusted >= 0;
    }
    var v149 = v402;
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
  var v182 = i$$6 < stopBase$$2;
  for (;v182;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v403 = basePerLine$$2 / groupSize$$2;
    var v158 = j$$7 <= v403;
    for (;v158;) {
      var v153 = k$$1 < groupSize$$2;
      for (;v153;) {
        var v404 = i$$6 + k$$1;
        var v150 = v404 >= stopBase$$2;
        if (v150) {
          break;
        }
        var v151 = lineOfText$$1;
        var v405 = k$$1 + i$$6;
        var v152 = text$$12.charAt(v405);
        lineOfText$$1 = v151 + v152;
        k$$1 = k$$1 + 1;
        v153 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v156 = numberPosition$$1 == "above";
      if (v156) {
        var v154 = aboveNum;
        var v406 = adjustNumbering(i$$6, numberingAdjustment);
        var v155 = rightNum(v406, "", groupSize$$2, tabIn$$3);
        aboveNum = v154 + v155;
      }
      var v157 = i$$6 >= stopBase$$2;
      if (v157) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v407 = basePerLine$$2 / groupSize$$2;
      v158 = j$$7 <= v407;
    }
    var v181 = numberPosition$$1 == "left";
    if (v181) {
      var v159 = outputWindow.document;
      var v579 = adjustNumbering(lineNum, numberingAdjustment);
      var v515 = rightNum(v579, "", 8, tabIn$$3);
      var v408 = v515 + lineOfText$$1;
      var v160 = v408 + "\n";
      v159.write(v160);
      var v164 = strands$$1 == "two";
      if (v164) {
        var v161 = outputWindow.document;
        var v580 = adjustNumbering(lineNum, numberingAdjustment);
        var v516 = rightNum(v580, "", 8, tabIn$$3);
        var v517 = complement(lineOfText$$1);
        var v409 = v516 + v517;
        var v162 = v409 + "\n";
        v161.write(v162);
        var v163 = outputWindow.document;
        v163.write("\n");
      }
    } else {
      var v180 = numberPosition$$1 == "right";
      if (v180) {
        var v165 = outputWindow.document;
        var v518 = lineOfText$$1;
        var v519 = adjustNumbering(i$$6, numberingAdjustment);
        var v410 = v518 + v519;
        var v166 = v410 + "\n";
        v165.write(v166);
        var v170 = strands$$1 == "two";
        if (v170) {
          var v167 = outputWindow.document;
          var v520 = complement(lineOfText$$1);
          var v521 = adjustNumbering(i$$6, numberingAdjustment);
          var v411 = v520 + v521;
          var v168 = v411 + "\n";
          v167.write(v168);
          var v169 = outputWindow.document;
          v169.write("\n");
        }
      } else {
        var v179 = numberPosition$$1 == "above";
        if (v179) {
          var v171 = outputWindow.document;
          var v172 = aboveNum + "\n";
          v171.write(v172);
          var v173 = outputWindow.document;
          var v174 = lineOfText$$1 + "\n";
          v173.write(v174);
          var v178 = strands$$1 == "two";
          if (v178) {
            var v175 = outputWindow.document;
            var v412 = complement(lineOfText$$1);
            var v176 = v412 + "\n";
            v175.write(v176);
            var v177 = outputWindow.document;
            v177.write("\n");
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v182 = i$$6 < stopBase$$2;
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
  var v201 = i$$7 < stopBase$$3;
  for (;v201;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v413 = basePerLine$$3 / groupSize$$3;
    var v189 = j$$8 <= v413;
    for (;v189;) {
      var v185 = k$$2 < groupSize$$3;
      for (;v185;) {
        var v414 = i$$7 + k$$2;
        var v183 = v414 >= stopBase$$3;
        if (v183) {
          break;
        }
        var v415 = k$$2 + i$$7;
        var v184 = text$$13.charAt(v415);
        lineOfText$$2 = lineOfText$$2 + v184;
        k$$2 = k$$2 + 1;
        v185 = k$$2 < groupSize$$3;
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v187 = numberPosition$$2 == "above";
      if (v187) {
        var v186 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = aboveNum$$1 + v186;
      }
      var v188 = i$$7 >= stopBase$$3;
      if (v188) {
        break;
      }
      k$$2 = 0;
      j$$8++;
      var v416 = basePerLine$$3 / groupSize$$3;
      v189 = j$$8 <= v416;
    }
    var v200 = numberPosition$$2 == "left";
    if (v200) {
      var v190 = outputWindow.document;
      var v522 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v417 = v522 + lineOfText$$2;
      var v191 = v417 + "\n";
      v190.write(v191);
    } else {
      var v199 = numberPosition$$2 == "right";
      if (v199) {
        var v192 = outputWindow.document;
        var v418 = lineOfText$$2 + i$$7;
        var v193 = v418 + "\n";
        v192.write(v193);
      } else {
        var v198 = numberPosition$$2 == "above";
        if (v198) {
          var v194 = outputWindow.document;
          var v195 = aboveNum$$1 + "\n";
          v194.write(v195);
          var v196 = outputWindow.document;
          var v197 = lineOfText$$2 + "\n";
          v196.write(v197);
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v201 = i$$7 < stopBase$$3;
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
  var v581 = sequence$$13.length;
  var v523 = v581 <= firstIndexToMutate;
  var v582 = !v523;
  if (v582) {
    v523 = lastIndexToMutate < 0;
  }
  var v419 = v523;
  var v524 = !v419;
  if (v524) {
    v419 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v202 = v419;
  if (v202) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v210 = i$$8 < numMut;
  for (;v210;) {
    maxNum = sequence$$13.length;
    var v420 = Math.random();
    var v203 = v420 * maxNum;
    randNum = Math.floor(v203);
    var v421 = randNum < firstIndexToMutate;
    var v525 = !v421;
    if (v525) {
      v421 = randNum > lastIndexToMutate;
    }
    var v204 = v421;
    if (v204) {
      numMut++;
      i$$8++;
      v210 = i$$8 < numMut;
      continue;
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for (;needNewChar;) {
      var v422 = Math.random();
      var v423 = components$$1.length;
      var v205 = v422 * v423;
      componentsIndex = Math.round(v205);
      var v424 = components$$1.length;
      var v206 = componentsIndex == v424;
      if (v206) {
        componentsIndex = 0;
      }
      var v425 = components$$1[componentsIndex];
      var v207 = v425 != currentChar;
      if (v207) {
        needNewChar = false;
      }
    }
    var v426 = sequence$$13.substring(0, randNum);
    var v427 = components$$1[componentsIndex];
    var v208 = v426 + v427;
    var v428 = randNum + 1;
    var v429 = sequence$$13.length;
    var v209 = sequence$$13.substring(v428, v429);
    sequence$$13 = v208 + v209;
    i$$8++;
    v210 = i$$8 < numMut;
  }
  var v211 = outputWindow.document;
  var v212 = addReturns(sequence$$13);
  v211.write(v212);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v217 = j$$9 < lengthOut$$1;
  for (;v217;) {
    var v430 = Math.random();
    var v431 = components$$2.length;
    var v213 = v430 * v431;
    tempNum$$1 = Math.floor(v213);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v432 = sequence$$14.length;
    var v216 = v432 == 60;
    if (v216) {
      var v214 = outputWindow.document;
      var v215 = sequence$$14 + "\n";
      v214.write(v215);
      sequence$$14 = "";
    }
    j$$9++;
    v217 = j$$9 < lengthOut$$1;
  }
  var v218 = outputWindow.document;
  var v219 = sequence$$14 + "\n";
  v218.write(v219);
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
  var v223 = dnaConformation == "circular";
  if (v223) {
    var v220 = sequence$$15.substring(0, lookAhead);
    shiftValue = v220.length;
    var v583 = sequence$$15.length;
    var v526 = v583 - lookAhead;
    var v527 = sequence$$15.length;
    var v433 = sequence$$15.substring(v526, v527);
    var v221 = v433 + sequence$$15;
    var v222 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v221 + v222;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v224 = outputWindow.document;
  v224.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  var v225 = outputWindow.document;
  var v584 = '<tr><td class="title" width="200px">' + "Site:";
  var v528 = v584 + '</td><td class="title">';
  var v434 = v528 + "Positions:";
  var v226 = v434 + "</td></tr>\n";
  v225.write(v226);
  var i$$9 = 0;
  var v435 = arrayOfItems.length;
  var v242 = i$$9 < v435;
  for (;v242;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v436 = arrayOfItems[i$$9];
    var v227 = v436.match(/\/.+\//);
    matchExp = v227 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    var v585 = arrayOfItems[i$$9];
    var v529 = v585.match(/\)\D*\d+/);
    var v437 = v529.toString();
    var v228 = v437.replace(/\)\D*/, "");
    cutDistance = parseFloat(v228);
    var v234 = matchArray$$1 = matchExp.exec(sequence$$15);
    for (;v234;) {
      var v229 = matchExp.lastIndex;
      matchPosition = v229 - cutDistance;
      var v438 = matchPosition >= lowerLimit;
      if (v438) {
        v438 = matchPosition < upperLimit;
      }
      var v232 = v438;
      if (v232) {
        timesFound++;
        var v230 = tempString$$1 + ", ";
        var v439 = matchPosition - shiftValue;
        var v231 = v439 + 1;
        tempString$$1 = v230 + v231;
      }
      var v440 = matchExp.lastIndex;
      var v530 = RegExp.lastMatch;
      var v441 = v530.length;
      var v233 = v440 - v441;
      matchExp.lastIndex = v233 + 1;
      v234 = matchArray$$1 = matchExp.exec(sequence$$15);
    }
    var v442 = tempString$$1.search(/\d/);
    var v235 = v442 != -1;
    if (v235) {
      tempString$$1 = tempString$$1.replace(/none,\s*/, "");
    }
    var v239 = timesFound == 0;
    if (v239) {
      backGroundClass = "none";
    } else {
      var v238 = timesFound == 1;
      if (v238) {
        backGroundClass = "one";
      } else {
        var v237 = timesFound == 2;
        if (v237) {
          backGroundClass = "two";
        } else {
          var v236 = timesFound == 3;
          if (v236) {
            backGroundClass = "three";
          } else {
            backGroundClass = "many";
          }
        }
      }
    }
    var v240 = outputWindow.document;
    var v669 = '<tr><td class="' + backGroundClass;
    var v655 = v669 + '">';
    var v689 = arrayOfItems[i$$9];
    var v680 = v689.match(/\([^\(]+\)/);
    var v670 = v680.toString();
    var v656 = v670.replace(/\(|\)/g, "");
    var v641 = v655 + v656;
    var v620 = v641 + '</td><td class="';
    var v586 = v620 + backGroundClass;
    var v531 = v586 + '">';
    var v443 = v531 + tempString$$1;
    var v241 = v443 + "</td></tr>\n";
    v240.write(v241);
    timesFound = 0;
    i$$9++;
    var v444 = arrayOfItems.length;
    v242 = i$$9 < v444;
  }
  var v243 = outputWindow.document;
  v243.write("</tbody></table>\n");
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v244 = outputWindow.document;
  v244.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  var v245 = outputWindow.document;
  var v642 = '<tr><td class="title">' + "Pattern:";
  var v621 = v642 + '</td><td class="title">';
  var v587 = v621 + "Times found:";
  var v532 = v587 + '</td><td class="title">';
  var v445 = v532 + "Percentage:";
  var v246 = v445 + "</td></tr>\n";
  v245.write(v246);
  var i$$10 = 0;
  var v446 = arrayOfItems$$1.length;
  var v255 = i$$10 < v446;
  for (;v255;) {
    var tempNumber = 0;
    var v447 = arrayOfItems$$1[i$$10];
    var v247 = v447.match(/\/[^\/]+\//);
    var matchExp$$1 = v247 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    var v448 = sequence$$16.search(matchExp$$1);
    var v249 = v448 != -1;
    if (v249) {
      var v248 = sequence$$16.match(matchExp$$1);
      tempNumber = v248.length;
    }
    var percentage = 0;
    var v533 = originalLength + 1;
    var v622 = arrayOfItems$$1[i$$10];
    var v588 = v622.match(/\d+/);
    var v534 = parseFloat(v588);
    var v449 = v533 - v534;
    var v252 = v449 > 0;
    if (v252) {
      var v250 = 100 * tempNumber;
      var v450 = originalLength + 1;
      var v589 = arrayOfItems$$1[i$$10];
      var v535 = v589.match(/\d+/);
      var v451 = parseFloat(v535);
      var v251 = v450 - v451;
      percentage = v250 / v251;
    }
    var v253 = outputWindow.document;
    var v690 = arrayOfItems$$1[i$$10];
    var v681 = v690.match(/\([^\(]+\)\b/);
    var v671 = v681.toString();
    var v657 = v671.replace(/\(|\)/g, "");
    var v643 = "<tr><td>" + v657;
    var v623 = v643 + "</td><td>";
    var v590 = v623 + tempNumber;
    var v536 = v590 + "</td><td>";
    var v537 = percentage.toFixed(2);
    var v452 = v536 + v537;
    var v254 = v452 + "</td></tr>\n";
    v253.write(v254);
    i$$10++;
    var v453 = arrayOfItems$$1.length;
    v255 = i$$10 < v453;
  }
  var v256 = outputWindow.document;
  v256.write("</tbody></table>\n");
  return true;
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v454 = sequence$$17.length;
  var v263 = v454 > 0;
  for (;v263;) {
    maxNum$$1 = sequence$$17.length;
    var v455 = Math.random();
    var v257 = v455 * maxNum$$1;
    randNum$$1 = Math.floor(v257);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v258 = randNum$$1 + 1;
    var v259 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v258, v259);
    sequence$$17 = tempString1 + tempString2;
    var v456 = tempSeq.length;
    var v262 = v456 == 60;
    if (v262) {
      var v260 = outputWindow.document;
      var v261 = tempSeq + "\n";
      v260.write(v261);
      tempSeq = "";
    }
    var v457 = sequence$$17.length;
    v263 = v457 > 0;
  }
  var v264 = outputWindow.document;
  var v265 = tempSeq + "\n";
  v264.write(v265);
  return true;
}
function combineFasta(theDocument) {
  JAM.startProfile('compute');

  var maxInput$$3 = 5E5;
  var sequenceCount = 0;
  var sequences = new Array;
  var v458 = testScript();
  var v266 = v458 == false;
  if (v266) {
    return false;
  }
  var v658 = theDocument.forms;
  var v644 = v658[0];
  var v624 = v644.elements;
  var v591 = v624[0];
  var v538 = checkFormElement(v591);
  var v459 = v538 == false;
  var v540 = !v459;
  if (v540) {
    var v672 = theDocument.forms;
    var v659 = v672[0];
    var v645 = v659.elements;
    var v625 = v645[0];
    var v592 = v625.value;
    var v539 = checkTextLength(v592, maxInput$$3);
    v459 = v539 == false;
  }
  var v267 = v459;
  if (v267) {
    return false;
  }
  var v626 = theDocument.forms;
  var v593 = v626[0];
  var v541 = v593.elements;
  var v460 = v541[0];
  var v268 = v460.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v268);
  var i$$11 = 0;
  var v461 = arrayOfFasta$$1.length;
  var v270 = i$$11 < v461;
  for (;v270;) {
    var v542 = arrayOfFasta$$1[i$$11];
    var v462 = getSequenceFromFasta(v542);
    var v269 = removeNonLetters(v462);
    sequences.push(v269);
    i$$11++;
    var v463 = arrayOfFasta$$1.length;
    v270 = i$$11 < v463;
  }
  var sequence$$18 = sequences.join("");
  openWindow("Combine FASTA");
  openPre();
  var v464 = sequences.length;
  var v277 = v464 == 1;
  if (v277) {
    var v271 = outputWindow.document;
    var v660 = sequence$$18.length;
    var v646 = "&gt;results for " + v660;
    var v627 = v646 + " residue sequence made from ";
    var v628 = sequences.length;
    var v594 = v627 + v628;
    var v543 = v594 + ' records, starting "';
    var v544 = sequence$$18.substring(0, 10);
    var v465 = v543 + v544;
    var v272 = v465 + '"\n';
    v271.write(v272);
  } else {
    var v466 = sequences.length;
    var v276 = v466 > 1;
    if (v276) {
      var v273 = outputWindow.document;
      var v661 = sequence$$18.length;
      var v647 = "&gt;results for " + v661;
      var v629 = v647 + " residue sequence made from ";
      var v630 = sequences.length;
      var v595 = v629 + v630;
      var v545 = v595 + ' records, starting "';
      var v546 = sequence$$18.substring(0, 10);
      var v467 = v545 + v546;
      var v274 = v467 + '"\n';
      v273.write(v274);
    } else {
      var v275 = outputWindow.document;
      v275.write('<div class="info">No sequence records were read</div>\n');
    }
  }
  var v278 = outputWindow.document;
  var v468 = addReturns(sequence$$18);
  var v279 = v468 + "\n";
  v278.write(v279);
  closePre();
  closeWindow();

  JAM.stopProfile('compute');
  return true;
}
document.onload = v2;
var v280 = document.getElementById("submitbtn");
v280.onclick = v3;
var v281 = document.getElementById("clearbtn");
v281.onclick = v4

}

JAM.stopProfile('load');
