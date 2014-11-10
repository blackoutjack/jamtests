function v12() {
  var v877 = document.forms;
  var v729 = v877[0];
  var v424 = v729.elements;
  var v13 = v424[0];
  v13.value = " ";
  return;
}
function v11() {
  try {
    windowExtract(document);
  } catch (e$$7) {
    var v14 = "The following error was encountered: " + e$$7;
    alert(v14);
  }
  return;
}
function v10() {
  var v425 = document.main_form;
  var v15 = v425.main_submit;
  v15.focus();
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
  var v16 = arrayOfSequences[0];
  var lengthOfAlign = v16.length;
  var v426 = arrayOfSequences.length;
  var v17 = v426 < 2;
  if (v17) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v427 = arrayOfTitles.length;
  var v19 = i$$1 < v427;
  for (;v19;) {
    var v984 = arrayOfTitles[i$$1];
    introspect(JAM.policy.p30) {
      var v878 = v984.search(/\S/)
    }
    var v730 = v878 == -1;
    var v880 = !v730;
    if (v880) {
      var v985 = arrayOfSequences[i$$1];
      introspect(JAM.policy.p30) {
        var v879 = v985.search(/\S/)
      }
      v730 = v879 == -1;
    }
    var v428 = v730;
    var v732 = !v428;
    if (v732) {
      var v881 = arrayOfSequences[i$$1];
      var v731 = v881.length;
      v428 = v731 != lengthOfAlign;
    }
    var v18 = v428;
    if (v18) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1 = i$$1 + 1;
    var v429 = arrayOfTitles.length;
    v19 = i$$1 < v429;
  }
  return true;
}
function checkCodonTable(codonTable) {
  introspect(JAM.policy.p30) {
    var v1052 = codonTable.search(/AmAcid/)
  }
  var v986 = v1052 == -1;
  var v1054 = !v986;
  if (v1054) {
    introspect(JAM.policy.p30) {
      var v1053 = codonTable.search(/Codon/)
    }
    v986 = v1053 == -1;
  }
  var v882 = v986;
  var v988 = !v882;
  if (v988) {
    introspect(JAM.policy.p30) {
      var v987 = codonTable.search(/Number/)
    }
    v882 = v987 == -1;
  }
  var v733 = v882;
  var v884 = !v733;
  if (v884) {
    introspect(JAM.policy.p30) {
      var v883 = codonTable.search(/\/1000/)
    }
    v733 = v883 == -1;
  }
  var v430 = v733;
  var v735 = !v430;
  if (v735) {
    introspect(JAM.policy.p30) {
      var v734 = codonTable.search(/Fraction\s*\.\./)
    }
    v430 = v734 == -1;
  }
  var v20 = v430;
  if (v20) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v736 = formElement.value;
  introspect(JAM.policy.p30) {
    var v431 = v736.search(/\S/)
  }
  var v21 = v431 == -1;
  if (v21) {
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
  var v432 = arrayOfPatterns.length;
  var v24 = z$$2 < v432;
  for (;v24;) {
    var v737 = arrayOfPatterns[z$$2];
    introspect(JAM.policy.p30) {
      var v433 = v737.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/)
    }
    var v22 = v433 == -1;
    if (v22) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v738 = arrayOfPatterns[z$$2];
    var v434 = moreExpressionCheck(v738);
    var v23 = v434 == false;
    if (v23) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v435 = arrayOfPatterns.length;
    v24 = z$$2 < v435;
  }
  var v25 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v25);
  var v26 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v26);
  var j = 0;
  var v436 = arrayOfPatterns.length;
  var v33 = j < v436;
  for (;v33;) {
    var v27 = geneticCodeMatchExp;
    var v28 = j;
    var v885 = arrayOfPatterns[j];
    introspect(JAM.policy.p30) {
      var v739 = v885.match(/\/.+\//)
    }
    var v437 = v739 + "gi";
    var v1207 = eval(v437);
    introspect(JAM.policy.p13) {
      v27[v28] = v1207;
    }
    var v29 = geneticCodeMatchResult;
    var v30 = j;
    var v740 = arrayOfPatterns[j];
    introspect(JAM.policy.p30) {
      var v438 = v740.match(/=[a-zA-Z\*]/)
    }
    var v1208 = v438.toString();
    introspect(JAM.policy.p13) {
      v29[v30] = v1208;
    }
    var v31 = geneticCodeMatchResult;
    var v32 = j;
    var v439 = geneticCodeMatchResult[j];
    introspect(JAM.policy.p28) {
      var v1209 = v439.replace(/=/g, "")
    }
    introspect(JAM.policy.p13) {
      v31[v32] = v1209;
    }
    j = j + 1;
    var v440 = arrayOfPatterns.length;
    v33 = j < v440;
  }
  var i$$2 = 0;
  var v741 = testSequence.length;
  var v441 = v741 - 3;
  var v40 = i$$2 <= v441;
  for (;v40;) {
    var v34 = i$$2 + 3;
    introspect(JAM.policy.p28) {
      codon = testSequence.substring(i$$2, v34);
    }
    j = 0;
    var v442 = geneticCodeMatchExp.length;
    var v38 = j < v442;
    for (;v38;) {
      var v742 = geneticCodeMatchExp[j];
      introspect(JAM.policy.p40) {
        var v443 = codon.search(v742)
      }
      var v37 = v443 != -1;
      if (v37) {
        var v36 = oneMatch == true;
        if (v36) {
          var v444 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v35 = v444 + ".";
          alert(v35);
          return false;
        }
        oneMatch = true;
      }
      j = j + 1;
      var v445 = geneticCodeMatchExp.length;
      v38 = j < v445;
    }
    var v39 = oneMatch == false;
    if (v39) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v743 = testSequence.length;
    var v446 = v743 - 3;
    v40 = i$$2 <= v446;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v447 = arrayOfPatterns$$1.length;
  var v42 = z$$3 < v447;
  for (;v42;) {
    var v744 = arrayOfPatterns$$1[z$$3];
    introspect(JAM.policy.p30) {
      var v448 = v744.search(/[^acdefghiklmnpqrstvwyz]/i)
    }
    var v41 = v448 != -1;
    if (v41) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v449 = arrayOfPatterns$$1.length;
    v42 = z$$3 < v449;
  }
  var i$$3 = 0;
  var v450 = arrayOfPatterns$$1.length;
  var v46 = i$$3 < v450;
  for (;v46;) {
    var v745 = arrayOfPatterns$$1[i$$3];
    var v451 = "[" + v745;
    var v43 = v451 + "]";
    var re = new RegExp(v43, "gi");
    var j$$1 = i$$3 + 1;
    var v452 = arrayOfPatterns$$1.length;
    var v45 = j$$1 < v452;
    for (;v45;) {
      var v746 = arrayOfPatterns$$1[j$$1];
      introspect(JAM.policy.p40) {
        var v453 = v746.search(re)
      }
      var v44 = v453 != -1;
      if (v44) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1 = j$$1 + 1;
      var v454 = arrayOfPatterns$$1.length;
      v45 = j$$1 < v454;
    }
    i$$3 = i$$3 + 1;
    var v455 = arrayOfPatterns$$1.length;
    v46 = i$$3 < v455;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v456 = arrayOfPatterns$$2.length;
  var v49 = z$$4 < v456;
  for (;v49;) {
    var v747 = arrayOfPatterns$$2[z$$4];
    introspect(JAM.policy.p30) {
      var v457 = v747.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i)
    }
    var v47 = v457 == -1;
    if (v47) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v748 = arrayOfPatterns$$2[z$$4];
    var v458 = moreExpressionCheck(v748);
    var v48 = v458 == false;
    if (v48) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v459 = arrayOfPatterns$$2.length;
    v49 = z$$4 < v459;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v886 = getSequenceFromFasta(text$$7);
  introspect(JAM.policy.p28) {
    var v749 = v886.replace(/[^A-Za-z]/g, "")
  }
  var v460 = v749.length;
  var v51 = v460 > maxInput;
  if (v51) {
    var v461 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v50 = v461 + " characters.";
    alert(v50);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v462 = text$$8.length;
  var v53 = v462 > maxInput$$1;
  if (v53) {
    var v463 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v52 = v463 + " characters.";
    alert(v52);
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
  var v54 = outputWindow.document;
  introspect(JAM.policy.p24) {
    v54.write("</form>");
  }
  return true;
}
function closePre() {
  var v55 = outputWindow.document;
  introspect(JAM.policy.p24) {
    v55.write("</div>");
  }
  var v56 = outputWindow.document;
  introspect(JAM.policy.p24) {
    v56.write("</pre>\n");
  }
  return;
}
function closeTextArea() {
  var v57 = outputWindow.document;
  introspect(JAM.policy.p24) {
    v57.write("</textarea>");
  }
  return true;
}
function closeWindow() {
  var v58 = outputWindow.document;
  introspect(JAM.policy.p24) {
    v58.write("</body>\n</html>\n");
  }
  outputWindow.status = "Done.";
  var v59 = outputWindow.document;
  v59.close();
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
  var v464 = alignArray.length;
  var v60 = v464 < 3;
  if (v60) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v465 = alignArray.length;
  var v62 = i$$4 < v465;
  for (;v62;) {
    var v750 = alignArray[i$$4];
    introspect(JAM.policy.p30) {
      var v466 = v750.search(/[^\s]+\s/)
    }
    var v61 = v466 == -1;
    if (v61) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4 = i$$4 + 1;
    var v467 = alignArray.length;
    v62 = i$$4 < v467;
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
    var v468 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v65 = v468 != -1;
  if (v65) {
    introspect(JAM.policy.p40) {
      var v64 = matchArray = re$$1.exec(sequenceData)
    }
    for (;v64;) {
      var v63 = matchArray[0];
      introspect(JAM.policy.p40) {
        arrayOfFasta.push(v63);
      }
      introspect(JAM.policy.p40) {
        v64 = matchArray = re$$1.exec(sequenceData);
      }
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v469 = sequence$$2.length;
  var v66 = "&gt;results for " + v469;
  var stringToReturn = v66 + " residue sequence ";
  introspect(JAM.policy.p30) {
    var v470 = fastaSequenceTitle.search(/[^\s]/)
  }
  var v68 = v470 != -1;
  if (v68) {
    var v471 = stringToReturn + '"';
    var v67 = v471 + fastaSequenceTitle;
    stringToReturn = v67 + '"';
  }
  var v472 = stringToReturn + ' starting "';
  introspect(JAM.policy.p26) {
    var v473 = sequence$$2.substring(0, 10)
  }
  var v69 = v472 + v473;
  stringToReturn = v69 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v474 = sequenceOne.length;
  var v70 = "Search results for " + v474;
  var stringToReturn$$1 = v70 + " residue sequence ";
  introspect(JAM.policy.p30) {
    var v475 = fastaSequenceTitleOne.search(/[^\s]/)
  }
  var v72 = v475 != -1;
  if (v72) {
    var v476 = stringToReturn$$1 + '"';
    var v71 = v476 + fastaSequenceTitleOne;
    stringToReturn$$1 = v71 + '"';
  }
  var v477 = stringToReturn$$1 + ' starting "';
  introspect(JAM.policy.p26) {
    var v478 = sequenceOne.substring(0, 10)
  }
  var v73 = v477 + v478;
  stringToReturn$$1 = v73 + '"\n';
  var v479 = stringToReturn$$1 + "and ";
  var v480 = sequenceTwo.length;
  var v74 = v479 + v480;
  stringToReturn$$1 = v74 + " residue sequence ";
  introspect(JAM.policy.p30) {
    var v481 = fastaSequenceTitleTwo.search(/[^\s]/)
  }
  var v76 = v481 != -1;
  if (v76) {
    var v482 = stringToReturn$$1 + '"';
    var v75 = v482 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v75 + '"';
  }
  var v483 = stringToReturn$$1 + ' starting "';
  introspect(JAM.policy.p26) {
    var v484 = sequenceTwo.substring(0, 10)
  }
  var v77 = v483 + v484;
  stringToReturn$$1 = v77 + '"';
  var v78 = '<div class="info">' + stringToReturn$$1;
  return v78 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v79 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v79);
  var j$$2 = 0;
  var v485 = arrayOfPatterns$$3.length;
  var v82 = j$$2 < v485;
  for (;v82;) {
    var v80 = geneticCodeMatchExp$$1;
    var v81 = j$$2;
    var v887 = arrayOfPatterns$$3[j$$2];
    introspect(JAM.policy.p30) {
      var v751 = v887.match(/\/.+\//)
    }
    var v486 = v751 + "gi";
    var v1210 = eval(v486);
    introspect(JAM.policy.p13) {
      v80[v81] = v1210;
    }
    j$$2 = j$$2 + 1;
    var v487 = arrayOfPatterns$$3.length;
    v82 = j$$2 < v487;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v83 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v83);
  var j$$3 = 0;
  var v488 = arrayOfPatterns$$4.length;
  var v88 = j$$3 < v488;
  for (;v88;) {
    var v84 = geneticCodeMatchResult$$1;
    var v85 = j$$3;
    var v752 = arrayOfPatterns$$4[j$$3];
    introspect(JAM.policy.p30) {
      var v489 = v752.match(/=[a-zA-Z\*]/)
    }
    var v1211 = v489.toString();
    introspect(JAM.policy.p13) {
      v84[v85] = v1211;
    }
    var v86 = geneticCodeMatchResult$$1;
    var v87 = j$$3;
    var v490 = geneticCodeMatchResult$$1[j$$3];
    introspect(JAM.policy.p28) {
      var v1212 = v490.replace(/=/g, "")
    }
    introspect(JAM.policy.p13) {
      v86[v87] = v1212;
    }
    j$$3 = j$$3 + 1;
    var v491 = arrayOfPatterns$$4.length;
    v88 = j$$3 < v491;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v492 = sequence$$3.length;
  var v89 = "Results for " + v492;
  var stringToReturn$$2 = v89 + " residue sequence ";
  introspect(JAM.policy.p30) {
    var v493 = fastaSequenceTitle$$1.search(/[^\s]/)
  }
  var v91 = v493 != -1;
  if (v91) {
    var v494 = stringToReturn$$2 + '"';
    var v90 = v494 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v90 + '"';
  }
  var v495 = stringToReturn$$2 + ' starting "';
  introspect(JAM.policy.p26) {
    var v496 = sequence$$3.substring(0, 10)
  }
  var v92 = v495 + v496;
  stringToReturn$$2 = v92 + '"';
  var v93 = '<div class="info">' + stringToReturn$$2;
  return v93 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v753 = "Results for " + topology;
  var v497 = v753 + " ";
  var v498 = sequence$$4.length;
  var v94 = v497 + v498;
  var stringToReturn$$3 = v94 + " residue sequence ";
  introspect(JAM.policy.p30) {
    var v499 = fastaSequenceTitle$$2.search(/[^\s]/)
  }
  var v96 = v499 != -1;
  if (v96) {
    var v500 = stringToReturn$$3 + '"';
    var v95 = v500 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v95 + '"';
  }
  var v501 = stringToReturn$$3 + ' starting "';
  introspect(JAM.policy.p26) {
    var v502 = sequence$$4.substring(0, 10)
  }
  var v97 = v501 + v502;
  stringToReturn$$3 = v97 + '"';
  var v98 = '<div class="info">' + stringToReturn$$3;
  return v98 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v503 = sequenceOne$$1.length;
  var v99 = "Alignment results for " + v503;
  var stringToReturn$$4 = v99 + " residue sequence ";
  introspect(JAM.policy.p30) {
    var v504 = fastaSequenceTitleOne$$1.search(/[^\s]/)
  }
  var v101 = v504 != -1;
  if (v101) {
    var v505 = stringToReturn$$4 + '"';
    var v100 = v505 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v100 + '"';
  }
  var v506 = stringToReturn$$4 + ' starting "';
  introspect(JAM.policy.p26) {
    var v507 = sequenceOne$$1.substring(0, 10)
  }
  var v102 = v506 + v507;
  stringToReturn$$4 = v102 + '"\n';
  var v508 = stringToReturn$$4 + "and ";
  var v509 = sequenceTwo$$1.length;
  var v103 = v508 + v509;
  stringToReturn$$4 = v103 + " residue sequence ";
  introspect(JAM.policy.p30) {
    var v510 = fastaSequenceTitleTwo$$1.search(/[^\s]/)
  }
  var v105 = v510 != -1;
  if (v105) {
    var v511 = stringToReturn$$4 + '"';
    var v104 = v511 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v104 + '"';
  }
  var v512 = stringToReturn$$4 + ' starting "';
  introspect(JAM.policy.p26) {
    var v513 = sequenceTwo$$1.substring(0, 10)
  }
  var v106 = v512 + v513;
  stringToReturn$$4 = v106 + '"';
  var v107 = '<div class="info">' + stringToReturn$$4;
  return v107 + "</div>\n";
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v109 = j$$4 < lengthOut;
  for (;v109;) {
    var v514 = Math.random();
    var v515 = components.length;
    var v108 = v514 * v515;
    introspect(JAM.policy.p30) {
      tempNum = Math.floor(v108);
    }
    tempChar = components[tempNum];
    introspect(JAM.policy.p40) {
      sequenceArray.push(tempChar);
    }
    j$$4 = j$$4 + 1;
    v109 = j$$4 < lengthOut;
  }
  introspect(JAM.policy.p24) {
    return sequenceArray.join("");
  }
}
function getSequenceFromFasta(sequenceRecord) {
  introspect(JAM.policy.p30) {
    var v516 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v110 = v516 != -1;
  if (v110) {
    introspect(JAM.policy.p28) {
      sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "");
    }
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  introspect(JAM.policy.p30) {
    var v517 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v112 = v517 != -1;
  if (v112) {
    introspect(JAM.policy.p28) {
      var v111 = sequenceRecord$$1.match(/\>[^\f\n\r]+[\f\n\r]/, "")
    }
    fastaTitle = v111.toString();
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
    var v1184 = expressionToCheck.search(/\[[A-Za-z\|]*\[/)
  }
  var v1175 = v1184 != -1;
  var v1186 = !v1175;
  if (v1186) {
    introspect(JAM.policy.p30) {
      var v1185 = expressionToCheck.search(/\][A-Za-z\|]*\]/)
    }
    v1175 = v1185 != -1;
  }
  var v1162 = v1175;
  var v1177 = !v1162;
  if (v1177) {
    introspect(JAM.policy.p30) {
      var v1176 = expressionToCheck.search(/\[\]/)
    }
    v1162 = v1176 != -1;
  }
  var v1146 = v1162;
  var v1164 = !v1146;
  if (v1164) {
    introspect(JAM.policy.p30) {
      var v1163 = expressionToCheck.search(/\/[A-Za-z\|]*\]/)
    }
    v1146 = v1163 != -1;
  }
  var v1128 = v1146;
  var v1148 = !v1128;
  if (v1148) {
    introspect(JAM.policy.p30) {
      var v1147 = expressionToCheck.search(/\[[A-Za-z\|]*\//)
    }
    v1128 = v1147 != -1;
  }
  var v1100 = v1128;
  var v1130 = !v1100;
  if (v1130) {
    introspect(JAM.policy.p30) {
      var v1129 = expressionToCheck.search(/\|\|/)
    }
    v1100 = v1129 != -1;
  }
  var v1055 = v1100;
  var v1102 = !v1055;
  if (v1102) {
    introspect(JAM.policy.p30) {
      var v1101 = expressionToCheck.search(/\/\|/)
    }
    v1055 = v1101 != -1;
  }
  var v989 = v1055;
  var v1057 = !v989;
  if (v1057) {
    introspect(JAM.policy.p30) {
      var v1056 = expressionToCheck.search(/\|\//)
    }
    v989 = v1056 != -1;
  }
  var v888 = v989;
  var v991 = !v888;
  if (v991) {
    introspect(JAM.policy.p30) {
      var v990 = expressionToCheck.search(/\[.\]/)
    }
    v888 = v990 != -1;
  }
  var v754 = v888;
  var v890 = !v754;
  if (v890) {
    introspect(JAM.policy.p30) {
      var v889 = expressionToCheck.search(/\</)
    }
    v754 = v889 != -1;
  }
  var v518 = v754;
  var v756 = !v518;
  if (v756) {
    introspect(JAM.policy.p30) {
      var v755 = expressionToCheck.search(/\>/)
    }
    v518 = v755 != -1;
  }
  var v113 = v518;
  if (v113) {
    return false;
  }
  return true;
}
function openForm() {
  var v114 = outputWindow.document;
  introspect(JAM.policy.p24) {
    v114.write('<form action="">\n');
  }
  return true;
}
function openPre() {
  var v115 = outputWindow.document;
  introspect(JAM.policy.p24) {
    v115.write("<pre>");
  }
  var v116 = outputWindow.document;
  introspect(JAM.policy.p24) {
    v116.write('<div class="pre">');
  }
  return;
}
function openTextArea() {
  var v117 = outputWindow.document;
  introspect(JAM.policy.p24) {
    v117.write('<br /><textarea rows="6" cols="61">\n');
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
  var v118 = outputWindow.document;
  var v891 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v757 = v891 + "<head>\n";
  var v519 = v757 + "<title>Sequence Manipulation Suite</title>\n";
  var v119 = v519 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  introspect(JAM.policy.p40) {
    v118.write(v119);
  }
  if (isColor) {
    var v120 = outputWindow.document;
    var v1200 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1196 = v1200 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1192 = v1196 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1187 = v1192 + "div.info {font-weight: bold}\n";
    var v1178 = v1187 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1165 = v1178 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v1149 = v1165 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v1131 = v1149 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1103 = v1131 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v1058 = v1103 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v992 = v1058 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v892 = v992 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v758 = v892 + "td.many {color: #000000}\n";
    var v520 = v758 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v121 = v520 + "</style>\n";
    introspect(JAM.policy.p40) {
      v120.write(v121);
    }
  } else {
    var v122 = outputWindow.document;
    var v1204 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1201 = v1204 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1197 = v1201 + "div.title {display: none}\n";
    var v1193 = v1197 + "div.info {font-weight: bold}\n";
    var v1188 = v1193 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1179 = v1188 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1166 = v1179 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v1150 = v1166 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1132 = v1150 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1104 = v1132 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1059 = v1104 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v993 = v1059 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v893 = v993 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v759 = v893 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v521 = v759 + "img {display: none}\n";
    var v123 = v521 + "</style>\n";
    introspect(JAM.policy.p40) {
      v122.write(v123);
    }
  }
  var v124 = outputWindow.document;
  var v894 = "</head>\n" + '<body class="main">\n';
  var v760 = v894 + '<div class="title">';
  var v522 = v760 + title$$7;
  var v125 = v522 + " results</div>\n";
  introspect(JAM.policy.p40) {
    v124.write(v125);
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
  var v126 = outputWindow.document;
  var v895 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v761 = v895 + "<head>\n";
  var v523 = v761 + "<title>Sequence Manipulation Suite</title>\n";
  var v127 = v523 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  introspect(JAM.policy.p40) {
    v126.write(v127);
  }
  if (isBackground) {
    var v128 = outputWindow.document;
    var v1202 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1198 = v1202 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1194 = v1198 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1189 = v1194 + "div.info {font-weight: bold}\n";
    var v1180 = v1189 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v1167 = v1180 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v1151 = v1167 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v1133 = v1151 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v1105 = v1133 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v1060 = v1105 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v994 = v1060 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v896 = v994 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v762 = v896 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v524 = v762 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v129 = v524 + "</style>\n";
    introspect(JAM.policy.p40) {
      v128.write(v129);
    }
  } else {
    var v130 = outputWindow.document;
    var v1206 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1205 = v1206 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1203 = v1205 + "div.title {display: none}\n";
    var v1199 = v1203 + "div.info {font-weight: bold}\n";
    var v1195 = v1199 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1190 = v1195 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v1181 = v1190 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v1168 = v1181 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v1152 = v1168 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v1134 = v1152 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v1106 = v1134 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v1061 = v1106 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v995 = v1061 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v897 = v995 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v763 = v897 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v525 = v763 + "img {display: none}\n";
    var v131 = v525 + "</style>\n";
    introspect(JAM.policy.p40) {
      v130.write(v131);
    }
  }
  var v132 = outputWindow.document;
  var v898 = "</head>\n" + '<body class="main">\n';
  var v764 = v898 + '<div class="title">';
  var v526 = v764 + title$$9;
  var v133 = v526 + " results</div>\n";
  introspect(JAM.policy.p40) {
    v132.write(v133);
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
    var v527 = dnaSequence$$1.search(/./)
  }
  var v134 = v527 != -1;
  if (v134) {
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
  var v135 = j$$5 < lengthOfColumn;
  for (;v135;) {
    tempString = tempString + " ";
    j$$5 = j$$5 + 1;
    v135 = j$$5 < lengthOfColumn;
  }
  var v136 = tempString + theNumber;
  theNumber = v136 + " ";
  var v137 = sequenceToAppend + theNumber;
  sequenceToAppend = v137 + tabIn;
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
  var v528 = testArray[0];
  var v138 = v528 != testString;
  if (v138) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  introspect(JAM.policy.p40) {
    var v529 = testString.search(re$$2)
  }
  var v139 = v529 == -1;
  if (v139) {
    alert("Regular expression 'm' flag not supported. See browser compatibility page.");
    return false;
  }
  var caughtException = false;
  try {
    re$$2 = eval("Exception handling not supported. Check browser compatibility page.");
  } catch (e$$4) {
    caughtException = true;
  }
  var v140 = !caughtException;
  if (v140) {
    alert("Exception handling not supported. See browser compatibility page.");
  }
  testString = "123";
  introspect(JAM.policy.p28) {
    testString = testString.replace(/(\d)/g, v1);
  }
  var v141 = testString != "1X2X3X";
  if (v141) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false;
  }
  var testNum = 2489.8237;
  introspect(JAM.policy.p22) {
    var v530 = testNum.toFixed(3)
  }
  var v142 = v530 != 2489.824;
  if (v142) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  introspect(JAM.policy.p22) {
    var v531 = testNum.toPrecision(5)
  }
  var v143 = v531 != 2489.8;
  if (v143) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  introspect(JAM.policy.p30) {
    var v532 = theNumber$$1.search(/\d/)
  }
  var v144 = v532 == -1;
  if (v144) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  introspect(JAM.policy.p30) {
    var v996 = emblFile.search(/ID/)
  }
  var v899 = v996 == -1;
  var v998 = !v899;
  if (v998) {
    introspect(JAM.policy.p30) {
      var v997 = emblFile.search(/AC/)
    }
    v899 = v997 == -1;
  }
  var v765 = v899;
  var v901 = !v765;
  if (v901) {
    introspect(JAM.policy.p30) {
      var v900 = emblFile.search(/DE/)
    }
    v765 = v900 == -1;
  }
  var v533 = v765;
  var v767 = !v533;
  if (v767) {
    introspect(JAM.policy.p30) {
      var v766 = emblFile.search(/SQ/)
    }
    v533 = v766 == -1;
  }
  var v145 = v533;
  if (v145) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  introspect(JAM.policy.p30) {
    var v534 = theNumber$$2.search(/\d/)
  }
  var v146 = v534 == -1;
  if (v146) {
    alert("Please enter a number.");
    return false;
  }
  var v148 = theNumber$$2 > maxInput$$2;
  if (v148) {
    var v535 = "Please enter a number less than or equal to " + maxInput$$2;
    var v147 = v535 + ".";
    alert(v147);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  introspect(JAM.policy.p30) {
    var v536 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i)
  }
  var v149 = v536 != -1;
  if (v149) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  introspect(JAM.policy.p30) {
    var v537 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i)
  }
  var v150 = v537 != -1;
  if (v150) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  introspect(JAM.policy.p30) {
    var v999 = genBankFile.search(/LOCUS/)
  }
  var v902 = v999 == -1;
  var v1001 = !v902;
  if (v1001) {
    introspect(JAM.policy.p30) {
      var v1000 = genBankFile.search(/DEFINITION/)
    }
    v902 = v1000 == -1;
  }
  var v768 = v902;
  var v904 = !v768;
  if (v904) {
    introspect(JAM.policy.p30) {
      var v903 = genBankFile.search(/ACCESSION/)
    }
    v768 = v903 == -1;
  }
  var v538 = v768;
  var v770 = !v538;
  if (v770) {
    introspect(JAM.policy.p30) {
      var v769 = genBankFile.search(/ORIGIN/)
    }
    v538 = v769 == -1;
  }
  var v151 = v538;
  if (v151) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  introspect(JAM.policy.p30) {
    var v1002 = genBankFile$$1.search(/LOCUS/)
  }
  var v905 = v1002 == -1;
  var v1004 = !v905;
  if (v1004) {
    introspect(JAM.policy.p30) {
      var v1003 = genBankFile$$1.search(/DEFINITION/)
    }
    v905 = v1003 == -1;
  }
  var v771 = v905;
  var v907 = !v771;
  if (v907) {
    introspect(JAM.policy.p30) {
      var v906 = genBankFile$$1.search(/ACCESSION/)
    }
    v771 = v906 == -1;
  }
  var v539 = v771;
  var v773 = !v539;
  if (v773) {
    introspect(JAM.policy.p30) {
      var v772 = genBankFile$$1.search(/ORIGIN/)
    }
    v539 = v772 == -1;
  }
  var v152 = v539;
  if (v152) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  introspect(JAM.policy.p30) {
    var v540 = genBankFile$$1.search(/FEATURES {13}/)
  }
  var v153 = v540 == -1;
  if (v153) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  introspect(JAM.policy.p30) {
    var v1005 = emblFile$$1.search(/ID/)
  }
  var v908 = v1005 == -1;
  var v1007 = !v908;
  if (v1007) {
    introspect(JAM.policy.p30) {
      var v1006 = emblFile$$1.search(/AC/)
    }
    v908 = v1006 == -1;
  }
  var v774 = v908;
  var v910 = !v774;
  if (v910) {
    introspect(JAM.policy.p30) {
      var v909 = emblFile$$1.search(/DE/)
    }
    v774 = v909 == -1;
  }
  var v541 = v774;
  var v776 = !v541;
  if (v776) {
    introspect(JAM.policy.p30) {
      var v775 = emblFile$$1.search(/SQ/)
    }
    v541 = v775 == -1;
  }
  var v154 = v541;
  if (v154) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  introspect(JAM.policy.p30) {
    var v542 = emblFile$$1.search(/^FT/m)
  }
  var v155 = v542 == -1;
  if (v155) {
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
  var v163 = i$$5 < stopBase;
  for (;v163;) {
    var v156 = i$$5 + 1;
    lineOfText = rightNum(v156, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v543 = basePerLine / groupSize;
    var v160 = j$$6 <= v543;
    for (;v160;) {
      var v159 = k < groupSize;
      for (;v159;) {
        var v157 = lineOfText;
        var v544 = k + i$$5;
        introspect(JAM.policy.p40) {
          var v158 = text$$10.charAt(v544)
        }
        lineOfText = v157 + v158;
        k = k + 1;
        v159 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v545 = basePerLine / groupSize;
      v160 = j$$6 <= v545;
    }
    var v161 = outputWindow.document;
    var v162 = lineOfText + "\n";
    introspect(JAM.policy.p40) {
      v161.write(v162);
    }
    lineOfText = "";
    v163 = i$$5 < stopBase;
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
    var v546 = adjustment < 0;
    if (v546) {
      v546 = adjusted >= 0;
    }
    var v164 = v546;
    if (v164) {
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
  var v197 = i$$6 < stopBase$$2;
  for (;v197;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v547 = basePerLine$$2 / groupSize$$2;
    var v173 = j$$7 <= v547;
    for (;v173;) {
      var v168 = k$$1 < groupSize$$2;
      for (;v168;) {
        var v548 = i$$6 + k$$1;
        var v165 = v548 >= stopBase$$2;
        if (v165) {
          break;
        }
        var v166 = lineOfText$$1;
        var v549 = k$$1 + i$$6;
        introspect(JAM.policy.p40) {
          var v167 = text$$12.charAt(v549)
        }
        lineOfText$$1 = v166 + v167;
        k$$1 = k$$1 + 1;
        v168 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v171 = numberPosition$$1 == "above";
      if (v171) {
        var v169 = aboveNum;
        var v550 = adjustNumbering(i$$6, numberingAdjustment);
        var v170 = rightNum(v550, "", groupSize$$2, tabIn$$3);
        aboveNum = v169 + v170;
      }
      var v172 = i$$6 >= stopBase$$2;
      if (v172) {
        break;
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v551 = basePerLine$$2 / groupSize$$2;
      v173 = j$$7 <= v551;
    }
    var v196 = numberPosition$$1 == "left";
    if (v196) {
      var v174 = outputWindow.document;
      var v911 = adjustNumbering(lineNum, numberingAdjustment);
      var v777 = rightNum(v911, "", 8, tabIn$$3);
      var v552 = v777 + lineOfText$$1;
      var v175 = v552 + "\n";
      introspect(JAM.policy.p40) {
        v174.write(v175);
      }
      var v179 = strands$$1 == "two";
      if (v179) {
        var v176 = outputWindow.document;
        var v912 = adjustNumbering(lineNum, numberingAdjustment);
        var v778 = rightNum(v912, "", 8, tabIn$$3);
        var v779 = complement(lineOfText$$1);
        var v553 = v778 + v779;
        var v177 = v553 + "\n";
        introspect(JAM.policy.p40) {
          v176.write(v177);
        }
        var v178 = outputWindow.document;
        introspect(JAM.policy.p24) {
          v178.write("\n");
        }
      }
    } else {
      var v195 = numberPosition$$1 == "right";
      if (v195) {
        var v180 = outputWindow.document;
        var v780 = lineOfText$$1;
        var v781 = adjustNumbering(i$$6, numberingAdjustment);
        var v554 = v780 + v781;
        var v181 = v554 + "\n";
        introspect(JAM.policy.p40) {
          v180.write(v181);
        }
        var v185 = strands$$1 == "two";
        if (v185) {
          var v182 = outputWindow.document;
          var v782 = complement(lineOfText$$1);
          var v783 = adjustNumbering(i$$6, numberingAdjustment);
          var v555 = v782 + v783;
          var v183 = v555 + "\n";
          introspect(JAM.policy.p40) {
            v182.write(v183);
          }
          var v184 = outputWindow.document;
          introspect(JAM.policy.p24) {
            v184.write("\n");
          }
        }
      } else {
        var v194 = numberPosition$$1 == "above";
        if (v194) {
          var v186 = outputWindow.document;
          var v187 = aboveNum + "\n";
          introspect(JAM.policy.p40) {
            v186.write(v187);
          }
          var v188 = outputWindow.document;
          var v189 = lineOfText$$1 + "\n";
          introspect(JAM.policy.p40) {
            v188.write(v189);
          }
          var v193 = strands$$1 == "two";
          if (v193) {
            var v190 = outputWindow.document;
            var v556 = complement(lineOfText$$1);
            var v191 = v556 + "\n";
            introspect(JAM.policy.p40) {
              v190.write(v191);
            }
            var v192 = outputWindow.document;
            introspect(JAM.policy.p24) {
              v192.write("\n");
            }
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v197 = i$$6 < stopBase$$2;
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
  var v218 = i$$7 < stopBase$$3;
  for (;v218;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v557 = basePerLine$$3 / groupSize$$3;
    var v206 = j$$8 <= v557;
    for (;v206;) {
      var v201 = k$$2 < groupSize$$3;
      for (;v201;) {
        var v558 = i$$7 + k$$2;
        var v198 = v558 >= stopBase$$3;
        if (v198) {
          break;
        }
        var v199 = lineOfText$$2;
        var v559 = k$$2 + i$$7;
        introspect(JAM.policy.p40) {
          var v200 = text$$13.charAt(v559)
        }
        lineOfText$$2 = v199 + v200;
        k$$2 = k$$2 + 1;
        v201 = k$$2 < groupSize$$3;
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v204 = numberPosition$$2 == "above";
      if (v204) {
        var v202 = aboveNum$$1;
        var v203 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = v202 + v203;
      }
      var v205 = i$$7 >= stopBase$$3;
      if (v205) {
        break;
      }
      k$$2 = 0;
      j$$8 = j$$8 + 1;
      var v560 = basePerLine$$3 / groupSize$$3;
      v206 = j$$8 <= v560;
    }
    var v217 = numberPosition$$2 == "left";
    if (v217) {
      var v207 = outputWindow.document;
      var v784 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v561 = v784 + lineOfText$$2;
      var v208 = v561 + "\n";
      introspect(JAM.policy.p40) {
        v207.write(v208);
      }
    } else {
      var v216 = numberPosition$$2 == "right";
      if (v216) {
        var v209 = outputWindow.document;
        var v562 = lineOfText$$2 + i$$7;
        var v210 = v562 + "\n";
        introspect(JAM.policy.p40) {
          v209.write(v210);
        }
      } else {
        var v215 = numberPosition$$2 == "above";
        if (v215) {
          var v211 = outputWindow.document;
          var v212 = aboveNum$$1 + "\n";
          introspect(JAM.policy.p40) {
            v211.write(v212);
          }
          var v213 = outputWindow.document;
          var v214 = lineOfText$$2 + "\n";
          introspect(JAM.policy.p40) {
            v213.write(v214);
          }
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v218 = i$$7 < stopBase$$3;
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
  var v913 = sequence$$13.length;
  var v785 = v913 <= firstIndexToMutate;
  var v914 = !v785;
  if (v914) {
    v785 = lastIndexToMutate < 0;
  }
  var v563 = v785;
  var v786 = !v563;
  if (v786) {
    v563 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v219 = v563;
  if (v219) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v227 = i$$8 < numMut;
  for (;v227;) {
    maxNum = sequence$$13.length;
    var v564 = Math.random();
    var v220 = v564 * maxNum;
    introspect(JAM.policy.p30) {
      randNum = Math.floor(v220);
    }
    var v565 = randNum < firstIndexToMutate;
    var v787 = !v565;
    if (v787) {
      v565 = randNum > lastIndexToMutate;
    }
    var v221 = v565;
    if (v221) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v227 = i$$8 < numMut;
      continue;
    }
    introspect(JAM.policy.p30) {
      currentChar = sequence$$13.charAt(randNum);
    }
    needNewChar = true;
    for (;needNewChar;) {
      var v566 = Math.random();
      var v567 = components$$1.length;
      var v222 = v566 * v567;
      introspect(JAM.policy.p30) {
        componentsIndex = Math.round(v222);
      }
      var v568 = components$$1.length;
      var v223 = componentsIndex == v568;
      if (v223) {
        componentsIndex = 0;
      }
      var v569 = components$$1[componentsIndex];
      var v224 = v569 != currentChar;
      if (v224) {
        needNewChar = false;
      }
    }
    introspect(JAM.policy.p26) {
      var v570 = sequence$$13.substring(0, randNum)
    }
    var v571 = components$$1[componentsIndex];
    var v225 = v570 + v571;
    var v572 = randNum + 1;
    var v573 = sequence$$13.length;
    introspect(JAM.policy.p41) {
      var v226 = sequence$$13.substring(v572, v573)
    }
    sequence$$13 = v225 + v226;
    i$$8 = i$$8 + 1;
    v227 = i$$8 < numMut;
  }
  var v228 = outputWindow.document;
  var v229 = addReturns(sequence$$13);
  introspect(JAM.policy.p40) {
    v228.write(v229);
  }
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v234 = j$$9 < lengthOut$$1;
  for (;v234;) {
    var v574 = Math.random();
    var v575 = components$$2.length;
    var v230 = v574 * v575;
    introspect(JAM.policy.p30) {
      tempNum$$1 = Math.floor(v230);
    }
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v576 = sequence$$14.length;
    var v233 = v576 == 60;
    if (v233) {
      var v231 = outputWindow.document;
      var v232 = sequence$$14 + "\n";
      introspect(JAM.policy.p40) {
        v231.write(v232);
      }
      sequence$$14 = "";
    }
    j$$9 = j$$9 + 1;
    v234 = j$$9 < lengthOut$$1;
  }
  var v235 = outputWindow.document;
  var v236 = sequence$$14 + "\n";
  introspect(JAM.policy.p40) {
    v235.write(v236);
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
  var v240 = dnaConformation == "circular";
  if (v240) {
    introspect(JAM.policy.p26) {
      var v237 = sequence$$15.substring(0, lookAhead)
    }
    shiftValue = v237.length;
    var v915 = sequence$$15.length;
    var v788 = v915 - lookAhead;
    var v789 = sequence$$15.length;
    introspect(JAM.policy.p41) {
      var v577 = sequence$$15.substring(v788, v789)
    }
    var v238 = v577 + sequence$$15;
    introspect(JAM.policy.p26) {
      var v239 = sequence$$15.substring(0, lookAhead)
    }
    sequence$$15 = v238 + v239;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v241 = outputWindow.document;
  introspect(JAM.policy.p24) {
    v241.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  }
  var v242 = outputWindow.document;
  var v916 = '<tr><td class="title" width="200px">' + "Site:";
  var v790 = v916 + '</td><td class="title">';
  var v578 = v790 + "Positions:";
  var v243 = v578 + "</td></tr>\n";
  introspect(JAM.policy.p40) {
    v242.write(v243);
  }
  var i$$9 = 0;
  var v579 = arrayOfItems.length;
  var v259 = i$$9 < v579;
  for (;v259;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v580 = arrayOfItems[i$$9];
    introspect(JAM.policy.p30) {
      var v244 = v580.match(/\/.+\//)
    }
    matchExp = v244 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    var v917 = arrayOfItems[i$$9];
    introspect(JAM.policy.p30) {
      var v791 = v917.match(/\)\D*\d+/)
    }
    var v581 = v791.toString();
    introspect(JAM.policy.p28) {
      var v245 = v581.replace(/\)\D*/, "")
    }
    cutDistance = parseFloat(v245);
    introspect(JAM.policy.p40) {
      var v251 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    for (;v251;) {
      var v246 = matchExp.lastIndex;
      matchPosition = v246 - cutDistance;
      var v582 = matchPosition >= lowerLimit;
      if (v582) {
        v582 = matchPosition < upperLimit;
      }
      var v249 = v582;
      if (v249) {
        timesFound = timesFound + 1;
        var v247 = tempString$$1 + ", ";
        var v583 = matchPosition - shiftValue;
        var v248 = v583 + 1;
        tempString$$1 = v247 + v248;
      }
      var v584 = matchExp.lastIndex;
      var v792 = RegExp.lastMatch;
      var v585 = v792.length;
      var v250 = v584 - v585;
      matchExp.lastIndex = v250 + 1;
      introspect(JAM.policy.p40) {
        v251 = matchArray$$1 = matchExp.exec(sequence$$15);
      }
    }
    introspect(JAM.policy.p30) {
      var v586 = tempString$$1.search(/\d/)
    }
    var v252 = v586 != -1;
    if (v252) {
      introspect(JAM.policy.p28) {
        tempString$$1 = tempString$$1.replace(/none,\s*/, "");
      }
    }
    var v256 = timesFound == 0;
    if (v256) {
      backGroundClass = "none";
    } else {
      var v255 = timesFound == 1;
      if (v255) {
        backGroundClass = "one";
      } else {
        var v254 = timesFound == 2;
        if (v254) {
          backGroundClass = "two";
        } else {
          var v253 = timesFound == 3;
          if (v253) {
            backGroundClass = "three";
          } else {
            backGroundClass = "many";
          }
        }
      }
    }
    var v257 = outputWindow.document;
    var v1135 = '<tr><td class="' + backGroundClass;
    var v1107 = v1135 + '">';
    var v1169 = arrayOfItems[i$$9];
    introspect(JAM.policy.p30) {
      var v1153 = v1169.match(/\([^\(]+\)/)
    }
    var v1136 = v1153.toString();
    introspect(JAM.policy.p28) {
      var v1108 = v1136.replace(/\(|\)/g, "")
    }
    var v1062 = v1107 + v1108;
    var v1008 = v1062 + '</td><td class="';
    var v918 = v1008 + backGroundClass;
    var v793 = v918 + '">';
    var v587 = v793 + tempString$$1;
    var v258 = v587 + "</td></tr>\n";
    introspect(JAM.policy.p40) {
      v257.write(v258);
    }
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v588 = arrayOfItems.length;
    v259 = i$$9 < v588;
  }
  var v260 = outputWindow.document;
  introspect(JAM.policy.p24) {
    v260.write("</tbody></table>\n");
  }
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v261 = outputWindow.document;
  introspect(JAM.policy.p24) {
    v261.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  }
  var v262 = outputWindow.document;
  var v1063 = '<tr><td class="title">' + "Pattern:";
  var v1009 = v1063 + '</td><td class="title">';
  var v919 = v1009 + "Times found:";
  var v794 = v919 + '</td><td class="title">';
  var v589 = v794 + "Percentage:";
  var v263 = v589 + "</td></tr>\n";
  introspect(JAM.policy.p40) {
    v262.write(v263);
  }
  var i$$10 = 0;
  var v590 = arrayOfItems$$1.length;
  var v272 = i$$10 < v590;
  for (;v272;) {
    var tempNumber = 0;
    var v591 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p30) {
      var v264 = v591.match(/\/[^\/]+\//)
    }
    var matchExp$$1 = v264 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    introspect(JAM.policy.p40) {
      var v592 = sequence$$16.search(matchExp$$1)
    }
    var v266 = v592 != -1;
    if (v266) {
      introspect(JAM.policy.p40) {
        var v265 = sequence$$16.match(matchExp$$1)
      }
      tempNumber = v265.length;
    }
    var percentage = 0;
    var v795 = originalLength + 1;
    var v1010 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p30) {
      var v920 = v1010.match(/\d+/)
    }
    var v796 = parseFloat(v920);
    var v593 = v795 - v796;
    var v269 = v593 > 0;
    if (v269) {
      var v267 = 100 * tempNumber;
      var v594 = originalLength + 1;
      var v921 = arrayOfItems$$1[i$$10];
      introspect(JAM.policy.p30) {
        var v797 = v921.match(/\d+/)
      }
      var v595 = parseFloat(v797);
      var v268 = v594 - v595;
      percentage = v267 / v268;
    }
    var v270 = outputWindow.document;
    var v1170 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p30) {
      var v1154 = v1170.match(/\([^\(]+\)\b/)
    }
    var v1137 = v1154.toString();
    introspect(JAM.policy.p28) {
      var v1109 = v1137.replace(/\(|\)/g, "")
    }
    var v1064 = "<tr><td>" + v1109;
    var v1011 = v1064 + "</td><td>";
    var v922 = v1011 + tempNumber;
    var v798 = v922 + "</td><td>";
    introspect(JAM.policy.p22) {
      var v799 = percentage.toFixed(2)
    }
    var v596 = v798 + v799;
    var v271 = v596 + "</td></tr>\n";
    introspect(JAM.policy.p40) {
      v270.write(v271);
    }
    i$$10 = i$$10 + 1;
    var v597 = arrayOfItems$$1.length;
    v272 = i$$10 < v597;
  }
  var v273 = outputWindow.document;
  introspect(JAM.policy.p24) {
    v273.write("</tbody></table>\n");
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
  var v598 = sequence$$17.length;
  var v280 = v598 > 0;
  for (;v280;) {
    maxNum$$1 = sequence$$17.length;
    var v599 = Math.random();
    var v274 = v599 * maxNum$$1;
    introspect(JAM.policy.p30) {
      randNum$$1 = Math.floor(v274);
    }
    introspect(JAM.policy.p30) {
      tempChar$$2 = sequence$$17.charAt(randNum$$1);
    }
    tempSeq = tempSeq + tempChar$$2;
    introspect(JAM.policy.p26) {
      tempString1 = sequence$$17.substring(0, randNum$$1);
    }
    var v275 = randNum$$1 + 1;
    var v276 = sequence$$17.length;
    introspect(JAM.policy.p28) {
      tempString2 = sequence$$17.substring(v275, v276);
    }
    sequence$$17 = tempString1 + tempString2;
    var v600 = tempSeq.length;
    var v279 = v600 == 60;
    if (v279) {
      var v277 = outputWindow.document;
      var v278 = tempSeq + "\n";
      introspect(JAM.policy.p40) {
        v277.write(v278);
      }
      tempSeq = "";
    }
    var v601 = sequence$$17.length;
    v280 = v601 > 0;
  }
  var v281 = outputWindow.document;
  var v282 = tempSeq + "\n";
  introspect(JAM.policy.p40) {
    v281.write(v282);
  }
  return true;
}
function windowExtract(theDocument) {
  var newDna = "";
  var maxInput$$3 = 5E5;
  var matchFound = false;
  var ranges = new Array;
  var v602 = testScript();
  var v283 = v602 == false;
  if (v283) {
    return false;
  }
  var v1182 = theDocument.forms;
  var v1171 = v1182[0];
  var v1155 = v1171.elements;
  var v1138 = v1155[0];
  var v1110 = checkFormElement(v1138);
  var v1065 = v1110 == false;
  var v1112 = !v1065;
  if (v1112) {
    var v1191 = theDocument.forms;
    var v1183 = v1191[0];
    var v1172 = v1183.elements;
    var v1156 = v1172[0];
    var v1139 = v1156.value;
    var v1111 = checkSequenceLength(v1139, maxInput$$3);
    v1065 = v1111 == false;
  }
  var v1012 = v1065;
  var v1067 = !v1012;
  if (v1067) {
    var v1173 = theDocument.forms;
    var v1157 = v1173[0];
    var v1140 = v1157.elements;
    var v1113 = v1140[1];
    var v1066 = checkFormElement(v1113);
    v1012 = v1066 == false;
  }
  var v923 = v1012;
  var v1014 = !v923;
  if (v1014) {
    var v1158 = theDocument.forms;
    var v1141 = v1158[0];
    var v1114 = v1141.elements;
    var v1068 = v1114[3];
    var v1013 = checkFormElement(v1068);
    v923 = v1013 == false;
  }
  var v800 = v923;
  var v925 = !v800;
  if (v925) {
    var v1174 = theDocument.forms;
    var v1159 = v1174[0];
    var v1142 = v1159.elements;
    var v1115 = v1142[1];
    var v1069 = v1115.value;
    introspect(JAM.policy.p28) {
      var v1015 = v1069.replace(/[^\d]/g, "")
    }
    var v924 = verifyMaxDigits(v1015, maxInput$$3);
    v800 = v924 == false;
  }
  var v603 = v800;
  var v802 = !v603;
  if (v802) {
    var v1160 = theDocument.forms;
    var v1143 = v1160[0];
    var v1116 = v1143.elements;
    var v1070 = v1116[3];
    var v1016 = v1070.value;
    introspect(JAM.policy.p28) {
      var v926 = v1016.replace(/[^\d]/g, "")
    }
    var v801 = verifyMaxDigits(v926, maxInput$$3);
    v603 = v801 == false;
  }
  var v284 = v603;
  if (v284) {
    return false;
  }
  var v1071 = theDocument.forms;
  var v1017 = v1071[0];
  var v927 = v1017.elements;
  var v803 = v927[1];
  var v604 = v803.value;
  introspect(JAM.policy.p28) {
    var v285 = v604.replace(/[^\d]/g, "")
  }
  var windowSize = parseInt(v285);
  var v1072 = theDocument.forms;
  var v1018 = v1072[0];
  var v928 = v1018.elements;
  var v804 = v928[3];
  var v605 = v804.value;
  introspect(JAM.policy.p28) {
    var v286 = v605.replace(/[^\d]/g, "")
  }
  var position = parseInt(v286);
  var v929 = theDocument.forms;
  var v805 = v929[0];
  var v606 = v805.elements;
  var v287 = v606[2];
  var orientation = v287.value;
  var start$$4;
  var end$$1;
  var v294 = orientation == "ending";
  if (v294) {
    end$$1 = position;
    var v288 = end$$1 - windowSize;
    start$$4 = v288 + 1;
  } else {
    var v293 = orientation == "starting";
    if (v293) {
      start$$4 = position;
      var v289 = start$$4 + windowSize;
      end$$1 = v289 - 1;
    } else {
      var v292 = orientation == "centered";
      if (v292) {
        var v607 = position;
        var v806 = windowSize / 2;
        introspect(JAM.policy.p40) {
          var v608 = Math.round(v806)
        }
        var v290 = v607 - v608;
        start$$4 = v290 + 1;
        var v291 = start$$4 + windowSize;
        end$$1 = v291 - 1;
      }
    }
  }
  var v295 = new Range(start$$4, end$$1);
  introspect(JAM.policy.p40) {
    ranges.push(v295);
  }
  openWindow("Window Extractor Protein");
  openPre();
  var v1019 = theDocument.forms;
  var v930 = v1019[0];
  var v807 = v930.elements;
  var v609 = v807[0];
  var v296 = v609.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v296);
  var i$$11 = 0;
  var v610 = arrayOfFasta$$1.length;
  var v302 = i$$11 < v610;
  for (;v302;) {
    var v297 = arrayOfFasta$$1[i$$11];
    newProtein = getSequenceFromFasta(v297);
    var v298 = arrayOfFasta$$1[i$$11];
    title = getTitleFromFasta(v298);
    newProtein = removeNonProteinAllowDegen(newProtein);
    var v299 = outputWindow.document;
    var v300 = getFastaTitleFromTitleAndSequence(title, newProtein);
    introspect(JAM.policy.p40) {
      v299.write(v300);
    }
    var v1117 = theDocument.forms;
    var v1073 = v1117[0];
    var v1020 = v1073.elements;
    var v931 = v1020[7];
    var v808 = v931.options;
    var v1118 = theDocument.forms;
    var v1074 = v1118[0];
    var v1021 = v1074.elements;
    var v932 = v1021[7];
    var v809 = v932.selectedIndex;
    var v611 = v808[v809];
    var v301 = v611.value;
    writeSequenceRanges(newProtein, ranges, v301);
    i$$11 = i$$11 + 1;
    var v612 = arrayOfFasta$$1.length;
    v302 = i$$11 < v612;
  }
  closePre();
  closeWindow();
  return true;
}
function rangeExtract(theDocument$$1) {
  var newDna$$1 = "";
  var maxInput$$4 = 5E5;
  var matchFound$$1 = false;
  var ranges$$1 = new Array;
  var v613 = testScript();
  var v303 = v613 == false;
  if (v303) {
    return false;
  }
  var v1144 = theDocument$$1.forms;
  var v1119 = v1144[0];
  var v1075 = v1119.elements;
  var v1022 = v1075[0];
  var v933 = checkFormElement(v1022);
  var v810 = v933 == false;
  var v935 = !v810;
  if (v935) {
    var v1161 = theDocument$$1.forms;
    var v1145 = v1161[0];
    var v1120 = v1145.elements;
    var v1076 = v1120[0];
    var v1023 = v1076.value;
    var v934 = checkSequenceLength(v1023, maxInput$$4);
    v810 = v934 == false;
  }
  var v614 = v810;
  var v812 = !v614;
  if (v812) {
    var v1121 = theDocument$$1.forms;
    var v1077 = v1121[0];
    var v1024 = v1077.elements;
    var v936 = v1024[1];
    var v811 = checkFormElement(v936);
    v614 = v811 == false;
  }
  var v304 = v614;
  if (v304) {
    return false;
  }
  var v1025 = theDocument$$1.forms;
  var v937 = v1025[0];
  var v813 = v937.elements;
  var v615 = v813[1];
  var v305 = v615.value;
  introspect(JAM.policy.p30) {
    var arrayOfRanges = v305.split(/,/)
  }
  var arrayOfStartAndEnd;
  var i$$12 = 0;
  var v616 = arrayOfRanges.length;
  var v311 = i$$12 < v616;
  for (;v311;) {
    var v306 = arrayOfRanges[i$$12];
    introspect(JAM.policy.p30) {
      arrayOfStartAndEnd = v306.split(/\.\./);
    }
    var v617 = arrayOfStartAndEnd.length;
    var v310 = v617 == 1;
    if (v310) {
      matchFound$$1 = true;
      var v618 = arrayOfStartAndEnd[0];
      var v619 = arrayOfStartAndEnd[0];
      var v307 = new Range(v618, v619);
      introspect(JAM.policy.p40) {
        ranges$$1.push(v307);
      }
    } else {
      var v620 = arrayOfStartAndEnd.length;
      var v309 = v620 == 2;
      if (v309) {
        matchFound$$1 = true;
        var v621 = arrayOfStartAndEnd[0];
        var v622 = arrayOfStartAndEnd[1];
        var v308 = new Range(v621, v622);
        introspect(JAM.policy.p40) {
          ranges$$1.push(v308);
        }
      }
    }
    i$$12 = i$$12 + 1;
    var v623 = arrayOfRanges.length;
    v311 = i$$12 < v623;
  }
  var v312 = matchFound$$1 == false;
  if (v312) {
    alert("No ranges were entered.");
    return false;
  }
  openWindow("Range Extractor Protein");
  openPre();
  var v1026 = theDocument$$1.forms;
  var v938 = v1026[0];
  var v814 = v938.elements;
  var v624 = v814[0];
  var v313 = v624.value;
  var arrayOfFasta$$2 = getArrayOfFasta(v313);
  i$$12 = 0;
  var v625 = arrayOfFasta$$2.length;
  var v319 = i$$12 < v625;
  for (;v319;) {
    var v314 = arrayOfFasta$$2[i$$12];
    newProtein = getSequenceFromFasta(v314);
    var v315 = arrayOfFasta$$2[i$$12];
    title = getTitleFromFasta(v315);
    newProtein = removeNonProteinAllowDegen(newProtein);
    var v316 = outputWindow.document;
    var v317 = getFastaTitleFromTitleAndSequence(title, newProtein);
    introspect(JAM.policy.p40) {
      v316.write(v317);
    }
    var v1122 = theDocument$$1.forms;
    var v1078 = v1122[0];
    var v1027 = v1078.elements;
    var v939 = v1027[5];
    var v815 = v939.options;
    var v1123 = theDocument$$1.forms;
    var v1079 = v1123[0];
    var v1028 = v1079.elements;
    var v940 = v1028[5];
    var v816 = v940.selectedIndex;
    var v626 = v815[v816];
    var v318 = v626.value;
    writeSequenceRanges(newProtein, ranges$$1, v318);
    i$$12 = i$$12 + 1;
    var v627 = arrayOfFasta$$2.length;
    v319 = i$$12 < v627;
  }
  closePre();
  closeWindow();
  return true;
}
function writeSequenceRanges(sequence$$18, ranges$$2, segmentType) {
  var rangeGroup = new RangeGroup(segmentType);
  var v628 = sequence$$18.length;
  var v320 = v628 / 2;
  introspect(JAM.policy.p40) {
    var center_base = Math.round(v320)
  }
  var i$$13 = 0;
  var v629 = ranges$$2.length;
  var v334 = i$$13 < v629;
  for (;v334;) {
    var v321 = ranges$$2[i$$13];
    var v941 = ranges$$2[i$$13];
    var v817 = v941.start;
    var v630 = v817.toString();
    introspect(JAM.policy.p28) {
      var v1213 = v630.replace(/start|begin/gi, 1)
    }
    v321.start = v1213;
    var v322 = ranges$$2[i$$13];
    var v942 = ranges$$2[i$$13];
    var v818 = v942.start;
    var v631 = v818.toString();
    var v632 = sequence$$18.length;
    introspect(JAM.policy.p28) {
      var v1214 = v631.replace(/stop|end/gi, v632)
    }
    v322.start = v1214;
    var v323 = ranges$$2[i$$13];
    var v943 = ranges$$2[i$$13];
    var v819 = v943.start;
    var v633 = v819.toString();
    var v634 = sequence$$18.length;
    introspect(JAM.policy.p28) {
      var v1215 = v633.replace(/length/gi, v634)
    }
    v323.start = v1215;
    var v324 = ranges$$2[i$$13];
    var v944 = ranges$$2[i$$13];
    var v820 = v944.start;
    var v635 = v820.toString();
    introspect(JAM.policy.p28) {
      var v1216 = v635.replace(/middle|center|centre/gi, center_base)
    }
    v324.start = v1216;
    var v325 = ranges$$2[i$$13];
    var v945 = ranges$$2[i$$13];
    var v821 = v945.stop;
    var v636 = v821.toString();
    introspect(JAM.policy.p28) {
      var v1217 = v636.replace(/start|begin/gi, 1)
    }
    v325.stop = v1217;
    var v326 = ranges$$2[i$$13];
    var v946 = ranges$$2[i$$13];
    var v822 = v946.stop;
    var v637 = v822.toString();
    var v638 = sequence$$18.length;
    introspect(JAM.policy.p28) {
      var v1218 = v637.replace(/stop|end/gi, v638)
    }
    v326.stop = v1218;
    var v327 = ranges$$2[i$$13];
    var v947 = ranges$$2[i$$13];
    var v823 = v947.stop;
    var v639 = v823.toString();
    var v640 = sequence$$18.length;
    introspect(JAM.policy.p28) {
      var v1219 = v639.replace(/length/gi, v640)
    }
    v327.stop = v1219;
    var v328 = ranges$$2[i$$13];
    var v948 = ranges$$2[i$$13];
    var v824 = v948.stop;
    var v641 = v824.toString();
    introspect(JAM.policy.p28) {
      var v1220 = v641.replace(/middle|center|centre/gi, center_base)
    }
    v328.stop = v1220;
    try {
      var v329 = ranges$$2[i$$13];
      var v1029 = ranges$$2[i$$13];
      var v949 = v1029.start;
      var v825 = v949.toString();
      var v642 = eval(v825);
      var v1221 = parseInt(v642);
      v329.start = v1221;
    } catch (e$$5) {
      var v826 = ranges$$2[i$$13];
      var v643 = v826.start;
      var v330 = "Could not evaluate the following expression: " + v643;
      alert(v330);
      return false;
    }
    try {
      var v331 = ranges$$2[i$$13];
      var v1030 = ranges$$2[i$$13];
      var v950 = v1030.stop;
      var v827 = v950.toString();
      var v644 = eval(v827);
      var v1222 = parseInt(v644);
      v331.stop = v1222;
    } catch (e$$6) {
      var v828 = ranges$$2[i$$13];
      var v645 = v828.stop;
      var v332 = "Could not evaluate the following expression: " + v645;
      alert(v332);
      return false;
    }
    var v333 = ranges$$2[i$$13];
    introspect(JAM.policy.p40) {
      rangeGroup.addRange(v333);
    }
    i$$13 = i$$13 + 1;
    var v646 = ranges$$2.length;
    v334 = i$$13 < v646;
  }
  introspect(JAM.policy.p40) {
    rangeGroup.writeRanges(sequence$$18);
  }
  return;
}
function getSequence(sequence$$19) {
  var problem = false;
  var warnings = new Array;
  var v647 = this.start;
  var v648 = this.stop;
  var v349 = v647 == v648;
  if (v349) {
    var v649 = this.start;
    var v336 = v649 < 1;
    if (v336) {
      problem = true;
      var v829 = this.start;
      var v650 = "position value of " + v829;
      var v335 = v650 + " is less than 1";
      introspect(JAM.policy.p40) {
        warnings.push(v335);
      }
    }
    var v651 = this.start;
    var v652 = sequence$$19.length;
    var v338 = v651 > v652;
    if (v338) {
      problem = true;
      var v830 = this.start;
      var v653 = "position value of " + v830;
      var v337 = v653 + " is greater than the sequence length";
      introspect(JAM.policy.p40) {
        warnings.push(v337);
      }
    }
  } else {
    var v654 = this.start;
    var v340 = v654 < 1;
    if (v340) {
      problem = true;
      var v831 = this.start;
      var v655 = "position value of " + v831;
      var v339 = v655 + " is less than 1";
      introspect(JAM.policy.p40) {
        warnings.push(v339);
      }
    }
    var v656 = this.stop;
    var v342 = v656 < 1;
    if (v342) {
      problem = true;
      var v832 = this.stop;
      var v657 = "position value of " + v832;
      var v341 = v657 + " is less than 1";
      introspect(JAM.policy.p40) {
        warnings.push(v341);
      }
    }
    var v658 = this.start;
    var v659 = sequence$$19.length;
    var v344 = v658 > v659;
    if (v344) {
      problem = true;
      var v833 = this.start;
      var v660 = "position value of " + v833;
      var v343 = v660 + " is greater than the sequence length";
      introspect(JAM.policy.p40) {
        warnings.push(v343);
      }
    }
    var v661 = this.stop;
    var v662 = sequence$$19.length;
    var v346 = v661 > v662;
    if (v346) {
      problem = true;
      var v834 = this.stop;
      var v663 = "position value of " + v834;
      var v345 = v663 + " is greater than the sequence length";
      introspect(JAM.policy.p40) {
        warnings.push(v345);
      }
    }
    var v664 = this.start;
    var v665 = this.stop;
    var v348 = v664 > v665;
    if (v348) {
      problem = true;
      var v951 = this.start;
      var v835 = "stop position is less than start position in range " + v951;
      var v666 = v835 + " to ";
      var v667 = this.stop;
      var v347 = v666 + v667;
      introspect(JAM.policy.p40) {
        warnings.push(v347);
      }
    }
  }
  if (problem) {
    introspect(JAM.policy.p24) {
      var v668 = warnings.join(",\n")
    }
    var v350 = "An entry was skipped because of the following:\n" + v668;
    alert(v350);
    return false;
  } else {
    var v669 = this.start;
    var v670 = this.stop;
    var v354 = v669 == v670;
    if (v354) {
      var v671 = this.start;
      var v351 = v671 - 1;
      introspect(JAM.policy.p40) {
        return sequence$$19.charAt(v351);
      }
    } else {
      var v672 = this.start;
      var v352 = v672 - 1;
      var v353 = this.stop;
      introspect(JAM.policy.p41) {
        return sequence$$19.substring(v352, v353);
      }
    }
  }
  return;
}
function getTitle() {
  var v673 = this.start;
  var v674 = this.stop;
  var v358 = v673 == v674;
  if (v358) {
    var v355 = this.start;
    return "&gt;residue " + v355;
  } else {
    var v836 = this.start;
    var v675 = "&gt;residue " + v836;
    var v356 = v675 + " to ";
    var v357 = this.stop;
    return v356 + v357;
  }
  return;
}
function Range(start$$5, stop) {
  this.start = start$$5;
  this.stop = stop;
  return;
}
function addRange(range$$5) {
  var v359 = this.ranges;
  introspect(JAM.policy.p40) {
    v359.push(range$$5);
  }
  return;
}
function writeRanges(sequence$$20) {
  function v9(str$$15, p1$$9, offset$$17, s$$11) {
    var v676 = p1$$9.length;
    var v360 = offset$$17 + v676;
    introspect(JAM.policy.p41) {
      return sequence$$20.substring(offset$$17, v360);
    }
  }
  function v8(str$$14, p1$$8, p2$$3, offset$$16, s$$10) {
    var v361 = p1$$8;
    var v677 = p1$$8.length;
    var v837 = p1$$8.length;
    var v838 = p2$$3.length;
    var v678 = v837 + v838;
    introspect(JAM.policy.p41) {
      var v362 = sequence$$20.substring(v677, v678)
    }
    return v361 + v362;
  }
  function v7(str$$13, p1$$7, offset$$15, s$$9) {
    var v363 = ["A", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "Y"];
    var v364 = p1$$7.length;
    return getRandomSequence(v363, v364);
  }
  function v6(str$$12, p1$$6, p2$$2, offset$$14, s$$8) {
    var v365 = p1$$6;
    var v679 = ["A", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "Y"];
    var v680 = p2$$2.length;
    var v366 = getRandomSequence(v679, v680);
    return v365 + v366;
  }
  function v5(str$$11, p1$$5, offset$$13, s$$7) {
    return p1$$5.toLowerCase();
  }
  function v4(str$$10, p1$$4, p2$$1, offset$$12, s$$6) {
    var v367 = p1$$4;
    var v368 = p2$$1.toLowerCase();
    return v367 + v368;
  }
  function v3(str$$9, p1$$3, offset$$11, s$$5) {
    return p1$$3.toUpperCase();
  }
  function v2(str$$8, p1$$2, p2, offset$$10, s$$4) {
    var v369 = p1$$2;
    var v370 = p2.toUpperCase();
    return v369 + v370;
  }
  var sequenceArray$$1 = new Array;
  var v681 = this.type;
  var v376 = v681 == "new_sequence";
  if (v376) {
    var i$$14 = 0;
    var v839 = this.ranges;
    var v682 = v839.length;
    var v373 = i$$14 < v682;
    for (;v373;) {
      var v952 = this.ranges;
      var v840 = v952[i$$14];
      introspect(JAM.policy.p40) {
        var v683 = v840.getSequence(sequence$$20)
      }
      var v372 = v683 != "";
      if (v372) {
        var v841 = this.ranges;
        var v684 = v841[i$$14];
        introspect(JAM.policy.p40) {
          var v371 = v684.getSequence(sequence$$20)
        }
        introspect(JAM.policy.p40) {
          sequenceArray$$1.push(v371);
        }
      }
      i$$14 = i$$14 + 1;
      var v842 = this.ranges;
      var v685 = v842.length;
      v373 = i$$14 < v685;
    }
    var v374 = outputWindow.document;
    introspect(JAM.policy.p24) {
      var v843 = sequenceArray$$1.join("")
    }
    var v686 = addReturns(v843);
    var v375 = v686 + "\n\n";
    introspect(JAM.policy.p40) {
      v374.write(v375);
    }
    return true;
  }
  var v687 = this.type;
  var v383 = v687 == "separate";
  if (v383) {
    i$$14 = 0;
    var v844 = this.ranges;
    var v688 = v844.length;
    var v382 = i$$14 < v688;
    for (;v382;) {
      var v953 = this.ranges;
      var v845 = v953[i$$14];
      introspect(JAM.policy.p40) {
        var v689 = v845.getSequence(sequence$$20)
      }
      var v381 = v689 != "";
      if (v381) {
        var v377 = outputWindow.document;
        var v954 = this.ranges;
        var v846 = v954[i$$14];
        var v690 = v846.getTitle();
        var v378 = v690 + "\n";
        introspect(JAM.policy.p40) {
          v377.write(v378);
        }
        var v379 = outputWindow.document;
        var v1031 = this.ranges;
        var v955 = v1031[i$$14];
        introspect(JAM.policy.p40) {
          var v847 = v955.getSequence(sequence$$20)
        }
        var v691 = addReturns(v847);
        var v380 = v691 + "\n\n";
        introspect(JAM.policy.p40) {
          v379.write(v380);
        }
      }
      i$$14 = i$$14 + 1;
      var v848 = this.ranges;
      var v692 = v848.length;
      v382 = i$$14 < v692;
    }
    return true;
  }
  var v693 = this.type;
  var v391 = v693 == "uppercased";
  if (v391) {
    var re$$3;
    sequence$$20 = sequence$$20.toLowerCase();
    i$$14 = 0;
    var v849 = this.ranges;
    var v694 = v849.length;
    var v388 = i$$14 < v694;
    for (;v388;) {
      var v956 = this.ranges;
      var v850 = v956[i$$14];
      introspect(JAM.policy.p40) {
        var v695 = v850.getSequence(sequence$$20)
      }
      var v387 = v695 != "";
      if (v387) {
        var v957 = this.ranges;
        var v851 = v957[i$$14];
        var v696 = v851.start;
        var v386 = v696 > 1;
        if (v386) {
          var v1124 = this.ranges;
          var v1080 = v1124[i$$14];
          var v1032 = v1080.start;
          var v958 = v1032 - 1;
          var v852 = "(.{" + v958;
          var v697 = v852 + "})\\B(.{";
          var v1081 = this.ranges;
          var v1033 = v1081[i$$14];
          var v959 = v1033.stop;
          var v1082 = this.ranges;
          var v1034 = v1082[i$$14];
          var v960 = v1034.start;
          var v853 = v959 - v960;
          var v698 = v853 + 1;
          var v384 = v697 + v698;
          re$$3 = v384 + "})";
          re$$3 = new RegExp(re$$3);
          introspect(JAM.policy.p41) {
            sequence$$20 = sequence$$20.replace(re$$3, v2);
          }
        } else {
          var v1083 = this.ranges;
          var v1035 = v1083[i$$14];
          var v961 = v1035.stop;
          var v1084 = this.ranges;
          var v1036 = v1084[i$$14];
          var v962 = v1036.start;
          var v854 = v961 - v962;
          var v699 = v854 + 1;
          var v385 = "(.{" + v699;
          re$$3 = v385 + "})";
          re$$3 = new RegExp(re$$3);
          introspect(JAM.policy.p41) {
            sequence$$20 = sequence$$20.replace(re$$3, v3);
          }
        }
      }
      i$$14 = i$$14 + 1;
      var v855 = this.ranges;
      var v700 = v855.length;
      v388 = i$$14 < v700;
    }
    var v389 = outputWindow.document;
    var v701 = addReturns(sequence$$20);
    var v390 = v701 + "\n\n";
    introspect(JAM.policy.p40) {
      v389.write(v390);
    }
    return true;
  }
  var v702 = this.type;
  var v399 = v702 == "lowercased";
  if (v399) {
    sequence$$20 = sequence$$20.toUpperCase();
    i$$14 = 0;
    var v856 = this.ranges;
    var v703 = v856.length;
    var v396 = i$$14 < v703;
    for (;v396;) {
      var v963 = this.ranges;
      var v857 = v963[i$$14];
      introspect(JAM.policy.p40) {
        var v704 = v857.getSequence(sequence$$20)
      }
      var v395 = v704 != "";
      if (v395) {
        var v964 = this.ranges;
        var v858 = v964[i$$14];
        var v705 = v858.start;
        var v394 = v705 > 1;
        if (v394) {
          var v1125 = this.ranges;
          var v1085 = v1125[i$$14];
          var v1037 = v1085.start;
          var v965 = v1037 - 1;
          var v859 = "(.{" + v965;
          var v706 = v859 + "})\\B(.{";
          var v1086 = this.ranges;
          var v1038 = v1086[i$$14];
          var v966 = v1038.stop;
          var v1087 = this.ranges;
          var v1039 = v1087[i$$14];
          var v967 = v1039.start;
          var v860 = v966 - v967;
          var v707 = v860 + 1;
          var v392 = v706 + v707;
          re$$3 = v392 + "})";
          re$$3 = new RegExp(re$$3);
          introspect(JAM.policy.p41) {
            sequence$$20 = sequence$$20.replace(re$$3, v4);
          }
        } else {
          var v1088 = this.ranges;
          var v1040 = v1088[i$$14];
          var v968 = v1040.stop;
          var v1089 = this.ranges;
          var v1041 = v1089[i$$14];
          var v969 = v1041.start;
          var v861 = v968 - v969;
          var v708 = v861 + 1;
          var v393 = "(.{" + v708;
          re$$3 = v393 + "})";
          re$$3 = new RegExp(re$$3);
          introspect(JAM.policy.p41) {
            sequence$$20 = sequence$$20.replace(re$$3, v5);
          }
        }
      }
      i$$14 = i$$14 + 1;
      var v862 = this.ranges;
      var v709 = v862.length;
      v396 = i$$14 < v709;
    }
    var v397 = outputWindow.document;
    var v710 = addReturns(sequence$$20);
    var v398 = v710 + "\n\n";
    introspect(JAM.policy.p40) {
      v397.write(v398);
    }
    return true;
  }
  var v711 = this.type;
  var v407 = v711 == "randomized";
  if (v407) {
    i$$14 = 0;
    var v863 = this.ranges;
    var v712 = v863.length;
    var v404 = i$$14 < v712;
    for (;v404;) {
      var v970 = this.ranges;
      var v864 = v970[i$$14];
      introspect(JAM.policy.p40) {
        var v713 = v864.getSequence(sequence$$20)
      }
      var v403 = v713 != "";
      if (v403) {
        var v971 = this.ranges;
        var v865 = v971[i$$14];
        var v714 = v865.start;
        var v402 = v714 > 1;
        if (v402) {
          var v1126 = this.ranges;
          var v1090 = v1126[i$$14];
          var v1042 = v1090.start;
          var v972 = v1042 - 1;
          var v866 = "(.{" + v972;
          var v715 = v866 + "})\\B(.{";
          var v1091 = this.ranges;
          var v1043 = v1091[i$$14];
          var v973 = v1043.stop;
          var v1092 = this.ranges;
          var v1044 = v1092[i$$14];
          var v974 = v1044.start;
          var v867 = v973 - v974;
          var v716 = v867 + 1;
          var v400 = v715 + v716;
          re$$3 = v400 + "})";
          re$$3 = new RegExp(re$$3);
          introspect(JAM.policy.p41) {
            sequence$$20 = sequence$$20.replace(re$$3, v6);
          }
        } else {
          var v1093 = this.ranges;
          var v1045 = v1093[i$$14];
          var v975 = v1045.stop;
          var v1094 = this.ranges;
          var v1046 = v1094[i$$14];
          var v976 = v1046.start;
          var v868 = v975 - v976;
          var v717 = v868 + 1;
          var v401 = "(.{" + v717;
          re$$3 = v401 + "})";
          re$$3 = new RegExp(re$$3);
          introspect(JAM.policy.p41) {
            sequence$$20 = sequence$$20.replace(re$$3, v7);
          }
        }
      }
      i$$14 = i$$14 + 1;
      var v869 = this.ranges;
      var v718 = v869.length;
      v404 = i$$14 < v718;
    }
    var v405 = outputWindow.document;
    var v719 = addReturns(sequence$$20);
    var v406 = v719 + "\n\n";
    introspect(JAM.policy.p40) {
      v405.write(v406);
    }
    return true;
  }
  var v720 = this.type;
  var v417 = v720 == "preserved";
  if (v417) {
    var v408 = ["A", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "Y"];
    var v409 = sequence$$20.length;
    var randomSequence = getRandomSequence(v408, v409);
    i$$14 = 0;
    var v870 = this.ranges;
    var v721 = v870.length;
    var v414 = i$$14 < v721;
    for (;v414;) {
      var v977 = this.ranges;
      var v871 = v977[i$$14];
      introspect(JAM.policy.p40) {
        var v722 = v871.getSequence(sequence$$20)
      }
      var v413 = v722 != "";
      if (v413) {
        var v978 = this.ranges;
        var v872 = v978[i$$14];
        var v723 = v872.start;
        var v412 = v723 > 1;
        if (v412) {
          var v1127 = this.ranges;
          var v1095 = v1127[i$$14];
          var v1047 = v1095.start;
          var v979 = v1047 - 1;
          var v873 = "(.{" + v979;
          var v724 = v873 + "})\\B(.{";
          var v1096 = this.ranges;
          var v1048 = v1096[i$$14];
          var v980 = v1048.stop;
          var v1097 = this.ranges;
          var v1049 = v1097[i$$14];
          var v981 = v1049.start;
          var v874 = v980 - v981;
          var v725 = v874 + 1;
          var v410 = v724 + v725;
          re$$3 = v410 + "})";
          re$$3 = new RegExp(re$$3);
          introspect(JAM.policy.p41) {
            randomSequence = randomSequence.replace(re$$3, v8);
          }
        } else {
          var v1098 = this.ranges;
          var v1050 = v1098[i$$14];
          var v982 = v1050.stop;
          var v1099 = this.ranges;
          var v1051 = v1099[i$$14];
          var v983 = v1051.start;
          var v875 = v982 - v983;
          var v726 = v875 + 1;
          var v411 = "(.{" + v726;
          re$$3 = v411 + "})";
          re$$3 = new RegExp(re$$3);
          introspect(JAM.policy.p41) {
            randomSequence = randomSequence.replace(re$$3, v9);
          }
        }
      }
      i$$14 = i$$14 + 1;
      var v876 = this.ranges;
      var v727 = v876.length;
      v414 = i$$14 < v727;
    }
    var v415 = outputWindow.document;
    var v728 = addReturns(randomSequence);
    var v416 = v728 + "\n\n";
    introspect(JAM.policy.p40) {
      v415.write(v416);
    }
    return true;
  }
  return;
}
function RangeGroup(type$$25) {
  this.type = type$$25;
  var v1223 = new Array;
  this.ranges = v1223;
  return;
}
new Range(0, 0);
var v418 = Range.prototype;
v418.getSequence = getSequence;
var v419 = Range.prototype;
v419.getTitle = getTitle;
new RangeGroup("", "");
var v420 = RangeGroup.prototype;
v420.addRange = addRange;
var v421 = RangeGroup.prototype;
v421.writeRanges = writeRanges;
document.onload = v10;
introspect(JAM.policy.p24) {
  var v422 = document.getElementById("submitbtn")
}
v422.onclick = v11;
introspect(JAM.policy.p24) {
  var v423 = document.getElementById("clearbtn")
}
v423.onclick = v12
