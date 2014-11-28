
JAM.startProfile('load');
function v4() {
  var v544 = document.forms;
  var v465 = v544[0];
  var v281 = v465.elements;
  var v5 = v281[0];
  v5.value = " ";
  return;
}
function v3() {
  try {
    groupProtein(document);
  } catch (e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    alert(v6);
  }
  return;
}
function v2() {
  var v282 = document.main_form;
  var v7 = v282.main_submit;
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
  var v283 = arrayOfSequences.length;
  var v9 = v283 < 2;
  if (v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v284 = arrayOfTitles.length;
  var v11 = i$$1 < v284;
  for (;v11;) {
    var v597 = arrayOfTitles[i$$1];
    introspect(JAM.policy.p17) {
      var v545 = v597.search(/\S/)
    }
    var v466 = v545 == -1;
    var v547 = !v466;
    if (v547) {
      var v598 = arrayOfSequences[i$$1];
      introspect(JAM.policy.p17) {
        var v546 = v598.search(/\S/)
      }
      v466 = v546 == -1;
    }
    var v285 = v466;
    var v468 = !v285;
    if (v468) {
      var v548 = arrayOfSequences[i$$1];
      var v467 = v548.length;
      v285 = v467 != lengthOfAlign;
    }
    var v10 = v285;
    if (v10) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v286 = arrayOfTitles.length;
    v11 = i$$1 < v286;
  }
  return true;
}
function checkCodonTable(codonTable) {
  introspect(JAM.policy.p17) {
    var v634 = codonTable.search(/AmAcid/)
  }
  var v599 = v634 == -1;
  var v636 = !v599;
  if (v636) {
    introspect(JAM.policy.p17) {
      var v635 = codonTable.search(/Codon/)
    }
    v599 = v635 == -1;
  }
  var v549 = v599;
  var v601 = !v549;
  if (v601) {
    introspect(JAM.policy.p17) {
      var v600 = codonTable.search(/Number/)
    }
    v549 = v600 == -1;
  }
  var v469 = v549;
  var v551 = !v469;
  if (v551) {
    introspect(JAM.policy.p17) {
      var v550 = codonTable.search(/\/1000/)
    }
    v469 = v550 == -1;
  }
  var v287 = v469;
  var v471 = !v287;
  if (v471) {
    introspect(JAM.policy.p17) {
      var v470 = codonTable.search(/Fraction\s*\.\./)
    }
    v287 = v470 == -1;
  }
  var v12 = v287;
  if (v12) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v472 = formElement.value;
  introspect(JAM.policy.p17) {
    var v288 = v472.search(/\S/)
  }
  var v13 = v288 == -1;
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
  var v289 = arrayOfPatterns.length;
  var v16 = z$$2 < v289;
  for (;v16;) {
    var v473 = arrayOfPatterns[z$$2];
    introspect(JAM.policy.p17) {
      var v290 = v473.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/)
    }
    var v14 = v290 == -1;
    if (v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v474 = arrayOfPatterns[z$$2];
    var v291 = moreExpressionCheck(v474);
    var v15 = v291 == false;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v292 = arrayOfPatterns.length;
    v16 = z$$2 < v292;
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v293 = arrayOfPatterns.length;
  var v22 = j < v293;
  for (;v22;) {
    var v475 = arrayOfPatterns[j];
    introspect(JAM.policy.p17) {
      var v294 = v475.match(/\/.+\//)
    }
    var v19 = v294 + "gi";
    var v731 = eval(v19);
    geneticCodeMatchExp[j] = v731;
    var v295 = arrayOfPatterns[j];
    introspect(JAM.policy.p17) {
      var v20 = v295.match(/=[a-zA-Z\*]/)
    }
    var v732 = v20.toString();
    geneticCodeMatchResult[j] = v732;
    var v21 = geneticCodeMatchResult[j];
    introspect(JAM.policy.p15) {
      var v733 = v21.replace(/=/g, "")
    }
    geneticCodeMatchResult[j] = v733;
    j++;
    var v296 = arrayOfPatterns.length;
    v22 = j < v296;
  }
  var i$$2 = 0;
  var v476 = testSequence.length;
  var v297 = v476 - 3;
  var v29 = i$$2 <= v297;
  for (;v29;) {
    var v23 = i$$2 + 3;
    introspect(JAM.policy.p15) {
      codon = testSequence.substring(i$$2, v23);
    }
    j = 0;
    var v298 = geneticCodeMatchExp.length;
    var v27 = j < v298;
    for (;v27;) {
      var v477 = geneticCodeMatchExp[j];
      introspect(JAM.policy.p16) {
        var v299 = codon.search(v477)
      }
      var v26 = v299 != -1;
      if (v26) {
        var v25 = oneMatch == true;
        if (v25) {
          var v300 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v24 = v300 + ".";
          alert(v24);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v301 = geneticCodeMatchExp.length;
      v27 = j < v301;
    }
    var v28 = oneMatch == false;
    if (v28) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v478 = testSequence.length;
    var v302 = v478 - 3;
    v29 = i$$2 <= v302;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v303 = arrayOfPatterns$$1.length;
  var v31 = z$$3 < v303;
  for (;v31;) {
    var v479 = arrayOfPatterns$$1[z$$3];
    introspect(JAM.policy.p17) {
      var v304 = v479.search(/[^acdefghiklmnpqrstvwyz]/i)
    }
    var v30 = v304 != -1;
    if (v30) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v305 = arrayOfPatterns$$1.length;
    v31 = z$$3 < v305;
  }
  var i$$3 = 0;
  var v306 = arrayOfPatterns$$1.length;
  var v35 = i$$3 < v306;
  for (;v35;) {
    var v480 = arrayOfPatterns$$1[i$$3];
    var v307 = "[" + v480;
    var v32 = v307 + "]";
    var re = new RegExp(v32, "gi");
    var j$$1 = i$$3 + 1;
    var v308 = arrayOfPatterns$$1.length;
    var v34 = j$$1 < v308;
    for (;v34;) {
      var v481 = arrayOfPatterns$$1[j$$1];
      introspect(JAM.policy.p16) {
        var v309 = v481.search(re)
      }
      var v33 = v309 != -1;
      if (v33) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v310 = arrayOfPatterns$$1.length;
      v34 = j$$1 < v310;
    }
    i$$3++;
    var v311 = arrayOfPatterns$$1.length;
    v35 = i$$3 < v311;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v312 = arrayOfPatterns$$2.length;
  var v38 = z$$4 < v312;
  for (;v38;) {
    var v482 = arrayOfPatterns$$2[z$$4];
    introspect(JAM.policy.p17) {
      var v313 = v482.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i)
    }
    var v36 = v313 == -1;
    if (v36) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v483 = arrayOfPatterns$$2[z$$4];
    var v314 = moreExpressionCheck(v483);
    var v37 = v314 == false;
    if (v37) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v315 = arrayOfPatterns$$2.length;
    v38 = z$$4 < v315;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v552 = getSequenceFromFasta(text$$7);
  introspect(JAM.policy.p15) {
    var v484 = v552.replace(/[^A-Za-z]/g, "")
  }
  var v316 = v484.length;
  var v40 = v316 > maxInput;
  if (v40) {
    var v317 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v39 = v317 + " characters.";
    alert(v39);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v318 = text$$8.length;
  var v42 = v318 > maxInput$$1;
  if (v42) {
    var v319 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v41 = v319 + " characters.";
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
  var v320 = alignArray.length;
  var v49 = v320 < 3;
  if (v49) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v321 = alignArray.length;
  var v51 = i$$4 < v321;
  for (;v51;) {
    var v485 = alignArray[i$$4];
    introspect(JAM.policy.p17) {
      var v322 = v485.search(/[^\s]+\s/)
    }
    var v50 = v322 == -1;
    if (v50) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v323 = alignArray.length;
    v51 = i$$4 < v323;
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
  introspect(JAM.policy.p17) {
    var v324 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v54 = v324 != -1;
  if (v54) {
    introspect(JAM.policy.p16) {
      var v53 = matchArray = re$$1.exec(sequenceData)
    }
    for (;v53;) {
      var v52 = matchArray[0];
      introspect(JAM.policy.p16) {
        arrayOfFasta.push(v52);
      }
      introspect(JAM.policy.p16) {
        v53 = matchArray = re$$1.exec(sequenceData);
      }
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v325 = sequence$$2.length;
  var v55 = "&gt;results for " + v325;
  var stringToReturn = v55 + " residue sequence ";
  introspect(JAM.policy.p17) {
    var v326 = fastaSequenceTitle.search(/[^\s]/)
  }
  var v57 = v326 != -1;
  if (v57) {
    var v327 = stringToReturn + '"';
    var v56 = v327 + fastaSequenceTitle;
    stringToReturn = v56 + '"';
  }
  var v328 = stringToReturn + ' starting "';
  introspect(JAM.policy.p13) {
    var v329 = sequence$$2.substring(0, 10)
  }
  var v58 = v328 + v329;
  stringToReturn = v58 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v330 = sequenceOne.length;
  var v59 = "Search results for " + v330;
  var stringToReturn$$1 = v59 + " residue sequence ";
  introspect(JAM.policy.p17) {
    var v331 = fastaSequenceTitleOne.search(/[^\s]/)
  }
  var v61 = v331 != -1;
  if (v61) {
    var v332 = stringToReturn$$1 + '"';
    var v60 = v332 + fastaSequenceTitleOne;
    stringToReturn$$1 = v60 + '"';
  }
  var v333 = stringToReturn$$1 + ' starting "';
  introspect(JAM.policy.p13) {
    var v334 = sequenceOne.substring(0, 10)
  }
  var v62 = v333 + v334;
  stringToReturn$$1 = v62 + '"\n';
  var v335 = stringToReturn$$1 + "and ";
  var v336 = sequenceTwo.length;
  var v63 = v335 + v336;
  stringToReturn$$1 = v63 + " residue sequence ";
  introspect(JAM.policy.p17) {
    var v337 = fastaSequenceTitleTwo.search(/[^\s]/)
  }
  var v65 = v337 != -1;
  if (v65) {
    var v338 = stringToReturn$$1 + '"';
    var v64 = v338 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v64 + '"';
  }
  var v339 = stringToReturn$$1 + ' starting "';
  introspect(JAM.policy.p13) {
    var v340 = sequenceTwo.substring(0, 10)
  }
  var v66 = v339 + v340;
  stringToReturn$$1 = v66 + '"';
  var v67 = '<div class="info">' + stringToReturn$$1;
  return v67 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v68 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v68);
  var j$$2 = 0;
  var v341 = arrayOfPatterns$$3.length;
  var v70 = j$$2 < v341;
  for (;v70;) {
    var v486 = arrayOfPatterns$$3[j$$2];
    introspect(JAM.policy.p17) {
      var v342 = v486.match(/\/.+\//)
    }
    var v69 = v342 + "gi";
    var v734 = eval(v69);
    geneticCodeMatchExp$$1[j$$2] = v734;
    j$$2++;
    var v343 = arrayOfPatterns$$3.length;
    v70 = j$$2 < v343;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v71 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v71);
  var j$$3 = 0;
  var v344 = arrayOfPatterns$$4.length;
  var v74 = j$$3 < v344;
  for (;v74;) {
    var v345 = arrayOfPatterns$$4[j$$3];
    introspect(JAM.policy.p17) {
      var v72 = v345.match(/=[a-zA-Z\*]/)
    }
    var v735 = v72.toString();
    geneticCodeMatchResult$$1[j$$3] = v735;
    var v73 = geneticCodeMatchResult$$1[j$$3];
    introspect(JAM.policy.p15) {
      var v736 = v73.replace(/=/g, "")
    }
    geneticCodeMatchResult$$1[j$$3] = v736;
    j$$3++;
    var v346 = arrayOfPatterns$$4.length;
    v74 = j$$3 < v346;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v347 = sequence$$3.length;
  var v75 = "Results for " + v347;
  var stringToReturn$$2 = v75 + " residue sequence ";
  introspect(JAM.policy.p17) {
    var v348 = fastaSequenceTitle$$1.search(/[^\s]/)
  }
  var v77 = v348 != -1;
  if (v77) {
    var v349 = stringToReturn$$2 + '"';
    var v76 = v349 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v76 + '"';
  }
  var v350 = stringToReturn$$2 + ' starting "';
  introspect(JAM.policy.p13) {
    var v351 = sequence$$3.substring(0, 10)
  }
  var v78 = v350 + v351;
  stringToReturn$$2 = v78 + '"';
  var v79 = '<div class="info">' + stringToReturn$$2;
  return v79 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v487 = "Results for " + topology;
  var v352 = v487 + " ";
  var v353 = sequence$$4.length;
  var v80 = v352 + v353;
  var stringToReturn$$3 = v80 + " residue sequence ";
  introspect(JAM.policy.p17) {
    var v354 = fastaSequenceTitle$$2.search(/[^\s]/)
  }
  var v82 = v354 != -1;
  if (v82) {
    var v355 = stringToReturn$$3 + '"';
    var v81 = v355 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v81 + '"';
  }
  var v356 = stringToReturn$$3 + ' starting "';
  introspect(JAM.policy.p13) {
    var v357 = sequence$$4.substring(0, 10)
  }
  var v83 = v356 + v357;
  stringToReturn$$3 = v83 + '"';
  var v84 = '<div class="info">' + stringToReturn$$3;
  return v84 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v358 = sequenceOne$$1.length;
  var v85 = "Alignment results for " + v358;
  var stringToReturn$$4 = v85 + " residue sequence ";
  introspect(JAM.policy.p17) {
    var v359 = fastaSequenceTitleOne$$1.search(/[^\s]/)
  }
  var v87 = v359 != -1;
  if (v87) {
    var v360 = stringToReturn$$4 + '"';
    var v86 = v360 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v86 + '"';
  }
  var v361 = stringToReturn$$4 + ' starting "';
  introspect(JAM.policy.p13) {
    var v362 = sequenceOne$$1.substring(0, 10)
  }
  var v88 = v361 + v362;
  stringToReturn$$4 = v88 + '"\n';
  var v363 = stringToReturn$$4 + "and ";
  var v364 = sequenceTwo$$1.length;
  var v89 = v363 + v364;
  stringToReturn$$4 = v89 + " residue sequence ";
  introspect(JAM.policy.p17) {
    var v365 = fastaSequenceTitleTwo$$1.search(/[^\s]/)
  }
  var v91 = v365 != -1;
  if (v91) {
    var v366 = stringToReturn$$4 + '"';
    var v90 = v366 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v90 + '"';
  }
  var v367 = stringToReturn$$4 + ' starting "';
  introspect(JAM.policy.p13) {
    var v368 = sequenceTwo$$1.substring(0, 10)
  }
  var v92 = v367 + v368;
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
    var v369 = Math.random();
    var v370 = components.length;
    var v94 = v369 * v370;
    introspect(JAM.policy.p17) {
      tempNum = Math.floor(v94);
    }
    tempChar = components[tempNum];
    introspect(JAM.policy.p16) {
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
  introspect(JAM.policy.p17) {
    var v371 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v96 = v371 != -1;
  if (v96) {
    introspect(JAM.policy.p15) {
      sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "");
    }
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  introspect(JAM.policy.p17) {
    var v372 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v98 = v372 != -1;
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
  introspect(JAM.policy.p17) {
    var v709 = expressionToCheck.search(/\[[A-Za-z\|]*\[/)
  }
  var v702 = v709 != -1;
  var v711 = !v702;
  if (v711) {
    introspect(JAM.policy.p17) {
      var v710 = expressionToCheck.search(/\][A-Za-z\|]*\]/)
    }
    v702 = v710 != -1;
  }
  var v693 = v702;
  var v704 = !v693;
  if (v704) {
    introspect(JAM.policy.p17) {
      var v703 = expressionToCheck.search(/\[\]/)
    }
    v693 = v703 != -1;
  }
  var v684 = v693;
  var v695 = !v684;
  if (v695) {
    introspect(JAM.policy.p17) {
      var v694 = expressionToCheck.search(/\/[A-Za-z\|]*\]/)
    }
    v684 = v694 != -1;
  }
  var v673 = v684;
  var v686 = !v673;
  if (v686) {
    introspect(JAM.policy.p17) {
      var v685 = expressionToCheck.search(/\[[A-Za-z\|]*\//)
    }
    v673 = v685 != -1;
  }
  var v655 = v673;
  var v675 = !v655;
  if (v675) {
    introspect(JAM.policy.p17) {
      var v674 = expressionToCheck.search(/\|\|/)
    }
    v655 = v674 != -1;
  }
  var v637 = v655;
  var v657 = !v637;
  if (v657) {
    introspect(JAM.policy.p17) {
      var v656 = expressionToCheck.search(/\/\|/)
    }
    v637 = v656 != -1;
  }
  var v602 = v637;
  var v639 = !v602;
  if (v639) {
    introspect(JAM.policy.p17) {
      var v638 = expressionToCheck.search(/\|\//)
    }
    v602 = v638 != -1;
  }
  var v553 = v602;
  var v604 = !v553;
  if (v604) {
    introspect(JAM.policy.p17) {
      var v603 = expressionToCheck.search(/\[.\]/)
    }
    v553 = v603 != -1;
  }
  var v488 = v553;
  var v555 = !v488;
  if (v555) {
    introspect(JAM.policy.p17) {
      var v554 = expressionToCheck.search(/\</)
    }
    v488 = v554 != -1;
  }
  var v373 = v488;
  var v490 = !v373;
  if (v490) {
    introspect(JAM.policy.p17) {
      var v489 = expressionToCheck.search(/\>/)
    }
    v373 = v489 != -1;
  }
  var v99 = v373;
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
  var v556 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v491 = v556 + "<head>\n";
  var v374 = v491 + "<title>Sequence Manipulation Suite</title>\n";
  var v105 = v374 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  introspect(JAM.policy.p16) {
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
    var v687 = v696 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v676 = v687 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v658 = v676 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v640 = v658 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v605 = v640 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v557 = v605 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v492 = v557 + "td.many {color: #000000}\n";
    var v375 = v492 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v107 = v375 + "</style>\n";
    introspect(JAM.policy.p16) {
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
    var v688 = v697 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v677 = v688 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v659 = v677 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v641 = v659 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v606 = v641 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v558 = v606 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v493 = v558 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v376 = v493 + "img {display: none}\n";
    var v109 = v376 + "</style>\n";
    introspect(JAM.policy.p16) {
      v108.write(v109);
    }
  }
  var v110 = outputWindow.document;
  var v559 = "</head>\n" + '<body class="main">\n';
  var v494 = v559 + '<div class="title">';
  var v377 = v494 + title$$6;
  var v111 = v377 + " results</div>\n";
  introspect(JAM.policy.p16) {
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
  var v560 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v495 = v560 + "<head>\n";
  var v378 = v495 + "<title>Sequence Manipulation Suite</title>\n";
  var v113 = v378 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  introspect(JAM.policy.p16) {
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
    var v689 = v698 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v678 = v689 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v660 = v678 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v642 = v660 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v607 = v642 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v561 = v607 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v496 = v561 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v379 = v496 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v115 = v379 + "</style>\n";
    introspect(JAM.policy.p16) {
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
    var v690 = v699 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v679 = v690 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v661 = v679 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v643 = v661 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v608 = v643 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v562 = v608 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v497 = v562 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v380 = v497 + "img {display: none}\n";
    var v117 = v380 + "</style>\n";
    introspect(JAM.policy.p16) {
      v116.write(v117);
    }
  }
  var v118 = outputWindow.document;
  var v563 = "</head>\n" + '<body class="main">\n';
  var v498 = v563 + '<div class="title">';
  var v381 = v498 + title$$8;
  var v119 = v381 + " results</div>\n";
  introspect(JAM.policy.p16) {
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
  introspect(JAM.policy.p17) {
    var v382 = dnaSequence$$1.search(/./)
  }
  var v120 = v382 != -1;
  if (v120) {
    introspect(JAM.policy.p17) {
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
  introspect(JAM.policy.p16) {
    testArray.push(testString);
  }
  var v383 = testArray[0];
  var v124 = v383 != testString;
  if (v124) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  introspect(JAM.policy.p16) {
    var v384 = testString.search(re$$2)
  }
  var v125 = v384 == -1;
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
  introspect(JAM.policy.p11) {
    var v385 = testNum.toFixed(3)
  }
  var v128 = v385 != 2489.824;
  if (v128) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  introspect(JAM.policy.p11) {
    var v386 = testNum.toPrecision(5)
  }
  var v129 = v386 != 2489.8;
  if (v129) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  introspect(JAM.policy.p17) {
    var v387 = theNumber$$1.search(/\d/)
  }
  var v130 = v387 == -1;
  if (v130) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  introspect(JAM.policy.p17) {
    var v609 = emblFile.search(/ID/)
  }
  var v564 = v609 == -1;
  var v611 = !v564;
  if (v611) {
    introspect(JAM.policy.p17) {
      var v610 = emblFile.search(/AC/)
    }
    v564 = v610 == -1;
  }
  var v499 = v564;
  var v566 = !v499;
  if (v566) {
    introspect(JAM.policy.p17) {
      var v565 = emblFile.search(/DE/)
    }
    v499 = v565 == -1;
  }
  var v388 = v499;
  var v501 = !v388;
  if (v501) {
    introspect(JAM.policy.p17) {
      var v500 = emblFile.search(/SQ/)
    }
    v388 = v500 == -1;
  }
  var v131 = v388;
  if (v131) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  introspect(JAM.policy.p17) {
    var v389 = theNumber$$2.search(/\d/)
  }
  var v132 = v389 == -1;
  if (v132) {
    alert("Please enter a number.");
    return false;
  }
  var v134 = theNumber$$2 > maxInput$$2;
  if (v134) {
    var v390 = "Please enter a number less than or equal to " + maxInput$$2;
    var v133 = v390 + ".";
    alert(v133);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  introspect(JAM.policy.p17) {
    var v391 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i)
  }
  var v135 = v391 != -1;
  if (v135) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  introspect(JAM.policy.p17) {
    var v392 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i)
  }
  var v136 = v392 != -1;
  if (v136) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  introspect(JAM.policy.p17) {
    var v612 = genBankFile.search(/LOCUS/)
  }
  var v567 = v612 == -1;
  var v614 = !v567;
  if (v614) {
    introspect(JAM.policy.p17) {
      var v613 = genBankFile.search(/DEFINITION/)
    }
    v567 = v613 == -1;
  }
  var v502 = v567;
  var v569 = !v502;
  if (v569) {
    introspect(JAM.policy.p17) {
      var v568 = genBankFile.search(/ACCESSION/)
    }
    v502 = v568 == -1;
  }
  var v393 = v502;
  var v504 = !v393;
  if (v504) {
    introspect(JAM.policy.p17) {
      var v503 = genBankFile.search(/ORIGIN/)
    }
    v393 = v503 == -1;
  }
  var v137 = v393;
  if (v137) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  introspect(JAM.policy.p17) {
    var v615 = genBankFile$$1.search(/LOCUS/)
  }
  var v570 = v615 == -1;
  var v617 = !v570;
  if (v617) {
    introspect(JAM.policy.p17) {
      var v616 = genBankFile$$1.search(/DEFINITION/)
    }
    v570 = v616 == -1;
  }
  var v505 = v570;
  var v572 = !v505;
  if (v572) {
    introspect(JAM.policy.p17) {
      var v571 = genBankFile$$1.search(/ACCESSION/)
    }
    v505 = v571 == -1;
  }
  var v394 = v505;
  var v507 = !v394;
  if (v507) {
    introspect(JAM.policy.p17) {
      var v506 = genBankFile$$1.search(/ORIGIN/)
    }
    v394 = v506 == -1;
  }
  var v138 = v394;
  if (v138) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  introspect(JAM.policy.p17) {
    var v395 = genBankFile$$1.search(/FEATURES {13}/)
  }
  var v139 = v395 == -1;
  if (v139) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  introspect(JAM.policy.p17) {
    var v618 = emblFile$$1.search(/ID/)
  }
  var v573 = v618 == -1;
  var v620 = !v573;
  if (v620) {
    introspect(JAM.policy.p17) {
      var v619 = emblFile$$1.search(/AC/)
    }
    v573 = v619 == -1;
  }
  var v508 = v573;
  var v575 = !v508;
  if (v575) {
    introspect(JAM.policy.p17) {
      var v574 = emblFile$$1.search(/DE/)
    }
    v508 = v574 == -1;
  }
  var v396 = v508;
  var v510 = !v396;
  if (v510) {
    introspect(JAM.policy.p17) {
      var v509 = emblFile$$1.search(/SQ/)
    }
    v396 = v509 == -1;
  }
  var v140 = v396;
  if (v140) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  introspect(JAM.policy.p17) {
    var v397 = emblFile$$1.search(/^FT/m)
  }
  var v141 = v397 == -1;
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
    var v398 = basePerLine / groupSize;
    var v145 = j$$6 <= v398;
    for (;v145;) {
      var v144 = k < groupSize;
      for (;v144;) {
        var v399 = k + i$$5;
        introspect(JAM.policy.p16) {
          var v143 = text$$10.charAt(v399)
        }
        lineOfText = lineOfText + v143;
        k = k + 1;
        v144 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v400 = basePerLine / groupSize;
      v145 = j$$6 <= v400;
    }
    var v146 = outputWindow.document;
    var v147 = lineOfText + "\n";
    introspect(JAM.policy.p16) {
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
    var v401 = adjustment < 0;
    if (v401) {
      v401 = adjusted >= 0;
    }
    var v149 = v401;
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
    var v402 = basePerLine$$2 / groupSize$$2;
    var v158 = j$$7 <= v402;
    for (;v158;) {
      var v153 = k$$1 < groupSize$$2;
      for (;v153;) {
        var v403 = i$$6 + k$$1;
        var v150 = v403 >= stopBase$$2;
        if (v150) {
          break;
        }
        var v151 = lineOfText$$1;
        var v404 = k$$1 + i$$6;
        introspect(JAM.policy.p16) {
          var v152 = text$$12.charAt(v404)
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
        var v405 = adjustNumbering(i$$6, numberingAdjustment);
        var v155 = rightNum(v405, "", groupSize$$2, tabIn$$3);
        aboveNum = v154 + v155;
      }
      var v157 = i$$6 >= stopBase$$2;
      if (v157) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v406 = basePerLine$$2 / groupSize$$2;
      v158 = j$$7 <= v406;
    }
    var v181 = numberPosition$$1 == "left";
    if (v181) {
      var v159 = outputWindow.document;
      var v576 = adjustNumbering(lineNum, numberingAdjustment);
      var v511 = rightNum(v576, "", 8, tabIn$$3);
      var v407 = v511 + lineOfText$$1;
      var v160 = v407 + "\n";
      introspect(JAM.policy.p16) {
        v159.write(v160);
      }
      var v164 = strands$$1 == "two";
      if (v164) {
        var v161 = outputWindow.document;
        var v577 = adjustNumbering(lineNum, numberingAdjustment);
        var v512 = rightNum(v577, "", 8, tabIn$$3);
        var v513 = complement(lineOfText$$1);
        var v408 = v512 + v513;
        var v162 = v408 + "\n";
        introspect(JAM.policy.p16) {
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
        var v514 = lineOfText$$1;
        var v515 = adjustNumbering(i$$6, numberingAdjustment);
        var v409 = v514 + v515;
        var v166 = v409 + "\n";
        introspect(JAM.policy.p16) {
          v165.write(v166);
        }
        var v170 = strands$$1 == "two";
        if (v170) {
          var v167 = outputWindow.document;
          var v516 = complement(lineOfText$$1);
          var v517 = adjustNumbering(i$$6, numberingAdjustment);
          var v410 = v516 + v517;
          var v168 = v410 + "\n";
          introspect(JAM.policy.p16) {
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
          introspect(JAM.policy.p16) {
            v171.write(v172);
          }
          var v173 = outputWindow.document;
          var v174 = lineOfText$$1 + "\n";
          introspect(JAM.policy.p16) {
            v173.write(v174);
          }
          var v178 = strands$$1 == "two";
          if (v178) {
            var v175 = outputWindow.document;
            var v411 = complement(lineOfText$$1);
            var v176 = v411 + "\n";
            introspect(JAM.policy.p16) {
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
    var v412 = basePerLine$$3 / groupSize$$3;
    var v189 = j$$8 <= v412;
    for (;v189;) {
      var v185 = k$$2 < groupSize$$3;
      for (;v185;) {
        var v413 = i$$7 + k$$2;
        var v183 = v413 >= stopBase$$3;
        if (v183) {
          break;
        }
        var v414 = k$$2 + i$$7;
        introspect(JAM.policy.p16) {
          var v184 = text$$13.charAt(v414)
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
      var v415 = basePerLine$$3 / groupSize$$3;
      v189 = j$$8 <= v415;
    }
    var v200 = numberPosition$$2 == "left";
    if (v200) {
      var v190 = outputWindow.document;
      var v518 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v416 = v518 + lineOfText$$2;
      var v191 = v416 + "\n";
      introspect(JAM.policy.p16) {
        v190.write(v191);
      }
    } else {
      var v199 = numberPosition$$2 == "right";
      if (v199) {
        var v192 = outputWindow.document;
        var v417 = lineOfText$$2 + i$$7;
        var v193 = v417 + "\n";
        introspect(JAM.policy.p16) {
          v192.write(v193);
        }
      } else {
        var v198 = numberPosition$$2 == "above";
        if (v198) {
          var v194 = outputWindow.document;
          var v195 = aboveNum$$1 + "\n";
          introspect(JAM.policy.p16) {
            v194.write(v195);
          }
          var v196 = outputWindow.document;
          var v197 = lineOfText$$2 + "\n";
          introspect(JAM.policy.p16) {
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
  var v578 = sequence$$13.length;
  var v519 = v578 <= firstIndexToMutate;
  var v579 = !v519;
  if (v579) {
    v519 = lastIndexToMutate < 0;
  }
  var v418 = v519;
  var v520 = !v418;
  if (v520) {
    v418 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v202 = v418;
  if (v202) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v210 = i$$8 < numMut;
  for (;v210;) {
    maxNum = sequence$$13.length;
    var v419 = Math.random();
    var v203 = v419 * maxNum;
    introspect(JAM.policy.p17) {
      randNum = Math.floor(v203);
    }
    var v420 = randNum < firstIndexToMutate;
    var v521 = !v420;
    if (v521) {
      v420 = randNum > lastIndexToMutate;
    }
    var v204 = v420;
    if (v204) {
      numMut++;
      i$$8++;
      v210 = i$$8 < numMut;
      continue;
    }
    introspect(JAM.policy.p17) {
      currentChar = sequence$$13.charAt(randNum);
    }
    needNewChar = true;
    for (;needNewChar;) {
      var v421 = Math.random();
      var v422 = components$$1.length;
      var v205 = v421 * v422;
      introspect(JAM.policy.p17) {
        componentsIndex = Math.round(v205);
      }
      var v423 = components$$1.length;
      var v206 = componentsIndex == v423;
      if (v206) {
        componentsIndex = 0;
      }
      var v424 = components$$1[componentsIndex];
      var v207 = v424 != currentChar;
      if (v207) {
        needNewChar = false;
      }
    }
    introspect(JAM.policy.p13) {
      var v425 = sequence$$13.substring(0, randNum)
    }
    var v426 = components$$1[componentsIndex];
    var v208 = v425 + v426;
    var v427 = randNum + 1;
    var v428 = sequence$$13.length;
    introspect(JAM.policy.p27) {
      var v209 = sequence$$13.substring(v427, v428)
    }
    sequence$$13 = v208 + v209;
    i$$8++;
    v210 = i$$8 < numMut;
  }
  var v211 = outputWindow.document;
  var v212 = addReturns(sequence$$13);
  introspect(JAM.policy.p16) {
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
    var v429 = Math.random();
    var v430 = components$$2.length;
    var v213 = v429 * v430;
    introspect(JAM.policy.p17) {
      tempNum$$1 = Math.floor(v213);
    }
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v431 = sequence$$14.length;
    var v216 = v431 == 60;
    if (v216) {
      var v214 = outputWindow.document;
      var v215 = sequence$$14 + "\n";
      introspect(JAM.policy.p16) {
        v214.write(v215);
      }
      sequence$$14 = "";
    }
    j$$9++;
    v217 = j$$9 < lengthOut$$1;
  }
  var v218 = outputWindow.document;
  var v219 = sequence$$14 + "\n";
  introspect(JAM.policy.p16) {
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
    var v580 = sequence$$15.length;
    var v522 = v580 - lookAhead;
    var v523 = sequence$$15.length;
    introspect(JAM.policy.p27) {
      var v432 = sequence$$15.substring(v522, v523)
    }
    var v221 = v432 + sequence$$15;
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
  var v581 = '<tr><td class="title" width="200px">' + "Site:";
  var v524 = v581 + '</td><td class="title">';
  var v433 = v524 + "Positions:";
  var v226 = v433 + "</td></tr>\n";
  introspect(JAM.policy.p16) {
    v225.write(v226);
  }
  var i$$9 = 0;
  var v434 = arrayOfItems.length;
  var v242 = i$$9 < v434;
  for (;v242;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v435 = arrayOfItems[i$$9];
    introspect(JAM.policy.p17) {
      var v227 = v435.match(/\/.+\//)
    }
    matchExp = v227 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    var v582 = arrayOfItems[i$$9];
    introspect(JAM.policy.p17) {
      var v525 = v582.match(/\)\D*\d+/)
    }
    var v436 = v525.toString();
    introspect(JAM.policy.p15) {
      var v228 = v436.replace(/\)\D*/, "")
    }
    cutDistance = parseFloat(v228);
    introspect(JAM.policy.p16) {
      var v234 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    for (;v234;) {
      var v229 = matchExp.lastIndex;
      matchPosition = v229 - cutDistance;
      var v437 = matchPosition >= lowerLimit;
      if (v437) {
        v437 = matchPosition < upperLimit;
      }
      var v232 = v437;
      if (v232) {
        timesFound++;
        var v230 = tempString$$1 + ", ";
        var v438 = matchPosition - shiftValue;
        var v231 = v438 + 1;
        tempString$$1 = v230 + v231;
      }
      var v439 = matchExp.lastIndex;
      var v526 = RegExp.lastMatch;
      var v440 = v526.length;
      var v233 = v439 - v440;
      matchExp.lastIndex = v233 + 1;
      introspect(JAM.policy.p16) {
        v234 = matchArray$$1 = matchExp.exec(sequence$$15);
      }
    }
    introspect(JAM.policy.p17) {
      var v441 = tempString$$1.search(/\d/)
    }
    var v235 = v441 != -1;
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
    var v680 = '<tr><td class="' + backGroundClass;
    var v662 = v680 + '">';
    var v700 = arrayOfItems[i$$9];
    introspect(JAM.policy.p17) {
      var v691 = v700.match(/\([^\(]+\)/)
    }
    var v681 = v691.toString();
    introspect(JAM.policy.p15) {
      var v663 = v681.replace(/\(|\)/g, "")
    }
    var v644 = v662 + v663;
    var v621 = v644 + '</td><td class="';
    var v583 = v621 + backGroundClass;
    var v527 = v583 + '">';
    var v442 = v527 + tempString$$1;
    var v241 = v442 + "</td></tr>\n";
    introspect(JAM.policy.p16) {
      v240.write(v241);
    }
    timesFound = 0;
    i$$9++;
    var v443 = arrayOfItems.length;
    v242 = i$$9 < v443;
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
  var v645 = '<tr><td class="title">' + "Pattern:";
  var v622 = v645 + '</td><td class="title">';
  var v584 = v622 + "Times found:";
  var v528 = v584 + '</td><td class="title">';
  var v444 = v528 + "Percentage:";
  var v246 = v444 + "</td></tr>\n";
  introspect(JAM.policy.p16) {
    v245.write(v246);
  }
  var i$$10 = 0;
  var v445 = arrayOfItems$$1.length;
  var v255 = i$$10 < v445;
  for (;v255;) {
    var tempNumber = 0;
    var v446 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p17) {
      var v247 = v446.match(/\/[^\/]+\//)
    }
    var matchExp$$1 = v247 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    introspect(JAM.policy.p16) {
      var v447 = sequence$$16.search(matchExp$$1)
    }
    var v249 = v447 != -1;
    if (v249) {
      introspect(JAM.policy.p16) {
        var v248 = sequence$$16.match(matchExp$$1)
      }
      tempNumber = v248.length;
    }
    var percentage = 0;
    var v529 = originalLength + 1;
    var v623 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p17) {
      var v585 = v623.match(/\d+/)
    }
    var v530 = parseFloat(v585);
    var v448 = v529 - v530;
    var v252 = v448 > 0;
    if (v252) {
      var v250 = 100 * tempNumber;
      var v449 = originalLength + 1;
      var v586 = arrayOfItems$$1[i$$10];
      introspect(JAM.policy.p17) {
        var v531 = v586.match(/\d+/)
      }
      var v450 = parseFloat(v531);
      var v251 = v449 - v450;
      percentage = v250 / v251;
    }
    var v253 = outputWindow.document;
    var v701 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p17) {
      var v692 = v701.match(/\([^\(]+\)\b/)
    }
    var v682 = v692.toString();
    introspect(JAM.policy.p15) {
      var v664 = v682.replace(/\(|\)/g, "")
    }
    var v646 = "<tr><td>" + v664;
    var v624 = v646 + "</td><td>";
    var v587 = v624 + tempNumber;
    var v532 = v587 + "</td><td>";
    introspect(JAM.policy.p11) {
      var v533 = percentage.toFixed(2)
    }
    var v451 = v532 + v533;
    var v254 = v451 + "</td></tr>\n";
    introspect(JAM.policy.p16) {
      v253.write(v254);
    }
    i$$10++;
    var v452 = arrayOfItems$$1.length;
    v255 = i$$10 < v452;
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
  var v453 = sequence$$17.length;
  var v263 = v453 > 0;
  for (;v263;) {
    maxNum$$1 = sequence$$17.length;
    var v454 = Math.random();
    var v257 = v454 * maxNum$$1;
    introspect(JAM.policy.p17) {
      randNum$$1 = Math.floor(v257);
    }
    introspect(JAM.policy.p17) {
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
    var v455 = tempSeq.length;
    var v262 = v455 == 60;
    if (v262) {
      var v260 = outputWindow.document;
      var v261 = tempSeq + "\n";
      introspect(JAM.policy.p16) {
        v260.write(v261);
      }
      tempSeq = "";
    }
    var v456 = sequence$$17.length;
    v263 = v456 > 0;
  }
  var v264 = outputWindow.document;
  var v265 = tempSeq + "\n";
  introspect(JAM.policy.p16) {
    v264.write(v265);
  }
  return true;
}
function groupProtein(theDocument) {
  JAM.startProfile('compute');

  var newProtein = "";
  var title$$9 = "";
  var maxInput$$3 = 1E5;
  var v457 = testScript();
  var v266 = v457 == false;
  if (v266) {
    return false;
  }
  var v665 = theDocument.forms;
  var v647 = v665[0];
  var v625 = v647.elements;
  var v588 = v625[0];
  var v534 = checkFormElement(v588);
  var v458 = v534 == false;
  var v536 = !v458;
  if (v536) {
    var v683 = theDocument.forms;
    var v666 = v683[0];
    var v648 = v666.elements;
    var v626 = v648[0];
    var v589 = v626.value;
    var v535 = checkSequenceLength(v589, maxInput$$3);
    v458 = v535 == false;
  }
  var v267 = v458;
  if (v267) {
    return false;
  }
  openWindow("Group Protein");
  openPre();
  var v627 = theDocument.forms;
  var v590 = v627[0];
  var v537 = v590.elements;
  var v459 = v537[0];
  var v268 = v459.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v268);
  var i$$11 = 0;
  var v460 = arrayOfFasta$$1.length;
  var v278 = i$$11 < v460;
  for (;v278;) {
    var v269 = arrayOfFasta$$1[i$$11];
    newProtein = getSequenceFromFasta(v269);
    var v270 = arrayOfFasta$$1[i$$11];
    title$$9 = getTitleFromFasta(v270);
    newProtein = removeNonProtein(newProtein);
    var v271 = outputWindow.document;
    var v272 = getInfoFromTitleAndSequence(title$$9, newProtein);
    introspect(JAM.policy.p16) {
      v271.write(v272);
    }
    var v667 = theDocument.forms;
    var v649 = v667[0];
    var v628 = v649.elements;
    var v591 = v628[4];
    var v538 = v591.options;
    var v668 = theDocument.forms;
    var v650 = v668[0];
    var v629 = v650.elements;
    var v592 = v629[4];
    var v539 = v592.selectedIndex;
    var v461 = v538[v539];
    var v273 = v461.value;
    var v669 = theDocument.forms;
    var v651 = v669[0];
    var v630 = v651.elements;
    var v593 = v630[5];
    var v540 = v593.options;
    var v670 = theDocument.forms;
    var v652 = v670[0];
    var v631 = v652.elements;
    var v594 = v631[5];
    var v541 = v594.selectedIndex;
    var v462 = v540[v541];
    var v274 = v462.value;
    var v275 = newProtein.length;
    var v671 = theDocument.forms;
    var v653 = v671[0];
    var v632 = v653.elements;
    var v595 = v632[6];
    var v542 = v595.options;
    var v672 = theDocument.forms;
    var v654 = v672[0];
    var v633 = v654.elements;
    var v596 = v633[6];
    var v543 = v596.selectedIndex;
    var v463 = v542[v543];
    var v276 = v463.value;
    writeGroupNumProtein(newProtein, "", v273, v274, 0, v275, v276);
    var v277 = outputWindow.document;
    introspect(JAM.policy.p9) {
      v277.write("\n\n");
    }
    i$$11++;
    var v464 = arrayOfFasta$$1.length;
    v278 = i$$11 < v464;
  }
  closePre();
  closeWindow();

  JAM.stopProfile('compute');
  return true;
}
document.onload = v2;
introspect(JAM.policy.p9) {
  var v279 = document.getElementById("submitbtn")
}
v279.onclick = v3;
introspect(JAM.policy.p9) {
  var v280 = document.getElementById("clearbtn")
}
v280.onclick = v4

JAM.stopProfile('load');
