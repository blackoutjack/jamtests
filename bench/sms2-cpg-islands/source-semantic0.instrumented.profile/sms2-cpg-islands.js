
JAM.startProfile('load');
function v4() {
  var v583 = document.forms;
  var v507 = v583[0];
  var v308 = v507.elements;
  var v5 = v308[0];
  v5.value = " ";
  var v584 = document.forms;
  var v508 = v584[0];
  var v309 = v508.elements;
  var v6 = v309[4];
  v6.value = " ";
  return;
}
function v3() {
  try {
    cpgIslands();
  } catch (e$$5) {
    var v7 = "The following error was encountered: " + e$$5;
    alert(v7);
  }
  return;
}
function v2() {
  var v310 = document.main_form;
  var v8 = v310.main_submit;
  v8.focus();
  return;
}
function addReturns(sequence) {
  function v0(str$$6, p1, offset$$8, s$$2) {
    return p1 + "\n";
  }
  introspect(JAM.policy.p15) {
    sequence = sequence.replace(/(.{60})/g, v0);
  }
  return sequence;
}
function checkAlign(arrayOfTitles, arrayOfSequences) {
  var v9 = arrayOfSequences[0];
  var lengthOfAlign = v9.length;
  var v311 = arrayOfSequences.length;
  var v10 = v311 < 2;
  if (v10) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v312 = arrayOfTitles.length;
  var v12 = i$$1 < v312;
  for (;v12;) {
    var v633 = arrayOfTitles[i$$1];
    introspect(JAM.policy.p16) {
      var v585 = v633.search(/\S/)
    }
    var v509 = v585 == -1;
    var v587 = !v509;
    if (v587) {
      var v634 = arrayOfSequences[i$$1];
      introspect(JAM.policy.p16) {
        var v586 = v634.search(/\S/)
      }
      v509 = v586 == -1;
    }
    var v313 = v509;
    var v511 = !v313;
    if (v511) {
      var v588 = arrayOfSequences[i$$1];
      var v510 = v588.length;
      v313 = v510 != lengthOfAlign;
    }
    var v11 = v313;
    if (v11) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v314 = arrayOfTitles.length;
    v12 = i$$1 < v314;
  }
  return true;
}
function checkCodonTable(codonTable) {
  introspect(JAM.policy.p16) {
    var v666 = codonTable.search(/AmAcid/)
  }
  var v635 = v666 == -1;
  var v668 = !v635;
  if (v668) {
    introspect(JAM.policy.p16) {
      var v667 = codonTable.search(/Codon/)
    }
    v635 = v667 == -1;
  }
  var v589 = v635;
  var v637 = !v589;
  if (v637) {
    introspect(JAM.policy.p16) {
      var v636 = codonTable.search(/Number/)
    }
    v589 = v636 == -1;
  }
  var v512 = v589;
  var v591 = !v512;
  if (v591) {
    introspect(JAM.policy.p16) {
      var v590 = codonTable.search(/\/1000/)
    }
    v512 = v590 == -1;
  }
  var v315 = v512;
  var v514 = !v315;
  if (v514) {
    introspect(JAM.policy.p16) {
      var v513 = codonTable.search(/Fraction\s*\.\./)
    }
    v315 = v513 == -1;
  }
  var v13 = v315;
  if (v13) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v515 = formElement.value;
  introspect(JAM.policy.p16) {
    var v316 = v515.search(/\S/)
  }
  var v14 = v316 == -1;
  if (v14) {
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
  var v317 = arrayOfPatterns.length;
  var v17 = z$$2 < v317;
  for (;v17;) {
    var v516 = arrayOfPatterns[z$$2];
    introspect(JAM.policy.p16) {
      var v318 = v516.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/)
    }
    var v15 = v318 == -1;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v517 = arrayOfPatterns[z$$2];
    var v319 = moreExpressionCheck(v517);
    var v16 = v319 == false;
    if (v16) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v320 = arrayOfPatterns.length;
    v17 = z$$2 < v320;
  }
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v18);
  var v19 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v19);
  var j = 0;
  var v321 = arrayOfPatterns.length;
  var v23 = j < v321;
  for (;v23;) {
    var v518 = arrayOfPatterns[j];
    introspect(JAM.policy.p16) {
      var v322 = v518.match(/\/.+\//)
    }
    var v20 = v322 + "gi";
    var v755 = eval(v20);
    geneticCodeMatchExp[j] = v755;
    var v323 = arrayOfPatterns[j];
    introspect(JAM.policy.p16) {
      var v21 = v323.match(/=[a-zA-Z\*]/)
    }
    var v756 = v21.toString();
    geneticCodeMatchResult[j] = v756;
    var v22 = geneticCodeMatchResult[j];
    introspect(JAM.policy.p15) {
      var v757 = v22.replace(/=/g, "")
    }
    geneticCodeMatchResult[j] = v757;
    j++;
    var v324 = arrayOfPatterns.length;
    v23 = j < v324;
  }
  var i$$2 = 0;
  var v519 = testSequence.length;
  var v325 = v519 - 3;
  var v30 = i$$2 <= v325;
  for (;v30;) {
    var v24 = i$$2 + 3;
    introspect(JAM.policy.p15) {
      codon = testSequence.substring(i$$2, v24);
    }
    j = 0;
    var v326 = geneticCodeMatchExp.length;
    var v28 = j < v326;
    for (;v28;) {
      var v520 = geneticCodeMatchExp[j];
      introspect(JAM.policy.p17) {
        var v327 = codon.search(v520)
      }
      var v27 = v327 != -1;
      if (v27) {
        var v26 = oneMatch == true;
        if (v26) {
          var v328 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v25 = v328 + ".";
          alert(v25);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v329 = geneticCodeMatchExp.length;
      v28 = j < v329;
    }
    var v29 = oneMatch == false;
    if (v29) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v521 = testSequence.length;
    var v330 = v521 - 3;
    v30 = i$$2 <= v330;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v331 = arrayOfPatterns$$1.length;
  var v32 = z$$3 < v331;
  for (;v32;) {
    var v522 = arrayOfPatterns$$1[z$$3];
    introspect(JAM.policy.p16) {
      var v332 = v522.search(/[^acdefghiklmnpqrstvwyz]/i)
    }
    var v31 = v332 != -1;
    if (v31) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v333 = arrayOfPatterns$$1.length;
    v32 = z$$3 < v333;
  }
  var i$$3 = 0;
  var v334 = arrayOfPatterns$$1.length;
  var v36 = i$$3 < v334;
  for (;v36;) {
    var v523 = arrayOfPatterns$$1[i$$3];
    var v335 = "[" + v523;
    var v33 = v335 + "]";
    var re = new RegExp(v33, "gi");
    var j$$1 = i$$3 + 1;
    var v336 = arrayOfPatterns$$1.length;
    var v35 = j$$1 < v336;
    for (;v35;) {
      var v524 = arrayOfPatterns$$1[j$$1];
      introspect(JAM.policy.p17) {
        var v337 = v524.search(re)
      }
      var v34 = v337 != -1;
      if (v34) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v338 = arrayOfPatterns$$1.length;
      v35 = j$$1 < v338;
    }
    i$$3++;
    var v339 = arrayOfPatterns$$1.length;
    v36 = i$$3 < v339;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v340 = arrayOfPatterns$$2.length;
  var v39 = z$$4 < v340;
  for (;v39;) {
    var v525 = arrayOfPatterns$$2[z$$4];
    introspect(JAM.policy.p16) {
      var v341 = v525.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i)
    }
    var v37 = v341 == -1;
    if (v37) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v526 = arrayOfPatterns$$2[z$$4];
    var v342 = moreExpressionCheck(v526);
    var v38 = v342 == false;
    if (v38) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v343 = arrayOfPatterns$$2.length;
    v39 = z$$4 < v343;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v592 = getSequenceFromFasta(text$$7);
  introspect(JAM.policy.p15) {
    var v527 = v592.replace(/[^A-Za-z]/g, "")
  }
  var v344 = v527.length;
  var v41 = v344 > maxInput;
  if (v41) {
    var v345 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v40 = v345 + " characters.";
    alert(v40);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v346 = text$$8.length;
  var v43 = v346 > maxInput$$1;
  if (v43) {
    var v347 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v42 = v347 + " characters.";
    alert(v42);
    return false;
  } else {
    return true;
  }
  return;
}
function complement(dnaSequence) {
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/g/g, "1");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/c/g, "2");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/1/g, "c");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/2/g, "g");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/G/g, "1");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/C/g, "2");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/1/g, "C");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/2/g, "G");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/a/g, "1");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/t/g, "2");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/1/g, "t");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/2/g, "a");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/A/g, "1");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/T/g, "2");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/1/g, "T");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/2/g, "A");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/u/g, "a");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/U/g, "A");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/r/g, "1");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/y/g, "2");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/1/g, "y");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/2/g, "r");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/R/g, "1");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/Y/g, "2");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/1/g, "Y");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/2/g, "R");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/k/g, "1");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/m/g, "2");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/1/g, "m");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/2/g, "k");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/K/g, "1");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/M/g, "2");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/1/g, "M");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/2/g, "K");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/b/g, "1");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/v/g, "2");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/1/g, "v");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/2/g, "b");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/B/g, "1");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/V/g, "2");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/1/g, "V");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/2/g, "B");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/d/g, "1");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/h/g, "2");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/1/g, "h");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/2/g, "d");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/D/g, "1");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/H/g, "2");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/1/g, "H");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/2/g, "D");
  }
  return dnaSequence;
}
function closeForm() {
  var v44 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v44.write("</form>");
  }
  return true;
}
function closePre() {
  var v45 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v45.write("</div>");
  }
  var v46 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v46.write("</pre>\n");
  }
  return;
}
function closeTextArea() {
  var v47 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v47.write("</textarea>");
  }
  return true;
}
function closeWindow() {
  var v48 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v48.write("</body>\n</html>\n");
  }
  outputWindow.status = "Done.";
  var v49 = outputWindow.document;
  v49.close();
  return;
}
function convertDegenerates(sequence$$1) {
  sequence$$1 = sequence$$1.toLowerCase();
  introspect(JAM.policy.p15) {
    sequence$$1 = sequence$$1.replace(/t/g, "[TU]");
  }
  introspect(JAM.policy.p15) {
    sequence$$1 = sequence$$1.replace(/r/g, "[AGR]");
  }
  introspect(JAM.policy.p15) {
    sequence$$1 = sequence$$1.replace(/y/g, "[CTUY]");
  }
  introspect(JAM.policy.p15) {
    sequence$$1 = sequence$$1.replace(/s/g, "[GCS]");
  }
  introspect(JAM.policy.p15) {
    sequence$$1 = sequence$$1.replace(/w/g, "[ATUW]");
  }
  introspect(JAM.policy.p15) {
    sequence$$1 = sequence$$1.replace(/k/g, "[GTUK]");
  }
  introspect(JAM.policy.p15) {
    sequence$$1 = sequence$$1.replace(/m/g, "[ACM]");
  }
  introspect(JAM.policy.p15) {
    sequence$$1 = sequence$$1.replace(/b/g, "[CGTUBSKY]");
  }
  introspect(JAM.policy.p15) {
    sequence$$1 = sequence$$1.replace(/d/g, "[AGTUDRKW]");
  }
  introspect(JAM.policy.p15) {
    sequence$$1 = sequence$$1.replace(/h/g, "[ACTUHMYW]");
  }
  introspect(JAM.policy.p15) {
    sequence$$1 = sequence$$1.replace(/v/g, "[ACGVSMR]");
  }
  introspect(JAM.policy.p15) {
    sequence$$1 = sequence$$1.replace(/n/g, "[ACGTURYSWKMBDHVN]");
  }
  return sequence$$1;
}
function earlyCheckAlign(alignArray) {
  var v348 = alignArray.length;
  var v50 = v348 < 3;
  if (v50) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v349 = alignArray.length;
  var v52 = i$$4 < v349;
  for (;v52;) {
    var v528 = alignArray[i$$4];
    introspect(JAM.policy.p16) {
      var v350 = v528.search(/[^\s]+\s/)
    }
    var v51 = v350 == -1;
    if (v51) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v351 = alignArray.length;
    v52 = i$$4 < v351;
  }
  return true;
}
function filterAlignSeq(alignSeq) {
  introspect(JAM.policy.p15) {
    alignSeq = alignSeq.replace(/[^abcdefghiklmnpqrstvwxyz\.\-]/gi, "");
  }
  return alignSeq;
}
function filterFastaTitle(sequenceTitle) {
  introspect(JAM.policy.p15) {
    sequenceTitle = sequenceTitle.replace(/\s{2,}/g, " ");
  }
  introspect(JAM.policy.p15) {
    sequenceTitle = sequenceTitle.replace(/^\s*/g, "");
  }
  introspect(JAM.policy.p15) {
    sequenceTitle = sequenceTitle.replace(/[\f\n\r\t]+$/g, "\n");
  }
  introspect(JAM.policy.p15) {
    return sequenceTitle.replace(/[\<\>]\n/gi, "");
  }
}
function getArrayOfFasta(sequenceData) {
  var arrayOfFasta = new Array;
  var matchArray;
  var re$$1 = /\>[^\>]+/g;
  introspect(JAM.policy.p16) {
    var v352 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v55 = v352 != -1;
  if (v55) {
    introspect(JAM.policy.p17) {
      var v54 = matchArray = re$$1.exec(sequenceData)
    }
    for (;v54;) {
      var v53 = matchArray[0];
      introspect(JAM.policy.p17) {
        arrayOfFasta.push(v53);
      }
      introspect(JAM.policy.p17) {
        v54 = matchArray = re$$1.exec(sequenceData);
      }
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v353 = sequence$$2.length;
  var v56 = "&gt;results for " + v353;
  var stringToReturn = v56 + " residue sequence ";
  introspect(JAM.policy.p16) {
    var v354 = fastaSequenceTitle.search(/[^\s]/)
  }
  var v58 = v354 != -1;
  if (v58) {
    var v355 = stringToReturn + '"';
    var v57 = v355 + fastaSequenceTitle;
    stringToReturn = v57 + '"';
  }
  var v356 = stringToReturn + ' starting "';
  introspect(JAM.policy.p13) {
    var v357 = sequence$$2.substring(0, 10)
  }
  var v59 = v356 + v357;
  stringToReturn = v59 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v358 = sequenceOne.length;
  var v60 = "Search results for " + v358;
  var stringToReturn$$1 = v60 + " residue sequence ";
  introspect(JAM.policy.p16) {
    var v359 = fastaSequenceTitleOne.search(/[^\s]/)
  }
  var v62 = v359 != -1;
  if (v62) {
    var v360 = stringToReturn$$1 + '"';
    var v61 = v360 + fastaSequenceTitleOne;
    stringToReturn$$1 = v61 + '"';
  }
  var v361 = stringToReturn$$1 + ' starting "';
  introspect(JAM.policy.p13) {
    var v362 = sequenceOne.substring(0, 10)
  }
  var v63 = v361 + v362;
  stringToReturn$$1 = v63 + '"\n';
  var v363 = stringToReturn$$1 + "and ";
  var v364 = sequenceTwo.length;
  var v64 = v363 + v364;
  stringToReturn$$1 = v64 + " residue sequence ";
  introspect(JAM.policy.p16) {
    var v365 = fastaSequenceTitleTwo.search(/[^\s]/)
  }
  var v66 = v365 != -1;
  if (v66) {
    var v366 = stringToReturn$$1 + '"';
    var v65 = v366 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v65 + '"';
  }
  var v367 = stringToReturn$$1 + ' starting "';
  introspect(JAM.policy.p13) {
    var v368 = sequenceTwo.substring(0, 10)
  }
  var v67 = v367 + v368;
  stringToReturn$$1 = v67 + '"';
  var v68 = '<div class="info">' + stringToReturn$$1;
  return v68 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v69 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v69);
  var j$$2 = 0;
  var v369 = arrayOfPatterns$$3.length;
  var v71 = j$$2 < v369;
  for (;v71;) {
    var v529 = arrayOfPatterns$$3[j$$2];
    introspect(JAM.policy.p16) {
      var v370 = v529.match(/\/.+\//)
    }
    var v70 = v370 + "gi";
    var v758 = eval(v70);
    geneticCodeMatchExp$$1[j$$2] = v758;
    j$$2++;
    var v371 = arrayOfPatterns$$3.length;
    v71 = j$$2 < v371;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v72 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v72);
  var j$$3 = 0;
  var v372 = arrayOfPatterns$$4.length;
  var v75 = j$$3 < v372;
  for (;v75;) {
    var v373 = arrayOfPatterns$$4[j$$3];
    introspect(JAM.policy.p16) {
      var v73 = v373.match(/=[a-zA-Z\*]/)
    }
    var v759 = v73.toString();
    geneticCodeMatchResult$$1[j$$3] = v759;
    var v74 = geneticCodeMatchResult$$1[j$$3];
    introspect(JAM.policy.p15) {
      var v760 = v74.replace(/=/g, "")
    }
    geneticCodeMatchResult$$1[j$$3] = v760;
    j$$3++;
    var v374 = arrayOfPatterns$$4.length;
    v75 = j$$3 < v374;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v375 = sequence$$3.length;
  var v76 = "Results for " + v375;
  var stringToReturn$$2 = v76 + " residue sequence ";
  introspect(JAM.policy.p16) {
    var v376 = fastaSequenceTitle$$1.search(/[^\s]/)
  }
  var v78 = v376 != -1;
  if (v78) {
    var v377 = stringToReturn$$2 + '"';
    var v77 = v377 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v77 + '"';
  }
  var v378 = stringToReturn$$2 + ' starting "';
  introspect(JAM.policy.p13) {
    var v379 = sequence$$3.substring(0, 10)
  }
  var v79 = v378 + v379;
  stringToReturn$$2 = v79 + '"';
  var v80 = '<div class="info">' + stringToReturn$$2;
  return v80 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v530 = "Results for " + topology;
  var v380 = v530 + " ";
  var v381 = sequence$$4.length;
  var v81 = v380 + v381;
  var stringToReturn$$3 = v81 + " residue sequence ";
  introspect(JAM.policy.p16) {
    var v382 = fastaSequenceTitle$$2.search(/[^\s]/)
  }
  var v83 = v382 != -1;
  if (v83) {
    var v383 = stringToReturn$$3 + '"';
    var v82 = v383 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v82 + '"';
  }
  var v384 = stringToReturn$$3 + ' starting "';
  introspect(JAM.policy.p13) {
    var v385 = sequence$$4.substring(0, 10)
  }
  var v84 = v384 + v385;
  stringToReturn$$3 = v84 + '"';
  var v85 = '<div class="info">' + stringToReturn$$3;
  return v85 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v386 = sequenceOne$$1.length;
  var v86 = "Alignment results for " + v386;
  var stringToReturn$$4 = v86 + " residue sequence ";
  introspect(JAM.policy.p16) {
    var v387 = fastaSequenceTitleOne$$1.search(/[^\s]/)
  }
  var v88 = v387 != -1;
  if (v88) {
    var v388 = stringToReturn$$4 + '"';
    var v87 = v388 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v87 + '"';
  }
  var v389 = stringToReturn$$4 + ' starting "';
  introspect(JAM.policy.p13) {
    var v390 = sequenceOne$$1.substring(0, 10)
  }
  var v89 = v389 + v390;
  stringToReturn$$4 = v89 + '"\n';
  var v391 = stringToReturn$$4 + "and ";
  var v392 = sequenceTwo$$1.length;
  var v90 = v391 + v392;
  stringToReturn$$4 = v90 + " residue sequence ";
  introspect(JAM.policy.p16) {
    var v393 = fastaSequenceTitleTwo$$1.search(/[^\s]/)
  }
  var v92 = v393 != -1;
  if (v92) {
    var v394 = stringToReturn$$4 + '"';
    var v91 = v394 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v91 + '"';
  }
  var v395 = stringToReturn$$4 + ' starting "';
  introspect(JAM.policy.p13) {
    var v396 = sequenceTwo$$1.substring(0, 10)
  }
  var v93 = v395 + v396;
  stringToReturn$$4 = v93 + '"';
  var v94 = '<div class="info">' + stringToReturn$$4;
  return v94 + "</div>\n";
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v96 = j$$4 < lengthOut;
  for (;v96;) {
    var v397 = Math.random();
    var v398 = components.length;
    var v95 = v397 * v398;
    introspect(JAM.policy.p16) {
      tempNum = Math.floor(v95);
    }
    tempChar = components[tempNum];
    introspect(JAM.policy.p17) {
      sequenceArray.push(tempChar);
    }
    j$$4++;
    v96 = j$$4 < lengthOut;
  }
  introspect(JAM.policy.p11) {
    return sequenceArray.join("");
  }
}
function getSequenceFromFasta(sequenceRecord) {
  introspect(JAM.policy.p16) {
    var v399 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v97 = v399 != -1;
  if (v97) {
    introspect(JAM.policy.p15) {
      sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "");
    }
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  introspect(JAM.policy.p16) {
    var v400 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v99 = v400 != -1;
  if (v99) {
    introspect(JAM.policy.p15) {
      var v98 = sequenceRecord$$1.match(/\>[^\f\n\r]+[\f\n\r]/, "")
    }
    fastaTitle = v98.toString();
    introspect(JAM.policy.p15) {
      fastaTitle = fastaTitle.replace(/\>|[\f\n\r]/g, "");
    }
    introspect(JAM.policy.p15) {
      fastaTitle = fastaTitle.replace(/\s{2,}/g, " ");
    }
    introspect(JAM.policy.p15) {
      fastaTitle = fastaTitle.replace(/[\<\>]/gi, "");
    }
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  introspect(JAM.policy.p16) {
    var v733 = expressionToCheck.search(/\[[A-Za-z\|]*\[/)
  }
  var v726 = v733 != -1;
  var v735 = !v726;
  if (v735) {
    introspect(JAM.policy.p16) {
      var v734 = expressionToCheck.search(/\][A-Za-z\|]*\]/)
    }
    v726 = v734 != -1;
  }
  var v717 = v726;
  var v728 = !v717;
  if (v728) {
    introspect(JAM.policy.p16) {
      var v727 = expressionToCheck.search(/\[\]/)
    }
    v717 = v727 != -1;
  }
  var v708 = v717;
  var v719 = !v708;
  if (v719) {
    introspect(JAM.policy.p16) {
      var v718 = expressionToCheck.search(/\/[A-Za-z\|]*\]/)
    }
    v708 = v718 != -1;
  }
  var v696 = v708;
  var v710 = !v696;
  if (v710) {
    introspect(JAM.policy.p16) {
      var v709 = expressionToCheck.search(/\[[A-Za-z\|]*\//)
    }
    v696 = v709 != -1;
  }
  var v683 = v696;
  var v698 = !v683;
  if (v698) {
    introspect(JAM.policy.p16) {
      var v697 = expressionToCheck.search(/\|\|/)
    }
    v683 = v697 != -1;
  }
  var v669 = v683;
  var v685 = !v669;
  if (v685) {
    introspect(JAM.policy.p16) {
      var v684 = expressionToCheck.search(/\/\|/)
    }
    v669 = v684 != -1;
  }
  var v638 = v669;
  var v671 = !v638;
  if (v671) {
    introspect(JAM.policy.p16) {
      var v670 = expressionToCheck.search(/\|\//)
    }
    v638 = v670 != -1;
  }
  var v593 = v638;
  var v640 = !v593;
  if (v640) {
    introspect(JAM.policy.p16) {
      var v639 = expressionToCheck.search(/\[.\]/)
    }
    v593 = v639 != -1;
  }
  var v531 = v593;
  var v595 = !v531;
  if (v595) {
    introspect(JAM.policy.p16) {
      var v594 = expressionToCheck.search(/\</)
    }
    v531 = v594 != -1;
  }
  var v401 = v531;
  var v533 = !v401;
  if (v533) {
    introspect(JAM.policy.p16) {
      var v532 = expressionToCheck.search(/\>/)
    }
    v401 = v532 != -1;
  }
  var v100 = v401;
  if (v100) {
    return false;
  }
  return true;
}
function openForm() {
  var v101 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v101.write('<form action="">\n');
  }
  return true;
}
function openPre() {
  var v102 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v102.write("<pre>");
  }
  var v103 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v103.write('<div class="pre">');
  }
  return;
}
function openTextArea() {
  var v104 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v104.write('<br /><textarea rows="6" cols="61">\n');
  }
  return true;
}
function openWindow() {
  var title$$5 = "CpG Islands";
  _openWindow(title$$5);
  return;
}
function _openWindow(title$$6) {
  var isColor = true;
  introspect(JAM.policy.p14) {
    outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  }
  outputWindow.focus();
  var v105 = outputWindow.document;
  var v596 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v534 = v596 + "<head>\n";
  var v402 = v534 + "<title>Sequence Manipulation Suite</title>\n";
  var v106 = v402 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  introspect(JAM.policy.p17) {
    v105.write(v106);
  }
  if (isColor) {
    var v107 = outputWindow.document;
    var v748 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v744 = v748 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v740 = v744 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v736 = v740 + "div.info {font-weight: bold}\n";
    var v729 = v736 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v720 = v729 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v711 = v720 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v699 = v711 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v686 = v699 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v672 = v686 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v641 = v672 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v597 = v641 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v535 = v597 + "td.many {color: #000000}\n";
    var v403 = v535 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v108 = v403 + "</style>\n";
    introspect(JAM.policy.p17) {
      v107.write(v108);
    }
  } else {
    var v109 = outputWindow.document;
    var v752 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v749 = v752 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v745 = v749 + "div.title {display: none}\n";
    var v741 = v745 + "div.info {font-weight: bold}\n";
    var v737 = v741 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v730 = v737 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v721 = v730 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v712 = v721 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v700 = v712 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v687 = v700 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v673 = v687 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v642 = v673 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v598 = v642 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v536 = v598 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v404 = v536 + "img {display: none}\n";
    var v110 = v404 + "</style>\n";
    introspect(JAM.policy.p17) {
      v109.write(v110);
    }
  }
  var v111 = outputWindow.document;
  var v599 = "</head>\n" + '<body class="main">\n';
  var v537 = v599 + '<div class="title">';
  var v405 = v537 + title$$6;
  var v112 = v405 + " results</div>\n";
  introspect(JAM.policy.p17) {
    v111.write(v112);
  }
  outputWindow.status = "Please Wait.";
  return;
}
function openWindowAlign(title$$7) {
  _openWindowAlign(title$$7);
  return;
}
function _openWindowAlign(title$$8) {
  var isBackground = true;
  introspect(JAM.policy.p14) {
    outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  }
  outputWindow.focus();
  var v113 = outputWindow.document;
  var v600 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v538 = v600 + "<head>\n";
  var v406 = v538 + "<title>Sequence Manipulation Suite</title>\n";
  var v114 = v406 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  introspect(JAM.policy.p17) {
    v113.write(v114);
  }
  if (isBackground) {
    var v115 = outputWindow.document;
    var v750 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v746 = v750 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v742 = v746 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v738 = v742 + "div.info {font-weight: bold}\n";
    var v731 = v738 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v722 = v731 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v713 = v722 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v701 = v713 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v688 = v701 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v674 = v688 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v643 = v674 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v601 = v643 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v539 = v601 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v407 = v539 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v116 = v407 + "</style>\n";
    introspect(JAM.policy.p17) {
      v115.write(v116);
    }
  } else {
    var v117 = outputWindow.document;
    var v754 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v753 = v754 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v751 = v753 + "div.title {display: none}\n";
    var v747 = v751 + "div.info {font-weight: bold}\n";
    var v743 = v747 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v739 = v743 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v732 = v739 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v723 = v732 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v714 = v723 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v702 = v714 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v689 = v702 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v675 = v689 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v644 = v675 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v602 = v644 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v540 = v602 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v408 = v540 + "img {display: none}\n";
    var v118 = v408 + "</style>\n";
    introspect(JAM.policy.p17) {
      v117.write(v118);
    }
  }
  var v119 = outputWindow.document;
  var v603 = "</head>\n" + '<body class="main">\n';
  var v541 = v603 + '<div class="title">';
  var v409 = v541 + title$$8;
  var v120 = v409 + " results</div>\n";
  introspect(JAM.policy.p17) {
    v119.write(v120);
  }
  outputWindow.status = "Please Wait.";
  return;
}
function removeFormatting(sequence$$5) {
  introspect(JAM.policy.p15) {
    return sequence$$5.replace(/[\d\s]/g, "");
  }
}
function removeNonDna(sequence$$6) {
  introspect(JAM.policy.p15) {
    return sequence$$6.replace(/[^gatucryswkmbdhvnxGATUCRYSWKMBDHVNX]/g, "");
  }
}
function removeNonDnaStrict(sequence$$7) {
  introspect(JAM.policy.p15) {
    return sequence$$7.replace(/[^gatucGATUC]/g, "");
  }
}
function removeNonProtein(sequence$$8) {
  introspect(JAM.policy.p15) {
    return sequence$$8.replace(/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, "");
  }
}
function removeNonProteinStrict(sequence$$9) {
  introspect(JAM.policy.p15) {
    return sequence$$9.replace(/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, "");
  }
}
function removeNonProteinAllowDegen(sequence$$10) {
  introspect(JAM.policy.p15) {
    return sequence$$10.replace(/[^ABCDEFGHIKLMNPQRSTVWYXZabcdefghiklmnpqrstvwyxz\*]/g, "");
  }
}
function removeNonProteinAllowX(sequence$$11) {
  introspect(JAM.policy.p15) {
    return sequence$$11.replace(/[^ACDEFGHIKLMNPQRSTVWYZXacdefghiklmnpqrstvwyzx\*]/g, "");
  }
}
function removeWhiteSpace(text$$9) {
  introspect(JAM.policy.p15) {
    return text$$9.replace(/\s/g, "");
  }
}
function removeNonLetters(sequence$$12) {
  introspect(JAM.policy.p15) {
    return sequence$$12.replace(/[^A-Z]/gi, "");
  }
}
function reverse(dnaSequence$$1) {
  var tempDnaArray = new Array;
  introspect(JAM.policy.p16) {
    var v410 = dnaSequence$$1.search(/./)
  }
  var v121 = v410 != -1;
  if (v121) {
    introspect(JAM.policy.p16) {
      tempDnaArray = dnaSequence$$1.match(/./g);
    }
    tempDnaArray = tempDnaArray.reverse();
    introspect(JAM.policy.p11) {
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
  var v122 = j$$5 < lengthOfColumn;
  for (;v122;) {
    tempString = tempString + " ";
    j$$5++;
    v122 = j$$5 < lengthOfColumn;
  }
  var v123 = tempString + theNumber;
  theNumber = v123 + " ";
  var v124 = sequenceToAppend + theNumber;
  sequenceToAppend = v124 + tabIn;
  return sequenceToAppend;
}
function testScript() {
  function v1(str$$7, p1$$1, offset$$9, s$$3) {
    return p1$$1 + "X";
  }
  var testArray = new Array;
  var testString = "1234567890";
  introspect(JAM.policy.p17) {
    testArray.push(testString);
  }
  var v411 = testArray[0];
  var v125 = v411 != testString;
  if (v125) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  introspect(JAM.policy.p17) {
    var v412 = testString.search(re$$2)
  }
  var v126 = v412 == -1;
  if (v126) {
    alert("Regular expression 'm' flag not supported. See browser compatibility page.");
    return false;
  }
  var caughtException = false;
  try {
    re$$2 = eval("Exception handling not supported. Check browser compatibility page.");
  } catch (e$$4) {
    caughtException = true;
  }
  var v127 = !caughtException;
  if (v127) {
    alert("Exception handling not supported. See browser compatibility page.");
  }
  testString = "123";
  introspect(JAM.policy.p15) {
    testString = testString.replace(/(\d)/g, v1);
  }
  var v128 = testString != "1X2X3X";
  if (v128) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false;
  }
  var testNum = 2489.8237;
  introspect(JAM.policy.p9) {
    var v413 = testNum.toFixed(3)
  }
  var v129 = v413 != 2489.824;
  if (v129) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  introspect(JAM.policy.p9) {
    var v414 = testNum.toPrecision(5)
  }
  var v130 = v414 != 2489.8;
  if (v130) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  introspect(JAM.policy.p16) {
    var v415 = theNumber$$1.search(/\d/)
  }
  var v131 = v415 == -1;
  if (v131) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  introspect(JAM.policy.p16) {
    var v645 = emblFile.search(/ID/)
  }
  var v604 = v645 == -1;
  var v647 = !v604;
  if (v647) {
    introspect(JAM.policy.p16) {
      var v646 = emblFile.search(/AC/)
    }
    v604 = v646 == -1;
  }
  var v542 = v604;
  var v606 = !v542;
  if (v606) {
    introspect(JAM.policy.p16) {
      var v605 = emblFile.search(/DE/)
    }
    v542 = v605 == -1;
  }
  var v416 = v542;
  var v544 = !v416;
  if (v544) {
    introspect(JAM.policy.p16) {
      var v543 = emblFile.search(/SQ/)
    }
    v416 = v543 == -1;
  }
  var v132 = v416;
  if (v132) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  introspect(JAM.policy.p16) {
    var v417 = theNumber$$2.search(/\d/)
  }
  var v133 = v417 == -1;
  if (v133) {
    alert("Please enter a number.");
    return false;
  }
  var v135 = theNumber$$2 > maxInput$$2;
  if (v135) {
    var v418 = "Please enter a number less than or equal to " + maxInput$$2;
    var v134 = v418 + ".";
    alert(v134);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  introspect(JAM.policy.p16) {
    var v419 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i)
  }
  var v136 = v419 != -1;
  if (v136) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  introspect(JAM.policy.p16) {
    var v420 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i)
  }
  var v137 = v420 != -1;
  if (v137) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  introspect(JAM.policy.p16) {
    var v648 = genBankFile.search(/LOCUS/)
  }
  var v607 = v648 == -1;
  var v650 = !v607;
  if (v650) {
    introspect(JAM.policy.p16) {
      var v649 = genBankFile.search(/DEFINITION/)
    }
    v607 = v649 == -1;
  }
  var v545 = v607;
  var v609 = !v545;
  if (v609) {
    introspect(JAM.policy.p16) {
      var v608 = genBankFile.search(/ACCESSION/)
    }
    v545 = v608 == -1;
  }
  var v421 = v545;
  var v547 = !v421;
  if (v547) {
    introspect(JAM.policy.p16) {
      var v546 = genBankFile.search(/ORIGIN/)
    }
    v421 = v546 == -1;
  }
  var v138 = v421;
  if (v138) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  introspect(JAM.policy.p16) {
    var v651 = genBankFile$$1.search(/LOCUS/)
  }
  var v610 = v651 == -1;
  var v653 = !v610;
  if (v653) {
    introspect(JAM.policy.p16) {
      var v652 = genBankFile$$1.search(/DEFINITION/)
    }
    v610 = v652 == -1;
  }
  var v548 = v610;
  var v612 = !v548;
  if (v612) {
    introspect(JAM.policy.p16) {
      var v611 = genBankFile$$1.search(/ACCESSION/)
    }
    v548 = v611 == -1;
  }
  var v422 = v548;
  var v550 = !v422;
  if (v550) {
    introspect(JAM.policy.p16) {
      var v549 = genBankFile$$1.search(/ORIGIN/)
    }
    v422 = v549 == -1;
  }
  var v139 = v422;
  if (v139) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  introspect(JAM.policy.p16) {
    var v423 = genBankFile$$1.search(/FEATURES {13}/)
  }
  var v140 = v423 == -1;
  if (v140) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  introspect(JAM.policy.p16) {
    var v654 = emblFile$$1.search(/ID/)
  }
  var v613 = v654 == -1;
  var v656 = !v613;
  if (v656) {
    introspect(JAM.policy.p16) {
      var v655 = emblFile$$1.search(/AC/)
    }
    v613 = v655 == -1;
  }
  var v551 = v613;
  var v615 = !v551;
  if (v615) {
    introspect(JAM.policy.p16) {
      var v614 = emblFile$$1.search(/DE/)
    }
    v551 = v614 == -1;
  }
  var v424 = v551;
  var v553 = !v424;
  if (v553) {
    introspect(JAM.policy.p16) {
      var v552 = emblFile$$1.search(/SQ/)
    }
    v424 = v552 == -1;
  }
  var v141 = v424;
  if (v141) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  introspect(JAM.policy.p16) {
    var v425 = emblFile$$1.search(/^FT/m)
  }
  var v142 = v425 == -1;
  if (v142) {
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
  var v149 = i$$5 < stopBase;
  for (;v149;) {
    var v143 = i$$5 + 1;
    lineOfText = rightNum(v143, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v426 = basePerLine / groupSize;
    var v146 = j$$6 <= v426;
    for (;v146;) {
      var v145 = k < groupSize;
      for (;v145;) {
        var v427 = k + i$$5;
        introspect(JAM.policy.p17) {
          var v144 = text$$10.charAt(v427)
        }
        lineOfText = lineOfText + v144;
        k = k + 1;
        v145 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v428 = basePerLine / groupSize;
      v146 = j$$6 <= v428;
    }
    var v147 = outputWindow.document;
    var v148 = lineOfText + "\n";
    introspect(JAM.policy.p17) {
      v147.write(v148);
    }
    lineOfText = "";
    v149 = i$$5 < stopBase;
  }
  return true;
}
function writeGroupNumDna(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition) {
  writeGroupNumDnaSetStart(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition);
  return true;
}
function writeGroupNumDnaSetStart(text$$12, tabIn$$3, groupSize$$2, basePerLine$$2, startBase$$2, stopBase$$2, strands$$1, numberPosition$$1) {
  function adjustNumbering(original, adjustment) {
    var adjusted = original + adjustment;
    var v429 = adjustment < 0;
    if (v429) {
      v429 = adjusted >= 0;
    }
    var v150 = v429;
    if (v150) {
      adjusted++;
    }
    return adjusted;
  }
  var numberingAdjustment = 0;
  var i$$6 = parseInt(startBase$$2);
  var k$$1 = 0;
  var lineOfText$$1 = "";
  var lineNum = "";
  var sepChar$$1 = " ";
  var aboveNum = "";
  groupSize$$2 = parseInt(groupSize$$2);
  basePerLine$$2 = parseInt(basePerLine$$2);
  numberingAdjustment = parseInt(numberingAdjustment);
  var v181 = i$$6 < stopBase$$2;
  for (;v181;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v430 = basePerLine$$2 / groupSize$$2;
    var v157 = j$$7 <= v430;
    for (;v157;) {
      var v153 = k$$1 < groupSize$$2;
      for (;v153;) {
        var v431 = i$$6 + k$$1;
        var v151 = v431 >= stopBase$$2;
        if (v151) {
          break;
        }
        var v432 = k$$1 + i$$6;
        introspect(JAM.policy.p17) {
          var v152 = text$$12.charAt(v432)
        }
        lineOfText$$1 = lineOfText$$1 + v152;
        k$$1 = k$$1 + 1;
        v153 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v155 = numberPosition$$1 == "above";
      if (v155) {
        var v433 = adjustNumbering(i$$6, numberingAdjustment);
        var v154 = rightNum(v433, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v154;
      }
      var v156 = i$$6 >= stopBase$$2;
      if (v156) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v434 = basePerLine$$2 / groupSize$$2;
      v157 = j$$7 <= v434;
    }
    var v180 = numberPosition$$1 == "left";
    if (v180) {
      var v158 = outputWindow.document;
      var v616 = adjustNumbering(lineNum, numberingAdjustment);
      var v554 = rightNum(v616, "", 8, tabIn$$3);
      var v435 = v554 + lineOfText$$1;
      var v159 = v435 + "\n";
      introspect(JAM.policy.p17) {
        v158.write(v159);
      }
      var v163 = strands$$1 == "two";
      if (v163) {
        var v160 = outputWindow.document;
        var v617 = adjustNumbering(lineNum, numberingAdjustment);
        var v555 = rightNum(v617, "", 8, tabIn$$3);
        var v556 = complement(lineOfText$$1);
        var v436 = v555 + v556;
        var v161 = v436 + "\n";
        introspect(JAM.policy.p17) {
          v160.write(v161);
        }
        var v162 = outputWindow.document;
        introspect(JAM.policy.p11) {
          v162.write("\n");
        }
      }
    } else {
      var v179 = numberPosition$$1 == "right";
      if (v179) {
        var v164 = outputWindow.document;
        var v557 = adjustNumbering(i$$6, numberingAdjustment);
        var v437 = lineOfText$$1 + v557;
        var v165 = v437 + "\n";
        introspect(JAM.policy.p17) {
          v164.write(v165);
        }
        var v169 = strands$$1 == "two";
        if (v169) {
          var v166 = outputWindow.document;
          var v558 = complement(lineOfText$$1);
          var v559 = adjustNumbering(i$$6, numberingAdjustment);
          var v438 = v558 + v559;
          var v167 = v438 + "\n";
          introspect(JAM.policy.p17) {
            v166.write(v167);
          }
          var v168 = outputWindow.document;
          introspect(JAM.policy.p11) {
            v168.write("\n");
          }
        }
      } else {
        var v178 = numberPosition$$1 == "above";
        if (v178) {
          var v170 = outputWindow.document;
          var v171 = aboveNum + "\n";
          introspect(JAM.policy.p17) {
            v170.write(v171);
          }
          var v172 = outputWindow.document;
          var v173 = lineOfText$$1 + "\n";
          introspect(JAM.policy.p17) {
            v172.write(v173);
          }
          var v177 = strands$$1 == "two";
          if (v177) {
            var v174 = outputWindow.document;
            var v439 = complement(lineOfText$$1);
            var v175 = v439 + "\n";
            introspect(JAM.policy.p17) {
              v174.write(v175);
            }
            var v176 = outputWindow.document;
            introspect(JAM.policy.p11) {
              v176.write("\n");
            }
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v181 = i$$6 < stopBase$$2;
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
  var v200 = i$$7 < stopBase$$3;
  for (;v200;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v440 = basePerLine$$3 / groupSize$$3;
    var v188 = j$$8 <= v440;
    for (;v188;) {
      var v184 = k$$2 < groupSize$$3;
      for (;v184;) {
        var v441 = i$$7 + k$$2;
        var v182 = v441 >= stopBase$$3;
        if (v182) {
          break;
        }
        var v442 = k$$2 + i$$7;
        introspect(JAM.policy.p17) {
          var v183 = text$$13.charAt(v442)
        }
        lineOfText$$2 = lineOfText$$2 + v183;
        k$$2 = k$$2 + 1;
        v184 = k$$2 < groupSize$$3;
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v186 = numberPosition$$2 == "above";
      if (v186) {
        var v185 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = aboveNum$$1 + v185;
      }
      var v187 = i$$7 >= stopBase$$3;
      if (v187) {
        break;
      }
      k$$2 = 0;
      j$$8++;
      var v443 = basePerLine$$3 / groupSize$$3;
      v188 = j$$8 <= v443;
    }
    var v199 = numberPosition$$2 == "left";
    if (v199) {
      var v189 = outputWindow.document;
      var v560 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v444 = v560 + lineOfText$$2;
      var v190 = v444 + "\n";
      introspect(JAM.policy.p17) {
        v189.write(v190);
      }
    } else {
      var v198 = numberPosition$$2 == "right";
      if (v198) {
        var v191 = outputWindow.document;
        var v445 = lineOfText$$2 + i$$7;
        var v192 = v445 + "\n";
        introspect(JAM.policy.p17) {
          v191.write(v192);
        }
      } else {
        var v197 = numberPosition$$2 == "above";
        if (v197) {
          var v193 = outputWindow.document;
          var v194 = aboveNum$$1 + "\n";
          introspect(JAM.policy.p17) {
            v193.write(v194);
          }
          var v195 = outputWindow.document;
          var v196 = lineOfText$$2 + "\n";
          introspect(JAM.policy.p17) {
            v195.write(v196);
          }
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v200 = i$$7 < stopBase$$3;
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
  var v618 = sequence$$13.length;
  var v561 = v618 <= firstIndexToMutate;
  var v619 = !v561;
  if (v619) {
    v561 = lastIndexToMutate < 0;
  }
  var v446 = v561;
  var v562 = !v446;
  if (v562) {
    v446 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v201 = v446;
  if (v201) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v209 = i$$8 < numMut;
  for (;v209;) {
    maxNum = sequence$$13.length;
    var v447 = Math.random();
    var v202 = v447 * maxNum;
    introspect(JAM.policy.p16) {
      randNum = Math.floor(v202);
    }
    var v448 = randNum < firstIndexToMutate;
    var v563 = !v448;
    if (v563) {
      v448 = randNum > lastIndexToMutate;
    }
    var v203 = v448;
    if (v203) {
      numMut++;
      i$$8++;
      v209 = i$$8 < numMut;
      continue;
    }
    introspect(JAM.policy.p16) {
      currentChar = sequence$$13.charAt(randNum);
    }
    needNewChar = true;
    for (;needNewChar;) {
      var v449 = Math.random();
      var v450 = components$$1.length;
      var v204 = v449 * v450;
      introspect(JAM.policy.p16) {
        componentsIndex = Math.round(v204);
      }
      var v451 = components$$1.length;
      var v205 = componentsIndex == v451;
      if (v205) {
        componentsIndex = 0;
      }
      var v452 = components$$1[componentsIndex];
      var v206 = v452 != currentChar;
      if (v206) {
        needNewChar = false;
      }
    }
    introspect(JAM.policy.p13) {
      var v453 = sequence$$13.substring(0, randNum)
    }
    var v454 = components$$1[componentsIndex];
    var v207 = v453 + v454;
    var v455 = randNum + 1;
    var v456 = sequence$$13.length;
    introspect(JAM.policy.p27) {
      var v208 = sequence$$13.substring(v455, v456)
    }
    sequence$$13 = v207 + v208;
    i$$8++;
    v209 = i$$8 < numMut;
  }
  var v210 = outputWindow.document;
  var v211 = addReturns(sequence$$13);
  introspect(JAM.policy.p17) {
    v210.write(v211);
  }
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v216 = j$$9 < lengthOut$$1;
  for (;v216;) {
    var v457 = Math.random();
    var v458 = components$$2.length;
    var v212 = v457 * v458;
    introspect(JAM.policy.p16) {
      tempNum$$1 = Math.floor(v212);
    }
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v459 = sequence$$14.length;
    var v215 = v459 == 60;
    if (v215) {
      var v213 = outputWindow.document;
      var v214 = sequence$$14 + "\n";
      introspect(JAM.policy.p17) {
        v213.write(v214);
      }
      sequence$$14 = "";
    }
    j$$9++;
    v216 = j$$9 < lengthOut$$1;
  }
  var v217 = outputWindow.document;
  var v218 = sequence$$14 + "\n";
  introspect(JAM.policy.p17) {
    v217.write(v218);
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
  var v222 = dnaConformation == "circular";
  if (v222) {
    introspect(JAM.policy.p13) {
      var v219 = sequence$$15.substring(0, lookAhead)
    }
    shiftValue = v219.length;
    var v620 = sequence$$15.length;
    var v564 = v620 - lookAhead;
    var v565 = sequence$$15.length;
    introspect(JAM.policy.p27) {
      var v460 = sequence$$15.substring(v564, v565)
    }
    var v220 = v460 + sequence$$15;
    introspect(JAM.policy.p13) {
      var v221 = sequence$$15.substring(0, lookAhead)
    }
    sequence$$15 = v220 + v221;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v223 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v223.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  }
  var v224 = outputWindow.document;
  var v621 = '<tr><td class="title" width="200px">' + "Site:";
  var v566 = v621 + '</td><td class="title">';
  var v461 = v566 + "Positions:";
  var v225 = v461 + "</td></tr>\n";
  introspect(JAM.policy.p17) {
    v224.write(v225);
  }
  var i$$9 = 0;
  var v462 = arrayOfItems.length;
  var v241 = i$$9 < v462;
  for (;v241;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v463 = arrayOfItems[i$$9];
    introspect(JAM.policy.p16) {
      var v226 = v463.match(/\/.+\//)
    }
    matchExp = v226 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    var v622 = arrayOfItems[i$$9];
    introspect(JAM.policy.p16) {
      var v567 = v622.match(/\)\D*\d+/)
    }
    var v464 = v567.toString();
    introspect(JAM.policy.p15) {
      var v227 = v464.replace(/\)\D*/, "")
    }
    cutDistance = parseFloat(v227);
    introspect(JAM.policy.p17) {
      var v233 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    for (;v233;) {
      var v228 = matchExp.lastIndex;
      matchPosition = v228 - cutDistance;
      var v465 = matchPosition >= lowerLimit;
      if (v465) {
        v465 = matchPosition < upperLimit;
      }
      var v231 = v465;
      if (v231) {
        timesFound++;
        var v229 = tempString$$1 + ", ";
        var v466 = matchPosition - shiftValue;
        var v230 = v466 + 1;
        tempString$$1 = v229 + v230;
      }
      var v467 = matchExp.lastIndex;
      var v568 = RegExp.lastMatch;
      var v468 = v568.length;
      var v232 = v467 - v468;
      matchExp.lastIndex = v232 + 1;
      introspect(JAM.policy.p17) {
        v233 = matchArray$$1 = matchExp.exec(sequence$$15);
      }
    }
    introspect(JAM.policy.p16) {
      var v469 = tempString$$1.search(/\d/)
    }
    var v234 = v469 != -1;
    if (v234) {
      introspect(JAM.policy.p15) {
        tempString$$1 = tempString$$1.replace(/none,\s*/, "");
      }
    }
    var v238 = timesFound == 0;
    if (v238) {
      backGroundClass = "none";
    } else {
      var v237 = timesFound == 1;
      if (v237) {
        backGroundClass = "one";
      } else {
        var v236 = timesFound == 2;
        if (v236) {
          backGroundClass = "two";
        } else {
          var v235 = timesFound == 3;
          if (v235) {
            backGroundClass = "three";
          } else {
            backGroundClass = "many";
          }
        }
      }
    }
    var v239 = outputWindow.document;
    var v703 = '<tr><td class="' + backGroundClass;
    var v690 = v703 + '">';
    var v724 = arrayOfItems[i$$9];
    introspect(JAM.policy.p16) {
      var v715 = v724.match(/\([^\(]+\)/)
    }
    var v704 = v715.toString();
    introspect(JAM.policy.p15) {
      var v691 = v704.replace(/\(|\)/g, "")
    }
    var v676 = v690 + v691;
    var v657 = v676 + '</td><td class="';
    var v623 = v657 + backGroundClass;
    var v569 = v623 + '">';
    var v470 = v569 + tempString$$1;
    var v240 = v470 + "</td></tr>\n";
    introspect(JAM.policy.p17) {
      v239.write(v240);
    }
    timesFound = 0;
    i$$9++;
    var v471 = arrayOfItems.length;
    v241 = i$$9 < v471;
  }
  var v242 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v242.write("</tbody></table>\n");
  }
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v243 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v243.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  }
  var v244 = outputWindow.document;
  var v677 = '<tr><td class="title">' + "Pattern:";
  var v658 = v677 + '</td><td class="title">';
  var v624 = v658 + "Times found:";
  var v570 = v624 + '</td><td class="title">';
  var v472 = v570 + "Percentage:";
  var v245 = v472 + "</td></tr>\n";
  introspect(JAM.policy.p17) {
    v244.write(v245);
  }
  var i$$10 = 0;
  var v473 = arrayOfItems$$1.length;
  var v254 = i$$10 < v473;
  for (;v254;) {
    var tempNumber = 0;
    var v474 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p16) {
      var v246 = v474.match(/\/[^\/]+\//)
    }
    var matchExp$$1 = v246 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    introspect(JAM.policy.p17) {
      var v475 = sequence$$16.search(matchExp$$1)
    }
    var v248 = v475 != -1;
    if (v248) {
      introspect(JAM.policy.p17) {
        var v247 = sequence$$16.match(matchExp$$1)
      }
      tempNumber = v247.length;
    }
    var percentage = 0;
    var v571 = originalLength + 1;
    var v659 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p16) {
      var v625 = v659.match(/\d+/)
    }
    var v572 = parseFloat(v625);
    var v476 = v571 - v572;
    var v251 = v476 > 0;
    if (v251) {
      var v249 = 100 * tempNumber;
      var v477 = originalLength + 1;
      var v626 = arrayOfItems$$1[i$$10];
      introspect(JAM.policy.p16) {
        var v573 = v626.match(/\d+/)
      }
      var v478 = parseFloat(v573);
      var v250 = v477 - v478;
      percentage = v249 / v250;
    }
    var v252 = outputWindow.document;
    var v725 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p16) {
      var v716 = v725.match(/\([^\(]+\)\b/)
    }
    var v705 = v716.toString();
    introspect(JAM.policy.p15) {
      var v692 = v705.replace(/\(|\)/g, "")
    }
    var v678 = "<tr><td>" + v692;
    var v660 = v678 + "</td><td>";
    var v627 = v660 + tempNumber;
    var v574 = v627 + "</td><td>";
    introspect(JAM.policy.p9) {
      var v575 = percentage.toFixed(2)
    }
    var v479 = v574 + v575;
    var v253 = v479 + "</td></tr>\n";
    introspect(JAM.policy.p17) {
      v252.write(v253);
    }
    i$$10++;
    var v480 = arrayOfItems$$1.length;
    v254 = i$$10 < v480;
  }
  var v255 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v255.write("</tbody></table>\n");
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
  var v481 = sequence$$17.length;
  var v262 = v481 > 0;
  for (;v262;) {
    maxNum$$1 = sequence$$17.length;
    var v482 = Math.random();
    var v256 = v482 * maxNum$$1;
    introspect(JAM.policy.p16) {
      randNum$$1 = Math.floor(v256);
    }
    introspect(JAM.policy.p16) {
      tempChar$$2 = sequence$$17.charAt(randNum$$1);
    }
    tempSeq = tempSeq + tempChar$$2;
    introspect(JAM.policy.p13) {
      tempString1 = sequence$$17.substring(0, randNum$$1);
    }
    var v257 = randNum$$1 + 1;
    var v258 = sequence$$17.length;
    introspect(JAM.policy.p15) {
      tempString2 = sequence$$17.substring(v257, v258);
    }
    sequence$$17 = tempString1 + tempString2;
    var v483 = tempSeq.length;
    var v261 = v483 == 60;
    if (v261) {
      var v259 = outputWindow.document;
      var v260 = tempSeq + "\n";
      introspect(JAM.policy.p17) {
        v259.write(v260);
      }
      tempSeq = "";
    }
    var v484 = sequence$$17.length;
    v262 = v484 > 0;
  }
  var v263 = outputWindow.document;
  var v264 = tempSeq + "\n";
  introspect(JAM.policy.p17) {
    v263.write(v264);
  }
  return true;
}
function cpgIslands() {
  var theDocument = document;
  var newDna = "";
  var title$$9 = "";
  var maxInput$$3 = 1E5;
  var v485 = testScript();
  var v265 = v485 == false;
  if (v265) {
    return;
  }
  var v693 = theDocument.forms;
  var v679 = v693[0];
  var v661 = v679.elements;
  var v628 = v661[0];
  var v576 = checkFormElement(v628);
  var v486 = v576 == false;
  var v578 = !v486;
  if (v578) {
    var v706 = theDocument.forms;
    var v694 = v706[0];
    var v680 = v694.elements;
    var v662 = v680[0];
    var v629 = v662.value;
    var v577 = checkSequenceLength(v629, maxInput$$3);
    v486 = v577 == false;
  }
  var v266 = v486;
  if (v266) {
    return;
  }
  openWindow();
  openPre();
  var v663 = theDocument.forms;
  var v630 = v663[0];
  var v579 = v630.elements;
  var v487 = v579[0];
  var v267 = v487.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v267);
  var i$$11 = 0;
  var v488 = arrayOfFasta$$1.length;
  var v272 = i$$11 < v488;
  for (;v272;) {
    var v268 = arrayOfFasta$$1[i$$11];
    newDna = getSequenceFromFasta(v268);
    var v269 = arrayOfFasta$$1[i$$11];
    title$$9 = getTitleFromFasta(v269);
    newDna = removeNonDna(newDna);
    var v270 = outputWindow.document;
    var v271 = getInfoFromTitleAndSequence(title$$9, newDna);
    introspect(JAM.policy.p17) {
      v270.write(v271);
    }
    cpgIslandRegions(newDna);
    i$$11++;
    var v489 = arrayOfFasta$$1.length;
    v272 = i$$11 < v489;
  }
  closePre();
  closeWindow();
  return;
}
function cpgIslandRegions(dnaSequence$$3) {
  var windowSize = 200;
  var cutOff = .6;
  var islandFound = false;
  var numG = 0;
  var numC = 0;
  var numCG = 0;
  var valueY = 0;
  var gcContent = 0;
  dnaSequence$$3 = dnaSequence$$3.toLowerCase();
  windowSize = parseInt(windowSize);
  cutOff = parseFloat(cutOff);
  var v490 = dnaSequence$$3.length;
  var v275 = windowSize > v490;
  if (v275) {
    var v273 = outputWindow.document;
    var v491 = "The input sequence must be longer than " + windowSize;
    var v274 = v491 + " bases.<br />\n";
    introspect(JAM.policy.p17) {
      v273.write(v274);
    }
    return;
  }
  var i$$12 = 0;
  var v279 = i$$12 < windowSize;
  for (;v279;) {
    introspect(JAM.policy.p17) {
      var v492 = dnaSequence$$3.charAt(i$$12)
    }
    var v276 = v492 == "g";
    if (v276) {
      numG = numG + 1;
    }
    introspect(JAM.policy.p17) {
      var v493 = dnaSequence$$3.charAt(i$$12)
    }
    var v278 = v493 == "c";
    if (v278) {
      numC = numC + 1;
      var v580 = i$$12 + 1;
      introspect(JAM.policy.p17) {
        var v494 = dnaSequence$$3.charAt(v580)
      }
      var v277 = v494 == "g";
      if (v277) {
        numCG = numCG + 1;
        numG = numG + 1;
        i$$12 = i$$12 + 1;
      }
    }
    i$$12++;
    v279 = i$$12 < windowSize;
  }
  var v495 = numC != 0;
  if (v495) {
    v495 = numG != 0;
  }
  var v281 = v495;
  if (v281) {
    var v496 = numC * numG;
    var v280 = v496 / windowSize;
    valueY = numCG / v280;
  } else {
    valueY = 0;
  }
  var v282 = numG + numC;
  gcContent = v282 / windowSize;
  var v497 = valueY >= cutOff;
  if (v497) {
    v497 = gcContent > .5;
  }
  var v285 = v497;
  if (v285) {
    gcContent = gcContent * 100;
    introspect(JAM.policy.p9) {
      valueY = valueY.toFixed(2);
    }
    introspect(JAM.policy.p9) {
      gcContent = gcContent.toFixed(2);
    }
    var v283 = outputWindow.document;
    var v681 = "CpG island detected in region 1 to " + windowSize;
    var v664 = v681 + " (Obs/Exp = ";
    var v631 = v664 + valueY;
    var v581 = v631 + " and %GC = ";
    var v498 = v581 + gcContent;
    var v284 = v498 + ")<br />\n";
    introspect(JAM.policy.p17) {
      v283.write(v284);
    }
    islandFound = true;
  }
  start = windowSize;
  var j$$10 = start;
  var v499 = dnaSequence$$3.length;
  var v303 = j$$10 < v499;
  for (;v303;) {
    introspect(JAM.policy.p16) {
      baseToAdd = dnaSequence$$3.charAt(j$$10);
    }
    var v286 = j$$10 - windowSize;
    introspect(JAM.policy.p16) {
      baseToLose = dnaSequence$$3.charAt(v286);
    }
    var v287 = j$$10 - 1;
    introspect(JAM.policy.p16) {
      recentBaseAdded = dnaSequence$$3.charAt(v287);
    }
    var v500 = j$$10 - windowSize;
    var v288 = v500 + 1;
    introspect(JAM.policy.p16) {
      nextToLose = dnaSequence$$3.charAt(v288);
    }
    var v289 = baseToAdd == "c";
    if (v289) {
      numC = numC + 1;
    }
    var v291 = baseToAdd == "g";
    if (v291) {
      numG = numG + 1;
      var v290 = recentBaseAdded == "c";
      if (v290) {
        numCG = numCG + 1;
      }
    }
    var v293 = baseToLose == "c";
    if (v293) {
      numC = numC - 1;
      var v292 = nextToLose == "g";
      if (v292) {
        numCG = numCG - 1;
      }
    }
    var v294 = baseToLose == "g";
    if (v294) {
      numG = numG - 1;
    }
    var v501 = numC != 0;
    if (v501) {
      v501 = numG != 0;
    }
    var v296 = v501;
    if (v296) {
      var v502 = numC * numG;
      var v295 = v502 / windowSize;
      valueY = numCG / v295;
    } else {
      valueY = 0;
    }
    var v297 = numG + numC;
    gcContent = v297 / windowSize;
    var v503 = valueY > cutOff;
    if (v503) {
      v503 = gcContent > .5;
    }
    var v302 = v503;
    if (v302) {
      var v504 = j$$10 - windowSize;
      var v298 = v504 + 2;
      startRange = v298.toString();
      var v299 = j$$10 + 1;
      endRange = v299.toString();
      gcContent = gcContent * 100;
      introspect(JAM.policy.p9) {
        valueY = valueY.toFixed(2);
      }
      introspect(JAM.policy.p9) {
        gcContent = gcContent.toFixed(2);
      }
      var v300 = outputWindow.document;
      var v707 = "CpG island detected in region " + startRange;
      var v695 = v707 + " to ";
      var v682 = v695 + endRange;
      var v665 = v682 + " (Obs/Exp = ";
      var v632 = v665 + valueY;
      var v582 = v632 + " and %GC = ";
      var v505 = v582 + gcContent;
      var v301 = v505 + ") <br />\n";
      introspect(JAM.policy.p17) {
        v300.write(v301);
      }
      islandFound = true;
    }
    j$$10++;
    var v506 = dnaSequence$$3.length;
    v303 = j$$10 < v506;
  }
  var v305 = !islandFound;
  if (v305) {
    var v304 = outputWindow.document;
    introspect(JAM.policy.p11) {
      v304.write("No CpG island regions were identified.<br />\n");
    }
  }
  return;
}
document.onload = v2;
introspect(JAM.policy.p11) {
  var v306 = document.getElementById("submitbtn")
}
v306.onclick = v3;
introspect(JAM.policy.p11) {
  var v307 = document.getElementById("clearbtn")
}
v307.onclick = v4

JAM.stopProfile('load');
