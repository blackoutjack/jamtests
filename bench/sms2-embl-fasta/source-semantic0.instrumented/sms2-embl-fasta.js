function v4() {
  var v545 = document.forms;
  var v468 = v545[0];
  var v282 = v468.elements;
  var v5 = v282[0];
  v5.value = " ";
  return;
}
function v3() {
  try {
    emblFasta(document);
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
    introspect(JAM.policy.p17) {
      var v546 = v594.search(/\S/)
    }
    var v469 = v546 == -1;
    var v548 = !v469;
    if (v548) {
      var v595 = arrayOfSequences[i$$1];
      introspect(JAM.policy.p17) {
        var v547 = v595.search(/\S/)
      }
      v469 = v547 == -1;
    }
    var v286 = v469;
    var v471 = !v286;
    if (v471) {
      var v549 = arrayOfSequences[i$$1];
      var v470 = v549.length;
      v286 = v470 != lengthOfAlign;
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
  introspect(JAM.policy.p17) {
    var v626 = codonTable.search(/AmAcid/)
  }
  var v596 = v626 == -1;
  var v628 = !v596;
  if (v628) {
    introspect(JAM.policy.p17) {
      var v627 = codonTable.search(/Codon/)
    }
    v596 = v627 == -1;
  }
  var v550 = v596;
  var v598 = !v550;
  if (v598) {
    introspect(JAM.policy.p17) {
      var v597 = codonTable.search(/Number/)
    }
    v550 = v597 == -1;
  }
  var v472 = v550;
  var v552 = !v472;
  if (v552) {
    introspect(JAM.policy.p17) {
      var v551 = codonTable.search(/\/1000/)
    }
    v472 = v551 == -1;
  }
  var v288 = v472;
  var v474 = !v288;
  if (v474) {
    introspect(JAM.policy.p17) {
      var v473 = codonTable.search(/Fraction\s*\.\./)
    }
    v288 = v473 == -1;
  }
  var v12 = v288;
  if (v12) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v475 = formElement.value;
  introspect(JAM.policy.p17) {
    var v289 = v475.search(/\S/)
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
    var v476 = arrayOfPatterns[z$$2];
    introspect(JAM.policy.p17) {
      var v291 = v476.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/)
    }
    var v14 = v291 == -1;
    if (v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v477 = arrayOfPatterns[z$$2];
    var v292 = moreExpressionCheck(v477);
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
    var v478 = arrayOfPatterns[j];
    introspect(JAM.policy.p17) {
      var v295 = v478.match(/\/.+\//)
    }
    var v19 = v295 + "gi";
    var v716 = eval(v19);
    geneticCodeMatchExp[j] = v716;
    var v296 = arrayOfPatterns[j];
    introspect(JAM.policy.p17) {
      var v20 = v296.match(/=[a-zA-Z\*]/)
    }
    var v717 = v20.toString();
    geneticCodeMatchResult[j] = v717;
    var v21 = geneticCodeMatchResult[j];
    introspect(JAM.policy.p15) {
      var v718 = v21.replace(/=/g, "")
    }
    geneticCodeMatchResult[j] = v718;
    j++;
    var v297 = arrayOfPatterns.length;
    v22 = j < v297;
  }
  var i$$2 = 0;
  var v479 = testSequence.length;
  var v298 = v479 - 3;
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
      var v480 = geneticCodeMatchExp[j];
      introspect(JAM.policy.p16) {
        var v300 = codon.search(v480)
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
    var v481 = testSequence.length;
    var v303 = v481 - 3;
    v29 = i$$2 <= v303;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v304 = arrayOfPatterns$$1.length;
  var v31 = z$$3 < v304;
  for (;v31;) {
    var v482 = arrayOfPatterns$$1[z$$3];
    introspect(JAM.policy.p17) {
      var v305 = v482.search(/[^acdefghiklmnpqrstvwyz]/i)
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
    var v483 = arrayOfPatterns$$1[i$$3];
    var v308 = "[" + v483;
    var v32 = v308 + "]";
    var re = new RegExp(v32, "gi");
    var j$$1 = i$$3 + 1;
    var v309 = arrayOfPatterns$$1.length;
    var v34 = j$$1 < v309;
    for (;v34;) {
      var v484 = arrayOfPatterns$$1[j$$1];
      introspect(JAM.policy.p16) {
        var v310 = v484.search(re)
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
    var v485 = arrayOfPatterns$$2[z$$4];
    introspect(JAM.policy.p17) {
      var v314 = v485.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i)
    }
    var v36 = v314 == -1;
    if (v36) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v486 = arrayOfPatterns$$2[z$$4];
    var v315 = moreExpressionCheck(v486);
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
  var v553 = getSequenceFromFasta(text$$7);
  introspect(JAM.policy.p15) {
    var v487 = v553.replace(/[^A-Za-z]/g, "")
  }
  var v317 = v487.length;
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
function complement(dnaSequence$$1) {
  introspect(JAM.policy.p15) {
    dnaSequence$$1 = dnaSequence$$1.replace(/g/g, "1");
  }
  introspect(JAM.policy.p15) {
    dnaSequence$$1 = dnaSequence$$1.replace(/c/g, "2");
  }
  introspect(JAM.policy.p15) {
    dnaSequence$$1 = dnaSequence$$1.replace(/1/g, "c");
  }
  introspect(JAM.policy.p15) {
    dnaSequence$$1 = dnaSequence$$1.replace(/2/g, "g");
  }
  introspect(JAM.policy.p15) {
    dnaSequence$$1 = dnaSequence$$1.replace(/G/g, "1");
  }
  introspect(JAM.policy.p15) {
    dnaSequence$$1 = dnaSequence$$1.replace(/C/g, "2");
  }
  introspect(JAM.policy.p15) {
    dnaSequence$$1 = dnaSequence$$1.replace(/1/g, "C");
  }
  introspect(JAM.policy.p15) {
    dnaSequence$$1 = dnaSequence$$1.replace(/2/g, "G");
  }
  introspect(JAM.policy.p15) {
    dnaSequence$$1 = dnaSequence$$1.replace(/a/g, "1");
  }
  introspect(JAM.policy.p15) {
    dnaSequence$$1 = dnaSequence$$1.replace(/t/g, "2");
  }
  introspect(JAM.policy.p15) {
    dnaSequence$$1 = dnaSequence$$1.replace(/1/g, "t");
  }
  introspect(JAM.policy.p15) {
    dnaSequence$$1 = dnaSequence$$1.replace(/2/g, "a");
  }
  introspect(JAM.policy.p15) {
    dnaSequence$$1 = dnaSequence$$1.replace(/A/g, "1");
  }
  introspect(JAM.policy.p15) {
    dnaSequence$$1 = dnaSequence$$1.replace(/T/g, "2");
  }
  introspect(JAM.policy.p15) {
    dnaSequence$$1 = dnaSequence$$1.replace(/1/g, "T");
  }
  introspect(JAM.policy.p15) {
    dnaSequence$$1 = dnaSequence$$1.replace(/2/g, "A");
  }
  introspect(JAM.policy.p15) {
    dnaSequence$$1 = dnaSequence$$1.replace(/u/g, "a");
  }
  introspect(JAM.policy.p15) {
    dnaSequence$$1 = dnaSequence$$1.replace(/U/g, "A");
  }
  introspect(JAM.policy.p15) {
    dnaSequence$$1 = dnaSequence$$1.replace(/r/g, "1");
  }
  introspect(JAM.policy.p15) {
    dnaSequence$$1 = dnaSequence$$1.replace(/y/g, "2");
  }
  introspect(JAM.policy.p15) {
    dnaSequence$$1 = dnaSequence$$1.replace(/1/g, "y");
  }
  introspect(JAM.policy.p15) {
    dnaSequence$$1 = dnaSequence$$1.replace(/2/g, "r");
  }
  introspect(JAM.policy.p15) {
    dnaSequence$$1 = dnaSequence$$1.replace(/R/g, "1");
  }
  introspect(JAM.policy.p15) {
    dnaSequence$$1 = dnaSequence$$1.replace(/Y/g, "2");
  }
  introspect(JAM.policy.p15) {
    dnaSequence$$1 = dnaSequence$$1.replace(/1/g, "Y");
  }
  introspect(JAM.policy.p15) {
    dnaSequence$$1 = dnaSequence$$1.replace(/2/g, "R");
  }
  introspect(JAM.policy.p15) {
    dnaSequence$$1 = dnaSequence$$1.replace(/k/g, "1");
  }
  introspect(JAM.policy.p15) {
    dnaSequence$$1 = dnaSequence$$1.replace(/m/g, "2");
  }
  introspect(JAM.policy.p15) {
    dnaSequence$$1 = dnaSequence$$1.replace(/1/g, "m");
  }
  introspect(JAM.policy.p15) {
    dnaSequence$$1 = dnaSequence$$1.replace(/2/g, "k");
  }
  introspect(JAM.policy.p15) {
    dnaSequence$$1 = dnaSequence$$1.replace(/K/g, "1");
  }
  introspect(JAM.policy.p15) {
    dnaSequence$$1 = dnaSequence$$1.replace(/M/g, "2");
  }
  introspect(JAM.policy.p15) {
    dnaSequence$$1 = dnaSequence$$1.replace(/1/g, "M");
  }
  introspect(JAM.policy.p15) {
    dnaSequence$$1 = dnaSequence$$1.replace(/2/g, "K");
  }
  introspect(JAM.policy.p15) {
    dnaSequence$$1 = dnaSequence$$1.replace(/b/g, "1");
  }
  introspect(JAM.policy.p15) {
    dnaSequence$$1 = dnaSequence$$1.replace(/v/g, "2");
  }
  introspect(JAM.policy.p15) {
    dnaSequence$$1 = dnaSequence$$1.replace(/1/g, "v");
  }
  introspect(JAM.policy.p15) {
    dnaSequence$$1 = dnaSequence$$1.replace(/2/g, "b");
  }
  introspect(JAM.policy.p15) {
    dnaSequence$$1 = dnaSequence$$1.replace(/B/g, "1");
  }
  introspect(JAM.policy.p15) {
    dnaSequence$$1 = dnaSequence$$1.replace(/V/g, "2");
  }
  introspect(JAM.policy.p15) {
    dnaSequence$$1 = dnaSequence$$1.replace(/1/g, "V");
  }
  introspect(JAM.policy.p15) {
    dnaSequence$$1 = dnaSequence$$1.replace(/2/g, "B");
  }
  introspect(JAM.policy.p15) {
    dnaSequence$$1 = dnaSequence$$1.replace(/d/g, "1");
  }
  introspect(JAM.policy.p15) {
    dnaSequence$$1 = dnaSequence$$1.replace(/h/g, "2");
  }
  introspect(JAM.policy.p15) {
    dnaSequence$$1 = dnaSequence$$1.replace(/1/g, "h");
  }
  introspect(JAM.policy.p15) {
    dnaSequence$$1 = dnaSequence$$1.replace(/2/g, "d");
  }
  introspect(JAM.policy.p15) {
    dnaSequence$$1 = dnaSequence$$1.replace(/D/g, "1");
  }
  introspect(JAM.policy.p15) {
    dnaSequence$$1 = dnaSequence$$1.replace(/H/g, "2");
  }
  introspect(JAM.policy.p15) {
    dnaSequence$$1 = dnaSequence$$1.replace(/1/g, "H");
  }
  introspect(JAM.policy.p15) {
    dnaSequence$$1 = dnaSequence$$1.replace(/2/g, "D");
  }
  return dnaSequence$$1;
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
    var v488 = alignArray[i$$4];
    introspect(JAM.policy.p17) {
      var v323 = v488.search(/[^\s]+\s/)
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
  introspect(JAM.policy.p17) {
    var v325 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v54 = v325 != -1;
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
  var v326 = sequence$$2.length;
  var v55 = "&gt;results for " + v326;
  var stringToReturn = v55 + " residue sequence ";
  introspect(JAM.policy.p17) {
    var v327 = fastaSequenceTitle.search(/[^\s]/)
  }
  var v57 = v327 != -1;
  if (v57) {
    var v328 = stringToReturn + '"';
    var v56 = v328 + fastaSequenceTitle;
    stringToReturn = v56 + '"';
  }
  var v329 = stringToReturn + ' starting "';
  introspect(JAM.policy.p13) {
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
  introspect(JAM.policy.p17) {
    var v332 = fastaSequenceTitleOne.search(/[^\s]/)
  }
  var v61 = v332 != -1;
  if (v61) {
    var v333 = stringToReturn$$1 + '"';
    var v60 = v333 + fastaSequenceTitleOne;
    stringToReturn$$1 = v60 + '"';
  }
  var v334 = stringToReturn$$1 + ' starting "';
  introspect(JAM.policy.p13) {
    var v335 = sequenceOne.substring(0, 10)
  }
  var v62 = v334 + v335;
  stringToReturn$$1 = v62 + '"\n';
  var v336 = stringToReturn$$1 + "and ";
  var v337 = sequenceTwo.length;
  var v63 = v336 + v337;
  stringToReturn$$1 = v63 + " residue sequence ";
  introspect(JAM.policy.p17) {
    var v338 = fastaSequenceTitleTwo.search(/[^\s]/)
  }
  var v65 = v338 != -1;
  if (v65) {
    var v339 = stringToReturn$$1 + '"';
    var v64 = v339 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v64 + '"';
  }
  var v340 = stringToReturn$$1 + ' starting "';
  introspect(JAM.policy.p13) {
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
    var v489 = arrayOfPatterns$$3[j$$2];
    introspect(JAM.policy.p17) {
      var v343 = v489.match(/\/.+\//)
    }
    var v69 = v343 + "gi";
    var v719 = eval(v69);
    geneticCodeMatchExp$$1[j$$2] = v719;
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
    introspect(JAM.policy.p17) {
      var v72 = v346.match(/=[a-zA-Z\*]/)
    }
    var v720 = v72.toString();
    geneticCodeMatchResult$$1[j$$3] = v720;
    var v73 = geneticCodeMatchResult$$1[j$$3];
    introspect(JAM.policy.p15) {
      var v721 = v73.replace(/=/g, "")
    }
    geneticCodeMatchResult$$1[j$$3] = v721;
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
  introspect(JAM.policy.p17) {
    var v349 = fastaSequenceTitle$$1.search(/[^\s]/)
  }
  var v77 = v349 != -1;
  if (v77) {
    var v350 = stringToReturn$$2 + '"';
    var v76 = v350 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v76 + '"';
  }
  var v351 = stringToReturn$$2 + ' starting "';
  introspect(JAM.policy.p13) {
    var v352 = sequence$$3.substring(0, 10)
  }
  var v78 = v351 + v352;
  stringToReturn$$2 = v78 + '"';
  var v79 = '<div class="info">' + stringToReturn$$2;
  return v79 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v490 = "Results for " + topology;
  var v353 = v490 + " ";
  var v354 = sequence$$4.length;
  var v80 = v353 + v354;
  var stringToReturn$$3 = v80 + " residue sequence ";
  introspect(JAM.policy.p17) {
    var v355 = fastaSequenceTitle$$2.search(/[^\s]/)
  }
  var v82 = v355 != -1;
  if (v82) {
    var v356 = stringToReturn$$3 + '"';
    var v81 = v356 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v81 + '"';
  }
  var v357 = stringToReturn$$3 + ' starting "';
  introspect(JAM.policy.p13) {
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
  introspect(JAM.policy.p17) {
    var v360 = fastaSequenceTitleOne$$1.search(/[^\s]/)
  }
  var v87 = v360 != -1;
  if (v87) {
    var v361 = stringToReturn$$4 + '"';
    var v86 = v361 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v86 + '"';
  }
  var v362 = stringToReturn$$4 + ' starting "';
  introspect(JAM.policy.p13) {
    var v363 = sequenceOne$$1.substring(0, 10)
  }
  var v88 = v362 + v363;
  stringToReturn$$4 = v88 + '"\n';
  var v364 = stringToReturn$$4 + "and ";
  var v365 = sequenceTwo$$1.length;
  var v89 = v364 + v365;
  stringToReturn$$4 = v89 + " residue sequence ";
  introspect(JAM.policy.p17) {
    var v366 = fastaSequenceTitleTwo$$1.search(/[^\s]/)
  }
  var v91 = v366 != -1;
  if (v91) {
    var v367 = stringToReturn$$4 + '"';
    var v90 = v367 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v90 + '"';
  }
  var v368 = stringToReturn$$4 + ' starting "';
  introspect(JAM.policy.p13) {
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
  introspect(JAM.policy.p17) {
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
  introspect(JAM.policy.p17) {
    var v694 = expressionToCheck.search(/\[[A-Za-z\|]*\[/)
  }
  var v687 = v694 != -1;
  var v696 = !v687;
  if (v696) {
    introspect(JAM.policy.p17) {
      var v695 = expressionToCheck.search(/\][A-Za-z\|]*\]/)
    }
    v687 = v695 != -1;
  }
  var v678 = v687;
  var v689 = !v678;
  if (v689) {
    introspect(JAM.policy.p17) {
      var v688 = expressionToCheck.search(/\[\]/)
    }
    v678 = v688 != -1;
  }
  var v668 = v678;
  var v680 = !v668;
  if (v680) {
    introspect(JAM.policy.p17) {
      var v679 = expressionToCheck.search(/\/[A-Za-z\|]*\]/)
    }
    v668 = v679 != -1;
  }
  var v655 = v668;
  var v670 = !v655;
  if (v670) {
    introspect(JAM.policy.p17) {
      var v669 = expressionToCheck.search(/\[[A-Za-z\|]*\//)
    }
    v655 = v669 != -1;
  }
  var v642 = v655;
  var v657 = !v642;
  if (v657) {
    introspect(JAM.policy.p17) {
      var v656 = expressionToCheck.search(/\|\|/)
    }
    v642 = v656 != -1;
  }
  var v629 = v642;
  var v644 = !v629;
  if (v644) {
    introspect(JAM.policy.p17) {
      var v643 = expressionToCheck.search(/\/\|/)
    }
    v629 = v643 != -1;
  }
  var v599 = v629;
  var v631 = !v599;
  if (v631) {
    introspect(JAM.policy.p17) {
      var v630 = expressionToCheck.search(/\|\//)
    }
    v599 = v630 != -1;
  }
  var v554 = v599;
  var v601 = !v554;
  if (v601) {
    introspect(JAM.policy.p17) {
      var v600 = expressionToCheck.search(/\[.\]/)
    }
    v554 = v600 != -1;
  }
  var v491 = v554;
  var v556 = !v491;
  if (v556) {
    introspect(JAM.policy.p17) {
      var v555 = expressionToCheck.search(/\</)
    }
    v491 = v555 != -1;
  }
  var v374 = v491;
  var v493 = !v374;
  if (v493) {
    introspect(JAM.policy.p17) {
      var v492 = expressionToCheck.search(/\>/)
    }
    v374 = v492 != -1;
  }
  var v99 = v374;
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
  var v557 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v494 = v557 + "<head>\n";
  var v375 = v494 + "<title>Sequence Manipulation Suite</title>\n";
  var v105 = v375 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  introspect(JAM.policy.p16) {
    v104.write(v105);
  }
  if (isColor) {
    var v106 = outputWindow.document;
    var v709 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v705 = v709 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v701 = v705 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v697 = v701 + "div.info {font-weight: bold}\n";
    var v690 = v697 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v681 = v690 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v671 = v681 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v658 = v671 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v645 = v658 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v632 = v645 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v602 = v632 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v558 = v602 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v495 = v558 + "td.many {color: #000000}\n";
    var v376 = v495 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v107 = v376 + "</style>\n";
    introspect(JAM.policy.p16) {
      v106.write(v107);
    }
  } else {
    var v108 = outputWindow.document;
    var v713 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v710 = v713 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v706 = v710 + "div.title {display: none}\n";
    var v702 = v706 + "div.info {font-weight: bold}\n";
    var v698 = v702 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v691 = v698 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v682 = v691 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v672 = v682 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v659 = v672 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v646 = v659 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v633 = v646 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v603 = v633 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v559 = v603 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v496 = v559 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v377 = v496 + "img {display: none}\n";
    var v109 = v377 + "</style>\n";
    introspect(JAM.policy.p16) {
      v108.write(v109);
    }
  }
  var v110 = outputWindow.document;
  var v560 = "</head>\n" + '<body class="main">\n';
  var v497 = v560 + '<div class="title">';
  var v378 = v497 + title$$6;
  var v111 = v378 + " results</div>\n";
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
  var v561 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v498 = v561 + "<head>\n";
  var v379 = v498 + "<title>Sequence Manipulation Suite</title>\n";
  var v113 = v379 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  introspect(JAM.policy.p16) {
    v112.write(v113);
  }
  if (isBackground) {
    var v114 = outputWindow.document;
    var v711 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v707 = v711 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v703 = v707 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v699 = v703 + "div.info {font-weight: bold}\n";
    var v692 = v699 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v683 = v692 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v673 = v683 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v660 = v673 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v647 = v660 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v634 = v647 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v604 = v634 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v562 = v604 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v499 = v562 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v380 = v499 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v115 = v380 + "</style>\n";
    introspect(JAM.policy.p16) {
      v114.write(v115);
    }
  } else {
    var v116 = outputWindow.document;
    var v715 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v714 = v715 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v712 = v714 + "div.title {display: none}\n";
    var v708 = v712 + "div.info {font-weight: bold}\n";
    var v704 = v708 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v700 = v704 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v693 = v700 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v684 = v693 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v674 = v684 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v661 = v674 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v648 = v661 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v635 = v648 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v605 = v635 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v563 = v605 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v500 = v563 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v381 = v500 + "img {display: none}\n";
    var v117 = v381 + "</style>\n";
    introspect(JAM.policy.p16) {
      v116.write(v117);
    }
  }
  var v118 = outputWindow.document;
  var v564 = "</head>\n" + '<body class="main">\n';
  var v501 = v564 + '<div class="title">';
  var v382 = v501 + title$$8;
  var v119 = v382 + " results</div>\n";
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
function reverse(dnaSequence$$2) {
  var tempDnaArray = new Array;
  introspect(JAM.policy.p17) {
    var v383 = dnaSequence$$2.search(/./)
  }
  var v120 = v383 != -1;
  if (v120) {
    introspect(JAM.policy.p17) {
      tempDnaArray = dnaSequence$$2.match(/./g);
    }
    tempDnaArray = tempDnaArray.reverse();
    introspect(JAM.policy.p9) {
      dnaSequence$$2 = tempDnaArray.join("");
    }
  }
  return dnaSequence$$2;
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
  var v384 = testArray[0];
  var v124 = v384 != testString;
  if (v124) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  introspect(JAM.policy.p16) {
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
  introspect(JAM.policy.p10) {
    var v386 = testNum.toFixed(3)
  }
  var v128 = v386 != 2489.824;
  if (v128) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  introspect(JAM.policy.p10) {
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
  introspect(JAM.policy.p17) {
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
  introspect(JAM.policy.p17) {
    var v606 = emblFile.search(/ID/)
  }
  var v565 = v606 == -1;
  var v608 = !v565;
  if (v608) {
    introspect(JAM.policy.p17) {
      var v607 = emblFile.search(/AC/)
    }
    v565 = v607 == -1;
  }
  var v502 = v565;
  var v567 = !v502;
  if (v567) {
    introspect(JAM.policy.p17) {
      var v566 = emblFile.search(/DE/)
    }
    v502 = v566 == -1;
  }
  var v389 = v502;
  var v504 = !v389;
  if (v504) {
    introspect(JAM.policy.p17) {
      var v503 = emblFile.search(/SQ/)
    }
    v389 = v503 == -1;
  }
  var v131 = v389;
  if (v131) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  introspect(JAM.policy.p17) {
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
function verifyDna(dnaSequence$$3) {
  introspect(JAM.policy.p17) {
    var v392 = dnaSequence$$3.search(/[^gatucryswkmbdhvnx\s]/i)
  }
  var v135 = v392 != -1;
  if (v135) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  introspect(JAM.policy.p17) {
    var v393 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i)
  }
  var v136 = v393 != -1;
  if (v136) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  introspect(JAM.policy.p17) {
    var v609 = genBankFile.search(/LOCUS/)
  }
  var v568 = v609 == -1;
  var v611 = !v568;
  if (v611) {
    introspect(JAM.policy.p17) {
      var v610 = genBankFile.search(/DEFINITION/)
    }
    v568 = v610 == -1;
  }
  var v505 = v568;
  var v570 = !v505;
  if (v570) {
    introspect(JAM.policy.p17) {
      var v569 = genBankFile.search(/ACCESSION/)
    }
    v505 = v569 == -1;
  }
  var v394 = v505;
  var v507 = !v394;
  if (v507) {
    introspect(JAM.policy.p17) {
      var v506 = genBankFile.search(/ORIGIN/)
    }
    v394 = v506 == -1;
  }
  var v137 = v394;
  if (v137) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  introspect(JAM.policy.p17) {
    var v612 = genBankFile$$1.search(/LOCUS/)
  }
  var v571 = v612 == -1;
  var v614 = !v571;
  if (v614) {
    introspect(JAM.policy.p17) {
      var v613 = genBankFile$$1.search(/DEFINITION/)
    }
    v571 = v613 == -1;
  }
  var v508 = v571;
  var v573 = !v508;
  if (v573) {
    introspect(JAM.policy.p17) {
      var v572 = genBankFile$$1.search(/ACCESSION/)
    }
    v508 = v572 == -1;
  }
  var v395 = v508;
  var v510 = !v395;
  if (v510) {
    introspect(JAM.policy.p17) {
      var v509 = genBankFile$$1.search(/ORIGIN/)
    }
    v395 = v509 == -1;
  }
  var v138 = v395;
  if (v138) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  introspect(JAM.policy.p17) {
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
  introspect(JAM.policy.p17) {
    var v615 = emblFile$$1.search(/ID/)
  }
  var v574 = v615 == -1;
  var v617 = !v574;
  if (v617) {
    introspect(JAM.policy.p17) {
      var v616 = emblFile$$1.search(/AC/)
    }
    v574 = v616 == -1;
  }
  var v511 = v574;
  var v576 = !v511;
  if (v576) {
    introspect(JAM.policy.p17) {
      var v575 = emblFile$$1.search(/DE/)
    }
    v511 = v575 == -1;
  }
  var v397 = v511;
  var v513 = !v397;
  if (v513) {
    introspect(JAM.policy.p17) {
      var v512 = emblFile$$1.search(/SQ/)
    }
    v397 = v512 == -1;
  }
  var v140 = v397;
  if (v140) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  introspect(JAM.policy.p17) {
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
        introspect(JAM.policy.p16) {
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
        introspect(JAM.policy.p16) {
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
      var v577 = adjustNumbering(lineNum, numberingAdjustment);
      var v514 = rightNum(v577, "", 8, tabIn$$3);
      var v408 = v514 + lineOfText$$1;
      var v160 = v408 + "\n";
      introspect(JAM.policy.p16) {
        v159.write(v160);
      }
      var v164 = strands$$1 == "two";
      if (v164) {
        var v161 = outputWindow.document;
        var v578 = adjustNumbering(lineNum, numberingAdjustment);
        var v515 = rightNum(v578, "", 8, tabIn$$3);
        var v516 = complement(lineOfText$$1);
        var v409 = v515 + v516;
        var v162 = v409 + "\n";
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
        var v517 = lineOfText$$1;
        var v518 = adjustNumbering(i$$6, numberingAdjustment);
        var v410 = v517 + v518;
        var v166 = v410 + "\n";
        introspect(JAM.policy.p16) {
          v165.write(v166);
        }
        var v170 = strands$$1 == "two";
        if (v170) {
          var v167 = outputWindow.document;
          var v519 = complement(lineOfText$$1);
          var v520 = adjustNumbering(i$$6, numberingAdjustment);
          var v411 = v519 + v520;
          var v168 = v411 + "\n";
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
            var v412 = complement(lineOfText$$1);
            var v176 = v412 + "\n";
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
        introspect(JAM.policy.p16) {
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
      var v521 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v417 = v521 + lineOfText$$2;
      var v191 = v417 + "\n";
      introspect(JAM.policy.p16) {
        v190.write(v191);
      }
    } else {
      var v199 = numberPosition$$2 == "right";
      if (v199) {
        var v192 = outputWindow.document;
        var v418 = lineOfText$$2 + i$$7;
        var v193 = v418 + "\n";
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
  var v579 = sequence$$13.length;
  var v522 = v579 <= firstIndexToMutate;
  var v580 = !v522;
  if (v580) {
    v522 = lastIndexToMutate < 0;
  }
  var v419 = v522;
  var v523 = !v419;
  if (v523) {
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
    introspect(JAM.policy.p17) {
      randNum = Math.floor(v203);
    }
    var v421 = randNum < firstIndexToMutate;
    var v524 = !v421;
    if (v524) {
      v421 = randNum > lastIndexToMutate;
    }
    var v204 = v421;
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
      var v422 = Math.random();
      var v423 = components$$1.length;
      var v205 = v422 * v423;
      introspect(JAM.policy.p17) {
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
    introspect(JAM.policy.p13) {
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
    var v430 = Math.random();
    var v431 = components$$2.length;
    var v213 = v430 * v431;
    introspect(JAM.policy.p17) {
      tempNum$$1 = Math.floor(v213);
    }
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v432 = sequence$$14.length;
    var v216 = v432 == 60;
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
    var v581 = sequence$$15.length;
    var v525 = v581 - lookAhead;
    var v526 = sequence$$15.length;
    introspect(JAM.policy.p27) {
      var v433 = sequence$$15.substring(v525, v526)
    }
    var v221 = v433 + sequence$$15;
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
  var v582 = '<tr><td class="title" width="200px">' + "Site:";
  var v527 = v582 + '</td><td class="title">';
  var v434 = v527 + "Positions:";
  var v226 = v434 + "</td></tr>\n";
  introspect(JAM.policy.p16) {
    v225.write(v226);
  }
  var i$$9 = 0;
  var v435 = arrayOfItems.length;
  var v242 = i$$9 < v435;
  for (;v242;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v436 = arrayOfItems[i$$9];
    introspect(JAM.policy.p17) {
      var v227 = v436.match(/\/.+\//)
    }
    matchExp = v227 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    var v583 = arrayOfItems[i$$9];
    introspect(JAM.policy.p17) {
      var v528 = v583.match(/\)\D*\d+/)
    }
    var v437 = v528.toString();
    introspect(JAM.policy.p15) {
      var v228 = v437.replace(/\)\D*/, "")
    }
    cutDistance = parseFloat(v228);
    introspect(JAM.policy.p16) {
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
      var v529 = RegExp.lastMatch;
      var v441 = v529.length;
      var v233 = v440 - v441;
      matchExp.lastIndex = v233 + 1;
      introspect(JAM.policy.p16) {
        v234 = matchArray$$1 = matchExp.exec(sequence$$15);
      }
    }
    introspect(JAM.policy.p17) {
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
    var v662 = '<tr><td class="' + backGroundClass;
    var v649 = v662 + '">';
    var v685 = arrayOfItems[i$$9];
    introspect(JAM.policy.p17) {
      var v675 = v685.match(/\([^\(]+\)/)
    }
    var v663 = v675.toString();
    introspect(JAM.policy.p15) {
      var v650 = v663.replace(/\(|\)/g, "")
    }
    var v636 = v649 + v650;
    var v618 = v636 + '</td><td class="';
    var v584 = v618 + backGroundClass;
    var v530 = v584 + '">';
    var v443 = v530 + tempString$$1;
    var v241 = v443 + "</td></tr>\n";
    introspect(JAM.policy.p16) {
      v240.write(v241);
    }
    timesFound = 0;
    i$$9++;
    var v444 = arrayOfItems.length;
    v242 = i$$9 < v444;
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
  var v637 = '<tr><td class="title">' + "Pattern:";
  var v619 = v637 + '</td><td class="title">';
  var v585 = v619 + "Times found:";
  var v531 = v585 + '</td><td class="title">';
  var v445 = v531 + "Percentage:";
  var v246 = v445 + "</td></tr>\n";
  introspect(JAM.policy.p16) {
    v245.write(v246);
  }
  var i$$10 = 0;
  var v446 = arrayOfItems$$1.length;
  var v255 = i$$10 < v446;
  for (;v255;) {
    var tempNumber = 0;
    var v447 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p17) {
      var v247 = v447.match(/\/[^\/]+\//)
    }
    var matchExp$$1 = v247 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    introspect(JAM.policy.p16) {
      var v448 = sequence$$16.search(matchExp$$1)
    }
    var v249 = v448 != -1;
    if (v249) {
      introspect(JAM.policy.p16) {
        var v248 = sequence$$16.match(matchExp$$1)
      }
      tempNumber = v248.length;
    }
    var percentage = 0;
    var v532 = originalLength + 1;
    var v620 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p17) {
      var v586 = v620.match(/\d+/)
    }
    var v533 = parseFloat(v586);
    var v449 = v532 - v533;
    var v252 = v449 > 0;
    if (v252) {
      var v250 = 100 * tempNumber;
      var v450 = originalLength + 1;
      var v587 = arrayOfItems$$1[i$$10];
      introspect(JAM.policy.p17) {
        var v534 = v587.match(/\d+/)
      }
      var v451 = parseFloat(v534);
      var v251 = v450 - v451;
      percentage = v250 / v251;
    }
    var v253 = outputWindow.document;
    var v686 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p17) {
      var v676 = v686.match(/\([^\(]+\)\b/)
    }
    var v664 = v676.toString();
    introspect(JAM.policy.p15) {
      var v651 = v664.replace(/\(|\)/g, "")
    }
    var v638 = "<tr><td>" + v651;
    var v621 = v638 + "</td><td>";
    var v588 = v621 + tempNumber;
    var v535 = v588 + "</td><td>";
    introspect(JAM.policy.p10) {
      var v536 = percentage.toFixed(2)
    }
    var v452 = v535 + v536;
    var v254 = v452 + "</td></tr>\n";
    introspect(JAM.policy.p16) {
      v253.write(v254);
    }
    i$$10++;
    var v453 = arrayOfItems$$1.length;
    v255 = i$$10 < v453;
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
  var v454 = sequence$$17.length;
  var v263 = v454 > 0;
  for (;v263;) {
    maxNum$$1 = sequence$$17.length;
    var v455 = Math.random();
    var v257 = v455 * maxNum$$1;
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
    var v456 = tempSeq.length;
    var v262 = v456 == 60;
    if (v262) {
      var v260 = outputWindow.document;
      var v261 = tempSeq + "\n";
      introspect(JAM.policy.p16) {
        v260.write(v261);
      }
      tempSeq = "";
    }
    var v457 = sequence$$17.length;
    v263 = v457 > 0;
  }
  var v264 = outputWindow.document;
  var v265 = tempSeq + "\n";
  introspect(JAM.policy.p16) {
    v264.write(v265);
  }
  return true;
}
function emblFasta(theDocument) {
  var newDna = "";
  var maxInput$$3 = 2E5;
  var v458 = testScript();
  var v266 = v458 == false;
  if (v266) {
    return false;
  }
  var v665 = theDocument.forms;
  var v652 = v665[0];
  var v639 = v652.elements;
  var v622 = v639[0];
  var v589 = checkFormElement(v622);
  var v537 = v589 == false;
  var v591 = !v537;
  if (v591) {
    var v677 = theDocument.forms;
    var v666 = v677[0];
    var v653 = v666.elements;
    var v640 = v653[0];
    var v623 = v640.value;
    var v590 = verifyEmbl(v623);
    v537 = v590 == false;
  }
  var v459 = v537;
  var v539 = !v459;
  if (v539) {
    var v667 = theDocument.forms;
    var v654 = v667[0];
    var v641 = v654.elements;
    var v624 = v641[0];
    var v592 = v624.value;
    var v538 = checkTextLength(v592, maxInput$$3);
    v459 = v538 == false;
  }
  var v267 = v459;
  if (v267) {
    return false;
  }
  openWindow("EMBL to FASTA");
  openPre();
  var v625 = theDocument.forms;
  var v593 = v625[0];
  var v540 = v593.elements;
  var v460 = v540[0];
  var v268 = v460.value;
  emblToFasta(v268);
  closePre();
  closeWindow();
  return true;
}
function emblToFasta(emblFile$$2) {
  var title$$9;
  var v269 = "_" + emblFile$$2;
  emblFile$$2 = v269 + "_";
  introspect(JAM.policy.p17) {
    var recordArray = emblFile$$2.split(/ID\s\s\s[^\f\n\r]*/)
  }
  var i$$11 = 1;
  var v461 = recordArray.length;
  var v279 = i$$11 < v461;
  for (;v279;) {
    var v270 = recordArray[i$$11];
    introspect(JAM.policy.p17) {
      var mainArray = v270.split(/[\f\n\r]\s*FH   Key             Location\/Qualifiers[\f\n\r]+\s*FH|[\f\n\r]\s*XX[\s]*[\f\n\r]\s*SQ[^\f\n\r]*/)
    }
    var v541 = mainArray[0];
    introspect(JAM.policy.p17) {
      var v462 = v541.search(/[\f\n\r]\s*DE[^\f\n\r]+/)
    }
    var v272 = v462 != -1;
    if (v272) {
      var v542 = mainArray[0];
      introspect(JAM.policy.p17) {
        var v463 = v542.match(/[\f\n\r]\s*DE[^\f\n\r]+/)
      }
      var v271 = v463.toString();
      introspect(JAM.policy.p15) {
        title$$9 = v271.replace(/[\f\n\r]\s*DE\s*/, "");
      }
    } else {
      title$$9 = "Untitled";
    }
    introspect(JAM.policy.p15) {
      var v464 = title$$9.replace(/[\f\n\r\t]+$/g, "")
    }
    var v273 = filterFastaTitle(v464);
    title$$9 = v273 + "\n";
    var v274 = mainArray[2];
    introspect(JAM.policy.p17) {
      dnaArray = v274.split(/\/{2}/);
    }
    var v465 = dnaArray.length;
    var v275 = v465 == 1;
    if (v275) {
      alert("The entire EMBL file may not have been processed.");
      outputWindow.focus();
    }
    var v276 = dnaArray[0];
    dnaSequence = removeNonDna(v276);
    var v277 = outputWindow.document;
    var v543 = "&gt;" + title$$9;
    var v544 = addReturns(dnaSequence);
    var v466 = v543 + v544;
    var v278 = v466 + "\n\n";
    introspect(JAM.policy.p16) {
      v277.write(v278);
    }
    i$$11++;
    var v467 = recordArray.length;
    v279 = i$$11 < v467;
  }
  return true;
}
document.onload = v2;
introspect(JAM.policy.p9) {
  var v280 = document.getElementById("submitbtn")
}
v280.onclick = v3;
introspect(JAM.policy.p9) {
  var v281 = document.getElementById("clearbtn")
}
v281.onclick = v4
