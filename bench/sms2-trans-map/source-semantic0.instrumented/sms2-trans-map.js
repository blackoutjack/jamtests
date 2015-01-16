function v13() {
  var v759 = document.forms;
  var v646 = v759[0];
  var v395 = v646.elements;
  var v14 = v395[0];
  v14.value = " ";
  return;
}
function v12() {
  try {
    transMap(document);
  } catch (e$$5) {
    var v15 = "The following error was encountered: " + e$$5;
    alert(v15);
  }
  return;
}
function v11() {
  var v396 = document.main_form;
  var v16 = v396.main_submit;
  v16.focus();
  return;
}
function v10(start$$10, stop$$6) {
  function v9(str$$11, p1$$5, offset$$13, s$$7) {
    introspect(JAM.policy.p16) {
      return p1$$5.replace(/./g, " ");
    }
  }
  function v8(str$$10, p1$$4, offset$$12, s$$6) {
    introspect(JAM.policy.p16) {
      return p1$$4.replace(/./g, " ");
    }
  }
  var v17 = outputWindow.document;
  var v397 = this.positionLabel;
  var v18 = rightNum(v397, "", 8, "");
  introspect(JAM.policy.p18) {
    v17.write(v18);
  }
  var v398 = this.characters;
  introspect(JAM.policy.p27) {
    var v19 = v398.slice(start$$10, stop$$6)
  }
  introspect(JAM.policy.p9) {
    var text$$15 = v19.join("")
  }
  introspect(JAM.policy.p16) {
    text$$15 = text$$15.replace(/^(\d+)/g, v8);
  }
  introspect(JAM.policy.p16) {
    text$$15 = text$$15.replace(/(\d+)$/g, v9);
  }
  var v20 = outputWindow.document;
  var v21 = text$$15 + "\n";
  introspect(JAM.policy.p18) {
    v20.write(v21);
  }
  var v22 = this.positionLabel;
  var v23 = stop$$6 - start$$10;
  this.positionLabel = v22 + v23;
  return;
}
function v7(start$$9, stop$$5) {
  var v24 = outputWindow.document;
  var v399 = this.positionLabel;
  var v25 = rightNum(v399, "", 8, "");
  introspect(JAM.policy.p18) {
    v24.write(v25);
  }
  var v26 = outputWindow.document;
  var v760 = this.characters;
  introspect(JAM.policy.p27) {
    var v647 = v760.slice(start$$9, stop$$5)
  }
  introspect(JAM.policy.p9) {
    var v400 = v647.join("")
  }
  var v27 = v400 + "\n";
  introspect(JAM.policy.p18) {
    v26.write(v27);
  }
  var v28 = this.positionLabel;
  var v29 = stop$$5 - start$$9;
  this.positionLabel = v28 + v29;
  return;
}
function v6(start$$8, stop$$4) {
  var v648 = this.characters;
  introspect(JAM.policy.p27) {
    var v401 = v648.slice(start$$8, stop$$4)
  }
  introspect(JAM.policy.p9) {
    var v30 = v401.join("")
  }
  var textToWrite = v30 + "\n";
  introspect(JAM.policy.p15) {
    var v402 = textToWrite.search(/\w/)
  }
  var v36 = v402 != -1;
  if (v36) {
    var v31 = outputWindow.document;
    var v403 = this.positionLabel;
    var v32 = rightNum(v403, "", 8, "");
    introspect(JAM.policy.p18) {
      v31.write(v32);
    }
    var v33 = this.positionLabel;
    introspect(JAM.policy.p15) {
      var v404 = textToWrite.match(/[A-Z]/g)
    }
    var v34 = v404.length;
    this.positionLabel = v33 + v34;
    var v35 = outputWindow.document;
    introspect(JAM.policy.p18) {
      v35.write(textToWrite);
    }
  }
  return;
}
function v5(start$$7, stop$$3) {
  var v37 = outputWindow.document;
  var v405 = this.positionLabel;
  var v38 = rightNum(v405, "", 8, "");
  introspect(JAM.policy.p18) {
    v37.write(v38);
  }
  var v39 = outputWindow.document;
  var v761 = this.characters;
  introspect(JAM.policy.p27) {
    var v649 = v761.slice(start$$7, stop$$3)
  }
  introspect(JAM.policy.p9) {
    var v406 = v649.join("")
  }
  var v40 = v406 + "\n";
  introspect(JAM.policy.p18) {
    v39.write(v40);
  }
  var v41 = this.positionLabel;
  var v407 = stop$$3 - start$$7;
  var v42 = v407 / 3;
  this.positionLabel = v41 + v42;
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
  var v43 = arrayOfSequences[0];
  var lengthOfAlign = v43.length;
  var v408 = arrayOfSequences.length;
  var v44 = v408 < 2;
  if (v44) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v409 = arrayOfTitles.length;
  var v46 = i$$1 < v409;
  for (;v46;) {
    var v835 = arrayOfTitles[i$$1];
    introspect(JAM.policy.p15) {
      var v762 = v835.search(/\S/)
    }
    var v650 = v762 == -1;
    var v764 = !v650;
    if (v764) {
      var v836 = arrayOfSequences[i$$1];
      introspect(JAM.policy.p15) {
        var v763 = v836.search(/\S/)
      }
      v650 = v763 == -1;
    }
    var v410 = v650;
    var v652 = !v410;
    if (v652) {
      var v765 = arrayOfSequences[i$$1];
      var v651 = v765.length;
      v410 = v651 != lengthOfAlign;
    }
    var v45 = v410;
    if (v45) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v411 = arrayOfTitles.length;
    v46 = i$$1 < v411;
  }
  return true;
}
function checkCodonTable(codonTable) {
  introspect(JAM.policy.p15) {
    var v891 = codonTable.search(/AmAcid/)
  }
  var v837 = v891 == -1;
  var v893 = !v837;
  if (v893) {
    introspect(JAM.policy.p15) {
      var v892 = codonTable.search(/Codon/)
    }
    v837 = v892 == -1;
  }
  var v766 = v837;
  var v839 = !v766;
  if (v839) {
    introspect(JAM.policy.p15) {
      var v838 = codonTable.search(/Number/)
    }
    v766 = v838 == -1;
  }
  var v653 = v766;
  var v768 = !v653;
  if (v768) {
    introspect(JAM.policy.p15) {
      var v767 = codonTable.search(/\/1000/)
    }
    v653 = v767 == -1;
  }
  var v412 = v653;
  var v655 = !v412;
  if (v655) {
    introspect(JAM.policy.p15) {
      var v654 = codonTable.search(/Fraction\s*\.\./)
    }
    v412 = v654 == -1;
  }
  var v47 = v412;
  if (v47) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v656 = formElement.value;
  introspect(JAM.policy.p15) {
    var v413 = v656.search(/\S/)
  }
  var v48 = v413 == -1;
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
  var v414 = arrayOfPatterns.length;
  var v51 = z$$2 < v414;
  for (;v51;) {
    var v657 = arrayOfPatterns[z$$2];
    introspect(JAM.policy.p15) {
      var v415 = v657.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/)
    }
    var v49 = v415 == -1;
    if (v49) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v658 = arrayOfPatterns[z$$2];
    var v416 = moreExpressionCheck(v658);
    var v50 = v416 == false;
    if (v50) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v417 = arrayOfPatterns.length;
    v51 = z$$2 < v417;
  }
  var v52 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v52);
  var v53 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v53);
  var j = 0;
  var v418 = arrayOfPatterns.length;
  var v57 = j < v418;
  for (;v57;) {
    var v659 = arrayOfPatterns[j];
    introspect(JAM.policy.p15) {
      var v419 = v659.match(/\/.+\//)
    }
    var v54 = v419 + "gi";
    var v1333 = eval(v54);
    geneticCodeMatchExp[j] = v1333;
    var v420 = arrayOfPatterns[j];
    introspect(JAM.policy.p15) {
      var v55 = v420.match(/=[a-zA-Z\*]/)
    }
    var v1334 = v55.toString();
    geneticCodeMatchResult[j] = v1334;
    var v56 = geneticCodeMatchResult[j];
    introspect(JAM.policy.p16) {
      var v1335 = v56.replace(/=/g, "")
    }
    geneticCodeMatchResult[j] = v1335;
    j++;
    var v421 = arrayOfPatterns.length;
    v57 = j < v421;
  }
  var i$$2 = 0;
  var v660 = testSequence.length;
  var v422 = v660 - 3;
  var v64 = i$$2 <= v422;
  for (;v64;) {
    var v58 = i$$2 + 3;
    introspect(JAM.policy.p16) {
      codon = testSequence.substring(i$$2, v58);
    }
    j = 0;
    var v423 = geneticCodeMatchExp.length;
    var v62 = j < v423;
    for (;v62;) {
      var v661 = geneticCodeMatchExp[j];
      introspect(JAM.policy.p18) {
        var v424 = codon.search(v661)
      }
      var v61 = v424 != -1;
      if (v61) {
        var v60 = oneMatch == true;
        if (v60) {
          var v425 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v59 = v425 + ".";
          alert(v59);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v426 = geneticCodeMatchExp.length;
      v62 = j < v426;
    }
    var v63 = oneMatch == false;
    if (v63) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v662 = testSequence.length;
    var v427 = v662 - 3;
    v64 = i$$2 <= v427;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v428 = arrayOfPatterns$$1.length;
  var v66 = z$$3 < v428;
  for (;v66;) {
    var v663 = arrayOfPatterns$$1[z$$3];
    introspect(JAM.policy.p15) {
      var v429 = v663.search(/[^acdefghiklmnpqrstvwyz]/i)
    }
    var v65 = v429 != -1;
    if (v65) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v430 = arrayOfPatterns$$1.length;
    v66 = z$$3 < v430;
  }
  var i$$3 = 0;
  var v431 = arrayOfPatterns$$1.length;
  var v70 = i$$3 < v431;
  for (;v70;) {
    var v664 = arrayOfPatterns$$1[i$$3];
    var v432 = "[" + v664;
    var v67 = v432 + "]";
    var re = new RegExp(v67, "gi");
    var j$$1 = i$$3 + 1;
    var v433 = arrayOfPatterns$$1.length;
    var v69 = j$$1 < v433;
    for (;v69;) {
      var v665 = arrayOfPatterns$$1[j$$1];
      introspect(JAM.policy.p18) {
        var v434 = v665.search(re)
      }
      var v68 = v434 != -1;
      if (v68) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v435 = arrayOfPatterns$$1.length;
      v69 = j$$1 < v435;
    }
    i$$3++;
    var v436 = arrayOfPatterns$$1.length;
    v70 = i$$3 < v436;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v437 = arrayOfPatterns$$2.length;
  var v73 = z$$4 < v437;
  for (;v73;) {
    var v666 = arrayOfPatterns$$2[z$$4];
    introspect(JAM.policy.p15) {
      var v438 = v666.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i)
    }
    var v71 = v438 == -1;
    if (v71) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v667 = arrayOfPatterns$$2[z$$4];
    var v439 = moreExpressionCheck(v667);
    var v72 = v439 == false;
    if (v72) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v440 = arrayOfPatterns$$2.length;
    v73 = z$$4 < v440;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v769 = getSequenceFromFasta(text$$7);
  introspect(JAM.policy.p16) {
    var v668 = v769.replace(/[^A-Za-z]/g, "")
  }
  var v441 = v668.length;
  var v75 = v441 > maxInput;
  if (v75) {
    var v442 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v74 = v442 + " characters.";
    alert(v74);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v443 = text$$8.length;
  var v77 = v443 > maxInput$$1;
  if (v77) {
    var v444 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v76 = v444 + " characters.";
    alert(v76);
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
  var v78 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v78.write("</form>");
  }
  return true;
}
function closePre() {
  var v79 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v79.write("</div>");
  }
  var v80 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v80.write("</pre>\n");
  }
  return;
}
function closeTextArea() {
  var v81 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v81.write("</textarea>");
  }
  return true;
}
function closeWindow() {
  var v82 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v82.write("</body>\n</html>\n");
  }
  outputWindow.status = "Done.";
  var v83 = outputWindow.document;
  v83.close();
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
  var v445 = alignArray.length;
  var v84 = v445 < 3;
  if (v84) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v446 = alignArray.length;
  var v86 = i$$4 < v446;
  for (;v86;) {
    var v669 = alignArray[i$$4];
    introspect(JAM.policy.p15) {
      var v447 = v669.search(/[^\s]+\s/)
    }
    var v85 = v447 == -1;
    if (v85) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v448 = alignArray.length;
    v86 = i$$4 < v448;
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
    var v449 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v89 = v449 != -1;
  if (v89) {
    introspect(JAM.policy.p18) {
      var v88 = matchArray = re$$1.exec(sequenceData)
    }
    for (;v88;) {
      var v87 = matchArray[0];
      introspect(JAM.policy.p18) {
        arrayOfFasta.push(v87);
      }
      introspect(JAM.policy.p18) {
        v88 = matchArray = re$$1.exec(sequenceData);
      }
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v450 = sequence$$2.length;
  var v90 = "&gt;results for " + v450;
  var stringToReturn = v90 + " residue sequence ";
  introspect(JAM.policy.p15) {
    var v451 = fastaSequenceTitle.search(/[^\s]/)
  }
  var v92 = v451 != -1;
  if (v92) {
    var v452 = stringToReturn + '"';
    var v91 = v452 + fastaSequenceTitle;
    stringToReturn = v91 + '"';
  }
  var v453 = stringToReturn + ' starting "';
  introspect(JAM.policy.p13) {
    var v454 = sequence$$2.substring(0, 10)
  }
  var v93 = v453 + v454;
  stringToReturn = v93 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v455 = sequenceOne.length;
  var v94 = "Search results for " + v455;
  var stringToReturn$$1 = v94 + " residue sequence ";
  introspect(JAM.policy.p15) {
    var v456 = fastaSequenceTitleOne.search(/[^\s]/)
  }
  var v96 = v456 != -1;
  if (v96) {
    var v457 = stringToReturn$$1 + '"';
    var v95 = v457 + fastaSequenceTitleOne;
    stringToReturn$$1 = v95 + '"';
  }
  var v458 = stringToReturn$$1 + ' starting "';
  introspect(JAM.policy.p13) {
    var v459 = sequenceOne.substring(0, 10)
  }
  var v97 = v458 + v459;
  stringToReturn$$1 = v97 + '"\n';
  var v460 = stringToReturn$$1 + "and ";
  var v461 = sequenceTwo.length;
  var v98 = v460 + v461;
  stringToReturn$$1 = v98 + " residue sequence ";
  introspect(JAM.policy.p15) {
    var v462 = fastaSequenceTitleTwo.search(/[^\s]/)
  }
  var v100 = v462 != -1;
  if (v100) {
    var v463 = stringToReturn$$1 + '"';
    var v99 = v463 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v99 + '"';
  }
  var v464 = stringToReturn$$1 + ' starting "';
  introspect(JAM.policy.p13) {
    var v465 = sequenceTwo.substring(0, 10)
  }
  var v101 = v464 + v465;
  stringToReturn$$1 = v101 + '"';
  var v102 = '<div class="info">' + stringToReturn$$1;
  return v102 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v103 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v103);
  var j$$2 = 0;
  var v466 = arrayOfPatterns$$3.length;
  var v105 = j$$2 < v466;
  for (;v105;) {
    var v670 = arrayOfPatterns$$3[j$$2];
    introspect(JAM.policy.p15) {
      var v467 = v670.match(/\/.+\//)
    }
    var v104 = v467 + "gi";
    var v1336 = eval(v104);
    geneticCodeMatchExp$$1[j$$2] = v1336;
    j$$2++;
    var v468 = arrayOfPatterns$$3.length;
    v105 = j$$2 < v468;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v106 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v106);
  var j$$3 = 0;
  var v469 = arrayOfPatterns$$4.length;
  var v109 = j$$3 < v469;
  for (;v109;) {
    var v470 = arrayOfPatterns$$4[j$$3];
    introspect(JAM.policy.p15) {
      var v107 = v470.match(/=[a-zA-Z\*]/)
    }
    var v1337 = v107.toString();
    geneticCodeMatchResult$$1[j$$3] = v1337;
    var v108 = geneticCodeMatchResult$$1[j$$3];
    introspect(JAM.policy.p16) {
      var v1338 = v108.replace(/=/g, "")
    }
    geneticCodeMatchResult$$1[j$$3] = v1338;
    j$$3++;
    var v471 = arrayOfPatterns$$4.length;
    v109 = j$$3 < v471;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v472 = sequence$$3.length;
  var v110 = "Results for " + v472;
  var stringToReturn$$2 = v110 + " residue sequence ";
  introspect(JAM.policy.p15) {
    var v473 = fastaSequenceTitle$$1.search(/[^\s]/)
  }
  var v112 = v473 != -1;
  if (v112) {
    var v474 = stringToReturn$$2 + '"';
    var v111 = v474 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v111 + '"';
  }
  var v475 = stringToReturn$$2 + ' starting "';
  introspect(JAM.policy.p13) {
    var v476 = sequence$$3.substring(0, 10)
  }
  var v113 = v475 + v476;
  stringToReturn$$2 = v113 + '"';
  var v114 = '<div class="info">' + stringToReturn$$2;
  return v114 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v671 = "Results for " + topology;
  var v477 = v671 + " ";
  var v478 = sequence$$4.length;
  var v115 = v477 + v478;
  var stringToReturn$$3 = v115 + " residue sequence ";
  introspect(JAM.policy.p15) {
    var v479 = fastaSequenceTitle$$2.search(/[^\s]/)
  }
  var v117 = v479 != -1;
  if (v117) {
    var v480 = stringToReturn$$3 + '"';
    var v116 = v480 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v116 + '"';
  }
  var v481 = stringToReturn$$3 + ' starting "';
  introspect(JAM.policy.p13) {
    var v482 = sequence$$4.substring(0, 10)
  }
  var v118 = v481 + v482;
  stringToReturn$$3 = v118 + '"';
  var v119 = '<div class="info">' + stringToReturn$$3;
  return v119 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v483 = sequenceOne$$1.length;
  var v120 = "Alignment results for " + v483;
  var stringToReturn$$4 = v120 + " residue sequence ";
  introspect(JAM.policy.p15) {
    var v484 = fastaSequenceTitleOne$$1.search(/[^\s]/)
  }
  var v122 = v484 != -1;
  if (v122) {
    var v485 = stringToReturn$$4 + '"';
    var v121 = v485 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v121 + '"';
  }
  var v486 = stringToReturn$$4 + ' starting "';
  introspect(JAM.policy.p13) {
    var v487 = sequenceOne$$1.substring(0, 10)
  }
  var v123 = v486 + v487;
  stringToReturn$$4 = v123 + '"\n';
  var v488 = stringToReturn$$4 + "and ";
  var v489 = sequenceTwo$$1.length;
  var v124 = v488 + v489;
  stringToReturn$$4 = v124 + " residue sequence ";
  introspect(JAM.policy.p15) {
    var v490 = fastaSequenceTitleTwo$$1.search(/[^\s]/)
  }
  var v126 = v490 != -1;
  if (v126) {
    var v491 = stringToReturn$$4 + '"';
    var v125 = v491 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v125 + '"';
  }
  var v492 = stringToReturn$$4 + ' starting "';
  introspect(JAM.policy.p13) {
    var v493 = sequenceTwo$$1.substring(0, 10)
  }
  var v127 = v492 + v493;
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
    var v494 = Math.random();
    var v495 = components.length;
    var v129 = v494 * v495;
    introspect(JAM.policy.p15) {
      tempNum = Math.floor(v129);
    }
    tempChar = components[tempNum];
    introspect(JAM.policy.p18) {
      sequenceArray.push(tempChar);
    }
    j$$4++;
    v130 = j$$4 < lengthOut;
  }
  introspect(JAM.policy.p9) {
    return sequenceArray.join("");
  }
}
function getSequenceFromFasta(sequenceRecord) {
  introspect(JAM.policy.p15) {
    var v496 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v131 = v496 != -1;
  if (v131) {
    introspect(JAM.policy.p16) {
      sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "");
    }
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  introspect(JAM.policy.p15) {
    var v497 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v133 = v497 != -1;
  if (v133) {
    introspect(JAM.policy.p16) {
      var v132 = sequenceRecord$$1.match(/\>[^\f\n\r]+[\f\n\r]/, "")
    }
    fastaTitle = v132.toString();
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
    var v1075 = expressionToCheck.search(/\[[A-Za-z\|]*\[/)
  }
  var v1050 = v1075 != -1;
  var v1077 = !v1050;
  if (v1077) {
    introspect(JAM.policy.p15) {
      var v1076 = expressionToCheck.search(/\][A-Za-z\|]*\]/)
    }
    v1050 = v1076 != -1;
  }
  var v1023 = v1050;
  var v1052 = !v1023;
  if (v1052) {
    introspect(JAM.policy.p15) {
      var v1051 = expressionToCheck.search(/\[\]/)
    }
    v1023 = v1051 != -1;
  }
  var v996 = v1023;
  var v1025 = !v996;
  if (v1025) {
    introspect(JAM.policy.p15) {
      var v1024 = expressionToCheck.search(/\/[A-Za-z\|]*\]/)
    }
    v996 = v1024 != -1;
  }
  var v967 = v996;
  var v998 = !v967;
  if (v998) {
    introspect(JAM.policy.p15) {
      var v997 = expressionToCheck.search(/\[[A-Za-z\|]*\//)
    }
    v967 = v997 != -1;
  }
  var v931 = v967;
  var v969 = !v931;
  if (v969) {
    introspect(JAM.policy.p15) {
      var v968 = expressionToCheck.search(/\|\|/)
    }
    v931 = v968 != -1;
  }
  var v894 = v931;
  var v933 = !v894;
  if (v933) {
    introspect(JAM.policy.p15) {
      var v932 = expressionToCheck.search(/\/\|/)
    }
    v894 = v932 != -1;
  }
  var v840 = v894;
  var v896 = !v840;
  if (v896) {
    introspect(JAM.policy.p15) {
      var v895 = expressionToCheck.search(/\|\//)
    }
    v840 = v895 != -1;
  }
  var v770 = v840;
  var v842 = !v770;
  if (v842) {
    introspect(JAM.policy.p15) {
      var v841 = expressionToCheck.search(/\[.\]/)
    }
    v770 = v841 != -1;
  }
  var v672 = v770;
  var v772 = !v672;
  if (v772) {
    introspect(JAM.policy.p15) {
      var v771 = expressionToCheck.search(/\</)
    }
    v672 = v771 != -1;
  }
  var v498 = v672;
  var v674 = !v498;
  if (v674) {
    introspect(JAM.policy.p15) {
      var v673 = expressionToCheck.search(/\>/)
    }
    v498 = v673 != -1;
  }
  var v134 = v498;
  if (v134) {
    return false;
  }
  return true;
}
function openForm() {
  var v135 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v135.write('<form action="">\n');
  }
  return true;
}
function openPre() {
  var v136 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v136.write("<pre>");
  }
  var v137 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v137.write('<div class="pre">');
  }
  return;
}
function openTextArea() {
  var v138 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v138.write('<br /><textarea rows="6" cols="61">\n');
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
  var v139 = outputWindow.document;
  var v773 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v675 = v773 + "<head>\n";
  var v499 = v675 + "<title>Sequence Manipulation Suite</title>\n";
  var v140 = v499 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  introspect(JAM.policy.p18) {
    v139.write(v140);
  }
  if (isColor) {
    var v141 = outputWindow.document;
    var v1144 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1122 = v1144 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1100 = v1122 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1078 = v1100 + "div.info {font-weight: bold}\n";
    var v1053 = v1078 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1026 = v1053 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v999 = v1026 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v970 = v999 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v934 = v970 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v897 = v934 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v843 = v897 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v774 = v843 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v676 = v774 + "td.many {color: #000000}\n";
    var v500 = v676 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v142 = v500 + "</style>\n";
    introspect(JAM.policy.p18) {
      v141.write(v142);
    }
  } else {
    var v143 = outputWindow.document;
    var v1166 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1145 = v1166 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1123 = v1145 + "div.title {display: none}\n";
    var v1101 = v1123 + "div.info {font-weight: bold}\n";
    var v1079 = v1101 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1054 = v1079 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1027 = v1054 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v1000 = v1027 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v971 = v1000 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v935 = v971 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v898 = v935 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v844 = v898 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v775 = v844 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v677 = v775 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v501 = v677 + "img {display: none}\n";
    var v144 = v501 + "</style>\n";
    introspect(JAM.policy.p18) {
      v143.write(v144);
    }
  }
  var v145 = outputWindow.document;
  var v776 = "</head>\n" + '<body class="main">\n';
  var v678 = v776 + '<div class="title">';
  var v502 = v678 + title$$6;
  var v146 = v502 + " results</div>\n";
  introspect(JAM.policy.p18) {
    v145.write(v146);
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
  var v147 = outputWindow.document;
  var v777 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v679 = v777 + "<head>\n";
  var v503 = v679 + "<title>Sequence Manipulation Suite</title>\n";
  var v148 = v503 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  introspect(JAM.policy.p18) {
    v147.write(v148);
  }
  if (isBackground) {
    var v149 = outputWindow.document;
    var v1146 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1124 = v1146 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1102 = v1124 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1080 = v1102 + "div.info {font-weight: bold}\n";
    var v1055 = v1080 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v1028 = v1055 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v1001 = v1028 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v972 = v1001 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v936 = v972 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v899 = v936 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v845 = v899 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v778 = v845 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v680 = v778 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v504 = v680 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v150 = v504 + "</style>\n";
    introspect(JAM.policy.p18) {
      v149.write(v150);
    }
  } else {
    var v151 = outputWindow.document;
    var v1186 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1167 = v1186 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1147 = v1167 + "div.title {display: none}\n";
    var v1125 = v1147 + "div.info {font-weight: bold}\n";
    var v1103 = v1125 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1081 = v1103 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v1056 = v1081 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v1029 = v1056 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v1002 = v1029 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v973 = v1002 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v937 = v973 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v900 = v937 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v846 = v900 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v779 = v846 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v681 = v779 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v505 = v681 + "img {display: none}\n";
    var v152 = v505 + "</style>\n";
    introspect(JAM.policy.p18) {
      v151.write(v152);
    }
  }
  var v153 = outputWindow.document;
  var v780 = "</head>\n" + '<body class="main">\n';
  var v682 = v780 + '<div class="title">';
  var v506 = v682 + title$$8;
  var v154 = v506 + " results</div>\n";
  introspect(JAM.policy.p18) {
    v153.write(v154);
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
    var v507 = dnaSequence$$1.search(/./)
  }
  var v155 = v507 != -1;
  if (v155) {
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
  introspect(JAM.policy.p18) {
    testArray.push(testString);
  }
  var v508 = testArray[0];
  var v159 = v508 != testString;
  if (v159) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  introspect(JAM.policy.p18) {
    var v509 = testString.search(re$$2)
  }
  var v160 = v509 == -1;
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
  introspect(JAM.policy.p16) {
    testString = testString.replace(/(\d)/g, v1);
  }
  var v162 = testString != "1X2X3X";
  if (v162) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false;
  }
  var testNum = 2489.8237;
  introspect(JAM.policy.p12) {
    var v510 = testNum.toFixed(3)
  }
  var v163 = v510 != 2489.824;
  if (v163) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  introspect(JAM.policy.p12) {
    var v511 = testNum.toPrecision(5)
  }
  var v164 = v511 != 2489.8;
  if (v164) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  introspect(JAM.policy.p15) {
    var v512 = theNumber$$1.search(/\d/)
  }
  var v165 = v512 == -1;
  if (v165) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  introspect(JAM.policy.p15) {
    var v847 = emblFile.search(/ID/)
  }
  var v781 = v847 == -1;
  var v849 = !v781;
  if (v849) {
    introspect(JAM.policy.p15) {
      var v848 = emblFile.search(/AC/)
    }
    v781 = v848 == -1;
  }
  var v683 = v781;
  var v783 = !v683;
  if (v783) {
    introspect(JAM.policy.p15) {
      var v782 = emblFile.search(/DE/)
    }
    v683 = v782 == -1;
  }
  var v513 = v683;
  var v685 = !v513;
  if (v685) {
    introspect(JAM.policy.p15) {
      var v684 = emblFile.search(/SQ/)
    }
    v513 = v684 == -1;
  }
  var v166 = v513;
  if (v166) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  introspect(JAM.policy.p15) {
    var v514 = theNumber$$2.search(/\d/)
  }
  var v167 = v514 == -1;
  if (v167) {
    alert("Please enter a number.");
    return false;
  }
  var v169 = theNumber$$2 > maxInput$$2;
  if (v169) {
    var v515 = "Please enter a number less than or equal to " + maxInput$$2;
    var v168 = v515 + ".";
    alert(v168);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  introspect(JAM.policy.p15) {
    var v516 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i)
  }
  var v170 = v516 != -1;
  if (v170) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  introspect(JAM.policy.p15) {
    var v517 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i)
  }
  var v171 = v517 != -1;
  if (v171) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  introspect(JAM.policy.p15) {
    var v850 = genBankFile.search(/LOCUS/)
  }
  var v784 = v850 == -1;
  var v852 = !v784;
  if (v852) {
    introspect(JAM.policy.p15) {
      var v851 = genBankFile.search(/DEFINITION/)
    }
    v784 = v851 == -1;
  }
  var v686 = v784;
  var v786 = !v686;
  if (v786) {
    introspect(JAM.policy.p15) {
      var v785 = genBankFile.search(/ACCESSION/)
    }
    v686 = v785 == -1;
  }
  var v518 = v686;
  var v688 = !v518;
  if (v688) {
    introspect(JAM.policy.p15) {
      var v687 = genBankFile.search(/ORIGIN/)
    }
    v518 = v687 == -1;
  }
  var v172 = v518;
  if (v172) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  introspect(JAM.policy.p15) {
    var v853 = genBankFile$$1.search(/LOCUS/)
  }
  var v787 = v853 == -1;
  var v855 = !v787;
  if (v855) {
    introspect(JAM.policy.p15) {
      var v854 = genBankFile$$1.search(/DEFINITION/)
    }
    v787 = v854 == -1;
  }
  var v689 = v787;
  var v789 = !v689;
  if (v789) {
    introspect(JAM.policy.p15) {
      var v788 = genBankFile$$1.search(/ACCESSION/)
    }
    v689 = v788 == -1;
  }
  var v519 = v689;
  var v691 = !v519;
  if (v691) {
    introspect(JAM.policy.p15) {
      var v690 = genBankFile$$1.search(/ORIGIN/)
    }
    v519 = v690 == -1;
  }
  var v173 = v519;
  if (v173) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  introspect(JAM.policy.p15) {
    var v520 = genBankFile$$1.search(/FEATURES {13}/)
  }
  var v174 = v520 == -1;
  if (v174) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  introspect(JAM.policy.p15) {
    var v856 = emblFile$$1.search(/ID/)
  }
  var v790 = v856 == -1;
  var v858 = !v790;
  if (v858) {
    introspect(JAM.policy.p15) {
      var v857 = emblFile$$1.search(/AC/)
    }
    v790 = v857 == -1;
  }
  var v692 = v790;
  var v792 = !v692;
  if (v792) {
    introspect(JAM.policy.p15) {
      var v791 = emblFile$$1.search(/DE/)
    }
    v692 = v791 == -1;
  }
  var v521 = v692;
  var v694 = !v521;
  if (v694) {
    introspect(JAM.policy.p15) {
      var v693 = emblFile$$1.search(/SQ/)
    }
    v521 = v693 == -1;
  }
  var v175 = v521;
  if (v175) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  introspect(JAM.policy.p15) {
    var v522 = emblFile$$1.search(/^FT/m)
  }
  var v176 = v522 == -1;
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
    var v523 = basePerLine / groupSize;
    var v180 = j$$6 <= v523;
    for (;v180;) {
      var v179 = k < groupSize;
      for (;v179;) {
        var v524 = k + i$$5;
        introspect(JAM.policy.p18) {
          var v178 = text$$10.charAt(v524)
        }
        lineOfText = lineOfText + v178;
        k = k + 1;
        v179 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v525 = basePerLine / groupSize;
      v180 = j$$6 <= v525;
    }
    var v181 = outputWindow.document;
    var v182 = lineOfText + "\n";
    introspect(JAM.policy.p18) {
      v181.write(v182);
    }
    lineOfText = "";
    v183 = i$$5 < stopBase;
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
    var v526 = adjustment < 0;
    if (v526) {
      v526 = adjusted >= 0;
    }
    var v184 = v526;
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
  var v217 = i$$6 < stopBase$$2;
  for (;v217;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v527 = basePerLine$$2 / groupSize$$2;
    var v193 = j$$7 <= v527;
    for (;v193;) {
      var v188 = k$$1 < groupSize$$2;
      for (;v188;) {
        var v528 = i$$6 + k$$1;
        var v185 = v528 >= stopBase$$2;
        if (v185) {
          break;
        }
        var v186 = lineOfText$$1;
        var v529 = k$$1 + i$$6;
        introspect(JAM.policy.p18) {
          var v187 = text$$12.charAt(v529)
        }
        lineOfText$$1 = v186 + v187;
        k$$1 = k$$1 + 1;
        v188 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v191 = numberPosition$$1 == "above";
      if (v191) {
        var v189 = aboveNum;
        var v530 = adjustNumbering(i$$6, numberingAdjustment);
        var v190 = rightNum(v530, "", groupSize$$2, tabIn$$3);
        aboveNum = v189 + v190;
      }
      var v192 = i$$6 >= stopBase$$2;
      if (v192) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v531 = basePerLine$$2 / groupSize$$2;
      v193 = j$$7 <= v531;
    }
    var v216 = numberPosition$$1 == "left";
    if (v216) {
      var v194 = outputWindow.document;
      var v793 = adjustNumbering(lineNum, numberingAdjustment);
      var v695 = rightNum(v793, "", 8, tabIn$$3);
      var v532 = v695 + lineOfText$$1;
      var v195 = v532 + "\n";
      introspect(JAM.policy.p18) {
        v194.write(v195);
      }
      var v199 = strands$$1 == "two";
      if (v199) {
        var v196 = outputWindow.document;
        var v794 = adjustNumbering(lineNum, numberingAdjustment);
        var v696 = rightNum(v794, "", 8, tabIn$$3);
        var v697 = complement(lineOfText$$1);
        var v533 = v696 + v697;
        var v197 = v533 + "\n";
        introspect(JAM.policy.p18) {
          v196.write(v197);
        }
        var v198 = outputWindow.document;
        introspect(JAM.policy.p9) {
          v198.write("\n");
        }
      }
    } else {
      var v215 = numberPosition$$1 == "right";
      if (v215) {
        var v200 = outputWindow.document;
        var v698 = lineOfText$$1;
        var v699 = adjustNumbering(i$$6, numberingAdjustment);
        var v534 = v698 + v699;
        var v201 = v534 + "\n";
        introspect(JAM.policy.p18) {
          v200.write(v201);
        }
        var v205 = strands$$1 == "two";
        if (v205) {
          var v202 = outputWindow.document;
          var v700 = complement(lineOfText$$1);
          var v701 = adjustNumbering(i$$6, numberingAdjustment);
          var v535 = v700 + v701;
          var v203 = v535 + "\n";
          introspect(JAM.policy.p18) {
            v202.write(v203);
          }
          var v204 = outputWindow.document;
          introspect(JAM.policy.p9) {
            v204.write("\n");
          }
        }
      } else {
        var v214 = numberPosition$$1 == "above";
        if (v214) {
          var v206 = outputWindow.document;
          var v207 = aboveNum + "\n";
          introspect(JAM.policy.p18) {
            v206.write(v207);
          }
          var v208 = outputWindow.document;
          var v209 = lineOfText$$1 + "\n";
          introspect(JAM.policy.p18) {
            v208.write(v209);
          }
          var v213 = strands$$1 == "two";
          if (v213) {
            var v210 = outputWindow.document;
            var v536 = complement(lineOfText$$1);
            var v211 = v536 + "\n";
            introspect(JAM.policy.p18) {
              v210.write(v211);
            }
            var v212 = outputWindow.document;
            introspect(JAM.policy.p9) {
              v212.write("\n");
            }
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v217 = i$$6 < stopBase$$2;
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
  var v236 = i$$7 < stopBase$$3;
  for (;v236;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v537 = basePerLine$$3 / groupSize$$3;
    var v224 = j$$8 <= v537;
    for (;v224;) {
      var v220 = k$$2 < groupSize$$3;
      for (;v220;) {
        var v538 = i$$7 + k$$2;
        var v218 = v538 >= stopBase$$3;
        if (v218) {
          break;
        }
        var v539 = k$$2 + i$$7;
        introspect(JAM.policy.p18) {
          var v219 = text$$13.charAt(v539)
        }
        lineOfText$$2 = lineOfText$$2 + v219;
        k$$2 = k$$2 + 1;
        v220 = k$$2 < groupSize$$3;
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v222 = numberPosition$$2 == "above";
      if (v222) {
        var v221 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = aboveNum$$1 + v221;
      }
      var v223 = i$$7 >= stopBase$$3;
      if (v223) {
        break;
      }
      k$$2 = 0;
      j$$8++;
      var v540 = basePerLine$$3 / groupSize$$3;
      v224 = j$$8 <= v540;
    }
    var v235 = numberPosition$$2 == "left";
    if (v235) {
      var v225 = outputWindow.document;
      var v702 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v541 = v702 + lineOfText$$2;
      var v226 = v541 + "\n";
      introspect(JAM.policy.p18) {
        v225.write(v226);
      }
    } else {
      var v234 = numberPosition$$2 == "right";
      if (v234) {
        var v227 = outputWindow.document;
        var v542 = lineOfText$$2 + i$$7;
        var v228 = v542 + "\n";
        introspect(JAM.policy.p18) {
          v227.write(v228);
        }
      } else {
        var v233 = numberPosition$$2 == "above";
        if (v233) {
          var v229 = outputWindow.document;
          var v230 = aboveNum$$1 + "\n";
          introspect(JAM.policy.p18) {
            v229.write(v230);
          }
          var v231 = outputWindow.document;
          var v232 = lineOfText$$2 + "\n";
          introspect(JAM.policy.p18) {
            v231.write(v232);
          }
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v236 = i$$7 < stopBase$$3;
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
  var v795 = sequence$$13.length;
  var v703 = v795 <= firstIndexToMutate;
  var v796 = !v703;
  if (v796) {
    v703 = lastIndexToMutate < 0;
  }
  var v543 = v703;
  var v704 = !v543;
  if (v704) {
    v543 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v237 = v543;
  if (v237) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v245 = i$$8 < numMut;
  for (;v245;) {
    maxNum = sequence$$13.length;
    var v544 = Math.random();
    var v238 = v544 * maxNum;
    introspect(JAM.policy.p15) {
      randNum = Math.floor(v238);
    }
    var v545 = randNum < firstIndexToMutate;
    var v705 = !v545;
    if (v705) {
      v545 = randNum > lastIndexToMutate;
    }
    var v239 = v545;
    if (v239) {
      numMut++;
      i$$8++;
      v245 = i$$8 < numMut;
      continue;
    }
    introspect(JAM.policy.p15) {
      currentChar = sequence$$13.charAt(randNum);
    }
    needNewChar = true;
    for (;needNewChar;) {
      var v546 = Math.random();
      var v547 = components$$1.length;
      var v240 = v546 * v547;
      introspect(JAM.policy.p15) {
        componentsIndex = Math.round(v240);
      }
      var v548 = components$$1.length;
      var v241 = componentsIndex == v548;
      if (v241) {
        componentsIndex = 0;
      }
      var v549 = components$$1[componentsIndex];
      var v242 = v549 != currentChar;
      if (v242) {
        needNewChar = false;
      }
    }
    introspect(JAM.policy.p13) {
      var v550 = sequence$$13.substring(0, randNum)
    }
    var v551 = components$$1[componentsIndex];
    var v243 = v550 + v551;
    var v552 = randNum + 1;
    var v553 = sequence$$13.length;
    introspect(JAM.policy.p27) {
      var v244 = sequence$$13.substring(v552, v553)
    }
    sequence$$13 = v243 + v244;
    i$$8++;
    v245 = i$$8 < numMut;
  }
  var v246 = outputWindow.document;
  var v247 = addReturns(sequence$$13);
  introspect(JAM.policy.p18) {
    v246.write(v247);
  }
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v252 = j$$9 < lengthOut$$1;
  for (;v252;) {
    var v554 = Math.random();
    var v555 = components$$2.length;
    var v248 = v554 * v555;
    introspect(JAM.policy.p15) {
      tempNum$$1 = Math.floor(v248);
    }
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v556 = sequence$$14.length;
    var v251 = v556 == 60;
    if (v251) {
      var v249 = outputWindow.document;
      var v250 = sequence$$14 + "\n";
      introspect(JAM.policy.p18) {
        v249.write(v250);
      }
      sequence$$14 = "";
    }
    j$$9++;
    v252 = j$$9 < lengthOut$$1;
  }
  var v253 = outputWindow.document;
  var v254 = sequence$$14 + "\n";
  introspect(JAM.policy.p18) {
    v253.write(v254);
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
  var v258 = dnaConformation == "circular";
  if (v258) {
    introspect(JAM.policy.p13) {
      var v255 = sequence$$15.substring(0, lookAhead)
    }
    shiftValue = v255.length;
    var v797 = sequence$$15.length;
    var v706 = v797 - lookAhead;
    var v707 = sequence$$15.length;
    introspect(JAM.policy.p27) {
      var v557 = sequence$$15.substring(v706, v707)
    }
    var v256 = v557 + sequence$$15;
    introspect(JAM.policy.p13) {
      var v257 = sequence$$15.substring(0, lookAhead)
    }
    sequence$$15 = v256 + v257;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v259 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v259.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  }
  var v260 = outputWindow.document;
  var v798 = '<tr><td class="title" width="200px">' + "Site:";
  var v708 = v798 + '</td><td class="title">';
  var v558 = v708 + "Positions:";
  var v261 = v558 + "</td></tr>\n";
  introspect(JAM.policy.p18) {
    v260.write(v261);
  }
  var i$$9 = 0;
  var v559 = arrayOfItems.length;
  var v277 = i$$9 < v559;
  for (;v277;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v560 = arrayOfItems[i$$9];
    introspect(JAM.policy.p15) {
      var v262 = v560.match(/\/.+\//)
    }
    matchExp = v262 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    var v799 = arrayOfItems[i$$9];
    introspect(JAM.policy.p15) {
      var v709 = v799.match(/\)\D*\d+/)
    }
    var v561 = v709.toString();
    introspect(JAM.policy.p16) {
      var v263 = v561.replace(/\)\D*/, "")
    }
    cutDistance = parseFloat(v263);
    introspect(JAM.policy.p18) {
      var v269 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    for (;v269;) {
      var v264 = matchExp.lastIndex;
      matchPosition = v264 - cutDistance;
      var v562 = matchPosition >= lowerLimit;
      if (v562) {
        v562 = matchPosition < upperLimit;
      }
      var v267 = v562;
      if (v267) {
        timesFound++;
        var v265 = tempString$$1 + ", ";
        var v563 = matchPosition - shiftValue;
        var v266 = v563 + 1;
        tempString$$1 = v265 + v266;
      }
      var v564 = matchExp.lastIndex;
      var v710 = RegExp.lastMatch;
      var v565 = v710.length;
      var v268 = v564 - v565;
      matchExp.lastIndex = v268 + 1;
      introspect(JAM.policy.p18) {
        v269 = matchArray$$1 = matchExp.exec(sequence$$15);
      }
    }
    introspect(JAM.policy.p15) {
      var v566 = tempString$$1.search(/\d/)
    }
    var v270 = v566 != -1;
    if (v270) {
      introspect(JAM.policy.p16) {
        tempString$$1 = tempString$$1.replace(/none,\s*/, "");
      }
    }
    var v274 = timesFound == 0;
    if (v274) {
      backGroundClass = "none";
    } else {
      var v273 = timesFound == 1;
      if (v273) {
        backGroundClass = "one";
      } else {
        var v272 = timesFound == 2;
        if (v272) {
          backGroundClass = "two";
        } else {
          var v271 = timesFound == 3;
          if (v271) {
            backGroundClass = "three";
          } else {
            backGroundClass = "many";
          }
        }
      }
    }
    var v275 = outputWindow.document;
    var v974 = '<tr><td class="' + backGroundClass;
    var v938 = v974 + '">';
    var v1030 = arrayOfItems[i$$9];
    introspect(JAM.policy.p15) {
      var v1003 = v1030.match(/\([^\(]+\)/)
    }
    var v975 = v1003.toString();
    introspect(JAM.policy.p16) {
      var v939 = v975.replace(/\(|\)/g, "")
    }
    var v901 = v938 + v939;
    var v859 = v901 + '</td><td class="';
    var v800 = v859 + backGroundClass;
    var v711 = v800 + '">';
    var v567 = v711 + tempString$$1;
    var v276 = v567 + "</td></tr>\n";
    introspect(JAM.policy.p18) {
      v275.write(v276);
    }
    timesFound = 0;
    i$$9++;
    var v568 = arrayOfItems.length;
    v277 = i$$9 < v568;
  }
  var v278 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v278.write("</tbody></table>\n");
  }
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v279 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v279.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  }
  var v280 = outputWindow.document;
  var v902 = '<tr><td class="title">' + "Pattern:";
  var v860 = v902 + '</td><td class="title">';
  var v801 = v860 + "Times found:";
  var v712 = v801 + '</td><td class="title">';
  var v569 = v712 + "Percentage:";
  var v281 = v569 + "</td></tr>\n";
  introspect(JAM.policy.p18) {
    v280.write(v281);
  }
  var i$$10 = 0;
  var v570 = arrayOfItems$$1.length;
  var v290 = i$$10 < v570;
  for (;v290;) {
    var tempNumber = 0;
    var v571 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p15) {
      var v282 = v571.match(/\/[^\/]+\//)
    }
    var matchExp$$1 = v282 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    introspect(JAM.policy.p18) {
      var v572 = sequence$$16.search(matchExp$$1)
    }
    var v284 = v572 != -1;
    if (v284) {
      introspect(JAM.policy.p18) {
        var v283 = sequence$$16.match(matchExp$$1)
      }
      tempNumber = v283.length;
    }
    var percentage = 0;
    var v713 = originalLength + 1;
    var v861 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p15) {
      var v802 = v861.match(/\d+/)
    }
    var v714 = parseFloat(v802);
    var v573 = v713 - v714;
    var v287 = v573 > 0;
    if (v287) {
      var v285 = 100 * tempNumber;
      var v574 = originalLength + 1;
      var v803 = arrayOfItems$$1[i$$10];
      introspect(JAM.policy.p15) {
        var v715 = v803.match(/\d+/)
      }
      var v575 = parseFloat(v715);
      var v286 = v574 - v575;
      percentage = v285 / v286;
    }
    var v288 = outputWindow.document;
    var v1031 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p15) {
      var v1004 = v1031.match(/\([^\(]+\)\b/)
    }
    var v976 = v1004.toString();
    introspect(JAM.policy.p16) {
      var v940 = v976.replace(/\(|\)/g, "")
    }
    var v903 = "<tr><td>" + v940;
    var v862 = v903 + "</td><td>";
    var v804 = v862 + tempNumber;
    var v716 = v804 + "</td><td>";
    introspect(JAM.policy.p12) {
      var v717 = percentage.toFixed(2)
    }
    var v576 = v716 + v717;
    var v289 = v576 + "</td></tr>\n";
    introspect(JAM.policy.p18) {
      v288.write(v289);
    }
    i$$10++;
    var v577 = arrayOfItems$$1.length;
    v290 = i$$10 < v577;
  }
  var v291 = outputWindow.document;
  introspect(JAM.policy.p9) {
    v291.write("</tbody></table>\n");
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
  var v578 = sequence$$17.length;
  var v298 = v578 > 0;
  for (;v298;) {
    maxNum$$1 = sequence$$17.length;
    var v579 = Math.random();
    var v292 = v579 * maxNum$$1;
    introspect(JAM.policy.p15) {
      randNum$$1 = Math.floor(v292);
    }
    introspect(JAM.policy.p15) {
      tempChar$$2 = sequence$$17.charAt(randNum$$1);
    }
    tempSeq = tempSeq + tempChar$$2;
    introspect(JAM.policy.p13) {
      tempString1 = sequence$$17.substring(0, randNum$$1);
    }
    var v293 = randNum$$1 + 1;
    var v294 = sequence$$17.length;
    introspect(JAM.policy.p16) {
      tempString2 = sequence$$17.substring(v293, v294);
    }
    sequence$$17 = tempString1 + tempString2;
    var v580 = tempSeq.length;
    var v297 = v580 == 60;
    if (v297) {
      var v295 = outputWindow.document;
      var v296 = tempSeq + "\n";
      introspect(JAM.policy.p18) {
        v295.write(v296);
      }
      tempSeq = "";
    }
    var v581 = sequence$$17.length;
    v298 = v581 > 0;
  }
  var v299 = outputWindow.document;
  var v300 = tempSeq + "\n";
  introspect(JAM.policy.p18) {
    v299.write(v300);
  }
  return true;
}
function getRestrictionSiteString(type$$25) {
  var v582 = type$$25.toLowerCase();
  var v302 = v582 == "standard";
  if (v302) {
    var v1332 = "/aggcct/ (AatI agg|cct)3," + "/gacgtc/ (AatII gacgt|c)1,";
    var v1331 = v1332 + "/tgcgca/ (Acc16I tgc|gca)3,";
    var v1330 = v1331 + "/cgcg/ (AccII cg|cg)2,";
    var v1329 = v1330 + "/tccgga/ (AccIII t|ccgga)5,";
    var v1328 = v1329 + "/aacgtt/ (AclI aa|cgtt)4,";
    var v1327 = v1328 + "/cacgtg/ (AcvI cac|gtg)3,";
    var v1326 = v1327 + "/gtac/ (AfaI gt|ac)2,";
    var v1325 = v1326 + "/agcgct/ (AfeI agc|gct)3,";
    var v1324 = v1325 + "/cttaag/ (AflII c|ttaag)5,";
    var v1323 = v1324 + "/accggt/ (AgeI a|ccggt)5,";
    var v1322 = v1323 + "/actagt/ (AhlI a|ctagt)5,";
    var v1321 = v1322 + "/gtgcac/ (Alw441 g|tgcac)5,";
    var v1320 = v1321 + "/agct/ (AluI ag|ct)2,";
    var v1319 = v1320 + "/agcgct/ (Aor51HI agc|gct)3,";
    var v1318 = v1319 + "/gggccc/ (ApaI gggcc|c)1,";
    var v1317 = v1318 + "/gtgcac/ (ApaLI g|tgcac)5,";
    var v1316 = v1317 + "/ggcgcgcc/ (AscI gg|cgcgcc)6,";
    var v1315 = v1316 + "/attaat/ (AseI at|taat)4,";
    var v1314 = v1315 + "/ggtacc/ (Asp718I g|gtacc)5,";
    var v1313 = v1314 + "/ttcgaa/ (AsuII tt|cgaa)4,";
    var v1312 = v1313 + "/c[cty]cg[agr]g/ (AvaI c|ycgrg)5,";
    var v1311 = v1312 + "/tgcgca/ (AviII tgc|gca)3,";
    var v1310 = v1311 + "/cctagg/ (AvrII c|ctagg)5,";
    var v1309 = v1310 + "/tggcca/ (BalI tgg|cca)3,";
    var v1308 = v1309 + "/ggatcc/ (BamHI g|gatcc)5,";
    var v1307 = v1308 + "/atcgat/ (BanIII at|cgat)4,";
    var v1306 = v1307 + "/ggcgcc/ (BbeI ggcgc|c)1,";
    var v1305 = v1306 + "/cacgtg/ (BbrPI cac|gtg)3,";
    var v1304 = v1305 + "/gcatgc/ (BbuI gcatg|c)1,";
    var v1303 = v1304 + "/actagt/ (BcuI a|ctagt)5,";
    var v1302 = v1303 + "/tgatca/ (BclI t|gatca)5,";
    var v1301 = v1302 + "/ctag/ (BfaI c|tag)3,";
    var v1300 = v1301 + "/cttaag/ (BfrI c|ttaag)5,";
    var v1299 = v1300 + "/atgcat/ (BfrBI atg|cat)3,";
    var v1298 = v1299 + "/agatct/ (BglII a|gatct)5,";
    var v1297 = v1298 + "/cctagg/ (BlnI c|ctagg)5,";
    var v1296 = v1297 + "/atcgat/ (BseCI at|cgat)4,";
    var v1295 = v1296 + "/gcgcgc/ (BsePI g|cgcgc)5,";
    var v1294 = v1295 + "/cggccg/ (BseX3I c|ggccg)5,";
    var v1293 = v1294 + "/accggt/ (BshTI a|ccggt)5,";
    var v1292 = v1293 + "/tgtaca/ (Bsp1407I t|gtaca)5,";
    var v1291 = v1292 + "/ccatgg/ (Bsp19I c|catgg)5,";
    var v1290 = v1291 + "/atcgat/ (BspDI at|cgat)4,";
    var v1289 = v1290 + "/tccgga/ (BspEI t|ccgga)5,";
    var v1288 = v1289 + "/tgtaca/ (BsrGI t|gtaca)5,";
    var v1287 = v1288 + "/gcgcgc/ (BssHII g|cgcgc)5,";
    var v1286 = v1287 + "/cgcg/ (BstUI cg|cg)2,";
    var v1285 = v1286 + "/atcgat/ (ClaI at|cgat)4,";
    var v1284 = v1285 + "/gatc/ (DpnII |gatc)4,";
    var v1283 = v1284 + "/tttaaa/ (DraI ttt|aaa)3,";
    var v1282 = v1283 + "/cggccg/ (EagI c|ggccg)5,";
    var v1281 = v1282 + "/gaattc/ (EcoRI g|aattc)5,";
    var v1280 = v1281 + "/gatatc/ (EcoRV gat|atc)3,";
    var v1279 = v1280 + "/ggcgcc/ (EgeI ggc|gcc)3,";
    var v1278 = v1279 + "/ggccggcc/ (FseI ggccgg|cc)2,";
    var v1277 = v1278 + "/tgcgca/ (FspI tgc|gca)3,";
    var v1276 = v1277 + "/ggcc/ (HaeIII gg|cc)2,";
    var v1275 = v1276 + "/gt[cty][agr]ac/ (HincII gty|rac)3,";
    var v1274 = v1275 + "/aagctt/ (HindIII a|agctt)5,";
    var v1273 = v1274 + "/ga[acgturyswkmbdhvn]tc/ (HinfI g|antc)4,";
    var v1272 = v1273 + "/gttaac/ (HpaI gtt|aac)3,";
    var v1271 = v1272 + "/ccgg/ (HpaII c|cgg)3,";
    var v1270 = v1271 + "/ggcgcc/ (KasI g|gcgcc)5,";
    var v1269 = v1270 + "/ggtacc/ (KpnI ggtac|c)1,";
    var v1268 = v1269 + "/[acgturyswkmbdhvn]gatc[acgturyswkmbdhvn]/ (MboI |gatc)5,";
    var v1267 = v1268 + "/caattg/ (MfeI c|aattg)5,";
    var v1266 = v1267 + "/acgcgt/ (MluI a|cgcgt)5,";
    var v1265 = v1266 + "/tggcca/ (MscI tgg|cca)3,";
    var v1264 = v1265 + "/ttaa/ (MseI t|taa)3,";
    var v1263 = v1264 + "/ccgg/ (MspI c|cgg)3,";
    var v1262 = v1263 + "/gccggc/ (NaeI gcc|ggc)3,";
    var v1261 = v1262 + "/ggcgcc/ (NarI gg|cgcc)4,";
    var v1260 = v1261 + "/ccatgg/ (NcoI c|catgg)5,";
    var v1259 = v1260 + "/catatg/ (NdeI ca|tatg)4,";
    var v1258 = v1259 + "/gatc/ (NdeII |gatc)4,";
    var v1257 = v1258 + "/gccggc/ (NgoMIV g|ccggc)5,";
    var v1256 = v1257 + "/gctagc/ (NheI g|ctagc)5,";
    var v1255 = v1256 + "/catg/ (NlaIII catg|)0,";
    var v1254 = v1255 + "/gcggccgc/ (NotI gc|ggccgc)6,";
    var v1253 = v1254 + "/tcgcga/ (NruI tcg|cga)3,";
    var v1252 = v1253 + "/atgcat/ (NsiI atgca|t)1,";
    var v1251 = v1252 + "/ttaattaa/ (PacI ttaat|taa)3,";
    var v1250 = v1251 + "/acatgt/ (PciI a|catgt)5,";
    var v1249 = v1250 + "/ggcc/ (PhoI gg|cc)2,";
    var v1248 = v1249 + "/gtttaaac/ (PmeI gttt|aaac)4,";
    var v1247 = v1248 + "/cacgtg/ (PmlI cac|gtg)3,";
    var v1246 = v1247 + "/ttataa/ (PsiI tta|taa)3,";
    var v1245 = v1246 + "/ctgcag/ (PstI ctgca|g)1,";
    var v1244 = v1245 + "/cgatcg/ (PvuI cgat|cg)2,";
    var v1243 = v1244 + "/cagctg/ (PvuII cag|ctg)3,";
    var v1242 = v1243 + "/gtac/ (RsaI gt|ac)2,";
    var v1241 = v1242 + "/gagctc/ (SacI gagct|c)1,";
    var v1223 = v1241 + "/ccgcgg/ (SacII ccgc|gg)2,";
    var v1205 = v1223 + "/gtcgac/ (SalI g|tcgac)5,";
    var v1187 = v1205 + "/cctgcagg/ (SbfI cctgca|gg)2,";
    var v1168 = v1187 + "/agtact/ (ScaI agt|act)3,";
    var v1148 = v1168 + "/ggcgcc/ (SfoI ggc|gcc)3,";
    var v1126 = v1148 + "/cccggg/ (SmaI ccc|ggg)3,";
    var v1104 = v1126 + "/tacgta/ (SnaBI tac|gta)3,";
    var v1082 = v1104 + "/actagt/ (SpeI a|ctagt)5,";
    var v1057 = v1082 + "/gcatgc/ (SphI gcatg|c)1,";
    var v1032 = v1057 + "/aatatt/ (SspI aat|att)3,";
    var v1005 = v1032 + "/gagctc/ (SstI gagct|c)1,";
    var v977 = v1005 + "/ccgcgg/ (SstII ccgc|gg)2,";
    var v941 = v977 + "/aggcct/ (StuI agg|cct)3,";
    var v904 = v941 + "/atttaaat/ (SwaI attt|aaat)4,";
    var v863 = v904 + "/tcga/ (TaqI t|cga)3,";
    var v805 = v863 + "/ctcgag/ (TliI c|tcgag)5,";
    var v718 = v805 + "/attaat/ (VspI at|taat)4,";
    var v583 = v718 + "/tctaga/ (XbaI t|ctaga)5,";
    var v301 = v583 + "/ctcgag/ (XhoI c|tcgag)5,";
    return v301 + "/cccggg/ (XmaI c|ccggg)5";
  }
  return true;
}
function getGeneticCodeString(type$$26) {
  var v719 = type$$26.toLowerCase();
  var v584 = v719 == "standard";
  var v721 = !v584;
  if (v721) {
    var v720 = type$$26.toLowerCase();
    v584 = v720 == "transl_table=1";
  }
  var v304 = v584;
  if (v304) {
    var v1224 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1206 = v1224 + "/ga[tcuy]/=D,";
    var v1188 = v1206 + "/ga[agr]/=E,";
    var v1169 = v1188 + "/[tu][tu][tcuy]/=F,";
    var v1149 = v1169 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1127 = v1149 + "/ca[tcuy]/=H,";
    var v1105 = v1127 + "/a[tu][atcuwmhy]/=I,";
    var v1083 = v1105 + "/aa[agr]/=K,";
    var v1058 = v1083 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1033 = v1058 + "/a[tu]g/=M,";
    var v1006 = v1033 + "/aa[tucy]/=N,";
    var v978 = v1006 + "/cc[acgturyswkmbdhvn]/=P,";
    var v942 = v978 + "/ca[agr]/=Q,";
    var v905 = v942 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v864 = v905 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v806 = v864 + "/ac[acgturyswkmbdhvn]/=T,";
    var v722 = v806 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v585 = v722 + "/[tu]gg/=W,";
    var v303 = v585 + "/[tu]a[ctuy]/=Y,";
    return v303 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*";
  }
  var v586 = type$$26.toLowerCase();
  var v306 = v586 == "transl_table=2";
  if (v306) {
    var v1225 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1207 = v1225 + "/ga[tcuy]/=D,";
    var v1189 = v1207 + "/ga[agr]/=E,";
    var v1170 = v1189 + "/[tu][tu][tcuy]/=F,";
    var v1150 = v1170 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1128 = v1150 + "/ca[tcuy]/=H,";
    var v1106 = v1128 + "/a[tu][tcuy]/=I,";
    var v1084 = v1106 + "/aa[agr]/=K,";
    var v1059 = v1084 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1034 = v1059 + "/a[tu][agr]/=M,";
    var v1007 = v1034 + "/aa[tucy]/=N,";
    var v979 = v1007 + "/cc[acgturyswkmbdhvn]/=P,";
    var v943 = v979 + "/ca[agr]/=Q,";
    var v906 = v943 + "/cg[acgturyswkmbdhvn]/=R,";
    var v865 = v906 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v807 = v865 + "/ac[acgturyswkmbdhvn]/=T,";
    var v723 = v807 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v587 = v723 + "/[tu]g[agr]/=W,";
    var v305 = v587 + "/[tu]a[ctuy]/=Y,";
    return v305 + "/[tu]a[agr]|ag[agr]/=*";
  }
  var v588 = type$$26.toLowerCase();
  var v308 = v588 == "transl_table=3";
  if (v308) {
    var v1226 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1208 = v1226 + "/ga[tcuy]/=D,";
    var v1190 = v1208 + "/ga[agr]/=E,";
    var v1171 = v1190 + "/[tu][tu][tcuy]/=F,";
    var v1151 = v1171 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1129 = v1151 + "/ca[tcuy]/=H,";
    var v1107 = v1129 + "/a[tu][tcuy]/=I,";
    var v1085 = v1107 + "/aa[agr]/=K,";
    var v1060 = v1085 + "/[tu][tu][agr]/=L,";
    var v1035 = v1060 + "/a[tu][agr]/=M,";
    var v1008 = v1035 + "/aa[tucy]/=N,";
    var v980 = v1008 + "/cc[acgturyswkmbdhvn]/=P,";
    var v944 = v980 + "/ca[agr]/=Q,";
    var v907 = v944 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v866 = v907 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v808 = v866 + "/ac[acgturyswkmbdhvn]|c[tu][acgturyswkmbdhvn]/=T,";
    var v724 = v808 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v589 = v724 + "/[tu]g[agr]/=W,";
    var v307 = v589 + "/[tu]a[ctuy]/=Y,";
    return v307 + "/[tu]a[agr]/=*";
  }
  var v590 = type$$26.toLowerCase();
  var v310 = v590 == "transl_table=4";
  if (v310) {
    var v1227 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1209 = v1227 + "/ga[tcuy]/=D,";
    var v1191 = v1209 + "/ga[agr]/=E,";
    var v1172 = v1191 + "/[tu][tu][tcuy]/=F,";
    var v1152 = v1172 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1130 = v1152 + "/ca[tcuy]/=H,";
    var v1108 = v1130 + "/a[tu][atcuwmhy]/=I,";
    var v1086 = v1108 + "/aa[agr]/=K,";
    var v1061 = v1086 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1036 = v1061 + "/a[tu]g/=M,";
    var v1009 = v1036 + "/aa[tucy]/=N,";
    var v981 = v1009 + "/cc[acgturyswkmbdhvn]/=P,";
    var v945 = v981 + "/ca[agr]/=Q,";
    var v908 = v945 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v867 = v908 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v809 = v867 + "/ac[acgturyswkmbdhvn]/=T,";
    var v725 = v809 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v591 = v725 + "/[tu]g[agr]/=W,";
    var v309 = v591 + "/[tu]a[ctuy]/=Y,";
    return v309 + "/[tu]a[agr]/=*";
  }
  var v592 = type$$26.toLowerCase();
  var v312 = v592 == "transl_table=5";
  if (v312) {
    var v1228 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1210 = v1228 + "/ga[tcuy]/=D,";
    var v1192 = v1210 + "/ga[agr]/=E,";
    var v1173 = v1192 + "/[tu][tu][tcuy]/=F,";
    var v1153 = v1173 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1131 = v1153 + "/ca[tcuy]/=H,";
    var v1109 = v1131 + "/a[tu][tcuy]/=I,";
    var v1087 = v1109 + "/aa[agr]/=K,";
    var v1062 = v1087 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1037 = v1062 + "/a[tu][agr]/=M,";
    var v1010 = v1037 + "/aa[tucy]/=N,";
    var v982 = v1010 + "/cc[acgturyswkmbdhvn]/=P,";
    var v946 = v982 + "/ca[agr]/=Q,";
    var v909 = v946 + "/cg[acgturyswkmbdhvn]/=R,";
    var v868 = v909 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v810 = v868 + "/ac[acgturyswkmbdhvn]/=T,";
    var v726 = v810 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v593 = v726 + "/[tu]g[agr]/=W,";
    var v311 = v593 + "/[tu]a[ctuy]/=Y,";
    return v311 + "/[tu]a[agr]/=*";
  }
  var v594 = type$$26.toLowerCase();
  var v314 = v594 == "transl_table=6";
  if (v314) {
    var v1229 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1211 = v1229 + "/ga[tcuy]/=D,";
    var v1193 = v1211 + "/ga[agr]/=E,";
    var v1174 = v1193 + "/[tu][tu][tcuy]/=F,";
    var v1154 = v1174 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1132 = v1154 + "/ca[tcuy]/=H,";
    var v1110 = v1132 + "/a[tu][atcuwmhy]/=I,";
    var v1088 = v1110 + "/aa[agr]/=K,";
    var v1063 = v1088 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1038 = v1063 + "/a[tu]g/=M,";
    var v1011 = v1038 + "/aa[tucy]/=N,";
    var v983 = v1011 + "/cc[acgturyswkmbdhvn]/=P,";
    var v947 = v983 + "/ca[agr]|[tu]a[agr]|[tcuy]a[agr]/=Q,";
    var v910 = v947 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v869 = v910 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v811 = v869 + "/ac[acgturyswkmbdhvn]/=T,";
    var v727 = v811 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v595 = v727 + "/[tu]gg/=W,";
    var v313 = v595 + "/[tu]a[ctuy]/=Y,";
    return v313 + "/[tu]ga/=*";
  }
  var v596 = type$$26.toLowerCase();
  var v316 = v596 == "transl_table=9";
  if (v316) {
    var v1230 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1212 = v1230 + "/ga[tcuy]/=D,";
    var v1194 = v1212 + "/ga[agr]/=E,";
    var v1175 = v1194 + "/[tu][tu][tcuy]/=F,";
    var v1155 = v1175 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1133 = v1155 + "/ca[tcuy]/=H,";
    var v1111 = v1133 + "/a[tu][atcuwmhy]/=I,";
    var v1089 = v1111 + "/aag/=K,";
    var v1064 = v1089 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1039 = v1064 + "/a[tu]g/=M,";
    var v1012 = v1039 + "/aa[atcuwmhy]/=N,";
    var v984 = v1012 + "/cc[acgturyswkmbdhvn]/=P,";
    var v948 = v984 + "/ca[agr]/=Q,";
    var v911 = v948 + "/cg[acgturyswkmbdhvn]/=R,";
    var v870 = v911 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v812 = v870 + "/ac[acgturyswkmbdhvn]/=T,";
    var v728 = v812 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v597 = v728 + "/[tu]g[agr]/=W,";
    var v315 = v597 + "/[tu]a[ctuy]/=Y,";
    return v315 + "/[tu]a[agr]/=*";
  }
  var v598 = type$$26.toLowerCase();
  var v318 = v598 == "transl_table=10";
  if (v318) {
    var v1231 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[atcuwmhy]/=C,";
    var v1213 = v1231 + "/ga[tcuy]/=D,";
    var v1195 = v1213 + "/ga[agr]/=E,";
    var v1176 = v1195 + "/[tu][tu][tcuy]/=F,";
    var v1156 = v1176 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1134 = v1156 + "/ca[tcuy]/=H,";
    var v1112 = v1134 + "/a[tu][atcuwmhy]/=I,";
    var v1090 = v1112 + "/aa[agr]/=K,";
    var v1065 = v1090 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1040 = v1065 + "/a[tu]g/=M,";
    var v1013 = v1040 + "/aa[tucy]/=N,";
    var v985 = v1013 + "/cc[acgturyswkmbdhvn]/=P,";
    var v949 = v985 + "/ca[agr]/=Q,";
    var v912 = v949 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v871 = v912 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v813 = v871 + "/ac[acgturyswkmbdhvn]/=T,";
    var v729 = v813 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v599 = v729 + "/[tu]gg/=W,";
    var v317 = v599 + "/[tu]a[ctuy]/=Y,";
    return v317 + "/[tu]a[agr]/=*";
  }
  var v600 = type$$26.toLowerCase();
  var v320 = v600 == "transl_table=11";
  if (v320) {
    var v1232 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1214 = v1232 + "/ga[tcuy]/=D,";
    var v1196 = v1214 + "/ga[agr]/=E,";
    var v1177 = v1196 + "/[tu][tu][tcuy]/=F,";
    var v1157 = v1177 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1135 = v1157 + "/ca[tcuy]/=H,";
    var v1113 = v1135 + "/a[tu][atcuwmhy]/=I,";
    var v1091 = v1113 + "/aa[agr]/=K,";
    var v1066 = v1091 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1041 = v1066 + "/a[tu]g/=M,";
    var v1014 = v1041 + "/aa[tucy]/=N,";
    var v986 = v1014 + "/cc[acgturyswkmbdhvn]/=P,";
    var v950 = v986 + "/ca[agr]/=Q,";
    var v913 = v950 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v872 = v913 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v814 = v872 + "/ac[acgturyswkmbdhvn]/=T,";
    var v730 = v814 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v601 = v730 + "/[tu]gg/=W,";
    var v319 = v601 + "/[tu]a[ctuy]/=Y,";
    return v319 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*";
  }
  var v602 = type$$26.toLowerCase();
  var v322 = v602 == "transl_table=12";
  if (v322) {
    var v1233 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1215 = v1233 + "/ga[tcuy]/=D,";
    var v1197 = v1215 + "/ga[agr]/=E,";
    var v1178 = v1197 + "/[tu][tu][tcuy]/=F,";
    var v1158 = v1178 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1136 = v1158 + "/ca[tcuy]/=H,";
    var v1114 = v1136 + "/a[tu][atcuwmhy]/=I,";
    var v1092 = v1114 + "/aa[agr]/=K,";
    var v1067 = v1092 + "/c[tu][atcuwmhy]|[tu][tu][agr]|[ctuy][tu]a/=L,";
    var v1042 = v1067 + "/a[tu]g/=M,";
    var v1015 = v1042 + "/aa[tucy]/=N,";
    var v987 = v1015 + "/cc[acgturyswkmbdhvn]/=P,";
    var v951 = v987 + "/ca[agr]/=Q,";
    var v914 = v951 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v873 = v914 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]|c[tu]g/=S,";
    var v815 = v873 + "/ac[acgturyswkmbdhvn]/=T,";
    var v731 = v815 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v603 = v731 + "/[tu]gg/=W,";
    var v321 = v603 + "/[tu]a[ctuy]/=Y,";
    return v321 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*";
  }
  var v604 = type$$26.toLowerCase();
  var v324 = v604 == "transl_table=13";
  if (v324) {
    var v1234 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1216 = v1234 + "/ga[tcuy]/=D,";
    var v1198 = v1216 + "/ga[agr]/=E,";
    var v1179 = v1198 + "/[tu][tu][tcuy]/=F,";
    var v1159 = v1179 + "/gg[acgturyswkmbdhvn]|ag[agr]|[agr]g[agr]/=G,";
    var v1137 = v1159 + "/ca[tcuy]/=H,";
    var v1115 = v1137 + "/a[tu][tcuy]/=I,";
    var v1093 = v1115 + "/aa[agr]/=K,";
    var v1068 = v1093 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1043 = v1068 + "/a[tu][agr]/=M,";
    var v1016 = v1043 + "/aa[tucy]/=N,";
    var v988 = v1016 + "/cc[acgturyswkmbdhvn]/=P,";
    var v952 = v988 + "/ca[agr]/=Q,";
    var v915 = v952 + "/cg[acgturyswkmbdhvn]/=R,";
    var v874 = v915 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v816 = v874 + "/ac[acgturyswkmbdhvn]/=T,";
    var v732 = v816 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v605 = v732 + "/[tu]g[agr]/=W,";
    var v323 = v605 + "/[tu]a[ctuy]/=Y,";
    return v323 + "/[tu]a[agr]/=*";
  }
  var v606 = type$$26.toLowerCase();
  var v326 = v606 == "transl_table=14";
  if (v326) {
    var v1235 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1217 = v1235 + "/ga[tcuy]/=D,";
    var v1199 = v1217 + "/ga[agr]/=E,";
    var v1180 = v1199 + "/[tu][tu][tcuy]/=F,";
    var v1160 = v1180 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1138 = v1160 + "/ca[tcuy]/=H,";
    var v1116 = v1138 + "/a[tu][atcuwmhy]/=I,";
    var v1094 = v1116 + "/aag/=K,";
    var v1069 = v1094 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1044 = v1069 + "/a[tu]g/=M,";
    var v1017 = v1044 + "/aa[atcuwmhy]/=N,";
    var v989 = v1017 + "/cc[acgturyswkmbdhvn]/=P,";
    var v953 = v989 + "/ca[agr]/=Q,";
    var v916 = v953 + "/cg[acgturyswkmbdhvn]/=R,";
    var v875 = v916 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v817 = v875 + "/ac[acgturyswkmbdhvn]/=T,";
    var v733 = v817 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v607 = v733 + "/[tu]g[agr]/=W,";
    var v325 = v607 + "/[tu]a[atcuwmhy]/=Y,";
    return v325 + "/[tu]ag/=*";
  }
  var v608 = type$$26.toLowerCase();
  var v328 = v608 == "transl_table=15";
  if (v328) {
    var v1236 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1218 = v1236 + "/ga[tcuy]/=D,";
    var v1200 = v1218 + "/ga[agr]/=E,";
    var v1181 = v1200 + "/[tu][tu][tcuy]/=F,";
    var v1161 = v1181 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1139 = v1161 + "/ca[tcuy]/=H,";
    var v1117 = v1139 + "/a[tu][atcuwmhy]/=I,";
    var v1095 = v1117 + "/aa[agr]/=K,";
    var v1070 = v1095 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1045 = v1070 + "/a[tu]g/=M,";
    var v1018 = v1045 + "/aa[tucy]/=N,";
    var v990 = v1018 + "/cc[acgturyswkmbdhvn]/=P,";
    var v954 = v990 + "/ca[agr]|[tu]ag|[tcuy]ag/=Q,";
    var v917 = v954 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v876 = v917 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v818 = v876 + "/ac[acgturyswkmbdhvn]/=T,";
    var v734 = v818 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v609 = v734 + "/[tu]gg/=W,";
    var v327 = v609 + "/[tu]a[ctuy]/=Y,";
    return v327 + "/[tu][agr]a/=*";
  }
  var v610 = type$$26.toLowerCase();
  var v330 = v610 == "transl_table=16";
  if (v330) {
    var v1237 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1219 = v1237 + "/ga[tcuy]/=D,";
    var v1201 = v1219 + "/ga[agr]/=E,";
    var v1182 = v1201 + "/[tu][tu][tcuy]/=F,";
    var v1162 = v1182 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1140 = v1162 + "/ca[tcuy]/=H,";
    var v1118 = v1140 + "/a[tu][atcuwmhy]/=I,";
    var v1096 = v1118 + "/aa[agr]/=K,";
    var v1071 = v1096 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]|[tu]ag|[tu][atuw]g/=L,";
    var v1046 = v1071 + "/a[tu]g/=M,";
    var v1019 = v1046 + "/aa[tucy]/=N,";
    var v991 = v1019 + "/cc[acgturyswkmbdhvn]/=P,";
    var v955 = v991 + "/ca[agr]/=Q,";
    var v918 = v955 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v877 = v918 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v819 = v877 + "/ac[acgturyswkmbdhvn]/=T,";
    var v735 = v819 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v611 = v735 + "/[tu]gg/=W,";
    var v329 = v611 + "/[tu]a[ctuy]/=Y,";
    return v329 + "/[tu][agr]a/=*";
  }
  var v612 = type$$26.toLowerCase();
  var v332 = v612 == "transl_table=21";
  if (v332) {
    var v1238 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1220 = v1238 + "/ga[tcuy]/=D,";
    var v1202 = v1220 + "/ga[agr]/=E,";
    var v1183 = v1202 + "/[tu][tu][tcuy]/=F,";
    var v1163 = v1183 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1141 = v1163 + "/ca[tcuy]/=H,";
    var v1119 = v1141 + "/a[tu][tcuy]/=I,";
    var v1097 = v1119 + "/aag/=K,";
    var v1072 = v1097 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1047 = v1072 + "/a[tu][agr]/=M,";
    var v1020 = v1047 + "/aa[atcuwmhy]/=N,";
    var v992 = v1020 + "/cc[acgturyswkmbdhvn]/=P,";
    var v956 = v992 + "/ca[agr]/=Q,";
    var v919 = v956 + "/cg[acgturyswkmbdhvn]/=R,";
    var v878 = v919 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v820 = v878 + "/ac[acgturyswkmbdhvn]/=T,";
    var v736 = v820 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v613 = v736 + "/[tu]g[agr]/=W,";
    var v331 = v613 + "/[tu]a[ctuy]/=Y,";
    return v331 + "/[tu]a[agr]/=*";
  }
  var v614 = type$$26.toLowerCase();
  var v334 = v614 == "transl_table=22";
  if (v334) {
    var v1239 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1221 = v1239 + "/ga[tcuy]/=D,";
    var v1203 = v1221 + "/ga[agr]/=E,";
    var v1184 = v1203 + "/[tu][tu][tcuy]/=F,";
    var v1164 = v1184 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1142 = v1164 + "/ca[tcuy]/=H,";
    var v1120 = v1142 + "/a[tu][atcuwmhy]/=I,";
    var v1098 = v1120 + "/aa[agr]/=K,";
    var v1073 = v1098 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]|[tu]ag|[tu][atuw]g/=L,";
    var v1048 = v1073 + "/a[tu]g/=M,";
    var v1021 = v1048 + "/aa[tucy]/=N,";
    var v993 = v1021 + "/cc[acgturyswkmbdhvn]/=P,";
    var v957 = v993 + "/ca[agr]/=Q,";
    var v920 = v957 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v879 = v920 + "/[tu]c[cgtyskb]|ag[ct]/=S,";
    var v821 = v879 + "/ac[acgturyswkmbdhvn]/=T,";
    var v737 = v821 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v615 = v737 + "/[tu]gg/=W,";
    var v333 = v615 + "/[tu]a[ctuy]/=Y,";
    return v333 + "/[tu][agcrsmv]a/=*";
  }
  var v616 = type$$26.toLowerCase();
  var v336 = v616 == "transl_table=23";
  if (v336) {
    var v1240 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1222 = v1240 + "/ga[tcuy]/=D,";
    var v1204 = v1222 + "/ga[agr]/=E,";
    var v1185 = v1204 + "/[tu][tu][tcuy]/=F,";
    var v1165 = v1185 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1143 = v1165 + "/ca[tcuy]/=H,";
    var v1121 = v1143 + "/a[tu][atcuwmhy]/=I,";
    var v1099 = v1121 + "/aa[agr]/=K,";
    var v1074 = v1099 + "/c[tu][acgturyswkmbdhvn]|[ctuy][tu]g/=L,";
    var v1049 = v1074 + "/a[tu]g/=M,";
    var v1022 = v1049 + "/aa[tucy]/=N,";
    var v994 = v1022 + "/cc[acgturyswkmbdhvn]/=P,";
    var v958 = v994 + "/ca[agr]/=Q,";
    var v921 = v958 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v880 = v921 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v822 = v880 + "/ac[acgturyswkmbdhvn]/=T,";
    var v738 = v822 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v617 = v738 + "/[tu]gg/=W,";
    var v335 = v617 + "/[tu]a[ctuy]/=Y,";
    return v335 + "/[tu]a[agr]|[tu]ga|[tu][agtrwkd]a/=*";
  }
  return true;
}
function transMap(theDocument) {
  var newDna = "";
  var title$$9 = "";
  var maxInput$$3 = 5E5;
  var v618 = testScript();
  var v337 = v618 == false;
  if (v337) {
    return false;
  }
  var v959 = theDocument.forms;
  var v922 = v959[0];
  var v881 = v922.elements;
  var v823 = v881[6];
  var v739 = v823.options;
  var v960 = theDocument.forms;
  var v923 = v960[0];
  var v882 = v923.elements;
  var v824 = v882[6];
  var v740 = v824.selectedIndex;
  var v619 = v739[v740];
  var v338 = v619.value;
  var geneticCode = getGeneticCodeString(v338);
  var v961 = theDocument.forms;
  var v924 = v961[0];
  var v883 = v924.elements;
  var v825 = v883[0];
  var v741 = checkFormElement(v825);
  var v620 = v741 == false;
  var v743 = !v620;
  if (v743) {
    var v995 = theDocument.forms;
    var v962 = v995[0];
    var v925 = v962.elements;
    var v884 = v925[0];
    var v826 = v884.value;
    var v742 = checkSequenceLength(v826, maxInput$$3);
    v620 = v742 == false;
  }
  var v339 = v620;
  if (v339) {
    return false;
  }
  introspect(JAM.policy.p15) {
    geneticCode = geneticCode.split(/,/);
  }
  var v621 = checkGeneticCode(geneticCode);
  var v340 = v621 == false;
  if (v340) {
    return false;
  }
  openWindow("Translation Map");
  openPre();
  var v885 = theDocument.forms;
  var v827 = v885[0];
  var v744 = v827.elements;
  var v622 = v744[0];
  var v341 = v622.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v341);
  var i$$11 = 0;
  var v623 = arrayOfFasta$$1.length;
  var v349 = i$$11 < v623;
  for (;v349;) {
    var v342 = arrayOfFasta$$1[i$$11];
    newDna = getSequenceFromFasta(v342);
    var v343 = arrayOfFasta$$1[i$$11];
    title$$9 = getTitleFromFasta(v343);
    newDna = removeNonDna(newDna);
    var v344 = outputWindow.document;
    var v345 = getInfoFromTitleAndSequence(title$$9, newDna);
    introspect(JAM.policy.p18) {
      v344.write(v345);
    }
    var v963 = theDocument.forms;
    var v926 = v963[0];
    var v886 = v926.elements;
    var v828 = v886[4];
    var v745 = v828.options;
    var v964 = theDocument.forms;
    var v927 = v964[0];
    var v887 = v927.elements;
    var v829 = v887[4];
    var v746 = v829.selectedIndex;
    var v624 = v745[v746];
    var v346 = v624.value;
    var v965 = theDocument.forms;
    var v928 = v965[0];
    var v888 = v928.elements;
    var v830 = v888[5];
    var v747 = v830.options;
    var v966 = theDocument.forms;
    var v929 = v966[0];
    var v889 = v929.elements;
    var v831 = v889[5];
    var v748 = v831.selectedIndex;
    var v625 = v747[v748];
    var v347 = v625.value;
    layoutTranslation(newDna, geneticCode, v346, v347);
    var v348 = outputWindow.document;
    introspect(JAM.policy.p9) {
      v348.write("\n\n");
    }
    i$$11++;
    var v626 = arrayOfFasta$$1.length;
    v349 = i$$11 < v626;
  }
  closePre();
  closeWindow();
  return true;
}
function layoutTranslation(dnaSequence$$3, geneticCode$$1, basesPerLine, readingFrame) {
  basesPerLine = parseInt(basesPerLine);
  var geneticCodeMatchExp$$2 = getGeneticCodeMatchExp(geneticCode$$1);
  var geneticCodeMatchResult$$2 = getGeneticCodeMatchResult(geneticCode$$1);
  var textLayout = new TextLayout;
  var v627 = readingFrame == "3";
  var v749 = !v627;
  if (v749) {
    v627 = readingFrame == "all_three";
  }
  var v351 = v627;
  if (v351) {
    var translation = new TranslationComponent;
    var v832 = dnaSequence$$3.length;
    introspect(JAM.policy.p13) {
      var v750 = dnaSequence$$3.substring(2, v832)
    }
    var v628 = translate(v750, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    var v350 = "  " + v628;
    introspect(JAM.policy.p18) {
      translation.setCharacters(v350);
    }
    introspect(JAM.policy.p18) {
      textLayout.addComponent(translation);
    }
  }
  var v629 = readingFrame == "2";
  var v751 = !v629;
  if (v751) {
    v629 = readingFrame == "all_three";
  }
  var v353 = v629;
  if (v353) {
    translation = new TranslationComponent;
    var v833 = dnaSequence$$3.length;
    introspect(JAM.policy.p13) {
      var v752 = dnaSequence$$3.substring(1, v833)
    }
    var v630 = translate(v752, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    var v352 = " " + v630;
    introspect(JAM.policy.p18) {
      translation.setCharacters(v352);
    }
    introspect(JAM.policy.p18) {
      textLayout.addComponent(translation);
    }
  }
  var v631 = readingFrame == "1";
  var v753 = !v631;
  if (v753) {
    v631 = readingFrame == "all_three";
  }
  var v355 = v631;
  if (v355) {
    translation = new TranslationComponent;
    var v354 = translate(dnaSequence$$3, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    introspect(JAM.policy.p18) {
      translation.setCharacters(v354);
    }
    introspect(JAM.policy.p18) {
      textLayout.addComponent(translation);
    }
  }
  var v357 = readingFrame == "uppercase";
  if (v357) {
    translation = new UppercaseTranslationComponent;
    var v356 = uppercaseTranslate(dnaSequence$$3, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    introspect(JAM.policy.p18) {
      translation.setCharacters(v356);
    }
    introspect(JAM.policy.p18) {
      textLayout.addComponent(translation);
    }
  }
  var dna = new DnaComponent;
  introspect(JAM.policy.p18) {
    dna.setCharacters(dnaSequence$$3);
  }
  introspect(JAM.policy.p18) {
    textLayout.addComponent(dna);
  }
  var ruler = new RulerComponent;
  introspect(JAM.policy.p18) {
    ruler.setCharacters(dnaSequence$$3);
  }
  ruler.buildRuler();
  introspect(JAM.policy.p18) {
    textLayout.addComponent(ruler);
  }
  dna = new DnaComponent;
  var v358 = complement(dnaSequence$$3);
  introspect(JAM.policy.p18) {
    dna.setCharacters(v358);
  }
  introspect(JAM.policy.p18) {
    textLayout.addComponent(dna);
  }
  var i$$12 = 0;
  var v632 = dnaSequence$$3.length;
  var v360 = i$$12 < v632;
  for (;v360;) {
    var v359 = i$$12 + basesPerLine;
    introspect(JAM.policy.p16) {
      textLayout.writeLayout(i$$12, v359);
    }
    i$$12 = i$$12 + basesPerLine;
    var v633 = dnaSequence$$3.length;
    v360 = i$$12 < v633;
  }
  return true;
}
function translate(dnaSequence$$4, geneticCodeMatchExp$$3, geneticCodeMatchResult$$3) {
  function v2(str$$8, p1$$2, offset$$10, s$$4) {
    var v361 = " " + p1$$2;
    return v361 + " ";
  }
  introspect(JAM.policy.p16) {
    var v754 = dnaSequence$$4.replace(/[^A-Za-z]/g, "")
  }
  var v634 = v754.length;
  var v362 = v634 < 3;
  if (v362) {
    return "";
  }
  introspect(JAM.policy.p16) {
    dnaSequence$$4 = dnaSequence$$4.replace(/(...)/g, v2);
  }
  var i$$13 = 0;
  var v635 = geneticCodeMatchExp$$3.length;
  var v365 = i$$13 < v635;
  for (;v365;) {
    var v363 = geneticCodeMatchExp$$3[i$$13];
    var v364 = geneticCodeMatchResult$$3[i$$13];
    introspect(JAM.policy.p27) {
      dnaSequence$$4 = dnaSequence$$4.replace(v363, v364);
    }
    i$$13++;
    var v636 = geneticCodeMatchExp$$3.length;
    v365 = i$$13 < v636;
  }
  introspect(JAM.policy.p16) {
    dnaSequence$$4 = dnaSequence$$4.replace(/\S{3}/g, "X");
  }
  introspect(JAM.policy.p16) {
    dnaSequence$$4 = dnaSequence$$4.replace(/\s\S{1,2}$/, "");
  }
  introspect(JAM.policy.p16) {
    dnaSequence$$4 = dnaSequence$$4.replace(/^\s/, "");
  }
  return dnaSequence$$4;
}
function uppercaseTranslate(dnaSequence$$5, geneticCodeMatchExp$$4, geneticCodeMatchResult$$4) {
  function v3(str$$9, p1$$3, p2, p3, p4, p5, p6, offset$$11, s$$5) {
    var v930 = " " + p1$$3;
    var v890 = v930 + p3;
    var v834 = v890 + p5;
    var v755 = v834 + " ";
    var v637 = v755 + p2;
    var v366 = v637 + p4;
    return v366 + p6;
  }
  introspect(JAM.policy.p16) {
    dnaSequence$$5 = dnaSequence$$5.replace(/[a-z]/g, " ");
  }
  introspect(JAM.policy.p16) {
    var v756 = dnaSequence$$5.replace(/[^A-Za-z]/g, "")
  }
  var v638 = v756.length;
  var v367 = v638 < 3;
  if (v367) {
    return "";
  }
  introspect(JAM.policy.p16) {
    dnaSequence$$5 = dnaSequence$$5.replace(/([A-Z])(\s*)([A-Z])(\s*)([A-Z])(\s*)/g, v3);
  }
  introspect(JAM.policy.p16) {
    dnaSequence$$5 = dnaSequence$$5.replace(/\s\S{1,2}\s/g, "");
  }
  var i$$14 = 0;
  var v639 = geneticCodeMatchExp$$4.length;
  var v370 = i$$14 < v639;
  for (;v370;) {
    var v368 = geneticCodeMatchExp$$4[i$$14];
    var v369 = geneticCodeMatchResult$$4[i$$14];
    introspect(JAM.policy.p27) {
      dnaSequence$$5 = dnaSequence$$5.replace(v368, v369);
    }
    i$$14++;
    var v640 = geneticCodeMatchExp$$4.length;
    v370 = i$$14 < v640;
  }
  introspect(JAM.policy.p16) {
    dnaSequence$$5 = dnaSequence$$5.replace(/\S{3}/g, "X");
  }
  introspect(JAM.policy.p16) {
    dnaSequence$$5 = dnaSequence$$5.replace(/^\s/, "");
  }
  return dnaSequence$$5;
}
function writeLayout(start$$4, stop) {
  var i$$15 = 0;
  var v757 = this.components;
  var v641 = v757.length;
  var v372 = i$$15 < v641;
  for (;v372;) {
    var v642 = this.components;
    var v371 = v642[i$$15];
    introspect(JAM.policy.p27) {
      v371.writeLayoutComponent(start$$4, stop);
    }
    i$$15++;
    var v758 = this.components;
    var v643 = v758.length;
    v372 = i$$15 < v643;
  }
  return;
}
function addComponent(component) {
  var v373 = this.components;
  introspect(JAM.policy.p18) {
    v373.push(component);
  }
  return;
}
function TextLayout() {
  var v1339 = new Array;
  this.components = v1339;
  return;
}
function writeLayoutComponent(start$$5, stop$$1) {
  return;
}
function setCharacters(text$$14) {
  introspect(JAM.policy.p15) {
    var v644 = text$$14.search(/./)
  }
  var v374 = v644 != -1;
  if (v374) {
    introspect(JAM.policy.p15) {
      var v1340 = text$$14.match(/./g)
    }
    this.characters = v1340;
  }
  return;
}
function isRoom(start$$6, stop$$2) {
  var v375 = this.characters;
  introspect(JAM.policy.p27) {
    var rangeToCheck = v375.slice(start$$6, stop$$2)
  }
  introspect(JAM.policy.p9) {
    rangeToCheck = rangeToCheck.join("");
  }
  introspect(JAM.policy.p15) {
    var v645 = rangeToCheck.search(/\w/)
  }
  var v376 = v645 == -1;
  if (v376) {
    return true;
  } else {
    return false;
  }
  return;
}
function LayoutComponent() {
  var v1341 = new Array;
  this.characters = v1341;
  this.positionLabel = 1;
  return;
}
function TranslationComponent() {
  var v1342 = new Array;
  this.characters = v1342;
  this.positionLabel = 1;
  return;
}
function UppercaseTranslationComponent() {
  var v1343 = new Array;
  this.characters = v1343;
  this.positionLabel = 1;
  return;
}
function DnaComponent() {
  var v1344 = new Array;
  this.characters = v1344;
  this.positionLabel = 1;
  return;
}
function RulerComponent() {
  var v1345 = new Array;
  this.characters = v1345;
  this.positionLabel = 1;
  return;
}
function buildRuler() {
  function v4(str$$12, p1$$6, offset$$14, s$$8) {
    var ruler$$1 = count$$3 + spacing;
    var v377 = count$$3 == 0;
    if (v377) {
      ruler$$1 = spacing;
    }
    count$$3 = count$$3 + 10;
    introspect(JAM.policy.p13) {
      return ruler$$1.substring(0, 10);
    }
  }
  var v378 = this.characters;
  introspect(JAM.policy.p9) {
    var sequence$$18 = v378.join("")
  }
  var count$$3 = 0;
  var spacing = "         ";
  introspect(JAM.policy.p16) {
    sequence$$18 = sequence$$18.replace(/(.{1,10})/g, v4);
  }
  introspect(JAM.policy.p15) {
    var v1346 = sequence$$18.match(/./g)
  }
  this.characters = v1346;
  return;
}
new TextLayout;
var v379 = TextLayout.prototype;
v379.writeLayout = writeLayout;
var v380 = TextLayout.prototype;
v380.addComponent = addComponent;
new LayoutComponent;
var v381 = LayoutComponent.prototype;
v381.writeLayoutComponent = writeLayoutComponent;
var v382 = LayoutComponent.prototype;
v382.setCharacters = setCharacters;
var v383 = LayoutComponent.prototype;
v383.isRoom = isRoom;
var v384 = TranslationComponent;
var v1347 = new LayoutComponent;
v384.prototype = v1347;
var v385 = TranslationComponent.prototype;
v385.writeLayoutComponent = v5;
var v386 = UppercaseTranslationComponent;
var v1348 = new LayoutComponent;
v386.prototype = v1348;
var v387 = UppercaseTranslationComponent.prototype;
v387.writeLayoutComponent = v6;
var v388 = DnaComponent;
var v1349 = new LayoutComponent;
v388.prototype = v1349;
var v389 = DnaComponent.prototype;
v389.writeLayoutComponent = v7;
var v390 = RulerComponent;
var v1350 = new LayoutComponent;
v390.prototype = v1350;
var v391 = RulerComponent.prototype;
v391.writeLayoutComponent = v10;
new RulerComponent;
var v392 = RulerComponent.prototype;
v392.buildRuler = buildRuler;
document.onload = v11;
introspect(JAM.policy.p9) {
  var v393 = document.getElementById("submitbtn")
}
v393.onclick = v12;
introspect(JAM.policy.p9) {
  var v394 = document.getElementById("clearbtn")
}
v394.onclick = v13
