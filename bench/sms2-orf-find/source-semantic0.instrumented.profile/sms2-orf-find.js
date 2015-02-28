
JAM.startProfile('load');
function v5() {
  var v722 = document.forms;
  var v594 = v722[0];
  var v348 = v594.elements;
  var v6 = v348[0];
  v6.value = " ";
  var v723 = document.forms;
  var v595 = v723[0];
  var v349 = v595.elements;
  var v7 = v349[4];
  v7.value = " ";
  return;
}
function v4() {
  try {
    orfFind();
  } catch (e$$5) {
    var v8 = "The following error was encountered: " + e$$5;
    alert(v8);
  }
  return;
}
function v3() {
  var v350 = document.main_form;
  var v9 = v350.main_submit;
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
  var v351 = arrayOfSequences.length;
  var v11 = v351 < 2;
  if (v11) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v352 = arrayOfTitles.length;
  var v13 = i$$1 < v352;
  for (;v13;) {
    var v816 = arrayOfTitles[i$$1];
    introspect(JAM.policy.p16) {
      var v724 = v816.search(/\S/)
    }
    var v596 = v724 == -1;
    var v726 = !v596;
    if (v726) {
      var v817 = arrayOfSequences[i$$1];
      introspect(JAM.policy.p16) {
        var v725 = v817.search(/\S/)
      }
      v596 = v725 == -1;
    }
    var v353 = v596;
    var v598 = !v353;
    if (v598) {
      var v727 = arrayOfSequences[i$$1];
      var v597 = v727.length;
      v353 = v597 != lengthOfAlign;
    }
    var v12 = v353;
    if (v12) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v354 = arrayOfTitles.length;
    v13 = i$$1 < v354;
  }
  return true;
}
function checkCodonTable(codonTable) {
  introspect(JAM.policy.p16) {
    var v894 = codonTable.search(/AmAcid/)
  }
  var v818 = v894 == -1;
  var v896 = !v818;
  if (v896) {
    introspect(JAM.policy.p16) {
      var v895 = codonTable.search(/Codon/)
    }
    v818 = v895 == -1;
  }
  var v728 = v818;
  var v820 = !v728;
  if (v820) {
    introspect(JAM.policy.p16) {
      var v819 = codonTable.search(/Number/)
    }
    v728 = v819 == -1;
  }
  var v599 = v728;
  var v730 = !v599;
  if (v730) {
    introspect(JAM.policy.p16) {
      var v729 = codonTable.search(/\/1000/)
    }
    v599 = v729 == -1;
  }
  var v355 = v599;
  var v601 = !v355;
  if (v601) {
    introspect(JAM.policy.p16) {
      var v600 = codonTable.search(/Fraction\s*\.\./)
    }
    v355 = v600 == -1;
  }
  var v14 = v355;
  if (v14) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v602 = formElement.value;
  introspect(JAM.policy.p16) {
    var v356 = v602.search(/\S/)
  }
  var v15 = v356 == -1;
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
  var v357 = arrayOfPatterns.length;
  var v18 = z$$2 < v357;
  for (;v18;) {
    var v603 = arrayOfPatterns[z$$2];
    introspect(JAM.policy.p16) {
      var v358 = v603.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/)
    }
    var v16 = v358 == -1;
    if (v16) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v604 = arrayOfPatterns[z$$2];
    var v359 = moreExpressionCheck(v604);
    var v17 = v359 == false;
    if (v17) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v360 = arrayOfPatterns.length;
    v18 = z$$2 < v360;
  }
  var v19 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v19);
  var v20 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v20);
  var j = 0;
  var v361 = arrayOfPatterns.length;
  var v24 = j < v361;
  for (;v24;) {
    var v605 = arrayOfPatterns[j];
    introspect(JAM.policy.p16) {
      var v362 = v605.match(/\/.+\//)
    }
    var v21 = v362 + "gi";
    var v1277 = eval(v21);
    geneticCodeMatchExp[j] = v1277;
    var v363 = arrayOfPatterns[j];
    introspect(JAM.policy.p16) {
      var v22 = v363.match(/=[a-zA-Z\*]/)
    }
    var v1278 = v22.toString();
    geneticCodeMatchResult[j] = v1278;
    var v23 = geneticCodeMatchResult[j];
    introspect(JAM.policy.p15) {
      var v1279 = v23.replace(/=/g, "")
    }
    geneticCodeMatchResult[j] = v1279;
    j++;
    var v364 = arrayOfPatterns.length;
    v24 = j < v364;
  }
  var i$$2 = 0;
  var v606 = testSequence.length;
  var v365 = v606 - 3;
  var v31 = i$$2 <= v365;
  for (;v31;) {
    var v25 = i$$2 + 3;
    introspect(JAM.policy.p15) {
      codon = testSequence.substring(i$$2, v25);
    }
    j = 0;
    var v366 = geneticCodeMatchExp.length;
    var v29 = j < v366;
    for (;v29;) {
      var v607 = geneticCodeMatchExp[j];
      introspect(JAM.policy.p17) {
        var v367 = codon.search(v607)
      }
      var v28 = v367 != -1;
      if (v28) {
        var v27 = oneMatch == true;
        if (v27) {
          var v368 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v26 = v368 + ".";
          alert(v26);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v369 = geneticCodeMatchExp.length;
      v29 = j < v369;
    }
    var v30 = oneMatch == false;
    if (v30) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v608 = testSequence.length;
    var v370 = v608 - 3;
    v31 = i$$2 <= v370;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v371 = arrayOfPatterns$$1.length;
  var v33 = z$$3 < v371;
  for (;v33;) {
    var v609 = arrayOfPatterns$$1[z$$3];
    introspect(JAM.policy.p16) {
      var v372 = v609.search(/[^acdefghiklmnpqrstvwyz]/i)
    }
    var v32 = v372 != -1;
    if (v32) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v373 = arrayOfPatterns$$1.length;
    v33 = z$$3 < v373;
  }
  var i$$3 = 0;
  var v374 = arrayOfPatterns$$1.length;
  var v37 = i$$3 < v374;
  for (;v37;) {
    var v610 = arrayOfPatterns$$1[i$$3];
    var v375 = "[" + v610;
    var v34 = v375 + "]";
    var re = new RegExp(v34, "gi");
    var j$$1 = i$$3 + 1;
    var v376 = arrayOfPatterns$$1.length;
    var v36 = j$$1 < v376;
    for (;v36;) {
      var v611 = arrayOfPatterns$$1[j$$1];
      introspect(JAM.policy.p17) {
        var v377 = v611.search(re)
      }
      var v35 = v377 != -1;
      if (v35) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v378 = arrayOfPatterns$$1.length;
      v36 = j$$1 < v378;
    }
    i$$3++;
    var v379 = arrayOfPatterns$$1.length;
    v37 = i$$3 < v379;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v380 = arrayOfPatterns$$2.length;
  var v40 = z$$4 < v380;
  for (;v40;) {
    var v612 = arrayOfPatterns$$2[z$$4];
    introspect(JAM.policy.p16) {
      var v381 = v612.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i)
    }
    var v38 = v381 == -1;
    if (v38) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v613 = arrayOfPatterns$$2[z$$4];
    var v382 = moreExpressionCheck(v613);
    var v39 = v382 == false;
    if (v39) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v383 = arrayOfPatterns$$2.length;
    v40 = z$$4 < v383;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v731 = getSequenceFromFasta(text$$7);
  introspect(JAM.policy.p15) {
    var v614 = v731.replace(/[^A-Za-z]/g, "")
  }
  var v384 = v614.length;
  var v42 = v384 > maxInput;
  if (v42) {
    var v385 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v41 = v385 + " characters.";
    alert(v41);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v386 = text$$8.length;
  var v44 = v386 > maxInput$$1;
  if (v44) {
    var v387 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v43 = v387 + " characters.";
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
  introspect(JAM.policy.p9) {
    v45.write("</form>");
  }
  return true;
}
function closePre() {
  var v46 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v46.write("</div>");
  }
  var v47 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v47.write("</pre>\n");
  }
  return;
}
function closeTextArea() {
  var v48 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v48.write("</textarea>");
  }
  return true;
}
function closeWindow() {
  var v49 = outputWindow.document;
  introspect(JAM.policy.p9) {
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
  var v388 = alignArray.length;
  var v51 = v388 < 3;
  if (v51) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v389 = alignArray.length;
  var v53 = i$$4 < v389;
  for (;v53;) {
    var v615 = alignArray[i$$4];
    introspect(JAM.policy.p16) {
      var v390 = v615.search(/[^\s]+\s/)
    }
    var v52 = v390 == -1;
    if (v52) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v391 = alignArray.length;
    v53 = i$$4 < v391;
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
    var v392 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v56 = v392 != -1;
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
  var v393 = sequence$$2.length;
  var v57 = "&gt;results for " + v393;
  var stringToReturn = v57 + " residue sequence ";
  introspect(JAM.policy.p16) {
    var v394 = fastaSequenceTitle.search(/[^\s]/)
  }
  var v59 = v394 != -1;
  if (v59) {
    var v395 = stringToReturn + '"';
    var v58 = v395 + fastaSequenceTitle;
    stringToReturn = v58 + '"';
  }
  var v396 = stringToReturn + ' starting "';
  introspect(JAM.policy.p13) {
    var v397 = sequence$$2.substring(0, 10)
  }
  var v60 = v396 + v397;
  stringToReturn = v60 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v398 = sequenceOne.length;
  var v61 = "Search results for " + v398;
  var stringToReturn$$1 = v61 + " residue sequence ";
  introspect(JAM.policy.p16) {
    var v399 = fastaSequenceTitleOne.search(/[^\s]/)
  }
  var v63 = v399 != -1;
  if (v63) {
    var v400 = stringToReturn$$1 + '"';
    var v62 = v400 + fastaSequenceTitleOne;
    stringToReturn$$1 = v62 + '"';
  }
  var v401 = stringToReturn$$1 + ' starting "';
  introspect(JAM.policy.p13) {
    var v402 = sequenceOne.substring(0, 10)
  }
  var v64 = v401 + v402;
  stringToReturn$$1 = v64 + '"\n';
  var v403 = stringToReturn$$1 + "and ";
  var v404 = sequenceTwo.length;
  var v65 = v403 + v404;
  stringToReturn$$1 = v65 + " residue sequence ";
  introspect(JAM.policy.p16) {
    var v405 = fastaSequenceTitleTwo.search(/[^\s]/)
  }
  var v67 = v405 != -1;
  if (v67) {
    var v406 = stringToReturn$$1 + '"';
    var v66 = v406 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v66 + '"';
  }
  var v407 = stringToReturn$$1 + ' starting "';
  introspect(JAM.policy.p13) {
    var v408 = sequenceTwo.substring(0, 10)
  }
  var v68 = v407 + v408;
  stringToReturn$$1 = v68 + '"';
  var v69 = '<div class="info">' + stringToReturn$$1;
  return v69 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v70 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v70);
  var j$$2 = 0;
  var v409 = arrayOfPatterns$$3.length;
  var v72 = j$$2 < v409;
  for (;v72;) {
    var v616 = arrayOfPatterns$$3[j$$2];
    introspect(JAM.policy.p16) {
      var v410 = v616.match(/\/.+\//)
    }
    var v71 = v410 + "gi";
    var v1280 = eval(v71);
    geneticCodeMatchExp$$1[j$$2] = v1280;
    j$$2++;
    var v411 = arrayOfPatterns$$3.length;
    v72 = j$$2 < v411;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v73 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v73);
  var j$$3 = 0;
  var v412 = arrayOfPatterns$$4.length;
  var v76 = j$$3 < v412;
  for (;v76;) {
    var v413 = arrayOfPatterns$$4[j$$3];
    introspect(JAM.policy.p16) {
      var v74 = v413.match(/=[a-zA-Z\*]/)
    }
    var v1281 = v74.toString();
    geneticCodeMatchResult$$1[j$$3] = v1281;
    var v75 = geneticCodeMatchResult$$1[j$$3];
    introspect(JAM.policy.p15) {
      var v1282 = v75.replace(/=/g, "")
    }
    geneticCodeMatchResult$$1[j$$3] = v1282;
    j$$3++;
    var v414 = arrayOfPatterns$$4.length;
    v76 = j$$3 < v414;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v415 = sequence$$3.length;
  var v77 = "Results for " + v415;
  var stringToReturn$$2 = v77 + " residue sequence ";
  introspect(JAM.policy.p16) {
    var v416 = fastaSequenceTitle$$1.search(/[^\s]/)
  }
  var v79 = v416 != -1;
  if (v79) {
    var v417 = stringToReturn$$2 + '"';
    var v78 = v417 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v78 + '"';
  }
  var v418 = stringToReturn$$2 + ' starting "';
  introspect(JAM.policy.p13) {
    var v419 = sequence$$3.substring(0, 10)
  }
  var v80 = v418 + v419;
  stringToReturn$$2 = v80 + '"';
  var v81 = '<div class="info">' + stringToReturn$$2;
  return v81 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v617 = "Results for " + topology;
  var v420 = v617 + " ";
  var v421 = sequence$$4.length;
  var v82 = v420 + v421;
  var stringToReturn$$3 = v82 + " residue sequence ";
  introspect(JAM.policy.p16) {
    var v422 = fastaSequenceTitle$$2.search(/[^\s]/)
  }
  var v84 = v422 != -1;
  if (v84) {
    var v423 = stringToReturn$$3 + '"';
    var v83 = v423 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v83 + '"';
  }
  var v424 = stringToReturn$$3 + ' starting "';
  introspect(JAM.policy.p13) {
    var v425 = sequence$$4.substring(0, 10)
  }
  var v85 = v424 + v425;
  stringToReturn$$3 = v85 + '"';
  var v86 = '<div class="info">' + stringToReturn$$3;
  return v86 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v426 = sequenceOne$$1.length;
  var v87 = "Alignment results for " + v426;
  var stringToReturn$$4 = v87 + " residue sequence ";
  introspect(JAM.policy.p16) {
    var v427 = fastaSequenceTitleOne$$1.search(/[^\s]/)
  }
  var v89 = v427 != -1;
  if (v89) {
    var v428 = stringToReturn$$4 + '"';
    var v88 = v428 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v88 + '"';
  }
  var v429 = stringToReturn$$4 + ' starting "';
  introspect(JAM.policy.p13) {
    var v430 = sequenceOne$$1.substring(0, 10)
  }
  var v90 = v429 + v430;
  stringToReturn$$4 = v90 + '"\n';
  var v431 = stringToReturn$$4 + "and ";
  var v432 = sequenceTwo$$1.length;
  var v91 = v431 + v432;
  stringToReturn$$4 = v91 + " residue sequence ";
  introspect(JAM.policy.p16) {
    var v433 = fastaSequenceTitleTwo$$1.search(/[^\s]/)
  }
  var v93 = v433 != -1;
  if (v93) {
    var v434 = stringToReturn$$4 + '"';
    var v92 = v434 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v92 + '"';
  }
  var v435 = stringToReturn$$4 + ' starting "';
  introspect(JAM.policy.p13) {
    var v436 = sequenceTwo$$1.substring(0, 10)
  }
  var v94 = v435 + v436;
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
    var v437 = Math.random();
    var v438 = components.length;
    var v96 = v437 * v438;
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
  introspect(JAM.policy.p9) {
    return sequenceArray.join("");
  }
}
function getSequenceFromFasta(sequenceRecord) {
  introspect(JAM.policy.p16) {
    var v439 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v98 = v439 != -1;
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
    var v440 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v100 = v440 != -1;
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
    var v1119 = expressionToCheck.search(/\[[A-Za-z\|]*\[/)
  }
  var v1094 = v1119 != -1;
  var v1121 = !v1094;
  if (v1121) {
    introspect(JAM.policy.p16) {
      var v1120 = expressionToCheck.search(/\][A-Za-z\|]*\]/)
    }
    v1094 = v1120 != -1;
  }
  var v1067 = v1094;
  var v1096 = !v1067;
  if (v1096) {
    introspect(JAM.policy.p16) {
      var v1095 = expressionToCheck.search(/\[\]/)
    }
    v1067 = v1095 != -1;
  }
  var v1038 = v1067;
  var v1069 = !v1038;
  if (v1069) {
    introspect(JAM.policy.p16) {
      var v1068 = expressionToCheck.search(/\/[A-Za-z\|]*\]/)
    }
    v1038 = v1068 != -1;
  }
  var v1005 = v1038;
  var v1040 = !v1005;
  if (v1040) {
    introspect(JAM.policy.p16) {
      var v1039 = expressionToCheck.search(/\[[A-Za-z\|]*\//)
    }
    v1005 = v1039 != -1;
  }
  var v951 = v1005;
  var v1007 = !v951;
  if (v1007) {
    introspect(JAM.policy.p16) {
      var v1006 = expressionToCheck.search(/\|\|/)
    }
    v951 = v1006 != -1;
  }
  var v897 = v951;
  var v953 = !v897;
  if (v953) {
    introspect(JAM.policy.p16) {
      var v952 = expressionToCheck.search(/\/\|/)
    }
    v897 = v952 != -1;
  }
  var v821 = v897;
  var v899 = !v821;
  if (v899) {
    introspect(JAM.policy.p16) {
      var v898 = expressionToCheck.search(/\|\//)
    }
    v821 = v898 != -1;
  }
  var v732 = v821;
  var v823 = !v732;
  if (v823) {
    introspect(JAM.policy.p16) {
      var v822 = expressionToCheck.search(/\[.\]/)
    }
    v732 = v822 != -1;
  }
  var v618 = v732;
  var v734 = !v618;
  if (v734) {
    introspect(JAM.policy.p16) {
      var v733 = expressionToCheck.search(/\</)
    }
    v618 = v733 != -1;
  }
  var v441 = v618;
  var v620 = !v441;
  if (v620) {
    introspect(JAM.policy.p16) {
      var v619 = expressionToCheck.search(/\>/)
    }
    v441 = v619 != -1;
  }
  var v101 = v441;
  if (v101) {
    return false;
  }
  return true;
}
function openForm() {
  var v102 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v102.write('<form action="">\n');
  }
  return true;
}
function openPre() {
  var v103 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v103.write("<pre>");
  }
  var v104 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v104.write('<div class="pre">');
  }
  return;
}
function openTextArea() {
  var v105 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v105.write('<br /><textarea rows="6" cols="61">\n');
  }
  return true;
}
function openWindow() {
  var title$$5 = "ORF Finder";
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
  var v735 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v621 = v735 + "<head>\n";
  var v442 = v621 + "<title>Sequence Manipulation Suite</title>\n";
  var v107 = v442 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  introspect(JAM.policy.p17) {
    v106.write(v107);
  }
  if (isColor) {
    var v108 = outputWindow.document;
    var v1185 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1164 = v1185 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1143 = v1164 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1122 = v1143 + "div.info {font-weight: bold}\n";
    var v1097 = v1122 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1070 = v1097 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v1041 = v1070 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v1008 = v1041 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v954 = v1008 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v900 = v954 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v824 = v900 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v736 = v824 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v622 = v736 + "td.many {color: #000000}\n";
    var v443 = v622 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v109 = v443 + "</style>\n";
    introspect(JAM.policy.p17) {
      v108.write(v109);
    }
  } else {
    var v110 = outputWindow.document;
    var v1206 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1186 = v1206 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1165 = v1186 + "div.title {display: none}\n";
    var v1144 = v1165 + "div.info {font-weight: bold}\n";
    var v1123 = v1144 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1098 = v1123 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1071 = v1098 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v1042 = v1071 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1009 = v1042 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v955 = v1009 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v901 = v955 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v825 = v901 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v737 = v825 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v623 = v737 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v444 = v623 + "img {display: none}\n";
    var v111 = v444 + "</style>\n";
    introspect(JAM.policy.p17) {
      v110.write(v111);
    }
  }
  var v112 = outputWindow.document;
  var v738 = "</head>\n" + '<body class="main">\n';
  var v624 = v738 + '<div class="title">';
  var v445 = v624 + title$$6;
  var v113 = v445 + " results</div>\n";
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
  var v739 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v625 = v739 + "<head>\n";
  var v446 = v625 + "<title>Sequence Manipulation Suite</title>\n";
  var v115 = v446 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  introspect(JAM.policy.p17) {
    v114.write(v115);
  }
  if (isBackground) {
    var v116 = outputWindow.document;
    var v1187 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1166 = v1187 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1145 = v1166 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1124 = v1145 + "div.info {font-weight: bold}\n";
    var v1099 = v1124 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v1072 = v1099 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v1043 = v1072 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v1010 = v1043 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v956 = v1010 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v902 = v956 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v826 = v902 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v740 = v826 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v626 = v740 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v447 = v626 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v117 = v447 + "</style>\n";
    introspect(JAM.policy.p17) {
      v116.write(v117);
    }
  } else {
    var v118 = outputWindow.document;
    var v1225 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1207 = v1225 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1188 = v1207 + "div.title {display: none}\n";
    var v1167 = v1188 + "div.info {font-weight: bold}\n";
    var v1146 = v1167 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1125 = v1146 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v1100 = v1125 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v1073 = v1100 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v1044 = v1073 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v1011 = v1044 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v957 = v1011 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v903 = v957 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v827 = v903 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v741 = v827 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v627 = v741 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v448 = v627 + "img {display: none}\n";
    var v119 = v448 + "</style>\n";
    introspect(JAM.policy.p17) {
      v118.write(v119);
    }
  }
  var v120 = outputWindow.document;
  var v742 = "</head>\n" + '<body class="main">\n';
  var v628 = v742 + '<div class="title">';
  var v449 = v628 + title$$8;
  var v121 = v449 + " results</div>\n";
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
    var v450 = dnaSequence$$1.search(/./)
  }
  var v122 = v450 != -1;
  if (v122) {
    introspect(JAM.policy.p16) {
      tempDnaArray = dnaSequence$$1.match(/./g);
    }
    tempDnaArray = tempDnaArray.reverse();
    introspect(JAM.policy.p9) {
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
  var v451 = testArray[0];
  var v126 = v451 != testString;
  if (v126) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  introspect(JAM.policy.p17) {
    var v452 = testString.search(re$$2)
  }
  var v127 = v452 == -1;
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
  introspect(JAM.policy.p11) {
    var v453 = testNum.toFixed(3)
  }
  var v130 = v453 != 2489.824;
  if (v130) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  introspect(JAM.policy.p11) {
    var v454 = testNum.toPrecision(5)
  }
  var v131 = v454 != 2489.8;
  if (v131) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  introspect(JAM.policy.p16) {
    var v455 = theNumber$$1.search(/\d/)
  }
  var v132 = v455 == -1;
  if (v132) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  introspect(JAM.policy.p16) {
    var v828 = emblFile.search(/ID/)
  }
  var v743 = v828 == -1;
  var v830 = !v743;
  if (v830) {
    introspect(JAM.policy.p16) {
      var v829 = emblFile.search(/AC/)
    }
    v743 = v829 == -1;
  }
  var v629 = v743;
  var v745 = !v629;
  if (v745) {
    introspect(JAM.policy.p16) {
      var v744 = emblFile.search(/DE/)
    }
    v629 = v744 == -1;
  }
  var v456 = v629;
  var v631 = !v456;
  if (v631) {
    introspect(JAM.policy.p16) {
      var v630 = emblFile.search(/SQ/)
    }
    v456 = v630 == -1;
  }
  var v133 = v456;
  if (v133) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  introspect(JAM.policy.p16) {
    var v457 = theNumber$$2.search(/\d/)
  }
  var v134 = v457 == -1;
  if (v134) {
    alert("Please enter a number.");
    return false;
  }
  var v136 = theNumber$$2 > maxInput$$2;
  if (v136) {
    var v458 = "Please enter a number less than or equal to " + maxInput$$2;
    var v135 = v458 + ".";
    alert(v135);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  introspect(JAM.policy.p16) {
    var v459 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i)
  }
  var v137 = v459 != -1;
  if (v137) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return;
}
function verifyProtein(proteinSequence) {
  introspect(JAM.policy.p16) {
    var v460 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i)
  }
  var v138 = v460 != -1;
  if (v138) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  introspect(JAM.policy.p16) {
    var v831 = genBankFile.search(/LOCUS/)
  }
  var v746 = v831 == -1;
  var v833 = !v746;
  if (v833) {
    introspect(JAM.policy.p16) {
      var v832 = genBankFile.search(/DEFINITION/)
    }
    v746 = v832 == -1;
  }
  var v632 = v746;
  var v748 = !v632;
  if (v748) {
    introspect(JAM.policy.p16) {
      var v747 = genBankFile.search(/ACCESSION/)
    }
    v632 = v747 == -1;
  }
  var v461 = v632;
  var v634 = !v461;
  if (v634) {
    introspect(JAM.policy.p16) {
      var v633 = genBankFile.search(/ORIGIN/)
    }
    v461 = v633 == -1;
  }
  var v139 = v461;
  if (v139) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  introspect(JAM.policy.p16) {
    var v834 = genBankFile$$1.search(/LOCUS/)
  }
  var v749 = v834 == -1;
  var v836 = !v749;
  if (v836) {
    introspect(JAM.policy.p16) {
      var v835 = genBankFile$$1.search(/DEFINITION/)
    }
    v749 = v835 == -1;
  }
  var v635 = v749;
  var v751 = !v635;
  if (v751) {
    introspect(JAM.policy.p16) {
      var v750 = genBankFile$$1.search(/ACCESSION/)
    }
    v635 = v750 == -1;
  }
  var v462 = v635;
  var v637 = !v462;
  if (v637) {
    introspect(JAM.policy.p16) {
      var v636 = genBankFile$$1.search(/ORIGIN/)
    }
    v462 = v636 == -1;
  }
  var v140 = v462;
  if (v140) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  introspect(JAM.policy.p16) {
    var v463 = genBankFile$$1.search(/FEATURES {13}/)
  }
  var v141 = v463 == -1;
  if (v141) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  introspect(JAM.policy.p16) {
    var v837 = emblFile$$1.search(/ID/)
  }
  var v752 = v837 == -1;
  var v839 = !v752;
  if (v839) {
    introspect(JAM.policy.p16) {
      var v838 = emblFile$$1.search(/AC/)
    }
    v752 = v838 == -1;
  }
  var v638 = v752;
  var v754 = !v638;
  if (v754) {
    introspect(JAM.policy.p16) {
      var v753 = emblFile$$1.search(/DE/)
    }
    v638 = v753 == -1;
  }
  var v464 = v638;
  var v640 = !v464;
  if (v640) {
    introspect(JAM.policy.p16) {
      var v639 = emblFile$$1.search(/SQ/)
    }
    v464 = v639 == -1;
  }
  var v142 = v464;
  if (v142) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  introspect(JAM.policy.p16) {
    var v465 = emblFile$$1.search(/^FT/m)
  }
  var v143 = v465 == -1;
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
    var v466 = basePerLine / groupSize;
    var v147 = j$$6 <= v466;
    for (;v147;) {
      var v146 = k < groupSize;
      for (;v146;) {
        var v467 = k + i$$5;
        introspect(JAM.policy.p17) {
          var v145 = text$$10.charAt(v467)
        }
        lineOfText = lineOfText + v145;
        k = k + 1;
        v146 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v468 = basePerLine / groupSize;
      v147 = j$$6 <= v468;
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
    var v469 = adjustment < 0;
    if (v469) {
      v469 = adjusted >= 0;
    }
    var v151 = v469;
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
    var v470 = basePerLine$$2 / groupSize$$2;
    var v158 = j$$7 <= v470;
    for (;v158;) {
      var v154 = k$$1 < groupSize$$2;
      for (;v154;) {
        var v471 = i$$6 + k$$1;
        var v152 = v471 >= stopBase$$2;
        if (v152) {
          break;
        }
        var v472 = k$$1 + i$$6;
        introspect(JAM.policy.p17) {
          var v153 = text$$12.charAt(v472)
        }
        lineOfText$$1 = lineOfText$$1 + v153;
        k$$1 = k$$1 + 1;
        v154 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v156 = numberPosition$$1 == "above";
      if (v156) {
        var v473 = adjustNumbering(i$$6, numberingAdjustment);
        var v155 = rightNum(v473, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v155;
      }
      var v157 = i$$6 >= stopBase$$2;
      if (v157) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v474 = basePerLine$$2 / groupSize$$2;
      v158 = j$$7 <= v474;
    }
    var v181 = numberPosition$$1 == "left";
    if (v181) {
      var v159 = outputWindow.document;
      var v755 = adjustNumbering(lineNum, numberingAdjustment);
      var v641 = rightNum(v755, "", 8, tabIn$$3);
      var v475 = v641 + lineOfText$$1;
      var v160 = v475 + "\n";
      introspect(JAM.policy.p17) {
        v159.write(v160);
      }
      var v164 = strands$$1 == "two";
      if (v164) {
        var v161 = outputWindow.document;
        var v756 = adjustNumbering(lineNum, numberingAdjustment);
        var v642 = rightNum(v756, "", 8, tabIn$$3);
        var v643 = complement(lineOfText$$1);
        var v476 = v642 + v643;
        var v162 = v476 + "\n";
        introspect(JAM.policy.p17) {
          v161.write(v162);
        }
        var v163 = outputWindow.document;
        introspect(JAM.policy.p9) {
          v163.write("\n");
        }
      }
    } else {
      var v180 = numberPosition$$1 == "right";
      if (v180) {
        var v165 = outputWindow.document;
        var v644 = adjustNumbering(i$$6, numberingAdjustment);
        var v477 = lineOfText$$1 + v644;
        var v166 = v477 + "\n";
        introspect(JAM.policy.p17) {
          v165.write(v166);
        }
        var v170 = strands$$1 == "two";
        if (v170) {
          var v167 = outputWindow.document;
          var v645 = complement(lineOfText$$1);
          var v646 = adjustNumbering(i$$6, numberingAdjustment);
          var v478 = v645 + v646;
          var v168 = v478 + "\n";
          introspect(JAM.policy.p17) {
            v167.write(v168);
          }
          var v169 = outputWindow.document;
          introspect(JAM.policy.p9) {
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
            var v479 = complement(lineOfText$$1);
            var v176 = v479 + "\n";
            introspect(JAM.policy.p17) {
              v175.write(v176);
            }
            var v177 = outputWindow.document;
            introspect(JAM.policy.p9) {
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
    var v480 = basePerLine$$3 / groupSize$$3;
    var v189 = j$$8 <= v480;
    for (;v189;) {
      var v185 = k$$2 < groupSize$$3;
      for (;v185;) {
        var v481 = i$$7 + k$$2;
        var v183 = v481 >= stopBase$$3;
        if (v183) {
          break;
        }
        var v482 = k$$2 + i$$7;
        introspect(JAM.policy.p17) {
          var v184 = text$$13.charAt(v482)
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
      var v483 = basePerLine$$3 / groupSize$$3;
      v189 = j$$8 <= v483;
    }
    var v200 = numberPosition$$2 == "left";
    if (v200) {
      var v190 = outputWindow.document;
      var v647 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v484 = v647 + lineOfText$$2;
      var v191 = v484 + "\n";
      introspect(JAM.policy.p17) {
        v190.write(v191);
      }
    } else {
      var v199 = numberPosition$$2 == "right";
      if (v199) {
        var v192 = outputWindow.document;
        var v485 = lineOfText$$2 + i$$7;
        var v193 = v485 + "\n";
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
  var v757 = sequence$$13.length;
  var v648 = v757 <= firstIndexToMutate;
  var v758 = !v648;
  if (v758) {
    v648 = lastIndexToMutate < 0;
  }
  var v486 = v648;
  var v649 = !v486;
  if (v649) {
    v486 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v202 = v486;
  if (v202) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v210 = i$$8 < numMut;
  for (;v210;) {
    maxNum = sequence$$13.length;
    var v487 = Math.random();
    var v203 = v487 * maxNum;
    introspect(JAM.policy.p16) {
      randNum = Math.floor(v203);
    }
    var v488 = randNum < firstIndexToMutate;
    var v650 = !v488;
    if (v650) {
      v488 = randNum > lastIndexToMutate;
    }
    var v204 = v488;
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
      var v489 = Math.random();
      var v490 = components$$1.length;
      var v205 = v489 * v490;
      introspect(JAM.policy.p16) {
        componentsIndex = Math.round(v205);
      }
      var v491 = components$$1.length;
      var v206 = componentsIndex == v491;
      if (v206) {
        componentsIndex = 0;
      }
      var v492 = components$$1[componentsIndex];
      var v207 = v492 != currentChar;
      if (v207) {
        needNewChar = false;
      }
    }
    introspect(JAM.policy.p13) {
      var v493 = sequence$$13.substring(0, randNum)
    }
    var v494 = components$$1[componentsIndex];
    var v208 = v493 + v494;
    var v495 = randNum + 1;
    var v496 = sequence$$13.length;
    introspect(JAM.policy.p27) {
      var v209 = sequence$$13.substring(v495, v496)
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
    var v497 = Math.random();
    var v498 = components$$2.length;
    var v213 = v497 * v498;
    introspect(JAM.policy.p16) {
      tempNum$$1 = Math.floor(v213);
    }
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v499 = sequence$$14.length;
    var v216 = v499 == 60;
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
    var v759 = sequence$$15.length;
    var v651 = v759 - lookAhead;
    var v652 = sequence$$15.length;
    introspect(JAM.policy.p27) {
      var v500 = sequence$$15.substring(v651, v652)
    }
    var v221 = v500 + sequence$$15;
    introspect(JAM.policy.p13) {
      var v222 = sequence$$15.substring(0, lookAhead)
    }
    sequence$$15 = v221 + v222;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v224 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v224.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  }
  var v225 = outputWindow.document;
  var v760 = '<tr><td class="title" width="200px">' + "Site:";
  var v653 = v760 + '</td><td class="title">';
  var v501 = v653 + "Positions:";
  var v226 = v501 + "</td></tr>\n";
  introspect(JAM.policy.p17) {
    v225.write(v226);
  }
  var i$$9 = 0;
  var v502 = arrayOfItems.length;
  var v242 = i$$9 < v502;
  for (;v242;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v503 = arrayOfItems[i$$9];
    introspect(JAM.policy.p16) {
      var v227 = v503.match(/\/.+\//)
    }
    matchExp = v227 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    var v761 = arrayOfItems[i$$9];
    introspect(JAM.policy.p16) {
      var v654 = v761.match(/\)\D*\d+/)
    }
    var v504 = v654.toString();
    introspect(JAM.policy.p15) {
      var v228 = v504.replace(/\)\D*/, "")
    }
    cutDistance = parseFloat(v228);
    introspect(JAM.policy.p17) {
      var v234 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    for (;v234;) {
      var v229 = matchExp.lastIndex;
      matchPosition = v229 - cutDistance;
      var v505 = matchPosition >= lowerLimit;
      if (v505) {
        v505 = matchPosition < upperLimit;
      }
      var v232 = v505;
      if (v232) {
        timesFound++;
        var v230 = tempString$$1 + ", ";
        var v506 = matchPosition - shiftValue;
        var v231 = v506 + 1;
        tempString$$1 = v230 + v231;
      }
      var v507 = matchExp.lastIndex;
      var v655 = RegExp.lastMatch;
      var v508 = v655.length;
      var v233 = v507 - v508;
      matchExp.lastIndex = v233 + 1;
      introspect(JAM.policy.p17) {
        v234 = matchArray$$1 = matchExp.exec(sequence$$15);
      }
    }
    introspect(JAM.policy.p16) {
      var v509 = tempString$$1.search(/\d/)
    }
    var v235 = v509 != -1;
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
    var v1012 = '<tr><td class="' + backGroundClass;
    var v958 = v1012 + '">';
    var v1074 = arrayOfItems[i$$9];
    introspect(JAM.policy.p16) {
      var v1045 = v1074.match(/\([^\(]+\)/)
    }
    var v1013 = v1045.toString();
    introspect(JAM.policy.p15) {
      var v959 = v1013.replace(/\(|\)/g, "")
    }
    var v904 = v958 + v959;
    var v840 = v904 + '</td><td class="';
    var v762 = v840 + backGroundClass;
    var v656 = v762 + '">';
    var v510 = v656 + tempString$$1;
    var v241 = v510 + "</td></tr>\n";
    introspect(JAM.policy.p17) {
      v240.write(v241);
    }
    timesFound = 0;
    i$$9++;
    var v511 = arrayOfItems.length;
    v242 = i$$9 < v511;
  }
  var v243 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v243.write("</tbody></table>\n");
  }
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v244 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v244.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  }
  var v245 = outputWindow.document;
  var v905 = '<tr><td class="title">' + "Pattern:";
  var v841 = v905 + '</td><td class="title">';
  var v763 = v841 + "Times found:";
  var v657 = v763 + '</td><td class="title">';
  var v512 = v657 + "Percentage:";
  var v246 = v512 + "</td></tr>\n";
  introspect(JAM.policy.p17) {
    v245.write(v246);
  }
  var i$$10 = 0;
  var v513 = arrayOfItems$$1.length;
  var v255 = i$$10 < v513;
  for (;v255;) {
    var tempNumber = 0;
    var v514 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p16) {
      var v247 = v514.match(/\/[^\/]+\//)
    }
    var matchExp$$1 = v247 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    introspect(JAM.policy.p17) {
      var v515 = sequence$$16.search(matchExp$$1)
    }
    var v249 = v515 != -1;
    if (v249) {
      introspect(JAM.policy.p17) {
        var v248 = sequence$$16.match(matchExp$$1)
      }
      tempNumber = v248.length;
    }
    var percentage = 0;
    var v658 = originalLength + 1;
    var v842 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p16) {
      var v764 = v842.match(/\d+/)
    }
    var v659 = parseFloat(v764);
    var v516 = v658 - v659;
    var v252 = v516 > 0;
    if (v252) {
      var v250 = 100 * tempNumber;
      var v517 = originalLength + 1;
      var v765 = arrayOfItems$$1[i$$10];
      introspect(JAM.policy.p16) {
        var v660 = v765.match(/\d+/)
      }
      var v518 = parseFloat(v660);
      var v251 = v517 - v518;
      percentage = v250 / v251;
    }
    var v253 = outputWindow.document;
    var v1075 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p16) {
      var v1046 = v1075.match(/\([^\(]+\)\b/)
    }
    var v1014 = v1046.toString();
    introspect(JAM.policy.p15) {
      var v960 = v1014.replace(/\(|\)/g, "")
    }
    var v906 = "<tr><td>" + v960;
    var v843 = v906 + "</td><td>";
    var v766 = v843 + tempNumber;
    var v661 = v766 + "</td><td>";
    introspect(JAM.policy.p11) {
      var v662 = percentage.toFixed(2)
    }
    var v519 = v661 + v662;
    var v254 = v519 + "</td></tr>\n";
    introspect(JAM.policy.p17) {
      v253.write(v254);
    }
    i$$10++;
    var v520 = arrayOfItems$$1.length;
    v255 = i$$10 < v520;
  }
  var v256 = outputWindow.document;
  introspect(JAM.policy.p9) {
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
  var v521 = sequence$$17.length;
  var v263 = v521 > 0;
  for (;v263;) {
    maxNum$$1 = sequence$$17.length;
    var v522 = Math.random();
    var v257 = v522 * maxNum$$1;
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
    var v523 = tempSeq.length;
    var v262 = v523 == 60;
    if (v262) {
      var v260 = outputWindow.document;
      var v261 = tempSeq + "\n";
      introspect(JAM.policy.p17) {
        v260.write(v261);
      }
      tempSeq = "";
    }
    var v524 = sequence$$17.length;
    v263 = v524 > 0;
  }
  var v264 = outputWindow.document;
  var v265 = tempSeq + "\n";
  introspect(JAM.policy.p17) {
    v264.write(v265);
  }
  return true;
}
function getGeneticCodeString(type$$25) {
  var v663 = type$$25.toLowerCase();
  var v525 = v663 == "standard";
  var v665 = !v525;
  if (v665) {
    var v664 = type$$25.toLowerCase();
    v525 = v664 == "transl_table=1";
  }
  var v267 = v525;
  if (v267) {
    var v1260 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1243 = v1260 + "/ga[tcuy]/=D,";
    var v1226 = v1243 + "/ga[agr]/=E,";
    var v1208 = v1226 + "/[tu][tu][tcuy]/=F,";
    var v1189 = v1208 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1168 = v1189 + "/ca[tcuy]/=H,";
    var v1147 = v1168 + "/a[tu][atcuwmhy]/=I,";
    var v1126 = v1147 + "/aa[agr]/=K,";
    var v1101 = v1126 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1076 = v1101 + "/a[tu]g/=M,";
    var v1047 = v1076 + "/aa[tucy]/=N,";
    var v1015 = v1047 + "/cc[acgturyswkmbdhvn]/=P,";
    var v961 = v1015 + "/ca[agr]/=Q,";
    var v907 = v961 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v844 = v907 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v767 = v844 + "/ac[acgturyswkmbdhvn]/=T,";
    var v666 = v767 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v526 = v666 + "/[tu]gg/=W,";
    var v266 = v526 + "/[tu]a[ctuy]/=Y,";
    return v266 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*";
  }
  var v527 = type$$25.toLowerCase();
  var v269 = v527 == "transl_table=2";
  if (v269) {
    var v1261 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1244 = v1261 + "/ga[tcuy]/=D,";
    var v1227 = v1244 + "/ga[agr]/=E,";
    var v1209 = v1227 + "/[tu][tu][tcuy]/=F,";
    var v1190 = v1209 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1169 = v1190 + "/ca[tcuy]/=H,";
    var v1148 = v1169 + "/a[tu][tcuy]/=I,";
    var v1127 = v1148 + "/aa[agr]/=K,";
    var v1102 = v1127 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1077 = v1102 + "/a[tu][agr]/=M,";
    var v1048 = v1077 + "/aa[tucy]/=N,";
    var v1016 = v1048 + "/cc[acgturyswkmbdhvn]/=P,";
    var v962 = v1016 + "/ca[agr]/=Q,";
    var v908 = v962 + "/cg[acgturyswkmbdhvn]/=R,";
    var v845 = v908 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v768 = v845 + "/ac[acgturyswkmbdhvn]/=T,";
    var v667 = v768 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v528 = v667 + "/[tu]g[agr]/=W,";
    var v268 = v528 + "/[tu]a[ctuy]/=Y,";
    return v268 + "/[tu]a[agr]|ag[agr]/=*";
  }
  var v529 = type$$25.toLowerCase();
  var v271 = v529 == "transl_table=3";
  if (v271) {
    var v1262 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1245 = v1262 + "/ga[tcuy]/=D,";
    var v1228 = v1245 + "/ga[agr]/=E,";
    var v1210 = v1228 + "/[tu][tu][tcuy]/=F,";
    var v1191 = v1210 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1170 = v1191 + "/ca[tcuy]/=H,";
    var v1149 = v1170 + "/a[tu][tcuy]/=I,";
    var v1128 = v1149 + "/aa[agr]/=K,";
    var v1103 = v1128 + "/[tu][tu][agr]/=L,";
    var v1078 = v1103 + "/a[tu][agr]/=M,";
    var v1049 = v1078 + "/aa[tucy]/=N,";
    var v1017 = v1049 + "/cc[acgturyswkmbdhvn]/=P,";
    var v963 = v1017 + "/ca[agr]/=Q,";
    var v909 = v963 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v846 = v909 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v769 = v846 + "/ac[acgturyswkmbdhvn]|c[tu][acgturyswkmbdhvn]/=T,";
    var v668 = v769 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v530 = v668 + "/[tu]g[agr]/=W,";
    var v270 = v530 + "/[tu]a[ctuy]/=Y,";
    return v270 + "/[tu]a[agr]/=*";
  }
  var v531 = type$$25.toLowerCase();
  var v273 = v531 == "transl_table=4";
  if (v273) {
    var v1263 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1246 = v1263 + "/ga[tcuy]/=D,";
    var v1229 = v1246 + "/ga[agr]/=E,";
    var v1211 = v1229 + "/[tu][tu][tcuy]/=F,";
    var v1192 = v1211 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1171 = v1192 + "/ca[tcuy]/=H,";
    var v1150 = v1171 + "/a[tu][atcuwmhy]/=I,";
    var v1129 = v1150 + "/aa[agr]/=K,";
    var v1104 = v1129 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1079 = v1104 + "/a[tu]g/=M,";
    var v1050 = v1079 + "/aa[tucy]/=N,";
    var v1018 = v1050 + "/cc[acgturyswkmbdhvn]/=P,";
    var v964 = v1018 + "/ca[agr]/=Q,";
    var v910 = v964 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v847 = v910 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v770 = v847 + "/ac[acgturyswkmbdhvn]/=T,";
    var v669 = v770 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v532 = v669 + "/[tu]g[agr]/=W,";
    var v272 = v532 + "/[tu]a[ctuy]/=Y,";
    return v272 + "/[tu]a[agr]/=*";
  }
  var v533 = type$$25.toLowerCase();
  var v275 = v533 == "transl_table=5";
  if (v275) {
    var v1264 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1247 = v1264 + "/ga[tcuy]/=D,";
    var v1230 = v1247 + "/ga[agr]/=E,";
    var v1212 = v1230 + "/[tu][tu][tcuy]/=F,";
    var v1193 = v1212 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1172 = v1193 + "/ca[tcuy]/=H,";
    var v1151 = v1172 + "/a[tu][tcuy]/=I,";
    var v1130 = v1151 + "/aa[agr]/=K,";
    var v1105 = v1130 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1080 = v1105 + "/a[tu][agr]/=M,";
    var v1051 = v1080 + "/aa[tucy]/=N,";
    var v1019 = v1051 + "/cc[acgturyswkmbdhvn]/=P,";
    var v965 = v1019 + "/ca[agr]/=Q,";
    var v911 = v965 + "/cg[acgturyswkmbdhvn]/=R,";
    var v848 = v911 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v771 = v848 + "/ac[acgturyswkmbdhvn]/=T,";
    var v670 = v771 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v534 = v670 + "/[tu]g[agr]/=W,";
    var v274 = v534 + "/[tu]a[ctuy]/=Y,";
    return v274 + "/[tu]a[agr]/=*";
  }
  var v535 = type$$25.toLowerCase();
  var v277 = v535 == "transl_table=6";
  if (v277) {
    var v1265 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1248 = v1265 + "/ga[tcuy]/=D,";
    var v1231 = v1248 + "/ga[agr]/=E,";
    var v1213 = v1231 + "/[tu][tu][tcuy]/=F,";
    var v1194 = v1213 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1173 = v1194 + "/ca[tcuy]/=H,";
    var v1152 = v1173 + "/a[tu][atcuwmhy]/=I,";
    var v1131 = v1152 + "/aa[agr]/=K,";
    var v1106 = v1131 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1081 = v1106 + "/a[tu]g/=M,";
    var v1052 = v1081 + "/aa[tucy]/=N,";
    var v1020 = v1052 + "/cc[acgturyswkmbdhvn]/=P,";
    var v966 = v1020 + "/ca[agr]|[tu]a[agr]|[tcuy]a[agr]/=Q,";
    var v912 = v966 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v849 = v912 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v772 = v849 + "/ac[acgturyswkmbdhvn]/=T,";
    var v671 = v772 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v536 = v671 + "/[tu]gg/=W,";
    var v276 = v536 + "/[tu]a[ctuy]/=Y,";
    return v276 + "/[tu]ga/=*";
  }
  var v537 = type$$25.toLowerCase();
  var v279 = v537 == "transl_table=9";
  if (v279) {
    var v1266 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1249 = v1266 + "/ga[tcuy]/=D,";
    var v1232 = v1249 + "/ga[agr]/=E,";
    var v1214 = v1232 + "/[tu][tu][tcuy]/=F,";
    var v1195 = v1214 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1174 = v1195 + "/ca[tcuy]/=H,";
    var v1153 = v1174 + "/a[tu][atcuwmhy]/=I,";
    var v1132 = v1153 + "/aag/=K,";
    var v1107 = v1132 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1082 = v1107 + "/a[tu]g/=M,";
    var v1053 = v1082 + "/aa[atcuwmhy]/=N,";
    var v1021 = v1053 + "/cc[acgturyswkmbdhvn]/=P,";
    var v967 = v1021 + "/ca[agr]/=Q,";
    var v913 = v967 + "/cg[acgturyswkmbdhvn]/=R,";
    var v850 = v913 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v773 = v850 + "/ac[acgturyswkmbdhvn]/=T,";
    var v672 = v773 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v538 = v672 + "/[tu]g[agr]/=W,";
    var v278 = v538 + "/[tu]a[ctuy]/=Y,";
    return v278 + "/[tu]a[agr]/=*";
  }
  var v539 = type$$25.toLowerCase();
  var v281 = v539 == "transl_table=10";
  if (v281) {
    var v1267 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[atcuwmhy]/=C,";
    var v1250 = v1267 + "/ga[tcuy]/=D,";
    var v1233 = v1250 + "/ga[agr]/=E,";
    var v1215 = v1233 + "/[tu][tu][tcuy]/=F,";
    var v1196 = v1215 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1175 = v1196 + "/ca[tcuy]/=H,";
    var v1154 = v1175 + "/a[tu][atcuwmhy]/=I,";
    var v1133 = v1154 + "/aa[agr]/=K,";
    var v1108 = v1133 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1083 = v1108 + "/a[tu]g/=M,";
    var v1054 = v1083 + "/aa[tucy]/=N,";
    var v1022 = v1054 + "/cc[acgturyswkmbdhvn]/=P,";
    var v968 = v1022 + "/ca[agr]/=Q,";
    var v914 = v968 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v851 = v914 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v774 = v851 + "/ac[acgturyswkmbdhvn]/=T,";
    var v673 = v774 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v540 = v673 + "/[tu]gg/=W,";
    var v280 = v540 + "/[tu]a[ctuy]/=Y,";
    return v280 + "/[tu]a[agr]/=*";
  }
  var v541 = type$$25.toLowerCase();
  var v283 = v541 == "transl_table=11";
  if (v283) {
    var v1268 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1251 = v1268 + "/ga[tcuy]/=D,";
    var v1234 = v1251 + "/ga[agr]/=E,";
    var v1216 = v1234 + "/[tu][tu][tcuy]/=F,";
    var v1197 = v1216 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1176 = v1197 + "/ca[tcuy]/=H,";
    var v1155 = v1176 + "/a[tu][atcuwmhy]/=I,";
    var v1134 = v1155 + "/aa[agr]/=K,";
    var v1109 = v1134 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1084 = v1109 + "/a[tu]g/=M,";
    var v1055 = v1084 + "/aa[tucy]/=N,";
    var v1023 = v1055 + "/cc[acgturyswkmbdhvn]/=P,";
    var v969 = v1023 + "/ca[agr]/=Q,";
    var v915 = v969 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v852 = v915 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v775 = v852 + "/ac[acgturyswkmbdhvn]/=T,";
    var v674 = v775 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v542 = v674 + "/[tu]gg/=W,";
    var v282 = v542 + "/[tu]a[ctuy]/=Y,";
    return v282 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*";
  }
  var v543 = type$$25.toLowerCase();
  var v285 = v543 == "transl_table=12";
  if (v285) {
    var v1269 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1252 = v1269 + "/ga[tcuy]/=D,";
    var v1235 = v1252 + "/ga[agr]/=E,";
    var v1217 = v1235 + "/[tu][tu][tcuy]/=F,";
    var v1198 = v1217 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1177 = v1198 + "/ca[tcuy]/=H,";
    var v1156 = v1177 + "/a[tu][atcuwmhy]/=I,";
    var v1135 = v1156 + "/aa[agr]/=K,";
    var v1110 = v1135 + "/c[tu][atcuwmhy]|[tu][tu][agr]|[ctuy][tu]a/=L,";
    var v1085 = v1110 + "/a[tu]g/=M,";
    var v1056 = v1085 + "/aa[tucy]/=N,";
    var v1024 = v1056 + "/cc[acgturyswkmbdhvn]/=P,";
    var v970 = v1024 + "/ca[agr]/=Q,";
    var v916 = v970 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v853 = v916 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]|c[tu]g/=S,";
    var v776 = v853 + "/ac[acgturyswkmbdhvn]/=T,";
    var v675 = v776 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v544 = v675 + "/[tu]gg/=W,";
    var v284 = v544 + "/[tu]a[ctuy]/=Y,";
    return v284 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*";
  }
  var v545 = type$$25.toLowerCase();
  var v287 = v545 == "transl_table=13";
  if (v287) {
    var v1270 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1253 = v1270 + "/ga[tcuy]/=D,";
    var v1236 = v1253 + "/ga[agr]/=E,";
    var v1218 = v1236 + "/[tu][tu][tcuy]/=F,";
    var v1199 = v1218 + "/gg[acgturyswkmbdhvn]|ag[agr]|[agr]g[agr]/=G,";
    var v1178 = v1199 + "/ca[tcuy]/=H,";
    var v1157 = v1178 + "/a[tu][tcuy]/=I,";
    var v1136 = v1157 + "/aa[agr]/=K,";
    var v1111 = v1136 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1086 = v1111 + "/a[tu][agr]/=M,";
    var v1057 = v1086 + "/aa[tucy]/=N,";
    var v1025 = v1057 + "/cc[acgturyswkmbdhvn]/=P,";
    var v971 = v1025 + "/ca[agr]/=Q,";
    var v917 = v971 + "/cg[acgturyswkmbdhvn]/=R,";
    var v854 = v917 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v777 = v854 + "/ac[acgturyswkmbdhvn]/=T,";
    var v676 = v777 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v546 = v676 + "/[tu]g[agr]/=W,";
    var v286 = v546 + "/[tu]a[ctuy]/=Y,";
    return v286 + "/[tu]a[agr]/=*";
  }
  var v547 = type$$25.toLowerCase();
  var v289 = v547 == "transl_table=14";
  if (v289) {
    var v1271 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1254 = v1271 + "/ga[tcuy]/=D,";
    var v1237 = v1254 + "/ga[agr]/=E,";
    var v1219 = v1237 + "/[tu][tu][tcuy]/=F,";
    var v1200 = v1219 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1179 = v1200 + "/ca[tcuy]/=H,";
    var v1158 = v1179 + "/a[tu][atcuwmhy]/=I,";
    var v1137 = v1158 + "/aag/=K,";
    var v1112 = v1137 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1087 = v1112 + "/a[tu]g/=M,";
    var v1058 = v1087 + "/aa[atcuwmhy]/=N,";
    var v1026 = v1058 + "/cc[acgturyswkmbdhvn]/=P,";
    var v972 = v1026 + "/ca[agr]/=Q,";
    var v918 = v972 + "/cg[acgturyswkmbdhvn]/=R,";
    var v855 = v918 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v778 = v855 + "/ac[acgturyswkmbdhvn]/=T,";
    var v677 = v778 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v548 = v677 + "/[tu]g[agr]/=W,";
    var v288 = v548 + "/[tu]a[atcuwmhy]/=Y,";
    return v288 + "/[tu]ag/=*";
  }
  var v549 = type$$25.toLowerCase();
  var v291 = v549 == "transl_table=15";
  if (v291) {
    var v1272 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1255 = v1272 + "/ga[tcuy]/=D,";
    var v1238 = v1255 + "/ga[agr]/=E,";
    var v1220 = v1238 + "/[tu][tu][tcuy]/=F,";
    var v1201 = v1220 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1180 = v1201 + "/ca[tcuy]/=H,";
    var v1159 = v1180 + "/a[tu][atcuwmhy]/=I,";
    var v1138 = v1159 + "/aa[agr]/=K,";
    var v1113 = v1138 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1088 = v1113 + "/a[tu]g/=M,";
    var v1059 = v1088 + "/aa[tucy]/=N,";
    var v1027 = v1059 + "/cc[acgturyswkmbdhvn]/=P,";
    var v973 = v1027 + "/ca[agr]|[tu]ag|[tcuy]ag/=Q,";
    var v919 = v973 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v856 = v919 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v779 = v856 + "/ac[acgturyswkmbdhvn]/=T,";
    var v678 = v779 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v550 = v678 + "/[tu]gg/=W,";
    var v290 = v550 + "/[tu]a[ctuy]/=Y,";
    return v290 + "/[tu][agr]a/=*";
  }
  var v551 = type$$25.toLowerCase();
  var v293 = v551 == "transl_table=16";
  if (v293) {
    var v1273 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1256 = v1273 + "/ga[tcuy]/=D,";
    var v1239 = v1256 + "/ga[agr]/=E,";
    var v1221 = v1239 + "/[tu][tu][tcuy]/=F,";
    var v1202 = v1221 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1181 = v1202 + "/ca[tcuy]/=H,";
    var v1160 = v1181 + "/a[tu][atcuwmhy]/=I,";
    var v1139 = v1160 + "/aa[agr]/=K,";
    var v1114 = v1139 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]|[tu]ag|[tu][atuw]g/=L,";
    var v1089 = v1114 + "/a[tu]g/=M,";
    var v1060 = v1089 + "/aa[tucy]/=N,";
    var v1028 = v1060 + "/cc[acgturyswkmbdhvn]/=P,";
    var v974 = v1028 + "/ca[agr]/=Q,";
    var v920 = v974 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v857 = v920 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v780 = v857 + "/ac[acgturyswkmbdhvn]/=T,";
    var v679 = v780 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v552 = v679 + "/[tu]gg/=W,";
    var v292 = v552 + "/[tu]a[ctuy]/=Y,";
    return v292 + "/[tu][agr]a/=*";
  }
  var v553 = type$$25.toLowerCase();
  var v295 = v553 == "transl_table=21";
  if (v295) {
    var v1274 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1257 = v1274 + "/ga[tcuy]/=D,";
    var v1240 = v1257 + "/ga[agr]/=E,";
    var v1222 = v1240 + "/[tu][tu][tcuy]/=F,";
    var v1203 = v1222 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1182 = v1203 + "/ca[tcuy]/=H,";
    var v1161 = v1182 + "/a[tu][tcuy]/=I,";
    var v1140 = v1161 + "/aag/=K,";
    var v1115 = v1140 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1090 = v1115 + "/a[tu][agr]/=M,";
    var v1061 = v1090 + "/aa[atcuwmhy]/=N,";
    var v1029 = v1061 + "/cc[acgturyswkmbdhvn]/=P,";
    var v975 = v1029 + "/ca[agr]/=Q,";
    var v921 = v975 + "/cg[acgturyswkmbdhvn]/=R,";
    var v858 = v921 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v781 = v858 + "/ac[acgturyswkmbdhvn]/=T,";
    var v680 = v781 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v554 = v680 + "/[tu]g[agr]/=W,";
    var v294 = v554 + "/[tu]a[ctuy]/=Y,";
    return v294 + "/[tu]a[agr]/=*";
  }
  var v555 = type$$25.toLowerCase();
  var v297 = v555 == "transl_table=22";
  if (v297) {
    var v1275 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1258 = v1275 + "/ga[tcuy]/=D,";
    var v1241 = v1258 + "/ga[agr]/=E,";
    var v1223 = v1241 + "/[tu][tu][tcuy]/=F,";
    var v1204 = v1223 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1183 = v1204 + "/ca[tcuy]/=H,";
    var v1162 = v1183 + "/a[tu][atcuwmhy]/=I,";
    var v1141 = v1162 + "/aa[agr]/=K,";
    var v1116 = v1141 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]|[tu]ag|[tu][atuw]g/=L,";
    var v1091 = v1116 + "/a[tu]g/=M,";
    var v1062 = v1091 + "/aa[tucy]/=N,";
    var v1030 = v1062 + "/cc[acgturyswkmbdhvn]/=P,";
    var v976 = v1030 + "/ca[agr]/=Q,";
    var v922 = v976 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v859 = v922 + "/[tu]c[cgtyskb]|ag[ct]/=S,";
    var v782 = v859 + "/ac[acgturyswkmbdhvn]/=T,";
    var v681 = v782 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v556 = v681 + "/[tu]gg/=W,";
    var v296 = v556 + "/[tu]a[ctuy]/=Y,";
    return v296 + "/[tu][agcrsmv]a/=*";
  }
  var v557 = type$$25.toLowerCase();
  var v299 = v557 == "transl_table=23";
  if (v299) {
    var v1276 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1259 = v1276 + "/ga[tcuy]/=D,";
    var v1242 = v1259 + "/ga[agr]/=E,";
    var v1224 = v1242 + "/[tu][tu][tcuy]/=F,";
    var v1205 = v1224 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1184 = v1205 + "/ca[tcuy]/=H,";
    var v1163 = v1184 + "/a[tu][atcuwmhy]/=I,";
    var v1142 = v1163 + "/aa[agr]/=K,";
    var v1117 = v1142 + "/c[tu][acgturyswkmbdhvn]|[ctuy][tu]g/=L,";
    var v1092 = v1117 + "/a[tu]g/=M,";
    var v1063 = v1092 + "/aa[tucy]/=N,";
    var v1031 = v1063 + "/cc[acgturyswkmbdhvn]/=P,";
    var v977 = v1031 + "/ca[agr]/=Q,";
    var v923 = v977 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v860 = v923 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v783 = v860 + "/ac[acgturyswkmbdhvn]/=T,";
    var v682 = v783 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v558 = v682 + "/[tu]gg/=W,";
    var v298 = v558 + "/[tu]a[ctuy]/=Y,";
    return v298 + "/[tu]a[agr]|[tu]ga|[tu][agtrwkd]a/=*";
  }
  return true;
}
function orfFind() {
  var theDocument = document;
  var newDna = "";
  var title$$9 = "";
  var maxInput$$3 = 1E5;
  var v559 = testScript();
  var v300 = v559 == false;
  if (v300) {
    return;
  }
  var v978 = theDocument.forms;
  var v924 = v978[0];
  var v861 = v924.elements;
  var v784 = v861[8];
  var v683 = v784.options;
  var v979 = theDocument.forms;
  var v925 = v979[0];
  var v862 = v925.elements;
  var v785 = v862[8];
  var v684 = v785.selectedIndex;
  var v560 = v683[v684];
  var v301 = v560.value;
  var geneticCode = getGeneticCodeString(v301);
  introspect(JAM.policy.p16) {
    geneticCode = geneticCode.split(/,/);
  }
  var v863 = theDocument.forms;
  var v786 = v863[0];
  var v685 = v786.elements;
  var v561 = v685[7];
  var v302 = v561.value;
  introspect(JAM.policy.p15) {
    var enteredNumber = v302.replace(/[^\d]/g, "")
  }
  var v1064 = theDocument.forms;
  var v1032 = v1064[0];
  var v980 = v1032.elements;
  var v926 = v980[0];
  var v864 = checkFormElement(v926);
  var v787 = v864 == false;
  var v866 = !v787;
  if (v866) {
    var v1065 = theDocument.forms;
    var v1033 = v1065[0];
    var v981 = v1033.elements;
    var v927 = v981[7];
    var v865 = checkFormElement(v927);
    v787 = v865 == false;
  }
  var v686 = v787;
  var v789 = !v686;
  if (v789) {
    var v788 = verifyDigits(enteredNumber);
    v686 = v788 == false;
  }
  var v562 = v686;
  var v688 = !v562;
  if (v688) {
    var v1034 = theDocument.forms;
    var v982 = v1034[0];
    var v928 = v982.elements;
    var v867 = v928[0];
    var v790 = v867.value;
    var v687 = checkSequenceLength(v790, maxInput$$3);
    v562 = v687 == false;
  }
  var v303 = v562;
  if (v303) {
    return;
  }
  var v563 = checkGeneticCode(geneticCode);
  var v304 = v563 == false;
  if (v304) {
    return;
  }
  var v868 = theDocument.forms;
  var v791 = v868[0];
  var v689 = v791.elements;
  var v564 = v689[0];
  var v305 = v564.value;
  newDna = getSequenceFromFasta(v305);
  var v869 = theDocument.forms;
  var v792 = v869[0];
  var v690 = v792.elements;
  var v565 = v690[0];
  var v306 = v565.value;
  title$$9 = getTitleFromFasta(v306);
  verifyDna(newDna);
  newDna = removeNonDna(newDna);
  openWindow();
  var v307 = outputWindow.document;
  var v308 = getInfoFromTitleAndSequence(title$$9, newDna);
  introspect(JAM.policy.p17) {
    v307.write(v308);
  }
  openPre();
  var v1035 = theDocument.forms;
  var v983 = v1035[0];
  var v929 = v983.elements;
  var v870 = v929[5];
  var v793 = v870.options;
  var v1036 = theDocument.forms;
  var v984 = v1036[0];
  var v930 = v984.elements;
  var v871 = v930[5];
  var v794 = v871.selectedIndex;
  var v691 = v793[v794];
  var v566 = v691.value;
  var v318 = v566 == "all";
  if (v318) {
    var v985 = theDocument.forms;
    var v931 = v985[0];
    var v872 = v931.elements;
    var v795 = v872[4];
    var v692 = v795.options;
    var v986 = theDocument.forms;
    var v932 = v986[0];
    var v873 = v932.elements;
    var v796 = v873[4];
    var v693 = v796.selectedIndex;
    var v567 = v692[v693];
    var v309 = v567.value;
    var v987 = theDocument.forms;
    var v933 = v987[0];
    var v874 = v933.elements;
    var v797 = v874[6];
    var v694 = v797.options;
    var v988 = theDocument.forms;
    var v934 = v988[0];
    var v875 = v934.elements;
    var v798 = v875[6];
    var v695 = v798.selectedIndex;
    var v568 = v694[v695];
    var v310 = v568.value;
    writeOrfs(newDna, geneticCode, v309, 0, v310, enteredNumber);
    var v989 = theDocument.forms;
    var v935 = v989[0];
    var v876 = v935.elements;
    var v799 = v876[4];
    var v696 = v799.options;
    var v990 = theDocument.forms;
    var v936 = v990[0];
    var v877 = v936.elements;
    var v800 = v877[4];
    var v697 = v800.selectedIndex;
    var v569 = v696[v697];
    var v311 = v569.value;
    var v991 = theDocument.forms;
    var v937 = v991[0];
    var v878 = v937.elements;
    var v801 = v878[6];
    var v698 = v801.options;
    var v992 = theDocument.forms;
    var v938 = v992[0];
    var v879 = v938.elements;
    var v802 = v879[6];
    var v699 = v802.selectedIndex;
    var v570 = v698[v699];
    var v312 = v570.value;
    writeOrfs(newDna, geneticCode, v311, 1, v312, enteredNumber);
    var v993 = theDocument.forms;
    var v939 = v993[0];
    var v880 = v939.elements;
    var v803 = v880[4];
    var v700 = v803.options;
    var v994 = theDocument.forms;
    var v940 = v994[0];
    var v881 = v940.elements;
    var v804 = v881[4];
    var v701 = v804.selectedIndex;
    var v571 = v700[v701];
    var v313 = v571.value;
    var v995 = theDocument.forms;
    var v941 = v995[0];
    var v882 = v941.elements;
    var v805 = v882[6];
    var v702 = v805.options;
    var v996 = theDocument.forms;
    var v942 = v996[0];
    var v883 = v942.elements;
    var v806 = v883[6];
    var v703 = v806.selectedIndex;
    var v572 = v702[v703];
    var v314 = v572.value;
    writeOrfs(newDna, geneticCode, v313, 2, v314, enteredNumber);
  } else {
    var v997 = theDocument.forms;
    var v943 = v997[0];
    var v884 = v943.elements;
    var v807 = v884[4];
    var v704 = v807.options;
    var v998 = theDocument.forms;
    var v944 = v998[0];
    var v885 = v944.elements;
    var v808 = v885[4];
    var v705 = v808.selectedIndex;
    var v573 = v704[v705];
    var v315 = v573.value;
    var v999 = theDocument.forms;
    var v945 = v999[0];
    var v886 = v945.elements;
    var v809 = v886[5];
    var v706 = v809.options;
    var v1000 = theDocument.forms;
    var v946 = v1000[0];
    var v887 = v946.elements;
    var v810 = v887[5];
    var v707 = v810.selectedIndex;
    var v574 = v706[v707];
    var v316 = v574.value;
    var v1001 = theDocument.forms;
    var v947 = v1001[0];
    var v888 = v947.elements;
    var v811 = v888[6];
    var v708 = v811.options;
    var v1002 = theDocument.forms;
    var v948 = v1002[0];
    var v889 = v948.elements;
    var v812 = v889[6];
    var v709 = v812.selectedIndex;
    var v575 = v708[v709];
    var v317 = v575.value;
    writeOrfs(newDna, geneticCode, v315, v316, v317, enteredNumber);
  }
  closePre();
  closeWindow();
  return;
}
function writeOrfs(dnaSequence$$3, geneticCode$$1, startCodons, startPos, strand, theLength) {
  function v2(str$$8, p1$$2, offset$$10, s$$4) {
    var v319 = " " + p1$$2;
    return v319 + " ";
  }
  var i$$11 = 0;
  var k$$3 = 0;
  var codon$$1 = "";
  var foundStart = false;
  var geneticCodeMatchExp$$2 = getGeneticCodeMatchExp(geneticCode$$1);
  var geneticCodeMatchResult$$2 = getGeneticCodeMatchResult(geneticCode$$1);
  var proteinLength = 0;
  var foundStop = false;
  var geneticCodeMatchExpStop;
  var j$$10 = 0;
  var v576 = geneticCodeMatchExp$$2.length;
  var v321 = j$$10 < v576;
  for (;v321;) {
    var v577 = geneticCodeMatchResult$$2[j$$10];
    var v320 = v577 == "*";
    if (v320) {
      geneticCodeMatchExpStop = geneticCodeMatchExp$$2[j$$10];
      break;
    }
    j$$10++;
    var v578 = geneticCodeMatchExp$$2.length;
    v321 = j$$10 < v578;
  }
  var startRe = new RegExp(startCodons, "i");
  var sequenceToTranslate;
  startPos = parseInt(startPos);
  var rf = startPos + 1;
  theLength = parseInt(theLength);
  var v323 = strand == "reverse";
  if (v323) {
    var v322 = complement(dnaSequence$$3);
    dnaSequence$$3 = reverse(v322);
  }
  var v710 = dnaSequence$$3.length;
  var v579 = v710 - 3;
  var v342 = i$$11 <= v579;
  for (;v342;) {
    i$$11 = startPos;
    var v711 = dnaSequence$$3.length;
    var v580 = v711 - 3;
    var v341 = i$$11 <= v580;
    for (;v341;) {
      var v324 = i$$11 + 3;
      introspect(JAM.policy.p15) {
        codon$$1 = dnaSequence$$3.substring(i$$11, v324);
      }
      var v712 = startCodons != "any";
      if (v712) {
        v712 = foundStart == false;
      }
      var v581 = v712;
      if (v581) {
        introspect(JAM.policy.p17) {
          var v713 = codon$$1.search(startRe)
        }
        v581 = v713 == -1;
      }
      var v325 = v581;
      if (v325) {
        break;
      }
      foundStart = true;
      introspect(JAM.policy.p17) {
        var v582 = codon$$1.search(geneticCodeMatchExpStop)
      }
      var v326 = v582 != -1;
      if (v326) {
        foundStop = true;
      }
      proteinLength++;
      var v583 = foundStop;
      if (v583) {
        v583 = proteinLength < theLength;
      }
      var v327 = v583;
      if (v327) {
        break;
      }
      var v714 = foundStop;
      if (v714) {
        v714 = proteinLength >= theLength;
      }
      var v584 = v714;
      var v716 = !v584;
      if (v716) {
        var v890 = dnaSequence$$3.length;
        var v813 = v890 - 5;
        var v715 = i$$11 >= v813;
        if (v715) {
          v715 = proteinLength >= theLength;
        }
        v584 = v715;
      }
      var v340 = v584;
      if (v340) {
        var v328 = i$$11 + 3;
        introspect(JAM.policy.p27) {
          sequenceToTranslate = dnaSequence$$3.substring(startPos, v328);
        }
        var v329 = outputWindow.document;
        var v1118 = k$$3 + 1;
        var v1093 = "&gt;ORF number " + v1118;
        var v1066 = v1093 + " in reading frame ";
        var v1037 = v1066 + rf;
        var v1003 = v1037 + " on the ";
        var v949 = v1003 + strand;
        var v891 = v949 + " strand extends from base ";
        var v892 = startPos + 1;
        var v814 = v891 + v892;
        var v717 = v814 + " to base ";
        var v718 = i$$11 + 3;
        var v585 = v717 + v718;
        var v330 = v585 + ".\n";
        introspect(JAM.policy.p17) {
          v329.write(v330);
        }
        var v331 = outputWindow.document;
        var v586 = addReturns(sequenceToTranslate);
        var v332 = v586 + "\n\n";
        introspect(JAM.policy.p17) {
          v331.write(v332);
        }
        var v333 = outputWindow.document;
        var v1004 = k$$3 + 1;
        var v950 = "&gt;Translation of ORF number " + v1004;
        var v893 = v950 + " in reading frame ";
        var v815 = v893 + rf;
        var v719 = v815 + " on the ";
        var v587 = v719 + strand;
        var v334 = v587 + " strand.\n";
        introspect(JAM.policy.p17) {
          v333.write(v334);
        }
        introspect(JAM.policy.p15) {
          sequenceToTranslate = sequenceToTranslate.replace(/(...)/g, v2);
        }
        var m = 0;
        var v588 = geneticCodeMatchExp$$2.length;
        var v337 = m < v588;
        for (;v337;) {
          var v335 = geneticCodeMatchExp$$2[m];
          var v336 = geneticCodeMatchResult$$2[m];
          introspect(JAM.policy.p27) {
            sequenceToTranslate = sequenceToTranslate.replace(v335, v336);
          }
          m++;
          var v589 = geneticCodeMatchExp$$2.length;
          v337 = m < v589;
        }
        introspect(JAM.policy.p15) {
          sequenceToTranslate = sequenceToTranslate.replace(/\S{3}/g, "X");
        }
        introspect(JAM.policy.p15) {
          sequenceToTranslate = sequenceToTranslate.replace(/\s/g, "");
        }
        introspect(JAM.policy.p15) {
          sequenceToTranslate = sequenceToTranslate.replace(/[a-z]/g, "");
        }
        var v338 = outputWindow.document;
        var v590 = addReturns(sequenceToTranslate);
        var v339 = v590 + "\n\n";
        introspect(JAM.policy.p17) {
          v338.write(v339);
        }
        k$$3 = k$$3 + 1;
        break;
      }
      i$$11 = i$$11 + 3;
      var v720 = dnaSequence$$3.length;
      var v591 = v720 - 3;
      v341 = i$$11 <= v591;
    }
    startPos = i$$11 + 3;
    i$$11 = startPos;
    foundStart = false;
    foundStop = false;
    proteinLength = 0;
    var v721 = dnaSequence$$3.length;
    var v592 = v721 - 3;
    v342 = i$$11 <= v592;
  }
  var v345 = k$$3 == 0;
  if (v345) {
    var v343 = outputWindow.document;
    var v593 = "No ORFs were found in reading frame " + rf;
    var v344 = v593 + ".\n\n";
    introspect(JAM.policy.p17) {
      v343.write(v344);
    }
  }
  return;
}
document.onload = v3;
introspect(JAM.policy.p9) {
  var v346 = document.getElementById("submitbtn")
}
v346.onclick = v4;
introspect(JAM.policy.p9) {
  var v347 = document.getElementById("clearbtn")
}
v347.onclick = v5

JAM.stopProfile('load');
