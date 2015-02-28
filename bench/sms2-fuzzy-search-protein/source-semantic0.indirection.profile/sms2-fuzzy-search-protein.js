
JAM.startProfile('load');
function v4() {
  var v946 = document.forms;
  var v741 = v946[0];
  var v418 = v741.elements;
  var v5 = v418[0];
  v5.value = " ";
  var v947 = document.forms;
  var v742 = v947[0];
  var v419 = v742.elements;
  var v6 = v419[4];
  v6.value = " ";
  return;
}
function v3() {
  try {
    fuzzySearchProtein();
  } catch (e$$5) {
    var v7 = "The following error was encountered: " + e$$5;
    alert(v7);
  }
  return;
}
function v2() {
  var v420 = document.main_form;
  var v8 = v420.main_submit;
  v8.focus();
  return;
}
function addReturns(sequence) {
  function v0(str$$6, p1, offset$$8, s$$2) {
    return p1 + "\n";
  }
  sequence = JAM.call(sequence.replace, sequence, [/(.{60})/g, v0], JAM.policy.p23);
  return sequence;
}
function checkAlign(arrayOfTitles, arrayOfSequences) {
  var v9 = arrayOfSequences[0];
  var lengthOfAlign = v9.length;
  var v421 = arrayOfSequences.length;
  var v10 = v421 < 2;
  if (v10) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v422 = arrayOfTitles.length;
  var v12 = i$$1 < v422;
  for (;v12;) {
    var v1051 = arrayOfTitles[i$$1];
    var v948 = JAM.call(v1051.search, v1051, [/\S/], JAM.policy.p21);
    var v743 = v948 == -1;
    var v950 = !v743;
    if (v950) {
      var v1052 = arrayOfSequences[i$$1];
      var v949 = JAM.call(v1052.search, v1052, [/\S/], JAM.policy.p21);
      v743 = v949 == -1;
    }
    var v423 = v743;
    var v745 = !v423;
    if (v745) {
      var v951 = arrayOfSequences[i$$1];
      var v744 = v951.length;
      v423 = v744 != lengthOfAlign;
    }
    var v11 = v423;
    if (v11) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v424 = arrayOfTitles.length;
    v12 = i$$1 < v424;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v1106 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p21);
  var v1053 = v1106 == -1;
  var v1108 = !v1053;
  if (v1108) {
    var v1107 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p21);
    v1053 = v1107 == -1;
  }
  var v952 = v1053;
  var v1055 = !v952;
  if (v1055) {
    var v1054 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p21);
    v952 = v1054 == -1;
  }
  var v746 = v952;
  var v954 = !v746;
  if (v954) {
    var v953 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p21);
    v746 = v953 == -1;
  }
  var v425 = v746;
  var v748 = !v425;
  if (v748) {
    var v747 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p21);
    v425 = v747 == -1;
  }
  var v13 = v425;
  if (v13) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v749 = formElement.value;
  var v426 = JAM.call(v749.search, v749, [/\S/], JAM.policy.p21);
  var v14 = v426 == -1;
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
  var v427 = arrayOfPatterns.length;
  var v17 = z$$2 < v427;
  for (;v17;) {
    var v750 = arrayOfPatterns[z$$2];
    var v428 = JAM.call(v750.search, v750, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p21);
    var v15 = v428 == -1;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v751 = arrayOfPatterns[z$$2];
    var v429 = moreExpressionCheck(v751);
    var v16 = v429 == false;
    if (v16) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v430 = arrayOfPatterns.length;
    v17 = z$$2 < v430;
  }
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v18);
  var v19 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v19);
  var j = 0;
  var v431 = arrayOfPatterns.length;
  var v23 = j < v431;
  for (;v23;) {
    var v752 = arrayOfPatterns[j];
    var v432 = JAM.call(v752.match, v752, [/\/.+\//], JAM.policy.p21);
    var v20 = v432 + "gi";
    if (JAM.isEval(eval)) {
      var v1219 = eval("introspect(JAM.policy.pFull) { " + v20 + " }")
    } else {
      var v1219 = JAM.call(eval, null, [v20])
    }
    geneticCodeMatchExp[j] = v1219;
    var v433 = arrayOfPatterns[j];
    var v21 = JAM.call(v433.match, v433, [/=[a-zA-Z\*]/], JAM.policy.p21);
    var v1220 = v21.toString();
    geneticCodeMatchResult[j] = v1220;
    var v22 = geneticCodeMatchResult[j];
    var v1221 = JAM.call(v22.replace, v22, [/=/g, ""], JAM.policy.p23);
    geneticCodeMatchResult[j] = v1221;
    j++;
    var v434 = arrayOfPatterns.length;
    v23 = j < v434;
  }
  var i$$2 = 0;
  var v753 = testSequence.length;
  var v435 = v753 - 3;
  var v30 = i$$2 <= v435;
  for (;v30;) {
    var v24 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v24], JAM.policy.p23);
    j = 0;
    var v436 = geneticCodeMatchExp.length;
    var v28 = j < v436;
    for (;v28;) {
      var v754 = geneticCodeMatchExp[j];
      var v437 = JAM.call(codon.search, codon, [v754], JAM.policy.p22);
      var v27 = v437 != -1;
      if (v27) {
        var v26 = oneMatch == true;
        if (v26) {
          var v438 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v25 = v438 + ".";
          alert(v25);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v439 = geneticCodeMatchExp.length;
      v28 = j < v439;
    }
    var v29 = oneMatch == false;
    if (v29) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v755 = testSequence.length;
    var v440 = v755 - 3;
    v30 = i$$2 <= v440;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v441 = arrayOfPatterns$$1.length;
  var v32 = z$$3 < v441;
  for (;v32;) {
    var v756 = arrayOfPatterns$$1[z$$3];
    var v442 = JAM.call(v756.search, v756, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p21);
    var v31 = v442 != -1;
    if (v31) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v443 = arrayOfPatterns$$1.length;
    v32 = z$$3 < v443;
  }
  var i$$3 = 0;
  var v444 = arrayOfPatterns$$1.length;
  var v36 = i$$3 < v444;
  for (;v36;) {
    var v757 = arrayOfPatterns$$1[i$$3];
    var v445 = "[" + v757;
    var v33 = v445 + "]";
    var re = new RegExp(v33, "gi");
    var j$$1 = i$$3 + 1;
    var v446 = arrayOfPatterns$$1.length;
    var v35 = j$$1 < v446;
    for (;v35;) {
      var v758 = arrayOfPatterns$$1[j$$1];
      var v447 = JAM.call(v758.search, v758, [re], JAM.policy.p22);
      var v34 = v447 != -1;
      if (v34) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v448 = arrayOfPatterns$$1.length;
      v35 = j$$1 < v448;
    }
    i$$3++;
    var v449 = arrayOfPatterns$$1.length;
    v36 = i$$3 < v449;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v450 = arrayOfPatterns$$2.length;
  var v39 = z$$4 < v450;
  for (;v39;) {
    var v759 = arrayOfPatterns$$2[z$$4];
    var v451 = JAM.call(v759.search, v759, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p21);
    var v37 = v451 == -1;
    if (v37) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v760 = arrayOfPatterns$$2[z$$4];
    var v452 = moreExpressionCheck(v760);
    var v38 = v452 == false;
    if (v38) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v453 = arrayOfPatterns$$2.length;
    v39 = z$$4 < v453;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v955 = getSequenceFromFasta(text$$7);
  var v761 = JAM.call(v955.replace, v955, [/[^A-Za-z]/g, ""], JAM.policy.p23);
  var v454 = v761.length;
  var v41 = v454 > maxInput;
  if (v41) {
    var v455 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v40 = v455 + " characters.";
    alert(v40);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v456 = text$$8.length;
  var v43 = v456 > maxInput$$1;
  if (v43) {
    var v457 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v42 = v457 + " characters.";
    alert(v42);
    return false;
  } else {
    return true;
  }
  return;
}
function complement(dnaSequence) {
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/g/g, "1"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/c/g, "2"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "c"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "g"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/G/g, "1"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/C/g, "2"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "C"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "G"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/a/g, "1"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/t/g, "2"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "t"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "a"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/A/g, "1"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/T/g, "2"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "T"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "A"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/u/g, "a"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/U/g, "A"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/r/g, "1"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/y/g, "2"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "y"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "r"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/R/g, "1"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/Y/g, "2"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "Y"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "R"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/k/g, "1"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/m/g, "2"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "m"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "k"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/K/g, "1"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/M/g, "2"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "M"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "K"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/b/g, "1"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/v/g, "2"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "v"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "b"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/B/g, "1"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/V/g, "2"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "V"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "B"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/d/g, "1"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/h/g, "2"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "h"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "d"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/D/g, "1"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/H/g, "2"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "H"], JAM.policy.p23);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "D"], JAM.policy.p23);
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
  return;
}
function convertDegenerates(sequence$$1) {
  sequence$$1 = sequence$$1.toLowerCase();
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/t/g, "[TU]"], JAM.policy.p23);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/r/g, "[AGR]"], JAM.policy.p23);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/y/g, "[CTUY]"], JAM.policy.p23);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/s/g, "[GCS]"], JAM.policy.p23);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/w/g, "[ATUW]"], JAM.policy.p23);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/k/g, "[GTUK]"], JAM.policy.p23);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/m/g, "[ACM]"], JAM.policy.p23);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/b/g, "[CGTUBSKY]"], JAM.policy.p23);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/d/g, "[AGTUDRKW]"], JAM.policy.p23);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/h/g, "[ACTUHMYW]"], JAM.policy.p23);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/v/g, "[ACGVSMR]"], JAM.policy.p23);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/n/g, "[ACGTURYSWKMBDHVN]"], JAM.policy.p23);
  return sequence$$1;
}
function earlyCheckAlign(alignArray) {
  var v458 = alignArray.length;
  var v50 = v458 < 3;
  if (v50) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v459 = alignArray.length;
  var v52 = i$$4 < v459;
  for (;v52;) {
    var v762 = alignArray[i$$4];
    var v460 = JAM.call(v762.search, v762, [/[^\s]+\s/], JAM.policy.p21);
    var v51 = v460 == -1;
    if (v51) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v461 = alignArray.length;
    v52 = i$$4 < v461;
  }
  return true;
}
function filterAlignSeq(alignSeq) {
  alignSeq = JAM.call(alignSeq.replace, alignSeq, [/[^abcdefghiklmnpqrstvwxyz\.\-]/gi, ""], JAM.policy.p23);
  return alignSeq;
}
function filterFastaTitle(sequenceTitle) {
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/\s{2,}/g, " "], JAM.policy.p23);
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/^\s*/g, ""], JAM.policy.p23);
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/[\f\n\r\t]+$/g, "\n"], JAM.policy.p23);
  return JAM.call(sequenceTitle.replace, sequenceTitle, [/[\<\>]\n/gi, ""], JAM.policy.p23);
}
function getArrayOfFasta(sequenceData) {
  var arrayOfFasta = new Array;
  var matchArray;
  var re$$1 = /\>[^\>]+/g;
  var v462 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p21);
  var v55 = v462 != -1;
  if (v55) {
    var v54 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p22);
    for (;v54;) {
      var v53 = matchArray[0];
      JAM.call(arrayOfFasta.push, arrayOfFasta, [v53], JAM.policy.p22);
      v54 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p22);
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v463 = sequence$$2.length;
  var v56 = "&gt;results for " + v463;
  var stringToReturn = v56 + " residue sequence ";
  var v464 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p21);
  var v58 = v464 != -1;
  if (v58) {
    var v465 = stringToReturn + '"';
    var v57 = v465 + fastaSequenceTitle;
    stringToReturn = v57 + '"';
  }
  var v466 = stringToReturn + ' starting "';
  var v467 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p19);
  var v59 = v466 + v467;
  stringToReturn = v59 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v468 = sequenceOne.length;
  var v60 = "Search results for " + v468;
  var stringToReturn$$1 = v60 + " residue sequence ";
  var v469 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p21);
  var v62 = v469 != -1;
  if (v62) {
    var v470 = stringToReturn$$1 + '"';
    var v61 = v470 + fastaSequenceTitleOne;
    stringToReturn$$1 = v61 + '"';
  }
  var v471 = stringToReturn$$1 + ' starting "';
  var v472 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p19);
  var v63 = v471 + v472;
  stringToReturn$$1 = v63 + '"\n';
  var v473 = stringToReturn$$1 + "and ";
  var v474 = sequenceTwo.length;
  var v64 = v473 + v474;
  stringToReturn$$1 = v64 + " residue sequence ";
  var v475 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p21);
  var v66 = v475 != -1;
  if (v66) {
    var v476 = stringToReturn$$1 + '"';
    var v65 = v476 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v65 + '"';
  }
  var v477 = stringToReturn$$1 + ' starting "';
  var v478 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p19);
  var v67 = v477 + v478;
  stringToReturn$$1 = v67 + '"';
  var v68 = '<div class="info">' + stringToReturn$$1;
  return v68 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v69 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v69);
  var j$$2 = 0;
  var v479 = arrayOfPatterns$$3.length;
  var v71 = j$$2 < v479;
  for (;v71;) {
    var v763 = arrayOfPatterns$$3[j$$2];
    var v480 = JAM.call(v763.match, v763, [/\/.+\//], JAM.policy.p21);
    var v70 = v480 + "gi";
    if (JAM.isEval(eval)) {
      var v1222 = eval("introspect(JAM.policy.pFull) { " + v70 + " }")
    } else {
      var v1222 = JAM.call(eval, null, [v70])
    }
    geneticCodeMatchExp$$1[j$$2] = v1222;
    j$$2++;
    var v481 = arrayOfPatterns$$3.length;
    v71 = j$$2 < v481;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v72 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v72);
  var j$$3 = 0;
  var v482 = arrayOfPatterns$$4.length;
  var v75 = j$$3 < v482;
  for (;v75;) {
    var v483 = arrayOfPatterns$$4[j$$3];
    var v73 = JAM.call(v483.match, v483, [/=[a-zA-Z\*]/], JAM.policy.p21);
    var v1223 = v73.toString();
    geneticCodeMatchResult$$1[j$$3] = v1223;
    var v74 = geneticCodeMatchResult$$1[j$$3];
    var v1224 = JAM.call(v74.replace, v74, [/=/g, ""], JAM.policy.p23);
    geneticCodeMatchResult$$1[j$$3] = v1224;
    j$$3++;
    var v484 = arrayOfPatterns$$4.length;
    v75 = j$$3 < v484;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v485 = sequence$$3.length;
  var v76 = "Results for " + v485;
  var stringToReturn$$2 = v76 + " residue sequence ";
  var v486 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p21);
  var v78 = v486 != -1;
  if (v78) {
    var v487 = stringToReturn$$2 + '"';
    var v77 = v487 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v77 + '"';
  }
  var v488 = stringToReturn$$2 + ' starting "';
  var v489 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p19);
  var v79 = v488 + v489;
  stringToReturn$$2 = v79 + '"';
  var v80 = '<div class="info">' + stringToReturn$$2;
  return v80 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v764 = "Results for " + topology;
  var v490 = v764 + " ";
  var v491 = sequence$$4.length;
  var v81 = v490 + v491;
  var stringToReturn$$3 = v81 + " residue sequence ";
  var v492 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p21);
  var v83 = v492 != -1;
  if (v83) {
    var v493 = stringToReturn$$3 + '"';
    var v82 = v493 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v82 + '"';
  }
  var v494 = stringToReturn$$3 + ' starting "';
  var v495 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p19);
  var v84 = v494 + v495;
  stringToReturn$$3 = v84 + '"';
  var v85 = '<div class="info">' + stringToReturn$$3;
  return v85 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v496 = sequenceOne$$1.length;
  var v86 = "Alignment results for " + v496;
  var stringToReturn$$4 = v86 + " residue sequence ";
  var v497 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p21);
  var v88 = v497 != -1;
  if (v88) {
    var v498 = stringToReturn$$4 + '"';
    var v87 = v498 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v87 + '"';
  }
  var v499 = stringToReturn$$4 + ' starting "';
  var v500 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p19);
  var v89 = v499 + v500;
  stringToReturn$$4 = v89 + '"\n';
  var v501 = stringToReturn$$4 + "and ";
  var v502 = sequenceTwo$$1.length;
  var v90 = v501 + v502;
  stringToReturn$$4 = v90 + " residue sequence ";
  var v503 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p21);
  var v92 = v503 != -1;
  if (v92) {
    var v504 = stringToReturn$$4 + '"';
    var v91 = v504 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v91 + '"';
  }
  var v505 = stringToReturn$$4 + ' starting "';
  var v506 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p19);
  var v93 = v505 + v506;
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
    var v507 = Math.random();
    var v508 = components.length;
    var v95 = v507 * v508;
    tempNum = JAM.call(Math.floor, Math, [v95], JAM.policy.p21);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p22);
    j$$4++;
    v96 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p17);
}
function getSequenceFromFasta(sequenceRecord) {
  var v509 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p21);
  var v97 = v509 != -1;
  if (v97) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p23);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v510 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p21);
  var v99 = v510 != -1;
  if (v99) {
    var v98 = JAM.call(sequenceRecord$$1.match, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p23);
    fastaTitle = v98.toString();
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\>|[\f\n\r]/g, ""], JAM.policy.p23);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\s{2,}/g, " "], JAM.policy.p23);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/[\<\>]/gi, ""], JAM.policy.p23);
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  var v1197 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p21);
  var v1190 = v1197 != -1;
  var v1199 = !v1190;
  if (v1199) {
    var v1198 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p21);
    v1190 = v1198 != -1;
  }
  var v1180 = v1190;
  var v1192 = !v1180;
  if (v1192) {
    var v1191 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p21);
    v1180 = v1191 != -1;
  }
  var v1169 = v1180;
  var v1182 = !v1169;
  if (v1182) {
    var v1181 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p21);
    v1169 = v1181 != -1;
  }
  var v1154 = v1169;
  var v1171 = !v1154;
  if (v1171) {
    var v1170 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p21);
    v1154 = v1170 != -1;
  }
  var v1135 = v1154;
  var v1156 = !v1135;
  if (v1156) {
    var v1155 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p21);
    v1135 = v1155 != -1;
  }
  var v1109 = v1135;
  var v1137 = !v1109;
  if (v1137) {
    var v1136 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p21);
    v1109 = v1136 != -1;
  }
  var v1056 = v1109;
  var v1111 = !v1056;
  if (v1111) {
    var v1110 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p21);
    v1056 = v1110 != -1;
  }
  var v956 = v1056;
  var v1058 = !v956;
  if (v1058) {
    var v1057 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p21);
    v956 = v1057 != -1;
  }
  var v765 = v956;
  var v958 = !v765;
  if (v958) {
    var v957 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p21);
    v765 = v957 != -1;
  }
  var v511 = v765;
  var v767 = !v511;
  if (v767) {
    var v766 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p21);
    v511 = v766 != -1;
  }
  var v100 = v511;
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
function openWindow() {
  var title$$5 = "Fuzzy Protein DNA";
  _openWindow(title$$5);
  return;
}
function _openWindow(title$$6) {
  var isColor = true;
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p20);
  outputWindow.focus();
  var v105 = outputWindow.document;
  var v959 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v768 = v959 + "<head>\n";
  var v512 = v768 + "<title>Sequence Manipulation Suite</title>\n";
  var v106 = v512 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v105.write, v105, [v106], JAM.policy.p22);
  if (isColor) {
    var v107 = outputWindow.document;
    var v1212 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1208 = v1212 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1204 = v1208 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1200 = v1204 + "div.info {font-weight: bold}\n";
    var v1193 = v1200 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1183 = v1193 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v1172 = v1183 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v1157 = v1172 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1138 = v1157 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v1112 = v1138 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v1059 = v1112 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v960 = v1059 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v769 = v960 + "td.many {color: #000000}\n";
    var v513 = v769 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v108 = v513 + "</style>\n";
    JAM.call(v107.write, v107, [v108], JAM.policy.p22);
  } else {
    var v109 = outputWindow.document;
    var v1216 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1213 = v1216 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1209 = v1213 + "div.title {display: none}\n";
    var v1205 = v1209 + "div.info {font-weight: bold}\n";
    var v1201 = v1205 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1194 = v1201 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1184 = v1194 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v1173 = v1184 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1158 = v1173 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1139 = v1158 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1113 = v1139 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v1060 = v1113 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v961 = v1060 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v770 = v961 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v514 = v770 + "img {display: none}\n";
    var v110 = v514 + "</style>\n";
    JAM.call(v109.write, v109, [v110], JAM.policy.p22);
  }
  var v111 = outputWindow.document;
  var v962 = "</head>\n" + '<body class="main">\n';
  var v771 = v962 + '<div class="title">';
  var v515 = v771 + title$$6;
  var v112 = v515 + " results</div>\n";
  JAM.call(v111.write, v111, [v112], JAM.policy.p22);
  outputWindow.status = "Please Wait.";
  return;
}
function openWindowAlign(title$$7) {
  _openWindowAlign(title$$7);
  return;
}
function _openWindowAlign(title$$8) {
  var isBackground = true;
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p20);
  outputWindow.focus();
  var v113 = outputWindow.document;
  var v963 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v772 = v963 + "<head>\n";
  var v516 = v772 + "<title>Sequence Manipulation Suite</title>\n";
  var v114 = v516 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v113.write, v113, [v114], JAM.policy.p22);
  if (isBackground) {
    var v115 = outputWindow.document;
    var v1214 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1210 = v1214 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1206 = v1210 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1202 = v1206 + "div.info {font-weight: bold}\n";
    var v1195 = v1202 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v1185 = v1195 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v1174 = v1185 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v1159 = v1174 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v1140 = v1159 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v1114 = v1140 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v1061 = v1114 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v964 = v1061 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v773 = v964 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v517 = v773 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v116 = v517 + "</style>\n";
    JAM.call(v115.write, v115, [v116], JAM.policy.p22);
  } else {
    var v117 = outputWindow.document;
    var v1218 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1217 = v1218 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1215 = v1217 + "div.title {display: none}\n";
    var v1211 = v1215 + "div.info {font-weight: bold}\n";
    var v1207 = v1211 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1203 = v1207 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v1196 = v1203 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v1186 = v1196 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v1175 = v1186 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v1160 = v1175 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v1141 = v1160 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v1115 = v1141 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v1062 = v1115 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v965 = v1062 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v774 = v965 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v518 = v774 + "img {display: none}\n";
    var v118 = v518 + "</style>\n";
    JAM.call(v117.write, v117, [v118], JAM.policy.p22);
  }
  var v119 = outputWindow.document;
  var v966 = "</head>\n" + '<body class="main">\n';
  var v775 = v966 + '<div class="title">';
  var v519 = v775 + title$$8;
  var v120 = v519 + " results</div>\n";
  JAM.call(v119.write, v119, [v120], JAM.policy.p22);
  outputWindow.status = "Please Wait.";
  return;
}
function removeFormatting(sequence$$5) {
  return JAM.call(sequence$$5.replace, sequence$$5, [/[\d\s]/g, ""], JAM.policy.p23);
}
function removeNonDna(sequence$$6) {
  return JAM.call(sequence$$6.replace, sequence$$6, [/[^gatucryswkmbdhvnxGATUCRYSWKMBDHVNX]/g, ""], JAM.policy.p23);
}
function removeNonDnaStrict(sequence$$7) {
  return JAM.call(sequence$$7.replace, sequence$$7, [/[^gatucGATUC]/g, ""], JAM.policy.p23);
}
function removeNonProtein(sequence$$8) {
  return JAM.call(sequence$$8.replace, sequence$$8, [/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, ""], JAM.policy.p23);
}
function removeNonProteinStrict(sequence$$9) {
  return JAM.call(sequence$$9.replace, sequence$$9, [/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, ""], JAM.policy.p23);
}
function removeNonProteinAllowDegen(sequence$$10) {
  return JAM.call(sequence$$10.replace, sequence$$10, [/[^ABCDEFGHIKLMNPQRSTVWYXZabcdefghiklmnpqrstvwyxz\*]/g, ""], JAM.policy.p23);
}
function removeNonProteinAllowX(sequence$$11) {
  return JAM.call(sequence$$11.replace, sequence$$11, [/[^ACDEFGHIKLMNPQRSTVWYZXacdefghiklmnpqrstvwyzx\*]/g, ""], JAM.policy.p23);
}
function removeWhiteSpace(text$$9) {
  return JAM.call(text$$9.replace, text$$9, [/\s/g, ""], JAM.policy.p23);
}
function removeNonLetters(sequence$$12) {
  return JAM.call(sequence$$12.replace, sequence$$12, [/[^A-Z]/gi, ""], JAM.policy.p23);
}
function reverse(dnaSequence$$1) {
  var tempDnaArray = new Array;
  var v520 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p21);
  var v121 = v520 != -1;
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
  JAM.call(testArray.push, testArray, [testString], JAM.policy.p22);
  var v521 = testArray[0];
  var v125 = v521 != testString;
  if (v125) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v522 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p22);
  var v126 = v522 == -1;
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
  testString = JAM.call(testString.replace, testString, [/(\d)/g, v1], JAM.policy.p23);
  var v128 = testString != "1X2X3X";
  if (v128) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false;
  }
  var testNum = 2489.8237;
  var v523 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p15);
  var v129 = v523 != 2489.824;
  if (v129) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v524 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p15);
  var v130 = v524 != 2489.8;
  if (v130) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v525 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p21);
  var v131 = v525 == -1;
  if (v131) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v1063 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p21);
  var v967 = v1063 == -1;
  var v1065 = !v967;
  if (v1065) {
    var v1064 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p21);
    v967 = v1064 == -1;
  }
  var v776 = v967;
  var v969 = !v776;
  if (v969) {
    var v968 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p21);
    v776 = v968 == -1;
  }
  var v526 = v776;
  var v778 = !v526;
  if (v778) {
    var v777 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p21);
    v526 = v777 == -1;
  }
  var v132 = v526;
  if (v132) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v527 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p21);
  var v133 = v527 == -1;
  if (v133) {
    alert("Please enter a number.");
    return false;
  }
  var v135 = theNumber$$2 > maxInput$$2;
  if (v135) {
    var v528 = "Please enter a number less than or equal to " + maxInput$$2;
    var v134 = v528 + ".";
    alert(v134);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v529 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p21);
  var v136 = v529 != -1;
  if (v136) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v530 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p21);
  var v137 = v530 != -1;
  if (v137) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v1066 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p21);
  var v970 = v1066 == -1;
  var v1068 = !v970;
  if (v1068) {
    var v1067 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p21);
    v970 = v1067 == -1;
  }
  var v779 = v970;
  var v972 = !v779;
  if (v972) {
    var v971 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p21);
    v779 = v971 == -1;
  }
  var v531 = v779;
  var v781 = !v531;
  if (v781) {
    var v780 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p21);
    v531 = v780 == -1;
  }
  var v138 = v531;
  if (v138) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v1069 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p21);
  var v973 = v1069 == -1;
  var v1071 = !v973;
  if (v1071) {
    var v1070 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p21);
    v973 = v1070 == -1;
  }
  var v782 = v973;
  var v975 = !v782;
  if (v975) {
    var v974 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p21);
    v782 = v974 == -1;
  }
  var v532 = v782;
  var v784 = !v532;
  if (v784) {
    var v783 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p21);
    v532 = v783 == -1;
  }
  var v139 = v532;
  if (v139) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v533 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p21);
  var v140 = v533 == -1;
  if (v140) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v1072 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p21);
  var v976 = v1072 == -1;
  var v1074 = !v976;
  if (v1074) {
    var v1073 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p21);
    v976 = v1073 == -1;
  }
  var v785 = v976;
  var v978 = !v785;
  if (v978) {
    var v977 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p21);
    v785 = v977 == -1;
  }
  var v534 = v785;
  var v787 = !v534;
  if (v787) {
    var v786 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p21);
    v534 = v786 == -1;
  }
  var v141 = v534;
  if (v141) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v535 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p21);
  var v142 = v535 == -1;
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
    var v536 = basePerLine / groupSize;
    var v146 = j$$6 <= v536;
    for (;v146;) {
      var v145 = k < groupSize;
      for (;v145;) {
        var v537 = k + i$$5;
        var v144 = JAM.call(text$$10.charAt, text$$10, [v537], JAM.policy.p22);
        lineOfText = lineOfText + v144;
        k = k + 1;
        v145 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v538 = basePerLine / groupSize;
      v146 = j$$6 <= v538;
    }
    var v147 = outputWindow.document;
    var v148 = lineOfText + "\n";
    JAM.call(v147.write, v147, [v148], JAM.policy.p22);
    lineOfText = "";
    v149 = i$$5 < stopBase;
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
    var v539 = adjustment < 0;
    if (v539) {
      v539 = adjusted >= 0;
    }
    var v150 = v539;
    if (v150) {
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
  var v181 = i$$6 < stopBase$$2;
  for (;v181;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v540 = basePerLine$$2 / groupSize$$2;
    var v157 = j$$7 <= v540;
    for (;v157;) {
      var v153 = k$$1 < groupSize$$2;
      for (;v153;) {
        var v541 = i$$6 + k$$1;
        var v151 = v541 >= stopBase$$2;
        if (v151) {
          break;
        }
        var v542 = k$$1 + i$$6;
        var v152 = JAM.call(text$$12.charAt, text$$12, [v542], JAM.policy.p22);
        lineOfText$$1 = lineOfText$$1 + v152;
        k$$1 = k$$1 + 1;
        v153 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v155 = numberPosition$$1 == "above";
      if (v155) {
        var v543 = adjustNumbering(i$$6, numberingAdjustment);
        var v154 = rightNum(v543, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v154;
      }
      var v156 = i$$6 >= stopBase$$2;
      if (v156) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v544 = basePerLine$$2 / groupSize$$2;
      v157 = j$$7 <= v544;
    }
    var v180 = numberPosition$$1 == "left";
    if (v180) {
      var v158 = outputWindow.document;
      var v979 = adjustNumbering(lineNum, numberingAdjustment);
      var v788 = rightNum(v979, "", 8, tabIn$$3);
      var v545 = v788 + lineOfText$$1;
      var v159 = v545 + "\n";
      JAM.call(v158.write, v158, [v159], JAM.policy.p22);
      var v163 = strands$$1 == "two";
      if (v163) {
        var v160 = outputWindow.document;
        var v980 = adjustNumbering(lineNum, numberingAdjustment);
        var v789 = rightNum(v980, "", 8, tabIn$$3);
        var v790 = complement(lineOfText$$1);
        var v546 = v789 + v790;
        var v161 = v546 + "\n";
        JAM.call(v160.write, v160, [v161], JAM.policy.p22);
        var v162 = outputWindow.document;
        JAM.call(v162.write, v162, ["\n"], JAM.policy.p17);
      }
    } else {
      var v179 = numberPosition$$1 == "right";
      if (v179) {
        var v164 = outputWindow.document;
        var v791 = adjustNumbering(i$$6, numberingAdjustment);
        var v547 = lineOfText$$1 + v791;
        var v165 = v547 + "\n";
        JAM.call(v164.write, v164, [v165], JAM.policy.p22);
        var v169 = strands$$1 == "two";
        if (v169) {
          var v166 = outputWindow.document;
          var v792 = complement(lineOfText$$1);
          var v793 = adjustNumbering(i$$6, numberingAdjustment);
          var v548 = v792 + v793;
          var v167 = v548 + "\n";
          JAM.call(v166.write, v166, [v167], JAM.policy.p22);
          var v168 = outputWindow.document;
          JAM.call(v168.write, v168, ["\n"], JAM.policy.p17);
        }
      } else {
        var v178 = numberPosition$$1 == "above";
        if (v178) {
          var v170 = outputWindow.document;
          var v171 = aboveNum + "\n";
          JAM.call(v170.write, v170, [v171], JAM.policy.p22);
          var v172 = outputWindow.document;
          var v173 = lineOfText$$1 + "\n";
          JAM.call(v172.write, v172, [v173], JAM.policy.p22);
          var v177 = strands$$1 == "two";
          if (v177) {
            var v174 = outputWindow.document;
            var v549 = complement(lineOfText$$1);
            var v175 = v549 + "\n";
            JAM.call(v174.write, v174, [v175], JAM.policy.p22);
            var v176 = outputWindow.document;
            JAM.call(v176.write, v176, ["\n"], JAM.policy.p17);
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v181 = i$$6 < stopBase$$2;
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
  var v200 = i$$7 < stopBase$$3;
  for (;v200;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v550 = basePerLine$$3 / groupSize$$3;
    var v188 = j$$8 <= v550;
    for (;v188;) {
      var v184 = k$$2 < groupSize$$3;
      for (;v184;) {
        var v551 = i$$7 + k$$2;
        var v182 = v551 >= stopBase$$3;
        if (v182) {
          break;
        }
        var v552 = k$$2 + i$$7;
        var v183 = JAM.call(text$$13.charAt, text$$13, [v552], JAM.policy.p22);
        lineOfText$$2 = lineOfText$$2 + v183;
        k$$2 = k$$2 + 1;
        v184 = k$$2 < groupSize$$3;
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v186 = numberPosition$$2 == "above";
      if (v186) {
        var v185 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = aboveNum$$1 + v185;
      }
      var v187 = i$$7 >= stopBase$$3;
      if (v187) {
        break;
      }
      k$$2 = 0;
      j$$8++;
      var v553 = basePerLine$$3 / groupSize$$3;
      v188 = j$$8 <= v553;
    }
    var v199 = numberPosition$$2 == "left";
    if (v199) {
      var v189 = outputWindow.document;
      var v794 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v554 = v794 + lineOfText$$2;
      var v190 = v554 + "\n";
      JAM.call(v189.write, v189, [v190], JAM.policy.p22);
    } else {
      var v198 = numberPosition$$2 == "right";
      if (v198) {
        var v191 = outputWindow.document;
        var v555 = lineOfText$$2 + i$$7;
        var v192 = v555 + "\n";
        JAM.call(v191.write, v191, [v192], JAM.policy.p22);
      } else {
        var v197 = numberPosition$$2 == "above";
        if (v197) {
          var v193 = outputWindow.document;
          var v194 = aboveNum$$1 + "\n";
          JAM.call(v193.write, v193, [v194], JAM.policy.p22);
          var v195 = outputWindow.document;
          var v196 = lineOfText$$2 + "\n";
          JAM.call(v195.write, v195, [v196], JAM.policy.p22);
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v200 = i$$7 < stopBase$$3;
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
  var v981 = sequence$$13.length;
  var v795 = v981 <= firstIndexToMutate;
  var v982 = !v795;
  if (v982) {
    v795 = lastIndexToMutate < 0;
  }
  var v556 = v795;
  var v796 = !v556;
  if (v796) {
    v556 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v201 = v556;
  if (v201) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v209 = i$$8 < numMut;
  for (;v209;) {
    maxNum = sequence$$13.length;
    var v557 = Math.random();
    var v202 = v557 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v202], JAM.policy.p21);
    var v558 = randNum < firstIndexToMutate;
    var v797 = !v558;
    if (v797) {
      v558 = randNum > lastIndexToMutate;
    }
    var v203 = v558;
    if (v203) {
      numMut++;
      i$$8++;
      v209 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p21);
    needNewChar = true;
    for (;needNewChar;) {
      var v559 = Math.random();
      var v560 = components$$1.length;
      var v204 = v559 * v560;
      componentsIndex = JAM.call(Math.round, Math, [v204], JAM.policy.p21);
      var v561 = components$$1.length;
      var v205 = componentsIndex == v561;
      if (v205) {
        componentsIndex = 0;
      }
      var v562 = components$$1[componentsIndex];
      var v206 = v562 != currentChar;
      if (v206) {
        needNewChar = false;
      }
    }
    var v563 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p19);
    var v564 = components$$1[componentsIndex];
    var v207 = v563 + v564;
    var v565 = randNum + 1;
    var v566 = sequence$$13.length;
    var v208 = JAM.call(sequence$$13.substring, sequence$$13, [v565, v566], JAM.policy.p33);
    sequence$$13 = v207 + v208;
    i$$8++;
    v209 = i$$8 < numMut;
  }
  var v210 = outputWindow.document;
  var v211 = addReturns(sequence$$13);
  JAM.call(v210.write, v210, [v211], JAM.policy.p22);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v216 = j$$9 < lengthOut$$1;
  for (;v216;) {
    var v567 = Math.random();
    var v568 = components$$2.length;
    var v212 = v567 * v568;
    tempNum$$1 = JAM.call(Math.floor, Math, [v212], JAM.policy.p21);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v569 = sequence$$14.length;
    var v215 = v569 == 60;
    if (v215) {
      var v213 = outputWindow.document;
      var v214 = sequence$$14 + "\n";
      JAM.call(v213.write, v213, [v214], JAM.policy.p22);
      sequence$$14 = "";
    }
    j$$9++;
    v216 = j$$9 < lengthOut$$1;
  }
  var v217 = outputWindow.document;
  var v218 = sequence$$14 + "\n";
  JAM.call(v217.write, v217, [v218], JAM.policy.p22);
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
  var v222 = dnaConformation == "circular";
  if (v222) {
    var v219 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p19);
    shiftValue = v219.length;
    var v983 = sequence$$15.length;
    var v798 = v983 - lookAhead;
    var v799 = sequence$$15.length;
    var v570 = JAM.call(sequence$$15.substring, sequence$$15, [v798, v799], JAM.policy.p33);
    var v220 = v570 + sequence$$15;
    var v221 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p19);
    sequence$$15 = v220 + v221;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v223 = outputWindow.document;
  JAM.call(v223.write, v223, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p17);
  var v224 = outputWindow.document;
  var v984 = '<tr><td class="title" width="200px">' + "Site:";
  var v800 = v984 + '</td><td class="title">';
  var v571 = v800 + "Positions:";
  var v225 = v571 + "</td></tr>\n";
  JAM.call(v224.write, v224, [v225], JAM.policy.p22);
  var i$$9 = 0;
  var v572 = arrayOfItems.length;
  var v241 = i$$9 < v572;
  for (;v241;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v573 = arrayOfItems[i$$9];
    var v226 = JAM.call(v573.match, v573, [/\/.+\//], JAM.policy.p21);
    matchExp = v226 + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    var v985 = arrayOfItems[i$$9];
    var v801 = JAM.call(v985.match, v985, [/\)\D*\d+/], JAM.policy.p21);
    var v574 = v801.toString();
    var v227 = JAM.call(v574.replace, v574, [/\)\D*/, ""], JAM.policy.p23);
    cutDistance = parseFloat(v227);
    var v233 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p22);
    for (;v233;) {
      var v228 = matchExp.lastIndex;
      matchPosition = v228 - cutDistance;
      var v575 = matchPosition >= lowerLimit;
      if (v575) {
        v575 = matchPosition < upperLimit;
      }
      var v231 = v575;
      if (v231) {
        timesFound++;
        var v229 = tempString$$1 + ", ";
        var v576 = matchPosition - shiftValue;
        var v230 = v576 + 1;
        tempString$$1 = v229 + v230;
      }
      var v577 = matchExp.lastIndex;
      var v802 = RegExp.lastMatch;
      var v578 = v802.length;
      var v232 = v577 - v578;
      matchExp.lastIndex = v232 + 1;
      v233 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p22);
    }
    var v579 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p21);
    var v234 = v579 != -1;
    if (v234) {
      tempString$$1 = JAM.call(tempString$$1.replace, tempString$$1, [/none,\s*/, ""], JAM.policy.p23);
    }
    var v238 = timesFound == 0;
    if (v238) {
      backGroundClass = "none";
    } else {
      var v237 = timesFound == 1;
      if (v237) {
        backGroundClass = "one";
      } else {
        var v236 = timesFound == 2;
        if (v236) {
          backGroundClass = "two";
        } else {
          var v235 = timesFound == 3;
          if (v235) {
            backGroundClass = "three";
          } else {
            backGroundClass = "many";
          }
        }
      }
    }
    var v239 = outputWindow.document;
    var v1161 = '<tr><td class="' + backGroundClass;
    var v1142 = v1161 + '">';
    var v1187 = arrayOfItems[i$$9];
    var v1176 = JAM.call(v1187.match, v1187, [/\([^\(]+\)/], JAM.policy.p21);
    var v1162 = v1176.toString();
    var v1143 = JAM.call(v1162.replace, v1162, [/\(|\)/g, ""], JAM.policy.p23);
    var v1116 = v1142 + v1143;
    var v1075 = v1116 + '</td><td class="';
    var v986 = v1075 + backGroundClass;
    var v803 = v986 + '">';
    var v580 = v803 + tempString$$1;
    var v240 = v580 + "</td></tr>\n";
    JAM.call(v239.write, v239, [v240], JAM.policy.p22);
    timesFound = 0;
    i$$9++;
    var v581 = arrayOfItems.length;
    v241 = i$$9 < v581;
  }
  var v242 = outputWindow.document;
  JAM.call(v242.write, v242, ["</tbody></table>\n"], JAM.policy.p17);
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v243 = outputWindow.document;
  JAM.call(v243.write, v243, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p17);
  var v244 = outputWindow.document;
  var v1117 = '<tr><td class="title">' + "Pattern:";
  var v1076 = v1117 + '</td><td class="title">';
  var v987 = v1076 + "Times found:";
  var v804 = v987 + '</td><td class="title">';
  var v582 = v804 + "Percentage:";
  var v245 = v582 + "</td></tr>\n";
  JAM.call(v244.write, v244, [v245], JAM.policy.p22);
  var i$$10 = 0;
  var v583 = arrayOfItems$$1.length;
  var v254 = i$$10 < v583;
  for (;v254;) {
    var tempNumber = 0;
    var v584 = arrayOfItems$$1[i$$10];
    var v246 = JAM.call(v584.match, v584, [/\/[^\/]+\//], JAM.policy.p21);
    var matchExp$$1 = v246 + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    var v585 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p22);
    var v248 = v585 != -1;
    if (v248) {
      var v247 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p22);
      tempNumber = v247.length;
    }
    var percentage = 0;
    var v805 = originalLength + 1;
    var v1077 = arrayOfItems$$1[i$$10];
    var v988 = JAM.call(v1077.match, v1077, [/\d+/], JAM.policy.p21);
    var v806 = parseFloat(v988);
    var v586 = v805 - v806;
    var v251 = v586 > 0;
    if (v251) {
      var v249 = 100 * tempNumber;
      var v587 = originalLength + 1;
      var v989 = arrayOfItems$$1[i$$10];
      var v807 = JAM.call(v989.match, v989, [/\d+/], JAM.policy.p21);
      var v588 = parseFloat(v807);
      var v250 = v587 - v588;
      percentage = v249 / v250;
    }
    var v252 = outputWindow.document;
    var v1188 = arrayOfItems$$1[i$$10];
    var v1177 = JAM.call(v1188.match, v1188, [/\([^\(]+\)\b/], JAM.policy.p21);
    var v1163 = v1177.toString();
    var v1144 = JAM.call(v1163.replace, v1163, [/\(|\)/g, ""], JAM.policy.p23);
    var v1118 = "<tr><td>" + v1144;
    var v1078 = v1118 + "</td><td>";
    var v990 = v1078 + tempNumber;
    var v808 = v990 + "</td><td>";
    var v809 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p15);
    var v589 = v808 + v809;
    var v253 = v589 + "</td></tr>\n";
    JAM.call(v252.write, v252, [v253], JAM.policy.p22);
    i$$10++;
    var v590 = arrayOfItems$$1.length;
    v254 = i$$10 < v590;
  }
  var v255 = outputWindow.document;
  JAM.call(v255.write, v255, ["</tbody></table>\n"], JAM.policy.p17);
  return true;
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v591 = sequence$$17.length;
  var v262 = v591 > 0;
  for (;v262;) {
    maxNum$$1 = sequence$$17.length;
    var v592 = Math.random();
    var v256 = v592 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v256], JAM.policy.p21);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p21);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p19);
    var v257 = randNum$$1 + 1;
    var v258 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v257, v258], JAM.policy.p23);
    sequence$$17 = tempString1 + tempString2;
    var v593 = tempSeq.length;
    var v261 = v593 == 60;
    if (v261) {
      var v259 = outputWindow.document;
      var v260 = tempSeq + "\n";
      JAM.call(v259.write, v259, [v260], JAM.policy.p22);
      tempSeq = "";
    }
    var v594 = sequence$$17.length;
    v262 = v594 > 0;
  }
  var v263 = outputWindow.document;
  var v264 = tempSeq + "\n";
  JAM.call(v263.write, v263, [v264], JAM.policy.p22);
  return true;
}
function fuzzySearchProtein() {
  var theDocument = document;
  var targetSequence = "";
  var targetTitle = "";
  var querySequence = "";
  var queryTitle = "";
  var maxTarget = 2E3;
  var maxQuery = 30;
  var v595 = testScript();
  var v265 = v595 == false;
  if (v265) {
    return;
  }
  var v1178 = theDocument.forms;
  var v1164 = v1178[0];
  var v1145 = v1164.elements;
  var v1119 = v1145[0];
  var v1079 = checkFormElement(v1119);
  var v991 = v1079 == false;
  var v1081 = !v991;
  if (v1081) {
    var v1189 = theDocument.forms;
    var v1179 = v1189[0];
    var v1165 = v1179.elements;
    var v1146 = v1165[0];
    var v1120 = v1146.value;
    var v1080 = checkSequenceLength(v1120, maxTarget);
    v991 = v1080 == false;
  }
  var v810 = v991;
  var v993 = !v810;
  if (v993) {
    var v1166 = theDocument.forms;
    var v1147 = v1166[0];
    var v1121 = v1147.elements;
    var v1082 = v1121[1];
    var v992 = checkFormElement(v1082);
    v810 = v992 == false;
  }
  var v596 = v810;
  var v812 = !v596;
  if (v812) {
    var v1167 = theDocument.forms;
    var v1148 = v1167[0];
    var v1122 = v1148.elements;
    var v1083 = v1122[1];
    var v994 = v1083.value;
    var v811 = checkSequenceLength(v994, maxQuery);
    v596 = v811 == false;
  }
  var v266 = v596;
  if (v266) {
    return;
  }
  var v1123 = theDocument.forms;
  var v1084 = v1123[0];
  var v995 = v1084.elements;
  var v813 = v995[5];
  var v597 = v813.options;
  var v1124 = theDocument.forms;
  var v1085 = v1124[0];
  var v996 = v1085.elements;
  var v814 = v996[5];
  var v598 = v814.selectedIndex;
  var v267 = v597[v598];
  var MATRIX = v267.value;
  var v1149 = theDocument.forms;
  var v1125 = v1149[0];
  var v1086 = v1125.elements;
  var v997 = v1086[6];
  var v815 = v997.options;
  var v1150 = theDocument.forms;
  var v1126 = v1150[0];
  var v1087 = v1126.elements;
  var v998 = v1087[6];
  var v816 = v998.selectedIndex;
  var v599 = v815[v816];
  var v268 = v599.value;
  var GAP_PENALTY = parseInt(v268);
  var v1151 = theDocument.forms;
  var v1127 = v1151[0];
  var v1088 = v1127.elements;
  var v999 = v1088[7];
  var v817 = v999.options;
  var v1152 = theDocument.forms;
  var v1128 = v1152[0];
  var v1089 = v1128.elements;
  var v1000 = v1089[7];
  var v818 = v1000.selectedIndex;
  var v600 = v817[v818];
  var v269 = v600.value;
  var HITS = parseInt(v269);
  openWindow();
  openPre();
  var v1090 = theDocument.forms;
  var v1001 = v1090[0];
  var v819 = v1001.elements;
  var v601 = v819[0];
  var v270 = v601.value;
  targetSequence = getSequenceFromFasta(v270);
  targetSequence = removeNonProtein(targetSequence);
  var v1091 = theDocument.forms;
  var v1002 = v1091[0];
  var v820 = v1002.elements;
  var v602 = v820[0];
  var v271 = v602.value;
  targetTitle = getTitleFromFasta(v271);
  var v1092 = theDocument.forms;
  var v1003 = v1092[0];
  var v821 = v1003.elements;
  var v603 = v821[1];
  var v272 = v603.value;
  querySequence = getSequenceFromFasta(v272);
  querySequence = removeNonProtein(querySequence);
  queryTitle = "query";
  var v273 = outputWindow.document;
  var v274 = getFuzzySearchTitle(targetTitle, targetSequence, queryTitle, querySequence);
  JAM.call(v273.write, v273, [v274], JAM.policy.p22);
  var v604 = JAM.call(targetSequence.search, targetSequence, [/./], JAM.policy.p21);
  var v275 = v604 != -1;
  if (v275) {
    targetSequence = JAM.call(targetSequence.match, targetSequence, [/./g], JAM.policy.p21);
  }
  var v605 = JAM.call(querySequence.search, querySequence, [/./], JAM.policy.p21);
  var v276 = v605 != -1;
  if (v276) {
    querySequence = JAM.call(querySequence.match, querySequence, [/./g], JAM.policy.p21);
  }
  var v606 = targetSequence.length;
  var v277 = v606 == 0;
  if (v277) {
    alert("The sequence contains no protein residues.");
    return;
  }
  var v607 = querySequence.length;
  var v278 = v607 == 0;
  if (v278) {
    alert("The query sequence contains no protein residues.");
    return;
  }
  _fuzzySearchProtein(queryTitle, querySequence, targetTitle, targetSequence, MATRIX, GAP_PENALTY, HITS);
  closePre();
  closeWindow();
  return;
}
function _fuzzySearchProtein(queryTitle$$1, querySequence$$1, targetTitle$$1, targetSequence$$1, matrix, gapPenalty, hits) {
  var scoringMatrix;
  var v283 = matrix == "pam30";
  if (v283) {
    scoringMatrix = new Pam30;
  } else {
    var v282 = matrix == "pam70";
    if (v282) {
      scoringMatrix = new Pam70;
    } else {
      var v281 = matrix == "blosum80";
      if (v281) {
        scoringMatrix = new Blosum80;
      } else {
        var v280 = matrix == "blosum62";
        if (v280) {
          scoringMatrix = new Blosum62;
        } else {
          var v279 = matrix == "blosum45";
          if (v279) {
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
  var v608 = hits.length;
  var v296 = v608 > 0;
  if (v296) {
    var i$$11 = 0;
    var v609 = hits.length;
    var v294 = i$$11 < v609;
    for (;v294;) {
      var v284 = outputWindow.document;
      var v1129 = ">" + queryTitle$$1;
      var v1093 = v1129 + " from ";
      var v1130 = hits[i$$11];
      var v1094 = v1130.startM;
      var v1004 = v1093 + v1094;
      var v822 = v1004 + " to ";
      var v1005 = hits[i$$11];
      var v823 = v1005.endM;
      var v610 = v822 + v823;
      var v285 = v610 + "\n";
      JAM.call(v284.write, v284, [v285], JAM.policy.p22);
      var v286 = outputWindow.document;
      var v824 = hits[i$$11];
      var v611 = v824.sequenceM;
      var v287 = v611 + "\n";
      JAM.call(v286.write, v286, [v287], JAM.policy.p22);
      var v288 = outputWindow.document;
      var v1131 = ">" + targetTitle$$1;
      var v1095 = v1131 + " from ";
      var v1132 = hits[i$$11];
      var v1096 = v1132.startN;
      var v1006 = v1095 + v1096;
      var v825 = v1006 + " to ";
      var v1007 = hits[i$$11];
      var v826 = v1007.endN;
      var v612 = v825 + v826;
      var v289 = v612 + "\n";
      JAM.call(v288.write, v288, [v289], JAM.policy.p22);
      var v290 = outputWindow.document;
      var v827 = hits[i$$11];
      var v613 = v827.sequenceN;
      var v291 = v613 + "\n";
      JAM.call(v290.write, v290, [v291], JAM.policy.p22);
      var v292 = outputWindow.document;
      var v1008 = hits[i$$11];
      var v828 = v1008.score;
      var v614 = "Score: " + v828;
      var v293 = v614 + "\n\n";
      JAM.call(v292.write, v292, [v293], JAM.policy.p22);
      i$$11++;
      var v615 = hits.length;
      v294 = i$$11 < v615;
    }
  } else {
    var v295 = outputWindow.document;
    JAM.call(v295.write, v295, ["No hits were obtained.\n\n"], JAM.policy.p17);
  }
  return;
}
function getScore(r1$$1, r2) {
  var v297 = this.scoringMatrix;
  return JAM.call(v297.scoringMatrix_getScore, v297, [r1$$1, r2], JAM.policy.p33);
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
  var v829 = this.scoreHash;
  var v830 = r1$$2 + r2$$1;
  var v616 = v829[v830];
  var v301 = v616 == null;
  if (v301) {
    var v831 = "Unrecognized residue pair: " + r1$$2;
    var v617 = v831 + ", ";
    var v298 = v617 + r2$$1;
    throw v298 + ".";
  } else {
    var v299 = this.scoreHash;
    var v300 = r1$$2 + r2$$1;
    return v299[v300];
  }
  return;
}
function scoringMatrix_fillHash(matrix$$1) {
  var v302 = matrix$$1[0];
  var cols = JAM.call(v302.split, v302, [/\s+/], JAM.policy.p21);
  var cells;
  var i$$12 = 1;
  var v618 = matrix$$1.length;
  var v307 = i$$12 < v618;
  for (;v307;) {
    var v303 = matrix$$1[i$$12];
    cells = JAM.call(v303.split, v303, [/\s+/], JAM.policy.p21);
    var j$$10 = 1;
    var v832 = cols.length;
    var v619 = v832 + 1;
    var v306 = j$$10 < v619;
    for (;v306;) {
      var v304 = this.scoreHash;
      var v833 = cells[0];
      var v620 = v833.toLowerCase();
      var v1009 = j$$10 - 1;
      var v834 = cols[v1009];
      var v621 = v834.toLowerCase();
      var v305 = v620 + v621;
      var v622 = cells[j$$10];
      var v1225 = parseInt(v622);
      introspect(JAM.policy.p6) {
        v304[v305] = v1225;
      }
      j$$10++;
      var v835 = cols.length;
      var v623 = v835 + 1;
      v306 = j$$10 < v623;
    }
    i$$12++;
    var v624 = matrix$$1.length;
    v307 = i$$12 < v624;
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
  JAM.call(this.scoringMatrix_fillHash, this, [matrix$$2], JAM.policy.p22);
  return;
}
function Blosum45() {
  var matrix$$3 = new Array("A  R  N  D  C  Q  E  G  H  I  L  K  M  F  P  S  T  W  Y  V", "A  5 -2 -1 -2 -1 -1 -1  0 -2 -1 -1 -1 -1 -2 -1  1  0 -2 -2  0", "R -2  7  0 -1 -3  1  0 -2  0 -3 -2  3 -1 -2 -2 -1 -1 -2 -1 -2", "N -1  0  6  2 -2  0  0  0  1 -2 -3  0 -2 -2 -2  1  0 -4 -2 -3", "D -2 -1  2  7 -3  0  2 -1  0 -4 -3  0 -3 -4 -1  0 -1 -4 -2 -3", "C -1 -3 -2 -3 12 -3 -3 -3 -3 -3 -2 -3 -2 -2 -4 -1 -1 -5 -3 -1", "Q -1  1  0  0 -3  6  2 -2  1 -2 -2  1  0 -4 -1  0 -1 -2 -1 -3", "E -1  0  0  2 -3  2  6 -2  0 -3 -2  1 -2 -3  0  0 -1 -3 -2 -3", 
  "G  0 -2  0 -1 -3 -2 -2  7 -2 -4 -3 -2 -2 -3 -2  0 -2 -2 -3 -3", "H -2  0  1  0 -3  1  0 -2 10 -3 -2 -1  0 -2 -2 -1 -2 -3  2 -3", "I -1 -3 -2 -4 -3 -2 -3 -4 -3  5  2 -3  2  0 -2 -2 -1 -2  0  3", "L -1 -2 -3 -3 -2 -2 -2 -3 -2  2  5 -3  2  1 -3 -3 -1 -2  0  1", "K -1  3  0  0 -3  1  1 -2 -1 -3 -3  5 -1 -3 -1 -1 -1 -2 -1 -2", "M -1 -1 -2 -3 -2  0 -2 -2  0  2  2 -1  6  0 -2 -2 -1 -2  0  1", "F -2 -2 -2 -4 -2 -4 -3 -3 -2  0  1 -3  0  8 -3 -2 -1  1  3  0", "P -1 -2 -2 -1 -4 -1  0 -2 -2 -2 -3 -1 -2 -3  9 -1 -1 -3 -3 -3", 
  "S  1 -1  1  0 -1  0  0  0 -1 -2 -3 -1 -2 -2 -1  4  2 -4 -2 -1", "T  0 -1  0 -1 -1 -1 -1 -2 -2 -1 -1 -1 -1 -1 -1  2  5 -3 -1  0", "W -2 -2 -4 -4 -5 -2 -3 -2 -3 -2 -2 -2 -2  1 -3 -4 -3 15  3 -3", "Y -2 -1 -2 -2 -3 -1 -2 -3  2  0  0 -1  0  3 -3 -2 -1  3  8 -1", "V  0 -2 -3 -3 -1 -3 -3 -3 -3  3  1 -2  1  0 -3 -1  0 -3 -1  5");
  JAM.call(this.scoringMatrix_fillHash, this, [matrix$$3], JAM.policy.p22);
  return;
}
function Blosum80() {
  var matrix$$4 = new Array("A  R  N  D  C  Q  E  G  H  I  L  K  M  F  P  S  T  W  Y  V", "A  5 -2 -2 -2 -1 -1 -1  0 -2 -2 -2 -1 -1 -3 -1  1  0 -3 -2  0", "R -2  6 -1 -2 -4  1 -1 -3  0 -3 -3  2 -2 -4 -2 -1 -1 -4 -3 -3", "N -2 -1  6  1 -3  0 -1 -1  0 -4 -4  0 -3 -4 -3  0  0 -4 -3 -4", "D -2 -2  1  6 -4 -1  1 -2 -2 -4 -5 -1 -4 -4 -2 -1 -1 -6 -4 -4", "C -1 -4 -3 -4  9 -4 -5 -4 -4 -2 -2 -4 -2 -3 -4 -2 -1 -3 -3 -1", "Q -1  1  0 -1 -4  6  2 -2  1 -3 -3  1  0 -4 -2  0 -1 -3 -2 -3", "E -1 -1 -1  1 -5  2  6 -3  0 -4 -4  1 -2 -4 -2  0 -1 -4 -3 -3", 
  "G  0 -3 -1 -2 -4 -2 -3  6 -3 -5 -4 -2 -4 -4 -3 -1 -2 -4 -4 -4", "H -2  0  0 -2 -4  1  0 -3  8 -4 -3 -1 -2 -2 -3 -1 -2 -3  2 -4", "I -2 -3 -4 -4 -2 -3 -4 -5 -4  5  1 -3  1 -1 -4 -3 -1 -3 -2  3", "L -2 -3 -4 -5 -2 -3 -4 -4 -3  1  4 -3  2  0 -3 -3 -2 -2 -2  1", "K -1  2  0 -1 -4  1  1 -2 -1 -3 -3  5 -2 -4 -1 -1 -1 -4 -3 -3", "M -1 -2 -3 -4 -2  0 -2 -4 -2  1  2 -2  6  0 -3 -2 -1 -2 -2  1", "F -3 -4 -4 -4 -3 -4 -4 -4 -2 -1  0 -4  0  6 -4 -3 -2  0  3 -1", "P -1 -2 -3 -2 -4 -2 -2 -3 -3 -4 -3 -1 -3 -4  8 -1 -2 -5 -4 -3", 
  "S  1 -1  0 -1 -2  0  0 -1 -1 -3 -3 -1 -2 -3 -1  5  1 -4 -2 -2", "T  0 -1  0 -1 -1 -1 -1 -2 -2 -1 -2 -1 -1 -2 -2  1  5 -4 -2  0", "W -3 -4 -4 -6 -3 -3 -4 -4 -3 -3 -2 -4 -2  0 -5 -4 -4 11  2 -3", "Y -2 -3 -3 -4 -3 -2 -3 -4  2 -2 -2 -3 -2  3 -4 -2 -2  2  7 -2", "V  0 -3 -4 -4 -1 -3 -3 -4 -4  3  1 -3  1 -1 -3 -2  0 -3 -2  4");
  JAM.call(this.scoringMatrix_fillHash, this, [matrix$$4], JAM.policy.p22);
  return;
}
function Pam70() {
  var matrix$$5 = new Array("A   R   N   D   C   Q   E   G   H   I   L   K   M   F   P   S   T   W   Y   V", "A   5  -4  -2  -1  -4  -2  -1   0  -4  -2  -4  -4  -3  -6   0   1   1  -9  -5  -1", "R  -4   8  -3  -6  -5   0  -5  -6   0  -3  -6   2  -2  -7  -2  -1  -4   0  -7  -5", "N  -2  -3   6   3  -7  -1   0  -1   1  -3  -5   0  -5  -6  -3   1   0  -6  -3  -5", "D  -1  -6   3   6  -9   0   3  -1  -1  -5  -8  -2  -7 -10  -4  -1  -2 -10  -7  -5", "C  -4  -5  -7  -9   9  -9  -9  -6  -5  -4 -10  -9  -9  -8  -5  -1  -5 -11  -2  -4", 
  "Q  -2   0  -1   0  -9   7   2  -4   2  -5  -3  -1  -2  -9  -1  -3  -3  -8  -8  -4", "E  -1  -5   0   3  -9   2   6  -2  -2  -4  -6  -2  -4  -9  -3  -2  -3 -11  -6  -4", "G   0  -6  -1  -1  -6  -4  -2   6  -6  -6  -7  -5  -6  -7  -3   0  -3 -10  -9  -3", "H  -4   0   1  -1  -5   2  -2  -6   8  -6  -4  -3  -6  -4  -2  -3  -4  -5  -1  -4", "I  -2  -3  -3  -5  -4  -5  -4  -6  -6   7   1  -4   1   0  -5  -4  -1  -9  -4   3", "L  -4  -6  -5  -8 -10  -3  -6  -7  -4   1   6  -5   2  -1  -5  -6  -4  -4  -4   0", 
  "K  -4   2   0  -2  -9  -1  -2  -5  -3  -4  -5   6   0  -9  -4  -2  -1  -7  -7  -6", "M  -3  -2  -5  -7  -9  -2  -4  -6  -6   1   2   0  10  -2  -5  -3  -2  -8  -7   0", "F  -6  -7  -6 -10  -8  -9  -9  -7  -4   0  -1  -9  -2   8  -7  -4  -6  -2   4  -5", "P   0  -2  -3  -4  -5  -1  -3  -3  -2  -5  -5  -4  -5  -7   7   0  -2  -9  -9  -3", "S   1  -1   1  -1  -1  -3  -2   0  -3  -4  -6  -2  -3  -4   0   5   2  -3  -5  -3", "T   1  -4   0  -2  -5  -3  -3  -3  -4  -1  -4  -1  -2  -6  -2   2   6  -8  -4  -1", 
  "W  -9   0  -6 -10 -11  -8 -11 -10  -5  -9  -4  -7  -8  -2  -9  -3  -8  13  -3 -10", "Y  -5  -7  -3  -7  -2  -8  -6  -9  -1  -4  -4  -7  -7   4  -9  -5  -4  -3   9  -5", "V  -1  -5  -5  -5  -4  -4  -4  -3  -4   3   0  -6   0  -5  -3  -3  -1 -10  -5   6");
  JAM.call(this.scoringMatrix_fillHash, this, [matrix$$5], JAM.policy.p22);
  return;
}
function Pam30() {
  var matrix$$6 = new Array("A   R   N   D   C   Q   E   G   H   I   L   K   M   F   P   S   T   W   Y   V", "A   6  -7  -4  -3  -6  -4  -2  -2  -7  -5  -6  -7  -5  -8  -2   0  -1 -13  -8  -2", "R  -7   8  -6 -10  -8  -2  -9  -9  -2  -5  -8   0  -4  -9  -4  -3  -6  -2 -10  -8", "N  -4  -6   8   2 -11  -3  -2  -3   0  -5  -7  -1  -9  -9  -6   0  -2  -8  -4  -8", "D  -3 -10   2   8 -14  -2   2  -3  -4  -7 -12  -4 -11 -15  -8  -4  -5 -15 -11  -8", "C  -6  -8 -11 -14  10 -14 -14  -9  -7  -6 -15 -14 -13 -13  -8  -3  -8 -15  -4  -6", 
  "Q  -4  -2  -3  -2 -14   8   1  -7   1  -8  -5  -3  -4 -13  -3  -5  -5 -13 -12  -7", "E  -2  -9  -2   2 -14   1   8  -4  -5  -5  -9  -4  -7 -14  -5  -4  -6 -17  -8  -6", "G  -2  -9  -3  -3  -9  -7  -4   6  -9 -11 -10  -7  -8  -9  -6  -2  -6 -15 -14  -5", "H  -7  -2   0  -4  -7   1  -5  -9   9  -9  -6  -6 -10  -6  -4  -6  -7  -7  -3  -6", "I  -5  -5  -5  -7  -6  -8  -5 -11  -9   8  -1  -6  -1  -2  -8  -7  -2 -14  -6   2", "L  -6  -8  -7 -12 -15  -5  -9 -10  -6  -1   7  -8   1  -3  -7  -8  -7  -6  -7  -2", 
  "K  -7   0  -1  -4 -14  -3  -4  -7  -6  -6  -8   7  -2 -14  -6  -4  -3 -12  -9  -9", "M  -5  -4  -9 -11 -13  -4  -7  -8 -10  -1   1  -2  11  -4  -8  -5  -4 -13 -11  -1", "F  -8  -9  -9 -15 -13 -13 -14  -9  -6  -2  -3 -14  -4   9 -10  -6  -9  -4   2  -8", "P  -2  -4  -6  -8  -8  -3  -5  -6  -4  -8  -7  -6  -8 -10   8  -2  -4 -14 -13  -6", "S   0  -3   0  -4  -3  -5  -4  -2  -6  -7  -8  -4  -5  -6  -2   6   0  -5  -7  -6", "T  -1  -6  -2  -5  -8  -5  -6  -6  -7  -2  -7  -3  -4  -9  -4   0   7 -13  -6  -3", 
  "W -13  -2  -8 -15 -15 -13 -17 -15  -7 -14  -6 -12 -13  -4 -14  -5 -13  13  -5 -15", "Y  -8 -10  -4 -11  -4 -12  -8 -14  -3  -6  -7  -9 -11   2 -13  -7  -6  -5  10  -7", "V  -2  -8  -8  -8  -6  -7  -6  -5  -6   2  -2  -9  -1  -8  -6  -6  -3 -15  -7   7");
  JAM.call(this.scoringMatrix_fillHash, this, [matrix$$6], JAM.policy.p22);
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
  var v836 = this.M;
  var v625 = v836.length;
  var v308 = v625 + 1;
  var v1226 = new Array(v308);
  this.nodes = v1226;
  var i$$13 = 0;
  var v837 = this.nodes;
  var v626 = v837.length;
  var v312 = i$$13 < v626;
  for (;v312;) {
    var v309 = this.nodes;
    var v1010 = this.N;
    var v838 = v1010.length;
    var v627 = v838 + 1;
    var v1227 = new Array(v627);
    v309[i$$13] = v1227;
    var j$$11 = 0;
    var v1011 = this.nodes;
    var v839 = v1011[i$$13];
    var v628 = v839.length;
    var v311 = j$$11 < v628;
    for (;v311;) {
      var v629 = this.nodes;
      var v310 = v629[i$$13];
      var v1228 = new Node;
      v310[j$$11] = v1228;
      j$$11++;
      var v1012 = this.nodes;
      var v840 = v1012[i$$13];
      var v630 = v840.length;
      v311 = j$$11 < v630;
    }
    i$$13++;
    var v841 = this.nodes;
    var v631 = v841.length;
    v312 = i$$13 < v631;
  }
  var v842 = this.nodes;
  var v632 = v842[0];
  var v313 = v632[0];
  v313.value = 0;
  i$$13 = 1;
  var v843 = this.nodes;
  var v633 = v843.length;
  var v317 = i$$13 < v633;
  for (;v317;) {
    var v844 = this.nodes;
    var v634 = v844[i$$13];
    var v314 = v634[0];
    var v1013 = this.nodes;
    var v1014 = i$$13 - 1;
    var v845 = v1013[v1014];
    var v635 = v845[0];
    v314.value = v635.value;
    var v846 = this.nodes;
    var v636 = v846[i$$13];
    var v315 = v636[0];
    v315.tracebackI = i$$13 - 1;
    var v847 = this.nodes;
    var v637 = v847[i$$13];
    var v316 = v637[0];
    v316.tracebackJ = 0;
    i$$13++;
    var v848 = this.nodes;
    var v638 = v848.length;
    v317 = i$$13 < v638;
  }
  j$$11 = 1;
  var v1015 = this.nodes;
  var v849 = v1015[0];
  var v639 = v849.length;
  var v321 = j$$11 < v639;
  for (;v321;) {
    var v850 = this.nodes;
    var v640 = v850[0];
    var v318 = v640[j$$11];
    var v1016 = this.nodes;
    var v851 = v1016[0];
    var v852 = j$$11 - 1;
    var v641 = v851[v852];
    v318.value = v641.value;
    var v853 = this.nodes;
    var v642 = v853[0];
    var v319 = v642[j$$11];
    v319.tracebackI = 0;
    var v854 = this.nodes;
    var v643 = v854[0];
    var v320 = v643[j$$11];
    v320.tracebackJ = j$$11 - 1;
    j$$11++;
    var v1017 = this.nodes;
    var v855 = v1017[0];
    var v644 = v855.length;
    v321 = j$$11 < v644;
  }
  return;
}
function dumpMatrix() {
  var v322 = outputWindow.document;
  var v1097 = this.nodes;
  var v1018 = v1097.length;
  var v856 = "Dynamic programming matrix i=" + v1018;
  var v645 = v856 + " and j=";
  var v1019 = this.nodes;
  var v857 = v1019[0];
  var v646 = v857.length;
  var v323 = v645 + v646;
  JAM.call(v322.write, v322, [v323], JAM.policy.p22);
  var v324 = outputWindow.document;
  JAM.call(v324.write, v324, ["\n"], JAM.policy.p17);
  var i$$14 = 0;
  var v858 = this.nodes;
  var v647 = v858.length;
  var v335 = i$$14 < v647;
  for (;v335;) {
    var j$$12 = 0;
    var v1020 = this.nodes;
    var v859 = v1020[i$$14];
    var v648 = v859.length;
    var v333 = j$$12 < v648;
    for (;v333;) {
      var v860 = this.nodes;
      var v649 = v860[i$$14];
      var v325 = v649[j$$12];
      var traceI = v325.tracebackI;
      var v861 = this.nodes;
      var v650 = v861[i$$14];
      var v326 = v650[j$$12];
      var traceJ = v326.tracebackJ;
      var v327 = traceI == undefined;
      if (v327) {
        traceI = "u";
      }
      var v328 = traceJ == undefined;
      if (v328) {
        traceJ = "u";
      }
      var v1168 = "(" + i$$14;
      var v1153 = v1168 + ",";
      var v1133 = v1153 + j$$12;
      var v1098 = v1133 + ")[";
      var v1021 = v1098 + traceI;
      var v862 = v1021 + ",";
      var v651 = v862 + traceJ;
      var v329 = v651 + "]=";
      var v1022 = this.nodes;
      var v863 = v1022[i$$14];
      var v652 = v863[j$$12];
      var v330 = v652.value;
      var output = v329 + v330;
      var v331 = outputWindow.document;
      var v332 = rightNum(output, "", 20, " ");
      JAM.call(v331.write, v331, [v332], JAM.policy.p22);
      j$$12++;
      var v1023 = this.nodes;
      var v864 = v1023[i$$14];
      var v653 = v864.length;
      v333 = j$$12 < v653;
    }
    var v334 = outputWindow.document;
    JAM.call(v334.write, v334, ["\n"], JAM.policy.p17);
    i$$14++;
    var v865 = this.nodes;
    var v654 = v865.length;
    v335 = i$$14 < v654;
  }
  var v336 = outputWindow.document;
  JAM.call(v336.write, v336, ["\n"], JAM.policy.p17);
  return;
}
function updateMatrix() {
  var i$$15 = 1;
  var v866 = this.nodes;
  var v655 = v866.length;
  var v377 = i$$15 < v655;
  for (;v377;) {
    var j$$13 = 1;
    var v1024 = this.nodes;
    var v867 = v1024[0];
    var v656 = v867.length;
    var v376 = j$$13 < v656;
    for (;v376;) {
      var a;
      var b;
      var c;
      var v1025 = this.nodes;
      var v868 = v1025[i$$15];
      var v657 = v868[j$$13];
      var v360 = v657.alreadyMatched;
      if (v360) {
        a = 0;
        b = 0;
        c = 0;
      } else {
        var v1099 = this.nodes;
        var v1026 = v1099.length;
        var v869 = v1026 - 1;
        var v658 = i$$15 == v869;
        if (v658) {
          var v1134 = this.nodes;
          var v1100 = v1134[0];
          var v1027 = v1100.length;
          var v870 = v1027 - 1;
          v658 = j$$13 == v870;
        }
        var v359 = v658;
        if (v359) {
          var v871 = this.nodes;
          var v872 = i$$15 - 1;
          var v659 = v871[v872];
          var v337 = v659[j$$13];
          a = v337.value;
          var v873 = this.nodes;
          var v660 = v873[i$$15];
          var v661 = j$$13 - 1;
          var v338 = v660[v661];
          b = v338.value;
          var v1028 = this.nodes;
          var v1029 = i$$15 - 1;
          var v874 = v1028[v1029];
          var v875 = j$$13 - 1;
          var v662 = v874[v875];
          var v339 = v662.value;
          var v663 = this.scoreSet;
          var v876 = this.M;
          var v877 = i$$15 - 1;
          var v664 = v876[v877];
          var v878 = this.N;
          var v879 = j$$13 - 1;
          var v665 = v878[v879];
          var v340 = JAM.call(v663.getScore, v663, [v664, v665], JAM.policy.p33);
          c = v339 + v340;
        } else {
          var v1030 = this.nodes;
          var v880 = v1030.length;
          var v666 = v880 - 1;
          var v358 = i$$15 == v666;
          if (v358) {
            var v1031 = this.nodes;
            var v1032 = i$$15 - 1;
            var v881 = v1031[v1032];
            var v667 = v881[j$$13];
            var v341 = v667.value;
            var v668 = this.scoreSet;
            var v342 = v668.gap;
            a = v341 - v342;
            var v882 = this.nodes;
            var v669 = v882[i$$15];
            var v670 = j$$13 - 1;
            var v343 = v669[v670];
            b = v343.value;
            var v1033 = this.nodes;
            var v1034 = i$$15 - 1;
            var v883 = v1033[v1034];
            var v884 = j$$13 - 1;
            var v671 = v883[v884];
            var v344 = v671.value;
            var v672 = this.scoreSet;
            var v885 = this.M;
            var v886 = i$$15 - 1;
            var v673 = v885[v886];
            var v887 = this.N;
            var v888 = j$$13 - 1;
            var v674 = v887[v888];
            var v345 = JAM.call(v672.getScore, v672, [v673, v674], JAM.policy.p33);
            c = v344 + v345;
          } else {
            var v1101 = this.nodes;
            var v1035 = v1101[0];
            var v889 = v1035.length;
            var v675 = v889 - 1;
            var v357 = j$$13 == v675;
            if (v357) {
              var v890 = this.nodes;
              var v891 = i$$15 - 1;
              var v676 = v890[v891];
              var v346 = v676[j$$13];
              a = v346.value;
              var v1036 = this.nodes;
              var v892 = v1036[i$$15];
              var v893 = j$$13 - 1;
              var v677 = v892[v893];
              var v347 = v677.value;
              var v678 = this.scoreSet;
              var v348 = v678.gap;
              b = v347 - v348;
              var v1037 = this.nodes;
              var v1038 = i$$15 - 1;
              var v894 = v1037[v1038];
              var v895 = j$$13 - 1;
              var v679 = v894[v895];
              var v349 = v679.value;
              var v680 = this.scoreSet;
              var v896 = this.M;
              var v897 = i$$15 - 1;
              var v681 = v896[v897];
              var v898 = this.N;
              var v899 = j$$13 - 1;
              var v682 = v898[v899];
              var v350 = JAM.call(v680.getScore, v680, [v681, v682], JAM.policy.p33);
              c = v349 + v350;
            } else {
              var v1039 = this.nodes;
              var v1040 = i$$15 - 1;
              var v900 = v1039[v1040];
              var v683 = v900[j$$13];
              var v351 = v683.value;
              var v684 = this.scoreSet;
              var v352 = v684.gap;
              a = v351 - v352;
              var v1041 = this.nodes;
              var v901 = v1041[i$$15];
              var v902 = j$$13 - 1;
              var v685 = v901[v902];
              var v353 = v685.value;
              var v686 = this.scoreSet;
              var v354 = v686.gap;
              b = v353 - v354;
              var v1042 = this.nodes;
              var v1043 = i$$15 - 1;
              var v903 = v1042[v1043];
              var v904 = j$$13 - 1;
              var v687 = v903[v904];
              var v355 = v687.value;
              var v688 = this.scoreSet;
              var v905 = this.M;
              var v906 = i$$15 - 1;
              var v689 = v905[v906];
              var v907 = this.N;
              var v908 = j$$13 - 1;
              var v690 = v907[v908];
              var v356 = JAM.call(v688.getScore, v688, [v689, v690], JAM.policy.p33);
              c = v355 + v356;
            }
          }
        }
      }
      var v691 = a > b;
      if (v691) {
        v691 = a > c;
      }
      var v371 = v691;
      if (v371) {
        var v909 = this.nodes;
        var v692 = v909[i$$15];
        var v361 = v692[j$$13];
        v361.value = a;
        var v910 = this.nodes;
        var v693 = v910[i$$15];
        var v362 = v693[j$$13];
        v362.tracebackI = i$$15 - 1;
        var v911 = this.nodes;
        var v694 = v911[i$$15];
        var v363 = v694[j$$13];
        v363.tracebackJ = j$$13;
      } else {
        var v695 = b > c;
        if (v695) {
          v695 = b > a;
        }
        var v370 = v695;
        if (v370) {
          var v912 = this.nodes;
          var v696 = v912[i$$15];
          var v364 = v696[j$$13];
          v364.value = b;
          var v913 = this.nodes;
          var v697 = v913[i$$15];
          var v365 = v697[j$$13];
          v365.tracebackI = i$$15;
          var v914 = this.nodes;
          var v698 = v914[i$$15];
          var v366 = v698[j$$13];
          v366.tracebackJ = j$$13 - 1;
        } else {
          var v915 = this.nodes;
          var v699 = v915[i$$15];
          var v367 = v699[j$$13];
          v367.value = c;
          var v916 = this.nodes;
          var v700 = v916[i$$15];
          var v368 = v700[j$$13];
          v368.tracebackI = i$$15 - 1;
          var v917 = this.nodes;
          var v701 = v917[i$$15];
          var v369 = v701[j$$13];
          v369.tracebackJ = j$$13 - 1;
        }
      }
      var v1102 = this.nodes;
      var v1044 = v1102[i$$15];
      var v918 = v1044[j$$13];
      var v702 = v918.value;
      var v375 = v702 < 0;
      if (v375) {
        var v919 = this.nodes;
        var v703 = v919[i$$15];
        var v372 = v703[j$$13];
        v372.value = 0;
        var v920 = this.nodes;
        var v704 = v920[i$$15];
        var v373 = v704[j$$13];
        v373.tracebackI = undefined;
        var v921 = this.nodes;
        var v705 = v921[i$$15];
        var v374 = v705[j$$13];
        v374.tracebackJ = undefined;
      }
      j$$13++;
      var v1045 = this.nodes;
      var v922 = v1045[0];
      var v706 = v922.length;
      v376 = j$$13 < v706;
    }
    i$$15++;
    var v923 = this.nodes;
    var v707 = v923.length;
    v377 = i$$15 < v707;
  }
  var v924 = this.nodes;
  var v1103 = this.nodes;
  var v1046 = v1103.length;
  var v925 = v1046 - 1;
  var v708 = v924[v925];
  var v1104 = this.nodes;
  var v1047 = v1104[0];
  var v926 = v1047.length;
  var v709 = v926 - 1;
  var v378 = v708[v709];
  this.score = v378.value;
  return;
}
function search() {
  var v1229 = new Array;
  this.hits = v1229;
  var hitCount = 0;
  var v927 = this.scoreSet;
  var v710 = v927.hits;
  var v402 = hitCount < v710;
  for (;v402;) {
    this.updateMatrix();
    var maxNodeValue = 0;
    var maxNodeI = undefined;
    var maxNodeJ = undefined;
    var i$$16 = 1;
    var v928 = this.nodes;
    var v711 = v928.length;
    var v382 = i$$16 < v711;
    for (;v382;) {
      var j$$14 = 1;
      var v1048 = this.nodes;
      var v929 = v1048[0];
      var v712 = v929.length;
      var v381 = j$$14 < v712;
      for (;v381;) {
        var v1105 = this.nodes;
        var v1049 = v1105[i$$16];
        var v930 = v1049[j$$14];
        var v713 = v930.value;
        var v380 = v713 > maxNodeValue;
        if (v380) {
          var v931 = this.nodes;
          var v714 = v931[i$$16];
          var v379 = v714[j$$14];
          maxNodeValue = v379.value;
          maxNodeI = i$$16;
          maxNodeJ = j$$14;
        }
        j$$14++;
        var v1050 = this.nodes;
        var v932 = v1050[0];
        var v715 = v932.length;
        v381 = j$$14 < v715;
      }
      i$$16++;
      var v933 = this.nodes;
      var v716 = v933.length;
      v382 = i$$16 < v716;
    }
    var v383 = maxNodeValue == 0;
    if (v383) {
      break;
    }
    var currentI = maxNodeI;
    var currentJ = maxNodeJ;
    var v717 = this.nodes;
    var v384 = v717[maxNodeI];
    var currentNode = v384[maxNodeJ];
    var alignedM = new Array;
    var alignedN = new Array;
    var score = currentNode.value;
    var endM = undefined;
    var endN = undefined;
    var v934 = currentNode.tracebackI;
    var v718 = v934 != undefined;
    if (v718) {
      var v935 = currentNode.tracebackJ;
      v718 = v935 != undefined;
    }
    var v399 = v718;
    for (;v399;) {
      var v719 = currentI == 0;
      var v936 = !v719;
      if (v936) {
        v719 = currentJ == 0;
      }
      var v385 = v719;
      if (v385) {
        break;
      }
      var v937 = currentNode.tracebackI;
      var v938 = currentI - 1;
      var v720 = v937 == v938;
      if (v720) {
        var v939 = currentNode.tracebackJ;
        var v940 = currentJ - 1;
        v720 = v939 == v940;
      }
      var v394 = v720;
      if (v394) {
        var v386 = endM == undefined;
        if (v386) {
          endM = currentI;
          endN = currentJ;
        }
        var v721 = this.M;
        var v722 = currentI - 1;
        var v387 = v721[v722];
        JAM.call(alignedM.push, alignedM, [v387], JAM.policy.p22);
        var v723 = this.N;
        var v724 = currentJ - 1;
        var v388 = v723[v724];
        JAM.call(alignedN.push, alignedN, [v388], JAM.policy.p22);
      } else {
        var v725 = currentNode.tracebackJ;
        var v726 = currentJ - 1;
        var v393 = v725 == v726;
        if (v393) {
          var v390 = endM != undefined;
          if (v390) {
            JAM.call(alignedM.push, alignedM, ["-"], JAM.policy.p17);
            var v727 = this.N;
            var v728 = currentJ - 1;
            var v389 = v727[v728];
            JAM.call(alignedN.push, alignedN, [v389], JAM.policy.p22);
          }
        } else {
          var v392 = endM != undefined;
          if (v392) {
            var v729 = this.M;
            var v730 = currentI - 1;
            var v391 = v729[v730];
            JAM.call(alignedM.push, alignedM, [v391], JAM.policy.p22);
            JAM.call(alignedN.push, alignedN, ["-"], JAM.policy.p17);
          }
        }
      }
      var v941 = this.nodes;
      var v731 = v941[currentI];
      var v395 = v731[currentJ];
      v395.value = 0;
      var v942 = this.nodes;
      var v732 = v942[currentI];
      var v396 = v732[currentJ];
      v396.alreadyMatched = true;
      currentI = currentNode.tracebackI;
      currentJ = currentNode.tracebackJ;
      var v733 = this.nodes;
      var v734 = currentNode.tracebackI;
      var v397 = v733[v734];
      var v398 = currentNode.tracebackJ;
      currentNode = v397[v398];
      var v943 = currentNode.tracebackI;
      var v735 = v943 != undefined;
      if (v735) {
        var v944 = currentNode.tracebackJ;
        v735 = v944 != undefined;
      }
      v399 = v735;
    }
    alignedM = alignedM.reverse();
    alignedN = alignedN.reverse();
    var v400 = this.hits;
    var v736 = JAM.call(alignedM.join, alignedM, [""], JAM.policy.p17);
    var v737 = JAM.call(alignedN.join, alignedN, [""], JAM.policy.p17);
    var v738 = currentI + 1;
    var v739 = currentJ + 1;
    var v401 = new Hit(v736, v737, score, v738, endM, v739, endN);
    JAM.call(v400.push, v400, [v401], JAM.policy.p22);
    hitCount++;
    var v945 = this.scoreSet;
    var v740 = v945.hits;
    v402 = hitCount < v740;
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
var v403 = ScoreSet.prototype;
v403.getScore = getScore;
var v404 = ScoreSet.prototype;
v404.setScoreSetParam = setScoreSetParam;
new ScoringMatrix;
var v405 = ScoringMatrix.prototype;
v405.scoringMatrix_getScore = scoringMatrix_getScore;
var v406 = ScoringMatrix.prototype;
v406.scoringMatrix_fillHash = scoringMatrix_fillHash;
var v407 = Blosum62;
var v1230 = new ScoringMatrix;
v407.prototype = v1230;
var v408 = Blosum45;
var v1231 = new ScoringMatrix;
v408.prototype = v1231;
var v409 = Blosum80;
var v1232 = new ScoringMatrix;
v409.prototype = v1232;
var v410 = Pam30;
var v1233 = new ScoringMatrix;
v410.prototype = v1233;
new FuzzySearch;
var v411 = FuzzySearch.prototype;
v411.initializeMatrix = initializeMatrix;
var v412 = FuzzySearch.prototype;
v412.updateMatrix = updateMatrix;
var v413 = FuzzySearch.prototype;
v413.search = search;
var v414 = FuzzySearch.prototype;
v414.getHits = getHits;
var v415 = FuzzySearch.prototype;
v415.dumpMatrix = dumpMatrix;
JAM.set(document, "onload", v2);
var v416 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p17);
JAM.set(v416, "onclick", v3);
var v417 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p17);
JAM.set(v417, "onclick", v4)

JAM.stopProfile('load');
