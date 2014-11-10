function v12() {
  var v839 = document.forms;
  var v700 = v839[0];
  var v405 = v700.elements;
  var v13 = v405[0];
  v13.value = " ";
  var v840 = document.forms;
  var v701 = v840[0];
  var v406 = v701.elements;
  var v14 = v406[1];
  v14.value = " ";
  return;
}
function v11() {
  try {
    rangeExtract(document);
  } catch (e$$7) {
    var v15 = "The following error was encountered: " + e$$7;
    alert(v15);
  }
  return;
}
function v10() {
  var v407 = document.main_form;
  var v16 = v407.main_submit;
  v16.focus();
  return;
}
function addReturns(sequence) {
  function v0(str$$6, p1, offset$$8, s$$2) {
    return p1 + "\n";
  }
  introspect(JAM.policy.p28) {
    sequence = sequence.replace(/(.{60})/g, v0);
  }
  return sequence;
}
function checkAlign(arrayOfTitles, arrayOfSequences) {
  var v17 = arrayOfSequences[0];
  var lengthOfAlign = v17.length;
  var v408 = arrayOfSequences.length;
  var v18 = v408 < 2;
  if (v18) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v409 = arrayOfTitles.length;
  var v20 = i$$1 < v409;
  for (;v20;) {
    var v937 = arrayOfTitles[i$$1];
    introspect(JAM.policy.p30) {
      var v841 = v937.search(/\S/)
    }
    var v702 = v841 == -1;
    var v843 = !v702;
    if (v843) {
      var v938 = arrayOfSequences[i$$1];
      introspect(JAM.policy.p30) {
        var v842 = v938.search(/\S/)
      }
      v702 = v842 == -1;
    }
    var v410 = v702;
    var v704 = !v410;
    if (v704) {
      var v844 = arrayOfSequences[i$$1];
      var v703 = v844.length;
      v410 = v703 != lengthOfAlign;
    }
    var v19 = v410;
    if (v19) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1 = i$$1 + 1;
    var v411 = arrayOfTitles.length;
    v20 = i$$1 < v411;
  }
  return true;
}
function checkCodonTable(codonTable) {
  introspect(JAM.policy.p30) {
    var v995 = codonTable.search(/AmAcid/)
  }
  var v939 = v995 == -1;
  var v997 = !v939;
  if (v997) {
    introspect(JAM.policy.p30) {
      var v996 = codonTable.search(/Codon/)
    }
    v939 = v996 == -1;
  }
  var v845 = v939;
  var v941 = !v845;
  if (v941) {
    introspect(JAM.policy.p30) {
      var v940 = codonTable.search(/Number/)
    }
    v845 = v940 == -1;
  }
  var v705 = v845;
  var v847 = !v705;
  if (v847) {
    introspect(JAM.policy.p30) {
      var v846 = codonTable.search(/\/1000/)
    }
    v705 = v846 == -1;
  }
  var v412 = v705;
  var v707 = !v412;
  if (v707) {
    introspect(JAM.policy.p30) {
      var v706 = codonTable.search(/Fraction\s*\.\./)
    }
    v412 = v706 == -1;
  }
  var v21 = v412;
  if (v21) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v708 = formElement.value;
  introspect(JAM.policy.p30) {
    var v413 = v708.search(/\S/)
  }
  var v22 = v413 == -1;
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
  var v414 = arrayOfPatterns.length;
  var v25 = z$$2 < v414;
  for (;v25;) {
    var v709 = arrayOfPatterns[z$$2];
    introspect(JAM.policy.p30) {
      var v415 = v709.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/)
    }
    var v23 = v415 == -1;
    if (v23) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v710 = arrayOfPatterns[z$$2];
    var v416 = moreExpressionCheck(v710);
    var v24 = v416 == false;
    if (v24) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v417 = arrayOfPatterns.length;
    v25 = z$$2 < v417;
  }
  var v26 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v26);
  var v27 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v27);
  var j = 0;
  var v418 = arrayOfPatterns.length;
  var v34 = j < v418;
  for (;v34;) {
    var v28 = geneticCodeMatchExp;
    var v29 = j;
    var v848 = arrayOfPatterns[j];
    introspect(JAM.policy.p30) {
      var v711 = v848.match(/\/.+\//)
    }
    var v419 = v711 + "gi";
    var v1112 = eval(v419);
    introspect(JAM.policy.p13) {
      v28[v29] = v1112;
    }
    var v30 = geneticCodeMatchResult;
    var v31 = j;
    var v712 = arrayOfPatterns[j];
    introspect(JAM.policy.p30) {
      var v420 = v712.match(/=[a-zA-Z\*]/)
    }
    var v1113 = v420.toString();
    introspect(JAM.policy.p13) {
      v30[v31] = v1113;
    }
    var v32 = geneticCodeMatchResult;
    var v33 = j;
    var v421 = geneticCodeMatchResult[j];
    introspect(JAM.policy.p28) {
      var v1114 = v421.replace(/=/g, "")
    }
    introspect(JAM.policy.p13) {
      v32[v33] = v1114;
    }
    j = j + 1;
    var v422 = arrayOfPatterns.length;
    v34 = j < v422;
  }
  var i$$2 = 0;
  var v713 = testSequence.length;
  var v423 = v713 - 3;
  var v41 = i$$2 <= v423;
  for (;v41;) {
    var v35 = i$$2 + 3;
    introspect(JAM.policy.p28) {
      codon = testSequence.substring(i$$2, v35);
    }
    j = 0;
    var v424 = geneticCodeMatchExp.length;
    var v39 = j < v424;
    for (;v39;) {
      var v714 = geneticCodeMatchExp[j];
      introspect(JAM.policy.p40) {
        var v425 = codon.search(v714)
      }
      var v38 = v425 != -1;
      if (v38) {
        var v37 = oneMatch == true;
        if (v37) {
          var v426 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v36 = v426 + ".";
          alert(v36);
          return false;
        }
        oneMatch = true;
      }
      j = j + 1;
      var v427 = geneticCodeMatchExp.length;
      v39 = j < v427;
    }
    var v40 = oneMatch == false;
    if (v40) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v715 = testSequence.length;
    var v428 = v715 - 3;
    v41 = i$$2 <= v428;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v429 = arrayOfPatterns$$1.length;
  var v43 = z$$3 < v429;
  for (;v43;) {
    var v716 = arrayOfPatterns$$1[z$$3];
    introspect(JAM.policy.p30) {
      var v430 = v716.search(/[^acdefghiklmnpqrstvwyz]/i)
    }
    var v42 = v430 != -1;
    if (v42) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v431 = arrayOfPatterns$$1.length;
    v43 = z$$3 < v431;
  }
  var i$$3 = 0;
  var v432 = arrayOfPatterns$$1.length;
  var v47 = i$$3 < v432;
  for (;v47;) {
    var v717 = arrayOfPatterns$$1[i$$3];
    var v433 = "[" + v717;
    var v44 = v433 + "]";
    var re = new RegExp(v44, "gi");
    var j$$1 = i$$3 + 1;
    var v434 = arrayOfPatterns$$1.length;
    var v46 = j$$1 < v434;
    for (;v46;) {
      var v718 = arrayOfPatterns$$1[j$$1];
      introspect(JAM.policy.p40) {
        var v435 = v718.search(re)
      }
      var v45 = v435 != -1;
      if (v45) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1 = j$$1 + 1;
      var v436 = arrayOfPatterns$$1.length;
      v46 = j$$1 < v436;
    }
    i$$3 = i$$3 + 1;
    var v437 = arrayOfPatterns$$1.length;
    v47 = i$$3 < v437;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v438 = arrayOfPatterns$$2.length;
  var v50 = z$$4 < v438;
  for (;v50;) {
    var v719 = arrayOfPatterns$$2[z$$4];
    introspect(JAM.policy.p30) {
      var v439 = v719.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i)
    }
    var v48 = v439 == -1;
    if (v48) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v720 = arrayOfPatterns$$2[z$$4];
    var v440 = moreExpressionCheck(v720);
    var v49 = v440 == false;
    if (v49) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v441 = arrayOfPatterns$$2.length;
    v50 = z$$4 < v441;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v849 = getSequenceFromFasta(text$$7);
  introspect(JAM.policy.p28) {
    var v721 = v849.replace(/[^A-Za-z]/g, "")
  }
  var v442 = v721.length;
  var v52 = v442 > maxInput;
  if (v52) {
    var v443 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v51 = v443 + " characters.";
    alert(v51);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v444 = text$$8.length;
  var v54 = v444 > maxInput$$1;
  if (v54) {
    var v445 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v53 = v445 + " characters.";
    alert(v53);
    return false;
  } else {
    return true;
  }
  return;
}
function complement(dnaSequence) {
  introspect(JAM.policy.p28) {
    dnaSequence = dnaSequence.replace(/g/g, "1");
  }
  introspect(JAM.policy.p28) {
    dnaSequence = dnaSequence.replace(/c/g, "2");
  }
  introspect(JAM.policy.p28) {
    dnaSequence = dnaSequence.replace(/1/g, "c");
  }
  introspect(JAM.policy.p28) {
    dnaSequence = dnaSequence.replace(/2/g, "g");
  }
  introspect(JAM.policy.p28) {
    dnaSequence = dnaSequence.replace(/G/g, "1");
  }
  introspect(JAM.policy.p28) {
    dnaSequence = dnaSequence.replace(/C/g, "2");
  }
  introspect(JAM.policy.p28) {
    dnaSequence = dnaSequence.replace(/1/g, "C");
  }
  introspect(JAM.policy.p28) {
    dnaSequence = dnaSequence.replace(/2/g, "G");
  }
  introspect(JAM.policy.p28) {
    dnaSequence = dnaSequence.replace(/a/g, "1");
  }
  introspect(JAM.policy.p28) {
    dnaSequence = dnaSequence.replace(/t/g, "2");
  }
  introspect(JAM.policy.p28) {
    dnaSequence = dnaSequence.replace(/1/g, "t");
  }
  introspect(JAM.policy.p28) {
    dnaSequence = dnaSequence.replace(/2/g, "a");
  }
  introspect(JAM.policy.p28) {
    dnaSequence = dnaSequence.replace(/A/g, "1");
  }
  introspect(JAM.policy.p28) {
    dnaSequence = dnaSequence.replace(/T/g, "2");
  }
  introspect(JAM.policy.p28) {
    dnaSequence = dnaSequence.replace(/1/g, "T");
  }
  introspect(JAM.policy.p28) {
    dnaSequence = dnaSequence.replace(/2/g, "A");
  }
  introspect(JAM.policy.p28) {
    dnaSequence = dnaSequence.replace(/u/g, "a");
  }
  introspect(JAM.policy.p28) {
    dnaSequence = dnaSequence.replace(/U/g, "A");
  }
  introspect(JAM.policy.p28) {
    dnaSequence = dnaSequence.replace(/r/g, "1");
  }
  introspect(JAM.policy.p28) {
    dnaSequence = dnaSequence.replace(/y/g, "2");
  }
  introspect(JAM.policy.p28) {
    dnaSequence = dnaSequence.replace(/1/g, "y");
  }
  introspect(JAM.policy.p28) {
    dnaSequence = dnaSequence.replace(/2/g, "r");
  }
  introspect(JAM.policy.p28) {
    dnaSequence = dnaSequence.replace(/R/g, "1");
  }
  introspect(JAM.policy.p28) {
    dnaSequence = dnaSequence.replace(/Y/g, "2");
  }
  introspect(JAM.policy.p28) {
    dnaSequence = dnaSequence.replace(/1/g, "Y");
  }
  introspect(JAM.policy.p28) {
    dnaSequence = dnaSequence.replace(/2/g, "R");
  }
  introspect(JAM.policy.p28) {
    dnaSequence = dnaSequence.replace(/k/g, "1");
  }
  introspect(JAM.policy.p28) {
    dnaSequence = dnaSequence.replace(/m/g, "2");
  }
  introspect(JAM.policy.p28) {
    dnaSequence = dnaSequence.replace(/1/g, "m");
  }
  introspect(JAM.policy.p28) {
    dnaSequence = dnaSequence.replace(/2/g, "k");
  }
  introspect(JAM.policy.p28) {
    dnaSequence = dnaSequence.replace(/K/g, "1");
  }
  introspect(JAM.policy.p28) {
    dnaSequence = dnaSequence.replace(/M/g, "2");
  }
  introspect(JAM.policy.p28) {
    dnaSequence = dnaSequence.replace(/1/g, "M");
  }
  introspect(JAM.policy.p28) {
    dnaSequence = dnaSequence.replace(/2/g, "K");
  }
  introspect(JAM.policy.p28) {
    dnaSequence = dnaSequence.replace(/b/g, "1");
  }
  introspect(JAM.policy.p28) {
    dnaSequence = dnaSequence.replace(/v/g, "2");
  }
  introspect(JAM.policy.p28) {
    dnaSequence = dnaSequence.replace(/1/g, "v");
  }
  introspect(JAM.policy.p28) {
    dnaSequence = dnaSequence.replace(/2/g, "b");
  }
  introspect(JAM.policy.p28) {
    dnaSequence = dnaSequence.replace(/B/g, "1");
  }
  introspect(JAM.policy.p28) {
    dnaSequence = dnaSequence.replace(/V/g, "2");
  }
  introspect(JAM.policy.p28) {
    dnaSequence = dnaSequence.replace(/1/g, "V");
  }
  introspect(JAM.policy.p28) {
    dnaSequence = dnaSequence.replace(/2/g, "B");
  }
  introspect(JAM.policy.p28) {
    dnaSequence = dnaSequence.replace(/d/g, "1");
  }
  introspect(JAM.policy.p28) {
    dnaSequence = dnaSequence.replace(/h/g, "2");
  }
  introspect(JAM.policy.p28) {
    dnaSequence = dnaSequence.replace(/1/g, "h");
  }
  introspect(JAM.policy.p28) {
    dnaSequence = dnaSequence.replace(/2/g, "d");
  }
  introspect(JAM.policy.p28) {
    dnaSequence = dnaSequence.replace(/D/g, "1");
  }
  introspect(JAM.policy.p28) {
    dnaSequence = dnaSequence.replace(/H/g, "2");
  }
  introspect(JAM.policy.p28) {
    dnaSequence = dnaSequence.replace(/1/g, "H");
  }
  introspect(JAM.policy.p28) {
    dnaSequence = dnaSequence.replace(/2/g, "D");
  }
  return dnaSequence;
}
function closeForm() {
  var v55 = outputWindow.document;
  introspect(JAM.policy.p24) {
    v55.write("</form>");
  }
  return true;
}
function closePre() {
  var v56 = outputWindow.document;
  introspect(JAM.policy.p24) {
    v56.write("</div>");
  }
  var v57 = outputWindow.document;
  introspect(JAM.policy.p24) {
    v57.write("</pre>\n");
  }
  return;
}
function closeTextArea() {
  var v58 = outputWindow.document;
  introspect(JAM.policy.p24) {
    v58.write("</textarea>");
  }
  return true;
}
function closeWindow() {
  var v59 = outputWindow.document;
  introspect(JAM.policy.p24) {
    v59.write("</body>\n</html>\n");
  }
  outputWindow.status = "Done.";
  var v60 = outputWindow.document;
  v60.close();
  return true;
}
function convertDegenerates(sequence$$1) {
  sequence$$1 = sequence$$1.toLowerCase();
  introspect(JAM.policy.p28) {
    sequence$$1 = sequence$$1.replace(/t/g, "[TU]");
  }
  introspect(JAM.policy.p28) {
    sequence$$1 = sequence$$1.replace(/r/g, "[AGR]");
  }
  introspect(JAM.policy.p28) {
    sequence$$1 = sequence$$1.replace(/y/g, "[CTUY]");
  }
  introspect(JAM.policy.p28) {
    sequence$$1 = sequence$$1.replace(/s/g, "[GCS]");
  }
  introspect(JAM.policy.p28) {
    sequence$$1 = sequence$$1.replace(/w/g, "[ATUW]");
  }
  introspect(JAM.policy.p28) {
    sequence$$1 = sequence$$1.replace(/k/g, "[GTUK]");
  }
  introspect(JAM.policy.p28) {
    sequence$$1 = sequence$$1.replace(/m/g, "[ACM]");
  }
  introspect(JAM.policy.p28) {
    sequence$$1 = sequence$$1.replace(/b/g, "[CGTUBSKY]");
  }
  introspect(JAM.policy.p28) {
    sequence$$1 = sequence$$1.replace(/d/g, "[AGTUDRKW]");
  }
  introspect(JAM.policy.p28) {
    sequence$$1 = sequence$$1.replace(/h/g, "[ACTUHMYW]");
  }
  introspect(JAM.policy.p28) {
    sequence$$1 = sequence$$1.replace(/v/g, "[ACGVSMR]");
  }
  introspect(JAM.policy.p28) {
    sequence$$1 = sequence$$1.replace(/n/g, "[ACGTURYSWKMBDHVN]");
  }
  return sequence$$1;
}
function earlyCheckAlign(alignArray) {
  var v446 = alignArray.length;
  var v61 = v446 < 3;
  if (v61) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v447 = alignArray.length;
  var v63 = i$$4 < v447;
  for (;v63;) {
    var v722 = alignArray[i$$4];
    introspect(JAM.policy.p30) {
      var v448 = v722.search(/[^\s]+\s/)
    }
    var v62 = v448 == -1;
    if (v62) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4 = i$$4 + 1;
    var v449 = alignArray.length;
    v63 = i$$4 < v449;
  }
  return true;
}
function filterAlignSeq(alignSeq) {
  introspect(JAM.policy.p28) {
    alignSeq = alignSeq.replace(/[^abcdefghiklmnpqrstvwxyz\.\-]/gi, "");
  }
  return alignSeq;
}
function filterFastaTitle(sequenceTitle) {
  introspect(JAM.policy.p28) {
    sequenceTitle = sequenceTitle.replace(/\s{2,}/g, " ");
  }
  introspect(JAM.policy.p28) {
    sequenceTitle = sequenceTitle.replace(/^\s*/g, "");
  }
  introspect(JAM.policy.p28) {
    sequenceTitle = sequenceTitle.replace(/[\f\n\r\t]+$/g, "\n");
  }
  introspect(JAM.policy.p28) {
    return sequenceTitle.replace(/[\<\>]\n/gi, "");
  }
}
function getArrayOfFasta(sequenceData) {
  var arrayOfFasta = new Array;
  var matchArray;
  var re$$1 = /\>[^\>]+/g;
  introspect(JAM.policy.p30) {
    var v450 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v66 = v450 != -1;
  if (v66) {
    introspect(JAM.policy.p40) {
      var v65 = matchArray = re$$1.exec(sequenceData)
    }
    for (;v65;) {
      var v64 = matchArray[0];
      introspect(JAM.policy.p40) {
        arrayOfFasta.push(v64);
      }
      introspect(JAM.policy.p40) {
        v65 = matchArray = re$$1.exec(sequenceData);
      }
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v451 = sequence$$2.length;
  var v67 = "&gt;results for " + v451;
  var stringToReturn = v67 + " residue sequence ";
  introspect(JAM.policy.p30) {
    var v452 = fastaSequenceTitle.search(/[^\s]/)
  }
  var v69 = v452 != -1;
  if (v69) {
    var v453 = stringToReturn + '"';
    var v68 = v453 + fastaSequenceTitle;
    stringToReturn = v68 + '"';
  }
  var v454 = stringToReturn + ' starting "';
  introspect(JAM.policy.p26) {
    var v455 = sequence$$2.substring(0, 10)
  }
  var v70 = v454 + v455;
  stringToReturn = v70 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v456 = sequenceOne.length;
  var v71 = "Search results for " + v456;
  var stringToReturn$$1 = v71 + " residue sequence ";
  introspect(JAM.policy.p30) {
    var v457 = fastaSequenceTitleOne.search(/[^\s]/)
  }
  var v73 = v457 != -1;
  if (v73) {
    var v458 = stringToReturn$$1 + '"';
    var v72 = v458 + fastaSequenceTitleOne;
    stringToReturn$$1 = v72 + '"';
  }
  var v459 = stringToReturn$$1 + ' starting "';
  introspect(JAM.policy.p26) {
    var v460 = sequenceOne.substring(0, 10)
  }
  var v74 = v459 + v460;
  stringToReturn$$1 = v74 + '"\n';
  var v461 = stringToReturn$$1 + "and ";
  var v462 = sequenceTwo.length;
  var v75 = v461 + v462;
  stringToReturn$$1 = v75 + " residue sequence ";
  introspect(JAM.policy.p30) {
    var v463 = fastaSequenceTitleTwo.search(/[^\s]/)
  }
  var v77 = v463 != -1;
  if (v77) {
    var v464 = stringToReturn$$1 + '"';
    var v76 = v464 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v76 + '"';
  }
  var v465 = stringToReturn$$1 + ' starting "';
  introspect(JAM.policy.p26) {
    var v466 = sequenceTwo.substring(0, 10)
  }
  var v78 = v465 + v466;
  stringToReturn$$1 = v78 + '"';
  var v79 = '<div class="info">' + stringToReturn$$1;
  return v79 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v80 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v80);
  var j$$2 = 0;
  var v467 = arrayOfPatterns$$3.length;
  var v83 = j$$2 < v467;
  for (;v83;) {
    var v81 = geneticCodeMatchExp$$1;
    var v82 = j$$2;
    var v850 = arrayOfPatterns$$3[j$$2];
    introspect(JAM.policy.p30) {
      var v723 = v850.match(/\/.+\//)
    }
    var v468 = v723 + "gi";
    var v1115 = eval(v468);
    introspect(JAM.policy.p13) {
      v81[v82] = v1115;
    }
    j$$2 = j$$2 + 1;
    var v469 = arrayOfPatterns$$3.length;
    v83 = j$$2 < v469;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v84 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v84);
  var j$$3 = 0;
  var v470 = arrayOfPatterns$$4.length;
  var v89 = j$$3 < v470;
  for (;v89;) {
    var v85 = geneticCodeMatchResult$$1;
    var v86 = j$$3;
    var v724 = arrayOfPatterns$$4[j$$3];
    introspect(JAM.policy.p30) {
      var v471 = v724.match(/=[a-zA-Z\*]/)
    }
    var v1116 = v471.toString();
    introspect(JAM.policy.p13) {
      v85[v86] = v1116;
    }
    var v87 = geneticCodeMatchResult$$1;
    var v88 = j$$3;
    var v472 = geneticCodeMatchResult$$1[j$$3];
    introspect(JAM.policy.p28) {
      var v1117 = v472.replace(/=/g, "")
    }
    introspect(JAM.policy.p13) {
      v87[v88] = v1117;
    }
    j$$3 = j$$3 + 1;
    var v473 = arrayOfPatterns$$4.length;
    v89 = j$$3 < v473;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v474 = sequence$$3.length;
  var v90 = "Results for " + v474;
  var stringToReturn$$2 = v90 + " residue sequence ";
  introspect(JAM.policy.p30) {
    var v475 = fastaSequenceTitle$$1.search(/[^\s]/)
  }
  var v92 = v475 != -1;
  if (v92) {
    var v476 = stringToReturn$$2 + '"';
    var v91 = v476 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v91 + '"';
  }
  var v477 = stringToReturn$$2 + ' starting "';
  introspect(JAM.policy.p26) {
    var v478 = sequence$$3.substring(0, 10)
  }
  var v93 = v477 + v478;
  stringToReturn$$2 = v93 + '"';
  var v94 = '<div class="info">' + stringToReturn$$2;
  return v94 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v725 = "Results for " + topology;
  var v479 = v725 + " ";
  var v480 = sequence$$4.length;
  var v95 = v479 + v480;
  var stringToReturn$$3 = v95 + " residue sequence ";
  introspect(JAM.policy.p30) {
    var v481 = fastaSequenceTitle$$2.search(/[^\s]/)
  }
  var v97 = v481 != -1;
  if (v97) {
    var v482 = stringToReturn$$3 + '"';
    var v96 = v482 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v96 + '"';
  }
  var v483 = stringToReturn$$3 + ' starting "';
  introspect(JAM.policy.p26) {
    var v484 = sequence$$4.substring(0, 10)
  }
  var v98 = v483 + v484;
  stringToReturn$$3 = v98 + '"';
  var v99 = '<div class="info">' + stringToReturn$$3;
  return v99 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v485 = sequenceOne$$1.length;
  var v100 = "Alignment results for " + v485;
  var stringToReturn$$4 = v100 + " residue sequence ";
  introspect(JAM.policy.p30) {
    var v486 = fastaSequenceTitleOne$$1.search(/[^\s]/)
  }
  var v102 = v486 != -1;
  if (v102) {
    var v487 = stringToReturn$$4 + '"';
    var v101 = v487 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v101 + '"';
  }
  var v488 = stringToReturn$$4 + ' starting "';
  introspect(JAM.policy.p26) {
    var v489 = sequenceOne$$1.substring(0, 10)
  }
  var v103 = v488 + v489;
  stringToReturn$$4 = v103 + '"\n';
  var v490 = stringToReturn$$4 + "and ";
  var v491 = sequenceTwo$$1.length;
  var v104 = v490 + v491;
  stringToReturn$$4 = v104 + " residue sequence ";
  introspect(JAM.policy.p30) {
    var v492 = fastaSequenceTitleTwo$$1.search(/[^\s]/)
  }
  var v106 = v492 != -1;
  if (v106) {
    var v493 = stringToReturn$$4 + '"';
    var v105 = v493 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v105 + '"';
  }
  var v494 = stringToReturn$$4 + ' starting "';
  introspect(JAM.policy.p26) {
    var v495 = sequenceTwo$$1.substring(0, 10)
  }
  var v107 = v494 + v495;
  stringToReturn$$4 = v107 + '"';
  var v108 = '<div class="info">' + stringToReturn$$4;
  return v108 + "</div>\n";
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v110 = j$$4 < lengthOut;
  for (;v110;) {
    var v496 = Math.random();
    var v497 = components.length;
    var v109 = v496 * v497;
    introspect(JAM.policy.p30) {
      tempNum = Math.floor(v109);
    }
    tempChar = components[tempNum];
    introspect(JAM.policy.p40) {
      sequenceArray.push(tempChar);
    }
    j$$4 = j$$4 + 1;
    v110 = j$$4 < lengthOut;
  }
  introspect(JAM.policy.p24) {
    return sequenceArray.join("");
  }
}
function getSequenceFromFasta(sequenceRecord) {
  introspect(JAM.policy.p30) {
    var v498 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v111 = v498 != -1;
  if (v111) {
    introspect(JAM.policy.p28) {
      sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "");
    }
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  introspect(JAM.policy.p30) {
    var v499 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v113 = v499 != -1;
  if (v113) {
    introspect(JAM.policy.p28) {
      var v112 = sequenceRecord$$1.match(/\>[^\f\n\r]+[\f\n\r]/, "")
    }
    fastaTitle = v112.toString();
    introspect(JAM.policy.p28) {
      fastaTitle = fastaTitle.replace(/\>|[\f\n\r]/g, "");
    }
    introspect(JAM.policy.p28) {
      fastaTitle = fastaTitle.replace(/\s{2,}/g, " ");
    }
    introspect(JAM.policy.p28) {
      fastaTitle = fastaTitle.replace(/[\<\>]/gi, "");
    }
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  introspect(JAM.policy.p30) {
    var v1090 = expressionToCheck.search(/\[[A-Za-z\|]*\[/)
  }
  var v1083 = v1090 != -1;
  var v1092 = !v1083;
  if (v1092) {
    introspect(JAM.policy.p30) {
      var v1091 = expressionToCheck.search(/\][A-Za-z\|]*\]/)
    }
    v1083 = v1091 != -1;
  }
  var v1074 = v1083;
  var v1085 = !v1074;
  if (v1085) {
    introspect(JAM.policy.p30) {
      var v1084 = expressionToCheck.search(/\[\]/)
    }
    v1074 = v1084 != -1;
  }
  var v1064 = v1074;
  var v1076 = !v1064;
  if (v1076) {
    introspect(JAM.policy.p30) {
      var v1075 = expressionToCheck.search(/\/[A-Za-z\|]*\]/)
    }
    v1064 = v1075 != -1;
  }
  var v1052 = v1064;
  var v1066 = !v1052;
  if (v1066) {
    introspect(JAM.policy.p30) {
      var v1065 = expressionToCheck.search(/\[[A-Za-z\|]*\//)
    }
    v1052 = v1065 != -1;
  }
  var v1033 = v1052;
  var v1054 = !v1033;
  if (v1054) {
    introspect(JAM.policy.p30) {
      var v1053 = expressionToCheck.search(/\|\|/)
    }
    v1033 = v1053 != -1;
  }
  var v998 = v1033;
  var v1035 = !v998;
  if (v1035) {
    introspect(JAM.policy.p30) {
      var v1034 = expressionToCheck.search(/\/\|/)
    }
    v998 = v1034 != -1;
  }
  var v942 = v998;
  var v1000 = !v942;
  if (v1000) {
    introspect(JAM.policy.p30) {
      var v999 = expressionToCheck.search(/\|\//)
    }
    v942 = v999 != -1;
  }
  var v851 = v942;
  var v944 = !v851;
  if (v944) {
    introspect(JAM.policy.p30) {
      var v943 = expressionToCheck.search(/\[.\]/)
    }
    v851 = v943 != -1;
  }
  var v726 = v851;
  var v853 = !v726;
  if (v853) {
    introspect(JAM.policy.p30) {
      var v852 = expressionToCheck.search(/\</)
    }
    v726 = v852 != -1;
  }
  var v500 = v726;
  var v728 = !v500;
  if (v728) {
    introspect(JAM.policy.p30) {
      var v727 = expressionToCheck.search(/\>/)
    }
    v500 = v727 != -1;
  }
  var v114 = v500;
  if (v114) {
    return false;
  }
  return true;
}
function openForm() {
  var v115 = outputWindow.document;
  introspect(JAM.policy.p24) {
    v115.write('<form action="">\n');
  }
  return true;
}
function openPre() {
  var v116 = outputWindow.document;
  introspect(JAM.policy.p24) {
    v116.write("<pre>");
  }
  var v117 = outputWindow.document;
  introspect(JAM.policy.p24) {
    v117.write('<div class="pre">');
  }
  return;
}
function openTextArea() {
  var v118 = outputWindow.document;
  introspect(JAM.policy.p24) {
    v118.write('<br /><textarea rows="6" cols="61">\n');
  }
  return true;
}
function openWindow(title$$6) {
  _openWindow(title$$6, true);
  return;
}
function _openWindow(title$$7, isColor) {
  introspect(JAM.policy.p27) {
    outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  }
  outputWindow.focus();
  var v119 = outputWindow.document;
  var v854 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v729 = v854 + "<head>\n";
  var v501 = v729 + "<title>Sequence Manipulation Suite</title>\n";
  var v120 = v501 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  introspect(JAM.policy.p40) {
    v119.write(v120);
  }
  if (isColor) {
    var v121 = outputWindow.document;
    var v1105 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1101 = v1105 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1097 = v1101 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1093 = v1097 + "div.info {font-weight: bold}\n";
    var v1086 = v1093 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1077 = v1086 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v1067 = v1077 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v1055 = v1067 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1036 = v1055 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v1001 = v1036 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v945 = v1001 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v855 = v945 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v730 = v855 + "td.many {color: #000000}\n";
    var v502 = v730 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v122 = v502 + "</style>\n";
    introspect(JAM.policy.p40) {
      v121.write(v122);
    }
  } else {
    var v123 = outputWindow.document;
    var v1109 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1106 = v1109 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1102 = v1106 + "div.title {display: none}\n";
    var v1098 = v1102 + "div.info {font-weight: bold}\n";
    var v1094 = v1098 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1087 = v1094 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1078 = v1087 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v1068 = v1078 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1056 = v1068 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1037 = v1056 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1002 = v1037 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v946 = v1002 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v856 = v946 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v731 = v856 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v503 = v731 + "img {display: none}\n";
    var v124 = v503 + "</style>\n";
    introspect(JAM.policy.p40) {
      v123.write(v124);
    }
  }
  var v125 = outputWindow.document;
  var v857 = "</head>\n" + '<body class="main">\n';
  var v732 = v857 + '<div class="title">';
  var v504 = v732 + title$$7;
  var v126 = v504 + " results</div>\n";
  introspect(JAM.policy.p40) {
    v125.write(v126);
  }
  outputWindow.status = "Please Wait.";
  return true;
}
function openWindowAlign(title$$8) {
  _openWindowAlign(title$$8, true);
  return;
}
function _openWindowAlign(title$$9, isBackground) {
  introspect(JAM.policy.p27) {
    outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  }
  outputWindow.focus();
  var v127 = outputWindow.document;
  var v858 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v733 = v858 + "<head>\n";
  var v505 = v733 + "<title>Sequence Manipulation Suite</title>\n";
  var v128 = v505 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  introspect(JAM.policy.p40) {
    v127.write(v128);
  }
  if (isBackground) {
    var v129 = outputWindow.document;
    var v1107 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1103 = v1107 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1099 = v1103 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1095 = v1099 + "div.info {font-weight: bold}\n";
    var v1088 = v1095 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v1079 = v1088 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v1069 = v1079 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v1057 = v1069 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v1038 = v1057 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v1003 = v1038 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v947 = v1003 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v859 = v947 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v734 = v859 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v506 = v734 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v130 = v506 + "</style>\n";
    introspect(JAM.policy.p40) {
      v129.write(v130);
    }
  } else {
    var v131 = outputWindow.document;
    var v1111 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1110 = v1111 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1108 = v1110 + "div.title {display: none}\n";
    var v1104 = v1108 + "div.info {font-weight: bold}\n";
    var v1100 = v1104 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1096 = v1100 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v1089 = v1096 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v1080 = v1089 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v1070 = v1080 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v1058 = v1070 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v1039 = v1058 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v1004 = v1039 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v948 = v1004 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v860 = v948 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v735 = v860 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v507 = v735 + "img {display: none}\n";
    var v132 = v507 + "</style>\n";
    introspect(JAM.policy.p40) {
      v131.write(v132);
    }
  }
  var v133 = outputWindow.document;
  var v861 = "</head>\n" + '<body class="main">\n';
  var v736 = v861 + '<div class="title">';
  var v508 = v736 + title$$9;
  var v134 = v508 + " results</div>\n";
  introspect(JAM.policy.p40) {
    v133.write(v134);
  }
  outputWindow.status = "Please Wait.";
  return true;
}
function removeFormatting(sequence$$5) {
  introspect(JAM.policy.p28) {
    return sequence$$5.replace(/[\d\s]/g, "");
  }
}
function removeNonDna(sequence$$6) {
  introspect(JAM.policy.p28) {
    return sequence$$6.replace(/[^gatucryswkmbdhvnxGATUCRYSWKMBDHVNX]/g, "");
  }
}
function removeNonDnaStrict(sequence$$7) {
  introspect(JAM.policy.p28) {
    return sequence$$7.replace(/[^gatucGATUC]/g, "");
  }
}
function removeNonProtein(sequence$$8) {
  introspect(JAM.policy.p28) {
    return sequence$$8.replace(/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, "");
  }
}
function removeNonProteinStrict(sequence$$9) {
  introspect(JAM.policy.p28) {
    return sequence$$9.replace(/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, "");
  }
}
function removeNonProteinAllowDegen(sequence$$10) {
  introspect(JAM.policy.p28) {
    return sequence$$10.replace(/[^ABCDEFGHIKLMNPQRSTVWYXZabcdefghiklmnpqrstvwyxz\*]/g, "");
  }
}
function removeNonProteinAllowX(sequence$$11) {
  introspect(JAM.policy.p28) {
    return sequence$$11.replace(/[^ACDEFGHIKLMNPQRSTVWYZXacdefghiklmnpqrstvwyzx\*]/g, "");
  }
}
function removeWhiteSpace(text$$9) {
  introspect(JAM.policy.p28) {
    return text$$9.replace(/\s/g, "");
  }
}
function removeNonLetters(sequence$$12) {
  introspect(JAM.policy.p28) {
    return sequence$$12.replace(/[^A-Z]/gi, "");
  }
}
function reverse(dnaSequence$$1) {
  var tempDnaArray = new Array;
  introspect(JAM.policy.p30) {
    var v509 = dnaSequence$$1.search(/./)
  }
  var v135 = v509 != -1;
  if (v135) {
    introspect(JAM.policy.p30) {
      tempDnaArray = dnaSequence$$1.match(/./g);
    }
    tempDnaArray = tempDnaArray.reverse();
    introspect(JAM.policy.p24) {
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
  var v136 = j$$5 < lengthOfColumn;
  for (;v136;) {
    tempString = tempString + " ";
    j$$5 = j$$5 + 1;
    v136 = j$$5 < lengthOfColumn;
  }
  var v137 = tempString + theNumber;
  theNumber = v137 + " ";
  var v138 = sequenceToAppend + theNumber;
  sequenceToAppend = v138 + tabIn;
  return sequenceToAppend;
}
function testScript() {
  function v1(str$$7, p1$$1, offset$$9, s$$3) {
    return p1$$1 + "X";
  }
  var testArray = new Array;
  var testString = "1234567890";
  introspect(JAM.policy.p40) {
    testArray.push(testString);
  }
  var v510 = testArray[0];
  var v139 = v510 != testString;
  if (v139) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  introspect(JAM.policy.p40) {
    var v511 = testString.search(re$$2)
  }
  var v140 = v511 == -1;
  if (v140) {
    alert("Regular expression 'm' flag not supported. See browser compatibility page.");
    return false;
  }
  var caughtException = false;
  try {
    re$$2 = eval("Exception handling not supported. Check browser compatibility page.");
  } catch (e$$4) {
    caughtException = true;
  }
  var v141 = !caughtException;
  if (v141) {
    alert("Exception handling not supported. See browser compatibility page.");
  }
  testString = "123";
  introspect(JAM.policy.p28) {
    testString = testString.replace(/(\d)/g, v1);
  }
  var v142 = testString != "1X2X3X";
  if (v142) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false;
  }
  var testNum = 2489.8237;
  introspect(JAM.policy.p23) {
    var v512 = testNum.toFixed(3)
  }
  var v143 = v512 != 2489.824;
  if (v143) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  introspect(JAM.policy.p23) {
    var v513 = testNum.toPrecision(5)
  }
  var v144 = v513 != 2489.8;
  if (v144) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  introspect(JAM.policy.p30) {
    var v514 = theNumber$$1.search(/\d/)
  }
  var v145 = v514 == -1;
  if (v145) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  introspect(JAM.policy.p30) {
    var v949 = emblFile.search(/ID/)
  }
  var v862 = v949 == -1;
  var v951 = !v862;
  if (v951) {
    introspect(JAM.policy.p30) {
      var v950 = emblFile.search(/AC/)
    }
    v862 = v950 == -1;
  }
  var v737 = v862;
  var v864 = !v737;
  if (v864) {
    introspect(JAM.policy.p30) {
      var v863 = emblFile.search(/DE/)
    }
    v737 = v863 == -1;
  }
  var v515 = v737;
  var v739 = !v515;
  if (v739) {
    introspect(JAM.policy.p30) {
      var v738 = emblFile.search(/SQ/)
    }
    v515 = v738 == -1;
  }
  var v146 = v515;
  if (v146) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  introspect(JAM.policy.p30) {
    var v516 = theNumber$$2.search(/\d/)
  }
  var v147 = v516 == -1;
  if (v147) {
    alert("Please enter a number.");
    return false;
  }
  var v149 = theNumber$$2 > maxInput$$2;
  if (v149) {
    var v517 = "Please enter a number less than or equal to " + maxInput$$2;
    var v148 = v517 + ".";
    alert(v148);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  introspect(JAM.policy.p30) {
    var v518 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i)
  }
  var v150 = v518 != -1;
  if (v150) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  introspect(JAM.policy.p30) {
    var v519 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i)
  }
  var v151 = v519 != -1;
  if (v151) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  introspect(JAM.policy.p30) {
    var v952 = genBankFile.search(/LOCUS/)
  }
  var v865 = v952 == -1;
  var v954 = !v865;
  if (v954) {
    introspect(JAM.policy.p30) {
      var v953 = genBankFile.search(/DEFINITION/)
    }
    v865 = v953 == -1;
  }
  var v740 = v865;
  var v867 = !v740;
  if (v867) {
    introspect(JAM.policy.p30) {
      var v866 = genBankFile.search(/ACCESSION/)
    }
    v740 = v866 == -1;
  }
  var v520 = v740;
  var v742 = !v520;
  if (v742) {
    introspect(JAM.policy.p30) {
      var v741 = genBankFile.search(/ORIGIN/)
    }
    v520 = v741 == -1;
  }
  var v152 = v520;
  if (v152) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  introspect(JAM.policy.p30) {
    var v955 = genBankFile$$1.search(/LOCUS/)
  }
  var v868 = v955 == -1;
  var v957 = !v868;
  if (v957) {
    introspect(JAM.policy.p30) {
      var v956 = genBankFile$$1.search(/DEFINITION/)
    }
    v868 = v956 == -1;
  }
  var v743 = v868;
  var v870 = !v743;
  if (v870) {
    introspect(JAM.policy.p30) {
      var v869 = genBankFile$$1.search(/ACCESSION/)
    }
    v743 = v869 == -1;
  }
  var v521 = v743;
  var v745 = !v521;
  if (v745) {
    introspect(JAM.policy.p30) {
      var v744 = genBankFile$$1.search(/ORIGIN/)
    }
    v521 = v744 == -1;
  }
  var v153 = v521;
  if (v153) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  introspect(JAM.policy.p30) {
    var v522 = genBankFile$$1.search(/FEATURES {13}/)
  }
  var v154 = v522 == -1;
  if (v154) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  introspect(JAM.policy.p30) {
    var v958 = emblFile$$1.search(/ID/)
  }
  var v871 = v958 == -1;
  var v960 = !v871;
  if (v960) {
    introspect(JAM.policy.p30) {
      var v959 = emblFile$$1.search(/AC/)
    }
    v871 = v959 == -1;
  }
  var v746 = v871;
  var v873 = !v746;
  if (v873) {
    introspect(JAM.policy.p30) {
      var v872 = emblFile$$1.search(/DE/)
    }
    v746 = v872 == -1;
  }
  var v523 = v746;
  var v748 = !v523;
  if (v748) {
    introspect(JAM.policy.p30) {
      var v747 = emblFile$$1.search(/SQ/)
    }
    v523 = v747 == -1;
  }
  var v155 = v523;
  if (v155) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  introspect(JAM.policy.p30) {
    var v524 = emblFile$$1.search(/^FT/m)
  }
  var v156 = v524 == -1;
  if (v156) {
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
  var v164 = i$$5 < stopBase;
  for (;v164;) {
    var v157 = i$$5 + 1;
    lineOfText = rightNum(v157, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v525 = basePerLine / groupSize;
    var v161 = j$$6 <= v525;
    for (;v161;) {
      var v160 = k < groupSize;
      for (;v160;) {
        var v158 = lineOfText;
        var v526 = k + i$$5;
        introspect(JAM.policy.p40) {
          var v159 = text$$10.charAt(v526)
        }
        lineOfText = v158 + v159;
        k = k + 1;
        v160 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v527 = basePerLine / groupSize;
      v161 = j$$6 <= v527;
    }
    var v162 = outputWindow.document;
    var v163 = lineOfText + "\n";
    introspect(JAM.policy.p40) {
      v162.write(v163);
    }
    lineOfText = "";
    v164 = i$$5 < stopBase;
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
    var v528 = adjustment < 0;
    if (v528) {
      v528 = adjusted >= 0;
    }
    var v165 = v528;
    if (v165) {
      adjusted = adjusted + 1;
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
  var v198 = i$$6 < stopBase$$2;
  for (;v198;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v529 = basePerLine$$2 / groupSize$$2;
    var v174 = j$$7 <= v529;
    for (;v174;) {
      var v169 = k$$1 < groupSize$$2;
      for (;v169;) {
        var v530 = i$$6 + k$$1;
        var v166 = v530 >= stopBase$$2;
        if (v166) {
          break;
        }
        var v167 = lineOfText$$1;
        var v531 = k$$1 + i$$6;
        introspect(JAM.policy.p40) {
          var v168 = text$$12.charAt(v531)
        }
        lineOfText$$1 = v167 + v168;
        k$$1 = k$$1 + 1;
        v169 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v172 = numberPosition$$1 == "above";
      if (v172) {
        var v170 = aboveNum;
        var v532 = adjustNumbering(i$$6, numberingAdjustment);
        var v171 = rightNum(v532, "", groupSize$$2, tabIn$$3);
        aboveNum = v170 + v171;
      }
      var v173 = i$$6 >= stopBase$$2;
      if (v173) {
        break;
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v533 = basePerLine$$2 / groupSize$$2;
      v174 = j$$7 <= v533;
    }
    var v197 = numberPosition$$1 == "left";
    if (v197) {
      var v175 = outputWindow.document;
      var v874 = adjustNumbering(lineNum, numberingAdjustment);
      var v749 = rightNum(v874, "", 8, tabIn$$3);
      var v534 = v749 + lineOfText$$1;
      var v176 = v534 + "\n";
      introspect(JAM.policy.p40) {
        v175.write(v176);
      }
      var v180 = strands$$1 == "two";
      if (v180) {
        var v177 = outputWindow.document;
        var v875 = adjustNumbering(lineNum, numberingAdjustment);
        var v750 = rightNum(v875, "", 8, tabIn$$3);
        var v751 = complement(lineOfText$$1);
        var v535 = v750 + v751;
        var v178 = v535 + "\n";
        introspect(JAM.policy.p40) {
          v177.write(v178);
        }
        var v179 = outputWindow.document;
        introspect(JAM.policy.p24) {
          v179.write("\n");
        }
      }
    } else {
      var v196 = numberPosition$$1 == "right";
      if (v196) {
        var v181 = outputWindow.document;
        var v752 = lineOfText$$1;
        var v753 = adjustNumbering(i$$6, numberingAdjustment);
        var v536 = v752 + v753;
        var v182 = v536 + "\n";
        introspect(JAM.policy.p40) {
          v181.write(v182);
        }
        var v186 = strands$$1 == "two";
        if (v186) {
          var v183 = outputWindow.document;
          var v754 = complement(lineOfText$$1);
          var v755 = adjustNumbering(i$$6, numberingAdjustment);
          var v537 = v754 + v755;
          var v184 = v537 + "\n";
          introspect(JAM.policy.p40) {
            v183.write(v184);
          }
          var v185 = outputWindow.document;
          introspect(JAM.policy.p24) {
            v185.write("\n");
          }
        }
      } else {
        var v195 = numberPosition$$1 == "above";
        if (v195) {
          var v187 = outputWindow.document;
          var v188 = aboveNum + "\n";
          introspect(JAM.policy.p40) {
            v187.write(v188);
          }
          var v189 = outputWindow.document;
          var v190 = lineOfText$$1 + "\n";
          introspect(JAM.policy.p40) {
            v189.write(v190);
          }
          var v194 = strands$$1 == "two";
          if (v194) {
            var v191 = outputWindow.document;
            var v538 = complement(lineOfText$$1);
            var v192 = v538 + "\n";
            introspect(JAM.policy.p40) {
              v191.write(v192);
            }
            var v193 = outputWindow.document;
            introspect(JAM.policy.p24) {
              v193.write("\n");
            }
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v198 = i$$6 < stopBase$$2;
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
  var v219 = i$$7 < stopBase$$3;
  for (;v219;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v539 = basePerLine$$3 / groupSize$$3;
    var v207 = j$$8 <= v539;
    for (;v207;) {
      var v202 = k$$2 < groupSize$$3;
      for (;v202;) {
        var v540 = i$$7 + k$$2;
        var v199 = v540 >= stopBase$$3;
        if (v199) {
          break;
        }
        var v200 = lineOfText$$2;
        var v541 = k$$2 + i$$7;
        introspect(JAM.policy.p40) {
          var v201 = text$$13.charAt(v541)
        }
        lineOfText$$2 = v200 + v201;
        k$$2 = k$$2 + 1;
        v202 = k$$2 < groupSize$$3;
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v205 = numberPosition$$2 == "above";
      if (v205) {
        var v203 = aboveNum$$1;
        var v204 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = v203 + v204;
      }
      var v206 = i$$7 >= stopBase$$3;
      if (v206) {
        break;
      }
      k$$2 = 0;
      j$$8 = j$$8 + 1;
      var v542 = basePerLine$$3 / groupSize$$3;
      v207 = j$$8 <= v542;
    }
    var v218 = numberPosition$$2 == "left";
    if (v218) {
      var v208 = outputWindow.document;
      var v756 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v543 = v756 + lineOfText$$2;
      var v209 = v543 + "\n";
      introspect(JAM.policy.p40) {
        v208.write(v209);
      }
    } else {
      var v217 = numberPosition$$2 == "right";
      if (v217) {
        var v210 = outputWindow.document;
        var v544 = lineOfText$$2 + i$$7;
        var v211 = v544 + "\n";
        introspect(JAM.policy.p40) {
          v210.write(v211);
        }
      } else {
        var v216 = numberPosition$$2 == "above";
        if (v216) {
          var v212 = outputWindow.document;
          var v213 = aboveNum$$1 + "\n";
          introspect(JAM.policy.p40) {
            v212.write(v213);
          }
          var v214 = outputWindow.document;
          var v215 = lineOfText$$2 + "\n";
          introspect(JAM.policy.p40) {
            v214.write(v215);
          }
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v219 = i$$7 < stopBase$$3;
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
  var v876 = sequence$$13.length;
  var v757 = v876 <= firstIndexToMutate;
  var v877 = !v757;
  if (v877) {
    v757 = lastIndexToMutate < 0;
  }
  var v545 = v757;
  var v758 = !v545;
  if (v758) {
    v545 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v220 = v545;
  if (v220) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v228 = i$$8 < numMut;
  for (;v228;) {
    maxNum = sequence$$13.length;
    var v546 = Math.random();
    var v221 = v546 * maxNum;
    introspect(JAM.policy.p30) {
      randNum = Math.floor(v221);
    }
    var v547 = randNum < firstIndexToMutate;
    var v759 = !v547;
    if (v759) {
      v547 = randNum > lastIndexToMutate;
    }
    var v222 = v547;
    if (v222) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v228 = i$$8 < numMut;
      continue;
    }
    introspect(JAM.policy.p30) {
      currentChar = sequence$$13.charAt(randNum);
    }
    needNewChar = true;
    for (;needNewChar;) {
      var v548 = Math.random();
      var v549 = components$$1.length;
      var v223 = v548 * v549;
      introspect(JAM.policy.p30) {
        componentsIndex = Math.round(v223);
      }
      var v550 = components$$1.length;
      var v224 = componentsIndex == v550;
      if (v224) {
        componentsIndex = 0;
      }
      var v551 = components$$1[componentsIndex];
      var v225 = v551 != currentChar;
      if (v225) {
        needNewChar = false;
      }
    }
    introspect(JAM.policy.p26) {
      var v552 = sequence$$13.substring(0, randNum)
    }
    var v553 = components$$1[componentsIndex];
    var v226 = v552 + v553;
    var v554 = randNum + 1;
    var v555 = sequence$$13.length;
    introspect(JAM.policy.p41) {
      var v227 = sequence$$13.substring(v554, v555)
    }
    sequence$$13 = v226 + v227;
    i$$8 = i$$8 + 1;
    v228 = i$$8 < numMut;
  }
  var v229 = outputWindow.document;
  var v230 = addReturns(sequence$$13);
  introspect(JAM.policy.p40) {
    v229.write(v230);
  }
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v235 = j$$9 < lengthOut$$1;
  for (;v235;) {
    var v556 = Math.random();
    var v557 = components$$2.length;
    var v231 = v556 * v557;
    introspect(JAM.policy.p30) {
      tempNum$$1 = Math.floor(v231);
    }
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v558 = sequence$$14.length;
    var v234 = v558 == 60;
    if (v234) {
      var v232 = outputWindow.document;
      var v233 = sequence$$14 + "\n";
      introspect(JAM.policy.p40) {
        v232.write(v233);
      }
      sequence$$14 = "";
    }
    j$$9 = j$$9 + 1;
    v235 = j$$9 < lengthOut$$1;
  }
  var v236 = outputWindow.document;
  var v237 = sequence$$14 + "\n";
  introspect(JAM.policy.p40) {
    v236.write(v237);
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
  var v241 = dnaConformation == "circular";
  if (v241) {
    introspect(JAM.policy.p26) {
      var v238 = sequence$$15.substring(0, lookAhead)
    }
    shiftValue = v238.length;
    var v878 = sequence$$15.length;
    var v760 = v878 - lookAhead;
    var v761 = sequence$$15.length;
    introspect(JAM.policy.p41) {
      var v559 = sequence$$15.substring(v760, v761)
    }
    var v239 = v559 + sequence$$15;
    introspect(JAM.policy.p26) {
      var v240 = sequence$$15.substring(0, lookAhead)
    }
    sequence$$15 = v239 + v240;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v242 = outputWindow.document;
  introspect(JAM.policy.p24) {
    v242.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  }
  var v243 = outputWindow.document;
  var v879 = '<tr><td class="title" width="200px">' + "Site:";
  var v762 = v879 + '</td><td class="title">';
  var v560 = v762 + "Positions:";
  var v244 = v560 + "</td></tr>\n";
  introspect(JAM.policy.p40) {
    v243.write(v244);
  }
  var i$$9 = 0;
  var v561 = arrayOfItems.length;
  var v260 = i$$9 < v561;
  for (;v260;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v562 = arrayOfItems[i$$9];
    introspect(JAM.policy.p30) {
      var v245 = v562.match(/\/.+\//)
    }
    matchExp = v245 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    var v880 = arrayOfItems[i$$9];
    introspect(JAM.policy.p30) {
      var v763 = v880.match(/\)\D*\d+/)
    }
    var v563 = v763.toString();
    introspect(JAM.policy.p28) {
      var v246 = v563.replace(/\)\D*/, "")
    }
    cutDistance = parseFloat(v246);
    introspect(JAM.policy.p40) {
      var v252 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    for (;v252;) {
      var v247 = matchExp.lastIndex;
      matchPosition = v247 - cutDistance;
      var v564 = matchPosition >= lowerLimit;
      if (v564) {
        v564 = matchPosition < upperLimit;
      }
      var v250 = v564;
      if (v250) {
        timesFound = timesFound + 1;
        var v248 = tempString$$1 + ", ";
        var v565 = matchPosition - shiftValue;
        var v249 = v565 + 1;
        tempString$$1 = v248 + v249;
      }
      var v566 = matchExp.lastIndex;
      var v764 = RegExp.lastMatch;
      var v567 = v764.length;
      var v251 = v566 - v567;
      matchExp.lastIndex = v251 + 1;
      introspect(JAM.policy.p40) {
        v252 = matchArray$$1 = matchExp.exec(sequence$$15);
      }
    }
    introspect(JAM.policy.p30) {
      var v568 = tempString$$1.search(/\d/)
    }
    var v253 = v568 != -1;
    if (v253) {
      introspect(JAM.policy.p28) {
        tempString$$1 = tempString$$1.replace(/none,\s*/, "");
      }
    }
    var v257 = timesFound == 0;
    if (v257) {
      backGroundClass = "none";
    } else {
      var v256 = timesFound == 1;
      if (v256) {
        backGroundClass = "one";
      } else {
        var v255 = timesFound == 2;
        if (v255) {
          backGroundClass = "two";
        } else {
          var v254 = timesFound == 3;
          if (v254) {
            backGroundClass = "three";
          } else {
            backGroundClass = "many";
          }
        }
      }
    }
    var v258 = outputWindow.document;
    var v1059 = '<tr><td class="' + backGroundClass;
    var v1040 = v1059 + '">';
    var v1081 = arrayOfItems[i$$9];
    introspect(JAM.policy.p30) {
      var v1071 = v1081.match(/\([^\(]+\)/)
    }
    var v1060 = v1071.toString();
    introspect(JAM.policy.p28) {
      var v1041 = v1060.replace(/\(|\)/g, "")
    }
    var v1005 = v1040 + v1041;
    var v961 = v1005 + '</td><td class="';
    var v881 = v961 + backGroundClass;
    var v765 = v881 + '">';
    var v569 = v765 + tempString$$1;
    var v259 = v569 + "</td></tr>\n";
    introspect(JAM.policy.p40) {
      v258.write(v259);
    }
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v570 = arrayOfItems.length;
    v260 = i$$9 < v570;
  }
  var v261 = outputWindow.document;
  introspect(JAM.policy.p24) {
    v261.write("</tbody></table>\n");
  }
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v262 = outputWindow.document;
  introspect(JAM.policy.p24) {
    v262.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  }
  var v263 = outputWindow.document;
  var v1006 = '<tr><td class="title">' + "Pattern:";
  var v962 = v1006 + '</td><td class="title">';
  var v882 = v962 + "Times found:";
  var v766 = v882 + '</td><td class="title">';
  var v571 = v766 + "Percentage:";
  var v264 = v571 + "</td></tr>\n";
  introspect(JAM.policy.p40) {
    v263.write(v264);
  }
  var i$$10 = 0;
  var v572 = arrayOfItems$$1.length;
  var v273 = i$$10 < v572;
  for (;v273;) {
    var tempNumber = 0;
    var v573 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p30) {
      var v265 = v573.match(/\/[^\/]+\//)
    }
    var matchExp$$1 = v265 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    introspect(JAM.policy.p40) {
      var v574 = sequence$$16.search(matchExp$$1)
    }
    var v267 = v574 != -1;
    if (v267) {
      introspect(JAM.policy.p40) {
        var v266 = sequence$$16.match(matchExp$$1)
      }
      tempNumber = v266.length;
    }
    var percentage = 0;
    var v767 = originalLength + 1;
    var v963 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p30) {
      var v883 = v963.match(/\d+/)
    }
    var v768 = parseFloat(v883);
    var v575 = v767 - v768;
    var v270 = v575 > 0;
    if (v270) {
      var v268 = 100 * tempNumber;
      var v576 = originalLength + 1;
      var v884 = arrayOfItems$$1[i$$10];
      introspect(JAM.policy.p30) {
        var v769 = v884.match(/\d+/)
      }
      var v577 = parseFloat(v769);
      var v269 = v576 - v577;
      percentage = v268 / v269;
    }
    var v271 = outputWindow.document;
    var v1082 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p30) {
      var v1072 = v1082.match(/\([^\(]+\)\b/)
    }
    var v1061 = v1072.toString();
    introspect(JAM.policy.p28) {
      var v1042 = v1061.replace(/\(|\)/g, "")
    }
    var v1007 = "<tr><td>" + v1042;
    var v964 = v1007 + "</td><td>";
    var v885 = v964 + tempNumber;
    var v770 = v885 + "</td><td>";
    introspect(JAM.policy.p23) {
      var v771 = percentage.toFixed(2)
    }
    var v578 = v770 + v771;
    var v272 = v578 + "</td></tr>\n";
    introspect(JAM.policy.p40) {
      v271.write(v272);
    }
    i$$10 = i$$10 + 1;
    var v579 = arrayOfItems$$1.length;
    v273 = i$$10 < v579;
  }
  var v274 = outputWindow.document;
  introspect(JAM.policy.p24) {
    v274.write("</tbody></table>\n");
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
  var v580 = sequence$$17.length;
  var v281 = v580 > 0;
  for (;v281;) {
    maxNum$$1 = sequence$$17.length;
    var v581 = Math.random();
    var v275 = v581 * maxNum$$1;
    introspect(JAM.policy.p30) {
      randNum$$1 = Math.floor(v275);
    }
    introspect(JAM.policy.p30) {
      tempChar$$2 = sequence$$17.charAt(randNum$$1);
    }
    tempSeq = tempSeq + tempChar$$2;
    introspect(JAM.policy.p26) {
      tempString1 = sequence$$17.substring(0, randNum$$1);
    }
    var v276 = randNum$$1 + 1;
    var v277 = sequence$$17.length;
    introspect(JAM.policy.p28) {
      tempString2 = sequence$$17.substring(v276, v277);
    }
    sequence$$17 = tempString1 + tempString2;
    var v582 = tempSeq.length;
    var v280 = v582 == 60;
    if (v280) {
      var v278 = outputWindow.document;
      var v279 = tempSeq + "\n";
      introspect(JAM.policy.p40) {
        v278.write(v279);
      }
      tempSeq = "";
    }
    var v583 = sequence$$17.length;
    v281 = v583 > 0;
  }
  var v282 = outputWindow.document;
  var v283 = tempSeq + "\n";
  introspect(JAM.policy.p40) {
    v282.write(v283);
  }
  return true;
}
function rangeExtract(theDocument) {
  var newDna = "";
  var maxInput$$3 = 5E5;
  var matchFound = false;
  var ranges = new Array;
  var v584 = testScript();
  var v284 = v584 == false;
  if (v284) {
    return false;
  }
  var v1062 = theDocument.forms;
  var v1043 = v1062[0];
  var v1008 = v1043.elements;
  var v965 = v1008[0];
  var v886 = checkFormElement(v965);
  var v772 = v886 == false;
  var v888 = !v772;
  if (v888) {
    var v1073 = theDocument.forms;
    var v1063 = v1073[0];
    var v1044 = v1063.elements;
    var v1009 = v1044[0];
    var v966 = v1009.value;
    var v887 = checkSequenceLength(v966, maxInput$$3);
    v772 = v887 == false;
  }
  var v585 = v772;
  var v774 = !v585;
  if (v774) {
    var v1045 = theDocument.forms;
    var v1010 = v1045[0];
    var v967 = v1010.elements;
    var v889 = v967[1];
    var v773 = checkFormElement(v889);
    v585 = v773 == false;
  }
  var v285 = v585;
  if (v285) {
    return false;
  }
  var v968 = theDocument.forms;
  var v890 = v968[0];
  var v775 = v890.elements;
  var v586 = v775[1];
  var v286 = v586.value;
  introspect(JAM.policy.p30) {
    var arrayOfRanges = v286.split(/,/)
  }
  var arrayOfStartAndEnd;
  var i$$11 = 0;
  var v587 = arrayOfRanges.length;
  var v292 = i$$11 < v587;
  for (;v292;) {
    var v287 = arrayOfRanges[i$$11];
    introspect(JAM.policy.p30) {
      arrayOfStartAndEnd = v287.split(/\.\./);
    }
    var v588 = arrayOfStartAndEnd.length;
    var v291 = v588 == 1;
    if (v291) {
      matchFound = true;
      var v589 = arrayOfStartAndEnd[0];
      var v590 = arrayOfStartAndEnd[0];
      var v288 = new Range(v589, v590);
      introspect(JAM.policy.p40) {
        ranges.push(v288);
      }
    } else {
      var v591 = arrayOfStartAndEnd.length;
      var v290 = v591 == 2;
      if (v290) {
        matchFound = true;
        var v592 = arrayOfStartAndEnd[0];
        var v593 = arrayOfStartAndEnd[1];
        var v289 = new Range(v592, v593);
        introspect(JAM.policy.p40) {
          ranges.push(v289);
        }
      }
    }
    i$$11 = i$$11 + 1;
    var v594 = arrayOfRanges.length;
    v292 = i$$11 < v594;
  }
  var v293 = matchFound == false;
  if (v293) {
    alert("No ranges were entered.");
    return false;
  }
  openWindow("Range Extractor Protein");
  openPre();
  var v969 = theDocument.forms;
  var v891 = v969[0];
  var v776 = v891.elements;
  var v595 = v776[0];
  var v294 = v595.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v294);
  i$$11 = 0;
  var v596 = arrayOfFasta$$1.length;
  var v300 = i$$11 < v596;
  for (;v300;) {
    var v295 = arrayOfFasta$$1[i$$11];
    newProtein = getSequenceFromFasta(v295);
    var v296 = arrayOfFasta$$1[i$$11];
    title = getTitleFromFasta(v296);
    newProtein = removeNonProteinAllowDegen(newProtein);
    var v297 = outputWindow.document;
    var v298 = getFastaTitleFromTitleAndSequence(title, newProtein);
    introspect(JAM.policy.p40) {
      v297.write(v298);
    }
    var v1046 = theDocument.forms;
    var v1011 = v1046[0];
    var v970 = v1011.elements;
    var v892 = v970[5];
    var v777 = v892.options;
    var v1047 = theDocument.forms;
    var v1012 = v1047[0];
    var v971 = v1012.elements;
    var v893 = v971[5];
    var v778 = v893.selectedIndex;
    var v597 = v777[v778];
    var v299 = v597.value;
    writeSequenceRanges(newProtein, ranges, v299);
    i$$11 = i$$11 + 1;
    var v598 = arrayOfFasta$$1.length;
    v300 = i$$11 < v598;
  }
  closePre();
  closeWindow();
  return true;
}
function writeSequenceRanges(sequence$$18, ranges$$1, segmentType) {
  var rangeGroup = new RangeGroup(segmentType);
  var v599 = sequence$$18.length;
  var v301 = v599 / 2;
  introspect(JAM.policy.p40) {
    var center_base = Math.round(v301)
  }
  var i$$12 = 0;
  var v600 = ranges$$1.length;
  var v315 = i$$12 < v600;
  for (;v315;) {
    var v302 = ranges$$1[i$$12];
    var v894 = ranges$$1[i$$12];
    var v779 = v894.start;
    var v601 = v779.toString();
    introspect(JAM.policy.p28) {
      var v1118 = v601.replace(/start|begin/gi, 1)
    }
    v302.start = v1118;
    var v303 = ranges$$1[i$$12];
    var v895 = ranges$$1[i$$12];
    var v780 = v895.start;
    var v602 = v780.toString();
    var v603 = sequence$$18.length;
    introspect(JAM.policy.p28) {
      var v1119 = v602.replace(/stop|end/gi, v603)
    }
    v303.start = v1119;
    var v304 = ranges$$1[i$$12];
    var v896 = ranges$$1[i$$12];
    var v781 = v896.start;
    var v604 = v781.toString();
    var v605 = sequence$$18.length;
    introspect(JAM.policy.p28) {
      var v1120 = v604.replace(/length/gi, v605)
    }
    v304.start = v1120;
    var v305 = ranges$$1[i$$12];
    var v897 = ranges$$1[i$$12];
    var v782 = v897.start;
    var v606 = v782.toString();
    introspect(JAM.policy.p28) {
      var v1121 = v606.replace(/middle|center|centre/gi, center_base)
    }
    v305.start = v1121;
    var v306 = ranges$$1[i$$12];
    var v898 = ranges$$1[i$$12];
    var v783 = v898.stop;
    var v607 = v783.toString();
    introspect(JAM.policy.p28) {
      var v1122 = v607.replace(/start|begin/gi, 1)
    }
    v306.stop = v1122;
    var v307 = ranges$$1[i$$12];
    var v899 = ranges$$1[i$$12];
    var v784 = v899.stop;
    var v608 = v784.toString();
    var v609 = sequence$$18.length;
    introspect(JAM.policy.p28) {
      var v1123 = v608.replace(/stop|end/gi, v609)
    }
    v307.stop = v1123;
    var v308 = ranges$$1[i$$12];
    var v900 = ranges$$1[i$$12];
    var v785 = v900.stop;
    var v610 = v785.toString();
    var v611 = sequence$$18.length;
    introspect(JAM.policy.p28) {
      var v1124 = v610.replace(/length/gi, v611)
    }
    v308.stop = v1124;
    var v309 = ranges$$1[i$$12];
    var v901 = ranges$$1[i$$12];
    var v786 = v901.stop;
    var v612 = v786.toString();
    introspect(JAM.policy.p28) {
      var v1125 = v612.replace(/middle|center|centre/gi, center_base)
    }
    v309.stop = v1125;
    try {
      var v310 = ranges$$1[i$$12];
      var v972 = ranges$$1[i$$12];
      var v902 = v972.start;
      var v787 = v902.toString();
      var v613 = eval(v787);
      var v1126 = parseInt(v613);
      v310.start = v1126;
    } catch (e$$5) {
      var v788 = ranges$$1[i$$12];
      var v614 = v788.start;
      var v311 = "Could not evaluate the following expression: " + v614;
      alert(v311);
      return false;
    }
    try {
      var v312 = ranges$$1[i$$12];
      var v973 = ranges$$1[i$$12];
      var v903 = v973.stop;
      var v789 = v903.toString();
      var v615 = eval(v789);
      var v1127 = parseInt(v615);
      v312.stop = v1127;
    } catch (e$$6) {
      var v790 = ranges$$1[i$$12];
      var v616 = v790.stop;
      var v313 = "Could not evaluate the following expression: " + v616;
      alert(v313);
      return false;
    }
    var v314 = ranges$$1[i$$12];
    introspect(JAM.policy.p40) {
      rangeGroup.addRange(v314);
    }
    i$$12 = i$$12 + 1;
    var v617 = ranges$$1.length;
    v315 = i$$12 < v617;
  }
  introspect(JAM.policy.p40) {
    rangeGroup.writeRanges(sequence$$18);
  }
  return;
}
function getSequence(sequence$$19) {
  var problem = false;
  var warnings = new Array;
  var v618 = this.start;
  var v619 = this.stop;
  var v330 = v618 == v619;
  if (v330) {
    var v620 = this.start;
    var v317 = v620 < 1;
    if (v317) {
      problem = true;
      var v791 = this.start;
      var v621 = "position value of " + v791;
      var v316 = v621 + " is less than 1";
      introspect(JAM.policy.p40) {
        warnings.push(v316);
      }
    }
    var v622 = this.start;
    var v623 = sequence$$19.length;
    var v319 = v622 > v623;
    if (v319) {
      problem = true;
      var v792 = this.start;
      var v624 = "position value of " + v792;
      var v318 = v624 + " is greater than the sequence length";
      introspect(JAM.policy.p40) {
        warnings.push(v318);
      }
    }
  } else {
    var v625 = this.start;
    var v321 = v625 < 1;
    if (v321) {
      problem = true;
      var v793 = this.start;
      var v626 = "position value of " + v793;
      var v320 = v626 + " is less than 1";
      introspect(JAM.policy.p40) {
        warnings.push(v320);
      }
    }
    var v627 = this.stop;
    var v323 = v627 < 1;
    if (v323) {
      problem = true;
      var v794 = this.stop;
      var v628 = "position value of " + v794;
      var v322 = v628 + " is less than 1";
      introspect(JAM.policy.p40) {
        warnings.push(v322);
      }
    }
    var v629 = this.start;
    var v630 = sequence$$19.length;
    var v325 = v629 > v630;
    if (v325) {
      problem = true;
      var v795 = this.start;
      var v631 = "position value of " + v795;
      var v324 = v631 + " is greater than the sequence length";
      introspect(JAM.policy.p40) {
        warnings.push(v324);
      }
    }
    var v632 = this.stop;
    var v633 = sequence$$19.length;
    var v327 = v632 > v633;
    if (v327) {
      problem = true;
      var v796 = this.stop;
      var v634 = "position value of " + v796;
      var v326 = v634 + " is greater than the sequence length";
      introspect(JAM.policy.p40) {
        warnings.push(v326);
      }
    }
    var v635 = this.start;
    var v636 = this.stop;
    var v329 = v635 > v636;
    if (v329) {
      problem = true;
      var v904 = this.start;
      var v797 = "stop position is less than start position in range " + v904;
      var v637 = v797 + " to ";
      var v638 = this.stop;
      var v328 = v637 + v638;
      introspect(JAM.policy.p40) {
        warnings.push(v328);
      }
    }
  }
  if (problem) {
    introspect(JAM.policy.p24) {
      var v639 = warnings.join(",\n")
    }
    var v331 = "An entry was skipped because of the following:\n" + v639;
    alert(v331);
    return false;
  } else {
    var v640 = this.start;
    var v641 = this.stop;
    var v335 = v640 == v641;
    if (v335) {
      var v642 = this.start;
      var v332 = v642 - 1;
      introspect(JAM.policy.p40) {
        return sequence$$19.charAt(v332);
      }
    } else {
      var v643 = this.start;
      var v333 = v643 - 1;
      var v334 = this.stop;
      introspect(JAM.policy.p41) {
        return sequence$$19.substring(v333, v334);
      }
    }
  }
  return;
}
function getTitle() {
  var v644 = this.start;
  var v645 = this.stop;
  var v339 = v644 == v645;
  if (v339) {
    var v336 = this.start;
    return "&gt;residue " + v336;
  } else {
    var v798 = this.start;
    var v646 = "&gt;residue " + v798;
    var v337 = v646 + " to ";
    var v338 = this.stop;
    return v337 + v338;
  }
  return;
}
function Range(start$$4, stop) {
  this.start = start$$4;
  this.stop = stop;
  return;
}
function addRange(range$$5) {
  var v340 = this.ranges;
  introspect(JAM.policy.p40) {
    v340.push(range$$5);
  }
  return;
}
function writeRanges(sequence$$20) {
  function v9(str$$15, p1$$9, offset$$17, s$$11) {
    var v647 = p1$$9.length;
    var v341 = offset$$17 + v647;
    introspect(JAM.policy.p41) {
      return sequence$$20.substring(offset$$17, v341);
    }
  }
  function v8(str$$14, p1$$8, p2$$3, offset$$16, s$$10) {
    var v342 = p1$$8;
    var v648 = p1$$8.length;
    var v799 = p1$$8.length;
    var v800 = p2$$3.length;
    var v649 = v799 + v800;
    introspect(JAM.policy.p41) {
      var v343 = sequence$$20.substring(v648, v649)
    }
    return v342 + v343;
  }
  function v7(str$$13, p1$$7, offset$$15, s$$9) {
    var v344 = ["A", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "Y"];
    var v345 = p1$$7.length;
    return getRandomSequence(v344, v345);
  }
  function v6(str$$12, p1$$6, p2$$2, offset$$14, s$$8) {
    var v346 = p1$$6;
    var v650 = ["A", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "Y"];
    var v651 = p2$$2.length;
    var v347 = getRandomSequence(v650, v651);
    return v346 + v347;
  }
  function v5(str$$11, p1$$5, offset$$13, s$$7) {
    return p1$$5.toLowerCase();
  }
  function v4(str$$10, p1$$4, p2$$1, offset$$12, s$$6) {
    var v348 = p1$$4;
    var v349 = p2$$1.toLowerCase();
    return v348 + v349;
  }
  function v3(str$$9, p1$$3, offset$$11, s$$5) {
    return p1$$3.toUpperCase();
  }
  function v2(str$$8, p1$$2, p2, offset$$10, s$$4) {
    var v350 = p1$$2;
    var v351 = p2.toUpperCase();
    return v350 + v351;
  }
  var sequenceArray$$1 = new Array;
  var v652 = this.type;
  var v357 = v652 == "new_sequence";
  if (v357) {
    var i$$13 = 0;
    var v801 = this.ranges;
    var v653 = v801.length;
    var v354 = i$$13 < v653;
    for (;v354;) {
      var v905 = this.ranges;
      var v802 = v905[i$$13];
      introspect(JAM.policy.p40) {
        var v654 = v802.getSequence(sequence$$20)
      }
      var v353 = v654 != "";
      if (v353) {
        var v803 = this.ranges;
        var v655 = v803[i$$13];
        introspect(JAM.policy.p40) {
          var v352 = v655.getSequence(sequence$$20)
        }
        introspect(JAM.policy.p40) {
          sequenceArray$$1.push(v352);
        }
      }
      i$$13 = i$$13 + 1;
      var v804 = this.ranges;
      var v656 = v804.length;
      v354 = i$$13 < v656;
    }
    var v355 = outputWindow.document;
    introspect(JAM.policy.p24) {
      var v805 = sequenceArray$$1.join("")
    }
    var v657 = addReturns(v805);
    var v356 = v657 + "\n\n";
    introspect(JAM.policy.p40) {
      v355.write(v356);
    }
    return true;
  }
  var v658 = this.type;
  var v364 = v658 == "separate";
  if (v364) {
    i$$13 = 0;
    var v806 = this.ranges;
    var v659 = v806.length;
    var v363 = i$$13 < v659;
    for (;v363;) {
      var v906 = this.ranges;
      var v807 = v906[i$$13];
      introspect(JAM.policy.p40) {
        var v660 = v807.getSequence(sequence$$20)
      }
      var v362 = v660 != "";
      if (v362) {
        var v358 = outputWindow.document;
        var v907 = this.ranges;
        var v808 = v907[i$$13];
        var v661 = v808.getTitle();
        var v359 = v661 + "\n";
        introspect(JAM.policy.p40) {
          v358.write(v359);
        }
        var v360 = outputWindow.document;
        var v974 = this.ranges;
        var v908 = v974[i$$13];
        introspect(JAM.policy.p40) {
          var v809 = v908.getSequence(sequence$$20)
        }
        var v662 = addReturns(v809);
        var v361 = v662 + "\n\n";
        introspect(JAM.policy.p40) {
          v360.write(v361);
        }
      }
      i$$13 = i$$13 + 1;
      var v810 = this.ranges;
      var v663 = v810.length;
      v363 = i$$13 < v663;
    }
    return true;
  }
  var v664 = this.type;
  var v372 = v664 == "uppercased";
  if (v372) {
    var re$$3;
    sequence$$20 = sequence$$20.toLowerCase();
    i$$13 = 0;
    var v811 = this.ranges;
    var v665 = v811.length;
    var v369 = i$$13 < v665;
    for (;v369;) {
      var v909 = this.ranges;
      var v812 = v909[i$$13];
      introspect(JAM.policy.p40) {
        var v666 = v812.getSequence(sequence$$20)
      }
      var v368 = v666 != "";
      if (v368) {
        var v910 = this.ranges;
        var v813 = v910[i$$13];
        var v667 = v813.start;
        var v367 = v667 > 1;
        if (v367) {
          var v1048 = this.ranges;
          var v1013 = v1048[i$$13];
          var v975 = v1013.start;
          var v911 = v975 - 1;
          var v814 = "(.{" + v911;
          var v668 = v814 + "})\\B(.{";
          var v1014 = this.ranges;
          var v976 = v1014[i$$13];
          var v912 = v976.stop;
          var v1015 = this.ranges;
          var v977 = v1015[i$$13];
          var v913 = v977.start;
          var v815 = v912 - v913;
          var v669 = v815 + 1;
          var v365 = v668 + v669;
          re$$3 = v365 + "})";
          re$$3 = new RegExp(re$$3);
          introspect(JAM.policy.p41) {
            sequence$$20 = sequence$$20.replace(re$$3, v2);
          }
        } else {
          var v1016 = this.ranges;
          var v978 = v1016[i$$13];
          var v914 = v978.stop;
          var v1017 = this.ranges;
          var v979 = v1017[i$$13];
          var v915 = v979.start;
          var v816 = v914 - v915;
          var v670 = v816 + 1;
          var v366 = "(.{" + v670;
          re$$3 = v366 + "})";
          re$$3 = new RegExp(re$$3);
          introspect(JAM.policy.p41) {
            sequence$$20 = sequence$$20.replace(re$$3, v3);
          }
        }
      }
      i$$13 = i$$13 + 1;
      var v817 = this.ranges;
      var v671 = v817.length;
      v369 = i$$13 < v671;
    }
    var v370 = outputWindow.document;
    var v672 = addReturns(sequence$$20);
    var v371 = v672 + "\n\n";
    introspect(JAM.policy.p40) {
      v370.write(v371);
    }
    return true;
  }
  var v673 = this.type;
  var v380 = v673 == "lowercased";
  if (v380) {
    sequence$$20 = sequence$$20.toUpperCase();
    i$$13 = 0;
    var v818 = this.ranges;
    var v674 = v818.length;
    var v377 = i$$13 < v674;
    for (;v377;) {
      var v916 = this.ranges;
      var v819 = v916[i$$13];
      introspect(JAM.policy.p40) {
        var v675 = v819.getSequence(sequence$$20)
      }
      var v376 = v675 != "";
      if (v376) {
        var v917 = this.ranges;
        var v820 = v917[i$$13];
        var v676 = v820.start;
        var v375 = v676 > 1;
        if (v375) {
          var v1049 = this.ranges;
          var v1018 = v1049[i$$13];
          var v980 = v1018.start;
          var v918 = v980 - 1;
          var v821 = "(.{" + v918;
          var v677 = v821 + "})\\B(.{";
          var v1019 = this.ranges;
          var v981 = v1019[i$$13];
          var v919 = v981.stop;
          var v1020 = this.ranges;
          var v982 = v1020[i$$13];
          var v920 = v982.start;
          var v822 = v919 - v920;
          var v678 = v822 + 1;
          var v373 = v677 + v678;
          re$$3 = v373 + "})";
          re$$3 = new RegExp(re$$3);
          introspect(JAM.policy.p41) {
            sequence$$20 = sequence$$20.replace(re$$3, v4);
          }
        } else {
          var v1021 = this.ranges;
          var v983 = v1021[i$$13];
          var v921 = v983.stop;
          var v1022 = this.ranges;
          var v984 = v1022[i$$13];
          var v922 = v984.start;
          var v823 = v921 - v922;
          var v679 = v823 + 1;
          var v374 = "(.{" + v679;
          re$$3 = v374 + "})";
          re$$3 = new RegExp(re$$3);
          introspect(JAM.policy.p41) {
            sequence$$20 = sequence$$20.replace(re$$3, v5);
          }
        }
      }
      i$$13 = i$$13 + 1;
      var v824 = this.ranges;
      var v680 = v824.length;
      v377 = i$$13 < v680;
    }
    var v378 = outputWindow.document;
    var v681 = addReturns(sequence$$20);
    var v379 = v681 + "\n\n";
    introspect(JAM.policy.p40) {
      v378.write(v379);
    }
    return true;
  }
  var v682 = this.type;
  var v388 = v682 == "randomized";
  if (v388) {
    i$$13 = 0;
    var v825 = this.ranges;
    var v683 = v825.length;
    var v385 = i$$13 < v683;
    for (;v385;) {
      var v923 = this.ranges;
      var v826 = v923[i$$13];
      introspect(JAM.policy.p40) {
        var v684 = v826.getSequence(sequence$$20)
      }
      var v384 = v684 != "";
      if (v384) {
        var v924 = this.ranges;
        var v827 = v924[i$$13];
        var v685 = v827.start;
        var v383 = v685 > 1;
        if (v383) {
          var v1050 = this.ranges;
          var v1023 = v1050[i$$13];
          var v985 = v1023.start;
          var v925 = v985 - 1;
          var v828 = "(.{" + v925;
          var v686 = v828 + "})\\B(.{";
          var v1024 = this.ranges;
          var v986 = v1024[i$$13];
          var v926 = v986.stop;
          var v1025 = this.ranges;
          var v987 = v1025[i$$13];
          var v927 = v987.start;
          var v829 = v926 - v927;
          var v687 = v829 + 1;
          var v381 = v686 + v687;
          re$$3 = v381 + "})";
          re$$3 = new RegExp(re$$3);
          introspect(JAM.policy.p41) {
            sequence$$20 = sequence$$20.replace(re$$3, v6);
          }
        } else {
          var v1026 = this.ranges;
          var v988 = v1026[i$$13];
          var v928 = v988.stop;
          var v1027 = this.ranges;
          var v989 = v1027[i$$13];
          var v929 = v989.start;
          var v830 = v928 - v929;
          var v688 = v830 + 1;
          var v382 = "(.{" + v688;
          re$$3 = v382 + "})";
          re$$3 = new RegExp(re$$3);
          introspect(JAM.policy.p41) {
            sequence$$20 = sequence$$20.replace(re$$3, v7);
          }
        }
      }
      i$$13 = i$$13 + 1;
      var v831 = this.ranges;
      var v689 = v831.length;
      v385 = i$$13 < v689;
    }
    var v386 = outputWindow.document;
    var v690 = addReturns(sequence$$20);
    var v387 = v690 + "\n\n";
    introspect(JAM.policy.p40) {
      v386.write(v387);
    }
    return true;
  }
  var v691 = this.type;
  var v398 = v691 == "preserved";
  if (v398) {
    var v389 = ["A", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "Y"];
    var v390 = sequence$$20.length;
    var randomSequence = getRandomSequence(v389, v390);
    i$$13 = 0;
    var v832 = this.ranges;
    var v692 = v832.length;
    var v395 = i$$13 < v692;
    for (;v395;) {
      var v930 = this.ranges;
      var v833 = v930[i$$13];
      introspect(JAM.policy.p40) {
        var v693 = v833.getSequence(sequence$$20)
      }
      var v394 = v693 != "";
      if (v394) {
        var v931 = this.ranges;
        var v834 = v931[i$$13];
        var v694 = v834.start;
        var v393 = v694 > 1;
        if (v393) {
          var v1051 = this.ranges;
          var v1028 = v1051[i$$13];
          var v990 = v1028.start;
          var v932 = v990 - 1;
          var v835 = "(.{" + v932;
          var v695 = v835 + "})\\B(.{";
          var v1029 = this.ranges;
          var v991 = v1029[i$$13];
          var v933 = v991.stop;
          var v1030 = this.ranges;
          var v992 = v1030[i$$13];
          var v934 = v992.start;
          var v836 = v933 - v934;
          var v696 = v836 + 1;
          var v391 = v695 + v696;
          re$$3 = v391 + "})";
          re$$3 = new RegExp(re$$3);
          introspect(JAM.policy.p41) {
            randomSequence = randomSequence.replace(re$$3, v8);
          }
        } else {
          var v1031 = this.ranges;
          var v993 = v1031[i$$13];
          var v935 = v993.stop;
          var v1032 = this.ranges;
          var v994 = v1032[i$$13];
          var v936 = v994.start;
          var v837 = v935 - v936;
          var v697 = v837 + 1;
          var v392 = "(.{" + v697;
          re$$3 = v392 + "})";
          re$$3 = new RegExp(re$$3);
          introspect(JAM.policy.p41) {
            randomSequence = randomSequence.replace(re$$3, v9);
          }
        }
      }
      i$$13 = i$$13 + 1;
      var v838 = this.ranges;
      var v698 = v838.length;
      v395 = i$$13 < v698;
    }
    var v396 = outputWindow.document;
    var v699 = addReturns(randomSequence);
    var v397 = v699 + "\n\n";
    introspect(JAM.policy.p40) {
      v396.write(v397);
    }
    return true;
  }
  return;
}
function RangeGroup(type$$25) {
  this.type = type$$25;
  var v1128 = new Array;
  this.ranges = v1128;
  return;
}
new Range(0, 0);
var v399 = Range.prototype;
v399.getSequence = getSequence;
var v400 = Range.prototype;
v400.getTitle = getTitle;
new RangeGroup("", "");
var v401 = RangeGroup.prototype;
v401.addRange = addRange;
var v402 = RangeGroup.prototype;
v402.writeRanges = writeRanges;
document.onload = v10;
introspect(JAM.policy.p24) {
  var v403 = document.getElementById("submitbtn")
}
v403.onclick = v11;
introspect(JAM.policy.p24) {
  var v404 = document.getElementById("clearbtn")
}
v404.onclick = v12
