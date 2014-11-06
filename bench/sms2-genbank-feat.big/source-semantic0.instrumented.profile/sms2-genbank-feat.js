
JAM.startProfile('load');
function v4() {
  var v628 = document.forms;
  var v536 = v628[0];
  var v331 = v536.elements;
  var v5 = v331[0];
  v5.value = " ";
  return;
}
function v3() {
  try {
    genbankFeat(document);
  } catch (e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    alert(v6);
  }
  return;
}
function v2() {
  var v332 = document.main_form;
  var v7 = v332.main_submit;
  v7.focus();
  return;
}
function addReturns(sequence) {
  function v0(str$$6, p1, offset$$8, s$$2) {
    return p1 + "\n";
  }
  introspect(JAM.policy.p27) {
    sequence = sequence.replace(/(.{60})/g, v0);
  }
  return sequence;
}
function checkAlign(arrayOfTitles, arrayOfSequences) {
  var v8 = arrayOfSequences[0];
  var lengthOfAlign = v8.length;
  var v333 = arrayOfSequences.length;
  var v9 = v333 < 2;
  if (v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v334 = arrayOfTitles.length;
  var v11 = i$$1 < v334;
  for (;v11;) {
    introspect(JAM.policy.p26) {
      var v686 = arrayOfTitles[i$$1]
    }
    introspect(JAM.policy.p28) {
      var v629 = v686.search(/\S/)
    }
    var v537 = v629 == -1;
    var v631 = !v537;
    if (v631) {
      introspect(JAM.policy.p26) {
        var v687 = arrayOfSequences[i$$1]
      }
      introspect(JAM.policy.p28) {
        var v630 = v687.search(/\S/)
      }
      v537 = v630 == -1;
    }
    var v335 = v537;
    var v539 = !v335;
    if (v539) {
      introspect(JAM.policy.p26) {
        var v632 = arrayOfSequences[i$$1]
      }
      var v538 = v632.length;
      v335 = v538 != lengthOfAlign;
    }
    var v10 = v335;
    if (v10) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1 = i$$1 + 1;
    var v336 = arrayOfTitles.length;
    v11 = i$$1 < v336;
  }
  return true;
}
function checkCodonTable(codonTable) {
  introspect(JAM.policy.p28) {
    var v721 = codonTable.search(/AmAcid/)
  }
  var v688 = v721 == -1;
  var v723 = !v688;
  if (v723) {
    introspect(JAM.policy.p28) {
      var v722 = codonTable.search(/Codon/)
    }
    v688 = v722 == -1;
  }
  var v633 = v688;
  var v690 = !v633;
  if (v690) {
    introspect(JAM.policy.p28) {
      var v689 = codonTable.search(/Number/)
    }
    v633 = v689 == -1;
  }
  var v540 = v633;
  var v635 = !v540;
  if (v635) {
    introspect(JAM.policy.p28) {
      var v634 = codonTable.search(/\/1000/)
    }
    v540 = v634 == -1;
  }
  var v337 = v540;
  var v542 = !v337;
  if (v542) {
    introspect(JAM.policy.p28) {
      var v541 = codonTable.search(/Fraction\s*\.\./)
    }
    v337 = v541 == -1;
  }
  var v12 = v337;
  if (v12) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v543 = formElement.value;
  introspect(JAM.policy.p28) {
    var v338 = v543.search(/\S/)
  }
  var v13 = v338 == -1;
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
  var v339 = arrayOfPatterns.length;
  var v16 = z$$2 < v339;
  for (;v16;) {
    introspect(JAM.policy.p26) {
      var v544 = arrayOfPatterns[z$$2]
    }
    introspect(JAM.policy.p28) {
      var v340 = v544.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/)
    }
    var v14 = v340 == -1;
    if (v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    introspect(JAM.policy.p26) {
      var v545 = arrayOfPatterns[z$$2]
    }
    var v341 = moreExpressionCheck(v545);
    var v15 = v341 == false;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v342 = arrayOfPatterns.length;
    v16 = z$$2 < v342;
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v343 = arrayOfPatterns.length;
  var v25 = j < v343;
  for (;v25;) {
    var v19 = geneticCodeMatchExp;
    var v20 = j;
    introspect(JAM.policy.p26) {
      var v636 = arrayOfPatterns[j]
    }
    introspect(JAM.policy.p28) {
      var v546 = v636.match(/\/.+\//)
    }
    var v344 = v546 + "gi";
    var v815 = eval(v344);
    introspect(JAM.policy.p13) {
      v19[v20] = v815;
    }
    var v21 = geneticCodeMatchResult;
    var v22 = j;
    introspect(JAM.policy.p26) {
      var v547 = arrayOfPatterns[j]
    }
    introspect(JAM.policy.p28) {
      var v345 = v547.match(/=[a-zA-Z\*]/)
    }
    var v816 = v345.toString();
    introspect(JAM.policy.p13) {
      v21[v22] = v816;
    }
    var v23 = geneticCodeMatchResult;
    var v24 = j;
    introspect(JAM.policy.p26) {
      var v346 = geneticCodeMatchResult[j]
    }
    introspect(JAM.policy.p27) {
      var v817 = v346.replace(/=/g, "")
    }
    introspect(JAM.policy.p13) {
      v23[v24] = v817;
    }
    j = j + 1;
    var v347 = arrayOfPatterns.length;
    v25 = j < v347;
  }
  var i$$2 = 0;
  var v548 = testSequence.length;
  var v348 = v548 - 3;
  var v32 = i$$2 <= v348;
  for (;v32;) {
    var v26 = i$$2 + 3;
    introspect(JAM.policy.p27) {
      codon = testSequence.substring(i$$2, v26);
    }
    j = 0;
    var v349 = geneticCodeMatchExp.length;
    var v30 = j < v349;
    for (;v30;) {
      introspect(JAM.policy.p26) {
        var v549 = geneticCodeMatchExp[j]
      }
      introspect(JAM.policy.p39) {
        var v350 = codon.search(v549)
      }
      var v29 = v350 != -1;
      if (v29) {
        var v28 = oneMatch == true;
        if (v28) {
          var v351 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v27 = v351 + ".";
          alert(v27);
          return false;
        }
        oneMatch = true;
      }
      j = j + 1;
      var v352 = geneticCodeMatchExp.length;
      v30 = j < v352;
    }
    var v31 = oneMatch == false;
    if (v31) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v550 = testSequence.length;
    var v353 = v550 - 3;
    v32 = i$$2 <= v353;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v354 = arrayOfPatterns$$1.length;
  var v34 = z$$3 < v354;
  for (;v34;) {
    introspect(JAM.policy.p26) {
      var v551 = arrayOfPatterns$$1[z$$3]
    }
    introspect(JAM.policy.p28) {
      var v355 = v551.search(/[^acdefghiklmnpqrstvwyz]/i)
    }
    var v33 = v355 != -1;
    if (v33) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v356 = arrayOfPatterns$$1.length;
    v34 = z$$3 < v356;
  }
  var i$$3 = 0;
  var v357 = arrayOfPatterns$$1.length;
  var v38 = i$$3 < v357;
  for (;v38;) {
    introspect(JAM.policy.p26) {
      var v552 = arrayOfPatterns$$1[i$$3]
    }
    var v358 = "[" + v552;
    var v35 = v358 + "]";
    var re = new RegExp(v35, "gi");
    var j$$1 = i$$3 + 1;
    var v359 = arrayOfPatterns$$1.length;
    var v37 = j$$1 < v359;
    for (;v37;) {
      introspect(JAM.policy.p26) {
        var v553 = arrayOfPatterns$$1[j$$1]
      }
      introspect(JAM.policy.p39) {
        var v360 = v553.search(re)
      }
      var v36 = v360 != -1;
      if (v36) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1 = j$$1 + 1;
      var v361 = arrayOfPatterns$$1.length;
      v37 = j$$1 < v361;
    }
    i$$3 = i$$3 + 1;
    var v362 = arrayOfPatterns$$1.length;
    v38 = i$$3 < v362;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v363 = arrayOfPatterns$$2.length;
  var v41 = z$$4 < v363;
  for (;v41;) {
    introspect(JAM.policy.p26) {
      var v554 = arrayOfPatterns$$2[z$$4]
    }
    introspect(JAM.policy.p28) {
      var v364 = v554.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i)
    }
    var v39 = v364 == -1;
    if (v39) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    introspect(JAM.policy.p26) {
      var v555 = arrayOfPatterns$$2[z$$4]
    }
    var v365 = moreExpressionCheck(v555);
    var v40 = v365 == false;
    if (v40) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v366 = arrayOfPatterns$$2.length;
    v41 = z$$4 < v366;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v637 = getSequenceFromFasta(text$$7);
  introspect(JAM.policy.p27) {
    var v556 = v637.replace(/[^A-Za-z]/g, "")
  }
  var v367 = v556.length;
  var v43 = v367 > maxInput;
  if (v43) {
    var v368 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v42 = v368 + " characters.";
    alert(v42);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v369 = text$$8.length;
  var v45 = v369 > maxInput$$1;
  if (v45) {
    var v370 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v44 = v370 + " characters.";
    alert(v44);
    return false;
  } else {
    return true;
  }
  return;
}
function complement(dnaSequence) {
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/g/g, "1");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/c/g, "2");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/1/g, "c");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/2/g, "g");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/G/g, "1");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/C/g, "2");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/1/g, "C");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/2/g, "G");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/a/g, "1");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/t/g, "2");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/1/g, "t");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/2/g, "a");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/A/g, "1");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/T/g, "2");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/1/g, "T");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/2/g, "A");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/u/g, "a");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/U/g, "A");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/r/g, "1");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/y/g, "2");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/1/g, "y");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/2/g, "r");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/R/g, "1");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/Y/g, "2");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/1/g, "Y");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/2/g, "R");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/k/g, "1");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/m/g, "2");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/1/g, "m");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/2/g, "k");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/K/g, "1");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/M/g, "2");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/1/g, "M");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/2/g, "K");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/b/g, "1");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/v/g, "2");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/1/g, "v");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/2/g, "b");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/B/g, "1");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/V/g, "2");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/1/g, "V");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/2/g, "B");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/d/g, "1");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/h/g, "2");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/1/g, "h");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/2/g, "d");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/D/g, "1");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/H/g, "2");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/1/g, "H");
  }
  introspect(JAM.policy.p27) {
    dnaSequence = dnaSequence.replace(/2/g, "D");
  }
  return dnaSequence;
}
function closeForm() {
  var v46 = outputWindow.document;
  introspect(JAM.policy.p24) {
    v46.write("</form>");
  }
  return true;
}
function closePre() {
  var v47 = outputWindow.document;
  introspect(JAM.policy.p24) {
    v47.write("</div>");
  }
  var v48 = outputWindow.document;
  introspect(JAM.policy.p24) {
    v48.write("</pre>\n");
  }
  return;
}
function closeTextArea() {
  var v49 = outputWindow.document;
  introspect(JAM.policy.p24) {
    v49.write("</textarea>");
  }
  return true;
}
function closeWindow() {
  var v50 = outputWindow.document;
  introspect(JAM.policy.p24) {
    v50.write("</body>\n</html>\n");
  }
  outputWindow.status = "Done.";
  var v51 = outputWindow.document;
  v51.close();
  return true;
}
function convertDegenerates(sequence$$1) {
  sequence$$1 = sequence$$1.toLowerCase();
  introspect(JAM.policy.p27) {
    sequence$$1 = sequence$$1.replace(/t/g, "[TU]");
  }
  introspect(JAM.policy.p27) {
    sequence$$1 = sequence$$1.replace(/r/g, "[AGR]");
  }
  introspect(JAM.policy.p27) {
    sequence$$1 = sequence$$1.replace(/y/g, "[CTUY]");
  }
  introspect(JAM.policy.p27) {
    sequence$$1 = sequence$$1.replace(/s/g, "[GCS]");
  }
  introspect(JAM.policy.p27) {
    sequence$$1 = sequence$$1.replace(/w/g, "[ATUW]");
  }
  introspect(JAM.policy.p27) {
    sequence$$1 = sequence$$1.replace(/k/g, "[GTUK]");
  }
  introspect(JAM.policy.p27) {
    sequence$$1 = sequence$$1.replace(/m/g, "[ACM]");
  }
  introspect(JAM.policy.p27) {
    sequence$$1 = sequence$$1.replace(/b/g, "[CGTUBSKY]");
  }
  introspect(JAM.policy.p27) {
    sequence$$1 = sequence$$1.replace(/d/g, "[AGTUDRKW]");
  }
  introspect(JAM.policy.p27) {
    sequence$$1 = sequence$$1.replace(/h/g, "[ACTUHMYW]");
  }
  introspect(JAM.policy.p27) {
    sequence$$1 = sequence$$1.replace(/v/g, "[ACGVSMR]");
  }
  introspect(JAM.policy.p27) {
    sequence$$1 = sequence$$1.replace(/n/g, "[ACGTURYSWKMBDHVN]");
  }
  return sequence$$1;
}
function earlyCheckAlign(alignArray) {
  var v371 = alignArray.length;
  var v52 = v371 < 3;
  if (v52) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v372 = alignArray.length;
  var v54 = i$$4 < v372;
  for (;v54;) {
    introspect(JAM.policy.p26) {
      var v557 = alignArray[i$$4]
    }
    introspect(JAM.policy.p28) {
      var v373 = v557.search(/[^\s]+\s/)
    }
    var v53 = v373 == -1;
    if (v53) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4 = i$$4 + 1;
    var v374 = alignArray.length;
    v54 = i$$4 < v374;
  }
  return true;
}
function filterAlignSeq(alignSeq) {
  introspect(JAM.policy.p27) {
    alignSeq = alignSeq.replace(/[^abcdefghiklmnpqrstvwxyz\.\-]/gi, "");
  }
  return alignSeq;
}
function filterFastaTitle(sequenceTitle) {
  introspect(JAM.policy.p27) {
    sequenceTitle = sequenceTitle.replace(/\s{2,}/g, " ");
  }
  introspect(JAM.policy.p27) {
    sequenceTitle = sequenceTitle.replace(/^\s*/g, "");
  }
  introspect(JAM.policy.p27) {
    sequenceTitle = sequenceTitle.replace(/[\f\n\r\t]+$/g, "\n");
  }
  introspect(JAM.policy.p27) {
    return sequenceTitle.replace(/[\<\>]\n/gi, "");
  }
}
function getArrayOfFasta(sequenceData) {
  var arrayOfFasta = new Array;
  var matchArray;
  var re$$1 = /\>[^\>]+/g;
  introspect(JAM.policy.p28) {
    var v375 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v57 = v375 != -1;
  if (v57) {
    introspect(JAM.policy.p39) {
      var v56 = matchArray = re$$1.exec(sequenceData)
    }
    for (;v56;) {
      var v55 = matchArray[0];
      introspect(JAM.policy.p39) {
        arrayOfFasta.push(v55);
      }
      introspect(JAM.policy.p39) {
        v56 = matchArray = re$$1.exec(sequenceData);
      }
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v376 = sequence$$2.length;
  var v58 = "&gt;results for " + v376;
  var stringToReturn = v58 + " residue sequence ";
  introspect(JAM.policy.p28) {
    var v377 = fastaSequenceTitle.search(/[^\s]/)
  }
  var v60 = v377 != -1;
  if (v60) {
    var v378 = stringToReturn + '"';
    var v59 = v378 + fastaSequenceTitle;
    stringToReturn = v59 + '"';
  }
  var v379 = stringToReturn + ' starting "';
  introspect(JAM.policy.p23) {
    var v380 = sequence$$2.substring(0, 10)
  }
  var v61 = v379 + v380;
  stringToReturn = v61 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v381 = sequenceOne.length;
  var v62 = "Search results for " + v381;
  var stringToReturn$$1 = v62 + " residue sequence ";
  introspect(JAM.policy.p28) {
    var v382 = fastaSequenceTitleOne.search(/[^\s]/)
  }
  var v64 = v382 != -1;
  if (v64) {
    var v383 = stringToReturn$$1 + '"';
    var v63 = v383 + fastaSequenceTitleOne;
    stringToReturn$$1 = v63 + '"';
  }
  var v384 = stringToReturn$$1 + ' starting "';
  introspect(JAM.policy.p23) {
    var v385 = sequenceOne.substring(0, 10)
  }
  var v65 = v384 + v385;
  stringToReturn$$1 = v65 + '"\n';
  var v386 = stringToReturn$$1 + "and ";
  var v387 = sequenceTwo.length;
  var v66 = v386 + v387;
  stringToReturn$$1 = v66 + " residue sequence ";
  introspect(JAM.policy.p28) {
    var v388 = fastaSequenceTitleTwo.search(/[^\s]/)
  }
  var v68 = v388 != -1;
  if (v68) {
    var v389 = stringToReturn$$1 + '"';
    var v67 = v389 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v67 + '"';
  }
  var v390 = stringToReturn$$1 + ' starting "';
  introspect(JAM.policy.p23) {
    var v391 = sequenceTwo.substring(0, 10)
  }
  var v69 = v390 + v391;
  stringToReturn$$1 = v69 + '"';
  var v70 = '<div class="info">' + stringToReturn$$1;
  return v70 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v71 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v71);
  var j$$2 = 0;
  var v392 = arrayOfPatterns$$3.length;
  var v74 = j$$2 < v392;
  for (;v74;) {
    var v72 = geneticCodeMatchExp$$1;
    var v73 = j$$2;
    introspect(JAM.policy.p26) {
      var v638 = arrayOfPatterns$$3[j$$2]
    }
    introspect(JAM.policy.p28) {
      var v558 = v638.match(/\/.+\//)
    }
    var v393 = v558 + "gi";
    var v818 = eval(v393);
    introspect(JAM.policy.p13) {
      v72[v73] = v818;
    }
    j$$2 = j$$2 + 1;
    var v394 = arrayOfPatterns$$3.length;
    v74 = j$$2 < v394;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v75 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v75);
  var j$$3 = 0;
  var v395 = arrayOfPatterns$$4.length;
  var v80 = j$$3 < v395;
  for (;v80;) {
    var v76 = geneticCodeMatchResult$$1;
    var v77 = j$$3;
    introspect(JAM.policy.p26) {
      var v559 = arrayOfPatterns$$4[j$$3]
    }
    introspect(JAM.policy.p28) {
      var v396 = v559.match(/=[a-zA-Z\*]/)
    }
    var v819 = v396.toString();
    introspect(JAM.policy.p13) {
      v76[v77] = v819;
    }
    var v78 = geneticCodeMatchResult$$1;
    var v79 = j$$3;
    introspect(JAM.policy.p26) {
      var v397 = geneticCodeMatchResult$$1[j$$3]
    }
    introspect(JAM.policy.p27) {
      var v820 = v397.replace(/=/g, "")
    }
    introspect(JAM.policy.p13) {
      v78[v79] = v820;
    }
    j$$3 = j$$3 + 1;
    var v398 = arrayOfPatterns$$4.length;
    v80 = j$$3 < v398;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v399 = sequence$$3.length;
  var v81 = "Results for " + v399;
  var stringToReturn$$2 = v81 + " residue sequence ";
  introspect(JAM.policy.p28) {
    var v400 = fastaSequenceTitle$$1.search(/[^\s]/)
  }
  var v83 = v400 != -1;
  if (v83) {
    var v401 = stringToReturn$$2 + '"';
    var v82 = v401 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v82 + '"';
  }
  var v402 = stringToReturn$$2 + ' starting "';
  introspect(JAM.policy.p23) {
    var v403 = sequence$$3.substring(0, 10)
  }
  var v84 = v402 + v403;
  stringToReturn$$2 = v84 + '"';
  var v85 = '<div class="info">' + stringToReturn$$2;
  return v85 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v560 = "Results for " + topology;
  var v404 = v560 + " ";
  var v405 = sequence$$4.length;
  var v86 = v404 + v405;
  var stringToReturn$$3 = v86 + " residue sequence ";
  introspect(JAM.policy.p28) {
    var v406 = fastaSequenceTitle$$2.search(/[^\s]/)
  }
  var v88 = v406 != -1;
  if (v88) {
    var v407 = stringToReturn$$3 + '"';
    var v87 = v407 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v87 + '"';
  }
  var v408 = stringToReturn$$3 + ' starting "';
  introspect(JAM.policy.p23) {
    var v409 = sequence$$4.substring(0, 10)
  }
  var v89 = v408 + v409;
  stringToReturn$$3 = v89 + '"';
  var v90 = '<div class="info">' + stringToReturn$$3;
  return v90 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v410 = sequenceOne$$1.length;
  var v91 = "Alignment results for " + v410;
  var stringToReturn$$4 = v91 + " residue sequence ";
  introspect(JAM.policy.p28) {
    var v411 = fastaSequenceTitleOne$$1.search(/[^\s]/)
  }
  var v93 = v411 != -1;
  if (v93) {
    var v412 = stringToReturn$$4 + '"';
    var v92 = v412 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v92 + '"';
  }
  var v413 = stringToReturn$$4 + ' starting "';
  introspect(JAM.policy.p23) {
    var v414 = sequenceOne$$1.substring(0, 10)
  }
  var v94 = v413 + v414;
  stringToReturn$$4 = v94 + '"\n';
  var v415 = stringToReturn$$4 + "and ";
  var v416 = sequenceTwo$$1.length;
  var v95 = v415 + v416;
  stringToReturn$$4 = v95 + " residue sequence ";
  introspect(JAM.policy.p28) {
    var v417 = fastaSequenceTitleTwo$$1.search(/[^\s]/)
  }
  var v97 = v417 != -1;
  if (v97) {
    var v418 = stringToReturn$$4 + '"';
    var v96 = v418 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v96 + '"';
  }
  var v419 = stringToReturn$$4 + ' starting "';
  introspect(JAM.policy.p23) {
    var v420 = sequenceTwo$$1.substring(0, 10)
  }
  var v98 = v419 + v420;
  stringToReturn$$4 = v98 + '"';
  var v99 = '<div class="info">' + stringToReturn$$4;
  return v99 + "</div>\n";
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v101 = j$$4 < lengthOut;
  for (;v101;) {
    var v421 = Math.random();
    var v422 = components.length;
    var v100 = v421 * v422;
    introspect(JAM.policy.p28) {
      tempNum = Math.floor(v100);
    }
    introspect(JAM.policy.p26) {
      tempChar = components[tempNum];
    }
    introspect(JAM.policy.p39) {
      sequenceArray.push(tempChar);
    }
    j$$4 = j$$4 + 1;
    v101 = j$$4 < lengthOut;
  }
  introspect(JAM.policy.p24) {
    return sequenceArray.join("");
  }
}
function getSequenceFromFasta(sequenceRecord) {
  introspect(JAM.policy.p28) {
    var v423 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v102 = v423 != -1;
  if (v102) {
    introspect(JAM.policy.p27) {
      sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "");
    }
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  introspect(JAM.policy.p28) {
    var v424 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v104 = v424 != -1;
  if (v104) {
    introspect(JAM.policy.p27) {
      var v103 = sequenceRecord$$1.match(/\>[^\f\n\r]+[\f\n\r]/, "")
    }
    fastaTitle = v103.toString();
    introspect(JAM.policy.p27) {
      fastaTitle = fastaTitle.replace(/\>|[\f\n\r]/g, "");
    }
    introspect(JAM.policy.p27) {
      fastaTitle = fastaTitle.replace(/\s{2,}/g, " ");
    }
    introspect(JAM.policy.p27) {
      fastaTitle = fastaTitle.replace(/[\<\>]/gi, "");
    }
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  introspect(JAM.policy.p28) {
    var v793 = expressionToCheck.search(/\[[A-Za-z\|]*\[/)
  }
  var v786 = v793 != -1;
  var v795 = !v786;
  if (v795) {
    introspect(JAM.policy.p28) {
      var v794 = expressionToCheck.search(/\][A-Za-z\|]*\]/)
    }
    v786 = v794 != -1;
  }
  var v777 = v786;
  var v788 = !v777;
  if (v788) {
    introspect(JAM.policy.p28) {
      var v787 = expressionToCheck.search(/\[\]/)
    }
    v777 = v787 != -1;
  }
  var v767 = v777;
  var v779 = !v767;
  if (v779) {
    introspect(JAM.policy.p28) {
      var v778 = expressionToCheck.search(/\/[A-Za-z\|]*\]/)
    }
    v767 = v778 != -1;
  }
  var v754 = v767;
  var v769 = !v754;
  if (v769) {
    introspect(JAM.policy.p28) {
      var v768 = expressionToCheck.search(/\[[A-Za-z\|]*\//)
    }
    v754 = v768 != -1;
  }
  var v739 = v754;
  var v756 = !v739;
  if (v756) {
    introspect(JAM.policy.p28) {
      var v755 = expressionToCheck.search(/\|\|/)
    }
    v739 = v755 != -1;
  }
  var v724 = v739;
  var v741 = !v724;
  if (v741) {
    introspect(JAM.policy.p28) {
      var v740 = expressionToCheck.search(/\/\|/)
    }
    v724 = v740 != -1;
  }
  var v691 = v724;
  var v726 = !v691;
  if (v726) {
    introspect(JAM.policy.p28) {
      var v725 = expressionToCheck.search(/\|\//)
    }
    v691 = v725 != -1;
  }
  var v639 = v691;
  var v693 = !v639;
  if (v693) {
    introspect(JAM.policy.p28) {
      var v692 = expressionToCheck.search(/\[.\]/)
    }
    v639 = v692 != -1;
  }
  var v561 = v639;
  var v641 = !v561;
  if (v641) {
    introspect(JAM.policy.p28) {
      var v640 = expressionToCheck.search(/\</)
    }
    v561 = v640 != -1;
  }
  var v425 = v561;
  var v563 = !v425;
  if (v563) {
    introspect(JAM.policy.p28) {
      var v562 = expressionToCheck.search(/\>/)
    }
    v425 = v562 != -1;
  }
  var v105 = v425;
  if (v105) {
    return false;
  }
  return true;
}
function openForm() {
  var v106 = outputWindow.document;
  introspect(JAM.policy.p24) {
    v106.write('<form action="">\n');
  }
  return true;
}
function openPre() {
  var v107 = outputWindow.document;
  introspect(JAM.policy.p24) {
    v107.write("<pre>");
  }
  var v108 = outputWindow.document;
  introspect(JAM.policy.p24) {
    v108.write('<div class="pre">');
  }
  return;
}
function openTextArea() {
  var v109 = outputWindow.document;
  introspect(JAM.policy.p24) {
    v109.write('<br /><textarea rows="6" cols="61">\n');
  }
  return true;
}
function openWindow(title$$5) {
  _openWindow(title$$5, true);
  return;
}
function _openWindow(title$$6, isColor) {
  introspect(JAM.policy.p25) {
    outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  }
  outputWindow.focus();
  var v110 = outputWindow.document;
  var v642 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v564 = v642 + "<head>\n";
  var v426 = v564 + "<title>Sequence Manipulation Suite</title>\n";
  var v111 = v426 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  introspect(JAM.policy.p39) {
    v110.write(v111);
  }
  if (isColor) {
    var v112 = outputWindow.document;
    var v808 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v804 = v808 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v800 = v804 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v796 = v800 + "div.info {font-weight: bold}\n";
    var v789 = v796 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v780 = v789 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v770 = v780 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v757 = v770 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v742 = v757 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v727 = v742 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v694 = v727 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v643 = v694 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v565 = v643 + "td.many {color: #000000}\n";
    var v427 = v565 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v113 = v427 + "</style>\n";
    introspect(JAM.policy.p39) {
      v112.write(v113);
    }
  } else {
    var v114 = outputWindow.document;
    var v812 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v809 = v812 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v805 = v809 + "div.title {display: none}\n";
    var v801 = v805 + "div.info {font-weight: bold}\n";
    var v797 = v801 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v790 = v797 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v781 = v790 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v771 = v781 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v758 = v771 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v743 = v758 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v728 = v743 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v695 = v728 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v644 = v695 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v566 = v644 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v428 = v566 + "img {display: none}\n";
    var v115 = v428 + "</style>\n";
    introspect(JAM.policy.p39) {
      v114.write(v115);
    }
  }
  var v116 = outputWindow.document;
  var v645 = "</head>\n" + '<body class="main">\n';
  var v567 = v645 + '<div class="title">';
  var v429 = v567 + title$$6;
  var v117 = v429 + " results</div>\n";
  introspect(JAM.policy.p39) {
    v116.write(v117);
  }
  outputWindow.status = "Please Wait.";
  return true;
}
function openWindowAlign(title$$7) {
  _openWindowAlign(title$$7, true);
  return;
}
function _openWindowAlign(title$$8, isBackground) {
  introspect(JAM.policy.p25) {
    outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  }
  outputWindow.focus();
  var v118 = outputWindow.document;
  var v646 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v568 = v646 + "<head>\n";
  var v430 = v568 + "<title>Sequence Manipulation Suite</title>\n";
  var v119 = v430 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  introspect(JAM.policy.p39) {
    v118.write(v119);
  }
  if (isBackground) {
    var v120 = outputWindow.document;
    var v810 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v806 = v810 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v802 = v806 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v798 = v802 + "div.info {font-weight: bold}\n";
    var v791 = v798 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v782 = v791 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v772 = v782 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v759 = v772 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v744 = v759 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v729 = v744 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v696 = v729 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v647 = v696 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v569 = v647 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v431 = v569 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v121 = v431 + "</style>\n";
    introspect(JAM.policy.p39) {
      v120.write(v121);
    }
  } else {
    var v122 = outputWindow.document;
    var v814 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v813 = v814 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v811 = v813 + "div.title {display: none}\n";
    var v807 = v811 + "div.info {font-weight: bold}\n";
    var v803 = v807 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v799 = v803 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v792 = v799 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v783 = v792 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v773 = v783 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v760 = v773 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v745 = v760 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v730 = v745 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v697 = v730 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v648 = v697 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v570 = v648 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v432 = v570 + "img {display: none}\n";
    var v123 = v432 + "</style>\n";
    introspect(JAM.policy.p39) {
      v122.write(v123);
    }
  }
  var v124 = outputWindow.document;
  var v649 = "</head>\n" + '<body class="main">\n';
  var v571 = v649 + '<div class="title">';
  var v433 = v571 + title$$8;
  var v125 = v433 + " results</div>\n";
  introspect(JAM.policy.p39) {
    v124.write(v125);
  }
  outputWindow.status = "Please Wait.";
  return true;
}
function removeFormatting(sequence$$5) {
  introspect(JAM.policy.p27) {
    return sequence$$5.replace(/[\d\s]/g, "");
  }
}
function removeNonDna(sequence$$6) {
  introspect(JAM.policy.p27) {
    return sequence$$6.replace(/[^gatucryswkmbdhvnxGATUCRYSWKMBDHVNX]/g, "");
  }
}
function removeNonDnaStrict(sequence$$7) {
  introspect(JAM.policy.p27) {
    return sequence$$7.replace(/[^gatucGATUC]/g, "");
  }
}
function removeNonProtein(sequence$$8) {
  introspect(JAM.policy.p27) {
    return sequence$$8.replace(/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, "");
  }
}
function removeNonProteinStrict(sequence$$9) {
  introspect(JAM.policy.p27) {
    return sequence$$9.replace(/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, "");
  }
}
function removeNonProteinAllowDegen(sequence$$10) {
  introspect(JAM.policy.p27) {
    return sequence$$10.replace(/[^ABCDEFGHIKLMNPQRSTVWYXZabcdefghiklmnpqrstvwyxz\*]/g, "");
  }
}
function removeNonProteinAllowX(sequence$$11) {
  introspect(JAM.policy.p27) {
    return sequence$$11.replace(/[^ACDEFGHIKLMNPQRSTVWYZXacdefghiklmnpqrstvwyzx\*]/g, "");
  }
}
function removeWhiteSpace(text$$9) {
  introspect(JAM.policy.p27) {
    return text$$9.replace(/\s/g, "");
  }
}
function removeNonLetters(sequence$$12) {
  introspect(JAM.policy.p27) {
    return sequence$$12.replace(/[^A-Z]/gi, "");
  }
}
function reverse(dnaSequence$$1) {
  var tempDnaArray = new Array;
  introspect(JAM.policy.p28) {
    var v434 = dnaSequence$$1.search(/./)
  }
  var v126 = v434 != -1;
  if (v126) {
    introspect(JAM.policy.p28) {
      tempDnaArray = dnaSequence$$1.match(/./g);
    }
    tempDnaArray = tempDnaArray.reverse();
    introspect(JAM.policy.p24) {
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
  var v127 = j$$5 < lengthOfColumn;
  for (;v127;) {
    tempString = tempString + " ";
    j$$5 = j$$5 + 1;
    v127 = j$$5 < lengthOfColumn;
  }
  var v128 = tempString + theNumber;
  theNumber = v128 + " ";
  var v129 = sequenceToAppend + theNumber;
  sequenceToAppend = v129 + tabIn;
  return sequenceToAppend;
}
function testScript() {
  function v1(str$$7, p1$$1, offset$$9, s$$3) {
    return p1$$1 + "X";
  }
  var testArray = new Array;
  var testString = "1234567890";
  introspect(JAM.policy.p39) {
    testArray.push(testString);
  }
  var v435 = testArray[0];
  var v130 = v435 != testString;
  if (v130) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  introspect(JAM.policy.p39) {
    var v436 = testString.search(re$$2)
  }
  var v131 = v436 == -1;
  if (v131) {
    alert("Regular expression 'm' flag not supported. See browser compatibility page.");
    return false;
  }
  var caughtException = false;
  try {
    re$$2 = eval("Exception handling not supported. Check browser compatibility page.");
  } catch (e$$4) {
    caughtException = true;
  }
  var v132 = !caughtException;
  if (v132) {
    alert("Exception handling not supported. See browser compatibility page.");
  }
  testString = "123";
  introspect(JAM.policy.p27) {
    testString = testString.replace(/(\d)/g, v1);
  }
  var v133 = testString != "1X2X3X";
  if (v133) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false;
  }
  var testNum = 2489.8237;
  introspect(JAM.policy.p22) {
    var v437 = testNum.toFixed(3)
  }
  var v134 = v437 != 2489.824;
  if (v134) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  introspect(JAM.policy.p22) {
    var v438 = testNum.toPrecision(5)
  }
  var v135 = v438 != 2489.8;
  if (v135) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  introspect(JAM.policy.p28) {
    var v439 = theNumber$$1.search(/\d/)
  }
  var v136 = v439 == -1;
  if (v136) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  introspect(JAM.policy.p28) {
    var v698 = emblFile.search(/ID/)
  }
  var v650 = v698 == -1;
  var v700 = !v650;
  if (v700) {
    introspect(JAM.policy.p28) {
      var v699 = emblFile.search(/AC/)
    }
    v650 = v699 == -1;
  }
  var v572 = v650;
  var v652 = !v572;
  if (v652) {
    introspect(JAM.policy.p28) {
      var v651 = emblFile.search(/DE/)
    }
    v572 = v651 == -1;
  }
  var v440 = v572;
  var v574 = !v440;
  if (v574) {
    introspect(JAM.policy.p28) {
      var v573 = emblFile.search(/SQ/)
    }
    v440 = v573 == -1;
  }
  var v137 = v440;
  if (v137) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  introspect(JAM.policy.p28) {
    var v441 = theNumber$$2.search(/\d/)
  }
  var v138 = v441 == -1;
  if (v138) {
    alert("Please enter a number.");
    return false;
  }
  var v140 = theNumber$$2 > maxInput$$2;
  if (v140) {
    var v442 = "Please enter a number less than or equal to " + maxInput$$2;
    var v139 = v442 + ".";
    alert(v139);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  introspect(JAM.policy.p28) {
    var v443 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i)
  }
  var v141 = v443 != -1;
  if (v141) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  introspect(JAM.policy.p28) {
    var v444 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i)
  }
  var v142 = v444 != -1;
  if (v142) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  introspect(JAM.policy.p28) {
    var v701 = genBankFile.search(/LOCUS/)
  }
  var v653 = v701 == -1;
  var v703 = !v653;
  if (v703) {
    introspect(JAM.policy.p28) {
      var v702 = genBankFile.search(/DEFINITION/)
    }
    v653 = v702 == -1;
  }
  var v575 = v653;
  var v655 = !v575;
  if (v655) {
    introspect(JAM.policy.p28) {
      var v654 = genBankFile.search(/ACCESSION/)
    }
    v575 = v654 == -1;
  }
  var v445 = v575;
  var v577 = !v445;
  if (v577) {
    introspect(JAM.policy.p28) {
      var v576 = genBankFile.search(/ORIGIN/)
    }
    v445 = v576 == -1;
  }
  var v143 = v445;
  if (v143) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  introspect(JAM.policy.p28) {
    var v704 = genBankFile$$1.search(/LOCUS/)
  }
  var v656 = v704 == -1;
  var v706 = !v656;
  if (v706) {
    introspect(JAM.policy.p28) {
      var v705 = genBankFile$$1.search(/DEFINITION/)
    }
    v656 = v705 == -1;
  }
  var v578 = v656;
  var v658 = !v578;
  if (v658) {
    introspect(JAM.policy.p28) {
      var v657 = genBankFile$$1.search(/ACCESSION/)
    }
    v578 = v657 == -1;
  }
  var v446 = v578;
  var v580 = !v446;
  if (v580) {
    introspect(JAM.policy.p28) {
      var v579 = genBankFile$$1.search(/ORIGIN/)
    }
    v446 = v579 == -1;
  }
  var v144 = v446;
  if (v144) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  introspect(JAM.policy.p28) {
    var v447 = genBankFile$$1.search(/FEATURES {13}/)
  }
  var v145 = v447 == -1;
  if (v145) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  introspect(JAM.policy.p28) {
    var v707 = emblFile$$1.search(/ID/)
  }
  var v659 = v707 == -1;
  var v709 = !v659;
  if (v709) {
    introspect(JAM.policy.p28) {
      var v708 = emblFile$$1.search(/AC/)
    }
    v659 = v708 == -1;
  }
  var v581 = v659;
  var v661 = !v581;
  if (v661) {
    introspect(JAM.policy.p28) {
      var v660 = emblFile$$1.search(/DE/)
    }
    v581 = v660 == -1;
  }
  var v448 = v581;
  var v583 = !v448;
  if (v583) {
    introspect(JAM.policy.p28) {
      var v582 = emblFile$$1.search(/SQ/)
    }
    v448 = v582 == -1;
  }
  var v146 = v448;
  if (v146) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  introspect(JAM.policy.p28) {
    var v449 = emblFile$$1.search(/^FT/m)
  }
  var v147 = v449 == -1;
  if (v147) {
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
  var v155 = i$$5 < stopBase;
  for (;v155;) {
    var v148 = i$$5 + 1;
    lineOfText = rightNum(v148, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v450 = basePerLine / groupSize;
    var v152 = j$$6 <= v450;
    for (;v152;) {
      var v151 = k < groupSize;
      for (;v151;) {
        var v149 = lineOfText;
        var v451 = k + i$$5;
        introspect(JAM.policy.p39) {
          var v150 = text$$10.charAt(v451)
        }
        lineOfText = v149 + v150;
        k = k + 1;
        v151 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v452 = basePerLine / groupSize;
      v152 = j$$6 <= v452;
    }
    var v153 = outputWindow.document;
    var v154 = lineOfText + "\n";
    introspect(JAM.policy.p39) {
      v153.write(v154);
    }
    lineOfText = "";
    v155 = i$$5 < stopBase;
  }
  return true;
}
function writeGroupNumDna(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition) {
  writeGroupNumDnaSetStart(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition, 0);
  return true;
}
function writeGroupNumDnaSetStart(text$$12, tabIn$$3, groupSize$$2, basePerLine$$2, startBase$$2, stopBase$$2, strands$$1, numberPosition$$1, numberingAdjustment) {
  function adjustNumbering(original, adjustment) {
    var adjusted = original + adjustment;
    var v453 = adjustment < 0;
    if (v453) {
      v453 = adjusted >= 0;
    }
    var v156 = v453;
    if (v156) {
      adjusted = adjusted + 1;
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
  var v189 = i$$6 < stopBase$$2;
  for (;v189;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v454 = basePerLine$$2 / groupSize$$2;
    var v165 = j$$7 <= v454;
    for (;v165;) {
      var v160 = k$$1 < groupSize$$2;
      for (;v160;) {
        var v455 = i$$6 + k$$1;
        var v157 = v455 >= stopBase$$2;
        if (v157) {
          break;
        }
        var v158 = lineOfText$$1;
        var v456 = k$$1 + i$$6;
        introspect(JAM.policy.p39) {
          var v159 = text$$12.charAt(v456)
        }
        lineOfText$$1 = v158 + v159;
        k$$1 = k$$1 + 1;
        v160 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v163 = numberPosition$$1 == "above";
      if (v163) {
        var v161 = aboveNum;
        var v457 = adjustNumbering(i$$6, numberingAdjustment);
        var v162 = rightNum(v457, "", groupSize$$2, tabIn$$3);
        aboveNum = v161 + v162;
      }
      var v164 = i$$6 >= stopBase$$2;
      if (v164) {
        break;
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v458 = basePerLine$$2 / groupSize$$2;
      v165 = j$$7 <= v458;
    }
    var v188 = numberPosition$$1 == "left";
    if (v188) {
      var v166 = outputWindow.document;
      var v662 = adjustNumbering(lineNum, numberingAdjustment);
      var v584 = rightNum(v662, "", 8, tabIn$$3);
      var v459 = v584 + lineOfText$$1;
      var v167 = v459 + "\n";
      introspect(JAM.policy.p39) {
        v166.write(v167);
      }
      var v171 = strands$$1 == "two";
      if (v171) {
        var v168 = outputWindow.document;
        var v663 = adjustNumbering(lineNum, numberingAdjustment);
        var v585 = rightNum(v663, "", 8, tabIn$$3);
        var v586 = complement(lineOfText$$1);
        var v460 = v585 + v586;
        var v169 = v460 + "\n";
        introspect(JAM.policy.p39) {
          v168.write(v169);
        }
        var v170 = outputWindow.document;
        introspect(JAM.policy.p24) {
          v170.write("\n");
        }
      }
    } else {
      var v187 = numberPosition$$1 == "right";
      if (v187) {
        var v172 = outputWindow.document;
        var v587 = lineOfText$$1;
        var v588 = adjustNumbering(i$$6, numberingAdjustment);
        var v461 = v587 + v588;
        var v173 = v461 + "\n";
        introspect(JAM.policy.p39) {
          v172.write(v173);
        }
        var v177 = strands$$1 == "two";
        if (v177) {
          var v174 = outputWindow.document;
          var v589 = complement(lineOfText$$1);
          var v590 = adjustNumbering(i$$6, numberingAdjustment);
          var v462 = v589 + v590;
          var v175 = v462 + "\n";
          introspect(JAM.policy.p39) {
            v174.write(v175);
          }
          var v176 = outputWindow.document;
          introspect(JAM.policy.p24) {
            v176.write("\n");
          }
        }
      } else {
        var v186 = numberPosition$$1 == "above";
        if (v186) {
          var v178 = outputWindow.document;
          var v179 = aboveNum + "\n";
          introspect(JAM.policy.p39) {
            v178.write(v179);
          }
          var v180 = outputWindow.document;
          var v181 = lineOfText$$1 + "\n";
          introspect(JAM.policy.p39) {
            v180.write(v181);
          }
          var v185 = strands$$1 == "two";
          if (v185) {
            var v182 = outputWindow.document;
            var v463 = complement(lineOfText$$1);
            var v183 = v463 + "\n";
            introspect(JAM.policy.p39) {
              v182.write(v183);
            }
            var v184 = outputWindow.document;
            introspect(JAM.policy.p24) {
              v184.write("\n");
            }
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v189 = i$$6 < stopBase$$2;
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
  var v210 = i$$7 < stopBase$$3;
  for (;v210;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v464 = basePerLine$$3 / groupSize$$3;
    var v198 = j$$8 <= v464;
    for (;v198;) {
      var v193 = k$$2 < groupSize$$3;
      for (;v193;) {
        var v465 = i$$7 + k$$2;
        var v190 = v465 >= stopBase$$3;
        if (v190) {
          break;
        }
        var v191 = lineOfText$$2;
        var v466 = k$$2 + i$$7;
        introspect(JAM.policy.p39) {
          var v192 = text$$13.charAt(v466)
        }
        lineOfText$$2 = v191 + v192;
        k$$2 = k$$2 + 1;
        v193 = k$$2 < groupSize$$3;
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v196 = numberPosition$$2 == "above";
      if (v196) {
        var v194 = aboveNum$$1;
        var v195 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = v194 + v195;
      }
      var v197 = i$$7 >= stopBase$$3;
      if (v197) {
        break;
      }
      k$$2 = 0;
      j$$8 = j$$8 + 1;
      var v467 = basePerLine$$3 / groupSize$$3;
      v198 = j$$8 <= v467;
    }
    var v209 = numberPosition$$2 == "left";
    if (v209) {
      var v199 = outputWindow.document;
      var v591 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v468 = v591 + lineOfText$$2;
      var v200 = v468 + "\n";
      introspect(JAM.policy.p39) {
        v199.write(v200);
      }
    } else {
      var v208 = numberPosition$$2 == "right";
      if (v208) {
        var v201 = outputWindow.document;
        var v469 = lineOfText$$2 + i$$7;
        var v202 = v469 + "\n";
        introspect(JAM.policy.p39) {
          v201.write(v202);
        }
      } else {
        var v207 = numberPosition$$2 == "above";
        if (v207) {
          var v203 = outputWindow.document;
          var v204 = aboveNum$$1 + "\n";
          introspect(JAM.policy.p39) {
            v203.write(v204);
          }
          var v205 = outputWindow.document;
          var v206 = lineOfText$$2 + "\n";
          introspect(JAM.policy.p39) {
            v205.write(v206);
          }
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v210 = i$$7 < stopBase$$3;
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
  var v664 = sequence$$13.length;
  var v592 = v664 <= firstIndexToMutate;
  var v665 = !v592;
  if (v665) {
    v592 = lastIndexToMutate < 0;
  }
  var v470 = v592;
  var v593 = !v470;
  if (v593) {
    v470 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v211 = v470;
  if (v211) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v219 = i$$8 < numMut;
  for (;v219;) {
    maxNum = sequence$$13.length;
    var v471 = Math.random();
    var v212 = v471 * maxNum;
    introspect(JAM.policy.p28) {
      randNum = Math.floor(v212);
    }
    var v472 = randNum < firstIndexToMutate;
    var v594 = !v472;
    if (v594) {
      v472 = randNum > lastIndexToMutate;
    }
    var v213 = v472;
    if (v213) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v219 = i$$8 < numMut;
      continue;
    }
    introspect(JAM.policy.p28) {
      currentChar = sequence$$13.charAt(randNum);
    }
    needNewChar = true;
    for (;needNewChar;) {
      var v473 = Math.random();
      var v474 = components$$1.length;
      var v214 = v473 * v474;
      introspect(JAM.policy.p28) {
        componentsIndex = Math.round(v214);
      }
      var v475 = components$$1.length;
      var v215 = componentsIndex == v475;
      if (v215) {
        componentsIndex = 0;
      }
      introspect(JAM.policy.p26) {
        var v476 = components$$1[componentsIndex]
      }
      var v216 = v476 != currentChar;
      if (v216) {
        needNewChar = false;
      }
    }
    introspect(JAM.policy.p23) {
      var v477 = sequence$$13.substring(0, randNum)
    }
    introspect(JAM.policy.p26) {
      var v478 = components$$1[componentsIndex]
    }
    var v217 = v477 + v478;
    var v479 = randNum + 1;
    var v480 = sequence$$13.length;
    introspect(JAM.policy.p40) {
      var v218 = sequence$$13.substring(v479, v480)
    }
    sequence$$13 = v217 + v218;
    i$$8 = i$$8 + 1;
    v219 = i$$8 < numMut;
  }
  var v220 = outputWindow.document;
  var v221 = addReturns(sequence$$13);
  introspect(JAM.policy.p39) {
    v220.write(v221);
  }
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v226 = j$$9 < lengthOut$$1;
  for (;v226;) {
    var v481 = Math.random();
    var v482 = components$$2.length;
    var v222 = v481 * v482;
    introspect(JAM.policy.p28) {
      tempNum$$1 = Math.floor(v222);
    }
    introspect(JAM.policy.p26) {
      tempChar$$1 = components$$2[tempNum$$1];
    }
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v483 = sequence$$14.length;
    var v225 = v483 == 60;
    if (v225) {
      var v223 = outputWindow.document;
      var v224 = sequence$$14 + "\n";
      introspect(JAM.policy.p39) {
        v223.write(v224);
      }
      sequence$$14 = "";
    }
    j$$9 = j$$9 + 1;
    v226 = j$$9 < lengthOut$$1;
  }
  var v227 = outputWindow.document;
  var v228 = sequence$$14 + "\n";
  introspect(JAM.policy.p39) {
    v227.write(v228);
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
  var v232 = dnaConformation == "circular";
  if (v232) {
    introspect(JAM.policy.p23) {
      var v229 = sequence$$15.substring(0, lookAhead)
    }
    shiftValue = v229.length;
    var v666 = sequence$$15.length;
    var v595 = v666 - lookAhead;
    var v596 = sequence$$15.length;
    introspect(JAM.policy.p40) {
      var v484 = sequence$$15.substring(v595, v596)
    }
    var v230 = v484 + sequence$$15;
    introspect(JAM.policy.p23) {
      var v231 = sequence$$15.substring(0, lookAhead)
    }
    sequence$$15 = v230 + v231;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v233 = outputWindow.document;
  introspect(JAM.policy.p24) {
    v233.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  }
  var v234 = outputWindow.document;
  var v667 = '<tr><td class="title" width="200px">' + "Site:";
  var v597 = v667 + '</td><td class="title">';
  var v485 = v597 + "Positions:";
  var v235 = v485 + "</td></tr>\n";
  introspect(JAM.policy.p39) {
    v234.write(v235);
  }
  var i$$9 = 0;
  var v486 = arrayOfItems.length;
  var v251 = i$$9 < v486;
  for (;v251;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAM.policy.p26) {
      var v487 = arrayOfItems[i$$9]
    }
    introspect(JAM.policy.p28) {
      var v236 = v487.match(/\/.+\//)
    }
    matchExp = v236 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    introspect(JAM.policy.p26) {
      var v668 = arrayOfItems[i$$9]
    }
    introspect(JAM.policy.p28) {
      var v598 = v668.match(/\)\D*\d+/)
    }
    var v488 = v598.toString();
    introspect(JAM.policy.p27) {
      var v237 = v488.replace(/\)\D*/, "")
    }
    cutDistance = parseFloat(v237);
    introspect(JAM.policy.p39) {
      var v243 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    for (;v243;) {
      var v238 = matchExp.lastIndex;
      matchPosition = v238 - cutDistance;
      var v489 = matchPosition >= lowerLimit;
      if (v489) {
        v489 = matchPosition < upperLimit;
      }
      var v241 = v489;
      if (v241) {
        timesFound = timesFound + 1;
        var v239 = tempString$$1 + ", ";
        var v490 = matchPosition - shiftValue;
        var v240 = v490 + 1;
        tempString$$1 = v239 + v240;
      }
      var v491 = matchExp.lastIndex;
      var v599 = RegExp.lastMatch;
      var v492 = v599.length;
      var v242 = v491 - v492;
      matchExp.lastIndex = v242 + 1;
      introspect(JAM.policy.p39) {
        v243 = matchArray$$1 = matchExp.exec(sequence$$15);
      }
    }
    introspect(JAM.policy.p28) {
      var v493 = tempString$$1.search(/\d/)
    }
    var v244 = v493 != -1;
    if (v244) {
      introspect(JAM.policy.p27) {
        tempString$$1 = tempString$$1.replace(/none,\s*/, "");
      }
    }
    var v248 = timesFound == 0;
    if (v248) {
      backGroundClass = "none";
    } else {
      var v247 = timesFound == 1;
      if (v247) {
        backGroundClass = "one";
      } else {
        var v246 = timesFound == 2;
        if (v246) {
          backGroundClass = "two";
        } else {
          var v245 = timesFound == 3;
          if (v245) {
            backGroundClass = "three";
          } else {
            backGroundClass = "many";
          }
        }
      }
    }
    var v249 = outputWindow.document;
    var v761 = '<tr><td class="' + backGroundClass;
    var v746 = v761 + '">';
    introspect(JAM.policy.p26) {
      var v784 = arrayOfItems[i$$9]
    }
    introspect(JAM.policy.p28) {
      var v774 = v784.match(/\([^\(]+\)/)
    }
    var v762 = v774.toString();
    introspect(JAM.policy.p27) {
      var v747 = v762.replace(/\(|\)/g, "")
    }
    var v731 = v746 + v747;
    var v710 = v731 + '</td><td class="';
    var v669 = v710 + backGroundClass;
    var v600 = v669 + '">';
    var v494 = v600 + tempString$$1;
    var v250 = v494 + "</td></tr>\n";
    introspect(JAM.policy.p39) {
      v249.write(v250);
    }
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v495 = arrayOfItems.length;
    v251 = i$$9 < v495;
  }
  var v252 = outputWindow.document;
  introspect(JAM.policy.p24) {
    v252.write("</tbody></table>\n");
  }
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v253 = outputWindow.document;
  introspect(JAM.policy.p24) {
    v253.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  }
  var v254 = outputWindow.document;
  var v732 = '<tr><td class="title">' + "Pattern:";
  var v711 = v732 + '</td><td class="title">';
  var v670 = v711 + "Times found:";
  var v601 = v670 + '</td><td class="title">';
  var v496 = v601 + "Percentage:";
  var v255 = v496 + "</td></tr>\n";
  introspect(JAM.policy.p39) {
    v254.write(v255);
  }
  var i$$10 = 0;
  var v497 = arrayOfItems$$1.length;
  var v264 = i$$10 < v497;
  for (;v264;) {
    var tempNumber = 0;
    introspect(JAM.policy.p26) {
      var v498 = arrayOfItems$$1[i$$10]
    }
    introspect(JAM.policy.p28) {
      var v256 = v498.match(/\/[^\/]+\//)
    }
    var matchExp$$1 = v256 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    introspect(JAM.policy.p39) {
      var v499 = sequence$$16.search(matchExp$$1)
    }
    var v258 = v499 != -1;
    if (v258) {
      introspect(JAM.policy.p39) {
        var v257 = sequence$$16.match(matchExp$$1)
      }
      tempNumber = v257.length;
    }
    var percentage = 0;
    var v602 = originalLength + 1;
    introspect(JAM.policy.p26) {
      var v712 = arrayOfItems$$1[i$$10]
    }
    introspect(JAM.policy.p28) {
      var v671 = v712.match(/\d+/)
    }
    var v603 = parseFloat(v671);
    var v500 = v602 - v603;
    var v261 = v500 > 0;
    if (v261) {
      var v259 = 100 * tempNumber;
      var v501 = originalLength + 1;
      introspect(JAM.policy.p26) {
        var v672 = arrayOfItems$$1[i$$10]
      }
      introspect(JAM.policy.p28) {
        var v604 = v672.match(/\d+/)
      }
      var v502 = parseFloat(v604);
      var v260 = v501 - v502;
      percentage = v259 / v260;
    }
    var v262 = outputWindow.document;
    introspect(JAM.policy.p26) {
      var v785 = arrayOfItems$$1[i$$10]
    }
    introspect(JAM.policy.p28) {
      var v775 = v785.match(/\([^\(]+\)\b/)
    }
    var v763 = v775.toString();
    introspect(JAM.policy.p27) {
      var v748 = v763.replace(/\(|\)/g, "")
    }
    var v733 = "<tr><td>" + v748;
    var v713 = v733 + "</td><td>";
    var v673 = v713 + tempNumber;
    var v605 = v673 + "</td><td>";
    introspect(JAM.policy.p22) {
      var v606 = percentage.toFixed(2)
    }
    var v503 = v605 + v606;
    var v263 = v503 + "</td></tr>\n";
    introspect(JAM.policy.p39) {
      v262.write(v263);
    }
    i$$10 = i$$10 + 1;
    var v504 = arrayOfItems$$1.length;
    v264 = i$$10 < v504;
  }
  var v265 = outputWindow.document;
  introspect(JAM.policy.p24) {
    v265.write("</tbody></table>\n");
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
  var v505 = sequence$$17.length;
  var v272 = v505 > 0;
  for (;v272;) {
    maxNum$$1 = sequence$$17.length;
    var v506 = Math.random();
    var v266 = v506 * maxNum$$1;
    introspect(JAM.policy.p28) {
      randNum$$1 = Math.floor(v266);
    }
    introspect(JAM.policy.p28) {
      tempChar$$2 = sequence$$17.charAt(randNum$$1);
    }
    tempSeq = tempSeq + tempChar$$2;
    introspect(JAM.policy.p23) {
      tempString1 = sequence$$17.substring(0, randNum$$1);
    }
    var v267 = randNum$$1 + 1;
    var v268 = sequence$$17.length;
    introspect(JAM.policy.p27) {
      tempString2 = sequence$$17.substring(v267, v268);
    }
    sequence$$17 = tempString1 + tempString2;
    var v507 = tempSeq.length;
    var v271 = v507 == 60;
    if (v271) {
      var v269 = outputWindow.document;
      var v270 = tempSeq + "\n";
      introspect(JAM.policy.p39) {
        v269.write(v270);
      }
      tempSeq = "";
    }
    var v508 = sequence$$17.length;
    v272 = v508 > 0;
  }
  var v273 = outputWindow.document;
  var v274 = tempSeq + "\n";
  introspect(JAM.policy.p39) {
    v273.write(v274);
  }
  return true;
}
function genbankFeat(theDocument) {
  JAM.startProfile('compute');

  var maxInput$$3 = 1E6;
  var v509 = testScript();
  var v275 = v509 == false;
  if (v275) {
    return false;
  }
  var v764 = theDocument.forms;
  var v749 = v764[0];
  var v734 = v749.elements;
  var v714 = v734[0];
  var v674 = checkFormElement(v714);
  var v607 = v674 == false;
  var v676 = !v607;
  if (v676) {
    var v776 = theDocument.forms;
    var v765 = v776[0];
    var v750 = v765.elements;
    var v735 = v750[0];
    var v715 = v735.value;
    var v675 = verifyGenBankFeat(v715);
    v607 = v675 == false;
  }
  var v510 = v607;
  var v609 = !v510;
  if (v609) {
    var v766 = theDocument.forms;
    var v751 = v766[0];
    var v736 = v751.elements;
    var v716 = v736[0];
    var v677 = v716.value;
    var v608 = checkTextLength(v677, maxInput$$3);
    v510 = v608 == false;
  }
  var v276 = v510;
  if (v276) {
    return false;
  }
  openWindow("GenBank Feature Extractor");
  openPre();
  var v717 = theDocument.forms;
  var v678 = v717[0];
  var v610 = v678.elements;
  var v511 = v610[0];
  var v277 = v511.value;
  var v752 = theDocument.forms;
  var v737 = v752[0];
  var v718 = v737.elements;
  var v679 = v718[4];
  var v611 = v679.options;
  var v753 = theDocument.forms;
  var v738 = v753[0];
  var v719 = v738.elements;
  var v680 = v719[4];
  var v612 = v680.selectedIndex;
  introspect(JAM.policy.p26) {
    var v512 = v611[v612]
  }
  var v278 = v512.value;
  genBankFeatExtract(v277, v278);
  closePre();
  closeWindow();

  JAM.stopProfile('compute');
  return true;
}
function genBankFeatExtract(genBankFile$$2, outputType) {
  var v279 = "_" + genBankFile$$2;
  genBankFile$$2 = v279 + "_";
  introspect(JAM.policy.p28) {
    var recordArray = genBankFile$$2.split(/LOCUS\s\s\s[^\f\n\r]*/m)
  }
  var i$$11 = 1;
  var v513 = recordArray.length;
  var v288 = i$$11 < v513;
  for (;v288;) {
    introspect(JAM.policy.p26) {
      var v280 = recordArray[i$$11]
    }
    introspect(JAM.policy.p28) {
      var mainArray = v280.split(/DEFINITION|ACCESSION|FEATURES|ORIGIN[^\f\n\r]*/)
    }
    var v613 = mainArray[1];
    introspect(JAM.policy.p27) {
      var v514 = v613.replace(/[\f\n\r\t]+$/g, "")
    }
    var v281 = filterFastaTitle(v514);
    var title$$9 = v281 + "\n";
    var v282 = mainArray[4];
    introspect(JAM.policy.p28) {
      var dnaSequenceArray = v282.split(/\/{2}/)
    }
    var v283 = outputWindow.document;
    var v284 = title$$9 + "\n";
    introspect(JAM.policy.p39) {
      v283.write(v284);
    }
    var v515 = dnaSequenceArray.length;
    var v285 = v515 == 1;
    if (v285) {
      alert("The entire GenBank file may not have been processed.");
      outputWindow.focus();
    }
    var v286 = dnaSequenceArray[0];
    var dnaSequence$$3 = removeNonDna(v286);
    var v287 = mainArray[3];
    introspect(JAM.policy.p28) {
      var featureArray = v287.split(/[\f\n\r] {5,12}\b/)
    }
    prepareFeatures(featureArray, dnaSequence$$3, outputType);
    i$$11 = i$$11 + 1;
    var v516 = recordArray.length;
    v288 = i$$11 < v516;
  }
  return true;
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
  var v517 = arrayOfFeatures.length;
  var v299 = i$$12 < v517;
  for (;v299;) {
    var v289 = arrayOfFeatures;
    var v290 = i$$12;
    introspect(JAM.policy.p26) {
      var v518 = arrayOfFeatures[i$$12]
    }
    introspect(JAM.policy.p27) {
      var v821 = v518.replace(/[\[\]\*]/g, "")
    }
    introspect(JAM.policy.p13) {
      v289[v290] = v821;
    }
    introspect(JAM.policy.p26) {
      var v519 = arrayOfFeatures[i$$12]
    }
    introspect(JAM.policy.p28) {
      var v291 = v519.match(/[^ \f\n\r\t\v]+ /)
    }
    featureTitle = v291.toString();
    theTitle = new RegExp(featureTitle);
    introspect(JAM.policy.p26) {
      var v292 = arrayOfFeatures[i$$12]
    }
    introspect(JAM.policy.p41) {
      removedTitle = v292.replace(theTitle, "");
    }
    introspect(JAM.policy.p26) {
      var v614 = arrayOfFeatures[i$$12]
    }
    introspect(JAM.policy.p28) {
      var v520 = v614.search(/\/[^\f\n\r]+/)
    }
    var v294 = v520 != -1;
    if (v294) {
      introspect(JAM.policy.p26) {
        var v521 = arrayOfFeatures[i$$12]
      }
      introspect(JAM.policy.p28) {
        var v293 = v521.match(/\/[^\f\n\r]+/)
      }
      firstQualifier = v293.toString();
    } else {
      firstQualifier = "/no qualifier supplied";
    }
    introspect(JAM.policy.p28) {
      position = removedTitle.split(/\//);
    }
    var v295 = position[0];
    introspect(JAM.policy.p27) {
      positionNoSpace = v295.replace(/\s{2,}/g, " ");
    }
    var v296 = outputWindow.document;
    var v681 = filterFastaTitle(featureTitle);
    var v615 = "&gt;" + v681;
    var v616 = filterFastaTitle(firstQualifier);
    var v522 = v615 + v616;
    var v297 = v522 + "\n";
    introspect(JAM.policy.p39) {
      v296.write(v297);
    }
    printFeature(positionNoSpace, dnaSequence$$4, outputType$$1);
    featureFound = true;
    var v298 = outputWindow.document;
    introspect(JAM.policy.p24) {
      v298.write("\n\n");
    }
    i$$12 = i$$12 + 1;
    var v523 = arrayOfFeatures.length;
    v299 = i$$12 < v523;
  }
  var v301 = featureFound == false;
  if (v301) {
    var v300 = outputWindow.document;
    introspect(JAM.policy.p24) {
      v300.write("There were no features found or there was a problem reading the feature information.");
    }
  }
  return true;
}
function printFeature(featurePos, dnaSequence$$5, outputType$$2) {
  var feature$$4;
  introspect(JAM.policy.p27) {
    featurePos = featurePos.replace(/<|>/g, "");
  }
  introspect(JAM.policy.p28) {
    var v682 = featurePos.search(/[^a-z\d\.\(\)\,\s]/)
  }
  var v617 = v682 != -1;
  var v684 = !v617;
  if (v684) {
    introspect(JAM.policy.p28) {
      var v683 = featurePos.search(/one/)
    }
    v617 = v683 != -1;
  }
  var v524 = v617;
  var v619 = !v524;
  if (v619) {
    introspect(JAM.policy.p28) {
      var v618 = featurePos.search(/order/)
    }
    v524 = v618 != -1;
  }
  var v320 = v524;
  if (v320) {
    var v302 = outputWindow.document;
    introspect(JAM.policy.p24) {
      v302.write("This feature specifies a sequence that cannot be represented:\n");
    }
    var v303 = outputWindow.document;
    introspect(JAM.policy.p39) {
      v303.write(featurePos);
    }
  } else {
    introspect(JAM.policy.p27) {
      var newFeaturePos = featurePos.replace(/\)/g, "")
    }
    introspect(JAM.policy.p28) {
      var v525 = newFeaturePos.search(/complement/)
    }
    var v304 = v525 != -1;
    if (v304) {
      feature$$4 = new Feature("complement");
    } else {
      feature$$4 = new Feature("direct");
    }
    introspect(JAM.policy.p28) {
      var posArray = newFeaturePos.split(/\(/)
    }
    var v305 = posArray.length;
    var last = v305 - 1;
    introspect(JAM.policy.p26) {
      var pairString = posArray[last]
    }
    introspect(JAM.policy.p28) {
      var pairArray = pairString.split(/\,/)
    }
    var digitArray = new Array;
    var realStart = 0;
    var realStop = 0;
    var j$$10 = 0;
    var v526 = pairArray.length;
    var v319 = j$$10 < v526;
    for (;v319;) {
      introspect(JAM.policy.p26) {
        var v306 = pairArray[j$$10]
      }
      introspect(JAM.policy.p28) {
        digitArray = v306.split(/\.\./);
      }
      var v527 = digitArray.length;
      var v307 = v527 == 1;
      if (v307) {
        digitArray[1] = digitArray[0];
      }
      realStart = digitArray[0];
      realStop = digitArray[1];
      introspect(JAM.policy.p27) {
        realStop = realStop.replace(/\D/g, "");
      }
      introspect(JAM.policy.p27) {
        realStart = realStart.replace(/\D/g, "");
      }
      introspect(JAM.policy.p28) {
        var v620 = realStart.search(/\d/)
      }
      var v528 = v620 == -1;
      var v622 = !v528;
      if (v622) {
        introspect(JAM.policy.p28) {
          var v621 = realStop.search(/\d/)
        }
        v528 = v621 == -1;
      }
      var v309 = v528;
      if (v309) {
        var v308 = outputWindow.document;
        introspect(JAM.policy.p24) {
          v308.write("There was a problem with this feature (one of the range values was missing).");
        }
        return true;
      }
      var v310 = parseInt(realStart);
      realStart = v310 - 1;
      realStop = parseInt(realStop);
      var v312 = realStart > realStop;
      if (v312) {
        var v311 = outputWindow.document;
        introspect(JAM.policy.p24) {
          v311.write("There was a problem with this feature (the end position was before the start position).");
        }
        return true;
      }
      var v623 = dnaSequence$$5.length;
      var v529 = realStart > v623;
      var v625 = !v529;
      if (v625) {
        var v624 = dnaSequence$$5.length;
        v529 = realStop > v624;
      }
      var v318 = v529;
      if (v318) {
        var v313 = outputWindow.document;
        introspect(JAM.policy.p24) {
          v313.write("The entire GenBank file was not processed, so this feature cannot be properly shown.");
        }
        return true;
      } else {
        var v317 = outputType$$2 == "separated";
        if (v317) {
          introspect(JAM.policy.p40) {
            var v314 = dnaSequence$$5.substring(realStart, realStop)
          }
          introspect(JAM.policy.p39) {
            feature$$4.addFragment(v314);
          }
        } else {
          var v530 = feature$$4.lastAdded;
          introspect(JAM.policy.p40) {
            var v315 = dnaSequence$$5.substring(v530, realStart)
          }
          introspect(JAM.policy.p39) {
            feature$$4.addFragment(v315);
          }
          introspect(JAM.policy.p40) {
            var v531 = dnaSequence$$5.substring(realStart, realStop)
          }
          var v316 = v531.toUpperCase();
          introspect(JAM.policy.p39) {
            feature$$4.addFragment(v316);
          }
          feature$$4.lastAdded = realStop;
        }
      }
      j$$10 = j$$10 + 1;
      var v532 = pairArray.length;
      v319 = j$$10 < v532;
    }
    feature$$4.writeFeature();
  }
  return true;
}
function writeFeature() {
  var v533 = this.strand;
  var v325 = v533 == "complement";
  if (v325) {
    var v321 = outputWindow.document;
    var v720 = this.fragments;
    introspect(JAM.policy.p24) {
      var v685 = v720.join("")
    }
    var v626 = complement(v685);
    var v534 = reverse(v626);
    var v322 = addReturns(v534);
    introspect(JAM.policy.p39) {
      v321.write(v322);
    }
  } else {
    var v323 = outputWindow.document;
    var v627 = this.fragments;
    introspect(JAM.policy.p24) {
      var v535 = v627.join("")
    }
    var v324 = addReturns(v535);
    introspect(JAM.policy.p39) {
      v323.write(v324);
    }
  }
  return;
}
function addFragment(sequence$$18) {
  var v326 = this.fragments;
  introspect(JAM.policy.p39) {
    v326.push(sequence$$18);
  }
  return;
}
function Feature(strand) {
  this.strand = strand;
  var v822 = new Array;
  this.fragments = v822;
  this.lastAdded = 0;
  return;
}
new Feature;
var v327 = Feature.prototype;
v327.writeFeature = writeFeature;
var v328 = Feature.prototype;
v328.addFragment = addFragment;
document.onload = v2;
introspect(JAM.policy.p24) {
  var v329 = document.getElementById("submitbtn")
}
v329.onclick = v3;
introspect(JAM.policy.p24) {
  var v330 = document.getElementById("clearbtn")
}
v330.onclick = v4

JAM.stopProfile('load');
