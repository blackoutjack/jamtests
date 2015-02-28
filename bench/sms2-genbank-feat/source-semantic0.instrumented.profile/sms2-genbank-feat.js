
JAM.startProfile('load');
function v4() {
  var v610 = document.forms;
  var v521 = v610[0];
  var v319 = v521.elements;
  var v5 = v319[0];
  v5.value = " ";
  return;
}
function v3() {
  try {
    genbankFeat();
  } catch (e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    alert(v6);
  }
  return;
}
function v2() {
  var v320 = document.main_form;
  var v7 = v320.main_submit;
  v7.focus();
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
  var v8 = arrayOfSequences[0];
  var lengthOfAlign = v8.length;
  var v321 = arrayOfSequences.length;
  var v9 = v321 < 2;
  if (v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v322 = arrayOfTitles.length;
  var v11 = i$$1 < v322;
  for (;v11;) {
    var v666 = arrayOfTitles[i$$1];
    introspect(JAM.policy.p16) {
      var v611 = v666.search(/\S/)
    }
    var v522 = v611 == -1;
    var v613 = !v522;
    if (v613) {
      var v667 = arrayOfSequences[i$$1];
      introspect(JAM.policy.p16) {
        var v612 = v667.search(/\S/)
      }
      v522 = v612 == -1;
    }
    var v323 = v522;
    var v524 = !v323;
    if (v524) {
      var v614 = arrayOfSequences[i$$1];
      var v523 = v614.length;
      v323 = v523 != lengthOfAlign;
    }
    var v10 = v323;
    if (v10) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v324 = arrayOfTitles.length;
    v11 = i$$1 < v324;
  }
  return true;
}
function checkCodonTable(codonTable) {
  introspect(JAM.policy.p16) {
    var v701 = codonTable.search(/AmAcid/)
  }
  var v668 = v701 == -1;
  var v703 = !v668;
  if (v703) {
    introspect(JAM.policy.p16) {
      var v702 = codonTable.search(/Codon/)
    }
    v668 = v702 == -1;
  }
  var v615 = v668;
  var v670 = !v615;
  if (v670) {
    introspect(JAM.policy.p16) {
      var v669 = codonTable.search(/Number/)
    }
    v615 = v669 == -1;
  }
  var v525 = v615;
  var v617 = !v525;
  if (v617) {
    introspect(JAM.policy.p16) {
      var v616 = codonTable.search(/\/1000/)
    }
    v525 = v616 == -1;
  }
  var v325 = v525;
  var v527 = !v325;
  if (v527) {
    introspect(JAM.policy.p16) {
      var v526 = codonTable.search(/Fraction\s*\.\./)
    }
    v325 = v526 == -1;
  }
  var v12 = v325;
  if (v12) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v528 = formElement.value;
  introspect(JAM.policy.p16) {
    var v326 = v528.search(/\S/)
  }
  var v13 = v326 == -1;
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
  var v327 = arrayOfPatterns.length;
  var v16 = z$$2 < v327;
  for (;v16;) {
    var v529 = arrayOfPatterns[z$$2];
    introspect(JAM.policy.p16) {
      var v328 = v529.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/)
    }
    var v14 = v328 == -1;
    if (v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v530 = arrayOfPatterns[z$$2];
    var v329 = moreExpressionCheck(v530);
    var v15 = v329 == false;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v330 = arrayOfPatterns.length;
    v16 = z$$2 < v330;
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v331 = arrayOfPatterns.length;
  var v22 = j < v331;
  for (;v22;) {
    var v531 = arrayOfPatterns[j];
    introspect(JAM.policy.p16) {
      var v332 = v531.match(/\/.+\//)
    }
    var v19 = v332 + "gi";
    var v795 = eval(v19);
    geneticCodeMatchExp[j] = v795;
    var v333 = arrayOfPatterns[j];
    introspect(JAM.policy.p16) {
      var v20 = v333.match(/=[a-zA-Z\*]/)
    }
    var v796 = v20.toString();
    geneticCodeMatchResult[j] = v796;
    var v21 = geneticCodeMatchResult[j];
    introspect(JAM.policy.p15) {
      var v797 = v21.replace(/=/g, "")
    }
    geneticCodeMatchResult[j] = v797;
    j++;
    var v334 = arrayOfPatterns.length;
    v22 = j < v334;
  }
  var i$$2 = 0;
  var v532 = testSequence.length;
  var v335 = v532 - 3;
  var v29 = i$$2 <= v335;
  for (;v29;) {
    var v23 = i$$2 + 3;
    introspect(JAM.policy.p15) {
      codon = testSequence.substring(i$$2, v23);
    }
    j = 0;
    var v336 = geneticCodeMatchExp.length;
    var v27 = j < v336;
    for (;v27;) {
      var v533 = geneticCodeMatchExp[j];
      introspect(JAM.policy.p18) {
        var v337 = codon.search(v533)
      }
      var v26 = v337 != -1;
      if (v26) {
        var v25 = oneMatch == true;
        if (v25) {
          var v338 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v24 = v338 + ".";
          alert(v24);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v339 = geneticCodeMatchExp.length;
      v27 = j < v339;
    }
    var v28 = oneMatch == false;
    if (v28) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v534 = testSequence.length;
    var v340 = v534 - 3;
    v29 = i$$2 <= v340;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v341 = arrayOfPatterns$$1.length;
  var v31 = z$$3 < v341;
  for (;v31;) {
    var v535 = arrayOfPatterns$$1[z$$3];
    introspect(JAM.policy.p16) {
      var v342 = v535.search(/[^acdefghiklmnpqrstvwyz]/i)
    }
    var v30 = v342 != -1;
    if (v30) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v343 = arrayOfPatterns$$1.length;
    v31 = z$$3 < v343;
  }
  var i$$3 = 0;
  var v344 = arrayOfPatterns$$1.length;
  var v35 = i$$3 < v344;
  for (;v35;) {
    var v536 = arrayOfPatterns$$1[i$$3];
    var v345 = "[" + v536;
    var v32 = v345 + "]";
    var re = new RegExp(v32, "gi");
    var j$$1 = i$$3 + 1;
    var v346 = arrayOfPatterns$$1.length;
    var v34 = j$$1 < v346;
    for (;v34;) {
      var v537 = arrayOfPatterns$$1[j$$1];
      introspect(JAM.policy.p18) {
        var v347 = v537.search(re)
      }
      var v33 = v347 != -1;
      if (v33) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v348 = arrayOfPatterns$$1.length;
      v34 = j$$1 < v348;
    }
    i$$3++;
    var v349 = arrayOfPatterns$$1.length;
    v35 = i$$3 < v349;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v350 = arrayOfPatterns$$2.length;
  var v38 = z$$4 < v350;
  for (;v38;) {
    var v538 = arrayOfPatterns$$2[z$$4];
    introspect(JAM.policy.p16) {
      var v351 = v538.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i)
    }
    var v36 = v351 == -1;
    if (v36) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v539 = arrayOfPatterns$$2[z$$4];
    var v352 = moreExpressionCheck(v539);
    var v37 = v352 == false;
    if (v37) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v353 = arrayOfPatterns$$2.length;
    v38 = z$$4 < v353;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v618 = getSequenceFromFasta(text$$7);
  introspect(JAM.policy.p15) {
    var v540 = v618.replace(/[^A-Za-z]/g, "")
  }
  var v354 = v540.length;
  var v40 = v354 > maxInput;
  if (v40) {
    var v355 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v39 = v355 + " characters.";
    alert(v39);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v356 = text$$8.length;
  var v42 = v356 > maxInput$$1;
  if (v42) {
    var v357 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v41 = v357 + " characters.";
    alert(v41);
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
  var v43 = outputWindow.document;
  introspect(JAM.policy.p12) {
    v43.write("</form>");
  }
  return true;
}
function closePre() {
  var v44 = outputWindow.document;
  introspect(JAM.policy.p12) {
    v44.write("</div>");
  }
  var v45 = outputWindow.document;
  introspect(JAM.policy.p12) {
    v45.write("</pre>\n");
  }
  return;
}
function closeTextArea() {
  var v46 = outputWindow.document;
  introspect(JAM.policy.p12) {
    v46.write("</textarea>");
  }
  return true;
}
function closeWindow() {
  var v47 = outputWindow.document;
  introspect(JAM.policy.p12) {
    v47.write("</body>\n</html>\n");
  }
  outputWindow.status = "Done.";
  var v48 = outputWindow.document;
  v48.close();
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
  var v358 = alignArray.length;
  var v49 = v358 < 3;
  if (v49) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v359 = alignArray.length;
  var v51 = i$$4 < v359;
  for (;v51;) {
    var v541 = alignArray[i$$4];
    introspect(JAM.policy.p16) {
      var v360 = v541.search(/[^\s]+\s/)
    }
    var v50 = v360 == -1;
    if (v50) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v361 = alignArray.length;
    v51 = i$$4 < v361;
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
    var v362 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v54 = v362 != -1;
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
  var v363 = sequence$$2.length;
  var v55 = "&gt;results for " + v363;
  var stringToReturn = v55 + " residue sequence ";
  introspect(JAM.policy.p16) {
    var v364 = fastaSequenceTitle.search(/[^\s]/)
  }
  var v57 = v364 != -1;
  if (v57) {
    var v365 = stringToReturn + '"';
    var v56 = v365 + fastaSequenceTitle;
    stringToReturn = v56 + '"';
  }
  var v366 = stringToReturn + ' starting "';
  introspect(JAM.policy.p13) {
    var v367 = sequence$$2.substring(0, 10)
  }
  var v58 = v366 + v367;
  stringToReturn = v58 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v368 = sequenceOne.length;
  var v59 = "Search results for " + v368;
  var stringToReturn$$1 = v59 + " residue sequence ";
  introspect(JAM.policy.p16) {
    var v369 = fastaSequenceTitleOne.search(/[^\s]/)
  }
  var v61 = v369 != -1;
  if (v61) {
    var v370 = stringToReturn$$1 + '"';
    var v60 = v370 + fastaSequenceTitleOne;
    stringToReturn$$1 = v60 + '"';
  }
  var v371 = stringToReturn$$1 + ' starting "';
  introspect(JAM.policy.p13) {
    var v372 = sequenceOne.substring(0, 10)
  }
  var v62 = v371 + v372;
  stringToReturn$$1 = v62 + '"\n';
  var v373 = stringToReturn$$1 + "and ";
  var v374 = sequenceTwo.length;
  var v63 = v373 + v374;
  stringToReturn$$1 = v63 + " residue sequence ";
  introspect(JAM.policy.p16) {
    var v375 = fastaSequenceTitleTwo.search(/[^\s]/)
  }
  var v65 = v375 != -1;
  if (v65) {
    var v376 = stringToReturn$$1 + '"';
    var v64 = v376 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v64 + '"';
  }
  var v377 = stringToReturn$$1 + ' starting "';
  introspect(JAM.policy.p13) {
    var v378 = sequenceTwo.substring(0, 10)
  }
  var v66 = v377 + v378;
  stringToReturn$$1 = v66 + '"';
  var v67 = '<div class="info">' + stringToReturn$$1;
  return v67 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v68 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v68);
  var j$$2 = 0;
  var v379 = arrayOfPatterns$$3.length;
  var v70 = j$$2 < v379;
  for (;v70;) {
    var v542 = arrayOfPatterns$$3[j$$2];
    introspect(JAM.policy.p16) {
      var v380 = v542.match(/\/.+\//)
    }
    var v69 = v380 + "gi";
    var v798 = eval(v69);
    geneticCodeMatchExp$$1[j$$2] = v798;
    j$$2++;
    var v381 = arrayOfPatterns$$3.length;
    v70 = j$$2 < v381;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v71 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v71);
  var j$$3 = 0;
  var v382 = arrayOfPatterns$$4.length;
  var v74 = j$$3 < v382;
  for (;v74;) {
    var v383 = arrayOfPatterns$$4[j$$3];
    introspect(JAM.policy.p16) {
      var v72 = v383.match(/=[a-zA-Z\*]/)
    }
    var v799 = v72.toString();
    geneticCodeMatchResult$$1[j$$3] = v799;
    var v73 = geneticCodeMatchResult$$1[j$$3];
    introspect(JAM.policy.p15) {
      var v800 = v73.replace(/=/g, "")
    }
    geneticCodeMatchResult$$1[j$$3] = v800;
    j$$3++;
    var v384 = arrayOfPatterns$$4.length;
    v74 = j$$3 < v384;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v385 = sequence$$3.length;
  var v75 = "Results for " + v385;
  var stringToReturn$$2 = v75 + " residue sequence ";
  introspect(JAM.policy.p16) {
    var v386 = fastaSequenceTitle$$1.search(/[^\s]/)
  }
  var v77 = v386 != -1;
  if (v77) {
    var v387 = stringToReturn$$2 + '"';
    var v76 = v387 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v76 + '"';
  }
  var v388 = stringToReturn$$2 + ' starting "';
  introspect(JAM.policy.p13) {
    var v389 = sequence$$3.substring(0, 10)
  }
  var v78 = v388 + v389;
  stringToReturn$$2 = v78 + '"';
  var v79 = '<div class="info">' + stringToReturn$$2;
  return v79 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v543 = "Results for " + topology;
  var v390 = v543 + " ";
  var v391 = sequence$$4.length;
  var v80 = v390 + v391;
  var stringToReturn$$3 = v80 + " residue sequence ";
  introspect(JAM.policy.p16) {
    var v392 = fastaSequenceTitle$$2.search(/[^\s]/)
  }
  var v82 = v392 != -1;
  if (v82) {
    var v393 = stringToReturn$$3 + '"';
    var v81 = v393 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v81 + '"';
  }
  var v394 = stringToReturn$$3 + ' starting "';
  introspect(JAM.policy.p13) {
    var v395 = sequence$$4.substring(0, 10)
  }
  var v83 = v394 + v395;
  stringToReturn$$3 = v83 + '"';
  var v84 = '<div class="info">' + stringToReturn$$3;
  return v84 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v396 = sequenceOne$$1.length;
  var v85 = "Alignment results for " + v396;
  var stringToReturn$$4 = v85 + " residue sequence ";
  introspect(JAM.policy.p16) {
    var v397 = fastaSequenceTitleOne$$1.search(/[^\s]/)
  }
  var v87 = v397 != -1;
  if (v87) {
    var v398 = stringToReturn$$4 + '"';
    var v86 = v398 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v86 + '"';
  }
  var v399 = stringToReturn$$4 + ' starting "';
  introspect(JAM.policy.p13) {
    var v400 = sequenceOne$$1.substring(0, 10)
  }
  var v88 = v399 + v400;
  stringToReturn$$4 = v88 + '"\n';
  var v401 = stringToReturn$$4 + "and ";
  var v402 = sequenceTwo$$1.length;
  var v89 = v401 + v402;
  stringToReturn$$4 = v89 + " residue sequence ";
  introspect(JAM.policy.p16) {
    var v403 = fastaSequenceTitleTwo$$1.search(/[^\s]/)
  }
  var v91 = v403 != -1;
  if (v91) {
    var v404 = stringToReturn$$4 + '"';
    var v90 = v404 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v90 + '"';
  }
  var v405 = stringToReturn$$4 + ' starting "';
  introspect(JAM.policy.p13) {
    var v406 = sequenceTwo$$1.substring(0, 10)
  }
  var v92 = v405 + v406;
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
    var v407 = Math.random();
    var v408 = components.length;
    var v94 = v407 * v408;
    introspect(JAM.policy.p16) {
      tempNum = Math.floor(v94);
    }
    tempChar = components[tempNum];
    introspect(JAM.policy.p18) {
      sequenceArray.push(tempChar);
    }
    j$$4++;
    v95 = j$$4 < lengthOut;
  }
  introspect(JAM.policy.p12) {
    return sequenceArray.join("");
  }
}
function getSequenceFromFasta(sequenceRecord) {
  introspect(JAM.policy.p16) {
    var v409 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v96 = v409 != -1;
  if (v96) {
    introspect(JAM.policy.p15) {
      sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "");
    }
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  introspect(JAM.policy.p16) {
    var v410 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v98 = v410 != -1;
  if (v98) {
    introspect(JAM.policy.p15) {
      var v97 = sequenceRecord$$1.match(/\>[^\f\n\r]+[\f\n\r]/, "")
    }
    fastaTitle = v97.toString();
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
    var v773 = expressionToCheck.search(/\[[A-Za-z\|]*\[/)
  }
  var v766 = v773 != -1;
  var v775 = !v766;
  if (v775) {
    introspect(JAM.policy.p16) {
      var v774 = expressionToCheck.search(/\][A-Za-z\|]*\]/)
    }
    v766 = v774 != -1;
  }
  var v757 = v766;
  var v768 = !v757;
  if (v768) {
    introspect(JAM.policy.p16) {
      var v767 = expressionToCheck.search(/\[\]/)
    }
    v757 = v767 != -1;
  }
  var v747 = v757;
  var v759 = !v747;
  if (v759) {
    introspect(JAM.policy.p16) {
      var v758 = expressionToCheck.search(/\/[A-Za-z\|]*\]/)
    }
    v747 = v758 != -1;
  }
  var v734 = v747;
  var v749 = !v734;
  if (v749) {
    introspect(JAM.policy.p16) {
      var v748 = expressionToCheck.search(/\[[A-Za-z\|]*\//)
    }
    v734 = v748 != -1;
  }
  var v719 = v734;
  var v736 = !v719;
  if (v736) {
    introspect(JAM.policy.p16) {
      var v735 = expressionToCheck.search(/\|\|/)
    }
    v719 = v735 != -1;
  }
  var v704 = v719;
  var v721 = !v704;
  if (v721) {
    introspect(JAM.policy.p16) {
      var v720 = expressionToCheck.search(/\/\|/)
    }
    v704 = v720 != -1;
  }
  var v671 = v704;
  var v706 = !v671;
  if (v706) {
    introspect(JAM.policy.p16) {
      var v705 = expressionToCheck.search(/\|\//)
    }
    v671 = v705 != -1;
  }
  var v619 = v671;
  var v673 = !v619;
  if (v673) {
    introspect(JAM.policy.p16) {
      var v672 = expressionToCheck.search(/\[.\]/)
    }
    v619 = v672 != -1;
  }
  var v544 = v619;
  var v621 = !v544;
  if (v621) {
    introspect(JAM.policy.p16) {
      var v620 = expressionToCheck.search(/\</)
    }
    v544 = v620 != -1;
  }
  var v411 = v544;
  var v546 = !v411;
  if (v546) {
    introspect(JAM.policy.p16) {
      var v545 = expressionToCheck.search(/\>/)
    }
    v411 = v545 != -1;
  }
  var v99 = v411;
  if (v99) {
    return false;
  }
  return true;
}
function openForm() {
  var v100 = outputWindow.document;
  introspect(JAM.policy.p12) {
    v100.write('<form action="">\n');
  }
  return true;
}
function openPre() {
  var v101 = outputWindow.document;
  introspect(JAM.policy.p12) {
    v101.write("<pre>");
  }
  var v102 = outputWindow.document;
  introspect(JAM.policy.p12) {
    v102.write('<div class="pre">');
  }
  return;
}
function openTextArea() {
  var v103 = outputWindow.document;
  introspect(JAM.policy.p12) {
    v103.write('<br /><textarea rows="6" cols="61">\n');
  }
  return true;
}
function openWindow() {
  var title$$5 = "GenBank Feature Extractor";
  _openWindow(title$$5);
  return;
}
function _openWindow(title$$6) {
  var isColor = true;
  introspect(JAM.policy.p14) {
    outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  }
  outputWindow.focus();
  var v104 = outputWindow.document;
  var v622 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v547 = v622 + "<head>\n";
  var v412 = v547 + "<title>Sequence Manipulation Suite</title>\n";
  var v105 = v412 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  introspect(JAM.policy.p18) {
    v104.write(v105);
  }
  if (isColor) {
    var v106 = outputWindow.document;
    var v788 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v784 = v788 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v780 = v784 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v776 = v780 + "div.info {font-weight: bold}\n";
    var v769 = v776 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v760 = v769 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v750 = v760 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v737 = v750 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v722 = v737 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v707 = v722 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v674 = v707 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v623 = v674 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v548 = v623 + "td.many {color: #000000}\n";
    var v413 = v548 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v107 = v413 + "</style>\n";
    introspect(JAM.policy.p18) {
      v106.write(v107);
    }
  } else {
    var v108 = outputWindow.document;
    var v792 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v789 = v792 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v785 = v789 + "div.title {display: none}\n";
    var v781 = v785 + "div.info {font-weight: bold}\n";
    var v777 = v781 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v770 = v777 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v761 = v770 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v751 = v761 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v738 = v751 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v723 = v738 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v708 = v723 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v675 = v708 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v624 = v675 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v549 = v624 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v414 = v549 + "img {display: none}\n";
    var v109 = v414 + "</style>\n";
    introspect(JAM.policy.p18) {
      v108.write(v109);
    }
  }
  var v110 = outputWindow.document;
  var v625 = "</head>\n" + '<body class="main">\n';
  var v550 = v625 + '<div class="title">';
  var v415 = v550 + title$$6;
  var v111 = v415 + " results</div>\n";
  introspect(JAM.policy.p18) {
    v110.write(v111);
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
  var v112 = outputWindow.document;
  var v626 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v551 = v626 + "<head>\n";
  var v416 = v551 + "<title>Sequence Manipulation Suite</title>\n";
  var v113 = v416 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  introspect(JAM.policy.p18) {
    v112.write(v113);
  }
  if (isBackground) {
    var v114 = outputWindow.document;
    var v790 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v786 = v790 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v782 = v786 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v778 = v782 + "div.info {font-weight: bold}\n";
    var v771 = v778 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v762 = v771 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v752 = v762 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v739 = v752 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v724 = v739 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v709 = v724 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v676 = v709 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v627 = v676 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v552 = v627 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v417 = v552 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v115 = v417 + "</style>\n";
    introspect(JAM.policy.p18) {
      v114.write(v115);
    }
  } else {
    var v116 = outputWindow.document;
    var v794 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v793 = v794 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v791 = v793 + "div.title {display: none}\n";
    var v787 = v791 + "div.info {font-weight: bold}\n";
    var v783 = v787 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v779 = v783 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v772 = v779 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v763 = v772 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v753 = v763 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v740 = v753 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v725 = v740 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v710 = v725 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v677 = v710 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v628 = v677 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v553 = v628 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v418 = v553 + "img {display: none}\n";
    var v117 = v418 + "</style>\n";
    introspect(JAM.policy.p18) {
      v116.write(v117);
    }
  }
  var v118 = outputWindow.document;
  var v629 = "</head>\n" + '<body class="main">\n';
  var v554 = v629 + '<div class="title">';
  var v419 = v554 + title$$8;
  var v119 = v419 + " results</div>\n";
  introspect(JAM.policy.p18) {
    v118.write(v119);
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
    var v420 = dnaSequence$$1.search(/./)
  }
  var v120 = v420 != -1;
  if (v120) {
    introspect(JAM.policy.p16) {
      tempDnaArray = dnaSequence$$1.match(/./g);
    }
    tempDnaArray = tempDnaArray.reverse();
    introspect(JAM.policy.p12) {
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
  var v421 = testArray[0];
  var v124 = v421 != testString;
  if (v124) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  introspect(JAM.policy.p18) {
    var v422 = testString.search(re$$2)
  }
  var v125 = v422 == -1;
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
  introspect(JAM.policy.p15) {
    testString = testString.replace(/(\d)/g, v1);
  }
  var v127 = testString != "1X2X3X";
  if (v127) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false;
  }
  var testNum = 2489.8237;
  introspect(JAM.policy.p9) {
    var v423 = testNum.toFixed(3)
  }
  var v128 = v423 != 2489.824;
  if (v128) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  introspect(JAM.policy.p9) {
    var v424 = testNum.toPrecision(5)
  }
  var v129 = v424 != 2489.8;
  if (v129) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  introspect(JAM.policy.p16) {
    var v425 = theNumber$$1.search(/\d/)
  }
  var v130 = v425 == -1;
  if (v130) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  introspect(JAM.policy.p16) {
    var v678 = emblFile.search(/ID/)
  }
  var v630 = v678 == -1;
  var v680 = !v630;
  if (v680) {
    introspect(JAM.policy.p16) {
      var v679 = emblFile.search(/AC/)
    }
    v630 = v679 == -1;
  }
  var v555 = v630;
  var v632 = !v555;
  if (v632) {
    introspect(JAM.policy.p16) {
      var v631 = emblFile.search(/DE/)
    }
    v555 = v631 == -1;
  }
  var v426 = v555;
  var v557 = !v426;
  if (v557) {
    introspect(JAM.policy.p16) {
      var v556 = emblFile.search(/SQ/)
    }
    v426 = v556 == -1;
  }
  var v131 = v426;
  if (v131) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  introspect(JAM.policy.p16) {
    var v427 = theNumber$$2.search(/\d/)
  }
  var v132 = v427 == -1;
  if (v132) {
    alert("Please enter a number.");
    return false;
  }
  var v134 = theNumber$$2 > maxInput$$2;
  if (v134) {
    var v428 = "Please enter a number less than or equal to " + maxInput$$2;
    var v133 = v428 + ".";
    alert(v133);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  introspect(JAM.policy.p16) {
    var v429 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i)
  }
  var v135 = v429 != -1;
  if (v135) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  introspect(JAM.policy.p16) {
    var v430 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i)
  }
  var v136 = v430 != -1;
  if (v136) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  introspect(JAM.policy.p16) {
    var v681 = genBankFile.search(/LOCUS/)
  }
  var v633 = v681 == -1;
  var v683 = !v633;
  if (v683) {
    introspect(JAM.policy.p16) {
      var v682 = genBankFile.search(/DEFINITION/)
    }
    v633 = v682 == -1;
  }
  var v558 = v633;
  var v635 = !v558;
  if (v635) {
    introspect(JAM.policy.p16) {
      var v634 = genBankFile.search(/ACCESSION/)
    }
    v558 = v634 == -1;
  }
  var v431 = v558;
  var v560 = !v431;
  if (v560) {
    introspect(JAM.policy.p16) {
      var v559 = genBankFile.search(/ORIGIN/)
    }
    v431 = v559 == -1;
  }
  var v137 = v431;
  if (v137) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  introspect(JAM.policy.p16) {
    var v684 = genBankFile$$1.search(/LOCUS/)
  }
  var v636 = v684 == -1;
  var v686 = !v636;
  if (v686) {
    introspect(JAM.policy.p16) {
      var v685 = genBankFile$$1.search(/DEFINITION/)
    }
    v636 = v685 == -1;
  }
  var v561 = v636;
  var v638 = !v561;
  if (v638) {
    introspect(JAM.policy.p16) {
      var v637 = genBankFile$$1.search(/ACCESSION/)
    }
    v561 = v637 == -1;
  }
  var v432 = v561;
  var v563 = !v432;
  if (v563) {
    introspect(JAM.policy.p16) {
      var v562 = genBankFile$$1.search(/ORIGIN/)
    }
    v432 = v562 == -1;
  }
  var v138 = v432;
  if (v138) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  introspect(JAM.policy.p16) {
    var v433 = genBankFile$$1.search(/FEATURES {13}/)
  }
  var v139 = v433 == -1;
  if (v139) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  introspect(JAM.policy.p16) {
    var v687 = emblFile$$1.search(/ID/)
  }
  var v639 = v687 == -1;
  var v689 = !v639;
  if (v689) {
    introspect(JAM.policy.p16) {
      var v688 = emblFile$$1.search(/AC/)
    }
    v639 = v688 == -1;
  }
  var v564 = v639;
  var v641 = !v564;
  if (v641) {
    introspect(JAM.policy.p16) {
      var v640 = emblFile$$1.search(/DE/)
    }
    v564 = v640 == -1;
  }
  var v434 = v564;
  var v566 = !v434;
  if (v566) {
    introspect(JAM.policy.p16) {
      var v565 = emblFile$$1.search(/SQ/)
    }
    v434 = v565 == -1;
  }
  var v140 = v434;
  if (v140) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  introspect(JAM.policy.p16) {
    var v435 = emblFile$$1.search(/^FT/m)
  }
  var v141 = v435 == -1;
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
    var v436 = basePerLine / groupSize;
    var v145 = j$$6 <= v436;
    for (;v145;) {
      var v144 = k < groupSize;
      for (;v144;) {
        var v437 = k + i$$5;
        introspect(JAM.policy.p18) {
          var v143 = text$$10.charAt(v437)
        }
        lineOfText = lineOfText + v143;
        k = k + 1;
        v144 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v438 = basePerLine / groupSize;
      v145 = j$$6 <= v438;
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
  writeGroupNumDnaSetStart(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition);
  return true;
}
function writeGroupNumDnaSetStart(text$$12, tabIn$$3, groupSize$$2, basePerLine$$2, startBase$$2, stopBase$$2, strands$$1, numberPosition$$1) {
  function adjustNumbering(original, adjustment) {
    var adjusted = original + adjustment;
    var v439 = adjustment < 0;
    if (v439) {
      v439 = adjusted >= 0;
    }
    var v149 = v439;
    if (v149) {
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
  var v180 = i$$6 < stopBase$$2;
  for (;v180;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v440 = basePerLine$$2 / groupSize$$2;
    var v156 = j$$7 <= v440;
    for (;v156;) {
      var v152 = k$$1 < groupSize$$2;
      for (;v152;) {
        var v441 = i$$6 + k$$1;
        var v150 = v441 >= stopBase$$2;
        if (v150) {
          break;
        }
        var v442 = k$$1 + i$$6;
        introspect(JAM.policy.p18) {
          var v151 = text$$12.charAt(v442)
        }
        lineOfText$$1 = lineOfText$$1 + v151;
        k$$1 = k$$1 + 1;
        v152 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v154 = numberPosition$$1 == "above";
      if (v154) {
        var v443 = adjustNumbering(i$$6, numberingAdjustment);
        var v153 = rightNum(v443, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v153;
      }
      var v155 = i$$6 >= stopBase$$2;
      if (v155) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v444 = basePerLine$$2 / groupSize$$2;
      v156 = j$$7 <= v444;
    }
    var v179 = numberPosition$$1 == "left";
    if (v179) {
      var v157 = outputWindow.document;
      var v642 = adjustNumbering(lineNum, numberingAdjustment);
      var v567 = rightNum(v642, "", 8, tabIn$$3);
      var v445 = v567 + lineOfText$$1;
      var v158 = v445 + "\n";
      introspect(JAM.policy.p18) {
        v157.write(v158);
      }
      var v162 = strands$$1 == "two";
      if (v162) {
        var v159 = outputWindow.document;
        var v643 = adjustNumbering(lineNum, numberingAdjustment);
        var v568 = rightNum(v643, "", 8, tabIn$$3);
        var v569 = complement(lineOfText$$1);
        var v446 = v568 + v569;
        var v160 = v446 + "\n";
        introspect(JAM.policy.p18) {
          v159.write(v160);
        }
        var v161 = outputWindow.document;
        introspect(JAM.policy.p12) {
          v161.write("\n");
        }
      }
    } else {
      var v178 = numberPosition$$1 == "right";
      if (v178) {
        var v163 = outputWindow.document;
        var v570 = adjustNumbering(i$$6, numberingAdjustment);
        var v447 = lineOfText$$1 + v570;
        var v164 = v447 + "\n";
        introspect(JAM.policy.p18) {
          v163.write(v164);
        }
        var v168 = strands$$1 == "two";
        if (v168) {
          var v165 = outputWindow.document;
          var v571 = complement(lineOfText$$1);
          var v572 = adjustNumbering(i$$6, numberingAdjustment);
          var v448 = v571 + v572;
          var v166 = v448 + "\n";
          introspect(JAM.policy.p18) {
            v165.write(v166);
          }
          var v167 = outputWindow.document;
          introspect(JAM.policy.p12) {
            v167.write("\n");
          }
        }
      } else {
        var v177 = numberPosition$$1 == "above";
        if (v177) {
          var v169 = outputWindow.document;
          var v170 = aboveNum + "\n";
          introspect(JAM.policy.p18) {
            v169.write(v170);
          }
          var v171 = outputWindow.document;
          var v172 = lineOfText$$1 + "\n";
          introspect(JAM.policy.p18) {
            v171.write(v172);
          }
          var v176 = strands$$1 == "two";
          if (v176) {
            var v173 = outputWindow.document;
            var v449 = complement(lineOfText$$1);
            var v174 = v449 + "\n";
            introspect(JAM.policy.p18) {
              v173.write(v174);
            }
            var v175 = outputWindow.document;
            introspect(JAM.policy.p12) {
              v175.write("\n");
            }
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
    var v450 = basePerLine$$3 / groupSize$$3;
    var v187 = j$$8 <= v450;
    for (;v187;) {
      var v183 = k$$2 < groupSize$$3;
      for (;v183;) {
        var v451 = i$$7 + k$$2;
        var v181 = v451 >= stopBase$$3;
        if (v181) {
          break;
        }
        var v452 = k$$2 + i$$7;
        introspect(JAM.policy.p18) {
          var v182 = text$$13.charAt(v452)
        }
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
      var v453 = basePerLine$$3 / groupSize$$3;
      v187 = j$$8 <= v453;
    }
    var v198 = numberPosition$$2 == "left";
    if (v198) {
      var v188 = outputWindow.document;
      var v573 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v454 = v573 + lineOfText$$2;
      var v189 = v454 + "\n";
      introspect(JAM.policy.p18) {
        v188.write(v189);
      }
    } else {
      var v197 = numberPosition$$2 == "right";
      if (v197) {
        var v190 = outputWindow.document;
        var v455 = lineOfText$$2 + i$$7;
        var v191 = v455 + "\n";
        introspect(JAM.policy.p18) {
          v190.write(v191);
        }
      } else {
        var v196 = numberPosition$$2 == "above";
        if (v196) {
          var v192 = outputWindow.document;
          var v193 = aboveNum$$1 + "\n";
          introspect(JAM.policy.p18) {
            v192.write(v193);
          }
          var v194 = outputWindow.document;
          var v195 = lineOfText$$2 + "\n";
          introspect(JAM.policy.p18) {
            v194.write(v195);
          }
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
  var v644 = sequence$$13.length;
  var v574 = v644 <= firstIndexToMutate;
  var v645 = !v574;
  if (v645) {
    v574 = lastIndexToMutate < 0;
  }
  var v456 = v574;
  var v575 = !v456;
  if (v575) {
    v456 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v200 = v456;
  if (v200) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v208 = i$$8 < numMut;
  for (;v208;) {
    maxNum = sequence$$13.length;
    var v457 = Math.random();
    var v201 = v457 * maxNum;
    introspect(JAM.policy.p16) {
      randNum = Math.floor(v201);
    }
    var v458 = randNum < firstIndexToMutate;
    var v576 = !v458;
    if (v576) {
      v458 = randNum > lastIndexToMutate;
    }
    var v202 = v458;
    if (v202) {
      numMut++;
      i$$8++;
      v208 = i$$8 < numMut;
      continue;
    }
    introspect(JAM.policy.p16) {
      currentChar = sequence$$13.charAt(randNum);
    }
    needNewChar = true;
    for (;needNewChar;) {
      var v459 = Math.random();
      var v460 = components$$1.length;
      var v203 = v459 * v460;
      introspect(JAM.policy.p16) {
        componentsIndex = Math.round(v203);
      }
      var v461 = components$$1.length;
      var v204 = componentsIndex == v461;
      if (v204) {
        componentsIndex = 0;
      }
      var v462 = components$$1[componentsIndex];
      var v205 = v462 != currentChar;
      if (v205) {
        needNewChar = false;
      }
    }
    introspect(JAM.policy.p13) {
      var v463 = sequence$$13.substring(0, randNum)
    }
    var v464 = components$$1[componentsIndex];
    var v206 = v463 + v464;
    var v465 = randNum + 1;
    var v466 = sequence$$13.length;
    introspect(JAM.policy.p27) {
      var v207 = sequence$$13.substring(v465, v466)
    }
    sequence$$13 = v206 + v207;
    i$$8++;
    v208 = i$$8 < numMut;
  }
  var v209 = outputWindow.document;
  var v210 = addReturns(sequence$$13);
  introspect(JAM.policy.p18) {
    v209.write(v210);
  }
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v215 = j$$9 < lengthOut$$1;
  for (;v215;) {
    var v467 = Math.random();
    var v468 = components$$2.length;
    var v211 = v467 * v468;
    introspect(JAM.policy.p16) {
      tempNum$$1 = Math.floor(v211);
    }
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v469 = sequence$$14.length;
    var v214 = v469 == 60;
    if (v214) {
      var v212 = outputWindow.document;
      var v213 = sequence$$14 + "\n";
      introspect(JAM.policy.p18) {
        v212.write(v213);
      }
      sequence$$14 = "";
    }
    j$$9++;
    v215 = j$$9 < lengthOut$$1;
  }
  var v216 = outputWindow.document;
  var v217 = sequence$$14 + "\n";
  introspect(JAM.policy.p18) {
    v216.write(v217);
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
  var v221 = dnaConformation == "circular";
  if (v221) {
    introspect(JAM.policy.p13) {
      var v218 = sequence$$15.substring(0, lookAhead)
    }
    shiftValue = v218.length;
    var v646 = sequence$$15.length;
    var v577 = v646 - lookAhead;
    var v578 = sequence$$15.length;
    introspect(JAM.policy.p27) {
      var v470 = sequence$$15.substring(v577, v578)
    }
    var v219 = v470 + sequence$$15;
    introspect(JAM.policy.p13) {
      var v220 = sequence$$15.substring(0, lookAhead)
    }
    sequence$$15 = v219 + v220;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v222 = outputWindow.document;
  introspect(JAM.policy.p12) {
    v222.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  }
  var v223 = outputWindow.document;
  var v647 = '<tr><td class="title" width="200px">' + "Site:";
  var v579 = v647 + '</td><td class="title">';
  var v471 = v579 + "Positions:";
  var v224 = v471 + "</td></tr>\n";
  introspect(JAM.policy.p18) {
    v223.write(v224);
  }
  var i$$9 = 0;
  var v472 = arrayOfItems.length;
  var v240 = i$$9 < v472;
  for (;v240;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v473 = arrayOfItems[i$$9];
    introspect(JAM.policy.p16) {
      var v225 = v473.match(/\/.+\//)
    }
    matchExp = v225 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    var v648 = arrayOfItems[i$$9];
    introspect(JAM.policy.p16) {
      var v580 = v648.match(/\)\D*\d+/)
    }
    var v474 = v580.toString();
    introspect(JAM.policy.p15) {
      var v226 = v474.replace(/\)\D*/, "")
    }
    cutDistance = parseFloat(v226);
    introspect(JAM.policy.p18) {
      var v232 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    for (;v232;) {
      var v227 = matchExp.lastIndex;
      matchPosition = v227 - cutDistance;
      var v475 = matchPosition >= lowerLimit;
      if (v475) {
        v475 = matchPosition < upperLimit;
      }
      var v230 = v475;
      if (v230) {
        timesFound++;
        var v228 = tempString$$1 + ", ";
        var v476 = matchPosition - shiftValue;
        var v229 = v476 + 1;
        tempString$$1 = v228 + v229;
      }
      var v477 = matchExp.lastIndex;
      var v581 = RegExp.lastMatch;
      var v478 = v581.length;
      var v231 = v477 - v478;
      matchExp.lastIndex = v231 + 1;
      introspect(JAM.policy.p18) {
        v232 = matchArray$$1 = matchExp.exec(sequence$$15);
      }
    }
    introspect(JAM.policy.p16) {
      var v479 = tempString$$1.search(/\d/)
    }
    var v233 = v479 != -1;
    if (v233) {
      introspect(JAM.policy.p15) {
        tempString$$1 = tempString$$1.replace(/none,\s*/, "");
      }
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
    var v741 = '<tr><td class="' + backGroundClass;
    var v726 = v741 + '">';
    var v764 = arrayOfItems[i$$9];
    introspect(JAM.policy.p16) {
      var v754 = v764.match(/\([^\(]+\)/)
    }
    var v742 = v754.toString();
    introspect(JAM.policy.p15) {
      var v727 = v742.replace(/\(|\)/g, "")
    }
    var v711 = v726 + v727;
    var v690 = v711 + '</td><td class="';
    var v649 = v690 + backGroundClass;
    var v582 = v649 + '">';
    var v480 = v582 + tempString$$1;
    var v239 = v480 + "</td></tr>\n";
    introspect(JAM.policy.p18) {
      v238.write(v239);
    }
    timesFound = 0;
    i$$9++;
    var v481 = arrayOfItems.length;
    v240 = i$$9 < v481;
  }
  var v241 = outputWindow.document;
  introspect(JAM.policy.p12) {
    v241.write("</tbody></table>\n");
  }
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v242 = outputWindow.document;
  introspect(JAM.policy.p12) {
    v242.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  }
  var v243 = outputWindow.document;
  var v712 = '<tr><td class="title">' + "Pattern:";
  var v691 = v712 + '</td><td class="title">';
  var v650 = v691 + "Times found:";
  var v583 = v650 + '</td><td class="title">';
  var v482 = v583 + "Percentage:";
  var v244 = v482 + "</td></tr>\n";
  introspect(JAM.policy.p18) {
    v243.write(v244);
  }
  var i$$10 = 0;
  var v483 = arrayOfItems$$1.length;
  var v253 = i$$10 < v483;
  for (;v253;) {
    var tempNumber = 0;
    var v484 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p16) {
      var v245 = v484.match(/\/[^\/]+\//)
    }
    var matchExp$$1 = v245 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    introspect(JAM.policy.p18) {
      var v485 = sequence$$16.search(matchExp$$1)
    }
    var v247 = v485 != -1;
    if (v247) {
      introspect(JAM.policy.p18) {
        var v246 = sequence$$16.match(matchExp$$1)
      }
      tempNumber = v246.length;
    }
    var percentage = 0;
    var v584 = originalLength + 1;
    var v692 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p16) {
      var v651 = v692.match(/\d+/)
    }
    var v585 = parseFloat(v651);
    var v486 = v584 - v585;
    var v250 = v486 > 0;
    if (v250) {
      var v248 = 100 * tempNumber;
      var v487 = originalLength + 1;
      var v652 = arrayOfItems$$1[i$$10];
      introspect(JAM.policy.p16) {
        var v586 = v652.match(/\d+/)
      }
      var v488 = parseFloat(v586);
      var v249 = v487 - v488;
      percentage = v248 / v249;
    }
    var v251 = outputWindow.document;
    var v765 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p16) {
      var v755 = v765.match(/\([^\(]+\)\b/)
    }
    var v743 = v755.toString();
    introspect(JAM.policy.p15) {
      var v728 = v743.replace(/\(|\)/g, "")
    }
    var v713 = "<tr><td>" + v728;
    var v693 = v713 + "</td><td>";
    var v653 = v693 + tempNumber;
    var v587 = v653 + "</td><td>";
    introspect(JAM.policy.p9) {
      var v588 = percentage.toFixed(2)
    }
    var v489 = v587 + v588;
    var v252 = v489 + "</td></tr>\n";
    introspect(JAM.policy.p18) {
      v251.write(v252);
    }
    i$$10++;
    var v490 = arrayOfItems$$1.length;
    v253 = i$$10 < v490;
  }
  var v254 = outputWindow.document;
  introspect(JAM.policy.p12) {
    v254.write("</tbody></table>\n");
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
  var v491 = sequence$$17.length;
  var v261 = v491 > 0;
  for (;v261;) {
    maxNum$$1 = sequence$$17.length;
    var v492 = Math.random();
    var v255 = v492 * maxNum$$1;
    introspect(JAM.policy.p16) {
      randNum$$1 = Math.floor(v255);
    }
    introspect(JAM.policy.p16) {
      tempChar$$2 = sequence$$17.charAt(randNum$$1);
    }
    tempSeq = tempSeq + tempChar$$2;
    introspect(JAM.policy.p13) {
      tempString1 = sequence$$17.substring(0, randNum$$1);
    }
    var v256 = randNum$$1 + 1;
    var v257 = sequence$$17.length;
    introspect(JAM.policy.p15) {
      tempString2 = sequence$$17.substring(v256, v257);
    }
    sequence$$17 = tempString1 + tempString2;
    var v493 = tempSeq.length;
    var v260 = v493 == 60;
    if (v260) {
      var v258 = outputWindow.document;
      var v259 = tempSeq + "\n";
      introspect(JAM.policy.p18) {
        v258.write(v259);
      }
      tempSeq = "";
    }
    var v494 = sequence$$17.length;
    v261 = v494 > 0;
  }
  var v262 = outputWindow.document;
  var v263 = tempSeq + "\n";
  introspect(JAM.policy.p18) {
    v262.write(v263);
  }
  return true;
}
function genbankFeat() {
  var theDocument = document;
  var maxInput$$3 = 1E6;
  var v495 = testScript();
  var v264 = v495 == false;
  if (v264) {
    return;
  }
  var v744 = theDocument.forms;
  var v729 = v744[0];
  var v714 = v729.elements;
  var v694 = v714[0];
  var v654 = checkFormElement(v694);
  var v589 = v654 == false;
  var v656 = !v589;
  if (v656) {
    var v756 = theDocument.forms;
    var v745 = v756[0];
    var v730 = v745.elements;
    var v715 = v730[0];
    var v695 = v715.value;
    var v655 = verifyGenBankFeat(v695);
    v589 = v655 == false;
  }
  var v496 = v589;
  var v591 = !v496;
  if (v591) {
    var v746 = theDocument.forms;
    var v731 = v746[0];
    var v716 = v731.elements;
    var v696 = v716[0];
    var v657 = v696.value;
    var v590 = checkTextLength(v657, maxInput$$3);
    v496 = v590 == false;
  }
  var v265 = v496;
  if (v265) {
    return;
  }
  openWindow();
  openPre();
  var v697 = theDocument.forms;
  var v658 = v697[0];
  var v592 = v658.elements;
  var v497 = v592[0];
  var v266 = v497.value;
  var v732 = theDocument.forms;
  var v717 = v732[0];
  var v698 = v717.elements;
  var v659 = v698[4];
  var v593 = v659.options;
  var v733 = theDocument.forms;
  var v718 = v733[0];
  var v699 = v718.elements;
  var v660 = v699[4];
  var v594 = v660.selectedIndex;
  var v498 = v593[v594];
  var v267 = v498.value;
  genBankFeatExtract(v266, v267);
  closePre();
  closeWindow();
  return;
}
function genBankFeatExtract(genBankFile$$2, outputType) {
  var v268 = "_" + genBankFile$$2;
  genBankFile$$2 = v268 + "_";
  introspect(JAM.policy.p16) {
    var recordArray = genBankFile$$2.split(/LOCUS\s\s\s[^\f\n\r]*/m)
  }
  var i$$11 = 1;
  var v499 = recordArray.length;
  var v277 = i$$11 < v499;
  for (;v277;) {
    var v269 = recordArray[i$$11];
    introspect(JAM.policy.p16) {
      var mainArray = v269.split(/DEFINITION|ACCESSION|FEATURES|ORIGIN[^\f\n\r]*/)
    }
    var v595 = mainArray[1];
    introspect(JAM.policy.p15) {
      var v500 = v595.replace(/[\f\n\r\t]+$/g, "")
    }
    var v270 = filterFastaTitle(v500);
    var title$$9 = v270 + "\n";
    var v271 = mainArray[4];
    introspect(JAM.policy.p16) {
      var dnaSequenceArray = v271.split(/\/{2}/)
    }
    var v272 = outputWindow.document;
    var v273 = title$$9 + "\n";
    introspect(JAM.policy.p18) {
      v272.write(v273);
    }
    var v501 = dnaSequenceArray.length;
    var v274 = v501 == 1;
    if (v274) {
      alert("The entire GenBank file may not have been processed.");
      outputWindow.focus();
    }
    var v275 = dnaSequenceArray[0];
    var dnaSequence$$3 = removeNonDna(v275);
    var v276 = mainArray[3];
    introspect(JAM.policy.p16) {
      var featureArray = v276.split(/[\f\n\r] {5,12}\b/)
    }
    prepareFeatures(featureArray, dnaSequence$$3, outputType);
    i$$11++;
    var v502 = recordArray.length;
    v277 = i$$11 < v502;
  }
  return;
}
function prepareFeatures(arrayOfFeatures, dnaSequence$$4, outputType$$1) {
  var featureTitle = "";
  var theTitle = "";
  var removedTitle = "";
  var firstQualifier = "";
  var position = "";
  var positionNoSpace = "";
  var featureFound = false;
  var i$$12 = 1;
  var v503 = arrayOfFeatures.length;
  var v287 = i$$12 < v503;
  for (;v287;) {
    var v278 = arrayOfFeatures[i$$12];
    introspect(JAM.policy.p15) {
      var v801 = v278.replace(/[\[\]\*]/g, "")
    }
    arrayOfFeatures[i$$12] = v801;
    var v504 = arrayOfFeatures[i$$12];
    introspect(JAM.policy.p16) {
      var v279 = v504.match(/[^ \f\n\r\t\v]+ /)
    }
    featureTitle = v279.toString();
    theTitle = new RegExp(featureTitle);
    var v280 = arrayOfFeatures[i$$12];
    introspect(JAM.policy.p19) {
      removedTitle = v280.replace(theTitle, "");
    }
    var v596 = arrayOfFeatures[i$$12];
    introspect(JAM.policy.p16) {
      var v505 = v596.search(/\/[^\f\n\r]+/)
    }
    var v282 = v505 != -1;
    if (v282) {
      var v506 = arrayOfFeatures[i$$12];
      introspect(JAM.policy.p16) {
        var v281 = v506.match(/\/[^\f\n\r]+/)
      }
      firstQualifier = v281.toString();
    } else {
      firstQualifier = "/no qualifier supplied";
    }
    introspect(JAM.policy.p16) {
      position = removedTitle.split(/\//);
    }
    var v283 = position[0];
    introspect(JAM.policy.p15) {
      positionNoSpace = v283.replace(/\s{2,}/g, " ");
    }
    var v284 = outputWindow.document;
    var v661 = filterFastaTitle(featureTitle);
    var v597 = "&gt;" + v661;
    var v598 = filterFastaTitle(firstQualifier);
    var v507 = v597 + v598;
    var v285 = v507 + "\n";
    introspect(JAM.policy.p18) {
      v284.write(v285);
    }
    printFeature(positionNoSpace, dnaSequence$$4, outputType$$1);
    featureFound = true;
    var v286 = outputWindow.document;
    introspect(JAM.policy.p12) {
      v286.write("\n\n");
    }
    i$$12++;
    var v508 = arrayOfFeatures.length;
    v287 = i$$12 < v508;
  }
  var v289 = featureFound == false;
  if (v289) {
    var v288 = outputWindow.document;
    introspect(JAM.policy.p12) {
      v288.write("There were no features found or there was a problem reading the feature information.");
    }
  }
  return;
}
function printFeature(featurePos, dnaSequence$$5, outputType$$2) {
  var feature$$4;
  introspect(JAM.policy.p15) {
    featurePos = featurePos.replace(/<|>/g, "");
  }
  introspect(JAM.policy.p16) {
    var v662 = featurePos.search(/[^a-z\d\.\(\)\,\s]/)
  }
  var v599 = v662 != -1;
  var v664 = !v599;
  if (v664) {
    introspect(JAM.policy.p16) {
      var v663 = featurePos.search(/one/)
    }
    v599 = v663 != -1;
  }
  var v509 = v599;
  var v601 = !v509;
  if (v601) {
    introspect(JAM.policy.p16) {
      var v600 = featurePos.search(/order/)
    }
    v509 = v600 != -1;
  }
  var v308 = v509;
  if (v308) {
    var v290 = outputWindow.document;
    introspect(JAM.policy.p12) {
      v290.write("This feature specifies a sequence that cannot be represented:\n");
    }
    var v291 = outputWindow.document;
    introspect(JAM.policy.p18) {
      v291.write(featurePos);
    }
  } else {
    introspect(JAM.policy.p15) {
      var newFeaturePos = featurePos.replace(/\)/g, "")
    }
    introspect(JAM.policy.p16) {
      var v510 = newFeaturePos.search(/complement/)
    }
    var v292 = v510 != -1;
    if (v292) {
      feature$$4 = new Feature("complement");
    } else {
      feature$$4 = new Feature("direct");
    }
    introspect(JAM.policy.p16) {
      var posArray = newFeaturePos.split(/\(/)
    }
    var v293 = posArray.length;
    var last = v293 - 1;
    var pairString = posArray[last];
    introspect(JAM.policy.p16) {
      var pairArray = pairString.split(/\,/)
    }
    var digitArray = new Array;
    var realStart = 0;
    var realStop = 0;
    var j$$10 = 0;
    var v511 = pairArray.length;
    var v307 = j$$10 < v511;
    for (;v307;) {
      var v294 = pairArray[j$$10];
      introspect(JAM.policy.p16) {
        digitArray = v294.split(/\.\./);
      }
      var v512 = digitArray.length;
      var v295 = v512 == 1;
      if (v295) {
        digitArray[1] = digitArray[0];
      }
      realStart = digitArray[0];
      realStop = digitArray[1];
      introspect(JAM.policy.p15) {
        realStop = realStop.replace(/\D/g, "");
      }
      introspect(JAM.policy.p15) {
        realStart = realStart.replace(/\D/g, "");
      }
      introspect(JAM.policy.p16) {
        var v602 = realStart.search(/\d/)
      }
      var v513 = v602 == -1;
      var v604 = !v513;
      if (v604) {
        introspect(JAM.policy.p16) {
          var v603 = realStop.search(/\d/)
        }
        v513 = v603 == -1;
      }
      var v297 = v513;
      if (v297) {
        var v296 = outputWindow.document;
        introspect(JAM.policy.p12) {
          v296.write("There was a problem with this feature (one of the range values was missing).");
        }
        return;
      }
      var v298 = parseInt(realStart);
      realStart = v298 - 1;
      realStop = parseInt(realStop);
      var v300 = realStart > realStop;
      if (v300) {
        var v299 = outputWindow.document;
        introspect(JAM.policy.p12) {
          v299.write("There was a problem with this feature (the end position was before the start position).");
        }
        return;
      }
      var v605 = dnaSequence$$5.length;
      var v514 = realStart > v605;
      var v607 = !v514;
      if (v607) {
        var v606 = dnaSequence$$5.length;
        v514 = realStop > v606;
      }
      var v306 = v514;
      if (v306) {
        var v301 = outputWindow.document;
        introspect(JAM.policy.p12) {
          v301.write("The entire GenBank file was not processed, so this feature cannot be properly shown.");
        }
        return;
      } else {
        var v305 = outputType$$2 == "separated";
        if (v305) {
          introspect(JAM.policy.p27) {
            var v302 = dnaSequence$$5.substring(realStart, realStop)
          }
          introspect(JAM.policy.p18) {
            feature$$4.addFragment(v302);
          }
        } else {
          var v515 = feature$$4.lastAdded;
          introspect(JAM.policy.p27) {
            var v303 = dnaSequence$$5.substring(v515, realStart)
          }
          introspect(JAM.policy.p18) {
            feature$$4.addFragment(v303);
          }
          introspect(JAM.policy.p27) {
            var v516 = dnaSequence$$5.substring(realStart, realStop)
          }
          var v304 = v516.toUpperCase();
          introspect(JAM.policy.p18) {
            feature$$4.addFragment(v304);
          }
          feature$$4.lastAdded = realStop;
        }
      }
      j$$10++;
      var v517 = pairArray.length;
      v307 = j$$10 < v517;
    }
    feature$$4.writeFeature();
  }
  return;
}
function writeFeature() {
  var v518 = this.strand;
  var v313 = v518 == "complement";
  if (v313) {
    var v309 = outputWindow.document;
    var v700 = this.fragments;
    introspect(JAM.policy.p12) {
      var v665 = v700.join("")
    }
    var v608 = complement(v665);
    var v519 = reverse(v608);
    var v310 = addReturns(v519);
    introspect(JAM.policy.p18) {
      v309.write(v310);
    }
  } else {
    var v311 = outputWindow.document;
    var v609 = this.fragments;
    introspect(JAM.policy.p12) {
      var v520 = v609.join("")
    }
    var v312 = addReturns(v520);
    introspect(JAM.policy.p18) {
      v311.write(v312);
    }
  }
  return;
}
function addFragment(sequence$$18) {
  var v314 = this.fragments;
  introspect(JAM.policy.p18) {
    v314.push(sequence$$18);
  }
  return;
}
function Feature(strand) {
  this.strand = strand;
  var v802 = new Array;
  this.fragments = v802;
  this.lastAdded = 0;
  return;
}
new Feature;
var v315 = Feature.prototype;
v315.writeFeature = writeFeature;
var v316 = Feature.prototype;
v316.addFragment = addFragment;
document.onload = v2;
introspect(JAM.policy.p12) {
  var v317 = document.getElementById("submitbtn")
}
v317.onclick = v3;
introspect(JAM.policy.p12) {
  var v318 = document.getElementById("clearbtn")
}
v318.onclick = v4

JAM.stopProfile('load');
