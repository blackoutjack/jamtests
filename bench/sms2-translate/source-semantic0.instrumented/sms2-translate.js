function v5() {
  var v663 = document.forms;
  var v558 = v663[0];
  var v330 = v558.elements;
  var v6 = v330[0];
  v6.value = " ";
  var v664 = document.forms;
  var v559 = v664[0];
  var v331 = v559.elements;
  var v7 = v331[4];
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
  var v332 = document.main_form;
  var v9 = v332.main_submit;
  v9.focus();
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
  var v10 = arrayOfSequences[0];
  var lengthOfAlign = v10.length;
  var v333 = arrayOfSequences.length;
  var v11 = v333 < 2;
  if (v11) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v334 = arrayOfTitles.length;
  var v13 = i$$1 < v334;
  for (;v13;) {
    var v741 = arrayOfTitles[i$$1];
    introspect(JAM.policy.p16) {
      var v665 = v741.search(/\S/)
    }
    var v560 = v665 == -1;
    var v667 = !v560;
    if (v667) {
      var v742 = arrayOfSequences[i$$1];
      introspect(JAM.policy.p16) {
        var v666 = v742.search(/\S/)
      }
      v560 = v666 == -1;
    }
    var v335 = v560;
    var v562 = !v335;
    if (v562) {
      var v668 = arrayOfSequences[i$$1];
      var v561 = v668.length;
      v335 = v561 != lengthOfAlign;
    }
    var v12 = v335;
    if (v12) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v336 = arrayOfTitles.length;
    v13 = i$$1 < v336;
  }
  return true;
}
function checkCodonTable(codonTable) {
  introspect(JAM.policy.p16) {
    var v801 = codonTable.search(/AmAcid/)
  }
  var v743 = v801 == -1;
  var v803 = !v743;
  if (v803) {
    introspect(JAM.policy.p16) {
      var v802 = codonTable.search(/Codon/)
    }
    v743 = v802 == -1;
  }
  var v669 = v743;
  var v745 = !v669;
  if (v745) {
    introspect(JAM.policy.p16) {
      var v744 = codonTable.search(/Number/)
    }
    v669 = v744 == -1;
  }
  var v563 = v669;
  var v671 = !v563;
  if (v671) {
    introspect(JAM.policy.p16) {
      var v670 = codonTable.search(/\/1000/)
    }
    v563 = v670 == -1;
  }
  var v337 = v563;
  var v565 = !v337;
  if (v565) {
    introspect(JAM.policy.p16) {
      var v564 = codonTable.search(/Fraction\s*\.\./)
    }
    v337 = v564 == -1;
  }
  var v14 = v337;
  if (v14) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v566 = formElement.value;
  introspect(JAM.policy.p16) {
    var v338 = v566.search(/\S/)
  }
  var v15 = v338 == -1;
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
  var v339 = arrayOfPatterns.length;
  var v18 = z$$2 < v339;
  for (;v18;) {
    var v567 = arrayOfPatterns[z$$2];
    introspect(JAM.policy.p16) {
      var v340 = v567.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/)
    }
    var v16 = v340 == -1;
    if (v16) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v568 = arrayOfPatterns[z$$2];
    var v341 = moreExpressionCheck(v568);
    var v17 = v341 == false;
    if (v17) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v342 = arrayOfPatterns.length;
    v18 = z$$2 < v342;
  }
  var v19 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v19);
  var v20 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v20);
  var j = 0;
  var v343 = arrayOfPatterns.length;
  var v24 = j < v343;
  for (;v24;) {
    var v569 = arrayOfPatterns[j];
    introspect(JAM.policy.p16) {
      var v344 = v569.match(/\/.+\//)
    }
    var v21 = v344 + "gi";
    var v1150 = eval(v21);
    geneticCodeMatchExp[j] = v1150;
    var v345 = arrayOfPatterns[j];
    introspect(JAM.policy.p16) {
      var v22 = v345.match(/=[a-zA-Z\*]/)
    }
    var v1151 = v22.toString();
    geneticCodeMatchResult[j] = v1151;
    var v23 = geneticCodeMatchResult[j];
    introspect(JAM.policy.p15) {
      var v1152 = v23.replace(/=/g, "")
    }
    geneticCodeMatchResult[j] = v1152;
    j++;
    var v346 = arrayOfPatterns.length;
    v24 = j < v346;
  }
  var i$$2 = 0;
  var v570 = testSequence.length;
  var v347 = v570 - 3;
  var v31 = i$$2 <= v347;
  for (;v31;) {
    var v25 = i$$2 + 3;
    introspect(JAM.policy.p15) {
      codon = testSequence.substring(i$$2, v25);
    }
    j = 0;
    var v348 = geneticCodeMatchExp.length;
    var v29 = j < v348;
    for (;v29;) {
      var v571 = geneticCodeMatchExp[j];
      introspect(JAM.policy.p17) {
        var v349 = codon.search(v571)
      }
      var v28 = v349 != -1;
      if (v28) {
        var v27 = oneMatch == true;
        if (v27) {
          var v350 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v26 = v350 + ".";
          alert(v26);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v351 = geneticCodeMatchExp.length;
      v29 = j < v351;
    }
    var v30 = oneMatch == false;
    if (v30) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v572 = testSequence.length;
    var v352 = v572 - 3;
    v31 = i$$2 <= v352;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v353 = arrayOfPatterns$$1.length;
  var v33 = z$$3 < v353;
  for (;v33;) {
    var v573 = arrayOfPatterns$$1[z$$3];
    introspect(JAM.policy.p16) {
      var v354 = v573.search(/[^acdefghiklmnpqrstvwyz]/i)
    }
    var v32 = v354 != -1;
    if (v32) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v355 = arrayOfPatterns$$1.length;
    v33 = z$$3 < v355;
  }
  var i$$3 = 0;
  var v356 = arrayOfPatterns$$1.length;
  var v37 = i$$3 < v356;
  for (;v37;) {
    var v574 = arrayOfPatterns$$1[i$$3];
    var v357 = "[" + v574;
    var v34 = v357 + "]";
    var re = new RegExp(v34, "gi");
    var j$$1 = i$$3 + 1;
    var v358 = arrayOfPatterns$$1.length;
    var v36 = j$$1 < v358;
    for (;v36;) {
      var v575 = arrayOfPatterns$$1[j$$1];
      introspect(JAM.policy.p17) {
        var v359 = v575.search(re)
      }
      var v35 = v359 != -1;
      if (v35) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v360 = arrayOfPatterns$$1.length;
      v36 = j$$1 < v360;
    }
    i$$3++;
    var v361 = arrayOfPatterns$$1.length;
    v37 = i$$3 < v361;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v362 = arrayOfPatterns$$2.length;
  var v40 = z$$4 < v362;
  for (;v40;) {
    var v576 = arrayOfPatterns$$2[z$$4];
    introspect(JAM.policy.p16) {
      var v363 = v576.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i)
    }
    var v38 = v363 == -1;
    if (v38) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v577 = arrayOfPatterns$$2[z$$4];
    var v364 = moreExpressionCheck(v577);
    var v39 = v364 == false;
    if (v39) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v365 = arrayOfPatterns$$2.length;
    v40 = z$$4 < v365;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v672 = getSequenceFromFasta(text$$7);
  introspect(JAM.policy.p15) {
    var v578 = v672.replace(/[^A-Za-z]/g, "")
  }
  var v366 = v578.length;
  var v42 = v366 > maxInput;
  if (v42) {
    var v367 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v41 = v367 + " characters.";
    alert(v41);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v368 = text$$8.length;
  var v44 = v368 > maxInput$$1;
  if (v44) {
    var v369 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v43 = v369 + " characters.";
    alert(v43);
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
  var v370 = alignArray.length;
  var v51 = v370 < 3;
  if (v51) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v371 = alignArray.length;
  var v53 = i$$4 < v371;
  for (;v53;) {
    var v579 = alignArray[i$$4];
    introspect(JAM.policy.p16) {
      var v372 = v579.search(/[^\s]+\s/)
    }
    var v52 = v372 == -1;
    if (v52) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v373 = alignArray.length;
    v53 = i$$4 < v373;
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
    var v374 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v56 = v374 != -1;
  if (v56) {
    introspect(JAM.policy.p17) {
      var v55 = matchArray = re$$1.exec(sequenceData)
    }
    for (;v55;) {
      var v54 = matchArray[0];
      introspect(JAM.policy.p17) {
        arrayOfFasta.push(v54);
      }
      introspect(JAM.policy.p17) {
        v55 = matchArray = re$$1.exec(sequenceData);
      }
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v375 = sequence$$2.length;
  var v57 = "&gt;results for " + v375;
  var stringToReturn = v57 + " residue sequence ";
  introspect(JAM.policy.p16) {
    var v376 = fastaSequenceTitle.search(/[^\s]/)
  }
  var v59 = v376 != -1;
  if (v59) {
    var v377 = stringToReturn + '"';
    var v58 = v377 + fastaSequenceTitle;
    stringToReturn = v58 + '"';
  }
  var v378 = stringToReturn + ' starting "';
  introspect(JAM.policy.p13) {
    var v379 = sequence$$2.substring(0, 10)
  }
  var v60 = v378 + v379;
  stringToReturn = v60 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v380 = sequenceOne.length;
  var v61 = "Search results for " + v380;
  var stringToReturn$$1 = v61 + " residue sequence ";
  introspect(JAM.policy.p16) {
    var v381 = fastaSequenceTitleOne.search(/[^\s]/)
  }
  var v63 = v381 != -1;
  if (v63) {
    var v382 = stringToReturn$$1 + '"';
    var v62 = v382 + fastaSequenceTitleOne;
    stringToReturn$$1 = v62 + '"';
  }
  var v383 = stringToReturn$$1 + ' starting "';
  introspect(JAM.policy.p13) {
    var v384 = sequenceOne.substring(0, 10)
  }
  var v64 = v383 + v384;
  stringToReturn$$1 = v64 + '"\n';
  var v385 = stringToReturn$$1 + "and ";
  var v386 = sequenceTwo.length;
  var v65 = v385 + v386;
  stringToReturn$$1 = v65 + " residue sequence ";
  introspect(JAM.policy.p16) {
    var v387 = fastaSequenceTitleTwo.search(/[^\s]/)
  }
  var v67 = v387 != -1;
  if (v67) {
    var v388 = stringToReturn$$1 + '"';
    var v66 = v388 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v66 + '"';
  }
  var v389 = stringToReturn$$1 + ' starting "';
  introspect(JAM.policy.p13) {
    var v390 = sequenceTwo.substring(0, 10)
  }
  var v68 = v389 + v390;
  stringToReturn$$1 = v68 + '"';
  var v69 = '<div class="info">' + stringToReturn$$1;
  return v69 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v70 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v70);
  var j$$2 = 0;
  var v391 = arrayOfPatterns$$3.length;
  var v72 = j$$2 < v391;
  for (;v72;) {
    var v580 = arrayOfPatterns$$3[j$$2];
    introspect(JAM.policy.p16) {
      var v392 = v580.match(/\/.+\//)
    }
    var v71 = v392 + "gi";
    var v1153 = eval(v71);
    geneticCodeMatchExp$$1[j$$2] = v1153;
    j$$2++;
    var v393 = arrayOfPatterns$$3.length;
    v72 = j$$2 < v393;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v73 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v73);
  var j$$3 = 0;
  var v394 = arrayOfPatterns$$4.length;
  var v76 = j$$3 < v394;
  for (;v76;) {
    var v395 = arrayOfPatterns$$4[j$$3];
    introspect(JAM.policy.p16) {
      var v74 = v395.match(/=[a-zA-Z\*]/)
    }
    var v1154 = v74.toString();
    geneticCodeMatchResult$$1[j$$3] = v1154;
    var v75 = geneticCodeMatchResult$$1[j$$3];
    introspect(JAM.policy.p15) {
      var v1155 = v75.replace(/=/g, "")
    }
    geneticCodeMatchResult$$1[j$$3] = v1155;
    j$$3++;
    var v396 = arrayOfPatterns$$4.length;
    v76 = j$$3 < v396;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v397 = sequence$$3.length;
  var v77 = "Results for " + v397;
  var stringToReturn$$2 = v77 + " residue sequence ";
  introspect(JAM.policy.p16) {
    var v398 = fastaSequenceTitle$$1.search(/[^\s]/)
  }
  var v79 = v398 != -1;
  if (v79) {
    var v399 = stringToReturn$$2 + '"';
    var v78 = v399 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v78 + '"';
  }
  var v400 = stringToReturn$$2 + ' starting "';
  introspect(JAM.policy.p13) {
    var v401 = sequence$$3.substring(0, 10)
  }
  var v80 = v400 + v401;
  stringToReturn$$2 = v80 + '"';
  var v81 = '<div class="info">' + stringToReturn$$2;
  return v81 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v581 = "Results for " + topology;
  var v402 = v581 + " ";
  var v403 = sequence$$4.length;
  var v82 = v402 + v403;
  var stringToReturn$$3 = v82 + " residue sequence ";
  introspect(JAM.policy.p16) {
    var v404 = fastaSequenceTitle$$2.search(/[^\s]/)
  }
  var v84 = v404 != -1;
  if (v84) {
    var v405 = stringToReturn$$3 + '"';
    var v83 = v405 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v83 + '"';
  }
  var v406 = stringToReturn$$3 + ' starting "';
  introspect(JAM.policy.p13) {
    var v407 = sequence$$4.substring(0, 10)
  }
  var v85 = v406 + v407;
  stringToReturn$$3 = v85 + '"';
  var v86 = '<div class="info">' + stringToReturn$$3;
  return v86 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v408 = sequenceOne$$1.length;
  var v87 = "Alignment results for " + v408;
  var stringToReturn$$4 = v87 + " residue sequence ";
  introspect(JAM.policy.p16) {
    var v409 = fastaSequenceTitleOne$$1.search(/[^\s]/)
  }
  var v89 = v409 != -1;
  if (v89) {
    var v410 = stringToReturn$$4 + '"';
    var v88 = v410 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v88 + '"';
  }
  var v411 = stringToReturn$$4 + ' starting "';
  introspect(JAM.policy.p13) {
    var v412 = sequenceOne$$1.substring(0, 10)
  }
  var v90 = v411 + v412;
  stringToReturn$$4 = v90 + '"\n';
  var v413 = stringToReturn$$4 + "and ";
  var v414 = sequenceTwo$$1.length;
  var v91 = v413 + v414;
  stringToReturn$$4 = v91 + " residue sequence ";
  introspect(JAM.policy.p16) {
    var v415 = fastaSequenceTitleTwo$$1.search(/[^\s]/)
  }
  var v93 = v415 != -1;
  if (v93) {
    var v416 = stringToReturn$$4 + '"';
    var v92 = v416 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v92 + '"';
  }
  var v417 = stringToReturn$$4 + ' starting "';
  introspect(JAM.policy.p13) {
    var v418 = sequenceTwo$$1.substring(0, 10)
  }
  var v94 = v417 + v418;
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
    var v419 = Math.random();
    var v420 = components.length;
    var v96 = v419 * v420;
    introspect(JAM.policy.p16) {
      tempNum = Math.floor(v96);
    }
    tempChar = components[tempNum];
    introspect(JAM.policy.p17) {
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
  introspect(JAM.policy.p16) {
    var v421 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v98 = v421 != -1;
  if (v98) {
    introspect(JAM.policy.p15) {
      sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "");
    }
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  introspect(JAM.policy.p16) {
    var v422 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v100 = v422 != -1;
  if (v100) {
    introspect(JAM.policy.p15) {
      var v99 = sequenceRecord$$1.match(/\>[^\f\n\r]+[\f\n\r]/, "")
    }
    fastaTitle = v99.toString();
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
    var v992 = expressionToCheck.search(/\[[A-Za-z\|]*\[/)
  }
  var v968 = v992 != -1;
  var v994 = !v968;
  if (v994) {
    introspect(JAM.policy.p16) {
      var v993 = expressionToCheck.search(/\][A-Za-z\|]*\]/)
    }
    v968 = v993 != -1;
  }
  var v942 = v968;
  var v970 = !v942;
  if (v970) {
    introspect(JAM.policy.p16) {
      var v969 = expressionToCheck.search(/\[\]/)
    }
    v942 = v969 != -1;
  }
  var v916 = v942;
  var v944 = !v916;
  if (v944) {
    introspect(JAM.policy.p16) {
      var v943 = expressionToCheck.search(/\/[A-Za-z\|]*\]/)
    }
    v916 = v943 != -1;
  }
  var v884 = v916;
  var v918 = !v884;
  if (v918) {
    introspect(JAM.policy.p16) {
      var v917 = expressionToCheck.search(/\[[A-Za-z\|]*\//)
    }
    v884 = v917 != -1;
  }
  var v845 = v884;
  var v886 = !v845;
  if (v886) {
    introspect(JAM.policy.p16) {
      var v885 = expressionToCheck.search(/\|\|/)
    }
    v845 = v885 != -1;
  }
  var v804 = v845;
  var v847 = !v804;
  if (v847) {
    introspect(JAM.policy.p16) {
      var v846 = expressionToCheck.search(/\/\|/)
    }
    v804 = v846 != -1;
  }
  var v746 = v804;
  var v806 = !v746;
  if (v806) {
    introspect(JAM.policy.p16) {
      var v805 = expressionToCheck.search(/\|\//)
    }
    v746 = v805 != -1;
  }
  var v673 = v746;
  var v748 = !v673;
  if (v748) {
    introspect(JAM.policy.p16) {
      var v747 = expressionToCheck.search(/\[.\]/)
    }
    v673 = v747 != -1;
  }
  var v582 = v673;
  var v675 = !v582;
  if (v675) {
    introspect(JAM.policy.p16) {
      var v674 = expressionToCheck.search(/\</)
    }
    v582 = v674 != -1;
  }
  var v423 = v582;
  var v584 = !v423;
  if (v584) {
    introspect(JAM.policy.p16) {
      var v583 = expressionToCheck.search(/\>/)
    }
    v423 = v583 != -1;
  }
  var v101 = v423;
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
function openWindow() {
  var title$$5 = "Translate";
  _openWindow(title$$5);
  return;
}
function _openWindow(title$$6) {
  var isColor = true;
  introspect(JAM.policy.p14) {
    outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  }
  outputWindow.focus();
  var v106 = outputWindow.document;
  var v676 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v585 = v676 + "<head>\n";
  var v424 = v585 + "<title>Sequence Manipulation Suite</title>\n";
  var v107 = v424 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  introspect(JAM.policy.p17) {
    v106.write(v107);
  }
  if (isColor) {
    var v108 = outputWindow.document;
    var v1058 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1037 = v1058 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1016 = v1037 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v995 = v1016 + "div.info {font-weight: bold}\n";
    var v971 = v995 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v945 = v971 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v919 = v945 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v887 = v919 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v848 = v887 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v807 = v848 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v749 = v807 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v677 = v749 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v586 = v677 + "td.many {color: #000000}\n";
    var v425 = v586 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v109 = v425 + "</style>\n";
    introspect(JAM.policy.p17) {
      v108.write(v109);
    }
  } else {
    var v110 = outputWindow.document;
    var v1079 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1059 = v1079 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1038 = v1059 + "div.title {display: none}\n";
    var v1017 = v1038 + "div.info {font-weight: bold}\n";
    var v996 = v1017 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v972 = v996 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v946 = v972 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v920 = v946 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v888 = v920 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v849 = v888 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v808 = v849 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v750 = v808 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v678 = v750 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v587 = v678 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v426 = v587 + "img {display: none}\n";
    var v111 = v426 + "</style>\n";
    introspect(JAM.policy.p17) {
      v110.write(v111);
    }
  }
  var v112 = outputWindow.document;
  var v679 = "</head>\n" + '<body class="main">\n';
  var v588 = v679 + '<div class="title">';
  var v427 = v588 + title$$6;
  var v113 = v427 + " results</div>\n";
  introspect(JAM.policy.p17) {
    v112.write(v113);
  }
  outputWindow.status = "Please Wait.";
  return;
}
function openWindowAlign(title$$7) {
  _openWindowAlign(title$$7);
  return;
}
function _openWindowAlign(title$$8) {
  var isBackground = true;
  introspect(JAM.policy.p14) {
    outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  }
  outputWindow.focus();
  var v114 = outputWindow.document;
  var v680 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v589 = v680 + "<head>\n";
  var v428 = v589 + "<title>Sequence Manipulation Suite</title>\n";
  var v115 = v428 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  introspect(JAM.policy.p17) {
    v114.write(v115);
  }
  if (isBackground) {
    var v116 = outputWindow.document;
    var v1060 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1039 = v1060 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1018 = v1039 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v997 = v1018 + "div.info {font-weight: bold}\n";
    var v973 = v997 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v947 = v973 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v921 = v947 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v889 = v921 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v850 = v889 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v809 = v850 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v751 = v809 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v681 = v751 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v590 = v681 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v429 = v590 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v117 = v429 + "</style>\n";
    introspect(JAM.policy.p17) {
      v116.write(v117);
    }
  } else {
    var v118 = outputWindow.document;
    var v1098 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1080 = v1098 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1061 = v1080 + "div.title {display: none}\n";
    var v1040 = v1061 + "div.info {font-weight: bold}\n";
    var v1019 = v1040 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v998 = v1019 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v974 = v998 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v948 = v974 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v922 = v948 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v890 = v922 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v851 = v890 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v810 = v851 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v752 = v810 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v682 = v752 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v591 = v682 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v430 = v591 + "img {display: none}\n";
    var v119 = v430 + "</style>\n";
    introspect(JAM.policy.p17) {
      v118.write(v119);
    }
  }
  var v120 = outputWindow.document;
  var v683 = "</head>\n" + '<body class="main">\n';
  var v592 = v683 + '<div class="title">';
  var v431 = v592 + title$$8;
  var v121 = v431 + " results</div>\n";
  introspect(JAM.policy.p17) {
    v120.write(v121);
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
    var v432 = dnaSequence$$1.search(/./)
  }
  var v122 = v432 != -1;
  if (v122) {
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
  introspect(JAM.policy.p17) {
    testArray.push(testString);
  }
  var v433 = testArray[0];
  var v126 = v433 != testString;
  if (v126) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  introspect(JAM.policy.p17) {
    var v434 = testString.search(re$$2)
  }
  var v127 = v434 == -1;
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
  introspect(JAM.policy.p15) {
    testString = testString.replace(/(\d)/g, v1);
  }
  var v129 = testString != "1X2X3X";
  if (v129) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false;
  }
  var testNum = 2489.8237;
  introspect(JAM.policy.p9) {
    var v435 = testNum.toFixed(3)
  }
  var v130 = v435 != 2489.824;
  if (v130) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  introspect(JAM.policy.p9) {
    var v436 = testNum.toPrecision(5)
  }
  var v131 = v436 != 2489.8;
  if (v131) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  introspect(JAM.policy.p16) {
    var v437 = theNumber$$1.search(/\d/)
  }
  var v132 = v437 == -1;
  if (v132) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  introspect(JAM.policy.p16) {
    var v753 = emblFile.search(/ID/)
  }
  var v684 = v753 == -1;
  var v755 = !v684;
  if (v755) {
    introspect(JAM.policy.p16) {
      var v754 = emblFile.search(/AC/)
    }
    v684 = v754 == -1;
  }
  var v593 = v684;
  var v686 = !v593;
  if (v686) {
    introspect(JAM.policy.p16) {
      var v685 = emblFile.search(/DE/)
    }
    v593 = v685 == -1;
  }
  var v438 = v593;
  var v595 = !v438;
  if (v595) {
    introspect(JAM.policy.p16) {
      var v594 = emblFile.search(/SQ/)
    }
    v438 = v594 == -1;
  }
  var v133 = v438;
  if (v133) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  introspect(JAM.policy.p16) {
    var v439 = theNumber$$2.search(/\d/)
  }
  var v134 = v439 == -1;
  if (v134) {
    alert("Please enter a number.");
    return false;
  }
  var v136 = theNumber$$2 > maxInput$$2;
  if (v136) {
    var v440 = "Please enter a number less than or equal to " + maxInput$$2;
    var v135 = v440 + ".";
    alert(v135);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  introspect(JAM.policy.p16) {
    var v441 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i)
  }
  var v137 = v441 != -1;
  if (v137) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  introspect(JAM.policy.p16) {
    var v442 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i)
  }
  var v138 = v442 != -1;
  if (v138) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  introspect(JAM.policy.p16) {
    var v756 = genBankFile.search(/LOCUS/)
  }
  var v687 = v756 == -1;
  var v758 = !v687;
  if (v758) {
    introspect(JAM.policy.p16) {
      var v757 = genBankFile.search(/DEFINITION/)
    }
    v687 = v757 == -1;
  }
  var v596 = v687;
  var v689 = !v596;
  if (v689) {
    introspect(JAM.policy.p16) {
      var v688 = genBankFile.search(/ACCESSION/)
    }
    v596 = v688 == -1;
  }
  var v443 = v596;
  var v598 = !v443;
  if (v598) {
    introspect(JAM.policy.p16) {
      var v597 = genBankFile.search(/ORIGIN/)
    }
    v443 = v597 == -1;
  }
  var v139 = v443;
  if (v139) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  introspect(JAM.policy.p16) {
    var v759 = genBankFile$$1.search(/LOCUS/)
  }
  var v690 = v759 == -1;
  var v761 = !v690;
  if (v761) {
    introspect(JAM.policy.p16) {
      var v760 = genBankFile$$1.search(/DEFINITION/)
    }
    v690 = v760 == -1;
  }
  var v599 = v690;
  var v692 = !v599;
  if (v692) {
    introspect(JAM.policy.p16) {
      var v691 = genBankFile$$1.search(/ACCESSION/)
    }
    v599 = v691 == -1;
  }
  var v444 = v599;
  var v601 = !v444;
  if (v601) {
    introspect(JAM.policy.p16) {
      var v600 = genBankFile$$1.search(/ORIGIN/)
    }
    v444 = v600 == -1;
  }
  var v140 = v444;
  if (v140) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  introspect(JAM.policy.p16) {
    var v445 = genBankFile$$1.search(/FEATURES {13}/)
  }
  var v141 = v445 == -1;
  if (v141) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  introspect(JAM.policy.p16) {
    var v762 = emblFile$$1.search(/ID/)
  }
  var v693 = v762 == -1;
  var v764 = !v693;
  if (v764) {
    introspect(JAM.policy.p16) {
      var v763 = emblFile$$1.search(/AC/)
    }
    v693 = v763 == -1;
  }
  var v602 = v693;
  var v695 = !v602;
  if (v695) {
    introspect(JAM.policy.p16) {
      var v694 = emblFile$$1.search(/DE/)
    }
    v602 = v694 == -1;
  }
  var v446 = v602;
  var v604 = !v446;
  if (v604) {
    introspect(JAM.policy.p16) {
      var v603 = emblFile$$1.search(/SQ/)
    }
    v446 = v603 == -1;
  }
  var v142 = v446;
  if (v142) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  introspect(JAM.policy.p16) {
    var v447 = emblFile$$1.search(/^FT/m)
  }
  var v143 = v447 == -1;
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
    var v448 = basePerLine / groupSize;
    var v147 = j$$6 <= v448;
    for (;v147;) {
      var v146 = k < groupSize;
      for (;v146;) {
        var v449 = k + i$$5;
        introspect(JAM.policy.p17) {
          var v145 = text$$10.charAt(v449)
        }
        lineOfText = lineOfText + v145;
        k = k + 1;
        v146 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v450 = basePerLine / groupSize;
      v147 = j$$6 <= v450;
    }
    var v148 = outputWindow.document;
    var v149 = lineOfText + "\n";
    introspect(JAM.policy.p17) {
      v148.write(v149);
    }
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
    var v451 = adjustment < 0;
    if (v451) {
      v451 = adjusted >= 0;
    }
    var v151 = v451;
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
    var v452 = basePerLine$$2 / groupSize$$2;
    var v158 = j$$7 <= v452;
    for (;v158;) {
      var v154 = k$$1 < groupSize$$2;
      for (;v154;) {
        var v453 = i$$6 + k$$1;
        var v152 = v453 >= stopBase$$2;
        if (v152) {
          break;
        }
        var v454 = k$$1 + i$$6;
        introspect(JAM.policy.p17) {
          var v153 = text$$12.charAt(v454)
        }
        lineOfText$$1 = lineOfText$$1 + v153;
        k$$1 = k$$1 + 1;
        v154 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v156 = numberPosition$$1 == "above";
      if (v156) {
        var v455 = adjustNumbering(i$$6, numberingAdjustment);
        var v155 = rightNum(v455, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v155;
      }
      var v157 = i$$6 >= stopBase$$2;
      if (v157) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v456 = basePerLine$$2 / groupSize$$2;
      v158 = j$$7 <= v456;
    }
    var v181 = numberPosition$$1 == "left";
    if (v181) {
      var v159 = outputWindow.document;
      var v696 = adjustNumbering(lineNum, numberingAdjustment);
      var v605 = rightNum(v696, "", 8, tabIn$$3);
      var v457 = v605 + lineOfText$$1;
      var v160 = v457 + "\n";
      introspect(JAM.policy.p17) {
        v159.write(v160);
      }
      var v164 = strands$$1 == "two";
      if (v164) {
        var v161 = outputWindow.document;
        var v697 = adjustNumbering(lineNum, numberingAdjustment);
        var v606 = rightNum(v697, "", 8, tabIn$$3);
        var v607 = complement(lineOfText$$1);
        var v458 = v606 + v607;
        var v162 = v458 + "\n";
        introspect(JAM.policy.p17) {
          v161.write(v162);
        }
        var v163 = outputWindow.document;
        introspect(JAM.policy.p11) {
          v163.write("\n");
        }
      }
    } else {
      var v180 = numberPosition$$1 == "right";
      if (v180) {
        var v165 = outputWindow.document;
        var v608 = adjustNumbering(i$$6, numberingAdjustment);
        var v459 = lineOfText$$1 + v608;
        var v166 = v459 + "\n";
        introspect(JAM.policy.p17) {
          v165.write(v166);
        }
        var v170 = strands$$1 == "two";
        if (v170) {
          var v167 = outputWindow.document;
          var v609 = complement(lineOfText$$1);
          var v610 = adjustNumbering(i$$6, numberingAdjustment);
          var v460 = v609 + v610;
          var v168 = v460 + "\n";
          introspect(JAM.policy.p17) {
            v167.write(v168);
          }
          var v169 = outputWindow.document;
          introspect(JAM.policy.p11) {
            v169.write("\n");
          }
        }
      } else {
        var v179 = numberPosition$$1 == "above";
        if (v179) {
          var v171 = outputWindow.document;
          var v172 = aboveNum + "\n";
          introspect(JAM.policy.p17) {
            v171.write(v172);
          }
          var v173 = outputWindow.document;
          var v174 = lineOfText$$1 + "\n";
          introspect(JAM.policy.p17) {
            v173.write(v174);
          }
          var v178 = strands$$1 == "two";
          if (v178) {
            var v175 = outputWindow.document;
            var v461 = complement(lineOfText$$1);
            var v176 = v461 + "\n";
            introspect(JAM.policy.p17) {
              v175.write(v176);
            }
            var v177 = outputWindow.document;
            introspect(JAM.policy.p11) {
              v177.write("\n");
            }
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
    var v462 = basePerLine$$3 / groupSize$$3;
    var v189 = j$$8 <= v462;
    for (;v189;) {
      var v185 = k$$2 < groupSize$$3;
      for (;v185;) {
        var v463 = i$$7 + k$$2;
        var v183 = v463 >= stopBase$$3;
        if (v183) {
          break;
        }
        var v464 = k$$2 + i$$7;
        introspect(JAM.policy.p17) {
          var v184 = text$$13.charAt(v464)
        }
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
      var v465 = basePerLine$$3 / groupSize$$3;
      v189 = j$$8 <= v465;
    }
    var v200 = numberPosition$$2 == "left";
    if (v200) {
      var v190 = outputWindow.document;
      var v611 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v466 = v611 + lineOfText$$2;
      var v191 = v466 + "\n";
      introspect(JAM.policy.p17) {
        v190.write(v191);
      }
    } else {
      var v199 = numberPosition$$2 == "right";
      if (v199) {
        var v192 = outputWindow.document;
        var v467 = lineOfText$$2 + i$$7;
        var v193 = v467 + "\n";
        introspect(JAM.policy.p17) {
          v192.write(v193);
        }
      } else {
        var v198 = numberPosition$$2 == "above";
        if (v198) {
          var v194 = outputWindow.document;
          var v195 = aboveNum$$1 + "\n";
          introspect(JAM.policy.p17) {
            v194.write(v195);
          }
          var v196 = outputWindow.document;
          var v197 = lineOfText$$2 + "\n";
          introspect(JAM.policy.p17) {
            v196.write(v197);
          }
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
  var v698 = sequence$$13.length;
  var v612 = v698 <= firstIndexToMutate;
  var v699 = !v612;
  if (v699) {
    v612 = lastIndexToMutate < 0;
  }
  var v468 = v612;
  var v613 = !v468;
  if (v613) {
    v468 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v202 = v468;
  if (v202) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v210 = i$$8 < numMut;
  for (;v210;) {
    maxNum = sequence$$13.length;
    var v469 = Math.random();
    var v203 = v469 * maxNum;
    introspect(JAM.policy.p16) {
      randNum = Math.floor(v203);
    }
    var v470 = randNum < firstIndexToMutate;
    var v614 = !v470;
    if (v614) {
      v470 = randNum > lastIndexToMutate;
    }
    var v204 = v470;
    if (v204) {
      numMut++;
      i$$8++;
      v210 = i$$8 < numMut;
      continue;
    }
    introspect(JAM.policy.p16) {
      currentChar = sequence$$13.charAt(randNum);
    }
    needNewChar = true;
    for (;needNewChar;) {
      var v471 = Math.random();
      var v472 = components$$1.length;
      var v205 = v471 * v472;
      introspect(JAM.policy.p16) {
        componentsIndex = Math.round(v205);
      }
      var v473 = components$$1.length;
      var v206 = componentsIndex == v473;
      if (v206) {
        componentsIndex = 0;
      }
      var v474 = components$$1[componentsIndex];
      var v207 = v474 != currentChar;
      if (v207) {
        needNewChar = false;
      }
    }
    introspect(JAM.policy.p13) {
      var v475 = sequence$$13.substring(0, randNum)
    }
    var v476 = components$$1[componentsIndex];
    var v208 = v475 + v476;
    var v477 = randNum + 1;
    var v478 = sequence$$13.length;
    introspect(JAM.policy.p27) {
      var v209 = sequence$$13.substring(v477, v478)
    }
    sequence$$13 = v208 + v209;
    i$$8++;
    v210 = i$$8 < numMut;
  }
  var v211 = outputWindow.document;
  var v212 = addReturns(sequence$$13);
  introspect(JAM.policy.p17) {
    v211.write(v212);
  }
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v217 = j$$9 < lengthOut$$1;
  for (;v217;) {
    var v479 = Math.random();
    var v480 = components$$2.length;
    var v213 = v479 * v480;
    introspect(JAM.policy.p16) {
      tempNum$$1 = Math.floor(v213);
    }
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v481 = sequence$$14.length;
    var v216 = v481 == 60;
    if (v216) {
      var v214 = outputWindow.document;
      var v215 = sequence$$14 + "\n";
      introspect(JAM.policy.p17) {
        v214.write(v215);
      }
      sequence$$14 = "";
    }
    j$$9++;
    v217 = j$$9 < lengthOut$$1;
  }
  var v218 = outputWindow.document;
  var v219 = sequence$$14 + "\n";
  introspect(JAM.policy.p17) {
    v218.write(v219);
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
  var v223 = dnaConformation == "circular";
  if (v223) {
    introspect(JAM.policy.p13) {
      var v220 = sequence$$15.substring(0, lookAhead)
    }
    shiftValue = v220.length;
    var v700 = sequence$$15.length;
    var v615 = v700 - lookAhead;
    var v616 = sequence$$15.length;
    introspect(JAM.policy.p27) {
      var v482 = sequence$$15.substring(v615, v616)
    }
    var v221 = v482 + sequence$$15;
    introspect(JAM.policy.p13) {
      var v222 = sequence$$15.substring(0, lookAhead)
    }
    sequence$$15 = v221 + v222;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v224 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v224.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  }
  var v225 = outputWindow.document;
  var v701 = '<tr><td class="title" width="200px">' + "Site:";
  var v617 = v701 + '</td><td class="title">';
  var v483 = v617 + "Positions:";
  var v226 = v483 + "</td></tr>\n";
  introspect(JAM.policy.p17) {
    v225.write(v226);
  }
  var i$$9 = 0;
  var v484 = arrayOfItems.length;
  var v242 = i$$9 < v484;
  for (;v242;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v485 = arrayOfItems[i$$9];
    introspect(JAM.policy.p16) {
      var v227 = v485.match(/\/.+\//)
    }
    matchExp = v227 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    var v702 = arrayOfItems[i$$9];
    introspect(JAM.policy.p16) {
      var v618 = v702.match(/\)\D*\d+/)
    }
    var v486 = v618.toString();
    introspect(JAM.policy.p15) {
      var v228 = v486.replace(/\)\D*/, "")
    }
    cutDistance = parseFloat(v228);
    introspect(JAM.policy.p17) {
      var v234 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    for (;v234;) {
      var v229 = matchExp.lastIndex;
      matchPosition = v229 - cutDistance;
      var v487 = matchPosition >= lowerLimit;
      if (v487) {
        v487 = matchPosition < upperLimit;
      }
      var v232 = v487;
      if (v232) {
        timesFound++;
        var v230 = tempString$$1 + ", ";
        var v488 = matchPosition - shiftValue;
        var v231 = v488 + 1;
        tempString$$1 = v230 + v231;
      }
      var v489 = matchExp.lastIndex;
      var v619 = RegExp.lastMatch;
      var v490 = v619.length;
      var v233 = v489 - v490;
      matchExp.lastIndex = v233 + 1;
      introspect(JAM.policy.p17) {
        v234 = matchArray$$1 = matchExp.exec(sequence$$15);
      }
    }
    introspect(JAM.policy.p16) {
      var v491 = tempString$$1.search(/\d/)
    }
    var v235 = v491 != -1;
    if (v235) {
      introspect(JAM.policy.p15) {
        tempString$$1 = tempString$$1.replace(/none,\s*/, "");
      }
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
    var v891 = '<tr><td class="' + backGroundClass;
    var v852 = v891 + '">';
    var v949 = arrayOfItems[i$$9];
    introspect(JAM.policy.p16) {
      var v923 = v949.match(/\([^\(]+\)/)
    }
    var v892 = v923.toString();
    introspect(JAM.policy.p15) {
      var v853 = v892.replace(/\(|\)/g, "")
    }
    var v811 = v852 + v853;
    var v765 = v811 + '</td><td class="';
    var v703 = v765 + backGroundClass;
    var v620 = v703 + '">';
    var v492 = v620 + tempString$$1;
    var v241 = v492 + "</td></tr>\n";
    introspect(JAM.policy.p17) {
      v240.write(v241);
    }
    timesFound = 0;
    i$$9++;
    var v493 = arrayOfItems.length;
    v242 = i$$9 < v493;
  }
  var v243 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v243.write("</tbody></table>\n");
  }
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v244 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v244.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  }
  var v245 = outputWindow.document;
  var v812 = '<tr><td class="title">' + "Pattern:";
  var v766 = v812 + '</td><td class="title">';
  var v704 = v766 + "Times found:";
  var v621 = v704 + '</td><td class="title">';
  var v494 = v621 + "Percentage:";
  var v246 = v494 + "</td></tr>\n";
  introspect(JAM.policy.p17) {
    v245.write(v246);
  }
  var i$$10 = 0;
  var v495 = arrayOfItems$$1.length;
  var v255 = i$$10 < v495;
  for (;v255;) {
    var tempNumber = 0;
    var v496 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p16) {
      var v247 = v496.match(/\/[^\/]+\//)
    }
    var matchExp$$1 = v247 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    introspect(JAM.policy.p17) {
      var v497 = sequence$$16.search(matchExp$$1)
    }
    var v249 = v497 != -1;
    if (v249) {
      introspect(JAM.policy.p17) {
        var v248 = sequence$$16.match(matchExp$$1)
      }
      tempNumber = v248.length;
    }
    var percentage = 0;
    var v622 = originalLength + 1;
    var v767 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p16) {
      var v705 = v767.match(/\d+/)
    }
    var v623 = parseFloat(v705);
    var v498 = v622 - v623;
    var v252 = v498 > 0;
    if (v252) {
      var v250 = 100 * tempNumber;
      var v499 = originalLength + 1;
      var v706 = arrayOfItems$$1[i$$10];
      introspect(JAM.policy.p16) {
        var v624 = v706.match(/\d+/)
      }
      var v500 = parseFloat(v624);
      var v251 = v499 - v500;
      percentage = v250 / v251;
    }
    var v253 = outputWindow.document;
    var v950 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p16) {
      var v924 = v950.match(/\([^\(]+\)\b/)
    }
    var v893 = v924.toString();
    introspect(JAM.policy.p15) {
      var v854 = v893.replace(/\(|\)/g, "")
    }
    var v813 = "<tr><td>" + v854;
    var v768 = v813 + "</td><td>";
    var v707 = v768 + tempNumber;
    var v625 = v707 + "</td><td>";
    introspect(JAM.policy.p9) {
      var v626 = percentage.toFixed(2)
    }
    var v501 = v625 + v626;
    var v254 = v501 + "</td></tr>\n";
    introspect(JAM.policy.p17) {
      v253.write(v254);
    }
    i$$10++;
    var v502 = arrayOfItems$$1.length;
    v255 = i$$10 < v502;
  }
  var v256 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v256.write("</tbody></table>\n");
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
  var v503 = sequence$$17.length;
  var v263 = v503 > 0;
  for (;v263;) {
    maxNum$$1 = sequence$$17.length;
    var v504 = Math.random();
    var v257 = v504 * maxNum$$1;
    introspect(JAM.policy.p16) {
      randNum$$1 = Math.floor(v257);
    }
    introspect(JAM.policy.p16) {
      tempChar$$2 = sequence$$17.charAt(randNum$$1);
    }
    tempSeq = tempSeq + tempChar$$2;
    introspect(JAM.policy.p13) {
      tempString1 = sequence$$17.substring(0, randNum$$1);
    }
    var v258 = randNum$$1 + 1;
    var v259 = sequence$$17.length;
    introspect(JAM.policy.p15) {
      tempString2 = sequence$$17.substring(v258, v259);
    }
    sequence$$17 = tempString1 + tempString2;
    var v505 = tempSeq.length;
    var v262 = v505 == 60;
    if (v262) {
      var v260 = outputWindow.document;
      var v261 = tempSeq + "\n";
      introspect(JAM.policy.p17) {
        v260.write(v261);
      }
      tempSeq = "";
    }
    var v506 = sequence$$17.length;
    v263 = v506 > 0;
  }
  var v264 = outputWindow.document;
  var v265 = tempSeq + "\n";
  introspect(JAM.policy.p17) {
    v264.write(v265);
  }
  return true;
}
function getGeneticCodeString(type$$25) {
  var v627 = type$$25.toLowerCase();
  var v507 = v627 == "standard";
  var v629 = !v507;
  if (v629) {
    var v628 = type$$25.toLowerCase();
    v507 = v628 == "transl_table=1";
  }
  var v267 = v507;
  if (v267) {
    var v1133 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1116 = v1133 + "/ga[tcuy]/=D,";
    var v1099 = v1116 + "/ga[agr]/=E,";
    var v1081 = v1099 + "/[tu][tu][tcuy]/=F,";
    var v1062 = v1081 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1041 = v1062 + "/ca[tcuy]/=H,";
    var v1020 = v1041 + "/a[tu][atcuwmhy]/=I,";
    var v999 = v1020 + "/aa[agr]/=K,";
    var v975 = v999 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v951 = v975 + "/a[tu]g/=M,";
    var v925 = v951 + "/aa[tucy]/=N,";
    var v894 = v925 + "/cc[acgturyswkmbdhvn]/=P,";
    var v855 = v894 + "/ca[agr]/=Q,";
    var v814 = v855 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v769 = v814 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v708 = v769 + "/ac[acgturyswkmbdhvn]/=T,";
    var v630 = v708 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v508 = v630 + "/[tu]gg/=W,";
    var v266 = v508 + "/[tu]a[ctuy]/=Y,";
    return v266 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*";
  }
  var v509 = type$$25.toLowerCase();
  var v269 = v509 == "transl_table=2";
  if (v269) {
    var v1134 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1117 = v1134 + "/ga[tcuy]/=D,";
    var v1100 = v1117 + "/ga[agr]/=E,";
    var v1082 = v1100 + "/[tu][tu][tcuy]/=F,";
    var v1063 = v1082 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1042 = v1063 + "/ca[tcuy]/=H,";
    var v1021 = v1042 + "/a[tu][tcuy]/=I,";
    var v1000 = v1021 + "/aa[agr]/=K,";
    var v976 = v1000 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v952 = v976 + "/a[tu][agr]/=M,";
    var v926 = v952 + "/aa[tucy]/=N,";
    var v895 = v926 + "/cc[acgturyswkmbdhvn]/=P,";
    var v856 = v895 + "/ca[agr]/=Q,";
    var v815 = v856 + "/cg[acgturyswkmbdhvn]/=R,";
    var v770 = v815 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v709 = v770 + "/ac[acgturyswkmbdhvn]/=T,";
    var v631 = v709 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v510 = v631 + "/[tu]g[agr]/=W,";
    var v268 = v510 + "/[tu]a[ctuy]/=Y,";
    return v268 + "/[tu]a[agr]|ag[agr]/=*";
  }
  var v511 = type$$25.toLowerCase();
  var v271 = v511 == "transl_table=3";
  if (v271) {
    var v1135 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1118 = v1135 + "/ga[tcuy]/=D,";
    var v1101 = v1118 + "/ga[agr]/=E,";
    var v1083 = v1101 + "/[tu][tu][tcuy]/=F,";
    var v1064 = v1083 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1043 = v1064 + "/ca[tcuy]/=H,";
    var v1022 = v1043 + "/a[tu][tcuy]/=I,";
    var v1001 = v1022 + "/aa[agr]/=K,";
    var v977 = v1001 + "/[tu][tu][agr]/=L,";
    var v953 = v977 + "/a[tu][agr]/=M,";
    var v927 = v953 + "/aa[tucy]/=N,";
    var v896 = v927 + "/cc[acgturyswkmbdhvn]/=P,";
    var v857 = v896 + "/ca[agr]/=Q,";
    var v816 = v857 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v771 = v816 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v710 = v771 + "/ac[acgturyswkmbdhvn]|c[tu][acgturyswkmbdhvn]/=T,";
    var v632 = v710 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v512 = v632 + "/[tu]g[agr]/=W,";
    var v270 = v512 + "/[tu]a[ctuy]/=Y,";
    return v270 + "/[tu]a[agr]/=*";
  }
  var v513 = type$$25.toLowerCase();
  var v273 = v513 == "transl_table=4";
  if (v273) {
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
    var v514 = v633 + "/[tu]g[agr]/=W,";
    var v272 = v514 + "/[tu]a[ctuy]/=Y,";
    return v272 + "/[tu]a[agr]/=*";
  }
  var v515 = type$$25.toLowerCase();
  var v275 = v515 == "transl_table=5";
  if (v275) {
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
    var v773 = v818 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v712 = v773 + "/ac[acgturyswkmbdhvn]/=T,";
    var v634 = v712 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v516 = v634 + "/[tu]g[agr]/=W,";
    var v274 = v516 + "/[tu]a[ctuy]/=Y,";
    return v274 + "/[tu]a[agr]/=*";
  }
  var v517 = type$$25.toLowerCase();
  var v277 = v517 == "transl_table=6";
  if (v277) {
    var v1138 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1121 = v1138 + "/ga[tcuy]/=D,";
    var v1104 = v1121 + "/ga[agr]/=E,";
    var v1086 = v1104 + "/[tu][tu][tcuy]/=F,";
    var v1067 = v1086 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1046 = v1067 + "/ca[tcuy]/=H,";
    var v1025 = v1046 + "/a[tu][atcuwmhy]/=I,";
    var v1004 = v1025 + "/aa[agr]/=K,";
    var v980 = v1004 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v956 = v980 + "/a[tu]g/=M,";
    var v930 = v956 + "/aa[tucy]/=N,";
    var v899 = v930 + "/cc[acgturyswkmbdhvn]/=P,";
    var v860 = v899 + "/ca[agr]|[tu]a[agr]|[tcuy]a[agr]/=Q,";
    var v819 = v860 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v774 = v819 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v713 = v774 + "/ac[acgturyswkmbdhvn]/=T,";
    var v635 = v713 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v518 = v635 + "/[tu]gg/=W,";
    var v276 = v518 + "/[tu]a[ctuy]/=Y,";
    return v276 + "/[tu]ga/=*";
  }
  var v519 = type$$25.toLowerCase();
  var v279 = v519 == "transl_table=9";
  if (v279) {
    var v1139 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1122 = v1139 + "/ga[tcuy]/=D,";
    var v1105 = v1122 + "/ga[agr]/=E,";
    var v1087 = v1105 + "/[tu][tu][tcuy]/=F,";
    var v1068 = v1087 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1047 = v1068 + "/ca[tcuy]/=H,";
    var v1026 = v1047 + "/a[tu][atcuwmhy]/=I,";
    var v1005 = v1026 + "/aag/=K,";
    var v981 = v1005 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v957 = v981 + "/a[tu]g/=M,";
    var v931 = v957 + "/aa[atcuwmhy]/=N,";
    var v900 = v931 + "/cc[acgturyswkmbdhvn]/=P,";
    var v861 = v900 + "/ca[agr]/=Q,";
    var v820 = v861 + "/cg[acgturyswkmbdhvn]/=R,";
    var v775 = v820 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v714 = v775 + "/ac[acgturyswkmbdhvn]/=T,";
    var v636 = v714 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v520 = v636 + "/[tu]g[agr]/=W,";
    var v278 = v520 + "/[tu]a[ctuy]/=Y,";
    return v278 + "/[tu]a[agr]/=*";
  }
  var v521 = type$$25.toLowerCase();
  var v281 = v521 == "transl_table=10";
  if (v281) {
    var v1140 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[atcuwmhy]/=C,";
    var v1123 = v1140 + "/ga[tcuy]/=D,";
    var v1106 = v1123 + "/ga[agr]/=E,";
    var v1088 = v1106 + "/[tu][tu][tcuy]/=F,";
    var v1069 = v1088 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1048 = v1069 + "/ca[tcuy]/=H,";
    var v1027 = v1048 + "/a[tu][atcuwmhy]/=I,";
    var v1006 = v1027 + "/aa[agr]/=K,";
    var v982 = v1006 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v958 = v982 + "/a[tu]g/=M,";
    var v932 = v958 + "/aa[tucy]/=N,";
    var v901 = v932 + "/cc[acgturyswkmbdhvn]/=P,";
    var v862 = v901 + "/ca[agr]/=Q,";
    var v821 = v862 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v776 = v821 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v715 = v776 + "/ac[acgturyswkmbdhvn]/=T,";
    var v637 = v715 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v522 = v637 + "/[tu]gg/=W,";
    var v280 = v522 + "/[tu]a[ctuy]/=Y,";
    return v280 + "/[tu]a[agr]/=*";
  }
  var v523 = type$$25.toLowerCase();
  var v283 = v523 == "transl_table=11";
  if (v283) {
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
    var v863 = v902 + "/ca[agr]/=Q,";
    var v822 = v863 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v777 = v822 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v716 = v777 + "/ac[acgturyswkmbdhvn]/=T,";
    var v638 = v716 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v524 = v638 + "/[tu]gg/=W,";
    var v282 = v524 + "/[tu]a[ctuy]/=Y,";
    return v282 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*";
  }
  var v525 = type$$25.toLowerCase();
  var v285 = v525 == "transl_table=12";
  if (v285) {
    var v1142 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1125 = v1142 + "/ga[tcuy]/=D,";
    var v1108 = v1125 + "/ga[agr]/=E,";
    var v1090 = v1108 + "/[tu][tu][tcuy]/=F,";
    var v1071 = v1090 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1050 = v1071 + "/ca[tcuy]/=H,";
    var v1029 = v1050 + "/a[tu][atcuwmhy]/=I,";
    var v1008 = v1029 + "/aa[agr]/=K,";
    var v984 = v1008 + "/c[tu][atcuwmhy]|[tu][tu][agr]|[ctuy][tu]a/=L,";
    var v960 = v984 + "/a[tu]g/=M,";
    var v934 = v960 + "/aa[tucy]/=N,";
    var v903 = v934 + "/cc[acgturyswkmbdhvn]/=P,";
    var v864 = v903 + "/ca[agr]/=Q,";
    var v823 = v864 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v778 = v823 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]|c[tu]g/=S,";
    var v717 = v778 + "/ac[acgturyswkmbdhvn]/=T,";
    var v639 = v717 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v526 = v639 + "/[tu]gg/=W,";
    var v284 = v526 + "/[tu]a[ctuy]/=Y,";
    return v284 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*";
  }
  var v527 = type$$25.toLowerCase();
  var v287 = v527 == "transl_table=13";
  if (v287) {
    var v1143 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1126 = v1143 + "/ga[tcuy]/=D,";
    var v1109 = v1126 + "/ga[agr]/=E,";
    var v1091 = v1109 + "/[tu][tu][tcuy]/=F,";
    var v1072 = v1091 + "/gg[acgturyswkmbdhvn]|ag[agr]|[agr]g[agr]/=G,";
    var v1051 = v1072 + "/ca[tcuy]/=H,";
    var v1030 = v1051 + "/a[tu][tcuy]/=I,";
    var v1009 = v1030 + "/aa[agr]/=K,";
    var v985 = v1009 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v961 = v985 + "/a[tu][agr]/=M,";
    var v935 = v961 + "/aa[tucy]/=N,";
    var v904 = v935 + "/cc[acgturyswkmbdhvn]/=P,";
    var v865 = v904 + "/ca[agr]/=Q,";
    var v824 = v865 + "/cg[acgturyswkmbdhvn]/=R,";
    var v779 = v824 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v718 = v779 + "/ac[acgturyswkmbdhvn]/=T,";
    var v640 = v718 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v528 = v640 + "/[tu]g[agr]/=W,";
    var v286 = v528 + "/[tu]a[ctuy]/=Y,";
    return v286 + "/[tu]a[agr]/=*";
  }
  var v529 = type$$25.toLowerCase();
  var v289 = v529 == "transl_table=14";
  if (v289) {
    var v1144 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1127 = v1144 + "/ga[tcuy]/=D,";
    var v1110 = v1127 + "/ga[agr]/=E,";
    var v1092 = v1110 + "/[tu][tu][tcuy]/=F,";
    var v1073 = v1092 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1052 = v1073 + "/ca[tcuy]/=H,";
    var v1031 = v1052 + "/a[tu][atcuwmhy]/=I,";
    var v1010 = v1031 + "/aag/=K,";
    var v986 = v1010 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v962 = v986 + "/a[tu]g/=M,";
    var v936 = v962 + "/aa[atcuwmhy]/=N,";
    var v905 = v936 + "/cc[acgturyswkmbdhvn]/=P,";
    var v866 = v905 + "/ca[agr]/=Q,";
    var v825 = v866 + "/cg[acgturyswkmbdhvn]/=R,";
    var v780 = v825 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v719 = v780 + "/ac[acgturyswkmbdhvn]/=T,";
    var v641 = v719 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v530 = v641 + "/[tu]g[agr]/=W,";
    var v288 = v530 + "/[tu]a[atcuwmhy]/=Y,";
    return v288 + "/[tu]ag/=*";
  }
  var v531 = type$$25.toLowerCase();
  var v291 = v531 == "transl_table=15";
  if (v291) {
    var v1145 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1128 = v1145 + "/ga[tcuy]/=D,";
    var v1111 = v1128 + "/ga[agr]/=E,";
    var v1093 = v1111 + "/[tu][tu][tcuy]/=F,";
    var v1074 = v1093 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1053 = v1074 + "/ca[tcuy]/=H,";
    var v1032 = v1053 + "/a[tu][atcuwmhy]/=I,";
    var v1011 = v1032 + "/aa[agr]/=K,";
    var v987 = v1011 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v963 = v987 + "/a[tu]g/=M,";
    var v937 = v963 + "/aa[tucy]/=N,";
    var v906 = v937 + "/cc[acgturyswkmbdhvn]/=P,";
    var v867 = v906 + "/ca[agr]|[tu]ag|[tcuy]ag/=Q,";
    var v826 = v867 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v781 = v826 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v720 = v781 + "/ac[acgturyswkmbdhvn]/=T,";
    var v642 = v720 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v532 = v642 + "/[tu]gg/=W,";
    var v290 = v532 + "/[tu]a[ctuy]/=Y,";
    return v290 + "/[tu][agr]a/=*";
  }
  var v533 = type$$25.toLowerCase();
  var v293 = v533 == "transl_table=16";
  if (v293) {
    var v1146 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1129 = v1146 + "/ga[tcuy]/=D,";
    var v1112 = v1129 + "/ga[agr]/=E,";
    var v1094 = v1112 + "/[tu][tu][tcuy]/=F,";
    var v1075 = v1094 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1054 = v1075 + "/ca[tcuy]/=H,";
    var v1033 = v1054 + "/a[tu][atcuwmhy]/=I,";
    var v1012 = v1033 + "/aa[agr]/=K,";
    var v988 = v1012 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]|[tu]ag|[tu][atuw]g/=L,";
    var v964 = v988 + "/a[tu]g/=M,";
    var v938 = v964 + "/aa[tucy]/=N,";
    var v907 = v938 + "/cc[acgturyswkmbdhvn]/=P,";
    var v868 = v907 + "/ca[agr]/=Q,";
    var v827 = v868 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v782 = v827 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v721 = v782 + "/ac[acgturyswkmbdhvn]/=T,";
    var v643 = v721 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v534 = v643 + "/[tu]gg/=W,";
    var v292 = v534 + "/[tu]a[ctuy]/=Y,";
    return v292 + "/[tu][agr]a/=*";
  }
  var v535 = type$$25.toLowerCase();
  var v295 = v535 == "transl_table=21";
  if (v295) {
    var v1147 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1130 = v1147 + "/ga[tcuy]/=D,";
    var v1113 = v1130 + "/ga[agr]/=E,";
    var v1095 = v1113 + "/[tu][tu][tcuy]/=F,";
    var v1076 = v1095 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1055 = v1076 + "/ca[tcuy]/=H,";
    var v1034 = v1055 + "/a[tu][tcuy]/=I,";
    var v1013 = v1034 + "/aag/=K,";
    var v989 = v1013 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v965 = v989 + "/a[tu][agr]/=M,";
    var v939 = v965 + "/aa[atcuwmhy]/=N,";
    var v908 = v939 + "/cc[acgturyswkmbdhvn]/=P,";
    var v869 = v908 + "/ca[agr]/=Q,";
    var v828 = v869 + "/cg[acgturyswkmbdhvn]/=R,";
    var v783 = v828 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v722 = v783 + "/ac[acgturyswkmbdhvn]/=T,";
    var v644 = v722 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v536 = v644 + "/[tu]g[agr]/=W,";
    var v294 = v536 + "/[tu]a[ctuy]/=Y,";
    return v294 + "/[tu]a[agr]/=*";
  }
  var v537 = type$$25.toLowerCase();
  var v297 = v537 == "transl_table=22";
  if (v297) {
    var v1148 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1131 = v1148 + "/ga[tcuy]/=D,";
    var v1114 = v1131 + "/ga[agr]/=E,";
    var v1096 = v1114 + "/[tu][tu][tcuy]/=F,";
    var v1077 = v1096 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1056 = v1077 + "/ca[tcuy]/=H,";
    var v1035 = v1056 + "/a[tu][atcuwmhy]/=I,";
    var v1014 = v1035 + "/aa[agr]/=K,";
    var v990 = v1014 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]|[tu]ag|[tu][atuw]g/=L,";
    var v966 = v990 + "/a[tu]g/=M,";
    var v940 = v966 + "/aa[tucy]/=N,";
    var v909 = v940 + "/cc[acgturyswkmbdhvn]/=P,";
    var v870 = v909 + "/ca[agr]/=Q,";
    var v829 = v870 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v784 = v829 + "/[tu]c[cgtyskb]|ag[ct]/=S,";
    var v723 = v784 + "/ac[acgturyswkmbdhvn]/=T,";
    var v645 = v723 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v538 = v645 + "/[tu]gg/=W,";
    var v296 = v538 + "/[tu]a[ctuy]/=Y,";
    return v296 + "/[tu][agcrsmv]a/=*";
  }
  var v539 = type$$25.toLowerCase();
  var v299 = v539 == "transl_table=23";
  if (v299) {
    var v1149 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1132 = v1149 + "/ga[tcuy]/=D,";
    var v1115 = v1132 + "/ga[agr]/=E,";
    var v1097 = v1115 + "/[tu][tu][tcuy]/=F,";
    var v1078 = v1097 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1057 = v1078 + "/ca[tcuy]/=H,";
    var v1036 = v1057 + "/a[tu][atcuwmhy]/=I,";
    var v1015 = v1036 + "/aa[agr]/=K,";
    var v991 = v1015 + "/c[tu][acgturyswkmbdhvn]|[ctuy][tu]g/=L,";
    var v967 = v991 + "/a[tu]g/=M,";
    var v941 = v967 + "/aa[tucy]/=N,";
    var v910 = v941 + "/cc[acgturyswkmbdhvn]/=P,";
    var v871 = v910 + "/ca[agr]/=Q,";
    var v830 = v871 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v785 = v830 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v724 = v785 + "/ac[acgturyswkmbdhvn]/=T,";
    var v646 = v724 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v540 = v646 + "/[tu]gg/=W,";
    var v298 = v540 + "/[tu]a[ctuy]/=Y,";
    return v298 + "/[tu]a[agr]|[tu]ga|[tu][agtrwkd]a/=*";
  }
  return true;
}
function translateDna(theDocument) {
  translate(theDocument);
  return true;
}
function translate(theDocument$$1) {
  var newDna = "";
  var title$$9 = "";
  var maxInput$$3 = 2E5;
  var v541 = testScript();
  var v300 = v541 == false;
  if (v300) {
    return;
  }
  var v872 = theDocument$$1.forms;
  var v831 = v872[0];
  var v786 = v831.elements;
  var v725 = v786[6];
  var v647 = v725.options;
  var v873 = theDocument$$1.forms;
  var v832 = v873[0];
  var v787 = v832.elements;
  var v726 = v787[6];
  var v648 = v726.selectedIndex;
  var v542 = v647[v648];
  var v301 = v542.value;
  var geneticCode = getGeneticCodeString(v301);
  var v874 = theDocument$$1.forms;
  var v833 = v874[0];
  var v788 = v833.elements;
  var v727 = v788[0];
  var v649 = checkFormElement(v727);
  var v543 = v649 == false;
  var v651 = !v543;
  if (v651) {
    var v911 = theDocument$$1.forms;
    var v875 = v911[0];
    var v834 = v875.elements;
    var v789 = v834[0];
    var v728 = v789.value;
    var v650 = checkSequenceLength(v728, maxInput$$3);
    v543 = v650 == false;
  }
  var v302 = v543;
  if (v302) {
    return;
  }
  introspect(JAM.policy.p16) {
    geneticCode = geneticCode.split(/,/);
  }
  var v544 = checkGeneticCode(geneticCode);
  var v303 = v544 == false;
  if (v303) {
    return;
  }
  var v835 = theDocument$$1.forms;
  var v790 = v835[0];
  var v729 = v790.elements;
  var v652 = v729[4];
  var v545 = v652.options;
  var v836 = theDocument$$1.forms;
  var v791 = v836[0];
  var v730 = v791.elements;
  var v653 = v730[4];
  var v546 = v653.selectedIndex;
  var v304 = v545[v546];
  var rfText = v304.value;
  var v912 = theDocument$$1.forms;
  var v876 = v912[0];
  var v837 = v876.elements;
  var v792 = v837[4];
  var v731 = v792.options;
  var v913 = theDocument$$1.forms;
  var v877 = v913[0];
  var v838 = v877.elements;
  var v793 = v838[4];
  var v732 = v793.selectedIndex;
  var v654 = v731[v732];
  var v547 = v654.value;
  introspect(JAM.policy.p16) {
    var v306 = v547.match(/^\d+$/)
  }
  if (v306) {
    rfText++;
  } else {
    var v914 = theDocument$$1.forms;
    var v878 = v914[0];
    var v839 = v878.elements;
    var v794 = v839[4];
    var v733 = v794.options;
    var v915 = theDocument$$1.forms;
    var v879 = v915[0];
    var v840 = v879.elements;
    var v795 = v840[4];
    var v734 = v795.selectedIndex;
    var v655 = v733[v734];
    var v548 = v655.value;
    var v305 = '"' + v548;
    rfText = v305 + '"';
  }
  openWindow();
  openPre();
  var v796 = theDocument$$1.forms;
  var v735 = v796[0];
  var v656 = v735.elements;
  var v549 = v656[0];
  var v307 = v549.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v307);
  var i$$11 = 0;
  var v550 = arrayOfFasta$$1.length;
  var v315 = i$$11 < v550;
  for (;v315;) {
    var v308 = arrayOfFasta$$1[i$$11];
    newDna = getSequenceFromFasta(v308);
    var v309 = arrayOfFasta$$1[i$$11];
    title$$9 = getTitleFromFasta(v309);
    newDna = removeNonDna(newDna);
    var v310 = outputWindow.document;
    var v736 = "&gt;rf " + rfText;
    var v657 = v736 + " ";
    var v551 = v657 + title$$9;
    var v311 = v551 + "\n";
    introspect(JAM.policy.p17) {
      v310.write(v311);
    }
    var v880 = theDocument$$1.forms;
    var v841 = v880[0];
    var v797 = v841.elements;
    var v737 = v797[4];
    var v658 = v737.options;
    var v881 = theDocument$$1.forms;
    var v842 = v881[0];
    var v798 = v842.elements;
    var v738 = v798[4];
    var v659 = v738.selectedIndex;
    var v552 = v658[v659];
    var v312 = v552.value;
    var v882 = theDocument$$1.forms;
    var v843 = v882[0];
    var v799 = v843.elements;
    var v739 = v799[5];
    var v660 = v739.options;
    var v883 = theDocument$$1.forms;
    var v844 = v883[0];
    var v800 = v844.elements;
    var v740 = v800[5];
    var v661 = v740.selectedIndex;
    var v553 = v660[v661];
    var v313 = v553.value;
    writeTranslation(newDna, geneticCode, v312, v313);
    var v314 = outputWindow.document;
    introspect(JAM.policy.p11) {
      v314.write("\n\n");
    }
    i$$11++;
    var v554 = arrayOfFasta$$1.length;
    v315 = i$$11 < v554;
  }
  closePre();
  closeWindow();
  return;
}
function writeTranslation(dnaSequence$$3, geneticCode$$1, startPos, strand) {
  function v2(str$$8, p1$$2, offset$$10, s$$4) {
    var v316 = " " + p1$$2;
    return v316 + " ";
  }
  var geneticCodeMatchExp$$2 = getGeneticCodeMatchExp(geneticCode$$1);
  var geneticCodeMatchResult$$2 = getGeneticCodeMatchResult(geneticCode$$1);
  var v318 = strand == "reverse";
  if (v318) {
    var v317 = complement(dnaSequence$$3);
    dnaSequence$$3 = reverse(v317);
  }
  var v321 = startPos == "uppercase";
  if (v321) {
    introspect(JAM.policy.p15) {
      dnaSequence$$3 = dnaSequence$$3.replace(/[a-z]/g, "");
    }
  } else {
    var v319 = parseInt(startPos);
    var v320 = dnaSequence$$3.length;
    introspect(JAM.policy.p15) {
      dnaSequence$$3 = dnaSequence$$3.substring(v319, v320);
    }
  }
  introspect(JAM.policy.p15) {
    var v662 = dnaSequence$$3.replace(/[^A-Za-z]/g, "")
  }
  var v555 = v662.length;
  var v322 = v555 < 3;
  if (v322) {
    return;
  }
  introspect(JAM.policy.p15) {
    dnaSequence$$3 = dnaSequence$$3.replace(/(...)/g, v2);
  }
  var i$$12 = 0;
  var v556 = geneticCodeMatchExp$$2.length;
  var v325 = i$$12 < v556;
  for (;v325;) {
    var v323 = geneticCodeMatchExp$$2[i$$12];
    var v324 = geneticCodeMatchResult$$2[i$$12];
    introspect(JAM.policy.p27) {
      dnaSequence$$3 = dnaSequence$$3.replace(v323, v324);
    }
    i$$12++;
    var v557 = geneticCodeMatchExp$$2.length;
    v325 = i$$12 < v557;
  }
  introspect(JAM.policy.p15) {
    dnaSequence$$3 = dnaSequence$$3.replace(/\S{3}/g, "X");
  }
  introspect(JAM.policy.p15) {
    dnaSequence$$3 = dnaSequence$$3.replace(/\s\S{1,2}$/, "");
  }
  introspect(JAM.policy.p15) {
    dnaSequence$$3 = dnaSequence$$3.replace(/\s/g, "");
  }
  var v326 = outputWindow.document;
  var v327 = addReturns(dnaSequence$$3);
  introspect(JAM.policy.p17) {
    v326.write(v327);
  }
  return;
}
document.onload = v3;
introspect(JAM.policy.p11) {
  var v328 = document.getElementById("submitbtn")
}
v328.onclick = v4;
introspect(JAM.policy.p11) {
  var v329 = document.getElementById("clearbtn")
}
v329.onclick = v5
