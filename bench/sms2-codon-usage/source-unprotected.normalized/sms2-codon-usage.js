function v6() {
  var v773 = document.forms;
  var v653 = v773[0];
  var v385 = v653.elements;
  var v7 = v385[0];
  v7.value = " ";
  var v774 = document.forms;
  var v654 = v774[0];
  var v386 = v654.elements;
  var v8 = v386[4];
  v8.value = " ";
  return;
}
function v5() {
  try {
    codonUsage();
  } catch (e$$5) {
    var v9 = "The following error was encountered: " + e$$5;
    alert(v9);
  }
  return;
}
function v4() {
  var v387 = document.main_form;
  var v10 = v387.main_submit;
  v10.focus();
  return;
}
function addReturns(sequence) {
  function v0(str$$6, p1, offset$$8, s$$2) {
    return p1 + "\n";
  }
  sequence = sequence.replace(/(.{60})/g, v0);
  return sequence;
}
function checkAlign(arrayOfTitles, arrayOfSequences) {
  var v11 = arrayOfSequences[0];
  var lengthOfAlign = v11.length;
  var v388 = arrayOfSequences.length;
  var v12 = v388 < 2;
  if (v12) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v389 = arrayOfTitles.length;
  var v14 = i$$1 < v389;
  for (;v14;) {
    var v847 = arrayOfTitles[i$$1];
    var v775 = v847.search(/\S/);
    var v655 = v775 == -1;
    var v777 = !v655;
    if (v777) {
      var v848 = arrayOfSequences[i$$1];
      var v776 = v848.search(/\S/);
      v655 = v776 == -1;
    }
    var v390 = v655;
    var v657 = !v390;
    if (v657) {
      var v778 = arrayOfSequences[i$$1];
      var v656 = v778.length;
      v390 = v656 != lengthOfAlign;
    }
    var v13 = v390;
    if (v13) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v391 = arrayOfTitles.length;
    v14 = i$$1 < v391;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v903 = codonTable.search(/AmAcid/);
  var v849 = v903 == -1;
  var v905 = !v849;
  if (v905) {
    var v904 = codonTable.search(/Codon/);
    v849 = v904 == -1;
  }
  var v779 = v849;
  var v851 = !v779;
  if (v851) {
    var v850 = codonTable.search(/Number/);
    v779 = v850 == -1;
  }
  var v658 = v779;
  var v781 = !v658;
  if (v781) {
    var v780 = codonTable.search(/\/1000/);
    v658 = v780 == -1;
  }
  var v392 = v658;
  var v660 = !v392;
  if (v660) {
    var v659 = codonTable.search(/Fraction\s*\.\./);
    v392 = v659 == -1;
  }
  var v15 = v392;
  if (v15) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v661 = formElement.value;
  var v393 = v661.search(/\S/);
  var v16 = v393 == -1;
  if (v16) {
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
  var v394 = arrayOfPatterns.length;
  var v19 = z$$2 < v394;
  for (;v19;) {
    var v662 = arrayOfPatterns[z$$2];
    var v395 = v662.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v17 = v395 == -1;
    if (v17) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v663 = arrayOfPatterns[z$$2];
    var v396 = moreExpressionCheck(v663);
    var v18 = v396 == false;
    if (v18) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v397 = arrayOfPatterns.length;
    v19 = z$$2 < v397;
  }
  var v20 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v20);
  var v21 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v21);
  var j = 0;
  var v398 = arrayOfPatterns.length;
  var v25 = j < v398;
  for (;v25;) {
    var v664 = arrayOfPatterns[j];
    var v399 = v664.match(/\/.+\//);
    var v22 = v399 + "gi";
    var v1246 = eval(v22);
    geneticCodeMatchExp[j] = v1246;
    var v400 = arrayOfPatterns[j];
    var v23 = v400.match(/=[a-zA-Z\*]/);
    var v1247 = v23.toString();
    geneticCodeMatchResult[j] = v1247;
    var v24 = geneticCodeMatchResult[j];
    var v1248 = v24.replace(/=/g, "");
    geneticCodeMatchResult[j] = v1248;
    j++;
    var v401 = arrayOfPatterns.length;
    v25 = j < v401;
  }
  var i$$2 = 0;
  var v665 = testSequence.length;
  var v402 = v665 - 3;
  var v32 = i$$2 <= v402;
  for (;v32;) {
    var v26 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v26);
    j = 0;
    var v403 = geneticCodeMatchExp.length;
    var v30 = j < v403;
    for (;v30;) {
      var v666 = geneticCodeMatchExp[j];
      var v404 = codon.search(v666);
      var v29 = v404 != -1;
      if (v29) {
        var v28 = oneMatch == true;
        if (v28) {
          var v405 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v27 = v405 + ".";
          alert(v27);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v406 = geneticCodeMatchExp.length;
      v30 = j < v406;
    }
    var v31 = oneMatch == false;
    if (v31) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v667 = testSequence.length;
    var v407 = v667 - 3;
    v32 = i$$2 <= v407;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v408 = arrayOfPatterns$$1.length;
  var v34 = z$$3 < v408;
  for (;v34;) {
    var v668 = arrayOfPatterns$$1[z$$3];
    var v409 = v668.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v33 = v409 != -1;
    if (v33) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v410 = arrayOfPatterns$$1.length;
    v34 = z$$3 < v410;
  }
  var i$$3 = 0;
  var v411 = arrayOfPatterns$$1.length;
  var v38 = i$$3 < v411;
  for (;v38;) {
    var v669 = arrayOfPatterns$$1[i$$3];
    var v412 = "[" + v669;
    var v35 = v412 + "]";
    var re = new RegExp(v35, "gi");
    var j$$1 = i$$3 + 1;
    var v413 = arrayOfPatterns$$1.length;
    var v37 = j$$1 < v413;
    for (;v37;) {
      var v670 = arrayOfPatterns$$1[j$$1];
      var v414 = v670.search(re);
      var v36 = v414 != -1;
      if (v36) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v415 = arrayOfPatterns$$1.length;
      v37 = j$$1 < v415;
    }
    i$$3++;
    var v416 = arrayOfPatterns$$1.length;
    v38 = i$$3 < v416;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v417 = arrayOfPatterns$$2.length;
  var v41 = z$$4 < v417;
  for (;v41;) {
    var v671 = arrayOfPatterns$$2[z$$4];
    var v418 = v671.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v39 = v418 == -1;
    if (v39) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v672 = arrayOfPatterns$$2[z$$4];
    var v419 = moreExpressionCheck(v672);
    var v40 = v419 == false;
    if (v40) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v420 = arrayOfPatterns$$2.length;
    v41 = z$$4 < v420;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v782 = getSequenceFromFasta(text$$7);
  var v673 = v782.replace(/[^A-Za-z]/g, "");
  var v421 = v673.length;
  var v43 = v421 > maxInput;
  if (v43) {
    var v422 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v42 = v422 + " characters.";
    alert(v42);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v423 = text$$8.length;
  var v45 = v423 > maxInput$$1;
  if (v45) {
    var v424 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v44 = v424 + " characters.";
    alert(v44);
    return false;
  } else {
    return true;
  }
  return;
}
function complement(dnaSequence) {
  dnaSequence = dnaSequence.replace(/g/g, "1");
  dnaSequence = dnaSequence.replace(/c/g, "2");
  dnaSequence = dnaSequence.replace(/1/g, "c");
  dnaSequence = dnaSequence.replace(/2/g, "g");
  dnaSequence = dnaSequence.replace(/G/g, "1");
  dnaSequence = dnaSequence.replace(/C/g, "2");
  dnaSequence = dnaSequence.replace(/1/g, "C");
  dnaSequence = dnaSequence.replace(/2/g, "G");
  dnaSequence = dnaSequence.replace(/a/g, "1");
  dnaSequence = dnaSequence.replace(/t/g, "2");
  dnaSequence = dnaSequence.replace(/1/g, "t");
  dnaSequence = dnaSequence.replace(/2/g, "a");
  dnaSequence = dnaSequence.replace(/A/g, "1");
  dnaSequence = dnaSequence.replace(/T/g, "2");
  dnaSequence = dnaSequence.replace(/1/g, "T");
  dnaSequence = dnaSequence.replace(/2/g, "A");
  dnaSequence = dnaSequence.replace(/u/g, "a");
  dnaSequence = dnaSequence.replace(/U/g, "A");
  dnaSequence = dnaSequence.replace(/r/g, "1");
  dnaSequence = dnaSequence.replace(/y/g, "2");
  dnaSequence = dnaSequence.replace(/1/g, "y");
  dnaSequence = dnaSequence.replace(/2/g, "r");
  dnaSequence = dnaSequence.replace(/R/g, "1");
  dnaSequence = dnaSequence.replace(/Y/g, "2");
  dnaSequence = dnaSequence.replace(/1/g, "Y");
  dnaSequence = dnaSequence.replace(/2/g, "R");
  dnaSequence = dnaSequence.replace(/k/g, "1");
  dnaSequence = dnaSequence.replace(/m/g, "2");
  dnaSequence = dnaSequence.replace(/1/g, "m");
  dnaSequence = dnaSequence.replace(/2/g, "k");
  dnaSequence = dnaSequence.replace(/K/g, "1");
  dnaSequence = dnaSequence.replace(/M/g, "2");
  dnaSequence = dnaSequence.replace(/1/g, "M");
  dnaSequence = dnaSequence.replace(/2/g, "K");
  dnaSequence = dnaSequence.replace(/b/g, "1");
  dnaSequence = dnaSequence.replace(/v/g, "2");
  dnaSequence = dnaSequence.replace(/1/g, "v");
  dnaSequence = dnaSequence.replace(/2/g, "b");
  dnaSequence = dnaSequence.replace(/B/g, "1");
  dnaSequence = dnaSequence.replace(/V/g, "2");
  dnaSequence = dnaSequence.replace(/1/g, "V");
  dnaSequence = dnaSequence.replace(/2/g, "B");
  dnaSequence = dnaSequence.replace(/d/g, "1");
  dnaSequence = dnaSequence.replace(/h/g, "2");
  dnaSequence = dnaSequence.replace(/1/g, "h");
  dnaSequence = dnaSequence.replace(/2/g, "d");
  dnaSequence = dnaSequence.replace(/D/g, "1");
  dnaSequence = dnaSequence.replace(/H/g, "2");
  dnaSequence = dnaSequence.replace(/1/g, "H");
  dnaSequence = dnaSequence.replace(/2/g, "D");
  return dnaSequence;
}
function closeForm() {
  var v46 = outputWindow.document;
  v46.write("</form>");
  return true;
}
function closePre() {
  var v47 = outputWindow.document;
  v47.write("</div>");
  var v48 = outputWindow.document;
  v48.write("</pre>\n");
  return;
}
function closeTextArea() {
  var v49 = outputWindow.document;
  v49.write("</textarea>");
  return true;
}
function closeWindow() {
  var v50 = outputWindow.document;
  v50.write("</body>\n</html>\n");
  outputWindow.status = "Done.";
  var v51 = outputWindow.document;
  v51.close();
  return;
}
function convertDegenerates(sequence$$1) {
  sequence$$1 = sequence$$1.toLowerCase();
  sequence$$1 = sequence$$1.replace(/t/g, "[TU]");
  sequence$$1 = sequence$$1.replace(/r/g, "[AGR]");
  sequence$$1 = sequence$$1.replace(/y/g, "[CTUY]");
  sequence$$1 = sequence$$1.replace(/s/g, "[GCS]");
  sequence$$1 = sequence$$1.replace(/w/g, "[ATUW]");
  sequence$$1 = sequence$$1.replace(/k/g, "[GTUK]");
  sequence$$1 = sequence$$1.replace(/m/g, "[ACM]");
  sequence$$1 = sequence$$1.replace(/b/g, "[CGTUBSKY]");
  sequence$$1 = sequence$$1.replace(/d/g, "[AGTUDRKW]");
  sequence$$1 = sequence$$1.replace(/h/g, "[ACTUHMYW]");
  sequence$$1 = sequence$$1.replace(/v/g, "[ACGVSMR]");
  sequence$$1 = sequence$$1.replace(/n/g, "[ACGTURYSWKMBDHVN]");
  return sequence$$1;
}
function earlyCheckAlign(alignArray) {
  var v425 = alignArray.length;
  var v52 = v425 < 3;
  if (v52) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v426 = alignArray.length;
  var v54 = i$$4 < v426;
  for (;v54;) {
    var v674 = alignArray[i$$4];
    var v427 = v674.search(/[^\s]+\s/);
    var v53 = v427 == -1;
    if (v53) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v428 = alignArray.length;
    v54 = i$$4 < v428;
  }
  return true;
}
function filterAlignSeq(alignSeq) {
  alignSeq = alignSeq.replace(/[^abcdefghiklmnpqrstvwxyz\.\-]/gi, "");
  return alignSeq;
}
function filterFastaTitle(sequenceTitle) {
  sequenceTitle = sequenceTitle.replace(/\s{2,}/g, " ");
  sequenceTitle = sequenceTitle.replace(/^\s*/g, "");
  sequenceTitle = sequenceTitle.replace(/[\f\n\r\t]+$/g, "\n");
  return sequenceTitle.replace(/[\<\>]\n/gi, "");
}
function getArrayOfFasta(sequenceData) {
  var arrayOfFasta = new Array;
  var matchArray;
  var re$$1 = /\>[^\>]+/g;
  var v429 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v57 = v429 != -1;
  if (v57) {
    var v56 = matchArray = re$$1.exec(sequenceData);
    for (;v56;) {
      var v55 = matchArray[0];
      arrayOfFasta.push(v55);
      v56 = matchArray = re$$1.exec(sequenceData);
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v430 = sequence$$2.length;
  var v58 = "&gt;results for " + v430;
  var stringToReturn = v58 + " residue sequence ";
  var v431 = fastaSequenceTitle.search(/[^\s]/);
  var v60 = v431 != -1;
  if (v60) {
    var v432 = stringToReturn + '"';
    var v59 = v432 + fastaSequenceTitle;
    stringToReturn = v59 + '"';
  }
  var v433 = stringToReturn + ' starting "';
  var v434 = sequence$$2.substring(0, 10);
  var v61 = v433 + v434;
  stringToReturn = v61 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v435 = sequenceOne.length;
  var v62 = "Search results for " + v435;
  var stringToReturn$$1 = v62 + " residue sequence ";
  var v436 = fastaSequenceTitleOne.search(/[^\s]/);
  var v64 = v436 != -1;
  if (v64) {
    var v437 = stringToReturn$$1 + '"';
    var v63 = v437 + fastaSequenceTitleOne;
    stringToReturn$$1 = v63 + '"';
  }
  var v438 = stringToReturn$$1 + ' starting "';
  var v439 = sequenceOne.substring(0, 10);
  var v65 = v438 + v439;
  stringToReturn$$1 = v65 + '"\n';
  var v440 = stringToReturn$$1 + "and ";
  var v441 = sequenceTwo.length;
  var v66 = v440 + v441;
  stringToReturn$$1 = v66 + " residue sequence ";
  var v442 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v68 = v442 != -1;
  if (v68) {
    var v443 = stringToReturn$$1 + '"';
    var v67 = v443 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v67 + '"';
  }
  var v444 = stringToReturn$$1 + ' starting "';
  var v445 = sequenceTwo.substring(0, 10);
  var v69 = v444 + v445;
  stringToReturn$$1 = v69 + '"';
  var v70 = '<div class="info">' + stringToReturn$$1;
  return v70 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v71 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v71);
  var j$$2 = 0;
  var v446 = arrayOfPatterns$$3.length;
  var v73 = j$$2 < v446;
  for (;v73;) {
    var v675 = arrayOfPatterns$$3[j$$2];
    var v447 = v675.match(/\/.+\//);
    var v72 = v447 + "gi";
    var v1249 = eval(v72);
    geneticCodeMatchExp$$1[j$$2] = v1249;
    j$$2++;
    var v448 = arrayOfPatterns$$3.length;
    v73 = j$$2 < v448;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v74 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v74);
  var j$$3 = 0;
  var v449 = arrayOfPatterns$$4.length;
  var v77 = j$$3 < v449;
  for (;v77;) {
    var v450 = arrayOfPatterns$$4[j$$3];
    var v75 = v450.match(/=[a-zA-Z\*]/);
    var v1250 = v75.toString();
    geneticCodeMatchResult$$1[j$$3] = v1250;
    var v76 = geneticCodeMatchResult$$1[j$$3];
    var v1251 = v76.replace(/=/g, "");
    geneticCodeMatchResult$$1[j$$3] = v1251;
    j$$3++;
    var v451 = arrayOfPatterns$$4.length;
    v77 = j$$3 < v451;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(sequence$$3) {
  var fastaSequenceTitle$$1 = title;
  var v452 = sequence$$3.length;
  var v78 = "Results for " + v452;
  var stringToReturn$$2 = v78 + " residue sequence ";
  var v453 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v80 = v453 != -1;
  if (v80) {
    var v454 = stringToReturn$$2 + '"';
    var v79 = v454 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v79 + '"';
  }
  var v455 = stringToReturn$$2 + ' starting "';
  var v456 = sequence$$3.substring(0, 10);
  var v81 = v455 + v456;
  stringToReturn$$2 = v81 + '"';
  var v82 = '<div class="info">' + stringToReturn$$2;
  return v82 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v676 = "Results for " + topology;
  var v457 = v676 + " ";
  var v458 = sequence$$4.length;
  var v83 = v457 + v458;
  var stringToReturn$$3 = v83 + " residue sequence ";
  var v459 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v85 = v459 != -1;
  if (v85) {
    var v460 = stringToReturn$$3 + '"';
    var v84 = v460 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v84 + '"';
  }
  var v461 = stringToReturn$$3 + ' starting "';
  var v462 = sequence$$4.substring(0, 10);
  var v86 = v461 + v462;
  stringToReturn$$3 = v86 + '"';
  var v87 = '<div class="info">' + stringToReturn$$3;
  return v87 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v463 = sequenceOne$$1.length;
  var v88 = "Alignment results for " + v463;
  var stringToReturn$$4 = v88 + " residue sequence ";
  var v464 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v90 = v464 != -1;
  if (v90) {
    var v465 = stringToReturn$$4 + '"';
    var v89 = v465 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v89 + '"';
  }
  var v466 = stringToReturn$$4 + ' starting "';
  var v467 = sequenceOne$$1.substring(0, 10);
  var v91 = v466 + v467;
  stringToReturn$$4 = v91 + '"\n';
  var v468 = stringToReturn$$4 + "and ";
  var v469 = sequenceTwo$$1.length;
  var v92 = v468 + v469;
  stringToReturn$$4 = v92 + " residue sequence ";
  var v470 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v94 = v470 != -1;
  if (v94) {
    var v471 = stringToReturn$$4 + '"';
    var v93 = v471 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v93 + '"';
  }
  var v472 = stringToReturn$$4 + ' starting "';
  var v473 = sequenceTwo$$1.substring(0, 10);
  var v95 = v472 + v473;
  stringToReturn$$4 = v95 + '"';
  var v96 = '<div class="info">' + stringToReturn$$4;
  return v96 + "</div>\n";
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v98 = j$$4 < lengthOut;
  for (;v98;) {
    var v474 = Math.random();
    var v475 = components.length;
    var v97 = v474 * v475;
    tempNum = Math.floor(v97);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4++;
    v98 = j$$4 < lengthOut;
  }
  return sequenceArray.join("");
}
function getSequenceFromFasta(sequenceRecord) {
  var v476 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v99 = v476 != -1;
  if (v99) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "");
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v477 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v101 = v477 != -1;
  if (v101) {
    var v100 = sequenceRecord$$1.match(/\>[^\f\n\r]+[\f\n\r]/, "");
    fastaTitle = v100.toString();
    fastaTitle = fastaTitle.replace(/\>|[\f\n\r]/g, "");
    fastaTitle = fastaTitle.replace(/\s{2,}/g, " ");
    fastaTitle = fastaTitle.replace(/[\<\>]/gi, "");
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  var v1088 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v1064 = v1088 != -1;
  var v1090 = !v1064;
  if (v1090) {
    var v1089 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    v1064 = v1089 != -1;
  }
  var v1038 = v1064;
  var v1066 = !v1038;
  if (v1066) {
    var v1065 = expressionToCheck.search(/\[\]/);
    v1038 = v1065 != -1;
  }
  var v1010 = v1038;
  var v1040 = !v1010;
  if (v1040) {
    var v1039 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
    v1010 = v1039 != -1;
  }
  var v979 = v1010;
  var v1012 = !v979;
  if (v1012) {
    var v1011 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
    v979 = v1011 != -1;
  }
  var v944 = v979;
  var v981 = !v944;
  if (v981) {
    var v980 = expressionToCheck.search(/\|\|/);
    v944 = v980 != -1;
  }
  var v906 = v944;
  var v946 = !v906;
  if (v946) {
    var v945 = expressionToCheck.search(/\/\|/);
    v906 = v945 != -1;
  }
  var v852 = v906;
  var v908 = !v852;
  if (v908) {
    var v907 = expressionToCheck.search(/\|\//);
    v852 = v907 != -1;
  }
  var v783 = v852;
  var v854 = !v783;
  if (v854) {
    var v853 = expressionToCheck.search(/\[.\]/);
    v783 = v853 != -1;
  }
  var v677 = v783;
  var v785 = !v677;
  if (v785) {
    var v784 = expressionToCheck.search(/\</);
    v677 = v784 != -1;
  }
  var v478 = v677;
  var v679 = !v478;
  if (v679) {
    var v678 = expressionToCheck.search(/\>/);
    v478 = v678 != -1;
  }
  var v102 = v478;
  if (v102) {
    return false;
  }
  return true;
}
function openForm() {
  var v103 = outputWindow.document;
  v103.write('<form action="">\n');
  return true;
}
function openPre() {
  var v104 = outputWindow.document;
  v104.write("<pre>");
  var v105 = outputWindow.document;
  v105.write('<div class="pre">');
  return;
}
function openTextArea() {
  var v106 = outputWindow.document;
  v106.write('<br /><textarea rows="6" cols="61">\n');
  return true;
}
function openWindow() {
  var title$$6 = "Codon Usage";
  _openWindow(title$$6);
  return;
}
function _openWindow(title$$7) {
  var isColor = true;
  outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  outputWindow.focus();
  var v107 = outputWindow.document;
  var v786 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v680 = v786 + "<head>\n";
  var v479 = v680 + "<title>Sequence Manipulation Suite</title>\n";
  var v108 = v479 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v107.write(v108);
  if (isColor) {
    var v109 = outputWindow.document;
    var v1154 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1133 = v1154 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1112 = v1133 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1091 = v1112 + "div.info {font-weight: bold}\n";
    var v1067 = v1091 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1041 = v1067 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v1013 = v1041 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v982 = v1013 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v947 = v982 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v909 = v947 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v855 = v909 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v787 = v855 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v681 = v787 + "td.many {color: #000000}\n";
    var v480 = v681 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v110 = v480 + "</style>\n";
    v109.write(v110);
  } else {
    var v111 = outputWindow.document;
    var v1175 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1155 = v1175 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1134 = v1155 + "div.title {display: none}\n";
    var v1113 = v1134 + "div.info {font-weight: bold}\n";
    var v1092 = v1113 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1068 = v1092 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1042 = v1068 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v1014 = v1042 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v983 = v1014 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v948 = v983 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v910 = v948 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v856 = v910 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v788 = v856 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v682 = v788 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v481 = v682 + "img {display: none}\n";
    var v112 = v481 + "</style>\n";
    v111.write(v112);
  }
  var v113 = outputWindow.document;
  var v789 = "</head>\n" + '<body class="main">\n';
  var v683 = v789 + '<div class="title">';
  var v482 = v683 + title$$7;
  var v114 = v482 + " results</div>\n";
  v113.write(v114);
  outputWindow.status = "Please Wait.";
  return;
}
function openWindowAlign(title$$8) {
  _openWindowAlign(title$$8);
  return;
}
function _openWindowAlign(title$$9) {
  var isBackground = true;
  outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  outputWindow.focus();
  var v115 = outputWindow.document;
  var v790 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v684 = v790 + "<head>\n";
  var v483 = v684 + "<title>Sequence Manipulation Suite</title>\n";
  var v116 = v483 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v115.write(v116);
  if (isBackground) {
    var v117 = outputWindow.document;
    var v1156 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1135 = v1156 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1114 = v1135 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1093 = v1114 + "div.info {font-weight: bold}\n";
    var v1069 = v1093 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v1043 = v1069 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v1015 = v1043 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v984 = v1015 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v949 = v984 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v911 = v949 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v857 = v911 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v791 = v857 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v685 = v791 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v484 = v685 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v118 = v484 + "</style>\n";
    v117.write(v118);
  } else {
    var v119 = outputWindow.document;
    var v1194 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1176 = v1194 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1157 = v1176 + "div.title {display: none}\n";
    var v1136 = v1157 + "div.info {font-weight: bold}\n";
    var v1115 = v1136 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1094 = v1115 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v1070 = v1094 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v1044 = v1070 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v1016 = v1044 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v985 = v1016 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v950 = v985 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v912 = v950 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v858 = v912 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v792 = v858 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v686 = v792 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v485 = v686 + "img {display: none}\n";
    var v120 = v485 + "</style>\n";
    v119.write(v120);
  }
  var v121 = outputWindow.document;
  var v793 = "</head>\n" + '<body class="main">\n';
  var v687 = v793 + '<div class="title">';
  var v486 = v687 + title$$9;
  var v122 = v486 + " results</div>\n";
  v121.write(v122);
  outputWindow.status = "Please Wait.";
  return;
}
function removeFormatting(sequence$$5) {
  return sequence$$5.replace(/[\d\s]/g, "");
}
function removeNonDna(sequence$$6) {
  return sequence$$6.replace(/[^gatucryswkmbdhvnxGATUCRYSWKMBDHVNX]/g, "");
}
function removeNonDnaStrict(sequence$$7) {
  return sequence$$7.replace(/[^gatucGATUC]/g, "");
}
function removeNonProtein(sequence$$8) {
  return sequence$$8.replace(/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, "");
}
function removeNonProteinStrict(sequence$$9) {
  return sequence$$9.replace(/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, "");
}
function removeNonProteinAllowDegen(sequence$$10) {
  return sequence$$10.replace(/[^ABCDEFGHIKLMNPQRSTVWYXZabcdefghiklmnpqrstvwyxz\*]/g, "");
}
function removeNonProteinAllowX(sequence$$11) {
  return sequence$$11.replace(/[^ACDEFGHIKLMNPQRSTVWYZXacdefghiklmnpqrstvwyzx\*]/g, "");
}
function removeWhiteSpace(text$$9) {
  return text$$9.replace(/\s/g, "");
}
function removeNonLetters(sequence$$12) {
  return sequence$$12.replace(/[^A-Z]/gi, "");
}
function reverse(dnaSequence$$1) {
  var tempDnaArray = new Array;
  var v487 = dnaSequence$$1.search(/./);
  var v123 = v487 != -1;
  if (v123) {
    tempDnaArray = dnaSequence$$1.match(/./g);
    tempDnaArray = tempDnaArray.reverse();
    dnaSequence$$1 = tempDnaArray.join("");
  }
  return dnaSequence$$1;
}
function rightNum(theNumber, sequenceToAppend, lengthOfColumn, tabIn) {
  var j$$5 = 0;
  var tempString = "";
  theNumber = theNumber.toString();
  j$$5 = theNumber.length;
  var v124 = j$$5 < lengthOfColumn;
  for (;v124;) {
    tempString = tempString + " ";
    j$$5++;
    v124 = j$$5 < lengthOfColumn;
  }
  var v125 = tempString + theNumber;
  theNumber = v125 + " ";
  var v126 = sequenceToAppend + theNumber;
  sequenceToAppend = v126 + tabIn;
  return sequenceToAppend;
}
function testScript() {
  function v1(str$$7, p1$$1, offset$$9, s$$3) {
    return p1$$1 + "X";
  }
  var testArray = new Array;
  var testString = "1234567890";
  testArray.push(testString);
  var v488 = testArray[0];
  var v127 = v488 != testString;
  if (v127) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v489 = testString.search(re$$2);
  var v128 = v489 == -1;
  if (v128) {
    alert("Regular expression 'm' flag not supported. See browser compatibility page.");
    return false;
  }
  var caughtException = false;
  try {
    re$$2 = eval("Exception handling not supported. Check browser compatibility page.");
  } catch (e$$4) {
    caughtException = true;
  }
  var v129 = !caughtException;
  if (v129) {
    alert("Exception handling not supported. See browser compatibility page.");
  }
  testString = "123";
  testString = testString.replace(/(\d)/g, v1);
  var v130 = testString != "1X2X3X";
  if (v130) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false;
  }
  var testNum = 2489.8237;
  var v490 = testNum.toFixed(3);
  var v131 = v490 != 2489.824;
  if (v131) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v491 = testNum.toPrecision(5);
  var v132 = v491 != 2489.8;
  if (v132) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v492 = theNumber$$1.search(/\d/);
  var v133 = v492 == -1;
  if (v133) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v859 = emblFile.search(/ID/);
  var v794 = v859 == -1;
  var v861 = !v794;
  if (v861) {
    var v860 = emblFile.search(/AC/);
    v794 = v860 == -1;
  }
  var v688 = v794;
  var v796 = !v688;
  if (v796) {
    var v795 = emblFile.search(/DE/);
    v688 = v795 == -1;
  }
  var v493 = v688;
  var v690 = !v493;
  if (v690) {
    var v689 = emblFile.search(/SQ/);
    v493 = v689 == -1;
  }
  var v134 = v493;
  if (v134) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v494 = theNumber$$2.search(/\d/);
  var v135 = v494 == -1;
  if (v135) {
    alert("Please enter a number.");
    return false;
  }
  var v137 = theNumber$$2 > maxInput$$2;
  if (v137) {
    var v495 = "Please enter a number less than or equal to " + maxInput$$2;
    var v136 = v495 + ".";
    alert(v136);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v496 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v138 = v496 != -1;
  if (v138) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v497 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v139 = v497 != -1;
  if (v139) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v862 = genBankFile.search(/LOCUS/);
  var v797 = v862 == -1;
  var v864 = !v797;
  if (v864) {
    var v863 = genBankFile.search(/DEFINITION/);
    v797 = v863 == -1;
  }
  var v691 = v797;
  var v799 = !v691;
  if (v799) {
    var v798 = genBankFile.search(/ACCESSION/);
    v691 = v798 == -1;
  }
  var v498 = v691;
  var v693 = !v498;
  if (v693) {
    var v692 = genBankFile.search(/ORIGIN/);
    v498 = v692 == -1;
  }
  var v140 = v498;
  if (v140) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v865 = genBankFile$$1.search(/LOCUS/);
  var v800 = v865 == -1;
  var v867 = !v800;
  if (v867) {
    var v866 = genBankFile$$1.search(/DEFINITION/);
    v800 = v866 == -1;
  }
  var v694 = v800;
  var v802 = !v694;
  if (v802) {
    var v801 = genBankFile$$1.search(/ACCESSION/);
    v694 = v801 == -1;
  }
  var v499 = v694;
  var v696 = !v499;
  if (v696) {
    var v695 = genBankFile$$1.search(/ORIGIN/);
    v499 = v695 == -1;
  }
  var v141 = v499;
  if (v141) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v500 = genBankFile$$1.search(/FEATURES {13}/);
  var v142 = v500 == -1;
  if (v142) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v868 = emblFile$$1.search(/ID/);
  var v803 = v868 == -1;
  var v870 = !v803;
  if (v870) {
    var v869 = emblFile$$1.search(/AC/);
    v803 = v869 == -1;
  }
  var v697 = v803;
  var v805 = !v697;
  if (v805) {
    var v804 = emblFile$$1.search(/DE/);
    v697 = v804 == -1;
  }
  var v501 = v697;
  var v699 = !v501;
  if (v699) {
    var v698 = emblFile$$1.search(/SQ/);
    v501 = v698 == -1;
  }
  var v143 = v501;
  if (v143) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v502 = emblFile$$1.search(/^FT/m);
  var v144 = v502 == -1;
  if (v144) {
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
  var v151 = i$$5 < stopBase;
  for (;v151;) {
    var v145 = i$$5 + 1;
    lineOfText = rightNum(v145, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v503 = basePerLine / groupSize;
    var v148 = j$$6 <= v503;
    for (;v148;) {
      var v147 = k < groupSize;
      for (;v147;) {
        var v504 = k + i$$5;
        var v146 = text$$10.charAt(v504);
        lineOfText = lineOfText + v146;
        k = k + 1;
        v147 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v505 = basePerLine / groupSize;
      v148 = j$$6 <= v505;
    }
    var v149 = outputWindow.document;
    var v150 = lineOfText + "\n";
    v149.write(v150);
    lineOfText = "";
    v151 = i$$5 < stopBase;
  }
  return true;
}
function writeGroupNumDna(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition) {
  writeGroupNumDnaSetStart(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition);
  return true;
}
function writeGroupNumDnaSetStart(text$$12, tabIn$$3, groupSize$$2, basePerLine$$2, startBase$$2, stopBase$$2, strands$$1, numberPosition$$1) {
  var numberingAdjustment = 0;
  function adjustNumbering(original, adjustment) {
    var adjusted = original + adjustment;
    var v506 = adjustment < 0;
    if (v506) {
      v506 = adjusted >= 0;
    }
    var v152 = v506;
    if (v152) {
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
    var v507 = basePerLine$$2 / groupSize$$2;
    var v159 = j$$7 <= v507;
    for (;v159;) {
      var v155 = k$$1 < groupSize$$2;
      for (;v155;) {
        var v508 = i$$6 + k$$1;
        var v153 = v508 >= stopBase$$2;
        if (v153) {
          break;
        }
        var v509 = k$$1 + i$$6;
        var v154 = text$$12.charAt(v509);
        lineOfText$$1 = lineOfText$$1 + v154;
        k$$1 = k$$1 + 1;
        v155 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v157 = numberPosition$$1 == "above";
      if (v157) {
        var v510 = adjustNumbering(i$$6, numberingAdjustment);
        var v156 = rightNum(v510, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v156;
      }
      var v158 = i$$6 >= stopBase$$2;
      if (v158) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v511 = basePerLine$$2 / groupSize$$2;
      v159 = j$$7 <= v511;
    }
    var v182 = numberPosition$$1 == "left";
    if (v182) {
      var v160 = outputWindow.document;
      var v806 = adjustNumbering(lineNum, numberingAdjustment);
      var v700 = rightNum(v806, "", 8, tabIn$$3);
      var v512 = v700 + lineOfText$$1;
      var v161 = v512 + "\n";
      v160.write(v161);
      var v165 = strands$$1 == "two";
      if (v165) {
        var v162 = outputWindow.document;
        var v807 = adjustNumbering(lineNum, numberingAdjustment);
        var v701 = rightNum(v807, "", 8, tabIn$$3);
        var v702 = complement(lineOfText$$1);
        var v513 = v701 + v702;
        var v163 = v513 + "\n";
        v162.write(v163);
        var v164 = outputWindow.document;
        v164.write("\n");
      }
    } else {
      var v181 = numberPosition$$1 == "right";
      if (v181) {
        var v166 = outputWindow.document;
        var v703 = adjustNumbering(i$$6, numberingAdjustment);
        var v514 = lineOfText$$1 + v703;
        var v167 = v514 + "\n";
        v166.write(v167);
        var v171 = strands$$1 == "two";
        if (v171) {
          var v168 = outputWindow.document;
          var v704 = complement(lineOfText$$1);
          var v705 = adjustNumbering(i$$6, numberingAdjustment);
          var v515 = v704 + v705;
          var v169 = v515 + "\n";
          v168.write(v169);
          var v170 = outputWindow.document;
          v170.write("\n");
        }
      } else {
        var v180 = numberPosition$$1 == "above";
        if (v180) {
          var v172 = outputWindow.document;
          var v173 = aboveNum + "\n";
          v172.write(v173);
          var v174 = outputWindow.document;
          var v175 = lineOfText$$1 + "\n";
          v174.write(v175);
          var v179 = strands$$1 == "two";
          if (v179) {
            var v176 = outputWindow.document;
            var v516 = complement(lineOfText$$1);
            var v177 = v516 + "\n";
            v176.write(v177);
            var v178 = outputWindow.document;
            v178.write("\n");
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v183 = i$$6 < stopBase$$2;
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
  var v202 = i$$7 < stopBase$$3;
  for (;v202;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v517 = basePerLine$$3 / groupSize$$3;
    var v190 = j$$8 <= v517;
    for (;v190;) {
      var v186 = k$$2 < groupSize$$3;
      for (;v186;) {
        var v518 = i$$7 + k$$2;
        var v184 = v518 >= stopBase$$3;
        if (v184) {
          break;
        }
        var v519 = k$$2 + i$$7;
        var v185 = text$$13.charAt(v519);
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
      var v520 = basePerLine$$3 / groupSize$$3;
      v190 = j$$8 <= v520;
    }
    var v201 = numberPosition$$2 == "left";
    if (v201) {
      var v191 = outputWindow.document;
      var v706 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v521 = v706 + lineOfText$$2;
      var v192 = v521 + "\n";
      v191.write(v192);
    } else {
      var v200 = numberPosition$$2 == "right";
      if (v200) {
        var v193 = outputWindow.document;
        var v522 = lineOfText$$2 + i$$7;
        var v194 = v522 + "\n";
        v193.write(v194);
      } else {
        var v199 = numberPosition$$2 == "above";
        if (v199) {
          var v195 = outputWindow.document;
          var v196 = aboveNum$$1 + "\n";
          v195.write(v196);
          var v197 = outputWindow.document;
          var v198 = lineOfText$$2 + "\n";
          v197.write(v198);
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
  var v808 = sequence$$13.length;
  var v707 = v808 <= firstIndexToMutate;
  var v809 = !v707;
  if (v809) {
    v707 = lastIndexToMutate < 0;
  }
  var v523 = v707;
  var v708 = !v523;
  if (v708) {
    v523 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v203 = v523;
  if (v203) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v211 = i$$8 < numMut;
  for (;v211;) {
    maxNum = sequence$$13.length;
    var v524 = Math.random();
    var v204 = v524 * maxNum;
    randNum = Math.floor(v204);
    var v525 = randNum < firstIndexToMutate;
    var v709 = !v525;
    if (v709) {
      v525 = randNum > lastIndexToMutate;
    }
    var v205 = v525;
    if (v205) {
      numMut++;
      i$$8++;
      v211 = i$$8 < numMut;
      continue;
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for (;needNewChar;) {
      var v526 = Math.random();
      var v527 = components$$1.length;
      var v206 = v526 * v527;
      componentsIndex = Math.round(v206);
      var v528 = components$$1.length;
      var v207 = componentsIndex == v528;
      if (v207) {
        componentsIndex = 0;
      }
      var v529 = components$$1[componentsIndex];
      var v208 = v529 != currentChar;
      if (v208) {
        needNewChar = false;
      }
    }
    var v530 = sequence$$13.substring(0, randNum);
    var v531 = components$$1[componentsIndex];
    var v209 = v530 + v531;
    var v532 = randNum + 1;
    var v533 = sequence$$13.length;
    var v210 = sequence$$13.substring(v532, v533);
    sequence$$13 = v209 + v210;
    i$$8++;
    v211 = i$$8 < numMut;
  }
  var v212 = outputWindow.document;
  var v213 = addReturns(sequence$$13);
  v212.write(v213);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v218 = j$$9 < lengthOut$$1;
  for (;v218;) {
    var v534 = Math.random();
    var v535 = components$$2.length;
    var v214 = v534 * v535;
    tempNum$$1 = Math.floor(v214);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v536 = sequence$$14.length;
    var v217 = v536 == 60;
    if (v217) {
      var v215 = outputWindow.document;
      var v216 = sequence$$14 + "\n";
      v215.write(v216);
      sequence$$14 = "";
    }
    j$$9++;
    v218 = j$$9 < lengthOut$$1;
  }
  var v219 = outputWindow.document;
  var v220 = sequence$$14 + "\n";
  v219.write(v220);
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
    var v221 = sequence$$15.substring(0, lookAhead);
    shiftValue = v221.length;
    var v810 = sequence$$15.length;
    var v710 = v810 - lookAhead;
    var v711 = sequence$$15.length;
    var v537 = sequence$$15.substring(v710, v711);
    var v222 = v537 + sequence$$15;
    var v223 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v222 + v223;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v225 = outputWindow.document;
  v225.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  var v226 = outputWindow.document;
  var v811 = '<tr><td class="title" width="200px">' + "Site:";
  var v712 = v811 + '</td><td class="title">';
  var v538 = v712 + "Positions:";
  var v227 = v538 + "</td></tr>\n";
  v226.write(v227);
  var i$$9 = 0;
  var v539 = arrayOfItems.length;
  var v243 = i$$9 < v539;
  for (;v243;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v540 = arrayOfItems[i$$9];
    var v228 = v540.match(/\/.+\//);
    matchExp = v228 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    var v812 = arrayOfItems[i$$9];
    var v713 = v812.match(/\)\D*\d+/);
    var v541 = v713.toString();
    var v229 = v541.replace(/\)\D*/, "");
    cutDistance = parseFloat(v229);
    var v235 = matchArray$$1 = matchExp.exec(sequence$$15);
    for (;v235;) {
      var v230 = matchExp.lastIndex;
      matchPosition = v230 - cutDistance;
      var v542 = matchPosition >= lowerLimit;
      if (v542) {
        v542 = matchPosition < upperLimit;
      }
      var v233 = v542;
      if (v233) {
        timesFound++;
        var v231 = tempString$$1 + ", ";
        var v543 = matchPosition - shiftValue;
        var v232 = v543 + 1;
        tempString$$1 = v231 + v232;
      }
      var v544 = matchExp.lastIndex;
      var v714 = RegExp.lastMatch;
      var v545 = v714.length;
      var v234 = v544 - v545;
      matchExp.lastIndex = v234 + 1;
      v235 = matchArray$$1 = matchExp.exec(sequence$$15);
    }
    var v546 = tempString$$1.search(/\d/);
    var v236 = v546 != -1;
    if (v236) {
      tempString$$1 = tempString$$1.replace(/none,\s*/, "");
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
    var v986 = '<tr><td class="' + backGroundClass;
    var v951 = v986 + '">';
    var v1045 = arrayOfItems[i$$9];
    var v1017 = v1045.match(/\([^\(]+\)/);
    var v987 = v1017.toString();
    var v952 = v987.replace(/\(|\)/g, "");
    var v913 = v951 + v952;
    var v871 = v913 + '</td><td class="';
    var v813 = v871 + backGroundClass;
    var v715 = v813 + '">';
    var v547 = v715 + tempString$$1;
    var v242 = v547 + "</td></tr>\n";
    v241.write(v242);
    timesFound = 0;
    i$$9++;
    var v548 = arrayOfItems.length;
    v243 = i$$9 < v548;
  }
  var v244 = outputWindow.document;
  v244.write("</tbody></table>\n");
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v245 = outputWindow.document;
  v245.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  var v246 = outputWindow.document;
  var v914 = '<tr><td class="title">' + "Pattern:";
  var v872 = v914 + '</td><td class="title">';
  var v814 = v872 + "Times found:";
  var v716 = v814 + '</td><td class="title">';
  var v549 = v716 + "Percentage:";
  var v247 = v549 + "</td></tr>\n";
  v246.write(v247);
  var i$$10 = 0;
  var v550 = arrayOfItems$$1.length;
  var v256 = i$$10 < v550;
  for (;v256;) {
    var tempNumber = 0;
    var v551 = arrayOfItems$$1[i$$10];
    var v248 = v551.match(/\/[^\/]+\//);
    var matchExp$$1 = v248 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    var v552 = sequence$$16.search(matchExp$$1);
    var v250 = v552 != -1;
    if (v250) {
      var v249 = sequence$$16.match(matchExp$$1);
      tempNumber = v249.length;
    }
    var percentage = 0;
    var v717 = originalLength + 1;
    var v873 = arrayOfItems$$1[i$$10];
    var v815 = v873.match(/\d+/);
    var v718 = parseFloat(v815);
    var v553 = v717 - v718;
    var v253 = v553 > 0;
    if (v253) {
      var v251 = 100 * tempNumber;
      var v554 = originalLength + 1;
      var v816 = arrayOfItems$$1[i$$10];
      var v719 = v816.match(/\d+/);
      var v555 = parseFloat(v719);
      var v252 = v554 - v555;
      percentage = v251 / v252;
    }
    var v254 = outputWindow.document;
    var v1046 = arrayOfItems$$1[i$$10];
    var v1018 = v1046.match(/\([^\(]+\)\b/);
    var v988 = v1018.toString();
    var v953 = v988.replace(/\(|\)/g, "");
    var v915 = "<tr><td>" + v953;
    var v874 = v915 + "</td><td>";
    var v817 = v874 + tempNumber;
    var v720 = v817 + "</td><td>";
    var v721 = percentage.toFixed(2);
    var v556 = v720 + v721;
    var v255 = v556 + "</td></tr>\n";
    v254.write(v255);
    i$$10++;
    var v557 = arrayOfItems$$1.length;
    v256 = i$$10 < v557;
  }
  var v257 = outputWindow.document;
  v257.write("</tbody></table>\n");
  return true;
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v558 = sequence$$17.length;
  var v264 = v558 > 0;
  for (;v264;) {
    maxNum$$1 = sequence$$17.length;
    var v559 = Math.random();
    var v258 = v559 * maxNum$$1;
    randNum$$1 = Math.floor(v258);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v259 = randNum$$1 + 1;
    var v260 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v259, v260);
    sequence$$17 = tempString1 + tempString2;
    var v560 = tempSeq.length;
    var v263 = v560 == 60;
    if (v263) {
      var v261 = outputWindow.document;
      var v262 = tempSeq + "\n";
      v261.write(v262);
      tempSeq = "";
    }
    var v561 = sequence$$17.length;
    v264 = v561 > 0;
  }
  var v265 = outputWindow.document;
  var v266 = tempSeq + "\n";
  v265.write(v266);
  return true;
}
function getGeneticCodeString(type$$25) {
  var v722 = type$$25.toLowerCase();
  var v562 = v722 == "standard";
  var v724 = !v562;
  if (v724) {
    var v723 = type$$25.toLowerCase();
    v562 = v723 == "transl_table=1";
  }
  var v268 = v562;
  if (v268) {
    var v1229 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1212 = v1229 + "/ga[tcuy]/=D,";
    var v1195 = v1212 + "/ga[agr]/=E,";
    var v1177 = v1195 + "/[tu][tu][tcuy]/=F,";
    var v1158 = v1177 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1137 = v1158 + "/ca[tcuy]/=H,";
    var v1116 = v1137 + "/a[tu][atcuwmhy]/=I,";
    var v1095 = v1116 + "/aa[agr]/=K,";
    var v1071 = v1095 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1047 = v1071 + "/a[tu]g/=M,";
    var v1019 = v1047 + "/aa[tucy]/=N,";
    var v989 = v1019 + "/cc[acgturyswkmbdhvn]/=P,";
    var v954 = v989 + "/ca[agr]/=Q,";
    var v916 = v954 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v875 = v916 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v818 = v875 + "/ac[acgturyswkmbdhvn]/=T,";
    var v725 = v818 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v563 = v725 + "/[tu]gg/=W,";
    var v267 = v563 + "/[tu]a[ctuy]/=Y,";
    return v267 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*";
  }
  var v564 = type$$25.toLowerCase();
  var v270 = v564 == "transl_table=2";
  if (v270) {
    var v1230 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1213 = v1230 + "/ga[tcuy]/=D,";
    var v1196 = v1213 + "/ga[agr]/=E,";
    var v1178 = v1196 + "/[tu][tu][tcuy]/=F,";
    var v1159 = v1178 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1138 = v1159 + "/ca[tcuy]/=H,";
    var v1117 = v1138 + "/a[tu][tcuy]/=I,";
    var v1096 = v1117 + "/aa[agr]/=K,";
    var v1072 = v1096 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1048 = v1072 + "/a[tu][agr]/=M,";
    var v1020 = v1048 + "/aa[tucy]/=N,";
    var v990 = v1020 + "/cc[acgturyswkmbdhvn]/=P,";
    var v955 = v990 + "/ca[agr]/=Q,";
    var v917 = v955 + "/cg[acgturyswkmbdhvn]/=R,";
    var v876 = v917 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v819 = v876 + "/ac[acgturyswkmbdhvn]/=T,";
    var v726 = v819 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v565 = v726 + "/[tu]g[agr]/=W,";
    var v269 = v565 + "/[tu]a[ctuy]/=Y,";
    return v269 + "/[tu]a[agr]|ag[agr]/=*";
  }
  var v566 = type$$25.toLowerCase();
  var v272 = v566 == "transl_table=3";
  if (v272) {
    var v1231 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1214 = v1231 + "/ga[tcuy]/=D,";
    var v1197 = v1214 + "/ga[agr]/=E,";
    var v1179 = v1197 + "/[tu][tu][tcuy]/=F,";
    var v1160 = v1179 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1139 = v1160 + "/ca[tcuy]/=H,";
    var v1118 = v1139 + "/a[tu][tcuy]/=I,";
    var v1097 = v1118 + "/aa[agr]/=K,";
    var v1073 = v1097 + "/[tu][tu][agr]/=L,";
    var v1049 = v1073 + "/a[tu][agr]/=M,";
    var v1021 = v1049 + "/aa[tucy]/=N,";
    var v991 = v1021 + "/cc[acgturyswkmbdhvn]/=P,";
    var v956 = v991 + "/ca[agr]/=Q,";
    var v918 = v956 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v877 = v918 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v820 = v877 + "/ac[acgturyswkmbdhvn]|c[tu][acgturyswkmbdhvn]/=T,";
    var v727 = v820 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v567 = v727 + "/[tu]g[agr]/=W,";
    var v271 = v567 + "/[tu]a[ctuy]/=Y,";
    return v271 + "/[tu]a[agr]/=*";
  }
  var v568 = type$$25.toLowerCase();
  var v274 = v568 == "transl_table=4";
  if (v274) {
    var v1232 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1215 = v1232 + "/ga[tcuy]/=D,";
    var v1198 = v1215 + "/ga[agr]/=E,";
    var v1180 = v1198 + "/[tu][tu][tcuy]/=F,";
    var v1161 = v1180 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1140 = v1161 + "/ca[tcuy]/=H,";
    var v1119 = v1140 + "/a[tu][atcuwmhy]/=I,";
    var v1098 = v1119 + "/aa[agr]/=K,";
    var v1074 = v1098 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1050 = v1074 + "/a[tu]g/=M,";
    var v1022 = v1050 + "/aa[tucy]/=N,";
    var v992 = v1022 + "/cc[acgturyswkmbdhvn]/=P,";
    var v957 = v992 + "/ca[agr]/=Q,";
    var v919 = v957 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v878 = v919 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v821 = v878 + "/ac[acgturyswkmbdhvn]/=T,";
    var v728 = v821 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v569 = v728 + "/[tu]g[agr]/=W,";
    var v273 = v569 + "/[tu]a[ctuy]/=Y,";
    return v273 + "/[tu]a[agr]/=*";
  }
  var v570 = type$$25.toLowerCase();
  var v276 = v570 == "transl_table=5";
  if (v276) {
    var v1233 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1216 = v1233 + "/ga[tcuy]/=D,";
    var v1199 = v1216 + "/ga[agr]/=E,";
    var v1181 = v1199 + "/[tu][tu][tcuy]/=F,";
    var v1162 = v1181 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1141 = v1162 + "/ca[tcuy]/=H,";
    var v1120 = v1141 + "/a[tu][tcuy]/=I,";
    var v1099 = v1120 + "/aa[agr]/=K,";
    var v1075 = v1099 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1051 = v1075 + "/a[tu][agr]/=M,";
    var v1023 = v1051 + "/aa[tucy]/=N,";
    var v993 = v1023 + "/cc[acgturyswkmbdhvn]/=P,";
    var v958 = v993 + "/ca[agr]/=Q,";
    var v920 = v958 + "/cg[acgturyswkmbdhvn]/=R,";
    var v879 = v920 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v822 = v879 + "/ac[acgturyswkmbdhvn]/=T,";
    var v729 = v822 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v571 = v729 + "/[tu]g[agr]/=W,";
    var v275 = v571 + "/[tu]a[ctuy]/=Y,";
    return v275 + "/[tu]a[agr]/=*";
  }
  var v572 = type$$25.toLowerCase();
  var v278 = v572 == "transl_table=6";
  if (v278) {
    var v1234 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1217 = v1234 + "/ga[tcuy]/=D,";
    var v1200 = v1217 + "/ga[agr]/=E,";
    var v1182 = v1200 + "/[tu][tu][tcuy]/=F,";
    var v1163 = v1182 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1142 = v1163 + "/ca[tcuy]/=H,";
    var v1121 = v1142 + "/a[tu][atcuwmhy]/=I,";
    var v1100 = v1121 + "/aa[agr]/=K,";
    var v1076 = v1100 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1052 = v1076 + "/a[tu]g/=M,";
    var v1024 = v1052 + "/aa[tucy]/=N,";
    var v994 = v1024 + "/cc[acgturyswkmbdhvn]/=P,";
    var v959 = v994 + "/ca[agr]|[tu]a[agr]|[tcuy]a[agr]/=Q,";
    var v921 = v959 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v880 = v921 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v823 = v880 + "/ac[acgturyswkmbdhvn]/=T,";
    var v730 = v823 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v573 = v730 + "/[tu]gg/=W,";
    var v277 = v573 + "/[tu]a[ctuy]/=Y,";
    return v277 + "/[tu]ga/=*";
  }
  var v574 = type$$25.toLowerCase();
  var v280 = v574 == "transl_table=9";
  if (v280) {
    var v1235 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1218 = v1235 + "/ga[tcuy]/=D,";
    var v1201 = v1218 + "/ga[agr]/=E,";
    var v1183 = v1201 + "/[tu][tu][tcuy]/=F,";
    var v1164 = v1183 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1143 = v1164 + "/ca[tcuy]/=H,";
    var v1122 = v1143 + "/a[tu][atcuwmhy]/=I,";
    var v1101 = v1122 + "/aag/=K,";
    var v1077 = v1101 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1053 = v1077 + "/a[tu]g/=M,";
    var v1025 = v1053 + "/aa[atcuwmhy]/=N,";
    var v995 = v1025 + "/cc[acgturyswkmbdhvn]/=P,";
    var v960 = v995 + "/ca[agr]/=Q,";
    var v922 = v960 + "/cg[acgturyswkmbdhvn]/=R,";
    var v881 = v922 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v824 = v881 + "/ac[acgturyswkmbdhvn]/=T,";
    var v731 = v824 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v575 = v731 + "/[tu]g[agr]/=W,";
    var v279 = v575 + "/[tu]a[ctuy]/=Y,";
    return v279 + "/[tu]a[agr]/=*";
  }
  var v576 = type$$25.toLowerCase();
  var v282 = v576 == "transl_table=10";
  if (v282) {
    var v1236 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[atcuwmhy]/=C,";
    var v1219 = v1236 + "/ga[tcuy]/=D,";
    var v1202 = v1219 + "/ga[agr]/=E,";
    var v1184 = v1202 + "/[tu][tu][tcuy]/=F,";
    var v1165 = v1184 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1144 = v1165 + "/ca[tcuy]/=H,";
    var v1123 = v1144 + "/a[tu][atcuwmhy]/=I,";
    var v1102 = v1123 + "/aa[agr]/=K,";
    var v1078 = v1102 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1054 = v1078 + "/a[tu]g/=M,";
    var v1026 = v1054 + "/aa[tucy]/=N,";
    var v996 = v1026 + "/cc[acgturyswkmbdhvn]/=P,";
    var v961 = v996 + "/ca[agr]/=Q,";
    var v923 = v961 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v882 = v923 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v825 = v882 + "/ac[acgturyswkmbdhvn]/=T,";
    var v732 = v825 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v577 = v732 + "/[tu]gg/=W,";
    var v281 = v577 + "/[tu]a[ctuy]/=Y,";
    return v281 + "/[tu]a[agr]/=*";
  }
  var v578 = type$$25.toLowerCase();
  var v284 = v578 == "transl_table=11";
  if (v284) {
    var v1237 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1220 = v1237 + "/ga[tcuy]/=D,";
    var v1203 = v1220 + "/ga[agr]/=E,";
    var v1185 = v1203 + "/[tu][tu][tcuy]/=F,";
    var v1166 = v1185 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1145 = v1166 + "/ca[tcuy]/=H,";
    var v1124 = v1145 + "/a[tu][atcuwmhy]/=I,";
    var v1103 = v1124 + "/aa[agr]/=K,";
    var v1079 = v1103 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1055 = v1079 + "/a[tu]g/=M,";
    var v1027 = v1055 + "/aa[tucy]/=N,";
    var v997 = v1027 + "/cc[acgturyswkmbdhvn]/=P,";
    var v962 = v997 + "/ca[agr]/=Q,";
    var v924 = v962 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v883 = v924 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v826 = v883 + "/ac[acgturyswkmbdhvn]/=T,";
    var v733 = v826 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v579 = v733 + "/[tu]gg/=W,";
    var v283 = v579 + "/[tu]a[ctuy]/=Y,";
    return v283 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*";
  }
  var v580 = type$$25.toLowerCase();
  var v286 = v580 == "transl_table=12";
  if (v286) {
    var v1238 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1221 = v1238 + "/ga[tcuy]/=D,";
    var v1204 = v1221 + "/ga[agr]/=E,";
    var v1186 = v1204 + "/[tu][tu][tcuy]/=F,";
    var v1167 = v1186 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1146 = v1167 + "/ca[tcuy]/=H,";
    var v1125 = v1146 + "/a[tu][atcuwmhy]/=I,";
    var v1104 = v1125 + "/aa[agr]/=K,";
    var v1080 = v1104 + "/c[tu][atcuwmhy]|[tu][tu][agr]|[ctuy][tu]a/=L,";
    var v1056 = v1080 + "/a[tu]g/=M,";
    var v1028 = v1056 + "/aa[tucy]/=N,";
    var v998 = v1028 + "/cc[acgturyswkmbdhvn]/=P,";
    var v963 = v998 + "/ca[agr]/=Q,";
    var v925 = v963 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v884 = v925 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]|c[tu]g/=S,";
    var v827 = v884 + "/ac[acgturyswkmbdhvn]/=T,";
    var v734 = v827 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v581 = v734 + "/[tu]gg/=W,";
    var v285 = v581 + "/[tu]a[ctuy]/=Y,";
    return v285 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*";
  }
  var v582 = type$$25.toLowerCase();
  var v288 = v582 == "transl_table=13";
  if (v288) {
    var v1239 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1222 = v1239 + "/ga[tcuy]/=D,";
    var v1205 = v1222 + "/ga[agr]/=E,";
    var v1187 = v1205 + "/[tu][tu][tcuy]/=F,";
    var v1168 = v1187 + "/gg[acgturyswkmbdhvn]|ag[agr]|[agr]g[agr]/=G,";
    var v1147 = v1168 + "/ca[tcuy]/=H,";
    var v1126 = v1147 + "/a[tu][tcuy]/=I,";
    var v1105 = v1126 + "/aa[agr]/=K,";
    var v1081 = v1105 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1057 = v1081 + "/a[tu][agr]/=M,";
    var v1029 = v1057 + "/aa[tucy]/=N,";
    var v999 = v1029 + "/cc[acgturyswkmbdhvn]/=P,";
    var v964 = v999 + "/ca[agr]/=Q,";
    var v926 = v964 + "/cg[acgturyswkmbdhvn]/=R,";
    var v885 = v926 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v828 = v885 + "/ac[acgturyswkmbdhvn]/=T,";
    var v735 = v828 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v583 = v735 + "/[tu]g[agr]/=W,";
    var v287 = v583 + "/[tu]a[ctuy]/=Y,";
    return v287 + "/[tu]a[agr]/=*";
  }
  var v584 = type$$25.toLowerCase();
  var v290 = v584 == "transl_table=14";
  if (v290) {
    var v1240 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1223 = v1240 + "/ga[tcuy]/=D,";
    var v1206 = v1223 + "/ga[agr]/=E,";
    var v1188 = v1206 + "/[tu][tu][tcuy]/=F,";
    var v1169 = v1188 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1148 = v1169 + "/ca[tcuy]/=H,";
    var v1127 = v1148 + "/a[tu][atcuwmhy]/=I,";
    var v1106 = v1127 + "/aag/=K,";
    var v1082 = v1106 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1058 = v1082 + "/a[tu]g/=M,";
    var v1030 = v1058 + "/aa[atcuwmhy]/=N,";
    var v1000 = v1030 + "/cc[acgturyswkmbdhvn]/=P,";
    var v965 = v1000 + "/ca[agr]/=Q,";
    var v927 = v965 + "/cg[acgturyswkmbdhvn]/=R,";
    var v886 = v927 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v829 = v886 + "/ac[acgturyswkmbdhvn]/=T,";
    var v736 = v829 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v585 = v736 + "/[tu]g[agr]/=W,";
    var v289 = v585 + "/[tu]a[atcuwmhy]/=Y,";
    return v289 + "/[tu]ag/=*";
  }
  var v586 = type$$25.toLowerCase();
  var v292 = v586 == "transl_table=15";
  if (v292) {
    var v1241 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1224 = v1241 + "/ga[tcuy]/=D,";
    var v1207 = v1224 + "/ga[agr]/=E,";
    var v1189 = v1207 + "/[tu][tu][tcuy]/=F,";
    var v1170 = v1189 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1149 = v1170 + "/ca[tcuy]/=H,";
    var v1128 = v1149 + "/a[tu][atcuwmhy]/=I,";
    var v1107 = v1128 + "/aa[agr]/=K,";
    var v1083 = v1107 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1059 = v1083 + "/a[tu]g/=M,";
    var v1031 = v1059 + "/aa[tucy]/=N,";
    var v1001 = v1031 + "/cc[acgturyswkmbdhvn]/=P,";
    var v966 = v1001 + "/ca[agr]|[tu]ag|[tcuy]ag/=Q,";
    var v928 = v966 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v887 = v928 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v830 = v887 + "/ac[acgturyswkmbdhvn]/=T,";
    var v737 = v830 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v587 = v737 + "/[tu]gg/=W,";
    var v291 = v587 + "/[tu]a[ctuy]/=Y,";
    return v291 + "/[tu][agr]a/=*";
  }
  var v588 = type$$25.toLowerCase();
  var v294 = v588 == "transl_table=16";
  if (v294) {
    var v1242 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1225 = v1242 + "/ga[tcuy]/=D,";
    var v1208 = v1225 + "/ga[agr]/=E,";
    var v1190 = v1208 + "/[tu][tu][tcuy]/=F,";
    var v1171 = v1190 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1150 = v1171 + "/ca[tcuy]/=H,";
    var v1129 = v1150 + "/a[tu][atcuwmhy]/=I,";
    var v1108 = v1129 + "/aa[agr]/=K,";
    var v1084 = v1108 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]|[tu]ag|[tu][atuw]g/=L,";
    var v1060 = v1084 + "/a[tu]g/=M,";
    var v1032 = v1060 + "/aa[tucy]/=N,";
    var v1002 = v1032 + "/cc[acgturyswkmbdhvn]/=P,";
    var v967 = v1002 + "/ca[agr]/=Q,";
    var v929 = v967 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v888 = v929 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v831 = v888 + "/ac[acgturyswkmbdhvn]/=T,";
    var v738 = v831 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v589 = v738 + "/[tu]gg/=W,";
    var v293 = v589 + "/[tu]a[ctuy]/=Y,";
    return v293 + "/[tu][agr]a/=*";
  }
  var v590 = type$$25.toLowerCase();
  var v296 = v590 == "transl_table=21";
  if (v296) {
    var v1243 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1226 = v1243 + "/ga[tcuy]/=D,";
    var v1209 = v1226 + "/ga[agr]/=E,";
    var v1191 = v1209 + "/[tu][tu][tcuy]/=F,";
    var v1172 = v1191 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1151 = v1172 + "/ca[tcuy]/=H,";
    var v1130 = v1151 + "/a[tu][tcuy]/=I,";
    var v1109 = v1130 + "/aag/=K,";
    var v1085 = v1109 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1061 = v1085 + "/a[tu][agr]/=M,";
    var v1033 = v1061 + "/aa[atcuwmhy]/=N,";
    var v1003 = v1033 + "/cc[acgturyswkmbdhvn]/=P,";
    var v968 = v1003 + "/ca[agr]/=Q,";
    var v930 = v968 + "/cg[acgturyswkmbdhvn]/=R,";
    var v889 = v930 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v832 = v889 + "/ac[acgturyswkmbdhvn]/=T,";
    var v739 = v832 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v591 = v739 + "/[tu]g[agr]/=W,";
    var v295 = v591 + "/[tu]a[ctuy]/=Y,";
    return v295 + "/[tu]a[agr]/=*";
  }
  var v592 = type$$25.toLowerCase();
  var v298 = v592 == "transl_table=22";
  if (v298) {
    var v1244 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1227 = v1244 + "/ga[tcuy]/=D,";
    var v1210 = v1227 + "/ga[agr]/=E,";
    var v1192 = v1210 + "/[tu][tu][tcuy]/=F,";
    var v1173 = v1192 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1152 = v1173 + "/ca[tcuy]/=H,";
    var v1131 = v1152 + "/a[tu][atcuwmhy]/=I,";
    var v1110 = v1131 + "/aa[agr]/=K,";
    var v1086 = v1110 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]|[tu]ag|[tu][atuw]g/=L,";
    var v1062 = v1086 + "/a[tu]g/=M,";
    var v1034 = v1062 + "/aa[tucy]/=N,";
    var v1004 = v1034 + "/cc[acgturyswkmbdhvn]/=P,";
    var v969 = v1004 + "/ca[agr]/=Q,";
    var v931 = v969 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v890 = v931 + "/[tu]c[cgtyskb]|ag[ct]/=S,";
    var v833 = v890 + "/ac[acgturyswkmbdhvn]/=T,";
    var v740 = v833 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v593 = v740 + "/[tu]gg/=W,";
    var v297 = v593 + "/[tu]a[ctuy]/=Y,";
    return v297 + "/[tu][agcrsmv]a/=*";
  }
  var v594 = type$$25.toLowerCase();
  var v300 = v594 == "transl_table=23";
  if (v300) {
    var v1245 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1228 = v1245 + "/ga[tcuy]/=D,";
    var v1211 = v1228 + "/ga[agr]/=E,";
    var v1193 = v1211 + "/[tu][tu][tcuy]/=F,";
    var v1174 = v1193 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1153 = v1174 + "/ca[tcuy]/=H,";
    var v1132 = v1153 + "/a[tu][atcuwmhy]/=I,";
    var v1111 = v1132 + "/aa[agr]/=K,";
    var v1087 = v1111 + "/c[tu][acgturyswkmbdhvn]|[ctuy][tu]g/=L,";
    var v1063 = v1087 + "/a[tu]g/=M,";
    var v1035 = v1063 + "/aa[tucy]/=N,";
    var v1005 = v1035 + "/cc[acgturyswkmbdhvn]/=P,";
    var v970 = v1005 + "/ca[agr]/=Q,";
    var v932 = v970 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v891 = v932 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v834 = v891 + "/ac[acgturyswkmbdhvn]/=T,";
    var v741 = v834 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v595 = v741 + "/[tu]gg/=W,";
    var v299 = v595 + "/[tu]a[ctuy]/=Y,";
    return v299 + "/[tu]a[agr]|[tu]ga|[tu][agtrwkd]a/=*";
  }
  return true;
}
function codonUsage() {
  var theDocument = document;
  var newDna = "";
  var maxInput$$3 = 5E5;
  var codonTable$$1;
  var v596 = testScript();
  var v301 = v596 == false;
  if (v301) {
    return;
  }
  var v971 = theDocument.forms;
  var v933 = v971[0];
  var v892 = v933.elements;
  var v835 = v892[0];
  var v742 = checkFormElement(v835);
  var v597 = v742 == false;
  var v744 = !v597;
  if (v744) {
    var v1006 = theDocument.forms;
    var v972 = v1006[0];
    var v934 = v972.elements;
    var v893 = v934[0];
    var v836 = v893.value;
    var v743 = checkTextLength(v836, maxInput$$3);
    v597 = v743 == false;
  }
  var v302 = v597;
  if (v302) {
    return;
  }
  var v973 = theDocument.forms;
  var v935 = v973[0];
  var v894 = v935.elements;
  var v837 = v894[4];
  var v745 = v837.options;
  var v974 = theDocument.forms;
  var v936 = v974[0];
  var v895 = v936.elements;
  var v838 = v895[4];
  var v746 = v838.selectedIndex;
  var v598 = v745[v746];
  var v303 = v598.value;
  var geneticCode = getGeneticCodeString(v303);
  geneticCode = geneticCode.split(/,/);
  var v599 = checkGeneticCode(geneticCode);
  var v304 = v599 == false;
  if (v304) {
    return;
  }
  codonTable$$1 = makeCodonTable(geneticCode);
  var v305 = codonTable$$1 == false;
  if (v305) {
    return;
  }
  resetCounts(codonTable$$1);
  openWindow();
  openPre();
  var v896 = theDocument.forms;
  var v839 = v896[0];
  var v747 = v839.elements;
  var v600 = v747[0];
  var v306 = v600.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v306);
  var i$$11 = 0;
  var v601 = arrayOfFasta$$1.length;
  var v312 = i$$11 < v601;
  for (;v312;) {
    var v307 = arrayOfFasta$$1[i$$11];
    newDna = getSequenceFromFasta(v307);
    var v308 = arrayOfFasta$$1[i$$11];
    title = getTitleFromFasta(v308);
    newDna = removeNonDna(newDna);
    var v309 = outputWindow.document;
    var v310 = getInfoFromTitleAndSequence(newDna);
    v309.write(v310);
    addCodons(codonTable$$1, newDna);
    codonTable$$1.determineValues();
    writeCodonTable(codonTable$$1);
    resetCounts(codonTable$$1);
    var v311 = outputWindow.document;
    v311.write("\n\n");
    i$$11++;
    var v602 = arrayOfFasta$$1.length;
    v312 = i$$11 < v602;
  }
  closePre();
  closeWindow();
  return;
}
function writeCodonTable(codonTable$$2) {
  var v313 = outputWindow.document;
  var v937 = rightNum("AmAcid", "", 6, "");
  var v938 = rightNum("Codon", "", 7, "");
  var v897 = v937 + v938;
  var v898 = rightNum("Number", "", 10, "");
  var v840 = v897 + v898;
  var v841 = rightNum("/1000", "", 12, "");
  var v748 = v840 + v841;
  var v749 = rightNum("Fraction   ..", "", 17, "");
  var v603 = v748 + v749;
  var v314 = v603 + "\n\n";
  v313.write(v314);
  var i$$12 = 0;
  var v750 = codonTable$$2.aminoAcids;
  var v604 = v750.length;
  var v320 = i$$12 < v604;
  for (;v320;) {
    var v605 = codonTable$$2.aminoAcids;
    var v315 = v605[i$$12];
    arrayOfCodons = v315.codons;
    var j$$10 = 0;
    var v606 = arrayOfCodons.length;
    var v318 = j$$10 < v606;
    for (;v318;) {
      var v316 = outputWindow.document;
      var v1036 = codonTable$$2.aminoAcids;
      var v1007 = v1036[i$$12];
      var v975 = v1007.name;
      var v939 = rightNum(v975, "", 3, "");
      var v1037 = arrayOfCodons[j$$10];
      var v1008 = v1037.sequence;
      var v976 = v1008.toUpperCase();
      var v940 = rightNum(v976, "", 8, "");
      var v899 = v939 + v940;
      var v1009 = arrayOfCodons[j$$10];
      var v977 = v1009.number;
      var v941 = v977.toFixed(2);
      var v900 = rightNum(v941, "", 12, "");
      var v842 = v899 + v900;
      var v978 = arrayOfCodons[j$$10];
      var v942 = v978.perThou;
      var v901 = v942.toFixed(2);
      var v843 = rightNum(v901, "", 12, "");
      var v751 = v842 + v843;
      var v943 = arrayOfCodons[j$$10];
      var v902 = v943.fraction;
      var v844 = v902.toFixed(2);
      var v752 = rightNum(v844, "", 12, "");
      var v607 = v751 + v752;
      var v317 = v607 + "\n";
      v316.write(v317);
      j$$10++;
      var v608 = arrayOfCodons.length;
      v318 = j$$10 < v608;
    }
    var v319 = outputWindow.document;
    v319.write("\n");
    i$$12++;
    var v753 = codonTable$$2.aminoAcids;
    var v609 = v753.length;
    v320 = i$$12 < v609;
  }
  return;
}
function addCodons(codonTable$$3, dnaSequence$$3) {
  function v2(str$$8, p1$$2, offset$$10, s$$4) {
    var v321 = " " + p1$$2;
    return v321 + " ";
  }
  dnaSequence$$3 = dnaSequence$$3.replace(/u/gi, "t");
  dnaSequence$$3 = dnaSequence$$3.replace(/(...)/g, v2);
  var matchExp$$2;
  var arrayOfCodons$$1;
  var i$$13 = 0;
  var v754 = codonTable$$3.aminoAcids;
  var v610 = v754.length;
  var v327 = i$$13 < v610;
  for (;v327;) {
    var v611 = codonTable$$3.aminoAcids;
    var v322 = v611[i$$13];
    arrayOfCodons$$1 = v322.codons;
    var j$$11 = 0;
    var v612 = arrayOfCodons$$1.length;
    var v326 = j$$11 < v612;
    for (;v326;) {
      var v613 = arrayOfCodons$$1[j$$11];
      var v323 = v613.sequence;
      matchExp$$2 = new RegExp(v323, "gi");
      var v614 = dnaSequence$$3.search(matchExp$$2);
      var v325 = v614 != -1;
      if (v325) {
        var v324 = arrayOfCodons$$1[j$$11];
        var v755 = arrayOfCodons$$1[j$$11];
        var v615 = v755.number;
        var v756 = dnaSequence$$3.match(matchExp$$2);
        var v616 = v756.length;
        v324.number = v615 + v616;
      }
      j$$11++;
      var v617 = arrayOfCodons$$1.length;
      v326 = j$$11 < v617;
    }
    i$$13++;
    var v757 = codonTable$$3.aminoAcids;
    var v618 = v757.length;
    v327 = i$$13 < v618;
  }
  return;
}
function resetCounts(codonTable$$4) {
  var i$$14 = 0;
  var v758 = codonTable$$4.aminoAcids;
  var v619 = v758.length;
  var v331 = i$$14 < v619;
  for (;v331;) {
    var v620 = codonTable$$4.aminoAcids;
    var v328 = v620[i$$14];
    arrayOfCodons = v328.codons;
    var j$$12 = 0;
    var v621 = arrayOfCodons.length;
    var v330 = j$$12 < v621;
    for (;v330;) {
      var v329 = arrayOfCodons[j$$12];
      v329.resetValues();
      j$$12++;
      var v622 = arrayOfCodons.length;
      v330 = j$$12 < v622;
    }
    i$$14++;
    var v759 = codonTable$$4.aminoAcids;
    var v623 = v759.length;
    v331 = i$$14 < v623;
  }
  return;
}
function makeCodonTable(geneticCode$$1) {
  function v3(str$$9, p1$$3, offset$$11, s$$5) {
    var v332 = " " + p1$$3;
    return v332 + " ";
  }
  var codonSequence = "gggggaggtggcgaggaagatgacgtggtagttgtcgcggcagctgccaggagaagtagcaagaaaaataacatgataattatcacgacaactacctggtgatgttgctagtaatattacttgttatttttctcgtcatcttcccggcgacgtcgccagcaacatcacctgctacttctcccgccacctccc";
  var proteinSequence$$1;
  var codonTable$$5 = new CodonTable;
  var geneticCodeMatchExp$$2 = getGeneticCodeMatchExp(geneticCode$$1);
  var geneticCodeMatchResult$$2 = getGeneticCodeMatchResult(geneticCode$$1);
  codonSequence = codonSequence.replace(/(...)/g, v3);
  var codonSequenceCopy = codonSequence;
  var i$$15 = 0;
  var v624 = geneticCodeMatchExp$$2.length;
  var v335 = i$$15 < v624;
  for (;v335;) {
    var v333 = geneticCodeMatchExp$$2[i$$15];
    var v334 = geneticCodeMatchResult$$2[i$$15];
    codonSequence = codonSequence.replace(v333, v334);
    i$$15++;
    var v625 = geneticCodeMatchExp$$2.length;
    v335 = i$$15 < v625;
  }
  var codonArray = codonSequenceCopy.split(/\s+/);
  codonSequence = codonSequence.replace(/\*/g, "Z");
  var proteinArray = codonSequence.split(/\s+/);
  i$$15 = 0;
  var v626 = codonArray.length;
  var v339 = i$$15 < v626;
  for (;v339;) {
    var v760 = proteinArray[i$$15];
    var v627 = v760 == "";
    if (v627) {
      var v761 = codonArray[i$$15];
      v627 = v761 == "";
    }
    var v336 = v627;
    if (v336) {
      i$$15++;
      var v628 = codonArray.length;
      v339 = i$$15 < v628;
      continue;
    }
    var v629 = codonTable$$5;
    var v762 = proteinArray[i$$15];
    var v630 = v762.toLowerCase();
    var v337 = v629[v630];
    var v631 = codonArray[i$$15];
    var v338 = new Codon(v631, 0, 0, 0);
    v337.addCodon(v338);
    i$$15++;
    var v632 = codonArray.length;
    v339 = i$$15 < v632;
  }
  return codonTable$$5;
}
function determineValues() {
  var totalAminoAcids = 0;
  var aminoAcid = 0;
  var arrayOfCodons$$2;
  var i$$16 = 0;
  var v763 = this.aminoAcids;
  var v633 = v763.length;
  var v345 = i$$16 < v633;
  for (;v345;) {
    var v634 = this.aminoAcids;
    var v340 = v634[i$$16];
    arrayOfCodons$$2 = v340.codons;
    var j$$13 = 0;
    var v635 = arrayOfCodons$$2.length;
    var v343 = j$$13 < v635;
    for (;v343;) {
      var v636 = arrayOfCodons$$2[j$$13];
      var v341 = v636.number;
      totalAminoAcids = totalAminoAcids + v341;
      var v637 = arrayOfCodons$$2[j$$13];
      var v342 = v637.number;
      aminoAcid = aminoAcid + v342;
      j$$13++;
      var v638 = arrayOfCodons$$2.length;
      v343 = j$$13 < v638;
    }
    var v639 = this.aminoAcids;
    var v344 = v639[i$$16];
    v344.count = aminoAcid;
    aminoAcid = 0;
    i$$16++;
    var v764 = this.aminoAcids;
    var v640 = v764.length;
    v345 = i$$16 < v640;
  }
  i$$16 = 0;
  var v765 = this.aminoAcids;
  var v641 = v765.length;
  var v353 = i$$16 < v641;
  for (;v353;) {
    var v642 = this.aminoAcids;
    var v346 = v642[i$$16];
    arrayOfCodons$$2 = v346.codons;
    j$$13 = 0;
    var v643 = arrayOfCodons$$2.length;
    var v352 = j$$13 < v643;
    for (;v352;) {
      var v766 = arrayOfCodons$$2[j$$13];
      var v644 = v766.number;
      var v351 = v644 > 0;
      if (v351) {
        var v347 = arrayOfCodons$$2[j$$13];
        var v767 = arrayOfCodons$$2[j$$13];
        var v645 = v767.number;
        var v845 = this.aminoAcids;
        var v768 = v845[i$$16];
        var v646 = v768.count;
        v347.fraction = v645 / v646;
        var v348 = arrayOfCodons$$2[j$$13];
        var v846 = arrayOfCodons$$2[j$$13];
        var v769 = v846.number;
        var v647 = v769 / totalAminoAcids;
        v348.perThou = 1E3 * v647;
      } else {
        var v349 = arrayOfCodons$$2[j$$13];
        v349.fraction = 0;
        var v350 = arrayOfCodons$$2[j$$13];
        v350.perThou = 0;
      }
      j$$13++;
      var v648 = arrayOfCodons$$2.length;
      v352 = j$$13 < v648;
    }
    i$$16++;
    var v770 = this.aminoAcids;
    var v649 = v770.length;
    v353 = i$$16 < v649;
  }
  return;
}
function count() {
  var i$$17 = 0;
  var v771 = this.codons;
  var v650 = v771.length;
  var v356 = i$$17 < v650;
  for (;v356;) {
    var v354 = this.number;
    var v651 = this.codons;
    var v355 = v651[i$$17];
    this.number = v354 + v355;
    i$$17++;
    var v772 = this.codons;
    var v652 = v772.length;
    v356 = i$$17 < v652;
  }
  return;
}
function addCodon(codon$$1) {
  var v357 = this.codons;
  v357.push(codon$$1);
  return;
}
function AminoAcid(name$$30) {
  this.name = name$$30;
  var v1252 = new Array;
  this.codons = v1252;
  this.number = 0;
  return;
}
function CodonTable() {
  var v1253 = new AminoAcid("Ala");
  this.a = v1253;
  var v1254 = new AminoAcid("Cys");
  this.c = v1254;
  var v1255 = new AminoAcid("Asp");
  this.d = v1255;
  var v1256 = new AminoAcid("Glu");
  this.e = v1256;
  var v1257 = new AminoAcid("Phe");
  this.f = v1257;
  var v1258 = new AminoAcid("Gly");
  this.g = v1258;
  var v1259 = new AminoAcid("His");
  this.h = v1259;
  var v1260 = new AminoAcid("Ile");
  this.i = v1260;
  var v1261 = new AminoAcid("Lys");
  this.k = v1261;
  var v1262 = new AminoAcid("Leu");
  this.l = v1262;
  var v1263 = new AminoAcid("Met");
  this.m = v1263;
  var v1264 = new AminoAcid("Asn");
  this.n = v1264;
  var v1265 = new AminoAcid("Pro");
  this.p = v1265;
  var v1266 = new AminoAcid("Gln");
  this.q = v1266;
  var v1267 = new AminoAcid("Arg");
  this.r = v1267;
  var v1268 = new AminoAcid("Ser");
  this.s = v1268;
  var v1269 = new AminoAcid("Thr");
  this.t = v1269;
  var v1270 = new AminoAcid("Val");
  this.v = v1270;
  var v1271 = new AminoAcid("Trp");
  this.w = v1271;
  var v1272 = new AminoAcid("Tyr");
  this.y = v1272;
  var v1273 = new AminoAcid("End");
  this.z = v1273;
  this.ala = this.a;
  this.cys = this.c;
  this.asp = this.d;
  this.glu = this.e;
  this.phe = this.f;
  this.gly = this.g;
  this.his = this.h;
  this.ile = this.i;
  this.lys = this.k;
  this.leu = this.l;
  this.met = this.m;
  this.asn = this.n;
  this.pro = this.p;
  this.gln = this.q;
  this.arg = this.r;
  this.ser = this.s;
  this.thr = this.t;
  this.val = this.v;
  this.trp = this.w;
  this.tyr = this.y;
  this.end = this.z;
  var v358 = this.a;
  var v359 = this.c;
  var v360 = this.d;
  var v361 = this.e;
  var v362 = this.f;
  var v363 = this.g;
  var v364 = this.h;
  var v365 = this.i;
  var v366 = this.k;
  var v367 = this.l;
  var v368 = this.m;
  var v369 = this.n;
  var v370 = this.p;
  var v371 = this.q;
  var v372 = this.r;
  var v373 = this.s;
  var v374 = this.t;
  var v375 = this.v;
  var v376 = this.w;
  var v377 = this.y;
  var v378 = this.z;
  var v1274 = new Array(v358, v359, v360, v361, v362, v363, v364, v365, v366, v367, v368, v369, v370, v371, v372, v373, v374, v375, v376, v377, v378);
  this.aminoAcids = v1274;
  return;
}
function resetValues() {
  this.number = 0;
  this.perThou = 0;
  this.fraction = 0;
  return;
}
function Codon(sequence$$18, number, perThou, fraction) {
  var v1275 = sequence$$18.toLowerCase();
  this.sequence = v1275;
  this.number = number;
  this.perThou = perThou;
  this.fraction = fraction;
  return;
}
new AminoAcid("");
var v379 = AminoAcid.prototype;
v379.addCodon = addCodon;
var v380 = AminoAcid.prototype;
v380.count = count;
new CodonTable;
var v381 = CodonTable.prototype;
v381.determineValues = determineValues;
new Codon("", 0, 0, 0);
var v382 = Codon.prototype;
v382.resetValues = resetValues;
document.onload = v4;
var v383 = document.getElementById("submitbtn");
v383.onclick = v5;
var v384 = document.getElementById("clearbtn");
v384.onclick = v6
