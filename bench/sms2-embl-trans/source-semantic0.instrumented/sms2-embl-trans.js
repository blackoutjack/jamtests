function v4() {
  var v563 = document.forms;
  var v485 = v563[0];
  var v294 = v485.elements;
  var v5 = v294[0];
  v5.value = " ";
  return;
}
function v3() {
  try {
    emblTrans(document);
  } catch (e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    alert(v6);
  }
  return;
}
function v2() {
  var v295 = document.main_form;
  var v7 = v295.main_submit;
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
  var v296 = arrayOfSequences.length;
  var v9 = v296 < 2;
  if (v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v297 = arrayOfTitles.length;
  var v11 = i$$1 < v297;
  for (;v11;) {
    var v613 = arrayOfTitles[i$$1];
    introspect(JAM.policy.p16) {
      var v564 = v613.search(/\S/)
    }
    var v486 = v564 == -1;
    var v566 = !v486;
    if (v566) {
      var v614 = arrayOfSequences[i$$1];
      introspect(JAM.policy.p16) {
        var v565 = v614.search(/\S/)
      }
      v486 = v565 == -1;
    }
    var v298 = v486;
    var v488 = !v298;
    if (v488) {
      var v567 = arrayOfSequences[i$$1];
      var v487 = v567.length;
      v298 = v487 != lengthOfAlign;
    }
    var v10 = v298;
    if (v10) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v299 = arrayOfTitles.length;
    v11 = i$$1 < v299;
  }
  return true;
}
function checkCodonTable(codonTable) {
  introspect(JAM.policy.p16) {
    var v645 = codonTable.search(/AmAcid/)
  }
  var v615 = v645 == -1;
  var v647 = !v615;
  if (v647) {
    introspect(JAM.policy.p16) {
      var v646 = codonTable.search(/Codon/)
    }
    v615 = v646 == -1;
  }
  var v568 = v615;
  var v617 = !v568;
  if (v617) {
    introspect(JAM.policy.p16) {
      var v616 = codonTable.search(/Number/)
    }
    v568 = v616 == -1;
  }
  var v489 = v568;
  var v570 = !v489;
  if (v570) {
    introspect(JAM.policy.p16) {
      var v569 = codonTable.search(/\/1000/)
    }
    v489 = v569 == -1;
  }
  var v300 = v489;
  var v491 = !v300;
  if (v491) {
    introspect(JAM.policy.p16) {
      var v490 = codonTable.search(/Fraction\s*\.\./)
    }
    v300 = v490 == -1;
  }
  var v12 = v300;
  if (v12) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v492 = formElement.value;
  introspect(JAM.policy.p16) {
    var v301 = v492.search(/\S/)
  }
  var v13 = v301 == -1;
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
  var v302 = arrayOfPatterns.length;
  var v16 = z$$2 < v302;
  for (;v16;) {
    var v493 = arrayOfPatterns[z$$2];
    introspect(JAM.policy.p16) {
      var v303 = v493.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/)
    }
    var v14 = v303 == -1;
    if (v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v494 = arrayOfPatterns[z$$2];
    var v304 = moreExpressionCheck(v494);
    var v15 = v304 == false;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v305 = arrayOfPatterns.length;
    v16 = z$$2 < v305;
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v306 = arrayOfPatterns.length;
  var v22 = j < v306;
  for (;v22;) {
    var v495 = arrayOfPatterns[j];
    introspect(JAM.policy.p16) {
      var v307 = v495.match(/\/.+\//)
    }
    var v19 = v307 + "gi";
    var v735 = eval(v19);
    geneticCodeMatchExp[j] = v735;
    var v308 = arrayOfPatterns[j];
    introspect(JAM.policy.p16) {
      var v20 = v308.match(/=[a-zA-Z\*]/)
    }
    var v736 = v20.toString();
    geneticCodeMatchResult[j] = v736;
    var v21 = geneticCodeMatchResult[j];
    introspect(JAM.policy.p15) {
      var v737 = v21.replace(/=/g, "")
    }
    geneticCodeMatchResult[j] = v737;
    j++;
    var v309 = arrayOfPatterns.length;
    v22 = j < v309;
  }
  var i$$2 = 0;
  var v496 = testSequence.length;
  var v310 = v496 - 3;
  var v29 = i$$2 <= v310;
  for (;v29;) {
    var v23 = i$$2 + 3;
    introspect(JAM.policy.p15) {
      codon = testSequence.substring(i$$2, v23);
    }
    j = 0;
    var v311 = geneticCodeMatchExp.length;
    var v27 = j < v311;
    for (;v27;) {
      var v497 = geneticCodeMatchExp[j];
      introspect(JAM.policy.p17) {
        var v312 = codon.search(v497)
      }
      var v26 = v312 != -1;
      if (v26) {
        var v25 = oneMatch == true;
        if (v25) {
          var v313 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v24 = v313 + ".";
          alert(v24);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v314 = geneticCodeMatchExp.length;
      v27 = j < v314;
    }
    var v28 = oneMatch == false;
    if (v28) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v498 = testSequence.length;
    var v315 = v498 - 3;
    v29 = i$$2 <= v315;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v316 = arrayOfPatterns$$1.length;
  var v31 = z$$3 < v316;
  for (;v31;) {
    var v499 = arrayOfPatterns$$1[z$$3];
    introspect(JAM.policy.p16) {
      var v317 = v499.search(/[^acdefghiklmnpqrstvwyz]/i)
    }
    var v30 = v317 != -1;
    if (v30) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v318 = arrayOfPatterns$$1.length;
    v31 = z$$3 < v318;
  }
  var i$$3 = 0;
  var v319 = arrayOfPatterns$$1.length;
  var v35 = i$$3 < v319;
  for (;v35;) {
    var v500 = arrayOfPatterns$$1[i$$3];
    var v320 = "[" + v500;
    var v32 = v320 + "]";
    var re = new RegExp(v32, "gi");
    var j$$1 = i$$3 + 1;
    var v321 = arrayOfPatterns$$1.length;
    var v34 = j$$1 < v321;
    for (;v34;) {
      var v501 = arrayOfPatterns$$1[j$$1];
      introspect(JAM.policy.p17) {
        var v322 = v501.search(re)
      }
      var v33 = v322 != -1;
      if (v33) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v323 = arrayOfPatterns$$1.length;
      v34 = j$$1 < v323;
    }
    i$$3++;
    var v324 = arrayOfPatterns$$1.length;
    v35 = i$$3 < v324;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v325 = arrayOfPatterns$$2.length;
  var v38 = z$$4 < v325;
  for (;v38;) {
    var v502 = arrayOfPatterns$$2[z$$4];
    introspect(JAM.policy.p16) {
      var v326 = v502.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i)
    }
    var v36 = v326 == -1;
    if (v36) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v503 = arrayOfPatterns$$2[z$$4];
    var v327 = moreExpressionCheck(v503);
    var v37 = v327 == false;
    if (v37) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v328 = arrayOfPatterns$$2.length;
    v38 = z$$4 < v328;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v571 = getSequenceFromFasta(text$$7);
  introspect(JAM.policy.p15) {
    var v504 = v571.replace(/[^A-Za-z]/g, "")
  }
  var v329 = v504.length;
  var v40 = v329 > maxInput;
  if (v40) {
    var v330 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v39 = v330 + " characters.";
    alert(v39);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v331 = text$$8.length;
  var v42 = v331 > maxInput$$1;
  if (v42) {
    var v332 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v41 = v332 + " characters.";
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
  introspect(JAM.policy.p11) {
    v43.write("</form>");
  }
  return true;
}
function closePre() {
  var v44 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v44.write("</div>");
  }
  var v45 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v45.write("</pre>\n");
  }
  return;
}
function closeTextArea() {
  var v46 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v46.write("</textarea>");
  }
  return true;
}
function closeWindow() {
  var v47 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v47.write("</body>\n</html>\n");
  }
  outputWindow.status = "Done.";
  var v48 = outputWindow.document;
  v48.close();
  return true;
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
  var v333 = alignArray.length;
  var v49 = v333 < 3;
  if (v49) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v334 = alignArray.length;
  var v51 = i$$4 < v334;
  for (;v51;) {
    var v505 = alignArray[i$$4];
    introspect(JAM.policy.p16) {
      var v335 = v505.search(/[^\s]+\s/)
    }
    var v50 = v335 == -1;
    if (v50) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v336 = alignArray.length;
    v51 = i$$4 < v336;
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
    var v337 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v54 = v337 != -1;
  if (v54) {
    introspect(JAM.policy.p17) {
      var v53 = matchArray = re$$1.exec(sequenceData)
    }
    for (;v53;) {
      var v52 = matchArray[0];
      introspect(JAM.policy.p17) {
        arrayOfFasta.push(v52);
      }
      introspect(JAM.policy.p17) {
        v53 = matchArray = re$$1.exec(sequenceData);
      }
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v338 = sequence$$2.length;
  var v55 = "&gt;results for " + v338;
  var stringToReturn = v55 + " residue sequence ";
  introspect(JAM.policy.p16) {
    var v339 = fastaSequenceTitle.search(/[^\s]/)
  }
  var v57 = v339 != -1;
  if (v57) {
    var v340 = stringToReturn + '"';
    var v56 = v340 + fastaSequenceTitle;
    stringToReturn = v56 + '"';
  }
  var v341 = stringToReturn + ' starting "';
  introspect(JAM.policy.p13) {
    var v342 = sequence$$2.substring(0, 10)
  }
  var v58 = v341 + v342;
  stringToReturn = v58 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v343 = sequenceOne.length;
  var v59 = "Search results for " + v343;
  var stringToReturn$$1 = v59 + " residue sequence ";
  introspect(JAM.policy.p16) {
    var v344 = fastaSequenceTitleOne.search(/[^\s]/)
  }
  var v61 = v344 != -1;
  if (v61) {
    var v345 = stringToReturn$$1 + '"';
    var v60 = v345 + fastaSequenceTitleOne;
    stringToReturn$$1 = v60 + '"';
  }
  var v346 = stringToReturn$$1 + ' starting "';
  introspect(JAM.policy.p13) {
    var v347 = sequenceOne.substring(0, 10)
  }
  var v62 = v346 + v347;
  stringToReturn$$1 = v62 + '"\n';
  var v348 = stringToReturn$$1 + "and ";
  var v349 = sequenceTwo.length;
  var v63 = v348 + v349;
  stringToReturn$$1 = v63 + " residue sequence ";
  introspect(JAM.policy.p16) {
    var v350 = fastaSequenceTitleTwo.search(/[^\s]/)
  }
  var v65 = v350 != -1;
  if (v65) {
    var v351 = stringToReturn$$1 + '"';
    var v64 = v351 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v64 + '"';
  }
  var v352 = stringToReturn$$1 + ' starting "';
  introspect(JAM.policy.p13) {
    var v353 = sequenceTwo.substring(0, 10)
  }
  var v66 = v352 + v353;
  stringToReturn$$1 = v66 + '"';
  var v67 = '<div class="info">' + stringToReturn$$1;
  return v67 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v68 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v68);
  var j$$2 = 0;
  var v354 = arrayOfPatterns$$3.length;
  var v70 = j$$2 < v354;
  for (;v70;) {
    var v506 = arrayOfPatterns$$3[j$$2];
    introspect(JAM.policy.p16) {
      var v355 = v506.match(/\/.+\//)
    }
    var v69 = v355 + "gi";
    var v738 = eval(v69);
    geneticCodeMatchExp$$1[j$$2] = v738;
    j$$2++;
    var v356 = arrayOfPatterns$$3.length;
    v70 = j$$2 < v356;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v71 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v71);
  var j$$3 = 0;
  var v357 = arrayOfPatterns$$4.length;
  var v74 = j$$3 < v357;
  for (;v74;) {
    var v358 = arrayOfPatterns$$4[j$$3];
    introspect(JAM.policy.p16) {
      var v72 = v358.match(/=[a-zA-Z\*]/)
    }
    var v739 = v72.toString();
    geneticCodeMatchResult$$1[j$$3] = v739;
    var v73 = geneticCodeMatchResult$$1[j$$3];
    introspect(JAM.policy.p15) {
      var v740 = v73.replace(/=/g, "")
    }
    geneticCodeMatchResult$$1[j$$3] = v740;
    j$$3++;
    var v359 = arrayOfPatterns$$4.length;
    v74 = j$$3 < v359;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v360 = sequence$$3.length;
  var v75 = "Results for " + v360;
  var stringToReturn$$2 = v75 + " residue sequence ";
  introspect(JAM.policy.p16) {
    var v361 = fastaSequenceTitle$$1.search(/[^\s]/)
  }
  var v77 = v361 != -1;
  if (v77) {
    var v362 = stringToReturn$$2 + '"';
    var v76 = v362 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v76 + '"';
  }
  var v363 = stringToReturn$$2 + ' starting "';
  introspect(JAM.policy.p13) {
    var v364 = sequence$$3.substring(0, 10)
  }
  var v78 = v363 + v364;
  stringToReturn$$2 = v78 + '"';
  var v79 = '<div class="info">' + stringToReturn$$2;
  return v79 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v507 = "Results for " + topology;
  var v365 = v507 + " ";
  var v366 = sequence$$4.length;
  var v80 = v365 + v366;
  var stringToReturn$$3 = v80 + " residue sequence ";
  introspect(JAM.policy.p16) {
    var v367 = fastaSequenceTitle$$2.search(/[^\s]/)
  }
  var v82 = v367 != -1;
  if (v82) {
    var v368 = stringToReturn$$3 + '"';
    var v81 = v368 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v81 + '"';
  }
  var v369 = stringToReturn$$3 + ' starting "';
  introspect(JAM.policy.p13) {
    var v370 = sequence$$4.substring(0, 10)
  }
  var v83 = v369 + v370;
  stringToReturn$$3 = v83 + '"';
  var v84 = '<div class="info">' + stringToReturn$$3;
  return v84 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v371 = sequenceOne$$1.length;
  var v85 = "Alignment results for " + v371;
  var stringToReturn$$4 = v85 + " residue sequence ";
  introspect(JAM.policy.p16) {
    var v372 = fastaSequenceTitleOne$$1.search(/[^\s]/)
  }
  var v87 = v372 != -1;
  if (v87) {
    var v373 = stringToReturn$$4 + '"';
    var v86 = v373 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v86 + '"';
  }
  var v374 = stringToReturn$$4 + ' starting "';
  introspect(JAM.policy.p13) {
    var v375 = sequenceOne$$1.substring(0, 10)
  }
  var v88 = v374 + v375;
  stringToReturn$$4 = v88 + '"\n';
  var v376 = stringToReturn$$4 + "and ";
  var v377 = sequenceTwo$$1.length;
  var v89 = v376 + v377;
  stringToReturn$$4 = v89 + " residue sequence ";
  introspect(JAM.policy.p16) {
    var v378 = fastaSequenceTitleTwo$$1.search(/[^\s]/)
  }
  var v91 = v378 != -1;
  if (v91) {
    var v379 = stringToReturn$$4 + '"';
    var v90 = v379 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v90 + '"';
  }
  var v380 = stringToReturn$$4 + ' starting "';
  introspect(JAM.policy.p13) {
    var v381 = sequenceTwo$$1.substring(0, 10)
  }
  var v92 = v380 + v381;
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
    var v382 = Math.random();
    var v383 = components.length;
    var v94 = v382 * v383;
    introspect(JAM.policy.p16) {
      tempNum = Math.floor(v94);
    }
    tempChar = components[tempNum];
    introspect(JAM.policy.p17) {
      sequenceArray.push(tempChar);
    }
    j$$4++;
    v95 = j$$4 < lengthOut;
  }
  introspect(JAM.policy.p11) {
    return sequenceArray.join("");
  }
}
function getSequenceFromFasta(sequenceRecord) {
  introspect(JAM.policy.p16) {
    var v384 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v96 = v384 != -1;
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
    var v385 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v98 = v385 != -1;
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
    var v713 = expressionToCheck.search(/\[[A-Za-z\|]*\[/)
  }
  var v706 = v713 != -1;
  var v715 = !v706;
  if (v715) {
    introspect(JAM.policy.p16) {
      var v714 = expressionToCheck.search(/\][A-Za-z\|]*\]/)
    }
    v706 = v714 != -1;
  }
  var v697 = v706;
  var v708 = !v697;
  if (v708) {
    introspect(JAM.policy.p16) {
      var v707 = expressionToCheck.search(/\[\]/)
    }
    v697 = v707 != -1;
  }
  var v687 = v697;
  var v699 = !v687;
  if (v699) {
    introspect(JAM.policy.p16) {
      var v698 = expressionToCheck.search(/\/[A-Za-z\|]*\]/)
    }
    v687 = v698 != -1;
  }
  var v674 = v687;
  var v689 = !v674;
  if (v689) {
    introspect(JAM.policy.p16) {
      var v688 = expressionToCheck.search(/\[[A-Za-z\|]*\//)
    }
    v674 = v688 != -1;
  }
  var v661 = v674;
  var v676 = !v661;
  if (v676) {
    introspect(JAM.policy.p16) {
      var v675 = expressionToCheck.search(/\|\|/)
    }
    v661 = v675 != -1;
  }
  var v648 = v661;
  var v663 = !v648;
  if (v663) {
    introspect(JAM.policy.p16) {
      var v662 = expressionToCheck.search(/\/\|/)
    }
    v648 = v662 != -1;
  }
  var v618 = v648;
  var v650 = !v618;
  if (v650) {
    introspect(JAM.policy.p16) {
      var v649 = expressionToCheck.search(/\|\//)
    }
    v618 = v649 != -1;
  }
  var v572 = v618;
  var v620 = !v572;
  if (v620) {
    introspect(JAM.policy.p16) {
      var v619 = expressionToCheck.search(/\[.\]/)
    }
    v572 = v619 != -1;
  }
  var v508 = v572;
  var v574 = !v508;
  if (v574) {
    introspect(JAM.policy.p16) {
      var v573 = expressionToCheck.search(/\</)
    }
    v508 = v573 != -1;
  }
  var v386 = v508;
  var v510 = !v386;
  if (v510) {
    introspect(JAM.policy.p16) {
      var v509 = expressionToCheck.search(/\>/)
    }
    v386 = v509 != -1;
  }
  var v99 = v386;
  if (v99) {
    return false;
  }
  return true;
}
function openForm() {
  var v100 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v100.write('<form action="">\n');
  }
  return true;
}
function openPre() {
  var v101 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v101.write("<pre>");
  }
  var v102 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v102.write('<div class="pre">');
  }
  return;
}
function openTextArea() {
  var v103 = outputWindow.document;
  introspect(JAM.policy.p11) {
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
  var v575 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v511 = v575 + "<head>\n";
  var v387 = v511 + "<title>Sequence Manipulation Suite</title>\n";
  var v105 = v387 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  introspect(JAM.policy.p17) {
    v104.write(v105);
  }
  if (isColor) {
    var v106 = outputWindow.document;
    var v728 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v724 = v728 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v720 = v724 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v716 = v720 + "div.info {font-weight: bold}\n";
    var v709 = v716 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v700 = v709 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v690 = v700 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v677 = v690 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v664 = v677 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v651 = v664 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v621 = v651 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v576 = v621 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v512 = v576 + "td.many {color: #000000}\n";
    var v388 = v512 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v107 = v388 + "</style>\n";
    introspect(JAM.policy.p17) {
      v106.write(v107);
    }
  } else {
    var v108 = outputWindow.document;
    var v732 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v729 = v732 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v725 = v729 + "div.title {display: none}\n";
    var v721 = v725 + "div.info {font-weight: bold}\n";
    var v717 = v721 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v710 = v717 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v701 = v710 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v691 = v701 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v678 = v691 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v665 = v678 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v652 = v665 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v622 = v652 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v577 = v622 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v513 = v577 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v389 = v513 + "img {display: none}\n";
    var v109 = v389 + "</style>\n";
    introspect(JAM.policy.p17) {
      v108.write(v109);
    }
  }
  var v110 = outputWindow.document;
  var v578 = "</head>\n" + '<body class="main">\n';
  var v514 = v578 + '<div class="title">';
  var v390 = v514 + title$$6;
  var v111 = v390 + " results</div>\n";
  introspect(JAM.policy.p17) {
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
  var v579 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v515 = v579 + "<head>\n";
  var v391 = v515 + "<title>Sequence Manipulation Suite</title>\n";
  var v113 = v391 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  introspect(JAM.policy.p17) {
    v112.write(v113);
  }
  if (isBackground) {
    var v114 = outputWindow.document;
    var v730 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v726 = v730 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v722 = v726 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v718 = v722 + "div.info {font-weight: bold}\n";
    var v711 = v718 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v702 = v711 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v692 = v702 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v679 = v692 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v666 = v679 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v653 = v666 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v623 = v653 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v580 = v623 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v516 = v580 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v392 = v516 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v115 = v392 + "</style>\n";
    introspect(JAM.policy.p17) {
      v114.write(v115);
    }
  } else {
    var v116 = outputWindow.document;
    var v734 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v733 = v734 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v731 = v733 + "div.title {display: none}\n";
    var v727 = v731 + "div.info {font-weight: bold}\n";
    var v723 = v727 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v719 = v723 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v712 = v719 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v703 = v712 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v693 = v703 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v680 = v693 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v667 = v680 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v654 = v667 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v624 = v654 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v581 = v624 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v517 = v581 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v393 = v517 + "img {display: none}\n";
    var v117 = v393 + "</style>\n";
    introspect(JAM.policy.p17) {
      v116.write(v117);
    }
  }
  var v118 = outputWindow.document;
  var v582 = "</head>\n" + '<body class="main">\n';
  var v518 = v582 + '<div class="title">';
  var v394 = v518 + title$$8;
  var v119 = v394 + " results</div>\n";
  introspect(JAM.policy.p17) {
    v118.write(v119);
  }
  outputWindow.status = "Please Wait.";
  return true;
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
    var v395 = dnaSequence$$1.search(/./)
  }
  var v120 = v395 != -1;
  if (v120) {
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
  introspect(JAM.policy.p17) {
    testArray.push(testString);
  }
  var v396 = testArray[0];
  var v124 = v396 != testString;
  if (v124) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  introspect(JAM.policy.p17) {
    var v397 = testString.search(re$$2)
  }
  var v125 = v397 == -1;
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
  introspect(JAM.policy.p10) {
    var v398 = testNum.toFixed(3)
  }
  var v128 = v398 != 2489.824;
  if (v128) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  introspect(JAM.policy.p10) {
    var v399 = testNum.toPrecision(5)
  }
  var v129 = v399 != 2489.8;
  if (v129) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  introspect(JAM.policy.p16) {
    var v400 = theNumber$$1.search(/\d/)
  }
  var v130 = v400 == -1;
  if (v130) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  introspect(JAM.policy.p16) {
    var v625 = emblFile.search(/ID/)
  }
  var v583 = v625 == -1;
  var v627 = !v583;
  if (v627) {
    introspect(JAM.policy.p16) {
      var v626 = emblFile.search(/AC/)
    }
    v583 = v626 == -1;
  }
  var v519 = v583;
  var v585 = !v519;
  if (v585) {
    introspect(JAM.policy.p16) {
      var v584 = emblFile.search(/DE/)
    }
    v519 = v584 == -1;
  }
  var v401 = v519;
  var v521 = !v401;
  if (v521) {
    introspect(JAM.policy.p16) {
      var v520 = emblFile.search(/SQ/)
    }
    v401 = v520 == -1;
  }
  var v131 = v401;
  if (v131) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  introspect(JAM.policy.p16) {
    var v402 = theNumber$$2.search(/\d/)
  }
  var v132 = v402 == -1;
  if (v132) {
    alert("Please enter a number.");
    return false;
  }
  var v134 = theNumber$$2 > maxInput$$2;
  if (v134) {
    var v403 = "Please enter a number less than or equal to " + maxInput$$2;
    var v133 = v403 + ".";
    alert(v133);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  introspect(JAM.policy.p16) {
    var v404 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i)
  }
  var v135 = v404 != -1;
  if (v135) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  introspect(JAM.policy.p16) {
    var v405 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i)
  }
  var v136 = v405 != -1;
  if (v136) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  introspect(JAM.policy.p16) {
    var v628 = genBankFile.search(/LOCUS/)
  }
  var v586 = v628 == -1;
  var v630 = !v586;
  if (v630) {
    introspect(JAM.policy.p16) {
      var v629 = genBankFile.search(/DEFINITION/)
    }
    v586 = v629 == -1;
  }
  var v522 = v586;
  var v588 = !v522;
  if (v588) {
    introspect(JAM.policy.p16) {
      var v587 = genBankFile.search(/ACCESSION/)
    }
    v522 = v587 == -1;
  }
  var v406 = v522;
  var v524 = !v406;
  if (v524) {
    introspect(JAM.policy.p16) {
      var v523 = genBankFile.search(/ORIGIN/)
    }
    v406 = v523 == -1;
  }
  var v137 = v406;
  if (v137) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  introspect(JAM.policy.p16) {
    var v631 = genBankFile$$1.search(/LOCUS/)
  }
  var v589 = v631 == -1;
  var v633 = !v589;
  if (v633) {
    introspect(JAM.policy.p16) {
      var v632 = genBankFile$$1.search(/DEFINITION/)
    }
    v589 = v632 == -1;
  }
  var v525 = v589;
  var v591 = !v525;
  if (v591) {
    introspect(JAM.policy.p16) {
      var v590 = genBankFile$$1.search(/ACCESSION/)
    }
    v525 = v590 == -1;
  }
  var v407 = v525;
  var v527 = !v407;
  if (v527) {
    introspect(JAM.policy.p16) {
      var v526 = genBankFile$$1.search(/ORIGIN/)
    }
    v407 = v526 == -1;
  }
  var v138 = v407;
  if (v138) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  introspect(JAM.policy.p16) {
    var v408 = genBankFile$$1.search(/FEATURES {13}/)
  }
  var v139 = v408 == -1;
  if (v139) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  introspect(JAM.policy.p16) {
    var v634 = emblFile$$1.search(/ID/)
  }
  var v592 = v634 == -1;
  var v636 = !v592;
  if (v636) {
    introspect(JAM.policy.p16) {
      var v635 = emblFile$$1.search(/AC/)
    }
    v592 = v635 == -1;
  }
  var v528 = v592;
  var v594 = !v528;
  if (v594) {
    introspect(JAM.policy.p16) {
      var v593 = emblFile$$1.search(/DE/)
    }
    v528 = v593 == -1;
  }
  var v409 = v528;
  var v530 = !v409;
  if (v530) {
    introspect(JAM.policy.p16) {
      var v529 = emblFile$$1.search(/SQ/)
    }
    v409 = v529 == -1;
  }
  var v140 = v409;
  if (v140) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  introspect(JAM.policy.p16) {
    var v410 = emblFile$$1.search(/^FT/m)
  }
  var v141 = v410 == -1;
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
    var v411 = basePerLine / groupSize;
    var v145 = j$$6 <= v411;
    for (;v145;) {
      var v144 = k < groupSize;
      for (;v144;) {
        var v412 = k + i$$5;
        introspect(JAM.policy.p17) {
          var v143 = text$$10.charAt(v412)
        }
        lineOfText = lineOfText + v143;
        k = k + 1;
        v144 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v413 = basePerLine / groupSize;
      v145 = j$$6 <= v413;
    }
    var v146 = outputWindow.document;
    var v147 = lineOfText + "\n";
    introspect(JAM.policy.p17) {
      v146.write(v147);
    }
    lineOfText = "";
    v148 = i$$5 < stopBase;
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
    var v414 = adjustment < 0;
    if (v414) {
      v414 = adjusted >= 0;
    }
    var v149 = v414;
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
    var v415 = basePerLine$$2 / groupSize$$2;
    var v158 = j$$7 <= v415;
    for (;v158;) {
      var v153 = k$$1 < groupSize$$2;
      for (;v153;) {
        var v416 = i$$6 + k$$1;
        var v150 = v416 >= stopBase$$2;
        if (v150) {
          break;
        }
        var v151 = lineOfText$$1;
        var v417 = k$$1 + i$$6;
        introspect(JAM.policy.p17) {
          var v152 = text$$12.charAt(v417)
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
        var v418 = adjustNumbering(i$$6, numberingAdjustment);
        var v155 = rightNum(v418, "", groupSize$$2, tabIn$$3);
        aboveNum = v154 + v155;
      }
      var v157 = i$$6 >= stopBase$$2;
      if (v157) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v419 = basePerLine$$2 / groupSize$$2;
      v158 = j$$7 <= v419;
    }
    var v181 = numberPosition$$1 == "left";
    if (v181) {
      var v159 = outputWindow.document;
      var v595 = adjustNumbering(lineNum, numberingAdjustment);
      var v531 = rightNum(v595, "", 8, tabIn$$3);
      var v420 = v531 + lineOfText$$1;
      var v160 = v420 + "\n";
      introspect(JAM.policy.p17) {
        v159.write(v160);
      }
      var v164 = strands$$1 == "two";
      if (v164) {
        var v161 = outputWindow.document;
        var v596 = adjustNumbering(lineNum, numberingAdjustment);
        var v532 = rightNum(v596, "", 8, tabIn$$3);
        var v533 = complement(lineOfText$$1);
        var v421 = v532 + v533;
        var v162 = v421 + "\n";
        introspect(JAM.policy.p17) {
          v161.write(v162);
        }
        var v163 = outputWindow.document;
        introspect(JAM.policy.p11) {
          v163.write("\n");
        }
      }
    } else {
      var v180 = numberPosition$$1 == "right";
      if (v180) {
        var v165 = outputWindow.document;
        var v534 = lineOfText$$1;
        var v535 = adjustNumbering(i$$6, numberingAdjustment);
        var v422 = v534 + v535;
        var v166 = v422 + "\n";
        introspect(JAM.policy.p17) {
          v165.write(v166);
        }
        var v170 = strands$$1 == "two";
        if (v170) {
          var v167 = outputWindow.document;
          var v536 = complement(lineOfText$$1);
          var v537 = adjustNumbering(i$$6, numberingAdjustment);
          var v423 = v536 + v537;
          var v168 = v423 + "\n";
          introspect(JAM.policy.p17) {
            v167.write(v168);
          }
          var v169 = outputWindow.document;
          introspect(JAM.policy.p11) {
            v169.write("\n");
          }
        }
      } else {
        var v179 = numberPosition$$1 == "above";
        if (v179) {
          var v171 = outputWindow.document;
          var v172 = aboveNum + "\n";
          introspect(JAM.policy.p17) {
            v171.write(v172);
          }
          var v173 = outputWindow.document;
          var v174 = lineOfText$$1 + "\n";
          introspect(JAM.policy.p17) {
            v173.write(v174);
          }
          var v178 = strands$$1 == "two";
          if (v178) {
            var v175 = outputWindow.document;
            var v424 = complement(lineOfText$$1);
            var v176 = v424 + "\n";
            introspect(JAM.policy.p17) {
              v175.write(v176);
            }
            var v177 = outputWindow.document;
            introspect(JAM.policy.p11) {
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
    var v425 = basePerLine$$3 / groupSize$$3;
    var v189 = j$$8 <= v425;
    for (;v189;) {
      var v185 = k$$2 < groupSize$$3;
      for (;v185;) {
        var v426 = i$$7 + k$$2;
        var v183 = v426 >= stopBase$$3;
        if (v183) {
          break;
        }
        var v427 = k$$2 + i$$7;
        introspect(JAM.policy.p17) {
          var v184 = text$$13.charAt(v427)
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
      var v428 = basePerLine$$3 / groupSize$$3;
      v189 = j$$8 <= v428;
    }
    var v200 = numberPosition$$2 == "left";
    if (v200) {
      var v190 = outputWindow.document;
      var v538 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v429 = v538 + lineOfText$$2;
      var v191 = v429 + "\n";
      introspect(JAM.policy.p17) {
        v190.write(v191);
      }
    } else {
      var v199 = numberPosition$$2 == "right";
      if (v199) {
        var v192 = outputWindow.document;
        var v430 = lineOfText$$2 + i$$7;
        var v193 = v430 + "\n";
        introspect(JAM.policy.p17) {
          v192.write(v193);
        }
      } else {
        var v198 = numberPosition$$2 == "above";
        if (v198) {
          var v194 = outputWindow.document;
          var v195 = aboveNum$$1 + "\n";
          introspect(JAM.policy.p17) {
            v194.write(v195);
          }
          var v196 = outputWindow.document;
          var v197 = lineOfText$$2 + "\n";
          introspect(JAM.policy.p17) {
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
  var v597 = sequence$$13.length;
  var v539 = v597 <= firstIndexToMutate;
  var v598 = !v539;
  if (v598) {
    v539 = lastIndexToMutate < 0;
  }
  var v431 = v539;
  var v540 = !v431;
  if (v540) {
    v431 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v202 = v431;
  if (v202) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v210 = i$$8 < numMut;
  for (;v210;) {
    maxNum = sequence$$13.length;
    var v432 = Math.random();
    var v203 = v432 * maxNum;
    introspect(JAM.policy.p16) {
      randNum = Math.floor(v203);
    }
    var v433 = randNum < firstIndexToMutate;
    var v541 = !v433;
    if (v541) {
      v433 = randNum > lastIndexToMutate;
    }
    var v204 = v433;
    if (v204) {
      numMut++;
      i$$8++;
      v210 = i$$8 < numMut;
      continue;
    }
    introspect(JAM.policy.p16) {
      currentChar = sequence$$13.charAt(randNum);
    }
    needNewChar = true;
    for (;needNewChar;) {
      var v434 = Math.random();
      var v435 = components$$1.length;
      var v205 = v434 * v435;
      introspect(JAM.policy.p16) {
        componentsIndex = Math.round(v205);
      }
      var v436 = components$$1.length;
      var v206 = componentsIndex == v436;
      if (v206) {
        componentsIndex = 0;
      }
      var v437 = components$$1[componentsIndex];
      var v207 = v437 != currentChar;
      if (v207) {
        needNewChar = false;
      }
    }
    introspect(JAM.policy.p13) {
      var v438 = sequence$$13.substring(0, randNum)
    }
    var v439 = components$$1[componentsIndex];
    var v208 = v438 + v439;
    var v440 = randNum + 1;
    var v441 = sequence$$13.length;
    introspect(JAM.policy.p27) {
      var v209 = sequence$$13.substring(v440, v441)
    }
    sequence$$13 = v208 + v209;
    i$$8++;
    v210 = i$$8 < numMut;
  }
  var v211 = outputWindow.document;
  var v212 = addReturns(sequence$$13);
  introspect(JAM.policy.p17) {
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
    var v442 = Math.random();
    var v443 = components$$2.length;
    var v213 = v442 * v443;
    introspect(JAM.policy.p16) {
      tempNum$$1 = Math.floor(v213);
    }
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v444 = sequence$$14.length;
    var v216 = v444 == 60;
    if (v216) {
      var v214 = outputWindow.document;
      var v215 = sequence$$14 + "\n";
      introspect(JAM.policy.p17) {
        v214.write(v215);
      }
      sequence$$14 = "";
    }
    j$$9++;
    v217 = j$$9 < lengthOut$$1;
  }
  var v218 = outputWindow.document;
  var v219 = sequence$$14 + "\n";
  introspect(JAM.policy.p17) {
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
    var v599 = sequence$$15.length;
    var v542 = v599 - lookAhead;
    var v543 = sequence$$15.length;
    introspect(JAM.policy.p27) {
      var v445 = sequence$$15.substring(v542, v543)
    }
    var v221 = v445 + sequence$$15;
    introspect(JAM.policy.p13) {
      var v222 = sequence$$15.substring(0, lookAhead)
    }
    sequence$$15 = v221 + v222;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v224 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v224.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  }
  var v225 = outputWindow.document;
  var v600 = '<tr><td class="title" width="200px">' + "Site:";
  var v544 = v600 + '</td><td class="title">';
  var v446 = v544 + "Positions:";
  var v226 = v446 + "</td></tr>\n";
  introspect(JAM.policy.p17) {
    v225.write(v226);
  }
  var i$$9 = 0;
  var v447 = arrayOfItems.length;
  var v242 = i$$9 < v447;
  for (;v242;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v448 = arrayOfItems[i$$9];
    introspect(JAM.policy.p16) {
      var v227 = v448.match(/\/.+\//)
    }
    matchExp = v227 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    var v601 = arrayOfItems[i$$9];
    introspect(JAM.policy.p16) {
      var v545 = v601.match(/\)\D*\d+/)
    }
    var v449 = v545.toString();
    introspect(JAM.policy.p15) {
      var v228 = v449.replace(/\)\D*/, "")
    }
    cutDistance = parseFloat(v228);
    introspect(JAM.policy.p17) {
      var v234 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    for (;v234;) {
      var v229 = matchExp.lastIndex;
      matchPosition = v229 - cutDistance;
      var v450 = matchPosition >= lowerLimit;
      if (v450) {
        v450 = matchPosition < upperLimit;
      }
      var v232 = v450;
      if (v232) {
        timesFound++;
        var v230 = tempString$$1 + ", ";
        var v451 = matchPosition - shiftValue;
        var v231 = v451 + 1;
        tempString$$1 = v230 + v231;
      }
      var v452 = matchExp.lastIndex;
      var v546 = RegExp.lastMatch;
      var v453 = v546.length;
      var v233 = v452 - v453;
      matchExp.lastIndex = v233 + 1;
      introspect(JAM.policy.p17) {
        v234 = matchArray$$1 = matchExp.exec(sequence$$15);
      }
    }
    introspect(JAM.policy.p16) {
      var v454 = tempString$$1.search(/\d/)
    }
    var v235 = v454 != -1;
    if (v235) {
      introspect(JAM.policy.p15) {
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
    var v681 = '<tr><td class="' + backGroundClass;
    var v668 = v681 + '">';
    var v704 = arrayOfItems[i$$9];
    introspect(JAM.policy.p16) {
      var v694 = v704.match(/\([^\(]+\)/)
    }
    var v682 = v694.toString();
    introspect(JAM.policy.p15) {
      var v669 = v682.replace(/\(|\)/g, "")
    }
    var v655 = v668 + v669;
    var v637 = v655 + '</td><td class="';
    var v602 = v637 + backGroundClass;
    var v547 = v602 + '">';
    var v455 = v547 + tempString$$1;
    var v241 = v455 + "</td></tr>\n";
    introspect(JAM.policy.p17) {
      v240.write(v241);
    }
    timesFound = 0;
    i$$9++;
    var v456 = arrayOfItems.length;
    v242 = i$$9 < v456;
  }
  var v243 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v243.write("</tbody></table>\n");
  }
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v244 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v244.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  }
  var v245 = outputWindow.document;
  var v656 = '<tr><td class="title">' + "Pattern:";
  var v638 = v656 + '</td><td class="title">';
  var v603 = v638 + "Times found:";
  var v548 = v603 + '</td><td class="title">';
  var v457 = v548 + "Percentage:";
  var v246 = v457 + "</td></tr>\n";
  introspect(JAM.policy.p17) {
    v245.write(v246);
  }
  var i$$10 = 0;
  var v458 = arrayOfItems$$1.length;
  var v255 = i$$10 < v458;
  for (;v255;) {
    var tempNumber = 0;
    var v459 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p16) {
      var v247 = v459.match(/\/[^\/]+\//)
    }
    var matchExp$$1 = v247 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    introspect(JAM.policy.p17) {
      var v460 = sequence$$16.search(matchExp$$1)
    }
    var v249 = v460 != -1;
    if (v249) {
      introspect(JAM.policy.p17) {
        var v248 = sequence$$16.match(matchExp$$1)
      }
      tempNumber = v248.length;
    }
    var percentage = 0;
    var v549 = originalLength + 1;
    var v639 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p16) {
      var v604 = v639.match(/\d+/)
    }
    var v550 = parseFloat(v604);
    var v461 = v549 - v550;
    var v252 = v461 > 0;
    if (v252) {
      var v250 = 100 * tempNumber;
      var v462 = originalLength + 1;
      var v605 = arrayOfItems$$1[i$$10];
      introspect(JAM.policy.p16) {
        var v551 = v605.match(/\d+/)
      }
      var v463 = parseFloat(v551);
      var v251 = v462 - v463;
      percentage = v250 / v251;
    }
    var v253 = outputWindow.document;
    var v705 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p16) {
      var v695 = v705.match(/\([^\(]+\)\b/)
    }
    var v683 = v695.toString();
    introspect(JAM.policy.p15) {
      var v670 = v683.replace(/\(|\)/g, "")
    }
    var v657 = "<tr><td>" + v670;
    var v640 = v657 + "</td><td>";
    var v606 = v640 + tempNumber;
    var v552 = v606 + "</td><td>";
    introspect(JAM.policy.p10) {
      var v553 = percentage.toFixed(2)
    }
    var v464 = v552 + v553;
    var v254 = v464 + "</td></tr>\n";
    introspect(JAM.policy.p17) {
      v253.write(v254);
    }
    i$$10++;
    var v465 = arrayOfItems$$1.length;
    v255 = i$$10 < v465;
  }
  var v256 = outputWindow.document;
  introspect(JAM.policy.p11) {
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
  var v466 = sequence$$17.length;
  var v263 = v466 > 0;
  for (;v263;) {
    maxNum$$1 = sequence$$17.length;
    var v467 = Math.random();
    var v257 = v467 * maxNum$$1;
    introspect(JAM.policy.p16) {
      randNum$$1 = Math.floor(v257);
    }
    introspect(JAM.policy.p16) {
      tempChar$$2 = sequence$$17.charAt(randNum$$1);
    }
    tempSeq = tempSeq + tempChar$$2;
    introspect(JAM.policy.p13) {
      tempString1 = sequence$$17.substring(0, randNum$$1);
    }
    var v258 = randNum$$1 + 1;
    var v259 = sequence$$17.length;
    introspect(JAM.policy.p15) {
      tempString2 = sequence$$17.substring(v258, v259);
    }
    sequence$$17 = tempString1 + tempString2;
    var v468 = tempSeq.length;
    var v262 = v468 == 60;
    if (v262) {
      var v260 = outputWindow.document;
      var v261 = tempSeq + "\n";
      introspect(JAM.policy.p17) {
        v260.write(v261);
      }
      tempSeq = "";
    }
    var v469 = sequence$$17.length;
    v263 = v469 > 0;
  }
  var v264 = outputWindow.document;
  var v265 = tempSeq + "\n";
  introspect(JAM.policy.p17) {
    v264.write(v265);
  }
  return true;
}
function emblTrans(theDocument) {
  var maxInput$$3 = 2E5;
  var v470 = testScript();
  var v266 = v470 == false;
  if (v266) {
    return false;
  }
  var v684 = theDocument.forms;
  var v671 = v684[0];
  var v658 = v671.elements;
  var v641 = v658[0];
  var v607 = checkFormElement(v641);
  var v554 = v607 == false;
  var v609 = !v554;
  if (v609) {
    var v696 = theDocument.forms;
    var v685 = v696[0];
    var v672 = v685.elements;
    var v659 = v672[0];
    var v642 = v659.value;
    var v608 = verifyEmblFeat(v642);
    v554 = v608 == false;
  }
  var v471 = v554;
  var v556 = !v471;
  if (v556) {
    var v686 = theDocument.forms;
    var v673 = v686[0];
    var v660 = v673.elements;
    var v643 = v660[0];
    var v610 = v643.value;
    var v555 = checkTextLength(v610, maxInput$$3);
    v471 = v555 == false;
  }
  var v267 = v471;
  if (v267) {
    return false;
  }
  openWindow("EMBL Trans Extractor");
  openPre();
  var v644 = theDocument.forms;
  var v611 = v644[0];
  var v557 = v611.elements;
  var v472 = v557[0];
  var v268 = v472.value;
  emblTransExtract(v268);
  closePre();
  closeWindow();
  return true;
}
function emblTransExtract(emblFile$$2) {
  var title$$9;
  var v269 = "_" + emblFile$$2;
  emblFile$$2 = v269 + "_";
  introspect(JAM.policy.p16) {
    var recordArray = emblFile$$2.split(/ID\s\s\s[^\f\n\r]*/)
  }
  var i$$11 = 1;
  var v473 = recordArray.length;
  var v278 = i$$11 < v473;
  for (;v278;) {
    introspect(JAM.policy.p16) {
      var mainArray = emblFile$$2.split(/[\f\n\r]\s*FH   Key             Location\/Qualifiers[\f\n\r]+\s*FH|[\f\n\r]\s*XX[\s]*[\f\n\r]\s*SQ[^\f\n\r]*/)
    }
    var v558 = mainArray[0];
    introspect(JAM.policy.p16) {
      var v474 = v558.search(/[\f\n\r]\s*DE[^\f\n\r]+/)
    }
    var v271 = v474 != -1;
    if (v271) {
      var v559 = mainArray[0];
      introspect(JAM.policy.p16) {
        var v475 = v559.match(/[\f\n\r]\s*DE[^\f\n\r]+/)
      }
      var v270 = v475.toString();
      introspect(JAM.policy.p15) {
        title$$9 = v270.replace(/[\f\n\r]\s*DE\s*/, "");
      }
    } else {
      title$$9 = "Untitled";
    }
    introspect(JAM.policy.p15) {
      var v476 = title$$9.replace(/[\f\n\r\t]+$/g, "")
    }
    var v272 = filterFastaTitle(v476);
    title$$9 = v272 + "\n";
    var v273 = mainArray[2];
    introspect(JAM.policy.p16) {
      var dnaSequenceArray = v273.split(/\/{2}/)
    }
    var v274 = outputWindow.document;
    var v275 = title$$9 + "\n";
    introspect(JAM.policy.p17) {
      v274.write(v275);
    }
    var v477 = dnaSequenceArray.length;
    var v276 = v477 == 1;
    if (v276) {
      alert("The entire EMBL file may not have been processed.");
      outputWindow.focus();
    }
    var v277 = mainArray[1];
    introspect(JAM.policy.p16) {
      var featureArray = v277.split(/[\f\n\r]FT {3,12}\b/)
    }
    showFeatureTrans(featureArray);
    i$$11++;
    var v478 = recordArray.length;
    v278 = i$$11 < v478;
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
  var v479 = arrayOfFeatures.length;
  var v289 = i$$12 < v479;
  for (;v289;) {
    var v560 = arrayOfFeatures[i$$12];
    introspect(JAM.policy.p16) {
      var v480 = v560.search(/\/translation/)
    }
    var v288 = v480 != -1;
    if (v288) {
      var v279 = arrayOfFeatures[i$$12];
      introspect(JAM.policy.p15) {
        var v741 = v279.replace(/[\[\]\*]/g, "")
      }
      arrayOfFeatures[i$$12] = v741;
      var v481 = arrayOfFeatures[i$$12];
      introspect(JAM.policy.p16) {
        var v280 = v481.match(/[^ \f\n\r\t\v]+ /)
      }
      featureTitle = v280.toString();
      theTitle = new RegExp(featureTitle);
      var v281 = arrayOfFeatures[i$$12];
      introspect(JAM.policy.p19) {
        removedTitle = v281.replace(theTitle, "");
      }
      var v482 = arrayOfFeatures[i$$12];
      introspect(JAM.policy.p16) {
        var v282 = v482.match(/\/[^\f\n\r]+/)
      }
      firstQualifier = v282.toString();
      var v283 = outputWindow.document;
      var v612 = filterFastaTitle(featureTitle);
      var v561 = "&gt;" + v612;
      var v562 = filterFastaTitle(firstQualifier);
      var v483 = v561 + v562;
      var v284 = v483 + "\n";
      introspect(JAM.policy.p17) {
        v283.write(v284);
      }
      var v285 = arrayOfFeatures[i$$12];
      introspect(JAM.policy.p16) {
        translation = v285.match(/\/translation="[^"]+"/);
      }
      translation = translation.toString();
      introspect(JAM.policy.p15) {
        translation = translation.replace(/\/translation/, "");
      }
      introspect(JAM.policy.p15) {
        translation = translation.replace(/^FT\s+/gm, "");
      }
      translation = removeNonProtein(translation);
      translation = addReturns(translation);
      var v286 = outputWindow.document;
      introspect(JAM.policy.p17) {
        v286.write(translation);
      }
      translationFound = true;
      var v287 = outputWindow.document;
      introspect(JAM.policy.p11) {
        v287.write("\n\n");
      }
    }
    i$$12++;
    var v484 = arrayOfFeatures.length;
    v289 = i$$12 < v484;
  }
  var v291 = translationFound == false;
  if (v291) {
    var v290 = outputWindow.document;
    introspect(JAM.policy.p11) {
      v290.write("No translations were found.\n");
    }
  }
  return true;
}
document.onload = v2;
introspect(JAM.policy.p11) {
  var v292 = document.getElementById("submitbtn")
}
v292.onclick = v3;
introspect(JAM.policy.p11) {
  var v293 = document.getElementById("clearbtn")
}
v293.onclick = v4
