function v4() {
  var v559 = document.forms;
  var v482 = v559[0];
  var v293 = v482.elements;
  var v5 = v293[0];
  v5.value = " ";
  return;
}
function v3() {
  try {
    genbankTrans(document);
  } catch (e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    alert(v6);
  }
  return;
}
function v2() {
  var v294 = document.main_form;
  var v7 = v294.main_submit;
  v7.focus();
  return;
}
function addReturns(sequence) {
  function v0(str$$6, p1, offset$$8, s$$2) {
    return p1 + "\n";
  }
  introspect(JAM.policy.p16) {
    sequence = sequence.replace(/(.{60})/g, v0);
  }
  return sequence;
}
function checkAlign(arrayOfTitles, arrayOfSequences) {
  var v8 = arrayOfSequences[0];
  var lengthOfAlign = v8.length;
  var v295 = arrayOfSequences.length;
  var v9 = v295 < 2;
  if (v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v296 = arrayOfTitles.length;
  var v11 = i$$1 < v296;
  for (;v11;) {
    var v609 = arrayOfTitles[i$$1];
    introspect(JAM.policy.p15) {
      var v560 = v609.search(/\S/)
    }
    var v483 = v560 == -1;
    var v562 = !v483;
    if (v562) {
      var v610 = arrayOfSequences[i$$1];
      introspect(JAM.policy.p15) {
        var v561 = v610.search(/\S/)
      }
      v483 = v561 == -1;
    }
    var v297 = v483;
    var v485 = !v297;
    if (v485) {
      var v563 = arrayOfSequences[i$$1];
      var v484 = v563.length;
      v297 = v484 != lengthOfAlign;
    }
    var v10 = v297;
    if (v10) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v298 = arrayOfTitles.length;
    v11 = i$$1 < v298;
  }
  return true;
}
function checkCodonTable(codonTable) {
  introspect(JAM.policy.p15) {
    var v641 = codonTable.search(/AmAcid/)
  }
  var v611 = v641 == -1;
  var v643 = !v611;
  if (v643) {
    introspect(JAM.policy.p15) {
      var v642 = codonTable.search(/Codon/)
    }
    v611 = v642 == -1;
  }
  var v564 = v611;
  var v613 = !v564;
  if (v613) {
    introspect(JAM.policy.p15) {
      var v612 = codonTable.search(/Number/)
    }
    v564 = v612 == -1;
  }
  var v486 = v564;
  var v566 = !v486;
  if (v566) {
    introspect(JAM.policy.p15) {
      var v565 = codonTable.search(/\/1000/)
    }
    v486 = v565 == -1;
  }
  var v299 = v486;
  var v488 = !v299;
  if (v488) {
    introspect(JAM.policy.p15) {
      var v487 = codonTable.search(/Fraction\s*\.\./)
    }
    v299 = v487 == -1;
  }
  var v12 = v299;
  if (v12) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v489 = formElement.value;
  introspect(JAM.policy.p15) {
    var v300 = v489.search(/\S/)
  }
  var v13 = v300 == -1;
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
  var v301 = arrayOfPatterns.length;
  var v16 = z$$2 < v301;
  for (;v16;) {
    var v490 = arrayOfPatterns[z$$2];
    introspect(JAM.policy.p15) {
      var v302 = v490.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/)
    }
    var v14 = v302 == -1;
    if (v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v491 = arrayOfPatterns[z$$2];
    var v303 = moreExpressionCheck(v491);
    var v15 = v303 == false;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v304 = arrayOfPatterns.length;
    v16 = z$$2 < v304;
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v305 = arrayOfPatterns.length;
  var v22 = j < v305;
  for (;v22;) {
    var v492 = arrayOfPatterns[j];
    introspect(JAM.policy.p15) {
      var v306 = v492.match(/\/.+\//)
    }
    var v19 = v306 + "gi";
    var v731 = eval(v19);
    geneticCodeMatchExp[j] = v731;
    var v307 = arrayOfPatterns[j];
    introspect(JAM.policy.p15) {
      var v20 = v307.match(/=[a-zA-Z\*]/)
    }
    var v732 = v20.toString();
    geneticCodeMatchResult[j] = v732;
    var v21 = geneticCodeMatchResult[j];
    introspect(JAM.policy.p16) {
      var v733 = v21.replace(/=/g, "")
    }
    geneticCodeMatchResult[j] = v733;
    j++;
    var v308 = arrayOfPatterns.length;
    v22 = j < v308;
  }
  var i$$2 = 0;
  var v493 = testSequence.length;
  var v309 = v493 - 3;
  var v29 = i$$2 <= v309;
  for (;v29;) {
    var v23 = i$$2 + 3;
    introspect(JAM.policy.p16) {
      codon = testSequence.substring(i$$2, v23);
    }
    j = 0;
    var v310 = geneticCodeMatchExp.length;
    var v27 = j < v310;
    for (;v27;) {
      var v494 = geneticCodeMatchExp[j];
      introspect(JAM.policy.p18) {
        var v311 = codon.search(v494)
      }
      var v26 = v311 != -1;
      if (v26) {
        var v25 = oneMatch == true;
        if (v25) {
          var v312 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v24 = v312 + ".";
          alert(v24);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v313 = geneticCodeMatchExp.length;
      v27 = j < v313;
    }
    var v28 = oneMatch == false;
    if (v28) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v495 = testSequence.length;
    var v314 = v495 - 3;
    v29 = i$$2 <= v314;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v315 = arrayOfPatterns$$1.length;
  var v31 = z$$3 < v315;
  for (;v31;) {
    var v496 = arrayOfPatterns$$1[z$$3];
    introspect(JAM.policy.p15) {
      var v316 = v496.search(/[^acdefghiklmnpqrstvwyz]/i)
    }
    var v30 = v316 != -1;
    if (v30) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v317 = arrayOfPatterns$$1.length;
    v31 = z$$3 < v317;
  }
  var i$$3 = 0;
  var v318 = arrayOfPatterns$$1.length;
  var v35 = i$$3 < v318;
  for (;v35;) {
    var v497 = arrayOfPatterns$$1[i$$3];
    var v319 = "[" + v497;
    var v32 = v319 + "]";
    var re = new RegExp(v32, "gi");
    var j$$1 = i$$3 + 1;
    var v320 = arrayOfPatterns$$1.length;
    var v34 = j$$1 < v320;
    for (;v34;) {
      var v498 = arrayOfPatterns$$1[j$$1];
      introspect(JAM.policy.p18) {
        var v321 = v498.search(re)
      }
      var v33 = v321 != -1;
      if (v33) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v322 = arrayOfPatterns$$1.length;
      v34 = j$$1 < v322;
    }
    i$$3++;
    var v323 = arrayOfPatterns$$1.length;
    v35 = i$$3 < v323;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v324 = arrayOfPatterns$$2.length;
  var v38 = z$$4 < v324;
  for (;v38;) {
    var v499 = arrayOfPatterns$$2[z$$4];
    introspect(JAM.policy.p15) {
      var v325 = v499.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i)
    }
    var v36 = v325 == -1;
    if (v36) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v500 = arrayOfPatterns$$2[z$$4];
    var v326 = moreExpressionCheck(v500);
    var v37 = v326 == false;
    if (v37) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v327 = arrayOfPatterns$$2.length;
    v38 = z$$4 < v327;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v567 = getSequenceFromFasta(text$$7);
  introspect(JAM.policy.p16) {
    var v501 = v567.replace(/[^A-Za-z]/g, "")
  }
  var v328 = v501.length;
  var v40 = v328 > maxInput;
  if (v40) {
    var v329 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v39 = v329 + " characters.";
    alert(v39);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v330 = text$$8.length;
  var v42 = v330 > maxInput$$1;
  if (v42) {
    var v331 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v41 = v331 + " characters.";
    alert(v41);
    return false;
  } else {
    return true;
  }
  return;
}
function complement(dnaSequence) {
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/g/g, "1");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/c/g, "2");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/1/g, "c");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/2/g, "g");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/G/g, "1");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/C/g, "2");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/1/g, "C");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/2/g, "G");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/a/g, "1");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/t/g, "2");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/1/g, "t");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/2/g, "a");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/A/g, "1");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/T/g, "2");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/1/g, "T");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/2/g, "A");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/u/g, "a");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/U/g, "A");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/r/g, "1");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/y/g, "2");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/1/g, "y");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/2/g, "r");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/R/g, "1");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/Y/g, "2");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/1/g, "Y");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/2/g, "R");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/k/g, "1");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/m/g, "2");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/1/g, "m");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/2/g, "k");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/K/g, "1");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/M/g, "2");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/1/g, "M");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/2/g, "K");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/b/g, "1");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/v/g, "2");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/1/g, "v");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/2/g, "b");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/B/g, "1");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/V/g, "2");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/1/g, "V");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/2/g, "B");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/d/g, "1");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/h/g, "2");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/1/g, "h");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/2/g, "d");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/D/g, "1");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/H/g, "2");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/1/g, "H");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/2/g, "D");
  }
  return dnaSequence;
}
function closeForm() {
  var v43 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v43.write("</form>");
  }
  return true;
}
function closePre() {
  var v44 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v44.write("</div>");
  }
  var v45 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v45.write("</pre>\n");
  }
  return;
}
function closeTextArea() {
  var v46 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v46.write("</textarea>");
  }
  return true;
}
function closeWindow() {
  var v47 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v47.write("</body>\n</html>\n");
  }
  outputWindow.status = "Done.";
  var v48 = outputWindow.document;
  v48.close();
  return true;
}
function convertDegenerates(sequence$$1) {
  sequence$$1 = sequence$$1.toLowerCase();
  introspect(JAM.policy.p16) {
    sequence$$1 = sequence$$1.replace(/t/g, "[TU]");
  }
  introspect(JAM.policy.p16) {
    sequence$$1 = sequence$$1.replace(/r/g, "[AGR]");
  }
  introspect(JAM.policy.p16) {
    sequence$$1 = sequence$$1.replace(/y/g, "[CTUY]");
  }
  introspect(JAM.policy.p16) {
    sequence$$1 = sequence$$1.replace(/s/g, "[GCS]");
  }
  introspect(JAM.policy.p16) {
    sequence$$1 = sequence$$1.replace(/w/g, "[ATUW]");
  }
  introspect(JAM.policy.p16) {
    sequence$$1 = sequence$$1.replace(/k/g, "[GTUK]");
  }
  introspect(JAM.policy.p16) {
    sequence$$1 = sequence$$1.replace(/m/g, "[ACM]");
  }
  introspect(JAM.policy.p16) {
    sequence$$1 = sequence$$1.replace(/b/g, "[CGTUBSKY]");
  }
  introspect(JAM.policy.p16) {
    sequence$$1 = sequence$$1.replace(/d/g, "[AGTUDRKW]");
  }
  introspect(JAM.policy.p16) {
    sequence$$1 = sequence$$1.replace(/h/g, "[ACTUHMYW]");
  }
  introspect(JAM.policy.p16) {
    sequence$$1 = sequence$$1.replace(/v/g, "[ACGVSMR]");
  }
  introspect(JAM.policy.p16) {
    sequence$$1 = sequence$$1.replace(/n/g, "[ACGTURYSWKMBDHVN]");
  }
  return sequence$$1;
}
function earlyCheckAlign(alignArray) {
  var v332 = alignArray.length;
  var v49 = v332 < 3;
  if (v49) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v333 = alignArray.length;
  var v51 = i$$4 < v333;
  for (;v51;) {
    var v502 = alignArray[i$$4];
    introspect(JAM.policy.p15) {
      var v334 = v502.search(/[^\s]+\s/)
    }
    var v50 = v334 == -1;
    if (v50) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v335 = alignArray.length;
    v51 = i$$4 < v335;
  }
  return true;
}
function filterAlignSeq(alignSeq) {
  introspect(JAM.policy.p16) {
    alignSeq = alignSeq.replace(/[^abcdefghiklmnpqrstvwxyz\.\-]/gi, "");
  }
  return alignSeq;
}
function filterFastaTitle(sequenceTitle) {
  introspect(JAM.policy.p16) {
    sequenceTitle = sequenceTitle.replace(/\s{2,}/g, " ");
  }
  introspect(JAM.policy.p16) {
    sequenceTitle = sequenceTitle.replace(/^\s*/g, "");
  }
  introspect(JAM.policy.p16) {
    sequenceTitle = sequenceTitle.replace(/[\f\n\r\t]+$/g, "\n");
  }
  introspect(JAM.policy.p16) {
    return sequenceTitle.replace(/[\<\>]\n/gi, "");
  }
}
function getArrayOfFasta(sequenceData) {
  var arrayOfFasta = new Array;
  var matchArray;
  var re$$1 = /\>[^\>]+/g;
  introspect(JAM.policy.p15) {
    var v336 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v54 = v336 != -1;
  if (v54) {
    introspect(JAM.policy.p18) {
      var v53 = matchArray = re$$1.exec(sequenceData)
    }
    for (;v53;) {
      var v52 = matchArray[0];
      introspect(JAM.policy.p18) {
        arrayOfFasta.push(v52);
      }
      introspect(JAM.policy.p18) {
        v53 = matchArray = re$$1.exec(sequenceData);
      }
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v337 = sequence$$2.length;
  var v55 = "&gt;results for " + v337;
  var stringToReturn = v55 + " residue sequence ";
  introspect(JAM.policy.p15) {
    var v338 = fastaSequenceTitle.search(/[^\s]/)
  }
  var v57 = v338 != -1;
  if (v57) {
    var v339 = stringToReturn + '"';
    var v56 = v339 + fastaSequenceTitle;
    stringToReturn = v56 + '"';
  }
  var v340 = stringToReturn + ' starting "';
  introspect(JAM.policy.p13) {
    var v341 = sequence$$2.substring(0, 10)
  }
  var v58 = v340 + v341;
  stringToReturn = v58 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v342 = sequenceOne.length;
  var v59 = "Search results for " + v342;
  var stringToReturn$$1 = v59 + " residue sequence ";
  introspect(JAM.policy.p15) {
    var v343 = fastaSequenceTitleOne.search(/[^\s]/)
  }
  var v61 = v343 != -1;
  if (v61) {
    var v344 = stringToReturn$$1 + '"';
    var v60 = v344 + fastaSequenceTitleOne;
    stringToReturn$$1 = v60 + '"';
  }
  var v345 = stringToReturn$$1 + ' starting "';
  introspect(JAM.policy.p13) {
    var v346 = sequenceOne.substring(0, 10)
  }
  var v62 = v345 + v346;
  stringToReturn$$1 = v62 + '"\n';
  var v347 = stringToReturn$$1 + "and ";
  var v348 = sequenceTwo.length;
  var v63 = v347 + v348;
  stringToReturn$$1 = v63 + " residue sequence ";
  introspect(JAM.policy.p15) {
    var v349 = fastaSequenceTitleTwo.search(/[^\s]/)
  }
  var v65 = v349 != -1;
  if (v65) {
    var v350 = stringToReturn$$1 + '"';
    var v64 = v350 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v64 + '"';
  }
  var v351 = stringToReturn$$1 + ' starting "';
  introspect(JAM.policy.p13) {
    var v352 = sequenceTwo.substring(0, 10)
  }
  var v66 = v351 + v352;
  stringToReturn$$1 = v66 + '"';
  var v67 = '<div class="info">' + stringToReturn$$1;
  return v67 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v68 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v68);
  var j$$2 = 0;
  var v353 = arrayOfPatterns$$3.length;
  var v70 = j$$2 < v353;
  for (;v70;) {
    var v503 = arrayOfPatterns$$3[j$$2];
    introspect(JAM.policy.p15) {
      var v354 = v503.match(/\/.+\//)
    }
    var v69 = v354 + "gi";
    var v734 = eval(v69);
    geneticCodeMatchExp$$1[j$$2] = v734;
    j$$2++;
    var v355 = arrayOfPatterns$$3.length;
    v70 = j$$2 < v355;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v71 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v71);
  var j$$3 = 0;
  var v356 = arrayOfPatterns$$4.length;
  var v74 = j$$3 < v356;
  for (;v74;) {
    var v357 = arrayOfPatterns$$4[j$$3];
    introspect(JAM.policy.p15) {
      var v72 = v357.match(/=[a-zA-Z\*]/)
    }
    var v735 = v72.toString();
    geneticCodeMatchResult$$1[j$$3] = v735;
    var v73 = geneticCodeMatchResult$$1[j$$3];
    introspect(JAM.policy.p16) {
      var v736 = v73.replace(/=/g, "")
    }
    geneticCodeMatchResult$$1[j$$3] = v736;
    j$$3++;
    var v358 = arrayOfPatterns$$4.length;
    v74 = j$$3 < v358;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v359 = sequence$$3.length;
  var v75 = "Results for " + v359;
  var stringToReturn$$2 = v75 + " residue sequence ";
  introspect(JAM.policy.p15) {
    var v360 = fastaSequenceTitle$$1.search(/[^\s]/)
  }
  var v77 = v360 != -1;
  if (v77) {
    var v361 = stringToReturn$$2 + '"';
    var v76 = v361 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v76 + '"';
  }
  var v362 = stringToReturn$$2 + ' starting "';
  introspect(JAM.policy.p13) {
    var v363 = sequence$$3.substring(0, 10)
  }
  var v78 = v362 + v363;
  stringToReturn$$2 = v78 + '"';
  var v79 = '<div class="info">' + stringToReturn$$2;
  return v79 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v504 = "Results for " + topology;
  var v364 = v504 + " ";
  var v365 = sequence$$4.length;
  var v80 = v364 + v365;
  var stringToReturn$$3 = v80 + " residue sequence ";
  introspect(JAM.policy.p15) {
    var v366 = fastaSequenceTitle$$2.search(/[^\s]/)
  }
  var v82 = v366 != -1;
  if (v82) {
    var v367 = stringToReturn$$3 + '"';
    var v81 = v367 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v81 + '"';
  }
  var v368 = stringToReturn$$3 + ' starting "';
  introspect(JAM.policy.p13) {
    var v369 = sequence$$4.substring(0, 10)
  }
  var v83 = v368 + v369;
  stringToReturn$$3 = v83 + '"';
  var v84 = '<div class="info">' + stringToReturn$$3;
  return v84 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v370 = sequenceOne$$1.length;
  var v85 = "Alignment results for " + v370;
  var stringToReturn$$4 = v85 + " residue sequence ";
  introspect(JAM.policy.p15) {
    var v371 = fastaSequenceTitleOne$$1.search(/[^\s]/)
  }
  var v87 = v371 != -1;
  if (v87) {
    var v372 = stringToReturn$$4 + '"';
    var v86 = v372 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v86 + '"';
  }
  var v373 = stringToReturn$$4 + ' starting "';
  introspect(JAM.policy.p13) {
    var v374 = sequenceOne$$1.substring(0, 10)
  }
  var v88 = v373 + v374;
  stringToReturn$$4 = v88 + '"\n';
  var v375 = stringToReturn$$4 + "and ";
  var v376 = sequenceTwo$$1.length;
  var v89 = v375 + v376;
  stringToReturn$$4 = v89 + " residue sequence ";
  introspect(JAM.policy.p15) {
    var v377 = fastaSequenceTitleTwo$$1.search(/[^\s]/)
  }
  var v91 = v377 != -1;
  if (v91) {
    var v378 = stringToReturn$$4 + '"';
    var v90 = v378 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v90 + '"';
  }
  var v379 = stringToReturn$$4 + ' starting "';
  introspect(JAM.policy.p13) {
    var v380 = sequenceTwo$$1.substring(0, 10)
  }
  var v92 = v379 + v380;
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
    var v381 = Math.random();
    var v382 = components.length;
    var v94 = v381 * v382;
    introspect(JAM.policy.p15) {
      tempNum = Math.floor(v94);
    }
    tempChar = components[tempNum];
    introspect(JAM.policy.p18) {
      sequenceArray.push(tempChar);
    }
    j$$4++;
    v95 = j$$4 < lengthOut;
  }
  introspect(JAM.policy.p9) {
    return sequenceArray.join("");
  }
}
function getSequenceFromFasta(sequenceRecord) {
  introspect(JAM.policy.p15) {
    var v383 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v96 = v383 != -1;
  if (v96) {
    introspect(JAM.policy.p16) {
      sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "");
    }
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  introspect(JAM.policy.p15) {
    var v384 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v98 = v384 != -1;
  if (v98) {
    introspect(JAM.policy.p16) {
      var v97 = sequenceRecord$$1.match(/\>[^\f\n\r]+[\f\n\r]/, "")
    }
    fastaTitle = v97.toString();
    introspect(JAM.policy.p16) {
      fastaTitle = fastaTitle.replace(/\>|[\f\n\r]/g, "");
    }
    introspect(JAM.policy.p16) {
      fastaTitle = fastaTitle.replace(/\s{2,}/g, " ");
    }
    introspect(JAM.policy.p16) {
      fastaTitle = fastaTitle.replace(/[\<\>]/gi, "");
    }
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  introspect(JAM.policy.p15) {
    var v709 = expressionToCheck.search(/\[[A-Za-z\|]*\[/)
  }
  var v702 = v709 != -1;
  var v711 = !v702;
  if (v711) {
    introspect(JAM.policy.p15) {
      var v710 = expressionToCheck.search(/\][A-Za-z\|]*\]/)
    }
    v702 = v710 != -1;
  }
  var v693 = v702;
  var v704 = !v693;
  if (v704) {
    introspect(JAM.policy.p15) {
      var v703 = expressionToCheck.search(/\[\]/)
    }
    v693 = v703 != -1;
  }
  var v683 = v693;
  var v695 = !v683;
  if (v695) {
    introspect(JAM.policy.p15) {
      var v694 = expressionToCheck.search(/\/[A-Za-z\|]*\]/)
    }
    v683 = v694 != -1;
  }
  var v670 = v683;
  var v685 = !v670;
  if (v685) {
    introspect(JAM.policy.p15) {
      var v684 = expressionToCheck.search(/\[[A-Za-z\|]*\//)
    }
    v670 = v684 != -1;
  }
  var v657 = v670;
  var v672 = !v657;
  if (v672) {
    introspect(JAM.policy.p15) {
      var v671 = expressionToCheck.search(/\|\|/)
    }
    v657 = v671 != -1;
  }
  var v644 = v657;
  var v659 = !v644;
  if (v659) {
    introspect(JAM.policy.p15) {
      var v658 = expressionToCheck.search(/\/\|/)
    }
    v644 = v658 != -1;
  }
  var v614 = v644;
  var v646 = !v614;
  if (v646) {
    introspect(JAM.policy.p15) {
      var v645 = expressionToCheck.search(/\|\//)
    }
    v614 = v645 != -1;
  }
  var v568 = v614;
  var v616 = !v568;
  if (v616) {
    introspect(JAM.policy.p15) {
      var v615 = expressionToCheck.search(/\[.\]/)
    }
    v568 = v615 != -1;
  }
  var v505 = v568;
  var v570 = !v505;
  if (v570) {
    introspect(JAM.policy.p15) {
      var v569 = expressionToCheck.search(/\</)
    }
    v505 = v569 != -1;
  }
  var v385 = v505;
  var v507 = !v385;
  if (v507) {
    introspect(JAM.policy.p15) {
      var v506 = expressionToCheck.search(/\>/)
    }
    v385 = v506 != -1;
  }
  var v99 = v385;
  if (v99) {
    return false;
  }
  return true;
}
function openForm() {
  var v100 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v100.write('<form action="">\n');
  }
  return true;
}
function openPre() {
  var v101 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v101.write("<pre>");
  }
  var v102 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v102.write('<div class="pre">');
  }
  return;
}
function openTextArea() {
  var v103 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v103.write('<br /><textarea rows="6" cols="61">\n');
  }
  return true;
}
function openWindow(title$$5) {
  _openWindow(title$$5, true);
  return;
}
function _openWindow(title$$6, isColor) {
  introspect(JAM.policy.p14) {
    outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  }
  outputWindow.focus();
  var v104 = outputWindow.document;
  var v571 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v508 = v571 + "<head>\n";
  var v386 = v508 + "<title>Sequence Manipulation Suite</title>\n";
  var v105 = v386 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  introspect(JAM.policy.p18) {
    v104.write(v105);
  }
  if (isColor) {
    var v106 = outputWindow.document;
    var v724 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v720 = v724 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v716 = v720 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v712 = v716 + "div.info {font-weight: bold}\n";
    var v705 = v712 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v696 = v705 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v686 = v696 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v673 = v686 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v660 = v673 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v647 = v660 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v617 = v647 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v572 = v617 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v509 = v572 + "td.many {color: #000000}\n";
    var v387 = v509 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v107 = v387 + "</style>\n";
    introspect(JAM.policy.p18) {
      v106.write(v107);
    }
  } else {
    var v108 = outputWindow.document;
    var v728 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v725 = v728 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v721 = v725 + "div.title {display: none}\n";
    var v717 = v721 + "div.info {font-weight: bold}\n";
    var v713 = v717 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v706 = v713 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v697 = v706 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v687 = v697 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v674 = v687 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v661 = v674 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v648 = v661 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v618 = v648 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v573 = v618 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v510 = v573 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v388 = v510 + "img {display: none}\n";
    var v109 = v388 + "</style>\n";
    introspect(JAM.policy.p18) {
      v108.write(v109);
    }
  }
  var v110 = outputWindow.document;
  var v574 = "</head>\n" + '<body class="main">\n';
  var v511 = v574 + '<div class="title">';
  var v389 = v511 + title$$6;
  var v111 = v389 + " results</div>\n";
  introspect(JAM.policy.p18) {
    v110.write(v111);
  }
  outputWindow.status = "Please Wait.";
  return true;
}
function openWindowAlign(title$$7) {
  _openWindowAlign(title$$7, true);
  return;
}
function _openWindowAlign(title$$8, isBackground) {
  introspect(JAM.policy.p14) {
    outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  }
  outputWindow.focus();
  var v112 = outputWindow.document;
  var v575 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v512 = v575 + "<head>\n";
  var v390 = v512 + "<title>Sequence Manipulation Suite</title>\n";
  var v113 = v390 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  introspect(JAM.policy.p18) {
    v112.write(v113);
  }
  if (isBackground) {
    var v114 = outputWindow.document;
    var v726 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v722 = v726 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v718 = v722 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v714 = v718 + "div.info {font-weight: bold}\n";
    var v707 = v714 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v698 = v707 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v688 = v698 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v675 = v688 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v662 = v675 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v649 = v662 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v619 = v649 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v576 = v619 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v513 = v576 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v391 = v513 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v115 = v391 + "</style>\n";
    introspect(JAM.policy.p18) {
      v114.write(v115);
    }
  } else {
    var v116 = outputWindow.document;
    var v730 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v729 = v730 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v727 = v729 + "div.title {display: none}\n";
    var v723 = v727 + "div.info {font-weight: bold}\n";
    var v719 = v723 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v715 = v719 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v708 = v715 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v699 = v708 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v689 = v699 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v676 = v689 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v663 = v676 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v650 = v663 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v620 = v650 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v577 = v620 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v514 = v577 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v392 = v514 + "img {display: none}\n";
    var v117 = v392 + "</style>\n";
    introspect(JAM.policy.p18) {
      v116.write(v117);
    }
  }
  var v118 = outputWindow.document;
  var v578 = "</head>\n" + '<body class="main">\n';
  var v515 = v578 + '<div class="title">';
  var v393 = v515 + title$$8;
  var v119 = v393 + " results</div>\n";
  introspect(JAM.policy.p18) {
    v118.write(v119);
  }
  outputWindow.status = "Please Wait.";
  return true;
}
function removeFormatting(sequence$$5) {
  introspect(JAM.policy.p16) {
    return sequence$$5.replace(/[\d\s]/g, "");
  }
}
function removeNonDna(sequence$$6) {
  introspect(JAM.policy.p16) {
    return sequence$$6.replace(/[^gatucryswkmbdhvnxGATUCRYSWKMBDHVNX]/g, "");
  }
}
function removeNonDnaStrict(sequence$$7) {
  introspect(JAM.policy.p16) {
    return sequence$$7.replace(/[^gatucGATUC]/g, "");
  }
}
function removeNonProtein(sequence$$8) {
  introspect(JAM.policy.p16) {
    return sequence$$8.replace(/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, "");
  }
}
function removeNonProteinStrict(sequence$$9) {
  introspect(JAM.policy.p16) {
    return sequence$$9.replace(/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, "");
  }
}
function removeNonProteinAllowDegen(sequence$$10) {
  introspect(JAM.policy.p16) {
    return sequence$$10.replace(/[^ABCDEFGHIKLMNPQRSTVWYXZabcdefghiklmnpqrstvwyxz\*]/g, "");
  }
}
function removeNonProteinAllowX(sequence$$11) {
  introspect(JAM.policy.p16) {
    return sequence$$11.replace(/[^ACDEFGHIKLMNPQRSTVWYZXacdefghiklmnpqrstvwyzx\*]/g, "");
  }
}
function removeWhiteSpace(text$$9) {
  introspect(JAM.policy.p16) {
    return text$$9.replace(/\s/g, "");
  }
}
function removeNonLetters(sequence$$12) {
  introspect(JAM.policy.p16) {
    return sequence$$12.replace(/[^A-Z]/gi, "");
  }
}
function reverse(dnaSequence$$1) {
  var tempDnaArray = new Array;
  introspect(JAM.policy.p15) {
    var v394 = dnaSequence$$1.search(/./)
  }
  var v120 = v394 != -1;
  if (v120) {
    introspect(JAM.policy.p15) {
      tempDnaArray = dnaSequence$$1.match(/./g);
    }
    tempDnaArray = tempDnaArray.reverse();
    introspect(JAM.policy.p9) {
      dnaSequence$$1 = tempDnaArray.join("");
    }
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
  introspect(JAM.policy.p18) {
    testArray.push(testString);
  }
  var v395 = testArray[0];
  var v124 = v395 != testString;
  if (v124) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  introspect(JAM.policy.p18) {
    var v396 = testString.search(re$$2)
  }
  var v125 = v396 == -1;
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
  introspect(JAM.policy.p16) {
    testString = testString.replace(/(\d)/g, v1);
  }
  var v127 = testString != "1X2X3X";
  if (v127) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false;
  }
  var testNum = 2489.8237;
  introspect(JAM.policy.p11) {
    var v397 = testNum.toFixed(3)
  }
  var v128 = v397 != 2489.824;
  if (v128) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  introspect(JAM.policy.p11) {
    var v398 = testNum.toPrecision(5)
  }
  var v129 = v398 != 2489.8;
  if (v129) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  introspect(JAM.policy.p15) {
    var v399 = theNumber$$1.search(/\d/)
  }
  var v130 = v399 == -1;
  if (v130) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  introspect(JAM.policy.p15) {
    var v621 = emblFile.search(/ID/)
  }
  var v579 = v621 == -1;
  var v623 = !v579;
  if (v623) {
    introspect(JAM.policy.p15) {
      var v622 = emblFile.search(/AC/)
    }
    v579 = v622 == -1;
  }
  var v516 = v579;
  var v581 = !v516;
  if (v581) {
    introspect(JAM.policy.p15) {
      var v580 = emblFile.search(/DE/)
    }
    v516 = v580 == -1;
  }
  var v400 = v516;
  var v518 = !v400;
  if (v518) {
    introspect(JAM.policy.p15) {
      var v517 = emblFile.search(/SQ/)
    }
    v400 = v517 == -1;
  }
  var v131 = v400;
  if (v131) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  introspect(JAM.policy.p15) {
    var v401 = theNumber$$2.search(/\d/)
  }
  var v132 = v401 == -1;
  if (v132) {
    alert("Please enter a number.");
    return false;
  }
  var v134 = theNumber$$2 > maxInput$$2;
  if (v134) {
    var v402 = "Please enter a number less than or equal to " + maxInput$$2;
    var v133 = v402 + ".";
    alert(v133);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  introspect(JAM.policy.p15) {
    var v403 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i)
  }
  var v135 = v403 != -1;
  if (v135) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  introspect(JAM.policy.p15) {
    var v404 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i)
  }
  var v136 = v404 != -1;
  if (v136) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  introspect(JAM.policy.p15) {
    var v624 = genBankFile.search(/LOCUS/)
  }
  var v582 = v624 == -1;
  var v626 = !v582;
  if (v626) {
    introspect(JAM.policy.p15) {
      var v625 = genBankFile.search(/DEFINITION/)
    }
    v582 = v625 == -1;
  }
  var v519 = v582;
  var v584 = !v519;
  if (v584) {
    introspect(JAM.policy.p15) {
      var v583 = genBankFile.search(/ACCESSION/)
    }
    v519 = v583 == -1;
  }
  var v405 = v519;
  var v521 = !v405;
  if (v521) {
    introspect(JAM.policy.p15) {
      var v520 = genBankFile.search(/ORIGIN/)
    }
    v405 = v520 == -1;
  }
  var v137 = v405;
  if (v137) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  introspect(JAM.policy.p15) {
    var v627 = genBankFile$$1.search(/LOCUS/)
  }
  var v585 = v627 == -1;
  var v629 = !v585;
  if (v629) {
    introspect(JAM.policy.p15) {
      var v628 = genBankFile$$1.search(/DEFINITION/)
    }
    v585 = v628 == -1;
  }
  var v522 = v585;
  var v587 = !v522;
  if (v587) {
    introspect(JAM.policy.p15) {
      var v586 = genBankFile$$1.search(/ACCESSION/)
    }
    v522 = v586 == -1;
  }
  var v406 = v522;
  var v524 = !v406;
  if (v524) {
    introspect(JAM.policy.p15) {
      var v523 = genBankFile$$1.search(/ORIGIN/)
    }
    v406 = v523 == -1;
  }
  var v138 = v406;
  if (v138) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  introspect(JAM.policy.p15) {
    var v407 = genBankFile$$1.search(/FEATURES {13}/)
  }
  var v139 = v407 == -1;
  if (v139) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  introspect(JAM.policy.p15) {
    var v630 = emblFile$$1.search(/ID/)
  }
  var v588 = v630 == -1;
  var v632 = !v588;
  if (v632) {
    introspect(JAM.policy.p15) {
      var v631 = emblFile$$1.search(/AC/)
    }
    v588 = v631 == -1;
  }
  var v525 = v588;
  var v590 = !v525;
  if (v590) {
    introspect(JAM.policy.p15) {
      var v589 = emblFile$$1.search(/DE/)
    }
    v525 = v589 == -1;
  }
  var v408 = v525;
  var v527 = !v408;
  if (v527) {
    introspect(JAM.policy.p15) {
      var v526 = emblFile$$1.search(/SQ/)
    }
    v408 = v526 == -1;
  }
  var v140 = v408;
  if (v140) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  introspect(JAM.policy.p15) {
    var v409 = emblFile$$1.search(/^FT/m)
  }
  var v141 = v409 == -1;
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
    var v410 = basePerLine / groupSize;
    var v145 = j$$6 <= v410;
    for (;v145;) {
      var v144 = k < groupSize;
      for (;v144;) {
        var v411 = k + i$$5;
        introspect(JAM.policy.p18) {
          var v143 = text$$10.charAt(v411)
        }
        lineOfText = lineOfText + v143;
        k = k + 1;
        v144 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v412 = basePerLine / groupSize;
      v145 = j$$6 <= v412;
    }
    var v146 = outputWindow.document;
    var v147 = lineOfText + "\n";
    introspect(JAM.policy.p18) {
      v146.write(v147);
    }
    lineOfText = "";
    v148 = i$$5 < stopBase;
  }
  return true;
}
function writeGroupNumDna(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition) {
  introspect(JAM.policy.p19) {
    writeGroupNumDnaSetStart(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition, 0);
  }
  return true;
}
function writeGroupNumDnaSetStart(text$$12, tabIn$$3, groupSize$$2, basePerLine$$2, startBase$$2, stopBase$$2, strands$$1, numberPosition$$1, numberingAdjustment) {
  function adjustNumbering(original, adjustment) {
    var adjusted = original + adjustment;
    var v413 = adjustment < 0;
    if (v413) {
      v413 = adjusted >= 0;
    }
    var v149 = v413;
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
    var v414 = basePerLine$$2 / groupSize$$2;
    var v158 = j$$7 <= v414;
    for (;v158;) {
      var v153 = k$$1 < groupSize$$2;
      for (;v153;) {
        var v415 = i$$6 + k$$1;
        var v150 = v415 >= stopBase$$2;
        if (v150) {
          break;
        }
        var v151 = lineOfText$$1;
        var v416 = k$$1 + i$$6;
        introspect(JAM.policy.p18) {
          var v152 = text$$12.charAt(v416)
        }
        lineOfText$$1 = v151 + v152;
        k$$1 = k$$1 + 1;
        v153 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v156 = numberPosition$$1 == "above";
      if (v156) {
        var v154 = aboveNum;
        introspect(JAM.policy.p19) {
          var v417 = adjustNumbering(i$$6, numberingAdjustment)
        }
        var v155 = rightNum(v417, "", groupSize$$2, tabIn$$3);
        aboveNum = v154 + v155;
      }
      var v157 = i$$6 >= stopBase$$2;
      if (v157) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v418 = basePerLine$$2 / groupSize$$2;
      v158 = j$$7 <= v418;
    }
    var v181 = numberPosition$$1 == "left";
    if (v181) {
      var v159 = outputWindow.document;
      introspect(JAM.policy.p19) {
        var v591 = adjustNumbering(lineNum, numberingAdjustment)
      }
      var v528 = rightNum(v591, "", 8, tabIn$$3);
      var v419 = v528 + lineOfText$$1;
      var v160 = v419 + "\n";
      introspect(JAM.policy.p18) {
        v159.write(v160);
      }
      var v164 = strands$$1 == "two";
      if (v164) {
        var v161 = outputWindow.document;
        introspect(JAM.policy.p19) {
          var v592 = adjustNumbering(lineNum, numberingAdjustment)
        }
        var v529 = rightNum(v592, "", 8, tabIn$$3);
        var v530 = complement(lineOfText$$1);
        var v420 = v529 + v530;
        var v162 = v420 + "\n";
        introspect(JAM.policy.p18) {
          v161.write(v162);
        }
        var v163 = outputWindow.document;
        introspect(JAM.policy.p9) {
          v163.write("\n");
        }
      }
    } else {
      var v180 = numberPosition$$1 == "right";
      if (v180) {
        var v165 = outputWindow.document;
        var v531 = lineOfText$$1;
        introspect(JAM.policy.p19) {
          var v532 = adjustNumbering(i$$6, numberingAdjustment)
        }
        var v421 = v531 + v532;
        var v166 = v421 + "\n";
        introspect(JAM.policy.p18) {
          v165.write(v166);
        }
        var v170 = strands$$1 == "two";
        if (v170) {
          var v167 = outputWindow.document;
          var v533 = complement(lineOfText$$1);
          introspect(JAM.policy.p19) {
            var v534 = adjustNumbering(i$$6, numberingAdjustment)
          }
          var v422 = v533 + v534;
          var v168 = v422 + "\n";
          introspect(JAM.policy.p18) {
            v167.write(v168);
          }
          var v169 = outputWindow.document;
          introspect(JAM.policy.p9) {
            v169.write("\n");
          }
        }
      } else {
        var v179 = numberPosition$$1 == "above";
        if (v179) {
          var v171 = outputWindow.document;
          var v172 = aboveNum + "\n";
          introspect(JAM.policy.p18) {
            v171.write(v172);
          }
          var v173 = outputWindow.document;
          var v174 = lineOfText$$1 + "\n";
          introspect(JAM.policy.p18) {
            v173.write(v174);
          }
          var v178 = strands$$1 == "two";
          if (v178) {
            var v175 = outputWindow.document;
            var v423 = complement(lineOfText$$1);
            var v176 = v423 + "\n";
            introspect(JAM.policy.p18) {
              v175.write(v176);
            }
            var v177 = outputWindow.document;
            introspect(JAM.policy.p9) {
              v177.write("\n");
            }
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
    var v424 = basePerLine$$3 / groupSize$$3;
    var v189 = j$$8 <= v424;
    for (;v189;) {
      var v185 = k$$2 < groupSize$$3;
      for (;v185;) {
        var v425 = i$$7 + k$$2;
        var v183 = v425 >= stopBase$$3;
        if (v183) {
          break;
        }
        var v426 = k$$2 + i$$7;
        introspect(JAM.policy.p18) {
          var v184 = text$$13.charAt(v426)
        }
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
      var v427 = basePerLine$$3 / groupSize$$3;
      v189 = j$$8 <= v427;
    }
    var v200 = numberPosition$$2 == "left";
    if (v200) {
      var v190 = outputWindow.document;
      var v535 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v428 = v535 + lineOfText$$2;
      var v191 = v428 + "\n";
      introspect(JAM.policy.p18) {
        v190.write(v191);
      }
    } else {
      var v199 = numberPosition$$2 == "right";
      if (v199) {
        var v192 = outputWindow.document;
        var v429 = lineOfText$$2 + i$$7;
        var v193 = v429 + "\n";
        introspect(JAM.policy.p18) {
          v192.write(v193);
        }
      } else {
        var v198 = numberPosition$$2 == "above";
        if (v198) {
          var v194 = outputWindow.document;
          var v195 = aboveNum$$1 + "\n";
          introspect(JAM.policy.p18) {
            v194.write(v195);
          }
          var v196 = outputWindow.document;
          var v197 = lineOfText$$2 + "\n";
          introspect(JAM.policy.p18) {
            v196.write(v197);
          }
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
  var v593 = sequence$$13.length;
  var v536 = v593 <= firstIndexToMutate;
  var v594 = !v536;
  if (v594) {
    v536 = lastIndexToMutate < 0;
  }
  var v430 = v536;
  var v537 = !v430;
  if (v537) {
    v430 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v202 = v430;
  if (v202) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v210 = i$$8 < numMut;
  for (;v210;) {
    maxNum = sequence$$13.length;
    var v431 = Math.random();
    var v203 = v431 * maxNum;
    introspect(JAM.policy.p15) {
      randNum = Math.floor(v203);
    }
    var v432 = randNum < firstIndexToMutate;
    var v538 = !v432;
    if (v538) {
      v432 = randNum > lastIndexToMutate;
    }
    var v204 = v432;
    if (v204) {
      numMut++;
      i$$8++;
      v210 = i$$8 < numMut;
      continue;
    }
    introspect(JAM.policy.p15) {
      currentChar = sequence$$13.charAt(randNum);
    }
    needNewChar = true;
    for (;needNewChar;) {
      var v433 = Math.random();
      var v434 = components$$1.length;
      var v205 = v433 * v434;
      introspect(JAM.policy.p15) {
        componentsIndex = Math.round(v205);
      }
      var v435 = components$$1.length;
      var v206 = componentsIndex == v435;
      if (v206) {
        componentsIndex = 0;
      }
      var v436 = components$$1[componentsIndex];
      var v207 = v436 != currentChar;
      if (v207) {
        needNewChar = false;
      }
    }
    introspect(JAM.policy.p13) {
      var v437 = sequence$$13.substring(0, randNum)
    }
    var v438 = components$$1[componentsIndex];
    var v208 = v437 + v438;
    var v439 = randNum + 1;
    var v440 = sequence$$13.length;
    introspect(JAM.policy.p21) {
      var v209 = sequence$$13.substring(v439, v440)
    }
    sequence$$13 = v208 + v209;
    i$$8++;
    v210 = i$$8 < numMut;
  }
  var v211 = outputWindow.document;
  var v212 = addReturns(sequence$$13);
  introspect(JAM.policy.p18) {
    v211.write(v212);
  }
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v217 = j$$9 < lengthOut$$1;
  for (;v217;) {
    var v441 = Math.random();
    var v442 = components$$2.length;
    var v213 = v441 * v442;
    introspect(JAM.policy.p15) {
      tempNum$$1 = Math.floor(v213);
    }
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v443 = sequence$$14.length;
    var v216 = v443 == 60;
    if (v216) {
      var v214 = outputWindow.document;
      var v215 = sequence$$14 + "\n";
      introspect(JAM.policy.p18) {
        v214.write(v215);
      }
      sequence$$14 = "";
    }
    j$$9++;
    v217 = j$$9 < lengthOut$$1;
  }
  var v218 = outputWindow.document;
  var v219 = sequence$$14 + "\n";
  introspect(JAM.policy.p18) {
    v218.write(v219);
  }
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
    introspect(JAM.policy.p13) {
      var v220 = sequence$$15.substring(0, lookAhead)
    }
    shiftValue = v220.length;
    var v595 = sequence$$15.length;
    var v539 = v595 - lookAhead;
    var v540 = sequence$$15.length;
    introspect(JAM.policy.p21) {
      var v444 = sequence$$15.substring(v539, v540)
    }
    var v221 = v444 + sequence$$15;
    introspect(JAM.policy.p13) {
      var v222 = sequence$$15.substring(0, lookAhead)
    }
    sequence$$15 = v221 + v222;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v224 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v224.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  }
  var v225 = outputWindow.document;
  var v596 = '<tr><td class="title" width="200px">' + "Site:";
  var v541 = v596 + '</td><td class="title">';
  var v445 = v541 + "Positions:";
  var v226 = v445 + "</td></tr>\n";
  introspect(JAM.policy.p18) {
    v225.write(v226);
  }
  var i$$9 = 0;
  var v446 = arrayOfItems.length;
  var v242 = i$$9 < v446;
  for (;v242;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v447 = arrayOfItems[i$$9];
    introspect(JAM.policy.p15) {
      var v227 = v447.match(/\/.+\//)
    }
    matchExp = v227 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    var v597 = arrayOfItems[i$$9];
    introspect(JAM.policy.p15) {
      var v542 = v597.match(/\)\D*\d+/)
    }
    var v448 = v542.toString();
    introspect(JAM.policy.p16) {
      var v228 = v448.replace(/\)\D*/, "")
    }
    cutDistance = parseFloat(v228);
    introspect(JAM.policy.p18) {
      var v234 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    for (;v234;) {
      var v229 = matchExp.lastIndex;
      matchPosition = v229 - cutDistance;
      var v449 = matchPosition >= lowerLimit;
      if (v449) {
        v449 = matchPosition < upperLimit;
      }
      var v232 = v449;
      if (v232) {
        timesFound++;
        var v230 = tempString$$1 + ", ";
        var v450 = matchPosition - shiftValue;
        var v231 = v450 + 1;
        tempString$$1 = v230 + v231;
      }
      var v451 = matchExp.lastIndex;
      var v543 = RegExp.lastMatch;
      var v452 = v543.length;
      var v233 = v451 - v452;
      matchExp.lastIndex = v233 + 1;
      introspect(JAM.policy.p18) {
        v234 = matchArray$$1 = matchExp.exec(sequence$$15);
      }
    }
    introspect(JAM.policy.p15) {
      var v453 = tempString$$1.search(/\d/)
    }
    var v235 = v453 != -1;
    if (v235) {
      introspect(JAM.policy.p16) {
        tempString$$1 = tempString$$1.replace(/none,\s*/, "");
      }
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
    var v677 = '<tr><td class="' + backGroundClass;
    var v664 = v677 + '">';
    var v700 = arrayOfItems[i$$9];
    introspect(JAM.policy.p15) {
      var v690 = v700.match(/\([^\(]+\)/)
    }
    var v678 = v690.toString();
    introspect(JAM.policy.p16) {
      var v665 = v678.replace(/\(|\)/g, "")
    }
    var v651 = v664 + v665;
    var v633 = v651 + '</td><td class="';
    var v598 = v633 + backGroundClass;
    var v544 = v598 + '">';
    var v454 = v544 + tempString$$1;
    var v241 = v454 + "</td></tr>\n";
    introspect(JAM.policy.p18) {
      v240.write(v241);
    }
    timesFound = 0;
    i$$9++;
    var v455 = arrayOfItems.length;
    v242 = i$$9 < v455;
  }
  var v243 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v243.write("</tbody></table>\n");
  }
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v244 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v244.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  }
  var v245 = outputWindow.document;
  var v652 = '<tr><td class="title">' + "Pattern:";
  var v634 = v652 + '</td><td class="title">';
  var v599 = v634 + "Times found:";
  var v545 = v599 + '</td><td class="title">';
  var v456 = v545 + "Percentage:";
  var v246 = v456 + "</td></tr>\n";
  introspect(JAM.policy.p18) {
    v245.write(v246);
  }
  var i$$10 = 0;
  var v457 = arrayOfItems$$1.length;
  var v255 = i$$10 < v457;
  for (;v255;) {
    var tempNumber = 0;
    var v458 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p15) {
      var v247 = v458.match(/\/[^\/]+\//)
    }
    var matchExp$$1 = v247 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    introspect(JAM.policy.p18) {
      var v459 = sequence$$16.search(matchExp$$1)
    }
    var v249 = v459 != -1;
    if (v249) {
      introspect(JAM.policy.p18) {
        var v248 = sequence$$16.match(matchExp$$1)
      }
      tempNumber = v248.length;
    }
    var percentage = 0;
    var v546 = originalLength + 1;
    var v635 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p15) {
      var v600 = v635.match(/\d+/)
    }
    var v547 = parseFloat(v600);
    var v460 = v546 - v547;
    var v252 = v460 > 0;
    if (v252) {
      var v250 = 100 * tempNumber;
      var v461 = originalLength + 1;
      var v601 = arrayOfItems$$1[i$$10];
      introspect(JAM.policy.p15) {
        var v548 = v601.match(/\d+/)
      }
      var v462 = parseFloat(v548);
      var v251 = v461 - v462;
      percentage = v250 / v251;
    }
    var v253 = outputWindow.document;
    var v701 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p15) {
      var v691 = v701.match(/\([^\(]+\)\b/)
    }
    var v679 = v691.toString();
    introspect(JAM.policy.p16) {
      var v666 = v679.replace(/\(|\)/g, "")
    }
    var v653 = "<tr><td>" + v666;
    var v636 = v653 + "</td><td>";
    var v602 = v636 + tempNumber;
    var v549 = v602 + "</td><td>";
    introspect(JAM.policy.p11) {
      var v550 = percentage.toFixed(2)
    }
    var v463 = v549 + v550;
    var v254 = v463 + "</td></tr>\n";
    introspect(JAM.policy.p18) {
      v253.write(v254);
    }
    i$$10++;
    var v464 = arrayOfItems$$1.length;
    v255 = i$$10 < v464;
  }
  var v256 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v256.write("</tbody></table>\n");
  }
  return true;
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v465 = sequence$$17.length;
  var v263 = v465 > 0;
  for (;v263;) {
    maxNum$$1 = sequence$$17.length;
    var v466 = Math.random();
    var v257 = v466 * maxNum$$1;
    introspect(JAM.policy.p15) {
      randNum$$1 = Math.floor(v257);
    }
    introspect(JAM.policy.p15) {
      tempChar$$2 = sequence$$17.charAt(randNum$$1);
    }
    tempSeq = tempSeq + tempChar$$2;
    introspect(JAM.policy.p13) {
      tempString1 = sequence$$17.substring(0, randNum$$1);
    }
    var v258 = randNum$$1 + 1;
    var v259 = sequence$$17.length;
    introspect(JAM.policy.p16) {
      tempString2 = sequence$$17.substring(v258, v259);
    }
    sequence$$17 = tempString1 + tempString2;
    var v467 = tempSeq.length;
    var v262 = v467 == 60;
    if (v262) {
      var v260 = outputWindow.document;
      var v261 = tempSeq + "\n";
      introspect(JAM.policy.p18) {
        v260.write(v261);
      }
      tempSeq = "";
    }
    var v468 = sequence$$17.length;
    v263 = v468 > 0;
  }
  var v264 = outputWindow.document;
  var v265 = tempSeq + "\n";
  introspect(JAM.policy.p18) {
    v264.write(v265);
  }
  return true;
}
function genbankTrans(theDocument) {
  var maxInput$$3 = 2E5;
  var v469 = testScript();
  var v266 = v469 == false;
  if (v266) {
    return false;
  }
  var v680 = theDocument.forms;
  var v667 = v680[0];
  var v654 = v667.elements;
  var v637 = v654[0];
  var v603 = checkFormElement(v637);
  var v551 = v603 == false;
  var v605 = !v551;
  if (v605) {
    var v692 = theDocument.forms;
    var v681 = v692[0];
    var v668 = v681.elements;
    var v655 = v668[0];
    var v638 = v655.value;
    var v604 = verifyGenBankFeat(v638);
    v551 = v604 == false;
  }
  var v470 = v551;
  var v553 = !v470;
  if (v553) {
    var v682 = theDocument.forms;
    var v669 = v682[0];
    var v656 = v669.elements;
    var v639 = v656[0];
    var v606 = v639.value;
    introspect(JAM.policy.p19) {
      var v552 = checkTextLength(v606, maxInput$$3)
    }
    v470 = v552 == false;
  }
  var v267 = v470;
  if (v267) {
    return false;
  }
  openWindow("GenBank Trans Extractor");
  openPre();
  var v640 = theDocument.forms;
  var v607 = v640[0];
  var v554 = v607.elements;
  var v471 = v554[0];
  var v268 = v471.value;
  genBankTransExtract(v268);
  closePre();
  closeWindow();
  return true;
}
function genBankTransExtract(genBankFile$$2) {
  var v269 = "_" + genBankFile$$2;
  genBankFile$$2 = v269 + "_";
  introspect(JAM.policy.p15) {
    var recordArray = genBankFile$$2.split(/LOCUS\s\s\s[^\f\n\r]*/m)
  }
  var i$$11 = 1;
  var v472 = recordArray.length;
  var v277 = i$$11 < v472;
  for (;v277;) {
    var v270 = recordArray[i$$11];
    introspect(JAM.policy.p15) {
      var mainArray = v270.split(/DEFINITION|ACCESSION|FEATURES|ORIGIN[^\f\n\r]*/)
    }
    var v555 = mainArray[1];
    introspect(JAM.policy.p16) {
      var v473 = v555.replace(/[\f\n\r\t]+$/g, "")
    }
    var v271 = filterFastaTitle(v473);
    var title$$9 = v271 + "\n";
    var v272 = mainArray[4];
    introspect(JAM.policy.p15) {
      var dnaSequenceArray = v272.split(/\/{2}/)
    }
    var v273 = outputWindow.document;
    var v274 = title$$9 + "\n";
    introspect(JAM.policy.p18) {
      v273.write(v274);
    }
    var v474 = dnaSequenceArray.length;
    var v275 = v474 == 1;
    if (v275) {
      alert("The entire GenBank file may not have been processed.");
      outputWindow.focus();
    }
    var v276 = mainArray[3];
    introspect(JAM.policy.p15) {
      var featureArray = v276.split(/[\f\n\r] {5,12}\b/)
    }
    showFeatureTrans(featureArray);
    i$$11++;
    var v475 = recordArray.length;
    v277 = i$$11 < v475;
  }
  return true;
}
function showFeatureTrans(arrayOfFeatures) {
  var featureTitle = "";
  var theTitle = "";
  var removedTitle = "";
  var firstQualifier = "";
  var translation = "";
  var translationFound = false;
  var i$$12 = 1;
  var v476 = arrayOfFeatures.length;
  var v288 = i$$12 < v476;
  for (;v288;) {
    var v556 = arrayOfFeatures[i$$12];
    introspect(JAM.policy.p15) {
      var v477 = v556.search(/\/translation/)
    }
    var v287 = v477 != -1;
    if (v287) {
      var v278 = arrayOfFeatures[i$$12];
      introspect(JAM.policy.p16) {
        var v737 = v278.replace(/[\[\]\*]/g, "")
      }
      arrayOfFeatures[i$$12] = v737;
      var v478 = arrayOfFeatures[i$$12];
      introspect(JAM.policy.p15) {
        var v279 = v478.match(/[^ \f\n\r\t\v]+ /)
      }
      featureTitle = v279.toString();
      theTitle = new RegExp(featureTitle);
      var v280 = arrayOfFeatures[i$$12];
      introspect(JAM.policy.p22) {
        removedTitle = v280.replace(theTitle, "");
      }
      var v479 = arrayOfFeatures[i$$12];
      introspect(JAM.policy.p15) {
        var v281 = v479.match(/\/[^\f\n\r]+/)
      }
      firstQualifier = v281.toString();
      var v282 = outputWindow.document;
      var v608 = filterFastaTitle(featureTitle);
      var v557 = "&gt;" + v608;
      var v558 = filterFastaTitle(firstQualifier);
      var v480 = v557 + v558;
      var v283 = v480 + "\n";
      introspect(JAM.policy.p18) {
        v282.write(v283);
      }
      var v284 = arrayOfFeatures[i$$12];
      introspect(JAM.policy.p15) {
        translation = v284.match(/\/translation="[^"]+"/);
      }
      translation = translation.toString();
      introspect(JAM.policy.p16) {
        translation = translation.replace(/\/translation/, "");
      }
      translation = removeNonProtein(translation);
      translation = addReturns(translation);
      var v285 = outputWindow.document;
      introspect(JAM.policy.p18) {
        v285.write(translation);
      }
      translationFound = true;
      var v286 = outputWindow.document;
      introspect(JAM.policy.p9) {
        v286.write("\n\n");
      }
    }
    i$$12++;
    var v481 = arrayOfFeatures.length;
    v288 = i$$12 < v481;
  }
  var v290 = translationFound == false;
  if (v290) {
    var v289 = outputWindow.document;
    introspect(JAM.policy.p9) {
      v289.write("No translations were found.\n");
    }
  }
  return true;
}
document.onload = v2;
introspect(JAM.policy.p9) {
  var v291 = document.getElementById("submitbtn")
}
v291.onclick = v3;
introspect(JAM.policy.p9) {
  var v292 = document.getElementById("clearbtn")
}
v292.onclick = v4
