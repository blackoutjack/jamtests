
JAM.startProfile('load');
function v4() {
  var v949 = document.forms;
  var v743 = v949[0];
  var v420 = v743.elements;
  var v5 = v420[0];
  v5.value = " ";
  var v950 = document.forms;
  var v744 = v950[0];
  var v421 = v744.elements;
  var v6 = v421[4];
  v6.value = " ";
  return;
}
function v3() {
  try {
    fuzzySearchProtein(document);
  } catch (e$$5) {
    var v7 = "The following error was encountered: " + e$$5;
    alert(v7);
  }
  return;
}
function v2() {
  var v422 = document.main_form;
  var v8 = v422.main_submit;
  v8.focus();
  return;
}
function addReturns(sequence) {
  function v0(str$$6, p1, offset$$8, s$$2) {
    return p1 + "\n";
  }
  sequence = JAM.call(sequence.replace, sequence, [/(.{60})/g, v0], JAM.policy.p22);
  return sequence;
}
function checkAlign(arrayOfTitles, arrayOfSequences) {
  var v9 = arrayOfSequences[0];
  var lengthOfAlign = v9.length;
  var v423 = arrayOfSequences.length;
  var v10 = v423 < 2;
  if (v10) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v424 = arrayOfTitles.length;
  var v12 = i$$1 < v424;
  for (;v12;) {
    var v1054 = arrayOfTitles[i$$1];
    var v951 = JAM.call(v1054.search, v1054, [/\S/], JAM.policy.p21);
    var v745 = v951 == -1;
    var v953 = !v745;
    if (v953) {
      var v1055 = arrayOfSequences[i$$1];
      var v952 = JAM.call(v1055.search, v1055, [/\S/], JAM.policy.p21);
      v745 = v952 == -1;
    }
    var v425 = v745;
    var v747 = !v425;
    if (v747) {
      var v954 = arrayOfSequences[i$$1];
      var v746 = v954.length;
      v425 = v746 != lengthOfAlign;
    }
    var v11 = v425;
    if (v11) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v426 = arrayOfTitles.length;
    v12 = i$$1 < v426;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v1109 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p21);
  var v1056 = v1109 == -1;
  var v1111 = !v1056;
  if (v1111) {
    var v1110 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p21);
    v1056 = v1110 == -1;
  }
  var v955 = v1056;
  var v1058 = !v955;
  if (v1058) {
    var v1057 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p21);
    v955 = v1057 == -1;
  }
  var v748 = v955;
  var v957 = !v748;
  if (v957) {
    var v956 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p21);
    v748 = v956 == -1;
  }
  var v427 = v748;
  var v750 = !v427;
  if (v750) {
    var v749 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p21);
    v427 = v749 == -1;
  }
  var v13 = v427;
  if (v13) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v751 = formElement.value;
  var v428 = JAM.call(v751.search, v751, [/\S/], JAM.policy.p21);
  var v14 = v428 == -1;
  if (v14) {
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
  var v429 = arrayOfPatterns.length;
  var v17 = z$$2 < v429;
  for (;v17;) {
    var v752 = arrayOfPatterns[z$$2];
    var v430 = JAM.call(v752.search, v752, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p21);
    var v15 = v430 == -1;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v753 = arrayOfPatterns[z$$2];
    var v431 = moreExpressionCheck(v753);
    var v16 = v431 == false;
    if (v16) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v432 = arrayOfPatterns.length;
    v17 = z$$2 < v432;
  }
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v18);
  var v19 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v19);
  var j = 0;
  var v433 = arrayOfPatterns.length;
  var v23 = j < v433;
  for (;v23;) {
    var v754 = arrayOfPatterns[j];
    var v434 = JAM.call(v754.match, v754, [/\/.+\//], JAM.policy.p21);
    var v20 = v434 + "gi";
    if (JAM.isEval(eval)) {
      var v1222 = eval("introspect(JAM.policy.pFull) { " + v20 + " }")
    } else {
      var v1222 = JAM.call(eval, null, [v20])
    }
    geneticCodeMatchExp[j] = v1222;
    var v435 = arrayOfPatterns[j];
    var v21 = JAM.call(v435.match, v435, [/=[a-zA-Z\*]/], JAM.policy.p21);
    var v1223 = v21.toString();
    geneticCodeMatchResult[j] = v1223;
    var v22 = geneticCodeMatchResult[j];
    var v1224 = JAM.call(v22.replace, v22, [/=/g, ""], JAM.policy.p22);
    geneticCodeMatchResult[j] = v1224;
    j++;
    var v436 = arrayOfPatterns.length;
    v23 = j < v436;
  }
  var i$$2 = 0;
  var v755 = testSequence.length;
  var v437 = v755 - 3;
  var v30 = i$$2 <= v437;
  for (;v30;) {
    var v24 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v24], JAM.policy.p22);
    j = 0;
    var v438 = geneticCodeMatchExp.length;
    var v28 = j < v438;
    for (;v28;) {
      var v756 = geneticCodeMatchExp[j];
      var v439 = JAM.call(codon.search, codon, [v756], JAM.policy.p23);
      var v27 = v439 != -1;
      if (v27) {
        var v26 = oneMatch == true;
        if (v26) {
          var v440 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v25 = v440 + ".";
          alert(v25);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v441 = geneticCodeMatchExp.length;
      v28 = j < v441;
    }
    var v29 = oneMatch == false;
    if (v29) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v757 = testSequence.length;
    var v442 = v757 - 3;
    v30 = i$$2 <= v442;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v443 = arrayOfPatterns$$1.length;
  var v32 = z$$3 < v443;
  for (;v32;) {
    var v758 = arrayOfPatterns$$1[z$$3];
    var v444 = JAM.call(v758.search, v758, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p21);
    var v31 = v444 != -1;
    if (v31) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v445 = arrayOfPatterns$$1.length;
    v32 = z$$3 < v445;
  }
  var i$$3 = 0;
  var v446 = arrayOfPatterns$$1.length;
  var v36 = i$$3 < v446;
  for (;v36;) {
    var v759 = arrayOfPatterns$$1[i$$3];
    var v447 = "[" + v759;
    var v33 = v447 + "]";
    var re = new RegExp(v33, "gi");
    var j$$1 = i$$3 + 1;
    var v448 = arrayOfPatterns$$1.length;
    var v35 = j$$1 < v448;
    for (;v35;) {
      var v760 = arrayOfPatterns$$1[j$$1];
      var v449 = JAM.call(v760.search, v760, [re], JAM.policy.p23);
      var v34 = v449 != -1;
      if (v34) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v450 = arrayOfPatterns$$1.length;
      v35 = j$$1 < v450;
    }
    i$$3++;
    var v451 = arrayOfPatterns$$1.length;
    v36 = i$$3 < v451;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v452 = arrayOfPatterns$$2.length;
  var v39 = z$$4 < v452;
  for (;v39;) {
    var v761 = arrayOfPatterns$$2[z$$4];
    var v453 = JAM.call(v761.search, v761, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p21);
    var v37 = v453 == -1;
    if (v37) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v762 = arrayOfPatterns$$2[z$$4];
    var v454 = moreExpressionCheck(v762);
    var v38 = v454 == false;
    if (v38) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v455 = arrayOfPatterns$$2.length;
    v39 = z$$4 < v455;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v958 = getSequenceFromFasta(text$$7);
  var v763 = JAM.call(v958.replace, v958, [/[^A-Za-z]/g, ""], JAM.policy.p22);
  var v456 = v763.length;
  var v41 = v456 > maxInput;
  if (v41) {
    var v457 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v40 = v457 + " characters.";
    alert(v40);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v458 = text$$8.length;
  var v43 = v458 > maxInput$$1;
  if (v43) {
    var v459 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v42 = v459 + " characters.";
    alert(v42);
    return false;
  } else {
    return true;
  }
  return;
}
function complement(dnaSequence) {
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/g/g, "1"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/c/g, "2"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "c"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "g"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/G/g, "1"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/C/g, "2"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "C"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "G"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/a/g, "1"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/t/g, "2"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "t"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "a"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/A/g, "1"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/T/g, "2"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "T"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "A"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/u/g, "a"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/U/g, "A"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/r/g, "1"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/y/g, "2"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "y"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "r"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/R/g, "1"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/Y/g, "2"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "Y"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "R"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/k/g, "1"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/m/g, "2"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "m"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "k"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/K/g, "1"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/M/g, "2"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "M"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "K"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/b/g, "1"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/v/g, "2"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "v"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "b"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/B/g, "1"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/V/g, "2"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "V"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "B"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/d/g, "1"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/h/g, "2"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "h"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "d"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/D/g, "1"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/H/g, "2"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "H"], JAM.policy.p22);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "D"], JAM.policy.p22);
  return dnaSequence;
}
function closeForm() {
  var v44 = outputWindow.document;
  JAM.call(v44.write, v44, ["</form>"], JAM.policy.p17);
  return true;
}
function closePre() {
  var v45 = outputWindow.document;
  JAM.call(v45.write, v45, ["</div>"], JAM.policy.p17);
  var v46 = outputWindow.document;
  JAM.call(v46.write, v46, ["</pre>\n"], JAM.policy.p17);
  return;
}
function closeTextArea() {
  var v47 = outputWindow.document;
  JAM.call(v47.write, v47, ["</textarea>"], JAM.policy.p17);
  return true;
}
function closeWindow() {
  var v48 = outputWindow.document;
  JAM.call(v48.write, v48, ["</body>\n</html>\n"], JAM.policy.p17);
  outputWindow.status = "Done.";
  var v49 = outputWindow.document;
  v49.close();
  return true;
}
function convertDegenerates(sequence$$1) {
  sequence$$1 = sequence$$1.toLowerCase();
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/t/g, "[TU]"], JAM.policy.p22);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/r/g, "[AGR]"], JAM.policy.p22);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/y/g, "[CTUY]"], JAM.policy.p22);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/s/g, "[GCS]"], JAM.policy.p22);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/w/g, "[ATUW]"], JAM.policy.p22);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/k/g, "[GTUK]"], JAM.policy.p22);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/m/g, "[ACM]"], JAM.policy.p22);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/b/g, "[CGTUBSKY]"], JAM.policy.p22);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/d/g, "[AGTUDRKW]"], JAM.policy.p22);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/h/g, "[ACTUHMYW]"], JAM.policy.p22);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/v/g, "[ACGVSMR]"], JAM.policy.p22);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/n/g, "[ACGTURYSWKMBDHVN]"], JAM.policy.p22);
  return sequence$$1;
}
function earlyCheckAlign(alignArray) {
  var v460 = alignArray.length;
  var v50 = v460 < 3;
  if (v50) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v461 = alignArray.length;
  var v52 = i$$4 < v461;
  for (;v52;) {
    var v764 = alignArray[i$$4];
    var v462 = JAM.call(v764.search, v764, [/[^\s]+\s/], JAM.policy.p21);
    var v51 = v462 == -1;
    if (v51) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v463 = alignArray.length;
    v52 = i$$4 < v463;
  }
  return true;
}
function filterAlignSeq(alignSeq) {
  alignSeq = JAM.call(alignSeq.replace, alignSeq, [/[^abcdefghiklmnpqrstvwxyz\.\-]/gi, ""], JAM.policy.p22);
  return alignSeq;
}
function filterFastaTitle(sequenceTitle) {
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/\s{2,}/g, " "], JAM.policy.p22);
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/^\s*/g, ""], JAM.policy.p22);
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/[\f\n\r\t]+$/g, "\n"], JAM.policy.p22);
  return JAM.call(sequenceTitle.replace, sequenceTitle, [/[\<\>]\n/gi, ""], JAM.policy.p22);
}
function getArrayOfFasta(sequenceData) {
  var arrayOfFasta = new Array;
  var matchArray;
  var re$$1 = /\>[^\>]+/g;
  var v464 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p21);
  var v55 = v464 != -1;
  if (v55) {
    var v54 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p23);
    for (;v54;) {
      var v53 = matchArray[0];
      JAM.call(arrayOfFasta.push, arrayOfFasta, [v53], JAM.policy.p23);
      v54 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p23);
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v465 = sequence$$2.length;
  var v56 = "&gt;results for " + v465;
  var stringToReturn = v56 + " residue sequence ";
  var v466 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p21);
  var v58 = v466 != -1;
  if (v58) {
    var v467 = stringToReturn + '"';
    var v57 = v467 + fastaSequenceTitle;
    stringToReturn = v57 + '"';
  }
  var v468 = stringToReturn + ' starting "';
  var v469 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p19);
  var v59 = v468 + v469;
  stringToReturn = v59 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v470 = sequenceOne.length;
  var v60 = "Search results for " + v470;
  var stringToReturn$$1 = v60 + " residue sequence ";
  var v471 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p21);
  var v62 = v471 != -1;
  if (v62) {
    var v472 = stringToReturn$$1 + '"';
    var v61 = v472 + fastaSequenceTitleOne;
    stringToReturn$$1 = v61 + '"';
  }
  var v473 = stringToReturn$$1 + ' starting "';
  var v474 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p19);
  var v63 = v473 + v474;
  stringToReturn$$1 = v63 + '"\n';
  var v475 = stringToReturn$$1 + "and ";
  var v476 = sequenceTwo.length;
  var v64 = v475 + v476;
  stringToReturn$$1 = v64 + " residue sequence ";
  var v477 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p21);
  var v66 = v477 != -1;
  if (v66) {
    var v478 = stringToReturn$$1 + '"';
    var v65 = v478 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v65 + '"';
  }
  var v479 = stringToReturn$$1 + ' starting "';
  var v480 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p19);
  var v67 = v479 + v480;
  stringToReturn$$1 = v67 + '"';
  var v68 = '<div class="info">' + stringToReturn$$1;
  return v68 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v69 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v69);
  var j$$2 = 0;
  var v481 = arrayOfPatterns$$3.length;
  var v71 = j$$2 < v481;
  for (;v71;) {
    var v765 = arrayOfPatterns$$3[j$$2];
    var v482 = JAM.call(v765.match, v765, [/\/.+\//], JAM.policy.p21);
    var v70 = v482 + "gi";
    if (JAM.isEval(eval)) {
      var v1225 = eval("introspect(JAM.policy.pFull) { " + v70 + " }")
    } else {
      var v1225 = JAM.call(eval, null, [v70])
    }
    geneticCodeMatchExp$$1[j$$2] = v1225;
    j$$2++;
    var v483 = arrayOfPatterns$$3.length;
    v71 = j$$2 < v483;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v72 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v72);
  var j$$3 = 0;
  var v484 = arrayOfPatterns$$4.length;
  var v75 = j$$3 < v484;
  for (;v75;) {
    var v485 = arrayOfPatterns$$4[j$$3];
    var v73 = JAM.call(v485.match, v485, [/=[a-zA-Z\*]/], JAM.policy.p21);
    var v1226 = v73.toString();
    geneticCodeMatchResult$$1[j$$3] = v1226;
    var v74 = geneticCodeMatchResult$$1[j$$3];
    var v1227 = JAM.call(v74.replace, v74, [/=/g, ""], JAM.policy.p22);
    geneticCodeMatchResult$$1[j$$3] = v1227;
    j$$3++;
    var v486 = arrayOfPatterns$$4.length;
    v75 = j$$3 < v486;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v487 = sequence$$3.length;
  var v76 = "Results for " + v487;
  var stringToReturn$$2 = v76 + " residue sequence ";
  var v488 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p21);
  var v78 = v488 != -1;
  if (v78) {
    var v489 = stringToReturn$$2 + '"';
    var v77 = v489 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v77 + '"';
  }
  var v490 = stringToReturn$$2 + ' starting "';
  var v491 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p19);
  var v79 = v490 + v491;
  stringToReturn$$2 = v79 + '"';
  var v80 = '<div class="info">' + stringToReturn$$2;
  return v80 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v766 = "Results for " + topology;
  var v492 = v766 + " ";
  var v493 = sequence$$4.length;
  var v81 = v492 + v493;
  var stringToReturn$$3 = v81 + " residue sequence ";
  var v494 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p21);
  var v83 = v494 != -1;
  if (v83) {
    var v495 = stringToReturn$$3 + '"';
    var v82 = v495 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v82 + '"';
  }
  var v496 = stringToReturn$$3 + ' starting "';
  var v497 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p19);
  var v84 = v496 + v497;
  stringToReturn$$3 = v84 + '"';
  var v85 = '<div class="info">' + stringToReturn$$3;
  return v85 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v498 = sequenceOne$$1.length;
  var v86 = "Alignment results for " + v498;
  var stringToReturn$$4 = v86 + " residue sequence ";
  var v499 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p21);
  var v88 = v499 != -1;
  if (v88) {
    var v500 = stringToReturn$$4 + '"';
    var v87 = v500 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v87 + '"';
  }
  var v501 = stringToReturn$$4 + ' starting "';
  var v502 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p19);
  var v89 = v501 + v502;
  stringToReturn$$4 = v89 + '"\n';
  var v503 = stringToReturn$$4 + "and ";
  var v504 = sequenceTwo$$1.length;
  var v90 = v503 + v504;
  stringToReturn$$4 = v90 + " residue sequence ";
  var v505 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p21);
  var v92 = v505 != -1;
  if (v92) {
    var v506 = stringToReturn$$4 + '"';
    var v91 = v506 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v91 + '"';
  }
  var v507 = stringToReturn$$4 + ' starting "';
  var v508 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p19);
  var v93 = v507 + v508;
  stringToReturn$$4 = v93 + '"';
  var v94 = '<div class="info">' + stringToReturn$$4;
  return v94 + "</div>\n";
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v96 = j$$4 < lengthOut;
  for (;v96;) {
    var v509 = Math.random();
    var v510 = components.length;
    var v95 = v509 * v510;
    tempNum = JAM.call(Math.floor, Math, [v95], JAM.policy.p21);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p23);
    j$$4++;
    v96 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p17);
}
function getSequenceFromFasta(sequenceRecord) {
  var v511 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p21);
  var v97 = v511 != -1;
  if (v97) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p22);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v512 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p21);
  var v99 = v512 != -1;
  if (v99) {
    var v98 = JAM.call(sequenceRecord$$1.match, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p22);
    fastaTitle = v98.toString();
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\>|[\f\n\r]/g, ""], JAM.policy.p22);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\s{2,}/g, " "], JAM.policy.p22);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/[\<\>]/gi, ""], JAM.policy.p22);
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  var v1200 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p21);
  var v1193 = v1200 != -1;
  var v1202 = !v1193;
  if (v1202) {
    var v1201 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p21);
    v1193 = v1201 != -1;
  }
  var v1183 = v1193;
  var v1195 = !v1183;
  if (v1195) {
    var v1194 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p21);
    v1183 = v1194 != -1;
  }
  var v1172 = v1183;
  var v1185 = !v1172;
  if (v1185) {
    var v1184 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p21);
    v1172 = v1184 != -1;
  }
  var v1157 = v1172;
  var v1174 = !v1157;
  if (v1174) {
    var v1173 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p21);
    v1157 = v1173 != -1;
  }
  var v1138 = v1157;
  var v1159 = !v1138;
  if (v1159) {
    var v1158 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p21);
    v1138 = v1158 != -1;
  }
  var v1112 = v1138;
  var v1140 = !v1112;
  if (v1140) {
    var v1139 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p21);
    v1112 = v1139 != -1;
  }
  var v1059 = v1112;
  var v1114 = !v1059;
  if (v1114) {
    var v1113 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p21);
    v1059 = v1113 != -1;
  }
  var v959 = v1059;
  var v1061 = !v959;
  if (v1061) {
    var v1060 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p21);
    v959 = v1060 != -1;
  }
  var v767 = v959;
  var v961 = !v767;
  if (v961) {
    var v960 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p21);
    v767 = v960 != -1;
  }
  var v513 = v767;
  var v769 = !v513;
  if (v769) {
    var v768 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p21);
    v513 = v768 != -1;
  }
  var v100 = v513;
  if (v100) {
    return false;
  }
  return true;
}
function openForm() {
  var v101 = outputWindow.document;
  JAM.call(v101.write, v101, ['<form action="">\n'], JAM.policy.p17);
  return true;
}
function openPre() {
  var v102 = outputWindow.document;
  JAM.call(v102.write, v102, ["<pre>"], JAM.policy.p17);
  var v103 = outputWindow.document;
  JAM.call(v103.write, v103, ['<div class="pre">'], JAM.policy.p17);
  return;
}
function openTextArea() {
  var v104 = outputWindow.document;
  JAM.call(v104.write, v104, ['<br /><textarea rows="6" cols="61">\n'], JAM.policy.p17);
  return true;
}
function openWindow(title$$5) {
  _openWindow(title$$5, true);
  return;
}
function _openWindow(title$$6, isColor) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p20);
  outputWindow.focus();
  var v105 = outputWindow.document;
  var v962 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v770 = v962 + "<head>\n";
  var v514 = v770 + "<title>Sequence Manipulation Suite</title>\n";
  var v106 = v514 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v105.write, v105, [v106], JAM.policy.p23);
  if (isColor) {
    var v107 = outputWindow.document;
    var v1215 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1211 = v1215 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1207 = v1211 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1203 = v1207 + "div.info {font-weight: bold}\n";
    var v1196 = v1203 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1186 = v1196 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v1175 = v1186 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v1160 = v1175 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1141 = v1160 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v1115 = v1141 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v1062 = v1115 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v963 = v1062 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v771 = v963 + "td.many {color: #000000}\n";
    var v515 = v771 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v108 = v515 + "</style>\n";
    JAM.call(v107.write, v107, [v108], JAM.policy.p23);
  } else {
    var v109 = outputWindow.document;
    var v1219 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1216 = v1219 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1212 = v1216 + "div.title {display: none}\n";
    var v1208 = v1212 + "div.info {font-weight: bold}\n";
    var v1204 = v1208 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1197 = v1204 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1187 = v1197 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v1176 = v1187 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1161 = v1176 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1142 = v1161 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1116 = v1142 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v1063 = v1116 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v964 = v1063 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v772 = v964 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v516 = v772 + "img {display: none}\n";
    var v110 = v516 + "</style>\n";
    JAM.call(v109.write, v109, [v110], JAM.policy.p23);
  }
  var v111 = outputWindow.document;
  var v965 = "</head>\n" + '<body class="main">\n';
  var v773 = v965 + '<div class="title">';
  var v517 = v773 + title$$6;
  var v112 = v517 + " results</div>\n";
  JAM.call(v111.write, v111, [v112], JAM.policy.p23);
  outputWindow.status = "Please Wait.";
  return true;
}
function openWindowAlign(title$$7) {
  _openWindowAlign(title$$7, true);
  return;
}
function _openWindowAlign(title$$8, isBackground) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p20);
  outputWindow.focus();
  var v113 = outputWindow.document;
  var v966 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v774 = v966 + "<head>\n";
  var v518 = v774 + "<title>Sequence Manipulation Suite</title>\n";
  var v114 = v518 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v113.write, v113, [v114], JAM.policy.p23);
  if (isBackground) {
    var v115 = outputWindow.document;
    var v1217 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1213 = v1217 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1209 = v1213 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1205 = v1209 + "div.info {font-weight: bold}\n";
    var v1198 = v1205 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v1188 = v1198 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v1177 = v1188 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v1162 = v1177 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v1143 = v1162 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v1117 = v1143 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v1064 = v1117 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v967 = v1064 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v775 = v967 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v519 = v775 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v116 = v519 + "</style>\n";
    JAM.call(v115.write, v115, [v116], JAM.policy.p23);
  } else {
    var v117 = outputWindow.document;
    var v1221 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1220 = v1221 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1218 = v1220 + "div.title {display: none}\n";
    var v1214 = v1218 + "div.info {font-weight: bold}\n";
    var v1210 = v1214 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1206 = v1210 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v1199 = v1206 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v1189 = v1199 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v1178 = v1189 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v1163 = v1178 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v1144 = v1163 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v1118 = v1144 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v1065 = v1118 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v968 = v1065 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v776 = v968 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v520 = v776 + "img {display: none}\n";
    var v118 = v520 + "</style>\n";
    JAM.call(v117.write, v117, [v118], JAM.policy.p23);
  }
  var v119 = outputWindow.document;
  var v969 = "</head>\n" + '<body class="main">\n';
  var v777 = v969 + '<div class="title">';
  var v521 = v777 + title$$8;
  var v120 = v521 + " results</div>\n";
  JAM.call(v119.write, v119, [v120], JAM.policy.p23);
  outputWindow.status = "Please Wait.";
  return true;
}
function removeFormatting(sequence$$5) {
  return JAM.call(sequence$$5.replace, sequence$$5, [/[\d\s]/g, ""], JAM.policy.p22);
}
function removeNonDna(sequence$$6) {
  return JAM.call(sequence$$6.replace, sequence$$6, [/[^gatucryswkmbdhvnxGATUCRYSWKMBDHVNX]/g, ""], JAM.policy.p22);
}
function removeNonDnaStrict(sequence$$7) {
  return JAM.call(sequence$$7.replace, sequence$$7, [/[^gatucGATUC]/g, ""], JAM.policy.p22);
}
function removeNonProtein(sequence$$8) {
  return JAM.call(sequence$$8.replace, sequence$$8, [/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, ""], JAM.policy.p22);
}
function removeNonProteinStrict(sequence$$9) {
  return JAM.call(sequence$$9.replace, sequence$$9, [/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, ""], JAM.policy.p22);
}
function removeNonProteinAllowDegen(sequence$$10) {
  return JAM.call(sequence$$10.replace, sequence$$10, [/[^ABCDEFGHIKLMNPQRSTVWYXZabcdefghiklmnpqrstvwyxz\*]/g, ""], JAM.policy.p22);
}
function removeNonProteinAllowX(sequence$$11) {
  return JAM.call(sequence$$11.replace, sequence$$11, [/[^ACDEFGHIKLMNPQRSTVWYZXacdefghiklmnpqrstvwyzx\*]/g, ""], JAM.policy.p22);
}
function removeWhiteSpace(text$$9) {
  return JAM.call(text$$9.replace, text$$9, [/\s/g, ""], JAM.policy.p22);
}
function removeNonLetters(sequence$$12) {
  return JAM.call(sequence$$12.replace, sequence$$12, [/[^A-Z]/gi, ""], JAM.policy.p22);
}
function reverse(dnaSequence$$1) {
  var tempDnaArray = new Array;
  var v522 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p21);
  var v121 = v522 != -1;
  if (v121) {
    tempDnaArray = JAM.call(dnaSequence$$1.match, dnaSequence$$1, [/./g], JAM.policy.p21);
    tempDnaArray = tempDnaArray.reverse();
    dnaSequence$$1 = JAM.call(tempDnaArray.join, tempDnaArray, [""], JAM.policy.p17);
  }
  return dnaSequence$$1;
}
function rightNum(theNumber, sequenceToAppend, lengthOfColumn, tabIn) {
  var j$$5 = 0;
  var tempString = "";
  theNumber = theNumber.toString();
  j$$5 = theNumber.length;
  var v122 = j$$5 < lengthOfColumn;
  for (;v122;) {
    tempString = tempString + " ";
    j$$5++;
    v122 = j$$5 < lengthOfColumn;
  }
  var v123 = tempString + theNumber;
  theNumber = v123 + " ";
  var v124 = sequenceToAppend + theNumber;
  sequenceToAppend = v124 + tabIn;
  return sequenceToAppend;
}
function testScript() {
  function v1(str$$7, p1$$1, offset$$9, s$$3) {
    return p1$$1 + "X";
  }
  var testArray = new Array;
  var testString = "1234567890";
  JAM.call(testArray.push, testArray, [testString], JAM.policy.p23);
  var v523 = testArray[0];
  var v125 = v523 != testString;
  if (v125) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v524 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p23);
  var v126 = v524 == -1;
  if (v126) {
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
  var v127 = !caughtException;
  if (v127) {
    alert("Exception handling not supported. See browser compatibility page.");
  }
  testString = "123";
  testString = JAM.call(testString.replace, testString, [/(\d)/g, v1], JAM.policy.p22);
  var v128 = testString != "1X2X3X";
  if (v128) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false;
  }
  var testNum = 2489.8237;
  var v525 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p15);
  var v129 = v525 != 2489.824;
  if (v129) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v526 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p15);
  var v130 = v526 != 2489.8;
  if (v130) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v527 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p21);
  var v131 = v527 == -1;
  if (v131) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v1066 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p21);
  var v970 = v1066 == -1;
  var v1068 = !v970;
  if (v1068) {
    var v1067 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p21);
    v970 = v1067 == -1;
  }
  var v778 = v970;
  var v972 = !v778;
  if (v972) {
    var v971 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p21);
    v778 = v971 == -1;
  }
  var v528 = v778;
  var v780 = !v528;
  if (v780) {
    var v779 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p21);
    v528 = v779 == -1;
  }
  var v132 = v528;
  if (v132) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v529 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p21);
  var v133 = v529 == -1;
  if (v133) {
    alert("Please enter a number.");
    return false;
  }
  var v135 = theNumber$$2 > maxInput$$2;
  if (v135) {
    var v530 = "Please enter a number less than or equal to " + maxInput$$2;
    var v134 = v530 + ".";
    alert(v134);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v531 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p21);
  var v136 = v531 != -1;
  if (v136) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v532 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p21);
  var v137 = v532 != -1;
  if (v137) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v1069 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p21);
  var v973 = v1069 == -1;
  var v1071 = !v973;
  if (v1071) {
    var v1070 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p21);
    v973 = v1070 == -1;
  }
  var v781 = v973;
  var v975 = !v781;
  if (v975) {
    var v974 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p21);
    v781 = v974 == -1;
  }
  var v533 = v781;
  var v783 = !v533;
  if (v783) {
    var v782 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p21);
    v533 = v782 == -1;
  }
  var v138 = v533;
  if (v138) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v1072 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p21);
  var v976 = v1072 == -1;
  var v1074 = !v976;
  if (v1074) {
    var v1073 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p21);
    v976 = v1073 == -1;
  }
  var v784 = v976;
  var v978 = !v784;
  if (v978) {
    var v977 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p21);
    v784 = v977 == -1;
  }
  var v534 = v784;
  var v786 = !v534;
  if (v786) {
    var v785 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p21);
    v534 = v785 == -1;
  }
  var v139 = v534;
  if (v139) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v535 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p21);
  var v140 = v535 == -1;
  if (v140) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v1075 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p21);
  var v979 = v1075 == -1;
  var v1077 = !v979;
  if (v1077) {
    var v1076 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p21);
    v979 = v1076 == -1;
  }
  var v787 = v979;
  var v981 = !v787;
  if (v981) {
    var v980 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p21);
    v787 = v980 == -1;
  }
  var v536 = v787;
  var v789 = !v536;
  if (v789) {
    var v788 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p21);
    v536 = v788 == -1;
  }
  var v141 = v536;
  if (v141) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v537 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p21);
  var v142 = v537 == -1;
  if (v142) {
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
  var v149 = i$$5 < stopBase;
  for (;v149;) {
    var v143 = i$$5 + 1;
    lineOfText = rightNum(v143, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v538 = basePerLine / groupSize;
    var v146 = j$$6 <= v538;
    for (;v146;) {
      var v145 = k < groupSize;
      for (;v145;) {
        var v539 = k + i$$5;
        var v144 = JAM.call(text$$10.charAt, text$$10, [v539], JAM.policy.p23);
        lineOfText = lineOfText + v144;
        k = k + 1;
        v145 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v540 = basePerLine / groupSize;
      v146 = j$$6 <= v540;
    }
    var v147 = outputWindow.document;
    var v148 = lineOfText + "\n";
    JAM.call(v147.write, v147, [v148], JAM.policy.p23);
    lineOfText = "";
    v149 = i$$5 < stopBase;
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
    var v541 = adjustment < 0;
    if (v541) {
      v541 = adjusted >= 0;
    }
    var v150 = v541;
    if (v150) {
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
  var v183 = i$$6 < stopBase$$2;
  for (;v183;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v542 = basePerLine$$2 / groupSize$$2;
    var v159 = j$$7 <= v542;
    for (;v159;) {
      var v154 = k$$1 < groupSize$$2;
      for (;v154;) {
        var v543 = i$$6 + k$$1;
        var v151 = v543 >= stopBase$$2;
        if (v151) {
          break;
        }
        var v152 = lineOfText$$1;
        var v544 = k$$1 + i$$6;
        var v153 = JAM.call(text$$12.charAt, text$$12, [v544], JAM.policy.p23);
        lineOfText$$1 = v152 + v153;
        k$$1 = k$$1 + 1;
        v154 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v157 = numberPosition$$1 == "above";
      if (v157) {
        var v155 = aboveNum;
        var v545 = adjustNumbering(i$$6, numberingAdjustment);
        var v156 = rightNum(v545, "", groupSize$$2, tabIn$$3);
        aboveNum = v155 + v156;
      }
      var v158 = i$$6 >= stopBase$$2;
      if (v158) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v546 = basePerLine$$2 / groupSize$$2;
      v159 = j$$7 <= v546;
    }
    var v182 = numberPosition$$1 == "left";
    if (v182) {
      var v160 = outputWindow.document;
      var v982 = adjustNumbering(lineNum, numberingAdjustment);
      var v790 = rightNum(v982, "", 8, tabIn$$3);
      var v547 = v790 + lineOfText$$1;
      var v161 = v547 + "\n";
      JAM.call(v160.write, v160, [v161], JAM.policy.p23);
      var v165 = strands$$1 == "two";
      if (v165) {
        var v162 = outputWindow.document;
        var v983 = adjustNumbering(lineNum, numberingAdjustment);
        var v791 = rightNum(v983, "", 8, tabIn$$3);
        var v792 = complement(lineOfText$$1);
        var v548 = v791 + v792;
        var v163 = v548 + "\n";
        JAM.call(v162.write, v162, [v163], JAM.policy.p23);
        var v164 = outputWindow.document;
        JAM.call(v164.write, v164, ["\n"], JAM.policy.p17);
      }
    } else {
      var v181 = numberPosition$$1 == "right";
      if (v181) {
        var v166 = outputWindow.document;
        var v793 = lineOfText$$1;
        var v794 = adjustNumbering(i$$6, numberingAdjustment);
        var v549 = v793 + v794;
        var v167 = v549 + "\n";
        JAM.call(v166.write, v166, [v167], JAM.policy.p23);
        var v171 = strands$$1 == "two";
        if (v171) {
          var v168 = outputWindow.document;
          var v795 = complement(lineOfText$$1);
          var v796 = adjustNumbering(i$$6, numberingAdjustment);
          var v550 = v795 + v796;
          var v169 = v550 + "\n";
          JAM.call(v168.write, v168, [v169], JAM.policy.p23);
          var v170 = outputWindow.document;
          JAM.call(v170.write, v170, ["\n"], JAM.policy.p17);
        }
      } else {
        var v180 = numberPosition$$1 == "above";
        if (v180) {
          var v172 = outputWindow.document;
          var v173 = aboveNum + "\n";
          JAM.call(v172.write, v172, [v173], JAM.policy.p23);
          var v174 = outputWindow.document;
          var v175 = lineOfText$$1 + "\n";
          JAM.call(v174.write, v174, [v175], JAM.policy.p23);
          var v179 = strands$$1 == "two";
          if (v179) {
            var v176 = outputWindow.document;
            var v551 = complement(lineOfText$$1);
            var v177 = v551 + "\n";
            JAM.call(v176.write, v176, [v177], JAM.policy.p23);
            var v178 = outputWindow.document;
            JAM.call(v178.write, v178, ["\n"], JAM.policy.p17);
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v183 = i$$6 < stopBase$$2;
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
  var v202 = i$$7 < stopBase$$3;
  for (;v202;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v552 = basePerLine$$3 / groupSize$$3;
    var v190 = j$$8 <= v552;
    for (;v190;) {
      var v186 = k$$2 < groupSize$$3;
      for (;v186;) {
        var v553 = i$$7 + k$$2;
        var v184 = v553 >= stopBase$$3;
        if (v184) {
          break;
        }
        var v554 = k$$2 + i$$7;
        var v185 = JAM.call(text$$13.charAt, text$$13, [v554], JAM.policy.p23);
        lineOfText$$2 = lineOfText$$2 + v185;
        k$$2 = k$$2 + 1;
        v186 = k$$2 < groupSize$$3;
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v188 = numberPosition$$2 == "above";
      if (v188) {
        var v187 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = aboveNum$$1 + v187;
      }
      var v189 = i$$7 >= stopBase$$3;
      if (v189) {
        break;
      }
      k$$2 = 0;
      j$$8++;
      var v555 = basePerLine$$3 / groupSize$$3;
      v190 = j$$8 <= v555;
    }
    var v201 = numberPosition$$2 == "left";
    if (v201) {
      var v191 = outputWindow.document;
      var v797 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v556 = v797 + lineOfText$$2;
      var v192 = v556 + "\n";
      JAM.call(v191.write, v191, [v192], JAM.policy.p23);
    } else {
      var v200 = numberPosition$$2 == "right";
      if (v200) {
        var v193 = outputWindow.document;
        var v557 = lineOfText$$2 + i$$7;
        var v194 = v557 + "\n";
        JAM.call(v193.write, v193, [v194], JAM.policy.p23);
      } else {
        var v199 = numberPosition$$2 == "above";
        if (v199) {
          var v195 = outputWindow.document;
          var v196 = aboveNum$$1 + "\n";
          JAM.call(v195.write, v195, [v196], JAM.policy.p23);
          var v197 = outputWindow.document;
          var v198 = lineOfText$$2 + "\n";
          JAM.call(v197.write, v197, [v198], JAM.policy.p23);
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v202 = i$$7 < stopBase$$3;
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
  var v984 = sequence$$13.length;
  var v798 = v984 <= firstIndexToMutate;
  var v985 = !v798;
  if (v985) {
    v798 = lastIndexToMutate < 0;
  }
  var v558 = v798;
  var v799 = !v558;
  if (v799) {
    v558 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v203 = v558;
  if (v203) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v211 = i$$8 < numMut;
  for (;v211;) {
    maxNum = sequence$$13.length;
    var v559 = Math.random();
    var v204 = v559 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v204], JAM.policy.p21);
    var v560 = randNum < firstIndexToMutate;
    var v800 = !v560;
    if (v800) {
      v560 = randNum > lastIndexToMutate;
    }
    var v205 = v560;
    if (v205) {
      numMut++;
      i$$8++;
      v211 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p21);
    needNewChar = true;
    for (;needNewChar;) {
      var v561 = Math.random();
      var v562 = components$$1.length;
      var v206 = v561 * v562;
      componentsIndex = JAM.call(Math.round, Math, [v206], JAM.policy.p21);
      var v563 = components$$1.length;
      var v207 = componentsIndex == v563;
      if (v207) {
        componentsIndex = 0;
      }
      var v564 = components$$1[componentsIndex];
      var v208 = v564 != currentChar;
      if (v208) {
        needNewChar = false;
      }
    }
    var v565 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p19);
    var v566 = components$$1[componentsIndex];
    var v209 = v565 + v566;
    var v567 = randNum + 1;
    var v568 = sequence$$13.length;
    var v210 = JAM.call(sequence$$13.substring, sequence$$13, [v567, v568], JAM.policy.p33);
    sequence$$13 = v209 + v210;
    i$$8++;
    v211 = i$$8 < numMut;
  }
  var v212 = outputWindow.document;
  var v213 = addReturns(sequence$$13);
  JAM.call(v212.write, v212, [v213], JAM.policy.p23);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v218 = j$$9 < lengthOut$$1;
  for (;v218;) {
    var v569 = Math.random();
    var v570 = components$$2.length;
    var v214 = v569 * v570;
    tempNum$$1 = JAM.call(Math.floor, Math, [v214], JAM.policy.p21);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v571 = sequence$$14.length;
    var v217 = v571 == 60;
    if (v217) {
      var v215 = outputWindow.document;
      var v216 = sequence$$14 + "\n";
      JAM.call(v215.write, v215, [v216], JAM.policy.p23);
      sequence$$14 = "";
    }
    j$$9++;
    v218 = j$$9 < lengthOut$$1;
  }
  var v219 = outputWindow.document;
  var v220 = sequence$$14 + "\n";
  JAM.call(v219.write, v219, [v220], JAM.policy.p23);
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
  var v224 = dnaConformation == "circular";
  if (v224) {
    var v221 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p19);
    shiftValue = v221.length;
    var v986 = sequence$$15.length;
    var v801 = v986 - lookAhead;
    var v802 = sequence$$15.length;
    var v572 = JAM.call(sequence$$15.substring, sequence$$15, [v801, v802], JAM.policy.p33);
    var v222 = v572 + sequence$$15;
    var v223 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p19);
    sequence$$15 = v222 + v223;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v225 = outputWindow.document;
  JAM.call(v225.write, v225, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p17);
  var v226 = outputWindow.document;
  var v987 = '<tr><td class="title" width="200px">' + "Site:";
  var v803 = v987 + '</td><td class="title">';
  var v573 = v803 + "Positions:";
  var v227 = v573 + "</td></tr>\n";
  JAM.call(v226.write, v226, [v227], JAM.policy.p23);
  var i$$9 = 0;
  var v574 = arrayOfItems.length;
  var v243 = i$$9 < v574;
  for (;v243;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v575 = arrayOfItems[i$$9];
    var v228 = JAM.call(v575.match, v575, [/\/.+\//], JAM.policy.p21);
    matchExp = v228 + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    var v988 = arrayOfItems[i$$9];
    var v804 = JAM.call(v988.match, v988, [/\)\D*\d+/], JAM.policy.p21);
    var v576 = v804.toString();
    var v229 = JAM.call(v576.replace, v576, [/\)\D*/, ""], JAM.policy.p22);
    cutDistance = parseFloat(v229);
    var v235 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p23);
    for (;v235;) {
      var v230 = matchExp.lastIndex;
      matchPosition = v230 - cutDistance;
      var v577 = matchPosition >= lowerLimit;
      if (v577) {
        v577 = matchPosition < upperLimit;
      }
      var v233 = v577;
      if (v233) {
        timesFound++;
        var v231 = tempString$$1 + ", ";
        var v578 = matchPosition - shiftValue;
        var v232 = v578 + 1;
        tempString$$1 = v231 + v232;
      }
      var v579 = matchExp.lastIndex;
      var v805 = RegExp.lastMatch;
      var v580 = v805.length;
      var v234 = v579 - v580;
      matchExp.lastIndex = v234 + 1;
      v235 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p23);
    }
    var v581 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p21);
    var v236 = v581 != -1;
    if (v236) {
      tempString$$1 = JAM.call(tempString$$1.replace, tempString$$1, [/none,\s*/, ""], JAM.policy.p22);
    }
    var v240 = timesFound == 0;
    if (v240) {
      backGroundClass = "none";
    } else {
      var v239 = timesFound == 1;
      if (v239) {
        backGroundClass = "one";
      } else {
        var v238 = timesFound == 2;
        if (v238) {
          backGroundClass = "two";
        } else {
          var v237 = timesFound == 3;
          if (v237) {
            backGroundClass = "three";
          } else {
            backGroundClass = "many";
          }
        }
      }
    }
    var v241 = outputWindow.document;
    var v1164 = '<tr><td class="' + backGroundClass;
    var v1145 = v1164 + '">';
    var v1190 = arrayOfItems[i$$9];
    var v1179 = JAM.call(v1190.match, v1190, [/\([^\(]+\)/], JAM.policy.p21);
    var v1165 = v1179.toString();
    var v1146 = JAM.call(v1165.replace, v1165, [/\(|\)/g, ""], JAM.policy.p22);
    var v1119 = v1145 + v1146;
    var v1078 = v1119 + '</td><td class="';
    var v989 = v1078 + backGroundClass;
    var v806 = v989 + '">';
    var v582 = v806 + tempString$$1;
    var v242 = v582 + "</td></tr>\n";
    JAM.call(v241.write, v241, [v242], JAM.policy.p23);
    timesFound = 0;
    i$$9++;
    var v583 = arrayOfItems.length;
    v243 = i$$9 < v583;
  }
  var v244 = outputWindow.document;
  JAM.call(v244.write, v244, ["</tbody></table>\n"], JAM.policy.p17);
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v245 = outputWindow.document;
  JAM.call(v245.write, v245, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p17);
  var v246 = outputWindow.document;
  var v1120 = '<tr><td class="title">' + "Pattern:";
  var v1079 = v1120 + '</td><td class="title">';
  var v990 = v1079 + "Times found:";
  var v807 = v990 + '</td><td class="title">';
  var v584 = v807 + "Percentage:";
  var v247 = v584 + "</td></tr>\n";
  JAM.call(v246.write, v246, [v247], JAM.policy.p23);
  var i$$10 = 0;
  var v585 = arrayOfItems$$1.length;
  var v256 = i$$10 < v585;
  for (;v256;) {
    var tempNumber = 0;
    var v586 = arrayOfItems$$1[i$$10];
    var v248 = JAM.call(v586.match, v586, [/\/[^\/]+\//], JAM.policy.p21);
    var matchExp$$1 = v248 + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    var v587 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p23);
    var v250 = v587 != -1;
    if (v250) {
      var v249 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p23);
      tempNumber = v249.length;
    }
    var percentage = 0;
    var v808 = originalLength + 1;
    var v1080 = arrayOfItems$$1[i$$10];
    var v991 = JAM.call(v1080.match, v1080, [/\d+/], JAM.policy.p21);
    var v809 = parseFloat(v991);
    var v588 = v808 - v809;
    var v253 = v588 > 0;
    if (v253) {
      var v251 = 100 * tempNumber;
      var v589 = originalLength + 1;
      var v992 = arrayOfItems$$1[i$$10];
      var v810 = JAM.call(v992.match, v992, [/\d+/], JAM.policy.p21);
      var v590 = parseFloat(v810);
      var v252 = v589 - v590;
      percentage = v251 / v252;
    }
    var v254 = outputWindow.document;
    var v1191 = arrayOfItems$$1[i$$10];
    var v1180 = JAM.call(v1191.match, v1191, [/\([^\(]+\)\b/], JAM.policy.p21);
    var v1166 = v1180.toString();
    var v1147 = JAM.call(v1166.replace, v1166, [/\(|\)/g, ""], JAM.policy.p22);
    var v1121 = "<tr><td>" + v1147;
    var v1081 = v1121 + "</td><td>";
    var v993 = v1081 + tempNumber;
    var v811 = v993 + "</td><td>";
    var v812 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p15);
    var v591 = v811 + v812;
    var v255 = v591 + "</td></tr>\n";
    JAM.call(v254.write, v254, [v255], JAM.policy.p23);
    i$$10++;
    var v592 = arrayOfItems$$1.length;
    v256 = i$$10 < v592;
  }
  var v257 = outputWindow.document;
  JAM.call(v257.write, v257, ["</tbody></table>\n"], JAM.policy.p17);
  return true;
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v593 = sequence$$17.length;
  var v264 = v593 > 0;
  for (;v264;) {
    maxNum$$1 = sequence$$17.length;
    var v594 = Math.random();
    var v258 = v594 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v258], JAM.policy.p21);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p21);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p19);
    var v259 = randNum$$1 + 1;
    var v260 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v259, v260], JAM.policy.p22);
    sequence$$17 = tempString1 + tempString2;
    var v595 = tempSeq.length;
    var v263 = v595 == 60;
    if (v263) {
      var v261 = outputWindow.document;
      var v262 = tempSeq + "\n";
      JAM.call(v261.write, v261, [v262], JAM.policy.p23);
      tempSeq = "";
    }
    var v596 = sequence$$17.length;
    v264 = v596 > 0;
  }
  var v265 = outputWindow.document;
  var v266 = tempSeq + "\n";
  JAM.call(v265.write, v265, [v266], JAM.policy.p23);
  return true;
}
function fuzzySearchProtein(theDocument) {
  JAM.startProfile('compute');

  var targetSequence = "";
  var targetTitle = "";
  var querySequence = "";
  var queryTitle = "";
  var maxTarget = 2E3;
  var maxQuery = 30;
  var v597 = testScript();
  var v267 = v597 == false;
  if (v267) {
    return false;
  }
  var v1181 = theDocument.forms;
  var v1167 = v1181[0];
  var v1148 = v1167.elements;
  var v1122 = v1148[0];
  var v1082 = checkFormElement(v1122);
  var v994 = v1082 == false;
  var v1084 = !v994;
  if (v1084) {
    var v1192 = theDocument.forms;
    var v1182 = v1192[0];
    var v1168 = v1182.elements;
    var v1149 = v1168[0];
    var v1123 = v1149.value;
    var v1083 = checkSequenceLength(v1123, maxTarget);
    v994 = v1083 == false;
  }
  var v813 = v994;
  var v996 = !v813;
  if (v996) {
    var v1169 = theDocument.forms;
    var v1150 = v1169[0];
    var v1124 = v1150.elements;
    var v1085 = v1124[1];
    var v995 = checkFormElement(v1085);
    v813 = v995 == false;
  }
  var v598 = v813;
  var v815 = !v598;
  if (v815) {
    var v1170 = theDocument.forms;
    var v1151 = v1170[0];
    var v1125 = v1151.elements;
    var v1086 = v1125[1];
    var v997 = v1086.value;
    var v814 = checkSequenceLength(v997, maxQuery);
    v598 = v814 == false;
  }
  var v268 = v598;
  if (v268) {
    return false;
  }
  var v1126 = theDocument.forms;
  var v1087 = v1126[0];
  var v998 = v1087.elements;
  var v816 = v998[5];
  var v599 = v816.options;
  var v1127 = theDocument.forms;
  var v1088 = v1127[0];
  var v999 = v1088.elements;
  var v817 = v999[5];
  var v600 = v817.selectedIndex;
  var v269 = v599[v600];
  var MATRIX = v269.value;
  var v1152 = theDocument.forms;
  var v1128 = v1152[0];
  var v1089 = v1128.elements;
  var v1000 = v1089[6];
  var v818 = v1000.options;
  var v1153 = theDocument.forms;
  var v1129 = v1153[0];
  var v1090 = v1129.elements;
  var v1001 = v1090[6];
  var v819 = v1001.selectedIndex;
  var v601 = v818[v819];
  var v270 = v601.value;
  var GAP_PENALTY = parseInt(v270);
  var v1154 = theDocument.forms;
  var v1130 = v1154[0];
  var v1091 = v1130.elements;
  var v1002 = v1091[7];
  var v820 = v1002.options;
  var v1155 = theDocument.forms;
  var v1131 = v1155[0];
  var v1092 = v1131.elements;
  var v1003 = v1092[7];
  var v821 = v1003.selectedIndex;
  var v602 = v820[v821];
  var v271 = v602.value;
  var HITS = parseInt(v271);
  openWindow("Fuzzy Protein DNA");
  openPre();
  var v1093 = theDocument.forms;
  var v1004 = v1093[0];
  var v822 = v1004.elements;
  var v603 = v822[0];
  var v272 = v603.value;
  targetSequence = getSequenceFromFasta(v272);
  targetSequence = removeNonProtein(targetSequence);
  var v1094 = theDocument.forms;
  var v1005 = v1094[0];
  var v823 = v1005.elements;
  var v604 = v823[0];
  var v273 = v604.value;
  targetTitle = getTitleFromFasta(v273);
  var v1095 = theDocument.forms;
  var v1006 = v1095[0];
  var v824 = v1006.elements;
  var v605 = v824[1];
  var v274 = v605.value;
  querySequence = getSequenceFromFasta(v274);
  querySequence = removeNonProtein(querySequence);
  queryTitle = "query";
  var v275 = outputWindow.document;
  var v276 = getFuzzySearchTitle(targetTitle, targetSequence, queryTitle, querySequence);
  JAM.call(v275.write, v275, [v276], JAM.policy.p23);
  var v606 = JAM.call(targetSequence.search, targetSequence, [/./], JAM.policy.p21);
  var v277 = v606 != -1;
  if (v277) {
    targetSequence = JAM.call(targetSequence.match, targetSequence, [/./g], JAM.policy.p21);
  }
  var v607 = JAM.call(querySequence.search, querySequence, [/./], JAM.policy.p21);
  var v278 = v607 != -1;
  if (v278) {
    querySequence = JAM.call(querySequence.match, querySequence, [/./g], JAM.policy.p21);
  }
  var v608 = targetSequence.length;
  var v279 = v608 == 0;
  if (v279) {
    alert("The sequence contains no protein residues.");
    return false;
  }
  var v609 = querySequence.length;
  var v280 = v609 == 0;
  if (v280) {
    alert("The query sequence contains no protein residues.");
    return false;
  }
  _fuzzySearchProtein(queryTitle, querySequence, targetTitle, targetSequence, MATRIX, GAP_PENALTY, HITS);
  closePre();
  closeWindow();

  JAM.stopProfile('compute');
  return true;
}
function _fuzzySearchProtein(queryTitle$$1, querySequence$$1, targetTitle$$1, targetSequence$$1, matrix, gapPenalty, hits) {
  var scoringMatrix;
  var v285 = matrix == "pam30";
  if (v285) {
    scoringMatrix = new Pam30;
  } else {
    var v284 = matrix == "pam70";
    if (v284) {
      scoringMatrix = new Pam70;
    } else {
      var v283 = matrix == "blosum80";
      if (v283) {
        scoringMatrix = new Blosum80;
      } else {
        var v282 = matrix == "blosum62";
        if (v282) {
          scoringMatrix = new Blosum62;
        } else {
          var v281 = matrix == "blosum45";
          if (v281) {
            scoringMatrix = new Blosum45;
          }
        }
      }
    }
  }
  var scoreSet = new ScoreSet;
  JAM.call(scoreSet.setScoreSetParam, scoreSet, [scoringMatrix, gapPenalty, hits], JAM.policy.p33);
  var fuzzySearch = new FuzzySearch;
  JAM.call(fuzzySearch.initializeMatrix, fuzzySearch, [querySequence$$1, targetSequence$$1, scoreSet], JAM.policy.p33);
  fuzzySearch.search();
  hits = fuzzySearch.getHits();
  var v610 = hits.length;
  var v298 = v610 > 0;
  if (v298) {
    var i$$11 = 0;
    var v611 = hits.length;
    var v296 = i$$11 < v611;
    for (;v296;) {
      var v286 = outputWindow.document;
      var v1132 = ">" + queryTitle$$1;
      var v1096 = v1132 + " from ";
      var v1133 = hits[i$$11];
      var v1097 = v1133.startM;
      var v1007 = v1096 + v1097;
      var v825 = v1007 + " to ";
      var v1008 = hits[i$$11];
      var v826 = v1008.endM;
      var v612 = v825 + v826;
      var v287 = v612 + "\n";
      JAM.call(v286.write, v286, [v287], JAM.policy.p23);
      var v288 = outputWindow.document;
      var v827 = hits[i$$11];
      var v613 = v827.sequenceM;
      var v289 = v613 + "\n";
      JAM.call(v288.write, v288, [v289], JAM.policy.p23);
      var v290 = outputWindow.document;
      var v1134 = ">" + targetTitle$$1;
      var v1098 = v1134 + " from ";
      var v1135 = hits[i$$11];
      var v1099 = v1135.startN;
      var v1009 = v1098 + v1099;
      var v828 = v1009 + " to ";
      var v1010 = hits[i$$11];
      var v829 = v1010.endN;
      var v614 = v828 + v829;
      var v291 = v614 + "\n";
      JAM.call(v290.write, v290, [v291], JAM.policy.p23);
      var v292 = outputWindow.document;
      var v830 = hits[i$$11];
      var v615 = v830.sequenceN;
      var v293 = v615 + "\n";
      JAM.call(v292.write, v292, [v293], JAM.policy.p23);
      var v294 = outputWindow.document;
      var v1011 = hits[i$$11];
      var v831 = v1011.score;
      var v616 = "Score: " + v831;
      var v295 = v616 + "\n\n";
      JAM.call(v294.write, v294, [v295], JAM.policy.p23);
      i$$11++;
      var v617 = hits.length;
      v296 = i$$11 < v617;
    }
  } else {
    var v297 = outputWindow.document;
    JAM.call(v297.write, v297, ["No hits were obtained.\n\n"], JAM.policy.p17);
  }
  return;
}
function getScore(r1$$1, r2) {
  var v299 = this.scoringMatrix;
  return JAM.call(v299.scoringMatrix_getScore, v299, [r1$$1, r2], JAM.policy.p33);
}
function setScoreSetParam(scoringMatrix$$1, gapPenalty$$1, hits$$1) {
  this.scoringMatrix = scoringMatrix$$1;
  this.gap = gapPenalty$$1;
  this.hits = hits$$1;
  return;
}
function ScoreSet() {
  return;
}
function scoringMatrix_getScore(r1$$2, r2$$1) {
  r1$$2 = r1$$2.toLowerCase();
  r2$$1 = r2$$1.toLowerCase();
  var v832 = this.scoreHash;
  var v833 = r1$$2 + r2$$1;
  var v618 = v832[v833];
  var v303 = v618 == null;
  if (v303) {
    var v834 = "Unrecognized residue pair: " + r1$$2;
    var v619 = v834 + ", ";
    var v300 = v619 + r2$$1;
    throw v300 + ".";
  } else {
    var v301 = this.scoreHash;
    var v302 = r1$$2 + r2$$1;
    return v301[v302];
  }
  return;
}
function scoringMatrix_fillHash(matrix$$1) {
  var v304 = matrix$$1[0];
  var cols = JAM.call(v304.split, v304, [/\s+/], JAM.policy.p21);
  var cells;
  var i$$12 = 1;
  var v620 = matrix$$1.length;
  var v309 = i$$12 < v620;
  for (;v309;) {
    var v305 = matrix$$1[i$$12];
    cells = JAM.call(v305.split, v305, [/\s+/], JAM.policy.p21);
    var j$$10 = 1;
    var v835 = cols.length;
    var v621 = v835 + 1;
    var v308 = j$$10 < v621;
    for (;v308;) {
      var v306 = this.scoreHash;
      var v836 = cells[0];
      var v622 = v836.toLowerCase();
      var v1012 = j$$10 - 1;
      var v837 = cols[v1012];
      var v623 = v837.toLowerCase();
      var v307 = v622 + v623;
      var v624 = cells[j$$10];
      var v1228 = parseInt(v624);
      introspect(JAM.policy.p6) {
        v306[v307] = v1228;
      }
      j$$10++;
      var v838 = cols.length;
      var v625 = v838 + 1;
      v308 = j$$10 < v625;
    }
    i$$12++;
    var v626 = matrix$$1.length;
    v309 = i$$12 < v626;
  }
  return;
}
function ScoringMatrix() {
  this.scoreHash = {};
  return;
}
function Blosum62() {
  var matrix$$2 = new Array("A  R  N  D  C  Q  E  G  H  I  L  K  M  F  P  S  T  W  Y  V", "A  4 -1 -2 -2  0 -1 -1  0 -2 -1 -1 -1 -1 -2 -1  1  0 -3 -2  0", "R -1  5  0 -2 -3  1  0 -2  0 -3 -2  2 -1 -3 -2 -1 -1 -3 -2 -3", "N -2  0  6  1 -3  0  0  0  1 -3 -3  0 -2 -3 -2  1  0 -4 -2 -3", "D -2 -2  1  6 -3  0  2 -1 -1 -3 -4 -1 -3 -3 -1  0 -1 -4 -3 -3", "C  0 -3 -3 -3  9 -3 -4 -3 -3 -1 -1 -3 -1 -2 -3 -1 -1 -2 -2 -1", "Q -1  1  0  0 -3  5  2 -2  0 -3 -2  1  0 -3 -1  0 -1 -2 -1 -2", "E -1  0  0  2 -4  2  5 -2  0 -3 -3  1 -2 -3 -1  0 -1 -3 -2 -2", 
  "G  0 -2  0 -1 -3 -2 -2  6 -2 -4 -4 -2 -3 -3 -2  0 -2 -2 -3 -3", "H -2  0  1 -1 -3  0  0 -2  8 -3 -3 -1 -2 -1 -2 -1 -2 -2  2 -3", "I -1 -3 -3 -3 -1 -3 -3 -4 -3  4  2 -3  1  0 -3 -2 -1 -3 -1  3", "L -1 -2 -3 -4 -1 -2 -3 -4 -3  2  4 -2  2  0 -3 -2 -1 -2 -1  1", "K -1  2  0 -1 -3  1  1 -2 -1 -3 -2  5 -1 -3 -1  0 -1 -3 -2 -2", "M -1 -1 -2 -3 -1  0 -2 -3 -2  1  2 -1  5  0 -2 -1 -1 -1 -1  1", "F -2 -3 -3 -3 -2 -3 -3 -3 -1  0  0 -3  0  6 -4 -2 -2  1  3 -1", "P -1 -2 -2 -1 -3 -1 -1 -2 -2 -3 -3 -1 -2 -4  7 -1 -1 -4 -3 -2", 
  "S  1 -1  1  0 -1  0  0  0 -1 -2 -2  0 -1 -2 -1  4  1 -3 -2 -2", "T  0 -1  0 -1 -1 -1 -1 -2 -2 -1 -1 -1 -1 -2 -1  1  5 -2 -2  0", "W -3 -3 -4 -4 -2 -2 -3 -2 -2 -3 -2 -3 -1  1 -4 -3 -2 11  2 -3", "Y -2 -2 -2 -3 -2 -1 -2 -3  2 -1 -1 -2 -1  3 -3 -2 -2  2  7 -1", "V  0 -3 -3 -3 -1 -2 -2 -3 -3  3  1 -2  1 -1 -2 -2  0 -3 -1  4");
  JAM.call(this.scoringMatrix_fillHash, this, [matrix$$2], JAM.policy.p23);
  return;
}
function Blosum45() {
  var matrix$$3 = new Array("A  R  N  D  C  Q  E  G  H  I  L  K  M  F  P  S  T  W  Y  V", "A  5 -2 -1 -2 -1 -1 -1  0 -2 -1 -1 -1 -1 -2 -1  1  0 -2 -2  0", "R -2  7  0 -1 -3  1  0 -2  0 -3 -2  3 -1 -2 -2 -1 -1 -2 -1 -2", "N -1  0  6  2 -2  0  0  0  1 -2 -3  0 -2 -2 -2  1  0 -4 -2 -3", "D -2 -1  2  7 -3  0  2 -1  0 -4 -3  0 -3 -4 -1  0 -1 -4 -2 -3", "C -1 -3 -2 -3 12 -3 -3 -3 -3 -3 -2 -3 -2 -2 -4 -1 -1 -5 -3 -1", "Q -1  1  0  0 -3  6  2 -2  1 -2 -2  1  0 -4 -1  0 -1 -2 -1 -3", "E -1  0  0  2 -3  2  6 -2  0 -3 -2  1 -2 -3  0  0 -1 -3 -2 -3", 
  "G  0 -2  0 -1 -3 -2 -2  7 -2 -4 -3 -2 -2 -3 -2  0 -2 -2 -3 -3", "H -2  0  1  0 -3  1  0 -2 10 -3 -2 -1  0 -2 -2 -1 -2 -3  2 -3", "I -1 -3 -2 -4 -3 -2 -3 -4 -3  5  2 -3  2  0 -2 -2 -1 -2  0  3", "L -1 -2 -3 -3 -2 -2 -2 -3 -2  2  5 -3  2  1 -3 -3 -1 -2  0  1", "K -1  3  0  0 -3  1  1 -2 -1 -3 -3  5 -1 -3 -1 -1 -1 -2 -1 -2", "M -1 -1 -2 -3 -2  0 -2 -2  0  2  2 -1  6  0 -2 -2 -1 -2  0  1", "F -2 -2 -2 -4 -2 -4 -3 -3 -2  0  1 -3  0  8 -3 -2 -1  1  3  0", "P -1 -2 -2 -1 -4 -1  0 -2 -2 -2 -3 -1 -2 -3  9 -1 -1 -3 -3 -3", 
  "S  1 -1  1  0 -1  0  0  0 -1 -2 -3 -1 -2 -2 -1  4  2 -4 -2 -1", "T  0 -1  0 -1 -1 -1 -1 -2 -2 -1 -1 -1 -1 -1 -1  2  5 -3 -1  0", "W -2 -2 -4 -4 -5 -2 -3 -2 -3 -2 -2 -2 -2  1 -3 -4 -3 15  3 -3", "Y -2 -1 -2 -2 -3 -1 -2 -3  2  0  0 -1  0  3 -3 -2 -1  3  8 -1", "V  0 -2 -3 -3 -1 -3 -3 -3 -3  3  1 -2  1  0 -3 -1  0 -3 -1  5");
  JAM.call(this.scoringMatrix_fillHash, this, [matrix$$3], JAM.policy.p23);
  return;
}
function Blosum80() {
  var matrix$$4 = new Array("A  R  N  D  C  Q  E  G  H  I  L  K  M  F  P  S  T  W  Y  V", "A  5 -2 -2 -2 -1 -1 -1  0 -2 -2 -2 -1 -1 -3 -1  1  0 -3 -2  0", "R -2  6 -1 -2 -4  1 -1 -3  0 -3 -3  2 -2 -4 -2 -1 -1 -4 -3 -3", "N -2 -1  6  1 -3  0 -1 -1  0 -4 -4  0 -3 -4 -3  0  0 -4 -3 -4", "D -2 -2  1  6 -4 -1  1 -2 -2 -4 -5 -1 -4 -4 -2 -1 -1 -6 -4 -4", "C -1 -4 -3 -4  9 -4 -5 -4 -4 -2 -2 -4 -2 -3 -4 -2 -1 -3 -3 -1", "Q -1  1  0 -1 -4  6  2 -2  1 -3 -3  1  0 -4 -2  0 -1 -3 -2 -3", "E -1 -1 -1  1 -5  2  6 -3  0 -4 -4  1 -2 -4 -2  0 -1 -4 -3 -3", 
  "G  0 -3 -1 -2 -4 -2 -3  6 -3 -5 -4 -2 -4 -4 -3 -1 -2 -4 -4 -4", "H -2  0  0 -2 -4  1  0 -3  8 -4 -3 -1 -2 -2 -3 -1 -2 -3  2 -4", "I -2 -3 -4 -4 -2 -3 -4 -5 -4  5  1 -3  1 -1 -4 -3 -1 -3 -2  3", "L -2 -3 -4 -5 -2 -3 -4 -4 -3  1  4 -3  2  0 -3 -3 -2 -2 -2  1", "K -1  2  0 -1 -4  1  1 -2 -1 -3 -3  5 -2 -4 -1 -1 -1 -4 -3 -3", "M -1 -2 -3 -4 -2  0 -2 -4 -2  1  2 -2  6  0 -3 -2 -1 -2 -2  1", "F -3 -4 -4 -4 -3 -4 -4 -4 -2 -1  0 -4  0  6 -4 -3 -2  0  3 -1", "P -1 -2 -3 -2 -4 -2 -2 -3 -3 -4 -3 -1 -3 -4  8 -1 -2 -5 -4 -3", 
  "S  1 -1  0 -1 -2  0  0 -1 -1 -3 -3 -1 -2 -3 -1  5  1 -4 -2 -2", "T  0 -1  0 -1 -1 -1 -1 -2 -2 -1 -2 -1 -1 -2 -2  1  5 -4 -2  0", "W -3 -4 -4 -6 -3 -3 -4 -4 -3 -3 -2 -4 -2  0 -5 -4 -4 11  2 -3", "Y -2 -3 -3 -4 -3 -2 -3 -4  2 -2 -2 -3 -2  3 -4 -2 -2  2  7 -2", "V  0 -3 -4 -4 -1 -3 -3 -4 -4  3  1 -3  1 -1 -3 -2  0 -3 -2  4");
  JAM.call(this.scoringMatrix_fillHash, this, [matrix$$4], JAM.policy.p23);
  return;
}
function Pam70() {
  var matrix$$5 = new Array("A   R   N   D   C   Q   E   G   H   I   L   K   M   F   P   S   T   W   Y   V", "A   5  -4  -2  -1  -4  -2  -1   0  -4  -2  -4  -4  -3  -6   0   1   1  -9  -5  -1", "R  -4   8  -3  -6  -5   0  -5  -6   0  -3  -6   2  -2  -7  -2  -1  -4   0  -7  -5", "N  -2  -3   6   3  -7  -1   0  -1   1  -3  -5   0  -5  -6  -3   1   0  -6  -3  -5", "D  -1  -6   3   6  -9   0   3  -1  -1  -5  -8  -2  -7 -10  -4  -1  -2 -10  -7  -5", "C  -4  -5  -7  -9   9  -9  -9  -6  -5  -4 -10  -9  -9  -8  -5  -1  -5 -11  -2  -4", 
  "Q  -2   0  -1   0  -9   7   2  -4   2  -5  -3  -1  -2  -9  -1  -3  -3  -8  -8  -4", "E  -1  -5   0   3  -9   2   6  -2  -2  -4  -6  -2  -4  -9  -3  -2  -3 -11  -6  -4", "G   0  -6  -1  -1  -6  -4  -2   6  -6  -6  -7  -5  -6  -7  -3   0  -3 -10  -9  -3", "H  -4   0   1  -1  -5   2  -2  -6   8  -6  -4  -3  -6  -4  -2  -3  -4  -5  -1  -4", "I  -2  -3  -3  -5  -4  -5  -4  -6  -6   7   1  -4   1   0  -5  -4  -1  -9  -4   3", "L  -4  -6  -5  -8 -10  -3  -6  -7  -4   1   6  -5   2  -1  -5  -6  -4  -4  -4   0", 
  "K  -4   2   0  -2  -9  -1  -2  -5  -3  -4  -5   6   0  -9  -4  -2  -1  -7  -7  -6", "M  -3  -2  -5  -7  -9  -2  -4  -6  -6   1   2   0  10  -2  -5  -3  -2  -8  -7   0", "F  -6  -7  -6 -10  -8  -9  -9  -7  -4   0  -1  -9  -2   8  -7  -4  -6  -2   4  -5", "P   0  -2  -3  -4  -5  -1  -3  -3  -2  -5  -5  -4  -5  -7   7   0  -2  -9  -9  -3", "S   1  -1   1  -1  -1  -3  -2   0  -3  -4  -6  -2  -3  -4   0   5   2  -3  -5  -3", "T   1  -4   0  -2  -5  -3  -3  -3  -4  -1  -4  -1  -2  -6  -2   2   6  -8  -4  -1", 
  "W  -9   0  -6 -10 -11  -8 -11 -10  -5  -9  -4  -7  -8  -2  -9  -3  -8  13  -3 -10", "Y  -5  -7  -3  -7  -2  -8  -6  -9  -1  -4  -4  -7  -7   4  -9  -5  -4  -3   9  -5", "V  -1  -5  -5  -5  -4  -4  -4  -3  -4   3   0  -6   0  -5  -3  -3  -1 -10  -5   6");
  JAM.call(this.scoringMatrix_fillHash, this, [matrix$$5], JAM.policy.p23);
  return;
}
function Pam30() {
  var matrix$$6 = new Array("A   R   N   D   C   Q   E   G   H   I   L   K   M   F   P   S   T   W   Y   V", "A   6  -7  -4  -3  -6  -4  -2  -2  -7  -5  -6  -7  -5  -8  -2   0  -1 -13  -8  -2", "R  -7   8  -6 -10  -8  -2  -9  -9  -2  -5  -8   0  -4  -9  -4  -3  -6  -2 -10  -8", "N  -4  -6   8   2 -11  -3  -2  -3   0  -5  -7  -1  -9  -9  -6   0  -2  -8  -4  -8", "D  -3 -10   2   8 -14  -2   2  -3  -4  -7 -12  -4 -11 -15  -8  -4  -5 -15 -11  -8", "C  -6  -8 -11 -14  10 -14 -14  -9  -7  -6 -15 -14 -13 -13  -8  -3  -8 -15  -4  -6", 
  "Q  -4  -2  -3  -2 -14   8   1  -7   1  -8  -5  -3  -4 -13  -3  -5  -5 -13 -12  -7", "E  -2  -9  -2   2 -14   1   8  -4  -5  -5  -9  -4  -7 -14  -5  -4  -6 -17  -8  -6", "G  -2  -9  -3  -3  -9  -7  -4   6  -9 -11 -10  -7  -8  -9  -6  -2  -6 -15 -14  -5", "H  -7  -2   0  -4  -7   1  -5  -9   9  -9  -6  -6 -10  -6  -4  -6  -7  -7  -3  -6", "I  -5  -5  -5  -7  -6  -8  -5 -11  -9   8  -1  -6  -1  -2  -8  -7  -2 -14  -6   2", "L  -6  -8  -7 -12 -15  -5  -9 -10  -6  -1   7  -8   1  -3  -7  -8  -7  -6  -7  -2", 
  "K  -7   0  -1  -4 -14  -3  -4  -7  -6  -6  -8   7  -2 -14  -6  -4  -3 -12  -9  -9", "M  -5  -4  -9 -11 -13  -4  -7  -8 -10  -1   1  -2  11  -4  -8  -5  -4 -13 -11  -1", "F  -8  -9  -9 -15 -13 -13 -14  -9  -6  -2  -3 -14  -4   9 -10  -6  -9  -4   2  -8", "P  -2  -4  -6  -8  -8  -3  -5  -6  -4  -8  -7  -6  -8 -10   8  -2  -4 -14 -13  -6", "S   0  -3   0  -4  -3  -5  -4  -2  -6  -7  -8  -4  -5  -6  -2   6   0  -5  -7  -6", "T  -1  -6  -2  -5  -8  -5  -6  -6  -7  -2  -7  -3  -4  -9  -4   0   7 -13  -6  -3", 
  "W -13  -2  -8 -15 -15 -13 -17 -15  -7 -14  -6 -12 -13  -4 -14  -5 -13  13  -5 -15", "Y  -8 -10  -4 -11  -4 -12  -8 -14  -3  -6  -7  -9 -11   2 -13  -7  -6  -5  10  -7", "V  -2  -8  -8  -8  -6  -7  -6  -5  -6   2  -2  -9  -1  -8  -6  -6  -3 -15  -7   7");
  JAM.call(this.scoringMatrix_fillHash, this, [matrix$$6], JAM.policy.p23);
  return;
}
function Node() {
  this.alreadyMatched = false;
  return;
}
function initializeMatrix(sequenceOne$$2, sequenceTwo$$2, scoreSet$$1) {
  this.scoreSet = scoreSet$$1;
  this.M = sequenceOne$$2;
  this.N = sequenceTwo$$2;
  this.score = 0;
  var v839 = this.M;
  var v627 = v839.length;
  var v310 = v627 + 1;
  var v1229 = new Array(v310);
  this.nodes = v1229;
  var i$$13 = 0;
  var v840 = this.nodes;
  var v628 = v840.length;
  var v314 = i$$13 < v628;
  for (;v314;) {
    var v311 = this.nodes;
    var v1013 = this.N;
    var v841 = v1013.length;
    var v629 = v841 + 1;
    var v1230 = new Array(v629);
    v311[i$$13] = v1230;
    var j$$11 = 0;
    var v1014 = this.nodes;
    var v842 = v1014[i$$13];
    var v630 = v842.length;
    var v313 = j$$11 < v630;
    for (;v313;) {
      var v631 = this.nodes;
      var v312 = v631[i$$13];
      var v1231 = new Node;
      v312[j$$11] = v1231;
      j$$11++;
      var v1015 = this.nodes;
      var v843 = v1015[i$$13];
      var v632 = v843.length;
      v313 = j$$11 < v632;
    }
    i$$13++;
    var v844 = this.nodes;
    var v633 = v844.length;
    v314 = i$$13 < v633;
  }
  var v845 = this.nodes;
  var v634 = v845[0];
  var v315 = v634[0];
  v315.value = 0;
  i$$13 = 1;
  var v846 = this.nodes;
  var v635 = v846.length;
  var v319 = i$$13 < v635;
  for (;v319;) {
    var v847 = this.nodes;
    var v636 = v847[i$$13];
    var v316 = v636[0];
    var v1016 = this.nodes;
    var v1017 = i$$13 - 1;
    var v848 = v1016[v1017];
    var v637 = v848[0];
    v316.value = v637.value;
    var v849 = this.nodes;
    var v638 = v849[i$$13];
    var v317 = v638[0];
    v317.tracebackI = i$$13 - 1;
    var v850 = this.nodes;
    var v639 = v850[i$$13];
    var v318 = v639[0];
    v318.tracebackJ = 0;
    i$$13++;
    var v851 = this.nodes;
    var v640 = v851.length;
    v319 = i$$13 < v640;
  }
  j$$11 = 1;
  var v1018 = this.nodes;
  var v852 = v1018[0];
  var v641 = v852.length;
  var v323 = j$$11 < v641;
  for (;v323;) {
    var v853 = this.nodes;
    var v642 = v853[0];
    var v320 = v642[j$$11];
    var v1019 = this.nodes;
    var v854 = v1019[0];
    var v855 = j$$11 - 1;
    var v643 = v854[v855];
    v320.value = v643.value;
    var v856 = this.nodes;
    var v644 = v856[0];
    var v321 = v644[j$$11];
    v321.tracebackI = 0;
    var v857 = this.nodes;
    var v645 = v857[0];
    var v322 = v645[j$$11];
    v322.tracebackJ = j$$11 - 1;
    j$$11++;
    var v1020 = this.nodes;
    var v858 = v1020[0];
    var v646 = v858.length;
    v323 = j$$11 < v646;
  }
  return;
}
function dumpMatrix() {
  var v324 = outputWindow.document;
  var v1100 = this.nodes;
  var v1021 = v1100.length;
  var v859 = "Dynamic programming matrix i=" + v1021;
  var v647 = v859 + " and j=";
  var v1022 = this.nodes;
  var v860 = v1022[0];
  var v648 = v860.length;
  var v325 = v647 + v648;
  JAM.call(v324.write, v324, [v325], JAM.policy.p23);
  var v326 = outputWindow.document;
  JAM.call(v326.write, v326, ["\n"], JAM.policy.p17);
  var i$$14 = 0;
  var v861 = this.nodes;
  var v649 = v861.length;
  var v337 = i$$14 < v649;
  for (;v337;) {
    var j$$12 = 0;
    var v1023 = this.nodes;
    var v862 = v1023[i$$14];
    var v650 = v862.length;
    var v335 = j$$12 < v650;
    for (;v335;) {
      var v863 = this.nodes;
      var v651 = v863[i$$14];
      var v327 = v651[j$$12];
      var traceI = v327.tracebackI;
      var v864 = this.nodes;
      var v652 = v864[i$$14];
      var v328 = v652[j$$12];
      var traceJ = v328.tracebackJ;
      var v329 = traceI == undefined;
      if (v329) {
        traceI = "u";
      }
      var v330 = traceJ == undefined;
      if (v330) {
        traceJ = "u";
      }
      var v1171 = "(" + i$$14;
      var v1156 = v1171 + ",";
      var v1136 = v1156 + j$$12;
      var v1101 = v1136 + ")[";
      var v1024 = v1101 + traceI;
      var v865 = v1024 + ",";
      var v653 = v865 + traceJ;
      var v331 = v653 + "]=";
      var v1025 = this.nodes;
      var v866 = v1025[i$$14];
      var v654 = v866[j$$12];
      var v332 = v654.value;
      var output = v331 + v332;
      var v333 = outputWindow.document;
      var v334 = rightNum(output, "", 20, " ");
      JAM.call(v333.write, v333, [v334], JAM.policy.p23);
      j$$12++;
      var v1026 = this.nodes;
      var v867 = v1026[i$$14];
      var v655 = v867.length;
      v335 = j$$12 < v655;
    }
    var v336 = outputWindow.document;
    JAM.call(v336.write, v336, ["\n"], JAM.policy.p17);
    i$$14++;
    var v868 = this.nodes;
    var v656 = v868.length;
    v337 = i$$14 < v656;
  }
  var v338 = outputWindow.document;
  JAM.call(v338.write, v338, ["\n"], JAM.policy.p17);
  return;
}
function updateMatrix() {
  var i$$15 = 1;
  var v869 = this.nodes;
  var v657 = v869.length;
  var v379 = i$$15 < v657;
  for (;v379;) {
    var j$$13 = 1;
    var v1027 = this.nodes;
    var v870 = v1027[0];
    var v658 = v870.length;
    var v378 = j$$13 < v658;
    for (;v378;) {
      var a;
      var b;
      var c;
      var v1028 = this.nodes;
      var v871 = v1028[i$$15];
      var v659 = v871[j$$13];
      var v362 = v659.alreadyMatched;
      if (v362) {
        a = 0;
        b = 0;
        c = 0;
      } else {
        var v1102 = this.nodes;
        var v1029 = v1102.length;
        var v872 = v1029 - 1;
        var v660 = i$$15 == v872;
        if (v660) {
          var v1137 = this.nodes;
          var v1103 = v1137[0];
          var v1030 = v1103.length;
          var v873 = v1030 - 1;
          v660 = j$$13 == v873;
        }
        var v361 = v660;
        if (v361) {
          var v874 = this.nodes;
          var v875 = i$$15 - 1;
          var v661 = v874[v875];
          var v339 = v661[j$$13];
          a = v339.value;
          var v876 = this.nodes;
          var v662 = v876[i$$15];
          var v663 = j$$13 - 1;
          var v340 = v662[v663];
          b = v340.value;
          var v1031 = this.nodes;
          var v1032 = i$$15 - 1;
          var v877 = v1031[v1032];
          var v878 = j$$13 - 1;
          var v664 = v877[v878];
          var v341 = v664.value;
          var v665 = this.scoreSet;
          var v879 = this.M;
          var v880 = i$$15 - 1;
          var v666 = v879[v880];
          var v881 = this.N;
          var v882 = j$$13 - 1;
          var v667 = v881[v882];
          var v342 = JAM.call(v665.getScore, v665, [v666, v667], JAM.policy.p33);
          c = v341 + v342;
        } else {
          var v1033 = this.nodes;
          var v883 = v1033.length;
          var v668 = v883 - 1;
          var v360 = i$$15 == v668;
          if (v360) {
            var v1034 = this.nodes;
            var v1035 = i$$15 - 1;
            var v884 = v1034[v1035];
            var v669 = v884[j$$13];
            var v343 = v669.value;
            var v670 = this.scoreSet;
            var v344 = v670.gap;
            a = v343 - v344;
            var v885 = this.nodes;
            var v671 = v885[i$$15];
            var v672 = j$$13 - 1;
            var v345 = v671[v672];
            b = v345.value;
            var v1036 = this.nodes;
            var v1037 = i$$15 - 1;
            var v886 = v1036[v1037];
            var v887 = j$$13 - 1;
            var v673 = v886[v887];
            var v346 = v673.value;
            var v674 = this.scoreSet;
            var v888 = this.M;
            var v889 = i$$15 - 1;
            var v675 = v888[v889];
            var v890 = this.N;
            var v891 = j$$13 - 1;
            var v676 = v890[v891];
            var v347 = JAM.call(v674.getScore, v674, [v675, v676], JAM.policy.p33);
            c = v346 + v347;
          } else {
            var v1104 = this.nodes;
            var v1038 = v1104[0];
            var v892 = v1038.length;
            var v677 = v892 - 1;
            var v359 = j$$13 == v677;
            if (v359) {
              var v893 = this.nodes;
              var v894 = i$$15 - 1;
              var v678 = v893[v894];
              var v348 = v678[j$$13];
              a = v348.value;
              var v1039 = this.nodes;
              var v895 = v1039[i$$15];
              var v896 = j$$13 - 1;
              var v679 = v895[v896];
              var v349 = v679.value;
              var v680 = this.scoreSet;
              var v350 = v680.gap;
              b = v349 - v350;
              var v1040 = this.nodes;
              var v1041 = i$$15 - 1;
              var v897 = v1040[v1041];
              var v898 = j$$13 - 1;
              var v681 = v897[v898];
              var v351 = v681.value;
              var v682 = this.scoreSet;
              var v899 = this.M;
              var v900 = i$$15 - 1;
              var v683 = v899[v900];
              var v901 = this.N;
              var v902 = j$$13 - 1;
              var v684 = v901[v902];
              var v352 = JAM.call(v682.getScore, v682, [v683, v684], JAM.policy.p33);
              c = v351 + v352;
            } else {
              var v1042 = this.nodes;
              var v1043 = i$$15 - 1;
              var v903 = v1042[v1043];
              var v685 = v903[j$$13];
              var v353 = v685.value;
              var v686 = this.scoreSet;
              var v354 = v686.gap;
              a = v353 - v354;
              var v1044 = this.nodes;
              var v904 = v1044[i$$15];
              var v905 = j$$13 - 1;
              var v687 = v904[v905];
              var v355 = v687.value;
              var v688 = this.scoreSet;
              var v356 = v688.gap;
              b = v355 - v356;
              var v1045 = this.nodes;
              var v1046 = i$$15 - 1;
              var v906 = v1045[v1046];
              var v907 = j$$13 - 1;
              var v689 = v906[v907];
              var v357 = v689.value;
              var v690 = this.scoreSet;
              var v908 = this.M;
              var v909 = i$$15 - 1;
              var v691 = v908[v909];
              var v910 = this.N;
              var v911 = j$$13 - 1;
              var v692 = v910[v911];
              var v358 = JAM.call(v690.getScore, v690, [v691, v692], JAM.policy.p33);
              c = v357 + v358;
            }
          }
        }
      }
      var v693 = a > b;
      if (v693) {
        v693 = a > c;
      }
      var v373 = v693;
      if (v373) {
        var v912 = this.nodes;
        var v694 = v912[i$$15];
        var v363 = v694[j$$13];
        v363.value = a;
        var v913 = this.nodes;
        var v695 = v913[i$$15];
        var v364 = v695[j$$13];
        v364.tracebackI = i$$15 - 1;
        var v914 = this.nodes;
        var v696 = v914[i$$15];
        var v365 = v696[j$$13];
        v365.tracebackJ = j$$13;
      } else {
        var v697 = b > c;
        if (v697) {
          v697 = b > a;
        }
        var v372 = v697;
        if (v372) {
          var v915 = this.nodes;
          var v698 = v915[i$$15];
          var v366 = v698[j$$13];
          v366.value = b;
          var v916 = this.nodes;
          var v699 = v916[i$$15];
          var v367 = v699[j$$13];
          v367.tracebackI = i$$15;
          var v917 = this.nodes;
          var v700 = v917[i$$15];
          var v368 = v700[j$$13];
          v368.tracebackJ = j$$13 - 1;
        } else {
          var v918 = this.nodes;
          var v701 = v918[i$$15];
          var v369 = v701[j$$13];
          v369.value = c;
          var v919 = this.nodes;
          var v702 = v919[i$$15];
          var v370 = v702[j$$13];
          v370.tracebackI = i$$15 - 1;
          var v920 = this.nodes;
          var v703 = v920[i$$15];
          var v371 = v703[j$$13];
          v371.tracebackJ = j$$13 - 1;
        }
      }
      var v1105 = this.nodes;
      var v1047 = v1105[i$$15];
      var v921 = v1047[j$$13];
      var v704 = v921.value;
      var v377 = v704 < 0;
      if (v377) {
        var v922 = this.nodes;
        var v705 = v922[i$$15];
        var v374 = v705[j$$13];
        v374.value = 0;
        var v923 = this.nodes;
        var v706 = v923[i$$15];
        var v375 = v706[j$$13];
        v375.tracebackI = undefined;
        var v924 = this.nodes;
        var v707 = v924[i$$15];
        var v376 = v707[j$$13];
        v376.tracebackJ = undefined;
      }
      j$$13++;
      var v1048 = this.nodes;
      var v925 = v1048[0];
      var v708 = v925.length;
      v378 = j$$13 < v708;
    }
    i$$15++;
    var v926 = this.nodes;
    var v709 = v926.length;
    v379 = i$$15 < v709;
  }
  var v927 = this.nodes;
  var v1106 = this.nodes;
  var v1049 = v1106.length;
  var v928 = v1049 - 1;
  var v710 = v927[v928];
  var v1107 = this.nodes;
  var v1050 = v1107[0];
  var v929 = v1050.length;
  var v711 = v929 - 1;
  var v380 = v710[v711];
  this.score = v380.value;
  return;
}
function search() {
  var v1232 = new Array;
  this.hits = v1232;
  var hitCount = 0;
  var v930 = this.scoreSet;
  var v712 = v930.hits;
  var v404 = hitCount < v712;
  for (;v404;) {
    this.updateMatrix();
    var maxNodeValue = 0;
    var maxNodeI = undefined;
    var maxNodeJ = undefined;
    var i$$16 = 1;
    var v931 = this.nodes;
    var v713 = v931.length;
    var v384 = i$$16 < v713;
    for (;v384;) {
      var j$$14 = 1;
      var v1051 = this.nodes;
      var v932 = v1051[0];
      var v714 = v932.length;
      var v383 = j$$14 < v714;
      for (;v383;) {
        var v1108 = this.nodes;
        var v1052 = v1108[i$$16];
        var v933 = v1052[j$$14];
        var v715 = v933.value;
        var v382 = v715 > maxNodeValue;
        if (v382) {
          var v934 = this.nodes;
          var v716 = v934[i$$16];
          var v381 = v716[j$$14];
          maxNodeValue = v381.value;
          maxNodeI = i$$16;
          maxNodeJ = j$$14;
        }
        j$$14++;
        var v1053 = this.nodes;
        var v935 = v1053[0];
        var v717 = v935.length;
        v383 = j$$14 < v717;
      }
      i$$16++;
      var v936 = this.nodes;
      var v718 = v936.length;
      v384 = i$$16 < v718;
    }
    var v385 = maxNodeValue == 0;
    if (v385) {
      break;
    }
    var currentI = maxNodeI;
    var currentJ = maxNodeJ;
    var v719 = this.nodes;
    var v386 = v719[maxNodeI];
    var currentNode = v386[maxNodeJ];
    var alignedM = new Array;
    var alignedN = new Array;
    var score = currentNode.value;
    var endM = undefined;
    var endN = undefined;
    var v937 = currentNode.tracebackI;
    var v720 = v937 != undefined;
    if (v720) {
      var v938 = currentNode.tracebackJ;
      v720 = v938 != undefined;
    }
    var v401 = v720;
    for (;v401;) {
      var v721 = currentI == 0;
      var v939 = !v721;
      if (v939) {
        v721 = currentJ == 0;
      }
      var v387 = v721;
      if (v387) {
        break;
      }
      var v940 = currentNode.tracebackI;
      var v941 = currentI - 1;
      var v722 = v940 == v941;
      if (v722) {
        var v942 = currentNode.tracebackJ;
        var v943 = currentJ - 1;
        v722 = v942 == v943;
      }
      var v396 = v722;
      if (v396) {
        var v388 = endM == undefined;
        if (v388) {
          endM = currentI;
          endN = currentJ;
        }
        var v723 = this.M;
        var v724 = currentI - 1;
        var v389 = v723[v724];
        JAM.call(alignedM.push, alignedM, [v389], JAM.policy.p23);
        var v725 = this.N;
        var v726 = currentJ - 1;
        var v390 = v725[v726];
        JAM.call(alignedN.push, alignedN, [v390], JAM.policy.p23);
      } else {
        var v727 = currentNode.tracebackJ;
        var v728 = currentJ - 1;
        var v395 = v727 == v728;
        if (v395) {
          var v392 = endM != undefined;
          if (v392) {
            JAM.call(alignedM.push, alignedM, ["-"], JAM.policy.p17);
            var v729 = this.N;
            var v730 = currentJ - 1;
            var v391 = v729[v730];
            JAM.call(alignedN.push, alignedN, [v391], JAM.policy.p23);
          }
        } else {
          var v394 = endM != undefined;
          if (v394) {
            var v731 = this.M;
            var v732 = currentI - 1;
            var v393 = v731[v732];
            JAM.call(alignedM.push, alignedM, [v393], JAM.policy.p23);
            JAM.call(alignedN.push, alignedN, ["-"], JAM.policy.p17);
          }
        }
      }
      var v944 = this.nodes;
      var v733 = v944[currentI];
      var v397 = v733[currentJ];
      v397.value = 0;
      var v945 = this.nodes;
      var v734 = v945[currentI];
      var v398 = v734[currentJ];
      v398.alreadyMatched = true;
      currentI = currentNode.tracebackI;
      currentJ = currentNode.tracebackJ;
      var v735 = this.nodes;
      var v736 = currentNode.tracebackI;
      var v399 = v735[v736];
      var v400 = currentNode.tracebackJ;
      currentNode = v399[v400];
      var v946 = currentNode.tracebackI;
      var v737 = v946 != undefined;
      if (v737) {
        var v947 = currentNode.tracebackJ;
        v737 = v947 != undefined;
      }
      v401 = v737;
    }
    alignedM = alignedM.reverse();
    alignedN = alignedN.reverse();
    var v402 = this.hits;
    var v738 = JAM.call(alignedM.join, alignedM, [""], JAM.policy.p17);
    var v739 = JAM.call(alignedN.join, alignedN, [""], JAM.policy.p17);
    var v740 = currentI + 1;
    var v741 = currentJ + 1;
    var v403 = new Hit(v738, v739, score, v740, endM, v741, endN);
    JAM.call(v402.push, v402, [v403], JAM.policy.p23);
    hitCount++;
    var v948 = this.scoreSet;
    var v742 = v948.hits;
    v404 = hitCount < v742;
  }
  return;
}
function getHits() {
  return this.hits;
}
function FuzzySearch() {
  return;
}
function Hit(sequenceM, sequenceN, score$$1, startM, endM$$1, startN, endN$$1) {
  this.sequenceM = sequenceM;
  this.sequenceN = sequenceN;
  this.score = score$$1;
  this.startM = startM;
  this.endM = endM$$1;
  this.startN = startN;
  this.endN = endN$$1;
  return;
}
new ScoreSet;
var v405 = ScoreSet.prototype;
v405.getScore = getScore;
var v406 = ScoreSet.prototype;
v406.setScoreSetParam = setScoreSetParam;
new ScoringMatrix;
var v407 = ScoringMatrix.prototype;
v407.scoringMatrix_getScore = scoringMatrix_getScore;
var v408 = ScoringMatrix.prototype;
v408.scoringMatrix_fillHash = scoringMatrix_fillHash;
var v409 = Blosum62;
var v1233 = new ScoringMatrix;
v409.prototype = v1233;
var v410 = Blosum45;
var v1234 = new ScoringMatrix;
v410.prototype = v1234;
var v411 = Blosum80;
var v1235 = new ScoringMatrix;
v411.prototype = v1235;
var v412 = Pam30;
var v1236 = new ScoringMatrix;
v412.prototype = v1236;
new FuzzySearch;
var v413 = FuzzySearch.prototype;
v413.initializeMatrix = initializeMatrix;
var v414 = FuzzySearch.prototype;
v414.updateMatrix = updateMatrix;
var v415 = FuzzySearch.prototype;
v415.search = search;
var v416 = FuzzySearch.prototype;
v416.getHits = getHits;
var v417 = FuzzySearch.prototype;
v417.dumpMatrix = dumpMatrix;
JAM.set(document, "onload", v2);
var v418 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p17);
JAM.set(v418, "onclick", v3);
var v419 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p17);
JAM.set(v419, "onclick", v4)

JAM.stopProfile('load');
