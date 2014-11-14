introspect(JAM.policy.pFull) {
function v4() {
  var v586 = document.forms;
  var v509 = v586[0];
  var v310 = v509.elements;
  var v5 = v310[0];
  v5.value = " ";
  var v587 = document.forms;
  var v510 = v587[0];
  var v311 = v510.elements;
  var v6 = v311[4];
  v6.value = " ";
  return;
}
function v3() {
  try {
    cpgIslands(document);
  } catch (e$$5) {
    var v7 = "The following error was encountered: " + e$$5;
    alert(v7);
  }
  return;
}
function v2() {
  var v312 = document.main_form;
  var v8 = v312.main_submit;
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
  var v313 = arrayOfSequences.length;
  var v10 = v313 < 2;
  if (v10) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v314 = arrayOfTitles.length;
  var v12 = i$$1 < v314;
  for (;v12;) {
    var v636 = arrayOfTitles[i$$1];
    var v588 = v636.search(/\S/);
    var v511 = v588 == -1;
    var v590 = !v511;
    if (v590) {
      var v637 = arrayOfSequences[i$$1];
      var v589 = v637.search(/\S/);
      v511 = v589 == -1;
    }
    var v315 = v511;
    var v513 = !v315;
    if (v513) {
      var v591 = arrayOfSequences[i$$1];
      var v512 = v591.length;
      v315 = v512 != lengthOfAlign;
    }
    var v11 = v315;
    if (v11) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v316 = arrayOfTitles.length;
    v12 = i$$1 < v316;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v669 = codonTable.search(/AmAcid/);
  var v638 = v669 == -1;
  var v671 = !v638;
  if (v671) {
    var v670 = codonTable.search(/Codon/);
    v638 = v670 == -1;
  }
  var v592 = v638;
  var v640 = !v592;
  if (v640) {
    var v639 = codonTable.search(/Number/);
    v592 = v639 == -1;
  }
  var v514 = v592;
  var v594 = !v514;
  if (v594) {
    var v593 = codonTable.search(/\/1000/);
    v514 = v593 == -1;
  }
  var v317 = v514;
  var v516 = !v317;
  if (v516) {
    var v515 = codonTable.search(/Fraction\s*\.\./);
    v317 = v515 == -1;
  }
  var v13 = v317;
  if (v13) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v517 = formElement.value;
  var v318 = v517.search(/\S/);
  var v14 = v318 == -1;
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
  var v319 = arrayOfPatterns.length;
  var v17 = z$$2 < v319;
  for (;v17;) {
    var v518 = arrayOfPatterns[z$$2];
    var v320 = v518.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v15 = v320 == -1;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v519 = arrayOfPatterns[z$$2];
    var v321 = moreExpressionCheck(v519);
    var v16 = v321 == false;
    if (v16) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v322 = arrayOfPatterns.length;
    v17 = z$$2 < v322;
  }
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v18);
  var v19 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v19);
  var j = 0;
  var v323 = arrayOfPatterns.length;
  var v23 = j < v323;
  for (;v23;) {
    var v520 = arrayOfPatterns[j];
    var v324 = v520.match(/\/.+\//);
    var v20 = v324 + "gi";
    var v758 = eval(v20);
    geneticCodeMatchExp[j] = v758;
    var v325 = arrayOfPatterns[j];
    var v21 = v325.match(/=[a-zA-Z\*]/);
    var v759 = v21.toString();
    geneticCodeMatchResult[j] = v759;
    var v22 = geneticCodeMatchResult[j];
    var v760 = v22.replace(/=/g, "");
    geneticCodeMatchResult[j] = v760;
    j++;
    var v326 = arrayOfPatterns.length;
    v23 = j < v326;
  }
  var i$$2 = 0;
  var v521 = testSequence.length;
  var v327 = v521 - 3;
  var v30 = i$$2 <= v327;
  for (;v30;) {
    var v24 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v24);
    j = 0;
    var v328 = geneticCodeMatchExp.length;
    var v28 = j < v328;
    for (;v28;) {
      var v522 = geneticCodeMatchExp[j];
      var v329 = codon.search(v522);
      var v27 = v329 != -1;
      if (v27) {
        var v26 = oneMatch == true;
        if (v26) {
          var v330 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v25 = v330 + ".";
          alert(v25);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v331 = geneticCodeMatchExp.length;
      v28 = j < v331;
    }
    var v29 = oneMatch == false;
    if (v29) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v523 = testSequence.length;
    var v332 = v523 - 3;
    v30 = i$$2 <= v332;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v333 = arrayOfPatterns$$1.length;
  var v32 = z$$3 < v333;
  for (;v32;) {
    var v524 = arrayOfPatterns$$1[z$$3];
    var v334 = v524.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v31 = v334 != -1;
    if (v31) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v335 = arrayOfPatterns$$1.length;
    v32 = z$$3 < v335;
  }
  var i$$3 = 0;
  var v336 = arrayOfPatterns$$1.length;
  var v36 = i$$3 < v336;
  for (;v36;) {
    var v525 = arrayOfPatterns$$1[i$$3];
    var v337 = "[" + v525;
    var v33 = v337 + "]";
    var re = new RegExp(v33, "gi");
    var j$$1 = i$$3 + 1;
    var v338 = arrayOfPatterns$$1.length;
    var v35 = j$$1 < v338;
    for (;v35;) {
      var v526 = arrayOfPatterns$$1[j$$1];
      var v339 = v526.search(re);
      var v34 = v339 != -1;
      if (v34) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v340 = arrayOfPatterns$$1.length;
      v35 = j$$1 < v340;
    }
    i$$3++;
    var v341 = arrayOfPatterns$$1.length;
    v36 = i$$3 < v341;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v342 = arrayOfPatterns$$2.length;
  var v39 = z$$4 < v342;
  for (;v39;) {
    var v527 = arrayOfPatterns$$2[z$$4];
    var v343 = v527.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v37 = v343 == -1;
    if (v37) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v528 = arrayOfPatterns$$2[z$$4];
    var v344 = moreExpressionCheck(v528);
    var v38 = v344 == false;
    if (v38) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v345 = arrayOfPatterns$$2.length;
    v39 = z$$4 < v345;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v595 = getSequenceFromFasta(text$$7);
  var v529 = v595.replace(/[^A-Za-z]/g, "");
  var v346 = v529.length;
  var v41 = v346 > maxInput;
  if (v41) {
    var v347 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v40 = v347 + " characters.";
    alert(v40);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v348 = text$$8.length;
  var v43 = v348 > maxInput$$1;
  if (v43) {
    var v349 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v42 = v349 + " characters.";
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
  var v350 = alignArray.length;
  var v50 = v350 < 3;
  if (v50) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v351 = alignArray.length;
  var v52 = i$$4 < v351;
  for (;v52;) {
    var v530 = alignArray[i$$4];
    var v352 = v530.search(/[^\s]+\s/);
    var v51 = v352 == -1;
    if (v51) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v353 = alignArray.length;
    v52 = i$$4 < v353;
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
  var v354 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v55 = v354 != -1;
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
  var v355 = sequence$$2.length;
  var v56 = "&gt;results for " + v355;
  var stringToReturn = v56 + " residue sequence ";
  var v356 = fastaSequenceTitle.search(/[^\s]/);
  var v58 = v356 != -1;
  if (v58) {
    var v357 = stringToReturn + '"';
    var v57 = v357 + fastaSequenceTitle;
    stringToReturn = v57 + '"';
  }
  var v358 = stringToReturn + ' starting "';
  var v359 = sequence$$2.substring(0, 10);
  var v59 = v358 + v359;
  stringToReturn = v59 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v360 = sequenceOne.length;
  var v60 = "Search results for " + v360;
  var stringToReturn$$1 = v60 + " residue sequence ";
  var v361 = fastaSequenceTitleOne.search(/[^\s]/);
  var v62 = v361 != -1;
  if (v62) {
    var v362 = stringToReturn$$1 + '"';
    var v61 = v362 + fastaSequenceTitleOne;
    stringToReturn$$1 = v61 + '"';
  }
  var v363 = stringToReturn$$1 + ' starting "';
  var v364 = sequenceOne.substring(0, 10);
  var v63 = v363 + v364;
  stringToReturn$$1 = v63 + '"\n';
  var v365 = stringToReturn$$1 + "and ";
  var v366 = sequenceTwo.length;
  var v64 = v365 + v366;
  stringToReturn$$1 = v64 + " residue sequence ";
  var v367 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v66 = v367 != -1;
  if (v66) {
    var v368 = stringToReturn$$1 + '"';
    var v65 = v368 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v65 + '"';
  }
  var v369 = stringToReturn$$1 + ' starting "';
  var v370 = sequenceTwo.substring(0, 10);
  var v67 = v369 + v370;
  stringToReturn$$1 = v67 + '"';
  var v68 = '<div class="info">' + stringToReturn$$1;
  return v68 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v69 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v69);
  var j$$2 = 0;
  var v371 = arrayOfPatterns$$3.length;
  var v71 = j$$2 < v371;
  for (;v71;) {
    var v531 = arrayOfPatterns$$3[j$$2];
    var v372 = v531.match(/\/.+\//);
    var v70 = v372 + "gi";
    var v761 = eval(v70);
    geneticCodeMatchExp$$1[j$$2] = v761;
    j$$2++;
    var v373 = arrayOfPatterns$$3.length;
    v71 = j$$2 < v373;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v72 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v72);
  var j$$3 = 0;
  var v374 = arrayOfPatterns$$4.length;
  var v75 = j$$3 < v374;
  for (;v75;) {
    var v375 = arrayOfPatterns$$4[j$$3];
    var v73 = v375.match(/=[a-zA-Z\*]/);
    var v762 = v73.toString();
    geneticCodeMatchResult$$1[j$$3] = v762;
    var v74 = geneticCodeMatchResult$$1[j$$3];
    var v763 = v74.replace(/=/g, "");
    geneticCodeMatchResult$$1[j$$3] = v763;
    j$$3++;
    var v376 = arrayOfPatterns$$4.length;
    v75 = j$$3 < v376;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v377 = sequence$$3.length;
  var v76 = "Results for " + v377;
  var stringToReturn$$2 = v76 + " residue sequence ";
  var v378 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v78 = v378 != -1;
  if (v78) {
    var v379 = stringToReturn$$2 + '"';
    var v77 = v379 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v77 + '"';
  }
  var v380 = stringToReturn$$2 + ' starting "';
  var v381 = sequence$$3.substring(0, 10);
  var v79 = v380 + v381;
  stringToReturn$$2 = v79 + '"';
  var v80 = '<div class="info">' + stringToReturn$$2;
  return v80 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v532 = "Results for " + topology;
  var v382 = v532 + " ";
  var v383 = sequence$$4.length;
  var v81 = v382 + v383;
  var stringToReturn$$3 = v81 + " residue sequence ";
  var v384 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v83 = v384 != -1;
  if (v83) {
    var v385 = stringToReturn$$3 + '"';
    var v82 = v385 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v82 + '"';
  }
  var v386 = stringToReturn$$3 + ' starting "';
  var v387 = sequence$$4.substring(0, 10);
  var v84 = v386 + v387;
  stringToReturn$$3 = v84 + '"';
  var v85 = '<div class="info">' + stringToReturn$$3;
  return v85 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v388 = sequenceOne$$1.length;
  var v86 = "Alignment results for " + v388;
  var stringToReturn$$4 = v86 + " residue sequence ";
  var v389 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v88 = v389 != -1;
  if (v88) {
    var v390 = stringToReturn$$4 + '"';
    var v87 = v390 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v87 + '"';
  }
  var v391 = stringToReturn$$4 + ' starting "';
  var v392 = sequenceOne$$1.substring(0, 10);
  var v89 = v391 + v392;
  stringToReturn$$4 = v89 + '"\n';
  var v393 = stringToReturn$$4 + "and ";
  var v394 = sequenceTwo$$1.length;
  var v90 = v393 + v394;
  stringToReturn$$4 = v90 + " residue sequence ";
  var v395 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v92 = v395 != -1;
  if (v92) {
    var v396 = stringToReturn$$4 + '"';
    var v91 = v396 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v91 + '"';
  }
  var v397 = stringToReturn$$4 + ' starting "';
  var v398 = sequenceTwo$$1.substring(0, 10);
  var v93 = v397 + v398;
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
    var v399 = Math.random();
    var v400 = components.length;
    var v95 = v399 * v400;
    tempNum = Math.floor(v95);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4++;
    v96 = j$$4 < lengthOut;
  }
  return sequenceArray.join("");
}
function getSequenceFromFasta(sequenceRecord) {
  var v401 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v97 = v401 != -1;
  if (v97) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "");
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v402 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v99 = v402 != -1;
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
  var v736 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v729 = v736 != -1;
  var v738 = !v729;
  if (v738) {
    var v737 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    v729 = v737 != -1;
  }
  var v720 = v729;
  var v731 = !v720;
  if (v731) {
    var v730 = expressionToCheck.search(/\[\]/);
    v720 = v730 != -1;
  }
  var v711 = v720;
  var v722 = !v711;
  if (v722) {
    var v721 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
    v711 = v721 != -1;
  }
  var v699 = v711;
  var v713 = !v699;
  if (v713) {
    var v712 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
    v699 = v712 != -1;
  }
  var v686 = v699;
  var v701 = !v686;
  if (v701) {
    var v700 = expressionToCheck.search(/\|\|/);
    v686 = v700 != -1;
  }
  var v672 = v686;
  var v688 = !v672;
  if (v688) {
    var v687 = expressionToCheck.search(/\/\|/);
    v672 = v687 != -1;
  }
  var v641 = v672;
  var v674 = !v641;
  if (v674) {
    var v673 = expressionToCheck.search(/\|\//);
    v641 = v673 != -1;
  }
  var v596 = v641;
  var v643 = !v596;
  if (v643) {
    var v642 = expressionToCheck.search(/\[.\]/);
    v596 = v642 != -1;
  }
  var v533 = v596;
  var v598 = !v533;
  if (v598) {
    var v597 = expressionToCheck.search(/\</);
    v533 = v597 != -1;
  }
  var v403 = v533;
  var v535 = !v403;
  if (v535) {
    var v534 = expressionToCheck.search(/\>/);
    v403 = v534 != -1;
  }
  var v100 = v403;
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
  var v599 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v536 = v599 + "<head>\n";
  var v404 = v536 + "<title>Sequence Manipulation Suite</title>\n";
  var v106 = v404 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v105.write(v106);
  if (isColor) {
    var v107 = outputWindow.document;
    var v751 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v747 = v751 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v743 = v747 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v739 = v743 + "div.info {font-weight: bold}\n";
    var v732 = v739 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v723 = v732 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v714 = v723 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v702 = v714 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v689 = v702 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v675 = v689 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v644 = v675 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v600 = v644 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v537 = v600 + "td.many {color: #000000}\n";
    var v405 = v537 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v108 = v405 + "</style>\n";
    v107.write(v108);
  } else {
    var v109 = outputWindow.document;
    var v755 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v752 = v755 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v748 = v752 + "div.title {display: none}\n";
    var v744 = v748 + "div.info {font-weight: bold}\n";
    var v740 = v744 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v733 = v740 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v724 = v733 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v715 = v724 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v703 = v715 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v690 = v703 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v676 = v690 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v645 = v676 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v601 = v645 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v538 = v601 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v406 = v538 + "img {display: none}\n";
    var v110 = v406 + "</style>\n";
    v109.write(v110);
  }
  var v111 = outputWindow.document;
  var v602 = "</head>\n" + '<body class="main">\n';
  var v539 = v602 + '<div class="title">';
  var v407 = v539 + title$$6;
  var v112 = v407 + " results</div>\n";
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
  var v603 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v540 = v603 + "<head>\n";
  var v408 = v540 + "<title>Sequence Manipulation Suite</title>\n";
  var v114 = v408 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v113.write(v114);
  if (isBackground) {
    var v115 = outputWindow.document;
    var v753 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v749 = v753 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v745 = v749 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v741 = v745 + "div.info {font-weight: bold}\n";
    var v734 = v741 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v725 = v734 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v716 = v725 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v704 = v716 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v691 = v704 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v677 = v691 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v646 = v677 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v604 = v646 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v541 = v604 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v409 = v541 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v116 = v409 + "</style>\n";
    v115.write(v116);
  } else {
    var v117 = outputWindow.document;
    var v757 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v756 = v757 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v754 = v756 + "div.title {display: none}\n";
    var v750 = v754 + "div.info {font-weight: bold}\n";
    var v746 = v750 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v742 = v746 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v735 = v742 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v726 = v735 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v717 = v726 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v705 = v717 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v692 = v705 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v678 = v692 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v647 = v678 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v605 = v647 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v542 = v605 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v410 = v542 + "img {display: none}\n";
    var v118 = v410 + "</style>\n";
    v117.write(v118);
  }
  var v119 = outputWindow.document;
  var v606 = "</head>\n" + '<body class="main">\n';
  var v543 = v606 + '<div class="title">';
  var v411 = v543 + title$$8;
  var v120 = v411 + " results</div>\n";
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
  var v412 = dnaSequence$$1.search(/./);
  var v121 = v412 != -1;
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
  var v413 = testArray[0];
  var v125 = v413 != testString;
  if (v125) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v414 = testString.search(re$$2);
  var v126 = v414 == -1;
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
  var v415 = testNum.toFixed(3);
  var v129 = v415 != 2489.824;
  if (v129) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v416 = testNum.toPrecision(5);
  var v130 = v416 != 2489.8;
  if (v130) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v417 = theNumber$$1.search(/\d/);
  var v131 = v417 == -1;
  if (v131) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v648 = emblFile.search(/ID/);
  var v607 = v648 == -1;
  var v650 = !v607;
  if (v650) {
    var v649 = emblFile.search(/AC/);
    v607 = v649 == -1;
  }
  var v544 = v607;
  var v609 = !v544;
  if (v609) {
    var v608 = emblFile.search(/DE/);
    v544 = v608 == -1;
  }
  var v418 = v544;
  var v546 = !v418;
  if (v546) {
    var v545 = emblFile.search(/SQ/);
    v418 = v545 == -1;
  }
  var v132 = v418;
  if (v132) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v419 = theNumber$$2.search(/\d/);
  var v133 = v419 == -1;
  if (v133) {
    alert("Please enter a number.");
    return false;
  }
  var v135 = theNumber$$2 > maxInput$$2;
  if (v135) {
    var v420 = "Please enter a number less than or equal to " + maxInput$$2;
    var v134 = v420 + ".";
    alert(v134);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v421 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v136 = v421 != -1;
  if (v136) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v422 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v137 = v422 != -1;
  if (v137) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v651 = genBankFile.search(/LOCUS/);
  var v610 = v651 == -1;
  var v653 = !v610;
  if (v653) {
    var v652 = genBankFile.search(/DEFINITION/);
    v610 = v652 == -1;
  }
  var v547 = v610;
  var v612 = !v547;
  if (v612) {
    var v611 = genBankFile.search(/ACCESSION/);
    v547 = v611 == -1;
  }
  var v423 = v547;
  var v549 = !v423;
  if (v549) {
    var v548 = genBankFile.search(/ORIGIN/);
    v423 = v548 == -1;
  }
  var v138 = v423;
  if (v138) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v654 = genBankFile$$1.search(/LOCUS/);
  var v613 = v654 == -1;
  var v656 = !v613;
  if (v656) {
    var v655 = genBankFile$$1.search(/DEFINITION/);
    v613 = v655 == -1;
  }
  var v550 = v613;
  var v615 = !v550;
  if (v615) {
    var v614 = genBankFile$$1.search(/ACCESSION/);
    v550 = v614 == -1;
  }
  var v424 = v550;
  var v552 = !v424;
  if (v552) {
    var v551 = genBankFile$$1.search(/ORIGIN/);
    v424 = v551 == -1;
  }
  var v139 = v424;
  if (v139) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v425 = genBankFile$$1.search(/FEATURES {13}/);
  var v140 = v425 == -1;
  if (v140) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v657 = emblFile$$1.search(/ID/);
  var v616 = v657 == -1;
  var v659 = !v616;
  if (v659) {
    var v658 = emblFile$$1.search(/AC/);
    v616 = v658 == -1;
  }
  var v553 = v616;
  var v618 = !v553;
  if (v618) {
    var v617 = emblFile$$1.search(/DE/);
    v553 = v617 == -1;
  }
  var v426 = v553;
  var v555 = !v426;
  if (v555) {
    var v554 = emblFile$$1.search(/SQ/);
    v426 = v554 == -1;
  }
  var v141 = v426;
  if (v141) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v427 = emblFile$$1.search(/^FT/m);
  var v142 = v427 == -1;
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
    var v428 = basePerLine / groupSize;
    var v146 = j$$6 <= v428;
    for (;v146;) {
      var v145 = k < groupSize;
      for (;v145;) {
        var v429 = k + i$$5;
        var v144 = text$$10.charAt(v429);
        lineOfText = lineOfText + v144;
        k = k + 1;
        v145 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v430 = basePerLine / groupSize;
      v146 = j$$6 <= v430;
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
    var v431 = adjustment < 0;
    if (v431) {
      v431 = adjusted >= 0;
    }
    var v150 = v431;
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
    var v432 = basePerLine$$2 / groupSize$$2;
    var v159 = j$$7 <= v432;
    for (;v159;) {
      var v154 = k$$1 < groupSize$$2;
      for (;v154;) {
        var v433 = i$$6 + k$$1;
        var v151 = v433 >= stopBase$$2;
        if (v151) {
          break;
        }
        var v152 = lineOfText$$1;
        var v434 = k$$1 + i$$6;
        var v153 = text$$12.charAt(v434);
        lineOfText$$1 = v152 + v153;
        k$$1 = k$$1 + 1;
        v154 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v157 = numberPosition$$1 == "above";
      if (v157) {
        var v155 = aboveNum;
        var v435 = adjustNumbering(i$$6, numberingAdjustment);
        var v156 = rightNum(v435, "", groupSize$$2, tabIn$$3);
        aboveNum = v155 + v156;
      }
      var v158 = i$$6 >= stopBase$$2;
      if (v158) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v436 = basePerLine$$2 / groupSize$$2;
      v159 = j$$7 <= v436;
    }
    var v182 = numberPosition$$1 == "left";
    if (v182) {
      var v160 = outputWindow.document;
      var v619 = adjustNumbering(lineNum, numberingAdjustment);
      var v556 = rightNum(v619, "", 8, tabIn$$3);
      var v437 = v556 + lineOfText$$1;
      var v161 = v437 + "\n";
      v160.write(v161);
      var v165 = strands$$1 == "two";
      if (v165) {
        var v162 = outputWindow.document;
        var v620 = adjustNumbering(lineNum, numberingAdjustment);
        var v557 = rightNum(v620, "", 8, tabIn$$3);
        var v558 = complement(lineOfText$$1);
        var v438 = v557 + v558;
        var v163 = v438 + "\n";
        v162.write(v163);
        var v164 = outputWindow.document;
        v164.write("\n");
      }
    } else {
      var v181 = numberPosition$$1 == "right";
      if (v181) {
        var v166 = outputWindow.document;
        var v559 = lineOfText$$1;
        var v560 = adjustNumbering(i$$6, numberingAdjustment);
        var v439 = v559 + v560;
        var v167 = v439 + "\n";
        v166.write(v167);
        var v171 = strands$$1 == "two";
        if (v171) {
          var v168 = outputWindow.document;
          var v561 = complement(lineOfText$$1);
          var v562 = adjustNumbering(i$$6, numberingAdjustment);
          var v440 = v561 + v562;
          var v169 = v440 + "\n";
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
            var v441 = complement(lineOfText$$1);
            var v177 = v441 + "\n";
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
    var v442 = basePerLine$$3 / groupSize$$3;
    var v190 = j$$8 <= v442;
    for (;v190;) {
      var v186 = k$$2 < groupSize$$3;
      for (;v186;) {
        var v443 = i$$7 + k$$2;
        var v184 = v443 >= stopBase$$3;
        if (v184) {
          break;
        }
        var v444 = k$$2 + i$$7;
        var v185 = text$$13.charAt(v444);
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
      var v445 = basePerLine$$3 / groupSize$$3;
      v190 = j$$8 <= v445;
    }
    var v201 = numberPosition$$2 == "left";
    if (v201) {
      var v191 = outputWindow.document;
      var v563 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v446 = v563 + lineOfText$$2;
      var v192 = v446 + "\n";
      v191.write(v192);
    } else {
      var v200 = numberPosition$$2 == "right";
      if (v200) {
        var v193 = outputWindow.document;
        var v447 = lineOfText$$2 + i$$7;
        var v194 = v447 + "\n";
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
  var v621 = sequence$$13.length;
  var v564 = v621 <= firstIndexToMutate;
  var v622 = !v564;
  if (v622) {
    v564 = lastIndexToMutate < 0;
  }
  var v448 = v564;
  var v565 = !v448;
  if (v565) {
    v448 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v203 = v448;
  if (v203) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v211 = i$$8 < numMut;
  for (;v211;) {
    maxNum = sequence$$13.length;
    var v449 = Math.random();
    var v204 = v449 * maxNum;
    randNum = Math.floor(v204);
    var v450 = randNum < firstIndexToMutate;
    var v566 = !v450;
    if (v566) {
      v450 = randNum > lastIndexToMutate;
    }
    var v205 = v450;
    if (v205) {
      numMut++;
      i$$8++;
      v211 = i$$8 < numMut;
      continue;
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for (;needNewChar;) {
      var v451 = Math.random();
      var v452 = components$$1.length;
      var v206 = v451 * v452;
      componentsIndex = Math.round(v206);
      var v453 = components$$1.length;
      var v207 = componentsIndex == v453;
      if (v207) {
        componentsIndex = 0;
      }
      var v454 = components$$1[componentsIndex];
      var v208 = v454 != currentChar;
      if (v208) {
        needNewChar = false;
      }
    }
    var v455 = sequence$$13.substring(0, randNum);
    var v456 = components$$1[componentsIndex];
    var v209 = v455 + v456;
    var v457 = randNum + 1;
    var v458 = sequence$$13.length;
    var v210 = sequence$$13.substring(v457, v458);
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
    var v459 = Math.random();
    var v460 = components$$2.length;
    var v214 = v459 * v460;
    tempNum$$1 = Math.floor(v214);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v461 = sequence$$14.length;
    var v217 = v461 == 60;
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
    var v623 = sequence$$15.length;
    var v567 = v623 - lookAhead;
    var v568 = sequence$$15.length;
    var v462 = sequence$$15.substring(v567, v568);
    var v222 = v462 + sequence$$15;
    var v223 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v222 + v223;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v225 = outputWindow.document;
  v225.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  var v226 = outputWindow.document;
  var v624 = '<tr><td class="title" width="200px">' + "Site:";
  var v569 = v624 + '</td><td class="title">';
  var v463 = v569 + "Positions:";
  var v227 = v463 + "</td></tr>\n";
  v226.write(v227);
  var i$$9 = 0;
  var v464 = arrayOfItems.length;
  var v243 = i$$9 < v464;
  for (;v243;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v465 = arrayOfItems[i$$9];
    var v228 = v465.match(/\/.+\//);
    matchExp = v228 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    var v625 = arrayOfItems[i$$9];
    var v570 = v625.match(/\)\D*\d+/);
    var v466 = v570.toString();
    var v229 = v466.replace(/\)\D*/, "");
    cutDistance = parseFloat(v229);
    var v235 = matchArray$$1 = matchExp.exec(sequence$$15);
    for (;v235;) {
      var v230 = matchExp.lastIndex;
      matchPosition = v230 - cutDistance;
      var v467 = matchPosition >= lowerLimit;
      if (v467) {
        v467 = matchPosition < upperLimit;
      }
      var v233 = v467;
      if (v233) {
        timesFound++;
        var v231 = tempString$$1 + ", ";
        var v468 = matchPosition - shiftValue;
        var v232 = v468 + 1;
        tempString$$1 = v231 + v232;
      }
      var v469 = matchExp.lastIndex;
      var v571 = RegExp.lastMatch;
      var v470 = v571.length;
      var v234 = v469 - v470;
      matchExp.lastIndex = v234 + 1;
      v235 = matchArray$$1 = matchExp.exec(sequence$$15);
    }
    var v471 = tempString$$1.search(/\d/);
    var v236 = v471 != -1;
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
    var v706 = '<tr><td class="' + backGroundClass;
    var v693 = v706 + '">';
    var v727 = arrayOfItems[i$$9];
    var v718 = v727.match(/\([^\(]+\)/);
    var v707 = v718.toString();
    var v694 = v707.replace(/\(|\)/g, "");
    var v679 = v693 + v694;
    var v660 = v679 + '</td><td class="';
    var v626 = v660 + backGroundClass;
    var v572 = v626 + '">';
    var v472 = v572 + tempString$$1;
    var v242 = v472 + "</td></tr>\n";
    v241.write(v242);
    timesFound = 0;
    i$$9++;
    var v473 = arrayOfItems.length;
    v243 = i$$9 < v473;
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
  var v680 = '<tr><td class="title">' + "Pattern:";
  var v661 = v680 + '</td><td class="title">';
  var v627 = v661 + "Times found:";
  var v573 = v627 + '</td><td class="title">';
  var v474 = v573 + "Percentage:";
  var v247 = v474 + "</td></tr>\n";
  v246.write(v247);
  var i$$10 = 0;
  var v475 = arrayOfItems$$1.length;
  var v256 = i$$10 < v475;
  for (;v256;) {
    var tempNumber = 0;
    var v476 = arrayOfItems$$1[i$$10];
    var v248 = v476.match(/\/[^\/]+\//);
    var matchExp$$1 = v248 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    var v477 = sequence$$16.search(matchExp$$1);
    var v250 = v477 != -1;
    if (v250) {
      var v249 = sequence$$16.match(matchExp$$1);
      tempNumber = v249.length;
    }
    var percentage = 0;
    var v574 = originalLength + 1;
    var v662 = arrayOfItems$$1[i$$10];
    var v628 = v662.match(/\d+/);
    var v575 = parseFloat(v628);
    var v478 = v574 - v575;
    var v253 = v478 > 0;
    if (v253) {
      var v251 = 100 * tempNumber;
      var v479 = originalLength + 1;
      var v629 = arrayOfItems$$1[i$$10];
      var v576 = v629.match(/\d+/);
      var v480 = parseFloat(v576);
      var v252 = v479 - v480;
      percentage = v251 / v252;
    }
    var v254 = outputWindow.document;
    var v728 = arrayOfItems$$1[i$$10];
    var v719 = v728.match(/\([^\(]+\)\b/);
    var v708 = v719.toString();
    var v695 = v708.replace(/\(|\)/g, "");
    var v681 = "<tr><td>" + v695;
    var v663 = v681 + "</td><td>";
    var v630 = v663 + tempNumber;
    var v577 = v630 + "</td><td>";
    var v578 = percentage.toFixed(2);
    var v481 = v577 + v578;
    var v255 = v481 + "</td></tr>\n";
    v254.write(v255);
    i$$10++;
    var v482 = arrayOfItems$$1.length;
    v256 = i$$10 < v482;
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
  var v483 = sequence$$17.length;
  var v264 = v483 > 0;
  for (;v264;) {
    maxNum$$1 = sequence$$17.length;
    var v484 = Math.random();
    var v258 = v484 * maxNum$$1;
    randNum$$1 = Math.floor(v258);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v259 = randNum$$1 + 1;
    var v260 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v259, v260);
    sequence$$17 = tempString1 + tempString2;
    var v485 = tempSeq.length;
    var v263 = v485 == 60;
    if (v263) {
      var v261 = outputWindow.document;
      var v262 = tempSeq + "\n";
      v261.write(v262);
      tempSeq = "";
    }
    var v486 = sequence$$17.length;
    v264 = v486 > 0;
  }
  var v265 = outputWindow.document;
  var v266 = tempSeq + "\n";
  v265.write(v266);
  return true;
}
function cpgIslands(theDocument) {
  var newDna = "";
  var title$$9 = "";
  var maxInput$$3 = 1E5;
  var v487 = testScript();
  var v267 = v487 == false;
  if (v267) {
    return false;
  }
  var v696 = theDocument.forms;
  var v682 = v696[0];
  var v664 = v682.elements;
  var v631 = v664[0];
  var v579 = checkFormElement(v631);
  var v488 = v579 == false;
  var v581 = !v488;
  if (v581) {
    var v709 = theDocument.forms;
    var v697 = v709[0];
    var v683 = v697.elements;
    var v665 = v683[0];
    var v632 = v665.value;
    var v580 = checkSequenceLength(v632, maxInput$$3);
    v488 = v580 == false;
  }
  var v268 = v488;
  if (v268) {
    return false;
  }
  openWindow("CpG Islands");
  openPre();
  var v666 = theDocument.forms;
  var v633 = v666[0];
  var v582 = v633.elements;
  var v489 = v582[0];
  var v269 = v489.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v269);
  var i$$11 = 0;
  var v490 = arrayOfFasta$$1.length;
  var v274 = i$$11 < v490;
  for (;v274;) {
    var v270 = arrayOfFasta$$1[i$$11];
    newDna = getSequenceFromFasta(v270);
    var v271 = arrayOfFasta$$1[i$$11];
    title$$9 = getTitleFromFasta(v271);
    newDna = removeNonDna(newDna);
    var v272 = outputWindow.document;
    var v273 = getInfoFromTitleAndSequence(title$$9, newDna);
    v272.write(v273);
    cpgIslandRegions(newDna, 200, .6);
    i$$11++;
    var v491 = arrayOfFasta$$1.length;
    v274 = i$$11 < v491;
  }
  closePre();
  closeWindow();
  return true;
}
function cpgIslandRegions(dnaSequence$$3, windowSize, cutOff) {
  var islandFound = false;
  var numG = 0;
  var numC = 0;
  var numCG = 0;
  var valueY = 0;
  var gcContent = 0;
  dnaSequence$$3 = dnaSequence$$3.toLowerCase();
  windowSize = parseInt(windowSize);
  cutOff = parseFloat(cutOff);
  var v492 = dnaSequence$$3.length;
  var v277 = windowSize > v492;
  if (v277) {
    var v275 = outputWindow.document;
    var v493 = "The input sequence must be longer than " + windowSize;
    var v276 = v493 + " bases.<br />\n";
    v275.write(v276);
    return true;
  }
  var i$$12 = 0;
  var v281 = i$$12 < windowSize;
  for (;v281;) {
    var v494 = dnaSequence$$3.charAt(i$$12);
    var v278 = v494 == "g";
    if (v278) {
      numG = numG + 1;
    }
    var v495 = dnaSequence$$3.charAt(i$$12);
    var v280 = v495 == "c";
    if (v280) {
      numC = numC + 1;
      var v583 = i$$12 + 1;
      var v496 = dnaSequence$$3.charAt(v583);
      var v279 = v496 == "g";
      if (v279) {
        numCG = numCG + 1;
        numG = numG + 1;
        i$$12 = i$$12 + 1;
      }
    }
    i$$12++;
    v281 = i$$12 < windowSize;
  }
  var v497 = numC != 0;
  if (v497) {
    v497 = numG != 0;
  }
  var v283 = v497;
  if (v283) {
    var v498 = numC * numG;
    var v282 = v498 / windowSize;
    valueY = numCG / v282;
  } else {
    valueY = 0;
  }
  var v284 = numG + numC;
  gcContent = v284 / windowSize;
  var v499 = valueY >= cutOff;
  if (v499) {
    v499 = gcContent > .5;
  }
  var v287 = v499;
  if (v287) {
    gcContent = gcContent * 100;
    valueY = valueY.toFixed(2);
    gcContent = gcContent.toFixed(2);
    var v285 = outputWindow.document;
    var v684 = "CpG island detected in region 1 to " + windowSize;
    var v667 = v684 + " (Obs/Exp = ";
    var v634 = v667 + valueY;
    var v584 = v634 + " and %GC = ";
    var v500 = v584 + gcContent;
    var v286 = v500 + ")<br />\n";
    v285.write(v286);
    islandFound = true;
  }
  start = windowSize;
  var j$$10 = start;
  var v501 = dnaSequence$$3.length;
  var v305 = j$$10 < v501;
  for (;v305;) {
    baseToAdd = dnaSequence$$3.charAt(j$$10);
    var v288 = j$$10 - windowSize;
    baseToLose = dnaSequence$$3.charAt(v288);
    var v289 = j$$10 - 1;
    recentBaseAdded = dnaSequence$$3.charAt(v289);
    var v502 = j$$10 - windowSize;
    var v290 = v502 + 1;
    nextToLose = dnaSequence$$3.charAt(v290);
    var v291 = baseToAdd == "c";
    if (v291) {
      numC = numC + 1;
    }
    var v293 = baseToAdd == "g";
    if (v293) {
      numG = numG + 1;
      var v292 = recentBaseAdded == "c";
      if (v292) {
        numCG = numCG + 1;
      }
    }
    var v295 = baseToLose == "c";
    if (v295) {
      numC = numC - 1;
      var v294 = nextToLose == "g";
      if (v294) {
        numCG = numCG - 1;
      }
    }
    var v296 = baseToLose == "g";
    if (v296) {
      numG = numG - 1;
    }
    var v503 = numC != 0;
    if (v503) {
      v503 = numG != 0;
    }
    var v298 = v503;
    if (v298) {
      var v504 = numC * numG;
      var v297 = v504 / windowSize;
      valueY = numCG / v297;
    } else {
      valueY = 0;
    }
    var v299 = numG + numC;
    gcContent = v299 / windowSize;
    var v505 = valueY > cutOff;
    if (v505) {
      v505 = gcContent > .5;
    }
    var v304 = v505;
    if (v304) {
      var v506 = j$$10 - windowSize;
      var v300 = v506 + 2;
      startRange = v300.toString();
      var v301 = j$$10 + 1;
      endRange = v301.toString();
      gcContent = gcContent * 100;
      valueY = valueY.toFixed(2);
      gcContent = gcContent.toFixed(2);
      var v302 = outputWindow.document;
      var v710 = "CpG island detected in region " + startRange;
      var v698 = v710 + " to ";
      var v685 = v698 + endRange;
      var v668 = v685 + " (Obs/Exp = ";
      var v635 = v668 + valueY;
      var v585 = v635 + " and %GC = ";
      var v507 = v585 + gcContent;
      var v303 = v507 + ") <br />\n";
      v302.write(v303);
      islandFound = true;
    }
    j$$10++;
    var v508 = dnaSequence$$3.length;
    v305 = j$$10 < v508;
  }
  var v307 = !islandFound;
  if (v307) {
    var v306 = outputWindow.document;
    v306.write("No CpG island regions were identified.<br />\n");
  }
  return true;
}
document.onload = v2;
var v308 = document.getElementById("submitbtn");
v308.onclick = v3;
var v309 = document.getElementById("clearbtn");
v309.onclick = v4

}
