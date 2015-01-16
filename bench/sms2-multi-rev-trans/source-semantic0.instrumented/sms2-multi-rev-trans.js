function v4() {
  var v926 = document.forms;
  var v770 = v926[0];
  var v434 = v770.elements;
  var v5 = v434[0];
  v5.value = " ";
  var v927 = document.forms;
  var v771 = v927[0];
  var v435 = v771.elements;
  var v6 = v435[4];
  v6.value = " ";
  return;
}
function v3() {
  try {
    multiRevTrans(document);
  } catch (e$$8) {
    var v7 = "The following error was encountered: " + e$$8;
    alert(v7);
  }
  return;
}
function v2() {
  var v436 = document.main_form;
  var v8 = v436.main_submit;
  v8.focus();
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
  var v9 = arrayOfSequences[0];
  var lengthOfAlign = v9.length;
  var v437 = arrayOfSequences.length;
  var v10 = v437 < 2;
  if (v10) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v438 = arrayOfTitles.length;
  var v12 = i$$1 < v438;
  for (;v12;) {
    var v1022 = arrayOfTitles[i$$1];
    introspect(JAM.policy.p15) {
      var v928 = v1022.search(/\S/)
    }
    var v772 = v928 == -1;
    var v930 = !v772;
    if (v930) {
      var v1023 = arrayOfSequences[i$$1];
      introspect(JAM.policy.p15) {
        var v929 = v1023.search(/\S/)
      }
      v772 = v929 == -1;
    }
    var v439 = v772;
    var v774 = !v439;
    if (v774) {
      var v931 = arrayOfSequences[i$$1];
      var v773 = v931.length;
      v439 = v773 != lengthOfAlign;
    }
    var v11 = v439;
    if (v11) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v440 = arrayOfTitles.length;
    v12 = i$$1 < v440;
  }
  return true;
}
function checkCodonTable(codonTable) {
  introspect(JAM.policy.p15) {
    var v1078 = codonTable.search(/AmAcid/)
  }
  var v1024 = v1078 == -1;
  var v1080 = !v1024;
  if (v1080) {
    introspect(JAM.policy.p15) {
      var v1079 = codonTable.search(/Codon/)
    }
    v1024 = v1079 == -1;
  }
  var v932 = v1024;
  var v1026 = !v932;
  if (v1026) {
    introspect(JAM.policy.p15) {
      var v1025 = codonTable.search(/Number/)
    }
    v932 = v1025 == -1;
  }
  var v775 = v932;
  var v934 = !v775;
  if (v934) {
    introspect(JAM.policy.p15) {
      var v933 = codonTable.search(/\/1000/)
    }
    v775 = v933 == -1;
  }
  var v441 = v775;
  var v777 = !v441;
  if (v777) {
    introspect(JAM.policy.p15) {
      var v776 = codonTable.search(/Fraction\s*\.\./)
    }
    v441 = v776 == -1;
  }
  var v13 = v441;
  if (v13) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v778 = formElement.value;
  introspect(JAM.policy.p15) {
    var v442 = v778.search(/\S/)
  }
  var v14 = v442 == -1;
  if (v14) {
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
  var v443 = arrayOfPatterns.length;
  var v17 = z$$2 < v443;
  for (;v17;) {
    var v779 = arrayOfPatterns[z$$2];
    introspect(JAM.policy.p15) {
      var v444 = v779.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/)
    }
    var v15 = v444 == -1;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v780 = arrayOfPatterns[z$$2];
    var v445 = moreExpressionCheck(v780);
    var v16 = v445 == false;
    if (v16) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v446 = arrayOfPatterns.length;
    v17 = z$$2 < v446;
  }
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v18);
  var v19 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v19);
  var j = 0;
  var v447 = arrayOfPatterns.length;
  var v23 = j < v447;
  for (;v23;) {
    var v781 = arrayOfPatterns[j];
    introspect(JAM.policy.p15) {
      var v448 = v781.match(/\/.+\//)
    }
    var v20 = v448 + "gi";
    var v1247 = eval(v20);
    geneticCodeMatchExp[j] = v1247;
    var v449 = arrayOfPatterns[j];
    introspect(JAM.policy.p15) {
      var v21 = v449.match(/=[a-zA-Z\*]/)
    }
    var v1248 = v21.toString();
    geneticCodeMatchResult[j] = v1248;
    var v22 = geneticCodeMatchResult[j];
    introspect(JAM.policy.p16) {
      var v1249 = v22.replace(/=/g, "")
    }
    geneticCodeMatchResult[j] = v1249;
    j++;
    var v450 = arrayOfPatterns.length;
    v23 = j < v450;
  }
  var i$$2 = 0;
  var v782 = testSequence.length;
  var v451 = v782 - 3;
  var v30 = i$$2 <= v451;
  for (;v30;) {
    var v24 = i$$2 + 3;
    introspect(JAM.policy.p16) {
      codon = testSequence.substring(i$$2, v24);
    }
    j = 0;
    var v452 = geneticCodeMatchExp.length;
    var v28 = j < v452;
    for (;v28;) {
      var v783 = geneticCodeMatchExp[j];
      introspect(JAM.policy.p17) {
        var v453 = codon.search(v783)
      }
      var v27 = v453 != -1;
      if (v27) {
        var v26 = oneMatch == true;
        if (v26) {
          var v454 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v25 = v454 + ".";
          alert(v25);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v455 = geneticCodeMatchExp.length;
      v28 = j < v455;
    }
    var v29 = oneMatch == false;
    if (v29) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v784 = testSequence.length;
    var v456 = v784 - 3;
    v30 = i$$2 <= v456;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v457 = arrayOfPatterns$$1.length;
  var v32 = z$$3 < v457;
  for (;v32;) {
    var v785 = arrayOfPatterns$$1[z$$3];
    introspect(JAM.policy.p15) {
      var v458 = v785.search(/[^acdefghiklmnpqrstvwyz]/i)
    }
    var v31 = v458 != -1;
    if (v31) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v459 = arrayOfPatterns$$1.length;
    v32 = z$$3 < v459;
  }
  var i$$3 = 0;
  var v460 = arrayOfPatterns$$1.length;
  var v36 = i$$3 < v460;
  for (;v36;) {
    var v786 = arrayOfPatterns$$1[i$$3];
    var v461 = "[" + v786;
    var v33 = v461 + "]";
    var re = new RegExp(v33, "gi");
    var j$$1 = i$$3 + 1;
    var v462 = arrayOfPatterns$$1.length;
    var v35 = j$$1 < v462;
    for (;v35;) {
      var v787 = arrayOfPatterns$$1[j$$1];
      introspect(JAM.policy.p17) {
        var v463 = v787.search(re)
      }
      var v34 = v463 != -1;
      if (v34) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v464 = arrayOfPatterns$$1.length;
      v35 = j$$1 < v464;
    }
    i$$3++;
    var v465 = arrayOfPatterns$$1.length;
    v36 = i$$3 < v465;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v466 = arrayOfPatterns$$2.length;
  var v39 = z$$4 < v466;
  for (;v39;) {
    var v788 = arrayOfPatterns$$2[z$$4];
    introspect(JAM.policy.p15) {
      var v467 = v788.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i)
    }
    var v37 = v467 == -1;
    if (v37) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v789 = arrayOfPatterns$$2[z$$4];
    var v468 = moreExpressionCheck(v789);
    var v38 = v468 == false;
    if (v38) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v469 = arrayOfPatterns$$2.length;
    v39 = z$$4 < v469;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v935 = getSequenceFromFasta(text$$7);
  introspect(JAM.policy.p16) {
    var v790 = v935.replace(/[^A-Za-z]/g, "")
  }
  var v470 = v790.length;
  var v41 = v470 > maxInput;
  if (v41) {
    var v471 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v40 = v471 + " characters.";
    alert(v40);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v472 = text$$8.length;
  var v43 = v472 > maxInput$$1;
  if (v43) {
    var v473 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v42 = v473 + " characters.";
    alert(v42);
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
  var v44 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v44.write("</form>");
  }
  return true;
}
function closePre() {
  var v45 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v45.write("</div>");
  }
  var v46 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v46.write("</pre>\n");
  }
  return;
}
function closeTextArea() {
  var v47 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v47.write("</textarea>");
  }
  return true;
}
function closeWindow() {
  var v48 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v48.write("</body>\n</html>\n");
  }
  outputWindow.status = "Done.";
  var v49 = outputWindow.document;
  v49.close();
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
  var v474 = alignArray.length;
  var v50 = v474 < 3;
  if (v50) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v475 = alignArray.length;
  var v52 = i$$4 < v475;
  for (;v52;) {
    var v791 = alignArray[i$$4];
    introspect(JAM.policy.p15) {
      var v476 = v791.search(/[^\s]+\s/)
    }
    var v51 = v476 == -1;
    if (v51) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v477 = alignArray.length;
    v52 = i$$4 < v477;
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
  introspect(JAM.policy.p15) {
    var v478 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v55 = v478 != -1;
  if (v55) {
    introspect(JAM.policy.p17) {
      var v54 = matchArray = re$$1.exec(sequenceData)
    }
    for (;v54;) {
      var v53 = matchArray[0];
      introspect(JAM.policy.p17) {
        arrayOfFasta.push(v53);
      }
      introspect(JAM.policy.p17) {
        v54 = matchArray = re$$1.exec(sequenceData);
      }
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v479 = sequence$$2.length;
  var v56 = "&gt;results for " + v479;
  var stringToReturn = v56 + " residue sequence ";
  introspect(JAM.policy.p15) {
    var v480 = fastaSequenceTitle.search(/[^\s]/)
  }
  var v58 = v480 != -1;
  if (v58) {
    var v481 = stringToReturn + '"';
    var v57 = v481 + fastaSequenceTitle;
    stringToReturn = v57 + '"';
  }
  var v482 = stringToReturn + ' starting "';
  introspect(JAM.policy.p13) {
    var v483 = sequence$$2.substring(0, 10)
  }
  var v59 = v482 + v483;
  stringToReturn = v59 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v484 = sequenceOne.length;
  var v60 = "Search results for " + v484;
  var stringToReturn$$1 = v60 + " residue sequence ";
  introspect(JAM.policy.p15) {
    var v485 = fastaSequenceTitleOne.search(/[^\s]/)
  }
  var v62 = v485 != -1;
  if (v62) {
    var v486 = stringToReturn$$1 + '"';
    var v61 = v486 + fastaSequenceTitleOne;
    stringToReturn$$1 = v61 + '"';
  }
  var v487 = stringToReturn$$1 + ' starting "';
  introspect(JAM.policy.p13) {
    var v488 = sequenceOne.substring(0, 10)
  }
  var v63 = v487 + v488;
  stringToReturn$$1 = v63 + '"\n';
  var v489 = stringToReturn$$1 + "and ";
  var v490 = sequenceTwo.length;
  var v64 = v489 + v490;
  stringToReturn$$1 = v64 + " residue sequence ";
  introspect(JAM.policy.p15) {
    var v491 = fastaSequenceTitleTwo.search(/[^\s]/)
  }
  var v66 = v491 != -1;
  if (v66) {
    var v492 = stringToReturn$$1 + '"';
    var v65 = v492 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v65 + '"';
  }
  var v493 = stringToReturn$$1 + ' starting "';
  introspect(JAM.policy.p13) {
    var v494 = sequenceTwo.substring(0, 10)
  }
  var v67 = v493 + v494;
  stringToReturn$$1 = v67 + '"';
  var v68 = '<div class="info">' + stringToReturn$$1;
  return v68 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v69 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v69);
  var j$$2 = 0;
  var v495 = arrayOfPatterns$$3.length;
  var v71 = j$$2 < v495;
  for (;v71;) {
    var v792 = arrayOfPatterns$$3[j$$2];
    introspect(JAM.policy.p15) {
      var v496 = v792.match(/\/.+\//)
    }
    var v70 = v496 + "gi";
    var v1250 = eval(v70);
    geneticCodeMatchExp$$1[j$$2] = v1250;
    j$$2++;
    var v497 = arrayOfPatterns$$3.length;
    v71 = j$$2 < v497;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v72 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v72);
  var j$$3 = 0;
  var v498 = arrayOfPatterns$$4.length;
  var v75 = j$$3 < v498;
  for (;v75;) {
    var v499 = arrayOfPatterns$$4[j$$3];
    introspect(JAM.policy.p15) {
      var v73 = v499.match(/=[a-zA-Z\*]/)
    }
    var v1251 = v73.toString();
    geneticCodeMatchResult$$1[j$$3] = v1251;
    var v74 = geneticCodeMatchResult$$1[j$$3];
    introspect(JAM.policy.p16) {
      var v1252 = v74.replace(/=/g, "")
    }
    geneticCodeMatchResult$$1[j$$3] = v1252;
    j$$3++;
    var v500 = arrayOfPatterns$$4.length;
    v75 = j$$3 < v500;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v501 = sequence$$3.length;
  var v76 = "Results for " + v501;
  var stringToReturn$$2 = v76 + " residue sequence ";
  introspect(JAM.policy.p15) {
    var v502 = fastaSequenceTitle$$1.search(/[^\s]/)
  }
  var v78 = v502 != -1;
  if (v78) {
    var v503 = stringToReturn$$2 + '"';
    var v77 = v503 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v77 + '"';
  }
  var v504 = stringToReturn$$2 + ' starting "';
  introspect(JAM.policy.p13) {
    var v505 = sequence$$3.substring(0, 10)
  }
  var v79 = v504 + v505;
  stringToReturn$$2 = v79 + '"';
  var v80 = '<div class="info">' + stringToReturn$$2;
  return v80 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v793 = "Results for " + topology;
  var v506 = v793 + " ";
  var v507 = sequence$$4.length;
  var v81 = v506 + v507;
  var stringToReturn$$3 = v81 + " residue sequence ";
  introspect(JAM.policy.p15) {
    var v508 = fastaSequenceTitle$$2.search(/[^\s]/)
  }
  var v83 = v508 != -1;
  if (v83) {
    var v509 = stringToReturn$$3 + '"';
    var v82 = v509 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v82 + '"';
  }
  var v510 = stringToReturn$$3 + ' starting "';
  introspect(JAM.policy.p13) {
    var v511 = sequence$$4.substring(0, 10)
  }
  var v84 = v510 + v511;
  stringToReturn$$3 = v84 + '"';
  var v85 = '<div class="info">' + stringToReturn$$3;
  return v85 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v512 = sequenceOne$$1.length;
  var v86 = "Alignment results for " + v512;
  var stringToReturn$$4 = v86 + " residue sequence ";
  introspect(JAM.policy.p15) {
    var v513 = fastaSequenceTitleOne$$1.search(/[^\s]/)
  }
  var v88 = v513 != -1;
  if (v88) {
    var v514 = stringToReturn$$4 + '"';
    var v87 = v514 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v87 + '"';
  }
  var v515 = stringToReturn$$4 + ' starting "';
  introspect(JAM.policy.p13) {
    var v516 = sequenceOne$$1.substring(0, 10)
  }
  var v89 = v515 + v516;
  stringToReturn$$4 = v89 + '"\n';
  var v517 = stringToReturn$$4 + "and ";
  var v518 = sequenceTwo$$1.length;
  var v90 = v517 + v518;
  stringToReturn$$4 = v90 + " residue sequence ";
  introspect(JAM.policy.p15) {
    var v519 = fastaSequenceTitleTwo$$1.search(/[^\s]/)
  }
  var v92 = v519 != -1;
  if (v92) {
    var v520 = stringToReturn$$4 + '"';
    var v91 = v520 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v91 + '"';
  }
  var v521 = stringToReturn$$4 + ' starting "';
  introspect(JAM.policy.p13) {
    var v522 = sequenceTwo$$1.substring(0, 10)
  }
  var v93 = v521 + v522;
  stringToReturn$$4 = v93 + '"';
  var v94 = '<div class="info">' + stringToReturn$$4;
  return v94 + "</div>\n";
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v96 = j$$4 < lengthOut;
  for (;v96;) {
    var v523 = Math.random();
    var v524 = components.length;
    var v95 = v523 * v524;
    introspect(JAM.policy.p15) {
      tempNum = Math.floor(v95);
    }
    tempChar = components[tempNum];
    introspect(JAM.policy.p17) {
      sequenceArray.push(tempChar);
    }
    j$$4++;
    v96 = j$$4 < lengthOut;
  }
  introspect(JAM.policy.p9) {
    return sequenceArray.join("");
  }
}
function getSequenceFromFasta(sequenceRecord) {
  introspect(JAM.policy.p15) {
    var v525 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v97 = v525 != -1;
  if (v97) {
    introspect(JAM.policy.p16) {
      sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "");
    }
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  introspect(JAM.policy.p15) {
    var v526 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v99 = v526 != -1;
  if (v99) {
    introspect(JAM.policy.p16) {
      var v98 = sequenceRecord$$1.match(/\>[^\f\n\r]+[\f\n\r]/, "")
    }
    fastaTitle = v98.toString();
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
  introspect(JAM.policy.p15) {
    var v1183 = expressionToCheck.search(/\[[A-Za-z\|]*\[/)
  }
  var v1173 = v1183 != -1;
  var v1185 = !v1173;
  if (v1185) {
    introspect(JAM.policy.p15) {
      var v1184 = expressionToCheck.search(/\][A-Za-z\|]*\]/)
    }
    v1173 = v1184 != -1;
  }
  var v1157 = v1173;
  var v1175 = !v1157;
  if (v1175) {
    introspect(JAM.policy.p15) {
      var v1174 = expressionToCheck.search(/\[\]/)
    }
    v1157 = v1174 != -1;
  }
  var v1140 = v1157;
  var v1159 = !v1140;
  if (v1159) {
    introspect(JAM.policy.p15) {
      var v1158 = expressionToCheck.search(/\/[A-Za-z\|]*\]/)
    }
    v1140 = v1158 != -1;
  }
  var v1119 = v1140;
  var v1142 = !v1119;
  if (v1142) {
    introspect(JAM.policy.p15) {
      var v1141 = expressionToCheck.search(/\[[A-Za-z\|]*\//)
    }
    v1119 = v1141 != -1;
  }
  var v1102 = v1119;
  var v1121 = !v1102;
  if (v1121) {
    introspect(JAM.policy.p15) {
      var v1120 = expressionToCheck.search(/\|\|/)
    }
    v1102 = v1120 != -1;
  }
  var v1081 = v1102;
  var v1104 = !v1081;
  if (v1104) {
    introspect(JAM.policy.p15) {
      var v1103 = expressionToCheck.search(/\/\|/)
    }
    v1081 = v1103 != -1;
  }
  var v1027 = v1081;
  var v1083 = !v1027;
  if (v1083) {
    introspect(JAM.policy.p15) {
      var v1082 = expressionToCheck.search(/\|\//)
    }
    v1027 = v1082 != -1;
  }
  var v936 = v1027;
  var v1029 = !v936;
  if (v1029) {
    introspect(JAM.policy.p15) {
      var v1028 = expressionToCheck.search(/\[.\]/)
    }
    v936 = v1028 != -1;
  }
  var v794 = v936;
  var v938 = !v794;
  if (v938) {
    introspect(JAM.policy.p15) {
      var v937 = expressionToCheck.search(/\</)
    }
    v794 = v937 != -1;
  }
  var v527 = v794;
  var v796 = !v527;
  if (v796) {
    introspect(JAM.policy.p15) {
      var v795 = expressionToCheck.search(/\>/)
    }
    v527 = v795 != -1;
  }
  var v100 = v527;
  if (v100) {
    return false;
  }
  return true;
}
function openForm() {
  var v101 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v101.write('<form action="">\n');
  }
  return true;
}
function openPre() {
  var v102 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v102.write("<pre>");
  }
  var v103 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v103.write('<div class="pre">');
  }
  return;
}
function openTextArea() {
  var v104 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v104.write('<br /><textarea rows="6" cols="61">\n');
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
  var v105 = outputWindow.document;
  var v939 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v797 = v939 + "<head>\n";
  var v528 = v797 + "<title>Sequence Manipulation Suite</title>\n";
  var v106 = v528 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  introspect(JAM.policy.p17) {
    v105.write(v106);
  }
  if (isColor) {
    var v107 = outputWindow.document;
    var v1213 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1203 = v1213 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1193 = v1203 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1186 = v1193 + "div.info {font-weight: bold}\n";
    var v1176 = v1186 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1160 = v1176 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v1143 = v1160 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v1122 = v1143 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1105 = v1122 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v1084 = v1105 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v1030 = v1084 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v940 = v1030 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v798 = v940 + "td.many {color: #000000}\n";
    var v529 = v798 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v108 = v529 + "</style>\n";
    introspect(JAM.policy.p17) {
      v107.write(v108);
    }
  } else {
    var v109 = outputWindow.document;
    var v1223 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1214 = v1223 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1204 = v1214 + "div.title {display: none}\n";
    var v1194 = v1204 + "div.info {font-weight: bold}\n";
    var v1187 = v1194 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1177 = v1187 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1161 = v1177 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v1144 = v1161 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1123 = v1144 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1106 = v1123 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1085 = v1106 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v1031 = v1085 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v941 = v1031 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v799 = v941 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v530 = v799 + "img {display: none}\n";
    var v110 = v530 + "</style>\n";
    introspect(JAM.policy.p17) {
      v109.write(v110);
    }
  }
  var v111 = outputWindow.document;
  var v942 = "</head>\n" + '<body class="main">\n';
  var v800 = v942 + '<div class="title">';
  var v531 = v800 + title$$6;
  var v112 = v531 + " results</div>\n";
  introspect(JAM.policy.p17) {
    v111.write(v112);
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
  var v113 = outputWindow.document;
  var v943 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v801 = v943 + "<head>\n";
  var v532 = v801 + "<title>Sequence Manipulation Suite</title>\n";
  var v114 = v532 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  introspect(JAM.policy.p17) {
    v113.write(v114);
  }
  if (isBackground) {
    var v115 = outputWindow.document;
    var v1215 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1205 = v1215 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1195 = v1205 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1188 = v1195 + "div.info {font-weight: bold}\n";
    var v1178 = v1188 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v1162 = v1178 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v1145 = v1162 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v1124 = v1145 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v1107 = v1124 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v1086 = v1107 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v1032 = v1086 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v944 = v1032 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v802 = v944 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v533 = v802 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v116 = v533 + "</style>\n";
    introspect(JAM.policy.p17) {
      v115.write(v116);
    }
  } else {
    var v117 = outputWindow.document;
    var v1228 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1224 = v1228 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1216 = v1224 + "div.title {display: none}\n";
    var v1206 = v1216 + "div.info {font-weight: bold}\n";
    var v1196 = v1206 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1189 = v1196 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v1179 = v1189 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v1163 = v1179 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v1146 = v1163 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v1125 = v1146 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v1108 = v1125 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v1087 = v1108 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v1033 = v1087 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v945 = v1033 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v803 = v945 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v534 = v803 + "img {display: none}\n";
    var v118 = v534 + "</style>\n";
    introspect(JAM.policy.p17) {
      v117.write(v118);
    }
  }
  var v119 = outputWindow.document;
  var v946 = "</head>\n" + '<body class="main">\n';
  var v804 = v946 + '<div class="title">';
  var v535 = v804 + title$$8;
  var v120 = v535 + " results</div>\n";
  introspect(JAM.policy.p17) {
    v119.write(v120);
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
  introspect(JAM.policy.p15) {
    var v536 = dnaSequence$$1.search(/./)
  }
  var v121 = v536 != -1;
  if (v121) {
    introspect(JAM.policy.p15) {
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
  var v122 = j$$5 < lengthOfColumn;
  for (;v122;) {
    tempString = tempString + " ";
    j$$5++;
    v122 = j$$5 < lengthOfColumn;
  }
  var v123 = tempString + theNumber;
  theNumber = v123 + " ";
  var v124 = sequenceToAppend + theNumber;
  sequenceToAppend = v124 + tabIn;
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
  var v537 = testArray[0];
  var v125 = v537 != testString;
  if (v125) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  introspect(JAM.policy.p17) {
    var v538 = testString.search(re$$2)
  }
  var v126 = v538 == -1;
  if (v126) {
    alert("Regular expression 'm' flag not supported. See browser compatibility page.");
    return false;
  }
  var caughtException = false;
  try {
    re$$2 = eval("Exception handling not supported. Check browser compatibility page.");
  } catch (e$$4) {
    caughtException = true;
  }
  var v127 = !caughtException;
  if (v127) {
    alert("Exception handling not supported. See browser compatibility page.");
  }
  testString = "123";
  introspect(JAM.policy.p16) {
    testString = testString.replace(/(\d)/g, v1);
  }
  var v128 = testString != "1X2X3X";
  if (v128) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false;
  }
  var testNum = 2489.8237;
  introspect(JAM.policy.p10) {
    var v539 = testNum.toFixed(3)
  }
  var v129 = v539 != 2489.824;
  if (v129) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  introspect(JAM.policy.p10) {
    var v540 = testNum.toPrecision(5)
  }
  var v130 = v540 != 2489.8;
  if (v130) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  introspect(JAM.policy.p15) {
    var v541 = theNumber$$1.search(/\d/)
  }
  var v131 = v541 == -1;
  if (v131) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  introspect(JAM.policy.p15) {
    var v1034 = emblFile.search(/ID/)
  }
  var v947 = v1034 == -1;
  var v1036 = !v947;
  if (v1036) {
    introspect(JAM.policy.p15) {
      var v1035 = emblFile.search(/AC/)
    }
    v947 = v1035 == -1;
  }
  var v805 = v947;
  var v949 = !v805;
  if (v949) {
    introspect(JAM.policy.p15) {
      var v948 = emblFile.search(/DE/)
    }
    v805 = v948 == -1;
  }
  var v542 = v805;
  var v807 = !v542;
  if (v807) {
    introspect(JAM.policy.p15) {
      var v806 = emblFile.search(/SQ/)
    }
    v542 = v806 == -1;
  }
  var v132 = v542;
  if (v132) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  introspect(JAM.policy.p15) {
    var v543 = theNumber$$2.search(/\d/)
  }
  var v133 = v543 == -1;
  if (v133) {
    alert("Please enter a number.");
    return false;
  }
  var v135 = theNumber$$2 > maxInput$$2;
  if (v135) {
    var v544 = "Please enter a number less than or equal to " + maxInput$$2;
    var v134 = v544 + ".";
    alert(v134);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  introspect(JAM.policy.p15) {
    var v545 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i)
  }
  var v136 = v545 != -1;
  if (v136) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  introspect(JAM.policy.p15) {
    var v546 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i)
  }
  var v137 = v546 != -1;
  if (v137) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  introspect(JAM.policy.p15) {
    var v1037 = genBankFile.search(/LOCUS/)
  }
  var v950 = v1037 == -1;
  var v1039 = !v950;
  if (v1039) {
    introspect(JAM.policy.p15) {
      var v1038 = genBankFile.search(/DEFINITION/)
    }
    v950 = v1038 == -1;
  }
  var v808 = v950;
  var v952 = !v808;
  if (v952) {
    introspect(JAM.policy.p15) {
      var v951 = genBankFile.search(/ACCESSION/)
    }
    v808 = v951 == -1;
  }
  var v547 = v808;
  var v810 = !v547;
  if (v810) {
    introspect(JAM.policy.p15) {
      var v809 = genBankFile.search(/ORIGIN/)
    }
    v547 = v809 == -1;
  }
  var v138 = v547;
  if (v138) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  introspect(JAM.policy.p15) {
    var v1040 = genBankFile$$1.search(/LOCUS/)
  }
  var v953 = v1040 == -1;
  var v1042 = !v953;
  if (v1042) {
    introspect(JAM.policy.p15) {
      var v1041 = genBankFile$$1.search(/DEFINITION/)
    }
    v953 = v1041 == -1;
  }
  var v811 = v953;
  var v955 = !v811;
  if (v955) {
    introspect(JAM.policy.p15) {
      var v954 = genBankFile$$1.search(/ACCESSION/)
    }
    v811 = v954 == -1;
  }
  var v548 = v811;
  var v813 = !v548;
  if (v813) {
    introspect(JAM.policy.p15) {
      var v812 = genBankFile$$1.search(/ORIGIN/)
    }
    v548 = v812 == -1;
  }
  var v139 = v548;
  if (v139) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  introspect(JAM.policy.p15) {
    var v549 = genBankFile$$1.search(/FEATURES {13}/)
  }
  var v140 = v549 == -1;
  if (v140) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  introspect(JAM.policy.p15) {
    var v1043 = emblFile$$1.search(/ID/)
  }
  var v956 = v1043 == -1;
  var v1045 = !v956;
  if (v1045) {
    introspect(JAM.policy.p15) {
      var v1044 = emblFile$$1.search(/AC/)
    }
    v956 = v1044 == -1;
  }
  var v814 = v956;
  var v958 = !v814;
  if (v958) {
    introspect(JAM.policy.p15) {
      var v957 = emblFile$$1.search(/DE/)
    }
    v814 = v957 == -1;
  }
  var v550 = v814;
  var v816 = !v550;
  if (v816) {
    introspect(JAM.policy.p15) {
      var v815 = emblFile$$1.search(/SQ/)
    }
    v550 = v815 == -1;
  }
  var v141 = v550;
  if (v141) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  introspect(JAM.policy.p15) {
    var v551 = emblFile$$1.search(/^FT/m)
  }
  var v142 = v551 == -1;
  if (v142) {
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
  var v149 = i$$5 < stopBase;
  for (;v149;) {
    var v143 = i$$5 + 1;
    lineOfText = rightNum(v143, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v552 = basePerLine / groupSize;
    var v146 = j$$6 <= v552;
    for (;v146;) {
      var v145 = k < groupSize;
      for (;v145;) {
        var v553 = k + i$$5;
        introspect(JAM.policy.p17) {
          var v144 = text$$10.charAt(v553)
        }
        lineOfText = lineOfText + v144;
        k = k + 1;
        v145 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v554 = basePerLine / groupSize;
      v146 = j$$6 <= v554;
    }
    var v147 = outputWindow.document;
    var v148 = lineOfText + "\n";
    introspect(JAM.policy.p17) {
      v147.write(v148);
    }
    lineOfText = "";
    v149 = i$$5 < stopBase;
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
    var v555 = adjustment < 0;
    if (v555) {
      v555 = adjusted >= 0;
    }
    var v150 = v555;
    if (v150) {
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
    var v556 = basePerLine$$2 / groupSize$$2;
    var v159 = j$$7 <= v556;
    for (;v159;) {
      var v154 = k$$1 < groupSize$$2;
      for (;v154;) {
        var v557 = i$$6 + k$$1;
        var v151 = v557 >= stopBase$$2;
        if (v151) {
          break;
        }
        var v152 = lineOfText$$1;
        var v558 = k$$1 + i$$6;
        introspect(JAM.policy.p17) {
          var v153 = text$$12.charAt(v558)
        }
        lineOfText$$1 = v152 + v153;
        k$$1 = k$$1 + 1;
        v154 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v157 = numberPosition$$1 == "above";
      if (v157) {
        var v155 = aboveNum;
        var v559 = adjustNumbering(i$$6, numberingAdjustment);
        var v156 = rightNum(v559, "", groupSize$$2, tabIn$$3);
        aboveNum = v155 + v156;
      }
      var v158 = i$$6 >= stopBase$$2;
      if (v158) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v560 = basePerLine$$2 / groupSize$$2;
      v159 = j$$7 <= v560;
    }
    var v182 = numberPosition$$1 == "left";
    if (v182) {
      var v160 = outputWindow.document;
      var v959 = adjustNumbering(lineNum, numberingAdjustment);
      var v817 = rightNum(v959, "", 8, tabIn$$3);
      var v561 = v817 + lineOfText$$1;
      var v161 = v561 + "\n";
      introspect(JAM.policy.p17) {
        v160.write(v161);
      }
      var v165 = strands$$1 == "two";
      if (v165) {
        var v162 = outputWindow.document;
        var v960 = adjustNumbering(lineNum, numberingAdjustment);
        var v818 = rightNum(v960, "", 8, tabIn$$3);
        var v819 = complement(lineOfText$$1);
        var v562 = v818 + v819;
        var v163 = v562 + "\n";
        introspect(JAM.policy.p17) {
          v162.write(v163);
        }
        var v164 = outputWindow.document;
        introspect(JAM.policy.p9) {
          v164.write("\n");
        }
      }
    } else {
      var v181 = numberPosition$$1 == "right";
      if (v181) {
        var v166 = outputWindow.document;
        var v820 = lineOfText$$1;
        var v821 = adjustNumbering(i$$6, numberingAdjustment);
        var v563 = v820 + v821;
        var v167 = v563 + "\n";
        introspect(JAM.policy.p17) {
          v166.write(v167);
        }
        var v171 = strands$$1 == "two";
        if (v171) {
          var v168 = outputWindow.document;
          var v822 = complement(lineOfText$$1);
          var v823 = adjustNumbering(i$$6, numberingAdjustment);
          var v564 = v822 + v823;
          var v169 = v564 + "\n";
          introspect(JAM.policy.p17) {
            v168.write(v169);
          }
          var v170 = outputWindow.document;
          introspect(JAM.policy.p9) {
            v170.write("\n");
          }
        }
      } else {
        var v180 = numberPosition$$1 == "above";
        if (v180) {
          var v172 = outputWindow.document;
          var v173 = aboveNum + "\n";
          introspect(JAM.policy.p17) {
            v172.write(v173);
          }
          var v174 = outputWindow.document;
          var v175 = lineOfText$$1 + "\n";
          introspect(JAM.policy.p17) {
            v174.write(v175);
          }
          var v179 = strands$$1 == "two";
          if (v179) {
            var v176 = outputWindow.document;
            var v565 = complement(lineOfText$$1);
            var v177 = v565 + "\n";
            introspect(JAM.policy.p17) {
              v176.write(v177);
            }
            var v178 = outputWindow.document;
            introspect(JAM.policy.p9) {
              v178.write("\n");
            }
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v183 = i$$6 < stopBase$$2;
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
  var v202 = i$$7 < stopBase$$3;
  for (;v202;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v566 = basePerLine$$3 / groupSize$$3;
    var v190 = j$$8 <= v566;
    for (;v190;) {
      var v186 = k$$2 < groupSize$$3;
      for (;v186;) {
        var v567 = i$$7 + k$$2;
        var v184 = v567 >= stopBase$$3;
        if (v184) {
          break;
        }
        var v568 = k$$2 + i$$7;
        introspect(JAM.policy.p17) {
          var v185 = text$$13.charAt(v568)
        }
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
      var v569 = basePerLine$$3 / groupSize$$3;
      v190 = j$$8 <= v569;
    }
    var v201 = numberPosition$$2 == "left";
    if (v201) {
      var v191 = outputWindow.document;
      var v824 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v570 = v824 + lineOfText$$2;
      var v192 = v570 + "\n";
      introspect(JAM.policy.p17) {
        v191.write(v192);
      }
    } else {
      var v200 = numberPosition$$2 == "right";
      if (v200) {
        var v193 = outputWindow.document;
        var v571 = lineOfText$$2 + i$$7;
        var v194 = v571 + "\n";
        introspect(JAM.policy.p17) {
          v193.write(v194);
        }
      } else {
        var v199 = numberPosition$$2 == "above";
        if (v199) {
          var v195 = outputWindow.document;
          var v196 = aboveNum$$1 + "\n";
          introspect(JAM.policy.p17) {
            v195.write(v196);
          }
          var v197 = outputWindow.document;
          var v198 = lineOfText$$2 + "\n";
          introspect(JAM.policy.p17) {
            v197.write(v198);
          }
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
  var v961 = sequence$$13.length;
  var v825 = v961 <= firstIndexToMutate;
  var v962 = !v825;
  if (v962) {
    v825 = lastIndexToMutate < 0;
  }
  var v572 = v825;
  var v826 = !v572;
  if (v826) {
    v572 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v203 = v572;
  if (v203) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v211 = i$$8 < numMut;
  for (;v211;) {
    maxNum = sequence$$13.length;
    var v573 = Math.random();
    var v204 = v573 * maxNum;
    introspect(JAM.policy.p15) {
      randNum = Math.floor(v204);
    }
    var v574 = randNum < firstIndexToMutate;
    var v827 = !v574;
    if (v827) {
      v574 = randNum > lastIndexToMutate;
    }
    var v205 = v574;
    if (v205) {
      numMut++;
      i$$8++;
      v211 = i$$8 < numMut;
      continue;
    }
    introspect(JAM.policy.p15) {
      currentChar = sequence$$13.charAt(randNum);
    }
    needNewChar = true;
    for (;needNewChar;) {
      var v575 = Math.random();
      var v576 = components$$1.length;
      var v206 = v575 * v576;
      introspect(JAM.policy.p15) {
        componentsIndex = Math.round(v206);
      }
      var v577 = components$$1.length;
      var v207 = componentsIndex == v577;
      if (v207) {
        componentsIndex = 0;
      }
      var v578 = components$$1[componentsIndex];
      var v208 = v578 != currentChar;
      if (v208) {
        needNewChar = false;
      }
    }
    introspect(JAM.policy.p13) {
      var v579 = sequence$$13.substring(0, randNum)
    }
    var v580 = components$$1[componentsIndex];
    var v209 = v579 + v580;
    var v581 = randNum + 1;
    var v582 = sequence$$13.length;
    introspect(JAM.policy.p27) {
      var v210 = sequence$$13.substring(v581, v582)
    }
    sequence$$13 = v209 + v210;
    i$$8++;
    v211 = i$$8 < numMut;
  }
  var v212 = outputWindow.document;
  var v213 = addReturns(sequence$$13);
  introspect(JAM.policy.p17) {
    v212.write(v213);
  }
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v218 = j$$9 < lengthOut$$1;
  for (;v218;) {
    var v583 = Math.random();
    var v584 = components$$2.length;
    var v214 = v583 * v584;
    introspect(JAM.policy.p15) {
      tempNum$$1 = Math.floor(v214);
    }
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v585 = sequence$$14.length;
    var v217 = v585 == 60;
    if (v217) {
      var v215 = outputWindow.document;
      var v216 = sequence$$14 + "\n";
      introspect(JAM.policy.p17) {
        v215.write(v216);
      }
      sequence$$14 = "";
    }
    j$$9++;
    v218 = j$$9 < lengthOut$$1;
  }
  var v219 = outputWindow.document;
  var v220 = sequence$$14 + "\n";
  introspect(JAM.policy.p17) {
    v219.write(v220);
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
  var v224 = dnaConformation == "circular";
  if (v224) {
    introspect(JAM.policy.p13) {
      var v221 = sequence$$15.substring(0, lookAhead)
    }
    shiftValue = v221.length;
    var v963 = sequence$$15.length;
    var v828 = v963 - lookAhead;
    var v829 = sequence$$15.length;
    introspect(JAM.policy.p27) {
      var v586 = sequence$$15.substring(v828, v829)
    }
    var v222 = v586 + sequence$$15;
    introspect(JAM.policy.p13) {
      var v223 = sequence$$15.substring(0, lookAhead)
    }
    sequence$$15 = v222 + v223;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v225 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v225.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  }
  var v226 = outputWindow.document;
  var v964 = '<tr><td class="title" width="200px">' + "Site:";
  var v830 = v964 + '</td><td class="title">';
  var v587 = v830 + "Positions:";
  var v227 = v587 + "</td></tr>\n";
  introspect(JAM.policy.p17) {
    v226.write(v227);
  }
  var i$$9 = 0;
  var v588 = arrayOfItems.length;
  var v243 = i$$9 < v588;
  for (;v243;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v589 = arrayOfItems[i$$9];
    introspect(JAM.policy.p15) {
      var v228 = v589.match(/\/.+\//)
    }
    matchExp = v228 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    var v965 = arrayOfItems[i$$9];
    introspect(JAM.policy.p15) {
      var v831 = v965.match(/\)\D*\d+/)
    }
    var v590 = v831.toString();
    introspect(JAM.policy.p16) {
      var v229 = v590.replace(/\)\D*/, "")
    }
    cutDistance = parseFloat(v229);
    introspect(JAM.policy.p17) {
      var v235 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    for (;v235;) {
      var v230 = matchExp.lastIndex;
      matchPosition = v230 - cutDistance;
      var v591 = matchPosition >= lowerLimit;
      if (v591) {
        v591 = matchPosition < upperLimit;
      }
      var v233 = v591;
      if (v233) {
        timesFound++;
        var v231 = tempString$$1 + ", ";
        var v592 = matchPosition - shiftValue;
        var v232 = v592 + 1;
        tempString$$1 = v231 + v232;
      }
      var v593 = matchExp.lastIndex;
      var v832 = RegExp.lastMatch;
      var v594 = v832.length;
      var v234 = v593 - v594;
      matchExp.lastIndex = v234 + 1;
      introspect(JAM.policy.p17) {
        v235 = matchArray$$1 = matchExp.exec(sequence$$15);
      }
    }
    introspect(JAM.policy.p15) {
      var v595 = tempString$$1.search(/\d/)
    }
    var v236 = v595 != -1;
    if (v236) {
      introspect(JAM.policy.p16) {
        tempString$$1 = tempString$$1.replace(/none,\s*/, "");
      }
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
    var v1126 = '<tr><td class="' + backGroundClass;
    var v1109 = v1126 + '">';
    var v1164 = arrayOfItems[i$$9];
    introspect(JAM.policy.p15) {
      var v1147 = v1164.match(/\([^\(]+\)/)
    }
    var v1127 = v1147.toString();
    introspect(JAM.policy.p16) {
      var v1110 = v1127.replace(/\(|\)/g, "")
    }
    var v1088 = v1109 + v1110;
    var v1046 = v1088 + '</td><td class="';
    var v966 = v1046 + backGroundClass;
    var v833 = v966 + '">';
    var v596 = v833 + tempString$$1;
    var v242 = v596 + "</td></tr>\n";
    introspect(JAM.policy.p17) {
      v241.write(v242);
    }
    timesFound = 0;
    i$$9++;
    var v597 = arrayOfItems.length;
    v243 = i$$9 < v597;
  }
  var v244 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v244.write("</tbody></table>\n");
  }
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v245 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v245.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  }
  var v246 = outputWindow.document;
  var v1089 = '<tr><td class="title">' + "Pattern:";
  var v1047 = v1089 + '</td><td class="title">';
  var v967 = v1047 + "Times found:";
  var v834 = v967 + '</td><td class="title">';
  var v598 = v834 + "Percentage:";
  var v247 = v598 + "</td></tr>\n";
  introspect(JAM.policy.p17) {
    v246.write(v247);
  }
  var i$$10 = 0;
  var v599 = arrayOfItems$$1.length;
  var v256 = i$$10 < v599;
  for (;v256;) {
    var tempNumber = 0;
    var v600 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p15) {
      var v248 = v600.match(/\/[^\/]+\//)
    }
    var matchExp$$1 = v248 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    introspect(JAM.policy.p17) {
      var v601 = sequence$$16.search(matchExp$$1)
    }
    var v250 = v601 != -1;
    if (v250) {
      introspect(JAM.policy.p17) {
        var v249 = sequence$$16.match(matchExp$$1)
      }
      tempNumber = v249.length;
    }
    var percentage = 0;
    var v835 = originalLength + 1;
    var v1048 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p15) {
      var v968 = v1048.match(/\d+/)
    }
    var v836 = parseFloat(v968);
    var v602 = v835 - v836;
    var v253 = v602 > 0;
    if (v253) {
      var v251 = 100 * tempNumber;
      var v603 = originalLength + 1;
      var v969 = arrayOfItems$$1[i$$10];
      introspect(JAM.policy.p15) {
        var v837 = v969.match(/\d+/)
      }
      var v604 = parseFloat(v837);
      var v252 = v603 - v604;
      percentage = v251 / v252;
    }
    var v254 = outputWindow.document;
    var v1165 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p15) {
      var v1148 = v1165.match(/\([^\(]+\)\b/)
    }
    var v1128 = v1148.toString();
    introspect(JAM.policy.p16) {
      var v1111 = v1128.replace(/\(|\)/g, "")
    }
    var v1090 = "<tr><td>" + v1111;
    var v1049 = v1090 + "</td><td>";
    var v970 = v1049 + tempNumber;
    var v838 = v970 + "</td><td>";
    introspect(JAM.policy.p10) {
      var v839 = percentage.toFixed(2)
    }
    var v605 = v838 + v839;
    var v255 = v605 + "</td></tr>\n";
    introspect(JAM.policy.p17) {
      v254.write(v255);
    }
    i$$10++;
    var v606 = arrayOfItems$$1.length;
    v256 = i$$10 < v606;
  }
  var v257 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v257.write("</tbody></table>\n");
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
  var v607 = sequence$$17.length;
  var v264 = v607 > 0;
  for (;v264;) {
    maxNum$$1 = sequence$$17.length;
    var v608 = Math.random();
    var v258 = v608 * maxNum$$1;
    introspect(JAM.policy.p15) {
      randNum$$1 = Math.floor(v258);
    }
    introspect(JAM.policy.p15) {
      tempChar$$2 = sequence$$17.charAt(randNum$$1);
    }
    tempSeq = tempSeq + tempChar$$2;
    introspect(JAM.policy.p13) {
      tempString1 = sequence$$17.substring(0, randNum$$1);
    }
    var v259 = randNum$$1 + 1;
    var v260 = sequence$$17.length;
    introspect(JAM.policy.p16) {
      tempString2 = sequence$$17.substring(v259, v260);
    }
    sequence$$17 = tempString1 + tempString2;
    var v609 = tempSeq.length;
    var v263 = v609 == 60;
    if (v263) {
      var v261 = outputWindow.document;
      var v262 = tempSeq + "\n";
      introspect(JAM.policy.p17) {
        v261.write(v262);
      }
      tempSeq = "";
    }
    var v610 = sequence$$17.length;
    v264 = v610 > 0;
  }
  var v265 = outputWindow.document;
  var v266 = tempSeq + "\n";
  introspect(JAM.policy.p17) {
    v265.write(v266);
  }
  return true;
}
function multiRevTrans(theDocument) {
  var newProtein = "";
  var maxInput$$3 = 2E4;
  var codonTable$$1;
  var alignArray$$1 = new Array;
  var titleArray = new Array;
  var sequenceArray$$1 = new Array;
  var v611 = testScript();
  var v267 = v611 == false;
  if (v267) {
    return false;
  }
  var v1129 = theDocument.forms;
  var v1112 = v1129[0];
  var v1091 = v1112.elements;
  var v1050 = v1091[0];
  var v971 = checkFormElement(v1050);
  var v840 = v971 == false;
  var v973 = !v840;
  if (v973) {
    var v1149 = theDocument.forms;
    var v1130 = v1149[0];
    var v1113 = v1130.elements;
    var v1092 = v1113[0];
    var v1051 = v1092.value;
    var v972 = checkTextLength(v1051, maxInput$$3);
    v840 = v972 == false;
  }
  var v612 = v840;
  var v842 = !v612;
  if (v842) {
    var v1131 = theDocument.forms;
    var v1114 = v1131[0];
    var v1093 = v1114.elements;
    var v1052 = v1093[4];
    var v974 = v1052.value;
    var v841 = checkCodonTable(v974);
    v612 = v841 == false;
  }
  var v268 = v612;
  if (v268) {
    return false;
  }
  var v1053 = theDocument.forms;
  var v975 = v1053[0];
  var v843 = v975.elements;
  var v613 = v843[0];
  var v269 = v613.value;
  theAlignment = "X" + v269;
  introspect(JAM.policy.p15) {
    alignArray$$1 = theAlignment.split(/[>%#]/);
  }
  var v614 = earlyCheckAlign(alignArray$$1);
  var v270 = v614 == false;
  if (v270) {
    return false;
  }
  var i$$11 = 1;
  var v615 = alignArray$$1.length;
  var v280 = i$$11 < v615;
  for (;v280;) {
    var v271 = i$$11 - 1;
    var v616 = alignArray$$1[i$$11];
    introspect(JAM.policy.p15) {
      var v1253 = v616.match(/[^\f\n\r]+[\f\n\r]/)
    }
    titleArray[v271] = v1253;
    var v272 = i$$11 - 1;
    var v1054 = i$$11 - 1;
    var v976 = titleArray[v1054];
    var v844 = v976.toString();
    var v617 = filterFastaTitle(v844);
    introspect(JAM.policy.p16) {
      var v1254 = v617.replace(/[\f\n\r]/g, "")
    }
    titleArray[v272] = v1254;
    var v273 = i$$11 - 1;
    var v845 = i$$11 - 1;
    var v618 = titleArray[v845];
    introspect(JAM.policy.p13) {
      var v1255 = v618.substring(0, 20)
    }
    titleArray[v273] = v1255;
    var v277 = i$$11 == 1;
    if (v277) {
      var v619 = i$$11 - 1;
      var v274 = titleArray[v619];
      longestTitle = v274.length;
    } else {
      var v977 = i$$11 - 1;
      var v846 = titleArray[v977];
      var v620 = v846.length;
      var v276 = v620 > longestTitle;
      if (v276) {
        var v621 = i$$11 - 1;
        var v275 = titleArray[v621];
        longestTitle = v275.length;
      }
    }
    var v278 = i$$11 - 1;
    var v622 = alignArray$$1[i$$11];
    introspect(JAM.policy.p16) {
      var v1256 = v622.replace(/[^\f\n\r]+[\f\n\r]/, "")
    }
    sequenceArray$$1[v278] = v1256;
    var v279 = i$$11 - 1;
    var v847 = i$$11 - 1;
    var v623 = sequenceArray$$1[v847];
    var v1257 = filterAlignSeq(v623);
    sequenceArray$$1[v279] = v1257;
    i$$11++;
    var v624 = alignArray$$1.length;
    v280 = i$$11 < v624;
  }
  var v1055 = theDocument.forms;
  var v978 = v1055[0];
  var v848 = v978.elements;
  var v625 = v848[4];
  var v281 = v625.value;
  codonTable$$1 = makeCodonTable(v281);
  var v282 = codonTable$$1 == false;
  if (v282) {
    return false;
  }
  openWindow("Multi Rev Trans");
  i$$11 = 0;
  var v626 = titleArray.length;
  var v287 = i$$11 < v626;
  for (;v287;) {
    var v283 = outputWindow.document;
    var v627 = titleArray[i$$11];
    var v628 = sequenceArray$$1[i$$11];
    var v284 = getInfoFromTitleAndSequence(v627, v628);
    introspect(JAM.policy.p17) {
      v283.write(v284);
    }
    var v849 = titleArray.length;
    var v629 = v849 - 1;
    var v286 = i$$11 < v629;
    if (v286) {
      var v285 = outputWindow.document;
      introspect(JAM.policy.p9) {
        v285.write('<div class="info">Combined with:</div>\n');
      }
    }
    i$$11++;
    var v630 = titleArray.length;
    v287 = i$$11 < v630;
  }
  openPre();
  writeConsensusSeq(sequenceArray$$1, codonTable$$1);
  var v288 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v288.write("\n");
  }
  writeMultiRevTrans(sequenceArray$$1, codonTable$$1);
  closePre();
  closeWindow();
  return true;
}
function writeConsensusSeq(sequenceArray$$2, codonTable$$2) {
  var consensusSeq = new Array;
  var aminoAcid;
  var firstG;
  var firstA;
  var firstT;
  var firstC;
  var secondG;
  var secondA;
  var secondT;
  var secondC;
  var thirdG;
  var thirdA;
  var thirdT;
  var thirdC;
  var i$$12 = 0;
  var v850 = sequenceArray$$2[0];
  var v631 = v850.length;
  var v308 = i$$12 < v631;
  for (;v308;) {
    firstG = 0;
    firstA = 0;
    firstT = 0;
    firstC = 0;
    secondG = 0;
    secondA = 0;
    secondT = 0;
    secondC = 0;
    thirdG = 0;
    thirdA = 0;
    thirdT = 0;
    thirdC = 0;
    var j$$10 = 0;
    var v632 = sequenceArray$$2.length;
    var v304 = j$$10 < v632;
    for (;v304;) {
      var v979 = sequenceArray$$2[j$$10];
      introspect(JAM.policy.p17) {
        var v851 = v979.charAt(i$$12)
      }
      var v633 = v851 == "-";
      var v853 = !v633;
      if (v853) {
        var v980 = sequenceArray$$2[j$$10];
        introspect(JAM.policy.p17) {
          var v852 = v980.charAt(i$$12)
        }
        v633 = v852 == ".";
      }
      var v303 = v633;
      if (v303) {
        firstG = firstG + .25;
        firstA = firstA + .25;
        firstT = firstT + .25;
        firstC = firstC + .25;
        secondG = secondG + .25;
        secondA = secondA + .25;
        secondT = secondT + .25;
        secondC = secondC + .25;
        thirdG = thirdG + .25;
        thirdA = thirdA + .25;
        thirdT = thirdT + .25;
        thirdC = thirdC + .25;
      } else {
        try {
          var v981 = sequenceArray$$2[j$$10];
          introspect(JAM.policy.p17) {
            var v854 = v981.charAt(i$$12)
          }
          var v634 = v854.toString();
          var v289 = v634.toLowerCase();
          aminoAcid = codonTable$$2[v289];
        } catch (e$$5) {
          var v855 = sequenceArray$$2[j$$10];
          introspect(JAM.policy.p17) {
            var v635 = v855.charAt(i$$12)
          }
          var v290 = "A codon table entry wasn't found for " + v635;
          alert(v290);
          return false;
        }
        var v636 = aminoAcid.baseFreqPosOne;
        var v291 = v636[0];
        firstG = firstG + v291;
        var v637 = aminoAcid.baseFreqPosOne;
        var v292 = v637[1];
        firstA = firstA + v292;
        var v638 = aminoAcid.baseFreqPosOne;
        var v293 = v638[2];
        firstT = firstT + v293;
        var v639 = aminoAcid.baseFreqPosOne;
        var v294 = v639[3];
        firstC = firstC + v294;
        var v640 = aminoAcid.baseFreqPosTwo;
        var v295 = v640[0];
        secondG = secondG + v295;
        var v641 = aminoAcid.baseFreqPosTwo;
        var v296 = v641[1];
        secondA = secondA + v296;
        var v642 = aminoAcid.baseFreqPosTwo;
        var v297 = v642[2];
        secondT = secondT + v297;
        var v643 = aminoAcid.baseFreqPosTwo;
        var v298 = v643[3];
        secondC = secondC + v298;
        var v644 = aminoAcid.baseFreqPosThree;
        var v299 = v644[0];
        thirdG = thirdG + v299;
        var v645 = aminoAcid.baseFreqPosThree;
        var v300 = v645[1];
        thirdA = thirdA + v300;
        var v646 = aminoAcid.baseFreqPosThree;
        var v301 = v646[2];
        thirdT = thirdT + v301;
        var v647 = aminoAcid.baseFreqPosThree;
        var v302 = v647[3];
        thirdC = thirdC + v302;
      }
      j$$10++;
      var v648 = sequenceArray$$2.length;
      v304 = j$$10 < v648;
    }
    var v649 = [firstG, firstA, firstT, firstC];
    var v305 = _getConsensusBase(v649);
    introspect(JAM.policy.p17) {
      consensusSeq.push(v305);
    }
    var v650 = [secondG, secondA, secondT, secondC];
    var v306 = _getConsensusBase(v650);
    introspect(JAM.policy.p17) {
      consensusSeq.push(v306);
    }
    var v651 = [thirdG, thirdA, thirdT, thirdC];
    var v307 = _getConsensusBase(v651);
    introspect(JAM.policy.p17) {
      consensusSeq.push(v307);
    }
    i$$12++;
    var v856 = sequenceArray$$2[0];
    var v652 = v856.length;
    v308 = i$$12 < v652;
  }
  var v309 = outputWindow.document;
  var v857 = "&gt;" + "reverse translation of alignment to a ";
  var v858 = consensusSeq.length;
  var v653 = v857 + v858;
  var v310 = v653 + " base sequence of consensus codons.\n";
  introspect(JAM.policy.p17) {
    v309.write(v310);
  }
  var v311 = outputWindow.document;
  introspect(JAM.policy.p9) {
    var v654 = consensusSeq.join("")
  }
  var v312 = addReturns(v654);
  introspect(JAM.policy.p17) {
    v311.write(v312);
  }
  var v313 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v313.write("\n");
  }
  return true;
}
function writeMultiRevTrans(sequenceArray$$3, codonTable$$3) {
  var markG = "gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg";
  var markA = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
  var markT = "TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT";
  var markC = "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC";
  var markLength = markG.length;
  var aminoAcid$$1;
  var columnSeq;
  var firstG$$1;
  var firstA$$1;
  var firstT$$1;
  var firstC$$1;
  var secondG$$1;
  var secondA$$1;
  var secondT$$1;
  var secondC$$1;
  var thirdG$$1;
  var thirdA$$1;
  var thirdT$$1;
  var thirdC$$1;
  var i$$13 = 0;
  var v859 = sequenceArray$$3[0];
  var v655 = v859.length;
  var v356 = i$$13 < v655;
  for (;v356;) {
    columnSeq = "";
    firstG$$1 = 0;
    firstA$$1 = 0;
    firstT$$1 = 0;
    firstC$$1 = 0;
    secondG$$1 = 0;
    secondA$$1 = 0;
    secondT$$1 = 0;
    secondC$$1 = 0;
    thirdG$$1 = 0;
    thirdA$$1 = 0;
    thirdT$$1 = 0;
    thirdC$$1 = 0;
    var j$$11 = 0;
    var v656 = sequenceArray$$3.length;
    var v330 = j$$11 < v656;
    for (;v330;) {
      var v657 = sequenceArray$$3[j$$11];
      introspect(JAM.policy.p17) {
        var v314 = v657.charAt(i$$13)
      }
      columnSeq = columnSeq + v314;
      var v982 = sequenceArray$$3[j$$11];
      introspect(JAM.policy.p17) {
        var v860 = v982.charAt(i$$13)
      }
      var v658 = v860 == "-";
      var v862 = !v658;
      if (v862) {
        var v983 = sequenceArray$$3[j$$11];
        introspect(JAM.policy.p17) {
          var v861 = v983.charAt(i$$13)
        }
        v658 = v861 == ".";
      }
      var v329 = v658;
      if (v329) {
        firstG$$1 = firstG$$1 + .25;
        firstA$$1 = firstA$$1 + .25;
        firstT$$1 = firstT$$1 + .25;
        firstC$$1 = firstC$$1 + .25;
        secondG$$1 = secondG$$1 + .25;
        secondA$$1 = secondA$$1 + .25;
        secondT$$1 = secondT$$1 + .25;
        secondC$$1 = secondC$$1 + .25;
        thirdG$$1 = thirdG$$1 + .25;
        thirdA$$1 = thirdA$$1 + .25;
        thirdT$$1 = thirdT$$1 + .25;
        thirdC$$1 = thirdC$$1 + .25;
      } else {
        try {
          var v984 = sequenceArray$$3[j$$11];
          introspect(JAM.policy.p17) {
            var v863 = v984.charAt(i$$13)
          }
          var v659 = v863.toString();
          var v315 = v659.toLowerCase();
          aminoAcid$$1 = codonTable$$3[v315];
        } catch (e$$6) {
          var v864 = sequenceArray$$3[j$$11];
          introspect(JAM.policy.p17) {
            var v660 = v864.charAt(i$$13)
          }
          var v316 = "A codon table entry wasn't found for " + v660;
          alert(v316);
          return false;
        }
        var v661 = aminoAcid$$1.baseFreqPosOne;
        var v317 = v661[0];
        firstG$$1 = firstG$$1 + v317;
        var v662 = aminoAcid$$1.baseFreqPosOne;
        var v318 = v662[1];
        firstA$$1 = firstA$$1 + v318;
        var v663 = aminoAcid$$1.baseFreqPosOne;
        var v319 = v663[2];
        firstT$$1 = firstT$$1 + v319;
        var v664 = aminoAcid$$1.baseFreqPosOne;
        var v320 = v664[3];
        firstC$$1 = firstC$$1 + v320;
        var v665 = aminoAcid$$1.baseFreqPosTwo;
        var v321 = v665[0];
        secondG$$1 = secondG$$1 + v321;
        var v666 = aminoAcid$$1.baseFreqPosTwo;
        var v322 = v666[1];
        secondA$$1 = secondA$$1 + v322;
        var v667 = aminoAcid$$1.baseFreqPosTwo;
        var v323 = v667[2];
        secondT$$1 = secondT$$1 + v323;
        var v668 = aminoAcid$$1.baseFreqPosTwo;
        var v324 = v668[3];
        secondC$$1 = secondC$$1 + v324;
        var v669 = aminoAcid$$1.baseFreqPosThree;
        var v325 = v669[0];
        thirdG$$1 = thirdG$$1 + v325;
        var v670 = aminoAcid$$1.baseFreqPosThree;
        var v326 = v670[1];
        thirdA$$1 = thirdA$$1 + v326;
        var v671 = aminoAcid$$1.baseFreqPosThree;
        var v327 = v671[2];
        thirdT$$1 = thirdT$$1 + v327;
        var v672 = aminoAcid$$1.baseFreqPosThree;
        var v328 = v672[3];
        thirdC$$1 = thirdC$$1 + v328;
      }
      j$$11++;
      var v673 = sequenceArray$$3.length;
      v330 = j$$11 < v673;
    }
    var v674 = markLength * firstG$$1;
    var v675 = sequenceArray$$3.length;
    var v331 = v674 / v675;
    introspect(JAM.policy.p15) {
      firstG$$1 = Math.round(v331);
    }
    var v676 = markLength * firstA$$1;
    var v677 = sequenceArray$$3.length;
    var v332 = v676 / v677;
    introspect(JAM.policy.p15) {
      firstA$$1 = Math.round(v332);
    }
    var v678 = markLength * firstT$$1;
    var v679 = sequenceArray$$3.length;
    var v333 = v678 / v679;
    introspect(JAM.policy.p15) {
      firstT$$1 = Math.round(v333);
    }
    var v680 = markLength * firstC$$1;
    var v681 = sequenceArray$$3.length;
    var v334 = v680 / v681;
    introspect(JAM.policy.p15) {
      firstC$$1 = Math.round(v334);
    }
    var v682 = markLength * secondG$$1;
    var v683 = sequenceArray$$3.length;
    var v335 = v682 / v683;
    introspect(JAM.policy.p15) {
      secondG$$1 = Math.round(v335);
    }
    var v684 = markLength * secondA$$1;
    var v685 = sequenceArray$$3.length;
    var v336 = v684 / v685;
    introspect(JAM.policy.p15) {
      secondA$$1 = Math.round(v336);
    }
    var v686 = markLength * secondT$$1;
    var v687 = sequenceArray$$3.length;
    var v337 = v686 / v687;
    introspect(JAM.policy.p15) {
      secondT$$1 = Math.round(v337);
    }
    var v688 = markLength * secondC$$1;
    var v689 = sequenceArray$$3.length;
    var v338 = v688 / v689;
    introspect(JAM.policy.p15) {
      secondC$$1 = Math.round(v338);
    }
    var v690 = markLength * thirdG$$1;
    var v691 = sequenceArray$$3.length;
    var v339 = v690 / v691;
    introspect(JAM.policy.p15) {
      thirdG$$1 = Math.round(v339);
    }
    var v692 = markLength * thirdA$$1;
    var v693 = sequenceArray$$3.length;
    var v340 = v692 / v693;
    introspect(JAM.policy.p15) {
      thirdA$$1 = Math.round(v340);
    }
    var v694 = markLength * thirdT$$1;
    var v695 = sequenceArray$$3.length;
    var v341 = v694 / v695;
    introspect(JAM.policy.p15) {
      thirdT$$1 = Math.round(v341);
    }
    var v696 = markLength * thirdC$$1;
    var v697 = sequenceArray$$3.length;
    var v342 = v696 / v697;
    introspect(JAM.policy.p15) {
      thirdC$$1 = Math.round(v342);
    }
    var v343 = outputWindow.document;
    var v1094 = i$$13 + 1;
    var v1056 = "<b>" + v1094;
    var v985 = v1056 + "_";
    var v865 = v985 + columnSeq;
    var v698 = v865 + "_";
    var v344 = v698 + "first</b>\n";
    introspect(JAM.policy.p17) {
      v343.write(v344);
    }
    var v345 = outputWindow.document;
    introspect(JAM.policy.p13) {
      var v1244 = markG.substring(0, firstG$$1)
    }
    var v1238 = "g" + v1244;
    var v1232 = v1238 + " ";
    var v1239 = firstG$$1 / markLength;
    introspect(JAM.policy.p10) {
      var v1233 = v1239.toFixed(2)
    }
    var v1229 = v1232 + v1233;
    var v1225 = v1229 + "\n";
    var v1217 = v1225 + "a";
    introspect(JAM.policy.p13) {
      var v1218 = markA.substring(0, firstA$$1)
    }
    var v1207 = v1217 + v1218;
    var v1197 = v1207 + " ";
    var v1208 = firstA$$1 / markLength;
    introspect(JAM.policy.p10) {
      var v1198 = v1208.toFixed(2)
    }
    var v1190 = v1197 + v1198;
    var v1180 = v1190 + "\n";
    var v1166 = v1180 + "T";
    introspect(JAM.policy.p13) {
      var v1167 = markT.substring(0, firstT$$1)
    }
    var v1150 = v1166 + v1167;
    var v1132 = v1150 + " ";
    var v1151 = firstT$$1 / markLength;
    introspect(JAM.policy.p10) {
      var v1133 = v1151.toFixed(2)
    }
    var v1115 = v1132 + v1133;
    var v1095 = v1115 + "\n";
    var v1057 = v1095 + "C";
    introspect(JAM.policy.p13) {
      var v1058 = markC.substring(0, firstC$$1)
    }
    var v986 = v1057 + v1058;
    var v866 = v986 + " ";
    var v987 = firstC$$1 / markLength;
    introspect(JAM.policy.p10) {
      var v867 = v987.toFixed(2)
    }
    var v699 = v866 + v867;
    var v346 = v699 + "\n";
    introspect(JAM.policy.p17) {
      v345.write(v346);
    }
    var v347 = outputWindow.document;
    var v1096 = i$$13 + 1;
    var v1059 = "<b>" + v1096;
    var v988 = v1059 + "_";
    var v868 = v988 + columnSeq;
    var v700 = v868 + "_";
    var v348 = v700 + "second</b>\n";
    introspect(JAM.policy.p17) {
      v347.write(v348);
    }
    var v349 = outputWindow.document;
    introspect(JAM.policy.p13) {
      var v1245 = markG.substring(0, secondG$$1)
    }
    var v1240 = "g" + v1245;
    var v1234 = v1240 + " ";
    var v1241 = secondG$$1 / markLength;
    introspect(JAM.policy.p10) {
      var v1235 = v1241.toFixed(2)
    }
    var v1230 = v1234 + v1235;
    var v1226 = v1230 + "\n";
    var v1219 = v1226 + "a";
    introspect(JAM.policy.p13) {
      var v1220 = markA.substring(0, secondA$$1)
    }
    var v1209 = v1219 + v1220;
    var v1199 = v1209 + " ";
    var v1210 = secondA$$1 / markLength;
    introspect(JAM.policy.p10) {
      var v1200 = v1210.toFixed(2)
    }
    var v1191 = v1199 + v1200;
    var v1181 = v1191 + "\n";
    var v1168 = v1181 + "T";
    introspect(JAM.policy.p13) {
      var v1169 = markT.substring(0, secondT$$1)
    }
    var v1152 = v1168 + v1169;
    var v1134 = v1152 + " ";
    var v1153 = secondT$$1 / markLength;
    introspect(JAM.policy.p10) {
      var v1135 = v1153.toFixed(2)
    }
    var v1116 = v1134 + v1135;
    var v1097 = v1116 + "\n";
    var v1060 = v1097 + "C";
    introspect(JAM.policy.p13) {
      var v1061 = markC.substring(0, secondC$$1)
    }
    var v989 = v1060 + v1061;
    var v869 = v989 + " ";
    var v990 = secondC$$1 / markLength;
    introspect(JAM.policy.p10) {
      var v870 = v990.toFixed(2)
    }
    var v701 = v869 + v870;
    var v350 = v701 + "\n";
    introspect(JAM.policy.p17) {
      v349.write(v350);
    }
    var v351 = outputWindow.document;
    var v1098 = i$$13 + 1;
    var v1062 = "<b>" + v1098;
    var v991 = v1062 + "_";
    var v871 = v991 + columnSeq;
    var v702 = v871 + "_";
    var v352 = v702 + "third</b>\n";
    introspect(JAM.policy.p17) {
      v351.write(v352);
    }
    var v353 = outputWindow.document;
    introspect(JAM.policy.p13) {
      var v1246 = markG.substring(0, thirdG$$1)
    }
    var v1242 = "g" + v1246;
    var v1236 = v1242 + " ";
    var v1243 = thirdG$$1 / markLength;
    introspect(JAM.policy.p10) {
      var v1237 = v1243.toFixed(2)
    }
    var v1231 = v1236 + v1237;
    var v1227 = v1231 + "\n";
    var v1221 = v1227 + "a";
    introspect(JAM.policy.p13) {
      var v1222 = markA.substring(0, thirdA$$1)
    }
    var v1211 = v1221 + v1222;
    var v1201 = v1211 + " ";
    var v1212 = thirdA$$1 / markLength;
    introspect(JAM.policy.p10) {
      var v1202 = v1212.toFixed(2)
    }
    var v1192 = v1201 + v1202;
    var v1182 = v1192 + "\n";
    var v1170 = v1182 + "T";
    introspect(JAM.policy.p13) {
      var v1171 = markT.substring(0, thirdT$$1)
    }
    var v1154 = v1170 + v1171;
    var v1136 = v1154 + " ";
    var v1155 = thirdT$$1 / markLength;
    introspect(JAM.policy.p10) {
      var v1137 = v1155.toFixed(2)
    }
    var v1117 = v1136 + v1137;
    var v1099 = v1117 + "\n";
    var v1063 = v1099 + "C";
    introspect(JAM.policy.p13) {
      var v1064 = markC.substring(0, thirdC$$1)
    }
    var v992 = v1063 + v1064;
    var v872 = v992 + " ";
    var v993 = thirdC$$1 / markLength;
    introspect(JAM.policy.p10) {
      var v873 = v993.toFixed(2)
    }
    var v703 = v872 + v873;
    var v354 = v703 + "\n";
    introspect(JAM.policy.p17) {
      v353.write(v354);
    }
    var v355 = outputWindow.document;
    introspect(JAM.policy.p9) {
      v355.write("\n");
    }
    i$$13++;
    var v874 = sequenceArray$$3[0];
    var v704 = v874.length;
    v356 = i$$13 < v704;
  }
  return true;
}
function makeCodonTable(gcgTable) {
  introspect(JAM.policy.p16) {
    gcgTable = gcgTable.replace(/[^\.]*\.\./, "");
  }
  introspect(JAM.policy.p15) {
    var tableArray = gcgTable.split(/[\f\n\r]/)
  }
  var re$$3 = /(\w+)\s+(\w+)\s+(\S+)\s+(\S+)\s+(\S+)/g;
  var matchArray$$2;
  var codonTable$$4 = new CodonTable;
  var i$$14 = 0;
  var v705 = tableArray.length;
  var v361 = i$$14 < v705;
  for (;v361;) {
    var v706 = tableArray[i$$14];
    introspect(JAM.policy.p17) {
      var v360 = matchArray$$2 = re$$3.exec(v706)
    }
    for (;v360;) {
      try {
        var v875 = matchArray$$2[1];
        var v707 = v875.toLowerCase();
        var v357 = codonTable$$4[v707];
        var v708 = matchArray$$2[2];
        var v876 = matchArray$$2[3];
        var v709 = parseFloat(v876);
        var v877 = matchArray$$2[4];
        var v710 = parseFloat(v877);
        var v878 = matchArray$$2[5];
        var v711 = parseFloat(v878);
        var v358 = new Codon(v708, v709, v710, v711);
        introspect(JAM.policy.p17) {
          v357.addCodon(v358);
        }
      } catch (e$$7) {
        var v1172 = matchArray$$2[1];
        var v1156 = "There is a problem with a line of the codon table: " + v1172;
        var v1138 = v1156 + " ";
        var v1139 = matchArray$$2[2];
        var v1118 = v1138 + v1139;
        var v1100 = v1118 + " ";
        var v1101 = matchArray$$2[3];
        var v1065 = v1100 + v1101;
        var v994 = v1065 + " ";
        var v995 = matchArray$$2[4];
        var v879 = v994 + v995;
        var v712 = v879 + " ";
        var v713 = matchArray$$2[4];
        var v359 = v712 + v713;
        alert(v359);
        return false;
      }
      var v714 = tableArray[i$$14];
      introspect(JAM.policy.p17) {
        v360 = matchArray$$2 = re$$3.exec(v714);
      }
    }
    i$$14++;
    var v715 = tableArray.length;
    v361 = i$$14 < v715;
  }
  var v362 = codonTable$$4.a;
  v362.determineBaseFreq();
  var v363 = codonTable$$4.c;
  v363.determineBaseFreq();
  var v364 = codonTable$$4.d;
  v364.determineBaseFreq();
  var v365 = codonTable$$4.e;
  v365.determineBaseFreq();
  var v366 = codonTable$$4.f;
  v366.determineBaseFreq();
  var v367 = codonTable$$4.g;
  v367.determineBaseFreq();
  var v368 = codonTable$$4.h;
  v368.determineBaseFreq();
  var v369 = codonTable$$4.i;
  v369.determineBaseFreq();
  var v370 = codonTable$$4.k;
  v370.determineBaseFreq();
  var v371 = codonTable$$4.l;
  v371.determineBaseFreq();
  var v372 = codonTable$$4.m;
  v372.determineBaseFreq();
  var v373 = codonTable$$4.n;
  v373.determineBaseFreq();
  var v374 = codonTable$$4.p;
  v374.determineBaseFreq();
  var v375 = codonTable$$4.q;
  v375.determineBaseFreq();
  var v376 = codonTable$$4.r;
  v376.determineBaseFreq();
  var v377 = codonTable$$4.s;
  v377.determineBaseFreq();
  var v378 = codonTable$$4.t;
  v378.determineBaseFreq();
  var v379 = codonTable$$4.v;
  v379.determineBaseFreq();
  var v380 = codonTable$$4.w;
  v380.determineBaseFreq();
  var v381 = codonTable$$4.y;
  v381.determineBaseFreq();
  var v382 = codonTable$$4.z;
  v382.determineBaseFreq();
  return codonTable$$4;
}
function CodonTable() {
  var v1258 = new AminoAcid;
  this.a = v1258;
  var v1259 = new AminoAcid;
  this.c = v1259;
  var v1260 = new AminoAcid;
  this.d = v1260;
  var v1261 = new AminoAcid;
  this.e = v1261;
  var v1262 = new AminoAcid;
  this.f = v1262;
  var v1263 = new AminoAcid;
  this.g = v1263;
  var v1264 = new AminoAcid;
  this.h = v1264;
  var v1265 = new AminoAcid;
  this.i = v1265;
  var v1266 = new AminoAcid;
  this.k = v1266;
  var v1267 = new AminoAcid;
  this.l = v1267;
  var v1268 = new AminoAcid;
  this.m = v1268;
  var v1269 = new AminoAcid;
  this.n = v1269;
  var v1270 = new AminoAcid;
  this.p = v1270;
  var v1271 = new AminoAcid;
  this.q = v1271;
  var v1272 = new AminoAcid;
  this.r = v1272;
  var v1273 = new AminoAcid;
  this.s = v1273;
  var v1274 = new AminoAcid;
  this.t = v1274;
  var v1275 = new AminoAcid;
  this.v = v1275;
  var v1276 = new AminoAcid;
  this.w = v1276;
  var v1277 = new AminoAcid;
  this.y = v1277;
  var v1278 = new AminoAcid;
  this.z = v1278;
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
  return;
}
function addCodon(codon$$1) {
  var v383 = this.codons;
  introspect(JAM.policy.p17) {
    v383.push(codon$$1);
  }
  return;
}
function determineBaseFreq() {
  this.fixFraction();
  var i$$15 = 0;
  var v880 = this.codons;
  var v716 = v880.length;
  var v408 = i$$15 < v716;
  for (;v408;) {
    var v1066 = this.codons;
    var v996 = v1066[i$$15];
    var v881 = v996.sequence;
    introspect(JAM.policy.p10) {
      var v717 = v881.charAt(0)
    }
    var v391 = v717 == "g";
    if (v391) {
      var v384 = this.baseFreqPosOne;
      var v882 = this.baseFreqPosOne;
      var v718 = v882[0];
      var v997 = this.codons;
      var v883 = v997[i$$15];
      var v719 = v883.fraction;
      v384[0] = v718 + v719;
    } else {
      var v1067 = this.codons;
      var v998 = v1067[i$$15];
      var v884 = v998.sequence;
      introspect(JAM.policy.p10) {
        var v720 = v884.charAt(0)
      }
      var v390 = v720 == "a";
      if (v390) {
        var v385 = this.baseFreqPosOne;
        var v885 = this.baseFreqPosOne;
        var v721 = v885[1];
        var v999 = this.codons;
        var v886 = v999[i$$15];
        var v722 = v886.fraction;
        v385[1] = v721 + v722;
      } else {
        var v1068 = this.codons;
        var v1000 = v1068[i$$15];
        var v887 = v1000.sequence;
        introspect(JAM.policy.p10) {
          var v723 = v887.charAt(0)
        }
        var v389 = v723 == "t";
        if (v389) {
          var v386 = this.baseFreqPosOne;
          var v888 = this.baseFreqPosOne;
          var v724 = v888[2];
          var v1001 = this.codons;
          var v889 = v1001[i$$15];
          var v725 = v889.fraction;
          v386[2] = v724 + v725;
        } else {
          var v1069 = this.codons;
          var v1002 = v1069[i$$15];
          var v890 = v1002.sequence;
          introspect(JAM.policy.p10) {
            var v726 = v890.charAt(0)
          }
          var v388 = v726 == "c";
          if (v388) {
            var v387 = this.baseFreqPosOne;
            var v891 = this.baseFreqPosOne;
            var v727 = v891[3];
            var v1003 = this.codons;
            var v892 = v1003[i$$15];
            var v728 = v892.fraction;
            v387[3] = v727 + v728;
          }
        }
      }
    }
    var v1070 = this.codons;
    var v1004 = v1070[i$$15];
    var v893 = v1004.sequence;
    introspect(JAM.policy.p10) {
      var v729 = v893.charAt(1)
    }
    var v399 = v729 == "g";
    if (v399) {
      var v392 = this.baseFreqPosTwo;
      var v894 = this.baseFreqPosTwo;
      var v730 = v894[0];
      var v1005 = this.codons;
      var v895 = v1005[i$$15];
      var v731 = v895.fraction;
      v392[0] = v730 + v731;
    } else {
      var v1071 = this.codons;
      var v1006 = v1071[i$$15];
      var v896 = v1006.sequence;
      introspect(JAM.policy.p10) {
        var v732 = v896.charAt(1)
      }
      var v398 = v732 == "a";
      if (v398) {
        var v393 = this.baseFreqPosTwo;
        var v897 = this.baseFreqPosTwo;
        var v733 = v897[1];
        var v1007 = this.codons;
        var v898 = v1007[i$$15];
        var v734 = v898.fraction;
        v393[1] = v733 + v734;
      } else {
        var v1072 = this.codons;
        var v1008 = v1072[i$$15];
        var v899 = v1008.sequence;
        introspect(JAM.policy.p10) {
          var v735 = v899.charAt(1)
        }
        var v397 = v735 == "t";
        if (v397) {
          var v394 = this.baseFreqPosTwo;
          var v900 = this.baseFreqPosTwo;
          var v736 = v900[2];
          var v1009 = this.codons;
          var v901 = v1009[i$$15];
          var v737 = v901.fraction;
          v394[2] = v736 + v737;
        } else {
          var v1073 = this.codons;
          var v1010 = v1073[i$$15];
          var v902 = v1010.sequence;
          introspect(JAM.policy.p10) {
            var v738 = v902.charAt(1)
          }
          var v396 = v738 == "c";
          if (v396) {
            var v395 = this.baseFreqPosTwo;
            var v903 = this.baseFreqPosTwo;
            var v739 = v903[3];
            var v1011 = this.codons;
            var v904 = v1011[i$$15];
            var v740 = v904.fraction;
            v395[3] = v739 + v740;
          }
        }
      }
    }
    var v1074 = this.codons;
    var v1012 = v1074[i$$15];
    var v905 = v1012.sequence;
    introspect(JAM.policy.p10) {
      var v741 = v905.charAt(2)
    }
    var v407 = v741 == "g";
    if (v407) {
      var v400 = this.baseFreqPosThree;
      var v906 = this.baseFreqPosThree;
      var v742 = v906[0];
      var v1013 = this.codons;
      var v907 = v1013[i$$15];
      var v743 = v907.fraction;
      v400[0] = v742 + v743;
    } else {
      var v1075 = this.codons;
      var v1014 = v1075[i$$15];
      var v908 = v1014.sequence;
      introspect(JAM.policy.p10) {
        var v744 = v908.charAt(2)
      }
      var v406 = v744 == "a";
      if (v406) {
        var v401 = this.baseFreqPosThree;
        var v909 = this.baseFreqPosThree;
        var v745 = v909[1];
        var v1015 = this.codons;
        var v910 = v1015[i$$15];
        var v746 = v910.fraction;
        v401[1] = v745 + v746;
      } else {
        var v1076 = this.codons;
        var v1016 = v1076[i$$15];
        var v911 = v1016.sequence;
        introspect(JAM.policy.p10) {
          var v747 = v911.charAt(2)
        }
        var v405 = v747 == "t";
        if (v405) {
          var v402 = this.baseFreqPosThree;
          var v912 = this.baseFreqPosThree;
          var v748 = v912[2];
          var v1017 = this.codons;
          var v913 = v1017[i$$15];
          var v749 = v913.fraction;
          v402[2] = v748 + v749;
        } else {
          var v1077 = this.codons;
          var v1018 = v1077[i$$15];
          var v914 = v1018.sequence;
          introspect(JAM.policy.p10) {
            var v750 = v914.charAt(2)
          }
          var v404 = v750 == "c";
          if (v404) {
            var v403 = this.baseFreqPosThree;
            var v915 = this.baseFreqPosThree;
            var v751 = v915[3];
            var v1019 = this.codons;
            var v916 = v1019[i$$15];
            var v752 = v916.fraction;
            v403[3] = v751 + v752;
          }
        }
      }
    }
    i$$15++;
    var v917 = this.codons;
    var v753 = v917.length;
    v408 = i$$15 < v753;
  }
  return true;
}
function fixFraction() {
  var perThouTotal = 0;
  var i$$16 = 0;
  var v918 = this.codons;
  var v754 = v918.length;
  var v410 = i$$16 < v754;
  for (;v410;) {
    var v919 = this.codons;
    var v755 = v919[i$$16];
    var v409 = v755.perThou;
    perThouTotal = perThouTotal + v409;
    i$$16++;
    var v920 = this.codons;
    var v756 = v920.length;
    v410 = i$$16 < v756;
  }
  var v411 = perThouTotal == 0;
  if (v411) {
    return false;
  }
  i$$16 = 0;
  var v921 = this.codons;
  var v757 = v921.length;
  var v413 = i$$16 < v757;
  for (;v413;) {
    var v758 = this.codons;
    var v412 = v758[i$$16];
    var v1020 = this.codons;
    var v922 = v1020[i$$16];
    var v759 = v922.perThou;
    v412.fraction = v759 / perThouTotal;
    i$$16++;
    var v923 = this.codons;
    var v760 = v923.length;
    v413 = i$$16 < v760;
  }
  return true;
}
function AminoAcid() {
  var v1279 = new Array;
  this.codons = v1279;
  var v1280 = new Array(0, 0, 0, 0);
  this.baseFreqPosOne = v1280;
  var v1281 = new Array(0, 0, 0, 0);
  this.baseFreqPosTwo = v1281;
  var v1282 = new Array(0, 0, 0, 0);
  this.baseFreqPosThree = v1282;
  return;
}
function Codon(sequence$$18, number, perThou, fraction) {
  var v1283 = sequence$$18.toLowerCase();
  this.sequence = v1283;
  this.number = number;
  this.perThou = perThou;
  this.fraction = fraction;
  return;
}
function _getConsensusBase(baseFreq) {
  var g;
  var a;
  var t;
  var c;
  var v761 = baseFreq[0];
  var v414 = v761 > 0;
  if (v414) {
    g = true;
  }
  var v762 = baseFreq[1];
  var v415 = v762 > 0;
  if (v415) {
    a = true;
  }
  var v763 = baseFreq[2];
  var v416 = v763 > 0;
  if (v416) {
    t = true;
  }
  var v764 = baseFreq[3];
  var v417 = v764 > 0;
  if (v417) {
    c = true;
  }
  var v1021 = !g;
  if (v1021) {
    v1021 = !a;
  }
  var v924 = v1021;
  if (v924) {
    v924 = !c;
  }
  var v765 = v924;
  if (v765) {
    v765 = !t;
  }
  var v418 = v765;
  if (v418) {
    return "n";
  }
  var v925 = g && a;
  if (v925) {
    v925 = c;
  }
  var v766 = v925;
  if (v766) {
    v766 = t;
  }
  var v428 = v766;
  if (v428) {
    return "n";
  } else {
    var v767 = a && c;
    if (v767) {
      v767 = t;
    }
    var v427 = v767;
    if (v427) {
      return "h";
    } else {
      var v768 = a && g;
      if (v768) {
        v768 = t;
      }
      var v426 = v768;
      if (v426) {
        return "d";
      } else {
        var v769 = c && g;
        if (v769) {
          v769 = t;
        }
        var v425 = v769;
        if (v425) {
          return "b";
        } else {
          var v424 = a && c;
          if (v424) {
            return "m";
          } else {
            var v423 = g && t;
            if (v423) {
              return "k";
            } else {
              var v422 = a && t;
              if (v422) {
                return "w";
              } else {
                var v421 = g && c;
                if (v421) {
                  return "s";
                } else {
                  var v420 = c && t;
                  if (v420) {
                    return "y";
                  } else {
                    var v419 = a && g;
                    if (v419) {
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
  return "?";
}
new AminoAcid;
var v429 = AminoAcid.prototype;
v429.addCodon = addCodon;
var v430 = AminoAcid.prototype;
v430.determineBaseFreq = determineBaseFreq;
var v431 = AminoAcid.prototype;
v431.fixFraction = fixFraction;
document.onload = v2;
introspect(JAM.policy.p9) {
  var v432 = document.getElementById("submitbtn")
}
v432.onclick = v3;
introspect(JAM.policy.p9) {
  var v433 = document.getElementById("clearbtn")
}
v433.onclick = v4
