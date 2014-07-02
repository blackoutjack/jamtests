function v4() {
  var v558 = document.forms;
  var v479 = v558[0];
  var v290 = v479.elements;
  var v5 = v290[0];
  v5.value = " ";
  return
}
function v3() {
  try {
    revComp(document)
  }catch(e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    alert(v6)
  }
  return
}
function v2() {
  var v291 = document.main_form;
  var v7 = v291.main_submit;
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
  var v292 = arrayOfSequences.length;
  var v9 = v292 < 2;
  if(v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v293 = arrayOfTitles.length;
  var v11 = i$$1 < v293;
  for(;v11;) {
    var v559 = arrayOfTitles[i$$1];
    var v480 = v559.search(/\S/);
    var v294 = v480 == -1;
    var v482 = !v294;
    if(v482) {
      var v613 = arrayOfSequences[i$$1];
      var v560 = v613.search(/\S/);
      var v481 = v560 == -1;
      var v562 = !v481;
      if(v562) {
        var v614 = arrayOfSequences[i$$1];
        var v561 = v614.length;
        v481 = v561 != lengthOfAlign
      }
      v294 = v481
    }
    var v10 = v294;
    if(v10) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v295 = arrayOfTitles.length;
    v11 = i$$1 < v295
  }
  return true
}
function checkCodonTable(codonTable) {
  var v483 = codonTable.search(/AmAcid/);
  var v296 = v483 == -1;
  var v485 = !v296;
  if(v485) {
    var v563 = codonTable.search(/Codon/);
    var v484 = v563 == -1;
    var v565 = !v484;
    if(v565) {
      var v615 = codonTable.search(/Number/);
      var v564 = v615 == -1;
      var v617 = !v564;
      if(v617) {
        var v650 = codonTable.search(/\/1000/);
        var v616 = v650 == -1;
        var v652 = !v616;
        if(v652) {
          var v651 = codonTable.search(/Fraction\s*\.\./);
          v616 = v651 == -1
        }
        v564 = v616
      }
      v484 = v564
    }
    v296 = v484
  }
  var v12 = v296;
  if(v12) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v486 = formElement.value;
  var v297 = v486.search(/\S/);
  var v13 = v297 == -1;
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
  var v298 = arrayOfPatterns.length;
  var v16 = z$$2 < v298;
  for(;v16;) {
    var v487 = arrayOfPatterns[z$$2];
    var v299 = v487.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v14 = v299 == -1;
    if(v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    var v488 = arrayOfPatterns[z$$2];
    var v300 = moreExpressionCheck(v488);
    var v15 = v300 == false;
    if(v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v301 = arrayOfPatterns.length;
    v16 = z$$2 < v301
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v302 = arrayOfPatterns.length;
  var v25 = j < v302;
  for(;v25;) {
    var v19 = geneticCodeMatchExp;
    var v20 = j;
    var v566 = arrayOfPatterns[j];
    var v489 = v566.match(/\/.+\//);
    var v303 = v489 + "gi";
    var v753 = eval(v303);
    v19[v20] = v753;
    var v21 = geneticCodeMatchResult;
    var v22 = j;
    var v490 = arrayOfPatterns[j];
    var v304 = v490.match(/=[a-zA-Z\*]/);
    var v754 = v304.toString();
    v21[v22] = v754;
    var v23 = geneticCodeMatchResult;
    var v24 = j;
    var v305 = geneticCodeMatchResult[j];
    var v755 = v305.replace(/=/g, "");
    v23[v24] = v755;
    j = j + 1;
    var v306 = arrayOfPatterns.length;
    v25 = j < v306
  }
  var i$$2 = 0;
  var v491 = testSequence.length;
  var v307 = v491 - 3;
  var v32 = i$$2 <= v307;
  for(;v32;) {
    var v26 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v26);
    j = 0;
    var v308 = geneticCodeMatchExp.length;
    var v30 = j < v308;
    for(;v30;) {
      var v492 = geneticCodeMatchExp[j];
      var v309 = codon.search(v492);
      var v29 = v309 != -1;
      if(v29) {
        var v28 = oneMatch == true;
        if(v28) {
          var v310 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v27 = v310 + ".";
          alert(v27);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v311 = geneticCodeMatchExp.length;
      v30 = j < v311
    }
    var v31 = oneMatch == false;
    if(v31) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v493 = testSequence.length;
    var v312 = v493 - 3;
    v32 = i$$2 <= v312
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v313 = arrayOfPatterns$$1.length;
  var v34 = z$$3 < v313;
  for(;v34;) {
    var v494 = arrayOfPatterns$$1[z$$3];
    var v314 = v494.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v33 = v314 != -1;
    if(v33) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v315 = arrayOfPatterns$$1.length;
    v34 = z$$3 < v315
  }
  var i$$3 = 0;
  var v316 = arrayOfPatterns$$1.length;
  var v38 = i$$3 < v316;
  for(;v38;) {
    var v495 = arrayOfPatterns$$1[i$$3];
    var v317 = "[" + v495;
    var v35 = v317 + "]";
    var re = new RegExp(v35, "gi");
    var j$$1 = i$$3 + 1;
    var v318 = arrayOfPatterns$$1.length;
    var v37 = j$$1 < v318;
    for(;v37;) {
      var v496 = arrayOfPatterns$$1[j$$1];
      var v319 = v496.search(re);
      var v36 = v319 != -1;
      if(v36) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v320 = arrayOfPatterns$$1.length;
      v37 = j$$1 < v320
    }
    i$$3 = i$$3 + 1;
    var v321 = arrayOfPatterns$$1.length;
    v38 = i$$3 < v321
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v322 = arrayOfPatterns$$2.length;
  var v41 = z$$4 < v322;
  for(;v41;) {
    var v497 = arrayOfPatterns$$2[z$$4];
    var v323 = v497.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v39 = v323 == -1;
    if(v39) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    var v498 = arrayOfPatterns$$2[z$$4];
    var v324 = moreExpressionCheck(v498);
    var v40 = v324 == false;
    if(v40) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v325 = arrayOfPatterns$$2.length;
    v41 = z$$4 < v325
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v567 = getSequenceFromFasta(text$$7);
  var v499 = v567.replace(/[^A-Za-z]/g, "");
  var v326 = v499.length;
  var v43 = v326 > maxInput;
  if(v43) {
    var v327 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v42 = v327 + " characters.";
    alert(v42);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v328 = text$$8.length;
  var v45 = v328 > maxInput$$1;
  if(v45) {
    var v329 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v44 = v329 + " characters.";
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
  var v330 = alignArray.length;
  var v52 = v330 < 3;
  if(v52) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v331 = alignArray.length;
  var v54 = i$$4 < v331;
  for(;v54;) {
    var v500 = alignArray[i$$4];
    var v332 = v500.search(/[^\s]+\s/);
    var v53 = v332 == -1;
    if(v53) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v333 = alignArray.length;
    v54 = i$$4 < v333
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
  var v334 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v57 = v334 != -1;
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
  var v335 = sequence$$2.length;
  var v58 = "&gt;results for " + v335;
  var stringToReturn = v58 + " residue sequence ";
  var v336 = fastaSequenceTitle.search(/[^\s]/);
  var v60 = v336 != -1;
  if(v60) {
    var v337 = stringToReturn + '"';
    var v59 = v337 + fastaSequenceTitle;
    stringToReturn = v59 + '"'
  }
  var v338 = stringToReturn + ' starting "';
  var v339 = sequence$$2.substring(0, 10);
  var v61 = v338 + v339;
  stringToReturn = v61 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v340 = sequenceOne.length;
  var v62 = "Search results for " + v340;
  var stringToReturn$$1 = v62 + " residue sequence ";
  var v341 = fastaSequenceTitleOne.search(/[^\s]/);
  var v64 = v341 != -1;
  if(v64) {
    var v342 = stringToReturn$$1 + '"';
    var v63 = v342 + fastaSequenceTitleOne;
    stringToReturn$$1 = v63 + '"'
  }
  var v343 = stringToReturn$$1 + ' starting "';
  var v344 = sequenceOne.substring(0, 10);
  var v65 = v343 + v344;
  stringToReturn$$1 = v65 + '"\n';
  var v345 = stringToReturn$$1 + "and ";
  var v346 = sequenceTwo.length;
  var v66 = v345 + v346;
  stringToReturn$$1 = v66 + " residue sequence ";
  var v347 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v68 = v347 != -1;
  if(v68) {
    var v348 = stringToReturn$$1 + '"';
    var v67 = v348 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v67 + '"'
  }
  var v349 = stringToReturn$$1 + ' starting "';
  var v350 = sequenceTwo.substring(0, 10);
  var v69 = v349 + v350;
  stringToReturn$$1 = v69 + '"';
  var v70 = '<div class="info">' + stringToReturn$$1;
  return v70 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v71 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v71);
  var j$$2 = 0;
  var v351 = arrayOfPatterns$$3.length;
  var v74 = j$$2 < v351;
  for(;v74;) {
    var v72 = geneticCodeMatchExp$$1;
    var v73 = j$$2;
    var v568 = arrayOfPatterns$$3[j$$2];
    var v501 = v568.match(/\/.+\//);
    var v352 = v501 + "gi";
    var v756 = eval(v352);
    v72[v73] = v756;
    j$$2 = j$$2 + 1;
    var v353 = arrayOfPatterns$$3.length;
    v74 = j$$2 < v353
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v75 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v75);
  var j$$3 = 0;
  var v354 = arrayOfPatterns$$4.length;
  var v80 = j$$3 < v354;
  for(;v80;) {
    var v76 = geneticCodeMatchResult$$1;
    var v77 = j$$3;
    var v502 = arrayOfPatterns$$4[j$$3];
    var v355 = v502.match(/=[a-zA-Z\*]/);
    var v757 = v355.toString();
    v76[v77] = v757;
    var v78 = geneticCodeMatchResult$$1;
    var v79 = j$$3;
    var v356 = geneticCodeMatchResult$$1[j$$3];
    var v758 = v356.replace(/=/g, "");
    v78[v79] = v758;
    j$$3 = j$$3 + 1;
    var v357 = arrayOfPatterns$$4.length;
    v80 = j$$3 < v357
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v358 = sequence$$3.length;
  var v81 = "Results for " + v358;
  var stringToReturn$$2 = v81 + " residue sequence ";
  var v359 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v83 = v359 != -1;
  if(v83) {
    var v360 = stringToReturn$$2 + '"';
    var v82 = v360 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v82 + '"'
  }
  var v361 = stringToReturn$$2 + ' starting "';
  var v362 = sequence$$3.substring(0, 10);
  var v84 = v361 + v362;
  stringToReturn$$2 = v84 + '"';
  var v85 = '<div class="info">' + stringToReturn$$2;
  return v85 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v503 = "Results for " + topology;
  var v363 = v503 + " ";
  var v364 = sequence$$4.length;
  var v86 = v363 + v364;
  var stringToReturn$$3 = v86 + " residue sequence ";
  var v365 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v88 = v365 != -1;
  if(v88) {
    var v366 = stringToReturn$$3 + '"';
    var v87 = v366 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v87 + '"'
  }
  var v367 = stringToReturn$$3 + ' starting "';
  var v368 = sequence$$4.substring(0, 10);
  var v89 = v367 + v368;
  stringToReturn$$3 = v89 + '"';
  var v90 = '<div class="info">' + stringToReturn$$3;
  return v90 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v369 = sequenceOne$$1.length;
  var v91 = "Alignment results for " + v369;
  var stringToReturn$$4 = v91 + " residue sequence ";
  var v370 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v93 = v370 != -1;
  if(v93) {
    var v371 = stringToReturn$$4 + '"';
    var v92 = v371 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v92 + '"'
  }
  var v372 = stringToReturn$$4 + ' starting "';
  var v373 = sequenceOne$$1.substring(0, 10);
  var v94 = v372 + v373;
  stringToReturn$$4 = v94 + '"\n';
  var v374 = stringToReturn$$4 + "and ";
  var v375 = sequenceTwo$$1.length;
  var v95 = v374 + v375;
  stringToReturn$$4 = v95 + " residue sequence ";
  var v376 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v97 = v376 != -1;
  if(v97) {
    var v377 = stringToReturn$$4 + '"';
    var v96 = v377 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v96 + '"'
  }
  var v378 = stringToReturn$$4 + ' starting "';
  var v379 = sequenceTwo$$1.substring(0, 10);
  var v98 = v378 + v379;
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
    var v380 = Math.random();
    var v381 = components.length;
    var v100 = v380 * v381;
    tempNum = Math.floor(v100);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4 = j$$4 + 1;
    v101 = j$$4 < lengthOut
  }
  return sequenceArray.join("")
}
function getSequenceFromFasta(sequenceRecord) {
  var v382 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v102 = v382 != -1;
  if(v102) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "")
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v383 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v104 = v383 != -1;
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
  var v504 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v384 = v504 != -1;
  var v506 = !v384;
  if(v506) {
    var v569 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    var v505 = v569 != -1;
    var v571 = !v505;
    if(v571) {
      var v618 = expressionToCheck.search(/\[\]/);
      var v570 = v618 != -1;
      var v620 = !v570;
      if(v620) {
        var v653 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
        var v619 = v653 != -1;
        var v655 = !v619;
        if(v655) {
          var v671 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
          var v654 = v671 != -1;
          var v673 = !v654;
          if(v673) {
            var v689 = expressionToCheck.search(/\|\|/);
            var v672 = v689 != -1;
            var v691 = !v672;
            if(v691) {
              var v706 = expressionToCheck.search(/\/\|/);
              var v690 = v706 != -1;
              var v708 = !v690;
              if(v708) {
                var v715 = expressionToCheck.search(/\|\//);
                var v707 = v715 != -1;
                var v717 = !v707;
                if(v717) {
                  var v724 = expressionToCheck.search(/\[.\]/);
                  var v716 = v724 != -1;
                  var v726 = !v716;
                  if(v726) {
                    var v731 = expressionToCheck.search(/\</);
                    var v725 = v731 != -1;
                    var v733 = !v725;
                    if(v733) {
                      var v732 = expressionToCheck.search(/\>/);
                      v725 = v732 != -1
                    }
                    v716 = v725
                  }
                  v707 = v716
                }
                v690 = v707
              }
              v672 = v690
            }
            v654 = v672
          }
          v619 = v654
        }
        v570 = v619
      }
      v505 = v570
    }
    v384 = v505
  }
  var v105 = v384;
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
  var v572 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v507 = v572 + "<head>\n";
  var v385 = v507 + "<title>Sequence Manipulation Suite</title>\n";
  var v111 = v385 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v110.write(v111);
  if(isColor) {
    var v112 = outputWindow.document;
    var v746 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v742 = v746 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v738 = v742 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v734 = v738 + "div.info {font-weight: bold}\n";
    var v727 = v734 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v718 = v727 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v709 = v718 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v692 = v709 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v674 = v692 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v656 = v674 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v621 = v656 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v573 = v621 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v508 = v573 + "td.many {color: #000000}\n";
    var v386 = v508 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v113 = v386 + "</style>\n";
    v112.write(v113)
  }else {
    var v114 = outputWindow.document;
    var v750 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v747 = v750 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v743 = v747 + "div.title {display: none}\n";
    var v739 = v743 + "div.info {font-weight: bold}\n";
    var v735 = v739 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v728 = v735 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v719 = v728 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v710 = v719 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v693 = v710 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v675 = v693 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v657 = v675 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v622 = v657 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v574 = v622 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v509 = v574 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v387 = v509 + "img {display: none}\n";
    var v115 = v387 + "</style>\n";
    v114.write(v115)
  }
  var v116 = outputWindow.document;
  var v575 = "</head>\n" + '<body class="main">\n';
  var v510 = v575 + '<div class="title">';
  var v388 = v510 + title$$6;
  var v117 = v388 + " results</div>\n";
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
  var v576 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v511 = v576 + "<head>\n";
  var v389 = v511 + "<title>Sequence Manipulation Suite</title>\n";
  var v119 = v389 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v118.write(v119);
  if(isBackground) {
    var v120 = outputWindow.document;
    var v748 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v744 = v748 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v740 = v744 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v736 = v740 + "div.info {font-weight: bold}\n";
    var v729 = v736 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v720 = v729 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v711 = v720 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v694 = v711 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v676 = v694 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v658 = v676 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v623 = v658 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v577 = v623 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v512 = v577 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v390 = v512 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v121 = v390 + "</style>\n";
    v120.write(v121)
  }else {
    var v122 = outputWindow.document;
    var v752 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v751 = v752 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v749 = v751 + "div.title {display: none}\n";
    var v745 = v749 + "div.info {font-weight: bold}\n";
    var v741 = v745 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v737 = v741 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v730 = v737 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v721 = v730 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v712 = v721 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v695 = v712 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v677 = v695 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v659 = v677 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v624 = v659 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v578 = v624 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v513 = v578 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v391 = v513 + "img {display: none}\n";
    var v123 = v391 + "</style>\n";
    v122.write(v123)
  }
  var v124 = outputWindow.document;
  var v579 = "</head>\n" + '<body class="main">\n';
  var v514 = v579 + '<div class="title">';
  var v392 = v514 + title$$8;
  var v125 = v392 + " results</div>\n";
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
  var v393 = dnaSequence$$1.search(/./);
  var v126 = v393 != -1;
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
  var v394 = testArray[0];
  var v130 = v394 != testString;
  if(v130) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v395 = testString.search(re$$2);
  var v131 = v395 == -1;
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
  var v396 = testNum.toFixed(3);
  var v134 = v396 != 2489.824;
  if(v134) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v397 = testNum.toPrecision(5);
  var v135 = v397 != 2489.8;
  if(v135) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v398 = theNumber$$1.search(/\d/);
  var v136 = v398 == -1;
  if(v136) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v515 = emblFile.search(/ID/);
  var v399 = v515 == -1;
  var v517 = !v399;
  if(v517) {
    var v580 = emblFile.search(/AC/);
    var v516 = v580 == -1;
    var v582 = !v516;
    if(v582) {
      var v625 = emblFile.search(/DE/);
      var v581 = v625 == -1;
      var v627 = !v581;
      if(v627) {
        var v626 = emblFile.search(/SQ/);
        v581 = v626 == -1
      }
      v516 = v581
    }
    v399 = v516
  }
  var v137 = v399;
  if(v137) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v400 = theNumber$$2.search(/\d/);
  var v138 = v400 == -1;
  if(v138) {
    alert("Please enter a number.");
    return false
  }
  var v140 = theNumber$$2 > maxInput$$2;
  if(v140) {
    var v401 = "Please enter a number less than or equal to " + maxInput$$2;
    var v139 = v401 + ".";
    alert(v139);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v402 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v141 = v402 != -1;
  if(v141) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v403 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v142 = v403 != -1;
  if(v142) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v518 = genBankFile.search(/LOCUS/);
  var v404 = v518 == -1;
  var v520 = !v404;
  if(v520) {
    var v583 = genBankFile.search(/DEFINITION/);
    var v519 = v583 == -1;
    var v585 = !v519;
    if(v585) {
      var v628 = genBankFile.search(/ACCESSION/);
      var v584 = v628 == -1;
      var v630 = !v584;
      if(v630) {
        var v629 = genBankFile.search(/ORIGIN/);
        v584 = v629 == -1
      }
      v519 = v584
    }
    v404 = v519
  }
  var v143 = v404;
  if(v143) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v521 = genBankFile$$1.search(/LOCUS/);
  var v405 = v521 == -1;
  var v523 = !v405;
  if(v523) {
    var v586 = genBankFile$$1.search(/DEFINITION/);
    var v522 = v586 == -1;
    var v588 = !v522;
    if(v588) {
      var v631 = genBankFile$$1.search(/ACCESSION/);
      var v587 = v631 == -1;
      var v633 = !v587;
      if(v633) {
        var v632 = genBankFile$$1.search(/ORIGIN/);
        v587 = v632 == -1
      }
      v522 = v587
    }
    v405 = v522
  }
  var v144 = v405;
  if(v144) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v406 = genBankFile$$1.search(/FEATURES {13}/);
  var v145 = v406 == -1;
  if(v145) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v524 = emblFile$$1.search(/ID/);
  var v407 = v524 == -1;
  var v526 = !v407;
  if(v526) {
    var v589 = emblFile$$1.search(/AC/);
    var v525 = v589 == -1;
    var v591 = !v525;
    if(v591) {
      var v634 = emblFile$$1.search(/DE/);
      var v590 = v634 == -1;
      var v636 = !v590;
      if(v636) {
        var v635 = emblFile$$1.search(/SQ/);
        v590 = v635 == -1
      }
      v525 = v590
    }
    v407 = v525
  }
  var v146 = v407;
  if(v146) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v408 = emblFile$$1.search(/^FT/m);
  var v147 = v408 == -1;
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
    var v409 = basePerLine / groupSize;
    var v151 = j$$6 <= v409;
    for(;v151;) {
      var v150 = k < groupSize;
      for(;v150;) {
        var v410 = k + i$$5;
        var v149 = text$$10.charAt(v410);
        lineOfText = lineOfText + v149;
        k = k + 1;
        v150 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v411 = basePerLine / groupSize;
      v151 = j$$6 <= v411
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
    var v412 = adjustment < 0;
    if(v412) {
      v412 = adjusted >= 0
    }
    var v155 = v412;
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
    var v413 = basePerLine$$2 / groupSize$$2;
    var v162 = j$$7 <= v413;
    for(;v162;) {
      var v158 = k$$1 < groupSize$$2;
      for(;v158;) {
        var v414 = i$$6 + k$$1;
        var v156 = v414 >= stopBase$$2;
        if(v156) {
          break
        }
        var v415 = k$$1 + i$$6;
        var v157 = text$$12.charAt(v415);
        lineOfText$$1 = lineOfText$$1 + v157;
        k$$1 = k$$1 + 1;
        v158 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v160 = numberPosition$$1 == "above";
      if(v160) {
        var v416 = adjustNumbering(i$$6, numberingAdjustment);
        var v159 = rightNum(v416, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v159
      }
      var v161 = i$$6 >= stopBase$$2;
      if(v161) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v417 = basePerLine$$2 / groupSize$$2;
      v162 = j$$7 <= v417
    }
    var v185 = numberPosition$$1 == "left";
    if(v185) {
      var v163 = outputWindow.document;
      var v592 = adjustNumbering(lineNum, numberingAdjustment);
      var v527 = rightNum(v592, "", 8, tabIn$$3);
      var v418 = v527 + lineOfText$$1;
      var v164 = v418 + "\n";
      v163.write(v164);
      var v168 = strands$$1 == "two";
      if(v168) {
        var v165 = outputWindow.document;
        var v593 = adjustNumbering(lineNum, numberingAdjustment);
        var v528 = rightNum(v593, "", 8, tabIn$$3);
        var v529 = complement(lineOfText$$1);
        var v419 = v528 + v529;
        var v166 = v419 + "\n";
        v165.write(v166);
        var v167 = outputWindow.document;
        v167.write("\n")
      }
    }else {
      var v184 = numberPosition$$1 == "right";
      if(v184) {
        var v169 = outputWindow.document;
        var v530 = adjustNumbering(i$$6, numberingAdjustment);
        var v420 = lineOfText$$1 + v530;
        var v170 = v420 + "\n";
        v169.write(v170);
        var v174 = strands$$1 == "two";
        if(v174) {
          var v171 = outputWindow.document;
          var v531 = complement(lineOfText$$1);
          var v532 = adjustNumbering(i$$6, numberingAdjustment);
          var v421 = v531 + v532;
          var v172 = v421 + "\n";
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
            var v422 = complement(lineOfText$$1);
            var v180 = v422 + "\n";
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
    var v423 = basePerLine$$3 / groupSize$$3;
    var v193 = j$$8 <= v423;
    for(;v193;) {
      var v189 = k$$2 < groupSize$$3;
      for(;v189;) {
        var v424 = i$$7 + k$$2;
        var v187 = v424 >= stopBase$$3;
        if(v187) {
          break
        }
        var v425 = k$$2 + i$$7;
        var v188 = text$$13.charAt(v425);
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
      var v426 = basePerLine$$3 / groupSize$$3;
      v193 = j$$8 <= v426
    }
    var v204 = numberPosition$$2 == "left";
    if(v204) {
      var v194 = outputWindow.document;
      var v533 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v427 = v533 + lineOfText$$2;
      var v195 = v427 + "\n";
      v194.write(v195)
    }else {
      var v203 = numberPosition$$2 == "right";
      if(v203) {
        var v196 = outputWindow.document;
        var v428 = lineOfText$$2 + i$$7;
        var v197 = v428 + "\n";
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
  var v534 = sequence$$13.length;
  var v429 = v534 <= firstIndexToMutate;
  var v536 = !v429;
  if(v536) {
    var v535 = lastIndexToMutate < 0;
    var v594 = !v535;
    if(v594) {
      v535 = lastIndexToMutate <= firstIndexToMutate
    }
    v429 = v535
  }
  var v206 = v429;
  if(v206) {
    numMut = 0
  }
  var i$$8 = 0;
  var v214 = i$$8 < numMut;
  for(;v214;) {
    maxNum = sequence$$13.length;
    var v430 = Math.random();
    var v207 = v430 * maxNum;
    randNum = Math.floor(v207);
    var v431 = randNum < firstIndexToMutate;
    var v537 = !v431;
    if(v537) {
      v431 = randNum > lastIndexToMutate
    }
    var v208 = v431;
    if(v208) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v214 = i$$8 < numMut;
      continue
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for(;needNewChar;) {
      var v432 = Math.random();
      var v433 = components$$1.length;
      var v209 = v432 * v433;
      componentsIndex = Math.round(v209);
      var v434 = components$$1.length;
      var v210 = componentsIndex == v434;
      if(v210) {
        componentsIndex = 0
      }
      var v435 = components$$1[componentsIndex];
      var v211 = v435 != currentChar;
      if(v211) {
        needNewChar = false
      }
    }
    var v436 = sequence$$13.substring(0, randNum);
    var v437 = components$$1[componentsIndex];
    var v212 = v436 + v437;
    var v438 = randNum + 1;
    var v439 = sequence$$13.length;
    var v213 = sequence$$13.substring(v438, v439);
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
    var v440 = Math.random();
    var v441 = components$$2.length;
    var v217 = v440 * v441;
    tempNum$$1 = Math.floor(v217);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v442 = sequence$$14.length;
    var v220 = v442 == 60;
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
    var v595 = sequence$$15.length;
    var v538 = v595 - lookAhead;
    var v539 = sequence$$15.length;
    var v443 = sequence$$15.substring(v538, v539);
    var v225 = v443 + sequence$$15;
    var v226 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v225 + v226;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v228 = outputWindow.document;
  v228.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  var v229 = outputWindow.document;
  var v596 = '<tr><td class="title" width="200px">' + "Site:";
  var v540 = v596 + '</td><td class="title">';
  var v444 = v540 + "Positions:";
  var v230 = v444 + "</td></tr>\n";
  v229.write(v230);
  var i$$9 = 0;
  var v445 = arrayOfItems.length;
  var v246 = i$$9 < v445;
  for(;v246;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v446 = arrayOfItems[i$$9];
    var v231 = v446.match(/\/.+\//);
    matchExp = v231 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    var v597 = arrayOfItems[i$$9];
    var v541 = v597.match(/\)\D*\d+/);
    var v447 = v541.toString();
    var v232 = v447.replace(/\)\D*/, "");
    cutDistance = parseFloat(v232);
    var v238 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v238;) {
      var v233 = matchExp.lastIndex;
      matchPosition = v233 - cutDistance;
      var v448 = matchPosition >= lowerLimit;
      if(v448) {
        v448 = matchPosition < upperLimit
      }
      var v236 = v448;
      if(v236) {
        timesFound = timesFound + 1;
        var v234 = tempString$$1 + ", ";
        var v449 = matchPosition - shiftValue;
        var v235 = v449 + 1;
        tempString$$1 = v234 + v235
      }
      var v237 = matchExp;
      var v542 = matchExp.lastIndex;
      var v598 = RegExp.lastMatch;
      var v543 = v598.length;
      var v450 = v542 - v543;
      v237.lastIndex = v450 + 1;
      v238 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    var v451 = tempString$$1.search(/\d/);
    var v239 = v451 != -1;
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
    var v696 = '<tr><td class="' + backGroundClass;
    var v678 = v696 + '">';
    var v722 = arrayOfItems[i$$9];
    var v713 = v722.match(/\([^\(]+\)/);
    var v697 = v713.toString();
    var v679 = v697.replace(/\(|\)/g, "");
    var v660 = v678 + v679;
    var v637 = v660 + '</td><td class="';
    var v599 = v637 + backGroundClass;
    var v544 = v599 + '">';
    var v452 = v544 + tempString$$1;
    var v245 = v452 + "</td></tr>\n";
    v244.write(v245);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v453 = arrayOfItems.length;
    v246 = i$$9 < v453
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
  var v661 = '<tr><td class="title">' + "Pattern:";
  var v638 = v661 + '</td><td class="title">';
  var v600 = v638 + "Times found:";
  var v545 = v600 + '</td><td class="title">';
  var v454 = v545 + "Percentage:";
  var v250 = v454 + "</td></tr>\n";
  v249.write(v250);
  var i$$10 = 0;
  var v455 = arrayOfItems$$1.length;
  var v259 = i$$10 < v455;
  for(;v259;) {
    var tempNumber = 0;
    var v456 = arrayOfItems$$1[i$$10];
    var v251 = v456.match(/\/[^\/]+\//);
    var matchExp$$1 = v251 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    var v457 = sequence$$16.search(matchExp$$1);
    var v253 = v457 != -1;
    if(v253) {
      var v252 = sequence$$16.match(matchExp$$1);
      tempNumber = v252.length
    }
    var percentage = 0;
    var v546 = originalLength + 1;
    var v639 = arrayOfItems$$1[i$$10];
    var v601 = v639.match(/\d+/);
    var v547 = parseFloat(v601);
    var v458 = v546 - v547;
    var v256 = v458 > 0;
    if(v256) {
      var v254 = 100 * tempNumber;
      var v459 = originalLength + 1;
      var v602 = arrayOfItems$$1[i$$10];
      var v548 = v602.match(/\d+/);
      var v460 = parseFloat(v548);
      var v255 = v459 - v460;
      percentage = v254 / v255
    }
    var v257 = outputWindow.document;
    var v723 = arrayOfItems$$1[i$$10];
    var v714 = v723.match(/\([^\(]+\)\b/);
    var v698 = v714.toString();
    var v680 = v698.replace(/\(|\)/g, "");
    var v662 = "<tr><td>" + v680;
    var v640 = v662 + "</td><td>";
    var v603 = v640 + tempNumber;
    var v549 = v603 + "</td><td>";
    var v550 = percentage.toFixed(2);
    var v461 = v549 + v550;
    var v258 = v461 + "</td></tr>\n";
    v257.write(v258);
    i$$10 = i$$10 + 1;
    var v462 = arrayOfItems$$1.length;
    v259 = i$$10 < v462
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
  var v463 = sequence$$17.length;
  var v267 = v463 > 0;
  for(;v267;) {
    maxNum$$1 = sequence$$17.length;
    var v464 = Math.random();
    var v261 = v464 * maxNum$$1;
    randNum$$1 = Math.floor(v261);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v262 = randNum$$1 + 1;
    var v263 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v262, v263);
    sequence$$17 = tempString1 + tempString2;
    var v465 = tempSeq.length;
    var v266 = v465 == 60;
    if(v266) {
      var v264 = outputWindow.document;
      var v265 = tempSeq + "\n";
      v264.write(v265);
      tempSeq = ""
    }
    var v466 = sequence$$17.length;
    v267 = v466 > 0
  }
  var v268 = outputWindow.document;
  var v269 = tempSeq + "\n";
  v268.write(v269);
  return true
}
function revComp(theDocument) {
  var newDna = "";
  var title$$9 = "";
  var maxInput$$3 = 1E5;
  var v467 = testScript();
  var v270 = v467 == false;
  if(v270) {
    return false
  }
  var v681 = theDocument.forms;
  var v663 = v681[0];
  var v641 = v663.elements;
  var v604 = v641[0];
  var v551 = checkFormElement(v604);
  var v468 = v551 == false;
  var v553 = !v468;
  if(v553) {
    var v699 = theDocument.forms;
    var v682 = v699[0];
    var v664 = v682.elements;
    var v642 = v664[0];
    var v605 = v642.value;
    var v552 = checkSequenceLength(v605, maxInput$$3);
    v468 = v552 == false
  }
  var v271 = v468;
  if(v271) {
    return false
  }
  openWindow("Reverse Complement");
  openPre();
  var v643 = theDocument.forms;
  var v606 = v643[0];
  var v554 = v606.elements;
  var v469 = v554[0];
  var v272 = v469.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v272);
  var i$$11 = 0;
  var v470 = arrayOfFasta$$1.length;
  var v287 = i$$11 < v470;
  for(;v287;) {
    var v273 = arrayOfFasta$$1[i$$11];
    newDna = getSequenceFromFasta(v273);
    var v274 = arrayOfFasta$$1[i$$11];
    title$$9 = getTitleFromFasta(v274);
    newDna = removeNonDna(newDna);
    var v700 = theDocument.forms;
    var v683 = v700[0];
    var v665 = v683.elements;
    var v644 = v665[4];
    var v607 = v644.options;
    var v701 = theDocument.forms;
    var v684 = v701[0];
    var v666 = v684.elements;
    var v645 = v666[4];
    var v608 = v645.selectedIndex;
    var v555 = v607[v608];
    var v471 = v555.value;
    var v284 = v471 == "reverse-complement";
    if(v284) {
      var v275 = outputWindow.document;
      var v472 = ">" + title$$9;
      var v276 = v472 + " reverse complement\n";
      v275.write(v276);
      var v277 = complement(newDna);
      newDna = reverse(v277)
    }else {
      var v702 = theDocument.forms;
      var v685 = v702[0];
      var v667 = v685.elements;
      var v646 = v667[4];
      var v609 = v646.options;
      var v703 = theDocument.forms;
      var v686 = v703[0];
      var v668 = v686.elements;
      var v647 = v668[4];
      var v610 = v647.selectedIndex;
      var v556 = v609[v610];
      var v473 = v556.value;
      var v283 = v473 == "reverse";
      if(v283) {
        var v278 = outputWindow.document;
        var v474 = ">" + title$$9;
        var v279 = v474 + " reverse\n";
        v278.write(v279);
        newDna = reverse(newDna)
      }else {
        var v704 = theDocument.forms;
        var v687 = v704[0];
        var v669 = v687.elements;
        var v648 = v669[4];
        var v611 = v648.options;
        var v705 = theDocument.forms;
        var v688 = v705[0];
        var v670 = v688.elements;
        var v649 = v670[4];
        var v612 = v649.selectedIndex;
        var v557 = v611[v612];
        var v475 = v557.value;
        var v282 = v475 == "complement";
        if(v282) {
          var v280 = outputWindow.document;
          var v476 = ">" + title$$9;
          var v281 = v476 + " complement\n";
          v280.write(v281);
          newDna = complement(newDna)
        }
      }
    }
    var v285 = outputWindow.document;
    var v477 = addReturns(newDna);
    var v286 = v477 + "\n\n";
    v285.write(v286);
    i$$11 = i$$11 + 1;
    var v478 = arrayOfFasta$$1.length;
    v287 = i$$11 < v478
  }
  closePre();
  closeWindow();
  return true
}
document.onload = v2;
var v288 = document.getElementById("submitbtn");
v288.onclick = v3;
var v289 = document.getElementById("clearbtn");
v289.onclick = v4;

