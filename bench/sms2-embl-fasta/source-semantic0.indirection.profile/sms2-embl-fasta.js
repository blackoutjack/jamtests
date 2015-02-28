
JAM.startProfile('load');
function v4() {
  var v541 = document.forms;
  var v465 = v541[0];
  var v279 = v465.elements;
  var v5 = v279[0];
  v5.value = " ";
  return;
}
function v3() {
  try {
    emblFasta();
  } catch (e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    alert(v6);
  }
  return;
}
function v2() {
  var v280 = document.main_form;
  var v7 = v280.main_submit;
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
  var v281 = arrayOfSequences.length;
  var v9 = v281 < 2;
  if (v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v282 = arrayOfTitles.length;
  var v11 = i$$1 < v282;
  for (;v11;) {
    var v590 = arrayOfTitles[i$$1];
    var v542 = JAM.call(v590.search, v590, [/\S/], JAM.policy.p16);
    var v466 = v542 == -1;
    var v544 = !v466;
    if (v544) {
      var v591 = arrayOfSequences[i$$1];
      var v543 = JAM.call(v591.search, v591, [/\S/], JAM.policy.p16);
      v466 = v543 == -1;
    }
    var v283 = v466;
    var v468 = !v283;
    if (v468) {
      var v545 = arrayOfSequences[i$$1];
      var v467 = v545.length;
      v283 = v467 != lengthOfAlign;
    }
    var v10 = v283;
    if (v10) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v284 = arrayOfTitles.length;
    v11 = i$$1 < v284;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v622 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p16);
  var v592 = v622 == -1;
  var v624 = !v592;
  if (v624) {
    var v623 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p16);
    v592 = v623 == -1;
  }
  var v546 = v592;
  var v594 = !v546;
  if (v594) {
    var v593 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p16);
    v546 = v593 == -1;
  }
  var v469 = v546;
  var v548 = !v469;
  if (v548) {
    var v547 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p16);
    v469 = v547 == -1;
  }
  var v285 = v469;
  var v471 = !v285;
  if (v471) {
    var v470 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p16);
    v285 = v470 == -1;
  }
  var v12 = v285;
  if (v12) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v472 = formElement.value;
  var v286 = JAM.call(v472.search, v472, [/\S/], JAM.policy.p16);
  var v13 = v286 == -1;
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
  var v287 = arrayOfPatterns.length;
  var v16 = z$$2 < v287;
  for (;v16;) {
    var v473 = arrayOfPatterns[z$$2];
    var v288 = JAM.call(v473.search, v473, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p16);
    var v14 = v288 == -1;
    if (v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v474 = arrayOfPatterns[z$$2];
    var v289 = moreExpressionCheck(v474);
    var v15 = v289 == false;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v290 = arrayOfPatterns.length;
    v16 = z$$2 < v290;
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v291 = arrayOfPatterns.length;
  var v22 = j < v291;
  for (;v22;) {
    var v475 = arrayOfPatterns[j];
    var v292 = JAM.call(v475.match, v475, [/\/.+\//], JAM.policy.p16);
    var v19 = v292 + "gi";
    if (JAM.isEval(eval)) {
      var v712 = eval("introspect(JAM.policy.pFull) { " + v19 + " }")
    } else {
      var v712 = JAM.call(eval, null, [v19])
    }
    geneticCodeMatchExp[j] = v712;
    var v293 = arrayOfPatterns[j];
    var v20 = JAM.call(v293.match, v293, [/=[a-zA-Z\*]/], JAM.policy.p16);
    var v713 = v20.toString();
    geneticCodeMatchResult[j] = v713;
    var v21 = geneticCodeMatchResult[j];
    var v714 = JAM.call(v21.replace, v21, [/=/g, ""], JAM.policy.p15);
    geneticCodeMatchResult[j] = v714;
    j++;
    var v294 = arrayOfPatterns.length;
    v22 = j < v294;
  }
  var i$$2 = 0;
  var v476 = testSequence.length;
  var v295 = v476 - 3;
  var v29 = i$$2 <= v295;
  for (;v29;) {
    var v23 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v23], JAM.policy.p15);
    j = 0;
    var v296 = geneticCodeMatchExp.length;
    var v27 = j < v296;
    for (;v27;) {
      var v477 = geneticCodeMatchExp[j];
      var v297 = JAM.call(codon.search, codon, [v477], JAM.policy.p17);
      var v26 = v297 != -1;
      if (v26) {
        var v25 = oneMatch == true;
        if (v25) {
          var v298 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v24 = v298 + ".";
          alert(v24);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v299 = geneticCodeMatchExp.length;
      v27 = j < v299;
    }
    var v28 = oneMatch == false;
    if (v28) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v478 = testSequence.length;
    var v300 = v478 - 3;
    v29 = i$$2 <= v300;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v301 = arrayOfPatterns$$1.length;
  var v31 = z$$3 < v301;
  for (;v31;) {
    var v479 = arrayOfPatterns$$1[z$$3];
    var v302 = JAM.call(v479.search, v479, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p16);
    var v30 = v302 != -1;
    if (v30) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v303 = arrayOfPatterns$$1.length;
    v31 = z$$3 < v303;
  }
  var i$$3 = 0;
  var v304 = arrayOfPatterns$$1.length;
  var v35 = i$$3 < v304;
  for (;v35;) {
    var v480 = arrayOfPatterns$$1[i$$3];
    var v305 = "[" + v480;
    var v32 = v305 + "]";
    var re = new RegExp(v32, "gi");
    var j$$1 = i$$3 + 1;
    var v306 = arrayOfPatterns$$1.length;
    var v34 = j$$1 < v306;
    for (;v34;) {
      var v481 = arrayOfPatterns$$1[j$$1];
      var v307 = JAM.call(v481.search, v481, [re], JAM.policy.p17);
      var v33 = v307 != -1;
      if (v33) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v308 = arrayOfPatterns$$1.length;
      v34 = j$$1 < v308;
    }
    i$$3++;
    var v309 = arrayOfPatterns$$1.length;
    v35 = i$$3 < v309;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v310 = arrayOfPatterns$$2.length;
  var v38 = z$$4 < v310;
  for (;v38;) {
    var v482 = arrayOfPatterns$$2[z$$4];
    var v311 = JAM.call(v482.search, v482, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p16);
    var v36 = v311 == -1;
    if (v36) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v483 = arrayOfPatterns$$2[z$$4];
    var v312 = moreExpressionCheck(v483);
    var v37 = v312 == false;
    if (v37) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v313 = arrayOfPatterns$$2.length;
    v38 = z$$4 < v313;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v549 = getSequenceFromFasta(text$$7);
  var v484 = JAM.call(v549.replace, v549, [/[^A-Za-z]/g, ""], JAM.policy.p15);
  var v314 = v484.length;
  var v40 = v314 > maxInput;
  if (v40) {
    var v315 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v39 = v315 + " characters.";
    alert(v39);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v316 = text$$8.length;
  var v42 = v316 > maxInput$$1;
  if (v42) {
    var v317 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v41 = v317 + " characters.";
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
  JAM.call(v43.write, v43, ["</form>"], JAM.policy.p11);
  return true;
}
function closePre() {
  var v44 = outputWindow.document;
  JAM.call(v44.write, v44, ["</div>"], JAM.policy.p11);
  var v45 = outputWindow.document;
  JAM.call(v45.write, v45, ["</pre>\n"], JAM.policy.p11);
  return;
}
function closeTextArea() {
  var v46 = outputWindow.document;
  JAM.call(v46.write, v46, ["</textarea>"], JAM.policy.p11);
  return true;
}
function closeWindow() {
  var v47 = outputWindow.document;
  JAM.call(v47.write, v47, ["</body>\n</html>\n"], JAM.policy.p11);
  outputWindow.status = "Done.";
  var v48 = outputWindow.document;
  v48.close();
  return;
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
  var v318 = alignArray.length;
  var v49 = v318 < 3;
  if (v49) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v319 = alignArray.length;
  var v51 = i$$4 < v319;
  for (;v51;) {
    var v485 = alignArray[i$$4];
    var v320 = JAM.call(v485.search, v485, [/[^\s]+\s/], JAM.policy.p16);
    var v50 = v320 == -1;
    if (v50) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v321 = alignArray.length;
    v51 = i$$4 < v321;
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
  var v322 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p16);
  var v54 = v322 != -1;
  if (v54) {
    var v53 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p17);
    for (;v53;) {
      var v52 = matchArray[0];
      JAM.call(arrayOfFasta.push, arrayOfFasta, [v52], JAM.policy.p17);
      v53 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p17);
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v323 = sequence$$2.length;
  var v55 = "&gt;results for " + v323;
  var stringToReturn = v55 + " residue sequence ";
  var v324 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p16);
  var v57 = v324 != -1;
  if (v57) {
    var v325 = stringToReturn + '"';
    var v56 = v325 + fastaSequenceTitle;
    stringToReturn = v56 + '"';
  }
  var v326 = stringToReturn + ' starting "';
  var v327 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p13);
  var v58 = v326 + v327;
  stringToReturn = v58 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v328 = sequenceOne.length;
  var v59 = "Search results for " + v328;
  var stringToReturn$$1 = v59 + " residue sequence ";
  var v329 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p16);
  var v61 = v329 != -1;
  if (v61) {
    var v330 = stringToReturn$$1 + '"';
    var v60 = v330 + fastaSequenceTitleOne;
    stringToReturn$$1 = v60 + '"';
  }
  var v331 = stringToReturn$$1 + ' starting "';
  var v332 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p13);
  var v62 = v331 + v332;
  stringToReturn$$1 = v62 + '"\n';
  var v333 = stringToReturn$$1 + "and ";
  var v334 = sequenceTwo.length;
  var v63 = v333 + v334;
  stringToReturn$$1 = v63 + " residue sequence ";
  var v335 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p16);
  var v65 = v335 != -1;
  if (v65) {
    var v336 = stringToReturn$$1 + '"';
    var v64 = v336 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v64 + '"';
  }
  var v337 = stringToReturn$$1 + ' starting "';
  var v338 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p13);
  var v66 = v337 + v338;
  stringToReturn$$1 = v66 + '"';
  var v67 = '<div class="info">' + stringToReturn$$1;
  return v67 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v68 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v68);
  var j$$2 = 0;
  var v339 = arrayOfPatterns$$3.length;
  var v70 = j$$2 < v339;
  for (;v70;) {
    var v486 = arrayOfPatterns$$3[j$$2];
    var v340 = JAM.call(v486.match, v486, [/\/.+\//], JAM.policy.p16);
    var v69 = v340 + "gi";
    if (JAM.isEval(eval)) {
      var v715 = eval("introspect(JAM.policy.pFull) { " + v69 + " }")
    } else {
      var v715 = JAM.call(eval, null, [v69])
    }
    geneticCodeMatchExp$$1[j$$2] = v715;
    j$$2++;
    var v341 = arrayOfPatterns$$3.length;
    v70 = j$$2 < v341;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v71 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v71);
  var j$$3 = 0;
  var v342 = arrayOfPatterns$$4.length;
  var v74 = j$$3 < v342;
  for (;v74;) {
    var v343 = arrayOfPatterns$$4[j$$3];
    var v72 = JAM.call(v343.match, v343, [/=[a-zA-Z\*]/], JAM.policy.p16);
    var v716 = v72.toString();
    geneticCodeMatchResult$$1[j$$3] = v716;
    var v73 = geneticCodeMatchResult$$1[j$$3];
    var v717 = JAM.call(v73.replace, v73, [/=/g, ""], JAM.policy.p15);
    geneticCodeMatchResult$$1[j$$3] = v717;
    j$$3++;
    var v344 = arrayOfPatterns$$4.length;
    v74 = j$$3 < v344;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v345 = sequence$$3.length;
  var v75 = "Results for " + v345;
  var stringToReturn$$2 = v75 + " residue sequence ";
  var v346 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p16);
  var v77 = v346 != -1;
  if (v77) {
    var v347 = stringToReturn$$2 + '"';
    var v76 = v347 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v76 + '"';
  }
  var v348 = stringToReturn$$2 + ' starting "';
  var v349 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p13);
  var v78 = v348 + v349;
  stringToReturn$$2 = v78 + '"';
  var v79 = '<div class="info">' + stringToReturn$$2;
  return v79 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v487 = "Results for " + topology;
  var v350 = v487 + " ";
  var v351 = sequence$$4.length;
  var v80 = v350 + v351;
  var stringToReturn$$3 = v80 + " residue sequence ";
  var v352 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p16);
  var v82 = v352 != -1;
  if (v82) {
    var v353 = stringToReturn$$3 + '"';
    var v81 = v353 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v81 + '"';
  }
  var v354 = stringToReturn$$3 + ' starting "';
  var v355 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p13);
  var v83 = v354 + v355;
  stringToReturn$$3 = v83 + '"';
  var v84 = '<div class="info">' + stringToReturn$$3;
  return v84 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v356 = sequenceOne$$1.length;
  var v85 = "Alignment results for " + v356;
  var stringToReturn$$4 = v85 + " residue sequence ";
  var v357 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p16);
  var v87 = v357 != -1;
  if (v87) {
    var v358 = stringToReturn$$4 + '"';
    var v86 = v358 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v86 + '"';
  }
  var v359 = stringToReturn$$4 + ' starting "';
  var v360 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p13);
  var v88 = v359 + v360;
  stringToReturn$$4 = v88 + '"\n';
  var v361 = stringToReturn$$4 + "and ";
  var v362 = sequenceTwo$$1.length;
  var v89 = v361 + v362;
  stringToReturn$$4 = v89 + " residue sequence ";
  var v363 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p16);
  var v91 = v363 != -1;
  if (v91) {
    var v364 = stringToReturn$$4 + '"';
    var v90 = v364 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v90 + '"';
  }
  var v365 = stringToReturn$$4 + ' starting "';
  var v366 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p13);
  var v92 = v365 + v366;
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
    var v367 = Math.random();
    var v368 = components.length;
    var v94 = v367 * v368;
    tempNum = JAM.call(Math.floor, Math, [v94], JAM.policy.p16);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p17);
    j$$4++;
    v95 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p11);
}
function getSequenceFromFasta(sequenceRecord) {
  var v369 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p16);
  var v96 = v369 != -1;
  if (v96) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p15);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v370 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p16);
  var v98 = v370 != -1;
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
  var v690 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p16);
  var v683 = v690 != -1;
  var v692 = !v683;
  if (v692) {
    var v691 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p16);
    v683 = v691 != -1;
  }
  var v674 = v683;
  var v685 = !v674;
  if (v685) {
    var v684 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p16);
    v674 = v684 != -1;
  }
  var v664 = v674;
  var v676 = !v664;
  if (v676) {
    var v675 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p16);
    v664 = v675 != -1;
  }
  var v651 = v664;
  var v666 = !v651;
  if (v666) {
    var v665 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p16);
    v651 = v665 != -1;
  }
  var v638 = v651;
  var v653 = !v638;
  if (v653) {
    var v652 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p16);
    v638 = v652 != -1;
  }
  var v625 = v638;
  var v640 = !v625;
  if (v640) {
    var v639 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p16);
    v625 = v639 != -1;
  }
  var v595 = v625;
  var v627 = !v595;
  if (v627) {
    var v626 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p16);
    v595 = v626 != -1;
  }
  var v550 = v595;
  var v597 = !v550;
  if (v597) {
    var v596 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p16);
    v550 = v596 != -1;
  }
  var v488 = v550;
  var v552 = !v488;
  if (v552) {
    var v551 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p16);
    v488 = v551 != -1;
  }
  var v371 = v488;
  var v490 = !v371;
  if (v490) {
    var v489 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p16);
    v371 = v489 != -1;
  }
  var v99 = v371;
  if (v99) {
    return false;
  }
  return true;
}
function openForm() {
  var v100 = outputWindow.document;
  JAM.call(v100.write, v100, ['<form action="">\n'], JAM.policy.p11);
  return true;
}
function openPre() {
  var v101 = outputWindow.document;
  JAM.call(v101.write, v101, ["<pre>"], JAM.policy.p11);
  var v102 = outputWindow.document;
  JAM.call(v102.write, v102, ['<div class="pre">'], JAM.policy.p11);
  return;
}
function openTextArea() {
  var v103 = outputWindow.document;
  JAM.call(v103.write, v103, ['<br /><textarea rows="6" cols="61">\n'], JAM.policy.p11);
  return true;
}
function openWindow() {
  var title$$5 = "EMBL to FASTA";
  _openWindow(title$$5);
  return;
}
function _openWindow(title$$6) {
  var isColor = true;
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  outputWindow.focus();
  var v104 = outputWindow.document;
  var v553 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v491 = v553 + "<head>\n";
  var v372 = v491 + "<title>Sequence Manipulation Suite</title>\n";
  var v105 = v372 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v104.write, v104, [v105], JAM.policy.p17);
  if (isColor) {
    var v106 = outputWindow.document;
    var v705 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v701 = v705 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v697 = v701 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v693 = v697 + "div.info {font-weight: bold}\n";
    var v686 = v693 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v677 = v686 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v667 = v677 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v654 = v667 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v641 = v654 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v628 = v641 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v598 = v628 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v554 = v598 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v492 = v554 + "td.many {color: #000000}\n";
    var v373 = v492 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v107 = v373 + "</style>\n";
    JAM.call(v106.write, v106, [v107], JAM.policy.p17);
  } else {
    var v108 = outputWindow.document;
    var v709 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v706 = v709 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v702 = v706 + "div.title {display: none}\n";
    var v698 = v702 + "div.info {font-weight: bold}\n";
    var v694 = v698 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v687 = v694 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v678 = v687 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v668 = v678 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v655 = v668 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v642 = v655 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v629 = v642 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v599 = v629 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v555 = v599 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v493 = v555 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v374 = v493 + "img {display: none}\n";
    var v109 = v374 + "</style>\n";
    JAM.call(v108.write, v108, [v109], JAM.policy.p17);
  }
  var v110 = outputWindow.document;
  var v556 = "</head>\n" + '<body class="main">\n';
  var v494 = v556 + '<div class="title">';
  var v375 = v494 + title$$6;
  var v111 = v375 + " results</div>\n";
  JAM.call(v110.write, v110, [v111], JAM.policy.p17);
  outputWindow.status = "Please Wait.";
  return;
}
function openWindowAlign(title$$7) {
  _openWindowAlign(title$$7);
  return;
}
function _openWindowAlign(title$$8) {
  var isBackground = true;
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  outputWindow.focus();
  var v112 = outputWindow.document;
  var v557 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v495 = v557 + "<head>\n";
  var v376 = v495 + "<title>Sequence Manipulation Suite</title>\n";
  var v113 = v376 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v112.write, v112, [v113], JAM.policy.p17);
  if (isBackground) {
    var v114 = outputWindow.document;
    var v707 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v703 = v707 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v699 = v703 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v695 = v699 + "div.info {font-weight: bold}\n";
    var v688 = v695 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v679 = v688 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v669 = v679 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v656 = v669 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v643 = v656 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v630 = v643 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v600 = v630 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v558 = v600 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v496 = v558 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v377 = v496 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v115 = v377 + "</style>\n";
    JAM.call(v114.write, v114, [v115], JAM.policy.p17);
  } else {
    var v116 = outputWindow.document;
    var v711 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v710 = v711 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v708 = v710 + "div.title {display: none}\n";
    var v704 = v708 + "div.info {font-weight: bold}\n";
    var v700 = v704 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v696 = v700 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v689 = v696 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v680 = v689 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v670 = v680 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v657 = v670 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v644 = v657 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v631 = v644 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v601 = v631 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v559 = v601 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v497 = v559 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v378 = v497 + "img {display: none}\n";
    var v117 = v378 + "</style>\n";
    JAM.call(v116.write, v116, [v117], JAM.policy.p17);
  }
  var v118 = outputWindow.document;
  var v560 = "</head>\n" + '<body class="main">\n';
  var v498 = v560 + '<div class="title">';
  var v379 = v498 + title$$8;
  var v119 = v379 + " results</div>\n";
  JAM.call(v118.write, v118, [v119], JAM.policy.p17);
  outputWindow.status = "Please Wait.";
  return;
}
function removeFormatting(sequence$$5) {
  return JAM.call(sequence$$5.replace, sequence$$5, [/[\d\s]/g, ""], JAM.policy.p15);
}
function removeNonDna() {
  var sequence$$6 = dnaArray[0];
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
  var v380 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/./], JAM.policy.p16);
  var v120 = v380 != -1;
  if (v120) {
    tempDnaArray = JAM.call(dnaSequence$$2.match, dnaSequence$$2, [/./g], JAM.policy.p16);
    tempDnaArray = tempDnaArray.reverse();
    dnaSequence$$2 = JAM.call(tempDnaArray.join, tempDnaArray, [""], JAM.policy.p11);
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
  JAM.call(testArray.push, testArray, [testString], JAM.policy.p17);
  var v381 = testArray[0];
  var v124 = v381 != testString;
  if (v124) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v382 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p17);
  var v125 = v382 == -1;
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
  var v383 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p10);
  var v128 = v383 != 2489.824;
  if (v128) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v384 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p10);
  var v129 = v384 != 2489.8;
  if (v129) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v385 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p16);
  var v130 = v385 == -1;
  if (v130) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v602 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p16);
  var v561 = v602 == -1;
  var v604 = !v561;
  if (v604) {
    var v603 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p16);
    v561 = v603 == -1;
  }
  var v499 = v561;
  var v563 = !v499;
  if (v563) {
    var v562 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p16);
    v499 = v562 == -1;
  }
  var v386 = v499;
  var v501 = !v386;
  if (v501) {
    var v500 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p16);
    v386 = v500 == -1;
  }
  var v131 = v386;
  if (v131) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v387 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p16);
  var v132 = v387 == -1;
  if (v132) {
    alert("Please enter a number.");
    return false;
  }
  var v134 = theNumber$$2 > maxInput$$2;
  if (v134) {
    var v388 = "Please enter a number less than or equal to " + maxInput$$2;
    var v133 = v388 + ".";
    alert(v133);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$3) {
  var v389 = JAM.call(dnaSequence$$3.search, dnaSequence$$3, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p16);
  var v135 = v389 != -1;
  if (v135) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v390 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p16);
  var v136 = v390 != -1;
  if (v136) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v605 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p16);
  var v564 = v605 == -1;
  var v607 = !v564;
  if (v607) {
    var v606 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p16);
    v564 = v606 == -1;
  }
  var v502 = v564;
  var v566 = !v502;
  if (v566) {
    var v565 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p16);
    v502 = v565 == -1;
  }
  var v391 = v502;
  var v504 = !v391;
  if (v504) {
    var v503 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p16);
    v391 = v503 == -1;
  }
  var v137 = v391;
  if (v137) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v608 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p16);
  var v567 = v608 == -1;
  var v610 = !v567;
  if (v610) {
    var v609 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p16);
    v567 = v609 == -1;
  }
  var v505 = v567;
  var v569 = !v505;
  if (v569) {
    var v568 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p16);
    v505 = v568 == -1;
  }
  var v392 = v505;
  var v507 = !v392;
  if (v507) {
    var v506 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p16);
    v392 = v506 == -1;
  }
  var v138 = v392;
  if (v138) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v393 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p16);
  var v139 = v393 == -1;
  if (v139) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v611 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p16);
  var v570 = v611 == -1;
  var v613 = !v570;
  if (v613) {
    var v612 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p16);
    v570 = v612 == -1;
  }
  var v508 = v570;
  var v572 = !v508;
  if (v572) {
    var v571 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p16);
    v508 = v571 == -1;
  }
  var v394 = v508;
  var v510 = !v394;
  if (v510) {
    var v509 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p16);
    v394 = v509 == -1;
  }
  var v140 = v394;
  if (v140) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v395 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p16);
  var v141 = v395 == -1;
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
    var v396 = basePerLine / groupSize;
    var v145 = j$$6 <= v396;
    for (;v145;) {
      var v144 = k < groupSize;
      for (;v144;) {
        var v397 = k + i$$5;
        var v143 = JAM.call(text$$10.charAt, text$$10, [v397], JAM.policy.p17);
        lineOfText = lineOfText + v143;
        k = k + 1;
        v144 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v398 = basePerLine / groupSize;
      v145 = j$$6 <= v398;
    }
    var v146 = outputWindow.document;
    var v147 = lineOfText + "\n";
    JAM.call(v146.write, v146, [v147], JAM.policy.p17);
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
    var v399 = adjustment < 0;
    if (v399) {
      v399 = adjusted >= 0;
    }
    var v149 = v399;
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
    var v400 = basePerLine$$2 / groupSize$$2;
    var v156 = j$$7 <= v400;
    for (;v156;) {
      var v152 = k$$1 < groupSize$$2;
      for (;v152;) {
        var v401 = i$$6 + k$$1;
        var v150 = v401 >= stopBase$$2;
        if (v150) {
          break;
        }
        var v402 = k$$1 + i$$6;
        var v151 = JAM.call(text$$12.charAt, text$$12, [v402], JAM.policy.p17);
        lineOfText$$1 = lineOfText$$1 + v151;
        k$$1 = k$$1 + 1;
        v152 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v154 = numberPosition$$1 == "above";
      if (v154) {
        var v403 = adjustNumbering(i$$6, numberingAdjustment);
        var v153 = rightNum(v403, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v153;
      }
      var v155 = i$$6 >= stopBase$$2;
      if (v155) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v404 = basePerLine$$2 / groupSize$$2;
      v156 = j$$7 <= v404;
    }
    var v179 = numberPosition$$1 == "left";
    if (v179) {
      var v157 = outputWindow.document;
      var v573 = adjustNumbering(lineNum, numberingAdjustment);
      var v511 = rightNum(v573, "", 8, tabIn$$3);
      var v405 = v511 + lineOfText$$1;
      var v158 = v405 + "\n";
      JAM.call(v157.write, v157, [v158], JAM.policy.p17);
      var v162 = strands$$1 == "two";
      if (v162) {
        var v159 = outputWindow.document;
        var v574 = adjustNumbering(lineNum, numberingAdjustment);
        var v512 = rightNum(v574, "", 8, tabIn$$3);
        var v513 = complement(lineOfText$$1);
        var v406 = v512 + v513;
        var v160 = v406 + "\n";
        JAM.call(v159.write, v159, [v160], JAM.policy.p17);
        var v161 = outputWindow.document;
        JAM.call(v161.write, v161, ["\n"], JAM.policy.p11);
      }
    } else {
      var v178 = numberPosition$$1 == "right";
      if (v178) {
        var v163 = outputWindow.document;
        var v514 = adjustNumbering(i$$6, numberingAdjustment);
        var v407 = lineOfText$$1 + v514;
        var v164 = v407 + "\n";
        JAM.call(v163.write, v163, [v164], JAM.policy.p17);
        var v168 = strands$$1 == "two";
        if (v168) {
          var v165 = outputWindow.document;
          var v515 = complement(lineOfText$$1);
          var v516 = adjustNumbering(i$$6, numberingAdjustment);
          var v408 = v515 + v516;
          var v166 = v408 + "\n";
          JAM.call(v165.write, v165, [v166], JAM.policy.p17);
          var v167 = outputWindow.document;
          JAM.call(v167.write, v167, ["\n"], JAM.policy.p11);
        }
      } else {
        var v177 = numberPosition$$1 == "above";
        if (v177) {
          var v169 = outputWindow.document;
          var v170 = aboveNum + "\n";
          JAM.call(v169.write, v169, [v170], JAM.policy.p17);
          var v171 = outputWindow.document;
          var v172 = lineOfText$$1 + "\n";
          JAM.call(v171.write, v171, [v172], JAM.policy.p17);
          var v176 = strands$$1 == "two";
          if (v176) {
            var v173 = outputWindow.document;
            var v409 = complement(lineOfText$$1);
            var v174 = v409 + "\n";
            JAM.call(v173.write, v173, [v174], JAM.policy.p17);
            var v175 = outputWindow.document;
            JAM.call(v175.write, v175, ["\n"], JAM.policy.p11);
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
    var v410 = basePerLine$$3 / groupSize$$3;
    var v187 = j$$8 <= v410;
    for (;v187;) {
      var v183 = k$$2 < groupSize$$3;
      for (;v183;) {
        var v411 = i$$7 + k$$2;
        var v181 = v411 >= stopBase$$3;
        if (v181) {
          break;
        }
        var v412 = k$$2 + i$$7;
        var v182 = JAM.call(text$$13.charAt, text$$13, [v412], JAM.policy.p17);
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
      var v413 = basePerLine$$3 / groupSize$$3;
      v187 = j$$8 <= v413;
    }
    var v198 = numberPosition$$2 == "left";
    if (v198) {
      var v188 = outputWindow.document;
      var v517 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v414 = v517 + lineOfText$$2;
      var v189 = v414 + "\n";
      JAM.call(v188.write, v188, [v189], JAM.policy.p17);
    } else {
      var v197 = numberPosition$$2 == "right";
      if (v197) {
        var v190 = outputWindow.document;
        var v415 = lineOfText$$2 + i$$7;
        var v191 = v415 + "\n";
        JAM.call(v190.write, v190, [v191], JAM.policy.p17);
      } else {
        var v196 = numberPosition$$2 == "above";
        if (v196) {
          var v192 = outputWindow.document;
          var v193 = aboveNum$$1 + "\n";
          JAM.call(v192.write, v192, [v193], JAM.policy.p17);
          var v194 = outputWindow.document;
          var v195 = lineOfText$$2 + "\n";
          JAM.call(v194.write, v194, [v195], JAM.policy.p17);
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
  var v575 = sequence$$13.length;
  var v518 = v575 <= firstIndexToMutate;
  var v576 = !v518;
  if (v576) {
    v518 = lastIndexToMutate < 0;
  }
  var v416 = v518;
  var v519 = !v416;
  if (v519) {
    v416 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v200 = v416;
  if (v200) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v208 = i$$8 < numMut;
  for (;v208;) {
    maxNum = sequence$$13.length;
    var v417 = Math.random();
    var v201 = v417 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v201], JAM.policy.p16);
    var v418 = randNum < firstIndexToMutate;
    var v520 = !v418;
    if (v520) {
      v418 = randNum > lastIndexToMutate;
    }
    var v202 = v418;
    if (v202) {
      numMut++;
      i$$8++;
      v208 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p16);
    needNewChar = true;
    for (;needNewChar;) {
      var v419 = Math.random();
      var v420 = components$$1.length;
      var v203 = v419 * v420;
      componentsIndex = JAM.call(Math.round, Math, [v203], JAM.policy.p16);
      var v421 = components$$1.length;
      var v204 = componentsIndex == v421;
      if (v204) {
        componentsIndex = 0;
      }
      var v422 = components$$1[componentsIndex];
      var v205 = v422 != currentChar;
      if (v205) {
        needNewChar = false;
      }
    }
    var v423 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p13);
    var v424 = components$$1[componentsIndex];
    var v206 = v423 + v424;
    var v425 = randNum + 1;
    var v426 = sequence$$13.length;
    var v207 = JAM.call(sequence$$13.substring, sequence$$13, [v425, v426], JAM.policy.p27);
    sequence$$13 = v206 + v207;
    i$$8++;
    v208 = i$$8 < numMut;
  }
  var v209 = outputWindow.document;
  var v210 = addReturns(sequence$$13);
  JAM.call(v209.write, v209, [v210], JAM.policy.p17);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v215 = j$$9 < lengthOut$$1;
  for (;v215;) {
    var v427 = Math.random();
    var v428 = components$$2.length;
    var v211 = v427 * v428;
    tempNum$$1 = JAM.call(Math.floor, Math, [v211], JAM.policy.p16);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v429 = sequence$$14.length;
    var v214 = v429 == 60;
    if (v214) {
      var v212 = outputWindow.document;
      var v213 = sequence$$14 + "\n";
      JAM.call(v212.write, v212, [v213], JAM.policy.p17);
      sequence$$14 = "";
    }
    j$$9++;
    v215 = j$$9 < lengthOut$$1;
  }
  var v216 = outputWindow.document;
  var v217 = sequence$$14 + "\n";
  JAM.call(v216.write, v216, [v217], JAM.policy.p17);
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
    var v218 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    shiftValue = v218.length;
    var v577 = sequence$$15.length;
    var v521 = v577 - lookAhead;
    var v522 = sequence$$15.length;
    var v430 = JAM.call(sequence$$15.substring, sequence$$15, [v521, v522], JAM.policy.p27);
    var v219 = v430 + sequence$$15;
    var v220 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    sequence$$15 = v219 + v220;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v222 = outputWindow.document;
  JAM.call(v222.write, v222, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p11);
  var v223 = outputWindow.document;
  var v578 = '<tr><td class="title" width="200px">' + "Site:";
  var v523 = v578 + '</td><td class="title">';
  var v431 = v523 + "Positions:";
  var v224 = v431 + "</td></tr>\n";
  JAM.call(v223.write, v223, [v224], JAM.policy.p17);
  var i$$9 = 0;
  var v432 = arrayOfItems.length;
  var v240 = i$$9 < v432;
  for (;v240;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v433 = arrayOfItems[i$$9];
    var v225 = JAM.call(v433.match, v433, [/\/.+\//], JAM.policy.p16);
    matchExp = v225 + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    var v579 = arrayOfItems[i$$9];
    var v524 = JAM.call(v579.match, v579, [/\)\D*\d+/], JAM.policy.p16);
    var v434 = v524.toString();
    var v226 = JAM.call(v434.replace, v434, [/\)\D*/, ""], JAM.policy.p15);
    cutDistance = parseFloat(v226);
    var v232 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p17);
    for (;v232;) {
      var v227 = matchExp.lastIndex;
      matchPosition = v227 - cutDistance;
      var v435 = matchPosition >= lowerLimit;
      if (v435) {
        v435 = matchPosition < upperLimit;
      }
      var v230 = v435;
      if (v230) {
        timesFound++;
        var v228 = tempString$$1 + ", ";
        var v436 = matchPosition - shiftValue;
        var v229 = v436 + 1;
        tempString$$1 = v228 + v229;
      }
      var v437 = matchExp.lastIndex;
      var v525 = RegExp.lastMatch;
      var v438 = v525.length;
      var v231 = v437 - v438;
      matchExp.lastIndex = v231 + 1;
      v232 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p17);
    }
    var v439 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p16);
    var v233 = v439 != -1;
    if (v233) {
      tempString$$1 = JAM.call(tempString$$1.replace, tempString$$1, [/none,\s*/, ""], JAM.policy.p15);
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
    var v658 = '<tr><td class="' + backGroundClass;
    var v645 = v658 + '">';
    var v681 = arrayOfItems[i$$9];
    var v671 = JAM.call(v681.match, v681, [/\([^\(]+\)/], JAM.policy.p16);
    var v659 = v671.toString();
    var v646 = JAM.call(v659.replace, v659, [/\(|\)/g, ""], JAM.policy.p15);
    var v632 = v645 + v646;
    var v614 = v632 + '</td><td class="';
    var v580 = v614 + backGroundClass;
    var v526 = v580 + '">';
    var v440 = v526 + tempString$$1;
    var v239 = v440 + "</td></tr>\n";
    JAM.call(v238.write, v238, [v239], JAM.policy.p17);
    timesFound = 0;
    i$$9++;
    var v441 = arrayOfItems.length;
    v240 = i$$9 < v441;
  }
  var v241 = outputWindow.document;
  JAM.call(v241.write, v241, ["</tbody></table>\n"], JAM.policy.p11);
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v242 = outputWindow.document;
  JAM.call(v242.write, v242, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p11);
  var v243 = outputWindow.document;
  var v633 = '<tr><td class="title">' + "Pattern:";
  var v615 = v633 + '</td><td class="title">';
  var v581 = v615 + "Times found:";
  var v527 = v581 + '</td><td class="title">';
  var v442 = v527 + "Percentage:";
  var v244 = v442 + "</td></tr>\n";
  JAM.call(v243.write, v243, [v244], JAM.policy.p17);
  var i$$10 = 0;
  var v443 = arrayOfItems$$1.length;
  var v253 = i$$10 < v443;
  for (;v253;) {
    var tempNumber = 0;
    var v444 = arrayOfItems$$1[i$$10];
    var v245 = JAM.call(v444.match, v444, [/\/[^\/]+\//], JAM.policy.p16);
    var matchExp$$1 = v245 + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    var v445 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p17);
    var v247 = v445 != -1;
    if (v247) {
      var v246 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p17);
      tempNumber = v246.length;
    }
    var percentage = 0;
    var v528 = originalLength + 1;
    var v616 = arrayOfItems$$1[i$$10];
    var v582 = JAM.call(v616.match, v616, [/\d+/], JAM.policy.p16);
    var v529 = parseFloat(v582);
    var v446 = v528 - v529;
    var v250 = v446 > 0;
    if (v250) {
      var v248 = 100 * tempNumber;
      var v447 = originalLength + 1;
      var v583 = arrayOfItems$$1[i$$10];
      var v530 = JAM.call(v583.match, v583, [/\d+/], JAM.policy.p16);
      var v448 = parseFloat(v530);
      var v249 = v447 - v448;
      percentage = v248 / v249;
    }
    var v251 = outputWindow.document;
    var v682 = arrayOfItems$$1[i$$10];
    var v672 = JAM.call(v682.match, v682, [/\([^\(]+\)\b/], JAM.policy.p16);
    var v660 = v672.toString();
    var v647 = JAM.call(v660.replace, v660, [/\(|\)/g, ""], JAM.policy.p15);
    var v634 = "<tr><td>" + v647;
    var v617 = v634 + "</td><td>";
    var v584 = v617 + tempNumber;
    var v531 = v584 + "</td><td>";
    var v532 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p10);
    var v449 = v531 + v532;
    var v252 = v449 + "</td></tr>\n";
    JAM.call(v251.write, v251, [v252], JAM.policy.p17);
    i$$10++;
    var v450 = arrayOfItems$$1.length;
    v253 = i$$10 < v450;
  }
  var v254 = outputWindow.document;
  JAM.call(v254.write, v254, ["</tbody></table>\n"], JAM.policy.p11);
  return true;
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v451 = sequence$$17.length;
  var v261 = v451 > 0;
  for (;v261;) {
    maxNum$$1 = sequence$$17.length;
    var v452 = Math.random();
    var v255 = v452 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v255], JAM.policy.p16);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p16);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p13);
    var v256 = randNum$$1 + 1;
    var v257 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v256, v257], JAM.policy.p15);
    sequence$$17 = tempString1 + tempString2;
    var v453 = tempSeq.length;
    var v260 = v453 == 60;
    if (v260) {
      var v258 = outputWindow.document;
      var v259 = tempSeq + "\n";
      JAM.call(v258.write, v258, [v259], JAM.policy.p17);
      tempSeq = "";
    }
    var v454 = sequence$$17.length;
    v261 = v454 > 0;
  }
  var v262 = outputWindow.document;
  var v263 = tempSeq + "\n";
  JAM.call(v262.write, v262, [v263], JAM.policy.p17);
  return true;
}
function emblFasta() {
  var theDocument = document;
  var newDna = "";
  var maxInput$$3 = 2E5;
  var v455 = testScript();
  var v264 = v455 == false;
  if (v264) {
    return;
  }
  var v661 = theDocument.forms;
  var v648 = v661[0];
  var v635 = v648.elements;
  var v618 = v635[0];
  var v585 = checkFormElement(v618);
  var v533 = v585 == false;
  var v587 = !v533;
  if (v587) {
    var v673 = theDocument.forms;
    var v662 = v673[0];
    var v649 = v662.elements;
    var v636 = v649[0];
    var v619 = v636.value;
    var v586 = verifyEmbl(v619);
    v533 = v586 == false;
  }
  var v456 = v533;
  var v535 = !v456;
  if (v535) {
    var v663 = theDocument.forms;
    var v650 = v663[0];
    var v637 = v650.elements;
    var v620 = v637[0];
    var v588 = v620.value;
    var v534 = checkTextLength(v588, maxInput$$3);
    v456 = v534 == false;
  }
  var v265 = v456;
  if (v265) {
    return;
  }
  openWindow();
  openPre();
  var v621 = theDocument.forms;
  var v589 = v621[0];
  var v536 = v589.elements;
  var v457 = v536[0];
  var v266 = v457.value;
  emblToFasta(v266);
  closePre();
  closeWindow();
  return;
}
function emblToFasta(emblFile$$2) {
  var title$$9;
  var v267 = "_" + emblFile$$2;
  emblFile$$2 = v267 + "_";
  var recordArray = JAM.call(emblFile$$2.split, emblFile$$2, [/ID\s\s\s[^\f\n\r]*/], JAM.policy.p16);
  var i$$11 = 1;
  var v458 = recordArray.length;
  var v276 = i$$11 < v458;
  for (;v276;) {
    var v268 = recordArray[i$$11];
    var mainArray = JAM.call(v268.split, v268, [/[\f\n\r]\s*FH   Key             Location\/Qualifiers[\f\n\r]+\s*FH|[\f\n\r]\s*XX[\s]*[\f\n\r]\s*SQ[^\f\n\r]*/], JAM.policy.p16);
    var v537 = mainArray[0];
    var v459 = JAM.call(v537.search, v537, [/[\f\n\r]\s*DE[^\f\n\r]+/], JAM.policy.p16);
    var v270 = v459 != -1;
    if (v270) {
      var v538 = mainArray[0];
      var v460 = JAM.call(v538.match, v538, [/[\f\n\r]\s*DE[^\f\n\r]+/], JAM.policy.p16);
      var v269 = v460.toString();
      title$$9 = JAM.call(v269.replace, v269, [/[\f\n\r]\s*DE\s*/, ""], JAM.policy.p15);
    } else {
      title$$9 = "Untitled";
    }
    var v461 = JAM.call(title$$9.replace, title$$9, [/[\f\n\r\t]+$/g, ""], JAM.policy.p15);
    var v271 = filterFastaTitle(v461);
    title$$9 = v271 + "\n";
    var v272 = mainArray[2];
    dnaArray = JAM.call(v272.split, v272, [/\/{2}/], JAM.policy.p16);
    var v462 = dnaArray.length;
    var v273 = v462 == 1;
    if (v273) {
      alert("The entire EMBL file may not have been processed.");
      outputWindow.focus();
    }
    dnaSequence = removeNonDna();
    var v274 = outputWindow.document;
    var v539 = "&gt;" + title$$9;
    var v540 = addReturns(dnaSequence);
    var v463 = v539 + v540;
    var v275 = v463 + "\n\n";
    JAM.call(v274.write, v274, [v275], JAM.policy.p17);
    i$$11++;
    var v464 = recordArray.length;
    v276 = i$$11 < v464;
  }
  return;
}
JAM.set(document, "onload", v2);
var v277 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p11);
JAM.set(v277, "onclick", v3);
var v278 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p11);
JAM.set(v278, "onclick", v4)

JAM.stopProfile('load');
