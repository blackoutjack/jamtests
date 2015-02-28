
JAM.startProfile('load');
function v4() {
  var v721 = document.forms;
  var v602 = v721[0];
  var v350 = v602.elements;
  var v5 = v350[0];
  v5.value = " ";
  return;
}
function v3() {
  try {
    restDigest();
  } catch (e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    alert(v6);
  }
  return;
}
function v2() {
  var v351 = document.main_form;
  var v7 = v351.main_submit;
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
  var v352 = arrayOfSequences.length;
  var v9 = v352 < 2;
  if (v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v353 = arrayOfTitles.length;
  var v11 = i$$1 < v353;
  for (;v11;) {
    var v792 = arrayOfTitles[i$$1];
    var v722 = JAM.call(v792.search, v792, [/\S/], JAM.policy.p17);
    var v603 = v722 == -1;
    var v724 = !v603;
    if (v724) {
      var v793 = arrayOfSequences[i$$1];
      var v723 = JAM.call(v793.search, v793, [/\S/], JAM.policy.p17);
      v603 = v723 == -1;
    }
    var v354 = v603;
    var v605 = !v354;
    if (v605) {
      var v725 = arrayOfSequences[i$$1];
      var v604 = v725.length;
      v354 = v604 != lengthOfAlign;
    }
    var v10 = v354;
    if (v10) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v355 = arrayOfTitles.length;
    v11 = i$$1 < v355;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v845 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p17);
  var v794 = v845 == -1;
  var v847 = !v794;
  if (v847) {
    var v846 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p17);
    v794 = v846 == -1;
  }
  var v726 = v794;
  var v796 = !v726;
  if (v796) {
    var v795 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p17);
    v726 = v795 == -1;
  }
  var v606 = v726;
  var v728 = !v606;
  if (v728) {
    var v727 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p17);
    v606 = v727 == -1;
  }
  var v356 = v606;
  var v608 = !v356;
  if (v608) {
    var v607 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p17);
    v356 = v607 == -1;
  }
  var v12 = v356;
  if (v12) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v609 = formElement.value;
  var v357 = JAM.call(v609.search, v609, [/\S/], JAM.policy.p17);
  var v13 = v357 == -1;
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
  var v358 = arrayOfPatterns.length;
  var v16 = z$$2 < v358;
  for (;v16;) {
    var v610 = arrayOfPatterns[z$$2];
    var v359 = JAM.call(v610.search, v610, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p17);
    var v14 = v359 == -1;
    if (v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v611 = arrayOfPatterns[z$$2];
    var v360 = moreExpressionCheck(v611);
    var v15 = v360 == false;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v361 = arrayOfPatterns.length;
    v16 = z$$2 < v361;
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v362 = arrayOfPatterns.length;
  var v22 = j < v362;
  for (;v22;) {
    var v612 = arrayOfPatterns[j];
    var v363 = JAM.call(v612.match, v612, [/\/.+\//], JAM.policy.p17);
    var v19 = v363 + "gi";
    if (JAM.isEval(eval)) {
      var v970 = eval("introspect(JAM.policy.pFull) { " + v19 + " }")
    } else {
      var v970 = JAM.call(eval, null, [v19])
    }
    geneticCodeMatchExp[j] = v970;
    var v364 = arrayOfPatterns[j];
    var v20 = JAM.call(v364.match, v364, [/=[a-zA-Z\*]/], JAM.policy.p17);
    var v971 = v20.toString();
    geneticCodeMatchResult[j] = v971;
    var v21 = geneticCodeMatchResult[j];
    var v972 = JAM.call(v21.replace, v21, [/=/g, ""], JAM.policy.p15);
    geneticCodeMatchResult[j] = v972;
    j++;
    var v365 = arrayOfPatterns.length;
    v22 = j < v365;
  }
  var i$$2 = 0;
  var v613 = testSequence.length;
  var v366 = v613 - 3;
  var v29 = i$$2 <= v366;
  for (;v29;) {
    var v23 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v23], JAM.policy.p15);
    j = 0;
    var v367 = geneticCodeMatchExp.length;
    var v27 = j < v367;
    for (;v27;) {
      var v614 = geneticCodeMatchExp[j];
      var v368 = JAM.call(codon.search, codon, [v614], JAM.policy.p18);
      var v26 = v368 != -1;
      if (v26) {
        var v25 = oneMatch == true;
        if (v25) {
          var v369 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v24 = v369 + ".";
          alert(v24);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v370 = geneticCodeMatchExp.length;
      v27 = j < v370;
    }
    var v28 = oneMatch == false;
    if (v28) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v615 = testSequence.length;
    var v371 = v615 - 3;
    v29 = i$$2 <= v371;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v372 = arrayOfPatterns$$1.length;
  var v31 = z$$3 < v372;
  for (;v31;) {
    var v616 = arrayOfPatterns$$1[z$$3];
    var v373 = JAM.call(v616.search, v616, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p17);
    var v30 = v373 != -1;
    if (v30) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v374 = arrayOfPatterns$$1.length;
    v31 = z$$3 < v374;
  }
  var i$$3 = 0;
  var v375 = arrayOfPatterns$$1.length;
  var v35 = i$$3 < v375;
  for (;v35;) {
    var v617 = arrayOfPatterns$$1[i$$3];
    var v376 = "[" + v617;
    var v32 = v376 + "]";
    var re = new RegExp(v32, "gi");
    var j$$1 = i$$3 + 1;
    var v377 = arrayOfPatterns$$1.length;
    var v34 = j$$1 < v377;
    for (;v34;) {
      var v618 = arrayOfPatterns$$1[j$$1];
      var v378 = JAM.call(v618.search, v618, [re], JAM.policy.p18);
      var v33 = v378 != -1;
      if (v33) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v379 = arrayOfPatterns$$1.length;
      v34 = j$$1 < v379;
    }
    i$$3++;
    var v380 = arrayOfPatterns$$1.length;
    v35 = i$$3 < v380;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v381 = arrayOfPatterns$$2.length;
  var v38 = z$$4 < v381;
  for (;v38;) {
    var v619 = arrayOfPatterns$$2[z$$4];
    var v382 = JAM.call(v619.search, v619, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p17);
    var v36 = v382 == -1;
    if (v36) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v620 = arrayOfPatterns$$2[z$$4];
    var v383 = moreExpressionCheck(v620);
    var v37 = v383 == false;
    if (v37) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v384 = arrayOfPatterns$$2.length;
    v38 = z$$4 < v384;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v729 = getSequenceFromFasta(text$$7);
  var v621 = JAM.call(v729.replace, v729, [/[^A-Za-z]/g, ""], JAM.policy.p15);
  var v385 = v621.length;
  var v40 = v385 > maxInput;
  if (v40) {
    var v386 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v39 = v386 + " characters.";
    alert(v39);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v387 = text$$8.length;
  var v42 = v387 > maxInput$$1;
  if (v42) {
    var v388 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v41 = v388 + " characters.";
    alert(v41);
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
  var v389 = alignArray.length;
  var v49 = v389 < 3;
  if (v49) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v390 = alignArray.length;
  var v51 = i$$4 < v390;
  for (;v51;) {
    var v622 = alignArray[i$$4];
    var v391 = JAM.call(v622.search, v622, [/[^\s]+\s/], JAM.policy.p17);
    var v50 = v391 == -1;
    if (v50) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v392 = alignArray.length;
    v51 = i$$4 < v392;
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
  var v393 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p17);
  var v54 = v393 != -1;
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
  var v394 = sequence$$2.length;
  var v55 = "&gt;results for " + v394;
  var stringToReturn = v55 + " residue sequence ";
  var v395 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p17);
  var v57 = v395 != -1;
  if (v57) {
    var v396 = stringToReturn + '"';
    var v56 = v396 + fastaSequenceTitle;
    stringToReturn = v56 + '"';
  }
  var v397 = stringToReturn + ' starting "';
  var v398 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p13);
  var v58 = v397 + v398;
  stringToReturn = v58 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v399 = sequenceOne.length;
  var v59 = "Search results for " + v399;
  var stringToReturn$$1 = v59 + " residue sequence ";
  var v400 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p17);
  var v61 = v400 != -1;
  if (v61) {
    var v401 = stringToReturn$$1 + '"';
    var v60 = v401 + fastaSequenceTitleOne;
    stringToReturn$$1 = v60 + '"';
  }
  var v402 = stringToReturn$$1 + ' starting "';
  var v403 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p13);
  var v62 = v402 + v403;
  stringToReturn$$1 = v62 + '"\n';
  var v404 = stringToReturn$$1 + "and ";
  var v405 = sequenceTwo.length;
  var v63 = v404 + v405;
  stringToReturn$$1 = v63 + " residue sequence ";
  var v406 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p17);
  var v65 = v406 != -1;
  if (v65) {
    var v407 = stringToReturn$$1 + '"';
    var v64 = v407 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v64 + '"';
  }
  var v408 = stringToReturn$$1 + ' starting "';
  var v409 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p13);
  var v66 = v408 + v409;
  stringToReturn$$1 = v66 + '"';
  var v67 = '<div class="info">' + stringToReturn$$1;
  return v67 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v68 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v68);
  var j$$2 = 0;
  var v410 = arrayOfPatterns$$3.length;
  var v70 = j$$2 < v410;
  for (;v70;) {
    var v623 = arrayOfPatterns$$3[j$$2];
    var v411 = JAM.call(v623.match, v623, [/\/.+\//], JAM.policy.p17);
    var v69 = v411 + "gi";
    if (JAM.isEval(eval)) {
      var v973 = eval("introspect(JAM.policy.pFull) { " + v69 + " }")
    } else {
      var v973 = JAM.call(eval, null, [v69])
    }
    geneticCodeMatchExp$$1[j$$2] = v973;
    j$$2++;
    var v412 = arrayOfPatterns$$3.length;
    v70 = j$$2 < v412;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v71 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v71);
  var j$$3 = 0;
  var v413 = arrayOfPatterns$$4.length;
  var v74 = j$$3 < v413;
  for (;v74;) {
    var v414 = arrayOfPatterns$$4[j$$3];
    var v72 = JAM.call(v414.match, v414, [/=[a-zA-Z\*]/], JAM.policy.p17);
    var v974 = v72.toString();
    geneticCodeMatchResult$$1[j$$3] = v974;
    var v73 = geneticCodeMatchResult$$1[j$$3];
    var v975 = JAM.call(v73.replace, v73, [/=/g, ""], JAM.policy.p15);
    geneticCodeMatchResult$$1[j$$3] = v975;
    j$$3++;
    var v415 = arrayOfPatterns$$4.length;
    v74 = j$$3 < v415;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v416 = sequence$$3.length;
  var v75 = "Results for " + v416;
  var stringToReturn$$2 = v75 + " residue sequence ";
  var v417 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p17);
  var v77 = v417 != -1;
  if (v77) {
    var v418 = stringToReturn$$2 + '"';
    var v76 = v418 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v76 + '"';
  }
  var v419 = stringToReturn$$2 + ' starting "';
  var v420 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p13);
  var v78 = v419 + v420;
  stringToReturn$$2 = v78 + '"';
  var v79 = '<div class="info">' + stringToReturn$$2;
  return v79 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v624 = "Results for " + topology;
  var v421 = v624 + " ";
  var v422 = sequence$$4.length;
  var v80 = v421 + v422;
  var stringToReturn$$3 = v80 + " residue sequence ";
  var v423 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p17);
  var v82 = v423 != -1;
  if (v82) {
    var v424 = stringToReturn$$3 + '"';
    var v81 = v424 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v81 + '"';
  }
  var v425 = stringToReturn$$3 + ' starting "';
  var v426 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p13);
  var v83 = v425 + v426;
  stringToReturn$$3 = v83 + '"';
  var v84 = '<div class="info">' + stringToReturn$$3;
  return v84 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v427 = sequenceOne$$1.length;
  var v85 = "Alignment results for " + v427;
  var stringToReturn$$4 = v85 + " residue sequence ";
  var v428 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p17);
  var v87 = v428 != -1;
  if (v87) {
    var v429 = stringToReturn$$4 + '"';
    var v86 = v429 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v86 + '"';
  }
  var v430 = stringToReturn$$4 + ' starting "';
  var v431 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p13);
  var v88 = v430 + v431;
  stringToReturn$$4 = v88 + '"\n';
  var v432 = stringToReturn$$4 + "and ";
  var v433 = sequenceTwo$$1.length;
  var v89 = v432 + v433;
  stringToReturn$$4 = v89 + " residue sequence ";
  var v434 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p17);
  var v91 = v434 != -1;
  if (v91) {
    var v435 = stringToReturn$$4 + '"';
    var v90 = v435 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v90 + '"';
  }
  var v436 = stringToReturn$$4 + ' starting "';
  var v437 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p13);
  var v92 = v436 + v437;
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
    var v438 = Math.random();
    var v439 = components.length;
    var v94 = v438 * v439;
    tempNum = JAM.call(Math.floor, Math, [v94], JAM.policy.p17);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p18);
    j$$4++;
    v95 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p11);
}
function getSequenceFromFasta(sequenceRecord) {
  var v440 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p17);
  var v96 = v440 != -1;
  if (v96) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p15);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v441 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p17);
  var v98 = v441 != -1;
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
  var v943 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p17);
  var v934 = v943 != -1;
  var v945 = !v934;
  if (v945) {
    var v944 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p17);
    v934 = v944 != -1;
  }
  var v924 = v934;
  var v936 = !v924;
  if (v936) {
    var v935 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p17);
    v924 = v935 != -1;
  }
  var v913 = v924;
  var v926 = !v913;
  if (v926) {
    var v925 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p17);
    v913 = v925 != -1;
  }
  var v900 = v913;
  var v915 = !v900;
  if (v915) {
    var v914 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p17);
    v900 = v914 != -1;
  }
  var v875 = v900;
  var v902 = !v875;
  if (v902) {
    var v901 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p17);
    v875 = v901 != -1;
  }
  var v848 = v875;
  var v877 = !v848;
  if (v877) {
    var v876 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p17);
    v848 = v876 != -1;
  }
  var v797 = v848;
  var v850 = !v797;
  if (v850) {
    var v849 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p17);
    v797 = v849 != -1;
  }
  var v730 = v797;
  var v799 = !v730;
  if (v799) {
    var v798 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p17);
    v730 = v798 != -1;
  }
  var v625 = v730;
  var v732 = !v625;
  if (v732) {
    var v731 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p17);
    v625 = v731 != -1;
  }
  var v442 = v625;
  var v627 = !v442;
  if (v627) {
    var v626 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p17);
    v442 = v626 != -1;
  }
  var v99 = v442;
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
  var title$$6 = "Restriction Digest";
  _openWindow(title$$6);
  return;
}
function _openWindow(title$$7) {
  var isColor = true;
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  outputWindow.focus();
  var v104 = outputWindow.document;
  var v733 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v628 = v733 + "<head>\n";
  var v443 = v628 + "<title>Sequence Manipulation Suite</title>\n";
  var v105 = v443 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v104.write, v104, [v105], JAM.policy.p18);
  if (isColor) {
    var v106 = outputWindow.document;
    var v961 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v956 = v961 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v951 = v956 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v946 = v951 + "div.info {font-weight: bold}\n";
    var v937 = v946 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v927 = v937 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v916 = v927 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v903 = v916 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v878 = v903 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v851 = v878 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v800 = v851 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v734 = v800 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v629 = v734 + "td.many {color: #000000}\n";
    var v444 = v629 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v107 = v444 + "</style>\n";
    JAM.call(v106.write, v106, [v107], JAM.policy.p18);
  } else {
    var v108 = outputWindow.document;
    var v966 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v962 = v966 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v957 = v962 + "div.title {display: none}\n";
    var v952 = v957 + "div.info {font-weight: bold}\n";
    var v947 = v952 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v938 = v947 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v928 = v938 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v917 = v928 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v904 = v917 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v879 = v904 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v852 = v879 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v801 = v852 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v735 = v801 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v630 = v735 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v445 = v630 + "img {display: none}\n";
    var v109 = v445 + "</style>\n";
    JAM.call(v108.write, v108, [v109], JAM.policy.p18);
  }
  var v110 = outputWindow.document;
  var v736 = "</head>\n" + '<body class="main">\n';
  var v631 = v736 + '<div class="title">';
  var v446 = v631 + title$$7;
  var v111 = v446 + " results</div>\n";
  JAM.call(v110.write, v110, [v111], JAM.policy.p18);
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
  var v112 = outputWindow.document;
  var v737 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v632 = v737 + "<head>\n";
  var v447 = v632 + "<title>Sequence Manipulation Suite</title>\n";
  var v113 = v447 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v112.write, v112, [v113], JAM.policy.p18);
  if (isBackground) {
    var v114 = outputWindow.document;
    var v963 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v958 = v963 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v953 = v958 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v948 = v953 + "div.info {font-weight: bold}\n";
    var v939 = v948 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v929 = v939 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v918 = v929 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v905 = v918 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v880 = v905 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v853 = v880 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v802 = v853 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v738 = v802 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v633 = v738 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v448 = v633 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v115 = v448 + "</style>\n";
    JAM.call(v114.write, v114, [v115], JAM.policy.p18);
  } else {
    var v116 = outputWindow.document;
    var v969 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v967 = v969 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v964 = v967 + "div.title {display: none}\n";
    var v959 = v964 + "div.info {font-weight: bold}\n";
    var v954 = v959 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v949 = v954 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v940 = v949 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v930 = v940 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v919 = v930 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v906 = v919 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v881 = v906 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v854 = v881 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v803 = v854 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v739 = v803 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v634 = v739 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v449 = v634 + "img {display: none}\n";
    var v117 = v449 + "</style>\n";
    JAM.call(v116.write, v116, [v117], JAM.policy.p18);
  }
  var v118 = outputWindow.document;
  var v740 = "</head>\n" + '<body class="main">\n';
  var v635 = v740 + '<div class="title">';
  var v450 = v635 + title$$9;
  var v119 = v450 + " results</div>\n";
  JAM.call(v118.write, v118, [v119], JAM.policy.p18);
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
  var v451 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p17);
  var v120 = v451 != -1;
  if (v120) {
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
  var v452 = testArray[0];
  var v124 = v452 != testString;
  if (v124) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v453 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p18);
  var v125 = v453 == -1;
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
  var v454 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p10);
  var v128 = v454 != 2489.824;
  if (v128) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v455 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p10);
  var v129 = v455 != 2489.8;
  if (v129) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v456 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p17);
  var v130 = v456 == -1;
  if (v130) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v804 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p17);
  var v741 = v804 == -1;
  var v806 = !v741;
  if (v806) {
    var v805 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p17);
    v741 = v805 == -1;
  }
  var v636 = v741;
  var v743 = !v636;
  if (v743) {
    var v742 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p17);
    v636 = v742 == -1;
  }
  var v457 = v636;
  var v638 = !v457;
  if (v638) {
    var v637 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p17);
    v457 = v637 == -1;
  }
  var v131 = v457;
  if (v131) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v458 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p17);
  var v132 = v458 == -1;
  if (v132) {
    alert("Please enter a number.");
    return false;
  }
  var v134 = theNumber$$2 > maxInput$$2;
  if (v134) {
    var v459 = "Please enter a number less than or equal to " + maxInput$$2;
    var v133 = v459 + ".";
    alert(v133);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v460 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p17);
  var v135 = v460 != -1;
  if (v135) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v461 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p17);
  var v136 = v461 != -1;
  if (v136) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v807 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p17);
  var v744 = v807 == -1;
  var v809 = !v744;
  if (v809) {
    var v808 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p17);
    v744 = v808 == -1;
  }
  var v639 = v744;
  var v746 = !v639;
  if (v746) {
    var v745 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p17);
    v639 = v745 == -1;
  }
  var v462 = v639;
  var v641 = !v462;
  if (v641) {
    var v640 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p17);
    v462 = v640 == -1;
  }
  var v137 = v462;
  if (v137) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v810 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p17);
  var v747 = v810 == -1;
  var v812 = !v747;
  if (v812) {
    var v811 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p17);
    v747 = v811 == -1;
  }
  var v642 = v747;
  var v749 = !v642;
  if (v749) {
    var v748 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p17);
    v642 = v748 == -1;
  }
  var v463 = v642;
  var v644 = !v463;
  if (v644) {
    var v643 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p17);
    v463 = v643 == -1;
  }
  var v138 = v463;
  if (v138) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v464 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p17);
  var v139 = v464 == -1;
  if (v139) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v813 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p17);
  var v750 = v813 == -1;
  var v815 = !v750;
  if (v815) {
    var v814 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p17);
    v750 = v814 == -1;
  }
  var v645 = v750;
  var v752 = !v645;
  if (v752) {
    var v751 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p17);
    v645 = v751 == -1;
  }
  var v465 = v645;
  var v647 = !v465;
  if (v647) {
    var v646 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p17);
    v465 = v646 == -1;
  }
  var v140 = v465;
  if (v140) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v466 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p17);
  var v141 = v466 == -1;
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
    var v467 = basePerLine / groupSize;
    var v145 = j$$6 <= v467;
    for (;v145;) {
      var v144 = k < groupSize;
      for (;v144;) {
        var v468 = k + i$$5;
        var v143 = JAM.call(text$$10.charAt, text$$10, [v468], JAM.policy.p18);
        lineOfText = lineOfText + v143;
        k = k + 1;
        v144 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v469 = basePerLine / groupSize;
      v145 = j$$6 <= v469;
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
  writeGroupNumDnaSetStart(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition);
  return true;
}
function writeGroupNumDnaSetStart(text$$12, tabIn$$3, groupSize$$2, basePerLine$$2, startBase$$2, stopBase$$2, strands$$1, numberPosition$$1) {
  function adjustNumbering(original, adjustment) {
    var adjusted = original + adjustment;
    var v470 = adjustment < 0;
    if (v470) {
      v470 = adjusted >= 0;
    }
    var v149 = v470;
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
    var v471 = basePerLine$$2 / groupSize$$2;
    var v156 = j$$7 <= v471;
    for (;v156;) {
      var v152 = k$$1 < groupSize$$2;
      for (;v152;) {
        var v472 = i$$6 + k$$1;
        var v150 = v472 >= stopBase$$2;
        if (v150) {
          break;
        }
        var v473 = k$$1 + i$$6;
        var v151 = JAM.call(text$$12.charAt, text$$12, [v473], JAM.policy.p18);
        lineOfText$$1 = lineOfText$$1 + v151;
        k$$1 = k$$1 + 1;
        v152 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v154 = numberPosition$$1 == "above";
      if (v154) {
        var v474 = adjustNumbering(i$$6, numberingAdjustment);
        var v153 = rightNum(v474, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v153;
      }
      var v155 = i$$6 >= stopBase$$2;
      if (v155) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v475 = basePerLine$$2 / groupSize$$2;
      v156 = j$$7 <= v475;
    }
    var v179 = numberPosition$$1 == "left";
    if (v179) {
      var v157 = outputWindow.document;
      var v753 = adjustNumbering(lineNum, numberingAdjustment);
      var v648 = rightNum(v753, "", 8, tabIn$$3);
      var v476 = v648 + lineOfText$$1;
      var v158 = v476 + "\n";
      JAM.call(v157.write, v157, [v158], JAM.policy.p18);
      var v162 = strands$$1 == "two";
      if (v162) {
        var v159 = outputWindow.document;
        var v754 = adjustNumbering(lineNum, numberingAdjustment);
        var v649 = rightNum(v754, "", 8, tabIn$$3);
        var v650 = complement(lineOfText$$1);
        var v477 = v649 + v650;
        var v160 = v477 + "\n";
        JAM.call(v159.write, v159, [v160], JAM.policy.p18);
        var v161 = outputWindow.document;
        JAM.call(v161.write, v161, ["\n"], JAM.policy.p11);
      }
    } else {
      var v178 = numberPosition$$1 == "right";
      if (v178) {
        var v163 = outputWindow.document;
        var v651 = adjustNumbering(i$$6, numberingAdjustment);
        var v478 = lineOfText$$1 + v651;
        var v164 = v478 + "\n";
        JAM.call(v163.write, v163, [v164], JAM.policy.p18);
        var v168 = strands$$1 == "two";
        if (v168) {
          var v165 = outputWindow.document;
          var v652 = complement(lineOfText$$1);
          var v653 = adjustNumbering(i$$6, numberingAdjustment);
          var v479 = v652 + v653;
          var v166 = v479 + "\n";
          JAM.call(v165.write, v165, [v166], JAM.policy.p18);
          var v167 = outputWindow.document;
          JAM.call(v167.write, v167, ["\n"], JAM.policy.p11);
        }
      } else {
        var v177 = numberPosition$$1 == "above";
        if (v177) {
          var v169 = outputWindow.document;
          var v170 = aboveNum + "\n";
          JAM.call(v169.write, v169, [v170], JAM.policy.p18);
          var v171 = outputWindow.document;
          var v172 = lineOfText$$1 + "\n";
          JAM.call(v171.write, v171, [v172], JAM.policy.p18);
          var v176 = strands$$1 == "two";
          if (v176) {
            var v173 = outputWindow.document;
            var v480 = complement(lineOfText$$1);
            var v174 = v480 + "\n";
            JAM.call(v173.write, v173, [v174], JAM.policy.p18);
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
    var v481 = basePerLine$$3 / groupSize$$3;
    var v187 = j$$8 <= v481;
    for (;v187;) {
      var v183 = k$$2 < groupSize$$3;
      for (;v183;) {
        var v482 = i$$7 + k$$2;
        var v181 = v482 >= stopBase$$3;
        if (v181) {
          break;
        }
        var v483 = k$$2 + i$$7;
        var v182 = JAM.call(text$$13.charAt, text$$13, [v483], JAM.policy.p18);
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
      var v484 = basePerLine$$3 / groupSize$$3;
      v187 = j$$8 <= v484;
    }
    var v198 = numberPosition$$2 == "left";
    if (v198) {
      var v188 = outputWindow.document;
      var v654 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v485 = v654 + lineOfText$$2;
      var v189 = v485 + "\n";
      JAM.call(v188.write, v188, [v189], JAM.policy.p18);
    } else {
      var v197 = numberPosition$$2 == "right";
      if (v197) {
        var v190 = outputWindow.document;
        var v486 = lineOfText$$2 + i$$7;
        var v191 = v486 + "\n";
        JAM.call(v190.write, v190, [v191], JAM.policy.p18);
      } else {
        var v196 = numberPosition$$2 == "above";
        if (v196) {
          var v192 = outputWindow.document;
          var v193 = aboveNum$$1 + "\n";
          JAM.call(v192.write, v192, [v193], JAM.policy.p18);
          var v194 = outputWindow.document;
          var v195 = lineOfText$$2 + "\n";
          JAM.call(v194.write, v194, [v195], JAM.policy.p18);
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
  var v755 = sequence$$13.length;
  var v655 = v755 <= firstIndexToMutate;
  var v756 = !v655;
  if (v756) {
    v655 = lastIndexToMutate < 0;
  }
  var v487 = v655;
  var v656 = !v487;
  if (v656) {
    v487 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v200 = v487;
  if (v200) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v208 = i$$8 < numMut;
  for (;v208;) {
    maxNum = sequence$$13.length;
    var v488 = Math.random();
    var v201 = v488 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v201], JAM.policy.p17);
    var v489 = randNum < firstIndexToMutate;
    var v657 = !v489;
    if (v657) {
      v489 = randNum > lastIndexToMutate;
    }
    var v202 = v489;
    if (v202) {
      numMut++;
      i$$8++;
      v208 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p17);
    needNewChar = true;
    for (;needNewChar;) {
      var v490 = Math.random();
      var v491 = components$$1.length;
      var v203 = v490 * v491;
      componentsIndex = JAM.call(Math.round, Math, [v203], JAM.policy.p17);
      var v492 = components$$1.length;
      var v204 = componentsIndex == v492;
      if (v204) {
        componentsIndex = 0;
      }
      var v493 = components$$1[componentsIndex];
      var v205 = v493 != currentChar;
      if (v205) {
        needNewChar = false;
      }
    }
    var v494 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p13);
    var v495 = components$$1[componentsIndex];
    var v206 = v494 + v495;
    var v496 = randNum + 1;
    var v497 = sequence$$13.length;
    var v207 = JAM.call(sequence$$13.substring, sequence$$13, [v496, v497], JAM.policy.p27);
    sequence$$13 = v206 + v207;
    i$$8++;
    v208 = i$$8 < numMut;
  }
  var v209 = outputWindow.document;
  var v210 = addReturns(sequence$$13);
  JAM.call(v209.write, v209, [v210], JAM.policy.p18);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v215 = j$$9 < lengthOut$$1;
  for (;v215;) {
    var v498 = Math.random();
    var v499 = components$$2.length;
    var v211 = v498 * v499;
    tempNum$$1 = JAM.call(Math.floor, Math, [v211], JAM.policy.p17);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v500 = sequence$$14.length;
    var v214 = v500 == 60;
    if (v214) {
      var v212 = outputWindow.document;
      var v213 = sequence$$14 + "\n";
      JAM.call(v212.write, v212, [v213], JAM.policy.p18);
      sequence$$14 = "";
    }
    j$$9++;
    v215 = j$$9 < lengthOut$$1;
  }
  var v216 = outputWindow.document;
  var v217 = sequence$$14 + "\n";
  JAM.call(v216.write, v216, [v217], JAM.policy.p18);
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
    var v757 = sequence$$15.length;
    var v658 = v757 - lookAhead;
    var v659 = sequence$$15.length;
    var v501 = JAM.call(sequence$$15.substring, sequence$$15, [v658, v659], JAM.policy.p27);
    var v219 = v501 + sequence$$15;
    var v220 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    sequence$$15 = v219 + v220;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v222 = outputWindow.document;
  JAM.call(v222.write, v222, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p11);
  var v223 = outputWindow.document;
  var v758 = '<tr><td class="title" width="200px">' + "Site:";
  var v660 = v758 + '</td><td class="title">';
  var v502 = v660 + "Positions:";
  var v224 = v502 + "</td></tr>\n";
  JAM.call(v223.write, v223, [v224], JAM.policy.p18);
  var i$$9 = 0;
  var v503 = arrayOfItems.length;
  var v240 = i$$9 < v503;
  for (;v240;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v504 = arrayOfItems[i$$9];
    var v225 = JAM.call(v504.match, v504, [/\/.+\//], JAM.policy.p17);
    matchExp = v225 + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    var v759 = arrayOfItems[i$$9];
    var v661 = JAM.call(v759.match, v759, [/\)\D*\d+/], JAM.policy.p17);
    var v505 = v661.toString();
    var v226 = JAM.call(v505.replace, v505, [/\)\D*/, ""], JAM.policy.p15);
    cutDistance = parseFloat(v226);
    var v232 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p18);
    for (;v232;) {
      var v227 = matchExp.lastIndex;
      matchPosition = v227 - cutDistance;
      var v506 = matchPosition >= lowerLimit;
      if (v506) {
        v506 = matchPosition < upperLimit;
      }
      var v230 = v506;
      if (v230) {
        timesFound++;
        var v228 = tempString$$1 + ", ";
        var v507 = matchPosition - shiftValue;
        var v229 = v507 + 1;
        tempString$$1 = v228 + v229;
      }
      var v508 = matchExp.lastIndex;
      var v662 = RegExp.lastMatch;
      var v509 = v662.length;
      var v231 = v508 - v509;
      matchExp.lastIndex = v231 + 1;
      v232 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p18);
    }
    var v510 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p17);
    var v233 = v510 != -1;
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
    var v907 = '<tr><td class="' + backGroundClass;
    var v882 = v907 + '">';
    var v931 = arrayOfItems[i$$9];
    var v920 = JAM.call(v931.match, v931, [/\([^\(]+\)/], JAM.policy.p17);
    var v908 = v920.toString();
    var v883 = JAM.call(v908.replace, v908, [/\(|\)/g, ""], JAM.policy.p15);
    var v855 = v882 + v883;
    var v816 = v855 + '</td><td class="';
    var v760 = v816 + backGroundClass;
    var v663 = v760 + '">';
    var v511 = v663 + tempString$$1;
    var v239 = v511 + "</td></tr>\n";
    JAM.call(v238.write, v238, [v239], JAM.policy.p18);
    timesFound = 0;
    i$$9++;
    var v512 = arrayOfItems.length;
    v240 = i$$9 < v512;
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
  var v856 = '<tr><td class="title">' + "Pattern:";
  var v817 = v856 + '</td><td class="title">';
  var v761 = v817 + "Times found:";
  var v664 = v761 + '</td><td class="title">';
  var v513 = v664 + "Percentage:";
  var v244 = v513 + "</td></tr>\n";
  JAM.call(v243.write, v243, [v244], JAM.policy.p18);
  var i$$10 = 0;
  var v514 = arrayOfItems$$1.length;
  var v253 = i$$10 < v514;
  for (;v253;) {
    var tempNumber = 0;
    var v515 = arrayOfItems$$1[i$$10];
    var v245 = JAM.call(v515.match, v515, [/\/[^\/]+\//], JAM.policy.p17);
    var matchExp$$1 = v245 + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    var v516 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p18);
    var v247 = v516 != -1;
    if (v247) {
      var v246 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p18);
      tempNumber = v246.length;
    }
    var percentage = 0;
    var v665 = originalLength + 1;
    var v818 = arrayOfItems$$1[i$$10];
    var v762 = JAM.call(v818.match, v818, [/\d+/], JAM.policy.p17);
    var v666 = parseFloat(v762);
    var v517 = v665 - v666;
    var v250 = v517 > 0;
    if (v250) {
      var v248 = 100 * tempNumber;
      var v518 = originalLength + 1;
      var v763 = arrayOfItems$$1[i$$10];
      var v667 = JAM.call(v763.match, v763, [/\d+/], JAM.policy.p17);
      var v519 = parseFloat(v667);
      var v249 = v518 - v519;
      percentage = v248 / v249;
    }
    var v251 = outputWindow.document;
    var v932 = arrayOfItems$$1[i$$10];
    var v921 = JAM.call(v932.match, v932, [/\([^\(]+\)\b/], JAM.policy.p17);
    var v909 = v921.toString();
    var v884 = JAM.call(v909.replace, v909, [/\(|\)/g, ""], JAM.policy.p15);
    var v857 = "<tr><td>" + v884;
    var v819 = v857 + "</td><td>";
    var v764 = v819 + tempNumber;
    var v668 = v764 + "</td><td>";
    var v669 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p10);
    var v520 = v668 + v669;
    var v252 = v520 + "</td></tr>\n";
    JAM.call(v251.write, v251, [v252], JAM.policy.p18);
    i$$10++;
    var v521 = arrayOfItems$$1.length;
    v253 = i$$10 < v521;
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
  var v522 = sequence$$17.length;
  var v261 = v522 > 0;
  for (;v261;) {
    maxNum$$1 = sequence$$17.length;
    var v523 = Math.random();
    var v255 = v523 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v255], JAM.policy.p17);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p17);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p13);
    var v256 = randNum$$1 + 1;
    var v257 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v256, v257], JAM.policy.p15);
    sequence$$17 = tempString1 + tempString2;
    var v524 = tempSeq.length;
    var v260 = v524 == 60;
    if (v260) {
      var v258 = outputWindow.document;
      var v259 = tempSeq + "\n";
      JAM.call(v258.write, v258, [v259], JAM.policy.p18);
      tempSeq = "";
    }
    var v525 = sequence$$17.length;
    v261 = v525 > 0;
  }
  var v262 = outputWindow.document;
  var v263 = tempSeq + "\n";
  JAM.call(v262.write, v262, [v263], JAM.policy.p18);
  return true;
}
function restDigest() {
  var theDocument = document;
  var newDna = "";
  var maxInput$$3 = 1E5;
  var v526 = testScript();
  var v264 = v526 == false;
  if (v264) {
    return;
  }
  var restrictionFragments = new Array;
  var restrictionFragment;
  var v885 = theDocument.forms;
  var v858 = v885[0];
  var v820 = v858.elements;
  var v765 = v820[0];
  var v670 = checkFormElement(v765);
  var v527 = v670 == false;
  var v672 = !v527;
  if (v672) {
    var v910 = theDocument.forms;
    var v886 = v910[0];
    var v859 = v886.elements;
    var v821 = v859[0];
    var v766 = v821.value;
    var v671 = checkSequenceLength(v766, maxInput$$3);
    v527 = v671 == false;
  }
  var v265 = v527;
  if (v265) {
    return;
  }
  var v822 = theDocument.forms;
  var v767 = v822[0];
  var v673 = v767.elements;
  var v528 = v673[0];
  var v266 = v528.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v266);
  var i$$11 = 0;
  var v529 = arrayOfFasta$$1.length;
  var v272 = i$$11 < v529;
  for (;v272;) {
    var v267 = arrayOfFasta$$1[i$$11];
    newDna = getSequenceFromFasta(v267);
    var v268 = arrayOfFasta$$1[i$$11];
    title = getTitleFromFasta(v268);
    newDna = removeNonDna(newDna);
    var v887 = theDocument.forms;
    var v860 = v887[0];
    var v823 = v860.elements;
    var v768 = v823[4];
    var v674 = v768.options;
    var v888 = theDocument.forms;
    var v861 = v888[0];
    var v824 = v861.elements;
    var v769 = v824[4];
    var v675 = v769.selectedIndex;
    var v530 = v674[v675];
    var v269 = v530.value;
    var v270 = newDna.length;
    var v271 = newDna.length;
    restrictionFragment = new RestrictionFragment(v269, title, newDna, 1, v270, "sequence start", "sequence end", v271);
    JAM.call(restrictionFragments.push, restrictionFragments, [restrictionFragment], JAM.policy.p18);
    i$$11++;
    var v531 = arrayOfFasta$$1.length;
    v272 = i$$11 < v531;
  }
  var v889 = theDocument.forms;
  var v862 = v889[0];
  var v825 = v862.elements;
  var v770 = v825[5];
  var v676 = v770.options;
  var v890 = theDocument.forms;
  var v863 = v890[0];
  var v826 = v863.elements;
  var v771 = v826[5];
  var v677 = v771.selectedIndex;
  var v532 = v676[v677];
  var v273 = v532.value;
  restrictionFragments = digest(restrictionFragments, v273);
  var v891 = theDocument.forms;
  var v864 = v891[0];
  var v827 = v864.elements;
  var v772 = v827[6];
  var v678 = v772.options;
  var v892 = theDocument.forms;
  var v865 = v892[0];
  var v828 = v865.elements;
  var v773 = v828[6];
  var v679 = v773.selectedIndex;
  var v533 = v678[v679];
  var v274 = v533.value;
  restrictionFragments = digest(restrictionFragments, v274);
  var v893 = theDocument.forms;
  var v866 = v893[0];
  var v829 = v866.elements;
  var v774 = v829[7];
  var v680 = v774.options;
  var v894 = theDocument.forms;
  var v867 = v894[0];
  var v830 = v867.elements;
  var v775 = v830[7];
  var v681 = v775.selectedIndex;
  var v534 = v680[v681];
  var v275 = v534.value;
  restrictionFragments = digest(restrictionFragments, v275);
  JAM.call(restrictionFragments.sort, restrictionFragments, [restrictionFragmentSorter], JAM.policy.p18);
  openWindow();
  openPre();
  i$$11 = 0;
  var v535 = restrictionFragments.length;
  var v279 = i$$11 < v535;
  for (;v279;) {
    var v276 = restrictionFragments[i$$11];
    v276.correctPositions();
    var v277 = restrictionFragments[i$$11];
    var v895 = theDocument.forms;
    var v868 = v895[0];
    var v831 = v868.elements;
    var v776 = v831[4];
    var v682 = v776.options;
    var v896 = theDocument.forms;
    var v869 = v896[0];
    var v832 = v869.elements;
    var v777 = v832[4];
    var v683 = v777.selectedIndex;
    var v536 = v682[v683];
    var v278 = v536.value;
    JAM.call(v277.writeFragment, v277, [v278], JAM.policy.p18);
    i$$11++;
    var v537 = restrictionFragments.length;
    v279 = i$$11 < v537;
  }
  closePre();
  closeWindow();
  return;
}
function digest(arrayOfRestrictionFragments, enzyme) {
  var v280 = enzyme == "";
  if (v280) {
    return arrayOfRestrictionFragments;
  }
  var newFragments = new Array;
  var positions = new Array;
  var matchPosition$$1 = 0;
  var v281 = JAM.call(enzyme.match, enzyme, [/\/.+\//], JAM.policy.p17);
  var matchExp$$2 = v281.toString();
  matchExp$$2 = JAM.call(matchExp$$2.replace, matchExp$$2, [/\//g, ""], JAM.policy.p15);
  matchExp$$2 = new RegExp(matchExp$$2, "gi");
  var v684 = JAM.call(enzyme.match, enzyme, [/\)\D*\d+/], JAM.policy.p17);
  var v538 = v684.toString();
  var v282 = JAM.call(v538.replace, v538, [/\)\D*/, ""], JAM.policy.p15);
  var cutDistance$$1 = parseInt(v282);
  var v539 = JAM.call(enzyme.match, enzyme, [/\([^\(]+\)/], JAM.policy.p17);
  var v283 = v539.toString();
  var enzymeName = JAM.call(v283.replace, v283, [/\(|\)/g, ""], JAM.policy.p15);
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
  var v540 = arrayOfRestrictionFragments.length;
  var v326 = i$$12 < v540;
  for (;v326;) {
    var v685 = arrayOfRestrictionFragments[i$$12];
    var v541 = v685.topology;
    var v294 = v541 == "circular";
    if (v294) {
      var v686 = arrayOfRestrictionFragments[i$$12];
      var v542 = v686.sequence;
      var v284 = JAM.call(v542.substring, v542, [0, lookAhead$$1], JAM.policy.p13);
      shiftValue$$1 = v284.length;
      var v778 = arrayOfRestrictionFragments[i$$12];
      var v687 = v778.sequence;
      var v870 = arrayOfRestrictionFragments[i$$12];
      var v833 = v870.sequence;
      var v779 = v833.length;
      var v688 = v779 - lookAhead$$1;
      var v834 = arrayOfRestrictionFragments[i$$12];
      var v780 = v834.sequence;
      var v689 = v780.length;
      var v543 = JAM.call(v687.substring, v687, [v688, v689], JAM.policy.p27);
      var v690 = arrayOfRestrictionFragments[i$$12];
      var v544 = v690.sequence;
      var v285 = v543 + v544;
      var v691 = arrayOfRestrictionFragments[i$$12];
      var v545 = v691.sequence;
      var v286 = JAM.call(v545.substring, v545, [0, lookAhead$$1], JAM.policy.p13);
      var extendedSequence = v285 + v286;
      lowerLimit$$1 = 0 + shiftValue$$1;
      var v692 = arrayOfRestrictionFragments[i$$12];
      var v546 = v692.sequence;
      var v287 = v546.length;
      upperLimit$$1 = v287 + shiftValue$$1;
      var v291 = matchArray$$2 = JAM.call(matchExp$$2.exec, matchExp$$2, [extendedSequence], JAM.policy.p18);
      for (;v291;) {
        matchPosition$$1 = matchExp$$2.lastIndex;
        matchPosition$$1 = matchPosition$$1 - cutDistance$$1;
        var v547 = matchPosition$$1 >= lowerLimit$$1;
        if (v547) {
          v547 = matchPosition$$1 < upperLimit$$1;
        }
        var v289 = v547;
        if (v289) {
          var v288 = matchPosition$$1 - shiftValue$$1;
          JAM.call(positions.push, positions, [v288], JAM.policy.p17);
          wasCut = true;
        }
        var v548 = matchExp$$2.lastIndex;
        var v693 = RegExp.lastMatch;
        var v549 = v693.length;
        var v290 = v548 - v549;
        matchExp$$2.lastIndex = v290 + 1;
        v291 = matchArray$$2 = JAM.call(matchExp$$2.exec, matchExp$$2, [extendedSequence], JAM.policy.p18);
      }
    } else {
      var v694 = arrayOfRestrictionFragments[i$$12];
      var v550 = v694.sequence;
      var v293 = matchArray$$2 = JAM.call(matchExp$$2.exec, matchExp$$2, [v550], JAM.policy.p18);
      for (;v293;) {
        matchPosition$$1 = matchExp$$2.lastIndex;
        matchPosition$$1 = matchPosition$$1 - cutDistance$$1;
        JAM.call(positions.push, positions, [matchPosition$$1], JAM.policy.p17);
        wasCut = true;
        var v551 = matchExp$$2.lastIndex;
        var v695 = RegExp.lastMatch;
        var v552 = v695.length;
        var v292 = v551 - v552;
        matchExp$$2.lastIndex = v292 + 1;
        var v696 = arrayOfRestrictionFragments[i$$12];
        var v553 = v696.sequence;
        v293 = matchArray$$2 = JAM.call(matchExp$$2.exec, matchExp$$2, [v553], JAM.policy.p18);
      }
    }
    var v325 = !wasCut;
    if (v325) {
      var v295 = arrayOfRestrictionFragments[i$$12];
      JAM.call(newFragments.push, newFragments, [v295], JAM.policy.p18);
    } else {
      wasCut = false;
      previousCutPosition = 0;
      var v296 = arrayOfRestrictionFragments[i$$12];
      previousEnzyme = v296.startEnzyme;
      var v297 = arrayOfRestrictionFragments[i$$12];
      previousStartPosition = v297.start;
      var j$$10 = 0;
      var v554 = positions.length;
      var v324 = j$$10 < v554;
      for (;v324;) {
        var v697 = arrayOfRestrictionFragments[i$$12];
        var v555 = v697.topology;
        var v307 = v555 == "circular";
        if (v307) {
          var v298 = arrayOfRestrictionFragments[i$$12];
          v298.topology = "linear";
          var v556 = arrayOfRestrictionFragments[i$$12];
          var v299 = v556.sourceName;
          var v698 = arrayOfRestrictionFragments[i$$12];
          var v557 = v698.sequence;
          var v558 = positions[j$$10];
          var v300 = JAM.call(v557.substring, v557, [previousCutPosition, v558], JAM.policy.p27);
          var v871 = arrayOfRestrictionFragments[i$$12];
          var v835 = v871.sequence;
          var v836 = positions[j$$10];
          var v781 = JAM.call(v835.substring, v835, [previousCutPosition, v836], JAM.policy.p27);
          var v699 = v781.length;
          var v559 = previousStartPosition + v699;
          var v301 = v559 - 1;
          var v560 = arrayOfRestrictionFragments[i$$12];
          var v302 = v560.originalLength;
          startRestrictionFragment = new RestrictionFragment("linear", v299, v300, previousStartPosition, v301, previousEnzyme, enzymeName, v302);
        } else {
          var v561 = arrayOfRestrictionFragments[i$$12];
          var v303 = v561.sourceName;
          var v700 = arrayOfRestrictionFragments[i$$12];
          var v562 = v700.sequence;
          var v563 = positions[j$$10];
          var v304 = JAM.call(v562.substring, v562, [previousCutPosition, v563], JAM.policy.p27);
          var v872 = arrayOfRestrictionFragments[i$$12];
          var v837 = v872.sequence;
          var v838 = positions[j$$10];
          var v782 = JAM.call(v837.substring, v837, [previousCutPosition, v838], JAM.policy.p27);
          var v701 = v782.length;
          var v564 = previousStartPosition + v701;
          var v305 = v564 - 1;
          var v565 = arrayOfRestrictionFragments[i$$12];
          var v306 = v565.originalLength;
          restrictionFragmentOne = new RestrictionFragment("linear", v303, v304, previousStartPosition, v305, previousEnzyme, enzymeName, v306);
          JAM.call(newFragments.push, newFragments, [restrictionFragmentOne], JAM.policy.p18);
        }
        var v702 = positions.length;
        var v566 = v702 - 1;
        var v321 = j$$10 == v566;
        if (v321) {
          var v320 = startRestrictionFragment == null;
          if (v320) {
            var v567 = arrayOfRestrictionFragments[i$$12];
            var v308 = v567.sourceName;
            var v703 = arrayOfRestrictionFragments[i$$12];
            var v568 = v703.sequence;
            var v569 = positions[j$$10];
            var v783 = arrayOfRestrictionFragments[i$$12];
            var v704 = v783.sequence;
            var v570 = v704.length;
            var v309 = JAM.call(v568.substring, v568, [v569, v570], JAM.policy.p27);
            var v839 = arrayOfRestrictionFragments[i$$12];
            var v784 = v839.sequence;
            var v785 = positions[j$$10];
            var v705 = JAM.call(v784.substring, v784, [previousCutPosition, v785], JAM.policy.p27);
            var v571 = v705.length;
            var v310 = previousStartPosition + v571;
            var v572 = arrayOfRestrictionFragments[i$$12];
            var v311 = v572.stop;
            var v573 = arrayOfRestrictionFragments[i$$12];
            var v312 = v573.stopEnzyme;
            var v574 = arrayOfRestrictionFragments[i$$12];
            var v313 = v574.originalLength;
            restrictionFragmentTwo = new RestrictionFragment("linear", v308, v309, v310, v311, enzymeName, v312, v313);
            JAM.call(newFragments.push, newFragments, [restrictionFragmentTwo], JAM.policy.p18);
          } else {
            var v575 = arrayOfRestrictionFragments[i$$12];
            var v314 = v575.sourceName;
            var v786 = arrayOfRestrictionFragments[i$$12];
            var v706 = v786.sequence;
            var v707 = positions[j$$10];
            var v840 = arrayOfRestrictionFragments[i$$12];
            var v787 = v840.sequence;
            var v708 = v787.length;
            var v576 = JAM.call(v706.substring, v706, [v707, v708], JAM.policy.p27);
            var v577 = startRestrictionFragment.sequence;
            var v315 = v576 + v577;
            var v841 = arrayOfRestrictionFragments[i$$12];
            var v788 = v841.sequence;
            var v789 = positions[j$$10];
            var v709 = JAM.call(v788.substring, v788, [previousCutPosition, v789], JAM.policy.p27);
            var v578 = v709.length;
            var v316 = previousStartPosition + v578;
            var v317 = startRestrictionFragment.stop;
            var v318 = startRestrictionFragment.stopEnzyme;
            var v579 = arrayOfRestrictionFragments[i$$12];
            var v319 = v579.originalLength;
            restrictionFragmentTwo = new RestrictionFragment("linear", v314, v315, v316, v317, enzymeName, v318, v319);
            JAM.call(newFragments.push, newFragments, [restrictionFragmentTwo], JAM.policy.p18);
          }
        }
        previousCutPosition = positions[j$$10];
        previousEnzyme = enzymeName;
        var v580 = arrayOfRestrictionFragments[i$$12];
        var v322 = v580.start;
        var v323 = positions[j$$10];
        previousStartPosition = v322 + v323;
        j$$10++;
        var v581 = positions.length;
        v324 = j$$10 < v581;
      }
    }
    positions = new Array;
    startRestrictionFragment = null;
    i$$12++;
    var v582 = arrayOfRestrictionFragments.length;
    v326 = i$$12 < v582;
  }
  return newFragments;
}
function restrictionFragmentSorter(a, b) {
  var v710 = a.sequence;
  var v583 = v710.length;
  var v711 = b.sequence;
  var v584 = v711.length;
  var v327 = v583 < v584;
  if (v327) {
    return 1;
  }
  var v712 = a.sequence;
  var v585 = v712.length;
  var v713 = b.sequence;
  var v586 = v713.length;
  var v328 = v585 > v586;
  if (v328) {
    return -1;
  }
  var v714 = a.sequence;
  var v587 = v714.length;
  var v715 = b.sequence;
  var v588 = v715.length;
  var v331 = v587 == v588;
  if (v331) {
    var v589 = a.start;
    var v590 = b.start;
    var v329 = v589 < v590;
    if (v329) {
      return -1;
    }
    var v591 = a.start;
    var v592 = b.start;
    var v330 = v591 > v592;
    if (v330) {
      return 1;
    } else {
      return 0;
    }
  }
  return;
}
function writeFragment(topology$$1) {
  var v593 = this.topology;
  var v336 = v593 == "linear";
  if (v336) {
    var v332 = outputWindow.document;
    var v968 = this.sequence;
    var v965 = v968.length;
    var v960 = "&gt;" + v965;
    var v955 = v960 + " bp linear fragment from ";
    var v950 = v955 + topology$$1;
    var v941 = v950 + " parent ";
    var v942 = this.sourceName;
    var v933 = v941 + v942;
    var v922 = v933 + ", base ";
    var v923 = this.start;
    var v911 = v922 + v923;
    var v897 = v911 + " to base ";
    var v898 = this.stop;
    var v873 = v897 + v898;
    var v842 = v873 + " (";
    var v843 = this.startEnzyme;
    var v790 = v842 + v843;
    var v716 = v790 + " - ";
    var v717 = this.stopEnzyme;
    var v594 = v716 + v717;
    var v333 = v594 + ").\n";
    JAM.call(v332.write, v332, [v333], JAM.policy.p18);
  } else {
    var v334 = outputWindow.document;
    var v912 = this.sequence;
    var v899 = v912.length;
    var v874 = "&gt;" + v899;
    var v844 = v874 + " bp circular molecule from ";
    var v791 = v844 + topology$$1;
    var v718 = v791 + " parent ";
    var v719 = this.sourceName;
    var v595 = v718 + v719;
    var v335 = v595 + ".\n";
    JAM.call(v334.write, v334, [v335], JAM.policy.p18);
  }
  var v337 = outputWindow.document;
  var v720 = this.sequence;
  var v596 = addReturns(v720);
  var v338 = v596 + "\n\n";
  JAM.call(v337.write, v337, [v338], JAM.policy.p18);
  return;
}
function correctPositions() {
  var v597 = this.start;
  var v598 = this.originalLength;
  var v341 = v597 > v598;
  if (v341) {
    var v339 = this.start;
    var v340 = this.originalLength;
    this.start = v339 - v340;
  }
  var v599 = this.stop;
  var v600 = this.originalLength;
  var v344 = v599 > v600;
  if (v344) {
    var v342 = this.stop;
    var v343 = this.originalLength;
    this.stop = v342 - v343;
  }
  var v601 = this.stop;
  var v345 = v601 == 0;
  if (v345) {
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
var v346 = RestrictionFragment.prototype;
v346.writeFragment = writeFragment;
var v347 = RestrictionFragment.prototype;
v347.correctPositions = correctPositions;
JAM.set(document, "onload", v2);
var v348 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p11);
JAM.set(v348, "onclick", v3);
var v349 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p11);
JAM.set(v349, "onclick", v4)

JAM.stopProfile('load');
