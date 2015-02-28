
JAM.startProfile('load');
function v4() {
  var v580 = document.forms;
  var v498 = v580[0];
  var v302 = v498.elements;
  var v5 = v302[0];
  v5.value = " ";
  return;
}
function v3() {
  try {
    proteinIep();
  } catch (e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    alert(v6);
  }
  return;
}
function v2() {
  var v303 = document.main_form;
  var v7 = v303.main_submit;
  v7.focus();
  return;
}
function addReturns(sequence) {
  function v0(str$$6, p1, offset$$8, s$$2) {
    return p1 + "\n";
  }
  introspect(JAM.policy.p15) {
    sequence = sequence.replace(/(.{60})/g, v0);
  }
  return sequence;
}
function checkAlign(arrayOfTitles, arrayOfSequences) {
  var v8 = arrayOfSequences[0];
  var lengthOfAlign = v8.length;
  var v304 = arrayOfSequences.length;
  var v9 = v304 < 2;
  if (v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v305 = arrayOfTitles.length;
  var v11 = i$$1 < v305;
  for (;v11;) {
    var v636 = arrayOfTitles[i$$1];
    introspect(JAM.policy.p16) {
      var v581 = v636.search(/\S/)
    }
    var v499 = v581 == -1;
    var v583 = !v499;
    if (v583) {
      var v637 = arrayOfSequences[i$$1];
      introspect(JAM.policy.p16) {
        var v582 = v637.search(/\S/)
      }
      v499 = v582 == -1;
    }
    var v306 = v499;
    var v501 = !v306;
    if (v501) {
      var v584 = arrayOfSequences[i$$1];
      var v500 = v584.length;
      v306 = v500 != lengthOfAlign;
    }
    var v10 = v306;
    if (v10) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v307 = arrayOfTitles.length;
    v11 = i$$1 < v307;
  }
  return true;
}
function checkCodonTable(codonTable) {
  introspect(JAM.policy.p16) {
    var v676 = codonTable.search(/AmAcid/)
  }
  var v638 = v676 == -1;
  var v678 = !v638;
  if (v678) {
    introspect(JAM.policy.p16) {
      var v677 = codonTable.search(/Codon/)
    }
    v638 = v677 == -1;
  }
  var v585 = v638;
  var v640 = !v585;
  if (v640) {
    introspect(JAM.policy.p16) {
      var v639 = codonTable.search(/Number/)
    }
    v585 = v639 == -1;
  }
  var v502 = v585;
  var v587 = !v502;
  if (v587) {
    introspect(JAM.policy.p16) {
      var v586 = codonTable.search(/\/1000/)
    }
    v502 = v586 == -1;
  }
  var v308 = v502;
  var v504 = !v308;
  if (v504) {
    introspect(JAM.policy.p16) {
      var v503 = codonTable.search(/Fraction\s*\.\./)
    }
    v308 = v503 == -1;
  }
  var v12 = v308;
  if (v12) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v505 = formElement.value;
  introspect(JAM.policy.p16) {
    var v309 = v505.search(/\S/)
  }
  var v13 = v309 == -1;
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
  var v310 = arrayOfPatterns.length;
  var v16 = z$$2 < v310;
  for (;v16;) {
    var v506 = arrayOfPatterns[z$$2];
    introspect(JAM.policy.p16) {
      var v311 = v506.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/)
    }
    var v14 = v311 == -1;
    if (v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v507 = arrayOfPatterns[z$$2];
    var v312 = moreExpressionCheck(v507);
    var v15 = v312 == false;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v313 = arrayOfPatterns.length;
    v16 = z$$2 < v313;
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v314 = arrayOfPatterns.length;
  var v22 = j < v314;
  for (;v22;) {
    var v508 = arrayOfPatterns[j];
    introspect(JAM.policy.p16) {
      var v315 = v508.match(/\/.+\//)
    }
    var v19 = v315 + "gi";
    var v783 = eval(v19);
    geneticCodeMatchExp[j] = v783;
    var v316 = arrayOfPatterns[j];
    introspect(JAM.policy.p16) {
      var v20 = v316.match(/=[a-zA-Z\*]/)
    }
    var v784 = v20.toString();
    geneticCodeMatchResult[j] = v784;
    var v21 = geneticCodeMatchResult[j];
    introspect(JAM.policy.p15) {
      var v785 = v21.replace(/=/g, "")
    }
    geneticCodeMatchResult[j] = v785;
    j++;
    var v317 = arrayOfPatterns.length;
    v22 = j < v317;
  }
  var i$$2 = 0;
  var v509 = testSequence.length;
  var v318 = v509 - 3;
  var v29 = i$$2 <= v318;
  for (;v29;) {
    var v23 = i$$2 + 3;
    introspect(JAM.policy.p15) {
      codon = testSequence.substring(i$$2, v23);
    }
    j = 0;
    var v319 = geneticCodeMatchExp.length;
    var v27 = j < v319;
    for (;v27;) {
      var v510 = geneticCodeMatchExp[j];
      introspect(JAM.policy.p17) {
        var v320 = codon.search(v510)
      }
      var v26 = v320 != -1;
      if (v26) {
        var v25 = oneMatch == true;
        if (v25) {
          var v321 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v24 = v321 + ".";
          alert(v24);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v322 = geneticCodeMatchExp.length;
      v27 = j < v322;
    }
    var v28 = oneMatch == false;
    if (v28) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v511 = testSequence.length;
    var v323 = v511 - 3;
    v29 = i$$2 <= v323;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v324 = arrayOfPatterns$$1.length;
  var v31 = z$$3 < v324;
  for (;v31;) {
    var v512 = arrayOfPatterns$$1[z$$3];
    introspect(JAM.policy.p16) {
      var v325 = v512.search(/[^acdefghiklmnpqrstvwyz]/i)
    }
    var v30 = v325 != -1;
    if (v30) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v326 = arrayOfPatterns$$1.length;
    v31 = z$$3 < v326;
  }
  var i$$3 = 0;
  var v327 = arrayOfPatterns$$1.length;
  var v35 = i$$3 < v327;
  for (;v35;) {
    var v513 = arrayOfPatterns$$1[i$$3];
    var v328 = "[" + v513;
    var v32 = v328 + "]";
    var re = new RegExp(v32, "gi");
    var j$$1 = i$$3 + 1;
    var v329 = arrayOfPatterns$$1.length;
    var v34 = j$$1 < v329;
    for (;v34;) {
      var v514 = arrayOfPatterns$$1[j$$1];
      introspect(JAM.policy.p17) {
        var v330 = v514.search(re)
      }
      var v33 = v330 != -1;
      if (v33) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v331 = arrayOfPatterns$$1.length;
      v34 = j$$1 < v331;
    }
    i$$3++;
    var v332 = arrayOfPatterns$$1.length;
    v35 = i$$3 < v332;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v333 = arrayOfPatterns$$2.length;
  var v38 = z$$4 < v333;
  for (;v38;) {
    var v515 = arrayOfPatterns$$2[z$$4];
    introspect(JAM.policy.p16) {
      var v334 = v515.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i)
    }
    var v36 = v334 == -1;
    if (v36) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v516 = arrayOfPatterns$$2[z$$4];
    var v335 = moreExpressionCheck(v516);
    var v37 = v335 == false;
    if (v37) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v336 = arrayOfPatterns$$2.length;
    v38 = z$$4 < v336;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v588 = getSequenceFromFasta(text$$7);
  introspect(JAM.policy.p15) {
    var v517 = v588.replace(/[^A-Za-z]/g, "")
  }
  var v337 = v517.length;
  var v40 = v337 > maxInput;
  if (v40) {
    var v338 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v39 = v338 + " characters.";
    alert(v39);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v339 = text$$8.length;
  var v42 = v339 > maxInput$$1;
  if (v42) {
    var v340 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v41 = v340 + " characters.";
    alert(v41);
    return false;
  } else {
    return true;
  }
  return;
}
function complement(dnaSequence) {
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/g/g, "1");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/c/g, "2");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/1/g, "c");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/2/g, "g");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/G/g, "1");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/C/g, "2");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/1/g, "C");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/2/g, "G");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/a/g, "1");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/t/g, "2");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/1/g, "t");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/2/g, "a");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/A/g, "1");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/T/g, "2");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/1/g, "T");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/2/g, "A");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/u/g, "a");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/U/g, "A");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/r/g, "1");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/y/g, "2");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/1/g, "y");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/2/g, "r");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/R/g, "1");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/Y/g, "2");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/1/g, "Y");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/2/g, "R");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/k/g, "1");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/m/g, "2");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/1/g, "m");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/2/g, "k");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/K/g, "1");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/M/g, "2");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/1/g, "M");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/2/g, "K");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/b/g, "1");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/v/g, "2");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/1/g, "v");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/2/g, "b");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/B/g, "1");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/V/g, "2");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/1/g, "V");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/2/g, "B");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/d/g, "1");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/h/g, "2");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/1/g, "h");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/2/g, "d");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/D/g, "1");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/H/g, "2");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/1/g, "H");
  }
  introspect(JAM.policy.p15) {
    dnaSequence = dnaSequence.replace(/2/g, "D");
  }
  return dnaSequence;
}
function closeForm() {
  var v43 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v43.write("</form>");
  }
  return true;
}
function closePre() {
  var v44 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v44.write("</div>");
  }
  var v45 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v45.write("</pre>\n");
  }
  return;
}
function closeTextArea() {
  var v46 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v46.write("</textarea>");
  }
  return true;
}
function closeWindow() {
  var v47 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v47.write("</body>\n</html>\n");
  }
  outputWindow.status = "Done.";
  var v48 = outputWindow.document;
  v48.close();
  return;
}
function convertDegenerates(sequence$$1) {
  sequence$$1 = sequence$$1.toLowerCase();
  introspect(JAM.policy.p15) {
    sequence$$1 = sequence$$1.replace(/t/g, "[TU]");
  }
  introspect(JAM.policy.p15) {
    sequence$$1 = sequence$$1.replace(/r/g, "[AGR]");
  }
  introspect(JAM.policy.p15) {
    sequence$$1 = sequence$$1.replace(/y/g, "[CTUY]");
  }
  introspect(JAM.policy.p15) {
    sequence$$1 = sequence$$1.replace(/s/g, "[GCS]");
  }
  introspect(JAM.policy.p15) {
    sequence$$1 = sequence$$1.replace(/w/g, "[ATUW]");
  }
  introspect(JAM.policy.p15) {
    sequence$$1 = sequence$$1.replace(/k/g, "[GTUK]");
  }
  introspect(JAM.policy.p15) {
    sequence$$1 = sequence$$1.replace(/m/g, "[ACM]");
  }
  introspect(JAM.policy.p15) {
    sequence$$1 = sequence$$1.replace(/b/g, "[CGTUBSKY]");
  }
  introspect(JAM.policy.p15) {
    sequence$$1 = sequence$$1.replace(/d/g, "[AGTUDRKW]");
  }
  introspect(JAM.policy.p15) {
    sequence$$1 = sequence$$1.replace(/h/g, "[ACTUHMYW]");
  }
  introspect(JAM.policy.p15) {
    sequence$$1 = sequence$$1.replace(/v/g, "[ACGVSMR]");
  }
  introspect(JAM.policy.p15) {
    sequence$$1 = sequence$$1.replace(/n/g, "[ACGTURYSWKMBDHVN]");
  }
  return sequence$$1;
}
function earlyCheckAlign(alignArray) {
  var v341 = alignArray.length;
  var v49 = v341 < 3;
  if (v49) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v342 = alignArray.length;
  var v51 = i$$4 < v342;
  for (;v51;) {
    var v518 = alignArray[i$$4];
    introspect(JAM.policy.p16) {
      var v343 = v518.search(/[^\s]+\s/)
    }
    var v50 = v343 == -1;
    if (v50) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v344 = alignArray.length;
    v51 = i$$4 < v344;
  }
  return true;
}
function filterAlignSeq(alignSeq) {
  introspect(JAM.policy.p15) {
    alignSeq = alignSeq.replace(/[^abcdefghiklmnpqrstvwxyz\.\-]/gi, "");
  }
  return alignSeq;
}
function filterFastaTitle(sequenceTitle) {
  introspect(JAM.policy.p15) {
    sequenceTitle = sequenceTitle.replace(/\s{2,}/g, " ");
  }
  introspect(JAM.policy.p15) {
    sequenceTitle = sequenceTitle.replace(/^\s*/g, "");
  }
  introspect(JAM.policy.p15) {
    sequenceTitle = sequenceTitle.replace(/[\f\n\r\t]+$/g, "\n");
  }
  introspect(JAM.policy.p15) {
    return sequenceTitle.replace(/[\<\>]\n/gi, "");
  }
}
function getArrayOfFasta(sequenceData) {
  var arrayOfFasta = new Array;
  var matchArray;
  var re$$1 = /\>[^\>]+/g;
  introspect(JAM.policy.p16) {
    var v345 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v54 = v345 != -1;
  if (v54) {
    introspect(JAM.policy.p17) {
      var v53 = matchArray = re$$1.exec(sequenceData)
    }
    for (;v53;) {
      var v52 = matchArray[0];
      introspect(JAM.policy.p17) {
        arrayOfFasta.push(v52);
      }
      introspect(JAM.policy.p17) {
        v53 = matchArray = re$$1.exec(sequenceData);
      }
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v346 = sequence$$2.length;
  var v55 = "&gt;results for " + v346;
  var stringToReturn = v55 + " residue sequence ";
  introspect(JAM.policy.p16) {
    var v347 = fastaSequenceTitle.search(/[^\s]/)
  }
  var v57 = v347 != -1;
  if (v57) {
    var v348 = stringToReturn + '"';
    var v56 = v348 + fastaSequenceTitle;
    stringToReturn = v56 + '"';
  }
  var v349 = stringToReturn + ' starting "';
  introspect(JAM.policy.p13) {
    var v350 = sequence$$2.substring(0, 10)
  }
  var v58 = v349 + v350;
  stringToReturn = v58 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v351 = sequenceOne.length;
  var v59 = "Search results for " + v351;
  var stringToReturn$$1 = v59 + " residue sequence ";
  introspect(JAM.policy.p16) {
    var v352 = fastaSequenceTitleOne.search(/[^\s]/)
  }
  var v61 = v352 != -1;
  if (v61) {
    var v353 = stringToReturn$$1 + '"';
    var v60 = v353 + fastaSequenceTitleOne;
    stringToReturn$$1 = v60 + '"';
  }
  var v354 = stringToReturn$$1 + ' starting "';
  introspect(JAM.policy.p13) {
    var v355 = sequenceOne.substring(0, 10)
  }
  var v62 = v354 + v355;
  stringToReturn$$1 = v62 + '"\n';
  var v356 = stringToReturn$$1 + "and ";
  var v357 = sequenceTwo.length;
  var v63 = v356 + v357;
  stringToReturn$$1 = v63 + " residue sequence ";
  introspect(JAM.policy.p16) {
    var v358 = fastaSequenceTitleTwo.search(/[^\s]/)
  }
  var v65 = v358 != -1;
  if (v65) {
    var v359 = stringToReturn$$1 + '"';
    var v64 = v359 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v64 + '"';
  }
  var v360 = stringToReturn$$1 + ' starting "';
  introspect(JAM.policy.p13) {
    var v361 = sequenceTwo.substring(0, 10)
  }
  var v66 = v360 + v361;
  stringToReturn$$1 = v66 + '"';
  var v67 = '<div class="info">' + stringToReturn$$1;
  return v67 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v68 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v68);
  var j$$2 = 0;
  var v362 = arrayOfPatterns$$3.length;
  var v70 = j$$2 < v362;
  for (;v70;) {
    var v519 = arrayOfPatterns$$3[j$$2];
    introspect(JAM.policy.p16) {
      var v363 = v519.match(/\/.+\//)
    }
    var v69 = v363 + "gi";
    var v786 = eval(v69);
    geneticCodeMatchExp$$1[j$$2] = v786;
    j$$2++;
    var v364 = arrayOfPatterns$$3.length;
    v70 = j$$2 < v364;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v71 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v71);
  var j$$3 = 0;
  var v365 = arrayOfPatterns$$4.length;
  var v74 = j$$3 < v365;
  for (;v74;) {
    var v366 = arrayOfPatterns$$4[j$$3];
    introspect(JAM.policy.p16) {
      var v72 = v366.match(/=[a-zA-Z\*]/)
    }
    var v787 = v72.toString();
    geneticCodeMatchResult$$1[j$$3] = v787;
    var v73 = geneticCodeMatchResult$$1[j$$3];
    introspect(JAM.policy.p15) {
      var v788 = v73.replace(/=/g, "")
    }
    geneticCodeMatchResult$$1[j$$3] = v788;
    j$$3++;
    var v367 = arrayOfPatterns$$4.length;
    v74 = j$$3 < v367;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(sequence$$3) {
  var fastaSequenceTitle$$1 = title;
  var v368 = sequence$$3.length;
  var v75 = "Results for " + v368;
  var stringToReturn$$2 = v75 + " residue sequence ";
  introspect(JAM.policy.p16) {
    var v369 = fastaSequenceTitle$$1.search(/[^\s]/)
  }
  var v77 = v369 != -1;
  if (v77) {
    var v370 = stringToReturn$$2 + '"';
    var v76 = v370 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v76 + '"';
  }
  var v371 = stringToReturn$$2 + ' starting "';
  introspect(JAM.policy.p13) {
    var v372 = sequence$$3.substring(0, 10)
  }
  var v78 = v371 + v372;
  stringToReturn$$2 = v78 + '"';
  var v79 = '<div class="info">' + stringToReturn$$2;
  return v79 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v520 = "Results for " + topology;
  var v373 = v520 + " ";
  var v374 = sequence$$4.length;
  var v80 = v373 + v374;
  var stringToReturn$$3 = v80 + " residue sequence ";
  introspect(JAM.policy.p16) {
    var v375 = fastaSequenceTitle$$2.search(/[^\s]/)
  }
  var v82 = v375 != -1;
  if (v82) {
    var v376 = stringToReturn$$3 + '"';
    var v81 = v376 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v81 + '"';
  }
  var v377 = stringToReturn$$3 + ' starting "';
  introspect(JAM.policy.p13) {
    var v378 = sequence$$4.substring(0, 10)
  }
  var v83 = v377 + v378;
  stringToReturn$$3 = v83 + '"';
  var v84 = '<div class="info">' + stringToReturn$$3;
  return v84 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v379 = sequenceOne$$1.length;
  var v85 = "Alignment results for " + v379;
  var stringToReturn$$4 = v85 + " residue sequence ";
  introspect(JAM.policy.p16) {
    var v380 = fastaSequenceTitleOne$$1.search(/[^\s]/)
  }
  var v87 = v380 != -1;
  if (v87) {
    var v381 = stringToReturn$$4 + '"';
    var v86 = v381 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v86 + '"';
  }
  var v382 = stringToReturn$$4 + ' starting "';
  introspect(JAM.policy.p13) {
    var v383 = sequenceOne$$1.substring(0, 10)
  }
  var v88 = v382 + v383;
  stringToReturn$$4 = v88 + '"\n';
  var v384 = stringToReturn$$4 + "and ";
  var v385 = sequenceTwo$$1.length;
  var v89 = v384 + v385;
  stringToReturn$$4 = v89 + " residue sequence ";
  introspect(JAM.policy.p16) {
    var v386 = fastaSequenceTitleTwo$$1.search(/[^\s]/)
  }
  var v91 = v386 != -1;
  if (v91) {
    var v387 = stringToReturn$$4 + '"';
    var v90 = v387 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v90 + '"';
  }
  var v388 = stringToReturn$$4 + ' starting "';
  introspect(JAM.policy.p13) {
    var v389 = sequenceTwo$$1.substring(0, 10)
  }
  var v92 = v388 + v389;
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
    var v390 = Math.random();
    var v391 = components.length;
    var v94 = v390 * v391;
    introspect(JAM.policy.p16) {
      tempNum = Math.floor(v94);
    }
    tempChar = components[tempNum];
    introspect(JAM.policy.p17) {
      sequenceArray.push(tempChar);
    }
    j$$4++;
    v95 = j$$4 < lengthOut;
  }
  introspect(JAM.policy.p11) {
    return sequenceArray.join("");
  }
}
function getSequenceFromFasta(sequenceRecord) {
  introspect(JAM.policy.p16) {
    var v392 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v96 = v392 != -1;
  if (v96) {
    introspect(JAM.policy.p15) {
      sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "");
    }
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  introspect(JAM.policy.p16) {
    var v393 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v98 = v393 != -1;
  if (v98) {
    introspect(JAM.policy.p15) {
      var v97 = sequenceRecord$$1.match(/\>[^\f\n\r]+[\f\n\r]/, "")
    }
    fastaTitle = v97.toString();
    introspect(JAM.policy.p15) {
      fastaTitle = fastaTitle.replace(/\>|[\f\n\r]/g, "");
    }
    introspect(JAM.policy.p15) {
      fastaTitle = fastaTitle.replace(/\s{2,}/g, " ");
    }
    introspect(JAM.policy.p15) {
      fastaTitle = fastaTitle.replace(/[\<\>]/gi, "");
    }
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  introspect(JAM.policy.p16) {
    var v761 = expressionToCheck.search(/\[[A-Za-z\|]*\[/)
  }
  var v754 = v761 != -1;
  var v763 = !v754;
  if (v763) {
    introspect(JAM.policy.p16) {
      var v762 = expressionToCheck.search(/\][A-Za-z\|]*\]/)
    }
    v754 = v762 != -1;
  }
  var v745 = v754;
  var v756 = !v745;
  if (v756) {
    introspect(JAM.policy.p16) {
      var v755 = expressionToCheck.search(/\[\]/)
    }
    v745 = v755 != -1;
  }
  var v735 = v745;
  var v747 = !v735;
  if (v747) {
    introspect(JAM.policy.p16) {
      var v746 = expressionToCheck.search(/\/[A-Za-z\|]*\]/)
    }
    v735 = v746 != -1;
  }
  var v721 = v735;
  var v737 = !v721;
  if (v737) {
    introspect(JAM.policy.p16) {
      var v736 = expressionToCheck.search(/\[[A-Za-z\|]*\//)
    }
    v721 = v736 != -1;
  }
  var v700 = v721;
  var v723 = !v700;
  if (v723) {
    introspect(JAM.policy.p16) {
      var v722 = expressionToCheck.search(/\|\|/)
    }
    v700 = v722 != -1;
  }
  var v679 = v700;
  var v702 = !v679;
  if (v702) {
    introspect(JAM.policy.p16) {
      var v701 = expressionToCheck.search(/\/\|/)
    }
    v679 = v701 != -1;
  }
  var v641 = v679;
  var v681 = !v641;
  if (v681) {
    introspect(JAM.policy.p16) {
      var v680 = expressionToCheck.search(/\|\//)
    }
    v641 = v680 != -1;
  }
  var v589 = v641;
  var v643 = !v589;
  if (v643) {
    introspect(JAM.policy.p16) {
      var v642 = expressionToCheck.search(/\[.\]/)
    }
    v589 = v642 != -1;
  }
  var v521 = v589;
  var v591 = !v521;
  if (v591) {
    introspect(JAM.policy.p16) {
      var v590 = expressionToCheck.search(/\</)
    }
    v521 = v590 != -1;
  }
  var v394 = v521;
  var v523 = !v394;
  if (v523) {
    introspect(JAM.policy.p16) {
      var v522 = expressionToCheck.search(/\>/)
    }
    v394 = v522 != -1;
  }
  var v99 = v394;
  if (v99) {
    return false;
  }
  return true;
}
function openForm() {
  var v100 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v100.write('<form action="">\n');
  }
  return true;
}
function openPre() {
  var v101 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v101.write("<pre>");
  }
  var v102 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v102.write('<div class="pre">');
  }
  return;
}
function openTextArea() {
  var v103 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v103.write('<br /><textarea rows="6" cols="61">\n');
  }
  return true;
}
function openWindow() {
  var title$$6 = "Protein Isoelectric Point";
  _openWindow(title$$6);
  return;
}
function _openWindow(title$$7) {
  var isColor = true;
  introspect(JAM.policy.p14) {
    outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  }
  outputWindow.focus();
  var v104 = outputWindow.document;
  var v592 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v524 = v592 + "<head>\n";
  var v395 = v524 + "<title>Sequence Manipulation Suite</title>\n";
  var v105 = v395 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  introspect(JAM.policy.p17) {
    v104.write(v105);
  }
  if (isColor) {
    var v106 = outputWindow.document;
    var v776 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v772 = v776 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v768 = v772 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v764 = v768 + "div.info {font-weight: bold}\n";
    var v757 = v764 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v748 = v757 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v738 = v748 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v724 = v738 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v703 = v724 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v682 = v703 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v644 = v682 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v593 = v644 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v525 = v593 + "td.many {color: #000000}\n";
    var v396 = v525 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v107 = v396 + "</style>\n";
    introspect(JAM.policy.p17) {
      v106.write(v107);
    }
  } else {
    var v108 = outputWindow.document;
    var v780 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v777 = v780 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v773 = v777 + "div.title {display: none}\n";
    var v769 = v773 + "div.info {font-weight: bold}\n";
    var v765 = v769 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v758 = v765 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v749 = v758 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v739 = v749 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v725 = v739 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v704 = v725 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v683 = v704 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v645 = v683 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v594 = v645 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v526 = v594 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v397 = v526 + "img {display: none}\n";
    var v109 = v397 + "</style>\n";
    introspect(JAM.policy.p17) {
      v108.write(v109);
    }
  }
  var v110 = outputWindow.document;
  var v595 = "</head>\n" + '<body class="main">\n';
  var v527 = v595 + '<div class="title">';
  var v398 = v527 + title$$7;
  var v111 = v398 + " results</div>\n";
  introspect(JAM.policy.p17) {
    v110.write(v111);
  }
  outputWindow.status = "Please Wait.";
  return;
}
function openWindowAlign(title$$8) {
  _openWindowAlign(title$$8);
  return;
}
function _openWindowAlign(title$$9) {
  var isBackground = true;
  introspect(JAM.policy.p14) {
    outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  }
  outputWindow.focus();
  var v112 = outputWindow.document;
  var v596 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v528 = v596 + "<head>\n";
  var v399 = v528 + "<title>Sequence Manipulation Suite</title>\n";
  var v113 = v399 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  introspect(JAM.policy.p17) {
    v112.write(v113);
  }
  if (isBackground) {
    var v114 = outputWindow.document;
    var v778 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v774 = v778 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v770 = v774 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v766 = v770 + "div.info {font-weight: bold}\n";
    var v759 = v766 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v750 = v759 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v740 = v750 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v726 = v740 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v705 = v726 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v684 = v705 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v646 = v684 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v597 = v646 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v529 = v597 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v400 = v529 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v115 = v400 + "</style>\n";
    introspect(JAM.policy.p17) {
      v114.write(v115);
    }
  } else {
    var v116 = outputWindow.document;
    var v782 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v781 = v782 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v779 = v781 + "div.title {display: none}\n";
    var v775 = v779 + "div.info {font-weight: bold}\n";
    var v771 = v775 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v767 = v771 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v760 = v767 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v751 = v760 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v741 = v751 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v727 = v741 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v706 = v727 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v685 = v706 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v647 = v685 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v598 = v647 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v530 = v598 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v401 = v530 + "img {display: none}\n";
    var v117 = v401 + "</style>\n";
    introspect(JAM.policy.p17) {
      v116.write(v117);
    }
  }
  var v118 = outputWindow.document;
  var v599 = "</head>\n" + '<body class="main">\n';
  var v531 = v599 + '<div class="title">';
  var v402 = v531 + title$$9;
  var v119 = v402 + " results</div>\n";
  introspect(JAM.policy.p17) {
    v118.write(v119);
  }
  outputWindow.status = "Please Wait.";
  return;
}
function removeFormatting(sequence$$5) {
  introspect(JAM.policy.p15) {
    return sequence$$5.replace(/[\d\s]/g, "");
  }
}
function removeNonDna(sequence$$6) {
  introspect(JAM.policy.p15) {
    return sequence$$6.replace(/[^gatucryswkmbdhvnxGATUCRYSWKMBDHVNX]/g, "");
  }
}
function removeNonDnaStrict(sequence$$7) {
  introspect(JAM.policy.p15) {
    return sequence$$7.replace(/[^gatucGATUC]/g, "");
  }
}
function removeNonProtein(sequence$$8) {
  introspect(JAM.policy.p15) {
    return sequence$$8.replace(/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, "");
  }
}
function removeNonProteinStrict(sequence$$9) {
  introspect(JAM.policy.p15) {
    return sequence$$9.replace(/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, "");
  }
}
function removeNonProteinAllowDegen(sequence$$10) {
  introspect(JAM.policy.p15) {
    return sequence$$10.replace(/[^ABCDEFGHIKLMNPQRSTVWYXZabcdefghiklmnpqrstvwyxz\*]/g, "");
  }
}
function removeNonProteinAllowX(sequence$$11) {
  introspect(JAM.policy.p15) {
    return sequence$$11.replace(/[^ACDEFGHIKLMNPQRSTVWYZXacdefghiklmnpqrstvwyzx\*]/g, "");
  }
}
function removeWhiteSpace(text$$9) {
  introspect(JAM.policy.p15) {
    return text$$9.replace(/\s/g, "");
  }
}
function removeNonLetters(sequence$$12) {
  introspect(JAM.policy.p15) {
    return sequence$$12.replace(/[^A-Z]/gi, "");
  }
}
function reverse(dnaSequence$$1) {
  var tempDnaArray = new Array;
  introspect(JAM.policy.p16) {
    var v403 = dnaSequence$$1.search(/./)
  }
  var v120 = v403 != -1;
  if (v120) {
    introspect(JAM.policy.p16) {
      tempDnaArray = dnaSequence$$1.match(/./g);
    }
    tempDnaArray = tempDnaArray.reverse();
    introspect(JAM.policy.p11) {
      dnaSequence$$1 = tempDnaArray.join("");
    }
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
  introspect(JAM.policy.p17) {
    testArray.push(testString);
  }
  var v404 = testArray[0];
  var v124 = v404 != testString;
  if (v124) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  introspect(JAM.policy.p17) {
    var v405 = testString.search(re$$2)
  }
  var v125 = v405 == -1;
  if (v125) {
    alert("Regular expression 'm' flag not supported. See browser compatibility page.");
    return false;
  }
  var caughtException = false;
  try {
    re$$2 = eval("Exception handling not supported. Check browser compatibility page.");
  } catch (e$$4) {
    caughtException = true;
  }
  var v126 = !caughtException;
  if (v126) {
    alert("Exception handling not supported. See browser compatibility page.");
  }
  testString = "123";
  introspect(JAM.policy.p15) {
    testString = testString.replace(/(\d)/g, v1);
  }
  var v127 = testString != "1X2X3X";
  if (v127) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false;
  }
  var testNum = 2489.8237;
  introspect(JAM.policy.p10) {
    var v406 = testNum.toFixed(3)
  }
  var v128 = v406 != 2489.824;
  if (v128) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  introspect(JAM.policy.p10) {
    var v407 = testNum.toPrecision(5)
  }
  var v129 = v407 != 2489.8;
  if (v129) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  introspect(JAM.policy.p16) {
    var v408 = theNumber$$1.search(/\d/)
  }
  var v130 = v408 == -1;
  if (v130) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  introspect(JAM.policy.p16) {
    var v648 = emblFile.search(/ID/)
  }
  var v600 = v648 == -1;
  var v650 = !v600;
  if (v650) {
    introspect(JAM.policy.p16) {
      var v649 = emblFile.search(/AC/)
    }
    v600 = v649 == -1;
  }
  var v532 = v600;
  var v602 = !v532;
  if (v602) {
    introspect(JAM.policy.p16) {
      var v601 = emblFile.search(/DE/)
    }
    v532 = v601 == -1;
  }
  var v409 = v532;
  var v534 = !v409;
  if (v534) {
    introspect(JAM.policy.p16) {
      var v533 = emblFile.search(/SQ/)
    }
    v409 = v533 == -1;
  }
  var v131 = v409;
  if (v131) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  introspect(JAM.policy.p16) {
    var v410 = theNumber$$2.search(/\d/)
  }
  var v132 = v410 == -1;
  if (v132) {
    alert("Please enter a number.");
    return false;
  }
  var v134 = theNumber$$2 > maxInput$$2;
  if (v134) {
    var v411 = "Please enter a number less than or equal to " + maxInput$$2;
    var v133 = v411 + ".";
    alert(v133);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  introspect(JAM.policy.p16) {
    var v412 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i)
  }
  var v135 = v412 != -1;
  if (v135) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  introspect(JAM.policy.p16) {
    var v413 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i)
  }
  var v136 = v413 != -1;
  if (v136) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  introspect(JAM.policy.p16) {
    var v651 = genBankFile.search(/LOCUS/)
  }
  var v603 = v651 == -1;
  var v653 = !v603;
  if (v653) {
    introspect(JAM.policy.p16) {
      var v652 = genBankFile.search(/DEFINITION/)
    }
    v603 = v652 == -1;
  }
  var v535 = v603;
  var v605 = !v535;
  if (v605) {
    introspect(JAM.policy.p16) {
      var v604 = genBankFile.search(/ACCESSION/)
    }
    v535 = v604 == -1;
  }
  var v414 = v535;
  var v537 = !v414;
  if (v537) {
    introspect(JAM.policy.p16) {
      var v536 = genBankFile.search(/ORIGIN/)
    }
    v414 = v536 == -1;
  }
  var v137 = v414;
  if (v137) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  introspect(JAM.policy.p16) {
    var v654 = genBankFile$$1.search(/LOCUS/)
  }
  var v606 = v654 == -1;
  var v656 = !v606;
  if (v656) {
    introspect(JAM.policy.p16) {
      var v655 = genBankFile$$1.search(/DEFINITION/)
    }
    v606 = v655 == -1;
  }
  var v538 = v606;
  var v608 = !v538;
  if (v608) {
    introspect(JAM.policy.p16) {
      var v607 = genBankFile$$1.search(/ACCESSION/)
    }
    v538 = v607 == -1;
  }
  var v415 = v538;
  var v540 = !v415;
  if (v540) {
    introspect(JAM.policy.p16) {
      var v539 = genBankFile$$1.search(/ORIGIN/)
    }
    v415 = v539 == -1;
  }
  var v138 = v415;
  if (v138) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  introspect(JAM.policy.p16) {
    var v416 = genBankFile$$1.search(/FEATURES {13}/)
  }
  var v139 = v416 == -1;
  if (v139) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  introspect(JAM.policy.p16) {
    var v657 = emblFile$$1.search(/ID/)
  }
  var v609 = v657 == -1;
  var v659 = !v609;
  if (v659) {
    introspect(JAM.policy.p16) {
      var v658 = emblFile$$1.search(/AC/)
    }
    v609 = v658 == -1;
  }
  var v541 = v609;
  var v611 = !v541;
  if (v611) {
    introspect(JAM.policy.p16) {
      var v610 = emblFile$$1.search(/DE/)
    }
    v541 = v610 == -1;
  }
  var v417 = v541;
  var v543 = !v417;
  if (v543) {
    introspect(JAM.policy.p16) {
      var v542 = emblFile$$1.search(/SQ/)
    }
    v417 = v542 == -1;
  }
  var v140 = v417;
  if (v140) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  introspect(JAM.policy.p16) {
    var v418 = emblFile$$1.search(/^FT/m)
  }
  var v141 = v418 == -1;
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
    var v419 = basePerLine / groupSize;
    var v145 = j$$6 <= v419;
    for (;v145;) {
      var v144 = k < groupSize;
      for (;v144;) {
        var v420 = k + i$$5;
        introspect(JAM.policy.p17) {
          var v143 = text$$10.charAt(v420)
        }
        lineOfText = lineOfText + v143;
        k = k + 1;
        v144 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v421 = basePerLine / groupSize;
      v145 = j$$6 <= v421;
    }
    var v146 = outputWindow.document;
    var v147 = lineOfText + "\n";
    introspect(JAM.policy.p17) {
      v146.write(v147);
    }
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
    var v422 = adjustment < 0;
    if (v422) {
      v422 = adjusted >= 0;
    }
    var v149 = v422;
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
    var v423 = basePerLine$$2 / groupSize$$2;
    var v156 = j$$7 <= v423;
    for (;v156;) {
      var v152 = k$$1 < groupSize$$2;
      for (;v152;) {
        var v424 = i$$6 + k$$1;
        var v150 = v424 >= stopBase$$2;
        if (v150) {
          break;
        }
        var v425 = k$$1 + i$$6;
        introspect(JAM.policy.p17) {
          var v151 = text$$12.charAt(v425)
        }
        lineOfText$$1 = lineOfText$$1 + v151;
        k$$1 = k$$1 + 1;
        v152 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v154 = numberPosition$$1 == "above";
      if (v154) {
        var v426 = adjustNumbering(i$$6, numberingAdjustment);
        var v153 = rightNum(v426, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v153;
      }
      var v155 = i$$6 >= stopBase$$2;
      if (v155) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v427 = basePerLine$$2 / groupSize$$2;
      v156 = j$$7 <= v427;
    }
    var v179 = numberPosition$$1 == "left";
    if (v179) {
      var v157 = outputWindow.document;
      var v612 = adjustNumbering(lineNum, numberingAdjustment);
      var v544 = rightNum(v612, "", 8, tabIn$$3);
      var v428 = v544 + lineOfText$$1;
      var v158 = v428 + "\n";
      introspect(JAM.policy.p17) {
        v157.write(v158);
      }
      var v162 = strands$$1 == "two";
      if (v162) {
        var v159 = outputWindow.document;
        var v613 = adjustNumbering(lineNum, numberingAdjustment);
        var v545 = rightNum(v613, "", 8, tabIn$$3);
        var v546 = complement(lineOfText$$1);
        var v429 = v545 + v546;
        var v160 = v429 + "\n";
        introspect(JAM.policy.p17) {
          v159.write(v160);
        }
        var v161 = outputWindow.document;
        introspect(JAM.policy.p11) {
          v161.write("\n");
        }
      }
    } else {
      var v178 = numberPosition$$1 == "right";
      if (v178) {
        var v163 = outputWindow.document;
        var v547 = adjustNumbering(i$$6, numberingAdjustment);
        var v430 = lineOfText$$1 + v547;
        var v164 = v430 + "\n";
        introspect(JAM.policy.p17) {
          v163.write(v164);
        }
        var v168 = strands$$1 == "two";
        if (v168) {
          var v165 = outputWindow.document;
          var v548 = complement(lineOfText$$1);
          var v549 = adjustNumbering(i$$6, numberingAdjustment);
          var v431 = v548 + v549;
          var v166 = v431 + "\n";
          introspect(JAM.policy.p17) {
            v165.write(v166);
          }
          var v167 = outputWindow.document;
          introspect(JAM.policy.p11) {
            v167.write("\n");
          }
        }
      } else {
        var v177 = numberPosition$$1 == "above";
        if (v177) {
          var v169 = outputWindow.document;
          var v170 = aboveNum + "\n";
          introspect(JAM.policy.p17) {
            v169.write(v170);
          }
          var v171 = outputWindow.document;
          var v172 = lineOfText$$1 + "\n";
          introspect(JAM.policy.p17) {
            v171.write(v172);
          }
          var v176 = strands$$1 == "two";
          if (v176) {
            var v173 = outputWindow.document;
            var v432 = complement(lineOfText$$1);
            var v174 = v432 + "\n";
            introspect(JAM.policy.p17) {
              v173.write(v174);
            }
            var v175 = outputWindow.document;
            introspect(JAM.policy.p11) {
              v175.write("\n");
            }
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
    var v433 = basePerLine$$3 / groupSize$$3;
    var v187 = j$$8 <= v433;
    for (;v187;) {
      var v183 = k$$2 < groupSize$$3;
      for (;v183;) {
        var v434 = i$$7 + k$$2;
        var v181 = v434 >= stopBase$$3;
        if (v181) {
          break;
        }
        var v435 = k$$2 + i$$7;
        introspect(JAM.policy.p17) {
          var v182 = text$$13.charAt(v435)
        }
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
      var v436 = basePerLine$$3 / groupSize$$3;
      v187 = j$$8 <= v436;
    }
    var v198 = numberPosition$$2 == "left";
    if (v198) {
      var v188 = outputWindow.document;
      var v550 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v437 = v550 + lineOfText$$2;
      var v189 = v437 + "\n";
      introspect(JAM.policy.p17) {
        v188.write(v189);
      }
    } else {
      var v197 = numberPosition$$2 == "right";
      if (v197) {
        var v190 = outputWindow.document;
        var v438 = lineOfText$$2 + i$$7;
        var v191 = v438 + "\n";
        introspect(JAM.policy.p17) {
          v190.write(v191);
        }
      } else {
        var v196 = numberPosition$$2 == "above";
        if (v196) {
          var v192 = outputWindow.document;
          var v193 = aboveNum$$1 + "\n";
          introspect(JAM.policy.p17) {
            v192.write(v193);
          }
          var v194 = outputWindow.document;
          var v195 = lineOfText$$2 + "\n";
          introspect(JAM.policy.p17) {
            v194.write(v195);
          }
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
  var v614 = sequence$$13.length;
  var v551 = v614 <= firstIndexToMutate;
  var v615 = !v551;
  if (v615) {
    v551 = lastIndexToMutate < 0;
  }
  var v439 = v551;
  var v552 = !v439;
  if (v552) {
    v439 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v200 = v439;
  if (v200) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v208 = i$$8 < numMut;
  for (;v208;) {
    maxNum = sequence$$13.length;
    var v440 = Math.random();
    var v201 = v440 * maxNum;
    introspect(JAM.policy.p16) {
      randNum = Math.floor(v201);
    }
    var v441 = randNum < firstIndexToMutate;
    var v553 = !v441;
    if (v553) {
      v441 = randNum > lastIndexToMutate;
    }
    var v202 = v441;
    if (v202) {
      numMut++;
      i$$8++;
      v208 = i$$8 < numMut;
      continue;
    }
    introspect(JAM.policy.p16) {
      currentChar = sequence$$13.charAt(randNum);
    }
    needNewChar = true;
    for (;needNewChar;) {
      var v442 = Math.random();
      var v443 = components$$1.length;
      var v203 = v442 * v443;
      introspect(JAM.policy.p16) {
        componentsIndex = Math.round(v203);
      }
      var v444 = components$$1.length;
      var v204 = componentsIndex == v444;
      if (v204) {
        componentsIndex = 0;
      }
      var v445 = components$$1[componentsIndex];
      var v205 = v445 != currentChar;
      if (v205) {
        needNewChar = false;
      }
    }
    introspect(JAM.policy.p13) {
      var v446 = sequence$$13.substring(0, randNum)
    }
    var v447 = components$$1[componentsIndex];
    var v206 = v446 + v447;
    var v448 = randNum + 1;
    var v449 = sequence$$13.length;
    introspect(JAM.policy.p27) {
      var v207 = sequence$$13.substring(v448, v449)
    }
    sequence$$13 = v206 + v207;
    i$$8++;
    v208 = i$$8 < numMut;
  }
  var v209 = outputWindow.document;
  var v210 = addReturns(sequence$$13);
  introspect(JAM.policy.p17) {
    v209.write(v210);
  }
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v215 = j$$9 < lengthOut$$1;
  for (;v215;) {
    var v450 = Math.random();
    var v451 = components$$2.length;
    var v211 = v450 * v451;
    introspect(JAM.policy.p16) {
      tempNum$$1 = Math.floor(v211);
    }
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v452 = sequence$$14.length;
    var v214 = v452 == 60;
    if (v214) {
      var v212 = outputWindow.document;
      var v213 = sequence$$14 + "\n";
      introspect(JAM.policy.p17) {
        v212.write(v213);
      }
      sequence$$14 = "";
    }
    j$$9++;
    v215 = j$$9 < lengthOut$$1;
  }
  var v216 = outputWindow.document;
  var v217 = sequence$$14 + "\n";
  introspect(JAM.policy.p17) {
    v216.write(v217);
  }
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
    introspect(JAM.policy.p13) {
      var v218 = sequence$$15.substring(0, lookAhead)
    }
    shiftValue = v218.length;
    var v616 = sequence$$15.length;
    var v554 = v616 - lookAhead;
    var v555 = sequence$$15.length;
    introspect(JAM.policy.p27) {
      var v453 = sequence$$15.substring(v554, v555)
    }
    var v219 = v453 + sequence$$15;
    introspect(JAM.policy.p13) {
      var v220 = sequence$$15.substring(0, lookAhead)
    }
    sequence$$15 = v219 + v220;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v222 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v222.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  }
  var v223 = outputWindow.document;
  var v617 = '<tr><td class="title" width="200px">' + "Site:";
  var v556 = v617 + '</td><td class="title">';
  var v454 = v556 + "Positions:";
  var v224 = v454 + "</td></tr>\n";
  introspect(JAM.policy.p17) {
    v223.write(v224);
  }
  var i$$9 = 0;
  var v455 = arrayOfItems.length;
  var v240 = i$$9 < v455;
  for (;v240;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v456 = arrayOfItems[i$$9];
    introspect(JAM.policy.p16) {
      var v225 = v456.match(/\/.+\//)
    }
    matchExp = v225 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    var v618 = arrayOfItems[i$$9];
    introspect(JAM.policy.p16) {
      var v557 = v618.match(/\)\D*\d+/)
    }
    var v457 = v557.toString();
    introspect(JAM.policy.p15) {
      var v226 = v457.replace(/\)\D*/, "")
    }
    cutDistance = parseFloat(v226);
    introspect(JAM.policy.p17) {
      var v232 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    for (;v232;) {
      var v227 = matchExp.lastIndex;
      matchPosition = v227 - cutDistance;
      var v458 = matchPosition >= lowerLimit;
      if (v458) {
        v458 = matchPosition < upperLimit;
      }
      var v230 = v458;
      if (v230) {
        timesFound++;
        var v228 = tempString$$1 + ", ";
        var v459 = matchPosition - shiftValue;
        var v229 = v459 + 1;
        tempString$$1 = v228 + v229;
      }
      var v460 = matchExp.lastIndex;
      var v558 = RegExp.lastMatch;
      var v461 = v558.length;
      var v231 = v460 - v461;
      matchExp.lastIndex = v231 + 1;
      introspect(JAM.policy.p17) {
        v232 = matchArray$$1 = matchExp.exec(sequence$$15);
      }
    }
    introspect(JAM.policy.p16) {
      var v462 = tempString$$1.search(/\d/)
    }
    var v233 = v462 != -1;
    if (v233) {
      introspect(JAM.policy.p15) {
        tempString$$1 = tempString$$1.replace(/none,\s*/, "");
      }
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
    var v728 = '<tr><td class="' + backGroundClass;
    var v707 = v728 + '">';
    var v752 = arrayOfItems[i$$9];
    introspect(JAM.policy.p16) {
      var v742 = v752.match(/\([^\(]+\)/)
    }
    var v729 = v742.toString();
    introspect(JAM.policy.p15) {
      var v708 = v729.replace(/\(|\)/g, "")
    }
    var v686 = v707 + v708;
    var v660 = v686 + '</td><td class="';
    var v619 = v660 + backGroundClass;
    var v559 = v619 + '">';
    var v463 = v559 + tempString$$1;
    var v239 = v463 + "</td></tr>\n";
    introspect(JAM.policy.p17) {
      v238.write(v239);
    }
    timesFound = 0;
    i$$9++;
    var v464 = arrayOfItems.length;
    v240 = i$$9 < v464;
  }
  var v241 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v241.write("</tbody></table>\n");
  }
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v242 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v242.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  }
  var v243 = outputWindow.document;
  var v687 = '<tr><td class="title">' + "Pattern:";
  var v661 = v687 + '</td><td class="title">';
  var v620 = v661 + "Times found:";
  var v560 = v620 + '</td><td class="title">';
  var v465 = v560 + "Percentage:";
  var v244 = v465 + "</td></tr>\n";
  introspect(JAM.policy.p17) {
    v243.write(v244);
  }
  var i$$10 = 0;
  var v466 = arrayOfItems$$1.length;
  var v253 = i$$10 < v466;
  for (;v253;) {
    var tempNumber = 0;
    var v467 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p16) {
      var v245 = v467.match(/\/[^\/]+\//)
    }
    var matchExp$$1 = v245 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    introspect(JAM.policy.p17) {
      var v468 = sequence$$16.search(matchExp$$1)
    }
    var v247 = v468 != -1;
    if (v247) {
      introspect(JAM.policy.p17) {
        var v246 = sequence$$16.match(matchExp$$1)
      }
      tempNumber = v246.length;
    }
    var percentage = 0;
    var v561 = originalLength + 1;
    var v662 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p16) {
      var v621 = v662.match(/\d+/)
    }
    var v562 = parseFloat(v621);
    var v469 = v561 - v562;
    var v250 = v469 > 0;
    if (v250) {
      var v248 = 100 * tempNumber;
      var v470 = originalLength + 1;
      var v622 = arrayOfItems$$1[i$$10];
      introspect(JAM.policy.p16) {
        var v563 = v622.match(/\d+/)
      }
      var v471 = parseFloat(v563);
      var v249 = v470 - v471;
      percentage = v248 / v249;
    }
    var v251 = outputWindow.document;
    var v753 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p16) {
      var v743 = v753.match(/\([^\(]+\)\b/)
    }
    var v730 = v743.toString();
    introspect(JAM.policy.p15) {
      var v709 = v730.replace(/\(|\)/g, "")
    }
    var v688 = "<tr><td>" + v709;
    var v663 = v688 + "</td><td>";
    var v623 = v663 + tempNumber;
    var v564 = v623 + "</td><td>";
    introspect(JAM.policy.p10) {
      var v565 = percentage.toFixed(2)
    }
    var v472 = v564 + v565;
    var v252 = v472 + "</td></tr>\n";
    introspect(JAM.policy.p17) {
      v251.write(v252);
    }
    i$$10++;
    var v473 = arrayOfItems$$1.length;
    v253 = i$$10 < v473;
  }
  var v254 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v254.write("</tbody></table>\n");
  }
  return true;
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v474 = sequence$$17.length;
  var v261 = v474 > 0;
  for (;v261;) {
    maxNum$$1 = sequence$$17.length;
    var v475 = Math.random();
    var v255 = v475 * maxNum$$1;
    introspect(JAM.policy.p16) {
      randNum$$1 = Math.floor(v255);
    }
    introspect(JAM.policy.p16) {
      tempChar$$2 = sequence$$17.charAt(randNum$$1);
    }
    tempSeq = tempSeq + tempChar$$2;
    introspect(JAM.policy.p13) {
      tempString1 = sequence$$17.substring(0, randNum$$1);
    }
    var v256 = randNum$$1 + 1;
    var v257 = sequence$$17.length;
    introspect(JAM.policy.p15) {
      tempString2 = sequence$$17.substring(v256, v257);
    }
    sequence$$17 = tempString1 + tempString2;
    var v476 = tempSeq.length;
    var v260 = v476 == 60;
    if (v260) {
      var v258 = outputWindow.document;
      var v259 = tempSeq + "\n";
      introspect(JAM.policy.p17) {
        v258.write(v259);
      }
      tempSeq = "";
    }
    var v477 = sequence$$17.length;
    v261 = v477 > 0;
  }
  var v262 = outputWindow.document;
  var v263 = tempSeq + "\n";
  introspect(JAM.policy.p17) {
    v262.write(v263);
  }
  return true;
}
function proteinIep() {
  var theDocument = document;
  var newProtein = "";
  var maxInput$$3 = 2E5;
  var v478 = testScript();
  var v264 = v478 == false;
  if (v264) {
    return;
  }
  var v710 = theDocument.forms;
  var v689 = v710[0];
  var v664 = v689.elements;
  var v624 = v664[0];
  var v566 = checkFormElement(v624);
  var v479 = v566 == false;
  var v568 = !v479;
  if (v568) {
    var v731 = theDocument.forms;
    var v711 = v731[0];
    var v690 = v711.elements;
    var v665 = v690[0];
    var v625 = v665.value;
    var v567 = checkSequenceLength(v625, maxInput$$3);
    v479 = v567 == false;
  }
  var v265 = v479;
  if (v265) {
    return;
  }
  openWindow();
  var v666 = theDocument.forms;
  var v626 = v666[0];
  var v569 = v626.elements;
  var v480 = v569[0];
  var v266 = v480.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v266);
  var i$$11 = 0;
  var v481 = arrayOfFasta$$1.length;
  var v275 = i$$11 < v481;
  for (;v275;) {
    var v267 = arrayOfFasta$$1[i$$11];
    newProtein = getSequenceFromFasta(v267);
    var v268 = arrayOfFasta$$1[i$$11];
    title = getTitleFromFasta(v268);
    newProtein = removeNonProteinStrict(newProtein);
    var v269 = outputWindow.document;
    var v270 = getInfoFromTitleAndSequence(newProtein);
    introspect(JAM.policy.p17) {
      v269.write(v270);
    }
    var v712 = theDocument.forms;
    var v691 = v712[0];
    var v667 = v691.elements;
    var v627 = v667[4];
    var v570 = v627.options;
    var v713 = theDocument.forms;
    var v692 = v713[0];
    var v668 = v692.elements;
    var v628 = v668[4];
    var v571 = v628.selectedIndex;
    var v482 = v570[v571];
    var v271 = v482.value;
    var v714 = theDocument.forms;
    var v693 = v714[0];
    var v669 = v693.elements;
    var v629 = v669[5];
    var v572 = v629.options;
    var v715 = theDocument.forms;
    var v694 = v715[0];
    var v670 = v694.elements;
    var v630 = v670[5];
    var v573 = v630.selectedIndex;
    var v483 = v572[v573];
    var v272 = v483.value;
    var v716 = theDocument.forms;
    var v695 = v716[0];
    var v671 = v695.elements;
    var v631 = v671[6];
    var v574 = v631.options;
    var v717 = theDocument.forms;
    var v696 = v717[0];
    var v672 = v696.elements;
    var v632 = v672[6];
    var v575 = v632.selectedIndex;
    var v484 = v574[v575];
    var v273 = v484.value;
    writeProtIep(newProtein, v271, v272, v273);
    var v274 = outputWindow.document;
    introspect(JAM.policy.p11) {
      v274.write("<br />\n<br />\n");
    }
    i$$11++;
    var v485 = arrayOfFasta$$1.length;
    v275 = i$$11 < v485;
  }
  closeWindow();
  return;
}
function writeProtIep(proteinSequence$$1, copies, fusion, pKSet) {
  var pH = 7;
  var step = 3.5;
  var charge = 0;
  var last_charge = 0;
  copies = parseInt(copies);
  var j$$10 = 0;
  var v276 = j$$10 < copies;
  for (;v276;) {
    proteinSequence$$1 = proteinSequence$$1 + fusion;
    j$$10++;
    v276 = j$$10 < copies;
  }
  var N_term_pK;
  var K_pK;
  var R_pK;
  var H_pK;
  var D_pK;
  var E_pK;
  var C_pK;
  var Y_pK;
  var C_term_pK;
  var v486 = pKSet.toLowerCase();
  var v277 = v486 == "dtaselect";
  if (v277) {
    N_term_pK = 8;
    K_pK = 10;
    R_pK = 12;
    H_pK = 6.5;
    D_pK = 4.4;
    E_pK = 4.4;
    C_pK = 8.5;
    Y_pK = 10;
    C_term_pK = 3.1;
  } else {
    N_term_pK = 8.6;
    K_pK = 10.8;
    R_pK = 12.5;
    H_pK = 6.5;
    D_pK = 3.9;
    E_pK = 4.1;
    C_pK = 8.5;
    Y_pK = 10.1;
    C_term_pK = 3.6;
  }
  var K_count = 0;
  introspect(JAM.policy.p16) {
    var v487 = proteinSequence$$1.search(/k/i)
  }
  var v279 = v487 != -1;
  if (v279) {
    introspect(JAM.policy.p16) {
      var v278 = proteinSequence$$1.match(/k/gi)
    }
    K_count = v278.length;
  }
  var R_count = 0;
  introspect(JAM.policy.p16) {
    var v488 = proteinSequence$$1.search(/r/i)
  }
  var v281 = v488 != -1;
  if (v281) {
    introspect(JAM.policy.p16) {
      var v280 = proteinSequence$$1.match(/r/gi)
    }
    R_count = v280.length;
  }
  var H_count = 0;
  introspect(JAM.policy.p16) {
    var v489 = proteinSequence$$1.search(/h/i)
  }
  var v283 = v489 != -1;
  if (v283) {
    introspect(JAM.policy.p16) {
      var v282 = proteinSequence$$1.match(/h/gi)
    }
    H_count = v282.length;
  }
  var D_count = 0;
  introspect(JAM.policy.p16) {
    var v490 = proteinSequence$$1.search(/d/i)
  }
  var v285 = v490 != -1;
  if (v285) {
    introspect(JAM.policy.p16) {
      var v284 = proteinSequence$$1.match(/d/gi)
    }
    D_count = v284.length;
  }
  var E_count = 0;
  introspect(JAM.policy.p16) {
    var v491 = proteinSequence$$1.search(/e/i)
  }
  var v287 = v491 != -1;
  if (v287) {
    introspect(JAM.policy.p16) {
      var v286 = proteinSequence$$1.match(/e/gi)
    }
    E_count = v286.length;
  }
  var C_count = 0;
  introspect(JAM.policy.p16) {
    var v492 = proteinSequence$$1.search(/c/i)
  }
  var v289 = v492 != -1;
  if (v289) {
    introspect(JAM.policy.p16) {
      var v288 = proteinSequence$$1.match(/c/gi)
    }
    C_count = v288.length;
  }
  var Y_count = 0;
  introspect(JAM.policy.p16) {
    var v493 = proteinSequence$$1.search(/y/i)
  }
  var v291 = v493 != -1;
  if (v291) {
    introspect(JAM.policy.p16) {
      var v290 = proteinSequence$$1.match(/y/gi)
    }
    Y_count = v290.length;
  }
  for (;1;) {
    var v732 = partial_charge(N_term_pK, pH);
    var v744 = partial_charge(K_pK, pH);
    var v733 = K_count * v744;
    var v718 = v732 + v733;
    var v734 = partial_charge(R_pK, pH);
    var v719 = R_count * v734;
    var v697 = v718 + v719;
    var v720 = partial_charge(H_pK, pH);
    var v698 = H_count * v720;
    var v673 = v697 + v698;
    var v699 = partial_charge(pH, D_pK);
    var v674 = D_count * v699;
    var v633 = v673 - v674;
    var v675 = partial_charge(pH, E_pK);
    var v634 = E_count * v675;
    var v576 = v633 - v634;
    var v635 = partial_charge(pH, C_pK);
    var v577 = C_count * v635;
    var v494 = v576 - v577;
    var v578 = partial_charge(pH, Y_pK);
    var v495 = Y_count * v578;
    var v292 = v494 - v495;
    var v293 = partial_charge(pH, C_term_pK);
    charge = v292 - v293;
    introspect(JAM.policy.p10) {
      var v496 = charge.toFixed(2)
    }
    var v579 = last_charge * 100;
    introspect(JAM.policy.p10) {
      var v497 = v579.toFixed(2)
    }
    var v294 = v496 == v497;
    if (v294) {
      break;
    }
    var v295 = charge > 0;
    if (v295) {
      pH = pH + step;
    } else {
      pH = pH - step;
    }
    step = step / 2;
    last_charge = charge;
  }
  introspect(JAM.policy.p10) {
    pH = pH.toFixed(2);
  }
  var v296 = outputWindow.document;
  var v297 = "pH " + pH;
  introspect(JAM.policy.p17) {
    v296.write(v297);
  }
  return;
}
function partial_charge(first$$1, second) {
  var v298 = first$$1 - second;
  introspect(JAM.policy.p13) {
    var charge$$1 = Math.pow(10, v298)
  }
  var v299 = charge$$1 + 1;
  return charge$$1 / v299;
}
document.onload = v2;
introspect(JAM.policy.p11) {
  var v300 = document.getElementById("submitbtn")
}
v300.onclick = v3;
introspect(JAM.policy.p11) {
  var v301 = document.getElementById("clearbtn")
}
v301.onclick = v4

JAM.stopProfile('load');
