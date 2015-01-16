function v5() {
  var v597 = document.forms;
  var v509 = v597[0];
  var v302 = v509.elements;
  var v6 = v302[0];
  v6.value = " ";
  var v598 = document.forms;
  var v510 = v598[0];
  var v303 = v510.elements;
  var v7 = v303[4];
  v7.value = " ";
  return;
}
function v4() {
  try {
    codonPlot(document);
  } catch (e$$7) {
    var v8 = "The following error was encountered: " + e$$7;
    alert(v8);
  }
  return;
}
function v3() {
  var v304 = document.main_form;
  var v9 = v304.main_submit;
  v9.focus();
  return;
}
function addReturns(sequence) {
  function v0(str$$6, p1, offset$$8, s$$2) {
    return p1 + "\n";
  }
  introspect(JAM.policy.p16) {
    sequence = sequence.replace(/(.{60})/g, v0);
  }
  return sequence;
}
function checkAlign(arrayOfTitles, arrayOfSequences) {
  var v10 = arrayOfSequences[0];
  var lengthOfAlign = v10.length;
  var v305 = arrayOfSequences.length;
  var v11 = v305 < 2;
  if (v11) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v306 = arrayOfTitles.length;
  var v13 = i$$1 < v306;
  for (;v13;) {
    var v653 = arrayOfTitles[i$$1];
    introspect(JAM.policy.p17) {
      var v599 = v653.search(/\S/)
    }
    var v511 = v599 == -1;
    var v601 = !v511;
    if (v601) {
      var v654 = arrayOfSequences[i$$1];
      introspect(JAM.policy.p17) {
        var v600 = v654.search(/\S/)
      }
      v511 = v600 == -1;
    }
    var v307 = v511;
    var v513 = !v307;
    if (v513) {
      var v602 = arrayOfSequences[i$$1];
      var v512 = v602.length;
      v307 = v512 != lengthOfAlign;
    }
    var v12 = v307;
    if (v12) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v308 = arrayOfTitles.length;
    v13 = i$$1 < v308;
  }
  return true;
}
function checkCodonTable(codonTable) {
  introspect(JAM.policy.p17) {
    var v690 = codonTable.search(/AmAcid/)
  }
  var v655 = v690 == -1;
  var v692 = !v655;
  if (v692) {
    introspect(JAM.policy.p17) {
      var v691 = codonTable.search(/Codon/)
    }
    v655 = v691 == -1;
  }
  var v603 = v655;
  var v657 = !v603;
  if (v657) {
    introspect(JAM.policy.p17) {
      var v656 = codonTable.search(/Number/)
    }
    v603 = v656 == -1;
  }
  var v514 = v603;
  var v605 = !v514;
  if (v605) {
    introspect(JAM.policy.p17) {
      var v604 = codonTable.search(/\/1000/)
    }
    v514 = v604 == -1;
  }
  var v309 = v514;
  var v516 = !v309;
  if (v516) {
    introspect(JAM.policy.p17) {
      var v515 = codonTable.search(/Fraction\s*\.\./)
    }
    v309 = v515 == -1;
  }
  var v14 = v309;
  if (v14) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v517 = formElement.value;
  introspect(JAM.policy.p17) {
    var v310 = v517.search(/\S/)
  }
  var v15 = v310 == -1;
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
  var v311 = arrayOfPatterns.length;
  var v18 = z$$2 < v311;
  for (;v18;) {
    var v518 = arrayOfPatterns[z$$2];
    introspect(JAM.policy.p17) {
      var v312 = v518.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/)
    }
    var v16 = v312 == -1;
    if (v16) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v519 = arrayOfPatterns[z$$2];
    var v313 = moreExpressionCheck(v519);
    var v17 = v313 == false;
    if (v17) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v314 = arrayOfPatterns.length;
    v18 = z$$2 < v314;
  }
  var v19 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v19);
  var v20 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v20);
  var j = 0;
  var v315 = arrayOfPatterns.length;
  var v24 = j < v315;
  for (;v24;) {
    var v520 = arrayOfPatterns[j];
    introspect(JAM.policy.p17) {
      var v316 = v520.match(/\/.+\//)
    }
    var v21 = v316 + "gi";
    var v799 = eval(v21);
    geneticCodeMatchExp[j] = v799;
    var v317 = arrayOfPatterns[j];
    introspect(JAM.policy.p17) {
      var v22 = v317.match(/=[a-zA-Z\*]/)
    }
    var v800 = v22.toString();
    geneticCodeMatchResult[j] = v800;
    var v23 = geneticCodeMatchResult[j];
    introspect(JAM.policy.p16) {
      var v801 = v23.replace(/=/g, "")
    }
    geneticCodeMatchResult[j] = v801;
    j++;
    var v318 = arrayOfPatterns.length;
    v24 = j < v318;
  }
  var i$$2 = 0;
  var v521 = testSequence.length;
  var v319 = v521 - 3;
  var v31 = i$$2 <= v319;
  for (;v31;) {
    var v25 = i$$2 + 3;
    introspect(JAM.policy.p16) {
      codon = testSequence.substring(i$$2, v25);
    }
    j = 0;
    var v320 = geneticCodeMatchExp.length;
    var v29 = j < v320;
    for (;v29;) {
      var v522 = geneticCodeMatchExp[j];
      introspect(JAM.policy.p15) {
        var v321 = codon.search(v522)
      }
      var v28 = v321 != -1;
      if (v28) {
        var v27 = oneMatch == true;
        if (v27) {
          var v322 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v26 = v322 + ".";
          alert(v26);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v323 = geneticCodeMatchExp.length;
      v29 = j < v323;
    }
    var v30 = oneMatch == false;
    if (v30) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v523 = testSequence.length;
    var v324 = v523 - 3;
    v31 = i$$2 <= v324;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v325 = arrayOfPatterns$$1.length;
  var v33 = z$$3 < v325;
  for (;v33;) {
    var v524 = arrayOfPatterns$$1[z$$3];
    introspect(JAM.policy.p17) {
      var v326 = v524.search(/[^acdefghiklmnpqrstvwyz]/i)
    }
    var v32 = v326 != -1;
    if (v32) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v327 = arrayOfPatterns$$1.length;
    v33 = z$$3 < v327;
  }
  var i$$3 = 0;
  var v328 = arrayOfPatterns$$1.length;
  var v37 = i$$3 < v328;
  for (;v37;) {
    var v525 = arrayOfPatterns$$1[i$$3];
    var v329 = "[" + v525;
    var v34 = v329 + "]";
    var re = new RegExp(v34, "gi");
    var j$$1 = i$$3 + 1;
    var v330 = arrayOfPatterns$$1.length;
    var v36 = j$$1 < v330;
    for (;v36;) {
      var v526 = arrayOfPatterns$$1[j$$1];
      introspect(JAM.policy.p15) {
        var v331 = v526.search(re)
      }
      var v35 = v331 != -1;
      if (v35) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v332 = arrayOfPatterns$$1.length;
      v36 = j$$1 < v332;
    }
    i$$3++;
    var v333 = arrayOfPatterns$$1.length;
    v37 = i$$3 < v333;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v334 = arrayOfPatterns$$2.length;
  var v40 = z$$4 < v334;
  for (;v40;) {
    var v527 = arrayOfPatterns$$2[z$$4];
    introspect(JAM.policy.p17) {
      var v335 = v527.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i)
    }
    var v38 = v335 == -1;
    if (v38) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v528 = arrayOfPatterns$$2[z$$4];
    var v336 = moreExpressionCheck(v528);
    var v39 = v336 == false;
    if (v39) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v337 = arrayOfPatterns$$2.length;
    v40 = z$$4 < v337;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v606 = getSequenceFromFasta(text$$7);
  introspect(JAM.policy.p16) {
    var v529 = v606.replace(/[^A-Za-z]/g, "")
  }
  var v338 = v529.length;
  var v42 = v338 > maxInput;
  if (v42) {
    var v339 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v41 = v339 + " characters.";
    alert(v41);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v340 = text$$8.length;
  var v44 = v340 > maxInput$$1;
  if (v44) {
    var v341 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v43 = v341 + " characters.";
    alert(v43);
    return false;
  } else {
    return true;
  }
  return;
}
function complement(dnaSequence) {
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/g/g, "1");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/c/g, "2");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/1/g, "c");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/2/g, "g");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/G/g, "1");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/C/g, "2");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/1/g, "C");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/2/g, "G");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/a/g, "1");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/t/g, "2");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/1/g, "t");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/2/g, "a");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/A/g, "1");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/T/g, "2");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/1/g, "T");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/2/g, "A");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/u/g, "a");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/U/g, "A");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/r/g, "1");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/y/g, "2");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/1/g, "y");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/2/g, "r");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/R/g, "1");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/Y/g, "2");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/1/g, "Y");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/2/g, "R");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/k/g, "1");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/m/g, "2");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/1/g, "m");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/2/g, "k");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/K/g, "1");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/M/g, "2");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/1/g, "M");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/2/g, "K");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/b/g, "1");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/v/g, "2");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/1/g, "v");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/2/g, "b");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/B/g, "1");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/V/g, "2");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/1/g, "V");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/2/g, "B");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/d/g, "1");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/h/g, "2");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/1/g, "h");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/2/g, "d");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/D/g, "1");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/H/g, "2");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/1/g, "H");
  }
  introspect(JAM.policy.p16) {
    dnaSequence = dnaSequence.replace(/2/g, "D");
  }
  return dnaSequence;
}
function closeForm() {
  var v45 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v45.write("</form>");
  }
  return true;
}
function closePre() {
  var v46 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v46.write("</div>");
  }
  var v47 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v47.write("</pre>\n");
  }
  return;
}
function closeTextArea() {
  var v48 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v48.write("</textarea>");
  }
  return true;
}
function closeWindow() {
  var v49 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v49.write("</body>\n</html>\n");
  }
  outputWindow.status = "Done.";
  var v50 = outputWindow.document;
  v50.close();
  return true;
}
function convertDegenerates(sequence$$1) {
  sequence$$1 = sequence$$1.toLowerCase();
  introspect(JAM.policy.p16) {
    sequence$$1 = sequence$$1.replace(/t/g, "[TU]");
  }
  introspect(JAM.policy.p16) {
    sequence$$1 = sequence$$1.replace(/r/g, "[AGR]");
  }
  introspect(JAM.policy.p16) {
    sequence$$1 = sequence$$1.replace(/y/g, "[CTUY]");
  }
  introspect(JAM.policy.p16) {
    sequence$$1 = sequence$$1.replace(/s/g, "[GCS]");
  }
  introspect(JAM.policy.p16) {
    sequence$$1 = sequence$$1.replace(/w/g, "[ATUW]");
  }
  introspect(JAM.policy.p16) {
    sequence$$1 = sequence$$1.replace(/k/g, "[GTUK]");
  }
  introspect(JAM.policy.p16) {
    sequence$$1 = sequence$$1.replace(/m/g, "[ACM]");
  }
  introspect(JAM.policy.p16) {
    sequence$$1 = sequence$$1.replace(/b/g, "[CGTUBSKY]");
  }
  introspect(JAM.policy.p16) {
    sequence$$1 = sequence$$1.replace(/d/g, "[AGTUDRKW]");
  }
  introspect(JAM.policy.p16) {
    sequence$$1 = sequence$$1.replace(/h/g, "[ACTUHMYW]");
  }
  introspect(JAM.policy.p16) {
    sequence$$1 = sequence$$1.replace(/v/g, "[ACGVSMR]");
  }
  introspect(JAM.policy.p16) {
    sequence$$1 = sequence$$1.replace(/n/g, "[ACGTURYSWKMBDHVN]");
  }
  return sequence$$1;
}
function earlyCheckAlign(alignArray) {
  var v342 = alignArray.length;
  var v51 = v342 < 3;
  if (v51) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v343 = alignArray.length;
  var v53 = i$$4 < v343;
  for (;v53;) {
    var v530 = alignArray[i$$4];
    introspect(JAM.policy.p17) {
      var v344 = v530.search(/[^\s]+\s/)
    }
    var v52 = v344 == -1;
    if (v52) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v345 = alignArray.length;
    v53 = i$$4 < v345;
  }
  return true;
}
function filterAlignSeq(alignSeq) {
  introspect(JAM.policy.p16) {
    alignSeq = alignSeq.replace(/[^abcdefghiklmnpqrstvwxyz\.\-]/gi, "");
  }
  return alignSeq;
}
function filterFastaTitle(sequenceTitle) {
  introspect(JAM.policy.p16) {
    sequenceTitle = sequenceTitle.replace(/\s{2,}/g, " ");
  }
  introspect(JAM.policy.p16) {
    sequenceTitle = sequenceTitle.replace(/^\s*/g, "");
  }
  introspect(JAM.policy.p16) {
    sequenceTitle = sequenceTitle.replace(/[\f\n\r\t]+$/g, "\n");
  }
  introspect(JAM.policy.p16) {
    return sequenceTitle.replace(/[\<\>]\n/gi, "");
  }
}
function getArrayOfFasta(sequenceData) {
  var arrayOfFasta = new Array;
  var matchArray;
  var re$$1 = /\>[^\>]+/g;
  introspect(JAM.policy.p17) {
    var v346 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v56 = v346 != -1;
  if (v56) {
    introspect(JAM.policy.p15) {
      var v55 = matchArray = re$$1.exec(sequenceData)
    }
    for (;v55;) {
      var v54 = matchArray[0];
      introspect(JAM.policy.p15) {
        arrayOfFasta.push(v54);
      }
      introspect(JAM.policy.p15) {
        v55 = matchArray = re$$1.exec(sequenceData);
      }
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v347 = sequence$$2.length;
  var v57 = "&gt;results for " + v347;
  var stringToReturn = v57 + " residue sequence ";
  introspect(JAM.policy.p17) {
    var v348 = fastaSequenceTitle.search(/[^\s]/)
  }
  var v59 = v348 != -1;
  if (v59) {
    var v349 = stringToReturn + '"';
    var v58 = v349 + fastaSequenceTitle;
    stringToReturn = v58 + '"';
  }
  var v350 = stringToReturn + ' starting "';
  introspect(JAM.policy.p13) {
    var v351 = sequence$$2.substring(0, 10)
  }
  var v60 = v350 + v351;
  stringToReturn = v60 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v352 = sequenceOne.length;
  var v61 = "Search results for " + v352;
  var stringToReturn$$1 = v61 + " residue sequence ";
  introspect(JAM.policy.p17) {
    var v353 = fastaSequenceTitleOne.search(/[^\s]/)
  }
  var v63 = v353 != -1;
  if (v63) {
    var v354 = stringToReturn$$1 + '"';
    var v62 = v354 + fastaSequenceTitleOne;
    stringToReturn$$1 = v62 + '"';
  }
  var v355 = stringToReturn$$1 + ' starting "';
  introspect(JAM.policy.p13) {
    var v356 = sequenceOne.substring(0, 10)
  }
  var v64 = v355 + v356;
  stringToReturn$$1 = v64 + '"\n';
  var v357 = stringToReturn$$1 + "and ";
  var v358 = sequenceTwo.length;
  var v65 = v357 + v358;
  stringToReturn$$1 = v65 + " residue sequence ";
  introspect(JAM.policy.p17) {
    var v359 = fastaSequenceTitleTwo.search(/[^\s]/)
  }
  var v67 = v359 != -1;
  if (v67) {
    var v360 = stringToReturn$$1 + '"';
    var v66 = v360 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v66 + '"';
  }
  var v361 = stringToReturn$$1 + ' starting "';
  introspect(JAM.policy.p13) {
    var v362 = sequenceTwo.substring(0, 10)
  }
  var v68 = v361 + v362;
  stringToReturn$$1 = v68 + '"';
  var v69 = '<div class="info">' + stringToReturn$$1;
  return v69 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v70 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v70);
  var j$$2 = 0;
  var v363 = arrayOfPatterns$$3.length;
  var v72 = j$$2 < v363;
  for (;v72;) {
    var v531 = arrayOfPatterns$$3[j$$2];
    introspect(JAM.policy.p17) {
      var v364 = v531.match(/\/.+\//)
    }
    var v71 = v364 + "gi";
    var v802 = eval(v71);
    geneticCodeMatchExp$$1[j$$2] = v802;
    j$$2++;
    var v365 = arrayOfPatterns$$3.length;
    v72 = j$$2 < v365;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v73 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v73);
  var j$$3 = 0;
  var v366 = arrayOfPatterns$$4.length;
  var v76 = j$$3 < v366;
  for (;v76;) {
    var v367 = arrayOfPatterns$$4[j$$3];
    introspect(JAM.policy.p17) {
      var v74 = v367.match(/=[a-zA-Z\*]/)
    }
    var v803 = v74.toString();
    geneticCodeMatchResult$$1[j$$3] = v803;
    var v75 = geneticCodeMatchResult$$1[j$$3];
    introspect(JAM.policy.p16) {
      var v804 = v75.replace(/=/g, "")
    }
    geneticCodeMatchResult$$1[j$$3] = v804;
    j$$3++;
    var v368 = arrayOfPatterns$$4.length;
    v76 = j$$3 < v368;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v369 = sequence$$3.length;
  var v77 = "Results for " + v369;
  var stringToReturn$$2 = v77 + " residue sequence ";
  introspect(JAM.policy.p17) {
    var v370 = fastaSequenceTitle$$1.search(/[^\s]/)
  }
  var v79 = v370 != -1;
  if (v79) {
    var v371 = stringToReturn$$2 + '"';
    var v78 = v371 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v78 + '"';
  }
  var v372 = stringToReturn$$2 + ' starting "';
  introspect(JAM.policy.p13) {
    var v373 = sequence$$3.substring(0, 10)
  }
  var v80 = v372 + v373;
  stringToReturn$$2 = v80 + '"';
  var v81 = '<div class="info">' + stringToReturn$$2;
  return v81 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v532 = "Results for " + topology;
  var v374 = v532 + " ";
  var v375 = sequence$$4.length;
  var v82 = v374 + v375;
  var stringToReturn$$3 = v82 + " residue sequence ";
  introspect(JAM.policy.p17) {
    var v376 = fastaSequenceTitle$$2.search(/[^\s]/)
  }
  var v84 = v376 != -1;
  if (v84) {
    var v377 = stringToReturn$$3 + '"';
    var v83 = v377 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v83 + '"';
  }
  var v378 = stringToReturn$$3 + ' starting "';
  introspect(JAM.policy.p13) {
    var v379 = sequence$$4.substring(0, 10)
  }
  var v85 = v378 + v379;
  stringToReturn$$3 = v85 + '"';
  var v86 = '<div class="info">' + stringToReturn$$3;
  return v86 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v380 = sequenceOne$$1.length;
  var v87 = "Alignment results for " + v380;
  var stringToReturn$$4 = v87 + " residue sequence ";
  introspect(JAM.policy.p17) {
    var v381 = fastaSequenceTitleOne$$1.search(/[^\s]/)
  }
  var v89 = v381 != -1;
  if (v89) {
    var v382 = stringToReturn$$4 + '"';
    var v88 = v382 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v88 + '"';
  }
  var v383 = stringToReturn$$4 + ' starting "';
  introspect(JAM.policy.p13) {
    var v384 = sequenceOne$$1.substring(0, 10)
  }
  var v90 = v383 + v384;
  stringToReturn$$4 = v90 + '"\n';
  var v385 = stringToReturn$$4 + "and ";
  var v386 = sequenceTwo$$1.length;
  var v91 = v385 + v386;
  stringToReturn$$4 = v91 + " residue sequence ";
  introspect(JAM.policy.p17) {
    var v387 = fastaSequenceTitleTwo$$1.search(/[^\s]/)
  }
  var v93 = v387 != -1;
  if (v93) {
    var v388 = stringToReturn$$4 + '"';
    var v92 = v388 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v92 + '"';
  }
  var v389 = stringToReturn$$4 + ' starting "';
  introspect(JAM.policy.p13) {
    var v390 = sequenceTwo$$1.substring(0, 10)
  }
  var v94 = v389 + v390;
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
    var v391 = Math.random();
    var v392 = components.length;
    var v96 = v391 * v392;
    introspect(JAM.policy.p17) {
      tempNum = Math.floor(v96);
    }
    tempChar = components[tempNum];
    introspect(JAM.policy.p15) {
      sequenceArray.push(tempChar);
    }
    j$$4++;
    v97 = j$$4 < lengthOut;
  }
  introspect(JAM.policy.p11) {
    return sequenceArray.join("");
  }
}
function getSequenceFromFasta(sequenceRecord) {
  introspect(JAM.policy.p17) {
    var v393 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v98 = v393 != -1;
  if (v98) {
    introspect(JAM.policy.p16) {
      sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "");
    }
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  introspect(JAM.policy.p17) {
    var v394 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v100 = v394 != -1;
  if (v100) {
    introspect(JAM.policy.p16) {
      var v99 = sequenceRecord$$1.match(/\>[^\f\n\r]+[\f\n\r]/, "")
    }
    fastaTitle = v99.toString();
    introspect(JAM.policy.p16) {
      fastaTitle = fastaTitle.replace(/\>|[\f\n\r]/g, "");
    }
    introspect(JAM.policy.p16) {
      fastaTitle = fastaTitle.replace(/\s{2,}/g, " ");
    }
    introspect(JAM.policy.p16) {
      fastaTitle = fastaTitle.replace(/[\<\>]/gi, "");
    }
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  introspect(JAM.policy.p17) {
    var v775 = expressionToCheck.search(/\[[A-Za-z\|]*\[/)
  }
  var v767 = v775 != -1;
  var v777 = !v767;
  if (v777) {
    introspect(JAM.policy.p17) {
      var v776 = expressionToCheck.search(/\][A-Za-z\|]*\]/)
    }
    v767 = v776 != -1;
  }
  var v755 = v767;
  var v769 = !v755;
  if (v769) {
    introspect(JAM.policy.p17) {
      var v768 = expressionToCheck.search(/\[\]/)
    }
    v755 = v768 != -1;
  }
  var v743 = v755;
  var v757 = !v743;
  if (v757) {
    introspect(JAM.policy.p17) {
      var v756 = expressionToCheck.search(/\/[A-Za-z\|]*\]/)
    }
    v743 = v756 != -1;
  }
  var v726 = v743;
  var v745 = !v726;
  if (v745) {
    introspect(JAM.policy.p17) {
      var v744 = expressionToCheck.search(/\[[A-Za-z\|]*\//)
    }
    v726 = v744 != -1;
  }
  var v710 = v726;
  var v728 = !v710;
  if (v728) {
    introspect(JAM.policy.p17) {
      var v727 = expressionToCheck.search(/\|\|/)
    }
    v710 = v727 != -1;
  }
  var v693 = v710;
  var v712 = !v693;
  if (v712) {
    introspect(JAM.policy.p17) {
      var v711 = expressionToCheck.search(/\/\|/)
    }
    v693 = v711 != -1;
  }
  var v658 = v693;
  var v695 = !v658;
  if (v695) {
    introspect(JAM.policy.p17) {
      var v694 = expressionToCheck.search(/\|\//)
    }
    v658 = v694 != -1;
  }
  var v607 = v658;
  var v660 = !v607;
  if (v660) {
    introspect(JAM.policy.p17) {
      var v659 = expressionToCheck.search(/\[.\]/)
    }
    v607 = v659 != -1;
  }
  var v533 = v607;
  var v609 = !v533;
  if (v609) {
    introspect(JAM.policy.p17) {
      var v608 = expressionToCheck.search(/\</)
    }
    v533 = v608 != -1;
  }
  var v395 = v533;
  var v535 = !v395;
  if (v535) {
    introspect(JAM.policy.p17) {
      var v534 = expressionToCheck.search(/\>/)
    }
    v395 = v534 != -1;
  }
  var v101 = v395;
  if (v101) {
    return false;
  }
  return true;
}
function openForm() {
  var v102 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v102.write('<form action="">\n');
  }
  return true;
}
function openPre() {
  var v103 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v103.write("<pre>");
  }
  var v104 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v104.write('<div class="pre">');
  }
  return;
}
function openTextArea() {
  var v105 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v105.write('<br /><textarea rows="6" cols="61">\n');
  }
  return true;
}
function openWindow(title$$5) {
  _openWindow(title$$5, true);
  return;
}
function _openWindow(title$$6, isColor) {
  introspect(JAM.policy.p14) {
    outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  }
  outputWindow.focus();
  var v106 = outputWindow.document;
  var v610 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v536 = v610 + "<head>\n";
  var v396 = v536 + "<title>Sequence Manipulation Suite</title>\n";
  var v107 = v396 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  introspect(JAM.policy.p15) {
    v106.write(v107);
  }
  if (isColor) {
    var v108 = outputWindow.document;
    var v792 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v788 = v792 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v783 = v788 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v778 = v783 + "div.info {font-weight: bold}\n";
    var v770 = v778 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v758 = v770 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v746 = v758 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v729 = v746 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v713 = v729 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v696 = v713 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v661 = v696 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v611 = v661 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v537 = v611 + "td.many {color: #000000}\n";
    var v397 = v537 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v109 = v397 + "</style>\n";
    introspect(JAM.policy.p15) {
      v108.write(v109);
    }
  } else {
    var v110 = outputWindow.document;
    var v796 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v793 = v796 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v789 = v793 + "div.title {display: none}\n";
    var v784 = v789 + "div.info {font-weight: bold}\n";
    var v779 = v784 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v771 = v779 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v759 = v771 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v747 = v759 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v730 = v747 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v714 = v730 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v697 = v714 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v662 = v697 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v612 = v662 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v538 = v612 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v398 = v538 + "img {display: none}\n";
    var v111 = v398 + "</style>\n";
    introspect(JAM.policy.p15) {
      v110.write(v111);
    }
  }
  var v112 = outputWindow.document;
  var v613 = "</head>\n" + '<body class="main">\n';
  var v539 = v613 + '<div class="title">';
  var v399 = v539 + title$$6;
  var v113 = v399 + " results</div>\n";
  introspect(JAM.policy.p15) {
    v112.write(v113);
  }
  outputWindow.status = "Please Wait.";
  return true;
}
function openWindowAlign(title$$7) {
  _openWindowAlign(title$$7, true);
  return;
}
function _openWindowAlign(title$$8, isBackground) {
  introspect(JAM.policy.p14) {
    outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  }
  outputWindow.focus();
  var v114 = outputWindow.document;
  var v614 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v540 = v614 + "<head>\n";
  var v400 = v540 + "<title>Sequence Manipulation Suite</title>\n";
  var v115 = v400 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  introspect(JAM.policy.p15) {
    v114.write(v115);
  }
  if (isBackground) {
    var v116 = outputWindow.document;
    var v794 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v790 = v794 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v785 = v790 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v780 = v785 + "div.info {font-weight: bold}\n";
    var v772 = v780 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v760 = v772 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v748 = v760 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v731 = v748 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v715 = v731 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v698 = v715 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v663 = v698 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v615 = v663 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v541 = v615 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v401 = v541 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v117 = v401 + "</style>\n";
    introspect(JAM.policy.p15) {
      v116.write(v117);
    }
  } else {
    var v118 = outputWindow.document;
    var v798 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v797 = v798 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v795 = v797 + "div.title {display: none}\n";
    var v791 = v795 + "div.info {font-weight: bold}\n";
    var v786 = v791 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v781 = v786 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v773 = v781 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v761 = v773 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v749 = v761 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v732 = v749 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v716 = v732 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v699 = v716 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v664 = v699 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v616 = v664 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v542 = v616 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v402 = v542 + "img {display: none}\n";
    var v119 = v402 + "</style>\n";
    introspect(JAM.policy.p15) {
      v118.write(v119);
    }
  }
  var v120 = outputWindow.document;
  var v617 = "</head>\n" + '<body class="main">\n';
  var v543 = v617 + '<div class="title">';
  var v403 = v543 + title$$8;
  var v121 = v403 + " results</div>\n";
  introspect(JAM.policy.p15) {
    v120.write(v121);
  }
  outputWindow.status = "Please Wait.";
  return true;
}
function removeFormatting(sequence$$5) {
  introspect(JAM.policy.p16) {
    return sequence$$5.replace(/[\d\s]/g, "");
  }
}
function removeNonDna(sequence$$6) {
  introspect(JAM.policy.p16) {
    return sequence$$6.replace(/[^gatucryswkmbdhvnxGATUCRYSWKMBDHVNX]/g, "");
  }
}
function removeNonDnaStrict(sequence$$7) {
  introspect(JAM.policy.p16) {
    return sequence$$7.replace(/[^gatucGATUC]/g, "");
  }
}
function removeNonProtein(sequence$$8) {
  introspect(JAM.policy.p16) {
    return sequence$$8.replace(/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, "");
  }
}
function removeNonProteinStrict(sequence$$9) {
  introspect(JAM.policy.p16) {
    return sequence$$9.replace(/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, "");
  }
}
function removeNonProteinAllowDegen(sequence$$10) {
  introspect(JAM.policy.p16) {
    return sequence$$10.replace(/[^ABCDEFGHIKLMNPQRSTVWYXZabcdefghiklmnpqrstvwyxz\*]/g, "");
  }
}
function removeNonProteinAllowX(sequence$$11) {
  introspect(JAM.policy.p16) {
    return sequence$$11.replace(/[^ACDEFGHIKLMNPQRSTVWYZXacdefghiklmnpqrstvwyzx\*]/g, "");
  }
}
function removeWhiteSpace(text$$9) {
  introspect(JAM.policy.p16) {
    return text$$9.replace(/\s/g, "");
  }
}
function removeNonLetters(sequence$$12) {
  introspect(JAM.policy.p16) {
    return sequence$$12.replace(/[^A-Z]/gi, "");
  }
}
function reverse(dnaSequence$$1) {
  var tempDnaArray = new Array;
  introspect(JAM.policy.p17) {
    var v404 = dnaSequence$$1.search(/./)
  }
  var v122 = v404 != -1;
  if (v122) {
    introspect(JAM.policy.p17) {
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
  introspect(JAM.policy.p15) {
    testArray.push(testString);
  }
  var v405 = testArray[0];
  var v126 = v405 != testString;
  if (v126) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  introspect(JAM.policy.p15) {
    var v406 = testString.search(re$$2)
  }
  var v127 = v406 == -1;
  if (v127) {
    alert("Regular expression 'm' flag not supported. See browser compatibility page.");
    return false;
  }
  var caughtException = false;
  try {
    re$$2 = eval("Exception handling not supported. Check browser compatibility page.");
  } catch (e$$4) {
    caughtException = true;
  }
  var v128 = !caughtException;
  if (v128) {
    alert("Exception handling not supported. See browser compatibility page.");
  }
  testString = "123";
  introspect(JAM.policy.p16) {
    testString = testString.replace(/(\d)/g, v1);
  }
  var v129 = testString != "1X2X3X";
  if (v129) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false;
  }
  var testNum = 2489.8237;
  introspect(JAM.policy.p9) {
    var v407 = testNum.toFixed(3)
  }
  var v130 = v407 != 2489.824;
  if (v130) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  introspect(JAM.policy.p9) {
    var v408 = testNum.toPrecision(5)
  }
  var v131 = v408 != 2489.8;
  if (v131) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  introspect(JAM.policy.p17) {
    var v409 = theNumber$$1.search(/\d/)
  }
  var v132 = v409 == -1;
  if (v132) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  introspect(JAM.policy.p17) {
    var v665 = emblFile.search(/ID/)
  }
  var v618 = v665 == -1;
  var v667 = !v618;
  if (v667) {
    introspect(JAM.policy.p17) {
      var v666 = emblFile.search(/AC/)
    }
    v618 = v666 == -1;
  }
  var v544 = v618;
  var v620 = !v544;
  if (v620) {
    introspect(JAM.policy.p17) {
      var v619 = emblFile.search(/DE/)
    }
    v544 = v619 == -1;
  }
  var v410 = v544;
  var v546 = !v410;
  if (v546) {
    introspect(JAM.policy.p17) {
      var v545 = emblFile.search(/SQ/)
    }
    v410 = v545 == -1;
  }
  var v133 = v410;
  if (v133) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  introspect(JAM.policy.p17) {
    var v411 = theNumber$$2.search(/\d/)
  }
  var v134 = v411 == -1;
  if (v134) {
    alert("Please enter a number.");
    return false;
  }
  var v136 = theNumber$$2 > maxInput$$2;
  if (v136) {
    var v412 = "Please enter a number less than or equal to " + maxInput$$2;
    var v135 = v412 + ".";
    alert(v135);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  introspect(JAM.policy.p17) {
    var v413 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i)
  }
  var v137 = v413 != -1;
  if (v137) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  introspect(JAM.policy.p17) {
    var v414 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i)
  }
  var v138 = v414 != -1;
  if (v138) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  introspect(JAM.policy.p17) {
    var v668 = genBankFile.search(/LOCUS/)
  }
  var v621 = v668 == -1;
  var v670 = !v621;
  if (v670) {
    introspect(JAM.policy.p17) {
      var v669 = genBankFile.search(/DEFINITION/)
    }
    v621 = v669 == -1;
  }
  var v547 = v621;
  var v623 = !v547;
  if (v623) {
    introspect(JAM.policy.p17) {
      var v622 = genBankFile.search(/ACCESSION/)
    }
    v547 = v622 == -1;
  }
  var v415 = v547;
  var v549 = !v415;
  if (v549) {
    introspect(JAM.policy.p17) {
      var v548 = genBankFile.search(/ORIGIN/)
    }
    v415 = v548 == -1;
  }
  var v139 = v415;
  if (v139) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  introspect(JAM.policy.p17) {
    var v671 = genBankFile$$1.search(/LOCUS/)
  }
  var v624 = v671 == -1;
  var v673 = !v624;
  if (v673) {
    introspect(JAM.policy.p17) {
      var v672 = genBankFile$$1.search(/DEFINITION/)
    }
    v624 = v672 == -1;
  }
  var v550 = v624;
  var v626 = !v550;
  if (v626) {
    introspect(JAM.policy.p17) {
      var v625 = genBankFile$$1.search(/ACCESSION/)
    }
    v550 = v625 == -1;
  }
  var v416 = v550;
  var v552 = !v416;
  if (v552) {
    introspect(JAM.policy.p17) {
      var v551 = genBankFile$$1.search(/ORIGIN/)
    }
    v416 = v551 == -1;
  }
  var v140 = v416;
  if (v140) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  introspect(JAM.policy.p17) {
    var v417 = genBankFile$$1.search(/FEATURES {13}/)
  }
  var v141 = v417 == -1;
  if (v141) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  introspect(JAM.policy.p17) {
    var v674 = emblFile$$1.search(/ID/)
  }
  var v627 = v674 == -1;
  var v676 = !v627;
  if (v676) {
    introspect(JAM.policy.p17) {
      var v675 = emblFile$$1.search(/AC/)
    }
    v627 = v675 == -1;
  }
  var v553 = v627;
  var v629 = !v553;
  if (v629) {
    introspect(JAM.policy.p17) {
      var v628 = emblFile$$1.search(/DE/)
    }
    v553 = v628 == -1;
  }
  var v418 = v553;
  var v555 = !v418;
  if (v555) {
    introspect(JAM.policy.p17) {
      var v554 = emblFile$$1.search(/SQ/)
    }
    v418 = v554 == -1;
  }
  var v142 = v418;
  if (v142) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  introspect(JAM.policy.p17) {
    var v419 = emblFile$$1.search(/^FT/m)
  }
  var v143 = v419 == -1;
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
    var v420 = basePerLine / groupSize;
    var v147 = j$$6 <= v420;
    for (;v147;) {
      var v146 = k < groupSize;
      for (;v146;) {
        var v421 = k + i$$5;
        introspect(JAM.policy.p15) {
          var v145 = text$$10.charAt(v421)
        }
        lineOfText = lineOfText + v145;
        k = k + 1;
        v146 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v422 = basePerLine / groupSize;
      v147 = j$$6 <= v422;
    }
    var v148 = outputWindow.document;
    var v149 = lineOfText + "\n";
    introspect(JAM.policy.p15) {
      v148.write(v149);
    }
    lineOfText = "";
    v150 = i$$5 < stopBase;
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
    var v423 = adjustment < 0;
    if (v423) {
      v423 = adjusted >= 0;
    }
    var v151 = v423;
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
    var v424 = basePerLine$$2 / groupSize$$2;
    var v160 = j$$7 <= v424;
    for (;v160;) {
      var v155 = k$$1 < groupSize$$2;
      for (;v155;) {
        var v425 = i$$6 + k$$1;
        var v152 = v425 >= stopBase$$2;
        if (v152) {
          break;
        }
        var v153 = lineOfText$$1;
        var v426 = k$$1 + i$$6;
        introspect(JAM.policy.p15) {
          var v154 = text$$12.charAt(v426)
        }
        lineOfText$$1 = v153 + v154;
        k$$1 = k$$1 + 1;
        v155 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v158 = numberPosition$$1 == "above";
      if (v158) {
        var v156 = aboveNum;
        var v427 = adjustNumbering(i$$6, numberingAdjustment);
        var v157 = rightNum(v427, "", groupSize$$2, tabIn$$3);
        aboveNum = v156 + v157;
      }
      var v159 = i$$6 >= stopBase$$2;
      if (v159) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v428 = basePerLine$$2 / groupSize$$2;
      v160 = j$$7 <= v428;
    }
    var v183 = numberPosition$$1 == "left";
    if (v183) {
      var v161 = outputWindow.document;
      var v630 = adjustNumbering(lineNum, numberingAdjustment);
      var v556 = rightNum(v630, "", 8, tabIn$$3);
      var v429 = v556 + lineOfText$$1;
      var v162 = v429 + "\n";
      introspect(JAM.policy.p15) {
        v161.write(v162);
      }
      var v166 = strands$$1 == "two";
      if (v166) {
        var v163 = outputWindow.document;
        var v631 = adjustNumbering(lineNum, numberingAdjustment);
        var v557 = rightNum(v631, "", 8, tabIn$$3);
        var v558 = complement(lineOfText$$1);
        var v430 = v557 + v558;
        var v164 = v430 + "\n";
        introspect(JAM.policy.p15) {
          v163.write(v164);
        }
        var v165 = outputWindow.document;
        introspect(JAM.policy.p11) {
          v165.write("\n");
        }
      }
    } else {
      var v182 = numberPosition$$1 == "right";
      if (v182) {
        var v167 = outputWindow.document;
        var v559 = lineOfText$$1;
        var v560 = adjustNumbering(i$$6, numberingAdjustment);
        var v431 = v559 + v560;
        var v168 = v431 + "\n";
        introspect(JAM.policy.p15) {
          v167.write(v168);
        }
        var v172 = strands$$1 == "two";
        if (v172) {
          var v169 = outputWindow.document;
          var v561 = complement(lineOfText$$1);
          var v562 = adjustNumbering(i$$6, numberingAdjustment);
          var v432 = v561 + v562;
          var v170 = v432 + "\n";
          introspect(JAM.policy.p15) {
            v169.write(v170);
          }
          var v171 = outputWindow.document;
          introspect(JAM.policy.p11) {
            v171.write("\n");
          }
        }
      } else {
        var v181 = numberPosition$$1 == "above";
        if (v181) {
          var v173 = outputWindow.document;
          var v174 = aboveNum + "\n";
          introspect(JAM.policy.p15) {
            v173.write(v174);
          }
          var v175 = outputWindow.document;
          var v176 = lineOfText$$1 + "\n";
          introspect(JAM.policy.p15) {
            v175.write(v176);
          }
          var v180 = strands$$1 == "two";
          if (v180) {
            var v177 = outputWindow.document;
            var v433 = complement(lineOfText$$1);
            var v178 = v433 + "\n";
            introspect(JAM.policy.p15) {
              v177.write(v178);
            }
            var v179 = outputWindow.document;
            introspect(JAM.policy.p11) {
              v179.write("\n");
            }
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
    var v434 = basePerLine$$3 / groupSize$$3;
    var v191 = j$$8 <= v434;
    for (;v191;) {
      var v187 = k$$2 < groupSize$$3;
      for (;v187;) {
        var v435 = i$$7 + k$$2;
        var v185 = v435 >= stopBase$$3;
        if (v185) {
          break;
        }
        var v436 = k$$2 + i$$7;
        introspect(JAM.policy.p15) {
          var v186 = text$$13.charAt(v436)
        }
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
      var v437 = basePerLine$$3 / groupSize$$3;
      v191 = j$$8 <= v437;
    }
    var v202 = numberPosition$$2 == "left";
    if (v202) {
      var v192 = outputWindow.document;
      var v563 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v438 = v563 + lineOfText$$2;
      var v193 = v438 + "\n";
      introspect(JAM.policy.p15) {
        v192.write(v193);
      }
    } else {
      var v201 = numberPosition$$2 == "right";
      if (v201) {
        var v194 = outputWindow.document;
        var v439 = lineOfText$$2 + i$$7;
        var v195 = v439 + "\n";
        introspect(JAM.policy.p15) {
          v194.write(v195);
        }
      } else {
        var v200 = numberPosition$$2 == "above";
        if (v200) {
          var v196 = outputWindow.document;
          var v197 = aboveNum$$1 + "\n";
          introspect(JAM.policy.p15) {
            v196.write(v197);
          }
          var v198 = outputWindow.document;
          var v199 = lineOfText$$2 + "\n";
          introspect(JAM.policy.p15) {
            v198.write(v199);
          }
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
  var v632 = sequence$$13.length;
  var v564 = v632 <= firstIndexToMutate;
  var v633 = !v564;
  if (v633) {
    v564 = lastIndexToMutate < 0;
  }
  var v440 = v564;
  var v565 = !v440;
  if (v565) {
    v440 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v204 = v440;
  if (v204) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v212 = i$$8 < numMut;
  for (;v212;) {
    maxNum = sequence$$13.length;
    var v441 = Math.random();
    var v205 = v441 * maxNum;
    introspect(JAM.policy.p17) {
      randNum = Math.floor(v205);
    }
    var v442 = randNum < firstIndexToMutate;
    var v566 = !v442;
    if (v566) {
      v442 = randNum > lastIndexToMutate;
    }
    var v206 = v442;
    if (v206) {
      numMut++;
      i$$8++;
      v212 = i$$8 < numMut;
      continue;
    }
    introspect(JAM.policy.p17) {
      currentChar = sequence$$13.charAt(randNum);
    }
    needNewChar = true;
    for (;needNewChar;) {
      var v443 = Math.random();
      var v444 = components$$1.length;
      var v207 = v443 * v444;
      introspect(JAM.policy.p17) {
        componentsIndex = Math.round(v207);
      }
      var v445 = components$$1.length;
      var v208 = componentsIndex == v445;
      if (v208) {
        componentsIndex = 0;
      }
      var v446 = components$$1[componentsIndex];
      var v209 = v446 != currentChar;
      if (v209) {
        needNewChar = false;
      }
    }
    introspect(JAM.policy.p13) {
      var v447 = sequence$$13.substring(0, randNum)
    }
    var v448 = components$$1[componentsIndex];
    var v210 = v447 + v448;
    var v449 = randNum + 1;
    var v450 = sequence$$13.length;
    introspect(JAM.policy.p27) {
      var v211 = sequence$$13.substring(v449, v450)
    }
    sequence$$13 = v210 + v211;
    i$$8++;
    v212 = i$$8 < numMut;
  }
  var v213 = outputWindow.document;
  var v214 = addReturns(sequence$$13);
  introspect(JAM.policy.p15) {
    v213.write(v214);
  }
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v219 = j$$9 < lengthOut$$1;
  for (;v219;) {
    var v451 = Math.random();
    var v452 = components$$2.length;
    var v215 = v451 * v452;
    introspect(JAM.policy.p17) {
      tempNum$$1 = Math.floor(v215);
    }
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v453 = sequence$$14.length;
    var v218 = v453 == 60;
    if (v218) {
      var v216 = outputWindow.document;
      var v217 = sequence$$14 + "\n";
      introspect(JAM.policy.p15) {
        v216.write(v217);
      }
      sequence$$14 = "";
    }
    j$$9++;
    v219 = j$$9 < lengthOut$$1;
  }
  var v220 = outputWindow.document;
  var v221 = sequence$$14 + "\n";
  introspect(JAM.policy.p15) {
    v220.write(v221);
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
  var v225 = dnaConformation == "circular";
  if (v225) {
    introspect(JAM.policy.p13) {
      var v222 = sequence$$15.substring(0, lookAhead)
    }
    shiftValue = v222.length;
    var v634 = sequence$$15.length;
    var v567 = v634 - lookAhead;
    var v568 = sequence$$15.length;
    introspect(JAM.policy.p27) {
      var v454 = sequence$$15.substring(v567, v568)
    }
    var v223 = v454 + sequence$$15;
    introspect(JAM.policy.p13) {
      var v224 = sequence$$15.substring(0, lookAhead)
    }
    sequence$$15 = v223 + v224;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v226 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v226.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  }
  var v227 = outputWindow.document;
  var v635 = '<tr><td class="title" width="200px">' + "Site:";
  var v569 = v635 + '</td><td class="title">';
  var v455 = v569 + "Positions:";
  var v228 = v455 + "</td></tr>\n";
  introspect(JAM.policy.p15) {
    v227.write(v228);
  }
  var i$$9 = 0;
  var v456 = arrayOfItems.length;
  var v244 = i$$9 < v456;
  for (;v244;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v457 = arrayOfItems[i$$9];
    introspect(JAM.policy.p17) {
      var v229 = v457.match(/\/.+\//)
    }
    matchExp = v229 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    var v636 = arrayOfItems[i$$9];
    introspect(JAM.policy.p17) {
      var v570 = v636.match(/\)\D*\d+/)
    }
    var v458 = v570.toString();
    introspect(JAM.policy.p16) {
      var v230 = v458.replace(/\)\D*/, "")
    }
    cutDistance = parseFloat(v230);
    introspect(JAM.policy.p15) {
      var v236 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    for (;v236;) {
      var v231 = matchExp.lastIndex;
      matchPosition = v231 - cutDistance;
      var v459 = matchPosition >= lowerLimit;
      if (v459) {
        v459 = matchPosition < upperLimit;
      }
      var v234 = v459;
      if (v234) {
        timesFound++;
        var v232 = tempString$$1 + ", ";
        var v460 = matchPosition - shiftValue;
        var v233 = v460 + 1;
        tempString$$1 = v232 + v233;
      }
      var v461 = matchExp.lastIndex;
      var v571 = RegExp.lastMatch;
      var v462 = v571.length;
      var v235 = v461 - v462;
      matchExp.lastIndex = v235 + 1;
      introspect(JAM.policy.p15) {
        v236 = matchArray$$1 = matchExp.exec(sequence$$15);
      }
    }
    introspect(JAM.policy.p17) {
      var v463 = tempString$$1.search(/\d/)
    }
    var v237 = v463 != -1;
    if (v237) {
      introspect(JAM.policy.p16) {
        tempString$$1 = tempString$$1.replace(/none,\s*/, "");
      }
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
    var v733 = '<tr><td class="' + backGroundClass;
    var v717 = v733 + '">';
    var v762 = arrayOfItems[i$$9];
    introspect(JAM.policy.p17) {
      var v750 = v762.match(/\([^\(]+\)/)
    }
    var v734 = v750.toString();
    introspect(JAM.policy.p16) {
      var v718 = v734.replace(/\(|\)/g, "")
    }
    var v700 = v717 + v718;
    var v677 = v700 + '</td><td class="';
    var v637 = v677 + backGroundClass;
    var v572 = v637 + '">';
    var v464 = v572 + tempString$$1;
    var v243 = v464 + "</td></tr>\n";
    introspect(JAM.policy.p15) {
      v242.write(v243);
    }
    timesFound = 0;
    i$$9++;
    var v465 = arrayOfItems.length;
    v244 = i$$9 < v465;
  }
  var v245 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v245.write("</tbody></table>\n");
  }
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v246 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v246.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  }
  var v247 = outputWindow.document;
  var v701 = '<tr><td class="title">' + "Pattern:";
  var v678 = v701 + '</td><td class="title">';
  var v638 = v678 + "Times found:";
  var v573 = v638 + '</td><td class="title">';
  var v466 = v573 + "Percentage:";
  var v248 = v466 + "</td></tr>\n";
  introspect(JAM.policy.p15) {
    v247.write(v248);
  }
  var i$$10 = 0;
  var v467 = arrayOfItems$$1.length;
  var v257 = i$$10 < v467;
  for (;v257;) {
    var tempNumber = 0;
    var v468 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p17) {
      var v249 = v468.match(/\/[^\/]+\//)
    }
    var matchExp$$1 = v249 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    introspect(JAM.policy.p15) {
      var v469 = sequence$$16.search(matchExp$$1)
    }
    var v251 = v469 != -1;
    if (v251) {
      introspect(JAM.policy.p15) {
        var v250 = sequence$$16.match(matchExp$$1)
      }
      tempNumber = v250.length;
    }
    var percentage = 0;
    var v574 = originalLength + 1;
    var v679 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p17) {
      var v639 = v679.match(/\d+/)
    }
    var v575 = parseFloat(v639);
    var v470 = v574 - v575;
    var v254 = v470 > 0;
    if (v254) {
      var v252 = 100 * tempNumber;
      var v471 = originalLength + 1;
      var v640 = arrayOfItems$$1[i$$10];
      introspect(JAM.policy.p17) {
        var v576 = v640.match(/\d+/)
      }
      var v472 = parseFloat(v576);
      var v253 = v471 - v472;
      percentage = v252 / v253;
    }
    var v255 = outputWindow.document;
    var v763 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p17) {
      var v751 = v763.match(/\([^\(]+\)\b/)
    }
    var v735 = v751.toString();
    introspect(JAM.policy.p16) {
      var v719 = v735.replace(/\(|\)/g, "")
    }
    var v702 = "<tr><td>" + v719;
    var v680 = v702 + "</td><td>";
    var v641 = v680 + tempNumber;
    var v577 = v641 + "</td><td>";
    introspect(JAM.policy.p9) {
      var v578 = percentage.toFixed(2)
    }
    var v473 = v577 + v578;
    var v256 = v473 + "</td></tr>\n";
    introspect(JAM.policy.p15) {
      v255.write(v256);
    }
    i$$10++;
    var v474 = arrayOfItems$$1.length;
    v257 = i$$10 < v474;
  }
  var v258 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v258.write("</tbody></table>\n");
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
  var v475 = sequence$$17.length;
  var v265 = v475 > 0;
  for (;v265;) {
    maxNum$$1 = sequence$$17.length;
    var v476 = Math.random();
    var v259 = v476 * maxNum$$1;
    introspect(JAM.policy.p17) {
      randNum$$1 = Math.floor(v259);
    }
    introspect(JAM.policy.p17) {
      tempChar$$2 = sequence$$17.charAt(randNum$$1);
    }
    tempSeq = tempSeq + tempChar$$2;
    introspect(JAM.policy.p13) {
      tempString1 = sequence$$17.substring(0, randNum$$1);
    }
    var v260 = randNum$$1 + 1;
    var v261 = sequence$$17.length;
    introspect(JAM.policy.p16) {
      tempString2 = sequence$$17.substring(v260, v261);
    }
    sequence$$17 = tempString1 + tempString2;
    var v477 = tempSeq.length;
    var v264 = v477 == 60;
    if (v264) {
      var v262 = outputWindow.document;
      var v263 = tempSeq + "\n";
      introspect(JAM.policy.p15) {
        v262.write(v263);
      }
      tempSeq = "";
    }
    var v478 = sequence$$17.length;
    v265 = v478 > 0;
  }
  var v266 = outputWindow.document;
  var v267 = tempSeq + "\n";
  introspect(JAM.policy.p15) {
    v266.write(v267);
  }
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
function codonPlot(theDocument) {
  var newDna = "";
  var maxInput$$3 = 5E4;
  var codonTable$$1;
  var title$$9;
  var v479 = testScript();
  var v268 = v479 == false;
  if (v268) {
    return false;
  }
  var v736 = theDocument.forms;
  var v720 = v736[0];
  var v703 = v720.elements;
  var v681 = v703[0];
  var v642 = checkFormElement(v681);
  var v579 = v642 == false;
  var v644 = !v579;
  if (v644) {
    var v752 = theDocument.forms;
    var v737 = v752[0];
    var v721 = v737.elements;
    var v704 = v721[0];
    var v682 = v704.value;
    var v643 = checkSequenceLength(v682, maxInput$$3);
    v579 = v643 == false;
  }
  var v480 = v579;
  var v581 = !v480;
  if (v581) {
    var v738 = theDocument.forms;
    var v722 = v738[0];
    var v705 = v722.elements;
    var v683 = v705[4];
    var v645 = v683.value;
    var v580 = checkCodonTable(v645);
    v480 = v580 == false;
  }
  var v269 = v480;
  if (v269) {
    return false;
  }
  var v684 = theDocument.forms;
  var v646 = v684[0];
  var v582 = v646.elements;
  var v481 = v582[4];
  var v270 = v481.value;
  codonTable$$1 = makeCodonTable(v270);
  var v271 = codonTable$$1 == false;
  if (v271) {
    return false;
  }
  var v685 = theDocument.forms;
  var v647 = v685[0];
  var v583 = v647.elements;
  var v482 = v583[0];
  var v272 = v482.value;
  newDna = getSequenceFromFasta(v272);
  var v686 = theDocument.forms;
  var v648 = v686[0];
  var v584 = v648.elements;
  var v483 = v584[0];
  var v273 = v483.value;
  title$$9 = getTitleFromFasta(v273);
  verifyDna(newDna);
  newDna = removeNonDna(newDna);
  openWindow("Codon Plot");
  var v274 = outputWindow.document;
  var v275 = getInfoFromTitleAndSequence(title$$9, newDna);
  introspect(JAM.policy.p15) {
    v274.write(v275);
  }
  openPre();
  writeCodonPlot(codonTable$$1, newDna);
  closePre();
  closeWindow();
  return true;
}
function writeCodonPlot(codonTable$$2, sequence$$18) {
  function v2(str$$8, p1$$2, offset$$10, s$$4) {
    try {
      var v484 = codonTable$$2;
      var v585 = p1$$2.toString();
      var v485 = v585.toLowerCase();
      var v276 = v484[v485];
      aminoAcid$$1 = v276.aminoAcid;
      var v486 = codonTable$$2;
      var v586 = p1$$2.toString();
      var v487 = v586.toLowerCase();
      var v277 = v486[v487];
      yValue = v277.fraction;
    } catch (e$$5) {
      aminoAcid$$1 = "???";
      yValue = 0;
    }
    var v787 = p1$$2.toString();
    var v782 = v787.toLowerCase();
    var v774 = "<b>" + v782;
    var v764 = v774 + ", ";
    var v765 = offset$$10 + 1;
    var v753 = v764 + v765;
    var v739 = v753 + " to ";
    var v740 = offset$$10 + 3;
    var v723 = v739 + v740;
    var v706 = v723 + " (";
    var v687 = v706 + aminoAcid$$1;
    var v649 = v687 + ")</b>\n";
    var v724 = markString.length;
    var v707 = yValue * v724;
    introspect(JAM.policy.p15) {
      var v688 = Math.round(v707)
    }
    introspect(JAM.policy.p13) {
      var v650 = markString.substring(0, v688)
    }
    var v587 = v649 + v650;
    var v488 = v587 + " ";
    introspect(JAM.policy.p9) {
      var v489 = yValue.toFixed(2)
    }
    var v278 = v488 + v489;
    return v278 + "\n\n";
  }
  var markString = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
  var codon$$1;
  var perThou$$1;
  var fraction$$1;
  var yValue;
  var aminoAcid$$1;
  introspect(JAM.policy.p16) {
    sequence$$18 = sequence$$18.replace(/u/gi, "t");
  }
  introspect(JAM.policy.p16) {
    sequence$$18 = sequence$$18.replace(/(...)/g, v2);
  }
  var v279 = outputWindow.document;
  var v280 = sequence$$18 + "\n";
  introspect(JAM.policy.p15) {
    v279.write(v280);
  }
  return true;
}
function makeCodonTable(gcgTable) {
  introspect(JAM.policy.p16) {
    gcgTable = gcgTable.replace(/[^\.]*\.\./, "");
  }
  introspect(JAM.policy.p17) {
    var tableArray = gcgTable.split(/[\f\n\r]/)
  }
  var re$$3 = /(\w+)\s+(\w+)\s+(\S+)\s+(\S+)\s+(\S+)/g;
  var matchArray$$2;
  var codonTable$$3 = new CodonTable;
  var i$$11 = 0;
  var v490 = tableArray.length;
  var v290 = i$$11 < v490;
  for (;v290;) {
    var v491 = tableArray[i$$11];
    introspect(JAM.policy.p15) {
      var v289 = matchArray$$2 = re$$3.exec(v491)
    }
    for (;v289;) {
      try {
        var v588 = matchArray$$2[2];
        var v492 = v588.toLowerCase();
        var v281 = codonTable$$3[v492];
        var v282 = matchArray$$2[1];
        var v493 = matchArray$$2[3];
        var v283 = parseFloat(v493);
        var v494 = matchArray$$2[4];
        var v284 = parseFloat(v494);
        var v495 = matchArray$$2[5];
        var v285 = parseFloat(v495);
        introspect(JAM.policy.p27) {
          v281.fillCodon(v282, v283, v284, v285);
        }
        var v286 = codonTable$$3.codons;
        var v496 = matchArray$$2[2];
        var v287 = v496.toLowerCase();
        introspect(JAM.policy.p15) {
          v286.push(v287);
        }
      } catch (e$$6) {
        var v766 = matchArray$$2[1];
        var v754 = "There is a problem with a line of the codon table: " + v766;
        var v741 = v754 + " ";
        var v742 = matchArray$$2[2];
        var v725 = v741 + v742;
        var v708 = v725 + " ";
        var v709 = matchArray$$2[3];
        var v689 = v708 + v709;
        var v651 = v689 + " ";
        var v652 = matchArray$$2[4];
        var v589 = v651 + v652;
        var v497 = v589 + " ";
        var v498 = matchArray$$2[5];
        var v288 = v497 + v498;
        alert(v288);
        return false;
      }
      var v499 = tableArray[i$$11];
      introspect(JAM.policy.p15) {
        v289 = matchArray$$2 = re$$3.exec(v499);
      }
    }
    i$$11++;
    var v500 = tableArray.length;
    v290 = i$$11 < v500;
  }
  codonTable$$3.fixFraction();
  return codonTable$$3;
}
function CodonTable() {
  var v805 = new Array;
  this.codons = v805;
  var v806 = new Codon;
  this.ggg = v806;
  var v807 = new Codon;
  this.gga = v807;
  var v808 = new Codon;
  this.ggt = v808;
  var v809 = new Codon;
  this.ggc = v809;
  var v810 = new Codon;
  this.gag = v810;
  var v811 = new Codon;
  this.gaa = v811;
  var v812 = new Codon;
  this.gat = v812;
  var v813 = new Codon;
  this.gac = v813;
  var v814 = new Codon;
  this.gtg = v814;
  var v815 = new Codon;
  this.gta = v815;
  var v816 = new Codon;
  this.gtt = v816;
  var v817 = new Codon;
  this.gtc = v817;
  var v818 = new Codon;
  this.gcg = v818;
  var v819 = new Codon;
  this.gca = v819;
  var v820 = new Codon;
  this.gct = v820;
  var v821 = new Codon;
  this.gcc = v821;
  var v822 = new Codon;
  this.agg = v822;
  var v823 = new Codon;
  this.aga = v823;
  var v824 = new Codon;
  this.agt = v824;
  var v825 = new Codon;
  this.agc = v825;
  var v826 = new Codon;
  this.aag = v826;
  var v827 = new Codon;
  this.aaa = v827;
  var v828 = new Codon;
  this.aat = v828;
  var v829 = new Codon;
  this.aac = v829;
  var v830 = new Codon;
  this.atg = v830;
  var v831 = new Codon;
  this.ata = v831;
  var v832 = new Codon;
  this.att = v832;
  var v833 = new Codon;
  this.atc = v833;
  var v834 = new Codon;
  this.acg = v834;
  var v835 = new Codon;
  this.aca = v835;
  var v836 = new Codon;
  this.act = v836;
  var v837 = new Codon;
  this.acc = v837;
  var v838 = new Codon;
  this.tgg = v838;
  var v839 = new Codon;
  this.tga = v839;
  var v840 = new Codon;
  this.tgt = v840;
  var v841 = new Codon;
  this.tgc = v841;
  var v842 = new Codon;
  this.tag = v842;
  var v843 = new Codon;
  this.taa = v843;
  var v844 = new Codon;
  this.tat = v844;
  var v845 = new Codon;
  this.tac = v845;
  var v846 = new Codon;
  this.ttg = v846;
  var v847 = new Codon;
  this.tta = v847;
  var v848 = new Codon;
  this.ttt = v848;
  var v849 = new Codon;
  this.ttc = v849;
  var v850 = new Codon;
  this.tcg = v850;
  var v851 = new Codon;
  this.tca = v851;
  var v852 = new Codon;
  this.tct = v852;
  var v853 = new Codon;
  this.tcc = v853;
  var v854 = new Codon;
  this.cgg = v854;
  var v855 = new Codon;
  this.cga = v855;
  var v856 = new Codon;
  this.cgt = v856;
  var v857 = new Codon;
  this.cgc = v857;
  var v858 = new Codon;
  this.cag = v858;
  var v859 = new Codon;
  this.caa = v859;
  var v860 = new Codon;
  this.cat = v860;
  var v861 = new Codon;
  this.cac = v861;
  var v862 = new Codon;
  this.ctg = v862;
  var v863 = new Codon;
  this.cta = v863;
  var v864 = new Codon;
  this.ctt = v864;
  var v865 = new Codon;
  this.ctc = v865;
  var v866 = new Codon;
  this.ccg = v866;
  var v867 = new Codon;
  this.cca = v867;
  var v868 = new Codon;
  this.cct = v868;
  var v869 = new Codon;
  this.ccc = v869;
  return;
}
function fixFraction() {
  var i$$12 = 0;
  var v590 = this.codons;
  var v501 = v590.length;
  var v297 = i$$12 < v501;
  for (;v297;) {
    var v291 = this.codons;
    var outerCodon = v291[i$$12];
    var perThouTotal = 0;
    var j$$10 = 0;
    var v591 = this.codons;
    var v502 = v591.length;
    var v295 = j$$10 < v502;
    for (;v295;) {
      var v292 = this.codons;
      var innerCodon = v292[j$$10];
      var v592 = this[outerCodon];
      var v503 = v592.aminoAcid;
      var v593 = this[innerCodon];
      var v504 = v593.aminoAcid;
      var v294 = v503 == v504;
      if (v294) {
        var v505 = this[innerCodon];
        var v293 = v505.perThou;
        perThouTotal = perThouTotal + v293;
      }
      j$$10++;
      var v594 = this.codons;
      var v506 = v594.length;
      v295 = j$$10 < v506;
    }
    var v296 = this[outerCodon];
    var v595 = this[outerCodon];
    var v507 = v595.perThou;
    v296.fraction = v507 / perThouTotal;
    i$$12++;
    var v596 = this.codons;
    var v508 = v596.length;
    v297 = i$$12 < v508;
  }
  return true;
}
new CodonTable;
var v298 = CodonTable.prototype;
v298.fixFraction = fixFraction;
new Codon;
var v299 = Codon.prototype;
v299.fillCodon = fillCodon;
document.onload = v3;
introspect(JAM.policy.p11) {
  var v300 = document.getElementById("submitbtn")
}
v300.onclick = v4;
introspect(JAM.policy.p11) {
  var v301 = document.getElementById("clearbtn")
}
v301.onclick = v5
