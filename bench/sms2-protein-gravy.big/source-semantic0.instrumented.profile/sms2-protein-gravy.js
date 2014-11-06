
JAM.startProfile('load');
function v4() {
  var v556 = document.forms;
  var v481 = v556[0];
  var v293 = v481.elements;
  var v5 = v293[0];
  v5.value = " ";
  return;
}
function v3() {
  try {
    proteinGravy(document);
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
  introspect(JAM.policy.p27) {
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
    introspect(JAM.policy.p26) {
      var v605 = arrayOfTitles[i$$1]
    }
    introspect(JAM.policy.p28) {
      var v557 = v605.search(/\S/)
    }
    var v482 = v557 == -1;
    var v559 = !v482;
    if (v559) {
      introspect(JAM.policy.p26) {
        var v606 = arrayOfSequences[i$$1]
      }
      introspect(JAM.policy.p28) {
        var v558 = v606.search(/\S/)
      }
      v482 = v558 == -1;
    }
    var v297 = v482;
    var v484 = !v297;
    if (v484) {
      introspect(JAM.policy.p26) {
        var v560 = arrayOfSequences[i$$1]
      }
      var v483 = v560.length;
      v297 = v483 != lengthOfAlign;
    }
    var v10 = v297;
    if (v10) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1 = i$$1 + 1;
    var v298 = arrayOfTitles.length;
    v11 = i$$1 < v298;
  }
  return true;
}
function checkCodonTable(codonTable) {
  introspect(JAM.policy.p28) {
    var v636 = codonTable.search(/AmAcid/)
  }
  var v607 = v636 == -1;
  var v638 = !v607;
  if (v638) {
    introspect(JAM.policy.p28) {
      var v637 = codonTable.search(/Codon/)
    }
    v607 = v637 == -1;
  }
  var v561 = v607;
  var v609 = !v561;
  if (v609) {
    introspect(JAM.policy.p28) {
      var v608 = codonTable.search(/Number/)
    }
    v561 = v608 == -1;
  }
  var v485 = v561;
  var v563 = !v485;
  if (v563) {
    introspect(JAM.policy.p28) {
      var v562 = codonTable.search(/\/1000/)
    }
    v485 = v562 == -1;
  }
  var v299 = v485;
  var v487 = !v299;
  if (v487) {
    introspect(JAM.policy.p28) {
      var v486 = codonTable.search(/Fraction\s*\.\./)
    }
    v299 = v486 == -1;
  }
  var v12 = v299;
  if (v12) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v488 = formElement.value;
  introspect(JAM.policy.p28) {
    var v300 = v488.search(/\S/)
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
    introspect(JAM.policy.p26) {
      var v489 = arrayOfPatterns[z$$2]
    }
    introspect(JAM.policy.p28) {
      var v302 = v489.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/)
    }
    var v14 = v302 == -1;
    if (v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    introspect(JAM.policy.p26) {
      var v490 = arrayOfPatterns[z$$2]
    }
    var v303 = moreExpressionCheck(v490);
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
  var v25 = j < v305;
  for (;v25;) {
    var v19 = geneticCodeMatchExp;
    var v20 = j;
    introspect(JAM.policy.p26) {
      var v564 = arrayOfPatterns[j]
    }
    introspect(JAM.policy.p28) {
      var v491 = v564.match(/\/.+\//)
    }
    var v306 = v491 + "gi";
    var v721 = eval(v306);
    introspect(JAM.policy.p13) {
      v19[v20] = v721;
    }
    var v21 = geneticCodeMatchResult;
    var v22 = j;
    introspect(JAM.policy.p26) {
      var v492 = arrayOfPatterns[j]
    }
    introspect(JAM.policy.p28) {
      var v307 = v492.match(/=[a-zA-Z\*]/)
    }
    var v722 = v307.toString();
    introspect(JAM.policy.p13) {
      v21[v22] = v722;
    }
    var v23 = geneticCodeMatchResult;
    var v24 = j;
    introspect(JAM.policy.p26) {
      var v308 = geneticCodeMatchResult[j]
    }
    introspect(JAM.policy.p27) {
      var v723 = v308.replace(/=/g, "")
    }
    introspect(JAM.policy.p13) {
      v23[v24] = v723;
    }
    j = j + 1;
    var v309 = arrayOfPatterns.length;
    v25 = j < v309;
  }
  var i$$2 = 0;
  var v493 = testSequence.length;
  var v310 = v493 - 3;
  var v32 = i$$2 <= v310;
  for (;v32;) {
    var v26 = i$$2 + 3;
    introspect(JAM.policy.p27) {
      codon = testSequence.substring(i$$2, v26);
    }
    j = 0;
    var v311 = geneticCodeMatchExp.length;
    var v30 = j < v311;
    for (;v30;) {
      introspect(JAM.policy.p26) {
        var v494 = geneticCodeMatchExp[j]
      }
      introspect(JAM.policy.p39) {
        var v312 = codon.search(v494)
      }
      var v29 = v312 != -1;
      if (v29) {
        var v28 = oneMatch == true;
        if (v28) {
          var v313 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v27 = v313 + ".";
          alert(v27);
          return false;
        }
        oneMatch = true;
      }
      j = j + 1;
      var v314 = geneticCodeMatchExp.length;
      v30 = j < v314;
    }
    var v31 = oneMatch == false;
    if (v31) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v495 = testSequence.length;
    var v315 = v495 - 3;
    v32 = i$$2 <= v315;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v316 = arrayOfPatterns$$1.length;
  var v34 = z$$3 < v316;
  for (;v34;) {
    introspect(JAM.policy.p26) {
      var v496 = arrayOfPatterns$$1[z$$3]
    }
    introspect(JAM.policy.p28) {
      var v317 = v496.search(/[^acdefghiklmnpqrstvwyz]/i)
    }
    var v33 = v317 != -1;
    if (v33) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v318 = arrayOfPatterns$$1.length;
    v34 = z$$3 < v318;
  }
  var i$$3 = 0;
  var v319 = arrayOfPatterns$$1.length;
  var v38 = i$$3 < v319;
  for (;v38;) {
    introspect(JAM.policy.p26) {
      var v497 = arrayOfPatterns$$1[i$$3]
    }
    var v320 = "[" + v497;
    var v35 = v320 + "]";
    var re = new RegExp(v35, "gi");
    var j$$1 = i$$3 + 1;
    var v321 = arrayOfPatterns$$1.length;
    var v37 = j$$1 < v321;
    for (;v37;) {
      introspect(JAM.policy.p26) {
        var v498 = arrayOfPatterns$$1[j$$1]
      }
      introspect(JAM.policy.p39) {
        var v322 = v498.search(re)
      }
      var v36 = v322 != -1;
      if (v36) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1 = j$$1 + 1;
      var v323 = arrayOfPatterns$$1.length;
      v37 = j$$1 < v323;
    }
    i$$3 = i$$3 + 1;
    var v324 = arrayOfPatterns$$1.length;
    v38 = i$$3 < v324;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v325 = arrayOfPatterns$$2.length;
  var v41 = z$$4 < v325;
  for (;v41;) {
    introspect(JAM.policy.p26) {
      var v499 = arrayOfPatterns$$2[z$$4]
    }
    introspect(JAM.policy.p28) {
      var v326 = v499.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i)
    }
    var v39 = v326 == -1;
    if (v39) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    introspect(JAM.policy.p26) {
      var v500 = arrayOfPatterns$$2[z$$4]
    }
    var v327 = moreExpressionCheck(v500);
    var v40 = v327 == false;
    if (v40) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v328 = arrayOfPatterns$$2.length;
    v41 = z$$4 < v328;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v565 = getSequenceFromFasta(text$$7);
  introspect(JAM.policy.p27) {
    var v501 = v565.replace(/[^A-Za-z]/g, "")
  }
  var v329 = v501.length;
  var v43 = v329 > maxInput;
  if (v43) {
    var v330 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v42 = v330 + " characters.";
    alert(v42);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v331 = text$$8.length;
  var v45 = v331 > maxInput$$1;
  if (v45) {
    var v332 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v44 = v332 + " characters.";
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
  var v333 = alignArray.length;
  var v52 = v333 < 3;
  if (v52) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v334 = alignArray.length;
  var v54 = i$$4 < v334;
  for (;v54;) {
    introspect(JAM.policy.p26) {
      var v502 = alignArray[i$$4]
    }
    introspect(JAM.policy.p28) {
      var v335 = v502.search(/[^\s]+\s/)
    }
    var v53 = v335 == -1;
    if (v53) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4 = i$$4 + 1;
    var v336 = alignArray.length;
    v54 = i$$4 < v336;
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
    var v337 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v57 = v337 != -1;
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
  var v338 = sequence$$2.length;
  var v58 = "&gt;results for " + v338;
  var stringToReturn = v58 + " residue sequence ";
  introspect(JAM.policy.p28) {
    var v339 = fastaSequenceTitle.search(/[^\s]/)
  }
  var v60 = v339 != -1;
  if (v60) {
    var v340 = stringToReturn + '"';
    var v59 = v340 + fastaSequenceTitle;
    stringToReturn = v59 + '"';
  }
  var v341 = stringToReturn + ' starting "';
  introspect(JAM.policy.p23) {
    var v342 = sequence$$2.substring(0, 10)
  }
  var v61 = v341 + v342;
  stringToReturn = v61 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v343 = sequenceOne.length;
  var v62 = "Search results for " + v343;
  var stringToReturn$$1 = v62 + " residue sequence ";
  introspect(JAM.policy.p28) {
    var v344 = fastaSequenceTitleOne.search(/[^\s]/)
  }
  var v64 = v344 != -1;
  if (v64) {
    var v345 = stringToReturn$$1 + '"';
    var v63 = v345 + fastaSequenceTitleOne;
    stringToReturn$$1 = v63 + '"';
  }
  var v346 = stringToReturn$$1 + ' starting "';
  introspect(JAM.policy.p23) {
    var v347 = sequenceOne.substring(0, 10)
  }
  var v65 = v346 + v347;
  stringToReturn$$1 = v65 + '"\n';
  var v348 = stringToReturn$$1 + "and ";
  var v349 = sequenceTwo.length;
  var v66 = v348 + v349;
  stringToReturn$$1 = v66 + " residue sequence ";
  introspect(JAM.policy.p28) {
    var v350 = fastaSequenceTitleTwo.search(/[^\s]/)
  }
  var v68 = v350 != -1;
  if (v68) {
    var v351 = stringToReturn$$1 + '"';
    var v67 = v351 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v67 + '"';
  }
  var v352 = stringToReturn$$1 + ' starting "';
  introspect(JAM.policy.p23) {
    var v353 = sequenceTwo.substring(0, 10)
  }
  var v69 = v352 + v353;
  stringToReturn$$1 = v69 + '"';
  var v70 = '<div class="info">' + stringToReturn$$1;
  return v70 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v71 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v71);
  var j$$2 = 0;
  var v354 = arrayOfPatterns$$3.length;
  var v74 = j$$2 < v354;
  for (;v74;) {
    var v72 = geneticCodeMatchExp$$1;
    var v73 = j$$2;
    introspect(JAM.policy.p26) {
      var v566 = arrayOfPatterns$$3[j$$2]
    }
    introspect(JAM.policy.p28) {
      var v503 = v566.match(/\/.+\//)
    }
    var v355 = v503 + "gi";
    var v724 = eval(v355);
    introspect(JAM.policy.p13) {
      v72[v73] = v724;
    }
    j$$2 = j$$2 + 1;
    var v356 = arrayOfPatterns$$3.length;
    v74 = j$$2 < v356;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v75 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v75);
  var j$$3 = 0;
  var v357 = arrayOfPatterns$$4.length;
  var v80 = j$$3 < v357;
  for (;v80;) {
    var v76 = geneticCodeMatchResult$$1;
    var v77 = j$$3;
    introspect(JAM.policy.p26) {
      var v504 = arrayOfPatterns$$4[j$$3]
    }
    introspect(JAM.policy.p28) {
      var v358 = v504.match(/=[a-zA-Z\*]/)
    }
    var v725 = v358.toString();
    introspect(JAM.policy.p13) {
      v76[v77] = v725;
    }
    var v78 = geneticCodeMatchResult$$1;
    var v79 = j$$3;
    introspect(JAM.policy.p26) {
      var v359 = geneticCodeMatchResult$$1[j$$3]
    }
    introspect(JAM.policy.p27) {
      var v726 = v359.replace(/=/g, "")
    }
    introspect(JAM.policy.p13) {
      v78[v79] = v726;
    }
    j$$3 = j$$3 + 1;
    var v360 = arrayOfPatterns$$4.length;
    v80 = j$$3 < v360;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v361 = sequence$$3.length;
  var v81 = "Results for " + v361;
  var stringToReturn$$2 = v81 + " residue sequence ";
  introspect(JAM.policy.p28) {
    var v362 = fastaSequenceTitle$$1.search(/[^\s]/)
  }
  var v83 = v362 != -1;
  if (v83) {
    var v363 = stringToReturn$$2 + '"';
    var v82 = v363 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v82 + '"';
  }
  var v364 = stringToReturn$$2 + ' starting "';
  introspect(JAM.policy.p23) {
    var v365 = sequence$$3.substring(0, 10)
  }
  var v84 = v364 + v365;
  stringToReturn$$2 = v84 + '"';
  var v85 = '<div class="info">' + stringToReturn$$2;
  return v85 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v505 = "Results for " + topology;
  var v366 = v505 + " ";
  var v367 = sequence$$4.length;
  var v86 = v366 + v367;
  var stringToReturn$$3 = v86 + " residue sequence ";
  introspect(JAM.policy.p28) {
    var v368 = fastaSequenceTitle$$2.search(/[^\s]/)
  }
  var v88 = v368 != -1;
  if (v88) {
    var v369 = stringToReturn$$3 + '"';
    var v87 = v369 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v87 + '"';
  }
  var v370 = stringToReturn$$3 + ' starting "';
  introspect(JAM.policy.p23) {
    var v371 = sequence$$4.substring(0, 10)
  }
  var v89 = v370 + v371;
  stringToReturn$$3 = v89 + '"';
  var v90 = '<div class="info">' + stringToReturn$$3;
  return v90 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v372 = sequenceOne$$1.length;
  var v91 = "Alignment results for " + v372;
  var stringToReturn$$4 = v91 + " residue sequence ";
  introspect(JAM.policy.p28) {
    var v373 = fastaSequenceTitleOne$$1.search(/[^\s]/)
  }
  var v93 = v373 != -1;
  if (v93) {
    var v374 = stringToReturn$$4 + '"';
    var v92 = v374 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v92 + '"';
  }
  var v375 = stringToReturn$$4 + ' starting "';
  introspect(JAM.policy.p23) {
    var v376 = sequenceOne$$1.substring(0, 10)
  }
  var v94 = v375 + v376;
  stringToReturn$$4 = v94 + '"\n';
  var v377 = stringToReturn$$4 + "and ";
  var v378 = sequenceTwo$$1.length;
  var v95 = v377 + v378;
  stringToReturn$$4 = v95 + " residue sequence ";
  introspect(JAM.policy.p28) {
    var v379 = fastaSequenceTitleTwo$$1.search(/[^\s]/)
  }
  var v97 = v379 != -1;
  if (v97) {
    var v380 = stringToReturn$$4 + '"';
    var v96 = v380 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v96 + '"';
  }
  var v381 = stringToReturn$$4 + ' starting "';
  introspect(JAM.policy.p23) {
    var v382 = sequenceTwo$$1.substring(0, 10)
  }
  var v98 = v381 + v382;
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
    var v383 = Math.random();
    var v384 = components.length;
    var v100 = v383 * v384;
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
    var v385 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v102 = v385 != -1;
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
    var v386 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v104 = v386 != -1;
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
    var v699 = expressionToCheck.search(/\[[A-Za-z\|]*\[/)
  }
  var v692 = v699 != -1;
  var v701 = !v692;
  if (v701) {
    introspect(JAM.policy.p28) {
      var v700 = expressionToCheck.search(/\][A-Za-z\|]*\]/)
    }
    v692 = v700 != -1;
  }
  var v683 = v692;
  var v694 = !v683;
  if (v694) {
    introspect(JAM.policy.p28) {
      var v693 = expressionToCheck.search(/\[\]/)
    }
    v683 = v693 != -1;
  }
  var v674 = v683;
  var v685 = !v674;
  if (v685) {
    introspect(JAM.policy.p28) {
      var v684 = expressionToCheck.search(/\/[A-Za-z\|]*\]/)
    }
    v674 = v684 != -1;
  }
  var v663 = v674;
  var v676 = !v663;
  if (v676) {
    introspect(JAM.policy.p28) {
      var v675 = expressionToCheck.search(/\[[A-Za-z\|]*\//)
    }
    v663 = v675 != -1;
  }
  var v651 = v663;
  var v665 = !v651;
  if (v665) {
    introspect(JAM.policy.p28) {
      var v664 = expressionToCheck.search(/\|\|/)
    }
    v651 = v664 != -1;
  }
  var v639 = v651;
  var v653 = !v639;
  if (v653) {
    introspect(JAM.policy.p28) {
      var v652 = expressionToCheck.search(/\/\|/)
    }
    v639 = v652 != -1;
  }
  var v610 = v639;
  var v641 = !v610;
  if (v641) {
    introspect(JAM.policy.p28) {
      var v640 = expressionToCheck.search(/\|\//)
    }
    v610 = v640 != -1;
  }
  var v567 = v610;
  var v612 = !v567;
  if (v612) {
    introspect(JAM.policy.p28) {
      var v611 = expressionToCheck.search(/\[.\]/)
    }
    v567 = v611 != -1;
  }
  var v506 = v567;
  var v569 = !v506;
  if (v569) {
    introspect(JAM.policy.p28) {
      var v568 = expressionToCheck.search(/\</)
    }
    v506 = v568 != -1;
  }
  var v387 = v506;
  var v508 = !v387;
  if (v508) {
    introspect(JAM.policy.p28) {
      var v507 = expressionToCheck.search(/\>/)
    }
    v387 = v507 != -1;
  }
  var v105 = v387;
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
  var v509 = v570 + "<head>\n";
  var v388 = v509 + "<title>Sequence Manipulation Suite</title>\n";
  var v111 = v388 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  introspect(JAM.policy.p39) {
    v110.write(v111);
  }
  if (isColor) {
    var v112 = outputWindow.document;
    var v714 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v710 = v714 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v706 = v710 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v702 = v706 + "div.info {font-weight: bold}\n";
    var v695 = v702 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v686 = v695 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v677 = v686 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v666 = v677 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v654 = v666 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v642 = v654 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v613 = v642 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v571 = v613 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v510 = v571 + "td.many {color: #000000}\n";
    var v389 = v510 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v113 = v389 + "</style>\n";
    introspect(JAM.policy.p39) {
      v112.write(v113);
    }
  } else {
    var v114 = outputWindow.document;
    var v718 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v715 = v718 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v711 = v715 + "div.title {display: none}\n";
    var v707 = v711 + "div.info {font-weight: bold}\n";
    var v703 = v707 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v696 = v703 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v687 = v696 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v678 = v687 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v667 = v678 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v655 = v667 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v643 = v655 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v614 = v643 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v572 = v614 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v511 = v572 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v390 = v511 + "img {display: none}\n";
    var v115 = v390 + "</style>\n";
    introspect(JAM.policy.p39) {
      v114.write(v115);
    }
  }
  var v116 = outputWindow.document;
  var v573 = "</head>\n" + '<body class="main">\n';
  var v512 = v573 + '<div class="title">';
  var v391 = v512 + title$$6;
  var v117 = v391 + " results</div>\n";
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
  var v513 = v574 + "<head>\n";
  var v392 = v513 + "<title>Sequence Manipulation Suite</title>\n";
  var v119 = v392 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  introspect(JAM.policy.p39) {
    v118.write(v119);
  }
  if (isBackground) {
    var v120 = outputWindow.document;
    var v716 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v712 = v716 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v708 = v712 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v704 = v708 + "div.info {font-weight: bold}\n";
    var v697 = v704 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v688 = v697 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v679 = v688 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v668 = v679 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v656 = v668 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v644 = v656 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v615 = v644 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v575 = v615 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v514 = v575 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v393 = v514 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v121 = v393 + "</style>\n";
    introspect(JAM.policy.p39) {
      v120.write(v121);
    }
  } else {
    var v122 = outputWindow.document;
    var v720 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v719 = v720 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v717 = v719 + "div.title {display: none}\n";
    var v713 = v717 + "div.info {font-weight: bold}\n";
    var v709 = v713 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v705 = v709 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v698 = v705 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v689 = v698 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v680 = v689 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v669 = v680 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v657 = v669 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v645 = v657 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v616 = v645 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v576 = v616 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v515 = v576 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v394 = v515 + "img {display: none}\n";
    var v123 = v394 + "</style>\n";
    introspect(JAM.policy.p39) {
      v122.write(v123);
    }
  }
  var v124 = outputWindow.document;
  var v577 = "</head>\n" + '<body class="main">\n';
  var v516 = v577 + '<div class="title">';
  var v395 = v516 + title$$8;
  var v125 = v395 + " results</div>\n";
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
    var v396 = dnaSequence$$1.search(/./)
  }
  var v126 = v396 != -1;
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
  var v397 = testArray[0];
  var v130 = v397 != testString;
  if (v130) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  introspect(JAM.policy.p39) {
    var v398 = testString.search(re$$2)
  }
  var v131 = v398 == -1;
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
    var v399 = testNum.toFixed(3)
  }
  var v134 = v399 != 2489.824;
  if (v134) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  introspect(JAM.policy.p22) {
    var v400 = testNum.toPrecision(5)
  }
  var v135 = v400 != 2489.8;
  if (v135) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  introspect(JAM.policy.p28) {
    var v401 = theNumber$$1.search(/\d/)
  }
  var v136 = v401 == -1;
  if (v136) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  introspect(JAM.policy.p28) {
    var v617 = emblFile.search(/ID/)
  }
  var v578 = v617 == -1;
  var v619 = !v578;
  if (v619) {
    introspect(JAM.policy.p28) {
      var v618 = emblFile.search(/AC/)
    }
    v578 = v618 == -1;
  }
  var v517 = v578;
  var v580 = !v517;
  if (v580) {
    introspect(JAM.policy.p28) {
      var v579 = emblFile.search(/DE/)
    }
    v517 = v579 == -1;
  }
  var v402 = v517;
  var v519 = !v402;
  if (v519) {
    introspect(JAM.policy.p28) {
      var v518 = emblFile.search(/SQ/)
    }
    v402 = v518 == -1;
  }
  var v137 = v402;
  if (v137) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  introspect(JAM.policy.p28) {
    var v403 = theNumber$$2.search(/\d/)
  }
  var v138 = v403 == -1;
  if (v138) {
    alert("Please enter a number.");
    return false;
  }
  var v140 = theNumber$$2 > maxInput$$2;
  if (v140) {
    var v404 = "Please enter a number less than or equal to " + maxInput$$2;
    var v139 = v404 + ".";
    alert(v139);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  introspect(JAM.policy.p28) {
    var v405 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i)
  }
  var v141 = v405 != -1;
  if (v141) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  introspect(JAM.policy.p28) {
    var v406 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i)
  }
  var v142 = v406 != -1;
  if (v142) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  introspect(JAM.policy.p28) {
    var v620 = genBankFile.search(/LOCUS/)
  }
  var v581 = v620 == -1;
  var v622 = !v581;
  if (v622) {
    introspect(JAM.policy.p28) {
      var v621 = genBankFile.search(/DEFINITION/)
    }
    v581 = v621 == -1;
  }
  var v520 = v581;
  var v583 = !v520;
  if (v583) {
    introspect(JAM.policy.p28) {
      var v582 = genBankFile.search(/ACCESSION/)
    }
    v520 = v582 == -1;
  }
  var v407 = v520;
  var v522 = !v407;
  if (v522) {
    introspect(JAM.policy.p28) {
      var v521 = genBankFile.search(/ORIGIN/)
    }
    v407 = v521 == -1;
  }
  var v143 = v407;
  if (v143) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  introspect(JAM.policy.p28) {
    var v623 = genBankFile$$1.search(/LOCUS/)
  }
  var v584 = v623 == -1;
  var v625 = !v584;
  if (v625) {
    introspect(JAM.policy.p28) {
      var v624 = genBankFile$$1.search(/DEFINITION/)
    }
    v584 = v624 == -1;
  }
  var v523 = v584;
  var v586 = !v523;
  if (v586) {
    introspect(JAM.policy.p28) {
      var v585 = genBankFile$$1.search(/ACCESSION/)
    }
    v523 = v585 == -1;
  }
  var v408 = v523;
  var v525 = !v408;
  if (v525) {
    introspect(JAM.policy.p28) {
      var v524 = genBankFile$$1.search(/ORIGIN/)
    }
    v408 = v524 == -1;
  }
  var v144 = v408;
  if (v144) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  introspect(JAM.policy.p28) {
    var v409 = genBankFile$$1.search(/FEATURES {13}/)
  }
  var v145 = v409 == -1;
  if (v145) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  introspect(JAM.policy.p28) {
    var v626 = emblFile$$1.search(/ID/)
  }
  var v587 = v626 == -1;
  var v628 = !v587;
  if (v628) {
    introspect(JAM.policy.p28) {
      var v627 = emblFile$$1.search(/AC/)
    }
    v587 = v627 == -1;
  }
  var v526 = v587;
  var v589 = !v526;
  if (v589) {
    introspect(JAM.policy.p28) {
      var v588 = emblFile$$1.search(/DE/)
    }
    v526 = v588 == -1;
  }
  var v410 = v526;
  var v528 = !v410;
  if (v528) {
    introspect(JAM.policy.p28) {
      var v527 = emblFile$$1.search(/SQ/)
    }
    v410 = v527 == -1;
  }
  var v146 = v410;
  if (v146) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  introspect(JAM.policy.p28) {
    var v411 = emblFile$$1.search(/^FT/m)
  }
  var v147 = v411 == -1;
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
    var v412 = basePerLine / groupSize;
    var v152 = j$$6 <= v412;
    for (;v152;) {
      var v151 = k < groupSize;
      for (;v151;) {
        var v149 = lineOfText;
        var v413 = k + i$$5;
        introspect(JAM.policy.p39) {
          var v150 = text$$10.charAt(v413)
        }
        lineOfText = v149 + v150;
        k = k + 1;
        v151 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v414 = basePerLine / groupSize;
      v152 = j$$6 <= v414;
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
    var v415 = adjustment < 0;
    if (v415) {
      v415 = adjusted >= 0;
    }
    var v156 = v415;
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
    var v416 = basePerLine$$2 / groupSize$$2;
    var v165 = j$$7 <= v416;
    for (;v165;) {
      var v160 = k$$1 < groupSize$$2;
      for (;v160;) {
        var v417 = i$$6 + k$$1;
        var v157 = v417 >= stopBase$$2;
        if (v157) {
          break;
        }
        var v158 = lineOfText$$1;
        var v418 = k$$1 + i$$6;
        introspect(JAM.policy.p39) {
          var v159 = text$$12.charAt(v418)
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
        var v419 = adjustNumbering(i$$6, numberingAdjustment);
        var v162 = rightNum(v419, "", groupSize$$2, tabIn$$3);
        aboveNum = v161 + v162;
      }
      var v164 = i$$6 >= stopBase$$2;
      if (v164) {
        break;
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v420 = basePerLine$$2 / groupSize$$2;
      v165 = j$$7 <= v420;
    }
    var v188 = numberPosition$$1 == "left";
    if (v188) {
      var v166 = outputWindow.document;
      var v590 = adjustNumbering(lineNum, numberingAdjustment);
      var v529 = rightNum(v590, "", 8, tabIn$$3);
      var v421 = v529 + lineOfText$$1;
      var v167 = v421 + "\n";
      introspect(JAM.policy.p39) {
        v166.write(v167);
      }
      var v171 = strands$$1 == "two";
      if (v171) {
        var v168 = outputWindow.document;
        var v591 = adjustNumbering(lineNum, numberingAdjustment);
        var v530 = rightNum(v591, "", 8, tabIn$$3);
        var v531 = complement(lineOfText$$1);
        var v422 = v530 + v531;
        var v169 = v422 + "\n";
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
        var v532 = lineOfText$$1;
        var v533 = adjustNumbering(i$$6, numberingAdjustment);
        var v423 = v532 + v533;
        var v173 = v423 + "\n";
        introspect(JAM.policy.p39) {
          v172.write(v173);
        }
        var v177 = strands$$1 == "two";
        if (v177) {
          var v174 = outputWindow.document;
          var v534 = complement(lineOfText$$1);
          var v535 = adjustNumbering(i$$6, numberingAdjustment);
          var v424 = v534 + v535;
          var v175 = v424 + "\n";
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
            var v425 = complement(lineOfText$$1);
            var v183 = v425 + "\n";
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
    var v426 = basePerLine$$3 / groupSize$$3;
    var v198 = j$$8 <= v426;
    for (;v198;) {
      var v193 = k$$2 < groupSize$$3;
      for (;v193;) {
        var v427 = i$$7 + k$$2;
        var v190 = v427 >= stopBase$$3;
        if (v190) {
          break;
        }
        var v191 = lineOfText$$2;
        var v428 = k$$2 + i$$7;
        introspect(JAM.policy.p39) {
          var v192 = text$$13.charAt(v428)
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
      var v429 = basePerLine$$3 / groupSize$$3;
      v198 = j$$8 <= v429;
    }
    var v209 = numberPosition$$2 == "left";
    if (v209) {
      var v199 = outputWindow.document;
      var v536 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v430 = v536 + lineOfText$$2;
      var v200 = v430 + "\n";
      introspect(JAM.policy.p39) {
        v199.write(v200);
      }
    } else {
      var v208 = numberPosition$$2 == "right";
      if (v208) {
        var v201 = outputWindow.document;
        var v431 = lineOfText$$2 + i$$7;
        var v202 = v431 + "\n";
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
  var v537 = v592 <= firstIndexToMutate;
  var v593 = !v537;
  if (v593) {
    v537 = lastIndexToMutate < 0;
  }
  var v432 = v537;
  var v538 = !v432;
  if (v538) {
    v432 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v211 = v432;
  if (v211) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v219 = i$$8 < numMut;
  for (;v219;) {
    maxNum = sequence$$13.length;
    var v433 = Math.random();
    var v212 = v433 * maxNum;
    introspect(JAM.policy.p28) {
      randNum = Math.floor(v212);
    }
    var v434 = randNum < firstIndexToMutate;
    var v539 = !v434;
    if (v539) {
      v434 = randNum > lastIndexToMutate;
    }
    var v213 = v434;
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
      var v435 = Math.random();
      var v436 = components$$1.length;
      var v214 = v435 * v436;
      introspect(JAM.policy.p28) {
        componentsIndex = Math.round(v214);
      }
      var v437 = components$$1.length;
      var v215 = componentsIndex == v437;
      if (v215) {
        componentsIndex = 0;
      }
      introspect(JAM.policy.p26) {
        var v438 = components$$1[componentsIndex]
      }
      var v216 = v438 != currentChar;
      if (v216) {
        needNewChar = false;
      }
    }
    introspect(JAM.policy.p23) {
      var v439 = sequence$$13.substring(0, randNum)
    }
    introspect(JAM.policy.p26) {
      var v440 = components$$1[componentsIndex]
    }
    var v217 = v439 + v440;
    var v441 = randNum + 1;
    var v442 = sequence$$13.length;
    introspect(JAM.policy.p40) {
      var v218 = sequence$$13.substring(v441, v442)
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
    var v443 = Math.random();
    var v444 = components$$2.length;
    var v222 = v443 * v444;
    introspect(JAM.policy.p28) {
      tempNum$$1 = Math.floor(v222);
    }
    introspect(JAM.policy.p26) {
      tempChar$$1 = components$$2[tempNum$$1];
    }
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v445 = sequence$$14.length;
    var v225 = v445 == 60;
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
    var v540 = v594 - lookAhead;
    var v541 = sequence$$15.length;
    introspect(JAM.policy.p40) {
      var v446 = sequence$$15.substring(v540, v541)
    }
    var v230 = v446 + sequence$$15;
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
  var v542 = v595 + '</td><td class="title">';
  var v447 = v542 + "Positions:";
  var v235 = v447 + "</td></tr>\n";
  introspect(JAM.policy.p39) {
    v234.write(v235);
  }
  var i$$9 = 0;
  var v448 = arrayOfItems.length;
  var v251 = i$$9 < v448;
  for (;v251;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAM.policy.p26) {
      var v449 = arrayOfItems[i$$9]
    }
    introspect(JAM.policy.p28) {
      var v236 = v449.match(/\/.+\//)
    }
    matchExp = v236 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    introspect(JAM.policy.p26) {
      var v596 = arrayOfItems[i$$9]
    }
    introspect(JAM.policy.p28) {
      var v543 = v596.match(/\)\D*\d+/)
    }
    var v450 = v543.toString();
    introspect(JAM.policy.p27) {
      var v237 = v450.replace(/\)\D*/, "")
    }
    cutDistance = parseFloat(v237);
    introspect(JAM.policy.p39) {
      var v243 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    for (;v243;) {
      var v238 = matchExp.lastIndex;
      matchPosition = v238 - cutDistance;
      var v451 = matchPosition >= lowerLimit;
      if (v451) {
        v451 = matchPosition < upperLimit;
      }
      var v241 = v451;
      if (v241) {
        timesFound = timesFound + 1;
        var v239 = tempString$$1 + ", ";
        var v452 = matchPosition - shiftValue;
        var v240 = v452 + 1;
        tempString$$1 = v239 + v240;
      }
      var v453 = matchExp.lastIndex;
      var v544 = RegExp.lastMatch;
      var v454 = v544.length;
      var v242 = v453 - v454;
      matchExp.lastIndex = v242 + 1;
      introspect(JAM.policy.p39) {
        v243 = matchArray$$1 = matchExp.exec(sequence$$15);
      }
    }
    introspect(JAM.policy.p28) {
      var v455 = tempString$$1.search(/\d/)
    }
    var v244 = v455 != -1;
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
    var v670 = '<tr><td class="' + backGroundClass;
    var v658 = v670 + '">';
    introspect(JAM.policy.p26) {
      var v690 = arrayOfItems[i$$9]
    }
    introspect(JAM.policy.p28) {
      var v681 = v690.match(/\([^\(]+\)/)
    }
    var v671 = v681.toString();
    introspect(JAM.policy.p27) {
      var v659 = v671.replace(/\(|\)/g, "")
    }
    var v646 = v658 + v659;
    var v629 = v646 + '</td><td class="';
    var v597 = v629 + backGroundClass;
    var v545 = v597 + '">';
    var v456 = v545 + tempString$$1;
    var v250 = v456 + "</td></tr>\n";
    introspect(JAM.policy.p39) {
      v249.write(v250);
    }
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v457 = arrayOfItems.length;
    v251 = i$$9 < v457;
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
  var v647 = '<tr><td class="title">' + "Pattern:";
  var v630 = v647 + '</td><td class="title">';
  var v598 = v630 + "Times found:";
  var v546 = v598 + '</td><td class="title">';
  var v458 = v546 + "Percentage:";
  var v255 = v458 + "</td></tr>\n";
  introspect(JAM.policy.p39) {
    v254.write(v255);
  }
  var i$$10 = 0;
  var v459 = arrayOfItems$$1.length;
  var v264 = i$$10 < v459;
  for (;v264;) {
    var tempNumber = 0;
    introspect(JAM.policy.p26) {
      var v460 = arrayOfItems$$1[i$$10]
    }
    introspect(JAM.policy.p28) {
      var v256 = v460.match(/\/[^\/]+\//)
    }
    var matchExp$$1 = v256 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    introspect(JAM.policy.p39) {
      var v461 = sequence$$16.search(matchExp$$1)
    }
    var v258 = v461 != -1;
    if (v258) {
      introspect(JAM.policy.p39) {
        var v257 = sequence$$16.match(matchExp$$1)
      }
      tempNumber = v257.length;
    }
    var percentage = 0;
    var v547 = originalLength + 1;
    introspect(JAM.policy.p26) {
      var v631 = arrayOfItems$$1[i$$10]
    }
    introspect(JAM.policy.p28) {
      var v599 = v631.match(/\d+/)
    }
    var v548 = parseFloat(v599);
    var v462 = v547 - v548;
    var v261 = v462 > 0;
    if (v261) {
      var v259 = 100 * tempNumber;
      var v463 = originalLength + 1;
      introspect(JAM.policy.p26) {
        var v600 = arrayOfItems$$1[i$$10]
      }
      introspect(JAM.policy.p28) {
        var v549 = v600.match(/\d+/)
      }
      var v464 = parseFloat(v549);
      var v260 = v463 - v464;
      percentage = v259 / v260;
    }
    var v262 = outputWindow.document;
    introspect(JAM.policy.p26) {
      var v691 = arrayOfItems$$1[i$$10]
    }
    introspect(JAM.policy.p28) {
      var v682 = v691.match(/\([^\(]+\)\b/)
    }
    var v672 = v682.toString();
    introspect(JAM.policy.p27) {
      var v660 = v672.replace(/\(|\)/g, "")
    }
    var v648 = "<tr><td>" + v660;
    var v632 = v648 + "</td><td>";
    var v601 = v632 + tempNumber;
    var v550 = v601 + "</td><td>";
    introspect(JAM.policy.p22) {
      var v551 = percentage.toFixed(2)
    }
    var v465 = v550 + v551;
    var v263 = v465 + "</td></tr>\n";
    introspect(JAM.policy.p39) {
      v262.write(v263);
    }
    i$$10 = i$$10 + 1;
    var v466 = arrayOfItems$$1.length;
    v264 = i$$10 < v466;
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
  var v467 = sequence$$17.length;
  var v272 = v467 > 0;
  for (;v272;) {
    maxNum$$1 = sequence$$17.length;
    var v468 = Math.random();
    var v266 = v468 * maxNum$$1;
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
    var v469 = tempSeq.length;
    var v271 = v469 == 60;
    if (v271) {
      var v269 = outputWindow.document;
      var v270 = tempSeq + "\n";
      introspect(JAM.policy.p39) {
        v269.write(v270);
      }
      tempSeq = "";
    }
    var v470 = sequence$$17.length;
    v272 = v470 > 0;
  }
  var v273 = outputWindow.document;
  var v274 = tempSeq + "\n";
  introspect(JAM.policy.p39) {
    v273.write(v274);
  }
  return true;
}
function proteinGravy(theDocument) {
  JAM.startProfile('compute');

  var newProtein = "";
  var title$$9 = "";
  var maxInput$$3 = 5E5;
  var v471 = testScript();
  var v275 = v471 == false;
  if (v275) {
    return false;
  }
  var v661 = theDocument.forms;
  var v649 = v661[0];
  var v633 = v649.elements;
  var v602 = v633[0];
  var v552 = checkFormElement(v602);
  var v472 = v552 == false;
  var v554 = !v472;
  if (v554) {
    var v673 = theDocument.forms;
    var v662 = v673[0];
    var v650 = v662.elements;
    var v634 = v650[0];
    var v603 = v634.value;
    var v553 = checkSequenceLength(v603, maxInput$$3);
    v472 = v553 == false;
  }
  var v276 = v472;
  if (v276) {
    return false;
  }
  openWindow("Protein GRAVY");
  var v635 = theDocument.forms;
  var v604 = v635[0];
  var v555 = v604.elements;
  var v473 = v555[0];
  var v277 = v473.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v277);
  var i$$11 = 0;
  var v474 = arrayOfFasta$$1.length;
  var v285 = i$$11 < v474;
  for (;v285;) {
    introspect(JAM.policy.p26) {
      var v278 = arrayOfFasta$$1[i$$11]
    }
    newProtein = getSequenceFromFasta(v278);
    introspect(JAM.policy.p26) {
      var v279 = arrayOfFasta$$1[i$$11]
    }
    title$$9 = getTitleFromFasta(v279);
    newProtein = removeNonProtein(newProtein);
    var v280 = outputWindow.document;
    var v281 = getInfoFromTitleAndSequence(title$$9, newProtein);
    introspect(JAM.policy.p39) {
      v280.write(v281);
    }
    var v282 = outputWindow.document;
    var v283 = getProteinGravy(newProtein);
    introspect(JAM.policy.p39) {
      v282.write(v283);
    }
    var v284 = outputWindow.document;
    introspect(JAM.policy.p24) {
      v284.write("<br />\n<br />\n");
    }
    i$$11 = i$$11 + 1;
    var v475 = arrayOfFasta$$1.length;
    v285 = i$$11 < v475;
  }
  closeWindow();

  JAM.stopProfile('compute');
  return true;
}
function getProteinGravy(sequence$$18) {
  sequence$$18 = sequence$$18.toLowerCase();
  var gravyResult = 0;
  var gravyValues = _getGravyHash();
  var i$$12 = 0;
  var v476 = sequence$$18.length;
  var v288 = i$$12 < v476;
  for (;v288;) {
    var v286 = gravyResult;
    var v477 = gravyValues;
    introspect(JAM.policy.p39) {
      var v478 = sequence$$18.charAt(i$$12)
    }
    introspect(JAM.policy.p26) {
      var v287 = v477[v478]
    }
    gravyResult = v286 + v287;
    i$$12 = i$$12 + 1;
    var v479 = sequence$$18.length;
    v288 = i$$12 < v479;
  }
  var v480 = sequence$$18.length;
  var v290 = v480 > 0;
  if (v290) {
    var v289 = sequence$$18.length;
    gravyResult = gravyResult / v289;
  } else {
    return "The sequence is too short";
  }
  introspect(JAM.policy.p22) {
    return gravyResult.toFixed(3);
  }
}
function _getGravyHash() {
  var hash = {};
  hash["a"] = 1.8;
  hash["r"] = -4.5;
  hash["n"] = -3.5;
  hash["d"] = -3.5;
  hash["c"] = 2.5;
  hash["q"] = -3.5;
  hash["e"] = -3.5;
  hash["g"] = -.4;
  hash["h"] = -3.2;
  hash["i"] = 4.5;
  hash["l"] = 3.8;
  hash["k"] = -3.9;
  hash["m"] = 1.9;
  hash["f"] = 2.8;
  hash["p"] = -1.6;
  hash["s"] = -.8;
  hash["t"] = -.7;
  hash["w"] = -.9;
  hash["y"] = -1.3;
  hash["v"] = 4.2;
  return hash;
}
document.onload = v2;
introspect(JAM.policy.p24) {
  var v291 = document.getElementById("submitbtn")
}
v291.onclick = v3;
introspect(JAM.policy.p24) {
  var v292 = document.getElementById("clearbtn")
}
v292.onclick = v4

JAM.stopProfile('load');
