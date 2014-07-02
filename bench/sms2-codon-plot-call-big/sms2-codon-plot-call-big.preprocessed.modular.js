introspect(JAMScript.introspectors.processAll) {
function v5() {
  var v603 = document.forms;
  var v512 = v603[0];
  var v306 = v512.elements;
  var v6 = v306[0];
  v6.value = " ";
  var v604 = document.forms;
  var v513 = v604[0];
  var v307 = v513.elements;
  var v7 = v307[4];
  v7.value = " ";
  return
}
function v4() {
  try {
    codonPlot(document)
  }catch(e$$7) {
    var v8 = "The following error was encountered: " + e$$7;
    alert(v8)
  }
  return
}
function v3() {
  var v308 = document.main_form;
  var v9 = v308.main_submit;
  v9.focus();
  return
}
function addReturns(sequence) {
  function v0(str$$6, p1, offset$$12, s$$2) {
    return p1 + "\n"
  }
  sequence = sequence.replace(/(.{60})/g, v0);
  return sequence
}
function checkAlign(arrayOfTitles, arrayOfSequences) {
  var v10 = arrayOfSequences[0];
  var lengthOfAlign = v10.length;
  var v309 = arrayOfSequences.length;
  var v11 = v309 < 2;
  if(v11) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v310 = arrayOfTitles.length;
  var v13 = i$$1 < v310;
  for(;v13;) {
    var v605 = arrayOfTitles[i$$1];
    var v514 = v605.search(/\S/);
    var v311 = v514 == -1;
    var v516 = !v311;
    if(v516) {
      var v661 = arrayOfSequences[i$$1];
      var v606 = v661.search(/\S/);
      var v515 = v606 == -1;
      var v608 = !v515;
      if(v608) {
        var v662 = arrayOfSequences[i$$1];
        var v607 = v662.length;
        v515 = v607 != lengthOfAlign
      }
      v311 = v515
    }
    var v12 = v311;
    if(v12) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v312 = arrayOfTitles.length;
    v13 = i$$1 < v312
  }
  return true
}
function checkCodonTable(codonTable) {
  var v517 = codonTable.search(/AmAcid/);
  var v313 = v517 == -1;
  var v519 = !v313;
  if(v519) {
    var v609 = codonTable.search(/Codon/);
    var v518 = v609 == -1;
    var v611 = !v518;
    if(v611) {
      var v663 = codonTable.search(/Number/);
      var v610 = v663 == -1;
      var v665 = !v610;
      if(v665) {
        var v698 = codonTable.search(/\/1000/);
        var v664 = v698 == -1;
        var v700 = !v664;
        if(v700) {
          var v699 = codonTable.search(/Fraction\s*\.\./);
          v664 = v699 == -1
        }
        v610 = v664
      }
      v518 = v610
    }
    v313 = v518
  }
  var v14 = v313;
  if(v14) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v520 = formElement.value;
  var v314 = v520.search(/\S/);
  var v15 = v314 == -1;
  if(v15) {
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
  var v315 = arrayOfPatterns.length;
  var v18 = z$$2 < v315;
  for(;v18;) {
    var v521 = arrayOfPatterns[z$$2];
    var v316 = v521.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v16 = v316 == -1;
    if(v16) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    var v522 = arrayOfPatterns[z$$2];
    var v317 = moreExpressionCheck(v522);
    var v17 = v317 == false;
    if(v17) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v318 = arrayOfPatterns.length;
    v18 = z$$2 < v318
  }
  var v19 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v19);
  var v20 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v20);
  var j = 0;
  var v319 = arrayOfPatterns.length;
  var v27 = j < v319;
  for(;v27;) {
    var v21 = geneticCodeMatchExp;
    var v22 = j;
    var v612 = arrayOfPatterns[j];
    var v523 = v612.match(/\/.+\//);
    var v320 = v523 + "gi";
    var v807 = eval(v320);
    v21[v22] = v807;
    var v23 = geneticCodeMatchResult;
    var v24 = j;
    var v524 = arrayOfPatterns[j];
    var v321 = v524.match(/=[a-zA-Z\*]/);
    var v808 = v321.toString();
    v23[v24] = v808;
    var v25 = geneticCodeMatchResult;
    var v26 = j;
    var v322 = geneticCodeMatchResult[j];
    var v809 = v322.replace(/=/g, "");
    v25[v26] = v809;
    j = j + 1;
    var v323 = arrayOfPatterns.length;
    v27 = j < v323
  }
  var i$$2 = 0;
  var v525 = testSequence.length;
  var v324 = v525 - 3;
  var v34 = i$$2 <= v324;
  for(;v34;) {
    var v28 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v28);
    j = 0;
    var v325 = geneticCodeMatchExp.length;
    var v32 = j < v325;
    for(;v32;) {
      var v526 = geneticCodeMatchExp[j];
      var v326 = codon.search(v526);
      var v31 = v326 != -1;
      if(v31) {
        var v30 = oneMatch == true;
        if(v30) {
          var v327 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v29 = v327 + ".";
          alert(v29);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v328 = geneticCodeMatchExp.length;
      v32 = j < v328
    }
    var v33 = oneMatch == false;
    if(v33) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v527 = testSequence.length;
    var v329 = v527 - 3;
    v34 = i$$2 <= v329
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v330 = arrayOfPatterns$$1.length;
  var v36 = z$$3 < v330;
  for(;v36;) {
    var v528 = arrayOfPatterns$$1[z$$3];
    var v331 = v528.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v35 = v331 != -1;
    if(v35) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v332 = arrayOfPatterns$$1.length;
    v36 = z$$3 < v332
  }
  var i$$3 = 0;
  var v333 = arrayOfPatterns$$1.length;
  var v40 = i$$3 < v333;
  for(;v40;) {
    var v529 = arrayOfPatterns$$1[i$$3];
    var v334 = "[" + v529;
    var v37 = v334 + "]";
    var re = new RegExp(v37, "gi");
    var j$$1 = i$$3 + 1;
    var v335 = arrayOfPatterns$$1.length;
    var v39 = j$$1 < v335;
    for(;v39;) {
      var v530 = arrayOfPatterns$$1[j$$1];
      var v336 = v530.search(re);
      var v38 = v336 != -1;
      if(v38) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v337 = arrayOfPatterns$$1.length;
      v39 = j$$1 < v337
    }
    i$$3 = i$$3 + 1;
    var v338 = arrayOfPatterns$$1.length;
    v40 = i$$3 < v338
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v339 = arrayOfPatterns$$2.length;
  var v43 = z$$4 < v339;
  for(;v43;) {
    var v531 = arrayOfPatterns$$2[z$$4];
    var v340 = v531.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v41 = v340 == -1;
    if(v41) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    var v532 = arrayOfPatterns$$2[z$$4];
    var v341 = moreExpressionCheck(v532);
    var v42 = v341 == false;
    if(v42) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v342 = arrayOfPatterns$$2.length;
    v43 = z$$4 < v342
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v613 = getSequenceFromFasta(text$$7);
  var v533 = v613.replace(/[^A-Za-z]/g, "");
  var v343 = v533.length;
  var v45 = v343 > maxInput;
  if(v45) {
    var v344 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v44 = v344 + " characters.";
    alert(v44);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v345 = text$$8.length;
  var v47 = v345 > maxInput$$1;
  if(v47) {
    var v346 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v46 = v346 + " characters.";
    alert(v46);
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
  var v48 = outputWindow.document;
  v48.write("</form>");
  return true
}
function closePre() {
  var v49 = outputWindow.document;
  v49.write("</div>");
  var v50 = outputWindow.document;
  v50.write("</pre>\n");
  return
}
function closeTextArea() {
  var v51 = outputWindow.document;
  v51.write("</textarea>");
  return true
}
function closeWindow() {
  var v52 = outputWindow.document;
  v52.write("</body>\n</html>\n");
  outputWindow.status = "Done.";
  var v53 = outputWindow.document;
  v53.close();
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
  var v347 = alignArray.length;
  var v54 = v347 < 3;
  if(v54) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v348 = alignArray.length;
  var v56 = i$$4 < v348;
  for(;v56;) {
    var v534 = alignArray[i$$4];
    var v349 = v534.search(/[^\s]+\s/);
    var v55 = v349 == -1;
    if(v55) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v350 = alignArray.length;
    v56 = i$$4 < v350
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
  var v351 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v59 = v351 != -1;
  if(v59) {
    var v58 = matchArray = re$$1.exec(sequenceData);
    for(;v58;) {
      var v57 = matchArray[0];
      arrayOfFasta.push(v57);
      v58 = matchArray = re$$1.exec(sequenceData)
    }
  }else {
    arrayOfFasta[0] = sequenceData
  }
  return arrayOfFasta
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v352 = sequence$$2.length;
  var v60 = "&gt;results for " + v352;
  var stringToReturn = v60 + " residue sequence ";
  var v353 = fastaSequenceTitle.search(/[^\s]/);
  var v62 = v353 != -1;
  if(v62) {
    var v354 = stringToReturn + '"';
    var v61 = v354 + fastaSequenceTitle;
    stringToReturn = v61 + '"'
  }
  var v355 = stringToReturn + ' starting "';
  var v356 = sequence$$2.substring(0, 10);
  var v63 = v355 + v356;
  stringToReturn = v63 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v357 = sequenceOne.length;
  var v64 = "Search results for " + v357;
  var stringToReturn$$1 = v64 + " residue sequence ";
  var v358 = fastaSequenceTitleOne.search(/[^\s]/);
  var v66 = v358 != -1;
  if(v66) {
    var v359 = stringToReturn$$1 + '"';
    var v65 = v359 + fastaSequenceTitleOne;
    stringToReturn$$1 = v65 + '"'
  }
  var v360 = stringToReturn$$1 + ' starting "';
  var v361 = sequenceOne.substring(0, 10);
  var v67 = v360 + v361;
  stringToReturn$$1 = v67 + '"\n';
  var v362 = stringToReturn$$1 + "and ";
  var v363 = sequenceTwo.length;
  var v68 = v362 + v363;
  stringToReturn$$1 = v68 + " residue sequence ";
  var v364 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v70 = v364 != -1;
  if(v70) {
    var v365 = stringToReturn$$1 + '"';
    var v69 = v365 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v69 + '"'
  }
  var v366 = stringToReturn$$1 + ' starting "';
  var v367 = sequenceTwo.substring(0, 10);
  var v71 = v366 + v367;
  stringToReturn$$1 = v71 + '"';
  var v72 = '<div class="info">' + stringToReturn$$1;
  return v72 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v73 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v73);
  var j$$2 = 0;
  var v368 = arrayOfPatterns$$3.length;
  var v76 = j$$2 < v368;
  for(;v76;) {
    var v74 = geneticCodeMatchExp$$1;
    var v75 = j$$2;
    var v614 = arrayOfPatterns$$3[j$$2];
    var v535 = v614.match(/\/.+\//);
    var v369 = v535 + "gi";
    var v810 = eval(v369);
    v74[v75] = v810;
    j$$2 = j$$2 + 1;
    var v370 = arrayOfPatterns$$3.length;
    v76 = j$$2 < v370
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v77 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v77);
  var j$$3 = 0;
  var v371 = arrayOfPatterns$$4.length;
  var v82 = j$$3 < v371;
  for(;v82;) {
    var v78 = geneticCodeMatchResult$$1;
    var v79 = j$$3;
    var v536 = arrayOfPatterns$$4[j$$3];
    var v372 = v536.match(/=[a-zA-Z\*]/);
    var v811 = v372.toString();
    v78[v79] = v811;
    var v80 = geneticCodeMatchResult$$1;
    var v81 = j$$3;
    var v373 = geneticCodeMatchResult$$1[j$$3];
    var v812 = v373.replace(/=/g, "");
    v80[v81] = v812;
    j$$3 = j$$3 + 1;
    var v374 = arrayOfPatterns$$4.length;
    v82 = j$$3 < v374
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v375 = sequence$$3.length;
  var v83 = "Results for " + v375;
  var stringToReturn$$2 = v83 + " residue sequence ";
  var v376 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v85 = v376 != -1;
  if(v85) {
    var v377 = stringToReturn$$2 + '"';
    var v84 = v377 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v84 + '"'
  }
  var v378 = stringToReturn$$2 + ' starting "';
  var v379 = sequence$$3.substring(0, 10);
  var v86 = v378 + v379;
  stringToReturn$$2 = v86 + '"';
  var v87 = '<div class="info">' + stringToReturn$$2;
  return v87 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v537 = "Results for " + topology;
  var v380 = v537 + " ";
  var v381 = sequence$$4.length;
  var v88 = v380 + v381;
  var stringToReturn$$3 = v88 + " residue sequence ";
  var v382 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v90 = v382 != -1;
  if(v90) {
    var v383 = stringToReturn$$3 + '"';
    var v89 = v383 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v89 + '"'
  }
  var v384 = stringToReturn$$3 + ' starting "';
  var v385 = sequence$$4.substring(0, 10);
  var v91 = v384 + v385;
  stringToReturn$$3 = v91 + '"';
  var v92 = '<div class="info">' + stringToReturn$$3;
  return v92 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v386 = sequenceOne$$1.length;
  var v93 = "Alignment results for " + v386;
  var stringToReturn$$4 = v93 + " residue sequence ";
  var v387 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v95 = v387 != -1;
  if(v95) {
    var v388 = stringToReturn$$4 + '"';
    var v94 = v388 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v94 + '"'
  }
  var v389 = stringToReturn$$4 + ' starting "';
  var v390 = sequenceOne$$1.substring(0, 10);
  var v96 = v389 + v390;
  stringToReturn$$4 = v96 + '"\n';
  var v391 = stringToReturn$$4 + "and ";
  var v392 = sequenceTwo$$1.length;
  var v97 = v391 + v392;
  stringToReturn$$4 = v97 + " residue sequence ";
  var v393 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v99 = v393 != -1;
  if(v99) {
    var v394 = stringToReturn$$4 + '"';
    var v98 = v394 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v98 + '"'
  }
  var v395 = stringToReturn$$4 + ' starting "';
  var v396 = sequenceTwo$$1.substring(0, 10);
  var v100 = v395 + v396;
  stringToReturn$$4 = v100 + '"';
  var v101 = '<div class="info">' + stringToReturn$$4;
  return v101 + "</div>\n"
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v103 = j$$4 < lengthOut;
  for(;v103;) {
    var v397 = Math.random();
    var v398 = components.length;
    var v102 = v397 * v398;
    tempNum = Math.floor(v102);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4 = j$$4 + 1;
    v103 = j$$4 < lengthOut
  }
  return sequenceArray.join("")
}
function getSequenceFromFasta(sequenceRecord) {
  var v399 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v104 = v399 != -1;
  if(v104) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "")
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v400 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v106 = v400 != -1;
  if(v106) {
    var v105 = sequenceRecord$$1.match(/\>[^\f\n\r]+[\f\n\r]/, "");
    fastaTitle = v105.toString();
    fastaTitle = fastaTitle.replace(/\>|[\f\n\r]/g, "");
    fastaTitle = fastaTitle.replace(/\s{2,}/g, " ");
    fastaTitle = fastaTitle.replace(/[\<\>]/gi, "")
  }
  return fastaTitle
}
function moreExpressionCheck(expressionToCheck) {
  var v538 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v401 = v538 != -1;
  var v540 = !v401;
  if(v540) {
    var v615 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    var v539 = v615 != -1;
    var v617 = !v539;
    if(v617) {
      var v666 = expressionToCheck.search(/\[\]/);
      var v616 = v666 != -1;
      var v668 = !v616;
      if(v668) {
        var v701 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
        var v667 = v701 != -1;
        var v703 = !v667;
        if(v703) {
          var v718 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
          var v702 = v718 != -1;
          var v720 = !v702;
          if(v720) {
            var v734 = expressionToCheck.search(/\|\|/);
            var v719 = v734 != -1;
            var v736 = !v719;
            if(v736) {
              var v750 = expressionToCheck.search(/\/\|/);
              var v735 = v750 != -1;
              var v752 = !v735;
              if(v752) {
                var v763 = expressionToCheck.search(/\|\//);
                var v751 = v763 != -1;
                var v765 = !v751;
                if(v765) {
                  var v775 = expressionToCheck.search(/\[.\]/);
                  var v764 = v775 != -1;
                  var v777 = !v764;
                  if(v777) {
                    var v783 = expressionToCheck.search(/\</);
                    var v776 = v783 != -1;
                    var v785 = !v776;
                    if(v785) {
                      var v784 = expressionToCheck.search(/\>/);
                      v776 = v784 != -1
                    }
                    v764 = v776
                  }
                  v751 = v764
                }
                v735 = v751
              }
              v719 = v735
            }
            v702 = v719
          }
          v667 = v702
        }
        v616 = v667
      }
      v539 = v616
    }
    v401 = v539
  }
  var v107 = v401;
  if(v107) {
    return false
  }
  return true
}
function openForm() {
  var v108 = outputWindow.document;
  v108.write('<form action="">\n');
  return true
}
function openPre() {
  var v109 = outputWindow.document;
  v109.write("<pre>");
  var v110 = outputWindow.document;
  v110.write('<div class="pre">');
  return
}
function openTextArea() {
  var v111 = outputWindow.document;
  v111.write('<br /><textarea rows="6" cols="61">\n');
  return true
}
function openWindow(title$$5) {
  _openWindow(title$$5, true);
  return
}
function _openWindow(title$$6, isColor) {
  outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  outputWindow.focus();
  var v112 = outputWindow.document;
  var v618 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v541 = v618 + "<head>\n";
  var v402 = v541 + "<title>Sequence Manipulation Suite</title>\n";
  var v113 = v402 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v112.write(v113);
  if(isColor) {
    var v114 = outputWindow.document;
    var v800 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v796 = v800 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v791 = v796 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v786 = v791 + "div.info {font-weight: bold}\n";
    var v778 = v786 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v766 = v778 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v753 = v766 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v737 = v753 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v721 = v737 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v704 = v721 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v669 = v704 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v619 = v669 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v542 = v619 + "td.many {color: #000000}\n";
    var v403 = v542 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v115 = v403 + "</style>\n";
    v114.write(v115)
  }else {
    var v116 = outputWindow.document;
    var v804 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v801 = v804 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v797 = v801 + "div.title {display: none}\n";
    var v792 = v797 + "div.info {font-weight: bold}\n";
    var v787 = v792 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v779 = v787 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v767 = v779 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v754 = v767 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v738 = v754 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v722 = v738 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v705 = v722 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v670 = v705 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v620 = v670 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v543 = v620 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v404 = v543 + "img {display: none}\n";
    var v117 = v404 + "</style>\n";
    v116.write(v117)
  }
  var v118 = outputWindow.document;
  var v621 = "</head>\n" + '<body class="main">\n';
  var v544 = v621 + '<div class="title">';
  var v405 = v544 + title$$6;
  var v119 = v405 + " results</div>\n";
  v118.write(v119);
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
  var v120 = outputWindow.document;
  var v622 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v545 = v622 + "<head>\n";
  var v406 = v545 + "<title>Sequence Manipulation Suite</title>\n";
  var v121 = v406 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v120.write(v121);
  if(isBackground) {
    var v122 = outputWindow.document;
    var v802 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v798 = v802 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v793 = v798 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v788 = v793 + "div.info {font-weight: bold}\n";
    var v780 = v788 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v768 = v780 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v755 = v768 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v739 = v755 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v723 = v739 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v706 = v723 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v671 = v706 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v623 = v671 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v546 = v623 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v407 = v546 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v123 = v407 + "</style>\n";
    v122.write(v123)
  }else {
    var v124 = outputWindow.document;
    var v806 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v805 = v806 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v803 = v805 + "div.title {display: none}\n";
    var v799 = v803 + "div.info {font-weight: bold}\n";
    var v794 = v799 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v789 = v794 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v781 = v789 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v769 = v781 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v756 = v769 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v740 = v756 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v724 = v740 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v707 = v724 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v672 = v707 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v624 = v672 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v547 = v624 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v408 = v547 + "img {display: none}\n";
    var v125 = v408 + "</style>\n";
    v124.write(v125)
  }
  var v126 = outputWindow.document;
  var v625 = "</head>\n" + '<body class="main">\n';
  var v548 = v625 + '<div class="title">';
  var v409 = v548 + title$$8;
  var v127 = v409 + " results</div>\n";
  v126.write(v127);
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
  var v410 = dnaSequence$$1.search(/./);
  var v128 = v410 != -1;
  if(v128) {
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
  var v129 = j$$5 < lengthOfColumn;
  for(;v129;) {
    tempString = tempString + " ";
    j$$5 = j$$5 + 1;
    v129 = j$$5 < lengthOfColumn
  }
  var v130 = tempString + theNumber;
  theNumber = v130 + " ";
  var v131 = sequenceToAppend + theNumber;
  sequenceToAppend = v131 + tabIn;
  return sequenceToAppend
}
function testScript() {
  function v1(str$$7, p1$$1, offset$$13, s$$3) {
    return p1$$1 + "X"
  }
  var testArray = new Array;
  var testString = "1234567890";
  testArray.push(testString);
  var v411 = testArray[0];
  var v132 = v411 != testString;
  if(v132) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v412 = testString.search(re$$2);
  var v133 = v412 == -1;
  if(v133) {
    alert("Regular expression 'm' flag not supported. See browser compatibility page.");
    return false
  }
  var caughtException = false;
  try {
    re$$2 = eval("Exception handling not supported. Check browser compatibility page.")
  }catch(e$$4) {
    caughtException = true
  }
  var v134 = !caughtException;
  if(v134) {
    alert("Exception handling not supported. See browser compatibility page.")
  }
  testString = "123";
  testString = testString.replace(/(\d)/g, v1);
  var v135 = testString != "1X2X3X";
  if(v135) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false
  }
  var testNum = 2489.8237;
  var v413 = testNum.toFixed(3);
  var v136 = v413 != 2489.824;
  if(v136) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v414 = testNum.toPrecision(5);
  var v137 = v414 != 2489.8;
  if(v137) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v415 = theNumber$$1.search(/\d/);
  var v138 = v415 == -1;
  if(v138) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v549 = emblFile.search(/ID/);
  var v416 = v549 == -1;
  var v551 = !v416;
  if(v551) {
    var v626 = emblFile.search(/AC/);
    var v550 = v626 == -1;
    var v628 = !v550;
    if(v628) {
      var v673 = emblFile.search(/DE/);
      var v627 = v673 == -1;
      var v675 = !v627;
      if(v675) {
        var v674 = emblFile.search(/SQ/);
        v627 = v674 == -1
      }
      v550 = v627
    }
    v416 = v550
  }
  var v139 = v416;
  if(v139) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v417 = theNumber$$2.search(/\d/);
  var v140 = v417 == -1;
  if(v140) {
    alert("Please enter a number.");
    return false
  }
  var v142 = theNumber$$2 > maxInput$$2;
  if(v142) {
    var v418 = "Please enter a number less than or equal to " + maxInput$$2;
    var v141 = v418 + ".";
    alert(v141);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v419 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v143 = v419 != -1;
  if(v143) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v420 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v144 = v420 != -1;
  if(v144) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v552 = genBankFile.search(/LOCUS/);
  var v421 = v552 == -1;
  var v554 = !v421;
  if(v554) {
    var v629 = genBankFile.search(/DEFINITION/);
    var v553 = v629 == -1;
    var v631 = !v553;
    if(v631) {
      var v676 = genBankFile.search(/ACCESSION/);
      var v630 = v676 == -1;
      var v678 = !v630;
      if(v678) {
        var v677 = genBankFile.search(/ORIGIN/);
        v630 = v677 == -1
      }
      v553 = v630
    }
    v421 = v553
  }
  var v145 = v421;
  if(v145) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v555 = genBankFile$$1.search(/LOCUS/);
  var v422 = v555 == -1;
  var v557 = !v422;
  if(v557) {
    var v632 = genBankFile$$1.search(/DEFINITION/);
    var v556 = v632 == -1;
    var v634 = !v556;
    if(v634) {
      var v679 = genBankFile$$1.search(/ACCESSION/);
      var v633 = v679 == -1;
      var v681 = !v633;
      if(v681) {
        var v680 = genBankFile$$1.search(/ORIGIN/);
        v633 = v680 == -1
      }
      v556 = v633
    }
    v422 = v556
  }
  var v146 = v422;
  if(v146) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v423 = genBankFile$$1.search(/FEATURES {13}/);
  var v147 = v423 == -1;
  if(v147) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v558 = emblFile$$1.search(/ID/);
  var v424 = v558 == -1;
  var v560 = !v424;
  if(v560) {
    var v635 = emblFile$$1.search(/AC/);
    var v559 = v635 == -1;
    var v637 = !v559;
    if(v637) {
      var v682 = emblFile$$1.search(/DE/);
      var v636 = v682 == -1;
      var v684 = !v636;
      if(v684) {
        var v683 = emblFile$$1.search(/SQ/);
        v636 = v683 == -1
      }
      v559 = v636
    }
    v424 = v559
  }
  var v148 = v424;
  if(v148) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v425 = emblFile$$1.search(/^FT/m);
  var v149 = v425 == -1;
  if(v149) {
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
  var v156 = i$$5 < stopBase;
  for(;v156;) {
    var v150 = i$$5 + 1;
    lineOfText = rightNum(v150, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v426 = basePerLine / groupSize;
    var v153 = j$$6 <= v426;
    for(;v153;) {
      var v152 = k < groupSize;
      for(;v152;) {
        var v427 = k + i$$5;
        var v151 = text$$10.charAt(v427);
        lineOfText = lineOfText + v151;
        k = k + 1;
        v152 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v428 = basePerLine / groupSize;
      v153 = j$$6 <= v428
    }
    var v154 = outputWindow.document;
    var v155 = lineOfText + "\n";
    v154.write(v155);
    lineOfText = "";
    v156 = i$$5 < stopBase
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
    var v429 = adjustment < 0;
    if(v429) {
      v429 = adjusted >= 0
    }
    var v157 = v429;
    if(v157) {
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
  var v188 = i$$6 < stopBase$$2;
  for(;v188;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v430 = basePerLine$$2 / groupSize$$2;
    var v164 = j$$7 <= v430;
    for(;v164;) {
      var v160 = k$$1 < groupSize$$2;
      for(;v160;) {
        var v431 = i$$6 + k$$1;
        var v158 = v431 >= stopBase$$2;
        if(v158) {
          break
        }
        var v432 = k$$1 + i$$6;
        var v159 = text$$12.charAt(v432);
        lineOfText$$1 = lineOfText$$1 + v159;
        k$$1 = k$$1 + 1;
        v160 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v162 = numberPosition$$1 == "above";
      if(v162) {
        var v433 = adjustNumbering(i$$6, numberingAdjustment);
        var v161 = rightNum(v433, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v161
      }
      var v163 = i$$6 >= stopBase$$2;
      if(v163) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v434 = basePerLine$$2 / groupSize$$2;
      v164 = j$$7 <= v434
    }
    var v187 = numberPosition$$1 == "left";
    if(v187) {
      var v165 = outputWindow.document;
      var v638 = adjustNumbering(lineNum, numberingAdjustment);
      var v561 = rightNum(v638, "", 8, tabIn$$3);
      var v435 = v561 + lineOfText$$1;
      var v166 = v435 + "\n";
      v165.write(v166);
      var v170 = strands$$1 == "two";
      if(v170) {
        var v167 = outputWindow.document;
        var v639 = adjustNumbering(lineNum, numberingAdjustment);
        var v562 = rightNum(v639, "", 8, tabIn$$3);
        var v563 = complement(lineOfText$$1);
        var v436 = v562 + v563;
        var v168 = v436 + "\n";
        v167.write(v168);
        var v169 = outputWindow.document;
        v169.write("\n")
      }
    }else {
      var v186 = numberPosition$$1 == "right";
      if(v186) {
        var v171 = outputWindow.document;
        var v564 = adjustNumbering(i$$6, numberingAdjustment);
        var v437 = lineOfText$$1 + v564;
        var v172 = v437 + "\n";
        v171.write(v172);
        var v176 = strands$$1 == "two";
        if(v176) {
          var v173 = outputWindow.document;
          var v565 = complement(lineOfText$$1);
          var v566 = adjustNumbering(i$$6, numberingAdjustment);
          var v438 = v565 + v566;
          var v174 = v438 + "\n";
          v173.write(v174);
          var v175 = outputWindow.document;
          v175.write("\n")
        }
      }else {
        var v185 = numberPosition$$1 == "above";
        if(v185) {
          var v177 = outputWindow.document;
          var v178 = aboveNum + "\n";
          v177.write(v178);
          var v179 = outputWindow.document;
          var v180 = lineOfText$$1 + "\n";
          v179.write(v180);
          var v184 = strands$$1 == "two";
          if(v184) {
            var v181 = outputWindow.document;
            var v439 = complement(lineOfText$$1);
            var v182 = v439 + "\n";
            v181.write(v182);
            var v183 = outputWindow.document;
            v183.write("\n")
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v188 = i$$6 < stopBase$$2
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
  var v207 = i$$7 < stopBase$$3;
  for(;v207;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v440 = basePerLine$$3 / groupSize$$3;
    var v195 = j$$8 <= v440;
    for(;v195;) {
      var v191 = k$$2 < groupSize$$3;
      for(;v191;) {
        var v441 = i$$7 + k$$2;
        var v189 = v441 >= stopBase$$3;
        if(v189) {
          break
        }
        var v442 = k$$2 + i$$7;
        var v190 = text$$13.charAt(v442);
        lineOfText$$2 = lineOfText$$2 + v190;
        k$$2 = k$$2 + 1;
        v191 = k$$2 < groupSize$$3
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v193 = numberPosition$$2 == "above";
      if(v193) {
        var v192 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = aboveNum$$1 + v192
      }
      var v194 = i$$7 >= stopBase$$3;
      if(v194) {
        break
      }
      k$$2 = 0;
      j$$8 = j$$8 + 1;
      var v443 = basePerLine$$3 / groupSize$$3;
      v195 = j$$8 <= v443
    }
    var v206 = numberPosition$$2 == "left";
    if(v206) {
      var v196 = outputWindow.document;
      var v567 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v444 = v567 + lineOfText$$2;
      var v197 = v444 + "\n";
      v196.write(v197)
    }else {
      var v205 = numberPosition$$2 == "right";
      if(v205) {
        var v198 = outputWindow.document;
        var v445 = lineOfText$$2 + i$$7;
        var v199 = v445 + "\n";
        v198.write(v199)
      }else {
        var v204 = numberPosition$$2 == "above";
        if(v204) {
          var v200 = outputWindow.document;
          var v201 = aboveNum$$1 + "\n";
          v200.write(v201);
          var v202 = outputWindow.document;
          var v203 = lineOfText$$2 + "\n";
          v202.write(v203)
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v207 = i$$7 < stopBase$$3
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
  var v568 = sequence$$13.length;
  var v446 = v568 <= firstIndexToMutate;
  var v570 = !v446;
  if(v570) {
    var v569 = lastIndexToMutate < 0;
    var v640 = !v569;
    if(v640) {
      v569 = lastIndexToMutate <= firstIndexToMutate
    }
    v446 = v569
  }
  var v208 = v446;
  if(v208) {
    numMut = 0
  }
  var i$$8 = 0;
  var v216 = i$$8 < numMut;
  for(;v216;) {
    maxNum = sequence$$13.length;
    var v447 = Math.random();
    var v209 = v447 * maxNum;
    randNum = Math.floor(v209);
    var v448 = randNum < firstIndexToMutate;
    var v571 = !v448;
    if(v571) {
      v448 = randNum > lastIndexToMutate
    }
    var v210 = v448;
    if(v210) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v216 = i$$8 < numMut;
      continue
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for(;needNewChar;) {
      var v449 = Math.random();
      var v450 = components$$1.length;
      var v211 = v449 * v450;
      componentsIndex = Math.round(v211);
      var v451 = components$$1.length;
      var v212 = componentsIndex == v451;
      if(v212) {
        componentsIndex = 0
      }
      var v452 = components$$1[componentsIndex];
      var v213 = v452 != currentChar;
      if(v213) {
        needNewChar = false
      }
    }
    var v453 = sequence$$13.substring(0, randNum);
    var v454 = components$$1[componentsIndex];
    var v214 = v453 + v454;
    var v455 = randNum + 1;
    var v456 = sequence$$13.length;
    var v215 = sequence$$13.substring(v455, v456);
    sequence$$13 = v214 + v215;
    i$$8 = i$$8 + 1;
    v216 = i$$8 < numMut
  }
  var v217 = outputWindow.document;
  var v218 = addReturns(sequence$$13);
  v217.write(v218);
  return true
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v223 = j$$9 < lengthOut$$1;
  for(;v223;) {
    var v457 = Math.random();
    var v458 = components$$2.length;
    var v219 = v457 * v458;
    tempNum$$1 = Math.floor(v219);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v459 = sequence$$14.length;
    var v222 = v459 == 60;
    if(v222) {
      var v220 = outputWindow.document;
      var v221 = sequence$$14 + "\n";
      v220.write(v221);
      sequence$$14 = ""
    }
    j$$9 = j$$9 + 1;
    v223 = j$$9 < lengthOut$$1
  }
  var v224 = outputWindow.document;
  var v225 = sequence$$14 + "\n";
  v224.write(v225);
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
  var v229 = dnaConformation == "circular";
  if(v229) {
    var v226 = sequence$$15.substring(0, lookAhead);
    shiftValue = v226.length;
    var v641 = sequence$$15.length;
    var v572 = v641 - lookAhead;
    var v573 = sequence$$15.length;
    var v460 = sequence$$15.substring(v572, v573);
    var v227 = v460 + sequence$$15;
    var v228 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v227 + v228;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v230 = outputWindow.document;
  v230.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  var v231 = outputWindow.document;
  var v642 = '<tr><td class="title" width="200px">' + "Site:";
  var v574 = v642 + '</td><td class="title">';
  var v461 = v574 + "Positions:";
  var v232 = v461 + "</td></tr>\n";
  v231.write(v232);
  var i$$9 = 0;
  var v462 = arrayOfItems.length;
  var v248 = i$$9 < v462;
  for(;v248;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v463 = arrayOfItems[i$$9];
    var v233 = v463.match(/\/.+\//);
    matchExp = v233 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    var v643 = arrayOfItems[i$$9];
    var v575 = v643.match(/\)\D*\d+/);
    var v464 = v575.toString();
    var v234 = v464.replace(/\)\D*/, "");
    cutDistance = parseFloat(v234);
    var v240 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v240;) {
      var v235 = matchExp.lastIndex;
      matchPosition = v235 - cutDistance;
      var v465 = matchPosition >= lowerLimit;
      if(v465) {
        v465 = matchPosition < upperLimit
      }
      var v238 = v465;
      if(v238) {
        timesFound = timesFound + 1;
        var v236 = tempString$$1 + ", ";
        var v466 = matchPosition - shiftValue;
        var v237 = v466 + 1;
        tempString$$1 = v236 + v237
      }
      var v239 = matchExp;
      var v576 = matchExp.lastIndex;
      var v644 = RegExp.lastMatch;
      var v577 = v644.length;
      var v467 = v576 - v577;
      v239.lastIndex = v467 + 1;
      v240 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    var v468 = tempString$$1.search(/\d/);
    var v241 = v468 != -1;
    if(v241) {
      tempString$$1 = tempString$$1.replace(/none,\s*/, "")
    }
    var v245 = timesFound == 0;
    if(v245) {
      backGroundClass = "none"
    }else {
      var v244 = timesFound == 1;
      if(v244) {
        backGroundClass = "one"
      }else {
        var v243 = timesFound == 2;
        if(v243) {
          backGroundClass = "two"
        }else {
          var v242 = timesFound == 3;
          if(v242) {
            backGroundClass = "three"
          }else {
            backGroundClass = "many"
          }
        }
      }
    }
    var v246 = outputWindow.document;
    var v741 = '<tr><td class="' + backGroundClass;
    var v725 = v741 + '">';
    var v770 = arrayOfItems[i$$9];
    var v757 = v770.match(/\([^\(]+\)/);
    var v742 = v757.toString();
    var v726 = v742.replace(/\(|\)/g, "");
    var v708 = v725 + v726;
    var v685 = v708 + '</td><td class="';
    var v645 = v685 + backGroundClass;
    var v578 = v645 + '">';
    var v469 = v578 + tempString$$1;
    var v247 = v469 + "</td></tr>\n";
    v246.write(v247);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v470 = arrayOfItems.length;
    v248 = i$$9 < v470
  }
  var v249 = outputWindow.document;
  v249.write("</tbody></table>\n");
  return true
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v250 = outputWindow.document;
  v250.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  var v251 = outputWindow.document;
  var v709 = '<tr><td class="title">' + "Pattern:";
  var v686 = v709 + '</td><td class="title">';
  var v646 = v686 + "Times found:";
  var v579 = v646 + '</td><td class="title">';
  var v471 = v579 + "Percentage:";
  var v252 = v471 + "</td></tr>\n";
  v251.write(v252);
  var i$$10 = 0;
  var v472 = arrayOfItems$$1.length;
  var v261 = i$$10 < v472;
  for(;v261;) {
    var tempNumber = 0;
    var v473 = arrayOfItems$$1[i$$10];
    var v253 = v473.match(/\/[^\/]+\//);
    var matchExp$$1 = v253 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    var v474 = sequence$$16.search(matchExp$$1);
    var v255 = v474 != -1;
    if(v255) {
      var v254 = sequence$$16.match(matchExp$$1);
      tempNumber = v254.length
    }
    var percentage = 0;
    var v580 = originalLength + 1;
    var v687 = arrayOfItems$$1[i$$10];
    var v647 = v687.match(/\d+/);
    var v581 = parseFloat(v647);
    var v475 = v580 - v581;
    var v258 = v475 > 0;
    if(v258) {
      var v256 = 100 * tempNumber;
      var v476 = originalLength + 1;
      var v648 = arrayOfItems$$1[i$$10];
      var v582 = v648.match(/\d+/);
      var v477 = parseFloat(v582);
      var v257 = v476 - v477;
      percentage = v256 / v257
    }
    var v259 = outputWindow.document;
    var v771 = arrayOfItems$$1[i$$10];
    var v758 = v771.match(/\([^\(]+\)\b/);
    var v743 = v758.toString();
    var v727 = v743.replace(/\(|\)/g, "");
    var v710 = "<tr><td>" + v727;
    var v688 = v710 + "</td><td>";
    var v649 = v688 + tempNumber;
    var v583 = v649 + "</td><td>";
    var v584 = percentage.toFixed(2);
    var v478 = v583 + v584;
    var v260 = v478 + "</td></tr>\n";
    v259.write(v260);
    i$$10 = i$$10 + 1;
    var v479 = arrayOfItems$$1.length;
    v261 = i$$10 < v479
  }
  var v262 = outputWindow.document;
  v262.write("</tbody></table>\n");
  return true
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v480 = sequence$$17.length;
  var v269 = v480 > 0;
  for(;v269;) {
    maxNum$$1 = sequence$$17.length;
    var v481 = Math.random();
    var v263 = v481 * maxNum$$1;
    randNum$$1 = Math.floor(v263);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v264 = randNum$$1 + 1;
    var v265 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v264, v265);
    sequence$$17 = tempString1 + tempString2;
    var v482 = tempSeq.length;
    var v268 = v482 == 60;
    if(v268) {
      var v266 = outputWindow.document;
      var v267 = tempSeq + "\n";
      v266.write(v267);
      tempSeq = ""
    }
    var v483 = sequence$$17.length;
    v269 = v483 > 0
  }
  var v270 = outputWindow.document;
  var v271 = tempSeq + "\n";
  v270.write(v271);
  return true
}
function fillCodon(aminoAcid, number, perThou, fraction) {
  this.aminoAcid = aminoAcid;
  this.number = number;
  this.perThou = perThou;
  this.fraction = fraction;
  return
}
function Codon() {
  return
}
function codonPlot(theDocument) {
  var newDna = "";
  var maxInput$$3 = 5E4;
  var codonTable$$1;
  var title$$9;
  var v484 = testScript();
  var v272 = v484 == false;
  if(v272) {
    return false
  }
  var v728 = theDocument.forms;
  var v711 = v728[0];
  var v689 = v711.elements;
  var v650 = v689[0];
  var v585 = checkFormElement(v650);
  var v485 = v585 == false;
  var v587 = !v485;
  if(v587) {
    var v759 = theDocument.forms;
    var v744 = v759[0];
    var v729 = v744.elements;
    var v712 = v729[0];
    var v690 = v712.value;
    var v651 = checkSequenceLength(v690, maxInput$$3);
    var v586 = v651 == false;
    var v653 = !v586;
    if(v653) {
      var v760 = theDocument.forms;
      var v745 = v760[0];
      var v730 = v745.elements;
      var v713 = v730[4];
      var v691 = v713.value;
      var v652 = checkCodonTable(v691);
      v586 = v652 == false
    }
    v485 = v586
  }
  var v273 = v485;
  if(v273) {
    return false
  }
  var v692 = theDocument.forms;
  var v654 = v692[0];
  var v588 = v654.elements;
  var v486 = v588[4];
  var v274 = v486.value;
  codonTable$$1 = makeCodonTable(v274);
  var v275 = codonTable$$1 == false;
  if(v275) {
    return false
  }
  var v693 = theDocument.forms;
  var v655 = v693[0];
  var v589 = v655.elements;
  var v487 = v589[0];
  var v276 = v487.value;
  newDna = getSequenceFromFasta(v276);
  var v694 = theDocument.forms;
  var v656 = v694[0];
  var v590 = v656.elements;
  var v488 = v590[0];
  var v277 = v488.value;
  title$$9 = getTitleFromFasta(v277);
  verifyDna(newDna);
  newDna = removeNonDna(newDna);
  openWindow("Codon Plot");
  var v278 = outputWindow.document;
  var v279 = getInfoFromTitleAndSequence(title$$9, newDna);
  v278.write(v279);
  openPre();
  writeCodonPlot(codonTable$$1, newDna);
  closePre();
  closeWindow();
  return true
}
function writeCodonPlot(codonTable$$2, sequence$$18) {
  function v2(str$$8, p1$$2, offset$$14, s$$4) {
    try {
      var v591 = p1$$2.toString();
      var v489 = v591.toLowerCase();
      var v280 = codonTable$$2[v489];
      aminoAcid$$1 = v280.aminoAcid;
      var v592 = p1$$2.toString();
      var v490 = v592.toLowerCase();
      var v281 = codonTable$$2[v490];
      yValue = v281.fraction
    }catch(e$$5) {
      aminoAcid$$1 = "???";
      yValue = 0
    }
    var v795 = p1$$2.toString();
    var v790 = v795.toLowerCase();
    var v782 = "<b>" + v790;
    var v772 = v782 + ", ";
    var v773 = offset$$14 + 1;
    var v761 = v772 + v773;
    var v746 = v761 + " to ";
    var v747 = offset$$14 + 3;
    var v731 = v746 + v747;
    var v714 = v731 + " (";
    var v695 = v714 + aminoAcid$$1;
    var v657 = v695 + ")</b>\n";
    var v732 = markString.length;
    var v715 = yValue * v732;
    var v696 = Math.round(v715);
    var v658 = markString.substring(0, v696);
    var v593 = v657 + v658;
    var v491 = v593 + " ";
    var v492 = yValue.toFixed(2);
    var v282 = v491 + v492;
    return v282 + "\n\n"
  }
  var markString = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
  var codon$$1;
  var perThou$$1;
  var fraction$$1;
  var yValue;
  var aminoAcid$$1;
  sequence$$18 = sequence$$18.replace(/u/gi, "t");
  sequence$$18 = sequence$$18.replace(/(...)/g, v2);
  var v283 = outputWindow.document;
  var v284 = sequence$$18 + "\n";
  v283.write(v284);
  return true
}
function makeCodonTable(gcgTable) {
  gcgTable = gcgTable.replace(/[^\.]*\.\./, "");
  var tableArray = gcgTable.split(/[\f\n\r]/);
  var re$$3 = /(\w+)\s+(\w+)\s+(\S+)\s+(\S+)\s+(\S+)/g;
  var matchArray$$2;
  var codonTable$$3 = new CodonTable;
  var i$$11 = 0;
  var v493 = tableArray.length;
  var v294 = i$$11 < v493;
  for(;v294;) {
    var v494 = tableArray[i$$11];
    var v293 = matchArray$$2 = re$$3.exec(v494);
    for(;v293;) {
      try {
        var v594 = matchArray$$2[2];
        var v495 = v594.toLowerCase();
        var v285 = codonTable$$3[v495];
        var v286 = matchArray$$2[1];
        var v496 = matchArray$$2[3];
        var v287 = parseFloat(v496);
        var v497 = matchArray$$2[4];
        var v288 = parseFloat(v497);
        var v498 = matchArray$$2[5];
        var v289 = parseFloat(v498);
        v285.fillCodon(v286, v287, v288, v289);
        var v290 = codonTable$$3.codons;
        var v499 = matchArray$$2[2];
        var v291 = v499.toLowerCase();
        v290.push(v291)
      }catch(e$$6) {
        var v774 = matchArray$$2[1];
        var v762 = "There is a problem with a line of the codon table: " + v774;
        var v748 = v762 + " ";
        var v749 = matchArray$$2[2];
        var v733 = v748 + v749;
        var v716 = v733 + " ";
        var v717 = matchArray$$2[3];
        var v697 = v716 + v717;
        var v659 = v697 + " ";
        var v660 = matchArray$$2[4];
        var v595 = v659 + v660;
        var v500 = v595 + " ";
        var v501 = matchArray$$2[5];
        var v292 = v500 + v501;
        alert(v292);
        return false
      }
      var v502 = tableArray[i$$11];
      v293 = matchArray$$2 = re$$3.exec(v502)
    }
    i$$11 = i$$11 + 1;
    var v503 = tableArray.length;
    v294 = i$$11 < v503
  }
  codonTable$$3.fixFraction();
  return codonTable$$3
}
function CodonTable() {
  var v813 = new Array;
  this.codons = v813;
  var v814 = new Codon;
  this.ggg = v814;
  var v815 = new Codon;
  this.gga = v815;
  var v816 = new Codon;
  this.ggt = v816;
  var v817 = new Codon;
  this.ggc = v817;
  var v818 = new Codon;
  this.gag = v818;
  var v819 = new Codon;
  this.gaa = v819;
  var v820 = new Codon;
  this.gat = v820;
  var v821 = new Codon;
  this.gac = v821;
  var v822 = new Codon;
  this.gtg = v822;
  var v823 = new Codon;
  this.gta = v823;
  var v824 = new Codon;
  this.gtt = v824;
  var v825 = new Codon;
  this.gtc = v825;
  var v826 = new Codon;
  this.gcg = v826;
  var v827 = new Codon;
  this.gca = v827;
  var v828 = new Codon;
  this.gct = v828;
  var v829 = new Codon;
  this.gcc = v829;
  var v830 = new Codon;
  this.agg = v830;
  var v831 = new Codon;
  this.aga = v831;
  var v832 = new Codon;
  this.agt = v832;
  var v833 = new Codon;
  this.agc = v833;
  var v834 = new Codon;
  this.aag = v834;
  var v835 = new Codon;
  this.aaa = v835;
  var v836 = new Codon;
  this.aat = v836;
  var v837 = new Codon;
  this.aac = v837;
  var v838 = new Codon;
  this.atg = v838;
  var v839 = new Codon;
  this.ata = v839;
  var v840 = new Codon;
  this.att = v840;
  var v841 = new Codon;
  this.atc = v841;
  var v842 = new Codon;
  this.acg = v842;
  var v843 = new Codon;
  this.aca = v843;
  var v844 = new Codon;
  this.act = v844;
  var v845 = new Codon;
  this.acc = v845;
  var v846 = new Codon;
  this.tgg = v846;
  var v847 = new Codon;
  this.tga = v847;
  var v848 = new Codon;
  this.tgt = v848;
  var v849 = new Codon;
  this.tgc = v849;
  var v850 = new Codon;
  this.tag = v850;
  var v851 = new Codon;
  this.taa = v851;
  var v852 = new Codon;
  this.tat = v852;
  var v853 = new Codon;
  this.tac = v853;
  var v854 = new Codon;
  this.ttg = v854;
  var v855 = new Codon;
  this.tta = v855;
  var v856 = new Codon;
  this.ttt = v856;
  var v857 = new Codon;
  this.ttc = v857;
  var v858 = new Codon;
  this.tcg = v858;
  var v859 = new Codon;
  this.tca = v859;
  var v860 = new Codon;
  this.tct = v860;
  var v861 = new Codon;
  this.tcc = v861;
  var v862 = new Codon;
  this.cgg = v862;
  var v863 = new Codon;
  this.cga = v863;
  var v864 = new Codon;
  this.cgt = v864;
  var v865 = new Codon;
  this.cgc = v865;
  var v866 = new Codon;
  this.cag = v866;
  var v867 = new Codon;
  this.caa = v867;
  var v868 = new Codon;
  this.cat = v868;
  var v869 = new Codon;
  this.cac = v869;
  var v870 = new Codon;
  this.ctg = v870;
  var v871 = new Codon;
  this.cta = v871;
  var v872 = new Codon;
  this.ctt = v872;
  var v873 = new Codon;
  this.ctc = v873;
  var v874 = new Codon;
  this.ccg = v874;
  var v875 = new Codon;
  this.cca = v875;
  var v876 = new Codon;
  this.cct = v876;
  var v877 = new Codon;
  this.ccc = v877;
  return
}
function fixFraction() {
  var i$$12 = 0;
  var v596 = this.codons;
  var v504 = v596.length;
  var v301 = i$$12 < v504;
  for(;v301;) {
    var v295 = this.codons;
    var outerCodon = v295[i$$12];
    var perThouTotal = 0;
    var j$$10 = 0;
    var v597 = this.codons;
    var v505 = v597.length;
    var v299 = j$$10 < v505;
    for(;v299;) {
      var v296 = this.codons;
      var innerCodon = v296[j$$10];
      var v598 = this[outerCodon];
      var v506 = v598.aminoAcid;
      var v599 = this[innerCodon];
      var v507 = v599.aminoAcid;
      var v298 = v506 == v507;
      if(v298) {
        var v508 = this[innerCodon];
        var v297 = v508.perThou;
        perThouTotal = perThouTotal + v297
      }
      j$$10 = j$$10 + 1;
      var v600 = this.codons;
      var v509 = v600.length;
      v299 = j$$10 < v509
    }
    var v300 = this[outerCodon];
    var v601 = this[outerCodon];
    var v510 = v601.perThou;
    v300.fraction = v510 / perThouTotal;
    i$$12 = i$$12 + 1;
    var v602 = this.codons;
    var v511 = v602.length;
    v301 = i$$12 < v511
  }
  return true
}
new CodonTable;
var v302 = CodonTable.prototype;
v302.fixFraction = fixFraction;
new Codon;
var v303 = Codon.prototype;
v303.fillCodon = fillCodon;
document.onload = v3;
var v304 = document.getElementById("submitbtn");
v304.onclick = v4;
var v305 = document.getElementById("clearbtn");
v305.onclick = v5;

}
