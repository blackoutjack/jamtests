function v4() {
  var v544 = document.forms;
  var v467 = v544[0];
  var v280 = v467.elements;
  var v5 = v280[0];
  v5.value = " ";
  return;
}
function v3() {
  try {
    combineFasta();
  } catch (e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    alert(v6);
  }
  return;
}
function v2() {
  var v281 = document.main_form;
  var v7 = v281.main_submit;
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
  var v282 = arrayOfSequences.length;
  var v9 = v282 < 2;
  if (v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v283 = arrayOfTitles.length;
  var v11 = i$$1 < v283;
  for (;v11;) {
    var v593 = arrayOfTitles[i$$1];
    introspect(JAM.policy.p17) {
      var v545 = v593.search(/\S/)
    }
    var v468 = v545 == -1;
    var v547 = !v468;
    if (v547) {
      var v594 = arrayOfSequences[i$$1];
      introspect(JAM.policy.p17) {
        var v546 = v594.search(/\S/)
      }
      v468 = v546 == -1;
    }
    var v284 = v468;
    var v470 = !v284;
    if (v470) {
      var v548 = arrayOfSequences[i$$1];
      var v469 = v548.length;
      v284 = v469 != lengthOfAlign;
    }
    var v10 = v284;
    if (v10) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v285 = arrayOfTitles.length;
    v11 = i$$1 < v285;
  }
  return true;
}
function checkCodonTable(codonTable) {
  introspect(JAM.policy.p17) {
    var v628 = codonTable.search(/AmAcid/)
  }
  var v595 = v628 == -1;
  var v630 = !v595;
  if (v630) {
    introspect(JAM.policy.p17) {
      var v629 = codonTable.search(/Codon/)
    }
    v595 = v629 == -1;
  }
  var v549 = v595;
  var v597 = !v549;
  if (v597) {
    introspect(JAM.policy.p17) {
      var v596 = codonTable.search(/Number/)
    }
    v549 = v596 == -1;
  }
  var v471 = v549;
  var v551 = !v471;
  if (v551) {
    introspect(JAM.policy.p17) {
      var v550 = codonTable.search(/\/1000/)
    }
    v471 = v550 == -1;
  }
  var v286 = v471;
  var v473 = !v286;
  if (v473) {
    introspect(JAM.policy.p17) {
      var v472 = codonTable.search(/Fraction\s*\.\./)
    }
    v286 = v472 == -1;
  }
  var v12 = v286;
  if (v12) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v474 = formElement.value;
  introspect(JAM.policy.p17) {
    var v287 = v474.search(/\S/)
  }
  var v13 = v287 == -1;
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
  var v288 = arrayOfPatterns.length;
  var v16 = z$$2 < v288;
  for (;v16;) {
    var v475 = arrayOfPatterns[z$$2];
    introspect(JAM.policy.p17) {
      var v289 = v475.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/)
    }
    var v14 = v289 == -1;
    if (v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v476 = arrayOfPatterns[z$$2];
    var v290 = moreExpressionCheck(v476);
    var v15 = v290 == false;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v291 = arrayOfPatterns.length;
    v16 = z$$2 < v291;
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v292 = arrayOfPatterns.length;
  var v22 = j < v292;
  for (;v22;) {
    var v477 = arrayOfPatterns[j];
    introspect(JAM.policy.p17) {
      var v293 = v477.match(/\/.+\//)
    }
    var v19 = v293 + "gi";
    var v717 = eval(v19);
    geneticCodeMatchExp[j] = v717;
    var v294 = arrayOfPatterns[j];
    introspect(JAM.policy.p17) {
      var v20 = v294.match(/=[a-zA-Z\*]/)
    }
    var v718 = v20.toString();
    geneticCodeMatchResult[j] = v718;
    var v21 = geneticCodeMatchResult[j];
    introspect(JAM.policy.p15) {
      var v719 = v21.replace(/=/g, "")
    }
    geneticCodeMatchResult[j] = v719;
    j++;
    var v295 = arrayOfPatterns.length;
    v22 = j < v295;
  }
  var i$$2 = 0;
  var v478 = testSequence.length;
  var v296 = v478 - 3;
  var v29 = i$$2 <= v296;
  for (;v29;) {
    var v23 = i$$2 + 3;
    introspect(JAM.policy.p15) {
      codon = testSequence.substring(i$$2, v23);
    }
    j = 0;
    var v297 = geneticCodeMatchExp.length;
    var v27 = j < v297;
    for (;v27;) {
      var v479 = geneticCodeMatchExp[j];
      introspect(JAM.policy.p16) {
        var v298 = codon.search(v479)
      }
      var v26 = v298 != -1;
      if (v26) {
        var v25 = oneMatch == true;
        if (v25) {
          var v299 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v24 = v299 + ".";
          alert(v24);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v300 = geneticCodeMatchExp.length;
      v27 = j < v300;
    }
    var v28 = oneMatch == false;
    if (v28) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v480 = testSequence.length;
    var v301 = v480 - 3;
    v29 = i$$2 <= v301;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v302 = arrayOfPatterns$$1.length;
  var v31 = z$$3 < v302;
  for (;v31;) {
    var v481 = arrayOfPatterns$$1[z$$3];
    introspect(JAM.policy.p17) {
      var v303 = v481.search(/[^acdefghiklmnpqrstvwyz]/i)
    }
    var v30 = v303 != -1;
    if (v30) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v304 = arrayOfPatterns$$1.length;
    v31 = z$$3 < v304;
  }
  var i$$3 = 0;
  var v305 = arrayOfPatterns$$1.length;
  var v35 = i$$3 < v305;
  for (;v35;) {
    var v482 = arrayOfPatterns$$1[i$$3];
    var v306 = "[" + v482;
    var v32 = v306 + "]";
    var re = new RegExp(v32, "gi");
    var j$$1 = i$$3 + 1;
    var v307 = arrayOfPatterns$$1.length;
    var v34 = j$$1 < v307;
    for (;v34;) {
      var v483 = arrayOfPatterns$$1[j$$1];
      introspect(JAM.policy.p16) {
        var v308 = v483.search(re)
      }
      var v33 = v308 != -1;
      if (v33) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v309 = arrayOfPatterns$$1.length;
      v34 = j$$1 < v309;
    }
    i$$3++;
    var v310 = arrayOfPatterns$$1.length;
    v35 = i$$3 < v310;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v311 = arrayOfPatterns$$2.length;
  var v38 = z$$4 < v311;
  for (;v38;) {
    var v484 = arrayOfPatterns$$2[z$$4];
    introspect(JAM.policy.p17) {
      var v312 = v484.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i)
    }
    var v36 = v312 == -1;
    if (v36) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v485 = arrayOfPatterns$$2[z$$4];
    var v313 = moreExpressionCheck(v485);
    var v37 = v313 == false;
    if (v37) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v314 = arrayOfPatterns$$2.length;
    v38 = z$$4 < v314;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v552 = getSequenceFromFasta(text$$7);
  introspect(JAM.policy.p15) {
    var v486 = v552.replace(/[^A-Za-z]/g, "")
  }
  var v315 = v486.length;
  var v40 = v315 > maxInput;
  if (v40) {
    var v316 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v39 = v316 + " characters.";
    alert(v39);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v317 = text$$8.length;
  var v42 = v317 > maxInput$$1;
  if (v42) {
    var v318 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v41 = v318 + " characters.";
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
  var v319 = alignArray.length;
  var v49 = v319 < 3;
  if (v49) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v320 = alignArray.length;
  var v51 = i$$4 < v320;
  for (;v51;) {
    var v487 = alignArray[i$$4];
    introspect(JAM.policy.p17) {
      var v321 = v487.search(/[^\s]+\s/)
    }
    var v50 = v321 == -1;
    if (v50) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v322 = alignArray.length;
    v51 = i$$4 < v322;
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
    var v323 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v54 = v323 != -1;
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
  var v324 = sequence$$2.length;
  var v55 = "&gt;results for " + v324;
  var stringToReturn = v55 + " residue sequence ";
  introspect(JAM.policy.p17) {
    var v325 = fastaSequenceTitle.search(/[^\s]/)
  }
  var v57 = v325 != -1;
  if (v57) {
    var v326 = stringToReturn + '"';
    var v56 = v326 + fastaSequenceTitle;
    stringToReturn = v56 + '"';
  }
  var v327 = stringToReturn + ' starting "';
  introspect(JAM.policy.p13) {
    var v328 = sequence$$2.substring(0, 10)
  }
  var v58 = v327 + v328;
  stringToReturn = v58 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v329 = sequenceOne.length;
  var v59 = "Search results for " + v329;
  var stringToReturn$$1 = v59 + " residue sequence ";
  introspect(JAM.policy.p17) {
    var v330 = fastaSequenceTitleOne.search(/[^\s]/)
  }
  var v61 = v330 != -1;
  if (v61) {
    var v331 = stringToReturn$$1 + '"';
    var v60 = v331 + fastaSequenceTitleOne;
    stringToReturn$$1 = v60 + '"';
  }
  var v332 = stringToReturn$$1 + ' starting "';
  introspect(JAM.policy.p13) {
    var v333 = sequenceOne.substring(0, 10)
  }
  var v62 = v332 + v333;
  stringToReturn$$1 = v62 + '"\n';
  var v334 = stringToReturn$$1 + "and ";
  var v335 = sequenceTwo.length;
  var v63 = v334 + v335;
  stringToReturn$$1 = v63 + " residue sequence ";
  introspect(JAM.policy.p17) {
    var v336 = fastaSequenceTitleTwo.search(/[^\s]/)
  }
  var v65 = v336 != -1;
  if (v65) {
    var v337 = stringToReturn$$1 + '"';
    var v64 = v337 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v64 + '"';
  }
  var v338 = stringToReturn$$1 + ' starting "';
  introspect(JAM.policy.p13) {
    var v339 = sequenceTwo.substring(0, 10)
  }
  var v66 = v338 + v339;
  stringToReturn$$1 = v66 + '"';
  var v67 = '<div class="info">' + stringToReturn$$1;
  return v67 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v68 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v68);
  var j$$2 = 0;
  var v340 = arrayOfPatterns$$3.length;
  var v70 = j$$2 < v340;
  for (;v70;) {
    var v488 = arrayOfPatterns$$3[j$$2];
    introspect(JAM.policy.p17) {
      var v341 = v488.match(/\/.+\//)
    }
    var v69 = v341 + "gi";
    var v720 = eval(v69);
    geneticCodeMatchExp$$1[j$$2] = v720;
    j$$2++;
    var v342 = arrayOfPatterns$$3.length;
    v70 = j$$2 < v342;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v71 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v71);
  var j$$3 = 0;
  var v343 = arrayOfPatterns$$4.length;
  var v74 = j$$3 < v343;
  for (;v74;) {
    var v344 = arrayOfPatterns$$4[j$$3];
    introspect(JAM.policy.p17) {
      var v72 = v344.match(/=[a-zA-Z\*]/)
    }
    var v721 = v72.toString();
    geneticCodeMatchResult$$1[j$$3] = v721;
    var v73 = geneticCodeMatchResult$$1[j$$3];
    introspect(JAM.policy.p15) {
      var v722 = v73.replace(/=/g, "")
    }
    geneticCodeMatchResult$$1[j$$3] = v722;
    j$$3++;
    var v345 = arrayOfPatterns$$4.length;
    v74 = j$$3 < v345;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v346 = sequence$$3.length;
  var v75 = "Results for " + v346;
  var stringToReturn$$2 = v75 + " residue sequence ";
  introspect(JAM.policy.p17) {
    var v347 = fastaSequenceTitle$$1.search(/[^\s]/)
  }
  var v77 = v347 != -1;
  if (v77) {
    var v348 = stringToReturn$$2 + '"';
    var v76 = v348 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v76 + '"';
  }
  var v349 = stringToReturn$$2 + ' starting "';
  introspect(JAM.policy.p13) {
    var v350 = sequence$$3.substring(0, 10)
  }
  var v78 = v349 + v350;
  stringToReturn$$2 = v78 + '"';
  var v79 = '<div class="info">' + stringToReturn$$2;
  return v79 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v489 = "Results for " + topology;
  var v351 = v489 + " ";
  var v352 = sequence$$4.length;
  var v80 = v351 + v352;
  var stringToReturn$$3 = v80 + " residue sequence ";
  introspect(JAM.policy.p17) {
    var v353 = fastaSequenceTitle$$2.search(/[^\s]/)
  }
  var v82 = v353 != -1;
  if (v82) {
    var v354 = stringToReturn$$3 + '"';
    var v81 = v354 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v81 + '"';
  }
  var v355 = stringToReturn$$3 + ' starting "';
  introspect(JAM.policy.p13) {
    var v356 = sequence$$4.substring(0, 10)
  }
  var v83 = v355 + v356;
  stringToReturn$$3 = v83 + '"';
  var v84 = '<div class="info">' + stringToReturn$$3;
  return v84 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v357 = sequenceOne$$1.length;
  var v85 = "Alignment results for " + v357;
  var stringToReturn$$4 = v85 + " residue sequence ";
  introspect(JAM.policy.p17) {
    var v358 = fastaSequenceTitleOne$$1.search(/[^\s]/)
  }
  var v87 = v358 != -1;
  if (v87) {
    var v359 = stringToReturn$$4 + '"';
    var v86 = v359 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v86 + '"';
  }
  var v360 = stringToReturn$$4 + ' starting "';
  introspect(JAM.policy.p13) {
    var v361 = sequenceOne$$1.substring(0, 10)
  }
  var v88 = v360 + v361;
  stringToReturn$$4 = v88 + '"\n';
  var v362 = stringToReturn$$4 + "and ";
  var v363 = sequenceTwo$$1.length;
  var v89 = v362 + v363;
  stringToReturn$$4 = v89 + " residue sequence ";
  introspect(JAM.policy.p17) {
    var v364 = fastaSequenceTitleTwo$$1.search(/[^\s]/)
  }
  var v91 = v364 != -1;
  if (v91) {
    var v365 = stringToReturn$$4 + '"';
    var v90 = v365 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v90 + '"';
  }
  var v366 = stringToReturn$$4 + ' starting "';
  introspect(JAM.policy.p13) {
    var v367 = sequenceTwo$$1.substring(0, 10)
  }
  var v92 = v366 + v367;
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
    var v368 = Math.random();
    var v369 = components.length;
    var v94 = v368 * v369;
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
  introspect(JAM.policy.p11) {
    return sequenceArray.join("");
  }
}
function getSequenceFromFasta(sequenceRecord) {
  introspect(JAM.policy.p17) {
    var v370 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v96 = v370 != -1;
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
    var v371 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v98 = v371 != -1;
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
    var v695 = expressionToCheck.search(/\[[A-Za-z\|]*\[/)
  }
  var v688 = v695 != -1;
  var v697 = !v688;
  if (v697) {
    introspect(JAM.policy.p17) {
      var v696 = expressionToCheck.search(/\][A-Za-z\|]*\]/)
    }
    v688 = v696 != -1;
  }
  var v679 = v688;
  var v690 = !v679;
  if (v690) {
    introspect(JAM.policy.p17) {
      var v689 = expressionToCheck.search(/\[\]/)
    }
    v679 = v689 != -1;
  }
  var v670 = v679;
  var v681 = !v670;
  if (v681) {
    introspect(JAM.policy.p17) {
      var v680 = expressionToCheck.search(/\/[A-Za-z\|]*\]/)
    }
    v670 = v680 != -1;
  }
  var v659 = v670;
  var v672 = !v659;
  if (v672) {
    introspect(JAM.policy.p17) {
      var v671 = expressionToCheck.search(/\[[A-Za-z\|]*\//)
    }
    v659 = v671 != -1;
  }
  var v645 = v659;
  var v661 = !v645;
  if (v661) {
    introspect(JAM.policy.p17) {
      var v660 = expressionToCheck.search(/\|\|/)
    }
    v645 = v660 != -1;
  }
  var v631 = v645;
  var v647 = !v631;
  if (v647) {
    introspect(JAM.policy.p17) {
      var v646 = expressionToCheck.search(/\/\|/)
    }
    v631 = v646 != -1;
  }
  var v598 = v631;
  var v633 = !v598;
  if (v633) {
    introspect(JAM.policy.p17) {
      var v632 = expressionToCheck.search(/\|\//)
    }
    v598 = v632 != -1;
  }
  var v553 = v598;
  var v600 = !v553;
  if (v600) {
    introspect(JAM.policy.p17) {
      var v599 = expressionToCheck.search(/\[.\]/)
    }
    v553 = v599 != -1;
  }
  var v490 = v553;
  var v555 = !v490;
  if (v555) {
    introspect(JAM.policy.p17) {
      var v554 = expressionToCheck.search(/\</)
    }
    v490 = v554 != -1;
  }
  var v372 = v490;
  var v492 = !v372;
  if (v492) {
    introspect(JAM.policy.p17) {
      var v491 = expressionToCheck.search(/\>/)
    }
    v372 = v491 != -1;
  }
  var v99 = v372;
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
function openWindow() {
  var title$$5 = "Combine FASTA";
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
  var v556 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v493 = v556 + "<head>\n";
  var v373 = v493 + "<title>Sequence Manipulation Suite</title>\n";
  var v105 = v373 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  introspect(JAM.policy.p16) {
    v104.write(v105);
  }
  if (isColor) {
    var v106 = outputWindow.document;
    var v710 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v706 = v710 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v702 = v706 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v698 = v702 + "div.info {font-weight: bold}\n";
    var v691 = v698 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v682 = v691 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v673 = v682 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v662 = v673 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v648 = v662 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v634 = v648 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v601 = v634 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v557 = v601 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v494 = v557 + "td.many {color: #000000}\n";
    var v374 = v494 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v107 = v374 + "</style>\n";
    introspect(JAM.policy.p16) {
      v106.write(v107);
    }
  } else {
    var v108 = outputWindow.document;
    var v714 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v711 = v714 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v707 = v711 + "div.title {display: none}\n";
    var v703 = v707 + "div.info {font-weight: bold}\n";
    var v699 = v703 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v692 = v699 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v683 = v692 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v674 = v683 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v663 = v674 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v649 = v663 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v635 = v649 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v602 = v635 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v558 = v602 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v495 = v558 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v375 = v495 + "img {display: none}\n";
    var v109 = v375 + "</style>\n";
    introspect(JAM.policy.p16) {
      v108.write(v109);
    }
  }
  var v110 = outputWindow.document;
  var v559 = "</head>\n" + '<body class="main">\n';
  var v496 = v559 + '<div class="title">';
  var v376 = v496 + title$$6;
  var v111 = v376 + " results</div>\n";
  introspect(JAM.policy.p16) {
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
  var v560 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v497 = v560 + "<head>\n";
  var v377 = v497 + "<title>Sequence Manipulation Suite</title>\n";
  var v113 = v377 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  introspect(JAM.policy.p16) {
    v112.write(v113);
  }
  if (isBackground) {
    var v114 = outputWindow.document;
    var v712 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v708 = v712 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v704 = v708 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v700 = v704 + "div.info {font-weight: bold}\n";
    var v693 = v700 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v684 = v693 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v675 = v684 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v664 = v675 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v650 = v664 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v636 = v650 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v603 = v636 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v561 = v603 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v498 = v561 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v378 = v498 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v115 = v378 + "</style>\n";
    introspect(JAM.policy.p16) {
      v114.write(v115);
    }
  } else {
    var v116 = outputWindow.document;
    var v716 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v715 = v716 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v713 = v715 + "div.title {display: none}\n";
    var v709 = v713 + "div.info {font-weight: bold}\n";
    var v705 = v709 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v701 = v705 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v694 = v701 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v685 = v694 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v676 = v685 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v665 = v676 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v651 = v665 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v637 = v651 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v604 = v637 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v562 = v604 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v499 = v562 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v379 = v499 + "img {display: none}\n";
    var v117 = v379 + "</style>\n";
    introspect(JAM.policy.p16) {
      v116.write(v117);
    }
  }
  var v118 = outputWindow.document;
  var v563 = "</head>\n" + '<body class="main">\n';
  var v500 = v563 + '<div class="title">';
  var v380 = v500 + title$$8;
  var v119 = v380 + " results</div>\n";
  introspect(JAM.policy.p16) {
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
  introspect(JAM.policy.p17) {
    var v381 = dnaSequence$$1.search(/./)
  }
  var v120 = v381 != -1;
  if (v120) {
    introspect(JAM.policy.p17) {
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
  introspect(JAM.policy.p16) {
    testArray.push(testString);
  }
  var v382 = testArray[0];
  var v124 = v382 != testString;
  if (v124) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  introspect(JAM.policy.p16) {
    var v383 = testString.search(re$$2)
  }
  var v125 = v383 == -1;
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
    var v384 = testNum.toFixed(3)
  }
  var v128 = v384 != 2489.824;
  if (v128) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  introspect(JAM.policy.p9) {
    var v385 = testNum.toPrecision(5)
  }
  var v129 = v385 != 2489.8;
  if (v129) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  introspect(JAM.policy.p17) {
    var v386 = theNumber$$1.search(/\d/)
  }
  var v130 = v386 == -1;
  if (v130) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  introspect(JAM.policy.p17) {
    var v605 = emblFile.search(/ID/)
  }
  var v564 = v605 == -1;
  var v607 = !v564;
  if (v607) {
    introspect(JAM.policy.p17) {
      var v606 = emblFile.search(/AC/)
    }
    v564 = v606 == -1;
  }
  var v501 = v564;
  var v566 = !v501;
  if (v566) {
    introspect(JAM.policy.p17) {
      var v565 = emblFile.search(/DE/)
    }
    v501 = v565 == -1;
  }
  var v387 = v501;
  var v503 = !v387;
  if (v503) {
    introspect(JAM.policy.p17) {
      var v502 = emblFile.search(/SQ/)
    }
    v387 = v502 == -1;
  }
  var v131 = v387;
  if (v131) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  introspect(JAM.policy.p17) {
    var v388 = theNumber$$2.search(/\d/)
  }
  var v132 = v388 == -1;
  if (v132) {
    alert("Please enter a number.");
    return false;
  }
  var v134 = theNumber$$2 > maxInput$$2;
  if (v134) {
    var v389 = "Please enter a number less than or equal to " + maxInput$$2;
    var v133 = v389 + ".";
    alert(v133);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  introspect(JAM.policy.p17) {
    var v390 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i)
  }
  var v135 = v390 != -1;
  if (v135) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  introspect(JAM.policy.p17) {
    var v391 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i)
  }
  var v136 = v391 != -1;
  if (v136) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  introspect(JAM.policy.p17) {
    var v608 = genBankFile.search(/LOCUS/)
  }
  var v567 = v608 == -1;
  var v610 = !v567;
  if (v610) {
    introspect(JAM.policy.p17) {
      var v609 = genBankFile.search(/DEFINITION/)
    }
    v567 = v609 == -1;
  }
  var v504 = v567;
  var v569 = !v504;
  if (v569) {
    introspect(JAM.policy.p17) {
      var v568 = genBankFile.search(/ACCESSION/)
    }
    v504 = v568 == -1;
  }
  var v392 = v504;
  var v506 = !v392;
  if (v506) {
    introspect(JAM.policy.p17) {
      var v505 = genBankFile.search(/ORIGIN/)
    }
    v392 = v505 == -1;
  }
  var v137 = v392;
  if (v137) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  introspect(JAM.policy.p17) {
    var v611 = genBankFile$$1.search(/LOCUS/)
  }
  var v570 = v611 == -1;
  var v613 = !v570;
  if (v613) {
    introspect(JAM.policy.p17) {
      var v612 = genBankFile$$1.search(/DEFINITION/)
    }
    v570 = v612 == -1;
  }
  var v507 = v570;
  var v572 = !v507;
  if (v572) {
    introspect(JAM.policy.p17) {
      var v571 = genBankFile$$1.search(/ACCESSION/)
    }
    v507 = v571 == -1;
  }
  var v393 = v507;
  var v509 = !v393;
  if (v509) {
    introspect(JAM.policy.p17) {
      var v508 = genBankFile$$1.search(/ORIGIN/)
    }
    v393 = v508 == -1;
  }
  var v138 = v393;
  if (v138) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  introspect(JAM.policy.p17) {
    var v394 = genBankFile$$1.search(/FEATURES {13}/)
  }
  var v139 = v394 == -1;
  if (v139) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  introspect(JAM.policy.p17) {
    var v614 = emblFile$$1.search(/ID/)
  }
  var v573 = v614 == -1;
  var v616 = !v573;
  if (v616) {
    introspect(JAM.policy.p17) {
      var v615 = emblFile$$1.search(/AC/)
    }
    v573 = v615 == -1;
  }
  var v510 = v573;
  var v575 = !v510;
  if (v575) {
    introspect(JAM.policy.p17) {
      var v574 = emblFile$$1.search(/DE/)
    }
    v510 = v574 == -1;
  }
  var v395 = v510;
  var v512 = !v395;
  if (v512) {
    introspect(JAM.policy.p17) {
      var v511 = emblFile$$1.search(/SQ/)
    }
    v395 = v511 == -1;
  }
  var v140 = v395;
  if (v140) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  introspect(JAM.policy.p17) {
    var v396 = emblFile$$1.search(/^FT/m)
  }
  var v141 = v396 == -1;
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
    var v397 = basePerLine / groupSize;
    var v145 = j$$6 <= v397;
    for (;v145;) {
      var v144 = k < groupSize;
      for (;v144;) {
        var v398 = k + i$$5;
        introspect(JAM.policy.p16) {
          var v143 = text$$10.charAt(v398)
        }
        lineOfText = lineOfText + v143;
        k = k + 1;
        v144 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v399 = basePerLine / groupSize;
      v145 = j$$6 <= v399;
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
  writeGroupNumDnaSetStart(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition);
  return true;
}
function writeGroupNumDnaSetStart(text$$12, tabIn$$3, groupSize$$2, basePerLine$$2, startBase$$2, stopBase$$2, strands$$1, numberPosition$$1) {
  function adjustNumbering(original, adjustment) {
    var adjusted = original + adjustment;
    var v400 = adjustment < 0;
    if (v400) {
      v400 = adjusted >= 0;
    }
    var v149 = v400;
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
    var v401 = basePerLine$$2 / groupSize$$2;
    var v156 = j$$7 <= v401;
    for (;v156;) {
      var v152 = k$$1 < groupSize$$2;
      for (;v152;) {
        var v402 = i$$6 + k$$1;
        var v150 = v402 >= stopBase$$2;
        if (v150) {
          break;
        }
        var v403 = k$$1 + i$$6;
        introspect(JAM.policy.p16) {
          var v151 = text$$12.charAt(v403)
        }
        lineOfText$$1 = lineOfText$$1 + v151;
        k$$1 = k$$1 + 1;
        v152 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v154 = numberPosition$$1 == "above";
      if (v154) {
        var v404 = adjustNumbering(i$$6, numberingAdjustment);
        var v153 = rightNum(v404, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v153;
      }
      var v155 = i$$6 >= stopBase$$2;
      if (v155) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v405 = basePerLine$$2 / groupSize$$2;
      v156 = j$$7 <= v405;
    }
    var v179 = numberPosition$$1 == "left";
    if (v179) {
      var v157 = outputWindow.document;
      var v576 = adjustNumbering(lineNum, numberingAdjustment);
      var v513 = rightNum(v576, "", 8, tabIn$$3);
      var v406 = v513 + lineOfText$$1;
      var v158 = v406 + "\n";
      introspect(JAM.policy.p16) {
        v157.write(v158);
      }
      var v162 = strands$$1 == "two";
      if (v162) {
        var v159 = outputWindow.document;
        var v577 = adjustNumbering(lineNum, numberingAdjustment);
        var v514 = rightNum(v577, "", 8, tabIn$$3);
        var v515 = complement(lineOfText$$1);
        var v407 = v514 + v515;
        var v160 = v407 + "\n";
        introspect(JAM.policy.p16) {
          v159.write(v160);
        }
        var v161 = outputWindow.document;
        introspect(JAM.policy.p11) {
          v161.write("\n");
        }
      }
    } else {
      var v178 = numberPosition$$1 == "right";
      if (v178) {
        var v163 = outputWindow.document;
        var v516 = adjustNumbering(i$$6, numberingAdjustment);
        var v408 = lineOfText$$1 + v516;
        var v164 = v408 + "\n";
        introspect(JAM.policy.p16) {
          v163.write(v164);
        }
        var v168 = strands$$1 == "two";
        if (v168) {
          var v165 = outputWindow.document;
          var v517 = complement(lineOfText$$1);
          var v518 = adjustNumbering(i$$6, numberingAdjustment);
          var v409 = v517 + v518;
          var v166 = v409 + "\n";
          introspect(JAM.policy.p16) {
            v165.write(v166);
          }
          var v167 = outputWindow.document;
          introspect(JAM.policy.p11) {
            v167.write("\n");
          }
        }
      } else {
        var v177 = numberPosition$$1 == "above";
        if (v177) {
          var v169 = outputWindow.document;
          var v170 = aboveNum + "\n";
          introspect(JAM.policy.p16) {
            v169.write(v170);
          }
          var v171 = outputWindow.document;
          var v172 = lineOfText$$1 + "\n";
          introspect(JAM.policy.p16) {
            v171.write(v172);
          }
          var v176 = strands$$1 == "two";
          if (v176) {
            var v173 = outputWindow.document;
            var v410 = complement(lineOfText$$1);
            var v174 = v410 + "\n";
            introspect(JAM.policy.p16) {
              v173.write(v174);
            }
            var v175 = outputWindow.document;
            introspect(JAM.policy.p11) {
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
    var v411 = basePerLine$$3 / groupSize$$3;
    var v187 = j$$8 <= v411;
    for (;v187;) {
      var v183 = k$$2 < groupSize$$3;
      for (;v183;) {
        var v412 = i$$7 + k$$2;
        var v181 = v412 >= stopBase$$3;
        if (v181) {
          break;
        }
        var v413 = k$$2 + i$$7;
        introspect(JAM.policy.p16) {
          var v182 = text$$13.charAt(v413)
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
      var v414 = basePerLine$$3 / groupSize$$3;
      v187 = j$$8 <= v414;
    }
    var v198 = numberPosition$$2 == "left";
    if (v198) {
      var v188 = outputWindow.document;
      var v519 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v415 = v519 + lineOfText$$2;
      var v189 = v415 + "\n";
      introspect(JAM.policy.p16) {
        v188.write(v189);
      }
    } else {
      var v197 = numberPosition$$2 == "right";
      if (v197) {
        var v190 = outputWindow.document;
        var v416 = lineOfText$$2 + i$$7;
        var v191 = v416 + "\n";
        introspect(JAM.policy.p16) {
          v190.write(v191);
        }
      } else {
        var v196 = numberPosition$$2 == "above";
        if (v196) {
          var v192 = outputWindow.document;
          var v193 = aboveNum$$1 + "\n";
          introspect(JAM.policy.p16) {
            v192.write(v193);
          }
          var v194 = outputWindow.document;
          var v195 = lineOfText$$2 + "\n";
          introspect(JAM.policy.p16) {
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
  var v578 = sequence$$13.length;
  var v520 = v578 <= firstIndexToMutate;
  var v579 = !v520;
  if (v579) {
    v520 = lastIndexToMutate < 0;
  }
  var v417 = v520;
  var v521 = !v417;
  if (v521) {
    v417 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v200 = v417;
  if (v200) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v208 = i$$8 < numMut;
  for (;v208;) {
    maxNum = sequence$$13.length;
    var v418 = Math.random();
    var v201 = v418 * maxNum;
    introspect(JAM.policy.p17) {
      randNum = Math.floor(v201);
    }
    var v419 = randNum < firstIndexToMutate;
    var v522 = !v419;
    if (v522) {
      v419 = randNum > lastIndexToMutate;
    }
    var v202 = v419;
    if (v202) {
      numMut++;
      i$$8++;
      v208 = i$$8 < numMut;
      continue;
    }
    introspect(JAM.policy.p17) {
      currentChar = sequence$$13.charAt(randNum);
    }
    needNewChar = true;
    for (;needNewChar;) {
      var v420 = Math.random();
      var v421 = components$$1.length;
      var v203 = v420 * v421;
      introspect(JAM.policy.p17) {
        componentsIndex = Math.round(v203);
      }
      var v422 = components$$1.length;
      var v204 = componentsIndex == v422;
      if (v204) {
        componentsIndex = 0;
      }
      var v423 = components$$1[componentsIndex];
      var v205 = v423 != currentChar;
      if (v205) {
        needNewChar = false;
      }
    }
    introspect(JAM.policy.p13) {
      var v424 = sequence$$13.substring(0, randNum)
    }
    var v425 = components$$1[componentsIndex];
    var v206 = v424 + v425;
    var v426 = randNum + 1;
    var v427 = sequence$$13.length;
    introspect(JAM.policy.p27) {
      var v207 = sequence$$13.substring(v426, v427)
    }
    sequence$$13 = v206 + v207;
    i$$8++;
    v208 = i$$8 < numMut;
  }
  var v209 = outputWindow.document;
  var v210 = addReturns(sequence$$13);
  introspect(JAM.policy.p16) {
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
    var v428 = Math.random();
    var v429 = components$$2.length;
    var v211 = v428 * v429;
    introspect(JAM.policy.p17) {
      tempNum$$1 = Math.floor(v211);
    }
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v430 = sequence$$14.length;
    var v214 = v430 == 60;
    if (v214) {
      var v212 = outputWindow.document;
      var v213 = sequence$$14 + "\n";
      introspect(JAM.policy.p16) {
        v212.write(v213);
      }
      sequence$$14 = "";
    }
    j$$9++;
    v215 = j$$9 < lengthOut$$1;
  }
  var v216 = outputWindow.document;
  var v217 = sequence$$14 + "\n";
  introspect(JAM.policy.p16) {
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
    var v580 = sequence$$15.length;
    var v523 = v580 - lookAhead;
    var v524 = sequence$$15.length;
    introspect(JAM.policy.p27) {
      var v431 = sequence$$15.substring(v523, v524)
    }
    var v219 = v431 + sequence$$15;
    introspect(JAM.policy.p13) {
      var v220 = sequence$$15.substring(0, lookAhead)
    }
    sequence$$15 = v219 + v220;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v222 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v222.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  }
  var v223 = outputWindow.document;
  var v581 = '<tr><td class="title" width="200px">' + "Site:";
  var v525 = v581 + '</td><td class="title">';
  var v432 = v525 + "Positions:";
  var v224 = v432 + "</td></tr>\n";
  introspect(JAM.policy.p16) {
    v223.write(v224);
  }
  var i$$9 = 0;
  var v433 = arrayOfItems.length;
  var v240 = i$$9 < v433;
  for (;v240;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v434 = arrayOfItems[i$$9];
    introspect(JAM.policy.p17) {
      var v225 = v434.match(/\/.+\//)
    }
    matchExp = v225 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    var v582 = arrayOfItems[i$$9];
    introspect(JAM.policy.p17) {
      var v526 = v582.match(/\)\D*\d+/)
    }
    var v435 = v526.toString();
    introspect(JAM.policy.p15) {
      var v226 = v435.replace(/\)\D*/, "")
    }
    cutDistance = parseFloat(v226);
    introspect(JAM.policy.p16) {
      var v232 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    for (;v232;) {
      var v227 = matchExp.lastIndex;
      matchPosition = v227 - cutDistance;
      var v436 = matchPosition >= lowerLimit;
      if (v436) {
        v436 = matchPosition < upperLimit;
      }
      var v230 = v436;
      if (v230) {
        timesFound++;
        var v228 = tempString$$1 + ", ";
        var v437 = matchPosition - shiftValue;
        var v229 = v437 + 1;
        tempString$$1 = v228 + v229;
      }
      var v438 = matchExp.lastIndex;
      var v527 = RegExp.lastMatch;
      var v439 = v527.length;
      var v231 = v438 - v439;
      matchExp.lastIndex = v231 + 1;
      introspect(JAM.policy.p16) {
        v232 = matchArray$$1 = matchExp.exec(sequence$$15);
      }
    }
    introspect(JAM.policy.p17) {
      var v440 = tempString$$1.search(/\d/)
    }
    var v233 = v440 != -1;
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
    var v666 = '<tr><td class="' + backGroundClass;
    var v652 = v666 + '">';
    var v686 = arrayOfItems[i$$9];
    introspect(JAM.policy.p17) {
      var v677 = v686.match(/\([^\(]+\)/)
    }
    var v667 = v677.toString();
    introspect(JAM.policy.p15) {
      var v653 = v667.replace(/\(|\)/g, "")
    }
    var v638 = v652 + v653;
    var v617 = v638 + '</td><td class="';
    var v583 = v617 + backGroundClass;
    var v528 = v583 + '">';
    var v441 = v528 + tempString$$1;
    var v239 = v441 + "</td></tr>\n";
    introspect(JAM.policy.p16) {
      v238.write(v239);
    }
    timesFound = 0;
    i$$9++;
    var v442 = arrayOfItems.length;
    v240 = i$$9 < v442;
  }
  var v241 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v241.write("</tbody></table>\n");
  }
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v242 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v242.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  }
  var v243 = outputWindow.document;
  var v639 = '<tr><td class="title">' + "Pattern:";
  var v618 = v639 + '</td><td class="title">';
  var v584 = v618 + "Times found:";
  var v529 = v584 + '</td><td class="title">';
  var v443 = v529 + "Percentage:";
  var v244 = v443 + "</td></tr>\n";
  introspect(JAM.policy.p16) {
    v243.write(v244);
  }
  var i$$10 = 0;
  var v444 = arrayOfItems$$1.length;
  var v253 = i$$10 < v444;
  for (;v253;) {
    var tempNumber = 0;
    var v445 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p17) {
      var v245 = v445.match(/\/[^\/]+\//)
    }
    var matchExp$$1 = v245 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    introspect(JAM.policy.p16) {
      var v446 = sequence$$16.search(matchExp$$1)
    }
    var v247 = v446 != -1;
    if (v247) {
      introspect(JAM.policy.p16) {
        var v246 = sequence$$16.match(matchExp$$1)
      }
      tempNumber = v246.length;
    }
    var percentage = 0;
    var v530 = originalLength + 1;
    var v619 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p17) {
      var v585 = v619.match(/\d+/)
    }
    var v531 = parseFloat(v585);
    var v447 = v530 - v531;
    var v250 = v447 > 0;
    if (v250) {
      var v248 = 100 * tempNumber;
      var v448 = originalLength + 1;
      var v586 = arrayOfItems$$1[i$$10];
      introspect(JAM.policy.p17) {
        var v532 = v586.match(/\d+/)
      }
      var v449 = parseFloat(v532);
      var v249 = v448 - v449;
      percentage = v248 / v249;
    }
    var v251 = outputWindow.document;
    var v687 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p17) {
      var v678 = v687.match(/\([^\(]+\)\b/)
    }
    var v668 = v678.toString();
    introspect(JAM.policy.p15) {
      var v654 = v668.replace(/\(|\)/g, "")
    }
    var v640 = "<tr><td>" + v654;
    var v620 = v640 + "</td><td>";
    var v587 = v620 + tempNumber;
    var v533 = v587 + "</td><td>";
    introspect(JAM.policy.p9) {
      var v534 = percentage.toFixed(2)
    }
    var v450 = v533 + v534;
    var v252 = v450 + "</td></tr>\n";
    introspect(JAM.policy.p16) {
      v251.write(v252);
    }
    i$$10++;
    var v451 = arrayOfItems$$1.length;
    v253 = i$$10 < v451;
  }
  var v254 = outputWindow.document;
  introspect(JAM.policy.p11) {
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
  var v452 = sequence$$17.length;
  var v261 = v452 > 0;
  for (;v261;) {
    maxNum$$1 = sequence$$17.length;
    var v453 = Math.random();
    var v255 = v453 * maxNum$$1;
    introspect(JAM.policy.p17) {
      randNum$$1 = Math.floor(v255);
    }
    introspect(JAM.policy.p17) {
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
    var v454 = tempSeq.length;
    var v260 = v454 == 60;
    if (v260) {
      var v258 = outputWindow.document;
      var v259 = tempSeq + "\n";
      introspect(JAM.policy.p16) {
        v258.write(v259);
      }
      tempSeq = "";
    }
    var v455 = sequence$$17.length;
    v261 = v455 > 0;
  }
  var v262 = outputWindow.document;
  var v263 = tempSeq + "\n";
  introspect(JAM.policy.p16) {
    v262.write(v263);
  }
  return true;
}
function combineFasta() {
  var theDocument = document;
  var maxInput$$3 = 5E5;
  var sequenceCount = 0;
  var sequences = new Array;
  var v456 = testScript();
  var v264 = v456 == false;
  if (v264) {
    return;
  }
  var v655 = theDocument.forms;
  var v641 = v655[0];
  var v621 = v641.elements;
  var v588 = v621[0];
  var v535 = checkFormElement(v588);
  var v457 = v535 == false;
  var v537 = !v457;
  if (v537) {
    var v669 = theDocument.forms;
    var v656 = v669[0];
    var v642 = v656.elements;
    var v622 = v642[0];
    var v589 = v622.value;
    var v536 = checkTextLength(v589, maxInput$$3);
    v457 = v536 == false;
  }
  var v265 = v457;
  if (v265) {
    return;
  }
  var v623 = theDocument.forms;
  var v590 = v623[0];
  var v538 = v590.elements;
  var v458 = v538[0];
  var v266 = v458.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v266);
  var i$$11 = 0;
  var v459 = arrayOfFasta$$1.length;
  var v268 = i$$11 < v459;
  for (;v268;) {
    var v539 = arrayOfFasta$$1[i$$11];
    var v460 = getSequenceFromFasta(v539);
    var v267 = removeNonLetters(v460);
    introspect(JAM.policy.p16) {
      sequences.push(v267);
    }
    i$$11++;
    var v461 = arrayOfFasta$$1.length;
    v268 = i$$11 < v461;
  }
  introspect(JAM.policy.p11) {
    var sequence$$18 = sequences.join("")
  }
  openWindow();
  openPre();
  var v462 = sequences.length;
  var v275 = v462 == 1;
  if (v275) {
    var v269 = outputWindow.document;
    var v657 = sequence$$18.length;
    var v643 = "&gt;results for " + v657;
    var v624 = v643 + " residue sequence made from ";
    var v625 = sequences.length;
    var v591 = v624 + v625;
    var v540 = v591 + ' records, starting "';
    introspect(JAM.policy.p13) {
      var v541 = sequence$$18.substring(0, 10)
    }
    var v463 = v540 + v541;
    var v270 = v463 + '"\n';
    introspect(JAM.policy.p16) {
      v269.write(v270);
    }
  } else {
    var v464 = sequences.length;
    var v274 = v464 > 1;
    if (v274) {
      var v271 = outputWindow.document;
      var v658 = sequence$$18.length;
      var v644 = "&gt;results for " + v658;
      var v626 = v644 + " residue sequence made from ";
      var v627 = sequences.length;
      var v592 = v626 + v627;
      var v542 = v592 + ' records, starting "';
      introspect(JAM.policy.p13) {
        var v543 = sequence$$18.substring(0, 10)
      }
      var v465 = v542 + v543;
      var v272 = v465 + '"\n';
      introspect(JAM.policy.p16) {
        v271.write(v272);
      }
    } else {
      var v273 = outputWindow.document;
      introspect(JAM.policy.p11) {
        v273.write('<div class="info">No sequence records were read</div>\n');
      }
    }
  }
  var v276 = outputWindow.document;
  var v466 = addReturns(sequence$$18);
  var v277 = v466 + "\n";
  introspect(JAM.policy.p16) {
    v276.write(v277);
  }
  closePre();
  closeWindow();
  return;
}
document.onload = v2;
introspect(JAM.policy.p11) {
  var v278 = document.getElementById("submitbtn")
}
v278.onclick = v3;
introspect(JAM.policy.p11) {
  var v279 = document.getElementById("clearbtn")
}
v279.onclick = v4
