
JAM.startProfile('load');
function v5() {
  var v666 = document.forms;
  var v560 = v666[0];
  var v332 = v560.elements;
  var v6 = v332[0];
  v6.value = " ";
  var v667 = document.forms;
  var v561 = v667[0];
  var v333 = v561.elements;
  var v7 = v333[4];
  v7.value = " ";
  return;
}
function v4() {
  try {
    translate(document);
  } catch (e$$5) {
    var v8 = "The following error was encountered: " + e$$5;
    alert(v8);
  }
  return;
}
function v3() {
  var v334 = document.main_form;
  var v9 = v334.main_submit;
  v9.focus();
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
  var v10 = arrayOfSequences[0];
  var lengthOfAlign = v10.length;
  var v335 = arrayOfSequences.length;
  var v11 = v335 < 2;
  if (v11) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v336 = arrayOfTitles.length;
  var v13 = i$$1 < v336;
  for (;v13;) {
    var v744 = arrayOfTitles[i$$1];
    var v668 = JAM.call(v744.search, v744, [/\S/], JAM.policy.p17);
    var v562 = v668 == -1;
    var v670 = !v562;
    if (v670) {
      var v745 = arrayOfSequences[i$$1];
      var v669 = JAM.call(v745.search, v745, [/\S/], JAM.policy.p17);
      v562 = v669 == -1;
    }
    var v337 = v562;
    var v564 = !v337;
    if (v564) {
      var v671 = arrayOfSequences[i$$1];
      var v563 = v671.length;
      v337 = v563 != lengthOfAlign;
    }
    var v12 = v337;
    if (v12) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v338 = arrayOfTitles.length;
    v13 = i$$1 < v338;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v804 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p17);
  var v746 = v804 == -1;
  var v806 = !v746;
  if (v806) {
    var v805 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p17);
    v746 = v805 == -1;
  }
  var v672 = v746;
  var v748 = !v672;
  if (v748) {
    var v747 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p17);
    v672 = v747 == -1;
  }
  var v565 = v672;
  var v674 = !v565;
  if (v674) {
    var v673 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p17);
    v565 = v673 == -1;
  }
  var v339 = v565;
  var v567 = !v339;
  if (v567) {
    var v566 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p17);
    v339 = v566 == -1;
  }
  var v14 = v339;
  if (v14) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v568 = formElement.value;
  var v340 = JAM.call(v568.search, v568, [/\S/], JAM.policy.p17);
  var v15 = v340 == -1;
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
  var v341 = arrayOfPatterns.length;
  var v18 = z$$2 < v341;
  for (;v18;) {
    var v569 = arrayOfPatterns[z$$2];
    var v342 = JAM.call(v569.search, v569, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p17);
    var v16 = v342 == -1;
    if (v16) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v570 = arrayOfPatterns[z$$2];
    var v343 = moreExpressionCheck(v570);
    var v17 = v343 == false;
    if (v17) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v344 = arrayOfPatterns.length;
    v18 = z$$2 < v344;
  }
  var v19 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v19);
  var v20 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v20);
  var j = 0;
  var v345 = arrayOfPatterns.length;
  var v24 = j < v345;
  for (;v24;) {
    var v571 = arrayOfPatterns[j];
    var v346 = JAM.call(v571.match, v571, [/\/.+\//], JAM.policy.p17);
    var v21 = v346 + "gi";
    if (JAM.isEval(eval)) {
      var v1153 = eval("introspect(JAM.policy.pFull) { " + v21 + " }")
    } else {
      var v1153 = JAM.call(eval, null, [v21])
    }
    geneticCodeMatchExp[j] = v1153;
    var v347 = arrayOfPatterns[j];
    var v22 = JAM.call(v347.match, v347, [/=[a-zA-Z\*]/], JAM.policy.p17);
    var v1154 = v22.toString();
    geneticCodeMatchResult[j] = v1154;
    var v23 = geneticCodeMatchResult[j];
    var v1155 = JAM.call(v23.replace, v23, [/=/g, ""], JAM.policy.p16);
    geneticCodeMatchResult[j] = v1155;
    j++;
    var v348 = arrayOfPatterns.length;
    v24 = j < v348;
  }
  var i$$2 = 0;
  var v572 = testSequence.length;
  var v349 = v572 - 3;
  var v31 = i$$2 <= v349;
  for (;v31;) {
    var v25 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v25], JAM.policy.p16);
    j = 0;
    var v350 = geneticCodeMatchExp.length;
    var v29 = j < v350;
    for (;v29;) {
      var v573 = geneticCodeMatchExp[j];
      var v351 = JAM.call(codon.search, codon, [v573], JAM.policy.p15);
      var v28 = v351 != -1;
      if (v28) {
        var v27 = oneMatch == true;
        if (v27) {
          var v352 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v26 = v352 + ".";
          alert(v26);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v353 = geneticCodeMatchExp.length;
      v29 = j < v353;
    }
    var v30 = oneMatch == false;
    if (v30) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v574 = testSequence.length;
    var v354 = v574 - 3;
    v31 = i$$2 <= v354;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v355 = arrayOfPatterns$$1.length;
  var v33 = z$$3 < v355;
  for (;v33;) {
    var v575 = arrayOfPatterns$$1[z$$3];
    var v356 = JAM.call(v575.search, v575, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p17);
    var v32 = v356 != -1;
    if (v32) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v357 = arrayOfPatterns$$1.length;
    v33 = z$$3 < v357;
  }
  var i$$3 = 0;
  var v358 = arrayOfPatterns$$1.length;
  var v37 = i$$3 < v358;
  for (;v37;) {
    var v576 = arrayOfPatterns$$1[i$$3];
    var v359 = "[" + v576;
    var v34 = v359 + "]";
    var re = new RegExp(v34, "gi");
    var j$$1 = i$$3 + 1;
    var v360 = arrayOfPatterns$$1.length;
    var v36 = j$$1 < v360;
    for (;v36;) {
      var v577 = arrayOfPatterns$$1[j$$1];
      var v361 = JAM.call(v577.search, v577, [re], JAM.policy.p15);
      var v35 = v361 != -1;
      if (v35) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v362 = arrayOfPatterns$$1.length;
      v36 = j$$1 < v362;
    }
    i$$3++;
    var v363 = arrayOfPatterns$$1.length;
    v37 = i$$3 < v363;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v364 = arrayOfPatterns$$2.length;
  var v40 = z$$4 < v364;
  for (;v40;) {
    var v578 = arrayOfPatterns$$2[z$$4];
    var v365 = JAM.call(v578.search, v578, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p17);
    var v38 = v365 == -1;
    if (v38) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v579 = arrayOfPatterns$$2[z$$4];
    var v366 = moreExpressionCheck(v579);
    var v39 = v366 == false;
    if (v39) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v367 = arrayOfPatterns$$2.length;
    v40 = z$$4 < v367;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v675 = getSequenceFromFasta(text$$7);
  var v580 = JAM.call(v675.replace, v675, [/[^A-Za-z]/g, ""], JAM.policy.p16);
  var v368 = v580.length;
  var v42 = v368 > maxInput;
  if (v42) {
    var v369 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v41 = v369 + " characters.";
    alert(v41);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v370 = text$$8.length;
  var v44 = v370 > maxInput$$1;
  if (v44) {
    var v371 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v43 = v371 + " characters.";
    alert(v43);
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
  var v45 = outputWindow.document;
  JAM.call(v45.write, v45, ["</form>"], JAM.policy.p11);
  return true;
}
function closePre() {
  var v46 = outputWindow.document;
  JAM.call(v46.write, v46, ["</div>"], JAM.policy.p11);
  var v47 = outputWindow.document;
  JAM.call(v47.write, v47, ["</pre>\n"], JAM.policy.p11);
  return;
}
function closeTextArea() {
  var v48 = outputWindow.document;
  JAM.call(v48.write, v48, ["</textarea>"], JAM.policy.p11);
  return true;
}
function closeWindow() {
  var v49 = outputWindow.document;
  JAM.call(v49.write, v49, ["</body>\n</html>\n"], JAM.policy.p11);
  outputWindow.status = "Done.";
  var v50 = outputWindow.document;
  v50.close();
  return true;
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
  var v372 = alignArray.length;
  var v51 = v372 < 3;
  if (v51) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v373 = alignArray.length;
  var v53 = i$$4 < v373;
  for (;v53;) {
    var v581 = alignArray[i$$4];
    var v374 = JAM.call(v581.search, v581, [/[^\s]+\s/], JAM.policy.p17);
    var v52 = v374 == -1;
    if (v52) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v375 = alignArray.length;
    v53 = i$$4 < v375;
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
  var v376 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p17);
  var v56 = v376 != -1;
  if (v56) {
    var v55 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p15);
    for (;v55;) {
      var v54 = matchArray[0];
      JAM.call(arrayOfFasta.push, arrayOfFasta, [v54], JAM.policy.p15);
      v55 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p15);
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v377 = sequence$$2.length;
  var v57 = "&gt;results for " + v377;
  var stringToReturn = v57 + " residue sequence ";
  var v378 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p17);
  var v59 = v378 != -1;
  if (v59) {
    var v379 = stringToReturn + '"';
    var v58 = v379 + fastaSequenceTitle;
    stringToReturn = v58 + '"';
  }
  var v380 = stringToReturn + ' starting "';
  var v381 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p13);
  var v60 = v380 + v381;
  stringToReturn = v60 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v382 = sequenceOne.length;
  var v61 = "Search results for " + v382;
  var stringToReturn$$1 = v61 + " residue sequence ";
  var v383 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p17);
  var v63 = v383 != -1;
  if (v63) {
    var v384 = stringToReturn$$1 + '"';
    var v62 = v384 + fastaSequenceTitleOne;
    stringToReturn$$1 = v62 + '"';
  }
  var v385 = stringToReturn$$1 + ' starting "';
  var v386 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p13);
  var v64 = v385 + v386;
  stringToReturn$$1 = v64 + '"\n';
  var v387 = stringToReturn$$1 + "and ";
  var v388 = sequenceTwo.length;
  var v65 = v387 + v388;
  stringToReturn$$1 = v65 + " residue sequence ";
  var v389 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p17);
  var v67 = v389 != -1;
  if (v67) {
    var v390 = stringToReturn$$1 + '"';
    var v66 = v390 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v66 + '"';
  }
  var v391 = stringToReturn$$1 + ' starting "';
  var v392 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p13);
  var v68 = v391 + v392;
  stringToReturn$$1 = v68 + '"';
  var v69 = '<div class="info">' + stringToReturn$$1;
  return v69 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v70 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v70);
  var j$$2 = 0;
  var v393 = arrayOfPatterns$$3.length;
  var v72 = j$$2 < v393;
  for (;v72;) {
    var v582 = arrayOfPatterns$$3[j$$2];
    var v394 = JAM.call(v582.match, v582, [/\/.+\//], JAM.policy.p17);
    var v71 = v394 + "gi";
    if (JAM.isEval(eval)) {
      var v1156 = eval("introspect(JAM.policy.pFull) { " + v71 + " }")
    } else {
      var v1156 = JAM.call(eval, null, [v71])
    }
    geneticCodeMatchExp$$1[j$$2] = v1156;
    j$$2++;
    var v395 = arrayOfPatterns$$3.length;
    v72 = j$$2 < v395;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v73 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v73);
  var j$$3 = 0;
  var v396 = arrayOfPatterns$$4.length;
  var v76 = j$$3 < v396;
  for (;v76;) {
    var v397 = arrayOfPatterns$$4[j$$3];
    var v74 = JAM.call(v397.match, v397, [/=[a-zA-Z\*]/], JAM.policy.p17);
    var v1157 = v74.toString();
    geneticCodeMatchResult$$1[j$$3] = v1157;
    var v75 = geneticCodeMatchResult$$1[j$$3];
    var v1158 = JAM.call(v75.replace, v75, [/=/g, ""], JAM.policy.p16);
    geneticCodeMatchResult$$1[j$$3] = v1158;
    j$$3++;
    var v398 = arrayOfPatterns$$4.length;
    v76 = j$$3 < v398;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v399 = sequence$$3.length;
  var v77 = "Results for " + v399;
  var stringToReturn$$2 = v77 + " residue sequence ";
  var v400 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p17);
  var v79 = v400 != -1;
  if (v79) {
    var v401 = stringToReturn$$2 + '"';
    var v78 = v401 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v78 + '"';
  }
  var v402 = stringToReturn$$2 + ' starting "';
  var v403 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p13);
  var v80 = v402 + v403;
  stringToReturn$$2 = v80 + '"';
  var v81 = '<div class="info">' + stringToReturn$$2;
  return v81 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v583 = "Results for " + topology;
  var v404 = v583 + " ";
  var v405 = sequence$$4.length;
  var v82 = v404 + v405;
  var stringToReturn$$3 = v82 + " residue sequence ";
  var v406 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p17);
  var v84 = v406 != -1;
  if (v84) {
    var v407 = stringToReturn$$3 + '"';
    var v83 = v407 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v83 + '"';
  }
  var v408 = stringToReturn$$3 + ' starting "';
  var v409 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p13);
  var v85 = v408 + v409;
  stringToReturn$$3 = v85 + '"';
  var v86 = '<div class="info">' + stringToReturn$$3;
  return v86 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v410 = sequenceOne$$1.length;
  var v87 = "Alignment results for " + v410;
  var stringToReturn$$4 = v87 + " residue sequence ";
  var v411 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p17);
  var v89 = v411 != -1;
  if (v89) {
    var v412 = stringToReturn$$4 + '"';
    var v88 = v412 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v88 + '"';
  }
  var v413 = stringToReturn$$4 + ' starting "';
  var v414 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p13);
  var v90 = v413 + v414;
  stringToReturn$$4 = v90 + '"\n';
  var v415 = stringToReturn$$4 + "and ";
  var v416 = sequenceTwo$$1.length;
  var v91 = v415 + v416;
  stringToReturn$$4 = v91 + " residue sequence ";
  var v417 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p17);
  var v93 = v417 != -1;
  if (v93) {
    var v418 = stringToReturn$$4 + '"';
    var v92 = v418 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v92 + '"';
  }
  var v419 = stringToReturn$$4 + ' starting "';
  var v420 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p13);
  var v94 = v419 + v420;
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
    var v421 = Math.random();
    var v422 = components.length;
    var v96 = v421 * v422;
    tempNum = JAM.call(Math.floor, Math, [v96], JAM.policy.p17);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p15);
    j$$4++;
    v97 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p11);
}
function getSequenceFromFasta(sequenceRecord) {
  var v423 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p17);
  var v98 = v423 != -1;
  if (v98) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p16);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v424 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p17);
  var v100 = v424 != -1;
  if (v100) {
    var v99 = JAM.call(sequenceRecord$$1.match, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p16);
    fastaTitle = v99.toString();
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\>|[\f\n\r]/g, ""], JAM.policy.p16);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\s{2,}/g, " "], JAM.policy.p16);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/[\<\>]/gi, ""], JAM.policy.p16);
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  var v995 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p17);
  var v971 = v995 != -1;
  var v997 = !v971;
  if (v997) {
    var v996 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p17);
    v971 = v996 != -1;
  }
  var v945 = v971;
  var v973 = !v945;
  if (v973) {
    var v972 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p17);
    v945 = v972 != -1;
  }
  var v919 = v945;
  var v947 = !v919;
  if (v947) {
    var v946 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p17);
    v919 = v946 != -1;
  }
  var v887 = v919;
  var v921 = !v887;
  if (v921) {
    var v920 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p17);
    v887 = v920 != -1;
  }
  var v848 = v887;
  var v889 = !v848;
  if (v889) {
    var v888 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p17);
    v848 = v888 != -1;
  }
  var v807 = v848;
  var v850 = !v807;
  if (v850) {
    var v849 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p17);
    v807 = v849 != -1;
  }
  var v749 = v807;
  var v809 = !v749;
  if (v809) {
    var v808 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p17);
    v749 = v808 != -1;
  }
  var v676 = v749;
  var v751 = !v676;
  if (v751) {
    var v750 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p17);
    v676 = v750 != -1;
  }
  var v584 = v676;
  var v678 = !v584;
  if (v678) {
    var v677 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p17);
    v584 = v677 != -1;
  }
  var v425 = v584;
  var v586 = !v425;
  if (v586) {
    var v585 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p17);
    v425 = v585 != -1;
  }
  var v101 = v425;
  if (v101) {
    return false;
  }
  return true;
}
function openForm() {
  var v102 = outputWindow.document;
  JAM.call(v102.write, v102, ['<form action="">\n'], JAM.policy.p11);
  return true;
}
function openPre() {
  var v103 = outputWindow.document;
  JAM.call(v103.write, v103, ["<pre>"], JAM.policy.p11);
  var v104 = outputWindow.document;
  JAM.call(v104.write, v104, ['<div class="pre">'], JAM.policy.p11);
  return;
}
function openTextArea() {
  var v105 = outputWindow.document;
  JAM.call(v105.write, v105, ['<br /><textarea rows="6" cols="61">\n'], JAM.policy.p11);
  return true;
}
function openWindow(title$$5) {
  _openWindow(title$$5, true);
  return;
}
function _openWindow(title$$6, isColor) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  outputWindow.focus();
  var v106 = outputWindow.document;
  var v679 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v587 = v679 + "<head>\n";
  var v426 = v587 + "<title>Sequence Manipulation Suite</title>\n";
  var v107 = v426 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v106.write, v106, [v107], JAM.policy.p15);
  if (isColor) {
    var v108 = outputWindow.document;
    var v1061 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1040 = v1061 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1019 = v1040 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v998 = v1019 + "div.info {font-weight: bold}\n";
    var v974 = v998 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v948 = v974 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v922 = v948 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v890 = v922 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v851 = v890 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v810 = v851 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v752 = v810 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v680 = v752 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v588 = v680 + "td.many {color: #000000}\n";
    var v427 = v588 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v109 = v427 + "</style>\n";
    JAM.call(v108.write, v108, [v109], JAM.policy.p15);
  } else {
    var v110 = outputWindow.document;
    var v1082 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1062 = v1082 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1041 = v1062 + "div.title {display: none}\n";
    var v1020 = v1041 + "div.info {font-weight: bold}\n";
    var v999 = v1020 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v975 = v999 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v949 = v975 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v923 = v949 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v891 = v923 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v852 = v891 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v811 = v852 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v753 = v811 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v681 = v753 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v589 = v681 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v428 = v589 + "img {display: none}\n";
    var v111 = v428 + "</style>\n";
    JAM.call(v110.write, v110, [v111], JAM.policy.p15);
  }
  var v112 = outputWindow.document;
  var v682 = "</head>\n" + '<body class="main">\n';
  var v590 = v682 + '<div class="title">';
  var v429 = v590 + title$$6;
  var v113 = v429 + " results</div>\n";
  JAM.call(v112.write, v112, [v113], JAM.policy.p15);
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
  var v114 = outputWindow.document;
  var v683 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v591 = v683 + "<head>\n";
  var v430 = v591 + "<title>Sequence Manipulation Suite</title>\n";
  var v115 = v430 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v114.write, v114, [v115], JAM.policy.p15);
  if (isBackground) {
    var v116 = outputWindow.document;
    var v1063 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1042 = v1063 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1021 = v1042 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1000 = v1021 + "div.info {font-weight: bold}\n";
    var v976 = v1000 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v950 = v976 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v924 = v950 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v892 = v924 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v853 = v892 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v812 = v853 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v754 = v812 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v684 = v754 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v592 = v684 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v431 = v592 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v117 = v431 + "</style>\n";
    JAM.call(v116.write, v116, [v117], JAM.policy.p15);
  } else {
    var v118 = outputWindow.document;
    var v1101 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1083 = v1101 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1064 = v1083 + "div.title {display: none}\n";
    var v1043 = v1064 + "div.info {font-weight: bold}\n";
    var v1022 = v1043 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1001 = v1022 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v977 = v1001 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v951 = v977 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v925 = v951 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v893 = v925 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v854 = v893 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v813 = v854 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v755 = v813 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v685 = v755 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v593 = v685 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v432 = v593 + "img {display: none}\n";
    var v119 = v432 + "</style>\n";
    JAM.call(v118.write, v118, [v119], JAM.policy.p15);
  }
  var v120 = outputWindow.document;
  var v686 = "</head>\n" + '<body class="main">\n';
  var v594 = v686 + '<div class="title">';
  var v433 = v594 + title$$8;
  var v121 = v433 + " results</div>\n";
  JAM.call(v120.write, v120, [v121], JAM.policy.p15);
  outputWindow.status = "Please Wait.";
  return true;
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
  var v434 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p17);
  var v122 = v434 != -1;
  if (v122) {
    tempDnaArray = JAM.call(dnaSequence$$1.match, dnaSequence$$1, [/./g], JAM.policy.p17);
    tempDnaArray = tempDnaArray.reverse();
    dnaSequence$$1 = JAM.call(tempDnaArray.join, tempDnaArray, [""], JAM.policy.p11);
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
  JAM.call(testArray.push, testArray, [testString], JAM.policy.p15);
  var v435 = testArray[0];
  var v126 = v435 != testString;
  if (v126) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v436 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p15);
  var v127 = v436 == -1;
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
  testString = JAM.call(testString.replace, testString, [/(\d)/g, v1], JAM.policy.p16);
  var v129 = testString != "1X2X3X";
  if (v129) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false;
  }
  var testNum = 2489.8237;
  var v437 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p9);
  var v130 = v437 != 2489.824;
  if (v130) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v438 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p9);
  var v131 = v438 != 2489.8;
  if (v131) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v439 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p17);
  var v132 = v439 == -1;
  if (v132) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v756 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p17);
  var v687 = v756 == -1;
  var v758 = !v687;
  if (v758) {
    var v757 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p17);
    v687 = v757 == -1;
  }
  var v595 = v687;
  var v689 = !v595;
  if (v689) {
    var v688 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p17);
    v595 = v688 == -1;
  }
  var v440 = v595;
  var v597 = !v440;
  if (v597) {
    var v596 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p17);
    v440 = v596 == -1;
  }
  var v133 = v440;
  if (v133) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v441 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p17);
  var v134 = v441 == -1;
  if (v134) {
    alert("Please enter a number.");
    return false;
  }
  var v136 = theNumber$$2 > maxInput$$2;
  if (v136) {
    var v442 = "Please enter a number less than or equal to " + maxInput$$2;
    var v135 = v442 + ".";
    alert(v135);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v443 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p17);
  var v137 = v443 != -1;
  if (v137) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v444 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p17);
  var v138 = v444 != -1;
  if (v138) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v759 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p17);
  var v690 = v759 == -1;
  var v761 = !v690;
  if (v761) {
    var v760 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p17);
    v690 = v760 == -1;
  }
  var v598 = v690;
  var v692 = !v598;
  if (v692) {
    var v691 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p17);
    v598 = v691 == -1;
  }
  var v445 = v598;
  var v600 = !v445;
  if (v600) {
    var v599 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p17);
    v445 = v599 == -1;
  }
  var v139 = v445;
  if (v139) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v762 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p17);
  var v693 = v762 == -1;
  var v764 = !v693;
  if (v764) {
    var v763 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p17);
    v693 = v763 == -1;
  }
  var v601 = v693;
  var v695 = !v601;
  if (v695) {
    var v694 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p17);
    v601 = v694 == -1;
  }
  var v446 = v601;
  var v603 = !v446;
  if (v603) {
    var v602 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p17);
    v446 = v602 == -1;
  }
  var v140 = v446;
  if (v140) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v447 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p17);
  var v141 = v447 == -1;
  if (v141) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v765 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p17);
  var v696 = v765 == -1;
  var v767 = !v696;
  if (v767) {
    var v766 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p17);
    v696 = v766 == -1;
  }
  var v604 = v696;
  var v698 = !v604;
  if (v698) {
    var v697 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p17);
    v604 = v697 == -1;
  }
  var v448 = v604;
  var v606 = !v448;
  if (v606) {
    var v605 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p17);
    v448 = v605 == -1;
  }
  var v142 = v448;
  if (v142) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v449 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p17);
  var v143 = v449 == -1;
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
    var v450 = basePerLine / groupSize;
    var v147 = j$$6 <= v450;
    for (;v147;) {
      var v146 = k < groupSize;
      for (;v146;) {
        var v451 = k + i$$5;
        var v145 = JAM.call(text$$10.charAt, text$$10, [v451], JAM.policy.p15);
        lineOfText = lineOfText + v145;
        k = k + 1;
        v146 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v452 = basePerLine / groupSize;
      v147 = j$$6 <= v452;
    }
    var v148 = outputWindow.document;
    var v149 = lineOfText + "\n";
    JAM.call(v148.write, v148, [v149], JAM.policy.p15);
    lineOfText = "";
    v150 = i$$5 < stopBase;
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
    var v453 = adjustment < 0;
    if (v453) {
      v453 = adjusted >= 0;
    }
    var v151 = v453;
    if (v151) {
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
  var v184 = i$$6 < stopBase$$2;
  for (;v184;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v454 = basePerLine$$2 / groupSize$$2;
    var v160 = j$$7 <= v454;
    for (;v160;) {
      var v155 = k$$1 < groupSize$$2;
      for (;v155;) {
        var v455 = i$$6 + k$$1;
        var v152 = v455 >= stopBase$$2;
        if (v152) {
          break;
        }
        var v153 = lineOfText$$1;
        var v456 = k$$1 + i$$6;
        var v154 = JAM.call(text$$12.charAt, text$$12, [v456], JAM.policy.p15);
        lineOfText$$1 = v153 + v154;
        k$$1 = k$$1 + 1;
        v155 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v158 = numberPosition$$1 == "above";
      if (v158) {
        var v156 = aboveNum;
        var v457 = JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p19);
        var v157 = rightNum(v457, "", groupSize$$2, tabIn$$3);
        aboveNum = v156 + v157;
      }
      var v159 = i$$6 >= stopBase$$2;
      if (v159) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v458 = basePerLine$$2 / groupSize$$2;
      v160 = j$$7 <= v458;
    }
    var v183 = numberPosition$$1 == "left";
    if (v183) {
      var v161 = outputWindow.document;
      var v699 = JAM.call(adjustNumbering, null, [lineNum, numberingAdjustment], JAM.policy.p19);
      var v607 = rightNum(v699, "", 8, tabIn$$3);
      var v459 = v607 + lineOfText$$1;
      var v162 = v459 + "\n";
      JAM.call(v161.write, v161, [v162], JAM.policy.p15);
      var v166 = strands$$1 == "two";
      if (v166) {
        var v163 = outputWindow.document;
        var v700 = JAM.call(adjustNumbering, null, [lineNum, numberingAdjustment], JAM.policy.p19);
        var v608 = rightNum(v700, "", 8, tabIn$$3);
        var v609 = complement(lineOfText$$1);
        var v460 = v608 + v609;
        var v164 = v460 + "\n";
        JAM.call(v163.write, v163, [v164], JAM.policy.p15);
        var v165 = outputWindow.document;
        JAM.call(v165.write, v165, ["\n"], JAM.policy.p11);
      }
    } else {
      var v182 = numberPosition$$1 == "right";
      if (v182) {
        var v167 = outputWindow.document;
        var v610 = lineOfText$$1;
        var v611 = JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p19);
        var v461 = v610 + v611;
        var v168 = v461 + "\n";
        JAM.call(v167.write, v167, [v168], JAM.policy.p15);
        var v172 = strands$$1 == "two";
        if (v172) {
          var v169 = outputWindow.document;
          var v612 = complement(lineOfText$$1);
          var v613 = JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p19);
          var v462 = v612 + v613;
          var v170 = v462 + "\n";
          JAM.call(v169.write, v169, [v170], JAM.policy.p15);
          var v171 = outputWindow.document;
          JAM.call(v171.write, v171, ["\n"], JAM.policy.p11);
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
            var v463 = complement(lineOfText$$1);
            var v178 = v463 + "\n";
            JAM.call(v177.write, v177, [v178], JAM.policy.p15);
            var v179 = outputWindow.document;
            JAM.call(v179.write, v179, ["\n"], JAM.policy.p11);
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v184 = i$$6 < stopBase$$2;
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
  var v203 = i$$7 < stopBase$$3;
  for (;v203;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v464 = basePerLine$$3 / groupSize$$3;
    var v191 = j$$8 <= v464;
    for (;v191;) {
      var v187 = k$$2 < groupSize$$3;
      for (;v187;) {
        var v465 = i$$7 + k$$2;
        var v185 = v465 >= stopBase$$3;
        if (v185) {
          break;
        }
        var v466 = k$$2 + i$$7;
        var v186 = JAM.call(text$$13.charAt, text$$13, [v466], JAM.policy.p15);
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
      var v467 = basePerLine$$3 / groupSize$$3;
      v191 = j$$8 <= v467;
    }
    var v202 = numberPosition$$2 == "left";
    if (v202) {
      var v192 = outputWindow.document;
      var v614 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v468 = v614 + lineOfText$$2;
      var v193 = v468 + "\n";
      JAM.call(v192.write, v192, [v193], JAM.policy.p15);
    } else {
      var v201 = numberPosition$$2 == "right";
      if (v201) {
        var v194 = outputWindow.document;
        var v469 = lineOfText$$2 + i$$7;
        var v195 = v469 + "\n";
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
  var v701 = sequence$$13.length;
  var v615 = v701 <= firstIndexToMutate;
  var v702 = !v615;
  if (v702) {
    v615 = lastIndexToMutate < 0;
  }
  var v470 = v615;
  var v616 = !v470;
  if (v616) {
    v470 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v204 = v470;
  if (v204) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v212 = i$$8 < numMut;
  for (;v212;) {
    maxNum = sequence$$13.length;
    var v471 = Math.random();
    var v205 = v471 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v205], JAM.policy.p17);
    var v472 = randNum < firstIndexToMutate;
    var v617 = !v472;
    if (v617) {
      v472 = randNum > lastIndexToMutate;
    }
    var v206 = v472;
    if (v206) {
      numMut++;
      i$$8++;
      v212 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p17);
    needNewChar = true;
    for (;needNewChar;) {
      var v473 = Math.random();
      var v474 = components$$1.length;
      var v207 = v473 * v474;
      componentsIndex = JAM.call(Math.round, Math, [v207], JAM.policy.p17);
      var v475 = components$$1.length;
      var v208 = componentsIndex == v475;
      if (v208) {
        componentsIndex = 0;
      }
      var v476 = components$$1[componentsIndex];
      var v209 = v476 != currentChar;
      if (v209) {
        needNewChar = false;
      }
    }
    var v477 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p13);
    var v478 = components$$1[componentsIndex];
    var v210 = v477 + v478;
    var v479 = randNum + 1;
    var v480 = sequence$$13.length;
    var v211 = JAM.call(sequence$$13.substring, sequence$$13, [v479, v480], JAM.policy.p21);
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
    var v481 = Math.random();
    var v482 = components$$2.length;
    var v215 = v481 * v482;
    tempNum$$1 = JAM.call(Math.floor, Math, [v215], JAM.policy.p17);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v483 = sequence$$14.length;
    var v218 = v483 == 60;
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
    var v703 = sequence$$15.length;
    var v618 = v703 - lookAhead;
    var v619 = sequence$$15.length;
    var v484 = JAM.call(sequence$$15.substring, sequence$$15, [v618, v619], JAM.policy.p21);
    var v223 = v484 + sequence$$15;
    var v224 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    sequence$$15 = v223 + v224;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v226 = outputWindow.document;
  JAM.call(v226.write, v226, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p11);
  var v227 = outputWindow.document;
  var v704 = '<tr><td class="title" width="200px">' + "Site:";
  var v620 = v704 + '</td><td class="title">';
  var v485 = v620 + "Positions:";
  var v228 = v485 + "</td></tr>\n";
  JAM.call(v227.write, v227, [v228], JAM.policy.p15);
  var i$$9 = 0;
  var v486 = arrayOfItems.length;
  var v244 = i$$9 < v486;
  for (;v244;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v487 = arrayOfItems[i$$9];
    var v229 = JAM.call(v487.match, v487, [/\/.+\//], JAM.policy.p17);
    matchExp = v229 + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    var v705 = arrayOfItems[i$$9];
    var v621 = JAM.call(v705.match, v705, [/\)\D*\d+/], JAM.policy.p17);
    var v488 = v621.toString();
    var v230 = JAM.call(v488.replace, v488, [/\)\D*/, ""], JAM.policy.p16);
    cutDistance = parseFloat(v230);
    var v236 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p15);
    for (;v236;) {
      var v231 = matchExp.lastIndex;
      matchPosition = v231 - cutDistance;
      var v489 = matchPosition >= lowerLimit;
      if (v489) {
        v489 = matchPosition < upperLimit;
      }
      var v234 = v489;
      if (v234) {
        timesFound++;
        var v232 = tempString$$1 + ", ";
        var v490 = matchPosition - shiftValue;
        var v233 = v490 + 1;
        tempString$$1 = v232 + v233;
      }
      var v491 = matchExp.lastIndex;
      var v622 = RegExp.lastMatch;
      var v492 = v622.length;
      var v235 = v491 - v492;
      matchExp.lastIndex = v235 + 1;
      v236 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p15);
    }
    var v493 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p17);
    var v237 = v493 != -1;
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
    var v894 = '<tr><td class="' + backGroundClass;
    var v855 = v894 + '">';
    var v952 = arrayOfItems[i$$9];
    var v926 = JAM.call(v952.match, v952, [/\([^\(]+\)/], JAM.policy.p17);
    var v895 = v926.toString();
    var v856 = JAM.call(v895.replace, v895, [/\(|\)/g, ""], JAM.policy.p16);
    var v814 = v855 + v856;
    var v768 = v814 + '</td><td class="';
    var v706 = v768 + backGroundClass;
    var v623 = v706 + '">';
    var v494 = v623 + tempString$$1;
    var v243 = v494 + "</td></tr>\n";
    JAM.call(v242.write, v242, [v243], JAM.policy.p15);
    timesFound = 0;
    i$$9++;
    var v495 = arrayOfItems.length;
    v244 = i$$9 < v495;
  }
  var v245 = outputWindow.document;
  JAM.call(v245.write, v245, ["</tbody></table>\n"], JAM.policy.p11);
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v246 = outputWindow.document;
  JAM.call(v246.write, v246, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p11);
  var v247 = outputWindow.document;
  var v815 = '<tr><td class="title">' + "Pattern:";
  var v769 = v815 + '</td><td class="title">';
  var v707 = v769 + "Times found:";
  var v624 = v707 + '</td><td class="title">';
  var v496 = v624 + "Percentage:";
  var v248 = v496 + "</td></tr>\n";
  JAM.call(v247.write, v247, [v248], JAM.policy.p15);
  var i$$10 = 0;
  var v497 = arrayOfItems$$1.length;
  var v257 = i$$10 < v497;
  for (;v257;) {
    var tempNumber = 0;
    var v498 = arrayOfItems$$1[i$$10];
    var v249 = JAM.call(v498.match, v498, [/\/[^\/]+\//], JAM.policy.p17);
    var matchExp$$1 = v249 + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    var v499 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p15);
    var v251 = v499 != -1;
    if (v251) {
      var v250 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p15);
      tempNumber = v250.length;
    }
    var percentage = 0;
    var v625 = originalLength + 1;
    var v770 = arrayOfItems$$1[i$$10];
    var v708 = JAM.call(v770.match, v770, [/\d+/], JAM.policy.p17);
    var v626 = parseFloat(v708);
    var v500 = v625 - v626;
    var v254 = v500 > 0;
    if (v254) {
      var v252 = 100 * tempNumber;
      var v501 = originalLength + 1;
      var v709 = arrayOfItems$$1[i$$10];
      var v627 = JAM.call(v709.match, v709, [/\d+/], JAM.policy.p17);
      var v502 = parseFloat(v627);
      var v253 = v501 - v502;
      percentage = v252 / v253;
    }
    var v255 = outputWindow.document;
    var v953 = arrayOfItems$$1[i$$10];
    var v927 = JAM.call(v953.match, v953, [/\([^\(]+\)\b/], JAM.policy.p17);
    var v896 = v927.toString();
    var v857 = JAM.call(v896.replace, v896, [/\(|\)/g, ""], JAM.policy.p16);
    var v816 = "<tr><td>" + v857;
    var v771 = v816 + "</td><td>";
    var v710 = v771 + tempNumber;
    var v628 = v710 + "</td><td>";
    var v629 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p9);
    var v503 = v628 + v629;
    var v256 = v503 + "</td></tr>\n";
    JAM.call(v255.write, v255, [v256], JAM.policy.p15);
    i$$10++;
    var v504 = arrayOfItems$$1.length;
    v257 = i$$10 < v504;
  }
  var v258 = outputWindow.document;
  JAM.call(v258.write, v258, ["</tbody></table>\n"], JAM.policy.p11);
  return true;
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v505 = sequence$$17.length;
  var v265 = v505 > 0;
  for (;v265;) {
    maxNum$$1 = sequence$$17.length;
    var v506 = Math.random();
    var v259 = v506 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v259], JAM.policy.p17);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p17);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p13);
    var v260 = randNum$$1 + 1;
    var v261 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v260, v261], JAM.policy.p16);
    sequence$$17 = tempString1 + tempString2;
    var v507 = tempSeq.length;
    var v264 = v507 == 60;
    if (v264) {
      var v262 = outputWindow.document;
      var v263 = tempSeq + "\n";
      JAM.call(v262.write, v262, [v263], JAM.policy.p15);
      tempSeq = "";
    }
    var v508 = sequence$$17.length;
    v265 = v508 > 0;
  }
  var v266 = outputWindow.document;
  var v267 = tempSeq + "\n";
  JAM.call(v266.write, v266, [v267], JAM.policy.p15);
  return true;
}
function getGeneticCodeString(type$$25) {
  var v630 = type$$25.toLowerCase();
  var v509 = v630 == "standard";
  var v632 = !v509;
  if (v632) {
    var v631 = type$$25.toLowerCase();
    v509 = v631 == "transl_table=1";
  }
  var v269 = v509;
  if (v269) {
    var v1136 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1119 = v1136 + "/ga[tcuy]/=D,";
    var v1102 = v1119 + "/ga[agr]/=E,";
    var v1084 = v1102 + "/[tu][tu][tcuy]/=F,";
    var v1065 = v1084 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1044 = v1065 + "/ca[tcuy]/=H,";
    var v1023 = v1044 + "/a[tu][atcuwmhy]/=I,";
    var v1002 = v1023 + "/aa[agr]/=K,";
    var v978 = v1002 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v954 = v978 + "/a[tu]g/=M,";
    var v928 = v954 + "/aa[tucy]/=N,";
    var v897 = v928 + "/cc[acgturyswkmbdhvn]/=P,";
    var v858 = v897 + "/ca[agr]/=Q,";
    var v817 = v858 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v772 = v817 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v711 = v772 + "/ac[acgturyswkmbdhvn]/=T,";
    var v633 = v711 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v510 = v633 + "/[tu]gg/=W,";
    var v268 = v510 + "/[tu]a[ctuy]/=Y,";
    return v268 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*";
  }
  var v511 = type$$25.toLowerCase();
  var v271 = v511 == "transl_table=2";
  if (v271) {
    var v1137 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1120 = v1137 + "/ga[tcuy]/=D,";
    var v1103 = v1120 + "/ga[agr]/=E,";
    var v1085 = v1103 + "/[tu][tu][tcuy]/=F,";
    var v1066 = v1085 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1045 = v1066 + "/ca[tcuy]/=H,";
    var v1024 = v1045 + "/a[tu][tcuy]/=I,";
    var v1003 = v1024 + "/aa[agr]/=K,";
    var v979 = v1003 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v955 = v979 + "/a[tu][agr]/=M,";
    var v929 = v955 + "/aa[tucy]/=N,";
    var v898 = v929 + "/cc[acgturyswkmbdhvn]/=P,";
    var v859 = v898 + "/ca[agr]/=Q,";
    var v818 = v859 + "/cg[acgturyswkmbdhvn]/=R,";
    var v773 = v818 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v712 = v773 + "/ac[acgturyswkmbdhvn]/=T,";
    var v634 = v712 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v512 = v634 + "/[tu]g[agr]/=W,";
    var v270 = v512 + "/[tu]a[ctuy]/=Y,";
    return v270 + "/[tu]a[agr]|ag[agr]/=*";
  }
  var v513 = type$$25.toLowerCase();
  var v273 = v513 == "transl_table=3";
  if (v273) {
    var v1138 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1121 = v1138 + "/ga[tcuy]/=D,";
    var v1104 = v1121 + "/ga[agr]/=E,";
    var v1086 = v1104 + "/[tu][tu][tcuy]/=F,";
    var v1067 = v1086 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1046 = v1067 + "/ca[tcuy]/=H,";
    var v1025 = v1046 + "/a[tu][tcuy]/=I,";
    var v1004 = v1025 + "/aa[agr]/=K,";
    var v980 = v1004 + "/[tu][tu][agr]/=L,";
    var v956 = v980 + "/a[tu][agr]/=M,";
    var v930 = v956 + "/aa[tucy]/=N,";
    var v899 = v930 + "/cc[acgturyswkmbdhvn]/=P,";
    var v860 = v899 + "/ca[agr]/=Q,";
    var v819 = v860 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v774 = v819 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v713 = v774 + "/ac[acgturyswkmbdhvn]|c[tu][acgturyswkmbdhvn]/=T,";
    var v635 = v713 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v514 = v635 + "/[tu]g[agr]/=W,";
    var v272 = v514 + "/[tu]a[ctuy]/=Y,";
    return v272 + "/[tu]a[agr]/=*";
  }
  var v515 = type$$25.toLowerCase();
  var v275 = v515 == "transl_table=4";
  if (v275) {
    var v1139 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1122 = v1139 + "/ga[tcuy]/=D,";
    var v1105 = v1122 + "/ga[agr]/=E,";
    var v1087 = v1105 + "/[tu][tu][tcuy]/=F,";
    var v1068 = v1087 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1047 = v1068 + "/ca[tcuy]/=H,";
    var v1026 = v1047 + "/a[tu][atcuwmhy]/=I,";
    var v1005 = v1026 + "/aa[agr]/=K,";
    var v981 = v1005 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v957 = v981 + "/a[tu]g/=M,";
    var v931 = v957 + "/aa[tucy]/=N,";
    var v900 = v931 + "/cc[acgturyswkmbdhvn]/=P,";
    var v861 = v900 + "/ca[agr]/=Q,";
    var v820 = v861 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v775 = v820 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v714 = v775 + "/ac[acgturyswkmbdhvn]/=T,";
    var v636 = v714 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v516 = v636 + "/[tu]g[agr]/=W,";
    var v274 = v516 + "/[tu]a[ctuy]/=Y,";
    return v274 + "/[tu]a[agr]/=*";
  }
  var v517 = type$$25.toLowerCase();
  var v277 = v517 == "transl_table=5";
  if (v277) {
    var v1140 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1123 = v1140 + "/ga[tcuy]/=D,";
    var v1106 = v1123 + "/ga[agr]/=E,";
    var v1088 = v1106 + "/[tu][tu][tcuy]/=F,";
    var v1069 = v1088 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1048 = v1069 + "/ca[tcuy]/=H,";
    var v1027 = v1048 + "/a[tu][tcuy]/=I,";
    var v1006 = v1027 + "/aa[agr]/=K,";
    var v982 = v1006 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v958 = v982 + "/a[tu][agr]/=M,";
    var v932 = v958 + "/aa[tucy]/=N,";
    var v901 = v932 + "/cc[acgturyswkmbdhvn]/=P,";
    var v862 = v901 + "/ca[agr]/=Q,";
    var v821 = v862 + "/cg[acgturyswkmbdhvn]/=R,";
    var v776 = v821 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v715 = v776 + "/ac[acgturyswkmbdhvn]/=T,";
    var v637 = v715 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v518 = v637 + "/[tu]g[agr]/=W,";
    var v276 = v518 + "/[tu]a[ctuy]/=Y,";
    return v276 + "/[tu]a[agr]/=*";
  }
  var v519 = type$$25.toLowerCase();
  var v279 = v519 == "transl_table=6";
  if (v279) {
    var v1141 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1124 = v1141 + "/ga[tcuy]/=D,";
    var v1107 = v1124 + "/ga[agr]/=E,";
    var v1089 = v1107 + "/[tu][tu][tcuy]/=F,";
    var v1070 = v1089 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1049 = v1070 + "/ca[tcuy]/=H,";
    var v1028 = v1049 + "/a[tu][atcuwmhy]/=I,";
    var v1007 = v1028 + "/aa[agr]/=K,";
    var v983 = v1007 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v959 = v983 + "/a[tu]g/=M,";
    var v933 = v959 + "/aa[tucy]/=N,";
    var v902 = v933 + "/cc[acgturyswkmbdhvn]/=P,";
    var v863 = v902 + "/ca[agr]|[tu]a[agr]|[tcuy]a[agr]/=Q,";
    var v822 = v863 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v777 = v822 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v716 = v777 + "/ac[acgturyswkmbdhvn]/=T,";
    var v638 = v716 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v520 = v638 + "/[tu]gg/=W,";
    var v278 = v520 + "/[tu]a[ctuy]/=Y,";
    return v278 + "/[tu]ga/=*";
  }
  var v521 = type$$25.toLowerCase();
  var v281 = v521 == "transl_table=9";
  if (v281) {
    var v1142 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1125 = v1142 + "/ga[tcuy]/=D,";
    var v1108 = v1125 + "/ga[agr]/=E,";
    var v1090 = v1108 + "/[tu][tu][tcuy]/=F,";
    var v1071 = v1090 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1050 = v1071 + "/ca[tcuy]/=H,";
    var v1029 = v1050 + "/a[tu][atcuwmhy]/=I,";
    var v1008 = v1029 + "/aag/=K,";
    var v984 = v1008 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v960 = v984 + "/a[tu]g/=M,";
    var v934 = v960 + "/aa[atcuwmhy]/=N,";
    var v903 = v934 + "/cc[acgturyswkmbdhvn]/=P,";
    var v864 = v903 + "/ca[agr]/=Q,";
    var v823 = v864 + "/cg[acgturyswkmbdhvn]/=R,";
    var v778 = v823 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v717 = v778 + "/ac[acgturyswkmbdhvn]/=T,";
    var v639 = v717 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v522 = v639 + "/[tu]g[agr]/=W,";
    var v280 = v522 + "/[tu]a[ctuy]/=Y,";
    return v280 + "/[tu]a[agr]/=*";
  }
  var v523 = type$$25.toLowerCase();
  var v283 = v523 == "transl_table=10";
  if (v283) {
    var v1143 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[atcuwmhy]/=C,";
    var v1126 = v1143 + "/ga[tcuy]/=D,";
    var v1109 = v1126 + "/ga[agr]/=E,";
    var v1091 = v1109 + "/[tu][tu][tcuy]/=F,";
    var v1072 = v1091 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1051 = v1072 + "/ca[tcuy]/=H,";
    var v1030 = v1051 + "/a[tu][atcuwmhy]/=I,";
    var v1009 = v1030 + "/aa[agr]/=K,";
    var v985 = v1009 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v961 = v985 + "/a[tu]g/=M,";
    var v935 = v961 + "/aa[tucy]/=N,";
    var v904 = v935 + "/cc[acgturyswkmbdhvn]/=P,";
    var v865 = v904 + "/ca[agr]/=Q,";
    var v824 = v865 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v779 = v824 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v718 = v779 + "/ac[acgturyswkmbdhvn]/=T,";
    var v640 = v718 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v524 = v640 + "/[tu]gg/=W,";
    var v282 = v524 + "/[tu]a[ctuy]/=Y,";
    return v282 + "/[tu]a[agr]/=*";
  }
  var v525 = type$$25.toLowerCase();
  var v285 = v525 == "transl_table=11";
  if (v285) {
    var v1144 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1127 = v1144 + "/ga[tcuy]/=D,";
    var v1110 = v1127 + "/ga[agr]/=E,";
    var v1092 = v1110 + "/[tu][tu][tcuy]/=F,";
    var v1073 = v1092 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1052 = v1073 + "/ca[tcuy]/=H,";
    var v1031 = v1052 + "/a[tu][atcuwmhy]/=I,";
    var v1010 = v1031 + "/aa[agr]/=K,";
    var v986 = v1010 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v962 = v986 + "/a[tu]g/=M,";
    var v936 = v962 + "/aa[tucy]/=N,";
    var v905 = v936 + "/cc[acgturyswkmbdhvn]/=P,";
    var v866 = v905 + "/ca[agr]/=Q,";
    var v825 = v866 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v780 = v825 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v719 = v780 + "/ac[acgturyswkmbdhvn]/=T,";
    var v641 = v719 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v526 = v641 + "/[tu]gg/=W,";
    var v284 = v526 + "/[tu]a[ctuy]/=Y,";
    return v284 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*";
  }
  var v527 = type$$25.toLowerCase();
  var v287 = v527 == "transl_table=12";
  if (v287) {
    var v1145 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1128 = v1145 + "/ga[tcuy]/=D,";
    var v1111 = v1128 + "/ga[agr]/=E,";
    var v1093 = v1111 + "/[tu][tu][tcuy]/=F,";
    var v1074 = v1093 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1053 = v1074 + "/ca[tcuy]/=H,";
    var v1032 = v1053 + "/a[tu][atcuwmhy]/=I,";
    var v1011 = v1032 + "/aa[agr]/=K,";
    var v987 = v1011 + "/c[tu][atcuwmhy]|[tu][tu][agr]|[ctuy][tu]a/=L,";
    var v963 = v987 + "/a[tu]g/=M,";
    var v937 = v963 + "/aa[tucy]/=N,";
    var v906 = v937 + "/cc[acgturyswkmbdhvn]/=P,";
    var v867 = v906 + "/ca[agr]/=Q,";
    var v826 = v867 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v781 = v826 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]|c[tu]g/=S,";
    var v720 = v781 + "/ac[acgturyswkmbdhvn]/=T,";
    var v642 = v720 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v528 = v642 + "/[tu]gg/=W,";
    var v286 = v528 + "/[tu]a[ctuy]/=Y,";
    return v286 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*";
  }
  var v529 = type$$25.toLowerCase();
  var v289 = v529 == "transl_table=13";
  if (v289) {
    var v1146 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1129 = v1146 + "/ga[tcuy]/=D,";
    var v1112 = v1129 + "/ga[agr]/=E,";
    var v1094 = v1112 + "/[tu][tu][tcuy]/=F,";
    var v1075 = v1094 + "/gg[acgturyswkmbdhvn]|ag[agr]|[agr]g[agr]/=G,";
    var v1054 = v1075 + "/ca[tcuy]/=H,";
    var v1033 = v1054 + "/a[tu][tcuy]/=I,";
    var v1012 = v1033 + "/aa[agr]/=K,";
    var v988 = v1012 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v964 = v988 + "/a[tu][agr]/=M,";
    var v938 = v964 + "/aa[tucy]/=N,";
    var v907 = v938 + "/cc[acgturyswkmbdhvn]/=P,";
    var v868 = v907 + "/ca[agr]/=Q,";
    var v827 = v868 + "/cg[acgturyswkmbdhvn]/=R,";
    var v782 = v827 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v721 = v782 + "/ac[acgturyswkmbdhvn]/=T,";
    var v643 = v721 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v530 = v643 + "/[tu]g[agr]/=W,";
    var v288 = v530 + "/[tu]a[ctuy]/=Y,";
    return v288 + "/[tu]a[agr]/=*";
  }
  var v531 = type$$25.toLowerCase();
  var v291 = v531 == "transl_table=14";
  if (v291) {
    var v1147 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1130 = v1147 + "/ga[tcuy]/=D,";
    var v1113 = v1130 + "/ga[agr]/=E,";
    var v1095 = v1113 + "/[tu][tu][tcuy]/=F,";
    var v1076 = v1095 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1055 = v1076 + "/ca[tcuy]/=H,";
    var v1034 = v1055 + "/a[tu][atcuwmhy]/=I,";
    var v1013 = v1034 + "/aag/=K,";
    var v989 = v1013 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v965 = v989 + "/a[tu]g/=M,";
    var v939 = v965 + "/aa[atcuwmhy]/=N,";
    var v908 = v939 + "/cc[acgturyswkmbdhvn]/=P,";
    var v869 = v908 + "/ca[agr]/=Q,";
    var v828 = v869 + "/cg[acgturyswkmbdhvn]/=R,";
    var v783 = v828 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v722 = v783 + "/ac[acgturyswkmbdhvn]/=T,";
    var v644 = v722 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v532 = v644 + "/[tu]g[agr]/=W,";
    var v290 = v532 + "/[tu]a[atcuwmhy]/=Y,";
    return v290 + "/[tu]ag/=*";
  }
  var v533 = type$$25.toLowerCase();
  var v293 = v533 == "transl_table=15";
  if (v293) {
    var v1148 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1131 = v1148 + "/ga[tcuy]/=D,";
    var v1114 = v1131 + "/ga[agr]/=E,";
    var v1096 = v1114 + "/[tu][tu][tcuy]/=F,";
    var v1077 = v1096 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1056 = v1077 + "/ca[tcuy]/=H,";
    var v1035 = v1056 + "/a[tu][atcuwmhy]/=I,";
    var v1014 = v1035 + "/aa[agr]/=K,";
    var v990 = v1014 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v966 = v990 + "/a[tu]g/=M,";
    var v940 = v966 + "/aa[tucy]/=N,";
    var v909 = v940 + "/cc[acgturyswkmbdhvn]/=P,";
    var v870 = v909 + "/ca[agr]|[tu]ag|[tcuy]ag/=Q,";
    var v829 = v870 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v784 = v829 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v723 = v784 + "/ac[acgturyswkmbdhvn]/=T,";
    var v645 = v723 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v534 = v645 + "/[tu]gg/=W,";
    var v292 = v534 + "/[tu]a[ctuy]/=Y,";
    return v292 + "/[tu][agr]a/=*";
  }
  var v535 = type$$25.toLowerCase();
  var v295 = v535 == "transl_table=16";
  if (v295) {
    var v1149 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1132 = v1149 + "/ga[tcuy]/=D,";
    var v1115 = v1132 + "/ga[agr]/=E,";
    var v1097 = v1115 + "/[tu][tu][tcuy]/=F,";
    var v1078 = v1097 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1057 = v1078 + "/ca[tcuy]/=H,";
    var v1036 = v1057 + "/a[tu][atcuwmhy]/=I,";
    var v1015 = v1036 + "/aa[agr]/=K,";
    var v991 = v1015 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]|[tu]ag|[tu][atuw]g/=L,";
    var v967 = v991 + "/a[tu]g/=M,";
    var v941 = v967 + "/aa[tucy]/=N,";
    var v910 = v941 + "/cc[acgturyswkmbdhvn]/=P,";
    var v871 = v910 + "/ca[agr]/=Q,";
    var v830 = v871 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v785 = v830 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v724 = v785 + "/ac[acgturyswkmbdhvn]/=T,";
    var v646 = v724 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v536 = v646 + "/[tu]gg/=W,";
    var v294 = v536 + "/[tu]a[ctuy]/=Y,";
    return v294 + "/[tu][agr]a/=*";
  }
  var v537 = type$$25.toLowerCase();
  var v297 = v537 == "transl_table=21";
  if (v297) {
    var v1150 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1133 = v1150 + "/ga[tcuy]/=D,";
    var v1116 = v1133 + "/ga[agr]/=E,";
    var v1098 = v1116 + "/[tu][tu][tcuy]/=F,";
    var v1079 = v1098 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1058 = v1079 + "/ca[tcuy]/=H,";
    var v1037 = v1058 + "/a[tu][tcuy]/=I,";
    var v1016 = v1037 + "/aag/=K,";
    var v992 = v1016 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v968 = v992 + "/a[tu][agr]/=M,";
    var v942 = v968 + "/aa[atcuwmhy]/=N,";
    var v911 = v942 + "/cc[acgturyswkmbdhvn]/=P,";
    var v872 = v911 + "/ca[agr]/=Q,";
    var v831 = v872 + "/cg[acgturyswkmbdhvn]/=R,";
    var v786 = v831 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v725 = v786 + "/ac[acgturyswkmbdhvn]/=T,";
    var v647 = v725 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v538 = v647 + "/[tu]g[agr]/=W,";
    var v296 = v538 + "/[tu]a[ctuy]/=Y,";
    return v296 + "/[tu]a[agr]/=*";
  }
  var v539 = type$$25.toLowerCase();
  var v299 = v539 == "transl_table=22";
  if (v299) {
    var v1151 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1134 = v1151 + "/ga[tcuy]/=D,";
    var v1117 = v1134 + "/ga[agr]/=E,";
    var v1099 = v1117 + "/[tu][tu][tcuy]/=F,";
    var v1080 = v1099 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1059 = v1080 + "/ca[tcuy]/=H,";
    var v1038 = v1059 + "/a[tu][atcuwmhy]/=I,";
    var v1017 = v1038 + "/aa[agr]/=K,";
    var v993 = v1017 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]|[tu]ag|[tu][atuw]g/=L,";
    var v969 = v993 + "/a[tu]g/=M,";
    var v943 = v969 + "/aa[tucy]/=N,";
    var v912 = v943 + "/cc[acgturyswkmbdhvn]/=P,";
    var v873 = v912 + "/ca[agr]/=Q,";
    var v832 = v873 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v787 = v832 + "/[tu]c[cgtyskb]|ag[ct]/=S,";
    var v726 = v787 + "/ac[acgturyswkmbdhvn]/=T,";
    var v648 = v726 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v540 = v648 + "/[tu]gg/=W,";
    var v298 = v540 + "/[tu]a[ctuy]/=Y,";
    return v298 + "/[tu][agcrsmv]a/=*";
  }
  var v541 = type$$25.toLowerCase();
  var v301 = v541 == "transl_table=23";
  if (v301) {
    var v1152 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1135 = v1152 + "/ga[tcuy]/=D,";
    var v1118 = v1135 + "/ga[agr]/=E,";
    var v1100 = v1118 + "/[tu][tu][tcuy]/=F,";
    var v1081 = v1100 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1060 = v1081 + "/ca[tcuy]/=H,";
    var v1039 = v1060 + "/a[tu][atcuwmhy]/=I,";
    var v1018 = v1039 + "/aa[agr]/=K,";
    var v994 = v1018 + "/c[tu][acgturyswkmbdhvn]|[ctuy][tu]g/=L,";
    var v970 = v994 + "/a[tu]g/=M,";
    var v944 = v970 + "/aa[tucy]/=N,";
    var v913 = v944 + "/cc[acgturyswkmbdhvn]/=P,";
    var v874 = v913 + "/ca[agr]/=Q,";
    var v833 = v874 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v788 = v833 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v727 = v788 + "/ac[acgturyswkmbdhvn]/=T,";
    var v649 = v727 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v542 = v649 + "/[tu]gg/=W,";
    var v300 = v542 + "/[tu]a[ctuy]/=Y,";
    return v300 + "/[tu]a[agr]|[tu]ga|[tu][agtrwkd]a/=*";
  }
  return true;
}
function translateDna(theDocument) {
  translate(theDocument);
  return true;
}
function translate(theDocument$$1) {
  JAM.startProfile('compute');

  var newDna = "";
  var title$$9 = "";
  var maxInput$$3 = 2E5;
  var v543 = testScript();
  var v302 = v543 == false;
  if (v302) {
    return false;
  }
  var v875 = theDocument$$1.forms;
  var v834 = v875[0];
  var v789 = v834.elements;
  var v728 = v789[6];
  var v650 = v728.options;
  var v876 = theDocument$$1.forms;
  var v835 = v876[0];
  var v790 = v835.elements;
  var v729 = v790[6];
  var v651 = v729.selectedIndex;
  var v544 = v650[v651];
  var v303 = v544.value;
  var geneticCode = getGeneticCodeString(v303);
  var v877 = theDocument$$1.forms;
  var v836 = v877[0];
  var v791 = v836.elements;
  var v730 = v791[0];
  var v652 = checkFormElement(v730);
  var v545 = v652 == false;
  var v654 = !v545;
  if (v654) {
    var v914 = theDocument$$1.forms;
    var v878 = v914[0];
    var v837 = v878.elements;
    var v792 = v837[0];
    var v731 = v792.value;
    var v653 = JAM.call(checkSequenceLength, null, [v731, maxInput$$3], JAM.policy.p19);
    v545 = v653 == false;
  }
  var v304 = v545;
  if (v304) {
    return false;
  }
  geneticCode = JAM.call(geneticCode.split, geneticCode, [/,/], JAM.policy.p17);
  var v546 = checkGeneticCode(geneticCode);
  var v305 = v546 == false;
  if (v305) {
    return false;
  }
  var v838 = theDocument$$1.forms;
  var v793 = v838[0];
  var v732 = v793.elements;
  var v655 = v732[4];
  var v547 = v655.options;
  var v839 = theDocument$$1.forms;
  var v794 = v839[0];
  var v733 = v794.elements;
  var v656 = v733[4];
  var v548 = v656.selectedIndex;
  var v306 = v547[v548];
  var rfText = v306.value;
  var v915 = theDocument$$1.forms;
  var v879 = v915[0];
  var v840 = v879.elements;
  var v795 = v840[4];
  var v734 = v795.options;
  var v916 = theDocument$$1.forms;
  var v880 = v916[0];
  var v841 = v880.elements;
  var v796 = v841[4];
  var v735 = v796.selectedIndex;
  var v657 = v734[v735];
  var v549 = v657.value;
  var v308 = JAM.call(v549.match, v549, [/^\d+$/], JAM.policy.p17);
  if (v308) {
    rfText++;
  } else {
    var v917 = theDocument$$1.forms;
    var v881 = v917[0];
    var v842 = v881.elements;
    var v797 = v842[4];
    var v736 = v797.options;
    var v918 = theDocument$$1.forms;
    var v882 = v918[0];
    var v843 = v882.elements;
    var v798 = v843[4];
    var v737 = v798.selectedIndex;
    var v658 = v736[v737];
    var v550 = v658.value;
    var v307 = '"' + v550;
    rfText = v307 + '"';
  }
  openWindow("Translate");
  openPre();
  var v799 = theDocument$$1.forms;
  var v738 = v799[0];
  var v659 = v738.elements;
  var v551 = v659[0];
  var v309 = v551.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v309);
  var i$$11 = 0;
  var v552 = arrayOfFasta$$1.length;
  var v317 = i$$11 < v552;
  for (;v317;) {
    var v310 = arrayOfFasta$$1[i$$11];
    newDna = getSequenceFromFasta(v310);
    var v311 = arrayOfFasta$$1[i$$11];
    title$$9 = getTitleFromFasta(v311);
    newDna = removeNonDna(newDna);
    var v312 = outputWindow.document;
    var v739 = "&gt;rf " + rfText;
    var v660 = v739 + " ";
    var v553 = v660 + title$$9;
    var v313 = v553 + "\n";
    JAM.call(v312.write, v312, [v313], JAM.policy.p15);
    var v883 = theDocument$$1.forms;
    var v844 = v883[0];
    var v800 = v844.elements;
    var v740 = v800[4];
    var v661 = v740.options;
    var v884 = theDocument$$1.forms;
    var v845 = v884[0];
    var v801 = v845.elements;
    var v741 = v801[4];
    var v662 = v741.selectedIndex;
    var v554 = v661[v662];
    var v314 = v554.value;
    var v885 = theDocument$$1.forms;
    var v846 = v885[0];
    var v802 = v846.elements;
    var v742 = v802[5];
    var v663 = v742.options;
    var v886 = theDocument$$1.forms;
    var v847 = v886[0];
    var v803 = v847.elements;
    var v743 = v803[5];
    var v664 = v743.selectedIndex;
    var v555 = v663[v664];
    var v315 = v555.value;
    JAM.call(writeTranslation, null, [newDna, geneticCode, v314, v315], JAM.policy.p19);
    var v316 = outputWindow.document;
    JAM.call(v316.write, v316, ["\n\n"], JAM.policy.p11);
    i$$11++;
    var v556 = arrayOfFasta$$1.length;
    v317 = i$$11 < v556;
  }
  closePre();
  closeWindow();

  JAM.stopProfile('compute');
  return true;
}
function writeTranslation(dnaSequence$$3, geneticCode$$1, startPos, strand) {
  function v2(str$$8, p1$$2, offset$$10, s$$4) {
    var v318 = " " + p1$$2;
    return v318 + " ";
  }
  var geneticCodeMatchExp$$2 = getGeneticCodeMatchExp(geneticCode$$1);
  var geneticCodeMatchResult$$2 = getGeneticCodeMatchResult(geneticCode$$1);
  var v320 = strand == "reverse";
  if (v320) {
    var v319 = complement(dnaSequence$$3);
    dnaSequence$$3 = reverse(v319);
  }
  var v323 = startPos == "uppercase";
  if (v323) {
    dnaSequence$$3 = JAM.call(dnaSequence$$3.replace, dnaSequence$$3, [/[a-z]/g, ""], JAM.policy.p16);
  } else {
    var v321 = parseInt(startPos);
    var v322 = dnaSequence$$3.length;
    dnaSequence$$3 = JAM.call(dnaSequence$$3.substring, dnaSequence$$3, [v321, v322], JAM.policy.p16);
  }
  var v665 = JAM.call(dnaSequence$$3.replace, dnaSequence$$3, [/[^A-Za-z]/g, ""], JAM.policy.p16);
  var v557 = v665.length;
  var v324 = v557 < 3;
  if (v324) {
    return "";
  }
  dnaSequence$$3 = JAM.call(dnaSequence$$3.replace, dnaSequence$$3, [/(...)/g, v2], JAM.policy.p16);
  var i$$12 = 0;
  var v558 = geneticCodeMatchExp$$2.length;
  var v327 = i$$12 < v558;
  for (;v327;) {
    var v325 = geneticCodeMatchExp$$2[i$$12];
    var v326 = geneticCodeMatchResult$$2[i$$12];
    dnaSequence$$3 = JAM.call(dnaSequence$$3.replace, dnaSequence$$3, [v325, v326], JAM.policy.p21);
    i$$12++;
    var v559 = geneticCodeMatchExp$$2.length;
    v327 = i$$12 < v559;
  }
  dnaSequence$$3 = JAM.call(dnaSequence$$3.replace, dnaSequence$$3, [/\S{3}/g, "X"], JAM.policy.p16);
  dnaSequence$$3 = JAM.call(dnaSequence$$3.replace, dnaSequence$$3, [/\s\S{1,2}$/, ""], JAM.policy.p16);
  dnaSequence$$3 = JAM.call(dnaSequence$$3.replace, dnaSequence$$3, [/\s/g, ""], JAM.policy.p16);
  var v328 = outputWindow.document;
  var v329 = addReturns(dnaSequence$$3);
  JAM.call(v328.write, v328, [v329], JAM.policy.p15);
  return true;
}
JAM.set(document, "onload", v3);
var v330 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p11);
JAM.set(v330, "onclick", v4);
var v331 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p11);
JAM.set(v331, "onclick", v5)

JAM.stopProfile('load');
