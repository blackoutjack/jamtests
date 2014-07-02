
JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
function v5() {
  var v558 = document.forms;
  var v482 = v558[0];
  var v292 = v482.elements;
  var v6 = v292[0];
  v6.value = " ";
  return
}
function v4() {
  try {
    threeToOne(document)
  }catch(e$$5) {
    var v7 = "The following error was encountered: " + e$$5;
    alert(v7)
  }
  return
}
function v3() {
  var v293 = document.main_form;
  var v8 = v293.main_submit;
  v8.focus();
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
  var v9 = arrayOfSequences[0];
  var lengthOfAlign = v9.length;
  var v294 = arrayOfSequences.length;
  var v10 = v294 < 2;
  if(v10) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v295 = arrayOfTitles.length;
  var v12 = i$$1 < v295;
  for(;v12;) {
    var v559 = arrayOfTitles[i$$1];
    var v483 = v559.search(/\S/);
    var v296 = v483 == -1;
    var v485 = !v296;
    if(v485) {
      var v607 = arrayOfSequences[i$$1];
      var v560 = v607.search(/\S/);
      var v484 = v560 == -1;
      var v562 = !v484;
      if(v562) {
        var v608 = arrayOfSequences[i$$1];
        var v561 = v608.length;
        v484 = v561 != lengthOfAlign
      }
      v296 = v484
    }
    var v11 = v296;
    if(v11) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v297 = arrayOfTitles.length;
    v12 = i$$1 < v297
  }
  return true
}
function checkCodonTable(codonTable) {
  var v486 = codonTable.search(/AmAcid/);
  var v298 = v486 == -1;
  var v488 = !v298;
  if(v488) {
    var v563 = codonTable.search(/Codon/);
    var v487 = v563 == -1;
    var v565 = !v487;
    if(v565) {
      var v609 = codonTable.search(/Number/);
      var v564 = v609 == -1;
      var v611 = !v564;
      if(v611) {
        var v638 = codonTable.search(/\/1000/);
        var v610 = v638 == -1;
        var v640 = !v610;
        if(v640) {
          var v639 = codonTable.search(/Fraction\s*\.\./);
          v610 = v639 == -1
        }
        v564 = v610
      }
      v487 = v564
    }
    v298 = v487
  }
  var v13 = v298;
  if(v13) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v489 = formElement.value;
  var v299 = v489.search(/\S/);
  var v14 = v299 == -1;
  if(v14) {
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
  var v300 = arrayOfPatterns.length;
  var v17 = z$$2 < v300;
  for(;v17;) {
    var v490 = arrayOfPatterns[z$$2];
    var v301 = v490.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v15 = v301 == -1;
    if(v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    var v491 = arrayOfPatterns[z$$2];
    var v302 = moreExpressionCheck(v491);
    var v16 = v302 == false;
    if(v16) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v303 = arrayOfPatterns.length;
    v17 = z$$2 < v303
  }
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v18);
  var v19 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v19);
  var j = 0;
  var v304 = arrayOfPatterns.length;
  var v26 = j < v304;
  for(;v26;) {
    var v20 = geneticCodeMatchExp;
    var v21 = j;
    var v566 = arrayOfPatterns[j];
    var v492 = v566.match(/\/.+\//);
    var v305 = v492 + "gi";
    var v723 = eval(v305);
    v20[v21] = v723;
    var v22 = geneticCodeMatchResult;
    var v23 = j;
    var v493 = arrayOfPatterns[j];
    var v306 = v493.match(/=[a-zA-Z\*]/);
    var v724 = v306.toString();
    v22[v23] = v724;
    var v24 = geneticCodeMatchResult;
    var v25 = j;
    var v307 = geneticCodeMatchResult[j];
    var v725 = v307.replace(/=/g, "");
    v24[v25] = v725;
    j = j + 1;
    var v308 = arrayOfPatterns.length;
    v26 = j < v308
  }
  var i$$2 = 0;
  var v494 = testSequence.length;
  var v309 = v494 - 3;
  var v33 = i$$2 <= v309;
  for(;v33;) {
    var v27 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v27);
    j = 0;
    var v310 = geneticCodeMatchExp.length;
    var v31 = j < v310;
    for(;v31;) {
      var v495 = geneticCodeMatchExp[j];
      var v311 = codon.search(v495);
      var v30 = v311 != -1;
      if(v30) {
        var v29 = oneMatch == true;
        if(v29) {
          var v312 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v28 = v312 + ".";
          alert(v28);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v313 = geneticCodeMatchExp.length;
      v31 = j < v313
    }
    var v32 = oneMatch == false;
    if(v32) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v496 = testSequence.length;
    var v314 = v496 - 3;
    v33 = i$$2 <= v314
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v315 = arrayOfPatterns$$1.length;
  var v35 = z$$3 < v315;
  for(;v35;) {
    var v497 = arrayOfPatterns$$1[z$$3];
    var v316 = v497.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v34 = v316 != -1;
    if(v34) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v317 = arrayOfPatterns$$1.length;
    v35 = z$$3 < v317
  }
  var i$$3 = 0;
  var v318 = arrayOfPatterns$$1.length;
  var v39 = i$$3 < v318;
  for(;v39;) {
    var v498 = arrayOfPatterns$$1[i$$3];
    var v319 = "[" + v498;
    var v36 = v319 + "]";
    var re = new RegExp(v36, "gi");
    var j$$1 = i$$3 + 1;
    var v320 = arrayOfPatterns$$1.length;
    var v38 = j$$1 < v320;
    for(;v38;) {
      var v499 = arrayOfPatterns$$1[j$$1];
      var v321 = v499.search(re);
      var v37 = v321 != -1;
      if(v37) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v322 = arrayOfPatterns$$1.length;
      v38 = j$$1 < v322
    }
    i$$3 = i$$3 + 1;
    var v323 = arrayOfPatterns$$1.length;
    v39 = i$$3 < v323
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v324 = arrayOfPatterns$$2.length;
  var v42 = z$$4 < v324;
  for(;v42;) {
    var v500 = arrayOfPatterns$$2[z$$4];
    var v325 = v500.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v40 = v325 == -1;
    if(v40) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    var v501 = arrayOfPatterns$$2[z$$4];
    var v326 = moreExpressionCheck(v501);
    var v41 = v326 == false;
    if(v41) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v327 = arrayOfPatterns$$2.length;
    v42 = z$$4 < v327
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v567 = getSequenceFromFasta(text$$7);
  var v502 = v567.replace(/[^A-Za-z]/g, "");
  var v328 = v502.length;
  var v44 = v328 > maxInput;
  if(v44) {
    var v329 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v43 = v329 + " characters.";
    alert(v43);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v330 = text$$8.length;
  var v46 = v330 > maxInput$$1;
  if(v46) {
    var v331 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v45 = v331 + " characters.";
    alert(v45);
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
  var v47 = outputWindow.document;
  v47.write("</form>");
  return true
}
function closePre() {
  var v48 = outputWindow.document;
  v48.write("</div>");
  var v49 = outputWindow.document;
  v49.write("</pre>\n");
  return
}
function closeTextArea() {
  var v50 = outputWindow.document;
  v50.write("</textarea>");
  return true
}
function closeWindow() {
  var v51 = outputWindow.document;
  v51.write("</body>\n</html>\n");
  outputWindow.status = "Done.";
  var v52 = outputWindow.document;
  v52.close();
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
  var v332 = alignArray.length;
  var v53 = v332 < 3;
  if(v53) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v333 = alignArray.length;
  var v55 = i$$4 < v333;
  for(;v55;) {
    var v503 = alignArray[i$$4];
    var v334 = v503.search(/[^\s]+\s/);
    var v54 = v334 == -1;
    if(v54) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v335 = alignArray.length;
    v55 = i$$4 < v335
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
  var v336 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v58 = v336 != -1;
  if(v58) {
    var v57 = matchArray = re$$1.exec(sequenceData);
    for(;v57;) {
      var v56 = matchArray[0];
      arrayOfFasta.push(v56);
      v57 = matchArray = re$$1.exec(sequenceData)
    }
  }else {
    arrayOfFasta[0] = sequenceData
  }
  return arrayOfFasta
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$2) {
  var v337 = sequence$$2.length;
  var v59 = "&gt;results for " + v337;
  var stringToReturn = v59 + " residue sequence ";
  var v338 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v61 = v338 != -1;
  if(v61) {
    var v339 = stringToReturn + '"';
    var v60 = v339 + fastaSequenceTitle$$1;
    stringToReturn = v60 + '"'
  }
  var v340 = stringToReturn + ' starting "';
  var v341 = sequence$$2.substring(0, 10);
  var v62 = v340 + v341;
  stringToReturn = v62 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v342 = sequenceOne.length;
  var v63 = "Search results for " + v342;
  var stringToReturn$$1 = v63 + " residue sequence ";
  var v343 = fastaSequenceTitleOne.search(/[^\s]/);
  var v65 = v343 != -1;
  if(v65) {
    var v344 = stringToReturn$$1 + '"';
    var v64 = v344 + fastaSequenceTitleOne;
    stringToReturn$$1 = v64 + '"'
  }
  var v345 = stringToReturn$$1 + ' starting "';
  var v346 = sequenceOne.substring(0, 10);
  var v66 = v345 + v346;
  stringToReturn$$1 = v66 + '"\n';
  var v347 = stringToReturn$$1 + "and ";
  var v348 = sequenceTwo.length;
  var v67 = v347 + v348;
  stringToReturn$$1 = v67 + " residue sequence ";
  var v349 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v69 = v349 != -1;
  if(v69) {
    var v350 = stringToReturn$$1 + '"';
    var v68 = v350 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v68 + '"'
  }
  var v351 = stringToReturn$$1 + ' starting "';
  var v352 = sequenceTwo.substring(0, 10);
  var v70 = v351 + v352;
  stringToReturn$$1 = v70 + '"';
  var v71 = '<div class="info">' + stringToReturn$$1;
  return v71 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v72 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v72);
  var j$$2 = 0;
  var v353 = arrayOfPatterns$$3.length;
  var v75 = j$$2 < v353;
  for(;v75;) {
    var v73 = geneticCodeMatchExp$$1;
    var v74 = j$$2;
    var v568 = arrayOfPatterns$$3[j$$2];
    var v504 = v568.match(/\/.+\//);
    var v354 = v504 + "gi";
    var v726 = eval(v354);
    v73[v74] = v726;
    j$$2 = j$$2 + 1;
    var v355 = arrayOfPatterns$$3.length;
    v75 = j$$2 < v355
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v76 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v76);
  var j$$3 = 0;
  var v356 = arrayOfPatterns$$4.length;
  var v81 = j$$3 < v356;
  for(;v81;) {
    var v77 = geneticCodeMatchResult$$1;
    var v78 = j$$3;
    var v505 = arrayOfPatterns$$4[j$$3];
    var v357 = v505.match(/=[a-zA-Z\*]/);
    var v727 = v357.toString();
    v77[v78] = v727;
    var v79 = geneticCodeMatchResult$$1;
    var v80 = j$$3;
    var v358 = geneticCodeMatchResult$$1[j$$3];
    var v728 = v358.replace(/=/g, "");
    v79[v80] = v728;
    j$$3 = j$$3 + 1;
    var v359 = arrayOfPatterns$$4.length;
    v81 = j$$3 < v359
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$2, sequence$$3) {
  var v360 = sequence$$3.length;
  var v82 = "Results for " + v360;
  var stringToReturn$$2 = v82 + " residue sequence ";
  var v361 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v84 = v361 != -1;
  if(v84) {
    var v362 = stringToReturn$$2 + '"';
    var v83 = v362 + fastaSequenceTitle$$2;
    stringToReturn$$2 = v83 + '"'
  }
  var v363 = stringToReturn$$2 + ' starting "';
  var v364 = sequence$$3.substring(0, 10);
  var v85 = v363 + v364;
  stringToReturn$$2 = v85 + '"';
  var v86 = '<div class="info">' + stringToReturn$$2;
  return v86 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$3, sequence$$4, topology) {
  var v506 = "Results for " + topology;
  var v365 = v506 + " ";
  var v366 = sequence$$4.length;
  var v87 = v365 + v366;
  var stringToReturn$$3 = v87 + " residue sequence ";
  var v367 = fastaSequenceTitle$$3.search(/[^\s]/);
  var v89 = v367 != -1;
  if(v89) {
    var v368 = stringToReturn$$3 + '"';
    var v88 = v368 + fastaSequenceTitle$$3;
    stringToReturn$$3 = v88 + '"'
  }
  var v369 = stringToReturn$$3 + ' starting "';
  var v370 = sequence$$4.substring(0, 10);
  var v90 = v369 + v370;
  stringToReturn$$3 = v90 + '"';
  var v91 = '<div class="info">' + stringToReturn$$3;
  return v91 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v371 = sequenceOne$$1.length;
  var v92 = "Alignment results for " + v371;
  var stringToReturn$$4 = v92 + " residue sequence ";
  var v372 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v94 = v372 != -1;
  if(v94) {
    var v373 = stringToReturn$$4 + '"';
    var v93 = v373 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v93 + '"'
  }
  var v374 = stringToReturn$$4 + ' starting "';
  var v375 = sequenceOne$$1.substring(0, 10);
  var v95 = v374 + v375;
  stringToReturn$$4 = v95 + '"\n';
  var v376 = stringToReturn$$4 + "and ";
  var v377 = sequenceTwo$$1.length;
  var v96 = v376 + v377;
  stringToReturn$$4 = v96 + " residue sequence ";
  var v378 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v98 = v378 != -1;
  if(v98) {
    var v379 = stringToReturn$$4 + '"';
    var v97 = v379 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v97 + '"'
  }
  var v380 = stringToReturn$$4 + ' starting "';
  var v381 = sequenceTwo$$1.substring(0, 10);
  var v99 = v380 + v381;
  stringToReturn$$4 = v99 + '"';
  var v100 = '<div class="info">' + stringToReturn$$4;
  return v100 + "</div>\n"
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v102 = j$$4 < lengthOut;
  for(;v102;) {
    var v382 = Math.random();
    var v383 = components.length;
    var v101 = v382 * v383;
    tempNum = Math.floor(v101);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4 = j$$4 + 1;
    v102 = j$$4 < lengthOut
  }
  return sequenceArray.join("")
}
function getSequenceFromFasta(sequenceRecord) {
  var v384 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v103 = v384 != -1;
  if(v103) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "")
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v385 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v105 = v385 != -1;
  if(v105) {
    var v104 = sequenceRecord$$1.match(/\>[^\f\n\r]+[\f\n\r]/, "");
    fastaTitle = v104.toString();
    fastaTitle = fastaTitle.replace(/\>|[\f\n\r]/g, "");
    fastaTitle = fastaTitle.replace(/\s{2,}/g, " ");
    fastaTitle = fastaTitle.replace(/[\<\>]/gi, "")
  }
  return fastaTitle
}
function moreExpressionCheck(expressionToCheck) {
  var v507 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v386 = v507 != -1;
  var v509 = !v386;
  if(v509) {
    var v569 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    var v508 = v569 != -1;
    var v571 = !v508;
    if(v571) {
      var v612 = expressionToCheck.search(/\[\]/);
      var v570 = v612 != -1;
      var v614 = !v570;
      if(v614) {
        var v641 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
        var v613 = v641 != -1;
        var v643 = !v613;
        if(v643) {
          var v653 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
          var v642 = v653 != -1;
          var v655 = !v642;
          if(v655) {
            var v665 = expressionToCheck.search(/\|\|/);
            var v654 = v665 != -1;
            var v667 = !v654;
            if(v667) {
              var v676 = expressionToCheck.search(/\/\|/);
              var v666 = v676 != -1;
              var v678 = !v666;
              if(v678) {
                var v685 = expressionToCheck.search(/\|\//);
                var v677 = v685 != -1;
                var v687 = !v677;
                if(v687) {
                  var v694 = expressionToCheck.search(/\[.\]/);
                  var v686 = v694 != -1;
                  var v696 = !v686;
                  if(v696) {
                    var v701 = expressionToCheck.search(/\</);
                    var v695 = v701 != -1;
                    var v703 = !v695;
                    if(v703) {
                      var v702 = expressionToCheck.search(/\>/);
                      v695 = v702 != -1
                    }
                    v686 = v695
                  }
                  v677 = v686
                }
                v666 = v677
              }
              v654 = v666
            }
            v642 = v654
          }
          v613 = v642
        }
        v570 = v613
      }
      v508 = v570
    }
    v386 = v508
  }
  var v106 = v386;
  if(v106) {
    return false
  }
  return true
}
function openForm() {
  var v107 = outputWindow.document;
  v107.write('<form action="">\n');
  return true
}
function openPre() {
  var v108 = outputWindow.document;
  v108.write("<pre>");
  var v109 = outputWindow.document;
  v109.write('<div class="pre">');
  return
}
function openTextArea() {
  var v110 = outputWindow.document;
  v110.write('<br /><textarea rows="6" cols="61">\n');
  return true
}
function openWindow(title$$6) {
  _openWindow(title$$6, true);
  return
}
function _openWindow(title$$7, isColor) {
  outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  outputWindow.focus();
  var v111 = outputWindow.document;
  var v572 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v510 = v572 + "<head>\n";
  var v387 = v510 + "<title>Sequence Manipulation Suite</title>\n";
  var v112 = v387 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v111.write(v112);
  if(isColor) {
    var v113 = outputWindow.document;
    var v716 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v712 = v716 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v708 = v712 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v704 = v708 + "div.info {font-weight: bold}\n";
    var v697 = v704 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v688 = v697 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v679 = v688 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v668 = v679 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v656 = v668 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v644 = v656 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v615 = v644 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v573 = v615 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v511 = v573 + "td.many {color: #000000}\n";
    var v388 = v511 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v114 = v388 + "</style>\n";
    v113.write(v114)
  }else {
    var v115 = outputWindow.document;
    var v720 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v717 = v720 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v713 = v717 + "div.title {display: none}\n";
    var v709 = v713 + "div.info {font-weight: bold}\n";
    var v705 = v709 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v698 = v705 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v689 = v698 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v680 = v689 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v669 = v680 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v657 = v669 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v645 = v657 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v616 = v645 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v574 = v616 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v512 = v574 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v389 = v512 + "img {display: none}\n";
    var v116 = v389 + "</style>\n";
    v115.write(v116)
  }
  var v117 = outputWindow.document;
  var v575 = "</head>\n" + '<body class="main">\n';
  var v513 = v575 + '<div class="title">';
  var v390 = v513 + title$$7;
  var v118 = v390 + " results</div>\n";
  v117.write(v118);
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
  var v119 = outputWindow.document;
  var v576 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v514 = v576 + "<head>\n";
  var v391 = v514 + "<title>Sequence Manipulation Suite</title>\n";
  var v120 = v391 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v119.write(v120);
  if(isBackground) {
    var v121 = outputWindow.document;
    var v718 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v714 = v718 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v710 = v714 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v706 = v710 + "div.info {font-weight: bold}\n";
    var v699 = v706 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v690 = v699 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v681 = v690 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v670 = v681 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v658 = v670 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v646 = v658 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v617 = v646 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v577 = v617 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v515 = v577 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v392 = v515 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v122 = v392 + "</style>\n";
    v121.write(v122)
  }else {
    var v123 = outputWindow.document;
    var v722 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v721 = v722 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v719 = v721 + "div.title {display: none}\n";
    var v715 = v719 + "div.info {font-weight: bold}\n";
    var v711 = v715 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v707 = v711 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v700 = v707 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v691 = v700 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v682 = v691 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v671 = v682 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v659 = v671 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v647 = v659 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v618 = v647 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v578 = v618 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v516 = v578 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v393 = v516 + "img {display: none}\n";
    var v124 = v393 + "</style>\n";
    v123.write(v124)
  }
  var v125 = outputWindow.document;
  var v579 = "</head>\n" + '<body class="main">\n';
  var v517 = v579 + '<div class="title">';
  var v394 = v517 + title$$9;
  var v126 = v394 + " results</div>\n";
  v125.write(v126);
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
  var v395 = dnaSequence$$1.search(/./);
  var v127 = v395 != -1;
  if(v127) {
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
  var v128 = j$$5 < lengthOfColumn;
  for(;v128;) {
    tempString = tempString + " ";
    j$$5 = j$$5 + 1;
    v128 = j$$5 < lengthOfColumn
  }
  var v129 = tempString + theNumber;
  theNumber = v129 + " ";
  var v130 = sequenceToAppend + theNumber;
  sequenceToAppend = v130 + tabIn;
  return sequenceToAppend
}
function testScript() {
  function v1(str$$8, p1$$1, offset$$13, s$$3) {
    return p1$$1 + "X"
  }
  var testArray = new Array;
  var testString = "1234567890";
  testArray.push(testString);
  var v396 = testArray[0];
  var v131 = v396 != testString;
  if(v131) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v397 = testString.search(re$$2);
  var v132 = v397 == -1;
  if(v132) {
    alert("Regular expression 'm' flag not supported. See browser compatibility page.");
    return false
  }
  var caughtException = false;
  try {
    re$$2 = eval("Exception handling not supported. Check browser compatibility page.")
  }catch(e$$4) {
    caughtException = true
  }
  var v133 = !caughtException;
  if(v133) {
    alert("Exception handling not supported. See browser compatibility page.")
  }
  testString = "123";
  testString = testString.replace(/(\d)/g, v1);
  var v134 = testString != "1X2X3X";
  if(v134) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false
  }
  var testNum = 2489.8237;
  var v398 = testNum.toFixed(3);
  var v135 = v398 != 2489.824;
  if(v135) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v399 = testNum.toPrecision(5);
  var v136 = v399 != 2489.8;
  if(v136) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v400 = theNumber$$1.search(/\d/);
  var v137 = v400 == -1;
  if(v137) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v518 = emblFile.search(/ID/);
  var v401 = v518 == -1;
  var v520 = !v401;
  if(v520) {
    var v580 = emblFile.search(/AC/);
    var v519 = v580 == -1;
    var v582 = !v519;
    if(v582) {
      var v619 = emblFile.search(/DE/);
      var v581 = v619 == -1;
      var v621 = !v581;
      if(v621) {
        var v620 = emblFile.search(/SQ/);
        v581 = v620 == -1
      }
      v519 = v581
    }
    v401 = v519
  }
  var v138 = v401;
  if(v138) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v402 = theNumber$$2.search(/\d/);
  var v139 = v402 == -1;
  if(v139) {
    alert("Please enter a number.");
    return false
  }
  var v141 = theNumber$$2 > maxInput$$2;
  if(v141) {
    var v403 = "Please enter a number less than or equal to " + maxInput$$2;
    var v140 = v403 + ".";
    alert(v140);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v404 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v142 = v404 != -1;
  if(v142) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v405 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v143 = v405 != -1;
  if(v143) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v521 = genBankFile.search(/LOCUS/);
  var v406 = v521 == -1;
  var v523 = !v406;
  if(v523) {
    var v583 = genBankFile.search(/DEFINITION/);
    var v522 = v583 == -1;
    var v585 = !v522;
    if(v585) {
      var v622 = genBankFile.search(/ACCESSION/);
      var v584 = v622 == -1;
      var v624 = !v584;
      if(v624) {
        var v623 = genBankFile.search(/ORIGIN/);
        v584 = v623 == -1
      }
      v522 = v584
    }
    v406 = v522
  }
  var v144 = v406;
  if(v144) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v524 = genBankFile$$1.search(/LOCUS/);
  var v407 = v524 == -1;
  var v526 = !v407;
  if(v526) {
    var v586 = genBankFile$$1.search(/DEFINITION/);
    var v525 = v586 == -1;
    var v588 = !v525;
    if(v588) {
      var v625 = genBankFile$$1.search(/ACCESSION/);
      var v587 = v625 == -1;
      var v627 = !v587;
      if(v627) {
        var v626 = genBankFile$$1.search(/ORIGIN/);
        v587 = v626 == -1
      }
      v525 = v587
    }
    v407 = v525
  }
  var v145 = v407;
  if(v145) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v408 = genBankFile$$1.search(/FEATURES {13}/);
  var v146 = v408 == -1;
  if(v146) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v527 = emblFile$$1.search(/ID/);
  var v409 = v527 == -1;
  var v529 = !v409;
  if(v529) {
    var v589 = emblFile$$1.search(/AC/);
    var v528 = v589 == -1;
    var v591 = !v528;
    if(v591) {
      var v628 = emblFile$$1.search(/DE/);
      var v590 = v628 == -1;
      var v630 = !v590;
      if(v630) {
        var v629 = emblFile$$1.search(/SQ/);
        v590 = v629 == -1
      }
      v528 = v590
    }
    v409 = v528
  }
  var v147 = v409;
  if(v147) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v410 = emblFile$$1.search(/^FT/m);
  var v148 = v410 == -1;
  if(v148) {
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
  var v155 = i$$5 < stopBase;
  for(;v155;) {
    var v149 = i$$5 + 1;
    lineOfText = rightNum(v149, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v411 = basePerLine / groupSize;
    var v152 = j$$6 <= v411;
    for(;v152;) {
      var v151 = k < groupSize;
      for(;v151;) {
        var v412 = k + i$$5;
        var v150 = text$$10.charAt(v412);
        lineOfText = lineOfText + v150;
        k = k + 1;
        v151 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v413 = basePerLine / groupSize;
      v152 = j$$6 <= v413
    }
    var v153 = outputWindow.document;
    var v154 = lineOfText + "\n";
    v153.write(v154);
    lineOfText = "";
    v155 = i$$5 < stopBase
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
    var v414 = adjustment < 0;
    if(v414) {
      v414 = adjusted >= 0
    }
    var v156 = v414;
    if(v156) {
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
  var v187 = i$$6 < stopBase$$2;
  for(;v187;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v415 = basePerLine$$2 / groupSize$$2;
    var v163 = j$$7 <= v415;
    for(;v163;) {
      var v159 = k$$1 < groupSize$$2;
      for(;v159;) {
        var v416 = i$$6 + k$$1;
        var v157 = v416 >= stopBase$$2;
        if(v157) {
          break
        }
        var v417 = k$$1 + i$$6;
        var v158 = text$$12.charAt(v417);
        lineOfText$$1 = lineOfText$$1 + v158;
        k$$1 = k$$1 + 1;
        v159 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v161 = numberPosition$$1 == "above";
      if(v161) {
        var v418 = adjustNumbering(i$$6, numberingAdjustment);
        var v160 = rightNum(v418, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v160
      }
      var v162 = i$$6 >= stopBase$$2;
      if(v162) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v419 = basePerLine$$2 / groupSize$$2;
      v163 = j$$7 <= v419
    }
    var v186 = numberPosition$$1 == "left";
    if(v186) {
      var v164 = outputWindow.document;
      var v592 = adjustNumbering(lineNum, numberingAdjustment);
      var v530 = rightNum(v592, "", 8, tabIn$$3);
      var v420 = v530 + lineOfText$$1;
      var v165 = v420 + "\n";
      v164.write(v165);
      var v169 = strands$$1 == "two";
      if(v169) {
        var v166 = outputWindow.document;
        var v593 = adjustNumbering(lineNum, numberingAdjustment);
        var v531 = rightNum(v593, "", 8, tabIn$$3);
        var v532 = complement(lineOfText$$1);
        var v421 = v531 + v532;
        var v167 = v421 + "\n";
        v166.write(v167);
        var v168 = outputWindow.document;
        v168.write("\n")
      }
    }else {
      var v185 = numberPosition$$1 == "right";
      if(v185) {
        var v170 = outputWindow.document;
        var v533 = adjustNumbering(i$$6, numberingAdjustment);
        var v422 = lineOfText$$1 + v533;
        var v171 = v422 + "\n";
        v170.write(v171);
        var v175 = strands$$1 == "two";
        if(v175) {
          var v172 = outputWindow.document;
          var v534 = complement(lineOfText$$1);
          var v535 = adjustNumbering(i$$6, numberingAdjustment);
          var v423 = v534 + v535;
          var v173 = v423 + "\n";
          v172.write(v173);
          var v174 = outputWindow.document;
          v174.write("\n")
        }
      }else {
        var v184 = numberPosition$$1 == "above";
        if(v184) {
          var v176 = outputWindow.document;
          var v177 = aboveNum + "\n";
          v176.write(v177);
          var v178 = outputWindow.document;
          var v179 = lineOfText$$1 + "\n";
          v178.write(v179);
          var v183 = strands$$1 == "two";
          if(v183) {
            var v180 = outputWindow.document;
            var v424 = complement(lineOfText$$1);
            var v181 = v424 + "\n";
            v180.write(v181);
            var v182 = outputWindow.document;
            v182.write("\n")
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v187 = i$$6 < stopBase$$2
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
  var v206 = i$$7 < stopBase$$3;
  for(;v206;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v425 = basePerLine$$3 / groupSize$$3;
    var v194 = j$$8 <= v425;
    for(;v194;) {
      var v190 = k$$2 < groupSize$$3;
      for(;v190;) {
        var v426 = i$$7 + k$$2;
        var v188 = v426 >= stopBase$$3;
        if(v188) {
          break
        }
        var v427 = k$$2 + i$$7;
        var v189 = text$$13.charAt(v427);
        lineOfText$$2 = lineOfText$$2 + v189;
        k$$2 = k$$2 + 1;
        v190 = k$$2 < groupSize$$3
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v192 = numberPosition$$2 == "above";
      if(v192) {
        var v191 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = aboveNum$$1 + v191
      }
      var v193 = i$$7 >= stopBase$$3;
      if(v193) {
        break
      }
      k$$2 = 0;
      j$$8 = j$$8 + 1;
      var v428 = basePerLine$$3 / groupSize$$3;
      v194 = j$$8 <= v428
    }
    var v205 = numberPosition$$2 == "left";
    if(v205) {
      var v195 = outputWindow.document;
      var v536 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v429 = v536 + lineOfText$$2;
      var v196 = v429 + "\n";
      v195.write(v196)
    }else {
      var v204 = numberPosition$$2 == "right";
      if(v204) {
        var v197 = outputWindow.document;
        var v430 = lineOfText$$2 + i$$7;
        var v198 = v430 + "\n";
        v197.write(v198)
      }else {
        var v203 = numberPosition$$2 == "above";
        if(v203) {
          var v199 = outputWindow.document;
          var v200 = aboveNum$$1 + "\n";
          v199.write(v200);
          var v201 = outputWindow.document;
          var v202 = lineOfText$$2 + "\n";
          v201.write(v202)
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v206 = i$$7 < stopBase$$3
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
  var v537 = sequence$$13.length;
  var v431 = v537 <= firstIndexToMutate;
  var v539 = !v431;
  if(v539) {
    var v538 = lastIndexToMutate < 0;
    var v594 = !v538;
    if(v594) {
      v538 = lastIndexToMutate <= firstIndexToMutate
    }
    v431 = v538
  }
  var v207 = v431;
  if(v207) {
    numMut = 0
  }
  var i$$8 = 0;
  var v215 = i$$8 < numMut;
  for(;v215;) {
    maxNum = sequence$$13.length;
    var v432 = Math.random();
    var v208 = v432 * maxNum;
    randNum = Math.floor(v208);
    var v433 = randNum < firstIndexToMutate;
    var v540 = !v433;
    if(v540) {
      v433 = randNum > lastIndexToMutate
    }
    var v209 = v433;
    if(v209) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v215 = i$$8 < numMut;
      continue
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for(;needNewChar;) {
      var v434 = Math.random();
      var v435 = components$$1.length;
      var v210 = v434 * v435;
      componentsIndex = Math.round(v210);
      var v436 = components$$1.length;
      var v211 = componentsIndex == v436;
      if(v211) {
        componentsIndex = 0
      }
      var v437 = components$$1[componentsIndex];
      var v212 = v437 != currentChar;
      if(v212) {
        needNewChar = false
      }
    }
    var v438 = sequence$$13.substring(0, randNum);
    var v439 = components$$1[componentsIndex];
    var v213 = v438 + v439;
    var v440 = randNum + 1;
    var v441 = sequence$$13.length;
    var v214 = sequence$$13.substring(v440, v441);
    sequence$$13 = v213 + v214;
    i$$8 = i$$8 + 1;
    v215 = i$$8 < numMut
  }
  var v216 = outputWindow.document;
  var v217 = addReturns(sequence$$13);
  v216.write(v217);
  return true
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v222 = j$$9 < lengthOut$$1;
  for(;v222;) {
    var v442 = Math.random();
    var v443 = components$$2.length;
    var v218 = v442 * v443;
    tempNum$$1 = Math.floor(v218);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v444 = sequence$$14.length;
    var v221 = v444 == 60;
    if(v221) {
      var v219 = outputWindow.document;
      var v220 = sequence$$14 + "\n";
      v219.write(v220);
      sequence$$14 = ""
    }
    j$$9 = j$$9 + 1;
    v222 = j$$9 < lengthOut$$1
  }
  var v223 = outputWindow.document;
  var v224 = sequence$$14 + "\n";
  v223.write(v224);
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
  var v228 = dnaConformation == "circular";
  if(v228) {
    var v225 = sequence$$15.substring(0, lookAhead);
    shiftValue = v225.length;
    var v595 = sequence$$15.length;
    var v541 = v595 - lookAhead;
    var v542 = sequence$$15.length;
    var v445 = sequence$$15.substring(v541, v542);
    var v226 = v445 + sequence$$15;
    var v227 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v226 + v227;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v229 = outputWindow.document;
  v229.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  var v230 = outputWindow.document;
  var v596 = '<tr><td class="title" width="200px">' + "Site:";
  var v543 = v596 + '</td><td class="title">';
  var v446 = v543 + "Positions:";
  var v231 = v446 + "</td></tr>\n";
  v230.write(v231);
  var i$$9 = 0;
  var v447 = arrayOfItems.length;
  var v247 = i$$9 < v447;
  for(;v247;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v448 = arrayOfItems[i$$9];
    var v232 = v448.match(/\/.+\//);
    matchExp = v232 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    var v597 = arrayOfItems[i$$9];
    var v544 = v597.match(/\)\D*\d+/);
    var v449 = v544.toString();
    var v233 = v449.replace(/\)\D*/, "");
    cutDistance = parseFloat(v233);
    var v239 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v239;) {
      var v234 = matchExp.lastIndex;
      matchPosition = v234 - cutDistance;
      var v450 = matchPosition >= lowerLimit;
      if(v450) {
        v450 = matchPosition < upperLimit
      }
      var v237 = v450;
      if(v237) {
        timesFound = timesFound + 1;
        var v235 = tempString$$1 + ", ";
        var v451 = matchPosition - shiftValue;
        var v236 = v451 + 1;
        tempString$$1 = v235 + v236
      }
      var v238 = matchExp;
      var v545 = matchExp.lastIndex;
      var v598 = RegExp.lastMatch;
      var v546 = v598.length;
      var v452 = v545 - v546;
      v238.lastIndex = v452 + 1;
      v239 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    var v453 = tempString$$1.search(/\d/);
    var v240 = v453 != -1;
    if(v240) {
      tempString$$1 = tempString$$1.replace(/none,\s*/, "")
    }
    var v244 = timesFound == 0;
    if(v244) {
      backGroundClass = "none"
    }else {
      var v243 = timesFound == 1;
      if(v243) {
        backGroundClass = "one"
      }else {
        var v242 = timesFound == 2;
        if(v242) {
          backGroundClass = "two"
        }else {
          var v241 = timesFound == 3;
          if(v241) {
            backGroundClass = "three"
          }else {
            backGroundClass = "many"
          }
        }
      }
    }
    var v245 = outputWindow.document;
    var v672 = '<tr><td class="' + backGroundClass;
    var v660 = v672 + '">';
    var v692 = arrayOfItems[i$$9];
    var v683 = v692.match(/\([^\(]+\)/);
    var v673 = v683.toString();
    var v661 = v673.replace(/\(|\)/g, "");
    var v648 = v660 + v661;
    var v631 = v648 + '</td><td class="';
    var v599 = v631 + backGroundClass;
    var v547 = v599 + '">';
    var v454 = v547 + tempString$$1;
    var v246 = v454 + "</td></tr>\n";
    v245.write(v246);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v455 = arrayOfItems.length;
    v247 = i$$9 < v455
  }
  var v248 = outputWindow.document;
  v248.write("</tbody></table>\n");
  return true
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v249 = outputWindow.document;
  v249.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  var v250 = outputWindow.document;
  var v649 = '<tr><td class="title">' + "Pattern:";
  var v632 = v649 + '</td><td class="title">';
  var v600 = v632 + "Times found:";
  var v548 = v600 + '</td><td class="title">';
  var v456 = v548 + "Percentage:";
  var v251 = v456 + "</td></tr>\n";
  v250.write(v251);
  var i$$10 = 0;
  var v457 = arrayOfItems$$1.length;
  var v260 = i$$10 < v457;
  for(;v260;) {
    var tempNumber = 0;
    var v458 = arrayOfItems$$1[i$$10];
    var v252 = v458.match(/\/[^\/]+\//);
    var matchExp$$1 = v252 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    var v459 = sequence$$16.search(matchExp$$1);
    var v254 = v459 != -1;
    if(v254) {
      var v253 = sequence$$16.match(matchExp$$1);
      tempNumber = v253.length
    }
    var percentage = 0;
    var v549 = originalLength + 1;
    var v633 = arrayOfItems$$1[i$$10];
    var v601 = v633.match(/\d+/);
    var v550 = parseFloat(v601);
    var v460 = v549 - v550;
    var v257 = v460 > 0;
    if(v257) {
      var v255 = 100 * tempNumber;
      var v461 = originalLength + 1;
      var v602 = arrayOfItems$$1[i$$10];
      var v551 = v602.match(/\d+/);
      var v462 = parseFloat(v551);
      var v256 = v461 - v462;
      percentage = v255 / v256
    }
    var v258 = outputWindow.document;
    var v693 = arrayOfItems$$1[i$$10];
    var v684 = v693.match(/\([^\(]+\)\b/);
    var v674 = v684.toString();
    var v662 = v674.replace(/\(|\)/g, "");
    var v650 = "<tr><td>" + v662;
    var v634 = v650 + "</td><td>";
    var v603 = v634 + tempNumber;
    var v552 = v603 + "</td><td>";
    var v553 = percentage.toFixed(2);
    var v463 = v552 + v553;
    var v259 = v463 + "</td></tr>\n";
    v258.write(v259);
    i$$10 = i$$10 + 1;
    var v464 = arrayOfItems$$1.length;
    v260 = i$$10 < v464
  }
  var v261 = outputWindow.document;
  v261.write("</tbody></table>\n");
  return true
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v465 = sequence$$17.length;
  var v268 = v465 > 0;
  for(;v268;) {
    maxNum$$1 = sequence$$17.length;
    var v466 = Math.random();
    var v262 = v466 * maxNum$$1;
    randNum$$1 = Math.floor(v262);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v263 = randNum$$1 + 1;
    var v264 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v263, v264);
    sequence$$17 = tempString1 + tempString2;
    var v467 = tempSeq.length;
    var v267 = v467 == 60;
    if(v267) {
      var v265 = outputWindow.document;
      var v266 = tempSeq + "\n";
      v265.write(v266);
      tempSeq = ""
    }
    var v468 = sequence$$17.length;
    v268 = v468 > 0
  }
  var v269 = outputWindow.document;
  var v270 = tempSeq + "\n";
  v269.write(v270);
  return true
}
function threeToOne(theDocument) {
  JAM.startProfile('compute');

  var newProtein = "";
  var maxInput$$3 = 1E5;
  var v469 = testScript();
  var v271 = v469 == false;
  if(v271) {
    return false
  }
  var v663 = theDocument.forms;
  var v651 = v663[0];
  var v635 = v651.elements;
  var v604 = v635[0];
  var v554 = checkFormElement(v604);
  var v470 = v554 == false;
  var v556 = !v470;
  if(v556) {
    var v675 = theDocument.forms;
    var v664 = v675[0];
    var v652 = v664.elements;
    var v636 = v652[0];
    var v605 = v636.value;
    var v555 = checkTextLength(v605, maxInput$$3);
    v470 = v555 == false
  }
  var v272 = v470;
  if(v272) {
    return false
  }
  openWindow("Three to One");
  openPre();
  var v637 = theDocument.forms;
  var v606 = v637[0];
  var v557 = v606.elements;
  var v471 = v557[0];
  var v273 = v471.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v273);
  var i$$11 = 0;
  var v472 = arrayOfFasta$$1.length;
  var v279 = i$$11 < v472;
  for(;v279;) {
    var v274 = arrayOfFasta$$1[i$$11];
    newProtein = getTripletSequenceFromFasta(v274);
    var v275 = arrayOfFasta$$1[i$$11];
    title = getFastaTitleFromTriplets(v275);
    newProtein = filterTriplets(newProtein);
    var v276 = outputWindow.document;
    var v277 = getInfoFromTitleAndSequenceTriplets(title, newProtein);
    v276.write(v277);
    writeThreeToOne(newProtein);
    var v278 = outputWindow.document;
    v278.write("\n\n");
    i$$11 = i$$11 + 1;
    var v473 = arrayOfFasta$$1.length;
    v279 = i$$11 < v473
  }
  closePre();
  closeWindow();

  JAM.stopProfile('compute');
  return true
}
function writeThreeToOne(proteinSequence$$1) {
  function v2(str$$9, p1$$2, p2, p3, offset$$14, s$$4) {
    var v474 = p1$$2.toUpperCase();
    var v475 = p2.toLowerCase();
    var v280 = v474 + v475;
    var v281 = p3.toLowerCase();
    return v280 + v281
  }
  proteinSequence$$1 = proteinSequence$$1.replace(/(.)(.)(.)/g, v2);
  proteinSequence$$1 = proteinSequence$$1.replace(/Ala/g, " A ");
  proteinSequence$$1 = proteinSequence$$1.replace(/Asx/g, " B ");
  proteinSequence$$1 = proteinSequence$$1.replace(/Cys/g, " C ");
  proteinSequence$$1 = proteinSequence$$1.replace(/Asp/g, " D ");
  proteinSequence$$1 = proteinSequence$$1.replace(/Glu/g, " E ");
  proteinSequence$$1 = proteinSequence$$1.replace(/Phe/g, " F ");
  proteinSequence$$1 = proteinSequence$$1.replace(/Gly/g, " G ");
  proteinSequence$$1 = proteinSequence$$1.replace(/His/g, " H ");
  proteinSequence$$1 = proteinSequence$$1.replace(/Ile/g, " I ");
  proteinSequence$$1 = proteinSequence$$1.replace(/Lys/g, " K ");
  proteinSequence$$1 = proteinSequence$$1.replace(/Leu/g, " L ");
  proteinSequence$$1 = proteinSequence$$1.replace(/Met/g, " M ");
  proteinSequence$$1 = proteinSequence$$1.replace(/Asn/g, " N ");
  proteinSequence$$1 = proteinSequence$$1.replace(/Pro/g, " P ");
  proteinSequence$$1 = proteinSequence$$1.replace(/Gln/g, " Q ");
  proteinSequence$$1 = proteinSequence$$1.replace(/Arg/g, " R ");
  proteinSequence$$1 = proteinSequence$$1.replace(/Ser/g, " S ");
  proteinSequence$$1 = proteinSequence$$1.replace(/Thr/g, " T ");
  proteinSequence$$1 = proteinSequence$$1.replace(/Val/g, " V ");
  proteinSequence$$1 = proteinSequence$$1.replace(/Trp/g, " W ");
  proteinSequence$$1 = proteinSequence$$1.replace(/Xaa/g, " X ");
  proteinSequence$$1 = proteinSequence$$1.replace(/Tyr/g, " Y ");
  proteinSequence$$1 = proteinSequence$$1.replace(/Glx/g, " Z ");
  proteinSequence$$1 = proteinSequence$$1.replace(/\*\*\*/g, " * ");
  proteinSequence$$1 = proteinSequence$$1.replace(/\s/g, "");
  var v282 = outputWindow.document;
  var v283 = addReturns(proteinSequence$$1);
  v282.write(v283);
  return true
}
function filterTriplets(tripletSequence) {
  tripletSequence = tripletSequence.replace(/\s|\d/gi, "");
  return tripletSequence
}
function getFastaTitleFromTriplets(tripletSequence$$1) {
  fastaSequenceTitle = "Untitled";
  var v476 = tripletSequence$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v285 = v476 != -1;
  if(v285) {
    var v284 = tripletSequence$$1.match(/\>[^\f\n\r]+[\f\n\r]/, "");
    fastaSequenceTitle = v284.toString();
    fastaSequenceTitle = fastaSequenceTitle.replace(/\>|[\f\n\r]/g, "");
    fastaSequenceTitle = filterFastaTitle(fastaSequenceTitle)
  }
  return fastaSequenceTitle
}
function getTripletSequenceFromFasta(tripletSequence$$2) {
  var v477 = tripletSequence$$2.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v286 = v477 != -1;
  if(v286) {
    tripletSequence$$2 = tripletSequence$$2.replace(/\>[^\f\n\r]+[\f\n\r]/, "")
  }
  return tripletSequence$$2
}
function getInfoFromTitleAndSequenceTriplets(fastaSequenceTitle$$4, sequence$$18) {
  var stringToReturn$$5 = "&gt;results for sequence ";
  var v478 = fastaSequenceTitle$$4.search(/[^\s]/);
  var v288 = v478 != -1;
  if(v288) {
    var v479 = stringToReturn$$5 + '"';
    var v287 = v479 + fastaSequenceTitle$$4;
    stringToReturn$$5 = v287 + '"'
  }
  var v480 = stringToReturn$$5 + ' starting "';
  var v481 = sequence$$18.substring(0, 12);
  var v289 = v480 + v481;
  stringToReturn$$5 = v289 + '"';
  return stringToReturn$$5 + "\n"
}
document.onload = v3;
var v290 = document.getElementById("submitbtn");
v290.onclick = v4;
var v291 = document.getElementById("clearbtn");
v291.onclick = v5;

}

JAM.stopProfile('load');
