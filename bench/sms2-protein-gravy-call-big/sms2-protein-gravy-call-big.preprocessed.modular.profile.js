
JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
function v4() {
  var v549 = document.forms;
  var v473 = v549[0];
  var v287 = v473.elements;
  var v5 = v287[0];
  v5.value = " ";
  return
}
function v3() {
  try {
    proteinGravy(document)
  }catch(e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    alert(v6)
  }
  return
}
function v2() {
  var v288 = document.main_form;
  var v7 = v288.main_submit;
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
  var v289 = arrayOfSequences.length;
  var v9 = v289 < 2;
  if(v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v290 = arrayOfTitles.length;
  var v11 = i$$1 < v290;
  for(;v11;) {
    var v550 = arrayOfTitles[i$$1];
    var v474 = v550.search(/\S/);
    var v291 = v474 == -1;
    var v476 = !v291;
    if(v476) {
      var v598 = arrayOfSequences[i$$1];
      var v551 = v598.search(/\S/);
      var v475 = v551 == -1;
      var v553 = !v475;
      if(v553) {
        var v599 = arrayOfSequences[i$$1];
        var v552 = v599.length;
        v475 = v552 != lengthOfAlign
      }
      v291 = v475
    }
    var v10 = v291;
    if(v10) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v292 = arrayOfTitles.length;
    v11 = i$$1 < v292
  }
  return true
}
function checkCodonTable(codonTable) {
  var v477 = codonTable.search(/AmAcid/);
  var v293 = v477 == -1;
  var v479 = !v293;
  if(v479) {
    var v554 = codonTable.search(/Codon/);
    var v478 = v554 == -1;
    var v556 = !v478;
    if(v556) {
      var v600 = codonTable.search(/Number/);
      var v555 = v600 == -1;
      var v602 = !v555;
      if(v602) {
        var v629 = codonTable.search(/\/1000/);
        var v601 = v629 == -1;
        var v631 = !v601;
        if(v631) {
          var v630 = codonTable.search(/Fraction\s*\.\./);
          v601 = v630 == -1
        }
        v555 = v601
      }
      v478 = v555
    }
    v293 = v478
  }
  var v12 = v293;
  if(v12) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v480 = formElement.value;
  var v294 = v480.search(/\S/);
  var v13 = v294 == -1;
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
  var v295 = arrayOfPatterns.length;
  var v16 = z$$2 < v295;
  for(;v16;) {
    var v481 = arrayOfPatterns[z$$2];
    var v296 = v481.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v14 = v296 == -1;
    if(v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    var v482 = arrayOfPatterns[z$$2];
    var v297 = moreExpressionCheck(v482);
    var v15 = v297 == false;
    if(v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v298 = arrayOfPatterns.length;
    v16 = z$$2 < v298
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v299 = arrayOfPatterns.length;
  var v25 = j < v299;
  for(;v25;) {
    var v19 = geneticCodeMatchExp;
    var v20 = j;
    var v557 = arrayOfPatterns[j];
    var v483 = v557.match(/\/.+\//);
    var v300 = v483 + "gi";
    var v714 = eval(v300);
    v19[v20] = v714;
    var v21 = geneticCodeMatchResult;
    var v22 = j;
    var v484 = arrayOfPatterns[j];
    var v301 = v484.match(/=[a-zA-Z\*]/);
    var v715 = v301.toString();
    v21[v22] = v715;
    var v23 = geneticCodeMatchResult;
    var v24 = j;
    var v302 = geneticCodeMatchResult[j];
    var v716 = v302.replace(/=/g, "");
    v23[v24] = v716;
    j = j + 1;
    var v303 = arrayOfPatterns.length;
    v25 = j < v303
  }
  var i$$2 = 0;
  var v485 = testSequence.length;
  var v304 = v485 - 3;
  var v32 = i$$2 <= v304;
  for(;v32;) {
    var v26 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v26);
    j = 0;
    var v305 = geneticCodeMatchExp.length;
    var v30 = j < v305;
    for(;v30;) {
      var v486 = geneticCodeMatchExp[j];
      var v306 = codon.search(v486);
      var v29 = v306 != -1;
      if(v29) {
        var v28 = oneMatch == true;
        if(v28) {
          var v307 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v27 = v307 + ".";
          alert(v27);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v308 = geneticCodeMatchExp.length;
      v30 = j < v308
    }
    var v31 = oneMatch == false;
    if(v31) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v487 = testSequence.length;
    var v309 = v487 - 3;
    v32 = i$$2 <= v309
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v310 = arrayOfPatterns$$1.length;
  var v34 = z$$3 < v310;
  for(;v34;) {
    var v488 = arrayOfPatterns$$1[z$$3];
    var v311 = v488.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v33 = v311 != -1;
    if(v33) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v312 = arrayOfPatterns$$1.length;
    v34 = z$$3 < v312
  }
  var i$$3 = 0;
  var v313 = arrayOfPatterns$$1.length;
  var v38 = i$$3 < v313;
  for(;v38;) {
    var v489 = arrayOfPatterns$$1[i$$3];
    var v314 = "[" + v489;
    var v35 = v314 + "]";
    var re = new RegExp(v35, "gi");
    var j$$1 = i$$3 + 1;
    var v315 = arrayOfPatterns$$1.length;
    var v37 = j$$1 < v315;
    for(;v37;) {
      var v490 = arrayOfPatterns$$1[j$$1];
      var v316 = v490.search(re);
      var v36 = v316 != -1;
      if(v36) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v317 = arrayOfPatterns$$1.length;
      v37 = j$$1 < v317
    }
    i$$3 = i$$3 + 1;
    var v318 = arrayOfPatterns$$1.length;
    v38 = i$$3 < v318
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v319 = arrayOfPatterns$$2.length;
  var v41 = z$$4 < v319;
  for(;v41;) {
    var v491 = arrayOfPatterns$$2[z$$4];
    var v320 = v491.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v39 = v320 == -1;
    if(v39) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    var v492 = arrayOfPatterns$$2[z$$4];
    var v321 = moreExpressionCheck(v492);
    var v40 = v321 == false;
    if(v40) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v322 = arrayOfPatterns$$2.length;
    v41 = z$$4 < v322
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v558 = getSequenceFromFasta(text$$7);
  var v493 = v558.replace(/[^A-Za-z]/g, "");
  var v323 = v493.length;
  var v43 = v323 > maxInput;
  if(v43) {
    var v324 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v42 = v324 + " characters.";
    alert(v42);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v325 = text$$8.length;
  var v45 = v325 > maxInput$$1;
  if(v45) {
    var v326 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v44 = v326 + " characters.";
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
  var v327 = alignArray.length;
  var v52 = v327 < 3;
  if(v52) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v328 = alignArray.length;
  var v54 = i$$4 < v328;
  for(;v54;) {
    var v494 = alignArray[i$$4];
    var v329 = v494.search(/[^\s]+\s/);
    var v53 = v329 == -1;
    if(v53) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v330 = alignArray.length;
    v54 = i$$4 < v330
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
  var v331 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v57 = v331 != -1;
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
  var v332 = sequence$$2.length;
  var v58 = "&gt;results for " + v332;
  var stringToReturn = v58 + " residue sequence ";
  var v333 = fastaSequenceTitle.search(/[^\s]/);
  var v60 = v333 != -1;
  if(v60) {
    var v334 = stringToReturn + '"';
    var v59 = v334 + fastaSequenceTitle;
    stringToReturn = v59 + '"'
  }
  var v335 = stringToReturn + ' starting "';
  var v336 = sequence$$2.substring(0, 10);
  var v61 = v335 + v336;
  stringToReturn = v61 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v337 = sequenceOne.length;
  var v62 = "Search results for " + v337;
  var stringToReturn$$1 = v62 + " residue sequence ";
  var v338 = fastaSequenceTitleOne.search(/[^\s]/);
  var v64 = v338 != -1;
  if(v64) {
    var v339 = stringToReturn$$1 + '"';
    var v63 = v339 + fastaSequenceTitleOne;
    stringToReturn$$1 = v63 + '"'
  }
  var v340 = stringToReturn$$1 + ' starting "';
  var v341 = sequenceOne.substring(0, 10);
  var v65 = v340 + v341;
  stringToReturn$$1 = v65 + '"\n';
  var v342 = stringToReturn$$1 + "and ";
  var v343 = sequenceTwo.length;
  var v66 = v342 + v343;
  stringToReturn$$1 = v66 + " residue sequence ";
  var v344 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v68 = v344 != -1;
  if(v68) {
    var v345 = stringToReturn$$1 + '"';
    var v67 = v345 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v67 + '"'
  }
  var v346 = stringToReturn$$1 + ' starting "';
  var v347 = sequenceTwo.substring(0, 10);
  var v69 = v346 + v347;
  stringToReturn$$1 = v69 + '"';
  var v70 = '<div class="info">' + stringToReturn$$1;
  return v70 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v71 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v71);
  var j$$2 = 0;
  var v348 = arrayOfPatterns$$3.length;
  var v74 = j$$2 < v348;
  for(;v74;) {
    var v72 = geneticCodeMatchExp$$1;
    var v73 = j$$2;
    var v559 = arrayOfPatterns$$3[j$$2];
    var v495 = v559.match(/\/.+\//);
    var v349 = v495 + "gi";
    var v717 = eval(v349);
    v72[v73] = v717;
    j$$2 = j$$2 + 1;
    var v350 = arrayOfPatterns$$3.length;
    v74 = j$$2 < v350
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v75 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v75);
  var j$$3 = 0;
  var v351 = arrayOfPatterns$$4.length;
  var v80 = j$$3 < v351;
  for(;v80;) {
    var v76 = geneticCodeMatchResult$$1;
    var v77 = j$$3;
    var v496 = arrayOfPatterns$$4[j$$3];
    var v352 = v496.match(/=[a-zA-Z\*]/);
    var v718 = v352.toString();
    v76[v77] = v718;
    var v78 = geneticCodeMatchResult$$1;
    var v79 = j$$3;
    var v353 = geneticCodeMatchResult$$1[j$$3];
    var v719 = v353.replace(/=/g, "");
    v78[v79] = v719;
    j$$3 = j$$3 + 1;
    var v354 = arrayOfPatterns$$4.length;
    v80 = j$$3 < v354
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v355 = sequence$$3.length;
  var v81 = "Results for " + v355;
  var stringToReturn$$2 = v81 + " residue sequence ";
  var v356 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v83 = v356 != -1;
  if(v83) {
    var v357 = stringToReturn$$2 + '"';
    var v82 = v357 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v82 + '"'
  }
  var v358 = stringToReturn$$2 + ' starting "';
  var v359 = sequence$$3.substring(0, 10);
  var v84 = v358 + v359;
  stringToReturn$$2 = v84 + '"';
  var v85 = '<div class="info">' + stringToReturn$$2;
  return v85 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v497 = "Results for " + topology;
  var v360 = v497 + " ";
  var v361 = sequence$$4.length;
  var v86 = v360 + v361;
  var stringToReturn$$3 = v86 + " residue sequence ";
  var v362 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v88 = v362 != -1;
  if(v88) {
    var v363 = stringToReturn$$3 + '"';
    var v87 = v363 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v87 + '"'
  }
  var v364 = stringToReturn$$3 + ' starting "';
  var v365 = sequence$$4.substring(0, 10);
  var v89 = v364 + v365;
  stringToReturn$$3 = v89 + '"';
  var v90 = '<div class="info">' + stringToReturn$$3;
  return v90 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v366 = sequenceOne$$1.length;
  var v91 = "Alignment results for " + v366;
  var stringToReturn$$4 = v91 + " residue sequence ";
  var v367 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v93 = v367 != -1;
  if(v93) {
    var v368 = stringToReturn$$4 + '"';
    var v92 = v368 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v92 + '"'
  }
  var v369 = stringToReturn$$4 + ' starting "';
  var v370 = sequenceOne$$1.substring(0, 10);
  var v94 = v369 + v370;
  stringToReturn$$4 = v94 + '"\n';
  var v371 = stringToReturn$$4 + "and ";
  var v372 = sequenceTwo$$1.length;
  var v95 = v371 + v372;
  stringToReturn$$4 = v95 + " residue sequence ";
  var v373 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v97 = v373 != -1;
  if(v97) {
    var v374 = stringToReturn$$4 + '"';
    var v96 = v374 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v96 + '"'
  }
  var v375 = stringToReturn$$4 + ' starting "';
  var v376 = sequenceTwo$$1.substring(0, 10);
  var v98 = v375 + v376;
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
    var v377 = Math.random();
    var v378 = components.length;
    var v100 = v377 * v378;
    tempNum = Math.floor(v100);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4 = j$$4 + 1;
    v101 = j$$4 < lengthOut
  }
  return sequenceArray.join("")
}
function getSequenceFromFasta(sequenceRecord) {
  var v379 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v102 = v379 != -1;
  if(v102) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "")
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v380 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v104 = v380 != -1;
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
  var v498 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v381 = v498 != -1;
  var v500 = !v381;
  if(v500) {
    var v560 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    var v499 = v560 != -1;
    var v562 = !v499;
    if(v562) {
      var v603 = expressionToCheck.search(/\[\]/);
      var v561 = v603 != -1;
      var v605 = !v561;
      if(v605) {
        var v632 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
        var v604 = v632 != -1;
        var v634 = !v604;
        if(v634) {
          var v644 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
          var v633 = v644 != -1;
          var v646 = !v633;
          if(v646) {
            var v656 = expressionToCheck.search(/\|\|/);
            var v645 = v656 != -1;
            var v658 = !v645;
            if(v658) {
              var v667 = expressionToCheck.search(/\/\|/);
              var v657 = v667 != -1;
              var v669 = !v657;
              if(v669) {
                var v676 = expressionToCheck.search(/\|\//);
                var v668 = v676 != -1;
                var v678 = !v668;
                if(v678) {
                  var v685 = expressionToCheck.search(/\[.\]/);
                  var v677 = v685 != -1;
                  var v687 = !v677;
                  if(v687) {
                    var v692 = expressionToCheck.search(/\</);
                    var v686 = v692 != -1;
                    var v694 = !v686;
                    if(v694) {
                      var v693 = expressionToCheck.search(/\>/);
                      v686 = v693 != -1
                    }
                    v677 = v686
                  }
                  v668 = v677
                }
                v657 = v668
              }
              v645 = v657
            }
            v633 = v645
          }
          v604 = v633
        }
        v561 = v604
      }
      v499 = v561
    }
    v381 = v499
  }
  var v105 = v381;
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
  var v563 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v501 = v563 + "<head>\n";
  var v382 = v501 + "<title>Sequence Manipulation Suite</title>\n";
  var v111 = v382 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v110.write(v111);
  if(isColor) {
    var v112 = outputWindow.document;
    var v707 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v703 = v707 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v699 = v703 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v695 = v699 + "div.info {font-weight: bold}\n";
    var v688 = v695 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v679 = v688 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v670 = v679 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v659 = v670 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v647 = v659 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v635 = v647 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v606 = v635 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v564 = v606 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v502 = v564 + "td.many {color: #000000}\n";
    var v383 = v502 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v113 = v383 + "</style>\n";
    v112.write(v113)
  }else {
    var v114 = outputWindow.document;
    var v711 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v708 = v711 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v704 = v708 + "div.title {display: none}\n";
    var v700 = v704 + "div.info {font-weight: bold}\n";
    var v696 = v700 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v689 = v696 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v680 = v689 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v671 = v680 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v660 = v671 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v648 = v660 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v636 = v648 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v607 = v636 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v565 = v607 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v503 = v565 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v384 = v503 + "img {display: none}\n";
    var v115 = v384 + "</style>\n";
    v114.write(v115)
  }
  var v116 = outputWindow.document;
  var v566 = "</head>\n" + '<body class="main">\n';
  var v504 = v566 + '<div class="title">';
  var v385 = v504 + title$$6;
  var v117 = v385 + " results</div>\n";
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
  var v567 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v505 = v567 + "<head>\n";
  var v386 = v505 + "<title>Sequence Manipulation Suite</title>\n";
  var v119 = v386 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v118.write(v119);
  if(isBackground) {
    var v120 = outputWindow.document;
    var v709 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v705 = v709 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v701 = v705 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v697 = v701 + "div.info {font-weight: bold}\n";
    var v690 = v697 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v681 = v690 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v672 = v681 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v661 = v672 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v649 = v661 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v637 = v649 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v608 = v637 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v568 = v608 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v506 = v568 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v387 = v506 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v121 = v387 + "</style>\n";
    v120.write(v121)
  }else {
    var v122 = outputWindow.document;
    var v713 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v712 = v713 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v710 = v712 + "div.title {display: none}\n";
    var v706 = v710 + "div.info {font-weight: bold}\n";
    var v702 = v706 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v698 = v702 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v691 = v698 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v682 = v691 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v673 = v682 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v662 = v673 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v650 = v662 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v638 = v650 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v609 = v638 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v569 = v609 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v507 = v569 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v388 = v507 + "img {display: none}\n";
    var v123 = v388 + "</style>\n";
    v122.write(v123)
  }
  var v124 = outputWindow.document;
  var v570 = "</head>\n" + '<body class="main">\n';
  var v508 = v570 + '<div class="title">';
  var v389 = v508 + title$$8;
  var v125 = v389 + " results</div>\n";
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
  var v390 = dnaSequence$$1.search(/./);
  var v126 = v390 != -1;
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
  var v391 = testArray[0];
  var v130 = v391 != testString;
  if(v130) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v392 = testString.search(re$$2);
  var v131 = v392 == -1;
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
  var v393 = testNum.toFixed(3);
  var v134 = v393 != 2489.824;
  if(v134) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v394 = testNum.toPrecision(5);
  var v135 = v394 != 2489.8;
  if(v135) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v395 = theNumber$$1.search(/\d/);
  var v136 = v395 == -1;
  if(v136) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v509 = emblFile.search(/ID/);
  var v396 = v509 == -1;
  var v511 = !v396;
  if(v511) {
    var v571 = emblFile.search(/AC/);
    var v510 = v571 == -1;
    var v573 = !v510;
    if(v573) {
      var v610 = emblFile.search(/DE/);
      var v572 = v610 == -1;
      var v612 = !v572;
      if(v612) {
        var v611 = emblFile.search(/SQ/);
        v572 = v611 == -1
      }
      v510 = v572
    }
    v396 = v510
  }
  var v137 = v396;
  if(v137) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v397 = theNumber$$2.search(/\d/);
  var v138 = v397 == -1;
  if(v138) {
    alert("Please enter a number.");
    return false
  }
  var v140 = theNumber$$2 > maxInput$$2;
  if(v140) {
    var v398 = "Please enter a number less than or equal to " + maxInput$$2;
    var v139 = v398 + ".";
    alert(v139);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v399 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v141 = v399 != -1;
  if(v141) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v400 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v142 = v400 != -1;
  if(v142) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v512 = genBankFile.search(/LOCUS/);
  var v401 = v512 == -1;
  var v514 = !v401;
  if(v514) {
    var v574 = genBankFile.search(/DEFINITION/);
    var v513 = v574 == -1;
    var v576 = !v513;
    if(v576) {
      var v613 = genBankFile.search(/ACCESSION/);
      var v575 = v613 == -1;
      var v615 = !v575;
      if(v615) {
        var v614 = genBankFile.search(/ORIGIN/);
        v575 = v614 == -1
      }
      v513 = v575
    }
    v401 = v513
  }
  var v143 = v401;
  if(v143) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v515 = genBankFile$$1.search(/LOCUS/);
  var v402 = v515 == -1;
  var v517 = !v402;
  if(v517) {
    var v577 = genBankFile$$1.search(/DEFINITION/);
    var v516 = v577 == -1;
    var v579 = !v516;
    if(v579) {
      var v616 = genBankFile$$1.search(/ACCESSION/);
      var v578 = v616 == -1;
      var v618 = !v578;
      if(v618) {
        var v617 = genBankFile$$1.search(/ORIGIN/);
        v578 = v617 == -1
      }
      v516 = v578
    }
    v402 = v516
  }
  var v144 = v402;
  if(v144) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v403 = genBankFile$$1.search(/FEATURES {13}/);
  var v145 = v403 == -1;
  if(v145) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v518 = emblFile$$1.search(/ID/);
  var v404 = v518 == -1;
  var v520 = !v404;
  if(v520) {
    var v580 = emblFile$$1.search(/AC/);
    var v519 = v580 == -1;
    var v582 = !v519;
    if(v582) {
      var v619 = emblFile$$1.search(/DE/);
      var v581 = v619 == -1;
      var v621 = !v581;
      if(v621) {
        var v620 = emblFile$$1.search(/SQ/);
        v581 = v620 == -1
      }
      v519 = v581
    }
    v404 = v519
  }
  var v146 = v404;
  if(v146) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v405 = emblFile$$1.search(/^FT/m);
  var v147 = v405 == -1;
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
    var v406 = basePerLine / groupSize;
    var v151 = j$$6 <= v406;
    for(;v151;) {
      var v150 = k < groupSize;
      for(;v150;) {
        var v407 = k + i$$5;
        var v149 = text$$10.charAt(v407);
        lineOfText = lineOfText + v149;
        k = k + 1;
        v150 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v408 = basePerLine / groupSize;
      v151 = j$$6 <= v408
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
    var v409 = adjustment < 0;
    if(v409) {
      v409 = adjusted >= 0
    }
    var v155 = v409;
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
    var v410 = basePerLine$$2 / groupSize$$2;
    var v162 = j$$7 <= v410;
    for(;v162;) {
      var v158 = k$$1 < groupSize$$2;
      for(;v158;) {
        var v411 = i$$6 + k$$1;
        var v156 = v411 >= stopBase$$2;
        if(v156) {
          break
        }
        var v412 = k$$1 + i$$6;
        var v157 = text$$12.charAt(v412);
        lineOfText$$1 = lineOfText$$1 + v157;
        k$$1 = k$$1 + 1;
        v158 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v160 = numberPosition$$1 == "above";
      if(v160) {
        var v413 = adjustNumbering(i$$6, numberingAdjustment);
        var v159 = rightNum(v413, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v159
      }
      var v161 = i$$6 >= stopBase$$2;
      if(v161) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v414 = basePerLine$$2 / groupSize$$2;
      v162 = j$$7 <= v414
    }
    var v185 = numberPosition$$1 == "left";
    if(v185) {
      var v163 = outputWindow.document;
      var v583 = adjustNumbering(lineNum, numberingAdjustment);
      var v521 = rightNum(v583, "", 8, tabIn$$3);
      var v415 = v521 + lineOfText$$1;
      var v164 = v415 + "\n";
      v163.write(v164);
      var v168 = strands$$1 == "two";
      if(v168) {
        var v165 = outputWindow.document;
        var v584 = adjustNumbering(lineNum, numberingAdjustment);
        var v522 = rightNum(v584, "", 8, tabIn$$3);
        var v523 = complement(lineOfText$$1);
        var v416 = v522 + v523;
        var v166 = v416 + "\n";
        v165.write(v166);
        var v167 = outputWindow.document;
        v167.write("\n")
      }
    }else {
      var v184 = numberPosition$$1 == "right";
      if(v184) {
        var v169 = outputWindow.document;
        var v524 = adjustNumbering(i$$6, numberingAdjustment);
        var v417 = lineOfText$$1 + v524;
        var v170 = v417 + "\n";
        v169.write(v170);
        var v174 = strands$$1 == "two";
        if(v174) {
          var v171 = outputWindow.document;
          var v525 = complement(lineOfText$$1);
          var v526 = adjustNumbering(i$$6, numberingAdjustment);
          var v418 = v525 + v526;
          var v172 = v418 + "\n";
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
            var v419 = complement(lineOfText$$1);
            var v180 = v419 + "\n";
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
    var v420 = basePerLine$$3 / groupSize$$3;
    var v193 = j$$8 <= v420;
    for(;v193;) {
      var v189 = k$$2 < groupSize$$3;
      for(;v189;) {
        var v421 = i$$7 + k$$2;
        var v187 = v421 >= stopBase$$3;
        if(v187) {
          break
        }
        var v422 = k$$2 + i$$7;
        var v188 = text$$13.charAt(v422);
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
      var v423 = basePerLine$$3 / groupSize$$3;
      v193 = j$$8 <= v423
    }
    var v204 = numberPosition$$2 == "left";
    if(v204) {
      var v194 = outputWindow.document;
      var v527 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v424 = v527 + lineOfText$$2;
      var v195 = v424 + "\n";
      v194.write(v195)
    }else {
      var v203 = numberPosition$$2 == "right";
      if(v203) {
        var v196 = outputWindow.document;
        var v425 = lineOfText$$2 + i$$7;
        var v197 = v425 + "\n";
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
  var v528 = sequence$$13.length;
  var v426 = v528 <= firstIndexToMutate;
  var v530 = !v426;
  if(v530) {
    var v529 = lastIndexToMutate < 0;
    var v585 = !v529;
    if(v585) {
      v529 = lastIndexToMutate <= firstIndexToMutate
    }
    v426 = v529
  }
  var v206 = v426;
  if(v206) {
    numMut = 0
  }
  var i$$8 = 0;
  var v214 = i$$8 < numMut;
  for(;v214;) {
    maxNum = sequence$$13.length;
    var v427 = Math.random();
    var v207 = v427 * maxNum;
    randNum = Math.floor(v207);
    var v428 = randNum < firstIndexToMutate;
    var v531 = !v428;
    if(v531) {
      v428 = randNum > lastIndexToMutate
    }
    var v208 = v428;
    if(v208) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v214 = i$$8 < numMut;
      continue
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for(;needNewChar;) {
      var v429 = Math.random();
      var v430 = components$$1.length;
      var v209 = v429 * v430;
      componentsIndex = Math.round(v209);
      var v431 = components$$1.length;
      var v210 = componentsIndex == v431;
      if(v210) {
        componentsIndex = 0
      }
      var v432 = components$$1[componentsIndex];
      var v211 = v432 != currentChar;
      if(v211) {
        needNewChar = false
      }
    }
    var v433 = sequence$$13.substring(0, randNum);
    var v434 = components$$1[componentsIndex];
    var v212 = v433 + v434;
    var v435 = randNum + 1;
    var v436 = sequence$$13.length;
    var v213 = sequence$$13.substring(v435, v436);
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
    var v437 = Math.random();
    var v438 = components$$2.length;
    var v217 = v437 * v438;
    tempNum$$1 = Math.floor(v217);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v439 = sequence$$14.length;
    var v220 = v439 == 60;
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
    var v586 = sequence$$15.length;
    var v532 = v586 - lookAhead;
    var v533 = sequence$$15.length;
    var v440 = sequence$$15.substring(v532, v533);
    var v225 = v440 + sequence$$15;
    var v226 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v225 + v226;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v228 = outputWindow.document;
  v228.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  var v229 = outputWindow.document;
  var v587 = '<tr><td class="title" width="200px">' + "Site:";
  var v534 = v587 + '</td><td class="title">';
  var v441 = v534 + "Positions:";
  var v230 = v441 + "</td></tr>\n";
  v229.write(v230);
  var i$$9 = 0;
  var v442 = arrayOfItems.length;
  var v246 = i$$9 < v442;
  for(;v246;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v443 = arrayOfItems[i$$9];
    var v231 = v443.match(/\/.+\//);
    matchExp = v231 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    var v588 = arrayOfItems[i$$9];
    var v535 = v588.match(/\)\D*\d+/);
    var v444 = v535.toString();
    var v232 = v444.replace(/\)\D*/, "");
    cutDistance = parseFloat(v232);
    var v238 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v238;) {
      var v233 = matchExp.lastIndex;
      matchPosition = v233 - cutDistance;
      var v445 = matchPosition >= lowerLimit;
      if(v445) {
        v445 = matchPosition < upperLimit
      }
      var v236 = v445;
      if(v236) {
        timesFound = timesFound + 1;
        var v234 = tempString$$1 + ", ";
        var v446 = matchPosition - shiftValue;
        var v235 = v446 + 1;
        tempString$$1 = v234 + v235
      }
      var v237 = matchExp;
      var v536 = matchExp.lastIndex;
      var v589 = RegExp.lastMatch;
      var v537 = v589.length;
      var v447 = v536 - v537;
      v237.lastIndex = v447 + 1;
      v238 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    var v448 = tempString$$1.search(/\d/);
    var v239 = v448 != -1;
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
    var v663 = '<tr><td class="' + backGroundClass;
    var v651 = v663 + '">';
    var v683 = arrayOfItems[i$$9];
    var v674 = v683.match(/\([^\(]+\)/);
    var v664 = v674.toString();
    var v652 = v664.replace(/\(|\)/g, "");
    var v639 = v651 + v652;
    var v622 = v639 + '</td><td class="';
    var v590 = v622 + backGroundClass;
    var v538 = v590 + '">';
    var v449 = v538 + tempString$$1;
    var v245 = v449 + "</td></tr>\n";
    v244.write(v245);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v450 = arrayOfItems.length;
    v246 = i$$9 < v450
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
  var v640 = '<tr><td class="title">' + "Pattern:";
  var v623 = v640 + '</td><td class="title">';
  var v591 = v623 + "Times found:";
  var v539 = v591 + '</td><td class="title">';
  var v451 = v539 + "Percentage:";
  var v250 = v451 + "</td></tr>\n";
  v249.write(v250);
  var i$$10 = 0;
  var v452 = arrayOfItems$$1.length;
  var v259 = i$$10 < v452;
  for(;v259;) {
    var tempNumber = 0;
    var v453 = arrayOfItems$$1[i$$10];
    var v251 = v453.match(/\/[^\/]+\//);
    var matchExp$$1 = v251 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    var v454 = sequence$$16.search(matchExp$$1);
    var v253 = v454 != -1;
    if(v253) {
      var v252 = sequence$$16.match(matchExp$$1);
      tempNumber = v252.length
    }
    var percentage = 0;
    var v540 = originalLength + 1;
    var v624 = arrayOfItems$$1[i$$10];
    var v592 = v624.match(/\d+/);
    var v541 = parseFloat(v592);
    var v455 = v540 - v541;
    var v256 = v455 > 0;
    if(v256) {
      var v254 = 100 * tempNumber;
      var v456 = originalLength + 1;
      var v593 = arrayOfItems$$1[i$$10];
      var v542 = v593.match(/\d+/);
      var v457 = parseFloat(v542);
      var v255 = v456 - v457;
      percentage = v254 / v255
    }
    var v257 = outputWindow.document;
    var v684 = arrayOfItems$$1[i$$10];
    var v675 = v684.match(/\([^\(]+\)\b/);
    var v665 = v675.toString();
    var v653 = v665.replace(/\(|\)/g, "");
    var v641 = "<tr><td>" + v653;
    var v625 = v641 + "</td><td>";
    var v594 = v625 + tempNumber;
    var v543 = v594 + "</td><td>";
    var v544 = percentage.toFixed(2);
    var v458 = v543 + v544;
    var v258 = v458 + "</td></tr>\n";
    v257.write(v258);
    i$$10 = i$$10 + 1;
    var v459 = arrayOfItems$$1.length;
    v259 = i$$10 < v459
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
  var v460 = sequence$$17.length;
  var v267 = v460 > 0;
  for(;v267;) {
    maxNum$$1 = sequence$$17.length;
    var v461 = Math.random();
    var v261 = v461 * maxNum$$1;
    randNum$$1 = Math.floor(v261);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v262 = randNum$$1 + 1;
    var v263 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v262, v263);
    sequence$$17 = tempString1 + tempString2;
    var v462 = tempSeq.length;
    var v266 = v462 == 60;
    if(v266) {
      var v264 = outputWindow.document;
      var v265 = tempSeq + "\n";
      v264.write(v265);
      tempSeq = ""
    }
    var v463 = sequence$$17.length;
    v267 = v463 > 0
  }
  var v268 = outputWindow.document;
  var v269 = tempSeq + "\n";
  v268.write(v269);
  return true
}
function proteinGravy(theDocument) {
  JAM.startProfile('compute');

  var newProtein = "";
  var title$$9 = "";
  var maxInput$$3 = 5E5;
  var v464 = testScript();
  var v270 = v464 == false;
  if(v270) {
    return false
  }
  var v654 = theDocument.forms;
  var v642 = v654[0];
  var v626 = v642.elements;
  var v595 = v626[0];
  var v545 = checkFormElement(v595);
  var v465 = v545 == false;
  var v547 = !v465;
  if(v547) {
    var v666 = theDocument.forms;
    var v655 = v666[0];
    var v643 = v655.elements;
    var v627 = v643[0];
    var v596 = v627.value;
    var v546 = checkSequenceLength(v596, maxInput$$3);
    v465 = v546 == false
  }
  var v271 = v465;
  if(v271) {
    return false
  }
  openWindow("Protein GRAVY");
  var v628 = theDocument.forms;
  var v597 = v628[0];
  var v548 = v597.elements;
  var v466 = v548[0];
  var v272 = v466.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v272);
  var i$$11 = 0;
  var v467 = arrayOfFasta$$1.length;
  var v280 = i$$11 < v467;
  for(;v280;) {
    var v273 = arrayOfFasta$$1[i$$11];
    newProtein = getSequenceFromFasta(v273);
    var v274 = arrayOfFasta$$1[i$$11];
    title$$9 = getTitleFromFasta(v274);
    newProtein = removeNonProtein(newProtein);
    var v275 = outputWindow.document;
    var v276 = getInfoFromTitleAndSequence(title$$9, newProtein);
    v275.write(v276);
    var v277 = outputWindow.document;
    var v278 = getProteinGravy(newProtein);
    v277.write(v278);
    var v279 = outputWindow.document;
    v279.write("<br />\n<br />\n");
    i$$11 = i$$11 + 1;
    var v468 = arrayOfFasta$$1.length;
    v280 = i$$11 < v468
  }
  closeWindow();

  JAM.stopProfile('compute');
  return true
}
function getProteinGravy(sequence$$18) {
  sequence$$18 = sequence$$18.toLowerCase();
  var gravyResult = 0;
  var gravyValues = _getGravyHash();
  var i$$12 = 0;
  var v469 = sequence$$18.length;
  var v282 = i$$12 < v469;
  for(;v282;) {
    var v470 = sequence$$18.charAt(i$$12);
    var v281 = gravyValues[v470];
    gravyResult = gravyResult + v281;
    i$$12 = i$$12 + 1;
    var v471 = sequence$$18.length;
    v282 = i$$12 < v471
  }
  var v472 = sequence$$18.length;
  var v284 = v472 > 0;
  if(v284) {
    var v283 = sequence$$18.length;
    gravyResult = gravyResult / v283
  }else {
    return"The sequence is too short"
  }
  return gravyResult.toFixed(3)
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
  hash["g"] = -0.4;
  hash["h"] = -3.2;
  hash["i"] = 4.5;
  hash["l"] = 3.8;
  hash["k"] = -3.9;
  hash["m"] = 1.9;
  hash["f"] = 2.8;
  hash["p"] = -1.6;
  hash["s"] = -0.8;
  hash["t"] = -0.7;
  hash["w"] = -0.9;
  hash["y"] = -1.3;
  hash["v"] = 4.2;
  return hash
}
document.onload = v2;
var v285 = document.getElementById("submitbtn");
v285.onclick = v3;
var v286 = document.getElementById("clearbtn");
v286.onclick = v4;

}

JAM.stopProfile('load');

