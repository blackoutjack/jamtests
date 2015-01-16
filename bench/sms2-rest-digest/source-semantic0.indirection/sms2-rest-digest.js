function v4() {
  var v724 = document.forms;
  var v604 = v724[0];
  var v352 = v604.elements;
  var v5 = v352[0];
  v5.value = " ";
  return;
}
function v3() {
  try {
    restDigest(document);
  } catch (e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    alert(v6);
  }
  return;
}
function v2() {
  var v353 = document.main_form;
  var v7 = v353.main_submit;
  v7.focus();
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
  var v8 = arrayOfSequences[0];
  var lengthOfAlign = v8.length;
  var v354 = arrayOfSequences.length;
  var v9 = v354 < 2;
  if (v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v355 = arrayOfTitles.length;
  var v11 = i$$1 < v355;
  for (;v11;) {
    var v795 = arrayOfTitles[i$$1];
    var v725 = JAM.call(v795.search, v795, [/\S/], JAM.policy.p17);
    var v605 = v725 == -1;
    var v727 = !v605;
    if (v727) {
      var v796 = arrayOfSequences[i$$1];
      var v726 = JAM.call(v796.search, v796, [/\S/], JAM.policy.p17);
      v605 = v726 == -1;
    }
    var v356 = v605;
    var v607 = !v356;
    if (v607) {
      var v728 = arrayOfSequences[i$$1];
      var v606 = v728.length;
      v356 = v606 != lengthOfAlign;
    }
    var v10 = v356;
    if (v10) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v357 = arrayOfTitles.length;
    v11 = i$$1 < v357;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v848 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p17);
  var v797 = v848 == -1;
  var v850 = !v797;
  if (v850) {
    var v849 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p17);
    v797 = v849 == -1;
  }
  var v729 = v797;
  var v799 = !v729;
  if (v799) {
    var v798 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p17);
    v729 = v798 == -1;
  }
  var v608 = v729;
  var v731 = !v608;
  if (v731) {
    var v730 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p17);
    v608 = v730 == -1;
  }
  var v358 = v608;
  var v610 = !v358;
  if (v610) {
    var v609 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p17);
    v358 = v609 == -1;
  }
  var v12 = v358;
  if (v12) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v611 = formElement.value;
  var v359 = JAM.call(v611.search, v611, [/\S/], JAM.policy.p17);
  var v13 = v359 == -1;
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
  var v360 = arrayOfPatterns.length;
  var v16 = z$$2 < v360;
  for (;v16;) {
    var v612 = arrayOfPatterns[z$$2];
    var v361 = JAM.call(v612.search, v612, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p17);
    var v14 = v361 == -1;
    if (v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v613 = arrayOfPatterns[z$$2];
    var v362 = moreExpressionCheck(v613);
    var v15 = v362 == false;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v363 = arrayOfPatterns.length;
    v16 = z$$2 < v363;
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v364 = arrayOfPatterns.length;
  var v22 = j < v364;
  for (;v22;) {
    var v614 = arrayOfPatterns[j];
    var v365 = JAM.call(v614.match, v614, [/\/.+\//], JAM.policy.p17);
    var v19 = v365 + "gi";
    if (JAM.isEval(eval)) {
      var v973 = eval("introspect(JAM.policy.pFull) { " + v19 + " }")
    } else {
      var v973 = JAM.call(eval, null, [v19])
    }
    geneticCodeMatchExp[j] = v973;
    var v366 = arrayOfPatterns[j];
    var v20 = JAM.call(v366.match, v366, [/=[a-zA-Z\*]/], JAM.policy.p17);
    var v974 = v20.toString();
    geneticCodeMatchResult[j] = v974;
    var v21 = geneticCodeMatchResult[j];
    var v975 = JAM.call(v21.replace, v21, [/=/g, ""], JAM.policy.p16);
    geneticCodeMatchResult[j] = v975;
    j++;
    var v367 = arrayOfPatterns.length;
    v22 = j < v367;
  }
  var i$$2 = 0;
  var v615 = testSequence.length;
  var v368 = v615 - 3;
  var v29 = i$$2 <= v368;
  for (;v29;) {
    var v23 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v23], JAM.policy.p16);
    j = 0;
    var v369 = geneticCodeMatchExp.length;
    var v27 = j < v369;
    for (;v27;) {
      var v616 = geneticCodeMatchExp[j];
      var v370 = JAM.call(codon.search, codon, [v616], JAM.policy.p18);
      var v26 = v370 != -1;
      if (v26) {
        var v25 = oneMatch == true;
        if (v25) {
          var v371 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v24 = v371 + ".";
          alert(v24);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v372 = geneticCodeMatchExp.length;
      v27 = j < v372;
    }
    var v28 = oneMatch == false;
    if (v28) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v617 = testSequence.length;
    var v373 = v617 - 3;
    v29 = i$$2 <= v373;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v374 = arrayOfPatterns$$1.length;
  var v31 = z$$3 < v374;
  for (;v31;) {
    var v618 = arrayOfPatterns$$1[z$$3];
    var v375 = JAM.call(v618.search, v618, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p17);
    var v30 = v375 != -1;
    if (v30) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v376 = arrayOfPatterns$$1.length;
    v31 = z$$3 < v376;
  }
  var i$$3 = 0;
  var v377 = arrayOfPatterns$$1.length;
  var v35 = i$$3 < v377;
  for (;v35;) {
    var v619 = arrayOfPatterns$$1[i$$3];
    var v378 = "[" + v619;
    var v32 = v378 + "]";
    var re = new RegExp(v32, "gi");
    var j$$1 = i$$3 + 1;
    var v379 = arrayOfPatterns$$1.length;
    var v34 = j$$1 < v379;
    for (;v34;) {
      var v620 = arrayOfPatterns$$1[j$$1];
      var v380 = JAM.call(v620.search, v620, [re], JAM.policy.p18);
      var v33 = v380 != -1;
      if (v33) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v381 = arrayOfPatterns$$1.length;
      v34 = j$$1 < v381;
    }
    i$$3++;
    var v382 = arrayOfPatterns$$1.length;
    v35 = i$$3 < v382;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v383 = arrayOfPatterns$$2.length;
  var v38 = z$$4 < v383;
  for (;v38;) {
    var v621 = arrayOfPatterns$$2[z$$4];
    var v384 = JAM.call(v621.search, v621, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p17);
    var v36 = v384 == -1;
    if (v36) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v622 = arrayOfPatterns$$2[z$$4];
    var v385 = moreExpressionCheck(v622);
    var v37 = v385 == false;
    if (v37) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v386 = arrayOfPatterns$$2.length;
    v38 = z$$4 < v386;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v732 = getSequenceFromFasta(text$$7);
  var v623 = JAM.call(v732.replace, v732, [/[^A-Za-z]/g, ""], JAM.policy.p16);
  var v387 = v623.length;
  var v40 = v387 > maxInput;
  if (v40) {
    var v388 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v39 = v388 + " characters.";
    alert(v39);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v389 = text$$8.length;
  var v42 = v389 > maxInput$$1;
  if (v42) {
    var v390 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v41 = v390 + " characters.";
    alert(v41);
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
  var v43 = outputWindow.document;
  JAM.call(v43.write, v43, ["</form>"], JAM.policy.p12);
  return true;
}
function closePre() {
  var v44 = outputWindow.document;
  JAM.call(v44.write, v44, ["</div>"], JAM.policy.p12);
  var v45 = outputWindow.document;
  JAM.call(v45.write, v45, ["</pre>\n"], JAM.policy.p12);
  return;
}
function closeTextArea() {
  var v46 = outputWindow.document;
  JAM.call(v46.write, v46, ["</textarea>"], JAM.policy.p12);
  return true;
}
function closeWindow() {
  var v47 = outputWindow.document;
  JAM.call(v47.write, v47, ["</body>\n</html>\n"], JAM.policy.p12);
  outputWindow.status = "Done.";
  var v48 = outputWindow.document;
  v48.close();
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
  var v391 = alignArray.length;
  var v49 = v391 < 3;
  if (v49) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v392 = alignArray.length;
  var v51 = i$$4 < v392;
  for (;v51;) {
    var v624 = alignArray[i$$4];
    var v393 = JAM.call(v624.search, v624, [/[^\s]+\s/], JAM.policy.p17);
    var v50 = v393 == -1;
    if (v50) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v394 = alignArray.length;
    v51 = i$$4 < v394;
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
  var v395 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p17);
  var v54 = v395 != -1;
  if (v54) {
    var v53 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p18);
    for (;v53;) {
      var v52 = matchArray[0];
      JAM.call(arrayOfFasta.push, arrayOfFasta, [v52], JAM.policy.p18);
      v53 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p18);
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v396 = sequence$$2.length;
  var v55 = "&gt;results for " + v396;
  var stringToReturn = v55 + " residue sequence ";
  var v397 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p17);
  var v57 = v397 != -1;
  if (v57) {
    var v398 = stringToReturn + '"';
    var v56 = v398 + fastaSequenceTitle;
    stringToReturn = v56 + '"';
  }
  var v399 = stringToReturn + ' starting "';
  var v400 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p13);
  var v58 = v399 + v400;
  stringToReturn = v58 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v401 = sequenceOne.length;
  var v59 = "Search results for " + v401;
  var stringToReturn$$1 = v59 + " residue sequence ";
  var v402 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p17);
  var v61 = v402 != -1;
  if (v61) {
    var v403 = stringToReturn$$1 + '"';
    var v60 = v403 + fastaSequenceTitleOne;
    stringToReturn$$1 = v60 + '"';
  }
  var v404 = stringToReturn$$1 + ' starting "';
  var v405 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p13);
  var v62 = v404 + v405;
  stringToReturn$$1 = v62 + '"\n';
  var v406 = stringToReturn$$1 + "and ";
  var v407 = sequenceTwo.length;
  var v63 = v406 + v407;
  stringToReturn$$1 = v63 + " residue sequence ";
  var v408 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p17);
  var v65 = v408 != -1;
  if (v65) {
    var v409 = stringToReturn$$1 + '"';
    var v64 = v409 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v64 + '"';
  }
  var v410 = stringToReturn$$1 + ' starting "';
  var v411 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p13);
  var v66 = v410 + v411;
  stringToReturn$$1 = v66 + '"';
  var v67 = '<div class="info">' + stringToReturn$$1;
  return v67 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v68 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v68);
  var j$$2 = 0;
  var v412 = arrayOfPatterns$$3.length;
  var v70 = j$$2 < v412;
  for (;v70;) {
    var v625 = arrayOfPatterns$$3[j$$2];
    var v413 = JAM.call(v625.match, v625, [/\/.+\//], JAM.policy.p17);
    var v69 = v413 + "gi";
    if (JAM.isEval(eval)) {
      var v976 = eval("introspect(JAM.policy.pFull) { " + v69 + " }")
    } else {
      var v976 = JAM.call(eval, null, [v69])
    }
    geneticCodeMatchExp$$1[j$$2] = v976;
    j$$2++;
    var v414 = arrayOfPatterns$$3.length;
    v70 = j$$2 < v414;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v71 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v71);
  var j$$3 = 0;
  var v415 = arrayOfPatterns$$4.length;
  var v74 = j$$3 < v415;
  for (;v74;) {
    var v416 = arrayOfPatterns$$4[j$$3];
    var v72 = JAM.call(v416.match, v416, [/=[a-zA-Z\*]/], JAM.policy.p17);
    var v977 = v72.toString();
    geneticCodeMatchResult$$1[j$$3] = v977;
    var v73 = geneticCodeMatchResult$$1[j$$3];
    var v978 = JAM.call(v73.replace, v73, [/=/g, ""], JAM.policy.p16);
    geneticCodeMatchResult$$1[j$$3] = v978;
    j$$3++;
    var v417 = arrayOfPatterns$$4.length;
    v74 = j$$3 < v417;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v418 = sequence$$3.length;
  var v75 = "Results for " + v418;
  var stringToReturn$$2 = v75 + " residue sequence ";
  var v419 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p17);
  var v77 = v419 != -1;
  if (v77) {
    var v420 = stringToReturn$$2 + '"';
    var v76 = v420 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v76 + '"';
  }
  var v421 = stringToReturn$$2 + ' starting "';
  var v422 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p13);
  var v78 = v421 + v422;
  stringToReturn$$2 = v78 + '"';
  var v79 = '<div class="info">' + stringToReturn$$2;
  return v79 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v626 = "Results for " + topology;
  var v423 = v626 + " ";
  var v424 = sequence$$4.length;
  var v80 = v423 + v424;
  var stringToReturn$$3 = v80 + " residue sequence ";
  var v425 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p17);
  var v82 = v425 != -1;
  if (v82) {
    var v426 = stringToReturn$$3 + '"';
    var v81 = v426 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v81 + '"';
  }
  var v427 = stringToReturn$$3 + ' starting "';
  var v428 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p13);
  var v83 = v427 + v428;
  stringToReturn$$3 = v83 + '"';
  var v84 = '<div class="info">' + stringToReturn$$3;
  return v84 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v429 = sequenceOne$$1.length;
  var v85 = "Alignment results for " + v429;
  var stringToReturn$$4 = v85 + " residue sequence ";
  var v430 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p17);
  var v87 = v430 != -1;
  if (v87) {
    var v431 = stringToReturn$$4 + '"';
    var v86 = v431 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v86 + '"';
  }
  var v432 = stringToReturn$$4 + ' starting "';
  var v433 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p13);
  var v88 = v432 + v433;
  stringToReturn$$4 = v88 + '"\n';
  var v434 = stringToReturn$$4 + "and ";
  var v435 = sequenceTwo$$1.length;
  var v89 = v434 + v435;
  stringToReturn$$4 = v89 + " residue sequence ";
  var v436 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p17);
  var v91 = v436 != -1;
  if (v91) {
    var v437 = stringToReturn$$4 + '"';
    var v90 = v437 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v90 + '"';
  }
  var v438 = stringToReturn$$4 + ' starting "';
  var v439 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p13);
  var v92 = v438 + v439;
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
    var v440 = Math.random();
    var v441 = components.length;
    var v94 = v440 * v441;
    tempNum = JAM.call(Math.floor, Math, [v94], JAM.policy.p17);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p18);
    j$$4++;
    v95 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p12);
}
function getSequenceFromFasta(sequenceRecord) {
  var v442 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p17);
  var v96 = v442 != -1;
  if (v96) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p16);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v443 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p17);
  var v98 = v443 != -1;
  if (v98) {
    var v97 = JAM.call(sequenceRecord$$1.match, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p16);
    fastaTitle = v97.toString();
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\>|[\f\n\r]/g, ""], JAM.policy.p16);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\s{2,}/g, " "], JAM.policy.p16);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/[\<\>]/gi, ""], JAM.policy.p16);
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  var v946 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p17);
  var v937 = v946 != -1;
  var v948 = !v937;
  if (v948) {
    var v947 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p17);
    v937 = v947 != -1;
  }
  var v927 = v937;
  var v939 = !v927;
  if (v939) {
    var v938 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p17);
    v927 = v938 != -1;
  }
  var v916 = v927;
  var v929 = !v916;
  if (v929) {
    var v928 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p17);
    v916 = v928 != -1;
  }
  var v903 = v916;
  var v918 = !v903;
  if (v918) {
    var v917 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p17);
    v903 = v917 != -1;
  }
  var v878 = v903;
  var v905 = !v878;
  if (v905) {
    var v904 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p17);
    v878 = v904 != -1;
  }
  var v851 = v878;
  var v880 = !v851;
  if (v880) {
    var v879 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p17);
    v851 = v879 != -1;
  }
  var v800 = v851;
  var v853 = !v800;
  if (v853) {
    var v852 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p17);
    v800 = v852 != -1;
  }
  var v733 = v800;
  var v802 = !v733;
  if (v802) {
    var v801 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p17);
    v733 = v801 != -1;
  }
  var v627 = v733;
  var v735 = !v627;
  if (v735) {
    var v734 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p17);
    v627 = v734 != -1;
  }
  var v444 = v627;
  var v629 = !v444;
  if (v629) {
    var v628 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p17);
    v444 = v628 != -1;
  }
  var v99 = v444;
  if (v99) {
    return false;
  }
  return true;
}
function openForm() {
  var v100 = outputWindow.document;
  JAM.call(v100.write, v100, ['<form action="">\n'], JAM.policy.p12);
  return true;
}
function openPre() {
  var v101 = outputWindow.document;
  JAM.call(v101.write, v101, ["<pre>"], JAM.policy.p12);
  var v102 = outputWindow.document;
  JAM.call(v102.write, v102, ['<div class="pre">'], JAM.policy.p12);
  return;
}
function openTextArea() {
  var v103 = outputWindow.document;
  JAM.call(v103.write, v103, ['<br /><textarea rows="6" cols="61">\n'], JAM.policy.p12);
  return true;
}
function openWindow(title$$6) {
  _openWindow(title$$6, true);
  return;
}
function _openWindow(title$$7, isColor) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  outputWindow.focus();
  var v104 = outputWindow.document;
  var v736 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v630 = v736 + "<head>\n";
  var v445 = v630 + "<title>Sequence Manipulation Suite</title>\n";
  var v105 = v445 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v104.write, v104, [v105], JAM.policy.p18);
  if (isColor) {
    var v106 = outputWindow.document;
    var v964 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v959 = v964 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v954 = v959 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v949 = v954 + "div.info {font-weight: bold}\n";
    var v940 = v949 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v930 = v940 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v919 = v930 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v906 = v919 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v881 = v906 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v854 = v881 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v803 = v854 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v737 = v803 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v631 = v737 + "td.many {color: #000000}\n";
    var v446 = v631 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v107 = v446 + "</style>\n";
    JAM.call(v106.write, v106, [v107], JAM.policy.p18);
  } else {
    var v108 = outputWindow.document;
    var v969 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v965 = v969 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v960 = v965 + "div.title {display: none}\n";
    var v955 = v960 + "div.info {font-weight: bold}\n";
    var v950 = v955 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v941 = v950 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v931 = v941 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v920 = v931 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v907 = v920 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v882 = v907 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v855 = v882 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v804 = v855 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v738 = v804 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v632 = v738 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v447 = v632 + "img {display: none}\n";
    var v109 = v447 + "</style>\n";
    JAM.call(v108.write, v108, [v109], JAM.policy.p18);
  }
  var v110 = outputWindow.document;
  var v739 = "</head>\n" + '<body class="main">\n';
  var v633 = v739 + '<div class="title">';
  var v448 = v633 + title$$7;
  var v111 = v448 + " results</div>\n";
  JAM.call(v110.write, v110, [v111], JAM.policy.p18);
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
  var v112 = outputWindow.document;
  var v740 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v634 = v740 + "<head>\n";
  var v449 = v634 + "<title>Sequence Manipulation Suite</title>\n";
  var v113 = v449 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v112.write, v112, [v113], JAM.policy.p18);
  if (isBackground) {
    var v114 = outputWindow.document;
    var v966 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v961 = v966 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v956 = v961 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v951 = v956 + "div.info {font-weight: bold}\n";
    var v942 = v951 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v932 = v942 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v921 = v932 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v908 = v921 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v883 = v908 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v856 = v883 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v805 = v856 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v741 = v805 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v635 = v741 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v450 = v635 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v115 = v450 + "</style>\n";
    JAM.call(v114.write, v114, [v115], JAM.policy.p18);
  } else {
    var v116 = outputWindow.document;
    var v972 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v970 = v972 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v967 = v970 + "div.title {display: none}\n";
    var v962 = v967 + "div.info {font-weight: bold}\n";
    var v957 = v962 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v952 = v957 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v943 = v952 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v933 = v943 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v922 = v933 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v909 = v922 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v884 = v909 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v857 = v884 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v806 = v857 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v742 = v806 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v636 = v742 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v451 = v636 + "img {display: none}\n";
    var v117 = v451 + "</style>\n";
    JAM.call(v116.write, v116, [v117], JAM.policy.p18);
  }
  var v118 = outputWindow.document;
  var v743 = "</head>\n" + '<body class="main">\n';
  var v637 = v743 + '<div class="title">';
  var v452 = v637 + title$$9;
  var v119 = v452 + " results</div>\n";
  JAM.call(v118.write, v118, [v119], JAM.policy.p18);
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
  var v453 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p17);
  var v120 = v453 != -1;
  if (v120) {
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
  JAM.call(testArray.push, testArray, [testString], JAM.policy.p18);
  var v454 = testArray[0];
  var v124 = v454 != testString;
  if (v124) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v455 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p18);
  var v125 = v455 == -1;
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
  testString = JAM.call(testString.replace, testString, [/(\d)/g, v1], JAM.policy.p16);
  var v127 = testString != "1X2X3X";
  if (v127) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false;
  }
  var testNum = 2489.8237;
  var v456 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p9);
  var v128 = v456 != 2489.824;
  if (v128) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v457 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p9);
  var v129 = v457 != 2489.8;
  if (v129) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v458 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p17);
  var v130 = v458 == -1;
  if (v130) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v807 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p17);
  var v744 = v807 == -1;
  var v809 = !v744;
  if (v809) {
    var v808 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p17);
    v744 = v808 == -1;
  }
  var v638 = v744;
  var v746 = !v638;
  if (v746) {
    var v745 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p17);
    v638 = v745 == -1;
  }
  var v459 = v638;
  var v640 = !v459;
  if (v640) {
    var v639 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p17);
    v459 = v639 == -1;
  }
  var v131 = v459;
  if (v131) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v460 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p17);
  var v132 = v460 == -1;
  if (v132) {
    alert("Please enter a number.");
    return false;
  }
  var v134 = theNumber$$2 > maxInput$$2;
  if (v134) {
    var v461 = "Please enter a number less than or equal to " + maxInput$$2;
    var v133 = v461 + ".";
    alert(v133);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v462 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p17);
  var v135 = v462 != -1;
  if (v135) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v463 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p17);
  var v136 = v463 != -1;
  if (v136) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v810 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p17);
  var v747 = v810 == -1;
  var v812 = !v747;
  if (v812) {
    var v811 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p17);
    v747 = v811 == -1;
  }
  var v641 = v747;
  var v749 = !v641;
  if (v749) {
    var v748 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p17);
    v641 = v748 == -1;
  }
  var v464 = v641;
  var v643 = !v464;
  if (v643) {
    var v642 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p17);
    v464 = v642 == -1;
  }
  var v137 = v464;
  if (v137) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v813 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p17);
  var v750 = v813 == -1;
  var v815 = !v750;
  if (v815) {
    var v814 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p17);
    v750 = v814 == -1;
  }
  var v644 = v750;
  var v752 = !v644;
  if (v752) {
    var v751 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p17);
    v644 = v751 == -1;
  }
  var v465 = v644;
  var v646 = !v465;
  if (v646) {
    var v645 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p17);
    v465 = v645 == -1;
  }
  var v138 = v465;
  if (v138) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v466 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p17);
  var v139 = v466 == -1;
  if (v139) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v816 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p17);
  var v753 = v816 == -1;
  var v818 = !v753;
  if (v818) {
    var v817 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p17);
    v753 = v817 == -1;
  }
  var v647 = v753;
  var v755 = !v647;
  if (v755) {
    var v754 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p17);
    v647 = v754 == -1;
  }
  var v467 = v647;
  var v649 = !v467;
  if (v649) {
    var v648 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p17);
    v467 = v648 == -1;
  }
  var v140 = v467;
  if (v140) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v468 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p17);
  var v141 = v468 == -1;
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
    var v469 = basePerLine / groupSize;
    var v145 = j$$6 <= v469;
    for (;v145;) {
      var v144 = k < groupSize;
      for (;v144;) {
        var v470 = k + i$$5;
        var v143 = JAM.call(text$$10.charAt, text$$10, [v470], JAM.policy.p18);
        lineOfText = lineOfText + v143;
        k = k + 1;
        v144 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v471 = basePerLine / groupSize;
      v145 = j$$6 <= v471;
    }
    var v146 = outputWindow.document;
    var v147 = lineOfText + "\n";
    JAM.call(v146.write, v146, [v147], JAM.policy.p18);
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
    var v472 = adjustment < 0;
    if (v472) {
      v472 = adjusted >= 0;
    }
    var v149 = v472;
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
    var v473 = basePerLine$$2 / groupSize$$2;
    var v158 = j$$7 <= v473;
    for (;v158;) {
      var v153 = k$$1 < groupSize$$2;
      for (;v153;) {
        var v474 = i$$6 + k$$1;
        var v150 = v474 >= stopBase$$2;
        if (v150) {
          break;
        }
        var v151 = lineOfText$$1;
        var v475 = k$$1 + i$$6;
        var v152 = JAM.call(text$$12.charAt, text$$12, [v475], JAM.policy.p18);
        lineOfText$$1 = v151 + v152;
        k$$1 = k$$1 + 1;
        v153 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v156 = numberPosition$$1 == "above";
      if (v156) {
        var v154 = aboveNum;
        var v476 = adjustNumbering(i$$6, numberingAdjustment);
        var v155 = rightNum(v476, "", groupSize$$2, tabIn$$3);
        aboveNum = v154 + v155;
      }
      var v157 = i$$6 >= stopBase$$2;
      if (v157) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v477 = basePerLine$$2 / groupSize$$2;
      v158 = j$$7 <= v477;
    }
    var v181 = numberPosition$$1 == "left";
    if (v181) {
      var v159 = outputWindow.document;
      var v756 = adjustNumbering(lineNum, numberingAdjustment);
      var v650 = rightNum(v756, "", 8, tabIn$$3);
      var v478 = v650 + lineOfText$$1;
      var v160 = v478 + "\n";
      JAM.call(v159.write, v159, [v160], JAM.policy.p18);
      var v164 = strands$$1 == "two";
      if (v164) {
        var v161 = outputWindow.document;
        var v757 = adjustNumbering(lineNum, numberingAdjustment);
        var v651 = rightNum(v757, "", 8, tabIn$$3);
        var v652 = complement(lineOfText$$1);
        var v479 = v651 + v652;
        var v162 = v479 + "\n";
        JAM.call(v161.write, v161, [v162], JAM.policy.p18);
        var v163 = outputWindow.document;
        JAM.call(v163.write, v163, ["\n"], JAM.policy.p12);
      }
    } else {
      var v180 = numberPosition$$1 == "right";
      if (v180) {
        var v165 = outputWindow.document;
        var v653 = lineOfText$$1;
        var v654 = adjustNumbering(i$$6, numberingAdjustment);
        var v480 = v653 + v654;
        var v166 = v480 + "\n";
        JAM.call(v165.write, v165, [v166], JAM.policy.p18);
        var v170 = strands$$1 == "two";
        if (v170) {
          var v167 = outputWindow.document;
          var v655 = complement(lineOfText$$1);
          var v656 = adjustNumbering(i$$6, numberingAdjustment);
          var v481 = v655 + v656;
          var v168 = v481 + "\n";
          JAM.call(v167.write, v167, [v168], JAM.policy.p18);
          var v169 = outputWindow.document;
          JAM.call(v169.write, v169, ["\n"], JAM.policy.p12);
        }
      } else {
        var v179 = numberPosition$$1 == "above";
        if (v179) {
          var v171 = outputWindow.document;
          var v172 = aboveNum + "\n";
          JAM.call(v171.write, v171, [v172], JAM.policy.p18);
          var v173 = outputWindow.document;
          var v174 = lineOfText$$1 + "\n";
          JAM.call(v173.write, v173, [v174], JAM.policy.p18);
          var v178 = strands$$1 == "two";
          if (v178) {
            var v175 = outputWindow.document;
            var v482 = complement(lineOfText$$1);
            var v176 = v482 + "\n";
            JAM.call(v175.write, v175, [v176], JAM.policy.p18);
            var v177 = outputWindow.document;
            JAM.call(v177.write, v177, ["\n"], JAM.policy.p12);
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
    var v483 = basePerLine$$3 / groupSize$$3;
    var v189 = j$$8 <= v483;
    for (;v189;) {
      var v185 = k$$2 < groupSize$$3;
      for (;v185;) {
        var v484 = i$$7 + k$$2;
        var v183 = v484 >= stopBase$$3;
        if (v183) {
          break;
        }
        var v485 = k$$2 + i$$7;
        var v184 = JAM.call(text$$13.charAt, text$$13, [v485], JAM.policy.p18);
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
      var v486 = basePerLine$$3 / groupSize$$3;
      v189 = j$$8 <= v486;
    }
    var v200 = numberPosition$$2 == "left";
    if (v200) {
      var v190 = outputWindow.document;
      var v657 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v487 = v657 + lineOfText$$2;
      var v191 = v487 + "\n";
      JAM.call(v190.write, v190, [v191], JAM.policy.p18);
    } else {
      var v199 = numberPosition$$2 == "right";
      if (v199) {
        var v192 = outputWindow.document;
        var v488 = lineOfText$$2 + i$$7;
        var v193 = v488 + "\n";
        JAM.call(v192.write, v192, [v193], JAM.policy.p18);
      } else {
        var v198 = numberPosition$$2 == "above";
        if (v198) {
          var v194 = outputWindow.document;
          var v195 = aboveNum$$1 + "\n";
          JAM.call(v194.write, v194, [v195], JAM.policy.p18);
          var v196 = outputWindow.document;
          var v197 = lineOfText$$2 + "\n";
          JAM.call(v196.write, v196, [v197], JAM.policy.p18);
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
  var v758 = sequence$$13.length;
  var v658 = v758 <= firstIndexToMutate;
  var v759 = !v658;
  if (v759) {
    v658 = lastIndexToMutate < 0;
  }
  var v489 = v658;
  var v659 = !v489;
  if (v659) {
    v489 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v202 = v489;
  if (v202) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v210 = i$$8 < numMut;
  for (;v210;) {
    maxNum = sequence$$13.length;
    var v490 = Math.random();
    var v203 = v490 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v203], JAM.policy.p17);
    var v491 = randNum < firstIndexToMutate;
    var v660 = !v491;
    if (v660) {
      v491 = randNum > lastIndexToMutate;
    }
    var v204 = v491;
    if (v204) {
      numMut++;
      i$$8++;
      v210 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p17);
    needNewChar = true;
    for (;needNewChar;) {
      var v492 = Math.random();
      var v493 = components$$1.length;
      var v205 = v492 * v493;
      componentsIndex = JAM.call(Math.round, Math, [v205], JAM.policy.p17);
      var v494 = components$$1.length;
      var v206 = componentsIndex == v494;
      if (v206) {
        componentsIndex = 0;
      }
      var v495 = components$$1[componentsIndex];
      var v207 = v495 != currentChar;
      if (v207) {
        needNewChar = false;
      }
    }
    var v496 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p13);
    var v497 = components$$1[componentsIndex];
    var v208 = v496 + v497;
    var v498 = randNum + 1;
    var v499 = sequence$$13.length;
    var v209 = JAM.call(sequence$$13.substring, sequence$$13, [v498, v499], JAM.policy.p27);
    sequence$$13 = v208 + v209;
    i$$8++;
    v210 = i$$8 < numMut;
  }
  var v211 = outputWindow.document;
  var v212 = addReturns(sequence$$13);
  JAM.call(v211.write, v211, [v212], JAM.policy.p18);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v217 = j$$9 < lengthOut$$1;
  for (;v217;) {
    var v500 = Math.random();
    var v501 = components$$2.length;
    var v213 = v500 * v501;
    tempNum$$1 = JAM.call(Math.floor, Math, [v213], JAM.policy.p17);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v502 = sequence$$14.length;
    var v216 = v502 == 60;
    if (v216) {
      var v214 = outputWindow.document;
      var v215 = sequence$$14 + "\n";
      JAM.call(v214.write, v214, [v215], JAM.policy.p18);
      sequence$$14 = "";
    }
    j$$9++;
    v217 = j$$9 < lengthOut$$1;
  }
  var v218 = outputWindow.document;
  var v219 = sequence$$14 + "\n";
  JAM.call(v218.write, v218, [v219], JAM.policy.p18);
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
    var v760 = sequence$$15.length;
    var v661 = v760 - lookAhead;
    var v662 = sequence$$15.length;
    var v503 = JAM.call(sequence$$15.substring, sequence$$15, [v661, v662], JAM.policy.p27);
    var v221 = v503 + sequence$$15;
    var v222 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    sequence$$15 = v221 + v222;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v224 = outputWindow.document;
  JAM.call(v224.write, v224, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p12);
  var v225 = outputWindow.document;
  var v761 = '<tr><td class="title" width="200px">' + "Site:";
  var v663 = v761 + '</td><td class="title">';
  var v504 = v663 + "Positions:";
  var v226 = v504 + "</td></tr>\n";
  JAM.call(v225.write, v225, [v226], JAM.policy.p18);
  var i$$9 = 0;
  var v505 = arrayOfItems.length;
  var v242 = i$$9 < v505;
  for (;v242;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v506 = arrayOfItems[i$$9];
    var v227 = JAM.call(v506.match, v506, [/\/.+\//], JAM.policy.p17);
    matchExp = v227 + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    var v762 = arrayOfItems[i$$9];
    var v664 = JAM.call(v762.match, v762, [/\)\D*\d+/], JAM.policy.p17);
    var v507 = v664.toString();
    var v228 = JAM.call(v507.replace, v507, [/\)\D*/, ""], JAM.policy.p16);
    cutDistance = parseFloat(v228);
    var v234 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p18);
    for (;v234;) {
      var v229 = matchExp.lastIndex;
      matchPosition = v229 - cutDistance;
      var v508 = matchPosition >= lowerLimit;
      if (v508) {
        v508 = matchPosition < upperLimit;
      }
      var v232 = v508;
      if (v232) {
        timesFound++;
        var v230 = tempString$$1 + ", ";
        var v509 = matchPosition - shiftValue;
        var v231 = v509 + 1;
        tempString$$1 = v230 + v231;
      }
      var v510 = matchExp.lastIndex;
      var v665 = RegExp.lastMatch;
      var v511 = v665.length;
      var v233 = v510 - v511;
      matchExp.lastIndex = v233 + 1;
      v234 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p18);
    }
    var v512 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p17);
    var v235 = v512 != -1;
    if (v235) {
      tempString$$1 = JAM.call(tempString$$1.replace, tempString$$1, [/none,\s*/, ""], JAM.policy.p16);
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
    var v910 = '<tr><td class="' + backGroundClass;
    var v885 = v910 + '">';
    var v934 = arrayOfItems[i$$9];
    var v923 = JAM.call(v934.match, v934, [/\([^\(]+\)/], JAM.policy.p17);
    var v911 = v923.toString();
    var v886 = JAM.call(v911.replace, v911, [/\(|\)/g, ""], JAM.policy.p16);
    var v858 = v885 + v886;
    var v819 = v858 + '</td><td class="';
    var v763 = v819 + backGroundClass;
    var v666 = v763 + '">';
    var v513 = v666 + tempString$$1;
    var v241 = v513 + "</td></tr>\n";
    JAM.call(v240.write, v240, [v241], JAM.policy.p18);
    timesFound = 0;
    i$$9++;
    var v514 = arrayOfItems.length;
    v242 = i$$9 < v514;
  }
  var v243 = outputWindow.document;
  JAM.call(v243.write, v243, ["</tbody></table>\n"], JAM.policy.p12);
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v244 = outputWindow.document;
  JAM.call(v244.write, v244, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p12);
  var v245 = outputWindow.document;
  var v859 = '<tr><td class="title">' + "Pattern:";
  var v820 = v859 + '</td><td class="title">';
  var v764 = v820 + "Times found:";
  var v667 = v764 + '</td><td class="title">';
  var v515 = v667 + "Percentage:";
  var v246 = v515 + "</td></tr>\n";
  JAM.call(v245.write, v245, [v246], JAM.policy.p18);
  var i$$10 = 0;
  var v516 = arrayOfItems$$1.length;
  var v255 = i$$10 < v516;
  for (;v255;) {
    var tempNumber = 0;
    var v517 = arrayOfItems$$1[i$$10];
    var v247 = JAM.call(v517.match, v517, [/\/[^\/]+\//], JAM.policy.p17);
    var matchExp$$1 = v247 + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    var v518 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p18);
    var v249 = v518 != -1;
    if (v249) {
      var v248 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p18);
      tempNumber = v248.length;
    }
    var percentage = 0;
    var v668 = originalLength + 1;
    var v821 = arrayOfItems$$1[i$$10];
    var v765 = JAM.call(v821.match, v821, [/\d+/], JAM.policy.p17);
    var v669 = parseFloat(v765);
    var v519 = v668 - v669;
    var v252 = v519 > 0;
    if (v252) {
      var v250 = 100 * tempNumber;
      var v520 = originalLength + 1;
      var v766 = arrayOfItems$$1[i$$10];
      var v670 = JAM.call(v766.match, v766, [/\d+/], JAM.policy.p17);
      var v521 = parseFloat(v670);
      var v251 = v520 - v521;
      percentage = v250 / v251;
    }
    var v253 = outputWindow.document;
    var v935 = arrayOfItems$$1[i$$10];
    var v924 = JAM.call(v935.match, v935, [/\([^\(]+\)\b/], JAM.policy.p17);
    var v912 = v924.toString();
    var v887 = JAM.call(v912.replace, v912, [/\(|\)/g, ""], JAM.policy.p16);
    var v860 = "<tr><td>" + v887;
    var v822 = v860 + "</td><td>";
    var v767 = v822 + tempNumber;
    var v671 = v767 + "</td><td>";
    var v672 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p9);
    var v522 = v671 + v672;
    var v254 = v522 + "</td></tr>\n";
    JAM.call(v253.write, v253, [v254], JAM.policy.p18);
    i$$10++;
    var v523 = arrayOfItems$$1.length;
    v255 = i$$10 < v523;
  }
  var v256 = outputWindow.document;
  JAM.call(v256.write, v256, ["</tbody></table>\n"], JAM.policy.p12);
  return true;
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v524 = sequence$$17.length;
  var v263 = v524 > 0;
  for (;v263;) {
    maxNum$$1 = sequence$$17.length;
    var v525 = Math.random();
    var v257 = v525 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v257], JAM.policy.p17);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p17);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p13);
    var v258 = randNum$$1 + 1;
    var v259 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v258, v259], JAM.policy.p16);
    sequence$$17 = tempString1 + tempString2;
    var v526 = tempSeq.length;
    var v262 = v526 == 60;
    if (v262) {
      var v260 = outputWindow.document;
      var v261 = tempSeq + "\n";
      JAM.call(v260.write, v260, [v261], JAM.policy.p18);
      tempSeq = "";
    }
    var v527 = sequence$$17.length;
    v263 = v527 > 0;
  }
  var v264 = outputWindow.document;
  var v265 = tempSeq + "\n";
  JAM.call(v264.write, v264, [v265], JAM.policy.p18);
  return true;
}
function restDigest(theDocument) {
  var newDna = "";
  var maxInput$$3 = 1E5;
  var v528 = testScript();
  var v266 = v528 == false;
  if (v266) {
    return false;
  }
  var restrictionFragments = new Array;
  var restrictionFragment;
  var v888 = theDocument.forms;
  var v861 = v888[0];
  var v823 = v861.elements;
  var v768 = v823[0];
  var v673 = checkFormElement(v768);
  var v529 = v673 == false;
  var v675 = !v529;
  if (v675) {
    var v913 = theDocument.forms;
    var v889 = v913[0];
    var v862 = v889.elements;
    var v824 = v862[0];
    var v769 = v824.value;
    var v674 = checkSequenceLength(v769, maxInput$$3);
    v529 = v674 == false;
  }
  var v267 = v529;
  if (v267) {
    return false;
  }
  var v825 = theDocument.forms;
  var v770 = v825[0];
  var v676 = v770.elements;
  var v530 = v676[0];
  var v268 = v530.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v268);
  var i$$11 = 0;
  var v531 = arrayOfFasta$$1.length;
  var v274 = i$$11 < v531;
  for (;v274;) {
    var v269 = arrayOfFasta$$1[i$$11];
    newDna = getSequenceFromFasta(v269);
    var v270 = arrayOfFasta$$1[i$$11];
    title = getTitleFromFasta(v270);
    newDna = removeNonDna(newDna);
    var v890 = theDocument.forms;
    var v863 = v890[0];
    var v826 = v863.elements;
    var v771 = v826[4];
    var v677 = v771.options;
    var v891 = theDocument.forms;
    var v864 = v891[0];
    var v827 = v864.elements;
    var v772 = v827[4];
    var v678 = v772.selectedIndex;
    var v532 = v677[v678];
    var v271 = v532.value;
    var v272 = newDna.length;
    var v273 = newDna.length;
    restrictionFragment = new RestrictionFragment(v271, title, newDna, 1, v272, "sequence start", "sequence end", v273);
    JAM.call(restrictionFragments.push, restrictionFragments, [restrictionFragment], JAM.policy.p18);
    i$$11++;
    var v533 = arrayOfFasta$$1.length;
    v274 = i$$11 < v533;
  }
  var v892 = theDocument.forms;
  var v865 = v892[0];
  var v828 = v865.elements;
  var v773 = v828[5];
  var v679 = v773.options;
  var v893 = theDocument.forms;
  var v866 = v893[0];
  var v829 = v866.elements;
  var v774 = v829[5];
  var v680 = v774.selectedIndex;
  var v534 = v679[v680];
  var v275 = v534.value;
  restrictionFragments = digest(restrictionFragments, v275);
  var v894 = theDocument.forms;
  var v867 = v894[0];
  var v830 = v867.elements;
  var v775 = v830[6];
  var v681 = v775.options;
  var v895 = theDocument.forms;
  var v868 = v895[0];
  var v831 = v868.elements;
  var v776 = v831[6];
  var v682 = v776.selectedIndex;
  var v535 = v681[v682];
  var v276 = v535.value;
  restrictionFragments = digest(restrictionFragments, v276);
  var v896 = theDocument.forms;
  var v869 = v896[0];
  var v832 = v869.elements;
  var v777 = v832[7];
  var v683 = v777.options;
  var v897 = theDocument.forms;
  var v870 = v897[0];
  var v833 = v870.elements;
  var v778 = v833[7];
  var v684 = v778.selectedIndex;
  var v536 = v683[v684];
  var v277 = v536.value;
  restrictionFragments = digest(restrictionFragments, v277);
  JAM.call(restrictionFragments.sort, restrictionFragments, [restrictionFragmentSorter], JAM.policy.p18);
  openWindow("Restriction Digest");
  openPre();
  i$$11 = 0;
  var v537 = restrictionFragments.length;
  var v281 = i$$11 < v537;
  for (;v281;) {
    var v278 = restrictionFragments[i$$11];
    v278.correctPositions();
    var v279 = restrictionFragments[i$$11];
    var v898 = theDocument.forms;
    var v871 = v898[0];
    var v834 = v871.elements;
    var v779 = v834[4];
    var v685 = v779.options;
    var v899 = theDocument.forms;
    var v872 = v899[0];
    var v835 = v872.elements;
    var v780 = v835[4];
    var v686 = v780.selectedIndex;
    var v538 = v685[v686];
    var v280 = v538.value;
    JAM.call(v279.writeFragment, v279, [v280], JAM.policy.p18);
    i$$11++;
    var v539 = restrictionFragments.length;
    v281 = i$$11 < v539;
  }
  closePre();
  closeWindow();
  return true;
}
function digest(arrayOfRestrictionFragments, enzyme) {
  var v282 = enzyme == "";
  if (v282) {
    return arrayOfRestrictionFragments;
  }
  var newFragments = new Array;
  var positions = new Array;
  var matchPosition$$1 = 0;
  var v283 = JAM.call(enzyme.match, enzyme, [/\/.+\//], JAM.policy.p17);
  var matchExp$$2 = v283.toString();
  matchExp$$2 = JAM.call(matchExp$$2.replace, matchExp$$2, [/\//g, ""], JAM.policy.p16);
  matchExp$$2 = new RegExp(matchExp$$2, "gi");
  var v687 = JAM.call(enzyme.match, enzyme, [/\)\D*\d+/], JAM.policy.p17);
  var v540 = v687.toString();
  var v284 = JAM.call(v540.replace, v540, [/\)\D*/, ""], JAM.policy.p16);
  var cutDistance$$1 = parseInt(v284);
  var v541 = JAM.call(enzyme.match, enzyme, [/\([^\(]+\)/], JAM.policy.p17);
  var v285 = v541.toString();
  var enzymeName = JAM.call(v285.replace, v285, [/\(|\)/g, ""], JAM.policy.p16);
  var matchArray$$2;
  var wasCut = false;
  var restrictionFragmentOne;
  var restrictionFragmentTwo;
  var previousCutPosition;
  var previousEnzyme;
  var previousStartPosition;
  var startRestrictionFragment;
  var lookAhead$$1 = 50;
  var lowerLimit$$1;
  var upperLimit$$1;
  var shiftValue$$1;
  var i$$12 = 0;
  var v542 = arrayOfRestrictionFragments.length;
  var v328 = i$$12 < v542;
  for (;v328;) {
    var v688 = arrayOfRestrictionFragments[i$$12];
    var v543 = v688.topology;
    var v296 = v543 == "circular";
    if (v296) {
      var v689 = arrayOfRestrictionFragments[i$$12];
      var v544 = v689.sequence;
      var v286 = JAM.call(v544.substring, v544, [0, lookAhead$$1], JAM.policy.p13);
      shiftValue$$1 = v286.length;
      var v781 = arrayOfRestrictionFragments[i$$12];
      var v690 = v781.sequence;
      var v873 = arrayOfRestrictionFragments[i$$12];
      var v836 = v873.sequence;
      var v782 = v836.length;
      var v691 = v782 - lookAhead$$1;
      var v837 = arrayOfRestrictionFragments[i$$12];
      var v783 = v837.sequence;
      var v692 = v783.length;
      var v545 = JAM.call(v690.substring, v690, [v691, v692], JAM.policy.p27);
      var v693 = arrayOfRestrictionFragments[i$$12];
      var v546 = v693.sequence;
      var v287 = v545 + v546;
      var v694 = arrayOfRestrictionFragments[i$$12];
      var v547 = v694.sequence;
      var v288 = JAM.call(v547.substring, v547, [0, lookAhead$$1], JAM.policy.p13);
      var extendedSequence = v287 + v288;
      lowerLimit$$1 = 0 + shiftValue$$1;
      var v695 = arrayOfRestrictionFragments[i$$12];
      var v548 = v695.sequence;
      var v289 = v548.length;
      upperLimit$$1 = v289 + shiftValue$$1;
      var v293 = matchArray$$2 = JAM.call(matchExp$$2.exec, matchExp$$2, [extendedSequence], JAM.policy.p18);
      for (;v293;) {
        matchPosition$$1 = matchExp$$2.lastIndex;
        matchPosition$$1 = matchPosition$$1 - cutDistance$$1;
        var v549 = matchPosition$$1 >= lowerLimit$$1;
        if (v549) {
          v549 = matchPosition$$1 < upperLimit$$1;
        }
        var v291 = v549;
        if (v291) {
          var v290 = matchPosition$$1 - shiftValue$$1;
          JAM.call(positions.push, positions, [v290], JAM.policy.p17);
          wasCut = true;
        }
        var v550 = matchExp$$2.lastIndex;
        var v696 = RegExp.lastMatch;
        var v551 = v696.length;
        var v292 = v550 - v551;
        matchExp$$2.lastIndex = v292 + 1;
        v293 = matchArray$$2 = JAM.call(matchExp$$2.exec, matchExp$$2, [extendedSequence], JAM.policy.p18);
      }
    } else {
      var v697 = arrayOfRestrictionFragments[i$$12];
      var v552 = v697.sequence;
      var v295 = matchArray$$2 = JAM.call(matchExp$$2.exec, matchExp$$2, [v552], JAM.policy.p18);
      for (;v295;) {
        matchPosition$$1 = matchExp$$2.lastIndex;
        matchPosition$$1 = matchPosition$$1 - cutDistance$$1;
        JAM.call(positions.push, positions, [matchPosition$$1], JAM.policy.p17);
        wasCut = true;
        var v553 = matchExp$$2.lastIndex;
        var v698 = RegExp.lastMatch;
        var v554 = v698.length;
        var v294 = v553 - v554;
        matchExp$$2.lastIndex = v294 + 1;
        var v699 = arrayOfRestrictionFragments[i$$12];
        var v555 = v699.sequence;
        v295 = matchArray$$2 = JAM.call(matchExp$$2.exec, matchExp$$2, [v555], JAM.policy.p18);
      }
    }
    var v327 = !wasCut;
    if (v327) {
      var v297 = arrayOfRestrictionFragments[i$$12];
      JAM.call(newFragments.push, newFragments, [v297], JAM.policy.p18);
    } else {
      wasCut = false;
      previousCutPosition = 0;
      var v298 = arrayOfRestrictionFragments[i$$12];
      previousEnzyme = v298.startEnzyme;
      var v299 = arrayOfRestrictionFragments[i$$12];
      previousStartPosition = v299.start;
      var j$$10 = 0;
      var v556 = positions.length;
      var v326 = j$$10 < v556;
      for (;v326;) {
        var v700 = arrayOfRestrictionFragments[i$$12];
        var v557 = v700.topology;
        var v309 = v557 == "circular";
        if (v309) {
          var v300 = arrayOfRestrictionFragments[i$$12];
          v300.topology = "linear";
          var v558 = arrayOfRestrictionFragments[i$$12];
          var v301 = v558.sourceName;
          var v701 = arrayOfRestrictionFragments[i$$12];
          var v559 = v701.sequence;
          var v560 = positions[j$$10];
          var v302 = JAM.call(v559.substring, v559, [previousCutPosition, v560], JAM.policy.p27);
          var v874 = arrayOfRestrictionFragments[i$$12];
          var v838 = v874.sequence;
          var v839 = positions[j$$10];
          var v784 = JAM.call(v838.substring, v838, [previousCutPosition, v839], JAM.policy.p27);
          var v702 = v784.length;
          var v561 = previousStartPosition + v702;
          var v303 = v561 - 1;
          var v562 = arrayOfRestrictionFragments[i$$12];
          var v304 = v562.originalLength;
          startRestrictionFragment = new RestrictionFragment("linear", v301, v302, previousStartPosition, v303, previousEnzyme, enzymeName, v304);
        } else {
          var v563 = arrayOfRestrictionFragments[i$$12];
          var v305 = v563.sourceName;
          var v703 = arrayOfRestrictionFragments[i$$12];
          var v564 = v703.sequence;
          var v565 = positions[j$$10];
          var v306 = JAM.call(v564.substring, v564, [previousCutPosition, v565], JAM.policy.p27);
          var v875 = arrayOfRestrictionFragments[i$$12];
          var v840 = v875.sequence;
          var v841 = positions[j$$10];
          var v785 = JAM.call(v840.substring, v840, [previousCutPosition, v841], JAM.policy.p27);
          var v704 = v785.length;
          var v566 = previousStartPosition + v704;
          var v307 = v566 - 1;
          var v567 = arrayOfRestrictionFragments[i$$12];
          var v308 = v567.originalLength;
          restrictionFragmentOne = new RestrictionFragment("linear", v305, v306, previousStartPosition, v307, previousEnzyme, enzymeName, v308);
          JAM.call(newFragments.push, newFragments, [restrictionFragmentOne], JAM.policy.p18);
        }
        var v705 = positions.length;
        var v568 = v705 - 1;
        var v323 = j$$10 == v568;
        if (v323) {
          var v322 = startRestrictionFragment == null;
          if (v322) {
            var v569 = arrayOfRestrictionFragments[i$$12];
            var v310 = v569.sourceName;
            var v706 = arrayOfRestrictionFragments[i$$12];
            var v570 = v706.sequence;
            var v571 = positions[j$$10];
            var v786 = arrayOfRestrictionFragments[i$$12];
            var v707 = v786.sequence;
            var v572 = v707.length;
            var v311 = JAM.call(v570.substring, v570, [v571, v572], JAM.policy.p27);
            var v842 = arrayOfRestrictionFragments[i$$12];
            var v787 = v842.sequence;
            var v788 = positions[j$$10];
            var v708 = JAM.call(v787.substring, v787, [previousCutPosition, v788], JAM.policy.p27);
            var v573 = v708.length;
            var v312 = previousStartPosition + v573;
            var v574 = arrayOfRestrictionFragments[i$$12];
            var v313 = v574.stop;
            var v575 = arrayOfRestrictionFragments[i$$12];
            var v314 = v575.stopEnzyme;
            var v576 = arrayOfRestrictionFragments[i$$12];
            var v315 = v576.originalLength;
            restrictionFragmentTwo = new RestrictionFragment("linear", v310, v311, v312, v313, enzymeName, v314, v315);
            JAM.call(newFragments.push, newFragments, [restrictionFragmentTwo], JAM.policy.p18);
          } else {
            var v577 = arrayOfRestrictionFragments[i$$12];
            var v316 = v577.sourceName;
            var v789 = arrayOfRestrictionFragments[i$$12];
            var v709 = v789.sequence;
            var v710 = positions[j$$10];
            var v843 = arrayOfRestrictionFragments[i$$12];
            var v790 = v843.sequence;
            var v711 = v790.length;
            var v578 = JAM.call(v709.substring, v709, [v710, v711], JAM.policy.p27);
            var v579 = startRestrictionFragment.sequence;
            var v317 = v578 + v579;
            var v844 = arrayOfRestrictionFragments[i$$12];
            var v791 = v844.sequence;
            var v792 = positions[j$$10];
            var v712 = JAM.call(v791.substring, v791, [previousCutPosition, v792], JAM.policy.p27);
            var v580 = v712.length;
            var v318 = previousStartPosition + v580;
            var v319 = startRestrictionFragment.stop;
            var v320 = startRestrictionFragment.stopEnzyme;
            var v581 = arrayOfRestrictionFragments[i$$12];
            var v321 = v581.originalLength;
            restrictionFragmentTwo = new RestrictionFragment("linear", v316, v317, v318, v319, enzymeName, v320, v321);
            JAM.call(newFragments.push, newFragments, [restrictionFragmentTwo], JAM.policy.p18);
          }
        }
        previousCutPosition = positions[j$$10];
        previousEnzyme = enzymeName;
        var v582 = arrayOfRestrictionFragments[i$$12];
        var v324 = v582.start;
        var v325 = positions[j$$10];
        previousStartPosition = v324 + v325;
        j$$10++;
        var v583 = positions.length;
        v326 = j$$10 < v583;
      }
    }
    positions = new Array;
    startRestrictionFragment = null;
    i$$12++;
    var v584 = arrayOfRestrictionFragments.length;
    v328 = i$$12 < v584;
  }
  return newFragments;
}
function restrictionFragmentSorter(a, b) {
  var v713 = a.sequence;
  var v585 = v713.length;
  var v714 = b.sequence;
  var v586 = v714.length;
  var v329 = v585 < v586;
  if (v329) {
    return 1;
  }
  var v715 = a.sequence;
  var v587 = v715.length;
  var v716 = b.sequence;
  var v588 = v716.length;
  var v330 = v587 > v588;
  if (v330) {
    return-1;
  }
  var v717 = a.sequence;
  var v589 = v717.length;
  var v718 = b.sequence;
  var v590 = v718.length;
  var v333 = v589 == v590;
  if (v333) {
    var v591 = a.start;
    var v592 = b.start;
    var v331 = v591 < v592;
    if (v331) {
      return-1;
    }
    var v593 = a.start;
    var v594 = b.start;
    var v332 = v593 > v594;
    if (v332) {
      return 1;
    } else {
      return 0;
    }
  }
  return;
}
function writeFragment(topology$$1) {
  var v595 = this.topology;
  var v338 = v595 == "linear";
  if (v338) {
    var v334 = outputWindow.document;
    var v971 = this.sequence;
    var v968 = v971.length;
    var v963 = "&gt;" + v968;
    var v958 = v963 + " bp linear fragment from ";
    var v953 = v958 + topology$$1;
    var v944 = v953 + " parent ";
    var v945 = this.sourceName;
    var v936 = v944 + v945;
    var v925 = v936 + ", base ";
    var v926 = this.start;
    var v914 = v925 + v926;
    var v900 = v914 + " to base ";
    var v901 = this.stop;
    var v876 = v900 + v901;
    var v845 = v876 + " (";
    var v846 = this.startEnzyme;
    var v793 = v845 + v846;
    var v719 = v793 + " - ";
    var v720 = this.stopEnzyme;
    var v596 = v719 + v720;
    var v335 = v596 + ").\n";
    JAM.call(v334.write, v334, [v335], JAM.policy.p18);
  } else {
    var v336 = outputWindow.document;
    var v915 = this.sequence;
    var v902 = v915.length;
    var v877 = "&gt;" + v902;
    var v847 = v877 + " bp circular molecule from ";
    var v794 = v847 + topology$$1;
    var v721 = v794 + " parent ";
    var v722 = this.sourceName;
    var v597 = v721 + v722;
    var v337 = v597 + ".\n";
    JAM.call(v336.write, v336, [v337], JAM.policy.p18);
  }
  var v339 = outputWindow.document;
  var v723 = this.sequence;
  var v598 = addReturns(v723);
  var v340 = v598 + "\n\n";
  JAM.call(v339.write, v339, [v340], JAM.policy.p18);
  return;
}
function correctPositions() {
  var v599 = this.start;
  var v600 = this.originalLength;
  var v343 = v599 > v600;
  if (v343) {
    var v341 = this.start;
    var v342 = this.originalLength;
    this.start = v341 - v342;
  }
  var v601 = this.stop;
  var v602 = this.originalLength;
  var v346 = v601 > v602;
  if (v346) {
    var v344 = this.stop;
    var v345 = this.originalLength;
    this.stop = v344 - v345;
  }
  var v603 = this.stop;
  var v347 = v603 == 0;
  if (v347) {
    this.stop = this.originalLength;
  }
  return;
}
function RestrictionFragment(topology$$2, sourceName, sequence$$18, start$$4, stop, startEnzyme, stopEnzyme, originalLength$$1) {
  this.topology = topology$$2;
  this.sourceName = sourceName;
  this.sequence = sequence$$18;
  this.start = start$$4;
  this.stop = stop;
  this.startEnzyme = startEnzyme;
  this.stopEnzyme = stopEnzyme;
  this.originalLength = originalLength$$1;
  return;
}
new RestrictionFragment("", "", "", 0, 0, "", "", 0);
var v348 = RestrictionFragment.prototype;
v348.writeFragment = writeFragment;
var v349 = RestrictionFragment.prototype;
v349.correctPositions = correctPositions;
JAM.set(document, "onload", v2);
var v350 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p12);
JAM.set(v350, "onclick", v3);
var v351 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p12);
JAM.set(v351, "onclick", v4)
