function v4() {
  var v1235 = document.forms;
  var v984 = v1235[0];
  var v566 = v984.elements;
  var v5 = v566[0];
  v5.value = " ";
  var v1236 = document.forms;
  var v985 = v1236[0];
  var v567 = v985.elements;
  var v6 = v567[4];
  v6.value = " ";
  return;
}
function v3() {
  try {
    pairwiseAlignProtein(document);
  } catch (e$$5) {
    var v7 = "The following error was encountered: " + e$$5;
    alert(v7);
  }
  return;
}
function v2() {
  var v568 = document.main_form;
  var v8 = v568.main_submit;
  v8.focus();
  return;
}
function addReturns(sequence) {
  function v0(str$$6, p1, offset$$8, s$$2) {
    return p1 + "\n";
  }
  introspect(JAM.policy.p22) {
    sequence = sequence.replace(/(.{60})/g, v0);
  }
  return sequence;
}
function checkAlign(arrayOfTitles, arrayOfSequences) {
  var v9 = arrayOfSequences[0];
  var lengthOfAlign = v9.length;
  var v569 = arrayOfSequences.length;
  var v10 = v569 < 2;
  if (v10) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v570 = arrayOfTitles.length;
  var v12 = i$$1 < v570;
  for (;v12;) {
    var v1382 = arrayOfTitles[i$$1];
    introspect(JAM.policy.p21) {
      var v1237 = v1382.search(/\S/)
    }
    var v986 = v1237 == -1;
    var v1239 = !v986;
    if (v1239) {
      var v1383 = arrayOfSequences[i$$1];
      introspect(JAM.policy.p21) {
        var v1238 = v1383.search(/\S/)
      }
      v986 = v1238 == -1;
    }
    var v571 = v986;
    var v988 = !v571;
    if (v988) {
      var v1240 = arrayOfSequences[i$$1];
      var v987 = v1240.length;
      v571 = v987 != lengthOfAlign;
    }
    var v11 = v571;
    if (v11) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v572 = arrayOfTitles.length;
    v12 = i$$1 < v572;
  }
  return true;
}
function checkCodonTable(codonTable) {
  introspect(JAM.policy.p21) {
    var v1472 = codonTable.search(/AmAcid/)
  }
  var v1384 = v1472 == -1;
  var v1474 = !v1384;
  if (v1474) {
    introspect(JAM.policy.p21) {
      var v1473 = codonTable.search(/Codon/)
    }
    v1384 = v1473 == -1;
  }
  var v1241 = v1384;
  var v1386 = !v1241;
  if (v1386) {
    introspect(JAM.policy.p21) {
      var v1385 = codonTable.search(/Number/)
    }
    v1241 = v1385 == -1;
  }
  var v989 = v1241;
  var v1243 = !v989;
  if (v1243) {
    introspect(JAM.policy.p21) {
      var v1242 = codonTable.search(/\/1000/)
    }
    v989 = v1242 == -1;
  }
  var v573 = v989;
  var v991 = !v573;
  if (v991) {
    introspect(JAM.policy.p21) {
      var v990 = codonTable.search(/Fraction\s*\.\./)
    }
    v573 = v990 == -1;
  }
  var v13 = v573;
  if (v13) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v992 = formElement.value;
  introspect(JAM.policy.p21) {
    var v574 = v992.search(/\S/)
  }
  var v14 = v574 == -1;
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
  var v575 = arrayOfPatterns.length;
  var v17 = z$$2 < v575;
  for (;v17;) {
    var v993 = arrayOfPatterns[z$$2];
    introspect(JAM.policy.p21) {
      var v576 = v993.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/)
    }
    var v15 = v576 == -1;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v994 = arrayOfPatterns[z$$2];
    var v577 = moreExpressionCheck(v994);
    var v16 = v577 == false;
    if (v16) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v578 = arrayOfPatterns.length;
    v17 = z$$2 < v578;
  }
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v18);
  var v19 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v19);
  var j = 0;
  var v579 = arrayOfPatterns.length;
  var v23 = j < v579;
  for (;v23;) {
    var v995 = arrayOfPatterns[j];
    introspect(JAM.policy.p21) {
      var v580 = v995.match(/\/.+\//)
    }
    var v20 = v580 + "gi";
    var v1593 = eval(v20);
    geneticCodeMatchExp[j] = v1593;
    var v581 = arrayOfPatterns[j];
    introspect(JAM.policy.p21) {
      var v21 = v581.match(/=[a-zA-Z\*]/)
    }
    var v1594 = v21.toString();
    geneticCodeMatchResult[j] = v1594;
    var v22 = geneticCodeMatchResult[j];
    introspect(JAM.policy.p22) {
      var v1595 = v22.replace(/=/g, "")
    }
    geneticCodeMatchResult[j] = v1595;
    j++;
    var v582 = arrayOfPatterns.length;
    v23 = j < v582;
  }
  var i$$2 = 0;
  var v996 = testSequence.length;
  var v583 = v996 - 3;
  var v30 = i$$2 <= v583;
  for (;v30;) {
    var v24 = i$$2 + 3;
    introspect(JAM.policy.p22) {
      codon = testSequence.substring(i$$2, v24);
    }
    j = 0;
    var v584 = geneticCodeMatchExp.length;
    var v28 = j < v584;
    for (;v28;) {
      var v997 = geneticCodeMatchExp[j];
      introspect(JAM.policy.p24) {
        var v585 = codon.search(v997)
      }
      var v27 = v585 != -1;
      if (v27) {
        var v26 = oneMatch == true;
        if (v26) {
          var v586 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v25 = v586 + ".";
          alert(v25);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v587 = geneticCodeMatchExp.length;
      v28 = j < v587;
    }
    var v29 = oneMatch == false;
    if (v29) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v998 = testSequence.length;
    var v588 = v998 - 3;
    v30 = i$$2 <= v588;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v589 = arrayOfPatterns$$1.length;
  var v32 = z$$3 < v589;
  for (;v32;) {
    var v999 = arrayOfPatterns$$1[z$$3];
    introspect(JAM.policy.p21) {
      var v590 = v999.search(/[^acdefghiklmnpqrstvwyz]/i)
    }
    var v31 = v590 != -1;
    if (v31) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v591 = arrayOfPatterns$$1.length;
    v32 = z$$3 < v591;
  }
  var i$$3 = 0;
  var v592 = arrayOfPatterns$$1.length;
  var v36 = i$$3 < v592;
  for (;v36;) {
    var v1000 = arrayOfPatterns$$1[i$$3];
    var v593 = "[" + v1000;
    var v33 = v593 + "]";
    var re = new RegExp(v33, "gi");
    var j$$1 = i$$3 + 1;
    var v594 = arrayOfPatterns$$1.length;
    var v35 = j$$1 < v594;
    for (;v35;) {
      var v1001 = arrayOfPatterns$$1[j$$1];
      introspect(JAM.policy.p24) {
        var v595 = v1001.search(re)
      }
      var v34 = v595 != -1;
      if (v34) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v596 = arrayOfPatterns$$1.length;
      v35 = j$$1 < v596;
    }
    i$$3++;
    var v597 = arrayOfPatterns$$1.length;
    v36 = i$$3 < v597;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v598 = arrayOfPatterns$$2.length;
  var v39 = z$$4 < v598;
  for (;v39;) {
    var v1002 = arrayOfPatterns$$2[z$$4];
    introspect(JAM.policy.p21) {
      var v599 = v1002.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i)
    }
    var v37 = v599 == -1;
    if (v37) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v1003 = arrayOfPatterns$$2[z$$4];
    var v600 = moreExpressionCheck(v1003);
    var v38 = v600 == false;
    if (v38) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v601 = arrayOfPatterns$$2.length;
    v39 = z$$4 < v601;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v1244 = getSequenceFromFasta(text$$7);
  introspect(JAM.policy.p22) {
    var v1004 = v1244.replace(/[^A-Za-z]/g, "")
  }
  var v602 = v1004.length;
  var v41 = v602 > maxInput;
  if (v41) {
    var v603 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v40 = v603 + " characters.";
    alert(v40);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v604 = text$$8.length;
  var v43 = v604 > maxInput$$1;
  if (v43) {
    var v605 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v42 = v605 + " characters.";
    alert(v42);
    return false;
  } else {
    return true;
  }
  return;
}
function complement(dnaSequence) {
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/g/g, "1");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/c/g, "2");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/1/g, "c");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/2/g, "g");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/G/g, "1");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/C/g, "2");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/1/g, "C");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/2/g, "G");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/a/g, "1");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/t/g, "2");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/1/g, "t");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/2/g, "a");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/A/g, "1");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/T/g, "2");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/1/g, "T");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/2/g, "A");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/u/g, "a");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/U/g, "A");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/r/g, "1");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/y/g, "2");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/1/g, "y");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/2/g, "r");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/R/g, "1");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/Y/g, "2");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/1/g, "Y");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/2/g, "R");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/k/g, "1");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/m/g, "2");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/1/g, "m");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/2/g, "k");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/K/g, "1");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/M/g, "2");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/1/g, "M");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/2/g, "K");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/b/g, "1");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/v/g, "2");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/1/g, "v");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/2/g, "b");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/B/g, "1");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/V/g, "2");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/1/g, "V");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/2/g, "B");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/d/g, "1");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/h/g, "2");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/1/g, "h");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/2/g, "d");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/D/g, "1");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/H/g, "2");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/1/g, "H");
  }
  introspect(JAM.policy.p22) {
    dnaSequence = dnaSequence.replace(/2/g, "D");
  }
  return dnaSequence;
}
function closeForm() {
  var v44 = outputWindow.document;
  introspect(JAM.policy.p15) {
    v44.write("</form>");
  }
  return true;
}
function closePre() {
  var v45 = outputWindow.document;
  introspect(JAM.policy.p15) {
    v45.write("</div>");
  }
  var v46 = outputWindow.document;
  introspect(JAM.policy.p15) {
    v46.write("</pre>\n");
  }
  return;
}
function closeTextArea() {
  var v47 = outputWindow.document;
  introspect(JAM.policy.p15) {
    v47.write("</textarea>");
  }
  return true;
}
function closeWindow() {
  var v48 = outputWindow.document;
  introspect(JAM.policy.p15) {
    v48.write("</body>\n</html>\n");
  }
  outputWindow.status = "Done.";
  var v49 = outputWindow.document;
  v49.close();
  return true;
}
function convertDegenerates(sequence$$1) {
  sequence$$1 = sequence$$1.toLowerCase();
  introspect(JAM.policy.p22) {
    sequence$$1 = sequence$$1.replace(/t/g, "[TU]");
  }
  introspect(JAM.policy.p22) {
    sequence$$1 = sequence$$1.replace(/r/g, "[AGR]");
  }
  introspect(JAM.policy.p22) {
    sequence$$1 = sequence$$1.replace(/y/g, "[CTUY]");
  }
  introspect(JAM.policy.p22) {
    sequence$$1 = sequence$$1.replace(/s/g, "[GCS]");
  }
  introspect(JAM.policy.p22) {
    sequence$$1 = sequence$$1.replace(/w/g, "[ATUW]");
  }
  introspect(JAM.policy.p22) {
    sequence$$1 = sequence$$1.replace(/k/g, "[GTUK]");
  }
  introspect(JAM.policy.p22) {
    sequence$$1 = sequence$$1.replace(/m/g, "[ACM]");
  }
  introspect(JAM.policy.p22) {
    sequence$$1 = sequence$$1.replace(/b/g, "[CGTUBSKY]");
  }
  introspect(JAM.policy.p22) {
    sequence$$1 = sequence$$1.replace(/d/g, "[AGTUDRKW]");
  }
  introspect(JAM.policy.p22) {
    sequence$$1 = sequence$$1.replace(/h/g, "[ACTUHMYW]");
  }
  introspect(JAM.policy.p22) {
    sequence$$1 = sequence$$1.replace(/v/g, "[ACGVSMR]");
  }
  introspect(JAM.policy.p22) {
    sequence$$1 = sequence$$1.replace(/n/g, "[ACGTURYSWKMBDHVN]");
  }
  return sequence$$1;
}
function earlyCheckAlign(alignArray) {
  var v606 = alignArray.length;
  var v50 = v606 < 3;
  if (v50) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v607 = alignArray.length;
  var v52 = i$$4 < v607;
  for (;v52;) {
    var v1005 = alignArray[i$$4];
    introspect(JAM.policy.p21) {
      var v608 = v1005.search(/[^\s]+\s/)
    }
    var v51 = v608 == -1;
    if (v51) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v609 = alignArray.length;
    v52 = i$$4 < v609;
  }
  return true;
}
function filterAlignSeq(alignSeq) {
  introspect(JAM.policy.p22) {
    alignSeq = alignSeq.replace(/[^abcdefghiklmnpqrstvwxyz\.\-]/gi, "");
  }
  return alignSeq;
}
function filterFastaTitle(sequenceTitle) {
  introspect(JAM.policy.p22) {
    sequenceTitle = sequenceTitle.replace(/\s{2,}/g, " ");
  }
  introspect(JAM.policy.p22) {
    sequenceTitle = sequenceTitle.replace(/^\s*/g, "");
  }
  introspect(JAM.policy.p22) {
    sequenceTitle = sequenceTitle.replace(/[\f\n\r\t]+$/g, "\n");
  }
  introspect(JAM.policy.p22) {
    return sequenceTitle.replace(/[\<\>]\n/gi, "");
  }
}
function getArrayOfFasta(sequenceData) {
  var arrayOfFasta = new Array;
  var matchArray;
  var re$$1 = /\>[^\>]+/g;
  introspect(JAM.policy.p21) {
    var v610 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v55 = v610 != -1;
  if (v55) {
    introspect(JAM.policy.p24) {
      var v54 = matchArray = re$$1.exec(sequenceData)
    }
    for (;v54;) {
      var v53 = matchArray[0];
      introspect(JAM.policy.p24) {
        arrayOfFasta.push(v53);
      }
      introspect(JAM.policy.p24) {
        v54 = matchArray = re$$1.exec(sequenceData);
      }
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v611 = sequence$$2.length;
  var v56 = "&gt;results for " + v611;
  var stringToReturn = v56 + " residue sequence ";
  introspect(JAM.policy.p21) {
    var v612 = fastaSequenceTitle.search(/[^\s]/)
  }
  var v58 = v612 != -1;
  if (v58) {
    var v613 = stringToReturn + '"';
    var v57 = v613 + fastaSequenceTitle;
    stringToReturn = v57 + '"';
  }
  var v614 = stringToReturn + ' starting "';
  introspect(JAM.policy.p19) {
    var v615 = sequence$$2.substring(0, 10)
  }
  var v59 = v614 + v615;
  stringToReturn = v59 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v616 = sequenceOne.length;
  var v60 = "Search results for " + v616;
  var stringToReturn$$1 = v60 + " residue sequence ";
  introspect(JAM.policy.p21) {
    var v617 = fastaSequenceTitleOne.search(/[^\s]/)
  }
  var v62 = v617 != -1;
  if (v62) {
    var v618 = stringToReturn$$1 + '"';
    var v61 = v618 + fastaSequenceTitleOne;
    stringToReturn$$1 = v61 + '"';
  }
  var v619 = stringToReturn$$1 + ' starting "';
  introspect(JAM.policy.p19) {
    var v620 = sequenceOne.substring(0, 10)
  }
  var v63 = v619 + v620;
  stringToReturn$$1 = v63 + '"\n';
  var v621 = stringToReturn$$1 + "and ";
  var v622 = sequenceTwo.length;
  var v64 = v621 + v622;
  stringToReturn$$1 = v64 + " residue sequence ";
  introspect(JAM.policy.p21) {
    var v623 = fastaSequenceTitleTwo.search(/[^\s]/)
  }
  var v66 = v623 != -1;
  if (v66) {
    var v624 = stringToReturn$$1 + '"';
    var v65 = v624 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v65 + '"';
  }
  var v625 = stringToReturn$$1 + ' starting "';
  introspect(JAM.policy.p19) {
    var v626 = sequenceTwo.substring(0, 10)
  }
  var v67 = v625 + v626;
  stringToReturn$$1 = v67 + '"';
  var v68 = '<div class="info">' + stringToReturn$$1;
  return v68 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v69 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v69);
  var j$$2 = 0;
  var v627 = arrayOfPatterns$$3.length;
  var v71 = j$$2 < v627;
  for (;v71;) {
    var v1006 = arrayOfPatterns$$3[j$$2];
    introspect(JAM.policy.p21) {
      var v628 = v1006.match(/\/.+\//)
    }
    var v70 = v628 + "gi";
    var v1596 = eval(v70);
    geneticCodeMatchExp$$1[j$$2] = v1596;
    j$$2++;
    var v629 = arrayOfPatterns$$3.length;
    v71 = j$$2 < v629;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v72 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v72);
  var j$$3 = 0;
  var v630 = arrayOfPatterns$$4.length;
  var v75 = j$$3 < v630;
  for (;v75;) {
    var v631 = arrayOfPatterns$$4[j$$3];
    introspect(JAM.policy.p21) {
      var v73 = v631.match(/=[a-zA-Z\*]/)
    }
    var v1597 = v73.toString();
    geneticCodeMatchResult$$1[j$$3] = v1597;
    var v74 = geneticCodeMatchResult$$1[j$$3];
    introspect(JAM.policy.p22) {
      var v1598 = v74.replace(/=/g, "")
    }
    geneticCodeMatchResult$$1[j$$3] = v1598;
    j$$3++;
    var v632 = arrayOfPatterns$$4.length;
    v75 = j$$3 < v632;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v633 = sequence$$3.length;
  var v76 = "Results for " + v633;
  var stringToReturn$$2 = v76 + " residue sequence ";
  introspect(JAM.policy.p21) {
    var v634 = fastaSequenceTitle$$1.search(/[^\s]/)
  }
  var v78 = v634 != -1;
  if (v78) {
    var v635 = stringToReturn$$2 + '"';
    var v77 = v635 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v77 + '"';
  }
  var v636 = stringToReturn$$2 + ' starting "';
  introspect(JAM.policy.p19) {
    var v637 = sequence$$3.substring(0, 10)
  }
  var v79 = v636 + v637;
  stringToReturn$$2 = v79 + '"';
  var v80 = '<div class="info">' + stringToReturn$$2;
  return v80 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v1007 = "Results for " + topology;
  var v638 = v1007 + " ";
  var v639 = sequence$$4.length;
  var v81 = v638 + v639;
  var stringToReturn$$3 = v81 + " residue sequence ";
  introspect(JAM.policy.p21) {
    var v640 = fastaSequenceTitle$$2.search(/[^\s]/)
  }
  var v83 = v640 != -1;
  if (v83) {
    var v641 = stringToReturn$$3 + '"';
    var v82 = v641 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v82 + '"';
  }
  var v642 = stringToReturn$$3 + ' starting "';
  introspect(JAM.policy.p19) {
    var v643 = sequence$$4.substring(0, 10)
  }
  var v84 = v642 + v643;
  stringToReturn$$3 = v84 + '"';
  var v85 = '<div class="info">' + stringToReturn$$3;
  return v85 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v644 = sequenceOne$$1.length;
  var v86 = "Alignment results for " + v644;
  var stringToReturn$$4 = v86 + " residue sequence ";
  introspect(JAM.policy.p21) {
    var v645 = fastaSequenceTitleOne$$1.search(/[^\s]/)
  }
  var v88 = v645 != -1;
  if (v88) {
    var v646 = stringToReturn$$4 + '"';
    var v87 = v646 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v87 + '"';
  }
  var v647 = stringToReturn$$4 + ' starting "';
  introspect(JAM.policy.p19) {
    var v648 = sequenceOne$$1.substring(0, 10)
  }
  var v89 = v647 + v648;
  stringToReturn$$4 = v89 + '"\n';
  var v649 = stringToReturn$$4 + "and ";
  var v650 = sequenceTwo$$1.length;
  var v90 = v649 + v650;
  stringToReturn$$4 = v90 + " residue sequence ";
  introspect(JAM.policy.p21) {
    var v651 = fastaSequenceTitleTwo$$1.search(/[^\s]/)
  }
  var v92 = v651 != -1;
  if (v92) {
    var v652 = stringToReturn$$4 + '"';
    var v91 = v652 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v91 + '"';
  }
  var v653 = stringToReturn$$4 + ' starting "';
  introspect(JAM.policy.p19) {
    var v654 = sequenceTwo$$1.substring(0, 10)
  }
  var v93 = v653 + v654;
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
    var v655 = Math.random();
    var v656 = components.length;
    var v95 = v655 * v656;
    introspect(JAM.policy.p21) {
      tempNum = Math.floor(v95);
    }
    tempChar = components[tempNum];
    introspect(JAM.policy.p24) {
      sequenceArray.push(tempChar);
    }
    j$$4++;
    v96 = j$$4 < lengthOut;
  }
  introspect(JAM.policy.p15) {
    return sequenceArray.join("");
  }
}
function getSequenceFromFasta(sequenceRecord) {
  introspect(JAM.policy.p21) {
    var v657 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v97 = v657 != -1;
  if (v97) {
    introspect(JAM.policy.p22) {
      sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "");
    }
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  introspect(JAM.policy.p21) {
    var v658 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v99 = v658 != -1;
  if (v99) {
    introspect(JAM.policy.p22) {
      var v98 = sequenceRecord$$1.match(/\>[^\f\n\r]+[\f\n\r]/, "")
    }
    fastaTitle = v98.toString();
    introspect(JAM.policy.p22) {
      fastaTitle = fastaTitle.replace(/\>|[\f\n\r]/g, "");
    }
    introspect(JAM.policy.p22) {
      fastaTitle = fastaTitle.replace(/\s{2,}/g, " ");
    }
    introspect(JAM.policy.p22) {
      fastaTitle = fastaTitle.replace(/[\<\>]/gi, "");
    }
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  introspect(JAM.policy.p21) {
    var v1571 = expressionToCheck.search(/\[[A-Za-z\|]*\[/)
  }
  var v1564 = v1571 != -1;
  var v1573 = !v1564;
  if (v1573) {
    introspect(JAM.policy.p21) {
      var v1572 = expressionToCheck.search(/\][A-Za-z\|]*\]/)
    }
    v1564 = v1572 != -1;
  }
  var v1554 = v1564;
  var v1566 = !v1554;
  if (v1566) {
    introspect(JAM.policy.p21) {
      var v1565 = expressionToCheck.search(/\[\]/)
    }
    v1554 = v1565 != -1;
  }
  var v1543 = v1554;
  var v1556 = !v1543;
  if (v1556) {
    introspect(JAM.policy.p21) {
      var v1555 = expressionToCheck.search(/\/[A-Za-z\|]*\]/)
    }
    v1543 = v1555 != -1;
  }
  var v1528 = v1543;
  var v1545 = !v1528;
  if (v1545) {
    introspect(JAM.policy.p21) {
      var v1544 = expressionToCheck.search(/\[[A-Za-z\|]*\//)
    }
    v1528 = v1544 != -1;
  }
  var v1507 = v1528;
  var v1530 = !v1507;
  if (v1530) {
    introspect(JAM.policy.p21) {
      var v1529 = expressionToCheck.search(/\|\|/)
    }
    v1507 = v1529 != -1;
  }
  var v1475 = v1507;
  var v1509 = !v1475;
  if (v1509) {
    introspect(JAM.policy.p21) {
      var v1508 = expressionToCheck.search(/\/\|/)
    }
    v1475 = v1508 != -1;
  }
  var v1387 = v1475;
  var v1477 = !v1387;
  if (v1477) {
    introspect(JAM.policy.p21) {
      var v1476 = expressionToCheck.search(/\|\//)
    }
    v1387 = v1476 != -1;
  }
  var v1245 = v1387;
  var v1389 = !v1245;
  if (v1389) {
    introspect(JAM.policy.p21) {
      var v1388 = expressionToCheck.search(/\[.\]/)
    }
    v1245 = v1388 != -1;
  }
  var v1008 = v1245;
  var v1247 = !v1008;
  if (v1247) {
    introspect(JAM.policy.p21) {
      var v1246 = expressionToCheck.search(/\</)
    }
    v1008 = v1246 != -1;
  }
  var v659 = v1008;
  var v1010 = !v659;
  if (v1010) {
    introspect(JAM.policy.p21) {
      var v1009 = expressionToCheck.search(/\>/)
    }
    v659 = v1009 != -1;
  }
  var v100 = v659;
  if (v100) {
    return false;
  }
  return true;
}
function openForm() {
  var v101 = outputWindow.document;
  introspect(JAM.policy.p15) {
    v101.write('<form action="">\n');
  }
  return true;
}
function openPre() {
  var v102 = outputWindow.document;
  introspect(JAM.policy.p15) {
    v102.write("<pre>");
  }
  var v103 = outputWindow.document;
  introspect(JAM.policy.p15) {
    v103.write('<div class="pre">');
  }
  return;
}
function openTextArea() {
  var v104 = outputWindow.document;
  introspect(JAM.policy.p15) {
    v104.write('<br /><textarea rows="6" cols="61">\n');
  }
  return true;
}
function openWindow(title$$5) {
  _openWindow(title$$5, true);
  return;
}
function _openWindow(title$$6, isColor) {
  introspect(JAM.policy.p20) {
    outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  }
  outputWindow.focus();
  var v105 = outputWindow.document;
  var v1248 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v1011 = v1248 + "<head>\n";
  var v660 = v1011 + "<title>Sequence Manipulation Suite</title>\n";
  var v106 = v660 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  introspect(JAM.policy.p24) {
    v105.write(v106);
  }
  if (isColor) {
    var v107 = outputWindow.document;
    var v1586 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1582 = v1586 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1578 = v1582 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1574 = v1578 + "div.info {font-weight: bold}\n";
    var v1567 = v1574 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1557 = v1567 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v1546 = v1557 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v1531 = v1546 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1510 = v1531 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v1478 = v1510 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v1390 = v1478 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v1249 = v1390 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v1012 = v1249 + "td.many {color: #000000}\n";
    var v661 = v1012 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v108 = v661 + "</style>\n";
    introspect(JAM.policy.p24) {
      v107.write(v108);
    }
  } else {
    var v109 = outputWindow.document;
    var v1590 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1587 = v1590 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1583 = v1587 + "div.title {display: none}\n";
    var v1579 = v1583 + "div.info {font-weight: bold}\n";
    var v1575 = v1579 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1568 = v1575 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1558 = v1568 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v1547 = v1558 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1532 = v1547 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1511 = v1532 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1479 = v1511 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v1391 = v1479 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1250 = v1391 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v1013 = v1250 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v662 = v1013 + "img {display: none}\n";
    var v110 = v662 + "</style>\n";
    introspect(JAM.policy.p24) {
      v109.write(v110);
    }
  }
  var v111 = outputWindow.document;
  var v1251 = "</head>\n" + '<body class="main">\n';
  var v1014 = v1251 + '<div class="title">';
  var v663 = v1014 + title$$6;
  var v112 = v663 + " results</div>\n";
  introspect(JAM.policy.p24) {
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
  introspect(JAM.policy.p20) {
    outputWindow = window.open("", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400");
  }
  outputWindow.focus();
  var v113 = outputWindow.document;
  var v1252 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v1015 = v1252 + "<head>\n";
  var v664 = v1015 + "<title>Sequence Manipulation Suite</title>\n";
  var v114 = v664 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  introspect(JAM.policy.p24) {
    v113.write(v114);
  }
  if (isBackground) {
    var v115 = outputWindow.document;
    var v1588 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1584 = v1588 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1580 = v1584 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1576 = v1580 + "div.info {font-weight: bold}\n";
    var v1569 = v1576 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v1559 = v1569 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v1548 = v1559 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v1533 = v1548 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v1512 = v1533 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v1480 = v1512 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v1392 = v1480 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v1253 = v1392 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v1016 = v1253 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v665 = v1016 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v116 = v665 + "</style>\n";
    introspect(JAM.policy.p24) {
      v115.write(v116);
    }
  } else {
    var v117 = outputWindow.document;
    var v1592 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1591 = v1592 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1589 = v1591 + "div.title {display: none}\n";
    var v1585 = v1589 + "div.info {font-weight: bold}\n";
    var v1581 = v1585 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1577 = v1581 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v1570 = v1577 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v1560 = v1570 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v1549 = v1560 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v1534 = v1549 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v1513 = v1534 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v1481 = v1513 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v1393 = v1481 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v1254 = v1393 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v1017 = v1254 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v666 = v1017 + "img {display: none}\n";
    var v118 = v666 + "</style>\n";
    introspect(JAM.policy.p24) {
      v117.write(v118);
    }
  }
  var v119 = outputWindow.document;
  var v1255 = "</head>\n" + '<body class="main">\n';
  var v1018 = v1255 + '<div class="title">';
  var v667 = v1018 + title$$8;
  var v120 = v667 + " results</div>\n";
  introspect(JAM.policy.p24) {
    v119.write(v120);
  }
  outputWindow.status = "Please Wait.";
  return true;
}
function removeFormatting(sequence$$5) {
  introspect(JAM.policy.p22) {
    return sequence$$5.replace(/[\d\s]/g, "");
  }
}
function removeNonDna(sequence$$6) {
  introspect(JAM.policy.p22) {
    return sequence$$6.replace(/[^gatucryswkmbdhvnxGATUCRYSWKMBDHVNX]/g, "");
  }
}
function removeNonDnaStrict(sequence$$7) {
  introspect(JAM.policy.p22) {
    return sequence$$7.replace(/[^gatucGATUC]/g, "");
  }
}
function removeNonProtein(sequence$$8) {
  introspect(JAM.policy.p22) {
    return sequence$$8.replace(/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, "");
  }
}
function removeNonProteinStrict(sequence$$9) {
  introspect(JAM.policy.p22) {
    return sequence$$9.replace(/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, "");
  }
}
function removeNonProteinAllowDegen(sequence$$10) {
  introspect(JAM.policy.p22) {
    return sequence$$10.replace(/[^ABCDEFGHIKLMNPQRSTVWYXZabcdefghiklmnpqrstvwyxz\*]/g, "");
  }
}
function removeNonProteinAllowX(sequence$$11) {
  introspect(JAM.policy.p22) {
    return sequence$$11.replace(/[^ACDEFGHIKLMNPQRSTVWYZXacdefghiklmnpqrstvwyzx\*]/g, "");
  }
}
function removeWhiteSpace(text$$9) {
  introspect(JAM.policy.p22) {
    return text$$9.replace(/\s/g, "");
  }
}
function removeNonLetters(sequence$$12) {
  introspect(JAM.policy.p22) {
    return sequence$$12.replace(/[^A-Z]/gi, "");
  }
}
function reverse(dnaSequence$$1) {
  var tempDnaArray = new Array;
  introspect(JAM.policy.p21) {
    var v668 = dnaSequence$$1.search(/./)
  }
  var v121 = v668 != -1;
  if (v121) {
    introspect(JAM.policy.p21) {
      tempDnaArray = dnaSequence$$1.match(/./g);
    }
    tempDnaArray = tempDnaArray.reverse();
    introspect(JAM.policy.p15) {
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
  introspect(JAM.policy.p24) {
    testArray.push(testString);
  }
  var v669 = testArray[0];
  var v125 = v669 != testString;
  if (v125) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  introspect(JAM.policy.p24) {
    var v670 = testString.search(re$$2)
  }
  var v126 = v670 == -1;
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
  introspect(JAM.policy.p22) {
    testString = testString.replace(/(\d)/g, v1);
  }
  var v128 = testString != "1X2X3X";
  if (v128) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false;
  }
  var testNum = 2489.8237;
  introspect(JAM.policy.p16) {
    var v671 = testNum.toFixed(3)
  }
  var v129 = v671 != 2489.824;
  if (v129) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  introspect(JAM.policy.p16) {
    var v672 = testNum.toPrecision(5)
  }
  var v130 = v672 != 2489.8;
  if (v130) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  introspect(JAM.policy.p21) {
    var v673 = theNumber$$1.search(/\d/)
  }
  var v131 = v673 == -1;
  if (v131) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  introspect(JAM.policy.p21) {
    var v1394 = emblFile.search(/ID/)
  }
  var v1256 = v1394 == -1;
  var v1396 = !v1256;
  if (v1396) {
    introspect(JAM.policy.p21) {
      var v1395 = emblFile.search(/AC/)
    }
    v1256 = v1395 == -1;
  }
  var v1019 = v1256;
  var v1258 = !v1019;
  if (v1258) {
    introspect(JAM.policy.p21) {
      var v1257 = emblFile.search(/DE/)
    }
    v1019 = v1257 == -1;
  }
  var v674 = v1019;
  var v1021 = !v674;
  if (v1021) {
    introspect(JAM.policy.p21) {
      var v1020 = emblFile.search(/SQ/)
    }
    v674 = v1020 == -1;
  }
  var v132 = v674;
  if (v132) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  introspect(JAM.policy.p21) {
    var v675 = theNumber$$2.search(/\d/)
  }
  var v133 = v675 == -1;
  if (v133) {
    alert("Please enter a number.");
    return false;
  }
  var v135 = theNumber$$2 > maxInput$$2;
  if (v135) {
    var v676 = "Please enter a number less than or equal to " + maxInput$$2;
    var v134 = v676 + ".";
    alert(v134);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  introspect(JAM.policy.p21) {
    var v677 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i)
  }
  var v136 = v677 != -1;
  if (v136) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  introspect(JAM.policy.p21) {
    var v678 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i)
  }
  var v137 = v678 != -1;
  if (v137) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  introspect(JAM.policy.p21) {
    var v1397 = genBankFile.search(/LOCUS/)
  }
  var v1259 = v1397 == -1;
  var v1399 = !v1259;
  if (v1399) {
    introspect(JAM.policy.p21) {
      var v1398 = genBankFile.search(/DEFINITION/)
    }
    v1259 = v1398 == -1;
  }
  var v1022 = v1259;
  var v1261 = !v1022;
  if (v1261) {
    introspect(JAM.policy.p21) {
      var v1260 = genBankFile.search(/ACCESSION/)
    }
    v1022 = v1260 == -1;
  }
  var v679 = v1022;
  var v1024 = !v679;
  if (v1024) {
    introspect(JAM.policy.p21) {
      var v1023 = genBankFile.search(/ORIGIN/)
    }
    v679 = v1023 == -1;
  }
  var v138 = v679;
  if (v138) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  introspect(JAM.policy.p21) {
    var v1400 = genBankFile$$1.search(/LOCUS/)
  }
  var v1262 = v1400 == -1;
  var v1402 = !v1262;
  if (v1402) {
    introspect(JAM.policy.p21) {
      var v1401 = genBankFile$$1.search(/DEFINITION/)
    }
    v1262 = v1401 == -1;
  }
  var v1025 = v1262;
  var v1264 = !v1025;
  if (v1264) {
    introspect(JAM.policy.p21) {
      var v1263 = genBankFile$$1.search(/ACCESSION/)
    }
    v1025 = v1263 == -1;
  }
  var v680 = v1025;
  var v1027 = !v680;
  if (v1027) {
    introspect(JAM.policy.p21) {
      var v1026 = genBankFile$$1.search(/ORIGIN/)
    }
    v680 = v1026 == -1;
  }
  var v139 = v680;
  if (v139) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  introspect(JAM.policy.p21) {
    var v681 = genBankFile$$1.search(/FEATURES {13}/)
  }
  var v140 = v681 == -1;
  if (v140) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  introspect(JAM.policy.p21) {
    var v1403 = emblFile$$1.search(/ID/)
  }
  var v1265 = v1403 == -1;
  var v1405 = !v1265;
  if (v1405) {
    introspect(JAM.policy.p21) {
      var v1404 = emblFile$$1.search(/AC/)
    }
    v1265 = v1404 == -1;
  }
  var v1028 = v1265;
  var v1267 = !v1028;
  if (v1267) {
    introspect(JAM.policy.p21) {
      var v1266 = emblFile$$1.search(/DE/)
    }
    v1028 = v1266 == -1;
  }
  var v682 = v1028;
  var v1030 = !v682;
  if (v1030) {
    introspect(JAM.policy.p21) {
      var v1029 = emblFile$$1.search(/SQ/)
    }
    v682 = v1029 == -1;
  }
  var v141 = v682;
  if (v141) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  introspect(JAM.policy.p21) {
    var v683 = emblFile$$1.search(/^FT/m)
  }
  var v142 = v683 == -1;
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
    var v684 = basePerLine / groupSize;
    var v146 = j$$6 <= v684;
    for (;v146;) {
      var v145 = k < groupSize;
      for (;v145;) {
        var v685 = k + i$$5;
        introspect(JAM.policy.p24) {
          var v144 = text$$10.charAt(v685)
        }
        lineOfText = lineOfText + v144;
        k = k + 1;
        v145 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v686 = basePerLine / groupSize;
      v146 = j$$6 <= v686;
    }
    var v147 = outputWindow.document;
    var v148 = lineOfText + "\n";
    introspect(JAM.policy.p24) {
      v147.write(v148);
    }
    lineOfText = "";
    v149 = i$$5 < stopBase;
  }
  return true;
}
function writeGroupNumDna(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition) {
  introspect(JAM.policy.p26) {
    writeGroupNumDnaSetStart(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition, 0);
  }
  return true;
}
function writeGroupNumDnaSetStart(text$$12, tabIn$$3, groupSize$$2, basePerLine$$2, startBase$$2, stopBase$$2, strands$$1, numberPosition$$1, numberingAdjustment) {
  function adjustNumbering(original, adjustment) {
    var adjusted = original + adjustment;
    var v687 = adjustment < 0;
    if (v687) {
      v687 = adjusted >= 0;
    }
    var v150 = v687;
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
    var v688 = basePerLine$$2 / groupSize$$2;
    var v159 = j$$7 <= v688;
    for (;v159;) {
      var v154 = k$$1 < groupSize$$2;
      for (;v154;) {
        var v689 = i$$6 + k$$1;
        var v151 = v689 >= stopBase$$2;
        if (v151) {
          break;
        }
        var v152 = lineOfText$$1;
        var v690 = k$$1 + i$$6;
        introspect(JAM.policy.p24) {
          var v153 = text$$12.charAt(v690)
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
        introspect(JAM.policy.p26) {
          var v691 = adjustNumbering(i$$6, numberingAdjustment)
        }
        var v156 = rightNum(v691, "", groupSize$$2, tabIn$$3);
        aboveNum = v155 + v156;
      }
      var v158 = i$$6 >= stopBase$$2;
      if (v158) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v692 = basePerLine$$2 / groupSize$$2;
      v159 = j$$7 <= v692;
    }
    var v182 = numberPosition$$1 == "left";
    if (v182) {
      var v160 = outputWindow.document;
      introspect(JAM.policy.p26) {
        var v1268 = adjustNumbering(lineNum, numberingAdjustment)
      }
      var v1031 = rightNum(v1268, "", 8, tabIn$$3);
      var v693 = v1031 + lineOfText$$1;
      var v161 = v693 + "\n";
      introspect(JAM.policy.p24) {
        v160.write(v161);
      }
      var v165 = strands$$1 == "two";
      if (v165) {
        var v162 = outputWindow.document;
        introspect(JAM.policy.p26) {
          var v1269 = adjustNumbering(lineNum, numberingAdjustment)
        }
        var v1032 = rightNum(v1269, "", 8, tabIn$$3);
        var v1033 = complement(lineOfText$$1);
        var v694 = v1032 + v1033;
        var v163 = v694 + "\n";
        introspect(JAM.policy.p24) {
          v162.write(v163);
        }
        var v164 = outputWindow.document;
        introspect(JAM.policy.p15) {
          v164.write("\n");
        }
      }
    } else {
      var v181 = numberPosition$$1 == "right";
      if (v181) {
        var v166 = outputWindow.document;
        var v1034 = lineOfText$$1;
        introspect(JAM.policy.p26) {
          var v1035 = adjustNumbering(i$$6, numberingAdjustment)
        }
        var v695 = v1034 + v1035;
        var v167 = v695 + "\n";
        introspect(JAM.policy.p24) {
          v166.write(v167);
        }
        var v171 = strands$$1 == "two";
        if (v171) {
          var v168 = outputWindow.document;
          var v1036 = complement(lineOfText$$1);
          introspect(JAM.policy.p26) {
            var v1037 = adjustNumbering(i$$6, numberingAdjustment)
          }
          var v696 = v1036 + v1037;
          var v169 = v696 + "\n";
          introspect(JAM.policy.p24) {
            v168.write(v169);
          }
          var v170 = outputWindow.document;
          introspect(JAM.policy.p15) {
            v170.write("\n");
          }
        }
      } else {
        var v180 = numberPosition$$1 == "above";
        if (v180) {
          var v172 = outputWindow.document;
          var v173 = aboveNum + "\n";
          introspect(JAM.policy.p24) {
            v172.write(v173);
          }
          var v174 = outputWindow.document;
          var v175 = lineOfText$$1 + "\n";
          introspect(JAM.policy.p24) {
            v174.write(v175);
          }
          var v179 = strands$$1 == "two";
          if (v179) {
            var v176 = outputWindow.document;
            var v697 = complement(lineOfText$$1);
            var v177 = v697 + "\n";
            introspect(JAM.policy.p24) {
              v176.write(v177);
            }
            var v178 = outputWindow.document;
            introspect(JAM.policy.p15) {
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
    var v698 = basePerLine$$3 / groupSize$$3;
    var v190 = j$$8 <= v698;
    for (;v190;) {
      var v186 = k$$2 < groupSize$$3;
      for (;v186;) {
        var v699 = i$$7 + k$$2;
        var v184 = v699 >= stopBase$$3;
        if (v184) {
          break;
        }
        var v700 = k$$2 + i$$7;
        introspect(JAM.policy.p24) {
          var v185 = text$$13.charAt(v700)
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
      var v701 = basePerLine$$3 / groupSize$$3;
      v190 = j$$8 <= v701;
    }
    var v201 = numberPosition$$2 == "left";
    if (v201) {
      var v191 = outputWindow.document;
      var v1038 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v702 = v1038 + lineOfText$$2;
      var v192 = v702 + "\n";
      introspect(JAM.policy.p24) {
        v191.write(v192);
      }
    } else {
      var v200 = numberPosition$$2 == "right";
      if (v200) {
        var v193 = outputWindow.document;
        var v703 = lineOfText$$2 + i$$7;
        var v194 = v703 + "\n";
        introspect(JAM.policy.p24) {
          v193.write(v194);
        }
      } else {
        var v199 = numberPosition$$2 == "above";
        if (v199) {
          var v195 = outputWindow.document;
          var v196 = aboveNum$$1 + "\n";
          introspect(JAM.policy.p24) {
            v195.write(v196);
          }
          var v197 = outputWindow.document;
          var v198 = lineOfText$$2 + "\n";
          introspect(JAM.policy.p24) {
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
  var v1270 = sequence$$13.length;
  var v1039 = v1270 <= firstIndexToMutate;
  var v1271 = !v1039;
  if (v1271) {
    v1039 = lastIndexToMutate < 0;
  }
  var v704 = v1039;
  var v1040 = !v704;
  if (v1040) {
    v704 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v203 = v704;
  if (v203) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v211 = i$$8 < numMut;
  for (;v211;) {
    maxNum = sequence$$13.length;
    var v705 = Math.random();
    var v204 = v705 * maxNum;
    introspect(JAM.policy.p21) {
      randNum = Math.floor(v204);
    }
    var v706 = randNum < firstIndexToMutate;
    var v1041 = !v706;
    if (v1041) {
      v706 = randNum > lastIndexToMutate;
    }
    var v205 = v706;
    if (v205) {
      numMut++;
      i$$8++;
      v211 = i$$8 < numMut;
      continue;
    }
    introspect(JAM.policy.p21) {
      currentChar = sequence$$13.charAt(randNum);
    }
    needNewChar = true;
    for (;needNewChar;) {
      var v707 = Math.random();
      var v708 = components$$1.length;
      var v206 = v707 * v708;
      introspect(JAM.policy.p21) {
        componentsIndex = Math.round(v206);
      }
      var v709 = components$$1.length;
      var v207 = componentsIndex == v709;
      if (v207) {
        componentsIndex = 0;
      }
      var v710 = components$$1[componentsIndex];
      var v208 = v710 != currentChar;
      if (v208) {
        needNewChar = false;
      }
    }
    introspect(JAM.policy.p19) {
      var v711 = sequence$$13.substring(0, randNum)
    }
    var v712 = components$$1[componentsIndex];
    var v209 = v711 + v712;
    var v713 = randNum + 1;
    var v714 = sequence$$13.length;
    introspect(JAM.policy.p27) {
      var v210 = sequence$$13.substring(v713, v714)
    }
    sequence$$13 = v209 + v210;
    i$$8++;
    v211 = i$$8 < numMut;
  }
  var v212 = outputWindow.document;
  var v213 = addReturns(sequence$$13);
  introspect(JAM.policy.p24) {
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
    var v715 = Math.random();
    var v716 = components$$2.length;
    var v214 = v715 * v716;
    introspect(JAM.policy.p21) {
      tempNum$$1 = Math.floor(v214);
    }
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v717 = sequence$$14.length;
    var v217 = v717 == 60;
    if (v217) {
      var v215 = outputWindow.document;
      var v216 = sequence$$14 + "\n";
      introspect(JAM.policy.p24) {
        v215.write(v216);
      }
      sequence$$14 = "";
    }
    j$$9++;
    v218 = j$$9 < lengthOut$$1;
  }
  var v219 = outputWindow.document;
  var v220 = sequence$$14 + "\n";
  introspect(JAM.policy.p24) {
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
    introspect(JAM.policy.p19) {
      var v221 = sequence$$15.substring(0, lookAhead)
    }
    shiftValue = v221.length;
    var v1272 = sequence$$15.length;
    var v1042 = v1272 - lookAhead;
    var v1043 = sequence$$15.length;
    introspect(JAM.policy.p27) {
      var v718 = sequence$$15.substring(v1042, v1043)
    }
    var v222 = v718 + sequence$$15;
    introspect(JAM.policy.p19) {
      var v223 = sequence$$15.substring(0, lookAhead)
    }
    sequence$$15 = v222 + v223;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v225 = outputWindow.document;
  introspect(JAM.policy.p15) {
    v225.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  }
  var v226 = outputWindow.document;
  var v1273 = '<tr><td class="title" width="200px">' + "Site:";
  var v1044 = v1273 + '</td><td class="title">';
  var v719 = v1044 + "Positions:";
  var v227 = v719 + "</td></tr>\n";
  introspect(JAM.policy.p24) {
    v226.write(v227);
  }
  var i$$9 = 0;
  var v720 = arrayOfItems.length;
  var v243 = i$$9 < v720;
  for (;v243;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v721 = arrayOfItems[i$$9];
    introspect(JAM.policy.p21) {
      var v228 = v721.match(/\/.+\//)
    }
    matchExp = v228 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    var v1274 = arrayOfItems[i$$9];
    introspect(JAM.policy.p21) {
      var v1045 = v1274.match(/\)\D*\d+/)
    }
    var v722 = v1045.toString();
    introspect(JAM.policy.p22) {
      var v229 = v722.replace(/\)\D*/, "")
    }
    cutDistance = parseFloat(v229);
    introspect(JAM.policy.p24) {
      var v235 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    for (;v235;) {
      var v230 = matchExp.lastIndex;
      matchPosition = v230 - cutDistance;
      var v723 = matchPosition >= lowerLimit;
      if (v723) {
        v723 = matchPosition < upperLimit;
      }
      var v233 = v723;
      if (v233) {
        timesFound++;
        var v231 = tempString$$1 + ", ";
        var v724 = matchPosition - shiftValue;
        var v232 = v724 + 1;
        tempString$$1 = v231 + v232;
      }
      var v725 = matchExp.lastIndex;
      var v1046 = RegExp.lastMatch;
      var v726 = v1046.length;
      var v234 = v725 - v726;
      matchExp.lastIndex = v234 + 1;
      introspect(JAM.policy.p24) {
        v235 = matchArray$$1 = matchExp.exec(sequence$$15);
      }
    }
    introspect(JAM.policy.p21) {
      var v727 = tempString$$1.search(/\d/)
    }
    var v236 = v727 != -1;
    if (v236) {
      introspect(JAM.policy.p22) {
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
    var v1535 = '<tr><td class="' + backGroundClass;
    var v1514 = v1535 + '">';
    var v1561 = arrayOfItems[i$$9];
    introspect(JAM.policy.p21) {
      var v1550 = v1561.match(/\([^\(]+\)/)
    }
    var v1536 = v1550.toString();
    introspect(JAM.policy.p22) {
      var v1515 = v1536.replace(/\(|\)/g, "")
    }
    var v1482 = v1514 + v1515;
    var v1406 = v1482 + '</td><td class="';
    var v1275 = v1406 + backGroundClass;
    var v1047 = v1275 + '">';
    var v728 = v1047 + tempString$$1;
    var v242 = v728 + "</td></tr>\n";
    introspect(JAM.policy.p24) {
      v241.write(v242);
    }
    timesFound = 0;
    i$$9++;
    var v729 = arrayOfItems.length;
    v243 = i$$9 < v729;
  }
  var v244 = outputWindow.document;
  introspect(JAM.policy.p15) {
    v244.write("</tbody></table>\n");
  }
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v245 = outputWindow.document;
  introspect(JAM.policy.p15) {
    v245.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  }
  var v246 = outputWindow.document;
  var v1483 = '<tr><td class="title">' + "Pattern:";
  var v1407 = v1483 + '</td><td class="title">';
  var v1276 = v1407 + "Times found:";
  var v1048 = v1276 + '</td><td class="title">';
  var v730 = v1048 + "Percentage:";
  var v247 = v730 + "</td></tr>\n";
  introspect(JAM.policy.p24) {
    v246.write(v247);
  }
  var i$$10 = 0;
  var v731 = arrayOfItems$$1.length;
  var v256 = i$$10 < v731;
  for (;v256;) {
    var tempNumber = 0;
    var v732 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p21) {
      var v248 = v732.match(/\/[^\/]+\//)
    }
    var matchExp$$1 = v248 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    introspect(JAM.policy.p24) {
      var v733 = sequence$$16.search(matchExp$$1)
    }
    var v250 = v733 != -1;
    if (v250) {
      introspect(JAM.policy.p24) {
        var v249 = sequence$$16.match(matchExp$$1)
      }
      tempNumber = v249.length;
    }
    var percentage = 0;
    var v1049 = originalLength + 1;
    var v1408 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p21) {
      var v1277 = v1408.match(/\d+/)
    }
    var v1050 = parseFloat(v1277);
    var v734 = v1049 - v1050;
    var v253 = v734 > 0;
    if (v253) {
      var v251 = 100 * tempNumber;
      var v735 = originalLength + 1;
      var v1278 = arrayOfItems$$1[i$$10];
      introspect(JAM.policy.p21) {
        var v1051 = v1278.match(/\d+/)
      }
      var v736 = parseFloat(v1051);
      var v252 = v735 - v736;
      percentage = v251 / v252;
    }
    var v254 = outputWindow.document;
    var v1562 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p21) {
      var v1551 = v1562.match(/\([^\(]+\)\b/)
    }
    var v1537 = v1551.toString();
    introspect(JAM.policy.p22) {
      var v1516 = v1537.replace(/\(|\)/g, "")
    }
    var v1484 = "<tr><td>" + v1516;
    var v1409 = v1484 + "</td><td>";
    var v1279 = v1409 + tempNumber;
    var v1052 = v1279 + "</td><td>";
    introspect(JAM.policy.p16) {
      var v1053 = percentage.toFixed(2)
    }
    var v737 = v1052 + v1053;
    var v255 = v737 + "</td></tr>\n";
    introspect(JAM.policy.p24) {
      v254.write(v255);
    }
    i$$10++;
    var v738 = arrayOfItems$$1.length;
    v256 = i$$10 < v738;
  }
  var v257 = outputWindow.document;
  introspect(JAM.policy.p15) {
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
  var v739 = sequence$$17.length;
  var v264 = v739 > 0;
  for (;v264;) {
    maxNum$$1 = sequence$$17.length;
    var v740 = Math.random();
    var v258 = v740 * maxNum$$1;
    introspect(JAM.policy.p21) {
      randNum$$1 = Math.floor(v258);
    }
    introspect(JAM.policy.p21) {
      tempChar$$2 = sequence$$17.charAt(randNum$$1);
    }
    tempSeq = tempSeq + tempChar$$2;
    introspect(JAM.policy.p19) {
      tempString1 = sequence$$17.substring(0, randNum$$1);
    }
    var v259 = randNum$$1 + 1;
    var v260 = sequence$$17.length;
    introspect(JAM.policy.p22) {
      tempString2 = sequence$$17.substring(v259, v260);
    }
    sequence$$17 = tempString1 + tempString2;
    var v741 = tempSeq.length;
    var v263 = v741 == 60;
    if (v263) {
      var v261 = outputWindow.document;
      var v262 = tempSeq + "\n";
      introspect(JAM.policy.p24) {
        v261.write(v262);
      }
      tempSeq = "";
    }
    var v742 = sequence$$17.length;
    v264 = v742 > 0;
  }
  var v265 = outputWindow.document;
  var v266 = tempSeq + "\n";
  introspect(JAM.policy.p24) {
    v265.write(v266);
  }
  return true;
}
function pairwiseAlignProtein(theDocument) {
  var newProteinOne = "";
  var titleOne = "";
  var newProteinTwo = "";
  var titleTwo = "";
  var maxInput$$3 = 2E3;
  var v743 = testScript();
  var v267 = v743 == false;
  if (v267) {
    return false;
  }
  var v1552 = theDocument.forms;
  var v1538 = v1552[0];
  var v1517 = v1538.elements;
  var v1485 = v1517[0];
  var v1410 = checkFormElement(v1485);
  var v1280 = v1410 == false;
  var v1412 = !v1280;
  if (v1412) {
    var v1563 = theDocument.forms;
    var v1553 = v1563[0];
    var v1539 = v1553.elements;
    var v1518 = v1539[0];
    var v1486 = v1518.value;
    introspect(JAM.policy.p26) {
      var v1411 = checkSequenceLength(v1486, maxInput$$3)
    }
    v1280 = v1411 == false;
  }
  var v1054 = v1280;
  var v1282 = !v1054;
  if (v1282) {
    var v1540 = theDocument.forms;
    var v1519 = v1540[0];
    var v1487 = v1519.elements;
    var v1413 = v1487[1];
    var v1281 = checkFormElement(v1413);
    v1054 = v1281 == false;
  }
  var v744 = v1054;
  var v1056 = !v744;
  if (v1056) {
    var v1541 = theDocument.forms;
    var v1520 = v1541[0];
    var v1488 = v1520.elements;
    var v1414 = v1488[1];
    var v1283 = v1414.value;
    introspect(JAM.policy.p26) {
      var v1055 = checkSequenceLength(v1283, maxInput$$3)
    }
    v744 = v1055 == false;
  }
  var v268 = v744;
  if (v268) {
    return false;
  }
  var v1489 = theDocument.forms;
  var v1415 = v1489[0];
  var v1284 = v1415.elements;
  var v1057 = v1284[5];
  var v745 = v1057.options;
  var v1490 = theDocument.forms;
  var v1416 = v1490[0];
  var v1285 = v1416.elements;
  var v1058 = v1285[5];
  var v746 = v1058.selectedIndex;
  var v269 = v745[v746];
  var MATRIX = v269.value;
  var v1521 = theDocument.forms;
  var v1491 = v1521[0];
  var v1417 = v1491.elements;
  var v1286 = v1417[6];
  var v1059 = v1286.options;
  var v1522 = theDocument.forms;
  var v1492 = v1522[0];
  var v1418 = v1492.elements;
  var v1287 = v1418[6];
  var v1060 = v1287.selectedIndex;
  var v747 = v1059[v1060];
  var v270 = v747.value;
  var BEGIN_GAP_PENALTY = parseInt(v270);
  var v1523 = theDocument.forms;
  var v1493 = v1523[0];
  var v1419 = v1493.elements;
  var v1288 = v1419[7];
  var v1061 = v1288.options;
  var v1524 = theDocument.forms;
  var v1494 = v1524[0];
  var v1420 = v1494.elements;
  var v1289 = v1420[7];
  var v1062 = v1289.selectedIndex;
  var v748 = v1061[v1062];
  var v271 = v748.value;
  var GAP_PENALTY = parseInt(v271);
  var v1525 = theDocument.forms;
  var v1495 = v1525[0];
  var v1421 = v1495.elements;
  var v1290 = v1421[8];
  var v1063 = v1290.options;
  var v1526 = theDocument.forms;
  var v1496 = v1526[0];
  var v1422 = v1496.elements;
  var v1291 = v1422[8];
  var v1064 = v1291.selectedIndex;
  var v749 = v1063[v1064];
  var v272 = v749.value;
  var END_GAP_PENALTY = parseInt(v272);
  openWindow("Pairwise Align Protein");
  openPre();
  var v1423 = theDocument.forms;
  var v1292 = v1423[0];
  var v1065 = v1292.elements;
  var v750 = v1065[0];
  var v273 = v750.value;
  newProteinOne = getSequenceFromFasta(v273);
  newProteinOne = removeNonProtein(newProteinOne);
  var v1424 = theDocument.forms;
  var v1293 = v1424[0];
  var v1066 = v1293.elements;
  var v751 = v1066[0];
  var v274 = v751.value;
  titleOne = getTitleFromFasta(v274);
  var v1425 = theDocument.forms;
  var v1294 = v1425[0];
  var v1067 = v1294.elements;
  var v752 = v1067[1];
  var v275 = v752.value;
  newProteinTwo = getSequenceFromFasta(v275);
  newProteinTwo = removeNonProtein(newProteinTwo);
  var v1426 = theDocument.forms;
  var v1295 = v1426[0];
  var v1068 = v1295.elements;
  var v753 = v1068[1];
  var v276 = v753.value;
  titleTwo = getTitleFromFasta(v276);
  var v277 = outputWindow.document;
  introspect(JAM.policy.p26) {
    var v278 = getPairwiseAlignTitle(titleOne, newProteinOne, titleTwo, newProteinTwo)
  }
  introspect(JAM.policy.p24) {
    v277.write(v278);
  }
  introspect(JAM.policy.p21) {
    var v754 = newProteinOne.search(/./)
  }
  var v279 = v754 != -1;
  if (v279) {
    introspect(JAM.policy.p21) {
      newProteinOne = newProteinOne.match(/./g);
    }
  }
  introspect(JAM.policy.p21) {
    var v755 = newProteinTwo.search(/./)
  }
  var v280 = v755 != -1;
  if (v280) {
    introspect(JAM.policy.p21) {
      newProteinTwo = newProteinTwo.match(/./g);
    }
  }
  introspect(JAM.policy.p26) {
    pairwiseProtein(titleOne, newProteinOne, titleTwo, newProteinTwo, MATRIX, GAP_PENALTY, BEGIN_GAP_PENALTY, END_GAP_PENALTY);
  }
  closePre();
  closeWindow();
  return true;
}
function pairwiseProtein(titleOne$$1, newProteinOne$$1, titleTwo$$1, newProteinTwo$$1, matrix, gapPenalty, beginGapPenalty, endGapPenalty) {
  var useLinearSpace = true;
  var useQuadraticSpace = false;
  var scoringMatrix;
  var v285 = matrix == "pam30";
  if (v285) {
    scoringMatrix = new Pam30;
  } else {
    var v284 = matrix == "pam70";
    if (v284) {
      scoringMatrix = new Pam70;
    } else {
      var v283 = matrix == "blosum80";
      if (v283) {
        scoringMatrix = new Blosum80;
      } else {
        var v282 = matrix == "blosum62";
        if (v282) {
          scoringMatrix = new Blosum62;
        } else {
          var v281 = matrix == "blosum45";
          if (v281) {
            scoringMatrix = new Blosum45;
          }
        }
      }
    }
  }
  var scoreSet = new ScoreSet;
  introspect(JAM.policy.p27) {
    scoreSet.setScoreSetParam(scoringMatrix, gapPenalty, beginGapPenalty, endGapPenalty);
  }
  var alignment;
  if (useLinearSpace) {
    alignment = new AlignPairLinear;
    introspect(JAM.policy.p27) {
      alignment.setAlignParam(newProteinOne$$1, newProteinTwo$$1, scoreSet);
    }
    alignment.align();
    var v286 = outputWindow.document;
    var v756 = ">" + titleOne$$1;
    var v287 = v756 + "\n";
    introspect(JAM.policy.p24) {
      v286.write(v287);
    }
    var v288 = outputWindow.document;
    var v757 = alignment.getAlignedM();
    var v289 = addReturns(v757);
    introspect(JAM.policy.p24) {
      v288.write(v289);
    }
    var v290 = outputWindow.document;
    introspect(JAM.policy.p15) {
      v290.write("\n");
    }
    var v291 = outputWindow.document;
    introspect(JAM.policy.p15) {
      v291.write("\n");
    }
    var v292 = outputWindow.document;
    var v758 = ">" + titleTwo$$1;
    var v293 = v758 + "\n";
    introspect(JAM.policy.p24) {
      v292.write(v293);
    }
    var v294 = outputWindow.document;
    var v759 = alignment.getAlignedN();
    var v295 = addReturns(v759);
    introspect(JAM.policy.p24) {
      v294.write(v295);
    }
    var v296 = outputWindow.document;
    introspect(JAM.policy.p15) {
      v296.write("\n\n");
    }
    var v297 = outputWindow.document;
    var v1069 = alignment.score;
    var v760 = "Alignment score: " + v1069;
    var v298 = v760 + "\n\n";
    introspect(JAM.policy.p24) {
      v297.write(v298);
    }
  }
  if (useQuadraticSpace) {
    alignment = new AlignPairQuad;
    introspect(JAM.policy.p27) {
      alignment.initializeMatrix(newProteinOne$$1, newProteinTwo$$1, scoreSet);
    }
    alignment.fillMatrix();
    alignment.align();
    var v299 = outputWindow.document;
    var v761 = ">" + titleOne$$1;
    var v300 = v761 + "\n";
    introspect(JAM.policy.p24) {
      v299.write(v300);
    }
    var v301 = outputWindow.document;
    var v762 = alignment.getAlignedM();
    var v302 = addReturns(v762);
    introspect(JAM.policy.p24) {
      v301.write(v302);
    }
    var v303 = outputWindow.document;
    introspect(JAM.policy.p15) {
      v303.write("\n");
    }
    var v304 = outputWindow.document;
    introspect(JAM.policy.p15) {
      v304.write("\n");
    }
    var v305 = outputWindow.document;
    var v763 = ">" + titleTwo$$1;
    var v306 = v763 + "\n";
    introspect(JAM.policy.p24) {
      v305.write(v306);
    }
    var v307 = outputWindow.document;
    var v764 = alignment.getAlignedN();
    var v308 = addReturns(v764);
    introspect(JAM.policy.p24) {
      v307.write(v308);
    }
    var v309 = outputWindow.document;
    introspect(JAM.policy.p15) {
      v309.write("\n\n");
    }
    var v310 = outputWindow.document;
    var v1070 = alignment.score;
    var v765 = "Alignment score: " + v1070;
    var v311 = v765 + "\n\n";
    introspect(JAM.policy.p24) {
      v310.write(v311);
    }
  }
  return;
}
function getScore(r1$$1, r2) {
  var v312 = this.scoringMatrix;
  introspect(JAM.policy.p27) {
    return v312.scoringMatrix_getScore(r1$$1, r2);
  }
}
function setScoreSetParam(scoringMatrix$$1, gapPenalty$$1, beginGapPenalty$$1, endGapPenalty$$1) {
  this.scoringMatrix = scoringMatrix$$1;
  this.gap = gapPenalty$$1;
  this.beginGap = beginGapPenalty$$1;
  this.endGap = endGapPenalty$$1;
  return;
}
function ScoreSet() {
  this.useBeginGapTop = true;
  this.useBeginGapLeft = true;
  this.useEndGapBottom = true;
  this.useEndGapRight = true;
  return;
}
function scoringMatrix_getScore(r1$$2, r2$$1) {
  r1$$2 = r1$$2.toLowerCase();
  r2$$1 = r2$$1.toLowerCase();
  var v1071 = this.scoreHash;
  var v1072 = r1$$2 + r2$$1;
  var v766 = v1071[v1072];
  var v316 = v766 == null;
  if (v316) {
    var v1073 = "Unrecognized residue pair: " + r1$$2;
    var v767 = v1073 + ", ";
    var v313 = v767 + r2$$1;
    throw v313 + ".";
  } else {
    var v314 = this.scoreHash;
    var v315 = r1$$2 + r2$$1;
    return v314[v315];
  }
  return;
}
function scoringMatrix_fillHash(matrix$$1) {
  var v317 = matrix$$1[0];
  introspect(JAM.policy.p21) {
    var cols = v317.split(/\s+/)
  }
  var cells;
  var i$$11 = 1;
  var v768 = matrix$$1.length;
  var v322 = i$$11 < v768;
  for (;v322;) {
    var v318 = matrix$$1[i$$11];
    introspect(JAM.policy.p21) {
      cells = v318.split(/\s+/);
    }
    var j$$10 = 1;
    var v1074 = cols.length;
    var v769 = v1074 + 1;
    var v321 = j$$10 < v769;
    for (;v321;) {
      var v319 = this.scoreHash;
      var v1075 = cells[0];
      var v770 = v1075.toLowerCase();
      var v1296 = j$$10 - 1;
      var v1076 = cols[v1296];
      var v771 = v1076.toLowerCase();
      var v320 = v770 + v771;
      var v772 = cells[j$$10];
      var v1599 = parseInt(v772);
      introspect(JAM.policy.p6) {
        v319[v320] = v1599;
      }
      j$$10++;
      var v1077 = cols.length;
      var v773 = v1077 + 1;
      v321 = j$$10 < v773;
    }
    i$$11++;
    var v774 = matrix$$1.length;
    v322 = i$$11 < v774;
  }
  return;
}
function ScoringMatrix() {
  this.scoreHash = {};
  return;
}
function Blosum62() {
  var matrix$$2 = new Array("A  R  N  D  C  Q  E  G  H  I  L  K  M  F  P  S  T  W  Y  V", "A  4 -1 -2 -2  0 -1 -1  0 -2 -1 -1 -1 -1 -2 -1  1  0 -3 -2  0", "R -1  5  0 -2 -3  1  0 -2  0 -3 -2  2 -1 -3 -2 -1 -1 -3 -2 -3", "N -2  0  6  1 -3  0  0  0  1 -3 -3  0 -2 -3 -2  1  0 -4 -2 -3", "D -2 -2  1  6 -3  0  2 -1 -1 -3 -4 -1 -3 -3 -1  0 -1 -4 -3 -3", "C  0 -3 -3 -3  9 -3 -4 -3 -3 -1 -1 -3 -1 -2 -3 -1 -1 -2 -2 -1", "Q -1  1  0  0 -3  5  2 -2  0 -3 -2  1  0 -3 -1  0 -1 -2 -1 -2", "E -1  0  0  2 -4  2  5 -2  0 -3 -3  1 -2 -3 -1  0 -1 -3 -2 -2", 
  "G  0 -2  0 -1 -3 -2 -2  6 -2 -4 -4 -2 -3 -3 -2  0 -2 -2 -3 -3", "H -2  0  1 -1 -3  0  0 -2  8 -3 -3 -1 -2 -1 -2 -1 -2 -2  2 -3", "I -1 -3 -3 -3 -1 -3 -3 -4 -3  4  2 -3  1  0 -3 -2 -1 -3 -1  3", "L -1 -2 -3 -4 -1 -2 -3 -4 -3  2  4 -2  2  0 -3 -2 -1 -2 -1  1", "K -1  2  0 -1 -3  1  1 -2 -1 -3 -2  5 -1 -3 -1  0 -1 -3 -2 -2", "M -1 -1 -2 -3 -1  0 -2 -3 -2  1  2 -1  5  0 -2 -1 -1 -1 -1  1", "F -2 -3 -3 -3 -2 -3 -3 -3 -1  0  0 -3  0  6 -4 -2 -2  1  3 -1", "P -1 -2 -2 -1 -3 -1 -1 -2 -2 -3 -3 -1 -2 -4  7 -1 -1 -4 -3 -2", 
  "S  1 -1  1  0 -1  0  0  0 -1 -2 -2  0 -1 -2 -1  4  1 -3 -2 -2", "T  0 -1  0 -1 -1 -1 -1 -2 -2 -1 -1 -1 -1 -2 -1  1  5 -2 -2  0", "W -3 -3 -4 -4 -2 -2 -3 -2 -2 -3 -2 -3 -1  1 -4 -3 -2 11  2 -3", "Y -2 -2 -2 -3 -2 -1 -2 -3  2 -1 -1 -2 -1  3 -3 -2 -2  2  7 -1", "V  0 -3 -3 -3 -1 -2 -2 -3 -3  3  1 -2  1 -1 -2 -2  0 -3 -1  4");
  introspect(JAM.policy.p24) {
    this.scoringMatrix_fillHash(matrix$$2);
  }
  return;
}
function Blosum45() {
  var matrix$$3 = new Array("A  R  N  D  C  Q  E  G  H  I  L  K  M  F  P  S  T  W  Y  V", "A  5 -2 -1 -2 -1 -1 -1  0 -2 -1 -1 -1 -1 -2 -1  1  0 -2 -2  0", "R -2  7  0 -1 -3  1  0 -2  0 -3 -2  3 -1 -2 -2 -1 -1 -2 -1 -2", "N -1  0  6  2 -2  0  0  0  1 -2 -3  0 -2 -2 -2  1  0 -4 -2 -3", "D -2 -1  2  7 -3  0  2 -1  0 -4 -3  0 -3 -4 -1  0 -1 -4 -2 -3", "C -1 -3 -2 -3 12 -3 -3 -3 -3 -3 -2 -3 -2 -2 -4 -1 -1 -5 -3 -1", "Q -1  1  0  0 -3  6  2 -2  1 -2 -2  1  0 -4 -1  0 -1 -2 -1 -3", "E -1  0  0  2 -3  2  6 -2  0 -3 -2  1 -2 -3  0  0 -1 -3 -2 -3", 
  "G  0 -2  0 -1 -3 -2 -2  7 -2 -4 -3 -2 -2 -3 -2  0 -2 -2 -3 -3", "H -2  0  1  0 -3  1  0 -2 10 -3 -2 -1  0 -2 -2 -1 -2 -3  2 -3", "I -1 -3 -2 -4 -3 -2 -3 -4 -3  5  2 -3  2  0 -2 -2 -1 -2  0  3", "L -1 -2 -3 -3 -2 -2 -2 -3 -2  2  5 -3  2  1 -3 -3 -1 -2  0  1", "K -1  3  0  0 -3  1  1 -2 -1 -3 -3  5 -1 -3 -1 -1 -1 -2 -1 -2", "M -1 -1 -2 -3 -2  0 -2 -2  0  2  2 -1  6  0 -2 -2 -1 -2  0  1", "F -2 -2 -2 -4 -2 -4 -3 -3 -2  0  1 -3  0  8 -3 -2 -1  1  3  0", "P -1 -2 -2 -1 -4 -1  0 -2 -2 -2 -3 -1 -2 -3  9 -1 -1 -3 -3 -3", 
  "S  1 -1  1  0 -1  0  0  0 -1 -2 -3 -1 -2 -2 -1  4  2 -4 -2 -1", "T  0 -1  0 -1 -1 -1 -1 -2 -2 -1 -1 -1 -1 -1 -1  2  5 -3 -1  0", "W -2 -2 -4 -4 -5 -2 -3 -2 -3 -2 -2 -2 -2  1 -3 -4 -3 15  3 -3", "Y -2 -1 -2 -2 -3 -1 -2 -3  2  0  0 -1  0  3 -3 -2 -1  3  8 -1", "V  0 -2 -3 -3 -1 -3 -3 -3 -3  3  1 -2  1  0 -3 -1  0 -3 -1  5");
  introspect(JAM.policy.p24) {
    this.scoringMatrix_fillHash(matrix$$3);
  }
  return;
}
function Blosum80() {
  var matrix$$4 = new Array("A  R  N  D  C  Q  E  G  H  I  L  K  M  F  P  S  T  W  Y  V", "A  5 -2 -2 -2 -1 -1 -1  0 -2 -2 -2 -1 -1 -3 -1  1  0 -3 -2  0", "R -2  6 -1 -2 -4  1 -1 -3  0 -3 -3  2 -2 -4 -2 -1 -1 -4 -3 -3", "N -2 -1  6  1 -3  0 -1 -1  0 -4 -4  0 -3 -4 -3  0  0 -4 -3 -4", "D -2 -2  1  6 -4 -1  1 -2 -2 -4 -5 -1 -4 -4 -2 -1 -1 -6 -4 -4", "C -1 -4 -3 -4  9 -4 -5 -4 -4 -2 -2 -4 -2 -3 -4 -2 -1 -3 -3 -1", "Q -1  1  0 -1 -4  6  2 -2  1 -3 -3  1  0 -4 -2  0 -1 -3 -2 -3", "E -1 -1 -1  1 -5  2  6 -3  0 -4 -4  1 -2 -4 -2  0 -1 -4 -3 -3", 
  "G  0 -3 -1 -2 -4 -2 -3  6 -3 -5 -4 -2 -4 -4 -3 -1 -2 -4 -4 -4", "H -2  0  0 -2 -4  1  0 -3  8 -4 -3 -1 -2 -2 -3 -1 -2 -3  2 -4", "I -2 -3 -4 -4 -2 -3 -4 -5 -4  5  1 -3  1 -1 -4 -3 -1 -3 -2  3", "L -2 -3 -4 -5 -2 -3 -4 -4 -3  1  4 -3  2  0 -3 -3 -2 -2 -2  1", "K -1  2  0 -1 -4  1  1 -2 -1 -3 -3  5 -2 -4 -1 -1 -1 -4 -3 -3", "M -1 -2 -3 -4 -2  0 -2 -4 -2  1  2 -2  6  0 -3 -2 -1 -2 -2  1", "F -3 -4 -4 -4 -3 -4 -4 -4 -2 -1  0 -4  0  6 -4 -3 -2  0  3 -1", "P -1 -2 -3 -2 -4 -2 -2 -3 -3 -4 -3 -1 -3 -4  8 -1 -2 -5 -4 -3", 
  "S  1 -1  0 -1 -2  0  0 -1 -1 -3 -3 -1 -2 -3 -1  5  1 -4 -2 -2", "T  0 -1  0 -1 -1 -1 -1 -2 -2 -1 -2 -1 -1 -2 -2  1  5 -4 -2  0", "W -3 -4 -4 -6 -3 -3 -4 -4 -3 -3 -2 -4 -2  0 -5 -4 -4 11  2 -3", "Y -2 -3 -3 -4 -3 -2 -3 -4  2 -2 -2 -3 -2  3 -4 -2 -2  2  7 -2", "V  0 -3 -4 -4 -1 -3 -3 -4 -4  3  1 -3  1 -1 -3 -2  0 -3 -2  4");
  introspect(JAM.policy.p24) {
    this.scoringMatrix_fillHash(matrix$$4);
  }
  return;
}
function Pam70() {
  var matrix$$5 = new Array("A   R   N   D   C   Q   E   G   H   I   L   K   M   F   P   S   T   W   Y   V", "A   5  -4  -2  -1  -4  -2  -1   0  -4  -2  -4  -4  -3  -6   0   1   1  -9  -5  -1", "R  -4   8  -3  -6  -5   0  -5  -6   0  -3  -6   2  -2  -7  -2  -1  -4   0  -7  -5", "N  -2  -3   6   3  -7  -1   0  -1   1  -3  -5   0  -5  -6  -3   1   0  -6  -3  -5", "D  -1  -6   3   6  -9   0   3  -1  -1  -5  -8  -2  -7 -10  -4  -1  -2 -10  -7  -5", "C  -4  -5  -7  -9   9  -9  -9  -6  -5  -4 -10  -9  -9  -8  -5  -1  -5 -11  -2  -4", 
  "Q  -2   0  -1   0  -9   7   2  -4   2  -5  -3  -1  -2  -9  -1  -3  -3  -8  -8  -4", "E  -1  -5   0   3  -9   2   6  -2  -2  -4  -6  -2  -4  -9  -3  -2  -3 -11  -6  -4", "G   0  -6  -1  -1  -6  -4  -2   6  -6  -6  -7  -5  -6  -7  -3   0  -3 -10  -9  -3", "H  -4   0   1  -1  -5   2  -2  -6   8  -6  -4  -3  -6  -4  -2  -3  -4  -5  -1  -4", "I  -2  -3  -3  -5  -4  -5  -4  -6  -6   7   1  -4   1   0  -5  -4  -1  -9  -4   3", "L  -4  -6  -5  -8 -10  -3  -6  -7  -4   1   6  -5   2  -1  -5  -6  -4  -4  -4   0", 
  "K  -4   2   0  -2  -9  -1  -2  -5  -3  -4  -5   6   0  -9  -4  -2  -1  -7  -7  -6", "M  -3  -2  -5  -7  -9  -2  -4  -6  -6   1   2   0  10  -2  -5  -3  -2  -8  -7   0", "F  -6  -7  -6 -10  -8  -9  -9  -7  -4   0  -1  -9  -2   8  -7  -4  -6  -2   4  -5", "P   0  -2  -3  -4  -5  -1  -3  -3  -2  -5  -5  -4  -5  -7   7   0  -2  -9  -9  -3", "S   1  -1   1  -1  -1  -3  -2   0  -3  -4  -6  -2  -3  -4   0   5   2  -3  -5  -3", "T   1  -4   0  -2  -5  -3  -3  -3  -4  -1  -4  -1  -2  -6  -2   2   6  -8  -4  -1", 
  "W  -9   0  -6 -10 -11  -8 -11 -10  -5  -9  -4  -7  -8  -2  -9  -3  -8  13  -3 -10", "Y  -5  -7  -3  -7  -2  -8  -6  -9  -1  -4  -4  -7  -7   4  -9  -5  -4  -3   9  -5", "V  -1  -5  -5  -5  -4  -4  -4  -3  -4   3   0  -6   0  -5  -3  -3  -1 -10  -5   6");
  introspect(JAM.policy.p24) {
    this.scoringMatrix_fillHash(matrix$$5);
  }
  return;
}
function Pam30() {
  var matrix$$6 = new Array("A   R   N   D   C   Q   E   G   H   I   L   K   M   F   P   S   T   W   Y   V", "A   6  -7  -4  -3  -6  -4  -2  -2  -7  -5  -6  -7  -5  -8  -2   0  -1 -13  -8  -2", "R  -7   8  -6 -10  -8  -2  -9  -9  -2  -5  -8   0  -4  -9  -4  -3  -6  -2 -10  -8", "N  -4  -6   8   2 -11  -3  -2  -3   0  -5  -7  -1  -9  -9  -6   0  -2  -8  -4  -8", "D  -3 -10   2   8 -14  -2   2  -3  -4  -7 -12  -4 -11 -15  -8  -4  -5 -15 -11  -8", "C  -6  -8 -11 -14  10 -14 -14  -9  -7  -6 -15 -14 -13 -13  -8  -3  -8 -15  -4  -6", 
  "Q  -4  -2  -3  -2 -14   8   1  -7   1  -8  -5  -3  -4 -13  -3  -5  -5 -13 -12  -7", "E  -2  -9  -2   2 -14   1   8  -4  -5  -5  -9  -4  -7 -14  -5  -4  -6 -17  -8  -6", "G  -2  -9  -3  -3  -9  -7  -4   6  -9 -11 -10  -7  -8  -9  -6  -2  -6 -15 -14  -5", "H  -7  -2   0  -4  -7   1  -5  -9   9  -9  -6  -6 -10  -6  -4  -6  -7  -7  -3  -6", "I  -5  -5  -5  -7  -6  -8  -5 -11  -9   8  -1  -6  -1  -2  -8  -7  -2 -14  -6   2", "L  -6  -8  -7 -12 -15  -5  -9 -10  -6  -1   7  -8   1  -3  -7  -8  -7  -6  -7  -2", 
  "K  -7   0  -1  -4 -14  -3  -4  -7  -6  -6  -8   7  -2 -14  -6  -4  -3 -12  -9  -9", "M  -5  -4  -9 -11 -13  -4  -7  -8 -10  -1   1  -2  11  -4  -8  -5  -4 -13 -11  -1", "F  -8  -9  -9 -15 -13 -13 -14  -9  -6  -2  -3 -14  -4   9 -10  -6  -9  -4   2  -8", "P  -2  -4  -6  -8  -8  -3  -5  -6  -4  -8  -7  -6  -8 -10   8  -2  -4 -14 -13  -6", "S   0  -3   0  -4  -3  -5  -4  -2  -6  -7  -8  -4  -5  -6  -2   6   0  -5  -7  -6", "T  -1  -6  -2  -5  -8  -5  -6  -6  -7  -2  -7  -3  -4  -9  -4   0   7 -13  -6  -3", 
  "W -13  -2  -8 -15 -15 -13 -17 -15  -7 -14  -6 -12 -13  -4 -14  -5 -13  13  -5 -15", "Y  -8 -10  -4 -11  -4 -12  -8 -14  -3  -6  -7  -9 -11   2 -13  -7  -6  -5  10  -7", "V  -2  -8  -8  -8  -6  -7  -6  -5  -6   2  -2  -9  -1  -8  -6  -6  -3 -15  -7   7");
  introspect(JAM.policy.p24) {
    this.scoringMatrix_fillHash(matrix$$6);
  }
  return;
}
function align() {
  var v1078 = this.M;
  var v775 = v1078.length;
  var v339 = v775 == 0;
  if (v339) {
    var j$$11 = 1;
    var v1079 = this.N;
    var v776 = v1079.length;
    var v328 = j$$11 <= v776;
    for (;v328;) {
      var v323 = this.alignedM;
      introspect(JAM.policy.p15) {
        v323.push("-");
      }
      var v324 = this.alignedN;
      var v777 = this.N;
      var v778 = j$$11 - 1;
      var v325 = v777[v778];
      introspect(JAM.policy.p24) {
        v324.push(v325);
      }
      var v326 = this.score;
      var v779 = this.scoreSet;
      var v327 = v779.gap;
      this.score = v326 + v327;
      j$$11++;
      var v1080 = this.N;
      var v780 = v1080.length;
      v328 = j$$11 <= v780;
    }
  } else {
    var v1081 = this.N;
    var v781 = v1081.length;
    var v338 = v781 == 0;
    if (v338) {
      j$$11 = 1;
      var v1082 = this.M;
      var v782 = v1082.length;
      var v334 = j$$11 <= v782;
      for (;v334;) {
        var v329 = this.alignedN;
        introspect(JAM.policy.p15) {
          v329.push("-");
        }
        var v330 = this.alignedM;
        var v783 = this.M;
        var v784 = j$$11 - 1;
        var v331 = v783[v784];
        introspect(JAM.policy.p24) {
          v330.push(v331);
        }
        var v332 = this.score;
        var v785 = this.scoreSet;
        var v333 = v785.gap;
        this.score = v332 + v333;
        j$$11++;
        var v1083 = this.M;
        var v786 = v1083.length;
        v334 = j$$11 <= v786;
      }
    } else {
      var v1297 = this.M;
      var v1084 = v1297.length;
      var v787 = v1084 == 0;
      if (v787) {
        var v1298 = this.N;
        var v1085 = v1298.length;
        v787 = v1085 == 0;
      }
      var v337 = v787;
      if (v337) {
      } else {
        var v788 = this.M;
        var v335 = v788.length;
        var v789 = this.N;
        var v336 = v789.length;
        introspect(JAM.policy.p19) {
          this.path(0, 0, v335, v336);
        }
      }
    }
  }
  return;
}
function path(i1, j1, i2, j2) {
  var v1086 = i1 + 1;
  var v790 = v1086 == i2;
  var v1087 = !v790;
  if (v1087) {
    v790 = j1 == j2;
  }
  var v436 = v790;
  if (v436) {
    var subM = new Array;
    var subN = new Array;
    var i$$12 = i1 + 1;
    var v341 = i$$12 <= i2;
    for (;v341;) {
      var v791 = this.M;
      var v792 = i$$12 - 1;
      var v340 = v791[v792];
      introspect(JAM.policy.p24) {
        subM.push(v340);
      }
      i$$12++;
      v341 = i$$12 <= i2;
    }
    var j$$12 = j1 + 1;
    var v343 = j$$12 <= j2;
    for (;v343;) {
      var v793 = this.N;
      var v794 = j$$12 - 1;
      var v342 = v793[v794];
      introspect(JAM.policy.p24) {
        subN.push(v342);
      }
      j$$12++;
      v343 = j$$12 <= j2;
    }
    var alignment$$1 = new AlignPairQuad;
    subScoreSet = new ScoreSet;
    var v366 = j1 == j2;
    if (v366) {
      var v357 = j1 == 0;
      if (v357) {
        var v795 = this.scoreSet;
        var v344 = v795.scoringMatrix;
        var v796 = this.scoreSet;
        var v345 = v796.beginGap;
        var v797 = this.scoreSet;
        var v346 = v797.beginGap;
        var v798 = this.scoreSet;
        var v347 = v798.beginGap;
        introspect(JAM.policy.p27) {
          subScoreSet.setScoreSetParam(v344, v345, v346, v347);
        }
      } else {
        var v1088 = this.N;
        var v799 = v1088.length;
        var v356 = j1 == v799;
        if (v356) {
          var v800 = this.scoreSet;
          var v348 = v800.scoringMatrix;
          var v801 = this.scoreSet;
          var v349 = v801.endGap;
          var v802 = this.scoreSet;
          var v350 = v802.endGap;
          var v803 = this.scoreSet;
          var v351 = v803.endGap;
          introspect(JAM.policy.p27) {
            subScoreSet.setScoreSetParam(v348, v349, v350, v351);
          }
        } else {
          var v804 = this.scoreSet;
          var v352 = v804.scoringMatrix;
          var v805 = this.scoreSet;
          var v353 = v805.gap;
          var v806 = this.scoreSet;
          var v354 = v806.gap;
          var v807 = this.scoreSet;
          var v355 = v807.gap;
          introspect(JAM.policy.p27) {
            subScoreSet.setScoreSetParam(v352, v353, v354, v355);
          }
        }
      }
    } else {
      var v808 = this.scoreSet;
      var v358 = v808.scoringMatrix;
      var v809 = this.scoreSet;
      var v359 = v809.gap;
      var v810 = this.scoreSet;
      var v360 = v810.beginGap;
      var v811 = this.scoreSet;
      var v361 = v811.endGap;
      introspect(JAM.policy.p27) {
        subScoreSet.setScoreSetParam(v358, v359, v360, v361);
      }
      subScoreSet.useBeginGapTop = false;
      subScoreSet.useBeginGapLeft = false;
      subScoreSet.useEndGapBottom = false;
      subScoreSet.useEndGapRight = false;
      var v362 = i1 == 0;
      if (v362) {
        subScoreSet.useBeginGapTop = true;
      }
      var v363 = j1 == 0;
      if (v363) {
        subScoreSet.useBeginGapLeft = true;
      }
      var v1089 = this.N;
      var v812 = v1089.length;
      var v364 = j2 == v812;
      if (v364) {
        subScoreSet.useEndGapRight = true;
      }
      var v1090 = this.M;
      var v813 = v1090.length;
      var v365 = i2 == v813;
      if (v365) {
        subScoreSet.useEndGapBottom = true;
      }
    }
    introspect(JAM.policy.p27) {
      alignment$$1.initializeMatrix(subM, subN, subScoreSet);
    }
    alignment$$1.fillMatrix();
    alignment$$1.align();
    var v367 = this.alignedM;
    var v368 = alignment$$1.getAlignedM();
    introspect(JAM.policy.p24) {
      v367.push(v368);
    }
    var v369 = this.alignedN;
    var v370 = alignment$$1.getAlignedN();
    introspect(JAM.policy.p24) {
      v369.push(v370);
    }
    var v371 = this.score;
    var v372 = alignment$$1.score;
    this.score = v371 + v372;
  } else {
    var v814 = i1 + i2;
    var v373 = v814 / 2;
    introspect(JAM.policy.p24) {
      var middle = Math.floor(v373)
    }
    var v374 = this.Sn;
    introspect(JAM.policy.p6) {
      v374[j1] = 0;
    }
    var v379 = i1 == 0;
    if (v379) {
      j$$12 = j1 + 1;
      var v376 = j$$12 <= j2;
      for (;v376;) {
        var v375 = this.Sn;
        var v1091 = this.Sn;
        var v1092 = j$$12 - 1;
        var v815 = v1091[v1092];
        var v1093 = this.scoreSet;
        var v816 = v1093.beginGap;
        introspect(JAM.policy.p6) {
          v375[j$$12] = v815 - v816;
        }
        j$$12++;
        v376 = j$$12 <= j2;
      }
    } else {
      j$$12 = j1 + 1;
      var v378 = j$$12 <= j2;
      for (;v378;) {
        var v377 = this.Sn;
        var v1094 = this.Sn;
        var v1095 = j$$12 - 1;
        var v817 = v1094[v1095];
        var v1096 = this.scoreSet;
        var v818 = v1096.gap;
        introspect(JAM.policy.p6) {
          v377[j$$12] = v817 - v818;
        }
        j$$12++;
        v378 = j$$12 <= j2;
      }
    }
    var diag;
    var left$$1;
    i$$12 = i1 + 1;
    var v401 = i$$12 <= middle;
    for (;v401;) {
      var v380 = this.Sn;
      diag = v380[j1];
      var v385 = j1 == 0;
      if (v385) {
        var v819 = this.Sn;
        var v381 = v819[j1];
        var v820 = this.scoreSet;
        var v382 = v820.beginGap;
        left$$1 = v381 - v382;
      } else {
        var v821 = this.Sn;
        var v383 = v821[j1];
        var v822 = this.scoreSet;
        var v384 = v822.gap;
        left$$1 = v383 - v384;
      }
      var v386 = this.Sn;
      introspect(JAM.policy.p6) {
        v386[j1] = left$$1;
      }
      j$$12 = j1 + 1;
      var v400 = j$$12 <= j2;
      for (;v400;) {
        var v1299 = this.N;
        var v1097 = v1299.length;
        var v823 = j$$12 == v1097;
        if (v823) {
          var v1300 = this.M;
          var v1098 = v1300.length;
          v823 = i$$12 == v1098;
        }
        var v397 = v823;
        if (v397) {
          var v1099 = this.Sn;
          var v824 = v1099[j$$12];
          var v1100 = this.scoreSet;
          var v825 = v1100.endGap;
          var v387 = v824 - v825;
          var v1301 = this.scoreSet;
          var v1101 = v1301.endGap;
          var v826 = left$$1 - v1101;
          var v1302 = this.scoreSet;
          var v1427 = this.M;
          var v1428 = i$$12 - 1;
          var v1303 = v1427[v1428];
          var v1429 = this.N;
          var v1430 = j$$12 - 1;
          var v1304 = v1429[v1430];
          introspect(JAM.policy.p27) {
            var v1102 = v1302.getScore(v1303, v1304)
          }
          var v827 = diag + v1102;
          introspect(JAM.policy.p27) {
            var v388 = Math.max(v826, v827)
          }
          introspect(JAM.policy.p22) {
            left$$1 = Math.max(v387, v388);
          }
        } else {
          var v1103 = this.M;
          var v828 = v1103.length;
          var v396 = i$$12 == v828;
          if (v396) {
            var v1104 = this.Sn;
            var v829 = v1104[j$$12];
            var v1105 = this.scoreSet;
            var v830 = v1105.gap;
            var v389 = v829 - v830;
            var v1305 = this.scoreSet;
            var v1106 = v1305.endGap;
            var v831 = left$$1 - v1106;
            var v1306 = this.scoreSet;
            var v1431 = this.M;
            var v1432 = i$$12 - 1;
            var v1307 = v1431[v1432];
            var v1433 = this.N;
            var v1434 = j$$12 - 1;
            var v1308 = v1433[v1434];
            introspect(JAM.policy.p27) {
              var v1107 = v1306.getScore(v1307, v1308)
            }
            var v832 = diag + v1107;
            introspect(JAM.policy.p27) {
              var v390 = Math.max(v831, v832)
            }
            introspect(JAM.policy.p22) {
              left$$1 = Math.max(v389, v390);
            }
          } else {
            var v1108 = this.N;
            var v833 = v1108.length;
            var v395 = j$$12 == v833;
            if (v395) {
              var v1109 = this.Sn;
              var v834 = v1109[j$$12];
              var v1110 = this.scoreSet;
              var v835 = v1110.endGap;
              var v391 = v834 - v835;
              var v1309 = this.scoreSet;
              var v1111 = v1309.gap;
              var v836 = left$$1 - v1111;
              var v1310 = this.scoreSet;
              var v1435 = this.M;
              var v1436 = i$$12 - 1;
              var v1311 = v1435[v1436];
              var v1437 = this.N;
              var v1438 = j$$12 - 1;
              var v1312 = v1437[v1438];
              introspect(JAM.policy.p27) {
                var v1112 = v1310.getScore(v1311, v1312)
              }
              var v837 = diag + v1112;
              introspect(JAM.policy.p27) {
                var v392 = Math.max(v836, v837)
              }
              introspect(JAM.policy.p22) {
                left$$1 = Math.max(v391, v392);
              }
            } else {
              var v1113 = this.Sn;
              var v838 = v1113[j$$12];
              var v1114 = this.scoreSet;
              var v839 = v1114.gap;
              var v393 = v838 - v839;
              var v1313 = this.scoreSet;
              var v1115 = v1313.gap;
              var v840 = left$$1 - v1115;
              var v1314 = this.scoreSet;
              var v1439 = this.M;
              var v1440 = i$$12 - 1;
              var v1315 = v1439[v1440];
              var v1441 = this.N;
              var v1442 = j$$12 - 1;
              var v1316 = v1441[v1442];
              introspect(JAM.policy.p27) {
                var v1116 = v1314.getScore(v1315, v1316)
              }
              var v841 = diag + v1116;
              introspect(JAM.policy.p27) {
                var v394 = Math.max(v840, v841)
              }
              introspect(JAM.policy.p22) {
                left$$1 = Math.max(v393, v394);
              }
            }
          }
        }
        var v398 = this.Sn;
        diag = v398[j$$12];
        var v399 = this.Sn;
        introspect(JAM.policy.p6) {
          v399[j$$12] = left$$1;
        }
        j$$12++;
        v400 = j$$12 <= j2;
      }
      i$$12++;
      v401 = i$$12 <= middle;
    }
    var v402 = this.Sp;
    introspect(JAM.policy.p6) {
      v402[j2] = 0;
    }
    var v1117 = this.M;
    var v842 = v1117.length;
    var v407 = i2 == v842;
    if (v407) {
      j$$12 = j2 - 1;
      var v404 = j$$12 >= j1;
      for (;v404;) {
        var v403 = this.Sp;
        var v1118 = this.Sp;
        var v1119 = j$$12 + 1;
        var v843 = v1118[v1119];
        var v1120 = this.scoreSet;
        var v844 = v1120.endGap;
        introspect(JAM.policy.p6) {
          v403[j$$12] = v843 - v844;
        }
        j$$12--;
        v404 = j$$12 >= j1;
      }
    } else {
      j$$12 = j2 - 1;
      var v406 = j$$12 >= j1;
      for (;v406;) {
        var v405 = this.Sp;
        var v1121 = this.Sp;
        var v1122 = j$$12 + 1;
        var v845 = v1121[v1122];
        var v1123 = this.scoreSet;
        var v846 = v1123.gap;
        introspect(JAM.policy.p6) {
          v405[j$$12] = v845 - v846;
        }
        j$$12--;
        v406 = j$$12 >= j1;
      }
    }
    var right$$1;
    i$$12 = i2 - 1;
    var v429 = i$$12 >= middle;
    for (;v429;) {
      var v408 = this.Sp;
      diag = v408[j2];
      var v1124 = this.N;
      var v847 = v1124.length;
      var v413 = j2 == v847;
      if (v413) {
        var v848 = this.Sp;
        var v409 = v848[j2];
        var v849 = this.scoreSet;
        var v410 = v849.endGap;
        right$$1 = v409 - v410;
      } else {
        var v850 = this.Sp;
        var v411 = v850[j2];
        var v851 = this.scoreSet;
        var v412 = v851.gap;
        right$$1 = v411 - v412;
      }
      var v414 = this.Sp;
      introspect(JAM.policy.p6) {
        v414[j2] = right$$1;
      }
      j$$12 = j2 - 1;
      var v428 = j$$12 >= j1;
      for (;v428;) {
        var v852 = j$$12 == 0;
        if (v852) {
          v852 = i$$12 == 0;
        }
        var v425 = v852;
        if (v425) {
          var v1125 = this.Sp;
          var v853 = v1125[j$$12];
          var v1126 = this.scoreSet;
          var v854 = v1126.beginGap;
          var v415 = v853 - v854;
          var v1317 = this.scoreSet;
          var v1127 = v1317.beginGap;
          var v855 = right$$1 - v1127;
          var v1318 = this.scoreSet;
          var v1443 = this.M;
          var v1497 = i$$12 + 1;
          var v1444 = v1497 - 1;
          var v1319 = v1443[v1444];
          var v1445 = this.N;
          var v1498 = j$$12 + 1;
          var v1446 = v1498 - 1;
          var v1320 = v1445[v1446];
          introspect(JAM.policy.p27) {
            var v1128 = v1318.getScore(v1319, v1320)
          }
          var v856 = diag + v1128;
          introspect(JAM.policy.p27) {
            var v416 = Math.max(v855, v856)
          }
          introspect(JAM.policy.p22) {
            right$$1 = Math.max(v415, v416);
          }
        } else {
          var v424 = j$$12 == 0;
          if (v424) {
            var v1129 = this.Sp;
            var v857 = v1129[j$$12];
            var v1130 = this.scoreSet;
            var v858 = v1130.beginGap;
            var v417 = v857 - v858;
            var v1321 = this.scoreSet;
            var v1131 = v1321.gap;
            var v859 = right$$1 - v1131;
            var v1322 = this.scoreSet;
            var v1447 = this.M;
            var v1499 = i$$12 + 1;
            var v1448 = v1499 - 1;
            var v1323 = v1447[v1448];
            var v1449 = this.N;
            var v1500 = j$$12 + 1;
            var v1450 = v1500 - 1;
            var v1324 = v1449[v1450];
            introspect(JAM.policy.p27) {
              var v1132 = v1322.getScore(v1323, v1324)
            }
            var v860 = diag + v1132;
            introspect(JAM.policy.p27) {
              var v418 = Math.max(v859, v860)
            }
            introspect(JAM.policy.p22) {
              right$$1 = Math.max(v417, v418);
            }
          } else {
            var v423 = i$$12 == 0;
            if (v423) {
              var v1133 = this.Sp;
              var v861 = v1133[j$$12];
              var v1134 = this.scoreSet;
              var v862 = v1134.gap;
              var v419 = v861 - v862;
              var v1325 = this.scoreSet;
              var v1135 = v1325.beginGap;
              var v863 = right$$1 - v1135;
              var v1326 = this.scoreSet;
              var v1451 = this.M;
              var v1501 = i$$12 + 1;
              var v1452 = v1501 - 1;
              var v1327 = v1451[v1452];
              var v1453 = this.N;
              var v1502 = j$$12 + 1;
              var v1454 = v1502 - 1;
              var v1328 = v1453[v1454];
              introspect(JAM.policy.p27) {
                var v1136 = v1326.getScore(v1327, v1328)
              }
              var v864 = diag + v1136;
              introspect(JAM.policy.p27) {
                var v420 = Math.max(v863, v864)
              }
              introspect(JAM.policy.p22) {
                right$$1 = Math.max(v419, v420);
              }
            } else {
              var v1137 = this.Sp;
              var v865 = v1137[j$$12];
              var v1138 = this.scoreSet;
              var v866 = v1138.gap;
              var v421 = v865 - v866;
              var v1329 = this.scoreSet;
              var v1139 = v1329.gap;
              var v867 = right$$1 - v1139;
              var v1330 = this.scoreSet;
              var v1455 = this.M;
              var v1503 = i$$12 + 1;
              var v1456 = v1503 - 1;
              var v1331 = v1455[v1456];
              var v1457 = this.N;
              var v1504 = j$$12 + 1;
              var v1458 = v1504 - 1;
              var v1332 = v1457[v1458];
              introspect(JAM.policy.p27) {
                var v1140 = v1330.getScore(v1331, v1332)
              }
              var v868 = diag + v1140;
              introspect(JAM.policy.p27) {
                var v422 = Math.max(v867, v868)
              }
              introspect(JAM.policy.p22) {
                right$$1 = Math.max(v421, v422);
              }
            }
          }
        }
        var v426 = this.Sp;
        diag = v426[j$$12];
        var v427 = this.Sp;
        introspect(JAM.policy.p6) {
          v427[j$$12] = right$$1;
        }
        j$$12--;
        v428 = j$$12 >= j1;
      }
      i$$12--;
      v429 = i$$12 >= middle;
    }
    var v869 = this.Sn;
    var v430 = v869[j1];
    var v870 = this.Sp;
    var v431 = v870[j1];
    var maxValue = v430 + v431;
    var maxJ = j1;
    j$$12 = j1 + 1;
    var v435 = j$$12 <= j2;
    for (;v435;) {
      var v1333 = this.Sn;
      var v1141 = v1333[j$$12];
      var v1334 = this.Sp;
      var v1142 = v1334[j$$12];
      var v871 = v1141 + v1142;
      var v434 = v871 >= maxValue;
      if (v434) {
        var v872 = this.Sn;
        var v432 = v872[j$$12];
        var v873 = this.Sp;
        var v433 = v873[j$$12];
        maxValue = v432 + v433;
        maxJ = j$$12;
      }
      j$$12++;
      v435 = j$$12 <= j2;
    }
    introspect(JAM.policy.p27) {
      this.path(i1, j1, middle, maxJ);
    }
    introspect(JAM.policy.p22) {
      this.path(middle, maxJ, i2, j2);
    }
  }
  return;
}
function getAlignedM() {
  var v437 = this.alignedM;
  introspect(JAM.policy.p15) {
    return v437.join("");
  }
}
function getAlignedN() {
  var v438 = this.alignedN;
  introspect(JAM.policy.p15) {
    return v438.join("");
  }
}
function setAlignParam(M, N, scoreSet$$1) {
  this.M = M;
  this.N = N;
  var v1600 = new Array;
  this.alignedM = v1600;
  var v1601 = new Array;
  this.alignedN = v1601;
  this.scoreSet = scoreSet$$1;
  var v874 = this.N;
  var v439 = v874.length;
  var v1602 = new Array(v439);
  this.Sn = v1602;
  var v875 = this.N;
  var v440 = v875.length;
  var v1603 = new Array(v440);
  this.Sp = v1603;
  this.score = 0;
  return;
}
function AlignPairLinear() {
  return;
}
function Node() {
  return;
}
function initializeMatrix(sequenceOne$$2, sequenceTwo$$2, scoreSet$$2) {
  this.scoreSet = scoreSet$$2;
  this.M = sequenceOne$$2;
  this.N = sequenceTwo$$2;
  this.score = 0;
  var v1143 = this.M;
  var v876 = v1143.length;
  var v441 = v876 + 1;
  var v1604 = new Array(v441);
  this.nodes = v1604;
  var i$$13 = 0;
  var v1144 = this.nodes;
  var v877 = v1144.length;
  var v445 = i$$13 < v877;
  for (;v445;) {
    var v442 = this.nodes;
    var v1335 = this.N;
    var v1145 = v1335.length;
    var v878 = v1145 + 1;
    var v1605 = new Array(v878);
    v442[i$$13] = v1605;
    var j$$13 = 0;
    var v1336 = this.nodes;
    var v1146 = v1336[i$$13];
    var v879 = v1146.length;
    var v444 = j$$13 < v879;
    for (;v444;) {
      var v880 = this.nodes;
      var v443 = v880[i$$13];
      var v1606 = new Node;
      v443[j$$13] = v1606;
      j$$13++;
      var v1337 = this.nodes;
      var v1147 = v1337[i$$13];
      var v881 = v1147.length;
      v444 = j$$13 < v881;
    }
    i$$13++;
    var v1148 = this.nodes;
    var v882 = v1148.length;
    v445 = i$$13 < v882;
  }
  var v1149 = this.nodes;
  var v883 = v1149[0];
  var v446 = v883[0];
  v446.value = 0;
  i$$13 = 1;
  var v1150 = this.nodes;
  var v884 = v1150.length;
  var v452 = i$$13 < v884;
  for (;v452;) {
    var v885 = this.scoreSet;
    var v449 = v885.useBeginGapLeft;
    if (v449) {
      var v1151 = this.nodes;
      var v886 = v1151[i$$13];
      var v447 = v886[0];
      var v1459 = this.nodes;
      var v1460 = i$$13 - 1;
      var v1338 = v1459[v1460];
      var v1152 = v1338[0];
      var v887 = v1152.value;
      var v1153 = this.scoreSet;
      var v888 = v1153.beginGap;
      v447.value = v887 - v888;
    } else {
      var v1154 = this.nodes;
      var v889 = v1154[i$$13];
      var v448 = v889[0];
      var v1461 = this.nodes;
      var v1462 = i$$13 - 1;
      var v1339 = v1461[v1462];
      var v1155 = v1339[0];
      var v890 = v1155.value;
      var v1156 = this.scoreSet;
      var v891 = v1156.gap;
      v448.value = v890 - v891;
    }
    var v1157 = this.nodes;
    var v892 = v1157[i$$13];
    var v450 = v892[0];
    v450.tracebackI = i$$13 - 1;
    var v1158 = this.nodes;
    var v893 = v1158[i$$13];
    var v451 = v893[0];
    v451.tracebackJ = 0;
    i$$13++;
    var v1159 = this.nodes;
    var v894 = v1159.length;
    v452 = i$$13 < v894;
  }
  j$$13 = 1;
  var v1340 = this.nodes;
  var v1160 = v1340[0];
  var v895 = v1160.length;
  var v458 = j$$13 < v895;
  for (;v458;) {
    var v896 = this.scoreSet;
    var v455 = v896.useBeginGapTop;
    if (v455) {
      var v1161 = this.nodes;
      var v897 = v1161[0];
      var v453 = v897[j$$13];
      var v1463 = this.nodes;
      var v1341 = v1463[0];
      var v1342 = j$$13 - 1;
      var v1162 = v1341[v1342];
      var v898 = v1162.value;
      var v1163 = this.scoreSet;
      var v899 = v1163.beginGap;
      v453.value = v898 - v899;
    } else {
      var v1164 = this.nodes;
      var v900 = v1164[0];
      var v454 = v900[j$$13];
      var v1464 = this.nodes;
      var v1343 = v1464[0];
      var v1344 = j$$13 - 1;
      var v1165 = v1343[v1344];
      var v901 = v1165.value;
      var v1166 = this.scoreSet;
      var v902 = v1166.gap;
      v454.value = v901 - v902;
    }
    var v1167 = this.nodes;
    var v903 = v1167[0];
    var v456 = v903[j$$13];
    v456.tracebackI = 0;
    var v1168 = this.nodes;
    var v904 = v1168[0];
    var v457 = v904[j$$13];
    v457.tracebackJ = j$$13 - 1;
    j$$13++;
    var v1345 = this.nodes;
    var v1169 = v1345[0];
    var v905 = v1169.length;
    v458 = j$$13 < v905;
  }
  return;
}
function dumpMatrix() {
  var v459 = outputWindow.document;
  var v1465 = this.nodes;
  var v1346 = v1465.length;
  var v1170 = "Dynamic programming matrix i=" + v1346;
  var v906 = v1170 + " and j=";
  var v1347 = this.nodes;
  var v1171 = v1347[0];
  var v907 = v1171.length;
  var v460 = v906 + v907;
  introspect(JAM.policy.p24) {
    v459.write(v460);
  }
  var v461 = outputWindow.document;
  introspect(JAM.policy.p15) {
    v461.write("\n");
  }
  var i$$14 = 0;
  var v1172 = this.nodes;
  var v908 = v1172.length;
  var v472 = i$$14 < v908;
  for (;v472;) {
    var j$$14 = 0;
    var v1348 = this.nodes;
    var v1173 = v1348[i$$14];
    var v909 = v1173.length;
    var v470 = j$$14 < v909;
    for (;v470;) {
      var v1174 = this.nodes;
      var v910 = v1174[i$$14];
      var v462 = v910[j$$14];
      var traceI = v462.tracebackI;
      var v1175 = this.nodes;
      var v911 = v1175[i$$14];
      var v463 = v911[j$$14];
      var traceJ = v463.tracebackJ;
      var v464 = traceI == undefined;
      if (v464) {
        traceI = "u";
      }
      var v465 = traceJ == undefined;
      if (v465) {
        traceJ = "u";
      }
      var v1542 = "(" + i$$14;
      var v1527 = v1542 + ",";
      var v1505 = v1527 + j$$14;
      var v1466 = v1505 + ")[";
      var v1349 = v1466 + traceI;
      var v1176 = v1349 + ",";
      var v912 = v1176 + traceJ;
      var v466 = v912 + "]=";
      var v1350 = this.nodes;
      var v1177 = v1350[i$$14];
      var v913 = v1177[j$$14];
      var v467 = v913.value;
      var output = v466 + v467;
      var v468 = outputWindow.document;
      var v469 = rightNum(output, "", 20, " ");
      introspect(JAM.policy.p24) {
        v468.write(v469);
      }
      j$$14++;
      var v1351 = this.nodes;
      var v1178 = v1351[i$$14];
      var v914 = v1178.length;
      v470 = j$$14 < v914;
    }
    var v471 = outputWindow.document;
    introspect(JAM.policy.p15) {
      v471.write("\n");
    }
    i$$14++;
    var v1179 = this.nodes;
    var v915 = v1179.length;
    v472 = i$$14 < v915;
  }
  var v473 = outputWindow.document;
  introspect(JAM.policy.p15) {
    v473.write("\n");
  }
  return;
}
function fillMatrix() {
  var i$$15 = 1;
  var v1180 = this.nodes;
  var v916 = v1180.length;
  var v519 = i$$15 < v916;
  for (;v519;) {
    var j$$15 = 1;
    var v1352 = this.nodes;
    var v1181 = v1352[0];
    var v917 = v1181.length;
    var v518 = j$$15 < v917;
    for (;v518;) {
      var a;
      var b;
      var c;
      var v1467 = this.nodes;
      var v1353 = v1467.length;
      var v1182 = v1353 - 1;
      var v918 = i$$15 == v1182;
      if (v918) {
        var v1506 = this.nodes;
        var v1468 = v1506[0];
        var v1354 = v1468.length;
        var v1183 = v1354 - 1;
        v918 = j$$15 == v1183;
      }
      var v504 = v918;
      if (v504) {
        var v919 = this.scoreSet;
        var v478 = v919.useEndGapRight;
        if (v478) {
          var v1355 = this.nodes;
          var v1356 = i$$15 - 1;
          var v1184 = v1355[v1356];
          var v920 = v1184[j$$15];
          var v474 = v920.value;
          var v921 = this.scoreSet;
          var v475 = v921.endGap;
          a = v474 - v475;
        } else {
          var v1357 = this.nodes;
          var v1358 = i$$15 - 1;
          var v1185 = v1357[v1358];
          var v922 = v1185[j$$15];
          var v476 = v922.value;
          var v923 = this.scoreSet;
          var v477 = v923.gap;
          a = v476 - v477;
        }
        var v924 = this.scoreSet;
        var v483 = v924.useEndGapBottom;
        if (v483) {
          var v1359 = this.nodes;
          var v1186 = v1359[i$$15];
          var v1187 = j$$15 - 1;
          var v925 = v1186[v1187];
          var v479 = v925.value;
          var v926 = this.scoreSet;
          var v480 = v926.endGap;
          b = v479 - v480;
        } else {
          var v1360 = this.nodes;
          var v1188 = v1360[i$$15];
          var v1189 = j$$15 - 1;
          var v927 = v1188[v1189];
          var v481 = v927.value;
          var v928 = this.scoreSet;
          var v482 = v928.gap;
          b = v481 - v482;
        }
      } else {
        var v1361 = this.nodes;
        var v1190 = v1361.length;
        var v929 = v1190 - 1;
        var v503 = i$$15 == v929;
        if (v503) {
          var v1362 = this.nodes;
          var v1363 = i$$15 - 1;
          var v1191 = v1362[v1363];
          var v930 = v1191[j$$15];
          var v484 = v930.value;
          var v931 = this.scoreSet;
          var v485 = v931.gap;
          a = v484 - v485;
          var v932 = this.scoreSet;
          var v490 = v932.useEndGapBottom;
          if (v490) {
            var v1364 = this.nodes;
            var v1192 = v1364[i$$15];
            var v1193 = j$$15 - 1;
            var v933 = v1192[v1193];
            var v486 = v933.value;
            var v934 = this.scoreSet;
            var v487 = v934.endGap;
            b = v486 - v487;
          } else {
            var v1365 = this.nodes;
            var v1194 = v1365[i$$15];
            var v1195 = j$$15 - 1;
            var v935 = v1194[v1195];
            var v488 = v935.value;
            var v936 = this.scoreSet;
            var v489 = v936.gap;
            b = v488 - v489;
          }
        } else {
          var v1469 = this.nodes;
          var v1366 = v1469[0];
          var v1196 = v1366.length;
          var v937 = v1196 - 1;
          var v502 = j$$15 == v937;
          if (v502) {
            var v938 = this.scoreSet;
            var v495 = v938.useEndGapRight;
            if (v495) {
              var v1367 = this.nodes;
              var v1368 = i$$15 - 1;
              var v1197 = v1367[v1368];
              var v939 = v1197[j$$15];
              var v491 = v939.value;
              var v940 = this.scoreSet;
              var v492 = v940.endGap;
              a = v491 - v492;
            } else {
              var v1369 = this.nodes;
              var v1370 = i$$15 - 1;
              var v1198 = v1369[v1370];
              var v941 = v1198[j$$15];
              var v493 = v941.value;
              var v942 = this.scoreSet;
              var v494 = v942.gap;
              a = v493 - v494;
            }
            var v1371 = this.nodes;
            var v1199 = v1371[i$$15];
            var v1200 = j$$15 - 1;
            var v943 = v1199[v1200];
            var v496 = v943.value;
            var v944 = this.scoreSet;
            var v497 = v944.gap;
            b = v496 - v497;
          } else {
            var v1372 = this.nodes;
            var v1373 = i$$15 - 1;
            var v1201 = v1372[v1373];
            var v945 = v1201[j$$15];
            var v498 = v945.value;
            var v946 = this.scoreSet;
            var v499 = v946.gap;
            a = v498 - v499;
            var v1374 = this.nodes;
            var v1202 = v1374[i$$15];
            var v1203 = j$$15 - 1;
            var v947 = v1202[v1203];
            var v500 = v947.value;
            var v948 = this.scoreSet;
            var v501 = v948.gap;
            b = v500 - v501;
          }
        }
      }
      var v1375 = this.nodes;
      var v1376 = i$$15 - 1;
      var v1204 = v1375[v1376];
      var v1205 = j$$15 - 1;
      var v949 = v1204[v1205];
      var v505 = v949.value;
      var v950 = this.scoreSet;
      var v1206 = this.M;
      var v1207 = i$$15 - 1;
      var v951 = v1206[v1207];
      var v1208 = this.N;
      var v1209 = j$$15 - 1;
      var v952 = v1208[v1209];
      introspect(JAM.policy.p27) {
        var v506 = v950.getScore(v951, v952)
      }
      c = v505 + v506;
      var v953 = a >= b;
      if (v953) {
        v953 = a >= c;
      }
      var v517 = v953;
      if (v517) {
        var v1210 = this.nodes;
        var v954 = v1210[i$$15];
        var v507 = v954[j$$15];
        v507.value = a;
        var v1211 = this.nodes;
        var v955 = v1211[i$$15];
        var v508 = v955[j$$15];
        v508.tracebackI = i$$15 - 1;
        var v1212 = this.nodes;
        var v956 = v1212[i$$15];
        var v509 = v956[j$$15];
        v509.tracebackJ = j$$15;
      } else {
        var v957 = b >= c;
        if (v957) {
          v957 = b >= a;
        }
        var v516 = v957;
        if (v516) {
          var v1213 = this.nodes;
          var v958 = v1213[i$$15];
          var v510 = v958[j$$15];
          v510.value = b;
          var v1214 = this.nodes;
          var v959 = v1214[i$$15];
          var v511 = v959[j$$15];
          v511.tracebackI = i$$15;
          var v1215 = this.nodes;
          var v960 = v1215[i$$15];
          var v512 = v960[j$$15];
          v512.tracebackJ = j$$15 - 1;
        } else {
          var v1216 = this.nodes;
          var v961 = v1216[i$$15];
          var v513 = v961[j$$15];
          v513.value = c;
          var v1217 = this.nodes;
          var v962 = v1217[i$$15];
          var v514 = v962[j$$15];
          v514.tracebackI = i$$15 - 1;
          var v1218 = this.nodes;
          var v963 = v1218[i$$15];
          var v515 = v963[j$$15];
          v515.tracebackJ = j$$15 - 1;
        }
      }
      j$$15++;
      var v1377 = this.nodes;
      var v1219 = v1377[0];
      var v964 = v1219.length;
      v518 = j$$15 < v964;
    }
    i$$15++;
    var v1220 = this.nodes;
    var v965 = v1220.length;
    v519 = i$$15 < v965;
  }
  var v1221 = this.nodes;
  var v1470 = this.nodes;
  var v1378 = v1470.length;
  var v1222 = v1378 - 1;
  var v966 = v1221[v1222];
  var v1471 = this.nodes;
  var v1379 = v1471[0];
  var v1223 = v1379.length;
  var v967 = v1223 - 1;
  var v520 = v966[v967];
  this.score = v520.value;
  return;
}
function alignQuad() {
  var v1607 = new Array;
  this.alignedM = v1607;
  var v1608 = new Array;
  this.alignedN = v1608;
  var v968 = this.nodes;
  var v521 = v968.length;
  var currentI = v521 - 1;
  var v1224 = this.nodes;
  var v969 = v1224[0];
  var v522 = v969.length;
  var currentJ = v522 - 1;
  var v970 = this.nodes;
  var v1380 = this.nodes;
  var v1225 = v1380.length;
  var v971 = v1225 - 1;
  var v523 = v970[v971];
  var v1381 = this.nodes;
  var v1226 = v1381[0];
  var v972 = v1226.length;
  var v524 = v972 - 1;
  var currentNode = v523[v524];
  var v1227 = currentNode.tracebackI;
  var v973 = v1227 != undefined;
  if (v973) {
    var v1228 = currentNode.tracebackJ;
    v973 = v1228 != undefined;
  }
  var v539 = v973;
  for (;v539;) {
    var v1229 = currentNode.tracebackI;
    var v1230 = currentI - 1;
    var v974 = v1229 == v1230;
    if (v974) {
      var v1231 = currentNode.tracebackJ;
      var v1232 = currentJ - 1;
      v974 = v1231 == v1232;
    }
    var v536 = v974;
    if (v536) {
      var v525 = this.alignedM;
      var v975 = this.M;
      var v526 = v975.pop();
      introspect(JAM.policy.p24) {
        v525.push(v526);
      }
      var v527 = this.alignedN;
      var v976 = this.N;
      var v528 = v976.pop();
      introspect(JAM.policy.p24) {
        v527.push(v528);
      }
    } else {
      var v977 = currentNode.tracebackJ;
      var v978 = currentJ - 1;
      var v535 = v977 == v978;
      if (v535) {
        var v529 = this.alignedM;
        introspect(JAM.policy.p15) {
          v529.push("-");
        }
        var v530 = this.alignedN;
        var v979 = this.N;
        var v531 = v979.pop();
        introspect(JAM.policy.p24) {
          v530.push(v531);
        }
      } else {
        var v532 = this.alignedM;
        var v980 = this.M;
        var v533 = v980.pop();
        introspect(JAM.policy.p24) {
          v532.push(v533);
        }
        var v534 = this.alignedN;
        introspect(JAM.policy.p15) {
          v534.push("-");
        }
      }
    }
    currentI = currentNode.tracebackI;
    currentJ = currentNode.tracebackJ;
    var v981 = this.nodes;
    var v982 = currentNode.tracebackI;
    var v537 = v981[v982];
    var v538 = currentNode.tracebackJ;
    currentNode = v537[v538];
    var v1233 = currentNode.tracebackI;
    var v983 = v1233 != undefined;
    if (v983) {
      var v1234 = currentNode.tracebackJ;
      v983 = v1234 != undefined;
    }
    v539 = v983;
  }
  var v540 = this.alignedM;
  var v1609 = v540.reverse();
  this.alignedM = v1609;
  var v541 = this.alignedN;
  var v1610 = v541.reverse();
  this.alignedN = v1610;
  return;
}
function getAlignedM() {
  var v542 = this.alignedM;
  introspect(JAM.policy.p15) {
    return v542.join("");
  }
}
function getAlignedN() {
  var v543 = this.alignedN;
  introspect(JAM.policy.p15) {
    return v543.join("");
  }
}
function AlignPairQuad() {
  return;
}
new ScoreSet;
var v544 = ScoreSet.prototype;
v544.getScore = getScore;
var v545 = ScoreSet.prototype;
v545.setScoreSetParam = setScoreSetParam;
new ScoringMatrix;
var v546 = ScoringMatrix.prototype;
v546.scoringMatrix_getScore = scoringMatrix_getScore;
var v547 = ScoringMatrix.prototype;
v547.scoringMatrix_fillHash = scoringMatrix_fillHash;
var v548 = Blosum62;
var v1611 = new ScoringMatrix;
v548.prototype = v1611;
var v549 = Blosum45;
var v1612 = new ScoringMatrix;
v549.prototype = v1612;
var v550 = Blosum80;
var v1613 = new ScoringMatrix;
v550.prototype = v1613;
var v551 = Pam70;
var v1614 = new ScoringMatrix;
v551.prototype = v1614;
var v552 = Pam30;
var v1615 = new ScoringMatrix;
v552.prototype = v1615;
new AlignPairLinear;
var v553 = AlignPairLinear.prototype;
v553.align = align;
var v554 = AlignPairLinear.prototype;
v554.path = path;
var v555 = AlignPairLinear.prototype;
v555.setAlignParam = setAlignParam;
var v556 = AlignPairLinear.prototype;
v556.getAlignedM = getAlignedM;
var v557 = AlignPairLinear.prototype;
v557.getAlignedN = getAlignedN;
new AlignPairQuad;
var v558 = AlignPairQuad.prototype;
v558.initializeMatrix = initializeMatrix;
var v559 = AlignPairQuad.prototype;
v559.fillMatrix = fillMatrix;
var v560 = AlignPairQuad.prototype;
v560.align = alignQuad;
var v561 = AlignPairQuad.prototype;
v561.getAlignedM = getAlignedM;
var v562 = AlignPairQuad.prototype;
v562.getAlignedN = getAlignedN;
var v563 = AlignPairQuad.prototype;
v563.dumpMatrix = dumpMatrix;
document.onload = v2;
introspect(JAM.policy.p15) {
  var v564 = document.getElementById("submitbtn")
}
v564.onclick = v3;
introspect(JAM.policy.p15) {
  var v565 = document.getElementById("clearbtn")
}
v565.onclick = v4
