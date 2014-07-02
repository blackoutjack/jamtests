
JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
function v4() {
  var v591 = document.forms;
  var v505 = v591[0];
  var v308 = v505.elements;
  var v5 = v308[0];
  v5.value = " ";
  return
}
function v3() {
  try {
    proteinIep(document)
  }catch(e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    alert(v6)
  }
  return
}
function v2() {
  var v309 = document.main_form;
  var v7 = v309.main_submit;
  v7.focus();
  return
}
function addReturns(sequence) {
  function v0(str$$7, p1, offset$$12, s$$2) {
    return p1 + "\n"
  }
  sequence = sequence.replace(/(.{60})/g, v0);
  return sequence
}
function checkAlign(arrayOfTitles, arrayOfSequences) {
  var v8 = arrayOfSequences[0];
  var lengthOfAlign = v8.length;
  var v310 = arrayOfSequences.length;
  var v9 = v310 < 2;
  if(v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v311 = arrayOfTitles.length;
  var v11 = i$$1 < v311;
  for(;v11;) {
    var v592 = arrayOfTitles[i$$1];
    var v506 = v592.search(/\S/);
    var v312 = v506 == -1;
    var v508 = !v312;
    if(v508) {
      var v649 = arrayOfSequences[i$$1];
      var v593 = v649.search(/\S/);
      var v507 = v593 == -1;
      var v595 = !v507;
      if(v595) {
        var v650 = arrayOfSequences[i$$1];
        var v594 = v650.length;
        v507 = v594 != lengthOfAlign
      }
      v312 = v507
    }
    var v10 = v312;
    if(v10) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v313 = arrayOfTitles.length;
    v11 = i$$1 < v313
  }
  return true
}
function checkCodonTable(codonTable) {
  var v509 = codonTable.search(/AmAcid/);
  var v314 = v509 == -1;
  var v511 = !v314;
  if(v511) {
    var v596 = codonTable.search(/Codon/);
    var v510 = v596 == -1;
    var v598 = !v510;
    if(v598) {
      var v651 = codonTable.search(/Number/);
      var v597 = v651 == -1;
      var v653 = !v597;
      if(v653) {
        var v689 = codonTable.search(/\/1000/);
        var v652 = v689 == -1;
        var v691 = !v652;
        if(v691) {
          var v690 = codonTable.search(/Fraction\s*\.\./);
          v652 = v690 == -1
        }
        v597 = v652
      }
      v510 = v597
    }
    v314 = v510
  }
  var v12 = v314;
  if(v12) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v512 = formElement.value;
  var v315 = v512.search(/\S/);
  var v13 = v315 == -1;
  if(v13) {
    alert("Please enter some text.");
    return false
  }
  return true
}
function checkGeneticCode(arrayOfPatterns) {
  var z$$2 = 0;
  var codon = "";
  var oneMatch = false;
  var testSequence = "gggggaggtggcgaggaagatgacgtggtagttgtcgcggcagctgccaggagaagtagcaagaaaaataacatgataattatcacgacaactacctggtgatgttgctagtaatattacttgttatttttctcgtcatcttcccggcgacgtcgccagcaacatcacctgctacttctcccgccacctccc";
  var v316 = arrayOfPatterns.length;
  var v16 = z$$2 < v316;
  for(;v16;) {
    var v513 = arrayOfPatterns[z$$2];
    var v317 = v513.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v14 = v317 == -1;
    if(v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    var v514 = arrayOfPatterns[z$$2];
    var v318 = moreExpressionCheck(v514);
    var v15 = v318 == false;
    if(v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v319 = arrayOfPatterns.length;
    v16 = z$$2 < v319
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v320 = arrayOfPatterns.length;
  var v25 = j < v320;
  for(;v25;) {
    var v19 = geneticCodeMatchExp;
    var v20 = j;
    var v599 = arrayOfPatterns[j];
    var v515 = v599.match(/\/.+\//);
    var v321 = v515 + "gi";
    var v796 = eval(v321);
    v19[v20] = v796;
    var v21 = geneticCodeMatchResult;
    var v22 = j;
    var v516 = arrayOfPatterns[j];
    var v322 = v516.match(/=[a-zA-Z\*]/);
    var v797 = v322.toString();
    v21[v22] = v797;
    var v23 = geneticCodeMatchResult;
    var v24 = j;
    var v323 = geneticCodeMatchResult[j];
    var v798 = v323.replace(/=/g, "");
    v23[v24] = v798;
    j = j + 1;
    var v324 = arrayOfPatterns.length;
    v25 = j < v324
  }
  var i$$2 = 0;
  var v517 = testSequence.length;
  var v325 = v517 - 3;
  var v32 = i$$2 <= v325;
  for(;v32;) {
    var v26 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v26);
    j = 0;
    var v326 = geneticCodeMatchExp.length;
    var v30 = j < v326;
    for(;v30;) {
      var v518 = geneticCodeMatchExp[j];
      var v327 = codon.search(v518);
      var v29 = v327 != -1;
      if(v29) {
        var v28 = oneMatch == true;
        if(v28) {
          var v328 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v27 = v328 + ".";
          alert(v27);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v329 = geneticCodeMatchExp.length;
      v30 = j < v329
    }
    var v31 = oneMatch == false;
    if(v31) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v519 = testSequence.length;
    var v330 = v519 - 3;
    v32 = i$$2 <= v330
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v331 = arrayOfPatterns$$1.length;
  var v34 = z$$3 < v331;
  for(;v34;) {
    var v520 = arrayOfPatterns$$1[z$$3];
    var v332 = v520.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v33 = v332 != -1;
    if(v33) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v333 = arrayOfPatterns$$1.length;
    v34 = z$$3 < v333
  }
  var i$$3 = 0;
  var v334 = arrayOfPatterns$$1.length;
  var v38 = i$$3 < v334;
  for(;v38;) {
    var v521 = arrayOfPatterns$$1[i$$3];
    var v335 = "[" + v521;
    var v35 = v335 + "]";
    var re = new RegExp(v35, "gi");
    var j$$1 = i$$3 + 1;
    var v336 = arrayOfPatterns$$1.length;
    var v37 = j$$1 < v336;
    for(;v37;) {
      var v522 = arrayOfPatterns$$1[j$$1];
      var v337 = v522.search(re);
      var v36 = v337 != -1;
      if(v36) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v338 = arrayOfPatterns$$1.length;
      v37 = j$$1 < v338
    }
    i$$3 = i$$3 + 1;
    var v339 = arrayOfPatterns$$1.length;
    v38 = i$$3 < v339
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v340 = arrayOfPatterns$$2.length;
  var v41 = z$$4 < v340;
  for(;v41;) {
    var v523 = arrayOfPatterns$$2[z$$4];
    var v341 = v523.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v39 = v341 == -1;
    if(v39) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    var v524 = arrayOfPatterns$$2[z$$4];
    var v342 = moreExpressionCheck(v524);
    var v40 = v342 == false;
    if(v40) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v343 = arrayOfPatterns$$2.length;
    v41 = z$$4 < v343
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v600 = getSequenceFromFasta(text$$7);
  var v525 = v600.replace(/[^A-Za-z]/g, "");
  var v344 = v525.length;
  var v43 = v344 > maxInput;
  if(v43) {
    var v345 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v42 = v345 + " characters.";
    alert(v42);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v346 = text$$8.length;
  var v45 = v346 > maxInput$$1;
  if(v45) {
    var v347 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v44 = v347 + " characters.";
    alert(v44);
    return false
  }else {
    return true
  }
  return
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
  return dnaSequence
}
function closeForm() {
  var v46 = outputWindow.document;
  v46.write("</form>");
  return true
}
function closePre() {
  var v47 = outputWindow.document;
  v47.write("</div>");
  var v48 = outputWindow.document;
  v48.write("</pre>\n");
  return
}
function closeTextArea() {
  var v49 = outputWindow.document;
  v49.write("</textarea>");
  return true
}
function closeWindow() {
  var v50 = outputWindow.document;
  v50.write("</body>\n</html>\n");
  outputWindow.status = "Done.";
  var v51 = outputWindow.document;
  v51.close();
  return true
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
  return sequence$$1
}
function earlyCheckAlign(alignArray) {
  var v348 = alignArray.length;
  var v52 = v348 < 3;
  if(v52) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v349 = alignArray.length;
  var v54 = i$$4 < v349;
  for(;v54;) {
    var v526 = alignArray[i$$4];
    var v350 = v526.search(/[^\s]+\s/);
    var v53 = v350 == -1;
    if(v53) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v351 = alignArray.length;
    v54 = i$$4 < v351
  }
  return true
}
function filterAlignSeq(alignSeq) {
  alignSeq = alignSeq.replace(/[^abcdefghiklmnpqrstvwxyz\.\-]/gi, "");
  return alignSeq
}
function filterFastaTitle(sequenceTitle) {
  sequenceTitle = sequenceTitle.replace(/\s{2,}/g, " ");
  sequenceTitle = sequenceTitle.replace(/^\s*/g, "");
  sequenceTitle = sequenceTitle.replace(/[\f\n\r\t]+$/g, "\n");
  return sequenceTitle.replace(/[\<\>]\n/gi, "")
}
function getArrayOfFasta(sequenceData) {
  var arrayOfFasta = new Array;
  var matchArray;
  var re$$1 = /\>[^\>]+/g;
  var v352 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v57 = v352 != -1;
  if(v57) {
    var v56 = matchArray = re$$1.exec(sequenceData);
    for(;v56;) {
      var v55 = matchArray[0];
      arrayOfFasta.push(v55);
      v56 = matchArray = re$$1.exec(sequenceData)
    }
  }else {
    arrayOfFasta[0] = sequenceData
  }
  return arrayOfFasta
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v353 = sequence$$2.length;
  var v58 = "&gt;results for " + v353;
  var stringToReturn = v58 + " residue sequence ";
  var v354 = fastaSequenceTitle.search(/[^\s]/);
  var v60 = v354 != -1;
  if(v60) {
    var v355 = stringToReturn + '"';
    var v59 = v355 + fastaSequenceTitle;
    stringToReturn = v59 + '"'
  }
  var v356 = stringToReturn + ' starting "';
  var v357 = sequence$$2.substring(0, 10);
  var v61 = v356 + v357;
  stringToReturn = v61 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v358 = sequenceOne.length;
  var v62 = "Search results for " + v358;
  var stringToReturn$$1 = v62 + " residue sequence ";
  var v359 = fastaSequenceTitleOne.search(/[^\s]/);
  var v64 = v359 != -1;
  if(v64) {
    var v360 = stringToReturn$$1 + '"';
    var v63 = v360 + fastaSequenceTitleOne;
    stringToReturn$$1 = v63 + '"'
  }
  var v361 = stringToReturn$$1 + ' starting "';
  var v362 = sequenceOne.substring(0, 10);
  var v65 = v361 + v362;
  stringToReturn$$1 = v65 + '"\n';
  var v363 = stringToReturn$$1 + "and ";
  var v364 = sequenceTwo.length;
  var v66 = v363 + v364;
  stringToReturn$$1 = v66 + " residue sequence ";
  var v365 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v68 = v365 != -1;
  if(v68) {
    var v366 = stringToReturn$$1 + '"';
    var v67 = v366 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v67 + '"'
  }
  var v367 = stringToReturn$$1 + ' starting "';
  var v368 = sequenceTwo.substring(0, 10);
  var v69 = v367 + v368;
  stringToReturn$$1 = v69 + '"';
  var v70 = '<div class="info">' + stringToReturn$$1;
  return v70 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v71 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v71);
  var j$$2 = 0;
  var v369 = arrayOfPatterns$$3.length;
  var v74 = j$$2 < v369;
  for(;v74;) {
    var v72 = geneticCodeMatchExp$$1;
    var v73 = j$$2;
    var v601 = arrayOfPatterns$$3[j$$2];
    var v527 = v601.match(/\/.+\//);
    var v370 = v527 + "gi";
    var v799 = eval(v370);
    v72[v73] = v799;
    j$$2 = j$$2 + 1;
    var v371 = arrayOfPatterns$$3.length;
    v74 = j$$2 < v371
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v75 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v75);
  var j$$3 = 0;
  var v372 = arrayOfPatterns$$4.length;
  var v80 = j$$3 < v372;
  for(;v80;) {
    var v76 = geneticCodeMatchResult$$1;
    var v77 = j$$3;
    var v528 = arrayOfPatterns$$4[j$$3];
    var v373 = v528.match(/=[a-zA-Z\*]/);
    var v800 = v373.toString();
    v76[v77] = v800;
    var v78 = geneticCodeMatchResult$$1;
    var v79 = j$$3;
    var v374 = geneticCodeMatchResult$$1[j$$3];
    var v801 = v374.replace(/=/g, "");
    v78[v79] = v801;
    j$$3 = j$$3 + 1;
    var v375 = arrayOfPatterns$$4.length;
    v80 = j$$3 < v375
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v376 = sequence$$3.length;
  var v81 = "Results for " + v376;
  var stringToReturn$$2 = v81 + " residue sequence ";
  var v377 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v83 = v377 != -1;
  if(v83) {
    var v378 = stringToReturn$$2 + '"';
    var v82 = v378 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v82 + '"'
  }
  var v379 = stringToReturn$$2 + ' starting "';
  var v380 = sequence$$3.substring(0, 10);
  var v84 = v379 + v380;
  stringToReturn$$2 = v84 + '"';
  var v85 = '<div class="info">' + stringToReturn$$2;
  return v85 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v529 = "Results for " + topology;
  var v381 = v529 + " ";
  var v382 = sequence$$4.length;
  var v86 = v381 + v382;
  var stringToReturn$$3 = v86 + " residue sequence ";
  var v383 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v88 = v383 != -1;
  if(v88) {
    var v384 = stringToReturn$$3 + '"';
    var v87 = v384 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v87 + '"'
  }
  var v385 = stringToReturn$$3 + ' starting "';
  var v386 = sequence$$4.substring(0, 10);
  var v89 = v385 + v386;
  stringToReturn$$3 = v89 + '"';
  var v90 = '<div class="info">' + stringToReturn$$3;
  return v90 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v387 = sequenceOne$$1.length;
  var v91 = "Alignment results for " + v387;
  var stringToReturn$$4 = v91 + " residue sequence ";
  var v388 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v93 = v388 != -1;
  if(v93) {
    var v389 = stringToReturn$$4 + '"';
    var v92 = v389 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v92 + '"'
  }
  var v390 = stringToReturn$$4 + ' starting "';
  var v391 = sequenceOne$$1.substring(0, 10);
  var v94 = v390 + v391;
  stringToReturn$$4 = v94 + '"\n';
  var v392 = stringToReturn$$4 + "and ";
  var v393 = sequenceTwo$$1.length;
  var v95 = v392 + v393;
  stringToReturn$$4 = v95 + " residue sequence ";
  var v394 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v97 = v394 != -1;
  if(v97) {
    var v395 = stringToReturn$$4 + '"';
    var v96 = v395 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v96 + '"'
  }
  var v396 = stringToReturn$$4 + ' starting "';
  var v397 = sequenceTwo$$1.substring(0, 10);
  var v98 = v396 + v397;
  stringToReturn$$4 = v98 + '"';
  var v99 = '<div class="info">' + stringToReturn$$4;
  return v99 + "</div>\n"
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v101 = j$$4 < lengthOut;
  for(;v101;) {
    var v398 = Math.random();
    var v399 = components.length;
    var v100 = v398 * v399;
    tempNum = Math.floor(v100);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4 = j$$4 + 1;
    v101 = j$$4 < lengthOut
  }
  return sequenceArray.join("")
}
function getSequenceFromFasta(sequenceRecord) {
  var v400 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v102 = v400 != -1;
  if(v102) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "")
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v401 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v104 = v401 != -1;
  if(v104) {
    var v103 = sequenceRecord$$1.match(/\>[^\f\n\r]+[\f\n\r]/, "");
    fastaTitle = v103.toString();
    fastaTitle = fastaTitle.replace(/\>|[\f\n\r]/g, "");
    fastaTitle = fastaTitle.replace(/\s{2,}/g, " ");
    fastaTitle = fastaTitle.replace(/[\<\>]/gi, "")
  }
  return fastaTitle
}
function moreExpressionCheck(expressionToCheck) {
  var v530 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v402 = v530 != -1;
  var v532 = !v402;
  if(v532) {
    var v602 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    var v531 = v602 != -1;
    var v604 = !v531;
    if(v604) {
      var v654 = expressionToCheck.search(/\[\]/);
      var v603 = v654 != -1;
      var v656 = !v603;
      if(v656) {
        var v692 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
        var v655 = v692 != -1;
        var v694 = !v655;
        if(v694) {
          var v713 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
          var v693 = v713 != -1;
          var v715 = !v693;
          if(v715) {
            var v734 = expressionToCheck.search(/\|\|/);
            var v714 = v734 != -1;
            var v736 = !v714;
            if(v736) {
              var v748 = expressionToCheck.search(/\/\|/);
              var v735 = v748 != -1;
              var v750 = !v735;
              if(v750) {
                var v758 = expressionToCheck.search(/\|\//);
                var v749 = v758 != -1;
                var v760 = !v749;
                if(v760) {
                  var v767 = expressionToCheck.search(/\[.\]/);
                  var v759 = v767 != -1;
                  var v769 = !v759;
                  if(v769) {
                    var v774 = expressionToCheck.search(/\</);
                    var v768 = v774 != -1;
                    var v776 = !v768;
                    if(v776) {
                      var v775 = expressionToCheck.search(/\>/);
                      v768 = v775 != -1
                    }
                    v759 = v768
                  }
                  v749 = v759
                }
                v735 = v749
              }
              v714 = v735
            }
            v693 = v714
          }
          v655 = v693
        }
        v603 = v655
      }
      v531 = v603
    }
    v402 = v531
  }
  var v105 = v402;
  if(v105) {
    return false
  }
  return true
}
function openForm() {
  var v106 = outputWindow.document;
  v106.write('<form action="">\n');
  return true
}
function openPre() {
  var v107 = outputWindow.document;
  v107.write("<pre>");
  var v108 = outputWindow.document;
  v108.write('<div class="pre">');
  return
}
function openTextArea() {
  var v109 = outputWindow.document;
  v109.write('<br /><textarea rows="6" cols="61">\n');
  return true
}
function openWindow(title$$6) {
  _openWindow(title$$6, true);
  return
}
function _openWindow(title$$7, isColor) {
  outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  outputWindow.focus();
  var v110 = outputWindow.document;
  var v605 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v533 = v605 + "<head>\n";
  var v403 = v533 + "<title>Sequence Manipulation Suite</title>\n";
  var v111 = v403 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v110.write(v111);
  if(isColor) {
    var v112 = outputWindow.document;
    var v789 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v785 = v789 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v781 = v785 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v777 = v781 + "div.info {font-weight: bold}\n";
    var v770 = v777 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v761 = v770 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v751 = v761 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v737 = v751 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v716 = v737 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v695 = v716 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v657 = v695 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v606 = v657 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v534 = v606 + "td.many {color: #000000}\n";
    var v404 = v534 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v113 = v404 + "</style>\n";
    v112.write(v113)
  }else {
    var v114 = outputWindow.document;
    var v793 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v790 = v793 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v786 = v790 + "div.title {display: none}\n";
    var v782 = v786 + "div.info {font-weight: bold}\n";
    var v778 = v782 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v771 = v778 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v762 = v771 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v752 = v762 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v738 = v752 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v717 = v738 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v696 = v717 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v658 = v696 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v607 = v658 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v535 = v607 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v405 = v535 + "img {display: none}\n";
    var v115 = v405 + "</style>\n";
    v114.write(v115)
  }
  var v116 = outputWindow.document;
  var v608 = "</head>\n" + '<body class="main">\n';
  var v536 = v608 + '<div class="title">';
  var v406 = v536 + title$$7;
  var v117 = v406 + " results</div>\n";
  v116.write(v117);
  outputWindow.status = "Please Wait.";
  return true
}
function openWindowAlign(title$$8) {
  _openWindowAlign(title$$8, true);
  return
}
function _openWindowAlign(title$$9, isBackground) {
  outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  outputWindow.focus();
  var v118 = outputWindow.document;
  var v609 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v537 = v609 + "<head>\n";
  var v407 = v537 + "<title>Sequence Manipulation Suite</title>\n";
  var v119 = v407 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v118.write(v119);
  if(isBackground) {
    var v120 = outputWindow.document;
    var v791 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v787 = v791 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v783 = v787 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v779 = v783 + "div.info {font-weight: bold}\n";
    var v772 = v779 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v763 = v772 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v753 = v763 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v739 = v753 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v718 = v739 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v697 = v718 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v659 = v697 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v610 = v659 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v538 = v610 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v408 = v538 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v121 = v408 + "</style>\n";
    v120.write(v121)
  }else {
    var v122 = outputWindow.document;
    var v795 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v794 = v795 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v792 = v794 + "div.title {display: none}\n";
    var v788 = v792 + "div.info {font-weight: bold}\n";
    var v784 = v788 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v780 = v784 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v773 = v780 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v764 = v773 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v754 = v764 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v740 = v754 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v719 = v740 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v698 = v719 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v660 = v698 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v611 = v660 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v539 = v611 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v409 = v539 + "img {display: none}\n";
    var v123 = v409 + "</style>\n";
    v122.write(v123)
  }
  var v124 = outputWindow.document;
  var v612 = "</head>\n" + '<body class="main">\n';
  var v540 = v612 + '<div class="title">';
  var v410 = v540 + title$$9;
  var v125 = v410 + " results</div>\n";
  v124.write(v125);
  outputWindow.status = "Please Wait.";
  return true
}
function removeFormatting(sequence$$5) {
  return sequence$$5.replace(/[\d\s]/g, "")
}
function removeNonDna(sequence$$6) {
  return sequence$$6.replace(/[^gatucryswkmbdhvnxGATUCRYSWKMBDHVNX]/g, "")
}
function removeNonDnaStrict(sequence$$7) {
  return sequence$$7.replace(/[^gatucGATUC]/g, "")
}
function removeNonProtein(sequence$$8) {
  return sequence$$8.replace(/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, "")
}
function removeNonProteinStrict(sequence$$9) {
  return sequence$$9.replace(/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, "")
}
function removeNonProteinAllowDegen(sequence$$10) {
  return sequence$$10.replace(/[^ABCDEFGHIKLMNPQRSTVWYXZabcdefghiklmnpqrstvwyxz\*]/g, "")
}
function removeNonProteinAllowX(sequence$$11) {
  return sequence$$11.replace(/[^ACDEFGHIKLMNPQRSTVWYZXacdefghiklmnpqrstvwyzx\*]/g, "")
}
function removeWhiteSpace(text$$9) {
  return text$$9.replace(/\s/g, "")
}
function removeNonLetters(sequence$$12) {
  return sequence$$12.replace(/[^A-Z]/gi, "")
}
function reverse(dnaSequence$$1) {
  var tempDnaArray = new Array;
  var v411 = dnaSequence$$1.search(/./);
  var v126 = v411 != -1;
  if(v126) {
    tempDnaArray = dnaSequence$$1.match(/./g);
    tempDnaArray = tempDnaArray.reverse();
    dnaSequence$$1 = tempDnaArray.join("")
  }
  return dnaSequence$$1
}
function rightNum(theNumber, sequenceToAppend, lengthOfColumn, tabIn) {
  var j$$5 = 0;
  var tempString = "";
  theNumber = theNumber.toString();
  j$$5 = theNumber.length;
  var v127 = j$$5 < lengthOfColumn;
  for(;v127;) {
    tempString = tempString + " ";
    j$$5 = j$$5 + 1;
    v127 = j$$5 < lengthOfColumn
  }
  var v128 = tempString + theNumber;
  theNumber = v128 + " ";
  var v129 = sequenceToAppend + theNumber;
  sequenceToAppend = v129 + tabIn;
  return sequenceToAppend
}
function testScript() {
  function v1(str$$8, p1$$1, offset$$13, s$$3) {
    return p1$$1 + "X"
  }
  var testArray = new Array;
  var testString = "1234567890";
  testArray.push(testString);
  var v412 = testArray[0];
  var v130 = v412 != testString;
  if(v130) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v413 = testString.search(re$$2);
  var v131 = v413 == -1;
  if(v131) {
    alert("Regular expression 'm' flag not supported. See browser compatibility page.");
    return false
  }
  var caughtException = false;
  try {
    re$$2 = eval("Exception handling not supported. Check browser compatibility page.")
  }catch(e$$4) {
    caughtException = true
  }
  var v132 = !caughtException;
  if(v132) {
    alert("Exception handling not supported. See browser compatibility page.")
  }
  testString = "123";
  testString = testString.replace(/(\d)/g, v1);
  var v133 = testString != "1X2X3X";
  if(v133) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false
  }
  var testNum = 2489.8237;
  var v414 = testNum.toFixed(3);
  var v134 = v414 != 2489.824;
  if(v134) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v415 = testNum.toPrecision(5);
  var v135 = v415 != 2489.8;
  if(v135) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v416 = theNumber$$1.search(/\d/);
  var v136 = v416 == -1;
  if(v136) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v541 = emblFile.search(/ID/);
  var v417 = v541 == -1;
  var v543 = !v417;
  if(v543) {
    var v613 = emblFile.search(/AC/);
    var v542 = v613 == -1;
    var v615 = !v542;
    if(v615) {
      var v661 = emblFile.search(/DE/);
      var v614 = v661 == -1;
      var v663 = !v614;
      if(v663) {
        var v662 = emblFile.search(/SQ/);
        v614 = v662 == -1
      }
      v542 = v614
    }
    v417 = v542
  }
  var v137 = v417;
  if(v137) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v418 = theNumber$$2.search(/\d/);
  var v138 = v418 == -1;
  if(v138) {
    alert("Please enter a number.");
    return false
  }
  var v140 = theNumber$$2 > maxInput$$2;
  if(v140) {
    var v419 = "Please enter a number less than or equal to " + maxInput$$2;
    var v139 = v419 + ".";
    alert(v139);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v420 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v141 = v420 != -1;
  if(v141) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v421 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v142 = v421 != -1;
  if(v142) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v544 = genBankFile.search(/LOCUS/);
  var v422 = v544 == -1;
  var v546 = !v422;
  if(v546) {
    var v616 = genBankFile.search(/DEFINITION/);
    var v545 = v616 == -1;
    var v618 = !v545;
    if(v618) {
      var v664 = genBankFile.search(/ACCESSION/);
      var v617 = v664 == -1;
      var v666 = !v617;
      if(v666) {
        var v665 = genBankFile.search(/ORIGIN/);
        v617 = v665 == -1
      }
      v545 = v617
    }
    v422 = v545
  }
  var v143 = v422;
  if(v143) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v547 = genBankFile$$1.search(/LOCUS/);
  var v423 = v547 == -1;
  var v549 = !v423;
  if(v549) {
    var v619 = genBankFile$$1.search(/DEFINITION/);
    var v548 = v619 == -1;
    var v621 = !v548;
    if(v621) {
      var v667 = genBankFile$$1.search(/ACCESSION/);
      var v620 = v667 == -1;
      var v669 = !v620;
      if(v669) {
        var v668 = genBankFile$$1.search(/ORIGIN/);
        v620 = v668 == -1
      }
      v548 = v620
    }
    v423 = v548
  }
  var v144 = v423;
  if(v144) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v424 = genBankFile$$1.search(/FEATURES {13}/);
  var v145 = v424 == -1;
  if(v145) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v550 = emblFile$$1.search(/ID/);
  var v425 = v550 == -1;
  var v552 = !v425;
  if(v552) {
    var v622 = emblFile$$1.search(/AC/);
    var v551 = v622 == -1;
    var v624 = !v551;
    if(v624) {
      var v670 = emblFile$$1.search(/DE/);
      var v623 = v670 == -1;
      var v672 = !v623;
      if(v672) {
        var v671 = emblFile$$1.search(/SQ/);
        v623 = v671 == -1
      }
      v551 = v623
    }
    v425 = v551
  }
  var v146 = v425;
  if(v146) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v426 = emblFile$$1.search(/^FT/m);
  var v147 = v426 == -1;
  if(v147) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function writeGroupNum(text$$10, tabIn$$1, groupSize, basePerLine, startBase, stopBase) {
  var i$$5 = parseInt(startBase);
  var k = 0;
  var lineOfText = "";
  var sepChar = " ";
  groupSize = parseInt(groupSize);
  basePerLine = parseInt(basePerLine);
  var v154 = i$$5 < stopBase;
  for(;v154;) {
    var v148 = i$$5 + 1;
    lineOfText = rightNum(v148, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v427 = basePerLine / groupSize;
    var v151 = j$$6 <= v427;
    for(;v151;) {
      var v150 = k < groupSize;
      for(;v150;) {
        var v428 = k + i$$5;
        var v149 = text$$10.charAt(v428);
        lineOfText = lineOfText + v149;
        k = k + 1;
        v150 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v429 = basePerLine / groupSize;
      v151 = j$$6 <= v429
    }
    var v152 = outputWindow.document;
    var v153 = lineOfText + "\n";
    v152.write(v153);
    lineOfText = "";
    v154 = i$$5 < stopBase
  }
  return true
}
function writeGroupNumDna(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition) {
  writeGroupNumDnaSetStart(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition, 0);
  return true
}
function writeGroupNumDnaSetStart(text$$12, tabIn$$3, groupSize$$2, basePerLine$$2, startBase$$2, stopBase$$2, strands$$1, numberPosition$$1, numberingAdjustment) {
  function adjustNumbering(original, adjustment) {
    var adjusted = original + adjustment;
    var v430 = adjustment < 0;
    if(v430) {
      v430 = adjusted >= 0
    }
    var v155 = v430;
    if(v155) {
      adjusted = adjusted + 1
    }
    return adjusted
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
  var v186 = i$$6 < stopBase$$2;
  for(;v186;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v431 = basePerLine$$2 / groupSize$$2;
    var v162 = j$$7 <= v431;
    for(;v162;) {
      var v158 = k$$1 < groupSize$$2;
      for(;v158;) {
        var v432 = i$$6 + k$$1;
        var v156 = v432 >= stopBase$$2;
        if(v156) {
          break
        }
        var v433 = k$$1 + i$$6;
        var v157 = text$$12.charAt(v433);
        lineOfText$$1 = lineOfText$$1 + v157;
        k$$1 = k$$1 + 1;
        v158 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v160 = numberPosition$$1 == "above";
      if(v160) {
        var v434 = adjustNumbering(i$$6, numberingAdjustment);
        var v159 = rightNum(v434, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v159
      }
      var v161 = i$$6 >= stopBase$$2;
      if(v161) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v435 = basePerLine$$2 / groupSize$$2;
      v162 = j$$7 <= v435
    }
    var v185 = numberPosition$$1 == "left";
    if(v185) {
      var v163 = outputWindow.document;
      var v625 = adjustNumbering(lineNum, numberingAdjustment);
      var v553 = rightNum(v625, "", 8, tabIn$$3);
      var v436 = v553 + lineOfText$$1;
      var v164 = v436 + "\n";
      v163.write(v164);
      var v168 = strands$$1 == "two";
      if(v168) {
        var v165 = outputWindow.document;
        var v626 = adjustNumbering(lineNum, numberingAdjustment);
        var v554 = rightNum(v626, "", 8, tabIn$$3);
        var v555 = complement(lineOfText$$1);
        var v437 = v554 + v555;
        var v166 = v437 + "\n";
        v165.write(v166);
        var v167 = outputWindow.document;
        v167.write("\n")
      }
    }else {
      var v184 = numberPosition$$1 == "right";
      if(v184) {
        var v169 = outputWindow.document;
        var v556 = adjustNumbering(i$$6, numberingAdjustment);
        var v438 = lineOfText$$1 + v556;
        var v170 = v438 + "\n";
        v169.write(v170);
        var v174 = strands$$1 == "two";
        if(v174) {
          var v171 = outputWindow.document;
          var v557 = complement(lineOfText$$1);
          var v558 = adjustNumbering(i$$6, numberingAdjustment);
          var v439 = v557 + v558;
          var v172 = v439 + "\n";
          v171.write(v172);
          var v173 = outputWindow.document;
          v173.write("\n")
        }
      }else {
        var v183 = numberPosition$$1 == "above";
        if(v183) {
          var v175 = outputWindow.document;
          var v176 = aboveNum + "\n";
          v175.write(v176);
          var v177 = outputWindow.document;
          var v178 = lineOfText$$1 + "\n";
          v177.write(v178);
          var v182 = strands$$1 == "two";
          if(v182) {
            var v179 = outputWindow.document;
            var v440 = complement(lineOfText$$1);
            var v180 = v440 + "\n";
            v179.write(v180);
            var v181 = outputWindow.document;
            v181.write("\n")
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v186 = i$$6 < stopBase$$2
  }
  return true
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
  var v205 = i$$7 < stopBase$$3;
  for(;v205;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v441 = basePerLine$$3 / groupSize$$3;
    var v193 = j$$8 <= v441;
    for(;v193;) {
      var v189 = k$$2 < groupSize$$3;
      for(;v189;) {
        var v442 = i$$7 + k$$2;
        var v187 = v442 >= stopBase$$3;
        if(v187) {
          break
        }
        var v443 = k$$2 + i$$7;
        var v188 = text$$13.charAt(v443);
        lineOfText$$2 = lineOfText$$2 + v188;
        k$$2 = k$$2 + 1;
        v189 = k$$2 < groupSize$$3
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v191 = numberPosition$$2 == "above";
      if(v191) {
        var v190 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = aboveNum$$1 + v190
      }
      var v192 = i$$7 >= stopBase$$3;
      if(v192) {
        break
      }
      k$$2 = 0;
      j$$8 = j$$8 + 1;
      var v444 = basePerLine$$3 / groupSize$$3;
      v193 = j$$8 <= v444
    }
    var v204 = numberPosition$$2 == "left";
    if(v204) {
      var v194 = outputWindow.document;
      var v559 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v445 = v559 + lineOfText$$2;
      var v195 = v445 + "\n";
      v194.write(v195)
    }else {
      var v203 = numberPosition$$2 == "right";
      if(v203) {
        var v196 = outputWindow.document;
        var v446 = lineOfText$$2 + i$$7;
        var v197 = v446 + "\n";
        v196.write(v197)
      }else {
        var v202 = numberPosition$$2 == "above";
        if(v202) {
          var v198 = outputWindow.document;
          var v199 = aboveNum$$1 + "\n";
          v198.write(v199);
          var v200 = outputWindow.document;
          var v201 = lineOfText$$2 + "\n";
          v200.write(v201)
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v205 = i$$7 < stopBase$$3
  }
  return true
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
  var v560 = sequence$$13.length;
  var v447 = v560 <= firstIndexToMutate;
  var v562 = !v447;
  if(v562) {
    var v561 = lastIndexToMutate < 0;
    var v627 = !v561;
    if(v627) {
      v561 = lastIndexToMutate <= firstIndexToMutate
    }
    v447 = v561
  }
  var v206 = v447;
  if(v206) {
    numMut = 0
  }
  var i$$8 = 0;
  var v214 = i$$8 < numMut;
  for(;v214;) {
    maxNum = sequence$$13.length;
    var v448 = Math.random();
    var v207 = v448 * maxNum;
    randNum = Math.floor(v207);
    var v449 = randNum < firstIndexToMutate;
    var v563 = !v449;
    if(v563) {
      v449 = randNum > lastIndexToMutate
    }
    var v208 = v449;
    if(v208) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v214 = i$$8 < numMut;
      continue
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for(;needNewChar;) {
      var v450 = Math.random();
      var v451 = components$$1.length;
      var v209 = v450 * v451;
      componentsIndex = Math.round(v209);
      var v452 = components$$1.length;
      var v210 = componentsIndex == v452;
      if(v210) {
        componentsIndex = 0
      }
      var v453 = components$$1[componentsIndex];
      var v211 = v453 != currentChar;
      if(v211) {
        needNewChar = false
      }
    }
    var v454 = sequence$$13.substring(0, randNum);
    var v455 = components$$1[componentsIndex];
    var v212 = v454 + v455;
    var v456 = randNum + 1;
    var v457 = sequence$$13.length;
    var v213 = sequence$$13.substring(v456, v457);
    sequence$$13 = v212 + v213;
    i$$8 = i$$8 + 1;
    v214 = i$$8 < numMut
  }
  var v215 = outputWindow.document;
  var v216 = addReturns(sequence$$13);
  v215.write(v216);
  return true
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v221 = j$$9 < lengthOut$$1;
  for(;v221;) {
    var v458 = Math.random();
    var v459 = components$$2.length;
    var v217 = v458 * v459;
    tempNum$$1 = Math.floor(v217);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v460 = sequence$$14.length;
    var v220 = v460 == 60;
    if(v220) {
      var v218 = outputWindow.document;
      var v219 = sequence$$14 + "\n";
      v218.write(v219);
      sequence$$14 = ""
    }
    j$$9 = j$$9 + 1;
    v221 = j$$9 < lengthOut$$1
  }
  var v222 = outputWindow.document;
  var v223 = sequence$$14 + "\n";
  v222.write(v223);
  return true
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
  var v227 = dnaConformation == "circular";
  if(v227) {
    var v224 = sequence$$15.substring(0, lookAhead);
    shiftValue = v224.length;
    var v628 = sequence$$15.length;
    var v564 = v628 - lookAhead;
    var v565 = sequence$$15.length;
    var v461 = sequence$$15.substring(v564, v565);
    var v225 = v461 + sequence$$15;
    var v226 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v225 + v226;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v228 = outputWindow.document;
  v228.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  var v229 = outputWindow.document;
  var v629 = '<tr><td class="title" width="200px">' + "Site:";
  var v566 = v629 + '</td><td class="title">';
  var v462 = v566 + "Positions:";
  var v230 = v462 + "</td></tr>\n";
  v229.write(v230);
  var i$$9 = 0;
  var v463 = arrayOfItems.length;
  var v246 = i$$9 < v463;
  for(;v246;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v464 = arrayOfItems[i$$9];
    var v231 = v464.match(/\/.+\//);
    matchExp = v231 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    var v630 = arrayOfItems[i$$9];
    var v567 = v630.match(/\)\D*\d+/);
    var v465 = v567.toString();
    var v232 = v465.replace(/\)\D*/, "");
    cutDistance = parseFloat(v232);
    var v238 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v238;) {
      var v233 = matchExp.lastIndex;
      matchPosition = v233 - cutDistance;
      var v466 = matchPosition >= lowerLimit;
      if(v466) {
        v466 = matchPosition < upperLimit
      }
      var v236 = v466;
      if(v236) {
        timesFound = timesFound + 1;
        var v234 = tempString$$1 + ", ";
        var v467 = matchPosition - shiftValue;
        var v235 = v467 + 1;
        tempString$$1 = v234 + v235
      }
      var v237 = matchExp;
      var v568 = matchExp.lastIndex;
      var v631 = RegExp.lastMatch;
      var v569 = v631.length;
      var v468 = v568 - v569;
      v237.lastIndex = v468 + 1;
      v238 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    var v469 = tempString$$1.search(/\d/);
    var v239 = v469 != -1;
    if(v239) {
      tempString$$1 = tempString$$1.replace(/none,\s*/, "")
    }
    var v243 = timesFound == 0;
    if(v243) {
      backGroundClass = "none"
    }else {
      var v242 = timesFound == 1;
      if(v242) {
        backGroundClass = "one"
      }else {
        var v241 = timesFound == 2;
        if(v241) {
          backGroundClass = "two"
        }else {
          var v240 = timesFound == 3;
          if(v240) {
            backGroundClass = "three"
          }else {
            backGroundClass = "many"
          }
        }
      }
    }
    var v244 = outputWindow.document;
    var v741 = '<tr><td class="' + backGroundClass;
    var v720 = v741 + '">';
    var v765 = arrayOfItems[i$$9];
    var v755 = v765.match(/\([^\(]+\)/);
    var v742 = v755.toString();
    var v721 = v742.replace(/\(|\)/g, "");
    var v699 = v720 + v721;
    var v673 = v699 + '</td><td class="';
    var v632 = v673 + backGroundClass;
    var v570 = v632 + '">';
    var v470 = v570 + tempString$$1;
    var v245 = v470 + "</td></tr>\n";
    v244.write(v245);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v471 = arrayOfItems.length;
    v246 = i$$9 < v471
  }
  var v247 = outputWindow.document;
  v247.write("</tbody></table>\n");
  return true
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v248 = outputWindow.document;
  v248.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  var v249 = outputWindow.document;
  var v700 = '<tr><td class="title">' + "Pattern:";
  var v674 = v700 + '</td><td class="title">';
  var v633 = v674 + "Times found:";
  var v571 = v633 + '</td><td class="title">';
  var v472 = v571 + "Percentage:";
  var v250 = v472 + "</td></tr>\n";
  v249.write(v250);
  var i$$10 = 0;
  var v473 = arrayOfItems$$1.length;
  var v259 = i$$10 < v473;
  for(;v259;) {
    var tempNumber = 0;
    var v474 = arrayOfItems$$1[i$$10];
    var v251 = v474.match(/\/[^\/]+\//);
    var matchExp$$1 = v251 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    var v475 = sequence$$16.search(matchExp$$1);
    var v253 = v475 != -1;
    if(v253) {
      var v252 = sequence$$16.match(matchExp$$1);
      tempNumber = v252.length
    }
    var percentage = 0;
    var v572 = originalLength + 1;
    var v675 = arrayOfItems$$1[i$$10];
    var v634 = v675.match(/\d+/);
    var v573 = parseFloat(v634);
    var v476 = v572 - v573;
    var v256 = v476 > 0;
    if(v256) {
      var v254 = 100 * tempNumber;
      var v477 = originalLength + 1;
      var v635 = arrayOfItems$$1[i$$10];
      var v574 = v635.match(/\d+/);
      var v478 = parseFloat(v574);
      var v255 = v477 - v478;
      percentage = v254 / v255
    }
    var v257 = outputWindow.document;
    var v766 = arrayOfItems$$1[i$$10];
    var v756 = v766.match(/\([^\(]+\)\b/);
    var v743 = v756.toString();
    var v722 = v743.replace(/\(|\)/g, "");
    var v701 = "<tr><td>" + v722;
    var v676 = v701 + "</td><td>";
    var v636 = v676 + tempNumber;
    var v575 = v636 + "</td><td>";
    var v576 = percentage.toFixed(2);
    var v479 = v575 + v576;
    var v258 = v479 + "</td></tr>\n";
    v257.write(v258);
    i$$10 = i$$10 + 1;
    var v480 = arrayOfItems$$1.length;
    v259 = i$$10 < v480
  }
  var v260 = outputWindow.document;
  v260.write("</tbody></table>\n");
  return true
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v481 = sequence$$17.length;
  var v267 = v481 > 0;
  for(;v267;) {
    maxNum$$1 = sequence$$17.length;
    var v482 = Math.random();
    var v261 = v482 * maxNum$$1;
    randNum$$1 = Math.floor(v261);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v262 = randNum$$1 + 1;
    var v263 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v262, v263);
    sequence$$17 = tempString1 + tempString2;
    var v483 = tempSeq.length;
    var v266 = v483 == 60;
    if(v266) {
      var v264 = outputWindow.document;
      var v265 = tempSeq + "\n";
      v264.write(v265);
      tempSeq = ""
    }
    var v484 = sequence$$17.length;
    v267 = v484 > 0
  }
  var v268 = outputWindow.document;
  var v269 = tempSeq + "\n";
  v268.write(v269);
  return true
}
function proteinIep(theDocument) {
  JAM.startProfile('compute');

  var newProtein = "";
  var maxInput$$3 = 2E5;
  var v485 = testScript();
  var v270 = v485 == false;
  if(v270) {
    return false
  }
  var v723 = theDocument.forms;
  var v702 = v723[0];
  var v677 = v702.elements;
  var v637 = v677[0];
  var v577 = checkFormElement(v637);
  var v486 = v577 == false;
  var v579 = !v486;
  if(v579) {
    var v744 = theDocument.forms;
    var v724 = v744[0];
    var v703 = v724.elements;
    var v678 = v703[0];
    var v638 = v678.value;
    var v578 = checkSequenceLength(v638, maxInput$$3);
    v486 = v578 == false
  }
  var v271 = v486;
  if(v271) {
    return false
  }
  openWindow("Protein Isoelectric Point");
  var v679 = theDocument.forms;
  var v639 = v679[0];
  var v580 = v639.elements;
  var v487 = v580[0];
  var v272 = v487.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v272);
  var i$$11 = 0;
  var v488 = arrayOfFasta$$1.length;
  var v281 = i$$11 < v488;
  for(;v281;) {
    var v273 = arrayOfFasta$$1[i$$11];
    newProtein = getSequenceFromFasta(v273);
    var v274 = arrayOfFasta$$1[i$$11];
    title = getTitleFromFasta(v274);
    newProtein = removeNonProteinStrict(newProtein);
    var v275 = outputWindow.document;
    var v276 = getInfoFromTitleAndSequence(title, newProtein);
    v275.write(v276);
    var v725 = theDocument.forms;
    var v704 = v725[0];
    var v680 = v704.elements;
    var v640 = v680[4];
    var v581 = v640.options;
    var v726 = theDocument.forms;
    var v705 = v726[0];
    var v681 = v705.elements;
    var v641 = v681[4];
    var v582 = v641.selectedIndex;
    var v489 = v581[v582];
    var v277 = v489.value;
    var v727 = theDocument.forms;
    var v706 = v727[0];
    var v682 = v706.elements;
    var v642 = v682[5];
    var v583 = v642.options;
    var v728 = theDocument.forms;
    var v707 = v728[0];
    var v683 = v707.elements;
    var v643 = v683[5];
    var v584 = v643.selectedIndex;
    var v490 = v583[v584];
    var v278 = v490.value;
    var v729 = theDocument.forms;
    var v708 = v729[0];
    var v684 = v708.elements;
    var v644 = v684[6];
    var v585 = v644.options;
    var v730 = theDocument.forms;
    var v709 = v730[0];
    var v685 = v709.elements;
    var v645 = v685[6];
    var v586 = v645.selectedIndex;
    var v491 = v585[v586];
    var v279 = v491.value;
    writeProtIep(newProtein, v277, v278, v279);
    var v280 = outputWindow.document;
    v280.write("<br />\n<br />\n");
    i$$11 = i$$11 + 1;
    var v492 = arrayOfFasta$$1.length;
    v281 = i$$11 < v492
  }
  closeWindow();

  JAM.stopProfile('compute');
  return true
}
function writeProtIep(proteinSequence$$1, copies, fusion, pKSet) {
  var pH = 7;
  var step = 3.5;
  var charge = 0;
  var last_charge = 0;
  copies = parseInt(copies);
  var j$$10 = 0;
  var v282 = j$$10 < copies;
  for(;v282;) {
    proteinSequence$$1 = proteinSequence$$1 + fusion;
    j$$10 = j$$10 + 1;
    v282 = j$$10 < copies
  }
  var N_term_pK;
  var K_pK;
  var R_pK;
  var H_pK;
  var D_pK;
  var E_pK;
  var C_pK;
  var Y_pK;
  var C_term_pK;
  var v493 = pKSet.toLowerCase();
  var v283 = v493 == "dtaselect";
  if(v283) {
    N_term_pK = 8;
    K_pK = 10;
    R_pK = 12;
    H_pK = 6.5;
    D_pK = 4.4;
    E_pK = 4.4;
    C_pK = 8.5;
    Y_pK = 10;
    C_term_pK = 3.1
  }else {
    N_term_pK = 8.6;
    K_pK = 10.8;
    R_pK = 12.5;
    H_pK = 6.5;
    D_pK = 3.9;
    E_pK = 4.1;
    C_pK = 8.5;
    Y_pK = 10.1;
    C_term_pK = 3.6
  }
  var K_count = 0;
  var v494 = proteinSequence$$1.search(/k/i);
  var v285 = v494 != -1;
  if(v285) {
    var v284 = proteinSequence$$1.match(/k/gi);
    K_count = v284.length
  }
  var R_count = 0;
  var v495 = proteinSequence$$1.search(/r/i);
  var v287 = v495 != -1;
  if(v287) {
    var v286 = proteinSequence$$1.match(/r/gi);
    R_count = v286.length
  }
  var H_count = 0;
  var v496 = proteinSequence$$1.search(/h/i);
  var v289 = v496 != -1;
  if(v289) {
    var v288 = proteinSequence$$1.match(/h/gi);
    H_count = v288.length
  }
  var D_count = 0;
  var v497 = proteinSequence$$1.search(/d/i);
  var v291 = v497 != -1;
  if(v291) {
    var v290 = proteinSequence$$1.match(/d/gi);
    D_count = v290.length
  }
  var E_count = 0;
  var v498 = proteinSequence$$1.search(/e/i);
  var v293 = v498 != -1;
  if(v293) {
    var v292 = proteinSequence$$1.match(/e/gi);
    E_count = v292.length
  }
  var C_count = 0;
  var v499 = proteinSequence$$1.search(/c/i);
  var v295 = v499 != -1;
  if(v295) {
    var v294 = proteinSequence$$1.match(/c/gi);
    C_count = v294.length
  }
  var Y_count = 0;
  var v500 = proteinSequence$$1.search(/y/i);
  var v297 = v500 != -1;
  if(v297) {
    var v296 = proteinSequence$$1.match(/y/gi);
    Y_count = v296.length
  }
  for(;1;) {
    var v745 = partial_charge(N_term_pK, pH);
    var v757 = partial_charge(K_pK, pH);
    var v746 = K_count * v757;
    var v731 = v745 + v746;
    var v747 = partial_charge(R_pK, pH);
    var v732 = R_count * v747;
    var v710 = v731 + v732;
    var v733 = partial_charge(H_pK, pH);
    var v711 = H_count * v733;
    var v686 = v710 + v711;
    var v712 = partial_charge(pH, D_pK);
    var v687 = D_count * v712;
    var v646 = v686 - v687;
    var v688 = partial_charge(pH, E_pK);
    var v647 = E_count * v688;
    var v587 = v646 - v647;
    var v648 = partial_charge(pH, C_pK);
    var v588 = C_count * v648;
    var v501 = v587 - v588;
    var v589 = partial_charge(pH, Y_pK);
    var v502 = Y_count * v589;
    var v298 = v501 - v502;
    var v299 = partial_charge(pH, C_term_pK);
    charge = v298 - v299;
    var v503 = charge.toFixed(2);
    var v590 = last_charge * 100;
    var v504 = v590.toFixed(2);
    var v300 = v503 == v504;
    if(v300) {
      break
    }
    var v301 = charge > 0;
    if(v301) {
      pH = pH + step
    }else {
      pH = pH - step
    }
    step = step / 2;
    last_charge = charge
  }
  pH = pH.toFixed(2);
  var v302 = outputWindow.document;
  var v303 = "pH " + pH;
  v302.write(v303);
  return true
}
function partial_charge(first$$1, second) {
  var v304 = first$$1 - second;
  var charge$$1 = Math.pow(10, v304);
  var v305 = charge$$1 + 1;
  return charge$$1 / v305
}
document.onload = v2;
var v306 = document.getElementById("submitbtn");
v306.onclick = v3;
var v307 = document.getElementById("clearbtn");
v307.onclick = v4;

}

JAM.stopProfile('load');
