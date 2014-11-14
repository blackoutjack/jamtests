introspect(JAM.policy.pFull) {
function v4() {
  var v680 = document.forms;
  var v568 = v680[0];
  var v327 = v568.elements;
  var v5 = v327[0];
  v5.value = " ";
  return;
}
function v3() {
  try {
    colorAlignCons(document);
  } catch (e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    alert(v6);
  }
  return;
}
function v2() {
  var v328 = document.main_form;
  var v7 = v328.main_submit;
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
  var v329 = arrayOfSequences.length;
  var v9 = v329 < 2;
  if (v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v330 = arrayOfTitles.length;
  var v11 = i$$1 < v330;
  for (;v11;) {
    var v747 = arrayOfTitles[i$$1];
    var v681 = v747.search(/\S/);
    var v569 = v681 == -1;
    var v683 = !v569;
    if (v683) {
      var v748 = arrayOfSequences[i$$1];
      var v682 = v748.search(/\S/);
      v569 = v682 == -1;
    }
    var v331 = v569;
    var v571 = !v331;
    if (v571) {
      var v684 = arrayOfSequences[i$$1];
      var v570 = v684.length;
      v331 = v570 != lengthOfAlign;
    }
    var v10 = v331;
    if (v10) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v332 = arrayOfTitles.length;
    v11 = i$$1 < v332;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v787 = codonTable.search(/AmAcid/);
  var v749 = v787 == -1;
  var v789 = !v749;
  if (v789) {
    var v788 = codonTable.search(/Codon/);
    v749 = v788 == -1;
  }
  var v685 = v749;
  var v751 = !v685;
  if (v751) {
    var v750 = codonTable.search(/Number/);
    v685 = v750 == -1;
  }
  var v572 = v685;
  var v687 = !v572;
  if (v687) {
    var v686 = codonTable.search(/\/1000/);
    v572 = v686 == -1;
  }
  var v333 = v572;
  var v574 = !v333;
  if (v574) {
    var v573 = codonTable.search(/Fraction\s*\.\./);
    v333 = v573 == -1;
  }
  var v12 = v333;
  if (v12) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v575 = formElement.value;
  var v334 = v575.search(/\S/);
  var v13 = v334 == -1;
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
  var v335 = arrayOfPatterns.length;
  var v16 = z$$2 < v335;
  for (;v16;) {
    var v576 = arrayOfPatterns[z$$2];
    var v336 = v576.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v14 = v336 == -1;
    if (v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v577 = arrayOfPatterns[z$$2];
    var v337 = moreExpressionCheck(v577);
    var v15 = v337 == false;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v338 = arrayOfPatterns.length;
    v16 = z$$2 < v338;
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v339 = arrayOfPatterns.length;
  var v22 = j < v339;
  for (;v22;) {
    var v578 = arrayOfPatterns[j];
    var v340 = v578.match(/\/.+\//);
    var v19 = v340 + "gi";
    var v887 = eval(v19);
    geneticCodeMatchExp[j] = v887;
    var v341 = arrayOfPatterns[j];
    var v20 = v341.match(/=[a-zA-Z\*]/);
    var v888 = v20.toString();
    geneticCodeMatchResult[j] = v888;
    var v21 = geneticCodeMatchResult[j];
    var v889 = v21.replace(/=/g, "");
    geneticCodeMatchResult[j] = v889;
    j++;
    var v342 = arrayOfPatterns.length;
    v22 = j < v342;
  }
  var i$$2 = 0;
  var v579 = testSequence.length;
  var v343 = v579 - 3;
  var v29 = i$$2 <= v343;
  for (;v29;) {
    var v23 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v23);
    j = 0;
    var v344 = geneticCodeMatchExp.length;
    var v27 = j < v344;
    for (;v27;) {
      var v580 = geneticCodeMatchExp[j];
      var v345 = codon.search(v580);
      var v26 = v345 != -1;
      if (v26) {
        var v25 = oneMatch == true;
        if (v25) {
          var v346 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v24 = v346 + ".";
          alert(v24);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v347 = geneticCodeMatchExp.length;
      v27 = j < v347;
    }
    var v28 = oneMatch == false;
    if (v28) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v581 = testSequence.length;
    var v348 = v581 - 3;
    v29 = i$$2 <= v348;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v349 = arrayOfPatterns$$1.length;
  var v31 = z$$3 < v349;
  for (;v31;) {
    var v582 = arrayOfPatterns$$1[z$$3];
    var v350 = v582.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v30 = v350 != -1;
    if (v30) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v351 = arrayOfPatterns$$1.length;
    v31 = z$$3 < v351;
  }
  var i$$3 = 0;
  var v352 = arrayOfPatterns$$1.length;
  var v35 = i$$3 < v352;
  for (;v35;) {
    var v583 = arrayOfPatterns$$1[i$$3];
    var v353 = "[" + v583;
    var v32 = v353 + "]";
    var re = new RegExp(v32, "gi");
    var j$$1 = i$$3 + 1;
    var v354 = arrayOfPatterns$$1.length;
    var v34 = j$$1 < v354;
    for (;v34;) {
      var v584 = arrayOfPatterns$$1[j$$1];
      var v355 = v584.search(re);
      var v33 = v355 != -1;
      if (v33) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v356 = arrayOfPatterns$$1.length;
      v34 = j$$1 < v356;
    }
    i$$3++;
    var v357 = arrayOfPatterns$$1.length;
    v35 = i$$3 < v357;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v358 = arrayOfPatterns$$2.length;
  var v38 = z$$4 < v358;
  for (;v38;) {
    var v585 = arrayOfPatterns$$2[z$$4];
    var v359 = v585.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v36 = v359 == -1;
    if (v36) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v586 = arrayOfPatterns$$2[z$$4];
    var v360 = moreExpressionCheck(v586);
    var v37 = v360 == false;
    if (v37) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v361 = arrayOfPatterns$$2.length;
    v38 = z$$4 < v361;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v688 = getSequenceFromFasta(text$$7);
  var v587 = v688.replace(/[^A-Za-z]/g, "");
  var v362 = v587.length;
  var v40 = v362 > maxInput;
  if (v40) {
    var v363 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v39 = v363 + " characters.";
    alert(v39);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v364 = text$$8.length;
  var v42 = v364 > maxInput$$1;
  if (v42) {
    var v365 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v41 = v365 + " characters.";
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
  var v366 = alignArray.length;
  var v49 = v366 < 3;
  if (v49) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v367 = alignArray.length;
  var v51 = i$$4 < v367;
  for (;v51;) {
    var v588 = alignArray[i$$4];
    var v368 = v588.search(/[^\s]+\s/);
    var v50 = v368 == -1;
    if (v50) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v369 = alignArray.length;
    v51 = i$$4 < v369;
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
  var v370 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v54 = v370 != -1;
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
  var v371 = sequence$$2.length;
  var v55 = "&gt;results for " + v371;
  var stringToReturn = v55 + " residue sequence ";
  var v372 = fastaSequenceTitle.search(/[^\s]/);
  var v57 = v372 != -1;
  if (v57) {
    var v373 = stringToReturn + '"';
    var v56 = v373 + fastaSequenceTitle;
    stringToReturn = v56 + '"';
  }
  var v374 = stringToReturn + ' starting "';
  var v375 = sequence$$2.substring(0, 10);
  var v58 = v374 + v375;
  stringToReturn = v58 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v376 = sequenceOne.length;
  var v59 = "Search results for " + v376;
  var stringToReturn$$1 = v59 + " residue sequence ";
  var v377 = fastaSequenceTitleOne.search(/[^\s]/);
  var v61 = v377 != -1;
  if (v61) {
    var v378 = stringToReturn$$1 + '"';
    var v60 = v378 + fastaSequenceTitleOne;
    stringToReturn$$1 = v60 + '"';
  }
  var v379 = stringToReturn$$1 + ' starting "';
  var v380 = sequenceOne.substring(0, 10);
  var v62 = v379 + v380;
  stringToReturn$$1 = v62 + '"\n';
  var v381 = stringToReturn$$1 + "and ";
  var v382 = sequenceTwo.length;
  var v63 = v381 + v382;
  stringToReturn$$1 = v63 + " residue sequence ";
  var v383 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v65 = v383 != -1;
  if (v65) {
    var v384 = stringToReturn$$1 + '"';
    var v64 = v384 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v64 + '"';
  }
  var v385 = stringToReturn$$1 + ' starting "';
  var v386 = sequenceTwo.substring(0, 10);
  var v66 = v385 + v386;
  stringToReturn$$1 = v66 + '"';
  var v67 = '<div class="info">' + stringToReturn$$1;
  return v67 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v68 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v68);
  var j$$2 = 0;
  var v387 = arrayOfPatterns$$3.length;
  var v70 = j$$2 < v387;
  for (;v70;) {
    var v589 = arrayOfPatterns$$3[j$$2];
    var v388 = v589.match(/\/.+\//);
    var v69 = v388 + "gi";
    var v890 = eval(v69);
    geneticCodeMatchExp$$1[j$$2] = v890;
    j$$2++;
    var v389 = arrayOfPatterns$$3.length;
    v70 = j$$2 < v389;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v71 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v71);
  var j$$3 = 0;
  var v390 = arrayOfPatterns$$4.length;
  var v74 = j$$3 < v390;
  for (;v74;) {
    var v391 = arrayOfPatterns$$4[j$$3];
    var v72 = v391.match(/=[a-zA-Z\*]/);
    var v891 = v72.toString();
    geneticCodeMatchResult$$1[j$$3] = v891;
    var v73 = geneticCodeMatchResult$$1[j$$3];
    var v892 = v73.replace(/=/g, "");
    geneticCodeMatchResult$$1[j$$3] = v892;
    j$$3++;
    var v392 = arrayOfPatterns$$4.length;
    v74 = j$$3 < v392;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v393 = sequence$$3.length;
  var v75 = "Results for " + v393;
  var stringToReturn$$2 = v75 + " residue sequence ";
  var v394 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v77 = v394 != -1;
  if (v77) {
    var v395 = stringToReturn$$2 + '"';
    var v76 = v395 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v76 + '"';
  }
  var v396 = stringToReturn$$2 + ' starting "';
  var v397 = sequence$$3.substring(0, 10);
  var v78 = v396 + v397;
  stringToReturn$$2 = v78 + '"';
  var v79 = '<div class="info">' + stringToReturn$$2;
  return v79 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v590 = "Results for " + topology;
  var v398 = v590 + " ";
  var v399 = sequence$$4.length;
  var v80 = v398 + v399;
  var stringToReturn$$3 = v80 + " residue sequence ";
  var v400 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v82 = v400 != -1;
  if (v82) {
    var v401 = stringToReturn$$3 + '"';
    var v81 = v401 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v81 + '"';
  }
  var v402 = stringToReturn$$3 + ' starting "';
  var v403 = sequence$$4.substring(0, 10);
  var v83 = v402 + v403;
  stringToReturn$$3 = v83 + '"';
  var v84 = '<div class="info">' + stringToReturn$$3;
  return v84 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v404 = sequenceOne$$1.length;
  var v85 = "Alignment results for " + v404;
  var stringToReturn$$4 = v85 + " residue sequence ";
  var v405 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v87 = v405 != -1;
  if (v87) {
    var v406 = stringToReturn$$4 + '"';
    var v86 = v406 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v86 + '"';
  }
  var v407 = stringToReturn$$4 + ' starting "';
  var v408 = sequenceOne$$1.substring(0, 10);
  var v88 = v407 + v408;
  stringToReturn$$4 = v88 + '"\n';
  var v409 = stringToReturn$$4 + "and ";
  var v410 = sequenceTwo$$1.length;
  var v89 = v409 + v410;
  stringToReturn$$4 = v89 + " residue sequence ";
  var v411 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v91 = v411 != -1;
  if (v91) {
    var v412 = stringToReturn$$4 + '"';
    var v90 = v412 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v90 + '"';
  }
  var v413 = stringToReturn$$4 + ' starting "';
  var v414 = sequenceTwo$$1.substring(0, 10);
  var v92 = v413 + v414;
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
    var v415 = Math.random();
    var v416 = components.length;
    var v94 = v415 * v416;
    tempNum = Math.floor(v94);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4++;
    v95 = j$$4 < lengthOut;
  }
  return sequenceArray.join("");
}
function getSequenceFromFasta(sequenceRecord) {
  var v417 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v96 = v417 != -1;
  if (v96) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "");
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v418 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v98 = v418 != -1;
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
  var v865 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v858 = v865 != -1;
  var v867 = !v858;
  if (v867) {
    var v866 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    v858 = v866 != -1;
  }
  var v849 = v858;
  var v860 = !v849;
  if (v860) {
    var v859 = expressionToCheck.search(/\[\]/);
    v849 = v859 != -1;
  }
  var v840 = v849;
  var v851 = !v840;
  if (v851) {
    var v850 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
    v840 = v850 != -1;
  }
  var v827 = v840;
  var v842 = !v827;
  if (v842) {
    var v841 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
    v827 = v841 != -1;
  }
  var v809 = v827;
  var v829 = !v809;
  if (v829) {
    var v828 = expressionToCheck.search(/\|\|/);
    v809 = v828 != -1;
  }
  var v790 = v809;
  var v811 = !v790;
  if (v811) {
    var v810 = expressionToCheck.search(/\/\|/);
    v790 = v810 != -1;
  }
  var v752 = v790;
  var v792 = !v752;
  if (v792) {
    var v791 = expressionToCheck.search(/\|\//);
    v752 = v791 != -1;
  }
  var v689 = v752;
  var v754 = !v689;
  if (v754) {
    var v753 = expressionToCheck.search(/\[.\]/);
    v689 = v753 != -1;
  }
  var v591 = v689;
  var v691 = !v591;
  if (v691) {
    var v690 = expressionToCheck.search(/\</);
    v591 = v690 != -1;
  }
  var v419 = v591;
  var v593 = !v419;
  if (v593) {
    var v592 = expressionToCheck.search(/\>/);
    v419 = v592 != -1;
  }
  var v99 = v419;
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
  var v692 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v594 = v692 + "<head>\n";
  var v420 = v594 + "<title>Sequence Manipulation Suite</title>\n";
  var v105 = v420 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v104.write(v105);
  if (isColor) {
    var v106 = outputWindow.document;
    var v880 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v876 = v880 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v872 = v876 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v868 = v872 + "div.info {font-weight: bold}\n";
    var v861 = v868 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v852 = v861 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v843 = v852 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v830 = v843 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v812 = v830 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v793 = v812 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v755 = v793 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v693 = v755 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v595 = v693 + "td.many {color: #000000}\n";
    var v421 = v595 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v107 = v421 + "</style>\n";
    v106.write(v107);
  } else {
    var v108 = outputWindow.document;
    var v884 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v881 = v884 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v877 = v881 + "div.title {display: none}\n";
    var v873 = v877 + "div.info {font-weight: bold}\n";
    var v869 = v873 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v862 = v869 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v853 = v862 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v844 = v853 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v831 = v844 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v813 = v831 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v794 = v813 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v756 = v794 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v694 = v756 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v596 = v694 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v422 = v596 + "img {display: none}\n";
    var v109 = v422 + "</style>\n";
    v108.write(v109);
  }
  var v110 = outputWindow.document;
  var v695 = "</head>\n" + '<body class="main">\n';
  var v597 = v695 + '<div class="title">';
  var v423 = v597 + title$$6;
  var v111 = v423 + " results</div>\n";
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
  var v696 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v598 = v696 + "<head>\n";
  var v424 = v598 + "<title>Sequence Manipulation Suite</title>\n";
  var v113 = v424 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v112.write(v113);
  if (isBackground) {
    var v114 = outputWindow.document;
    var v882 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v878 = v882 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v874 = v878 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v870 = v874 + "div.info {font-weight: bold}\n";
    var v863 = v870 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v854 = v863 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v845 = v854 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v832 = v845 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v814 = v832 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v795 = v814 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v757 = v795 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v697 = v757 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v599 = v697 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v425 = v599 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v115 = v425 + "</style>\n";
    v114.write(v115);
  } else {
    var v116 = outputWindow.document;
    var v886 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v885 = v886 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v883 = v885 + "div.title {display: none}\n";
    var v879 = v883 + "div.info {font-weight: bold}\n";
    var v875 = v879 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v871 = v875 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v864 = v871 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v855 = v864 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v846 = v855 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v833 = v846 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v815 = v833 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v796 = v815 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v758 = v796 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v698 = v758 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v600 = v698 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v426 = v600 + "img {display: none}\n";
    var v117 = v426 + "</style>\n";
    v116.write(v117);
  }
  var v118 = outputWindow.document;
  var v699 = "</head>\n" + '<body class="main">\n';
  var v601 = v699 + '<div class="title">';
  var v427 = v601 + title$$8;
  var v119 = v427 + " results</div>\n";
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
  var v428 = dnaSequence$$1.search(/./);
  var v120 = v428 != -1;
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
  var v429 = testArray[0];
  var v124 = v429 != testString;
  if (v124) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v430 = testString.search(re$$2);
  var v125 = v430 == -1;
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
  var v431 = testNum.toFixed(3);
  var v128 = v431 != 2489.824;
  if (v128) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v432 = testNum.toPrecision(5);
  var v129 = v432 != 2489.8;
  if (v129) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v433 = theNumber$$1.search(/\d/);
  var v130 = v433 == -1;
  if (v130) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v759 = emblFile.search(/ID/);
  var v700 = v759 == -1;
  var v761 = !v700;
  if (v761) {
    var v760 = emblFile.search(/AC/);
    v700 = v760 == -1;
  }
  var v602 = v700;
  var v702 = !v602;
  if (v702) {
    var v701 = emblFile.search(/DE/);
    v602 = v701 == -1;
  }
  var v434 = v602;
  var v604 = !v434;
  if (v604) {
    var v603 = emblFile.search(/SQ/);
    v434 = v603 == -1;
  }
  var v131 = v434;
  if (v131) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v435 = theNumber$$2.search(/\d/);
  var v132 = v435 == -1;
  if (v132) {
    alert("Please enter a number.");
    return false;
  }
  var v134 = theNumber$$2 > maxInput$$2;
  if (v134) {
    var v436 = "Please enter a number less than or equal to " + maxInput$$2;
    var v133 = v436 + ".";
    alert(v133);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v437 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v135 = v437 != -1;
  if (v135) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v438 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v136 = v438 != -1;
  if (v136) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v762 = genBankFile.search(/LOCUS/);
  var v703 = v762 == -1;
  var v764 = !v703;
  if (v764) {
    var v763 = genBankFile.search(/DEFINITION/);
    v703 = v763 == -1;
  }
  var v605 = v703;
  var v705 = !v605;
  if (v705) {
    var v704 = genBankFile.search(/ACCESSION/);
    v605 = v704 == -1;
  }
  var v439 = v605;
  var v607 = !v439;
  if (v607) {
    var v606 = genBankFile.search(/ORIGIN/);
    v439 = v606 == -1;
  }
  var v137 = v439;
  if (v137) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v765 = genBankFile$$1.search(/LOCUS/);
  var v706 = v765 == -1;
  var v767 = !v706;
  if (v767) {
    var v766 = genBankFile$$1.search(/DEFINITION/);
    v706 = v766 == -1;
  }
  var v608 = v706;
  var v708 = !v608;
  if (v708) {
    var v707 = genBankFile$$1.search(/ACCESSION/);
    v608 = v707 == -1;
  }
  var v440 = v608;
  var v610 = !v440;
  if (v610) {
    var v609 = genBankFile$$1.search(/ORIGIN/);
    v440 = v609 == -1;
  }
  var v138 = v440;
  if (v138) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v441 = genBankFile$$1.search(/FEATURES {13}/);
  var v139 = v441 == -1;
  if (v139) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v768 = emblFile$$1.search(/ID/);
  var v709 = v768 == -1;
  var v770 = !v709;
  if (v770) {
    var v769 = emblFile$$1.search(/AC/);
    v709 = v769 == -1;
  }
  var v611 = v709;
  var v711 = !v611;
  if (v711) {
    var v710 = emblFile$$1.search(/DE/);
    v611 = v710 == -1;
  }
  var v442 = v611;
  var v613 = !v442;
  if (v613) {
    var v612 = emblFile$$1.search(/SQ/);
    v442 = v612 == -1;
  }
  var v140 = v442;
  if (v140) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v443 = emblFile$$1.search(/^FT/m);
  var v141 = v443 == -1;
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
    var v444 = basePerLine / groupSize;
    var v145 = j$$6 <= v444;
    for (;v145;) {
      var v144 = k < groupSize;
      for (;v144;) {
        var v445 = k + i$$5;
        var v143 = text$$10.charAt(v445);
        lineOfText = lineOfText + v143;
        k = k + 1;
        v144 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v446 = basePerLine / groupSize;
      v145 = j$$6 <= v446;
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
    var v447 = adjustment < 0;
    if (v447) {
      v447 = adjusted >= 0;
    }
    var v149 = v447;
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
    var v448 = basePerLine$$2 / groupSize$$2;
    var v158 = j$$7 <= v448;
    for (;v158;) {
      var v153 = k$$1 < groupSize$$2;
      for (;v153;) {
        var v449 = i$$6 + k$$1;
        var v150 = v449 >= stopBase$$2;
        if (v150) {
          break;
        }
        var v151 = lineOfText$$1;
        var v450 = k$$1 + i$$6;
        var v152 = text$$12.charAt(v450);
        lineOfText$$1 = v151 + v152;
        k$$1 = k$$1 + 1;
        v153 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v156 = numberPosition$$1 == "above";
      if (v156) {
        var v154 = aboveNum;
        var v451 = adjustNumbering(i$$6, numberingAdjustment);
        var v155 = rightNum(v451, "", groupSize$$2, tabIn$$3);
        aboveNum = v154 + v155;
      }
      var v157 = i$$6 >= stopBase$$2;
      if (v157) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v452 = basePerLine$$2 / groupSize$$2;
      v158 = j$$7 <= v452;
    }
    var v181 = numberPosition$$1 == "left";
    if (v181) {
      var v159 = outputWindow.document;
      var v712 = adjustNumbering(lineNum, numberingAdjustment);
      var v614 = rightNum(v712, "", 8, tabIn$$3);
      var v453 = v614 + lineOfText$$1;
      var v160 = v453 + "\n";
      v159.write(v160);
      var v164 = strands$$1 == "two";
      if (v164) {
        var v161 = outputWindow.document;
        var v713 = adjustNumbering(lineNum, numberingAdjustment);
        var v615 = rightNum(v713, "", 8, tabIn$$3);
        var v616 = complement(lineOfText$$1);
        var v454 = v615 + v616;
        var v162 = v454 + "\n";
        v161.write(v162);
        var v163 = outputWindow.document;
        v163.write("\n");
      }
    } else {
      var v180 = numberPosition$$1 == "right";
      if (v180) {
        var v165 = outputWindow.document;
        var v617 = lineOfText$$1;
        var v618 = adjustNumbering(i$$6, numberingAdjustment);
        var v455 = v617 + v618;
        var v166 = v455 + "\n";
        v165.write(v166);
        var v170 = strands$$1 == "two";
        if (v170) {
          var v167 = outputWindow.document;
          var v619 = complement(lineOfText$$1);
          var v620 = adjustNumbering(i$$6, numberingAdjustment);
          var v456 = v619 + v620;
          var v168 = v456 + "\n";
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
            var v457 = complement(lineOfText$$1);
            var v176 = v457 + "\n";
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
    var v458 = basePerLine$$3 / groupSize$$3;
    var v189 = j$$8 <= v458;
    for (;v189;) {
      var v185 = k$$2 < groupSize$$3;
      for (;v185;) {
        var v459 = i$$7 + k$$2;
        var v183 = v459 >= stopBase$$3;
        if (v183) {
          break;
        }
        var v460 = k$$2 + i$$7;
        var v184 = text$$13.charAt(v460);
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
      var v461 = basePerLine$$3 / groupSize$$3;
      v189 = j$$8 <= v461;
    }
    var v200 = numberPosition$$2 == "left";
    if (v200) {
      var v190 = outputWindow.document;
      var v621 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v462 = v621 + lineOfText$$2;
      var v191 = v462 + "\n";
      v190.write(v191);
    } else {
      var v199 = numberPosition$$2 == "right";
      if (v199) {
        var v192 = outputWindow.document;
        var v463 = lineOfText$$2 + i$$7;
        var v193 = v463 + "\n";
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
  var v714 = sequence$$13.length;
  var v622 = v714 <= firstIndexToMutate;
  var v715 = !v622;
  if (v715) {
    v622 = lastIndexToMutate < 0;
  }
  var v464 = v622;
  var v623 = !v464;
  if (v623) {
    v464 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v202 = v464;
  if (v202) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v210 = i$$8 < numMut;
  for (;v210;) {
    maxNum = sequence$$13.length;
    var v465 = Math.random();
    var v203 = v465 * maxNum;
    randNum = Math.floor(v203);
    var v466 = randNum < firstIndexToMutate;
    var v624 = !v466;
    if (v624) {
      v466 = randNum > lastIndexToMutate;
    }
    var v204 = v466;
    if (v204) {
      numMut++;
      i$$8++;
      v210 = i$$8 < numMut;
      continue;
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for (;needNewChar;) {
      var v467 = Math.random();
      var v468 = components$$1.length;
      var v205 = v467 * v468;
      componentsIndex = Math.round(v205);
      var v469 = components$$1.length;
      var v206 = componentsIndex == v469;
      if (v206) {
        componentsIndex = 0;
      }
      var v470 = components$$1[componentsIndex];
      var v207 = v470 != currentChar;
      if (v207) {
        needNewChar = false;
      }
    }
    var v471 = sequence$$13.substring(0, randNum);
    var v472 = components$$1[componentsIndex];
    var v208 = v471 + v472;
    var v473 = randNum + 1;
    var v474 = sequence$$13.length;
    var v209 = sequence$$13.substring(v473, v474);
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
    var v475 = Math.random();
    var v476 = components$$2.length;
    var v213 = v475 * v476;
    tempNum$$1 = Math.floor(v213);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v477 = sequence$$14.length;
    var v216 = v477 == 60;
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
    var v716 = sequence$$15.length;
    var v625 = v716 - lookAhead;
    var v626 = sequence$$15.length;
    var v478 = sequence$$15.substring(v625, v626);
    var v221 = v478 + sequence$$15;
    var v222 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v221 + v222;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v224 = outputWindow.document;
  v224.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  var v225 = outputWindow.document;
  var v717 = '<tr><td class="title" width="200px">' + "Site:";
  var v627 = v717 + '</td><td class="title">';
  var v479 = v627 + "Positions:";
  var v226 = v479 + "</td></tr>\n";
  v225.write(v226);
  var i$$9 = 0;
  var v480 = arrayOfItems.length;
  var v242 = i$$9 < v480;
  for (;v242;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v481 = arrayOfItems[i$$9];
    var v227 = v481.match(/\/.+\//);
    matchExp = v227 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    var v718 = arrayOfItems[i$$9];
    var v628 = v718.match(/\)\D*\d+/);
    var v482 = v628.toString();
    var v228 = v482.replace(/\)\D*/, "");
    cutDistance = parseFloat(v228);
    var v234 = matchArray$$1 = matchExp.exec(sequence$$15);
    for (;v234;) {
      var v229 = matchExp.lastIndex;
      matchPosition = v229 - cutDistance;
      var v483 = matchPosition >= lowerLimit;
      if (v483) {
        v483 = matchPosition < upperLimit;
      }
      var v232 = v483;
      if (v232) {
        timesFound++;
        var v230 = tempString$$1 + ", ";
        var v484 = matchPosition - shiftValue;
        var v231 = v484 + 1;
        tempString$$1 = v230 + v231;
      }
      var v485 = matchExp.lastIndex;
      var v629 = RegExp.lastMatch;
      var v486 = v629.length;
      var v233 = v485 - v486;
      matchExp.lastIndex = v233 + 1;
      v234 = matchArray$$1 = matchExp.exec(sequence$$15);
    }
    var v487 = tempString$$1.search(/\d/);
    var v235 = v487 != -1;
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
    var v834 = '<tr><td class="' + backGroundClass;
    var v816 = v834 + '">';
    var v856 = arrayOfItems[i$$9];
    var v847 = v856.match(/\([^\(]+\)/);
    var v835 = v847.toString();
    var v817 = v835.replace(/\(|\)/g, "");
    var v797 = v816 + v817;
    var v771 = v797 + '</td><td class="';
    var v719 = v771 + backGroundClass;
    var v630 = v719 + '">';
    var v488 = v630 + tempString$$1;
    var v241 = v488 + "</td></tr>\n";
    v240.write(v241);
    timesFound = 0;
    i$$9++;
    var v489 = arrayOfItems.length;
    v242 = i$$9 < v489;
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
  var v798 = '<tr><td class="title">' + "Pattern:";
  var v772 = v798 + '</td><td class="title">';
  var v720 = v772 + "Times found:";
  var v631 = v720 + '</td><td class="title">';
  var v490 = v631 + "Percentage:";
  var v246 = v490 + "</td></tr>\n";
  v245.write(v246);
  var i$$10 = 0;
  var v491 = arrayOfItems$$1.length;
  var v255 = i$$10 < v491;
  for (;v255;) {
    var tempNumber = 0;
    var v492 = arrayOfItems$$1[i$$10];
    var v247 = v492.match(/\/[^\/]+\//);
    var matchExp$$1 = v247 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    var v493 = sequence$$16.search(matchExp$$1);
    var v249 = v493 != -1;
    if (v249) {
      var v248 = sequence$$16.match(matchExp$$1);
      tempNumber = v248.length;
    }
    var percentage = 0;
    var v632 = originalLength + 1;
    var v773 = arrayOfItems$$1[i$$10];
    var v721 = v773.match(/\d+/);
    var v633 = parseFloat(v721);
    var v494 = v632 - v633;
    var v252 = v494 > 0;
    if (v252) {
      var v250 = 100 * tempNumber;
      var v495 = originalLength + 1;
      var v722 = arrayOfItems$$1[i$$10];
      var v634 = v722.match(/\d+/);
      var v496 = parseFloat(v634);
      var v251 = v495 - v496;
      percentage = v250 / v251;
    }
    var v253 = outputWindow.document;
    var v857 = arrayOfItems$$1[i$$10];
    var v848 = v857.match(/\([^\(]+\)\b/);
    var v836 = v848.toString();
    var v818 = v836.replace(/\(|\)/g, "");
    var v799 = "<tr><td>" + v818;
    var v774 = v799 + "</td><td>";
    var v723 = v774 + tempNumber;
    var v635 = v723 + "</td><td>";
    var v636 = percentage.toFixed(2);
    var v497 = v635 + v636;
    var v254 = v497 + "</td></tr>\n";
    v253.write(v254);
    i$$10++;
    var v498 = arrayOfItems$$1.length;
    v255 = i$$10 < v498;
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
  var v499 = sequence$$17.length;
  var v263 = v499 > 0;
  for (;v263;) {
    maxNum$$1 = sequence$$17.length;
    var v500 = Math.random();
    var v257 = v500 * maxNum$$1;
    randNum$$1 = Math.floor(v257);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v258 = randNum$$1 + 1;
    var v259 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v258, v259);
    sequence$$17 = tempString1 + tempString2;
    var v501 = tempSeq.length;
    var v262 = v501 == 60;
    if (v262) {
      var v260 = outputWindow.document;
      var v261 = tempSeq + "\n";
      v260.write(v261);
      tempSeq = "";
    }
    var v502 = sequence$$17.length;
    v263 = v502 > 0;
  }
  var v264 = outputWindow.document;
  var v265 = tempSeq + "\n";
  v264.write(v265);
  return true;
}
function colorAlignCons(theDocument) {
  var maxInput$$3 = 2E4;
  var v503 = testScript();
  var v266 = v503 == false;
  if (v266) {
    return false;
  }
  var theAlignment = "";
  var alignArray$$1 = new Array;
  var groupString = "";
  var arrayOfGroups = new Array;
  var titleArray = new Array;
  var sequenceArray$$1 = new Array;
  var longestTitle;
  var v819 = theDocument.forms;
  var v800 = v819[0];
  var v775 = v800.elements;
  var v724 = v775[0];
  var v637 = checkFormElement(v724);
  var v504 = v637 == false;
  var v639 = !v504;
  if (v639) {
    var v837 = theDocument.forms;
    var v820 = v837[0];
    var v801 = v820.elements;
    var v776 = v801[0];
    var v725 = v776.value;
    var v638 = checkTextLength(v725, maxInput$$3);
    v504 = v638 == false;
  }
  var v267 = v504;
  if (v267) {
    return false;
  }
  var v777 = theDocument.forms;
  var v726 = v777[0];
  var v640 = v726.elements;
  var v505 = v640[0];
  var v268 = v505.value;
  theAlignment = "X" + v268;
  alignArray$$1 = theAlignment.split(/[>%#]/);
  var v506 = earlyCheckAlign(alignArray$$1);
  var v269 = v506 == false;
  if (v269) {
    return false;
  }
  var i$$11 = 1;
  var v507 = alignArray$$1.length;
  var v279 = i$$11 < v507;
  for (;v279;) {
    var v270 = i$$11 - 1;
    var v508 = alignArray$$1[i$$11];
    var v893 = v508.match(/[^\f\n\r]+[\f\n\r]/);
    titleArray[v270] = v893;
    var v271 = i$$11 - 1;
    var v778 = i$$11 - 1;
    var v727 = titleArray[v778];
    var v641 = v727.toString();
    var v509 = filterFastaTitle(v641);
    var v894 = v509.replace(/[\f\n\r]/g, "");
    titleArray[v271] = v894;
    var v272 = i$$11 - 1;
    var v642 = i$$11 - 1;
    var v510 = titleArray[v642];
    var v895 = v510.substring(0, 20);
    titleArray[v272] = v895;
    var v276 = i$$11 == 1;
    if (v276) {
      var v511 = i$$11 - 1;
      var v273 = titleArray[v511];
      longestTitle = v273.length;
    } else {
      var v728 = i$$11 - 1;
      var v643 = titleArray[v728];
      var v512 = v643.length;
      var v275 = v512 > longestTitle;
      if (v275) {
        var v513 = i$$11 - 1;
        var v274 = titleArray[v513];
        longestTitle = v274.length;
      }
    }
    var v277 = i$$11 - 1;
    var v514 = alignArray$$1[i$$11];
    var v896 = v514.replace(/[^\f\n\r]+[\f\n\r]/, "");
    sequenceArray$$1[v277] = v896;
    var v278 = i$$11 - 1;
    var v644 = i$$11 - 1;
    var v515 = sequenceArray$$1[v644];
    var v897 = filterAlignSeq(v515);
    sequenceArray$$1[v278] = v897;
    i$$11++;
    var v516 = alignArray$$1.length;
    v279 = i$$11 < v516;
  }
  var spaceString = "                    ";
  i$$11 = 0;
  var v517 = titleArray.length;
  var v283 = i$$11 < v517;
  for (;v283;) {
    var v645 = titleArray[i$$11];
    var v518 = v645.length;
    var v282 = v518 < longestTitle;
    if (v282) {
      var v280 = titleArray[i$$11];
      var v729 = titleArray[i$$11];
      var v646 = v729.length;
      var v519 = longestTitle - v646;
      var v281 = spaceString.substring(0, v519);
      titleArray[i$$11] = v280 + v281;
    }
    i$$11++;
    var v520 = titleArray.length;
    v283 = i$$11 < v520;
  }
  var v521 = checkAlign(titleArray, sequenceArray$$1);
  var v284 = v521 == false;
  if (v284) {
    return false;
  }
  var v802 = theDocument.forms;
  var v779 = v802[0];
  var v730 = v779.elements;
  var v647 = v730[7];
  var v522 = v647.value;
  var v285 = v522.replace(/\s/g, "");
  groupString = v285.toUpperCase();
  arrayOfGroups = groupString.split(/,/);
  var v523 = checkGroupInput(arrayOfGroups);
  var v286 = v523 == false;
  if (v286) {
    return false;
  }
  var isBackground$$1;
  var v838 = theDocument.forms;
  var v821 = v838[0];
  var v803 = v821.elements;
  var v780 = v803[6];
  var v731 = v780.options;
  var v839 = theDocument.forms;
  var v822 = v839[0];
  var v804 = v822.elements;
  var v781 = v804[6];
  var v732 = v781.selectedIndex;
  var v648 = v731[v732];
  var v524 = v648.value;
  var v287 = v524 == "background";
  if (v287) {
    isBackground$$1 = true;
  } else {
    isBackground$$1 = false;
  }
  _openWindowAlign("Color Align Conservation", isBackground$$1);
  openPre();
  var v823 = theDocument.forms;
  var v805 = v823[0];
  var v782 = v805.elements;
  var v733 = v782[4];
  var v649 = v733.options;
  var v824 = theDocument.forms;
  var v806 = v824[0];
  var v783 = v806.elements;
  var v734 = v783[4];
  var v650 = v734.selectedIndex;
  var v525 = v649[v650];
  var v288 = v525.value;
  var v825 = theDocument.forms;
  var v807 = v825[0];
  var v784 = v807.elements;
  var v735 = v784[5];
  var v651 = v735.options;
  var v826 = theDocument.forms;
  var v808 = v826[0];
  var v785 = v808.elements;
  var v736 = v785[5];
  var v652 = v736.selectedIndex;
  var v526 = v651[v652];
  var v289 = v526.value;
  var v786 = theDocument.forms;
  var v737 = v786[0];
  var v653 = v737.elements;
  var v527 = v653[8];
  var v290 = v527.value;
  colorAlign(titleArray, sequenceArray$$1, v288, v289, arrayOfGroups, v290, longestTitle);
  closePre();
  closeWindow();
  return true;
}
function colorAlign(arrayOfTitles$$1, arrayOfSequences$$1, basePerLine$$4, consensus, arrayOfGroups$$1, definedStarts, longestTitle$$1) {
  var v291 = arrayOfSequences$$1.length;
  var positions = new Array(v291);
  var v528 = definedStarts.search(/\S/);
  var v292 = v528 == -1;
  if (v292) {
    definedStarts = "0,0";
  }
  var definedStartsArray = definedStarts.split(/,/);
  var i$$12 = 0;
  var v529 = positions.length;
  var v296 = i$$12 < v529;
  for (;v296;) {
    var v530 = definedStartsArray.length;
    var v295 = i$$12 >= v530;
    if (v295) {
      positions[i$$12] = 0;
    } else {
      var v654 = definedStartsArray[i$$12];
      var v531 = v654.search(/\d/);
      var v294 = v531 != -1;
      if (v294) {
        var v532 = definedStartsArray[i$$12];
        var v293 = v532.replace(/[^\d\-]/g, "");
        var v898 = parseInt(v293);
        positions[i$$12] = v898;
      } else {
        alert("An incorrect starting position was encountered. It was set to 0.");
        outputWindow.focus();
        positions[i$$12] = 0;
      }
    }
    i$$12++;
    var v533 = positions.length;
    v296 = i$$12 < v533;
  }
  var totalBasesShown = 0;
  var v297 = parseInt(consensus);
  consensus = v297 / 100;
  basePerLine$$4 = parseInt(basePerLine$$4);
  var columnCount = 0;
  var arrayOfColumns = new Array(basePerLine$$4);
  i$$12 = 0;
  var v534 = arrayOfColumns.length;
  var v299 = i$$12 < v534;
  for (;v299;) {
    var v298 = arrayOfSequences$$1.length;
    var v899 = new Array(v298);
    arrayOfColumns[i$$12] = v899;
    i$$12++;
    var v535 = arrayOfColumns.length;
    v299 = i$$12 < v535;
  }
  i$$12 = 0;
  var columnSeq;
  var re$$3;
  var result;
  var output = "";
  var v655 = arrayOfSequences$$1[0];
  var v536 = v655.length;
  var v324 = totalBasesShown < v536;
  for (;v324;) {
    var jj = 0;
    var v537 = arrayOfSequences$$1.length;
    var v322 = jj < v537;
    for (;v322;) {
      var v538 = arrayOfTitles$$1[jj];
      var v300 = output + v538;
      output = v300 + " ";
      var v656 = totalBasesShown + basePerLine$$4;
      var v539 = i$$12 < v656;
      if (v539) {
        var v738 = arrayOfSequences$$1[0];
        var v657 = v738.length;
        v539 = i$$12 < v657;
      }
      var v317 = v539;
      for (;v317;) {
        var v303 = jj == 0;
        if (v303) {
          var k$$3 = 0;
          var v540 = arrayOfSequences$$1.length;
          var v302 = k$$3 < v540;
          for (;v302;) {
            var v301 = arrayOfColumns[columnCount];
            var v541 = arrayOfSequences$$1[k$$3];
            var v900 = v541.charAt(i$$12);
            v301[k$$3] = v900;
            k$$3++;
            var v542 = arrayOfSequences$$1.length;
            v302 = k$$3 < v542;
          }
        }
        var v739 = arrayOfSequences$$1[jj];
        var v658 = v739.charAt(i$$12);
        var v543 = v658 == ".";
        var v660 = !v543;
        if (v660) {
          var v740 = arrayOfSequences$$1[jj];
          var v659 = v740.charAt(i$$12);
          v543 = v659 == "-";
        }
        var v305 = v543;
        if (v305) {
          var v544 = output + '<span class="diff">';
          var v661 = arrayOfSequences$$1[jj];
          var v545 = v661.charAt(i$$12);
          var v304 = v544 + v545;
          output = v304 + "</span>";
          i$$12 = i$$12 + 1;
          columnCount++;
          var v662 = totalBasesShown + basePerLine$$4;
          var v546 = i$$12 < v662;
          if (v546) {
            var v741 = arrayOfSequences$$1[0];
            var v663 = v741.length;
            v546 = i$$12 < v663;
          }
          v317 = v546;
          continue;
        }
        var v306 = arrayOfColumns[columnCount];
        columnSeq = v306.join(",");
        var v547 = arrayOfSequences$$1[jj];
        var v307 = v547.charAt(i$$12);
        re$$3 = new RegExp(v307, "gi");
        var v742 = columnSeq.match(re$$3);
        var v664 = v742.length;
        var v665 = arrayOfSequences$$1.length;
        var v548 = v664 / v665;
        var v309 = v548 >= consensus;
        if (v309) {
          var v549 = output + '<span class="ident">';
          var v666 = arrayOfSequences$$1[jj];
          var v550 = v666.charAt(i$$12);
          var v308 = v549 + v550;
          output = v308 + "</span>";
          i$$12 = i$$12 + 1;
          columnCount++;
          var v667 = totalBasesShown + basePerLine$$4;
          var v551 = i$$12 < v667;
          if (v551) {
            var v743 = arrayOfSequences$$1[0];
            var v668 = v743.length;
            v551 = i$$12 < v668;
          }
          v317 = v551;
          continue;
        }
        result = 1;
        var m = 0;
        var v552 = arrayOfGroups$$1.length;
        var v313 = m < v552;
        for (;v313;) {
          var v669 = arrayOfGroups$$1[m];
          var v553 = v669.search(re$$3);
          var v312 = v553 != -1;
          if (v312) {
            var v670 = arrayOfGroups$$1[m];
            var v554 = "[" + v670;
            var v310 = v554 + "]";
            re$$3 = new RegExp(v310, "gi");
            var v311 = columnSeq.match(re$$3);
            result = v311.length;
            break;
          }
          m++;
          var v555 = arrayOfGroups$$1.length;
          v313 = m < v555;
        }
        var v671 = arrayOfSequences$$1.length;
        var v556 = result / v671;
        var v315 = v556 >= consensus;
        if (v315) {
          var v557 = output + '<span class="sim">';
          var v672 = arrayOfSequences$$1[jj];
          var v558 = v672.charAt(i$$12);
          var v314 = v557 + v558;
          output = v314 + "</span>";
          i$$12 = i$$12 + 1;
          columnCount++;
          var v673 = totalBasesShown + basePerLine$$4;
          var v559 = i$$12 < v673;
          if (v559) {
            var v744 = arrayOfSequences$$1[0];
            var v674 = v744.length;
            v559 = i$$12 < v674;
          }
          v317 = v559;
          continue;
        }
        var v560 = output + '<span class="diff">';
        var v675 = arrayOfSequences$$1[jj];
        var v561 = v675.charAt(i$$12);
        var v316 = v560 + v561;
        output = v316 + "</span>";
        i$$12 = i$$12 + 1;
        columnCount++;
        var v676 = totalBasesShown + basePerLine$$4;
        var v562 = i$$12 < v676;
        if (v562) {
          var v745 = arrayOfSequences$$1[0];
          var v677 = v745.length;
          v562 = i$$12 < v677;
        }
        v317 = v562;
      }
      var v318 = positions[jj];
      var v746 = arrayOfSequences$$1[jj];
      var v678 = v746.substring(totalBasesShown, i$$12);
      var v563 = v678.replace(/\.|\-/g, "");
      var v319 = v563.length;
      positions[jj] = v318 + v319;
      var v564 = output + " ";
      var v565 = positions[jj];
      var v320 = v564 + v565;
      output = v320 + "\n";
      var v321 = outputWindow.document;
      v321.write(output);
      output = "";
      i$$12 = totalBasesShown;
      columnCount = 0;
      jj++;
      var v566 = arrayOfSequences$$1.length;
      v322 = jj < v566;
    }
    totalBasesShown = totalBasesShown + basePerLine$$4;
    i$$12 = totalBasesShown;
    var v323 = outputWindow.document;
    v323.write("\n");
    var v679 = arrayOfSequences$$1[0];
    var v567 = v679.length;
    v324 = totalBasesShown < v567;
  }
  return true;
}
document.onload = v2;
var v325 = document.getElementById("submitbtn");
v325.onclick = v3;
var v326 = document.getElementById("clearbtn");
v326.onclick = v4

}
