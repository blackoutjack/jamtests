
JAM.startProfile('load');
function v5() {
  var v550 = document.forms;
  var v477 = v550[0];
  var v288 = v477.elements;
  var v6 = v288[0];
  v6.value = " ";
  return;
}
function v4() {
  try {
    threeToOne(document);
  } catch (e$$5) {
    var v7 = "The following error was encountered: " + e$$5;
    alert(v7);
  }
  return;
}
function v3() {
  var v289 = document.main_form;
  var v8 = v289.main_submit;
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
  var v290 = arrayOfSequences.length;
  var v10 = v290 < 2;
  if (v10) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v291 = arrayOfTitles.length;
  var v12 = i$$1 < v291;
  for (;v12;) {
    var v597 = arrayOfTitles[i$$1];
    var v551 = v597.search(/\S/);
    var v478 = v551 == -1;
    var v553 = !v478;
    if (v553) {
      var v598 = arrayOfSequences[i$$1];
      var v552 = v598.search(/\S/);
      v478 = v552 == -1;
    }
    var v292 = v478;
    var v480 = !v292;
    if (v480) {
      var v554 = arrayOfSequences[i$$1];
      var v479 = v554.length;
      v292 = v479 != lengthOfAlign;
    }
    var v11 = v292;
    if (v11) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v293 = arrayOfTitles.length;
    v12 = i$$1 < v293;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v628 = codonTable.search(/AmAcid/);
  var v599 = v628 == -1;
  var v630 = !v599;
  if (v630) {
    var v629 = codonTable.search(/Codon/);
    v599 = v629 == -1;
  }
  var v555 = v599;
  var v601 = !v555;
  if (v601) {
    var v600 = codonTable.search(/Number/);
    v555 = v600 == -1;
  }
  var v481 = v555;
  var v557 = !v481;
  if (v557) {
    var v556 = codonTable.search(/\/1000/);
    v481 = v556 == -1;
  }
  var v294 = v481;
  var v483 = !v294;
  if (v483) {
    var v482 = codonTable.search(/Fraction\s*\.\./);
    v294 = v482 == -1;
  }
  var v13 = v294;
  if (v13) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v484 = formElement.value;
  var v295 = v484.search(/\S/);
  var v14 = v295 == -1;
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
  var v296 = arrayOfPatterns.length;
  var v17 = z$$2 < v296;
  for (;v17;) {
    var v485 = arrayOfPatterns[z$$2];
    var v297 = v485.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v15 = v297 == -1;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v486 = arrayOfPatterns[z$$2];
    var v298 = moreExpressionCheck(v486);
    var v16 = v298 == false;
    if (v16) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v299 = arrayOfPatterns.length;
    v17 = z$$2 < v299;
  }
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v18);
  var v19 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v19);
  var j = 0;
  var v300 = arrayOfPatterns.length;
  var v23 = j < v300;
  for (;v23;) {
    var v487 = arrayOfPatterns[j];
    var v301 = v487.match(/\/.+\//);
    var v20 = v301 + "gi";
    var v713 = eval(v20);
    geneticCodeMatchExp[j] = v713;
    var v302 = arrayOfPatterns[j];
    var v21 = v302.match(/=[a-zA-Z\*]/);
    var v714 = v21.toString();
    geneticCodeMatchResult[j] = v714;
    var v22 = geneticCodeMatchResult[j];
    var v715 = v22.replace(/=/g, "");
    geneticCodeMatchResult[j] = v715;
    j++;
    var v303 = arrayOfPatterns.length;
    v23 = j < v303;
  }
  var i$$2 = 0;
  var v488 = testSequence.length;
  var v304 = v488 - 3;
  var v30 = i$$2 <= v304;
  for (;v30;) {
    var v24 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v24);
    j = 0;
    var v305 = geneticCodeMatchExp.length;
    var v28 = j < v305;
    for (;v28;) {
      var v489 = geneticCodeMatchExp[j];
      var v306 = codon.search(v489);
      var v27 = v306 != -1;
      if (v27) {
        var v26 = oneMatch == true;
        if (v26) {
          var v307 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v25 = v307 + ".";
          alert(v25);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v308 = geneticCodeMatchExp.length;
      v28 = j < v308;
    }
    var v29 = oneMatch == false;
    if (v29) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v490 = testSequence.length;
    var v309 = v490 - 3;
    v30 = i$$2 <= v309;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v310 = arrayOfPatterns$$1.length;
  var v32 = z$$3 < v310;
  for (;v32;) {
    var v491 = arrayOfPatterns$$1[z$$3];
    var v311 = v491.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v31 = v311 != -1;
    if (v31) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v312 = arrayOfPatterns$$1.length;
    v32 = z$$3 < v312;
  }
  var i$$3 = 0;
  var v313 = arrayOfPatterns$$1.length;
  var v36 = i$$3 < v313;
  for (;v36;) {
    var v492 = arrayOfPatterns$$1[i$$3];
    var v314 = "[" + v492;
    var v33 = v314 + "]";
    var re = new RegExp(v33, "gi");
    var j$$1 = i$$3 + 1;
    var v315 = arrayOfPatterns$$1.length;
    var v35 = j$$1 < v315;
    for (;v35;) {
      var v493 = arrayOfPatterns$$1[j$$1];
      var v316 = v493.search(re);
      var v34 = v316 != -1;
      if (v34) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v317 = arrayOfPatterns$$1.length;
      v35 = j$$1 < v317;
    }
    i$$3++;
    var v318 = arrayOfPatterns$$1.length;
    v36 = i$$3 < v318;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v319 = arrayOfPatterns$$2.length;
  var v39 = z$$4 < v319;
  for (;v39;) {
    var v494 = arrayOfPatterns$$2[z$$4];
    var v320 = v494.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v37 = v320 == -1;
    if (v37) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v495 = arrayOfPatterns$$2[z$$4];
    var v321 = moreExpressionCheck(v495);
    var v38 = v321 == false;
    if (v38) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v322 = arrayOfPatterns$$2.length;
    v39 = z$$4 < v322;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v558 = getSequenceFromFasta(text$$7);
  var v496 = v558.replace(/[^A-Za-z]/g, "");
  var v323 = v496.length;
  var v41 = v323 > maxInput;
  if (v41) {
    var v324 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v40 = v324 + " characters.";
    alert(v40);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v325 = text$$8.length;
  var v43 = v325 > maxInput$$1;
  if (v43) {
    var v326 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v42 = v326 + " characters.";
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
  var v327 = alignArray.length;
  var v50 = v327 < 3;
  if (v50) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v328 = alignArray.length;
  var v52 = i$$4 < v328;
  for (;v52;) {
    var v497 = alignArray[i$$4];
    var v329 = v497.search(/[^\s]+\s/);
    var v51 = v329 == -1;
    if (v51) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v330 = alignArray.length;
    v52 = i$$4 < v330;
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
  var v331 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v55 = v331 != -1;
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
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$2) {
  var v332 = sequence$$2.length;
  var v56 = "&gt;results for " + v332;
  var stringToReturn = v56 + " residue sequence ";
  var v333 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v58 = v333 != -1;
  if (v58) {
    var v334 = stringToReturn + '"';
    var v57 = v334 + fastaSequenceTitle$$1;
    stringToReturn = v57 + '"';
  }
  var v335 = stringToReturn + ' starting "';
  var v336 = sequence$$2.substring(0, 10);
  var v59 = v335 + v336;
  stringToReturn = v59 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v337 = sequenceOne.length;
  var v60 = "Search results for " + v337;
  var stringToReturn$$1 = v60 + " residue sequence ";
  var v338 = fastaSequenceTitleOne.search(/[^\s]/);
  var v62 = v338 != -1;
  if (v62) {
    var v339 = stringToReturn$$1 + '"';
    var v61 = v339 + fastaSequenceTitleOne;
    stringToReturn$$1 = v61 + '"';
  }
  var v340 = stringToReturn$$1 + ' starting "';
  var v341 = sequenceOne.substring(0, 10);
  var v63 = v340 + v341;
  stringToReturn$$1 = v63 + '"\n';
  var v342 = stringToReturn$$1 + "and ";
  var v343 = sequenceTwo.length;
  var v64 = v342 + v343;
  stringToReturn$$1 = v64 + " residue sequence ";
  var v344 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v66 = v344 != -1;
  if (v66) {
    var v345 = stringToReturn$$1 + '"';
    var v65 = v345 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v65 + '"';
  }
  var v346 = stringToReturn$$1 + ' starting "';
  var v347 = sequenceTwo.substring(0, 10);
  var v67 = v346 + v347;
  stringToReturn$$1 = v67 + '"';
  var v68 = '<div class="info">' + stringToReturn$$1;
  return v68 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v69 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v69);
  var j$$2 = 0;
  var v348 = arrayOfPatterns$$3.length;
  var v71 = j$$2 < v348;
  for (;v71;) {
    var v498 = arrayOfPatterns$$3[j$$2];
    var v349 = v498.match(/\/.+\//);
    var v70 = v349 + "gi";
    var v716 = eval(v70);
    geneticCodeMatchExp$$1[j$$2] = v716;
    j$$2++;
    var v350 = arrayOfPatterns$$3.length;
    v71 = j$$2 < v350;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v72 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v72);
  var j$$3 = 0;
  var v351 = arrayOfPatterns$$4.length;
  var v75 = j$$3 < v351;
  for (;v75;) {
    var v352 = arrayOfPatterns$$4[j$$3];
    var v73 = v352.match(/=[a-zA-Z\*]/);
    var v717 = v73.toString();
    geneticCodeMatchResult$$1[j$$3] = v717;
    var v74 = geneticCodeMatchResult$$1[j$$3];
    var v718 = v74.replace(/=/g, "");
    geneticCodeMatchResult$$1[j$$3] = v718;
    j$$3++;
    var v353 = arrayOfPatterns$$4.length;
    v75 = j$$3 < v353;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$2, sequence$$3) {
  var v354 = sequence$$3.length;
  var v76 = "Results for " + v354;
  var stringToReturn$$2 = v76 + " residue sequence ";
  var v355 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v78 = v355 != -1;
  if (v78) {
    var v356 = stringToReturn$$2 + '"';
    var v77 = v356 + fastaSequenceTitle$$2;
    stringToReturn$$2 = v77 + '"';
  }
  var v357 = stringToReturn$$2 + ' starting "';
  var v358 = sequence$$3.substring(0, 10);
  var v79 = v357 + v358;
  stringToReturn$$2 = v79 + '"';
  var v80 = '<div class="info">' + stringToReturn$$2;
  return v80 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$3, sequence$$4, topology) {
  var v499 = "Results for " + topology;
  var v359 = v499 + " ";
  var v360 = sequence$$4.length;
  var v81 = v359 + v360;
  var stringToReturn$$3 = v81 + " residue sequence ";
  var v361 = fastaSequenceTitle$$3.search(/[^\s]/);
  var v83 = v361 != -1;
  if (v83) {
    var v362 = stringToReturn$$3 + '"';
    var v82 = v362 + fastaSequenceTitle$$3;
    stringToReturn$$3 = v82 + '"';
  }
  var v363 = stringToReturn$$3 + ' starting "';
  var v364 = sequence$$4.substring(0, 10);
  var v84 = v363 + v364;
  stringToReturn$$3 = v84 + '"';
  var v85 = '<div class="info">' + stringToReturn$$3;
  return v85 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v365 = sequenceOne$$1.length;
  var v86 = "Alignment results for " + v365;
  var stringToReturn$$4 = v86 + " residue sequence ";
  var v366 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v88 = v366 != -1;
  if (v88) {
    var v367 = stringToReturn$$4 + '"';
    var v87 = v367 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v87 + '"';
  }
  var v368 = stringToReturn$$4 + ' starting "';
  var v369 = sequenceOne$$1.substring(0, 10);
  var v89 = v368 + v369;
  stringToReturn$$4 = v89 + '"\n';
  var v370 = stringToReturn$$4 + "and ";
  var v371 = sequenceTwo$$1.length;
  var v90 = v370 + v371;
  stringToReturn$$4 = v90 + " residue sequence ";
  var v372 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v92 = v372 != -1;
  if (v92) {
    var v373 = stringToReturn$$4 + '"';
    var v91 = v373 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v91 + '"';
  }
  var v374 = stringToReturn$$4 + ' starting "';
  var v375 = sequenceTwo$$1.substring(0, 10);
  var v93 = v374 + v375;
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
    var v376 = Math.random();
    var v377 = components.length;
    var v95 = v376 * v377;
    tempNum = Math.floor(v95);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4++;
    v96 = j$$4 < lengthOut;
  }
  return sequenceArray.join("");
}
function getSequenceFromFasta(sequenceRecord) {
  var v378 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v97 = v378 != -1;
  if (v97) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "");
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v379 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v99 = v379 != -1;
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
  var v691 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v684 = v691 != -1;
  var v693 = !v684;
  if (v693) {
    var v692 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    v684 = v692 != -1;
  }
  var v675 = v684;
  var v686 = !v675;
  if (v686) {
    var v685 = expressionToCheck.search(/\[\]/);
    v675 = v685 != -1;
  }
  var v666 = v675;
  var v677 = !v666;
  if (v677) {
    var v676 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
    v666 = v676 != -1;
  }
  var v655 = v666;
  var v668 = !v655;
  if (v668) {
    var v667 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
    v655 = v667 != -1;
  }
  var v643 = v655;
  var v657 = !v643;
  if (v657) {
    var v656 = expressionToCheck.search(/\|\|/);
    v643 = v656 != -1;
  }
  var v631 = v643;
  var v645 = !v631;
  if (v645) {
    var v644 = expressionToCheck.search(/\/\|/);
    v631 = v644 != -1;
  }
  var v602 = v631;
  var v633 = !v602;
  if (v633) {
    var v632 = expressionToCheck.search(/\|\//);
    v602 = v632 != -1;
  }
  var v559 = v602;
  var v604 = !v559;
  if (v604) {
    var v603 = expressionToCheck.search(/\[.\]/);
    v559 = v603 != -1;
  }
  var v500 = v559;
  var v561 = !v500;
  if (v561) {
    var v560 = expressionToCheck.search(/\</);
    v500 = v560 != -1;
  }
  var v380 = v500;
  var v502 = !v380;
  if (v502) {
    var v501 = expressionToCheck.search(/\>/);
    v380 = v501 != -1;
  }
  var v100 = v380;
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
  var v562 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v503 = v562 + "<head>\n";
  var v381 = v503 + "<title>Sequence Manipulation Suite</title>\n";
  var v106 = v381 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v105.write(v106);
  if (isColor) {
    var v107 = outputWindow.document;
    var v706 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v702 = v706 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v698 = v702 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v694 = v698 + "div.info {font-weight: bold}\n";
    var v687 = v694 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v678 = v687 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v669 = v678 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v658 = v669 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v646 = v658 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v634 = v646 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v605 = v634 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v563 = v605 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v504 = v563 + "td.many {color: #000000}\n";
    var v382 = v504 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v108 = v382 + "</style>\n";
    v107.write(v108);
  } else {
    var v109 = outputWindow.document;
    var v710 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v707 = v710 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v703 = v707 + "div.title {display: none}\n";
    var v699 = v703 + "div.info {font-weight: bold}\n";
    var v695 = v699 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v688 = v695 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v679 = v688 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v670 = v679 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v659 = v670 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v647 = v659 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v635 = v647 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v606 = v635 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v564 = v606 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v505 = v564 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v383 = v505 + "img {display: none}\n";
    var v110 = v383 + "</style>\n";
    v109.write(v110);
  }
  var v111 = outputWindow.document;
  var v565 = "</head>\n" + '<body class="main">\n';
  var v506 = v565 + '<div class="title">';
  var v384 = v506 + title$$7;
  var v112 = v384 + " results</div>\n";
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
  var v566 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v507 = v566 + "<head>\n";
  var v385 = v507 + "<title>Sequence Manipulation Suite</title>\n";
  var v114 = v385 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v113.write(v114);
  if (isBackground) {
    var v115 = outputWindow.document;
    var v708 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v704 = v708 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v700 = v704 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v696 = v700 + "div.info {font-weight: bold}\n";
    var v689 = v696 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v680 = v689 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v671 = v680 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v660 = v671 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v648 = v660 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v636 = v648 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v607 = v636 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v567 = v607 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v508 = v567 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v386 = v508 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v116 = v386 + "</style>\n";
    v115.write(v116);
  } else {
    var v117 = outputWindow.document;
    var v712 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v711 = v712 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v709 = v711 + "div.title {display: none}\n";
    var v705 = v709 + "div.info {font-weight: bold}\n";
    var v701 = v705 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v697 = v701 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v690 = v697 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v681 = v690 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v672 = v681 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v661 = v672 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v649 = v661 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v637 = v649 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v608 = v637 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v568 = v608 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v509 = v568 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v387 = v509 + "img {display: none}\n";
    var v118 = v387 + "</style>\n";
    v117.write(v118);
  }
  var v119 = outputWindow.document;
  var v569 = "</head>\n" + '<body class="main">\n';
  var v510 = v569 + '<div class="title">';
  var v388 = v510 + title$$9;
  var v120 = v388 + " results</div>\n";
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
  var v389 = dnaSequence$$1.search(/./);
  var v121 = v389 != -1;
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
  var v390 = testArray[0];
  var v125 = v390 != testString;
  if (v125) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v391 = testString.search(re$$2);
  var v126 = v391 == -1;
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
  var v392 = testNum.toFixed(3);
  var v129 = v392 != 2489.824;
  if (v129) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v393 = testNum.toPrecision(5);
  var v130 = v393 != 2489.8;
  if (v130) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v394 = theNumber$$1.search(/\d/);
  var v131 = v394 == -1;
  if (v131) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v609 = emblFile.search(/ID/);
  var v570 = v609 == -1;
  var v611 = !v570;
  if (v611) {
    var v610 = emblFile.search(/AC/);
    v570 = v610 == -1;
  }
  var v511 = v570;
  var v572 = !v511;
  if (v572) {
    var v571 = emblFile.search(/DE/);
    v511 = v571 == -1;
  }
  var v395 = v511;
  var v513 = !v395;
  if (v513) {
    var v512 = emblFile.search(/SQ/);
    v395 = v512 == -1;
  }
  var v132 = v395;
  if (v132) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v396 = theNumber$$2.search(/\d/);
  var v133 = v396 == -1;
  if (v133) {
    alert("Please enter a number.");
    return false;
  }
  var v135 = theNumber$$2 > maxInput$$2;
  if (v135) {
    var v397 = "Please enter a number less than or equal to " + maxInput$$2;
    var v134 = v397 + ".";
    alert(v134);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v398 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v136 = v398 != -1;
  if (v136) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v399 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v137 = v399 != -1;
  if (v137) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v612 = genBankFile.search(/LOCUS/);
  var v573 = v612 == -1;
  var v614 = !v573;
  if (v614) {
    var v613 = genBankFile.search(/DEFINITION/);
    v573 = v613 == -1;
  }
  var v514 = v573;
  var v575 = !v514;
  if (v575) {
    var v574 = genBankFile.search(/ACCESSION/);
    v514 = v574 == -1;
  }
  var v400 = v514;
  var v516 = !v400;
  if (v516) {
    var v515 = genBankFile.search(/ORIGIN/);
    v400 = v515 == -1;
  }
  var v138 = v400;
  if (v138) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v615 = genBankFile$$1.search(/LOCUS/);
  var v576 = v615 == -1;
  var v617 = !v576;
  if (v617) {
    var v616 = genBankFile$$1.search(/DEFINITION/);
    v576 = v616 == -1;
  }
  var v517 = v576;
  var v578 = !v517;
  if (v578) {
    var v577 = genBankFile$$1.search(/ACCESSION/);
    v517 = v577 == -1;
  }
  var v401 = v517;
  var v519 = !v401;
  if (v519) {
    var v518 = genBankFile$$1.search(/ORIGIN/);
    v401 = v518 == -1;
  }
  var v139 = v401;
  if (v139) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v402 = genBankFile$$1.search(/FEATURES {13}/);
  var v140 = v402 == -1;
  if (v140) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v618 = emblFile$$1.search(/ID/);
  var v579 = v618 == -1;
  var v620 = !v579;
  if (v620) {
    var v619 = emblFile$$1.search(/AC/);
    v579 = v619 == -1;
  }
  var v520 = v579;
  var v581 = !v520;
  if (v581) {
    var v580 = emblFile$$1.search(/DE/);
    v520 = v580 == -1;
  }
  var v403 = v520;
  var v522 = !v403;
  if (v522) {
    var v521 = emblFile$$1.search(/SQ/);
    v403 = v521 == -1;
  }
  var v141 = v403;
  if (v141) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v404 = emblFile$$1.search(/^FT/m);
  var v142 = v404 == -1;
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
    var v405 = basePerLine / groupSize;
    var v146 = j$$6 <= v405;
    for (;v146;) {
      var v145 = k < groupSize;
      for (;v145;) {
        var v406 = k + i$$5;
        var v144 = text$$10.charAt(v406);
        lineOfText = lineOfText + v144;
        k = k + 1;
        v145 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v407 = basePerLine / groupSize;
      v146 = j$$6 <= v407;
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
    var v408 = adjustment < 0;
    if (v408) {
      v408 = adjusted >= 0;
    }
    var v150 = v408;
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
    var v409 = basePerLine$$2 / groupSize$$2;
    var v159 = j$$7 <= v409;
    for (;v159;) {
      var v154 = k$$1 < groupSize$$2;
      for (;v154;) {
        var v410 = i$$6 + k$$1;
        var v151 = v410 >= stopBase$$2;
        if (v151) {
          break;
        }
        var v152 = lineOfText$$1;
        var v411 = k$$1 + i$$6;
        var v153 = text$$12.charAt(v411);
        lineOfText$$1 = v152 + v153;
        k$$1 = k$$1 + 1;
        v154 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v157 = numberPosition$$1 == "above";
      if (v157) {
        var v155 = aboveNum;
        var v412 = adjustNumbering(i$$6, numberingAdjustment);
        var v156 = rightNum(v412, "", groupSize$$2, tabIn$$3);
        aboveNum = v155 + v156;
      }
      var v158 = i$$6 >= stopBase$$2;
      if (v158) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v413 = basePerLine$$2 / groupSize$$2;
      v159 = j$$7 <= v413;
    }
    var v182 = numberPosition$$1 == "left";
    if (v182) {
      var v160 = outputWindow.document;
      var v582 = adjustNumbering(lineNum, numberingAdjustment);
      var v523 = rightNum(v582, "", 8, tabIn$$3);
      var v414 = v523 + lineOfText$$1;
      var v161 = v414 + "\n";
      v160.write(v161);
      var v165 = strands$$1 == "two";
      if (v165) {
        var v162 = outputWindow.document;
        var v583 = adjustNumbering(lineNum, numberingAdjustment);
        var v524 = rightNum(v583, "", 8, tabIn$$3);
        var v525 = complement(lineOfText$$1);
        var v415 = v524 + v525;
        var v163 = v415 + "\n";
        v162.write(v163);
        var v164 = outputWindow.document;
        v164.write("\n");
      }
    } else {
      var v181 = numberPosition$$1 == "right";
      if (v181) {
        var v166 = outputWindow.document;
        var v526 = lineOfText$$1;
        var v527 = adjustNumbering(i$$6, numberingAdjustment);
        var v416 = v526 + v527;
        var v167 = v416 + "\n";
        v166.write(v167);
        var v171 = strands$$1 == "two";
        if (v171) {
          var v168 = outputWindow.document;
          var v528 = complement(lineOfText$$1);
          var v529 = adjustNumbering(i$$6, numberingAdjustment);
          var v417 = v528 + v529;
          var v169 = v417 + "\n";
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
            var v418 = complement(lineOfText$$1);
            var v177 = v418 + "\n";
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
    var v419 = basePerLine$$3 / groupSize$$3;
    var v190 = j$$8 <= v419;
    for (;v190;) {
      var v186 = k$$2 < groupSize$$3;
      for (;v186;) {
        var v420 = i$$7 + k$$2;
        var v184 = v420 >= stopBase$$3;
        if (v184) {
          break;
        }
        var v421 = k$$2 + i$$7;
        var v185 = text$$13.charAt(v421);
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
      var v422 = basePerLine$$3 / groupSize$$3;
      v190 = j$$8 <= v422;
    }
    var v201 = numberPosition$$2 == "left";
    if (v201) {
      var v191 = outputWindow.document;
      var v530 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v423 = v530 + lineOfText$$2;
      var v192 = v423 + "\n";
      v191.write(v192);
    } else {
      var v200 = numberPosition$$2 == "right";
      if (v200) {
        var v193 = outputWindow.document;
        var v424 = lineOfText$$2 + i$$7;
        var v194 = v424 + "\n";
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
  var v584 = sequence$$13.length;
  var v531 = v584 <= firstIndexToMutate;
  var v585 = !v531;
  if (v585) {
    v531 = lastIndexToMutate < 0;
  }
  var v425 = v531;
  var v532 = !v425;
  if (v532) {
    v425 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v203 = v425;
  if (v203) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v211 = i$$8 < numMut;
  for (;v211;) {
    maxNum = sequence$$13.length;
    var v426 = Math.random();
    var v204 = v426 * maxNum;
    randNum = Math.floor(v204);
    var v427 = randNum < firstIndexToMutate;
    var v533 = !v427;
    if (v533) {
      v427 = randNum > lastIndexToMutate;
    }
    var v205 = v427;
    if (v205) {
      numMut++;
      i$$8++;
      v211 = i$$8 < numMut;
      continue;
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for (;needNewChar;) {
      var v428 = Math.random();
      var v429 = components$$1.length;
      var v206 = v428 * v429;
      componentsIndex = Math.round(v206);
      var v430 = components$$1.length;
      var v207 = componentsIndex == v430;
      if (v207) {
        componentsIndex = 0;
      }
      var v431 = components$$1[componentsIndex];
      var v208 = v431 != currentChar;
      if (v208) {
        needNewChar = false;
      }
    }
    var v432 = sequence$$13.substring(0, randNum);
    var v433 = components$$1[componentsIndex];
    var v209 = v432 + v433;
    var v434 = randNum + 1;
    var v435 = sequence$$13.length;
    var v210 = sequence$$13.substring(v434, v435);
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
    var v436 = Math.random();
    var v437 = components$$2.length;
    var v214 = v436 * v437;
    tempNum$$1 = Math.floor(v214);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v438 = sequence$$14.length;
    var v217 = v438 == 60;
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
    var v586 = sequence$$15.length;
    var v534 = v586 - lookAhead;
    var v535 = sequence$$15.length;
    var v439 = sequence$$15.substring(v534, v535);
    var v222 = v439 + sequence$$15;
    var v223 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v222 + v223;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v225 = outputWindow.document;
  v225.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  var v226 = outputWindow.document;
  var v587 = '<tr><td class="title" width="200px">' + "Site:";
  var v536 = v587 + '</td><td class="title">';
  var v440 = v536 + "Positions:";
  var v227 = v440 + "</td></tr>\n";
  v226.write(v227);
  var i$$9 = 0;
  var v441 = arrayOfItems.length;
  var v243 = i$$9 < v441;
  for (;v243;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v442 = arrayOfItems[i$$9];
    var v228 = v442.match(/\/.+\//);
    matchExp = v228 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    var v588 = arrayOfItems[i$$9];
    var v537 = v588.match(/\)\D*\d+/);
    var v443 = v537.toString();
    var v229 = v443.replace(/\)\D*/, "");
    cutDistance = parseFloat(v229);
    var v235 = matchArray$$1 = matchExp.exec(sequence$$15);
    for (;v235;) {
      var v230 = matchExp.lastIndex;
      matchPosition = v230 - cutDistance;
      var v444 = matchPosition >= lowerLimit;
      if (v444) {
        v444 = matchPosition < upperLimit;
      }
      var v233 = v444;
      if (v233) {
        timesFound++;
        var v231 = tempString$$1 + ", ";
        var v445 = matchPosition - shiftValue;
        var v232 = v445 + 1;
        tempString$$1 = v231 + v232;
      }
      var v446 = matchExp.lastIndex;
      var v538 = RegExp.lastMatch;
      var v447 = v538.length;
      var v234 = v446 - v447;
      matchExp.lastIndex = v234 + 1;
      v235 = matchArray$$1 = matchExp.exec(sequence$$15);
    }
    var v448 = tempString$$1.search(/\d/);
    var v236 = v448 != -1;
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
    var v662 = '<tr><td class="' + backGroundClass;
    var v650 = v662 + '">';
    var v682 = arrayOfItems[i$$9];
    var v673 = v682.match(/\([^\(]+\)/);
    var v663 = v673.toString();
    var v651 = v663.replace(/\(|\)/g, "");
    var v638 = v650 + v651;
    var v621 = v638 + '</td><td class="';
    var v589 = v621 + backGroundClass;
    var v539 = v589 + '">';
    var v449 = v539 + tempString$$1;
    var v242 = v449 + "</td></tr>\n";
    v241.write(v242);
    timesFound = 0;
    i$$9++;
    var v450 = arrayOfItems.length;
    v243 = i$$9 < v450;
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
  var v639 = '<tr><td class="title">' + "Pattern:";
  var v622 = v639 + '</td><td class="title">';
  var v590 = v622 + "Times found:";
  var v540 = v590 + '</td><td class="title">';
  var v451 = v540 + "Percentage:";
  var v247 = v451 + "</td></tr>\n";
  v246.write(v247);
  var i$$10 = 0;
  var v452 = arrayOfItems$$1.length;
  var v256 = i$$10 < v452;
  for (;v256;) {
    var tempNumber = 0;
    var v453 = arrayOfItems$$1[i$$10];
    var v248 = v453.match(/\/[^\/]+\//);
    var matchExp$$1 = v248 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    var v454 = sequence$$16.search(matchExp$$1);
    var v250 = v454 != -1;
    if (v250) {
      var v249 = sequence$$16.match(matchExp$$1);
      tempNumber = v249.length;
    }
    var percentage = 0;
    var v541 = originalLength + 1;
    var v623 = arrayOfItems$$1[i$$10];
    var v591 = v623.match(/\d+/);
    var v542 = parseFloat(v591);
    var v455 = v541 - v542;
    var v253 = v455 > 0;
    if (v253) {
      var v251 = 100 * tempNumber;
      var v456 = originalLength + 1;
      var v592 = arrayOfItems$$1[i$$10];
      var v543 = v592.match(/\d+/);
      var v457 = parseFloat(v543);
      var v252 = v456 - v457;
      percentage = v251 / v252;
    }
    var v254 = outputWindow.document;
    var v683 = arrayOfItems$$1[i$$10];
    var v674 = v683.match(/\([^\(]+\)\b/);
    var v664 = v674.toString();
    var v652 = v664.replace(/\(|\)/g, "");
    var v640 = "<tr><td>" + v652;
    var v624 = v640 + "</td><td>";
    var v593 = v624 + tempNumber;
    var v544 = v593 + "</td><td>";
    var v545 = percentage.toFixed(2);
    var v458 = v544 + v545;
    var v255 = v458 + "</td></tr>\n";
    v254.write(v255);
    i$$10++;
    var v459 = arrayOfItems$$1.length;
    v256 = i$$10 < v459;
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
  var v460 = sequence$$17.length;
  var v264 = v460 > 0;
  for (;v264;) {
    maxNum$$1 = sequence$$17.length;
    var v461 = Math.random();
    var v258 = v461 * maxNum$$1;
    randNum$$1 = Math.floor(v258);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v259 = randNum$$1 + 1;
    var v260 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v259, v260);
    sequence$$17 = tempString1 + tempString2;
    var v462 = tempSeq.length;
    var v263 = v462 == 60;
    if (v263) {
      var v261 = outputWindow.document;
      var v262 = tempSeq + "\n";
      v261.write(v262);
      tempSeq = "";
    }
    var v463 = sequence$$17.length;
    v264 = v463 > 0;
  }
  var v265 = outputWindow.document;
  var v266 = tempSeq + "\n";
  v265.write(v266);
  return true;
}
function threeToOne(theDocument) {
  JAM.startProfile('compute');

  var newProtein = "";
  var maxInput$$3 = 1E5;
  var v464 = testScript();
  var v267 = v464 == false;
  if (v267) {
    return false;
  }
  var v653 = theDocument.forms;
  var v641 = v653[0];
  var v625 = v641.elements;
  var v594 = v625[0];
  var v546 = checkFormElement(v594);
  var v465 = v546 == false;
  var v548 = !v465;
  if (v548) {
    var v665 = theDocument.forms;
    var v654 = v665[0];
    var v642 = v654.elements;
    var v626 = v642[0];
    var v595 = v626.value;
    var v547 = checkTextLength(v595, maxInput$$3);
    v465 = v547 == false;
  }
  var v268 = v465;
  if (v268) {
    return false;
  }
  openWindow("Three to One");
  openPre();
  var v627 = theDocument.forms;
  var v596 = v627[0];
  var v549 = v596.elements;
  var v466 = v549[0];
  var v269 = v466.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v269);
  var i$$11 = 0;
  var v467 = arrayOfFasta$$1.length;
  var v275 = i$$11 < v467;
  for (;v275;) {
    var v270 = arrayOfFasta$$1[i$$11];
    newProtein = getTripletSequenceFromFasta(v270);
    var v271 = arrayOfFasta$$1[i$$11];
    title = getFastaTitleFromTriplets(v271);
    newProtein = filterTriplets(newProtein);
    var v272 = outputWindow.document;
    var v273 = getInfoFromTitleAndSequenceTriplets(title, newProtein);
    v272.write(v273);
    writeThreeToOne(newProtein);
    var v274 = outputWindow.document;
    v274.write("\n\n");
    i$$11++;
    var v468 = arrayOfFasta$$1.length;
    v275 = i$$11 < v468;
  }
  closePre();
  closeWindow();

  JAM.stopProfile('compute');
  return true;
}
function writeThreeToOne(proteinSequence$$1) {
  function v2(str$$8, p1$$2, p2, p3, offset$$10, s$$4) {
    var v469 = p1$$2.toUpperCase();
    var v470 = p2.toLowerCase();
    var v276 = v469 + v470;
    var v277 = p3.toLowerCase();
    return v276 + v277;
  }
  proteinSequence$$1 = proteinSequence$$1.replace(/(.)(.)(.)/g, v2);
  proteinSequence$$1 = proteinSequence$$1.replace(/Ala/g, " A ");
  proteinSequence$$1 = proteinSequence$$1.replace(/Asx/g, " B ");
  proteinSequence$$1 = proteinSequence$$1.replace(/Cys/g, " C ");
  proteinSequence$$1 = proteinSequence$$1.replace(/Asp/g, " D ");
  proteinSequence$$1 = proteinSequence$$1.replace(/Glu/g, " E ");
  proteinSequence$$1 = proteinSequence$$1.replace(/Phe/g, " F ");
  proteinSequence$$1 = proteinSequence$$1.replace(/Gly/g, " G ");
  proteinSequence$$1 = proteinSequence$$1.replace(/His/g, " H ");
  proteinSequence$$1 = proteinSequence$$1.replace(/Ile/g, " I ");
  proteinSequence$$1 = proteinSequence$$1.replace(/Lys/g, " K ");
  proteinSequence$$1 = proteinSequence$$1.replace(/Leu/g, " L ");
  proteinSequence$$1 = proteinSequence$$1.replace(/Met/g, " M ");
  proteinSequence$$1 = proteinSequence$$1.replace(/Asn/g, " N ");
  proteinSequence$$1 = proteinSequence$$1.replace(/Pro/g, " P ");
  proteinSequence$$1 = proteinSequence$$1.replace(/Gln/g, " Q ");
  proteinSequence$$1 = proteinSequence$$1.replace(/Arg/g, " R ");
  proteinSequence$$1 = proteinSequence$$1.replace(/Ser/g, " S ");
  proteinSequence$$1 = proteinSequence$$1.replace(/Thr/g, " T ");
  proteinSequence$$1 = proteinSequence$$1.replace(/Val/g, " V ");
  proteinSequence$$1 = proteinSequence$$1.replace(/Trp/g, " W ");
  proteinSequence$$1 = proteinSequence$$1.replace(/Xaa/g, " X ");
  proteinSequence$$1 = proteinSequence$$1.replace(/Tyr/g, " Y ");
  proteinSequence$$1 = proteinSequence$$1.replace(/Glx/g, " Z ");
  proteinSequence$$1 = proteinSequence$$1.replace(/\*\*\*/g, " * ");
  proteinSequence$$1 = proteinSequence$$1.replace(/\s/g, "");
  var v278 = outputWindow.document;
  var v279 = addReturns(proteinSequence$$1);
  v278.write(v279);
  return true;
}
function filterTriplets(tripletSequence) {
  tripletSequence = tripletSequence.replace(/\s|\d/gi, "");
  return tripletSequence;
}
function getFastaTitleFromTriplets(tripletSequence$$1) {
  fastaSequenceTitle = "Untitled";
  var v471 = tripletSequence$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v281 = v471 != -1;
  if (v281) {
    var v280 = tripletSequence$$1.match(/\>[^\f\n\r]+[\f\n\r]/, "");
    fastaSequenceTitle = v280.toString();
    fastaSequenceTitle = fastaSequenceTitle.replace(/\>|[\f\n\r]/g, "");
    fastaSequenceTitle = filterFastaTitle(fastaSequenceTitle);
  }
  return fastaSequenceTitle;
}
function getTripletSequenceFromFasta(tripletSequence$$2) {
  var v472 = tripletSequence$$2.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v282 = v472 != -1;
  if (v282) {
    tripletSequence$$2 = tripletSequence$$2.replace(/\>[^\f\n\r]+[\f\n\r]/, "");
  }
  return tripletSequence$$2;
}
function getInfoFromTitleAndSequenceTriplets(fastaSequenceTitle$$4, sequence$$18) {
  var stringToReturn$$5 = "&gt;results for sequence ";
  var v473 = fastaSequenceTitle$$4.search(/[^\s]/);
  var v284 = v473 != -1;
  if (v284) {
    var v474 = stringToReturn$$5 + '"';
    var v283 = v474 + fastaSequenceTitle$$4;
    stringToReturn$$5 = v283 + '"';
  }
  var v475 = stringToReturn$$5 + ' starting "';
  var v476 = sequence$$18.substring(0, 12);
  var v285 = v475 + v476;
  stringToReturn$$5 = v285 + '"';
  return stringToReturn$$5 + "\n";
}
document.onload = v3;
var v286 = document.getElementById("submitbtn");
v286.onclick = v4;
var v287 = document.getElementById("clearbtn");
v287.onclick = v5

JAM.stopProfile('load');
