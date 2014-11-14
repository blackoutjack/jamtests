introspect(JAM.policy.pFull) {
function v4() {
  var v619 = document.forms;
  var v528 = v619[0];
  var v323 = v528.elements;
  var v5 = v323[0];
  v5.value = " ";
  return;
}
function v3() {
  try {
    emblFeat(document);
  } catch (e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    alert(v6);
  }
  return;
}
function v2() {
  var v324 = document.main_form;
  var v7 = v324.main_submit;
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
  var v325 = arrayOfSequences.length;
  var v9 = v325 < 2;
  if (v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v326 = arrayOfTitles.length;
  var v11 = i$$1 < v326;
  for (;v11;) {
    var v675 = arrayOfTitles[i$$1];
    var v620 = v675.search(/\S/);
    var v529 = v620 == -1;
    var v622 = !v529;
    if (v622) {
      var v676 = arrayOfSequences[i$$1];
      var v621 = v676.search(/\S/);
      v529 = v621 == -1;
    }
    var v327 = v529;
    var v531 = !v327;
    if (v531) {
      var v623 = arrayOfSequences[i$$1];
      var v530 = v623.length;
      v327 = v530 != lengthOfAlign;
    }
    var v10 = v327;
    if (v10) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v328 = arrayOfTitles.length;
    v11 = i$$1 < v328;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v710 = codonTable.search(/AmAcid/);
  var v677 = v710 == -1;
  var v712 = !v677;
  if (v712) {
    var v711 = codonTable.search(/Codon/);
    v677 = v711 == -1;
  }
  var v624 = v677;
  var v679 = !v624;
  if (v679) {
    var v678 = codonTable.search(/Number/);
    v624 = v678 == -1;
  }
  var v532 = v624;
  var v626 = !v532;
  if (v626) {
    var v625 = codonTable.search(/\/1000/);
    v532 = v625 == -1;
  }
  var v329 = v532;
  var v534 = !v329;
  if (v534) {
    var v533 = codonTable.search(/Fraction\s*\.\./);
    v329 = v533 == -1;
  }
  var v12 = v329;
  if (v12) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v535 = formElement.value;
  var v330 = v535.search(/\S/);
  var v13 = v330 == -1;
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
  var v331 = arrayOfPatterns.length;
  var v16 = z$$2 < v331;
  for (;v16;) {
    var v536 = arrayOfPatterns[z$$2];
    var v332 = v536.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v14 = v332 == -1;
    if (v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v537 = arrayOfPatterns[z$$2];
    var v333 = moreExpressionCheck(v537);
    var v15 = v333 == false;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v334 = arrayOfPatterns.length;
    v16 = z$$2 < v334;
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v335 = arrayOfPatterns.length;
  var v22 = j < v335;
  for (;v22;) {
    var v538 = arrayOfPatterns[j];
    var v336 = v538.match(/\/.+\//);
    var v19 = v336 + "gi";
    var v804 = eval(v19);
    geneticCodeMatchExp[j] = v804;
    var v337 = arrayOfPatterns[j];
    var v20 = v337.match(/=[a-zA-Z\*]/);
    var v805 = v20.toString();
    geneticCodeMatchResult[j] = v805;
    var v21 = geneticCodeMatchResult[j];
    var v806 = v21.replace(/=/g, "");
    geneticCodeMatchResult[j] = v806;
    j++;
    var v338 = arrayOfPatterns.length;
    v22 = j < v338;
  }
  var i$$2 = 0;
  var v539 = testSequence.length;
  var v339 = v539 - 3;
  var v29 = i$$2 <= v339;
  for (;v29;) {
    var v23 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v23);
    j = 0;
    var v340 = geneticCodeMatchExp.length;
    var v27 = j < v340;
    for (;v27;) {
      var v540 = geneticCodeMatchExp[j];
      var v341 = codon.search(v540);
      var v26 = v341 != -1;
      if (v26) {
        var v25 = oneMatch == true;
        if (v25) {
          var v342 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v24 = v342 + ".";
          alert(v24);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v343 = geneticCodeMatchExp.length;
      v27 = j < v343;
    }
    var v28 = oneMatch == false;
    if (v28) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v541 = testSequence.length;
    var v344 = v541 - 3;
    v29 = i$$2 <= v344;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v345 = arrayOfPatterns$$1.length;
  var v31 = z$$3 < v345;
  for (;v31;) {
    var v542 = arrayOfPatterns$$1[z$$3];
    var v346 = v542.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v30 = v346 != -1;
    if (v30) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v347 = arrayOfPatterns$$1.length;
    v31 = z$$3 < v347;
  }
  var i$$3 = 0;
  var v348 = arrayOfPatterns$$1.length;
  var v35 = i$$3 < v348;
  for (;v35;) {
    var v543 = arrayOfPatterns$$1[i$$3];
    var v349 = "[" + v543;
    var v32 = v349 + "]";
    var re = new RegExp(v32, "gi");
    var j$$1 = i$$3 + 1;
    var v350 = arrayOfPatterns$$1.length;
    var v34 = j$$1 < v350;
    for (;v34;) {
      var v544 = arrayOfPatterns$$1[j$$1];
      var v351 = v544.search(re);
      var v33 = v351 != -1;
      if (v33) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v352 = arrayOfPatterns$$1.length;
      v34 = j$$1 < v352;
    }
    i$$3++;
    var v353 = arrayOfPatterns$$1.length;
    v35 = i$$3 < v353;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v354 = arrayOfPatterns$$2.length;
  var v38 = z$$4 < v354;
  for (;v38;) {
    var v545 = arrayOfPatterns$$2[z$$4];
    var v355 = v545.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v36 = v355 == -1;
    if (v36) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v546 = arrayOfPatterns$$2[z$$4];
    var v356 = moreExpressionCheck(v546);
    var v37 = v356 == false;
    if (v37) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v357 = arrayOfPatterns$$2.length;
    v38 = z$$4 < v357;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v627 = getSequenceFromFasta(text$$7);
  var v547 = v627.replace(/[^A-Za-z]/g, "");
  var v358 = v547.length;
  var v40 = v358 > maxInput;
  if (v40) {
    var v359 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v39 = v359 + " characters.";
    alert(v39);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v360 = text$$8.length;
  var v42 = v360 > maxInput$$1;
  if (v42) {
    var v361 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v41 = v361 + " characters.";
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
  var v362 = alignArray.length;
  var v49 = v362 < 3;
  if (v49) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v363 = alignArray.length;
  var v51 = i$$4 < v363;
  for (;v51;) {
    var v548 = alignArray[i$$4];
    var v364 = v548.search(/[^\s]+\s/);
    var v50 = v364 == -1;
    if (v50) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v365 = alignArray.length;
    v51 = i$$4 < v365;
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
  var v366 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v54 = v366 != -1;
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
  var v367 = sequence$$2.length;
  var v55 = "&gt;results for " + v367;
  var stringToReturn = v55 + " residue sequence ";
  var v368 = fastaSequenceTitle.search(/[^\s]/);
  var v57 = v368 != -1;
  if (v57) {
    var v369 = stringToReturn + '"';
    var v56 = v369 + fastaSequenceTitle;
    stringToReturn = v56 + '"';
  }
  var v370 = stringToReturn + ' starting "';
  var v371 = sequence$$2.substring(0, 10);
  var v58 = v370 + v371;
  stringToReturn = v58 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v372 = sequenceOne.length;
  var v59 = "Search results for " + v372;
  var stringToReturn$$1 = v59 + " residue sequence ";
  var v373 = fastaSequenceTitleOne.search(/[^\s]/);
  var v61 = v373 != -1;
  if (v61) {
    var v374 = stringToReturn$$1 + '"';
    var v60 = v374 + fastaSequenceTitleOne;
    stringToReturn$$1 = v60 + '"';
  }
  var v375 = stringToReturn$$1 + ' starting "';
  var v376 = sequenceOne.substring(0, 10);
  var v62 = v375 + v376;
  stringToReturn$$1 = v62 + '"\n';
  var v377 = stringToReturn$$1 + "and ";
  var v378 = sequenceTwo.length;
  var v63 = v377 + v378;
  stringToReturn$$1 = v63 + " residue sequence ";
  var v379 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v65 = v379 != -1;
  if (v65) {
    var v380 = stringToReturn$$1 + '"';
    var v64 = v380 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v64 + '"';
  }
  var v381 = stringToReturn$$1 + ' starting "';
  var v382 = sequenceTwo.substring(0, 10);
  var v66 = v381 + v382;
  stringToReturn$$1 = v66 + '"';
  var v67 = '<div class="info">' + stringToReturn$$1;
  return v67 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v68 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v68);
  var j$$2 = 0;
  var v383 = arrayOfPatterns$$3.length;
  var v70 = j$$2 < v383;
  for (;v70;) {
    var v549 = arrayOfPatterns$$3[j$$2];
    var v384 = v549.match(/\/.+\//);
    var v69 = v384 + "gi";
    var v807 = eval(v69);
    geneticCodeMatchExp$$1[j$$2] = v807;
    j$$2++;
    var v385 = arrayOfPatterns$$3.length;
    v70 = j$$2 < v385;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v71 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v71);
  var j$$3 = 0;
  var v386 = arrayOfPatterns$$4.length;
  var v74 = j$$3 < v386;
  for (;v74;) {
    var v387 = arrayOfPatterns$$4[j$$3];
    var v72 = v387.match(/=[a-zA-Z\*]/);
    var v808 = v72.toString();
    geneticCodeMatchResult$$1[j$$3] = v808;
    var v73 = geneticCodeMatchResult$$1[j$$3];
    var v809 = v73.replace(/=/g, "");
    geneticCodeMatchResult$$1[j$$3] = v809;
    j$$3++;
    var v388 = arrayOfPatterns$$4.length;
    v74 = j$$3 < v388;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v389 = sequence$$3.length;
  var v75 = "Results for " + v389;
  var stringToReturn$$2 = v75 + " residue sequence ";
  var v390 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v77 = v390 != -1;
  if (v77) {
    var v391 = stringToReturn$$2 + '"';
    var v76 = v391 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v76 + '"';
  }
  var v392 = stringToReturn$$2 + ' starting "';
  var v393 = sequence$$3.substring(0, 10);
  var v78 = v392 + v393;
  stringToReturn$$2 = v78 + '"';
  var v79 = '<div class="info">' + stringToReturn$$2;
  return v79 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v550 = "Results for " + topology;
  var v394 = v550 + " ";
  var v395 = sequence$$4.length;
  var v80 = v394 + v395;
  var stringToReturn$$3 = v80 + " residue sequence ";
  var v396 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v82 = v396 != -1;
  if (v82) {
    var v397 = stringToReturn$$3 + '"';
    var v81 = v397 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v81 + '"';
  }
  var v398 = stringToReturn$$3 + ' starting "';
  var v399 = sequence$$4.substring(0, 10);
  var v83 = v398 + v399;
  stringToReturn$$3 = v83 + '"';
  var v84 = '<div class="info">' + stringToReturn$$3;
  return v84 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v400 = sequenceOne$$1.length;
  var v85 = "Alignment results for " + v400;
  var stringToReturn$$4 = v85 + " residue sequence ";
  var v401 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v87 = v401 != -1;
  if (v87) {
    var v402 = stringToReturn$$4 + '"';
    var v86 = v402 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v86 + '"';
  }
  var v403 = stringToReturn$$4 + ' starting "';
  var v404 = sequenceOne$$1.substring(0, 10);
  var v88 = v403 + v404;
  stringToReturn$$4 = v88 + '"\n';
  var v405 = stringToReturn$$4 + "and ";
  var v406 = sequenceTwo$$1.length;
  var v89 = v405 + v406;
  stringToReturn$$4 = v89 + " residue sequence ";
  var v407 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v91 = v407 != -1;
  if (v91) {
    var v408 = stringToReturn$$4 + '"';
    var v90 = v408 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v90 + '"';
  }
  var v409 = stringToReturn$$4 + ' starting "';
  var v410 = sequenceTwo$$1.substring(0, 10);
  var v92 = v409 + v410;
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
    var v411 = Math.random();
    var v412 = components.length;
    var v94 = v411 * v412;
    tempNum = Math.floor(v94);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4++;
    v95 = j$$4 < lengthOut;
  }
  return sequenceArray.join("");
}
function getSequenceFromFasta(sequenceRecord) {
  var v413 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v96 = v413 != -1;
  if (v96) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "");
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v414 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v98 = v414 != -1;
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
  var v782 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v775 = v782 != -1;
  var v784 = !v775;
  if (v784) {
    var v783 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    v775 = v783 != -1;
  }
  var v766 = v775;
  var v777 = !v766;
  if (v777) {
    var v776 = expressionToCheck.search(/\[\]/);
    v766 = v776 != -1;
  }
  var v756 = v766;
  var v768 = !v756;
  if (v768) {
    var v767 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
    v756 = v767 != -1;
  }
  var v743 = v756;
  var v758 = !v743;
  if (v758) {
    var v757 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
    v743 = v757 != -1;
  }
  var v728 = v743;
  var v745 = !v728;
  if (v745) {
    var v744 = expressionToCheck.search(/\|\|/);
    v728 = v744 != -1;
  }
  var v713 = v728;
  var v730 = !v713;
  if (v730) {
    var v729 = expressionToCheck.search(/\/\|/);
    v713 = v729 != -1;
  }
  var v680 = v713;
  var v715 = !v680;
  if (v715) {
    var v714 = expressionToCheck.search(/\|\//);
    v680 = v714 != -1;
  }
  var v628 = v680;
  var v682 = !v628;
  if (v682) {
    var v681 = expressionToCheck.search(/\[.\]/);
    v628 = v681 != -1;
  }
  var v551 = v628;
  var v630 = !v551;
  if (v630) {
    var v629 = expressionToCheck.search(/\</);
    v551 = v629 != -1;
  }
  var v415 = v551;
  var v553 = !v415;
  if (v553) {
    var v552 = expressionToCheck.search(/\>/);
    v415 = v552 != -1;
  }
  var v99 = v415;
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
  var v631 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v554 = v631 + "<head>\n";
  var v416 = v554 + "<title>Sequence Manipulation Suite</title>\n";
  var v105 = v416 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v104.write(v105);
  if (isColor) {
    var v106 = outputWindow.document;
    var v797 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v793 = v797 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v789 = v793 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v785 = v789 + "div.info {font-weight: bold}\n";
    var v778 = v785 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v769 = v778 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v759 = v769 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v746 = v759 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v731 = v746 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v716 = v731 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v683 = v716 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v632 = v683 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v555 = v632 + "td.many {color: #000000}\n";
    var v417 = v555 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v107 = v417 + "</style>\n";
    v106.write(v107);
  } else {
    var v108 = outputWindow.document;
    var v801 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v798 = v801 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v794 = v798 + "div.title {display: none}\n";
    var v790 = v794 + "div.info {font-weight: bold}\n";
    var v786 = v790 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v779 = v786 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v770 = v779 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v760 = v770 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v747 = v760 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v732 = v747 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v717 = v732 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v684 = v717 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v633 = v684 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v556 = v633 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v418 = v556 + "img {display: none}\n";
    var v109 = v418 + "</style>\n";
    v108.write(v109);
  }
  var v110 = outputWindow.document;
  var v634 = "</head>\n" + '<body class="main">\n';
  var v557 = v634 + '<div class="title">';
  var v419 = v557 + title$$6;
  var v111 = v419 + " results</div>\n";
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
  var v635 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v558 = v635 + "<head>\n";
  var v420 = v558 + "<title>Sequence Manipulation Suite</title>\n";
  var v113 = v420 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v112.write(v113);
  if (isBackground) {
    var v114 = outputWindow.document;
    var v799 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v795 = v799 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v791 = v795 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v787 = v791 + "div.info {font-weight: bold}\n";
    var v780 = v787 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v771 = v780 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v761 = v771 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v748 = v761 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v733 = v748 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v718 = v733 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v685 = v718 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v636 = v685 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v559 = v636 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v421 = v559 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v115 = v421 + "</style>\n";
    v114.write(v115);
  } else {
    var v116 = outputWindow.document;
    var v803 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v802 = v803 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v800 = v802 + "div.title {display: none}\n";
    var v796 = v800 + "div.info {font-weight: bold}\n";
    var v792 = v796 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v788 = v792 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v781 = v788 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v772 = v781 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v762 = v772 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v749 = v762 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v734 = v749 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v719 = v734 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v686 = v719 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v637 = v686 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v560 = v637 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v422 = v560 + "img {display: none}\n";
    var v117 = v422 + "</style>\n";
    v116.write(v117);
  }
  var v118 = outputWindow.document;
  var v638 = "</head>\n" + '<body class="main">\n';
  var v561 = v638 + '<div class="title">';
  var v423 = v561 + title$$8;
  var v119 = v423 + " results</div>\n";
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
  var v424 = dnaSequence$$1.search(/./);
  var v120 = v424 != -1;
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
  var v425 = testArray[0];
  var v124 = v425 != testString;
  if (v124) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v426 = testString.search(re$$2);
  var v125 = v426 == -1;
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
  var v427 = testNum.toFixed(3);
  var v128 = v427 != 2489.824;
  if (v128) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v428 = testNum.toPrecision(5);
  var v129 = v428 != 2489.8;
  if (v129) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v429 = theNumber$$1.search(/\d/);
  var v130 = v429 == -1;
  if (v130) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v687 = emblFile.search(/ID/);
  var v639 = v687 == -1;
  var v689 = !v639;
  if (v689) {
    var v688 = emblFile.search(/AC/);
    v639 = v688 == -1;
  }
  var v562 = v639;
  var v641 = !v562;
  if (v641) {
    var v640 = emblFile.search(/DE/);
    v562 = v640 == -1;
  }
  var v430 = v562;
  var v564 = !v430;
  if (v564) {
    var v563 = emblFile.search(/SQ/);
    v430 = v563 == -1;
  }
  var v131 = v430;
  if (v131) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v431 = theNumber$$2.search(/\d/);
  var v132 = v431 == -1;
  if (v132) {
    alert("Please enter a number.");
    return false;
  }
  var v134 = theNumber$$2 > maxInput$$2;
  if (v134) {
    var v432 = "Please enter a number less than or equal to " + maxInput$$2;
    var v133 = v432 + ".";
    alert(v133);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v433 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v135 = v433 != -1;
  if (v135) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v434 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v136 = v434 != -1;
  if (v136) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v690 = genBankFile.search(/LOCUS/);
  var v642 = v690 == -1;
  var v692 = !v642;
  if (v692) {
    var v691 = genBankFile.search(/DEFINITION/);
    v642 = v691 == -1;
  }
  var v565 = v642;
  var v644 = !v565;
  if (v644) {
    var v643 = genBankFile.search(/ACCESSION/);
    v565 = v643 == -1;
  }
  var v435 = v565;
  var v567 = !v435;
  if (v567) {
    var v566 = genBankFile.search(/ORIGIN/);
    v435 = v566 == -1;
  }
  var v137 = v435;
  if (v137) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v693 = genBankFile$$1.search(/LOCUS/);
  var v645 = v693 == -1;
  var v695 = !v645;
  if (v695) {
    var v694 = genBankFile$$1.search(/DEFINITION/);
    v645 = v694 == -1;
  }
  var v568 = v645;
  var v647 = !v568;
  if (v647) {
    var v646 = genBankFile$$1.search(/ACCESSION/);
    v568 = v646 == -1;
  }
  var v436 = v568;
  var v570 = !v436;
  if (v570) {
    var v569 = genBankFile$$1.search(/ORIGIN/);
    v436 = v569 == -1;
  }
  var v138 = v436;
  if (v138) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v437 = genBankFile$$1.search(/FEATURES {13}/);
  var v139 = v437 == -1;
  if (v139) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v696 = emblFile$$1.search(/ID/);
  var v648 = v696 == -1;
  var v698 = !v648;
  if (v698) {
    var v697 = emblFile$$1.search(/AC/);
    v648 = v697 == -1;
  }
  var v571 = v648;
  var v650 = !v571;
  if (v650) {
    var v649 = emblFile$$1.search(/DE/);
    v571 = v649 == -1;
  }
  var v438 = v571;
  var v573 = !v438;
  if (v573) {
    var v572 = emblFile$$1.search(/SQ/);
    v438 = v572 == -1;
  }
  var v140 = v438;
  if (v140) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v439 = emblFile$$1.search(/^FT/m);
  var v141 = v439 == -1;
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
    var v440 = basePerLine / groupSize;
    var v145 = j$$6 <= v440;
    for (;v145;) {
      var v144 = k < groupSize;
      for (;v144;) {
        var v441 = k + i$$5;
        var v143 = text$$10.charAt(v441);
        lineOfText = lineOfText + v143;
        k = k + 1;
        v144 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v442 = basePerLine / groupSize;
      v145 = j$$6 <= v442;
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
    var v443 = adjustment < 0;
    if (v443) {
      v443 = adjusted >= 0;
    }
    var v149 = v443;
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
    var v444 = basePerLine$$2 / groupSize$$2;
    var v158 = j$$7 <= v444;
    for (;v158;) {
      var v153 = k$$1 < groupSize$$2;
      for (;v153;) {
        var v445 = i$$6 + k$$1;
        var v150 = v445 >= stopBase$$2;
        if (v150) {
          break;
        }
        var v151 = lineOfText$$1;
        var v446 = k$$1 + i$$6;
        var v152 = text$$12.charAt(v446);
        lineOfText$$1 = v151 + v152;
        k$$1 = k$$1 + 1;
        v153 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v156 = numberPosition$$1 == "above";
      if (v156) {
        var v154 = aboveNum;
        var v447 = adjustNumbering(i$$6, numberingAdjustment);
        var v155 = rightNum(v447, "", groupSize$$2, tabIn$$3);
        aboveNum = v154 + v155;
      }
      var v157 = i$$6 >= stopBase$$2;
      if (v157) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v448 = basePerLine$$2 / groupSize$$2;
      v158 = j$$7 <= v448;
    }
    var v181 = numberPosition$$1 == "left";
    if (v181) {
      var v159 = outputWindow.document;
      var v651 = adjustNumbering(lineNum, numberingAdjustment);
      var v574 = rightNum(v651, "", 8, tabIn$$3);
      var v449 = v574 + lineOfText$$1;
      var v160 = v449 + "\n";
      v159.write(v160);
      var v164 = strands$$1 == "two";
      if (v164) {
        var v161 = outputWindow.document;
        var v652 = adjustNumbering(lineNum, numberingAdjustment);
        var v575 = rightNum(v652, "", 8, tabIn$$3);
        var v576 = complement(lineOfText$$1);
        var v450 = v575 + v576;
        var v162 = v450 + "\n";
        v161.write(v162);
        var v163 = outputWindow.document;
        v163.write("\n");
      }
    } else {
      var v180 = numberPosition$$1 == "right";
      if (v180) {
        var v165 = outputWindow.document;
        var v577 = lineOfText$$1;
        var v578 = adjustNumbering(i$$6, numberingAdjustment);
        var v451 = v577 + v578;
        var v166 = v451 + "\n";
        v165.write(v166);
        var v170 = strands$$1 == "two";
        if (v170) {
          var v167 = outputWindow.document;
          var v579 = complement(lineOfText$$1);
          var v580 = adjustNumbering(i$$6, numberingAdjustment);
          var v452 = v579 + v580;
          var v168 = v452 + "\n";
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
            var v453 = complement(lineOfText$$1);
            var v176 = v453 + "\n";
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
    var v454 = basePerLine$$3 / groupSize$$3;
    var v189 = j$$8 <= v454;
    for (;v189;) {
      var v185 = k$$2 < groupSize$$3;
      for (;v185;) {
        var v455 = i$$7 + k$$2;
        var v183 = v455 >= stopBase$$3;
        if (v183) {
          break;
        }
        var v456 = k$$2 + i$$7;
        var v184 = text$$13.charAt(v456);
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
      var v457 = basePerLine$$3 / groupSize$$3;
      v189 = j$$8 <= v457;
    }
    var v200 = numberPosition$$2 == "left";
    if (v200) {
      var v190 = outputWindow.document;
      var v581 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v458 = v581 + lineOfText$$2;
      var v191 = v458 + "\n";
      v190.write(v191);
    } else {
      var v199 = numberPosition$$2 == "right";
      if (v199) {
        var v192 = outputWindow.document;
        var v459 = lineOfText$$2 + i$$7;
        var v193 = v459 + "\n";
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
  var v653 = sequence$$13.length;
  var v582 = v653 <= firstIndexToMutate;
  var v654 = !v582;
  if (v654) {
    v582 = lastIndexToMutate < 0;
  }
  var v460 = v582;
  var v583 = !v460;
  if (v583) {
    v460 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v202 = v460;
  if (v202) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v210 = i$$8 < numMut;
  for (;v210;) {
    maxNum = sequence$$13.length;
    var v461 = Math.random();
    var v203 = v461 * maxNum;
    randNum = Math.floor(v203);
    var v462 = randNum < firstIndexToMutate;
    var v584 = !v462;
    if (v584) {
      v462 = randNum > lastIndexToMutate;
    }
    var v204 = v462;
    if (v204) {
      numMut++;
      i$$8++;
      v210 = i$$8 < numMut;
      continue;
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for (;needNewChar;) {
      var v463 = Math.random();
      var v464 = components$$1.length;
      var v205 = v463 * v464;
      componentsIndex = Math.round(v205);
      var v465 = components$$1.length;
      var v206 = componentsIndex == v465;
      if (v206) {
        componentsIndex = 0;
      }
      var v466 = components$$1[componentsIndex];
      var v207 = v466 != currentChar;
      if (v207) {
        needNewChar = false;
      }
    }
    var v467 = sequence$$13.substring(0, randNum);
    var v468 = components$$1[componentsIndex];
    var v208 = v467 + v468;
    var v469 = randNum + 1;
    var v470 = sequence$$13.length;
    var v209 = sequence$$13.substring(v469, v470);
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
    var v471 = Math.random();
    var v472 = components$$2.length;
    var v213 = v471 * v472;
    tempNum$$1 = Math.floor(v213);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v473 = sequence$$14.length;
    var v216 = v473 == 60;
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
    var v655 = sequence$$15.length;
    var v585 = v655 - lookAhead;
    var v586 = sequence$$15.length;
    var v474 = sequence$$15.substring(v585, v586);
    var v221 = v474 + sequence$$15;
    var v222 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v221 + v222;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v224 = outputWindow.document;
  v224.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  var v225 = outputWindow.document;
  var v656 = '<tr><td class="title" width="200px">' + "Site:";
  var v587 = v656 + '</td><td class="title">';
  var v475 = v587 + "Positions:";
  var v226 = v475 + "</td></tr>\n";
  v225.write(v226);
  var i$$9 = 0;
  var v476 = arrayOfItems.length;
  var v242 = i$$9 < v476;
  for (;v242;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v477 = arrayOfItems[i$$9];
    var v227 = v477.match(/\/.+\//);
    matchExp = v227 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    var v657 = arrayOfItems[i$$9];
    var v588 = v657.match(/\)\D*\d+/);
    var v478 = v588.toString();
    var v228 = v478.replace(/\)\D*/, "");
    cutDistance = parseFloat(v228);
    var v234 = matchArray$$1 = matchExp.exec(sequence$$15);
    for (;v234;) {
      var v229 = matchExp.lastIndex;
      matchPosition = v229 - cutDistance;
      var v479 = matchPosition >= lowerLimit;
      if (v479) {
        v479 = matchPosition < upperLimit;
      }
      var v232 = v479;
      if (v232) {
        timesFound++;
        var v230 = tempString$$1 + ", ";
        var v480 = matchPosition - shiftValue;
        var v231 = v480 + 1;
        tempString$$1 = v230 + v231;
      }
      var v481 = matchExp.lastIndex;
      var v589 = RegExp.lastMatch;
      var v482 = v589.length;
      var v233 = v481 - v482;
      matchExp.lastIndex = v233 + 1;
      v234 = matchArray$$1 = matchExp.exec(sequence$$15);
    }
    var v483 = tempString$$1.search(/\d/);
    var v235 = v483 != -1;
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
    var v750 = '<tr><td class="' + backGroundClass;
    var v735 = v750 + '">';
    var v773 = arrayOfItems[i$$9];
    var v763 = v773.match(/\([^\(]+\)/);
    var v751 = v763.toString();
    var v736 = v751.replace(/\(|\)/g, "");
    var v720 = v735 + v736;
    var v699 = v720 + '</td><td class="';
    var v658 = v699 + backGroundClass;
    var v590 = v658 + '">';
    var v484 = v590 + tempString$$1;
    var v241 = v484 + "</td></tr>\n";
    v240.write(v241);
    timesFound = 0;
    i$$9++;
    var v485 = arrayOfItems.length;
    v242 = i$$9 < v485;
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
  var v721 = '<tr><td class="title">' + "Pattern:";
  var v700 = v721 + '</td><td class="title">';
  var v659 = v700 + "Times found:";
  var v591 = v659 + '</td><td class="title">';
  var v486 = v591 + "Percentage:";
  var v246 = v486 + "</td></tr>\n";
  v245.write(v246);
  var i$$10 = 0;
  var v487 = arrayOfItems$$1.length;
  var v255 = i$$10 < v487;
  for (;v255;) {
    var tempNumber = 0;
    var v488 = arrayOfItems$$1[i$$10];
    var v247 = v488.match(/\/[^\/]+\//);
    var matchExp$$1 = v247 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    var v489 = sequence$$16.search(matchExp$$1);
    var v249 = v489 != -1;
    if (v249) {
      var v248 = sequence$$16.match(matchExp$$1);
      tempNumber = v248.length;
    }
    var percentage = 0;
    var v592 = originalLength + 1;
    var v701 = arrayOfItems$$1[i$$10];
    var v660 = v701.match(/\d+/);
    var v593 = parseFloat(v660);
    var v490 = v592 - v593;
    var v252 = v490 > 0;
    if (v252) {
      var v250 = 100 * tempNumber;
      var v491 = originalLength + 1;
      var v661 = arrayOfItems$$1[i$$10];
      var v594 = v661.match(/\d+/);
      var v492 = parseFloat(v594);
      var v251 = v491 - v492;
      percentage = v250 / v251;
    }
    var v253 = outputWindow.document;
    var v774 = arrayOfItems$$1[i$$10];
    var v764 = v774.match(/\([^\(]+\)\b/);
    var v752 = v764.toString();
    var v737 = v752.replace(/\(|\)/g, "");
    var v722 = "<tr><td>" + v737;
    var v702 = v722 + "</td><td>";
    var v662 = v702 + tempNumber;
    var v595 = v662 + "</td><td>";
    var v596 = percentage.toFixed(2);
    var v493 = v595 + v596;
    var v254 = v493 + "</td></tr>\n";
    v253.write(v254);
    i$$10++;
    var v494 = arrayOfItems$$1.length;
    v255 = i$$10 < v494;
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
  var v495 = sequence$$17.length;
  var v263 = v495 > 0;
  for (;v263;) {
    maxNum$$1 = sequence$$17.length;
    var v496 = Math.random();
    var v257 = v496 * maxNum$$1;
    randNum$$1 = Math.floor(v257);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v258 = randNum$$1 + 1;
    var v259 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v258, v259);
    sequence$$17 = tempString1 + tempString2;
    var v497 = tempSeq.length;
    var v262 = v497 == 60;
    if (v262) {
      var v260 = outputWindow.document;
      var v261 = tempSeq + "\n";
      v260.write(v261);
      tempSeq = "";
    }
    var v498 = sequence$$17.length;
    v263 = v498 > 0;
  }
  var v264 = outputWindow.document;
  var v265 = tempSeq + "\n";
  v264.write(v265);
  return true;
}
function emblFeat(theDocument) {
  var maxInput$$3 = 2E5;
  var v499 = testScript();
  var v266 = v499 == false;
  if (v266) {
    return false;
  }
  var v753 = theDocument.forms;
  var v738 = v753[0];
  var v723 = v738.elements;
  var v703 = v723[0];
  var v663 = checkFormElement(v703);
  var v597 = v663 == false;
  var v665 = !v597;
  if (v665) {
    var v765 = theDocument.forms;
    var v754 = v765[0];
    var v739 = v754.elements;
    var v724 = v739[0];
    var v704 = v724.value;
    var v664 = verifyEmblFeat(v704);
    v597 = v664 == false;
  }
  var v500 = v597;
  var v599 = !v500;
  if (v599) {
    var v755 = theDocument.forms;
    var v740 = v755[0];
    var v725 = v740.elements;
    var v705 = v725[0];
    var v666 = v705.value;
    var v598 = checkTextLength(v666, maxInput$$3);
    v500 = v598 == false;
  }
  var v267 = v500;
  if (v267) {
    return false;
  }
  openWindow("EMBL Feature Extractor");
  openPre();
  var v706 = theDocument.forms;
  var v667 = v706[0];
  var v600 = v667.elements;
  var v501 = v600[0];
  var v268 = v501.value;
  var v741 = theDocument.forms;
  var v726 = v741[0];
  var v707 = v726.elements;
  var v668 = v707[4];
  var v601 = v668.options;
  var v742 = theDocument.forms;
  var v727 = v742[0];
  var v708 = v727.elements;
  var v669 = v708[4];
  var v602 = v669.selectedIndex;
  var v502 = v601[v602];
  var v269 = v502.value;
  emblFeatExtract(v268, v269);
  closePre();
  closeWindow();
  return true;
}
function emblFeatExtract(emblFile$$2, outputType) {
  var title$$9;
  var v270 = "_" + emblFile$$2;
  emblFile$$2 = v270 + "_";
  var recordArray = emblFile$$2.split(/ID\s\s\s[^\f\n\r]*/);
  var i$$11 = 1;
  var v503 = recordArray.length;
  var v281 = i$$11 < v503;
  for (;v281;) {
    var v271 = recordArray[i$$11];
    var mainArray = v271.split(/[\f\n\r]\s*FH   Key             Location\/Qualifiers[\f\n\r]+\s*FH|[\f\n\r]\s*XX[\s]*[\f\n\r]\s*SQ[^\f\n\r]*/);
    var v603 = mainArray[0];
    var v504 = v603.search(/[\f\n\r]\s*DE[^\f\n\r]+/);
    var v273 = v504 != -1;
    if (v273) {
      var v604 = mainArray[0];
      var v505 = v604.match(/[\f\n\r]\s*DE[^\f\n\r]+/);
      var v272 = v505.toString();
      title$$9 = v272.replace(/[\f\n\r]\s*DE\s*/, "");
    } else {
      title$$9 = "Untitled";
    }
    var v506 = title$$9.replace(/[\f\n\r\t]+$/g, "");
    var v274 = filterFastaTitle(v506);
    title$$9 = v274 + "\n";
    var v275 = mainArray[2];
    var dnaSequenceArray = v275.split(/\/{2}/);
    var v276 = outputWindow.document;
    var v277 = title$$9 + "\n";
    v276.write(v277);
    var v507 = dnaSequenceArray.length;
    var v278 = v507 == 1;
    if (v278) {
      alert("The entire EMBL file may not have been processed.");
      outputWindow.focus();
    }
    var v279 = dnaSequenceArray[0];
    var dnaSequence$$3 = removeNonDna(v279);
    var v280 = mainArray[1];
    var featureArray = v280.split(/[\f\n\r]FT {3,12}\b/);
    prepareFeatures(featureArray, dnaSequence$$3, outputType);
    i$$11++;
    var v508 = recordArray.length;
    v281 = i$$11 < v508;
  }
  return true;
}
function prepareFeatures(arrayOfFeatures, dnaSequence$$4, outputType$$1) {
  var featureTitle = "";
  var theTitle = "";
  var removedTitle = "";
  var firstQualifier = "";
  var position = "";
  var positionNoSpace = "";
  var featureFound = false;
  var i$$12 = 1;
  var v509 = arrayOfFeatures.length;
  var v291 = i$$12 < v509;
  for (;v291;) {
    var v282 = arrayOfFeatures[i$$12];
    var v810 = v282.replace(/[\[\]\*]/g, "");
    arrayOfFeatures[i$$12] = v810;
    var v510 = arrayOfFeatures[i$$12];
    var v283 = v510.match(/[^ \f\n\r\t\v]+ /);
    featureTitle = v283.toString();
    theTitle = new RegExp(featureTitle);
    var v284 = arrayOfFeatures[i$$12];
    removedTitle = v284.replace(theTitle, "");
    var v605 = arrayOfFeatures[i$$12];
    var v511 = v605.search(/\/[^\f\n\r]+/);
    var v286 = v511 != -1;
    if (v286) {
      var v512 = arrayOfFeatures[i$$12];
      var v285 = v512.match(/\/[^\f\n\r]+/);
      firstQualifier = v285.toString();
    } else {
      firstQualifier = "/no qualifier supplied";
    }
    position = removedTitle.split(/\//);
    var v287 = position[0];
    positionNoSpace = v287.replace(/\s{2,}/g, " ");
    var v288 = outputWindow.document;
    var v670 = filterFastaTitle(featureTitle);
    var v606 = "&gt;" + v670;
    var v607 = filterFastaTitle(firstQualifier);
    var v513 = v606 + v607;
    var v289 = v513 + "\n";
    v288.write(v289);
    printFeature(positionNoSpace, dnaSequence$$4, outputType$$1);
    featureFound = true;
    var v290 = outputWindow.document;
    v290.write("\n\n");
    i$$12++;
    var v514 = arrayOfFeatures.length;
    v291 = i$$12 < v514;
  }
  var v293 = featureFound == false;
  if (v293) {
    var v292 = outputWindow.document;
    v292.write("There were no features found or there was a problem reading the feature information.");
  }
  return true;
}
function printFeature(featurePos, dnaSequence$$5, outputType$$2) {
  var feature$$4;
  featurePos = featurePos.replace(/<|>/g, "");
  featurePos = featurePos.replace(/FT/gi, "");
  var v671 = featurePos.search(/[^a-z\d\.\(\)\,\s]/);
  var v608 = v671 != -1;
  var v673 = !v608;
  if (v673) {
    var v672 = featurePos.search(/one/);
    v608 = v672 != -1;
  }
  var v515 = v608;
  var v610 = !v515;
  if (v610) {
    var v609 = featurePos.search(/order/);
    v515 = v609 != -1;
  }
  var v312 = v515;
  if (v312) {
    var v294 = outputWindow.document;
    v294.write("This feature specifies a sequence that cannot be represented:\n");
    var v295 = outputWindow.document;
    v295.write(featurePos);
  } else {
    var newFeaturePos = featurePos.replace(/\)/g, "");
    var v516 = newFeaturePos.search(/complement/);
    var v296 = v516 != -1;
    if (v296) {
      feature$$4 = new Feature("complement");
    } else {
      feature$$4 = new Feature("direct");
    }
    var pairString = newFeaturePos;
    var pairArray = pairString.split(/\,/);
    var v517 = newFeaturePos.search(/complement/);
    var v297 = v517 != -1;
    if (v297) {
      pairArray.reverse();
    }
    var digitArray = new Array;
    var realStart = 0;
    var realStop = 0;
    var dnaToAdd = "";
    var j$$10 = 0;
    var v518 = pairArray.length;
    var v311 = j$$10 < v518;
    for (;v311;) {
      var v298 = pairArray[j$$10];
      digitArray = v298.split(/\.\./);
      var v519 = digitArray.length;
      var v299 = v519 == 1;
      if (v299) {
        digitArray[1] = digitArray[0];
      }
      realStart = digitArray[0];
      realStop = digitArray[1];
      realStop = realStop.replace(/\D/g, "");
      realStart = realStart.replace(/\D/g, "");
      var v611 = realStart.search(/\d/);
      var v520 = v611 == -1;
      var v613 = !v520;
      if (v613) {
        var v612 = realStop.search(/\d/);
        v520 = v612 == -1;
      }
      var v301 = v520;
      if (v301) {
        var v300 = outputWindow.document;
        v300.write("There was a problem with this feature (one of the range values was missing).");
        return true;
      }
      var v302 = parseInt(realStart);
      realStart = v302 - 1;
      realStop = parseInt(realStop);
      var v304 = realStart > realStop;
      if (v304) {
        var v303 = outputWindow.document;
        v303.write("There was a problem with this feature (the end position was before the start position).");
        return true;
      }
      var v614 = dnaSequence$$5.length;
      var v521 = realStart > v614;
      var v616 = !v521;
      if (v616) {
        var v615 = dnaSequence$$5.length;
        v521 = realStop > v615;
      }
      var v310 = v521;
      if (v310) {
        var v305 = outputWindow.document;
        v305.write("The entire EMBL file was not processed, so this feature cannot be properly shown.");
        return true;
      } else {
        var v309 = outputType$$2 == "separated";
        if (v309) {
          var v306 = dnaSequence$$5.substring(realStart, realStop);
          feature$$4.addFragment(v306);
        } else {
          var v522 = feature$$4.lastAdded;
          var v307 = dnaSequence$$5.substring(v522, realStart);
          feature$$4.addFragment(v307);
          var v523 = dnaSequence$$5.substring(realStart, realStop);
          var v308 = v523.toUpperCase();
          feature$$4.addFragment(v308);
          feature$$4.lastAdded = realStop;
        }
      }
      j$$10++;
      var v524 = pairArray.length;
      v311 = j$$10 < v524;
    }
    feature$$4.writeFeature();
  }
  return true;
}
function writeFeature() {
  var v525 = this.strand;
  var v317 = v525 == "complement";
  if (v317) {
    var v313 = outputWindow.document;
    var v709 = this.fragments;
    var v674 = v709.join("");
    var v617 = complement(v674);
    var v526 = reverse(v617);
    var v314 = addReturns(v526);
    v313.write(v314);
  } else {
    var v315 = outputWindow.document;
    var v618 = this.fragments;
    var v527 = v618.join("");
    var v316 = addReturns(v527);
    v315.write(v316);
  }
  return;
}
function addFragment(sequence$$18) {
  var v318 = this.fragments;
  v318.push(sequence$$18);
  return;
}
function Feature(strand) {
  this.strand = strand;
  var v811 = new Array;
  this.fragments = v811;
  this.lastAdded = 0;
  return;
}
new Feature;
var v319 = Feature.prototype;
v319.writeFeature = writeFeature;
var v320 = Feature.prototype;
v320.addFragment = addFragment;
document.onload = v2;
var v321 = document.getElementById("submitbtn");
v321.onclick = v3;
var v322 = document.getElementById("clearbtn");
v322.onclick = v4

}
