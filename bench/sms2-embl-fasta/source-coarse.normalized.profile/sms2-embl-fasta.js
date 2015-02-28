
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
function v4() {
  var v541 = document.forms;
  var v465 = v541[0];
  var v279 = v465.elements;
  var v5 = v279[0];
  v5.value = " ";
  return;
}
function v3() {
  try {
    emblFasta();
  } catch (e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    alert(v6);
  }
  return;
}
function v2() {
  var v280 = document.main_form;
  var v7 = v280.main_submit;
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
  var v281 = arrayOfSequences.length;
  var v9 = v281 < 2;
  if (v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v282 = arrayOfTitles.length;
  var v11 = i$$1 < v282;
  for (;v11;) {
    var v590 = arrayOfTitles[i$$1];
    var v542 = v590.search(/\S/);
    var v466 = v542 == -1;
    var v544 = !v466;
    if (v544) {
      var v591 = arrayOfSequences[i$$1];
      var v543 = v591.search(/\S/);
      v466 = v543 == -1;
    }
    var v283 = v466;
    var v468 = !v283;
    if (v468) {
      var v545 = arrayOfSequences[i$$1];
      var v467 = v545.length;
      v283 = v467 != lengthOfAlign;
    }
    var v10 = v283;
    if (v10) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v284 = arrayOfTitles.length;
    v11 = i$$1 < v284;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v622 = codonTable.search(/AmAcid/);
  var v592 = v622 == -1;
  var v624 = !v592;
  if (v624) {
    var v623 = codonTable.search(/Codon/);
    v592 = v623 == -1;
  }
  var v546 = v592;
  var v594 = !v546;
  if (v594) {
    var v593 = codonTable.search(/Number/);
    v546 = v593 == -1;
  }
  var v469 = v546;
  var v548 = !v469;
  if (v548) {
    var v547 = codonTable.search(/\/1000/);
    v469 = v547 == -1;
  }
  var v285 = v469;
  var v471 = !v285;
  if (v471) {
    var v470 = codonTable.search(/Fraction\s*\.\./);
    v285 = v470 == -1;
  }
  var v12 = v285;
  if (v12) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v472 = formElement.value;
  var v286 = v472.search(/\S/);
  var v13 = v286 == -1;
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
  var v287 = arrayOfPatterns.length;
  var v16 = z$$2 < v287;
  for (;v16;) {
    var v473 = arrayOfPatterns[z$$2];
    var v288 = v473.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v14 = v288 == -1;
    if (v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v474 = arrayOfPatterns[z$$2];
    var v289 = moreExpressionCheck(v474);
    var v15 = v289 == false;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v290 = arrayOfPatterns.length;
    v16 = z$$2 < v290;
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v291 = arrayOfPatterns.length;
  var v22 = j < v291;
  for (;v22;) {
    var v475 = arrayOfPatterns[j];
    var v292 = v475.match(/\/.+\//);
    var v19 = v292 + "gi";
    var v712 = eval(v19);
    geneticCodeMatchExp[j] = v712;
    var v293 = arrayOfPatterns[j];
    var v20 = v293.match(/=[a-zA-Z\*]/);
    var v713 = v20.toString();
    geneticCodeMatchResult[j] = v713;
    var v21 = geneticCodeMatchResult[j];
    var v714 = v21.replace(/=/g, "");
    geneticCodeMatchResult[j] = v714;
    j++;
    var v294 = arrayOfPatterns.length;
    v22 = j < v294;
  }
  var i$$2 = 0;
  var v476 = testSequence.length;
  var v295 = v476 - 3;
  var v29 = i$$2 <= v295;
  for (;v29;) {
    var v23 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v23);
    j = 0;
    var v296 = geneticCodeMatchExp.length;
    var v27 = j < v296;
    for (;v27;) {
      var v477 = geneticCodeMatchExp[j];
      var v297 = codon.search(v477);
      var v26 = v297 != -1;
      if (v26) {
        var v25 = oneMatch == true;
        if (v25) {
          var v298 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v24 = v298 + ".";
          alert(v24);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v299 = geneticCodeMatchExp.length;
      v27 = j < v299;
    }
    var v28 = oneMatch == false;
    if (v28) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v478 = testSequence.length;
    var v300 = v478 - 3;
    v29 = i$$2 <= v300;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v301 = arrayOfPatterns$$1.length;
  var v31 = z$$3 < v301;
  for (;v31;) {
    var v479 = arrayOfPatterns$$1[z$$3];
    var v302 = v479.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v30 = v302 != -1;
    if (v30) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v303 = arrayOfPatterns$$1.length;
    v31 = z$$3 < v303;
  }
  var i$$3 = 0;
  var v304 = arrayOfPatterns$$1.length;
  var v35 = i$$3 < v304;
  for (;v35;) {
    var v480 = arrayOfPatterns$$1[i$$3];
    var v305 = "[" + v480;
    var v32 = v305 + "]";
    var re = new RegExp(v32, "gi");
    var j$$1 = i$$3 + 1;
    var v306 = arrayOfPatterns$$1.length;
    var v34 = j$$1 < v306;
    for (;v34;) {
      var v481 = arrayOfPatterns$$1[j$$1];
      var v307 = v481.search(re);
      var v33 = v307 != -1;
      if (v33) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v308 = arrayOfPatterns$$1.length;
      v34 = j$$1 < v308;
    }
    i$$3++;
    var v309 = arrayOfPatterns$$1.length;
    v35 = i$$3 < v309;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v310 = arrayOfPatterns$$2.length;
  var v38 = z$$4 < v310;
  for (;v38;) {
    var v482 = arrayOfPatterns$$2[z$$4];
    var v311 = v482.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v36 = v311 == -1;
    if (v36) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v483 = arrayOfPatterns$$2[z$$4];
    var v312 = moreExpressionCheck(v483);
    var v37 = v312 == false;
    if (v37) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v313 = arrayOfPatterns$$2.length;
    v38 = z$$4 < v313;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v549 = getSequenceFromFasta(text$$7);
  var v484 = v549.replace(/[^A-Za-z]/g, "");
  var v314 = v484.length;
  var v40 = v314 > maxInput;
  if (v40) {
    var v315 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v39 = v315 + " characters.";
    alert(v39);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v316 = text$$8.length;
  var v42 = v316 > maxInput$$1;
  if (v42) {
    var v317 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v41 = v317 + " characters.";
    alert(v41);
    return false;
  } else {
    return true;
  }
  return;
}
function complement(dnaSequence$$1) {
  dnaSequence$$1 = dnaSequence$$1.replace(/g/g, "1");
  dnaSequence$$1 = dnaSequence$$1.replace(/c/g, "2");
  dnaSequence$$1 = dnaSequence$$1.replace(/1/g, "c");
  dnaSequence$$1 = dnaSequence$$1.replace(/2/g, "g");
  dnaSequence$$1 = dnaSequence$$1.replace(/G/g, "1");
  dnaSequence$$1 = dnaSequence$$1.replace(/C/g, "2");
  dnaSequence$$1 = dnaSequence$$1.replace(/1/g, "C");
  dnaSequence$$1 = dnaSequence$$1.replace(/2/g, "G");
  dnaSequence$$1 = dnaSequence$$1.replace(/a/g, "1");
  dnaSequence$$1 = dnaSequence$$1.replace(/t/g, "2");
  dnaSequence$$1 = dnaSequence$$1.replace(/1/g, "t");
  dnaSequence$$1 = dnaSequence$$1.replace(/2/g, "a");
  dnaSequence$$1 = dnaSequence$$1.replace(/A/g, "1");
  dnaSequence$$1 = dnaSequence$$1.replace(/T/g, "2");
  dnaSequence$$1 = dnaSequence$$1.replace(/1/g, "T");
  dnaSequence$$1 = dnaSequence$$1.replace(/2/g, "A");
  dnaSequence$$1 = dnaSequence$$1.replace(/u/g, "a");
  dnaSequence$$1 = dnaSequence$$1.replace(/U/g, "A");
  dnaSequence$$1 = dnaSequence$$1.replace(/r/g, "1");
  dnaSequence$$1 = dnaSequence$$1.replace(/y/g, "2");
  dnaSequence$$1 = dnaSequence$$1.replace(/1/g, "y");
  dnaSequence$$1 = dnaSequence$$1.replace(/2/g, "r");
  dnaSequence$$1 = dnaSequence$$1.replace(/R/g, "1");
  dnaSequence$$1 = dnaSequence$$1.replace(/Y/g, "2");
  dnaSequence$$1 = dnaSequence$$1.replace(/1/g, "Y");
  dnaSequence$$1 = dnaSequence$$1.replace(/2/g, "R");
  dnaSequence$$1 = dnaSequence$$1.replace(/k/g, "1");
  dnaSequence$$1 = dnaSequence$$1.replace(/m/g, "2");
  dnaSequence$$1 = dnaSequence$$1.replace(/1/g, "m");
  dnaSequence$$1 = dnaSequence$$1.replace(/2/g, "k");
  dnaSequence$$1 = dnaSequence$$1.replace(/K/g, "1");
  dnaSequence$$1 = dnaSequence$$1.replace(/M/g, "2");
  dnaSequence$$1 = dnaSequence$$1.replace(/1/g, "M");
  dnaSequence$$1 = dnaSequence$$1.replace(/2/g, "K");
  dnaSequence$$1 = dnaSequence$$1.replace(/b/g, "1");
  dnaSequence$$1 = dnaSequence$$1.replace(/v/g, "2");
  dnaSequence$$1 = dnaSequence$$1.replace(/1/g, "v");
  dnaSequence$$1 = dnaSequence$$1.replace(/2/g, "b");
  dnaSequence$$1 = dnaSequence$$1.replace(/B/g, "1");
  dnaSequence$$1 = dnaSequence$$1.replace(/V/g, "2");
  dnaSequence$$1 = dnaSequence$$1.replace(/1/g, "V");
  dnaSequence$$1 = dnaSequence$$1.replace(/2/g, "B");
  dnaSequence$$1 = dnaSequence$$1.replace(/d/g, "1");
  dnaSequence$$1 = dnaSequence$$1.replace(/h/g, "2");
  dnaSequence$$1 = dnaSequence$$1.replace(/1/g, "h");
  dnaSequence$$1 = dnaSequence$$1.replace(/2/g, "d");
  dnaSequence$$1 = dnaSequence$$1.replace(/D/g, "1");
  dnaSequence$$1 = dnaSequence$$1.replace(/H/g, "2");
  dnaSequence$$1 = dnaSequence$$1.replace(/1/g, "H");
  dnaSequence$$1 = dnaSequence$$1.replace(/2/g, "D");
  return dnaSequence$$1;
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
  var v318 = alignArray.length;
  var v49 = v318 < 3;
  if (v49) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v319 = alignArray.length;
  var v51 = i$$4 < v319;
  for (;v51;) {
    var v485 = alignArray[i$$4];
    var v320 = v485.search(/[^\s]+\s/);
    var v50 = v320 == -1;
    if (v50) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v321 = alignArray.length;
    v51 = i$$4 < v321;
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
  var v322 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v54 = v322 != -1;
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
  var v323 = sequence$$2.length;
  var v55 = "&gt;results for " + v323;
  var stringToReturn = v55 + " residue sequence ";
  var v324 = fastaSequenceTitle.search(/[^\s]/);
  var v57 = v324 != -1;
  if (v57) {
    var v325 = stringToReturn + '"';
    var v56 = v325 + fastaSequenceTitle;
    stringToReturn = v56 + '"';
  }
  var v326 = stringToReturn + ' starting "';
  var v327 = sequence$$2.substring(0, 10);
  var v58 = v326 + v327;
  stringToReturn = v58 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v328 = sequenceOne.length;
  var v59 = "Search results for " + v328;
  var stringToReturn$$1 = v59 + " residue sequence ";
  var v329 = fastaSequenceTitleOne.search(/[^\s]/);
  var v61 = v329 != -1;
  if (v61) {
    var v330 = stringToReturn$$1 + '"';
    var v60 = v330 + fastaSequenceTitleOne;
    stringToReturn$$1 = v60 + '"';
  }
  var v331 = stringToReturn$$1 + ' starting "';
  var v332 = sequenceOne.substring(0, 10);
  var v62 = v331 + v332;
  stringToReturn$$1 = v62 + '"\n';
  var v333 = stringToReturn$$1 + "and ";
  var v334 = sequenceTwo.length;
  var v63 = v333 + v334;
  stringToReturn$$1 = v63 + " residue sequence ";
  var v335 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v65 = v335 != -1;
  if (v65) {
    var v336 = stringToReturn$$1 + '"';
    var v64 = v336 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v64 + '"';
  }
  var v337 = stringToReturn$$1 + ' starting "';
  var v338 = sequenceTwo.substring(0, 10);
  var v66 = v337 + v338;
  stringToReturn$$1 = v66 + '"';
  var v67 = '<div class="info">' + stringToReturn$$1;
  return v67 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v68 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v68);
  var j$$2 = 0;
  var v339 = arrayOfPatterns$$3.length;
  var v70 = j$$2 < v339;
  for (;v70;) {
    var v486 = arrayOfPatterns$$3[j$$2];
    var v340 = v486.match(/\/.+\//);
    var v69 = v340 + "gi";
    var v715 = eval(v69);
    geneticCodeMatchExp$$1[j$$2] = v715;
    j$$2++;
    var v341 = arrayOfPatterns$$3.length;
    v70 = j$$2 < v341;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v71 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v71);
  var j$$3 = 0;
  var v342 = arrayOfPatterns$$4.length;
  var v74 = j$$3 < v342;
  for (;v74;) {
    var v343 = arrayOfPatterns$$4[j$$3];
    var v72 = v343.match(/=[a-zA-Z\*]/);
    var v716 = v72.toString();
    geneticCodeMatchResult$$1[j$$3] = v716;
    var v73 = geneticCodeMatchResult$$1[j$$3];
    var v717 = v73.replace(/=/g, "");
    geneticCodeMatchResult$$1[j$$3] = v717;
    j$$3++;
    var v344 = arrayOfPatterns$$4.length;
    v74 = j$$3 < v344;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v345 = sequence$$3.length;
  var v75 = "Results for " + v345;
  var stringToReturn$$2 = v75 + " residue sequence ";
  var v346 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v77 = v346 != -1;
  if (v77) {
    var v347 = stringToReturn$$2 + '"';
    var v76 = v347 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v76 + '"';
  }
  var v348 = stringToReturn$$2 + ' starting "';
  var v349 = sequence$$3.substring(0, 10);
  var v78 = v348 + v349;
  stringToReturn$$2 = v78 + '"';
  var v79 = '<div class="info">' + stringToReturn$$2;
  return v79 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v487 = "Results for " + topology;
  var v350 = v487 + " ";
  var v351 = sequence$$4.length;
  var v80 = v350 + v351;
  var stringToReturn$$3 = v80 + " residue sequence ";
  var v352 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v82 = v352 != -1;
  if (v82) {
    var v353 = stringToReturn$$3 + '"';
    var v81 = v353 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v81 + '"';
  }
  var v354 = stringToReturn$$3 + ' starting "';
  var v355 = sequence$$4.substring(0, 10);
  var v83 = v354 + v355;
  stringToReturn$$3 = v83 + '"';
  var v84 = '<div class="info">' + stringToReturn$$3;
  return v84 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v356 = sequenceOne$$1.length;
  var v85 = "Alignment results for " + v356;
  var stringToReturn$$4 = v85 + " residue sequence ";
  var v357 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v87 = v357 != -1;
  if (v87) {
    var v358 = stringToReturn$$4 + '"';
    var v86 = v358 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v86 + '"';
  }
  var v359 = stringToReturn$$4 + ' starting "';
  var v360 = sequenceOne$$1.substring(0, 10);
  var v88 = v359 + v360;
  stringToReturn$$4 = v88 + '"\n';
  var v361 = stringToReturn$$4 + "and ";
  var v362 = sequenceTwo$$1.length;
  var v89 = v361 + v362;
  stringToReturn$$4 = v89 + " residue sequence ";
  var v363 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v91 = v363 != -1;
  if (v91) {
    var v364 = stringToReturn$$4 + '"';
    var v90 = v364 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v90 + '"';
  }
  var v365 = stringToReturn$$4 + ' starting "';
  var v366 = sequenceTwo$$1.substring(0, 10);
  var v92 = v365 + v366;
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
    var v367 = Math.random();
    var v368 = components.length;
    var v94 = v367 * v368;
    tempNum = Math.floor(v94);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4++;
    v95 = j$$4 < lengthOut;
  }
  return sequenceArray.join("");
}
function getSequenceFromFasta(sequenceRecord) {
  var v369 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v96 = v369 != -1;
  if (v96) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "");
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v370 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v98 = v370 != -1;
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
  var v690 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v683 = v690 != -1;
  var v692 = !v683;
  if (v692) {
    var v691 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    v683 = v691 != -1;
  }
  var v674 = v683;
  var v685 = !v674;
  if (v685) {
    var v684 = expressionToCheck.search(/\[\]/);
    v674 = v684 != -1;
  }
  var v664 = v674;
  var v676 = !v664;
  if (v676) {
    var v675 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
    v664 = v675 != -1;
  }
  var v651 = v664;
  var v666 = !v651;
  if (v666) {
    var v665 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
    v651 = v665 != -1;
  }
  var v638 = v651;
  var v653 = !v638;
  if (v653) {
    var v652 = expressionToCheck.search(/\|\|/);
    v638 = v652 != -1;
  }
  var v625 = v638;
  var v640 = !v625;
  if (v640) {
    var v639 = expressionToCheck.search(/\/\|/);
    v625 = v639 != -1;
  }
  var v595 = v625;
  var v627 = !v595;
  if (v627) {
    var v626 = expressionToCheck.search(/\|\//);
    v595 = v626 != -1;
  }
  var v550 = v595;
  var v597 = !v550;
  if (v597) {
    var v596 = expressionToCheck.search(/\[.\]/);
    v550 = v596 != -1;
  }
  var v488 = v550;
  var v552 = !v488;
  if (v552) {
    var v551 = expressionToCheck.search(/\</);
    v488 = v551 != -1;
  }
  var v371 = v488;
  var v490 = !v371;
  if (v490) {
    var v489 = expressionToCheck.search(/\>/);
    v371 = v489 != -1;
  }
  var v99 = v371;
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
function openWindow() {
  var title$$5 = "EMBL to FASTA";
  _openWindow(title$$5);
  return;
}
function _openWindow(title$$6) {
  var isColor = true;
  outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  outputWindow.focus();
  var v104 = outputWindow.document;
  var v553 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v491 = v553 + "<head>\n";
  var v372 = v491 + "<title>Sequence Manipulation Suite</title>\n";
  var v105 = v372 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v104.write(v105);
  if (isColor) {
    var v106 = outputWindow.document;
    var v705 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v701 = v705 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v697 = v701 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v693 = v697 + "div.info {font-weight: bold}\n";
    var v686 = v693 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v677 = v686 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v667 = v677 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v654 = v667 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v641 = v654 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v628 = v641 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v598 = v628 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v554 = v598 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v492 = v554 + "td.many {color: #000000}\n";
    var v373 = v492 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v107 = v373 + "</style>\n";
    v106.write(v107);
  } else {
    var v108 = outputWindow.document;
    var v709 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v706 = v709 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v702 = v706 + "div.title {display: none}\n";
    var v698 = v702 + "div.info {font-weight: bold}\n";
    var v694 = v698 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v687 = v694 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v678 = v687 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v668 = v678 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v655 = v668 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v642 = v655 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v629 = v642 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v599 = v629 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v555 = v599 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v493 = v555 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v374 = v493 + "img {display: none}\n";
    var v109 = v374 + "</style>\n";
    v108.write(v109);
  }
  var v110 = outputWindow.document;
  var v556 = "</head>\n" + '<body class="main">\n';
  var v494 = v556 + '<div class="title">';
  var v375 = v494 + title$$6;
  var v111 = v375 + " results</div>\n";
  v110.write(v111);
  outputWindow.status = "Please Wait.";
  return;
}
function openWindowAlign(title$$7) {
  _openWindowAlign(title$$7);
  return;
}
function _openWindowAlign(title$$8) {
  var isBackground = true;
  outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  outputWindow.focus();
  var v112 = outputWindow.document;
  var v557 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v495 = v557 + "<head>\n";
  var v376 = v495 + "<title>Sequence Manipulation Suite</title>\n";
  var v113 = v376 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v112.write(v113);
  if (isBackground) {
    var v114 = outputWindow.document;
    var v707 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v703 = v707 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v699 = v703 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v695 = v699 + "div.info {font-weight: bold}\n";
    var v688 = v695 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v679 = v688 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v669 = v679 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v656 = v669 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v643 = v656 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v630 = v643 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v600 = v630 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v558 = v600 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v496 = v558 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v377 = v496 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v115 = v377 + "</style>\n";
    v114.write(v115);
  } else {
    var v116 = outputWindow.document;
    var v711 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v710 = v711 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v708 = v710 + "div.title {display: none}\n";
    var v704 = v708 + "div.info {font-weight: bold}\n";
    var v700 = v704 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v696 = v700 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v689 = v696 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v680 = v689 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v670 = v680 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v657 = v670 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v644 = v657 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v631 = v644 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v601 = v631 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v559 = v601 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v497 = v559 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v378 = v497 + "img {display: none}\n";
    var v117 = v378 + "</style>\n";
    v116.write(v117);
  }
  var v118 = outputWindow.document;
  var v560 = "</head>\n" + '<body class="main">\n';
  var v498 = v560 + '<div class="title">';
  var v379 = v498 + title$$8;
  var v119 = v379 + " results</div>\n";
  v118.write(v119);
  outputWindow.status = "Please Wait.";
  return;
}
function removeFormatting(sequence$$5) {
  return sequence$$5.replace(/[\d\s]/g, "");
}
function removeNonDna() {
  var sequence$$6 = dnaArray[0];
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
function reverse(dnaSequence$$2) {
  var tempDnaArray = new Array;
  var v380 = dnaSequence$$2.search(/./);
  var v120 = v380 != -1;
  if (v120) {
    tempDnaArray = dnaSequence$$2.match(/./g);
    tempDnaArray = tempDnaArray.reverse();
    dnaSequence$$2 = tempDnaArray.join("");
  }
  return dnaSequence$$2;
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
  var v381 = testArray[0];
  var v124 = v381 != testString;
  if (v124) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v382 = testString.search(re$$2);
  var v125 = v382 == -1;
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
  var v383 = testNum.toFixed(3);
  var v128 = v383 != 2489.824;
  if (v128) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v384 = testNum.toPrecision(5);
  var v129 = v384 != 2489.8;
  if (v129) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v385 = theNumber$$1.search(/\d/);
  var v130 = v385 == -1;
  if (v130) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v602 = emblFile.search(/ID/);
  var v561 = v602 == -1;
  var v604 = !v561;
  if (v604) {
    var v603 = emblFile.search(/AC/);
    v561 = v603 == -1;
  }
  var v499 = v561;
  var v563 = !v499;
  if (v563) {
    var v562 = emblFile.search(/DE/);
    v499 = v562 == -1;
  }
  var v386 = v499;
  var v501 = !v386;
  if (v501) {
    var v500 = emblFile.search(/SQ/);
    v386 = v500 == -1;
  }
  var v131 = v386;
  if (v131) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v387 = theNumber$$2.search(/\d/);
  var v132 = v387 == -1;
  if (v132) {
    alert("Please enter a number.");
    return false;
  }
  var v134 = theNumber$$2 > maxInput$$2;
  if (v134) {
    var v388 = "Please enter a number less than or equal to " + maxInput$$2;
    var v133 = v388 + ".";
    alert(v133);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$3) {
  var v389 = dnaSequence$$3.search(/[^gatucryswkmbdhvnx\s]/i);
  var v135 = v389 != -1;
  if (v135) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v390 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v136 = v390 != -1;
  if (v136) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v605 = genBankFile.search(/LOCUS/);
  var v564 = v605 == -1;
  var v607 = !v564;
  if (v607) {
    var v606 = genBankFile.search(/DEFINITION/);
    v564 = v606 == -1;
  }
  var v502 = v564;
  var v566 = !v502;
  if (v566) {
    var v565 = genBankFile.search(/ACCESSION/);
    v502 = v565 == -1;
  }
  var v391 = v502;
  var v504 = !v391;
  if (v504) {
    var v503 = genBankFile.search(/ORIGIN/);
    v391 = v503 == -1;
  }
  var v137 = v391;
  if (v137) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v608 = genBankFile$$1.search(/LOCUS/);
  var v567 = v608 == -1;
  var v610 = !v567;
  if (v610) {
    var v609 = genBankFile$$1.search(/DEFINITION/);
    v567 = v609 == -1;
  }
  var v505 = v567;
  var v569 = !v505;
  if (v569) {
    var v568 = genBankFile$$1.search(/ACCESSION/);
    v505 = v568 == -1;
  }
  var v392 = v505;
  var v507 = !v392;
  if (v507) {
    var v506 = genBankFile$$1.search(/ORIGIN/);
    v392 = v506 == -1;
  }
  var v138 = v392;
  if (v138) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v393 = genBankFile$$1.search(/FEATURES {13}/);
  var v139 = v393 == -1;
  if (v139) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v611 = emblFile$$1.search(/ID/);
  var v570 = v611 == -1;
  var v613 = !v570;
  if (v613) {
    var v612 = emblFile$$1.search(/AC/);
    v570 = v612 == -1;
  }
  var v508 = v570;
  var v572 = !v508;
  if (v572) {
    var v571 = emblFile$$1.search(/DE/);
    v508 = v571 == -1;
  }
  var v394 = v508;
  var v510 = !v394;
  if (v510) {
    var v509 = emblFile$$1.search(/SQ/);
    v394 = v509 == -1;
  }
  var v140 = v394;
  if (v140) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v395 = emblFile$$1.search(/^FT/m);
  var v141 = v395 == -1;
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
    var v396 = basePerLine / groupSize;
    var v145 = j$$6 <= v396;
    for (;v145;) {
      var v144 = k < groupSize;
      for (;v144;) {
        var v397 = k + i$$5;
        var v143 = text$$10.charAt(v397);
        lineOfText = lineOfText + v143;
        k = k + 1;
        v144 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v398 = basePerLine / groupSize;
      v145 = j$$6 <= v398;
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
    var v399 = adjustment < 0;
    if (v399) {
      v399 = adjusted >= 0;
    }
    var v149 = v399;
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
    var v400 = basePerLine$$2 / groupSize$$2;
    var v156 = j$$7 <= v400;
    for (;v156;) {
      var v152 = k$$1 < groupSize$$2;
      for (;v152;) {
        var v401 = i$$6 + k$$1;
        var v150 = v401 >= stopBase$$2;
        if (v150) {
          break;
        }
        var v402 = k$$1 + i$$6;
        var v151 = text$$12.charAt(v402);
        lineOfText$$1 = lineOfText$$1 + v151;
        k$$1 = k$$1 + 1;
        v152 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v154 = numberPosition$$1 == "above";
      if (v154) {
        var v403 = adjustNumbering(i$$6, numberingAdjustment);
        var v153 = rightNum(v403, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v153;
      }
      var v155 = i$$6 >= stopBase$$2;
      if (v155) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v404 = basePerLine$$2 / groupSize$$2;
      v156 = j$$7 <= v404;
    }
    var v179 = numberPosition$$1 == "left";
    if (v179) {
      var v157 = outputWindow.document;
      var v573 = adjustNumbering(lineNum, numberingAdjustment);
      var v511 = rightNum(v573, "", 8, tabIn$$3);
      var v405 = v511 + lineOfText$$1;
      var v158 = v405 + "\n";
      v157.write(v158);
      var v162 = strands$$1 == "two";
      if (v162) {
        var v159 = outputWindow.document;
        var v574 = adjustNumbering(lineNum, numberingAdjustment);
        var v512 = rightNum(v574, "", 8, tabIn$$3);
        var v513 = complement(lineOfText$$1);
        var v406 = v512 + v513;
        var v160 = v406 + "\n";
        v159.write(v160);
        var v161 = outputWindow.document;
        v161.write("\n");
      }
    } else {
      var v178 = numberPosition$$1 == "right";
      if (v178) {
        var v163 = outputWindow.document;
        var v514 = adjustNumbering(i$$6, numberingAdjustment);
        var v407 = lineOfText$$1 + v514;
        var v164 = v407 + "\n";
        v163.write(v164);
        var v168 = strands$$1 == "two";
        if (v168) {
          var v165 = outputWindow.document;
          var v515 = complement(lineOfText$$1);
          var v516 = adjustNumbering(i$$6, numberingAdjustment);
          var v408 = v515 + v516;
          var v166 = v408 + "\n";
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
            var v409 = complement(lineOfText$$1);
            var v174 = v409 + "\n";
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
    var v410 = basePerLine$$3 / groupSize$$3;
    var v187 = j$$8 <= v410;
    for (;v187;) {
      var v183 = k$$2 < groupSize$$3;
      for (;v183;) {
        var v411 = i$$7 + k$$2;
        var v181 = v411 >= stopBase$$3;
        if (v181) {
          break;
        }
        var v412 = k$$2 + i$$7;
        var v182 = text$$13.charAt(v412);
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
      var v413 = basePerLine$$3 / groupSize$$3;
      v187 = j$$8 <= v413;
    }
    var v198 = numberPosition$$2 == "left";
    if (v198) {
      var v188 = outputWindow.document;
      var v517 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v414 = v517 + lineOfText$$2;
      var v189 = v414 + "\n";
      v188.write(v189);
    } else {
      var v197 = numberPosition$$2 == "right";
      if (v197) {
        var v190 = outputWindow.document;
        var v415 = lineOfText$$2 + i$$7;
        var v191 = v415 + "\n";
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
  var v575 = sequence$$13.length;
  var v518 = v575 <= firstIndexToMutate;
  var v576 = !v518;
  if (v576) {
    v518 = lastIndexToMutate < 0;
  }
  var v416 = v518;
  var v519 = !v416;
  if (v519) {
    v416 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v200 = v416;
  if (v200) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v208 = i$$8 < numMut;
  for (;v208;) {
    maxNum = sequence$$13.length;
    var v417 = Math.random();
    var v201 = v417 * maxNum;
    randNum = Math.floor(v201);
    var v418 = randNum < firstIndexToMutate;
    var v520 = !v418;
    if (v520) {
      v418 = randNum > lastIndexToMutate;
    }
    var v202 = v418;
    if (v202) {
      numMut++;
      i$$8++;
      v208 = i$$8 < numMut;
      continue;
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for (;needNewChar;) {
      var v419 = Math.random();
      var v420 = components$$1.length;
      var v203 = v419 * v420;
      componentsIndex = Math.round(v203);
      var v421 = components$$1.length;
      var v204 = componentsIndex == v421;
      if (v204) {
        componentsIndex = 0;
      }
      var v422 = components$$1[componentsIndex];
      var v205 = v422 != currentChar;
      if (v205) {
        needNewChar = false;
      }
    }
    var v423 = sequence$$13.substring(0, randNum);
    var v424 = components$$1[componentsIndex];
    var v206 = v423 + v424;
    var v425 = randNum + 1;
    var v426 = sequence$$13.length;
    var v207 = sequence$$13.substring(v425, v426);
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
    var v427 = Math.random();
    var v428 = components$$2.length;
    var v211 = v427 * v428;
    tempNum$$1 = Math.floor(v211);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v429 = sequence$$14.length;
    var v214 = v429 == 60;
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
    var v577 = sequence$$15.length;
    var v521 = v577 - lookAhead;
    var v522 = sequence$$15.length;
    var v430 = sequence$$15.substring(v521, v522);
    var v219 = v430 + sequence$$15;
    var v220 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v219 + v220;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v222 = outputWindow.document;
  v222.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  var v223 = outputWindow.document;
  var v578 = '<tr><td class="title" width="200px">' + "Site:";
  var v523 = v578 + '</td><td class="title">';
  var v431 = v523 + "Positions:";
  var v224 = v431 + "</td></tr>\n";
  v223.write(v224);
  var i$$9 = 0;
  var v432 = arrayOfItems.length;
  var v240 = i$$9 < v432;
  for (;v240;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v433 = arrayOfItems[i$$9];
    var v225 = v433.match(/\/.+\//);
    matchExp = v225 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    var v579 = arrayOfItems[i$$9];
    var v524 = v579.match(/\)\D*\d+/);
    var v434 = v524.toString();
    var v226 = v434.replace(/\)\D*/, "");
    cutDistance = parseFloat(v226);
    var v232 = matchArray$$1 = matchExp.exec(sequence$$15);
    for (;v232;) {
      var v227 = matchExp.lastIndex;
      matchPosition = v227 - cutDistance;
      var v435 = matchPosition >= lowerLimit;
      if (v435) {
        v435 = matchPosition < upperLimit;
      }
      var v230 = v435;
      if (v230) {
        timesFound++;
        var v228 = tempString$$1 + ", ";
        var v436 = matchPosition - shiftValue;
        var v229 = v436 + 1;
        tempString$$1 = v228 + v229;
      }
      var v437 = matchExp.lastIndex;
      var v525 = RegExp.lastMatch;
      var v438 = v525.length;
      var v231 = v437 - v438;
      matchExp.lastIndex = v231 + 1;
      v232 = matchArray$$1 = matchExp.exec(sequence$$15);
    }
    var v439 = tempString$$1.search(/\d/);
    var v233 = v439 != -1;
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
    var v658 = '<tr><td class="' + backGroundClass;
    var v645 = v658 + '">';
    var v681 = arrayOfItems[i$$9];
    var v671 = v681.match(/\([^\(]+\)/);
    var v659 = v671.toString();
    var v646 = v659.replace(/\(|\)/g, "");
    var v632 = v645 + v646;
    var v614 = v632 + '</td><td class="';
    var v580 = v614 + backGroundClass;
    var v526 = v580 + '">';
    var v440 = v526 + tempString$$1;
    var v239 = v440 + "</td></tr>\n";
    v238.write(v239);
    timesFound = 0;
    i$$9++;
    var v441 = arrayOfItems.length;
    v240 = i$$9 < v441;
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
  var v633 = '<tr><td class="title">' + "Pattern:";
  var v615 = v633 + '</td><td class="title">';
  var v581 = v615 + "Times found:";
  var v527 = v581 + '</td><td class="title">';
  var v442 = v527 + "Percentage:";
  var v244 = v442 + "</td></tr>\n";
  v243.write(v244);
  var i$$10 = 0;
  var v443 = arrayOfItems$$1.length;
  var v253 = i$$10 < v443;
  for (;v253;) {
    var tempNumber = 0;
    var v444 = arrayOfItems$$1[i$$10];
    var v245 = v444.match(/\/[^\/]+\//);
    var matchExp$$1 = v245 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    var v445 = sequence$$16.search(matchExp$$1);
    var v247 = v445 != -1;
    if (v247) {
      var v246 = sequence$$16.match(matchExp$$1);
      tempNumber = v246.length;
    }
    var percentage = 0;
    var v528 = originalLength + 1;
    var v616 = arrayOfItems$$1[i$$10];
    var v582 = v616.match(/\d+/);
    var v529 = parseFloat(v582);
    var v446 = v528 - v529;
    var v250 = v446 > 0;
    if (v250) {
      var v248 = 100 * tempNumber;
      var v447 = originalLength + 1;
      var v583 = arrayOfItems$$1[i$$10];
      var v530 = v583.match(/\d+/);
      var v448 = parseFloat(v530);
      var v249 = v447 - v448;
      percentage = v248 / v249;
    }
    var v251 = outputWindow.document;
    var v682 = arrayOfItems$$1[i$$10];
    var v672 = v682.match(/\([^\(]+\)\b/);
    var v660 = v672.toString();
    var v647 = v660.replace(/\(|\)/g, "");
    var v634 = "<tr><td>" + v647;
    var v617 = v634 + "</td><td>";
    var v584 = v617 + tempNumber;
    var v531 = v584 + "</td><td>";
    var v532 = percentage.toFixed(2);
    var v449 = v531 + v532;
    var v252 = v449 + "</td></tr>\n";
    v251.write(v252);
    i$$10++;
    var v450 = arrayOfItems$$1.length;
    v253 = i$$10 < v450;
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
  var v451 = sequence$$17.length;
  var v261 = v451 > 0;
  for (;v261;) {
    maxNum$$1 = sequence$$17.length;
    var v452 = Math.random();
    var v255 = v452 * maxNum$$1;
    randNum$$1 = Math.floor(v255);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v256 = randNum$$1 + 1;
    var v257 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v256, v257);
    sequence$$17 = tempString1 + tempString2;
    var v453 = tempSeq.length;
    var v260 = v453 == 60;
    if (v260) {
      var v258 = outputWindow.document;
      var v259 = tempSeq + "\n";
      v258.write(v259);
      tempSeq = "";
    }
    var v454 = sequence$$17.length;
    v261 = v454 > 0;
  }
  var v262 = outputWindow.document;
  var v263 = tempSeq + "\n";
  v262.write(v263);
  return true;
}
function emblFasta() {
  var theDocument = document;
  var newDna = "";
  var maxInput$$3 = 2E5;
  var v455 = testScript();
  var v264 = v455 == false;
  if (v264) {
    return;
  }
  var v661 = theDocument.forms;
  var v648 = v661[0];
  var v635 = v648.elements;
  var v618 = v635[0];
  var v585 = checkFormElement(v618);
  var v533 = v585 == false;
  var v587 = !v533;
  if (v587) {
    var v673 = theDocument.forms;
    var v662 = v673[0];
    var v649 = v662.elements;
    var v636 = v649[0];
    var v619 = v636.value;
    var v586 = verifyEmbl(v619);
    v533 = v586 == false;
  }
  var v456 = v533;
  var v535 = !v456;
  if (v535) {
    var v663 = theDocument.forms;
    var v650 = v663[0];
    var v637 = v650.elements;
    var v620 = v637[0];
    var v588 = v620.value;
    var v534 = checkTextLength(v588, maxInput$$3);
    v456 = v534 == false;
  }
  var v265 = v456;
  if (v265) {
    return;
  }
  openWindow();
  openPre();
  var v621 = theDocument.forms;
  var v589 = v621[0];
  var v536 = v589.elements;
  var v457 = v536[0];
  var v266 = v457.value;
  emblToFasta(v266);
  closePre();
  closeWindow();
  return;
}
function emblToFasta(emblFile$$2) {
  var title$$9;
  var v267 = "_" + emblFile$$2;
  emblFile$$2 = v267 + "_";
  var recordArray = emblFile$$2.split(/ID\s\s\s[^\f\n\r]*/);
  var i$$11 = 1;
  var v458 = recordArray.length;
  var v276 = i$$11 < v458;
  for (;v276;) {
    var v268 = recordArray[i$$11];
    var mainArray = v268.split(/[\f\n\r]\s*FH   Key             Location\/Qualifiers[\f\n\r]+\s*FH|[\f\n\r]\s*XX[\s]*[\f\n\r]\s*SQ[^\f\n\r]*/);
    var v537 = mainArray[0];
    var v459 = v537.search(/[\f\n\r]\s*DE[^\f\n\r]+/);
    var v270 = v459 != -1;
    if (v270) {
      var v538 = mainArray[0];
      var v460 = v538.match(/[\f\n\r]\s*DE[^\f\n\r]+/);
      var v269 = v460.toString();
      title$$9 = v269.replace(/[\f\n\r]\s*DE\s*/, "");
    } else {
      title$$9 = "Untitled";
    }
    var v461 = title$$9.replace(/[\f\n\r\t]+$/g, "");
    var v271 = filterFastaTitle(v461);
    title$$9 = v271 + "\n";
    var v272 = mainArray[2];
    dnaArray = v272.split(/\/{2}/);
    var v462 = dnaArray.length;
    var v273 = v462 == 1;
    if (v273) {
      alert("The entire EMBL file may not have been processed.");
      outputWindow.focus();
    }
    dnaSequence = removeNonDna();
    var v274 = outputWindow.document;
    var v539 = "&gt;" + title$$9;
    var v540 = addReturns(dnaSequence);
    var v463 = v539 + v540;
    var v275 = v463 + "\n\n";
    v274.write(v275);
    i$$11++;
    var v464 = recordArray.length;
    v276 = i$$11 < v464;
  }
  return;
}
document.onload = v2;
var v277 = document.getElementById("submitbtn");
v277.onclick = v3;
var v278 = document.getElementById("clearbtn");
v278.onclick = v4

}

JAM.stopProfile('load');
