
JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
function v4() {
  var v551 = document.forms;
  var v471 = v551[0];
  var v286 = v471.elements;
  var v5 = v286[0];
  v5.value = " ";
  return
}
function v3() {
  try {
    splitFasta(document)
  }catch(e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    alert(v6)
  }
  return
}
function v2() {
  var v287 = document.main_form;
  var v7 = v287.main_submit;
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
  var v288 = arrayOfSequences.length;
  var v9 = v288 < 2;
  if(v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v289 = arrayOfTitles.length;
  var v11 = i$$1 < v289;
  for(;v11;) {
    var v552 = arrayOfTitles[i$$1];
    var v472 = v552.search(/\S/);
    var v290 = v472 == -1;
    var v474 = !v290;
    if(v474) {
      var v605 = arrayOfSequences[i$$1];
      var v553 = v605.search(/\S/);
      var v473 = v553 == -1;
      var v555 = !v473;
      if(v555) {
        var v606 = arrayOfSequences[i$$1];
        var v554 = v606.length;
        v473 = v554 != lengthOfAlign
      }
      v290 = v473
    }
    var v10 = v290;
    if(v10) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v291 = arrayOfTitles.length;
    v11 = i$$1 < v291
  }
  return true
}
function checkCodonTable(codonTable) {
  var v475 = codonTable.search(/AmAcid/);
  var v292 = v475 == -1;
  var v477 = !v292;
  if(v477) {
    var v556 = codonTable.search(/Codon/);
    var v476 = v556 == -1;
    var v558 = !v476;
    if(v558) {
      var v607 = codonTable.search(/Number/);
      var v557 = v607 == -1;
      var v609 = !v557;
      if(v609) {
        var v642 = codonTable.search(/\/1000/);
        var v608 = v642 == -1;
        var v644 = !v608;
        if(v644) {
          var v643 = codonTable.search(/Fraction\s*\.\./);
          v608 = v643 == -1
        }
        v557 = v608
      }
      v476 = v557
    }
    v292 = v476
  }
  var v12 = v292;
  if(v12) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v478 = formElement.value;
  var v293 = v478.search(/\S/);
  var v13 = v293 == -1;
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
  var v294 = arrayOfPatterns.length;
  var v16 = z$$2 < v294;
  for(;v16;) {
    var v479 = arrayOfPatterns[z$$2];
    var v295 = v479.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v14 = v295 == -1;
    if(v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    var v480 = arrayOfPatterns[z$$2];
    var v296 = moreExpressionCheck(v480);
    var v15 = v296 == false;
    if(v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v297 = arrayOfPatterns.length;
    v16 = z$$2 < v297
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v298 = arrayOfPatterns.length;
  var v25 = j < v298;
  for(;v25;) {
    var v19 = geneticCodeMatchExp;
    var v20 = j;
    var v559 = arrayOfPatterns[j];
    var v481 = v559.match(/\/.+\//);
    var v299 = v481 + "gi";
    var v737 = eval(v299);
    v19[v20] = v737;
    var v21 = geneticCodeMatchResult;
    var v22 = j;
    var v482 = arrayOfPatterns[j];
    var v300 = v482.match(/=[a-zA-Z\*]/);
    var v738 = v300.toString();
    v21[v22] = v738;
    var v23 = geneticCodeMatchResult;
    var v24 = j;
    var v301 = geneticCodeMatchResult[j];
    var v739 = v301.replace(/=/g, "");
    v23[v24] = v739;
    j = j + 1;
    var v302 = arrayOfPatterns.length;
    v25 = j < v302
  }
  var i$$2 = 0;
  var v483 = testSequence.length;
  var v303 = v483 - 3;
  var v32 = i$$2 <= v303;
  for(;v32;) {
    var v26 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v26);
    j = 0;
    var v304 = geneticCodeMatchExp.length;
    var v30 = j < v304;
    for(;v30;) {
      var v484 = geneticCodeMatchExp[j];
      var v305 = codon.search(v484);
      var v29 = v305 != -1;
      if(v29) {
        var v28 = oneMatch == true;
        if(v28) {
          var v306 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v27 = v306 + ".";
          alert(v27);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v307 = geneticCodeMatchExp.length;
      v30 = j < v307
    }
    var v31 = oneMatch == false;
    if(v31) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v485 = testSequence.length;
    var v308 = v485 - 3;
    v32 = i$$2 <= v308
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v309 = arrayOfPatterns$$1.length;
  var v34 = z$$3 < v309;
  for(;v34;) {
    var v486 = arrayOfPatterns$$1[z$$3];
    var v310 = v486.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v33 = v310 != -1;
    if(v33) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v311 = arrayOfPatterns$$1.length;
    v34 = z$$3 < v311
  }
  var i$$3 = 0;
  var v312 = arrayOfPatterns$$1.length;
  var v38 = i$$3 < v312;
  for(;v38;) {
    var v487 = arrayOfPatterns$$1[i$$3];
    var v313 = "[" + v487;
    var v35 = v313 + "]";
    var re = new RegExp(v35, "gi");
    var j$$1 = i$$3 + 1;
    var v314 = arrayOfPatterns$$1.length;
    var v37 = j$$1 < v314;
    for(;v37;) {
      var v488 = arrayOfPatterns$$1[j$$1];
      var v315 = v488.search(re);
      var v36 = v315 != -1;
      if(v36) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v316 = arrayOfPatterns$$1.length;
      v37 = j$$1 < v316
    }
    i$$3 = i$$3 + 1;
    var v317 = arrayOfPatterns$$1.length;
    v38 = i$$3 < v317
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v318 = arrayOfPatterns$$2.length;
  var v41 = z$$4 < v318;
  for(;v41;) {
    var v489 = arrayOfPatterns$$2[z$$4];
    var v319 = v489.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v39 = v319 == -1;
    if(v39) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    var v490 = arrayOfPatterns$$2[z$$4];
    var v320 = moreExpressionCheck(v490);
    var v40 = v320 == false;
    if(v40) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v321 = arrayOfPatterns$$2.length;
    v41 = z$$4 < v321
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v560 = getSequenceFromFasta(text$$7);
  var v491 = v560.replace(/[^A-Za-z]/g, "");
  var v322 = v491.length;
  var v43 = v322 > maxInput;
  if(v43) {
    var v323 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v42 = v323 + " characters.";
    alert(v42);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v324 = text$$8.length;
  var v45 = v324 > maxInput$$1;
  if(v45) {
    var v325 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v44 = v325 + " characters.";
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
  var v326 = alignArray.length;
  var v52 = v326 < 3;
  if(v52) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v327 = alignArray.length;
  var v54 = i$$4 < v327;
  for(;v54;) {
    var v492 = alignArray[i$$4];
    var v328 = v492.search(/[^\s]+\s/);
    var v53 = v328 == -1;
    if(v53) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v329 = alignArray.length;
    v54 = i$$4 < v329
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
  var v330 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v57 = v330 != -1;
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
  var v331 = sequence$$2.length;
  var v58 = "&gt;results for " + v331;
  var stringToReturn = v58 + " residue sequence ";
  var v332 = fastaSequenceTitle.search(/[^\s]/);
  var v60 = v332 != -1;
  if(v60) {
    var v333 = stringToReturn + '"';
    var v59 = v333 + fastaSequenceTitle;
    stringToReturn = v59 + '"'
  }
  var v334 = stringToReturn + ' starting "';
  var v335 = sequence$$2.substring(0, 10);
  var v61 = v334 + v335;
  stringToReturn = v61 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v336 = sequenceOne.length;
  var v62 = "Search results for " + v336;
  var stringToReturn$$1 = v62 + " residue sequence ";
  var v337 = fastaSequenceTitleOne.search(/[^\s]/);
  var v64 = v337 != -1;
  if(v64) {
    var v338 = stringToReturn$$1 + '"';
    var v63 = v338 + fastaSequenceTitleOne;
    stringToReturn$$1 = v63 + '"'
  }
  var v339 = stringToReturn$$1 + ' starting "';
  var v340 = sequenceOne.substring(0, 10);
  var v65 = v339 + v340;
  stringToReturn$$1 = v65 + '"\n';
  var v341 = stringToReturn$$1 + "and ";
  var v342 = sequenceTwo.length;
  var v66 = v341 + v342;
  stringToReturn$$1 = v66 + " residue sequence ";
  var v343 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v68 = v343 != -1;
  if(v68) {
    var v344 = stringToReturn$$1 + '"';
    var v67 = v344 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v67 + '"'
  }
  var v345 = stringToReturn$$1 + ' starting "';
  var v346 = sequenceTwo.substring(0, 10);
  var v69 = v345 + v346;
  stringToReturn$$1 = v69 + '"';
  var v70 = '<div class="info">' + stringToReturn$$1;
  return v70 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v71 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v71);
  var j$$2 = 0;
  var v347 = arrayOfPatterns$$3.length;
  var v74 = j$$2 < v347;
  for(;v74;) {
    var v72 = geneticCodeMatchExp$$1;
    var v73 = j$$2;
    var v561 = arrayOfPatterns$$3[j$$2];
    var v493 = v561.match(/\/.+\//);
    var v348 = v493 + "gi";
    var v740 = eval(v348);
    v72[v73] = v740;
    j$$2 = j$$2 + 1;
    var v349 = arrayOfPatterns$$3.length;
    v74 = j$$2 < v349
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v75 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v75);
  var j$$3 = 0;
  var v350 = arrayOfPatterns$$4.length;
  var v80 = j$$3 < v350;
  for(;v80;) {
    var v76 = geneticCodeMatchResult$$1;
    var v77 = j$$3;
    var v494 = arrayOfPatterns$$4[j$$3];
    var v351 = v494.match(/=[a-zA-Z\*]/);
    var v741 = v351.toString();
    v76[v77] = v741;
    var v78 = geneticCodeMatchResult$$1;
    var v79 = j$$3;
    var v352 = geneticCodeMatchResult$$1[j$$3];
    var v742 = v352.replace(/=/g, "");
    v78[v79] = v742;
    j$$3 = j$$3 + 1;
    var v353 = arrayOfPatterns$$4.length;
    v80 = j$$3 < v353
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v354 = sequence$$3.length;
  var v81 = "Results for " + v354;
  var stringToReturn$$2 = v81 + " residue sequence ";
  var v355 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v83 = v355 != -1;
  if(v83) {
    var v356 = stringToReturn$$2 + '"';
    var v82 = v356 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v82 + '"'
  }
  var v357 = stringToReturn$$2 + ' starting "';
  var v358 = sequence$$3.substring(0, 10);
  var v84 = v357 + v358;
  stringToReturn$$2 = v84 + '"';
  var v85 = '<div class="info">' + stringToReturn$$2;
  return v85 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v495 = "Results for " + topology;
  var v359 = v495 + " ";
  var v360 = sequence$$4.length;
  var v86 = v359 + v360;
  var stringToReturn$$3 = v86 + " residue sequence ";
  var v361 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v88 = v361 != -1;
  if(v88) {
    var v362 = stringToReturn$$3 + '"';
    var v87 = v362 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v87 + '"'
  }
  var v363 = stringToReturn$$3 + ' starting "';
  var v364 = sequence$$4.substring(0, 10);
  var v89 = v363 + v364;
  stringToReturn$$3 = v89 + '"';
  var v90 = '<div class="info">' + stringToReturn$$3;
  return v90 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v365 = sequenceOne$$1.length;
  var v91 = "Alignment results for " + v365;
  var stringToReturn$$4 = v91 + " residue sequence ";
  var v366 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v93 = v366 != -1;
  if(v93) {
    var v367 = stringToReturn$$4 + '"';
    var v92 = v367 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v92 + '"'
  }
  var v368 = stringToReturn$$4 + ' starting "';
  var v369 = sequenceOne$$1.substring(0, 10);
  var v94 = v368 + v369;
  stringToReturn$$4 = v94 + '"\n';
  var v370 = stringToReturn$$4 + "and ";
  var v371 = sequenceTwo$$1.length;
  var v95 = v370 + v371;
  stringToReturn$$4 = v95 + " residue sequence ";
  var v372 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v97 = v372 != -1;
  if(v97) {
    var v373 = stringToReturn$$4 + '"';
    var v96 = v373 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v96 + '"'
  }
  var v374 = stringToReturn$$4 + ' starting "';
  var v375 = sequenceTwo$$1.substring(0, 10);
  var v98 = v374 + v375;
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
    var v376 = Math.random();
    var v377 = components.length;
    var v100 = v376 * v377;
    tempNum = Math.floor(v100);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4 = j$$4 + 1;
    v101 = j$$4 < lengthOut
  }
  return sequenceArray.join("")
}
function getSequenceFromFasta(sequenceRecord) {
  var v378 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v102 = v378 != -1;
  if(v102) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "")
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v379 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v104 = v379 != -1;
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
  var v496 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v380 = v496 != -1;
  var v498 = !v380;
  if(v498) {
    var v562 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    var v497 = v562 != -1;
    var v564 = !v497;
    if(v564) {
      var v610 = expressionToCheck.search(/\[\]/);
      var v563 = v610 != -1;
      var v612 = !v563;
      if(v612) {
        var v645 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
        var v611 = v645 != -1;
        var v647 = !v611;
        if(v647) {
          var v658 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
          var v646 = v658 != -1;
          var v660 = !v646;
          if(v660) {
            var v671 = expressionToCheck.search(/\|\|/);
            var v659 = v671 != -1;
            var v673 = !v659;
            if(v673) {
              var v683 = expressionToCheck.search(/\/\|/);
              var v672 = v683 != -1;
              var v685 = !v672;
              if(v685) {
                var v694 = expressionToCheck.search(/\|\//);
                var v684 = v694 != -1;
                var v696 = !v684;
                if(v696) {
                  var v704 = expressionToCheck.search(/\[.\]/);
                  var v695 = v704 != -1;
                  var v706 = !v695;
                  if(v706) {
                    var v712 = expressionToCheck.search(/\</);
                    var v705 = v712 != -1;
                    var v714 = !v705;
                    if(v714) {
                      var v713 = expressionToCheck.search(/\>/);
                      v705 = v713 != -1
                    }
                    v695 = v705
                  }
                  v684 = v695
                }
                v672 = v684
              }
              v659 = v672
            }
            v646 = v659
          }
          v611 = v646
        }
        v563 = v611
      }
      v497 = v563
    }
    v380 = v497
  }
  var v105 = v380;
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
function openWindow(title$$5) {
  _openWindow(title$$5, true);
  return
}
function _openWindow(title$$6, isColor) {
  outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  outputWindow.focus();
  var v110 = outputWindow.document;
  var v565 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v499 = v565 + "<head>\n";
  var v381 = v499 + "<title>Sequence Manipulation Suite</title>\n";
  var v111 = v381 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v110.write(v111);
  if(isColor) {
    var v112 = outputWindow.document;
    var v730 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v725 = v730 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v720 = v725 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v715 = v720 + "div.info {font-weight: bold}\n";
    var v707 = v715 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v697 = v707 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v686 = v697 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v674 = v686 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v661 = v674 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v648 = v661 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v613 = v648 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v566 = v613 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v500 = v566 + "td.many {color: #000000}\n";
    var v382 = v500 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v113 = v382 + "</style>\n";
    v112.write(v113)
  }else {
    var v114 = outputWindow.document;
    var v734 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v731 = v734 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v726 = v731 + "div.title {display: none}\n";
    var v721 = v726 + "div.info {font-weight: bold}\n";
    var v716 = v721 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v708 = v716 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v698 = v708 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v687 = v698 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v675 = v687 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v662 = v675 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v649 = v662 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v614 = v649 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v567 = v614 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v501 = v567 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v383 = v501 + "img {display: none}\n";
    var v115 = v383 + "</style>\n";
    v114.write(v115)
  }
  var v116 = outputWindow.document;
  var v568 = "</head>\n" + '<body class="main">\n';
  var v502 = v568 + '<div class="title">';
  var v384 = v502 + title$$6;
  var v117 = v384 + " results</div>\n";
  v116.write(v117);
  outputWindow.status = "Please Wait.";
  return true
}
function openWindowAlign(title$$7) {
  _openWindowAlign(title$$7, true);
  return
}
function _openWindowAlign(title$$8, isBackground) {
  outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  outputWindow.focus();
  var v118 = outputWindow.document;
  var v569 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v503 = v569 + "<head>\n";
  var v385 = v503 + "<title>Sequence Manipulation Suite</title>\n";
  var v119 = v385 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v118.write(v119);
  if(isBackground) {
    var v120 = outputWindow.document;
    var v732 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v727 = v732 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v722 = v727 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v717 = v722 + "div.info {font-weight: bold}\n";
    var v709 = v717 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v699 = v709 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v688 = v699 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v676 = v688 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v663 = v676 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v650 = v663 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v615 = v650 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v570 = v615 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v504 = v570 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v386 = v504 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v121 = v386 + "</style>\n";
    v120.write(v121)
  }else {
    var v122 = outputWindow.document;
    var v736 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v735 = v736 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v733 = v735 + "div.title {display: none}\n";
    var v728 = v733 + "div.info {font-weight: bold}\n";
    var v723 = v728 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v718 = v723 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v710 = v718 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v700 = v710 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v689 = v700 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v677 = v689 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v664 = v677 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v651 = v664 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v616 = v651 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v571 = v616 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v505 = v571 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v387 = v505 + "img {display: none}\n";
    var v123 = v387 + "</style>\n";
    v122.write(v123)
  }
  var v124 = outputWindow.document;
  var v572 = "</head>\n" + '<body class="main">\n';
  var v506 = v572 + '<div class="title">';
  var v388 = v506 + title$$8;
  var v125 = v388 + " results</div>\n";
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
  var v389 = dnaSequence$$1.search(/./);
  var v126 = v389 != -1;
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
  var v390 = testArray[0];
  var v130 = v390 != testString;
  if(v130) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v391 = testString.search(re$$2);
  var v131 = v391 == -1;
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
  var v392 = testNum.toFixed(3);
  var v134 = v392 != 2489.824;
  if(v134) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v393 = testNum.toPrecision(5);
  var v135 = v393 != 2489.8;
  if(v135) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v394 = theNumber$$1.search(/\d/);
  var v136 = v394 == -1;
  if(v136) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v507 = emblFile.search(/ID/);
  var v395 = v507 == -1;
  var v509 = !v395;
  if(v509) {
    var v573 = emblFile.search(/AC/);
    var v508 = v573 == -1;
    var v575 = !v508;
    if(v575) {
      var v617 = emblFile.search(/DE/);
      var v574 = v617 == -1;
      var v619 = !v574;
      if(v619) {
        var v618 = emblFile.search(/SQ/);
        v574 = v618 == -1
      }
      v508 = v574
    }
    v395 = v508
  }
  var v137 = v395;
  if(v137) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v396 = theNumber$$2.search(/\d/);
  var v138 = v396 == -1;
  if(v138) {
    alert("Please enter a number.");
    return false
  }
  var v140 = theNumber$$2 > maxInput$$2;
  if(v140) {
    var v397 = "Please enter a number less than or equal to " + maxInput$$2;
    var v139 = v397 + ".";
    alert(v139);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v398 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v141 = v398 != -1;
  if(v141) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v399 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v142 = v399 != -1;
  if(v142) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v510 = genBankFile.search(/LOCUS/);
  var v400 = v510 == -1;
  var v512 = !v400;
  if(v512) {
    var v576 = genBankFile.search(/DEFINITION/);
    var v511 = v576 == -1;
    var v578 = !v511;
    if(v578) {
      var v620 = genBankFile.search(/ACCESSION/);
      var v577 = v620 == -1;
      var v622 = !v577;
      if(v622) {
        var v621 = genBankFile.search(/ORIGIN/);
        v577 = v621 == -1
      }
      v511 = v577
    }
    v400 = v511
  }
  var v143 = v400;
  if(v143) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v513 = genBankFile$$1.search(/LOCUS/);
  var v401 = v513 == -1;
  var v515 = !v401;
  if(v515) {
    var v579 = genBankFile$$1.search(/DEFINITION/);
    var v514 = v579 == -1;
    var v581 = !v514;
    if(v581) {
      var v623 = genBankFile$$1.search(/ACCESSION/);
      var v580 = v623 == -1;
      var v625 = !v580;
      if(v625) {
        var v624 = genBankFile$$1.search(/ORIGIN/);
        v580 = v624 == -1
      }
      v514 = v580
    }
    v401 = v514
  }
  var v144 = v401;
  if(v144) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v402 = genBankFile$$1.search(/FEATURES {13}/);
  var v145 = v402 == -1;
  if(v145) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v516 = emblFile$$1.search(/ID/);
  var v403 = v516 == -1;
  var v518 = !v403;
  if(v518) {
    var v582 = emblFile$$1.search(/AC/);
    var v517 = v582 == -1;
    var v584 = !v517;
    if(v584) {
      var v626 = emblFile$$1.search(/DE/);
      var v583 = v626 == -1;
      var v628 = !v583;
      if(v628) {
        var v627 = emblFile$$1.search(/SQ/);
        v583 = v627 == -1
      }
      v517 = v583
    }
    v403 = v517
  }
  var v146 = v403;
  if(v146) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v404 = emblFile$$1.search(/^FT/m);
  var v147 = v404 == -1;
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
    var v405 = basePerLine / groupSize;
    var v151 = j$$6 <= v405;
    for(;v151;) {
      var v150 = k < groupSize;
      for(;v150;) {
        var v406 = k + i$$5;
        var v149 = text$$10.charAt(v406);
        lineOfText = lineOfText + v149;
        k = k + 1;
        v150 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v407 = basePerLine / groupSize;
      v151 = j$$6 <= v407
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
    var v408 = adjustment < 0;
    if(v408) {
      v408 = adjusted >= 0
    }
    var v155 = v408;
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
    var v409 = basePerLine$$2 / groupSize$$2;
    var v162 = j$$7 <= v409;
    for(;v162;) {
      var v158 = k$$1 < groupSize$$2;
      for(;v158;) {
        var v410 = i$$6 + k$$1;
        var v156 = v410 >= stopBase$$2;
        if(v156) {
          break
        }
        var v411 = k$$1 + i$$6;
        var v157 = text$$12.charAt(v411);
        lineOfText$$1 = lineOfText$$1 + v157;
        k$$1 = k$$1 + 1;
        v158 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v160 = numberPosition$$1 == "above";
      if(v160) {
        var v412 = adjustNumbering(i$$6, numberingAdjustment);
        var v159 = rightNum(v412, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v159
      }
      var v161 = i$$6 >= stopBase$$2;
      if(v161) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v413 = basePerLine$$2 / groupSize$$2;
      v162 = j$$7 <= v413
    }
    var v185 = numberPosition$$1 == "left";
    if(v185) {
      var v163 = outputWindow.document;
      var v585 = adjustNumbering(lineNum, numberingAdjustment);
      var v519 = rightNum(v585, "", 8, tabIn$$3);
      var v414 = v519 + lineOfText$$1;
      var v164 = v414 + "\n";
      v163.write(v164);
      var v168 = strands$$1 == "two";
      if(v168) {
        var v165 = outputWindow.document;
        var v586 = adjustNumbering(lineNum, numberingAdjustment);
        var v520 = rightNum(v586, "", 8, tabIn$$3);
        var v521 = complement(lineOfText$$1);
        var v415 = v520 + v521;
        var v166 = v415 + "\n";
        v165.write(v166);
        var v167 = outputWindow.document;
        v167.write("\n")
      }
    }else {
      var v184 = numberPosition$$1 == "right";
      if(v184) {
        var v169 = outputWindow.document;
        var v522 = adjustNumbering(i$$6, numberingAdjustment);
        var v416 = lineOfText$$1 + v522;
        var v170 = v416 + "\n";
        v169.write(v170);
        var v174 = strands$$1 == "two";
        if(v174) {
          var v171 = outputWindow.document;
          var v523 = complement(lineOfText$$1);
          var v524 = adjustNumbering(i$$6, numberingAdjustment);
          var v417 = v523 + v524;
          var v172 = v417 + "\n";
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
            var v418 = complement(lineOfText$$1);
            var v180 = v418 + "\n";
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
    var v419 = basePerLine$$3 / groupSize$$3;
    var v193 = j$$8 <= v419;
    for(;v193;) {
      var v189 = k$$2 < groupSize$$3;
      for(;v189;) {
        var v420 = i$$7 + k$$2;
        var v187 = v420 >= stopBase$$3;
        if(v187) {
          break
        }
        var v421 = k$$2 + i$$7;
        var v188 = text$$13.charAt(v421);
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
      var v422 = basePerLine$$3 / groupSize$$3;
      v193 = j$$8 <= v422
    }
    var v204 = numberPosition$$2 == "left";
    if(v204) {
      var v194 = outputWindow.document;
      var v525 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v423 = v525 + lineOfText$$2;
      var v195 = v423 + "\n";
      v194.write(v195)
    }else {
      var v203 = numberPosition$$2 == "right";
      if(v203) {
        var v196 = outputWindow.document;
        var v424 = lineOfText$$2 + i$$7;
        var v197 = v424 + "\n";
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
  var v526 = sequence$$13.length;
  var v425 = v526 <= firstIndexToMutate;
  var v528 = !v425;
  if(v528) {
    var v527 = lastIndexToMutate < 0;
    var v587 = !v527;
    if(v587) {
      v527 = lastIndexToMutate <= firstIndexToMutate
    }
    v425 = v527
  }
  var v206 = v425;
  if(v206) {
    numMut = 0
  }
  var i$$8 = 0;
  var v214 = i$$8 < numMut;
  for(;v214;) {
    maxNum = sequence$$13.length;
    var v426 = Math.random();
    var v207 = v426 * maxNum;
    randNum = Math.floor(v207);
    var v427 = randNum < firstIndexToMutate;
    var v529 = !v427;
    if(v529) {
      v427 = randNum > lastIndexToMutate
    }
    var v208 = v427;
    if(v208) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v214 = i$$8 < numMut;
      continue
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for(;needNewChar;) {
      var v428 = Math.random();
      var v429 = components$$1.length;
      var v209 = v428 * v429;
      componentsIndex = Math.round(v209);
      var v430 = components$$1.length;
      var v210 = componentsIndex == v430;
      if(v210) {
        componentsIndex = 0
      }
      var v431 = components$$1[componentsIndex];
      var v211 = v431 != currentChar;
      if(v211) {
        needNewChar = false
      }
    }
    var v432 = sequence$$13.substring(0, randNum);
    var v433 = components$$1[componentsIndex];
    var v212 = v432 + v433;
    var v434 = randNum + 1;
    var v435 = sequence$$13.length;
    var v213 = sequence$$13.substring(v434, v435);
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
    var v436 = Math.random();
    var v437 = components$$2.length;
    var v217 = v436 * v437;
    tempNum$$1 = Math.floor(v217);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v438 = sequence$$14.length;
    var v220 = v438 == 60;
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
    var v588 = sequence$$15.length;
    var v530 = v588 - lookAhead;
    var v531 = sequence$$15.length;
    var v439 = sequence$$15.substring(v530, v531);
    var v225 = v439 + sequence$$15;
    var v226 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v225 + v226;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v228 = outputWindow.document;
  v228.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  var v229 = outputWindow.document;
  var v589 = '<tr><td class="title" width="200px">' + "Site:";
  var v532 = v589 + '</td><td class="title">';
  var v440 = v532 + "Positions:";
  var v230 = v440 + "</td></tr>\n";
  v229.write(v230);
  var i$$9 = 0;
  var v441 = arrayOfItems.length;
  var v246 = i$$9 < v441;
  for(;v246;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v442 = arrayOfItems[i$$9];
    var v231 = v442.match(/\/.+\//);
    matchExp = v231 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    var v590 = arrayOfItems[i$$9];
    var v533 = v590.match(/\)\D*\d+/);
    var v443 = v533.toString();
    var v232 = v443.replace(/\)\D*/, "");
    cutDistance = parseFloat(v232);
    var v238 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v238;) {
      var v233 = matchExp.lastIndex;
      matchPosition = v233 - cutDistance;
      var v444 = matchPosition >= lowerLimit;
      if(v444) {
        v444 = matchPosition < upperLimit
      }
      var v236 = v444;
      if(v236) {
        timesFound = timesFound + 1;
        var v234 = tempString$$1 + ", ";
        var v445 = matchPosition - shiftValue;
        var v235 = v445 + 1;
        tempString$$1 = v234 + v235
      }
      var v237 = matchExp;
      var v534 = matchExp.lastIndex;
      var v591 = RegExp.lastMatch;
      var v535 = v591.length;
      var v446 = v534 - v535;
      v237.lastIndex = v446 + 1;
      v238 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    var v447 = tempString$$1.search(/\d/);
    var v239 = v447 != -1;
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
    var v678 = '<tr><td class="' + backGroundClass;
    var v665 = v678 + '">';
    var v701 = arrayOfItems[i$$9];
    var v690 = v701.match(/\([^\(]+\)/);
    var v679 = v690.toString();
    var v666 = v679.replace(/\(|\)/g, "");
    var v652 = v665 + v666;
    var v629 = v652 + '</td><td class="';
    var v592 = v629 + backGroundClass;
    var v536 = v592 + '">';
    var v448 = v536 + tempString$$1;
    var v245 = v448 + "</td></tr>\n";
    v244.write(v245);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v449 = arrayOfItems.length;
    v246 = i$$9 < v449
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
  var v653 = '<tr><td class="title">' + "Pattern:";
  var v630 = v653 + '</td><td class="title">';
  var v593 = v630 + "Times found:";
  var v537 = v593 + '</td><td class="title">';
  var v450 = v537 + "Percentage:";
  var v250 = v450 + "</td></tr>\n";
  v249.write(v250);
  var i$$10 = 0;
  var v451 = arrayOfItems$$1.length;
  var v259 = i$$10 < v451;
  for(;v259;) {
    var tempNumber = 0;
    var v452 = arrayOfItems$$1[i$$10];
    var v251 = v452.match(/\/[^\/]+\//);
    var matchExp$$1 = v251 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    var v453 = sequence$$16.search(matchExp$$1);
    var v253 = v453 != -1;
    if(v253) {
      var v252 = sequence$$16.match(matchExp$$1);
      tempNumber = v252.length
    }
    var percentage = 0;
    var v538 = originalLength + 1;
    var v631 = arrayOfItems$$1[i$$10];
    var v594 = v631.match(/\d+/);
    var v539 = parseFloat(v594);
    var v454 = v538 - v539;
    var v256 = v454 > 0;
    if(v256) {
      var v254 = 100 * tempNumber;
      var v455 = originalLength + 1;
      var v595 = arrayOfItems$$1[i$$10];
      var v540 = v595.match(/\d+/);
      var v456 = parseFloat(v540);
      var v255 = v455 - v456;
      percentage = v254 / v255
    }
    var v257 = outputWindow.document;
    var v702 = arrayOfItems$$1[i$$10];
    var v691 = v702.match(/\([^\(]+\)\b/);
    var v680 = v691.toString();
    var v667 = v680.replace(/\(|\)/g, "");
    var v654 = "<tr><td>" + v667;
    var v632 = v654 + "</td><td>";
    var v596 = v632 + tempNumber;
    var v541 = v596 + "</td><td>";
    var v542 = percentage.toFixed(2);
    var v457 = v541 + v542;
    var v258 = v457 + "</td></tr>\n";
    v257.write(v258);
    i$$10 = i$$10 + 1;
    var v458 = arrayOfItems$$1.length;
    v259 = i$$10 < v458
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
  var v459 = sequence$$17.length;
  var v267 = v459 > 0;
  for(;v267;) {
    maxNum$$1 = sequence$$17.length;
    var v460 = Math.random();
    var v261 = v460 * maxNum$$1;
    randNum$$1 = Math.floor(v261);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v262 = randNum$$1 + 1;
    var v263 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v262, v263);
    sequence$$17 = tempString1 + tempString2;
    var v461 = tempSeq.length;
    var v266 = v461 == 60;
    if(v266) {
      var v264 = outputWindow.document;
      var v265 = tempSeq + "\n";
      v264.write(v265);
      tempSeq = ""
    }
    var v462 = sequence$$17.length;
    v267 = v462 > 0
  }
  var v268 = outputWindow.document;
  var v269 = tempSeq + "\n";
  v268.write(v269);
  return true
}
function splitFasta(theDocument) {
  JAM.startProfile('compute');

  var maxInput$$3 = 5E5;
  var sequences = new Array;
  var v463 = testScript();
  var v270 = v463 == false;
  if(v270) {
    return false
  }
  var v633 = theDocument.forms;
  var v597 = v633[0];
  var v543 = v597.elements;
  var v464 = v543[1];
  var v271 = v464.value;
  var newLength = v271.replace(/[^\d]/g, "");
  var v634 = theDocument.forms;
  var v598 = v634[0];
  var v544 = v598.elements;
  var v465 = v544[2];
  var v272 = v465.value;
  var overlap = v272.replace(/[^\d]/g, "");
  var v668 = theDocument.forms;
  var v655 = v668[0];
  var v635 = v655.elements;
  var v599 = v635[0];
  var v545 = checkFormElement(v599);
  var v466 = v545 == false;
  var v547 = !v466;
  if(v547) {
    var v692 = theDocument.forms;
    var v681 = v692[0];
    var v669 = v681.elements;
    var v656 = v669[0];
    var v636 = v656.value;
    var v600 = checkTextLength(v636, maxInput$$3);
    var v546 = v600 == false;
    var v602 = !v546;
    if(v602) {
      var v637 = verifyMaxDigits(newLength, maxInput$$3);
      var v601 = v637 == false;
      var v639 = !v601;
      if(v639) {
        var v638 = verifyMaxDigits(overlap, maxInput$$3);
        v601 = v638 == false
      }
      v546 = v601
    }
    v466 = v546
  }
  var v273 = v466;
  if(v273) {
    return false
  }
  newLength = parseInt(newLength);
  overlap = parseInt(overlap);
  openWindow("Split FASTA");
  openPre();
  var v640 = theDocument.forms;
  var v603 = v640[0];
  var v548 = v603.elements;
  var v467 = v548[0];
  var v274 = v467.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v274);
  var i$$11 = 0;
  var v468 = arrayOfFasta$$1.length;
  var v283 = i$$11 < v468;
  for(;v283;) {
    var v275 = arrayOfFasta$$1[i$$11];
    var sequence$$18 = getSequenceFromFasta(v275);
    sequence$$18 = removeNonLetters(sequence$$18);
    var v276 = arrayOfFasta$$1[i$$11];
    var title$$9 = getTitleFromFasta(v276);
    var length$$11 = sequence$$18.length;
    var seqCount = 1;
    var j$$10 = 0;
    var v282 = j$$10 < length$$11;
    for(;v282;) {
      var v277 = j$$10 > overlap;
      if(v277) {
        j$$10 = j$$10 - overlap
      }
      var v278 = j$$10 + newLength;
      var subseq = sequence$$18.substring(j$$10, v278);
      var subseq_length = subseq.length;
      var start$$4 = j$$10 + 1;
      var v279 = start$$4 + subseq_length;
      var end$$1 = v279 - 1;
      var v280 = outputWindow.document;
      var v729 = ">fragment_" + seqCount;
      var v724 = v729 + ";";
      var v719 = v724 + title$$9;
      var v711 = v719 + "_start=";
      var v703 = v711 + start$$4;
      var v693 = v703 + ";end=";
      var v682 = v693 + end$$1;
      var v670 = v682 + ";length=";
      var v657 = v670 + subseq_length;
      var v641 = v657 + ";source_length=";
      var v604 = v641 + length$$11;
      var v549 = v604 + "\n";
      var v550 = addReturns(subseq);
      var v469 = v549 + v550;
      var v281 = v469 + "\n\n";
      v280.write(v281);
      seqCount = seqCount + 1;
      j$$10 = j$$10 + newLength;
      v282 = j$$10 < length$$11
    }
    i$$11 = i$$11 + 1;
    var v470 = arrayOfFasta$$1.length;
    v283 = i$$11 < v470
  }
  closePre();
  closeWindow();

  JAM.stopProfile('compute');
  return true
}
document.onload = v2;
var v284 = document.getElementById("submitbtn");
v284.onclick = v3;
var v285 = document.getElementById("clearbtn");
v285.onclick = v4;

}

JAM.stopProfile('load');
