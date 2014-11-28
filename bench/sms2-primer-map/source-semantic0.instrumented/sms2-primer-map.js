function v13() {
  var v1088 = document.forms;
  var v903 = v1088[0];
  var v531 = v903.elements;
  var v14 = v531[0];
  v14.value = " ";
  var v1089 = document.forms;
  var v904 = v1089[1];
  var v532 = v904.elements;
  var v15 = v532[0];
  v15.value = " ";
  return;
}
function v12() {
  try {
    primerMap(document);
  } catch (e$$5) {
    var v16 = "The following error was encountered: " + e$$5;
    alert(v16);
  }
  return;
}
function v11() {
  var v533 = document.main_form;
  var v17 = v533.main_submit;
  v17.focus();
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
  var v18 = outputWindow.document;
  var v534 = this.positionLabel;
  var v19 = rightNum(v534, "", 8, "");
  introspect(JAM.policy.p17) {
    v18.write(v19);
  }
  var v535 = this.characters;
  introspect(JAM.policy.p27) {
    var v20 = v535.slice(start$$10, stop$$6)
  }
  introspect(JAM.policy.p10) {
    var text$$15 = v20.join("")
  }
  introspect(JAM.policy.p16) {
    text$$15 = text$$15.replace(/^(\d+)/g, v8);
  }
  introspect(JAM.policy.p16) {
    text$$15 = text$$15.replace(/(\d+)$/g, v9);
  }
  var v21 = outputWindow.document;
  var v22 = text$$15 + "\n";
  introspect(JAM.policy.p17) {
    v21.write(v22);
  }
  var v23 = this.positionLabel;
  var v24 = stop$$6 - start$$10;
  this.positionLabel = v23 + v24;
  return;
}
function v7(start$$9, stop$$5) {
  var v25 = outputWindow.document;
  var v536 = this.positionLabel;
  var v26 = rightNum(v536, "", 8, "");
  introspect(JAM.policy.p17) {
    v25.write(v26);
  }
  var v27 = outputWindow.document;
  var v1090 = this.characters;
  introspect(JAM.policy.p27) {
    var v905 = v1090.slice(start$$9, stop$$5)
  }
  introspect(JAM.policy.p10) {
    var v537 = v905.join("")
  }
  var v28 = v537 + "\n";
  introspect(JAM.policy.p17) {
    v27.write(v28);
  }
  var v29 = this.positionLabel;
  var v30 = stop$$5 - start$$9;
  this.positionLabel = v29 + v30;
  return;
}
function v6(start$$8, stop$$4) {
  var v906 = this.characters;
  introspect(JAM.policy.p27) {
    var v538 = v906.slice(start$$8, stop$$4)
  }
  introspect(JAM.policy.p10) {
    var v31 = v538.join("")
  }
  var textToWrite = v31 + "\n";
  introspect(JAM.policy.p15) {
    var v539 = textToWrite.search(/\w/)
  }
  var v37 = v539 != -1;
  if (v37) {
    var v32 = outputWindow.document;
    var v540 = this.positionLabel;
    var v33 = rightNum(v540, "", 8, "");
    introspect(JAM.policy.p17) {
      v32.write(v33);
    }
    var v34 = this.positionLabel;
    introspect(JAM.policy.p15) {
      var v541 = textToWrite.match(/[A-Z]/g)
    }
    var v35 = v541.length;
    this.positionLabel = v34 + v35;
    var v36 = outputWindow.document;
    introspect(JAM.policy.p17) {
      v36.write(textToWrite);
    }
  }
  return;
}
function v5(start$$7, stop$$3) {
  var v38 = outputWindow.document;
  var v542 = this.positionLabel;
  var v39 = rightNum(v542, "", 8, "");
  introspect(JAM.policy.p17) {
    v38.write(v39);
  }
  var v40 = outputWindow.document;
  var v1091 = this.characters;
  introspect(JAM.policy.p27) {
    var v907 = v1091.slice(start$$7, stop$$3)
  }
  introspect(JAM.policy.p10) {
    var v543 = v907.join("")
  }
  var v41 = v543 + "\n";
  introspect(JAM.policy.p17) {
    v40.write(v41);
  }
  var v42 = this.positionLabel;
  var v544 = stop$$3 - start$$7;
  var v43 = v544 / 3;
  this.positionLabel = v42 + v43;
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
  var v44 = arrayOfSequences[0];
  var lengthOfAlign = v44.length;
  var v545 = arrayOfSequences.length;
  var v45 = v545 < 2;
  if (v45) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v546 = arrayOfTitles.length;
  var v47 = i$$1 < v546;
  for (;v47;) {
    var v1222 = arrayOfTitles[i$$1];
    introspect(JAM.policy.p15) {
      var v1092 = v1222.search(/\S/)
    }
    var v908 = v1092 == -1;
    var v1094 = !v908;
    if (v1094) {
      var v1223 = arrayOfSequences[i$$1];
      introspect(JAM.policy.p15) {
        var v1093 = v1223.search(/\S/)
      }
      v908 = v1093 == -1;
    }
    var v547 = v908;
    var v910 = !v547;
    if (v910) {
      var v1095 = arrayOfSequences[i$$1];
      var v909 = v1095.length;
      v547 = v909 != lengthOfAlign;
    }
    var v46 = v547;
    if (v46) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v548 = arrayOfTitles.length;
    v47 = i$$1 < v548;
  }
  return true;
}
function checkCodonTable(codonTable) {
  introspect(JAM.policy.p15) {
    var v1314 = codonTable.search(/AmAcid/)
  }
  var v1224 = v1314 == -1;
  var v1316 = !v1224;
  if (v1316) {
    introspect(JAM.policy.p15) {
      var v1315 = codonTable.search(/Codon/)
    }
    v1224 = v1315 == -1;
  }
  var v1096 = v1224;
  var v1226 = !v1096;
  if (v1226) {
    introspect(JAM.policy.p15) {
      var v1225 = codonTable.search(/Number/)
    }
    v1096 = v1225 == -1;
  }
  var v911 = v1096;
  var v1098 = !v911;
  if (v1098) {
    introspect(JAM.policy.p15) {
      var v1097 = codonTable.search(/\/1000/)
    }
    v911 = v1097 == -1;
  }
  var v549 = v911;
  var v913 = !v549;
  if (v913) {
    introspect(JAM.policy.p15) {
      var v912 = codonTable.search(/Fraction\s*\.\./)
    }
    v549 = v912 == -1;
  }
  var v48 = v549;
  if (v48) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v914 = formElement.value;
  introspect(JAM.policy.p15) {
    var v550 = v914.search(/\S/)
  }
  var v49 = v550 == -1;
  if (v49) {
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
  var v551 = arrayOfPatterns.length;
  var v52 = z$$2 < v551;
  for (;v52;) {
    var v915 = arrayOfPatterns[z$$2];
    introspect(JAM.policy.p15) {
      var v552 = v915.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/)
    }
    var v50 = v552 == -1;
    if (v50) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v916 = arrayOfPatterns[z$$2];
    var v553 = moreExpressionCheck(v916);
    var v51 = v553 == false;
    if (v51) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v554 = arrayOfPatterns.length;
    v52 = z$$2 < v554;
  }
  var v53 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v53);
  var v54 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v54);
  var j = 0;
  var v555 = arrayOfPatterns.length;
  var v58 = j < v555;
  for (;v58;) {
    var v917 = arrayOfPatterns[j];
    introspect(JAM.policy.p15) {
      var v556 = v917.match(/\/.+\//)
    }
    var v55 = v556 + "gi";
    var v1846 = eval(v55);
    geneticCodeMatchExp[j] = v1846;
    var v557 = arrayOfPatterns[j];
    introspect(JAM.policy.p15) {
      var v56 = v557.match(/=[a-zA-Z\*]/)
    }
    var v1847 = v56.toString();
    geneticCodeMatchResult[j] = v1847;
    var v57 = geneticCodeMatchResult[j];
    introspect(JAM.policy.p16) {
      var v1848 = v57.replace(/=/g, "")
    }
    geneticCodeMatchResult[j] = v1848;
    j++;
    var v558 = arrayOfPatterns.length;
    v58 = j < v558;
  }
  var i$$2 = 0;
  var v918 = testSequence.length;
  var v559 = v918 - 3;
  var v65 = i$$2 <= v559;
  for (;v65;) {
    var v59 = i$$2 + 3;
    introspect(JAM.policy.p16) {
      codon = testSequence.substring(i$$2, v59);
    }
    j = 0;
    var v560 = geneticCodeMatchExp.length;
    var v63 = j < v560;
    for (;v63;) {
      var v919 = geneticCodeMatchExp[j];
      introspect(JAM.policy.p17) {
        var v561 = codon.search(v919)
      }
      var v62 = v561 != -1;
      if (v62) {
        var v61 = oneMatch == true;
        if (v61) {
          var v562 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v60 = v562 + ".";
          alert(v60);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v563 = geneticCodeMatchExp.length;
      v63 = j < v563;
    }
    var v64 = oneMatch == false;
    if (v64) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v920 = testSequence.length;
    var v564 = v920 - 3;
    v65 = i$$2 <= v564;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v565 = arrayOfPatterns$$1.length;
  var v67 = z$$3 < v565;
  for (;v67;) {
    var v921 = arrayOfPatterns$$1[z$$3];
    introspect(JAM.policy.p15) {
      var v566 = v921.search(/[^acdefghiklmnpqrstvwyz]/i)
    }
    var v66 = v566 != -1;
    if (v66) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v567 = arrayOfPatterns$$1.length;
    v67 = z$$3 < v567;
  }
  var i$$3 = 0;
  var v568 = arrayOfPatterns$$1.length;
  var v71 = i$$3 < v568;
  for (;v71;) {
    var v922 = arrayOfPatterns$$1[i$$3];
    var v569 = "[" + v922;
    var v68 = v569 + "]";
    var re = new RegExp(v68, "gi");
    var j$$1 = i$$3 + 1;
    var v570 = arrayOfPatterns$$1.length;
    var v70 = j$$1 < v570;
    for (;v70;) {
      var v923 = arrayOfPatterns$$1[j$$1];
      introspect(JAM.policy.p17) {
        var v571 = v923.search(re)
      }
      var v69 = v571 != -1;
      if (v69) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v572 = arrayOfPatterns$$1.length;
      v70 = j$$1 < v572;
    }
    i$$3++;
    var v573 = arrayOfPatterns$$1.length;
    v71 = i$$3 < v573;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v574 = arrayOfPatterns$$2.length;
  var v74 = z$$4 < v574;
  for (;v74;) {
    var v924 = arrayOfPatterns$$2[z$$4];
    introspect(JAM.policy.p15) {
      var v575 = v924.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i)
    }
    var v72 = v575 == -1;
    if (v72) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v925 = arrayOfPatterns$$2[z$$4];
    var v576 = moreExpressionCheck(v925);
    var v73 = v576 == false;
    if (v73) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v577 = arrayOfPatterns$$2.length;
    v74 = z$$4 < v577;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v1099 = getSequenceFromFasta(text$$7);
  introspect(JAM.policy.p16) {
    var v926 = v1099.replace(/[^A-Za-z]/g, "")
  }
  var v578 = v926.length;
  var v76 = v578 > maxInput;
  if (v76) {
    var v579 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v75 = v579 + " characters.";
    alert(v75);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v580 = text$$8.length;
  var v78 = v580 > maxInput$$1;
  if (v78) {
    var v581 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v77 = v581 + " characters.";
    alert(v77);
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
  var v79 = outputWindow.document;
  introspect(JAM.policy.p10) {
    v79.write("</form>");
  }
  return true;
}
function closePre() {
  var v80 = outputWindow.document;
  introspect(JAM.policy.p10) {
    v80.write("</div>");
  }
  var v81 = outputWindow.document;
  introspect(JAM.policy.p10) {
    v81.write("</pre>\n");
  }
  return;
}
function closeTextArea() {
  var v82 = outputWindow.document;
  introspect(JAM.policy.p10) {
    v82.write("</textarea>");
  }
  return true;
}
function closeWindow() {
  var v83 = outputWindow.document;
  introspect(JAM.policy.p10) {
    v83.write("</body>\n</html>\n");
  }
  outputWindow.status = "Done.";
  var v84 = outputWindow.document;
  v84.close();
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
  var v582 = alignArray.length;
  var v85 = v582 < 3;
  if (v85) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v583 = alignArray.length;
  var v87 = i$$4 < v583;
  for (;v87;) {
    var v927 = alignArray[i$$4];
    introspect(JAM.policy.p15) {
      var v584 = v927.search(/[^\s]+\s/)
    }
    var v86 = v584 == -1;
    if (v86) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v585 = alignArray.length;
    v87 = i$$4 < v585;
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
    var v586 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v90 = v586 != -1;
  if (v90) {
    introspect(JAM.policy.p17) {
      var v89 = matchArray = re$$1.exec(sequenceData)
    }
    for (;v89;) {
      var v88 = matchArray[0];
      introspect(JAM.policy.p17) {
        arrayOfFasta.push(v88);
      }
      introspect(JAM.policy.p17) {
        v89 = matchArray = re$$1.exec(sequenceData);
      }
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v587 = sequence$$2.length;
  var v91 = "&gt;results for " + v587;
  var stringToReturn = v91 + " residue sequence ";
  introspect(JAM.policy.p15) {
    var v588 = fastaSequenceTitle.search(/[^\s]/)
  }
  var v93 = v588 != -1;
  if (v93) {
    var v589 = stringToReturn + '"';
    var v92 = v589 + fastaSequenceTitle;
    stringToReturn = v92 + '"';
  }
  var v590 = stringToReturn + ' starting "';
  introspect(JAM.policy.p13) {
    var v591 = sequence$$2.substring(0, 10)
  }
  var v94 = v590 + v591;
  stringToReturn = v94 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v592 = sequenceOne.length;
  var v95 = "Search results for " + v592;
  var stringToReturn$$1 = v95 + " residue sequence ";
  introspect(JAM.policy.p15) {
    var v593 = fastaSequenceTitleOne.search(/[^\s]/)
  }
  var v97 = v593 != -1;
  if (v97) {
    var v594 = stringToReturn$$1 + '"';
    var v96 = v594 + fastaSequenceTitleOne;
    stringToReturn$$1 = v96 + '"';
  }
  var v595 = stringToReturn$$1 + ' starting "';
  introspect(JAM.policy.p13) {
    var v596 = sequenceOne.substring(0, 10)
  }
  var v98 = v595 + v596;
  stringToReturn$$1 = v98 + '"\n';
  var v597 = stringToReturn$$1 + "and ";
  var v598 = sequenceTwo.length;
  var v99 = v597 + v598;
  stringToReturn$$1 = v99 + " residue sequence ";
  introspect(JAM.policy.p15) {
    var v599 = fastaSequenceTitleTwo.search(/[^\s]/)
  }
  var v101 = v599 != -1;
  if (v101) {
    var v600 = stringToReturn$$1 + '"';
    var v100 = v600 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v100 + '"';
  }
  var v601 = stringToReturn$$1 + ' starting "';
  introspect(JAM.policy.p13) {
    var v602 = sequenceTwo.substring(0, 10)
  }
  var v102 = v601 + v602;
  stringToReturn$$1 = v102 + '"';
  var v103 = '<div class="info">' + stringToReturn$$1;
  return v103 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v104 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v104);
  var j$$2 = 0;
  var v603 = arrayOfPatterns$$3.length;
  var v106 = j$$2 < v603;
  for (;v106;) {
    var v928 = arrayOfPatterns$$3[j$$2];
    introspect(JAM.policy.p15) {
      var v604 = v928.match(/\/.+\//)
    }
    var v105 = v604 + "gi";
    var v1849 = eval(v105);
    geneticCodeMatchExp$$1[j$$2] = v1849;
    j$$2++;
    var v605 = arrayOfPatterns$$3.length;
    v106 = j$$2 < v605;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v107 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v107);
  var j$$3 = 0;
  var v606 = arrayOfPatterns$$4.length;
  var v110 = j$$3 < v606;
  for (;v110;) {
    var v607 = arrayOfPatterns$$4[j$$3];
    introspect(JAM.policy.p15) {
      var v108 = v607.match(/=[a-zA-Z\*]/)
    }
    var v1850 = v108.toString();
    geneticCodeMatchResult$$1[j$$3] = v1850;
    var v109 = geneticCodeMatchResult$$1[j$$3];
    introspect(JAM.policy.p16) {
      var v1851 = v109.replace(/=/g, "")
    }
    geneticCodeMatchResult$$1[j$$3] = v1851;
    j$$3++;
    var v608 = arrayOfPatterns$$4.length;
    v110 = j$$3 < v608;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v609 = sequence$$3.length;
  var v111 = "Results for " + v609;
  var stringToReturn$$2 = v111 + " residue sequence ";
  introspect(JAM.policy.p15) {
    var v610 = fastaSequenceTitle$$1.search(/[^\s]/)
  }
  var v113 = v610 != -1;
  if (v113) {
    var v611 = stringToReturn$$2 + '"';
    var v112 = v611 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v112 + '"';
  }
  var v612 = stringToReturn$$2 + ' starting "';
  introspect(JAM.policy.p13) {
    var v613 = sequence$$3.substring(0, 10)
  }
  var v114 = v612 + v613;
  stringToReturn$$2 = v114 + '"';
  var v115 = '<div class="info">' + stringToReturn$$2;
  return v115 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v929 = "Results for " + topology;
  var v614 = v929 + " ";
  var v615 = sequence$$4.length;
  var v116 = v614 + v615;
  var stringToReturn$$3 = v116 + " residue sequence ";
  introspect(JAM.policy.p15) {
    var v616 = fastaSequenceTitle$$2.search(/[^\s]/)
  }
  var v118 = v616 != -1;
  if (v118) {
    var v617 = stringToReturn$$3 + '"';
    var v117 = v617 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v117 + '"';
  }
  var v618 = stringToReturn$$3 + ' starting "';
  introspect(JAM.policy.p13) {
    var v619 = sequence$$4.substring(0, 10)
  }
  var v119 = v618 + v619;
  stringToReturn$$3 = v119 + '"';
  var v120 = '<div class="info">' + stringToReturn$$3;
  return v120 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v620 = sequenceOne$$1.length;
  var v121 = "Alignment results for " + v620;
  var stringToReturn$$4 = v121 + " residue sequence ";
  introspect(JAM.policy.p15) {
    var v621 = fastaSequenceTitleOne$$1.search(/[^\s]/)
  }
  var v123 = v621 != -1;
  if (v123) {
    var v622 = stringToReturn$$4 + '"';
    var v122 = v622 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v122 + '"';
  }
  var v623 = stringToReturn$$4 + ' starting "';
  introspect(JAM.policy.p13) {
    var v624 = sequenceOne$$1.substring(0, 10)
  }
  var v124 = v623 + v624;
  stringToReturn$$4 = v124 + '"\n';
  var v625 = stringToReturn$$4 + "and ";
  var v626 = sequenceTwo$$1.length;
  var v125 = v625 + v626;
  stringToReturn$$4 = v125 + " residue sequence ";
  introspect(JAM.policy.p15) {
    var v627 = fastaSequenceTitleTwo$$1.search(/[^\s]/)
  }
  var v127 = v627 != -1;
  if (v127) {
    var v628 = stringToReturn$$4 + '"';
    var v126 = v628 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v126 + '"';
  }
  var v629 = stringToReturn$$4 + ' starting "';
  introspect(JAM.policy.p13) {
    var v630 = sequenceTwo$$1.substring(0, 10)
  }
  var v128 = v629 + v630;
  stringToReturn$$4 = v128 + '"';
  var v129 = '<div class="info">' + stringToReturn$$4;
  return v129 + "</div>\n";
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v131 = j$$4 < lengthOut;
  for (;v131;) {
    var v631 = Math.random();
    var v632 = components.length;
    var v130 = v631 * v632;
    introspect(JAM.policy.p15) {
      tempNum = Math.floor(v130);
    }
    tempChar = components[tempNum];
    introspect(JAM.policy.p17) {
      sequenceArray.push(tempChar);
    }
    j$$4++;
    v131 = j$$4 < lengthOut;
  }
  introspect(JAM.policy.p10) {
    return sequenceArray.join("");
  }
}
function getSequenceFromFasta(sequenceRecord) {
  introspect(JAM.policy.p15) {
    var v633 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v132 = v633 != -1;
  if (v132) {
    introspect(JAM.policy.p16) {
      sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "");
    }
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  introspect(JAM.policy.p15) {
    var v634 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/)
  }
  var v134 = v634 != -1;
  if (v134) {
    introspect(JAM.policy.p16) {
      var v133 = sequenceRecord$$1.match(/\>[^\f\n\r]+[\f\n\r]/, "")
    }
    fastaTitle = v133.toString();
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
    var v1582 = expressionToCheck.search(/\[[A-Za-z\|]*\[/)
  }
  var v1555 = v1582 != -1;
  var v1584 = !v1555;
  if (v1584) {
    introspect(JAM.policy.p15) {
      var v1583 = expressionToCheck.search(/\][A-Za-z\|]*\]/)
    }
    v1555 = v1583 != -1;
  }
  var v1524 = v1555;
  var v1557 = !v1524;
  if (v1557) {
    introspect(JAM.policy.p15) {
      var v1556 = expressionToCheck.search(/\[\]/)
    }
    v1524 = v1556 != -1;
  }
  var v1491 = v1524;
  var v1526 = !v1491;
  if (v1526) {
    introspect(JAM.policy.p15) {
      var v1525 = expressionToCheck.search(/\/[A-Za-z\|]*\]/)
    }
    v1491 = v1525 != -1;
  }
  var v1444 = v1491;
  var v1493 = !v1444;
  if (v1493) {
    introspect(JAM.policy.p15) {
      var v1492 = expressionToCheck.search(/\[[A-Za-z\|]*\//)
    }
    v1444 = v1492 != -1;
  }
  var v1381 = v1444;
  var v1446 = !v1381;
  if (v1446) {
    introspect(JAM.policy.p15) {
      var v1445 = expressionToCheck.search(/\|\|/)
    }
    v1381 = v1445 != -1;
  }
  var v1317 = v1381;
  var v1383 = !v1317;
  if (v1383) {
    introspect(JAM.policy.p15) {
      var v1382 = expressionToCheck.search(/\/\|/)
    }
    v1317 = v1382 != -1;
  }
  var v1227 = v1317;
  var v1319 = !v1227;
  if (v1319) {
    introspect(JAM.policy.p15) {
      var v1318 = expressionToCheck.search(/\|\//)
    }
    v1227 = v1318 != -1;
  }
  var v1100 = v1227;
  var v1229 = !v1100;
  if (v1229) {
    introspect(JAM.policy.p15) {
      var v1228 = expressionToCheck.search(/\[.\]/)
    }
    v1100 = v1228 != -1;
  }
  var v930 = v1100;
  var v1102 = !v930;
  if (v1102) {
    introspect(JAM.policy.p15) {
      var v1101 = expressionToCheck.search(/\</)
    }
    v930 = v1101 != -1;
  }
  var v635 = v930;
  var v932 = !v635;
  if (v932) {
    introspect(JAM.policy.p15) {
      var v931 = expressionToCheck.search(/\>/)
    }
    v635 = v931 != -1;
  }
  var v135 = v635;
  if (v135) {
    return false;
  }
  return true;
}
function openForm() {
  var v136 = outputWindow.document;
  introspect(JAM.policy.p10) {
    v136.write('<form action="">\n');
  }
  return true;
}
function openPre() {
  var v137 = outputWindow.document;
  introspect(JAM.policy.p10) {
    v137.write("<pre>");
  }
  var v138 = outputWindow.document;
  introspect(JAM.policy.p10) {
    v138.write('<div class="pre">');
  }
  return;
}
function openTextArea() {
  var v139 = outputWindow.document;
  introspect(JAM.policy.p10) {
    v139.write('<br /><textarea rows="6" cols="61">\n');
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
  var v140 = outputWindow.document;
  var v1103 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v933 = v1103 + "<head>\n";
  var v636 = v933 + "<title>Sequence Manipulation Suite</title>\n";
  var v141 = v636 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  introspect(JAM.policy.p17) {
    v140.write(v141);
  }
  if (isColor) {
    var v142 = outputWindow.document;
    var v1657 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1633 = v1657 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1609 = v1633 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1585 = v1609 + "div.info {font-weight: bold}\n";
    var v1558 = v1585 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1527 = v1558 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v1494 = v1527 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v1447 = v1494 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1384 = v1447 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v1320 = v1384 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v1230 = v1320 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v1104 = v1230 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v934 = v1104 + "td.many {color: #000000}\n";
    var v637 = v934 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v143 = v637 + "</style>\n";
    introspect(JAM.policy.p17) {
      v142.write(v143);
    }
  } else {
    var v144 = outputWindow.document;
    var v1679 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1658 = v1679 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1634 = v1658 + "div.title {display: none}\n";
    var v1610 = v1634 + "div.info {font-weight: bold}\n";
    var v1586 = v1610 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1559 = v1586 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1528 = v1559 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v1495 = v1528 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1448 = v1495 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1385 = v1448 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1321 = v1385 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v1231 = v1321 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1105 = v1231 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v935 = v1105 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v638 = v935 + "img {display: none}\n";
    var v145 = v638 + "</style>\n";
    introspect(JAM.policy.p17) {
      v144.write(v145);
    }
  }
  var v146 = outputWindow.document;
  var v1106 = "</head>\n" + '<body class="main">\n';
  var v936 = v1106 + '<div class="title">';
  var v639 = v936 + title$$6;
  var v147 = v639 + " results</div>\n";
  introspect(JAM.policy.p17) {
    v146.write(v147);
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
  var v148 = outputWindow.document;
  var v1107 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v937 = v1107 + "<head>\n";
  var v640 = v937 + "<title>Sequence Manipulation Suite</title>\n";
  var v149 = v640 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  introspect(JAM.policy.p17) {
    v148.write(v149);
  }
  if (isBackground) {
    var v150 = outputWindow.document;
    var v1659 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1635 = v1659 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1611 = v1635 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1587 = v1611 + "div.info {font-weight: bold}\n";
    var v1560 = v1587 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v1529 = v1560 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v1496 = v1529 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v1449 = v1496 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v1386 = v1449 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v1322 = v1386 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v1232 = v1322 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v1108 = v1232 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v938 = v1108 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v641 = v938 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v151 = v641 + "</style>\n";
    introspect(JAM.policy.p17) {
      v150.write(v151);
    }
  } else {
    var v152 = outputWindow.document;
    var v1699 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1680 = v1699 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1660 = v1680 + "div.title {display: none}\n";
    var v1636 = v1660 + "div.info {font-weight: bold}\n";
    var v1612 = v1636 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1588 = v1612 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v1561 = v1588 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v1530 = v1561 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v1497 = v1530 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v1450 = v1497 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v1387 = v1450 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v1323 = v1387 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v1233 = v1323 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v1109 = v1233 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v939 = v1109 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v642 = v939 + "img {display: none}\n";
    var v153 = v642 + "</style>\n";
    introspect(JAM.policy.p17) {
      v152.write(v153);
    }
  }
  var v154 = outputWindow.document;
  var v1110 = "</head>\n" + '<body class="main">\n';
  var v940 = v1110 + '<div class="title">';
  var v643 = v940 + title$$8;
  var v155 = v643 + " results</div>\n";
  introspect(JAM.policy.p17) {
    v154.write(v155);
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
    var v644 = dnaSequence$$1.search(/./)
  }
  var v156 = v644 != -1;
  if (v156) {
    introspect(JAM.policy.p15) {
      tempDnaArray = dnaSequence$$1.match(/./g);
    }
    tempDnaArray = tempDnaArray.reverse();
    introspect(JAM.policy.p10) {
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
  var v157 = j$$5 < lengthOfColumn;
  for (;v157;) {
    tempString = tempString + " ";
    j$$5++;
    v157 = j$$5 < lengthOfColumn;
  }
  var v158 = tempString + theNumber;
  theNumber = v158 + " ";
  var v159 = sequenceToAppend + theNumber;
  sequenceToAppend = v159 + tabIn;
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
  var v645 = testArray[0];
  var v160 = v645 != testString;
  if (v160) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  introspect(JAM.policy.p17) {
    var v646 = testString.search(re$$2)
  }
  var v161 = v646 == -1;
  if (v161) {
    alert("Regular expression 'm' flag not supported. See browser compatibility page.");
    return false;
  }
  var caughtException = false;
  try {
    re$$2 = eval("Exception handling not supported. Check browser compatibility page.");
  } catch (e$$4) {
    caughtException = true;
  }
  var v162 = !caughtException;
  if (v162) {
    alert("Exception handling not supported. See browser compatibility page.");
  }
  testString = "123";
  introspect(JAM.policy.p16) {
    testString = testString.replace(/(\d)/g, v1);
  }
  var v163 = testString != "1X2X3X";
  if (v163) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false;
  }
  var testNum = 2489.8237;
  introspect(JAM.policy.p11) {
    var v647 = testNum.toFixed(3)
  }
  var v164 = v647 != 2489.824;
  if (v164) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  introspect(JAM.policy.p11) {
    var v648 = testNum.toPrecision(5)
  }
  var v165 = v648 != 2489.8;
  if (v165) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  introspect(JAM.policy.p15) {
    var v649 = theNumber$$1.search(/\d/)
  }
  var v166 = v649 == -1;
  if (v166) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  introspect(JAM.policy.p15) {
    var v1234 = emblFile.search(/ID/)
  }
  var v1111 = v1234 == -1;
  var v1236 = !v1111;
  if (v1236) {
    introspect(JAM.policy.p15) {
      var v1235 = emblFile.search(/AC/)
    }
    v1111 = v1235 == -1;
  }
  var v941 = v1111;
  var v1113 = !v941;
  if (v1113) {
    introspect(JAM.policy.p15) {
      var v1112 = emblFile.search(/DE/)
    }
    v941 = v1112 == -1;
  }
  var v650 = v941;
  var v943 = !v650;
  if (v943) {
    introspect(JAM.policy.p15) {
      var v942 = emblFile.search(/SQ/)
    }
    v650 = v942 == -1;
  }
  var v167 = v650;
  if (v167) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  introspect(JAM.policy.p15) {
    var v651 = theNumber$$2.search(/\d/)
  }
  var v168 = v651 == -1;
  if (v168) {
    alert("Please enter a number.");
    return false;
  }
  var v170 = theNumber$$2 > maxInput$$2;
  if (v170) {
    var v652 = "Please enter a number less than or equal to " + maxInput$$2;
    var v169 = v652 + ".";
    alert(v169);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  introspect(JAM.policy.p15) {
    var v653 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i)
  }
  var v171 = v653 != -1;
  if (v171) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  introspect(JAM.policy.p15) {
    var v654 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i)
  }
  var v172 = v654 != -1;
  if (v172) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  introspect(JAM.policy.p15) {
    var v1237 = genBankFile.search(/LOCUS/)
  }
  var v1114 = v1237 == -1;
  var v1239 = !v1114;
  if (v1239) {
    introspect(JAM.policy.p15) {
      var v1238 = genBankFile.search(/DEFINITION/)
    }
    v1114 = v1238 == -1;
  }
  var v944 = v1114;
  var v1116 = !v944;
  if (v1116) {
    introspect(JAM.policy.p15) {
      var v1115 = genBankFile.search(/ACCESSION/)
    }
    v944 = v1115 == -1;
  }
  var v655 = v944;
  var v946 = !v655;
  if (v946) {
    introspect(JAM.policy.p15) {
      var v945 = genBankFile.search(/ORIGIN/)
    }
    v655 = v945 == -1;
  }
  var v173 = v655;
  if (v173) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  introspect(JAM.policy.p15) {
    var v1240 = genBankFile$$1.search(/LOCUS/)
  }
  var v1117 = v1240 == -1;
  var v1242 = !v1117;
  if (v1242) {
    introspect(JAM.policy.p15) {
      var v1241 = genBankFile$$1.search(/DEFINITION/)
    }
    v1117 = v1241 == -1;
  }
  var v947 = v1117;
  var v1119 = !v947;
  if (v1119) {
    introspect(JAM.policy.p15) {
      var v1118 = genBankFile$$1.search(/ACCESSION/)
    }
    v947 = v1118 == -1;
  }
  var v656 = v947;
  var v949 = !v656;
  if (v949) {
    introspect(JAM.policy.p15) {
      var v948 = genBankFile$$1.search(/ORIGIN/)
    }
    v656 = v948 == -1;
  }
  var v174 = v656;
  if (v174) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  introspect(JAM.policy.p15) {
    var v657 = genBankFile$$1.search(/FEATURES {13}/)
  }
  var v175 = v657 == -1;
  if (v175) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  introspect(JAM.policy.p15) {
    var v1243 = emblFile$$1.search(/ID/)
  }
  var v1120 = v1243 == -1;
  var v1245 = !v1120;
  if (v1245) {
    introspect(JAM.policy.p15) {
      var v1244 = emblFile$$1.search(/AC/)
    }
    v1120 = v1244 == -1;
  }
  var v950 = v1120;
  var v1122 = !v950;
  if (v1122) {
    introspect(JAM.policy.p15) {
      var v1121 = emblFile$$1.search(/DE/)
    }
    v950 = v1121 == -1;
  }
  var v658 = v950;
  var v952 = !v658;
  if (v952) {
    introspect(JAM.policy.p15) {
      var v951 = emblFile$$1.search(/SQ/)
    }
    v658 = v951 == -1;
  }
  var v176 = v658;
  if (v176) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  introspect(JAM.policy.p15) {
    var v659 = emblFile$$1.search(/^FT/m)
  }
  var v177 = v659 == -1;
  if (v177) {
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
  var v184 = i$$5 < stopBase;
  for (;v184;) {
    var v178 = i$$5 + 1;
    lineOfText = rightNum(v178, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v660 = basePerLine / groupSize;
    var v181 = j$$6 <= v660;
    for (;v181;) {
      var v180 = k < groupSize;
      for (;v180;) {
        var v661 = k + i$$5;
        introspect(JAM.policy.p17) {
          var v179 = text$$10.charAt(v661)
        }
        lineOfText = lineOfText + v179;
        k = k + 1;
        v180 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v662 = basePerLine / groupSize;
      v181 = j$$6 <= v662;
    }
    var v182 = outputWindow.document;
    var v183 = lineOfText + "\n";
    introspect(JAM.policy.p17) {
      v182.write(v183);
    }
    lineOfText = "";
    v184 = i$$5 < stopBase;
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
    var v663 = adjustment < 0;
    if (v663) {
      v663 = adjusted >= 0;
    }
    var v185 = v663;
    if (v185) {
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
  var v218 = i$$6 < stopBase$$2;
  for (;v218;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v664 = basePerLine$$2 / groupSize$$2;
    var v194 = j$$7 <= v664;
    for (;v194;) {
      var v189 = k$$1 < groupSize$$2;
      for (;v189;) {
        var v665 = i$$6 + k$$1;
        var v186 = v665 >= stopBase$$2;
        if (v186) {
          break;
        }
        var v187 = lineOfText$$1;
        var v666 = k$$1 + i$$6;
        introspect(JAM.policy.p17) {
          var v188 = text$$12.charAt(v666)
        }
        lineOfText$$1 = v187 + v188;
        k$$1 = k$$1 + 1;
        v189 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v192 = numberPosition$$1 == "above";
      if (v192) {
        var v190 = aboveNum;
        var v667 = adjustNumbering(i$$6, numberingAdjustment);
        var v191 = rightNum(v667, "", groupSize$$2, tabIn$$3);
        aboveNum = v190 + v191;
      }
      var v193 = i$$6 >= stopBase$$2;
      if (v193) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v668 = basePerLine$$2 / groupSize$$2;
      v194 = j$$7 <= v668;
    }
    var v217 = numberPosition$$1 == "left";
    if (v217) {
      var v195 = outputWindow.document;
      var v1123 = adjustNumbering(lineNum, numberingAdjustment);
      var v953 = rightNum(v1123, "", 8, tabIn$$3);
      var v669 = v953 + lineOfText$$1;
      var v196 = v669 + "\n";
      introspect(JAM.policy.p17) {
        v195.write(v196);
      }
      var v200 = strands$$1 == "two";
      if (v200) {
        var v197 = outputWindow.document;
        var v1124 = adjustNumbering(lineNum, numberingAdjustment);
        var v954 = rightNum(v1124, "", 8, tabIn$$3);
        var v955 = complement(lineOfText$$1);
        var v670 = v954 + v955;
        var v198 = v670 + "\n";
        introspect(JAM.policy.p17) {
          v197.write(v198);
        }
        var v199 = outputWindow.document;
        introspect(JAM.policy.p10) {
          v199.write("\n");
        }
      }
    } else {
      var v216 = numberPosition$$1 == "right";
      if (v216) {
        var v201 = outputWindow.document;
        var v956 = lineOfText$$1;
        var v957 = adjustNumbering(i$$6, numberingAdjustment);
        var v671 = v956 + v957;
        var v202 = v671 + "\n";
        introspect(JAM.policy.p17) {
          v201.write(v202);
        }
        var v206 = strands$$1 == "two";
        if (v206) {
          var v203 = outputWindow.document;
          var v958 = complement(lineOfText$$1);
          var v959 = adjustNumbering(i$$6, numberingAdjustment);
          var v672 = v958 + v959;
          var v204 = v672 + "\n";
          introspect(JAM.policy.p17) {
            v203.write(v204);
          }
          var v205 = outputWindow.document;
          introspect(JAM.policy.p10) {
            v205.write("\n");
          }
        }
      } else {
        var v215 = numberPosition$$1 == "above";
        if (v215) {
          var v207 = outputWindow.document;
          var v208 = aboveNum + "\n";
          introspect(JAM.policy.p17) {
            v207.write(v208);
          }
          var v209 = outputWindow.document;
          var v210 = lineOfText$$1 + "\n";
          introspect(JAM.policy.p17) {
            v209.write(v210);
          }
          var v214 = strands$$1 == "two";
          if (v214) {
            var v211 = outputWindow.document;
            var v673 = complement(lineOfText$$1);
            var v212 = v673 + "\n";
            introspect(JAM.policy.p17) {
              v211.write(v212);
            }
            var v213 = outputWindow.document;
            introspect(JAM.policy.p10) {
              v213.write("\n");
            }
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v218 = i$$6 < stopBase$$2;
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
  var v237 = i$$7 < stopBase$$3;
  for (;v237;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v674 = basePerLine$$3 / groupSize$$3;
    var v225 = j$$8 <= v674;
    for (;v225;) {
      var v221 = k$$2 < groupSize$$3;
      for (;v221;) {
        var v675 = i$$7 + k$$2;
        var v219 = v675 >= stopBase$$3;
        if (v219) {
          break;
        }
        var v676 = k$$2 + i$$7;
        introspect(JAM.policy.p17) {
          var v220 = text$$13.charAt(v676)
        }
        lineOfText$$2 = lineOfText$$2 + v220;
        k$$2 = k$$2 + 1;
        v221 = k$$2 < groupSize$$3;
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v223 = numberPosition$$2 == "above";
      if (v223) {
        var v222 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = aboveNum$$1 + v222;
      }
      var v224 = i$$7 >= stopBase$$3;
      if (v224) {
        break;
      }
      k$$2 = 0;
      j$$8++;
      var v677 = basePerLine$$3 / groupSize$$3;
      v225 = j$$8 <= v677;
    }
    var v236 = numberPosition$$2 == "left";
    if (v236) {
      var v226 = outputWindow.document;
      var v960 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v678 = v960 + lineOfText$$2;
      var v227 = v678 + "\n";
      introspect(JAM.policy.p17) {
        v226.write(v227);
      }
    } else {
      var v235 = numberPosition$$2 == "right";
      if (v235) {
        var v228 = outputWindow.document;
        var v679 = lineOfText$$2 + i$$7;
        var v229 = v679 + "\n";
        introspect(JAM.policy.p17) {
          v228.write(v229);
        }
      } else {
        var v234 = numberPosition$$2 == "above";
        if (v234) {
          var v230 = outputWindow.document;
          var v231 = aboveNum$$1 + "\n";
          introspect(JAM.policy.p17) {
            v230.write(v231);
          }
          var v232 = outputWindow.document;
          var v233 = lineOfText$$2 + "\n";
          introspect(JAM.policy.p17) {
            v232.write(v233);
          }
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v237 = i$$7 < stopBase$$3;
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
  var v1125 = sequence$$13.length;
  var v961 = v1125 <= firstIndexToMutate;
  var v1126 = !v961;
  if (v1126) {
    v961 = lastIndexToMutate < 0;
  }
  var v680 = v961;
  var v962 = !v680;
  if (v962) {
    v680 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v238 = v680;
  if (v238) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v246 = i$$8 < numMut;
  for (;v246;) {
    maxNum = sequence$$13.length;
    var v681 = Math.random();
    var v239 = v681 * maxNum;
    introspect(JAM.policy.p15) {
      randNum = Math.floor(v239);
    }
    var v682 = randNum < firstIndexToMutate;
    var v963 = !v682;
    if (v963) {
      v682 = randNum > lastIndexToMutate;
    }
    var v240 = v682;
    if (v240) {
      numMut++;
      i$$8++;
      v246 = i$$8 < numMut;
      continue;
    }
    introspect(JAM.policy.p15) {
      currentChar = sequence$$13.charAt(randNum);
    }
    needNewChar = true;
    for (;needNewChar;) {
      var v683 = Math.random();
      var v684 = components$$1.length;
      var v241 = v683 * v684;
      introspect(JAM.policy.p15) {
        componentsIndex = Math.round(v241);
      }
      var v685 = components$$1.length;
      var v242 = componentsIndex == v685;
      if (v242) {
        componentsIndex = 0;
      }
      var v686 = components$$1[componentsIndex];
      var v243 = v686 != currentChar;
      if (v243) {
        needNewChar = false;
      }
    }
    introspect(JAM.policy.p13) {
      var v687 = sequence$$13.substring(0, randNum)
    }
    var v688 = components$$1[componentsIndex];
    var v244 = v687 + v688;
    var v689 = randNum + 1;
    var v690 = sequence$$13.length;
    introspect(JAM.policy.p27) {
      var v245 = sequence$$13.substring(v689, v690)
    }
    sequence$$13 = v244 + v245;
    i$$8++;
    v246 = i$$8 < numMut;
  }
  var v247 = outputWindow.document;
  var v248 = addReturns(sequence$$13);
  introspect(JAM.policy.p17) {
    v247.write(v248);
  }
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v253 = j$$9 < lengthOut$$1;
  for (;v253;) {
    var v691 = Math.random();
    var v692 = components$$2.length;
    var v249 = v691 * v692;
    introspect(JAM.policy.p15) {
      tempNum$$1 = Math.floor(v249);
    }
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v693 = sequence$$14.length;
    var v252 = v693 == 60;
    if (v252) {
      var v250 = outputWindow.document;
      var v251 = sequence$$14 + "\n";
      introspect(JAM.policy.p17) {
        v250.write(v251);
      }
      sequence$$14 = "";
    }
    j$$9++;
    v253 = j$$9 < lengthOut$$1;
  }
  var v254 = outputWindow.document;
  var v255 = sequence$$14 + "\n";
  introspect(JAM.policy.p17) {
    v254.write(v255);
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
  var v259 = dnaConformation == "circular";
  if (v259) {
    introspect(JAM.policy.p13) {
      var v256 = sequence$$15.substring(0, lookAhead)
    }
    shiftValue = v256.length;
    var v1127 = sequence$$15.length;
    var v964 = v1127 - lookAhead;
    var v965 = sequence$$15.length;
    introspect(JAM.policy.p27) {
      var v694 = sequence$$15.substring(v964, v965)
    }
    var v257 = v694 + sequence$$15;
    introspect(JAM.policy.p13) {
      var v258 = sequence$$15.substring(0, lookAhead)
    }
    sequence$$15 = v257 + v258;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v260 = outputWindow.document;
  introspect(JAM.policy.p10) {
    v260.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  }
  var v261 = outputWindow.document;
  var v1128 = '<tr><td class="title" width="200px">' + "Site:";
  var v966 = v1128 + '</td><td class="title">';
  var v695 = v966 + "Positions:";
  var v262 = v695 + "</td></tr>\n";
  introspect(JAM.policy.p17) {
    v261.write(v262);
  }
  var i$$9 = 0;
  var v696 = arrayOfItems.length;
  var v278 = i$$9 < v696;
  for (;v278;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v697 = arrayOfItems[i$$9];
    introspect(JAM.policy.p15) {
      var v263 = v697.match(/\/.+\//)
    }
    matchExp = v263 + "gi";
    matchPosition = 0;
    matchExp = eval(matchExp);
    var v1129 = arrayOfItems[i$$9];
    introspect(JAM.policy.p15) {
      var v967 = v1129.match(/\)\D*\d+/)
    }
    var v698 = v967.toString();
    introspect(JAM.policy.p16) {
      var v264 = v698.replace(/\)\D*/, "")
    }
    cutDistance = parseFloat(v264);
    introspect(JAM.policy.p17) {
      var v270 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    for (;v270;) {
      var v265 = matchExp.lastIndex;
      matchPosition = v265 - cutDistance;
      var v699 = matchPosition >= lowerLimit;
      if (v699) {
        v699 = matchPosition < upperLimit;
      }
      var v268 = v699;
      if (v268) {
        timesFound++;
        var v266 = tempString$$1 + ", ";
        var v700 = matchPosition - shiftValue;
        var v267 = v700 + 1;
        tempString$$1 = v266 + v267;
      }
      var v701 = matchExp.lastIndex;
      var v968 = RegExp.lastMatch;
      var v702 = v968.length;
      var v269 = v701 - v702;
      matchExp.lastIndex = v269 + 1;
      introspect(JAM.policy.p17) {
        v270 = matchArray$$1 = matchExp.exec(sequence$$15);
      }
    }
    introspect(JAM.policy.p15) {
      var v703 = tempString$$1.search(/\d/)
    }
    var v271 = v703 != -1;
    if (v271) {
      introspect(JAM.policy.p16) {
        tempString$$1 = tempString$$1.replace(/none,\s*/, "");
      }
    }
    var v275 = timesFound == 0;
    if (v275) {
      backGroundClass = "none";
    } else {
      var v274 = timesFound == 1;
      if (v274) {
        backGroundClass = "one";
      } else {
        var v273 = timesFound == 2;
        if (v273) {
          backGroundClass = "two";
        } else {
          var v272 = timesFound == 3;
          if (v272) {
            backGroundClass = "three";
          } else {
            backGroundClass = "many";
          }
        }
      }
    }
    var v276 = outputWindow.document;
    var v1451 = '<tr><td class="' + backGroundClass;
    var v1388 = v1451 + '">';
    var v1531 = arrayOfItems[i$$9];
    introspect(JAM.policy.p15) {
      var v1498 = v1531.match(/\([^\(]+\)/)
    }
    var v1452 = v1498.toString();
    introspect(JAM.policy.p16) {
      var v1389 = v1452.replace(/\(|\)/g, "")
    }
    var v1324 = v1388 + v1389;
    var v1246 = v1324 + '</td><td class="';
    var v1130 = v1246 + backGroundClass;
    var v969 = v1130 + '">';
    var v704 = v969 + tempString$$1;
    var v277 = v704 + "</td></tr>\n";
    introspect(JAM.policy.p17) {
      v276.write(v277);
    }
    timesFound = 0;
    i$$9++;
    var v705 = arrayOfItems.length;
    v278 = i$$9 < v705;
  }
  var v279 = outputWindow.document;
  introspect(JAM.policy.p10) {
    v279.write("</tbody></table>\n");
  }
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v280 = outputWindow.document;
  introspect(JAM.policy.p10) {
    v280.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  }
  var v281 = outputWindow.document;
  var v1325 = '<tr><td class="title">' + "Pattern:";
  var v1247 = v1325 + '</td><td class="title">';
  var v1131 = v1247 + "Times found:";
  var v970 = v1131 + '</td><td class="title">';
  var v706 = v970 + "Percentage:";
  var v282 = v706 + "</td></tr>\n";
  introspect(JAM.policy.p17) {
    v281.write(v282);
  }
  var i$$10 = 0;
  var v707 = arrayOfItems$$1.length;
  var v291 = i$$10 < v707;
  for (;v291;) {
    var tempNumber = 0;
    var v708 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p15) {
      var v283 = v708.match(/\/[^\/]+\//)
    }
    var matchExp$$1 = v283 + "gi";
    matchExp$$1 = eval(matchExp$$1);
    introspect(JAM.policy.p17) {
      var v709 = sequence$$16.search(matchExp$$1)
    }
    var v285 = v709 != -1;
    if (v285) {
      introspect(JAM.policy.p17) {
        var v284 = sequence$$16.match(matchExp$$1)
      }
      tempNumber = v284.length;
    }
    var percentage = 0;
    var v971 = originalLength + 1;
    var v1248 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p15) {
      var v1132 = v1248.match(/\d+/)
    }
    var v972 = parseFloat(v1132);
    var v710 = v971 - v972;
    var v288 = v710 > 0;
    if (v288) {
      var v286 = 100 * tempNumber;
      var v711 = originalLength + 1;
      var v1133 = arrayOfItems$$1[i$$10];
      introspect(JAM.policy.p15) {
        var v973 = v1133.match(/\d+/)
      }
      var v712 = parseFloat(v973);
      var v287 = v711 - v712;
      percentage = v286 / v287;
    }
    var v289 = outputWindow.document;
    var v1532 = arrayOfItems$$1[i$$10];
    introspect(JAM.policy.p15) {
      var v1499 = v1532.match(/\([^\(]+\)\b/)
    }
    var v1453 = v1499.toString();
    introspect(JAM.policy.p16) {
      var v1390 = v1453.replace(/\(|\)/g, "")
    }
    var v1326 = "<tr><td>" + v1390;
    var v1249 = v1326 + "</td><td>";
    var v1134 = v1249 + tempNumber;
    var v974 = v1134 + "</td><td>";
    introspect(JAM.policy.p11) {
      var v975 = percentage.toFixed(2)
    }
    var v713 = v974 + v975;
    var v290 = v713 + "</td></tr>\n";
    introspect(JAM.policy.p17) {
      v289.write(v290);
    }
    i$$10++;
    var v714 = arrayOfItems$$1.length;
    v291 = i$$10 < v714;
  }
  var v292 = outputWindow.document;
  introspect(JAM.policy.p10) {
    v292.write("</tbody></table>\n");
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
  var v715 = sequence$$17.length;
  var v299 = v715 > 0;
  for (;v299;) {
    maxNum$$1 = sequence$$17.length;
    var v716 = Math.random();
    var v293 = v716 * maxNum$$1;
    introspect(JAM.policy.p15) {
      randNum$$1 = Math.floor(v293);
    }
    introspect(JAM.policy.p15) {
      tempChar$$2 = sequence$$17.charAt(randNum$$1);
    }
    tempSeq = tempSeq + tempChar$$2;
    introspect(JAM.policy.p13) {
      tempString1 = sequence$$17.substring(0, randNum$$1);
    }
    var v294 = randNum$$1 + 1;
    var v295 = sequence$$17.length;
    introspect(JAM.policy.p16) {
      tempString2 = sequence$$17.substring(v294, v295);
    }
    sequence$$17 = tempString1 + tempString2;
    var v717 = tempSeq.length;
    var v298 = v717 == 60;
    if (v298) {
      var v296 = outputWindow.document;
      var v297 = tempSeq + "\n";
      introspect(JAM.policy.p17) {
        v296.write(v297);
      }
      tempSeq = "";
    }
    var v718 = sequence$$17.length;
    v299 = v718 > 0;
  }
  var v300 = outputWindow.document;
  var v301 = tempSeq + "\n";
  introspect(JAM.policy.p17) {
    v300.write(v301);
  }
  return true;
}
function getRestrictionSiteString(type$$25) {
  var v719 = type$$25.toLowerCase();
  var v303 = v719 == "standard";
  if (v303) {
    var v1845 = "/aggcct/ (AatI agg|cct)3," + "/gacgtc/ (AatII gacgt|c)1,";
    var v1844 = v1845 + "/tgcgca/ (Acc16I tgc|gca)3,";
    var v1843 = v1844 + "/cgcg/ (AccII cg|cg)2,";
    var v1842 = v1843 + "/tccgga/ (AccIII t|ccgga)5,";
    var v1841 = v1842 + "/aacgtt/ (AclI aa|cgtt)4,";
    var v1840 = v1841 + "/cacgtg/ (AcvI cac|gtg)3,";
    var v1839 = v1840 + "/gtac/ (AfaI gt|ac)2,";
    var v1838 = v1839 + "/agcgct/ (AfeI agc|gct)3,";
    var v1837 = v1838 + "/cttaag/ (AflII c|ttaag)5,";
    var v1836 = v1837 + "/accggt/ (AgeI a|ccggt)5,";
    var v1835 = v1836 + "/actagt/ (AhlI a|ctagt)5,";
    var v1834 = v1835 + "/gtgcac/ (Alw441 g|tgcac)5,";
    var v1833 = v1834 + "/agct/ (AluI ag|ct)2,";
    var v1832 = v1833 + "/agcgct/ (Aor51HI agc|gct)3,";
    var v1831 = v1832 + "/gggccc/ (ApaI gggcc|c)1,";
    var v1830 = v1831 + "/gtgcac/ (ApaLI g|tgcac)5,";
    var v1829 = v1830 + "/ggcgcgcc/ (AscI gg|cgcgcc)6,";
    var v1828 = v1829 + "/attaat/ (AseI at|taat)4,";
    var v1827 = v1828 + "/ggtacc/ (Asp718I g|gtacc)5,";
    var v1826 = v1827 + "/ttcgaa/ (AsuII tt|cgaa)4,";
    var v1825 = v1826 + "/c[cty]cg[agr]g/ (AvaI c|ycgrg)5,";
    var v1824 = v1825 + "/tgcgca/ (AviII tgc|gca)3,";
    var v1823 = v1824 + "/cctagg/ (AvrII c|ctagg)5,";
    var v1822 = v1823 + "/tggcca/ (BalI tgg|cca)3,";
    var v1821 = v1822 + "/ggatcc/ (BamHI g|gatcc)5,";
    var v1820 = v1821 + "/atcgat/ (BanIII at|cgat)4,";
    var v1819 = v1820 + "/ggcgcc/ (BbeI ggcgc|c)1,";
    var v1818 = v1819 + "/cacgtg/ (BbrPI cac|gtg)3,";
    var v1817 = v1818 + "/gcatgc/ (BbuI gcatg|c)1,";
    var v1816 = v1817 + "/actagt/ (BcuI a|ctagt)5,";
    var v1815 = v1816 + "/tgatca/ (BclI t|gatca)5,";
    var v1814 = v1815 + "/ctag/ (BfaI c|tag)3,";
    var v1813 = v1814 + "/cttaag/ (BfrI c|ttaag)5,";
    var v1812 = v1813 + "/atgcat/ (BfrBI atg|cat)3,";
    var v1811 = v1812 + "/agatct/ (BglII a|gatct)5,";
    var v1810 = v1811 + "/cctagg/ (BlnI c|ctagg)5,";
    var v1809 = v1810 + "/atcgat/ (BseCI at|cgat)4,";
    var v1808 = v1809 + "/gcgcgc/ (BsePI g|cgcgc)5,";
    var v1807 = v1808 + "/cggccg/ (BseX3I c|ggccg)5,";
    var v1806 = v1807 + "/accggt/ (BshTI a|ccggt)5,";
    var v1805 = v1806 + "/tgtaca/ (Bsp1407I t|gtaca)5,";
    var v1804 = v1805 + "/ccatgg/ (Bsp19I c|catgg)5,";
    var v1803 = v1804 + "/atcgat/ (BspDI at|cgat)4,";
    var v1802 = v1803 + "/tccgga/ (BspEI t|ccgga)5,";
    var v1801 = v1802 + "/tgtaca/ (BsrGI t|gtaca)5,";
    var v1800 = v1801 + "/gcgcgc/ (BssHII g|cgcgc)5,";
    var v1799 = v1800 + "/cgcg/ (BstUI cg|cg)2,";
    var v1798 = v1799 + "/atcgat/ (ClaI at|cgat)4,";
    var v1797 = v1798 + "/gatc/ (DpnII |gatc)4,";
    var v1796 = v1797 + "/tttaaa/ (DraI ttt|aaa)3,";
    var v1795 = v1796 + "/cggccg/ (EagI c|ggccg)5,";
    var v1794 = v1795 + "/gaattc/ (EcoRI g|aattc)5,";
    var v1793 = v1794 + "/gatatc/ (EcoRV gat|atc)3,";
    var v1792 = v1793 + "/ggcgcc/ (EgeI ggc|gcc)3,";
    var v1791 = v1792 + "/ggccggcc/ (FseI ggccgg|cc)2,";
    var v1790 = v1791 + "/tgcgca/ (FspI tgc|gca)3,";
    var v1789 = v1790 + "/ggcc/ (HaeIII gg|cc)2,";
    var v1788 = v1789 + "/gt[cty][agr]ac/ (HincII gty|rac)3,";
    var v1787 = v1788 + "/aagctt/ (HindIII a|agctt)5,";
    var v1786 = v1787 + "/ga[acgturyswkmbdhvn]tc/ (HinfI g|antc)4,";
    var v1785 = v1786 + "/gttaac/ (HpaI gtt|aac)3,";
    var v1784 = v1785 + "/ccgg/ (HpaII c|cgg)3,";
    var v1783 = v1784 + "/ggcgcc/ (KasI g|gcgcc)5,";
    var v1782 = v1783 + "/ggtacc/ (KpnI ggtac|c)1,";
    var v1781 = v1782 + "/[acgturyswkmbdhvn]gatc[acgturyswkmbdhvn]/ (MboI |gatc)5,";
    var v1780 = v1781 + "/caattg/ (MfeI c|aattg)5,";
    var v1779 = v1780 + "/acgcgt/ (MluI a|cgcgt)5,";
    var v1778 = v1779 + "/tggcca/ (MscI tgg|cca)3,";
    var v1777 = v1778 + "/ttaa/ (MseI t|taa)3,";
    var v1776 = v1777 + "/ccgg/ (MspI c|cgg)3,";
    var v1775 = v1776 + "/gccggc/ (NaeI gcc|ggc)3,";
    var v1774 = v1775 + "/ggcgcc/ (NarI gg|cgcc)4,";
    var v1773 = v1774 + "/ccatgg/ (NcoI c|catgg)5,";
    var v1772 = v1773 + "/catatg/ (NdeI ca|tatg)4,";
    var v1771 = v1772 + "/gatc/ (NdeII |gatc)4,";
    var v1770 = v1771 + "/gccggc/ (NgoMIV g|ccggc)5,";
    var v1769 = v1770 + "/gctagc/ (NheI g|ctagc)5,";
    var v1768 = v1769 + "/catg/ (NlaIII catg|)0,";
    var v1767 = v1768 + "/gcggccgc/ (NotI gc|ggccgc)6,";
    var v1766 = v1767 + "/tcgcga/ (NruI tcg|cga)3,";
    var v1765 = v1766 + "/atgcat/ (NsiI atgca|t)1,";
    var v1764 = v1765 + "/ttaattaa/ (PacI ttaat|taa)3,";
    var v1763 = v1764 + "/acatgt/ (PciI a|catgt)5,";
    var v1762 = v1763 + "/ggcc/ (PhoI gg|cc)2,";
    var v1761 = v1762 + "/gtttaaac/ (PmeI gttt|aaac)4,";
    var v1760 = v1761 + "/cacgtg/ (PmlI cac|gtg)3,";
    var v1759 = v1760 + "/ttataa/ (PsiI tta|taa)3,";
    var v1758 = v1759 + "/ctgcag/ (PstI ctgca|g)1,";
    var v1757 = v1758 + "/cgatcg/ (PvuI cgat|cg)2,";
    var v1756 = v1757 + "/cagctg/ (PvuII cag|ctg)3,";
    var v1755 = v1756 + "/gtac/ (RsaI gt|ac)2,";
    var v1754 = v1755 + "/gagctc/ (SacI gagct|c)1,";
    var v1736 = v1754 + "/ccgcgg/ (SacII ccgc|gg)2,";
    var v1718 = v1736 + "/gtcgac/ (SalI g|tcgac)5,";
    var v1700 = v1718 + "/cctgcagg/ (SbfI cctgca|gg)2,";
    var v1681 = v1700 + "/agtact/ (ScaI agt|act)3,";
    var v1661 = v1681 + "/ggcgcc/ (SfoI ggc|gcc)3,";
    var v1637 = v1661 + "/cccggg/ (SmaI ccc|ggg)3,";
    var v1613 = v1637 + "/tacgta/ (SnaBI tac|gta)3,";
    var v1589 = v1613 + "/actagt/ (SpeI a|ctagt)5,";
    var v1562 = v1589 + "/gcatgc/ (SphI gcatg|c)1,";
    var v1533 = v1562 + "/aatatt/ (SspI aat|att)3,";
    var v1500 = v1533 + "/gagctc/ (SstI gagct|c)1,";
    var v1454 = v1500 + "/ccgcgg/ (SstII ccgc|gg)2,";
    var v1391 = v1454 + "/aggcct/ (StuI agg|cct)3,";
    var v1327 = v1391 + "/atttaaat/ (SwaI attt|aaat)4,";
    var v1250 = v1327 + "/tcga/ (TaqI t|cga)3,";
    var v1135 = v1250 + "/ctcgag/ (TliI c|tcgag)5,";
    var v976 = v1135 + "/attaat/ (VspI at|taat)4,";
    var v720 = v976 + "/tctaga/ (XbaI t|ctaga)5,";
    var v302 = v720 + "/ctcgag/ (XhoI c|tcgag)5,";
    return v302 + "/cccggg/ (XmaI c|ccggg)5";
  }
  return true;
}
function getGeneticCodeString(type$$26) {
  var v977 = type$$26.toLowerCase();
  var v721 = v977 == "standard";
  var v979 = !v721;
  if (v979) {
    var v978 = type$$26.toLowerCase();
    v721 = v978 == "transl_table=1";
  }
  var v305 = v721;
  if (v305) {
    var v1737 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1719 = v1737 + "/ga[tcuy]/=D,";
    var v1701 = v1719 + "/ga[agr]/=E,";
    var v1682 = v1701 + "/[tu][tu][tcuy]/=F,";
    var v1662 = v1682 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1638 = v1662 + "/ca[tcuy]/=H,";
    var v1614 = v1638 + "/a[tu][atcuwmhy]/=I,";
    var v1590 = v1614 + "/aa[agr]/=K,";
    var v1563 = v1590 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1534 = v1563 + "/a[tu]g/=M,";
    var v1501 = v1534 + "/aa[tucy]/=N,";
    var v1455 = v1501 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1392 = v1455 + "/ca[agr]/=Q,";
    var v1328 = v1392 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1251 = v1328 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1136 = v1251 + "/ac[acgturyswkmbdhvn]/=T,";
    var v980 = v1136 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v722 = v980 + "/[tu]gg/=W,";
    var v304 = v722 + "/[tu]a[ctuy]/=Y,";
    return v304 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*";
  }
  var v723 = type$$26.toLowerCase();
  var v307 = v723 == "transl_table=2";
  if (v307) {
    var v1738 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1720 = v1738 + "/ga[tcuy]/=D,";
    var v1702 = v1720 + "/ga[agr]/=E,";
    var v1683 = v1702 + "/[tu][tu][tcuy]/=F,";
    var v1663 = v1683 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1639 = v1663 + "/ca[tcuy]/=H,";
    var v1615 = v1639 + "/a[tu][tcuy]/=I,";
    var v1591 = v1615 + "/aa[agr]/=K,";
    var v1564 = v1591 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1535 = v1564 + "/a[tu][agr]/=M,";
    var v1502 = v1535 + "/aa[tucy]/=N,";
    var v1456 = v1502 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1393 = v1456 + "/ca[agr]/=Q,";
    var v1329 = v1393 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1252 = v1329 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1137 = v1252 + "/ac[acgturyswkmbdhvn]/=T,";
    var v981 = v1137 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v724 = v981 + "/[tu]g[agr]/=W,";
    var v306 = v724 + "/[tu]a[ctuy]/=Y,";
    return v306 + "/[tu]a[agr]|ag[agr]/=*";
  }
  var v725 = type$$26.toLowerCase();
  var v309 = v725 == "transl_table=3";
  if (v309) {
    var v1739 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1721 = v1739 + "/ga[tcuy]/=D,";
    var v1703 = v1721 + "/ga[agr]/=E,";
    var v1684 = v1703 + "/[tu][tu][tcuy]/=F,";
    var v1664 = v1684 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1640 = v1664 + "/ca[tcuy]/=H,";
    var v1616 = v1640 + "/a[tu][tcuy]/=I,";
    var v1592 = v1616 + "/aa[agr]/=K,";
    var v1565 = v1592 + "/[tu][tu][agr]/=L,";
    var v1536 = v1565 + "/a[tu][agr]/=M,";
    var v1503 = v1536 + "/aa[tucy]/=N,";
    var v1457 = v1503 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1394 = v1457 + "/ca[agr]/=Q,";
    var v1330 = v1394 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1253 = v1330 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1138 = v1253 + "/ac[acgturyswkmbdhvn]|c[tu][acgturyswkmbdhvn]/=T,";
    var v982 = v1138 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v726 = v982 + "/[tu]g[agr]/=W,";
    var v308 = v726 + "/[tu]a[ctuy]/=Y,";
    return v308 + "/[tu]a[agr]/=*";
  }
  var v727 = type$$26.toLowerCase();
  var v311 = v727 == "transl_table=4";
  if (v311) {
    var v1740 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1722 = v1740 + "/ga[tcuy]/=D,";
    var v1704 = v1722 + "/ga[agr]/=E,";
    var v1685 = v1704 + "/[tu][tu][tcuy]/=F,";
    var v1665 = v1685 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1641 = v1665 + "/ca[tcuy]/=H,";
    var v1617 = v1641 + "/a[tu][atcuwmhy]/=I,";
    var v1593 = v1617 + "/aa[agr]/=K,";
    var v1566 = v1593 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1537 = v1566 + "/a[tu]g/=M,";
    var v1504 = v1537 + "/aa[tucy]/=N,";
    var v1458 = v1504 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1395 = v1458 + "/ca[agr]/=Q,";
    var v1331 = v1395 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1254 = v1331 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1139 = v1254 + "/ac[acgturyswkmbdhvn]/=T,";
    var v983 = v1139 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v728 = v983 + "/[tu]g[agr]/=W,";
    var v310 = v728 + "/[tu]a[ctuy]/=Y,";
    return v310 + "/[tu]a[agr]/=*";
  }
  var v729 = type$$26.toLowerCase();
  var v313 = v729 == "transl_table=5";
  if (v313) {
    var v1741 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1723 = v1741 + "/ga[tcuy]/=D,";
    var v1705 = v1723 + "/ga[agr]/=E,";
    var v1686 = v1705 + "/[tu][tu][tcuy]/=F,";
    var v1666 = v1686 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1642 = v1666 + "/ca[tcuy]/=H,";
    var v1618 = v1642 + "/a[tu][tcuy]/=I,";
    var v1594 = v1618 + "/aa[agr]/=K,";
    var v1567 = v1594 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1538 = v1567 + "/a[tu][agr]/=M,";
    var v1505 = v1538 + "/aa[tucy]/=N,";
    var v1459 = v1505 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1396 = v1459 + "/ca[agr]/=Q,";
    var v1332 = v1396 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1255 = v1332 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v1140 = v1255 + "/ac[acgturyswkmbdhvn]/=T,";
    var v984 = v1140 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v730 = v984 + "/[tu]g[agr]/=W,";
    var v312 = v730 + "/[tu]a[ctuy]/=Y,";
    return v312 + "/[tu]a[agr]/=*";
  }
  var v731 = type$$26.toLowerCase();
  var v315 = v731 == "transl_table=6";
  if (v315) {
    var v1742 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1724 = v1742 + "/ga[tcuy]/=D,";
    var v1706 = v1724 + "/ga[agr]/=E,";
    var v1687 = v1706 + "/[tu][tu][tcuy]/=F,";
    var v1667 = v1687 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1643 = v1667 + "/ca[tcuy]/=H,";
    var v1619 = v1643 + "/a[tu][atcuwmhy]/=I,";
    var v1595 = v1619 + "/aa[agr]/=K,";
    var v1568 = v1595 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1539 = v1568 + "/a[tu]g/=M,";
    var v1506 = v1539 + "/aa[tucy]/=N,";
    var v1460 = v1506 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1397 = v1460 + "/ca[agr]|[tu]a[agr]|[tcuy]a[agr]/=Q,";
    var v1333 = v1397 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1256 = v1333 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1141 = v1256 + "/ac[acgturyswkmbdhvn]/=T,";
    var v985 = v1141 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v732 = v985 + "/[tu]gg/=W,";
    var v314 = v732 + "/[tu]a[ctuy]/=Y,";
    return v314 + "/[tu]ga/=*";
  }
  var v733 = type$$26.toLowerCase();
  var v317 = v733 == "transl_table=9";
  if (v317) {
    var v1743 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1725 = v1743 + "/ga[tcuy]/=D,";
    var v1707 = v1725 + "/ga[agr]/=E,";
    var v1688 = v1707 + "/[tu][tu][tcuy]/=F,";
    var v1668 = v1688 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1644 = v1668 + "/ca[tcuy]/=H,";
    var v1620 = v1644 + "/a[tu][atcuwmhy]/=I,";
    var v1596 = v1620 + "/aag/=K,";
    var v1569 = v1596 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1540 = v1569 + "/a[tu]g/=M,";
    var v1507 = v1540 + "/aa[atcuwmhy]/=N,";
    var v1461 = v1507 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1398 = v1461 + "/ca[agr]/=Q,";
    var v1334 = v1398 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1257 = v1334 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v1142 = v1257 + "/ac[acgturyswkmbdhvn]/=T,";
    var v986 = v1142 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v734 = v986 + "/[tu]g[agr]/=W,";
    var v316 = v734 + "/[tu]a[ctuy]/=Y,";
    return v316 + "/[tu]a[agr]/=*";
  }
  var v735 = type$$26.toLowerCase();
  var v319 = v735 == "transl_table=10";
  if (v319) {
    var v1744 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[atcuwmhy]/=C,";
    var v1726 = v1744 + "/ga[tcuy]/=D,";
    var v1708 = v1726 + "/ga[agr]/=E,";
    var v1689 = v1708 + "/[tu][tu][tcuy]/=F,";
    var v1669 = v1689 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1645 = v1669 + "/ca[tcuy]/=H,";
    var v1621 = v1645 + "/a[tu][atcuwmhy]/=I,";
    var v1597 = v1621 + "/aa[agr]/=K,";
    var v1570 = v1597 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1541 = v1570 + "/a[tu]g/=M,";
    var v1508 = v1541 + "/aa[tucy]/=N,";
    var v1462 = v1508 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1399 = v1462 + "/ca[agr]/=Q,";
    var v1335 = v1399 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1258 = v1335 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1143 = v1258 + "/ac[acgturyswkmbdhvn]/=T,";
    var v987 = v1143 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v736 = v987 + "/[tu]gg/=W,";
    var v318 = v736 + "/[tu]a[ctuy]/=Y,";
    return v318 + "/[tu]a[agr]/=*";
  }
  var v737 = type$$26.toLowerCase();
  var v321 = v737 == "transl_table=11";
  if (v321) {
    var v1745 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1727 = v1745 + "/ga[tcuy]/=D,";
    var v1709 = v1727 + "/ga[agr]/=E,";
    var v1690 = v1709 + "/[tu][tu][tcuy]/=F,";
    var v1670 = v1690 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1646 = v1670 + "/ca[tcuy]/=H,";
    var v1622 = v1646 + "/a[tu][atcuwmhy]/=I,";
    var v1598 = v1622 + "/aa[agr]/=K,";
    var v1571 = v1598 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1542 = v1571 + "/a[tu]g/=M,";
    var v1509 = v1542 + "/aa[tucy]/=N,";
    var v1463 = v1509 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1400 = v1463 + "/ca[agr]/=Q,";
    var v1336 = v1400 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1259 = v1336 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1144 = v1259 + "/ac[acgturyswkmbdhvn]/=T,";
    var v988 = v1144 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v738 = v988 + "/[tu]gg/=W,";
    var v320 = v738 + "/[tu]a[ctuy]/=Y,";
    return v320 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*";
  }
  var v739 = type$$26.toLowerCase();
  var v323 = v739 == "transl_table=12";
  if (v323) {
    var v1746 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1728 = v1746 + "/ga[tcuy]/=D,";
    var v1710 = v1728 + "/ga[agr]/=E,";
    var v1691 = v1710 + "/[tu][tu][tcuy]/=F,";
    var v1671 = v1691 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1647 = v1671 + "/ca[tcuy]/=H,";
    var v1623 = v1647 + "/a[tu][atcuwmhy]/=I,";
    var v1599 = v1623 + "/aa[agr]/=K,";
    var v1572 = v1599 + "/c[tu][atcuwmhy]|[tu][tu][agr]|[ctuy][tu]a/=L,";
    var v1543 = v1572 + "/a[tu]g/=M,";
    var v1510 = v1543 + "/aa[tucy]/=N,";
    var v1464 = v1510 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1401 = v1464 + "/ca[agr]/=Q,";
    var v1337 = v1401 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1260 = v1337 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]|c[tu]g/=S,";
    var v1145 = v1260 + "/ac[acgturyswkmbdhvn]/=T,";
    var v989 = v1145 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v740 = v989 + "/[tu]gg/=W,";
    var v322 = v740 + "/[tu]a[ctuy]/=Y,";
    return v322 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*";
  }
  var v741 = type$$26.toLowerCase();
  var v325 = v741 == "transl_table=13";
  if (v325) {
    var v1747 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1729 = v1747 + "/ga[tcuy]/=D,";
    var v1711 = v1729 + "/ga[agr]/=E,";
    var v1692 = v1711 + "/[tu][tu][tcuy]/=F,";
    var v1672 = v1692 + "/gg[acgturyswkmbdhvn]|ag[agr]|[agr]g[agr]/=G,";
    var v1648 = v1672 + "/ca[tcuy]/=H,";
    var v1624 = v1648 + "/a[tu][tcuy]/=I,";
    var v1600 = v1624 + "/aa[agr]/=K,";
    var v1573 = v1600 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1544 = v1573 + "/a[tu][agr]/=M,";
    var v1511 = v1544 + "/aa[tucy]/=N,";
    var v1465 = v1511 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1402 = v1465 + "/ca[agr]/=Q,";
    var v1338 = v1402 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1261 = v1338 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1146 = v1261 + "/ac[acgturyswkmbdhvn]/=T,";
    var v990 = v1146 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v742 = v990 + "/[tu]g[agr]/=W,";
    var v324 = v742 + "/[tu]a[ctuy]/=Y,";
    return v324 + "/[tu]a[agr]/=*";
  }
  var v743 = type$$26.toLowerCase();
  var v327 = v743 == "transl_table=14";
  if (v327) {
    var v1748 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1730 = v1748 + "/ga[tcuy]/=D,";
    var v1712 = v1730 + "/ga[agr]/=E,";
    var v1693 = v1712 + "/[tu][tu][tcuy]/=F,";
    var v1673 = v1693 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1649 = v1673 + "/ca[tcuy]/=H,";
    var v1625 = v1649 + "/a[tu][atcuwmhy]/=I,";
    var v1601 = v1625 + "/aag/=K,";
    var v1574 = v1601 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1545 = v1574 + "/a[tu]g/=M,";
    var v1512 = v1545 + "/aa[atcuwmhy]/=N,";
    var v1466 = v1512 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1403 = v1466 + "/ca[agr]/=Q,";
    var v1339 = v1403 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1262 = v1339 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v1147 = v1262 + "/ac[acgturyswkmbdhvn]/=T,";
    var v991 = v1147 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v744 = v991 + "/[tu]g[agr]/=W,";
    var v326 = v744 + "/[tu]a[atcuwmhy]/=Y,";
    return v326 + "/[tu]ag/=*";
  }
  var v745 = type$$26.toLowerCase();
  var v329 = v745 == "transl_table=15";
  if (v329) {
    var v1749 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1731 = v1749 + "/ga[tcuy]/=D,";
    var v1713 = v1731 + "/ga[agr]/=E,";
    var v1694 = v1713 + "/[tu][tu][tcuy]/=F,";
    var v1674 = v1694 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1650 = v1674 + "/ca[tcuy]/=H,";
    var v1626 = v1650 + "/a[tu][atcuwmhy]/=I,";
    var v1602 = v1626 + "/aa[agr]/=K,";
    var v1575 = v1602 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1546 = v1575 + "/a[tu]g/=M,";
    var v1513 = v1546 + "/aa[tucy]/=N,";
    var v1467 = v1513 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1404 = v1467 + "/ca[agr]|[tu]ag|[tcuy]ag/=Q,";
    var v1340 = v1404 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1263 = v1340 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1148 = v1263 + "/ac[acgturyswkmbdhvn]/=T,";
    var v992 = v1148 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v746 = v992 + "/[tu]gg/=W,";
    var v328 = v746 + "/[tu]a[ctuy]/=Y,";
    return v328 + "/[tu][agr]a/=*";
  }
  var v747 = type$$26.toLowerCase();
  var v331 = v747 == "transl_table=16";
  if (v331) {
    var v1750 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1732 = v1750 + "/ga[tcuy]/=D,";
    var v1714 = v1732 + "/ga[agr]/=E,";
    var v1695 = v1714 + "/[tu][tu][tcuy]/=F,";
    var v1675 = v1695 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1651 = v1675 + "/ca[tcuy]/=H,";
    var v1627 = v1651 + "/a[tu][atcuwmhy]/=I,";
    var v1603 = v1627 + "/aa[agr]/=K,";
    var v1576 = v1603 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]|[tu]ag|[tu][atuw]g/=L,";
    var v1547 = v1576 + "/a[tu]g/=M,";
    var v1514 = v1547 + "/aa[tucy]/=N,";
    var v1468 = v1514 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1405 = v1468 + "/ca[agr]/=Q,";
    var v1341 = v1405 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1264 = v1341 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1149 = v1264 + "/ac[acgturyswkmbdhvn]/=T,";
    var v993 = v1149 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v748 = v993 + "/[tu]gg/=W,";
    var v330 = v748 + "/[tu]a[ctuy]/=Y,";
    return v330 + "/[tu][agr]a/=*";
  }
  var v749 = type$$26.toLowerCase();
  var v333 = v749 == "transl_table=21";
  if (v333) {
    var v1751 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1733 = v1751 + "/ga[tcuy]/=D,";
    var v1715 = v1733 + "/ga[agr]/=E,";
    var v1696 = v1715 + "/[tu][tu][tcuy]/=F,";
    var v1676 = v1696 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1652 = v1676 + "/ca[tcuy]/=H,";
    var v1628 = v1652 + "/a[tu][tcuy]/=I,";
    var v1604 = v1628 + "/aag/=K,";
    var v1577 = v1604 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1548 = v1577 + "/a[tu][agr]/=M,";
    var v1515 = v1548 + "/aa[atcuwmhy]/=N,";
    var v1469 = v1515 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1406 = v1469 + "/ca[agr]/=Q,";
    var v1342 = v1406 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1265 = v1342 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v1150 = v1265 + "/ac[acgturyswkmbdhvn]/=T,";
    var v994 = v1150 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v750 = v994 + "/[tu]g[agr]/=W,";
    var v332 = v750 + "/[tu]a[ctuy]/=Y,";
    return v332 + "/[tu]a[agr]/=*";
  }
  var v751 = type$$26.toLowerCase();
  var v335 = v751 == "transl_table=22";
  if (v335) {
    var v1752 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1734 = v1752 + "/ga[tcuy]/=D,";
    var v1716 = v1734 + "/ga[agr]/=E,";
    var v1697 = v1716 + "/[tu][tu][tcuy]/=F,";
    var v1677 = v1697 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1653 = v1677 + "/ca[tcuy]/=H,";
    var v1629 = v1653 + "/a[tu][atcuwmhy]/=I,";
    var v1605 = v1629 + "/aa[agr]/=K,";
    var v1578 = v1605 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]|[tu]ag|[tu][atuw]g/=L,";
    var v1549 = v1578 + "/a[tu]g/=M,";
    var v1516 = v1549 + "/aa[tucy]/=N,";
    var v1470 = v1516 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1407 = v1470 + "/ca[agr]/=Q,";
    var v1343 = v1407 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1266 = v1343 + "/[tu]c[cgtyskb]|ag[ct]/=S,";
    var v1151 = v1266 + "/ac[acgturyswkmbdhvn]/=T,";
    var v995 = v1151 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v752 = v995 + "/[tu]gg/=W,";
    var v334 = v752 + "/[tu]a[ctuy]/=Y,";
    return v334 + "/[tu][agcrsmv]a/=*";
  }
  var v753 = type$$26.toLowerCase();
  var v337 = v753 == "transl_table=23";
  if (v337) {
    var v1753 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1735 = v1753 + "/ga[tcuy]/=D,";
    var v1717 = v1735 + "/ga[agr]/=E,";
    var v1698 = v1717 + "/[tu][tu][tcuy]/=F,";
    var v1678 = v1698 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1654 = v1678 + "/ca[tcuy]/=H,";
    var v1630 = v1654 + "/a[tu][atcuwmhy]/=I,";
    var v1606 = v1630 + "/aa[agr]/=K,";
    var v1579 = v1606 + "/c[tu][acgturyswkmbdhvn]|[ctuy][tu]g/=L,";
    var v1550 = v1579 + "/a[tu]g/=M,";
    var v1517 = v1550 + "/aa[tucy]/=N,";
    var v1471 = v1517 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1408 = v1471 + "/ca[agr]/=Q,";
    var v1344 = v1408 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1267 = v1344 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1152 = v1267 + "/ac[acgturyswkmbdhvn]/=T,";
    var v996 = v1152 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v754 = v996 + "/[tu]gg/=W,";
    var v336 = v754 + "/[tu]a[ctuy]/=Y,";
    return v336 + "/[tu]a[agr]|[tu]ga|[tu][agtrwkd]a/=*";
  }
  return true;
}
function primerMap(theDocument) {
  var newDna = "";
  var title$$9 = "";
  var maxInput$$3 = 2E5;
  var v755 = testScript();
  var v338 = v755 == false;
  if (v338) {
    return false;
  }
  var restrictionSiteCollection;
  var forwardMatches;
  var reverseMatches;
  var v1409 = theDocument.forms;
  var v1345 = v1409[0];
  var v1268 = v1345.elements;
  var v1153 = v1268[7];
  var v997 = v1153.options;
  var v1410 = theDocument.forms;
  var v1346 = v1410[0];
  var v1269 = v1346.elements;
  var v1154 = v1269[7];
  var v998 = v1154.selectedIndex;
  var v756 = v997[v998];
  var v339 = v756.value;
  var geneticCode = getGeneticCodeString(v339);
  var restrictionSites = getRestrictionSiteString("standard");
  var v1411 = theDocument.forms;
  var v1347 = v1411[0];
  var v1270 = v1347.elements;
  var v1155 = v1270[0];
  var v999 = checkFormElement(v1155);
  var v757 = v999 == false;
  var v1001 = !v757;
  if (v1001) {
    var v1472 = theDocument.forms;
    var v1412 = v1472[0];
    var v1348 = v1412.elements;
    var v1271 = v1348[0];
    var v1156 = v1271.value;
    var v1000 = checkSequenceLength(v1156, maxInput$$3);
    v757 = v1000 == false;
  }
  var v340 = v757;
  if (v340) {
    return false;
  }
  introspect(JAM.policy.p15) {
    geneticCode = geneticCode.split(/,/);
  }
  var v758 = checkGeneticCode(geneticCode);
  var v341 = v758 == false;
  if (v341) {
    return false;
  }
  introspect(JAM.policy.p15) {
    restrictionSites = restrictionSites.split(/,/);
  }
  var v759 = checkRestPatterns(restrictionSites);
  var v342 = v759 == false;
  if (v342) {
    return false;
  }
  var isColor$$1;
  var v1473 = theDocument.forms;
  var v1413 = v1473[0];
  var v1349 = v1413.elements;
  var v1272 = v1349[10];
  var v1157 = v1272.options;
  var v1474 = theDocument.forms;
  var v1414 = v1474[0];
  var v1350 = v1414.elements;
  var v1273 = v1350[10];
  var v1158 = v1273.selectedIndex;
  var v1002 = v1157[v1158];
  var v760 = v1002.value;
  var v343 = v760 == "color";
  if (v343) {
    isColor$$1 = true;
  } else {
    isColor$$1 = false;
  }
  var v1274 = theDocument.forms;
  var v1159 = v1274[0];
  var v1003 = v1159.elements;
  var v761 = v1003[1];
  var v344 = v761.value;
  introspect(JAM.policy.p15) {
    var primers = v344.split(/,/)
  }
  var newPrimers = new Array;
  var primerSeq;
  var primerRe;
  var primerName;
  var matchArray$$2;
  var re$$3 = /\(([^\(]+)\)\s*([A-Za-z]+)/;
  var i$$11 = 0;
  var v762 = primers.length;
  var v349 = i$$11 < v762;
  for (;v349;) {
    var v763 = primers[i$$11];
    introspect(JAM.policy.p17) {
      var v348 = matchArray$$2 = re$$3.exec(v763)
    }
    if (v348) {
      primerName = matchArray$$2[1];
      var v1004 = matchArray$$2[2];
      var v764 = v1004.length;
      var v345 = v764 < 10;
      if (v345) {
        alert("Please enter primer sequences that are at least 10 bases long.");
        return false;
      }
      primerSeq = matchArray$$2[2];
      var v1005 = convertDegenerates(primerSeq);
      var v765 = "/" + v1005;
      var v346 = v765 + "/gi";
      primerRe = eval(v346);
      var v347 = new Primer(primerSeq, primerRe, primerName);
      introspect(JAM.policy.p17) {
        newPrimers.push(v347);
      }
    }
    i$$11++;
    var v766 = primers.length;
    v349 = i$$11 < v766;
  }
  _openWindow("Primer Map", isColor$$1);
  var v1475 = theDocument.forms;
  var v1415 = v1475[0];
  var v1351 = v1415.elements;
  var v1275 = v1351[8];
  var v1160 = v1275.options;
  var v1476 = theDocument.forms;
  var v1416 = v1476[0];
  var v1352 = v1416.elements;
  var v1276 = v1352[8];
  var v1161 = v1276.selectedIndex;
  var v1006 = v1160[v1161];
  var v767 = v1006.value;
  var v360 = v767 == "shown";
  if (v360) {
    var v350 = outputWindow.document;
    var v768 = '<span class="one">' + "cuts once";
    var v351 = v768 + "</span><br />\n";
    introspect(JAM.policy.p17) {
      v350.write(v351);
    }
    var v352 = outputWindow.document;
    var v769 = '<span class="two">' + "cuts twice";
    var v353 = v769 + "</span><br />\n";
    introspect(JAM.policy.p17) {
      v352.write(v353);
    }
    var v354 = outputWindow.document;
    introspect(JAM.policy.p10) {
      v354.write("\n");
    }
    var v355 = outputWindow.document;
    var v770 = '<span class="forward_primer">' + "&gt;&gt;&gt;forward primer";
    var v356 = v770 + "</span><br />\n";
    introspect(JAM.policy.p17) {
      v355.write(v356);
    }
    var v357 = outputWindow.document;
    var v771 = '<span class="reverse_primer">' + "&lt;&lt;&lt;reverse primer";
    var v358 = v771 + "</span><br />\n";
    introspect(JAM.policy.p17) {
      v357.write(v358);
    }
    var v359 = outputWindow.document;
    introspect(JAM.policy.p10) {
      v359.write("\n");
    }
  }
  var v1277 = theDocument.forms;
  var v1162 = v1277[0];
  var v1007 = v1162.elements;
  var v772 = v1007[0];
  var v361 = v772.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v361);
  i$$11 = 0;
  var v773 = arrayOfFasta$$1.length;
  var v395 = i$$11 < v773;
  for (;v395;) {
    var v362 = arrayOfFasta$$1[i$$11];
    newDna = getSequenceFromFasta(v362);
    var v363 = arrayOfFasta$$1[i$$11];
    title$$9 = getTitleFromFasta(v363);
    newDna = removeNonDna(newDna);
    openPre();
    var v364 = outputWindow.document;
    var v1477 = theDocument.forms;
    var v1417 = v1477[0];
    var v1353 = v1417.elements;
    var v1278 = v1353[9];
    var v1163 = v1278.options;
    var v1478 = theDocument.forms;
    var v1418 = v1478[0];
    var v1354 = v1418.elements;
    var v1279 = v1354[9];
    var v1164 = v1279.selectedIndex;
    var v1008 = v1163[v1164];
    var v774 = v1008.value;
    var v365 = getInfoFromTitleAndSequenceAndTopology(title$$9, newDna, v774);
    introspect(JAM.policy.p17) {
      v364.write(v365);
    }
    var v1479 = theDocument.forms;
    var v1419 = v1479[0];
    var v1355 = v1419.elements;
    var v1280 = v1355[8];
    var v1165 = v1280.options;
    var v1480 = theDocument.forms;
    var v1420 = v1480[0];
    var v1356 = v1420.elements;
    var v1281 = v1356[8];
    var v1166 = v1281.selectedIndex;
    var v1009 = v1165[v1166];
    var v775 = v1009.value;
    var v367 = v775 == "shown";
    if (v367) {
      var v1421 = theDocument.forms;
      var v1357 = v1421[0];
      var v1282 = v1357.elements;
      var v1167 = v1282[9];
      var v1010 = v1167.options;
      var v1422 = theDocument.forms;
      var v1358 = v1422[0];
      var v1283 = v1358.elements;
      var v1168 = v1283[9];
      var v1011 = v1168.selectedIndex;
      var v776 = v1010[v1011];
      var v366 = v776.value;
      restrictionSiteCollection = findRestrictionSites(newDna, restrictionSites, v366);
      restrictionSiteCollection.sortRestrictionSites();
    }
    var v1423 = theDocument.forms;
    var v1359 = v1423[0];
    var v1284 = v1359.elements;
    var v1169 = v1284[9];
    var v1012 = v1169.options;
    var v1424 = theDocument.forms;
    var v1360 = v1424[0];
    var v1285 = v1360.elements;
    var v1170 = v1285[9];
    var v1013 = v1170.selectedIndex;
    var v777 = v1012[v1013];
    var v368 = v777.value;
    forwardMatches = findMatches(newPrimers, newDna, v368, false);
    var v778 = complement(newDna);
    var v369 = reverse(v778);
    var v1425 = theDocument.forms;
    var v1361 = v1425[0];
    var v1286 = v1361.elements;
    var v1171 = v1286[9];
    var v1014 = v1171.options;
    var v1426 = theDocument.forms;
    var v1362 = v1426[0];
    var v1287 = v1362.elements;
    var v1172 = v1287[9];
    var v1015 = v1172.selectedIndex;
    var v779 = v1014[v1015];
    var v370 = v779.value;
    reverseMatches = findMatches(newPrimers, v369, v370, true);
    var j$$10 = 0;
    var v1016 = forwardMatches.matches;
    var v780 = v1016.length;
    var v377 = j$$10 < v780;
    for (;v377;) {
      var v781 = forwardMatches.matches;
      var v371 = v781[j$$10];
      var v1173 = forwardMatches.matches;
      var v1017 = v1173[j$$10];
      var v782 = v1017.position;
      var v1288 = forwardMatches.matches;
      var v1174 = v1288[j$$10];
      var v1018 = v1174.matchingText;
      var v783 = v1018.length;
      v371.position = v782 - v783;
      var v784 = forwardMatches.matches;
      var v372 = v784[j$$10];
      var v1175 = forwardMatches.matches;
      var v1019 = v1175[j$$10];
      var v785 = v1019.position;
      var v1289 = forwardMatches.matches;
      var v1176 = v1289[j$$10];
      var v1020 = v1176.matchingText;
      var v786 = v1020.length;
      v372.end = v785 + v786;
      var v1177 = forwardMatches.matches;
      var v1021 = v1177[j$$10];
      var v787 = v1021.position;
      var v374 = v787 < 0;
      if (v374) {
        var v788 = forwardMatches.matches;
        var v373 = v788[j$$10];
        var v1178 = forwardMatches.matches;
        var v1022 = v1178[j$$10];
        var v789 = v1022.position;
        var v790 = newDna.length;
        v373.position = v789 + v790;
      }
      var v1179 = forwardMatches.matches;
      var v1023 = v1179[j$$10];
      var v791 = v1023.end;
      var v792 = newDna.length;
      var v376 = v791 > v792;
      if (v376) {
        var v793 = forwardMatches.matches;
        var v375 = v793[j$$10];
        var v1180 = forwardMatches.matches;
        var v1024 = v1180[j$$10];
        var v794 = v1024.end;
        var v795 = newDna.length;
        v375.end = v794 - v795;
      }
      j$$10++;
      var v1025 = forwardMatches.matches;
      var v796 = v1025.length;
      v377 = j$$10 < v796;
    }
    j$$10 = 0;
    var v1026 = reverseMatches.matches;
    var v797 = v1026.length;
    var v384 = j$$10 < v797;
    for (;v384;) {
      var v798 = reverseMatches.matches;
      var v378 = v798[j$$10];
      var v799 = newDna.length;
      var v1181 = reverseMatches.matches;
      var v1027 = v1181[j$$10];
      var v800 = v1027.position;
      v378.position = v799 - v800;
      var v801 = reverseMatches.matches;
      var v379 = v801[j$$10];
      var v1182 = reverseMatches.matches;
      var v1028 = v1182[j$$10];
      var v802 = v1028.position;
      var v1290 = reverseMatches.matches;
      var v1183 = v1290[j$$10];
      var v1029 = v1183.matchingText;
      var v803 = v1029.length;
      v379.end = v802 + v803;
      var v1184 = reverseMatches.matches;
      var v1030 = v1184[j$$10];
      var v804 = v1030.position;
      var v381 = v804 < 0;
      if (v381) {
        var v805 = reverseMatches.matches;
        var v380 = v805[j$$10];
        var v1185 = reverseMatches.matches;
        var v1031 = v1185[j$$10];
        var v806 = v1031.position;
        var v807 = newDna.length;
        v380.position = v806 + v807;
      }
      var v1186 = reverseMatches.matches;
      var v1032 = v1186[j$$10];
      var v808 = v1032.end;
      var v809 = newDna.length;
      var v383 = v808 > v809;
      if (v383) {
        var v810 = reverseMatches.matches;
        var v382 = v810[j$$10];
        var v1187 = reverseMatches.matches;
        var v1033 = v1187[j$$10];
        var v811 = v1033.end;
        var v812 = newDna.length;
        v382.end = v811 - v812;
      }
      j$$10++;
      var v1034 = reverseMatches.matches;
      var v813 = v1034.length;
      v384 = j$$10 < v813;
    }
    forwardMatches.sortMatches();
    reverseMatches.sortMatches();
    var v1427 = theDocument.forms;
    var v1363 = v1427[0];
    var v1291 = v1363.elements;
    var v1188 = v1291[5];
    var v1035 = v1188.options;
    var v1428 = theDocument.forms;
    var v1364 = v1428[0];
    var v1292 = v1364.elements;
    var v1189 = v1292[5];
    var v1036 = v1189.selectedIndex;
    var v814 = v1035[v1036];
    var v385 = v814.value;
    var v1429 = theDocument.forms;
    var v1365 = v1429[0];
    var v1293 = v1365.elements;
    var v1190 = v1293[6];
    var v1037 = v1190.options;
    var v1430 = theDocument.forms;
    var v1366 = v1430[0];
    var v1294 = v1366.elements;
    var v1191 = v1294[6];
    var v1038 = v1191.selectedIndex;
    var v815 = v1037[v1038];
    var v386 = v815.value;
    layoutPrimerMap(newDna, geneticCode, restrictionSiteCollection, forwardMatches, reverseMatches, v385, v386);
    var v387 = outputWindow.document;
    introspect(JAM.policy.p10) {
      v387.write("\n");
    }
    closePre();
    var v1481 = theDocument.forms;
    var v1431 = v1481[0];
    var v1367 = v1431.elements;
    var v1295 = v1367[8];
    var v1192 = v1295.options;
    var v1482 = theDocument.forms;
    var v1432 = v1482[0];
    var v1368 = v1432.elements;
    var v1296 = v1368[8];
    var v1193 = v1296.selectedIndex;
    var v1039 = v1192[v1193];
    var v816 = v1039.value;
    var v390 = v816 == "shown";
    if (v390) {
      var v1433 = theDocument.forms;
      var v1369 = v1433[0];
      var v1297 = v1369.elements;
      var v1194 = v1297[9];
      var v1040 = v1194.options;
      var v1434 = theDocument.forms;
      var v1370 = v1434[0];
      var v1298 = v1370.elements;
      var v1195 = v1298[9];
      var v1041 = v1195.selectedIndex;
      var v817 = v1040[v1041];
      var v388 = v817.value;
      writeRestrictionSites(newDna, restrictionSites, v388);
      var v389 = outputWindow.document;
      introspect(JAM.policy.p10) {
        v389.write("<br />\n");
      }
    }
    writePrimerSites(newPrimers);
    var v391 = outputWindow.document;
    introspect(JAM.policy.p10) {
      v391.write("<br />\n<br />\n");
    }
    j$$10 = 0;
    var v818 = newPrimers.length;
    var v394 = j$$10 < v818;
    for (;v394;) {
      var v392 = newPrimers[j$$10];
      v392.hasForwardMatch = false;
      var v393 = newPrimers[j$$10];
      v393.hasReverseMatch = false;
      j$$10++;
      var v819 = newPrimers.length;
      v394 = j$$10 < v819;
    }
    i$$11++;
    var v820 = arrayOfFasta$$1.length;
    v395 = i$$11 < v820;
  }
  closeWindow();
  return true;
}
function writePrimerSites(primers$$1) {
  var backGroundClass$$1;
  var v396 = outputWindow.document;
  introspect(JAM.policy.p10) {
    v396.write('<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n');
  }
  var v397 = outputWindow.document;
  var v1196 = '<tr><td class="title" width="200px">' + "Primer:";
  var v1042 = v1196 + '</td><td class="title">';
  var v821 = v1042 + "Sequence:";
  var v398 = v821 + "</td></tr>\n";
  introspect(JAM.policy.p17) {
    v397.write(v398);
  }
  var i$$12 = 0;
  var v822 = primers$$1.length;
  var v404 = i$$12 < v822;
  for (;v404;) {
    var v1043 = primers$$1[i$$12];
    var v823 = v1043.hasForwardMatch;
    if (v823) {
      var v1044 = primers$$1[i$$12];
      v823 = v1044.hasReverseMatch;
    }
    var v401 = v823;
    if (v401) {
      backGroundClass$$1 = "many";
    } else {
      var v824 = primers$$1[i$$12];
      var v400 = v824.hasForwardMatch;
      if (v400) {
        backGroundClass$$1 = "forward_primer";
      } else {
        var v825 = primers$$1[i$$12];
        var v399 = v825.hasReverseMatch;
        if (v399) {
          backGroundClass$$1 = "reverse_primer";
        } else {
          backGroundClass$$1 = "none";
        }
      }
    }
    var v402 = outputWindow.document;
    var v1551 = '<tr><td class="' + backGroundClass$$1;
    var v1518 = v1551 + '">';
    var v1552 = primers$$1[i$$12];
    var v1519 = v1552.name;
    var v1483 = v1518 + v1519;
    var v1435 = v1483 + '</td><td class="';
    var v1371 = v1435 + backGroundClass$$1;
    var v1299 = v1371 + '">';
    var v1197 = v1299 + "5'-";
    var v1300 = primers$$1[i$$12];
    var v1198 = v1300.sequence;
    var v1045 = v1197 + v1198;
    var v826 = v1045 + "-3'";
    var v403 = v826 + "</td></tr>\n";
    introspect(JAM.policy.p17) {
      v402.write(v403);
    }
    i$$12++;
    var v827 = primers$$1.length;
    v404 = i$$12 < v827;
  }
  var v405 = outputWindow.document;
  introspect(JAM.policy.p10) {
    v405.write("</tbody></table>\n");
  }
  return true;
}
function layoutPrimerMap(dnaSequence$$3, geneticCode$$1, restrictionSiteCollection$$1, forwardMatches$$1, reverseMatches$$1, basesPerLine, readingFrame) {
  basesPerLine = parseInt(basesPerLine);
  var geneticCodeMatchExp$$2 = getGeneticCodeMatchExp(geneticCode$$1);
  var geneticCodeMatchResult$$2 = getGeneticCodeMatchResult(geneticCode$$1);
  var spaceString = "                                                                                                                                  ";
  var textLayout = new TextLayout;
  var v828 = readingFrame == "3";
  var v1046 = !v828;
  if (v1046) {
    v828 = readingFrame == "all_three";
  }
  var v407 = v828;
  if (v407) {
    var translation = new TranslationComponent;
    var v1199 = dnaSequence$$3.length;
    introspect(JAM.policy.p13) {
      var v1047 = dnaSequence$$3.substring(2, v1199)
    }
    var v829 = translate(v1047, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    var v406 = "  " + v829;
    introspect(JAM.policy.p17) {
      translation.setCharacters(v406);
    }
    introspect(JAM.policy.p17) {
      textLayout.addComponent(translation);
    }
  }
  var v830 = readingFrame == "2";
  var v1048 = !v830;
  if (v1048) {
    v830 = readingFrame == "all_three";
  }
  var v409 = v830;
  if (v409) {
    translation = new TranslationComponent;
    var v1200 = dnaSequence$$3.length;
    introspect(JAM.policy.p13) {
      var v1049 = dnaSequence$$3.substring(1, v1200)
    }
    var v831 = translate(v1049, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    var v408 = " " + v831;
    introspect(JAM.policy.p17) {
      translation.setCharacters(v408);
    }
    introspect(JAM.policy.p17) {
      textLayout.addComponent(translation);
    }
  }
  var v832 = readingFrame == "1";
  var v1050 = !v832;
  if (v1050) {
    v832 = readingFrame == "all_three";
  }
  var v411 = v832;
  if (v411) {
    translation = new TranslationComponent;
    var v410 = translate(dnaSequence$$3, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    introspect(JAM.policy.p17) {
      translation.setCharacters(v410);
    }
    introspect(JAM.policy.p17) {
      textLayout.addComponent(translation);
    }
  }
  var v413 = readingFrame == "uppercase";
  if (v413) {
    translation = new UppercaseTranslationComponent;
    var v412 = uppercaseTranslate(dnaSequence$$3, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    introspect(JAM.policy.p17) {
      translation.setCharacters(v412);
    }
    introspect(JAM.policy.p17) {
      textLayout.addComponent(translation);
    }
  }
  var dna = new DnaComponent;
  introspect(JAM.policy.p17) {
    dna.setCharacters(dnaSequence$$3);
  }
  introspect(JAM.policy.p17) {
    textLayout.addComponent(dna);
  }
  var ruler = new RulerComponent;
  introspect(JAM.policy.p17) {
    ruler.setCharacters(dnaSequence$$3);
  }
  ruler.buildRuler();
  introspect(JAM.policy.p17) {
    textLayout.addComponent(ruler);
  }
  dna = new DnaComponent;
  var v414 = complement(dnaSequence$$3);
  introspect(JAM.policy.p17) {
    dna.setCharacters(v414);
  }
  introspect(JAM.policy.p17) {
    textLayout.addComponent(dna);
  }
  var sitesInRange = new Array;
  var i$$13 = 0;
  var v833 = dnaSequence$$3.length;
  var v438 = i$$13 < v833;
  for (;v438;) {
    var v428 = restrictionSiteCollection$$1 != null;
    if (v428) {
      var v415 = i$$13 + basesPerLine;
      introspect(JAM.policy.p16) {
        sitesInRange = restrictionSiteCollection$$1.getSitesInRange(i$$13, v415);
      }
      sitesInRange.reverse();
      var j$$11 = 0;
      var v834 = sitesInRange.length;
      var v427 = j$$11 < v834;
      for (;v427;) {
        var v1051 = sitesInRange[j$$11];
        var v835 = v1051.numberOfCuts;
        var v426 = v835 == 1;
        if (v426) {
          var v416 = outputWindow.document;
          var v1484 = sitesInRange[j$$11];
          var v1436 = v1484.position;
          var v1372 = v1436 - i$$13;
          var v1301 = v1372 + 9;
          introspect(JAM.policy.p13) {
            var v1201 = spaceString.substring(0, v1301)
          }
          var v1052 = v1201 + '<span class="one">';
          var v1202 = sitesInRange[j$$11];
          var v1053 = v1202.label;
          var v836 = v1052 + v1053;
          var v417 = v836 + "</span>\n";
          introspect(JAM.policy.p17) {
            v416.write(v417);
          }
        } else {
          var v1054 = sitesInRange[j$$11];
          var v837 = v1054.numberOfCuts;
          var v425 = v837 == 2;
          if (v425) {
            var v418 = outputWindow.document;
            var v1485 = sitesInRange[j$$11];
            var v1437 = v1485.position;
            var v1373 = v1437 - i$$13;
            var v1302 = v1373 + 9;
            introspect(JAM.policy.p13) {
              var v1203 = spaceString.substring(0, v1302)
            }
            var v1055 = v1203 + '<span class="two">';
            var v1204 = sitesInRange[j$$11];
            var v1056 = v1204.label;
            var v838 = v1055 + v1056;
            var v419 = v838 + "</span>\n";
            introspect(JAM.policy.p17) {
              v418.write(v419);
            }
          } else {
            var v1057 = sitesInRange[j$$11];
            var v839 = v1057.numberOfCuts;
            var v424 = v839 == 3;
            if (v424) {
              var v420 = outputWindow.document;
              var v1486 = sitesInRange[j$$11];
              var v1438 = v1486.position;
              var v1374 = v1438 - i$$13;
              var v1303 = v1374 + 9;
              introspect(JAM.policy.p13) {
                var v1205 = spaceString.substring(0, v1303)
              }
              var v1058 = v1205 + '<span class="three">';
              var v1206 = sitesInRange[j$$11];
              var v1059 = v1206.label;
              var v840 = v1058 + v1059;
              var v421 = v840 + "</span>\n";
              introspect(JAM.policy.p17) {
                v420.write(v421);
              }
            } else {
              var v422 = outputWindow.document;
              var v1439 = sitesInRange[j$$11];
              var v1375 = v1439.position;
              var v1304 = v1375 - i$$13;
              var v1207 = v1304 + 9;
              introspect(JAM.policy.p13) {
                var v1060 = spaceString.substring(0, v1207)
              }
              var v1208 = sitesInRange[j$$11];
              var v1061 = v1208.label;
              var v841 = v1060 + v1061;
              var v423 = v841 + "\n";
              introspect(JAM.policy.p17) {
                v422.write(v423);
              }
            }
          }
        }
        j$$11++;
        var v842 = sitesInRange.length;
        v427 = j$$11 < v842;
      }
    }
    var v429 = i$$13 + basesPerLine;
    introspect(JAM.policy.p16) {
      sitesInRange = forwardMatches$$1.getMatchesInRange(i$$13, v429);
    }
    sitesInRange.reverse();
    j$$11 = 0;
    var v843 = sitesInRange.length;
    var v432 = j$$11 < v843;
    for (;v432;) {
      var v430 = outputWindow.document;
      var v1655 = sitesInRange[j$$11];
      var v1631 = v1655.position;
      var v1607 = v1631 - i$$13;
      var v1580 = v1607 + 9;
      introspect(JAM.policy.p13) {
        var v1553 = spaceString.substring(0, v1580)
      }
      var v1520 = v1553 + '<span class="forward_primer">';
      var v1487 = v1520 + "&gt;&gt;&gt;";
      var v1521 = sitesInRange[j$$11];
      var v1488 = v1521.primerName;
      var v1440 = v1487 + v1488;
      var v1376 = v1440 + "&gt;&gt;&gt;";
      var v1305 = v1376 + " ";
      var v1441 = sitesInRange[j$$11];
      var v1377 = v1441.position;
      var v1306 = v1377 + 1;
      var v1209 = v1305 + v1306;
      var v1062 = v1209 + " to ";
      var v1210 = sitesInRange[j$$11];
      var v1063 = v1210.end;
      var v844 = v1062 + v1063;
      var v431 = v844 + "</span>\n";
      introspect(JAM.policy.p17) {
        v430.write(v431);
      }
      j$$11++;
      var v845 = sitesInRange.length;
      v432 = j$$11 < v845;
    }
    var v433 = i$$13 + basesPerLine;
    introspect(JAM.policy.p16) {
      sitesInRange = reverseMatches$$1.getMatchesInRange(i$$13, v433);
    }
    sitesInRange.reverse();
    j$$11 = 0;
    var v846 = sitesInRange.length;
    var v436 = j$$11 < v846;
    for (;v436;) {
      var v434 = outputWindow.document;
      var v1656 = sitesInRange[j$$11];
      var v1632 = v1656.position;
      var v1608 = v1632 - i$$13;
      var v1581 = v1608 + 9;
      introspect(JAM.policy.p13) {
        var v1554 = spaceString.substring(0, v1581)
      }
      var v1522 = v1554 + '<span class="reverse_primer">';
      var v1489 = v1522 + "&lt;&lt;&lt;";
      var v1523 = sitesInRange[j$$11];
      var v1490 = v1523.primerName;
      var v1442 = v1489 + v1490;
      var v1378 = v1442 + "&lt;&lt;&lt;";
      var v1307 = v1378 + " ";
      var v1443 = sitesInRange[j$$11];
      var v1379 = v1443.position;
      var v1308 = v1379 + 1;
      var v1211 = v1307 + v1308;
      var v1064 = v1211 + " to ";
      var v1212 = sitesInRange[j$$11];
      var v1065 = v1212.end;
      var v847 = v1064 + v1065;
      var v435 = v847 + "</span>\n";
      introspect(JAM.policy.p17) {
        v434.write(v435);
      }
      j$$11++;
      var v848 = sitesInRange.length;
      v436 = j$$11 < v848;
    }
    var v437 = i$$13 + basesPerLine;
    introspect(JAM.policy.p16) {
      textLayout.writeLayout(i$$13, v437);
    }
    i$$13 = i$$13 + basesPerLine;
    var v849 = dnaSequence$$3.length;
    v438 = i$$13 < v849;
  }
  return true;
}
function translate(dnaSequence$$4, geneticCodeMatchExp$$3, geneticCodeMatchResult$$3) {
  function v2(str$$8, p1$$2, offset$$10, s$$4) {
    var v439 = " " + p1$$2;
    return v439 + " ";
  }
  introspect(JAM.policy.p16) {
    var v1066 = dnaSequence$$4.replace(/[^A-Za-z]/g, "")
  }
  var v850 = v1066.length;
  var v440 = v850 < 3;
  if (v440) {
    return "";
  }
  introspect(JAM.policy.p16) {
    dnaSequence$$4 = dnaSequence$$4.replace(/(...)/g, v2);
  }
  var i$$14 = 0;
  var v851 = geneticCodeMatchExp$$3.length;
  var v443 = i$$14 < v851;
  for (;v443;) {
    var v441 = geneticCodeMatchExp$$3[i$$14];
    var v442 = geneticCodeMatchResult$$3[i$$14];
    introspect(JAM.policy.p27) {
      dnaSequence$$4 = dnaSequence$$4.replace(v441, v442);
    }
    i$$14++;
    var v852 = geneticCodeMatchExp$$3.length;
    v443 = i$$14 < v852;
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
    var v1380 = " " + p1$$3;
    var v1309 = v1380 + p3;
    var v1213 = v1309 + p5;
    var v1067 = v1213 + " ";
    var v853 = v1067 + p2;
    var v444 = v853 + p4;
    return v444 + p6;
  }
  introspect(JAM.policy.p16) {
    dnaSequence$$5 = dnaSequence$$5.replace(/[a-z]/g, " ");
  }
  introspect(JAM.policy.p16) {
    var v1068 = dnaSequence$$5.replace(/[^A-Za-z]/g, "")
  }
  var v854 = v1068.length;
  var v445 = v854 < 3;
  if (v445) {
    return "";
  }
  introspect(JAM.policy.p16) {
    dnaSequence$$5 = dnaSequence$$5.replace(/([A-Z])(\s*)([A-Z])(\s*)([A-Z])(\s*)/g, v3);
  }
  introspect(JAM.policy.p16) {
    dnaSequence$$5 = dnaSequence$$5.replace(/\s\S{1,2}\s/g, "");
  }
  var i$$15 = 0;
  var v855 = geneticCodeMatchExp$$4.length;
  var v448 = i$$15 < v855;
  for (;v448;) {
    var v446 = geneticCodeMatchExp$$4[i$$15];
    var v447 = geneticCodeMatchResult$$4[i$$15];
    introspect(JAM.policy.p27) {
      dnaSequence$$5 = dnaSequence$$5.replace(v446, v447);
    }
    i$$15++;
    var v856 = geneticCodeMatchExp$$4.length;
    v448 = i$$15 < v856;
  }
  introspect(JAM.policy.p16) {
    dnaSequence$$5 = dnaSequence$$5.replace(/\S{3}/g, "X");
  }
  introspect(JAM.policy.p16) {
    dnaSequence$$5 = dnaSequence$$5.replace(/^\s/, "");
  }
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
  var matchArray$$3;
  var label;
  var timesFound$$1 = 0;
  var tempArray = new Array;
  var restrictionSiteCollection$$2 = new RestrictionSiteCollection;
  var v452 = dnaConformation$$1 == "circular";
  if (v452) {
    introspect(JAM.policy.p13) {
      var v449 = sequence$$18.substring(0, lookAhead$$1)
    }
    shiftValue$$1 = v449.length;
    var v1214 = sequence$$18.length;
    var v1069 = v1214 - lookAhead$$1;
    var v1070 = sequence$$18.length;
    introspect(JAM.policy.p27) {
      var v857 = sequence$$18.substring(v1069, v1070)
    }
    var v450 = v857 + sequence$$18;
    introspect(JAM.policy.p13) {
      var v451 = sequence$$18.substring(0, lookAhead$$1)
    }
    sequence$$18 = v450 + v451;
    lowerLimit$$1 = 0 + shiftValue$$1;
    upperLimit$$1 = upperLimit$$1 + shiftValue$$1;
  }
  var i$$16 = 0;
  var v858 = arrayOfItems$$2.length;
  var v463 = i$$16 < v858;
  for (;v463;) {
    var v859 = arrayOfItems$$2[i$$16];
    introspect(JAM.policy.p15) {
      var v453 = v859.match(/\/.+\//)
    }
    matchExp$$2 = v453 + "gi";
    matchPosition$$1 = 0;
    matchExp$$2 = eval(matchExp$$2);
    var v1215 = arrayOfItems$$2[i$$16];
    introspect(JAM.policy.p15) {
      var v1071 = v1215.match(/\)\D*\d+/)
    }
    var v860 = v1071.toString();
    introspect(JAM.policy.p16) {
      var v454 = v860.replace(/\)\D*/, "")
    }
    cutDistance$$1 = parseFloat(v454);
    var v1072 = arrayOfItems$$2[i$$16];
    introspect(JAM.policy.p15) {
      var v861 = v1072.match(/\([^\(]+\)/)
    }
    var v455 = v861.toString();
    introspect(JAM.policy.p16) {
      label = v455.replace(/\(|\)/g, "");
    }
    introspect(JAM.policy.p17) {
      var v459 = matchArray$$3 = matchExp$$2.exec(sequence$$18)
    }
    for (;v459;) {
      matchPosition$$1 = matchExp$$2.lastIndex;
      matchPosition$$1 = matchPosition$$1 - cutDistance$$1;
      var v862 = matchPosition$$1 >= lowerLimit$$1;
      if (v862) {
        v862 = matchPosition$$1 < upperLimit$$1;
      }
      var v457 = v862;
      if (v457) {
        timesFound$$1++;
        var v1073 = label + " ";
        var v1216 = matchPosition$$1 - shiftValue$$1;
        var v1074 = v1216 + 1;
        var v863 = v1073 + v1074;
        var v864 = matchPosition$$1 - shiftValue$$1;
        var v456 = new RestrictionSite(v863, v864);
        introspect(JAM.policy.p17) {
          tempArray.push(v456);
        }
      }
      var v865 = matchExp$$2.lastIndex;
      var v1075 = RegExp.lastMatch;
      var v866 = v1075.length;
      var v458 = v865 - v866;
      matchExp$$2.lastIndex = v458 + 1;
      introspect(JAM.policy.p17) {
        v459 = matchArray$$3 = matchExp$$2.exec(sequence$$18);
      }
    }
    var j$$12 = 0;
    var v867 = tempArray.length;
    var v462 = j$$12 < v867;
    for (;v462;) {
      var v460 = tempArray[j$$12];
      v460.numberOfCuts = timesFound$$1;
      var v461 = tempArray[j$$12];
      introspect(JAM.policy.p17) {
        restrictionSiteCollection$$2.addRestrictionSite(v461);
      }
      j$$12++;
      var v868 = tempArray.length;
      v462 = j$$12 < v868;
    }
    timesFound$$1 = 0;
    tempArray = new Array;
    i$$16++;
    var v869 = arrayOfItems$$2.length;
    v463 = i$$16 < v869;
  }
  return restrictionSiteCollection$$2;
}
function findMatches(primers$$2, sequence$$19, topology$$1, isReverseStrand) {
  var matchArray$$4;
  var matchPosition$$2;
  var matchCollection = new MatchCollection;
  var re$$4;
  var originalLength$$1 = sequence$$19.length;
  var v484 = topology$$1 == "circular";
  if (v484) {
    var lookAhead$$2 = 50;
    introspect(JAM.policy.p13) {
      var v464 = sequence$$19.substring(0, lookAhead$$2)
    }
    var shiftValue$$2 = v464.length;
    var v465 = sequence$$19.length;
    var upperLimit$$2 = v465 + shiftValue$$2;
    var v1217 = sequence$$19.length;
    var v1076 = v1217 - lookAhead$$2;
    var v1077 = sequence$$19.length;
    introspect(JAM.policy.p27) {
      var v870 = sequence$$19.substring(v1076, v1077)
    }
    var v466 = v870 + sequence$$19;
    introspect(JAM.policy.p13) {
      var v467 = sequence$$19.substring(0, lookAhead$$2)
    }
    sequence$$19 = v466 + v467;
    var lowerLimit$$2 = 0 + shiftValue$$2;
    var i$$17 = 0;
    var v871 = primers$$2.length;
    var v476 = i$$17 < v871;
    for (;v476;) {
      var v468 = primers$$2[i$$17];
      re$$4 = v468.re;
      introspect(JAM.policy.p17) {
        var v475 = matchArray$$4 = re$$4.exec(sequence$$19)
      }
      for (;v475;) {
        matchPosition$$2 = re$$4.lastIndex;
        var v872 = matchPosition$$2 >= lowerLimit$$2;
        if (v872) {
          v872 = matchPosition$$2 < upperLimit$$2;
        }
        var v473 = v872;
        if (v473) {
          matchPosition$$2 = matchPosition$$2 - shiftValue$$2;
          var v469 = matchPosition$$2 == 0;
          if (v469) {
            matchPosition$$2 = originalLength$$1;
          }
          var v1078 = primers$$2[i$$17];
          var v873 = v1078.name;
          var v874 = matchArray$$4[0];
          var v470 = new Match(v873, v874, matchPosition$$2);
          introspect(JAM.policy.p17) {
            matchCollection.addMatch(v470);
          }
          if (isReverseStrand) {
            var v471 = primers$$2[i$$17];
            v471.hasReverseMatch = true;
          } else {
            var v472 = primers$$2[i$$17];
            v472.hasForwardMatch = true;
          }
        }
        var v875 = re$$4.lastIndex;
        var v1079 = RegExp.lastMatch;
        var v876 = v1079.length;
        var v474 = v875 - v876;
        re$$4.lastIndex = v474 + 1;
        introspect(JAM.policy.p17) {
          v475 = matchArray$$4 = re$$4.exec(sequence$$19);
        }
      }
      i$$17++;
      var v877 = primers$$2.length;
      v476 = i$$17 < v877;
    }
  } else {
    i$$17 = 0;
    var v878 = primers$$2.length;
    var v483 = i$$17 < v878;
    for (;v483;) {
      var v477 = primers$$2[i$$17];
      re$$4 = v477.re;
      introspect(JAM.policy.p17) {
        var v482 = matchArray$$4 = re$$4.exec(sequence$$19)
      }
      for (;v482;) {
        matchPosition$$2 = re$$4.lastIndex;
        var v1080 = primers$$2[i$$17];
        var v879 = v1080.name;
        var v880 = matchArray$$4[0];
        var v478 = new Match(v879, v880, matchPosition$$2);
        introspect(JAM.policy.p17) {
          matchCollection.addMatch(v478);
        }
        if (isReverseStrand) {
          var v479 = primers$$2[i$$17];
          v479.hasReverseMatch = true;
        } else {
          var v480 = primers$$2[i$$17];
          v480.hasForwardMatch = true;
        }
        var v881 = re$$4.lastIndex;
        var v1081 = RegExp.lastMatch;
        var v882 = v1081.length;
        var v481 = v881 - v882;
        re$$4.lastIndex = v481 + 1;
        introspect(JAM.policy.p17) {
          v482 = matchArray$$4 = re$$4.exec(sequence$$19);
        }
      }
      i$$17++;
      var v883 = primers$$2.length;
      v483 = i$$17 < v883;
    }
  }
  return matchCollection;
}
function writeLayout(start$$4, stop) {
  var i$$18 = 0;
  var v1082 = this.components;
  var v884 = v1082.length;
  var v486 = i$$18 < v884;
  for (;v486;) {
    var v885 = this.components;
    var v485 = v885[i$$18];
    introspect(JAM.policy.p27) {
      v485.writeLayoutComponent(start$$4, stop);
    }
    i$$18++;
    var v1083 = this.components;
    var v886 = v1083.length;
    v486 = i$$18 < v886;
  }
  return;
}
function addComponent(component) {
  var v487 = this.components;
  introspect(JAM.policy.p17) {
    v487.push(component);
  }
  return;
}
function TextLayout() {
  var v1852 = new Array;
  this.components = v1852;
  return;
}
function writeLayoutComponent(start$$5, stop$$1) {
  return;
}
function setCharacters(text$$14) {
  introspect(JAM.policy.p15) {
    var v887 = text$$14.search(/./)
  }
  var v488 = v887 != -1;
  if (v488) {
    introspect(JAM.policy.p15) {
      var v1853 = text$$14.match(/./g)
    }
    this.characters = v1853;
  }
  return;
}
function isRoom(start$$6, stop$$2) {
  var v489 = this.characters;
  introspect(JAM.policy.p27) {
    var rangeToCheck = v489.slice(start$$6, stop$$2)
  }
  introspect(JAM.policy.p10) {
    rangeToCheck = rangeToCheck.join("");
  }
  introspect(JAM.policy.p15) {
    var v888 = rangeToCheck.search(/\w/)
  }
  var v490 = v888 == -1;
  if (v490) {
    return true;
  } else {
    return false;
  }
  return;
}
function LayoutComponent() {
  var v1854 = new Array;
  this.characters = v1854;
  this.positionLabel = 1;
  return;
}
function TranslationComponent() {
  var v1855 = new Array;
  this.characters = v1855;
  this.positionLabel = 1;
  return;
}
function UppercaseTranslationComponent() {
  var v1856 = new Array;
  this.characters = v1856;
  this.positionLabel = 1;
  return;
}
function DnaComponent() {
  var v1857 = new Array;
  this.characters = v1857;
  this.positionLabel = 1;
  return;
}
function RulerComponent() {
  var v1858 = new Array;
  this.characters = v1858;
  this.positionLabel = 1;
  return;
}
function buildRuler() {
  function v4(str$$12, p1$$6, offset$$14, s$$8) {
    var ruler$$1 = count$$3 + spacing;
    var v491 = count$$3 == 0;
    if (v491) {
      ruler$$1 = spacing;
    }
    count$$3 = count$$3 + 10;
    introspect(JAM.policy.p13) {
      return ruler$$1.substring(0, 10);
    }
  }
  var v492 = this.characters;
  introspect(JAM.policy.p10) {
    var sequence$$20 = v492.join("")
  }
  var count$$3 = 0;
  var spacing = "         ";
  introspect(JAM.policy.p16) {
    sequence$$20 = sequence$$20.replace(/(.{1,10})/g, v4);
  }
  introspect(JAM.policy.p15) {
    var v1859 = sequence$$20.match(/./g)
  }
  this.characters = v1859;
  return;
}
function RestrictionSite(label$$1, position) {
  this.label = label$$1;
  this.position = position;
  return;
}
function addRestrictionSite(restrictionSite) {
  var v493 = this.restrictionSites;
  introspect(JAM.policy.p17) {
    v493.push(restrictionSite);
  }
  return;
}
function sortRestrictionSites() {
  var v494 = this.restrictionSites;
  introspect(JAM.policy.p17) {
    v494.sort(restrictionSiteSorter);
  }
  return;
}
function getSitesInRange(start$$11, stop$$7) {
  var arrayToReturn = new Array;
  var v889 = this.restrictionSites;
  var v495 = v889.length;
  var i$$19 = v495 - 1;
  var v498 = i$$19 >= 0;
  for (;v498;) {
    var v1310 = this.restrictionSites;
    var v1218 = v1310[i$$19];
    var v1084 = v1218.position;
    var v890 = v1084 >= start$$11;
    if (v890) {
      var v1311 = this.restrictionSites;
      var v1219 = v1311[i$$19];
      var v1085 = v1219.position;
      v890 = v1085 < stop$$7;
    }
    var v497 = v890;
    if (v497) {
      var v891 = this.restrictionSites;
      var v496 = v891.pop();
      introspect(JAM.policy.p17) {
        arrayToReturn.push(v496);
      }
    } else {
      break;
    }
    i$$19--;
    v498 = i$$19 >= 0;
  }
  return arrayToReturn;
}
function RestrictionSiteCollection() {
  var v1860 = new Array;
  this.restrictionSites = v1860;
  return;
}
function restrictionSiteSorter(a, b) {
  var v892 = a.position;
  var v893 = b.position;
  var v499 = v892 < v893;
  if (v499) {
    return 1;
  }
  var v894 = a.position;
  var v895 = b.position;
  var v500 = v894 > v895;
  if (v500) {
    return-1;
  } else {
    return 0;
  }
  return;
}
function Primer(sequence$$21, re$$5, name$$30) {
  this.sequence = sequence$$21;
  this.re = re$$5;
  this.name = name$$30;
  this.hasForwardMatch = false;
  this.hasReverseMatch = false;
  return;
}
function Match(primerName$$1, matchingText, position$$1) {
  this.primerName = primerName$$1;
  this.matchingText = matchingText;
  this.position = position$$1;
  return;
}
function addMatch(match) {
  var v501 = this.matches;
  introspect(JAM.policy.p17) {
    v501.push(match);
  }
  return;
}
function sortMatches() {
  var v502 = this.matches;
  introspect(JAM.policy.p17) {
    v502.sort(matchSorter);
  }
  return;
}
function getMatchesInRange(start$$12, stop$$8) {
  var arrayToReturn$$1 = new Array;
  var v896 = this.matches;
  var v503 = v896.length;
  var i$$20 = v503 - 1;
  var v506 = i$$20 >= 0;
  for (;v506;) {
    var v1312 = this.matches;
    var v1220 = v1312[i$$20];
    var v1086 = v1220.position;
    var v897 = v1086 >= start$$12;
    if (v897) {
      var v1313 = this.matches;
      var v1221 = v1313[i$$20];
      var v1087 = v1221.position;
      v897 = v1087 < stop$$8;
    }
    var v505 = v897;
    if (v505) {
      var v898 = this.matches;
      var v504 = v898.pop();
      introspect(JAM.policy.p17) {
        arrayToReturn$$1.push(v504);
      }
    } else {
      break;
    }
    i$$20--;
    v506 = i$$20 >= 0;
  }
  return arrayToReturn$$1;
}
function MatchCollection() {
  var v1861 = new Array;
  this.matches = v1861;
  return;
}
function matchSorter(a$$1, b$$1) {
  var v899 = a$$1.position;
  var v900 = b$$1.position;
  var v507 = v899 < v900;
  if (v507) {
    return 1;
  }
  var v901 = a$$1.position;
  var v902 = b$$1.position;
  var v508 = v901 > v902;
  if (v508) {
    return-1;
  } else {
    return 0;
  }
  return;
}
new TextLayout;
var v509 = TextLayout.prototype;
v509.writeLayout = writeLayout;
var v510 = TextLayout.prototype;
v510.addComponent = addComponent;
new LayoutComponent;
var v511 = LayoutComponent.prototype;
v511.writeLayoutComponent = writeLayoutComponent;
var v512 = LayoutComponent.prototype;
v512.setCharacters = setCharacters;
var v513 = LayoutComponent.prototype;
v513.isRoom = isRoom;
var v514 = TranslationComponent;
var v1862 = new LayoutComponent;
v514.prototype = v1862;
var v515 = TranslationComponent.prototype;
v515.writeLayoutComponent = v5;
var v516 = UppercaseTranslationComponent;
var v1863 = new LayoutComponent;
v516.prototype = v1863;
var v517 = UppercaseTranslationComponent.prototype;
v517.writeLayoutComponent = v6;
var v518 = DnaComponent;
var v1864 = new LayoutComponent;
v518.prototype = v1864;
var v519 = DnaComponent.prototype;
v519.writeLayoutComponent = v7;
var v520 = RulerComponent;
var v1865 = new LayoutComponent;
v520.prototype = v1865;
var v521 = RulerComponent.prototype;
v521.writeLayoutComponent = v10;
new RulerComponent;
var v522 = RulerComponent.prototype;
v522.buildRuler = buildRuler;
new RestrictionSiteCollection;
var v523 = RestrictionSiteCollection.prototype;
v523.addRestrictionSite = addRestrictionSite;
var v524 = RestrictionSiteCollection.prototype;
v524.sortRestrictionSites = sortRestrictionSites;
var v525 = RestrictionSiteCollection.prototype;
v525.getSitesInRange = getSitesInRange;
new MatchCollection;
var v526 = MatchCollection.prototype;
v526.addMatch = addMatch;
var v527 = MatchCollection.prototype;
v527.sortMatches = sortMatches;
var v528 = MatchCollection.prototype;
v528.getMatchesInRange = getMatchesInRange;
document.onload = v11;
introspect(JAM.policy.p10) {
  var v529 = document.getElementById("submitbtn")
}
v529.onclick = v12;
introspect(JAM.policy.p10) {
  var v530 = document.getElementById("clearbtn")
}
v530.onclick = v13
