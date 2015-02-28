
JAM.startProfile('load');
function v4() {
  var v696 = document.forms;
  var v567 = v696[0];
  var v323 = v567.elements;
  var v5 = v323[0];
  v5.value = " ";
  var v697 = document.forms;
  var v568 = v697[0];
  var v324 = v568.elements;
  var v6 = v324[1];
  v6.value = " ";
  var v698 = document.forms;
  var v569 = v698[0];
  var v325 = v569.elements;
  var v7 = v325[2];
  v7.value = " ";
  var v699 = document.forms;
  var v570 = v699[0];
  var v326 = v570.elements;
  var v8 = v326[3];
  v8.value = " ";
  var v700 = document.forms;
  var v571 = v700[0];
  var v327 = v571.elements;
  var v9 = v327[4];
  v9.value = " ";
  return;
}
function v3() {
  try {
    pcrProducts();
  } catch (e$$7) {
    var v10 = "The following error was encountered: " + e$$7;
    alert(v10);
  }
  return;
}
function v2() {
  var v328 = document.main_form;
  var v11 = v328.main_submit;
  v11.focus();
  return;
}
function addReturns(sequence) {
  function v0(str$$6, p1, offset$$8, s$$2) {
    return p1 + "\n";
  }
  sequence = JAM.call(sequence.replace, sequence, [/(.{60})/g, v0], JAM.policy.p16);
  return sequence;
}
function checkAlign(arrayOfTitles, arrayOfSequences) {
  var v12 = arrayOfSequences[0];
  var lengthOfAlign = v12.length;
  var v329 = arrayOfSequences.length;
  var v13 = v329 < 2;
  if (v13) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v330 = arrayOfTitles.length;
  var v15 = i$$1 < v330;
  for (;v15;) {
    var v790 = arrayOfTitles[i$$1];
    var v701 = JAM.call(v790.search, v790, [/\S/], JAM.policy.p18);
    var v572 = v701 == -1;
    var v703 = !v572;
    if (v703) {
      var v791 = arrayOfSequences[i$$1];
      var v702 = JAM.call(v791.search, v791, [/\S/], JAM.policy.p18);
      v572 = v702 == -1;
    }
    var v331 = v572;
    var v574 = !v331;
    if (v574) {
      var v704 = arrayOfSequences[i$$1];
      var v573 = v704.length;
      v331 = v573 != lengthOfAlign;
    }
    var v14 = v331;
    if (v14) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v332 = arrayOfTitles.length;
    v15 = i$$1 < v332;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v862 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p18);
  var v792 = v862 == -1;
  var v864 = !v792;
  if (v864) {
    var v863 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p18);
    v792 = v863 == -1;
  }
  var v705 = v792;
  var v794 = !v705;
  if (v794) {
    var v793 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p18);
    v705 = v793 == -1;
  }
  var v575 = v705;
  var v707 = !v575;
  if (v707) {
    var v706 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p18);
    v575 = v706 == -1;
  }
  var v333 = v575;
  var v577 = !v333;
  if (v577) {
    var v576 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p18);
    v333 = v576 == -1;
  }
  var v16 = v333;
  if (v16) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v578 = formElement.value;
  var v334 = JAM.call(v578.search, v578, [/\S/], JAM.policy.p18);
  var v17 = v334 == -1;
  if (v17) {
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
  var v335 = arrayOfPatterns.length;
  var v20 = z$$2 < v335;
  for (;v20;) {
    var v579 = arrayOfPatterns[z$$2];
    var v336 = JAM.call(v579.search, v579, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p18);
    var v18 = v336 == -1;
    if (v18) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v580 = arrayOfPatterns[z$$2];
    var v337 = moreExpressionCheck(v580);
    var v19 = v337 == false;
    if (v19) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v338 = arrayOfPatterns.length;
    v20 = z$$2 < v338;
  }
  var v21 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v21);
  var v22 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v22);
  var j = 0;
  var v339 = arrayOfPatterns.length;
  var v26 = j < v339;
  for (;v26;) {
    var v581 = arrayOfPatterns[j];
    var v340 = JAM.call(v581.match, v581, [/\/.+\//], JAM.policy.p18);
    var v23 = v340 + "gi";
    if (JAM.isEval(eval)) {
      var v1029 = eval("introspect(JAM.policy.pFull) { " + v23 + " }")
    } else {
      var v1029 = JAM.call(eval, null, [v23])
    }
    geneticCodeMatchExp[j] = v1029;
    var v341 = arrayOfPatterns[j];
    var v24 = JAM.call(v341.match, v341, [/=[a-zA-Z\*]/], JAM.policy.p18);
    var v1030 = v24.toString();
    geneticCodeMatchResult[j] = v1030;
    var v25 = geneticCodeMatchResult[j];
    var v1031 = JAM.call(v25.replace, v25, [/=/g, ""], JAM.policy.p16);
    geneticCodeMatchResult[j] = v1031;
    j++;
    var v342 = arrayOfPatterns.length;
    v26 = j < v342;
  }
  var i$$2 = 0;
  var v582 = testSequence.length;
  var v343 = v582 - 3;
  var v33 = i$$2 <= v343;
  for (;v33;) {
    var v27 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v27], JAM.policy.p16);
    j = 0;
    var v344 = geneticCodeMatchExp.length;
    var v31 = j < v344;
    for (;v31;) {
      var v583 = geneticCodeMatchExp[j];
      var v345 = JAM.call(codon.search, codon, [v583], JAM.policy.p15);
      var v30 = v345 != -1;
      if (v30) {
        var v29 = oneMatch == true;
        if (v29) {
          var v346 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v28 = v346 + ".";
          alert(v28);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v347 = geneticCodeMatchExp.length;
      v31 = j < v347;
    }
    var v32 = oneMatch == false;
    if (v32) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v584 = testSequence.length;
    var v348 = v584 - 3;
    v33 = i$$2 <= v348;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v349 = arrayOfPatterns$$1.length;
  var v35 = z$$3 < v349;
  for (;v35;) {
    var v585 = arrayOfPatterns$$1[z$$3];
    var v350 = JAM.call(v585.search, v585, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p18);
    var v34 = v350 != -1;
    if (v34) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v351 = arrayOfPatterns$$1.length;
    v35 = z$$3 < v351;
  }
  var i$$3 = 0;
  var v352 = arrayOfPatterns$$1.length;
  var v39 = i$$3 < v352;
  for (;v39;) {
    var v586 = arrayOfPatterns$$1[i$$3];
    var v353 = "[" + v586;
    var v36 = v353 + "]";
    var re = new RegExp(v36, "gi");
    var j$$1 = i$$3 + 1;
    var v354 = arrayOfPatterns$$1.length;
    var v38 = j$$1 < v354;
    for (;v38;) {
      var v587 = arrayOfPatterns$$1[j$$1];
      var v355 = JAM.call(v587.search, v587, [re], JAM.policy.p15);
      var v37 = v355 != -1;
      if (v37) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v356 = arrayOfPatterns$$1.length;
      v38 = j$$1 < v356;
    }
    i$$3++;
    var v357 = arrayOfPatterns$$1.length;
    v39 = i$$3 < v357;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v358 = arrayOfPatterns$$2.length;
  var v42 = z$$4 < v358;
  for (;v42;) {
    var v588 = arrayOfPatterns$$2[z$$4];
    var v359 = JAM.call(v588.search, v588, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p18);
    var v40 = v359 == -1;
    if (v40) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v589 = arrayOfPatterns$$2[z$$4];
    var v360 = moreExpressionCheck(v589);
    var v41 = v360 == false;
    if (v41) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v361 = arrayOfPatterns$$2.length;
    v42 = z$$4 < v361;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v708 = getSequenceFromFasta(text$$7);
  var v590 = JAM.call(v708.replace, v708, [/[^A-Za-z]/g, ""], JAM.policy.p16);
  var v362 = v590.length;
  var v44 = v362 > maxInput;
  if (v44) {
    var v363 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v43 = v363 + " characters.";
    alert(v43);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v364 = text$$8.length;
  var v46 = v364 > maxInput$$1;
  if (v46) {
    var v365 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v45 = v365 + " characters.";
    alert(v45);
    return false;
  } else {
    return true;
  }
  return;
}
function complement(dnaSequence) {
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/g/g, "1"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/c/g, "2"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "c"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "g"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/G/g, "1"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/C/g, "2"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "C"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "G"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/a/g, "1"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/t/g, "2"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "t"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "a"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/A/g, "1"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/T/g, "2"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "T"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "A"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/u/g, "a"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/U/g, "A"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/r/g, "1"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/y/g, "2"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "y"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "r"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/R/g, "1"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/Y/g, "2"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "Y"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "R"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/k/g, "1"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/m/g, "2"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "m"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "k"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/K/g, "1"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/M/g, "2"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "M"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "K"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/b/g, "1"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/v/g, "2"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "v"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "b"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/B/g, "1"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/V/g, "2"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "V"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "B"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/d/g, "1"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/h/g, "2"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "h"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "d"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/D/g, "1"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/H/g, "2"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "H"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "D"], JAM.policy.p16);
  return dnaSequence;
}
function closeForm() {
  var v47 = outputWindow.document;
  JAM.call(v47.write, v47, ["</form>"], JAM.policy.p9);
  return true;
}
function closePre() {
  var v48 = outputWindow.document;
  JAM.call(v48.write, v48, ["</div>"], JAM.policy.p9);
  var v49 = outputWindow.document;
  JAM.call(v49.write, v49, ["</pre>\n"], JAM.policy.p9);
  return;
}
function closeTextArea() {
  var v50 = outputWindow.document;
  JAM.call(v50.write, v50, ["</textarea>"], JAM.policy.p9);
  return true;
}
function closeWindow() {
  var v51 = outputWindow.document;
  JAM.call(v51.write, v51, ["</body>\n</html>\n"], JAM.policy.p9);
  outputWindow.status = "Done.";
  var v52 = outputWindow.document;
  v52.close();
  return;
}
function convertDegenerates(sequence$$1) {
  sequence$$1 = sequence$$1.toLowerCase();
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/t/g, "[TU]"], JAM.policy.p16);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/r/g, "[AGR]"], JAM.policy.p16);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/y/g, "[CTUY]"], JAM.policy.p16);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/s/g, "[GCS]"], JAM.policy.p16);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/w/g, "[ATUW]"], JAM.policy.p16);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/k/g, "[GTUK]"], JAM.policy.p16);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/m/g, "[ACM]"], JAM.policy.p16);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/b/g, "[CGTUBSKY]"], JAM.policy.p16);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/d/g, "[AGTUDRKW]"], JAM.policy.p16);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/h/g, "[ACTUHMYW]"], JAM.policy.p16);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/v/g, "[ACGVSMR]"], JAM.policy.p16);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/n/g, "[ACGTURYSWKMBDHVN]"], JAM.policy.p16);
  return sequence$$1;
}
function earlyCheckAlign(alignArray) {
  var v366 = alignArray.length;
  var v53 = v366 < 3;
  if (v53) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v367 = alignArray.length;
  var v55 = i$$4 < v367;
  for (;v55;) {
    var v591 = alignArray[i$$4];
    var v368 = JAM.call(v591.search, v591, [/[^\s]+\s/], JAM.policy.p18);
    var v54 = v368 == -1;
    if (v54) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v369 = alignArray.length;
    v55 = i$$4 < v369;
  }
  return true;
}
function filterAlignSeq(alignSeq) {
  alignSeq = JAM.call(alignSeq.replace, alignSeq, [/[^abcdefghiklmnpqrstvwxyz\.\-]/gi, ""], JAM.policy.p16);
  return alignSeq;
}
function filterFastaTitle(sequenceTitle) {
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/\s{2,}/g, " "], JAM.policy.p16);
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/^\s*/g, ""], JAM.policy.p16);
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/[\f\n\r\t]+$/g, "\n"], JAM.policy.p16);
  return JAM.call(sequenceTitle.replace, sequenceTitle, [/[\<\>]\n/gi, ""], JAM.policy.p16);
}
function getArrayOfFasta(sequenceData) {
  var arrayOfFasta = new Array;
  var matchArray;
  var re$$1 = /\>[^\>]+/g;
  var v370 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p18);
  var v58 = v370 != -1;
  if (v58) {
    var v57 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p15);
    for (;v57;) {
      var v56 = matchArray[0];
      JAM.call(arrayOfFasta.push, arrayOfFasta, [v56], JAM.policy.p15);
      v57 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p15);
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v371 = sequence$$2.length;
  var v59 = "&gt;results for " + v371;
  var stringToReturn = v59 + " residue sequence ";
  var v372 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p18);
  var v61 = v372 != -1;
  if (v61) {
    var v373 = stringToReturn + '"';
    var v60 = v373 + fastaSequenceTitle;
    stringToReturn = v60 + '"';
  }
  var v374 = stringToReturn + ' starting "';
  var v375 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p13);
  var v62 = v374 + v375;
  stringToReturn = v62 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v376 = sequenceOne.length;
  var v63 = "Search results for " + v376;
  var stringToReturn$$1 = v63 + " residue sequence ";
  var v377 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p18);
  var v65 = v377 != -1;
  if (v65) {
    var v378 = stringToReturn$$1 + '"';
    var v64 = v378 + fastaSequenceTitleOne;
    stringToReturn$$1 = v64 + '"';
  }
  var v379 = stringToReturn$$1 + ' starting "';
  var v380 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p13);
  var v66 = v379 + v380;
  stringToReturn$$1 = v66 + '"\n';
  var v381 = stringToReturn$$1 + "and ";
  var v382 = sequenceTwo.length;
  var v67 = v381 + v382;
  stringToReturn$$1 = v67 + " residue sequence ";
  var v383 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p18);
  var v69 = v383 != -1;
  if (v69) {
    var v384 = stringToReturn$$1 + '"';
    var v68 = v384 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v68 + '"';
  }
  var v385 = stringToReturn$$1 + ' starting "';
  var v386 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p13);
  var v70 = v385 + v386;
  stringToReturn$$1 = v70 + '"';
  var v71 = '<div class="info">' + stringToReturn$$1;
  return v71 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v72 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v72);
  var j$$2 = 0;
  var v387 = arrayOfPatterns$$3.length;
  var v74 = j$$2 < v387;
  for (;v74;) {
    var v592 = arrayOfPatterns$$3[j$$2];
    var v388 = JAM.call(v592.match, v592, [/\/.+\//], JAM.policy.p18);
    var v73 = v388 + "gi";
    if (JAM.isEval(eval)) {
      var v1032 = eval("introspect(JAM.policy.pFull) { " + v73 + " }")
    } else {
      var v1032 = JAM.call(eval, null, [v73])
    }
    geneticCodeMatchExp$$1[j$$2] = v1032;
    j$$2++;
    var v389 = arrayOfPatterns$$3.length;
    v74 = j$$2 < v389;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v75 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v75);
  var j$$3 = 0;
  var v390 = arrayOfPatterns$$4.length;
  var v78 = j$$3 < v390;
  for (;v78;) {
    var v391 = arrayOfPatterns$$4[j$$3];
    var v76 = JAM.call(v391.match, v391, [/=[a-zA-Z\*]/], JAM.policy.p18);
    var v1033 = v76.toString();
    geneticCodeMatchResult$$1[j$$3] = v1033;
    var v77 = geneticCodeMatchResult$$1[j$$3];
    var v1034 = JAM.call(v77.replace, v77, [/=/g, ""], JAM.policy.p16);
    geneticCodeMatchResult$$1[j$$3] = v1034;
    j$$3++;
    var v392 = arrayOfPatterns$$4.length;
    v78 = j$$3 < v392;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v393 = sequence$$3.length;
  var v79 = "Results for " + v393;
  var stringToReturn$$2 = v79 + " residue sequence ";
  var v394 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p18);
  var v81 = v394 != -1;
  if (v81) {
    var v395 = stringToReturn$$2 + '"';
    var v80 = v395 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v80 + '"';
  }
  var v396 = stringToReturn$$2 + ' starting "';
  var v397 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p13);
  var v82 = v396 + v397;
  stringToReturn$$2 = v82 + '"';
  var v83 = '<div class="info">' + stringToReturn$$2;
  return v83 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v593 = "Results for " + topology;
  var v398 = v593 + " ";
  var v399 = sequence$$4.length;
  var v84 = v398 + v399;
  var stringToReturn$$3 = v84 + " residue sequence ";
  var v400 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p18);
  var v86 = v400 != -1;
  if (v86) {
    var v401 = stringToReturn$$3 + '"';
    var v85 = v401 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v85 + '"';
  }
  var v402 = stringToReturn$$3 + ' starting "';
  var v403 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p13);
  var v87 = v402 + v403;
  stringToReturn$$3 = v87 + '"';
  var v88 = '<div class="info">' + stringToReturn$$3;
  return v88 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v404 = sequenceOne$$1.length;
  var v89 = "Alignment results for " + v404;
  var stringToReturn$$4 = v89 + " residue sequence ";
  var v405 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p18);
  var v91 = v405 != -1;
  if (v91) {
    var v406 = stringToReturn$$4 + '"';
    var v90 = v406 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v90 + '"';
  }
  var v407 = stringToReturn$$4 + ' starting "';
  var v408 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p13);
  var v92 = v407 + v408;
  stringToReturn$$4 = v92 + '"\n';
  var v409 = stringToReturn$$4 + "and ";
  var v410 = sequenceTwo$$1.length;
  var v93 = v409 + v410;
  stringToReturn$$4 = v93 + " residue sequence ";
  var v411 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p18);
  var v95 = v411 != -1;
  if (v95) {
    var v412 = stringToReturn$$4 + '"';
    var v94 = v412 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v94 + '"';
  }
  var v413 = stringToReturn$$4 + ' starting "';
  var v414 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p13);
  var v96 = v413 + v414;
  stringToReturn$$4 = v96 + '"';
  var v97 = '<div class="info">' + stringToReturn$$4;
  return v97 + "</div>\n";
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v99 = j$$4 < lengthOut;
  for (;v99;) {
    var v415 = Math.random();
    var v416 = components.length;
    var v98 = v415 * v416;
    tempNum = JAM.call(Math.floor, Math, [v98], JAM.policy.p18);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p15);
    j$$4++;
    v99 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p9);
}
function getSequenceFromFasta(sequenceRecord) {
  var v417 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p18);
  var v100 = v417 != -1;
  if (v100) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p16);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v418 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p18);
  var v102 = v418 != -1;
  if (v102) {
    var v101 = JAM.call(sequenceRecord$$1.match, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p16);
    fastaTitle = v101.toString();
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\>|[\f\n\r]/g, ""], JAM.policy.p16);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\s{2,}/g, " "], JAM.policy.p16);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/[\<\>]/gi, ""], JAM.policy.p16);
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  var v1001 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p18);
  var v990 = v1001 != -1;
  var v1003 = !v990;
  if (v1003) {
    var v1002 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p18);
    v990 = v1002 != -1;
  }
  var v977 = v990;
  var v992 = !v977;
  if (v992) {
    var v991 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p18);
    v977 = v991 != -1;
  }
  var v962 = v977;
  var v979 = !v962;
  if (v979) {
    var v978 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p18);
    v962 = v978 != -1;
  }
  var v944 = v962;
  var v964 = !v944;
  if (v964) {
    var v963 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p18);
    v944 = v963 != -1;
  }
  var v910 = v944;
  var v946 = !v910;
  if (v946) {
    var v945 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p18);
    v910 = v945 != -1;
  }
  var v865 = v910;
  var v912 = !v865;
  if (v912) {
    var v911 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p18);
    v865 = v911 != -1;
  }
  var v795 = v865;
  var v867 = !v795;
  if (v867) {
    var v866 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p18);
    v795 = v866 != -1;
  }
  var v709 = v795;
  var v797 = !v709;
  if (v797) {
    var v796 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p18);
    v709 = v796 != -1;
  }
  var v594 = v709;
  var v711 = !v594;
  if (v711) {
    var v710 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p18);
    v594 = v710 != -1;
  }
  var v419 = v594;
  var v596 = !v419;
  if (v596) {
    var v595 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p18);
    v419 = v595 != -1;
  }
  var v103 = v419;
  if (v103) {
    return false;
  }
  return true;
}
function openForm() {
  var v104 = outputWindow.document;
  JAM.call(v104.write, v104, ['<form action="">\n'], JAM.policy.p9);
  return true;
}
function openPre() {
  var v105 = outputWindow.document;
  JAM.call(v105.write, v105, ["<pre>"], JAM.policy.p9);
  var v106 = outputWindow.document;
  JAM.call(v106.write, v106, ['<div class="pre">'], JAM.policy.p9);
  return;
}
function openTextArea() {
  var v107 = outputWindow.document;
  JAM.call(v107.write, v107, ['<br /><textarea rows="6" cols="61">\n'], JAM.policy.p9);
  return true;
}
function openWindow() {
  var title$$6 = "PCR Products";
  _openWindow(title$$6);
  return;
}
function _openWindow(title$$7) {
  var isColor = true;
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  outputWindow.focus();
  var v108 = outputWindow.document;
  var v712 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v597 = v712 + "<head>\n";
  var v420 = v597 + "<title>Sequence Manipulation Suite</title>\n";
  var v109 = v420 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v108.write, v108, [v109], JAM.policy.p15);
  if (isColor) {
    var v110 = outputWindow.document;
    var v1020 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1015 = v1020 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1010 = v1015 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1004 = v1010 + "div.info {font-weight: bold}\n";
    var v993 = v1004 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v980 = v993 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v965 = v980 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v947 = v965 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v913 = v947 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v868 = v913 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v798 = v868 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v713 = v798 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v598 = v713 + "td.many {color: #000000}\n";
    var v421 = v598 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v111 = v421 + "</style>\n";
    JAM.call(v110.write, v110, [v111], JAM.policy.p15);
  } else {
    var v112 = outputWindow.document;
    var v1025 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1021 = v1025 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1016 = v1021 + "div.title {display: none}\n";
    var v1011 = v1016 + "div.info {font-weight: bold}\n";
    var v1005 = v1011 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v994 = v1005 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v981 = v994 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v966 = v981 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v948 = v966 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v914 = v948 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v869 = v914 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v799 = v869 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v714 = v799 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v599 = v714 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v422 = v599 + "img {display: none}\n";
    var v113 = v422 + "</style>\n";
    JAM.call(v112.write, v112, [v113], JAM.policy.p15);
  }
  var v114 = outputWindow.document;
  var v715 = "</head>\n" + '<body class="main">\n';
  var v600 = v715 + '<div class="title">';
  var v423 = v600 + title$$7;
  var v115 = v423 + " results</div>\n";
  JAM.call(v114.write, v114, [v115], JAM.policy.p15);
  outputWindow.status = "Please Wait.";
  return;
}
function openWindowAlign(title$$8) {
  _openWindowAlign(title$$8);
  return;
}
function _openWindowAlign(title$$9) {
  var isBackground = true;
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  outputWindow.focus();
  var v116 = outputWindow.document;
  var v716 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v601 = v716 + "<head>\n";
  var v424 = v601 + "<title>Sequence Manipulation Suite</title>\n";
  var v117 = v424 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v116.write, v116, [v117], JAM.policy.p15);
  if (isBackground) {
    var v118 = outputWindow.document;
    var v1022 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1017 = v1022 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1012 = v1017 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1006 = v1012 + "div.info {font-weight: bold}\n";
    var v995 = v1006 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v982 = v995 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v967 = v982 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v949 = v967 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v915 = v949 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v870 = v915 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v800 = v870 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v717 = v800 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v602 = v717 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v425 = v602 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v119 = v425 + "</style>\n";
    JAM.call(v118.write, v118, [v119], JAM.policy.p15);
  } else {
    var v120 = outputWindow.document;
    var v1028 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1026 = v1028 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1023 = v1026 + "div.title {display: none}\n";
    var v1018 = v1023 + "div.info {font-weight: bold}\n";
    var v1013 = v1018 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1007 = v1013 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v996 = v1007 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v983 = v996 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v968 = v983 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v950 = v968 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v916 = v950 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v871 = v916 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v801 = v871 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v718 = v801 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v603 = v718 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v426 = v603 + "img {display: none}\n";
    var v121 = v426 + "</style>\n";
    JAM.call(v120.write, v120, [v121], JAM.policy.p15);
  }
  var v122 = outputWindow.document;
  var v719 = "</head>\n" + '<body class="main">\n';
  var v604 = v719 + '<div class="title">';
  var v427 = v604 + title$$9;
  var v123 = v427 + " results</div>\n";
  JAM.call(v122.write, v122, [v123], JAM.policy.p15);
  outputWindow.status = "Please Wait.";
  return;
}
function removeFormatting(sequence$$5) {
  return JAM.call(sequence$$5.replace, sequence$$5, [/[\d\s]/g, ""], JAM.policy.p16);
}
function removeNonDna(sequence$$6) {
  return JAM.call(sequence$$6.replace, sequence$$6, [/[^gatucryswkmbdhvnxGATUCRYSWKMBDHVNX]/g, ""], JAM.policy.p16);
}
function removeNonDnaStrict(sequence$$7) {
  return JAM.call(sequence$$7.replace, sequence$$7, [/[^gatucGATUC]/g, ""], JAM.policy.p16);
}
function removeNonProtein(sequence$$8) {
  return JAM.call(sequence$$8.replace, sequence$$8, [/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, ""], JAM.policy.p16);
}
function removeNonProteinStrict(sequence$$9) {
  return JAM.call(sequence$$9.replace, sequence$$9, [/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, ""], JAM.policy.p16);
}
function removeNonProteinAllowDegen(sequence$$10) {
  return JAM.call(sequence$$10.replace, sequence$$10, [/[^ABCDEFGHIKLMNPQRSTVWYXZabcdefghiklmnpqrstvwyxz\*]/g, ""], JAM.policy.p16);
}
function removeNonProteinAllowX(sequence$$11) {
  return JAM.call(sequence$$11.replace, sequence$$11, [/[^ACDEFGHIKLMNPQRSTVWYZXacdefghiklmnpqrstvwyzx\*]/g, ""], JAM.policy.p16);
}
function removeWhiteSpace(text$$9) {
  return JAM.call(text$$9.replace, text$$9, [/\s/g, ""], JAM.policy.p16);
}
function removeNonLetters(sequence$$12) {
  return JAM.call(sequence$$12.replace, sequence$$12, [/[^A-Z]/gi, ""], JAM.policy.p16);
}
function reverse(dnaSequence$$1) {
  var tempDnaArray = new Array;
  var v428 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p18);
  var v124 = v428 != -1;
  if (v124) {
    tempDnaArray = JAM.call(dnaSequence$$1.match, dnaSequence$$1, [/./g], JAM.policy.p18);
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
  var v125 = j$$5 < lengthOfColumn;
  for (;v125;) {
    tempString = tempString + " ";
    j$$5++;
    v125 = j$$5 < lengthOfColumn;
  }
  var v126 = tempString + theNumber;
  theNumber = v126 + " ";
  var v127 = sequenceToAppend + theNumber;
  sequenceToAppend = v127 + tabIn;
  return sequenceToAppend;
}
function testScript() {
  function v1(str$$7, p1$$1, offset$$9, s$$3) {
    return p1$$1 + "X";
  }
  var testArray = new Array;
  var testString = "1234567890";
  JAM.call(testArray.push, testArray, [testString], JAM.policy.p15);
  var v429 = testArray[0];
  var v128 = v429 != testString;
  if (v128) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v430 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p15);
  var v129 = v430 == -1;
  if (v129) {
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
  var v130 = !caughtException;
  if (v130) {
    alert("Exception handling not supported. See browser compatibility page.");
  }
  testString = "123";
  testString = JAM.call(testString.replace, testString, [/(\d)/g, v1], JAM.policy.p16);
  var v131 = testString != "1X2X3X";
  if (v131) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false;
  }
  var testNum = 2489.8237;
  var v431 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p12);
  var v132 = v431 != 2489.824;
  if (v132) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v432 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p12);
  var v133 = v432 != 2489.8;
  if (v133) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v433 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p18);
  var v134 = v433 == -1;
  if (v134) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v802 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p18);
  var v720 = v802 == -1;
  var v804 = !v720;
  if (v804) {
    var v803 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p18);
    v720 = v803 == -1;
  }
  var v605 = v720;
  var v722 = !v605;
  if (v722) {
    var v721 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p18);
    v605 = v721 == -1;
  }
  var v434 = v605;
  var v607 = !v434;
  if (v607) {
    var v606 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p18);
    v434 = v606 == -1;
  }
  var v135 = v434;
  if (v135) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v435 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p18);
  var v136 = v435 == -1;
  if (v136) {
    alert("Please enter a number.");
    return false;
  }
  var v138 = theNumber$$2 > maxInput$$2;
  if (v138) {
    var v436 = "Please enter a number less than or equal to " + maxInput$$2;
    var v137 = v436 + ".";
    alert(v137);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v437 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p18);
  var v139 = v437 != -1;
  if (v139) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v438 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p18);
  var v140 = v438 != -1;
  if (v140) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v805 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p18);
  var v723 = v805 == -1;
  var v807 = !v723;
  if (v807) {
    var v806 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p18);
    v723 = v806 == -1;
  }
  var v608 = v723;
  var v725 = !v608;
  if (v725) {
    var v724 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p18);
    v608 = v724 == -1;
  }
  var v439 = v608;
  var v610 = !v439;
  if (v610) {
    var v609 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p18);
    v439 = v609 == -1;
  }
  var v141 = v439;
  if (v141) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v808 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p18);
  var v726 = v808 == -1;
  var v810 = !v726;
  if (v810) {
    var v809 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p18);
    v726 = v809 == -1;
  }
  var v611 = v726;
  var v728 = !v611;
  if (v728) {
    var v727 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p18);
    v611 = v727 == -1;
  }
  var v440 = v611;
  var v613 = !v440;
  if (v613) {
    var v612 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p18);
    v440 = v612 == -1;
  }
  var v142 = v440;
  if (v142) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v441 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p18);
  var v143 = v441 == -1;
  if (v143) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v811 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p18);
  var v729 = v811 == -1;
  var v813 = !v729;
  if (v813) {
    var v812 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p18);
    v729 = v812 == -1;
  }
  var v614 = v729;
  var v731 = !v614;
  if (v731) {
    var v730 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p18);
    v614 = v730 == -1;
  }
  var v442 = v614;
  var v616 = !v442;
  if (v616) {
    var v615 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p18);
    v442 = v615 == -1;
  }
  var v144 = v442;
  if (v144) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v443 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p18);
  var v145 = v443 == -1;
  if (v145) {
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
  var v152 = i$$5 < stopBase;
  for (;v152;) {
    var v146 = i$$5 + 1;
    lineOfText = rightNum(v146, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v444 = basePerLine / groupSize;
    var v149 = j$$6 <= v444;
    for (;v149;) {
      var v148 = k < groupSize;
      for (;v148;) {
        var v445 = k + i$$5;
        var v147 = JAM.call(text$$10.charAt, text$$10, [v445], JAM.policy.p15);
        lineOfText = lineOfText + v147;
        k = k + 1;
        v148 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v446 = basePerLine / groupSize;
      v149 = j$$6 <= v446;
    }
    var v150 = outputWindow.document;
    var v151 = lineOfText + "\n";
    JAM.call(v150.write, v150, [v151], JAM.policy.p15);
    lineOfText = "";
    v152 = i$$5 < stopBase;
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
    var v447 = adjustment < 0;
    if (v447) {
      v447 = adjusted >= 0;
    }
    var v153 = v447;
    if (v153) {
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
  var v184 = i$$6 < stopBase$$2;
  for (;v184;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v448 = basePerLine$$2 / groupSize$$2;
    var v160 = j$$7 <= v448;
    for (;v160;) {
      var v156 = k$$1 < groupSize$$2;
      for (;v156;) {
        var v449 = i$$6 + k$$1;
        var v154 = v449 >= stopBase$$2;
        if (v154) {
          break;
        }
        var v450 = k$$1 + i$$6;
        var v155 = JAM.call(text$$12.charAt, text$$12, [v450], JAM.policy.p15);
        lineOfText$$1 = lineOfText$$1 + v155;
        k$$1 = k$$1 + 1;
        v156 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v158 = numberPosition$$1 == "above";
      if (v158) {
        var v451 = adjustNumbering(i$$6, numberingAdjustment);
        var v157 = rightNum(v451, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v157;
      }
      var v159 = i$$6 >= stopBase$$2;
      if (v159) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v452 = basePerLine$$2 / groupSize$$2;
      v160 = j$$7 <= v452;
    }
    var v183 = numberPosition$$1 == "left";
    if (v183) {
      var v161 = outputWindow.document;
      var v732 = adjustNumbering(lineNum, numberingAdjustment);
      var v617 = rightNum(v732, "", 8, tabIn$$3);
      var v453 = v617 + lineOfText$$1;
      var v162 = v453 + "\n";
      JAM.call(v161.write, v161, [v162], JAM.policy.p15);
      var v166 = strands$$1 == "two";
      if (v166) {
        var v163 = outputWindow.document;
        var v733 = adjustNumbering(lineNum, numberingAdjustment);
        var v618 = rightNum(v733, "", 8, tabIn$$3);
        var v619 = complement(lineOfText$$1);
        var v454 = v618 + v619;
        var v164 = v454 + "\n";
        JAM.call(v163.write, v163, [v164], JAM.policy.p15);
        var v165 = outputWindow.document;
        JAM.call(v165.write, v165, ["\n"], JAM.policy.p9);
      }
    } else {
      var v182 = numberPosition$$1 == "right";
      if (v182) {
        var v167 = outputWindow.document;
        var v620 = adjustNumbering(i$$6, numberingAdjustment);
        var v455 = lineOfText$$1 + v620;
        var v168 = v455 + "\n";
        JAM.call(v167.write, v167, [v168], JAM.policy.p15);
        var v172 = strands$$1 == "two";
        if (v172) {
          var v169 = outputWindow.document;
          var v621 = complement(lineOfText$$1);
          var v622 = adjustNumbering(i$$6, numberingAdjustment);
          var v456 = v621 + v622;
          var v170 = v456 + "\n";
          JAM.call(v169.write, v169, [v170], JAM.policy.p15);
          var v171 = outputWindow.document;
          JAM.call(v171.write, v171, ["\n"], JAM.policy.p9);
        }
      } else {
        var v181 = numberPosition$$1 == "above";
        if (v181) {
          var v173 = outputWindow.document;
          var v174 = aboveNum + "\n";
          JAM.call(v173.write, v173, [v174], JAM.policy.p15);
          var v175 = outputWindow.document;
          var v176 = lineOfText$$1 + "\n";
          JAM.call(v175.write, v175, [v176], JAM.policy.p15);
          var v180 = strands$$1 == "two";
          if (v180) {
            var v177 = outputWindow.document;
            var v457 = complement(lineOfText$$1);
            var v178 = v457 + "\n";
            JAM.call(v177.write, v177, [v178], JAM.policy.p15);
            var v179 = outputWindow.document;
            JAM.call(v179.write, v179, ["\n"], JAM.policy.p9);
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v184 = i$$6 < stopBase$$2;
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
  var v203 = i$$7 < stopBase$$3;
  for (;v203;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v458 = basePerLine$$3 / groupSize$$3;
    var v191 = j$$8 <= v458;
    for (;v191;) {
      var v187 = k$$2 < groupSize$$3;
      for (;v187;) {
        var v459 = i$$7 + k$$2;
        var v185 = v459 >= stopBase$$3;
        if (v185) {
          break;
        }
        var v460 = k$$2 + i$$7;
        var v186 = JAM.call(text$$13.charAt, text$$13, [v460], JAM.policy.p15);
        lineOfText$$2 = lineOfText$$2 + v186;
        k$$2 = k$$2 + 1;
        v187 = k$$2 < groupSize$$3;
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v189 = numberPosition$$2 == "above";
      if (v189) {
        var v188 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = aboveNum$$1 + v188;
      }
      var v190 = i$$7 >= stopBase$$3;
      if (v190) {
        break;
      }
      k$$2 = 0;
      j$$8++;
      var v461 = basePerLine$$3 / groupSize$$3;
      v191 = j$$8 <= v461;
    }
    var v202 = numberPosition$$2 == "left";
    if (v202) {
      var v192 = outputWindow.document;
      var v623 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v462 = v623 + lineOfText$$2;
      var v193 = v462 + "\n";
      JAM.call(v192.write, v192, [v193], JAM.policy.p15);
    } else {
      var v201 = numberPosition$$2 == "right";
      if (v201) {
        var v194 = outputWindow.document;
        var v463 = lineOfText$$2 + i$$7;
        var v195 = v463 + "\n";
        JAM.call(v194.write, v194, [v195], JAM.policy.p15);
      } else {
        var v200 = numberPosition$$2 == "above";
        if (v200) {
          var v196 = outputWindow.document;
          var v197 = aboveNum$$1 + "\n";
          JAM.call(v196.write, v196, [v197], JAM.policy.p15);
          var v198 = outputWindow.document;
          var v199 = lineOfText$$2 + "\n";
          JAM.call(v198.write, v198, [v199], JAM.policy.p15);
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v203 = i$$7 < stopBase$$3;
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
  var v734 = sequence$$13.length;
  var v624 = v734 <= firstIndexToMutate;
  var v735 = !v624;
  if (v735) {
    v624 = lastIndexToMutate < 0;
  }
  var v464 = v624;
  var v625 = !v464;
  if (v625) {
    v464 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v204 = v464;
  if (v204) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v212 = i$$8 < numMut;
  for (;v212;) {
    maxNum = sequence$$13.length;
    var v465 = Math.random();
    var v205 = v465 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v205], JAM.policy.p18);
    var v466 = randNum < firstIndexToMutate;
    var v626 = !v466;
    if (v626) {
      v466 = randNum > lastIndexToMutate;
    }
    var v206 = v466;
    if (v206) {
      numMut++;
      i$$8++;
      v212 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p18);
    needNewChar = true;
    for (;needNewChar;) {
      var v467 = Math.random();
      var v468 = components$$1.length;
      var v207 = v467 * v468;
      componentsIndex = JAM.call(Math.round, Math, [v207], JAM.policy.p18);
      var v469 = components$$1.length;
      var v208 = componentsIndex == v469;
      if (v208) {
        componentsIndex = 0;
      }
      var v470 = components$$1[componentsIndex];
      var v209 = v470 != currentChar;
      if (v209) {
        needNewChar = false;
      }
    }
    var v471 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p13);
    var v472 = components$$1[componentsIndex];
    var v210 = v471 + v472;
    var v473 = randNum + 1;
    var v474 = sequence$$13.length;
    var v211 = JAM.call(sequence$$13.substring, sequence$$13, [v473, v474], JAM.policy.p27);
    sequence$$13 = v210 + v211;
    i$$8++;
    v212 = i$$8 < numMut;
  }
  var v213 = outputWindow.document;
  var v214 = addReturns(sequence$$13);
  JAM.call(v213.write, v213, [v214], JAM.policy.p15);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v219 = j$$9 < lengthOut$$1;
  for (;v219;) {
    var v475 = Math.random();
    var v476 = components$$2.length;
    var v215 = v475 * v476;
    tempNum$$1 = JAM.call(Math.floor, Math, [v215], JAM.policy.p18);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v477 = sequence$$14.length;
    var v218 = v477 == 60;
    if (v218) {
      var v216 = outputWindow.document;
      var v217 = sequence$$14 + "\n";
      JAM.call(v216.write, v216, [v217], JAM.policy.p15);
      sequence$$14 = "";
    }
    j$$9++;
    v219 = j$$9 < lengthOut$$1;
  }
  var v220 = outputWindow.document;
  var v221 = sequence$$14 + "\n";
  JAM.call(v220.write, v220, [v221], JAM.policy.p15);
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
  var v225 = dnaConformation == "circular";
  if (v225) {
    var v222 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    shiftValue = v222.length;
    var v736 = sequence$$15.length;
    var v627 = v736 - lookAhead;
    var v628 = sequence$$15.length;
    var v478 = JAM.call(sequence$$15.substring, sequence$$15, [v627, v628], JAM.policy.p27);
    var v223 = v478 + sequence$$15;
    var v224 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    sequence$$15 = v223 + v224;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v226 = outputWindow.document;
  JAM.call(v226.write, v226, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p9);
  var v227 = outputWindow.document;
  var v737 = '<tr><td class="title" width="200px">' + "Site:";
  var v629 = v737 + '</td><td class="title">';
  var v479 = v629 + "Positions:";
  var v228 = v479 + "</td></tr>\n";
  JAM.call(v227.write, v227, [v228], JAM.policy.p15);
  var i$$9 = 0;
  var v480 = arrayOfItems.length;
  var v244 = i$$9 < v480;
  for (;v244;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v481 = arrayOfItems[i$$9];
    var v229 = JAM.call(v481.match, v481, [/\/.+\//], JAM.policy.p18);
    matchExp = v229 + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    var v738 = arrayOfItems[i$$9];
    var v630 = JAM.call(v738.match, v738, [/\)\D*\d+/], JAM.policy.p18);
    var v482 = v630.toString();
    var v230 = JAM.call(v482.replace, v482, [/\)\D*/, ""], JAM.policy.p16);
    cutDistance = parseFloat(v230);
    var v236 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p15);
    for (;v236;) {
      var v231 = matchExp.lastIndex;
      matchPosition = v231 - cutDistance;
      var v483 = matchPosition >= lowerLimit;
      if (v483) {
        v483 = matchPosition < upperLimit;
      }
      var v234 = v483;
      if (v234) {
        timesFound++;
        var v232 = tempString$$1 + ", ";
        var v484 = matchPosition - shiftValue;
        var v233 = v484 + 1;
        tempString$$1 = v232 + v233;
      }
      var v485 = matchExp.lastIndex;
      var v631 = RegExp.lastMatch;
      var v486 = v631.length;
      var v235 = v485 - v486;
      matchExp.lastIndex = v235 + 1;
      v236 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p15);
    }
    var v487 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p18);
    var v237 = v487 != -1;
    if (v237) {
      tempString$$1 = JAM.call(tempString$$1.replace, tempString$$1, [/none,\s*/, ""], JAM.policy.p16);
    }
    var v241 = timesFound == 0;
    if (v241) {
      backGroundClass = "none";
    } else {
      var v240 = timesFound == 1;
      if (v240) {
        backGroundClass = "one";
      } else {
        var v239 = timesFound == 2;
        if (v239) {
          backGroundClass = "two";
        } else {
          var v238 = timesFound == 3;
          if (v238) {
            backGroundClass = "three";
          } else {
            backGroundClass = "many";
          }
        }
      }
    }
    var v242 = outputWindow.document;
    var v951 = '<tr><td class="' + backGroundClass;
    var v917 = v951 + '">';
    var v984 = arrayOfItems[i$$9];
    var v969 = JAM.call(v984.match, v984, [/\([^\(]+\)/], JAM.policy.p18);
    var v952 = v969.toString();
    var v918 = JAM.call(v952.replace, v952, [/\(|\)/g, ""], JAM.policy.p16);
    var v872 = v917 + v918;
    var v814 = v872 + '</td><td class="';
    var v739 = v814 + backGroundClass;
    var v632 = v739 + '">';
    var v488 = v632 + tempString$$1;
    var v243 = v488 + "</td></tr>\n";
    JAM.call(v242.write, v242, [v243], JAM.policy.p15);
    timesFound = 0;
    i$$9++;
    var v489 = arrayOfItems.length;
    v244 = i$$9 < v489;
  }
  var v245 = outputWindow.document;
  JAM.call(v245.write, v245, ["</tbody></table>\n"], JAM.policy.p9);
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v246 = outputWindow.document;
  JAM.call(v246.write, v246, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p9);
  var v247 = outputWindow.document;
  var v873 = '<tr><td class="title">' + "Pattern:";
  var v815 = v873 + '</td><td class="title">';
  var v740 = v815 + "Times found:";
  var v633 = v740 + '</td><td class="title">';
  var v490 = v633 + "Percentage:";
  var v248 = v490 + "</td></tr>\n";
  JAM.call(v247.write, v247, [v248], JAM.policy.p15);
  var i$$10 = 0;
  var v491 = arrayOfItems$$1.length;
  var v257 = i$$10 < v491;
  for (;v257;) {
    var tempNumber = 0;
    var v492 = arrayOfItems$$1[i$$10];
    var v249 = JAM.call(v492.match, v492, [/\/[^\/]+\//], JAM.policy.p18);
    var matchExp$$1 = v249 + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    var v493 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p15);
    var v251 = v493 != -1;
    if (v251) {
      var v250 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p15);
      tempNumber = v250.length;
    }
    var percentage = 0;
    var v634 = originalLength + 1;
    var v816 = arrayOfItems$$1[i$$10];
    var v741 = JAM.call(v816.match, v816, [/\d+/], JAM.policy.p18);
    var v635 = parseFloat(v741);
    var v494 = v634 - v635;
    var v254 = v494 > 0;
    if (v254) {
      var v252 = 100 * tempNumber;
      var v495 = originalLength + 1;
      var v742 = arrayOfItems$$1[i$$10];
      var v636 = JAM.call(v742.match, v742, [/\d+/], JAM.policy.p18);
      var v496 = parseFloat(v636);
      var v253 = v495 - v496;
      percentage = v252 / v253;
    }
    var v255 = outputWindow.document;
    var v985 = arrayOfItems$$1[i$$10];
    var v970 = JAM.call(v985.match, v985, [/\([^\(]+\)\b/], JAM.policy.p18);
    var v953 = v970.toString();
    var v919 = JAM.call(v953.replace, v953, [/\(|\)/g, ""], JAM.policy.p16);
    var v874 = "<tr><td>" + v919;
    var v817 = v874 + "</td><td>";
    var v743 = v817 + tempNumber;
    var v637 = v743 + "</td><td>";
    var v638 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p12);
    var v497 = v637 + v638;
    var v256 = v497 + "</td></tr>\n";
    JAM.call(v255.write, v255, [v256], JAM.policy.p15);
    i$$10++;
    var v498 = arrayOfItems$$1.length;
    v257 = i$$10 < v498;
  }
  var v258 = outputWindow.document;
  JAM.call(v258.write, v258, ["</tbody></table>\n"], JAM.policy.p9);
  return true;
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v499 = sequence$$17.length;
  var v265 = v499 > 0;
  for (;v265;) {
    maxNum$$1 = sequence$$17.length;
    var v500 = Math.random();
    var v259 = v500 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v259], JAM.policy.p18);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p18);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p13);
    var v260 = randNum$$1 + 1;
    var v261 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v260, v261], JAM.policy.p16);
    sequence$$17 = tempString1 + tempString2;
    var v501 = tempSeq.length;
    var v264 = v501 == 60;
    if (v264) {
      var v262 = outputWindow.document;
      var v263 = tempSeq + "\n";
      JAM.call(v262.write, v262, [v263], JAM.policy.p15);
      tempSeq = "";
    }
    var v502 = sequence$$17.length;
    v265 = v502 > 0;
  }
  var v266 = outputWindow.document;
  var v267 = tempSeq + "\n";
  JAM.call(v266.write, v266, [v267], JAM.policy.p15);
  return true;
}
function pcrProducts() {
  var theDocument = document;
  var newDna = "";
  var maxInput$$3 = 2E5;
  var v503 = testScript();
  var v268 = v503 == false;
  if (v268) {
    return;
  }
  var re$$3;
  var primers = new Array;
  var forwardMatches = new Array;
  var reverseMatches = new Array;
  var pcrProducts$$1 = new Array;
  var v997 = theDocument.forms;
  var v986 = v997[0];
  var v971 = v986.elements;
  var v954 = v971[0];
  var v920 = checkFormElement(v954);
  var v875 = v920 == false;
  var v922 = !v875;
  if (v922) {
    var v1008 = theDocument.forms;
    var v998 = v1008[0];
    var v987 = v998.elements;
    var v972 = v987[0];
    var v955 = v972.value;
    var v921 = checkSequenceLength(v955, maxInput$$3);
    v875 = v921 == false;
  }
  var v818 = v875;
  var v877 = !v818;
  if (v877) {
    var v988 = theDocument.forms;
    var v973 = v988[0];
    var v956 = v973.elements;
    var v923 = v956[1];
    var v876 = checkFormElement(v923);
    v818 = v876 == false;
  }
  var v744 = v818;
  var v820 = !v744;
  if (v820) {
    var v974 = theDocument.forms;
    var v957 = v974[0];
    var v924 = v957.elements;
    var v878 = v924[2];
    var v819 = checkFormElement(v878);
    v744 = v819 == false;
  }
  var v639 = v744;
  var v746 = !v639;
  if (v746) {
    var v958 = theDocument.forms;
    var v925 = v958[0];
    var v879 = v925.elements;
    var v821 = v879[3];
    var v745 = checkFormElement(v821);
    v639 = v745 == false;
  }
  var v504 = v639;
  var v641 = !v504;
  if (v641) {
    var v926 = theDocument.forms;
    var v880 = v926[0];
    var v822 = v880.elements;
    var v747 = v822[4];
    var v640 = checkFormElement(v747);
    v504 = v640 == false;
  }
  var v269 = v504;
  if (v269) {
    return;
  }
  var v959 = theDocument.forms;
  var v927 = v959[0];
  var v881 = v927.elements;
  var v823 = v881[2];
  var v748 = v823.value;
  var v642 = JAM.call(v748.replace, v748, [/[^A-Za-z]/g, ""], JAM.policy.p16);
  var v505 = v642.length;
  var v270 = v505 < 10;
  if (v270) {
    alert("Please enter primer sequences that are at least 10 bases long.");
    return;
  }
  var v960 = theDocument.forms;
  var v928 = v960[0];
  var v882 = v928.elements;
  var v824 = v882[4];
  var v749 = v824.value;
  var v643 = JAM.call(v749.replace, v749, [/[^A-Za-z]/g, ""], JAM.policy.p16);
  var v506 = v643.length;
  var v271 = v506 < 10;
  if (v271) {
    alert("Please enter primer sequences that are at least 10 bases long.");
    return;
  }
  var v883 = theDocument.forms;
  var v825 = v883[0];
  var v750 = v825.elements;
  var v644 = v750[2];
  var v507 = v644.value;
  var v272 = JAM.call(v507.replace, v507, [/[^A-Za-z]/g, ""], JAM.policy.p16);
  var primerOne = convertDegenerates(v272);
  var v884 = theDocument.forms;
  var v826 = v884[0];
  var v751 = v826.elements;
  var v645 = v751[4];
  var v508 = v645.value;
  var v273 = JAM.call(v508.replace, v508, [/[^A-Za-z]/g, ""], JAM.policy.p16);
  var primerTwo = convertDegenerates(v273);
  try {
    var v509 = "/" + primerOne;
    var v274 = v509 + "/gi";
    if (JAM.isEval(eval)) {
      re$$3 = eval("introspect(JAM.policy.pFull) { " + v274 + " }");
    } else {
      re$$3 = JAM.call(eval, null, [v274]);
    }
    var testString$$1 = "teststring";
    testString$$1 = JAM.call(testString$$1.replace, testString$$1, [re$$3, ""], JAM.policy.p19);
  } catch (e$$5) {
    alert("The first primer sequence is not formatted correctly.");
    return;
  }
  try {
    var v510 = "/" + primerTwo;
    var v275 = v510 + "/gi";
    if (JAM.isEval(eval)) {
      re$$3 = eval("introspect(JAM.policy.pFull) { " + v275 + " }");
    } else {
      re$$3 = JAM.call(eval, null, [v275]);
    }
    testString$$1 = "teststring";
    testString$$1 = JAM.call(testString$$1.replace, testString$$1, [re$$3, ""], JAM.policy.p19);
  } catch (e$$6) {
    alert("The second primer sequence is not formatted correctly.");
    return;
  }
  var v752 = "/" + primerOne;
  var v646 = v752 + "/gi";
  if (JAM.isEval(eval)) {
    var v511 = eval("introspect(JAM.policy.pFull) { " + v646 + " }")
  } else {
    var v511 = JAM.call(eval, null, [v646])
  }
  var v885 = theDocument.forms;
  var v827 = v885[0];
  var v753 = v827.elements;
  var v647 = v753[1];
  var v512 = v647.value;
  var v276 = new Primer(v511, v512);
  JAM.call(primers.push, primers, [v276], JAM.policy.p15);
  var v754 = "/" + primerTwo;
  var v648 = v754 + "/gi";
  if (JAM.isEval(eval)) {
    var v513 = eval("introspect(JAM.policy.pFull) { " + v648 + " }")
  } else {
    var v513 = JAM.call(eval, null, [v648])
  }
  var v886 = theDocument.forms;
  var v828 = v886[0];
  var v755 = v828.elements;
  var v649 = v755[3];
  var v514 = v649.value;
  var v277 = new Primer(v513, v514);
  JAM.call(primers.push, primers, [v277], JAM.policy.p15);
  var v829 = theDocument.forms;
  var v756 = v829[0];
  var v650 = v756.elements;
  var v515 = v650[0];
  var v278 = v515.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v278);
  var i$$11 = 0;
  var v516 = arrayOfFasta$$1.length;
  var v285 = i$$11 < v516;
  for (;v285;) {
    var v279 = arrayOfFasta$$1[i$$11];
    newDna = getSequenceFromFasta(v279);
    var v280 = arrayOfFasta$$1[i$$11];
    title = getTitleFromFasta(v280);
    newDna = removeNonDna(newDna);
    var v929 = theDocument.forms;
    var v887 = v929[0];
    var v830 = v887.elements;
    var v757 = v830[8];
    var v651 = v757.options;
    var v930 = theDocument.forms;
    var v888 = v930[0];
    var v831 = v888.elements;
    var v758 = v831[8];
    var v652 = v758.selectedIndex;
    var v517 = v651[v652];
    var v281 = v517.value;
    forwardMatches = findMatches(primers, newDna, v281);
    var v518 = complement(newDna);
    var v282 = reverse(v518);
    var v931 = theDocument.forms;
    var v889 = v931[0];
    var v832 = v889.elements;
    var v759 = v832[8];
    var v653 = v759.options;
    var v932 = theDocument.forms;
    var v890 = v932[0];
    var v833 = v890.elements;
    var v760 = v833[8];
    var v654 = v760.selectedIndex;
    var v519 = v653[v654];
    var v283 = v519.value;
    reverseMatches = findMatches(primers, v282, v283);
    var v933 = theDocument.forms;
    var v891 = v933[0];
    var v834 = v891.elements;
    var v761 = v834[8];
    var v655 = v761.options;
    var v934 = theDocument.forms;
    var v892 = v934[0];
    var v835 = v892.elements;
    var v762 = v835[8];
    var v656 = v762.selectedIndex;
    var v520 = v655[v656];
    var v284 = v520.value;
    makePcrProducts(newDna, forwardMatches, reverseMatches, v284, pcrProducts$$1);
    i$$11++;
    var v521 = arrayOfFasta$$1.length;
    v285 = i$$11 < v521;
  }
  JAM.call(pcrProducts$$1.sort, pcrProducts$$1, [pcrProductSorter], JAM.policy.p15);
  openWindow();
  openPre();
  i$$11 = 0;
  var v522 = pcrProducts$$1.length;
  var v288 = i$$11 < v522;
  for (;v288;) {
    var v286 = pcrProducts$$1[i$$11];
    var v935 = theDocument.forms;
    var v893 = v935[0];
    var v836 = v893.elements;
    var v763 = v836[8];
    var v657 = v763.options;
    var v936 = theDocument.forms;
    var v894 = v936[0];
    var v837 = v894.elements;
    var v764 = v837[8];
    var v658 = v764.selectedIndex;
    var v523 = v657[v658];
    var v287 = v523.value;
    JAM.call(v286.writeProduct, v286, [v287], JAM.policy.p15);
    i$$11++;
    var v524 = pcrProducts$$1.length;
    v288 = i$$11 < v524;
  }
  var v525 = pcrProducts$$1.length;
  var v290 = v525 == 0;
  if (v290) {
    var v289 = outputWindow.document;
    JAM.call(v289.write, v289, ["No PCR products were obtained.\n\n"], JAM.policy.p9);
  }
  closePre();
  closeWindow();
  return;
}
function findMatches(primers$$1, sequence$$18, topology$$1) {
  var matchArray$$2;
  var matchPosition$$1;
  var arrayOfMatches = new Array;
  var re$$4;
  var originalLength$$1 = sequence$$18.length;
  var v307 = topology$$1 == "circular";
  if (v307) {
    var lookAhead$$1 = 50;
    var v291 = JAM.call(sequence$$18.substring, sequence$$18, [0, lookAhead$$1], JAM.policy.p13);
    var shiftValue$$1 = v291.length;
    var v292 = sequence$$18.length;
    var upperLimit$$1 = v292 + shiftValue$$1;
    var v765 = sequence$$18.length;
    var v659 = v765 - lookAhead$$1;
    var v660 = sequence$$18.length;
    var v526 = JAM.call(sequence$$18.substring, sequence$$18, [v659, v660], JAM.policy.p27);
    var v293 = v526 + sequence$$18;
    var v294 = JAM.call(sequence$$18.substring, sequence$$18, [0, lookAhead$$1], JAM.policy.p13);
    sequence$$18 = v293 + v294;
    var lowerLimit$$1 = 0 + shiftValue$$1;
    var i$$12 = 0;
    var v527 = primers$$1.length;
    var v301 = i$$12 < v527;
    for (;v301;) {
      var v295 = primers$$1[i$$12];
      re$$4 = v295.re;
      var v300 = matchArray$$2 = JAM.call(re$$4.exec, re$$4, [sequence$$18], JAM.policy.p15);
      for (;v300;) {
        matchPosition$$1 = re$$4.lastIndex;
        var v528 = matchPosition$$1 >= lowerLimit$$1;
        if (v528) {
          v528 = matchPosition$$1 < upperLimit$$1;
        }
        var v298 = v528;
        if (v298) {
          matchPosition$$1 = matchPosition$$1 - shiftValue$$1;
          var v296 = matchPosition$$1 == 0;
          if (v296) {
            matchPosition$$1 = originalLength$$1;
          }
          var v661 = primers$$1[i$$12];
          var v529 = v661.name;
          var v530 = matchArray$$2[0];
          var v297 = new Match(v529, v530, matchPosition$$1);
          JAM.call(arrayOfMatches.push, arrayOfMatches, [v297], JAM.policy.p15);
        }
        var v531 = re$$4.lastIndex;
        var v662 = RegExp.lastMatch;
        var v532 = v662.length;
        var v299 = v531 - v532;
        re$$4.lastIndex = v299 + 1;
        v300 = matchArray$$2 = JAM.call(re$$4.exec, re$$4, [sequence$$18], JAM.policy.p15);
      }
      i$$12++;
      var v533 = primers$$1.length;
      v301 = i$$12 < v533;
    }
  } else {
    i$$12 = 0;
    var v534 = primers$$1.length;
    var v306 = i$$12 < v534;
    for (;v306;) {
      var v302 = primers$$1[i$$12];
      re$$4 = v302.re;
      var v305 = matchArray$$2 = JAM.call(re$$4.exec, re$$4, [sequence$$18], JAM.policy.p15);
      for (;v305;) {
        matchPosition$$1 = re$$4.lastIndex;
        var v663 = primers$$1[i$$12];
        var v535 = v663.name;
        var v536 = matchArray$$2[0];
        var v303 = new Match(v535, v536, matchPosition$$1);
        JAM.call(arrayOfMatches.push, arrayOfMatches, [v303], JAM.policy.p15);
        var v537 = re$$4.lastIndex;
        var v664 = RegExp.lastMatch;
        var v538 = v664.length;
        var v304 = v537 - v538;
        re$$4.lastIndex = v304 + 1;
        v305 = matchArray$$2 = JAM.call(re$$4.exec, re$$4, [sequence$$18], JAM.policy.p15);
      }
      i$$12++;
      var v539 = primers$$1.length;
      v306 = i$$12 < v539;
    }
  }
  return arrayOfMatches;
}
function makePcrProducts(newDna$$1, forwardMatches$$1, reverseMatches$$1, topology$$2, pcrProducts$$2) {
  var title$$10 = title;
  var i$$13 = 0;
  var v540 = forwardMatches$$1.length;
  var v313 = i$$13 < v540;
  for (;v313;) {
    var j$$10 = 0;
    var v541 = reverseMatches$$1.length;
    var v312 = j$$10 < v541;
    for (;v312;) {
      var v766 = forwardMatches$$1[i$$13];
      var v665 = v766.positionAfter;
      var v838 = forwardMatches$$1[i$$13];
      var v767 = v838.matchingText;
      var v666 = v767.length;
      var v542 = v665 - v666;
      var v667 = newDna$$1.length;
      var v768 = reverseMatches$$1[j$$10];
      var v668 = v768.positionAfter;
      var v543 = v667 - v668;
      var v311 = v542 <= v543;
      if (v311) {
        var v839 = forwardMatches$$1[i$$13];
        var v769 = v839.positionAfter;
        var v895 = forwardMatches$$1[i$$13];
        var v840 = v895.matchingText;
        var v770 = v840.length;
        var v669 = v769 - v770;
        var v544 = v669 + 1;
        var v771 = newDna$$1.length;
        var v841 = reverseMatches$$1[j$$10];
        var v772 = v841.positionAfter;
        var v670 = v771 - v772;
        var v842 = reverseMatches$$1[j$$10];
        var v773 = v842.matchingText;
        var v671 = v773.length;
        var v545 = v670 + v671;
        var v672 = forwardMatches$$1[i$$13];
        var v546 = v672.primerName;
        var v673 = reverseMatches$$1[j$$10];
        var v547 = v673.primerName;
        var v674 = forwardMatches$$1[i$$13];
        var v548 = v674.name;
        var v675 = reverseMatches$$1[j$$10];
        var v549 = v675.name;
        var v843 = forwardMatches$$1[i$$13];
        var v774 = v843.positionAfter;
        var v896 = forwardMatches$$1[i$$13];
        var v844 = v896.matchingText;
        var v775 = v844.length;
        var v676 = v774 - v775;
        var v845 = newDna$$1.length;
        var v897 = reverseMatches$$1[j$$10];
        var v846 = v897.positionAfter;
        var v776 = v845 - v846;
        var v898 = reverseMatches$$1[j$$10];
        var v847 = v898.matchingText;
        var v777 = v847.length;
        var v677 = v776 + v777;
        var v550 = JAM.call(newDna$$1.substring, newDna$$1, [v676, v677], JAM.policy.p27);
        var v308 = new PcrProduct(title$$10, v544, v545, v546, v547, v548, v549, v550);
        JAM.call(pcrProducts$$2.push, pcrProducts$$2, [v308], JAM.policy.p15);
      } else {
        var v551 = topology$$2 == "circular";
        if (v551) {
          var v848 = forwardMatches$$1[i$$13];
          var v778 = v848.positionAfter;
          var v899 = forwardMatches$$1[i$$13];
          var v849 = v899.matchingText;
          var v779 = v849.length;
          var v678 = v778 - v779;
          var v900 = newDna$$1.length;
          var v937 = reverseMatches$$1[j$$10];
          var v901 = v937.positionAfter;
          var v850 = v900 - v901;
          var v938 = reverseMatches$$1[j$$10];
          var v902 = v938.matchingText;
          var v851 = v902.length;
          var v780 = v850 + v851;
          var v679 = v780 - 1;
          v551 = v678 > v679;
        }
        var v310 = v551;
        if (v310) {
          var v852 = forwardMatches$$1[i$$13];
          var v781 = v852.positionAfter;
          var v903 = forwardMatches$$1[i$$13];
          var v853 = v903.matchingText;
          var v782 = v853.length;
          var v680 = v781 - v782;
          var v552 = v680 + 1;
          var v783 = newDna$$1.length;
          var v854 = reverseMatches$$1[j$$10];
          var v784 = v854.positionAfter;
          var v681 = v783 - v784;
          var v855 = reverseMatches$$1[j$$10];
          var v785 = v855.matchingText;
          var v682 = v785.length;
          var v553 = v681 + v682;
          var v683 = forwardMatches$$1[i$$13];
          var v554 = v683.primerName;
          var v684 = reverseMatches$$1[j$$10];
          var v555 = v684.primerName;
          var v685 = forwardMatches$$1[i$$13];
          var v556 = v685.name;
          var v686 = reverseMatches$$1[j$$10];
          var v557 = v686.name;
          var v904 = forwardMatches$$1[i$$13];
          var v856 = v904.positionAfter;
          var v939 = forwardMatches$$1[i$$13];
          var v905 = v939.matchingText;
          var v857 = v905.length;
          var v786 = v856 - v857;
          var v787 = newDna$$1.length;
          var v687 = JAM.call(newDna$$1.substring, newDna$$1, [v786, v787], JAM.policy.p27);
          var v906 = newDna$$1.length;
          var v940 = reverseMatches$$1[j$$10];
          var v907 = v940.positionAfter;
          var v858 = v906 - v907;
          var v941 = reverseMatches$$1[j$$10];
          var v908 = v941.matchingText;
          var v859 = v908.length;
          var v788 = v858 + v859;
          var v688 = JAM.call(newDna$$1.substring, newDna$$1, [0, v788], JAM.policy.p13);
          var v558 = v687 + v688;
          var v309 = new PcrProduct(title$$10, v552, v553, v554, v555, v556, v557, v558);
          JAM.call(pcrProducts$$2.push, pcrProducts$$2, [v309], JAM.policy.p15);
        }
      }
      j$$10++;
      var v559 = reverseMatches$$1.length;
      v312 = j$$10 < v559;
    }
    i$$13++;
    var v560 = forwardMatches$$1.length;
    v313 = i$$13 < v560;
  }
  return;
}
function writeProduct(topology$$3) {
  var v314 = outputWindow.document;
  var v1027 = this.sequence;
  var v1024 = v1027.length;
  var v1019 = "&gt;" + v1024;
  var v1014 = v1019 + " bp product from ";
  var v1009 = v1014 + topology$$3;
  var v999 = v1009 + " template ";
  var v1000 = this.template;
  var v989 = v999 + v1000;
  var v975 = v989 + ", base ";
  var v976 = this.start;
  var v961 = v975 + v976;
  var v942 = v961 + " to base ";
  var v943 = this.stop;
  var v909 = v942 + v943;
  var v860 = v909 + " (";
  var v861 = this.forwardName;
  var v789 = v860 + v861;
  var v689 = v789 + " - ";
  var v690 = this.reverseName;
  var v561 = v689 + v690;
  var v315 = v561 + ").\n";
  JAM.call(v314.write, v314, [v315], JAM.policy.p15);
  var v316 = outputWindow.document;
  var v691 = this.sequence;
  var v562 = addReturns(v691);
  var v317 = v562 + "\n\n";
  JAM.call(v316.write, v316, [v317], JAM.policy.p15);
  return;
}
function PcrProduct(template, start$$4, stop, forwardName, reverseName, forwardPrimer, reversePrimer, sequence$$19) {
  this.template = template;
  this.start = start$$4;
  this.stop = stop;
  this.forwardName = forwardName;
  this.reverseName = reverseName;
  this.forwardPrimer = forwardPrimer;
  this.reversePrimer = reversePrimer;
  this.sequence = sequence$$19;
  return;
}
function Match(primerName, matchingText, positionAfter) {
  this.primerName = primerName;
  this.matchingText = matchingText;
  this.positionAfter = positionAfter;
  return;
}
function Primer(re$$5, name$$30) {
  this.re = re$$5;
  this.name = name$$30;
  return;
}
function pcrProductSorter(a, b) {
  var v692 = a.sequence;
  var v563 = v692.length;
  var v693 = b.sequence;
  var v564 = v693.length;
  var v318 = v563 < v564;
  if (v318) {
    return 1;
  }
  var v694 = a.sequence;
  var v565 = v694.length;
  var v695 = b.sequence;
  var v566 = v695.length;
  var v319 = v565 > v566;
  if (v319) {
    return -1;
  } else {
    return 0;
  }
  return;
}
new PcrProduct("", 0, 0, "", "", "", "", "");
var v320 = PcrProduct.prototype;
v320.writeProduct = writeProduct;
JAM.set(document, "onload", v2);
var v321 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p9);
JAM.set(v321, "onclick", v3);
var v322 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p9);
JAM.set(v322, "onclick", v4)

JAM.stopProfile('load');
