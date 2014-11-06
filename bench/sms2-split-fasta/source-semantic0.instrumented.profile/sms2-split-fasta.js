
JAM.startProfile('load');
function v4() {
  var v556 = document.forms;
  var v477 = v556[0];
  var v291 = v477.elements;
  var v5 = v291[0];
  v5.value = " ";
  return;
}
function v3() {
  try {
    splitFasta(document);
  } catch (e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    alert(v6);
  }
  return;
}
function v2() {
  var v292 = document.main_form;
  var v7 = v292.main_submit;
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
  var v293 = arrayOfSequences.length;
  var v9 = v293 < 2;
  if (v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v294 = arrayOfTitles.length;
  var v11 = i$$1 < v294;
  for (;v11;) {
    introspect(JAM.policy.p26) {
      var v609 = arrayOfTitles[i$$1]
    }
    introspect(JAM.policy.p28) {
      var v557 = v609.search(/\S/)
    }
    var v478 = v557 == -1;
    var v559 = !v478;
    if (v559) {
      introspect(JAM.policy.p26) {
        var v610 = arrayOfSequences[i$$1]
      }
      introspect(JAM.policy.p28) {
        var v558 = v610.search(/\S/)
      }
      v478 = v558 == -1;
    }
    var v295 = v478;
    var v480 = !v295;
    if (v480) {
      introspect(JAM.policy.p26) {
        var v560 = arrayOfSequences[i$$1]
      }
      var v479 = v560.length;
      v295 = v479 != lengthOfAlign;
    }
    var v10 = v295;
    if (v10) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1 = i$$1 + 1;
    var v296 = arrayOfTitles.length;
    v11 = i$$1 < v296;
  }
  return true;
}
function checkCodonTable(codonTable) {
  introspect(JAM.policy.p28) {
    var v644 = codonTable.search(/AmAcid/)
  }
  var v611 = v644 == -1;
  var v646 = !v611;
  if (v646) {
    introspect(JAM.policy.p28) {
      var v645 = codonTable.search(/Codon/)
    }
    v611 = v645 == -1;
  }
  var v561 = v611;
  var v613 = !v561;
  if (v613) {
    introspect(JAM.policy.p28) {
      var v612 = codonTable.search(/Number/)
    }
    v561 = v612 == -1;
  }
  var v481 = v561;
  var v563 = !v481;
  if (v563) {
    introspect(JAM.policy.p28) {
      var v562 = codonTable.search(/\/1000/)
    }
    v481 = v562 == -1;
  }
  var v297 = v481;
  var v483 = !v297;
  if (v483) {
    introspect(JAM.policy.p28) {
      var v482 = codonTable.search(/Fraction\s*\.\./)
    }
    v297 = v482 == -1;
  }
  var v12 = v297;
  if (v12) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v484 = formElement.value;
  introspect(JAM.policy.p28) {
    var v298 = v484.search(/\S/)
  }
  var v13 = v298 == -1;
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
  var v299 = arrayOfPatterns.length;
  var v16 = z$$2 < v299;
  for (;v16;) {
    introspect(JAM.policy.p26) {
      var v485 = arrayOfPatterns[z$$2]
    }
    introspect(JAM.policy.p28) {
      var v300 = v485.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/)
    }
    var v14 = v300 == -1;
    if (v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    introspect(JAM.policy.p26) {
      var v486 = arrayOfPatterns[z$$2]
    }
    var v301 = moreExpressionCheck(v486);
    var v15 = v301 == false;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v302 = arrayOfPatterns.length;
    v16 = z$$2 < v302;
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v303 = arrayOfPatterns.length;
  var v25 = j < v303;
  for (;v25;) {
    var v19 = geneticCodeMatchExp;
    var v20 = j;
    introspect(JAM.policy.p26) {
      var v564 = arrayOfPatterns[j]
    }
    introspect(JAM.policy.p28) {
      var v487 = v564.match(/\/.+\//)
    }
    var v304 = v487 + "gi";
    var v742 = eval(v304);
    introspect(JAM.policy.p13) {
      v19[v20] = v742;
    }
    var v21 = geneticCodeMatchResult;
    var v22 = j;
    introspect(JAM.policy.p26) {
      var v488 = arrayOfPatterns[j]
    }
    introspect(JAM.policy.p28) {
      var v305 = v488.match(/=[a-zA-Z\*]/)
    }
    var v743 = v305.toString();
    introspect(JAM.policy.p13) {
      v21[v22] = v743;
    }
    var v23 = geneticCodeMatchResult;
    var v24 = j;
    introspect(JAM.policy.p26) {
      var v306 = geneticCodeMatchResult[j]
    }
    introspect(JAM.policy.p27) {
      var v744 = v306.replace(/=/g, "")
    }
    introspect(JAM.policy.p13) {
      v23[v24] = v744;
    }
    j = j + 1;
    var v307 = arrayOfPatterns.length;
    v25 = j < v307;
  }
  var i$$2 = 0;
  var v489 = testSequence.length;
  var v308 = v489 - 3;
  var v32 = i$$2 <= v308;
  for (;v32;) {
    var v26 = i$$2 + 3;
    introspect(JAM.policy.p27) {
      codon = testSequence.substring(i$$2, v26);
    }
    j = 0;
    var v309 = geneticCodeMatchExp.length;
    var v30 = j < v309;
    for (;v30;) {
      introspect(JAM.policy.p26) {
        var v490 = geneticCodeMatchExp[j]
      }
      introspect(JAM.policy.p39) {
        var v310 = codon.search(v490)
      }
      var v29 = v310 != -1;
      if (v29) {
        var v28 = oneMatch == true;
        if (v28) {
          var v311 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v27 = v311 + ".";
          alert(v27);
          return false;
        }
        oneMatch = true;
      }
      j = j + 1;
      var v312 = geneticCodeMatchExp.length;
      v30 = j < v312;
    }
    var v31 = oneMatch == false;
    if (v31) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v491 = testSequence.length;
    var v313 = v491 - 3;
    v32 = i$$2 <= v313;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v314 = arrayOfPatterns$$1.length;
  var v34 = z$$3 < v314;
  for (;v34;) {
    introspect(JAM.policy.p26) {
      var v492 = arrayOfPatterns$$1[z$$3]
    }
    introspect(JAM.policy.p28) {
      var v315 = v492.search(/[^acdefghiklmnpqrstvwyz]/i)
    }
    var v33 = v315 != -1;
    if (v33) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v316 = arrayOfPatterns$$1.length;
    v34 = z$$3 < v316;
  }
  var i$$3 = 0;
  var v317 = arrayOfPatterns$$1.length;
  var v38 = i$$3 < v317;
  for (;v38;) {
    introspect(JAM.policy.p26) {
      var v493 = arrayOfPatterns$$1[i$$3]
    }
    var v318 = "[" + v493;
    var v35 = v318 + "]";
    var re = new RegExp(v35, "gi");
    var j$$1 = i$$3 + 1;
    var v319 = arrayOfPatterns$$1.length;
    var v37 = j$$1 < v319;
    for (;v37;) {
      introspect(JAM.policy.p26) {
        var v494 = arrayOfPatterns$$1[j$$1]
      }
      introspect(JAM.policy.p39) {
        var v320 = v494.search(re)
      }
      var v36 = v320 != -1;
      if (v36) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1 = j$$1 + 1;
      var v321 = arrayOfPatterns$$1.length;
      v37 = j$$1 < v321;
    }
    i$$3 = i$$3 + 1;
    var v322 = arrayOfPatterns$$1.length;
    v38 = i$$3 < v322;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v323 = arrayOfPatterns$$2.length;
  var v41 = z$$4 < v323;
  for (;v41;) {
    introspect(JAM.policy.p26) {
      var v495 = arrayOfPatterns$$2[z$$4]
    }
    introspect(JAM.policy.p28) {
      var v324 = v495.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i)
    }
    var v39 = v324 == -1;
    if (v39) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    introspect(JAM.policy.p26) {
      var v496 = arrayOfPatterns$$2[z$$4]
    }
    var v325 = moreExpressionCheck(v496);
    var v40 = v325 == false;
    if (v40) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v326 = arrayOfPatterns$$2.length;
    v41 = z$$4 < v326;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v565 = getSequenceFromFasta(text$$7);
  introspect(JAM.policy.p27) {
    var v497 = v565.replace(/[^A-Za-z]/g, "")
  }
  var v327 = v497.length;
  var v43 = v327 > maxInput;
  if (v43) {
    var v328 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v42 = v328 + " characters.";
    alert(v42);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v329 = text$$8.length;
  var v45 = v329 > maxInput$$1;
  if (v45) {
    var v330 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v44 = v330 + " characters.";
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
  var v331 = alignArray.length;
  var v52 = v331 < 3;
  if (v52) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v332 = alignArray.length;
  var v54 = i$$4 < v332;
  for (;v54;) {
    introspect(JAM.policy.p26) {
      var v498 = alignArray[i$$4]
    }
    introspect(JAM.policy.p28) {
      var v333 = v498.search(/[^\s]+\s/)
    }
    var v53 = v333 == -1;
    if (v53) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4 = i$$4 + 1;
    var v334 = alignArray.length;
    v54 = i$$4 < v334;
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
    var v335 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v57 = v335 != -1;
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
  var v336 = sequence$$2.length;
  var v58 = "&gt;results for " + v336;
  var stringToReturn = v58 + " residue sequence ";
  introspect(JAM.policy.p28) {
    var v337 = fastaSequenceTitle.search(/[^\s]/)
  }
  var v60 = v337 != -1;
  if (v60) {
    var v338 = stringToReturn + '"';
    var v59 = v338 + fastaSequenceTitle;
    stringToReturn = v59 + '"';
  }
  var v339 = stringToReturn + ' starting "';
  introspect(JAM.policy.p23) {
    var v340 = sequence$$2.substring(0, 10)
  }
  var v61 = v339 + v340;
  stringToReturn = v61 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v341 = sequenceOne.length;
  var v62 = "Search results for " + v341;
  var stringToReturn$$1 = v62 + " residue sequence ";
  introspect(JAM.policy.p28) {
    var v342 = fastaSequenceTitleOne.search(/[^\s]/)
  }
  var v64 = v342 != -1;
  if (v64) {
    var v343 = stringToReturn$$1 + '"';
    var v63 = v343 + fastaSequenceTitleOne;
    stringToReturn$$1 = v63 + '"';
  }
  var v344 = stringToReturn$$1 + ' starting "';
  introspect(JAM.policy.p23) {
    var v345 = sequenceOne.substring(0, 10)
  }
  var v65 = v344 + v345;
  stringToReturn$$1 = v65 + '"\n';
  var v346 = stringToReturn$$1 + "and ";
  var v347 = sequenceTwo.length;
  var v66 = v346 + v347;
  stringToReturn$$1 = v66 + " residue sequence ";
  introspect(JAM.policy.p28) {
    var v348 = fastaSequenceTitleTwo.search(/[^\s]/)
  }
  var v68 = v348 != -1;
  if (v68) {
    var v349 = stringToReturn$$1 + '"';
    var v67 = v349 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v67 + '"';
  }
  var v350 = stringToReturn$$1 + ' starting "';
  introspect(JAM.policy.p23) {
    var v351 = sequenceTwo.substring(0, 10)
  }
  var v69 = v350 + v351;
  stringToReturn$$1 = v69 + '"';
  var v70 = '<div class="info">' + stringToReturn$$1;
  return v70 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v71 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v71);
  var j$$2 = 0;
  var v352 = arrayOfPatterns$$3.length;
  var v74 = j$$2 < v352;
  for (;v74;) {
    var v72 = geneticCodeMatchExp$$1;
    var v73 = j$$2;
    introspect(JAM.policy.p26) {
      var v566 = arrayOfPatterns$$3[j$$2]
    }
    introspect(JAM.policy.p28) {
      var v499 = v566.match(/\/.+\//)
    }
    var v353 = v499 + "gi";
    var v745 = eval(v353);
    introspect(JAM.policy.p13) {
      v72[v73] = v745;
    }
    j$$2 = j$$2 + 1;
    var v354 = arrayOfPatterns$$3.length;
    v74 = j$$2 < v354;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v75 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v75);
  var j$$3 = 0;
  var v355 = arrayOfPatterns$$4.length;
  var v80 = j$$3 < v355;
  for (;v80;) {
    var v76 = geneticCodeMatchResult$$1;
    var v77 = j$$3;
    introspect(JAM.policy.p26) {
      var v500 = arrayOfPatterns$$4[j$$3]
    }
    introspect(JAM.policy.p28) {
      var v356 = v500.match(/=[a-zA-Z\*]/)
    }
    var v746 = v356.toString();
    introspect(JAM.policy.p13) {
      v76[v77] = v746;
    }
    var v78 = geneticCodeMatchResult$$1;
    var v79 = j$$3;
    introspect(JAM.policy.p26) {
      var v357 = geneticCodeMatchResult$$1[j$$3]
    }
    introspect(JAM.policy.p27) {
      var v747 = v357.replace(/=/g, "")
    }
    introspect(JAM.policy.p13) {
      v78[v79] = v747;
    }
    j$$3 = j$$3 + 1;
    var v358 = arrayOfPatterns$$4.length;
    v80 = j$$3 < v358;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v359 = sequence$$3.length;
  var v81 = "Results for " + v359;
  var stringToReturn$$2 = v81 + " residue sequence ";
  introspect(JAM.policy.p28) {
    var v360 = fastaSequenceTitle$$1.search(/[^\s]/)
  }
  var v83 = v360 != -1;
  if (v83) {
    var v361 = stringToReturn$$2 + '"';
    var v82 = v361 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v82 + '"';
  }
  var v362 = stringToReturn$$2 + ' starting "';
  introspect(JAM.policy.p23) {
    var v363 = sequence$$3.substring(0, 10)
  }
  var v84 = v362 + v363;
  stringToReturn$$2 = v84 + '"';
  var v85 = '<div class="info">' + stringToReturn$$2;
  return v85 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v501 = "Results for " + topology;
  var v364 = v501 + " ";
  var v365 = sequence$$4.length;
  var v86 = v364 + v365;
  var stringToReturn$$3 = v86 + " residue sequence ";
  introspect(JAM.policy.p28) {
    var v366 = fastaSequenceTitle$$2.search(/[^\s]/)
  }
  var v88 = v366 != -1;
  if (v88) {
    var v367 = stringToReturn$$3 + '"';
    var v87 = v367 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v87 + '"';
  }
  var v368 = stringToReturn$$3 + ' starting "';
  introspect(JAM.policy.p23) {
    var v369 = sequence$$4.substring(0, 10)
  }
  var v89 = v368 + v369;
  stringToReturn$$3 = v89 + '"';
  var v90 = '<div class="info">' + stringToReturn$$3;
  return v90 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v370 = sequenceOne$$1.length;
  var v91 = "Alignment results for " + v370;
  var stringToReturn$$4 = v91 + " residue sequence ";
  introspect(JAM.policy.p28) {
    var v371 = fastaSequenceTitleOne$$1.search(/[^\s]/)
  }
  var v93 = v371 != -1;
  if (v93) {
    var v372 = stringToReturn$$4 + '"';
    var v92 = v372 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v92 + '"';
  }
  var v373 = stringToReturn$$4 + ' starting "';
  introspect(JAM.policy.p23) {
    var v374 = sequenceOne$$1.substring(0, 10)
  }
  var v94 = v373 + v374;
  stringToReturn$$4 = v94 + '"\n';
  var v375 = stringToReturn$$4 + "and ";
  var v376 = sequenceTwo$$1.length;
  var v95 = v375 + v376;
  stringToReturn$$4 = v95 + " residue sequence ";
  introspect(JAM.policy.p28) {
    var v377 = fastaSequenceTitleTwo$$1.search(/[^\s]/)
  }
  var v97 = v377 != -1;
  if (v97) {
    var v378 = stringToReturn$$4 + '"';
    var v96 = v378 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v96 + '"';
  }
  var v379 = stringToReturn$$4 + ' starting "';
  introspect(JAM.policy.p23) {
    var v380 = sequenceTwo$$1.substring(0, 10)
  }
  var v98 = v379 + v380;
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
    var v381 = Math.random();
    var v382 = components.length;
    var v100 = v381 * v382;
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
    var v383 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v102 = v383 != -1;
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
    var v384 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v104 = v384 != -1;
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
    var v717 = expressionToCheck.search(/\[[A-Za-z\|]*\[/)
  }
  var v709 = v717 != -1;
  var v719 = !v709;
  if (v719) {
    introspect(JAM.policy.p28) {
      var v718 = expressionToCheck.search(/\][A-Za-z\|]*\]/)
    }
    v709 = v718 != -1;
  }
  var v698 = v709;
  var v711 = !v698;
  if (v711) {
    introspect(JAM.policy.p28) {
      var v710 = expressionToCheck.search(/\[\]/)
    }
    v698 = v710 != -1;
  }
  var v686 = v698;
  var v700 = !v686;
  if (v700) {
    introspect(JAM.policy.p28) {
      var v699 = expressionToCheck.search(/\/[A-Za-z\|]*\]/)
    }
    v686 = v699 != -1;
  }
  var v673 = v686;
  var v688 = !v673;
  if (v688) {
    introspect(JAM.policy.p28) {
      var v687 = expressionToCheck.search(/\[[A-Za-z\|]*\//)
    }
    v673 = v687 != -1;
  }
  var v660 = v673;
  var v675 = !v660;
  if (v675) {
    introspect(JAM.policy.p28) {
      var v674 = expressionToCheck.search(/\|\|/)
    }
    v660 = v674 != -1;
  }
  var v647 = v660;
  var v662 = !v647;
  if (v662) {
    introspect(JAM.policy.p28) {
      var v661 = expressionToCheck.search(/\/\|/)
    }
    v647 = v661 != -1;
  }
  var v614 = v647;
  var v649 = !v614;
  if (v649) {
    introspect(JAM.policy.p28) {
      var v648 = expressionToCheck.search(/\|\//)
    }
    v614 = v648 != -1;
  }
  var v567 = v614;
  var v616 = !v567;
  if (v616) {
    introspect(JAM.policy.p28) {
      var v615 = expressionToCheck.search(/\[.\]/)
    }
    v567 = v615 != -1;
  }
  var v502 = v567;
  var v569 = !v502;
  if (v569) {
    introspect(JAM.policy.p28) {
      var v568 = expressionToCheck.search(/\</)
    }
    v502 = v568 != -1;
  }
  var v385 = v502;
  var v504 = !v385;
  if (v504) {
    introspect(JAM.policy.p28) {
      var v503 = expressionToCheck.search(/\>/)
    }
    v385 = v503 != -1;
  }
  var v105 = v385;
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
  var v570 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v505 = v570 + "<head>\n";
  var v386 = v505 + "<title>Sequence Manipulation Suite</title>\n";
  var v111 = v386 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  introspect(JAM.policy.p39) {
    v110.write(v111);
  }
  if (isColor) {
    var v112 = outputWindow.document;
    var v735 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v730 = v735 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v725 = v730 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v720 = v725 + "div.info {font-weight: bold}\n";
    var v712 = v720 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v701 = v712 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v689 = v701 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v676 = v689 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v663 = v676 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v650 = v663 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v617 = v650 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v571 = v617 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v506 = v571 + "td.many {color: #000000}\n";
    var v387 = v506 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v113 = v387 + "</style>\n";
    introspect(JAM.policy.p39) {
      v112.write(v113);
    }
  } else {
    var v114 = outputWindow.document;
    var v739 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v736 = v739 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v731 = v736 + "div.title {display: none}\n";
    var v726 = v731 + "div.info {font-weight: bold}\n";
    var v721 = v726 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v713 = v721 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v702 = v713 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v690 = v702 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v677 = v690 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v664 = v677 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v651 = v664 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v618 = v651 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v572 = v618 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v507 = v572 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v388 = v507 + "img {display: none}\n";
    var v115 = v388 + "</style>\n";
    introspect(JAM.policy.p39) {
      v114.write(v115);
    }
  }
  var v116 = outputWindow.document;
  var v573 = "</head>\n" + '<body class="main">\n';
  var v508 = v573 + '<div class="title">';
  var v389 = v508 + title$$6;
  var v117 = v389 + " results</div>\n";
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
  var v574 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v509 = v574 + "<head>\n";
  var v390 = v509 + "<title>Sequence Manipulation Suite</title>\n";
  var v119 = v390 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  introspect(JAM.policy.p39) {
    v118.write(v119);
  }
  if (isBackground) {
    var v120 = outputWindow.document;
    var v737 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v732 = v737 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v727 = v732 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v722 = v727 + "div.info {font-weight: bold}\n";
    var v714 = v722 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v703 = v714 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v691 = v703 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v678 = v691 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v665 = v678 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v652 = v665 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v619 = v652 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v575 = v619 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v510 = v575 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v391 = v510 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v121 = v391 + "</style>\n";
    introspect(JAM.policy.p39) {
      v120.write(v121);
    }
  } else {
    var v122 = outputWindow.document;
    var v741 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v740 = v741 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v738 = v740 + "div.title {display: none}\n";
    var v733 = v738 + "div.info {font-weight: bold}\n";
    var v728 = v733 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v723 = v728 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v715 = v723 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v704 = v715 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v692 = v704 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v679 = v692 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v666 = v679 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v653 = v666 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v620 = v653 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v576 = v620 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v511 = v576 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v392 = v511 + "img {display: none}\n";
    var v123 = v392 + "</style>\n";
    introspect(JAM.policy.p39) {
      v122.write(v123);
    }
  }
  var v124 = outputWindow.document;
  var v577 = "</head>\n" + '<body class="main">\n';
  var v512 = v577 + '<div class="title">';
  var v393 = v512 + title$$8;
  var v125 = v393 + " results</div>\n";
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
    var v394 = dnaSequence$$1.search(/./)
  }
  var v126 = v394 != -1;
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
  var v395 = testArray[0];
  var v130 = v395 != testString;
  if (v130) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  introspect(JAM.policy.p39) {
    var v396 = testString.search(re$$2)
  }
  var v131 = v396 == -1;
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
    var v397 = testNum.toFixed(3)
  }
  var v134 = v397 != 2489.824;
  if (v134) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  introspect(JAM.policy.p22) {
    var v398 = testNum.toPrecision(5)
  }
  var v135 = v398 != 2489.8;
  if (v135) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  introspect(JAM.policy.p28) {
    var v399 = theNumber$$1.search(/\d/)
  }
  var v136 = v399 == -1;
  if (v136) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  introspect(JAM.policy.p28) {
    var v621 = emblFile.search(/ID/)
  }
  var v578 = v621 == -1;
  var v623 = !v578;
  if (v623) {
    introspect(JAM.policy.p28) {
      var v622 = emblFile.search(/AC/)
    }
    v578 = v622 == -1;
  }
  var v513 = v578;
  var v580 = !v513;
  if (v580) {
    introspect(JAM.policy.p28) {
      var v579 = emblFile.search(/DE/)
    }
    v513 = v579 == -1;
  }
  var v400 = v513;
  var v515 = !v400;
  if (v515) {
    introspect(JAM.policy.p28) {
      var v514 = emblFile.search(/SQ/)
    }
    v400 = v514 == -1;
  }
  var v137 = v400;
  if (v137) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  introspect(JAM.policy.p28) {
    var v401 = theNumber$$2.search(/\d/)
  }
  var v138 = v401 == -1;
  if (v138) {
    alert("Please enter a number.");
    return false;
  }
  var v140 = theNumber$$2 > maxInput$$2;
  if (v140) {
    var v402 = "Please enter a number less than or equal to " + maxInput$$2;
    var v139 = v402 + ".";
    alert(v139);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  introspect(JAM.policy.p28) {
    var v403 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i)
  }
  var v141 = v403 != -1;
  if (v141) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  introspect(JAM.policy.p28) {
    var v404 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i)
  }
  var v142 = v404 != -1;
  if (v142) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  introspect(JAM.policy.p28) {
    var v624 = genBankFile.search(/LOCUS/)
  }
  var v581 = v624 == -1;
  var v626 = !v581;
  if (v626) {
    introspect(JAM.policy.p28) {
      var v625 = genBankFile.search(/DEFINITION/)
    }
    v581 = v625 == -1;
  }
  var v516 = v581;
  var v583 = !v516;
  if (v583) {
    introspect(JAM.policy.p28) {
      var v582 = genBankFile.search(/ACCESSION/)
    }
    v516 = v582 == -1;
  }
  var v405 = v516;
  var v518 = !v405;
  if (v518) {
    introspect(JAM.policy.p28) {
      var v517 = genBankFile.search(/ORIGIN/)
    }
    v405 = v517 == -1;
  }
  var v143 = v405;
  if (v143) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  introspect(JAM.policy.p28) {
    var v627 = genBankFile$$1.search(/LOCUS/)
  }
  var v584 = v627 == -1;
  var v629 = !v584;
  if (v629) {
    introspect(JAM.policy.p28) {
      var v628 = genBankFile$$1.search(/DEFINITION/)
    }
    v584 = v628 == -1;
  }
  var v519 = v584;
  var v586 = !v519;
  if (v586) {
    introspect(JAM.policy.p28) {
      var v585 = genBankFile$$1.search(/ACCESSION/)
    }
    v519 = v585 == -1;
  }
  var v406 = v519;
  var v521 = !v406;
  if (v521) {
    introspect(JAM.policy.p28) {
      var v520 = genBankFile$$1.search(/ORIGIN/)
    }
    v406 = v520 == -1;
  }
  var v144 = v406;
  if (v144) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  introspect(JAM.policy.p28) {
    var v407 = genBankFile$$1.search(/FEATURES {13}/)
  }
  var v145 = v407 == -1;
  if (v145) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  introspect(JAM.policy.p28) {
    var v630 = emblFile$$1.search(/ID/)
  }
  var v587 = v630 == -1;
  var v632 = !v587;
  if (v632) {
    introspect(JAM.policy.p28) {
      var v631 = emblFile$$1.search(/AC/)
    }
    v587 = v631 == -1;
  }
  var v522 = v587;
  var v589 = !v522;
  if (v589) {
    introspect(JAM.policy.p28) {
      var v588 = emblFile$$1.search(/DE/)
    }
    v522 = v588 == -1;
  }
  var v408 = v522;
  var v524 = !v408;
  if (v524) {
    introspect(JAM.policy.p28) {
      var v523 = emblFile$$1.search(/SQ/)
    }
    v408 = v523 == -1;
  }
  var v146 = v408;
  if (v146) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  introspect(JAM.policy.p28) {
    var v409 = emblFile$$1.search(/^FT/m)
  }
  var v147 = v409 == -1;
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
    var v410 = basePerLine / groupSize;
    var v152 = j$$6 <= v410;
    for (;v152;) {
      var v151 = k < groupSize;
      for (;v151;) {
        var v149 = lineOfText;
        var v411 = k + i$$5;
        introspect(JAM.policy.p39) {
          var v150 = text$$10.charAt(v411)
        }
        lineOfText = v149 + v150;
        k = k + 1;
        v151 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v412 = basePerLine / groupSize;
      v152 = j$$6 <= v412;
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
    var v413 = adjustment < 0;
    if (v413) {
      v413 = adjusted >= 0;
    }
    var v156 = v413;
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
    var v414 = basePerLine$$2 / groupSize$$2;
    var v165 = j$$7 <= v414;
    for (;v165;) {
      var v160 = k$$1 < groupSize$$2;
      for (;v160;) {
        var v415 = i$$6 + k$$1;
        var v157 = v415 >= stopBase$$2;
        if (v157) {
          break;
        }
        var v158 = lineOfText$$1;
        var v416 = k$$1 + i$$6;
        introspect(JAM.policy.p39) {
          var v159 = text$$12.charAt(v416)
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
        var v417 = adjustNumbering(i$$6, numberingAdjustment);
        var v162 = rightNum(v417, "", groupSize$$2, tabIn$$3);
        aboveNum = v161 + v162;
      }
      var v164 = i$$6 >= stopBase$$2;
      if (v164) {
        break;
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v418 = basePerLine$$2 / groupSize$$2;
      v165 = j$$7 <= v418;
    }
    var v188 = numberPosition$$1 == "left";
    if (v188) {
      var v166 = outputWindow.document;
      var v590 = adjustNumbering(lineNum, numberingAdjustment);
      var v525 = rightNum(v590, "", 8, tabIn$$3);
      var v419 = v525 + lineOfText$$1;
      var v167 = v419 + "\n";
      introspect(JAM.policy.p39) {
        v166.write(v167);
      }
      var v171 = strands$$1 == "two";
      if (v171) {
        var v168 = outputWindow.document;
        var v591 = adjustNumbering(lineNum, numberingAdjustment);
        var v526 = rightNum(v591, "", 8, tabIn$$3);
        var v527 = complement(lineOfText$$1);
        var v420 = v526 + v527;
        var v169 = v420 + "\n";
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
        var v528 = lineOfText$$1;
        var v529 = adjustNumbering(i$$6, numberingAdjustment);
        var v421 = v528 + v529;
        var v173 = v421 + "\n";
        introspect(JAM.policy.p39) {
          v172.write(v173);
        }
        var v177 = strands$$1 == "two";
        if (v177) {
          var v174 = outputWindow.document;
          var v530 = complement(lineOfText$$1);
          var v531 = adjustNumbering(i$$6, numberingAdjustment);
          var v422 = v530 + v531;
          var v175 = v422 + "\n";
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
            var v423 = complement(lineOfText$$1);
            var v183 = v423 + "\n";
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
    var v424 = basePerLine$$3 / groupSize$$3;
    var v198 = j$$8 <= v424;
    for (;v198;) {
      var v193 = k$$2 < groupSize$$3;
      for (;v193;) {
        var v425 = i$$7 + k$$2;
        var v190 = v425 >= stopBase$$3;
        if (v190) {
          break;
        }
        var v191 = lineOfText$$2;
        var v426 = k$$2 + i$$7;
        introspect(JAM.policy.p39) {
          var v192 = text$$13.charAt(v426)
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
      var v427 = basePerLine$$3 / groupSize$$3;
      v198 = j$$8 <= v427;
    }
    var v209 = numberPosition$$2 == "left";
    if (v209) {
      var v199 = outputWindow.document;
      var v532 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v428 = v532 + lineOfText$$2;
      var v200 = v428 + "\n";
      introspect(JAM.policy.p39) {
        v199.write(v200);
      }
    } else {
      var v208 = numberPosition$$2 == "right";
      if (v208) {
        var v201 = outputWindow.document;
        var v429 = lineOfText$$2 + i$$7;
        var v202 = v429 + "\n";
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
  var v592 = sequence$$13.length;
  var v533 = v592 <= firstIndexToMutate;
  var v593 = !v533;
  if (v593) {
    v533 = lastIndexToMutate < 0;
  }
  var v430 = v533;
  var v534 = !v430;
  if (v534) {
    v430 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v211 = v430;
  if (v211) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v219 = i$$8 < numMut;
  for (;v219;) {
    maxNum = sequence$$13.length;
    var v431 = Math.random();
    var v212 = v431 * maxNum;
    introspect(JAM.policy.p28) {
      randNum = Math.floor(v212);
    }
    var v432 = randNum < firstIndexToMutate;
    var v535 = !v432;
    if (v535) {
      v432 = randNum > lastIndexToMutate;
    }
    var v213 = v432;
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
      var v433 = Math.random();
      var v434 = components$$1.length;
      var v214 = v433 * v434;
      introspect(JAM.policy.p28) {
        componentsIndex = Math.round(v214);
      }
      var v435 = components$$1.length;
      var v215 = componentsIndex == v435;
      if (v215) {
        componentsIndex = 0;
      }
      introspect(JAM.policy.p26) {
        var v436 = components$$1[componentsIndex]
      }
      var v216 = v436 != currentChar;
      if (v216) {
        needNewChar = false;
      }
    }
    introspect(JAM.policy.p23) {
      var v437 = sequence$$13.substring(0, randNum)
    }
    introspect(JAM.policy.p26) {
      var v438 = components$$1[componentsIndex]
    }
    var v217 = v437 + v438;
    var v439 = randNum + 1;
    var v440 = sequence$$13.length;
    introspect(JAM.policy.p40) {
      var v218 = sequence$$13.substring(v439, v440)
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
    var v441 = Math.random();
    var v442 = components$$2.length;
    var v222 = v441 * v442;
    introspect(JAM.policy.p28) {
      tempNum$$1 = Math.floor(v222);
    }
    introspect(JAM.policy.p26) {
      tempChar$$1 = components$$2[tempNum$$1];
    }
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v443 = sequence$$14.length;
    var v225 = v443 == 60;
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
    var v594 = sequence$$15.length;
    var v536 = v594 - lookAhead;
    var v537 = sequence$$15.length;
    introspect(JAM.policy.p40) {
      var v444 = sequence$$15.substring(v536, v537)
    }
    var v230 = v444 + sequence$$15;
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
  var v595 = '<tr><td class="title" width="200px">' + "Site:";
  var v538 = v595 + '</td><td class="title">';
  var v445 = v538 + "Positions:";
  var v235 = v445 + "</td></tr>\n";
  introspect(JAM.policy.p39) {
    v234.write(v235);
  }
  var i$$9 = 0;
  var v446 = arrayOfItems.length;
  var v251 = i$$9 < v446;
  for (;v251;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAM.policy.p26) {
      var v447 = arrayOfItems[i$$9]
    }
    introspect(JAM.policy.p28) {
      var v236 = v447.match(/\/.+\//)
    }
    matchExp = v236 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    introspect(JAM.policy.p26) {
      var v596 = arrayOfItems[i$$9]
    }
    introspect(JAM.policy.p28) {
      var v539 = v596.match(/\)\D*\d+/)
    }
    var v448 = v539.toString();
    introspect(JAM.policy.p27) {
      var v237 = v448.replace(/\)\D*/, "")
    }
    cutDistance = parseFloat(v237);
    introspect(JAM.policy.p39) {
      var v243 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    for (;v243;) {
      var v238 = matchExp.lastIndex;
      matchPosition = v238 - cutDistance;
      var v449 = matchPosition >= lowerLimit;
      if (v449) {
        v449 = matchPosition < upperLimit;
      }
      var v241 = v449;
      if (v241) {
        timesFound = timesFound + 1;
        var v239 = tempString$$1 + ", ";
        var v450 = matchPosition - shiftValue;
        var v240 = v450 + 1;
        tempString$$1 = v239 + v240;
      }
      var v451 = matchExp.lastIndex;
      var v540 = RegExp.lastMatch;
      var v452 = v540.length;
      var v242 = v451 - v452;
      matchExp.lastIndex = v242 + 1;
      introspect(JAM.policy.p39) {
        v243 = matchArray$$1 = matchExp.exec(sequence$$15);
      }
    }
    introspect(JAM.policy.p28) {
      var v453 = tempString$$1.search(/\d/)
    }
    var v244 = v453 != -1;
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
    var v680 = '<tr><td class="' + backGroundClass;
    var v667 = v680 + '">';
    introspect(JAM.policy.p26) {
      var v705 = arrayOfItems[i$$9]
    }
    introspect(JAM.policy.p28) {
      var v693 = v705.match(/\([^\(]+\)/)
    }
    var v681 = v693.toString();
    introspect(JAM.policy.p27) {
      var v668 = v681.replace(/\(|\)/g, "")
    }
    var v654 = v667 + v668;
    var v633 = v654 + '</td><td class="';
    var v597 = v633 + backGroundClass;
    var v541 = v597 + '">';
    var v454 = v541 + tempString$$1;
    var v250 = v454 + "</td></tr>\n";
    introspect(JAM.policy.p39) {
      v249.write(v250);
    }
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v455 = arrayOfItems.length;
    v251 = i$$9 < v455;
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
  var v655 = '<tr><td class="title">' + "Pattern:";
  var v634 = v655 + '</td><td class="title">';
  var v598 = v634 + "Times found:";
  var v542 = v598 + '</td><td class="title">';
  var v456 = v542 + "Percentage:";
  var v255 = v456 + "</td></tr>\n";
  introspect(JAM.policy.p39) {
    v254.write(v255);
  }
  var i$$10 = 0;
  var v457 = arrayOfItems$$1.length;
  var v264 = i$$10 < v457;
  for (;v264;) {
    var tempNumber = 0;
    introspect(JAM.policy.p26) {
      var v458 = arrayOfItems$$1[i$$10]
    }
    introspect(JAM.policy.p28) {
      var v256 = v458.match(/\/[^\/]+\//)
    }
    var matchExp$$1 = v256 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    introspect(JAM.policy.p39) {
      var v459 = sequence$$16.search(matchExp$$1)
    }
    var v258 = v459 != -1;
    if (v258) {
      introspect(JAM.policy.p39) {
        var v257 = sequence$$16.match(matchExp$$1)
      }
      tempNumber = v257.length;
    }
    var percentage = 0;
    var v543 = originalLength + 1;
    introspect(JAM.policy.p26) {
      var v635 = arrayOfItems$$1[i$$10]
    }
    introspect(JAM.policy.p28) {
      var v599 = v635.match(/\d+/)
    }
    var v544 = parseFloat(v599);
    var v460 = v543 - v544;
    var v261 = v460 > 0;
    if (v261) {
      var v259 = 100 * tempNumber;
      var v461 = originalLength + 1;
      introspect(JAM.policy.p26) {
        var v600 = arrayOfItems$$1[i$$10]
      }
      introspect(JAM.policy.p28) {
        var v545 = v600.match(/\d+/)
      }
      var v462 = parseFloat(v545);
      var v260 = v461 - v462;
      percentage = v259 / v260;
    }
    var v262 = outputWindow.document;
    introspect(JAM.policy.p26) {
      var v706 = arrayOfItems$$1[i$$10]
    }
    introspect(JAM.policy.p28) {
      var v694 = v706.match(/\([^\(]+\)\b/)
    }
    var v682 = v694.toString();
    introspect(JAM.policy.p27) {
      var v669 = v682.replace(/\(|\)/g, "")
    }
    var v656 = "<tr><td>" + v669;
    var v636 = v656 + "</td><td>";
    var v601 = v636 + tempNumber;
    var v546 = v601 + "</td><td>";
    introspect(JAM.policy.p22) {
      var v547 = percentage.toFixed(2)
    }
    var v463 = v546 + v547;
    var v263 = v463 + "</td></tr>\n";
    introspect(JAM.policy.p39) {
      v262.write(v263);
    }
    i$$10 = i$$10 + 1;
    var v464 = arrayOfItems$$1.length;
    v264 = i$$10 < v464;
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
  var v465 = sequence$$17.length;
  var v272 = v465 > 0;
  for (;v272;) {
    maxNum$$1 = sequence$$17.length;
    var v466 = Math.random();
    var v266 = v466 * maxNum$$1;
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
    var v467 = tempSeq.length;
    var v271 = v467 == 60;
    if (v271) {
      var v269 = outputWindow.document;
      var v270 = tempSeq + "\n";
      introspect(JAM.policy.p39) {
        v269.write(v270);
      }
      tempSeq = "";
    }
    var v468 = sequence$$17.length;
    v272 = v468 > 0;
  }
  var v273 = outputWindow.document;
  var v274 = tempSeq + "\n";
  introspect(JAM.policy.p39) {
    v273.write(v274);
  }
  return true;
}
function splitFasta(theDocument) {
  JAM.startProfile('compute');

  var maxInput$$3 = 5E5;
  var sequences = new Array;
  var v469 = testScript();
  var v275 = v469 == false;
  if (v275) {
    return false;
  }
  var v637 = theDocument.forms;
  var v602 = v637[0];
  var v548 = v602.elements;
  var v470 = v548[1];
  var v276 = v470.value;
  introspect(JAM.policy.p27) {
    var newLength = v276.replace(/[^\d]/g, "")
  }
  var v638 = theDocument.forms;
  var v603 = v638[0];
  var v549 = v603.elements;
  var v471 = v549[2];
  var v277 = v471.value;
  introspect(JAM.policy.p27) {
    var overlap = v277.replace(/[^\d]/g, "")
  }
  var v695 = theDocument.forms;
  var v683 = v695[0];
  var v670 = v683.elements;
  var v657 = v670[0];
  var v639 = checkFormElement(v657);
  var v604 = v639 == false;
  var v641 = !v604;
  if (v641) {
    var v707 = theDocument.forms;
    var v696 = v707[0];
    var v684 = v696.elements;
    var v671 = v684[0];
    var v658 = v671.value;
    var v640 = checkTextLength(v658, maxInput$$3);
    v604 = v640 == false;
  }
  var v550 = v604;
  var v606 = !v550;
  if (v606) {
    var v605 = verifyMaxDigits(newLength, maxInput$$3);
    v550 = v605 == false;
  }
  var v472 = v550;
  var v552 = !v472;
  if (v552) {
    var v551 = verifyMaxDigits(overlap, maxInput$$3);
    v472 = v551 == false;
  }
  var v278 = v472;
  if (v278) {
    return false;
  }
  newLength = parseInt(newLength);
  overlap = parseInt(overlap);
  openWindow("Split FASTA");
  openPre();
  var v642 = theDocument.forms;
  var v607 = v642[0];
  var v553 = v607.elements;
  var v473 = v553[0];
  var v279 = v473.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v279);
  var i$$11 = 0;
  var v474 = arrayOfFasta$$1.length;
  var v288 = i$$11 < v474;
  for (;v288;) {
    introspect(JAM.policy.p26) {
      var v280 = arrayOfFasta$$1[i$$11]
    }
    var sequence$$18 = getSequenceFromFasta(v280);
    sequence$$18 = removeNonLetters(sequence$$18);
    introspect(JAM.policy.p26) {
      var v281 = arrayOfFasta$$1[i$$11]
    }
    var title$$9 = getTitleFromFasta(v281);
    var length$$11 = sequence$$18.length;
    var seqCount = 1;
    var j$$10 = 0;
    var v287 = j$$10 < length$$11;
    for (;v287;) {
      var v282 = j$$10 > overlap;
      if (v282) {
        j$$10 = j$$10 - overlap;
      }
      var v283 = j$$10 + newLength;
      introspect(JAM.policy.p40) {
        var subseq = sequence$$18.substring(j$$10, v283)
      }
      var subseq_length = subseq.length;
      var start$$4 = j$$10 + 1;
      var v284 = start$$4 + subseq_length;
      var end$$1 = v284 - 1;
      var v285 = outputWindow.document;
      var v734 = ">fragment_" + seqCount;
      var v729 = v734 + ";";
      var v724 = v729 + title$$9;
      var v716 = v724 + "_start=";
      var v708 = v716 + start$$4;
      var v697 = v708 + ";end=";
      var v685 = v697 + end$$1;
      var v672 = v685 + ";length=";
      var v659 = v672 + subseq_length;
      var v643 = v659 + ";source_length=";
      var v608 = v643 + length$$11;
      var v554 = v608 + "\n";
      var v555 = addReturns(subseq);
      var v475 = v554 + v555;
      var v286 = v475 + "\n\n";
      introspect(JAM.policy.p39) {
        v285.write(v286);
      }
      seqCount = seqCount + 1;
      j$$10 = j$$10 + newLength;
      v287 = j$$10 < length$$11;
    }
    i$$11 = i$$11 + 1;
    var v476 = arrayOfFasta$$1.length;
    v288 = i$$11 < v476;
  }
  closePre();
  closeWindow();

  JAM.stopProfile('compute');
  return true;
}
document.onload = v2;
introspect(JAM.policy.p24) {
  var v289 = document.getElementById("submitbtn")
}
v289.onclick = v3;
introspect(JAM.policy.p24) {
  var v290 = document.getElementById("clearbtn")
}
v290.onclick = v4

JAM.stopProfile('load');
