introspect(JAM.policy.pFull) {
function v4() {
  var v677 = document.forms;
  var v566 = v677[0];
  var v325 = v566.elements;
  var v5 = v325[0];
  v5.value = " ";
  return;
}
function v3() {
  try {
    colorAlignCons();
  } catch (e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    alert(v6);
  }
  return;
}
function v2() {
  var v326 = document.main_form;
  var v7 = v326.main_submit;
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
  var v327 = arrayOfSequences.length;
  var v9 = v327 < 2;
  if (v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v328 = arrayOfTitles.length;
  var v11 = i$$1 < v328;
  for (;v11;) {
    var v744 = arrayOfTitles[i$$1];
    var v678 = v744.search(/\S/);
    var v567 = v678 == -1;
    var v680 = !v567;
    if (v680) {
      var v745 = arrayOfSequences[i$$1];
      var v679 = v745.search(/\S/);
      v567 = v679 == -1;
    }
    var v329 = v567;
    var v569 = !v329;
    if (v569) {
      var v681 = arrayOfSequences[i$$1];
      var v568 = v681.length;
      v329 = v568 != lengthOfAlign;
    }
    var v10 = v329;
    if (v10) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v330 = arrayOfTitles.length;
    v11 = i$$1 < v330;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v784 = codonTable.search(/AmAcid/);
  var v746 = v784 == -1;
  var v786 = !v746;
  if (v786) {
    var v785 = codonTable.search(/Codon/);
    v746 = v785 == -1;
  }
  var v682 = v746;
  var v748 = !v682;
  if (v748) {
    var v747 = codonTable.search(/Number/);
    v682 = v747 == -1;
  }
  var v570 = v682;
  var v684 = !v570;
  if (v684) {
    var v683 = codonTable.search(/\/1000/);
    v570 = v683 == -1;
  }
  var v331 = v570;
  var v572 = !v331;
  if (v572) {
    var v571 = codonTable.search(/Fraction\s*\.\./);
    v331 = v571 == -1;
  }
  var v12 = v331;
  if (v12) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v573 = formElement.value;
  var v332 = v573.search(/\S/);
  var v13 = v332 == -1;
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
  var v333 = arrayOfPatterns.length;
  var v16 = z$$2 < v333;
  for (;v16;) {
    var v574 = arrayOfPatterns[z$$2];
    var v334 = v574.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v14 = v334 == -1;
    if (v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v575 = arrayOfPatterns[z$$2];
    var v335 = moreExpressionCheck(v575);
    var v15 = v335 == false;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v336 = arrayOfPatterns.length;
    v16 = z$$2 < v336;
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v337 = arrayOfPatterns.length;
  var v22 = j < v337;
  for (;v22;) {
    var v576 = arrayOfPatterns[j];
    var v338 = v576.match(/\/.+\//);
    var v19 = v338 + "gi";
    var v884 = eval(v19);
    geneticCodeMatchExp[j] = v884;
    var v339 = arrayOfPatterns[j];
    var v20 = v339.match(/=[a-zA-Z\*]/);
    var v885 = v20.toString();
    geneticCodeMatchResult[j] = v885;
    var v21 = geneticCodeMatchResult[j];
    var v886 = v21.replace(/=/g, "");
    geneticCodeMatchResult[j] = v886;
    j++;
    var v340 = arrayOfPatterns.length;
    v22 = j < v340;
  }
  var i$$2 = 0;
  var v577 = testSequence.length;
  var v341 = v577 - 3;
  var v29 = i$$2 <= v341;
  for (;v29;) {
    var v23 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v23);
    j = 0;
    var v342 = geneticCodeMatchExp.length;
    var v27 = j < v342;
    for (;v27;) {
      var v578 = geneticCodeMatchExp[j];
      var v343 = codon.search(v578);
      var v26 = v343 != -1;
      if (v26) {
        var v25 = oneMatch == true;
        if (v25) {
          var v344 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v24 = v344 + ".";
          alert(v24);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v345 = geneticCodeMatchExp.length;
      v27 = j < v345;
    }
    var v28 = oneMatch == false;
    if (v28) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v579 = testSequence.length;
    var v346 = v579 - 3;
    v29 = i$$2 <= v346;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v347 = arrayOfPatterns$$1.length;
  var v31 = z$$3 < v347;
  for (;v31;) {
    var v580 = arrayOfPatterns$$1[z$$3];
    var v348 = v580.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v30 = v348 != -1;
    if (v30) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v349 = arrayOfPatterns$$1.length;
    v31 = z$$3 < v349;
  }
  var i$$3 = 0;
  var v350 = arrayOfPatterns$$1.length;
  var v35 = i$$3 < v350;
  for (;v35;) {
    var v581 = arrayOfPatterns$$1[i$$3];
    var v351 = "[" + v581;
    var v32 = v351 + "]";
    var re = new RegExp(v32, "gi");
    var j$$1 = i$$3 + 1;
    var v352 = arrayOfPatterns$$1.length;
    var v34 = j$$1 < v352;
    for (;v34;) {
      var v582 = arrayOfPatterns$$1[j$$1];
      var v353 = v582.search(re);
      var v33 = v353 != -1;
      if (v33) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v354 = arrayOfPatterns$$1.length;
      v34 = j$$1 < v354;
    }
    i$$3++;
    var v355 = arrayOfPatterns$$1.length;
    v35 = i$$3 < v355;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v356 = arrayOfPatterns$$2.length;
  var v38 = z$$4 < v356;
  for (;v38;) {
    var v583 = arrayOfPatterns$$2[z$$4];
    var v357 = v583.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v36 = v357 == -1;
    if (v36) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v584 = arrayOfPatterns$$2[z$$4];
    var v358 = moreExpressionCheck(v584);
    var v37 = v358 == false;
    if (v37) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v359 = arrayOfPatterns$$2.length;
    v38 = z$$4 < v359;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v685 = getSequenceFromFasta(text$$7);
  var v585 = v685.replace(/[^A-Za-z]/g, "");
  var v360 = v585.length;
  var v40 = v360 > maxInput;
  if (v40) {
    var v361 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v39 = v361 + " characters.";
    alert(v39);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v362 = text$$8.length;
  var v42 = v362 > maxInput$$1;
  if (v42) {
    var v363 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v41 = v363 + " characters.";
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
  var v364 = alignArray.length;
  var v49 = v364 < 3;
  if (v49) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v365 = alignArray.length;
  var v51 = i$$4 < v365;
  for (;v51;) {
    var v586 = alignArray[i$$4];
    var v366 = v586.search(/[^\s]+\s/);
    var v50 = v366 == -1;
    if (v50) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v367 = alignArray.length;
    v51 = i$$4 < v367;
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
  var v368 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v54 = v368 != -1;
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
  var v369 = sequence$$2.length;
  var v55 = "&gt;results for " + v369;
  var stringToReturn = v55 + " residue sequence ";
  var v370 = fastaSequenceTitle.search(/[^\s]/);
  var v57 = v370 != -1;
  if (v57) {
    var v371 = stringToReturn + '"';
    var v56 = v371 + fastaSequenceTitle;
    stringToReturn = v56 + '"';
  }
  var v372 = stringToReturn + ' starting "';
  var v373 = sequence$$2.substring(0, 10);
  var v58 = v372 + v373;
  stringToReturn = v58 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v374 = sequenceOne.length;
  var v59 = "Search results for " + v374;
  var stringToReturn$$1 = v59 + " residue sequence ";
  var v375 = fastaSequenceTitleOne.search(/[^\s]/);
  var v61 = v375 != -1;
  if (v61) {
    var v376 = stringToReturn$$1 + '"';
    var v60 = v376 + fastaSequenceTitleOne;
    stringToReturn$$1 = v60 + '"';
  }
  var v377 = stringToReturn$$1 + ' starting "';
  var v378 = sequenceOne.substring(0, 10);
  var v62 = v377 + v378;
  stringToReturn$$1 = v62 + '"\n';
  var v379 = stringToReturn$$1 + "and ";
  var v380 = sequenceTwo.length;
  var v63 = v379 + v380;
  stringToReturn$$1 = v63 + " residue sequence ";
  var v381 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v65 = v381 != -1;
  if (v65) {
    var v382 = stringToReturn$$1 + '"';
    var v64 = v382 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v64 + '"';
  }
  var v383 = stringToReturn$$1 + ' starting "';
  var v384 = sequenceTwo.substring(0, 10);
  var v66 = v383 + v384;
  stringToReturn$$1 = v66 + '"';
  var v67 = '<div class="info">' + stringToReturn$$1;
  return v67 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v68 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v68);
  var j$$2 = 0;
  var v385 = arrayOfPatterns$$3.length;
  var v70 = j$$2 < v385;
  for (;v70;) {
    var v587 = arrayOfPatterns$$3[j$$2];
    var v386 = v587.match(/\/.+\//);
    var v69 = v386 + "gi";
    var v887 = eval(v69);
    geneticCodeMatchExp$$1[j$$2] = v887;
    j$$2++;
    var v387 = arrayOfPatterns$$3.length;
    v70 = j$$2 < v387;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v71 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v71);
  var j$$3 = 0;
  var v388 = arrayOfPatterns$$4.length;
  var v74 = j$$3 < v388;
  for (;v74;) {
    var v389 = arrayOfPatterns$$4[j$$3];
    var v72 = v389.match(/=[a-zA-Z\*]/);
    var v888 = v72.toString();
    geneticCodeMatchResult$$1[j$$3] = v888;
    var v73 = geneticCodeMatchResult$$1[j$$3];
    var v889 = v73.replace(/=/g, "");
    geneticCodeMatchResult$$1[j$$3] = v889;
    j$$3++;
    var v390 = arrayOfPatterns$$4.length;
    v74 = j$$3 < v390;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v391 = sequence$$3.length;
  var v75 = "Results for " + v391;
  var stringToReturn$$2 = v75 + " residue sequence ";
  var v392 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v77 = v392 != -1;
  if (v77) {
    var v393 = stringToReturn$$2 + '"';
    var v76 = v393 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v76 + '"';
  }
  var v394 = stringToReturn$$2 + ' starting "';
  var v395 = sequence$$3.substring(0, 10);
  var v78 = v394 + v395;
  stringToReturn$$2 = v78 + '"';
  var v79 = '<div class="info">' + stringToReturn$$2;
  return v79 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v588 = "Results for " + topology;
  var v396 = v588 + " ";
  var v397 = sequence$$4.length;
  var v80 = v396 + v397;
  var stringToReturn$$3 = v80 + " residue sequence ";
  var v398 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v82 = v398 != -1;
  if (v82) {
    var v399 = stringToReturn$$3 + '"';
    var v81 = v399 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v81 + '"';
  }
  var v400 = stringToReturn$$3 + ' starting "';
  var v401 = sequence$$4.substring(0, 10);
  var v83 = v400 + v401;
  stringToReturn$$3 = v83 + '"';
  var v84 = '<div class="info">' + stringToReturn$$3;
  return v84 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v402 = sequenceOne$$1.length;
  var v85 = "Alignment results for " + v402;
  var stringToReturn$$4 = v85 + " residue sequence ";
  var v403 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v87 = v403 != -1;
  if (v87) {
    var v404 = stringToReturn$$4 + '"';
    var v86 = v404 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v86 + '"';
  }
  var v405 = stringToReturn$$4 + ' starting "';
  var v406 = sequenceOne$$1.substring(0, 10);
  var v88 = v405 + v406;
  stringToReturn$$4 = v88 + '"\n';
  var v407 = stringToReturn$$4 + "and ";
  var v408 = sequenceTwo$$1.length;
  var v89 = v407 + v408;
  stringToReturn$$4 = v89 + " residue sequence ";
  var v409 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v91 = v409 != -1;
  if (v91) {
    var v410 = stringToReturn$$4 + '"';
    var v90 = v410 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v90 + '"';
  }
  var v411 = stringToReturn$$4 + ' starting "';
  var v412 = sequenceTwo$$1.substring(0, 10);
  var v92 = v411 + v412;
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
    var v413 = Math.random();
    var v414 = components.length;
    var v94 = v413 * v414;
    tempNum = Math.floor(v94);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4++;
    v95 = j$$4 < lengthOut;
  }
  return sequenceArray.join("");
}
function getSequenceFromFasta(sequenceRecord) {
  var v415 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v96 = v415 != -1;
  if (v96) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "");
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v416 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v98 = v416 != -1;
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
  var v862 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v855 = v862 != -1;
  var v864 = !v855;
  if (v864) {
    var v863 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    v855 = v863 != -1;
  }
  var v846 = v855;
  var v857 = !v846;
  if (v857) {
    var v856 = expressionToCheck.search(/\[\]/);
    v846 = v856 != -1;
  }
  var v837 = v846;
  var v848 = !v837;
  if (v848) {
    var v847 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
    v837 = v847 != -1;
  }
  var v824 = v837;
  var v839 = !v824;
  if (v839) {
    var v838 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
    v824 = v838 != -1;
  }
  var v806 = v824;
  var v826 = !v806;
  if (v826) {
    var v825 = expressionToCheck.search(/\|\|/);
    v806 = v825 != -1;
  }
  var v787 = v806;
  var v808 = !v787;
  if (v808) {
    var v807 = expressionToCheck.search(/\/\|/);
    v787 = v807 != -1;
  }
  var v749 = v787;
  var v789 = !v749;
  if (v789) {
    var v788 = expressionToCheck.search(/\|\//);
    v749 = v788 != -1;
  }
  var v686 = v749;
  var v751 = !v686;
  if (v751) {
    var v750 = expressionToCheck.search(/\[.\]/);
    v686 = v750 != -1;
  }
  var v589 = v686;
  var v688 = !v589;
  if (v688) {
    var v687 = expressionToCheck.search(/\</);
    v589 = v687 != -1;
  }
  var v417 = v589;
  var v591 = !v417;
  if (v591) {
    var v590 = expressionToCheck.search(/\>/);
    v417 = v590 != -1;
  }
  var v99 = v417;
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
  _openWindow(title$$5);
  return;
}
function _openWindow(title$$6) {
  var isColor = true;
  outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  outputWindow.focus();
  var v104 = outputWindow.document;
  var v689 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v592 = v689 + "<head>\n";
  var v418 = v592 + "<title>Sequence Manipulation Suite</title>\n";
  var v105 = v418 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v104.write(v105);
  if (isColor) {
    var v106 = outputWindow.document;
    var v877 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v873 = v877 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v869 = v873 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v865 = v869 + "div.info {font-weight: bold}\n";
    var v858 = v865 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v849 = v858 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v840 = v849 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v827 = v840 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v809 = v827 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v790 = v809 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v752 = v790 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v690 = v752 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v593 = v690 + "td.many {color: #000000}\n";
    var v419 = v593 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v107 = v419 + "</style>\n";
    v106.write(v107);
  } else {
    var v108 = outputWindow.document;
    var v881 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v878 = v881 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v874 = v878 + "div.title {display: none}\n";
    var v870 = v874 + "div.info {font-weight: bold}\n";
    var v866 = v870 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v859 = v866 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v850 = v859 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v841 = v850 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v828 = v841 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v810 = v828 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v791 = v810 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v753 = v791 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v691 = v753 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v594 = v691 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v420 = v594 + "img {display: none}\n";
    var v109 = v420 + "</style>\n";
    v108.write(v109);
  }
  var v110 = outputWindow.document;
  var v692 = "</head>\n" + '<body class="main">\n';
  var v595 = v692 + '<div class="title">';
  var v421 = v595 + title$$6;
  var v111 = v421 + " results</div>\n";
  v110.write(v111);
  outputWindow.status = "Please Wait.";
  return;
}
function openWindowAlign(title$$7) {
  _openWindowAlign(title$$7, true);
  return;
}
function _openWindowAlign(title$$8, isBackground) {
  outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  outputWindow.focus();
  var v112 = outputWindow.document;
  var v693 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v596 = v693 + "<head>\n";
  var v422 = v596 + "<title>Sequence Manipulation Suite</title>\n";
  var v113 = v422 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v112.write(v113);
  if (isBackground) {
    var v114 = outputWindow.document;
    var v879 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v875 = v879 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v871 = v875 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v867 = v871 + "div.info {font-weight: bold}\n";
    var v860 = v867 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v851 = v860 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v842 = v851 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v829 = v842 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v811 = v829 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v792 = v811 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v754 = v792 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v694 = v754 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v597 = v694 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v423 = v597 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v115 = v423 + "</style>\n";
    v114.write(v115);
  } else {
    var v116 = outputWindow.document;
    var v883 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v882 = v883 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v880 = v882 + "div.title {display: none}\n";
    var v876 = v880 + "div.info {font-weight: bold}\n";
    var v872 = v876 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v868 = v872 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v861 = v868 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v852 = v861 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v843 = v852 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v830 = v843 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v812 = v830 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v793 = v812 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v755 = v793 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v695 = v755 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v598 = v695 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v424 = v598 + "img {display: none}\n";
    var v117 = v424 + "</style>\n";
    v116.write(v117);
  }
  var v118 = outputWindow.document;
  var v696 = "</head>\n" + '<body class="main">\n';
  var v599 = v696 + '<div class="title">';
  var v425 = v599 + title$$8;
  var v119 = v425 + " results</div>\n";
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
  var v426 = dnaSequence$$1.search(/./);
  var v120 = v426 != -1;
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
  var v427 = testArray[0];
  var v124 = v427 != testString;
  if (v124) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v428 = testString.search(re$$2);
  var v125 = v428 == -1;
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
  var v429 = testNum.toFixed(3);
  var v128 = v429 != 2489.824;
  if (v128) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v430 = testNum.toPrecision(5);
  var v129 = v430 != 2489.8;
  if (v129) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v431 = theNumber$$1.search(/\d/);
  var v130 = v431 == -1;
  if (v130) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v756 = emblFile.search(/ID/);
  var v697 = v756 == -1;
  var v758 = !v697;
  if (v758) {
    var v757 = emblFile.search(/AC/);
    v697 = v757 == -1;
  }
  var v600 = v697;
  var v699 = !v600;
  if (v699) {
    var v698 = emblFile.search(/DE/);
    v600 = v698 == -1;
  }
  var v432 = v600;
  var v602 = !v432;
  if (v602) {
    var v601 = emblFile.search(/SQ/);
    v432 = v601 == -1;
  }
  var v131 = v432;
  if (v131) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v433 = theNumber$$2.search(/\d/);
  var v132 = v433 == -1;
  if (v132) {
    alert("Please enter a number.");
    return false;
  }
  var v134 = theNumber$$2 > maxInput$$2;
  if (v134) {
    var v434 = "Please enter a number less than or equal to " + maxInput$$2;
    var v133 = v434 + ".";
    alert(v133);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v435 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v135 = v435 != -1;
  if (v135) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v436 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v136 = v436 != -1;
  if (v136) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v759 = genBankFile.search(/LOCUS/);
  var v700 = v759 == -1;
  var v761 = !v700;
  if (v761) {
    var v760 = genBankFile.search(/DEFINITION/);
    v700 = v760 == -1;
  }
  var v603 = v700;
  var v702 = !v603;
  if (v702) {
    var v701 = genBankFile.search(/ACCESSION/);
    v603 = v701 == -1;
  }
  var v437 = v603;
  var v605 = !v437;
  if (v605) {
    var v604 = genBankFile.search(/ORIGIN/);
    v437 = v604 == -1;
  }
  var v137 = v437;
  if (v137) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v762 = genBankFile$$1.search(/LOCUS/);
  var v703 = v762 == -1;
  var v764 = !v703;
  if (v764) {
    var v763 = genBankFile$$1.search(/DEFINITION/);
    v703 = v763 == -1;
  }
  var v606 = v703;
  var v705 = !v606;
  if (v705) {
    var v704 = genBankFile$$1.search(/ACCESSION/);
    v606 = v704 == -1;
  }
  var v438 = v606;
  var v608 = !v438;
  if (v608) {
    var v607 = genBankFile$$1.search(/ORIGIN/);
    v438 = v607 == -1;
  }
  var v138 = v438;
  if (v138) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v439 = genBankFile$$1.search(/FEATURES {13}/);
  var v139 = v439 == -1;
  if (v139) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v765 = emblFile$$1.search(/ID/);
  var v706 = v765 == -1;
  var v767 = !v706;
  if (v767) {
    var v766 = emblFile$$1.search(/AC/);
    v706 = v766 == -1;
  }
  var v609 = v706;
  var v708 = !v609;
  if (v708) {
    var v707 = emblFile$$1.search(/DE/);
    v609 = v707 == -1;
  }
  var v440 = v609;
  var v611 = !v440;
  if (v611) {
    var v610 = emblFile$$1.search(/SQ/);
    v440 = v610 == -1;
  }
  var v140 = v440;
  if (v140) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v441 = emblFile$$1.search(/^FT/m);
  var v141 = v441 == -1;
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
    var v442 = basePerLine / groupSize;
    var v145 = j$$6 <= v442;
    for (;v145;) {
      var v144 = k < groupSize;
      for (;v144;) {
        var v443 = k + i$$5;
        var v143 = text$$10.charAt(v443);
        lineOfText = lineOfText + v143;
        k = k + 1;
        v144 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v444 = basePerLine / groupSize;
      v145 = j$$6 <= v444;
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
    var v445 = adjustment < 0;
    if (v445) {
      v445 = adjusted >= 0;
    }
    var v149 = v445;
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
    var v446 = basePerLine$$2 / groupSize$$2;
    var v156 = j$$7 <= v446;
    for (;v156;) {
      var v152 = k$$1 < groupSize$$2;
      for (;v152;) {
        var v447 = i$$6 + k$$1;
        var v150 = v447 >= stopBase$$2;
        if (v150) {
          break;
        }
        var v448 = k$$1 + i$$6;
        var v151 = text$$12.charAt(v448);
        lineOfText$$1 = lineOfText$$1 + v151;
        k$$1 = k$$1 + 1;
        v152 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v154 = numberPosition$$1 == "above";
      if (v154) {
        var v449 = adjustNumbering(i$$6, numberingAdjustment);
        var v153 = rightNum(v449, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v153;
      }
      var v155 = i$$6 >= stopBase$$2;
      if (v155) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v450 = basePerLine$$2 / groupSize$$2;
      v156 = j$$7 <= v450;
    }
    var v179 = numberPosition$$1 == "left";
    if (v179) {
      var v157 = outputWindow.document;
      var v709 = adjustNumbering(lineNum, numberingAdjustment);
      var v612 = rightNum(v709, "", 8, tabIn$$3);
      var v451 = v612 + lineOfText$$1;
      var v158 = v451 + "\n";
      v157.write(v158);
      var v162 = strands$$1 == "two";
      if (v162) {
        var v159 = outputWindow.document;
        var v710 = adjustNumbering(lineNum, numberingAdjustment);
        var v613 = rightNum(v710, "", 8, tabIn$$3);
        var v614 = complement(lineOfText$$1);
        var v452 = v613 + v614;
        var v160 = v452 + "\n";
        v159.write(v160);
        var v161 = outputWindow.document;
        v161.write("\n");
      }
    } else {
      var v178 = numberPosition$$1 == "right";
      if (v178) {
        var v163 = outputWindow.document;
        var v615 = adjustNumbering(i$$6, numberingAdjustment);
        var v453 = lineOfText$$1 + v615;
        var v164 = v453 + "\n";
        v163.write(v164);
        var v168 = strands$$1 == "two";
        if (v168) {
          var v165 = outputWindow.document;
          var v616 = complement(lineOfText$$1);
          var v617 = adjustNumbering(i$$6, numberingAdjustment);
          var v454 = v616 + v617;
          var v166 = v454 + "\n";
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
            var v455 = complement(lineOfText$$1);
            var v174 = v455 + "\n";
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
    var v456 = basePerLine$$3 / groupSize$$3;
    var v187 = j$$8 <= v456;
    for (;v187;) {
      var v183 = k$$2 < groupSize$$3;
      for (;v183;) {
        var v457 = i$$7 + k$$2;
        var v181 = v457 >= stopBase$$3;
        if (v181) {
          break;
        }
        var v458 = k$$2 + i$$7;
        var v182 = text$$13.charAt(v458);
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
      var v459 = basePerLine$$3 / groupSize$$3;
      v187 = j$$8 <= v459;
    }
    var v198 = numberPosition$$2 == "left";
    if (v198) {
      var v188 = outputWindow.document;
      var v618 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v460 = v618 + lineOfText$$2;
      var v189 = v460 + "\n";
      v188.write(v189);
    } else {
      var v197 = numberPosition$$2 == "right";
      if (v197) {
        var v190 = outputWindow.document;
        var v461 = lineOfText$$2 + i$$7;
        var v191 = v461 + "\n";
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
  var v711 = sequence$$13.length;
  var v619 = v711 <= firstIndexToMutate;
  var v712 = !v619;
  if (v712) {
    v619 = lastIndexToMutate < 0;
  }
  var v462 = v619;
  var v620 = !v462;
  if (v620) {
    v462 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v200 = v462;
  if (v200) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v208 = i$$8 < numMut;
  for (;v208;) {
    maxNum = sequence$$13.length;
    var v463 = Math.random();
    var v201 = v463 * maxNum;
    randNum = Math.floor(v201);
    var v464 = randNum < firstIndexToMutate;
    var v621 = !v464;
    if (v621) {
      v464 = randNum > lastIndexToMutate;
    }
    var v202 = v464;
    if (v202) {
      numMut++;
      i$$8++;
      v208 = i$$8 < numMut;
      continue;
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for (;needNewChar;) {
      var v465 = Math.random();
      var v466 = components$$1.length;
      var v203 = v465 * v466;
      componentsIndex = Math.round(v203);
      var v467 = components$$1.length;
      var v204 = componentsIndex == v467;
      if (v204) {
        componentsIndex = 0;
      }
      var v468 = components$$1[componentsIndex];
      var v205 = v468 != currentChar;
      if (v205) {
        needNewChar = false;
      }
    }
    var v469 = sequence$$13.substring(0, randNum);
    var v470 = components$$1[componentsIndex];
    var v206 = v469 + v470;
    var v471 = randNum + 1;
    var v472 = sequence$$13.length;
    var v207 = sequence$$13.substring(v471, v472);
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
    var v473 = Math.random();
    var v474 = components$$2.length;
    var v211 = v473 * v474;
    tempNum$$1 = Math.floor(v211);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v475 = sequence$$14.length;
    var v214 = v475 == 60;
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
    var v713 = sequence$$15.length;
    var v622 = v713 - lookAhead;
    var v623 = sequence$$15.length;
    var v476 = sequence$$15.substring(v622, v623);
    var v219 = v476 + sequence$$15;
    var v220 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v219 + v220;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v222 = outputWindow.document;
  v222.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  var v223 = outputWindow.document;
  var v714 = '<tr><td class="title" width="200px">' + "Site:";
  var v624 = v714 + '</td><td class="title">';
  var v477 = v624 + "Positions:";
  var v224 = v477 + "</td></tr>\n";
  v223.write(v224);
  var i$$9 = 0;
  var v478 = arrayOfItems.length;
  var v240 = i$$9 < v478;
  for (;v240;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v479 = arrayOfItems[i$$9];
    var v225 = v479.match(/\/.+\//);
    matchExp = v225 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    var v715 = arrayOfItems[i$$9];
    var v625 = v715.match(/\)\D*\d+/);
    var v480 = v625.toString();
    var v226 = v480.replace(/\)\D*/, "");
    cutDistance = parseFloat(v226);
    var v232 = matchArray$$1 = matchExp.exec(sequence$$15);
    for (;v232;) {
      var v227 = matchExp.lastIndex;
      matchPosition = v227 - cutDistance;
      var v481 = matchPosition >= lowerLimit;
      if (v481) {
        v481 = matchPosition < upperLimit;
      }
      var v230 = v481;
      if (v230) {
        timesFound++;
        var v228 = tempString$$1 + ", ";
        var v482 = matchPosition - shiftValue;
        var v229 = v482 + 1;
        tempString$$1 = v228 + v229;
      }
      var v483 = matchExp.lastIndex;
      var v626 = RegExp.lastMatch;
      var v484 = v626.length;
      var v231 = v483 - v484;
      matchExp.lastIndex = v231 + 1;
      v232 = matchArray$$1 = matchExp.exec(sequence$$15);
    }
    var v485 = tempString$$1.search(/\d/);
    var v233 = v485 != -1;
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
    var v831 = '<tr><td class="' + backGroundClass;
    var v813 = v831 + '">';
    var v853 = arrayOfItems[i$$9];
    var v844 = v853.match(/\([^\(]+\)/);
    var v832 = v844.toString();
    var v814 = v832.replace(/\(|\)/g, "");
    var v794 = v813 + v814;
    var v768 = v794 + '</td><td class="';
    var v716 = v768 + backGroundClass;
    var v627 = v716 + '">';
    var v486 = v627 + tempString$$1;
    var v239 = v486 + "</td></tr>\n";
    v238.write(v239);
    timesFound = 0;
    i$$9++;
    var v487 = arrayOfItems.length;
    v240 = i$$9 < v487;
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
  var v795 = '<tr><td class="title">' + "Pattern:";
  var v769 = v795 + '</td><td class="title">';
  var v717 = v769 + "Times found:";
  var v628 = v717 + '</td><td class="title">';
  var v488 = v628 + "Percentage:";
  var v244 = v488 + "</td></tr>\n";
  v243.write(v244);
  var i$$10 = 0;
  var v489 = arrayOfItems$$1.length;
  var v253 = i$$10 < v489;
  for (;v253;) {
    var tempNumber = 0;
    var v490 = arrayOfItems$$1[i$$10];
    var v245 = v490.match(/\/[^\/]+\//);
    var matchExp$$1 = v245 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    var v491 = sequence$$16.search(matchExp$$1);
    var v247 = v491 != -1;
    if (v247) {
      var v246 = sequence$$16.match(matchExp$$1);
      tempNumber = v246.length;
    }
    var percentage = 0;
    var v629 = originalLength + 1;
    var v770 = arrayOfItems$$1[i$$10];
    var v718 = v770.match(/\d+/);
    var v630 = parseFloat(v718);
    var v492 = v629 - v630;
    var v250 = v492 > 0;
    if (v250) {
      var v248 = 100 * tempNumber;
      var v493 = originalLength + 1;
      var v719 = arrayOfItems$$1[i$$10];
      var v631 = v719.match(/\d+/);
      var v494 = parseFloat(v631);
      var v249 = v493 - v494;
      percentage = v248 / v249;
    }
    var v251 = outputWindow.document;
    var v854 = arrayOfItems$$1[i$$10];
    var v845 = v854.match(/\([^\(]+\)\b/);
    var v833 = v845.toString();
    var v815 = v833.replace(/\(|\)/g, "");
    var v796 = "<tr><td>" + v815;
    var v771 = v796 + "</td><td>";
    var v720 = v771 + tempNumber;
    var v632 = v720 + "</td><td>";
    var v633 = percentage.toFixed(2);
    var v495 = v632 + v633;
    var v252 = v495 + "</td></tr>\n";
    v251.write(v252);
    i$$10++;
    var v496 = arrayOfItems$$1.length;
    v253 = i$$10 < v496;
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
  var v497 = sequence$$17.length;
  var v261 = v497 > 0;
  for (;v261;) {
    maxNum$$1 = sequence$$17.length;
    var v498 = Math.random();
    var v255 = v498 * maxNum$$1;
    randNum$$1 = Math.floor(v255);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v256 = randNum$$1 + 1;
    var v257 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v256, v257);
    sequence$$17 = tempString1 + tempString2;
    var v499 = tempSeq.length;
    var v260 = v499 == 60;
    if (v260) {
      var v258 = outputWindow.document;
      var v259 = tempSeq + "\n";
      v258.write(v259);
      tempSeq = "";
    }
    var v500 = sequence$$17.length;
    v261 = v500 > 0;
  }
  var v262 = outputWindow.document;
  var v263 = tempSeq + "\n";
  v262.write(v263);
  return true;
}
function colorAlignCons() {
  var theDocument = document;
  var maxInput$$3 = 2E4;
  var v501 = testScript();
  var v264 = v501 == false;
  if (v264) {
    return;
  }
  var theAlignment = "";
  var alignArray$$1 = new Array;
  var groupString = "";
  var arrayOfGroups = new Array;
  var titleArray = new Array;
  var sequenceArray$$1 = new Array;
  var longestTitle;
  var v816 = theDocument.forms;
  var v797 = v816[0];
  var v772 = v797.elements;
  var v721 = v772[0];
  var v634 = checkFormElement(v721);
  var v502 = v634 == false;
  var v636 = !v502;
  if (v636) {
    var v834 = theDocument.forms;
    var v817 = v834[0];
    var v798 = v817.elements;
    var v773 = v798[0];
    var v722 = v773.value;
    var v635 = checkTextLength(v722, maxInput$$3);
    v502 = v635 == false;
  }
  var v265 = v502;
  if (v265) {
    return;
  }
  var v774 = theDocument.forms;
  var v723 = v774[0];
  var v637 = v723.elements;
  var v503 = v637[0];
  var v266 = v503.value;
  theAlignment = "X" + v266;
  alignArray$$1 = theAlignment.split(/[>%#]/);
  var v504 = earlyCheckAlign(alignArray$$1);
  var v267 = v504 == false;
  if (v267) {
    return;
  }
  var i$$11 = 1;
  var v505 = alignArray$$1.length;
  var v277 = i$$11 < v505;
  for (;v277;) {
    var v268 = i$$11 - 1;
    var v506 = alignArray$$1[i$$11];
    var v890 = v506.match(/[^\f\n\r]+[\f\n\r]/);
    titleArray[v268] = v890;
    var v269 = i$$11 - 1;
    var v775 = i$$11 - 1;
    var v724 = titleArray[v775];
    var v638 = v724.toString();
    var v507 = filterFastaTitle(v638);
    var v891 = v507.replace(/[\f\n\r]/g, "");
    titleArray[v269] = v891;
    var v270 = i$$11 - 1;
    var v639 = i$$11 - 1;
    var v508 = titleArray[v639];
    var v892 = v508.substring(0, 20);
    titleArray[v270] = v892;
    var v274 = i$$11 == 1;
    if (v274) {
      var v509 = i$$11 - 1;
      var v271 = titleArray[v509];
      longestTitle = v271.length;
    } else {
      var v725 = i$$11 - 1;
      var v640 = titleArray[v725];
      var v510 = v640.length;
      var v273 = v510 > longestTitle;
      if (v273) {
        var v511 = i$$11 - 1;
        var v272 = titleArray[v511];
        longestTitle = v272.length;
      }
    }
    var v275 = i$$11 - 1;
    var v512 = alignArray$$1[i$$11];
    var v893 = v512.replace(/[^\f\n\r]+[\f\n\r]/, "");
    sequenceArray$$1[v275] = v893;
    var v276 = i$$11 - 1;
    var v641 = i$$11 - 1;
    var v513 = sequenceArray$$1[v641];
    var v894 = filterAlignSeq(v513);
    sequenceArray$$1[v276] = v894;
    i$$11++;
    var v514 = alignArray$$1.length;
    v277 = i$$11 < v514;
  }
  var spaceString = "                    ";
  i$$11 = 0;
  var v515 = titleArray.length;
  var v281 = i$$11 < v515;
  for (;v281;) {
    var v642 = titleArray[i$$11];
    var v516 = v642.length;
    var v280 = v516 < longestTitle;
    if (v280) {
      var v278 = titleArray[i$$11];
      var v726 = titleArray[i$$11];
      var v643 = v726.length;
      var v517 = longestTitle - v643;
      var v279 = spaceString.substring(0, v517);
      titleArray[i$$11] = v278 + v279;
    }
    i$$11++;
    var v518 = titleArray.length;
    v281 = i$$11 < v518;
  }
  var v519 = checkAlign(titleArray, sequenceArray$$1);
  var v282 = v519 == false;
  if (v282) {
    return;
  }
  var v799 = theDocument.forms;
  var v776 = v799[0];
  var v727 = v776.elements;
  var v644 = v727[7];
  var v520 = v644.value;
  var v283 = v520.replace(/\s/g, "");
  groupString = v283.toUpperCase();
  arrayOfGroups = groupString.split(/,/);
  var v521 = checkGroupInput(arrayOfGroups);
  var v284 = v521 == false;
  if (v284) {
    return;
  }
  var isBackground$$1;
  var v835 = theDocument.forms;
  var v818 = v835[0];
  var v800 = v818.elements;
  var v777 = v800[6];
  var v728 = v777.options;
  var v836 = theDocument.forms;
  var v819 = v836[0];
  var v801 = v819.elements;
  var v778 = v801[6];
  var v729 = v778.selectedIndex;
  var v645 = v728[v729];
  var v522 = v645.value;
  var v285 = v522 == "background";
  if (v285) {
    isBackground$$1 = true;
  } else {
    isBackground$$1 = false;
  }
  _openWindowAlign("Color Align Conservation", isBackground$$1);
  openPre();
  var v820 = theDocument.forms;
  var v802 = v820[0];
  var v779 = v802.elements;
  var v730 = v779[4];
  var v646 = v730.options;
  var v821 = theDocument.forms;
  var v803 = v821[0];
  var v780 = v803.elements;
  var v731 = v780[4];
  var v647 = v731.selectedIndex;
  var v523 = v646[v647];
  var v286 = v523.value;
  var v822 = theDocument.forms;
  var v804 = v822[0];
  var v781 = v804.elements;
  var v732 = v781[5];
  var v648 = v732.options;
  var v823 = theDocument.forms;
  var v805 = v823[0];
  var v782 = v805.elements;
  var v733 = v782[5];
  var v649 = v733.selectedIndex;
  var v524 = v648[v649];
  var v287 = v524.value;
  var v783 = theDocument.forms;
  var v734 = v783[0];
  var v650 = v734.elements;
  var v525 = v650[8];
  var v288 = v525.value;
  colorAlign(titleArray, sequenceArray$$1, v286, v287, arrayOfGroups, v288, longestTitle);
  closePre();
  closeWindow();
  return;
}
function colorAlign(arrayOfTitles$$1, arrayOfSequences$$1, basePerLine$$4, consensus, arrayOfGroups$$1, definedStarts, longestTitle$$1) {
  var v289 = arrayOfSequences$$1.length;
  var positions = new Array(v289);
  var v526 = definedStarts.search(/\S/);
  var v290 = v526 == -1;
  if (v290) {
    definedStarts = "0,0";
  }
  var definedStartsArray = definedStarts.split(/,/);
  var i$$12 = 0;
  var v527 = positions.length;
  var v294 = i$$12 < v527;
  for (;v294;) {
    var v528 = definedStartsArray.length;
    var v293 = i$$12 >= v528;
    if (v293) {
      positions[i$$12] = 0;
    } else {
      var v651 = definedStartsArray[i$$12];
      var v529 = v651.search(/\d/);
      var v292 = v529 != -1;
      if (v292) {
        var v530 = definedStartsArray[i$$12];
        var v291 = v530.replace(/[^\d\-]/g, "");
        var v895 = parseInt(v291);
        positions[i$$12] = v895;
      } else {
        alert("An incorrect starting position was encountered. It was set to 0.");
        outputWindow.focus();
        positions[i$$12] = 0;
      }
    }
    i$$12++;
    var v531 = positions.length;
    v294 = i$$12 < v531;
  }
  var totalBasesShown = 0;
  var v295 = parseInt(consensus);
  consensus = v295 / 100;
  basePerLine$$4 = parseInt(basePerLine$$4);
  var columnCount = 0;
  var arrayOfColumns = new Array(basePerLine$$4);
  i$$12 = 0;
  var v532 = arrayOfColumns.length;
  var v297 = i$$12 < v532;
  for (;v297;) {
    var v296 = arrayOfSequences$$1.length;
    var v896 = new Array(v296);
    arrayOfColumns[i$$12] = v896;
    i$$12++;
    var v533 = arrayOfColumns.length;
    v297 = i$$12 < v533;
  }
  i$$12 = 0;
  var columnSeq;
  var re$$3;
  var result;
  var output = "";
  var v652 = arrayOfSequences$$1[0];
  var v534 = v652.length;
  var v322 = totalBasesShown < v534;
  for (;v322;) {
    var jj = 0;
    var v535 = arrayOfSequences$$1.length;
    var v320 = jj < v535;
    for (;v320;) {
      var v536 = arrayOfTitles$$1[jj];
      var v298 = output + v536;
      output = v298 + " ";
      var v653 = totalBasesShown + basePerLine$$4;
      var v537 = i$$12 < v653;
      if (v537) {
        var v735 = arrayOfSequences$$1[0];
        var v654 = v735.length;
        v537 = i$$12 < v654;
      }
      var v315 = v537;
      for (;v315;) {
        var v301 = jj == 0;
        if (v301) {
          var k$$3 = 0;
          var v538 = arrayOfSequences$$1.length;
          var v300 = k$$3 < v538;
          for (;v300;) {
            var v299 = arrayOfColumns[columnCount];
            var v539 = arrayOfSequences$$1[k$$3];
            var v897 = v539.charAt(i$$12);
            v299[k$$3] = v897;
            k$$3++;
            var v540 = arrayOfSequences$$1.length;
            v300 = k$$3 < v540;
          }
        }
        var v736 = arrayOfSequences$$1[jj];
        var v655 = v736.charAt(i$$12);
        var v541 = v655 == ".";
        var v657 = !v541;
        if (v657) {
          var v737 = arrayOfSequences$$1[jj];
          var v656 = v737.charAt(i$$12);
          v541 = v656 == "-";
        }
        var v303 = v541;
        if (v303) {
          var v542 = output + '<span class="diff">';
          var v658 = arrayOfSequences$$1[jj];
          var v543 = v658.charAt(i$$12);
          var v302 = v542 + v543;
          output = v302 + "</span>";
          i$$12 = i$$12 + 1;
          columnCount++;
          var v659 = totalBasesShown + basePerLine$$4;
          var v544 = i$$12 < v659;
          if (v544) {
            var v738 = arrayOfSequences$$1[0];
            var v660 = v738.length;
            v544 = i$$12 < v660;
          }
          v315 = v544;
          continue;
        }
        var v304 = arrayOfColumns[columnCount];
        columnSeq = v304.join(",");
        var v545 = arrayOfSequences$$1[jj];
        var v305 = v545.charAt(i$$12);
        re$$3 = new RegExp(v305, "gi");
        var v739 = columnSeq.match(re$$3);
        var v661 = v739.length;
        var v662 = arrayOfSequences$$1.length;
        var v546 = v661 / v662;
        var v307 = v546 >= consensus;
        if (v307) {
          var v547 = output + '<span class="ident">';
          var v663 = arrayOfSequences$$1[jj];
          var v548 = v663.charAt(i$$12);
          var v306 = v547 + v548;
          output = v306 + "</span>";
          i$$12 = i$$12 + 1;
          columnCount++;
          var v664 = totalBasesShown + basePerLine$$4;
          var v549 = i$$12 < v664;
          if (v549) {
            var v740 = arrayOfSequences$$1[0];
            var v665 = v740.length;
            v549 = i$$12 < v665;
          }
          v315 = v549;
          continue;
        }
        result = 1;
        var m = 0;
        var v550 = arrayOfGroups$$1.length;
        var v311 = m < v550;
        for (;v311;) {
          var v666 = arrayOfGroups$$1[m];
          var v551 = v666.search(re$$3);
          var v310 = v551 != -1;
          if (v310) {
            var v667 = arrayOfGroups$$1[m];
            var v552 = "[" + v667;
            var v308 = v552 + "]";
            re$$3 = new RegExp(v308, "gi");
            var v309 = columnSeq.match(re$$3);
            result = v309.length;
            break;
          }
          m++;
          var v553 = arrayOfGroups$$1.length;
          v311 = m < v553;
        }
        var v668 = arrayOfSequences$$1.length;
        var v554 = result / v668;
        var v313 = v554 >= consensus;
        if (v313) {
          var v555 = output + '<span class="sim">';
          var v669 = arrayOfSequences$$1[jj];
          var v556 = v669.charAt(i$$12);
          var v312 = v555 + v556;
          output = v312 + "</span>";
          i$$12 = i$$12 + 1;
          columnCount++;
          var v670 = totalBasesShown + basePerLine$$4;
          var v557 = i$$12 < v670;
          if (v557) {
            var v741 = arrayOfSequences$$1[0];
            var v671 = v741.length;
            v557 = i$$12 < v671;
          }
          v315 = v557;
          continue;
        }
        var v558 = output + '<span class="diff">';
        var v672 = arrayOfSequences$$1[jj];
        var v559 = v672.charAt(i$$12);
        var v314 = v558 + v559;
        output = v314 + "</span>";
        i$$12 = i$$12 + 1;
        columnCount++;
        var v673 = totalBasesShown + basePerLine$$4;
        var v560 = i$$12 < v673;
        if (v560) {
          var v742 = arrayOfSequences$$1[0];
          var v674 = v742.length;
          v560 = i$$12 < v674;
        }
        v315 = v560;
      }
      var v316 = positions[jj];
      var v743 = arrayOfSequences$$1[jj];
      var v675 = v743.substring(totalBasesShown, i$$12);
      var v561 = v675.replace(/\.|\-/g, "");
      var v317 = v561.length;
      positions[jj] = v316 + v317;
      var v562 = output + " ";
      var v563 = positions[jj];
      var v318 = v562 + v563;
      output = v318 + "\n";
      var v319 = outputWindow.document;
      v319.write(output);
      output = "";
      i$$12 = totalBasesShown;
      columnCount = 0;
      jj++;
      var v564 = arrayOfSequences$$1.length;
      v320 = jj < v564;
    }
    totalBasesShown = totalBasesShown + basePerLine$$4;
    i$$12 = totalBasesShown;
    var v321 = outputWindow.document;
    v321.write("\n");
    var v676 = arrayOfSequences$$1[0];
    var v565 = v676.length;
    v322 = totalBasesShown < v565;
  }
  return;
}
document.onload = v2;
var v323 = document.getElementById("submitbtn");
v323.onclick = v3;
var v324 = document.getElementById("clearbtn");
v324.onclick = v4

}
