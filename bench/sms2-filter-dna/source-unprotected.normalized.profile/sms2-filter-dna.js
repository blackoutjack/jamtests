
JAM.startProfile('load');
function v4() {
  var v541 = document.forms;
  var v462 = v541[0];
  var v278 = v462.elements;
  var v5 = v278[0];
  v5.value = " ";
  return;
}
function v3() {
  try {
    filterDna();
  } catch (e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    alert(v6);
  }
  return;
}
function v2() {
  var v279 = document.main_form;
  var v7 = v279.main_submit;
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
  var v280 = arrayOfSequences.length;
  var v9 = v280 < 2;
  if (v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v281 = arrayOfTitles.length;
  var v11 = i$$1 < v281;
  for (;v11;) {
    var v596 = arrayOfTitles[i$$1];
    var v542 = v596.search(/\S/);
    var v463 = v542 == -1;
    var v544 = !v463;
    if (v544) {
      var v597 = arrayOfSequences[i$$1];
      var v543 = v597.search(/\S/);
      v463 = v543 == -1;
    }
    var v282 = v463;
    var v465 = !v282;
    if (v465) {
      var v545 = arrayOfSequences[i$$1];
      var v464 = v545.length;
      v282 = v464 != lengthOfAlign;
    }
    var v10 = v282;
    if (v10) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v283 = arrayOfTitles.length;
    v11 = i$$1 < v283;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v635 = codonTable.search(/AmAcid/);
  var v598 = v635 == -1;
  var v637 = !v598;
  if (v637) {
    var v636 = codonTable.search(/Codon/);
    v598 = v636 == -1;
  }
  var v546 = v598;
  var v600 = !v546;
  if (v600) {
    var v599 = codonTable.search(/Number/);
    v546 = v599 == -1;
  }
  var v466 = v546;
  var v548 = !v466;
  if (v548) {
    var v547 = codonTable.search(/\/1000/);
    v466 = v547 == -1;
  }
  var v284 = v466;
  var v468 = !v284;
  if (v468) {
    var v467 = codonTable.search(/Fraction\s*\.\./);
    v284 = v467 == -1;
  }
  var v12 = v284;
  if (v12) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v469 = formElement.value;
  var v285 = v469.search(/\S/);
  var v13 = v285 == -1;
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
  var v286 = arrayOfPatterns.length;
  var v16 = z$$2 < v286;
  for (;v16;) {
    var v470 = arrayOfPatterns[z$$2];
    var v287 = v470.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v14 = v287 == -1;
    if (v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v471 = arrayOfPatterns[z$$2];
    var v288 = moreExpressionCheck(v471);
    var v15 = v288 == false;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v289 = arrayOfPatterns.length;
    v16 = z$$2 < v289;
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v290 = arrayOfPatterns.length;
  var v22 = j < v290;
  for (;v22;) {
    var v472 = arrayOfPatterns[j];
    var v291 = v472.match(/\/.+\//);
    var v19 = v291 + "gi";
    var v740 = eval(v19);
    geneticCodeMatchExp[j] = v740;
    var v292 = arrayOfPatterns[j];
    var v20 = v292.match(/=[a-zA-Z\*]/);
    var v741 = v20.toString();
    geneticCodeMatchResult[j] = v741;
    var v21 = geneticCodeMatchResult[j];
    var v742 = v21.replace(/=/g, "");
    geneticCodeMatchResult[j] = v742;
    j++;
    var v293 = arrayOfPatterns.length;
    v22 = j < v293;
  }
  var i$$2 = 0;
  var v473 = testSequence.length;
  var v294 = v473 - 3;
  var v29 = i$$2 <= v294;
  for (;v29;) {
    var v23 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v23);
    j = 0;
    var v295 = geneticCodeMatchExp.length;
    var v27 = j < v295;
    for (;v27;) {
      var v474 = geneticCodeMatchExp[j];
      var v296 = codon.search(v474);
      var v26 = v296 != -1;
      if (v26) {
        var v25 = oneMatch == true;
        if (v25) {
          var v297 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v24 = v297 + ".";
          alert(v24);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v298 = geneticCodeMatchExp.length;
      v27 = j < v298;
    }
    var v28 = oneMatch == false;
    if (v28) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v475 = testSequence.length;
    var v299 = v475 - 3;
    v29 = i$$2 <= v299;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v300 = arrayOfPatterns$$1.length;
  var v31 = z$$3 < v300;
  for (;v31;) {
    var v476 = arrayOfPatterns$$1[z$$3];
    var v301 = v476.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v30 = v301 != -1;
    if (v30) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v302 = arrayOfPatterns$$1.length;
    v31 = z$$3 < v302;
  }
  var i$$3 = 0;
  var v303 = arrayOfPatterns$$1.length;
  var v35 = i$$3 < v303;
  for (;v35;) {
    var v477 = arrayOfPatterns$$1[i$$3];
    var v304 = "[" + v477;
    var v32 = v304 + "]";
    var re = new RegExp(v32, "gi");
    var j$$1 = i$$3 + 1;
    var v305 = arrayOfPatterns$$1.length;
    var v34 = j$$1 < v305;
    for (;v34;) {
      var v478 = arrayOfPatterns$$1[j$$1];
      var v306 = v478.search(re);
      var v33 = v306 != -1;
      if (v33) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v307 = arrayOfPatterns$$1.length;
      v34 = j$$1 < v307;
    }
    i$$3++;
    var v308 = arrayOfPatterns$$1.length;
    v35 = i$$3 < v308;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v309 = arrayOfPatterns$$2.length;
  var v38 = z$$4 < v309;
  for (;v38;) {
    var v479 = arrayOfPatterns$$2[z$$4];
    var v310 = v479.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v36 = v310 == -1;
    if (v36) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v480 = arrayOfPatterns$$2[z$$4];
    var v311 = moreExpressionCheck(v480);
    var v37 = v311 == false;
    if (v37) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v312 = arrayOfPatterns$$2.length;
    v38 = z$$4 < v312;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v549 = getSequenceFromFasta(text$$7);
  var v481 = v549.replace(/[^A-Za-z]/g, "");
  var v313 = v481.length;
  var v40 = v313 > maxInput;
  if (v40) {
    var v314 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v39 = v314 + " characters.";
    alert(v39);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v315 = text$$8.length;
  var v42 = v315 > maxInput$$1;
  if (v42) {
    var v316 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v41 = v316 + " characters.";
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
  var v317 = alignArray.length;
  var v49 = v317 < 3;
  if (v49) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v318 = alignArray.length;
  var v51 = i$$4 < v318;
  for (;v51;) {
    var v482 = alignArray[i$$4];
    var v319 = v482.search(/[^\s]+\s/);
    var v50 = v319 == -1;
    if (v50) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v320 = alignArray.length;
    v51 = i$$4 < v320;
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
  var v321 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v54 = v321 != -1;
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
  var v322 = sequence$$2.length;
  var v55 = "&gt;results for " + v322;
  var stringToReturn = v55 + " residue sequence ";
  var v323 = fastaSequenceTitle.search(/[^\s]/);
  var v57 = v323 != -1;
  if (v57) {
    var v324 = stringToReturn + '"';
    var v56 = v324 + fastaSequenceTitle;
    stringToReturn = v56 + '"';
  }
  var v325 = stringToReturn + ' starting "';
  var v326 = sequence$$2.substring(0, 10);
  var v58 = v325 + v326;
  stringToReturn = v58 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v327 = sequenceOne.length;
  var v59 = "Search results for " + v327;
  var stringToReturn$$1 = v59 + " residue sequence ";
  var v328 = fastaSequenceTitleOne.search(/[^\s]/);
  var v61 = v328 != -1;
  if (v61) {
    var v329 = stringToReturn$$1 + '"';
    var v60 = v329 + fastaSequenceTitleOne;
    stringToReturn$$1 = v60 + '"';
  }
  var v330 = stringToReturn$$1 + ' starting "';
  var v331 = sequenceOne.substring(0, 10);
  var v62 = v330 + v331;
  stringToReturn$$1 = v62 + '"\n';
  var v332 = stringToReturn$$1 + "and ";
  var v333 = sequenceTwo.length;
  var v63 = v332 + v333;
  stringToReturn$$1 = v63 + " residue sequence ";
  var v334 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v65 = v334 != -1;
  if (v65) {
    var v335 = stringToReturn$$1 + '"';
    var v64 = v335 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v64 + '"';
  }
  var v336 = stringToReturn$$1 + ' starting "';
  var v337 = sequenceTwo.substring(0, 10);
  var v66 = v336 + v337;
  stringToReturn$$1 = v66 + '"';
  var v67 = '<div class="info">' + stringToReturn$$1;
  return v67 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v68 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v68);
  var j$$2 = 0;
  var v338 = arrayOfPatterns$$3.length;
  var v70 = j$$2 < v338;
  for (;v70;) {
    var v483 = arrayOfPatterns$$3[j$$2];
    var v339 = v483.match(/\/.+\//);
    var v69 = v339 + "gi";
    var v743 = eval(v69);
    geneticCodeMatchExp$$1[j$$2] = v743;
    j$$2++;
    var v340 = arrayOfPatterns$$3.length;
    v70 = j$$2 < v340;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v71 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v71);
  var j$$3 = 0;
  var v341 = arrayOfPatterns$$4.length;
  var v74 = j$$3 < v341;
  for (;v74;) {
    var v342 = arrayOfPatterns$$4[j$$3];
    var v72 = v342.match(/=[a-zA-Z\*]/);
    var v744 = v72.toString();
    geneticCodeMatchResult$$1[j$$3] = v744;
    var v73 = geneticCodeMatchResult$$1[j$$3];
    var v745 = v73.replace(/=/g, "");
    geneticCodeMatchResult$$1[j$$3] = v745;
    j$$3++;
    var v343 = arrayOfPatterns$$4.length;
    v74 = j$$3 < v343;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v344 = sequence$$3.length;
  var v75 = "Results for " + v344;
  var stringToReturn$$2 = v75 + " residue sequence ";
  var v345 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v77 = v345 != -1;
  if (v77) {
    var v346 = stringToReturn$$2 + '"';
    var v76 = v346 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v76 + '"';
  }
  var v347 = stringToReturn$$2 + ' starting "';
  var v348 = sequence$$3.substring(0, 10);
  var v78 = v347 + v348;
  stringToReturn$$2 = v78 + '"';
  var v79 = '<div class="info">' + stringToReturn$$2;
  return v79 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v484 = "Results for " + topology;
  var v349 = v484 + " ";
  var v350 = sequence$$4.length;
  var v80 = v349 + v350;
  var stringToReturn$$3 = v80 + " residue sequence ";
  var v351 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v82 = v351 != -1;
  if (v82) {
    var v352 = stringToReturn$$3 + '"';
    var v81 = v352 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v81 + '"';
  }
  var v353 = stringToReturn$$3 + ' starting "';
  var v354 = sequence$$4.substring(0, 10);
  var v83 = v353 + v354;
  stringToReturn$$3 = v83 + '"';
  var v84 = '<div class="info">' + stringToReturn$$3;
  return v84 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v355 = sequenceOne$$1.length;
  var v85 = "Alignment results for " + v355;
  var stringToReturn$$4 = v85 + " residue sequence ";
  var v356 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v87 = v356 != -1;
  if (v87) {
    var v357 = stringToReturn$$4 + '"';
    var v86 = v357 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v86 + '"';
  }
  var v358 = stringToReturn$$4 + ' starting "';
  var v359 = sequenceOne$$1.substring(0, 10);
  var v88 = v358 + v359;
  stringToReturn$$4 = v88 + '"\n';
  var v360 = stringToReturn$$4 + "and ";
  var v361 = sequenceTwo$$1.length;
  var v89 = v360 + v361;
  stringToReturn$$4 = v89 + " residue sequence ";
  var v362 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v91 = v362 != -1;
  if (v91) {
    var v363 = stringToReturn$$4 + '"';
    var v90 = v363 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v90 + '"';
  }
  var v364 = stringToReturn$$4 + ' starting "';
  var v365 = sequenceTwo$$1.substring(0, 10);
  var v92 = v364 + v365;
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
    var v366 = Math.random();
    var v367 = components.length;
    var v94 = v366 * v367;
    tempNum = Math.floor(v94);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4++;
    v95 = j$$4 < lengthOut;
  }
  return sequenceArray.join("");
}
function getSequenceFromFasta(sequenceRecord) {
  var v368 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v96 = v368 != -1;
  if (v96) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "");
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v369 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v98 = v369 != -1;
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
  var v718 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v711 = v718 != -1;
  var v720 = !v711;
  if (v720) {
    var v719 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    v711 = v719 != -1;
  }
  var v702 = v711;
  var v713 = !v702;
  if (v713) {
    var v712 = expressionToCheck.search(/\[\]/);
    v702 = v712 != -1;
  }
  var v693 = v702;
  var v704 = !v693;
  if (v704) {
    var v703 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
    v693 = v703 != -1;
  }
  var v678 = v693;
  var v695 = !v678;
  if (v695) {
    var v694 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
    v678 = v694 != -1;
  }
  var v658 = v678;
  var v680 = !v658;
  if (v680) {
    var v679 = expressionToCheck.search(/\|\|/);
    v658 = v679 != -1;
  }
  var v638 = v658;
  var v660 = !v638;
  if (v660) {
    var v659 = expressionToCheck.search(/\/\|/);
    v638 = v659 != -1;
  }
  var v601 = v638;
  var v640 = !v601;
  if (v640) {
    var v639 = expressionToCheck.search(/\|\//);
    v601 = v639 != -1;
  }
  var v550 = v601;
  var v603 = !v550;
  if (v603) {
    var v602 = expressionToCheck.search(/\[.\]/);
    v550 = v602 != -1;
  }
  var v485 = v550;
  var v552 = !v485;
  if (v552) {
    var v551 = expressionToCheck.search(/\</);
    v485 = v551 != -1;
  }
  var v370 = v485;
  var v487 = !v370;
  if (v487) {
    var v486 = expressionToCheck.search(/\>/);
    v370 = v486 != -1;
  }
  var v99 = v370;
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
  var title$$5 = "Filter DNA";
  _openWindow(title$$5);
  return;
}
function _openWindow(title$$6) {
  var isColor = true;
  outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  outputWindow.focus();
  var v104 = outputWindow.document;
  var v553 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v488 = v553 + "<head>\n";
  var v371 = v488 + "<title>Sequence Manipulation Suite</title>\n";
  var v105 = v371 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v104.write(v105);
  if (isColor) {
    var v106 = outputWindow.document;
    var v733 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v729 = v733 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v725 = v729 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v721 = v725 + "div.info {font-weight: bold}\n";
    var v714 = v721 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v705 = v714 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v696 = v705 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v681 = v696 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v661 = v681 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v641 = v661 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v604 = v641 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v554 = v604 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v489 = v554 + "td.many {color: #000000}\n";
    var v372 = v489 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v107 = v372 + "</style>\n";
    v106.write(v107);
  } else {
    var v108 = outputWindow.document;
    var v737 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v734 = v737 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v730 = v734 + "div.title {display: none}\n";
    var v726 = v730 + "div.info {font-weight: bold}\n";
    var v722 = v726 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v715 = v722 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v706 = v715 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v697 = v706 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v682 = v697 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v662 = v682 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v642 = v662 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v605 = v642 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v555 = v605 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v490 = v555 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v373 = v490 + "img {display: none}\n";
    var v109 = v373 + "</style>\n";
    v108.write(v109);
  }
  var v110 = outputWindow.document;
  var v556 = "</head>\n" + '<body class="main">\n';
  var v491 = v556 + '<div class="title">';
  var v374 = v491 + title$$6;
  var v111 = v374 + " results</div>\n";
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
  var v557 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v492 = v557 + "<head>\n";
  var v375 = v492 + "<title>Sequence Manipulation Suite</title>\n";
  var v113 = v375 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v112.write(v113);
  if (isBackground) {
    var v114 = outputWindow.document;
    var v735 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v731 = v735 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v727 = v731 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v723 = v727 + "div.info {font-weight: bold}\n";
    var v716 = v723 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v707 = v716 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v698 = v707 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v683 = v698 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v663 = v683 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v643 = v663 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v606 = v643 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v558 = v606 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v493 = v558 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v376 = v493 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v115 = v376 + "</style>\n";
    v114.write(v115);
  } else {
    var v116 = outputWindow.document;
    var v739 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v738 = v739 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v736 = v738 + "div.title {display: none}\n";
    var v732 = v736 + "div.info {font-weight: bold}\n";
    var v728 = v732 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v724 = v728 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v717 = v724 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v708 = v717 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v699 = v708 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v684 = v699 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v664 = v684 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v644 = v664 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v607 = v644 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v559 = v607 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v494 = v559 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v377 = v494 + "img {display: none}\n";
    var v117 = v377 + "</style>\n";
    v116.write(v117);
  }
  var v118 = outputWindow.document;
  var v560 = "</head>\n" + '<body class="main">\n';
  var v495 = v560 + '<div class="title">';
  var v378 = v495 + title$$8;
  var v119 = v378 + " results</div>\n";
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
  var v379 = dnaSequence$$1.search(/./);
  var v120 = v379 != -1;
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
  var v380 = testArray[0];
  var v124 = v380 != testString;
  if (v124) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v381 = testString.search(re$$2);
  var v125 = v381 == -1;
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
  var v382 = testNum.toFixed(3);
  var v128 = v382 != 2489.824;
  if (v128) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v383 = testNum.toPrecision(5);
  var v129 = v383 != 2489.8;
  if (v129) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v384 = theNumber$$1.search(/\d/);
  var v130 = v384 == -1;
  if (v130) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v608 = emblFile.search(/ID/);
  var v561 = v608 == -1;
  var v610 = !v561;
  if (v610) {
    var v609 = emblFile.search(/AC/);
    v561 = v609 == -1;
  }
  var v496 = v561;
  var v563 = !v496;
  if (v563) {
    var v562 = emblFile.search(/DE/);
    v496 = v562 == -1;
  }
  var v385 = v496;
  var v498 = !v385;
  if (v498) {
    var v497 = emblFile.search(/SQ/);
    v385 = v497 == -1;
  }
  var v131 = v385;
  if (v131) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v386 = theNumber$$2.search(/\d/);
  var v132 = v386 == -1;
  if (v132) {
    alert("Please enter a number.");
    return false;
  }
  var v134 = theNumber$$2 > maxInput$$2;
  if (v134) {
    var v387 = "Please enter a number less than or equal to " + maxInput$$2;
    var v133 = v387 + ".";
    alert(v133);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v388 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v135 = v388 != -1;
  if (v135) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v389 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v136 = v389 != -1;
  if (v136) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v611 = genBankFile.search(/LOCUS/);
  var v564 = v611 == -1;
  var v613 = !v564;
  if (v613) {
    var v612 = genBankFile.search(/DEFINITION/);
    v564 = v612 == -1;
  }
  var v499 = v564;
  var v566 = !v499;
  if (v566) {
    var v565 = genBankFile.search(/ACCESSION/);
    v499 = v565 == -1;
  }
  var v390 = v499;
  var v501 = !v390;
  if (v501) {
    var v500 = genBankFile.search(/ORIGIN/);
    v390 = v500 == -1;
  }
  var v137 = v390;
  if (v137) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v614 = genBankFile$$1.search(/LOCUS/);
  var v567 = v614 == -1;
  var v616 = !v567;
  if (v616) {
    var v615 = genBankFile$$1.search(/DEFINITION/);
    v567 = v615 == -1;
  }
  var v502 = v567;
  var v569 = !v502;
  if (v569) {
    var v568 = genBankFile$$1.search(/ACCESSION/);
    v502 = v568 == -1;
  }
  var v391 = v502;
  var v504 = !v391;
  if (v504) {
    var v503 = genBankFile$$1.search(/ORIGIN/);
    v391 = v503 == -1;
  }
  var v138 = v391;
  if (v138) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v392 = genBankFile$$1.search(/FEATURES {13}/);
  var v139 = v392 == -1;
  if (v139) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v617 = emblFile$$1.search(/ID/);
  var v570 = v617 == -1;
  var v619 = !v570;
  if (v619) {
    var v618 = emblFile$$1.search(/AC/);
    v570 = v618 == -1;
  }
  var v505 = v570;
  var v572 = !v505;
  if (v572) {
    var v571 = emblFile$$1.search(/DE/);
    v505 = v571 == -1;
  }
  var v393 = v505;
  var v507 = !v393;
  if (v507) {
    var v506 = emblFile$$1.search(/SQ/);
    v393 = v506 == -1;
  }
  var v140 = v393;
  if (v140) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v394 = emblFile$$1.search(/^FT/m);
  var v141 = v394 == -1;
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
    var v395 = basePerLine / groupSize;
    var v145 = j$$6 <= v395;
    for (;v145;) {
      var v144 = k < groupSize;
      for (;v144;) {
        var v396 = k + i$$5;
        var v143 = text$$10.charAt(v396);
        lineOfText = lineOfText + v143;
        k = k + 1;
        v144 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v397 = basePerLine / groupSize;
      v145 = j$$6 <= v397;
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
    var v398 = adjustment < 0;
    if (v398) {
      v398 = adjusted >= 0;
    }
    var v149 = v398;
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
    var v399 = basePerLine$$2 / groupSize$$2;
    var v156 = j$$7 <= v399;
    for (;v156;) {
      var v152 = k$$1 < groupSize$$2;
      for (;v152;) {
        var v400 = i$$6 + k$$1;
        var v150 = v400 >= stopBase$$2;
        if (v150) {
          break;
        }
        var v401 = k$$1 + i$$6;
        var v151 = text$$12.charAt(v401);
        lineOfText$$1 = lineOfText$$1 + v151;
        k$$1 = k$$1 + 1;
        v152 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v154 = numberPosition$$1 == "above";
      if (v154) {
        var v402 = adjustNumbering(i$$6, numberingAdjustment);
        var v153 = rightNum(v402, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v153;
      }
      var v155 = i$$6 >= stopBase$$2;
      if (v155) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v403 = basePerLine$$2 / groupSize$$2;
      v156 = j$$7 <= v403;
    }
    var v179 = numberPosition$$1 == "left";
    if (v179) {
      var v157 = outputWindow.document;
      var v573 = adjustNumbering(lineNum, numberingAdjustment);
      var v508 = rightNum(v573, "", 8, tabIn$$3);
      var v404 = v508 + lineOfText$$1;
      var v158 = v404 + "\n";
      v157.write(v158);
      var v162 = strands$$1 == "two";
      if (v162) {
        var v159 = outputWindow.document;
        var v574 = adjustNumbering(lineNum, numberingAdjustment);
        var v509 = rightNum(v574, "", 8, tabIn$$3);
        var v510 = complement(lineOfText$$1);
        var v405 = v509 + v510;
        var v160 = v405 + "\n";
        v159.write(v160);
        var v161 = outputWindow.document;
        v161.write("\n");
      }
    } else {
      var v178 = numberPosition$$1 == "right";
      if (v178) {
        var v163 = outputWindow.document;
        var v511 = adjustNumbering(i$$6, numberingAdjustment);
        var v406 = lineOfText$$1 + v511;
        var v164 = v406 + "\n";
        v163.write(v164);
        var v168 = strands$$1 == "two";
        if (v168) {
          var v165 = outputWindow.document;
          var v512 = complement(lineOfText$$1);
          var v513 = adjustNumbering(i$$6, numberingAdjustment);
          var v407 = v512 + v513;
          var v166 = v407 + "\n";
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
            var v408 = complement(lineOfText$$1);
            var v174 = v408 + "\n";
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
    var v409 = basePerLine$$3 / groupSize$$3;
    var v187 = j$$8 <= v409;
    for (;v187;) {
      var v183 = k$$2 < groupSize$$3;
      for (;v183;) {
        var v410 = i$$7 + k$$2;
        var v181 = v410 >= stopBase$$3;
        if (v181) {
          break;
        }
        var v411 = k$$2 + i$$7;
        var v182 = text$$13.charAt(v411);
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
      var v412 = basePerLine$$3 / groupSize$$3;
      v187 = j$$8 <= v412;
    }
    var v198 = numberPosition$$2 == "left";
    if (v198) {
      var v188 = outputWindow.document;
      var v514 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v413 = v514 + lineOfText$$2;
      var v189 = v413 + "\n";
      v188.write(v189);
    } else {
      var v197 = numberPosition$$2 == "right";
      if (v197) {
        var v190 = outputWindow.document;
        var v414 = lineOfText$$2 + i$$7;
        var v191 = v414 + "\n";
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
  var v575 = sequence$$13.length;
  var v515 = v575 <= firstIndexToMutate;
  var v576 = !v515;
  if (v576) {
    v515 = lastIndexToMutate < 0;
  }
  var v415 = v515;
  var v516 = !v415;
  if (v516) {
    v415 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v200 = v415;
  if (v200) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v208 = i$$8 < numMut;
  for (;v208;) {
    maxNum = sequence$$13.length;
    var v416 = Math.random();
    var v201 = v416 * maxNum;
    randNum = Math.floor(v201);
    var v417 = randNum < firstIndexToMutate;
    var v517 = !v417;
    if (v517) {
      v417 = randNum > lastIndexToMutate;
    }
    var v202 = v417;
    if (v202) {
      numMut++;
      i$$8++;
      v208 = i$$8 < numMut;
      continue;
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for (;needNewChar;) {
      var v418 = Math.random();
      var v419 = components$$1.length;
      var v203 = v418 * v419;
      componentsIndex = Math.round(v203);
      var v420 = components$$1.length;
      var v204 = componentsIndex == v420;
      if (v204) {
        componentsIndex = 0;
      }
      var v421 = components$$1[componentsIndex];
      var v205 = v421 != currentChar;
      if (v205) {
        needNewChar = false;
      }
    }
    var v422 = sequence$$13.substring(0, randNum);
    var v423 = components$$1[componentsIndex];
    var v206 = v422 + v423;
    var v424 = randNum + 1;
    var v425 = sequence$$13.length;
    var v207 = sequence$$13.substring(v424, v425);
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
    var v426 = Math.random();
    var v427 = components$$2.length;
    var v211 = v426 * v427;
    tempNum$$1 = Math.floor(v211);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v428 = sequence$$14.length;
    var v214 = v428 == 60;
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
    var v577 = sequence$$15.length;
    var v518 = v577 - lookAhead;
    var v519 = sequence$$15.length;
    var v429 = sequence$$15.substring(v518, v519);
    var v219 = v429 + sequence$$15;
    var v220 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v219 + v220;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v222 = outputWindow.document;
  v222.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  var v223 = outputWindow.document;
  var v578 = '<tr><td class="title" width="200px">' + "Site:";
  var v520 = v578 + '</td><td class="title">';
  var v430 = v520 + "Positions:";
  var v224 = v430 + "</td></tr>\n";
  v223.write(v224);
  var i$$9 = 0;
  var v431 = arrayOfItems.length;
  var v240 = i$$9 < v431;
  for (;v240;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v432 = arrayOfItems[i$$9];
    var v225 = v432.match(/\/.+\//);
    matchExp = v225 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    var v579 = arrayOfItems[i$$9];
    var v521 = v579.match(/\)\D*\d+/);
    var v433 = v521.toString();
    var v226 = v433.replace(/\)\D*/, "");
    cutDistance = parseFloat(v226);
    var v232 = matchArray$$1 = matchExp.exec(sequence$$15);
    for (;v232;) {
      var v227 = matchExp.lastIndex;
      matchPosition = v227 - cutDistance;
      var v434 = matchPosition >= lowerLimit;
      if (v434) {
        v434 = matchPosition < upperLimit;
      }
      var v230 = v434;
      if (v230) {
        timesFound++;
        var v228 = tempString$$1 + ", ";
        var v435 = matchPosition - shiftValue;
        var v229 = v435 + 1;
        tempString$$1 = v228 + v229;
      }
      var v436 = matchExp.lastIndex;
      var v522 = RegExp.lastMatch;
      var v437 = v522.length;
      var v231 = v436 - v437;
      matchExp.lastIndex = v231 + 1;
      v232 = matchArray$$1 = matchExp.exec(sequence$$15);
    }
    var v438 = tempString$$1.search(/\d/);
    var v233 = v438 != -1;
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
    var v685 = '<tr><td class="' + backGroundClass;
    var v665 = v685 + '">';
    var v709 = arrayOfItems[i$$9];
    var v700 = v709.match(/\([^\(]+\)/);
    var v686 = v700.toString();
    var v666 = v686.replace(/\(|\)/g, "");
    var v645 = v665 + v666;
    var v620 = v645 + '</td><td class="';
    var v580 = v620 + backGroundClass;
    var v523 = v580 + '">';
    var v439 = v523 + tempString$$1;
    var v239 = v439 + "</td></tr>\n";
    v238.write(v239);
    timesFound = 0;
    i$$9++;
    var v440 = arrayOfItems.length;
    v240 = i$$9 < v440;
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
  var v646 = '<tr><td class="title">' + "Pattern:";
  var v621 = v646 + '</td><td class="title">';
  var v581 = v621 + "Times found:";
  var v524 = v581 + '</td><td class="title">';
  var v441 = v524 + "Percentage:";
  var v244 = v441 + "</td></tr>\n";
  v243.write(v244);
  var i$$10 = 0;
  var v442 = arrayOfItems$$1.length;
  var v253 = i$$10 < v442;
  for (;v253;) {
    var tempNumber = 0;
    var v443 = arrayOfItems$$1[i$$10];
    var v245 = v443.match(/\/[^\/]+\//);
    var matchExp$$1 = v245 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    var v444 = sequence$$16.search(matchExp$$1);
    var v247 = v444 != -1;
    if (v247) {
      var v246 = sequence$$16.match(matchExp$$1);
      tempNumber = v246.length;
    }
    var percentage = 0;
    var v525 = originalLength + 1;
    var v622 = arrayOfItems$$1[i$$10];
    var v582 = v622.match(/\d+/);
    var v526 = parseFloat(v582);
    var v445 = v525 - v526;
    var v250 = v445 > 0;
    if (v250) {
      var v248 = 100 * tempNumber;
      var v446 = originalLength + 1;
      var v583 = arrayOfItems$$1[i$$10];
      var v527 = v583.match(/\d+/);
      var v447 = parseFloat(v527);
      var v249 = v446 - v447;
      percentage = v248 / v249;
    }
    var v251 = outputWindow.document;
    var v710 = arrayOfItems$$1[i$$10];
    var v701 = v710.match(/\([^\(]+\)\b/);
    var v687 = v701.toString();
    var v667 = v687.replace(/\(|\)/g, "");
    var v647 = "<tr><td>" + v667;
    var v623 = v647 + "</td><td>";
    var v584 = v623 + tempNumber;
    var v528 = v584 + "</td><td>";
    var v529 = percentage.toFixed(2);
    var v448 = v528 + v529;
    var v252 = v448 + "</td></tr>\n";
    v251.write(v252);
    i$$10++;
    var v449 = arrayOfItems$$1.length;
    v253 = i$$10 < v449;
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
  var v450 = sequence$$17.length;
  var v261 = v450 > 0;
  for (;v261;) {
    maxNum$$1 = sequence$$17.length;
    var v451 = Math.random();
    var v255 = v451 * maxNum$$1;
    randNum$$1 = Math.floor(v255);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v256 = randNum$$1 + 1;
    var v257 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v256, v257);
    sequence$$17 = tempString1 + tempString2;
    var v452 = tempSeq.length;
    var v260 = v452 == 60;
    if (v260) {
      var v258 = outputWindow.document;
      var v259 = tempSeq + "\n";
      v258.write(v259);
      tempSeq = "";
    }
    var v453 = sequence$$17.length;
    v261 = v453 > 0;
  }
  var v262 = outputWindow.document;
  var v263 = tempSeq + "\n";
  v262.write(v263);
  return true;
}
function filterDna() {
  var theDocument = document;
  var newDna = "";
  var maxInput$$3 = 5E5;
  var v454 = testScript();
  var v264 = v454 == false;
  if (v264) {
    return;
  }
  var v668 = theDocument.forms;
  var v648 = v668[0];
  var v624 = v648.elements;
  var v585 = v624[0];
  var v530 = checkFormElement(v585);
  var v455 = v530 == false;
  var v532 = !v455;
  if (v532) {
    var v688 = theDocument.forms;
    var v669 = v688[0];
    var v649 = v669.elements;
    var v625 = v649[0];
    var v586 = v625.value;
    var v531 = checkTextLength(v586, maxInput$$3);
    v455 = v531 == false;
  }
  var v265 = v455;
  if (v265) {
    return;
  }
  var v670 = theDocument.forms;
  var v650 = v670[0];
  var v626 = v650.elements;
  var v587 = v626[4];
  var v533 = v587.options;
  var v671 = theDocument.forms;
  var v651 = v671[0];
  var v627 = v651.elements;
  var v588 = v627[4];
  var v534 = v588.selectedIndex;
  var v456 = v533[v534];
  var v266 = v456.value;
  var re$$3 = new RegExp(v266, "g");
  var v628 = theDocument.forms;
  var v589 = v628[0];
  var v535 = v589.elements;
  var v457 = v535[0];
  var v267 = v457.value;
  var v672 = theDocument.forms;
  var v652 = v672[0];
  var v629 = v652.elements;
  var v590 = v629[5];
  var v536 = v590.options;
  var v673 = theDocument.forms;
  var v653 = v673[0];
  var v630 = v653.elements;
  var v591 = v630[5];
  var v537 = v591.selectedIndex;
  var v458 = v536[v537];
  var v268 = v458.value;
  newDna = v267.replace(re$$3, v268);
  var v689 = theDocument.forms;
  var v674 = v689[0];
  var v654 = v674.elements;
  var v631 = v654[6];
  var v592 = v631.options;
  var v690 = theDocument.forms;
  var v675 = v690[0];
  var v655 = v675.elements;
  var v632 = v655[6];
  var v593 = v632.selectedIndex;
  var v538 = v592[v593];
  var v459 = v538.value;
  var v270 = v459 == "uppercase";
  if (v270) {
    newDna = newDna.toUpperCase();
  } else {
    var v691 = theDocument.forms;
    var v676 = v691[0];
    var v656 = v676.elements;
    var v633 = v656[6];
    var v594 = v633.options;
    var v692 = theDocument.forms;
    var v677 = v692[0];
    var v657 = v677.elements;
    var v634 = v657[6];
    var v595 = v634.selectedIndex;
    var v539 = v594[v595];
    var v460 = v539.value;
    var v269 = v460 == "lowercase";
    if (v269) {
      newDna = newDna.toLowerCase();
    }
  }
  openWindow();
  openPre();
  var v271 = outputWindow.document;
  var v540 = newDna.length;
  var v461 = "&gt;filtered DNA sequence consisting of " + v540;
  var v272 = v461 + " bases.\n";
  v271.write(v272);
  var v273 = outputWindow.document;
  var v274 = addReturns(newDna);
  v273.write(v274);
  var v275 = outputWindow.document;
  v275.write("\n");
  closePre();
  closeWindow();
  return;
}
document.onload = v2;
var v276 = document.getElementById("submitbtn");
v276.onclick = v3;
var v277 = document.getElementById("clearbtn");
v277.onclick = v4

JAM.stopProfile('load');
