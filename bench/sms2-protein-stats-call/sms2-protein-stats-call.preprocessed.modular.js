introspect(JAMScript.introspectors.processAll) {
function v4() {
  var v539 = document.forms;
  var v463 = v539[0];
  var v281 = v463.elements;
  var v5 = v281[0];
  v5.value = " ";
  return
}
function v3() {
  try {
    proteinStats(document)
  }catch(e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    alert(v6)
  }
  return
}
function v2() {
  var v282 = document.main_form;
  var v7 = v282.main_submit;
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
  var v283 = arrayOfSequences.length;
  var v9 = v283 < 2;
  if(v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v284 = arrayOfTitles.length;
  var v11 = i$$1 < v284;
  for(;v11;) {
    var v540 = arrayOfTitles[i$$1];
    var v464 = v540.search(/\S/);
    var v285 = v464 == -1;
    var v466 = !v285;
    if(v466) {
      var v588 = arrayOfSequences[i$$1];
      var v541 = v588.search(/\S/);
      var v465 = v541 == -1;
      var v543 = !v465;
      if(v543) {
        var v589 = arrayOfSequences[i$$1];
        var v542 = v589.length;
        v465 = v542 != lengthOfAlign
      }
      v285 = v465
    }
    var v10 = v285;
    if(v10) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v286 = arrayOfTitles.length;
    v11 = i$$1 < v286
  }
  return true
}
function checkCodonTable(codonTable) {
  var v467 = codonTable.search(/AmAcid/);
  var v287 = v467 == -1;
  var v469 = !v287;
  if(v469) {
    var v544 = codonTable.search(/Codon/);
    var v468 = v544 == -1;
    var v546 = !v468;
    if(v546) {
      var v590 = codonTable.search(/Number/);
      var v545 = v590 == -1;
      var v592 = !v545;
      if(v592) {
        var v619 = codonTable.search(/\/1000/);
        var v591 = v619 == -1;
        var v621 = !v591;
        if(v621) {
          var v620 = codonTable.search(/Fraction\s*\.\./);
          v591 = v620 == -1
        }
        v545 = v591
      }
      v468 = v545
    }
    v287 = v468
  }
  var v12 = v287;
  if(v12) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v470 = formElement.value;
  var v288 = v470.search(/\S/);
  var v13 = v288 == -1;
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
  var v289 = arrayOfPatterns.length;
  var v16 = z$$2 < v289;
  for(;v16;) {
    var v471 = arrayOfPatterns[z$$2];
    var v290 = v471.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v14 = v290 == -1;
    if(v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    var v472 = arrayOfPatterns[z$$2];
    var v291 = moreExpressionCheck(v472);
    var v15 = v291 == false;
    if(v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v292 = arrayOfPatterns.length;
    v16 = z$$2 < v292
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v293 = arrayOfPatterns.length;
  var v25 = j < v293;
  for(;v25;) {
    var v19 = geneticCodeMatchExp;
    var v20 = j;
    var v547 = arrayOfPatterns[j];
    var v473 = v547.match(/\/.+\//);
    var v294 = v473 + "gi";
    var v704 = eval(v294);
    v19[v20] = v704;
    var v21 = geneticCodeMatchResult;
    var v22 = j;
    var v474 = arrayOfPatterns[j];
    var v295 = v474.match(/=[a-zA-Z\*]/);
    var v705 = v295.toString();
    v21[v22] = v705;
    var v23 = geneticCodeMatchResult;
    var v24 = j;
    var v296 = geneticCodeMatchResult[j];
    var v706 = v296.replace(/=/g, "");
    v23[v24] = v706;
    j = j + 1;
    var v297 = arrayOfPatterns.length;
    v25 = j < v297
  }
  var i$$2 = 0;
  var v475 = testSequence.length;
  var v298 = v475 - 3;
  var v32 = i$$2 <= v298;
  for(;v32;) {
    var v26 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v26);
    j = 0;
    var v299 = geneticCodeMatchExp.length;
    var v30 = j < v299;
    for(;v30;) {
      var v476 = geneticCodeMatchExp[j];
      var v300 = codon.search(v476);
      var v29 = v300 != -1;
      if(v29) {
        var v28 = oneMatch == true;
        if(v28) {
          var v301 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v27 = v301 + ".";
          alert(v27);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v302 = geneticCodeMatchExp.length;
      v30 = j < v302
    }
    var v31 = oneMatch == false;
    if(v31) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v477 = testSequence.length;
    var v303 = v477 - 3;
    v32 = i$$2 <= v303
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v304 = arrayOfPatterns$$1.length;
  var v34 = z$$3 < v304;
  for(;v34;) {
    var v478 = arrayOfPatterns$$1[z$$3];
    var v305 = v478.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v33 = v305 != -1;
    if(v33) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v306 = arrayOfPatterns$$1.length;
    v34 = z$$3 < v306
  }
  var i$$3 = 0;
  var v307 = arrayOfPatterns$$1.length;
  var v38 = i$$3 < v307;
  for(;v38;) {
    var v479 = arrayOfPatterns$$1[i$$3];
    var v308 = "[" + v479;
    var v35 = v308 + "]";
    var re = new RegExp(v35, "gi");
    var j$$1 = i$$3 + 1;
    var v309 = arrayOfPatterns$$1.length;
    var v37 = j$$1 < v309;
    for(;v37;) {
      var v480 = arrayOfPatterns$$1[j$$1];
      var v310 = v480.search(re);
      var v36 = v310 != -1;
      if(v36) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v311 = arrayOfPatterns$$1.length;
      v37 = j$$1 < v311
    }
    i$$3 = i$$3 + 1;
    var v312 = arrayOfPatterns$$1.length;
    v38 = i$$3 < v312
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v313 = arrayOfPatterns$$2.length;
  var v41 = z$$4 < v313;
  for(;v41;) {
    var v481 = arrayOfPatterns$$2[z$$4];
    var v314 = v481.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v39 = v314 == -1;
    if(v39) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    var v482 = arrayOfPatterns$$2[z$$4];
    var v315 = moreExpressionCheck(v482);
    var v40 = v315 == false;
    if(v40) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v316 = arrayOfPatterns$$2.length;
    v41 = z$$4 < v316
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v548 = getSequenceFromFasta(text$$7);
  var v483 = v548.replace(/[^A-Za-z]/g, "");
  var v317 = v483.length;
  var v43 = v317 > maxInput;
  if(v43) {
    var v318 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v42 = v318 + " characters.";
    alert(v42);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v319 = text$$8.length;
  var v45 = v319 > maxInput$$1;
  if(v45) {
    var v320 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v44 = v320 + " characters.";
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
  var v321 = alignArray.length;
  var v52 = v321 < 3;
  if(v52) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v322 = alignArray.length;
  var v54 = i$$4 < v322;
  for(;v54;) {
    var v484 = alignArray[i$$4];
    var v323 = v484.search(/[^\s]+\s/);
    var v53 = v323 == -1;
    if(v53) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v324 = alignArray.length;
    v54 = i$$4 < v324
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
  var v325 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v57 = v325 != -1;
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
  var v326 = sequence$$2.length;
  var v58 = "&gt;results for " + v326;
  var stringToReturn = v58 + " residue sequence ";
  var v327 = fastaSequenceTitle.search(/[^\s]/);
  var v60 = v327 != -1;
  if(v60) {
    var v328 = stringToReturn + '"';
    var v59 = v328 + fastaSequenceTitle;
    stringToReturn = v59 + '"'
  }
  var v329 = stringToReturn + ' starting "';
  var v330 = sequence$$2.substring(0, 10);
  var v61 = v329 + v330;
  stringToReturn = v61 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v331 = sequenceOne.length;
  var v62 = "Search results for " + v331;
  var stringToReturn$$1 = v62 + " residue sequence ";
  var v332 = fastaSequenceTitleOne.search(/[^\s]/);
  var v64 = v332 != -1;
  if(v64) {
    var v333 = stringToReturn$$1 + '"';
    var v63 = v333 + fastaSequenceTitleOne;
    stringToReturn$$1 = v63 + '"'
  }
  var v334 = stringToReturn$$1 + ' starting "';
  var v335 = sequenceOne.substring(0, 10);
  var v65 = v334 + v335;
  stringToReturn$$1 = v65 + '"\n';
  var v336 = stringToReturn$$1 + "and ";
  var v337 = sequenceTwo.length;
  var v66 = v336 + v337;
  stringToReturn$$1 = v66 + " residue sequence ";
  var v338 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v68 = v338 != -1;
  if(v68) {
    var v339 = stringToReturn$$1 + '"';
    var v67 = v339 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v67 + '"'
  }
  var v340 = stringToReturn$$1 + ' starting "';
  var v341 = sequenceTwo.substring(0, 10);
  var v69 = v340 + v341;
  stringToReturn$$1 = v69 + '"';
  var v70 = '<div class="info">' + stringToReturn$$1;
  return v70 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v71 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v71);
  var j$$2 = 0;
  var v342 = arrayOfPatterns$$3.length;
  var v74 = j$$2 < v342;
  for(;v74;) {
    var v72 = geneticCodeMatchExp$$1;
    var v73 = j$$2;
    var v549 = arrayOfPatterns$$3[j$$2];
    var v485 = v549.match(/\/.+\//);
    var v343 = v485 + "gi";
    var v707 = eval(v343);
    v72[v73] = v707;
    j$$2 = j$$2 + 1;
    var v344 = arrayOfPatterns$$3.length;
    v74 = j$$2 < v344
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v75 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v75);
  var j$$3 = 0;
  var v345 = arrayOfPatterns$$4.length;
  var v80 = j$$3 < v345;
  for(;v80;) {
    var v76 = geneticCodeMatchResult$$1;
    var v77 = j$$3;
    var v486 = arrayOfPatterns$$4[j$$3];
    var v346 = v486.match(/=[a-zA-Z\*]/);
    var v708 = v346.toString();
    v76[v77] = v708;
    var v78 = geneticCodeMatchResult$$1;
    var v79 = j$$3;
    var v347 = geneticCodeMatchResult$$1[j$$3];
    var v709 = v347.replace(/=/g, "");
    v78[v79] = v709;
    j$$3 = j$$3 + 1;
    var v348 = arrayOfPatterns$$4.length;
    v80 = j$$3 < v348
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v349 = sequence$$3.length;
  var v81 = "Results for " + v349;
  var stringToReturn$$2 = v81 + " residue sequence ";
  var v350 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v83 = v350 != -1;
  if(v83) {
    var v351 = stringToReturn$$2 + '"';
    var v82 = v351 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v82 + '"'
  }
  var v352 = stringToReturn$$2 + ' starting "';
  var v353 = sequence$$3.substring(0, 10);
  var v84 = v352 + v353;
  stringToReturn$$2 = v84 + '"';
  var v85 = '<div class="info">' + stringToReturn$$2;
  return v85 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v487 = "Results for " + topology;
  var v354 = v487 + " ";
  var v355 = sequence$$4.length;
  var v86 = v354 + v355;
  var stringToReturn$$3 = v86 + " residue sequence ";
  var v356 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v88 = v356 != -1;
  if(v88) {
    var v357 = stringToReturn$$3 + '"';
    var v87 = v357 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v87 + '"'
  }
  var v358 = stringToReturn$$3 + ' starting "';
  var v359 = sequence$$4.substring(0, 10);
  var v89 = v358 + v359;
  stringToReturn$$3 = v89 + '"';
  var v90 = '<div class="info">' + stringToReturn$$3;
  return v90 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v360 = sequenceOne$$1.length;
  var v91 = "Alignment results for " + v360;
  var stringToReturn$$4 = v91 + " residue sequence ";
  var v361 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v93 = v361 != -1;
  if(v93) {
    var v362 = stringToReturn$$4 + '"';
    var v92 = v362 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v92 + '"'
  }
  var v363 = stringToReturn$$4 + ' starting "';
  var v364 = sequenceOne$$1.substring(0, 10);
  var v94 = v363 + v364;
  stringToReturn$$4 = v94 + '"\n';
  var v365 = stringToReturn$$4 + "and ";
  var v366 = sequenceTwo$$1.length;
  var v95 = v365 + v366;
  stringToReturn$$4 = v95 + " residue sequence ";
  var v367 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v97 = v367 != -1;
  if(v97) {
    var v368 = stringToReturn$$4 + '"';
    var v96 = v368 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v96 + '"'
  }
  var v369 = stringToReturn$$4 + ' starting "';
  var v370 = sequenceTwo$$1.substring(0, 10);
  var v98 = v369 + v370;
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
    var v371 = Math.random();
    var v372 = components.length;
    var v100 = v371 * v372;
    tempNum = Math.floor(v100);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4 = j$$4 + 1;
    v101 = j$$4 < lengthOut
  }
  return sequenceArray.join("")
}
function getSequenceFromFasta(sequenceRecord) {
  var v373 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v102 = v373 != -1;
  if(v102) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "")
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v374 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v104 = v374 != -1;
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
  var v488 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v375 = v488 != -1;
  var v490 = !v375;
  if(v490) {
    var v550 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    var v489 = v550 != -1;
    var v552 = !v489;
    if(v552) {
      var v593 = expressionToCheck.search(/\[\]/);
      var v551 = v593 != -1;
      var v595 = !v551;
      if(v595) {
        var v622 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
        var v594 = v622 != -1;
        var v624 = !v594;
        if(v624) {
          var v634 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
          var v623 = v634 != -1;
          var v636 = !v623;
          if(v636) {
            var v646 = expressionToCheck.search(/\|\|/);
            var v635 = v646 != -1;
            var v648 = !v635;
            if(v648) {
              var v657 = expressionToCheck.search(/\/\|/);
              var v647 = v657 != -1;
              var v659 = !v647;
              if(v659) {
                var v666 = expressionToCheck.search(/\|\//);
                var v658 = v666 != -1;
                var v668 = !v658;
                if(v668) {
                  var v675 = expressionToCheck.search(/\[.\]/);
                  var v667 = v675 != -1;
                  var v677 = !v667;
                  if(v677) {
                    var v682 = expressionToCheck.search(/\</);
                    var v676 = v682 != -1;
                    var v684 = !v676;
                    if(v684) {
                      var v683 = expressionToCheck.search(/\>/);
                      v676 = v683 != -1
                    }
                    v667 = v676
                  }
                  v658 = v667
                }
                v647 = v658
              }
              v635 = v647
            }
            v623 = v635
          }
          v594 = v623
        }
        v551 = v594
      }
      v489 = v551
    }
    v375 = v489
  }
  var v105 = v375;
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
  var v553 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v491 = v553 + "<head>\n";
  var v376 = v491 + "<title>Sequence Manipulation Suite</title>\n";
  var v111 = v376 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v110.write(v111);
  if(isColor) {
    var v112 = outputWindow.document;
    var v697 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v693 = v697 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v689 = v693 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v685 = v689 + "div.info {font-weight: bold}\n";
    var v678 = v685 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v669 = v678 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v660 = v669 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v649 = v660 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v637 = v649 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v625 = v637 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v596 = v625 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v554 = v596 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v492 = v554 + "td.many {color: #000000}\n";
    var v377 = v492 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v113 = v377 + "</style>\n";
    v112.write(v113)
  }else {
    var v114 = outputWindow.document;
    var v701 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v698 = v701 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v694 = v698 + "div.title {display: none}\n";
    var v690 = v694 + "div.info {font-weight: bold}\n";
    var v686 = v690 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v679 = v686 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v670 = v679 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v661 = v670 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v650 = v661 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v638 = v650 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v626 = v638 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v597 = v626 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v555 = v597 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v493 = v555 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v378 = v493 + "img {display: none}\n";
    var v115 = v378 + "</style>\n";
    v114.write(v115)
  }
  var v116 = outputWindow.document;
  var v556 = "</head>\n" + '<body class="main">\n';
  var v494 = v556 + '<div class="title">';
  var v379 = v494 + title$$6;
  var v117 = v379 + " results</div>\n";
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
  var v557 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v495 = v557 + "<head>\n";
  var v380 = v495 + "<title>Sequence Manipulation Suite</title>\n";
  var v119 = v380 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v118.write(v119);
  if(isBackground) {
    var v120 = outputWindow.document;
    var v699 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v695 = v699 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v691 = v695 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v687 = v691 + "div.info {font-weight: bold}\n";
    var v680 = v687 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v671 = v680 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v662 = v671 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v651 = v662 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v639 = v651 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v627 = v639 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v598 = v627 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v558 = v598 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v496 = v558 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v381 = v496 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v121 = v381 + "</style>\n";
    v120.write(v121)
  }else {
    var v122 = outputWindow.document;
    var v703 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v702 = v703 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v700 = v702 + "div.title {display: none}\n";
    var v696 = v700 + "div.info {font-weight: bold}\n";
    var v692 = v696 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v688 = v692 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v681 = v688 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v672 = v681 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v663 = v672 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v652 = v663 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v640 = v652 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v628 = v640 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v599 = v628 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v559 = v599 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v497 = v559 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v382 = v497 + "img {display: none}\n";
    var v123 = v382 + "</style>\n";
    v122.write(v123)
  }
  var v124 = outputWindow.document;
  var v560 = "</head>\n" + '<body class="main">\n';
  var v498 = v560 + '<div class="title">';
  var v383 = v498 + title$$8;
  var v125 = v383 + " results</div>\n";
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
  var v384 = dnaSequence$$1.search(/./);
  var v126 = v384 != -1;
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
  var v385 = testArray[0];
  var v130 = v385 != testString;
  if(v130) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v386 = testString.search(re$$2);
  var v131 = v386 == -1;
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
  var v387 = testNum.toFixed(3);
  var v134 = v387 != 2489.824;
  if(v134) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v388 = testNum.toPrecision(5);
  var v135 = v388 != 2489.8;
  if(v135) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v389 = theNumber$$1.search(/\d/);
  var v136 = v389 == -1;
  if(v136) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v499 = emblFile.search(/ID/);
  var v390 = v499 == -1;
  var v501 = !v390;
  if(v501) {
    var v561 = emblFile.search(/AC/);
    var v500 = v561 == -1;
    var v563 = !v500;
    if(v563) {
      var v600 = emblFile.search(/DE/);
      var v562 = v600 == -1;
      var v602 = !v562;
      if(v602) {
        var v601 = emblFile.search(/SQ/);
        v562 = v601 == -1
      }
      v500 = v562
    }
    v390 = v500
  }
  var v137 = v390;
  if(v137) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v391 = theNumber$$2.search(/\d/);
  var v138 = v391 == -1;
  if(v138) {
    alert("Please enter a number.");
    return false
  }
  var v140 = theNumber$$2 > maxInput$$2;
  if(v140) {
    var v392 = "Please enter a number less than or equal to " + maxInput$$2;
    var v139 = v392 + ".";
    alert(v139);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v393 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v141 = v393 != -1;
  if(v141) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v394 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v142 = v394 != -1;
  if(v142) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v502 = genBankFile.search(/LOCUS/);
  var v395 = v502 == -1;
  var v504 = !v395;
  if(v504) {
    var v564 = genBankFile.search(/DEFINITION/);
    var v503 = v564 == -1;
    var v566 = !v503;
    if(v566) {
      var v603 = genBankFile.search(/ACCESSION/);
      var v565 = v603 == -1;
      var v605 = !v565;
      if(v605) {
        var v604 = genBankFile.search(/ORIGIN/);
        v565 = v604 == -1
      }
      v503 = v565
    }
    v395 = v503
  }
  var v143 = v395;
  if(v143) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v505 = genBankFile$$1.search(/LOCUS/);
  var v396 = v505 == -1;
  var v507 = !v396;
  if(v507) {
    var v567 = genBankFile$$1.search(/DEFINITION/);
    var v506 = v567 == -1;
    var v569 = !v506;
    if(v569) {
      var v606 = genBankFile$$1.search(/ACCESSION/);
      var v568 = v606 == -1;
      var v608 = !v568;
      if(v608) {
        var v607 = genBankFile$$1.search(/ORIGIN/);
        v568 = v607 == -1
      }
      v506 = v568
    }
    v396 = v506
  }
  var v144 = v396;
  if(v144) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v397 = genBankFile$$1.search(/FEATURES {13}/);
  var v145 = v397 == -1;
  if(v145) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v508 = emblFile$$1.search(/ID/);
  var v398 = v508 == -1;
  var v510 = !v398;
  if(v510) {
    var v570 = emblFile$$1.search(/AC/);
    var v509 = v570 == -1;
    var v572 = !v509;
    if(v572) {
      var v609 = emblFile$$1.search(/DE/);
      var v571 = v609 == -1;
      var v611 = !v571;
      if(v611) {
        var v610 = emblFile$$1.search(/SQ/);
        v571 = v610 == -1
      }
      v509 = v571
    }
    v398 = v509
  }
  var v146 = v398;
  if(v146) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v399 = emblFile$$1.search(/^FT/m);
  var v147 = v399 == -1;
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
    var v400 = basePerLine / groupSize;
    var v151 = j$$6 <= v400;
    for(;v151;) {
      var v150 = k < groupSize;
      for(;v150;) {
        var v401 = k + i$$5;
        var v149 = text$$10.charAt(v401);
        lineOfText = lineOfText + v149;
        k = k + 1;
        v150 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v402 = basePerLine / groupSize;
      v151 = j$$6 <= v402
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
    var v403 = adjustment < 0;
    if(v403) {
      v403 = adjusted >= 0
    }
    var v155 = v403;
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
    var v404 = basePerLine$$2 / groupSize$$2;
    var v162 = j$$7 <= v404;
    for(;v162;) {
      var v158 = k$$1 < groupSize$$2;
      for(;v158;) {
        var v405 = i$$6 + k$$1;
        var v156 = v405 >= stopBase$$2;
        if(v156) {
          break
        }
        var v406 = k$$1 + i$$6;
        var v157 = text$$12.charAt(v406);
        lineOfText$$1 = lineOfText$$1 + v157;
        k$$1 = k$$1 + 1;
        v158 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v160 = numberPosition$$1 == "above";
      if(v160) {
        var v407 = adjustNumbering(i$$6, numberingAdjustment);
        var v159 = rightNum(v407, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v159
      }
      var v161 = i$$6 >= stopBase$$2;
      if(v161) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v408 = basePerLine$$2 / groupSize$$2;
      v162 = j$$7 <= v408
    }
    var v185 = numberPosition$$1 == "left";
    if(v185) {
      var v163 = outputWindow.document;
      var v573 = adjustNumbering(lineNum, numberingAdjustment);
      var v511 = rightNum(v573, "", 8, tabIn$$3);
      var v409 = v511 + lineOfText$$1;
      var v164 = v409 + "\n";
      v163.write(v164);
      var v168 = strands$$1 == "two";
      if(v168) {
        var v165 = outputWindow.document;
        var v574 = adjustNumbering(lineNum, numberingAdjustment);
        var v512 = rightNum(v574, "", 8, tabIn$$3);
        var v513 = complement(lineOfText$$1);
        var v410 = v512 + v513;
        var v166 = v410 + "\n";
        v165.write(v166);
        var v167 = outputWindow.document;
        v167.write("\n")
      }
    }else {
      var v184 = numberPosition$$1 == "right";
      if(v184) {
        var v169 = outputWindow.document;
        var v514 = adjustNumbering(i$$6, numberingAdjustment);
        var v411 = lineOfText$$1 + v514;
        var v170 = v411 + "\n";
        v169.write(v170);
        var v174 = strands$$1 == "two";
        if(v174) {
          var v171 = outputWindow.document;
          var v515 = complement(lineOfText$$1);
          var v516 = adjustNumbering(i$$6, numberingAdjustment);
          var v412 = v515 + v516;
          var v172 = v412 + "\n";
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
            var v413 = complement(lineOfText$$1);
            var v180 = v413 + "\n";
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
    var v414 = basePerLine$$3 / groupSize$$3;
    var v193 = j$$8 <= v414;
    for(;v193;) {
      var v189 = k$$2 < groupSize$$3;
      for(;v189;) {
        var v415 = i$$7 + k$$2;
        var v187 = v415 >= stopBase$$3;
        if(v187) {
          break
        }
        var v416 = k$$2 + i$$7;
        var v188 = text$$13.charAt(v416);
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
      var v417 = basePerLine$$3 / groupSize$$3;
      v193 = j$$8 <= v417
    }
    var v204 = numberPosition$$2 == "left";
    if(v204) {
      var v194 = outputWindow.document;
      var v517 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v418 = v517 + lineOfText$$2;
      var v195 = v418 + "\n";
      v194.write(v195)
    }else {
      var v203 = numberPosition$$2 == "right";
      if(v203) {
        var v196 = outputWindow.document;
        var v419 = lineOfText$$2 + i$$7;
        var v197 = v419 + "\n";
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
  var v518 = sequence$$13.length;
  var v420 = v518 <= firstIndexToMutate;
  var v520 = !v420;
  if(v520) {
    var v519 = lastIndexToMutate < 0;
    var v575 = !v519;
    if(v575) {
      v519 = lastIndexToMutate <= firstIndexToMutate
    }
    v420 = v519
  }
  var v206 = v420;
  if(v206) {
    numMut = 0
  }
  var i$$8 = 0;
  var v214 = i$$8 < numMut;
  for(;v214;) {
    maxNum = sequence$$13.length;
    var v421 = Math.random();
    var v207 = v421 * maxNum;
    randNum = Math.floor(v207);
    var v422 = randNum < firstIndexToMutate;
    var v521 = !v422;
    if(v521) {
      v422 = randNum > lastIndexToMutate
    }
    var v208 = v422;
    if(v208) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v214 = i$$8 < numMut;
      continue
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for(;needNewChar;) {
      var v423 = Math.random();
      var v424 = components$$1.length;
      var v209 = v423 * v424;
      componentsIndex = Math.round(v209);
      var v425 = components$$1.length;
      var v210 = componentsIndex == v425;
      if(v210) {
        componentsIndex = 0
      }
      var v426 = components$$1[componentsIndex];
      var v211 = v426 != currentChar;
      if(v211) {
        needNewChar = false
      }
    }
    var v427 = sequence$$13.substring(0, randNum);
    var v428 = components$$1[componentsIndex];
    var v212 = v427 + v428;
    var v429 = randNum + 1;
    var v430 = sequence$$13.length;
    var v213 = sequence$$13.substring(v429, v430);
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
    var v431 = Math.random();
    var v432 = components$$2.length;
    var v217 = v431 * v432;
    tempNum$$1 = Math.floor(v217);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v433 = sequence$$14.length;
    var v220 = v433 == 60;
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
    var v576 = sequence$$15.length;
    var v522 = v576 - lookAhead;
    var v523 = sequence$$15.length;
    var v434 = sequence$$15.substring(v522, v523);
    var v225 = v434 + sequence$$15;
    var v226 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v225 + v226;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v228 = outputWindow.document;
  v228.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  var v229 = outputWindow.document;
  var v577 = '<tr><td class="title" width="200px">' + "Site:";
  var v524 = v577 + '</td><td class="title">';
  var v435 = v524 + "Positions:";
  var v230 = v435 + "</td></tr>\n";
  v229.write(v230);
  var i$$9 = 0;
  var v436 = arrayOfItems.length;
  var v246 = i$$9 < v436;
  for(;v246;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v437 = arrayOfItems[i$$9];
    var v231 = v437.match(/\/.+\//);
    matchExp = v231 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    var v578 = arrayOfItems[i$$9];
    var v525 = v578.match(/\)\D*\d+/);
    var v438 = v525.toString();
    var v232 = v438.replace(/\)\D*/, "");
    cutDistance = parseFloat(v232);
    var v238 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v238;) {
      var v233 = matchExp.lastIndex;
      matchPosition = v233 - cutDistance;
      var v439 = matchPosition >= lowerLimit;
      if(v439) {
        v439 = matchPosition < upperLimit
      }
      var v236 = v439;
      if(v236) {
        timesFound = timesFound + 1;
        var v234 = tempString$$1 + ", ";
        var v440 = matchPosition - shiftValue;
        var v235 = v440 + 1;
        tempString$$1 = v234 + v235
      }
      var v237 = matchExp;
      var v526 = matchExp.lastIndex;
      var v579 = RegExp.lastMatch;
      var v527 = v579.length;
      var v441 = v526 - v527;
      v237.lastIndex = v441 + 1;
      v238 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    var v442 = tempString$$1.search(/\d/);
    var v239 = v442 != -1;
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
    var v653 = '<tr><td class="' + backGroundClass;
    var v641 = v653 + '">';
    var v673 = arrayOfItems[i$$9];
    var v664 = v673.match(/\([^\(]+\)/);
    var v654 = v664.toString();
    var v642 = v654.replace(/\(|\)/g, "");
    var v629 = v641 + v642;
    var v612 = v629 + '</td><td class="';
    var v580 = v612 + backGroundClass;
    var v528 = v580 + '">';
    var v443 = v528 + tempString$$1;
    var v245 = v443 + "</td></tr>\n";
    v244.write(v245);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v444 = arrayOfItems.length;
    v246 = i$$9 < v444
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
  var v630 = '<tr><td class="title">' + "Pattern:";
  var v613 = v630 + '</td><td class="title">';
  var v581 = v613 + "Times found:";
  var v529 = v581 + '</td><td class="title">';
  var v445 = v529 + "Percentage:";
  var v250 = v445 + "</td></tr>\n";
  v249.write(v250);
  var i$$10 = 0;
  var v446 = arrayOfItems$$1.length;
  var v259 = i$$10 < v446;
  for(;v259;) {
    var tempNumber = 0;
    var v447 = arrayOfItems$$1[i$$10];
    var v251 = v447.match(/\/[^\/]+\//);
    var matchExp$$1 = v251 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    var v448 = sequence$$16.search(matchExp$$1);
    var v253 = v448 != -1;
    if(v253) {
      var v252 = sequence$$16.match(matchExp$$1);
      tempNumber = v252.length
    }
    var percentage = 0;
    var v530 = originalLength + 1;
    var v614 = arrayOfItems$$1[i$$10];
    var v582 = v614.match(/\d+/);
    var v531 = parseFloat(v582);
    var v449 = v530 - v531;
    var v256 = v449 > 0;
    if(v256) {
      var v254 = 100 * tempNumber;
      var v450 = originalLength + 1;
      var v583 = arrayOfItems$$1[i$$10];
      var v532 = v583.match(/\d+/);
      var v451 = parseFloat(v532);
      var v255 = v450 - v451;
      percentage = v254 / v255
    }
    var v257 = outputWindow.document;
    var v674 = arrayOfItems$$1[i$$10];
    var v665 = v674.match(/\([^\(]+\)\b/);
    var v655 = v665.toString();
    var v643 = v655.replace(/\(|\)/g, "");
    var v631 = "<tr><td>" + v643;
    var v615 = v631 + "</td><td>";
    var v584 = v615 + tempNumber;
    var v533 = v584 + "</td><td>";
    var v534 = percentage.toFixed(2);
    var v452 = v533 + v534;
    var v258 = v452 + "</td></tr>\n";
    v257.write(v258);
    i$$10 = i$$10 + 1;
    var v453 = arrayOfItems$$1.length;
    v259 = i$$10 < v453
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
  var v454 = sequence$$17.length;
  var v267 = v454 > 0;
  for(;v267;) {
    maxNum$$1 = sequence$$17.length;
    var v455 = Math.random();
    var v261 = v455 * maxNum$$1;
    randNum$$1 = Math.floor(v261);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v262 = randNum$$1 + 1;
    var v263 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v262, v263);
    sequence$$17 = tempString1 + tempString2;
    var v456 = tempSeq.length;
    var v266 = v456 == 60;
    if(v266) {
      var v264 = outputWindow.document;
      var v265 = tempSeq + "\n";
      v264.write(v265);
      tempSeq = ""
    }
    var v457 = sequence$$17.length;
    v267 = v457 > 0
  }
  var v268 = outputWindow.document;
  var v269 = tempSeq + "\n";
  v268.write(v269);
  return true
}
function proteinStats(theDocument) {
  var newProtein = "";
  var title$$9 = "";
  var maxInput$$3 = 5E5;
  var v458 = testScript();
  var v270 = v458 == false;
  if(v270) {
    return false
  }
  var v644 = theDocument.forms;
  var v632 = v644[0];
  var v616 = v632.elements;
  var v585 = v616[0];
  var v535 = checkFormElement(v585);
  var v459 = v535 == false;
  var v537 = !v459;
  if(v537) {
    var v656 = theDocument.forms;
    var v645 = v656[0];
    var v633 = v645.elements;
    var v617 = v633[0];
    var v586 = v617.value;
    var v536 = checkSequenceLength(v586, maxInput$$3);
    v459 = v536 == false
  }
  var v271 = v459;
  if(v271) {
    return false
  }
  var itemsToCheck = ["/A/ (A)1", "/B/ (B)1", "/C/ (C)1", "/D/ (D)1", "/E/ (E)1", "/F/ (F)1", "/G/ (G)1", "/H/ (H)1", "/I/ (I)1", "/K/ (K)1", "/L/ (L)1", "/M/ (M)1", "/N/ (N)1", "/P/ (P)1", "/Q/ (Q)1", "/R/ (R)1", "/S/ (S)1", "/T/ (T)1", "/V/ (V)1", "/W/ (W)1", "/X/ (X)1", "/Y/ (Y)1", "/Z/ (Z)1", "/[GAVLI]/ (Aliphatic G,A,V,L,I)1", "/[FWY]/ (Aromatic F,W,Y)1", "/[CM]/ (Sulphur C,M)1", "/[KRH]/ (Basic K,R,H)1", "/[BDENQZ]/ (Acidic B,D,E,N,Q,Z)1", "/[ST]/ (Aliphatic hydroxyl S,T)1", "/[ZEQRCMVILYW]/ (tRNA synthetase class I Z,E,Q,R,C,M,V,I,L,Y,W)1", 
  "/[BGAPSTHDNKF]/ (tRNA synthetase class II B,G,A,P,S,T,H,D,N,K,F)1"];
  openWindow("Protein Stats");
  var v618 = theDocument.forms;
  var v587 = v618[0];
  var v538 = v587.elements;
  var v460 = v538[0];
  var v272 = v460.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v272);
  var i$$11 = 0;
  var v461 = arrayOfFasta$$1.length;
  var v278 = i$$11 < v461;
  for(;v278;) {
    var v273 = arrayOfFasta$$1[i$$11];
    newProtein = getSequenceFromFasta(v273);
    var v274 = arrayOfFasta$$1[i$$11];
    title$$9 = getTitleFromFasta(v274);
    newProtein = removeNonProteinAllowDegen(newProtein);
    var v275 = outputWindow.document;
    var v276 = getInfoFromTitleAndSequence(title$$9, newProtein);
    v275.write(v276);
    writeSequenceStats(newProtein, itemsToCheck);
    var v277 = outputWindow.document;
    v277.write("<br />\n<br />\n");
    i$$11 = i$$11 + 1;
    var v462 = arrayOfFasta$$1.length;
    v278 = i$$11 < v462
  }
  closeWindow();
  return true
}
document.onload = v2;
var v279 = document.getElementById("submitbtn");
v279.onclick = v3;
var v280 = document.getElementById("clearbtn");
v280.onclick = v4;

}

