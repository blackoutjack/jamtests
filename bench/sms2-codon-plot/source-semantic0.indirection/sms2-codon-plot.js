function v5() {
  var v594 = document.forms;
  var v507 = v594[0];
  var v300 = v507.elements;
  var v6 = v300[0];
  v6.value = " ";
  var v595 = document.forms;
  var v508 = v595[0];
  var v301 = v508.elements;
  var v7 = v301[4];
  v7.value = " ";
  return;
}
function v4() {
  try {
    codonPlot();
  } catch (e$$7) {
    var v8 = "The following error was encountered: " + e$$7;
    alert(v8);
  }
  return;
}
function v3() {
  var v302 = document.main_form;
  var v9 = v302.main_submit;
  v9.focus();
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
  var v10 = arrayOfSequences[0];
  var lengthOfAlign = v10.length;
  var v303 = arrayOfSequences.length;
  var v11 = v303 < 2;
  if (v11) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v304 = arrayOfTitles.length;
  var v13 = i$$1 < v304;
  for (;v13;) {
    var v650 = arrayOfTitles[i$$1];
    var v596 = JAM.call(v650.search, v650, [/\S/], JAM.policy.p16);
    var v509 = v596 == -1;
    var v598 = !v509;
    if (v598) {
      var v651 = arrayOfSequences[i$$1];
      var v597 = JAM.call(v651.search, v651, [/\S/], JAM.policy.p16);
      v509 = v597 == -1;
    }
    var v305 = v509;
    var v511 = !v305;
    if (v511) {
      var v599 = arrayOfSequences[i$$1];
      var v510 = v599.length;
      v305 = v510 != lengthOfAlign;
    }
    var v12 = v305;
    if (v12) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v306 = arrayOfTitles.length;
    v13 = i$$1 < v306;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v687 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p16);
  var v652 = v687 == -1;
  var v689 = !v652;
  if (v689) {
    var v688 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p16);
    v652 = v688 == -1;
  }
  var v600 = v652;
  var v654 = !v600;
  if (v654) {
    var v653 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p16);
    v600 = v653 == -1;
  }
  var v512 = v600;
  var v602 = !v512;
  if (v602) {
    var v601 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p16);
    v512 = v601 == -1;
  }
  var v307 = v512;
  var v514 = !v307;
  if (v514) {
    var v513 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p16);
    v307 = v513 == -1;
  }
  var v14 = v307;
  if (v14) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v515 = formElement.value;
  var v308 = JAM.call(v515.search, v515, [/\S/], JAM.policy.p16);
  var v15 = v308 == -1;
  if (v15) {
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
  var v309 = arrayOfPatterns.length;
  var v18 = z$$2 < v309;
  for (;v18;) {
    var v516 = arrayOfPatterns[z$$2];
    var v310 = JAM.call(v516.search, v516, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p16);
    var v16 = v310 == -1;
    if (v16) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v517 = arrayOfPatterns[z$$2];
    var v311 = moreExpressionCheck(v517);
    var v17 = v311 == false;
    if (v17) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v312 = arrayOfPatterns.length;
    v18 = z$$2 < v312;
  }
  var v19 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v19);
  var v20 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v20);
  var j = 0;
  var v313 = arrayOfPatterns.length;
  var v24 = j < v313;
  for (;v24;) {
    var v518 = arrayOfPatterns[j];
    var v314 = JAM.call(v518.match, v518, [/\/.+\//], JAM.policy.p16);
    var v21 = v314 + "gi";
    if (JAM.isEval(eval)) {
      var v796 = eval("introspect(JAM.policy.pFull) { " + v21 + " }")
    } else {
      var v796 = JAM.call(eval, null, [v21])
    }
    geneticCodeMatchExp[j] = v796;
    var v315 = arrayOfPatterns[j];
    var v22 = JAM.call(v315.match, v315, [/=[a-zA-Z\*]/], JAM.policy.p16);
    var v797 = v22.toString();
    geneticCodeMatchResult[j] = v797;
    var v23 = geneticCodeMatchResult[j];
    var v798 = JAM.call(v23.replace, v23, [/=/g, ""], JAM.policy.p15);
    geneticCodeMatchResult[j] = v798;
    j++;
    var v316 = arrayOfPatterns.length;
    v24 = j < v316;
  }
  var i$$2 = 0;
  var v519 = testSequence.length;
  var v317 = v519 - 3;
  var v31 = i$$2 <= v317;
  for (;v31;) {
    var v25 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v25], JAM.policy.p15);
    j = 0;
    var v318 = geneticCodeMatchExp.length;
    var v29 = j < v318;
    for (;v29;) {
      var v520 = geneticCodeMatchExp[j];
      var v319 = JAM.call(codon.search, codon, [v520], JAM.policy.p17);
      var v28 = v319 != -1;
      if (v28) {
        var v27 = oneMatch == true;
        if (v27) {
          var v320 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v26 = v320 + ".";
          alert(v26);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v321 = geneticCodeMatchExp.length;
      v29 = j < v321;
    }
    var v30 = oneMatch == false;
    if (v30) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v521 = testSequence.length;
    var v322 = v521 - 3;
    v31 = i$$2 <= v322;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v323 = arrayOfPatterns$$1.length;
  var v33 = z$$3 < v323;
  for (;v33;) {
    var v522 = arrayOfPatterns$$1[z$$3];
    var v324 = JAM.call(v522.search, v522, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p16);
    var v32 = v324 != -1;
    if (v32) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v325 = arrayOfPatterns$$1.length;
    v33 = z$$3 < v325;
  }
  var i$$3 = 0;
  var v326 = arrayOfPatterns$$1.length;
  var v37 = i$$3 < v326;
  for (;v37;) {
    var v523 = arrayOfPatterns$$1[i$$3];
    var v327 = "[" + v523;
    var v34 = v327 + "]";
    var re = new RegExp(v34, "gi");
    var j$$1 = i$$3 + 1;
    var v328 = arrayOfPatterns$$1.length;
    var v36 = j$$1 < v328;
    for (;v36;) {
      var v524 = arrayOfPatterns$$1[j$$1];
      var v329 = JAM.call(v524.search, v524, [re], JAM.policy.p17);
      var v35 = v329 != -1;
      if (v35) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v330 = arrayOfPatterns$$1.length;
      v36 = j$$1 < v330;
    }
    i$$3++;
    var v331 = arrayOfPatterns$$1.length;
    v37 = i$$3 < v331;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v332 = arrayOfPatterns$$2.length;
  var v40 = z$$4 < v332;
  for (;v40;) {
    var v525 = arrayOfPatterns$$2[z$$4];
    var v333 = JAM.call(v525.search, v525, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p16);
    var v38 = v333 == -1;
    if (v38) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v526 = arrayOfPatterns$$2[z$$4];
    var v334 = moreExpressionCheck(v526);
    var v39 = v334 == false;
    if (v39) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v335 = arrayOfPatterns$$2.length;
    v40 = z$$4 < v335;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v603 = getSequenceFromFasta(text$$7);
  var v527 = JAM.call(v603.replace, v603, [/[^A-Za-z]/g, ""], JAM.policy.p15);
  var v336 = v527.length;
  var v42 = v336 > maxInput;
  if (v42) {
    var v337 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v41 = v337 + " characters.";
    alert(v41);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v338 = text$$8.length;
  var v44 = v338 > maxInput$$1;
  if (v44) {
    var v339 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v43 = v339 + " characters.";
    alert(v43);
    return false;
  } else {
    return true;
  }
  return;
}
function complement(dnaSequence) {
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/g/g, "1"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/c/g, "2"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "c"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "g"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/G/g, "1"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/C/g, "2"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "C"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "G"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/a/g, "1"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/t/g, "2"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "t"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "a"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/A/g, "1"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/T/g, "2"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "T"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "A"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/u/g, "a"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/U/g, "A"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/r/g, "1"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/y/g, "2"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "y"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "r"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/R/g, "1"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/Y/g, "2"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "Y"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "R"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/k/g, "1"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/m/g, "2"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "m"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "k"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/K/g, "1"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/M/g, "2"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "M"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "K"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/b/g, "1"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/v/g, "2"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "v"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "b"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/B/g, "1"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/V/g, "2"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "V"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "B"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/d/g, "1"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/h/g, "2"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "h"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "d"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/D/g, "1"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/H/g, "2"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "H"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "D"], JAM.policy.p15);
  return dnaSequence;
}
function closeForm() {
  var v45 = outputWindow.document;
  JAM.call(v45.write, v45, ["</form>"], JAM.policy.p9);
  return true;
}
function closePre() {
  var v46 = outputWindow.document;
  JAM.call(v46.write, v46, ["</div>"], JAM.policy.p9);
  var v47 = outputWindow.document;
  JAM.call(v47.write, v47, ["</pre>\n"], JAM.policy.p9);
  return;
}
function closeTextArea() {
  var v48 = outputWindow.document;
  JAM.call(v48.write, v48, ["</textarea>"], JAM.policy.p9);
  return true;
}
function closeWindow() {
  var v49 = outputWindow.document;
  JAM.call(v49.write, v49, ["</body>\n</html>\n"], JAM.policy.p9);
  outputWindow.status = "Done.";
  var v50 = outputWindow.document;
  v50.close();
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
  var v340 = alignArray.length;
  var v51 = v340 < 3;
  if (v51) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v341 = alignArray.length;
  var v53 = i$$4 < v341;
  for (;v53;) {
    var v528 = alignArray[i$$4];
    var v342 = JAM.call(v528.search, v528, [/[^\s]+\s/], JAM.policy.p16);
    var v52 = v342 == -1;
    if (v52) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v343 = alignArray.length;
    v53 = i$$4 < v343;
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
  var v344 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p16);
  var v56 = v344 != -1;
  if (v56) {
    var v55 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p17);
    for (;v55;) {
      var v54 = matchArray[0];
      JAM.call(arrayOfFasta.push, arrayOfFasta, [v54], JAM.policy.p17);
      v55 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p17);
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v345 = sequence$$2.length;
  var v57 = "&gt;results for " + v345;
  var stringToReturn = v57 + " residue sequence ";
  var v346 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p16);
  var v59 = v346 != -1;
  if (v59) {
    var v347 = stringToReturn + '"';
    var v58 = v347 + fastaSequenceTitle;
    stringToReturn = v58 + '"';
  }
  var v348 = stringToReturn + ' starting "';
  var v349 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p13);
  var v60 = v348 + v349;
  stringToReturn = v60 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v350 = sequenceOne.length;
  var v61 = "Search results for " + v350;
  var stringToReturn$$1 = v61 + " residue sequence ";
  var v351 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p16);
  var v63 = v351 != -1;
  if (v63) {
    var v352 = stringToReturn$$1 + '"';
    var v62 = v352 + fastaSequenceTitleOne;
    stringToReturn$$1 = v62 + '"';
  }
  var v353 = stringToReturn$$1 + ' starting "';
  var v354 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p13);
  var v64 = v353 + v354;
  stringToReturn$$1 = v64 + '"\n';
  var v355 = stringToReturn$$1 + "and ";
  var v356 = sequenceTwo.length;
  var v65 = v355 + v356;
  stringToReturn$$1 = v65 + " residue sequence ";
  var v357 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p16);
  var v67 = v357 != -1;
  if (v67) {
    var v358 = stringToReturn$$1 + '"';
    var v66 = v358 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v66 + '"';
  }
  var v359 = stringToReturn$$1 + ' starting "';
  var v360 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p13);
  var v68 = v359 + v360;
  stringToReturn$$1 = v68 + '"';
  var v69 = '<div class="info">' + stringToReturn$$1;
  return v69 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v70 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v70);
  var j$$2 = 0;
  var v361 = arrayOfPatterns$$3.length;
  var v72 = j$$2 < v361;
  for (;v72;) {
    var v529 = arrayOfPatterns$$3[j$$2];
    var v362 = JAM.call(v529.match, v529, [/\/.+\//], JAM.policy.p16);
    var v71 = v362 + "gi";
    if (JAM.isEval(eval)) {
      var v799 = eval("introspect(JAM.policy.pFull) { " + v71 + " }")
    } else {
      var v799 = JAM.call(eval, null, [v71])
    }
    geneticCodeMatchExp$$1[j$$2] = v799;
    j$$2++;
    var v363 = arrayOfPatterns$$3.length;
    v72 = j$$2 < v363;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v73 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v73);
  var j$$3 = 0;
  var v364 = arrayOfPatterns$$4.length;
  var v76 = j$$3 < v364;
  for (;v76;) {
    var v365 = arrayOfPatterns$$4[j$$3];
    var v74 = JAM.call(v365.match, v365, [/=[a-zA-Z\*]/], JAM.policy.p16);
    var v800 = v74.toString();
    geneticCodeMatchResult$$1[j$$3] = v800;
    var v75 = geneticCodeMatchResult$$1[j$$3];
    var v801 = JAM.call(v75.replace, v75, [/=/g, ""], JAM.policy.p15);
    geneticCodeMatchResult$$1[j$$3] = v801;
    j$$3++;
    var v366 = arrayOfPatterns$$4.length;
    v76 = j$$3 < v366;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v367 = sequence$$3.length;
  var v77 = "Results for " + v367;
  var stringToReturn$$2 = v77 + " residue sequence ";
  var v368 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p16);
  var v79 = v368 != -1;
  if (v79) {
    var v369 = stringToReturn$$2 + '"';
    var v78 = v369 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v78 + '"';
  }
  var v370 = stringToReturn$$2 + ' starting "';
  var v371 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p13);
  var v80 = v370 + v371;
  stringToReturn$$2 = v80 + '"';
  var v81 = '<div class="info">' + stringToReturn$$2;
  return v81 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v530 = "Results for " + topology;
  var v372 = v530 + " ";
  var v373 = sequence$$4.length;
  var v82 = v372 + v373;
  var stringToReturn$$3 = v82 + " residue sequence ";
  var v374 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p16);
  var v84 = v374 != -1;
  if (v84) {
    var v375 = stringToReturn$$3 + '"';
    var v83 = v375 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v83 + '"';
  }
  var v376 = stringToReturn$$3 + ' starting "';
  var v377 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p13);
  var v85 = v376 + v377;
  stringToReturn$$3 = v85 + '"';
  var v86 = '<div class="info">' + stringToReturn$$3;
  return v86 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v378 = sequenceOne$$1.length;
  var v87 = "Alignment results for " + v378;
  var stringToReturn$$4 = v87 + " residue sequence ";
  var v379 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p16);
  var v89 = v379 != -1;
  if (v89) {
    var v380 = stringToReturn$$4 + '"';
    var v88 = v380 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v88 + '"';
  }
  var v381 = stringToReturn$$4 + ' starting "';
  var v382 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p13);
  var v90 = v381 + v382;
  stringToReturn$$4 = v90 + '"\n';
  var v383 = stringToReturn$$4 + "and ";
  var v384 = sequenceTwo$$1.length;
  var v91 = v383 + v384;
  stringToReturn$$4 = v91 + " residue sequence ";
  var v385 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p16);
  var v93 = v385 != -1;
  if (v93) {
    var v386 = stringToReturn$$4 + '"';
    var v92 = v386 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v92 + '"';
  }
  var v387 = stringToReturn$$4 + ' starting "';
  var v388 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p13);
  var v94 = v387 + v388;
  stringToReturn$$4 = v94 + '"';
  var v95 = '<div class="info">' + stringToReturn$$4;
  return v95 + "</div>\n";
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v97 = j$$4 < lengthOut;
  for (;v97;) {
    var v389 = Math.random();
    var v390 = components.length;
    var v96 = v389 * v390;
    tempNum = JAM.call(Math.floor, Math, [v96], JAM.policy.p16);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p17);
    j$$4++;
    v97 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p9);
}
function getSequenceFromFasta(sequenceRecord) {
  var v391 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p16);
  var v98 = v391 != -1;
  if (v98) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p15);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v392 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p16);
  var v100 = v392 != -1;
  if (v100) {
    var v99 = JAM.call(sequenceRecord$$1.match, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p15);
    fastaTitle = v99.toString();
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\>|[\f\n\r]/g, ""], JAM.policy.p15);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\s{2,}/g, " "], JAM.policy.p15);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/[\<\>]/gi, ""], JAM.policy.p15);
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  var v772 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p16);
  var v764 = v772 != -1;
  var v774 = !v764;
  if (v774) {
    var v773 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p16);
    v764 = v773 != -1;
  }
  var v752 = v764;
  var v766 = !v752;
  if (v766) {
    var v765 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p16);
    v752 = v765 != -1;
  }
  var v740 = v752;
  var v754 = !v740;
  if (v754) {
    var v753 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p16);
    v740 = v753 != -1;
  }
  var v723 = v740;
  var v742 = !v723;
  if (v742) {
    var v741 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p16);
    v723 = v741 != -1;
  }
  var v707 = v723;
  var v725 = !v707;
  if (v725) {
    var v724 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p16);
    v707 = v724 != -1;
  }
  var v690 = v707;
  var v709 = !v690;
  if (v709) {
    var v708 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p16);
    v690 = v708 != -1;
  }
  var v655 = v690;
  var v692 = !v655;
  if (v692) {
    var v691 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p16);
    v655 = v691 != -1;
  }
  var v604 = v655;
  var v657 = !v604;
  if (v657) {
    var v656 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p16);
    v604 = v656 != -1;
  }
  var v531 = v604;
  var v606 = !v531;
  if (v606) {
    var v605 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p16);
    v531 = v605 != -1;
  }
  var v393 = v531;
  var v533 = !v393;
  if (v533) {
    var v532 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p16);
    v393 = v532 != -1;
  }
  var v101 = v393;
  if (v101) {
    return false;
  }
  return true;
}
function openForm() {
  var v102 = outputWindow.document;
  JAM.call(v102.write, v102, ['<form action="">\n'], JAM.policy.p9);
  return true;
}
function openPre() {
  var v103 = outputWindow.document;
  JAM.call(v103.write, v103, ["<pre>"], JAM.policy.p9);
  var v104 = outputWindow.document;
  JAM.call(v104.write, v104, ['<div class="pre">'], JAM.policy.p9);
  return;
}
function openTextArea() {
  var v105 = outputWindow.document;
  JAM.call(v105.write, v105, ['<br /><textarea rows="6" cols="61">\n'], JAM.policy.p9);
  return true;
}
function openWindow() {
  var title$$5 = "Codon Plot";
  _openWindow(title$$5);
  return;
}
function _openWindow(title$$6) {
  var isColor = true;
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  outputWindow.focus();
  var v106 = outputWindow.document;
  var v607 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v534 = v607 + "<head>\n";
  var v394 = v534 + "<title>Sequence Manipulation Suite</title>\n";
  var v107 = v394 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v106.write, v106, [v107], JAM.policy.p17);
  if (isColor) {
    var v108 = outputWindow.document;
    var v789 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v785 = v789 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v780 = v785 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v775 = v780 + "div.info {font-weight: bold}\n";
    var v767 = v775 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v755 = v767 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v743 = v755 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v726 = v743 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v710 = v726 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v693 = v710 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v658 = v693 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v608 = v658 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v535 = v608 + "td.many {color: #000000}\n";
    var v395 = v535 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v109 = v395 + "</style>\n";
    JAM.call(v108.write, v108, [v109], JAM.policy.p17);
  } else {
    var v110 = outputWindow.document;
    var v793 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v790 = v793 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v786 = v790 + "div.title {display: none}\n";
    var v781 = v786 + "div.info {font-weight: bold}\n";
    var v776 = v781 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v768 = v776 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v756 = v768 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v744 = v756 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v727 = v744 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v711 = v727 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v694 = v711 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v659 = v694 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v609 = v659 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v536 = v609 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v396 = v536 + "img {display: none}\n";
    var v111 = v396 + "</style>\n";
    JAM.call(v110.write, v110, [v111], JAM.policy.p17);
  }
  var v112 = outputWindow.document;
  var v610 = "</head>\n" + '<body class="main">\n';
  var v537 = v610 + '<div class="title">';
  var v397 = v537 + title$$6;
  var v113 = v397 + " results</div>\n";
  JAM.call(v112.write, v112, [v113], JAM.policy.p17);
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
  var v114 = outputWindow.document;
  var v611 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v538 = v611 + "<head>\n";
  var v398 = v538 + "<title>Sequence Manipulation Suite</title>\n";
  var v115 = v398 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v114.write, v114, [v115], JAM.policy.p17);
  if (isBackground) {
    var v116 = outputWindow.document;
    var v791 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v787 = v791 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v782 = v787 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v777 = v782 + "div.info {font-weight: bold}\n";
    var v769 = v777 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v757 = v769 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v745 = v757 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v728 = v745 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v712 = v728 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v695 = v712 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v660 = v695 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v612 = v660 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v539 = v612 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v399 = v539 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v117 = v399 + "</style>\n";
    JAM.call(v116.write, v116, [v117], JAM.policy.p17);
  } else {
    var v118 = outputWindow.document;
    var v795 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v794 = v795 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v792 = v794 + "div.title {display: none}\n";
    var v788 = v792 + "div.info {font-weight: bold}\n";
    var v783 = v788 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v778 = v783 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v770 = v778 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v758 = v770 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v746 = v758 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v729 = v746 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v713 = v729 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v696 = v713 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v661 = v696 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v613 = v661 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v540 = v613 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v400 = v540 + "img {display: none}\n";
    var v119 = v400 + "</style>\n";
    JAM.call(v118.write, v118, [v119], JAM.policy.p17);
  }
  var v120 = outputWindow.document;
  var v614 = "</head>\n" + '<body class="main">\n';
  var v541 = v614 + '<div class="title">';
  var v401 = v541 + title$$8;
  var v121 = v401 + " results</div>\n";
  JAM.call(v120.write, v120, [v121], JAM.policy.p17);
  outputWindow.status = "Please Wait.";
  return;
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
function reverse(dnaSequence$$1) {
  var tempDnaArray = new Array;
  var v402 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p16);
  var v122 = v402 != -1;
  if (v122) {
    tempDnaArray = JAM.call(dnaSequence$$1.match, dnaSequence$$1, [/./g], JAM.policy.p16);
    tempDnaArray = tempDnaArray.reverse();
    dnaSequence$$1 = JAM.call(tempDnaArray.join, tempDnaArray, [""], JAM.policy.p9);
  }
  return dnaSequence$$1;
}
function rightNum(theNumber, sequenceToAppend, lengthOfColumn, tabIn) {
  var j$$5 = 0;
  var tempString = "";
  theNumber = theNumber.toString();
  j$$5 = theNumber.length;
  var v123 = j$$5 < lengthOfColumn;
  for (;v123;) {
    tempString = tempString + " ";
    j$$5++;
    v123 = j$$5 < lengthOfColumn;
  }
  var v124 = tempString + theNumber;
  theNumber = v124 + " ";
  var v125 = sequenceToAppend + theNumber;
  sequenceToAppend = v125 + tabIn;
  return sequenceToAppend;
}
function testScript() {
  function v1(str$$7, p1$$1, offset$$9, s$$3) {
    return p1$$1 + "X";
  }
  var testArray = new Array;
  var testString = "1234567890";
  JAM.call(testArray.push, testArray, [testString], JAM.policy.p17);
  var v403 = testArray[0];
  var v126 = v403 != testString;
  if (v126) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v404 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p17);
  var v127 = v404 == -1;
  if (v127) {
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
  var v128 = !caughtException;
  if (v128) {
    alert("Exception handling not supported. See browser compatibility page.");
  }
  testString = "123";
  testString = JAM.call(testString.replace, testString, [/(\d)/g, v1], JAM.policy.p15);
  var v129 = testString != "1X2X3X";
  if (v129) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false;
  }
  var testNum = 2489.8237;
  var v405 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p11);
  var v130 = v405 != 2489.824;
  if (v130) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v406 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p11);
  var v131 = v406 != 2489.8;
  if (v131) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v407 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p16);
  var v132 = v407 == -1;
  if (v132) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v662 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p16);
  var v615 = v662 == -1;
  var v664 = !v615;
  if (v664) {
    var v663 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p16);
    v615 = v663 == -1;
  }
  var v542 = v615;
  var v617 = !v542;
  if (v617) {
    var v616 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p16);
    v542 = v616 == -1;
  }
  var v408 = v542;
  var v544 = !v408;
  if (v544) {
    var v543 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p16);
    v408 = v543 == -1;
  }
  var v133 = v408;
  if (v133) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v409 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p16);
  var v134 = v409 == -1;
  if (v134) {
    alert("Please enter a number.");
    return false;
  }
  var v136 = theNumber$$2 > maxInput$$2;
  if (v136) {
    var v410 = "Please enter a number less than or equal to " + maxInput$$2;
    var v135 = v410 + ".";
    alert(v135);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v411 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p16);
  var v137 = v411 != -1;
  if (v137) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return;
}
function verifyProtein(proteinSequence) {
  var v412 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p16);
  var v138 = v412 != -1;
  if (v138) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v665 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p16);
  var v618 = v665 == -1;
  var v667 = !v618;
  if (v667) {
    var v666 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p16);
    v618 = v666 == -1;
  }
  var v545 = v618;
  var v620 = !v545;
  if (v620) {
    var v619 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p16);
    v545 = v619 == -1;
  }
  var v413 = v545;
  var v547 = !v413;
  if (v547) {
    var v546 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p16);
    v413 = v546 == -1;
  }
  var v139 = v413;
  if (v139) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v668 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p16);
  var v621 = v668 == -1;
  var v670 = !v621;
  if (v670) {
    var v669 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p16);
    v621 = v669 == -1;
  }
  var v548 = v621;
  var v623 = !v548;
  if (v623) {
    var v622 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p16);
    v548 = v622 == -1;
  }
  var v414 = v548;
  var v550 = !v414;
  if (v550) {
    var v549 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p16);
    v414 = v549 == -1;
  }
  var v140 = v414;
  if (v140) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v415 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p16);
  var v141 = v415 == -1;
  if (v141) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v671 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p16);
  var v624 = v671 == -1;
  var v673 = !v624;
  if (v673) {
    var v672 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p16);
    v624 = v672 == -1;
  }
  var v551 = v624;
  var v626 = !v551;
  if (v626) {
    var v625 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p16);
    v551 = v625 == -1;
  }
  var v416 = v551;
  var v553 = !v416;
  if (v553) {
    var v552 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p16);
    v416 = v552 == -1;
  }
  var v142 = v416;
  if (v142) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v417 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p16);
  var v143 = v417 == -1;
  if (v143) {
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
  var v150 = i$$5 < stopBase;
  for (;v150;) {
    var v144 = i$$5 + 1;
    lineOfText = rightNum(v144, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v418 = basePerLine / groupSize;
    var v147 = j$$6 <= v418;
    for (;v147;) {
      var v146 = k < groupSize;
      for (;v146;) {
        var v419 = k + i$$5;
        var v145 = JAM.call(text$$10.charAt, text$$10, [v419], JAM.policy.p17);
        lineOfText = lineOfText + v145;
        k = k + 1;
        v146 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v420 = basePerLine / groupSize;
      v147 = j$$6 <= v420;
    }
    var v148 = outputWindow.document;
    var v149 = lineOfText + "\n";
    JAM.call(v148.write, v148, [v149], JAM.policy.p17);
    lineOfText = "";
    v150 = i$$5 < stopBase;
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
    var v421 = adjustment < 0;
    if (v421) {
      v421 = adjusted >= 0;
    }
    var v151 = v421;
    if (v151) {
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
  var v182 = i$$6 < stopBase$$2;
  for (;v182;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v422 = basePerLine$$2 / groupSize$$2;
    var v158 = j$$7 <= v422;
    for (;v158;) {
      var v154 = k$$1 < groupSize$$2;
      for (;v154;) {
        var v423 = i$$6 + k$$1;
        var v152 = v423 >= stopBase$$2;
        if (v152) {
          break;
        }
        var v424 = k$$1 + i$$6;
        var v153 = JAM.call(text$$12.charAt, text$$12, [v424], JAM.policy.p17);
        lineOfText$$1 = lineOfText$$1 + v153;
        k$$1 = k$$1 + 1;
        v154 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v156 = numberPosition$$1 == "above";
      if (v156) {
        var v425 = adjustNumbering(i$$6, numberingAdjustment);
        var v155 = rightNum(v425, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v155;
      }
      var v157 = i$$6 >= stopBase$$2;
      if (v157) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v426 = basePerLine$$2 / groupSize$$2;
      v158 = j$$7 <= v426;
    }
    var v181 = numberPosition$$1 == "left";
    if (v181) {
      var v159 = outputWindow.document;
      var v627 = adjustNumbering(lineNum, numberingAdjustment);
      var v554 = rightNum(v627, "", 8, tabIn$$3);
      var v427 = v554 + lineOfText$$1;
      var v160 = v427 + "\n";
      JAM.call(v159.write, v159, [v160], JAM.policy.p17);
      var v164 = strands$$1 == "two";
      if (v164) {
        var v161 = outputWindow.document;
        var v628 = adjustNumbering(lineNum, numberingAdjustment);
        var v555 = rightNum(v628, "", 8, tabIn$$3);
        var v556 = complement(lineOfText$$1);
        var v428 = v555 + v556;
        var v162 = v428 + "\n";
        JAM.call(v161.write, v161, [v162], JAM.policy.p17);
        var v163 = outputWindow.document;
        JAM.call(v163.write, v163, ["\n"], JAM.policy.p9);
      }
    } else {
      var v180 = numberPosition$$1 == "right";
      if (v180) {
        var v165 = outputWindow.document;
        var v557 = adjustNumbering(i$$6, numberingAdjustment);
        var v429 = lineOfText$$1 + v557;
        var v166 = v429 + "\n";
        JAM.call(v165.write, v165, [v166], JAM.policy.p17);
        var v170 = strands$$1 == "two";
        if (v170) {
          var v167 = outputWindow.document;
          var v558 = complement(lineOfText$$1);
          var v559 = adjustNumbering(i$$6, numberingAdjustment);
          var v430 = v558 + v559;
          var v168 = v430 + "\n";
          JAM.call(v167.write, v167, [v168], JAM.policy.p17);
          var v169 = outputWindow.document;
          JAM.call(v169.write, v169, ["\n"], JAM.policy.p9);
        }
      } else {
        var v179 = numberPosition$$1 == "above";
        if (v179) {
          var v171 = outputWindow.document;
          var v172 = aboveNum + "\n";
          JAM.call(v171.write, v171, [v172], JAM.policy.p17);
          var v173 = outputWindow.document;
          var v174 = lineOfText$$1 + "\n";
          JAM.call(v173.write, v173, [v174], JAM.policy.p17);
          var v178 = strands$$1 == "two";
          if (v178) {
            var v175 = outputWindow.document;
            var v431 = complement(lineOfText$$1);
            var v176 = v431 + "\n";
            JAM.call(v175.write, v175, [v176], JAM.policy.p17);
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
  var v201 = i$$7 < stopBase$$3;
  for (;v201;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v432 = basePerLine$$3 / groupSize$$3;
    var v189 = j$$8 <= v432;
    for (;v189;) {
      var v185 = k$$2 < groupSize$$3;
      for (;v185;) {
        var v433 = i$$7 + k$$2;
        var v183 = v433 >= stopBase$$3;
        if (v183) {
          break;
        }
        var v434 = k$$2 + i$$7;
        var v184 = JAM.call(text$$13.charAt, text$$13, [v434], JAM.policy.p17);
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
      var v435 = basePerLine$$3 / groupSize$$3;
      v189 = j$$8 <= v435;
    }
    var v200 = numberPosition$$2 == "left";
    if (v200) {
      var v190 = outputWindow.document;
      var v560 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v436 = v560 + lineOfText$$2;
      var v191 = v436 + "\n";
      JAM.call(v190.write, v190, [v191], JAM.policy.p17);
    } else {
      var v199 = numberPosition$$2 == "right";
      if (v199) {
        var v192 = outputWindow.document;
        var v437 = lineOfText$$2 + i$$7;
        var v193 = v437 + "\n";
        JAM.call(v192.write, v192, [v193], JAM.policy.p17);
      } else {
        var v198 = numberPosition$$2 == "above";
        if (v198) {
          var v194 = outputWindow.document;
          var v195 = aboveNum$$1 + "\n";
          JAM.call(v194.write, v194, [v195], JAM.policy.p17);
          var v196 = outputWindow.document;
          var v197 = lineOfText$$2 + "\n";
          JAM.call(v196.write, v196, [v197], JAM.policy.p17);
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
  var v629 = sequence$$13.length;
  var v561 = v629 <= firstIndexToMutate;
  var v630 = !v561;
  if (v630) {
    v561 = lastIndexToMutate < 0;
  }
  var v438 = v561;
  var v562 = !v438;
  if (v562) {
    v438 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v202 = v438;
  if (v202) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v210 = i$$8 < numMut;
  for (;v210;) {
    maxNum = sequence$$13.length;
    var v439 = Math.random();
    var v203 = v439 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v203], JAM.policy.p16);
    var v440 = randNum < firstIndexToMutate;
    var v563 = !v440;
    if (v563) {
      v440 = randNum > lastIndexToMutate;
    }
    var v204 = v440;
    if (v204) {
      numMut++;
      i$$8++;
      v210 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p16);
    needNewChar = true;
    for (;needNewChar;) {
      var v441 = Math.random();
      var v442 = components$$1.length;
      var v205 = v441 * v442;
      componentsIndex = JAM.call(Math.round, Math, [v205], JAM.policy.p16);
      var v443 = components$$1.length;
      var v206 = componentsIndex == v443;
      if (v206) {
        componentsIndex = 0;
      }
      var v444 = components$$1[componentsIndex];
      var v207 = v444 != currentChar;
      if (v207) {
        needNewChar = false;
      }
    }
    var v445 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p13);
    var v446 = components$$1[componentsIndex];
    var v208 = v445 + v446;
    var v447 = randNum + 1;
    var v448 = sequence$$13.length;
    var v209 = JAM.call(sequence$$13.substring, sequence$$13, [v447, v448], JAM.policy.p27);
    sequence$$13 = v208 + v209;
    i$$8++;
    v210 = i$$8 < numMut;
  }
  var v211 = outputWindow.document;
  var v212 = addReturns(sequence$$13);
  JAM.call(v211.write, v211, [v212], JAM.policy.p17);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v217 = j$$9 < lengthOut$$1;
  for (;v217;) {
    var v449 = Math.random();
    var v450 = components$$2.length;
    var v213 = v449 * v450;
    tempNum$$1 = JAM.call(Math.floor, Math, [v213], JAM.policy.p16);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v451 = sequence$$14.length;
    var v216 = v451 == 60;
    if (v216) {
      var v214 = outputWindow.document;
      var v215 = sequence$$14 + "\n";
      JAM.call(v214.write, v214, [v215], JAM.policy.p17);
      sequence$$14 = "";
    }
    j$$9++;
    v217 = j$$9 < lengthOut$$1;
  }
  var v218 = outputWindow.document;
  var v219 = sequence$$14 + "\n";
  JAM.call(v218.write, v218, [v219], JAM.policy.p17);
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
    var v631 = sequence$$15.length;
    var v564 = v631 - lookAhead;
    var v565 = sequence$$15.length;
    var v452 = JAM.call(sequence$$15.substring, sequence$$15, [v564, v565], JAM.policy.p27);
    var v221 = v452 + sequence$$15;
    var v222 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    sequence$$15 = v221 + v222;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v224 = outputWindow.document;
  JAM.call(v224.write, v224, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p9);
  var v225 = outputWindow.document;
  var v632 = '<tr><td class="title" width="200px">' + "Site:";
  var v566 = v632 + '</td><td class="title">';
  var v453 = v566 + "Positions:";
  var v226 = v453 + "</td></tr>\n";
  JAM.call(v225.write, v225, [v226], JAM.policy.p17);
  var i$$9 = 0;
  var v454 = arrayOfItems.length;
  var v242 = i$$9 < v454;
  for (;v242;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v455 = arrayOfItems[i$$9];
    var v227 = JAM.call(v455.match, v455, [/\/.+\//], JAM.policy.p16);
    matchExp = v227 + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    var v633 = arrayOfItems[i$$9];
    var v567 = JAM.call(v633.match, v633, [/\)\D*\d+/], JAM.policy.p16);
    var v456 = v567.toString();
    var v228 = JAM.call(v456.replace, v456, [/\)\D*/, ""], JAM.policy.p15);
    cutDistance = parseFloat(v228);
    var v234 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p17);
    for (;v234;) {
      var v229 = matchExp.lastIndex;
      matchPosition = v229 - cutDistance;
      var v457 = matchPosition >= lowerLimit;
      if (v457) {
        v457 = matchPosition < upperLimit;
      }
      var v232 = v457;
      if (v232) {
        timesFound++;
        var v230 = tempString$$1 + ", ";
        var v458 = matchPosition - shiftValue;
        var v231 = v458 + 1;
        tempString$$1 = v230 + v231;
      }
      var v459 = matchExp.lastIndex;
      var v568 = RegExp.lastMatch;
      var v460 = v568.length;
      var v233 = v459 - v460;
      matchExp.lastIndex = v233 + 1;
      v234 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p17);
    }
    var v461 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p16);
    var v235 = v461 != -1;
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
    var v730 = '<tr><td class="' + backGroundClass;
    var v714 = v730 + '">';
    var v759 = arrayOfItems[i$$9];
    var v747 = JAM.call(v759.match, v759, [/\([^\(]+\)/], JAM.policy.p16);
    var v731 = v747.toString();
    var v715 = JAM.call(v731.replace, v731, [/\(|\)/g, ""], JAM.policy.p15);
    var v697 = v714 + v715;
    var v674 = v697 + '</td><td class="';
    var v634 = v674 + backGroundClass;
    var v569 = v634 + '">';
    var v462 = v569 + tempString$$1;
    var v241 = v462 + "</td></tr>\n";
    JAM.call(v240.write, v240, [v241], JAM.policy.p17);
    timesFound = 0;
    i$$9++;
    var v463 = arrayOfItems.length;
    v242 = i$$9 < v463;
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
  var v698 = '<tr><td class="title">' + "Pattern:";
  var v675 = v698 + '</td><td class="title">';
  var v635 = v675 + "Times found:";
  var v570 = v635 + '</td><td class="title">';
  var v464 = v570 + "Percentage:";
  var v246 = v464 + "</td></tr>\n";
  JAM.call(v245.write, v245, [v246], JAM.policy.p17);
  var i$$10 = 0;
  var v465 = arrayOfItems$$1.length;
  var v255 = i$$10 < v465;
  for (;v255;) {
    var tempNumber = 0;
    var v466 = arrayOfItems$$1[i$$10];
    var v247 = JAM.call(v466.match, v466, [/\/[^\/]+\//], JAM.policy.p16);
    var matchExp$$1 = v247 + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    var v467 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p17);
    var v249 = v467 != -1;
    if (v249) {
      var v248 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p17);
      tempNumber = v248.length;
    }
    var percentage = 0;
    var v571 = originalLength + 1;
    var v676 = arrayOfItems$$1[i$$10];
    var v636 = JAM.call(v676.match, v676, [/\d+/], JAM.policy.p16);
    var v572 = parseFloat(v636);
    var v468 = v571 - v572;
    var v252 = v468 > 0;
    if (v252) {
      var v250 = 100 * tempNumber;
      var v469 = originalLength + 1;
      var v637 = arrayOfItems$$1[i$$10];
      var v573 = JAM.call(v637.match, v637, [/\d+/], JAM.policy.p16);
      var v470 = parseFloat(v573);
      var v251 = v469 - v470;
      percentage = v250 / v251;
    }
    var v253 = outputWindow.document;
    var v760 = arrayOfItems$$1[i$$10];
    var v748 = JAM.call(v760.match, v760, [/\([^\(]+\)\b/], JAM.policy.p16);
    var v732 = v748.toString();
    var v716 = JAM.call(v732.replace, v732, [/\(|\)/g, ""], JAM.policy.p15);
    var v699 = "<tr><td>" + v716;
    var v677 = v699 + "</td><td>";
    var v638 = v677 + tempNumber;
    var v574 = v638 + "</td><td>";
    var v575 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p11);
    var v471 = v574 + v575;
    var v254 = v471 + "</td></tr>\n";
    JAM.call(v253.write, v253, [v254], JAM.policy.p17);
    i$$10++;
    var v472 = arrayOfItems$$1.length;
    v255 = i$$10 < v472;
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
  var v473 = sequence$$17.length;
  var v263 = v473 > 0;
  for (;v263;) {
    maxNum$$1 = sequence$$17.length;
    var v474 = Math.random();
    var v257 = v474 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v257], JAM.policy.p16);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p16);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p13);
    var v258 = randNum$$1 + 1;
    var v259 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v258, v259], JAM.policy.p15);
    sequence$$17 = tempString1 + tempString2;
    var v475 = tempSeq.length;
    var v262 = v475 == 60;
    if (v262) {
      var v260 = outputWindow.document;
      var v261 = tempSeq + "\n";
      JAM.call(v260.write, v260, [v261], JAM.policy.p17);
      tempSeq = "";
    }
    var v476 = sequence$$17.length;
    v263 = v476 > 0;
  }
  var v264 = outputWindow.document;
  var v265 = tempSeq + "\n";
  JAM.call(v264.write, v264, [v265], JAM.policy.p17);
  return true;
}
function fillCodon(aminoAcid, number, perThou, fraction) {
  this.aminoAcid = aminoAcid;
  this.number = number;
  this.perThou = perThou;
  this.fraction = fraction;
  return;
}
function Codon() {
  return;
}
function codonPlot() {
  var theDocument = document;
  var newDna = "";
  var maxInput$$3 = 5E4;
  var codonTable$$1;
  var title$$9;
  var v477 = testScript();
  var v266 = v477 == false;
  if (v266) {
    return;
  }
  var v733 = theDocument.forms;
  var v717 = v733[0];
  var v700 = v717.elements;
  var v678 = v700[0];
  var v639 = checkFormElement(v678);
  var v576 = v639 == false;
  var v641 = !v576;
  if (v641) {
    var v749 = theDocument.forms;
    var v734 = v749[0];
    var v718 = v734.elements;
    var v701 = v718[0];
    var v679 = v701.value;
    var v640 = checkSequenceLength(v679, maxInput$$3);
    v576 = v640 == false;
  }
  var v478 = v576;
  var v578 = !v478;
  if (v578) {
    var v735 = theDocument.forms;
    var v719 = v735[0];
    var v702 = v719.elements;
    var v680 = v702[4];
    var v642 = v680.value;
    var v577 = checkCodonTable(v642);
    v478 = v577 == false;
  }
  var v267 = v478;
  if (v267) {
    return;
  }
  var v681 = theDocument.forms;
  var v643 = v681[0];
  var v579 = v643.elements;
  var v479 = v579[4];
  var v268 = v479.value;
  codonTable$$1 = makeCodonTable(v268);
  var v269 = codonTable$$1 == false;
  if (v269) {
    return;
  }
  var v682 = theDocument.forms;
  var v644 = v682[0];
  var v580 = v644.elements;
  var v480 = v580[0];
  var v270 = v480.value;
  newDna = getSequenceFromFasta(v270);
  var v683 = theDocument.forms;
  var v645 = v683[0];
  var v581 = v645.elements;
  var v481 = v581[0];
  var v271 = v481.value;
  title$$9 = getTitleFromFasta(v271);
  verifyDna(newDna);
  newDna = removeNonDna(newDna);
  openWindow();
  var v272 = outputWindow.document;
  var v273 = getInfoFromTitleAndSequence(title$$9, newDna);
  JAM.call(v272.write, v272, [v273], JAM.policy.p17);
  openPre();
  writeCodonPlot(codonTable$$1, newDna);
  closePre();
  closeWindow();
  return;
}
function writeCodonPlot(codonTable$$2, sequence$$18) {
  function v2(str$$8, p1$$2, offset$$10, s$$4) {
    try {
      var v482 = codonTable$$2;
      var v582 = p1$$2.toString();
      var v483 = v582.toLowerCase();
      var v274 = v482[v483];
      aminoAcid$$1 = v274.aminoAcid;
      var v484 = codonTable$$2;
      var v583 = p1$$2.toString();
      var v485 = v583.toLowerCase();
      var v275 = v484[v485];
      yValue = v275.fraction;
    } catch (e$$5) {
      aminoAcid$$1 = "???";
      yValue = 0;
    }
    var v784 = p1$$2.toString();
    var v779 = v784.toLowerCase();
    var v771 = "<b>" + v779;
    var v761 = v771 + ", ";
    var v762 = offset$$10 + 1;
    var v750 = v761 + v762;
    var v736 = v750 + " to ";
    var v737 = offset$$10 + 3;
    var v720 = v736 + v737;
    var v703 = v720 + " (";
    var v684 = v703 + aminoAcid$$1;
    var v646 = v684 + ")</b>\n";
    var v721 = markString.length;
    var v704 = yValue * v721;
    var v685 = JAM.call(Math.round, Math, [v704], JAM.policy.p17);
    var v647 = JAM.call(markString.substring, markString, [0, v685], JAM.policy.p13);
    var v584 = v646 + v647;
    var v486 = v584 + " ";
    var v487 = JAM.call(yValue.toFixed, yValue, [2], JAM.policy.p11);
    var v276 = v486 + v487;
    return v276 + "\n\n";
  }
  var markString = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
  var codon$$1;
  var perThou$$1;
  var fraction$$1;
  var yValue;
  var aminoAcid$$1;
  sequence$$18 = JAM.call(sequence$$18.replace, sequence$$18, [/u/gi, "t"], JAM.policy.p15);
  sequence$$18 = JAM.call(sequence$$18.replace, sequence$$18, [/(...)/g, v2], JAM.policy.p15);
  var v277 = outputWindow.document;
  var v278 = sequence$$18 + "\n";
  JAM.call(v277.write, v277, [v278], JAM.policy.p17);
  return;
}
function makeCodonTable(gcgTable) {
  gcgTable = JAM.call(gcgTable.replace, gcgTable, [/[^\.]*\.\./, ""], JAM.policy.p15);
  var tableArray = JAM.call(gcgTable.split, gcgTable, [/[\f\n\r]/], JAM.policy.p16);
  var re$$3 = /(\w+)\s+(\w+)\s+(\S+)\s+(\S+)\s+(\S+)/g;
  var matchArray$$2;
  var codonTable$$3 = new CodonTable;
  var i$$11 = 0;
  var v488 = tableArray.length;
  var v288 = i$$11 < v488;
  for (;v288;) {
    var v489 = tableArray[i$$11];
    var v287 = matchArray$$2 = JAM.call(re$$3.exec, re$$3, [v489], JAM.policy.p17);
    for (;v287;) {
      try {
        var v585 = matchArray$$2[2];
        var v490 = v585.toLowerCase();
        var v279 = codonTable$$3[v490];
        var v280 = matchArray$$2[1];
        var v491 = matchArray$$2[3];
        var v281 = parseFloat(v491);
        var v492 = matchArray$$2[4];
        var v282 = parseFloat(v492);
        var v493 = matchArray$$2[5];
        var v283 = parseFloat(v493);
        JAM.call(v279.fillCodon, v279, [v280, v281, v282, v283], JAM.policy.p27);
        var v284 = codonTable$$3.codons;
        var v494 = matchArray$$2[2];
        var v285 = v494.toLowerCase();
        JAM.call(v284.push, v284, [v285], JAM.policy.p17);
      } catch (e$$6) {
        var v763 = matchArray$$2[1];
        var v751 = "There is a problem with a line of the codon table: " + v763;
        var v738 = v751 + " ";
        var v739 = matchArray$$2[2];
        var v722 = v738 + v739;
        var v705 = v722 + " ";
        var v706 = matchArray$$2[3];
        var v686 = v705 + v706;
        var v648 = v686 + " ";
        var v649 = matchArray$$2[4];
        var v586 = v648 + v649;
        var v495 = v586 + " ";
        var v496 = matchArray$$2[5];
        var v286 = v495 + v496;
        alert(v286);
        return false;
      }
      var v497 = tableArray[i$$11];
      v287 = matchArray$$2 = JAM.call(re$$3.exec, re$$3, [v497], JAM.policy.p17);
    }
    i$$11++;
    var v498 = tableArray.length;
    v288 = i$$11 < v498;
  }
  codonTable$$3.fixFraction();
  return codonTable$$3;
}
function CodonTable() {
  var v802 = new Array;
  this.codons = v802;
  var v803 = new Codon;
  this.ggg = v803;
  var v804 = new Codon;
  this.gga = v804;
  var v805 = new Codon;
  this.ggt = v805;
  var v806 = new Codon;
  this.ggc = v806;
  var v807 = new Codon;
  this.gag = v807;
  var v808 = new Codon;
  this.gaa = v808;
  var v809 = new Codon;
  this.gat = v809;
  var v810 = new Codon;
  this.gac = v810;
  var v811 = new Codon;
  this.gtg = v811;
  var v812 = new Codon;
  this.gta = v812;
  var v813 = new Codon;
  this.gtt = v813;
  var v814 = new Codon;
  this.gtc = v814;
  var v815 = new Codon;
  this.gcg = v815;
  var v816 = new Codon;
  this.gca = v816;
  var v817 = new Codon;
  this.gct = v817;
  var v818 = new Codon;
  this.gcc = v818;
  var v819 = new Codon;
  this.agg = v819;
  var v820 = new Codon;
  this.aga = v820;
  var v821 = new Codon;
  this.agt = v821;
  var v822 = new Codon;
  this.agc = v822;
  var v823 = new Codon;
  this.aag = v823;
  var v824 = new Codon;
  this.aaa = v824;
  var v825 = new Codon;
  this.aat = v825;
  var v826 = new Codon;
  this.aac = v826;
  var v827 = new Codon;
  this.atg = v827;
  var v828 = new Codon;
  this.ata = v828;
  var v829 = new Codon;
  this.att = v829;
  var v830 = new Codon;
  this.atc = v830;
  var v831 = new Codon;
  this.acg = v831;
  var v832 = new Codon;
  this.aca = v832;
  var v833 = new Codon;
  this.act = v833;
  var v834 = new Codon;
  this.acc = v834;
  var v835 = new Codon;
  this.tgg = v835;
  var v836 = new Codon;
  this.tga = v836;
  var v837 = new Codon;
  this.tgt = v837;
  var v838 = new Codon;
  this.tgc = v838;
  var v839 = new Codon;
  this.tag = v839;
  var v840 = new Codon;
  this.taa = v840;
  var v841 = new Codon;
  this.tat = v841;
  var v842 = new Codon;
  this.tac = v842;
  var v843 = new Codon;
  this.ttg = v843;
  var v844 = new Codon;
  this.tta = v844;
  var v845 = new Codon;
  this.ttt = v845;
  var v846 = new Codon;
  this.ttc = v846;
  var v847 = new Codon;
  this.tcg = v847;
  var v848 = new Codon;
  this.tca = v848;
  var v849 = new Codon;
  this.tct = v849;
  var v850 = new Codon;
  this.tcc = v850;
  var v851 = new Codon;
  this.cgg = v851;
  var v852 = new Codon;
  this.cga = v852;
  var v853 = new Codon;
  this.cgt = v853;
  var v854 = new Codon;
  this.cgc = v854;
  var v855 = new Codon;
  this.cag = v855;
  var v856 = new Codon;
  this.caa = v856;
  var v857 = new Codon;
  this.cat = v857;
  var v858 = new Codon;
  this.cac = v858;
  var v859 = new Codon;
  this.ctg = v859;
  var v860 = new Codon;
  this.cta = v860;
  var v861 = new Codon;
  this.ctt = v861;
  var v862 = new Codon;
  this.ctc = v862;
  var v863 = new Codon;
  this.ccg = v863;
  var v864 = new Codon;
  this.cca = v864;
  var v865 = new Codon;
  this.cct = v865;
  var v866 = new Codon;
  this.ccc = v866;
  return;
}
function fixFraction() {
  var i$$12 = 0;
  var v587 = this.codons;
  var v499 = v587.length;
  var v295 = i$$12 < v499;
  for (;v295;) {
    var v289 = this.codons;
    var outerCodon = v289[i$$12];
    var perThouTotal = 0;
    var j$$10 = 0;
    var v588 = this.codons;
    var v500 = v588.length;
    var v293 = j$$10 < v500;
    for (;v293;) {
      var v290 = this.codons;
      var innerCodon = v290[j$$10];
      var v589 = this[outerCodon];
      var v501 = v589.aminoAcid;
      var v590 = this[innerCodon];
      var v502 = v590.aminoAcid;
      var v292 = v501 == v502;
      if (v292) {
        var v503 = this[innerCodon];
        var v291 = v503.perThou;
        perThouTotal = perThouTotal + v291;
      }
      j$$10++;
      var v591 = this.codons;
      var v504 = v591.length;
      v293 = j$$10 < v504;
    }
    var v294 = this[outerCodon];
    var v592 = this[outerCodon];
    var v505 = v592.perThou;
    v294.fraction = v505 / perThouTotal;
    i$$12++;
    var v593 = this.codons;
    var v506 = v593.length;
    v295 = i$$12 < v506;
  }
  return true;
}
new CodonTable;
var v296 = CodonTable.prototype;
v296.fixFraction = fixFraction;
new Codon;
var v297 = Codon.prototype;
v297.fillCodon = fillCodon;
JAM.set(document, "onload", v3);
var v298 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p9);
JAM.set(v298, "onclick", v4);
var v299 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p9);
JAM.set(v299, "onclick", v5)
