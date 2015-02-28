
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
function v13() {
  var v867 = document.forms;
  var v729 = v867[0];
  var v442 = v729.elements;
  var v14 = v442[0];
  v14.value = " ";
  return;
}
function v12() {
  try {
    restMap();
  } catch (e$$5) {
    var v15 = "The following error was encountered: " + e$$5;
    alert(v15);
  }
  return;
}
function v11() {
  var v443 = document.main_form;
  var v16 = v443.main_submit;
  v16.focus();
  return;
}
function v10(start$$10, stop$$6) {
  function v9(str$$11, p1$$5, offset$$13, s$$7) {
    return p1$$5.replace(/./g, " ");
  }
  function v8(str$$10, p1$$4, offset$$12, s$$6) {
    return p1$$4.replace(/./g, " ");
  }
  var v17 = outputWindow.document;
  var v444 = this.positionLabel;
  var v18 = rightNum(v444, "", 8, "");
  v17.write(v18);
  var v445 = this.characters;
  var v19 = v445.slice(start$$10, stop$$6);
  var text$$15 = v19.join("");
  text$$15 = text$$15.replace(/^(\d+)/g, v8);
  text$$15 = text$$15.replace(/(\d+)$/g, v9);
  var v20 = outputWindow.document;
  var v21 = text$$15 + "\n";
  v20.write(v21);
  var v22 = this.positionLabel;
  var v23 = stop$$6 - start$$10;
  this.positionLabel = v22 + v23;
  return;
}
function v7(start$$9, stop$$5) {
  var v24 = outputWindow.document;
  var v446 = this.positionLabel;
  var v25 = rightNum(v446, "", 8, "");
  v24.write(v25);
  var v26 = outputWindow.document;
  var v868 = this.characters;
  var v730 = v868.slice(start$$9, stop$$5);
  var v447 = v730.join("");
  var v27 = v447 + "\n";
  v26.write(v27);
  var v28 = this.positionLabel;
  var v29 = stop$$5 - start$$9;
  this.positionLabel = v28 + v29;
  return;
}
function v6(start$$8, stop$$4) {
  var v731 = this.characters;
  var v448 = v731.slice(start$$8, stop$$4);
  var v30 = v448.join("");
  var textToWrite = v30 + "\n";
  var v449 = textToWrite.search(/\w/);
  var v36 = v449 != -1;
  if (v36) {
    var v31 = outputWindow.document;
    var v450 = this.positionLabel;
    var v32 = rightNum(v450, "", 8, "");
    v31.write(v32);
    var v33 = this.positionLabel;
    var v451 = textToWrite.match(/[A-Z]/g);
    var v34 = v451.length;
    this.positionLabel = v33 + v34;
    var v35 = outputWindow.document;
    v35.write(textToWrite);
  }
  return;
}
function v5(start$$7, stop$$3) {
  var v37 = outputWindow.document;
  var v452 = this.positionLabel;
  var v38 = rightNum(v452, "", 8, "");
  v37.write(v38);
  var v39 = outputWindow.document;
  var v869 = this.characters;
  var v732 = v869.slice(start$$7, stop$$3);
  var v453 = v732.join("");
  var v40 = v453 + "\n";
  v39.write(v40);
  var v41 = this.positionLabel;
  var v454 = stop$$3 - start$$7;
  var v42 = v454 / 3;
  this.positionLabel = v41 + v42;
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
  var v43 = arrayOfSequences[0];
  var lengthOfAlign = v43.length;
  var v455 = arrayOfSequences.length;
  var v44 = v455 < 2;
  if (v44) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v456 = arrayOfTitles.length;
  var v46 = i$$1 < v456;
  for (;v46;) {
    var v964 = arrayOfTitles[i$$1];
    var v870 = v964.search(/\S/);
    var v733 = v870 == -1;
    var v872 = !v733;
    if (v872) {
      var v965 = arrayOfSequences[i$$1];
      var v871 = v965.search(/\S/);
      v733 = v871 == -1;
    }
    var v457 = v733;
    var v735 = !v457;
    if (v735) {
      var v873 = arrayOfSequences[i$$1];
      var v734 = v873.length;
      v457 = v734 != lengthOfAlign;
    }
    var v45 = v457;
    if (v45) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v458 = arrayOfTitles.length;
    v46 = i$$1 < v458;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v1034 = codonTable.search(/AmAcid/);
  var v966 = v1034 == -1;
  var v1036 = !v966;
  if (v1036) {
    var v1035 = codonTable.search(/Codon/);
    v966 = v1035 == -1;
  }
  var v874 = v966;
  var v968 = !v874;
  if (v968) {
    var v967 = codonTable.search(/Number/);
    v874 = v967 == -1;
  }
  var v736 = v874;
  var v876 = !v736;
  if (v876) {
    var v875 = codonTable.search(/\/1000/);
    v736 = v875 == -1;
  }
  var v459 = v736;
  var v738 = !v459;
  if (v738) {
    var v737 = codonTable.search(/Fraction\s*\.\./);
    v459 = v737 == -1;
  }
  var v47 = v459;
  if (v47) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v739 = formElement.value;
  var v460 = v739.search(/\S/);
  var v48 = v460 == -1;
  if (v48) {
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
  var v461 = arrayOfPatterns.length;
  var v51 = z$$2 < v461;
  for (;v51;) {
    var v740 = arrayOfPatterns[z$$2];
    var v462 = v740.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v49 = v462 == -1;
    if (v49) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v741 = arrayOfPatterns[z$$2];
    var v463 = moreExpressionCheck(v741);
    var v50 = v463 == false;
    if (v50) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v464 = arrayOfPatterns.length;
    v51 = z$$2 < v464;
  }
  var v52 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v52);
  var v53 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v53);
  var j = 0;
  var v465 = arrayOfPatterns.length;
  var v57 = j < v465;
  for (;v57;) {
    var v742 = arrayOfPatterns[j];
    var v466 = v742.match(/\/.+\//);
    var v54 = v466 + "gi";
    var v1507 = eval(v54);
    geneticCodeMatchExp[j] = v1507;
    var v467 = arrayOfPatterns[j];
    var v55 = v467.match(/=[a-zA-Z\*]/);
    var v1508 = v55.toString();
    geneticCodeMatchResult[j] = v1508;
    var v56 = geneticCodeMatchResult[j];
    var v1509 = v56.replace(/=/g, "");
    geneticCodeMatchResult[j] = v1509;
    j++;
    var v468 = arrayOfPatterns.length;
    v57 = j < v468;
  }
  var i$$2 = 0;
  var v743 = testSequence.length;
  var v469 = v743 - 3;
  var v64 = i$$2 <= v469;
  for (;v64;) {
    var v58 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v58);
    j = 0;
    var v470 = geneticCodeMatchExp.length;
    var v62 = j < v470;
    for (;v62;) {
      var v744 = geneticCodeMatchExp[j];
      var v471 = codon.search(v744);
      var v61 = v471 != -1;
      if (v61) {
        var v60 = oneMatch == true;
        if (v60) {
          var v472 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v59 = v472 + ".";
          alert(v59);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v473 = geneticCodeMatchExp.length;
      v62 = j < v473;
    }
    var v63 = oneMatch == false;
    if (v63) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v745 = testSequence.length;
    var v474 = v745 - 3;
    v64 = i$$2 <= v474;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v475 = arrayOfPatterns$$1.length;
  var v66 = z$$3 < v475;
  for (;v66;) {
    var v746 = arrayOfPatterns$$1[z$$3];
    var v476 = v746.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v65 = v476 != -1;
    if (v65) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v477 = arrayOfPatterns$$1.length;
    v66 = z$$3 < v477;
  }
  var i$$3 = 0;
  var v478 = arrayOfPatterns$$1.length;
  var v70 = i$$3 < v478;
  for (;v70;) {
    var v747 = arrayOfPatterns$$1[i$$3];
    var v479 = "[" + v747;
    var v67 = v479 + "]";
    var re = new RegExp(v67, "gi");
    var j$$1 = i$$3 + 1;
    var v480 = arrayOfPatterns$$1.length;
    var v69 = j$$1 < v480;
    for (;v69;) {
      var v748 = arrayOfPatterns$$1[j$$1];
      var v481 = v748.search(re);
      var v68 = v481 != -1;
      if (v68) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v482 = arrayOfPatterns$$1.length;
      v69 = j$$1 < v482;
    }
    i$$3++;
    var v483 = arrayOfPatterns$$1.length;
    v70 = i$$3 < v483;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v484 = arrayOfPatterns$$2.length;
  var v73 = z$$4 < v484;
  for (;v73;) {
    var v749 = arrayOfPatterns$$2[z$$4];
    var v485 = v749.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v71 = v485 == -1;
    if (v71) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v750 = arrayOfPatterns$$2[z$$4];
    var v486 = moreExpressionCheck(v750);
    var v72 = v486 == false;
    if (v72) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v487 = arrayOfPatterns$$2.length;
    v73 = z$$4 < v487;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v877 = getSequenceFromFasta(text$$7);
  var v751 = v877.replace(/[^A-Za-z]/g, "");
  var v488 = v751.length;
  var v75 = v488 > maxInput;
  if (v75) {
    var v489 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v74 = v489 + " characters.";
    alert(v74);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v490 = text$$8.length;
  var v77 = v490 > maxInput$$1;
  if (v77) {
    var v491 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v76 = v491 + " characters.";
    alert(v76);
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
  var v78 = outputWindow.document;
  v78.write("</form>");
  return true;
}
function closePre() {
  var v79 = outputWindow.document;
  v79.write("</div>");
  var v80 = outputWindow.document;
  v80.write("</pre>\n");
  return;
}
function closeTextArea() {
  var v81 = outputWindow.document;
  v81.write("</textarea>");
  return true;
}
function closeWindow() {
  var v82 = outputWindow.document;
  v82.write("</body>\n</html>\n");
  outputWindow.status = "Done.";
  var v83 = outputWindow.document;
  v83.close();
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
  var v492 = alignArray.length;
  var v84 = v492 < 3;
  if (v84) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v493 = alignArray.length;
  var v86 = i$$4 < v493;
  for (;v86;) {
    var v752 = alignArray[i$$4];
    var v494 = v752.search(/[^\s]+\s/);
    var v85 = v494 == -1;
    if (v85) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v495 = alignArray.length;
    v86 = i$$4 < v495;
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
  var v496 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v89 = v496 != -1;
  if (v89) {
    var v88 = matchArray = re$$1.exec(sequenceData);
    for (;v88;) {
      var v87 = matchArray[0];
      arrayOfFasta.push(v87);
      v88 = matchArray = re$$1.exec(sequenceData);
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v497 = sequence$$2.length;
  var v90 = "&gt;results for " + v497;
  var stringToReturn = v90 + " residue sequence ";
  var v498 = fastaSequenceTitle.search(/[^\s]/);
  var v92 = v498 != -1;
  if (v92) {
    var v499 = stringToReturn + '"';
    var v91 = v499 + fastaSequenceTitle;
    stringToReturn = v91 + '"';
  }
  var v500 = stringToReturn + ' starting "';
  var v501 = sequence$$2.substring(0, 10);
  var v93 = v500 + v501;
  stringToReturn = v93 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v502 = sequenceOne.length;
  var v94 = "Search results for " + v502;
  var stringToReturn$$1 = v94 + " residue sequence ";
  var v503 = fastaSequenceTitleOne.search(/[^\s]/);
  var v96 = v503 != -1;
  if (v96) {
    var v504 = stringToReturn$$1 + '"';
    var v95 = v504 + fastaSequenceTitleOne;
    stringToReturn$$1 = v95 + '"';
  }
  var v505 = stringToReturn$$1 + ' starting "';
  var v506 = sequenceOne.substring(0, 10);
  var v97 = v505 + v506;
  stringToReturn$$1 = v97 + '"\n';
  var v507 = stringToReturn$$1 + "and ";
  var v508 = sequenceTwo.length;
  var v98 = v507 + v508;
  stringToReturn$$1 = v98 + " residue sequence ";
  var v509 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v100 = v509 != -1;
  if (v100) {
    var v510 = stringToReturn$$1 + '"';
    var v99 = v510 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v99 + '"';
  }
  var v511 = stringToReturn$$1 + ' starting "';
  var v512 = sequenceTwo.substring(0, 10);
  var v101 = v511 + v512;
  stringToReturn$$1 = v101 + '"';
  var v102 = '<div class="info">' + stringToReturn$$1;
  return v102 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v103 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v103);
  var j$$2 = 0;
  var v513 = arrayOfPatterns$$3.length;
  var v105 = j$$2 < v513;
  for (;v105;) {
    var v753 = arrayOfPatterns$$3[j$$2];
    var v514 = v753.match(/\/.+\//);
    var v104 = v514 + "gi";
    var v1510 = eval(v104);
    geneticCodeMatchExp$$1[j$$2] = v1510;
    j$$2++;
    var v515 = arrayOfPatterns$$3.length;
    v105 = j$$2 < v515;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v106 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v106);
  var j$$3 = 0;
  var v516 = arrayOfPatterns$$4.length;
  var v109 = j$$3 < v516;
  for (;v109;) {
    var v517 = arrayOfPatterns$$4[j$$3];
    var v107 = v517.match(/=[a-zA-Z\*]/);
    var v1511 = v107.toString();
    geneticCodeMatchResult$$1[j$$3] = v1511;
    var v108 = geneticCodeMatchResult$$1[j$$3];
    var v1512 = v108.replace(/=/g, "");
    geneticCodeMatchResult$$1[j$$3] = v1512;
    j$$3++;
    var v518 = arrayOfPatterns$$4.length;
    v109 = j$$3 < v518;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v519 = sequence$$3.length;
  var v110 = "Results for " + v519;
  var stringToReturn$$2 = v110 + " residue sequence ";
  var v520 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v112 = v520 != -1;
  if (v112) {
    var v521 = stringToReturn$$2 + '"';
    var v111 = v521 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v111 + '"';
  }
  var v522 = stringToReturn$$2 + ' starting "';
  var v523 = sequence$$3.substring(0, 10);
  var v113 = v522 + v523;
  stringToReturn$$2 = v113 + '"';
  var v114 = '<div class="info">' + stringToReturn$$2;
  return v114 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v754 = "Results for " + topology;
  var v524 = v754 + " ";
  var v525 = sequence$$4.length;
  var v115 = v524 + v525;
  var stringToReturn$$3 = v115 + " residue sequence ";
  var v526 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v117 = v526 != -1;
  if (v117) {
    var v527 = stringToReturn$$3 + '"';
    var v116 = v527 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v116 + '"';
  }
  var v528 = stringToReturn$$3 + ' starting "';
  var v529 = sequence$$4.substring(0, 10);
  var v118 = v528 + v529;
  stringToReturn$$3 = v118 + '"';
  var v119 = '<div class="info">' + stringToReturn$$3;
  return v119 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v530 = sequenceOne$$1.length;
  var v120 = "Alignment results for " + v530;
  var stringToReturn$$4 = v120 + " residue sequence ";
  var v531 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v122 = v531 != -1;
  if (v122) {
    var v532 = stringToReturn$$4 + '"';
    var v121 = v532 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v121 + '"';
  }
  var v533 = stringToReturn$$4 + ' starting "';
  var v534 = sequenceOne$$1.substring(0, 10);
  var v123 = v533 + v534;
  stringToReturn$$4 = v123 + '"\n';
  var v535 = stringToReturn$$4 + "and ";
  var v536 = sequenceTwo$$1.length;
  var v124 = v535 + v536;
  stringToReturn$$4 = v124 + " residue sequence ";
  var v537 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v126 = v537 != -1;
  if (v126) {
    var v538 = stringToReturn$$4 + '"';
    var v125 = v538 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v125 + '"';
  }
  var v539 = stringToReturn$$4 + ' starting "';
  var v540 = sequenceTwo$$1.substring(0, 10);
  var v127 = v539 + v540;
  stringToReturn$$4 = v127 + '"';
  var v128 = '<div class="info">' + stringToReturn$$4;
  return v128 + "</div>\n";
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v130 = j$$4 < lengthOut;
  for (;v130;) {
    var v541 = Math.random();
    var v542 = components.length;
    var v129 = v541 * v542;
    tempNum = Math.floor(v129);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4++;
    v130 = j$$4 < lengthOut;
  }
  return sequenceArray.join("");
}
function getSequenceFromFasta(sequenceRecord) {
  var v543 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v131 = v543 != -1;
  if (v131) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "");
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v544 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v133 = v544 != -1;
  if (v133) {
    var v132 = sequenceRecord$$1.match(/\>[^\f\n\r]+[\f\n\r]/, "");
    fastaTitle = v132.toString();
    fastaTitle = fastaTitle.replace(/\>|[\f\n\r]/g, "");
    fastaTitle = fastaTitle.replace(/\s{2,}/g, " ");
    fastaTitle = fastaTitle.replace(/[\<\>]/gi, "");
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  var v1249 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v1224 = v1249 != -1;
  var v1251 = !v1224;
  if (v1251) {
    var v1250 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    v1224 = v1250 != -1;
  }
  var v1197 = v1224;
  var v1226 = !v1197;
  if (v1226) {
    var v1225 = expressionToCheck.search(/\[\]/);
    v1197 = v1225 != -1;
  }
  var v1170 = v1197;
  var v1199 = !v1170;
  if (v1199) {
    var v1198 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
    v1170 = v1198 != -1;
  }
  var v1134 = v1170;
  var v1172 = !v1134;
  if (v1172) {
    var v1171 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
    v1134 = v1171 != -1;
  }
  var v1086 = v1134;
  var v1136 = !v1086;
  if (v1136) {
    var v1135 = expressionToCheck.search(/\|\|/);
    v1086 = v1135 != -1;
  }
  var v1037 = v1086;
  var v1088 = !v1037;
  if (v1088) {
    var v1087 = expressionToCheck.search(/\/\|/);
    v1037 = v1087 != -1;
  }
  var v969 = v1037;
  var v1039 = !v969;
  if (v1039) {
    var v1038 = expressionToCheck.search(/\|\//);
    v969 = v1038 != -1;
  }
  var v878 = v969;
  var v971 = !v878;
  if (v971) {
    var v970 = expressionToCheck.search(/\[.\]/);
    v878 = v970 != -1;
  }
  var v755 = v878;
  var v880 = !v755;
  if (v880) {
    var v879 = expressionToCheck.search(/\</);
    v755 = v879 != -1;
  }
  var v545 = v755;
  var v757 = !v545;
  if (v757) {
    var v756 = expressionToCheck.search(/\>/);
    v545 = v756 != -1;
  }
  var v134 = v545;
  if (v134) {
    return false;
  }
  return true;
}
function openForm() {
  var v135 = outputWindow.document;
  v135.write('<form action="">\n');
  return true;
}
function openPre() {
  var v136 = outputWindow.document;
  v136.write("<pre>");
  var v137 = outputWindow.document;
  v137.write('<div class="pre">');
  return;
}
function openTextArea() {
  var v138 = outputWindow.document;
  v138.write('<br /><textarea rows="6" cols="61">\n');
  return true;
}
function openWindow(title$$5) {
  _openWindow(title$$5, true);
  return;
}
function _openWindow(title$$6, isColor) {
  outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  outputWindow.focus();
  var v139 = outputWindow.document;
  var v881 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v758 = v881 + "<head>\n";
  var v546 = v758 + "<title>Sequence Manipulation Suite</title>\n";
  var v140 = v546 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v139.write(v140);
  if (isColor) {
    var v141 = outputWindow.document;
    var v1318 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1296 = v1318 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1274 = v1296 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1252 = v1274 + "div.info {font-weight: bold}\n";
    var v1227 = v1252 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1200 = v1227 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v1173 = v1200 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v1137 = v1173 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1089 = v1137 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v1040 = v1089 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v972 = v1040 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v882 = v972 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v759 = v882 + "td.many {color: #000000}\n";
    var v547 = v759 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v142 = v547 + "</style>\n";
    v141.write(v142);
  } else {
    var v143 = outputWindow.document;
    var v1340 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1319 = v1340 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1297 = v1319 + "div.title {display: none}\n";
    var v1275 = v1297 + "div.info {font-weight: bold}\n";
    var v1253 = v1275 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1228 = v1253 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1201 = v1228 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v1174 = v1201 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1138 = v1174 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1090 = v1138 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1041 = v1090 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v973 = v1041 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v883 = v973 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v760 = v883 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v548 = v760 + "img {display: none}\n";
    var v144 = v548 + "</style>\n";
    v143.write(v144);
  }
  var v145 = outputWindow.document;
  var v884 = "</head>\n" + '<body class="main">\n';
  var v761 = v884 + '<div class="title">';
  var v549 = v761 + title$$6;
  var v146 = v549 + " results</div>\n";
  v145.write(v146);
  outputWindow.status = "Please Wait.";
  return;
}
function openWindowAlign(title$$7) {
  _openWindowAlign(title$$7);
  return;
}
function _openWindowAlign(title$$8) {
  var isBackground = true;
  outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  outputWindow.focus();
  var v147 = outputWindow.document;
  var v885 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v762 = v885 + "<head>\n";
  var v550 = v762 + "<title>Sequence Manipulation Suite</title>\n";
  var v148 = v550 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  v147.write(v148);
  if (isBackground) {
    var v149 = outputWindow.document;
    var v1320 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1298 = v1320 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1276 = v1298 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1254 = v1276 + "div.info {font-weight: bold}\n";
    var v1229 = v1254 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v1202 = v1229 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v1175 = v1202 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v1139 = v1175 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v1091 = v1139 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v1042 = v1091 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v974 = v1042 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v886 = v974 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v763 = v886 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v551 = v763 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v150 = v551 + "</style>\n";
    v149.write(v150);
  } else {
    var v151 = outputWindow.document;
    var v1360 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1341 = v1360 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1321 = v1341 + "div.title {display: none}\n";
    var v1299 = v1321 + "div.info {font-weight: bold}\n";
    var v1277 = v1299 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1255 = v1277 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v1230 = v1255 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v1203 = v1230 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v1176 = v1203 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v1140 = v1176 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v1092 = v1140 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v1043 = v1092 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v975 = v1043 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v887 = v975 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v764 = v887 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v552 = v764 + "img {display: none}\n";
    var v152 = v552 + "</style>\n";
    v151.write(v152);
  }
  var v153 = outputWindow.document;
  var v888 = "</head>\n" + '<body class="main">\n';
  var v765 = v888 + '<div class="title">';
  var v553 = v765 + title$$8;
  var v154 = v553 + " results</div>\n";
  v153.write(v154);
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
  var v554 = dnaSequence$$1.search(/./);
  var v155 = v554 != -1;
  if (v155) {
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
  var v156 = j$$5 < lengthOfColumn;
  for (;v156;) {
    tempString = tempString + " ";
    j$$5++;
    v156 = j$$5 < lengthOfColumn;
  }
  var v157 = tempString + theNumber;
  theNumber = v157 + " ";
  var v158 = sequenceToAppend + theNumber;
  sequenceToAppend = v158 + tabIn;
  return sequenceToAppend;
}
function testScript() {
  function v1(str$$7, p1$$1, offset$$9, s$$3) {
    return p1$$1 + "X";
  }
  var testArray = new Array;
  var testString = "1234567890";
  testArray.push(testString);
  var v555 = testArray[0];
  var v159 = v555 != testString;
  if (v159) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v556 = testString.search(re$$2);
  var v160 = v556 == -1;
  if (v160) {
    alert("Regular expression 'm' flag not supported. See browser compatibility page.");
    return false;
  }
  var caughtException = false;
  try {
    re$$2 = eval("Exception handling not supported. Check browser compatibility page.");
  } catch (e$$4) {
    caughtException = true;
  }
  var v161 = !caughtException;
  if (v161) {
    alert("Exception handling not supported. See browser compatibility page.");
  }
  testString = "123";
  testString = testString.replace(/(\d)/g, v1);
  var v162 = testString != "1X2X3X";
  if (v162) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false;
  }
  var testNum = 2489.8237;
  var v557 = testNum.toFixed(3);
  var v163 = v557 != 2489.824;
  if (v163) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v558 = testNum.toPrecision(5);
  var v164 = v558 != 2489.8;
  if (v164) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v559 = theNumber$$1.search(/\d/);
  var v165 = v559 == -1;
  if (v165) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v976 = emblFile.search(/ID/);
  var v889 = v976 == -1;
  var v978 = !v889;
  if (v978) {
    var v977 = emblFile.search(/AC/);
    v889 = v977 == -1;
  }
  var v766 = v889;
  var v891 = !v766;
  if (v891) {
    var v890 = emblFile.search(/DE/);
    v766 = v890 == -1;
  }
  var v560 = v766;
  var v768 = !v560;
  if (v768) {
    var v767 = emblFile.search(/SQ/);
    v560 = v767 == -1;
  }
  var v166 = v560;
  if (v166) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v561 = theNumber$$2.search(/\d/);
  var v167 = v561 == -1;
  if (v167) {
    alert("Please enter a number.");
    return false;
  }
  var v169 = theNumber$$2 > maxInput$$2;
  if (v169) {
    var v562 = "Please enter a number less than or equal to " + maxInput$$2;
    var v168 = v562 + ".";
    alert(v168);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v563 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v170 = v563 != -1;
  if (v170) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v564 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v171 = v564 != -1;
  if (v171) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v979 = genBankFile.search(/LOCUS/);
  var v892 = v979 == -1;
  var v981 = !v892;
  if (v981) {
    var v980 = genBankFile.search(/DEFINITION/);
    v892 = v980 == -1;
  }
  var v769 = v892;
  var v894 = !v769;
  if (v894) {
    var v893 = genBankFile.search(/ACCESSION/);
    v769 = v893 == -1;
  }
  var v565 = v769;
  var v771 = !v565;
  if (v771) {
    var v770 = genBankFile.search(/ORIGIN/);
    v565 = v770 == -1;
  }
  var v172 = v565;
  if (v172) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v982 = genBankFile$$1.search(/LOCUS/);
  var v895 = v982 == -1;
  var v984 = !v895;
  if (v984) {
    var v983 = genBankFile$$1.search(/DEFINITION/);
    v895 = v983 == -1;
  }
  var v772 = v895;
  var v897 = !v772;
  if (v897) {
    var v896 = genBankFile$$1.search(/ACCESSION/);
    v772 = v896 == -1;
  }
  var v566 = v772;
  var v774 = !v566;
  if (v774) {
    var v773 = genBankFile$$1.search(/ORIGIN/);
    v566 = v773 == -1;
  }
  var v173 = v566;
  if (v173) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v567 = genBankFile$$1.search(/FEATURES {13}/);
  var v174 = v567 == -1;
  if (v174) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v985 = emblFile$$1.search(/ID/);
  var v898 = v985 == -1;
  var v987 = !v898;
  if (v987) {
    var v986 = emblFile$$1.search(/AC/);
    v898 = v986 == -1;
  }
  var v775 = v898;
  var v900 = !v775;
  if (v900) {
    var v899 = emblFile$$1.search(/DE/);
    v775 = v899 == -1;
  }
  var v568 = v775;
  var v777 = !v568;
  if (v777) {
    var v776 = emblFile$$1.search(/SQ/);
    v568 = v776 == -1;
  }
  var v175 = v568;
  if (v175) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v569 = emblFile$$1.search(/^FT/m);
  var v176 = v569 == -1;
  if (v176) {
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
  var v183 = i$$5 < stopBase;
  for (;v183;) {
    var v177 = i$$5 + 1;
    lineOfText = rightNum(v177, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v570 = basePerLine / groupSize;
    var v180 = j$$6 <= v570;
    for (;v180;) {
      var v179 = k < groupSize;
      for (;v179;) {
        var v571 = k + i$$5;
        var v178 = text$$10.charAt(v571);
        lineOfText = lineOfText + v178;
        k = k + 1;
        v179 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v572 = basePerLine / groupSize;
      v180 = j$$6 <= v572;
    }
    var v181 = outputWindow.document;
    var v182 = lineOfText + "\n";
    v181.write(v182);
    lineOfText = "";
    v183 = i$$5 < stopBase;
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
    var v573 = adjustment < 0;
    if (v573) {
      v573 = adjusted >= 0;
    }
    var v184 = v573;
    if (v184) {
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
  var v215 = i$$6 < stopBase$$2;
  for (;v215;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v574 = basePerLine$$2 / groupSize$$2;
    var v191 = j$$7 <= v574;
    for (;v191;) {
      var v187 = k$$1 < groupSize$$2;
      for (;v187;) {
        var v575 = i$$6 + k$$1;
        var v185 = v575 >= stopBase$$2;
        if (v185) {
          break;
        }
        var v576 = k$$1 + i$$6;
        var v186 = text$$12.charAt(v576);
        lineOfText$$1 = lineOfText$$1 + v186;
        k$$1 = k$$1 + 1;
        v187 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v189 = numberPosition$$1 == "above";
      if (v189) {
        var v577 = adjustNumbering(i$$6, numberingAdjustment);
        var v188 = rightNum(v577, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v188;
      }
      var v190 = i$$6 >= stopBase$$2;
      if (v190) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v578 = basePerLine$$2 / groupSize$$2;
      v191 = j$$7 <= v578;
    }
    var v214 = numberPosition$$1 == "left";
    if (v214) {
      var v192 = outputWindow.document;
      var v901 = adjustNumbering(lineNum, numberingAdjustment);
      var v778 = rightNum(v901, "", 8, tabIn$$3);
      var v579 = v778 + lineOfText$$1;
      var v193 = v579 + "\n";
      v192.write(v193);
      var v197 = strands$$1 == "two";
      if (v197) {
        var v194 = outputWindow.document;
        var v902 = adjustNumbering(lineNum, numberingAdjustment);
        var v779 = rightNum(v902, "", 8, tabIn$$3);
        var v780 = complement(lineOfText$$1);
        var v580 = v779 + v780;
        var v195 = v580 + "\n";
        v194.write(v195);
        var v196 = outputWindow.document;
        v196.write("\n");
      }
    } else {
      var v213 = numberPosition$$1 == "right";
      if (v213) {
        var v198 = outputWindow.document;
        var v781 = adjustNumbering(i$$6, numberingAdjustment);
        var v581 = lineOfText$$1 + v781;
        var v199 = v581 + "\n";
        v198.write(v199);
        var v203 = strands$$1 == "two";
        if (v203) {
          var v200 = outputWindow.document;
          var v782 = complement(lineOfText$$1);
          var v783 = adjustNumbering(i$$6, numberingAdjustment);
          var v582 = v782 + v783;
          var v201 = v582 + "\n";
          v200.write(v201);
          var v202 = outputWindow.document;
          v202.write("\n");
        }
      } else {
        var v212 = numberPosition$$1 == "above";
        if (v212) {
          var v204 = outputWindow.document;
          var v205 = aboveNum + "\n";
          v204.write(v205);
          var v206 = outputWindow.document;
          var v207 = lineOfText$$1 + "\n";
          v206.write(v207);
          var v211 = strands$$1 == "two";
          if (v211) {
            var v208 = outputWindow.document;
            var v583 = complement(lineOfText$$1);
            var v209 = v583 + "\n";
            v208.write(v209);
            var v210 = outputWindow.document;
            v210.write("\n");
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v215 = i$$6 < stopBase$$2;
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
  var v234 = i$$7 < stopBase$$3;
  for (;v234;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v584 = basePerLine$$3 / groupSize$$3;
    var v222 = j$$8 <= v584;
    for (;v222;) {
      var v218 = k$$2 < groupSize$$3;
      for (;v218;) {
        var v585 = i$$7 + k$$2;
        var v216 = v585 >= stopBase$$3;
        if (v216) {
          break;
        }
        var v586 = k$$2 + i$$7;
        var v217 = text$$13.charAt(v586);
        lineOfText$$2 = lineOfText$$2 + v217;
        k$$2 = k$$2 + 1;
        v218 = k$$2 < groupSize$$3;
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v220 = numberPosition$$2 == "above";
      if (v220) {
        var v219 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = aboveNum$$1 + v219;
      }
      var v221 = i$$7 >= stopBase$$3;
      if (v221) {
        break;
      }
      k$$2 = 0;
      j$$8++;
      var v587 = basePerLine$$3 / groupSize$$3;
      v222 = j$$8 <= v587;
    }
    var v233 = numberPosition$$2 == "left";
    if (v233) {
      var v223 = outputWindow.document;
      var v784 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v588 = v784 + lineOfText$$2;
      var v224 = v588 + "\n";
      v223.write(v224);
    } else {
      var v232 = numberPosition$$2 == "right";
      if (v232) {
        var v225 = outputWindow.document;
        var v589 = lineOfText$$2 + i$$7;
        var v226 = v589 + "\n";
        v225.write(v226);
      } else {
        var v231 = numberPosition$$2 == "above";
        if (v231) {
          var v227 = outputWindow.document;
          var v228 = aboveNum$$1 + "\n";
          v227.write(v228);
          var v229 = outputWindow.document;
          var v230 = lineOfText$$2 + "\n";
          v229.write(v230);
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v234 = i$$7 < stopBase$$3;
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
  var v903 = sequence$$13.length;
  var v785 = v903 <= firstIndexToMutate;
  var v904 = !v785;
  if (v904) {
    v785 = lastIndexToMutate < 0;
  }
  var v590 = v785;
  var v786 = !v590;
  if (v786) {
    v590 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v235 = v590;
  if (v235) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v243 = i$$8 < numMut;
  for (;v243;) {
    maxNum = sequence$$13.length;
    var v591 = Math.random();
    var v236 = v591 * maxNum;
    randNum = Math.floor(v236);
    var v592 = randNum < firstIndexToMutate;
    var v787 = !v592;
    if (v787) {
      v592 = randNum > lastIndexToMutate;
    }
    var v237 = v592;
    if (v237) {
      numMut++;
      i$$8++;
      v243 = i$$8 < numMut;
      continue;
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for (;needNewChar;) {
      var v593 = Math.random();
      var v594 = components$$1.length;
      var v238 = v593 * v594;
      componentsIndex = Math.round(v238);
      var v595 = components$$1.length;
      var v239 = componentsIndex == v595;
      if (v239) {
        componentsIndex = 0;
      }
      var v596 = components$$1[componentsIndex];
      var v240 = v596 != currentChar;
      if (v240) {
        needNewChar = false;
      }
    }
    var v597 = sequence$$13.substring(0, randNum);
    var v598 = components$$1[componentsIndex];
    var v241 = v597 + v598;
    var v599 = randNum + 1;
    var v600 = sequence$$13.length;
    var v242 = sequence$$13.substring(v599, v600);
    sequence$$13 = v241 + v242;
    i$$8++;
    v243 = i$$8 < numMut;
  }
  var v244 = outputWindow.document;
  var v245 = addReturns(sequence$$13);
  v244.write(v245);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v250 = j$$9 < lengthOut$$1;
  for (;v250;) {
    var v601 = Math.random();
    var v602 = components$$2.length;
    var v246 = v601 * v602;
    tempNum$$1 = Math.floor(v246);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v603 = sequence$$14.length;
    var v249 = v603 == 60;
    if (v249) {
      var v247 = outputWindow.document;
      var v248 = sequence$$14 + "\n";
      v247.write(v248);
      sequence$$14 = "";
    }
    j$$9++;
    v250 = j$$9 < lengthOut$$1;
  }
  var v251 = outputWindow.document;
  var v252 = sequence$$14 + "\n";
  v251.write(v252);
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
  var v256 = dnaConformation == "circular";
  if (v256) {
    var v253 = sequence$$15.substring(0, lookAhead);
    shiftValue = v253.length;
    var v905 = sequence$$15.length;
    var v788 = v905 - lookAhead;
    var v789 = sequence$$15.length;
    var v604 = sequence$$15.substring(v788, v789);
    var v254 = v604 + sequence$$15;
    var v255 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v254 + v255;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v257 = outputWindow.document;
  v257.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  var v258 = outputWindow.document;
  var v906 = '<tr><td class="title" width="200px">' + "Site:";
  var v790 = v906 + '</td><td class="title">';
  var v605 = v790 + "Positions:";
  var v259 = v605 + "</td></tr>\n";
  v258.write(v259);
  var i$$9 = 0;
  var v606 = arrayOfItems.length;
  var v275 = i$$9 < v606;
  for (;v275;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v607 = arrayOfItems[i$$9];
    var v260 = v607.match(/\/.+\//);
    matchExp = v260 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    var v907 = arrayOfItems[i$$9];
    var v791 = v907.match(/\)\D*\d+/);
    var v608 = v791.toString();
    var v261 = v608.replace(/\)\D*/, "");
    cutDistance = parseFloat(v261);
    var v267 = matchArray$$1 = matchExp.exec(sequence$$15);
    for (;v267;) {
      var v262 = matchExp.lastIndex;
      matchPosition = v262 - cutDistance;
      var v609 = matchPosition >= lowerLimit;
      if (v609) {
        v609 = matchPosition < upperLimit;
      }
      var v265 = v609;
      if (v265) {
        timesFound++;
        var v263 = tempString$$1 + ", ";
        var v610 = matchPosition - shiftValue;
        var v264 = v610 + 1;
        tempString$$1 = v263 + v264;
      }
      var v611 = matchExp.lastIndex;
      var v792 = RegExp.lastMatch;
      var v612 = v792.length;
      var v266 = v611 - v612;
      matchExp.lastIndex = v266 + 1;
      v267 = matchArray$$1 = matchExp.exec(sequence$$15);
    }
    var v613 = tempString$$1.search(/\d/);
    var v268 = v613 != -1;
    if (v268) {
      tempString$$1 = tempString$$1.replace(/none,\s*/, "");
    }
    var v272 = timesFound == 0;
    if (v272) {
      backGroundClass = "none";
    } else {
      var v271 = timesFound == 1;
      if (v271) {
        backGroundClass = "one";
      } else {
        var v270 = timesFound == 2;
        if (v270) {
          backGroundClass = "two";
        } else {
          var v269 = timesFound == 3;
          if (v269) {
            backGroundClass = "three";
          } else {
            backGroundClass = "many";
          }
        }
      }
    }
    var v273 = outputWindow.document;
    var v1141 = '<tr><td class="' + backGroundClass;
    var v1093 = v1141 + '">';
    var v1204 = arrayOfItems[i$$9];
    var v1177 = v1204.match(/\([^\(]+\)/);
    var v1142 = v1177.toString();
    var v1094 = v1142.replace(/\(|\)/g, "");
    var v1044 = v1093 + v1094;
    var v988 = v1044 + '</td><td class="';
    var v908 = v988 + backGroundClass;
    var v793 = v908 + '">';
    var v614 = v793 + tempString$$1;
    var v274 = v614 + "</td></tr>\n";
    v273.write(v274);
    timesFound = 0;
    i$$9++;
    var v615 = arrayOfItems.length;
    v275 = i$$9 < v615;
  }
  var v276 = outputWindow.document;
  v276.write("</tbody></table>\n");
  return;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v277 = outputWindow.document;
  v277.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  var v278 = outputWindow.document;
  var v1045 = '<tr><td class="title">' + "Pattern:";
  var v989 = v1045 + '</td><td class="title">';
  var v909 = v989 + "Times found:";
  var v794 = v909 + '</td><td class="title">';
  var v616 = v794 + "Percentage:";
  var v279 = v616 + "</td></tr>\n";
  v278.write(v279);
  var i$$10 = 0;
  var v617 = arrayOfItems$$1.length;
  var v288 = i$$10 < v617;
  for (;v288;) {
    var tempNumber = 0;
    var v618 = arrayOfItems$$1[i$$10];
    var v280 = v618.match(/\/[^\/]+\//);
    var matchExp$$1 = v280 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    var v619 = sequence$$16.search(matchExp$$1);
    var v282 = v619 != -1;
    if (v282) {
      var v281 = sequence$$16.match(matchExp$$1);
      tempNumber = v281.length;
    }
    var percentage = 0;
    var v795 = originalLength + 1;
    var v990 = arrayOfItems$$1[i$$10];
    var v910 = v990.match(/\d+/);
    var v796 = parseFloat(v910);
    var v620 = v795 - v796;
    var v285 = v620 > 0;
    if (v285) {
      var v283 = 100 * tempNumber;
      var v621 = originalLength + 1;
      var v911 = arrayOfItems$$1[i$$10];
      var v797 = v911.match(/\d+/);
      var v622 = parseFloat(v797);
      var v284 = v621 - v622;
      percentage = v283 / v284;
    }
    var v286 = outputWindow.document;
    var v1205 = arrayOfItems$$1[i$$10];
    var v1178 = v1205.match(/\([^\(]+\)\b/);
    var v1143 = v1178.toString();
    var v1095 = v1143.replace(/\(|\)/g, "");
    var v1046 = "<tr><td>" + v1095;
    var v991 = v1046 + "</td><td>";
    var v912 = v991 + tempNumber;
    var v798 = v912 + "</td><td>";
    var v799 = percentage.toFixed(2);
    var v623 = v798 + v799;
    var v287 = v623 + "</td></tr>\n";
    v286.write(v287);
    i$$10++;
    var v624 = arrayOfItems$$1.length;
    v288 = i$$10 < v624;
  }
  var v289 = outputWindow.document;
  v289.write("</tbody></table>\n");
  return true;
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v625 = sequence$$17.length;
  var v296 = v625 > 0;
  for (;v296;) {
    maxNum$$1 = sequence$$17.length;
    var v626 = Math.random();
    var v290 = v626 * maxNum$$1;
    randNum$$1 = Math.floor(v290);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v291 = randNum$$1 + 1;
    var v292 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v291, v292);
    sequence$$17 = tempString1 + tempString2;
    var v627 = tempSeq.length;
    var v295 = v627 == 60;
    if (v295) {
      var v293 = outputWindow.document;
      var v294 = tempSeq + "\n";
      v293.write(v294);
      tempSeq = "";
    }
    var v628 = sequence$$17.length;
    v296 = v628 > 0;
  }
  var v297 = outputWindow.document;
  var v298 = tempSeq + "\n";
  v297.write(v298);
  return true;
}
function getRestrictionSiteString() {
  var type$$25 = "standard";
  var v629 = type$$25.toLowerCase();
  var v300 = v629 == "standard";
  if (v300) {
    var v1506 = "/aggcct/ (AatI agg|cct)3," + "/gacgtc/ (AatII gacgt|c)1,";
    var v1505 = v1506 + "/tgcgca/ (Acc16I tgc|gca)3,";
    var v1504 = v1505 + "/cgcg/ (AccII cg|cg)2,";
    var v1503 = v1504 + "/tccgga/ (AccIII t|ccgga)5,";
    var v1502 = v1503 + "/aacgtt/ (AclI aa|cgtt)4,";
    var v1501 = v1502 + "/cacgtg/ (AcvI cac|gtg)3,";
    var v1500 = v1501 + "/gtac/ (AfaI gt|ac)2,";
    var v1499 = v1500 + "/agcgct/ (AfeI agc|gct)3,";
    var v1498 = v1499 + "/cttaag/ (AflII c|ttaag)5,";
    var v1497 = v1498 + "/accggt/ (AgeI a|ccggt)5,";
    var v1496 = v1497 + "/actagt/ (AhlI a|ctagt)5,";
    var v1495 = v1496 + "/gtgcac/ (Alw441 g|tgcac)5,";
    var v1494 = v1495 + "/agct/ (AluI ag|ct)2,";
    var v1493 = v1494 + "/agcgct/ (Aor51HI agc|gct)3,";
    var v1492 = v1493 + "/gggccc/ (ApaI gggcc|c)1,";
    var v1491 = v1492 + "/gtgcac/ (ApaLI g|tgcac)5,";
    var v1490 = v1491 + "/ggcgcgcc/ (AscI gg|cgcgcc)6,";
    var v1489 = v1490 + "/attaat/ (AseI at|taat)4,";
    var v1488 = v1489 + "/ggtacc/ (Asp718I g|gtacc)5,";
    var v1487 = v1488 + "/ttcgaa/ (AsuII tt|cgaa)4,";
    var v1486 = v1487 + "/c[cty]cg[agr]g/ (AvaI c|ycgrg)5,";
    var v1485 = v1486 + "/tgcgca/ (AviII tgc|gca)3,";
    var v1484 = v1485 + "/cctagg/ (AvrII c|ctagg)5,";
    var v1483 = v1484 + "/tggcca/ (BalI tgg|cca)3,";
    var v1482 = v1483 + "/ggatcc/ (BamHI g|gatcc)5,";
    var v1481 = v1482 + "/atcgat/ (BanIII at|cgat)4,";
    var v1480 = v1481 + "/ggcgcc/ (BbeI ggcgc|c)1,";
    var v1479 = v1480 + "/cacgtg/ (BbrPI cac|gtg)3,";
    var v1478 = v1479 + "/gcatgc/ (BbuI gcatg|c)1,";
    var v1477 = v1478 + "/actagt/ (BcuI a|ctagt)5,";
    var v1476 = v1477 + "/tgatca/ (BclI t|gatca)5,";
    var v1475 = v1476 + "/ctag/ (BfaI c|tag)3,";
    var v1474 = v1475 + "/cttaag/ (BfrI c|ttaag)5,";
    var v1473 = v1474 + "/atgcat/ (BfrBI atg|cat)3,";
    var v1472 = v1473 + "/agatct/ (BglII a|gatct)5,";
    var v1471 = v1472 + "/cctagg/ (BlnI c|ctagg)5,";
    var v1470 = v1471 + "/atcgat/ (BseCI at|cgat)4,";
    var v1469 = v1470 + "/gcgcgc/ (BsePI g|cgcgc)5,";
    var v1468 = v1469 + "/cggccg/ (BseX3I c|ggccg)5,";
    var v1467 = v1468 + "/accggt/ (BshTI a|ccggt)5,";
    var v1466 = v1467 + "/tgtaca/ (Bsp1407I t|gtaca)5,";
    var v1465 = v1466 + "/ccatgg/ (Bsp19I c|catgg)5,";
    var v1464 = v1465 + "/atcgat/ (BspDI at|cgat)4,";
    var v1463 = v1464 + "/tccgga/ (BspEI t|ccgga)5,";
    var v1462 = v1463 + "/tgtaca/ (BsrGI t|gtaca)5,";
    var v1461 = v1462 + "/gcgcgc/ (BssHII g|cgcgc)5,";
    var v1460 = v1461 + "/cgcg/ (BstUI cg|cg)2,";
    var v1459 = v1460 + "/atcgat/ (ClaI at|cgat)4,";
    var v1458 = v1459 + "/gatc/ (DpnII |gatc)4,";
    var v1457 = v1458 + "/tttaaa/ (DraI ttt|aaa)3,";
    var v1456 = v1457 + "/cggccg/ (EagI c|ggccg)5,";
    var v1455 = v1456 + "/gaattc/ (EcoRI g|aattc)5,";
    var v1454 = v1455 + "/gatatc/ (EcoRV gat|atc)3,";
    var v1453 = v1454 + "/ggcgcc/ (EgeI ggc|gcc)3,";
    var v1452 = v1453 + "/ggccggcc/ (FseI ggccgg|cc)2,";
    var v1451 = v1452 + "/tgcgca/ (FspI tgc|gca)3,";
    var v1450 = v1451 + "/ggcc/ (HaeIII gg|cc)2,";
    var v1449 = v1450 + "/gt[cty][agr]ac/ (HincII gty|rac)3,";
    var v1448 = v1449 + "/aagctt/ (HindIII a|agctt)5,";
    var v1447 = v1448 + "/ga[acgturyswkmbdhvn]tc/ (HinfI g|antc)4,";
    var v1446 = v1447 + "/gttaac/ (HpaI gtt|aac)3,";
    var v1445 = v1446 + "/ccgg/ (HpaII c|cgg)3,";
    var v1444 = v1445 + "/ggcgcc/ (KasI g|gcgcc)5,";
    var v1443 = v1444 + "/ggtacc/ (KpnI ggtac|c)1,";
    var v1442 = v1443 + "/[acgturyswkmbdhvn]gatc[acgturyswkmbdhvn]/ (MboI |gatc)5,";
    var v1441 = v1442 + "/caattg/ (MfeI c|aattg)5,";
    var v1440 = v1441 + "/acgcgt/ (MluI a|cgcgt)5,";
    var v1439 = v1440 + "/tggcca/ (MscI tgg|cca)3,";
    var v1438 = v1439 + "/ttaa/ (MseI t|taa)3,";
    var v1437 = v1438 + "/ccgg/ (MspI c|cgg)3,";
    var v1436 = v1437 + "/gccggc/ (NaeI gcc|ggc)3,";
    var v1435 = v1436 + "/ggcgcc/ (NarI gg|cgcc)4,";
    var v1434 = v1435 + "/ccatgg/ (NcoI c|catgg)5,";
    var v1433 = v1434 + "/catatg/ (NdeI ca|tatg)4,";
    var v1432 = v1433 + "/gatc/ (NdeII |gatc)4,";
    var v1431 = v1432 + "/gccggc/ (NgoMIV g|ccggc)5,";
    var v1430 = v1431 + "/gctagc/ (NheI g|ctagc)5,";
    var v1429 = v1430 + "/catg/ (NlaIII catg|)0,";
    var v1428 = v1429 + "/gcggccgc/ (NotI gc|ggccgc)6,";
    var v1427 = v1428 + "/tcgcga/ (NruI tcg|cga)3,";
    var v1426 = v1427 + "/atgcat/ (NsiI atgca|t)1,";
    var v1425 = v1426 + "/ttaattaa/ (PacI ttaat|taa)3,";
    var v1424 = v1425 + "/acatgt/ (PciI a|catgt)5,";
    var v1423 = v1424 + "/ggcc/ (PhoI gg|cc)2,";
    var v1422 = v1423 + "/gtttaaac/ (PmeI gttt|aaac)4,";
    var v1421 = v1422 + "/cacgtg/ (PmlI cac|gtg)3,";
    var v1420 = v1421 + "/ttataa/ (PsiI tta|taa)3,";
    var v1419 = v1420 + "/ctgcag/ (PstI ctgca|g)1,";
    var v1418 = v1419 + "/cgatcg/ (PvuI cgat|cg)2,";
    var v1417 = v1418 + "/cagctg/ (PvuII cag|ctg)3,";
    var v1416 = v1417 + "/gtac/ (RsaI gt|ac)2,";
    var v1415 = v1416 + "/gagctc/ (SacI gagct|c)1,";
    var v1397 = v1415 + "/ccgcgg/ (SacII ccgc|gg)2,";
    var v1379 = v1397 + "/gtcgac/ (SalI g|tcgac)5,";
    var v1361 = v1379 + "/cctgcagg/ (SbfI cctgca|gg)2,";
    var v1342 = v1361 + "/agtact/ (ScaI agt|act)3,";
    var v1322 = v1342 + "/ggcgcc/ (SfoI ggc|gcc)3,";
    var v1300 = v1322 + "/cccggg/ (SmaI ccc|ggg)3,";
    var v1278 = v1300 + "/tacgta/ (SnaBI tac|gta)3,";
    var v1256 = v1278 + "/actagt/ (SpeI a|ctagt)5,";
    var v1231 = v1256 + "/gcatgc/ (SphI gcatg|c)1,";
    var v1206 = v1231 + "/aatatt/ (SspI aat|att)3,";
    var v1179 = v1206 + "/gagctc/ (SstI gagct|c)1,";
    var v1144 = v1179 + "/ccgcgg/ (SstII ccgc|gg)2,";
    var v1096 = v1144 + "/aggcct/ (StuI agg|cct)3,";
    var v1047 = v1096 + "/atttaaat/ (SwaI attt|aaat)4,";
    var v992 = v1047 + "/tcga/ (TaqI t|cga)3,";
    var v913 = v992 + "/ctcgag/ (TliI c|tcgag)5,";
    var v800 = v913 + "/attaat/ (VspI at|taat)4,";
    var v630 = v800 + "/tctaga/ (XbaI t|ctaga)5,";
    var v299 = v630 + "/ctcgag/ (XhoI c|tcgag)5,";
    return v299 + "/cccggg/ (XmaI c|ccggg)5";
  }
  return true;
}
function getGeneticCodeString(type$$26) {
  var v801 = type$$26.toLowerCase();
  var v631 = v801 == "standard";
  var v803 = !v631;
  if (v803) {
    var v802 = type$$26.toLowerCase();
    v631 = v802 == "transl_table=1";
  }
  var v302 = v631;
  if (v302) {
    var v1398 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1380 = v1398 + "/ga[tcuy]/=D,";
    var v1362 = v1380 + "/ga[agr]/=E,";
    var v1343 = v1362 + "/[tu][tu][tcuy]/=F,";
    var v1323 = v1343 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1301 = v1323 + "/ca[tcuy]/=H,";
    var v1279 = v1301 + "/a[tu][atcuwmhy]/=I,";
    var v1257 = v1279 + "/aa[agr]/=K,";
    var v1232 = v1257 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1207 = v1232 + "/a[tu]g/=M,";
    var v1180 = v1207 + "/aa[tucy]/=N,";
    var v1145 = v1180 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1097 = v1145 + "/ca[agr]/=Q,";
    var v1048 = v1097 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v993 = v1048 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v914 = v993 + "/ac[acgturyswkmbdhvn]/=T,";
    var v804 = v914 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v632 = v804 + "/[tu]gg/=W,";
    var v301 = v632 + "/[tu]a[ctuy]/=Y,";
    return v301 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*";
  }
  var v633 = type$$26.toLowerCase();
  var v304 = v633 == "transl_table=2";
  if (v304) {
    var v1399 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1381 = v1399 + "/ga[tcuy]/=D,";
    var v1363 = v1381 + "/ga[agr]/=E,";
    var v1344 = v1363 + "/[tu][tu][tcuy]/=F,";
    var v1324 = v1344 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1302 = v1324 + "/ca[tcuy]/=H,";
    var v1280 = v1302 + "/a[tu][tcuy]/=I,";
    var v1258 = v1280 + "/aa[agr]/=K,";
    var v1233 = v1258 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1208 = v1233 + "/a[tu][agr]/=M,";
    var v1181 = v1208 + "/aa[tucy]/=N,";
    var v1146 = v1181 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1098 = v1146 + "/ca[agr]/=Q,";
    var v1049 = v1098 + "/cg[acgturyswkmbdhvn]/=R,";
    var v994 = v1049 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v915 = v994 + "/ac[acgturyswkmbdhvn]/=T,";
    var v805 = v915 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v634 = v805 + "/[tu]g[agr]/=W,";
    var v303 = v634 + "/[tu]a[ctuy]/=Y,";
    return v303 + "/[tu]a[agr]|ag[agr]/=*";
  }
  var v635 = type$$26.toLowerCase();
  var v306 = v635 == "transl_table=3";
  if (v306) {
    var v1400 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1382 = v1400 + "/ga[tcuy]/=D,";
    var v1364 = v1382 + "/ga[agr]/=E,";
    var v1345 = v1364 + "/[tu][tu][tcuy]/=F,";
    var v1325 = v1345 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1303 = v1325 + "/ca[tcuy]/=H,";
    var v1281 = v1303 + "/a[tu][tcuy]/=I,";
    var v1259 = v1281 + "/aa[agr]/=K,";
    var v1234 = v1259 + "/[tu][tu][agr]/=L,";
    var v1209 = v1234 + "/a[tu][agr]/=M,";
    var v1182 = v1209 + "/aa[tucy]/=N,";
    var v1147 = v1182 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1099 = v1147 + "/ca[agr]/=Q,";
    var v1050 = v1099 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v995 = v1050 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v916 = v995 + "/ac[acgturyswkmbdhvn]|c[tu][acgturyswkmbdhvn]/=T,";
    var v806 = v916 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v636 = v806 + "/[tu]g[agr]/=W,";
    var v305 = v636 + "/[tu]a[ctuy]/=Y,";
    return v305 + "/[tu]a[agr]/=*";
  }
  var v637 = type$$26.toLowerCase();
  var v308 = v637 == "transl_table=4";
  if (v308) {
    var v1401 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1383 = v1401 + "/ga[tcuy]/=D,";
    var v1365 = v1383 + "/ga[agr]/=E,";
    var v1346 = v1365 + "/[tu][tu][tcuy]/=F,";
    var v1326 = v1346 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1304 = v1326 + "/ca[tcuy]/=H,";
    var v1282 = v1304 + "/a[tu][atcuwmhy]/=I,";
    var v1260 = v1282 + "/aa[agr]/=K,";
    var v1235 = v1260 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1210 = v1235 + "/a[tu]g/=M,";
    var v1183 = v1210 + "/aa[tucy]/=N,";
    var v1148 = v1183 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1100 = v1148 + "/ca[agr]/=Q,";
    var v1051 = v1100 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v996 = v1051 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v917 = v996 + "/ac[acgturyswkmbdhvn]/=T,";
    var v807 = v917 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v638 = v807 + "/[tu]g[agr]/=W,";
    var v307 = v638 + "/[tu]a[ctuy]/=Y,";
    return v307 + "/[tu]a[agr]/=*";
  }
  var v639 = type$$26.toLowerCase();
  var v310 = v639 == "transl_table=5";
  if (v310) {
    var v1402 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1384 = v1402 + "/ga[tcuy]/=D,";
    var v1366 = v1384 + "/ga[agr]/=E,";
    var v1347 = v1366 + "/[tu][tu][tcuy]/=F,";
    var v1327 = v1347 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1305 = v1327 + "/ca[tcuy]/=H,";
    var v1283 = v1305 + "/a[tu][tcuy]/=I,";
    var v1261 = v1283 + "/aa[agr]/=K,";
    var v1236 = v1261 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1211 = v1236 + "/a[tu][agr]/=M,";
    var v1184 = v1211 + "/aa[tucy]/=N,";
    var v1149 = v1184 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1101 = v1149 + "/ca[agr]/=Q,";
    var v1052 = v1101 + "/cg[acgturyswkmbdhvn]/=R,";
    var v997 = v1052 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v918 = v997 + "/ac[acgturyswkmbdhvn]/=T,";
    var v808 = v918 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v640 = v808 + "/[tu]g[agr]/=W,";
    var v309 = v640 + "/[tu]a[ctuy]/=Y,";
    return v309 + "/[tu]a[agr]/=*";
  }
  var v641 = type$$26.toLowerCase();
  var v312 = v641 == "transl_table=6";
  if (v312) {
    var v1403 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1385 = v1403 + "/ga[tcuy]/=D,";
    var v1367 = v1385 + "/ga[agr]/=E,";
    var v1348 = v1367 + "/[tu][tu][tcuy]/=F,";
    var v1328 = v1348 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1306 = v1328 + "/ca[tcuy]/=H,";
    var v1284 = v1306 + "/a[tu][atcuwmhy]/=I,";
    var v1262 = v1284 + "/aa[agr]/=K,";
    var v1237 = v1262 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1212 = v1237 + "/a[tu]g/=M,";
    var v1185 = v1212 + "/aa[tucy]/=N,";
    var v1150 = v1185 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1102 = v1150 + "/ca[agr]|[tu]a[agr]|[tcuy]a[agr]/=Q,";
    var v1053 = v1102 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v998 = v1053 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v919 = v998 + "/ac[acgturyswkmbdhvn]/=T,";
    var v809 = v919 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v642 = v809 + "/[tu]gg/=W,";
    var v311 = v642 + "/[tu]a[ctuy]/=Y,";
    return v311 + "/[tu]ga/=*";
  }
  var v643 = type$$26.toLowerCase();
  var v314 = v643 == "transl_table=9";
  if (v314) {
    var v1404 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1386 = v1404 + "/ga[tcuy]/=D,";
    var v1368 = v1386 + "/ga[agr]/=E,";
    var v1349 = v1368 + "/[tu][tu][tcuy]/=F,";
    var v1329 = v1349 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1307 = v1329 + "/ca[tcuy]/=H,";
    var v1285 = v1307 + "/a[tu][atcuwmhy]/=I,";
    var v1263 = v1285 + "/aag/=K,";
    var v1238 = v1263 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1213 = v1238 + "/a[tu]g/=M,";
    var v1186 = v1213 + "/aa[atcuwmhy]/=N,";
    var v1151 = v1186 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1103 = v1151 + "/ca[agr]/=Q,";
    var v1054 = v1103 + "/cg[acgturyswkmbdhvn]/=R,";
    var v999 = v1054 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v920 = v999 + "/ac[acgturyswkmbdhvn]/=T,";
    var v810 = v920 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v644 = v810 + "/[tu]g[agr]/=W,";
    var v313 = v644 + "/[tu]a[ctuy]/=Y,";
    return v313 + "/[tu]a[agr]/=*";
  }
  var v645 = type$$26.toLowerCase();
  var v316 = v645 == "transl_table=10";
  if (v316) {
    var v1405 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[atcuwmhy]/=C,";
    var v1387 = v1405 + "/ga[tcuy]/=D,";
    var v1369 = v1387 + "/ga[agr]/=E,";
    var v1350 = v1369 + "/[tu][tu][tcuy]/=F,";
    var v1330 = v1350 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1308 = v1330 + "/ca[tcuy]/=H,";
    var v1286 = v1308 + "/a[tu][atcuwmhy]/=I,";
    var v1264 = v1286 + "/aa[agr]/=K,";
    var v1239 = v1264 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1214 = v1239 + "/a[tu]g/=M,";
    var v1187 = v1214 + "/aa[tucy]/=N,";
    var v1152 = v1187 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1104 = v1152 + "/ca[agr]/=Q,";
    var v1055 = v1104 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1000 = v1055 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v921 = v1000 + "/ac[acgturyswkmbdhvn]/=T,";
    var v811 = v921 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v646 = v811 + "/[tu]gg/=W,";
    var v315 = v646 + "/[tu]a[ctuy]/=Y,";
    return v315 + "/[tu]a[agr]/=*";
  }
  var v647 = type$$26.toLowerCase();
  var v318 = v647 == "transl_table=11";
  if (v318) {
    var v1406 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1388 = v1406 + "/ga[tcuy]/=D,";
    var v1370 = v1388 + "/ga[agr]/=E,";
    var v1351 = v1370 + "/[tu][tu][tcuy]/=F,";
    var v1331 = v1351 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1309 = v1331 + "/ca[tcuy]/=H,";
    var v1287 = v1309 + "/a[tu][atcuwmhy]/=I,";
    var v1265 = v1287 + "/aa[agr]/=K,";
    var v1240 = v1265 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1215 = v1240 + "/a[tu]g/=M,";
    var v1188 = v1215 + "/aa[tucy]/=N,";
    var v1153 = v1188 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1105 = v1153 + "/ca[agr]/=Q,";
    var v1056 = v1105 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1001 = v1056 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v922 = v1001 + "/ac[acgturyswkmbdhvn]/=T,";
    var v812 = v922 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v648 = v812 + "/[tu]gg/=W,";
    var v317 = v648 + "/[tu]a[ctuy]/=Y,";
    return v317 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*";
  }
  var v649 = type$$26.toLowerCase();
  var v320 = v649 == "transl_table=12";
  if (v320) {
    var v1407 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1389 = v1407 + "/ga[tcuy]/=D,";
    var v1371 = v1389 + "/ga[agr]/=E,";
    var v1352 = v1371 + "/[tu][tu][tcuy]/=F,";
    var v1332 = v1352 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1310 = v1332 + "/ca[tcuy]/=H,";
    var v1288 = v1310 + "/a[tu][atcuwmhy]/=I,";
    var v1266 = v1288 + "/aa[agr]/=K,";
    var v1241 = v1266 + "/c[tu][atcuwmhy]|[tu][tu][agr]|[ctuy][tu]a/=L,";
    var v1216 = v1241 + "/a[tu]g/=M,";
    var v1189 = v1216 + "/aa[tucy]/=N,";
    var v1154 = v1189 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1106 = v1154 + "/ca[agr]/=Q,";
    var v1057 = v1106 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1002 = v1057 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]|c[tu]g/=S,";
    var v923 = v1002 + "/ac[acgturyswkmbdhvn]/=T,";
    var v813 = v923 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v650 = v813 + "/[tu]gg/=W,";
    var v319 = v650 + "/[tu]a[ctuy]/=Y,";
    return v319 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*";
  }
  var v651 = type$$26.toLowerCase();
  var v322 = v651 == "transl_table=13";
  if (v322) {
    var v1408 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1390 = v1408 + "/ga[tcuy]/=D,";
    var v1372 = v1390 + "/ga[agr]/=E,";
    var v1353 = v1372 + "/[tu][tu][tcuy]/=F,";
    var v1333 = v1353 + "/gg[acgturyswkmbdhvn]|ag[agr]|[agr]g[agr]/=G,";
    var v1311 = v1333 + "/ca[tcuy]/=H,";
    var v1289 = v1311 + "/a[tu][tcuy]/=I,";
    var v1267 = v1289 + "/aa[agr]/=K,";
    var v1242 = v1267 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1217 = v1242 + "/a[tu][agr]/=M,";
    var v1190 = v1217 + "/aa[tucy]/=N,";
    var v1155 = v1190 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1107 = v1155 + "/ca[agr]/=Q,";
    var v1058 = v1107 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1003 = v1058 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v924 = v1003 + "/ac[acgturyswkmbdhvn]/=T,";
    var v814 = v924 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v652 = v814 + "/[tu]g[agr]/=W,";
    var v321 = v652 + "/[tu]a[ctuy]/=Y,";
    return v321 + "/[tu]a[agr]/=*";
  }
  var v653 = type$$26.toLowerCase();
  var v324 = v653 == "transl_table=14";
  if (v324) {
    var v1409 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1391 = v1409 + "/ga[tcuy]/=D,";
    var v1373 = v1391 + "/ga[agr]/=E,";
    var v1354 = v1373 + "/[tu][tu][tcuy]/=F,";
    var v1334 = v1354 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1312 = v1334 + "/ca[tcuy]/=H,";
    var v1290 = v1312 + "/a[tu][atcuwmhy]/=I,";
    var v1268 = v1290 + "/aag/=K,";
    var v1243 = v1268 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1218 = v1243 + "/a[tu]g/=M,";
    var v1191 = v1218 + "/aa[atcuwmhy]/=N,";
    var v1156 = v1191 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1108 = v1156 + "/ca[agr]/=Q,";
    var v1059 = v1108 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1004 = v1059 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v925 = v1004 + "/ac[acgturyswkmbdhvn]/=T,";
    var v815 = v925 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v654 = v815 + "/[tu]g[agr]/=W,";
    var v323 = v654 + "/[tu]a[atcuwmhy]/=Y,";
    return v323 + "/[tu]ag/=*";
  }
  var v655 = type$$26.toLowerCase();
  var v326 = v655 == "transl_table=15";
  if (v326) {
    var v1410 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1392 = v1410 + "/ga[tcuy]/=D,";
    var v1374 = v1392 + "/ga[agr]/=E,";
    var v1355 = v1374 + "/[tu][tu][tcuy]/=F,";
    var v1335 = v1355 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1313 = v1335 + "/ca[tcuy]/=H,";
    var v1291 = v1313 + "/a[tu][atcuwmhy]/=I,";
    var v1269 = v1291 + "/aa[agr]/=K,";
    var v1244 = v1269 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1219 = v1244 + "/a[tu]g/=M,";
    var v1192 = v1219 + "/aa[tucy]/=N,";
    var v1157 = v1192 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1109 = v1157 + "/ca[agr]|[tu]ag|[tcuy]ag/=Q,";
    var v1060 = v1109 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1005 = v1060 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v926 = v1005 + "/ac[acgturyswkmbdhvn]/=T,";
    var v816 = v926 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v656 = v816 + "/[tu]gg/=W,";
    var v325 = v656 + "/[tu]a[ctuy]/=Y,";
    return v325 + "/[tu][agr]a/=*";
  }
  var v657 = type$$26.toLowerCase();
  var v328 = v657 == "transl_table=16";
  if (v328) {
    var v1411 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1393 = v1411 + "/ga[tcuy]/=D,";
    var v1375 = v1393 + "/ga[agr]/=E,";
    var v1356 = v1375 + "/[tu][tu][tcuy]/=F,";
    var v1336 = v1356 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1314 = v1336 + "/ca[tcuy]/=H,";
    var v1292 = v1314 + "/a[tu][atcuwmhy]/=I,";
    var v1270 = v1292 + "/aa[agr]/=K,";
    var v1245 = v1270 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]|[tu]ag|[tu][atuw]g/=L,";
    var v1220 = v1245 + "/a[tu]g/=M,";
    var v1193 = v1220 + "/aa[tucy]/=N,";
    var v1158 = v1193 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1110 = v1158 + "/ca[agr]/=Q,";
    var v1061 = v1110 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1006 = v1061 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v927 = v1006 + "/ac[acgturyswkmbdhvn]/=T,";
    var v817 = v927 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v658 = v817 + "/[tu]gg/=W,";
    var v327 = v658 + "/[tu]a[ctuy]/=Y,";
    return v327 + "/[tu][agr]a/=*";
  }
  var v659 = type$$26.toLowerCase();
  var v330 = v659 == "transl_table=21";
  if (v330) {
    var v1412 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1394 = v1412 + "/ga[tcuy]/=D,";
    var v1376 = v1394 + "/ga[agr]/=E,";
    var v1357 = v1376 + "/[tu][tu][tcuy]/=F,";
    var v1337 = v1357 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1315 = v1337 + "/ca[tcuy]/=H,";
    var v1293 = v1315 + "/a[tu][tcuy]/=I,";
    var v1271 = v1293 + "/aag/=K,";
    var v1246 = v1271 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1221 = v1246 + "/a[tu][agr]/=M,";
    var v1194 = v1221 + "/aa[atcuwmhy]/=N,";
    var v1159 = v1194 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1111 = v1159 + "/ca[agr]/=Q,";
    var v1062 = v1111 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1007 = v1062 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v928 = v1007 + "/ac[acgturyswkmbdhvn]/=T,";
    var v818 = v928 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v660 = v818 + "/[tu]g[agr]/=W,";
    var v329 = v660 + "/[tu]a[ctuy]/=Y,";
    return v329 + "/[tu]a[agr]/=*";
  }
  var v661 = type$$26.toLowerCase();
  var v332 = v661 == "transl_table=22";
  if (v332) {
    var v1413 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1395 = v1413 + "/ga[tcuy]/=D,";
    var v1377 = v1395 + "/ga[agr]/=E,";
    var v1358 = v1377 + "/[tu][tu][tcuy]/=F,";
    var v1338 = v1358 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1316 = v1338 + "/ca[tcuy]/=H,";
    var v1294 = v1316 + "/a[tu][atcuwmhy]/=I,";
    var v1272 = v1294 + "/aa[agr]/=K,";
    var v1247 = v1272 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]|[tu]ag|[tu][atuw]g/=L,";
    var v1222 = v1247 + "/a[tu]g/=M,";
    var v1195 = v1222 + "/aa[tucy]/=N,";
    var v1160 = v1195 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1112 = v1160 + "/ca[agr]/=Q,";
    var v1063 = v1112 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1008 = v1063 + "/[tu]c[cgtyskb]|ag[ct]/=S,";
    var v929 = v1008 + "/ac[acgturyswkmbdhvn]/=T,";
    var v819 = v929 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v662 = v819 + "/[tu]gg/=W,";
    var v331 = v662 + "/[tu]a[ctuy]/=Y,";
    return v331 + "/[tu][agcrsmv]a/=*";
  }
  var v663 = type$$26.toLowerCase();
  var v334 = v663 == "transl_table=23";
  if (v334) {
    var v1414 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1396 = v1414 + "/ga[tcuy]/=D,";
    var v1378 = v1396 + "/ga[agr]/=E,";
    var v1359 = v1378 + "/[tu][tu][tcuy]/=F,";
    var v1339 = v1359 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1317 = v1339 + "/ca[tcuy]/=H,";
    var v1295 = v1317 + "/a[tu][atcuwmhy]/=I,";
    var v1273 = v1295 + "/aa[agr]/=K,";
    var v1248 = v1273 + "/c[tu][acgturyswkmbdhvn]|[ctuy][tu]g/=L,";
    var v1223 = v1248 + "/a[tu]g/=M,";
    var v1196 = v1223 + "/aa[tucy]/=N,";
    var v1161 = v1196 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1113 = v1161 + "/ca[agr]/=Q,";
    var v1064 = v1113 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1009 = v1064 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v930 = v1009 + "/ac[acgturyswkmbdhvn]/=T,";
    var v820 = v930 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v664 = v820 + "/[tu]gg/=W,";
    var v333 = v664 + "/[tu]a[ctuy]/=Y,";
    return v333 + "/[tu]a[agr]|[tu]ga|[tu][agtrwkd]a/=*";
  }
  return true;
}
function restMap() {
  var theDocument = document;
  var newDna = "";
  var title$$9 = "";
  var maxInput$$3 = 1E5;
  var v665 = testScript();
  var v335 = v665 == false;
  if (v335) {
    return;
  }
  var restrictionSiteCollection;
  var v1114 = theDocument.forms;
  var v1065 = v1114[0];
  var v1010 = v1065.elements;
  var v931 = v1010[6];
  var v821 = v931.options;
  var v1115 = theDocument.forms;
  var v1066 = v1115[0];
  var v1011 = v1066.elements;
  var v932 = v1011[6];
  var v822 = v932.selectedIndex;
  var v666 = v821[v822];
  var v336 = v666.value;
  var geneticCode = getGeneticCodeString(v336);
  var restrictionSites = getRestrictionSiteString();
  var v1116 = theDocument.forms;
  var v1067 = v1116[0];
  var v1012 = v1067.elements;
  var v933 = v1012[0];
  var v823 = checkFormElement(v933);
  var v667 = v823 == false;
  var v825 = !v667;
  if (v825) {
    var v1162 = theDocument.forms;
    var v1117 = v1162[0];
    var v1068 = v1117.elements;
    var v1013 = v1068[0];
    var v934 = v1013.value;
    var v824 = checkSequenceLength(v934, maxInput$$3);
    v667 = v824 == false;
  }
  var v337 = v667;
  if (v337) {
    return;
  }
  geneticCode = geneticCode.split(/,/);
  var v668 = checkGeneticCode(geneticCode);
  var v338 = v668 == false;
  if (v338) {
    return;
  }
  restrictionSites = restrictionSites.split(/,/);
  var v669 = checkRestPatterns(restrictionSites);
  var v339 = v669 == false;
  if (v339) {
    return;
  }
  var isColor$$1;
  var v1163 = theDocument.forms;
  var v1118 = v1163[0];
  var v1069 = v1118.elements;
  var v1014 = v1069[8];
  var v935 = v1014.options;
  var v1164 = theDocument.forms;
  var v1119 = v1164[0];
  var v1070 = v1119.elements;
  var v1015 = v1070[8];
  var v936 = v1015.selectedIndex;
  var v826 = v935[v936];
  var v670 = v826.value;
  var v340 = v670 == "color";
  if (v340) {
    isColor$$1 = true;
  } else {
    isColor$$1 = false;
  }
  _openWindow("Restriction Map", isColor$$1);
  var v341 = outputWindow.document;
  var v671 = '<span class="one">' + "cuts once";
  var v342 = v671 + "</span><br />\n";
  v341.write(v342);
  var v343 = outputWindow.document;
  var v672 = '<span class="two">' + "cuts twice";
  var v344 = v672 + "</span><br />\n";
  v343.write(v344);
  var v345 = outputWindow.document;
  v345.write("\n");
  var v1016 = theDocument.forms;
  var v937 = v1016[0];
  var v827 = v937.elements;
  var v673 = v827[0];
  var v346 = v673.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v346);
  var i$$11 = 0;
  var v674 = arrayOfFasta$$1.length;
  var v357 = i$$11 < v674;
  for (;v357;) {
    var v347 = arrayOfFasta$$1[i$$11];
    newDna = getSequenceFromFasta(v347);
    var v348 = arrayOfFasta$$1[i$$11];
    title$$9 = getTitleFromFasta(v348);
    newDna = removeNonDna(newDna);
    openPre();
    var v349 = outputWindow.document;
    var v1165 = theDocument.forms;
    var v1120 = v1165[0];
    var v1071 = v1120.elements;
    var v1017 = v1071[7];
    var v938 = v1017.options;
    var v1166 = theDocument.forms;
    var v1121 = v1166[0];
    var v1072 = v1121.elements;
    var v1018 = v1072[7];
    var v939 = v1018.selectedIndex;
    var v828 = v938[v939];
    var v675 = v828.value;
    var v350 = getInfoFromTitleAndSequenceAndTopology(title$$9, newDna, v675);
    v349.write(v350);
    var v1122 = theDocument.forms;
    var v1073 = v1122[0];
    var v1019 = v1073.elements;
    var v940 = v1019[7];
    var v829 = v940.options;
    var v1123 = theDocument.forms;
    var v1074 = v1123[0];
    var v1020 = v1074.elements;
    var v941 = v1020[7];
    var v830 = v941.selectedIndex;
    var v676 = v829[v830];
    var v351 = v676.value;
    restrictionSiteCollection = findRestrictionSites(newDna, restrictionSites, v351);
    restrictionSiteCollection.sortRestrictionSites();
    var v1124 = theDocument.forms;
    var v1075 = v1124[0];
    var v1021 = v1075.elements;
    var v942 = v1021[4];
    var v831 = v942.options;
    var v1125 = theDocument.forms;
    var v1076 = v1125[0];
    var v1022 = v1076.elements;
    var v943 = v1022[4];
    var v832 = v943.selectedIndex;
    var v677 = v831[v832];
    var v352 = v677.value;
    var v1126 = theDocument.forms;
    var v1077 = v1126[0];
    var v1023 = v1077.elements;
    var v944 = v1023[5];
    var v833 = v944.options;
    var v1127 = theDocument.forms;
    var v1078 = v1127[0];
    var v1024 = v1078.elements;
    var v945 = v1024[5];
    var v834 = v945.selectedIndex;
    var v678 = v833[v834];
    var v353 = v678.value;
    layoutRestTrans(newDna, geneticCode, restrictionSiteCollection, v352, v353);
    var v354 = outputWindow.document;
    v354.write("\n");
    closePre();
    var v1128 = theDocument.forms;
    var v1079 = v1128[0];
    var v1025 = v1079.elements;
    var v946 = v1025[7];
    var v835 = v946.options;
    var v1129 = theDocument.forms;
    var v1080 = v1129[0];
    var v1026 = v1080.elements;
    var v947 = v1026[7];
    var v836 = v947.selectedIndex;
    var v679 = v835[v836];
    var v355 = v679.value;
    writeRestrictionSites(newDna, restrictionSites, v355);
    var v356 = outputWindow.document;
    v356.write("<br />\n<br />\n");
    i$$11++;
    var v680 = arrayOfFasta$$1.length;
    v357 = i$$11 < v680;
  }
  closeWindow();
  return;
}
function layoutRestTrans(dnaSequence$$3, geneticCode$$1, restrictionSiteCollection$$1, basesPerLine, readingFrame) {
  basesPerLine = parseInt(basesPerLine);
  var geneticCodeMatchExp$$2 = getGeneticCodeMatchExp(geneticCode$$1);
  var geneticCodeMatchResult$$2 = getGeneticCodeMatchResult(geneticCode$$1);
  var spaceString = "                                                                                                                                  ";
  var textLayout = new TextLayout;
  var v681 = readingFrame == "3";
  var v837 = !v681;
  if (v837) {
    v681 = readingFrame == "all_three";
  }
  var v359 = v681;
  if (v359) {
    var translation = new TranslationComponent;
    var v948 = dnaSequence$$3.length;
    var v838 = dnaSequence$$3.substring(2, v948);
    var v682 = translate(v838, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    var v358 = "  " + v682;
    translation.setCharacters(v358);
    textLayout.addComponent(translation);
  }
  var v683 = readingFrame == "2";
  var v839 = !v683;
  if (v839) {
    v683 = readingFrame == "all_three";
  }
  var v361 = v683;
  if (v361) {
    translation = new TranslationComponent;
    var v949 = dnaSequence$$3.length;
    var v840 = dnaSequence$$3.substring(1, v949);
    var v684 = translate(v840, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    var v360 = " " + v684;
    translation.setCharacters(v360);
    textLayout.addComponent(translation);
  }
  var v685 = readingFrame == "1";
  var v841 = !v685;
  if (v841) {
    v685 = readingFrame == "all_three";
  }
  var v363 = v685;
  if (v363) {
    translation = new TranslationComponent;
    var v362 = translate(dnaSequence$$3, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    translation.setCharacters(v362);
    textLayout.addComponent(translation);
  }
  var v365 = readingFrame == "uppercase";
  if (v365) {
    translation = new UppercaseTranslationComponent;
    var v364 = uppercaseTranslate(dnaSequence$$3, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    translation.setCharacters(v364);
    textLayout.addComponent(translation);
  }
  var dna = new DnaComponent;
  dna.setCharacters(dnaSequence$$3);
  textLayout.addComponent(dna);
  var ruler = new RulerComponent;
  ruler.setCharacters(dnaSequence$$3);
  ruler.buildRuler();
  textLayout.addComponent(ruler);
  dna = new DnaComponent;
  var v366 = complement(dnaSequence$$3);
  dna.setCharacters(v366);
  textLayout.addComponent(dna);
  var sitesInRange = new Array;
  var i$$12 = 0;
  var v686 = dnaSequence$$3.length;
  var v381 = i$$12 < v686;
  for (;v381;) {
    var v367 = i$$12 + basesPerLine;
    sitesInRange = restrictionSiteCollection$$1.getSitesInRange(i$$12, v367);
    sitesInRange.reverse();
    var j$$10 = 0;
    var v687 = sitesInRange.length;
    var v379 = j$$10 < v687;
    for (;v379;) {
      var v842 = sitesInRange[j$$10];
      var v688 = v842.numberOfCuts;
      var v378 = v688 == 1;
      if (v378) {
        var v368 = outputWindow.document;
        var v1167 = sitesInRange[j$$10];
        var v1130 = v1167.position;
        var v1081 = v1130 - i$$12;
        var v1027 = v1081 + 9;
        var v950 = spaceString.substring(0, v1027);
        var v843 = v950 + '<span class="one">';
        var v951 = sitesInRange[j$$10];
        var v844 = v951.label;
        var v689 = v843 + v844;
        var v369 = v689 + "</span>\n";
        v368.write(v369);
      } else {
        var v845 = sitesInRange[j$$10];
        var v690 = v845.numberOfCuts;
        var v377 = v690 == 2;
        if (v377) {
          var v370 = outputWindow.document;
          var v1168 = sitesInRange[j$$10];
          var v1131 = v1168.position;
          var v1082 = v1131 - i$$12;
          var v1028 = v1082 + 9;
          var v952 = spaceString.substring(0, v1028);
          var v846 = v952 + '<span class="two">';
          var v953 = sitesInRange[j$$10];
          var v847 = v953.label;
          var v691 = v846 + v847;
          var v371 = v691 + "</span>\n";
          v370.write(v371);
        } else {
          var v848 = sitesInRange[j$$10];
          var v692 = v848.numberOfCuts;
          var v376 = v692 == 3;
          if (v376) {
            var v372 = outputWindow.document;
            var v1169 = sitesInRange[j$$10];
            var v1132 = v1169.position;
            var v1083 = v1132 - i$$12;
            var v1029 = v1083 + 9;
            var v954 = spaceString.substring(0, v1029);
            var v849 = v954 + '<span class="three">';
            var v955 = sitesInRange[j$$10];
            var v850 = v955.label;
            var v693 = v849 + v850;
            var v373 = v693 + "</span>\n";
            v372.write(v373);
          } else {
            var v374 = outputWindow.document;
            var v1133 = sitesInRange[j$$10];
            var v1084 = v1133.position;
            var v1030 = v1084 - i$$12;
            var v956 = v1030 + 9;
            var v851 = spaceString.substring(0, v956);
            var v957 = sitesInRange[j$$10];
            var v852 = v957.label;
            var v694 = v851 + v852;
            var v375 = v694 + "\n";
            v374.write(v375);
          }
        }
      }
      j$$10++;
      var v695 = sitesInRange.length;
      v379 = j$$10 < v695;
    }
    var v380 = i$$12 + basesPerLine;
    textLayout.writeLayout(i$$12, v380);
    i$$12 = i$$12 + basesPerLine;
    var v696 = dnaSequence$$3.length;
    v381 = i$$12 < v696;
  }
  return;
}
function translate(dnaSequence$$4, geneticCodeMatchExp$$3, geneticCodeMatchResult$$3) {
  function v2(str$$8, p1$$2, offset$$10, s$$4) {
    var v382 = " " + p1$$2;
    return v382 + " ";
  }
  var v853 = dnaSequence$$4.replace(/[^A-Za-z]/g, "");
  var v697 = v853.length;
  var v383 = v697 < 3;
  if (v383) {
    return "";
  }
  dnaSequence$$4 = dnaSequence$$4.replace(/(...)/g, v2);
  var i$$13 = 0;
  var v698 = geneticCodeMatchExp$$3.length;
  var v386 = i$$13 < v698;
  for (;v386;) {
    var v384 = geneticCodeMatchExp$$3[i$$13];
    var v385 = geneticCodeMatchResult$$3[i$$13];
    dnaSequence$$4 = dnaSequence$$4.replace(v384, v385);
    i$$13++;
    var v699 = geneticCodeMatchExp$$3.length;
    v386 = i$$13 < v699;
  }
  dnaSequence$$4 = dnaSequence$$4.replace(/\S{3}/g, "X");
  dnaSequence$$4 = dnaSequence$$4.replace(/\s\S{1,2}$/, "");
  dnaSequence$$4 = dnaSequence$$4.replace(/^\s/, "");
  return dnaSequence$$4;
}
function uppercaseTranslate(dnaSequence$$5, geneticCodeMatchExp$$4, geneticCodeMatchResult$$4) {
  function v3(str$$9, p1$$3, p2, p3, p4, p5, p6, offset$$11, s$$5) {
    var v1085 = " " + p1$$3;
    var v1031 = v1085 + p3;
    var v958 = v1031 + p5;
    var v854 = v958 + " ";
    var v700 = v854 + p2;
    var v387 = v700 + p4;
    return v387 + p6;
  }
  dnaSequence$$5 = dnaSequence$$5.replace(/[a-z]/g, " ");
  var v855 = dnaSequence$$5.replace(/[^A-Za-z]/g, "");
  var v701 = v855.length;
  var v388 = v701 < 3;
  if (v388) {
    return "";
  }
  dnaSequence$$5 = dnaSequence$$5.replace(/([A-Z])(\s*)([A-Z])(\s*)([A-Z])(\s*)/g, v3);
  dnaSequence$$5 = dnaSequence$$5.replace(/\s\S{1,2}\s/g, "");
  var i$$14 = 0;
  var v702 = geneticCodeMatchExp$$4.length;
  var v391 = i$$14 < v702;
  for (;v391;) {
    var v389 = geneticCodeMatchExp$$4[i$$14];
    var v390 = geneticCodeMatchResult$$4[i$$14];
    dnaSequence$$5 = dnaSequence$$5.replace(v389, v390);
    i$$14++;
    var v703 = geneticCodeMatchExp$$4.length;
    v391 = i$$14 < v703;
  }
  dnaSequence$$5 = dnaSequence$$5.replace(/\S{3}/g, "X");
  dnaSequence$$5 = dnaSequence$$5.replace(/^\s/, "");
  return dnaSequence$$5;
}
function findRestrictionSites(sequence$$18, arrayOfItems$$2, dnaConformation$$1) {
  var lookAhead$$1 = 50;
  var lowerLimit$$1 = 0;
  var upperLimit$$1 = sequence$$18.length;
  var shiftValue$$1 = 0;
  var cutDistance$$1;
  var matchExp$$2;
  var matchPosition$$1;
  var matchArray$$2;
  var label;
  var timesFound$$1 = 0;
  var tempArray = new Array;
  var restrictionSiteCollection$$2 = new RestrictionSiteCollection;
  var v395 = dnaConformation$$1 == "circular";
  if (v395) {
    var v392 = sequence$$18.substring(0, lookAhead$$1);
    shiftValue$$1 = v392.length;
    var v959 = sequence$$18.length;
    var v856 = v959 - lookAhead$$1;
    var v857 = sequence$$18.length;
    var v704 = sequence$$18.substring(v856, v857);
    var v393 = v704 + sequence$$18;
    var v394 = sequence$$18.substring(0, lookAhead$$1);
    sequence$$18 = v393 + v394;
    lowerLimit$$1 = 0 + shiftValue$$1;
    upperLimit$$1 = upperLimit$$1 + shiftValue$$1;
  }
  var i$$15 = 0;
  var v705 = arrayOfItems$$2.length;
  var v406 = i$$15 < v705;
  for (;v406;) {
    var v706 = arrayOfItems$$2[i$$15];
    var v396 = v706.match(/\/.+\//);
    matchExp$$2 = v396 + "gi";
    matchPosition$$1 = 0;
    matchExp$$2 = eval(matchExp$$2);
    var v960 = arrayOfItems$$2[i$$15];
    var v858 = v960.match(/\)\D*\d+/);
    var v707 = v858.toString();
    var v397 = v707.replace(/\)\D*/, "");
    cutDistance$$1 = parseFloat(v397);
    var v859 = arrayOfItems$$2[i$$15];
    var v708 = v859.match(/\([^\(]+\)/);
    var v398 = v708.toString();
    label = v398.replace(/\(|\)/g, "");
    var v402 = matchArray$$2 = matchExp$$2.exec(sequence$$18);
    for (;v402;) {
      matchPosition$$1 = matchExp$$2.lastIndex;
      matchPosition$$1 = matchPosition$$1 - cutDistance$$1;
      var v709 = matchPosition$$1 >= lowerLimit$$1;
      if (v709) {
        v709 = matchPosition$$1 < upperLimit$$1;
      }
      var v400 = v709;
      if (v400) {
        var v860 = label + " ";
        var v961 = matchPosition$$1 - shiftValue$$1;
        var v861 = v961 + 1;
        var v710 = v860 + v861;
        var v711 = matchPosition$$1 - shiftValue$$1;
        var v399 = new RestrictionSite(v710, v711);
        tempArray.push(v399);
        timesFound$$1++;
      }
      var v712 = matchExp$$2.lastIndex;
      var v862 = RegExp.lastMatch;
      var v713 = v862.length;
      var v401 = v712 - v713;
      matchExp$$2.lastIndex = v401 + 1;
      v402 = matchArray$$2 = matchExp$$2.exec(sequence$$18);
    }
    var j$$11 = 0;
    var v714 = tempArray.length;
    var v405 = j$$11 < v714;
    for (;v405;) {
      var v403 = tempArray[j$$11];
      v403.numberOfCuts = timesFound$$1;
      var v404 = tempArray[j$$11];
      restrictionSiteCollection$$2.addRestrictionSite(v404);
      j$$11++;
      var v715 = tempArray.length;
      v405 = j$$11 < v715;
    }
    timesFound$$1 = 0;
    tempArray = new Array;
    i$$15++;
    var v716 = arrayOfItems$$2.length;
    v406 = i$$15 < v716;
  }
  return restrictionSiteCollection$$2;
}
function writeLayout(start$$4, stop) {
  var i$$16 = 0;
  var v863 = this.components;
  var v717 = v863.length;
  var v408 = i$$16 < v717;
  for (;v408;) {
    var v718 = this.components;
    var v407 = v718[i$$16];
    v407.writeLayoutComponent(start$$4, stop);
    i$$16++;
    var v864 = this.components;
    var v719 = v864.length;
    v408 = i$$16 < v719;
  }
  return;
}
function addComponent(component) {
  var v409 = this.components;
  v409.push(component);
  return;
}
function TextLayout() {
  var v1513 = new Array;
  this.components = v1513;
  return;
}
function writeLayoutComponent(start$$5, stop$$1) {
  return;
}
function setCharacters(text$$14) {
  var v720 = text$$14.search(/./);
  var v410 = v720 != -1;
  if (v410) {
    var v1514 = text$$14.match(/./g);
    this.characters = v1514;
  }
  return;
}
function isRoom(start$$6, stop$$2) {
  var v411 = this.characters;
  var rangeToCheck = v411.slice(start$$6, stop$$2);
  rangeToCheck = rangeToCheck.join("");
  var v721 = rangeToCheck.search(/\w/);
  var v412 = v721 == -1;
  if (v412) {
    return true;
  } else {
    return false;
  }
  return;
}
function LayoutComponent() {
  var v1515 = new Array;
  this.characters = v1515;
  this.positionLabel = 1;
  return;
}
function TranslationComponent() {
  var v1516 = new Array;
  this.characters = v1516;
  this.positionLabel = 1;
  return;
}
function UppercaseTranslationComponent() {
  var v1517 = new Array;
  this.characters = v1517;
  this.positionLabel = 1;
  return;
}
function DnaComponent() {
  var v1518 = new Array;
  this.characters = v1518;
  this.positionLabel = 1;
  return;
}
function RulerComponent() {
  var v1519 = new Array;
  this.characters = v1519;
  this.positionLabel = 1;
  return;
}
function buildRuler() {
  function v4(str$$12, p1$$6, offset$$14, s$$8) {
    var ruler$$1 = count$$3 + spacing;
    var v413 = count$$3 == 0;
    if (v413) {
      ruler$$1 = spacing;
    }
    count$$3 = count$$3 + 10;
    return ruler$$1.substring(0, 10);
  }
  var v414 = this.characters;
  var sequence$$19 = v414.join("");
  var count$$3 = 0;
  var spacing = "         ";
  sequence$$19 = sequence$$19.replace(/(.{1,10})/g, v4);
  var v1520 = sequence$$19.match(/./g);
  this.characters = v1520;
  return;
}
function RestrictionSite(label$$1, position) {
  this.label = label$$1;
  this.position = position;
  return;
}
function addRestrictionSite(restrictionSite) {
  var v415 = this.restrictionSites;
  v415.push(restrictionSite);
  return;
}
function sortRestrictionSites() {
  var v416 = this.restrictionSites;
  v416.sort(restrictionSiteSorter);
  return;
}
function getSitesInRange(start$$11, stop$$7) {
  var arrayToReturn = new Array;
  var v722 = this.restrictionSites;
  var v417 = v722.length;
  var i$$17 = v417 - 1;
  var v420 = i$$17 >= 0;
  for (;v420;) {
    var v1032 = this.restrictionSites;
    var v962 = v1032[i$$17];
    var v865 = v962.position;
    var v723 = v865 >= start$$11;
    if (v723) {
      var v1033 = this.restrictionSites;
      var v963 = v1033[i$$17];
      var v866 = v963.position;
      v723 = v866 < stop$$7;
    }
    var v419 = v723;
    if (v419) {
      var v724 = this.restrictionSites;
      var v418 = v724.pop();
      arrayToReturn.push(v418);
    } else {
      break;
    }
    i$$17--;
    v420 = i$$17 >= 0;
  }
  return arrayToReturn;
}
function RestrictionSiteCollection() {
  var v1521 = new Array;
  this.restrictionSites = v1521;
  return;
}
function restrictionSiteSorter(a, b) {
  var v725 = a.position;
  var v726 = b.position;
  var v421 = v725 < v726;
  if (v421) {
    return 1;
  }
  var v727 = a.position;
  var v728 = b.position;
  var v422 = v727 > v728;
  if (v422) {
    return -1;
  } else {
    return 0;
  }
  return;
}
new TextLayout;
var v423 = TextLayout.prototype;
v423.writeLayout = writeLayout;
var v424 = TextLayout.prototype;
v424.addComponent = addComponent;
new LayoutComponent;
var v425 = LayoutComponent.prototype;
v425.writeLayoutComponent = writeLayoutComponent;
var v426 = LayoutComponent.prototype;
v426.setCharacters = setCharacters;
var v427 = LayoutComponent.prototype;
v427.isRoom = isRoom;
var v428 = TranslationComponent;
var v1522 = new LayoutComponent;
v428.prototype = v1522;
var v429 = TranslationComponent.prototype;
v429.writeLayoutComponent = v5;
var v430 = UppercaseTranslationComponent;
var v1523 = new LayoutComponent;
v430.prototype = v1523;
var v431 = UppercaseTranslationComponent.prototype;
v431.writeLayoutComponent = v6;
var v432 = DnaComponent;
var v1524 = new LayoutComponent;
v432.prototype = v1524;
var v433 = DnaComponent.prototype;
v433.writeLayoutComponent = v7;
var v434 = RulerComponent;
var v1525 = new LayoutComponent;
v434.prototype = v1525;
var v435 = RulerComponent.prototype;
v435.writeLayoutComponent = v10;
new RulerComponent;
var v436 = RulerComponent.prototype;
v436.buildRuler = buildRuler;
new RestrictionSiteCollection;
var v437 = RestrictionSiteCollection.prototype;
v437.addRestrictionSite = addRestrictionSite;
var v438 = RestrictionSiteCollection.prototype;
v438.sortRestrictionSites = sortRestrictionSites;
var v439 = RestrictionSiteCollection.prototype;
v439.getSitesInRange = getSitesInRange;
document.onload = v11;
var v440 = document.getElementById("submitbtn");
v440.onclick = v12;
var v441 = document.getElementById("clearbtn");
v441.onclick = v13

}

JAM.stopProfile('load');
