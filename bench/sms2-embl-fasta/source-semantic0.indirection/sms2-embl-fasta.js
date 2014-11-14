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
  sequence = JAM.call(sequence.replace, sequence, [/(.{60})/g, v0], JAM.policy.p15);
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
    var v546 = JAM.call(v594.search, v594, [/\S/], JAM.policy.p17);
    var v469 = v546 == -1;
    var v548 = !v469;
    if (v548) {
      var v595 = arrayOfSequences[i$$1];
      var v547 = JAM.call(v595.search, v595, [/\S/], JAM.policy.p17);
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
  var v626 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p17);
  var v596 = v626 == -1;
  var v628 = !v596;
  if (v628) {
    var v627 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p17);
    v596 = v627 == -1;
  }
  var v550 = v596;
  var v598 = !v550;
  if (v598) {
    var v597 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p17);
    v550 = v597 == -1;
  }
  var v472 = v550;
  var v552 = !v472;
  if (v552) {
    var v551 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p17);
    v472 = v551 == -1;
  }
  var v288 = v472;
  var v474 = !v288;
  if (v474) {
    var v473 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p17);
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
  var v289 = JAM.call(v475.search, v475, [/\S/], JAM.policy.p17);
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
    var v291 = JAM.call(v476.search, v476, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p17);
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
    var v295 = JAM.call(v478.match, v478, [/\/.+\//], JAM.policy.p17);
    var v19 = v295 + "gi";
    if (JAM.isEval(eval)) {
      var v716 = eval("introspect(JAM.policy.pFull) { " + v19 + " }")
    } else {
      var v716 = JAM.call(eval, null, [v19])
    }
    geneticCodeMatchExp[j] = v716;
    var v296 = arrayOfPatterns[j];
    var v20 = JAM.call(v296.match, v296, [/=[a-zA-Z\*]/], JAM.policy.p17);
    var v717 = v20.toString();
    geneticCodeMatchResult[j] = v717;
    var v21 = geneticCodeMatchResult[j];
    var v718 = JAM.call(v21.replace, v21, [/=/g, ""], JAM.policy.p15);
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
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v23], JAM.policy.p15);
    j = 0;
    var v299 = geneticCodeMatchExp.length;
    var v27 = j < v299;
    for (;v27;) {
      var v480 = geneticCodeMatchExp[j];
      var v300 = JAM.call(codon.search, codon, [v480], JAM.policy.p16);
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
    var v305 = JAM.call(v482.search, v482, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p17);
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
      var v310 = JAM.call(v484.search, v484, [re], JAM.policy.p16);
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
    var v314 = JAM.call(v485.search, v485, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p17);
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
  var v487 = JAM.call(v553.replace, v553, [/[^A-Za-z]/g, ""], JAM.policy.p15);
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
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/g/g, "1"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/c/g, "2"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/1/g, "c"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/2/g, "g"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/G/g, "1"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/C/g, "2"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/1/g, "C"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/2/g, "G"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/a/g, "1"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/t/g, "2"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/1/g, "t"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/2/g, "a"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/A/g, "1"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/T/g, "2"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/1/g, "T"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/2/g, "A"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/u/g, "a"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/U/g, "A"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/r/g, "1"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/y/g, "2"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/1/g, "y"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/2/g, "r"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/R/g, "1"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/Y/g, "2"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/1/g, "Y"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/2/g, "R"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/k/g, "1"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/m/g, "2"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/1/g, "m"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/2/g, "k"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/K/g, "1"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/M/g, "2"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/1/g, "M"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/2/g, "K"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/b/g, "1"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/v/g, "2"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/1/g, "v"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/2/g, "b"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/B/g, "1"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/V/g, "2"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/1/g, "V"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/2/g, "B"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/d/g, "1"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/h/g, "2"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/1/g, "h"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/2/g, "d"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/D/g, "1"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/H/g, "2"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/1/g, "H"], JAM.policy.p15);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/2/g, "D"], JAM.policy.p15);
  return dnaSequence$$1;
}
function closeForm() {
  var v43 = outputWindow.document;
  JAM.call(v43.write, v43, ["</form>"], JAM.policy.p9);
  return true;
}
function closePre() {
  var v44 = outputWindow.document;
  JAM.call(v44.write, v44, ["</div>"], JAM.policy.p9);
  var v45 = outputWindow.document;
  JAM.call(v45.write, v45, ["</pre>\n"], JAM.policy.p9);
  return;
}
function closeTextArea() {
  var v46 = outputWindow.document;
  JAM.call(v46.write, v46, ["</textarea>"], JAM.policy.p9);
  return true;
}
function closeWindow() {
  var v47 = outputWindow.document;
  JAM.call(v47.write, v47, ["</body>\n</html>\n"], JAM.policy.p9);
  outputWindow.status = "Done.";
  var v48 = outputWindow.document;
  v48.close();
  return true;
}
function convertDegenerates(sequence$$1) {
  sequence$$1 = sequence$$1.toLowerCase();
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/t/g, "[TU]"], JAM.policy.p15);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/r/g, "[AGR]"], JAM.policy.p15);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/y/g, "[CTUY]"], JAM.policy.p15);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/s/g, "[GCS]"], JAM.policy.p15);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/w/g, "[ATUW]"], JAM.policy.p15);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/k/g, "[GTUK]"], JAM.policy.p15);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/m/g, "[ACM]"], JAM.policy.p15);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/b/g, "[CGTUBSKY]"], JAM.policy.p15);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/d/g, "[AGTUDRKW]"], JAM.policy.p15);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/h/g, "[ACTUHMYW]"], JAM.policy.p15);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/v/g, "[ACGVSMR]"], JAM.policy.p15);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/n/g, "[ACGTURYSWKMBDHVN]"], JAM.policy.p15);
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
    var v323 = JAM.call(v488.search, v488, [/[^\s]+\s/], JAM.policy.p17);
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
  alignSeq = JAM.call(alignSeq.replace, alignSeq, [/[^abcdefghiklmnpqrstvwxyz\.\-]/gi, ""], JAM.policy.p15);
  return alignSeq;
}
function filterFastaTitle(sequenceTitle) {
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/\s{2,}/g, " "], JAM.policy.p15);
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/^\s*/g, ""], JAM.policy.p15);
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/[\f\n\r\t]+$/g, "\n"], JAM.policy.p15);
  return JAM.call(sequenceTitle.replace, sequenceTitle, [/[\<\>]\n/gi, ""], JAM.policy.p15);
}
function getArrayOfFasta(sequenceData) {
  var arrayOfFasta = new Array;
  var matchArray;
  var re$$1 = /\>[^\>]+/g;
  var v325 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p17);
  var v54 = v325 != -1;
  if (v54) {
    var v53 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p16);
    for (;v53;) {
      var v52 = matchArray[0];
      JAM.call(arrayOfFasta.push, arrayOfFasta, [v52], JAM.policy.p16);
      v53 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p16);
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
  var v327 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p17);
  var v57 = v327 != -1;
  if (v57) {
    var v328 = stringToReturn + '"';
    var v56 = v328 + fastaSequenceTitle;
    stringToReturn = v56 + '"';
  }
  var v329 = stringToReturn + ' starting "';
  var v330 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p13);
  var v58 = v329 + v330;
  stringToReturn = v58 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v331 = sequenceOne.length;
  var v59 = "Search results for " + v331;
  var stringToReturn$$1 = v59 + " residue sequence ";
  var v332 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p17);
  var v61 = v332 != -1;
  if (v61) {
    var v333 = stringToReturn$$1 + '"';
    var v60 = v333 + fastaSequenceTitleOne;
    stringToReturn$$1 = v60 + '"';
  }
  var v334 = stringToReturn$$1 + ' starting "';
  var v335 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p13);
  var v62 = v334 + v335;
  stringToReturn$$1 = v62 + '"\n';
  var v336 = stringToReturn$$1 + "and ";
  var v337 = sequenceTwo.length;
  var v63 = v336 + v337;
  stringToReturn$$1 = v63 + " residue sequence ";
  var v338 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p17);
  var v65 = v338 != -1;
  if (v65) {
    var v339 = stringToReturn$$1 + '"';
    var v64 = v339 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v64 + '"';
  }
  var v340 = stringToReturn$$1 + ' starting "';
  var v341 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p13);
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
    var v343 = JAM.call(v489.match, v489, [/\/.+\//], JAM.policy.p17);
    var v69 = v343 + "gi";
    if (JAM.isEval(eval)) {
      var v719 = eval("introspect(JAM.policy.pFull) { " + v69 + " }")
    } else {
      var v719 = JAM.call(eval, null, [v69])
    }
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
    var v72 = JAM.call(v346.match, v346, [/=[a-zA-Z\*]/], JAM.policy.p17);
    var v720 = v72.toString();
    geneticCodeMatchResult$$1[j$$3] = v720;
    var v73 = geneticCodeMatchResult$$1[j$$3];
    var v721 = JAM.call(v73.replace, v73, [/=/g, ""], JAM.policy.p15);
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
  var v349 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p17);
  var v77 = v349 != -1;
  if (v77) {
    var v350 = stringToReturn$$2 + '"';
    var v76 = v350 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v76 + '"';
  }
  var v351 = stringToReturn$$2 + ' starting "';
  var v352 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p13);
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
  var v355 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p17);
  var v82 = v355 != -1;
  if (v82) {
    var v356 = stringToReturn$$3 + '"';
    var v81 = v356 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v81 + '"';
  }
  var v357 = stringToReturn$$3 + ' starting "';
  var v358 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p13);
  var v83 = v357 + v358;
  stringToReturn$$3 = v83 + '"';
  var v84 = '<div class="info">' + stringToReturn$$3;
  return v84 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v359 = sequenceOne$$1.length;
  var v85 = "Alignment results for " + v359;
  var stringToReturn$$4 = v85 + " residue sequence ";
  var v360 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p17);
  var v87 = v360 != -1;
  if (v87) {
    var v361 = stringToReturn$$4 + '"';
    var v86 = v361 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v86 + '"';
  }
  var v362 = stringToReturn$$4 + ' starting "';
  var v363 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p13);
  var v88 = v362 + v363;
  stringToReturn$$4 = v88 + '"\n';
  var v364 = stringToReturn$$4 + "and ";
  var v365 = sequenceTwo$$1.length;
  var v89 = v364 + v365;
  stringToReturn$$4 = v89 + " residue sequence ";
  var v366 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p17);
  var v91 = v366 != -1;
  if (v91) {
    var v367 = stringToReturn$$4 + '"';
    var v90 = v367 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v90 + '"';
  }
  var v368 = stringToReturn$$4 + ' starting "';
  var v369 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p13);
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
    tempNum = JAM.call(Math.floor, Math, [v94], JAM.policy.p17);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p16);
    j$$4++;
    v95 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p9);
}
function getSequenceFromFasta(sequenceRecord) {
  var v372 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p17);
  var v96 = v372 != -1;
  if (v96) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p15);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v373 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p17);
  var v98 = v373 != -1;
  if (v98) {
    var v97 = JAM.call(sequenceRecord$$1.match, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p15);
    fastaTitle = v97.toString();
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\>|[\f\n\r]/g, ""], JAM.policy.p15);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\s{2,}/g, " "], JAM.policy.p15);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/[\<\>]/gi, ""], JAM.policy.p15);
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  var v694 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p17);
  var v687 = v694 != -1;
  var v696 = !v687;
  if (v696) {
    var v695 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p17);
    v687 = v695 != -1;
  }
  var v678 = v687;
  var v689 = !v678;
  if (v689) {
    var v688 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p17);
    v678 = v688 != -1;
  }
  var v668 = v678;
  var v680 = !v668;
  if (v680) {
    var v679 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p17);
    v668 = v679 != -1;
  }
  var v655 = v668;
  var v670 = !v655;
  if (v670) {
    var v669 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p17);
    v655 = v669 != -1;
  }
  var v642 = v655;
  var v657 = !v642;
  if (v657) {
    var v656 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p17);
    v642 = v656 != -1;
  }
  var v629 = v642;
  var v644 = !v629;
  if (v644) {
    var v643 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p17);
    v629 = v643 != -1;
  }
  var v599 = v629;
  var v631 = !v599;
  if (v631) {
    var v630 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p17);
    v599 = v630 != -1;
  }
  var v554 = v599;
  var v601 = !v554;
  if (v601) {
    var v600 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p17);
    v554 = v600 != -1;
  }
  var v491 = v554;
  var v556 = !v491;
  if (v556) {
    var v555 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p17);
    v491 = v555 != -1;
  }
  var v374 = v491;
  var v493 = !v374;
  if (v493) {
    var v492 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p17);
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
  JAM.call(v100.write, v100, ['<form action="">\n'], JAM.policy.p9);
  return true;
}
function openPre() {
  var v101 = outputWindow.document;
  JAM.call(v101.write, v101, ["<pre>"], JAM.policy.p9);
  var v102 = outputWindow.document;
  JAM.call(v102.write, v102, ['<div class="pre">'], JAM.policy.p9);
  return;
}
function openTextArea() {
  var v103 = outputWindow.document;
  JAM.call(v103.write, v103, ['<br /><textarea rows="6" cols="61">\n'], JAM.policy.p9);
  return true;
}
function openWindow(title$$5) {
  _openWindow(title$$5, true);
  return;
}
function _openWindow(title$$6, isColor) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  outputWindow.focus();
  var v104 = outputWindow.document;
  var v557 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v494 = v557 + "<head>\n";
  var v375 = v494 + "<title>Sequence Manipulation Suite</title>\n";
  var v105 = v375 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v104.write, v104, [v105], JAM.policy.p16);
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
    JAM.call(v106.write, v106, [v107], JAM.policy.p16);
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
    JAM.call(v108.write, v108, [v109], JAM.policy.p16);
  }
  var v110 = outputWindow.document;
  var v560 = "</head>\n" + '<body class="main">\n';
  var v497 = v560 + '<div class="title">';
  var v378 = v497 + title$$6;
  var v111 = v378 + " results</div>\n";
  JAM.call(v110.write, v110, [v111], JAM.policy.p16);
  outputWindow.status = "Please Wait.";
  return true;
}
function openWindowAlign(title$$7) {
  _openWindowAlign(title$$7, true);
  return;
}
function _openWindowAlign(title$$8, isBackground) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  outputWindow.focus();
  var v112 = outputWindow.document;
  var v561 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v498 = v561 + "<head>\n";
  var v379 = v498 + "<title>Sequence Manipulation Suite</title>\n";
  var v113 = v379 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v112.write, v112, [v113], JAM.policy.p16);
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
    JAM.call(v114.write, v114, [v115], JAM.policy.p16);
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
    JAM.call(v116.write, v116, [v117], JAM.policy.p16);
  }
  var v118 = outputWindow.document;
  var v564 = "</head>\n" + '<body class="main">\n';
  var v501 = v564 + '<div class="title">';
  var v382 = v501 + title$$8;
  var v119 = v382 + " results</div>\n";
  JAM.call(v118.write, v118, [v119], JAM.policy.p16);
  outputWindow.status = "Please Wait.";
  return true;
}
function removeFormatting(sequence$$5) {
  return JAM.call(sequence$$5.replace, sequence$$5, [/[\d\s]/g, ""], JAM.policy.p15);
}
function removeNonDna(sequence$$6) {
  return JAM.call(sequence$$6.replace, sequence$$6, [/[^gatucryswkmbdhvnxGATUCRYSWKMBDHVNX]/g, ""], JAM.policy.p15);
}
function removeNonDnaStrict(sequence$$7) {
  return JAM.call(sequence$$7.replace, sequence$$7, [/[^gatucGATUC]/g, ""], JAM.policy.p15);
}
function removeNonProtein(sequence$$8) {
  return JAM.call(sequence$$8.replace, sequence$$8, [/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, ""], JAM.policy.p15);
}
function removeNonProteinStrict(sequence$$9) {
  return JAM.call(sequence$$9.replace, sequence$$9, [/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, ""], JAM.policy.p15);
}
function removeNonProteinAllowDegen(sequence$$10) {
  return JAM.call(sequence$$10.replace, sequence$$10, [/[^ABCDEFGHIKLMNPQRSTVWYXZabcdefghiklmnpqrstvwyxz\*]/g, ""], JAM.policy.p15);
}
function removeNonProteinAllowX(sequence$$11) {
  return JAM.call(sequence$$11.replace, sequence$$11, [/[^ACDEFGHIKLMNPQRSTVWYZXacdefghiklmnpqrstvwyzx\*]/g, ""], JAM.policy.p15);
}
function removeWhiteSpace(text$$9) {
  return JAM.call(text$$9.replace, text$$9, [/\s/g, ""], JAM.policy.p15);
}
function removeNonLetters(sequence$$12) {
  return JAM.call(sequence$$12.replace, sequence$$12, [/[^A-Z]/gi, ""], JAM.policy.p15);
}
function reverse(dnaSequence$$2) {
  var tempDnaArray = new Array;
  var v383 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/./], JAM.policy.p17);
  var v120 = v383 != -1;
  if (v120) {
    tempDnaArray = JAM.call(dnaSequence$$2.match, dnaSequence$$2, [/./g], JAM.policy.p17);
    tempDnaArray = tempDnaArray.reverse();
    dnaSequence$$2 = JAM.call(tempDnaArray.join, tempDnaArray, [""], JAM.policy.p9);
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
  JAM.call(testArray.push, testArray, [testString], JAM.policy.p16);
  var v384 = testArray[0];
  var v124 = v384 != testString;
  if (v124) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v385 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p16);
  var v125 = v385 == -1;
  if (v125) {
    alert("Regular expression 'm' flag not supported. See browser compatibility page.");
    return false;
  }
  var caughtException = false;
  try {
    if (JAM.isEval(eval)) {
      re$$2 = eval("introspect(JAM.policy.pFull) { " + "Exception handling not supported. Check browser compatibility page." + " }");
    } else {
      re$$2 = JAM.call(eval, null, ["Exception handling not supported. Check browser compatibility page."]);
    }
  } catch (e$$4) {
    caughtException = true;
  }
  var v126 = !caughtException;
  if (v126) {
    alert("Exception handling not supported. See browser compatibility page.");
  }
  testString = "123";
  testString = JAM.call(testString.replace, testString, [/(\d)/g, v1], JAM.policy.p15);
  var v127 = testString != "1X2X3X";
  if (v127) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false;
  }
  var testNum = 2489.8237;
  var v386 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p10);
  var v128 = v386 != 2489.824;
  if (v128) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v387 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p10);
  var v129 = v387 != 2489.8;
  if (v129) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v388 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p17);
  var v130 = v388 == -1;
  if (v130) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v606 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p17);
  var v565 = v606 == -1;
  var v608 = !v565;
  if (v608) {
    var v607 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p17);
    v565 = v607 == -1;
  }
  var v502 = v565;
  var v567 = !v502;
  if (v567) {
    var v566 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p17);
    v502 = v566 == -1;
  }
  var v389 = v502;
  var v504 = !v389;
  if (v504) {
    var v503 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p17);
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
  var v390 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p17);
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
  var v392 = JAM.call(dnaSequence$$3.search, dnaSequence$$3, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p17);
  var v135 = v392 != -1;
  if (v135) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v393 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p17);
  var v136 = v393 != -1;
  if (v136) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v609 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p17);
  var v568 = v609 == -1;
  var v611 = !v568;
  if (v611) {
    var v610 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p17);
    v568 = v610 == -1;
  }
  var v505 = v568;
  var v570 = !v505;
  if (v570) {
    var v569 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p17);
    v505 = v569 == -1;
  }
  var v394 = v505;
  var v507 = !v394;
  if (v507) {
    var v506 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p17);
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
  var v612 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p17);
  var v571 = v612 == -1;
  var v614 = !v571;
  if (v614) {
    var v613 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p17);
    v571 = v613 == -1;
  }
  var v508 = v571;
  var v573 = !v508;
  if (v573) {
    var v572 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p17);
    v508 = v572 == -1;
  }
  var v395 = v508;
  var v510 = !v395;
  if (v510) {
    var v509 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p17);
    v395 = v509 == -1;
  }
  var v138 = v395;
  if (v138) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v396 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p17);
  var v139 = v396 == -1;
  if (v139) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v615 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p17);
  var v574 = v615 == -1;
  var v617 = !v574;
  if (v617) {
    var v616 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p17);
    v574 = v616 == -1;
  }
  var v511 = v574;
  var v576 = !v511;
  if (v576) {
    var v575 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p17);
    v511 = v575 == -1;
  }
  var v397 = v511;
  var v513 = !v397;
  if (v513) {
    var v512 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p17);
    v397 = v512 == -1;
  }
  var v140 = v397;
  if (v140) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v398 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p17);
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
        var v143 = JAM.call(text$$10.charAt, text$$10, [v400], JAM.policy.p16);
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
    JAM.call(v146.write, v146, [v147], JAM.policy.p16);
    lineOfText = "";
    v148 = i$$5 < stopBase;
  }
  return true;
}
function writeGroupNumDna(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition) {
  JAM.call(writeGroupNumDnaSetStart, null, [text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition, 0], JAM.policy.p19);
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
        var v152 = JAM.call(text$$12.charAt, text$$12, [v405], JAM.policy.p16);
        lineOfText$$1 = v151 + v152;
        k$$1 = k$$1 + 1;
        v153 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v156 = numberPosition$$1 == "above";
      if (v156) {
        var v154 = aboveNum;
        var v406 = JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p19);
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
      var v577 = JAM.call(adjustNumbering, null, [lineNum, numberingAdjustment], JAM.policy.p19);
      var v514 = rightNum(v577, "", 8, tabIn$$3);
      var v408 = v514 + lineOfText$$1;
      var v160 = v408 + "\n";
      JAM.call(v159.write, v159, [v160], JAM.policy.p16);
      var v164 = strands$$1 == "two";
      if (v164) {
        var v161 = outputWindow.document;
        var v578 = JAM.call(adjustNumbering, null, [lineNum, numberingAdjustment], JAM.policy.p19);
        var v515 = rightNum(v578, "", 8, tabIn$$3);
        var v516 = complement(lineOfText$$1);
        var v409 = v515 + v516;
        var v162 = v409 + "\n";
        JAM.call(v161.write, v161, [v162], JAM.policy.p16);
        var v163 = outputWindow.document;
        JAM.call(v163.write, v163, ["\n"], JAM.policy.p9);
      }
    } else {
      var v180 = numberPosition$$1 == "right";
      if (v180) {
        var v165 = outputWindow.document;
        var v517 = lineOfText$$1;
        var v518 = JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p19);
        var v410 = v517 + v518;
        var v166 = v410 + "\n";
        JAM.call(v165.write, v165, [v166], JAM.policy.p16);
        var v170 = strands$$1 == "two";
        if (v170) {
          var v167 = outputWindow.document;
          var v519 = complement(lineOfText$$1);
          var v520 = JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p19);
          var v411 = v519 + v520;
          var v168 = v411 + "\n";
          JAM.call(v167.write, v167, [v168], JAM.policy.p16);
          var v169 = outputWindow.document;
          JAM.call(v169.write, v169, ["\n"], JAM.policy.p9);
        }
      } else {
        var v179 = numberPosition$$1 == "above";
        if (v179) {
          var v171 = outputWindow.document;
          var v172 = aboveNum + "\n";
          JAM.call(v171.write, v171, [v172], JAM.policy.p16);
          var v173 = outputWindow.document;
          var v174 = lineOfText$$1 + "\n";
          JAM.call(v173.write, v173, [v174], JAM.policy.p16);
          var v178 = strands$$1 == "two";
          if (v178) {
            var v175 = outputWindow.document;
            var v412 = complement(lineOfText$$1);
            var v176 = v412 + "\n";
            JAM.call(v175.write, v175, [v176], JAM.policy.p16);
            var v177 = outputWindow.document;
            JAM.call(v177.write, v177, ["\n"], JAM.policy.p9);
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
        var v184 = JAM.call(text$$13.charAt, text$$13, [v415], JAM.policy.p16);
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
      JAM.call(v190.write, v190, [v191], JAM.policy.p16);
    } else {
      var v199 = numberPosition$$2 == "right";
      if (v199) {
        var v192 = outputWindow.document;
        var v418 = lineOfText$$2 + i$$7;
        var v193 = v418 + "\n";
        JAM.call(v192.write, v192, [v193], JAM.policy.p16);
      } else {
        var v198 = numberPosition$$2 == "above";
        if (v198) {
          var v194 = outputWindow.document;
          var v195 = aboveNum$$1 + "\n";
          JAM.call(v194.write, v194, [v195], JAM.policy.p16);
          var v196 = outputWindow.document;
          var v197 = lineOfText$$2 + "\n";
          JAM.call(v196.write, v196, [v197], JAM.policy.p16);
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
    randNum = JAM.call(Math.floor, Math, [v203], JAM.policy.p17);
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
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p17);
    needNewChar = true;
    for (;needNewChar;) {
      var v422 = Math.random();
      var v423 = components$$1.length;
      var v205 = v422 * v423;
      componentsIndex = JAM.call(Math.round, Math, [v205], JAM.policy.p17);
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
    var v426 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p13);
    var v427 = components$$1[componentsIndex];
    var v208 = v426 + v427;
    var v428 = randNum + 1;
    var v429 = sequence$$13.length;
    var v209 = JAM.call(sequence$$13.substring, sequence$$13, [v428, v429], JAM.policy.p21);
    sequence$$13 = v208 + v209;
    i$$8++;
    v210 = i$$8 < numMut;
  }
  var v211 = outputWindow.document;
  var v212 = addReturns(sequence$$13);
  JAM.call(v211.write, v211, [v212], JAM.policy.p16);
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
    tempNum$$1 = JAM.call(Math.floor, Math, [v213], JAM.policy.p17);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v432 = sequence$$14.length;
    var v216 = v432 == 60;
    if (v216) {
      var v214 = outputWindow.document;
      var v215 = sequence$$14 + "\n";
      JAM.call(v214.write, v214, [v215], JAM.policy.p16);
      sequence$$14 = "";
    }
    j$$9++;
    v217 = j$$9 < lengthOut$$1;
  }
  var v218 = outputWindow.document;
  var v219 = sequence$$14 + "\n";
  JAM.call(v218.write, v218, [v219], JAM.policy.p16);
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
    var v220 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    shiftValue = v220.length;
    var v581 = sequence$$15.length;
    var v525 = v581 - lookAhead;
    var v526 = sequence$$15.length;
    var v433 = JAM.call(sequence$$15.substring, sequence$$15, [v525, v526], JAM.policy.p21);
    var v221 = v433 + sequence$$15;
    var v222 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    sequence$$15 = v221 + v222;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v224 = outputWindow.document;
  JAM.call(v224.write, v224, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p9);
  var v225 = outputWindow.document;
  var v582 = '<tr><td class="title" width="200px">' + "Site:";
  var v527 = v582 + '</td><td class="title">';
  var v434 = v527 + "Positions:";
  var v226 = v434 + "</td></tr>\n";
  JAM.call(v225.write, v225, [v226], JAM.policy.p16);
  var i$$9 = 0;
  var v435 = arrayOfItems.length;
  var v242 = i$$9 < v435;
  for (;v242;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v436 = arrayOfItems[i$$9];
    var v227 = JAM.call(v436.match, v436, [/\/.+\//], JAM.policy.p17);
    matchExp = v227 + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    var v583 = arrayOfItems[i$$9];
    var v528 = JAM.call(v583.match, v583, [/\)\D*\d+/], JAM.policy.p17);
    var v437 = v528.toString();
    var v228 = JAM.call(v437.replace, v437, [/\)\D*/, ""], JAM.policy.p15);
    cutDistance = parseFloat(v228);
    var v234 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p16);
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
      v234 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p16);
    }
    var v442 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p17);
    var v235 = v442 != -1;
    if (v235) {
      tempString$$1 = JAM.call(tempString$$1.replace, tempString$$1, [/none,\s*/, ""], JAM.policy.p15);
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
    var v675 = JAM.call(v685.match, v685, [/\([^\(]+\)/], JAM.policy.p17);
    var v663 = v675.toString();
    var v650 = JAM.call(v663.replace, v663, [/\(|\)/g, ""], JAM.policy.p15);
    var v636 = v649 + v650;
    var v618 = v636 + '</td><td class="';
    var v584 = v618 + backGroundClass;
    var v530 = v584 + '">';
    var v443 = v530 + tempString$$1;
    var v241 = v443 + "</td></tr>\n";
    JAM.call(v240.write, v240, [v241], JAM.policy.p16);
    timesFound = 0;
    i$$9++;
    var v444 = arrayOfItems.length;
    v242 = i$$9 < v444;
  }
  var v243 = outputWindow.document;
  JAM.call(v243.write, v243, ["</tbody></table>\n"], JAM.policy.p9);
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v244 = outputWindow.document;
  JAM.call(v244.write, v244, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p9);
  var v245 = outputWindow.document;
  var v637 = '<tr><td class="title">' + "Pattern:";
  var v619 = v637 + '</td><td class="title">';
  var v585 = v619 + "Times found:";
  var v531 = v585 + '</td><td class="title">';
  var v445 = v531 + "Percentage:";
  var v246 = v445 + "</td></tr>\n";
  JAM.call(v245.write, v245, [v246], JAM.policy.p16);
  var i$$10 = 0;
  var v446 = arrayOfItems$$1.length;
  var v255 = i$$10 < v446;
  for (;v255;) {
    var tempNumber = 0;
    var v447 = arrayOfItems$$1[i$$10];
    var v247 = JAM.call(v447.match, v447, [/\/[^\/]+\//], JAM.policy.p17);
    var matchExp$$1 = v247 + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    var v448 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p16);
    var v249 = v448 != -1;
    if (v249) {
      var v248 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p16);
      tempNumber = v248.length;
    }
    var percentage = 0;
    var v532 = originalLength + 1;
    var v620 = arrayOfItems$$1[i$$10];
    var v586 = JAM.call(v620.match, v620, [/\d+/], JAM.policy.p17);
    var v533 = parseFloat(v586);
    var v449 = v532 - v533;
    var v252 = v449 > 0;
    if (v252) {
      var v250 = 100 * tempNumber;
      var v450 = originalLength + 1;
      var v587 = arrayOfItems$$1[i$$10];
      var v534 = JAM.call(v587.match, v587, [/\d+/], JAM.policy.p17);
      var v451 = parseFloat(v534);
      var v251 = v450 - v451;
      percentage = v250 / v251;
    }
    var v253 = outputWindow.document;
    var v686 = arrayOfItems$$1[i$$10];
    var v676 = JAM.call(v686.match, v686, [/\([^\(]+\)\b/], JAM.policy.p17);
    var v664 = v676.toString();
    var v651 = JAM.call(v664.replace, v664, [/\(|\)/g, ""], JAM.policy.p15);
    var v638 = "<tr><td>" + v651;
    var v621 = v638 + "</td><td>";
    var v588 = v621 + tempNumber;
    var v535 = v588 + "</td><td>";
    var v536 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p10);
    var v452 = v535 + v536;
    var v254 = v452 + "</td></tr>\n";
    JAM.call(v253.write, v253, [v254], JAM.policy.p16);
    i$$10++;
    var v453 = arrayOfItems$$1.length;
    v255 = i$$10 < v453;
  }
  var v256 = outputWindow.document;
  JAM.call(v256.write, v256, ["</tbody></table>\n"], JAM.policy.p9);
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
    randNum$$1 = JAM.call(Math.floor, Math, [v257], JAM.policy.p17);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p17);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p13);
    var v258 = randNum$$1 + 1;
    var v259 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v258, v259], JAM.policy.p15);
    sequence$$17 = tempString1 + tempString2;
    var v456 = tempSeq.length;
    var v262 = v456 == 60;
    if (v262) {
      var v260 = outputWindow.document;
      var v261 = tempSeq + "\n";
      JAM.call(v260.write, v260, [v261], JAM.policy.p16);
      tempSeq = "";
    }
    var v457 = sequence$$17.length;
    v263 = v457 > 0;
  }
  var v264 = outputWindow.document;
  var v265 = tempSeq + "\n";
  JAM.call(v264.write, v264, [v265], JAM.policy.p16);
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
    var v538 = JAM.call(checkTextLength, null, [v592, maxInput$$3], JAM.policy.p19);
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
  var recordArray = JAM.call(emblFile$$2.split, emblFile$$2, [/ID\s\s\s[^\f\n\r]*/], JAM.policy.p17);
  var i$$11 = 1;
  var v461 = recordArray.length;
  var v279 = i$$11 < v461;
  for (;v279;) {
    var v270 = recordArray[i$$11];
    var mainArray = JAM.call(v270.split, v270, [/[\f\n\r]\s*FH   Key             Location\/Qualifiers[\f\n\r]+\s*FH|[\f\n\r]\s*XX[\s]*[\f\n\r]\s*SQ[^\f\n\r]*/], JAM.policy.p17);
    var v541 = mainArray[0];
    var v462 = JAM.call(v541.search, v541, [/[\f\n\r]\s*DE[^\f\n\r]+/], JAM.policy.p17);
    var v272 = v462 != -1;
    if (v272) {
      var v542 = mainArray[0];
      var v463 = JAM.call(v542.match, v542, [/[\f\n\r]\s*DE[^\f\n\r]+/], JAM.policy.p17);
      var v271 = v463.toString();
      title$$9 = JAM.call(v271.replace, v271, [/[\f\n\r]\s*DE\s*/, ""], JAM.policy.p15);
    } else {
      title$$9 = "Untitled";
    }
    var v464 = JAM.call(title$$9.replace, title$$9, [/[\f\n\r\t]+$/g, ""], JAM.policy.p15);
    var v273 = filterFastaTitle(v464);
    title$$9 = v273 + "\n";
    var v274 = mainArray[2];
    dnaArray = JAM.call(v274.split, v274, [/\/{2}/], JAM.policy.p17);
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
    JAM.call(v277.write, v277, [v278], JAM.policy.p16);
    i$$11++;
    var v467 = recordArray.length;
    v279 = i$$11 < v467;
  }
  return true;
}
JAM.set(document, "onload", v2);
var v280 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p9);
JAM.set(v280, "onclick", v3);
var v281 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p9);
JAM.set(v281, "onclick", v4)
