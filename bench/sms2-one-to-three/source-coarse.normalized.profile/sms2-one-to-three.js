
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
function v6() {
  var v536 = document.forms;
  var v464 = v536[0];
  var v282 = v464.elements;
  var v7 = v282[0];
  v7.value = " ";
  return;
}
function v5() {
  try {
    oneToThree();
  } catch (e$$5) {
    var v8 = "The following error was encountered: " + e$$5;
    alert(v8);
  }
  return;
}
function v4() {
  var v283 = document.main_form;
  var v9 = v283.main_submit;
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
  var v284 = arrayOfSequences.length;
  var v11 = v284 < 2;
  if (v11) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v285 = arrayOfTitles.length;
  var v13 = i$$1 < v285;
  for (;v13;) {
    var v583 = arrayOfTitles[i$$1];
    var v537 = v583.search(/\S/);
    var v465 = v537 == -1;
    var v539 = !v465;
    if (v539) {
      var v584 = arrayOfSequences[i$$1];
      var v538 = v584.search(/\S/);
      v465 = v538 == -1;
    }
    var v286 = v465;
    var v467 = !v286;
    if (v467) {
      var v540 = arrayOfSequences[i$$1];
      var v466 = v540.length;
      v286 = v466 != lengthOfAlign;
    }
    var v12 = v286;
    if (v12) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v287 = arrayOfTitles.length;
    v13 = i$$1 < v287;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v614 = codonTable.search(/AmAcid/);
  var v585 = v614 == -1;
  var v616 = !v585;
  if (v616) {
    var v615 = codonTable.search(/Codon/);
    v585 = v615 == -1;
  }
  var v541 = v585;
  var v587 = !v541;
  if (v587) {
    var v586 = codonTable.search(/Number/);
    v541 = v586 == -1;
  }
  var v468 = v541;
  var v543 = !v468;
  if (v543) {
    var v542 = codonTable.search(/\/1000/);
    v468 = v542 == -1;
  }
  var v288 = v468;
  var v470 = !v288;
  if (v470) {
    var v469 = codonTable.search(/Fraction\s*\.\./);
    v288 = v469 == -1;
  }
  var v14 = v288;
  if (v14) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v471 = formElement.value;
  var v289 = v471.search(/\S/);
  var v15 = v289 == -1;
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
  var v290 = arrayOfPatterns.length;
  var v18 = z$$2 < v290;
  for (;v18;) {
    var v472 = arrayOfPatterns[z$$2];
    var v291 = v472.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v16 = v291 == -1;
    if (v16) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v473 = arrayOfPatterns[z$$2];
    var v292 = moreExpressionCheck(v473);
    var v17 = v292 == false;
    if (v17) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v293 = arrayOfPatterns.length;
    v18 = z$$2 < v293;
  }
  var v19 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v19);
  var v20 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v20);
  var j = 0;
  var v294 = arrayOfPatterns.length;
  var v24 = j < v294;
  for (;v24;) {
    var v474 = arrayOfPatterns[j];
    var v295 = v474.match(/\/.+\//);
    var v21 = v295 + "gi";
    var v699 = eval(v21);
    geneticCodeMatchExp[j] = v699;
    var v296 = arrayOfPatterns[j];
    var v22 = v296.match(/=[a-zA-Z\*]/);
    var v700 = v22.toString();
    geneticCodeMatchResult[j] = v700;
    var v23 = geneticCodeMatchResult[j];
    var v701 = v23.replace(/=/g, "");
    geneticCodeMatchResult[j] = v701;
    j++;
    var v297 = arrayOfPatterns.length;
    v24 = j < v297;
  }
  var i$$2 = 0;
  var v475 = testSequence.length;
  var v298 = v475 - 3;
  var v31 = i$$2 <= v298;
  for (;v31;) {
    var v25 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v25);
    j = 0;
    var v299 = geneticCodeMatchExp.length;
    var v29 = j < v299;
    for (;v29;) {
      var v476 = geneticCodeMatchExp[j];
      var v300 = codon.search(v476);
      var v28 = v300 != -1;
      if (v28) {
        var v27 = oneMatch == true;
        if (v27) {
          var v301 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v26 = v301 + ".";
          alert(v26);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v302 = geneticCodeMatchExp.length;
      v29 = j < v302;
    }
    var v30 = oneMatch == false;
    if (v30) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v477 = testSequence.length;
    var v303 = v477 - 3;
    v31 = i$$2 <= v303;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v304 = arrayOfPatterns$$1.length;
  var v33 = z$$3 < v304;
  for (;v33;) {
    var v478 = arrayOfPatterns$$1[z$$3];
    var v305 = v478.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v32 = v305 != -1;
    if (v32) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v306 = arrayOfPatterns$$1.length;
    v33 = z$$3 < v306;
  }
  var i$$3 = 0;
  var v307 = arrayOfPatterns$$1.length;
  var v37 = i$$3 < v307;
  for (;v37;) {
    var v479 = arrayOfPatterns$$1[i$$3];
    var v308 = "[" + v479;
    var v34 = v308 + "]";
    var re = new RegExp(v34, "gi");
    var j$$1 = i$$3 + 1;
    var v309 = arrayOfPatterns$$1.length;
    var v36 = j$$1 < v309;
    for (;v36;) {
      var v480 = arrayOfPatterns$$1[j$$1];
      var v310 = v480.search(re);
      var v35 = v310 != -1;
      if (v35) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v311 = arrayOfPatterns$$1.length;
      v36 = j$$1 < v311;
    }
    i$$3++;
    var v312 = arrayOfPatterns$$1.length;
    v37 = i$$3 < v312;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v313 = arrayOfPatterns$$2.length;
  var v40 = z$$4 < v313;
  for (;v40;) {
    var v481 = arrayOfPatterns$$2[z$$4];
    var v314 = v481.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v38 = v314 == -1;
    if (v38) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v482 = arrayOfPatterns$$2[z$$4];
    var v315 = moreExpressionCheck(v482);
    var v39 = v315 == false;
    if (v39) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v316 = arrayOfPatterns$$2.length;
    v40 = z$$4 < v316;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v544 = getSequenceFromFasta(text$$7);
  var v483 = v544.replace(/[^A-Za-z]/g, "");
  var v317 = v483.length;
  var v42 = v317 > maxInput;
  if (v42) {
    var v318 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v41 = v318 + " characters.";
    alert(v41);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v319 = text$$8.length;
  var v44 = v319 > maxInput$$1;
  if (v44) {
    var v320 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v43 = v320 + " characters.";
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
  var v321 = alignArray.length;
  var v51 = v321 < 3;
  if (v51) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v322 = alignArray.length;
  var v53 = i$$4 < v322;
  for (;v53;) {
    var v484 = alignArray[i$$4];
    var v323 = v484.search(/[^\s]+\s/);
    var v52 = v323 == -1;
    if (v52) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v324 = alignArray.length;
    v53 = i$$4 < v324;
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
  var v56 = v325 != -1;
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
function getFastaTitleFromTitleAndSequence(sequence$$2) {
  var fastaSequenceTitle = title;
  var v326 = sequence$$2.length;
  var v57 = "&gt;results for " + v326;
  var stringToReturn = v57 + " residue sequence ";
  var v327 = fastaSequenceTitle.search(/[^\s]/);
  var v59 = v327 != -1;
  if (v59) {
    var v328 = stringToReturn + '"';
    var v58 = v328 + fastaSequenceTitle;
    stringToReturn = v58 + '"';
  }
  var v329 = stringToReturn + ' starting "';
  var v330 = sequence$$2.substring(0, 10);
  var v60 = v329 + v330;
  stringToReturn = v60 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v331 = sequenceOne.length;
  var v61 = "Search results for " + v331;
  var stringToReturn$$1 = v61 + " residue sequence ";
  var v332 = fastaSequenceTitleOne.search(/[^\s]/);
  var v63 = v332 != -1;
  if (v63) {
    var v333 = stringToReturn$$1 + '"';
    var v62 = v333 + fastaSequenceTitleOne;
    stringToReturn$$1 = v62 + '"';
  }
  var v334 = stringToReturn$$1 + ' starting "';
  var v335 = sequenceOne.substring(0, 10);
  var v64 = v334 + v335;
  stringToReturn$$1 = v64 + '"\n';
  var v336 = stringToReturn$$1 + "and ";
  var v337 = sequenceTwo.length;
  var v65 = v336 + v337;
  stringToReturn$$1 = v65 + " residue sequence ";
  var v338 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v67 = v338 != -1;
  if (v67) {
    var v339 = stringToReturn$$1 + '"';
    var v66 = v339 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v66 + '"';
  }
  var v340 = stringToReturn$$1 + ' starting "';
  var v341 = sequenceTwo.substring(0, 10);
  var v68 = v340 + v341;
  stringToReturn$$1 = v68 + '"';
  var v69 = '<div class="info">' + stringToReturn$$1;
  return v69 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v70 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v70);
  var j$$2 = 0;
  var v342 = arrayOfPatterns$$3.length;
  var v72 = j$$2 < v342;
  for (;v72;) {
    var v485 = arrayOfPatterns$$3[j$$2];
    var v343 = v485.match(/\/.+\//);
    var v71 = v343 + "gi";
    var v702 = eval(v71);
    geneticCodeMatchExp$$1[j$$2] = v702;
    j$$2++;
    var v344 = arrayOfPatterns$$3.length;
    v72 = j$$2 < v344;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v73 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v73);
  var j$$3 = 0;
  var v345 = arrayOfPatterns$$4.length;
  var v76 = j$$3 < v345;
  for (;v76;) {
    var v346 = arrayOfPatterns$$4[j$$3];
    var v74 = v346.match(/=[a-zA-Z\*]/);
    var v703 = v74.toString();
    geneticCodeMatchResult$$1[j$$3] = v703;
    var v75 = geneticCodeMatchResult$$1[j$$3];
    var v704 = v75.replace(/=/g, "");
    geneticCodeMatchResult$$1[j$$3] = v704;
    j$$3++;
    var v347 = arrayOfPatterns$$4.length;
    v76 = j$$3 < v347;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v348 = sequence$$3.length;
  var v77 = "Results for " + v348;
  var stringToReturn$$2 = v77 + " residue sequence ";
  var v349 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v79 = v349 != -1;
  if (v79) {
    var v350 = stringToReturn$$2 + '"';
    var v78 = v350 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v78 + '"';
  }
  var v351 = stringToReturn$$2 + ' starting "';
  var v352 = sequence$$3.substring(0, 10);
  var v80 = v351 + v352;
  stringToReturn$$2 = v80 + '"';
  var v81 = '<div class="info">' + stringToReturn$$2;
  return v81 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v486 = "Results for " + topology;
  var v353 = v486 + " ";
  var v354 = sequence$$4.length;
  var v82 = v353 + v354;
  var stringToReturn$$3 = v82 + " residue sequence ";
  var v355 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v84 = v355 != -1;
  if (v84) {
    var v356 = stringToReturn$$3 + '"';
    var v83 = v356 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v83 + '"';
  }
  var v357 = stringToReturn$$3 + ' starting "';
  var v358 = sequence$$4.substring(0, 10);
  var v85 = v357 + v358;
  stringToReturn$$3 = v85 + '"';
  var v86 = '<div class="info">' + stringToReturn$$3;
  return v86 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v359 = sequenceOne$$1.length;
  var v87 = "Alignment results for " + v359;
  var stringToReturn$$4 = v87 + " residue sequence ";
  var v360 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v89 = v360 != -1;
  if (v89) {
    var v361 = stringToReturn$$4 + '"';
    var v88 = v361 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v88 + '"';
  }
  var v362 = stringToReturn$$4 + ' starting "';
  var v363 = sequenceOne$$1.substring(0, 10);
  var v90 = v362 + v363;
  stringToReturn$$4 = v90 + '"\n';
  var v364 = stringToReturn$$4 + "and ";
  var v365 = sequenceTwo$$1.length;
  var v91 = v364 + v365;
  stringToReturn$$4 = v91 + " residue sequence ";
  var v366 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v93 = v366 != -1;
  if (v93) {
    var v367 = stringToReturn$$4 + '"';
    var v92 = v367 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v92 + '"';
  }
  var v368 = stringToReturn$$4 + ' starting "';
  var v369 = sequenceTwo$$1.substring(0, 10);
  var v94 = v368 + v369;
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
    var v370 = Math.random();
    var v371 = components.length;
    var v96 = v370 * v371;
    tempNum = Math.floor(v96);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4++;
    v97 = j$$4 < lengthOut;
  }
  return sequenceArray.join("");
}
function getSequenceFromFasta(sequenceRecord) {
  var v372 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v98 = v372 != -1;
  if (v98) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "");
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v373 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v100 = v373 != -1;
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
  var v677 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v670 = v677 != -1;
  var v679 = !v670;
  if (v679) {
    var v678 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    v670 = v678 != -1;
  }
  var v661 = v670;
  var v672 = !v661;
  if (v672) {
    var v671 = expressionToCheck.search(/\[\]/);
    v661 = v671 != -1;
  }
  var v652 = v661;
  var v663 = !v652;
  if (v663) {
    var v662 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
    v652 = v662 != -1;
  }
  var v641 = v652;
  var v654 = !v641;
  if (v654) {
    var v653 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
    v641 = v653 != -1;
  }
  var v629 = v641;
  var v643 = !v629;
  if (v643) {
    var v642 = expressionToCheck.search(/\|\|/);
    v629 = v642 != -1;
  }
  var v617 = v629;
  var v631 = !v617;
  if (v631) {
    var v630 = expressionToCheck.search(/\/\|/);
    v617 = v630 != -1;
  }
  var v588 = v617;
  var v619 = !v588;
  if (v619) {
    var v618 = expressionToCheck.search(/\|\//);
    v588 = v618 != -1;
  }
  var v545 = v588;
  var v590 = !v545;
  if (v590) {
    var v589 = expressionToCheck.search(/\[.\]/);
    v545 = v589 != -1;
  }
  var v487 = v545;
  var v547 = !v487;
  if (v547) {
    var v546 = expressionToCheck.search(/\</);
    v487 = v546 != -1;
  }
  var v374 = v487;
  var v489 = !v374;
  if (v489) {
    var v488 = expressionToCheck.search(/\>/);
    v374 = v488 != -1;
  }
  var v101 = v374;
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
function openWindow() {
  var title$$6 = "One to Three";
  _openWindow(title$$6);
  return;
}
function _openWindow(title$$7) {
  var isColor = true;
  outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  outputWindow.focus();
  var v106 = outputWindow.document;
  var v548 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v490 = v548 + "<head>\n";
  var v375 = v490 + "<title>Sequence Manipulation Suite</title>\n";
  var v107 = v375 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v106.write(v107);
  if (isColor) {
    var v108 = outputWindow.document;
    var v692 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v688 = v692 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v684 = v688 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v680 = v684 + "div.info {font-weight: bold}\n";
    var v673 = v680 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v664 = v673 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v655 = v664 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v644 = v655 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v632 = v644 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v620 = v632 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v591 = v620 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v549 = v591 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v491 = v549 + "td.many {color: #000000}\n";
    var v376 = v491 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v109 = v376 + "</style>\n";
    v108.write(v109);
  } else {
    var v110 = outputWindow.document;
    var v696 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v693 = v696 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v689 = v693 + "div.title {display: none}\n";
    var v685 = v689 + "div.info {font-weight: bold}\n";
    var v681 = v685 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v674 = v681 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v665 = v674 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v656 = v665 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v645 = v656 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v633 = v645 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v621 = v633 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v592 = v621 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v550 = v592 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v492 = v550 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v377 = v492 + "img {display: none}\n";
    var v111 = v377 + "</style>\n";
    v110.write(v111);
  }
  var v112 = outputWindow.document;
  var v551 = "</head>\n" + '<body class="main">\n';
  var v493 = v551 + '<div class="title">';
  var v378 = v493 + title$$7;
  var v113 = v378 + " results</div>\n";
  v112.write(v113);
  outputWindow.status = "Please Wait.";
  return;
}
function openWindowAlign(title$$8) {
  _openWindowAlign(title$$8);
  return;
}
function _openWindowAlign(title$$9) {
  var isBackground = true;
  outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  outputWindow.focus();
  var v114 = outputWindow.document;
  var v552 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v494 = v552 + "<head>\n";
  var v379 = v494 + "<title>Sequence Manipulation Suite</title>\n";
  var v115 = v379 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v114.write(v115);
  if (isBackground) {
    var v116 = outputWindow.document;
    var v694 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v690 = v694 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v686 = v690 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v682 = v686 + "div.info {font-weight: bold}\n";
    var v675 = v682 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v666 = v675 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v657 = v666 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v646 = v657 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v634 = v646 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v622 = v634 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v593 = v622 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v553 = v593 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v495 = v553 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v380 = v495 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v117 = v380 + "</style>\n";
    v116.write(v117);
  } else {
    var v118 = outputWindow.document;
    var v698 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v697 = v698 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v695 = v697 + "div.title {display: none}\n";
    var v691 = v695 + "div.info {font-weight: bold}\n";
    var v687 = v691 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v683 = v687 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v676 = v683 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v667 = v676 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v658 = v667 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v647 = v658 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v635 = v647 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v623 = v635 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v594 = v623 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v554 = v594 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v496 = v554 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v381 = v496 + "img {display: none}\n";
    var v119 = v381 + "</style>\n";
    v118.write(v119);
  }
  var v120 = outputWindow.document;
  var v555 = "</head>\n" + '<body class="main">\n';
  var v497 = v555 + '<div class="title">';
  var v382 = v497 + title$$9;
  var v121 = v382 + " results</div>\n";
  v120.write(v121);
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
  var v383 = dnaSequence$$1.search(/./);
  var v122 = v383 != -1;
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
  var v384 = testArray[0];
  var v126 = v384 != testString;
  if (v126) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v385 = testString.search(re$$2);
  var v127 = v385 == -1;
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
  var v386 = testNum.toFixed(3);
  var v130 = v386 != 2489.824;
  if (v130) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v387 = testNum.toPrecision(5);
  var v131 = v387 != 2489.8;
  if (v131) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v388 = theNumber$$1.search(/\d/);
  var v132 = v388 == -1;
  if (v132) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v595 = emblFile.search(/ID/);
  var v556 = v595 == -1;
  var v597 = !v556;
  if (v597) {
    var v596 = emblFile.search(/AC/);
    v556 = v596 == -1;
  }
  var v498 = v556;
  var v558 = !v498;
  if (v558) {
    var v557 = emblFile.search(/DE/);
    v498 = v557 == -1;
  }
  var v389 = v498;
  var v500 = !v389;
  if (v500) {
    var v499 = emblFile.search(/SQ/);
    v389 = v499 == -1;
  }
  var v133 = v389;
  if (v133) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v390 = theNumber$$2.search(/\d/);
  var v134 = v390 == -1;
  if (v134) {
    alert("Please enter a number.");
    return false;
  }
  var v136 = theNumber$$2 > maxInput$$2;
  if (v136) {
    var v391 = "Please enter a number less than or equal to " + maxInput$$2;
    var v135 = v391 + ".";
    alert(v135);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v392 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v137 = v392 != -1;
  if (v137) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v393 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v138 = v393 != -1;
  if (v138) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v598 = genBankFile.search(/LOCUS/);
  var v559 = v598 == -1;
  var v600 = !v559;
  if (v600) {
    var v599 = genBankFile.search(/DEFINITION/);
    v559 = v599 == -1;
  }
  var v501 = v559;
  var v561 = !v501;
  if (v561) {
    var v560 = genBankFile.search(/ACCESSION/);
    v501 = v560 == -1;
  }
  var v394 = v501;
  var v503 = !v394;
  if (v503) {
    var v502 = genBankFile.search(/ORIGIN/);
    v394 = v502 == -1;
  }
  var v139 = v394;
  if (v139) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v601 = genBankFile$$1.search(/LOCUS/);
  var v562 = v601 == -1;
  var v603 = !v562;
  if (v603) {
    var v602 = genBankFile$$1.search(/DEFINITION/);
    v562 = v602 == -1;
  }
  var v504 = v562;
  var v564 = !v504;
  if (v564) {
    var v563 = genBankFile$$1.search(/ACCESSION/);
    v504 = v563 == -1;
  }
  var v395 = v504;
  var v506 = !v395;
  if (v506) {
    var v505 = genBankFile$$1.search(/ORIGIN/);
    v395 = v505 == -1;
  }
  var v140 = v395;
  if (v140) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v396 = genBankFile$$1.search(/FEATURES {13}/);
  var v141 = v396 == -1;
  if (v141) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v604 = emblFile$$1.search(/ID/);
  var v565 = v604 == -1;
  var v606 = !v565;
  if (v606) {
    var v605 = emblFile$$1.search(/AC/);
    v565 = v605 == -1;
  }
  var v507 = v565;
  var v567 = !v507;
  if (v567) {
    var v566 = emblFile$$1.search(/DE/);
    v507 = v566 == -1;
  }
  var v397 = v507;
  var v509 = !v397;
  if (v509) {
    var v508 = emblFile$$1.search(/SQ/);
    v397 = v508 == -1;
  }
  var v142 = v397;
  if (v142) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v398 = emblFile$$1.search(/^FT/m);
  var v143 = v398 == -1;
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
    var v399 = basePerLine / groupSize;
    var v147 = j$$6 <= v399;
    for (;v147;) {
      var v146 = k < groupSize;
      for (;v146;) {
        var v400 = k + i$$5;
        var v145 = text$$10.charAt(v400);
        lineOfText = lineOfText + v145;
        k = k + 1;
        v146 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v401 = basePerLine / groupSize;
      v147 = j$$6 <= v401;
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
  writeGroupNumDnaSetStart(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition);
  return true;
}
function writeGroupNumDnaSetStart(text$$12, tabIn$$3, groupSize$$2, basePerLine$$2, startBase$$2, stopBase$$2, strands$$1, numberPosition$$1) {
  var numberingAdjustment = 0;
  function adjustNumbering(original, adjustment) {
    var adjusted = original + adjustment;
    var v402 = adjustment < 0;
    if (v402) {
      v402 = adjusted >= 0;
    }
    var v151 = v402;
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
  var v182 = i$$6 < stopBase$$2;
  for (;v182;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v403 = basePerLine$$2 / groupSize$$2;
    var v158 = j$$7 <= v403;
    for (;v158;) {
      var v154 = k$$1 < groupSize$$2;
      for (;v154;) {
        var v404 = i$$6 + k$$1;
        var v152 = v404 >= stopBase$$2;
        if (v152) {
          break;
        }
        var v405 = k$$1 + i$$6;
        var v153 = text$$12.charAt(v405);
        lineOfText$$1 = lineOfText$$1 + v153;
        k$$1 = k$$1 + 1;
        v154 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v156 = numberPosition$$1 == "above";
      if (v156) {
        var v406 = adjustNumbering(i$$6, numberingAdjustment);
        var v155 = rightNum(v406, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v155;
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
      var v568 = adjustNumbering(lineNum, numberingAdjustment);
      var v510 = rightNum(v568, "", 8, tabIn$$3);
      var v408 = v510 + lineOfText$$1;
      var v160 = v408 + "\n";
      v159.write(v160);
      var v164 = strands$$1 == "two";
      if (v164) {
        var v161 = outputWindow.document;
        var v569 = adjustNumbering(lineNum, numberingAdjustment);
        var v511 = rightNum(v569, "", 8, tabIn$$3);
        var v512 = complement(lineOfText$$1);
        var v409 = v511 + v512;
        var v162 = v409 + "\n";
        v161.write(v162);
        var v163 = outputWindow.document;
        v163.write("\n");
      }
    } else {
      var v180 = numberPosition$$1 == "right";
      if (v180) {
        var v165 = outputWindow.document;
        var v513 = adjustNumbering(i$$6, numberingAdjustment);
        var v410 = lineOfText$$1 + v513;
        var v166 = v410 + "\n";
        v165.write(v166);
        var v170 = strands$$1 == "two";
        if (v170) {
          var v167 = outputWindow.document;
          var v514 = complement(lineOfText$$1);
          var v515 = adjustNumbering(i$$6, numberingAdjustment);
          var v411 = v514 + v515;
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
      var v516 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v417 = v516 + lineOfText$$2;
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
  var v570 = sequence$$13.length;
  var v517 = v570 <= firstIndexToMutate;
  var v571 = !v517;
  if (v571) {
    v517 = lastIndexToMutate < 0;
  }
  var v419 = v517;
  var v518 = !v419;
  if (v518) {
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
    var v519 = !v421;
    if (v519) {
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
    var v572 = sequence$$15.length;
    var v520 = v572 - lookAhead;
    var v521 = sequence$$15.length;
    var v433 = sequence$$15.substring(v520, v521);
    var v221 = v433 + sequence$$15;
    var v222 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v221 + v222;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v224 = outputWindow.document;
  v224.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  var v225 = outputWindow.document;
  var v573 = '<tr><td class="title" width="200px">' + "Site:";
  var v522 = v573 + '</td><td class="title">';
  var v434 = v522 + "Positions:";
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
    var v574 = arrayOfItems[i$$9];
    var v523 = v574.match(/\)\D*\d+/);
    var v437 = v523.toString();
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
      var v524 = RegExp.lastMatch;
      var v441 = v524.length;
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
    var v648 = '<tr><td class="' + backGroundClass;
    var v636 = v648 + '">';
    var v668 = arrayOfItems[i$$9];
    var v659 = v668.match(/\([^\(]+\)/);
    var v649 = v659.toString();
    var v637 = v649.replace(/\(|\)/g, "");
    var v624 = v636 + v637;
    var v607 = v624 + '</td><td class="';
    var v575 = v607 + backGroundClass;
    var v525 = v575 + '">';
    var v443 = v525 + tempString$$1;
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
  var v625 = '<tr><td class="title">' + "Pattern:";
  var v608 = v625 + '</td><td class="title">';
  var v576 = v608 + "Times found:";
  var v526 = v576 + '</td><td class="title">';
  var v445 = v526 + "Percentage:";
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
    var v527 = originalLength + 1;
    var v609 = arrayOfItems$$1[i$$10];
    var v577 = v609.match(/\d+/);
    var v528 = parseFloat(v577);
    var v449 = v527 - v528;
    var v252 = v449 > 0;
    if (v252) {
      var v250 = 100 * tempNumber;
      var v450 = originalLength + 1;
      var v578 = arrayOfItems$$1[i$$10];
      var v529 = v578.match(/\d+/);
      var v451 = parseFloat(v529);
      var v251 = v450 - v451;
      percentage = v250 / v251;
    }
    var v253 = outputWindow.document;
    var v669 = arrayOfItems$$1[i$$10];
    var v660 = v669.match(/\([^\(]+\)\b/);
    var v650 = v660.toString();
    var v638 = v650.replace(/\(|\)/g, "");
    var v626 = "<tr><td>" + v638;
    var v610 = v626 + "</td><td>";
    var v579 = v610 + tempNumber;
    var v530 = v579 + "</td><td>";
    var v531 = percentage.toFixed(2);
    var v452 = v530 + v531;
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
function oneToThree() {
  var theDocument = document;
  var newProtein = "";
  var maxInput$$3 = 1E5;
  var v458 = testScript();
  var v266 = v458 == false;
  if (v266) {
    return;
  }
  var v639 = theDocument.forms;
  var v627 = v639[0];
  var v611 = v627.elements;
  var v580 = v611[0];
  var v532 = checkFormElement(v580);
  var v459 = v532 == false;
  var v534 = !v459;
  if (v534) {
    var v651 = theDocument.forms;
    var v640 = v651[0];
    var v628 = v640.elements;
    var v612 = v628[0];
    var v581 = v612.value;
    var v533 = checkTextLength(v581, maxInput$$3);
    v459 = v533 == false;
  }
  var v267 = v459;
  if (v267) {
    return;
  }
  openWindow();
  openPre();
  var v613 = theDocument.forms;
  var v582 = v613[0];
  var v535 = v582.elements;
  var v460 = v535[0];
  var v268 = v460.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v268);
  var i$$11 = 0;
  var v461 = arrayOfFasta$$1.length;
  var v274 = i$$11 < v461;
  for (;v274;) {
    var v269 = arrayOfFasta$$1[i$$11];
    newProtein = getSequenceFromFasta(v269);
    var v270 = arrayOfFasta$$1[i$$11];
    title = getTitleFromFasta(v270);
    newProtein = removeNonProteinAllowDegen(newProtein);
    var v271 = outputWindow.document;
    var v272 = getFastaTitleFromTitleAndSequence(newProtein);
    v271.write(v272);
    writeOneToThree(newProtein);
    var v273 = outputWindow.document;
    v273.write("\n\n");
    i$$11++;
    var v462 = arrayOfFasta$$1.length;
    v274 = i$$11 < v462;
  }
  closePre();
  closeWindow();
  return;
}
function writeOneToThree(proteinSequence$$1) {
  function v3(str$$9, p1$$3, p2, p3, offset$$11, s$$5) {
    var v463 = p2.toLowerCase();
    var v275 = p1$$3 + v463;
    var v276 = p3.toLowerCase();
    return v275 + v276;
  }
  function v2(str$$8, p1$$2, offset$$10, s$$4) {
    var v277 = " " + p1$$2;
    return v277 + " ";
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
  var v278 = outputWindow.document;
  var v279 = addReturns(proteinSequence$$1);
  v278.write(v279);
  return;
}
document.onload = v4;
var v280 = document.getElementById("submitbtn");
v280.onclick = v5;
var v281 = document.getElementById("clearbtn");
v281.onclick = v6

}

JAM.stopProfile('load');
