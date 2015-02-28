function v12() {
  var v816 = document.forms;
  var v680 = v816[0];
  var v388 = v680.elements;
  var v13 = v388[0];
  v13.value = " ";
  var v817 = document.forms;
  var v681 = v817[0];
  var v389 = v681.elements;
  var v14 = v389[1];
  v14.value = " ";
  return;
}
function v11() {
  try {
    rangeExtract();
  } catch (e$$7) {
    var v15 = "The following error was encountered: " + e$$7;
    alert(v15);
  }
  return;
}
function v10() {
  var v390 = document.main_form;
  var v16 = v390.main_submit;
  v16.focus();
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
  var v17 = arrayOfSequences[0];
  var lengthOfAlign = v17.length;
  var v391 = arrayOfSequences.length;
  var v18 = v391 < 2;
  if (v18) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v392 = arrayOfTitles.length;
  var v20 = i$$1 < v392;
  for (;v20;) {
    var v912 = arrayOfTitles[i$$1];
    introspect(JAM.policy.p17) {
      var v818 = v912.search(/\S/)
    }
    var v682 = v818 == -1;
    var v820 = !v682;
    if (v820) {
      var v913 = arrayOfSequences[i$$1];
      introspect(JAM.policy.p17) {
        var v819 = v913.search(/\S/)
      }
      v682 = v819 == -1;
    }
    var v393 = v682;
    var v684 = !v393;
    if (v684) {
      var v821 = arrayOfSequences[i$$1];
      var v683 = v821.length;
      v393 = v683 != lengthOfAlign;
    }
    var v19 = v393;
    if (v19) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v394 = arrayOfTitles.length;
    v20 = i$$1 < v394;
  }
  return true;
}
function checkCodonTable(codonTable) {
  introspect(JAM.policy.p17) {
    var v970 = codonTable.search(/AmAcid/)
  }
  var v914 = v970 == -1;
  var v972 = !v914;
  if (v972) {
    introspect(JAM.policy.p17) {
      var v971 = codonTable.search(/Codon/)
    }
    v914 = v971 == -1;
  }
  var v822 = v914;
  var v916 = !v822;
  if (v916) {
    introspect(JAM.policy.p17) {
      var v915 = codonTable.search(/Number/)
    }
    v822 = v915 == -1;
  }
  var v685 = v822;
  var v824 = !v685;
  if (v824) {
    introspect(JAM.policy.p17) {
      var v823 = codonTable.search(/\/1000/)
    }
    v685 = v823 == -1;
  }
  var v395 = v685;
  var v687 = !v395;
  if (v687) {
    introspect(JAM.policy.p17) {
      var v686 = codonTable.search(/Fraction\s*\.\./)
    }
    v395 = v686 == -1;
  }
  var v21 = v395;
  if (v21) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v688 = formElement.value;
  introspect(JAM.policy.p17) {
    var v396 = v688.search(/\S/)
  }
  var v22 = v396 == -1;
  if (v22) {
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
  var v397 = arrayOfPatterns.length;
  var v25 = z$$2 < v397;
  for (;v25;) {
    var v689 = arrayOfPatterns[z$$2];
    introspect(JAM.policy.p17) {
      var v398 = v689.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/)
    }
    var v23 = v398 == -1;
    if (v23) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v690 = arrayOfPatterns[z$$2];
    var v399 = moreExpressionCheck(v690);
    var v24 = v399 == false;
    if (v24) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v400 = arrayOfPatterns.length;
    v25 = z$$2 < v400;
  }
  var v26 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v26);
  var v27 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v27);
  var j = 0;
  var v401 = arrayOfPatterns.length;
  var v31 = j < v401;
  for (;v31;) {
    var v691 = arrayOfPatterns[j];
    introspect(JAM.policy.p17) {
      var v402 = v691.match(/\/.+\//)
    }
    var v28 = v402 + "gi";
    var v1087 = eval(v28);
    geneticCodeMatchExp[j] = v1087;
    var v403 = arrayOfPatterns[j];
    introspect(JAM.policy.p17) {
      var v29 = v403.match(/=[a-zA-Z\*]/)
    }
    var v1088 = v29.toString();
    geneticCodeMatchResult[j] = v1088;
    var v30 = geneticCodeMatchResult[j];
    introspect(JAM.policy.p15) {
      var v1089 = v30.replace(/=/g, "")
    }
    geneticCodeMatchResult[j] = v1089;
    j++;
    var v404 = arrayOfPatterns.length;
    v31 = j < v404;
  }
  var i$$2 = 0;
  var v692 = testSequence.length;
  var v405 = v692 - 3;
  var v38 = i$$2 <= v405;
  for (;v38;) {
    var v32 = i$$2 + 3;
    introspect(JAM.policy.p15) {
      codon = testSequence.substring(i$$2, v32);
    }
    j = 0;
    var v406 = geneticCodeMatchExp.length;
    var v36 = j < v406;
    for (;v36;) {
      var v693 = geneticCodeMatchExp[j];
      introspect(JAM.policy.p16) {
        var v407 = codon.search(v693)
      }
      var v35 = v407 != -1;
      if (v35) {
        var v34 = oneMatch == true;
        if (v34) {
          var v408 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v33 = v408 + ".";
          alert(v33);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v409 = geneticCodeMatchExp.length;
      v36 = j < v409;
    }
    var v37 = oneMatch == false;
    if (v37) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v694 = testSequence.length;
    var v410 = v694 - 3;
    v38 = i$$2 <= v410;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v411 = arrayOfPatterns$$1.length;
  var v40 = z$$3 < v411;
  for (;v40;) {
    var v695 = arrayOfPatterns$$1[z$$3];
    introspect(JAM.policy.p17) {
      var v412 = v695.search(/[^acdefghiklmnpqrstvwyz]/i)
    }
    var v39 = v412 != -1;
    if (v39) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v413 = arrayOfPatterns$$1.length;
    v40 = z$$3 < v413;
  }
  var i$$3 = 0;
  var v414 = arrayOfPatterns$$1.length;
  var v44 = i$$3 < v414;
  for (;v44;) {
    var v696 = arrayOfPatterns$$1[i$$3];
    var v415 = "[" + v696;
    var v41 = v415 + "]";
    var re = new RegExp(v41, "gi");
    var j$$1 = i$$3 + 1;
    var v416 = arrayOfPatterns$$1.length;
    var v43 = j$$1 < v416;
    for (;v43;) {
      var v697 = arrayOfPatterns$$1[j$$1];
      introspect(JAM.policy.p16) {
        var v417 = v697.search(re)
      }
      var v42 = v417 != -1;
      if (v42) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v418 = arrayOfPatterns$$1.length;
      v43 = j$$1 < v418;
    }
    i$$3++;
    var v419 = arrayOfPatterns$$1.length;
    v44 = i$$3 < v419;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v420 = arrayOfPatterns$$2.length;
  var v47 = z$$4 < v420;
  for (;v47;) {
    var v698 = arrayOfPatterns$$2[z$$4];
    introspect(JAM.policy.p17) {
      var v421 = v698.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i)
    }
    var v45 = v421 == -1;
    if (v45) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v699 = arrayOfPatterns$$2[z$$4];
    var v422 = moreExpressionCheck(v699);
    var v46 = v422 == false;
    if (v46) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v423 = arrayOfPatterns$$2.length;
    v47 = z$$4 < v423;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v825 = getSequenceFromFasta(text$$7);
  introspect(JAM.policy.p15) {
    var v700 = v825.replace(/[^A-Za-z]/g, "")
  }
  var v424 = v700.length;
  var v49 = v424 > maxInput;
  if (v49) {
    var v425 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v48 = v425 + " characters.";
    alert(v48);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v426 = text$$8.length;
  var v51 = v426 > maxInput$$1;
  if (v51) {
    var v427 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v50 = v427 + " characters.";
    alert(v50);
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
  var v52 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v52.write("</form>");
  }
  return true;
}
function closePre() {
  var v53 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v53.write("</div>");
  }
  var v54 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v54.write("</pre>\n");
  }
  return;
}
function closeTextArea() {
  var v55 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v55.write("</textarea>");
  }
  return true;
}
function closeWindow() {
  var v56 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v56.write("</body>\n</html>\n");
  }
  outputWindow.status = "Done.";
  var v57 = outputWindow.document;
  v57.close();
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
  var v428 = alignArray.length;
  var v58 = v428 < 3;
  if (v58) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v429 = alignArray.length;
  var v60 = i$$4 < v429;
  for (;v60;) {
    var v701 = alignArray[i$$4];
    introspect(JAM.policy.p17) {
      var v430 = v701.search(/[^\s]+\s/)
    }
    var v59 = v430 == -1;
    if (v59) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v431 = alignArray.length;
    v60 = i$$4 < v431;
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
  introspect(JAM.policy.p17) {
    var v432 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v63 = v432 != -1;
  if (v63) {
    introspect(JAM.policy.p16) {
      var v62 = matchArray = re$$1.exec(sequenceData)
    }
    for (;v62;) {
      var v61 = matchArray[0];
      introspect(JAM.policy.p16) {
        arrayOfFasta.push(v61);
      }
      introspect(JAM.policy.p16) {
        v62 = matchArray = re$$1.exec(sequenceData);
      }
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence() {
  var fastaSequenceTitle = title;
  var sequence$$2 = newProtein;
  var v433 = sequence$$2.length;
  var v64 = "&gt;results for " + v433;
  var stringToReturn = v64 + " residue sequence ";
  introspect(JAM.policy.p17) {
    var v434 = fastaSequenceTitle.search(/[^\s]/)
  }
  var v66 = v434 != -1;
  if (v66) {
    var v435 = stringToReturn + '"';
    var v65 = v435 + fastaSequenceTitle;
    stringToReturn = v65 + '"';
  }
  var v436 = stringToReturn + ' starting "';
  introspect(JAM.policy.p13) {
    var v437 = sequence$$2.substring(0, 10)
  }
  var v67 = v436 + v437;
  stringToReturn = v67 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v438 = sequenceOne.length;
  var v68 = "Search results for " + v438;
  var stringToReturn$$1 = v68 + " residue sequence ";
  introspect(JAM.policy.p17) {
    var v439 = fastaSequenceTitleOne.search(/[^\s]/)
  }
  var v70 = v439 != -1;
  if (v70) {
    var v440 = stringToReturn$$1 + '"';
    var v69 = v440 + fastaSequenceTitleOne;
    stringToReturn$$1 = v69 + '"';
  }
  var v441 = stringToReturn$$1 + ' starting "';
  introspect(JAM.policy.p13) {
    var v442 = sequenceOne.substring(0, 10)
  }
  var v71 = v441 + v442;
  stringToReturn$$1 = v71 + '"\n';
  var v443 = stringToReturn$$1 + "and ";
  var v444 = sequenceTwo.length;
  var v72 = v443 + v444;
  stringToReturn$$1 = v72 + " residue sequence ";
  introspect(JAM.policy.p17) {
    var v445 = fastaSequenceTitleTwo.search(/[^\s]/)
  }
  var v74 = v445 != -1;
  if (v74) {
    var v446 = stringToReturn$$1 + '"';
    var v73 = v446 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v73 + '"';
  }
  var v447 = stringToReturn$$1 + ' starting "';
  introspect(JAM.policy.p13) {
    var v448 = sequenceTwo.substring(0, 10)
  }
  var v75 = v447 + v448;
  stringToReturn$$1 = v75 + '"';
  var v76 = '<div class="info">' + stringToReturn$$1;
  return v76 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v77 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v77);
  var j$$2 = 0;
  var v449 = arrayOfPatterns$$3.length;
  var v79 = j$$2 < v449;
  for (;v79;) {
    var v702 = arrayOfPatterns$$3[j$$2];
    introspect(JAM.policy.p17) {
      var v450 = v702.match(/\/.+\//)
    }
    var v78 = v450 + "gi";
    var v1090 = eval(v78);
    geneticCodeMatchExp$$1[j$$2] = v1090;
    j$$2++;
    var v451 = arrayOfPatterns$$3.length;
    v79 = j$$2 < v451;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v80 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v80);
  var j$$3 = 0;
  var v452 = arrayOfPatterns$$4.length;
  var v83 = j$$3 < v452;
  for (;v83;) {
    var v453 = arrayOfPatterns$$4[j$$3];
    introspect(JAM.policy.p17) {
      var v81 = v453.match(/=[a-zA-Z\*]/)
    }
    var v1091 = v81.toString();
    geneticCodeMatchResult$$1[j$$3] = v1091;
    var v82 = geneticCodeMatchResult$$1[j$$3];
    introspect(JAM.policy.p15) {
      var v1092 = v82.replace(/=/g, "")
    }
    geneticCodeMatchResult$$1[j$$3] = v1092;
    j$$3++;
    var v454 = arrayOfPatterns$$4.length;
    v83 = j$$3 < v454;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v455 = sequence$$3.length;
  var v84 = "Results for " + v455;
  var stringToReturn$$2 = v84 + " residue sequence ";
  introspect(JAM.policy.p17) {
    var v456 = fastaSequenceTitle$$1.search(/[^\s]/)
  }
  var v86 = v456 != -1;
  if (v86) {
    var v457 = stringToReturn$$2 + '"';
    var v85 = v457 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v85 + '"';
  }
  var v458 = stringToReturn$$2 + ' starting "';
  introspect(JAM.policy.p13) {
    var v459 = sequence$$3.substring(0, 10)
  }
  var v87 = v458 + v459;
  stringToReturn$$2 = v87 + '"';
  var v88 = '<div class="info">' + stringToReturn$$2;
  return v88 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v703 = "Results for " + topology;
  var v460 = v703 + " ";
  var v461 = sequence$$4.length;
  var v89 = v460 + v461;
  var stringToReturn$$3 = v89 + " residue sequence ";
  introspect(JAM.policy.p17) {
    var v462 = fastaSequenceTitle$$2.search(/[^\s]/)
  }
  var v91 = v462 != -1;
  if (v91) {
    var v463 = stringToReturn$$3 + '"';
    var v90 = v463 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v90 + '"';
  }
  var v464 = stringToReturn$$3 + ' starting "';
  introspect(JAM.policy.p13) {
    var v465 = sequence$$4.substring(0, 10)
  }
  var v92 = v464 + v465;
  stringToReturn$$3 = v92 + '"';
  var v93 = '<div class="info">' + stringToReturn$$3;
  return v93 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v466 = sequenceOne$$1.length;
  var v94 = "Alignment results for " + v466;
  var stringToReturn$$4 = v94 + " residue sequence ";
  introspect(JAM.policy.p17) {
    var v467 = fastaSequenceTitleOne$$1.search(/[^\s]/)
  }
  var v96 = v467 != -1;
  if (v96) {
    var v468 = stringToReturn$$4 + '"';
    var v95 = v468 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v95 + '"';
  }
  var v469 = stringToReturn$$4 + ' starting "';
  introspect(JAM.policy.p13) {
    var v470 = sequenceOne$$1.substring(0, 10)
  }
  var v97 = v469 + v470;
  stringToReturn$$4 = v97 + '"\n';
  var v471 = stringToReturn$$4 + "and ";
  var v472 = sequenceTwo$$1.length;
  var v98 = v471 + v472;
  stringToReturn$$4 = v98 + " residue sequence ";
  introspect(JAM.policy.p17) {
    var v473 = fastaSequenceTitleTwo$$1.search(/[^\s]/)
  }
  var v100 = v473 != -1;
  if (v100) {
    var v474 = stringToReturn$$4 + '"';
    var v99 = v474 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v99 + '"';
  }
  var v475 = stringToReturn$$4 + ' starting "';
  introspect(JAM.policy.p13) {
    var v476 = sequenceTwo$$1.substring(0, 10)
  }
  var v101 = v475 + v476;
  stringToReturn$$4 = v101 + '"';
  var v102 = '<div class="info">' + stringToReturn$$4;
  return v102 + "</div>\n";
}
function getRandomSequence(lengthOut) {
  var components = ["A", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "Y"];
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v104 = j$$4 < lengthOut;
  for (;v104;) {
    var v477 = Math.random();
    var v478 = components.length;
    var v103 = v477 * v478;
    introspect(JAM.policy.p17) {
      tempNum = Math.floor(v103);
    }
    tempChar = components[tempNum];
    introspect(JAM.policy.p16) {
      sequenceArray.push(tempChar);
    }
    j$$4++;
    v104 = j$$4 < lengthOut;
  }
  introspect(JAM.policy.p11) {
    return sequenceArray.join("");
  }
}
function getSequenceFromFasta(sequenceRecord) {
  introspect(JAM.policy.p17) {
    var v479 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v105 = v479 != -1;
  if (v105) {
    introspect(JAM.policy.p15) {
      sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "");
    }
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  introspect(JAM.policy.p17) {
    var v480 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v107 = v480 != -1;
  if (v107) {
    introspect(JAM.policy.p15) {
      var v106 = sequenceRecord$$1.match(/\>[^\f\n\r]+[\f\n\r]/, "")
    }
    fastaTitle = v106.toString();
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
  introspect(JAM.policy.p17) {
    var v1065 = expressionToCheck.search(/\[[A-Za-z\|]*\[/)
  }
  var v1058 = v1065 != -1;
  var v1067 = !v1058;
  if (v1067) {
    introspect(JAM.policy.p17) {
      var v1066 = expressionToCheck.search(/\][A-Za-z\|]*\]/)
    }
    v1058 = v1066 != -1;
  }
  var v1049 = v1058;
  var v1060 = !v1049;
  if (v1060) {
    introspect(JAM.policy.p17) {
      var v1059 = expressionToCheck.search(/\[\]/)
    }
    v1049 = v1059 != -1;
  }
  var v1039 = v1049;
  var v1051 = !v1039;
  if (v1051) {
    introspect(JAM.policy.p17) {
      var v1050 = expressionToCheck.search(/\/[A-Za-z\|]*\]/)
    }
    v1039 = v1050 != -1;
  }
  var v1027 = v1039;
  var v1041 = !v1027;
  if (v1041) {
    introspect(JAM.policy.p17) {
      var v1040 = expressionToCheck.search(/\[[A-Za-z\|]*\//)
    }
    v1027 = v1040 != -1;
  }
  var v1008 = v1027;
  var v1029 = !v1008;
  if (v1029) {
    introspect(JAM.policy.p17) {
      var v1028 = expressionToCheck.search(/\|\|/)
    }
    v1008 = v1028 != -1;
  }
  var v973 = v1008;
  var v1010 = !v973;
  if (v1010) {
    introspect(JAM.policy.p17) {
      var v1009 = expressionToCheck.search(/\/\|/)
    }
    v973 = v1009 != -1;
  }
  var v917 = v973;
  var v975 = !v917;
  if (v975) {
    introspect(JAM.policy.p17) {
      var v974 = expressionToCheck.search(/\|\//)
    }
    v917 = v974 != -1;
  }
  var v826 = v917;
  var v919 = !v826;
  if (v919) {
    introspect(JAM.policy.p17) {
      var v918 = expressionToCheck.search(/\[.\]/)
    }
    v826 = v918 != -1;
  }
  var v704 = v826;
  var v828 = !v704;
  if (v828) {
    introspect(JAM.policy.p17) {
      var v827 = expressionToCheck.search(/\</)
    }
    v704 = v827 != -1;
  }
  var v481 = v704;
  var v706 = !v481;
  if (v706) {
    introspect(JAM.policy.p17) {
      var v705 = expressionToCheck.search(/\>/)
    }
    v481 = v705 != -1;
  }
  var v108 = v481;
  if (v108) {
    return false;
  }
  return true;
}
function openForm() {
  var v109 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v109.write('<form action="">\n');
  }
  return true;
}
function openPre() {
  var v110 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v110.write("<pre>");
  }
  var v111 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v111.write('<div class="pre">');
  }
  return;
}
function openTextArea() {
  var v112 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v112.write('<br /><textarea rows="6" cols="61">\n');
  }
  return true;
}
function openWindow() {
  var title$$6 = "Range Extractor Protein";
  _openWindow(title$$6);
  return;
}
function _openWindow(title$$7) {
  var isColor = true;
  introspect(JAM.policy.p14) {
    outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  }
  outputWindow.focus();
  var v113 = outputWindow.document;
  var v829 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v707 = v829 + "<head>\n";
  var v482 = v707 + "<title>Sequence Manipulation Suite</title>\n";
  var v114 = v482 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  introspect(JAM.policy.p16) {
    v113.write(v114);
  }
  if (isColor) {
    var v115 = outputWindow.document;
    var v1080 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1076 = v1080 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1072 = v1076 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1068 = v1072 + "div.info {font-weight: bold}\n";
    var v1061 = v1068 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1052 = v1061 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v1042 = v1052 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v1030 = v1042 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1011 = v1030 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v976 = v1011 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v920 = v976 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v830 = v920 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v708 = v830 + "td.many {color: #000000}\n";
    var v483 = v708 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v116 = v483 + "</style>\n";
    introspect(JAM.policy.p16) {
      v115.write(v116);
    }
  } else {
    var v117 = outputWindow.document;
    var v1084 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1081 = v1084 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1077 = v1081 + "div.title {display: none}\n";
    var v1073 = v1077 + "div.info {font-weight: bold}\n";
    var v1069 = v1073 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1062 = v1069 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1053 = v1062 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v1043 = v1053 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1031 = v1043 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1012 = v1031 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v977 = v1012 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v921 = v977 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v831 = v921 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v709 = v831 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v484 = v709 + "img {display: none}\n";
    var v118 = v484 + "</style>\n";
    introspect(JAM.policy.p16) {
      v117.write(v118);
    }
  }
  var v119 = outputWindow.document;
  var v832 = "</head>\n" + '<body class="main">\n';
  var v710 = v832 + '<div class="title">';
  var v485 = v710 + title$$7;
  var v120 = v485 + " results</div>\n";
  introspect(JAM.policy.p16) {
    v119.write(v120);
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
  var v121 = outputWindow.document;
  var v833 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v711 = v833 + "<head>\n";
  var v486 = v711 + "<title>Sequence Manipulation Suite</title>\n";
  var v122 = v486 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  introspect(JAM.policy.p16) {
    v121.write(v122);
  }
  if (isBackground) {
    var v123 = outputWindow.document;
    var v1082 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1078 = v1082 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1074 = v1078 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1070 = v1074 + "div.info {font-weight: bold}\n";
    var v1063 = v1070 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v1054 = v1063 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v1044 = v1054 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v1032 = v1044 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v1013 = v1032 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v978 = v1013 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v922 = v978 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v834 = v922 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v712 = v834 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v487 = v712 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v124 = v487 + "</style>\n";
    introspect(JAM.policy.p16) {
      v123.write(v124);
    }
  } else {
    var v125 = outputWindow.document;
    var v1086 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1085 = v1086 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1083 = v1085 + "div.title {display: none}\n";
    var v1079 = v1083 + "div.info {font-weight: bold}\n";
    var v1075 = v1079 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1071 = v1075 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v1064 = v1071 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v1055 = v1064 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v1045 = v1055 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v1033 = v1045 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v1014 = v1033 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v979 = v1014 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v923 = v979 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v835 = v923 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v713 = v835 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v488 = v713 + "img {display: none}\n";
    var v126 = v488 + "</style>\n";
    introspect(JAM.policy.p16) {
      v125.write(v126);
    }
  }
  var v127 = outputWindow.document;
  var v836 = "</head>\n" + '<body class="main">\n';
  var v714 = v836 + '<div class="title">';
  var v489 = v714 + title$$9;
  var v128 = v489 + " results</div>\n";
  introspect(JAM.policy.p16) {
    v127.write(v128);
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
function removeNonProteinAllowDegen() {
  var sequence$$10 = newProtein;
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
  introspect(JAM.policy.p17) {
    var v490 = dnaSequence$$1.search(/./)
  }
  var v129 = v490 != -1;
  if (v129) {
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
  var v130 = j$$5 < lengthOfColumn;
  for (;v130;) {
    tempString = tempString + " ";
    j$$5++;
    v130 = j$$5 < lengthOfColumn;
  }
  var v131 = tempString + theNumber;
  theNumber = v131 + " ";
  var v132 = sequenceToAppend + theNumber;
  sequenceToAppend = v132 + tabIn;
  return sequenceToAppend;
}
function testScript() {
  function v1(str$$7, p1$$1, offset$$9, s$$3) {
    return p1$$1 + "X";
  }
  var testArray = new Array;
  var testString = "1234567890";
  introspect(JAM.policy.p16) {
    testArray.push(testString);
  }
  var v491 = testArray[0];
  var v133 = v491 != testString;
  if (v133) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  introspect(JAM.policy.p16) {
    var v492 = testString.search(re$$2)
  }
  var v134 = v492 == -1;
  if (v134) {
    alert("Regular expression 'm' flag not supported. See browser compatibility page.");
    return false;
  }
  var caughtException = false;
  try {
    re$$2 = eval("Exception handling not supported. Check browser compatibility page.");
  } catch (e$$4) {
    caughtException = true;
  }
  var v135 = !caughtException;
  if (v135) {
    alert("Exception handling not supported. See browser compatibility page.");
  }
  testString = "123";
  introspect(JAM.policy.p15) {
    testString = testString.replace(/(\d)/g, v1);
  }
  var v136 = testString != "1X2X3X";
  if (v136) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false;
  }
  var testNum = 2489.8237;
  introspect(JAM.policy.p9) {
    var v493 = testNum.toFixed(3)
  }
  var v137 = v493 != 2489.824;
  if (v137) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  introspect(JAM.policy.p9) {
    var v494 = testNum.toPrecision(5)
  }
  var v138 = v494 != 2489.8;
  if (v138) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  introspect(JAM.policy.p17) {
    var v495 = theNumber$$1.search(/\d/)
  }
  var v139 = v495 == -1;
  if (v139) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  introspect(JAM.policy.p17) {
    var v924 = emblFile.search(/ID/)
  }
  var v837 = v924 == -1;
  var v926 = !v837;
  if (v926) {
    introspect(JAM.policy.p17) {
      var v925 = emblFile.search(/AC/)
    }
    v837 = v925 == -1;
  }
  var v715 = v837;
  var v839 = !v715;
  if (v839) {
    introspect(JAM.policy.p17) {
      var v838 = emblFile.search(/DE/)
    }
    v715 = v838 == -1;
  }
  var v496 = v715;
  var v717 = !v496;
  if (v717) {
    introspect(JAM.policy.p17) {
      var v716 = emblFile.search(/SQ/)
    }
    v496 = v716 == -1;
  }
  var v140 = v496;
  if (v140) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  introspect(JAM.policy.p17) {
    var v497 = theNumber$$2.search(/\d/)
  }
  var v141 = v497 == -1;
  if (v141) {
    alert("Please enter a number.");
    return false;
  }
  var v143 = theNumber$$2 > maxInput$$2;
  if (v143) {
    var v498 = "Please enter a number less than or equal to " + maxInput$$2;
    var v142 = v498 + ".";
    alert(v142);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  introspect(JAM.policy.p17) {
    var v499 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i)
  }
  var v144 = v499 != -1;
  if (v144) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  introspect(JAM.policy.p17) {
    var v500 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i)
  }
  var v145 = v500 != -1;
  if (v145) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  introspect(JAM.policy.p17) {
    var v927 = genBankFile.search(/LOCUS/)
  }
  var v840 = v927 == -1;
  var v929 = !v840;
  if (v929) {
    introspect(JAM.policy.p17) {
      var v928 = genBankFile.search(/DEFINITION/)
    }
    v840 = v928 == -1;
  }
  var v718 = v840;
  var v842 = !v718;
  if (v842) {
    introspect(JAM.policy.p17) {
      var v841 = genBankFile.search(/ACCESSION/)
    }
    v718 = v841 == -1;
  }
  var v501 = v718;
  var v720 = !v501;
  if (v720) {
    introspect(JAM.policy.p17) {
      var v719 = genBankFile.search(/ORIGIN/)
    }
    v501 = v719 == -1;
  }
  var v146 = v501;
  if (v146) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  introspect(JAM.policy.p17) {
    var v930 = genBankFile$$1.search(/LOCUS/)
  }
  var v843 = v930 == -1;
  var v932 = !v843;
  if (v932) {
    introspect(JAM.policy.p17) {
      var v931 = genBankFile$$1.search(/DEFINITION/)
    }
    v843 = v931 == -1;
  }
  var v721 = v843;
  var v845 = !v721;
  if (v845) {
    introspect(JAM.policy.p17) {
      var v844 = genBankFile$$1.search(/ACCESSION/)
    }
    v721 = v844 == -1;
  }
  var v502 = v721;
  var v723 = !v502;
  if (v723) {
    introspect(JAM.policy.p17) {
      var v722 = genBankFile$$1.search(/ORIGIN/)
    }
    v502 = v722 == -1;
  }
  var v147 = v502;
  if (v147) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  introspect(JAM.policy.p17) {
    var v503 = genBankFile$$1.search(/FEATURES {13}/)
  }
  var v148 = v503 == -1;
  if (v148) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  introspect(JAM.policy.p17) {
    var v933 = emblFile$$1.search(/ID/)
  }
  var v846 = v933 == -1;
  var v935 = !v846;
  if (v935) {
    introspect(JAM.policy.p17) {
      var v934 = emblFile$$1.search(/AC/)
    }
    v846 = v934 == -1;
  }
  var v724 = v846;
  var v848 = !v724;
  if (v848) {
    introspect(JAM.policy.p17) {
      var v847 = emblFile$$1.search(/DE/)
    }
    v724 = v847 == -1;
  }
  var v504 = v724;
  var v726 = !v504;
  if (v726) {
    introspect(JAM.policy.p17) {
      var v725 = emblFile$$1.search(/SQ/)
    }
    v504 = v725 == -1;
  }
  var v149 = v504;
  if (v149) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  introspect(JAM.policy.p17) {
    var v505 = emblFile$$1.search(/^FT/m)
  }
  var v150 = v505 == -1;
  if (v150) {
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
  var v157 = i$$5 < stopBase;
  for (;v157;) {
    var v151 = i$$5 + 1;
    lineOfText = rightNum(v151, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v506 = basePerLine / groupSize;
    var v154 = j$$6 <= v506;
    for (;v154;) {
      var v153 = k < groupSize;
      for (;v153;) {
        var v507 = k + i$$5;
        introspect(JAM.policy.p16) {
          var v152 = text$$10.charAt(v507)
        }
        lineOfText = lineOfText + v152;
        k = k + 1;
        v153 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v508 = basePerLine / groupSize;
      v154 = j$$6 <= v508;
    }
    var v155 = outputWindow.document;
    var v156 = lineOfText + "\n";
    introspect(JAM.policy.p16) {
      v155.write(v156);
    }
    lineOfText = "";
    v157 = i$$5 < stopBase;
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
    var v509 = adjustment < 0;
    if (v509) {
      v509 = adjusted >= 0;
    }
    var v158 = v509;
    if (v158) {
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
  var v189 = i$$6 < stopBase$$2;
  for (;v189;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v510 = basePerLine$$2 / groupSize$$2;
    var v165 = j$$7 <= v510;
    for (;v165;) {
      var v161 = k$$1 < groupSize$$2;
      for (;v161;) {
        var v511 = i$$6 + k$$1;
        var v159 = v511 >= stopBase$$2;
        if (v159) {
          break;
        }
        var v512 = k$$1 + i$$6;
        introspect(JAM.policy.p16) {
          var v160 = text$$12.charAt(v512)
        }
        lineOfText$$1 = lineOfText$$1 + v160;
        k$$1 = k$$1 + 1;
        v161 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v163 = numberPosition$$1 == "above";
      if (v163) {
        var v513 = adjustNumbering(i$$6, numberingAdjustment);
        var v162 = rightNum(v513, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v162;
      }
      var v164 = i$$6 >= stopBase$$2;
      if (v164) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v514 = basePerLine$$2 / groupSize$$2;
      v165 = j$$7 <= v514;
    }
    var v188 = numberPosition$$1 == "left";
    if (v188) {
      var v166 = outputWindow.document;
      var v849 = adjustNumbering(lineNum, numberingAdjustment);
      var v727 = rightNum(v849, "", 8, tabIn$$3);
      var v515 = v727 + lineOfText$$1;
      var v167 = v515 + "\n";
      introspect(JAM.policy.p16) {
        v166.write(v167);
      }
      var v171 = strands$$1 == "two";
      if (v171) {
        var v168 = outputWindow.document;
        var v850 = adjustNumbering(lineNum, numberingAdjustment);
        var v728 = rightNum(v850, "", 8, tabIn$$3);
        var v729 = complement(lineOfText$$1);
        var v516 = v728 + v729;
        var v169 = v516 + "\n";
        introspect(JAM.policy.p16) {
          v168.write(v169);
        }
        var v170 = outputWindow.document;
        introspect(JAM.policy.p11) {
          v170.write("\n");
        }
      }
    } else {
      var v187 = numberPosition$$1 == "right";
      if (v187) {
        var v172 = outputWindow.document;
        var v730 = adjustNumbering(i$$6, numberingAdjustment);
        var v517 = lineOfText$$1 + v730;
        var v173 = v517 + "\n";
        introspect(JAM.policy.p16) {
          v172.write(v173);
        }
        var v177 = strands$$1 == "two";
        if (v177) {
          var v174 = outputWindow.document;
          var v731 = complement(lineOfText$$1);
          var v732 = adjustNumbering(i$$6, numberingAdjustment);
          var v518 = v731 + v732;
          var v175 = v518 + "\n";
          introspect(JAM.policy.p16) {
            v174.write(v175);
          }
          var v176 = outputWindow.document;
          introspect(JAM.policy.p11) {
            v176.write("\n");
          }
        }
      } else {
        var v186 = numberPosition$$1 == "above";
        if (v186) {
          var v178 = outputWindow.document;
          var v179 = aboveNum + "\n";
          introspect(JAM.policy.p16) {
            v178.write(v179);
          }
          var v180 = outputWindow.document;
          var v181 = lineOfText$$1 + "\n";
          introspect(JAM.policy.p16) {
            v180.write(v181);
          }
          var v185 = strands$$1 == "two";
          if (v185) {
            var v182 = outputWindow.document;
            var v519 = complement(lineOfText$$1);
            var v183 = v519 + "\n";
            introspect(JAM.policy.p16) {
              v182.write(v183);
            }
            var v184 = outputWindow.document;
            introspect(JAM.policy.p11) {
              v184.write("\n");
            }
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v189 = i$$6 < stopBase$$2;
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
  var v208 = i$$7 < stopBase$$3;
  for (;v208;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v520 = basePerLine$$3 / groupSize$$3;
    var v196 = j$$8 <= v520;
    for (;v196;) {
      var v192 = k$$2 < groupSize$$3;
      for (;v192;) {
        var v521 = i$$7 + k$$2;
        var v190 = v521 >= stopBase$$3;
        if (v190) {
          break;
        }
        var v522 = k$$2 + i$$7;
        introspect(JAM.policy.p16) {
          var v191 = text$$13.charAt(v522)
        }
        lineOfText$$2 = lineOfText$$2 + v191;
        k$$2 = k$$2 + 1;
        v192 = k$$2 < groupSize$$3;
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v194 = numberPosition$$2 == "above";
      if (v194) {
        var v193 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = aboveNum$$1 + v193;
      }
      var v195 = i$$7 >= stopBase$$3;
      if (v195) {
        break;
      }
      k$$2 = 0;
      j$$8++;
      var v523 = basePerLine$$3 / groupSize$$3;
      v196 = j$$8 <= v523;
    }
    var v207 = numberPosition$$2 == "left";
    if (v207) {
      var v197 = outputWindow.document;
      var v733 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v524 = v733 + lineOfText$$2;
      var v198 = v524 + "\n";
      introspect(JAM.policy.p16) {
        v197.write(v198);
      }
    } else {
      var v206 = numberPosition$$2 == "right";
      if (v206) {
        var v199 = outputWindow.document;
        var v525 = lineOfText$$2 + i$$7;
        var v200 = v525 + "\n";
        introspect(JAM.policy.p16) {
          v199.write(v200);
        }
      } else {
        var v205 = numberPosition$$2 == "above";
        if (v205) {
          var v201 = outputWindow.document;
          var v202 = aboveNum$$1 + "\n";
          introspect(JAM.policy.p16) {
            v201.write(v202);
          }
          var v203 = outputWindow.document;
          var v204 = lineOfText$$2 + "\n";
          introspect(JAM.policy.p16) {
            v203.write(v204);
          }
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v208 = i$$7 < stopBase$$3;
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
  var v851 = sequence$$13.length;
  var v734 = v851 <= firstIndexToMutate;
  var v852 = !v734;
  if (v852) {
    v734 = lastIndexToMutate < 0;
  }
  var v526 = v734;
  var v735 = !v526;
  if (v735) {
    v526 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v209 = v526;
  if (v209) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v217 = i$$8 < numMut;
  for (;v217;) {
    maxNum = sequence$$13.length;
    var v527 = Math.random();
    var v210 = v527 * maxNum;
    introspect(JAM.policy.p17) {
      randNum = Math.floor(v210);
    }
    var v528 = randNum < firstIndexToMutate;
    var v736 = !v528;
    if (v736) {
      v528 = randNum > lastIndexToMutate;
    }
    var v211 = v528;
    if (v211) {
      numMut++;
      i$$8++;
      v217 = i$$8 < numMut;
      continue;
    }
    introspect(JAM.policy.p17) {
      currentChar = sequence$$13.charAt(randNum);
    }
    needNewChar = true;
    for (;needNewChar;) {
      var v529 = Math.random();
      var v530 = components$$1.length;
      var v212 = v529 * v530;
      introspect(JAM.policy.p17) {
        componentsIndex = Math.round(v212);
      }
      var v531 = components$$1.length;
      var v213 = componentsIndex == v531;
      if (v213) {
        componentsIndex = 0;
      }
      var v532 = components$$1[componentsIndex];
      var v214 = v532 != currentChar;
      if (v214) {
        needNewChar = false;
      }
    }
    introspect(JAM.policy.p13) {
      var v533 = sequence$$13.substring(0, randNum)
    }
    var v534 = components$$1[componentsIndex];
    var v215 = v533 + v534;
    var v535 = randNum + 1;
    var v536 = sequence$$13.length;
    introspect(JAM.policy.p27) {
      var v216 = sequence$$13.substring(v535, v536)
    }
    sequence$$13 = v215 + v216;
    i$$8++;
    v217 = i$$8 < numMut;
  }
  var v218 = outputWindow.document;
  var v219 = addReturns(sequence$$13);
  introspect(JAM.policy.p16) {
    v218.write(v219);
  }
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v224 = j$$9 < lengthOut$$1;
  for (;v224;) {
    var v537 = Math.random();
    var v538 = components$$2.length;
    var v220 = v537 * v538;
    introspect(JAM.policy.p17) {
      tempNum$$1 = Math.floor(v220);
    }
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v539 = sequence$$14.length;
    var v223 = v539 == 60;
    if (v223) {
      var v221 = outputWindow.document;
      var v222 = sequence$$14 + "\n";
      introspect(JAM.policy.p16) {
        v221.write(v222);
      }
      sequence$$14 = "";
    }
    j$$9++;
    v224 = j$$9 < lengthOut$$1;
  }
  var v225 = outputWindow.document;
  var v226 = sequence$$14 + "\n";
  introspect(JAM.policy.p16) {
    v225.write(v226);
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
  var v230 = dnaConformation == "circular";
  if (v230) {
    introspect(JAM.policy.p13) {
      var v227 = sequence$$15.substring(0, lookAhead)
    }
    shiftValue = v227.length;
    var v853 = sequence$$15.length;
    var v737 = v853 - lookAhead;
    var v738 = sequence$$15.length;
    introspect(JAM.policy.p27) {
      var v540 = sequence$$15.substring(v737, v738)
    }
    var v228 = v540 + sequence$$15;
    introspect(JAM.policy.p13) {
      var v229 = sequence$$15.substring(0, lookAhead)
    }
    sequence$$15 = v228 + v229;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v231 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v231.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  }
  var v232 = outputWindow.document;
  var v854 = '<tr><td class="title" width="200px">' + "Site:";
  var v739 = v854 + '</td><td class="title">';
  var v541 = v739 + "Positions:";
  var v233 = v541 + "</td></tr>\n";
  introspect(JAM.policy.p16) {
    v232.write(v233);
  }
  var i$$9 = 0;
  var v542 = arrayOfItems.length;
  var v249 = i$$9 < v542;
  for (;v249;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v543 = arrayOfItems[i$$9];
    introspect(JAM.policy.p17) {
      var v234 = v543.match(/\/.+\//)
    }
    matchExp = v234 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    var v855 = arrayOfItems[i$$9];
    introspect(JAM.policy.p17) {
      var v740 = v855.match(/\)\D*\d+/)
    }
    var v544 = v740.toString();
    introspect(JAM.policy.p15) {
      var v235 = v544.replace(/\)\D*/, "")
    }
    cutDistance = parseFloat(v235);
    introspect(JAM.policy.p16) {
      var v241 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    for (;v241;) {
      var v236 = matchExp.lastIndex;
      matchPosition = v236 - cutDistance;
      var v545 = matchPosition >= lowerLimit;
      if (v545) {
        v545 = matchPosition < upperLimit;
      }
      var v239 = v545;
      if (v239) {
        timesFound++;
        var v237 = tempString$$1 + ", ";
        var v546 = matchPosition - shiftValue;
        var v238 = v546 + 1;
        tempString$$1 = v237 + v238;
      }
      var v547 = matchExp.lastIndex;
      var v741 = RegExp.lastMatch;
      var v548 = v741.length;
      var v240 = v547 - v548;
      matchExp.lastIndex = v240 + 1;
      introspect(JAM.policy.p16) {
        v241 = matchArray$$1 = matchExp.exec(sequence$$15);
      }
    }
    introspect(JAM.policy.p17) {
      var v549 = tempString$$1.search(/\d/)
    }
    var v242 = v549 != -1;
    if (v242) {
      introspect(JAM.policy.p15) {
        tempString$$1 = tempString$$1.replace(/none,\s*/, "");
      }
    }
    var v246 = timesFound == 0;
    if (v246) {
      backGroundClass = "none";
    } else {
      var v245 = timesFound == 1;
      if (v245) {
        backGroundClass = "one";
      } else {
        var v244 = timesFound == 2;
        if (v244) {
          backGroundClass = "two";
        } else {
          var v243 = timesFound == 3;
          if (v243) {
            backGroundClass = "three";
          } else {
            backGroundClass = "many";
          }
        }
      }
    }
    var v247 = outputWindow.document;
    var v1034 = '<tr><td class="' + backGroundClass;
    var v1015 = v1034 + '">';
    var v1056 = arrayOfItems[i$$9];
    introspect(JAM.policy.p17) {
      var v1046 = v1056.match(/\([^\(]+\)/)
    }
    var v1035 = v1046.toString();
    introspect(JAM.policy.p15) {
      var v1016 = v1035.replace(/\(|\)/g, "")
    }
    var v980 = v1015 + v1016;
    var v936 = v980 + '</td><td class="';
    var v856 = v936 + backGroundClass;
    var v742 = v856 + '">';
    var v550 = v742 + tempString$$1;
    var v248 = v550 + "</td></tr>\n";
    introspect(JAM.policy.p16) {
      v247.write(v248);
    }
    timesFound = 0;
    i$$9++;
    var v551 = arrayOfItems.length;
    v249 = i$$9 < v551;
  }
  var v250 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v250.write("</tbody></table>\n");
  }
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v251 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v251.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  }
  var v252 = outputWindow.document;
  var v981 = '<tr><td class="title">' + "Pattern:";
  var v937 = v981 + '</td><td class="title">';
  var v857 = v937 + "Times found:";
  var v743 = v857 + '</td><td class="title">';
  var v552 = v743 + "Percentage:";
  var v253 = v552 + "</td></tr>\n";
  introspect(JAM.policy.p16) {
    v252.write(v253);
  }
  var i$$10 = 0;
  var v553 = arrayOfItems$$1.length;
  var v262 = i$$10 < v553;
  for (;v262;) {
    var tempNumber = 0;
    var v554 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p17) {
      var v254 = v554.match(/\/[^\/]+\//)
    }
    var matchExp$$1 = v254 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    introspect(JAM.policy.p16) {
      var v555 = sequence$$16.search(matchExp$$1)
    }
    var v256 = v555 != -1;
    if (v256) {
      introspect(JAM.policy.p16) {
        var v255 = sequence$$16.match(matchExp$$1)
      }
      tempNumber = v255.length;
    }
    var percentage = 0;
    var v744 = originalLength + 1;
    var v938 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p17) {
      var v858 = v938.match(/\d+/)
    }
    var v745 = parseFloat(v858);
    var v556 = v744 - v745;
    var v259 = v556 > 0;
    if (v259) {
      var v257 = 100 * tempNumber;
      var v557 = originalLength + 1;
      var v859 = arrayOfItems$$1[i$$10];
      introspect(JAM.policy.p17) {
        var v746 = v859.match(/\d+/)
      }
      var v558 = parseFloat(v746);
      var v258 = v557 - v558;
      percentage = v257 / v258;
    }
    var v260 = outputWindow.document;
    var v1057 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p17) {
      var v1047 = v1057.match(/\([^\(]+\)\b/)
    }
    var v1036 = v1047.toString();
    introspect(JAM.policy.p15) {
      var v1017 = v1036.replace(/\(|\)/g, "")
    }
    var v982 = "<tr><td>" + v1017;
    var v939 = v982 + "</td><td>";
    var v860 = v939 + tempNumber;
    var v747 = v860 + "</td><td>";
    introspect(JAM.policy.p9) {
      var v748 = percentage.toFixed(2)
    }
    var v559 = v747 + v748;
    var v261 = v559 + "</td></tr>\n";
    introspect(JAM.policy.p16) {
      v260.write(v261);
    }
    i$$10++;
    var v560 = arrayOfItems$$1.length;
    v262 = i$$10 < v560;
  }
  var v263 = outputWindow.document;
  introspect(JAM.policy.p11) {
    v263.write("</tbody></table>\n");
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
  var v561 = sequence$$17.length;
  var v270 = v561 > 0;
  for (;v270;) {
    maxNum$$1 = sequence$$17.length;
    var v562 = Math.random();
    var v264 = v562 * maxNum$$1;
    introspect(JAM.policy.p17) {
      randNum$$1 = Math.floor(v264);
    }
    introspect(JAM.policy.p17) {
      tempChar$$2 = sequence$$17.charAt(randNum$$1);
    }
    tempSeq = tempSeq + tempChar$$2;
    introspect(JAM.policy.p13) {
      tempString1 = sequence$$17.substring(0, randNum$$1);
    }
    var v265 = randNum$$1 + 1;
    var v266 = sequence$$17.length;
    introspect(JAM.policy.p15) {
      tempString2 = sequence$$17.substring(v265, v266);
    }
    sequence$$17 = tempString1 + tempString2;
    var v563 = tempSeq.length;
    var v269 = v563 == 60;
    if (v269) {
      var v267 = outputWindow.document;
      var v268 = tempSeq + "\n";
      introspect(JAM.policy.p16) {
        v267.write(v268);
      }
      tempSeq = "";
    }
    var v564 = sequence$$17.length;
    v270 = v564 > 0;
  }
  var v271 = outputWindow.document;
  var v272 = tempSeq + "\n";
  introspect(JAM.policy.p16) {
    v271.write(v272);
  }
  return true;
}
function rangeExtract() {
  var theDocument = document;
  var newDna = "";
  var maxInput$$3 = 5E5;
  var matchFound = false;
  var ranges = new Array;
  var v565 = testScript();
  var v273 = v565 == false;
  if (v273) {
    return;
  }
  var v1037 = theDocument.forms;
  var v1018 = v1037[0];
  var v983 = v1018.elements;
  var v940 = v983[0];
  var v861 = checkFormElement(v940);
  var v749 = v861 == false;
  var v863 = !v749;
  if (v863) {
    var v1048 = theDocument.forms;
    var v1038 = v1048[0];
    var v1019 = v1038.elements;
    var v984 = v1019[0];
    var v941 = v984.value;
    var v862 = checkSequenceLength(v941, maxInput$$3);
    v749 = v862 == false;
  }
  var v566 = v749;
  var v751 = !v566;
  if (v751) {
    var v1020 = theDocument.forms;
    var v985 = v1020[0];
    var v942 = v985.elements;
    var v864 = v942[1];
    var v750 = checkFormElement(v864);
    v566 = v750 == false;
  }
  var v274 = v566;
  if (v274) {
    return;
  }
  var v943 = theDocument.forms;
  var v865 = v943[0];
  var v752 = v865.elements;
  var v567 = v752[1];
  var v275 = v567.value;
  introspect(JAM.policy.p17) {
    var arrayOfRanges = v275.split(/,/)
  }
  var arrayOfStartAndEnd;
  var i$$11 = 0;
  var v568 = arrayOfRanges.length;
  var v281 = i$$11 < v568;
  for (;v281;) {
    var v276 = arrayOfRanges[i$$11];
    introspect(JAM.policy.p17) {
      arrayOfStartAndEnd = v276.split(/\.\./);
    }
    var v569 = arrayOfStartAndEnd.length;
    var v280 = v569 == 1;
    if (v280) {
      matchFound = true;
      var v570 = arrayOfStartAndEnd[0];
      var v571 = arrayOfStartAndEnd[0];
      var v277 = new Range(v570, v571);
      introspect(JAM.policy.p16) {
        ranges.push(v277);
      }
    } else {
      var v572 = arrayOfStartAndEnd.length;
      var v279 = v572 == 2;
      if (v279) {
        matchFound = true;
        var v573 = arrayOfStartAndEnd[0];
        var v574 = arrayOfStartAndEnd[1];
        var v278 = new Range(v573, v574);
        introspect(JAM.policy.p16) {
          ranges.push(v278);
        }
      }
    }
    i$$11++;
    var v575 = arrayOfRanges.length;
    v281 = i$$11 < v575;
  }
  var v282 = matchFound == false;
  if (v282) {
    alert("No ranges were entered.");
    return;
  }
  openWindow();
  openPre();
  var v944 = theDocument.forms;
  var v866 = v944[0];
  var v753 = v866.elements;
  var v576 = v753[0];
  var v283 = v576.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v283);
  i$$11 = 0;
  var v577 = arrayOfFasta$$1.length;
  var v289 = i$$11 < v577;
  for (;v289;) {
    var v284 = arrayOfFasta$$1[i$$11];
    newProtein = getSequenceFromFasta(v284);
    var v285 = arrayOfFasta$$1[i$$11];
    title = getTitleFromFasta(v285);
    newProtein = removeNonProteinAllowDegen();
    var v286 = outputWindow.document;
    var v287 = getFastaTitleFromTitleAndSequence();
    introspect(JAM.policy.p16) {
      v286.write(v287);
    }
    var v1021 = theDocument.forms;
    var v986 = v1021[0];
    var v945 = v986.elements;
    var v867 = v945[5];
    var v754 = v867.options;
    var v1022 = theDocument.forms;
    var v987 = v1022[0];
    var v946 = v987.elements;
    var v868 = v946[5];
    var v755 = v868.selectedIndex;
    var v578 = v754[v755];
    var v288 = v578.value;
    writeSequenceRanges(ranges, v288);
    i$$11++;
    var v579 = arrayOfFasta$$1.length;
    v289 = i$$11 < v579;
  }
  closePre();
  closeWindow();
  return;
}
function writeSequenceRanges(ranges$$1, segmentType) {
  var sequence$$18 = newProtein;
  var rangeGroup = new RangeGroup(segmentType);
  var v580 = sequence$$18.length;
  var v290 = v580 / 2;
  introspect(JAM.policy.p16) {
    var center_base = Math.round(v290)
  }
  var i$$12 = 0;
  var v581 = ranges$$1.length;
  var v304 = i$$12 < v581;
  for (;v304;) {
    var v291 = ranges$$1[i$$12];
    var v869 = ranges$$1[i$$12];
    var v756 = v869.start;
    var v582 = v756.toString();
    introspect(JAM.policy.p15) {
      var v1093 = v582.replace(/start|begin/gi, 1)
    }
    v291.start = v1093;
    var v292 = ranges$$1[i$$12];
    var v870 = ranges$$1[i$$12];
    var v757 = v870.start;
    var v583 = v757.toString();
    var v584 = sequence$$18.length;
    introspect(JAM.policy.p15) {
      var v1094 = v583.replace(/stop|end/gi, v584)
    }
    v292.start = v1094;
    var v293 = ranges$$1[i$$12];
    var v871 = ranges$$1[i$$12];
    var v758 = v871.start;
    var v585 = v758.toString();
    var v586 = sequence$$18.length;
    introspect(JAM.policy.p15) {
      var v1095 = v585.replace(/length/gi, v586)
    }
    v293.start = v1095;
    var v294 = ranges$$1[i$$12];
    var v872 = ranges$$1[i$$12];
    var v759 = v872.start;
    var v587 = v759.toString();
    introspect(JAM.policy.p15) {
      var v1096 = v587.replace(/middle|center|centre/gi, center_base)
    }
    v294.start = v1096;
    var v295 = ranges$$1[i$$12];
    var v873 = ranges$$1[i$$12];
    var v760 = v873.stop;
    var v588 = v760.toString();
    introspect(JAM.policy.p15) {
      var v1097 = v588.replace(/start|begin/gi, 1)
    }
    v295.stop = v1097;
    var v296 = ranges$$1[i$$12];
    var v874 = ranges$$1[i$$12];
    var v761 = v874.stop;
    var v589 = v761.toString();
    var v590 = sequence$$18.length;
    introspect(JAM.policy.p15) {
      var v1098 = v589.replace(/stop|end/gi, v590)
    }
    v296.stop = v1098;
    var v297 = ranges$$1[i$$12];
    var v875 = ranges$$1[i$$12];
    var v762 = v875.stop;
    var v591 = v762.toString();
    var v592 = sequence$$18.length;
    introspect(JAM.policy.p15) {
      var v1099 = v591.replace(/length/gi, v592)
    }
    v297.stop = v1099;
    var v298 = ranges$$1[i$$12];
    var v876 = ranges$$1[i$$12];
    var v763 = v876.stop;
    var v593 = v763.toString();
    introspect(JAM.policy.p15) {
      var v1100 = v593.replace(/middle|center|centre/gi, center_base)
    }
    v298.stop = v1100;
    try {
      var v299 = ranges$$1[i$$12];
      var v947 = ranges$$1[i$$12];
      var v877 = v947.start;
      var v764 = v877.toString();
      var v594 = eval(v764);
      var v1101 = parseInt(v594);
      v299.start = v1101;
    } catch (e$$5) {
      var v765 = ranges$$1[i$$12];
      var v595 = v765.start;
      var v300 = "Could not evaluate the following expression: " + v595;
      alert(v300);
      return;
    }
    try {
      var v301 = ranges$$1[i$$12];
      var v948 = ranges$$1[i$$12];
      var v878 = v948.stop;
      var v766 = v878.toString();
      var v596 = eval(v766);
      var v1102 = parseInt(v596);
      v301.stop = v1102;
    } catch (e$$6) {
      var v767 = ranges$$1[i$$12];
      var v597 = v767.stop;
      var v302 = "Could not evaluate the following expression: " + v597;
      alert(v302);
      return;
    }
    var v303 = ranges$$1[i$$12];
    introspect(JAM.policy.p16) {
      rangeGroup.addRange(v303);
    }
    i$$12++;
    var v598 = ranges$$1.length;
    v304 = i$$12 < v598;
  }
  introspect(JAM.policy.p16) {
    rangeGroup.writeRanges(sequence$$18);
  }
  return;
}
function getSequence(sequence$$19) {
  var problem = false;
  var warnings = new Array;
  var v599 = this.start;
  var v600 = this.stop;
  var v319 = v599 == v600;
  if (v319) {
    var v601 = this.start;
    var v306 = v601 < 1;
    if (v306) {
      problem = true;
      var v768 = this.start;
      var v602 = "position value of " + v768;
      var v305 = v602 + " is less than 1";
      introspect(JAM.policy.p16) {
        warnings.push(v305);
      }
    }
    var v603 = this.start;
    var v604 = sequence$$19.length;
    var v308 = v603 > v604;
    if (v308) {
      problem = true;
      var v769 = this.start;
      var v605 = "position value of " + v769;
      var v307 = v605 + " is greater than the sequence length";
      introspect(JAM.policy.p16) {
        warnings.push(v307);
      }
    }
  } else {
    var v606 = this.start;
    var v310 = v606 < 1;
    if (v310) {
      problem = true;
      var v770 = this.start;
      var v607 = "position value of " + v770;
      var v309 = v607 + " is less than 1";
      introspect(JAM.policy.p16) {
        warnings.push(v309);
      }
    }
    var v608 = this.stop;
    var v312 = v608 < 1;
    if (v312) {
      problem = true;
      var v771 = this.stop;
      var v609 = "position value of " + v771;
      var v311 = v609 + " is less than 1";
      introspect(JAM.policy.p16) {
        warnings.push(v311);
      }
    }
    var v610 = this.start;
    var v611 = sequence$$19.length;
    var v314 = v610 > v611;
    if (v314) {
      problem = true;
      var v772 = this.start;
      var v612 = "position value of " + v772;
      var v313 = v612 + " is greater than the sequence length";
      introspect(JAM.policy.p16) {
        warnings.push(v313);
      }
    }
    var v613 = this.stop;
    var v614 = sequence$$19.length;
    var v316 = v613 > v614;
    if (v316) {
      problem = true;
      var v773 = this.stop;
      var v615 = "position value of " + v773;
      var v315 = v615 + " is greater than the sequence length";
      introspect(JAM.policy.p16) {
        warnings.push(v315);
      }
    }
    var v616 = this.start;
    var v617 = this.stop;
    var v318 = v616 > v617;
    if (v318) {
      problem = true;
      var v879 = this.start;
      var v774 = "stop position is less than start position in range " + v879;
      var v618 = v774 + " to ";
      var v619 = this.stop;
      var v317 = v618 + v619;
      introspect(JAM.policy.p16) {
        warnings.push(v317);
      }
    }
  }
  if (problem) {
    introspect(JAM.policy.p11) {
      var v620 = warnings.join(",\n")
    }
    var v320 = "An entry was skipped because of the following:\n" + v620;
    alert(v320);
    return false;
  } else {
    var v621 = this.start;
    var v622 = this.stop;
    var v324 = v621 == v622;
    if (v324) {
      var v623 = this.start;
      var v321 = v623 - 1;
      introspect(JAM.policy.p16) {
        return sequence$$19.charAt(v321);
      }
    } else {
      var v624 = this.start;
      var v322 = v624 - 1;
      var v323 = this.stop;
      introspect(JAM.policy.p27) {
        return sequence$$19.substring(v322, v323);
      }
    }
  }
  return;
}
function getTitle() {
  var v625 = this.start;
  var v626 = this.stop;
  var v328 = v625 == v626;
  if (v328) {
    var v325 = this.start;
    return "&gt;residue " + v325;
  } else {
    var v775 = this.start;
    var v627 = "&gt;residue " + v775;
    var v326 = v627 + " to ";
    var v327 = this.stop;
    return v326 + v327;
  }
  return;
}
function Range(start$$4, stop) {
  this.start = start$$4;
  this.stop = stop;
  return;
}
function addRange(range$$5) {
  var v329 = this.ranges;
  introspect(JAM.policy.p16) {
    v329.push(range$$5);
  }
  return;
}
function writeRanges(sequence$$20) {
  function v9(str$$15, p1$$9, offset$$17, s$$11) {
    var v628 = p1$$9.length;
    var v330 = offset$$17 + v628;
    introspect(JAM.policy.p27) {
      return sequence$$20.substring(offset$$17, v330);
    }
  }
  function v8(str$$14, p1$$8, p2$$3, offset$$16, s$$10) {
    var v629 = p1$$8.length;
    var v776 = p1$$8.length;
    var v777 = p2$$3.length;
    var v630 = v776 + v777;
    introspect(JAM.policy.p27) {
      var v331 = sequence$$20.substring(v629, v630)
    }
    return p1$$8 + v331;
  }
  function v7(str$$13, p1$$7, offset$$15, s$$9) {
    var v332 = p1$$7.length;
    return getRandomSequence(v332);
  }
  function v6(str$$12, p1$$6, p2$$2, offset$$14, s$$8) {
    var v631 = p2$$2.length;
    var v333 = getRandomSequence(v631);
    return p1$$6 + v333;
  }
  function v5(str$$11, p1$$5, offset$$13, s$$7) {
    return p1$$5.toLowerCase();
  }
  function v4(str$$10, p1$$4, p2$$1, offset$$12, s$$6) {
    var v334 = p2$$1.toLowerCase();
    return p1$$4 + v334;
  }
  function v3(str$$9, p1$$3, offset$$11, s$$5) {
    return p1$$3.toUpperCase();
  }
  function v2(str$$8, p1$$2, p2, offset$$10, s$$4) {
    var v335 = p2.toUpperCase();
    return p1$$2 + v335;
  }
  var sequenceArray$$1 = new Array;
  var v632 = this.type;
  var v341 = v632 == "new_sequence";
  if (v341) {
    var i$$13 = 0;
    var v778 = this.ranges;
    var v633 = v778.length;
    var v338 = i$$13 < v633;
    for (;v338;) {
      var v880 = this.ranges;
      var v779 = v880[i$$13];
      introspect(JAM.policy.p16) {
        var v634 = v779.getSequence(sequence$$20)
      }
      var v337 = v634 != "";
      if (v337) {
        var v780 = this.ranges;
        var v635 = v780[i$$13];
        introspect(JAM.policy.p16) {
          var v336 = v635.getSequence(sequence$$20)
        }
        introspect(JAM.policy.p16) {
          sequenceArray$$1.push(v336);
        }
      }
      i$$13++;
      var v781 = this.ranges;
      var v636 = v781.length;
      v338 = i$$13 < v636;
    }
    var v339 = outputWindow.document;
    introspect(JAM.policy.p11) {
      var v782 = sequenceArray$$1.join("")
    }
    var v637 = addReturns(v782);
    var v340 = v637 + "\n\n";
    introspect(JAM.policy.p16) {
      v339.write(v340);
    }
    return true;
  }
  var v638 = this.type;
  var v348 = v638 == "separate";
  if (v348) {
    i$$13 = 0;
    var v783 = this.ranges;
    var v639 = v783.length;
    var v347 = i$$13 < v639;
    for (;v347;) {
      var v881 = this.ranges;
      var v784 = v881[i$$13];
      introspect(JAM.policy.p16) {
        var v640 = v784.getSequence(sequence$$20)
      }
      var v346 = v640 != "";
      if (v346) {
        var v342 = outputWindow.document;
        var v882 = this.ranges;
        var v785 = v882[i$$13];
        var v641 = v785.getTitle();
        var v343 = v641 + "\n";
        introspect(JAM.policy.p16) {
          v342.write(v343);
        }
        var v344 = outputWindow.document;
        var v949 = this.ranges;
        var v883 = v949[i$$13];
        introspect(JAM.policy.p16) {
          var v786 = v883.getSequence(sequence$$20)
        }
        var v642 = addReturns(v786);
        var v345 = v642 + "\n\n";
        introspect(JAM.policy.p16) {
          v344.write(v345);
        }
      }
      i$$13++;
      var v787 = this.ranges;
      var v643 = v787.length;
      v347 = i$$13 < v643;
    }
    return true;
  }
  var v644 = this.type;
  var v356 = v644 == "uppercased";
  if (v356) {
    var re$$3;
    sequence$$20 = sequence$$20.toLowerCase();
    i$$13 = 0;
    var v788 = this.ranges;
    var v645 = v788.length;
    var v353 = i$$13 < v645;
    for (;v353;) {
      var v884 = this.ranges;
      var v789 = v884[i$$13];
      introspect(JAM.policy.p16) {
        var v646 = v789.getSequence(sequence$$20)
      }
      var v352 = v646 != "";
      if (v352) {
        var v885 = this.ranges;
        var v790 = v885[i$$13];
        var v647 = v790.start;
        var v351 = v647 > 1;
        if (v351) {
          var v1023 = this.ranges;
          var v988 = v1023[i$$13];
          var v950 = v988.start;
          var v886 = v950 - 1;
          var v791 = "(.{" + v886;
          var v648 = v791 + "})\\B(.{";
          var v989 = this.ranges;
          var v951 = v989[i$$13];
          var v887 = v951.stop;
          var v990 = this.ranges;
          var v952 = v990[i$$13];
          var v888 = v952.start;
          var v792 = v887 - v888;
          var v649 = v792 + 1;
          var v349 = v648 + v649;
          re$$3 = v349 + "})";
          re$$3 = new RegExp(re$$3);
          introspect(JAM.policy.p27) {
            sequence$$20 = sequence$$20.replace(re$$3, v2);
          }
        } else {
          var v991 = this.ranges;
          var v953 = v991[i$$13];
          var v889 = v953.stop;
          var v992 = this.ranges;
          var v954 = v992[i$$13];
          var v890 = v954.start;
          var v793 = v889 - v890;
          var v650 = v793 + 1;
          var v350 = "(.{" + v650;
          re$$3 = v350 + "})";
          re$$3 = new RegExp(re$$3);
          introspect(JAM.policy.p27) {
            sequence$$20 = sequence$$20.replace(re$$3, v3);
          }
        }
      }
      i$$13++;
      var v794 = this.ranges;
      var v651 = v794.length;
      v353 = i$$13 < v651;
    }
    var v354 = outputWindow.document;
    var v652 = addReturns(sequence$$20);
    var v355 = v652 + "\n\n";
    introspect(JAM.policy.p16) {
      v354.write(v355);
    }
    return true;
  }
  var v653 = this.type;
  var v364 = v653 == "lowercased";
  if (v364) {
    sequence$$20 = sequence$$20.toUpperCase();
    i$$13 = 0;
    var v795 = this.ranges;
    var v654 = v795.length;
    var v361 = i$$13 < v654;
    for (;v361;) {
      var v891 = this.ranges;
      var v796 = v891[i$$13];
      introspect(JAM.policy.p16) {
        var v655 = v796.getSequence(sequence$$20)
      }
      var v360 = v655 != "";
      if (v360) {
        var v892 = this.ranges;
        var v797 = v892[i$$13];
        var v656 = v797.start;
        var v359 = v656 > 1;
        if (v359) {
          var v1024 = this.ranges;
          var v993 = v1024[i$$13];
          var v955 = v993.start;
          var v893 = v955 - 1;
          var v798 = "(.{" + v893;
          var v657 = v798 + "})\\B(.{";
          var v994 = this.ranges;
          var v956 = v994[i$$13];
          var v894 = v956.stop;
          var v995 = this.ranges;
          var v957 = v995[i$$13];
          var v895 = v957.start;
          var v799 = v894 - v895;
          var v658 = v799 + 1;
          var v357 = v657 + v658;
          re$$3 = v357 + "})";
          re$$3 = new RegExp(re$$3);
          introspect(JAM.policy.p27) {
            sequence$$20 = sequence$$20.replace(re$$3, v4);
          }
        } else {
          var v996 = this.ranges;
          var v958 = v996[i$$13];
          var v896 = v958.stop;
          var v997 = this.ranges;
          var v959 = v997[i$$13];
          var v897 = v959.start;
          var v800 = v896 - v897;
          var v659 = v800 + 1;
          var v358 = "(.{" + v659;
          re$$3 = v358 + "})";
          re$$3 = new RegExp(re$$3);
          introspect(JAM.policy.p27) {
            sequence$$20 = sequence$$20.replace(re$$3, v5);
          }
        }
      }
      i$$13++;
      var v801 = this.ranges;
      var v660 = v801.length;
      v361 = i$$13 < v660;
    }
    var v362 = outputWindow.document;
    var v661 = addReturns(sequence$$20);
    var v363 = v661 + "\n\n";
    introspect(JAM.policy.p16) {
      v362.write(v363);
    }
    return true;
  }
  var v662 = this.type;
  var v372 = v662 == "randomized";
  if (v372) {
    i$$13 = 0;
    var v802 = this.ranges;
    var v663 = v802.length;
    var v369 = i$$13 < v663;
    for (;v369;) {
      var v898 = this.ranges;
      var v803 = v898[i$$13];
      introspect(JAM.policy.p16) {
        var v664 = v803.getSequence(sequence$$20)
      }
      var v368 = v664 != "";
      if (v368) {
        var v899 = this.ranges;
        var v804 = v899[i$$13];
        var v665 = v804.start;
        var v367 = v665 > 1;
        if (v367) {
          var v1025 = this.ranges;
          var v998 = v1025[i$$13];
          var v960 = v998.start;
          var v900 = v960 - 1;
          var v805 = "(.{" + v900;
          var v666 = v805 + "})\\B(.{";
          var v999 = this.ranges;
          var v961 = v999[i$$13];
          var v901 = v961.stop;
          var v1000 = this.ranges;
          var v962 = v1000[i$$13];
          var v902 = v962.start;
          var v806 = v901 - v902;
          var v667 = v806 + 1;
          var v365 = v666 + v667;
          re$$3 = v365 + "})";
          re$$3 = new RegExp(re$$3);
          introspect(JAM.policy.p27) {
            sequence$$20 = sequence$$20.replace(re$$3, v6);
          }
        } else {
          var v1001 = this.ranges;
          var v963 = v1001[i$$13];
          var v903 = v963.stop;
          var v1002 = this.ranges;
          var v964 = v1002[i$$13];
          var v904 = v964.start;
          var v807 = v903 - v904;
          var v668 = v807 + 1;
          var v366 = "(.{" + v668;
          re$$3 = v366 + "})";
          re$$3 = new RegExp(re$$3);
          introspect(JAM.policy.p27) {
            sequence$$20 = sequence$$20.replace(re$$3, v7);
          }
        }
      }
      i$$13++;
      var v808 = this.ranges;
      var v669 = v808.length;
      v369 = i$$13 < v669;
    }
    var v370 = outputWindow.document;
    var v670 = addReturns(sequence$$20);
    var v371 = v670 + "\n\n";
    introspect(JAM.policy.p16) {
      v370.write(v371);
    }
    return true;
  }
  var v671 = this.type;
  var v381 = v671 == "preserved";
  if (v381) {
    var v373 = sequence$$20.length;
    var randomSequence = getRandomSequence(v373);
    i$$13 = 0;
    var v809 = this.ranges;
    var v672 = v809.length;
    var v378 = i$$13 < v672;
    for (;v378;) {
      var v905 = this.ranges;
      var v810 = v905[i$$13];
      introspect(JAM.policy.p16) {
        var v673 = v810.getSequence(sequence$$20)
      }
      var v377 = v673 != "";
      if (v377) {
        var v906 = this.ranges;
        var v811 = v906[i$$13];
        var v674 = v811.start;
        var v376 = v674 > 1;
        if (v376) {
          var v1026 = this.ranges;
          var v1003 = v1026[i$$13];
          var v965 = v1003.start;
          var v907 = v965 - 1;
          var v812 = "(.{" + v907;
          var v675 = v812 + "})\\B(.{";
          var v1004 = this.ranges;
          var v966 = v1004[i$$13];
          var v908 = v966.stop;
          var v1005 = this.ranges;
          var v967 = v1005[i$$13];
          var v909 = v967.start;
          var v813 = v908 - v909;
          var v676 = v813 + 1;
          var v374 = v675 + v676;
          re$$3 = v374 + "})";
          re$$3 = new RegExp(re$$3);
          introspect(JAM.policy.p27) {
            randomSequence = randomSequence.replace(re$$3, v8);
          }
        } else {
          var v1006 = this.ranges;
          var v968 = v1006[i$$13];
          var v910 = v968.stop;
          var v1007 = this.ranges;
          var v969 = v1007[i$$13];
          var v911 = v969.start;
          var v814 = v910 - v911;
          var v677 = v814 + 1;
          var v375 = "(.{" + v677;
          re$$3 = v375 + "})";
          re$$3 = new RegExp(re$$3);
          introspect(JAM.policy.p27) {
            randomSequence = randomSequence.replace(re$$3, v9);
          }
        }
      }
      i$$13++;
      var v815 = this.ranges;
      var v678 = v815.length;
      v378 = i$$13 < v678;
    }
    var v379 = outputWindow.document;
    var v679 = addReturns(randomSequence);
    var v380 = v679 + "\n\n";
    introspect(JAM.policy.p16) {
      v379.write(v380);
    }
    return true;
  }
  return;
}
function RangeGroup(type$$25) {
  this.type = type$$25;
  var v1103 = new Array;
  this.ranges = v1103;
  return;
}
new Range(0, 0);
var v382 = Range.prototype;
v382.getSequence = getSequence;
var v383 = Range.prototype;
v383.getTitle = getTitle;
new RangeGroup("", "");
var v384 = RangeGroup.prototype;
v384.addRange = addRange;
var v385 = RangeGroup.prototype;
v385.writeRanges = writeRanges;
document.onload = v10;
introspect(JAM.policy.p11) {
  var v386 = document.getElementById("submitbtn")
}
v386.onclick = v11;
introspect(JAM.policy.p11) {
  var v387 = document.getElementById("clearbtn")
}
v387.onclick = v12
