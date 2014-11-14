
JAM.startProfile('load');
function v6() {
  var v539 = document.forms;
  var v466 = v539[0];
  var v284 = v466.elements;
  var v7 = v284[0];
  v7.value = " ";
  return;
}
function v5() {
  try {
    oneToThree(document);
  } catch (e$$5) {
    var v8 = "The following error was encountered: " + e$$5;
    alert(v8);
  }
  return;
}
function v4() {
  var v285 = document.main_form;
  var v9 = v285.main_submit;
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
  var v286 = arrayOfSequences.length;
  var v11 = v286 < 2;
  if (v11) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v287 = arrayOfTitles.length;
  var v13 = i$$1 < v287;
  for (;v13;) {
    var v586 = arrayOfTitles[i$$1];
    var v540 = v586.search(/\S/);
    var v467 = v540 == -1;
    var v542 = !v467;
    if (v542) {
      var v587 = arrayOfSequences[i$$1];
      var v541 = v587.search(/\S/);
      v467 = v541 == -1;
    }
    var v288 = v467;
    var v469 = !v288;
    if (v469) {
      var v543 = arrayOfSequences[i$$1];
      var v468 = v543.length;
      v288 = v468 != lengthOfAlign;
    }
    var v12 = v288;
    if (v12) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v289 = arrayOfTitles.length;
    v13 = i$$1 < v289;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v617 = codonTable.search(/AmAcid/);
  var v588 = v617 == -1;
  var v619 = !v588;
  if (v619) {
    var v618 = codonTable.search(/Codon/);
    v588 = v618 == -1;
  }
  var v544 = v588;
  var v590 = !v544;
  if (v590) {
    var v589 = codonTable.search(/Number/);
    v544 = v589 == -1;
  }
  var v470 = v544;
  var v546 = !v470;
  if (v546) {
    var v545 = codonTable.search(/\/1000/);
    v470 = v545 == -1;
  }
  var v290 = v470;
  var v472 = !v290;
  if (v472) {
    var v471 = codonTable.search(/Fraction\s*\.\./);
    v290 = v471 == -1;
  }
  var v14 = v290;
  if (v14) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v473 = formElement.value;
  var v291 = v473.search(/\S/);
  var v15 = v291 == -1;
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
  var v292 = arrayOfPatterns.length;
  var v18 = z$$2 < v292;
  for (;v18;) {
    var v474 = arrayOfPatterns[z$$2];
    var v293 = v474.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v16 = v293 == -1;
    if (v16) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v475 = arrayOfPatterns[z$$2];
    var v294 = moreExpressionCheck(v475);
    var v17 = v294 == false;
    if (v17) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v295 = arrayOfPatterns.length;
    v18 = z$$2 < v295;
  }
  var v19 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v19);
  var v20 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v20);
  var j = 0;
  var v296 = arrayOfPatterns.length;
  var v24 = j < v296;
  for (;v24;) {
    var v476 = arrayOfPatterns[j];
    var v297 = v476.match(/\/.+\//);
    var v21 = v297 + "gi";
    var v702 = eval(v21);
    geneticCodeMatchExp[j] = v702;
    var v298 = arrayOfPatterns[j];
    var v22 = v298.match(/=[a-zA-Z\*]/);
    var v703 = v22.toString();
    geneticCodeMatchResult[j] = v703;
    var v23 = geneticCodeMatchResult[j];
    var v704 = v23.replace(/=/g, "");
    geneticCodeMatchResult[j] = v704;
    j++;
    var v299 = arrayOfPatterns.length;
    v24 = j < v299;
  }
  var i$$2 = 0;
  var v477 = testSequence.length;
  var v300 = v477 - 3;
  var v31 = i$$2 <= v300;
  for (;v31;) {
    var v25 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v25);
    j = 0;
    var v301 = geneticCodeMatchExp.length;
    var v29 = j < v301;
    for (;v29;) {
      var v478 = geneticCodeMatchExp[j];
      var v302 = codon.search(v478);
      var v28 = v302 != -1;
      if (v28) {
        var v27 = oneMatch == true;
        if (v27) {
          var v303 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v26 = v303 + ".";
          alert(v26);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v304 = geneticCodeMatchExp.length;
      v29 = j < v304;
    }
    var v30 = oneMatch == false;
    if (v30) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v479 = testSequence.length;
    var v305 = v479 - 3;
    v31 = i$$2 <= v305;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v306 = arrayOfPatterns$$1.length;
  var v33 = z$$3 < v306;
  for (;v33;) {
    var v480 = arrayOfPatterns$$1[z$$3];
    var v307 = v480.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v32 = v307 != -1;
    if (v32) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v308 = arrayOfPatterns$$1.length;
    v33 = z$$3 < v308;
  }
  var i$$3 = 0;
  var v309 = arrayOfPatterns$$1.length;
  var v37 = i$$3 < v309;
  for (;v37;) {
    var v481 = arrayOfPatterns$$1[i$$3];
    var v310 = "[" + v481;
    var v34 = v310 + "]";
    var re = new RegExp(v34, "gi");
    var j$$1 = i$$3 + 1;
    var v311 = arrayOfPatterns$$1.length;
    var v36 = j$$1 < v311;
    for (;v36;) {
      var v482 = arrayOfPatterns$$1[j$$1];
      var v312 = v482.search(re);
      var v35 = v312 != -1;
      if (v35) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v313 = arrayOfPatterns$$1.length;
      v36 = j$$1 < v313;
    }
    i$$3++;
    var v314 = arrayOfPatterns$$1.length;
    v37 = i$$3 < v314;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v315 = arrayOfPatterns$$2.length;
  var v40 = z$$4 < v315;
  for (;v40;) {
    var v483 = arrayOfPatterns$$2[z$$4];
    var v316 = v483.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v38 = v316 == -1;
    if (v38) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v484 = arrayOfPatterns$$2[z$$4];
    var v317 = moreExpressionCheck(v484);
    var v39 = v317 == false;
    if (v39) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v318 = arrayOfPatterns$$2.length;
    v40 = z$$4 < v318;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v547 = getSequenceFromFasta(text$$7);
  var v485 = v547.replace(/[^A-Za-z]/g, "");
  var v319 = v485.length;
  var v42 = v319 > maxInput;
  if (v42) {
    var v320 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v41 = v320 + " characters.";
    alert(v41);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v321 = text$$8.length;
  var v44 = v321 > maxInput$$1;
  if (v44) {
    var v322 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v43 = v322 + " characters.";
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
  var v323 = alignArray.length;
  var v51 = v323 < 3;
  if (v51) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v324 = alignArray.length;
  var v53 = i$$4 < v324;
  for (;v53;) {
    var v486 = alignArray[i$$4];
    var v325 = v486.search(/[^\s]+\s/);
    var v52 = v325 == -1;
    if (v52) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v326 = alignArray.length;
    v53 = i$$4 < v326;
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
  var v327 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v56 = v327 != -1;
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
  var v328 = sequence$$2.length;
  var v57 = "&gt;results for " + v328;
  var stringToReturn = v57 + " residue sequence ";
  var v329 = fastaSequenceTitle.search(/[^\s]/);
  var v59 = v329 != -1;
  if (v59) {
    var v330 = stringToReturn + '"';
    var v58 = v330 + fastaSequenceTitle;
    stringToReturn = v58 + '"';
  }
  var v331 = stringToReturn + ' starting "';
  var v332 = sequence$$2.substring(0, 10);
  var v60 = v331 + v332;
  stringToReturn = v60 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v333 = sequenceOne.length;
  var v61 = "Search results for " + v333;
  var stringToReturn$$1 = v61 + " residue sequence ";
  var v334 = fastaSequenceTitleOne.search(/[^\s]/);
  var v63 = v334 != -1;
  if (v63) {
    var v335 = stringToReturn$$1 + '"';
    var v62 = v335 + fastaSequenceTitleOne;
    stringToReturn$$1 = v62 + '"';
  }
  var v336 = stringToReturn$$1 + ' starting "';
  var v337 = sequenceOne.substring(0, 10);
  var v64 = v336 + v337;
  stringToReturn$$1 = v64 + '"\n';
  var v338 = stringToReturn$$1 + "and ";
  var v339 = sequenceTwo.length;
  var v65 = v338 + v339;
  stringToReturn$$1 = v65 + " residue sequence ";
  var v340 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v67 = v340 != -1;
  if (v67) {
    var v341 = stringToReturn$$1 + '"';
    var v66 = v341 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v66 + '"';
  }
  var v342 = stringToReturn$$1 + ' starting "';
  var v343 = sequenceTwo.substring(0, 10);
  var v68 = v342 + v343;
  stringToReturn$$1 = v68 + '"';
  var v69 = '<div class="info">' + stringToReturn$$1;
  return v69 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v70 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v70);
  var j$$2 = 0;
  var v344 = arrayOfPatterns$$3.length;
  var v72 = j$$2 < v344;
  for (;v72;) {
    var v487 = arrayOfPatterns$$3[j$$2];
    var v345 = v487.match(/\/.+\//);
    var v71 = v345 + "gi";
    var v705 = eval(v71);
    geneticCodeMatchExp$$1[j$$2] = v705;
    j$$2++;
    var v346 = arrayOfPatterns$$3.length;
    v72 = j$$2 < v346;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v73 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v73);
  var j$$3 = 0;
  var v347 = arrayOfPatterns$$4.length;
  var v76 = j$$3 < v347;
  for (;v76;) {
    var v348 = arrayOfPatterns$$4[j$$3];
    var v74 = v348.match(/=[a-zA-Z\*]/);
    var v706 = v74.toString();
    geneticCodeMatchResult$$1[j$$3] = v706;
    var v75 = geneticCodeMatchResult$$1[j$$3];
    var v707 = v75.replace(/=/g, "");
    geneticCodeMatchResult$$1[j$$3] = v707;
    j$$3++;
    var v349 = arrayOfPatterns$$4.length;
    v76 = j$$3 < v349;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v350 = sequence$$3.length;
  var v77 = "Results for " + v350;
  var stringToReturn$$2 = v77 + " residue sequence ";
  var v351 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v79 = v351 != -1;
  if (v79) {
    var v352 = stringToReturn$$2 + '"';
    var v78 = v352 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v78 + '"';
  }
  var v353 = stringToReturn$$2 + ' starting "';
  var v354 = sequence$$3.substring(0, 10);
  var v80 = v353 + v354;
  stringToReturn$$2 = v80 + '"';
  var v81 = '<div class="info">' + stringToReturn$$2;
  return v81 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v488 = "Results for " + topology;
  var v355 = v488 + " ";
  var v356 = sequence$$4.length;
  var v82 = v355 + v356;
  var stringToReturn$$3 = v82 + " residue sequence ";
  var v357 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v84 = v357 != -1;
  if (v84) {
    var v358 = stringToReturn$$3 + '"';
    var v83 = v358 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v83 + '"';
  }
  var v359 = stringToReturn$$3 + ' starting "';
  var v360 = sequence$$4.substring(0, 10);
  var v85 = v359 + v360;
  stringToReturn$$3 = v85 + '"';
  var v86 = '<div class="info">' + stringToReturn$$3;
  return v86 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v361 = sequenceOne$$1.length;
  var v87 = "Alignment results for " + v361;
  var stringToReturn$$4 = v87 + " residue sequence ";
  var v362 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v89 = v362 != -1;
  if (v89) {
    var v363 = stringToReturn$$4 + '"';
    var v88 = v363 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v88 + '"';
  }
  var v364 = stringToReturn$$4 + ' starting "';
  var v365 = sequenceOne$$1.substring(0, 10);
  var v90 = v364 + v365;
  stringToReturn$$4 = v90 + '"\n';
  var v366 = stringToReturn$$4 + "and ";
  var v367 = sequenceTwo$$1.length;
  var v91 = v366 + v367;
  stringToReturn$$4 = v91 + " residue sequence ";
  var v368 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v93 = v368 != -1;
  if (v93) {
    var v369 = stringToReturn$$4 + '"';
    var v92 = v369 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v92 + '"';
  }
  var v370 = stringToReturn$$4 + ' starting "';
  var v371 = sequenceTwo$$1.substring(0, 10);
  var v94 = v370 + v371;
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
    var v372 = Math.random();
    var v373 = components.length;
    var v96 = v372 * v373;
    tempNum = Math.floor(v96);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4++;
    v97 = j$$4 < lengthOut;
  }
  return sequenceArray.join("");
}
function getSequenceFromFasta(sequenceRecord) {
  var v374 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v98 = v374 != -1;
  if (v98) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "");
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v375 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v100 = v375 != -1;
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
  var v680 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v673 = v680 != -1;
  var v682 = !v673;
  if (v682) {
    var v681 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    v673 = v681 != -1;
  }
  var v664 = v673;
  var v675 = !v664;
  if (v675) {
    var v674 = expressionToCheck.search(/\[\]/);
    v664 = v674 != -1;
  }
  var v655 = v664;
  var v666 = !v655;
  if (v666) {
    var v665 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
    v655 = v665 != -1;
  }
  var v644 = v655;
  var v657 = !v644;
  if (v657) {
    var v656 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
    v644 = v656 != -1;
  }
  var v632 = v644;
  var v646 = !v632;
  if (v646) {
    var v645 = expressionToCheck.search(/\|\|/);
    v632 = v645 != -1;
  }
  var v620 = v632;
  var v634 = !v620;
  if (v634) {
    var v633 = expressionToCheck.search(/\/\|/);
    v620 = v633 != -1;
  }
  var v591 = v620;
  var v622 = !v591;
  if (v622) {
    var v621 = expressionToCheck.search(/\|\//);
    v591 = v621 != -1;
  }
  var v548 = v591;
  var v593 = !v548;
  if (v593) {
    var v592 = expressionToCheck.search(/\[.\]/);
    v548 = v592 != -1;
  }
  var v489 = v548;
  var v550 = !v489;
  if (v550) {
    var v549 = expressionToCheck.search(/\</);
    v489 = v549 != -1;
  }
  var v376 = v489;
  var v491 = !v376;
  if (v491) {
    var v490 = expressionToCheck.search(/\>/);
    v376 = v490 != -1;
  }
  var v101 = v376;
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
function openWindow(title$$6) {
  _openWindow(title$$6, true);
  return;
}
function _openWindow(title$$7, isColor) {
  outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  outputWindow.focus();
  var v106 = outputWindow.document;
  var v551 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v492 = v551 + "<head>\n";
  var v377 = v492 + "<title>Sequence Manipulation Suite</title>\n";
  var v107 = v377 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v106.write(v107);
  if (isColor) {
    var v108 = outputWindow.document;
    var v695 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v691 = v695 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v687 = v691 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v683 = v687 + "div.info {font-weight: bold}\n";
    var v676 = v683 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v667 = v676 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v658 = v667 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v647 = v658 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v635 = v647 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v623 = v635 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v594 = v623 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v552 = v594 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v493 = v552 + "td.many {color: #000000}\n";
    var v378 = v493 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v109 = v378 + "</style>\n";
    v108.write(v109);
  } else {
    var v110 = outputWindow.document;
    var v699 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v696 = v699 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v692 = v696 + "div.title {display: none}\n";
    var v688 = v692 + "div.info {font-weight: bold}\n";
    var v684 = v688 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v677 = v684 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v668 = v677 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v659 = v668 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v648 = v659 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v636 = v648 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v624 = v636 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v595 = v624 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v553 = v595 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v494 = v553 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v379 = v494 + "img {display: none}\n";
    var v111 = v379 + "</style>\n";
    v110.write(v111);
  }
  var v112 = outputWindow.document;
  var v554 = "</head>\n" + '<body class="main">\n';
  var v495 = v554 + '<div class="title">';
  var v380 = v495 + title$$7;
  var v113 = v380 + " results</div>\n";
  v112.write(v113);
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
  var v114 = outputWindow.document;
  var v555 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v496 = v555 + "<head>\n";
  var v381 = v496 + "<title>Sequence Manipulation Suite</title>\n";
  var v115 = v381 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v114.write(v115);
  if (isBackground) {
    var v116 = outputWindow.document;
    var v697 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v693 = v697 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v689 = v693 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v685 = v689 + "div.info {font-weight: bold}\n";
    var v678 = v685 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v669 = v678 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v660 = v669 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v649 = v660 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v637 = v649 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v625 = v637 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v596 = v625 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v556 = v596 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v497 = v556 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v382 = v497 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v117 = v382 + "</style>\n";
    v116.write(v117);
  } else {
    var v118 = outputWindow.document;
    var v701 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v700 = v701 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v698 = v700 + "div.title {display: none}\n";
    var v694 = v698 + "div.info {font-weight: bold}\n";
    var v690 = v694 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v686 = v690 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v679 = v686 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v670 = v679 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v661 = v670 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v650 = v661 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v638 = v650 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v626 = v638 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v597 = v626 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v557 = v597 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v498 = v557 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v383 = v498 + "img {display: none}\n";
    var v119 = v383 + "</style>\n";
    v118.write(v119);
  }
  var v120 = outputWindow.document;
  var v558 = "</head>\n" + '<body class="main">\n';
  var v499 = v558 + '<div class="title">';
  var v384 = v499 + title$$9;
  var v121 = v384 + " results</div>\n";
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
  var v385 = dnaSequence$$1.search(/./);
  var v122 = v385 != -1;
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
  var v386 = testArray[0];
  var v126 = v386 != testString;
  if (v126) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v387 = testString.search(re$$2);
  var v127 = v387 == -1;
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
  var v388 = testNum.toFixed(3);
  var v130 = v388 != 2489.824;
  if (v130) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v389 = testNum.toPrecision(5);
  var v131 = v389 != 2489.8;
  if (v131) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v390 = theNumber$$1.search(/\d/);
  var v132 = v390 == -1;
  if (v132) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v598 = emblFile.search(/ID/);
  var v559 = v598 == -1;
  var v600 = !v559;
  if (v600) {
    var v599 = emblFile.search(/AC/);
    v559 = v599 == -1;
  }
  var v500 = v559;
  var v561 = !v500;
  if (v561) {
    var v560 = emblFile.search(/DE/);
    v500 = v560 == -1;
  }
  var v391 = v500;
  var v502 = !v391;
  if (v502) {
    var v501 = emblFile.search(/SQ/);
    v391 = v501 == -1;
  }
  var v133 = v391;
  if (v133) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v392 = theNumber$$2.search(/\d/);
  var v134 = v392 == -1;
  if (v134) {
    alert("Please enter a number.");
    return false;
  }
  var v136 = theNumber$$2 > maxInput$$2;
  if (v136) {
    var v393 = "Please enter a number less than or equal to " + maxInput$$2;
    var v135 = v393 + ".";
    alert(v135);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v394 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v137 = v394 != -1;
  if (v137) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v395 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v138 = v395 != -1;
  if (v138) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v601 = genBankFile.search(/LOCUS/);
  var v562 = v601 == -1;
  var v603 = !v562;
  if (v603) {
    var v602 = genBankFile.search(/DEFINITION/);
    v562 = v602 == -1;
  }
  var v503 = v562;
  var v564 = !v503;
  if (v564) {
    var v563 = genBankFile.search(/ACCESSION/);
    v503 = v563 == -1;
  }
  var v396 = v503;
  var v505 = !v396;
  if (v505) {
    var v504 = genBankFile.search(/ORIGIN/);
    v396 = v504 == -1;
  }
  var v139 = v396;
  if (v139) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v604 = genBankFile$$1.search(/LOCUS/);
  var v565 = v604 == -1;
  var v606 = !v565;
  if (v606) {
    var v605 = genBankFile$$1.search(/DEFINITION/);
    v565 = v605 == -1;
  }
  var v506 = v565;
  var v567 = !v506;
  if (v567) {
    var v566 = genBankFile$$1.search(/ACCESSION/);
    v506 = v566 == -1;
  }
  var v397 = v506;
  var v508 = !v397;
  if (v508) {
    var v507 = genBankFile$$1.search(/ORIGIN/);
    v397 = v507 == -1;
  }
  var v140 = v397;
  if (v140) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v398 = genBankFile$$1.search(/FEATURES {13}/);
  var v141 = v398 == -1;
  if (v141) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v607 = emblFile$$1.search(/ID/);
  var v568 = v607 == -1;
  var v609 = !v568;
  if (v609) {
    var v608 = emblFile$$1.search(/AC/);
    v568 = v608 == -1;
  }
  var v509 = v568;
  var v570 = !v509;
  if (v570) {
    var v569 = emblFile$$1.search(/DE/);
    v509 = v569 == -1;
  }
  var v399 = v509;
  var v511 = !v399;
  if (v511) {
    var v510 = emblFile$$1.search(/SQ/);
    v399 = v510 == -1;
  }
  var v142 = v399;
  if (v142) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v400 = emblFile$$1.search(/^FT/m);
  var v143 = v400 == -1;
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
    var v401 = basePerLine / groupSize;
    var v147 = j$$6 <= v401;
    for (;v147;) {
      var v146 = k < groupSize;
      for (;v146;) {
        var v402 = k + i$$5;
        var v145 = text$$10.charAt(v402);
        lineOfText = lineOfText + v145;
        k = k + 1;
        v146 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v403 = basePerLine / groupSize;
      v147 = j$$6 <= v403;
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
    var v404 = adjustment < 0;
    if (v404) {
      v404 = adjusted >= 0;
    }
    var v151 = v404;
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
    var v405 = basePerLine$$2 / groupSize$$2;
    var v160 = j$$7 <= v405;
    for (;v160;) {
      var v155 = k$$1 < groupSize$$2;
      for (;v155;) {
        var v406 = i$$6 + k$$1;
        var v152 = v406 >= stopBase$$2;
        if (v152) {
          break;
        }
        var v153 = lineOfText$$1;
        var v407 = k$$1 + i$$6;
        var v154 = text$$12.charAt(v407);
        lineOfText$$1 = v153 + v154;
        k$$1 = k$$1 + 1;
        v155 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v158 = numberPosition$$1 == "above";
      if (v158) {
        var v156 = aboveNum;
        var v408 = adjustNumbering(i$$6, numberingAdjustment);
        var v157 = rightNum(v408, "", groupSize$$2, tabIn$$3);
        aboveNum = v156 + v157;
      }
      var v159 = i$$6 >= stopBase$$2;
      if (v159) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v409 = basePerLine$$2 / groupSize$$2;
      v160 = j$$7 <= v409;
    }
    var v183 = numberPosition$$1 == "left";
    if (v183) {
      var v161 = outputWindow.document;
      var v571 = adjustNumbering(lineNum, numberingAdjustment);
      var v512 = rightNum(v571, "", 8, tabIn$$3);
      var v410 = v512 + lineOfText$$1;
      var v162 = v410 + "\n";
      v161.write(v162);
      var v166 = strands$$1 == "two";
      if (v166) {
        var v163 = outputWindow.document;
        var v572 = adjustNumbering(lineNum, numberingAdjustment);
        var v513 = rightNum(v572, "", 8, tabIn$$3);
        var v514 = complement(lineOfText$$1);
        var v411 = v513 + v514;
        var v164 = v411 + "\n";
        v163.write(v164);
        var v165 = outputWindow.document;
        v165.write("\n");
      }
    } else {
      var v182 = numberPosition$$1 == "right";
      if (v182) {
        var v167 = outputWindow.document;
        var v515 = lineOfText$$1;
        var v516 = adjustNumbering(i$$6, numberingAdjustment);
        var v412 = v515 + v516;
        var v168 = v412 + "\n";
        v167.write(v168);
        var v172 = strands$$1 == "two";
        if (v172) {
          var v169 = outputWindow.document;
          var v517 = complement(lineOfText$$1);
          var v518 = adjustNumbering(i$$6, numberingAdjustment);
          var v413 = v517 + v518;
          var v170 = v413 + "\n";
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
            var v414 = complement(lineOfText$$1);
            var v178 = v414 + "\n";
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
    var v415 = basePerLine$$3 / groupSize$$3;
    var v191 = j$$8 <= v415;
    for (;v191;) {
      var v187 = k$$2 < groupSize$$3;
      for (;v187;) {
        var v416 = i$$7 + k$$2;
        var v185 = v416 >= stopBase$$3;
        if (v185) {
          break;
        }
        var v417 = k$$2 + i$$7;
        var v186 = text$$13.charAt(v417);
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
      var v418 = basePerLine$$3 / groupSize$$3;
      v191 = j$$8 <= v418;
    }
    var v202 = numberPosition$$2 == "left";
    if (v202) {
      var v192 = outputWindow.document;
      var v519 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v419 = v519 + lineOfText$$2;
      var v193 = v419 + "\n";
      v192.write(v193);
    } else {
      var v201 = numberPosition$$2 == "right";
      if (v201) {
        var v194 = outputWindow.document;
        var v420 = lineOfText$$2 + i$$7;
        var v195 = v420 + "\n";
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
  var v573 = sequence$$13.length;
  var v520 = v573 <= firstIndexToMutate;
  var v574 = !v520;
  if (v574) {
    v520 = lastIndexToMutate < 0;
  }
  var v421 = v520;
  var v521 = !v421;
  if (v521) {
    v421 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v204 = v421;
  if (v204) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v212 = i$$8 < numMut;
  for (;v212;) {
    maxNum = sequence$$13.length;
    var v422 = Math.random();
    var v205 = v422 * maxNum;
    randNum = Math.floor(v205);
    var v423 = randNum < firstIndexToMutate;
    var v522 = !v423;
    if (v522) {
      v423 = randNum > lastIndexToMutate;
    }
    var v206 = v423;
    if (v206) {
      numMut++;
      i$$8++;
      v212 = i$$8 < numMut;
      continue;
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for (;needNewChar;) {
      var v424 = Math.random();
      var v425 = components$$1.length;
      var v207 = v424 * v425;
      componentsIndex = Math.round(v207);
      var v426 = components$$1.length;
      var v208 = componentsIndex == v426;
      if (v208) {
        componentsIndex = 0;
      }
      var v427 = components$$1[componentsIndex];
      var v209 = v427 != currentChar;
      if (v209) {
        needNewChar = false;
      }
    }
    var v428 = sequence$$13.substring(0, randNum);
    var v429 = components$$1[componentsIndex];
    var v210 = v428 + v429;
    var v430 = randNum + 1;
    var v431 = sequence$$13.length;
    var v211 = sequence$$13.substring(v430, v431);
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
    var v432 = Math.random();
    var v433 = components$$2.length;
    var v215 = v432 * v433;
    tempNum$$1 = Math.floor(v215);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v434 = sequence$$14.length;
    var v218 = v434 == 60;
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
    var v575 = sequence$$15.length;
    var v523 = v575 - lookAhead;
    var v524 = sequence$$15.length;
    var v435 = sequence$$15.substring(v523, v524);
    var v223 = v435 + sequence$$15;
    var v224 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v223 + v224;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v226 = outputWindow.document;
  v226.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  var v227 = outputWindow.document;
  var v576 = '<tr><td class="title" width="200px">' + "Site:";
  var v525 = v576 + '</td><td class="title">';
  var v436 = v525 + "Positions:";
  var v228 = v436 + "</td></tr>\n";
  v227.write(v228);
  var i$$9 = 0;
  var v437 = arrayOfItems.length;
  var v244 = i$$9 < v437;
  for (;v244;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v438 = arrayOfItems[i$$9];
    var v229 = v438.match(/\/.+\//);
    matchExp = v229 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    var v577 = arrayOfItems[i$$9];
    var v526 = v577.match(/\)\D*\d+/);
    var v439 = v526.toString();
    var v230 = v439.replace(/\)\D*/, "");
    cutDistance = parseFloat(v230);
    var v236 = matchArray$$1 = matchExp.exec(sequence$$15);
    for (;v236;) {
      var v231 = matchExp.lastIndex;
      matchPosition = v231 - cutDistance;
      var v440 = matchPosition >= lowerLimit;
      if (v440) {
        v440 = matchPosition < upperLimit;
      }
      var v234 = v440;
      if (v234) {
        timesFound++;
        var v232 = tempString$$1 + ", ";
        var v441 = matchPosition - shiftValue;
        var v233 = v441 + 1;
        tempString$$1 = v232 + v233;
      }
      var v442 = matchExp.lastIndex;
      var v527 = RegExp.lastMatch;
      var v443 = v527.length;
      var v235 = v442 - v443;
      matchExp.lastIndex = v235 + 1;
      v236 = matchArray$$1 = matchExp.exec(sequence$$15);
    }
    var v444 = tempString$$1.search(/\d/);
    var v237 = v444 != -1;
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
    var v651 = '<tr><td class="' + backGroundClass;
    var v639 = v651 + '">';
    var v671 = arrayOfItems[i$$9];
    var v662 = v671.match(/\([^\(]+\)/);
    var v652 = v662.toString();
    var v640 = v652.replace(/\(|\)/g, "");
    var v627 = v639 + v640;
    var v610 = v627 + '</td><td class="';
    var v578 = v610 + backGroundClass;
    var v528 = v578 + '">';
    var v445 = v528 + tempString$$1;
    var v243 = v445 + "</td></tr>\n";
    v242.write(v243);
    timesFound = 0;
    i$$9++;
    var v446 = arrayOfItems.length;
    v244 = i$$9 < v446;
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
  var v628 = '<tr><td class="title">' + "Pattern:";
  var v611 = v628 + '</td><td class="title">';
  var v579 = v611 + "Times found:";
  var v529 = v579 + '</td><td class="title">';
  var v447 = v529 + "Percentage:";
  var v248 = v447 + "</td></tr>\n";
  v247.write(v248);
  var i$$10 = 0;
  var v448 = arrayOfItems$$1.length;
  var v257 = i$$10 < v448;
  for (;v257;) {
    var tempNumber = 0;
    var v449 = arrayOfItems$$1[i$$10];
    var v249 = v449.match(/\/[^\/]+\//);
    var matchExp$$1 = v249 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    var v450 = sequence$$16.search(matchExp$$1);
    var v251 = v450 != -1;
    if (v251) {
      var v250 = sequence$$16.match(matchExp$$1);
      tempNumber = v250.length;
    }
    var percentage = 0;
    var v530 = originalLength + 1;
    var v612 = arrayOfItems$$1[i$$10];
    var v580 = v612.match(/\d+/);
    var v531 = parseFloat(v580);
    var v451 = v530 - v531;
    var v254 = v451 > 0;
    if (v254) {
      var v252 = 100 * tempNumber;
      var v452 = originalLength + 1;
      var v581 = arrayOfItems$$1[i$$10];
      var v532 = v581.match(/\d+/);
      var v453 = parseFloat(v532);
      var v253 = v452 - v453;
      percentage = v252 / v253;
    }
    var v255 = outputWindow.document;
    var v672 = arrayOfItems$$1[i$$10];
    var v663 = v672.match(/\([^\(]+\)\b/);
    var v653 = v663.toString();
    var v641 = v653.replace(/\(|\)/g, "");
    var v629 = "<tr><td>" + v641;
    var v613 = v629 + "</td><td>";
    var v582 = v613 + tempNumber;
    var v533 = v582 + "</td><td>";
    var v534 = percentage.toFixed(2);
    var v454 = v533 + v534;
    var v256 = v454 + "</td></tr>\n";
    v255.write(v256);
    i$$10++;
    var v455 = arrayOfItems$$1.length;
    v257 = i$$10 < v455;
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
  var v456 = sequence$$17.length;
  var v265 = v456 > 0;
  for (;v265;) {
    maxNum$$1 = sequence$$17.length;
    var v457 = Math.random();
    var v259 = v457 * maxNum$$1;
    randNum$$1 = Math.floor(v259);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v260 = randNum$$1 + 1;
    var v261 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v260, v261);
    sequence$$17 = tempString1 + tempString2;
    var v458 = tempSeq.length;
    var v264 = v458 == 60;
    if (v264) {
      var v262 = outputWindow.document;
      var v263 = tempSeq + "\n";
      v262.write(v263);
      tempSeq = "";
    }
    var v459 = sequence$$17.length;
    v265 = v459 > 0;
  }
  var v266 = outputWindow.document;
  var v267 = tempSeq + "\n";
  v266.write(v267);
  return true;
}
function oneToThree(theDocument) {
  JAM.startProfile('compute');

  var newProtein = "";
  var maxInput$$3 = 1E5;
  var v460 = testScript();
  var v268 = v460 == false;
  if (v268) {
    return false;
  }
  var v642 = theDocument.forms;
  var v630 = v642[0];
  var v614 = v630.elements;
  var v583 = v614[0];
  var v535 = checkFormElement(v583);
  var v461 = v535 == false;
  var v537 = !v461;
  if (v537) {
    var v654 = theDocument.forms;
    var v643 = v654[0];
    var v631 = v643.elements;
    var v615 = v631[0];
    var v584 = v615.value;
    var v536 = checkTextLength(v584, maxInput$$3);
    v461 = v536 == false;
  }
  var v269 = v461;
  if (v269) {
    return false;
  }
  openWindow("One to Three");
  openPre();
  var v616 = theDocument.forms;
  var v585 = v616[0];
  var v538 = v585.elements;
  var v462 = v538[0];
  var v270 = v462.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v270);
  var i$$11 = 0;
  var v463 = arrayOfFasta$$1.length;
  var v276 = i$$11 < v463;
  for (;v276;) {
    var v271 = arrayOfFasta$$1[i$$11];
    newProtein = getSequenceFromFasta(v271);
    var v272 = arrayOfFasta$$1[i$$11];
    title = getTitleFromFasta(v272);
    newProtein = removeNonProteinAllowDegen(newProtein);
    var v273 = outputWindow.document;
    var v274 = getFastaTitleFromTitleAndSequence(title, newProtein);
    v273.write(v274);
    writeOneToThree(newProtein);
    var v275 = outputWindow.document;
    v275.write("\n\n");
    i$$11++;
    var v464 = arrayOfFasta$$1.length;
    v276 = i$$11 < v464;
  }
  closePre();
  closeWindow();

  JAM.stopProfile('compute');
  return true;
}
function writeOneToThree(proteinSequence$$1) {
  function v3(str$$9, p1$$3, p2, p3, offset$$11, s$$5) {
    var v465 = p2.toLowerCase();
    var v277 = p1$$3 + v465;
    var v278 = p3.toLowerCase();
    return v277 + v278;
  }
  function v2(str$$8, p1$$2, offset$$10, s$$4) {
    var v279 = " " + p1$$2;
    return v279 + " ";
  }
  proteinSequence$$1 = proteinSequence$$1.toLowerCase();
  proteinSequence$$1 = proteinSequence$$1.replace(/(.)/g, v2);
  proteinSequence$$1 = proteinSequence$$1.replace(/a/g, "ALA");
  proteinSequence$$1 = proteinSequence$$1.replace(/b/g, "ASX");
  proteinSequence$$1 = proteinSequence$$1.replace(/c/g, "CYS");
  proteinSequence$$1 = proteinSequence$$1.replace(/d/g, "ASP");
  proteinSequence$$1 = proteinSequence$$1.replace(/e/g, "GLU");
  proteinSequence$$1 = proteinSequence$$1.replace(/f/g, "PHE");
  proteinSequence$$1 = proteinSequence$$1.replace(/g/g, "GLY");
  proteinSequence$$1 = proteinSequence$$1.replace(/h/g, "HIS");
  proteinSequence$$1 = proteinSequence$$1.replace(/i/g, "ILE");
  proteinSequence$$1 = proteinSequence$$1.replace(/k/g, "LYS");
  proteinSequence$$1 = proteinSequence$$1.replace(/l/g, "LEU");
  proteinSequence$$1 = proteinSequence$$1.replace(/m/g, "MET");
  proteinSequence$$1 = proteinSequence$$1.replace(/n/g, "ASN");
  proteinSequence$$1 = proteinSequence$$1.replace(/p/g, "PRO");
  proteinSequence$$1 = proteinSequence$$1.replace(/q/g, "GLN");
  proteinSequence$$1 = proteinSequence$$1.replace(/r/g, "ARG");
  proteinSequence$$1 = proteinSequence$$1.replace(/s/g, "SER");
  proteinSequence$$1 = proteinSequence$$1.replace(/t/g, "THR");
  proteinSequence$$1 = proteinSequence$$1.replace(/v/g, "VAL");
  proteinSequence$$1 = proteinSequence$$1.replace(/w/g, "TRP");
  proteinSequence$$1 = proteinSequence$$1.replace(/x/g, "XAA");
  proteinSequence$$1 = proteinSequence$$1.replace(/y/g, "TYR");
  proteinSequence$$1 = proteinSequence$$1.replace(/z/g, "GLX");
  proteinSequence$$1 = proteinSequence$$1.replace(/\*/g, "***");
  proteinSequence$$1 = proteinSequence$$1.replace(/\s*(.)(.)(.)\s*/g, v3);
  var v280 = outputWindow.document;
  var v281 = addReturns(proteinSequence$$1);
  v280.write(v281);
  return true;
}
document.onload = v4;
var v282 = document.getElementById("submitbtn");
v282.onclick = v5;
var v283 = document.getElementById("clearbtn");
v283.onclick = v6

JAM.stopProfile('load');
