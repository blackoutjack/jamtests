function v4() {
  var v543 = document.forms;
  var v466 = v543[0];
  var v282 = v466.elements;
  var v5 = v282[0];
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
  var v283 = document.main_form;
  var v7 = v283.main_submit;
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
  var v284 = arrayOfSequences.length;
  var v9 = v284 < 2;
  if (v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v285 = arrayOfTitles.length;
  var v11 = i$$1 < v285;
  for (;v11;) {
    var v594 = arrayOfTitles[i$$1];
    introspect(JAM.policy.p18) {
      var v544 = v594.search(/\S/)
    }
    var v467 = v544 == -1;
    var v546 = !v467;
    if (v546) {
      var v595 = arrayOfSequences[i$$1];
      introspect(JAM.policy.p18) {
        var v545 = v595.search(/\S/)
      }
      v467 = v545 == -1;
    }
    var v286 = v467;
    var v469 = !v286;
    if (v469) {
      var v547 = arrayOfSequences[i$$1];
      var v468 = v547.length;
      v286 = v468 != lengthOfAlign;
    }
    var v10 = v286;
    if (v10) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v287 = arrayOfTitles.length;
    v11 = i$$1 < v287;
  }
  return true;
}
function checkCodonTable(codonTable) {
  introspect(JAM.policy.p18) {
    var v629 = codonTable.search(/AmAcid/)
  }
  var v596 = v629 == -1;
  var v631 = !v596;
  if (v631) {
    introspect(JAM.policy.p18) {
      var v630 = codonTable.search(/Codon/)
    }
    v596 = v630 == -1;
  }
  var v548 = v596;
  var v598 = !v548;
  if (v598) {
    introspect(JAM.policy.p18) {
      var v597 = codonTable.search(/Number/)
    }
    v548 = v597 == -1;
  }
  var v470 = v548;
  var v550 = !v470;
  if (v550) {
    introspect(JAM.policy.p18) {
      var v549 = codonTable.search(/\/1000/)
    }
    v470 = v549 == -1;
  }
  var v288 = v470;
  var v472 = !v288;
  if (v472) {
    introspect(JAM.policy.p18) {
      var v471 = codonTable.search(/Fraction\s*\.\./)
    }
    v288 = v471 == -1;
  }
  var v12 = v288;
  if (v12) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v473 = formElement.value;
  introspect(JAM.policy.p18) {
    var v289 = v473.search(/\S/)
  }
  var v13 = v289 == -1;
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
  var v290 = arrayOfPatterns.length;
  var v16 = z$$2 < v290;
  for (;v16;) {
    var v474 = arrayOfPatterns[z$$2];
    introspect(JAM.policy.p18) {
      var v291 = v474.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/)
    }
    var v14 = v291 == -1;
    if (v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v475 = arrayOfPatterns[z$$2];
    var v292 = moreExpressionCheck(v475);
    var v15 = v292 == false;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v293 = arrayOfPatterns.length;
    v16 = z$$2 < v293;
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v294 = arrayOfPatterns.length;
  var v22 = j < v294;
  for (;v22;) {
    var v476 = arrayOfPatterns[j];
    introspect(JAM.policy.p18) {
      var v295 = v476.match(/\/.+\//)
    }
    var v19 = v295 + "gi";
    var v727 = eval(v19);
    geneticCodeMatchExp[j] = v727;
    var v296 = arrayOfPatterns[j];
    introspect(JAM.policy.p18) {
      var v20 = v296.match(/=[a-zA-Z\*]/)
    }
    var v728 = v20.toString();
    geneticCodeMatchResult[j] = v728;
    var v21 = geneticCodeMatchResult[j];
    introspect(JAM.policy.p15) {
      var v729 = v21.replace(/=/g, "")
    }
    geneticCodeMatchResult[j] = v729;
    j++;
    var v297 = arrayOfPatterns.length;
    v22 = j < v297;
  }
  var i$$2 = 0;
  var v477 = testSequence.length;
  var v298 = v477 - 3;
  var v29 = i$$2 <= v298;
  for (;v29;) {
    var v23 = i$$2 + 3;
    introspect(JAM.policy.p15) {
      codon = testSequence.substring(i$$2, v23);
    }
    j = 0;
    var v299 = geneticCodeMatchExp.length;
    var v27 = j < v299;
    for (;v27;) {
      var v478 = geneticCodeMatchExp[j];
      introspect(JAM.policy.p17) {
        var v300 = codon.search(v478)
      }
      var v26 = v300 != -1;
      if (v26) {
        var v25 = oneMatch == true;
        if (v25) {
          var v301 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v24 = v301 + ".";
          alert(v24);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v302 = geneticCodeMatchExp.length;
      v27 = j < v302;
    }
    var v28 = oneMatch == false;
    if (v28) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v479 = testSequence.length;
    var v303 = v479 - 3;
    v29 = i$$2 <= v303;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v304 = arrayOfPatterns$$1.length;
  var v31 = z$$3 < v304;
  for (;v31;) {
    var v480 = arrayOfPatterns$$1[z$$3];
    introspect(JAM.policy.p18) {
      var v305 = v480.search(/[^acdefghiklmnpqrstvwyz]/i)
    }
    var v30 = v305 != -1;
    if (v30) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v306 = arrayOfPatterns$$1.length;
    v31 = z$$3 < v306;
  }
  var i$$3 = 0;
  var v307 = arrayOfPatterns$$1.length;
  var v35 = i$$3 < v307;
  for (;v35;) {
    var v481 = arrayOfPatterns$$1[i$$3];
    var v308 = "[" + v481;
    var v32 = v308 + "]";
    var re = new RegExp(v32, "gi");
    var j$$1 = i$$3 + 1;
    var v309 = arrayOfPatterns$$1.length;
    var v34 = j$$1 < v309;
    for (;v34;) {
      var v482 = arrayOfPatterns$$1[j$$1];
      introspect(JAM.policy.p17) {
        var v310 = v482.search(re)
      }
      var v33 = v310 != -1;
      if (v33) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v311 = arrayOfPatterns$$1.length;
      v34 = j$$1 < v311;
    }
    i$$3++;
    var v312 = arrayOfPatterns$$1.length;
    v35 = i$$3 < v312;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v313 = arrayOfPatterns$$2.length;
  var v38 = z$$4 < v313;
  for (;v38;) {
    var v483 = arrayOfPatterns$$2[z$$4];
    introspect(JAM.policy.p18) {
      var v314 = v483.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i)
    }
    var v36 = v314 == -1;
    if (v36) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v484 = arrayOfPatterns$$2[z$$4];
    var v315 = moreExpressionCheck(v484);
    var v37 = v315 == false;
    if (v37) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v316 = arrayOfPatterns$$2.length;
    v38 = z$$4 < v316;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v551 = getSequenceFromFasta(text$$7);
  introspect(JAM.policy.p15) {
    var v485 = v551.replace(/[^A-Za-z]/g, "")
  }
  var v317 = v485.length;
  var v40 = v317 > maxInput;
  if (v40) {
    var v318 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v39 = v318 + " characters.";
    alert(v39);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v319 = text$$8.length;
  var v42 = v319 > maxInput$$1;
  if (v42) {
    var v320 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v41 = v320 + " characters.";
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
  var v321 = alignArray.length;
  var v49 = v321 < 3;
  if (v49) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v322 = alignArray.length;
  var v51 = i$$4 < v322;
  for (;v51;) {
    var v486 = alignArray[i$$4];
    introspect(JAM.policy.p18) {
      var v323 = v486.search(/[^\s]+\s/)
    }
    var v50 = v323 == -1;
    if (v50) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v324 = alignArray.length;
    v51 = i$$4 < v324;
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
  introspect(JAM.policy.p18) {
    var v325 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v54 = v325 != -1;
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
  var v326 = sequence$$2.length;
  var v55 = "&gt;results for " + v326;
  var stringToReturn = v55 + " residue sequence ";
  introspect(JAM.policy.p18) {
    var v327 = fastaSequenceTitle.search(/[^\s]/)
  }
  var v57 = v327 != -1;
  if (v57) {
    var v328 = stringToReturn + '"';
    var v56 = v328 + fastaSequenceTitle;
    stringToReturn = v56 + '"';
  }
  var v329 = stringToReturn + ' starting "';
  introspect(JAM.policy.p14) {
    var v330 = sequence$$2.substring(0, 10)
  }
  var v58 = v329 + v330;
  stringToReturn = v58 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v331 = sequenceOne.length;
  var v59 = "Search results for " + v331;
  var stringToReturn$$1 = v59 + " residue sequence ";
  introspect(JAM.policy.p18) {
    var v332 = fastaSequenceTitleOne.search(/[^\s]/)
  }
  var v61 = v332 != -1;
  if (v61) {
    var v333 = stringToReturn$$1 + '"';
    var v60 = v333 + fastaSequenceTitleOne;
    stringToReturn$$1 = v60 + '"';
  }
  var v334 = stringToReturn$$1 + ' starting "';
  introspect(JAM.policy.p14) {
    var v335 = sequenceOne.substring(0, 10)
  }
  var v62 = v334 + v335;
  stringToReturn$$1 = v62 + '"\n';
  var v336 = stringToReturn$$1 + "and ";
  var v337 = sequenceTwo.length;
  var v63 = v336 + v337;
  stringToReturn$$1 = v63 + " residue sequence ";
  introspect(JAM.policy.p18) {
    var v338 = fastaSequenceTitleTwo.search(/[^\s]/)
  }
  var v65 = v338 != -1;
  if (v65) {
    var v339 = stringToReturn$$1 + '"';
    var v64 = v339 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v64 + '"';
  }
  var v340 = stringToReturn$$1 + ' starting "';
  introspect(JAM.policy.p14) {
    var v341 = sequenceTwo.substring(0, 10)
  }
  var v66 = v340 + v341;
  stringToReturn$$1 = v66 + '"';
  var v67 = '<div class="info">' + stringToReturn$$1;
  return v67 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v68 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v68);
  var j$$2 = 0;
  var v342 = arrayOfPatterns$$3.length;
  var v70 = j$$2 < v342;
  for (;v70;) {
    var v487 = arrayOfPatterns$$3[j$$2];
    introspect(JAM.policy.p18) {
      var v343 = v487.match(/\/.+\//)
    }
    var v69 = v343 + "gi";
    var v730 = eval(v69);
    geneticCodeMatchExp$$1[j$$2] = v730;
    j$$2++;
    var v344 = arrayOfPatterns$$3.length;
    v70 = j$$2 < v344;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v71 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v71);
  var j$$3 = 0;
  var v345 = arrayOfPatterns$$4.length;
  var v74 = j$$3 < v345;
  for (;v74;) {
    var v346 = arrayOfPatterns$$4[j$$3];
    introspect(JAM.policy.p18) {
      var v72 = v346.match(/=[a-zA-Z\*]/)
    }
    var v731 = v72.toString();
    geneticCodeMatchResult$$1[j$$3] = v731;
    var v73 = geneticCodeMatchResult$$1[j$$3];
    introspect(JAM.policy.p15) {
      var v732 = v73.replace(/=/g, "")
    }
    geneticCodeMatchResult$$1[j$$3] = v732;
    j$$3++;
    var v347 = arrayOfPatterns$$4.length;
    v74 = j$$3 < v347;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v348 = sequence$$3.length;
  var v75 = "Results for " + v348;
  var stringToReturn$$2 = v75 + " residue sequence ";
  introspect(JAM.policy.p18) {
    var v349 = fastaSequenceTitle$$1.search(/[^\s]/)
  }
  var v77 = v349 != -1;
  if (v77) {
    var v350 = stringToReturn$$2 + '"';
    var v76 = v350 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v76 + '"';
  }
  var v351 = stringToReturn$$2 + ' starting "';
  introspect(JAM.policy.p14) {
    var v352 = sequence$$3.substring(0, 10)
  }
  var v78 = v351 + v352;
  stringToReturn$$2 = v78 + '"';
  var v79 = '<div class="info">' + stringToReturn$$2;
  return v79 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v488 = "Results for " + topology;
  var v353 = v488 + " ";
  var v354 = sequence$$4.length;
  var v80 = v353 + v354;
  var stringToReturn$$3 = v80 + " residue sequence ";
  introspect(JAM.policy.p18) {
    var v355 = fastaSequenceTitle$$2.search(/[^\s]/)
  }
  var v82 = v355 != -1;
  if (v82) {
    var v356 = stringToReturn$$3 + '"';
    var v81 = v356 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v81 + '"';
  }
  var v357 = stringToReturn$$3 + ' starting "';
  introspect(JAM.policy.p14) {
    var v358 = sequence$$4.substring(0, 10)
  }
  var v83 = v357 + v358;
  stringToReturn$$3 = v83 + '"';
  var v84 = '<div class="info">' + stringToReturn$$3;
  return v84 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v359 = sequenceOne$$1.length;
  var v85 = "Alignment results for " + v359;
  var stringToReturn$$4 = v85 + " residue sequence ";
  introspect(JAM.policy.p18) {
    var v360 = fastaSequenceTitleOne$$1.search(/[^\s]/)
  }
  var v87 = v360 != -1;
  if (v87) {
    var v361 = stringToReturn$$4 + '"';
    var v86 = v361 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v86 + '"';
  }
  var v362 = stringToReturn$$4 + ' starting "';
  introspect(JAM.policy.p14) {
    var v363 = sequenceOne$$1.substring(0, 10)
  }
  var v88 = v362 + v363;
  stringToReturn$$4 = v88 + '"\n';
  var v364 = stringToReturn$$4 + "and ";
  var v365 = sequenceTwo$$1.length;
  var v89 = v364 + v365;
  stringToReturn$$4 = v89 + " residue sequence ";
  introspect(JAM.policy.p18) {
    var v366 = fastaSequenceTitleTwo$$1.search(/[^\s]/)
  }
  var v91 = v366 != -1;
  if (v91) {
    var v367 = stringToReturn$$4 + '"';
    var v90 = v367 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v90 + '"';
  }
  var v368 = stringToReturn$$4 + ' starting "';
  introspect(JAM.policy.p14) {
    var v369 = sequenceTwo$$1.substring(0, 10)
  }
  var v92 = v368 + v369;
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
    var v370 = Math.random();
    var v371 = components.length;
    var v94 = v370 * v371;
    introspect(JAM.policy.p18) {
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
  introspect(JAM.policy.p18) {
    var v372 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v96 = v372 != -1;
  if (v96) {
    introspect(JAM.policy.p15) {
      sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "");
    }
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  introspect(JAM.policy.p18) {
    var v373 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v98 = v373 != -1;
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
  introspect(JAM.policy.p18) {
    var v702 = expressionToCheck.search(/\[[A-Za-z\|]*\[/)
  }
  var v694 = v702 != -1;
  var v704 = !v694;
  if (v704) {
    introspect(JAM.policy.p18) {
      var v703 = expressionToCheck.search(/\][A-Za-z\|]*\]/)
    }
    v694 = v703 != -1;
  }
  var v683 = v694;
  var v696 = !v683;
  if (v696) {
    introspect(JAM.policy.p18) {
      var v695 = expressionToCheck.search(/\[\]/)
    }
    v683 = v695 != -1;
  }
  var v671 = v683;
  var v685 = !v671;
  if (v685) {
    introspect(JAM.policy.p18) {
      var v684 = expressionToCheck.search(/\/[A-Za-z\|]*\]/)
    }
    v671 = v684 != -1;
  }
  var v658 = v671;
  var v673 = !v658;
  if (v673) {
    introspect(JAM.policy.p18) {
      var v672 = expressionToCheck.search(/\[[A-Za-z\|]*\//)
    }
    v658 = v672 != -1;
  }
  var v645 = v658;
  var v660 = !v645;
  if (v660) {
    introspect(JAM.policy.p18) {
      var v659 = expressionToCheck.search(/\|\|/)
    }
    v645 = v659 != -1;
  }
  var v632 = v645;
  var v647 = !v632;
  if (v647) {
    introspect(JAM.policy.p18) {
      var v646 = expressionToCheck.search(/\/\|/)
    }
    v632 = v646 != -1;
  }
  var v599 = v632;
  var v634 = !v599;
  if (v634) {
    introspect(JAM.policy.p18) {
      var v633 = expressionToCheck.search(/\|\//)
    }
    v599 = v633 != -1;
  }
  var v552 = v599;
  var v601 = !v552;
  if (v601) {
    introspect(JAM.policy.p18) {
      var v600 = expressionToCheck.search(/\[.\]/)
    }
    v552 = v600 != -1;
  }
  var v489 = v552;
  var v554 = !v489;
  if (v554) {
    introspect(JAM.policy.p18) {
      var v553 = expressionToCheck.search(/\</)
    }
    v489 = v553 != -1;
  }
  var v374 = v489;
  var v491 = !v374;
  if (v491) {
    introspect(JAM.policy.p18) {
      var v490 = expressionToCheck.search(/\>/)
    }
    v374 = v490 != -1;
  }
  var v99 = v374;
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
  introspect(JAM.policy.p13) {
    outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  }
  outputWindow.focus();
  var v104 = outputWindow.document;
  var v555 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v492 = v555 + "<head>\n";
  var v375 = v492 + "<title>Sequence Manipulation Suite</title>\n";
  var v105 = v375 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  introspect(JAM.policy.p17) {
    v104.write(v105);
  }
  if (isColor) {
    var v106 = outputWindow.document;
    var v720 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v715 = v720 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v710 = v715 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v705 = v710 + "div.info {font-weight: bold}\n";
    var v697 = v705 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v686 = v697 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v674 = v686 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v661 = v674 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v648 = v661 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v635 = v648 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v602 = v635 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v556 = v602 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v493 = v556 + "td.many {color: #000000}\n";
    var v376 = v493 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v107 = v376 + "</style>\n";
    introspect(JAM.policy.p17) {
      v106.write(v107);
    }
  } else {
    var v108 = outputWindow.document;
    var v724 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v721 = v724 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v716 = v721 + "div.title {display: none}\n";
    var v711 = v716 + "div.info {font-weight: bold}\n";
    var v706 = v711 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v698 = v706 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v687 = v698 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v675 = v687 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v662 = v675 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v649 = v662 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v636 = v649 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v603 = v636 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v557 = v603 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v494 = v557 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v377 = v494 + "img {display: none}\n";
    var v109 = v377 + "</style>\n";
    introspect(JAM.policy.p17) {
      v108.write(v109);
    }
  }
  var v110 = outputWindow.document;
  var v558 = "</head>\n" + '<body class="main">\n';
  var v495 = v558 + '<div class="title">';
  var v378 = v495 + title$$6;
  var v111 = v378 + " results</div>\n";
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
  introspect(JAM.policy.p13) {
    outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  }
  outputWindow.focus();
  var v112 = outputWindow.document;
  var v559 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v496 = v559 + "<head>\n";
  var v379 = v496 + "<title>Sequence Manipulation Suite</title>\n";
  var v113 = v379 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  introspect(JAM.policy.p17) {
    v112.write(v113);
  }
  if (isBackground) {
    var v114 = outputWindow.document;
    var v722 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v717 = v722 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v712 = v717 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v707 = v712 + "div.info {font-weight: bold}\n";
    var v699 = v707 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v688 = v699 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v676 = v688 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v663 = v676 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v650 = v663 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v637 = v650 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v604 = v637 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v560 = v604 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v497 = v560 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v380 = v497 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v115 = v380 + "</style>\n";
    introspect(JAM.policy.p17) {
      v114.write(v115);
    }
  } else {
    var v116 = outputWindow.document;
    var v726 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v725 = v726 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v723 = v725 + "div.title {display: none}\n";
    var v718 = v723 + "div.info {font-weight: bold}\n";
    var v713 = v718 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v708 = v713 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v700 = v708 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v689 = v700 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v677 = v689 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v664 = v677 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v651 = v664 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v638 = v651 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v605 = v638 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v561 = v605 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v498 = v561 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v381 = v498 + "img {display: none}\n";
    var v117 = v381 + "</style>\n";
    introspect(JAM.policy.p17) {
      v116.write(v117);
    }
  }
  var v118 = outputWindow.document;
  var v562 = "</head>\n" + '<body class="main">\n';
  var v499 = v562 + '<div class="title">';
  var v382 = v499 + title$$8;
  var v119 = v382 + " results</div>\n";
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
  introspect(JAM.policy.p18) {
    var v383 = dnaSequence$$1.search(/./)
  }
  var v120 = v383 != -1;
  if (v120) {
    introspect(JAM.policy.p18) {
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
  var v384 = testArray[0];
  var v124 = v384 != testString;
  if (v124) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  introspect(JAM.policy.p17) {
    var v385 = testString.search(re$$2)
  }
  var v125 = v385 == -1;
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
    var v386 = testNum.toFixed(3)
  }
  var v128 = v386 != 2489.824;
  if (v128) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  introspect(JAM.policy.p9) {
    var v387 = testNum.toPrecision(5)
  }
  var v129 = v387 != 2489.8;
  if (v129) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  introspect(JAM.policy.p18) {
    var v388 = theNumber$$1.search(/\d/)
  }
  var v130 = v388 == -1;
  if (v130) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  introspect(JAM.policy.p18) {
    var v606 = emblFile.search(/ID/)
  }
  var v563 = v606 == -1;
  var v608 = !v563;
  if (v608) {
    introspect(JAM.policy.p18) {
      var v607 = emblFile.search(/AC/)
    }
    v563 = v607 == -1;
  }
  var v500 = v563;
  var v565 = !v500;
  if (v565) {
    introspect(JAM.policy.p18) {
      var v564 = emblFile.search(/DE/)
    }
    v500 = v564 == -1;
  }
  var v389 = v500;
  var v502 = !v389;
  if (v502) {
    introspect(JAM.policy.p18) {
      var v501 = emblFile.search(/SQ/)
    }
    v389 = v501 == -1;
  }
  var v131 = v389;
  if (v131) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  introspect(JAM.policy.p18) {
    var v390 = theNumber$$2.search(/\d/)
  }
  var v132 = v390 == -1;
  if (v132) {
    alert("Please enter a number.");
    return false;
  }
  var v134 = theNumber$$2 > maxInput$$2;
  if (v134) {
    var v391 = "Please enter a number less than or equal to " + maxInput$$2;
    var v133 = v391 + ".";
    alert(v133);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  introspect(JAM.policy.p18) {
    var v392 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i)
  }
  var v135 = v392 != -1;
  if (v135) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  introspect(JAM.policy.p18) {
    var v393 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i)
  }
  var v136 = v393 != -1;
  if (v136) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  introspect(JAM.policy.p18) {
    var v609 = genBankFile.search(/LOCUS/)
  }
  var v566 = v609 == -1;
  var v611 = !v566;
  if (v611) {
    introspect(JAM.policy.p18) {
      var v610 = genBankFile.search(/DEFINITION/)
    }
    v566 = v610 == -1;
  }
  var v503 = v566;
  var v568 = !v503;
  if (v568) {
    introspect(JAM.policy.p18) {
      var v567 = genBankFile.search(/ACCESSION/)
    }
    v503 = v567 == -1;
  }
  var v394 = v503;
  var v505 = !v394;
  if (v505) {
    introspect(JAM.policy.p18) {
      var v504 = genBankFile.search(/ORIGIN/)
    }
    v394 = v504 == -1;
  }
  var v137 = v394;
  if (v137) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  introspect(JAM.policy.p18) {
    var v612 = genBankFile$$1.search(/LOCUS/)
  }
  var v569 = v612 == -1;
  var v614 = !v569;
  if (v614) {
    introspect(JAM.policy.p18) {
      var v613 = genBankFile$$1.search(/DEFINITION/)
    }
    v569 = v613 == -1;
  }
  var v506 = v569;
  var v571 = !v506;
  if (v571) {
    introspect(JAM.policy.p18) {
      var v570 = genBankFile$$1.search(/ACCESSION/)
    }
    v506 = v570 == -1;
  }
  var v395 = v506;
  var v508 = !v395;
  if (v508) {
    introspect(JAM.policy.p18) {
      var v507 = genBankFile$$1.search(/ORIGIN/)
    }
    v395 = v507 == -1;
  }
  var v138 = v395;
  if (v138) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  introspect(JAM.policy.p18) {
    var v396 = genBankFile$$1.search(/FEATURES {13}/)
  }
  var v139 = v396 == -1;
  if (v139) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  introspect(JAM.policy.p18) {
    var v615 = emblFile$$1.search(/ID/)
  }
  var v572 = v615 == -1;
  var v617 = !v572;
  if (v617) {
    introspect(JAM.policy.p18) {
      var v616 = emblFile$$1.search(/AC/)
    }
    v572 = v616 == -1;
  }
  var v509 = v572;
  var v574 = !v509;
  if (v574) {
    introspect(JAM.policy.p18) {
      var v573 = emblFile$$1.search(/DE/)
    }
    v509 = v573 == -1;
  }
  var v397 = v509;
  var v511 = !v397;
  if (v511) {
    introspect(JAM.policy.p18) {
      var v510 = emblFile$$1.search(/SQ/)
    }
    v397 = v510 == -1;
  }
  var v140 = v397;
  if (v140) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  introspect(JAM.policy.p18) {
    var v398 = emblFile$$1.search(/^FT/m)
  }
  var v141 = v398 == -1;
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
    var v399 = basePerLine / groupSize;
    var v145 = j$$6 <= v399;
    for (;v145;) {
      var v144 = k < groupSize;
      for (;v144;) {
        var v400 = k + i$$5;
        introspect(JAM.policy.p17) {
          var v143 = text$$10.charAt(v400)
        }
        lineOfText = lineOfText + v143;
        k = k + 1;
        v144 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v401 = basePerLine / groupSize;
      v145 = j$$6 <= v401;
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
    var v402 = adjustment < 0;
    if (v402) {
      v402 = adjusted >= 0;
    }
    var v149 = v402;
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
    var v403 = basePerLine$$2 / groupSize$$2;
    var v158 = j$$7 <= v403;
    for (;v158;) {
      var v153 = k$$1 < groupSize$$2;
      for (;v153;) {
        var v404 = i$$6 + k$$1;
        var v150 = v404 >= stopBase$$2;
        if (v150) {
          break;
        }
        var v151 = lineOfText$$1;
        var v405 = k$$1 + i$$6;
        introspect(JAM.policy.p17) {
          var v152 = text$$12.charAt(v405)
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
        var v406 = adjustNumbering(i$$6, numberingAdjustment);
        var v155 = rightNum(v406, "", groupSize$$2, tabIn$$3);
        aboveNum = v154 + v155;
      }
      var v157 = i$$6 >= stopBase$$2;
      if (v157) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v407 = basePerLine$$2 / groupSize$$2;
      v158 = j$$7 <= v407;
    }
    var v181 = numberPosition$$1 == "left";
    if (v181) {
      var v159 = outputWindow.document;
      var v575 = adjustNumbering(lineNum, numberingAdjustment);
      var v512 = rightNum(v575, "", 8, tabIn$$3);
      var v408 = v512 + lineOfText$$1;
      var v160 = v408 + "\n";
      introspect(JAM.policy.p17) {
        v159.write(v160);
      }
      var v164 = strands$$1 == "two";
      if (v164) {
        var v161 = outputWindow.document;
        var v576 = adjustNumbering(lineNum, numberingAdjustment);
        var v513 = rightNum(v576, "", 8, tabIn$$3);
        var v514 = complement(lineOfText$$1);
        var v409 = v513 + v514;
        var v162 = v409 + "\n";
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
        var v515 = lineOfText$$1;
        var v516 = adjustNumbering(i$$6, numberingAdjustment);
        var v410 = v515 + v516;
        var v166 = v410 + "\n";
        introspect(JAM.policy.p17) {
          v165.write(v166);
        }
        var v170 = strands$$1 == "two";
        if (v170) {
          var v167 = outputWindow.document;
          var v517 = complement(lineOfText$$1);
          var v518 = adjustNumbering(i$$6, numberingAdjustment);
          var v411 = v517 + v518;
          var v168 = v411 + "\n";
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
            var v412 = complement(lineOfText$$1);
            var v176 = v412 + "\n";
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
    var v413 = basePerLine$$3 / groupSize$$3;
    var v189 = j$$8 <= v413;
    for (;v189;) {
      var v185 = k$$2 < groupSize$$3;
      for (;v185;) {
        var v414 = i$$7 + k$$2;
        var v183 = v414 >= stopBase$$3;
        if (v183) {
          break;
        }
        var v415 = k$$2 + i$$7;
        introspect(JAM.policy.p17) {
          var v184 = text$$13.charAt(v415)
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
      var v416 = basePerLine$$3 / groupSize$$3;
      v189 = j$$8 <= v416;
    }
    var v200 = numberPosition$$2 == "left";
    if (v200) {
      var v190 = outputWindow.document;
      var v519 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v417 = v519 + lineOfText$$2;
      var v191 = v417 + "\n";
      introspect(JAM.policy.p17) {
        v190.write(v191);
      }
    } else {
      var v199 = numberPosition$$2 == "right";
      if (v199) {
        var v192 = outputWindow.document;
        var v418 = lineOfText$$2 + i$$7;
        var v193 = v418 + "\n";
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
  var v577 = sequence$$13.length;
  var v520 = v577 <= firstIndexToMutate;
  var v578 = !v520;
  if (v578) {
    v520 = lastIndexToMutate < 0;
  }
  var v419 = v520;
  var v521 = !v419;
  if (v521) {
    v419 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v202 = v419;
  if (v202) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v210 = i$$8 < numMut;
  for (;v210;) {
    maxNum = sequence$$13.length;
    var v420 = Math.random();
    var v203 = v420 * maxNum;
    introspect(JAM.policy.p18) {
      randNum = Math.floor(v203);
    }
    var v421 = randNum < firstIndexToMutate;
    var v522 = !v421;
    if (v522) {
      v421 = randNum > lastIndexToMutate;
    }
    var v204 = v421;
    if (v204) {
      numMut++;
      i$$8++;
      v210 = i$$8 < numMut;
      continue;
    }
    introspect(JAM.policy.p18) {
      currentChar = sequence$$13.charAt(randNum);
    }
    needNewChar = true;
    for (;needNewChar;) {
      var v422 = Math.random();
      var v423 = components$$1.length;
      var v205 = v422 * v423;
      introspect(JAM.policy.p18) {
        componentsIndex = Math.round(v205);
      }
      var v424 = components$$1.length;
      var v206 = componentsIndex == v424;
      if (v206) {
        componentsIndex = 0;
      }
      var v425 = components$$1[componentsIndex];
      var v207 = v425 != currentChar;
      if (v207) {
        needNewChar = false;
      }
    }
    introspect(JAM.policy.p14) {
      var v426 = sequence$$13.substring(0, randNum)
    }
    var v427 = components$$1[componentsIndex];
    var v208 = v426 + v427;
    var v428 = randNum + 1;
    var v429 = sequence$$13.length;
    introspect(JAM.policy.p27) {
      var v209 = sequence$$13.substring(v428, v429)
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
    var v430 = Math.random();
    var v431 = components$$2.length;
    var v213 = v430 * v431;
    introspect(JAM.policy.p18) {
      tempNum$$1 = Math.floor(v213);
    }
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v432 = sequence$$14.length;
    var v216 = v432 == 60;
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
    introspect(JAM.policy.p14) {
      var v220 = sequence$$15.substring(0, lookAhead)
    }
    shiftValue = v220.length;
    var v579 = sequence$$15.length;
    var v523 = v579 - lookAhead;
    var v524 = sequence$$15.length;
    introspect(JAM.policy.p27) {
      var v433 = sequence$$15.substring(v523, v524)
    }
    var v221 = v433 + sequence$$15;
    introspect(JAM.policy.p14) {
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
  var v580 = '<tr><td class="title" width="200px">' + "Site:";
  var v525 = v580 + '</td><td class="title">';
  var v434 = v525 + "Positions:";
  var v226 = v434 + "</td></tr>\n";
  introspect(JAM.policy.p17) {
    v225.write(v226);
  }
  var i$$9 = 0;
  var v435 = arrayOfItems.length;
  var v242 = i$$9 < v435;
  for (;v242;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v436 = arrayOfItems[i$$9];
    introspect(JAM.policy.p18) {
      var v227 = v436.match(/\/.+\//)
    }
    matchExp = v227 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    var v581 = arrayOfItems[i$$9];
    introspect(JAM.policy.p18) {
      var v526 = v581.match(/\)\D*\d+/)
    }
    var v437 = v526.toString();
    introspect(JAM.policy.p15) {
      var v228 = v437.replace(/\)\D*/, "")
    }
    cutDistance = parseFloat(v228);
    introspect(JAM.policy.p17) {
      var v234 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    for (;v234;) {
      var v229 = matchExp.lastIndex;
      matchPosition = v229 - cutDistance;
      var v438 = matchPosition >= lowerLimit;
      if (v438) {
        v438 = matchPosition < upperLimit;
      }
      var v232 = v438;
      if (v232) {
        timesFound++;
        var v230 = tempString$$1 + ", ";
        var v439 = matchPosition - shiftValue;
        var v231 = v439 + 1;
        tempString$$1 = v230 + v231;
      }
      var v440 = matchExp.lastIndex;
      var v527 = RegExp.lastMatch;
      var v441 = v527.length;
      var v233 = v440 - v441;
      matchExp.lastIndex = v233 + 1;
      introspect(JAM.policy.p17) {
        v234 = matchArray$$1 = matchExp.exec(sequence$$15);
      }
    }
    introspect(JAM.policy.p18) {
      var v442 = tempString$$1.search(/\d/)
    }
    var v235 = v442 != -1;
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
    var v665 = '<tr><td class="' + backGroundClass;
    var v652 = v665 + '">';
    var v690 = arrayOfItems[i$$9];
    introspect(JAM.policy.p18) {
      var v678 = v690.match(/\([^\(]+\)/)
    }
    var v666 = v678.toString();
    introspect(JAM.policy.p15) {
      var v653 = v666.replace(/\(|\)/g, "")
    }
    var v639 = v652 + v653;
    var v618 = v639 + '</td><td class="';
    var v582 = v618 + backGroundClass;
    var v528 = v582 + '">';
    var v443 = v528 + tempString$$1;
    var v241 = v443 + "</td></tr>\n";
    introspect(JAM.policy.p17) {
      v240.write(v241);
    }
    timesFound = 0;
    i$$9++;
    var v444 = arrayOfItems.length;
    v242 = i$$9 < v444;
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
  var v640 = '<tr><td class="title">' + "Pattern:";
  var v619 = v640 + '</td><td class="title">';
  var v583 = v619 + "Times found:";
  var v529 = v583 + '</td><td class="title">';
  var v445 = v529 + "Percentage:";
  var v246 = v445 + "</td></tr>\n";
  introspect(JAM.policy.p17) {
    v245.write(v246);
  }
  var i$$10 = 0;
  var v446 = arrayOfItems$$1.length;
  var v255 = i$$10 < v446;
  for (;v255;) {
    var tempNumber = 0;
    var v447 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p18) {
      var v247 = v447.match(/\/[^\/]+\//)
    }
    var matchExp$$1 = v247 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    introspect(JAM.policy.p17) {
      var v448 = sequence$$16.search(matchExp$$1)
    }
    var v249 = v448 != -1;
    if (v249) {
      introspect(JAM.policy.p17) {
        var v248 = sequence$$16.match(matchExp$$1)
      }
      tempNumber = v248.length;
    }
    var percentage = 0;
    var v530 = originalLength + 1;
    var v620 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p18) {
      var v584 = v620.match(/\d+/)
    }
    var v531 = parseFloat(v584);
    var v449 = v530 - v531;
    var v252 = v449 > 0;
    if (v252) {
      var v250 = 100 * tempNumber;
      var v450 = originalLength + 1;
      var v585 = arrayOfItems$$1[i$$10];
      introspect(JAM.policy.p18) {
        var v532 = v585.match(/\d+/)
      }
      var v451 = parseFloat(v532);
      var v251 = v450 - v451;
      percentage = v250 / v251;
    }
    var v253 = outputWindow.document;
    var v691 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p18) {
      var v679 = v691.match(/\([^\(]+\)\b/)
    }
    var v667 = v679.toString();
    introspect(JAM.policy.p15) {
      var v654 = v667.replace(/\(|\)/g, "")
    }
    var v641 = "<tr><td>" + v654;
    var v621 = v641 + "</td><td>";
    var v586 = v621 + tempNumber;
    var v533 = v586 + "</td><td>";
    introspect(JAM.policy.p9) {
      var v534 = percentage.toFixed(2)
    }
    var v452 = v533 + v534;
    var v254 = v452 + "</td></tr>\n";
    introspect(JAM.policy.p17) {
      v253.write(v254);
    }
    i$$10++;
    var v453 = arrayOfItems$$1.length;
    v255 = i$$10 < v453;
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
  var v454 = sequence$$17.length;
  var v263 = v454 > 0;
  for (;v263;) {
    maxNum$$1 = sequence$$17.length;
    var v455 = Math.random();
    var v257 = v455 * maxNum$$1;
    introspect(JAM.policy.p18) {
      randNum$$1 = Math.floor(v257);
    }
    introspect(JAM.policy.p18) {
      tempChar$$2 = sequence$$17.charAt(randNum$$1);
    }
    tempSeq = tempSeq + tempChar$$2;
    introspect(JAM.policy.p14) {
      tempString1 = sequence$$17.substring(0, randNum$$1);
    }
    var v258 = randNum$$1 + 1;
    var v259 = sequence$$17.length;
    introspect(JAM.policy.p15) {
      tempString2 = sequence$$17.substring(v258, v259);
    }
    sequence$$17 = tempString1 + tempString2;
    var v456 = tempSeq.length;
    var v262 = v456 == 60;
    if (v262) {
      var v260 = outputWindow.document;
      var v261 = tempSeq + "\n";
      introspect(JAM.policy.p17) {
        v260.write(v261);
      }
      tempSeq = "";
    }
    var v457 = sequence$$17.length;
    v263 = v457 > 0;
  }
  var v264 = outputWindow.document;
  var v265 = tempSeq + "\n";
  introspect(JAM.policy.p17) {
    v264.write(v265);
  }
  return true;
}
function splitFasta(theDocument) {
  var maxInput$$3 = 5E5;
  var sequences = new Array;
  var v458 = testScript();
  var v266 = v458 == false;
  if (v266) {
    return false;
  }
  var v622 = theDocument.forms;
  var v587 = v622[0];
  var v535 = v587.elements;
  var v459 = v535[1];
  var v267 = v459.value;
  introspect(JAM.policy.p15) {
    var newLength = v267.replace(/[^\d]/g, "")
  }
  var v623 = theDocument.forms;
  var v588 = v623[0];
  var v536 = v588.elements;
  var v460 = v536[2];
  var v268 = v460.value;
  introspect(JAM.policy.p15) {
    var overlap = v268.replace(/[^\d]/g, "")
  }
  var v680 = theDocument.forms;
  var v668 = v680[0];
  var v655 = v668.elements;
  var v642 = v655[0];
  var v624 = checkFormElement(v642);
  var v589 = v624 == false;
  var v626 = !v589;
  if (v626) {
    var v692 = theDocument.forms;
    var v681 = v692[0];
    var v669 = v681.elements;
    var v656 = v669[0];
    var v643 = v656.value;
    var v625 = checkTextLength(v643, maxInput$$3);
    v589 = v625 == false;
  }
  var v537 = v589;
  var v591 = !v537;
  if (v591) {
    var v590 = verifyMaxDigits(newLength, maxInput$$3);
    v537 = v590 == false;
  }
  var v461 = v537;
  var v539 = !v461;
  if (v539) {
    var v538 = verifyMaxDigits(overlap, maxInput$$3);
    v461 = v538 == false;
  }
  var v269 = v461;
  if (v269) {
    return false;
  }
  newLength = parseInt(newLength);
  overlap = parseInt(overlap);
  openWindow("Split FASTA");
  openPre();
  var v627 = theDocument.forms;
  var v592 = v627[0];
  var v540 = v592.elements;
  var v462 = v540[0];
  var v270 = v462.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v270);
  var i$$11 = 0;
  var v463 = arrayOfFasta$$1.length;
  var v279 = i$$11 < v463;
  for (;v279;) {
    var v271 = arrayOfFasta$$1[i$$11];
    var sequence$$18 = getSequenceFromFasta(v271);
    sequence$$18 = removeNonLetters(sequence$$18);
    var v272 = arrayOfFasta$$1[i$$11];
    var title$$9 = getTitleFromFasta(v272);
    var length$$11 = sequence$$18.length;
    var seqCount = 1;
    var j$$10 = 0;
    var v278 = j$$10 < length$$11;
    for (;v278;) {
      var v273 = j$$10 > overlap;
      if (v273) {
        j$$10 = j$$10 - overlap;
      }
      var v274 = j$$10 + newLength;
      introspect(JAM.policy.p27) {
        var subseq = sequence$$18.substring(j$$10, v274)
      }
      var subseq_length = subseq.length;
      var start$$4 = j$$10 + 1;
      var v275 = start$$4 + subseq_length;
      var end$$1 = v275 - 1;
      var v276 = outputWindow.document;
      var v719 = ">fragment_" + seqCount;
      var v714 = v719 + ";";
      var v709 = v714 + title$$9;
      var v701 = v709 + "_start=";
      var v693 = v701 + start$$4;
      var v682 = v693 + ";end=";
      var v670 = v682 + end$$1;
      var v657 = v670 + ";length=";
      var v644 = v657 + subseq_length;
      var v628 = v644 + ";source_length=";
      var v593 = v628 + length$$11;
      var v541 = v593 + "\n";
      var v542 = addReturns(subseq);
      var v464 = v541 + v542;
      var v277 = v464 + "\n\n";
      introspect(JAM.policy.p17) {
        v276.write(v277);
      }
      seqCount++;
      j$$10 = j$$10 + newLength;
      v278 = j$$10 < length$$11;
    }
    i$$11++;
    var v465 = arrayOfFasta$$1.length;
    v279 = i$$11 < v465;
  }
  closePre();
  closeWindow();
  return true;
}
document.onload = v2;
introspect(JAM.policy.p11) {
  var v280 = document.getElementById("submitbtn")
}
v280.onclick = v3;
introspect(JAM.policy.p11) {
  var v281 = document.getElementById("clearbtn")
}
v281.onclick = v4
