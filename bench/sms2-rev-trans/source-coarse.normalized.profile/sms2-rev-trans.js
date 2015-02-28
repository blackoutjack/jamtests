
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
function v7() {
  var v843 = document.forms;
  var v695 = v843[0];
  var v421 = v695.elements;
  var v8 = v421[0];
  v8.value = " ";
  var v844 = document.forms;
  var v696 = v844[0];
  var v422 = v696.elements;
  var v9 = v422[4];
  v9.value = " ";
  return;
}
function v6() {
  try {
    revTrans();
  } catch (e$$6) {
    var v10 = "The following error was encountered: " + e$$6;
    alert(v10);
  }
  return;
}
function v5() {
  var v423 = document.main_form;
  var v11 = v423.main_submit;
  v11.focus();
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
  var v12 = arrayOfSequences[0];
  var lengthOfAlign = v12.length;
  var v424 = arrayOfSequences.length;
  var v13 = v424 < 2;
  if (v13) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v425 = arrayOfTitles.length;
  var v15 = i$$1 < v425;
  for (;v15;) {
    var v937 = arrayOfTitles[i$$1];
    var v845 = v937.search(/\S/);
    var v697 = v845 == -1;
    var v847 = !v697;
    if (v847) {
      var v938 = arrayOfSequences[i$$1];
      var v846 = v938.search(/\S/);
      v697 = v846 == -1;
    }
    var v426 = v697;
    var v699 = !v426;
    if (v699) {
      var v848 = arrayOfSequences[i$$1];
      var v698 = v848.length;
      v426 = v698 != lengthOfAlign;
    }
    var v14 = v426;
    if (v14) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v427 = arrayOfTitles.length;
    v15 = i$$1 < v427;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v993 = codonTable.search(/AmAcid/);
  var v939 = v993 == -1;
  var v995 = !v939;
  if (v995) {
    var v994 = codonTable.search(/Codon/);
    v939 = v994 == -1;
  }
  var v849 = v939;
  var v941 = !v849;
  if (v941) {
    var v940 = codonTable.search(/Number/);
    v849 = v940 == -1;
  }
  var v700 = v849;
  var v851 = !v700;
  if (v851) {
    var v850 = codonTable.search(/\/1000/);
    v700 = v850 == -1;
  }
  var v428 = v700;
  var v702 = !v428;
  if (v702) {
    var v701 = codonTable.search(/Fraction\s*\.\./);
    v428 = v701 == -1;
  }
  var v16 = v428;
  if (v16) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v703 = formElement.value;
  var v429 = v703.search(/\S/);
  var v17 = v429 == -1;
  if (v17) {
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
  var v430 = arrayOfPatterns.length;
  var v20 = z$$2 < v430;
  for (;v20;) {
    var v704 = arrayOfPatterns[z$$2];
    var v431 = v704.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v18 = v431 == -1;
    if (v18) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v705 = arrayOfPatterns[z$$2];
    var v432 = moreExpressionCheck(v705);
    var v19 = v432 == false;
    if (v19) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v433 = arrayOfPatterns.length;
    v20 = z$$2 < v433;
  }
  var v21 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v21);
  var v22 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v22);
  var j = 0;
  var v434 = arrayOfPatterns.length;
  var v26 = j < v434;
  for (;v26;) {
    var v706 = arrayOfPatterns[j];
    var v435 = v706.match(/\/.+\//);
    var v23 = v435 + "gi";
    var v1111 = eval(v23);
    geneticCodeMatchExp[j] = v1111;
    var v436 = arrayOfPatterns[j];
    var v24 = v436.match(/=[a-zA-Z\*]/);
    var v1112 = v24.toString();
    geneticCodeMatchResult[j] = v1112;
    var v25 = geneticCodeMatchResult[j];
    var v1113 = v25.replace(/=/g, "");
    geneticCodeMatchResult[j] = v1113;
    j++;
    var v437 = arrayOfPatterns.length;
    v26 = j < v437;
  }
  var i$$2 = 0;
  var v707 = testSequence.length;
  var v438 = v707 - 3;
  var v33 = i$$2 <= v438;
  for (;v33;) {
    var v27 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v27);
    j = 0;
    var v439 = geneticCodeMatchExp.length;
    var v31 = j < v439;
    for (;v31;) {
      var v708 = geneticCodeMatchExp[j];
      var v440 = codon.search(v708);
      var v30 = v440 != -1;
      if (v30) {
        var v29 = oneMatch == true;
        if (v29) {
          var v441 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v28 = v441 + ".";
          alert(v28);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v442 = geneticCodeMatchExp.length;
      v31 = j < v442;
    }
    var v32 = oneMatch == false;
    if (v32) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v709 = testSequence.length;
    var v443 = v709 - 3;
    v33 = i$$2 <= v443;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v444 = arrayOfPatterns$$1.length;
  var v35 = z$$3 < v444;
  for (;v35;) {
    var v710 = arrayOfPatterns$$1[z$$3];
    var v445 = v710.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v34 = v445 != -1;
    if (v34) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v446 = arrayOfPatterns$$1.length;
    v35 = z$$3 < v446;
  }
  var i$$3 = 0;
  var v447 = arrayOfPatterns$$1.length;
  var v39 = i$$3 < v447;
  for (;v39;) {
    var v711 = arrayOfPatterns$$1[i$$3];
    var v448 = "[" + v711;
    var v36 = v448 + "]";
    var re = new RegExp(v36, "gi");
    var j$$1 = i$$3 + 1;
    var v449 = arrayOfPatterns$$1.length;
    var v38 = j$$1 < v449;
    for (;v38;) {
      var v712 = arrayOfPatterns$$1[j$$1];
      var v450 = v712.search(re);
      var v37 = v450 != -1;
      if (v37) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v451 = arrayOfPatterns$$1.length;
      v38 = j$$1 < v451;
    }
    i$$3++;
    var v452 = arrayOfPatterns$$1.length;
    v39 = i$$3 < v452;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v453 = arrayOfPatterns$$2.length;
  var v42 = z$$4 < v453;
  for (;v42;) {
    var v713 = arrayOfPatterns$$2[z$$4];
    var v454 = v713.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v40 = v454 == -1;
    if (v40) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v714 = arrayOfPatterns$$2[z$$4];
    var v455 = moreExpressionCheck(v714);
    var v41 = v455 == false;
    if (v41) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v456 = arrayOfPatterns$$2.length;
    v42 = z$$4 < v456;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v852 = getSequenceFromFasta(text$$7);
  var v715 = v852.replace(/[^A-Za-z]/g, "");
  var v457 = v715.length;
  var v44 = v457 > maxInput;
  if (v44) {
    var v458 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v43 = v458 + " characters.";
    alert(v43);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v459 = text$$8.length;
  var v46 = v459 > maxInput$$1;
  if (v46) {
    var v460 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v45 = v460 + " characters.";
    alert(v45);
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
  var v47 = outputWindow.document;
  v47.write("</form>");
  return true;
}
function closePre() {
  var v48 = outputWindow.document;
  v48.write("</div>");
  var v49 = outputWindow.document;
  v49.write("</pre>\n");
  return;
}
function closeTextArea() {
  var v50 = outputWindow.document;
  v50.write("</textarea>");
  return true;
}
function closeWindow() {
  var v51 = outputWindow.document;
  v51.write("</body>\n</html>\n");
  outputWindow.status = "Done.";
  var v52 = outputWindow.document;
  v52.close();
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
  var v461 = alignArray.length;
  var v53 = v461 < 3;
  if (v53) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v462 = alignArray.length;
  var v55 = i$$4 < v462;
  for (;v55;) {
    var v716 = alignArray[i$$4];
    var v463 = v716.search(/[^\s]+\s/);
    var v54 = v463 == -1;
    if (v54) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v464 = alignArray.length;
    v55 = i$$4 < v464;
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
  var v465 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v58 = v465 != -1;
  if (v58) {
    var v57 = matchArray = re$$1.exec(sequenceData);
    for (;v57;) {
      var v56 = matchArray[0];
      arrayOfFasta.push(v56);
      v57 = matchArray = re$$1.exec(sequenceData);
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v466 = sequence$$2.length;
  var v59 = "&gt;results for " + v466;
  var stringToReturn = v59 + " residue sequence ";
  var v467 = fastaSequenceTitle.search(/[^\s]/);
  var v61 = v467 != -1;
  if (v61) {
    var v468 = stringToReturn + '"';
    var v60 = v468 + fastaSequenceTitle;
    stringToReturn = v60 + '"';
  }
  var v469 = stringToReturn + ' starting "';
  var v470 = sequence$$2.substring(0, 10);
  var v62 = v469 + v470;
  stringToReturn = v62 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v471 = sequenceOne.length;
  var v63 = "Search results for " + v471;
  var stringToReturn$$1 = v63 + " residue sequence ";
  var v472 = fastaSequenceTitleOne.search(/[^\s]/);
  var v65 = v472 != -1;
  if (v65) {
    var v473 = stringToReturn$$1 + '"';
    var v64 = v473 + fastaSequenceTitleOne;
    stringToReturn$$1 = v64 + '"';
  }
  var v474 = stringToReturn$$1 + ' starting "';
  var v475 = sequenceOne.substring(0, 10);
  var v66 = v474 + v475;
  stringToReturn$$1 = v66 + '"\n';
  var v476 = stringToReturn$$1 + "and ";
  var v477 = sequenceTwo.length;
  var v67 = v476 + v477;
  stringToReturn$$1 = v67 + " residue sequence ";
  var v478 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v69 = v478 != -1;
  if (v69) {
    var v479 = stringToReturn$$1 + '"';
    var v68 = v479 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v68 + '"';
  }
  var v480 = stringToReturn$$1 + ' starting "';
  var v481 = sequenceTwo.substring(0, 10);
  var v70 = v480 + v481;
  stringToReturn$$1 = v70 + '"';
  var v71 = '<div class="info">' + stringToReturn$$1;
  return v71 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v72 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v72);
  var j$$2 = 0;
  var v482 = arrayOfPatterns$$3.length;
  var v74 = j$$2 < v482;
  for (;v74;) {
    var v717 = arrayOfPatterns$$3[j$$2];
    var v483 = v717.match(/\/.+\//);
    var v73 = v483 + "gi";
    var v1114 = eval(v73);
    geneticCodeMatchExp$$1[j$$2] = v1114;
    j$$2++;
    var v484 = arrayOfPatterns$$3.length;
    v74 = j$$2 < v484;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v75 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v75);
  var j$$3 = 0;
  var v485 = arrayOfPatterns$$4.length;
  var v78 = j$$3 < v485;
  for (;v78;) {
    var v486 = arrayOfPatterns$$4[j$$3];
    var v76 = v486.match(/=[a-zA-Z\*]/);
    var v1115 = v76.toString();
    geneticCodeMatchResult$$1[j$$3] = v1115;
    var v77 = geneticCodeMatchResult$$1[j$$3];
    var v1116 = v77.replace(/=/g, "");
    geneticCodeMatchResult$$1[j$$3] = v1116;
    j$$3++;
    var v487 = arrayOfPatterns$$4.length;
    v78 = j$$3 < v487;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(sequence$$3) {
  var fastaSequenceTitle$$1 = title;
  var v488 = sequence$$3.length;
  var v79 = "Results for " + v488;
  var stringToReturn$$2 = v79 + " residue sequence ";
  var v489 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v81 = v489 != -1;
  if (v81) {
    var v490 = stringToReturn$$2 + '"';
    var v80 = v490 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v80 + '"';
  }
  var v491 = stringToReturn$$2 + ' starting "';
  var v492 = sequence$$3.substring(0, 10);
  var v82 = v491 + v492;
  stringToReturn$$2 = v82 + '"';
  var v83 = '<div class="info">' + stringToReturn$$2;
  return v83 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v718 = "Results for " + topology;
  var v493 = v718 + " ";
  var v494 = sequence$$4.length;
  var v84 = v493 + v494;
  var stringToReturn$$3 = v84 + " residue sequence ";
  var v495 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v86 = v495 != -1;
  if (v86) {
    var v496 = stringToReturn$$3 + '"';
    var v85 = v496 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v85 + '"';
  }
  var v497 = stringToReturn$$3 + ' starting "';
  var v498 = sequence$$4.substring(0, 10);
  var v87 = v497 + v498;
  stringToReturn$$3 = v87 + '"';
  var v88 = '<div class="info">' + stringToReturn$$3;
  return v88 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v499 = sequenceOne$$1.length;
  var v89 = "Alignment results for " + v499;
  var stringToReturn$$4 = v89 + " residue sequence ";
  var v500 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v91 = v500 != -1;
  if (v91) {
    var v501 = stringToReturn$$4 + '"';
    var v90 = v501 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v90 + '"';
  }
  var v502 = stringToReturn$$4 + ' starting "';
  var v503 = sequenceOne$$1.substring(0, 10);
  var v92 = v502 + v503;
  stringToReturn$$4 = v92 + '"\n';
  var v504 = stringToReturn$$4 + "and ";
  var v505 = sequenceTwo$$1.length;
  var v93 = v504 + v505;
  stringToReturn$$4 = v93 + " residue sequence ";
  var v506 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v95 = v506 != -1;
  if (v95) {
    var v507 = stringToReturn$$4 + '"';
    var v94 = v507 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v94 + '"';
  }
  var v508 = stringToReturn$$4 + ' starting "';
  var v509 = sequenceTwo$$1.substring(0, 10);
  var v96 = v508 + v509;
  stringToReturn$$4 = v96 + '"';
  var v97 = '<div class="info">' + stringToReturn$$4;
  return v97 + "</div>\n";
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v99 = j$$4 < lengthOut;
  for (;v99;) {
    var v510 = Math.random();
    var v511 = components.length;
    var v98 = v510 * v511;
    tempNum = Math.floor(v98);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4++;
    v99 = j$$4 < lengthOut;
  }
  return sequenceArray.join("");
}
function getSequenceFromFasta(sequenceRecord) {
  var v512 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v100 = v512 != -1;
  if (v100) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "");
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v513 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v102 = v513 != -1;
  if (v102) {
    var v101 = sequenceRecord$$1.match(/\>[^\f\n\r]+[\f\n\r]/, "");
    fastaTitle = v101.toString();
    fastaTitle = fastaTitle.replace(/\>|[\f\n\r]/g, "");
    fastaTitle = fastaTitle.replace(/\s{2,}/g, " ");
    fastaTitle = fastaTitle.replace(/[\<\>]/gi, "");
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  var v1077 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v1069 = v1077 != -1;
  var v1079 = !v1069;
  if (v1079) {
    var v1078 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    v1069 = v1078 != -1;
  }
  var v1058 = v1069;
  var v1071 = !v1058;
  if (v1071) {
    var v1070 = expressionToCheck.search(/\[\]/);
    v1058 = v1070 != -1;
  }
  var v1045 = v1058;
  var v1060 = !v1045;
  if (v1060) {
    var v1059 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
    v1045 = v1059 != -1;
  }
  var v1029 = v1045;
  var v1047 = !v1029;
  if (v1047) {
    var v1046 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
    v1029 = v1046 != -1;
  }
  var v1013 = v1029;
  var v1031 = !v1013;
  if (v1031) {
    var v1030 = expressionToCheck.search(/\|\|/);
    v1013 = v1030 != -1;
  }
  var v996 = v1013;
  var v1015 = !v996;
  if (v1015) {
    var v1014 = expressionToCheck.search(/\/\|/);
    v996 = v1014 != -1;
  }
  var v942 = v996;
  var v998 = !v942;
  if (v998) {
    var v997 = expressionToCheck.search(/\|\//);
    v942 = v997 != -1;
  }
  var v853 = v942;
  var v944 = !v853;
  if (v944) {
    var v943 = expressionToCheck.search(/\[.\]/);
    v853 = v943 != -1;
  }
  var v719 = v853;
  var v855 = !v719;
  if (v855) {
    var v854 = expressionToCheck.search(/\</);
    v719 = v854 != -1;
  }
  var v514 = v719;
  var v721 = !v514;
  if (v721) {
    var v720 = expressionToCheck.search(/\>/);
    v514 = v720 != -1;
  }
  var v103 = v514;
  if (v103) {
    return false;
  }
  return true;
}
function openForm() {
  var v104 = outputWindow.document;
  v104.write('<form action="">\n');
  return true;
}
function openPre() {
  var v105 = outputWindow.document;
  v105.write("<pre>");
  var v106 = outputWindow.document;
  v106.write('<div class="pre">');
  return;
}
function openTextArea() {
  var v107 = outputWindow.document;
  v107.write('<br /><textarea rows="6" cols="61">\n');
  return true;
}
function openWindow() {
  var title$$6 = "Reverse Translate";
  _openWindow(title$$6);
  return;
}
function _openWindow(title$$7) {
  var isColor = true;
  outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  outputWindow.focus();
  var v108 = outputWindow.document;
  var v856 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v722 = v856 + "<head>\n";
  var v515 = v722 + "<title>Sequence Manipulation Suite</title>\n";
  var v109 = v515 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v108.write(v109);
  if (isColor) {
    var v110 = outputWindow.document;
    var v1096 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1090 = v1096 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1085 = v1090 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1080 = v1085 + "div.info {font-weight: bold}\n";
    var v1072 = v1080 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1061 = v1072 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v1048 = v1061 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v1032 = v1048 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1016 = v1032 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v999 = v1016 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v945 = v999 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v857 = v945 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v723 = v857 + "td.many {color: #000000}\n";
    var v516 = v723 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v111 = v516 + "</style>\n";
    v110.write(v111);
  } else {
    var v112 = outputWindow.document;
    var v1101 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1097 = v1101 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1091 = v1097 + "div.title {display: none}\n";
    var v1086 = v1091 + "div.info {font-weight: bold}\n";
    var v1081 = v1086 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1073 = v1081 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1062 = v1073 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v1049 = v1062 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1033 = v1049 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1017 = v1033 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1000 = v1017 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v946 = v1000 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v858 = v946 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v724 = v858 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v517 = v724 + "img {display: none}\n";
    var v113 = v517 + "</style>\n";
    v112.write(v113);
  }
  var v114 = outputWindow.document;
  var v859 = "</head>\n" + '<body class="main">\n';
  var v725 = v859 + '<div class="title">';
  var v518 = v725 + title$$7;
  var v115 = v518 + " results</div>\n";
  v114.write(v115);
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
  var v116 = outputWindow.document;
  var v860 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v726 = v860 + "<head>\n";
  var v519 = v726 + "<title>Sequence Manipulation Suite</title>\n";
  var v117 = v519 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v116.write(v117);
  if (isBackground) {
    var v118 = outputWindow.document;
    var v1098 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1092 = v1098 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1087 = v1092 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1082 = v1087 + "div.info {font-weight: bold}\n";
    var v1074 = v1082 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v1063 = v1074 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v1050 = v1063 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v1034 = v1050 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v1018 = v1034 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v1001 = v1018 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v947 = v1001 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v861 = v947 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v727 = v861 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v520 = v727 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v119 = v520 + "</style>\n";
    v118.write(v119);
  } else {
    var v120 = outputWindow.document;
    var v1105 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1102 = v1105 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1099 = v1102 + "div.title {display: none}\n";
    var v1093 = v1099 + "div.info {font-weight: bold}\n";
    var v1088 = v1093 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1083 = v1088 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v1075 = v1083 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v1064 = v1075 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v1051 = v1064 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v1035 = v1051 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v1019 = v1035 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v1002 = v1019 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v948 = v1002 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v862 = v948 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v728 = v862 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v521 = v728 + "img {display: none}\n";
    var v121 = v521 + "</style>\n";
    v120.write(v121);
  }
  var v122 = outputWindow.document;
  var v863 = "</head>\n" + '<body class="main">\n';
  var v729 = v863 + '<div class="title">';
  var v522 = v729 + title$$9;
  var v123 = v522 + " results</div>\n";
  v122.write(v123);
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
  var v523 = dnaSequence$$1.search(/./);
  var v124 = v523 != -1;
  if (v124) {
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
  var v125 = j$$5 < lengthOfColumn;
  for (;v125;) {
    tempString = tempString + " ";
    j$$5++;
    v125 = j$$5 < lengthOfColumn;
  }
  var v126 = tempString + theNumber;
  theNumber = v126 + " ";
  var v127 = sequenceToAppend + theNumber;
  sequenceToAppend = v127 + tabIn;
  return sequenceToAppend;
}
function testScript() {
  function v1(str$$7, p1$$1, offset$$9, s$$3) {
    return p1$$1 + "X";
  }
  var testArray = new Array;
  var testString = "1234567890";
  testArray.push(testString);
  var v524 = testArray[0];
  var v128 = v524 != testString;
  if (v128) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v525 = testString.search(re$$2);
  var v129 = v525 == -1;
  if (v129) {
    alert("Regular expression 'm' flag not supported. See browser compatibility page.");
    return false;
  }
  var caughtException = false;
  try {
    re$$2 = eval("Exception handling not supported. Check browser compatibility page.");
  } catch (e$$4) {
    caughtException = true;
  }
  var v130 = !caughtException;
  if (v130) {
    alert("Exception handling not supported. See browser compatibility page.");
  }
  testString = "123";
  testString = testString.replace(/(\d)/g, v1);
  var v131 = testString != "1X2X3X";
  if (v131) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false;
  }
  var testNum = 2489.8237;
  var v526 = testNum.toFixed(3);
  var v132 = v526 != 2489.824;
  if (v132) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v527 = testNum.toPrecision(5);
  var v133 = v527 != 2489.8;
  if (v133) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v528 = theNumber$$1.search(/\d/);
  var v134 = v528 == -1;
  if (v134) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v949 = emblFile.search(/ID/);
  var v864 = v949 == -1;
  var v951 = !v864;
  if (v951) {
    var v950 = emblFile.search(/AC/);
    v864 = v950 == -1;
  }
  var v730 = v864;
  var v866 = !v730;
  if (v866) {
    var v865 = emblFile.search(/DE/);
    v730 = v865 == -1;
  }
  var v529 = v730;
  var v732 = !v529;
  if (v732) {
    var v731 = emblFile.search(/SQ/);
    v529 = v731 == -1;
  }
  var v135 = v529;
  if (v135) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v530 = theNumber$$2.search(/\d/);
  var v136 = v530 == -1;
  if (v136) {
    alert("Please enter a number.");
    return false;
  }
  var v138 = theNumber$$2 > maxInput$$2;
  if (v138) {
    var v531 = "Please enter a number less than or equal to " + maxInput$$2;
    var v137 = v531 + ".";
    alert(v137);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v532 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v139 = v532 != -1;
  if (v139) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v533 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v140 = v533 != -1;
  if (v140) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v952 = genBankFile.search(/LOCUS/);
  var v867 = v952 == -1;
  var v954 = !v867;
  if (v954) {
    var v953 = genBankFile.search(/DEFINITION/);
    v867 = v953 == -1;
  }
  var v733 = v867;
  var v869 = !v733;
  if (v869) {
    var v868 = genBankFile.search(/ACCESSION/);
    v733 = v868 == -1;
  }
  var v534 = v733;
  var v735 = !v534;
  if (v735) {
    var v734 = genBankFile.search(/ORIGIN/);
    v534 = v734 == -1;
  }
  var v141 = v534;
  if (v141) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v955 = genBankFile$$1.search(/LOCUS/);
  var v870 = v955 == -1;
  var v957 = !v870;
  if (v957) {
    var v956 = genBankFile$$1.search(/DEFINITION/);
    v870 = v956 == -1;
  }
  var v736 = v870;
  var v872 = !v736;
  if (v872) {
    var v871 = genBankFile$$1.search(/ACCESSION/);
    v736 = v871 == -1;
  }
  var v535 = v736;
  var v738 = !v535;
  if (v738) {
    var v737 = genBankFile$$1.search(/ORIGIN/);
    v535 = v737 == -1;
  }
  var v142 = v535;
  if (v142) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v536 = genBankFile$$1.search(/FEATURES {13}/);
  var v143 = v536 == -1;
  if (v143) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v958 = emblFile$$1.search(/ID/);
  var v873 = v958 == -1;
  var v960 = !v873;
  if (v960) {
    var v959 = emblFile$$1.search(/AC/);
    v873 = v959 == -1;
  }
  var v739 = v873;
  var v875 = !v739;
  if (v875) {
    var v874 = emblFile$$1.search(/DE/);
    v739 = v874 == -1;
  }
  var v537 = v739;
  var v741 = !v537;
  if (v741) {
    var v740 = emblFile$$1.search(/SQ/);
    v537 = v740 == -1;
  }
  var v144 = v537;
  if (v144) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v538 = emblFile$$1.search(/^FT/m);
  var v145 = v538 == -1;
  if (v145) {
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
  var v152 = i$$5 < stopBase;
  for (;v152;) {
    var v146 = i$$5 + 1;
    lineOfText = rightNum(v146, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v539 = basePerLine / groupSize;
    var v149 = j$$6 <= v539;
    for (;v149;) {
      var v148 = k < groupSize;
      for (;v148;) {
        var v540 = k + i$$5;
        var v147 = text$$10.charAt(v540);
        lineOfText = lineOfText + v147;
        k = k + 1;
        v148 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v541 = basePerLine / groupSize;
      v149 = j$$6 <= v541;
    }
    var v150 = outputWindow.document;
    var v151 = lineOfText + "\n";
    v150.write(v151);
    lineOfText = "";
    v152 = i$$5 < stopBase;
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
    var v542 = adjustment < 0;
    if (v542) {
      v542 = adjusted >= 0;
    }
    var v153 = v542;
    if (v153) {
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
    var v543 = basePerLine$$2 / groupSize$$2;
    var v160 = j$$7 <= v543;
    for (;v160;) {
      var v156 = k$$1 < groupSize$$2;
      for (;v156;) {
        var v544 = i$$6 + k$$1;
        var v154 = v544 >= stopBase$$2;
        if (v154) {
          break;
        }
        var v545 = k$$1 + i$$6;
        var v155 = text$$12.charAt(v545);
        lineOfText$$1 = lineOfText$$1 + v155;
        k$$1 = k$$1 + 1;
        v156 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v158 = numberPosition$$1 == "above";
      if (v158) {
        var v546 = adjustNumbering(i$$6, numberingAdjustment);
        var v157 = rightNum(v546, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v157;
      }
      var v159 = i$$6 >= stopBase$$2;
      if (v159) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v547 = basePerLine$$2 / groupSize$$2;
      v160 = j$$7 <= v547;
    }
    var v183 = numberPosition$$1 == "left";
    if (v183) {
      var v161 = outputWindow.document;
      var v876 = adjustNumbering(lineNum, numberingAdjustment);
      var v742 = rightNum(v876, "", 8, tabIn$$3);
      var v548 = v742 + lineOfText$$1;
      var v162 = v548 + "\n";
      v161.write(v162);
      var v166 = strands$$1 == "two";
      if (v166) {
        var v163 = outputWindow.document;
        var v877 = adjustNumbering(lineNum, numberingAdjustment);
        var v743 = rightNum(v877, "", 8, tabIn$$3);
        var v744 = complement(lineOfText$$1);
        var v549 = v743 + v744;
        var v164 = v549 + "\n";
        v163.write(v164);
        var v165 = outputWindow.document;
        v165.write("\n");
      }
    } else {
      var v182 = numberPosition$$1 == "right";
      if (v182) {
        var v167 = outputWindow.document;
        var v745 = adjustNumbering(i$$6, numberingAdjustment);
        var v550 = lineOfText$$1 + v745;
        var v168 = v550 + "\n";
        v167.write(v168);
        var v172 = strands$$1 == "two";
        if (v172) {
          var v169 = outputWindow.document;
          var v746 = complement(lineOfText$$1);
          var v747 = adjustNumbering(i$$6, numberingAdjustment);
          var v551 = v746 + v747;
          var v170 = v551 + "\n";
          v169.write(v170);
          var v171 = outputWindow.document;
          v171.write("\n");
        }
      } else {
        var v181 = numberPosition$$1 == "above";
        if (v181) {
          var v173 = outputWindow.document;
          var v174 = aboveNum + "\n";
          v173.write(v174);
          var v175 = outputWindow.document;
          var v176 = lineOfText$$1 + "\n";
          v175.write(v176);
          var v180 = strands$$1 == "two";
          if (v180) {
            var v177 = outputWindow.document;
            var v552 = complement(lineOfText$$1);
            var v178 = v552 + "\n";
            v177.write(v178);
            var v179 = outputWindow.document;
            v179.write("\n");
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v184 = i$$6 < stopBase$$2;
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
  var v203 = i$$7 < stopBase$$3;
  for (;v203;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v553 = basePerLine$$3 / groupSize$$3;
    var v191 = j$$8 <= v553;
    for (;v191;) {
      var v187 = k$$2 < groupSize$$3;
      for (;v187;) {
        var v554 = i$$7 + k$$2;
        var v185 = v554 >= stopBase$$3;
        if (v185) {
          break;
        }
        var v555 = k$$2 + i$$7;
        var v186 = text$$13.charAt(v555);
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
      var v556 = basePerLine$$3 / groupSize$$3;
      v191 = j$$8 <= v556;
    }
    var v202 = numberPosition$$2 == "left";
    if (v202) {
      var v192 = outputWindow.document;
      var v748 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v557 = v748 + lineOfText$$2;
      var v193 = v557 + "\n";
      v192.write(v193);
    } else {
      var v201 = numberPosition$$2 == "right";
      if (v201) {
        var v194 = outputWindow.document;
        var v558 = lineOfText$$2 + i$$7;
        var v195 = v558 + "\n";
        v194.write(v195);
      } else {
        var v200 = numberPosition$$2 == "above";
        if (v200) {
          var v196 = outputWindow.document;
          var v197 = aboveNum$$1 + "\n";
          v196.write(v197);
          var v198 = outputWindow.document;
          var v199 = lineOfText$$2 + "\n";
          v198.write(v199);
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
  var v878 = sequence$$13.length;
  var v749 = v878 <= firstIndexToMutate;
  var v879 = !v749;
  if (v879) {
    v749 = lastIndexToMutate < 0;
  }
  var v559 = v749;
  var v750 = !v559;
  if (v750) {
    v559 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v204 = v559;
  if (v204) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v212 = i$$8 < numMut;
  for (;v212;) {
    maxNum = sequence$$13.length;
    var v560 = Math.random();
    var v205 = v560 * maxNum;
    randNum = Math.floor(v205);
    var v561 = randNum < firstIndexToMutate;
    var v751 = !v561;
    if (v751) {
      v561 = randNum > lastIndexToMutate;
    }
    var v206 = v561;
    if (v206) {
      numMut++;
      i$$8++;
      v212 = i$$8 < numMut;
      continue;
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for (;needNewChar;) {
      var v562 = Math.random();
      var v563 = components$$1.length;
      var v207 = v562 * v563;
      componentsIndex = Math.round(v207);
      var v564 = components$$1.length;
      var v208 = componentsIndex == v564;
      if (v208) {
        componentsIndex = 0;
      }
      var v565 = components$$1[componentsIndex];
      var v209 = v565 != currentChar;
      if (v209) {
        needNewChar = false;
      }
    }
    var v566 = sequence$$13.substring(0, randNum);
    var v567 = components$$1[componentsIndex];
    var v210 = v566 + v567;
    var v568 = randNum + 1;
    var v569 = sequence$$13.length;
    var v211 = sequence$$13.substring(v568, v569);
    sequence$$13 = v210 + v211;
    i$$8++;
    v212 = i$$8 < numMut;
  }
  var v213 = outputWindow.document;
  var v214 = addReturns(sequence$$13);
  v213.write(v214);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v219 = j$$9 < lengthOut$$1;
  for (;v219;) {
    var v570 = Math.random();
    var v571 = components$$2.length;
    var v215 = v570 * v571;
    tempNum$$1 = Math.floor(v215);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v572 = sequence$$14.length;
    var v218 = v572 == 60;
    if (v218) {
      var v216 = outputWindow.document;
      var v217 = sequence$$14 + "\n";
      v216.write(v217);
      sequence$$14 = "";
    }
    j$$9++;
    v219 = j$$9 < lengthOut$$1;
  }
  var v220 = outputWindow.document;
  var v221 = sequence$$14 + "\n";
  v220.write(v221);
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
    var v222 = sequence$$15.substring(0, lookAhead);
    shiftValue = v222.length;
    var v880 = sequence$$15.length;
    var v752 = v880 - lookAhead;
    var v753 = sequence$$15.length;
    var v573 = sequence$$15.substring(v752, v753);
    var v223 = v573 + sequence$$15;
    var v224 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v223 + v224;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v226 = outputWindow.document;
  v226.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  var v227 = outputWindow.document;
  var v881 = '<tr><td class="title" width="200px">' + "Site:";
  var v754 = v881 + '</td><td class="title">';
  var v574 = v754 + "Positions:";
  var v228 = v574 + "</td></tr>\n";
  v227.write(v228);
  var i$$9 = 0;
  var v575 = arrayOfItems.length;
  var v244 = i$$9 < v575;
  for (;v244;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v576 = arrayOfItems[i$$9];
    var v229 = v576.match(/\/.+\//);
    matchExp = v229 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    var v882 = arrayOfItems[i$$9];
    var v755 = v882.match(/\)\D*\d+/);
    var v577 = v755.toString();
    var v230 = v577.replace(/\)\D*/, "");
    cutDistance = parseFloat(v230);
    var v236 = matchArray$$1 = matchExp.exec(sequence$$15);
    for (;v236;) {
      var v231 = matchExp.lastIndex;
      matchPosition = v231 - cutDistance;
      var v578 = matchPosition >= lowerLimit;
      if (v578) {
        v578 = matchPosition < upperLimit;
      }
      var v234 = v578;
      if (v234) {
        timesFound++;
        var v232 = tempString$$1 + ", ";
        var v579 = matchPosition - shiftValue;
        var v233 = v579 + 1;
        tempString$$1 = v232 + v233;
      }
      var v580 = matchExp.lastIndex;
      var v756 = RegExp.lastMatch;
      var v581 = v756.length;
      var v235 = v580 - v581;
      matchExp.lastIndex = v235 + 1;
      v236 = matchArray$$1 = matchExp.exec(sequence$$15);
    }
    var v582 = tempString$$1.search(/\d/);
    var v237 = v582 != -1;
    if (v237) {
      tempString$$1 = tempString$$1.replace(/none,\s*/, "");
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
    var v1036 = '<tr><td class="' + backGroundClass;
    var v1020 = v1036 + '">';
    var v1065 = arrayOfItems[i$$9];
    var v1052 = v1065.match(/\([^\(]+\)/);
    var v1037 = v1052.toString();
    var v1021 = v1037.replace(/\(|\)/g, "");
    var v1003 = v1020 + v1021;
    var v961 = v1003 + '</td><td class="';
    var v883 = v961 + backGroundClass;
    var v757 = v883 + '">';
    var v583 = v757 + tempString$$1;
    var v243 = v583 + "</td></tr>\n";
    v242.write(v243);
    timesFound = 0;
    i$$9++;
    var v584 = arrayOfItems.length;
    v244 = i$$9 < v584;
  }
  var v245 = outputWindow.document;
  v245.write("</tbody></table>\n");
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v246 = outputWindow.document;
  v246.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  var v247 = outputWindow.document;
  var v1004 = '<tr><td class="title">' + "Pattern:";
  var v962 = v1004 + '</td><td class="title">';
  var v884 = v962 + "Times found:";
  var v758 = v884 + '</td><td class="title">';
  var v585 = v758 + "Percentage:";
  var v248 = v585 + "</td></tr>\n";
  v247.write(v248);
  var i$$10 = 0;
  var v586 = arrayOfItems$$1.length;
  var v257 = i$$10 < v586;
  for (;v257;) {
    var tempNumber = 0;
    var v587 = arrayOfItems$$1[i$$10];
    var v249 = v587.match(/\/[^\/]+\//);
    var matchExp$$1 = v249 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    var v588 = sequence$$16.search(matchExp$$1);
    var v251 = v588 != -1;
    if (v251) {
      var v250 = sequence$$16.match(matchExp$$1);
      tempNumber = v250.length;
    }
    var percentage = 0;
    var v759 = originalLength + 1;
    var v963 = arrayOfItems$$1[i$$10];
    var v885 = v963.match(/\d+/);
    var v760 = parseFloat(v885);
    var v589 = v759 - v760;
    var v254 = v589 > 0;
    if (v254) {
      var v252 = 100 * tempNumber;
      var v590 = originalLength + 1;
      var v886 = arrayOfItems$$1[i$$10];
      var v761 = v886.match(/\d+/);
      var v591 = parseFloat(v761);
      var v253 = v590 - v591;
      percentage = v252 / v253;
    }
    var v255 = outputWindow.document;
    var v1066 = arrayOfItems$$1[i$$10];
    var v1053 = v1066.match(/\([^\(]+\)\b/);
    var v1038 = v1053.toString();
    var v1022 = v1038.replace(/\(|\)/g, "");
    var v1005 = "<tr><td>" + v1022;
    var v964 = v1005 + "</td><td>";
    var v887 = v964 + tempNumber;
    var v762 = v887 + "</td><td>";
    var v763 = percentage.toFixed(2);
    var v592 = v762 + v763;
    var v256 = v592 + "</td></tr>\n";
    v255.write(v256);
    i$$10++;
    var v593 = arrayOfItems$$1.length;
    v257 = i$$10 < v593;
  }
  var v258 = outputWindow.document;
  v258.write("</tbody></table>\n");
  return true;
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v594 = sequence$$17.length;
  var v265 = v594 > 0;
  for (;v265;) {
    maxNum$$1 = sequence$$17.length;
    var v595 = Math.random();
    var v259 = v595 * maxNum$$1;
    randNum$$1 = Math.floor(v259);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v260 = randNum$$1 + 1;
    var v261 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v260, v261);
    sequence$$17 = tempString1 + tempString2;
    var v596 = tempSeq.length;
    var v264 = v596 == 60;
    if (v264) {
      var v262 = outputWindow.document;
      var v263 = tempSeq + "\n";
      v262.write(v263);
      tempSeq = "";
    }
    var v597 = sequence$$17.length;
    v265 = v597 > 0;
  }
  var v266 = outputWindow.document;
  var v267 = tempSeq + "\n";
  v266.write(v267);
  return true;
}
function revTrans() {
  var theDocument = document;
  var newProtein = "";
  var maxInput$$3 = 2E4;
  var v598 = testScript();
  var v268 = v598 == false;
  if (v268) {
    return;
  }
  var codonTable$$1;
  var v1039 = theDocument.forms;
  var v1023 = v1039[0];
  var v1006 = v1023.elements;
  var v965 = v1006[0];
  var v888 = checkFormElement(v965);
  var v764 = v888 == false;
  var v890 = !v764;
  if (v890) {
    var v1054 = theDocument.forms;
    var v1040 = v1054[0];
    var v1024 = v1040.elements;
    var v1007 = v1024[0];
    var v966 = v1007.value;
    var v889 = checkSequenceLength(v966, maxInput$$3);
    v764 = v889 == false;
  }
  var v599 = v764;
  var v766 = !v599;
  if (v766) {
    var v1041 = theDocument.forms;
    var v1025 = v1041[0];
    var v1008 = v1025.elements;
    var v967 = v1008[4];
    var v891 = v967.value;
    var v765 = checkCodonTable(v891);
    v599 = v765 == false;
  }
  var v269 = v599;
  if (v269) {
    return;
  }
  var v968 = theDocument.forms;
  var v892 = v968[0];
  var v767 = v892.elements;
  var v600 = v767[4];
  var v270 = v600.value;
  codonTable$$1 = makeCodonTable(v270);
  var v271 = codonTable$$1 == false;
  if (v271) {
    return;
  }
  openWindow();
  openPre();
  var v969 = theDocument.forms;
  var v893 = v969[0];
  var v768 = v893.elements;
  var v601 = v768[0];
  var v272 = v601.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v272);
  var i$$11 = 0;
  var v602 = arrayOfFasta$$1.length;
  var v281 = i$$11 < v602;
  for (;v281;) {
    var v273 = arrayOfFasta$$1[i$$11];
    newProtein = getSequenceFromFasta(v273);
    var v274 = arrayOfFasta$$1[i$$11];
    title = getTitleFromFasta(v274);
    newProtein = removeNonProteinAllowX(newProtein);
    var v275 = outputWindow.document;
    var v276 = getInfoFromTitleAndSequence(newProtein);
    v275.write(v276);
    writeRevTransSeqNoDegen(newProtein, codonTable$$1);
    var v277 = outputWindow.document;
    v277.write("\n");
    writeRevTransSeqDegen(newProtein, codonTable$$1);
    var v278 = outputWindow.document;
    v278.write("\n");
    var v279 = outputWindow.document;
    v279.write("Graph of base probabilities:\n");
    writeRevTransGraph(newProtein, codonTable$$1);
    var v280 = outputWindow.document;
    v280.write("\n\n");
    i$$11++;
    var v603 = arrayOfFasta$$1.length;
    v281 = i$$11 < v603;
  }
  closePre();
  closeWindow();
  return;
}
function writeRevTransSeqNoDegen(protein, codonTable$$2) {
  function v2(str$$8, p1$$2, offset$$10, s$$4) {
    var v282 = codonTable$$2;
    var v604 = p1$$2.toString();
    var v283 = v604.toLowerCase();
    aminoAcid = v282[v283];
    return aminoAcid.mostCommonCodon;
  }
  var title$$10 = title;
  var aminoAcid;
  protein = protein.replace(/\*/g, "z");
  protein = protein.replace(/(.)/g, v2);
  var v284 = outputWindow.document;
  var v970 = "&gt;" + "reverse translation of ";
  var v894 = v970 + title$$10;
  var v769 = v894 + " to a ";
  var v770 = protein.length;
  var v605 = v769 + v770;
  var v285 = v605 + " base sequence of most likely codons.\n";
  v284.write(v285);
  var v286 = outputWindow.document;
  var v287 = addReturns(protein);
  v286.write(v287);
  var v288 = outputWindow.document;
  v288.write("\n");
  return;
}
function writeRevTransSeqDegen(protein$$1, codonTable$$3) {
  function v3(str$$9, p1$$3, offset$$11, s$$5) {
    var v289 = codonTable$$3;
    var v606 = p1$$3.toString();
    var v290 = v606.toLowerCase();
    aminoAcid$$1 = v289[v290];
    return aminoAcid$$1.degenCodon;
  }
  var title$$11 = title;
  var aminoAcid$$1;
  protein$$1 = protein$$1.replace(/\*/g, "z");
  protein$$1 = protein$$1.replace(/(.)/g, v3);
  var v291 = outputWindow.document;
  var v971 = "&gt;" + "reverse translation of ";
  var v895 = v971 + title$$11;
  var v771 = v895 + " to a ";
  var v772 = protein$$1.length;
  var v607 = v771 + v772;
  var v292 = v607 + " base sequence of consensus codons.\n";
  v291.write(v292);
  var v293 = outputWindow.document;
  var v294 = addReturns(protein$$1);
  v293.write(v294);
  var v295 = outputWindow.document;
  v295.write("\n");
  return;
}
function writeRevTransGraph(protein$$2, codonTable$$4) {
  function v4(str$$10, p1$$4, offset$$12, s$$6) {
    var v296 = codonTable$$4;
    var v608 = p1$$4.toString();
    var v297 = v608.toLowerCase();
    aminoAcid$$2 = v296[v297];
    var v1110 = offset$$12 + 1;
    var v1109 = "<b>" + v1110;
    var v1108 = v1109 + "_";
    var v1107 = v1108 + str$$10;
    var v1106 = v1107 + "_";
    var v1103 = v1106 + "first</b>\n";
    var v1104 = aminoAcid$$2.rulerPosOne;
    var v1100 = v1103 + v1104;
    var v1094 = v1100 + "<b>";
    var v1095 = offset$$12 + 1;
    var v1089 = v1094 + v1095;
    var v1084 = v1089 + "_";
    var v1076 = v1084 + str$$10;
    var v1067 = v1076 + "_";
    var v1055 = v1067 + "second</b>\n";
    var v1056 = aminoAcid$$2.rulerPosTwo;
    var v1042 = v1055 + v1056;
    var v1026 = v1042 + "<b>";
    var v1027 = offset$$12 + 1;
    var v1009 = v1026 + v1027;
    var v972 = v1009 + "_";
    var v896 = v972 + str$$10;
    var v773 = v896 + "_";
    var v609 = v773 + "third</b>\n";
    var v610 = aminoAcid$$2.rulerPosThree;
    var v298 = v609 + v610;
    return v298 + "\n";
  }
  var aminoAcid$$2;
  protein$$2 = protein$$2.replace(/\*/g, "z");
  protein$$2 = protein$$2.replace(/(.)/g, v4);
  var v299 = outputWindow.document;
  v299.write(protein$$2);
  return;
}
function makeCodonTable(gcgTable) {
  gcgTable = gcgTable.replace(/[^\.]*\.\./, "");
  var tableArray = gcgTable.split(/[\f\n\r]/);
  var re$$3 = /(\w+)\s+(\w+)\s+(\S+)\s+(\S+)\s+(\S+)/g;
  var matchArray$$2;
  var codonTable$$5 = new CodonTable;
  var i$$12 = 0;
  var v611 = tableArray.length;
  var v304 = i$$12 < v611;
  for (;v304;) {
    var v612 = tableArray[i$$12];
    var v303 = matchArray$$2 = re$$3.exec(v612);
    for (;v303;) {
      try {
        var v774 = matchArray$$2[1];
        var v613 = v774.toLowerCase();
        var v300 = codonTable$$5[v613];
        var v614 = matchArray$$2[2];
        var v775 = matchArray$$2[3];
        var v615 = parseFloat(v775);
        var v776 = matchArray$$2[4];
        var v616 = parseFloat(v776);
        var v777 = matchArray$$2[5];
        var v617 = parseFloat(v777);
        var v301 = new Codon(v614, v615, v616, v617);
        v300.addCodon(v301);
      } catch (e$$5) {
        var v1068 = matchArray$$2[1];
        var v1057 = "There is a problem with a line of the codon table: " + v1068;
        var v1043 = v1057 + " ";
        var v1044 = matchArray$$2[2];
        var v1028 = v1043 + v1044;
        var v1010 = v1028 + " ";
        var v1011 = matchArray$$2[3];
        var v973 = v1010 + v1011;
        var v897 = v973 + " ";
        var v898 = matchArray$$2[4];
        var v778 = v897 + v898;
        var v618 = v778 + " ";
        var v619 = matchArray$$2[4];
        var v302 = v618 + v619;
        alert(v302);
        return false;
      }
      var v620 = tableArray[i$$12];
      v303 = matchArray$$2 = re$$3.exec(v620);
    }
    i$$12++;
    var v621 = tableArray.length;
    v304 = i$$12 < v621;
  }
  var v305 = codonTable$$5.a;
  v305.determineBaseFreq();
  var v306 = codonTable$$5.c;
  v306.determineBaseFreq();
  var v307 = codonTable$$5.d;
  v307.determineBaseFreq();
  var v308 = codonTable$$5.e;
  v308.determineBaseFreq();
  var v309 = codonTable$$5.f;
  v309.determineBaseFreq();
  var v310 = codonTable$$5.g;
  v310.determineBaseFreq();
  var v311 = codonTable$$5.h;
  v311.determineBaseFreq();
  var v312 = codonTable$$5.i;
  v312.determineBaseFreq();
  var v313 = codonTable$$5.k;
  v313.determineBaseFreq();
  var v314 = codonTable$$5.l;
  v314.determineBaseFreq();
  var v315 = codonTable$$5.m;
  v315.determineBaseFreq();
  var v316 = codonTable$$5.n;
  v316.determineBaseFreq();
  var v317 = codonTable$$5.p;
  v317.determineBaseFreq();
  var v318 = codonTable$$5.q;
  v318.determineBaseFreq();
  var v319 = codonTable$$5.r;
  v319.determineBaseFreq();
  var v320 = codonTable$$5.s;
  v320.determineBaseFreq();
  var v321 = codonTable$$5.t;
  v321.determineBaseFreq();
  var v322 = codonTable$$5.v;
  v322.determineBaseFreq();
  var v323 = codonTable$$5.w;
  v323.determineBaseFreq();
  var v324 = codonTable$$5.y;
  v324.determineBaseFreq();
  var v325 = codonTable$$5.z;
  v325.determineBaseFreq();
  var v326 = codonTable$$5.x;
  v326.determineBaseFreq();
  var v327 = codonTable$$5.x;
  var v1117 = new Array(.25, .25, .25, .25);
  v327.baseFreqPosOne = v1117;
  var v328 = codonTable$$5.x;
  var v1118 = new Array(.25, .25, .25, .25);
  v328.baseFreqPosTwo = v1118;
  var v329 = codonTable$$5.x;
  var v1119 = new Array(.25, .25, .25, .25);
  v329.baseFreqPosThree = v1119;
  var v330 = codonTable$$5.a;
  v330.fillRuler();
  var v331 = codonTable$$5.c;
  v331.fillRuler();
  var v332 = codonTable$$5.d;
  v332.fillRuler();
  var v333 = codonTable$$5.e;
  v333.fillRuler();
  var v334 = codonTable$$5.f;
  v334.fillRuler();
  var v335 = codonTable$$5.g;
  v335.fillRuler();
  var v336 = codonTable$$5.h;
  v336.fillRuler();
  var v337 = codonTable$$5.i;
  v337.fillRuler();
  var v338 = codonTable$$5.k;
  v338.fillRuler();
  var v339 = codonTable$$5.l;
  v339.fillRuler();
  var v340 = codonTable$$5.m;
  v340.fillRuler();
  var v341 = codonTable$$5.n;
  v341.fillRuler();
  var v342 = codonTable$$5.p;
  v342.fillRuler();
  var v343 = codonTable$$5.q;
  v343.fillRuler();
  var v344 = codonTable$$5.r;
  v344.fillRuler();
  var v345 = codonTable$$5.s;
  v345.fillRuler();
  var v346 = codonTable$$5.t;
  v346.fillRuler();
  var v347 = codonTable$$5.v;
  v347.fillRuler();
  var v348 = codonTable$$5.w;
  v348.fillRuler();
  var v349 = codonTable$$5.y;
  v349.fillRuler();
  var v350 = codonTable$$5.z;
  v350.fillRuler();
  var v351 = codonTable$$5.x;
  v351.fillRuler();
  return codonTable$$5;
}
function CodonTable() {
  var v1120 = new AminoAcid;
  this.a = v1120;
  var v1121 = new AminoAcid;
  this.c = v1121;
  var v1122 = new AminoAcid;
  this.d = v1122;
  var v1123 = new AminoAcid;
  this.e = v1123;
  var v1124 = new AminoAcid;
  this.f = v1124;
  var v1125 = new AminoAcid;
  this.g = v1125;
  var v1126 = new AminoAcid;
  this.h = v1126;
  var v1127 = new AminoAcid;
  this.i = v1127;
  var v1128 = new AminoAcid;
  this.k = v1128;
  var v1129 = new AminoAcid;
  this.l = v1129;
  var v1130 = new AminoAcid;
  this.m = v1130;
  var v1131 = new AminoAcid;
  this.n = v1131;
  var v1132 = new AminoAcid;
  this.p = v1132;
  var v1133 = new AminoAcid;
  this.q = v1133;
  var v1134 = new AminoAcid;
  this.r = v1134;
  var v1135 = new AminoAcid;
  this.s = v1135;
  var v1136 = new AminoAcid;
  this.t = v1136;
  var v1137 = new AminoAcid;
  this.v = v1137;
  var v1138 = new AminoAcid;
  this.w = v1138;
  var v1139 = new AminoAcid;
  this.y = v1139;
  var v1140 = new AminoAcid;
  this.z = v1140;
  var v1141 = new AminoAcid;
  this.x = v1141;
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
  this.xaa = this.x;
  return;
}
function fillRuler() {
  var markG = "gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg";
  var markA = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
  var markT = "TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT";
  var markC = "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC";
  var markLength = markG.length;
  var v974 = this.baseFreqPosOne;
  var v899 = v974[0];
  var v779 = this.getRuler(v899, markG);
  var v975 = this.baseFreqPosOne;
  var v900 = v975[1];
  var v780 = this.getRuler(v900, markA);
  var v622 = v779 + v780;
  var v901 = this.baseFreqPosOne;
  var v781 = v901[2];
  var v623 = this.getRuler(v781, markT);
  var v352 = v622 + v623;
  var v782 = this.baseFreqPosOne;
  var v624 = v782[3];
  var v353 = this.getRuler(v624, markC);
  this.rulerPosOne = v352 + v353;
  var v976 = this.baseFreqPosTwo;
  var v902 = v976[0];
  var v783 = this.getRuler(v902, markG);
  var v977 = this.baseFreqPosTwo;
  var v903 = v977[1];
  var v784 = this.getRuler(v903, markA);
  var v625 = v783 + v784;
  var v904 = this.baseFreqPosTwo;
  var v785 = v904[2];
  var v626 = this.getRuler(v785, markT);
  var v354 = v625 + v626;
  var v786 = this.baseFreqPosTwo;
  var v627 = v786[3];
  var v355 = this.getRuler(v627, markC);
  this.rulerPosTwo = v354 + v355;
  var v978 = this.baseFreqPosThree;
  var v905 = v978[0];
  var v787 = this.getRuler(v905, markG);
  var v979 = this.baseFreqPosThree;
  var v906 = v979[1];
  var v788 = this.getRuler(v906, markA);
  var v628 = v787 + v788;
  var v907 = this.baseFreqPosThree;
  var v789 = v907[2];
  var v629 = this.getRuler(v789, markT);
  var v356 = v628 + v629;
  var v790 = this.baseFreqPosThree;
  var v630 = v790[3];
  var v357 = this.getRuler(v630, markC);
  this.rulerPosThree = v356 + v357;
  this.setMostCommonCodon();
  this.setDegenCodon();
  return;
}
function getRuler(freq, mark) {
  var v908 = mark.substring(0, 1);
  var v1012 = mark.length;
  var v980 = freq * v1012;
  var v909 = mark.substring(0, v980);
  var v791 = v908 + v909;
  var v631 = v791 + " ";
  var v632 = freq.toFixed(2);
  var v358 = v631 + v632;
  return v358 + "\n";
}
function addCodon(codon$$1) {
  var v359 = this.codons;
  v359.push(codon$$1);
  return;
}
function determineBaseFreq() {
  this.fixFraction();
  var i$$13 = 0;
  var v792 = this.codons;
  var v633 = v792.length;
  var v384 = i$$13 < v633;
  for (;v384;) {
    var v981 = this.codons;
    var v910 = v981[i$$13];
    var v793 = v910.sequence;
    var v634 = v793.charAt(0);
    var v367 = v634 == "g";
    if (v367) {
      var v360 = this.baseFreqPosOne;
      var v794 = this.baseFreqPosOne;
      var v635 = v794[0];
      var v911 = this.codons;
      var v795 = v911[i$$13];
      var v636 = v795.fraction;
      v360[0] = v635 + v636;
    } else {
      var v982 = this.codons;
      var v912 = v982[i$$13];
      var v796 = v912.sequence;
      var v637 = v796.charAt(0);
      var v366 = v637 == "a";
      if (v366) {
        var v361 = this.baseFreqPosOne;
        var v797 = this.baseFreqPosOne;
        var v638 = v797[1];
        var v913 = this.codons;
        var v798 = v913[i$$13];
        var v639 = v798.fraction;
        v361[1] = v638 + v639;
      } else {
        var v983 = this.codons;
        var v914 = v983[i$$13];
        var v799 = v914.sequence;
        var v640 = v799.charAt(0);
        var v365 = v640 == "t";
        if (v365) {
          var v362 = this.baseFreqPosOne;
          var v800 = this.baseFreqPosOne;
          var v641 = v800[2];
          var v915 = this.codons;
          var v801 = v915[i$$13];
          var v642 = v801.fraction;
          v362[2] = v641 + v642;
        } else {
          var v984 = this.codons;
          var v916 = v984[i$$13];
          var v802 = v916.sequence;
          var v643 = v802.charAt(0);
          var v364 = v643 == "c";
          if (v364) {
            var v363 = this.baseFreqPosOne;
            var v803 = this.baseFreqPosOne;
            var v644 = v803[3];
            var v917 = this.codons;
            var v804 = v917[i$$13];
            var v645 = v804.fraction;
            v363[3] = v644 + v645;
          }
        }
      }
    }
    var v985 = this.codons;
    var v918 = v985[i$$13];
    var v805 = v918.sequence;
    var v646 = v805.charAt(1);
    var v375 = v646 == "g";
    if (v375) {
      var v368 = this.baseFreqPosTwo;
      var v806 = this.baseFreqPosTwo;
      var v647 = v806[0];
      var v919 = this.codons;
      var v807 = v919[i$$13];
      var v648 = v807.fraction;
      v368[0] = v647 + v648;
    } else {
      var v986 = this.codons;
      var v920 = v986[i$$13];
      var v808 = v920.sequence;
      var v649 = v808.charAt(1);
      var v374 = v649 == "a";
      if (v374) {
        var v369 = this.baseFreqPosTwo;
        var v809 = this.baseFreqPosTwo;
        var v650 = v809[1];
        var v921 = this.codons;
        var v810 = v921[i$$13];
        var v651 = v810.fraction;
        v369[1] = v650 + v651;
      } else {
        var v987 = this.codons;
        var v922 = v987[i$$13];
        var v811 = v922.sequence;
        var v652 = v811.charAt(1);
        var v373 = v652 == "t";
        if (v373) {
          var v370 = this.baseFreqPosTwo;
          var v812 = this.baseFreqPosTwo;
          var v653 = v812[2];
          var v923 = this.codons;
          var v813 = v923[i$$13];
          var v654 = v813.fraction;
          v370[2] = v653 + v654;
        } else {
          var v988 = this.codons;
          var v924 = v988[i$$13];
          var v814 = v924.sequence;
          var v655 = v814.charAt(1);
          var v372 = v655 == "c";
          if (v372) {
            var v371 = this.baseFreqPosTwo;
            var v815 = this.baseFreqPosTwo;
            var v656 = v815[3];
            var v925 = this.codons;
            var v816 = v925[i$$13];
            var v657 = v816.fraction;
            v371[3] = v656 + v657;
          }
        }
      }
    }
    var v989 = this.codons;
    var v926 = v989[i$$13];
    var v817 = v926.sequence;
    var v658 = v817.charAt(2);
    var v383 = v658 == "g";
    if (v383) {
      var v376 = this.baseFreqPosThree;
      var v818 = this.baseFreqPosThree;
      var v659 = v818[0];
      var v927 = this.codons;
      var v819 = v927[i$$13];
      var v660 = v819.fraction;
      v376[0] = v659 + v660;
    } else {
      var v990 = this.codons;
      var v928 = v990[i$$13];
      var v820 = v928.sequence;
      var v661 = v820.charAt(2);
      var v382 = v661 == "a";
      if (v382) {
        var v377 = this.baseFreqPosThree;
        var v821 = this.baseFreqPosThree;
        var v662 = v821[1];
        var v929 = this.codons;
        var v822 = v929[i$$13];
        var v663 = v822.fraction;
        v377[1] = v662 + v663;
      } else {
        var v991 = this.codons;
        var v930 = v991[i$$13];
        var v823 = v930.sequence;
        var v664 = v823.charAt(2);
        var v381 = v664 == "t";
        if (v381) {
          var v378 = this.baseFreqPosThree;
          var v824 = this.baseFreqPosThree;
          var v665 = v824[2];
          var v931 = this.codons;
          var v825 = v931[i$$13];
          var v666 = v825.fraction;
          v378[2] = v665 + v666;
        } else {
          var v992 = this.codons;
          var v932 = v992[i$$13];
          var v826 = v932.sequence;
          var v667 = v826.charAt(2);
          var v380 = v667 == "c";
          if (v380) {
            var v379 = this.baseFreqPosThree;
            var v827 = this.baseFreqPosThree;
            var v668 = v827[3];
            var v933 = this.codons;
            var v828 = v933[i$$13];
            var v669 = v828.fraction;
            v379[3] = v668 + v669;
          }
        }
      }
    }
    i$$13++;
    var v829 = this.codons;
    var v670 = v829.length;
    v384 = i$$13 < v670;
  }
  return true;
}
function fixFraction() {
  var perThouTotal = 0;
  var i$$14 = 0;
  var v830 = this.codons;
  var v671 = v830.length;
  var v386 = i$$14 < v671;
  for (;v386;) {
    var v831 = this.codons;
    var v672 = v831[i$$14];
    var v385 = v672.perThou;
    perThouTotal = perThouTotal + v385;
    i$$14++;
    var v832 = this.codons;
    var v673 = v832.length;
    v386 = i$$14 < v673;
  }
  var v387 = perThouTotal == 0;
  if (v387) {
    return false;
  }
  i$$14 = 0;
  var v833 = this.codons;
  var v674 = v833.length;
  var v389 = i$$14 < v674;
  for (;v389;) {
    var v675 = this.codons;
    var v388 = v675[i$$14];
    var v934 = this.codons;
    var v834 = v934[i$$14];
    var v676 = v834.perThou;
    v388.fraction = v676 / perThouTotal;
    i$$14++;
    var v835 = this.codons;
    var v677 = v835.length;
    v389 = i$$14 < v677;
  }
  return true;
}
function setMostCommonCodon() {
  var highestFraction = 0;
  var highestCodon = "nnn";
  var i$$15 = 0;
  var v836 = this.codons;
  var v678 = v836.length;
  var v393 = i$$15 < v678;
  for (;v393;) {
    var v935 = this.codons;
    var v837 = v935[i$$15];
    var v679 = v837.fraction;
    var v392 = v679 > highestFraction;
    if (v392) {
      var v680 = this.codons;
      var v390 = v680[i$$15];
      highestFraction = v390.fraction;
      var v681 = this.codons;
      var v391 = v681[i$$15];
      highestCodon = v391.sequence;
    }
    i$$15++;
    var v838 = this.codons;
    var v682 = v838.length;
    v393 = i$$15 < v682;
  }
  this.mostCommonCodon = highestCodon;
  return;
}
function setDegenCodon() {
  var v839 = this.baseFreqPosOne;
  var v683 = getConsensusBase(v839);
  var v840 = this.baseFreqPosTwo;
  var v684 = getConsensusBase(v840);
  var v394 = v683 + v684;
  var v685 = this.baseFreqPosThree;
  var v395 = getConsensusBase(v685);
  this.degenCodon = v394 + v395;
  return;
}
function getConsensusBase(baseFreq) {
  var g;
  var a;
  var t;
  var c;
  var v686 = baseFreq[0];
  var v396 = v686 > 0;
  if (v396) {
    g = true;
  }
  var v687 = baseFreq[1];
  var v397 = v687 > 0;
  if (v397) {
    a = true;
  }
  var v688 = baseFreq[2];
  var v398 = v688 > 0;
  if (v398) {
    t = true;
  }
  var v689 = baseFreq[3];
  var v399 = v689 > 0;
  if (v399) {
    c = true;
  }
  var v936 = !g;
  if (v936) {
    v936 = !a;
  }
  var v841 = v936;
  if (v841) {
    v841 = !c;
  }
  var v690 = v841;
  if (v690) {
    v690 = !t;
  }
  var v400 = v690;
  if (v400) {
    return "n";
  }
  var v842 = g && a;
  if (v842) {
    v842 = c;
  }
  var v691 = v842;
  if (v691) {
    v691 = t;
  }
  var v410 = v691;
  if (v410) {
    return "n";
  } else {
    var v692 = a && c;
    if (v692) {
      v692 = t;
    }
    var v409 = v692;
    if (v409) {
      return "h";
    } else {
      var v693 = a && g;
      if (v693) {
        v693 = t;
      }
      var v408 = v693;
      if (v408) {
        return "d";
      } else {
        var v694 = c && g;
        if (v694) {
          v694 = t;
        }
        var v407 = v694;
        if (v407) {
          return "b";
        } else {
          var v406 = a && c;
          if (v406) {
            return "m";
          } else {
            var v405 = g && t;
            if (v405) {
              return "k";
            } else {
              var v404 = a && t;
              if (v404) {
                return "w";
              } else {
                var v403 = g && c;
                if (v403) {
                  return "s";
                } else {
                  var v402 = c && t;
                  if (v402) {
                    return "y";
                  } else {
                    var v401 = a && g;
                    if (v401) {
                      return "r";
                    } else {
                      if (t) {
                        return "t";
                      } else {
                        if (g) {
                          return "g";
                        } else {
                          if (c) {
                            return "c";
                          } else {
                            if (a) {
                              return "a";
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return true;
}
function AminoAcid() {
  var v1142 = new Array;
  this.codons = v1142;
  var v1143 = new Array(0, 0, 0, 0);
  this.baseFreqPosOne = v1143;
  var v1144 = new Array(0, 0, 0, 0);
  this.baseFreqPosTwo = v1144;
  var v1145 = new Array(0, 0, 0, 0);
  this.baseFreqPosThree = v1145;
  return;
}
function Codon(sequence$$18, number, perThou, fraction) {
  var v1146 = sequence$$18.toLowerCase();
  this.sequence = v1146;
  this.number = number;
  this.perThou = perThou;
  this.fraction = fraction;
  return;
}
new AminoAcid;
var v411 = AminoAcid.prototype;
v411.fillRuler = fillRuler;
var v412 = AminoAcid.prototype;
v412.getRuler = getRuler;
var v413 = AminoAcid.prototype;
v413.addCodon = addCodon;
var v414 = AminoAcid.prototype;
v414.determineBaseFreq = determineBaseFreq;
var v415 = AminoAcid.prototype;
v415.fixFraction = fixFraction;
var v416 = AminoAcid.prototype;
v416.setMostCommonCodon = setMostCommonCodon;
var v417 = AminoAcid.prototype;
v417.setDegenCodon = setDegenCodon;
var v418 = AminoAcid.prototype;
v418.getConsensusBase = getConsensusBase;
document.onload = v5;
var v419 = document.getElementById("submitbtn");
v419.onclick = v6;
var v420 = document.getElementById("clearbtn");
v420.onclick = v7

}

JAM.stopProfile('load');
