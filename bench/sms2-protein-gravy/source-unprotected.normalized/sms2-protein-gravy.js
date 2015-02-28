function v4() {
  var v538 = document.forms;
  var v466 = v538[0];
  var v281 = v466.elements;
  var v5 = v281[0];
  v5.value = " ";
  return;
}
function v3() {
  try {
    proteinGravy();
  } catch (e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    alert(v6);
  }
  return;
}
function v2() {
  var v282 = document.main_form;
  var v7 = v282.main_submit;
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
  var v283 = arrayOfSequences.length;
  var v9 = v283 < 2;
  if (v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v284 = arrayOfTitles.length;
  var v11 = i$$1 < v284;
  for (;v11;) {
    var v585 = arrayOfTitles[i$$1];
    var v539 = v585.search(/\S/);
    var v467 = v539 == -1;
    var v541 = !v467;
    if (v541) {
      var v586 = arrayOfSequences[i$$1];
      var v540 = v586.search(/\S/);
      v467 = v540 == -1;
    }
    var v285 = v467;
    var v469 = !v285;
    if (v469) {
      var v542 = arrayOfSequences[i$$1];
      var v468 = v542.length;
      v285 = v468 != lengthOfAlign;
    }
    var v10 = v285;
    if (v10) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v286 = arrayOfTitles.length;
    v11 = i$$1 < v286;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v616 = codonTable.search(/AmAcid/);
  var v587 = v616 == -1;
  var v618 = !v587;
  if (v618) {
    var v617 = codonTable.search(/Codon/);
    v587 = v617 == -1;
  }
  var v543 = v587;
  var v589 = !v543;
  if (v589) {
    var v588 = codonTable.search(/Number/);
    v543 = v588 == -1;
  }
  var v470 = v543;
  var v545 = !v470;
  if (v545) {
    var v544 = codonTable.search(/\/1000/);
    v470 = v544 == -1;
  }
  var v287 = v470;
  var v472 = !v287;
  if (v472) {
    var v471 = codonTable.search(/Fraction\s*\.\./);
    v287 = v471 == -1;
  }
  var v12 = v287;
  if (v12) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v473 = formElement.value;
  var v288 = v473.search(/\S/);
  var v13 = v288 == -1;
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
  var v289 = arrayOfPatterns.length;
  var v16 = z$$2 < v289;
  for (;v16;) {
    var v474 = arrayOfPatterns[z$$2];
    var v290 = v474.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v14 = v290 == -1;
    if (v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v475 = arrayOfPatterns[z$$2];
    var v291 = moreExpressionCheck(v475);
    var v15 = v291 == false;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v292 = arrayOfPatterns.length;
    v16 = z$$2 < v292;
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v293 = arrayOfPatterns.length;
  var v22 = j < v293;
  for (;v22;) {
    var v476 = arrayOfPatterns[j];
    var v294 = v476.match(/\/.+\//);
    var v19 = v294 + "gi";
    var v701 = eval(v19);
    geneticCodeMatchExp[j] = v701;
    var v295 = arrayOfPatterns[j];
    var v20 = v295.match(/=[a-zA-Z\*]/);
    var v702 = v20.toString();
    geneticCodeMatchResult[j] = v702;
    var v21 = geneticCodeMatchResult[j];
    var v703 = v21.replace(/=/g, "");
    geneticCodeMatchResult[j] = v703;
    j++;
    var v296 = arrayOfPatterns.length;
    v22 = j < v296;
  }
  var i$$2 = 0;
  var v477 = testSequence.length;
  var v297 = v477 - 3;
  var v29 = i$$2 <= v297;
  for (;v29;) {
    var v23 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v23);
    j = 0;
    var v298 = geneticCodeMatchExp.length;
    var v27 = j < v298;
    for (;v27;) {
      var v478 = geneticCodeMatchExp[j];
      var v299 = codon.search(v478);
      var v26 = v299 != -1;
      if (v26) {
        var v25 = oneMatch == true;
        if (v25) {
          var v300 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v24 = v300 + ".";
          alert(v24);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v301 = geneticCodeMatchExp.length;
      v27 = j < v301;
    }
    var v28 = oneMatch == false;
    if (v28) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v479 = testSequence.length;
    var v302 = v479 - 3;
    v29 = i$$2 <= v302;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v303 = arrayOfPatterns$$1.length;
  var v31 = z$$3 < v303;
  for (;v31;) {
    var v480 = arrayOfPatterns$$1[z$$3];
    var v304 = v480.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v30 = v304 != -1;
    if (v30) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v305 = arrayOfPatterns$$1.length;
    v31 = z$$3 < v305;
  }
  var i$$3 = 0;
  var v306 = arrayOfPatterns$$1.length;
  var v35 = i$$3 < v306;
  for (;v35;) {
    var v481 = arrayOfPatterns$$1[i$$3];
    var v307 = "[" + v481;
    var v32 = v307 + "]";
    var re = new RegExp(v32, "gi");
    var j$$1 = i$$3 + 1;
    var v308 = arrayOfPatterns$$1.length;
    var v34 = j$$1 < v308;
    for (;v34;) {
      var v482 = arrayOfPatterns$$1[j$$1];
      var v309 = v482.search(re);
      var v33 = v309 != -1;
      if (v33) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v310 = arrayOfPatterns$$1.length;
      v34 = j$$1 < v310;
    }
    i$$3++;
    var v311 = arrayOfPatterns$$1.length;
    v35 = i$$3 < v311;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v312 = arrayOfPatterns$$2.length;
  var v38 = z$$4 < v312;
  for (;v38;) {
    var v483 = arrayOfPatterns$$2[z$$4];
    var v313 = v483.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v36 = v313 == -1;
    if (v36) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v484 = arrayOfPatterns$$2[z$$4];
    var v314 = moreExpressionCheck(v484);
    var v37 = v314 == false;
    if (v37) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v315 = arrayOfPatterns$$2.length;
    v38 = z$$4 < v315;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v546 = getSequenceFromFasta(text$$7);
  var v485 = v546.replace(/[^A-Za-z]/g, "");
  var v316 = v485.length;
  var v40 = v316 > maxInput;
  if (v40) {
    var v317 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v39 = v317 + " characters.";
    alert(v39);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v318 = text$$8.length;
  var v42 = v318 > maxInput$$1;
  if (v42) {
    var v319 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v41 = v319 + " characters.";
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
  var v320 = alignArray.length;
  var v49 = v320 < 3;
  if (v49) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v321 = alignArray.length;
  var v51 = i$$4 < v321;
  for (;v51;) {
    var v486 = alignArray[i$$4];
    var v322 = v486.search(/[^\s]+\s/);
    var v50 = v322 == -1;
    if (v50) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v323 = alignArray.length;
    v51 = i$$4 < v323;
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
  var v324 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v54 = v324 != -1;
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
  var v325 = sequence$$2.length;
  var v55 = "&gt;results for " + v325;
  var stringToReturn = v55 + " residue sequence ";
  var v326 = fastaSequenceTitle.search(/[^\s]/);
  var v57 = v326 != -1;
  if (v57) {
    var v327 = stringToReturn + '"';
    var v56 = v327 + fastaSequenceTitle;
    stringToReturn = v56 + '"';
  }
  var v328 = stringToReturn + ' starting "';
  var v329 = sequence$$2.substring(0, 10);
  var v58 = v328 + v329;
  stringToReturn = v58 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v330 = sequenceOne.length;
  var v59 = "Search results for " + v330;
  var stringToReturn$$1 = v59 + " residue sequence ";
  var v331 = fastaSequenceTitleOne.search(/[^\s]/);
  var v61 = v331 != -1;
  if (v61) {
    var v332 = stringToReturn$$1 + '"';
    var v60 = v332 + fastaSequenceTitleOne;
    stringToReturn$$1 = v60 + '"';
  }
  var v333 = stringToReturn$$1 + ' starting "';
  var v334 = sequenceOne.substring(0, 10);
  var v62 = v333 + v334;
  stringToReturn$$1 = v62 + '"\n';
  var v335 = stringToReturn$$1 + "and ";
  var v336 = sequenceTwo.length;
  var v63 = v335 + v336;
  stringToReturn$$1 = v63 + " residue sequence ";
  var v337 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v65 = v337 != -1;
  if (v65) {
    var v338 = stringToReturn$$1 + '"';
    var v64 = v338 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v64 + '"';
  }
  var v339 = stringToReturn$$1 + ' starting "';
  var v340 = sequenceTwo.substring(0, 10);
  var v66 = v339 + v340;
  stringToReturn$$1 = v66 + '"';
  var v67 = '<div class="info">' + stringToReturn$$1;
  return v67 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v68 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v68);
  var j$$2 = 0;
  var v341 = arrayOfPatterns$$3.length;
  var v70 = j$$2 < v341;
  for (;v70;) {
    var v487 = arrayOfPatterns$$3[j$$2];
    var v342 = v487.match(/\/.+\//);
    var v69 = v342 + "gi";
    var v704 = eval(v69);
    geneticCodeMatchExp$$1[j$$2] = v704;
    j$$2++;
    var v343 = arrayOfPatterns$$3.length;
    v70 = j$$2 < v343;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v71 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v71);
  var j$$3 = 0;
  var v344 = arrayOfPatterns$$4.length;
  var v74 = j$$3 < v344;
  for (;v74;) {
    var v345 = arrayOfPatterns$$4[j$$3];
    var v72 = v345.match(/=[a-zA-Z\*]/);
    var v705 = v72.toString();
    geneticCodeMatchResult$$1[j$$3] = v705;
    var v73 = geneticCodeMatchResult$$1[j$$3];
    var v706 = v73.replace(/=/g, "");
    geneticCodeMatchResult$$1[j$$3] = v706;
    j$$3++;
    var v346 = arrayOfPatterns$$4.length;
    v74 = j$$3 < v346;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v347 = sequence$$3.length;
  var v75 = "Results for " + v347;
  var stringToReturn$$2 = v75 + " residue sequence ";
  var v348 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v77 = v348 != -1;
  if (v77) {
    var v349 = stringToReturn$$2 + '"';
    var v76 = v349 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v76 + '"';
  }
  var v350 = stringToReturn$$2 + ' starting "';
  var v351 = sequence$$3.substring(0, 10);
  var v78 = v350 + v351;
  stringToReturn$$2 = v78 + '"';
  var v79 = '<div class="info">' + stringToReturn$$2;
  return v79 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v488 = "Results for " + topology;
  var v352 = v488 + " ";
  var v353 = sequence$$4.length;
  var v80 = v352 + v353;
  var stringToReturn$$3 = v80 + " residue sequence ";
  var v354 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v82 = v354 != -1;
  if (v82) {
    var v355 = stringToReturn$$3 + '"';
    var v81 = v355 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v81 + '"';
  }
  var v356 = stringToReturn$$3 + ' starting "';
  var v357 = sequence$$4.substring(0, 10);
  var v83 = v356 + v357;
  stringToReturn$$3 = v83 + '"';
  var v84 = '<div class="info">' + stringToReturn$$3;
  return v84 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v358 = sequenceOne$$1.length;
  var v85 = "Alignment results for " + v358;
  var stringToReturn$$4 = v85 + " residue sequence ";
  var v359 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v87 = v359 != -1;
  if (v87) {
    var v360 = stringToReturn$$4 + '"';
    var v86 = v360 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v86 + '"';
  }
  var v361 = stringToReturn$$4 + ' starting "';
  var v362 = sequenceOne$$1.substring(0, 10);
  var v88 = v361 + v362;
  stringToReturn$$4 = v88 + '"\n';
  var v363 = stringToReturn$$4 + "and ";
  var v364 = sequenceTwo$$1.length;
  var v89 = v363 + v364;
  stringToReturn$$4 = v89 + " residue sequence ";
  var v365 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v91 = v365 != -1;
  if (v91) {
    var v366 = stringToReturn$$4 + '"';
    var v90 = v366 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v90 + '"';
  }
  var v367 = stringToReturn$$4 + ' starting "';
  var v368 = sequenceTwo$$1.substring(0, 10);
  var v92 = v367 + v368;
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
    var v369 = Math.random();
    var v370 = components.length;
    var v94 = v369 * v370;
    tempNum = Math.floor(v94);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4++;
    v95 = j$$4 < lengthOut;
  }
  return sequenceArray.join("");
}
function getSequenceFromFasta(sequenceRecord) {
  var v371 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v96 = v371 != -1;
  if (v96) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "");
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v372 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v98 = v372 != -1;
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
  var v679 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v672 = v679 != -1;
  var v681 = !v672;
  if (v681) {
    var v680 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    v672 = v680 != -1;
  }
  var v663 = v672;
  var v674 = !v663;
  if (v674) {
    var v673 = expressionToCheck.search(/\[\]/);
    v663 = v673 != -1;
  }
  var v654 = v663;
  var v665 = !v654;
  if (v665) {
    var v664 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
    v654 = v664 != -1;
  }
  var v643 = v654;
  var v656 = !v643;
  if (v656) {
    var v655 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
    v643 = v655 != -1;
  }
  var v631 = v643;
  var v645 = !v631;
  if (v645) {
    var v644 = expressionToCheck.search(/\|\|/);
    v631 = v644 != -1;
  }
  var v619 = v631;
  var v633 = !v619;
  if (v633) {
    var v632 = expressionToCheck.search(/\/\|/);
    v619 = v632 != -1;
  }
  var v590 = v619;
  var v621 = !v590;
  if (v621) {
    var v620 = expressionToCheck.search(/\|\//);
    v590 = v620 != -1;
  }
  var v547 = v590;
  var v592 = !v547;
  if (v592) {
    var v591 = expressionToCheck.search(/\[.\]/);
    v547 = v591 != -1;
  }
  var v489 = v547;
  var v549 = !v489;
  if (v549) {
    var v548 = expressionToCheck.search(/\</);
    v489 = v548 != -1;
  }
  var v373 = v489;
  var v491 = !v373;
  if (v491) {
    var v490 = expressionToCheck.search(/\>/);
    v373 = v490 != -1;
  }
  var v99 = v373;
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
  var title$$5 = "Protein GRAVY";
  _openWindow(title$$5);
  return;
}
function _openWindow(title$$6) {
  var isColor = true;
  outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  outputWindow.focus();
  var v104 = outputWindow.document;
  var v550 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v492 = v550 + "<head>\n";
  var v374 = v492 + "<title>Sequence Manipulation Suite</title>\n";
  var v105 = v374 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v104.write(v105);
  if (isColor) {
    var v106 = outputWindow.document;
    var v694 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v690 = v694 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v686 = v690 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v682 = v686 + "div.info {font-weight: bold}\n";
    var v675 = v682 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v666 = v675 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v657 = v666 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v646 = v657 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v634 = v646 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v622 = v634 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v593 = v622 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v551 = v593 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v493 = v551 + "td.many {color: #000000}\n";
    var v375 = v493 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v107 = v375 + "</style>\n";
    v106.write(v107);
  } else {
    var v108 = outputWindow.document;
    var v698 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v695 = v698 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v691 = v695 + "div.title {display: none}\n";
    var v687 = v691 + "div.info {font-weight: bold}\n";
    var v683 = v687 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v676 = v683 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v667 = v676 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v658 = v667 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v647 = v658 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v635 = v647 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v623 = v635 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v594 = v623 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v552 = v594 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v494 = v552 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v376 = v494 + "img {display: none}\n";
    var v109 = v376 + "</style>\n";
    v108.write(v109);
  }
  var v110 = outputWindow.document;
  var v553 = "</head>\n" + '<body class="main">\n';
  var v495 = v553 + '<div class="title">';
  var v377 = v495 + title$$6;
  var v111 = v377 + " results</div>\n";
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
  var v554 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v496 = v554 + "<head>\n";
  var v378 = v496 + "<title>Sequence Manipulation Suite</title>\n";
  var v113 = v378 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v112.write(v113);
  if (isBackground) {
    var v114 = outputWindow.document;
    var v696 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v692 = v696 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v688 = v692 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v684 = v688 + "div.info {font-weight: bold}\n";
    var v677 = v684 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v668 = v677 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v659 = v668 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v648 = v659 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v636 = v648 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v624 = v636 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v595 = v624 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v555 = v595 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v497 = v555 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v379 = v497 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v115 = v379 + "</style>\n";
    v114.write(v115);
  } else {
    var v116 = outputWindow.document;
    var v700 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v699 = v700 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v697 = v699 + "div.title {display: none}\n";
    var v693 = v697 + "div.info {font-weight: bold}\n";
    var v689 = v693 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v685 = v689 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v678 = v685 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v669 = v678 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v660 = v669 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v649 = v660 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v637 = v649 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v625 = v637 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v596 = v625 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v556 = v596 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v498 = v556 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v380 = v498 + "img {display: none}\n";
    var v117 = v380 + "</style>\n";
    v116.write(v117);
  }
  var v118 = outputWindow.document;
  var v557 = "</head>\n" + '<body class="main">\n';
  var v499 = v557 + '<div class="title">';
  var v381 = v499 + title$$8;
  var v119 = v381 + " results</div>\n";
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
  var v382 = dnaSequence$$1.search(/./);
  var v120 = v382 != -1;
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
  var v383 = testArray[0];
  var v124 = v383 != testString;
  if (v124) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v384 = testString.search(re$$2);
  var v125 = v384 == -1;
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
  var v385 = testNum.toFixed(3);
  var v128 = v385 != 2489.824;
  if (v128) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v386 = testNum.toPrecision(5);
  var v129 = v386 != 2489.8;
  if (v129) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v387 = theNumber$$1.search(/\d/);
  var v130 = v387 == -1;
  if (v130) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v597 = emblFile.search(/ID/);
  var v558 = v597 == -1;
  var v599 = !v558;
  if (v599) {
    var v598 = emblFile.search(/AC/);
    v558 = v598 == -1;
  }
  var v500 = v558;
  var v560 = !v500;
  if (v560) {
    var v559 = emblFile.search(/DE/);
    v500 = v559 == -1;
  }
  var v388 = v500;
  var v502 = !v388;
  if (v502) {
    var v501 = emblFile.search(/SQ/);
    v388 = v501 == -1;
  }
  var v131 = v388;
  if (v131) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v389 = theNumber$$2.search(/\d/);
  var v132 = v389 == -1;
  if (v132) {
    alert("Please enter a number.");
    return false;
  }
  var v134 = theNumber$$2 > maxInput$$2;
  if (v134) {
    var v390 = "Please enter a number less than or equal to " + maxInput$$2;
    var v133 = v390 + ".";
    alert(v133);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v391 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v135 = v391 != -1;
  if (v135) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v392 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v136 = v392 != -1;
  if (v136) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v600 = genBankFile.search(/LOCUS/);
  var v561 = v600 == -1;
  var v602 = !v561;
  if (v602) {
    var v601 = genBankFile.search(/DEFINITION/);
    v561 = v601 == -1;
  }
  var v503 = v561;
  var v563 = !v503;
  if (v563) {
    var v562 = genBankFile.search(/ACCESSION/);
    v503 = v562 == -1;
  }
  var v393 = v503;
  var v505 = !v393;
  if (v505) {
    var v504 = genBankFile.search(/ORIGIN/);
    v393 = v504 == -1;
  }
  var v137 = v393;
  if (v137) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v603 = genBankFile$$1.search(/LOCUS/);
  var v564 = v603 == -1;
  var v605 = !v564;
  if (v605) {
    var v604 = genBankFile$$1.search(/DEFINITION/);
    v564 = v604 == -1;
  }
  var v506 = v564;
  var v566 = !v506;
  if (v566) {
    var v565 = genBankFile$$1.search(/ACCESSION/);
    v506 = v565 == -1;
  }
  var v394 = v506;
  var v508 = !v394;
  if (v508) {
    var v507 = genBankFile$$1.search(/ORIGIN/);
    v394 = v507 == -1;
  }
  var v138 = v394;
  if (v138) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v395 = genBankFile$$1.search(/FEATURES {13}/);
  var v139 = v395 == -1;
  if (v139) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v606 = emblFile$$1.search(/ID/);
  var v567 = v606 == -1;
  var v608 = !v567;
  if (v608) {
    var v607 = emblFile$$1.search(/AC/);
    v567 = v607 == -1;
  }
  var v509 = v567;
  var v569 = !v509;
  if (v569) {
    var v568 = emblFile$$1.search(/DE/);
    v509 = v568 == -1;
  }
  var v396 = v509;
  var v511 = !v396;
  if (v511) {
    var v510 = emblFile$$1.search(/SQ/);
    v396 = v510 == -1;
  }
  var v140 = v396;
  if (v140) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v397 = emblFile$$1.search(/^FT/m);
  var v141 = v397 == -1;
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
    var v398 = basePerLine / groupSize;
    var v145 = j$$6 <= v398;
    for (;v145;) {
      var v144 = k < groupSize;
      for (;v144;) {
        var v399 = k + i$$5;
        var v143 = text$$10.charAt(v399);
        lineOfText = lineOfText + v143;
        k = k + 1;
        v144 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v400 = basePerLine / groupSize;
      v145 = j$$6 <= v400;
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
    var v401 = adjustment < 0;
    if (v401) {
      v401 = adjusted >= 0;
    }
    var v149 = v401;
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
    var v402 = basePerLine$$2 / groupSize$$2;
    var v156 = j$$7 <= v402;
    for (;v156;) {
      var v152 = k$$1 < groupSize$$2;
      for (;v152;) {
        var v403 = i$$6 + k$$1;
        var v150 = v403 >= stopBase$$2;
        if (v150) {
          break;
        }
        var v404 = k$$1 + i$$6;
        var v151 = text$$12.charAt(v404);
        lineOfText$$1 = lineOfText$$1 + v151;
        k$$1 = k$$1 + 1;
        v152 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v154 = numberPosition$$1 == "above";
      if (v154) {
        var v405 = adjustNumbering(i$$6, numberingAdjustment);
        var v153 = rightNum(v405, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v153;
      }
      var v155 = i$$6 >= stopBase$$2;
      if (v155) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v406 = basePerLine$$2 / groupSize$$2;
      v156 = j$$7 <= v406;
    }
    var v179 = numberPosition$$1 == "left";
    if (v179) {
      var v157 = outputWindow.document;
      var v570 = adjustNumbering(lineNum, numberingAdjustment);
      var v512 = rightNum(v570, "", 8, tabIn$$3);
      var v407 = v512 + lineOfText$$1;
      var v158 = v407 + "\n";
      v157.write(v158);
      var v162 = strands$$1 == "two";
      if (v162) {
        var v159 = outputWindow.document;
        var v571 = adjustNumbering(lineNum, numberingAdjustment);
        var v513 = rightNum(v571, "", 8, tabIn$$3);
        var v514 = complement(lineOfText$$1);
        var v408 = v513 + v514;
        var v160 = v408 + "\n";
        v159.write(v160);
        var v161 = outputWindow.document;
        v161.write("\n");
      }
    } else {
      var v178 = numberPosition$$1 == "right";
      if (v178) {
        var v163 = outputWindow.document;
        var v515 = adjustNumbering(i$$6, numberingAdjustment);
        var v409 = lineOfText$$1 + v515;
        var v164 = v409 + "\n";
        v163.write(v164);
        var v168 = strands$$1 == "two";
        if (v168) {
          var v165 = outputWindow.document;
          var v516 = complement(lineOfText$$1);
          var v517 = adjustNumbering(i$$6, numberingAdjustment);
          var v410 = v516 + v517;
          var v166 = v410 + "\n";
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
            var v411 = complement(lineOfText$$1);
            var v174 = v411 + "\n";
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
    var v412 = basePerLine$$3 / groupSize$$3;
    var v187 = j$$8 <= v412;
    for (;v187;) {
      var v183 = k$$2 < groupSize$$3;
      for (;v183;) {
        var v413 = i$$7 + k$$2;
        var v181 = v413 >= stopBase$$3;
        if (v181) {
          break;
        }
        var v414 = k$$2 + i$$7;
        var v182 = text$$13.charAt(v414);
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
      var v415 = basePerLine$$3 / groupSize$$3;
      v187 = j$$8 <= v415;
    }
    var v198 = numberPosition$$2 == "left";
    if (v198) {
      var v188 = outputWindow.document;
      var v518 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v416 = v518 + lineOfText$$2;
      var v189 = v416 + "\n";
      v188.write(v189);
    } else {
      var v197 = numberPosition$$2 == "right";
      if (v197) {
        var v190 = outputWindow.document;
        var v417 = lineOfText$$2 + i$$7;
        var v191 = v417 + "\n";
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
  var v572 = sequence$$13.length;
  var v519 = v572 <= firstIndexToMutate;
  var v573 = !v519;
  if (v573) {
    v519 = lastIndexToMutate < 0;
  }
  var v418 = v519;
  var v520 = !v418;
  if (v520) {
    v418 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v200 = v418;
  if (v200) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v208 = i$$8 < numMut;
  for (;v208;) {
    maxNum = sequence$$13.length;
    var v419 = Math.random();
    var v201 = v419 * maxNum;
    randNum = Math.floor(v201);
    var v420 = randNum < firstIndexToMutate;
    var v521 = !v420;
    if (v521) {
      v420 = randNum > lastIndexToMutate;
    }
    var v202 = v420;
    if (v202) {
      numMut++;
      i$$8++;
      v208 = i$$8 < numMut;
      continue;
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for (;needNewChar;) {
      var v421 = Math.random();
      var v422 = components$$1.length;
      var v203 = v421 * v422;
      componentsIndex = Math.round(v203);
      var v423 = components$$1.length;
      var v204 = componentsIndex == v423;
      if (v204) {
        componentsIndex = 0;
      }
      var v424 = components$$1[componentsIndex];
      var v205 = v424 != currentChar;
      if (v205) {
        needNewChar = false;
      }
    }
    var v425 = sequence$$13.substring(0, randNum);
    var v426 = components$$1[componentsIndex];
    var v206 = v425 + v426;
    var v427 = randNum + 1;
    var v428 = sequence$$13.length;
    var v207 = sequence$$13.substring(v427, v428);
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
    var v429 = Math.random();
    var v430 = components$$2.length;
    var v211 = v429 * v430;
    tempNum$$1 = Math.floor(v211);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v431 = sequence$$14.length;
    var v214 = v431 == 60;
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
  var v221 = dnaConformation == "circular";
  if (v221) {
    var v218 = sequence$$15.substring(0, lookAhead);
    shiftValue = v218.length;
    var v574 = sequence$$15.length;
    var v522 = v574 - lookAhead;
    var v523 = sequence$$15.length;
    var v432 = sequence$$15.substring(v522, v523);
    var v219 = v432 + sequence$$15;
    var v220 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v219 + v220;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v222 = outputWindow.document;
  v222.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  var v223 = outputWindow.document;
  var v575 = '<tr><td class="title" width="200px">' + "Site:";
  var v524 = v575 + '</td><td class="title">';
  var v433 = v524 + "Positions:";
  var v224 = v433 + "</td></tr>\n";
  v223.write(v224);
  var i$$9 = 0;
  var v434 = arrayOfItems.length;
  var v240 = i$$9 < v434;
  for (;v240;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v435 = arrayOfItems[i$$9];
    var v225 = v435.match(/\/.+\//);
    matchExp = v225 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    var v576 = arrayOfItems[i$$9];
    var v525 = v576.match(/\)\D*\d+/);
    var v436 = v525.toString();
    var v226 = v436.replace(/\)\D*/, "");
    cutDistance = parseFloat(v226);
    var v232 = matchArray$$1 = matchExp.exec(sequence$$15);
    for (;v232;) {
      var v227 = matchExp.lastIndex;
      matchPosition = v227 - cutDistance;
      var v437 = matchPosition >= lowerLimit;
      if (v437) {
        v437 = matchPosition < upperLimit;
      }
      var v230 = v437;
      if (v230) {
        timesFound++;
        var v228 = tempString$$1 + ", ";
        var v438 = matchPosition - shiftValue;
        var v229 = v438 + 1;
        tempString$$1 = v228 + v229;
      }
      var v439 = matchExp.lastIndex;
      var v526 = RegExp.lastMatch;
      var v440 = v526.length;
      var v231 = v439 - v440;
      matchExp.lastIndex = v231 + 1;
      v232 = matchArray$$1 = matchExp.exec(sequence$$15);
    }
    var v441 = tempString$$1.search(/\d/);
    var v233 = v441 != -1;
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
    var v650 = '<tr><td class="' + backGroundClass;
    var v638 = v650 + '">';
    var v670 = arrayOfItems[i$$9];
    var v661 = v670.match(/\([^\(]+\)/);
    var v651 = v661.toString();
    var v639 = v651.replace(/\(|\)/g, "");
    var v626 = v638 + v639;
    var v609 = v626 + '</td><td class="';
    var v577 = v609 + backGroundClass;
    var v527 = v577 + '">';
    var v442 = v527 + tempString$$1;
    var v239 = v442 + "</td></tr>\n";
    v238.write(v239);
    timesFound = 0;
    i$$9++;
    var v443 = arrayOfItems.length;
    v240 = i$$9 < v443;
  }
  var v241 = outputWindow.document;
  v241.write("</tbody></table>\n");
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v242 = outputWindow.document;
  v242.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  var v243 = outputWindow.document;
  var v627 = '<tr><td class="title">' + "Pattern:";
  var v610 = v627 + '</td><td class="title">';
  var v578 = v610 + "Times found:";
  var v528 = v578 + '</td><td class="title">';
  var v444 = v528 + "Percentage:";
  var v244 = v444 + "</td></tr>\n";
  v243.write(v244);
  var i$$10 = 0;
  var v445 = arrayOfItems$$1.length;
  var v253 = i$$10 < v445;
  for (;v253;) {
    var tempNumber = 0;
    var v446 = arrayOfItems$$1[i$$10];
    var v245 = v446.match(/\/[^\/]+\//);
    var matchExp$$1 = v245 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    var v447 = sequence$$16.search(matchExp$$1);
    var v247 = v447 != -1;
    if (v247) {
      var v246 = sequence$$16.match(matchExp$$1);
      tempNumber = v246.length;
    }
    var percentage = 0;
    var v529 = originalLength + 1;
    var v611 = arrayOfItems$$1[i$$10];
    var v579 = v611.match(/\d+/);
    var v530 = parseFloat(v579);
    var v448 = v529 - v530;
    var v250 = v448 > 0;
    if (v250) {
      var v248 = 100 * tempNumber;
      var v449 = originalLength + 1;
      var v580 = arrayOfItems$$1[i$$10];
      var v531 = v580.match(/\d+/);
      var v450 = parseFloat(v531);
      var v249 = v449 - v450;
      percentage = v248 / v249;
    }
    var v251 = outputWindow.document;
    var v671 = arrayOfItems$$1[i$$10];
    var v662 = v671.match(/\([^\(]+\)\b/);
    var v652 = v662.toString();
    var v640 = v652.replace(/\(|\)/g, "");
    var v628 = "<tr><td>" + v640;
    var v612 = v628 + "</td><td>";
    var v581 = v612 + tempNumber;
    var v532 = v581 + "</td><td>";
    var v533 = percentage.toFixed(2);
    var v451 = v532 + v533;
    var v252 = v451 + "</td></tr>\n";
    v251.write(v252);
    i$$10++;
    var v452 = arrayOfItems$$1.length;
    v253 = i$$10 < v452;
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
  var v453 = sequence$$17.length;
  var v261 = v453 > 0;
  for (;v261;) {
    maxNum$$1 = sequence$$17.length;
    var v454 = Math.random();
    var v255 = v454 * maxNum$$1;
    randNum$$1 = Math.floor(v255);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v256 = randNum$$1 + 1;
    var v257 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v256, v257);
    sequence$$17 = tempString1 + tempString2;
    var v455 = tempSeq.length;
    var v260 = v455 == 60;
    if (v260) {
      var v258 = outputWindow.document;
      var v259 = tempSeq + "\n";
      v258.write(v259);
      tempSeq = "";
    }
    var v456 = sequence$$17.length;
    v261 = v456 > 0;
  }
  var v262 = outputWindow.document;
  var v263 = tempSeq + "\n";
  v262.write(v263);
  return true;
}
function proteinGravy() {
  var theDocument = document;
  var newProtein = "";
  var title$$9 = "";
  var maxInput$$3 = 5E5;
  var v457 = testScript();
  var v264 = v457 == false;
  if (v264) {
    return;
  }
  var v641 = theDocument.forms;
  var v629 = v641[0];
  var v613 = v629.elements;
  var v582 = v613[0];
  var v534 = checkFormElement(v582);
  var v458 = v534 == false;
  var v536 = !v458;
  if (v536) {
    var v653 = theDocument.forms;
    var v642 = v653[0];
    var v630 = v642.elements;
    var v614 = v630[0];
    var v583 = v614.value;
    var v535 = checkSequenceLength(v583, maxInput$$3);
    v458 = v535 == false;
  }
  var v265 = v458;
  if (v265) {
    return;
  }
  openWindow();
  var v615 = theDocument.forms;
  var v584 = v615[0];
  var v537 = v584.elements;
  var v459 = v537[0];
  var v266 = v459.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v266);
  var i$$11 = 0;
  var v460 = arrayOfFasta$$1.length;
  var v274 = i$$11 < v460;
  for (;v274;) {
    var v267 = arrayOfFasta$$1[i$$11];
    newProtein = getSequenceFromFasta(v267);
    var v268 = arrayOfFasta$$1[i$$11];
    title$$9 = getTitleFromFasta(v268);
    newProtein = removeNonProtein(newProtein);
    var v269 = outputWindow.document;
    var v270 = getInfoFromTitleAndSequence(title$$9, newProtein);
    v269.write(v270);
    var v271 = outputWindow.document;
    var v272 = getProteinGravy(newProtein);
    v271.write(v272);
    var v273 = outputWindow.document;
    v273.write("<br />\n<br />\n");
    i$$11++;
    var v461 = arrayOfFasta$$1.length;
    v274 = i$$11 < v461;
  }
  closeWindow();
  return;
}
function getProteinGravy(sequence$$18) {
  sequence$$18 = sequence$$18.toLowerCase();
  var gravyResult = 0;
  var gravyValues = _getGravyHash();
  var i$$12 = 0;
  var v462 = sequence$$18.length;
  var v276 = i$$12 < v462;
  for (;v276;) {
    var v463 = sequence$$18.charAt(i$$12);
    var v275 = gravyValues[v463];
    gravyResult = gravyResult + v275;
    i$$12++;
    var v464 = sequence$$18.length;
    v276 = i$$12 < v464;
  }
  var v465 = sequence$$18.length;
  var v278 = v465 > 0;
  if (v278) {
    var v277 = sequence$$18.length;
    gravyResult = gravyResult / v277;
  } else {
    return "The sequence is too short";
  }
  return gravyResult.toFixed(3);
}
function _getGravyHash() {
  var hash = {};
  hash["a"] = 1.8;
  hash["r"] = -4.5;
  hash["n"] = -3.5;
  hash["d"] = -3.5;
  hash["c"] = 2.5;
  hash["q"] = -3.5;
  hash["e"] = -3.5;
  hash["g"] = -.4;
  hash["h"] = -3.2;
  hash["i"] = 4.5;
  hash["l"] = 3.8;
  hash["k"] = -3.9;
  hash["m"] = 1.9;
  hash["f"] = 2.8;
  hash["p"] = -1.6;
  hash["s"] = -.8;
  hash["t"] = -.7;
  hash["w"] = -.9;
  hash["y"] = -1.3;
  hash["v"] = 4.2;
  return hash;
}
document.onload = v2;
var v279 = document.getElementById("submitbtn");
v279.onclick = v3;
var v280 = document.getElementById("clearbtn");
v280.onclick = v4
