
JAM.startProfile('load');
function v4() {
  var v699 = document.forms;
  var v569 = v699[0];
  var v325 = v569.elements;
  var v5 = v325[0];
  v5.value = " ";
  var v700 = document.forms;
  var v570 = v700[0];
  var v326 = v570.elements;
  var v6 = v326[1];
  v6.value = " ";
  var v701 = document.forms;
  var v571 = v701[0];
  var v327 = v571.elements;
  var v7 = v327[2];
  v7.value = " ";
  var v702 = document.forms;
  var v572 = v702[0];
  var v328 = v572.elements;
  var v8 = v328[3];
  v8.value = " ";
  var v703 = document.forms;
  var v573 = v703[0];
  var v329 = v573.elements;
  var v9 = v329[4];
  v9.value = " ";
  return;
}
function v3() {
  try {
    pcrProducts(document);
  } catch (e$$7) {
    var v10 = "The following error was encountered: " + e$$7;
    alert(v10);
  }
  return;
}
function v2() {
  var v330 = document.main_form;
  var v11 = v330.main_submit;
  v11.focus();
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
  var v12 = arrayOfSequences[0];
  var lengthOfAlign = v12.length;
  var v331 = arrayOfSequences.length;
  var v13 = v331 < 2;
  if (v13) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v332 = arrayOfTitles.length;
  var v15 = i$$1 < v332;
  for (;v15;) {
    var v793 = arrayOfTitles[i$$1];
    var v704 = JAM.call(v793.search, v793, [/\S/], JAM.policy.p17);
    var v574 = v704 == -1;
    var v706 = !v574;
    if (v706) {
      var v794 = arrayOfSequences[i$$1];
      var v705 = JAM.call(v794.search, v794, [/\S/], JAM.policy.p17);
      v574 = v705 == -1;
    }
    var v333 = v574;
    var v576 = !v333;
    if (v576) {
      var v707 = arrayOfSequences[i$$1];
      var v575 = v707.length;
      v333 = v575 != lengthOfAlign;
    }
    var v14 = v333;
    if (v14) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v334 = arrayOfTitles.length;
    v15 = i$$1 < v334;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v865 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p17);
  var v795 = v865 == -1;
  var v867 = !v795;
  if (v867) {
    var v866 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p17);
    v795 = v866 == -1;
  }
  var v708 = v795;
  var v797 = !v708;
  if (v797) {
    var v796 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p17);
    v708 = v796 == -1;
  }
  var v577 = v708;
  var v710 = !v577;
  if (v710) {
    var v709 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p17);
    v577 = v709 == -1;
  }
  var v335 = v577;
  var v579 = !v335;
  if (v579) {
    var v578 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p17);
    v335 = v578 == -1;
  }
  var v16 = v335;
  if (v16) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v580 = formElement.value;
  var v336 = JAM.call(v580.search, v580, [/\S/], JAM.policy.p17);
  var v17 = v336 == -1;
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
  var v337 = arrayOfPatterns.length;
  var v20 = z$$2 < v337;
  for (;v20;) {
    var v581 = arrayOfPatterns[z$$2];
    var v338 = JAM.call(v581.search, v581, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p17);
    var v18 = v338 == -1;
    if (v18) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v582 = arrayOfPatterns[z$$2];
    var v339 = moreExpressionCheck(v582);
    var v19 = v339 == false;
    if (v19) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v340 = arrayOfPatterns.length;
    v20 = z$$2 < v340;
  }
  var v21 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v21);
  var v22 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v22);
  var j = 0;
  var v341 = arrayOfPatterns.length;
  var v26 = j < v341;
  for (;v26;) {
    var v583 = arrayOfPatterns[j];
    var v342 = JAM.call(v583.match, v583, [/\/.+\//], JAM.policy.p17);
    var v23 = v342 + "gi";
    if (JAM.isEval(eval)) {
      var v1032 = eval("introspect(JAM.policy.pFull) { " + v23 + " }")
    } else {
      var v1032 = JAM.call(eval, null, [v23])
    }
    geneticCodeMatchExp[j] = v1032;
    var v343 = arrayOfPatterns[j];
    var v24 = JAM.call(v343.match, v343, [/=[a-zA-Z\*]/], JAM.policy.p17);
    var v1033 = v24.toString();
    geneticCodeMatchResult[j] = v1033;
    var v25 = geneticCodeMatchResult[j];
    var v1034 = JAM.call(v25.replace, v25, [/=/g, ""], JAM.policy.p15);
    geneticCodeMatchResult[j] = v1034;
    j++;
    var v344 = arrayOfPatterns.length;
    v26 = j < v344;
  }
  var i$$2 = 0;
  var v584 = testSequence.length;
  var v345 = v584 - 3;
  var v33 = i$$2 <= v345;
  for (;v33;) {
    var v27 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v27], JAM.policy.p15);
    j = 0;
    var v346 = geneticCodeMatchExp.length;
    var v31 = j < v346;
    for (;v31;) {
      var v585 = geneticCodeMatchExp[j];
      var v347 = JAM.call(codon.search, codon, [v585], JAM.policy.p18);
      var v30 = v347 != -1;
      if (v30) {
        var v29 = oneMatch == true;
        if (v29) {
          var v348 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v28 = v348 + ".";
          alert(v28);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v349 = geneticCodeMatchExp.length;
      v31 = j < v349;
    }
    var v32 = oneMatch == false;
    if (v32) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v586 = testSequence.length;
    var v350 = v586 - 3;
    v33 = i$$2 <= v350;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v351 = arrayOfPatterns$$1.length;
  var v35 = z$$3 < v351;
  for (;v35;) {
    var v587 = arrayOfPatterns$$1[z$$3];
    var v352 = JAM.call(v587.search, v587, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p17);
    var v34 = v352 != -1;
    if (v34) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v353 = arrayOfPatterns$$1.length;
    v35 = z$$3 < v353;
  }
  var i$$3 = 0;
  var v354 = arrayOfPatterns$$1.length;
  var v39 = i$$3 < v354;
  for (;v39;) {
    var v588 = arrayOfPatterns$$1[i$$3];
    var v355 = "[" + v588;
    var v36 = v355 + "]";
    var re = new RegExp(v36, "gi");
    var j$$1 = i$$3 + 1;
    var v356 = arrayOfPatterns$$1.length;
    var v38 = j$$1 < v356;
    for (;v38;) {
      var v589 = arrayOfPatterns$$1[j$$1];
      var v357 = JAM.call(v589.search, v589, [re], JAM.policy.p18);
      var v37 = v357 != -1;
      if (v37) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v358 = arrayOfPatterns$$1.length;
      v38 = j$$1 < v358;
    }
    i$$3++;
    var v359 = arrayOfPatterns$$1.length;
    v39 = i$$3 < v359;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v360 = arrayOfPatterns$$2.length;
  var v42 = z$$4 < v360;
  for (;v42;) {
    var v590 = arrayOfPatterns$$2[z$$4];
    var v361 = JAM.call(v590.search, v590, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p17);
    var v40 = v361 == -1;
    if (v40) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v591 = arrayOfPatterns$$2[z$$4];
    var v362 = moreExpressionCheck(v591);
    var v41 = v362 == false;
    if (v41) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v363 = arrayOfPatterns$$2.length;
    v42 = z$$4 < v363;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v711 = getSequenceFromFasta(text$$7);
  var v592 = JAM.call(v711.replace, v711, [/[^A-Za-z]/g, ""], JAM.policy.p15);
  var v364 = v592.length;
  var v44 = v364 > maxInput;
  if (v44) {
    var v365 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v43 = v365 + " characters.";
    alert(v43);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v366 = text$$8.length;
  var v46 = v366 > maxInput$$1;
  if (v46) {
    var v367 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v45 = v367 + " characters.";
    alert(v45);
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
  var v47 = outputWindow.document;
  JAM.call(v47.write, v47, ["</form>"], JAM.policy.p12);
  return true;
}
function closePre() {
  var v48 = outputWindow.document;
  JAM.call(v48.write, v48, ["</div>"], JAM.policy.p12);
  var v49 = outputWindow.document;
  JAM.call(v49.write, v49, ["</pre>\n"], JAM.policy.p12);
  return;
}
function closeTextArea() {
  var v50 = outputWindow.document;
  JAM.call(v50.write, v50, ["</textarea>"], JAM.policy.p12);
  return true;
}
function closeWindow() {
  var v51 = outputWindow.document;
  JAM.call(v51.write, v51, ["</body>\n</html>\n"], JAM.policy.p12);
  outputWindow.status = "Done.";
  var v52 = outputWindow.document;
  v52.close();
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
  var v368 = alignArray.length;
  var v53 = v368 < 3;
  if (v53) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v369 = alignArray.length;
  var v55 = i$$4 < v369;
  for (;v55;) {
    var v593 = alignArray[i$$4];
    var v370 = JAM.call(v593.search, v593, [/[^\s]+\s/], JAM.policy.p17);
    var v54 = v370 == -1;
    if (v54) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v371 = alignArray.length;
    v55 = i$$4 < v371;
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
  var v372 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p17);
  var v58 = v372 != -1;
  if (v58) {
    var v57 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p18);
    for (;v57;) {
      var v56 = matchArray[0];
      JAM.call(arrayOfFasta.push, arrayOfFasta, [v56], JAM.policy.p18);
      v57 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p18);
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v373 = sequence$$2.length;
  var v59 = "&gt;results for " + v373;
  var stringToReturn = v59 + " residue sequence ";
  var v374 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p17);
  var v61 = v374 != -1;
  if (v61) {
    var v375 = stringToReturn + '"';
    var v60 = v375 + fastaSequenceTitle;
    stringToReturn = v60 + '"';
  }
  var v376 = stringToReturn + ' starting "';
  var v377 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p13);
  var v62 = v376 + v377;
  stringToReturn = v62 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v378 = sequenceOne.length;
  var v63 = "Search results for " + v378;
  var stringToReturn$$1 = v63 + " residue sequence ";
  var v379 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p17);
  var v65 = v379 != -1;
  if (v65) {
    var v380 = stringToReturn$$1 + '"';
    var v64 = v380 + fastaSequenceTitleOne;
    stringToReturn$$1 = v64 + '"';
  }
  var v381 = stringToReturn$$1 + ' starting "';
  var v382 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p13);
  var v66 = v381 + v382;
  stringToReturn$$1 = v66 + '"\n';
  var v383 = stringToReturn$$1 + "and ";
  var v384 = sequenceTwo.length;
  var v67 = v383 + v384;
  stringToReturn$$1 = v67 + " residue sequence ";
  var v385 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p17);
  var v69 = v385 != -1;
  if (v69) {
    var v386 = stringToReturn$$1 + '"';
    var v68 = v386 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v68 + '"';
  }
  var v387 = stringToReturn$$1 + ' starting "';
  var v388 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p13);
  var v70 = v387 + v388;
  stringToReturn$$1 = v70 + '"';
  var v71 = '<div class="info">' + stringToReturn$$1;
  return v71 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v72 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v72);
  var j$$2 = 0;
  var v389 = arrayOfPatterns$$3.length;
  var v74 = j$$2 < v389;
  for (;v74;) {
    var v594 = arrayOfPatterns$$3[j$$2];
    var v390 = JAM.call(v594.match, v594, [/\/.+\//], JAM.policy.p17);
    var v73 = v390 + "gi";
    if (JAM.isEval(eval)) {
      var v1035 = eval("introspect(JAM.policy.pFull) { " + v73 + " }")
    } else {
      var v1035 = JAM.call(eval, null, [v73])
    }
    geneticCodeMatchExp$$1[j$$2] = v1035;
    j$$2++;
    var v391 = arrayOfPatterns$$3.length;
    v74 = j$$2 < v391;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v75 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v75);
  var j$$3 = 0;
  var v392 = arrayOfPatterns$$4.length;
  var v78 = j$$3 < v392;
  for (;v78;) {
    var v393 = arrayOfPatterns$$4[j$$3];
    var v76 = JAM.call(v393.match, v393, [/=[a-zA-Z\*]/], JAM.policy.p17);
    var v1036 = v76.toString();
    geneticCodeMatchResult$$1[j$$3] = v1036;
    var v77 = geneticCodeMatchResult$$1[j$$3];
    var v1037 = JAM.call(v77.replace, v77, [/=/g, ""], JAM.policy.p15);
    geneticCodeMatchResult$$1[j$$3] = v1037;
    j$$3++;
    var v394 = arrayOfPatterns$$4.length;
    v78 = j$$3 < v394;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v395 = sequence$$3.length;
  var v79 = "Results for " + v395;
  var stringToReturn$$2 = v79 + " residue sequence ";
  var v396 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p17);
  var v81 = v396 != -1;
  if (v81) {
    var v397 = stringToReturn$$2 + '"';
    var v80 = v397 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v80 + '"';
  }
  var v398 = stringToReturn$$2 + ' starting "';
  var v399 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p13);
  var v82 = v398 + v399;
  stringToReturn$$2 = v82 + '"';
  var v83 = '<div class="info">' + stringToReturn$$2;
  return v83 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v595 = "Results for " + topology;
  var v400 = v595 + " ";
  var v401 = sequence$$4.length;
  var v84 = v400 + v401;
  var stringToReturn$$3 = v84 + " residue sequence ";
  var v402 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p17);
  var v86 = v402 != -1;
  if (v86) {
    var v403 = stringToReturn$$3 + '"';
    var v85 = v403 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v85 + '"';
  }
  var v404 = stringToReturn$$3 + ' starting "';
  var v405 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p13);
  var v87 = v404 + v405;
  stringToReturn$$3 = v87 + '"';
  var v88 = '<div class="info">' + stringToReturn$$3;
  return v88 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v406 = sequenceOne$$1.length;
  var v89 = "Alignment results for " + v406;
  var stringToReturn$$4 = v89 + " residue sequence ";
  var v407 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p17);
  var v91 = v407 != -1;
  if (v91) {
    var v408 = stringToReturn$$4 + '"';
    var v90 = v408 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v90 + '"';
  }
  var v409 = stringToReturn$$4 + ' starting "';
  var v410 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p13);
  var v92 = v409 + v410;
  stringToReturn$$4 = v92 + '"\n';
  var v411 = stringToReturn$$4 + "and ";
  var v412 = sequenceTwo$$1.length;
  var v93 = v411 + v412;
  stringToReturn$$4 = v93 + " residue sequence ";
  var v413 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p17);
  var v95 = v413 != -1;
  if (v95) {
    var v414 = stringToReturn$$4 + '"';
    var v94 = v414 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v94 + '"';
  }
  var v415 = stringToReturn$$4 + ' starting "';
  var v416 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p13);
  var v96 = v415 + v416;
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
    var v417 = Math.random();
    var v418 = components.length;
    var v98 = v417 * v418;
    tempNum = JAM.call(Math.floor, Math, [v98], JAM.policy.p17);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p18);
    j$$4++;
    v99 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p12);
}
function getSequenceFromFasta(sequenceRecord) {
  var v419 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p17);
  var v100 = v419 != -1;
  if (v100) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p15);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v420 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p17);
  var v102 = v420 != -1;
  if (v102) {
    var v101 = JAM.call(sequenceRecord$$1.match, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p15);
    fastaTitle = v101.toString();
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\>|[\f\n\r]/g, ""], JAM.policy.p15);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\s{2,}/g, " "], JAM.policy.p15);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/[\<\>]/gi, ""], JAM.policy.p15);
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  var v1004 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p17);
  var v993 = v1004 != -1;
  var v1006 = !v993;
  if (v1006) {
    var v1005 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p17);
    v993 = v1005 != -1;
  }
  var v980 = v993;
  var v995 = !v980;
  if (v995) {
    var v994 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p17);
    v980 = v994 != -1;
  }
  var v965 = v980;
  var v982 = !v965;
  if (v982) {
    var v981 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p17);
    v965 = v981 != -1;
  }
  var v947 = v965;
  var v967 = !v947;
  if (v967) {
    var v966 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p17);
    v947 = v966 != -1;
  }
  var v913 = v947;
  var v949 = !v913;
  if (v949) {
    var v948 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p17);
    v913 = v948 != -1;
  }
  var v868 = v913;
  var v915 = !v868;
  if (v915) {
    var v914 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p17);
    v868 = v914 != -1;
  }
  var v798 = v868;
  var v870 = !v798;
  if (v870) {
    var v869 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p17);
    v798 = v869 != -1;
  }
  var v712 = v798;
  var v800 = !v712;
  if (v800) {
    var v799 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p17);
    v712 = v799 != -1;
  }
  var v596 = v712;
  var v714 = !v596;
  if (v714) {
    var v713 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p17);
    v596 = v713 != -1;
  }
  var v421 = v596;
  var v598 = !v421;
  if (v598) {
    var v597 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p17);
    v421 = v597 != -1;
  }
  var v103 = v421;
  if (v103) {
    return false;
  }
  return true;
}
function openForm() {
  var v104 = outputWindow.document;
  JAM.call(v104.write, v104, ['<form action="">\n'], JAM.policy.p12);
  return true;
}
function openPre() {
  var v105 = outputWindow.document;
  JAM.call(v105.write, v105, ["<pre>"], JAM.policy.p12);
  var v106 = outputWindow.document;
  JAM.call(v106.write, v106, ['<div class="pre">'], JAM.policy.p12);
  return;
}
function openTextArea() {
  var v107 = outputWindow.document;
  JAM.call(v107.write, v107, ['<br /><textarea rows="6" cols="61">\n'], JAM.policy.p12);
  return true;
}
function openWindow(title$$6) {
  _openWindow(title$$6, true);
  return;
}
function _openWindow(title$$7, isColor) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  outputWindow.focus();
  var v108 = outputWindow.document;
  var v715 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v599 = v715 + "<head>\n";
  var v422 = v599 + "<title>Sequence Manipulation Suite</title>\n";
  var v109 = v422 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v108.write, v108, [v109], JAM.policy.p18);
  if (isColor) {
    var v110 = outputWindow.document;
    var v1023 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1018 = v1023 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1013 = v1018 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1007 = v1013 + "div.info {font-weight: bold}\n";
    var v996 = v1007 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v983 = v996 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v968 = v983 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v950 = v968 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v916 = v950 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v871 = v916 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v801 = v871 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v716 = v801 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v600 = v716 + "td.many {color: #000000}\n";
    var v423 = v600 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v111 = v423 + "</style>\n";
    JAM.call(v110.write, v110, [v111], JAM.policy.p18);
  } else {
    var v112 = outputWindow.document;
    var v1028 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1024 = v1028 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1019 = v1024 + "div.title {display: none}\n";
    var v1014 = v1019 + "div.info {font-weight: bold}\n";
    var v1008 = v1014 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v997 = v1008 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v984 = v997 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v969 = v984 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v951 = v969 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v917 = v951 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v872 = v917 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v802 = v872 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v717 = v802 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v601 = v717 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v424 = v601 + "img {display: none}\n";
    var v113 = v424 + "</style>\n";
    JAM.call(v112.write, v112, [v113], JAM.policy.p18);
  }
  var v114 = outputWindow.document;
  var v718 = "</head>\n" + '<body class="main">\n';
  var v602 = v718 + '<div class="title">';
  var v425 = v602 + title$$7;
  var v115 = v425 + " results</div>\n";
  JAM.call(v114.write, v114, [v115], JAM.policy.p18);
  outputWindow.status = "Please Wait.";
  return true;
}
function openWindowAlign(title$$8) {
  _openWindowAlign(title$$8, true);
  return;
}
function _openWindowAlign(title$$9, isBackground) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  outputWindow.focus();
  var v116 = outputWindow.document;
  var v719 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v603 = v719 + "<head>\n";
  var v426 = v603 + "<title>Sequence Manipulation Suite</title>\n";
  var v117 = v426 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v116.write, v116, [v117], JAM.policy.p18);
  if (isBackground) {
    var v118 = outputWindow.document;
    var v1025 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1020 = v1025 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1015 = v1020 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1009 = v1015 + "div.info {font-weight: bold}\n";
    var v998 = v1009 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v985 = v998 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v970 = v985 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v952 = v970 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v918 = v952 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v873 = v918 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v803 = v873 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v720 = v803 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v604 = v720 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v427 = v604 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v119 = v427 + "</style>\n";
    JAM.call(v118.write, v118, [v119], JAM.policy.p18);
  } else {
    var v120 = outputWindow.document;
    var v1031 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1029 = v1031 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1026 = v1029 + "div.title {display: none}\n";
    var v1021 = v1026 + "div.info {font-weight: bold}\n";
    var v1016 = v1021 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1010 = v1016 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v999 = v1010 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v986 = v999 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v971 = v986 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v953 = v971 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v919 = v953 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v874 = v919 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v804 = v874 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v721 = v804 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v605 = v721 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v428 = v605 + "img {display: none}\n";
    var v121 = v428 + "</style>\n";
    JAM.call(v120.write, v120, [v121], JAM.policy.p18);
  }
  var v122 = outputWindow.document;
  var v722 = "</head>\n" + '<body class="main">\n';
  var v606 = v722 + '<div class="title">';
  var v429 = v606 + title$$9;
  var v123 = v429 + " results</div>\n";
  JAM.call(v122.write, v122, [v123], JAM.policy.p18);
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
function reverse(dnaSequence$$1) {
  var tempDnaArray = new Array;
  var v430 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p17);
  var v124 = v430 != -1;
  if (v124) {
    tempDnaArray = JAM.call(dnaSequence$$1.match, dnaSequence$$1, [/./g], JAM.policy.p17);
    tempDnaArray = tempDnaArray.reverse();
    dnaSequence$$1 = JAM.call(tempDnaArray.join, tempDnaArray, [""], JAM.policy.p12);
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
  JAM.call(testArray.push, testArray, [testString], JAM.policy.p18);
  var v431 = testArray[0];
  var v128 = v431 != testString;
  if (v128) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v432 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p18);
  var v129 = v432 == -1;
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
  testString = JAM.call(testString.replace, testString, [/(\d)/g, v1], JAM.policy.p15);
  var v131 = testString != "1X2X3X";
  if (v131) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false;
  }
  var testNum = 2489.8237;
  var v433 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p10);
  var v132 = v433 != 2489.824;
  if (v132) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v434 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p10);
  var v133 = v434 != 2489.8;
  if (v133) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v435 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p17);
  var v134 = v435 == -1;
  if (v134) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v805 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p17);
  var v723 = v805 == -1;
  var v807 = !v723;
  if (v807) {
    var v806 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p17);
    v723 = v806 == -1;
  }
  var v607 = v723;
  var v725 = !v607;
  if (v725) {
    var v724 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p17);
    v607 = v724 == -1;
  }
  var v436 = v607;
  var v609 = !v436;
  if (v609) {
    var v608 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p17);
    v436 = v608 == -1;
  }
  var v135 = v436;
  if (v135) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v437 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p17);
  var v136 = v437 == -1;
  if (v136) {
    alert("Please enter a number.");
    return false;
  }
  var v138 = theNumber$$2 > maxInput$$2;
  if (v138) {
    var v438 = "Please enter a number less than or equal to " + maxInput$$2;
    var v137 = v438 + ".";
    alert(v137);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v439 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p17);
  var v139 = v439 != -1;
  if (v139) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v440 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p17);
  var v140 = v440 != -1;
  if (v140) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v808 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p17);
  var v726 = v808 == -1;
  var v810 = !v726;
  if (v810) {
    var v809 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p17);
    v726 = v809 == -1;
  }
  var v610 = v726;
  var v728 = !v610;
  if (v728) {
    var v727 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p17);
    v610 = v727 == -1;
  }
  var v441 = v610;
  var v612 = !v441;
  if (v612) {
    var v611 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p17);
    v441 = v611 == -1;
  }
  var v141 = v441;
  if (v141) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v811 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p17);
  var v729 = v811 == -1;
  var v813 = !v729;
  if (v813) {
    var v812 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p17);
    v729 = v812 == -1;
  }
  var v613 = v729;
  var v731 = !v613;
  if (v731) {
    var v730 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p17);
    v613 = v730 == -1;
  }
  var v442 = v613;
  var v615 = !v442;
  if (v615) {
    var v614 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p17);
    v442 = v614 == -1;
  }
  var v142 = v442;
  if (v142) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v443 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p17);
  var v143 = v443 == -1;
  if (v143) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v814 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p17);
  var v732 = v814 == -1;
  var v816 = !v732;
  if (v816) {
    var v815 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p17);
    v732 = v815 == -1;
  }
  var v616 = v732;
  var v734 = !v616;
  if (v734) {
    var v733 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p17);
    v616 = v733 == -1;
  }
  var v444 = v616;
  var v618 = !v444;
  if (v618) {
    var v617 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p17);
    v444 = v617 == -1;
  }
  var v144 = v444;
  if (v144) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v445 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p17);
  var v145 = v445 == -1;
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
    var v446 = basePerLine / groupSize;
    var v149 = j$$6 <= v446;
    for (;v149;) {
      var v148 = k < groupSize;
      for (;v148;) {
        var v447 = k + i$$5;
        var v147 = JAM.call(text$$10.charAt, text$$10, [v447], JAM.policy.p18);
        lineOfText = lineOfText + v147;
        k = k + 1;
        v148 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v448 = basePerLine / groupSize;
      v149 = j$$6 <= v448;
    }
    var v150 = outputWindow.document;
    var v151 = lineOfText + "\n";
    JAM.call(v150.write, v150, [v151], JAM.policy.p18);
    lineOfText = "";
    v152 = i$$5 < stopBase;
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
    var v449 = adjustment < 0;
    if (v449) {
      v449 = adjusted >= 0;
    }
    var v153 = v449;
    if (v153) {
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
  var v186 = i$$6 < stopBase$$2;
  for (;v186;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v450 = basePerLine$$2 / groupSize$$2;
    var v162 = j$$7 <= v450;
    for (;v162;) {
      var v157 = k$$1 < groupSize$$2;
      for (;v157;) {
        var v451 = i$$6 + k$$1;
        var v154 = v451 >= stopBase$$2;
        if (v154) {
          break;
        }
        var v155 = lineOfText$$1;
        var v452 = k$$1 + i$$6;
        var v156 = JAM.call(text$$12.charAt, text$$12, [v452], JAM.policy.p18);
        lineOfText$$1 = v155 + v156;
        k$$1 = k$$1 + 1;
        v157 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v160 = numberPosition$$1 == "above";
      if (v160) {
        var v158 = aboveNum;
        var v453 = adjustNumbering(i$$6, numberingAdjustment);
        var v159 = rightNum(v453, "", groupSize$$2, tabIn$$3);
        aboveNum = v158 + v159;
      }
      var v161 = i$$6 >= stopBase$$2;
      if (v161) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v454 = basePerLine$$2 / groupSize$$2;
      v162 = j$$7 <= v454;
    }
    var v185 = numberPosition$$1 == "left";
    if (v185) {
      var v163 = outputWindow.document;
      var v735 = adjustNumbering(lineNum, numberingAdjustment);
      var v619 = rightNum(v735, "", 8, tabIn$$3);
      var v455 = v619 + lineOfText$$1;
      var v164 = v455 + "\n";
      JAM.call(v163.write, v163, [v164], JAM.policy.p18);
      var v168 = strands$$1 == "two";
      if (v168) {
        var v165 = outputWindow.document;
        var v736 = adjustNumbering(lineNum, numberingAdjustment);
        var v620 = rightNum(v736, "", 8, tabIn$$3);
        var v621 = complement(lineOfText$$1);
        var v456 = v620 + v621;
        var v166 = v456 + "\n";
        JAM.call(v165.write, v165, [v166], JAM.policy.p18);
        var v167 = outputWindow.document;
        JAM.call(v167.write, v167, ["\n"], JAM.policy.p12);
      }
    } else {
      var v184 = numberPosition$$1 == "right";
      if (v184) {
        var v169 = outputWindow.document;
        var v622 = lineOfText$$1;
        var v623 = adjustNumbering(i$$6, numberingAdjustment);
        var v457 = v622 + v623;
        var v170 = v457 + "\n";
        JAM.call(v169.write, v169, [v170], JAM.policy.p18);
        var v174 = strands$$1 == "two";
        if (v174) {
          var v171 = outputWindow.document;
          var v624 = complement(lineOfText$$1);
          var v625 = adjustNumbering(i$$6, numberingAdjustment);
          var v458 = v624 + v625;
          var v172 = v458 + "\n";
          JAM.call(v171.write, v171, [v172], JAM.policy.p18);
          var v173 = outputWindow.document;
          JAM.call(v173.write, v173, ["\n"], JAM.policy.p12);
        }
      } else {
        var v183 = numberPosition$$1 == "above";
        if (v183) {
          var v175 = outputWindow.document;
          var v176 = aboveNum + "\n";
          JAM.call(v175.write, v175, [v176], JAM.policy.p18);
          var v177 = outputWindow.document;
          var v178 = lineOfText$$1 + "\n";
          JAM.call(v177.write, v177, [v178], JAM.policy.p18);
          var v182 = strands$$1 == "two";
          if (v182) {
            var v179 = outputWindow.document;
            var v459 = complement(lineOfText$$1);
            var v180 = v459 + "\n";
            JAM.call(v179.write, v179, [v180], JAM.policy.p18);
            var v181 = outputWindow.document;
            JAM.call(v181.write, v181, ["\n"], JAM.policy.p12);
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v186 = i$$6 < stopBase$$2;
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
  var v205 = i$$7 < stopBase$$3;
  for (;v205;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v460 = basePerLine$$3 / groupSize$$3;
    var v193 = j$$8 <= v460;
    for (;v193;) {
      var v189 = k$$2 < groupSize$$3;
      for (;v189;) {
        var v461 = i$$7 + k$$2;
        var v187 = v461 >= stopBase$$3;
        if (v187) {
          break;
        }
        var v462 = k$$2 + i$$7;
        var v188 = JAM.call(text$$13.charAt, text$$13, [v462], JAM.policy.p18);
        lineOfText$$2 = lineOfText$$2 + v188;
        k$$2 = k$$2 + 1;
        v189 = k$$2 < groupSize$$3;
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v191 = numberPosition$$2 == "above";
      if (v191) {
        var v190 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = aboveNum$$1 + v190;
      }
      var v192 = i$$7 >= stopBase$$3;
      if (v192) {
        break;
      }
      k$$2 = 0;
      j$$8++;
      var v463 = basePerLine$$3 / groupSize$$3;
      v193 = j$$8 <= v463;
    }
    var v204 = numberPosition$$2 == "left";
    if (v204) {
      var v194 = outputWindow.document;
      var v626 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v464 = v626 + lineOfText$$2;
      var v195 = v464 + "\n";
      JAM.call(v194.write, v194, [v195], JAM.policy.p18);
    } else {
      var v203 = numberPosition$$2 == "right";
      if (v203) {
        var v196 = outputWindow.document;
        var v465 = lineOfText$$2 + i$$7;
        var v197 = v465 + "\n";
        JAM.call(v196.write, v196, [v197], JAM.policy.p18);
      } else {
        var v202 = numberPosition$$2 == "above";
        if (v202) {
          var v198 = outputWindow.document;
          var v199 = aboveNum$$1 + "\n";
          JAM.call(v198.write, v198, [v199], JAM.policy.p18);
          var v200 = outputWindow.document;
          var v201 = lineOfText$$2 + "\n";
          JAM.call(v200.write, v200, [v201], JAM.policy.p18);
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v205 = i$$7 < stopBase$$3;
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
  var v737 = sequence$$13.length;
  var v627 = v737 <= firstIndexToMutate;
  var v738 = !v627;
  if (v738) {
    v627 = lastIndexToMutate < 0;
  }
  var v466 = v627;
  var v628 = !v466;
  if (v628) {
    v466 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v206 = v466;
  if (v206) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v214 = i$$8 < numMut;
  for (;v214;) {
    maxNum = sequence$$13.length;
    var v467 = Math.random();
    var v207 = v467 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v207], JAM.policy.p17);
    var v468 = randNum < firstIndexToMutate;
    var v629 = !v468;
    if (v629) {
      v468 = randNum > lastIndexToMutate;
    }
    var v208 = v468;
    if (v208) {
      numMut++;
      i$$8++;
      v214 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p17);
    needNewChar = true;
    for (;needNewChar;) {
      var v469 = Math.random();
      var v470 = components$$1.length;
      var v209 = v469 * v470;
      componentsIndex = JAM.call(Math.round, Math, [v209], JAM.policy.p17);
      var v471 = components$$1.length;
      var v210 = componentsIndex == v471;
      if (v210) {
        componentsIndex = 0;
      }
      var v472 = components$$1[componentsIndex];
      var v211 = v472 != currentChar;
      if (v211) {
        needNewChar = false;
      }
    }
    var v473 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p13);
    var v474 = components$$1[componentsIndex];
    var v212 = v473 + v474;
    var v475 = randNum + 1;
    var v476 = sequence$$13.length;
    var v213 = JAM.call(sequence$$13.substring, sequence$$13, [v475, v476], JAM.policy.p27);
    sequence$$13 = v212 + v213;
    i$$8++;
    v214 = i$$8 < numMut;
  }
  var v215 = outputWindow.document;
  var v216 = addReturns(sequence$$13);
  JAM.call(v215.write, v215, [v216], JAM.policy.p18);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v221 = j$$9 < lengthOut$$1;
  for (;v221;) {
    var v477 = Math.random();
    var v478 = components$$2.length;
    var v217 = v477 * v478;
    tempNum$$1 = JAM.call(Math.floor, Math, [v217], JAM.policy.p17);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v479 = sequence$$14.length;
    var v220 = v479 == 60;
    if (v220) {
      var v218 = outputWindow.document;
      var v219 = sequence$$14 + "\n";
      JAM.call(v218.write, v218, [v219], JAM.policy.p18);
      sequence$$14 = "";
    }
    j$$9++;
    v221 = j$$9 < lengthOut$$1;
  }
  var v222 = outputWindow.document;
  var v223 = sequence$$14 + "\n";
  JAM.call(v222.write, v222, [v223], JAM.policy.p18);
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
  var v227 = dnaConformation == "circular";
  if (v227) {
    var v224 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    shiftValue = v224.length;
    var v739 = sequence$$15.length;
    var v630 = v739 - lookAhead;
    var v631 = sequence$$15.length;
    var v480 = JAM.call(sequence$$15.substring, sequence$$15, [v630, v631], JAM.policy.p27);
    var v225 = v480 + sequence$$15;
    var v226 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    sequence$$15 = v225 + v226;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v228 = outputWindow.document;
  JAM.call(v228.write, v228, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p12);
  var v229 = outputWindow.document;
  var v740 = '<tr><td class="title" width="200px">' + "Site:";
  var v632 = v740 + '</td><td class="title">';
  var v481 = v632 + "Positions:";
  var v230 = v481 + "</td></tr>\n";
  JAM.call(v229.write, v229, [v230], JAM.policy.p18);
  var i$$9 = 0;
  var v482 = arrayOfItems.length;
  var v246 = i$$9 < v482;
  for (;v246;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v483 = arrayOfItems[i$$9];
    var v231 = JAM.call(v483.match, v483, [/\/.+\//], JAM.policy.p17);
    matchExp = v231 + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    var v741 = arrayOfItems[i$$9];
    var v633 = JAM.call(v741.match, v741, [/\)\D*\d+/], JAM.policy.p17);
    var v484 = v633.toString();
    var v232 = JAM.call(v484.replace, v484, [/\)\D*/, ""], JAM.policy.p15);
    cutDistance = parseFloat(v232);
    var v238 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p18);
    for (;v238;) {
      var v233 = matchExp.lastIndex;
      matchPosition = v233 - cutDistance;
      var v485 = matchPosition >= lowerLimit;
      if (v485) {
        v485 = matchPosition < upperLimit;
      }
      var v236 = v485;
      if (v236) {
        timesFound++;
        var v234 = tempString$$1 + ", ";
        var v486 = matchPosition - shiftValue;
        var v235 = v486 + 1;
        tempString$$1 = v234 + v235;
      }
      var v487 = matchExp.lastIndex;
      var v634 = RegExp.lastMatch;
      var v488 = v634.length;
      var v237 = v487 - v488;
      matchExp.lastIndex = v237 + 1;
      v238 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p18);
    }
    var v489 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p17);
    var v239 = v489 != -1;
    if (v239) {
      tempString$$1 = JAM.call(tempString$$1.replace, tempString$$1, [/none,\s*/, ""], JAM.policy.p15);
    }
    var v243 = timesFound == 0;
    if (v243) {
      backGroundClass = "none";
    } else {
      var v242 = timesFound == 1;
      if (v242) {
        backGroundClass = "one";
      } else {
        var v241 = timesFound == 2;
        if (v241) {
          backGroundClass = "two";
        } else {
          var v240 = timesFound == 3;
          if (v240) {
            backGroundClass = "three";
          } else {
            backGroundClass = "many";
          }
        }
      }
    }
    var v244 = outputWindow.document;
    var v954 = '<tr><td class="' + backGroundClass;
    var v920 = v954 + '">';
    var v987 = arrayOfItems[i$$9];
    var v972 = JAM.call(v987.match, v987, [/\([^\(]+\)/], JAM.policy.p17);
    var v955 = v972.toString();
    var v921 = JAM.call(v955.replace, v955, [/\(|\)/g, ""], JAM.policy.p15);
    var v875 = v920 + v921;
    var v817 = v875 + '</td><td class="';
    var v742 = v817 + backGroundClass;
    var v635 = v742 + '">';
    var v490 = v635 + tempString$$1;
    var v245 = v490 + "</td></tr>\n";
    JAM.call(v244.write, v244, [v245], JAM.policy.p18);
    timesFound = 0;
    i$$9++;
    var v491 = arrayOfItems.length;
    v246 = i$$9 < v491;
  }
  var v247 = outputWindow.document;
  JAM.call(v247.write, v247, ["</tbody></table>\n"], JAM.policy.p12);
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v248 = outputWindow.document;
  JAM.call(v248.write, v248, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p12);
  var v249 = outputWindow.document;
  var v876 = '<tr><td class="title">' + "Pattern:";
  var v818 = v876 + '</td><td class="title">';
  var v743 = v818 + "Times found:";
  var v636 = v743 + '</td><td class="title">';
  var v492 = v636 + "Percentage:";
  var v250 = v492 + "</td></tr>\n";
  JAM.call(v249.write, v249, [v250], JAM.policy.p18);
  var i$$10 = 0;
  var v493 = arrayOfItems$$1.length;
  var v259 = i$$10 < v493;
  for (;v259;) {
    var tempNumber = 0;
    var v494 = arrayOfItems$$1[i$$10];
    var v251 = JAM.call(v494.match, v494, [/\/[^\/]+\//], JAM.policy.p17);
    var matchExp$$1 = v251 + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    var v495 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p18);
    var v253 = v495 != -1;
    if (v253) {
      var v252 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p18);
      tempNumber = v252.length;
    }
    var percentage = 0;
    var v637 = originalLength + 1;
    var v819 = arrayOfItems$$1[i$$10];
    var v744 = JAM.call(v819.match, v819, [/\d+/], JAM.policy.p17);
    var v638 = parseFloat(v744);
    var v496 = v637 - v638;
    var v256 = v496 > 0;
    if (v256) {
      var v254 = 100 * tempNumber;
      var v497 = originalLength + 1;
      var v745 = arrayOfItems$$1[i$$10];
      var v639 = JAM.call(v745.match, v745, [/\d+/], JAM.policy.p17);
      var v498 = parseFloat(v639);
      var v255 = v497 - v498;
      percentage = v254 / v255;
    }
    var v257 = outputWindow.document;
    var v988 = arrayOfItems$$1[i$$10];
    var v973 = JAM.call(v988.match, v988, [/\([^\(]+\)\b/], JAM.policy.p17);
    var v956 = v973.toString();
    var v922 = JAM.call(v956.replace, v956, [/\(|\)/g, ""], JAM.policy.p15);
    var v877 = "<tr><td>" + v922;
    var v820 = v877 + "</td><td>";
    var v746 = v820 + tempNumber;
    var v640 = v746 + "</td><td>";
    var v641 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p10);
    var v499 = v640 + v641;
    var v258 = v499 + "</td></tr>\n";
    JAM.call(v257.write, v257, [v258], JAM.policy.p18);
    i$$10++;
    var v500 = arrayOfItems$$1.length;
    v259 = i$$10 < v500;
  }
  var v260 = outputWindow.document;
  JAM.call(v260.write, v260, ["</tbody></table>\n"], JAM.policy.p12);
  return true;
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v501 = sequence$$17.length;
  var v267 = v501 > 0;
  for (;v267;) {
    maxNum$$1 = sequence$$17.length;
    var v502 = Math.random();
    var v261 = v502 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v261], JAM.policy.p17);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p17);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p13);
    var v262 = randNum$$1 + 1;
    var v263 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v262, v263], JAM.policy.p15);
    sequence$$17 = tempString1 + tempString2;
    var v503 = tempSeq.length;
    var v266 = v503 == 60;
    if (v266) {
      var v264 = outputWindow.document;
      var v265 = tempSeq + "\n";
      JAM.call(v264.write, v264, [v265], JAM.policy.p18);
      tempSeq = "";
    }
    var v504 = sequence$$17.length;
    v267 = v504 > 0;
  }
  var v268 = outputWindow.document;
  var v269 = tempSeq + "\n";
  JAM.call(v268.write, v268, [v269], JAM.policy.p18);
  return true;
}
function pcrProducts(theDocument) {
  JAM.startProfile('compute');

  var newDna = "";
  var maxInput$$3 = 2E5;
  var v505 = testScript();
  var v270 = v505 == false;
  if (v270) {
    return false;
  }
  var re$$3;
  var primers = new Array;
  var forwardMatches = new Array;
  var reverseMatches = new Array;
  var pcrProducts$$1 = new Array;
  var v1000 = theDocument.forms;
  var v989 = v1000[0];
  var v974 = v989.elements;
  var v957 = v974[0];
  var v923 = checkFormElement(v957);
  var v878 = v923 == false;
  var v925 = !v878;
  if (v925) {
    var v1011 = theDocument.forms;
    var v1001 = v1011[0];
    var v990 = v1001.elements;
    var v975 = v990[0];
    var v958 = v975.value;
    var v924 = checkSequenceLength(v958, maxInput$$3);
    v878 = v924 == false;
  }
  var v821 = v878;
  var v880 = !v821;
  if (v880) {
    var v991 = theDocument.forms;
    var v976 = v991[0];
    var v959 = v976.elements;
    var v926 = v959[1];
    var v879 = checkFormElement(v926);
    v821 = v879 == false;
  }
  var v747 = v821;
  var v823 = !v747;
  if (v823) {
    var v977 = theDocument.forms;
    var v960 = v977[0];
    var v927 = v960.elements;
    var v881 = v927[2];
    var v822 = checkFormElement(v881);
    v747 = v822 == false;
  }
  var v642 = v747;
  var v749 = !v642;
  if (v749) {
    var v961 = theDocument.forms;
    var v928 = v961[0];
    var v882 = v928.elements;
    var v824 = v882[3];
    var v748 = checkFormElement(v824);
    v642 = v748 == false;
  }
  var v506 = v642;
  var v644 = !v506;
  if (v644) {
    var v929 = theDocument.forms;
    var v883 = v929[0];
    var v825 = v883.elements;
    var v750 = v825[4];
    var v643 = checkFormElement(v750);
    v506 = v643 == false;
  }
  var v271 = v506;
  if (v271) {
    return false;
  }
  var v962 = theDocument.forms;
  var v930 = v962[0];
  var v884 = v930.elements;
  var v826 = v884[2];
  var v751 = v826.value;
  var v645 = JAM.call(v751.replace, v751, [/[^A-Za-z]/g, ""], JAM.policy.p15);
  var v507 = v645.length;
  var v272 = v507 < 10;
  if (v272) {
    alert("Please enter primer sequences that are at least 10 bases long.");
    return false;
  }
  var v963 = theDocument.forms;
  var v931 = v963[0];
  var v885 = v931.elements;
  var v827 = v885[4];
  var v752 = v827.value;
  var v646 = JAM.call(v752.replace, v752, [/[^A-Za-z]/g, ""], JAM.policy.p15);
  var v508 = v646.length;
  var v273 = v508 < 10;
  if (v273) {
    alert("Please enter primer sequences that are at least 10 bases long.");
    return false;
  }
  var v886 = theDocument.forms;
  var v828 = v886[0];
  var v753 = v828.elements;
  var v647 = v753[2];
  var v509 = v647.value;
  var v274 = JAM.call(v509.replace, v509, [/[^A-Za-z]/g, ""], JAM.policy.p15);
  var primerOne = convertDegenerates(v274);
  var v887 = theDocument.forms;
  var v829 = v887[0];
  var v754 = v829.elements;
  var v648 = v754[4];
  var v510 = v648.value;
  var v275 = JAM.call(v510.replace, v510, [/[^A-Za-z]/g, ""], JAM.policy.p15);
  var primerTwo = convertDegenerates(v275);
  try {
    var v511 = "/" + primerOne;
    var v276 = v511 + "/gi";
    if (JAM.isEval(eval)) {
      re$$3 = eval("introspect(JAM.policy.pFull) { " + v276 + " }");
    } else {
      re$$3 = JAM.call(eval, null, [v276]);
    }
    var testString$$1 = "teststring";
    testString$$1 = JAM.call(testString$$1.replace, testString$$1, [re$$3, ""], JAM.policy.p19);
  } catch (e$$5) {
    alert("The first primer sequence is not formatted correctly.");
    return false;
  }
  try {
    var v512 = "/" + primerTwo;
    var v277 = v512 + "/gi";
    if (JAM.isEval(eval)) {
      re$$3 = eval("introspect(JAM.policy.pFull) { " + v277 + " }");
    } else {
      re$$3 = JAM.call(eval, null, [v277]);
    }
    testString$$1 = "teststring";
    testString$$1 = JAM.call(testString$$1.replace, testString$$1, [re$$3, ""], JAM.policy.p19);
  } catch (e$$6) {
    alert("The second primer sequence is not formatted correctly.");
    return false;
  }
  var v755 = "/" + primerOne;
  var v649 = v755 + "/gi";
  if (JAM.isEval(eval)) {
    var v513 = eval("introspect(JAM.policy.pFull) { " + v649 + " }")
  } else {
    var v513 = JAM.call(eval, null, [v649])
  }
  var v888 = theDocument.forms;
  var v830 = v888[0];
  var v756 = v830.elements;
  var v650 = v756[1];
  var v514 = v650.value;
  var v278 = new Primer(v513, v514);
  JAM.call(primers.push, primers, [v278], JAM.policy.p18);
  var v757 = "/" + primerTwo;
  var v651 = v757 + "/gi";
  if (JAM.isEval(eval)) {
    var v515 = eval("introspect(JAM.policy.pFull) { " + v651 + " }")
  } else {
    var v515 = JAM.call(eval, null, [v651])
  }
  var v889 = theDocument.forms;
  var v831 = v889[0];
  var v758 = v831.elements;
  var v652 = v758[3];
  var v516 = v652.value;
  var v279 = new Primer(v515, v516);
  JAM.call(primers.push, primers, [v279], JAM.policy.p18);
  var v832 = theDocument.forms;
  var v759 = v832[0];
  var v653 = v759.elements;
  var v517 = v653[0];
  var v280 = v517.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v280);
  var i$$11 = 0;
  var v518 = arrayOfFasta$$1.length;
  var v287 = i$$11 < v518;
  for (;v287;) {
    var v281 = arrayOfFasta$$1[i$$11];
    newDna = getSequenceFromFasta(v281);
    var v282 = arrayOfFasta$$1[i$$11];
    title = getTitleFromFasta(v282);
    newDna = removeNonDna(newDna);
    var v932 = theDocument.forms;
    var v890 = v932[0];
    var v833 = v890.elements;
    var v760 = v833[8];
    var v654 = v760.options;
    var v933 = theDocument.forms;
    var v891 = v933[0];
    var v834 = v891.elements;
    var v761 = v834[8];
    var v655 = v761.selectedIndex;
    var v519 = v654[v655];
    var v283 = v519.value;
    forwardMatches = findMatches(primers, newDna, v283);
    var v520 = complement(newDna);
    var v284 = reverse(v520);
    var v934 = theDocument.forms;
    var v892 = v934[0];
    var v835 = v892.elements;
    var v762 = v835[8];
    var v656 = v762.options;
    var v935 = theDocument.forms;
    var v893 = v935[0];
    var v836 = v893.elements;
    var v763 = v836[8];
    var v657 = v763.selectedIndex;
    var v521 = v656[v657];
    var v285 = v521.value;
    reverseMatches = findMatches(primers, v284, v285);
    var v936 = theDocument.forms;
    var v894 = v936[0];
    var v837 = v894.elements;
    var v764 = v837[8];
    var v658 = v764.options;
    var v937 = theDocument.forms;
    var v895 = v937[0];
    var v838 = v895.elements;
    var v765 = v838[8];
    var v659 = v765.selectedIndex;
    var v522 = v658[v659];
    var v286 = v522.value;
    makePcrProducts(newDna, title, forwardMatches, reverseMatches, v286, pcrProducts$$1);
    i$$11++;
    var v523 = arrayOfFasta$$1.length;
    v287 = i$$11 < v523;
  }
  JAM.call(pcrProducts$$1.sort, pcrProducts$$1, [pcrProductSorter], JAM.policy.p18);
  openWindow("PCR Products");
  openPre();
  i$$11 = 0;
  var v524 = pcrProducts$$1.length;
  var v290 = i$$11 < v524;
  for (;v290;) {
    var v288 = pcrProducts$$1[i$$11];
    var v938 = theDocument.forms;
    var v896 = v938[0];
    var v839 = v896.elements;
    var v766 = v839[8];
    var v660 = v766.options;
    var v939 = theDocument.forms;
    var v897 = v939[0];
    var v840 = v897.elements;
    var v767 = v840[8];
    var v661 = v767.selectedIndex;
    var v525 = v660[v661];
    var v289 = v525.value;
    JAM.call(v288.writeProduct, v288, [v289], JAM.policy.p18);
    i$$11++;
    var v526 = pcrProducts$$1.length;
    v290 = i$$11 < v526;
  }
  var v527 = pcrProducts$$1.length;
  var v292 = v527 == 0;
  if (v292) {
    var v291 = outputWindow.document;
    JAM.call(v291.write, v291, ["No PCR products were obtained.\n\n"], JAM.policy.p12);
  }
  closePre();
  closeWindow();

  JAM.stopProfile('compute');
  return true;
}
function findMatches(primers$$1, sequence$$18, topology$$1) {
  var matchArray$$2;
  var matchPosition$$1;
  var arrayOfMatches = new Array;
  var re$$4;
  var originalLength$$1 = sequence$$18.length;
  var v309 = topology$$1 == "circular";
  if (v309) {
    var lookAhead$$1 = 50;
    var v293 = JAM.call(sequence$$18.substring, sequence$$18, [0, lookAhead$$1], JAM.policy.p13);
    var shiftValue$$1 = v293.length;
    var v294 = sequence$$18.length;
    var upperLimit$$1 = v294 + shiftValue$$1;
    var v768 = sequence$$18.length;
    var v662 = v768 - lookAhead$$1;
    var v663 = sequence$$18.length;
    var v528 = JAM.call(sequence$$18.substring, sequence$$18, [v662, v663], JAM.policy.p27);
    var v295 = v528 + sequence$$18;
    var v296 = JAM.call(sequence$$18.substring, sequence$$18, [0, lookAhead$$1], JAM.policy.p13);
    sequence$$18 = v295 + v296;
    var lowerLimit$$1 = 0 + shiftValue$$1;
    var i$$12 = 0;
    var v529 = primers$$1.length;
    var v303 = i$$12 < v529;
    for (;v303;) {
      var v297 = primers$$1[i$$12];
      re$$4 = v297.re;
      var v302 = matchArray$$2 = JAM.call(re$$4.exec, re$$4, [sequence$$18], JAM.policy.p18);
      for (;v302;) {
        matchPosition$$1 = re$$4.lastIndex;
        var v530 = matchPosition$$1 >= lowerLimit$$1;
        if (v530) {
          v530 = matchPosition$$1 < upperLimit$$1;
        }
        var v300 = v530;
        if (v300) {
          matchPosition$$1 = matchPosition$$1 - shiftValue$$1;
          var v298 = matchPosition$$1 == 0;
          if (v298) {
            matchPosition$$1 = originalLength$$1;
          }
          var v664 = primers$$1[i$$12];
          var v531 = v664.name;
          var v532 = matchArray$$2[0];
          var v299 = new Match(v531, v532, matchPosition$$1);
          JAM.call(arrayOfMatches.push, arrayOfMatches, [v299], JAM.policy.p18);
        }
        var v533 = re$$4.lastIndex;
        var v665 = RegExp.lastMatch;
        var v534 = v665.length;
        var v301 = v533 - v534;
        re$$4.lastIndex = v301 + 1;
        v302 = matchArray$$2 = JAM.call(re$$4.exec, re$$4, [sequence$$18], JAM.policy.p18);
      }
      i$$12++;
      var v535 = primers$$1.length;
      v303 = i$$12 < v535;
    }
  } else {
    i$$12 = 0;
    var v536 = primers$$1.length;
    var v308 = i$$12 < v536;
    for (;v308;) {
      var v304 = primers$$1[i$$12];
      re$$4 = v304.re;
      var v307 = matchArray$$2 = JAM.call(re$$4.exec, re$$4, [sequence$$18], JAM.policy.p18);
      for (;v307;) {
        matchPosition$$1 = re$$4.lastIndex;
        var v666 = primers$$1[i$$12];
        var v537 = v666.name;
        var v538 = matchArray$$2[0];
        var v305 = new Match(v537, v538, matchPosition$$1);
        JAM.call(arrayOfMatches.push, arrayOfMatches, [v305], JAM.policy.p18);
        var v539 = re$$4.lastIndex;
        var v667 = RegExp.lastMatch;
        var v540 = v667.length;
        var v306 = v539 - v540;
        re$$4.lastIndex = v306 + 1;
        v307 = matchArray$$2 = JAM.call(re$$4.exec, re$$4, [sequence$$18], JAM.policy.p18);
      }
      i$$12++;
      var v541 = primers$$1.length;
      v308 = i$$12 < v541;
    }
  }
  return arrayOfMatches;
}
function makePcrProducts(newDna$$1, title$$10, forwardMatches$$1, reverseMatches$$1, topology$$2, pcrProducts$$2) {
  var i$$13 = 0;
  var v542 = forwardMatches$$1.length;
  var v315 = i$$13 < v542;
  for (;v315;) {
    var j$$10 = 0;
    var v543 = reverseMatches$$1.length;
    var v314 = j$$10 < v543;
    for (;v314;) {
      var v769 = forwardMatches$$1[i$$13];
      var v668 = v769.positionAfter;
      var v841 = forwardMatches$$1[i$$13];
      var v770 = v841.matchingText;
      var v669 = v770.length;
      var v544 = v668 - v669;
      var v670 = newDna$$1.length;
      var v771 = reverseMatches$$1[j$$10];
      var v671 = v771.positionAfter;
      var v545 = v670 - v671;
      var v313 = v544 <= v545;
      if (v313) {
        var v842 = forwardMatches$$1[i$$13];
        var v772 = v842.positionAfter;
        var v898 = forwardMatches$$1[i$$13];
        var v843 = v898.matchingText;
        var v773 = v843.length;
        var v672 = v772 - v773;
        var v546 = v672 + 1;
        var v774 = newDna$$1.length;
        var v844 = reverseMatches$$1[j$$10];
        var v775 = v844.positionAfter;
        var v673 = v774 - v775;
        var v845 = reverseMatches$$1[j$$10];
        var v776 = v845.matchingText;
        var v674 = v776.length;
        var v547 = v673 + v674;
        var v675 = forwardMatches$$1[i$$13];
        var v548 = v675.primerName;
        var v676 = reverseMatches$$1[j$$10];
        var v549 = v676.primerName;
        var v677 = forwardMatches$$1[i$$13];
        var v550 = v677.name;
        var v678 = reverseMatches$$1[j$$10];
        var v551 = v678.name;
        var v846 = forwardMatches$$1[i$$13];
        var v777 = v846.positionAfter;
        var v899 = forwardMatches$$1[i$$13];
        var v847 = v899.matchingText;
        var v778 = v847.length;
        var v679 = v777 - v778;
        var v848 = newDna$$1.length;
        var v900 = reverseMatches$$1[j$$10];
        var v849 = v900.positionAfter;
        var v779 = v848 - v849;
        var v901 = reverseMatches$$1[j$$10];
        var v850 = v901.matchingText;
        var v780 = v850.length;
        var v680 = v779 + v780;
        var v552 = JAM.call(newDna$$1.substring, newDna$$1, [v679, v680], JAM.policy.p27);
        var v310 = new PcrProduct(title$$10, v546, v547, v548, v549, v550, v551, v552);
        JAM.call(pcrProducts$$2.push, pcrProducts$$2, [v310], JAM.policy.p18);
      } else {
        var v553 = topology$$2 == "circular";
        if (v553) {
          var v851 = forwardMatches$$1[i$$13];
          var v781 = v851.positionAfter;
          var v902 = forwardMatches$$1[i$$13];
          var v852 = v902.matchingText;
          var v782 = v852.length;
          var v681 = v781 - v782;
          var v903 = newDna$$1.length;
          var v940 = reverseMatches$$1[j$$10];
          var v904 = v940.positionAfter;
          var v853 = v903 - v904;
          var v941 = reverseMatches$$1[j$$10];
          var v905 = v941.matchingText;
          var v854 = v905.length;
          var v783 = v853 + v854;
          var v682 = v783 - 1;
          v553 = v681 > v682;
        }
        var v312 = v553;
        if (v312) {
          var v855 = forwardMatches$$1[i$$13];
          var v784 = v855.positionAfter;
          var v906 = forwardMatches$$1[i$$13];
          var v856 = v906.matchingText;
          var v785 = v856.length;
          var v683 = v784 - v785;
          var v554 = v683 + 1;
          var v786 = newDna$$1.length;
          var v857 = reverseMatches$$1[j$$10];
          var v787 = v857.positionAfter;
          var v684 = v786 - v787;
          var v858 = reverseMatches$$1[j$$10];
          var v788 = v858.matchingText;
          var v685 = v788.length;
          var v555 = v684 + v685;
          var v686 = forwardMatches$$1[i$$13];
          var v556 = v686.primerName;
          var v687 = reverseMatches$$1[j$$10];
          var v557 = v687.primerName;
          var v688 = forwardMatches$$1[i$$13];
          var v558 = v688.name;
          var v689 = reverseMatches$$1[j$$10];
          var v559 = v689.name;
          var v907 = forwardMatches$$1[i$$13];
          var v859 = v907.positionAfter;
          var v942 = forwardMatches$$1[i$$13];
          var v908 = v942.matchingText;
          var v860 = v908.length;
          var v789 = v859 - v860;
          var v790 = newDna$$1.length;
          var v690 = JAM.call(newDna$$1.substring, newDna$$1, [v789, v790], JAM.policy.p27);
          var v909 = newDna$$1.length;
          var v943 = reverseMatches$$1[j$$10];
          var v910 = v943.positionAfter;
          var v861 = v909 - v910;
          var v944 = reverseMatches$$1[j$$10];
          var v911 = v944.matchingText;
          var v862 = v911.length;
          var v791 = v861 + v862;
          var v691 = JAM.call(newDna$$1.substring, newDna$$1, [0, v791], JAM.policy.p13);
          var v560 = v690 + v691;
          var v311 = new PcrProduct(title$$10, v554, v555, v556, v557, v558, v559, v560);
          JAM.call(pcrProducts$$2.push, pcrProducts$$2, [v311], JAM.policy.p18);
        }
      }
      j$$10++;
      var v561 = reverseMatches$$1.length;
      v314 = j$$10 < v561;
    }
    i$$13++;
    var v562 = forwardMatches$$1.length;
    v315 = i$$13 < v562;
  }
  return;
}
function writeProduct(topology$$3) {
  var v316 = outputWindow.document;
  var v1030 = this.sequence;
  var v1027 = v1030.length;
  var v1022 = "&gt;" + v1027;
  var v1017 = v1022 + " bp product from ";
  var v1012 = v1017 + topology$$3;
  var v1002 = v1012 + " template ";
  var v1003 = this.template;
  var v992 = v1002 + v1003;
  var v978 = v992 + ", base ";
  var v979 = this.start;
  var v964 = v978 + v979;
  var v945 = v964 + " to base ";
  var v946 = this.stop;
  var v912 = v945 + v946;
  var v863 = v912 + " (";
  var v864 = this.forwardName;
  var v792 = v863 + v864;
  var v692 = v792 + " - ";
  var v693 = this.reverseName;
  var v563 = v692 + v693;
  var v317 = v563 + ").\n";
  JAM.call(v316.write, v316, [v317], JAM.policy.p18);
  var v318 = outputWindow.document;
  var v694 = this.sequence;
  var v564 = addReturns(v694);
  var v319 = v564 + "\n\n";
  JAM.call(v318.write, v318, [v319], JAM.policy.p18);
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
  var v695 = a.sequence;
  var v565 = v695.length;
  var v696 = b.sequence;
  var v566 = v696.length;
  var v320 = v565 < v566;
  if (v320) {
    return 1;
  }
  var v697 = a.sequence;
  var v567 = v697.length;
  var v698 = b.sequence;
  var v568 = v698.length;
  var v321 = v567 > v568;
  if (v321) {
    return-1;
  } else {
    return 0;
  }
  return;
}
new PcrProduct("", 0, 0, "", "", "", "", "");
var v322 = PcrProduct.prototype;
v322.writeProduct = writeProduct;
JAM.set(document, "onload", v2);
var v323 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p12);
JAM.set(v323, "onclick", v3);
var v324 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p12);
JAM.set(v324, "onclick", v4)

JAM.stopProfile('load');
